// script.js - JavaScript for interactivity

// Form validation and submission for contact form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basic validation
            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // If all good, simulate sending (since no backend)
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset(); // Clear the form
        });
    }
    
    // Add hover effects or animations if needed
    // For example, animate progress bars on scroll
    const skills = document.querySelectorAll('.progress-bar');
    if (skills.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.width = entry.target.style.width; // Trigger animation
                }
            });
        });
        
        skills.forEach(skill => observer.observe(skill));
    }
});