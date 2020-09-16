// Add padding to .site__content depending on header size.
export function contentPadding() {
    (function ($) {
        const content = $('.site__content'),
            $window = $(window),
            lastWindowWidth = $window.width();

        let headerHeight = $('.site__header').height();

        content.css(
            'padding-top', headerHeight - 1 + 'px'
        )

        $window.resize(function () {

            let windowWidth = $window.width();

            if (lastWindowWidth !== windowWidth) {
                let headerHeight = $('.site__header').height();

                content.css(
                    'padding-top', headerHeight - 1 + 'px'
                )
            }
        });

    })(jQuery);
}

// Shrink navbar height on scroll
export function navbarShrink() {
    (function ($) {
        function isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        if (!isMobile()) {
            // Change header height on scroll
            $(window).scroll(function () {
                if ($(document).scrollTop() > 50) {
                    $('.navbar-brand.shrink').addClass('is-shrinked');
                } else {
                    $('.navbar-brand.shrink').removeClass('is-shrinked');
                }
            });
        }
    })(jQuery);
}
