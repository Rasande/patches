class Search {

    constructor() {
        this.searchModal = document.querySelector('.site-header__search')
        this.openButton = document.querySelector('.search__toggle')
        this.closeButton = document.querySelector('.search-modal__close')
        this.searchField = document.querySelector('.search__input')
        this.searchOverlay = document.querySelector('.modal-overlay')
        this.isOverlayOpen = false
        this.events()
    }

    events() {
        // Open search modal
        if (this.openButton) {
            this.openButton.addEventListener('click', () => this.toggleModal())
        }
        // Close search modal
        if (this.closeButton) {
            this.closeButton.addEventListener('click', () => this.closeModal())
        }

        if (this.searchOverlay) {
            this.searchOverlay.addEventListener('click', () => this.closeModal())
        }
        
        document.addEventListener('keydown', e => this.keyPress(e))

    }

    toggleModal() {
        if (this.searchModal.classList.contains('toggled')) {
            this.closeModal()
        } else {
            this.openModal()
        }
    }

    openModal() {
        const scrollY = window.scrollY
        this.searchModal.classList.add('toggled')
        document.body.style.position = 'fixed'
        document.body.style.top = -scrollY + 'px'
        this.searchOverlay.style.display = 'block'
        this.searchField.value = ''
        setTimeout(() => this.searchField.focus(), 301)
        this.openButton.setAttribute('aria-expanded', 'true')
        this.isOverlayOpen = true
        return false
    }

    closeModal() {
        if (this.isOverlayOpen == true) {
            const bodyStyle = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            this.searchOverlay.style.display = 'none'
            window.scrollTo(0, parseInt(bodyStyle || 0) * -1);
        }
       
        this.searchModal.classList.remove('toggled')
        this.openButton.setAttribute('aria-expanded', 'false')
        this.isOverlayOpen = false
    }

    keyPress(e) {
        if (e.keyCode == 27 && this.isOverlayOpen) {
            this.closeModal()
        }
    }

}

export default Search;
