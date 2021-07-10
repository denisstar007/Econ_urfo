$(document).ready(function() {

   function burgerMenu(selector) {
      let menu = $(selector);
      let button = menu.find('.burger__menu-button');
      let links = menu.find('.burger__menu-link');
   
      button.on('click', (e) => {
         e.preventDefault();
         toggleMenu();
      });
   
      links.on('click', () => toggleMenu());
   
      function toggleMenu() {
         menu.toggleClass('burger__menu-active');
   
         if (menu.hasClass('burger__menu-active')) {
            $('body').css('overflow', 'hidden');
         } else {
            $('body').css('overflow', 'visible');
         }
      }
   }
   burgerMenu('.burger__menu');


   $(".accordion-item__trigger").click(function(){
      $(this).parent().toggleClass("accordion-item-active").sliderUp();
   });


   let header = $('.header'),
   scrollPrev = 0;
   $(window).scroll(function() {
      let scrolled = $(window).scrollTop();
      if (scrolled > 50 && scrolled > scrollPrev) {
         header.addClass('out');
      } else {
         header.removeClass('out');
      }
      scrollPrev = scrolled;
   });


   $('.open').click(function() {
      $('.popup__bg').fadeIn(600);
      $('body').addClass('overflow');
      $('.header').addClass('none');
   });
   $('.close').click(function() {
      $('.popup__bg').fadeOut(600);
      $('body').removeClass('overflow');
      $('.header').removeClass('none');
   });

});


