searchform = document.querySelector('.search-form ');
document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
}

let loginFrom = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () => {
    loginFrom.classList.toggle('active');
}

document.querySelector('#close-btn-login').onclick = () => {
    loginFrom.classList.remove('active');
}


document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 80) {
            document.querySelector('.header .header2').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('header').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.querySelector('.header .header2').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});

// Swiper 

var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
//featured
var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

//Next & previous
