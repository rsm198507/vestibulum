var $_ = {
    init: function() {
        this.initCache();
        this.initForms();
        this.scrollToTop();
        this.slickSlider();
        this.animatedScroll();

        this.select_ui();
        this.accordion_ui();
        this.datepicker_ui();
        this.range_ui();
        this.tabs_ui();
    },
    initCache: function() {
        this.$document = $(window);
        this.$html = $('html, body');
        this.$slider = $('.js-slider-banner');
        this.$scrollTo = $('.js-scroll-to-element');
        this.$scrollToTop = $('.js-scroll-to-top');
        this.$selectUI = $('.js-select');
        this.$accordion = $('.js-accordion');
        this.$datepicker = $('.js-datepicker');
        this.$rangeUI = $('.js-range');
        this.$tabsUI = $('.js-tabs');



    },
    initForms: function () {
        form_adjuster.init({
            'file': false,
            'success': function () {
                var $form = $(form_adjuster.$form_cur),
                    $inputs = $form.find('input,textarea');

                if ($('.js-popup').hasClass('_active')) {
                    $('.js-popup._active').removeClass('_active');
                }
                else {
                    $('.js-overlay').addClass('_active');
                }

                $('.js-popup-thx').addClass('_active');


                setTimeout(function () {
                    $form.trigger('reset');
                    $inputs.removeClass('valid error active _active');


                }, 500);

                setTimeout(function () {
                    if ($('.js-popup').hasClass('_active')) {
                        $('.js-popup,.js-overlay').removeClass('_active');
                    }
                }, 4000)
            }
        });
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
    },
    select_ui: function () {
        $_.$selectUI.selectmenu({
            select: function( event, data ) {
                $('.js-select-item').html(data.item.value);
            }
        });
    },
    accordion_ui: function () {
        $_.$accordion.accordion({
            collapsible: true,
            active : "none"
        });
    },
    datepicker_ui:function () {
        $_.$datepicker.datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: "dd.mm.yy"
        });
    },
    range_ui: function () {
        $_.$rangeUI.slider({
            value:100,
            min: 0,
            max: 500,
            step: 50,
            slide: function( event, ui ) {
                $( ".range-input" ).val( ui.value );
            }
        });
    },
    tabs_ui: function () {
        $_.$tabsUI.tabs();
    }

};


$(document).ready(function() {
    $_.init();
});

