// script.js

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation for Contact Form
const form = document.querySelector('.contact-form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');

form.addEventListener('submit', function (e) {
    let valid = true;

    // Check if name is not empty
    if (nameField.value.trim() === '') {
        alert('Please enter your name.');
        valid = false;
    }

    // Check if email is valid
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailField.value)) {
        alert('Please enter a valid email address.');
        valid = false;
    }

    // Check if message is not empty
    if (messageField.value.trim() === '') {
        alert('Please enter a message.');
        valid = false;
    }

    // If form is invalid, prevent submission
    if (!valid) {
        e.preventDefault();
    }
});

// Sticky Header
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
