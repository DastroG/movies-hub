window.onload = function() {
    var swiper = new Swiper(".swiper", {
        loop: true,
        initialSlides: 5,
        loopedSlides: 5,
        centeredSlides: true,
        grabCursor: true,
        speed: 1100,
        spaceBetween: 60,
        slidesPerView: "auto",
        mousewheel: {
            thresholdDelta: 70,
        },
        effect: "coverflow",
        coverflowEffect: {
            rotate: 45,
            stretch: 50,
            depth: 20,
            modifier: 1,
            slideShadows: false,
            useTransform: true,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        }   
    })
}

var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 5,
    loopedSlides: 5,
    spaceBetween: 30,
    grabCursor: true,
    speed: 1100,
    mousewheel: {
        thresholdDelta: 70,
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },  
  });