class MobileMenu {
    constructor() {
        this.header = document.querySelector('.site-header')
        this.toggleMenu = document.querySelectorAll('[toggle-menu]')
        this.menu = document.querySelectorAll('[menu-name]')
        this.submenuBtn = document.querySelectorAll('.submenu-btn')
        this.isMenuOpen = false
        this.events()
    }

    events() {
        this.toggleMenu.forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault()
                this.triggerMenu(e)
            })
        })
        this.submenuBtn.forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault()
                this.toggleSubMenu(e)
            })
        })
        document.addEventListener('keydown', e => this.keyPress(e))
        window.addEventListener('scroll', () => this.changeHeader())
    }

    triggerMenu(e) {
        let target = e.currentTarget.getAttribute('toggle-menu')
        let targetMenu = document.querySelector('[menu-name="' + target + '"]')
        let otherMenus = document.querySelectorAll('[menu-name]:not([menu-name="' + target + '"])')

        if (!targetMenu.classList.contains('is-open')) {
            // Close other open menus first
            otherMenus.forEach(el => {
                if (el.classList.contains('is-open')) {
                    this.closeMenu(el)
                }
            })

            this.openMenu(targetMenu)

        } else {

            this.closeMenu(targetMenu)
        }
    }

    openMenu(menu) {
        let id = menu.getAttribute('menu-name')
        let menuBtn = document.querySelector('[toggle-menu="' + id + '"]')

        const scrollY = window.scrollY

        document.body.style.position = 'fixed'
        document.body.style.top = -scrollY + 'px'

        this.header.classList.add('scrolled')

        menu.classList.add('is-open')
        menuBtn.classList.add('is-active')
        menuBtn.setAttribute('aria-expanded', 'true')

        this.isMenuOpen = true

    }

    closeMenu(menu) {
        let id = menu.getAttribute('menu-name')
        let menuBtn = document.querySelector('[toggle-menu="' + id + '"]')

        const bodyStyle = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(bodyStyle || 0) * -1);

        menu.classList.remove('is-open')
        menuBtn.classList.remove('is-active')
        menuBtn.setAttribute('aria-expanded', 'false')

        this.isMenuOpen = false

    }

    toggleSubMenu(e) {
        e.preventDefault()
        const btn = e.currentTarget;
        const targetMenu = btn.parentNode.querySelector('.submenu')

        if (!targetMenu.classList.contains('is-open')) {
            btn.classList.add('is-open')
            btn.setAttribute('aria-expanded', 'true')
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
            btn.setAttribute('aria-expanded', 'false')
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

    keyPress(e) {
        if (e.keyCode == 27 && this.isMenuOpen) {
            this.menu.forEach(el => {
                if (el.classList.contains('is-open')) {
                    this.closeMenu(el)
                }
            })
        }
    }

    changeHeader() {
        let scrollPos = window.scrollY
        if (scrollPos >= 75 || this.isMenuOpen) {
            this.header.classList.add('scrolled')
        } else {
            this.header.classList.remove('scrolled')
        }
    }

}
export default MobileMenu
