new Swiper('.testimonials-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    centeredSlides: true,
    loop: true,

    slideToClickedSlide: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    grabCursor: true,
});