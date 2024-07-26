(function ($) {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('dark-mode-state') == 1) {
      $('.color-mode-icon').addClass('active');
      $('body').addClass('dark-mode');
      setTheme();
    }
    setLoaderBackground();
  });

  window.addEventListener("load", function () {
    $('#loader').fadeOut('slow');
  });

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
    setLoaderBackground();
  }

  function setLoaderBackground() {
    const loader = document.getElementById('loader');
    if ($('body').hasClass('dark-mode')) {
      loader.classList.remove('loader-light');
      loader.classList.add('loader-dark');
    } else {
      loader.classList.remove('loader-dark');
      loader.classList.add('loader-light');
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
      var target = $anchor.attr('href');

      if (target && target !== '#') {
        $('html, body').stop().animate({
          scrollTop: $(target).offset().top - 49
        }, 1000);
      }

      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();

})(jQuery);