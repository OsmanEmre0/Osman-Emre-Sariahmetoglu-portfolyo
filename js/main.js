// SPLİDE SLİDER

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#portfolio-slider', {
        type       : 'slide',
        perPage: 2.5,
        perMove: 1,
        gap: '10px',
        focus: 'center',
        pagination : false,
        arrows     : false,
    }).mount();


    function updatePerPage() {
        const width = window.innerWidth;

        if (width >= 420 && width <= 991) {
            splide.options.perPage = 1;
        } else {
            splide.options.perPage = 2.5;
        }
        splide.refresh();
    }


    updatePerPage();


    window.addEventListener('resize', updatePerPage);

    const prevButton = document.querySelector('.splide__arrow--left');
    const nextButton = document.querySelector('.splide__arrow--right');

    prevButton.addEventListener('click', () => {
        splide.go('<');
    });
    nextButton.addEventListener('click', () => {
        splide.go('>');
    });
});


// ABOUT

let isAnimated = false;


function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}


window.addEventListener('scroll', function() {
    var aboutSection = document.querySelector('.about-section');
    var position = aboutSection.getBoundingClientRect();


    if (!isAnimated && position.top >= 0 && position.bottom <= window.innerHeight) {
        animateValue(document.querySelector('.left-content h1'), 0, 2, 2500); // 2+
        animateValue(document.querySelector('.middle-content h1'), 0, 30, 2500); // 30+
        animateValue(document.querySelector('.right-content h1'), 0, 99, 2500); // 99+
        isAnimated = true;
    }
});


// Contact Control


document.getElementById("phone").addEventListener("input", function(event) {
    this.value = this.value.replace(/[^0-9]/g, '');

    if (this.value.length > 11) {
        this.value = this.value.slice(0, 11);
    }
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const budget = document.getElementById("budget").value;
    const message = document.getElementById("message").value;

    const templateParams = {
        fullName: fullName,
        email: email,
        phone: phone,
        budget: budget,
        message: message
    };

    emailjs.send('service_lfz8r26', 'template_zf9aqec', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            Swal.fire({
                title: "Mesajınız Gönderildi!",
                text: "Mesajınız başarıyla iletildi. En kısa sürede size geri dönüş yapacağız.",
                icon: "success",
                confirmButtonText: "Tamam"
            });


            document.getElementById("contact-form").reset();
        }, function(error) {
            console.log('FAILED...', error);
            Swal.fire({
                title: "Hata!",
                text: "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
                icon: "error"
            });
        });
});


// NAVBAR GSAP

document.addEventListener("DOMContentLoaded", function () {
    // GSAP Animasyonları
    gsap.from('.navbar-left span, .navbar-left h3', {
        x: '-100%',
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        stagger: 0.3
    });

    gsap.from('.navbar-center ul li', {
        y: '-100%',
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        stagger: 0.2
    });

    gsap.from('.navbar-right ', {
        x: '100%',
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out'
    });

    // Navbar toggle işlevi
    const toggleButton = document.getElementById('navbar-toggle');
    const toggleMenu = document.getElementById('navbar-toggle-menu');

    // Toggle butonuna tıklayınca menü açma/kapama işlevi
    toggleButton.addEventListener('click', () => {
        toggleMenu.classList.toggle('show');
        toggleButton.classList.toggle('active');
    });

    // Boş bir alana tıklayınca menüyü kapatma işlevi
    document.addEventListener('click', function (event) {
        // Eğer tıklama toggle button veya toggle menu dışında ise ve menu açıksa
        if (!toggleMenu.contains(event.target) && !toggleButton.contains(event.target)) {
            if (toggleMenu.classList.contains('show')) {
                toggleMenu.classList.remove('show'); // Menüyü kapat
                toggleButton.classList.remove('active'); // Toggle butonunu sıfırla
            }
        }
    });
});






// HEADER GSAP


document.addEventListener("DOMContentLoaded", function () {

    gsap.from(".border-box", {
        duration: 1,
        y: -200,
        opacity: 0,
        ease: "power2.out",
    });


    gsap.from(".green-box", {
        duration: 1,
        y: -200,
        opacity: 0,
        ease: "power2.out",
        delay: 1,
    });


    gsap.from(".image-wrapper img", {
        duration: 1,
        y: -200,
        opacity: 0,
        ease: "power2.out",
        delay: 2,
    });

    gsap.from(".social-icons p", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out",
    });


    gsap.from(".social-icons hr", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out",
        delay: 1,
    });


    gsap.from(".icons a", {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.2,
        delay: 2,
    });

    gsap.from('.welcome-container', {
        x: '-100%',
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out'
    });

    gsap.from('.text-content p', {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.5
    });

    gsap.from('.buttons', {
        x: '-100%',
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });

});


document.addEventListener("DOMContentLoaded", function () {
    gsap.from('[animate]', {
        y: '-50%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2
    });
});


// ABOUT GSAP


gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll('.about-section .col-md-4');

sections.forEach((section) => {
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    });
});


// MY SKİLLS GSAP

gsap.registerPlugin(ScrollTrigger);


const skillLeftElements = document.querySelectorAll('.skill-left h3, .skill-left h1, .skill-left p, .skill-left .hire-me-btn');

skillLeftElements.forEach((element) => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    });
});


const skillBoxes = document.querySelectorAll('.skill-right .left-skill-box, .skill-right .right-skill-box, .skill-right .bottom-left-skill-box');

skillBoxes.forEach((box, index) => {
    gsap.from(box, {
        scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        delay: index * 0.2
    });
});


// PORTFOLİO GSAP

gsap.registerPlugin(ScrollTrigger);


const portfolioLeftElements = document.querySelectorAll('.portfolio-left h3, .portfolio-left h4, .portfolio-left h5, .portfolio-left p, .portfolio-left a, .portfolio-left .splide__arrows');

portfolioLeftElements.forEach((element) => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    });
});


const portfolioItems = document.querySelectorAll('.portfolio-right .splide__slide');

portfolioItems.forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: 100,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        delay: index * 0.2
    });
});



// CONTACT GSAP

gsap.registerPlugin(ScrollTrigger);


const contactTitleElements = document.querySelectorAll('.contact-title, .contact-content h2, .contact-content p');

contactTitleElements.forEach((element) => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    });
});


const contactItems = document.querySelectorAll('.contact-info .contact-item');

contactItems.forEach((item) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    });
});


const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form .btn-submit');

formInputs.forEach((input) => {
    gsap.from(input, {
        scrollTrigger: {
            trigger: input,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: 100,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    });
});


// FOOTER GSAP


gsap.registerPlugin(ScrollTrigger);


const footerElements = document.querySelectorAll('.footer-content > div');

gsap.from(footerElements, {
    scrollTrigger: {
        trigger: footerElements[0],
        start: 'top bottom',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: 'power2.out'
});



// Scroll to top

window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 500) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});


document.querySelector('.scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});












