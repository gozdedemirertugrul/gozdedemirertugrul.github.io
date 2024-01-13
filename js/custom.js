(function ($) {

  "use strict";

    window.onload = function(){
      if(localStorage.getItem('dark-mode-state') == 1)
      {
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')

        //Navbar color setting
        if ($('body').hasClass('dark-mode')) {
          $('.navbar').css('background-color', '#0c0c0d');
        }
      }
    }

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
         
        //Navbar color setting
        if ($('body').hasClass('dark-mode')) {
          $('.navbar').css('background-color', '#0c0c0d');
        } else {
          $('.navbar').css('background-color', '#fff');
        }

        if(localStorage.getItem('dark-mode-state') != null)
        {
          var colorModeTemp = (localStorage.getItem('dark-mode-state') == 1) ? 0 : 1;
          localStorage.setItem('dark-mode-state', colorModeTemp);
        }
        else{
          localStorage.setItem('dark-mode-state', 1);
        }
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
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
