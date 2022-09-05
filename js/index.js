let nav = document.querySelector('nav');
document.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        nav.classList.add('fixed');
        nav.style.width = '100%';
    } else {
        nav.classList.remove('fixed');
    }
});