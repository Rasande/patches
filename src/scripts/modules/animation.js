import anime from '../vendor/anime.js'
import waypoint from '../vendor/noframework.waypoints.js'
class Animations {

    constructor() {
        this.oddEvenAnimation()
    }

    oddEvenAnimation() {
        const odds = document.querySelectorAll('.odd')
        const evens = document.querySelectorAll('.even')

        evens.forEach(function(element) {
            new Waypoint({
                element: element,
                handler: function() {
                    anime({
                        targets: this.element,
                        opacity: [0, 1],
                        translateY: [125, 0],
                        delay: 150,
                        duration: 2000,
                        easing: 'spring(1, 80, 10, 0)'
                    });
                    this.destroy()
                },
                offset: '100%',
            })
        })

        odds.forEach(function(element) {
            new Waypoint({
                element: element,
                handler: function() {
                    anime({
                        targets: this.element,
                        opacity: [0, 1],
                        translateY: [125, 0],
                        delay: 0,
                        duration: 2000,
                        easing: 'spring(1, 80, 10, 0)'
                    });
                    this.destroy()
                },
                offset: '100%',
            })
        })

    }
}

export default Animations
