
const resumeBtn = document.getElementById('resumeBtn');
resumeBtn?.addEventListener('click', () => {
    const resumePath = '/assets/Mubashir_R.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Mubashir_R_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


const contactForm = document.querySelector('.contact-form') as HTMLFormElement;
contactForm?.addEventListener('submit', async (e: Event) => {
    e.preventDefault();
    
    try {
        const formData = new FormData(contactForm);
        const templateParams = {
            from_name: formData.get('name'),
            from_email: formData.get('email'),
            message: formData.get('message'),
        };

        (window as any).emailjs.init("5bYRc7q9bdJ9kvGTD");

        await (window as any).emailjs.send(
            'service_5tqhozz',
            'template_3cdtd84',
            templateParams
        );

        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    } catch (error) {
        console.error('Error:', error);
        alert('Sorry, there was an error sending your message. Please try again.');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (href) {
            document.querySelector(href)?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navContainer = document.querySelector('.nav-container');
const body = document.body;

const toggleMenu = () => {
    navContainer?.classList.toggle('active');
    mobileMenuBtn?.classList.toggle('active');
    body.style.overflow = navContainer?.classList.contains('active') ? 'hidden' : '';
};


mobileMenuBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});


const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navContainer?.classList.contains('active')) {
            toggleMenu();
        }
    });
});


document.addEventListener('click', (e) => {
    const target = e.target as Element;
    if (!navContainer?.contains(target) && 
        !target.classList.contains('mobile-menu-btn') && 
        navContainer?.classList.contains('active')) {
        toggleMenu();
    }
});



document.addEventListener('touchmove', (e) => {
    if (navContainer?.classList.contains('active')) {
        e.preventDefault();
    }
}, { passive: false });
