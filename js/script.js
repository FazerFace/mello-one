function slowScroll (id){
  var offset = 0;
  $('html, body').animate({
    scrollTop: $(id).offset ().top - offset
  }, 1000);
  return false;
};

$('.header-nav__link').on('click', function(e){
  (e).preventDefault();
  $(this).toggleClass('header-nav__link_active');
});

$('.menu-btn').on('click', function(e){
 (e).preventDefault();
 $(this).toggleClass('menu-btn_active');
 $('.fixed-nav').toggleClass('fixed-nav_active')
});
