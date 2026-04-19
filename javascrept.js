
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click" , () => {
    document.body.classList.toggle("show-mobile-menu");

})

menuCloseButton.addEventListener("click", () => menuOpenButton.click());




  const swiper = new Swiper(".myHeroSwiper", {
    speed: 1200, // سرعة الانتقال (1.2 ثانية) لجعلها ناعمة
    parallax: true, // تأثير حركي للنصوص
    loop: true,
    effect: 'fade', // تأثير التلاشي الاحترافي
    fadeEffect: { crossFade: true },
    
    autoplay: {
      delay: 5000, // كل 5 ثوانٍ
      disableOnInteraction: false, // لا يتوقف حتى لو تفاعل المستخدم
    },
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

