// SPLİDEE SLİDER

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




