/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/modules/animation.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/animation.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_anime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendor/anime.js */ "./src/scripts/vendor/anime.js");
/* harmony import */ var _vendor_anime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_anime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_noframework_waypoints_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vendor/noframework.waypoints.js */ "./src/scripts/vendor/noframework.waypoints.js");
/* harmony import */ var _vendor_noframework_waypoints_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_noframework_waypoints_js__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Animations = /*#__PURE__*/function () {
  function Animations() {
    _classCallCheck(this, Animations);

    this.oddEvenAnimation();
  }

  _createClass(Animations, [{
    key: "oddEvenAnimation",
    value: function oddEvenAnimation() {
      var odds = document.querySelectorAll('.odd');
      var evens = document.querySelectorAll('.even');
      evens.forEach(function (element) {
        new Waypoint({
          element: element,
          handler: function handler() {
            _vendor_anime_js__WEBPACK_IMPORTED_MODULE_0___default()({
              targets: this.element,
              opacity: [0, 1],
              translateY: [125, 0],
              delay: 150,
              duration: 2000,
              easing: 'spring(1, 80, 10, 0)'
            });
            this.destroy();
          },
          offset: '100%'
        });
      });
      odds.forEach(function (element) {
        new Waypoint({
          element: element,
          handler: function handler() {
            _vendor_anime_js__WEBPACK_IMPORTED_MODULE_0___default()({
              targets: this.element,
              opacity: [0, 1],
              translateY: [125, 0],
              delay: 0,
              duration: 2000,
              easing: 'spring(1, 80, 10, 0)'
            });
            this.destroy();
          },
          offset: '100%'
        });
      });
    }
  }]);

  return Animations;
}();

/* harmony default export */ __webpack_exports__["default"] = (Animations);

/***/ }),

/***/ "./src/scripts/modules/mobileMenu.js":
/*!*******************************************!*\
  !*** ./src/scripts/modules/mobileMenu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MobileMenu = /*#__PURE__*/function () {
  function MobileMenu() {
    _classCallCheck(this, MobileMenu);

    this.header = document.querySelector('.site-header');
    this.toggleMenu = document.querySelectorAll('[toggle-menu]');
    this.menu = document.querySelectorAll('[menu-name]');
    this.submenuBtn = document.querySelectorAll('.submenu-btn');
    this.isMenuOpen = false;
    this.events();
  }

  _createClass(MobileMenu, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.toggleMenu.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();

          _this.triggerMenu(e);
        });
      });
      this.submenuBtn.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();

          _this.toggleSubMenu(e);
        });
      });
      document.addEventListener('keydown', function (e) {
        return _this.keyPress(e);
      });
      window.addEventListener('scroll', function () {
        return _this.changeHeader();
      });
    }
  }, {
    key: "triggerMenu",
    value: function triggerMenu(e) {
      var _this2 = this;

      var target = e.currentTarget.getAttribute('toggle-menu');
      var targetMenu = document.querySelector('[menu-name="' + target + '"]');
      var otherMenus = document.querySelectorAll('[menu-name]:not([menu-name="' + target + '"])');

      if (!targetMenu.classList.contains('is-open')) {
        // Close other open menus first
        otherMenus.forEach(function (el) {
          if (el.classList.contains('is-open')) {
            _this2.closeMenu(el);
          }
        });
        this.openMenu(targetMenu);
      } else {
        this.closeMenu(targetMenu);
      }
    }
  }, {
    key: "openMenu",
    value: function openMenu(menu) {
      var id = menu.getAttribute('menu-name');
      var menuBtn = document.querySelector('[toggle-menu="' + id + '"]');
      var scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = -scrollY + 'px';
      this.header.classList.add('scrolled');
      menu.classList.add('is-open');
      menuBtn.classList.add('is-active');
      menuBtn.setAttribute('aria-expanded', 'true');
      this.isMenuOpen = true;
    }
  }, {
    key: "closeMenu",
    value: function closeMenu(menu) {
      var id = menu.getAttribute('menu-name');
      var menuBtn = document.querySelector('[toggle-menu="' + id + '"]');
      var bodyStyle = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(bodyStyle || 0) * -1);
      menu.classList.remove('is-open');
      menuBtn.classList.remove('is-active');
      menuBtn.setAttribute('aria-expanded', 'false');
      this.isMenuOpen = false;
    }
  }, {
    key: "toggleSubMenu",
    value: function toggleSubMenu(e) {
      e.preventDefault();
      var btn = e.currentTarget;
      var targetMenu = btn.parentNode.querySelector('.submenu');

      if (!targetMenu.classList.contains('is-open')) {
        btn.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        targetMenu.classList.add('is-open');
        targetMenu.style.height = 'auto';
        var height = targetMenu.clientHeight + 'px';
        targetMenu.style.height = '0px';
        setTimeout(function () {
          targetMenu.style.height = height;
        }, 0);
        targetMenu.addEventListener('transitionend', function () {
          targetMenu.removeAttribute('style');
        }, {
          once: true
        });
      } else {
        btn.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');

        var _height = targetMenu.clientHeight + 'px';

        targetMenu.style.height = _height;
        setTimeout(function () {
          targetMenu.style.height = '0px';
        }, 0);
        targetMenu.addEventListener('transitionend', function () {
          targetMenu.classList.remove('is-open');
          targetMenu.removeAttribute('style');
        }, {
          once: true
        });
      }
    }
  }, {
    key: "keyPress",
    value: function keyPress(e) {
      var _this3 = this;

      if (e.keyCode == 27 && this.isMenuOpen) {
        this.menu.forEach(function (el) {
          if (el.classList.contains('is-open')) {
            _this3.closeMenu(el);
          }
        });
      }
    }
  }, {
    key: "changeHeader",
    value: function changeHeader() {
      var scrollPos = window.scrollY;

      if (scrollPos >= 75 || this.isMenuOpen) {
        this.header.classList.add('is-scrolled');
      } else {
        this.header.classList.remove('is-scrolled');
      }
    }
  }]);

  return MobileMenu;
}();

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ }),

/***/ "./src/scripts/modules/search.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/search.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Search = /*#__PURE__*/function () {
  function Search() {
    _classCallCheck(this, Search);

    this.searchModal = document.querySelector('.site-header__search');
    this.searchButton = document.querySelector('.search__toggle');
    this.searchField = document.querySelector('.search__input');
    this.searchOverlay = document.querySelector('.overlay--search');
    this.isSearchOpen = false;
    this.events();
  }

  _createClass(Search, [{
    key: "events",
    value: function events() {
      var _this = this;

      // Open search modal
      if (this.searchButton) {
        this.searchButton.addEventListener('click', function () {
          return _this.toggleModal();
        });
      } // Close search modal


      if (this.searchOverlay) {
        this.searchOverlay.addEventListener('click', function () {
          return _this.closeModal();
        });
      }

      document.addEventListener('keydown', function (e) {
        return _this.keyPress(e);
      });
    }
  }, {
    key: "toggleModal",
    value: function toggleModal() {
      if (this.searchModal.classList.contains('is-open')) {
        this.closeModal();
      } else {
        this.openModal();
      }
    }
  }, {
    key: "openModal",
    value: function openModal() {
      var _this2 = this;

      this.searchModal.classList.add('is-open');
      this.searchField.value = '';
      setTimeout(function () {
        return _this2.searchField.focus();
      }, 301);
      this.searchButton.classList.add('is-active');
      this.searchButton.setAttribute('aria-expanded', 'true');
      this.isSearchOpen = true;
      return false;
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.searchModal.classList.remove('is-open');
      this.searchButton.classList.remove('is-active');
      this.searchButton.setAttribute('aria-expanded', 'false');
      this.isSearchOpen = false;
    }
  }, {
    key: "keyPress",
    value: function keyPress(e) {
      if (e.keyCode == 27 && this.isSearchOpen) {
        this.closeModal();
      }
    }
  }]);

  return Search;
}();

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/scripts/script.js":
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mobileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mobileMenu */ "./src/scripts/modules/mobileMenu.js");
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animation */ "./src/scripts/modules/animation.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ "./src/scripts/modules/search.js");


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
  var mobileMenu = new _modules_mobileMenu__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var animation = new _modules_animation__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var search = new _modules_search__WEBPACK_IMPORTED_MODULE_2__["default"]();
});

/***/ }),

/***/ "./src/scripts/vendor/anime.js":
/*!*************************************!*\
  !*** ./src/scripts/vendor/anime.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */
 // Defaults

var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};
var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};
var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d']; // Caching

var cache = {
  CSS: {},
  springs: {}
}; // Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function arr(a) {
    return Array.isArray(a);
  },
  obj: function obj(a) {
    return stringContains(Object.prototype.toString.call(a), 'Object');
  },
  pth: function pth(a) {
    return is.obj(a) && a.hasOwnProperty('totalLength');
  },
  svg: function svg(a) {
    return a instanceof SVGElement;
  },
  inp: function inp(a) {
    return a instanceof HTMLInputElement;
  },
  dom: function dom(a) {
    return a.nodeType || is.svg(a);
  },
  str: function str(a) {
    return typeof a === 'string';
  },
  fnc: function fnc(a) {
    return typeof a === 'function';
  },
  und: function und(a) {
    return typeof a === 'undefined';
  },
  nil: function nil(a) {
    return is.und(a) || a === null;
  },
  hex: function hex(a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgb: function rgb(a) {
    return /^rgb/.test(a);
  },
  hsl: function hsl(a) {
    return /^hsl/.test(a);
  },
  col: function col(a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function key(a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
  }
}; // Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) {
    return parseFloat(p);
  }) : [];
} // Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js


function spring(string, duration) {
  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity = minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? duration * t / 1000 : t;

    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }

    if (t === 0 || t === 1) {
      return t;
    }

    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];

    if (cached) {
      return cached;
    }

    var frame = 1 / 6;
    var elapsed = 0;
    var rest = 0;

    while (true) {
      elapsed += frame;

      if (solver(elapsed) === 1) {
        rest++;

        if (rest >= 16) {
          break;
        }
      } else {
        rest = 0;
      }
    }

    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;
} // Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function


function steps(steps) {
  if (steps === void 0) steps = 10;
  return function (t) {
    return Math.ceil(minMax(t, 0.000001, 1) * steps) * (1 / steps);
  };
} // BezierEasing https://github.com/gre/bezier-easing


var bezier = function () {
  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) {
    return 1.0 - 3.0 * aA2 + 3.0 * aA1;
  }

  function B(aA1, aA2) {
    return 3.0 * aA2 - 6.0 * aA1;
  }

  function C(aA1) {
    return 3.0 * aA1;
  }

  function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }

  function getSlope(aT, aA1, aA2) {
    return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
  }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX,
        currentT,
        i = 0;

    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;

      if (currentX > 0.0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);

    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);

      if (currentSlope === 0.0) {
        return aGuessT;
      }

      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }

    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
      return;
    }

    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {
      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;
      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) {
        return x;
      }

      if (x === 0 || x === 1) {
        return x;
      }

      return calcBezier(getTForX(x), mY1, mY2);
    };
  }

  return bezier;
}();

var penner = function () {
  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
  var eases = {
    linear: function linear() {
      return function (t) {
        return t;
      };
    }
  };
  var functionEasings = {
    Sine: function Sine() {
      return function (t) {
        return 1 - Math.cos(t * Math.PI / 2);
      };
    },
    Circ: function Circ() {
      return function (t) {
        return 1 - Math.sqrt(1 - t * t);
      };
    },
    Back: function Back() {
      return function (t) {
        return t * t * (3 * t - 2);
      };
    },
    Bounce: function Bounce() {
      return function (t) {
        var pow2,
            b = 4;

        while (t < ((pow2 = Math.pow(2, --b)) - 1) / 11) {}

        return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2);
      };
    },
    Elastic: function Elastic(amplitude, period) {
      if (amplitude === void 0) amplitude = 1;
      if (period === void 0) period = .5;
      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, .1, 2);
      return function (t) {
        return t === 0 || t === 1 ? t : -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
      };
    }
  };
  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];
  baseEasings.forEach(function (name, i) {
    functionEasings[name] = function () {
      return function (t) {
        return Math.pow(t, i + 2);
      };
    };
  });
  Object.keys(functionEasings).forEach(function (name) {
    var easeIn = functionEasings[name];
    eases['easeIn' + name] = easeIn;

    eases['easeOut' + name] = function (a, b) {
      return function (t) {
        return 1 - easeIn(a, b)(1 - t);
      };
    };

    eases['easeInOut' + name] = function (a, b) {
      return function (t) {
        return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 1 - easeIn(a, b)(t * -2 + 2) / 2;
      };
    };

    eases['easeOutIn' + name] = function (a, b) {
      return function (t) {
        return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : (easeIn(a, b)(t * 2 - 1) + 1) / 2;
      };
    };
  });
  return eases;
}();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) {
    return easing;
  }

  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);

  switch (name) {
    case 'spring':
      return spring(easing, duration);

    case 'cubicBezier':
      return applyArguments(bezier, args);

    case 'steps':
      return applyArguments(steps, args);

    default:
      return applyArguments(ease, args);
  }
} // Strings


function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e) {
    return;
  }
} // Arrays


function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];

  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];

      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }

  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(is.arr(b) ? flattenArray(b) : b);
  }, []);
}

function toArray(o) {
  if (is.arr(o)) {
    return o;
  }

  if (is.str(o)) {
    o = selectString(o) || o;
  }

  if (o instanceof NodeList || o instanceof HTMLCollection) {
    return [].slice.call(o);
  }

  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) {
    return a === val;
  });
} // Objects


function cloneObject(o) {
  var clone = {};

  for (var p in o) {
    clone[p] = o[p];
  }

  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o1) {
    o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
  }

  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o2) {
    o[p] = is.und(o1[p]) ? o2[p] : o1[p];
  }

  return o;
} // Colors


function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(" + r + "," + g + "," + b + ",1)";
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;

  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }

    if (t > 1) {
      t -= 1;
    }

    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
      return q;
    }

    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
  }

  var r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}

function colorToRgb(val) {
  if (is.rgb(val)) {
    return rgbToRgba(val);
  }

  if (is.hex(val)) {
    return hexToRgba(val);
  }

  if (is.hsl(val)) {
    return hslToRgba(val);
  }
} // Units


function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);

  if (split) {
    return split[1];
  }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') {
    return 'px';
  }

  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) {
    return 'deg';
  }
} // Values


function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) {
    return val;
  }

  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);

  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) {
    return value;
  }

  var cached = cache.CSS[value + unit];

  if (!is.und(cached)) {
    return cached;
  }

  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || is.svg(el) && el[prop])) {
    return 'attribute';
  }

  if (is.dom(el) && arrayContains(validTransforms, prop)) {
    return 'transform';
  }

  if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) {
    return 'css';
  }

  if (el[prop] != null) {
    return 'object';
  }
}

function getElementTransforms(el) {
  if (!is.dom(el)) {
    return;
  }

  var str = el.style.transform || '';
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m;

  while (m = reg.exec(str)) {
    transforms.set(m[1], m[2]);
  }

  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;

  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }

  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform':
      return getTransformValue(target, propName, animatable, unit);

    case 'css':
      return getCSSValue(target, propName, unit);

    case 'attribute':
      return getAttribute(target, propName);

    default:
      return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);

  if (!operator) {
    return to;
  }

  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));

  switch (operator[0][0]) {
    case '+':
      return x + y + u;

    case '-':
      return x - y + u;

    case '*':
      return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) {
    return colorToRgb(val);
  }

  if (/\s/g.test(val)) {
    return val;
  }

  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;

  if (unit) {
    return unitLess + unit;
  }

  return unitLess;
} // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744


function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return getAttribute(el, 'width') * 2 + getAttribute(el, 'height') * 2;
}

function getLineLength(el) {
  return getDistance({
    x: getAttribute(el, 'x1'),
    y: getAttribute(el, 'y1')
  }, {
    x: getAttribute(el, 'x2'),
    y: getAttribute(el, 'y2')
  });
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;

  for (var i = 0; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);

    if (i > 0) {
      totalLength += getDistance(previousPos, currentPos);
    }

    previousPos = currentPos;
  }

  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
} // Path animation


function getTotalLength(el) {
  if (el.getTotalLength) {
    return el.getTotalLength();
  }

  switch (el.tagName.toLowerCase()) {
    case 'circle':
      return getCircleLength(el);

    case 'rect':
      return getRectLength(el);

    case 'line':
      return getLineLength(el);

    case 'polyline':
      return getPolylineLength(el);

    case 'polygon':
      return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
} // Motion path


function getParentSvgEl(el) {
  var parentEl = el.parentNode;

  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) {
      break;
    }

    parentEl = parentEl.parentNode;
  }

  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  };
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function (property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    };
  };
}

function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if (offset === void 0) offset = 0;
    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }

  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
  var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;

  switch (path.property) {
    case 'x':
      return (p.x - svg.x) * scaleX;

    case 'y':
      return (p.y - svg.y) * scaleY;

    case 'angle':
      return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
} // Decompose value


function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation

  var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: is.str(val) || unit ? value.split(rgx) : []
  };
} // Animatables


function parseTargets(targets) {
  var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
  return filterArray(targetsArray, function (item, pos, self) {
    return self.indexOf(item) === pos;
  });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {
      target: t,
      id: i,
      total: parsed.length,
      transforms: {
        list: getElementTransforms(t)
      }
    };
  });
} // Properties


function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings); // Override duration if easing is a spring

  if (/^spring/.test(settings.easing)) {
    settings.duration = spring(settings.easing);
  }

  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = l === 2 && !is.obj(prop[0]);

    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l;
      }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {
        value: prop
      };
    }
  }

  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = is.obj(v) && !is.pth(v) ? v : {
      value: v
    }; // Default delay value should only be applied to the first tween

    if (is.und(obj.delay)) {
      obj.delay = !i ? tweenSettings.delay : 0;
    } // Default endDelay value should only be applied to the last tween


    if (is.und(obj.endDelay)) {
      obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0;
    }

    return obj;
  }).map(function (k) {
    return mergeObjects(k, settings);
  });
}

function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) {
    return Object.keys(key);
  })), function (p) {
    return is.key(p);
  }).reduce(function (a, b) {
    if (a.indexOf(b) < 0) {
      a.push(b);
    }

    return a;
  }, []);
  var properties = {};

  var loop = function loop(i) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};

      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) {
            newKey.value = key[p];
          }
        } else {
          newKey[p] = key[p];
        }
      }

      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) {
    loop(i);
  }

  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;

  if (keyframes) {
    params = mergeObjects(flattenKeyframes(keyframes), params);
  }

  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }

  return properties;
} // Tweens


function normalizeTweenValues(tween, animatable) {
  var t = {};

  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);

    if (is.arr(value)) {
      value = value.map(function (v) {
        return getFunctionValue(v, animatable);
      });

      if (value.length === 1) {
        value = value[0];
      }
    }

    t[p] = value;
  }

  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;

    if (is.und(to)) {
      to = previousValue;
    }

    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
    tween.isColor = is.col(tween.from.original);

    if (tween.isColor) {
      tween.round = 1;
    }

    previousTween = tween;
    return tween;
  });
} // Tween progress


var setProgressValue = {
  css: function css(t, p, v) {
    return t.style[p] = v;
  },
  attribute: function attribute(t, p, v) {
    return t.setAttribute(p, v);
  },
  object: function object(t, p, v) {
    return t[p] = v;
  },
  transform: function transform(t, p, v, transforms, manual) {
    transforms.list.set(p, v);

    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) {
        str += prop + "(" + value + ") ";
      });
      t.style.transform = str;
    }
  }
}; // Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
} // Animations


function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);

  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    };
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) {
    return !is.und(a);
  });
} // Create Instance


function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;

  var getTlOffset = function getTlOffset(anim) {
    return anim.timelineOffset ? anim.timelineOffset : 0;
  };

  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.duration;
  })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.delay;
  })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.duration - anim.endDelay;
  })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
} // Core


var activeInstances = [];

var engine = function () {
  var raf;

  function play() {
    if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
      raf = requestAnimationFrame(step);
    }
  }

  function step(t) {
    // memo on algorithm issue:
    // dangerous iteration over mutable `activeInstances`
    // (that collection may be updated from within callbacks of `tick`-ed animation instances)
    var activeInstancesLength = activeInstances.length;
    var i = 0;

    while (i < activeInstancesLength) {
      var activeInstance = activeInstances[i];

      if (!activeInstance.paused) {
        activeInstance.tick(t);
        i++;
      } else {
        activeInstances.splice(i, 1);
        activeInstancesLength--;
      }
    }

    raf = i > 0 ? requestAnimationFrame(step) : undefined;
  }

  function handleVisibilityChange() {
    if (!anime.suspendWhenDocumentHidden) {
      return;
    }

    if (isDocumentHidden()) {
      // suspend ticks
      raf = cancelAnimationFrame(raf);
    } else {
      // is back to active tab
      // first adjust animations to consider the time that ticks were suspended
      activeInstances.forEach(function (instance) {
        return instance._onDocumentVisibility();
      });
      engine();
    }
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  }

  return play;
}();

function isDocumentHidden() {
  return !!document && document.hidden;
} // Public Instance


function anime(params) {
  if (params === void 0) params = {};
  var startTime = 0,
      lastTime = 0,
      now = 0;
  var children,
      childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) {
      return resolve = _resolve;
    });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;

    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }

    instance.reversed = !instance.reversed;
    children.forEach(function (child) {
      return child.reversed = instance.reversed;
    });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekChild(time, child) {
    if (child) {
      child.seek(time - child.timelineOffset);
    }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) {
        seekChild(time, children[i]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--;) {
        seekChild(time, children[i$1]);
      }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;

    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength]; // Only check for keyframes if there is more than one tween

      if (tweenLength) {
        tween = filterArray(tweens, function (t) {
          return insTime < t.end;
        })[0] || tween;
      }

      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = void 0;

      for (var n = 0; n < toNumbersLength; n++) {
        var value = void 0;
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;

        if (!tween.isPath) {
          value = fromNumber + eased * (toNumber - fromNumber);
        } else {
          value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
        }

        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }

        numbers.push(value);
      } // Manual Array.reduce for better performances


      var stringsLength = strings.length;

      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];

        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];

          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }

      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) {
      instance[cb](instance);
    }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax(insTime / insDuration * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;

    if (children) {
      syncInstanceChildren(insTime);
    }

    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
    }

    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback('loopBegin');
    }

    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }

    if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) {
      setAnimationsProgress(insDuration);
    }

    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }

      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }

    instance.currentTime = minMax(insTime, 0, insDuration);

    if (instance.began) {
      setCallback('update');
    }

    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();

      if (!instance.remaining) {
        instance.paused = true;

        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');

          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback('loopComplete');
        instance.loopBegan = false;

        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      }
    }
  }

  instance.reset = function () {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;

    for (var i = childrenLength; i--;) {
      instance.children[i].reset();
    }

    if (instance.reversed && instance.loop !== true || direction === 'alternate' && instance.loop === 1) {
      instance.remaining++;
    }

    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  }; // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)


  instance._onDocumentVisibility = resetTime; // Set Value helper

  instance.set = function (targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function (t) {
    now = t;

    if (!startTime) {
      startTime = now;
    }

    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function (time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function () {
    instance.paused = true;
    resetTime();
  };

  instance.play = function () {
    if (!instance.paused) {
      return;
    }

    if (instance.completed) {
      instance.reset();
    }

    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    engine();
  };

  instance.reverse = function () {
    toggleInstanceDirection();
    instance.completed = instance.reversed ? false : true;
    resetTime();
  };

  instance.restart = function () {
    instance.reset();
    instance.play();
  };

  instance.remove = function (targets) {
    var targetsArray = parseTargets(targets);
    removeTargetsFromInstance(targetsArray, instance);
  };

  instance.reset();

  if (instance.autoplay) {
    instance.play();
  }

  return instance;
} // Remove targets from animation


function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargetsFromInstance(targetsArray, instance) {
  var animations = instance.animations;
  var children = instance.children;
  removeTargetsFromAnimations(targetsArray, animations);

  for (var c = children.length; c--;) {
    var child = children[c];
    var childAnimations = child.animations;
    removeTargetsFromAnimations(targetsArray, childAnimations);

    if (!childAnimations.length && !child.children.length) {
      children.splice(c, 1);
    }
  }

  if (!animations.length && !children.length) {
    instance.pause();
  }
}

function removeTargetsFromActiveInstances(targets) {
  var targetsArray = parseTargets(targets);

  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    removeTargetsFromInstance(targetsArray, instance);
  }
} // Stagger helpers


function stagger(val, params) {
  if (params === void 0) params = {};
  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) {
      fromIndex = 0;
    }

    if (fromCenter) {
      fromIndex = (t - 1) / 2;
    }

    if (fromLast) {
      fromIndex = t - 1;
    }

    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
          var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
          var toX = index % grid[0];
          var toY = Math.floor(index / grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

          if (axis === 'x') {
            value = -distanceX;
          }

          if (axis === 'y') {
            value = -distanceY;
          }

          values.push(value);
        }

        maxValue = Math.max.apply(Math, values);
      }

      if (easing) {
        values = values.map(function (val) {
          return easing(val / maxValue) * maxValue;
        });
      }

      if (direction === 'reverse') {
        values = values.map(function (val) {
          return axis ? val < 0 ? val * -1 : -val : Math.abs(maxValue - val);
        });
      }
    }

    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
  };
} // Timeline


function timeline(params) {
  if (params === void 0) params = {};
  var tl = anime(params);
  tl.duration = 0;

  tl.add = function (instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;

    if (tlIndex > -1) {
      activeInstances.splice(tlIndex, 1);
    }

    function passThrough(ins) {
      ins.passThrough = true;
    }

    for (var i = 0; i < children.length; i++) {
      passThrough(children[i]);
    }

    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();

    if (tl.autoplay) {
      tl.play();
    }

    return tl;
  };

  return tl;
}

anime.version = '3.2.1';
anime.speed = 1; // TODO:#review: naming, documentation

anime.suspendWhenDocumentHidden = true;
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;

anime.random = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = anime;

/***/ }),

/***/ "./src/scripts/vendor/noframework.waypoints.js":
/*!*****************************************************!*\
  !*** ./src/scripts/vendor/noframework.waypoints.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function () {
  'use strict';

  var keyCounter = 0;
  var allWaypoints = {};
  /* http://imakewebthings.com/waypoints/api/waypoint */

  function Waypoint(options) {
    if (!options) {
      throw new Error('No options passed to Waypoint constructor');
    }

    if (!options.element) {
      throw new Error('No element option passed to Waypoint constructor');
    }

    if (!options.handler) {
      throw new Error('No handler option passed to Waypoint constructor');
    }

    this.key = 'waypoint-' + keyCounter;
    this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options);
    this.element = this.options.element;
    this.adapter = new Waypoint.Adapter(this.element);
    this.callback = options.handler;
    this.axis = this.options.horizontal ? 'horizontal' : 'vertical';
    this.enabled = this.options.enabled;
    this.triggerPoint = null;
    this.group = Waypoint.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    });
    this.context = Waypoint.Context.findOrCreateByElement(this.options.context);

    if (Waypoint.offsetAliases[this.options.offset]) {
      this.options.offset = Waypoint.offsetAliases[this.options.offset];
    }

    this.group.add(this);
    this.context.add(this);
    allWaypoints[this.key] = this;
    keyCounter += 1;
  }
  /* Private */


  Waypoint.prototype.queueTrigger = function (direction) {
    this.group.queueTrigger(this, direction);
  };
  /* Private */


  Waypoint.prototype.trigger = function (args) {
    if (!this.enabled) {
      return;
    }

    if (this.callback) {
      this.callback.apply(this, args);
    }
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/destroy */


  Waypoint.prototype.destroy = function () {
    this.context.remove(this);
    this.group.remove(this);
    delete allWaypoints[this.key];
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/disable */


  Waypoint.prototype.disable = function () {
    this.enabled = false;
    return this;
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/enable */


  Waypoint.prototype.enable = function () {
    this.context.refresh();
    this.enabled = true;
    return this;
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/next */


  Waypoint.prototype.next = function () {
    return this.group.next(this);
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/previous */


  Waypoint.prototype.previous = function () {
    return this.group.previous(this);
  };
  /* Private */


  Waypoint.invokeAll = function (method) {
    var allWaypointsArray = [];

    for (var waypointKey in allWaypoints) {
      allWaypointsArray.push(allWaypoints[waypointKey]);
    }

    for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
      allWaypointsArray[i][method]();
    }
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/destroy-all */


  Waypoint.destroyAll = function () {
    Waypoint.invokeAll('destroy');
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/disable-all */


  Waypoint.disableAll = function () {
    Waypoint.invokeAll('disable');
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/enable-all */


  Waypoint.enableAll = function () {
    Waypoint.Context.refreshAll();

    for (var waypointKey in allWaypoints) {
      allWaypoints[waypointKey].enabled = true;
    }

    return this;
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/refresh-all */


  Waypoint.refreshAll = function () {
    Waypoint.Context.refreshAll();
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/viewport-height */


  Waypoint.viewportHeight = function () {
    return window.innerHeight || document.documentElement.clientHeight;
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/viewport-width */


  Waypoint.viewportWidth = function () {
    return document.documentElement.clientWidth;
  };

  Waypoint.adapters = [];
  Waypoint.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    group: 'default',
    horizontal: false,
    offset: 0
  };
  Waypoint.offsetAliases = {
    'bottom-in-view': function bottomInView() {
      return this.context.innerHeight() - this.adapter.outerHeight();
    },
    'right-in-view': function rightInView() {
      return this.context.innerWidth() - this.adapter.outerWidth();
    }
  };
  window.Waypoint = Waypoint;
})();

(function () {
  'use strict';

  function requestAnimationFrameShim(callback) {
    window.setTimeout(callback, 1000 / 60);
  }

  var keyCounter = 0;
  var contexts = {};
  var Waypoint = window.Waypoint;
  var oldWindowLoad = window.onload;
  /* http://imakewebthings.com/waypoints/api/context */

  function Context(element) {
    this.element = element;
    this.Adapter = Waypoint.Adapter;
    this.adapter = new this.Adapter(element);
    this.key = 'waypoint-context-' + keyCounter;
    this.didScroll = false;
    this.didResize = false;
    this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    };
    this.waypoints = {
      vertical: {},
      horizontal: {}
    };
    element.waypointContextKey = this.key;
    contexts[element.waypointContextKey] = this;
    keyCounter += 1;

    if (!Waypoint.windowContext) {
      Waypoint.windowContext = true;
      Waypoint.windowContext = new Context(window);
    }

    this.createThrottledScrollHandler();
    this.createThrottledResizeHandler();
  }
  /* Private */


  Context.prototype.add = function (waypoint) {
    var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical';
    this.waypoints[axis][waypoint.key] = waypoint;
    this.refresh();
  };
  /* Private */


  Context.prototype.checkEmpty = function () {
    var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal);
    var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical);
    var isWindow = this.element == this.element.window;

    if (horizontalEmpty && verticalEmpty && !isWindow) {
      this.adapter.off('.waypoints');
      delete contexts[this.key];
    }
  };
  /* Private */


  Context.prototype.createThrottledResizeHandler = function () {
    var self = this;

    function resizeHandler() {
      self.handleResize();
      self.didResize = false;
    }

    this.adapter.on('resize.waypoints', function () {
      if (!self.didResize) {
        self.didResize = true;
        Waypoint.requestAnimationFrame(resizeHandler);
      }
    });
  };
  /* Private */


  Context.prototype.createThrottledScrollHandler = function () {
    var self = this;

    function scrollHandler() {
      self.handleScroll();
      self.didScroll = false;
    }

    this.adapter.on('scroll.waypoints', function () {
      if (!self.didScroll || Waypoint.isTouch) {
        self.didScroll = true;
        Waypoint.requestAnimationFrame(scrollHandler);
      }
    });
  };
  /* Private */


  Context.prototype.handleResize = function () {
    Waypoint.Context.refreshAll();
  };
  /* Private */


  Context.prototype.handleScroll = function () {
    var triggeredGroups = {};
    var axes = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left'
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up'
      }
    };

    for (var axisKey in axes) {
      var axis = axes[axisKey];
      var isForward = axis.newScroll > axis.oldScroll;
      var direction = isForward ? axis.forward : axis.backward;

      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey];

        if (waypoint.triggerPoint === null) {
          continue;
        }

        var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint;
        var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint;
        var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint;
        var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint;

        if (crossedForward || crossedBackward) {
          waypoint.queueTrigger(direction);
          triggeredGroups[waypoint.group.id] = waypoint.group;
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers();
    }

    this.oldScroll = {
      x: axes.horizontal.newScroll,
      y: axes.vertical.newScroll
    };
  };
  /* Private */


  Context.prototype.innerHeight = function () {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportHeight();
    }
    /*eslint-enable eqeqeq */


    return this.adapter.innerHeight();
  };
  /* Private */


  Context.prototype.remove = function (waypoint) {
    delete this.waypoints[waypoint.axis][waypoint.key];
    this.checkEmpty();
  };
  /* Private */


  Context.prototype.innerWidth = function () {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportWidth();
    }
    /*eslint-enable eqeqeq */


    return this.adapter.innerWidth();
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/context-destroy */


  Context.prototype.destroy = function () {
    var allWaypoints = [];

    for (var axis in this.waypoints) {
      for (var waypointKey in this.waypoints[axis]) {
        allWaypoints.push(this.waypoints[axis][waypointKey]);
      }
    }

    for (var i = 0, end = allWaypoints.length; i < end; i++) {
      allWaypoints[i].destroy();
    }
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/context-refresh */


  Context.prototype.refresh = function () {
    /*eslint-disable eqeqeq */
    var isWindow = this.element == this.element.window;
    /*eslint-enable eqeqeq */

    var contextOffset = isWindow ? undefined : this.adapter.offset();
    var triggeredGroups = {};
    var axes;
    this.handleScroll();
    axes = {
      horizontal: {
        contextOffset: isWindow ? 0 : contextOffset.left,
        contextScroll: isWindow ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left',
        offsetProp: 'left'
      },
      vertical: {
        contextOffset: isWindow ? 0 : contextOffset.top,
        contextScroll: isWindow ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up',
        offsetProp: 'top'
      }
    };

    for (var axisKey in axes) {
      var axis = axes[axisKey];

      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey];
        var adjustment = waypoint.options.offset;
        var oldTriggerPoint = waypoint.triggerPoint;
        var elementOffset = 0;
        var freshWaypoint = oldTriggerPoint == null;
        var contextModifier, wasBeforeScroll, nowAfterScroll;
        var triggeredBackward, triggeredForward;

        if (waypoint.element !== waypoint.element.window) {
          elementOffset = waypoint.adapter.offset()[axis.offsetProp];
        }

        if (typeof adjustment === 'function') {
          adjustment = adjustment.apply(waypoint);
        } else if (typeof adjustment === 'string') {
          adjustment = parseFloat(adjustment);

          if (waypoint.options.offset.indexOf('%') > -1) {
            adjustment = Math.ceil(axis.contextDimension * adjustment / 100);
          }
        }

        contextModifier = axis.contextScroll - axis.contextOffset;
        waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment);
        wasBeforeScroll = oldTriggerPoint < axis.oldScroll;
        nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll;
        triggeredBackward = wasBeforeScroll && nowAfterScroll;
        triggeredForward = !wasBeforeScroll && !nowAfterScroll;

        if (!freshWaypoint && triggeredBackward) {
          waypoint.queueTrigger(axis.backward);
          triggeredGroups[waypoint.group.id] = waypoint.group;
        } else if (!freshWaypoint && triggeredForward) {
          waypoint.queueTrigger(axis.forward);
          triggeredGroups[waypoint.group.id] = waypoint.group;
        } else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
          waypoint.queueTrigger(axis.forward);
          triggeredGroups[waypoint.group.id] = waypoint.group;
        }
      }
    }

    Waypoint.requestAnimationFrame(function () {
      for (var groupKey in triggeredGroups) {
        triggeredGroups[groupKey].flushTriggers();
      }
    });
    return this;
  };
  /* Private */


  Context.findOrCreateByElement = function (element) {
    return Context.findByElement(element) || new Context(element);
  };
  /* Private */


  Context.refreshAll = function () {
    for (var contextId in contexts) {
      contexts[contextId].refresh();
    }
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/context-find-by-element */


  Context.findByElement = function (element) {
    return contexts[element.waypointContextKey];
  };

  window.onload = function () {
    if (oldWindowLoad) {
      oldWindowLoad();
    }

    Context.refreshAll();
  };

  Waypoint.requestAnimationFrame = function (callback) {
    var requestFn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim;
    requestFn.call(window, callback);
  };

  Waypoint.Context = Context;
})();

(function () {
  'use strict';

  function byTriggerPoint(a, b) {
    return a.triggerPoint - b.triggerPoint;
  }

  function byReverseTriggerPoint(a, b) {
    return b.triggerPoint - a.triggerPoint;
  }

  var groups = {
    vertical: {},
    horizontal: {}
  };
  var Waypoint = window.Waypoint;
  /* http://imakewebthings.com/waypoints/api/group */

  function Group(options) {
    this.name = options.name;
    this.axis = options.axis;
    this.id = this.name + '-' + this.axis;
    this.waypoints = [];
    this.clearTriggerQueues();
    groups[this.axis][this.name] = this;
  }
  /* Private */


  Group.prototype.add = function (waypoint) {
    this.waypoints.push(waypoint);
  };
  /* Private */


  Group.prototype.clearTriggerQueues = function () {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    };
  };
  /* Private */


  Group.prototype.flushTriggers = function () {
    for (var direction in this.triggerQueues) {
      var waypoints = this.triggerQueues[direction];
      var reverse = direction === 'up' || direction === 'left';
      waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);

      for (var i = 0, end = waypoints.length; i < end; i += 1) {
        var waypoint = waypoints[i];

        if (waypoint.options.continuous || i === waypoints.length - 1) {
          waypoint.trigger([direction]);
        }
      }
    }

    this.clearTriggerQueues();
  };
  /* Private */


  Group.prototype.next = function (waypoint) {
    this.waypoints.sort(byTriggerPoint);
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
    var isLast = index === this.waypoints.length - 1;
    return isLast ? null : this.waypoints[index + 1];
  };
  /* Private */


  Group.prototype.previous = function (waypoint) {
    this.waypoints.sort(byTriggerPoint);
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
    return index ? this.waypoints[index - 1] : null;
  };
  /* Private */


  Group.prototype.queueTrigger = function (waypoint, direction) {
    this.triggerQueues[direction].push(waypoint);
  };
  /* Private */


  Group.prototype.remove = function (waypoint) {
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);

    if (index > -1) {
      this.waypoints.splice(index, 1);
    }
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/first */


  Group.prototype.first = function () {
    return this.waypoints[0];
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/last */


  Group.prototype.last = function () {
    return this.waypoints[this.waypoints.length - 1];
  };
  /* Private */


  Group.findOrCreate = function (options) {
    return groups[options.axis][options.name] || new Group(options);
  };

  Waypoint.Group = Group;
})();

(function () {
  'use strict';

  var Waypoint = window.Waypoint;

  function isWindow(element) {
    return element === element.window;
  }

  function getWindow(element) {
    if (isWindow(element)) {
      return element;
    }

    return element.defaultView;
  }

  function NoFrameworkAdapter(element) {
    this.element = element;
    this.handlers = {};
  }

  NoFrameworkAdapter.prototype.innerHeight = function () {
    var isWin = isWindow(this.element);
    return isWin ? this.element.innerHeight : this.element.clientHeight;
  };

  NoFrameworkAdapter.prototype.innerWidth = function () {
    var isWin = isWindow(this.element);
    return isWin ? this.element.innerWidth : this.element.clientWidth;
  };

  NoFrameworkAdapter.prototype.off = function (event, handler) {
    function removeListeners(element, listeners, handler) {
      for (var i = 0, end = listeners.length - 1; i < end; i++) {
        var listener = listeners[i];

        if (!handler || handler === listener) {
          element.removeEventListener(listener);
        }
      }
    }

    var eventParts = event.split('.');
    var eventType = eventParts[0];
    var namespace = eventParts[1];
    var element = this.element;

    if (namespace && this.handlers[namespace] && eventType) {
      removeListeners(element, this.handlers[namespace][eventType], handler);
      this.handlers[namespace][eventType] = [];
    } else if (eventType) {
      for (var ns in this.handlers) {
        removeListeners(element, this.handlers[ns][eventType] || [], handler);
        this.handlers[ns][eventType] = [];
      }
    } else if (namespace && this.handlers[namespace]) {
      for (var type in this.handlers[namespace]) {
        removeListeners(element, this.handlers[namespace][type], handler);
      }

      this.handlers[namespace] = {};
    }
  };
  /* Adapted from jQuery 1.x offset() */


  NoFrameworkAdapter.prototype.offset = function () {
    if (!this.element.ownerDocument) {
      return null;
    }

    var documentElement = this.element.ownerDocument.documentElement;
    var win = getWindow(this.element.ownerDocument);
    var rect = {
      top: 0,
      left: 0
    };

    if (this.element.getBoundingClientRect) {
      rect = this.element.getBoundingClientRect();
    }

    return {
      top: rect.top + win.pageYOffset - documentElement.clientTop,
      left: rect.left + win.pageXOffset - documentElement.clientLeft
    };
  };

  NoFrameworkAdapter.prototype.on = function (event, handler) {
    var eventParts = event.split('.');
    var eventType = eventParts[0];
    var namespace = eventParts[1] || '__default';
    var nsHandlers = this.handlers[namespace] = this.handlers[namespace] || {};
    var nsTypeList = nsHandlers[eventType] = nsHandlers[eventType] || [];
    nsTypeList.push(handler);
    this.element.addEventListener(eventType, handler);
  };

  NoFrameworkAdapter.prototype.outerHeight = function (includeMargin) {
    var height = this.innerHeight();
    var computedStyle;

    if (includeMargin && !isWindow(this.element)) {
      computedStyle = window.getComputedStyle(this.element);
      height += parseInt(computedStyle.marginTop, 10);
      height += parseInt(computedStyle.marginBottom, 10);
    }

    return height;
  };

  NoFrameworkAdapter.prototype.outerWidth = function (includeMargin) {
    var width = this.innerWidth();
    var computedStyle;

    if (includeMargin && !isWindow(this.element)) {
      computedStyle = window.getComputedStyle(this.element);
      width += parseInt(computedStyle.marginLeft, 10);
      width += parseInt(computedStyle.marginRight, 10);
    }

    return width;
  };

  NoFrameworkAdapter.prototype.scrollLeft = function () {
    var win = getWindow(this.element);
    return win ? win.pageXOffset : this.element.scrollLeft;
  };

  NoFrameworkAdapter.prototype.scrollTop = function () {
    var win = getWindow(this.element);
    return win ? win.pageYOffset : this.element.scrollTop;
  };

  NoFrameworkAdapter.extend = function () {
    var args = Array.prototype.slice.call(arguments);

    function merge(target, obj) {
      if (_typeof(target) === 'object' && _typeof(obj) === 'object') {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            target[key] = obj[key];
          }
        }
      }

      return target;
    }

    for (var i = 1, end = args.length; i < end; i++) {
      merge(args[0], args[i]);
    }

    return args[0];
  };

  NoFrameworkAdapter.inArray = function (element, array, i) {
    return array == null ? -1 : array.indexOf(element, i);
  };

  NoFrameworkAdapter.isEmptyObject = function (obj) {
    /* eslint no-unused-vars: 0 */
    for (var name in obj) {
      return false;
    }

    return true;
  };

  Waypoint.adapters.push({
    name: 'noframework',
    Adapter: NoFrameworkAdapter
  });
  Waypoint.Adapter = NoFrameworkAdapter;
})();

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/scripts/script.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Andreas\Local Sites\patches\app\public\wp-content\themes\patches\src\scripts\script.js */"./src/scripts/script.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9tb2JpbGVNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZHVsZXMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy92ZW5kb3IvYW5pbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdmVuZG9yL25vZnJhbWV3b3JrLndheXBvaW50cy5qcyJdLCJuYW1lcyI6WyJBbmltYXRpb25zIiwib2RkRXZlbkFuaW1hdGlvbiIsIm9kZHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJldmVucyIsImZvckVhY2giLCJlbGVtZW50IiwiV2F5cG9pbnQiLCJoYW5kbGVyIiwiYW5pbWUiLCJ0YXJnZXRzIiwib3BhY2l0eSIsInRyYW5zbGF0ZVkiLCJkZWxheSIsImR1cmF0aW9uIiwiZWFzaW5nIiwiZGVzdHJveSIsIm9mZnNldCIsIk1vYmlsZU1lbnUiLCJoZWFkZXIiLCJxdWVyeVNlbGVjdG9yIiwidG9nZ2xlTWVudSIsIm1lbnUiLCJzdWJtZW51QnRuIiwiaXNNZW51T3BlbiIsImV2ZW50cyIsImVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaWdnZXJNZW51IiwidG9nZ2xlU3ViTWVudSIsImtleVByZXNzIiwid2luZG93IiwiY2hhbmdlSGVhZGVyIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImdldEF0dHJpYnV0ZSIsInRhcmdldE1lbnUiLCJvdGhlck1lbnVzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjbG9zZU1lbnUiLCJvcGVuTWVudSIsImlkIiwibWVudUJ0biIsInNjcm9sbFkiLCJib2R5Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImFkZCIsInNldEF0dHJpYnV0ZSIsImJvZHlTdHlsZSIsInNjcm9sbFRvIiwicGFyc2VJbnQiLCJyZW1vdmUiLCJidG4iLCJwYXJlbnROb2RlIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsIm9uY2UiLCJrZXlDb2RlIiwic2Nyb2xsUG9zIiwiU2VhcmNoIiwic2VhcmNoTW9kYWwiLCJzZWFyY2hCdXR0b24iLCJzZWFyY2hGaWVsZCIsInNlYXJjaE92ZXJsYXkiLCJpc1NlYXJjaE9wZW4iLCJ0b2dnbGVNb2RhbCIsImNsb3NlTW9kYWwiLCJvcGVuTW9kYWwiLCJ2YWx1ZSIsImZvY3VzIiwicmFzYW5kZURvbVJlYWR5IiwiZm4iLCJyZWFkeVN0YXRlIiwibW9iaWxlTWVudSIsImFuaW1hdGlvbiIsInNlYXJjaCIsImRlZmF1bHRJbnN0YW5jZVNldHRpbmdzIiwidXBkYXRlIiwiYmVnaW4iLCJsb29wQmVnaW4iLCJjaGFuZ2VCZWdpbiIsImNoYW5nZSIsImNoYW5nZUNvbXBsZXRlIiwibG9vcENvbXBsZXRlIiwiY29tcGxldGUiLCJsb29wIiwiZGlyZWN0aW9uIiwiYXV0b3BsYXkiLCJ0aW1lbGluZU9mZnNldCIsImRlZmF1bHRUd2VlblNldHRpbmdzIiwiZW5kRGVsYXkiLCJyb3VuZCIsInZhbGlkVHJhbnNmb3JtcyIsImNhY2hlIiwiQ1NTIiwic3ByaW5ncyIsIm1pbk1heCIsInZhbCIsIm1pbiIsIm1heCIsIk1hdGgiLCJzdHJpbmdDb250YWlucyIsInN0ciIsInRleHQiLCJpbmRleE9mIiwiYXBwbHlBcmd1bWVudHMiLCJmdW5jIiwiYXJncyIsImFwcGx5IiwiaXMiLCJhcnIiLCJhIiwiQXJyYXkiLCJpc0FycmF5Iiwib2JqIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwicHRoIiwiaGFzT3duUHJvcGVydHkiLCJzdmciLCJTVkdFbGVtZW50IiwiaW5wIiwiSFRNTElucHV0RWxlbWVudCIsImRvbSIsIm5vZGVUeXBlIiwiZm5jIiwidW5kIiwibmlsIiwiaGV4IiwidGVzdCIsInJnYiIsImhzbCIsImNvbCIsImtleSIsInBhcnNlRWFzaW5nUGFyYW1ldGVycyIsInN0cmluZyIsIm1hdGNoIiwiZXhlYyIsInNwbGl0IiwibWFwIiwicCIsInBhcnNlRmxvYXQiLCJzcHJpbmciLCJwYXJhbXMiLCJtYXNzIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsInZlbG9jaXR5IiwidzAiLCJzcXJ0IiwiemV0YSIsIndkIiwiYiIsInNvbHZlciIsInQiLCJwcm9ncmVzcyIsImV4cCIsImNvcyIsInNpbiIsImdldER1cmF0aW9uIiwiY2FjaGVkIiwiZnJhbWUiLCJlbGFwc2VkIiwicmVzdCIsInN0ZXBzIiwiY2VpbCIsImJlemllciIsImtTcGxpbmVUYWJsZVNpemUiLCJrU2FtcGxlU3RlcFNpemUiLCJBIiwiYUExIiwiYUEyIiwiQiIsIkMiLCJjYWxjQmV6aWVyIiwiYVQiLCJnZXRTbG9wZSIsImJpbmFyeVN1YmRpdmlkZSIsImFYIiwiYUEiLCJhQiIsIm1YMSIsIm1YMiIsImN1cnJlbnRYIiwiY3VycmVudFQiLCJpIiwiYWJzIiwibmV3dG9uUmFwaHNvbkl0ZXJhdGUiLCJhR3Vlc3NUIiwiY3VycmVudFNsb3BlIiwibVkxIiwibVkyIiwic2FtcGxlVmFsdWVzIiwiRmxvYXQzMkFycmF5IiwiZ2V0VEZvclgiLCJpbnRlcnZhbFN0YXJ0IiwiY3VycmVudFNhbXBsZSIsImxhc3RTYW1wbGUiLCJkaXN0IiwiZ3Vlc3NGb3JUIiwiaW5pdGlhbFNsb3BlIiwieCIsInBlbm5lciIsImVhc2VzIiwibGluZWFyIiwiZnVuY3Rpb25FYXNpbmdzIiwiU2luZSIsIlBJIiwiQ2lyYyIsIkJhY2siLCJCb3VuY2UiLCJwb3cyIiwicG93IiwiRWxhc3RpYyIsImFtcGxpdHVkZSIsInBlcmlvZCIsImFzaW4iLCJiYXNlRWFzaW5ncyIsIm5hbWUiLCJrZXlzIiwiZWFzZUluIiwicGFyc2VFYXNpbmdzIiwiZWFzZSIsInNlbGVjdFN0cmluZyIsIm5vZGVzIiwiZmlsdGVyQXJyYXkiLCJjYWxsYmFjayIsImxlbiIsImxlbmd0aCIsInRoaXNBcmciLCJhcmd1bWVudHMiLCJyZXN1bHQiLCJwdXNoIiwiZmxhdHRlbkFycmF5IiwicmVkdWNlIiwiY29uY2F0IiwidG9BcnJheSIsIm8iLCJOb2RlTGlzdCIsIkhUTUxDb2xsZWN0aW9uIiwic2xpY2UiLCJhcnJheUNvbnRhaW5zIiwic29tZSIsImNsb25lT2JqZWN0IiwiY2xvbmUiLCJyZXBsYWNlT2JqZWN0UHJvcHMiLCJvMSIsIm8yIiwibWVyZ2VPYmplY3RzIiwicmdiVG9SZ2JhIiwicmdiVmFsdWUiLCJoZXhUb1JnYmEiLCJoZXhWYWx1ZSIsInJneCIsInJlcGxhY2UiLCJtIiwiciIsImciLCJoc2xUb1JnYmEiLCJoc2xWYWx1ZSIsImgiLCJzIiwibCIsImh1ZTJyZ2IiLCJxIiwiY29sb3JUb1JnYiIsImdldFVuaXQiLCJnZXRUcmFuc2Zvcm1Vbml0IiwicHJvcE5hbWUiLCJnZXRGdW5jdGlvblZhbHVlIiwiYW5pbWF0YWJsZSIsInRvdGFsIiwicHJvcCIsImNvbnZlcnRQeFRvVW5pdCIsInVuaXQiLCJ2YWx1ZVVuaXQiLCJiYXNlbGluZSIsInRlbXBFbCIsImNyZWF0ZUVsZW1lbnQiLCJ0YWdOYW1lIiwicGFyZW50RWwiLCJhcHBlbmRDaGlsZCIsIndpZHRoIiwiZmFjdG9yIiwib2Zmc2V0V2lkdGgiLCJyZW1vdmVDaGlsZCIsImNvbnZlcnRlZFVuaXQiLCJnZXRDU1NWYWx1ZSIsInVwcGVyY2FzZVByb3BOYW1lIiwidG9Mb3dlckNhc2UiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImdldEFuaW1hdGlvblR5cGUiLCJnZXRFbGVtZW50VHJhbnNmb3JtcyIsInRyYW5zZm9ybSIsInJlZyIsInRyYW5zZm9ybXMiLCJNYXAiLCJzZXQiLCJnZXRUcmFuc2Zvcm1WYWx1ZSIsImRlZmF1bHRWYWwiLCJnZXQiLCJsaXN0IiwiZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZSIsImdldFJlbGF0aXZlVmFsdWUiLCJ0byIsImZyb20iLCJvcGVyYXRvciIsInUiLCJ5IiwidmFsaWRhdGVWYWx1ZSIsIm9yaWdpbmFsVW5pdCIsInVuaXRMZXNzIiwic3Vic3RyIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZ2V0Q2lyY2xlTGVuZ3RoIiwiZ2V0UmVjdExlbmd0aCIsImdldExpbmVMZW5ndGgiLCJnZXRQb2x5bGluZUxlbmd0aCIsInBvaW50cyIsInRvdGFsTGVuZ3RoIiwicHJldmlvdXNQb3MiLCJudW1iZXJPZkl0ZW1zIiwiY3VycmVudFBvcyIsImdldEl0ZW0iLCJnZXRQb2x5Z29uTGVuZ3RoIiwiZ2V0VG90YWxMZW5ndGgiLCJzZXREYXNob2Zmc2V0IiwicGF0aExlbmd0aCIsImdldFBhcmVudFN2Z0VsIiwiZ2V0UGFyZW50U3ZnIiwicGF0aEVsIiwic3ZnRGF0YSIsInBhcmVudFN2Z0VsIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInZpZXdCb3hBdHRyIiwidmlld0JveCIsInciLCJ2VyIsInZIIiwiZ2V0UGF0aCIsInBhdGgiLCJwZXJjZW50IiwicHJvcGVydHkiLCJnZXRQYXRoUHJvZ3Jlc3MiLCJpc1BhdGhUYXJnZXRJbnNpZGVTVkciLCJwb2ludCIsImdldFBvaW50QXRMZW5ndGgiLCJwMCIsInNjYWxlWCIsInNjYWxlWSIsImF0YW4yIiwiZGVjb21wb3NlVmFsdWUiLCJvcmlnaW5hbCIsIm51bWJlcnMiLCJOdW1iZXIiLCJzdHJpbmdzIiwicGFyc2VUYXJnZXRzIiwidGFyZ2V0c0FycmF5IiwiaXRlbSIsInBvcyIsInNlbGYiLCJnZXRBbmltYXRhYmxlcyIsInBhcnNlZCIsIm5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zIiwidHdlZW5TZXR0aW5ncyIsInNldHRpbmdzIiwiaXNGcm9tVG8iLCJwcm9wQXJyYXkiLCJ2IiwiayIsImZsYXR0ZW5LZXlmcmFtZXMiLCJrZXlmcmFtZXMiLCJwcm9wZXJ0eU5hbWVzIiwicHJvcGVydGllcyIsIm5ld0tleSIsImdldFByb3BlcnRpZXMiLCJ0d2VlbnMiLCJub3JtYWxpemVUd2VlblZhbHVlcyIsInR3ZWVuIiwibm9ybWFsaXplVHdlZW5zIiwicHJldmlvdXNUd2VlbiIsInR3ZWVuVmFsdWUiLCJ0b1VuaXQiLCJvcmlnaW5hbFZhbHVlIiwicHJldmlvdXNWYWx1ZSIsImZyb21Vbml0Iiwic3RhcnQiLCJlbmQiLCJpc1BhdGgiLCJpc0NvbG9yIiwic2V0UHJvZ3Jlc3NWYWx1ZSIsImNzcyIsImF0dHJpYnV0ZSIsIm9iamVjdCIsIm1hbnVhbCIsImxhc3QiLCJzZXRUYXJnZXRzVmFsdWUiLCJhbmltYXRhYmxlcyIsImFuaW1UeXBlIiwiY3JlYXRlQW5pbWF0aW9uIiwibGFzdFR3ZWVuIiwidHlwZSIsImdldEFuaW1hdGlvbnMiLCJnZXRJbnN0YW5jZVRpbWluZ3MiLCJhbmltYXRpb25zIiwiYW5pbUxlbmd0aCIsImdldFRsT2Zmc2V0IiwiYW5pbSIsInRpbWluZ3MiLCJpbnN0YW5jZUlEIiwiY3JlYXRlTmV3SW5zdGFuY2UiLCJpbnN0YW5jZVNldHRpbmdzIiwiY2hpbGRyZW4iLCJhY3RpdmVJbnN0YW5jZXMiLCJlbmdpbmUiLCJyYWYiLCJwbGF5IiwiaXNEb2N1bWVudEhpZGRlbiIsInN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdGVwIiwiYWN0aXZlSW5zdGFuY2VzTGVuZ3RoIiwiYWN0aXZlSW5zdGFuY2UiLCJwYXVzZWQiLCJ0aWNrIiwic3BsaWNlIiwidW5kZWZpbmVkIiwiaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaW5zdGFuY2UiLCJfb25Eb2N1bWVudFZpc2liaWxpdHkiLCJoaWRkZW4iLCJzdGFydFRpbWUiLCJsYXN0VGltZSIsIm5vdyIsImNoaWxkcmVuTGVuZ3RoIiwicmVzb2x2ZSIsIm1ha2VQcm9taXNlIiwicHJvbWlzZSIsIlByb21pc2UiLCJfcmVzb2x2ZSIsImZpbmlzaGVkIiwidG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24iLCJyZXZlcnNlZCIsImNoaWxkIiwiYWRqdXN0VGltZSIsInRpbWUiLCJyZXNldFRpbWUiLCJjdXJyZW50VGltZSIsInNwZWVkIiwic2Vla0NoaWxkIiwic2VlayIsInN5bmNJbnN0YW5jZUNoaWxkcmVuIiwicmV2ZXJzZVBsYXliYWNrIiwiaSQxIiwic2V0QW5pbWF0aW9uc1Byb2dyZXNzIiwiaW5zVGltZSIsImFuaW1hdGlvbnNMZW5ndGgiLCJ0d2Vlbkxlbmd0aCIsImVhc2VkIiwiaXNOYU4iLCJ0b051bWJlcnNMZW5ndGgiLCJuIiwidG9OdW1iZXIiLCJmcm9tTnVtYmVyIiwic3RyaW5nc0xlbmd0aCIsIm4kMSIsImN1cnJlbnRWYWx1ZSIsInNldENhbGxiYWNrIiwiY2IiLCJwYXNzVGhyb3VnaCIsImNvdW50SXRlcmF0aW9uIiwicmVtYWluaW5nIiwic2V0SW5zdGFuY2VQcm9ncmVzcyIsImVuZ2luZVRpbWUiLCJpbnNEdXJhdGlvbiIsImluc0RlbGF5IiwiaW5zRW5kRGVsYXkiLCJiZWdhbiIsImxvb3BCZWdhbiIsImNoYW5nZUJlZ2FuIiwiY2hhbmdlQ29tcGxldGVkIiwiY29tcGxldGVkIiwicmVzZXQiLCJwYXVzZSIsInJldmVyc2UiLCJyZXN0YXJ0IiwicmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSIsInJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyIsImMiLCJjaGlsZEFuaW1hdGlvbnMiLCJyZW1vdmVUYXJnZXRzRnJvbUFjdGl2ZUluc3RhbmNlcyIsInN0YWdnZXIiLCJncmlkIiwiYXhpcyIsImZyb21JbmRleCIsImZyb21GaXJzdCIsImZyb21DZW50ZXIiLCJmcm9tTGFzdCIsImlzUmFuZ2UiLCJ2YWwxIiwidmFsMiIsInZhbHVlcyIsIm1heFZhbHVlIiwiaW5kZXgiLCJmcm9tWCIsImZyb21ZIiwiZmxvb3IiLCJ0b1giLCJ0b1kiLCJkaXN0YW5jZVgiLCJkaXN0YW5jZVkiLCJzcGFjaW5nIiwidGltZWxpbmUiLCJ0bCIsImluc3RhbmNlUGFyYW1zIiwidGxJbmRleCIsImlucyIsImluc1BhcmFtcyIsInRsRHVyYXRpb24iLCJ2ZXJzaW9uIiwicnVubmluZyIsImNvbnZlcnRQeCIsInJhbmRvbSIsIm1vZHVsZSIsImV4cG9ydHMiLCJrZXlDb3VudGVyIiwiYWxsV2F5cG9pbnRzIiwib3B0aW9ucyIsIkVycm9yIiwiQWRhcHRlciIsImV4dGVuZCIsImRlZmF1bHRzIiwiYWRhcHRlciIsImhvcml6b250YWwiLCJlbmFibGVkIiwidHJpZ2dlclBvaW50IiwiZ3JvdXAiLCJHcm91cCIsImZpbmRPckNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwiZmluZE9yQ3JlYXRlQnlFbGVtZW50Iiwib2Zmc2V0QWxpYXNlcyIsInF1ZXVlVHJpZ2dlciIsInRyaWdnZXIiLCJkaXNhYmxlIiwiZW5hYmxlIiwicmVmcmVzaCIsIm5leHQiLCJwcmV2aW91cyIsImludm9rZUFsbCIsIm1ldGhvZCIsImFsbFdheXBvaW50c0FycmF5Iiwid2F5cG9pbnRLZXkiLCJkZXN0cm95QWxsIiwiZGlzYWJsZUFsbCIsImVuYWJsZUFsbCIsInJlZnJlc2hBbGwiLCJ2aWV3cG9ydEhlaWdodCIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50Iiwidmlld3BvcnRXaWR0aCIsImNsaWVudFdpZHRoIiwiYWRhcHRlcnMiLCJjb250aW51b3VzIiwib3V0ZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwib3V0ZXJXaWR0aCIsInJlcXVlc3RBbmltYXRpb25GcmFtZVNoaW0iLCJjb250ZXh0cyIsIm9sZFdpbmRvd0xvYWQiLCJvbmxvYWQiLCJkaWRTY3JvbGwiLCJkaWRSZXNpemUiLCJvbGRTY3JvbGwiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwid2F5cG9pbnRzIiwidmVydGljYWwiLCJ3YXlwb2ludENvbnRleHRLZXkiLCJ3aW5kb3dDb250ZXh0IiwiY3JlYXRlVGhyb3R0bGVkU2Nyb2xsSGFuZGxlciIsImNyZWF0ZVRocm90dGxlZFJlc2l6ZUhhbmRsZXIiLCJ3YXlwb2ludCIsImNoZWNrRW1wdHkiLCJob3Jpem9udGFsRW1wdHkiLCJpc0VtcHR5T2JqZWN0IiwidmVydGljYWxFbXB0eSIsImlzV2luZG93Iiwib2ZmIiwicmVzaXplSGFuZGxlciIsImhhbmRsZVJlc2l6ZSIsIm9uIiwic2Nyb2xsSGFuZGxlciIsImhhbmRsZVNjcm9sbCIsImlzVG91Y2giLCJ0cmlnZ2VyZWRHcm91cHMiLCJheGVzIiwibmV3U2Nyb2xsIiwiZm9yd2FyZCIsImJhY2t3YXJkIiwiYXhpc0tleSIsImlzRm9yd2FyZCIsIndhc0JlZm9yZVRyaWdnZXJQb2ludCIsIm5vd0FmdGVyVHJpZ2dlclBvaW50IiwiY3Jvc3NlZEZvcndhcmQiLCJjcm9zc2VkQmFja3dhcmQiLCJncm91cEtleSIsImZsdXNoVHJpZ2dlcnMiLCJjb250ZXh0T2Zmc2V0IiwibGVmdCIsImNvbnRleHRTY3JvbGwiLCJjb250ZXh0RGltZW5zaW9uIiwib2Zmc2V0UHJvcCIsImFkanVzdG1lbnQiLCJvbGRUcmlnZ2VyUG9pbnQiLCJlbGVtZW50T2Zmc2V0IiwiZnJlc2hXYXlwb2ludCIsImNvbnRleHRNb2RpZmllciIsIndhc0JlZm9yZVNjcm9sbCIsIm5vd0FmdGVyU2Nyb2xsIiwidHJpZ2dlcmVkQmFja3dhcmQiLCJ0cmlnZ2VyZWRGb3J3YXJkIiwiZmluZEJ5RWxlbWVudCIsImNvbnRleHRJZCIsInJlcXVlc3RGbiIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJ5VHJpZ2dlclBvaW50IiwiYnlSZXZlcnNlVHJpZ2dlclBvaW50IiwiZ3JvdXBzIiwiY2xlYXJUcmlnZ2VyUXVldWVzIiwidHJpZ2dlclF1ZXVlcyIsInVwIiwiZG93biIsInJpZ2h0Iiwic29ydCIsImluQXJyYXkiLCJpc0xhc3QiLCJmaXJzdCIsImdldFdpbmRvdyIsImRlZmF1bHRWaWV3IiwiTm9GcmFtZXdvcmtBZGFwdGVyIiwiaGFuZGxlcnMiLCJpc1dpbiIsImV2ZW50IiwicmVtb3ZlTGlzdGVuZXJzIiwibGlzdGVuZXJzIiwibGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnRQYXJ0cyIsImV2ZW50VHlwZSIsIm5hbWVzcGFjZSIsIm5zIiwib3duZXJEb2N1bWVudCIsIndpbiIsInBhZ2VZT2Zmc2V0IiwiY2xpZW50VG9wIiwicGFnZVhPZmZzZXQiLCJjbGllbnRMZWZ0IiwibnNIYW5kbGVycyIsIm5zVHlwZUxpc3QiLCJpbmNsdWRlTWFyZ2luIiwiY29tcHV0ZWRTdHlsZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm1lcmdlIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOztJQUNNQSxVO0FBRUYsd0JBQWM7QUFBQTs7QUFDVixTQUFLQyxnQkFBTDtBQUNIOzs7O1dBRUQsNEJBQW1CO0FBQ2YsVUFBTUMsSUFBSSxHQUFHQyxRQUFR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QUFsQixDQUF1QjtBQUNuQmQsUUFBSSxFQUFFLGFBRGE7QUFFbkI0VCxXQUFPLEVBQUVpSDtBQUZVLEdBQXZCO0FBSUF6b0IsVUFBUSxDQUFDd2hCLE9BQVQsR0FBbUJpSCxrQkFBbkI7QUFDSCxDQTFLQSxHQUFELEMiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGFuaW1lIGZyb20gJy4uL3ZlbmRvci9hbmltZS5qcydcclxuaW1wb3J0IHdheXBvaW50IGZyb20gJy4uL3ZlbmRvci9ub2ZyYW1ld29yay53YXlwb2ludHMuanMnXHJcbmNsYXNzIEFuaW1hdGlvbnMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2RkRXZlbkFuaW1hdGlvbigpXHJcbiAgICB9XHJcblxyXG4gICAgb2RkRXZlbkFuaW1hdGlvbigpIHtcclxuICAgICAgICBjb25zdCBvZGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9kZCcpXHJcbiAgICAgICAgY29uc3QgZXZlbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlbicpXHJcblxyXG4gICAgICAgIGV2ZW5zLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFsxMjUsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMTUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnc3ByaW5nKDEsIDgwLCAxMCwgMCknXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBvZGRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFsxMjUsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ3NwcmluZygxLCA4MCwgMTAsIDApJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAnMTAwJScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbnNcclxuIiwiY2xhc3MgTW9iaWxlTWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpXHJcbiAgICAgICAgdGhpcy50b2dnbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3RvZ2dsZS1tZW51XScpXHJcbiAgICAgICAgdGhpcy5tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW21lbnUtbmFtZV0nKVxyXG4gICAgICAgIHRoaXMuc3VibWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWJtZW51LWJ0bicpXHJcbiAgICAgICAgdGhpcy5pc01lbnVPcGVuID0gZmFsc2VcclxuICAgICAgICB0aGlzLmV2ZW50cygpXHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlTWVudS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyTWVudShlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zdWJtZW51QnRuLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVN1Yk1lbnUoZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHRoaXMua2V5UHJlc3MoZSkpXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHRoaXMuY2hhbmdlSGVhZGVyKCkpXHJcbiAgICB9XHJcblxyXG4gICAgdHJpZ2dlck1lbnUoZSkge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RvZ2dsZS1tZW51JylcclxuICAgICAgICBjb25zdCB0YXJnZXRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW21lbnUtbmFtZT1cIicgKyB0YXJnZXQgKyAnXCJdJylcclxuICAgICAgICBjb25zdCBvdGhlck1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW21lbnUtbmFtZV06bm90KFttZW51LW5hbWU9XCInICsgdGFyZ2V0ICsgJ1wiXSknKVxyXG5cclxuICAgICAgICBpZiAoIXRhcmdldE1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgLy8gQ2xvc2Ugb3RoZXIgb3BlbiBtZW51cyBmaXJzdFxyXG4gICAgICAgICAgICBvdGhlck1lbnVzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUoZWwpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLm9wZW5NZW51KHRhcmdldE1lbnUpXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTWVudSh0YXJnZXRNZW51KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuTWVudShtZW51KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBtZW51LmdldEF0dHJpYnV0ZSgnbWVudS1uYW1lJylcclxuICAgICAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3RvZ2dsZS1tZW51PVwiJyArIGlkICsgJ1wiXScpXHJcblxyXG4gICAgICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWVxyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJ1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gLXNjcm9sbFkgKyAncHgnXHJcblxyXG4gICAgICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkJylcclxuXHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJylcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXHJcblxyXG4gICAgICAgIHRoaXMuaXNNZW51T3BlbiA9IHRydWVcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNZW51KG1lbnUpIHtcclxuICAgICAgICBjb25zdCBpZCA9IG1lbnUuZ2V0QXR0cmlidXRlKCdtZW51LW5hbWUnKVxyXG4gICAgICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdG9nZ2xlLW1lbnU9XCInICsgaWQgKyAnXCJdJylcclxuXHJcbiAgICAgICAgY29uc3QgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZS50b3A7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHBhcnNlSW50KGJvZHlTdHlsZSB8fCAwKSAqIC0xKTtcclxuXHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJylcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxyXG5cclxuICAgICAgICB0aGlzLmlzTWVudU9wZW4gPSBmYWxzZVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVTdWJNZW51KGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCBidG4gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0TWVudSA9IGJ0bi5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5zdWJtZW51JylcclxuXHJcbiAgICAgICAgaWYgKCF0YXJnZXRNZW51LmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJylcclxuICAgICAgICAgICAgdGFyZ2V0TWVudS5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgICAgIHRhcmdldE1lbnUuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG5cclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IHRhcmdldE1lbnUuY2xpZW50SGVpZ2h0ICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgIHRhcmdldE1lbnUuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TWVudS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG5cclxuICAgICAgICAgICAgdGFyZ2V0TWVudS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRNZW51LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBvbmNlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpXHJcbiAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGFyZ2V0TWVudS5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICB0YXJnZXRNZW51LnN0eWxlLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRNZW51LnN0eWxlLmhlaWdodCA9ICcwcHgnO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgICAgIHRhcmdldE1lbnUuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TWVudS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRNZW51LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBvbmNlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAga2V5UHJlc3MoZSkge1xyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT0gMjcgJiYgdGhpcy5pc01lbnVPcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVudS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNZW51KGVsKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VIZWFkZXIoKSB7XHJcbiAgICAgICAgbGV0IHNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZXHJcbiAgICAgICAgaWYgKHNjcm9sbFBvcyA+PSA3NSB8fCB0aGlzLmlzTWVudU9wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaXMtc2Nyb2xsZWQnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXNjcm9sbGVkJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU1lbnVcclxuIiwiY2xhc3MgU2VhcmNoIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyX19zZWFyY2gnKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fdG9nZ2xlJylcclxuICAgICAgICB0aGlzLnNlYXJjaEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9faW5wdXQnKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5LS1zZWFyY2gnKVxyXG4gICAgICAgIHRoaXMuaXNTZWFyY2hPcGVuID0gZmFsc2VcclxuICAgICAgICB0aGlzLmV2ZW50cygpXHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCkge1xyXG4gICAgICAgIC8vIE9wZW4gc2VhcmNoIG1vZGFsXHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy50b2dnbGVNb2RhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDbG9zZSBzZWFyY2ggbW9kYWxcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hPdmVybGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2xvc2VNb2RhbCgpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5rZXlQcmVzcyhlKSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTW9kYWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5Nb2RhbCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Nb2RhbCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hNb2RhbC5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJylcclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hGaWVsZC52YWx1ZSA9ICcnXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNlYXJjaEZpZWxkLmZvY3VzKCksIDMwMSlcclxuICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJylcclxuICAgICAgICB0aGlzLmlzU2VhcmNoT3BlbiA9IHRydWVcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNb2RhbCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJylcclxuICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXHJcbiAgICAgICAgdGhpcy5pc1NlYXJjaE9wZW4gPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGtleVByZXNzKGUpIHtcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDI3ICYmIHRoaXMuaXNTZWFyY2hPcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iLCJpbXBvcnQgTW9iaWxlTWVudSBmcm9tICcuL21vZHVsZXMvbW9iaWxlTWVudSdcclxuaW1wb3J0IEFuaW1hdGlvbnMgZnJvbSAnLi9tb2R1bGVzL2FuaW1hdGlvbidcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL21vZHVsZXMvc2VhcmNoJ1xyXG5cclxuLy8gTG9hZCBKUyB3aGVuIERPTSBpcyByZWFkeVxyXG5mdW5jdGlvbiByYXNhbmRlRG9tUmVhZHkoZm4pIHtcclxuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XHJcbiAgICAgICAgcmV0dXJuIGZuKCk7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4sIGZhbHNlKTtcclxufVxyXG5cclxucmFzYW5kZURvbVJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gSW5zdGFudGlhdGUgYSBuZXcgb2JqZWN0IHVzaW5nIG1vZHVsZXMgLyBjbGFzc2VzXHJcbiAgICBjb25zdCBtb2JpbGVNZW51ID0gbmV3IE1vYmlsZU1lbnUoKVxyXG4gICAgY29uc3QgYW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvbnMoKVxyXG4gICAgY29uc3Qgc2VhcmNoID0gbmV3IFNlYXJjaCgpXHJcbn0pO1xyXG4iLCIvKlxyXG4gKiBhbmltZS5qcyB2My4yLjFcclxuICogKGMpIDIwMjAgSnVsaWFuIEdhcm5pZXJcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXHJcbiAqIGFuaW1lanMuY29tXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gRGVmYXVsdHNcclxuXHJcbnZhciBkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncyA9IHtcclxuICAgIHVwZGF0ZTogbnVsbCxcclxuICAgIGJlZ2luOiBudWxsLFxyXG4gICAgbG9vcEJlZ2luOiBudWxsLFxyXG4gICAgY2hhbmdlQmVnaW46IG51bGwsXHJcbiAgICBjaGFuZ2U6IG51bGwsXHJcbiAgICBjaGFuZ2VDb21wbGV0ZTogbnVsbCxcclxuICAgIGxvb3BDb21wbGV0ZTogbnVsbCxcclxuICAgIGNvbXBsZXRlOiBudWxsLFxyXG4gICAgbG9vcDogMSxcclxuICAgIGRpcmVjdGlvbjogJ25vcm1hbCcsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIHRpbWVsaW5lT2Zmc2V0OiAwXHJcbn07XHJcblxyXG52YXIgZGVmYXVsdFR3ZWVuU2V0dGluZ3MgPSB7XHJcbiAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgIGRlbGF5OiAwLFxyXG4gICAgZW5kRGVsYXk6IDAsXHJcbiAgICBlYXNpbmc6ICdlYXNlT3V0RWxhc3RpYygxLCAuNSknLFxyXG4gICAgcm91bmQ6IDBcclxufTtcclxuXHJcbnZhciB2YWxpZFRyYW5zZm9ybXMgPSBbJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWScsICd0cmFuc2xhdGVaJywgJ3JvdGF0ZScsICdyb3RhdGVYJywgJ3JvdGF0ZVknLCAncm90YXRlWicsICdzY2FsZScsICdzY2FsZVgnLCAnc2NhbGVZJywgJ3NjYWxlWicsICdza2V3JywgJ3NrZXdYJywgJ3NrZXdZJywgJ3BlcnNwZWN0aXZlJywgJ21hdHJpeCcsICdtYXRyaXgzZCddO1xyXG5cclxuLy8gQ2FjaGluZ1xyXG5cclxudmFyIGNhY2hlID0ge1xyXG4gICAgQ1NTOiB7fSxcclxuICAgIHNwcmluZ3M6IHt9XHJcbn07XHJcblxyXG4vLyBVdGlsc1xyXG5cclxuZnVuY3Rpb24gbWluTWF4KHZhbCwgbWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWwsIG1pbiksIG1heCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0cmluZ0NvbnRhaW5zKHN0ciwgdGV4dCkge1xyXG4gICAgcmV0dXJuIHN0ci5pbmRleE9mKHRleHQpID4gLTE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5QXJndW1lbnRzKGZ1bmMsIGFyZ3MpIHtcclxuICAgIHJldHVybiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xyXG59XHJcblxyXG52YXIgaXMgPSB7XHJcbiAgICBhcnI6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhKTtcclxuICAgIH0sXHJcbiAgICBvYmo6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5nQ29udGFpbnMoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpLCAnT2JqZWN0Jyk7XHJcbiAgICB9LFxyXG4gICAgcHRoOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzLm9iaihhKSAmJiBhLmhhc093blByb3BlcnR5KCd0b3RhbExlbmd0aCcpO1xyXG4gICAgfSxcclxuICAgIHN2ZzogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBhIGluc3RhbmNlb2YgU1ZHRWxlbWVudDtcclxuICAgIH0sXHJcbiAgICBpbnA6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gYSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICB9LFxyXG4gICAgZG9tOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIGEubm9kZVR5cGUgfHwgaXMuc3ZnKGEpO1xyXG4gICAgfSxcclxuICAgIHN0cjogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gJ3N0cmluZyc7XHJcbiAgICB9LFxyXG4gICAgZm5jOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSAnZnVuY3Rpb24nO1xyXG4gICAgfSxcclxuICAgIHVuZDogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCc7XHJcbiAgICB9LFxyXG4gICAgbmlsOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzLnVuZChhKSB8fCBhID09PSBudWxsO1xyXG4gICAgfSxcclxuICAgIGhleDogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiAvKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdChhKTtcclxuICAgIH0sXHJcbiAgICByZ2I6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gL15yZ2IvLnRlc3QoYSk7XHJcbiAgICB9LFxyXG4gICAgaHNsOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIC9eaHNsLy50ZXN0KGEpO1xyXG4gICAgfSxcclxuICAgIGNvbDogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiAoaXMuaGV4KGEpIHx8IGlzLnJnYihhKSB8fCBpcy5oc2woYSkpO1xyXG4gICAgfSxcclxuICAgIGtleTogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiAhZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgIWRlZmF1bHRUd2VlblNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmIGEgIT09ICd0YXJnZXRzJyAmJiBhICE9PSAna2V5ZnJhbWVzJztcclxuICAgIH0sXHJcbn07XHJcblxyXG4vLyBFYXNpbmdzXHJcblxyXG5mdW5jdGlvbiBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoc3RyaW5nKSB7XHJcbiAgICB2YXIgbWF0Y2ggPSAvXFwoKFteKV0rKVxcKS8uZXhlYyhzdHJpbmcpO1xyXG4gICAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0uc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24ocCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHApO1xyXG4gICAgfSkgOiBbXTtcclxufVxyXG5cclxuLy8gU3ByaW5nIHNvbHZlciBpbnNwaXJlZCBieSBXZWJraXQgQ29weXJpZ2h0IMKpIDIwMTYgQXBwbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBodHRwczovL3dlYmtpdC5vcmcvZGVtb3Mvc3ByaW5nL3NwcmluZy5qc1xyXG5cclxuZnVuY3Rpb24gc3ByaW5nKHN0cmluZywgZHVyYXRpb24pIHtcclxuXHJcbiAgICB2YXIgcGFyYW1zID0gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKHN0cmluZyk7XHJcbiAgICB2YXIgbWFzcyA9IG1pbk1heChpcy51bmQocGFyYW1zWzBdKSA/IDEgOiBwYXJhbXNbMF0sIC4xLCAxMDApO1xyXG4gICAgdmFyIHN0aWZmbmVzcyA9IG1pbk1heChpcy51bmQocGFyYW1zWzFdKSA/IDEwMCA6IHBhcmFtc1sxXSwgLjEsIDEwMCk7XHJcbiAgICB2YXIgZGFtcGluZyA9IG1pbk1heChpcy51bmQocGFyYW1zWzJdKSA/IDEwIDogcGFyYW1zWzJdLCAuMSwgMTAwKTtcclxuICAgIHZhciB2ZWxvY2l0eSA9IG1pbk1heChpcy51bmQocGFyYW1zWzNdKSA/IDAgOiBwYXJhbXNbM10sIC4xLCAxMDApO1xyXG4gICAgdmFyIHcwID0gTWF0aC5zcXJ0KHN0aWZmbmVzcyAvIG1hc3MpO1xyXG4gICAgdmFyIHpldGEgPSBkYW1waW5nIC8gKDIgKiBNYXRoLnNxcnQoc3RpZmZuZXNzICogbWFzcykpO1xyXG4gICAgdmFyIHdkID0gemV0YSA8IDEgPyB3MCAqIE1hdGguc3FydCgxIC0gemV0YSAqIHpldGEpIDogMDtcclxuICAgIHZhciBhID0gMTtcclxuICAgIHZhciBiID0gemV0YSA8IDEgPyAoemV0YSAqIHcwICsgLXZlbG9jaXR5KSAvIHdkIDogLXZlbG9jaXR5ICsgdzA7XHJcblxyXG4gICAgZnVuY3Rpb24gc29sdmVyKHQpIHtcclxuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBkdXJhdGlvbiA/IChkdXJhdGlvbiAqIHQpIC8gMTAwMCA6IHQ7XHJcbiAgICAgICAgaWYgKHpldGEgPCAxKSB7XHJcbiAgICAgICAgICAgIHByb2dyZXNzID0gTWF0aC5leHAoLXByb2dyZXNzICogemV0YSAqIHcwKSAqIChhICogTWF0aC5jb3Mod2QgKiBwcm9ncmVzcykgKyBiICogTWF0aC5zaW4od2QgKiBwcm9ncmVzcykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHByb2dyZXNzID0gKGEgKyBiICogcHJvZ3Jlc3MpICogTWF0aC5leHAoLXByb2dyZXNzICogdzApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodCA9PT0gMCB8fCB0ID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMSAtIHByb2dyZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xyXG4gICAgICAgIHZhciBjYWNoZWQgPSBjYWNoZS5zcHJpbmdzW3N0cmluZ107XHJcbiAgICAgICAgaWYgKGNhY2hlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZnJhbWUgPSAxIC8gNjtcclxuICAgICAgICB2YXIgZWxhcHNlZCA9IDA7XHJcbiAgICAgICAgdmFyIHJlc3QgPSAwO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGVsYXBzZWQgKz0gZnJhbWU7XHJcbiAgICAgICAgICAgIGlmIChzb2x2ZXIoZWxhcHNlZCkgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlc3QrKztcclxuICAgICAgICAgICAgICAgIGlmIChyZXN0ID49IDE2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN0ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZHVyYXRpb24gPSBlbGFwc2VkICogZnJhbWUgKiAxMDAwO1xyXG4gICAgICAgIGNhY2hlLnNwcmluZ3Nbc3RyaW5nXSA9IGR1cmF0aW9uO1xyXG4gICAgICAgIHJldHVybiBkdXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZHVyYXRpb24gPyBzb2x2ZXIgOiBnZXREdXJhdGlvbjtcclxuXHJcbn1cclxuXHJcbi8vIEJhc2ljIHN0ZXBzIGVhc2luZyBpbXBsZW1lbnRhdGlvbiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9mci9kb2NzL1dlYi9DU1MvdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cclxuXHJcbmZ1bmN0aW9uIHN0ZXBzKHN0ZXBzKSB7XHJcbiAgICBpZiAoc3RlcHMgPT09IHZvaWQgMCkgc3RlcHMgPSAxMDtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoKG1pbk1heCh0LCAwLjAwMDAwMSwgMSkpICogc3RlcHMpICogKDEgLyBzdGVwcyk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBCZXppZXJFYXNpbmcgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nXHJcblxyXG52YXIgYmV6aWVyID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHZhciBrU3BsaW5lVGFibGVTaXplID0gMTE7XHJcbiAgICB2YXIga1NhbXBsZVN0ZXBTaXplID0gMS4wIC8gKGtTcGxpbmVUYWJsZVNpemUgLSAxLjApO1xyXG5cclxuICAgIGZ1bmN0aW9uIEEoYUExLCBhQTIpIHtcclxuICAgICAgICByZXR1cm4gMS4wIC0gMy4wICogYUEyICsgMy4wICogYUExXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQihhQTEsIGFBMikge1xyXG4gICAgICAgIHJldHVybiAzLjAgKiBhQTIgLSA2LjAgKiBhQTFcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBDKGFBMSkge1xyXG4gICAgICAgIHJldHVybiAzLjAgKiBhQTFcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjQmV6aWVyKGFULCBhQTEsIGFBMikge1xyXG4gICAgICAgIHJldHVybiAoKEEoYUExLCBhQTIpICogYVQgKyBCKGFBMSwgYUEyKSkgKiBhVCArIEMoYUExKSkgKiBhVFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNsb3BlKGFULCBhQTEsIGFBMikge1xyXG4gICAgICAgIHJldHVybiAzLjAgKiBBKGFBMSwgYUEyKSAqIGFUICogYVQgKyAyLjAgKiBCKGFBMSwgYUEyKSAqIGFUICsgQyhhQTEpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYmluYXJ5U3ViZGl2aWRlKGFYLCBhQSwgYUIsIG1YMSwgbVgyKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRYLCBjdXJyZW50VCwgaSA9IDA7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xyXG4gICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcclxuICAgICAgICAgICAgICAgIGFCID0gY3VycmVudFQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gMC4wMDAwMDAxICYmICsraSA8IDEwKTtcclxuICAgICAgICByZXR1cm4gY3VycmVudFQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGFHdWVzc1QsIG1YMSwgbVgyKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYUd1ZXNzVDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xyXG4gICAgICAgICAgICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYUd1ZXNzVDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBiZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XHJcblxyXG4gICAgICAgIGlmICghKDAgPD0gbVgxICYmIG1YMSA8PSAxICYmIDAgPD0gbVgyICYmIG1YMiA8PSAxKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KGtTcGxpbmVUYWJsZVNpemUpO1xyXG5cclxuICAgICAgICBpZiAobVgxICE9PSBtWTEgfHwgbVgyICE9PSBtWTIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrU3BsaW5lVGFibGVTaXplOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRURm9yWChhWCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGludGVydmFsU3RhcnQgPSAwO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFNhbXBsZSA9IDE7XHJcbiAgICAgICAgICAgIHZhciBsYXN0U2FtcGxlID0ga1NwbGluZVRhYmxlU2l6ZSAtIDE7XHJcblxyXG4gICAgICAgICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBrU2FtcGxlU3RlcFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC0tY3VycmVudFNhbXBsZTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcclxuICAgICAgICAgICAgdmFyIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICoga1NhbXBsZVN0ZXBTaXplO1xyXG4gICAgICAgICAgICB2YXIgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5pdGlhbFNsb3BlID49IDAuMDAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcclxuICAgICAgICAgICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoeCA9PT0gMCB8fCB4ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY2FsY0JlemllcihnZXRURm9yWCh4KSwgbVkxLCBtWTIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJlemllcjtcclxuXHJcbn0pKCk7XHJcblxyXG52YXIgcGVubmVyID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vIEJhc2VkIG9uIGpRdWVyeSBVSSdzIGltcGxlbWVuYXRpb24gb2YgZWFzaW5nIGVxdWF0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXIgKGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcpXHJcblxyXG4gICAgdmFyIGVhc2VzID0ge1xyXG4gICAgICAgIGxpbmVhcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBmdW5jdGlvbkVhc2luZ3MgPSB7XHJcbiAgICAgICAgU2luZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMSAtIE1hdGguY29zKHQgKiBNYXRoLlBJIC8gMik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBDaXJjOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSB0ICogdCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBCYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0ICogdCAqICgzICogdCAtIDIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQm91bmNlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb3cyLCBiID0gNDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0IDwgKChwb3cyID0gTWF0aC5wb3coMiwgLS1iKSkgLSAxKSAvIDExKSB7fVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEgLyBNYXRoLnBvdyg0LCAzIC0gYikgLSA3LjU2MjUgKiBNYXRoLnBvdygocG93MiAqIDMgLSAyKSAvIDIyIC0gdCwgMilcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIEVsYXN0aWM6IGZ1bmN0aW9uKGFtcGxpdHVkZSwgcGVyaW9kKSB7XHJcbiAgICAgICAgICAgIGlmIChhbXBsaXR1ZGUgPT09IHZvaWQgMCkgYW1wbGl0dWRlID0gMTtcclxuICAgICAgICAgICAgaWYgKHBlcmlvZCA9PT0gdm9pZCAwKSBwZXJpb2QgPSAuNTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhID0gbWluTWF4KGFtcGxpdHVkZSwgMSwgMTApO1xyXG4gICAgICAgICAgICB2YXIgcCA9IG1pbk1heChwZXJpb2QsIC4xLCAyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodCA9PT0gMCB8fCB0ID09PSAxKSA/IHQgOlxyXG4gICAgICAgICAgICAgICAgICAgIC1hICogTWF0aC5wb3coMiwgMTAgKiAodCAtIDEpKSAqIE1hdGguc2luKCgoKHQgLSAxKSAtIChwIC8gKE1hdGguUEkgKiAyKSAqIE1hdGguYXNpbigxIC8gYSkpKSAqIChNYXRoLlBJICogMikpIC8gcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYXNlRWFzaW5ncyA9IFsnUXVhZCcsICdDdWJpYycsICdRdWFydCcsICdRdWludCcsICdFeHBvJ107XHJcblxyXG4gICAgYmFzZUVhc2luZ3MuZm9yRWFjaChmdW5jdGlvbihuYW1lLCBpKSB7XHJcbiAgICAgICAgZnVuY3Rpb25FYXNpbmdzW25hbWVdID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5wb3codCwgaSArIDIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhmdW5jdGlvbkVhc2luZ3MpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICAgIHZhciBlYXNlSW4gPSBmdW5jdGlvbkVhc2luZ3NbbmFtZV07XHJcbiAgICAgICAgZWFzZXNbJ2Vhc2VJbicgKyBuYW1lXSA9IGVhc2VJbjtcclxuICAgICAgICBlYXNlc1snZWFzZU91dCcgKyBuYW1lXSA9IGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxIC0gZWFzZUluKGEsIGIpKDEgLSB0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGVhc2VzWydlYXNlSW5PdXQnICsgbmFtZV0gPSBmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdCA8IDAuNSA/IGVhc2VJbihhLCBiKSh0ICogMikgLyAyIDpcclxuICAgICAgICAgICAgICAgICAgICAxIC0gZWFzZUluKGEsIGIpKHQgKiAtMiArIDIpIC8gMjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGVhc2VzWydlYXNlT3V0SW4nICsgbmFtZV0gPSBmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdCA8IDAuNSA/ICgxIC0gZWFzZUluKGEsIGIpKDEgLSB0ICogMikpIC8gMiA6XHJcbiAgICAgICAgICAgICAgICAgICAgKGVhc2VJbihhLCBiKSh0ICogMiAtIDEpICsgMSkgLyAyO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZWFzZXM7XHJcblxyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gcGFyc2VFYXNpbmdzKGVhc2luZywgZHVyYXRpb24pIHtcclxuICAgIGlmIChpcy5mbmMoZWFzaW5nKSkge1xyXG4gICAgICAgIHJldHVybiBlYXNpbmc7XHJcbiAgICB9XHJcbiAgICB2YXIgbmFtZSA9IGVhc2luZy5zcGxpdCgnKCcpWzBdO1xyXG4gICAgdmFyIGVhc2UgPSBwZW5uZXJbbmFtZV07XHJcbiAgICB2YXIgYXJncyA9IHBhcnNlRWFzaW5nUGFyYW1ldGVycyhlYXNpbmcpO1xyXG4gICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgY2FzZSAnc3ByaW5nJzpcclxuICAgICAgICAgICAgcmV0dXJuIHNwcmluZyhlYXNpbmcsIGR1cmF0aW9uKTtcclxuICAgICAgICBjYXNlICdjdWJpY0Jlemllcic6XHJcbiAgICAgICAgICAgIHJldHVybiBhcHBseUFyZ3VtZW50cyhiZXppZXIsIGFyZ3MpO1xyXG4gICAgICAgIGNhc2UgJ3N0ZXBzJzpcclxuICAgICAgICAgICAgcmV0dXJuIGFwcGx5QXJndW1lbnRzKHN0ZXBzLCBhcmdzKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gYXBwbHlBcmd1bWVudHMoZWFzZSwgYXJncyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFN0cmluZ3NcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdFN0cmluZyhzdHIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzdHIpO1xyXG4gICAgICAgIHJldHVybiBub2RlcztcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEFycmF5c1xyXG5cclxuZnVuY3Rpb24gZmlsdGVyQXJyYXkoYXJyLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XHJcbiAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPj0gMiA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgMDtcclxuICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBpZiAoaSBpbiBhcnIpIHtcclxuICAgICAgICAgICAgdmFyIHZhbCA9IGFycltpXTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsLCBpLCBhcnIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZmxhdHRlbkFycmF5KGFycikge1xyXG4gICAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgIHJldHVybiBhLmNvbmNhdChpcy5hcnIoYikgPyBmbGF0dGVuQXJyYXkoYikgOiBiKTtcclxuICAgIH0sIFtdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9BcnJheShvKSB7XHJcbiAgICBpZiAoaXMuYXJyKG8pKSB7XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICB9XHJcbiAgICBpZiAoaXMuc3RyKG8pKSB7XHJcbiAgICAgICAgbyA9IHNlbGVjdFN0cmluZyhvKSB8fCBvO1xyXG4gICAgfVxyXG4gICAgaWYgKG8gaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBvIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gW10uc2xpY2UuY2FsbChvKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbb107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFycmF5Q29udGFpbnMoYXJyLCB2YWwpIHtcclxuICAgIHJldHVybiBhcnIuc29tZShmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIGEgPT09IHZhbDtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBPYmplY3RzXHJcblxyXG5mdW5jdGlvbiBjbG9uZU9iamVjdChvKSB7XHJcbiAgICB2YXIgY2xvbmUgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gbykge1xyXG4gICAgICAgIGNsb25lW3BdID0gb1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbG9uZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwbGFjZU9iamVjdFByb3BzKG8xLCBvMikge1xyXG4gICAgdmFyIG8gPSBjbG9uZU9iamVjdChvMSk7XHJcbiAgICBmb3IgKHZhciBwIGluIG8xKSB7XHJcbiAgICAgICAgb1twXSA9IG8yLmhhc093blByb3BlcnR5KHApID8gbzJbcF0gOiBvMVtwXTtcclxuICAgIH1cclxuICAgIHJldHVybiBvO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtZXJnZU9iamVjdHMobzEsIG8yKSB7XHJcbiAgICB2YXIgbyA9IGNsb25lT2JqZWN0KG8xKTtcclxuICAgIGZvciAodmFyIHAgaW4gbzIpIHtcclxuICAgICAgICBvW3BdID0gaXMudW5kKG8xW3BdKSA/IG8yW3BdIDogbzFbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbztcclxufVxyXG5cclxuLy8gQ29sb3JzXHJcblxyXG5mdW5jdGlvbiByZ2JUb1JnYmEocmdiVmFsdWUpIHtcclxuICAgIHZhciByZ2IgPSAvcmdiXFwoKFxcZCssXFxzKltcXGRdKyxcXHMqW1xcZF0rKVxcKS9nLmV4ZWMocmdiVmFsdWUpO1xyXG4gICAgcmV0dXJuIHJnYiA/IChcInJnYmEoXCIgKyAocmdiWzFdKSArIFwiLDEpXCIpIDogcmdiVmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhleFRvUmdiYShoZXhWYWx1ZSkge1xyXG4gICAgdmFyIHJneCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XHJcbiAgICB2YXIgaGV4ID0gaGV4VmFsdWUucmVwbGFjZShyZ3gsIGZ1bmN0aW9uKG0sIHIsIGcsIGIpIHtcclxuICAgICAgICByZXR1cm4gciArIHIgKyBnICsgZyArIGIgKyBiO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgcmdiID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XHJcbiAgICB2YXIgciA9IHBhcnNlSW50KHJnYlsxXSwgMTYpO1xyXG4gICAgdmFyIGcgPSBwYXJzZUludChyZ2JbMl0sIDE2KTtcclxuICAgIHZhciBiID0gcGFyc2VJbnQocmdiWzNdLCAxNik7XHJcbiAgICByZXR1cm4gKFwicmdiYShcIiArIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGIgKyBcIiwxKVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaHNsVG9SZ2JhKGhzbFZhbHVlKSB7XHJcbiAgICB2YXIgaHNsID0gL2hzbFxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJVxcKS9nLmV4ZWMoaHNsVmFsdWUpIHx8IC9oc2xhXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKylcXCkvZy5leGVjKGhzbFZhbHVlKTtcclxuICAgIHZhciBoID0gcGFyc2VJbnQoaHNsWzFdLCAxMCkgLyAzNjA7XHJcbiAgICB2YXIgcyA9IHBhcnNlSW50KGhzbFsyXSwgMTApIC8gMTAwO1xyXG4gICAgdmFyIGwgPSBwYXJzZUludChoc2xbM10sIDEwKSAvIDEwMDtcclxuICAgIHZhciBhID0gaHNsWzRdIHx8IDE7XHJcblxyXG4gICAgZnVuY3Rpb24gaHVlMnJnYihwLCBxLCB0KSB7XHJcbiAgICAgICAgaWYgKHQgPCAwKSB7XHJcbiAgICAgICAgICAgIHQgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQgPiAxKSB7XHJcbiAgICAgICAgICAgIHQgLT0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQgPCAxIC8gNikge1xyXG4gICAgICAgICAgICByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQgPCAxIC8gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gcTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQgPCAyIC8gMykge1xyXG4gICAgICAgICAgICByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgdmFyIHIsIGcsIGI7XHJcbiAgICBpZiAocyA9PSAwKSB7XHJcbiAgICAgICAgciA9IGcgPSBiID0gbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xyXG4gICAgICAgIHZhciBwID0gMiAqIGwgLSBxO1xyXG4gICAgICAgIHIgPSBodWUycmdiKHAsIHEsIGggKyAxIC8gMyk7XHJcbiAgICAgICAgZyA9IGh1ZTJyZ2IocCwgcSwgaCk7XHJcbiAgICAgICAgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEgLyAzKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXCJyZ2JhKFwiICsgKHIgKiAyNTUpICsgXCIsXCIgKyAoZyAqIDI1NSkgKyBcIixcIiArIChiICogMjU1KSArIFwiLFwiICsgYSArIFwiKVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29sb3JUb1JnYih2YWwpIHtcclxuICAgIGlmIChpcy5yZ2IodmFsKSkge1xyXG4gICAgICAgIHJldHVybiByZ2JUb1JnYmEodmFsKTtcclxuICAgIH1cclxuICAgIGlmIChpcy5oZXgodmFsKSkge1xyXG4gICAgICAgIHJldHVybiBoZXhUb1JnYmEodmFsKTtcclxuICAgIH1cclxuICAgIGlmIChpcy5oc2wodmFsKSkge1xyXG4gICAgICAgIHJldHVybiBoc2xUb1JnYmEodmFsKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gVW5pdHNcclxuXHJcbmZ1bmN0aW9uIGdldFVuaXQodmFsKSB7XHJcbiAgICB2YXIgc3BsaXQgPSAvWystXT9cXGQqXFwuP1xcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8oJXxweHxwdHxlbXxyZW18aW58Y218bW18ZXh8Y2h8cGN8dnd8dmh8dm1pbnx2bWF4fGRlZ3xyYWR8dHVybik/JC8uZXhlYyh2YWwpO1xyXG4gICAgaWYgKHNwbGl0KSB7XHJcbiAgICAgICAgcmV0dXJuIHNwbGl0WzFdO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1Vbml0KHByb3BOYW1lKSB7XHJcbiAgICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICd0cmFuc2xhdGUnKSB8fCBwcm9wTmFtZSA9PT0gJ3BlcnNwZWN0aXZlJykge1xyXG4gICAgICAgIHJldHVybiAncHgnO1xyXG4gICAgfVxyXG4gICAgaWYgKHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAncm90YXRlJykgfHwgc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdza2V3JykpIHtcclxuICAgICAgICByZXR1cm4gJ2RlZyc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFZhbHVlc1xyXG5cclxuZnVuY3Rpb24gZ2V0RnVuY3Rpb25WYWx1ZSh2YWwsIGFuaW1hdGFibGUpIHtcclxuICAgIGlmICghaXMuZm5jKHZhbCkpIHtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbChhbmltYXRhYmxlLnRhcmdldCwgYW5pbWF0YWJsZS5pZCwgYW5pbWF0YWJsZS50b3RhbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShlbCwgcHJvcCkge1xyXG4gICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZShwcm9wKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkge1xyXG4gICAgdmFyIHZhbHVlVW5pdCA9IGdldFVuaXQodmFsdWUpO1xyXG4gICAgaWYgKGFycmF5Q29udGFpbnMoW3VuaXQsICdkZWcnLCAncmFkJywgJ3R1cm4nXSwgdmFsdWVVbml0KSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIHZhciBjYWNoZWQgPSBjYWNoZS5DU1NbdmFsdWUgKyB1bml0XTtcclxuICAgIGlmICghaXMudW5kKGNhY2hlZCkpIHtcclxuICAgICAgICByZXR1cm4gY2FjaGVkO1xyXG4gICAgfVxyXG4gICAgdmFyIGJhc2VsaW5lID0gMTAwO1xyXG4gICAgdmFyIHRlbXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwudGFnTmFtZSk7XHJcbiAgICB2YXIgcGFyZW50RWwgPSAoZWwucGFyZW50Tm9kZSAmJiAoZWwucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQpKSA/IGVsLnBhcmVudE5vZGUgOiBkb2N1bWVudC5ib2R5O1xyXG4gICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQodGVtcEVsKTtcclxuICAgIHRlbXBFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICB0ZW1wRWwuc3R5bGUud2lkdGggPSBiYXNlbGluZSArIHVuaXQ7XHJcbiAgICB2YXIgZmFjdG9yID0gYmFzZWxpbmUgLyB0ZW1wRWwub2Zmc2V0V2lkdGg7XHJcbiAgICBwYXJlbnRFbC5yZW1vdmVDaGlsZCh0ZW1wRWwpO1xyXG4gICAgdmFyIGNvbnZlcnRlZFVuaXQgPSBmYWN0b3IgKiBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIGNhY2hlLkNTU1t2YWx1ZSArIHVuaXRdID0gY29udmVydGVkVW5pdDtcclxuICAgIHJldHVybiBjb252ZXJ0ZWRVbml0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDU1NWYWx1ZShlbCwgcHJvcCwgdW5pdCkge1xyXG4gICAgaWYgKHByb3AgaW4gZWwuc3R5bGUpIHtcclxuICAgICAgICB2YXIgdXBwZXJjYXNlUHJvcE5hbWUgPSBwcm9wLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gZWwuc3R5bGVbcHJvcF0gfHwgZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZSh1cHBlcmNhc2VQcm9wTmFtZSkgfHwgJzAnO1xyXG4gICAgICAgIHJldHVybiB1bml0ID8gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkgOiB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uVHlwZShlbCwgcHJvcCkge1xyXG4gICAgaWYgKGlzLmRvbShlbCkgJiYgIWlzLmlucChlbCkgJiYgKCFpcy5uaWwoZ2V0QXR0cmlidXRlKGVsLCBwcm9wKSkgfHwgKGlzLnN2ZyhlbCkgJiYgZWxbcHJvcF0pKSkge1xyXG4gICAgICAgIHJldHVybiAnYXR0cmlidXRlJztcclxuICAgIH1cclxuICAgIGlmIChpcy5kb20oZWwpICYmIGFycmF5Q29udGFpbnModmFsaWRUcmFuc2Zvcm1zLCBwcm9wKSkge1xyXG4gICAgICAgIHJldHVybiAndHJhbnNmb3JtJztcclxuICAgIH1cclxuICAgIGlmIChpcy5kb20oZWwpICYmIChwcm9wICE9PSAndHJhbnNmb3JtJyAmJiBnZXRDU1NWYWx1ZShlbCwgcHJvcCkpKSB7XHJcbiAgICAgICAgcmV0dXJuICdjc3MnO1xyXG4gICAgfVxyXG4gICAgaWYgKGVsW3Byb3BdICE9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gJ29iamVjdCc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVsZW1lbnRUcmFuc2Zvcm1zKGVsKSB7XHJcbiAgICBpZiAoIWlzLmRvbShlbCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgc3RyID0gZWwuc3R5bGUudHJhbnNmb3JtIHx8ICcnO1xyXG4gICAgdmFyIHJlZyA9IC8oXFx3KylcXCgoW14pXSopXFwpL2c7XHJcbiAgICB2YXIgdHJhbnNmb3JtcyA9IG5ldyBNYXAoKTtcclxuICAgIHZhciBtO1xyXG4gICAgd2hpbGUgKG0gPSByZWcuZXhlYyhzdHIpKSB7XHJcbiAgICAgICAgdHJhbnNmb3Jtcy5zZXQobVsxXSwgbVsyXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJhbnNmb3JtcztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtVmFsdWUoZWwsIHByb3BOYW1lLCBhbmltYXRhYmxlLCB1bml0KSB7XHJcbiAgICB2YXIgZGVmYXVsdFZhbCA9IHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAnc2NhbGUnKSA/IDEgOiAwICsgZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSk7XHJcbiAgICB2YXIgdmFsdWUgPSBnZXRFbGVtZW50VHJhbnNmb3JtcyhlbCkuZ2V0KHByb3BOYW1lKSB8fCBkZWZhdWx0VmFsO1xyXG4gICAgaWYgKGFuaW1hdGFibGUpIHtcclxuICAgICAgICBhbmltYXRhYmxlLnRyYW5zZm9ybXMubGlzdC5zZXQocHJvcE5hbWUsIHZhbHVlKTtcclxuICAgICAgICBhbmltYXRhYmxlLnRyYW5zZm9ybXNbJ2xhc3QnXSA9IHByb3BOYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuaXQgPyBjb252ZXJ0UHhUb1VuaXQoZWwsIHZhbHVlLCB1bml0KSA6IHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHVuaXQsIGFuaW1hdGFibGUpIHtcclxuICAgIHN3aXRjaCAoZ2V0QW5pbWF0aW9uVHlwZSh0YXJnZXQsIHByb3BOYW1lKSkge1xyXG4gICAgICAgIGNhc2UgJ3RyYW5zZm9ybSc6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRUcmFuc2Zvcm1WYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCBhbmltYXRhYmxlLCB1bml0KTtcclxuICAgICAgICBjYXNlICdjc3MnOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0Q1NTVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgdW5pdCk7XHJcbiAgICAgICAgY2FzZSAnYXR0cmlidXRlJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldEF0dHJpYnV0ZSh0YXJnZXQsIHByb3BOYW1lKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BOYW1lXSB8fCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZWxhdGl2ZVZhbHVlKHRvLCBmcm9tKSB7XHJcbiAgICB2YXIgb3BlcmF0b3IgPSAvXihcXCo9fFxcKz18LT0pLy5leGVjKHRvKTtcclxuICAgIGlmICghb3BlcmF0b3IpIHtcclxuICAgICAgICByZXR1cm4gdG87XHJcbiAgICB9XHJcbiAgICB2YXIgdSA9IGdldFVuaXQodG8pIHx8IDA7XHJcbiAgICB2YXIgeCA9IHBhcnNlRmxvYXQoZnJvbSk7XHJcbiAgICB2YXIgeSA9IHBhcnNlRmxvYXQodG8ucmVwbGFjZShvcGVyYXRvclswXSwgJycpKTtcclxuICAgIHN3aXRjaCAob3BlcmF0b3JbMF1bMF0pIHtcclxuICAgICAgICBjYXNlICcrJzpcclxuICAgICAgICAgICAgcmV0dXJuIHggKyB5ICsgdTtcclxuICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgcmV0dXJuIHggLSB5ICsgdTtcclxuICAgICAgICBjYXNlICcqJzpcclxuICAgICAgICAgICAgcmV0dXJuIHggKiB5ICsgdTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVWYWx1ZSh2YWwsIHVuaXQpIHtcclxuICAgIGlmIChpcy5jb2wodmFsKSkge1xyXG4gICAgICAgIHJldHVybiBjb2xvclRvUmdiKHZhbCk7XHJcbiAgICB9XHJcbiAgICBpZiAoL1xccy9nLnRlc3QodmFsKSkge1xyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcbiAgICB2YXIgb3JpZ2luYWxVbml0ID0gZ2V0VW5pdCh2YWwpO1xyXG4gICAgdmFyIHVuaXRMZXNzID0gb3JpZ2luYWxVbml0ID8gdmFsLnN1YnN0cigwLCB2YWwubGVuZ3RoIC0gb3JpZ2luYWxVbml0Lmxlbmd0aCkgOiB2YWw7XHJcbiAgICBpZiAodW5pdCkge1xyXG4gICAgICAgIHJldHVybiB1bml0TGVzcyArIHVuaXQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5pdExlc3M7XHJcbn1cclxuXHJcbi8vIGdldFRvdGFsTGVuZ3RoKCkgZXF1aXZhbGVudCBmb3IgY2lyY2xlLCByZWN0LCBwb2x5bGluZSwgcG9seWdvbiBhbmQgbGluZSBzaGFwZXNcclxuLy8gYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1NlYkxhbWJsYS8zZTA1NTBjNDk2YzIzNjcwOTc0NFxyXG5cclxuZnVuY3Rpb24gZ2V0RGlzdGFuY2UocDEsIHAyKSB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAyLnggLSBwMS54LCAyKSArIE1hdGgucG93KHAyLnkgLSBwMS55LCAyKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENpcmNsZUxlbmd0aChlbCkge1xyXG4gICAgcmV0dXJuIE1hdGguUEkgKiAyICogZ2V0QXR0cmlidXRlKGVsLCAncicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZWN0TGVuZ3RoKGVsKSB7XHJcbiAgICByZXR1cm4gKGdldEF0dHJpYnV0ZShlbCwgJ3dpZHRoJykgKiAyKSArIChnZXRBdHRyaWJ1dGUoZWwsICdoZWlnaHQnKSAqIDIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMaW5lTGVuZ3RoKGVsKSB7XHJcbiAgICByZXR1cm4gZ2V0RGlzdGFuY2Uoe1xyXG4gICAgICAgIHg6IGdldEF0dHJpYnV0ZShlbCwgJ3gxJyksXHJcbiAgICAgICAgeTogZ2V0QXR0cmlidXRlKGVsLCAneTEnKVxyXG4gICAgfSwge1xyXG4gICAgICAgIHg6IGdldEF0dHJpYnV0ZShlbCwgJ3gyJyksXHJcbiAgICAgICAgeTogZ2V0QXR0cmlidXRlKGVsLCAneTInKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBvbHlsaW5lTGVuZ3RoKGVsKSB7XHJcbiAgICB2YXIgcG9pbnRzID0gZWwucG9pbnRzO1xyXG4gICAgdmFyIHRvdGFsTGVuZ3RoID0gMDtcclxuICAgIHZhciBwcmV2aW91c1BvcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLm51bWJlck9mSXRlbXM7IGkrKykge1xyXG4gICAgICAgIHZhciBjdXJyZW50UG9zID0gcG9pbnRzLmdldEl0ZW0oaSk7XHJcbiAgICAgICAgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgICAgIHRvdGFsTGVuZ3RoICs9IGdldERpc3RhbmNlKHByZXZpb3VzUG9zLCBjdXJyZW50UG9zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJldmlvdXNQb3MgPSBjdXJyZW50UG9zO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvdGFsTGVuZ3RoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQb2x5Z29uTGVuZ3RoKGVsKSB7XHJcbiAgICB2YXIgcG9pbnRzID0gZWwucG9pbnRzO1xyXG4gICAgcmV0dXJuIGdldFBvbHlsaW5lTGVuZ3RoKGVsKSArIGdldERpc3RhbmNlKHBvaW50cy5nZXRJdGVtKHBvaW50cy5udW1iZXJPZkl0ZW1zIC0gMSksIHBvaW50cy5nZXRJdGVtKDApKTtcclxufVxyXG5cclxuLy8gUGF0aCBhbmltYXRpb25cclxuXHJcbmZ1bmN0aW9uIGdldFRvdGFsTGVuZ3RoKGVsKSB7XHJcbiAgICBpZiAoZWwuZ2V0VG90YWxMZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gZWwuZ2V0VG90YWxMZW5ndGgoKTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgY2FzZSAnY2lyY2xlJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldENpcmNsZUxlbmd0aChlbCk7XHJcbiAgICAgICAgY2FzZSAncmVjdCc6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRSZWN0TGVuZ3RoKGVsKTtcclxuICAgICAgICBjYXNlICdsaW5lJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldExpbmVMZW5ndGgoZWwpO1xyXG4gICAgICAgIGNhc2UgJ3BvbHlsaW5lJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldFBvbHlsaW5lTGVuZ3RoKGVsKTtcclxuICAgICAgICBjYXNlICdwb2x5Z29uJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldFBvbHlnb25MZW5ndGgoZWwpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREYXNob2Zmc2V0KGVsKSB7XHJcbiAgICB2YXIgcGF0aExlbmd0aCA9IGdldFRvdGFsTGVuZ3RoKGVsKTtcclxuICAgIGVsLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIHBhdGhMZW5ndGgpO1xyXG4gICAgcmV0dXJuIHBhdGhMZW5ndGg7XHJcbn1cclxuXHJcbi8vIE1vdGlvbiBwYXRoXHJcblxyXG5mdW5jdGlvbiBnZXRQYXJlbnRTdmdFbChlbCkge1xyXG4gICAgdmFyIHBhcmVudEVsID0gZWwucGFyZW50Tm9kZTtcclxuICAgIHdoaWxlIChpcy5zdmcocGFyZW50RWwpKSB7XHJcbiAgICAgICAgaWYgKCFpcy5zdmcocGFyZW50RWwucGFyZW50Tm9kZSkpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudEVsID0gcGFyZW50RWwucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJlbnRFbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGFyZW50U3ZnKHBhdGhFbCwgc3ZnRGF0YSkge1xyXG4gICAgdmFyIHN2ZyA9IHN2Z0RhdGEgfHwge307XHJcbiAgICB2YXIgcGFyZW50U3ZnRWwgPSBzdmcuZWwgfHwgZ2V0UGFyZW50U3ZnRWwocGF0aEVsKTtcclxuICAgIHZhciByZWN0ID0gcGFyZW50U3ZnRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB2YXIgdmlld0JveEF0dHIgPSBnZXRBdHRyaWJ1dGUocGFyZW50U3ZnRWwsICd2aWV3Qm94Jyk7XHJcbiAgICB2YXIgd2lkdGggPSByZWN0LndpZHRoO1xyXG4gICAgdmFyIGhlaWdodCA9IHJlY3QuaGVpZ2h0O1xyXG4gICAgdmFyIHZpZXdCb3ggPSBzdmcudmlld0JveCB8fCAodmlld0JveEF0dHIgPyB2aWV3Qm94QXR0ci5zcGxpdCgnICcpIDogWzAsIDAsIHdpZHRoLCBoZWlnaHRdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZWw6IHBhcmVudFN2Z0VsLFxyXG4gICAgICAgIHZpZXdCb3g6IHZpZXdCb3gsXHJcbiAgICAgICAgeDogdmlld0JveFswXSAvIDEsXHJcbiAgICAgICAgeTogdmlld0JveFsxXSAvIDEsXHJcbiAgICAgICAgdzogd2lkdGgsXHJcbiAgICAgICAgaDogaGVpZ2h0LFxyXG4gICAgICAgIHZXOiB2aWV3Qm94WzJdLFxyXG4gICAgICAgIHZIOiB2aWV3Qm94WzNdXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhdGgocGF0aCwgcGVyY2VudCkge1xyXG4gICAgdmFyIHBhdGhFbCA9IGlzLnN0cihwYXRoKSA/IHNlbGVjdFN0cmluZyhwYXRoKVswXSA6IHBhdGg7XHJcbiAgICB2YXIgcCA9IHBlcmNlbnQgfHwgMTAwO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHByb3BlcnR5KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICBlbDogcGF0aEVsLFxyXG4gICAgICAgICAgICBzdmc6IGdldFBhcmVudFN2ZyhwYXRoRWwpLFxyXG4gICAgICAgICAgICB0b3RhbExlbmd0aDogZ2V0VG90YWxMZW5ndGgocGF0aEVsKSAqIChwIC8gMTAwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGF0aFByb2dyZXNzKHBhdGgsIHByb2dyZXNzLCBpc1BhdGhUYXJnZXRJbnNpZGVTVkcpIHtcclxuICAgIGZ1bmN0aW9uIHBvaW50KG9mZnNldCkge1xyXG4gICAgICAgIGlmIChvZmZzZXQgPT09IHZvaWQgMCkgb2Zmc2V0ID0gMDtcclxuXHJcbiAgICAgICAgdmFyIGwgPSBwcm9ncmVzcyArIG9mZnNldCA+PSAxID8gcHJvZ3Jlc3MgKyBvZmZzZXQgOiAwO1xyXG4gICAgICAgIHJldHVybiBwYXRoLmVsLmdldFBvaW50QXRMZW5ndGgobCk7XHJcbiAgICB9XHJcbiAgICB2YXIgc3ZnID0gZ2V0UGFyZW50U3ZnKHBhdGguZWwsIHBhdGguc3ZnKTtcclxuICAgIHZhciBwID0gcG9pbnQoKTtcclxuICAgIHZhciBwMCA9IHBvaW50KC0xKTtcclxuICAgIHZhciBwMSA9IHBvaW50KCsxKTtcclxuICAgIHZhciBzY2FsZVggPSBpc1BhdGhUYXJnZXRJbnNpZGVTVkcgPyAxIDogc3ZnLncgLyBzdmcudlc7XHJcbiAgICB2YXIgc2NhbGVZID0gaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHID8gMSA6IHN2Zy5oIC8gc3ZnLnZIO1xyXG4gICAgc3dpdGNoIChwYXRoLnByb3BlcnR5KSB7XHJcbiAgICAgICAgY2FzZSAneCc6XHJcbiAgICAgICAgICAgIHJldHVybiAocC54IC0gc3ZnLngpICogc2NhbGVYO1xyXG4gICAgICAgIGNhc2UgJ3knOlxyXG4gICAgICAgICAgICByZXR1cm4gKHAueSAtIHN2Zy55KSAqIHNjYWxlWTtcclxuICAgICAgICBjYXNlICdhbmdsZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHAxLnkgLSBwMC55LCBwMS54IC0gcDAueCkgKiAxODAgLyBNYXRoLlBJO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBEZWNvbXBvc2UgdmFsdWVcclxuXHJcbmZ1bmN0aW9uIGRlY29tcG9zZVZhbHVlKHZhbCwgdW5pdCkge1xyXG4gICAgLy8gY29uc3Qgcmd4ID0gLy0/XFxkKlxcLj9cXGQrL2c7IC8vIGhhbmRsZXMgYmFzaWMgbnVtYmVyc1xyXG4gICAgLy8gY29uc3Qgcmd4ID0gL1srLV0/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPy9nOyAvLyBoYW5kbGVzIGV4cG9uZW50cyBub3RhdGlvblxyXG4gICAgdmFyIHJneCA9IC9bKy1dP1xcZCpcXC4/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPy9nOyAvLyBoYW5kbGVzIGV4cG9uZW50cyBub3RhdGlvblxyXG4gICAgdmFyIHZhbHVlID0gdmFsaWRhdGVWYWx1ZSgoaXMucHRoKHZhbCkgPyB2YWwudG90YWxMZW5ndGggOiB2YWwpLCB1bml0KSArICcnO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBvcmlnaW5hbDogdmFsdWUsXHJcbiAgICAgICAgbnVtYmVyczogdmFsdWUubWF0Y2gocmd4KSA/IHZhbHVlLm1hdGNoKHJneCkubWFwKE51bWJlcikgOiBbMF0sXHJcbiAgICAgICAgc3RyaW5nczogKGlzLnN0cih2YWwpIHx8IHVuaXQpID8gdmFsdWUuc3BsaXQocmd4KSA6IFtdXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEFuaW1hdGFibGVzXHJcblxyXG5mdW5jdGlvbiBwYXJzZVRhcmdldHModGFyZ2V0cykge1xyXG4gICAgdmFyIHRhcmdldHNBcnJheSA9IHRhcmdldHMgPyAoZmxhdHRlbkFycmF5KGlzLmFycih0YXJnZXRzKSA/IHRhcmdldHMubWFwKHRvQXJyYXkpIDogdG9BcnJheSh0YXJnZXRzKSkpIDogW107XHJcbiAgICByZXR1cm4gZmlsdGVyQXJyYXkodGFyZ2V0c0FycmF5LCBmdW5jdGlvbihpdGVtLCBwb3MsIHNlbGYpIHtcclxuICAgICAgICByZXR1cm4gc2VsZi5pbmRleE9mKGl0ZW0pID09PSBwb3M7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QW5pbWF0YWJsZXModGFyZ2V0cykge1xyXG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcclxuICAgIHJldHVybiBwYXJzZWQubWFwKGZ1bmN0aW9uKHQsIGkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHQsXHJcbiAgICAgICAgICAgIGlkOiBpLFxyXG4gICAgICAgICAgICB0b3RhbDogcGFyc2VkLmxlbmd0aCxcclxuICAgICAgICAgICAgdHJhbnNmb3Jtczoge1xyXG4gICAgICAgICAgICAgICAgbGlzdDogZ2V0RWxlbWVudFRyYW5zZm9ybXModClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gUHJvcGVydGllc1xyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplUHJvcGVydHlUd2VlbnMocHJvcCwgdHdlZW5TZXR0aW5ncykge1xyXG4gICAgdmFyIHNldHRpbmdzID0gY2xvbmVPYmplY3QodHdlZW5TZXR0aW5ncyk7XHJcbiAgICAvLyBPdmVycmlkZSBkdXJhdGlvbiBpZiBlYXNpbmcgaXMgYSBzcHJpbmdcclxuICAgIGlmICgvXnNwcmluZy8udGVzdChzZXR0aW5ncy5lYXNpbmcpKSB7XHJcbiAgICAgICAgc2V0dGluZ3MuZHVyYXRpb24gPSBzcHJpbmcoc2V0dGluZ3MuZWFzaW5nKTtcclxuICAgIH1cclxuICAgIGlmIChpcy5hcnIocHJvcCkpIHtcclxuICAgICAgICB2YXIgbCA9IHByb3AubGVuZ3RoO1xyXG4gICAgICAgIHZhciBpc0Zyb21UbyA9IChsID09PSAyICYmICFpcy5vYmoocHJvcFswXSkpO1xyXG4gICAgICAgIGlmICghaXNGcm9tVG8pIHtcclxuICAgICAgICAgICAgLy8gRHVyYXRpb24gZGl2aWRlZCBieSB0aGUgbnVtYmVyIG9mIHR3ZWVuc1xyXG4gICAgICAgICAgICBpZiAoIWlzLmZuYyh0d2VlblNldHRpbmdzLmR1cmF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MuZHVyYXRpb24gPSB0d2VlblNldHRpbmdzLmR1cmF0aW9uIC8gbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRyYW5zZm9ybSBbZnJvbSwgdG9dIHZhbHVlcyBzaG9ydGhhbmQgdG8gYSB2YWxpZCB0d2VlbiB2YWx1ZVxyXG4gICAgICAgICAgICBwcm9wID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb3BcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgcHJvcEFycmF5ID0gaXMuYXJyKHByb3ApID8gcHJvcCA6IFtwcm9wXTtcclxuICAgIHJldHVybiBwcm9wQXJyYXkubWFwKGZ1bmN0aW9uKHYsIGkpIHtcclxuICAgICAgICB2YXIgb2JqID0gKGlzLm9iaih2KSAmJiAhaXMucHRoKHYpKSA/IHYgOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB2XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBEZWZhdWx0IGRlbGF5IHZhbHVlIHNob3VsZCBvbmx5IGJlIGFwcGxpZWQgdG8gdGhlIGZpcnN0IHR3ZWVuXHJcbiAgICAgICAgaWYgKGlzLnVuZChvYmouZGVsYXkpKSB7XHJcbiAgICAgICAgICAgIG9iai5kZWxheSA9ICFpID8gdHdlZW5TZXR0aW5ncy5kZWxheSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERlZmF1bHQgZW5kRGVsYXkgdmFsdWUgc2hvdWxkIG9ubHkgYmUgYXBwbGllZCB0byB0aGUgbGFzdCB0d2VlblxyXG4gICAgICAgIGlmIChpcy51bmQob2JqLmVuZERlbGF5KSkge1xyXG4gICAgICAgICAgICBvYmouZW5kRGVsYXkgPSBpID09PSBwcm9wQXJyYXkubGVuZ3RoIC0gMSA/IHR3ZWVuU2V0dGluZ3MuZW5kRGVsYXkgOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfSkubWFwKGZ1bmN0aW9uKGspIHtcclxuICAgICAgICByZXR1cm4gbWVyZ2VPYmplY3RzKGssIHNldHRpbmdzKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZmxhdHRlbktleWZyYW1lcyhrZXlmcmFtZXMpIHtcclxuICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gZmlsdGVyQXJyYXkoZmxhdHRlbkFycmF5KGtleWZyYW1lcy5tYXAoZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhrZXkpO1xyXG4gICAgICAgIH0pKSwgZnVuY3Rpb24ocCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXMua2V5KHApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIGlmIChhLmluZGV4T2YoYikgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBhLnB1c2goYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgfSwgW10pO1xyXG4gICAgdmFyIHByb3BlcnRpZXMgPSB7fTtcclxuICAgIHZhciBsb29wID0gZnVuY3Rpb24oaSkge1xyXG4gICAgICAgIHZhciBwcm9wTmFtZSA9IHByb3BlcnR5TmFtZXNbaV07XHJcbiAgICAgICAgcHJvcGVydGllc1twcm9wTmFtZV0gPSBrZXlmcmFtZXMubWFwKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICB2YXIgbmV3S2V5ID0ge307XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXMua2V5KHApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAgPT0gcHJvcE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3S2V5LnZhbHVlID0ga2V5W3BdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3S2V5W3BdID0ga2V5W3BdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdLZXk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydHlOYW1lcy5sZW5ndGg7IGkrKykgbG9vcChpKTtcclxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKHR3ZWVuU2V0dGluZ3MsIHBhcmFtcykge1xyXG4gICAgdmFyIHByb3BlcnRpZXMgPSBbXTtcclxuICAgIHZhciBrZXlmcmFtZXMgPSBwYXJhbXMua2V5ZnJhbWVzO1xyXG4gICAgaWYgKGtleWZyYW1lcykge1xyXG4gICAgICAgIHBhcmFtcyA9IG1lcmdlT2JqZWN0cyhmbGF0dGVuS2V5ZnJhbWVzKGtleWZyYW1lcyksIHBhcmFtcyk7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBwIGluIHBhcmFtcykge1xyXG4gICAgICAgIGlmIChpcy5rZXkocCkpIHtcclxuICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHAsXHJcbiAgICAgICAgICAgICAgICB0d2VlbnM6IG5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zKHBhcmFtc1twXSwgdHdlZW5TZXR0aW5ncylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XHJcbn1cclxuXHJcbi8vIFR3ZWVuc1xyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVHdlZW5WYWx1ZXModHdlZW4sIGFuaW1hdGFibGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHR3ZWVuKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gZ2V0RnVuY3Rpb25WYWx1ZSh0d2VlbltwXSwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgaWYgKGlzLmFycih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEZ1bmN0aW9uVmFsdWUodiwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRbcF0gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHQuZHVyYXRpb24gPSBwYXJzZUZsb2F0KHQuZHVyYXRpb24pO1xyXG4gICAgdC5kZWxheSA9IHBhcnNlRmxvYXQodC5kZWxheSk7XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVHdlZW5zKHByb3AsIGFuaW1hdGFibGUpIHtcclxuICAgIHZhciBwcmV2aW91c1R3ZWVuO1xyXG4gICAgcmV0dXJuIHByb3AudHdlZW5zLm1hcChmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgdmFyIHR3ZWVuID0gbm9ybWFsaXplVHdlZW5WYWx1ZXModCwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgdmFyIHR3ZWVuVmFsdWUgPSB0d2Vlbi52YWx1ZTtcclxuICAgICAgICB2YXIgdG8gPSBpcy5hcnIodHdlZW5WYWx1ZSkgPyB0d2VlblZhbHVlWzFdIDogdHdlZW5WYWx1ZTtcclxuICAgICAgICB2YXIgdG9Vbml0ID0gZ2V0VW5pdCh0byk7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsVmFsdWUgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKGFuaW1hdGFibGUudGFyZ2V0LCBwcm9wLm5hbWUsIHRvVW5pdCwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgdmFyIHByZXZpb3VzVmFsdWUgPSBwcmV2aW91c1R3ZWVuID8gcHJldmlvdXNUd2Vlbi50by5vcmlnaW5hbCA6IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgdmFyIGZyb20gPSBpcy5hcnIodHdlZW5WYWx1ZSkgPyB0d2VlblZhbHVlWzBdIDogcHJldmlvdXNWYWx1ZTtcclxuICAgICAgICB2YXIgZnJvbVVuaXQgPSBnZXRVbml0KGZyb20pIHx8IGdldFVuaXQob3JpZ2luYWxWYWx1ZSk7XHJcbiAgICAgICAgdmFyIHVuaXQgPSB0b1VuaXQgfHwgZnJvbVVuaXQ7XHJcbiAgICAgICAgaWYgKGlzLnVuZCh0bykpIHtcclxuICAgICAgICAgICAgdG8gPSBwcmV2aW91c1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0d2Vlbi5mcm9tID0gZGVjb21wb3NlVmFsdWUoZnJvbSwgdW5pdCk7XHJcbiAgICAgICAgdHdlZW4udG8gPSBkZWNvbXBvc2VWYWx1ZShnZXRSZWxhdGl2ZVZhbHVlKHRvLCBmcm9tKSwgdW5pdCk7XHJcbiAgICAgICAgdHdlZW4uc3RhcnQgPSBwcmV2aW91c1R3ZWVuID8gcHJldmlvdXNUd2Vlbi5lbmQgOiAwO1xyXG4gICAgICAgIHR3ZWVuLmVuZCA9IHR3ZWVuLnN0YXJ0ICsgdHdlZW4uZGVsYXkgKyB0d2Vlbi5kdXJhdGlvbiArIHR3ZWVuLmVuZERlbGF5O1xyXG4gICAgICAgIHR3ZWVuLmVhc2luZyA9IHBhcnNlRWFzaW5ncyh0d2Vlbi5lYXNpbmcsIHR3ZWVuLmR1cmF0aW9uKTtcclxuICAgICAgICB0d2Vlbi5pc1BhdGggPSBpcy5wdGgodHdlZW5WYWx1ZSk7XHJcbiAgICAgICAgdHdlZW4uaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHID0gdHdlZW4uaXNQYXRoICYmIGlzLnN2ZyhhbmltYXRhYmxlLnRhcmdldCk7XHJcbiAgICAgICAgdHdlZW4uaXNDb2xvciA9IGlzLmNvbCh0d2Vlbi5mcm9tLm9yaWdpbmFsKTtcclxuICAgICAgICBpZiAodHdlZW4uaXNDb2xvcikge1xyXG4gICAgICAgICAgICB0d2Vlbi5yb3VuZCA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXZpb3VzVHdlZW4gPSB0d2VlbjtcclxuICAgICAgICByZXR1cm4gdHdlZW47XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gVHdlZW4gcHJvZ3Jlc3NcclxuXHJcbnZhciBzZXRQcm9ncmVzc1ZhbHVlID0ge1xyXG4gICAgY3NzOiBmdW5jdGlvbih0LCBwLCB2KSB7XHJcbiAgICAgICAgcmV0dXJuIHQuc3R5bGVbcF0gPSB2O1xyXG4gICAgfSxcclxuICAgIGF0dHJpYnV0ZTogZnVuY3Rpb24odCwgcCwgdikge1xyXG4gICAgICAgIHJldHVybiB0LnNldEF0dHJpYnV0ZShwLCB2KTtcclxuICAgIH0sXHJcbiAgICBvYmplY3Q6IGZ1bmN0aW9uKHQsIHAsIHYpIHtcclxuICAgICAgICByZXR1cm4gdFtwXSA9IHY7XHJcbiAgICB9LFxyXG4gICAgdHJhbnNmb3JtOiBmdW5jdGlvbih0LCBwLCB2LCB0cmFuc2Zvcm1zLCBtYW51YWwpIHtcclxuICAgICAgICB0cmFuc2Zvcm1zLmxpc3Quc2V0KHAsIHYpO1xyXG4gICAgICAgIGlmIChwID09PSB0cmFuc2Zvcm1zLmxhc3QgfHwgbWFudWFsKSB7XHJcbiAgICAgICAgICAgIHZhciBzdHIgPSAnJztcclxuICAgICAgICAgICAgdHJhbnNmb3Jtcy5saXN0LmZvckVhY2goZnVuY3Rpb24odmFsdWUsIHByb3ApIHtcclxuICAgICAgICAgICAgICAgIHN0ciArPSBwcm9wICsgXCIoXCIgKyB2YWx1ZSArIFwiKSBcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHQuc3R5bGUudHJhbnNmb3JtID0gc3RyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8vIFNldCBWYWx1ZSBoZWxwZXJcclxuXHJcbmZ1bmN0aW9uIHNldFRhcmdldHNWYWx1ZSh0YXJnZXRzLCBwcm9wZXJ0aWVzKSB7XHJcbiAgICB2YXIgYW5pbWF0YWJsZXMgPSBnZXRBbmltYXRhYmxlcyh0YXJnZXRzKTtcclxuICAgIGFuaW1hdGFibGVzLmZvckVhY2goZnVuY3Rpb24oYW5pbWF0YWJsZSkge1xyXG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZ2V0RnVuY3Rpb25WYWx1ZShwcm9wZXJ0aWVzW3Byb3BlcnR5XSwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBhbmltYXRhYmxlLnRhcmdldDtcclxuICAgICAgICAgICAgdmFyIHZhbHVlVW5pdCA9IGdldFVuaXQodmFsdWUpO1xyXG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWVVbml0LCBhbmltYXRhYmxlKTtcclxuICAgICAgICAgICAgdmFyIHVuaXQgPSB2YWx1ZVVuaXQgfHwgZ2V0VW5pdChvcmlnaW5hbFZhbHVlKTtcclxuICAgICAgICAgICAgdmFyIHRvID0gZ2V0UmVsYXRpdmVWYWx1ZSh2YWxpZGF0ZVZhbHVlKHZhbHVlLCB1bml0KSwgb3JpZ2luYWxWYWx1ZSk7XHJcbiAgICAgICAgICAgIHZhciBhbmltVHlwZSA9IGdldEFuaW1hdGlvblR5cGUodGFyZ2V0LCBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIHNldFByb2dyZXNzVmFsdWVbYW5pbVR5cGVdKHRhcmdldCwgcHJvcGVydHksIHRvLCBhbmltYXRhYmxlLnRyYW5zZm9ybXMsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBBbmltYXRpb25zXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBbmltYXRpb24oYW5pbWF0YWJsZSwgcHJvcCkge1xyXG4gICAgdmFyIGFuaW1UeXBlID0gZ2V0QW5pbWF0aW9uVHlwZShhbmltYXRhYmxlLnRhcmdldCwgcHJvcC5uYW1lKTtcclxuICAgIGlmIChhbmltVHlwZSkge1xyXG4gICAgICAgIHZhciB0d2VlbnMgPSBub3JtYWxpemVUd2VlbnMocHJvcCwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgdmFyIGxhc3RUd2VlbiA9IHR3ZWVuc1t0d2VlbnMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogYW5pbVR5cGUsXHJcbiAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wLm5hbWUsXHJcbiAgICAgICAgICAgIGFuaW1hdGFibGU6IGFuaW1hdGFibGUsXHJcbiAgICAgICAgICAgIHR3ZWVuczogdHdlZW5zLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogbGFzdFR3ZWVuLmVuZCxcclxuICAgICAgICAgICAgZGVsYXk6IHR3ZWVuc1swXS5kZWxheSxcclxuICAgICAgICAgICAgZW5kRGVsYXk6IGxhc3RUd2Vlbi5lbmREZWxheVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9ucyhhbmltYXRhYmxlcywgcHJvcGVydGllcykge1xyXG4gICAgcmV0dXJuIGZpbHRlckFycmF5KGZsYXR0ZW5BcnJheShhbmltYXRhYmxlcy5tYXAoZnVuY3Rpb24oYW5pbWF0YWJsZSkge1xyXG4gICAgICAgIHJldHVybiBwcm9wZXJ0aWVzLm1hcChmdW5jdGlvbihwcm9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBbmltYXRpb24oYW5pbWF0YWJsZSwgcHJvcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KSksIGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gIWlzLnVuZChhKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBDcmVhdGUgSW5zdGFuY2VcclxuXHJcbmZ1bmN0aW9uIGdldEluc3RhbmNlVGltaW5ncyhhbmltYXRpb25zLCB0d2VlblNldHRpbmdzKSB7XHJcbiAgICB2YXIgYW5pbUxlbmd0aCA9IGFuaW1hdGlvbnMubGVuZ3RoO1xyXG4gICAgdmFyIGdldFRsT2Zmc2V0ID0gZnVuY3Rpb24oYW5pbSkge1xyXG4gICAgICAgIHJldHVybiBhbmltLnRpbWVsaW5lT2Zmc2V0ID8gYW5pbS50aW1lbGluZU9mZnNldCA6IDA7XHJcbiAgICB9O1xyXG4gICAgdmFyIHRpbWluZ3MgPSB7fTtcclxuICAgIHRpbWluZ3MuZHVyYXRpb24gPSBhbmltTGVuZ3RoID8gTWF0aC5tYXguYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24oYW5pbSkge1xyXG4gICAgICAgIHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZHVyYXRpb247XHJcbiAgICB9KSkgOiB0d2VlblNldHRpbmdzLmR1cmF0aW9uO1xyXG4gICAgdGltaW5ncy5kZWxheSA9IGFuaW1MZW5ndGggPyBNYXRoLm1pbi5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbihhbmltKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kZWxheTtcclxuICAgIH0pKSA6IHR3ZWVuU2V0dGluZ3MuZGVsYXk7XHJcbiAgICB0aW1pbmdzLmVuZERlbGF5ID0gYW5pbUxlbmd0aCA/IHRpbWluZ3MuZHVyYXRpb24gLSBNYXRoLm1heC5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbihhbmltKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kdXJhdGlvbiAtIGFuaW0uZW5kRGVsYXk7XHJcbiAgICB9KSkgOiB0d2VlblNldHRpbmdzLmVuZERlbGF5O1xyXG4gICAgcmV0dXJuIHRpbWluZ3M7XHJcbn1cclxuXHJcbnZhciBpbnN0YW5jZUlEID0gMDtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld0luc3RhbmNlKHBhcmFtcykge1xyXG4gICAgdmFyIGluc3RhbmNlU2V0dGluZ3MgPSByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MsIHBhcmFtcyk7XHJcbiAgICB2YXIgdHdlZW5TZXR0aW5ncyA9IHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0VHdlZW5TZXR0aW5ncywgcGFyYW1zKTtcclxuICAgIHZhciBwcm9wZXJ0aWVzID0gZ2V0UHJvcGVydGllcyh0d2VlblNldHRpbmdzLCBwYXJhbXMpO1xyXG4gICAgdmFyIGFuaW1hdGFibGVzID0gZ2V0QW5pbWF0YWJsZXMocGFyYW1zLnRhcmdldHMpO1xyXG4gICAgdmFyIGFuaW1hdGlvbnMgPSBnZXRBbmltYXRpb25zKGFuaW1hdGFibGVzLCBwcm9wZXJ0aWVzKTtcclxuICAgIHZhciB0aW1pbmdzID0gZ2V0SW5zdGFuY2VUaW1pbmdzKGFuaW1hdGlvbnMsIHR3ZWVuU2V0dGluZ3MpO1xyXG4gICAgdmFyIGlkID0gaW5zdGFuY2VJRDtcclxuICAgIGluc3RhbmNlSUQrKztcclxuICAgIHJldHVybiBtZXJnZU9iamVjdHMoaW5zdGFuY2VTZXR0aW5ncywge1xyXG4gICAgICAgIGlkOiBpZCxcclxuICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgYW5pbWF0YWJsZXM6IGFuaW1hdGFibGVzLFxyXG4gICAgICAgIGFuaW1hdGlvbnM6IGFuaW1hdGlvbnMsXHJcbiAgICAgICAgZHVyYXRpb246IHRpbWluZ3MuZHVyYXRpb24sXHJcbiAgICAgICAgZGVsYXk6IHRpbWluZ3MuZGVsYXksXHJcbiAgICAgICAgZW5kRGVsYXk6IHRpbWluZ3MuZW5kRGVsYXlcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBDb3JlXHJcblxyXG52YXIgYWN0aXZlSW5zdGFuY2VzID0gW107XHJcblxyXG52YXIgZW5naW5lID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHJhZjtcclxuXHJcbiAgICBmdW5jdGlvbiBwbGF5KCkge1xyXG4gICAgICAgIGlmICghcmFmICYmICghaXNEb2N1bWVudEhpZGRlbigpIHx8ICFhbmltZS5zdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuKSAmJiBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0ZXAodCkge1xyXG4gICAgICAgIC8vIG1lbW8gb24gYWxnb3JpdGhtIGlzc3VlOlxyXG4gICAgICAgIC8vIGRhbmdlcm91cyBpdGVyYXRpb24gb3ZlciBtdXRhYmxlIGBhY3RpdmVJbnN0YW5jZXNgXHJcbiAgICAgICAgLy8gKHRoYXQgY29sbGVjdGlvbiBtYXkgYmUgdXBkYXRlZCBmcm9tIHdpdGhpbiBjYWxsYmFja3Mgb2YgYHRpY2tgLWVkIGFuaW1hdGlvbiBpbnN0YW5jZXMpXHJcbiAgICAgICAgdmFyIGFjdGl2ZUluc3RhbmNlc0xlbmd0aCA9IGFjdGl2ZUluc3RhbmNlcy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIHdoaWxlIChpIDwgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBhY3RpdmVJbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlc1tpXTtcclxuICAgICAgICAgICAgaWYgKCFhY3RpdmVJbnN0YW5jZS5wYXVzZWQpIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUluc3RhbmNlLnRpY2sodCk7XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbnN0YW5jZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmFmID0gaSA+IDAgPyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSgpIHtcclxuICAgICAgICBpZiAoIWFuaW1lLnN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzRG9jdW1lbnRIaWRkZW4oKSkge1xyXG4gICAgICAgICAgICAvLyBzdXNwZW5kIHRpY2tzXHJcbiAgICAgICAgICAgIHJhZiA9IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8gaXMgYmFjayB0byBhY3RpdmUgdGFiXHJcbiAgICAgICAgICAgIC8vIGZpcnN0IGFkanVzdCBhbmltYXRpb25zIHRvIGNvbnNpZGVyIHRoZSB0aW1lIHRoYXQgdGlja3Mgd2VyZSBzdXNwZW5kZWRcclxuICAgICAgICAgICAgYWN0aXZlSW5zdGFuY2VzLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5fb25Eb2N1bWVudFZpc2liaWxpdHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZW5naW5lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBsYXk7XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBpc0RvY3VtZW50SGlkZGVuKCkge1xyXG4gICAgcmV0dXJuICEhZG9jdW1lbnQgJiYgZG9jdW1lbnQuaGlkZGVuO1xyXG59XHJcblxyXG4vLyBQdWJsaWMgSW5zdGFuY2VcclxuXHJcbmZ1bmN0aW9uIGFuaW1lKHBhcmFtcykge1xyXG4gICAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSBwYXJhbXMgPSB7fTtcclxuXHJcblxyXG4gICAgdmFyIHN0YXJ0VGltZSA9IDAsXHJcbiAgICAgICAgbGFzdFRpbWUgPSAwLFxyXG4gICAgICAgIG5vdyA9IDA7XHJcbiAgICB2YXIgY2hpbGRyZW4sIGNoaWxkcmVuTGVuZ3RoID0gMDtcclxuICAgIHZhciByZXNvbHZlID0gbnVsbDtcclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlUHJvbWlzZShpbnN0YW5jZSkge1xyXG4gICAgICAgIHZhciBwcm9taXNlID0gd2luZG93LlByb21pc2UgJiYgbmV3IFByb21pc2UoZnVuY3Rpb24oX3Jlc29sdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUgPSBfcmVzb2x2ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpbnN0YW5jZS5maW5pc2hlZCA9IHByb21pc2U7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGluc3RhbmNlID0gY3JlYXRlTmV3SW5zdGFuY2UocGFyYW1zKTtcclxuICAgIHZhciBwcm9taXNlID0gbWFrZVByb21pc2UoaW5zdGFuY2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCkge1xyXG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBpbnN0YW5jZS5kaXJlY3Rpb247XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiAhPT0gJ2FsdGVybmF0ZScpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UuZGlyZWN0aW9uID0gZGlyZWN0aW9uICE9PSAnbm9ybWFsJyA/ICdub3JtYWwnIDogJ3JldmVyc2UnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnN0YW5jZS5yZXZlcnNlZCA9ICFpbnN0YW5jZS5yZXZlcnNlZDtcclxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGlsZC5yZXZlcnNlZCA9IGluc3RhbmNlLnJldmVyc2VkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkanVzdFRpbWUodGltZSkge1xyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5yZXZlcnNlZCA/IGluc3RhbmNlLmR1cmF0aW9uIC0gdGltZSA6IHRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRUaW1lKCkge1xyXG4gICAgICAgIHN0YXJ0VGltZSA9IDA7XHJcbiAgICAgICAgbGFzdFRpbWUgPSBhZGp1c3RUaW1lKGluc3RhbmNlLmN1cnJlbnRUaW1lKSAqICgxIC8gYW5pbWUuc3BlZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlZWtDaGlsZCh0aW1lLCBjaGlsZCkge1xyXG4gICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5zZWVrKHRpbWUgLSBjaGlsZC50aW1lbGluZU9mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN5bmNJbnN0YW5jZUNoaWxkcmVuKHRpbWUpIHtcclxuICAgICAgICBpZiAoIWluc3RhbmNlLnJldmVyc2VQbGF5YmFjaykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHNlZWtDaGlsZCh0aW1lLCBjaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpJDEgPSBjaGlsZHJlbkxlbmd0aDsgaSQxLS07KSB7XHJcbiAgICAgICAgICAgICAgICBzZWVrQ2hpbGQodGltZSwgY2hpbGRyZW5baSQxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc1RpbWUpIHtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvbnMgPSBpbnN0YW5jZS5hbmltYXRpb25zO1xyXG4gICAgICAgIHZhciBhbmltYXRpb25zTGVuZ3RoID0gYW5pbWF0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKGkgPCBhbmltYXRpb25zTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBhbmltID0gYW5pbWF0aW9uc1tpXTtcclxuICAgICAgICAgICAgdmFyIGFuaW1hdGFibGUgPSBhbmltLmFuaW1hdGFibGU7XHJcbiAgICAgICAgICAgIHZhciB0d2VlbnMgPSBhbmltLnR3ZWVucztcclxuICAgICAgICAgICAgdmFyIHR3ZWVuTGVuZ3RoID0gdHdlZW5zLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIHZhciB0d2VlbiA9IHR3ZWVuc1t0d2Vlbkxlbmd0aF07XHJcbiAgICAgICAgICAgIC8vIE9ubHkgY2hlY2sgZm9yIGtleWZyYW1lcyBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIHR3ZWVuXHJcbiAgICAgICAgICAgIGlmICh0d2Vlbkxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdHdlZW4gPSBmaWx0ZXJBcnJheSh0d2VlbnMsIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGluc1RpbWUgPCB0LmVuZCk7XHJcbiAgICAgICAgICAgICAgICB9KVswXSB8fCB0d2VlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZWxhcHNlZCA9IG1pbk1heChpbnNUaW1lIC0gdHdlZW4uc3RhcnQgLSB0d2Vlbi5kZWxheSwgMCwgdHdlZW4uZHVyYXRpb24pIC8gdHdlZW4uZHVyYXRpb247XHJcbiAgICAgICAgICAgIHZhciBlYXNlZCA9IGlzTmFOKGVsYXBzZWQpID8gMSA6IHR3ZWVuLmVhc2luZyhlbGFwc2VkKTtcclxuICAgICAgICAgICAgdmFyIHN0cmluZ3MgPSB0d2Vlbi50by5zdHJpbmdzO1xyXG4gICAgICAgICAgICB2YXIgcm91bmQgPSB0d2Vlbi5yb3VuZDtcclxuICAgICAgICAgICAgdmFyIG51bWJlcnMgPSBbXTtcclxuICAgICAgICAgICAgdmFyIHRvTnVtYmVyc0xlbmd0aCA9IHR3ZWVuLnRvLm51bWJlcnMubGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAodm9pZCAwKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0b051bWJlcnNMZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gKHZvaWQgMCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9OdW1iZXIgPSB0d2Vlbi50by5udW1iZXJzW25dO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZyb21OdW1iZXIgPSB0d2Vlbi5mcm9tLm51bWJlcnNbbl0gfHwgMDtcclxuICAgICAgICAgICAgICAgIGlmICghdHdlZW4uaXNQYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBmcm9tTnVtYmVyICsgKGVhc2VkICogKHRvTnVtYmVyIC0gZnJvbU51bWJlcikpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGdldFBhdGhQcm9ncmVzcyh0d2Vlbi52YWx1ZSwgZWFzZWQgKiB0b051bWJlciwgdHdlZW4uaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHR3ZWVuLmlzQ29sb3IgJiYgbiA+IDIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAqIHJvdW5kKSAvIHJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG51bWJlcnMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gTWFudWFsIEFycmF5LnJlZHVjZSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlc1xyXG4gICAgICAgICAgICB2YXIgc3RyaW5nc0xlbmd0aCA9IHN0cmluZ3MubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAoIXN0cmluZ3NMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gbnVtYmVyc1swXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gc3RyaW5nc1swXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgc3RyaW5nc0xlbmd0aDsgcysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBzdHJpbmdzW3NdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiID0gc3RyaW5nc1tzICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4kMSA9IG51bWJlcnNbc107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihuJDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gbiQxICsgJyAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gbiQxICsgYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRQcm9ncmVzc1ZhbHVlW2FuaW0udHlwZV0oYW5pbWF0YWJsZS50YXJnZXQsIGFuaW0ucHJvcGVydHksIHByb2dyZXNzLCBhbmltYXRhYmxlLnRyYW5zZm9ybXMpO1xyXG4gICAgICAgICAgICBhbmltLmN1cnJlbnRWYWx1ZSA9IHByb2dyZXNzO1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENhbGxiYWNrKGNiKSB7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlW2NiXSAmJiAhaW5zdGFuY2UucGFzc1Rocm91Z2gpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2VbY2JdKGluc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY291bnRJdGVyYXRpb24oKSB7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLnJlbWFpbmluZyAmJiBpbnN0YW5jZS5yZW1haW5pbmcgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UucmVtYWluaW5nLS07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEluc3RhbmNlUHJvZ3Jlc3MoZW5naW5lVGltZSkge1xyXG4gICAgICAgIHZhciBpbnNEdXJhdGlvbiA9IGluc3RhbmNlLmR1cmF0aW9uO1xyXG4gICAgICAgIHZhciBpbnNEZWxheSA9IGluc3RhbmNlLmRlbGF5O1xyXG4gICAgICAgIHZhciBpbnNFbmREZWxheSA9IGluc0R1cmF0aW9uIC0gaW5zdGFuY2UuZW5kRGVsYXk7XHJcbiAgICAgICAgdmFyIGluc1RpbWUgPSBhZGp1c3RUaW1lKGVuZ2luZVRpbWUpO1xyXG4gICAgICAgIGluc3RhbmNlLnByb2dyZXNzID0gbWluTWF4KChpbnNUaW1lIC8gaW5zRHVyYXRpb24pICogMTAwLCAwLCAxMDApO1xyXG4gICAgICAgIGluc3RhbmNlLnJldmVyc2VQbGF5YmFjayA9IGluc1RpbWUgPCBpbnN0YW5jZS5jdXJyZW50VGltZTtcclxuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgc3luY0luc3RhbmNlQ2hpbGRyZW4oaW5zVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaW5zdGFuY2UuYmVnYW4gJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLmJlZ2FuID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2JlZ2luJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaW5zdGFuY2UubG9vcEJlZ2FuICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lID4gMCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRDYWxsYmFjaygnbG9vcEJlZ2luJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbnNUaW1lIDw9IGluc0RlbGF5ICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcygwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChpbnNUaW1lID49IGluc0VuZERlbGF5ICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lICE9PSBpbnNEdXJhdGlvbikgfHwgIWluc0R1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNEdXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbnNUaW1lID4gaW5zRGVsYXkgJiYgaW5zVGltZSA8IGluc0VuZERlbGF5KSB7XHJcbiAgICAgICAgICAgIGlmICghaW5zdGFuY2UuY2hhbmdlQmVnYW4pIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2NoYW5nZUJlZ2luJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zVGltZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlLmNoYW5nZUJlZ2FuKSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jaGFuZ2VDb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY2hhbmdlQmVnYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2VDb21wbGV0ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluc3RhbmNlLmN1cnJlbnRUaW1lID0gbWluTWF4KGluc1RpbWUsIDAsIGluc0R1cmF0aW9uKTtcclxuICAgICAgICBpZiAoaW5zdGFuY2UuYmVnYW4pIHtcclxuICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ3VwZGF0ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW5naW5lVGltZSA+PSBpbnNEdXJhdGlvbikge1xyXG4gICAgICAgICAgICBsYXN0VGltZSA9IDA7XHJcbiAgICAgICAgICAgIGNvdW50SXRlcmF0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICghaW5zdGFuY2UucmVtYWluaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnN0YW5jZS5jb21wbGV0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhbGxiYWNrKCdsb29wQ29tcGxldGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYWxsYmFjaygnY29tcGxldGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWluc3RhbmNlLnBhc3NUaHJvdWdoICYmICdQcm9taXNlJyBpbiB3aW5kb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gbWFrZVByb21pc2UoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZSA9IG5vdztcclxuICAgICAgICAgICAgICAgIHNldENhbGxiYWNrKCdsb29wQ29tcGxldGUnKTtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlLmRpcmVjdGlvbiA9PT0gJ2FsdGVybmF0ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluc3RhbmNlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGluc3RhbmNlLmRpcmVjdGlvbjtcclxuICAgICAgICBpbnN0YW5jZS5wYXNzVGhyb3VnaCA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICBpbnN0YW5jZS5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICBpbnN0YW5jZS5iZWdhbiA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gZmFsc2U7XHJcbiAgICAgICAgaW5zdGFuY2UuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrID0gZmFsc2U7XHJcbiAgICAgICAgaW5zdGFuY2UucmV2ZXJzZWQgPSBkaXJlY3Rpb24gPT09ICdyZXZlcnNlJztcclxuICAgICAgICBpbnN0YW5jZS5yZW1haW5pbmcgPSBpbnN0YW5jZS5sb29wO1xyXG4gICAgICAgIGNoaWxkcmVuID0gaW5zdGFuY2UuY2hpbGRyZW47XHJcbiAgICAgICAgY2hpbGRyZW5MZW5ndGggPSBjaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGNoaWxkcmVuTGVuZ3RoOyBpLS07KSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLmNoaWxkcmVuW2ldLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbnN0YW5jZS5yZXZlcnNlZCAmJiBpbnN0YW5jZS5sb29wICE9PSB0cnVlIHx8IChkaXJlY3Rpb24gPT09ICdhbHRlcm5hdGUnICYmIGluc3RhbmNlLmxvb3AgPT09IDEpKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnJlbWFpbmluZysrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zdGFuY2UucmV2ZXJzZWQgPyBpbnN0YW5jZS5kdXJhdGlvbiA6IDApO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBpbnRlcm5hbCBtZXRob2QgKGZvciBlbmdpbmUpIHRvIGFkanVzdCBhbmltYXRpb24gdGltaW5ncyBiZWZvcmUgcmVzdG9yaW5nIGVuZ2luZSB0aWNrcyAockFGKVxyXG4gICAgaW5zdGFuY2UuX29uRG9jdW1lbnRWaXNpYmlsaXR5ID0gcmVzZXRUaW1lO1xyXG5cclxuICAgIC8vIFNldCBWYWx1ZSBoZWxwZXJcclxuXHJcbiAgICBpbnN0YW5jZS5zZXQgPSBmdW5jdGlvbih0YXJnZXRzLCBwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgc2V0VGFyZ2V0c1ZhbHVlKHRhcmdldHMsIHByb3BlcnRpZXMpO1xyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2UudGljayA9IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBub3cgPSB0O1xyXG4gICAgICAgIGlmICghc3RhcnRUaW1lKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0VGltZSA9IG5vdztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SW5zdGFuY2VQcm9ncmVzcygobm93ICsgKGxhc3RUaW1lIC0gc3RhcnRUaW1lKSkgKiBhbmltZS5zcGVlZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnNlZWsgPSBmdW5jdGlvbih0aW1lKSB7XHJcbiAgICAgICAgc2V0SW5zdGFuY2VQcm9ncmVzcyhhZGp1c3RUaW1lKHRpbWUpKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2UucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgIHJlc2V0VGltZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnN0YW5jZS5wbGF5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZS5wYXVzZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5zdGFuY2UuY29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluc3RhbmNlLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGFjdGl2ZUluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcclxuICAgICAgICByZXNldFRpbWUoKTtcclxuICAgICAgICBlbmdpbmUoKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2UucmV2ZXJzZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgaW5zdGFuY2UuY29tcGxldGVkID0gaW5zdGFuY2UucmV2ZXJzZWQgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgcmVzZXRUaW1lKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnJlc3RhcnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpbnN0YW5jZS5yZXNldCgpO1xyXG4gICAgICAgIGluc3RhbmNlLnBsYXkoKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2UucmVtb3ZlID0gZnVuY3Rpb24odGFyZ2V0cykge1xyXG4gICAgICAgIHZhciB0YXJnZXRzQXJyYXkgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XHJcbiAgICAgICAgcmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSh0YXJnZXRzQXJyYXksIGluc3RhbmNlKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2UucmVzZXQoKTtcclxuXHJcbiAgICBpZiAoaW5zdGFuY2UuYXV0b3BsYXkpIHtcclxuICAgICAgICBpbnN0YW5jZS5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG5cclxufVxyXG5cclxuLy8gUmVtb3ZlIHRhcmdldHMgZnJvbSBhbmltYXRpb25cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnMpIHtcclxuICAgIGZvciAodmFyIGEgPSBhbmltYXRpb25zLmxlbmd0aDsgYS0tOykge1xyXG4gICAgICAgIGlmIChhcnJheUNvbnRhaW5zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9uc1thXS5hbmltYXRhYmxlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9ucy5zcGxpY2UoYSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVUYXJnZXRzRnJvbUluc3RhbmNlKHRhcmdldHNBcnJheSwgaW5zdGFuY2UpIHtcclxuICAgIHZhciBhbmltYXRpb25zID0gaW5zdGFuY2UuYW5pbWF0aW9ucztcclxuICAgIHZhciBjaGlsZHJlbiA9IGluc3RhbmNlLmNoaWxkcmVuO1xyXG4gICAgcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9ucyk7XHJcbiAgICBmb3IgKHZhciBjID0gY2hpbGRyZW4ubGVuZ3RoOyBjLS07KSB7XHJcbiAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5bY107XHJcbiAgICAgICAgdmFyIGNoaWxkQW5pbWF0aW9ucyA9IGNoaWxkLmFuaW1hdGlvbnM7XHJcbiAgICAgICAgcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgY2hpbGRBbmltYXRpb25zKTtcclxuICAgICAgICBpZiAoIWNoaWxkQW5pbWF0aW9ucy5sZW5ndGggJiYgIWNoaWxkLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjaGlsZHJlbi5zcGxpY2UoYywgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFhbmltYXRpb25zLmxlbmd0aCAmJiAhY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgaW5zdGFuY2UucGF1c2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21BY3RpdmVJbnN0YW5jZXModGFyZ2V0cykge1xyXG4gICAgdmFyIHRhcmdldHNBcnJheSA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcclxuICAgIGZvciAodmFyIGkgPSBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoOyBpLS07KSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2VzW2ldO1xyXG4gICAgICAgIHJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UodGFyZ2V0c0FycmF5LCBpbnN0YW5jZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFN0YWdnZXIgaGVscGVyc1xyXG5cclxuZnVuY3Rpb24gc3RhZ2dlcih2YWwsIHBhcmFtcykge1xyXG4gICAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSBwYXJhbXMgPSB7fTtcclxuXHJcbiAgICB2YXIgZGlyZWN0aW9uID0gcGFyYW1zLmRpcmVjdGlvbiB8fCAnbm9ybWFsJztcclxuICAgIHZhciBlYXNpbmcgPSBwYXJhbXMuZWFzaW5nID8gcGFyc2VFYXNpbmdzKHBhcmFtcy5lYXNpbmcpIDogbnVsbDtcclxuICAgIHZhciBncmlkID0gcGFyYW1zLmdyaWQ7XHJcbiAgICB2YXIgYXhpcyA9IHBhcmFtcy5heGlzO1xyXG4gICAgdmFyIGZyb21JbmRleCA9IHBhcmFtcy5mcm9tIHx8IDA7XHJcbiAgICB2YXIgZnJvbUZpcnN0ID0gZnJvbUluZGV4ID09PSAnZmlyc3QnO1xyXG4gICAgdmFyIGZyb21DZW50ZXIgPSBmcm9tSW5kZXggPT09ICdjZW50ZXInO1xyXG4gICAgdmFyIGZyb21MYXN0ID0gZnJvbUluZGV4ID09PSAnbGFzdCc7XHJcbiAgICB2YXIgaXNSYW5nZSA9IGlzLmFycih2YWwpO1xyXG4gICAgdmFyIHZhbDEgPSBpc1JhbmdlID8gcGFyc2VGbG9hdCh2YWxbMF0pIDogcGFyc2VGbG9hdCh2YWwpO1xyXG4gICAgdmFyIHZhbDIgPSBpc1JhbmdlID8gcGFyc2VGbG9hdCh2YWxbMV0pIDogMDtcclxuICAgIHZhciB1bml0ID0gZ2V0VW5pdChpc1JhbmdlID8gdmFsWzFdIDogdmFsKSB8fCAwO1xyXG4gICAgdmFyIHN0YXJ0ID0gcGFyYW1zLnN0YXJ0IHx8IDAgKyAoaXNSYW5nZSA/IHZhbDEgOiAwKTtcclxuICAgIHZhciB2YWx1ZXMgPSBbXTtcclxuICAgIHZhciBtYXhWYWx1ZSA9IDA7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oZWwsIGksIHQpIHtcclxuICAgICAgICBpZiAoZnJvbUZpcnN0KSB7XHJcbiAgICAgICAgICAgIGZyb21JbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmcm9tQ2VudGVyKSB7XHJcbiAgICAgICAgICAgIGZyb21JbmRleCA9ICh0IC0gMSkgLyAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZnJvbUxhc3QpIHtcclxuICAgICAgICAgICAgZnJvbUluZGV4ID0gdCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFncmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goTWF0aC5hYnMoZnJvbUluZGV4IC0gaW5kZXgpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZyb21YID0gIWZyb21DZW50ZXIgPyBmcm9tSW5kZXggJSBncmlkWzBdIDogKGdyaWRbMF0gLSAxKSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZyb21ZID0gIWZyb21DZW50ZXIgPyBNYXRoLmZsb29yKGZyb21JbmRleCAvIGdyaWRbMF0pIDogKGdyaWRbMV0gLSAxKSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvWCA9IGluZGV4ICUgZ3JpZFswXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG9ZID0gTWF0aC5mbG9vcihpbmRleCAvIGdyaWRbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZVggPSBmcm9tWCAtIHRvWDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VZID0gZnJvbVkgLSB0b1k7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gTWF0aC5zcXJ0KGRpc3RhbmNlWCAqIGRpc3RhbmNlWCArIGRpc3RhbmNlWSAqIGRpc3RhbmNlWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF4aXMgPT09ICd4Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IC1kaXN0YW5jZVg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChheGlzID09PSAneScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAtZGlzdGFuY2VZO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIHZhbHVlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVhc2luZykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbih2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWFzaW5nKHZhbCAvIG1heFZhbHVlKSAqIG1heFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JldmVyc2UnKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBheGlzID8gKHZhbCA8IDApID8gdmFsICogLTEgOiAtdmFsIDogTWF0aC5hYnMobWF4VmFsdWUgLSB2YWwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNwYWNpbmcgPSBpc1JhbmdlID8gKHZhbDIgLSB2YWwxKSAvIG1heFZhbHVlIDogdmFsMTtcclxuICAgICAgICByZXR1cm4gc3RhcnQgKyAoc3BhY2luZyAqIChNYXRoLnJvdW5kKHZhbHVlc1tpXSAqIDEwMCkgLyAxMDApKSArIHVuaXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFRpbWVsaW5lXHJcblxyXG5mdW5jdGlvbiB0aW1lbGluZShwYXJhbXMpIHtcclxuICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkgcGFyYW1zID0ge307XHJcblxyXG4gICAgdmFyIHRsID0gYW5pbWUocGFyYW1zKTtcclxuICAgIHRsLmR1cmF0aW9uID0gMDtcclxuICAgIHRsLmFkZCA9IGZ1bmN0aW9uKGluc3RhbmNlUGFyYW1zLCB0aW1lbGluZU9mZnNldCkge1xyXG4gICAgICAgIHZhciB0bEluZGV4ID0gYWN0aXZlSW5zdGFuY2VzLmluZGV4T2YodGwpO1xyXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRsLmNoaWxkcmVuO1xyXG4gICAgICAgIGlmICh0bEluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgYWN0aXZlSW5zdGFuY2VzLnNwbGljZSh0bEluZGV4LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHBhc3NUaHJvdWdoKGlucykge1xyXG4gICAgICAgICAgICBpbnMucGFzc1Rocm91Z2ggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBhc3NUaHJvdWdoKGNoaWxkcmVuW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGluc1BhcmFtcyA9IG1lcmdlT2JqZWN0cyhpbnN0YW5jZVBhcmFtcywgcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRUd2VlblNldHRpbmdzLCBwYXJhbXMpKTtcclxuICAgICAgICBpbnNQYXJhbXMudGFyZ2V0cyA9IGluc1BhcmFtcy50YXJnZXRzIHx8IHBhcmFtcy50YXJnZXRzO1xyXG4gICAgICAgIHZhciB0bER1cmF0aW9uID0gdGwuZHVyYXRpb247XHJcbiAgICAgICAgaW5zUGFyYW1zLmF1dG9wbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgaW5zUGFyYW1zLmRpcmVjdGlvbiA9IHRsLmRpcmVjdGlvbjtcclxuICAgICAgICBpbnNQYXJhbXMudGltZWxpbmVPZmZzZXQgPSBpcy51bmQodGltZWxpbmVPZmZzZXQpID8gdGxEdXJhdGlvbiA6IGdldFJlbGF0aXZlVmFsdWUodGltZWxpbmVPZmZzZXQsIHRsRHVyYXRpb24pO1xyXG4gICAgICAgIHBhc3NUaHJvdWdoKHRsKTtcclxuICAgICAgICB0bC5zZWVrKGluc1BhcmFtcy50aW1lbGluZU9mZnNldCk7XHJcbiAgICAgICAgdmFyIGlucyA9IGFuaW1lKGluc1BhcmFtcyk7XHJcbiAgICAgICAgcGFzc1Rocm91Z2goaW5zKTtcclxuICAgICAgICBjaGlsZHJlbi5wdXNoKGlucyk7XHJcbiAgICAgICAgdmFyIHRpbWluZ3MgPSBnZXRJbnN0YW5jZVRpbWluZ3MoY2hpbGRyZW4sIHBhcmFtcyk7XHJcbiAgICAgICAgdGwuZGVsYXkgPSB0aW1pbmdzLmRlbGF5O1xyXG4gICAgICAgIHRsLmVuZERlbGF5ID0gdGltaW5ncy5lbmREZWxheTtcclxuICAgICAgICB0bC5kdXJhdGlvbiA9IHRpbWluZ3MuZHVyYXRpb247XHJcbiAgICAgICAgdGwuc2VlaygwKTtcclxuICAgICAgICB0bC5yZXNldCgpO1xyXG4gICAgICAgIGlmICh0bC5hdXRvcGxheSkge1xyXG4gICAgICAgICAgICB0bC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0bDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGw7XHJcbn1cclxuXHJcbmFuaW1lLnZlcnNpb24gPSAnMy4yLjEnO1xyXG5hbmltZS5zcGVlZCA9IDE7XHJcbi8vIFRPRE86I3JldmlldzogbmFtaW5nLCBkb2N1bWVudGF0aW9uXHJcbmFuaW1lLnN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4gPSB0cnVlO1xyXG5hbmltZS5ydW5uaW5nID0gYWN0aXZlSW5zdGFuY2VzO1xyXG5hbmltZS5yZW1vdmUgPSByZW1vdmVUYXJnZXRzRnJvbUFjdGl2ZUluc3RhbmNlcztcclxuYW5pbWUuZ2V0ID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZTtcclxuYW5pbWUuc2V0ID0gc2V0VGFyZ2V0c1ZhbHVlO1xyXG5hbmltZS5jb252ZXJ0UHggPSBjb252ZXJ0UHhUb1VuaXQ7XHJcbmFuaW1lLnBhdGggPSBnZXRQYXRoO1xyXG5hbmltZS5zZXREYXNob2Zmc2V0ID0gc2V0RGFzaG9mZnNldDtcclxuYW5pbWUuc3RhZ2dlciA9IHN0YWdnZXI7XHJcbmFuaW1lLnRpbWVsaW5lID0gdGltZWxpbmU7XHJcbmFuaW1lLmVhc2luZyA9IHBhcnNlRWFzaW5ncztcclxuYW5pbWUucGVubmVyID0gcGVubmVyO1xyXG5hbmltZS5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFuaW1lO1xyXG4iLCIvKiFcclxuV2F5cG9pbnRzIC0gNC4wLjFcclxuQ29weXJpZ2h0IMKpIDIwMTEtMjAxNiBDYWxlYiBUcm91Z2h0b25cclxuTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5odHRwczovL2dpdGh1Yi5jb20vaW1ha2V3ZWJ0aGluZ3Mvd2F5cG9pbnRzL2Jsb2IvbWFzdGVyL2xpY2Vuc2VzLnR4dFxyXG4qL1xyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCdcclxuXHJcbiAgICB2YXIga2V5Q291bnRlciA9IDBcclxuICAgIHZhciBhbGxXYXlwb2ludHMgPSB7fVxyXG5cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS93YXlwb2ludCAqL1xyXG4gICAgZnVuY3Rpb24gV2F5cG9pbnQob3B0aW9ucykge1xyXG4gICAgICAgIGlmICghb3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG9wdGlvbnMgcGFzc2VkIHRvIFdheXBvaW50IGNvbnN0cnVjdG9yJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvcHRpb25zLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBlbGVtZW50IG9wdGlvbiBwYXNzZWQgdG8gV2F5cG9pbnQgY29uc3RydWN0b3InKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9wdGlvbnMuaGFuZGxlcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGhhbmRsZXIgb3B0aW9uIHBhc3NlZCB0byBXYXlwb2ludCBjb25zdHJ1Y3RvcicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmtleSA9ICd3YXlwb2ludC0nICsga2V5Q291bnRlclxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFdheXBvaW50LkFkYXB0ZXIuZXh0ZW5kKHt9LCBXYXlwb2ludC5kZWZhdWx0cywgb3B0aW9ucylcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLm9wdGlvbnMuZWxlbWVudFxyXG4gICAgICAgIHRoaXMuYWRhcHRlciA9IG5ldyBXYXlwb2ludC5BZGFwdGVyKHRoaXMuZWxlbWVudClcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gb3B0aW9ucy5oYW5kbGVyXHJcbiAgICAgICAgdGhpcy5heGlzID0gdGhpcy5vcHRpb25zLmhvcml6b250YWwgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnXHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5vcHRpb25zLmVuYWJsZWRcclxuICAgICAgICB0aGlzLnRyaWdnZXJQb2ludCA9IG51bGxcclxuICAgICAgICB0aGlzLmdyb3VwID0gV2F5cG9pbnQuR3JvdXAuZmluZE9yQ3JlYXRlKHtcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5vcHRpb25zLmdyb3VwLFxyXG4gICAgICAgICAgICBheGlzOiB0aGlzLmF4aXNcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IFdheXBvaW50LkNvbnRleHQuZmluZE9yQ3JlYXRlQnlFbGVtZW50KHRoaXMub3B0aW9ucy5jb250ZXh0KVxyXG5cclxuICAgICAgICBpZiAoV2F5cG9pbnQub2Zmc2V0QWxpYXNlc1t0aGlzLm9wdGlvbnMub2Zmc2V0XSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMub2Zmc2V0ID0gV2F5cG9pbnQub2Zmc2V0QWxpYXNlc1t0aGlzLm9wdGlvbnMub2Zmc2V0XVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyb3VwLmFkZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuY29udGV4dC5hZGQodGhpcylcclxuICAgICAgICBhbGxXYXlwb2ludHNbdGhpcy5rZXldID0gdGhpc1xyXG4gICAgICAgIGtleUNvdW50ZXIgKz0gMVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIFdheXBvaW50LnByb3RvdHlwZS5xdWV1ZVRyaWdnZXIgPSBmdW5jdGlvbihkaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmdyb3VwLnF1ZXVlVHJpZ2dlcih0aGlzLCBkaXJlY3Rpb24pXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgV2F5cG9pbnQucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2suYXBwbHkodGhpcywgYXJncylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZGVzdHJveSAqL1xyXG4gICAgV2F5cG9pbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQucmVtb3ZlKHRoaXMpXHJcbiAgICAgICAgdGhpcy5ncm91cC5yZW1vdmUodGhpcylcclxuICAgICAgICBkZWxldGUgYWxsV2F5cG9pbnRzW3RoaXMua2V5XVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2Rpc2FibGUgKi9cclxuICAgIFdheXBvaW50LnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2VuYWJsZSAqL1xyXG4gICAgV2F5cG9pbnQucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5yZWZyZXNoKClcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9uZXh0ICovXHJcbiAgICBXYXlwb2ludC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdyb3VwLm5leHQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9wcmV2aW91cyAqL1xyXG4gICAgV2F5cG9pbnQucHJvdG90eXBlLnByZXZpb3VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXAucHJldmlvdXModGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBXYXlwb2ludC5pbnZva2VBbGwgPSBmdW5jdGlvbihtZXRob2QpIHtcclxuICAgICAgICB2YXIgYWxsV2F5cG9pbnRzQXJyYXkgPSBbXVxyXG4gICAgICAgIGZvciAodmFyIHdheXBvaW50S2V5IGluIGFsbFdheXBvaW50cykge1xyXG4gICAgICAgICAgICBhbGxXYXlwb2ludHNBcnJheS5wdXNoKGFsbFdheXBvaW50c1t3YXlwb2ludEtleV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBlbmQgPSBhbGxXYXlwb2ludHNBcnJheS5sZW5ndGg7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICAgICAgICBhbGxXYXlwb2ludHNBcnJheVtpXVttZXRob2RdKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZGVzdHJveS1hbGwgKi9cclxuICAgIFdheXBvaW50LmRlc3Ryb3lBbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBXYXlwb2ludC5pbnZva2VBbGwoJ2Rlc3Ryb3knKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2Rpc2FibGUtYWxsICovXHJcbiAgICBXYXlwb2ludC5kaXNhYmxlQWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgV2F5cG9pbnQuaW52b2tlQWxsKCdkaXNhYmxlJylcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9lbmFibGUtYWxsICovXHJcbiAgICBXYXlwb2ludC5lbmFibGVBbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBXYXlwb2ludC5Db250ZXh0LnJlZnJlc2hBbGwoKVxyXG4gICAgICAgIGZvciAodmFyIHdheXBvaW50S2V5IGluIGFsbFdheXBvaW50cykge1xyXG4gICAgICAgICAgICBhbGxXYXlwb2ludHNbd2F5cG9pbnRLZXldLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvcmVmcmVzaC1hbGwgKi9cclxuICAgIFdheXBvaW50LnJlZnJlc2hBbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBXYXlwb2ludC5Db250ZXh0LnJlZnJlc2hBbGwoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL3ZpZXdwb3J0LWhlaWdodCAqL1xyXG4gICAgV2F5cG9pbnQudmlld3BvcnRIZWlnaHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS92aWV3cG9ydC13aWR0aCAqL1xyXG4gICAgV2F5cG9pbnQudmlld3BvcnRXaWR0aCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcclxuICAgIH1cclxuXHJcbiAgICBXYXlwb2ludC5hZGFwdGVycyA9IFtdXHJcblxyXG4gICAgV2F5cG9pbnQuZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgY29udGV4dDogd2luZG93LFxyXG4gICAgICAgIGNvbnRpbnVvdXM6IHRydWUsXHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBncm91cDogJ2RlZmF1bHQnLFxyXG4gICAgICAgIGhvcml6b250YWw6IGZhbHNlLFxyXG4gICAgICAgIG9mZnNldDogMFxyXG4gICAgfVxyXG5cclxuICAgIFdheXBvaW50Lm9mZnNldEFsaWFzZXMgPSB7XHJcbiAgICAgICAgJ2JvdHRvbS1pbi12aWV3JzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuaW5uZXJIZWlnaHQoKSAtIHRoaXMuYWRhcHRlci5vdXRlckhlaWdodCgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAncmlnaHQtaW4tdmlldyc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmlubmVyV2lkdGgoKSAtIHRoaXMuYWRhcHRlci5vdXRlcldpZHRoKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LldheXBvaW50ID0gV2F5cG9pbnRcclxufSgpKTtcclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnXHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lU2hpbShjYWxsYmFjaykge1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleUNvdW50ZXIgPSAwXHJcbiAgICB2YXIgY29udGV4dHMgPSB7fVxyXG4gICAgdmFyIFdheXBvaW50ID0gd2luZG93LldheXBvaW50XHJcbiAgICB2YXIgb2xkV2luZG93TG9hZCA9IHdpbmRvdy5vbmxvYWRcclxuXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvY29udGV4dCAqL1xyXG4gICAgZnVuY3Rpb24gQ29udGV4dChlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxyXG4gICAgICAgIHRoaXMuQWRhcHRlciA9IFdheXBvaW50LkFkYXB0ZXJcclxuICAgICAgICB0aGlzLmFkYXB0ZXIgPSBuZXcgdGhpcy5BZGFwdGVyKGVsZW1lbnQpXHJcbiAgICAgICAgdGhpcy5rZXkgPSAnd2F5cG9pbnQtY29udGV4dC0nICsga2V5Q291bnRlclxyXG4gICAgICAgIHRoaXMuZGlkU2Nyb2xsID0gZmFsc2VcclxuICAgICAgICB0aGlzLmRpZFJlc2l6ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5vbGRTY3JvbGwgPSB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMuYWRhcHRlci5zY3JvbGxMZWZ0KCksXHJcbiAgICAgICAgICAgIHk6IHRoaXMuYWRhcHRlci5zY3JvbGxUb3AoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndheXBvaW50cyA9IHtcclxuICAgICAgICAgICAgdmVydGljYWw6IHt9LFxyXG4gICAgICAgICAgICBob3Jpem9udGFsOiB7fVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxlbWVudC53YXlwb2ludENvbnRleHRLZXkgPSB0aGlzLmtleVxyXG4gICAgICAgIGNvbnRleHRzW2VsZW1lbnQud2F5cG9pbnRDb250ZXh0S2V5XSA9IHRoaXNcclxuICAgICAgICBrZXlDb3VudGVyICs9IDFcclxuICAgICAgICBpZiAoIVdheXBvaW50LndpbmRvd0NvbnRleHQpIHtcclxuICAgICAgICAgICAgV2F5cG9pbnQud2luZG93Q29udGV4dCA9IHRydWVcclxuICAgICAgICAgICAgV2F5cG9pbnQud2luZG93Q29udGV4dCA9IG5ldyBDb250ZXh0KHdpbmRvdylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlVGhyb3R0bGVkU2Nyb2xsSGFuZGxlcigpXHJcbiAgICAgICAgdGhpcy5jcmVhdGVUaHJvdHRsZWRSZXNpemVIYW5kbGVyKClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbih3YXlwb2ludCkge1xyXG4gICAgICAgIHZhciBheGlzID0gd2F5cG9pbnQub3B0aW9ucy5ob3Jpem9udGFsID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJ1xyXG4gICAgICAgIHRoaXMud2F5cG9pbnRzW2F4aXNdW3dheXBvaW50LmtleV0gPSB3YXlwb2ludFxyXG4gICAgICAgIHRoaXMucmVmcmVzaCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuY2hlY2tFbXB0eSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBob3Jpem9udGFsRW1wdHkgPSB0aGlzLkFkYXB0ZXIuaXNFbXB0eU9iamVjdCh0aGlzLndheXBvaW50cy5ob3Jpem9udGFsKVxyXG4gICAgICAgIHZhciB2ZXJ0aWNhbEVtcHR5ID0gdGhpcy5BZGFwdGVyLmlzRW1wdHlPYmplY3QodGhpcy53YXlwb2ludHMudmVydGljYWwpXHJcbiAgICAgICAgdmFyIGlzV2luZG93ID0gdGhpcy5lbGVtZW50ID09IHRoaXMuZWxlbWVudC53aW5kb3dcclxuICAgICAgICBpZiAoaG9yaXpvbnRhbEVtcHR5ICYmIHZlcnRpY2FsRW1wdHkgJiYgIWlzV2luZG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5vZmYoJy53YXlwb2ludHMnKVxyXG4gICAgICAgICAgICBkZWxldGUgY29udGV4dHNbdGhpcy5rZXldXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmNyZWF0ZVRocm90dGxlZFJlc2l6ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplSGFuZGxlcigpIHtcclxuICAgICAgICAgICAgc2VsZi5oYW5kbGVSZXNpemUoKVxyXG4gICAgICAgICAgICBzZWxmLmRpZFJlc2l6ZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFkYXB0ZXIub24oJ3Jlc2l6ZS53YXlwb2ludHMnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCFzZWxmLmRpZFJlc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kaWRSZXNpemUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBXYXlwb2ludC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzaXplSGFuZGxlcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlVGhyb3R0bGVkU2Nyb2xsSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpc1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxIYW5kbGVyKCkge1xyXG4gICAgICAgICAgICBzZWxmLmhhbmRsZVNjcm9sbCgpXHJcbiAgICAgICAgICAgIHNlbGYuZGlkU2Nyb2xsID0gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWRhcHRlci5vbignc2Nyb2xsLndheXBvaW50cycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYuZGlkU2Nyb2xsIHx8IFdheXBvaW50LmlzVG91Y2gpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZGlkU2Nyb2xsID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgV2F5cG9pbnQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjcm9sbEhhbmRsZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmhhbmRsZVJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFdheXBvaW50LkNvbnRleHQucmVmcmVzaEFsbCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuaGFuZGxlU2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHRyaWdnZXJlZEdyb3VwcyA9IHt9XHJcbiAgICAgICAgdmFyIGF4ZXMgPSB7XHJcbiAgICAgICAgICAgIGhvcml6b250YWw6IHtcclxuICAgICAgICAgICAgICAgIG5ld1Njcm9sbDogdGhpcy5hZGFwdGVyLnNjcm9sbExlZnQoKSxcclxuICAgICAgICAgICAgICAgIG9sZFNjcm9sbDogdGhpcy5vbGRTY3JvbGwueCxcclxuICAgICAgICAgICAgICAgIGZvcndhcmQ6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrd2FyZDogJ2xlZnQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZlcnRpY2FsOiB7XHJcbiAgICAgICAgICAgICAgICBuZXdTY3JvbGw6IHRoaXMuYWRhcHRlci5zY3JvbGxUb3AoKSxcclxuICAgICAgICAgICAgICAgIG9sZFNjcm9sbDogdGhpcy5vbGRTY3JvbGwueSxcclxuICAgICAgICAgICAgICAgIGZvcndhcmQ6ICdkb3duJyxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiAndXAnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGF4aXNLZXkgaW4gYXhlcykge1xyXG4gICAgICAgICAgICB2YXIgYXhpcyA9IGF4ZXNbYXhpc0tleV1cclxuICAgICAgICAgICAgdmFyIGlzRm9yd2FyZCA9IGF4aXMubmV3U2Nyb2xsID4gYXhpcy5vbGRTY3JvbGxcclxuICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGlzRm9yd2FyZCA/IGF4aXMuZm9yd2FyZCA6IGF4aXMuYmFja3dhcmRcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIHdheXBvaW50S2V5IGluIHRoaXMud2F5cG9pbnRzW2F4aXNLZXldKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2F5cG9pbnQgPSB0aGlzLndheXBvaW50c1theGlzS2V5XVt3YXlwb2ludEtleV1cclxuICAgICAgICAgICAgICAgIGlmICh3YXlwb2ludC50cmlnZ2VyUG9pbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHdhc0JlZm9yZVRyaWdnZXJQb2ludCA9IGF4aXMub2xkU2Nyb2xsIDwgd2F5cG9pbnQudHJpZ2dlclBvaW50XHJcbiAgICAgICAgICAgICAgICB2YXIgbm93QWZ0ZXJUcmlnZ2VyUG9pbnQgPSBheGlzLm5ld1Njcm9sbCA+PSB3YXlwb2ludC50cmlnZ2VyUG9pbnRcclxuICAgICAgICAgICAgICAgIHZhciBjcm9zc2VkRm9yd2FyZCA9IHdhc0JlZm9yZVRyaWdnZXJQb2ludCAmJiBub3dBZnRlclRyaWdnZXJQb2ludFxyXG4gICAgICAgICAgICAgICAgdmFyIGNyb3NzZWRCYWNrd2FyZCA9ICF3YXNCZWZvcmVUcmlnZ2VyUG9pbnQgJiYgIW5vd0FmdGVyVHJpZ2dlclBvaW50XHJcbiAgICAgICAgICAgICAgICBpZiAoY3Jvc3NlZEZvcndhcmQgfHwgY3Jvc3NlZEJhY2t3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2F5cG9pbnQucXVldWVUcmlnZ2VyKGRpcmVjdGlvbilcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyZWRHcm91cHNbd2F5cG9pbnQuZ3JvdXAuaWRdID0gd2F5cG9pbnQuZ3JvdXBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgZ3JvdXBLZXkgaW4gdHJpZ2dlcmVkR3JvdXBzKSB7XHJcbiAgICAgICAgICAgIHRyaWdnZXJlZEdyb3Vwc1tncm91cEtleV0uZmx1c2hUcmlnZ2VycygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9sZFNjcm9sbCA9IHtcclxuICAgICAgICAgICAgeDogYXhlcy5ob3Jpem9udGFsLm5ld1Njcm9sbCxcclxuICAgICAgICAgICAgeTogYXhlcy52ZXJ0aWNhbC5uZXdTY3JvbGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuaW5uZXJIZWlnaHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvKmVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgPT0gdGhpcy5lbGVtZW50LndpbmRvdykge1xyXG4gICAgICAgICAgICByZXR1cm4gV2F5cG9pbnQudmlld3BvcnRIZWlnaHQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKmVzbGludC1lbmFibGUgZXFlcWVxICovXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5pbm5lckhlaWdodCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24od2F5cG9pbnQpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy53YXlwb2ludHNbd2F5cG9pbnQuYXhpc11bd2F5cG9pbnQua2V5XVxyXG4gICAgICAgIHRoaXMuY2hlY2tFbXB0eSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuaW5uZXJXaWR0aCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8qZXNsaW50LWRpc2FibGUgZXFlcWVxICovXHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCA9PSB0aGlzLmVsZW1lbnQud2luZG93KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBXYXlwb2ludC52aWV3cG9ydFdpZHRoKClcclxuICAgICAgICB9XHJcbiAgICAgICAgLyplc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuaW5uZXJXaWR0aCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvY29udGV4dC1kZXN0cm95ICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGFsbFdheXBvaW50cyA9IFtdXHJcbiAgICAgICAgZm9yICh2YXIgYXhpcyBpbiB0aGlzLndheXBvaW50cykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB3YXlwb2ludEtleSBpbiB0aGlzLndheXBvaW50c1theGlzXSkge1xyXG4gICAgICAgICAgICAgICAgYWxsV2F5cG9pbnRzLnB1c2godGhpcy53YXlwb2ludHNbYXhpc11bd2F5cG9pbnRLZXldKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBlbmQgPSBhbGxXYXlwb2ludHMubGVuZ3RoOyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgICAgICAgYWxsV2F5cG9pbnRzW2ldLmRlc3Ryb3koKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9jb250ZXh0LXJlZnJlc2ggKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvKmVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xyXG4gICAgICAgIHZhciBpc1dpbmRvdyA9IHRoaXMuZWxlbWVudCA9PSB0aGlzLmVsZW1lbnQud2luZG93XHJcbiAgICAgICAgLyplc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xyXG4gICAgICAgIHZhciBjb250ZXh0T2Zmc2V0ID0gaXNXaW5kb3cgPyB1bmRlZmluZWQgOiB0aGlzLmFkYXB0ZXIub2Zmc2V0KClcclxuICAgICAgICB2YXIgdHJpZ2dlcmVkR3JvdXBzID0ge31cclxuICAgICAgICB2YXIgYXhlc1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbCgpXHJcbiAgICAgICAgYXhlcyA9IHtcclxuICAgICAgICAgICAgaG9yaXpvbnRhbDoge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE9mZnNldDogaXNXaW5kb3cgPyAwIDogY29udGV4dE9mZnNldC5sZWZ0LFxyXG4gICAgICAgICAgICAgICAgY29udGV4dFNjcm9sbDogaXNXaW5kb3cgPyAwIDogdGhpcy5vbGRTY3JvbGwueCxcclxuICAgICAgICAgICAgICAgIGNvbnRleHREaW1lbnNpb246IHRoaXMuaW5uZXJXaWR0aCgpLFxyXG4gICAgICAgICAgICAgICAgb2xkU2Nyb2xsOiB0aGlzLm9sZFNjcm9sbC54LFxyXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRQcm9wOiAnbGVmdCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmVydGljYWw6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRPZmZzZXQ6IGlzV2luZG93ID8gMCA6IGNvbnRleHRPZmZzZXQudG9wLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dFNjcm9sbDogaXNXaW5kb3cgPyAwIDogdGhpcy5vbGRTY3JvbGwueSxcclxuICAgICAgICAgICAgICAgIGNvbnRleHREaW1lbnNpb246IHRoaXMuaW5uZXJIZWlnaHQoKSxcclxuICAgICAgICAgICAgICAgIG9sZFNjcm9sbDogdGhpcy5vbGRTY3JvbGwueSxcclxuICAgICAgICAgICAgICAgIGZvcndhcmQ6ICdkb3duJyxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiAndXAnLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0UHJvcDogJ3RvcCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgYXhpc0tleSBpbiBheGVzKSB7XHJcbiAgICAgICAgICAgIHZhciBheGlzID0gYXhlc1theGlzS2V5XVxyXG4gICAgICAgICAgICBmb3IgKHZhciB3YXlwb2ludEtleSBpbiB0aGlzLndheXBvaW50c1theGlzS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdheXBvaW50ID0gdGhpcy53YXlwb2ludHNbYXhpc0tleV1bd2F5cG9pbnRLZXldXHJcbiAgICAgICAgICAgICAgICB2YXIgYWRqdXN0bWVudCA9IHdheXBvaW50Lm9wdGlvbnMub2Zmc2V0XHJcbiAgICAgICAgICAgICAgICB2YXIgb2xkVHJpZ2dlclBvaW50ID0gd2F5cG9pbnQudHJpZ2dlclBvaW50XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudE9mZnNldCA9IDBcclxuICAgICAgICAgICAgICAgIHZhciBmcmVzaFdheXBvaW50ID0gb2xkVHJpZ2dlclBvaW50ID09IG51bGxcclxuICAgICAgICAgICAgICAgIHZhciBjb250ZXh0TW9kaWZpZXIsIHdhc0JlZm9yZVNjcm9sbCwgbm93QWZ0ZXJTY3JvbGxcclxuICAgICAgICAgICAgICAgIHZhciB0cmlnZ2VyZWRCYWNrd2FyZCwgdHJpZ2dlcmVkRm9yd2FyZFxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh3YXlwb2ludC5lbGVtZW50ICE9PSB3YXlwb2ludC5lbGVtZW50LndpbmRvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPZmZzZXQgPSB3YXlwb2ludC5hZGFwdGVyLm9mZnNldCgpW2F4aXMub2Zmc2V0UHJvcF1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFkanVzdG1lbnQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3RtZW50ID0gYWRqdXN0bWVudC5hcHBseSh3YXlwb2ludClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFkanVzdG1lbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0bWVudCA9IHBhcnNlRmxvYXQoYWRqdXN0bWVudClcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2F5cG9pbnQub3B0aW9ucy5vZmZzZXQuaW5kZXhPZignJScpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRqdXN0bWVudCA9IE1hdGguY2VpbChheGlzLmNvbnRleHREaW1lbnNpb24gKiBhZGp1c3RtZW50IC8gMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TW9kaWZpZXIgPSBheGlzLmNvbnRleHRTY3JvbGwgLSBheGlzLmNvbnRleHRPZmZzZXRcclxuICAgICAgICAgICAgICAgIHdheXBvaW50LnRyaWdnZXJQb2ludCA9IE1hdGguZmxvb3IoZWxlbWVudE9mZnNldCArIGNvbnRleHRNb2RpZmllciAtIGFkanVzdG1lbnQpXHJcbiAgICAgICAgICAgICAgICB3YXNCZWZvcmVTY3JvbGwgPSBvbGRUcmlnZ2VyUG9pbnQgPCBheGlzLm9sZFNjcm9sbFxyXG4gICAgICAgICAgICAgICAgbm93QWZ0ZXJTY3JvbGwgPSB3YXlwb2ludC50cmlnZ2VyUG9pbnQgPj0gYXhpcy5vbGRTY3JvbGxcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJlZEJhY2t3YXJkID0gd2FzQmVmb3JlU2Nyb2xsICYmIG5vd0FmdGVyU2Nyb2xsXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyZWRGb3J3YXJkID0gIXdhc0JlZm9yZVNjcm9sbCAmJiAhbm93QWZ0ZXJTY3JvbGxcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWZyZXNoV2F5cG9pbnQgJiYgdHJpZ2dlcmVkQmFja3dhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YXlwb2ludC5xdWV1ZVRyaWdnZXIoYXhpcy5iYWNrd2FyZClcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyZWRHcm91cHNbd2F5cG9pbnQuZ3JvdXAuaWRdID0gd2F5cG9pbnQuZ3JvdXBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWZyZXNoV2F5cG9pbnQgJiYgdHJpZ2dlcmVkRm9yd2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdheXBvaW50LnF1ZXVlVHJpZ2dlcihheGlzLmZvcndhcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcmVkR3JvdXBzW3dheXBvaW50Lmdyb3VwLmlkXSA9IHdheXBvaW50Lmdyb3VwXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZyZXNoV2F5cG9pbnQgJiYgYXhpcy5vbGRTY3JvbGwgPj0gd2F5cG9pbnQudHJpZ2dlclBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2F5cG9pbnQucXVldWVUcmlnZ2VyKGF4aXMuZm9yd2FyZClcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyZWRHcm91cHNbd2F5cG9pbnQuZ3JvdXAuaWRdID0gd2F5cG9pbnQuZ3JvdXBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgV2F5cG9pbnQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBncm91cEtleSBpbiB0cmlnZ2VyZWRHcm91cHMpIHtcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJlZEdyb3Vwc1tncm91cEtleV0uZmx1c2hUcmlnZ2VycygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQuZmluZE9yQ3JlYXRlQnlFbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBDb250ZXh0LmZpbmRCeUVsZW1lbnQoZWxlbWVudCkgfHwgbmV3IENvbnRleHQoZWxlbWVudClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnJlZnJlc2hBbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3IgKHZhciBjb250ZXh0SWQgaW4gY29udGV4dHMpIHtcclxuICAgICAgICAgICAgY29udGV4dHNbY29udGV4dElkXS5yZWZyZXNoKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvY29udGV4dC1maW5kLWJ5LWVsZW1lbnQgKi9cclxuICAgIENvbnRleHQuZmluZEJ5RWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gY29udGV4dHNbZWxlbWVudC53YXlwb2ludENvbnRleHRLZXldXHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChvbGRXaW5kb3dMb2FkKSB7XHJcbiAgICAgICAgICAgIG9sZFdpbmRvd0xvYWQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBDb250ZXh0LnJlZnJlc2hBbGwoKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBXYXlwb2ludC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciByZXF1ZXN0Rm4gPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVTaGltXHJcbiAgICAgICAgcmVxdWVzdEZuLmNhbGwod2luZG93LCBjYWxsYmFjaylcclxuICAgIH1cclxuICAgIFdheXBvaW50LkNvbnRleHQgPSBDb250ZXh0XHJcbn0oKSk7XHJcbihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0J1xyXG5cclxuICAgIGZ1bmN0aW9uIGJ5VHJpZ2dlclBvaW50KGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYS50cmlnZ2VyUG9pbnQgLSBiLnRyaWdnZXJQb2ludFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJ5UmV2ZXJzZVRyaWdnZXJQb2ludChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGIudHJpZ2dlclBvaW50IC0gYS50cmlnZ2VyUG9pbnRcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ3JvdXBzID0ge1xyXG4gICAgICAgIHZlcnRpY2FsOiB7fSxcclxuICAgICAgICBob3Jpem9udGFsOiB7fVxyXG4gICAgfVxyXG4gICAgdmFyIFdheXBvaW50ID0gd2luZG93LldheXBvaW50XHJcblxyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2dyb3VwICovXHJcbiAgICBmdW5jdGlvbiBHcm91cChvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lXHJcbiAgICAgICAgdGhpcy5heGlzID0gb3B0aW9ucy5heGlzXHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMubmFtZSArICctJyArIHRoaXMuYXhpc1xyXG4gICAgICAgIHRoaXMud2F5cG9pbnRzID0gW11cclxuICAgICAgICB0aGlzLmNsZWFyVHJpZ2dlclF1ZXVlcygpXHJcbiAgICAgICAgZ3JvdXBzW3RoaXMuYXhpc11bdGhpcy5uYW1lXSA9IHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24od2F5cG9pbnQpIHtcclxuICAgICAgICB0aGlzLndheXBvaW50cy5wdXNoKHdheXBvaW50KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5jbGVhclRyaWdnZXJRdWV1ZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXJRdWV1ZXMgPSB7XHJcbiAgICAgICAgICAgIHVwOiBbXSxcclxuICAgICAgICAgICAgZG93bjogW10sXHJcbiAgICAgICAgICAgIGxlZnQ6IFtdLFxyXG4gICAgICAgICAgICByaWdodDogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLmZsdXNoVHJpZ2dlcnMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3IgKHZhciBkaXJlY3Rpb24gaW4gdGhpcy50cmlnZ2VyUXVldWVzKSB7XHJcbiAgICAgICAgICAgIHZhciB3YXlwb2ludHMgPSB0aGlzLnRyaWdnZXJRdWV1ZXNbZGlyZWN0aW9uXVxyXG4gICAgICAgICAgICB2YXIgcmV2ZXJzZSA9IGRpcmVjdGlvbiA9PT0gJ3VwJyB8fCBkaXJlY3Rpb24gPT09ICdsZWZ0J1xyXG4gICAgICAgICAgICB3YXlwb2ludHMuc29ydChyZXZlcnNlID8gYnlSZXZlcnNlVHJpZ2dlclBvaW50IDogYnlUcmlnZ2VyUG9pbnQpXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBlbmQgPSB3YXlwb2ludHMubGVuZ3RoOyBpIDwgZW5kOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3YXlwb2ludCA9IHdheXBvaW50c1tpXVxyXG4gICAgICAgICAgICAgICAgaWYgKHdheXBvaW50Lm9wdGlvbnMuY29udGludW91cyB8fCBpID09PSB3YXlwb2ludHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdheXBvaW50LnRyaWdnZXIoW2RpcmVjdGlvbl0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbGVhclRyaWdnZXJRdWV1ZXMoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24od2F5cG9pbnQpIHtcclxuICAgICAgICB0aGlzLndheXBvaW50cy5zb3J0KGJ5VHJpZ2dlclBvaW50KVxyXG4gICAgICAgIHZhciBpbmRleCA9IFdheXBvaW50LkFkYXB0ZXIuaW5BcnJheSh3YXlwb2ludCwgdGhpcy53YXlwb2ludHMpXHJcbiAgICAgICAgdmFyIGlzTGFzdCA9IGluZGV4ID09PSB0aGlzLndheXBvaW50cy5sZW5ndGggLSAxXHJcbiAgICAgICAgcmV0dXJuIGlzTGFzdCA/IG51bGwgOiB0aGlzLndheXBvaW50c1tpbmRleCArIDFdXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLnByZXZpb3VzID0gZnVuY3Rpb24od2F5cG9pbnQpIHtcclxuICAgICAgICB0aGlzLndheXBvaW50cy5zb3J0KGJ5VHJpZ2dlclBvaW50KVxyXG4gICAgICAgIHZhciBpbmRleCA9IFdheXBvaW50LkFkYXB0ZXIuaW5BcnJheSh3YXlwb2ludCwgdGhpcy53YXlwb2ludHMpXHJcbiAgICAgICAgcmV0dXJuIGluZGV4ID8gdGhpcy53YXlwb2ludHNbaW5kZXggLSAxXSA6IG51bGxcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUucXVldWVUcmlnZ2VyID0gZnVuY3Rpb24od2F5cG9pbnQsIGRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlclF1ZXVlc1tkaXJlY3Rpb25dLnB1c2god2F5cG9pbnQpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKHdheXBvaW50KSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gV2F5cG9pbnQuQWRhcHRlci5pbkFycmF5KHdheXBvaW50LCB0aGlzLndheXBvaW50cylcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLndheXBvaW50cy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2ZpcnN0ICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YXlwb2ludHNbMF1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9sYXN0ICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndheXBvaW50c1t0aGlzLndheXBvaW50cy5sZW5ndGggLSAxXVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLmZpbmRPckNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gZ3JvdXBzW29wdGlvbnMuYXhpc11bb3B0aW9ucy5uYW1lXSB8fCBuZXcgR3JvdXAob3B0aW9ucylcclxuICAgIH1cclxuXHJcbiAgICBXYXlwb2ludC5Hcm91cCA9IEdyb3VwXHJcbn0oKSk7XHJcbihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0J1xyXG5cclxuICAgIHZhciBXYXlwb2ludCA9IHdpbmRvdy5XYXlwb2ludFxyXG5cclxuICAgIGZ1bmN0aW9uIGlzV2luZG93KGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudCA9PT0gZWxlbWVudC53aW5kb3dcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRXaW5kb3coZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChpc1dpbmRvdyhlbGVtZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudC5kZWZhdWx0Vmlld1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE5vRnJhbWV3b3JrQWRhcHRlcihlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSB7fVxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUuaW5uZXJIZWlnaHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgaXNXaW4gPSBpc1dpbmRvdyh0aGlzLmVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIGlzV2luID8gdGhpcy5lbGVtZW50LmlubmVySGVpZ2h0IDogdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodFxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUuaW5uZXJXaWR0aCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpc1dpbiA9IGlzV2luZG93KHRoaXMuZWxlbWVudClcclxuICAgICAgICByZXR1cm4gaXNXaW4gPyB0aGlzLmVsZW1lbnQuaW5uZXJXaWR0aCA6IHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aFxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoZWxlbWVudCwgbGlzdGVuZXJzLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBlbmQgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV1cclxuICAgICAgICAgICAgICAgIGlmICghaGFuZGxlciB8fCBoYW5kbGVyID09PSBsaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsaXN0ZW5lcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGV2ZW50UGFydHMgPSBldmVudC5zcGxpdCgnLicpXHJcbiAgICAgICAgdmFyIGV2ZW50VHlwZSA9IGV2ZW50UGFydHNbMF1cclxuICAgICAgICB2YXIgbmFtZXNwYWNlID0gZXZlbnRQYXJ0c1sxXVxyXG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50XHJcblxyXG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdICYmIGV2ZW50VHlwZSkge1xyXG4gICAgICAgICAgICByZW1vdmVMaXN0ZW5lcnMoZWxlbWVudCwgdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdW2V2ZW50VHlwZV0sIGhhbmRsZXIpXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXVtldmVudFR5cGVdID0gW11cclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBucyBpbiB0aGlzLmhhbmRsZXJzKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcnMoZWxlbWVudCwgdGhpcy5oYW5kbGVyc1tuc11bZXZlbnRUeXBlXSB8fCBbXSwgaGFuZGxlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlcnNbbnNdW2V2ZW50VHlwZV0gPSBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lc3BhY2UgJiYgdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHR5cGUgaW4gdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcnMoZWxlbWVudCwgdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdW3R5cGVdLCBoYW5kbGVyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXSA9IHt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIEFkYXB0ZWQgZnJvbSBqUXVlcnkgMS54IG9mZnNldCgpICovXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLm9mZnNldCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcclxuICAgICAgICB2YXIgd2luID0gZ2V0V2luZG93KHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50KVxyXG4gICAgICAgIHZhciByZWN0ID0ge1xyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XHJcbiAgICAgICAgICAgIHJlY3QgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW4ucGFnZVlPZmZzZXQgLSBkb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wLFxyXG4gICAgICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQgLSBkb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgICAgICB2YXIgZXZlbnRQYXJ0cyA9IGV2ZW50LnNwbGl0KCcuJylcclxuICAgICAgICB2YXIgZXZlbnRUeXBlID0gZXZlbnRQYXJ0c1swXVxyXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSBldmVudFBhcnRzWzFdIHx8ICdfX2RlZmF1bHQnXHJcbiAgICAgICAgdmFyIG5zSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV0gPSB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV0gfHwge31cclxuICAgICAgICB2YXIgbnNUeXBlTGlzdCA9IG5zSGFuZGxlcnNbZXZlbnRUeXBlXSA9IG5zSGFuZGxlcnNbZXZlbnRUeXBlXSB8fCBbXVxyXG5cclxuICAgICAgICBuc1R5cGVMaXN0LnB1c2goaGFuZGxlcilcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIpXHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5vdXRlckhlaWdodCA9IGZ1bmN0aW9uKGluY2x1ZGVNYXJnaW4pIHtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGVcclxuXHJcbiAgICAgICAgaWYgKGluY2x1ZGVNYXJnaW4gJiYgIWlzV2luZG93KHRoaXMuZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClcclxuICAgICAgICAgICAgaGVpZ2h0ICs9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUubWFyZ2luVG9wLCAxMClcclxuICAgICAgICAgICAgaGVpZ2h0ICs9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUubWFyZ2luQm90dG9tLCAxMClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBoZWlnaHRcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLm91dGVyV2lkdGggPSBmdW5jdGlvbihpbmNsdWRlTWFyZ2luKSB7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5pbm5lcldpZHRoKClcclxuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZVxyXG5cclxuICAgICAgICBpZiAoaW5jbHVkZU1hcmdpbiAmJiAhaXNXaW5kb3codGhpcy5lbGVtZW50KSkge1xyXG4gICAgICAgICAgICBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVxyXG4gICAgICAgICAgICB3aWR0aCArPSBwYXJzZUludChjb21wdXRlZFN0eWxlLm1hcmdpbkxlZnQsIDEwKVxyXG4gICAgICAgICAgICB3aWR0aCArPSBwYXJzZUludChjb21wdXRlZFN0eWxlLm1hcmdpblJpZ2h0LCAxMClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB3aWR0aFxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUuc2Nyb2xsTGVmdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB3aW4gPSBnZXRXaW5kb3codGhpcy5lbGVtZW50KVxyXG4gICAgICAgIHJldHVybiB3aW4gPyB3aW4ucGFnZVhPZmZzZXQgOiB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdFxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUuc2Nyb2xsVG9wID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHdpbiA9IGdldFdpbmRvdyh0aGlzLmVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIHdpbiA/IHdpbi5wYWdlWU9mZnNldCA6IHRoaXMuZWxlbWVudC5zY3JvbGxUb3BcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIuZXh0ZW5kID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1lcmdlKHRhcmdldCwgb2JqKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IG9ialtrZXldXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMSwgZW5kID0gYXJncy5sZW5ndGg7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICAgICAgICBtZXJnZShhcmdzWzBdLCBhcmdzW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJnc1swXVxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5pbkFycmF5ID0gZnVuY3Rpb24oZWxlbWVudCwgYXJyYXksIGkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkgPT0gbnVsbCA/IC0xIDogYXJyYXkuaW5kZXhPZihlbGVtZW50LCBpKVxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5pc0VtcHR5T2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiAwICovXHJcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBvYmopIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgV2F5cG9pbnQuYWRhcHRlcnMucHVzaCh7XHJcbiAgICAgICAgbmFtZTogJ25vZnJhbWV3b3JrJyxcclxuICAgICAgICBBZGFwdGVyOiBOb0ZyYW1ld29ya0FkYXB0ZXJcclxuICAgIH0pXHJcbiAgICBXYXlwb2ludC5BZGFwdGVyID0gTm9GcmFtZXdvcmtBZGFwdGVyXHJcbn0oKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=