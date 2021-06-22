(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    $(".banner .container a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    setTimeout(function(){ 
        if ($('.hero .hero-text h2').length == 1) {
            var typed_strings = $('.hero .hero-text .typed-text').text();
            var typed = new Typed('.hero .hero-text h2', {
                strings: typed_strings.split(', '),
                typeSpeed: 100,
                backSpeed: 20,
                smartBackspace: false,
                loop: false
            });
        }

        $('#homeLogo').removeClass("heroImage");
        $('#homeLogo').addClass("imageAddClass");
        
        // $('#image').attr("src","img/symbol.svg");
        // $('#image1').removeClass("imageRemoveClass");
        // $('#image1').addClass("imageAddClass");

        // $('#homeLogo').removeClass("col-md-6");
        // $('#homeLogo').addClass("col-md-3");

        // $('#homeText').removeClass("col-md-6");
        // $('#homeText').addClass("col-md-9");

        setTimeout(function() {
            if ($('.hero .hero-text p').length == 1) {
                var typed_strings = $('.hero .hero-text .typed-text1').text();
                var typed = new Typed('.hero .hero-text p', {
                    strings: typed_strings.split(', '),
                    typeSpeed: 100,
                    backSpeed: 20,
                    smartBackspace: false,
                    loop: false
                });
            }
        }, 2000);

    }, 4000);
    
    // Typed Initiate
    // if ($('.hero .hero-text h2').length == 1) {
    //     var typed_strings = $('.hero .hero-text .typed-text').text();
    //     var typed = new Typed('.hero .hero-text h2', {
    //         strings: typed_strings.split(', '),
    //         typeSpeed: 100,
    //         backSpeed: 20,
    //         smartBackspace: false,
    //         loop: true
    //     });
    // }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

