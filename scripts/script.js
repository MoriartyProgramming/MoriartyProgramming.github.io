//---------------------------- Global styles ----------------------------
if (document.querySelector(".page")) {
    let page = document.querySelector(".page");
    if (document.querySelector(".site-header")) {
        window.addEventListener('scroll', function () {
            let scrollPosition = window.scrollY;
            if (scrollPosition > 10) {
                page.classList.add("page-scrolled");
            } else {
                page.classList.remove("page-scrolled");
            }
        });
    }
}

if (document.querySelector('.container-why-us')) {
    const swiperElementCandidat = document.querySelector('.swiper-candidat');
    const swiperElementAngajat = document.querySelector('.swiper-angajator');
    const swiperCandidat = new Swiper(swiperElementCandidat, {
        slidesPerView: 1,
        spaceBetween: 88,
        loop: false,
        centeredSlides: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            767: {
                slidesPerView: 1
            },
            930: {
                slidesPerView: 2,
            },
            1300: {
                slidesPerView: 3,
                spaceBetween: 68,
            },
        },
    });
    swiperCandidat.on('resize', function () {
        if (swiperCandidat.slides.length < 3) {
            if (window.innerWidth > 500) {
                swiperElementCandidat.querySelector('.swiper-wrapper').classList.add("swiper-wrapper-disabled");
            } else {
                swiperElementCandidat.querySelector('.swiper-wrapper').classList.remove("swiper-wrapper-disabled");
            }
            swiperCandidat.update();
        }
    });

    const swiperAngajat = new Swiper(swiperElementAngajat, {
        slidesPerView: 1,
        spaceBetween: 88,
        loop: false,
        centeredSlides: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            767: {
                slidesPerView: 1
            },
            930: {
                slidesPerView: 2,
            },
            1300: {
                slidesPerView: 3,
                spaceBetween: 68,
            },
        },
    });
    swiperAngajat.on('resize', function () {
        if (swiperAngajat.slides.length < 3) {
            if (window.innerWidth > 500) {
                swiperElementAngajat.querySelector('.swiper-wrapper').classList.add("swiper-wrapper-disabled");
            } else {
                swiperElementAngajat.querySelector('.swiper-wrapper').classList.remove("swiper-wrapper-disabled");
            }
            swiperAngajat.update();
        }
    });
}