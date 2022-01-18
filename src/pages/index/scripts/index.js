import '../../../styles/index.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(document).ready(() => {
    $('.owl-carousel').owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplayTimeout: 2500,
    margin:10,
    nav: false,
    dots: false,
    //dotsEach:true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});