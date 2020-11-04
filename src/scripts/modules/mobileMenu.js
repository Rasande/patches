class MobileMenu {

    constructor() {
        this.menu = document.querySelector('.navbar__nav')
        this.openButton = document.querySelector('.navbar__toggler')
        this.body = document.querySelector('body')
        this.dropdownButton = document.querySelectorAll('.dropdown-menu__btn')
        this.menuOverlay = document.querySelector('.navbar-overlay')
        this.events()
    }

    events() {
        this.openButton.addEventListener('click', () => this.toggleMenu())
        this.dropdownButton.forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault()
                this.toggleSubMenu(e)
            })
        })

        window.addEventListener('resize', () => this.resetMenu())

        if (this.menuOverlay) {
            this.menuOverlay.addEventListener('click', () => this.toggleMenu())
        }
    }

    toggleMenu() {
        if (this.menu.classList.contains('is-open')) {
            this.menu.classList.remove('is-open')
            this.openButton.classList.remove('is-active')
            this.body.classList.remove('stuck')
        } else {
            this.menu.classList.add('is-open')
            this.openButton.classList.add('is-active')
            this.body.classList.add('stuck')
        }
    }
    toggleSubMenu(e) {
        const btn = e.currentTarget;
        if (btn.classList.contains('is-open')) {
            btn.classList.remove('is-open')
            btn.parentNode.querySelector('.dropdown-menu').classList.remove('is-open')
        } else {
            btn.classList.add('is-open')
            btn.parentNode.querySelector('.dropdown-menu').classList.add('is-open')
        }
    }
    resetMenu() {
        this.menu.classList.remove('is-open')
        this.openButton.classList.remove('is-active')
        this.body.classList.remove('stuck')

        const btn = document.querySelectorAll('.dropdown-menu__btn.is-open')
        const menu = document.querySelectorAll('.dropdown-menu.is-open')

        for (var i = 0; i < btn.length; ++i) {
            btn[i].classList.remove('is-open')
        }
        for (var i = 0; i < menu.length; ++i) {
            menu[i].classList.remove('is-open')
        }
    }
}

export default MobileMenu
