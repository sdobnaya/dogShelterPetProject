import '../../../styles/index.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(document).ready(() => {
    $('.owl-carousel').owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dotsEach:true,
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