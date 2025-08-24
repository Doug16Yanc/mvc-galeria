document.addEventListener('DOMContentLoaded', () => {

    const model = new Model();
  
    const view = new View();
  
    const controller = new Controller(model, view);

    document.addEventListener('DOMContentLoaded', function() {
      const hamburger = document.getElementById('hamburger');
      const header = document.getElementById('header');
      
      hamburger.classList.remove('active');
      header.classList.remove('menu-open');
      
      hamburger.addEventListener('click', function() {
          this.classList.toggle('active');
          header.classList.toggle('menu-open');
      });
      
      const menuItems = document.querySelectorAll('.menu li');
      menuItems.forEach(item => {
          item.addEventListener('click', function() {
              if (window.innerWidth <= 768) {
                  hamburger.classList.remove('active');
                  header.classList.remove('menu-open');
              }
          });
      });
      
      document.addEventListener('click', function(event) {
          if (window.innerWidth <= 768 && 
              header.classList.contains('menu-open') &&
              !event.target.closest('.menu-container') &&
              !event.target.closest('.hamburger')) {
              hamburger.classList.remove('active');
              header.classList.remove('menu-open');
          }
      });
  });
});