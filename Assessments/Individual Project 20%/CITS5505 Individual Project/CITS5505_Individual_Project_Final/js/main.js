/*
 * main.js — Shared JavaScript for all pages
 *
 * Features:
 *   1. Mobile hamburger menu toggle
 *   2. Highlight the current page's nav link
 */

document.addEventListener("DOMContentLoaded", function () {

  // ---- 1. Mobile Menu Toggle ----
  var toggle = document.querySelector(".site-nav__toggle");
  var mobileMenu = document.querySelector(".site-nav__mobile-menu");

  if (toggle && mobileMenu) {
    toggle.addEventListener("click", function () {
      // Toggle the "is-open" class to show/hide mobile menu
      var isOpen = mobileMenu.classList.toggle("is-open");
      // Update aria-expanded for screen readers
      toggle.setAttribute("aria-expanded", isOpen);
      // Swap the icon between "menu" and "close"
      var icon = toggle.querySelector(".material-symbols-outlined");
      if (icon) {
        icon.textContent = isOpen ? "close" : "menu";
      }
    });
  }

  // ---- 2. Highlight Active Nav Link ----
  // Get the current page filename from the URL
  var currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Desktop links
  document.querySelectorAll(".site-nav__link").forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("site-nav__link--active");
    } else {
      link.classList.remove("site-nav__link--active");
    }
  });

  // Mobile links
  document.querySelectorAll(".site-nav__mobile-link").forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("site-nav__mobile-link--active");
    }
  });
});
