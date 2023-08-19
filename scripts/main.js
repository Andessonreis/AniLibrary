const menuIcon = document.querySelector('.menu-icon');
const cancelIcon = document.querySelector('.cancel-icon');
const navItems = document.querySelector('.nav-items');
const searchIcon = document.querySelector('.search-icon');
const searchForm = document.querySelector('nav form');

menuIcon.addEventListener('click', () => {
    navItems.classList.add('active');
    searchForm.classList.add('active');
    menuIcon.classList.add('hide');
    cancelIcon.classList.add('show');
});

cancelIcon.addEventListener('click', () => {
    navItems.classList.remove('active');
    searchForm.classList.remove('active');
    menuIcon.classList.remove('hide');
    cancelIcon.classList.remove('show');
});

searchIcon.addEventListener('click', () => {
    searchForm.classList.toggle('active');
    searchIcon.classList.toggle('hide');
});

document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.matches('.search-icon') && !target.matches('.search-data')) {
        searchForm.classList.remove('active');
        searchIcon.classList.remove('hide');
    }
});
