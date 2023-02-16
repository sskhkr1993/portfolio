//メヌーのcurrent

$(function () {
  $(".main-nav__link").on("click", function () {
    if ($("[href^='#']")) {
      $(".main-nav__item").removeClass('current');
      $(this).parent().addClass('current');
      return false;
    }
  });
});