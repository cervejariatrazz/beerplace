(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.menu-burger').on('click', function() {
      $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
      $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
    });


    // ABOUT SLIDER
    $('body').vegas({
        slides: [
            { src: 'images/cervejaria-trazz-img1.jpg' },
            { src: 'images/cervejaria-trazz-img2.jpg' },
			{ src: 'images/cervejaria-trazz-img3.jpg' },
			{ src: 'images/cervejaria-trazz-img4.jpg' },
			{ src: 'images/cervejaria-trazz-img5.jpg' }
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });

})(jQuery);
