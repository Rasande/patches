// Settings
const offset = '80%';
const easeing = 'easeOutExpo'

// The animations
document.addEventListener('DOMContentLoaded', () => {

  const fadeIn = document.getElementsByClassName('fade-in');

  if (fadeIn) {
    for (var i = 0; i < fadeIn.length; i++) {
      fadeIn[i].style.opacity = '0'
      new Waypoint({
        element: fadeIn[i],
        handler: function () {
          anime({
            targets: this.element,
            opacity: [0, 1],
            delay: anime.stagger(100),
            duration: 3000,
            easing: easeing
          });
          this.destroy();
        },
        offset: offset
      })
    }
  }

  // Slide in content bottom to top
  // Execute: on scroll
  const slideInTop = document.getElementsByClassName('slide-in-btt');

  if (slideInTop) {
    for (var i = 0; i < slideInTop.length; i++) {
      slideInTop[i].style.opacity = '0'
      slideInTop[i].style.transform = 'translateY(200)'
      new Waypoint({
        element: slideInTop[i],
        handler: function () {
          anime({
            targets: this.element,
            opacity: [0, 1],
            translateY: [200, 0],
            delay: anime.stagger(100),
            duration: 2000,
            easing: easeing
          });
          this.destroy();
        },
        offset: offset
      })
    }
  }

  // Slide in content top to bottom
  // Execute: on scroll
  const slideInBottom = document.getElementsByClassName('slide-in-ttb');

  if (slideInBottom) {
    for (var i = 0; i < slideInBottom.length; i++) {
      slideInBottom[i].style.opacity = '0'
      slideInBottom[i].style.transform = 'translateY(-200)'
      new Waypoint({
        element: slideInBottom[i],
        handler: function () {
          anime({
            targets: this.element,
            opacity: [0, 1],
            translateY: [-200, 0],
            delay: anime.stagger(100),
            duration: 2000,
            easing: easeing
          });
          this.destroy();
        },
        offset: offset
      })
    }
  }

  // Slide in content left to right
  // Execute: on scroll
  const slideInRight = document.getElementsByClassName('slide-in-ltr');
 
  if (slideInRight) {
    for (var i = 0; i < slideInRight.length; i++) {
      slideInRight[i].style.opacity = '0'
      slideInRight[i].style.transform = 'translateX(-200)'
      new Waypoint({
        element: slideInRight[i],
        handler: function () {
          anime({
            targets: this.element,
            opacity: [0, 1],
            translateX: [-200, 0],
            delay: anime.stagger(100),
            duration: 2000,
            easing: easeing
          });
          this.destroy();
        },
        offset: offset
      })
    }
  }

  // Slide in content right to left
  // Execute: on scroll
  const slideInLeft = document.getElementsByClassName('slide-in-rtl');

  if (slideInLeft) {
    for (var i = 0; i < slideInLeft.length; i++) {
      slideInLeft[i].style.opacity = '0'
      slideInLeft[i].style.transform = 'translateX(200)'
      new Waypoint({
        element: slideInLeft[i],
        handler: function () {
          anime({
            targets: this.element,
            opacity: [0, 1],
            translateX: [200, 0],
            delay: anime.stagger(100),
            duration: 2000,
            easing: easeing
          });
          this.destroy();
        },
        offset: offset
      })
    }
  }

  // Slide down site header
  // Execute: on load
  anime({
    targets: '.site__header',
    translateY: [-200, 0],
    opacity: [0, 1],
    easing: easeing
  })

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  if (!isMobile()) {

  }

})
