const menu_button = document.querySelector('.hamburger');

menu_button.addEventListener('click', function() {
    this.classList.toggle('is-active');
})