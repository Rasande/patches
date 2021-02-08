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

module.exports = __webpack_require__(/*! D:\xampp\htdocs\patches\wp-content\themes\Patches\src\scripts\script.js */"./src/scripts/script.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9tb2JpbGVNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZHVsZXMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy92ZW5kb3IvYW5pbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdmVuZG9yL25vZnJhbWV3b3JrLndheXBvaW50cy5qcyJdLCJuYW1lcyI6WyJBbmltYXRpb25zIiwib2RkRXZlbkFuaW1hdGlvbiIsIm9kZHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJldmVucyIsImZvckVhY2giLCJlbGVtZW50IiwiV2F5cG9pbnQiLCJoYW5kbGVyIiwiYW5pbWUiLCJ0YXJnZXRzIiwib3BhY2l0eSIsInRyYW5zbGF0ZVkiLCJkZWxheSIsImR1cmF0aW9uIiwiZWFzaW5nIiwiZGVzdHJveSIsIm9mZnNldCIsIk1vYmlsZU1lbnUiLCJoZWFkZXIiLCJxdWVyeVNlbGVjdG9yIiwidG9nZ2xlTWVudSIsIm1lbnUiLCJzdWJtZW51QnRuIiwiaXNNZW51T3BlbiIsImV2ZW50cyIsImVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaWdnZXJNZW51IiwidG9nZ2xlU3ViTWVudSIsImtleVByZXNzIiwid2luZG93IiwiY2hhbmdlSGVhZGVyIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImdldEF0dHJpYnV0ZSIsInRhcmdldE1lbnUiLCJvdGhlck1lbnVzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjbG9zZU1lbnUiLCJvcGVuTWVudSIsImlkIiwibWVudUJ0biIsInNjcm9sbFkiLCJib2R5Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImFkZCIsInNldEF0dHJpYnV0ZSIsImJvZHlTdHlsZSIsInNjcm9sbFRvIiwicGFyc2VJbnQiLCJyZW1vdmUiLCJidG4iLCJwYXJlbnROb2RlIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsIm9uY2UiLCJrZXlDb2RlIiwic2Nyb2xsUG9zIiwiU2VhcmNoIiwic2VhcmNoTW9kYWwiLCJzZWFyY2hCdXR0b24iLCJzZWFyY2hGaWVsZCIsInNlYXJjaE92ZXJsYXkiLCJpc1NlYXJjaE9wZW4iLCJ0b2dnbGVNb2RhbCIsImNsb3NlTW9kYWwiLCJvcGVuTW9kYWwiLCJ2YWx1ZSIsImZvY3VzIiwicmFzYW5kZURvbVJlYWR5IiwiZm4iLCJyZWFkeVN0YXRlIiwibW9iaWxlTWVudSIsImFuaW1hdGlvbiIsInNlYXJjaCIsImRlZmF1bHRJbnN0YW5jZVNldHRpbmdzIiwidXBkYXRlIiwiYmVnaW4iLCJsb29wQmVnaW4iLCJjaGFuZ2VCZWdpbiIsImNoYW5nZSIsImNoYW5nZUNvbXBsZXRlIiwibG9vcENvbXBsZXRlIiwiY29tcGxldGUiLCJsb29wIiwiZGlyZWN0aW9uIiwiYXV0b3BsYXkiLCJ0aW1lbGluZU9mZnNldCIsImRlZmF1bHRUd2VlblNldHRpbmdzIiwiZW5kRGVsYXkiLCJyb3VuZCIsInZhbGlkVHJhbnNmb3JtcyIsImNhY2hlIiwiQ1NTIiwic3ByaW5ncyIsIm1pbk1heCIsInZhbCIsIm1pbiIsIm1heCIsIk1hdGgiLCJzdHJpbmdDb250YWlucyIsInN0ciIsInRleHQiLCJpbmRleE9mIiwiYXBwbHlBcmd1bWVudHMiLCJmdW5jIiwiYXJncyIsImFwcGx5IiwiaXMiLCJhcnIiLCJhIiwiQXJyYXkiLCJpc0FycmF5Iiwib2JqIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwicHRoIiwiaGFzT3duUHJvcGVydHkiLCJzdmciLCJTVkdFbGVtZW50IiwiaW5wIiwiSFRNTElucHV0RWxlbWVudCIsImRvbSIsIm5vZGVUeXBlIiwiZm5jIiwidW5kIiwibmlsIiwiaGV4IiwidGVzdCIsInJnYiIsImhzbCIsImNvbCIsImtleSIsInBhcnNlRWFzaW5nUGFyYW1ldGVycyIsInN0cmluZyIsIm1hdGNoIiwiZXhlYyIsInNwbGl0IiwibWFwIiwicCIsInBhcnNlRmxvYXQiLCJzcHJpbmciLCJwYXJhbXMiLCJtYXNzIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsInZlbG9jaXR5IiwidzAiLCJzcXJ0IiwiemV0YSIsIndkIiwiYiIsInNvbHZlciIsInQiLCJwcm9ncmVzcyIsImV4cCIsImNvcyIsInNpbiIsImdldER1cmF0aW9uIiwiY2FjaGVkIiwiZnJhbWUiLCJlbGFwc2VkIiwicmVzdCIsInN0ZXBzIiwiY2VpbCIsImJlemllciIsImtTcGxpbmVUYWJsZVNpemUiLCJrU2FtcGxlU3RlcFNpemUiLCJBIiwiYUExIiwiYUEyIiwiQiIsIkMiLCJjYWxjQmV6aWVyIiwiYVQiLCJnZXRTbG9wZSIsImJpbmFyeVN1YmRpdmlkZSIsImFYIiwiYUEiLCJhQiIsIm1YMSIsIm1YMiIsImN1cnJlbnRYIiwiY3VycmVudFQiLCJpIiwiYWJzIiwibmV3dG9uUmFwaHNvbkl0ZXJhdGUiLCJhR3Vlc3NUIiwiY3VycmVudFNsb3BlIiwibVkxIiwibVkyIiwic2FtcGxlVmFsdWVzIiwiRmxvYXQzMkFycmF5IiwiZ2V0VEZvclgiLCJpbnRlcnZhbFN0YXJ0IiwiY3VycmVudFNhbXBsZSIsImxhc3RTYW1wbGUiLCJkaXN0IiwiZ3Vlc3NGb3JUIiwiaW5pdGlhbFNsb3BlIiwieCIsInBlbm5lciIsImVhc2VzIiwibGluZWFyIiwiZnVuY3Rpb25FYXNpbmdzIiwiU2luZSIsIlBJIiwiQ2lyYyIsIkJhY2siLCJCb3VuY2UiLCJwb3cyIiwicG93IiwiRWxhc3RpYyIsImFtcGxpdHVkZSIsInBlcmlvZCIsImFzaW4iLCJiYXNlRWFzaW5ncyIsIm5hbWUiLCJrZXlzIiwiZWFzZUluIiwicGFyc2VFYXNpbmdzIiwiZWFzZSIsInNlbGVjdFN0cmluZyIsIm5vZGVzIiwiZmlsdGVyQXJyYXkiLCJjYWxsYmFjayIsImxlbiIsImxlbmd0aCIsInRoaXNBcmciLCJhcmd1bWVudHMiLCJyZXN1bHQiLCJwdXNoIiwiZmxhdHRlbkFycmF5IiwicmVkdWNlIiwiY29uY2F0IiwidG9BcnJheSIsIm8iLCJOb2RlTGlzdCIsIkhUTUxDb2xsZWN0aW9uIiwic2xpY2UiLCJhcnJheUNvbnRhaW5zIiwic29tZSIsImNsb25lT2JqZWN0IiwiY2xvbmUiLCJyZXBsYWNlT2JqZWN0UHJvcHMiLCJvMSIsIm8yIiwibWVyZ2VPYmplY3RzIiwicmdiVG9SZ2JhIiwicmdiVmFsdWUiLCJoZXhUb1JnYmEiLCJoZXhWYWx1ZSIsInJneCIsInJlcGxhY2UiLCJtIiwiciIsImciLCJoc2xUb1JnYmEiLCJoc2xWYWx1ZSIsImgiLCJzIiwibCIsImh1ZTJyZ2IiLCJxIiwiY29sb3JUb1JnYiIsImdldFVuaXQiLCJnZXRUcmFuc2Zvcm1Vbml0IiwicHJvcE5hbWUiLCJnZXRGdW5jdGlvblZhbHVlIiwiYW5pbWF0YWJsZSIsInRvdGFsIiwicHJvcCIsImNvbnZlcnRQeFRvVW5pdCIsInVuaXQiLCJ2YWx1ZVVuaXQiLCJiYXNlbGluZSIsInRlbXBFbCIsImNyZWF0ZUVsZW1lbnQiLCJ0YWdOYW1lIiwicGFyZW50RWwiLCJhcHBlbmRDaGlsZCIsIndpZHRoIiwiZmFjdG9yIiwib2Zmc2V0V2lkdGgiLCJyZW1vdmVDaGlsZCIsImNvbnZlcnRlZFVuaXQiLCJnZXRDU1NWYWx1ZSIsInVwcGVyY2FzZVByb3BOYW1lIiwidG9Mb3dlckNhc2UiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImdldEFuaW1hdGlvblR5cGUiLCJnZXRFbGVtZW50VHJhbnNmb3JtcyIsInRyYW5zZm9ybSIsInJlZyIsInRyYW5zZm9ybXMiLCJNYXAiLCJzZXQiLCJnZXRUcmFuc2Zvcm1WYWx1ZSIsImRlZmF1bHRWYWwiLCJnZXQiLCJsaXN0IiwiZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZSIsImdldFJlbGF0aXZlVmFsdWUiLCJ0byIsImZyb20iLCJvcGVyYXRvciIsInUiLCJ5IiwidmFsaWRhdGVWYWx1ZSIsIm9yaWdpbmFsVW5pdCIsInVuaXRMZXNzIiwic3Vic3RyIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZ2V0Q2lyY2xlTGVuZ3RoIiwiZ2V0UmVjdExlbmd0aCIsImdldExpbmVMZW5ndGgiLCJnZXRQb2x5bGluZUxlbmd0aCIsInBvaW50cyIsInRvdGFsTGVuZ3RoIiwicHJldmlvdXNQb3MiLCJudW1iZXJPZkl0ZW1zIiwiY3VycmVudFBvcyIsImdldEl0ZW0iLCJnZXRQb2x5Z29uTGVuZ3RoIiwiZ2V0VG90YWxMZW5ndGgiLCJzZXREYXNob2Zmc2V0IiwicGF0aExlbmd0aCIsImdldFBhcmVudFN2Z0VsIiwiZ2V0UGFyZW50U3ZnIiwicGF0aEVsIiwic3ZnRGF0YSIsInBhcmVudFN2Z0VsIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInZpZXdCb3hBdHRyIiwidmlld0JveCIsInciLCJ2VyIsInZIIiwiZ2V0UGF0aCIsInBhdGgiLCJwZXJjZW50IiwicHJvcGVydHkiLCJnZXRQYXRoUHJvZ3Jlc3MiLCJpc1BhdGhUYXJnZXRJbnNpZGVTVkciLCJwb2ludCIsImdldFBvaW50QXRMZW5ndGgiLCJwMCIsInNjYWxlWCIsInNjYWxlWSIsImF0YW4yIiwiZGVjb21wb3NlVmFsdWUiLCJvcmlnaW5hbCIsIm51bWJlcnMiLCJOdW1iZXIiLCJzdHJpbmdzIiwicGFyc2VUYXJnZXRzIiwidGFyZ2V0c0FycmF5IiwiaXRlbSIsInBvcyIsInNlbGYiLCJnZXRBbmltYXRhYmxlcyIsInBhcnNlZCIsIm5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zIiwidHdlZW5TZXR0aW5ncyIsInNldHRpbmdzIiwiaXNGcm9tVG8iLCJwcm9wQXJyYXkiLCJ2IiwiayIsImZsYXR0ZW5LZXlmcmFtZXMiLCJrZXlmcmFtZXMiLCJwcm9wZXJ0eU5hbWVzIiwicHJvcGVydGllcyIsIm5ld0tleSIsImdldFByb3BlcnRpZXMiLCJ0d2VlbnMiLCJub3JtYWxpemVUd2VlblZhbHVlcyIsInR3ZWVuIiwibm9ybWFsaXplVHdlZW5zIiwicHJldmlvdXNUd2VlbiIsInR3ZWVuVmFsdWUiLCJ0b1VuaXQiLCJvcmlnaW5hbFZhbHVlIiwicHJldmlvdXNWYWx1ZSIsImZyb21Vbml0Iiwic3RhcnQiLCJlbmQiLCJpc1BhdGgiLCJpc0NvbG9yIiwic2V0UHJvZ3Jlc3NWYWx1ZSIsImNzcyIsImF0dHJpYnV0ZSIsIm9iamVjdCIsIm1hbnVhbCIsImxhc3QiLCJzZXRUYXJnZXRzVmFsdWUiLCJhbmltYXRhYmxlcyIsImFuaW1UeXBlIiwiY3JlYXRlQW5pbWF0aW9uIiwibGFzdFR3ZWVuIiwidHlwZSIsImdldEFuaW1hdGlvbnMiLCJnZXRJbnN0YW5jZVRpbWluZ3MiLCJhbmltYXRpb25zIiwiYW5pbUxlbmd0aCIsImdldFRsT2Zmc2V0IiwiYW5pbSIsInRpbWluZ3MiLCJpbnN0YW5jZUlEIiwiY3JlYXRlTmV3SW5zdGFuY2UiLCJpbnN0YW5jZVNldHRpbmdzIiwiY2hpbGRyZW4iLCJhY3RpdmVJbnN0YW5jZXMiLCJlbmdpbmUiLCJyYWYiLCJwbGF5IiwiaXNEb2N1bWVudEhpZGRlbiIsInN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdGVwIiwiYWN0aXZlSW5zdGFuY2VzTGVuZ3RoIiwiYWN0aXZlSW5zdGFuY2UiLCJwYXVzZWQiLCJ0aWNrIiwic3BsaWNlIiwidW5kZWZpbmVkIiwiaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaW5zdGFuY2UiLCJfb25Eb2N1bWVudFZpc2liaWxpdHkiLCJoaWRkZW4iLCJzdGFydFRpbWUiLCJsYXN0VGltZSIsIm5vdyIsImNoaWxkcmVuTGVuZ3RoIiwicmVzb2x2ZSIsIm1ha2VQcm9taXNlIiwicHJvbWlzZSIsIlByb21pc2UiLCJfcmVzb2x2ZSIsImZpbmlzaGVkIiwidG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24iLCJyZXZlcnNlZCIsImNoaWxkIiwiYWRqdXN0VGltZSIsInRpbWUiLCJyZXNldFRpbWUiLCJjdXJyZW50VGltZSIsInNwZWVkIiwic2Vla0NoaWxkIiwic2VlayIsInN5bmNJbnN0YW5jZUNoaWxkcmVuIiwicmV2ZXJzZVBsYXliYWNrIiwiaSQxIiwic2V0QW5pbWF0aW9uc1Byb2dyZXNzIiwiaW5zVGltZSIsImFuaW1hdGlvbnNMZW5ndGgiLCJ0d2Vlbkxlbmd0aCIsImVhc2VkIiwiaXNOYU4iLCJ0b051bWJlcnNMZW5ndGgiLCJuIiwidG9OdW1iZXIiLCJmcm9tTnVtYmVyIiwic3RyaW5nc0xlbmd0aCIsIm4kMSIsImN1cnJlbnRWYWx1ZSIsInNldENhbGxiYWNrIiwiY2IiLCJwYXNzVGhyb3VnaCIsImNvdW50SXRlcmF0aW9uIiwicmVtYWluaW5nIiwic2V0SW5zdGFuY2VQcm9ncmVzcyIsImVuZ2luZVRpbWUiLCJpbnNEdXJhdGlvbiIsImluc0RlbGF5IiwiaW5zRW5kRGVsYXkiLCJiZWdhbiIsImxvb3BCZWdhbiIsImNoYW5nZUJlZ2FuIiwiY2hhbmdlQ29tcGxldGVkIiwiY29tcGxldGVkIiwicmVzZXQiLCJwYXVzZSIsInJldmVyc2UiLCJyZXN0YXJ0IiwicmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSIsInJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyIsImMiLCJjaGlsZEFuaW1hdGlvbnMiLCJyZW1vdmVUYXJnZXRzRnJvbUFjdGl2ZUluc3RhbmNlcyIsInN0YWdnZXIiLCJncmlkIiwiYXhpcyIsImZyb21JbmRleCIsImZyb21GaXJzdCIsImZyb21DZW50ZXIiLCJmcm9tTGFzdCIsImlzUmFuZ2UiLCJ2YWwxIiwidmFsMiIsInZhbHVlcyIsIm1heFZhbHVlIiwiaW5kZXgiLCJmcm9tWCIsImZyb21ZIiwiZmxvb3IiLCJ0b1giLCJ0b1kiLCJkaXN0YW5jZVgiLCJkaXN0YW5jZVkiLCJzcGFjaW5nIiwidGltZWxpbmUiLCJ0bCIsImluc3RhbmNlUGFyYW1zIiwidGxJbmRleCIsImlucyIsImluc1BhcmFtcyIsInRsRHVyYXRpb24iLCJ2ZXJzaW9uIiwicnVubmluZyIsImNvbnZlcnRQeCIsInJhbmRvbSIsIm1vZHVsZSIsImV4cG9ydHMiLCJrZXlDb3VudGVyIiwiYWxsV2F5cG9pbnRzIiwib3B0aW9ucyIsIkVycm9yIiwiQWRhcHRlciIsImV4dGVuZCIsImRlZmF1bHRzIiwiYWRhcHRlciIsImhvcml6b250YWwiLCJlbmFibGVkIiwidHJpZ2dlclBvaW50IiwiZ3JvdXAiLCJHcm91cCIsImZpbmRPckNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwiZmluZE9yQ3JlYXRlQnlFbGVtZW50Iiwib2Zmc2V0QWxpYXNlcyIsInF1ZXVlVHJpZ2dlciIsInRyaWdnZXIiLCJkaXNhYmxlIiwiZW5hYmxlIiwicmVmcmVzaCIsIm5leHQiLCJwcmV2aW91cyIsImludm9rZUFsbCIsIm1ldGhvZCIsImFsbFdheXBvaW50c0FycmF5Iiwid2F5cG9pbnRLZXkiLCJkZXN0cm95QWxsIiwiZGlzYWJsZUFsbCIsImVuYWJsZUFsbCIsInJlZnJlc2hBbGwiLCJ2aWV3cG9ydEhlaWdodCIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50Iiwidmlld3BvcnRXaWR0aCIsImNsaWVudFdpZHRoIiwiYWRhcHRlcnMiLCJjb250aW51b3VzIiwib3V0ZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwib3V0ZXJXaWR0aCIsInJlcXVlc3RBbmltYXRpb25GcmFtZVNoaW0iLCJjb250ZXh0cyIsIm9sZFdpbmRvd0xvYWQiLCJvbmxvYWQiLCJkaWRTY3JvbGwiLCJkaWRSZXNpemUiLCJvbGRTY3JvbGwiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwid2F5cG9pbnRzIiwidmVydGljYWwiLCJ3YXlwb2ludENvbnRleHRLZXkiLCJ3aW5kb3dDb250ZXh0IiwiY3JlYXRlVGhyb3R0bGVkU2Nyb2xsSGFuZGxlciIsImNyZWF0ZVRocm90dGxlZFJlc2l6ZUhhbmRsZXIiLCJ3YXlwb2ludCIsImNoZWNrRW1wdHkiLCJob3Jpem9udGFsRW1wdHkiLCJpc0VtcHR5T2JqZWN0IiwidmVydGljYWxFbXB0eSIsImlzV2luZG93Iiwib2ZmIiwicmVzaXplSGFuZGxlciIsImhhbmRsZVJlc2l6ZSIsIm9uIiwic2Nyb2xsSGFuZGxlciIsImhhbmRsZVNjcm9sbCIsImlzVG91Y2giLCJ0cmlnZ2VyZWRHcm91cHMiLCJheGVzIiwibmV3U2Nyb2xsIiwiZm9yd2FyZCIsImJhY2t3YXJkIiwiYXhpc0tleSIsImlzRm9yd2FyZCIsIndhc0JlZm9yZVRyaWdnZXJQb2ludCIsIm5vd0FmdGVyVHJpZ2dlclBvaW50IiwiY3Jvc3NlZEZvcndhcmQiLCJjcm9zc2VkQmFja3dhcmQiLCJncm91cEtleSIsImZsdXNoVHJpZ2dlcnMiLCJjb250ZXh0T2Zmc2V0IiwibGVmdCIsImNvbnRleHRTY3JvbGwiLCJjb250ZXh0RGltZW5zaW9uIiwib2Zmc2V0UHJvcCIsImFkanVzdG1lbnQiLCJvbGRUcmlnZ2VyUG9pbnQiLCJlbGVtZW50T2Zmc2V0IiwiZnJlc2hXYXlwb2ludCIsImNvbnRleHRNb2RpZmllciIsIndhc0JlZm9yZVNjcm9sbCIsIm5vd0FmdGVyU2Nyb2xsIiwidHJpZ2dlcmVkQmFja3dhcmQiLCJ0cmlnZ2VyZWRGb3J3YXJkIiwiZmluZEJ5RWxlbWVudCIsImNvbnRleHRJZCIsInJlcXVlc3RGbiIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJ5VHJpZ2dlclBvaW50IiwiYnlSZXZlcnNlVHJpZ2dlclBvaW50IiwiZ3JvdXBzIiwiY2xlYXJUcmlnZ2VyUXVldWVzIiwidHJpZ2dlclF1ZXVlcyIsInVwIiwiZG93biIsInJpZ2h0Iiwic29ydCIsImluQXJyYXkiLCJpc0xhc3QiLCJmaXJzdCIsImdldFdpbmRvdyIsImRlZmF1bHRWaWV3IiwiTm9GcmFtZXdvcmtBZGFwdGVyIiwiaGFuZGxlcnMiLCJpc1dpbiIsImV2ZW50IiwicmVtb3ZlTGlzdGVuZXJzIiwibGlzdGVuZXJzIiwibGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnRQYXJ0cyIsImV2ZW50VHlwZSIsIm5hbWVzcGFjZSIsIm5zIiwib3duZXJEb2N1bWVudCIsIndpbiIsInBhZ2VZT2Zmc2V0IiwiY2xpZW50VG9wIiwicGFnZVhPZmZzZXQiLCJjbGllbnRMZWZ0IiwibnNIYW5kbGVycyIsIm5zVHlwZUxpc3QiLCJpbmNsdWRlTWFyZ2luIiwiY29tcHV0ZWRTdHlsZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm1lcmdlIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOztJQUNNQSxVO0FBRUYsd0JBQWM7QUFBQTs7QUFDVixTQUFLQyxnQkFBTDtBQUNIOzs7O1dBRUQsNEJBQW1CO0FBQ2YsVUFBTUMsSUFBSSxHQUFHQyxRQUFR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bEIsQ0FBdUI7QUFDbkJkLFFBQUksRUFBRSxhQURhO0FBRW5CNFQsV0FBTyxFQUFFaUg7QUFGVSxHQUF2QjtBQUlBem9CLFVBQVEsQ0FBQ3doQixPQUFULEdBQW1CaUgsa0JBQW5CO0FBQ0gsQ0ExS0EsR0FBRCxDIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBhbmltZSBmcm9tICcuLi92ZW5kb3IvYW5pbWUuanMnXHJcbmltcG9ydCB3YXlwb2ludCBmcm9tICcuLi92ZW5kb3Ivbm9mcmFtZXdvcmsud2F5cG9pbnRzLmpzJ1xyXG5jbGFzcyBBbmltYXRpb25zIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9kZEV2ZW5BbmltYXRpb24oKVxyXG4gICAgfVxyXG5cclxuICAgIG9kZEV2ZW5BbmltYXRpb24oKSB7XHJcbiAgICAgICAgY29uc3Qgb2RkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vZGQnKVxyXG4gICAgICAgIGNvbnN0IGV2ZW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZW4nKVxyXG5cclxuICAgICAgICBldmVucy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbmV3IFdheXBvaW50KHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogWzAsIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiBbMTI1LCAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDE1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ3NwcmluZygxLCA4MCwgMTAsIDApJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAnMTAwJScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgb2Rkcy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbmV3IFdheXBvaW50KHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogWzAsIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiBbMTI1LCAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdzcHJpbmcoMSwgODAsIDEwLCAwKSdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9mZnNldDogJzEwMCUnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25zXHJcbiIsImNsYXNzIE1vYmlsZU1lbnUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKVxyXG4gICAgICAgIHRoaXMudG9nZ2xlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0b2dnbGUtbWVudV0nKVxyXG4gICAgICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1ttZW51LW5hbWVdJylcclxuICAgICAgICB0aGlzLnN1Ym1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3VibWVudS1idG4nKVxyXG4gICAgICAgIHRoaXMuaXNNZW51T3BlbiA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZU1lbnUuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlck1lbnUoZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc3VibWVudUJ0bi5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVTdWJNZW51KGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmtleVByZXNzKGUpKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB0aGlzLmNoYW5nZUhlYWRlcigpKVxyXG4gICAgfVxyXG5cclxuICAgIHRyaWdnZXJNZW51KGUpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgndG9nZ2xlLW1lbnUnKVxyXG4gICAgICAgIGxldCB0YXJnZXRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW21lbnUtbmFtZT1cIicgKyB0YXJnZXQgKyAnXCJdJylcclxuICAgICAgICBsZXQgb3RoZXJNZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1ttZW51LW5hbWVdOm5vdChbbWVudS1uYW1lPVwiJyArIHRhcmdldCArICdcIl0pJylcclxuXHJcbiAgICAgICAgaWYgKCF0YXJnZXRNZW51LmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgIC8vIENsb3NlIG90aGVyIG9wZW4gbWVudXMgZmlyc3RcclxuICAgICAgICAgICAgb3RoZXJNZW51cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNZW51KGVsKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5vcGVuTWVudSh0YXJnZXRNZW51KVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUodGFyZ2V0TWVudSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk1lbnUobWVudSkge1xyXG4gICAgICAgIGxldCBpZCA9IG1lbnUuZ2V0QXR0cmlidXRlKCdtZW51LW5hbWUnKVxyXG4gICAgICAgIGxldCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3RvZ2dsZS1tZW51PVwiJyArIGlkICsgJ1wiXScpXHJcblxyXG4gICAgICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWVxyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJ1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gLXNjcm9sbFkgKyAncHgnXHJcblxyXG4gICAgICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkJylcclxuXHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJylcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXHJcblxyXG4gICAgICAgIHRoaXMuaXNNZW51T3BlbiA9IHRydWVcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNZW51KG1lbnUpIHtcclxuICAgICAgICBsZXQgaWQgPSBtZW51LmdldEF0dHJpYnV0ZSgnbWVudS1uYW1lJylcclxuICAgICAgICBsZXQgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0b2dnbGUtbWVudT1cIicgKyBpZCArICdcIl0nKVxyXG5cclxuICAgICAgICBjb25zdCBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcDtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSAnJztcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcGFyc2VJbnQoYm9keVN0eWxlIHx8IDApICogLTEpO1xyXG5cclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKVxyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJylcclxuICAgICAgICBtZW51QnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXHJcblxyXG4gICAgICAgIHRoaXMuaXNNZW51T3BlbiA9IGZhbHNlXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVN1Yk1lbnUoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IGJ0biA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCB0YXJnZXRNZW51ID0gYnRuLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnN1Ym1lbnUnKVxyXG5cclxuICAgICAgICBpZiAoIXRhcmdldE1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxyXG4gICAgICAgICAgICB0YXJnZXRNZW51LmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcclxuICAgICAgICAgICAgdGFyZ2V0TWVudS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGFyZ2V0TWVudS5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgdGFyZ2V0TWVudS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRNZW51LnN0eWxlLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgICAgICB0YXJnZXRNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldE1lbnUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG9uY2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSB0YXJnZXRNZW51LmNsaWVudEhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgIHRhcmdldE1lbnUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldE1lbnUuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG5cclxuICAgICAgICAgICAgdGFyZ2V0TWVudS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldE1lbnUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG9uY2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBrZXlQcmVzcyhlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAyNyAmJiB0aGlzLmlzTWVudU9wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5tZW51LmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUoZWwpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUhlYWRlcigpIHtcclxuICAgICAgICBsZXQgc2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFlcclxuICAgICAgICBpZiAoc2Nyb2xsUG9zID49IDc1IHx8IHRoaXMuaXNNZW51T3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QuYWRkKCdpcy1zY3JvbGxlZCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2Nyb2xsZWQnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudVxyXG4iLCJjbGFzcyBTZWFyY2gge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXJfX3NlYXJjaCcpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX190b2dnbGUnKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19pbnB1dCcpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXktLXNlYXJjaCcpXHJcbiAgICAgICAgdGhpcy5pc1NlYXJjaE9wZW4gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZXZlbnRzKClcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgLy8gT3BlbiBzZWFyY2ggbW9kYWxcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnRvZ2dsZU1vZGFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENsb3NlIHNlYXJjaCBtb2RhbFxyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaE92ZXJsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jbG9zZU1vZGFsKCkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmtleVByZXNzKGUpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVNb2RhbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk1vZGFsKCkge1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKVxyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaEZpZWxkLnZhbHVlID0gJydcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VhcmNoRmllbGQuZm9jdXMoKSwgMzAxKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxyXG4gICAgICAgIHRoaXMuaXNTZWFyY2hPcGVuID0gdHJ1ZVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU1vZGFsKCkge1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcclxuICAgICAgICB0aGlzLmlzU2VhcmNoT3BlbiA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAga2V5UHJlc3MoZSkge1xyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT0gMjcgJiYgdGhpcy5pc1NlYXJjaE9wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiIsImltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vbW9kdWxlcy9tb2JpbGVNZW51J1xyXG5pbXBvcnQgQW5pbWF0aW9ucyBmcm9tICcuL21vZHVsZXMvYW5pbWF0aW9uJ1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vbW9kdWxlcy9zZWFyY2gnXHJcblxyXG4vLyBMb2FkIEpTIHdoZW4gRE9NIGlzIHJlYWR5XHJcbmZ1bmN0aW9uIHJhc2FuZGVEb21SZWFkeShmbikge1xyXG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgICByZXR1cm4gZm4oKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbiwgZmFsc2UpO1xyXG59XHJcblxyXG5yYXNhbmRlRG9tUmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBJbnN0YW50aWF0ZSBhIG5ldyBvYmplY3QgdXNpbmcgbW9kdWxlcyAvIGNsYXNzZXNcclxuICAgIGNvbnN0IG1vYmlsZU1lbnUgPSBuZXcgTW9iaWxlTWVudSgpXHJcbiAgICBjb25zdCBhbmltYXRpb24gPSBuZXcgQW5pbWF0aW9ucygpXHJcbiAgICBjb25zdCBzZWFyY2ggPSBuZXcgU2VhcmNoKClcclxufSk7XHJcbiIsIi8qXHJcbiAqIGFuaW1lLmpzIHYzLjIuMVxyXG4gKiAoYykgMjAyMCBKdWxpYW4gR2FybmllclxyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICogYW5pbWVqcy5jb21cclxuICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4vLyBEZWZhdWx0c1xyXG5cclxudmFyIGRlZmF1bHRJbnN0YW5jZVNldHRpbmdzID0ge1xyXG4gICAgdXBkYXRlOiBudWxsLFxyXG4gICAgYmVnaW46IG51bGwsXHJcbiAgICBsb29wQmVnaW46IG51bGwsXHJcbiAgICBjaGFuZ2VCZWdpbjogbnVsbCxcclxuICAgIGNoYW5nZTogbnVsbCxcclxuICAgIGNoYW5nZUNvbXBsZXRlOiBudWxsLFxyXG4gICAgbG9vcENvbXBsZXRlOiBudWxsLFxyXG4gICAgY29tcGxldGU6IG51bGwsXHJcbiAgICBsb29wOiAxLFxyXG4gICAgZGlyZWN0aW9uOiAnbm9ybWFsJyxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgdGltZWxpbmVPZmZzZXQ6IDBcclxufTtcclxuXHJcbnZhciBkZWZhdWx0VHdlZW5TZXR0aW5ncyA9IHtcclxuICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgZGVsYXk6IDAsXHJcbiAgICBlbmREZWxheTogMCxcclxuICAgIGVhc2luZzogJ2Vhc2VPdXRFbGFzdGljKDEsIC41KScsXHJcbiAgICByb3VuZDogMFxyXG59O1xyXG5cclxudmFyIHZhbGlkVHJhbnNmb3JtcyA9IFsndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJywgJ3RyYW5zbGF0ZVonLCAncm90YXRlJywgJ3JvdGF0ZVgnLCAncm90YXRlWScsICdyb3RhdGVaJywgJ3NjYWxlJywgJ3NjYWxlWCcsICdzY2FsZVknLCAnc2NhbGVaJywgJ3NrZXcnLCAnc2tld1gnLCAnc2tld1knLCAncGVyc3BlY3RpdmUnLCAnbWF0cml4JywgJ21hdHJpeDNkJ107XHJcblxyXG4vLyBDYWNoaW5nXHJcblxyXG52YXIgY2FjaGUgPSB7XHJcbiAgICBDU1M6IHt9LFxyXG4gICAgc3ByaW5nczoge31cclxufTtcclxuXHJcbi8vIFV0aWxzXHJcblxyXG5mdW5jdGlvbiBtaW5NYXgodmFsLCBtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbCwgbWluKSwgbWF4KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RyaW5nQ29udGFpbnMoc3RyLCB0ZXh0KSB7XHJcbiAgICByZXR1cm4gc3RyLmluZGV4T2YodGV4dCkgPiAtMTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlBcmd1bWVudHMoZnVuYywgYXJncykge1xyXG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7XHJcbn1cclxuXHJcbnZhciBpcyA9IHtcclxuICAgIGFycjogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGEpO1xyXG4gICAgfSxcclxuICAgIG9iajogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmdDb250YWlucyhPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSksICdPYmplY3QnKTtcclxuICAgIH0sXHJcbiAgICBwdGg6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gaXMub2JqKGEpICYmIGEuaGFzT3duUHJvcGVydHkoJ3RvdGFsTGVuZ3RoJyk7XHJcbiAgICB9LFxyXG4gICAgc3ZnOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBTVkdFbGVtZW50O1xyXG4gICAgfSxcclxuICAgIGlucDogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBhIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudDtcclxuICAgIH0sXHJcbiAgICBkb206IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gYS5ub2RlVHlwZSB8fCBpcy5zdmcoYSk7XHJcbiAgICB9LFxyXG4gICAgc3RyOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSAnc3RyaW5nJztcclxuICAgIH0sXHJcbiAgICBmbmM6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09ICdmdW5jdGlvbic7XHJcbiAgICB9LFxyXG4gICAgdW5kOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSAndW5kZWZpbmVkJztcclxuICAgIH0sXHJcbiAgICBuaWw6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gaXMudW5kKGEpIHx8IGEgPT09IG51bGw7XHJcbiAgICB9LFxyXG4gICAgaGV4OiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIC8oXiNbMC05QS1GXXs2fSQpfCheI1swLTlBLUZdezN9JCkvaS50ZXN0KGEpO1xyXG4gICAgfSxcclxuICAgIHJnYjogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiAvXnJnYi8udGVzdChhKTtcclxuICAgIH0sXHJcbiAgICBoc2w6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gL15oc2wvLnRlc3QoYSk7XHJcbiAgICB9LFxyXG4gICAgY29sOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIChpcy5oZXgoYSkgfHwgaXMucmdiKGEpIHx8IGlzLmhzbChhKSk7XHJcbiAgICB9LFxyXG4gICAga2V5OiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuICFkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiAhZGVmYXVsdFR3ZWVuU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgYSAhPT0gJ3RhcmdldHMnICYmIGEgIT09ICdrZXlmcmFtZXMnO1xyXG4gICAgfSxcclxufTtcclxuXHJcbi8vIEVhc2luZ3NcclxuXHJcbmZ1bmN0aW9uIHBhcnNlRWFzaW5nUGFyYW1ldGVycyhzdHJpbmcpIHtcclxuICAgIHZhciBtYXRjaCA9IC9cXCgoW14pXSspXFwpLy5leGVjKHN0cmluZyk7XHJcbiAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXS5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbihwKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQocCk7XHJcbiAgICB9KSA6IFtdO1xyXG59XHJcblxyXG4vLyBTcHJpbmcgc29sdmVyIGluc3BpcmVkIGJ5IFdlYmtpdCBDb3B5cmlnaHQgwqkgMjAxNiBBcHBsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIGh0dHBzOi8vd2Via2l0Lm9yZy9kZW1vcy9zcHJpbmcvc3ByaW5nLmpzXHJcblxyXG5mdW5jdGlvbiBzcHJpbmcoc3RyaW5nLCBkdXJhdGlvbikge1xyXG5cclxuICAgIHZhciBwYXJhbXMgPSBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoc3RyaW5nKTtcclxuICAgIHZhciBtYXNzID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMF0pID8gMSA6IHBhcmFtc1swXSwgLjEsIDEwMCk7XHJcbiAgICB2YXIgc3RpZmZuZXNzID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMV0pID8gMTAwIDogcGFyYW1zWzFdLCAuMSwgMTAwKTtcclxuICAgIHZhciBkYW1waW5nID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMl0pID8gMTAgOiBwYXJhbXNbMl0sIC4xLCAxMDApO1xyXG4gICAgdmFyIHZlbG9jaXR5ID0gbWluTWF4KGlzLnVuZChwYXJhbXNbM10pID8gMCA6IHBhcmFtc1szXSwgLjEsIDEwMCk7XHJcbiAgICB2YXIgdzAgPSBNYXRoLnNxcnQoc3RpZmZuZXNzIC8gbWFzcyk7XHJcbiAgICB2YXIgemV0YSA9IGRhbXBpbmcgLyAoMiAqIE1hdGguc3FydChzdGlmZm5lc3MgKiBtYXNzKSk7XHJcbiAgICB2YXIgd2QgPSB6ZXRhIDwgMSA/IHcwICogTWF0aC5zcXJ0KDEgLSB6ZXRhICogemV0YSkgOiAwO1xyXG4gICAgdmFyIGEgPSAxO1xyXG4gICAgdmFyIGIgPSB6ZXRhIDwgMSA/ICh6ZXRhICogdzAgKyAtdmVsb2NpdHkpIC8gd2QgOiAtdmVsb2NpdHkgKyB3MDtcclxuXHJcbiAgICBmdW5jdGlvbiBzb2x2ZXIodCkge1xyXG4gICAgICAgIHZhciBwcm9ncmVzcyA9IGR1cmF0aW9uID8gKGR1cmF0aW9uICogdCkgLyAxMDAwIDogdDtcclxuICAgICAgICBpZiAoemV0YSA8IDEpIHtcclxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSBNYXRoLmV4cCgtcHJvZ3Jlc3MgKiB6ZXRhICogdzApICogKGEgKiBNYXRoLmNvcyh3ZCAqIHByb2dyZXNzKSArIGIgKiBNYXRoLnNpbih3ZCAqIHByb2dyZXNzKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAoYSArIGIgKiBwcm9ncmVzcykgKiBNYXRoLmV4cCgtcHJvZ3Jlc3MgKiB3MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0ID09PSAwIHx8IHQgPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAxIC0gcHJvZ3Jlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RHVyYXRpb24oKSB7XHJcbiAgICAgICAgdmFyIGNhY2hlZCA9IGNhY2hlLnNwcmluZ3Nbc3RyaW5nXTtcclxuICAgICAgICBpZiAoY2FjaGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmcmFtZSA9IDEgLyA2O1xyXG4gICAgICAgIHZhciBlbGFwc2VkID0gMDtcclxuICAgICAgICB2YXIgcmVzdCA9IDA7XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgZWxhcHNlZCArPSBmcmFtZTtcclxuICAgICAgICAgICAgaWYgKHNvbHZlcihlbGFwc2VkKSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3QgPj0gMTYpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3QgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkdXJhdGlvbiA9IGVsYXBzZWQgKiBmcmFtZSAqIDEwMDA7XHJcbiAgICAgICAgY2FjaGUuc3ByaW5nc1tzdHJpbmddID0gZHVyYXRpb247XHJcbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkdXJhdGlvbiA/IHNvbHZlciA6IGdldER1cmF0aW9uO1xyXG5cclxufVxyXG5cclxuLy8gQmFzaWMgc3RlcHMgZWFzaW5nIGltcGxlbWVudGF0aW9uIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2ZyL2RvY3MvV2ViL0NTUy90cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblxyXG5cclxuZnVuY3Rpb24gc3RlcHMoc3RlcHMpIHtcclxuICAgIGlmIChzdGVwcyA9PT0gdm9pZCAwKSBzdGVwcyA9IDEwO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCgobWluTWF4KHQsIDAuMDAwMDAxLCAxKSkgKiBzdGVwcykgKiAoMSAvIHN0ZXBzKTtcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIEJlemllckVhc2luZyBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmdcclxuXHJcbnZhciBiZXppZXIgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyIGtTcGxpbmVUYWJsZVNpemUgPSAxMTtcclxuICAgIHZhciBrU2FtcGxlU3RlcFNpemUgPSAxLjAgLyAoa1NwbGluZVRhYmxlU2l6ZSAtIDEuMCk7XHJcblxyXG4gICAgZnVuY3Rpb24gQShhQTEsIGFBMikge1xyXG4gICAgICAgIHJldHVybiAxLjAgLSAzLjAgKiBhQTIgKyAzLjAgKiBhQTFcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCKGFBMSwgYUEyKSB7XHJcbiAgICAgICAgcmV0dXJuIDMuMCAqIGFBMiAtIDYuMCAqIGFBMVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEMoYUExKSB7XHJcbiAgICAgICAgcmV0dXJuIDMuMCAqIGFBMVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNCZXppZXIoYVQsIGFBMSwgYUEyKSB7XHJcbiAgICAgICAgcmV0dXJuICgoQShhQTEsIGFBMikgKiBhVCArIEIoYUExLCBhQTIpKSAqIGFUICsgQyhhQTEpKSAqIGFUXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U2xvcGUoYVQsIGFBMSwgYUEyKSB7XHJcbiAgICAgICAgcmV0dXJuIDMuMCAqIEEoYUExLCBhQTIpICogYVQgKiBhVCArIDIuMCAqIEIoYUExLCBhQTIpICogYVQgKyBDKGFBMSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBiaW5hcnlTdWJkaXZpZGUoYVgsIGFBLCBhQiwgbVgxLCBtWDIpIHtcclxuICAgICAgICB2YXIgY3VycmVudFgsIGN1cnJlbnRULCBpID0gMDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XHJcbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xyXG4gICAgICAgICAgICAgICAgYUIgPSBjdXJyZW50VDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFBID0gY3VycmVudFQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiAwLjAwMDAwMDEgJiYgKytpIDwgMTApO1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50VDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgYUd1ZXNzVCwgbVgxLCBtWDIpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhR3Vlc3NUO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XHJcbiAgICAgICAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhR3Vlc3NUO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJlemllcihtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcclxuXHJcbiAgICAgICAgaWYgKCEoMCA8PSBtWDEgJiYgbVgxIDw9IDEgJiYgMCA8PSBtWDIgJiYgbVgyIDw9IDEpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNhbXBsZVZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSk7XHJcblxyXG4gICAgICAgIGlmIChtWDEgIT09IG1ZMSB8fCBtWDIgIT09IG1ZMikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtTcGxpbmVUYWJsZVNpemU7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICoga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFRGb3JYKGFYKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDA7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcclxuICAgICAgICAgICAgdmFyIGxhc3RTYW1wbGUgPSBrU3BsaW5lVGFibGVTaXplIC0gMTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9PSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IGtTYW1wbGVTdGVwU2l6ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLS1jdXJyZW50U2FtcGxlO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlICsgMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xyXG4gICAgICAgICAgICB2YXIgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBrU2FtcGxlU3RlcFNpemU7XHJcbiAgICAgICAgICAgIHZhciBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbml0aWFsU2xvcGUgPj0gMC4wMDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JULCBtWDEsIG1YMik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oeCkge1xyXG4gICAgICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh4ID09PSAwIHx8IHggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxjQmV6aWVyKGdldFRGb3JYKHgpLCBtWTEsIG1ZMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYmV6aWVyO1xyXG5cclxufSkoKTtcclxuXHJcbnZhciBwZW5uZXIgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8gQmFzZWQgb24galF1ZXJ5IFVJJ3MgaW1wbGVtZW5hdGlvbiBvZiBlYXNpbmcgZXF1YXRpb25zIGZyb20gUm9iZXJ0IFBlbm5lciAoaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZylcclxuXHJcbiAgICB2YXIgZWFzZXMgPSB7XHJcbiAgICAgICAgbGluZWFyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIGZ1bmN0aW9uRWFzaW5ncyA9IHtcclxuICAgICAgICBTaW5lOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxIC0gTWF0aC5jb3ModCAqIE1hdGguUEkgLyAyKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIENpcmM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNxcnQoMSAtIHQgKiB0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJhY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHQgKiB0ICogKDMgKiB0IC0gMik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBCb3VuY2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvdzIsIGIgPSA0O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHQgPCAoKHBvdzIgPSBNYXRoLnBvdygyLCAtLWIpKSAtIDEpIC8gMTEpIHt9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMSAvIE1hdGgucG93KDQsIDMgLSBiKSAtIDcuNTYyNSAqIE1hdGgucG93KChwb3cyICogMyAtIDIpIC8gMjIgLSB0LCAyKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgRWxhc3RpYzogZnVuY3Rpb24oYW1wbGl0dWRlLCBwZXJpb2QpIHtcclxuICAgICAgICAgICAgaWYgKGFtcGxpdHVkZSA9PT0gdm9pZCAwKSBhbXBsaXR1ZGUgPSAxO1xyXG4gICAgICAgICAgICBpZiAocGVyaW9kID09PSB2b2lkIDApIHBlcmlvZCA9IC41O1xyXG5cclxuICAgICAgICAgICAgdmFyIGEgPSBtaW5NYXgoYW1wbGl0dWRlLCAxLCAxMCk7XHJcbiAgICAgICAgICAgIHZhciBwID0gbWluTWF4KHBlcmlvZCwgLjEsIDIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0ID09PSAwIHx8IHQgPT09IDEpID8gdCA6XHJcbiAgICAgICAgICAgICAgICAgICAgLWEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpICogTWF0aC5zaW4oKCgodCAtIDEpIC0gKHAgLyAoTWF0aC5QSSAqIDIpICogTWF0aC5hc2luKDEgLyBhKSkpICogKE1hdGguUEkgKiAyKSkgLyBwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhc2VFYXNpbmdzID0gWydRdWFkJywgJ0N1YmljJywgJ1F1YXJ0JywgJ1F1aW50JywgJ0V4cG8nXTtcclxuXHJcbiAgICBiYXNlRWFzaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUsIGkpIHtcclxuICAgICAgICBmdW5jdGlvbkVhc2luZ3NbbmFtZV0gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdyh0LCBpICsgMik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKGZ1bmN0aW9uRWFzaW5ncykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgdmFyIGVhc2VJbiA9IGZ1bmN0aW9uRWFzaW5nc1tuYW1lXTtcclxuICAgICAgICBlYXNlc1snZWFzZUluJyArIG5hbWVdID0gZWFzZUluO1xyXG4gICAgICAgIGVhc2VzWydlYXNlT3V0JyArIG5hbWVdID0gZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEgLSBlYXNlSW4oYSwgYikoMSAtIHQpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZWFzZXNbJ2Vhc2VJbk91dCcgKyBuYW1lXSA9IGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0IDwgMC41ID8gZWFzZUluKGEsIGIpKHQgKiAyKSAvIDIgOlxyXG4gICAgICAgICAgICAgICAgICAgIDEgLSBlYXNlSW4oYSwgYikodCAqIC0yICsgMikgLyAyO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZWFzZXNbJ2Vhc2VPdXRJbicgKyBuYW1lXSA9IGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0IDwgMC41ID8gKDEgLSBlYXNlSW4oYSwgYikoMSAtIHQgKiAyKSkgLyAyIDpcclxuICAgICAgICAgICAgICAgICAgICAoZWFzZUluKGEsIGIpKHQgKiAyIC0gMSkgKyAxKSAvIDI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBlYXNlcztcclxuXHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBwYXJzZUVhc2luZ3MoZWFzaW5nLCBkdXJhdGlvbikge1xyXG4gICAgaWYgKGlzLmZuYyhlYXNpbmcpKSB7XHJcbiAgICAgICAgcmV0dXJuIGVhc2luZztcclxuICAgIH1cclxuICAgIHZhciBuYW1lID0gZWFzaW5nLnNwbGl0KCcoJylbMF07XHJcbiAgICB2YXIgZWFzZSA9IHBlbm5lcltuYW1lXTtcclxuICAgIHZhciBhcmdzID0gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKGVhc2luZyk7XHJcbiAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICBjYXNlICdzcHJpbmcnOlxyXG4gICAgICAgICAgICByZXR1cm4gc3ByaW5nKGVhc2luZywgZHVyYXRpb24pO1xyXG4gICAgICAgIGNhc2UgJ2N1YmljQmV6aWVyJzpcclxuICAgICAgICAgICAgcmV0dXJuIGFwcGx5QXJndW1lbnRzKGJlemllciwgYXJncyk7XHJcbiAgICAgICAgY2FzZSAnc3RlcHMnOlxyXG4gICAgICAgICAgICByZXR1cm4gYXBwbHlBcmd1bWVudHMoc3RlcHMsIGFyZ3MpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBhcHBseUFyZ3VtZW50cyhlYXNlLCBhcmdzKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gU3RyaW5nc1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0U3RyaW5nKHN0cikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB2YXIgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHN0cik7XHJcbiAgICAgICAgcmV0dXJuIG5vZGVzO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuLy8gQXJyYXlzXHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJBcnJheShhcnIsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcclxuICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA+PSAyID8gYXJndW1lbnRzWzFdIDogdm9pZCAwO1xyXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIGlmIChpIGluIGFycikge1xyXG4gICAgICAgICAgICB2YXIgdmFsID0gYXJyW2ldO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWwsIGksIGFycikpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmbGF0dGVuQXJyYXkoYXJyKSB7XHJcbiAgICByZXR1cm4gYXJyLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGEuY29uY2F0KGlzLmFycihiKSA/IGZsYXR0ZW5BcnJheShiKSA6IGIpO1xyXG4gICAgfSwgW10pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0FycmF5KG8pIHtcclxuICAgIGlmIChpcy5hcnIobykpIHtcclxuICAgICAgICByZXR1cm4gbztcclxuICAgIH1cclxuICAgIGlmIChpcy5zdHIobykpIHtcclxuICAgICAgICBvID0gc2VsZWN0U3RyaW5nKG8pIHx8IG87XHJcbiAgICB9XHJcbiAgICBpZiAobyBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IG8gaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbikge1xyXG4gICAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKG8pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtvXTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXJyYXlDb250YWlucyhhcnIsIHZhbCkge1xyXG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gYSA9PT0gdmFsO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIE9iamVjdHNcclxuXHJcbmZ1bmN0aW9uIGNsb25lT2JqZWN0KG8pIHtcclxuICAgIHZhciBjbG9uZSA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBvKSB7XHJcbiAgICAgICAgY2xvbmVbcF0gPSBvW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsb25lO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlT2JqZWN0UHJvcHMobzEsIG8yKSB7XHJcbiAgICB2YXIgbyA9IGNsb25lT2JqZWN0KG8xKTtcclxuICAgIGZvciAodmFyIHAgaW4gbzEpIHtcclxuICAgICAgICBvW3BdID0gbzIuaGFzT3duUHJvcGVydHkocCkgPyBvMltwXSA6IG8xW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG87XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lcmdlT2JqZWN0cyhvMSwgbzIpIHtcclxuICAgIHZhciBvID0gY2xvbmVPYmplY3QobzEpO1xyXG4gICAgZm9yICh2YXIgcCBpbiBvMikge1xyXG4gICAgICAgIG9bcF0gPSBpcy51bmQobzFbcF0pID8gbzJbcF0gOiBvMVtwXTtcclxuICAgIH1cclxuICAgIHJldHVybiBvO1xyXG59XHJcblxyXG4vLyBDb2xvcnNcclxuXHJcbmZ1bmN0aW9uIHJnYlRvUmdiYShyZ2JWYWx1ZSkge1xyXG4gICAgdmFyIHJnYiA9IC9yZ2JcXCgoXFxkKyxcXHMqW1xcZF0rLFxccypbXFxkXSspXFwpL2cuZXhlYyhyZ2JWYWx1ZSk7XHJcbiAgICByZXR1cm4gcmdiID8gKFwicmdiYShcIiArIChyZ2JbMV0pICsgXCIsMSlcIikgOiByZ2JWYWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGV4VG9SZ2JhKGhleFZhbHVlKSB7XHJcbiAgICB2YXIgcmd4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcclxuICAgIHZhciBoZXggPSBoZXhWYWx1ZS5yZXBsYWNlKHJneCwgZnVuY3Rpb24obSwgciwgZywgYikge1xyXG4gICAgICAgIHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7XHJcbiAgICB9KTtcclxuICAgIHZhciByZ2IgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcclxuICAgIHZhciByID0gcGFyc2VJbnQocmdiWzFdLCAxNik7XHJcbiAgICB2YXIgZyA9IHBhcnNlSW50KHJnYlsyXSwgMTYpO1xyXG4gICAgdmFyIGIgPSBwYXJzZUludChyZ2JbM10sIDE2KTtcclxuICAgIHJldHVybiAoXCJyZ2JhKFwiICsgciArIFwiLFwiICsgZyArIFwiLFwiICsgYiArIFwiLDEpXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoc2xUb1JnYmEoaHNsVmFsdWUpIHtcclxuICAgIHZhciBoc2wgPSAvaHNsXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklXFwpL2cuZXhlYyhoc2xWYWx1ZSkgfHwgL2hzbGFcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKVxcKS9nLmV4ZWMoaHNsVmFsdWUpO1xyXG4gICAgdmFyIGggPSBwYXJzZUludChoc2xbMV0sIDEwKSAvIDM2MDtcclxuICAgIHZhciBzID0gcGFyc2VJbnQoaHNsWzJdLCAxMCkgLyAxMDA7XHJcbiAgICB2YXIgbCA9IHBhcnNlSW50KGhzbFszXSwgMTApIC8gMTAwO1xyXG4gICAgdmFyIGEgPSBoc2xbNF0gfHwgMTtcclxuXHJcbiAgICBmdW5jdGlvbiBodWUycmdiKHAsIHEsIHQpIHtcclxuICAgICAgICBpZiAodCA8IDApIHtcclxuICAgICAgICAgICAgdCArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodCA+IDEpIHtcclxuICAgICAgICAgICAgdCAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodCA8IDEgLyA2KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodCA8IDEgLyAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodCA8IDIgLyAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwICsgKHEgLSBwKSAqICgyIC8gMyAtIHQpICogNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbiAgICB2YXIgciwgZywgYjtcclxuICAgIGlmIChzID09IDApIHtcclxuICAgICAgICByID0gZyA9IGIgPSBsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XHJcbiAgICAgICAgdmFyIHAgPSAyICogbCAtIHE7XHJcbiAgICAgICAgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEgLyAzKTtcclxuICAgICAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcclxuICAgICAgICBiID0gaHVlMnJnYihwLCBxLCBoIC0gMSAvIDMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcInJnYmEoXCIgKyAociAqIDI1NSkgKyBcIixcIiArIChnICogMjU1KSArIFwiLFwiICsgKGIgKiAyNTUpICsgXCIsXCIgKyBhICsgXCIpXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb2xvclRvUmdiKHZhbCkge1xyXG4gICAgaWYgKGlzLnJnYih2YWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIHJnYlRvUmdiYSh2YWwpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzLmhleCh2YWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIGhleFRvUmdiYSh2YWwpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzLmhzbCh2YWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIGhzbFRvUmdiYSh2YWwpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBVbml0c1xyXG5cclxuZnVuY3Rpb24gZ2V0VW5pdCh2YWwpIHtcclxuICAgIHZhciBzcGxpdCA9IC9bKy1dP1xcZCpcXC4/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPyglfHB4fHB0fGVtfHJlbXxpbnxjbXxtbXxleHxjaHxwY3x2d3x2aHx2bWlufHZtYXh8ZGVnfHJhZHx0dXJuKT8kLy5leGVjKHZhbCk7XHJcbiAgICBpZiAoc3BsaXQpIHtcclxuICAgICAgICByZXR1cm4gc3BsaXRbMV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVVuaXQocHJvcE5hbWUpIHtcclxuICAgIGlmIChzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3RyYW5zbGF0ZScpIHx8IHByb3BOYW1lID09PSAncGVyc3BlY3RpdmUnKSB7XHJcbiAgICAgICAgcmV0dXJuICdweCc7XHJcbiAgICB9XHJcbiAgICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdyb3RhdGUnKSB8fCBzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3NrZXcnKSkge1xyXG4gICAgICAgIHJldHVybiAnZGVnJztcclxuICAgIH1cclxufVxyXG5cclxuLy8gVmFsdWVzXHJcblxyXG5mdW5jdGlvbiBnZXRGdW5jdGlvblZhbHVlKHZhbCwgYW5pbWF0YWJsZSkge1xyXG4gICAgaWYgKCFpcy5mbmModmFsKSkge1xyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsKGFuaW1hdGFibGUudGFyZ2V0LCBhbmltYXRhYmxlLmlkLCBhbmltYXRhYmxlLnRvdGFsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKGVsLCBwcm9wKSB7XHJcbiAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKHByb3ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0UHhUb1VuaXQoZWwsIHZhbHVlLCB1bml0KSB7XHJcbiAgICB2YXIgdmFsdWVVbml0ID0gZ2V0VW5pdCh2YWx1ZSk7XHJcbiAgICBpZiAoYXJyYXlDb250YWlucyhbdW5pdCwgJ2RlZycsICdyYWQnLCAndHVybiddLCB2YWx1ZVVuaXQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdmFyIGNhY2hlZCA9IGNhY2hlLkNTU1t2YWx1ZSArIHVuaXRdO1xyXG4gICAgaWYgKCFpcy51bmQoY2FjaGVkKSkge1xyXG4gICAgICAgIHJldHVybiBjYWNoZWQ7XHJcbiAgICB9XHJcbiAgICB2YXIgYmFzZWxpbmUgPSAxMDA7XHJcbiAgICB2YXIgdGVtcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbC50YWdOYW1lKTtcclxuICAgIHZhciBwYXJlbnRFbCA9IChlbC5wYXJlbnROb2RlICYmIChlbC5wYXJlbnROb2RlICE9PSBkb2N1bWVudCkpID8gZWwucGFyZW50Tm9kZSA6IGRvY3VtZW50LmJvZHk7XHJcbiAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZCh0ZW1wRWwpO1xyXG4gICAgdGVtcEVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIHRlbXBFbC5zdHlsZS53aWR0aCA9IGJhc2VsaW5lICsgdW5pdDtcclxuICAgIHZhciBmYWN0b3IgPSBiYXNlbGluZSAvIHRlbXBFbC5vZmZzZXRXaWR0aDtcclxuICAgIHBhcmVudEVsLnJlbW92ZUNoaWxkKHRlbXBFbCk7XHJcbiAgICB2YXIgY29udmVydGVkVW5pdCA9IGZhY3RvciAqIHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF0gPSBjb252ZXJ0ZWRVbml0O1xyXG4gICAgcmV0dXJuIGNvbnZlcnRlZFVuaXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENTU1ZhbHVlKGVsLCBwcm9wLCB1bml0KSB7XHJcbiAgICBpZiAocHJvcCBpbiBlbC5zdHlsZSkge1xyXG4gICAgICAgIHZhciB1cHBlcmNhc2VQcm9wTmFtZSA9IHByb3AucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB2YXIgdmFsdWUgPSBlbC5zdHlsZVtwcm9wXSB8fCBnZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKHVwcGVyY2FzZVByb3BOYW1lKSB8fCAnMCc7XHJcbiAgICAgICAgcmV0dXJuIHVuaXQgPyBjb252ZXJ0UHhUb1VuaXQoZWwsIHZhbHVlLCB1bml0KSA6IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBbmltYXRpb25UeXBlKGVsLCBwcm9wKSB7XHJcbiAgICBpZiAoaXMuZG9tKGVsKSAmJiAhaXMuaW5wKGVsKSAmJiAoIWlzLm5pbChnZXRBdHRyaWJ1dGUoZWwsIHByb3ApKSB8fCAoaXMuc3ZnKGVsKSAmJiBlbFtwcm9wXSkpKSB7XHJcbiAgICAgICAgcmV0dXJuICdhdHRyaWJ1dGUnO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzLmRvbShlbCkgJiYgYXJyYXlDb250YWlucyh2YWxpZFRyYW5zZm9ybXMsIHByb3ApKSB7XHJcbiAgICAgICAgcmV0dXJuICd0cmFuc2Zvcm0nO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzLmRvbShlbCkgJiYgKHByb3AgIT09ICd0cmFuc2Zvcm0nICYmIGdldENTU1ZhbHVlKGVsLCBwcm9wKSkpIHtcclxuICAgICAgICByZXR1cm4gJ2Nzcyc7XHJcbiAgICB9XHJcbiAgICBpZiAoZWxbcHJvcF0gIT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAnb2JqZWN0JztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RWxlbWVudFRyYW5zZm9ybXMoZWwpIHtcclxuICAgIGlmICghaXMuZG9tKGVsKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBzdHIgPSBlbC5zdHlsZS50cmFuc2Zvcm0gfHwgJyc7XHJcbiAgICB2YXIgcmVnID0gLyhcXHcrKVxcKChbXildKilcXCkvZztcclxuICAgIHZhciB0cmFuc2Zvcm1zID0gbmV3IE1hcCgpO1xyXG4gICAgdmFyIG07XHJcbiAgICB3aGlsZSAobSA9IHJlZy5leGVjKHN0cikpIHtcclxuICAgICAgICB0cmFuc2Zvcm1zLnNldChtWzFdLCBtWzJdKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cmFuc2Zvcm1zO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1WYWx1ZShlbCwgcHJvcE5hbWUsIGFuaW1hdGFibGUsIHVuaXQpIHtcclxuICAgIHZhciBkZWZhdWx0VmFsID0gc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdzY2FsZScpID8gMSA6IDAgKyBnZXRUcmFuc2Zvcm1Vbml0KHByb3BOYW1lKTtcclxuICAgIHZhciB2YWx1ZSA9IGdldEVsZW1lbnRUcmFuc2Zvcm1zKGVsKS5nZXQocHJvcE5hbWUpIHx8IGRlZmF1bHRWYWw7XHJcbiAgICBpZiAoYW5pbWF0YWJsZSkge1xyXG4gICAgICAgIGFuaW1hdGFibGUudHJhbnNmb3Jtcy5saXN0LnNldChwcm9wTmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIGFuaW1hdGFibGUudHJhbnNmb3Jtc1snbGFzdCddID0gcHJvcE5hbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5pdCA/IGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIDogdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgdW5pdCwgYW5pbWF0YWJsZSkge1xyXG4gICAgc3dpdGNoIChnZXRBbmltYXRpb25UeXBlKHRhcmdldCwgcHJvcE5hbWUpKSB7XHJcbiAgICAgICAgY2FzZSAndHJhbnNmb3JtJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldFRyYW5zZm9ybVZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIGFuaW1hdGFibGUsIHVuaXQpO1xyXG4gICAgICAgIGNhc2UgJ2Nzcyc6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRDU1NWYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCB1bml0KTtcclxuICAgICAgICBjYXNlICdhdHRyaWJ1dGUnOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0QXR0cmlidXRlKHRhcmdldCwgcHJvcE5hbWUpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcE5hbWVdIHx8IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlbGF0aXZlVmFsdWUodG8sIGZyb20pIHtcclxuICAgIHZhciBvcGVyYXRvciA9IC9eKFxcKj18XFwrPXwtPSkvLmV4ZWModG8pO1xyXG4gICAgaWYgKCFvcGVyYXRvcikge1xyXG4gICAgICAgIHJldHVybiB0bztcclxuICAgIH1cclxuICAgIHZhciB1ID0gZ2V0VW5pdCh0bykgfHwgMDtcclxuICAgIHZhciB4ID0gcGFyc2VGbG9hdChmcm9tKTtcclxuICAgIHZhciB5ID0gcGFyc2VGbG9hdCh0by5yZXBsYWNlKG9wZXJhdG9yWzBdLCAnJykpO1xyXG4gICAgc3dpdGNoIChvcGVyYXRvclswXVswXSkge1xyXG4gICAgICAgIGNhc2UgJysnOlxyXG4gICAgICAgICAgICByZXR1cm4geCArIHkgKyB1O1xyXG4gICAgICAgIGNhc2UgJy0nOlxyXG4gICAgICAgICAgICByZXR1cm4geCAtIHkgKyB1O1xyXG4gICAgICAgIGNhc2UgJyonOlxyXG4gICAgICAgICAgICByZXR1cm4geCAqIHkgKyB1O1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVZhbHVlKHZhbCwgdW5pdCkge1xyXG4gICAgaWYgKGlzLmNvbCh2YWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yVG9SZ2IodmFsKTtcclxuICAgIH1cclxuICAgIGlmICgvXFxzL2cudGVzdCh2YWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIH1cclxuICAgIHZhciBvcmlnaW5hbFVuaXQgPSBnZXRVbml0KHZhbCk7XHJcbiAgICB2YXIgdW5pdExlc3MgPSBvcmlnaW5hbFVuaXQgPyB2YWwuc3Vic3RyKDAsIHZhbC5sZW5ndGggLSBvcmlnaW5hbFVuaXQubGVuZ3RoKSA6IHZhbDtcclxuICAgIGlmICh1bml0KSB7XHJcbiAgICAgICAgcmV0dXJuIHVuaXRMZXNzICsgdW5pdDtcclxuICAgIH1cclxuICAgIHJldHVybiB1bml0TGVzcztcclxufVxyXG5cclxuLy8gZ2V0VG90YWxMZW5ndGgoKSBlcXVpdmFsZW50IGZvciBjaXJjbGUsIHJlY3QsIHBvbHlsaW5lLCBwb2x5Z29uIGFuZCBsaW5lIHNoYXBlc1xyXG4vLyBhZGFwdGVkIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vU2ViTGFtYmxhLzNlMDU1MGM0OTZjMjM2NzA5NzQ0XHJcblxyXG5mdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDIueCAtIHAxLngsIDIpICsgTWF0aC5wb3cocDIueSAtIHAxLnksIDIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2lyY2xlTGVuZ3RoKGVsKSB7XHJcbiAgICByZXR1cm4gTWF0aC5QSSAqIDIgKiBnZXRBdHRyaWJ1dGUoZWwsICdyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlY3RMZW5ndGgoZWwpIHtcclxuICAgIHJldHVybiAoZ2V0QXR0cmlidXRlKGVsLCAnd2lkdGgnKSAqIDIpICsgKGdldEF0dHJpYnV0ZShlbCwgJ2hlaWdodCcpICogMik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExpbmVMZW5ndGgoZWwpIHtcclxuICAgIHJldHVybiBnZXREaXN0YW5jZSh7XHJcbiAgICAgICAgeDogZ2V0QXR0cmlidXRlKGVsLCAneDEnKSxcclxuICAgICAgICB5OiBnZXRBdHRyaWJ1dGUoZWwsICd5MScpXHJcbiAgICB9LCB7XHJcbiAgICAgICAgeDogZ2V0QXR0cmlidXRlKGVsLCAneDInKSxcclxuICAgICAgICB5OiBnZXRBdHRyaWJ1dGUoZWwsICd5MicpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UG9seWxpbmVMZW5ndGgoZWwpIHtcclxuICAgIHZhciBwb2ludHMgPSBlbC5wb2ludHM7XHJcbiAgICB2YXIgdG90YWxMZW5ndGggPSAwO1xyXG4gICAgdmFyIHByZXZpb3VzUG9zO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubnVtYmVyT2ZJdGVtczsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSBwb2ludHMuZ2V0SXRlbShpKTtcclxuICAgICAgICBpZiAoaSA+IDApIHtcclxuICAgICAgICAgICAgdG90YWxMZW5ndGggKz0gZ2V0RGlzdGFuY2UocHJldmlvdXNQb3MsIGN1cnJlbnRQb3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmV2aW91c1BvcyA9IGN1cnJlbnRQb3M7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG90YWxMZW5ndGg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBvbHlnb25MZW5ndGgoZWwpIHtcclxuICAgIHZhciBwb2ludHMgPSBlbC5wb2ludHM7XHJcbiAgICByZXR1cm4gZ2V0UG9seWxpbmVMZW5ndGgoZWwpICsgZ2V0RGlzdGFuY2UocG9pbnRzLmdldEl0ZW0ocG9pbnRzLm51bWJlck9mSXRlbXMgLSAxKSwgcG9pbnRzLmdldEl0ZW0oMCkpO1xyXG59XHJcblxyXG4vLyBQYXRoIGFuaW1hdGlvblxyXG5cclxuZnVuY3Rpb24gZ2V0VG90YWxMZW5ndGgoZWwpIHtcclxuICAgIGlmIChlbC5nZXRUb3RhbExlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBlbC5nZXRUb3RhbExlbmd0aCgpO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoIChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICBjYXNlICdjaXJjbGUnOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0Q2lyY2xlTGVuZ3RoKGVsKTtcclxuICAgICAgICBjYXNlICdyZWN0JzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldFJlY3RMZW5ndGgoZWwpO1xyXG4gICAgICAgIGNhc2UgJ2xpbmUnOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0TGluZUxlbmd0aChlbCk7XHJcbiAgICAgICAgY2FzZSAncG9seWxpbmUnOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0UG9seWxpbmVMZW5ndGgoZWwpO1xyXG4gICAgICAgIGNhc2UgJ3BvbHlnb24nOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0UG9seWdvbkxlbmd0aChlbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERhc2hvZmZzZXQoZWwpIHtcclxuICAgIHZhciBwYXRoTGVuZ3RoID0gZ2V0VG90YWxMZW5ndGgoZWwpO1xyXG4gICAgZWwuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgcGF0aExlbmd0aCk7XHJcbiAgICByZXR1cm4gcGF0aExlbmd0aDtcclxufVxyXG5cclxuLy8gTW90aW9uIHBhdGhcclxuXHJcbmZ1bmN0aW9uIGdldFBhcmVudFN2Z0VsKGVsKSB7XHJcbiAgICB2YXIgcGFyZW50RWwgPSBlbC5wYXJlbnROb2RlO1xyXG4gICAgd2hpbGUgKGlzLnN2ZyhwYXJlbnRFbCkpIHtcclxuICAgICAgICBpZiAoIWlzLnN2ZyhwYXJlbnRFbC5wYXJlbnROb2RlKSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50RWwgPSBwYXJlbnRFbC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcmVudEVsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXJlbnRTdmcocGF0aEVsLCBzdmdEYXRhKSB7XHJcbiAgICB2YXIgc3ZnID0gc3ZnRGF0YSB8fCB7fTtcclxuICAgIHZhciBwYXJlbnRTdmdFbCA9IHN2Zy5lbCB8fCBnZXRQYXJlbnRTdmdFbChwYXRoRWwpO1xyXG4gICAgdmFyIHJlY3QgPSBwYXJlbnRTdmdFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHZhciB2aWV3Qm94QXR0ciA9IGdldEF0dHJpYnV0ZShwYXJlbnRTdmdFbCwgJ3ZpZXdCb3gnKTtcclxuICAgIHZhciB3aWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICB2YXIgaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XHJcbiAgICB2YXIgdmlld0JveCA9IHN2Zy52aWV3Qm94IHx8ICh2aWV3Qm94QXR0ciA/IHZpZXdCb3hBdHRyLnNwbGl0KCcgJykgOiBbMCwgMCwgd2lkdGgsIGhlaWdodF0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlbDogcGFyZW50U3ZnRWwsXHJcbiAgICAgICAgdmlld0JveDogdmlld0JveCxcclxuICAgICAgICB4OiB2aWV3Qm94WzBdIC8gMSxcclxuICAgICAgICB5OiB2aWV3Qm94WzFdIC8gMSxcclxuICAgICAgICB3OiB3aWR0aCxcclxuICAgICAgICBoOiBoZWlnaHQsXHJcbiAgICAgICAgdlc6IHZpZXdCb3hbMl0sXHJcbiAgICAgICAgdkg6IHZpZXdCb3hbM11cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGF0aChwYXRoLCBwZXJjZW50KSB7XHJcbiAgICB2YXIgcGF0aEVsID0gaXMuc3RyKHBhdGgpID8gc2VsZWN0U3RyaW5nKHBhdGgpWzBdIDogcGF0aDtcclxuICAgIHZhciBwID0gcGVyY2VudCB8fCAxMDA7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24ocHJvcGVydHkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHksXHJcbiAgICAgICAgICAgIGVsOiBwYXRoRWwsXHJcbiAgICAgICAgICAgIHN2ZzogZ2V0UGFyZW50U3ZnKHBhdGhFbCksXHJcbiAgICAgICAgICAgIHRvdGFsTGVuZ3RoOiBnZXRUb3RhbExlbmd0aChwYXRoRWwpICogKHAgLyAxMDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXRoUHJvZ3Jlc3MocGF0aCwgcHJvZ3Jlc3MsIGlzUGF0aFRhcmdldEluc2lkZVNWRykge1xyXG4gICAgZnVuY3Rpb24gcG9pbnQob2Zmc2V0KSB7XHJcbiAgICAgICAgaWYgKG9mZnNldCA9PT0gdm9pZCAwKSBvZmZzZXQgPSAwO1xyXG5cclxuICAgICAgICB2YXIgbCA9IHByb2dyZXNzICsgb2Zmc2V0ID49IDEgPyBwcm9ncmVzcyArIG9mZnNldCA6IDA7XHJcbiAgICAgICAgcmV0dXJuIHBhdGguZWwuZ2V0UG9pbnRBdExlbmd0aChsKTtcclxuICAgIH1cclxuICAgIHZhciBzdmcgPSBnZXRQYXJlbnRTdmcocGF0aC5lbCwgcGF0aC5zdmcpO1xyXG4gICAgdmFyIHAgPSBwb2ludCgpO1xyXG4gICAgdmFyIHAwID0gcG9pbnQoLTEpO1xyXG4gICAgdmFyIHAxID0gcG9pbnQoKzEpO1xyXG4gICAgdmFyIHNjYWxlWCA9IGlzUGF0aFRhcmdldEluc2lkZVNWRyA/IDEgOiBzdmcudyAvIHN2Zy52VztcclxuICAgIHZhciBzY2FsZVkgPSBpc1BhdGhUYXJnZXRJbnNpZGVTVkcgPyAxIDogc3ZnLmggLyBzdmcudkg7XHJcbiAgICBzd2l0Y2ggKHBhdGgucHJvcGVydHkpIHtcclxuICAgICAgICBjYXNlICd4JzpcclxuICAgICAgICAgICAgcmV0dXJuIChwLnggLSBzdmcueCkgKiBzY2FsZVg7XHJcbiAgICAgICAgY2FzZSAneSc6XHJcbiAgICAgICAgICAgIHJldHVybiAocC55IC0gc3ZnLnkpICogc2NhbGVZO1xyXG4gICAgICAgIGNhc2UgJ2FuZ2xlJzpcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIocDEueSAtIHAwLnksIHAxLnggLSBwMC54KSAqIDE4MCAvIE1hdGguUEk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIERlY29tcG9zZSB2YWx1ZVxyXG5cclxuZnVuY3Rpb24gZGVjb21wb3NlVmFsdWUodmFsLCB1bml0KSB7XHJcbiAgICAvLyBjb25zdCByZ3ggPSAvLT9cXGQqXFwuP1xcZCsvZzsgLy8gaGFuZGxlcyBiYXNpYyBudW1iZXJzXHJcbiAgICAvLyBjb25zdCByZ3ggPSAvWystXT9cXGQrKD86XFwuXFxkKyk/KD86W2VFXVsrLV0/XFxkKyk/L2c7IC8vIGhhbmRsZXMgZXhwb25lbnRzIG5vdGF0aW9uXHJcbiAgICB2YXIgcmd4ID0gL1srLV0/XFxkKlxcLj9cXGQrKD86XFwuXFxkKyk/KD86W2VFXVsrLV0/XFxkKyk/L2c7IC8vIGhhbmRsZXMgZXhwb25lbnRzIG5vdGF0aW9uXHJcbiAgICB2YXIgdmFsdWUgPSB2YWxpZGF0ZVZhbHVlKChpcy5wdGgodmFsKSA/IHZhbC50b3RhbExlbmd0aCA6IHZhbCksIHVuaXQpICsgJyc7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG9yaWdpbmFsOiB2YWx1ZSxcclxuICAgICAgICBudW1iZXJzOiB2YWx1ZS5tYXRjaChyZ3gpID8gdmFsdWUubWF0Y2gocmd4KS5tYXAoTnVtYmVyKSA6IFswXSxcclxuICAgICAgICBzdHJpbmdzOiAoaXMuc3RyKHZhbCkgfHwgdW5pdCkgPyB2YWx1ZS5zcGxpdChyZ3gpIDogW11cclxuICAgIH1cclxufVxyXG5cclxuLy8gQW5pbWF0YWJsZXNcclxuXHJcbmZ1bmN0aW9uIHBhcnNlVGFyZ2V0cyh0YXJnZXRzKSB7XHJcbiAgICB2YXIgdGFyZ2V0c0FycmF5ID0gdGFyZ2V0cyA/IChmbGF0dGVuQXJyYXkoaXMuYXJyKHRhcmdldHMpID8gdGFyZ2V0cy5tYXAodG9BcnJheSkgOiB0b0FycmF5KHRhcmdldHMpKSkgOiBbXTtcclxuICAgIHJldHVybiBmaWx0ZXJBcnJheSh0YXJnZXRzQXJyYXksIGZ1bmN0aW9uKGl0ZW0sIHBvcywgc2VsZikge1xyXG4gICAgICAgIHJldHVybiBzZWxmLmluZGV4T2YoaXRlbSkgPT09IHBvcztcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBbmltYXRhYmxlcyh0YXJnZXRzKSB7XHJcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xyXG4gICAgcmV0dXJuIHBhcnNlZC5tYXAoZnVuY3Rpb24odCwgaSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogdCxcclxuICAgICAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgICAgIHRvdGFsOiBwYXJzZWQubGVuZ3RoLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1zOiB7XHJcbiAgICAgICAgICAgICAgICBsaXN0OiBnZXRFbGVtZW50VHJhbnNmb3Jtcyh0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBQcm9wZXJ0aWVzXHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyhwcm9wLCB0d2VlblNldHRpbmdzKSB7XHJcbiAgICB2YXIgc2V0dGluZ3MgPSBjbG9uZU9iamVjdCh0d2VlblNldHRpbmdzKTtcclxuICAgIC8vIE92ZXJyaWRlIGR1cmF0aW9uIGlmIGVhc2luZyBpcyBhIHNwcmluZ1xyXG4gICAgaWYgKC9ec3ByaW5nLy50ZXN0KHNldHRpbmdzLmVhc2luZykpIHtcclxuICAgICAgICBzZXR0aW5ncy5kdXJhdGlvbiA9IHNwcmluZyhzZXR0aW5ncy5lYXNpbmcpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzLmFycihwcm9wKSkge1xyXG4gICAgICAgIHZhciBsID0gcHJvcC5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGlzRnJvbVRvID0gKGwgPT09IDIgJiYgIWlzLm9iaihwcm9wWzBdKSk7XHJcbiAgICAgICAgaWYgKCFpc0Zyb21Ubykge1xyXG4gICAgICAgICAgICAvLyBEdXJhdGlvbiBkaXZpZGVkIGJ5IHRoZSBudW1iZXIgb2YgdHdlZW5zXHJcbiAgICAgICAgICAgIGlmICghaXMuZm5jKHR3ZWVuU2V0dGluZ3MuZHVyYXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5kdXJhdGlvbiA9IHR3ZWVuU2V0dGluZ3MuZHVyYXRpb24gLyBsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVHJhbnNmb3JtIFtmcm9tLCB0b10gdmFsdWVzIHNob3J0aGFuZCB0byBhIHZhbGlkIHR3ZWVuIHZhbHVlXHJcbiAgICAgICAgICAgIHByb3AgPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBwcm9wQXJyYXkgPSBpcy5hcnIocHJvcCkgPyBwcm9wIDogW3Byb3BdO1xyXG4gICAgcmV0dXJuIHByb3BBcnJheS5tYXAoZnVuY3Rpb24odiwgaSkge1xyXG4gICAgICAgIHZhciBvYmogPSAoaXMub2JqKHYpICYmICFpcy5wdGgodikpID8gdiA6IHtcclxuICAgICAgICAgICAgdmFsdWU6IHZcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIERlZmF1bHQgZGVsYXkgdmFsdWUgc2hvdWxkIG9ubHkgYmUgYXBwbGllZCB0byB0aGUgZmlyc3QgdHdlZW5cclxuICAgICAgICBpZiAoaXMudW5kKG9iai5kZWxheSkpIHtcclxuICAgICAgICAgICAgb2JqLmRlbGF5ID0gIWkgPyB0d2VlblNldHRpbmdzLmRlbGF5IDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRGVmYXVsdCBlbmREZWxheSB2YWx1ZSBzaG91bGQgb25seSBiZSBhcHBsaWVkIHRvIHRoZSBsYXN0IHR3ZWVuXHJcbiAgICAgICAgaWYgKGlzLnVuZChvYmouZW5kRGVsYXkpKSB7XHJcbiAgICAgICAgICAgIG9iai5lbmREZWxheSA9IGkgPT09IHByb3BBcnJheS5sZW5ndGggLSAxID8gdHdlZW5TZXR0aW5ncy5lbmREZWxheSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9KS5tYXAoZnVuY3Rpb24oaykge1xyXG4gICAgICAgIHJldHVybiBtZXJnZU9iamVjdHMoaywgc2V0dGluZ3MpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBmbGF0dGVuS2V5ZnJhbWVzKGtleWZyYW1lcykge1xyXG4gICAgdmFyIHByb3BlcnR5TmFtZXMgPSBmaWx0ZXJBcnJheShmbGF0dGVuQXJyYXkoa2V5ZnJhbWVzLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGtleSk7XHJcbiAgICAgICAgfSkpLCBmdW5jdGlvbihwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpcy5rZXkocCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgaWYgKGEuaW5kZXhPZihiKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGEucHVzaChiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICB9LCBbXSk7XHJcbiAgICB2YXIgcHJvcGVydGllcyA9IHt9O1xyXG4gICAgdmFyIGxvb3AgPSBmdW5jdGlvbihpKSB7XHJcbiAgICAgICAgdmFyIHByb3BOYW1lID0gcHJvcGVydHlOYW1lc1tpXTtcclxuICAgICAgICBwcm9wZXJ0aWVzW3Byb3BOYW1lXSA9IGtleWZyYW1lcy5tYXAoZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdLZXkgPSB7fTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBrZXkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpcy5rZXkocCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocCA9PSBwcm9wTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdLZXkudmFsdWUgPSBrZXlbcF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdLZXlbcF0gPSBrZXlbcF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ld0tleTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSsrKSBsb29wKGkpO1xyXG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByb3BlcnRpZXModHdlZW5TZXR0aW5ncywgcGFyYW1zKSB7XHJcbiAgICB2YXIgcHJvcGVydGllcyA9IFtdO1xyXG4gICAgdmFyIGtleWZyYW1lcyA9IHBhcmFtcy5rZXlmcmFtZXM7XHJcbiAgICBpZiAoa2V5ZnJhbWVzKSB7XHJcbiAgICAgICAgcGFyYW1zID0gbWVyZ2VPYmplY3RzKGZsYXR0ZW5LZXlmcmFtZXMoa2V5ZnJhbWVzKSwgcGFyYW1zKTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIHAgaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKGlzLmtleShwKSkge1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogcCxcclxuICAgICAgICAgICAgICAgIHR3ZWVuczogbm9ybWFsaXplUHJvcGVydHlUd2VlbnMocGFyYW1zW3BdLCB0d2VlblNldHRpbmdzKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvcGVydGllcztcclxufVxyXG5cclxuLy8gVHdlZW5zXHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVUd2VlblZhbHVlcyh0d2VlbiwgYW5pbWF0YWJsZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gdHdlZW4pIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBnZXRGdW5jdGlvblZhbHVlKHR3ZWVuW3BdLCBhbmltYXRhYmxlKTtcclxuICAgICAgICBpZiAoaXMuYXJyKHZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLm1hcChmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RnVuY3Rpb25WYWx1ZSh2LCBhbmltYXRhYmxlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdFtwXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdC5kdXJhdGlvbiA9IHBhcnNlRmxvYXQodC5kdXJhdGlvbik7XHJcbiAgICB0LmRlbGF5ID0gcGFyc2VGbG9hdCh0LmRlbGF5KTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVUd2VlbnMocHJvcCwgYW5pbWF0YWJsZSkge1xyXG4gICAgdmFyIHByZXZpb3VzVHdlZW47XHJcbiAgICByZXR1cm4gcHJvcC50d2VlbnMubWFwKGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICB2YXIgdHdlZW4gPSBub3JtYWxpemVUd2VlblZhbHVlcyh0LCBhbmltYXRhYmxlKTtcclxuICAgICAgICB2YXIgdHdlZW5WYWx1ZSA9IHR3ZWVuLnZhbHVlO1xyXG4gICAgICAgIHZhciB0byA9IGlzLmFycih0d2VlblZhbHVlKSA/IHR3ZWVuVmFsdWVbMV0gOiB0d2VlblZhbHVlO1xyXG4gICAgICAgIHZhciB0b1VuaXQgPSBnZXRVbml0KHRvKTtcclxuICAgICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUoYW5pbWF0YWJsZS50YXJnZXQsIHByb3AubmFtZSwgdG9Vbml0LCBhbmltYXRhYmxlKTtcclxuICAgICAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHByZXZpb3VzVHdlZW4gPyBwcmV2aW91c1R3ZWVuLnRvLm9yaWdpbmFsIDogb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICB2YXIgZnJvbSA9IGlzLmFycih0d2VlblZhbHVlKSA/IHR3ZWVuVmFsdWVbMF0gOiBwcmV2aW91c1ZhbHVlO1xyXG4gICAgICAgIHZhciBmcm9tVW5pdCA9IGdldFVuaXQoZnJvbSkgfHwgZ2V0VW5pdChvcmlnaW5hbFZhbHVlKTtcclxuICAgICAgICB2YXIgdW5pdCA9IHRvVW5pdCB8fCBmcm9tVW5pdDtcclxuICAgICAgICBpZiAoaXMudW5kKHRvKSkge1xyXG4gICAgICAgICAgICB0byA9IHByZXZpb3VzVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHR3ZWVuLmZyb20gPSBkZWNvbXBvc2VWYWx1ZShmcm9tLCB1bml0KTtcclxuICAgICAgICB0d2Vlbi50byA9IGRlY29tcG9zZVZhbHVlKGdldFJlbGF0aXZlVmFsdWUodG8sIGZyb20pLCB1bml0KTtcclxuICAgICAgICB0d2Vlbi5zdGFydCA9IHByZXZpb3VzVHdlZW4gPyBwcmV2aW91c1R3ZWVuLmVuZCA6IDA7XHJcbiAgICAgICAgdHdlZW4uZW5kID0gdHdlZW4uc3RhcnQgKyB0d2Vlbi5kZWxheSArIHR3ZWVuLmR1cmF0aW9uICsgdHdlZW4uZW5kRGVsYXk7XHJcbiAgICAgICAgdHdlZW4uZWFzaW5nID0gcGFyc2VFYXNpbmdzKHR3ZWVuLmVhc2luZywgdHdlZW4uZHVyYXRpb24pO1xyXG4gICAgICAgIHR3ZWVuLmlzUGF0aCA9IGlzLnB0aCh0d2VlblZhbHVlKTtcclxuICAgICAgICB0d2Vlbi5pc1BhdGhUYXJnZXRJbnNpZGVTVkcgPSB0d2Vlbi5pc1BhdGggJiYgaXMuc3ZnKGFuaW1hdGFibGUudGFyZ2V0KTtcclxuICAgICAgICB0d2Vlbi5pc0NvbG9yID0gaXMuY29sKHR3ZWVuLmZyb20ub3JpZ2luYWwpO1xyXG4gICAgICAgIGlmICh0d2Vlbi5pc0NvbG9yKSB7XHJcbiAgICAgICAgICAgIHR3ZWVuLnJvdW5kID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJldmlvdXNUd2VlbiA9IHR3ZWVuO1xyXG4gICAgICAgIHJldHVybiB0d2VlbjtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBUd2VlbiBwcm9ncmVzc1xyXG5cclxudmFyIHNldFByb2dyZXNzVmFsdWUgPSB7XHJcbiAgICBjc3M6IGZ1bmN0aW9uKHQsIHAsIHYpIHtcclxuICAgICAgICByZXR1cm4gdC5zdHlsZVtwXSA9IHY7XHJcbiAgICB9LFxyXG4gICAgYXR0cmlidXRlOiBmdW5jdGlvbih0LCBwLCB2KSB7XHJcbiAgICAgICAgcmV0dXJuIHQuc2V0QXR0cmlidXRlKHAsIHYpO1xyXG4gICAgfSxcclxuICAgIG9iamVjdDogZnVuY3Rpb24odCwgcCwgdikge1xyXG4gICAgICAgIHJldHVybiB0W3BdID0gdjtcclxuICAgIH0sXHJcbiAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uKHQsIHAsIHYsIHRyYW5zZm9ybXMsIG1hbnVhbCkge1xyXG4gICAgICAgIHRyYW5zZm9ybXMubGlzdC5zZXQocCwgdik7XHJcbiAgICAgICAgaWYgKHAgPT09IHRyYW5zZm9ybXMubGFzdCB8fCBtYW51YWwpIHtcclxuICAgICAgICAgICAgdmFyIHN0ciA9ICcnO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm1zLmxpc3QuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgcHJvcCkge1xyXG4gICAgICAgICAgICAgICAgc3RyICs9IHByb3AgKyBcIihcIiArIHZhbHVlICsgXCIpIFwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdC5zdHlsZS50cmFuc2Zvcm0gPSBzdHI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gU2V0IFZhbHVlIGhlbHBlclxyXG5cclxuZnVuY3Rpb24gc2V0VGFyZ2V0c1ZhbHVlKHRhcmdldHMsIHByb3BlcnRpZXMpIHtcclxuICAgIHZhciBhbmltYXRhYmxlcyA9IGdldEFuaW1hdGFibGVzKHRhcmdldHMpO1xyXG4gICAgYW5pbWF0YWJsZXMuZm9yRWFjaChmdW5jdGlvbihhbmltYXRhYmxlKSB7XHJcbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gcHJvcGVydGllcykge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBnZXRGdW5jdGlvblZhbHVlKHByb3BlcnRpZXNbcHJvcGVydHldLCBhbmltYXRhYmxlKTtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGFuaW1hdGFibGUudGFyZ2V0O1xyXG4gICAgICAgICAgICB2YXIgdmFsdWVVbml0ID0gZ2V0VW5pdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbFZhbHVlID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZVVuaXQsIGFuaW1hdGFibGUpO1xyXG4gICAgICAgICAgICB2YXIgdW5pdCA9IHZhbHVlVW5pdCB8fCBnZXRVbml0KG9yaWdpbmFsVmFsdWUpO1xyXG4gICAgICAgICAgICB2YXIgdG8gPSBnZXRSZWxhdGl2ZVZhbHVlKHZhbGlkYXRlVmFsdWUodmFsdWUsIHVuaXQpLCBvcmlnaW5hbFZhbHVlKTtcclxuICAgICAgICAgICAgdmFyIGFuaW1UeXBlID0gZ2V0QW5pbWF0aW9uVHlwZSh0YXJnZXQsIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgc2V0UHJvZ3Jlc3NWYWx1ZVthbmltVHlwZV0odGFyZ2V0LCBwcm9wZXJ0eSwgdG8sIGFuaW1hdGFibGUudHJhbnNmb3JtcywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIEFuaW1hdGlvbnNcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFuaW1hdGlvbihhbmltYXRhYmxlLCBwcm9wKSB7XHJcbiAgICB2YXIgYW5pbVR5cGUgPSBnZXRBbmltYXRpb25UeXBlKGFuaW1hdGFibGUudGFyZ2V0LCBwcm9wLm5hbWUpO1xyXG4gICAgaWYgKGFuaW1UeXBlKSB7XHJcbiAgICAgICAgdmFyIHR3ZWVucyA9IG5vcm1hbGl6ZVR3ZWVucyhwcm9wLCBhbmltYXRhYmxlKTtcclxuICAgICAgICB2YXIgbGFzdFR3ZWVuID0gdHdlZW5zW3R3ZWVucy5sZW5ndGggLSAxXTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiBhbmltVHlwZSxcclxuICAgICAgICAgICAgcHJvcGVydHk6IHByb3AubmFtZSxcclxuICAgICAgICAgICAgYW5pbWF0YWJsZTogYW5pbWF0YWJsZSxcclxuICAgICAgICAgICAgdHdlZW5zOiB0d2VlbnMsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiBsYXN0VHdlZW4uZW5kLFxyXG4gICAgICAgICAgICBkZWxheTogdHdlZW5zWzBdLmRlbGF5LFxyXG4gICAgICAgICAgICBlbmREZWxheTogbGFzdFR3ZWVuLmVuZERlbGF5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBbmltYXRpb25zKGFuaW1hdGFibGVzLCBwcm9wZXJ0aWVzKSB7XHJcbiAgICByZXR1cm4gZmlsdGVyQXJyYXkoZmxhdHRlbkFycmF5KGFuaW1hdGFibGVzLm1hcChmdW5jdGlvbihhbmltYXRhYmxlKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb3BlcnRpZXMubWFwKGZ1bmN0aW9uKHByb3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFuaW1hdGlvbihhbmltYXRhYmxlLCBwcm9wKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pKSwgZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiAhaXMudW5kKGEpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIENyZWF0ZSBJbnN0YW5jZVxyXG5cclxuZnVuY3Rpb24gZ2V0SW5zdGFuY2VUaW1pbmdzKGFuaW1hdGlvbnMsIHR3ZWVuU2V0dGluZ3MpIHtcclxuICAgIHZhciBhbmltTGVuZ3RoID0gYW5pbWF0aW9ucy5sZW5ndGg7XHJcbiAgICB2YXIgZ2V0VGxPZmZzZXQgPSBmdW5jdGlvbihhbmltKSB7XHJcbiAgICAgICAgcmV0dXJuIGFuaW0udGltZWxpbmVPZmZzZXQgPyBhbmltLnRpbWVsaW5lT2Zmc2V0IDogMDtcclxuICAgIH07XHJcbiAgICB2YXIgdGltaW5ncyA9IHt9O1xyXG4gICAgdGltaW5ncy5kdXJhdGlvbiA9IGFuaW1MZW5ndGggPyBNYXRoLm1heC5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbihhbmltKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kdXJhdGlvbjtcclxuICAgIH0pKSA6IHR3ZWVuU2V0dGluZ3MuZHVyYXRpb247XHJcbiAgICB0aW1pbmdzLmRlbGF5ID0gYW5pbUxlbmd0aCA/IE1hdGgubWluLmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uKGFuaW0pIHtcclxuICAgICAgICByZXR1cm4gZ2V0VGxPZmZzZXQoYW5pbSkgKyBhbmltLmRlbGF5O1xyXG4gICAgfSkpIDogdHdlZW5TZXR0aW5ncy5kZWxheTtcclxuICAgIHRpbWluZ3MuZW5kRGVsYXkgPSBhbmltTGVuZ3RoID8gdGltaW5ncy5kdXJhdGlvbiAtIE1hdGgubWF4LmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uKGFuaW0pIHtcclxuICAgICAgICByZXR1cm4gZ2V0VGxPZmZzZXQoYW5pbSkgKyBhbmltLmR1cmF0aW9uIC0gYW5pbS5lbmREZWxheTtcclxuICAgIH0pKSA6IHR3ZWVuU2V0dGluZ3MuZW5kRGVsYXk7XHJcbiAgICByZXR1cm4gdGltaW5ncztcclxufVxyXG5cclxudmFyIGluc3RhbmNlSUQgPSAwO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmV3SW5zdGFuY2UocGFyYW1zKSB7XHJcbiAgICB2YXIgaW5zdGFuY2VTZXR0aW5ncyA9IHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncywgcGFyYW1zKTtcclxuICAgIHZhciB0d2VlblNldHRpbmdzID0gcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRUd2VlblNldHRpbmdzLCBwYXJhbXMpO1xyXG4gICAgdmFyIHByb3BlcnRpZXMgPSBnZXRQcm9wZXJ0aWVzKHR3ZWVuU2V0dGluZ3MsIHBhcmFtcyk7XHJcbiAgICB2YXIgYW5pbWF0YWJsZXMgPSBnZXRBbmltYXRhYmxlcyhwYXJhbXMudGFyZ2V0cyk7XHJcbiAgICB2YXIgYW5pbWF0aW9ucyA9IGdldEFuaW1hdGlvbnMoYW5pbWF0YWJsZXMsIHByb3BlcnRpZXMpO1xyXG4gICAgdmFyIHRpbWluZ3MgPSBnZXRJbnN0YW5jZVRpbWluZ3MoYW5pbWF0aW9ucywgdHdlZW5TZXR0aW5ncyk7XHJcbiAgICB2YXIgaWQgPSBpbnN0YW5jZUlEO1xyXG4gICAgaW5zdGFuY2VJRCsrO1xyXG4gICAgcmV0dXJuIG1lcmdlT2JqZWN0cyhpbnN0YW5jZVNldHRpbmdzLCB7XHJcbiAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICBhbmltYXRhYmxlczogYW5pbWF0YWJsZXMsXHJcbiAgICAgICAgYW5pbWF0aW9uczogYW5pbWF0aW9ucyxcclxuICAgICAgICBkdXJhdGlvbjogdGltaW5ncy5kdXJhdGlvbixcclxuICAgICAgICBkZWxheTogdGltaW5ncy5kZWxheSxcclxuICAgICAgICBlbmREZWxheTogdGltaW5ncy5lbmREZWxheVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIENvcmVcclxuXHJcbnZhciBhY3RpdmVJbnN0YW5jZXMgPSBbXTtcclxuXHJcbnZhciBlbmdpbmUgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgcmFmO1xyXG5cclxuICAgIGZ1bmN0aW9uIHBsYXkoKSB7XHJcbiAgICAgICAgaWYgKCFyYWYgJiYgKCFpc0RvY3VtZW50SGlkZGVuKCkgfHwgIWFuaW1lLnN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4pICYmIGFjdGl2ZUluc3RhbmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RlcCh0KSB7XHJcbiAgICAgICAgLy8gbWVtbyBvbiBhbGdvcml0aG0gaXNzdWU6XHJcbiAgICAgICAgLy8gZGFuZ2Vyb3VzIGl0ZXJhdGlvbiBvdmVyIG11dGFibGUgYGFjdGl2ZUluc3RhbmNlc2BcclxuICAgICAgICAvLyAodGhhdCBjb2xsZWN0aW9uIG1heSBiZSB1cGRhdGVkIGZyb20gd2l0aGluIGNhbGxiYWNrcyBvZiBgdGlja2AtZWQgYW5pbWF0aW9uIGluc3RhbmNlcylcclxuICAgICAgICB2YXIgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgd2hpbGUgKGkgPCBhY3RpdmVJbnN0YW5jZXNMZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGFjdGl2ZUluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2VzW2ldO1xyXG4gICAgICAgICAgICBpZiAoIWFjdGl2ZUluc3RhbmNlLnBhdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5zdGFuY2UudGljayh0KTtcclxuICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUluc3RhbmNlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbnN0YW5jZXNMZW5ndGgtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByYWYgPSBpID4gMCA/IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKCkge1xyXG4gICAgICAgIGlmICghYW5pbWUuc3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNEb2N1bWVudEhpZGRlbigpKSB7XHJcbiAgICAgICAgICAgIC8vIHN1c3BlbmQgdGlja3NcclxuICAgICAgICAgICAgcmFmID0gY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmKTtcclxuICAgICAgICB9IGVsc2UgeyAvLyBpcyBiYWNrIHRvIGFjdGl2ZSB0YWJcclxuICAgICAgICAgICAgLy8gZmlyc3QgYWRqdXN0IGFuaW1hdGlvbnMgdG8gY29uc2lkZXIgdGhlIHRpbWUgdGhhdCB0aWNrcyB3ZXJlIHN1c3BlbmRlZFxyXG4gICAgICAgICAgICBhY3RpdmVJbnN0YW5jZXMuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLl9vbkRvY3VtZW50VmlzaWJpbGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBlbmdpbmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGxheTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGlzRG9jdW1lbnRIaWRkZW4oKSB7XHJcbiAgICByZXR1cm4gISFkb2N1bWVudCAmJiBkb2N1bWVudC5oaWRkZW47XHJcbn1cclxuXHJcbi8vIFB1YmxpYyBJbnN0YW5jZVxyXG5cclxuZnVuY3Rpb24gYW5pbWUocGFyYW1zKSB7XHJcbiAgICBpZiAocGFyYW1zID09PSB2b2lkIDApIHBhcmFtcyA9IHt9O1xyXG5cclxuXHJcbiAgICB2YXIgc3RhcnRUaW1lID0gMCxcclxuICAgICAgICBsYXN0VGltZSA9IDAsXHJcbiAgICAgICAgbm93ID0gMDtcclxuICAgIHZhciBjaGlsZHJlbiwgY2hpbGRyZW5MZW5ndGggPSAwO1xyXG4gICAgdmFyIHJlc29sdmUgPSBudWxsO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VQcm9taXNlKGluc3RhbmNlKSB7XHJcbiAgICAgICAgdmFyIHByb21pc2UgPSB3aW5kb3cuUHJvbWlzZSAmJiBuZXcgUHJvbWlzZShmdW5jdGlvbihfcmVzb2x2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSA9IF9yZXNvbHZlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGluc3RhbmNlLmZpbmlzaGVkID0gcHJvbWlzZTtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaW5zdGFuY2UgPSBjcmVhdGVOZXdJbnN0YW5jZShwYXJhbXMpO1xyXG4gICAgdmFyIHByb21pc2UgPSBtYWtlUHJvbWlzZShpbnN0YW5jZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGluc3RhbmNlLmRpcmVjdGlvbjtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uICE9PSAnYWx0ZXJuYXRlJykge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb24gIT09ICdub3JtYWwnID8gJ25vcm1hbCcgOiAncmV2ZXJzZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluc3RhbmNlLnJldmVyc2VkID0gIWluc3RhbmNlLnJldmVyc2VkO1xyXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkLnJldmVyc2VkID0gaW5zdGFuY2UucmV2ZXJzZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRqdXN0VGltZSh0aW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnJldmVyc2VkID8gaW5zdGFuY2UuZHVyYXRpb24gLSB0aW1lIDogdGltZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldFRpbWUoKSB7XHJcbiAgICAgICAgc3RhcnRUaW1lID0gMDtcclxuICAgICAgICBsYXN0VGltZSA9IGFkanVzdFRpbWUoaW5zdGFuY2UuY3VycmVudFRpbWUpICogKDEgLyBhbmltZS5zcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2Vla0NoaWxkKHRpbWUsIGNoaWxkKSB7XHJcbiAgICAgICAgaWYgKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnNlZWsodGltZSAtIGNoaWxkLnRpbWVsaW5lT2Zmc2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3luY0luc3RhbmNlQ2hpbGRyZW4odGltZSkge1xyXG4gICAgICAgIGlmICghaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc2Vla0NoaWxkKHRpbWUsIGNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkkMSA9IGNoaWxkcmVuTGVuZ3RoOyBpJDEtLTspIHtcclxuICAgICAgICAgICAgICAgIHNlZWtDaGlsZCh0aW1lLCBjaGlsZHJlbltpJDFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zVGltZSkge1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICB2YXIgYW5pbWF0aW9ucyA9IGluc3RhbmNlLmFuaW1hdGlvbnM7XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvbnNMZW5ndGggPSBhbmltYXRpb25zLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAoaSA8IGFuaW1hdGlvbnNMZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGFuaW0gPSBhbmltYXRpb25zW2ldO1xyXG4gICAgICAgICAgICB2YXIgYW5pbWF0YWJsZSA9IGFuaW0uYW5pbWF0YWJsZTtcclxuICAgICAgICAgICAgdmFyIHR3ZWVucyA9IGFuaW0udHdlZW5zO1xyXG4gICAgICAgICAgICB2YXIgdHdlZW5MZW5ndGggPSB0d2VlbnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgdmFyIHR3ZWVuID0gdHdlZW5zW3R3ZWVuTGVuZ3RoXTtcclxuICAgICAgICAgICAgLy8gT25seSBjaGVjayBmb3Iga2V5ZnJhbWVzIGlmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgdHdlZW5cclxuICAgICAgICAgICAgaWYgKHR3ZWVuTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0d2VlbiA9IGZpbHRlckFycmF5KHR3ZWVucywgZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoaW5zVGltZSA8IHQuZW5kKTtcclxuICAgICAgICAgICAgICAgIH0pWzBdIHx8IHR3ZWVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBlbGFwc2VkID0gbWluTWF4KGluc1RpbWUgLSB0d2Vlbi5zdGFydCAtIHR3ZWVuLmRlbGF5LCAwLCB0d2Vlbi5kdXJhdGlvbikgLyB0d2Vlbi5kdXJhdGlvbjtcclxuICAgICAgICAgICAgdmFyIGVhc2VkID0gaXNOYU4oZWxhcHNlZCkgPyAxIDogdHdlZW4uZWFzaW5nKGVsYXBzZWQpO1xyXG4gICAgICAgICAgICB2YXIgc3RyaW5ncyA9IHR3ZWVuLnRvLnN0cmluZ3M7XHJcbiAgICAgICAgICAgIHZhciByb3VuZCA9IHR3ZWVuLnJvdW5kO1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVycyA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgdG9OdW1iZXJzTGVuZ3RoID0gdHdlZW4udG8ubnVtYmVycy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9ICh2b2lkIDApO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHRvTnVtYmVyc0xlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSAodm9pZCAwKTtcclxuICAgICAgICAgICAgICAgIHZhciB0b051bWJlciA9IHR3ZWVuLnRvLm51bWJlcnNbbl07XHJcbiAgICAgICAgICAgICAgICB2YXIgZnJvbU51bWJlciA9IHR3ZWVuLmZyb20ubnVtYmVyc1tuXSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0d2Vlbi5pc1BhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGZyb21OdW1iZXIgKyAoZWFzZWQgKiAodG9OdW1iZXIgLSBmcm9tTnVtYmVyKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZ2V0UGF0aFByb2dyZXNzKHR3ZWVuLnZhbHVlLCBlYXNlZCAqIHRvTnVtYmVyLCB0d2Vlbi5pc1BhdGhUYXJnZXRJbnNpZGVTVkcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodHdlZW4uaXNDb2xvciAmJiBuID4gMikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlICogcm91bmQpIC8gcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbnVtYmVycy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBNYW51YWwgQXJyYXkucmVkdWNlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VzXHJcbiAgICAgICAgICAgIHZhciBzdHJpbmdzTGVuZ3RoID0gc3RyaW5ncy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmICghc3RyaW5nc0xlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBudW1iZXJzWzBdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBzdHJpbmdzWzBdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCBzdHJpbmdzTGVuZ3RoOyBzKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHN0cmluZ3Nbc107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSBzdHJpbmdzW3MgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbiQxID0gbnVtYmVyc1tzXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKG4kMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyArPSBuJDEgKyAnICc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyArPSBuJDEgKyBiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFByb2dyZXNzVmFsdWVbYW5pbS50eXBlXShhbmltYXRhYmxlLnRhcmdldCwgYW5pbS5wcm9wZXJ0eSwgcHJvZ3Jlc3MsIGFuaW1hdGFibGUudHJhbnNmb3Jtcyk7XHJcbiAgICAgICAgICAgIGFuaW0uY3VycmVudFZhbHVlID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q2FsbGJhY2soY2IpIHtcclxuICAgICAgICBpZiAoaW5zdGFuY2VbY2JdICYmICFpbnN0YW5jZS5wYXNzVGhyb3VnaCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZVtjYl0oaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb3VudEl0ZXJhdGlvbigpIHtcclxuICAgICAgICBpZiAoaW5zdGFuY2UucmVtYWluaW5nICYmIGluc3RhbmNlLnJlbWFpbmluZyAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5yZW1haW5pbmctLTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0SW5zdGFuY2VQcm9ncmVzcyhlbmdpbmVUaW1lKSB7XHJcbiAgICAgICAgdmFyIGluc0R1cmF0aW9uID0gaW5zdGFuY2UuZHVyYXRpb247XHJcbiAgICAgICAgdmFyIGluc0RlbGF5ID0gaW5zdGFuY2UuZGVsYXk7XHJcbiAgICAgICAgdmFyIGluc0VuZERlbGF5ID0gaW5zRHVyYXRpb24gLSBpbnN0YW5jZS5lbmREZWxheTtcclxuICAgICAgICB2YXIgaW5zVGltZSA9IGFkanVzdFRpbWUoZW5naW5lVGltZSk7XHJcbiAgICAgICAgaW5zdGFuY2UucHJvZ3Jlc3MgPSBtaW5NYXgoKGluc1RpbWUgLyBpbnNEdXJhdGlvbikgKiAxMDAsIDAsIDEwMCk7XHJcbiAgICAgICAgaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrID0gaW5zVGltZSA8IGluc3RhbmNlLmN1cnJlbnRUaW1lO1xyXG4gICAgICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICAgICAgICBzeW5jSW5zdGFuY2VDaGlsZHJlbihpbnNUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZS5iZWdhbiAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSA+IDApIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UuYmVnYW4gPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRDYWxsYmFjaygnYmVnaW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZS5sb29wQmVnYW4gJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldENhbGxiYWNrKCdsb29wQmVnaW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluc1RpbWUgPD0gaW5zRGVsYXkgJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgIT09IDApIHtcclxuICAgICAgICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKGluc1RpbWUgPj0gaW5zRW5kRGVsYXkgJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgIT09IGluc0R1cmF0aW9uKSB8fCAhaW5zRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc0R1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluc1RpbWUgPiBpbnNEZWxheSAmJiBpbnNUaW1lIDwgaW5zRW5kRGVsYXkpIHtcclxuICAgICAgICAgICAgaWYgKCFpbnN0YW5jZS5jaGFuZ2VCZWdhbikge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY2hhbmdlQmVnYW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzZXRDYWxsYmFjaygnY2hhbmdlQmVnaW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRDYWxsYmFjaygnY2hhbmdlJyk7XHJcbiAgICAgICAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNUaW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UuY2hhbmdlQmVnYW4pIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2NoYW5nZUNvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5zdGFuY2UuY3VycmVudFRpbWUgPSBtaW5NYXgoaW5zVGltZSwgMCwgaW5zRHVyYXRpb24pO1xyXG4gICAgICAgIGlmIChpbnN0YW5jZS5iZWdhbikge1xyXG4gICAgICAgICAgICBzZXRDYWxsYmFjaygndXBkYXRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbmdpbmVUaW1lID49IGluc0R1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGxhc3RUaW1lID0gMDtcclxuICAgICAgICAgICAgY291bnRJdGVyYXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKCFpbnN0YW5jZS5yZW1haW5pbmcpIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWluc3RhbmNlLmNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BDb21wbGV0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhbGxiYWNrKCdjb21wbGV0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5zdGFuY2UucGFzc1Rocm91Z2ggJiYgJ1Byb21pc2UnIGluIHdpbmRvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBtYWtlUHJvbWlzZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gbm93O1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BDb21wbGV0ZScpO1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UuZGlyZWN0aW9uID09PSAnYWx0ZXJuYXRlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5zdGFuY2UucmVzZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZGlyZWN0aW9uID0gaW5zdGFuY2UuZGlyZWN0aW9uO1xyXG4gICAgICAgIGluc3RhbmNlLnBhc3NUaHJvdWdoID0gZmFsc2U7XHJcbiAgICAgICAgaW5zdGFuY2UuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgIGluc3RhbmNlLnByb2dyZXNzID0gMDtcclxuICAgICAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgIGluc3RhbmNlLmJlZ2FuID0gZmFsc2U7XHJcbiAgICAgICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gZmFsc2U7XHJcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQmVnYW4gPSBmYWxzZTtcclxuICAgICAgICBpbnN0YW5jZS5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VDb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICBpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2sgPSBmYWxzZTtcclxuICAgICAgICBpbnN0YW5jZS5yZXZlcnNlZCA9IGRpcmVjdGlvbiA9PT0gJ3JldmVyc2UnO1xyXG4gICAgICAgIGluc3RhbmNlLnJlbWFpbmluZyA9IGluc3RhbmNlLmxvb3A7XHJcbiAgICAgICAgY2hpbGRyZW4gPSBpbnN0YW5jZS5jaGlsZHJlbjtcclxuICAgICAgICBjaGlsZHJlbkxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICBmb3IgKHZhciBpID0gY2hpbGRyZW5MZW5ndGg7IGktLTspIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UuY2hpbGRyZW5baV0ucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLnJldmVyc2VkICYmIGluc3RhbmNlLmxvb3AgIT09IHRydWUgfHwgKGRpcmVjdGlvbiA9PT0gJ2FsdGVybmF0ZScgJiYgaW5zdGFuY2UubG9vcCA9PT0gMSkpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UucmVtYWluaW5nKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnN0YW5jZS5yZXZlcnNlZCA/IGluc3RhbmNlLmR1cmF0aW9uIDogMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGludGVybmFsIG1ldGhvZCAoZm9yIGVuZ2luZSkgdG8gYWRqdXN0IGFuaW1hdGlvbiB0aW1pbmdzIGJlZm9yZSByZXN0b3JpbmcgZW5naW5lIHRpY2tzIChyQUYpXHJcbiAgICBpbnN0YW5jZS5fb25Eb2N1bWVudFZpc2liaWxpdHkgPSByZXNldFRpbWU7XHJcblxyXG4gICAgLy8gU2V0IFZhbHVlIGhlbHBlclxyXG5cclxuICAgIGluc3RhbmNlLnNldCA9IGZ1bmN0aW9uKHRhcmdldHMsIHByb3BlcnRpZXMpIHtcclxuICAgICAgICBzZXRUYXJnZXRzVmFsdWUodGFyZ2V0cywgcHJvcGVydGllcyk7XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnN0YW5jZS50aWNrID0gZnVuY3Rpb24odCkge1xyXG4gICAgICAgIG5vdyA9IHQ7XHJcbiAgICAgICAgaWYgKCFzdGFydFRpbWUpIHtcclxuICAgICAgICAgICAgc3RhcnRUaW1lID0gbm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJbnN0YW5jZVByb2dyZXNzKChub3cgKyAobGFzdFRpbWUgLSBzdGFydFRpbWUpKSAqIGFuaW1lLnNwZWVkKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2Uuc2VlayA9IGZ1bmN0aW9uKHRpbWUpIHtcclxuICAgICAgICBzZXRJbnN0YW5jZVByb2dyZXNzKGFkanVzdFRpbWUodGltZSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnN0YW5jZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgcmVzZXRUaW1lKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnBsYXkgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoIWluc3RhbmNlLnBhdXNlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbnN0YW5jZS5jb21wbGV0ZWQpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5zdGFuY2UucGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgYWN0aXZlSW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO1xyXG4gICAgICAgIHJlc2V0VGltZSgpO1xyXG4gICAgICAgIGVuZ2luZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnN0YW5jZS5yZXZlcnNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKTtcclxuICAgICAgICBpbnN0YW5jZS5jb21wbGV0ZWQgPSBpbnN0YW5jZS5yZXZlcnNlZCA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICByZXNldFRpbWUoKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2UucmVzdGFydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGluc3RhbmNlLnJlc2V0KCk7XHJcbiAgICAgICAgaW5zdGFuY2UucGxheSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnN0YW5jZS5yZW1vdmUgPSBmdW5jdGlvbih0YXJnZXRzKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldHNBcnJheSA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcclxuICAgICAgICByZW1vdmVUYXJnZXRzRnJvbUluc3RhbmNlKHRhcmdldHNBcnJheSwgaW5zdGFuY2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnN0YW5jZS5yZXNldCgpO1xyXG5cclxuICAgIGlmIChpbnN0YW5jZS5hdXRvcGxheSkge1xyXG4gICAgICAgIGluc3RhbmNlLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcblxyXG59XHJcblxyXG4vLyBSZW1vdmUgdGFyZ2V0cyBmcm9tIGFuaW1hdGlvblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9ucykge1xyXG4gICAgZm9yICh2YXIgYSA9IGFuaW1hdGlvbnMubGVuZ3RoOyBhLS07KSB7XHJcbiAgICAgICAgaWYgKGFycmF5Q29udGFpbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zW2FdLmFuaW1hdGFibGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBhbmltYXRpb25zLnNwbGljZShhLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UodGFyZ2V0c0FycmF5LCBpbnN0YW5jZSkge1xyXG4gICAgdmFyIGFuaW1hdGlvbnMgPSBpbnN0YW5jZS5hbmltYXRpb25zO1xyXG4gICAgdmFyIGNoaWxkcmVuID0gaW5zdGFuY2UuY2hpbGRyZW47XHJcbiAgICByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zKTtcclxuICAgIGZvciAodmFyIGMgPSBjaGlsZHJlbi5sZW5ndGg7IGMtLTspIHtcclxuICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltjXTtcclxuICAgICAgICB2YXIgY2hpbGRBbmltYXRpb25zID0gY2hpbGQuYW5pbWF0aW9ucztcclxuICAgICAgICByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnModGFyZ2V0c0FycmF5LCBjaGlsZEFuaW1hdGlvbnMpO1xyXG4gICAgICAgIGlmICghY2hpbGRBbmltYXRpb25zLmxlbmd0aCAmJiAhY2hpbGQuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuLnNwbGljZShjLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWFuaW1hdGlvbnMubGVuZ3RoICYmICFjaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICBpbnN0YW5jZS5wYXVzZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVUYXJnZXRzRnJvbUFjdGl2ZUluc3RhbmNlcyh0YXJnZXRzKSB7XHJcbiAgICB2YXIgdGFyZ2V0c0FycmF5ID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xyXG4gICAgZm9yICh2YXIgaSA9IGFjdGl2ZUluc3RhbmNlcy5sZW5ndGg7IGktLTspIHtcclxuICAgICAgICB2YXIgaW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZXNbaV07XHJcbiAgICAgICAgcmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSh0YXJnZXRzQXJyYXksIGluc3RhbmNlKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gU3RhZ2dlciBoZWxwZXJzXHJcblxyXG5mdW5jdGlvbiBzdGFnZ2VyKHZhbCwgcGFyYW1zKSB7XHJcbiAgICBpZiAocGFyYW1zID09PSB2b2lkIDApIHBhcmFtcyA9IHt9O1xyXG5cclxuICAgIHZhciBkaXJlY3Rpb24gPSBwYXJhbXMuZGlyZWN0aW9uIHx8ICdub3JtYWwnO1xyXG4gICAgdmFyIGVhc2luZyA9IHBhcmFtcy5lYXNpbmcgPyBwYXJzZUVhc2luZ3MocGFyYW1zLmVhc2luZykgOiBudWxsO1xyXG4gICAgdmFyIGdyaWQgPSBwYXJhbXMuZ3JpZDtcclxuICAgIHZhciBheGlzID0gcGFyYW1zLmF4aXM7XHJcbiAgICB2YXIgZnJvbUluZGV4ID0gcGFyYW1zLmZyb20gfHwgMDtcclxuICAgIHZhciBmcm9tRmlyc3QgPSBmcm9tSW5kZXggPT09ICdmaXJzdCc7XHJcbiAgICB2YXIgZnJvbUNlbnRlciA9IGZyb21JbmRleCA9PT0gJ2NlbnRlcic7XHJcbiAgICB2YXIgZnJvbUxhc3QgPSBmcm9tSW5kZXggPT09ICdsYXN0JztcclxuICAgIHZhciBpc1JhbmdlID0gaXMuYXJyKHZhbCk7XHJcbiAgICB2YXIgdmFsMSA9IGlzUmFuZ2UgPyBwYXJzZUZsb2F0KHZhbFswXSkgOiBwYXJzZUZsb2F0KHZhbCk7XHJcbiAgICB2YXIgdmFsMiA9IGlzUmFuZ2UgPyBwYXJzZUZsb2F0KHZhbFsxXSkgOiAwO1xyXG4gICAgdmFyIHVuaXQgPSBnZXRVbml0KGlzUmFuZ2UgPyB2YWxbMV0gOiB2YWwpIHx8IDA7XHJcbiAgICB2YXIgc3RhcnQgPSBwYXJhbXMuc3RhcnQgfHwgMCArIChpc1JhbmdlID8gdmFsMSA6IDApO1xyXG4gICAgdmFyIHZhbHVlcyA9IFtdO1xyXG4gICAgdmFyIG1heFZhbHVlID0gMDtcclxuICAgIHJldHVybiBmdW5jdGlvbihlbCwgaSwgdCkge1xyXG4gICAgICAgIGlmIChmcm9tRmlyc3QpIHtcclxuICAgICAgICAgICAgZnJvbUluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZyb21DZW50ZXIpIHtcclxuICAgICAgICAgICAgZnJvbUluZGV4ID0gKHQgLSAxKSAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmcm9tTGFzdCkge1xyXG4gICAgICAgICAgICBmcm9tSW5kZXggPSB0IC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF2YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWdyaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChNYXRoLmFicyhmcm9tSW5kZXggLSBpbmRleCkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZnJvbVggPSAhZnJvbUNlbnRlciA/IGZyb21JbmRleCAlIGdyaWRbMF0gOiAoZ3JpZFswXSAtIDEpIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZnJvbVkgPSAhZnJvbUNlbnRlciA/IE1hdGguZmxvb3IoZnJvbUluZGV4IC8gZ3JpZFswXSkgOiAoZ3JpZFsxXSAtIDEpIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG9YID0gaW5kZXggJSBncmlkWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b1kgPSBNYXRoLmZsb29yKGluZGV4IC8gZ3JpZFswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWCA9IGZyb21YIC0gdG9YO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZVkgPSBmcm9tWSAtIHRvWTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBNYXRoLnNxcnQoZGlzdGFuY2VYICogZGlzdGFuY2VYICsgZGlzdGFuY2VZICogZGlzdGFuY2VZKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gLWRpc3RhbmNlWDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF4aXMgPT09ICd5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IC1kaXN0YW5jZVk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1heFZhbHVlID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgdmFsdWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWFzaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlYXNpbmcodmFsIC8gbWF4VmFsdWUpICogbWF4VmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncmV2ZXJzZScpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF4aXMgPyAodmFsIDwgMCkgPyB2YWwgKiAtMSA6IC12YWwgOiBNYXRoLmFicyhtYXhWYWx1ZSAtIHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3BhY2luZyA9IGlzUmFuZ2UgPyAodmFsMiAtIHZhbDEpIC8gbWF4VmFsdWUgOiB2YWwxO1xyXG4gICAgICAgIHJldHVybiBzdGFydCArIChzcGFjaW5nICogKE1hdGgucm91bmQodmFsdWVzW2ldICogMTAwKSAvIDEwMCkpICsgdW5pdDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gVGltZWxpbmVcclxuXHJcbmZ1bmN0aW9uIHRpbWVsaW5lKHBhcmFtcykge1xyXG4gICAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSBwYXJhbXMgPSB7fTtcclxuXHJcbiAgICB2YXIgdGwgPSBhbmltZShwYXJhbXMpO1xyXG4gICAgdGwuZHVyYXRpb24gPSAwO1xyXG4gICAgdGwuYWRkID0gZnVuY3Rpb24oaW5zdGFuY2VQYXJhbXMsIHRpbWVsaW5lT2Zmc2V0KSB7XHJcbiAgICAgICAgdmFyIHRsSW5kZXggPSBhY3RpdmVJbnN0YW5jZXMuaW5kZXhPZih0bCk7XHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGwuY2hpbGRyZW47XHJcbiAgICAgICAgaWYgKHRsSW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICBhY3RpdmVJbnN0YW5jZXMuc3BsaWNlKHRsSW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGFzc1Rocm91Z2goaW5zKSB7XHJcbiAgICAgICAgICAgIGlucy5wYXNzVGhyb3VnaCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcGFzc1Rocm91Z2goY2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaW5zUGFyYW1zID0gbWVyZ2VPYmplY3RzKGluc3RhbmNlUGFyYW1zLCByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdFR3ZWVuU2V0dGluZ3MsIHBhcmFtcykpO1xyXG4gICAgICAgIGluc1BhcmFtcy50YXJnZXRzID0gaW5zUGFyYW1zLnRhcmdldHMgfHwgcGFyYW1zLnRhcmdldHM7XHJcbiAgICAgICAgdmFyIHRsRHVyYXRpb24gPSB0bC5kdXJhdGlvbjtcclxuICAgICAgICBpbnNQYXJhbXMuYXV0b3BsYXkgPSBmYWxzZTtcclxuICAgICAgICBpbnNQYXJhbXMuZGlyZWN0aW9uID0gdGwuZGlyZWN0aW9uO1xyXG4gICAgICAgIGluc1BhcmFtcy50aW1lbGluZU9mZnNldCA9IGlzLnVuZCh0aW1lbGluZU9mZnNldCkgPyB0bER1cmF0aW9uIDogZ2V0UmVsYXRpdmVWYWx1ZSh0aW1lbGluZU9mZnNldCwgdGxEdXJhdGlvbik7XHJcbiAgICAgICAgcGFzc1Rocm91Z2godGwpO1xyXG4gICAgICAgIHRsLnNlZWsoaW5zUGFyYW1zLnRpbWVsaW5lT2Zmc2V0KTtcclxuICAgICAgICB2YXIgaW5zID0gYW5pbWUoaW5zUGFyYW1zKTtcclxuICAgICAgICBwYXNzVGhyb3VnaChpbnMpO1xyXG4gICAgICAgIGNoaWxkcmVuLnB1c2goaW5zKTtcclxuICAgICAgICB2YXIgdGltaW5ncyA9IGdldEluc3RhbmNlVGltaW5ncyhjaGlsZHJlbiwgcGFyYW1zKTtcclxuICAgICAgICB0bC5kZWxheSA9IHRpbWluZ3MuZGVsYXk7XHJcbiAgICAgICAgdGwuZW5kRGVsYXkgPSB0aW1pbmdzLmVuZERlbGF5O1xyXG4gICAgICAgIHRsLmR1cmF0aW9uID0gdGltaW5ncy5kdXJhdGlvbjtcclxuICAgICAgICB0bC5zZWVrKDApO1xyXG4gICAgICAgIHRsLnJlc2V0KCk7XHJcbiAgICAgICAgaWYgKHRsLmF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgIHRsLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB0bDtcclxufVxyXG5cclxuYW5pbWUudmVyc2lvbiA9ICczLjIuMSc7XHJcbmFuaW1lLnNwZWVkID0gMTtcclxuLy8gVE9ETzojcmV2aWV3OiBuYW1pbmcsIGRvY3VtZW50YXRpb25cclxuYW5pbWUuc3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbiA9IHRydWU7XHJcbmFuaW1lLnJ1bm5pbmcgPSBhY3RpdmVJbnN0YW5jZXM7XHJcbmFuaW1lLnJlbW92ZSA9IHJlbW92ZVRhcmdldHNGcm9tQWN0aXZlSW5zdGFuY2VzO1xyXG5hbmltZS5nZXQgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlO1xyXG5hbmltZS5zZXQgPSBzZXRUYXJnZXRzVmFsdWU7XHJcbmFuaW1lLmNvbnZlcnRQeCA9IGNvbnZlcnRQeFRvVW5pdDtcclxuYW5pbWUucGF0aCA9IGdldFBhdGg7XHJcbmFuaW1lLnNldERhc2hvZmZzZXQgPSBzZXREYXNob2Zmc2V0O1xyXG5hbmltZS5zdGFnZ2VyID0gc3RhZ2dlcjtcclxuYW5pbWUudGltZWxpbmUgPSB0aW1lbGluZTtcclxuYW5pbWUuZWFzaW5nID0gcGFyc2VFYXNpbmdzO1xyXG5hbmltZS5wZW5uZXIgPSBwZW5uZXI7XHJcbmFuaW1lLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYW5pbWU7XHJcbiIsIi8qIVxyXG5XYXlwb2ludHMgLSA0LjAuMVxyXG5Db3B5cmlnaHQgwqkgMjAxMS0yMDE2IENhbGViIFRyb3VnaHRvblxyXG5MaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9pbWFrZXdlYnRoaW5ncy93YXlwb2ludHMvYmxvYi9tYXN0ZXIvbGljZW5zZXMudHh0XHJcbiovXHJcbihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0J1xyXG5cclxuICAgIHZhciBrZXlDb3VudGVyID0gMFxyXG4gICAgdmFyIGFsbFdheXBvaW50cyA9IHt9XHJcblxyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL3dheXBvaW50ICovXHJcbiAgICBmdW5jdGlvbiBXYXlwb2ludChvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gb3B0aW9ucyBwYXNzZWQgdG8gV2F5cG9pbnQgY29uc3RydWN0b3InKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9wdGlvbnMuZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGVsZW1lbnQgb3B0aW9uIHBhc3NlZCB0byBXYXlwb2ludCBjb25zdHJ1Y3RvcicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb3B0aW9ucy5oYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gaGFuZGxlciBvcHRpb24gcGFzc2VkIHRvIFdheXBvaW50IGNvbnN0cnVjdG9yJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMua2V5ID0gJ3dheXBvaW50LScgKyBrZXlDb3VudGVyXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gV2F5cG9pbnQuQWRhcHRlci5leHRlbmQoe30sIFdheXBvaW50LmRlZmF1bHRzLCBvcHRpb25zKVxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMub3B0aW9ucy5lbGVtZW50XHJcbiAgICAgICAgdGhpcy5hZGFwdGVyID0gbmV3IFdheXBvaW50LkFkYXB0ZXIodGhpcy5lbGVtZW50KVxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBvcHRpb25zLmhhbmRsZXJcclxuICAgICAgICB0aGlzLmF4aXMgPSB0aGlzLm9wdGlvbnMuaG9yaXpvbnRhbCA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCdcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLm9wdGlvbnMuZW5hYmxlZFxyXG4gICAgICAgIHRoaXMudHJpZ2dlclBvaW50ID0gbnVsbFxyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBXYXlwb2ludC5Hcm91cC5maW5kT3JDcmVhdGUoe1xyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm9wdGlvbnMuZ3JvdXAsXHJcbiAgICAgICAgICAgIGF4aXM6IHRoaXMuYXhpc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gV2F5cG9pbnQuQ29udGV4dC5maW5kT3JDcmVhdGVCeUVsZW1lbnQodGhpcy5vcHRpb25zLmNvbnRleHQpXHJcblxyXG4gICAgICAgIGlmIChXYXlwb2ludC5vZmZzZXRBbGlhc2VzW3RoaXMub3B0aW9ucy5vZmZzZXRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vZmZzZXQgPSBXYXlwb2ludC5vZmZzZXRBbGlhc2VzW3RoaXMub3B0aW9ucy5vZmZzZXRdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMpXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFkZCh0aGlzKVxyXG4gICAgICAgIGFsbFdheXBvaW50c1t0aGlzLmtleV0gPSB0aGlzXHJcbiAgICAgICAga2V5Q291bnRlciArPSAxXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgV2F5cG9pbnQucHJvdG90eXBlLnF1ZXVlVHJpZ2dlciA9IGZ1bmN0aW9uKGRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuZ3JvdXAucXVldWVUcmlnZ2VyKHRoaXMsIGRpcmVjdGlvbilcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBXYXlwb2ludC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFjay5hcHBseSh0aGlzLCBhcmdzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9kZXN0cm95ICovXHJcbiAgICBXYXlwb2ludC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5yZW1vdmUodGhpcylcclxuICAgICAgICB0aGlzLmdyb3VwLnJlbW92ZSh0aGlzKVxyXG4gICAgICAgIGRlbGV0ZSBhbGxXYXlwb2ludHNbdGhpcy5rZXldXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZGlzYWJsZSAqL1xyXG4gICAgV2F5cG9pbnQucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZW5hYmxlICovXHJcbiAgICBXYXlwb2ludC5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnJlZnJlc2goKVxyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL25leHQgKi9cclxuICAgIFdheXBvaW50LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXAubmV4dCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL3ByZXZpb3VzICovXHJcbiAgICBXYXlwb2ludC5wcm90b3R5cGUucHJldmlvdXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncm91cC5wcmV2aW91cyh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIFdheXBvaW50Lmludm9rZUFsbCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xyXG4gICAgICAgIHZhciBhbGxXYXlwb2ludHNBcnJheSA9IFtdXHJcbiAgICAgICAgZm9yICh2YXIgd2F5cG9pbnRLZXkgaW4gYWxsV2F5cG9pbnRzKSB7XHJcbiAgICAgICAgICAgIGFsbFdheXBvaW50c0FycmF5LnB1c2goYWxsV2F5cG9pbnRzW3dheXBvaW50S2V5XSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGVuZCA9IGFsbFdheXBvaW50c0FycmF5Lmxlbmd0aDsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFsbFdheXBvaW50c0FycmF5W2ldW21ldGhvZF0oKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9kZXN0cm95LWFsbCAqL1xyXG4gICAgV2F5cG9pbnQuZGVzdHJveUFsbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFdheXBvaW50Lmludm9rZUFsbCgnZGVzdHJveScpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZGlzYWJsZS1hbGwgKi9cclxuICAgIFdheXBvaW50LmRpc2FibGVBbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBXYXlwb2ludC5pbnZva2VBbGwoJ2Rpc2FibGUnKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2VuYWJsZS1hbGwgKi9cclxuICAgIFdheXBvaW50LmVuYWJsZUFsbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFdheXBvaW50LkNvbnRleHQucmVmcmVzaEFsbCgpXHJcbiAgICAgICAgZm9yICh2YXIgd2F5cG9pbnRLZXkgaW4gYWxsV2F5cG9pbnRzKSB7XHJcbiAgICAgICAgICAgIGFsbFdheXBvaW50c1t3YXlwb2ludEtleV0uZW5hYmxlZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9yZWZyZXNoLWFsbCAqL1xyXG4gICAgV2F5cG9pbnQucmVmcmVzaEFsbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFdheXBvaW50LkNvbnRleHQucmVmcmVzaEFsbCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvdmlld3BvcnQtaGVpZ2h0ICovXHJcbiAgICBXYXlwb2ludC52aWV3cG9ydEhlaWdodCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL3ZpZXdwb3J0LXdpZHRoICovXHJcbiAgICBXYXlwb2ludC52aWV3cG9ydFdpZHRoID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxyXG4gICAgfVxyXG5cclxuICAgIFdheXBvaW50LmFkYXB0ZXJzID0gW11cclxuXHJcbiAgICBXYXlwb2ludC5kZWZhdWx0cyA9IHtcclxuICAgICAgICBjb250ZXh0OiB3aW5kb3csXHJcbiAgICAgICAgY29udGludW91czogdHJ1ZSxcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIGdyb3VwOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXHJcbiAgICAgICAgb2Zmc2V0OiAwXHJcbiAgICB9XHJcblxyXG4gICAgV2F5cG9pbnQub2Zmc2V0QWxpYXNlcyA9IHtcclxuICAgICAgICAnYm90dG9tLWluLXZpZXcnOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5pbm5lckhlaWdodCgpIC0gdGhpcy5hZGFwdGVyLm91dGVySGVpZ2h0KClcclxuICAgICAgICB9LFxyXG4gICAgICAgICdyaWdodC1pbi12aWV3JzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuaW5uZXJXaWR0aCgpIC0gdGhpcy5hZGFwdGVyLm91dGVyV2lkdGgoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuV2F5cG9pbnQgPSBXYXlwb2ludFxyXG59KCkpO1xyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCdcclxuXHJcbiAgICBmdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVTaGltKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MClcclxuICAgIH1cclxuXHJcbiAgICB2YXIga2V5Q291bnRlciA9IDBcclxuICAgIHZhciBjb250ZXh0cyA9IHt9XHJcbiAgICB2YXIgV2F5cG9pbnQgPSB3aW5kb3cuV2F5cG9pbnRcclxuICAgIHZhciBvbGRXaW5kb3dMb2FkID0gd2luZG93Lm9ubG9hZFxyXG5cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9jb250ZXh0ICovXHJcbiAgICBmdW5jdGlvbiBDb250ZXh0KGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5BZGFwdGVyID0gV2F5cG9pbnQuQWRhcHRlclxyXG4gICAgICAgIHRoaXMuYWRhcHRlciA9IG5ldyB0aGlzLkFkYXB0ZXIoZWxlbWVudClcclxuICAgICAgICB0aGlzLmtleSA9ICd3YXlwb2ludC1jb250ZXh0LScgKyBrZXlDb3VudGVyXHJcbiAgICAgICAgdGhpcy5kaWRTY3JvbGwgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZGlkUmVzaXplID0gZmFsc2VcclxuICAgICAgICB0aGlzLm9sZFNjcm9sbCA9IHtcclxuICAgICAgICAgICAgeDogdGhpcy5hZGFwdGVyLnNjcm9sbExlZnQoKSxcclxuICAgICAgICAgICAgeTogdGhpcy5hZGFwdGVyLnNjcm9sbFRvcCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2F5cG9pbnRzID0ge1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbDoge30sXHJcbiAgICAgICAgICAgIGhvcml6b250YWw6IHt9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtZW50LndheXBvaW50Q29udGV4dEtleSA9IHRoaXMua2V5XHJcbiAgICAgICAgY29udGV4dHNbZWxlbWVudC53YXlwb2ludENvbnRleHRLZXldID0gdGhpc1xyXG4gICAgICAgIGtleUNvdW50ZXIgKz0gMVxyXG4gICAgICAgIGlmICghV2F5cG9pbnQud2luZG93Q29udGV4dCkge1xyXG4gICAgICAgICAgICBXYXlwb2ludC53aW5kb3dDb250ZXh0ID0gdHJ1ZVxyXG4gICAgICAgICAgICBXYXlwb2ludC53aW5kb3dDb250ZXh0ID0gbmV3IENvbnRleHQod2luZG93KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVUaHJvdHRsZWRTY3JvbGxIYW5kbGVyKClcclxuICAgICAgICB0aGlzLmNyZWF0ZVRocm90dGxlZFJlc2l6ZUhhbmRsZXIoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHdheXBvaW50KSB7XHJcbiAgICAgICAgdmFyIGF4aXMgPSB3YXlwb2ludC5vcHRpb25zLmhvcml6b250YWwgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnXHJcbiAgICAgICAgdGhpcy53YXlwb2ludHNbYXhpc11bd2F5cG9pbnQua2V5XSA9IHdheXBvaW50XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoKClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5jaGVja0VtcHR5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGhvcml6b250YWxFbXB0eSA9IHRoaXMuQWRhcHRlci5pc0VtcHR5T2JqZWN0KHRoaXMud2F5cG9pbnRzLmhvcml6b250YWwpXHJcbiAgICAgICAgdmFyIHZlcnRpY2FsRW1wdHkgPSB0aGlzLkFkYXB0ZXIuaXNFbXB0eU9iamVjdCh0aGlzLndheXBvaW50cy52ZXJ0aWNhbClcclxuICAgICAgICB2YXIgaXNXaW5kb3cgPSB0aGlzLmVsZW1lbnQgPT0gdGhpcy5lbGVtZW50LndpbmRvd1xyXG4gICAgICAgIGlmIChob3Jpem9udGFsRW1wdHkgJiYgdmVydGljYWxFbXB0eSAmJiAhaXNXaW5kb3cpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLm9mZignLndheXBvaW50cycpXHJcbiAgICAgICAgICAgIGRlbGV0ZSBjb250ZXh0c1t0aGlzLmtleV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlVGhyb3R0bGVkUmVzaXplSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpc1xyXG5cclxuICAgICAgICBmdW5jdGlvbiByZXNpemVIYW5kbGVyKCkge1xyXG4gICAgICAgICAgICBzZWxmLmhhbmRsZVJlc2l6ZSgpXHJcbiAgICAgICAgICAgIHNlbGYuZGlkUmVzaXplID0gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWRhcHRlci5vbigncmVzaXplLndheXBvaW50cycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYuZGlkUmVzaXplKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRpZFJlc2l6ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIFdheXBvaW50LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXNpemVIYW5kbGVyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5jcmVhdGVUaHJvdHRsZWRTY3JvbGxIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuaGFuZGxlU2Nyb2xsKClcclxuICAgICAgICAgICAgc2VsZi5kaWRTY3JvbGwgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hZGFwdGVyLm9uKCdzY3JvbGwud2F5cG9pbnRzJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghc2VsZi5kaWRTY3JvbGwgfHwgV2F5cG9pbnQuaXNUb3VjaCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kaWRTY3JvbGwgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBXYXlwb2ludC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2Nyb2xsSGFuZGxlcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuaGFuZGxlUmVzaXplID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgV2F5cG9pbnQuQ29udGV4dC5yZWZyZXNoQWxsKClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5oYW5kbGVTY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgdHJpZ2dlcmVkR3JvdXBzID0ge31cclxuICAgICAgICB2YXIgYXhlcyA9IHtcclxuICAgICAgICAgICAgaG9yaXpvbnRhbDoge1xyXG4gICAgICAgICAgICAgICAgbmV3U2Nyb2xsOiB0aGlzLmFkYXB0ZXIuc2Nyb2xsTGVmdCgpLFxyXG4gICAgICAgICAgICAgICAgb2xkU2Nyb2xsOiB0aGlzLm9sZFNjcm9sbC54LFxyXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiAnbGVmdCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmVydGljYWw6IHtcclxuICAgICAgICAgICAgICAgIG5ld1Njcm9sbDogdGhpcy5hZGFwdGVyLnNjcm9sbFRvcCgpLFxyXG4gICAgICAgICAgICAgICAgb2xkU2Nyb2xsOiB0aGlzLm9sZFNjcm9sbC55LFxyXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogJ2Rvd24nLFxyXG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6ICd1cCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgYXhpc0tleSBpbiBheGVzKSB7XHJcbiAgICAgICAgICAgIHZhciBheGlzID0gYXhlc1theGlzS2V5XVxyXG4gICAgICAgICAgICB2YXIgaXNGb3J3YXJkID0gYXhpcy5uZXdTY3JvbGwgPiBheGlzLm9sZFNjcm9sbFxyXG4gICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gaXNGb3J3YXJkID8gYXhpcy5mb3J3YXJkIDogYXhpcy5iYWNrd2FyZFxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgd2F5cG9pbnRLZXkgaW4gdGhpcy53YXlwb2ludHNbYXhpc0tleV0pIHtcclxuICAgICAgICAgICAgICAgIHZhciB3YXlwb2ludCA9IHRoaXMud2F5cG9pbnRzW2F4aXNLZXldW3dheXBvaW50S2V5XVxyXG4gICAgICAgICAgICAgICAgaWYgKHdheXBvaW50LnRyaWdnZXJQb2ludCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgd2FzQmVmb3JlVHJpZ2dlclBvaW50ID0gYXhpcy5vbGRTY3JvbGwgPCB3YXlwb2ludC50cmlnZ2VyUG9pbnRcclxuICAgICAgICAgICAgICAgIHZhciBub3dBZnRlclRyaWdnZXJQb2ludCA9IGF4aXMubmV3U2Nyb2xsID49IHdheXBvaW50LnRyaWdnZXJQb2ludFxyXG4gICAgICAgICAgICAgICAgdmFyIGNyb3NzZWRGb3J3YXJkID0gd2FzQmVmb3JlVHJpZ2dlclBvaW50ICYmIG5vd0FmdGVyVHJpZ2dlclBvaW50XHJcbiAgICAgICAgICAgICAgICB2YXIgY3Jvc3NlZEJhY2t3YXJkID0gIXdhc0JlZm9yZVRyaWdnZXJQb2ludCAmJiAhbm93QWZ0ZXJUcmlnZ2VyUG9pbnRcclxuICAgICAgICAgICAgICAgIGlmIChjcm9zc2VkRm9yd2FyZCB8fCBjcm9zc2VkQmFja3dhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YXlwb2ludC5xdWV1ZVRyaWdnZXIoZGlyZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJlZEdyb3Vwc1t3YXlwb2ludC5ncm91cC5pZF0gPSB3YXlwb2ludC5ncm91cFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBncm91cEtleSBpbiB0cmlnZ2VyZWRHcm91cHMpIHtcclxuICAgICAgICAgICAgdHJpZ2dlcmVkR3JvdXBzW2dyb3VwS2V5XS5mbHVzaFRyaWdnZXJzKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub2xkU2Nyb2xsID0ge1xyXG4gICAgICAgICAgICB4OiBheGVzLmhvcml6b250YWwubmV3U2Nyb2xsLFxyXG4gICAgICAgICAgICB5OiBheGVzLnZlcnRpY2FsLm5ld1Njcm9sbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5pbm5lckhlaWdodCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8qZXNsaW50LWRpc2FibGUgZXFlcWVxICovXHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCA9PSB0aGlzLmVsZW1lbnQud2luZG93KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBXYXlwb2ludC52aWV3cG9ydEhlaWdodCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cclxuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmlubmVySGVpZ2h0KClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbih3YXlwb2ludCkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLndheXBvaW50c1t3YXlwb2ludC5heGlzXVt3YXlwb2ludC5rZXldXHJcbiAgICAgICAgdGhpcy5jaGVja0VtcHR5KClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5pbm5lcldpZHRoID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLyplc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50ID09IHRoaXMuZWxlbWVudC53aW5kb3cpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdheXBvaW50LnZpZXdwb3J0V2lkdGgoKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKmVzbGludC1lbmFibGUgZXFlcWVxICovXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5pbm5lcldpZHRoKClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9jb250ZXh0LWRlc3Ryb3kgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgYWxsV2F5cG9pbnRzID0gW11cclxuICAgICAgICBmb3IgKHZhciBheGlzIGluIHRoaXMud2F5cG9pbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHdheXBvaW50S2V5IGluIHRoaXMud2F5cG9pbnRzW2F4aXNdKSB7XHJcbiAgICAgICAgICAgICAgICBhbGxXYXlwb2ludHMucHVzaCh0aGlzLndheXBvaW50c1theGlzXVt3YXlwb2ludEtleV0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGVuZCA9IGFsbFdheXBvaW50cy5sZW5ndGg7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICAgICAgICBhbGxXYXlwb2ludHNbaV0uZGVzdHJveSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2NvbnRleHQtcmVmcmVzaCAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8qZXNsaW50LWRpc2FibGUgZXFlcWVxICovXHJcbiAgICAgICAgdmFyIGlzV2luZG93ID0gdGhpcy5lbGVtZW50ID09IHRoaXMuZWxlbWVudC53aW5kb3dcclxuICAgICAgICAvKmVzbGludC1lbmFibGUgZXFlcWVxICovXHJcbiAgICAgICAgdmFyIGNvbnRleHRPZmZzZXQgPSBpc1dpbmRvdyA/IHVuZGVmaW5lZCA6IHRoaXMuYWRhcHRlci5vZmZzZXQoKVxyXG4gICAgICAgIHZhciB0cmlnZ2VyZWRHcm91cHMgPSB7fVxyXG4gICAgICAgIHZhciBheGVzXHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKClcclxuICAgICAgICBheGVzID0ge1xyXG4gICAgICAgICAgICBob3Jpem9udGFsOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0T2Zmc2V0OiBpc1dpbmRvdyA/IDAgOiBjb250ZXh0T2Zmc2V0LmxlZnQsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0U2Nyb2xsOiBpc1dpbmRvdyA/IDAgOiB0aGlzLm9sZFNjcm9sbC54LFxyXG4gICAgICAgICAgICAgICAgY29udGV4dERpbWVuc2lvbjogdGhpcy5pbm5lcldpZHRoKCksXHJcbiAgICAgICAgICAgICAgICBvbGRTY3JvbGw6IHRoaXMub2xkU2Nyb2xsLngsXHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgIG9mZnNldFByb3A6ICdsZWZ0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbDoge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE9mZnNldDogaXNXaW5kb3cgPyAwIDogY29udGV4dE9mZnNldC50b3AsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0U2Nyb2xsOiBpc1dpbmRvdyA/IDAgOiB0aGlzLm9sZFNjcm9sbC55LFxyXG4gICAgICAgICAgICAgICAgY29udGV4dERpbWVuc2lvbjogdGhpcy5pbm5lckhlaWdodCgpLFxyXG4gICAgICAgICAgICAgICAgb2xkU2Nyb2xsOiB0aGlzLm9sZFNjcm9sbC55LFxyXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogJ2Rvd24nLFxyXG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6ICd1cCcsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRQcm9wOiAndG9wJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBheGlzS2V5IGluIGF4ZXMpIHtcclxuICAgICAgICAgICAgdmFyIGF4aXMgPSBheGVzW2F4aXNLZXldXHJcbiAgICAgICAgICAgIGZvciAodmFyIHdheXBvaW50S2V5IGluIHRoaXMud2F5cG9pbnRzW2F4aXNLZXldKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2F5cG9pbnQgPSB0aGlzLndheXBvaW50c1theGlzS2V5XVt3YXlwb2ludEtleV1cclxuICAgICAgICAgICAgICAgIHZhciBhZGp1c3RtZW50ID0gd2F5cG9pbnQub3B0aW9ucy5vZmZzZXRcclxuICAgICAgICAgICAgICAgIHZhciBvbGRUcmlnZ2VyUG9pbnQgPSB3YXlwb2ludC50cmlnZ2VyUG9pbnRcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50T2Zmc2V0ID0gMFxyXG4gICAgICAgICAgICAgICAgdmFyIGZyZXNoV2F5cG9pbnQgPSBvbGRUcmlnZ2VyUG9pbnQgPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRleHRNb2RpZmllciwgd2FzQmVmb3JlU2Nyb2xsLCBub3dBZnRlclNjcm9sbFxyXG4gICAgICAgICAgICAgICAgdmFyIHRyaWdnZXJlZEJhY2t3YXJkLCB0cmlnZ2VyZWRGb3J3YXJkXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHdheXBvaW50LmVsZW1lbnQgIT09IHdheXBvaW50LmVsZW1lbnQud2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudE9mZnNldCA9IHdheXBvaW50LmFkYXB0ZXIub2Zmc2V0KClbYXhpcy5vZmZzZXRQcm9wXVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYWRqdXN0bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdG1lbnQgPSBhZGp1c3RtZW50LmFwcGx5KHdheXBvaW50KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYWRqdXN0bWVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3RtZW50ID0gcGFyc2VGbG9hdChhZGp1c3RtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3YXlwb2ludC5vcHRpb25zLm9mZnNldC5pbmRleE9mKCclJykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3RtZW50ID0gTWF0aC5jZWlsKGF4aXMuY29udGV4dERpbWVuc2lvbiAqIGFkanVzdG1lbnQgLyAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRleHRNb2RpZmllciA9IGF4aXMuY29udGV4dFNjcm9sbCAtIGF4aXMuY29udGV4dE9mZnNldFxyXG4gICAgICAgICAgICAgICAgd2F5cG9pbnQudHJpZ2dlclBvaW50ID0gTWF0aC5mbG9vcihlbGVtZW50T2Zmc2V0ICsgY29udGV4dE1vZGlmaWVyIC0gYWRqdXN0bWVudClcclxuICAgICAgICAgICAgICAgIHdhc0JlZm9yZVNjcm9sbCA9IG9sZFRyaWdnZXJQb2ludCA8IGF4aXMub2xkU2Nyb2xsXHJcbiAgICAgICAgICAgICAgICBub3dBZnRlclNjcm9sbCA9IHdheXBvaW50LnRyaWdnZXJQb2ludCA+PSBheGlzLm9sZFNjcm9sbFxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcmVkQmFja3dhcmQgPSB3YXNCZWZvcmVTY3JvbGwgJiYgbm93QWZ0ZXJTY3JvbGxcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJlZEZvcndhcmQgPSAhd2FzQmVmb3JlU2Nyb2xsICYmICFub3dBZnRlclNjcm9sbFxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZnJlc2hXYXlwb2ludCAmJiB0cmlnZ2VyZWRCYWNrd2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdheXBvaW50LnF1ZXVlVHJpZ2dlcihheGlzLmJhY2t3YXJkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJlZEdyb3Vwc1t3YXlwb2ludC5ncm91cC5pZF0gPSB3YXlwb2ludC5ncm91cFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghZnJlc2hXYXlwb2ludCAmJiB0cmlnZ2VyZWRGb3J3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2F5cG9pbnQucXVldWVUcmlnZ2VyKGF4aXMuZm9yd2FyZClcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyZWRHcm91cHNbd2F5cG9pbnQuZ3JvdXAuaWRdID0gd2F5cG9pbnQuZ3JvdXBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZnJlc2hXYXlwb2ludCAmJiBheGlzLm9sZFNjcm9sbCA+PSB3YXlwb2ludC50cmlnZ2VyUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YXlwb2ludC5xdWV1ZVRyaWdnZXIoYXhpcy5mb3J3YXJkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJlZEdyb3Vwc1t3YXlwb2ludC5ncm91cC5pZF0gPSB3YXlwb2ludC5ncm91cFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBXYXlwb2ludC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGdyb3VwS2V5IGluIHRyaWdnZXJlZEdyb3Vwcykge1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcmVkR3JvdXBzW2dyb3VwS2V5XS5mbHVzaFRyaWdnZXJzKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5maW5kT3JDcmVhdGVCeUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIENvbnRleHQuZmluZEJ5RWxlbWVudChlbGVtZW50KSB8fCBuZXcgQ29udGV4dChlbGVtZW50KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucmVmcmVzaEFsbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvciAodmFyIGNvbnRleHRJZCBpbiBjb250ZXh0cykge1xyXG4gICAgICAgICAgICBjb250ZXh0c1tjb250ZXh0SWRdLnJlZnJlc2goKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9jb250ZXh0LWZpbmQtYnktZWxlbWVudCAqL1xyXG4gICAgQ29udGV4dC5maW5kQnlFbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0c1tlbGVtZW50LndheXBvaW50Q29udGV4dEtleV1cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKG9sZFdpbmRvd0xvYWQpIHtcclxuICAgICAgICAgICAgb2xkV2luZG93TG9hZCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIENvbnRleHQucmVmcmVzaEFsbCgpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIFdheXBvaW50LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIHJlcXVlc3RGbiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZVNoaW1cclxuICAgICAgICByZXF1ZXN0Rm4uY2FsbCh3aW5kb3csIGNhbGxiYWNrKVxyXG4gICAgfVxyXG4gICAgV2F5cG9pbnQuQ29udGV4dCA9IENvbnRleHRcclxufSgpKTtcclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnXHJcblxyXG4gICAgZnVuY3Rpb24gYnlUcmlnZ2VyUG9pbnQoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBhLnRyaWdnZXJQb2ludCAtIGIudHJpZ2dlclBvaW50XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYnlSZXZlcnNlVHJpZ2dlclBvaW50KGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYi50cmlnZ2VyUG9pbnQgLSBhLnRyaWdnZXJQb2ludFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBncm91cHMgPSB7XHJcbiAgICAgICAgdmVydGljYWw6IHt9LFxyXG4gICAgICAgIGhvcml6b250YWw6IHt9XHJcbiAgICB9XHJcbiAgICB2YXIgV2F5cG9pbnQgPSB3aW5kb3cuV2F5cG9pbnRcclxuXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZ3JvdXAgKi9cclxuICAgIGZ1bmN0aW9uIEdyb3VwKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWVcclxuICAgICAgICB0aGlzLmF4aXMgPSBvcHRpb25zLmF4aXNcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5uYW1lICsgJy0nICsgdGhpcy5heGlzXHJcbiAgICAgICAgdGhpcy53YXlwb2ludHMgPSBbXVxyXG4gICAgICAgIHRoaXMuY2xlYXJUcmlnZ2VyUXVldWVzKClcclxuICAgICAgICBncm91cHNbdGhpcy5heGlzXVt0aGlzLm5hbWVdID0gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbih3YXlwb2ludCkge1xyXG4gICAgICAgIHRoaXMud2F5cG9pbnRzLnB1c2god2F5cG9pbnQpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLmNsZWFyVHJpZ2dlclF1ZXVlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlclF1ZXVlcyA9IHtcclxuICAgICAgICAgICAgdXA6IFtdLFxyXG4gICAgICAgICAgICBkb3duOiBbXSxcclxuICAgICAgICAgICAgbGVmdDogW10sXHJcbiAgICAgICAgICAgIHJpZ2h0OiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUuZmx1c2hUcmlnZ2VycyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvciAodmFyIGRpcmVjdGlvbiBpbiB0aGlzLnRyaWdnZXJRdWV1ZXMpIHtcclxuICAgICAgICAgICAgdmFyIHdheXBvaW50cyA9IHRoaXMudHJpZ2dlclF1ZXVlc1tkaXJlY3Rpb25dXHJcbiAgICAgICAgICAgIHZhciByZXZlcnNlID0gZGlyZWN0aW9uID09PSAndXAnIHx8IGRpcmVjdGlvbiA9PT0gJ2xlZnQnXHJcbiAgICAgICAgICAgIHdheXBvaW50cy5zb3J0KHJldmVyc2UgPyBieVJldmVyc2VUcmlnZ2VyUG9pbnQgOiBieVRyaWdnZXJQb2ludClcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGVuZCA9IHdheXBvaW50cy5sZW5ndGg7IGkgPCBlbmQ7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdheXBvaW50ID0gd2F5cG9pbnRzW2ldXHJcbiAgICAgICAgICAgICAgICBpZiAod2F5cG9pbnQub3B0aW9ucy5jb250aW51b3VzIHx8IGkgPT09IHdheXBvaW50cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2F5cG9pbnQudHJpZ2dlcihbZGlyZWN0aW9uXSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsZWFyVHJpZ2dlclF1ZXVlcygpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbih3YXlwb2ludCkge1xyXG4gICAgICAgIHRoaXMud2F5cG9pbnRzLnNvcnQoYnlUcmlnZ2VyUG9pbnQpXHJcbiAgICAgICAgdmFyIGluZGV4ID0gV2F5cG9pbnQuQWRhcHRlci5pbkFycmF5KHdheXBvaW50LCB0aGlzLndheXBvaW50cylcclxuICAgICAgICB2YXIgaXNMYXN0ID0gaW5kZXggPT09IHRoaXMud2F5cG9pbnRzLmxlbmd0aCAtIDFcclxuICAgICAgICByZXR1cm4gaXNMYXN0ID8gbnVsbCA6IHRoaXMud2F5cG9pbnRzW2luZGV4ICsgMV1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUucHJldmlvdXMgPSBmdW5jdGlvbih3YXlwb2ludCkge1xyXG4gICAgICAgIHRoaXMud2F5cG9pbnRzLnNvcnQoYnlUcmlnZ2VyUG9pbnQpXHJcbiAgICAgICAgdmFyIGluZGV4ID0gV2F5cG9pbnQuQWRhcHRlci5pbkFycmF5KHdheXBvaW50LCB0aGlzLndheXBvaW50cylcclxuICAgICAgICByZXR1cm4gaW5kZXggPyB0aGlzLndheXBvaW50c1tpbmRleCAtIDFdIDogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5xdWV1ZVRyaWdnZXIgPSBmdW5jdGlvbih3YXlwb2ludCwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyUXVldWVzW2RpcmVjdGlvbl0ucHVzaCh3YXlwb2ludClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24od2F5cG9pbnQpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSBXYXlwb2ludC5BZGFwdGVyLmluQXJyYXkod2F5cG9pbnQsIHRoaXMud2F5cG9pbnRzKVxyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F5cG9pbnRzLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZmlyc3QgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndheXBvaW50c1swXVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2xhc3QgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2F5cG9pbnRzW3RoaXMud2F5cG9pbnRzLmxlbmd0aCAtIDFdXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAuZmluZE9yQ3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBncm91cHNbb3B0aW9ucy5heGlzXVtvcHRpb25zLm5hbWVdIHx8IG5ldyBHcm91cChvcHRpb25zKVxyXG4gICAgfVxyXG5cclxuICAgIFdheXBvaW50Lkdyb3VwID0gR3JvdXBcclxufSgpKTtcclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnXHJcblxyXG4gICAgdmFyIFdheXBvaW50ID0gd2luZG93LldheXBvaW50XHJcblxyXG4gICAgZnVuY3Rpb24gaXNXaW5kb3coZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50ID09PSBlbGVtZW50LndpbmRvd1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFdpbmRvdyhlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGlzV2luZG93KGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50LmRlZmF1bHRWaWV3XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTm9GcmFtZXdvcmtBZGFwdGVyKGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IHt9XHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5pbm5lckhlaWdodCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpc1dpbiA9IGlzV2luZG93KHRoaXMuZWxlbWVudClcclxuICAgICAgICByZXR1cm4gaXNXaW4gPyB0aGlzLmVsZW1lbnQuaW5uZXJIZWlnaHQgOiB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5pbm5lcldpZHRoID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGlzV2luID0gaXNXaW5kb3codGhpcy5lbGVtZW50KVxyXG4gICAgICAgIHJldHVybiBpc1dpbiA/IHRoaXMuZWxlbWVudC5pbm5lcldpZHRoIDogdGhpcy5lbGVtZW50LmNsaWVudFdpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycyhlbGVtZW50LCBsaXN0ZW5lcnMsIGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGVuZCA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXVxyXG4gICAgICAgICAgICAgICAgaWYgKCFoYW5kbGVyIHx8IGhhbmRsZXIgPT09IGxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxpc3RlbmVyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZXZlbnRQYXJ0cyA9IGV2ZW50LnNwbGl0KCcuJylcclxuICAgICAgICB2YXIgZXZlbnRUeXBlID0gZXZlbnRQYXJ0c1swXVxyXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSBldmVudFBhcnRzWzFdXHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcclxuXHJcbiAgICAgICAgaWYgKG5hbWVzcGFjZSAmJiB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV0gJiYgZXZlbnRUeXBlKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVycyhlbGVtZW50LCB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV1bZXZlbnRUeXBlXSwgaGFuZGxlcilcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdW2V2ZW50VHlwZV0gPSBbXVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG5zIGluIHRoaXMuaGFuZGxlcnMpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVycyhlbGVtZW50LCB0aGlzLmhhbmRsZXJzW25zXVtldmVudFR5cGVdIHx8IFtdLCBoYW5kbGVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyc1tuc11bZXZlbnRUeXBlXSA9IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKG5hbWVzcGFjZSAmJiB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV0pIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgdHlwZSBpbiB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV0pIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVycyhlbGVtZW50LCB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV1bdHlwZV0sIGhhbmRsZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdID0ge31cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogQWRhcHRlZCBmcm9tIGpRdWVyeSAxLnggb2Zmc2V0KCkgKi9cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUub2Zmc2V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxyXG4gICAgICAgIHZhciB3aW4gPSBnZXRXaW5kb3codGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQpXHJcbiAgICAgICAgdmFyIHJlY3QgPSB7XHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgbGVmdDogMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcclxuICAgICAgICAgICAgcmVjdCA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbi5wYWdlWU9mZnNldCAtIGRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AsXHJcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbi5wYWdlWE9mZnNldCAtIGRvY3VtZW50RWxlbWVudC5jbGllbnRMZWZ0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgICAgIHZhciBldmVudFBhcnRzID0gZXZlbnQuc3BsaXQoJy4nKVxyXG4gICAgICAgIHZhciBldmVudFR5cGUgPSBldmVudFBhcnRzWzBdXHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGV2ZW50UGFydHNbMV0gfHwgJ19fZGVmYXVsdCdcclxuICAgICAgICB2YXIgbnNIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXSA9IHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXSB8fCB7fVxyXG4gICAgICAgIHZhciBuc1R5cGVMaXN0ID0gbnNIYW5kbGVyc1tldmVudFR5cGVdID0gbnNIYW5kbGVyc1tldmVudFR5cGVdIHx8IFtdXHJcblxyXG4gICAgICAgIG5zVHlwZUxpc3QucHVzaChoYW5kbGVyKVxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlcilcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLm91dGVySGVpZ2h0ID0gZnVuY3Rpb24oaW5jbHVkZU1hcmdpbikge1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmlubmVySGVpZ2h0KClcclxuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZVxyXG5cclxuICAgICAgICBpZiAoaW5jbHVkZU1hcmdpbiAmJiAhaXNXaW5kb3codGhpcy5lbGVtZW50KSkge1xyXG4gICAgICAgICAgICBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVxyXG4gICAgICAgICAgICBoZWlnaHQgKz0gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5tYXJnaW5Ub3AsIDEwKVxyXG4gICAgICAgICAgICBoZWlnaHQgKz0gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5tYXJnaW5Cb3R0b20sIDEwKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGhlaWdodFxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUub3V0ZXJXaWR0aCA9IGZ1bmN0aW9uKGluY2x1ZGVNYXJnaW4pIHtcclxuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLmlubmVyV2lkdGgoKVxyXG4gICAgICAgIHZhciBjb21wdXRlZFN0eWxlXHJcblxyXG4gICAgICAgIGlmIChpbmNsdWRlTWFyZ2luICYmICFpc1dpbmRvdyh0aGlzLmVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpXHJcbiAgICAgICAgICAgIHdpZHRoICs9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUubWFyZ2luTGVmdCwgMTApXHJcbiAgICAgICAgICAgIHdpZHRoICs9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUubWFyZ2luUmlnaHQsIDEwKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHdpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5zY3JvbGxMZWZ0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHdpbiA9IGdldFdpbmRvdyh0aGlzLmVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIHdpbiA/IHdpbi5wYWdlWE9mZnNldCA6IHRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0XHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5zY3JvbGxUb3AgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgd2luID0gZ2V0V2luZG93KHRoaXMuZWxlbWVudClcclxuICAgICAgICByZXR1cm4gd2luID8gd2luLnBhZ2VZT2Zmc2V0IDogdGhpcy5lbGVtZW50LnNjcm9sbFRvcFxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5leHRlbmQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbWVyZ2UodGFyZ2V0LCBvYmopIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gb2JqW2tleV1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAxLCBlbmQgPSBhcmdzLmxlbmd0aDsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG1lcmdlKGFyZ3NbMF0sIGFyZ3NbaV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcmdzWzBdXHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLmluQXJyYXkgPSBmdW5jdGlvbihlbGVtZW50LCBhcnJheSwgaSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheSA9PSBudWxsID8gLTEgOiBhcnJheS5pbmRleE9mKGVsZW1lbnQsIGkpXHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLmlzRW1wdHlPYmplY3QgPSBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICAvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IDAgKi9cclxuICAgICAgICBmb3IgKHZhciBuYW1lIGluIG9iaikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBXYXlwb2ludC5hZGFwdGVycy5wdXNoKHtcclxuICAgICAgICBuYW1lOiAnbm9mcmFtZXdvcmsnLFxyXG4gICAgICAgIEFkYXB0ZXI6IE5vRnJhbWV3b3JrQWRhcHRlclxyXG4gICAgfSlcclxuICAgIFdheXBvaW50LkFkYXB0ZXIgPSBOb0ZyYW1ld29ya0FkYXB0ZXJcclxufSgpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==