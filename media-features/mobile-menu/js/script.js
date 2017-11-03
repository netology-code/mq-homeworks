(function() {
  "use strict"

  class Menu { 
    constructor(domNode) {
      this.menu = domNode;
      this.menuButton = this.menu.querySelector('.js-menu__button');
      this.menuButton.addEventListener('click', this.toggle.bind(this));
    } 

    toggle() {
      //console.log(this);
      return this.menu.classList.toggle('js-menu_active');
    }
  }

  document.querySelectorAll('.js-menu').forEach(item => { 
    new Menu(item);
  });  
})();