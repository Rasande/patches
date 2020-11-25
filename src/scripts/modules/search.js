class Search {

    constructor() {
        this.searchModal = document.querySelector('.site-header__search')
        this.searchButton = document.querySelector('.search__toggle')
        this.searchField = document.querySelector('.search__input')
        this.searchOverlay = document.querySelector('.overlay--search')
        this.isSearchOpen = false
        this.menu = document.querySelector('.navigation__menu')
        this.menuButton = document.querySelector('.navigation__toggle')
        this.events()
    }

    events() {
        // Open search modal
        if (this.searchButton) {
            this.searchButton.addEventListener('click', () => this.toggleModal())
        }
        // Close search modal
        if (this.searchOverlay) {
            this.searchOverlay.addEventListener('click', () => this.closeModal())
        }
        
        document.addEventListener('keydown', e => this.keyPress(e))

    }

    toggleModal() {
        if (this.searchModal.classList.contains('is-open')) {
            this.closeModal()
        } else {
            this.openModal()
        }
    }

    openModal() {
        const scrollY = window.scrollY
        this.searchModal.classList.add('is-open')
        document.body.style.position = 'fixed'
        document.body.style.top = -scrollY + 'px'
        //this.searchOverlay.classList.add('is-open')
        this.searchField.value = ''
        setTimeout(() => this.searchField.focus(), 301)
        this.searchButton.classList.add('is-active')  
        this.searchButton.setAttribute('aria-expanded', 'true')
        this.isSearchOpen = true
        this.closeMenu()

        return false
    }

    closeModal() {
        if (this.isSearchOpen == true) {
            const bodyStyle = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            //this.searchOverlay.classList.remove('is-open')
            window.scrollTo(0, parseInt(bodyStyle || 0) * -1);
        }
       
        this.searchModal.classList.remove('is-open')
        this.searchButton.classList.remove('is-active') 
        this.searchButton.setAttribute('aria-expanded', 'false')
        this.isSearchOpen = false
    }

    closeMenu() {
        this.menu.classList.remove('is-open')
        this.menuButton.classList.remove('is-active')
        this.menuButton.setAttribute('aria-expanded', 'false')
    }

    keyPress(e) {
        if (e.keyCode == 27 && this.isSearchOpen) {
            this.closeModal()
        }
    }

}

export default Search;
