'use strict';

/**
 * navbar toggle
 */

// Selecting necessary elements
const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

// Function to toggle navbar visibility
const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active"); // Toggles active class for toggle button
  navbar.classList.toggle("active"); // Toggles active class for navbar
  overlay.classList.toggle("active"); // Toggles active class for overlay
}

// Event listeners for toggling navbar visibility
navToggleBtn.addEventListener("click", navToggleFunc); // Click event for toggle button
overlay.addEventListener("click", navToggleFunc); // Click event for overlay

// Event listeners for closing navbar when a nav link is clicked
for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc); // Click event for each nav link
}



/**
 * header active on scroll
 */

// Selecting header element
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active") // Adds active class if scrolled more than 10px
    : header.classList.remove("active"); // Removes active class if scrolled less than 10px
});
