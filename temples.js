// Hamburger Menu Toggle for Mobile View
document.getElementById("hamburger").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
    this.textContent = this.textContent === '✕' ? '☰' : '✕'; // Toggle between hamburger and 'X'
});

// Set current year and last modified date in the footer
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

const lastModifiedSpan = document.getElementById('lastModified');
lastModifiedSpan.textContent = document.lastModified;
