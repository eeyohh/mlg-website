// MLG Main JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    // Initialize Swiper Slider
    if (document.querySelector('.mySwiper')) {
        const swiper = new Swiper('.mySwiper', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
    
    // Contact Form Submission (EmailJS or direct)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.querySelector('input[name="name"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const phone = document.querySelector('input[name="phone"]').value;
            const service = document.querySelector('select[name="service"]').value;
            const message = document.querySelector('textarea[name="message"]').value;
            const consent = document.getElementById('popia-consent').checked;
            
            if (!consent) {
                document.getElementById('form-status').innerHTML = 'Please consent to POPIA to continue.';
                document.getElementById('form-status').style.color = 'red';
                return;
            }
            
            // For production, use a backend or EmailJS
            // This is a front-end simulation with mailto fallback
            const subject = `MLG Contact: ${service} from ${name}`;
            const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`;
            
            // Open email client (fallback) - in production, use EmailJS or fetch to backend
            window.location.href = `mailto:info@mzansileadgen.co.za,mzansileadgen@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            document.getElementById('form-status').innerHTML = 'Redirecting to email... You can also WhatsApp us directly.';
            document.getElementById('form-status').style.color = 'green';
            
            // Reset form optionally
            // contactForm.reset();
        });
    }
    
    // POPIA Modal Logic
    const modal = document.getElementById('popia-modal');
    const popiaLinks = document.querySelectorAll('#popia-link, #popia-link-footer');
    const closeModal = document.querySelector('.close-modal');
    const closeBtn = document.getElementById('close-popia');
    
    function openModal() {
        if (modal) modal.style.display = 'block';
    }
    
    function closeModalFunc() {
        if (modal) modal.style.display = 'none';
    }
    
    popiaLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    });
    
    if (closeModal) closeModal.addEventListener('click', closeModalFunc);
    if (closeBtn) closeBtn.addEventListener('click', closeModalFunc);
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) closeModalFunc();
    });
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
            }
        });
    });
});