var $_ = {
    init: function() {
        this.initCache();
        this.scrollToTop();
        this.slickSlider();
        this.animatedScroll();

    },
    initCache: function() {
        this.$document = $(window);
        this.$html = $('html, body');
        this.$slider = $('.js-slider-banner');
        this.$scrollTo = $('.js-scroll-to-element');
        this.$scrollToTop = $('.js-scroll-to-top');

    },

    scrollToTop: function () {

        $_.$scrollToTop.on('click', function(){

            $_.$html.animate({scrollTop: 0}, 1000);
        });
    },
    slickSlider: function () {
        $_.$slider.slick({
            arrows: true,
            dots: true
        });
    },
    animatedScroll: function () {
        $_.$document.on('scroll', function(){
            if($(window).scrollTop() > $_.$document.innerHeight()) {
                $_.$scrollToTop.addClass('show');
            }
            else {
                $_.$scrollToTop.removeClass('show');
            }

        });

        $_.$scrollTo.on('click', function () {

            var $headerHeight = $('.js-header').innerHeight(),
                $dataAttr = $(this).attr('data-link'),
                $link = '.' + $dataAttr;

            $($link).animatescroll({
                // padding: $headerHeight
            });
        });
    }
};


$(document).ready(function() {
    $_.init();
});

