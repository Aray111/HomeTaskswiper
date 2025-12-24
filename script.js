new Swiper('.testimonials-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlides: true,
    loop: true,

    slideToClickedSlide: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    grabCursor: true,
});