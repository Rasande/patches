import MobileMenu from './modules/mobileMenu'
import Animations from './modules/animation';
import Search from './modules/search'

// Load JS when DOM is ready
function rasandeDomReady(fn) {
	if (typeof fn !== 'function') {
		return;
	}
	if (document.readyState === 'interactive' || document.readyState === 'complete') {
		return fn();
	}
	document.addEventListener('DOMContentLoaded', fn, false);
}

rasandeDomReady(function () {
	// Instantiate a new object using modules / classes
	const mobileMenu = new MobileMenu()
	const animation = new Animations()
	const search = new Search()
});
