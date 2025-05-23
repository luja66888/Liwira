document.addEventListener('DOMContentLoaded', () => {
    const menuToggle =
document.querySelector('.menu__toggle');
    const navLinks =
document.querySelector('.nav__links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    });