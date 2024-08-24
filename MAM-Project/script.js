document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Search Bar Toggle for Mobile
    const searchToggle = document.getElementById('search-toggle');
    const searchBar = document.querySelector('.search-bar');

    searchToggle.addEventListener('click', () => {
        searchBar.classList.toggle('active');
    });

    // Add search box
    const header = document.querySelector('header .container');
    const searchBox = document.createElement('div');
    searchBox.classList.add('search-box');
    searchBox.innerHTML = `
        <input type="text" placeholder="Search...">
        <button type="button"><i class="fas fa-search"></i></button>
    `;
    header.appendChild(searchBox);

    // Search functionality
    const searchInput = searchBox.querySelector('input');
    const searchButton = searchBox.querySelector('button');

    searchButton.addEventListener('click', () => {
        performSearch(searchInput.value);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });

    function performSearch(query) {
        // Implement your search logic here
        console.log('Searching for:', query);
        // You can add AJAX call or any other search implementation
    }
});
