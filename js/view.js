class View {
    constructor() {
        this.gallery = document.getElementById("gallery");
        this.category = document.getElementById("category");
        this.search = document.getElementById("search");
        this.pagination = document.getElementById("pagination");
        this.prevBtn = document.getElementById("prev");
        this.nextBtn = document.getElementById("next");
        this.menu = document.querySelector(".menu");
        this.thumbnailContainer = document.querySelector(".thumbnail");
        
        this.currentIndex = 0;
    }

    bindFilter(handler) {
        this.search.addEventListener("input", () => handler());
    }

    bindNavigation(prevHandler, nextHandler, thumbHandler) {
        this.prevBtn.addEventListener("click", prevHandler);
        this.nextBtn.addEventListener("click", nextHandler);
        
        this.thumbnailContainer.addEventListener("click", (e) => {
            const thumb = e.target.closest('.thumb-item');
            if (thumb) {
                thumbHandler(parseInt(thumb.dataset.index));
            }
        });
    }

    bindCategoryClick(handler) {
        this.category.addEventListener("click", (e) => {
            if (e.target.tagName === "LI" && e.target.dataset.category) {
                this.category.querySelectorAll('li').forEach(li => li.classList.remove('active'));
                e.target.classList.add('active');
                handler(e.target.dataset.category);
            }
        });
    }

    bindThumbPagination(prevHandler, nextHandler) {
        const prev = document.getElementById("thumbPrev");
        const next = document.getElementById("thumbNext");
    
        if (prev && next) {
            prev.addEventListener("click", prevHandler);
            next.addEventListener("click", nextHandler);
        }
    }

    renderGallery(images) {
        this.gallery.innerHTML = "";
        
        images.forEach((img, index) => {
            const item = document.createElement("div");
            item.className = `item ${index === 0 ? 'active' : ''}`;
            item.innerHTML = `
                <img src="${img.src}" alt="${img.title}">
                <div class="content">
                    <h2>${img.title}</h2>
                    <p>${img.category}</p>
                </div>
            `;
            this.gallery.appendChild(item);
        });
    }

    renderThumbnails(images, offset = 0) {
        this.thumbnailContainer.innerHTML = "";
        
        images.forEach((img, index) => {
            const thumb = document.createElement("div");
            const globalIndex = index + offset;
            thumb.className = `thumb-item ${globalIndex === this.currentIndex ? 'active' : ''}`;
            thumb.dataset.index = globalIndex;
            thumb.innerHTML = `
                <img src="${img.src}" alt="${img.title}">
                <div class="thumb-content">
                    <span>${img.title}</span>
                </div>
            `;
            this.thumbnailContainer.appendChild(thumb);
        });
    }

    updateActiveImage(index, totalImages) {
        document.querySelectorAll('.slider .item').forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        
        document.querySelectorAll('.thumb-item').forEach((thumb) => {
            thumb.classList.toggle('active', parseInt(thumb.dataset.index) === index);
        });
        
        this.currentIndex = index;
        
        this.prevBtn.disabled = totalImages <= 1;
        this.nextBtn.disabled = totalImages <= 1;
    }

    updateActiveCategory(activeCategory) {
        const categoryItems = this.menu.querySelectorAll('li[data-category]');

        categoryItems.forEach(item => {
            item.classList.remove('active');
        });

        const activeItem = this.menu.querySelector(`li[data-category="${activeCategory}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }

    show() {
        document.querySelector('.slider').style.display = 'block';
        document.querySelector('.arrows').style.display = 'flex';
        document.querySelector('.thumb-wrapper').style.display = 'flex';
        
        this.pagination.style.display = 'none';
    }

    hidePagination() {
        this.pagination.style.display = 'none';
    }
    
    burger() {
        const hamburger = document.getElementById('hamburger');
        const menu = document.getElementById('category');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
        });
    }
}