class MobileMenu {

    constructor() {
        this.menu = document.querySelector('.navigation__menu')
        this.openButton = document.querySelector('.navigation__toggle')
        this.dropdownButton = document.querySelectorAll('.dropdown-menu__btn')
        this.searchOverlay = document.querySelector('.modal-overlay')
        this.isMenuOpen = false
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

        if (this.searchOverlay) {
            this.searchOverlay.addEventListener('click', () => this.closeMenu())
        }
    }

    toggleMenu() {
        if (this.menu.classList.contains('is-open')) {
            this.closeMenu()
        } else {
           this.openMenu()
        }
    }
    
    openMenu() {
        const scrollY = window.scrollY

        document.body.style.position = 'fixed'
        document.body.style.top = -scrollY + 'px'

        this.searchOverlay.style.display = 'block'
        this.menu.classList.add('is-open')
        this.openButton.classList.add('is-active')  
        this.openButton.setAttribute('aria-expanded', 'true')
        this.isMenuOpen = true

        return false
    }

    closeMenu() {
        if (this.isMenuOpen == true) {
            const bodyStyle = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(bodyStyle || 0) * -1);
            this.searchOverlay.style.display = 'none'
        }
       
        this.menu.classList.remove('is-open')
        this.openButton.classList.remove('is-active')
        this.openButton.setAttribute('aria-expanded', 'false')
        this.isMenuOpen = false
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
        document.body.style.position = '';
        document.body.style.top = '';
        this.searchOverlay.style.display = 'none'

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
