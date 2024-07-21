(function ($) {
  "use strict";

  window.onload = function () {
    if (localStorage.getItem('dark-mode-state') == 1) {
      $('.color-mode-icon').toggleClass('active');
      $('body').toggleClass('dark-mode');
      setTheme();
    }
  };

  function setTheme() {
    // Navbar color setting
    if ($('body').hasClass('dark-mode')) {
      $('.navbar').css('background-color', 'var(--background-dark)');
      $('body').css('background-color', 'var(--background-dark)');
      $('body').css('color', 'var(--text-dark)');
      $('p').css('color', 'var(--text-dark)');
      $('strong, em, blockquote').css('color', 'var(--text-dark)');
    } else {
      $('.navbar').css('background-color', '#fff');
      $('body').css('background-color', 'var(--background-light)');
      $('body').css('color', 'var(--text-light)');
      $('p').css('color', 'var(--text-light)');
      $('strong, em, blockquote').css('color', 'var(--text-light)');
    }
  }

  // COLOR MODE
  $('.color-mode').click(function () {
    $('.color-mode-icon').toggleClass('active');
    $('body').toggleClass('dark-mode');
    setTheme();

    if (localStorage.getItem('dark-mode-state') != null) {
      var colorModeTemp = (localStorage.getItem('dark-mode-state') == 1) ? 0 : 1;
      localStorage.setItem('dark-mode-state', colorModeTemp);
    } else {
      localStorage.setItem('dark-mode-state', 1);
    }
  });

  // HEADER
  $(".navbar").headroom();

  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();

})(jQuery);