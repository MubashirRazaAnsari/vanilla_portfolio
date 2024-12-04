"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const resumeBtn = document.getElementById('resumeBtn');
resumeBtn === null || resumeBtn === void 0 ? void 0 : resumeBtn.addEventListener('click', () => {
    const resumePath = '/assets/Mubashir_R.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Mubashir_R_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
const contactForm = document.querySelector('.contact-form');
contactForm === null || contactForm === void 0 ? void 0 : contactForm.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    try {
        const formData = new FormData(contactForm);
        const templateParams = {
            from_name: formData.get('name'),
            from_email: formData.get('email'),
            message: formData.get('message'),
        };
        window.emailjs.init("5bYRc7q9bdJ9kvGTD");
        yield window.emailjs.send('service_5tqhozz', 'template_3cdtd84', templateParams);
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    }
    catch (error) {
        console.error('Error:', error);
        alert('Sorry, there was an error sending your message. Please try again.');
    }
}));
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        var _a;
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (href) {
            (_a = document.querySelector(href)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navContainer = document.querySelector('.nav-container');
const body = document.body;
const toggleMenu = () => {
    navContainer === null || navContainer === void 0 ? void 0 : navContainer.classList.toggle('active');
    mobileMenuBtn === null || mobileMenuBtn === void 0 ? void 0 : mobileMenuBtn.classList.toggle('active');
    body.style.overflow = (navContainer === null || navContainer === void 0 ? void 0 : navContainer.classList.contains('active')) ? 'hidden' : '';
};
mobileMenuBtn === null || mobileMenuBtn === void 0 ? void 0 : mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navContainer === null || navContainer === void 0 ? void 0 : navContainer.classList.contains('active')) {
            toggleMenu();
        }
    });
});
document.addEventListener('click', (e) => {
    const target = e.target;
    if (!(navContainer === null || navContainer === void 0 ? void 0 : navContainer.contains(target)) &&
        !target.classList.contains('mobile-menu-btn') &&
        (navContainer === null || navContainer === void 0 ? void 0 : navContainer.classList.contains('active'))) {
        toggleMenu();
    }
});
document.addEventListener('touchmove', (e) => {
    if (navContainer === null || navContainer === void 0 ? void 0 : navContainer.classList.contains('active')) {
        e.preventDefault();
    }
}, { passive: false });
