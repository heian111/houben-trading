// Houben Trading - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // ======== Mobile Nav Toggle ========
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // ======== Navbar scroll effect ========
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // ======== Smooth Scroll for anchor links ========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // ======== Form Submission ========
    const form = document.getElementById('inquiryForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Show loading state
            const btn = this.querySelector('.btn-submit');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;

            // FormSubmit handles the rest via redirect
            // User will be redirected to a thank-you page after submission
        });
    }

    // ======== Scroll reveal animation ========
    const revealElements = document.querySelectorAll('.feature-card, .product-card, .value-card, .industry-item, .product-detail-card');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
    });

    // ======== Current year in footer ========
    const yearElements = document.querySelectorAll('.footer-bottom p');
    yearElements.forEach(el => {
        el.innerHTML = el.innerHTML.replace('2026', new Date().getFullYear());
    });
});
