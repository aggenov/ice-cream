    var swiper2 = new Swiper('.mySwiper2', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.mySwiper2 .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.mySwiper2 .swiper-button-next',
          prevEl: '.mySwiper2 .swiper-button-prev',
        },
      });
 
    var swiper = new Swiper('.mySwiper', {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
          el: '.mySwiper .swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: '.mySwiper .swiper-button-next',
          prevEl: '.mySwiper .swiper-button-prev',
        },
        effect: 'flip',
        flipEffect: {
          slideShadows: true,
          limitRotation: true,
        },
      });