(function($) {
    
    /*---------------------------------------------
       Mobile Menu
     ---------------------------------------------*/
       function initNavigation() {
   
       const body = $( 'body' ),
            $window = $(window),
            lastWindowWidth = $window.width(),
            toggle = $( '.navbar-toggler' ),
            header = $( '.site__header' ),
            navigation = $( '.navbar-nav' ),
            dropdownBtn = $( '.dropdown-btn' ),
            dropdown = $( '.dropdown-menu' );
   
       // Functions
       function toggleMenu() {
           // Toggle .is-open to .navbar-nav
           $(navigation).toggleClass( 'is-open' );
           // Toggle .is-active to the hamburger icon
           $(toggle).toggleClass( 'is-active' );
           // Toggle .is-active on site-header
           $(header).toggleClass( 'expanded' );
           // Prevent body from scrolling
           $(body).toggleClass('stuck');
       }
   
       function closeAllDropdowns() {
           if ($(dropdown).hasClass( 'show' )) {
               $(dropdown).removeClass( 'show' );
           }
           if ($(dropdownBtn).hasClass( 'toggled' )) {
               $(dropdownBtn).removeClass( 'toggled' );
           }
           $(dropdown).attr( "style", " " );
           $(navigation).attr( "style", " " );
           $(toggle).removeClass( 'is-active' );
       }
   
       // Open mobile menu
       $(toggle).click(function(e) {
           e.preventDefault(); 
   
           toggleMenu();
     
       });
   
       // Open dropdown menus
       $(dropdownBtn).click(function(e) {
           e.preventDefault(); 
   
           var $this = $(this);
   
           // Add / remove .toggled from dropdown button
           if ($this.hasClass( 'toggled' )) {
               $this.removeClass( 'toggled' );
           } else {
               $this.parent().parent().find( '.dropdown-btn' ).removeClass( 'toggled' );
               $this.toggleClass( 'toggled' );
           }
   
           // Add / remove .show from dropdown-menu
           if ($this.next().hasClass( 'show' )) {
               $this.next().removeClass( 'show' );
               $this.next().slideUp( 350 );
               $this.parent().parent().find( '.dropdown-menu' ).removeClass( 'show' );
               $this.parent().parent().find( '.dropdown-menu' ).slideUp( 350 );
   
           } else {
               $this.parent().parent().find( '.dropdown-menu' ).removeClass( 'show' );
               $this.parent().parent().find( '.dropdown-menu' ).slideUp( 350 );
               $this.next().toggleClass( 'show' );
               $this.next().slideToggle( 350 );
           }
       });
   
       // Close and reset on window width change
       $window.resize(function () {
   
           var windowWidth = $window.width();
   
           if (lastWindowWidth !== windowWidth) {
   
                   if ($(navigation).hasClass( 'is-open' )) {
                       toggleMenu();
                   }
                   
                   closeAllDropdowns();
                   $(navigation).removeAttr( 'style' );
           }
       });
   
       function isMobile() {
           return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
         }
       
         if (!isMobile()) {
           // Change header height on scroll
           $(window).scroll(function(){
               if($(document).scrollTop() > 50) {
                   $('.navbar-brand.shrink').addClass('is-shrinked');
               } else {
                   $('.navbar-brand.shrink').removeClass('is-shrinked');
               }
           });
         }
       }
   
    /*---------------------------------------------
       Header height padding compensation
     ---------------------------------------------*/
   
       $.fn.contentPadding = function() {
   
           let headerHeight = $('.site__header').height();
   
           this.css(
               'padding-top', headerHeight + 'px'
           )   
       };
       
    /*---------------------------------------------
       Call all the functions
     ---------------------------------------------*/

       function theFunctions() {
            initNavigation();
            $('.site__content').contentPadding();
        }

        theFunctions();
   
     /*---------------------------------------------
       Call SmoothState.js transitions
     ---------------------------------------------*/
     
     function addBlacklistClass() {
        $( 'a' ).each( function() {
            if ( this.href.indexOf('/wp-admin/') !== -1 || 
                 this.href.indexOf('/wp-login.php') !== -1 ) {
                $( this ).addClass( 'wp-link' );
            }
        });
    }

       $( function() {
   
           addBlacklistClass();
   
           var settings = { 
               anchors: 'a',
               blacklist: '.wp-link',
               onStart: {
                   duration: 280,
                   render: function ( $container ) {
                       $container.addClass( 'slide-out' );
                   }
               },
               onAfter: function( $container ) {
   
                   addBlacklistClass();
   
                   var $hash = $( window.location.hash );
   
                   if ( $hash.length !== 0 ) {
   
                       var offsetTop = $hash.offset().top;
   
                       $( 'body, html' ).animate( {
                               scrollTop: ( offsetTop - 60 ),
                           }, {
                               duration: 280
                       } );
                   }
   
                   $container.removeClass( 'slide-out' );
                   
                   theFunctions();
                  
               }
           };
   
           $( '#site' ).smoothState( settings );
       } );
   
   })( jQuery );
   