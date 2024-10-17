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


     const prevButton = document.querySelector('.splide__arrow--left');
     const nextButton = document.querySelector('.splide__arrow--right');

     prevButton.addEventListener('click', () => {
         splide.go('<');
     });
     nextButton.addEventListener('click', () => {
         splide.go('>');
     });
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
});



// HEADER GSAP //


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






