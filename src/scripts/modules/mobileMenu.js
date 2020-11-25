class MobileMenu {

    constructor() {
        this.menu = document.querySelector('.navigation__menu')
        this.menuButton = document.querySelector('.navigation__toggle')
        this.dropdownButton = document.querySelectorAll('.dropdown-menu__btn')
        this.menuOverlay = document.querySelector('.overlay--menu')
        this.isMenuOpen = false
        this.searchModal = document.querySelector('.site-header__search')
        this.searchButton = document.querySelector('.search__toggle')
        this.events()
    }

    events() {
        this.menuButton.addEventListener('click', () => this.toggleMenu())
        this.dropdownButton.forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault()
                this.toggleSubMenu(e)
            })
        })

        window.addEventListener('resize', () => this.resetMenu())

        if (this.menuOverlay) {
            this.menuOverlay.addEventListener('click', () => this.resetMenu())
        }

        document.addEventListener('keydown', e => this.keyPress(e))

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

        //this.menuOverlay.classList.add('is-open')
        this.menu.classList.add('is-open')
        this.menuButton.classList.add('is-active')
        this.menuButton.setAttribute('aria-expanded', 'true')
        this.isMenuOpen = true
        this.closeSearch()

        return false
    }

    closeMenu() {
        if (this.isMenuOpen == true) {
            const bodyStyle = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(bodyStyle || 0) * -1);
            //this.menuOverlay.classList.remove('is-open')
        }

        this.menu.classList.remove('is-open')
        this.menuButton.classList.remove('is-active')
        this.menuButton.setAttribute('aria-expanded', 'false')
        this.isMenuOpen = false
    }

    toggleSubMenu(e) {
        e.preventDefault()
        const btn = e.currentTarget;
        const targetMenu = btn.parentNode.querySelector('.dropdown-menu')

        if (!targetMenu.classList.contains('is-open')) {
            btn.classList.add('is-open')
            targetMenu.classList.add('is-open');
            targetMenu.style.height = 'auto';

            let height = targetMenu.clientHeight + 'px';

            targetMenu.style.height = '0px';

            setTimeout(function () {
                targetMenu.style.height = height;
            }, 0);

            targetMenu.addEventListener('transitionend', function () {
                targetMenu.removeAttribute('style')
            }, {
                once: true
            });

        } else {
            btn.classList.remove('is-open')
            let height = targetMenu.clientHeight + 'px';
            targetMenu.style.height = height;
            
            setTimeout(function () {
                targetMenu.style.height = '0px';
            }, 0);
            
            targetMenu.addEventListener('transitionend', function () {
                targetMenu.classList.remove('is-open');
                targetMenu.removeAttribute('style')
            }, {
                once: true
            });
   
        }
    }

    resetMenu() {
        this.menu.classList.remove('is-open')
        this.menuButton.classList.remove('is-active')
        document.body.style.position = '';
        document.body.style.top = '';
        //this.menuOverlay.classList.remove('is-open')

        const btn = document.querySelectorAll('.dropdown-menu__btn.is-open')
        const menu = document.querySelectorAll('.dropdown-menu.is-open')

        for (var i = 0; i < btn.length; ++i) {
            btn[i].classList.remove('is-open')
        }
        for (var i = 0; i < menu.length; ++i) {
            menu[i].classList.remove('is-open')
        }
    }

    keyPress(e) {
        if (e.keyCode == 27 && this.isMenuOpen) {
            this.closeMenu()
        }
    }

    closeSearch() {
        this.searchModal.classList.remove('is-open')
        this.searchButton.classList.remove('is-active')
        this.searchButton.setAttribute('aria-expanded', 'false')
    }
}

export default MobileMenu
