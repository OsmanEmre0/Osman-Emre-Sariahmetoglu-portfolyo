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




