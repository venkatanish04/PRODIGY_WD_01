// main.js

// Toggle navigation menu
const navToggle = document.getElementById('nav__toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scrolling for anchor links
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission (just a basic console log for demonstration)
const contactForm = document.querySelector('.contact__form');

contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const nameInput = document.querySelector('.contact__input[name="name"]').value;
    const emailInput = document.querySelector('.contact__input[name="email"]').value;
    const messageInput = document.querySelector('.contact__textarea').value;

    console.log('Name:', nameInput);
    console.log('Email:', emailInput);
    console.log('Message:', messageInput);

    // Here you can add code to send form data to a server or perform other actions
});
