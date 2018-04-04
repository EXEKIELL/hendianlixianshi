$(function () {
    var swiper1 = new Swiper('#swiper1', {
        slidesPerView: 5,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        prevButton:'.swiper-button-prev1',
        nextButton:'.swiper-button-next1'
    });
    var swiper2 = new Swiper('#swiper2', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        prevButton:'.swiper-button-prev2',
        nextButton:'.swiper-button-next2'
    });
})