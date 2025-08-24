class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.currentCategory = 'Astronomia';
        this.searchTerm = '';
        this.images = [];
        this.currentIndex = 0;
        this.thumbsPerPage = 4;
        this.currentThumbPage = 0;

        this.initialize();
    }

    initialize() {
        this.view.bindFilter(this.handleFilter.bind(this));
        this.view.bindNavigation(
            this.prevImage.bind(this),
            this.nextImage.bind(this),
            this.goToImage.bind(this)
        );
        this.view.bindCategoryClick(this.handleCategoryClick.bind(this));
        this.view.bindThumbPagination(
            this.prevThumbPage.bind(this),
            this.nextThumbPage.bind(this)
        );
        
        this.view.hidePagination();
        this.loadImages();
        
        this.startAutoPlay();
    }

    handleFilter() {
        this.searchTerm = this.view.search.value;
        this.currentThumbPage = 0;
        this.loadImages();
    }

    handleCategoryClick(category) {
        this.currentCategory = category;
        this.currentThumbPage = 0; 
        this.loadImages();
    }

    loadImages() {
        this.images = this.model.filter(this.currentCategory, this.searchTerm);
        this.currentIndex = 0;
        
        if (this.images.length > 0) {
            this.view.renderGallery(this.images);
            this.updateThumbnails();
            this.view.updateActiveImage(0, this.images.length);
            this.view.show();
        } else {
            this.showNoResults();
        }
    }

    updateThumbnails() {
        const start = this.currentThumbPage * this.thumbsPerPage;
        const end = start + this.thumbsPerPage;
        const visibleThumbs = this.images.slice(start, end);
        this.view.renderThumbnails(visibleThumbs, start);

        const thumbPrev = document.getElementById('thumbPrev');
        const thumbNext = document.getElementById('thumbNext');
        thumbPrev.style.display = this.currentThumbPage === 0 ? 'none' : 'block';
        thumbNext.style.display = end >= this.images.length ? 'none' : 'block';
    }

    prevThumbPage() {
        if (this.currentThumbPage > 0) {
            this.currentThumbPage--;
            this.updateThumbnails();
        }
    }

    nextThumbPage() {
        if ((this.currentThumbPage + 1) * this.thumbsPerPage < this.images.length) {
            this.currentThumbPage++;
            this.updateThumbnails();
        }
    }

    prevImage() {
        if (this.images.length <= 1) return;
        
        this.currentIndex = this.currentIndex === 0 
            ? this.images.length - 1 
            : this.currentIndex - 1;
        
        const thumbPage = Math.floor(this.currentIndex / this.thumbsPerPage);
        if (thumbPage !== this.currentThumbPage) {
            this.currentThumbPage = thumbPage;
            this.updateThumbnails();
        }
        
        this.view.updateActiveImage(this.currentIndex, this.images.length);
        this.restartAutoPlay();
    }

    nextImage() {
        if (this.images.length <= 1) return;
        
        this.currentIndex = this.currentIndex === this.images.length - 1 
            ? 0 
            : this.currentIndex + 1;
        
        const thumbPage = Math.floor(this.currentIndex / this.thumbsPerPage);
        if (thumbPage !== this.currentThumbPage) {
            this.currentThumbPage = thumbPage;
            this.updateThumbnails();
        }
        
        this.view.updateActiveImage(this.currentIndex, this.images.length);
        this.restartAutoPlay();
    }

    goToImage(index) {
        if (index >= 0 && index < this.images.length) {
            this.currentIndex = index;
            const thumbPage = Math.floor(this.currentIndex / this.thumbsPerPage);
            if (thumbPage !== this.currentThumbPage) {
                this.currentThumbPage = thumbPage;
                this.updateThumbnails();
            }
            this.view.updateActiveImage(this.currentIndex, this.images.length);
            this.restartAutoPlay();
        }
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            if (this.images.length > 1) {
                this.nextImage();
            }
        }, 5000);
    }

    restartAutoPlay() {
        clearInterval(this.autoPlayInterval);
        this.startAutoPlay();
    }

    showNoResults() {
        this.view.gallery.innerHTML = `
            <div class="no-results">
                <h2>Nenhuma imagem encontrada</h2>
                <p>Tente outra categoria ou termo de busca</p>
            </div>
        `;
        this.view.thumbnailContainer.innerHTML = '';
        this.view.hidePagination();
    }

    destroy() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}