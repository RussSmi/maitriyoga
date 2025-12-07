// Maitri Yoga - JavaScript

// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        
        // Animate burger
        burger.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
        });
    });
}

// Gallery Lightbox Functionality
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentImageIndex = 0;
let images = [];

if (galleryItems.length > 0) {
    // Collect all gallery images
    galleryItems.forEach((img, index) => {
        images.push(img.src);
        
        img.addEventListener('click', () => {
            openLightbox(index);
        });
    });

    function openLightbox(index) {
        currentImageIndex = index;
        lightboxImg.src = images[currentImageIndex];
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeLightboxFunc() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lightboxImg.src = images[currentImageIndex];
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentImageIndex];
    }

    if (closeLightbox) {
        closeLightbox.addEventListener('click', closeLightboxFunc);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', showNextImage);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', showPrevImage);
    }

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightboxFunc();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'Escape') {
                closeLightboxFunc();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
        }
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would normally send the data to a server
        // For GitHub Pages, you can integrate with services like:
        // - Formspree (https://formspree.io/)
        // - Netlify Forms
        // - EmailJS
        
        // For now, we'll show a success message
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Thank you for your message! We will get back to you soon.';
        
        // Reset form
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
        
        // Example: To integrate with Formspree, add this to your form tag:
        // <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
        // And remove the preventDefault() above
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.benefit-card, .class-card, .gallery-item, .faq-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
