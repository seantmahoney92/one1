module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "cdcc");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+xaq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useAppState; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("doui");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);






var Context = Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])();
var Provider = Context.Provider;
var mql;
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeComplete', function () {
  return document.querySelector('.workspace > .ant-layout').scrollTop = 0;
});

var saveToLocal = function saveToLocal(state) {
  delete state.mobile;
  delete state.optionDrawer;
  delete state.mobileDrawer;
  localStorage.setItem('settings', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(state));
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'fullscreen':
      {
        var element = document.querySelector('#__next');
        var isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;

        element.requestFullScreen = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || function () {
          return false;
        };

        document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || function () {
          return false;
        };

        isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          fullscreen: !isFullscreen
        });
      }

    case 'boxed':
      {
        var newState = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          boxed: !state.boxed
        });

        saveToLocal(newState);
        return newState;
      }

    case 'sidebarTheme':
      {
        var _newState = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          darkSidebar: !state.darkSidebar
        });

        saveToLocal(_newState);
        return _newState;
      }

    case 'sidebarPopup':
      {
        var _newState2 = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          sidebarPopup: !state.sidebarPopup
        });

        saveToLocal(_newState2);
        return _newState2;
      }

    case 'sidebarIcons':
      {
        if (state.collapsed) return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state);

        var _newState3 = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          sidebarIcons: !state.sidebarIcons
        });

        saveToLocal(_newState3);
        return _newState3;
      }

    case 'collapse':
      {
        var collapse = state.collapsed;
        var sidebarIcons = state.sidebarIcons;
        if (!collapse) sidebarIcons = true;

        var _newState4 = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          collapsed: !state.collapsed,
          sidebarIcons: sidebarIcons
        });

        saveToLocal(_newState4);
        return _newState4;
      }

    case 'weak':
      {
        var weak = state.weakColor;
        var darkSidebar = state.darkSidebar;
        if (!weak && darkSidebar) darkSidebar = false;

        var _newState5 = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          weakColor: !state.weakColor,
          darkSidebar: darkSidebar
        });

        saveToLocal(_newState5);
        return _newState5;
      }

    case 'mobile':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
        mobile: !mql.matches
      });

    case 'options':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
        optionDrawer: !state.optionDrawer
      });

    case 'mobileDrawer':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
        mobileDrawer: !state.mobileDrawer
      });

    case 'setup':
      {
        var settings = JSON.parse(localStorage.getItem('settings'));
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          mobile: !mql.matches
        }, settings);
      }

    default:
      return state;
  }
};

var AppProvider = function AppProvider(props) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(reducer, {
    name: 'One',
    mobile: false,
    boxed: false,
    darkSidebar: false,
    sidebarPopup: false,
    sidebarIcons: false,
    collapsed: false,
    weakColor: false,
    optionDrawer: false,
    mobileDrawer: false,
    fullscreen: false
  }),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    mql = window.matchMedia("(min-width: 992px)");
    mql.addListener(mediaQueryChanged);
    dispatch({
      type: 'setup'
    });
    return function () {
      return mql.removeListener(mediaQueryChanged);
    };
  }, []);

  var mediaQueryChanged = function mediaQueryChanged() {
    dispatch({
      type: 'mobile'
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Provider, {
    value: [state, dispatch]
  }, props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (AppProvider);
var useAppState = function useAppState() {
  return Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(Context);
};

/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "Cg2A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y6vh");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "FP/7":
/***/ (function(module, exports) {

module.exports = require("date-fns/sub_hours");

/***/ }),

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "JlRy":
/***/ (function(module, exports) {

module.exports = require("date-fns/distance_in_words_to_now");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "NC1Z":
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "Skji":
/***/ (function(module, exports) {

module.exports = require("date-fns/format");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "a/kM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__("NC1Z");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/date/now.js
var now = __webpack_require__("Cg2A");
var now_default = /*#__PURE__*/__webpack_require__.n(now);

// EXTERNAL MODULE: external "date-fns/sub_days"
var sub_days_ = __webpack_require__("zDu7");
var sub_days_default = /*#__PURE__*/__webpack_require__.n(sub_days_);

// EXTERNAL MODULE: external "date-fns/sub_hours"
var sub_hours_ = __webpack_require__("FP/7");
var sub_hours_default = /*#__PURE__*/__webpack_require__.n(sub_hours_);

// EXTERNAL MODULE: external "date-fns/sub_minutes"
var sub_minutes_ = __webpack_require__("sRs4");
var sub_minutes_default = /*#__PURE__*/__webpack_require__.n(sub_minutes_);

// CONCATENATED MODULE: ./demos/mock/messages.js







var messages_now = now_default()();

var mockMessages = [{
  from: 'Social',
  date: messages_now,
  subject: 'Check out this weeks most popular website designs in the Milkyway!',
  avatar: external_react_default.a.createElement(external_antd_["Avatar"], {
    size: "large",
    style: {
      color: '#f56a00',
      backgroundColor: '#fde3cf'
    }
  }, "S"),
  body: '<p>Hi John,</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>\n        <small>Obi-Wan Kenobi, Jedi Knight</small>\n\n        <p>Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.</p><p>Sincerely yours</p><p>Jane Doe</p>'
}, {
  from: 'Promotions',
  date: sub_minutes_default()(messages_now, 12),
  subject: 'eBook: The complete guide to creating Angularjs single page applications is here.',
  avatar: external_react_default.a.createElement(external_antd_["Avatar"], {
    size: "large",
    src: "/static/images/face1.jpg"
  }),
  body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>\n        <small>Obi-Wan Kenobi, Jedi Knight</small>\n\n        <p>Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.</p>'
}, {
  from: 'Updates',
  date: sub_minutes_default()(messages_now, 25),
  subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  avatar: external_react_default.a.createElement(external_antd_["Avatar"], {
    size: "large",
    style: {
      color: 'rgb(34, 245, 0)',
      backgroundColor: 'rgb(207, 253, 219)'
    }
  }, "S"),
  body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>\n        <small>Obi-Wan Kenobi, Jedi Knight</small>\n\n        <p>Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.</p>'
}, {
  from: 'Melissa Welch',
  date: sub_hours_default()(messages_now, 2),
  subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  avatar: external_react_default.a.createElement(external_antd_["Avatar"], {
    size: "large",
    src: "/static/images/face2.jpg"
  }),
  body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>\n        <small>Obi-Wan Kenobi, Jedi Knight</small>\n\n        <p>Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.</p>'
}, {
  from: 'Vincent Peterson',
  date: sub_hours_default()(messages_now, 3),
  subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  avatar: external_react_default.a.createElement(external_antd_["Avatar"], {
    size: "large",
    src: "/static/images/face3.jpg"
  }),
  body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>\n        <small>Obi-Wan Kenobi, Jedi Knight</small>\n\n        <p>Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.</p>'
}, {
  from: 'Pamela Wood',
  date: sub_days_default()(messages_now, 1),
  subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  avatar: external_react_default.a.createElement(external_antd_["Avatar"], {
    size: "large",
    style: {
      color: 'rgb(143, 0, 245)',
      backgroundColor: 'rgb(214, 207, 253)'
    }
  }, "S"),
  body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>\n        <small>Obi-Wan Kenobi, Jedi Knight</small>\n\n        <p>Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.</p>'
}, {
  from: 'Tammy Carpenter',
  date: sub_days_default()(messages_now, 2),
  subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  avatar: external_react_default.a.createElement(external_antd_["Avatar"], {
    size: "large",
    src: "/static/images/face4.jpg"
  }),
  body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>\n        <small>Obi-Wan Kenobi, Jedi Knight</small>\n\n        <p>Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.</p>'
}, {
  from: 'Emma Sullican',
  date: sub_days_default()(messages_now, 3),
  subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  avatar: external_react_default.a.createElement(external_antd_["Avatar"], {
    size: "large",
    style: {
      color: 'rgb(245, 0, 0)',
      backgroundColor: 'rgb(253, 207, 207)'
    }
  }, "S"),
  body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>\n        <small>Obi-Wan Kenobi, Jedi Knight</small>\n\n        <p>Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.</p>'
}, {
  from: 'Andrea Brewer',
  date: sub_days_default()(messages_now, 4),
  subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  avatar: external_react_default.a.createElement(external_antd_["Avatar"], {
    size: "large",
    src: "/static/images/face5.jpg"
  }),
  body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>\n        <small>Obi-Wan Kenobi, Jedi Knight</small>\n\n        <p>Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.</p>'
}, {
  from: 'Sean Carpenter',
  date: sub_days_default()(messages_now, 5),
  subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  avatar: external_react_default.a.createElement(external_antd_["Avatar"], {
    size: "large",
    src: "/static/images/face1.jpg"
  }),
  body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>\n        <small>Obi-Wan Kenobi, Jedi Knight</small>\n\n        <p>Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.</p>'
}];
/* harmony default export */ var mock_messages = (mockMessages);
// EXTERNAL MODULE: external "date-fns/distance_in_words_to_now"
var distance_in_words_to_now_ = __webpack_require__("JlRy");
var distance_in_words_to_now_default = /*#__PURE__*/__webpack_require__.n(distance_in_words_to_now_);

// EXTERNAL MODULE: external "date-fns/format"
var format_ = __webpack_require__("Skji");
var format_default = /*#__PURE__*/__webpack_require__.n(format_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./components/shared/AppProvider.js
var AppProvider = __webpack_require__("+xaq");

// CONCATENATED MODULE: ./components/Messages.js




function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  position: fixed;\n  bottom: 0;\n  z-index: 1;\n  width: 40px;\n  right: 2rem;\n  padding: 0 2rem;\n  margin-bottom: 2rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Sider = external_antd_["Layout"].Sider;
var Option = external_antd_["Select"].Option;
var Fab = external_styled_components_default.a.div(_templateObject());

var Messages_Messages = function Messages() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props,
      form = _ref.form;

  var _useAppState = Object(AppProvider["b" /* useAppState */])(),
      _useAppState2 = Object(slicedToArray["a" /* default */])(_useAppState, 1),
      state = _useAppState2[0];

  var _useState = Object(external_react_["useState"])(0),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      selectedIndex = _useState2[0],
      setSelectedIndex = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      replyBox = _useState4[0],
      setBox = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(false),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      navigation = _useState6[0],
      setNavigation = _useState6[1];

  var _useState7 = Object(external_react_["useState"])(false),
      _useState8 = Object(slicedToArray["a" /* default */])(_useState7, 2),
      messages = _useState8[0],
      setMessages = _useState8[1];

  var selectedMessage = mock_messages[selectedIndex];

  var createMarkup = function createMarkup(body) {
    return {
      __html: body
    };
  };

  var navigationSidebar = external_react_default.a.createElement("div", {
    className: "h-100"
  }, external_react_default.a.createElement("div", {
    className: "p-4"
  }, external_react_default.a.createElement(external_antd_["Button"], {
    type: "primary",
    onClick: function onClick() {
      return setBox(!replyBox);
    }
  }, "Compose")), external_react_default.a.createElement("div", {
    className: "px-4"
  }, external_react_default.a.createElement("small", null, external_react_default.a.createElement("b", null, "Mailboxes"))), external_react_default.a.createElement(external_antd_["Menu"], {
    mode: "inline",
    className: "mb-3 border-right-0"
  }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "1"
  }, "Inbox"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "2"
  }, "Sent mail"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "3"
  }, "Starred"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "4"
  }, "Drafts"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "5"
  }, "Trash")), external_react_default.a.createElement("div", {
    className: "px-4"
  }, external_react_default.a.createElement("small", null, external_react_default.a.createElement("b", null, "Tags"))), external_react_default.a.createElement(external_antd_["Menu"], {
    mode: "inline",
    className: "border-0"
  }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "1"
  }, external_react_default.a.createElement(external_react_feather_["Circle"], {
    size: 10,
    strokeWidth: 1,
    fill: 'currentColor',
    className: "mr-3 text-error"
  }), "Personal"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "2"
  }, external_react_default.a.createElement(external_react_feather_["Circle"], {
    size: 10,
    strokeWidth: 1,
    fill: 'currentColor',
    className: "mr-3 text-success"
  }), "Clients"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "3"
  }, external_react_default.a.createElement(external_react_feather_["Circle"], {
    size: 10,
    strokeWidth: 1,
    fill: 'currentColor',
    className: "mr-3 text-normal"
  }), "Family"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "4"
  }, external_react_default.a.createElement(external_react_feather_["Circle"], {
    size: 10,
    strokeWidth: 1,
    fill: 'currentColor',
    className: "mr-3 text-primary"
  }), "Friends")));
  var messagesSidebar = external_react_default.a.createElement("div", {
    css: "\n        display: flex;\n        flex: 1;\n        flex-direction: column;\n        height: 100%;\n        overflow: hidden;\n        border-right: 1px solid rgba(0, 0, 0, 0.05);\n      "
  }, external_react_default.a.createElement(external_antd_["Menu"], {
    mode: "horizontal",
    className: "border-0 m-auto"
  }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "read"
  }, external_react_default.a.createElement("a", {
    href: "javascript:;"
  }, external_react_default.a.createElement(external_react_feather_["CheckCircle"], {
    size: 20,
    strokeWidth: 1
  }))), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "favorite"
  }, external_react_default.a.createElement("a", {
    href: "javascript:;"
  }, external_react_default.a.createElement(external_react_feather_["Heart"], {
    size: 20,
    strokeWidth: 1
  }))), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "star"
  }, external_react_default.a.createElement("a", {
    href: "javascript:;"
  }, external_react_default.a.createElement(external_react_feather_["Star"], {
    size: 20,
    strokeWidth: 1
  }))), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "refresh"
  }, external_react_default.a.createElement("a", {
    href: "javascript:;"
  }, external_react_default.a.createElement(external_react_feather_["RefreshCcw"], {
    size: 20,
    strokeWidth: 1
  })))), external_react_default.a.createElement(external_antd_["List"], {
    className: "scroll-y flex-1 bg-transparent px-3 py-1",
    itemLayout: "horizontal",
    dataSource: mock_messages,
    renderItem: function renderItem(item, index) {
      return external_react_default.a.createElement(external_antd_["List"].Item, {
        onClick: function onClick() {
          return setSelectedIndex(index);
        },
        style: {
          backgroundColor: selectedIndex === index ? '#e6f7ff' : ''
        },
        className: "".concat(selectedIndex === index ? '' : 'border-0', " rounded border-0 p-3")
      }, external_react_default.a.createElement(external_antd_["List"].Item.Meta, {
        avatar: item.avatar,
        title: external_react_default.a.createElement("small", {
          css: "\n                    display: flex;\n                    width: 100%;\n                  "
        }, external_react_default.a.createElement("span", null, item.from), external_react_default.a.createElement("span", {
          className: "mr-auto"
        }), external_react_default.a.createElement("span", null, distance_in_words_to_now_default()(new Date(item.date)))),
        description: item.subject
      }));
    }
  }));
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_antd_["Layout"], {
    className: "fill-workspace rounded shadow-sm overflow-hidden"
  }, !state.mobile && external_react_default.a.createElement(Sider, {
    width: 150
  }, navigationSidebar), external_react_default.a.createElement(external_antd_["Drawer"], {
    closable: false,
    width: 150,
    placement: "left",
    onClose: function onClose() {
      return setNavigation(false);
    },
    visible: navigation,
    className: "chat-drawer"
  }, navigationSidebar), !state.mobile && external_react_default.a.createElement(Sider, {
    width: 350
  }, messagesSidebar), external_react_default.a.createElement(external_antd_["Drawer"], {
    closable: false,
    width: 350,
    placement: "left",
    onClose: function onClose() {
      return setMessages(false);
    },
    visible: messages,
    className: "chat-drawer"
  }, messagesSidebar), external_react_default.a.createElement("div", {
    className: "p-5 scroll-y",
    css: "\n            background: #f5f5f5;\n          "
  }, external_react_default.a.createElement("div", {
    className: "".concat(state.mobile ? 'px-1 py-3' : 'px-5 py-3')
  }, external_react_default.a.createElement("div", {
    className: "mb-3",
    css: "\n                display: flex;\n              "
  }, selectedMessage.avatar, external_react_default.a.createElement("div", {
    className: "pl-3"
  }, external_react_default.a.createElement("h6", null, selectedMessage.from), external_react_default.a.createElement("small", null, format_default()(new Date(selectedMessage.date), 'MMMM Do YYYY hh:mm')))), external_react_default.a.createElement("h5", {
    className: "my-4"
  }, selectedMessage.subject), external_react_default.a.createElement("div", {
    dangerouslySetInnerHTML: createMarkup(selectedMessage.body)
  }), state.mobile && external_react_default.a.createElement(Fab, null, external_react_default.a.createElement(external_antd_["Button"], {
    type: "primary",
    shape: "circle",
    size: "large",
    onClick: function onClick() {
      return setNavigation(true);
    },
    className: "mb-3"
  }, external_react_default.a.createElement(external_react_feather_["MessageCircle"], {
    size: 20,
    strokeWidth: 1
  })), external_react_default.a.createElement("span", {
    className: "mr-auto"
  }), external_react_default.a.createElement(external_antd_["Button"], {
    type: "primary",
    shape: "circle",
    size: "large",
    onClick: function onClick() {
      return setMessages(true);
    }
  }, external_react_default.a.createElement(external_react_feather_["User"], {
    size: 20,
    strokeWidth: 1
  })))))), external_react_default.a.createElement(external_antd_["Drawer"], {
    title: "Compose",
    width: 720,
    placement: "right",
    onClose: function onClose() {
      return setBox(!replyBox);
    },
    maskClosable: false,
    visible: replyBox,
    style: {
      height: 'calc(100% - 55px)',
      overflow: 'auto',
      paddingBottom: 53
    }
  }, external_react_default.a.createElement(external_antd_["Form"], {
    layout: "vertical",
    hideRequiredMark: true
  }, external_react_default.a.createElement(external_antd_["Row"], {
    gutter: 16
  }, external_react_default.a.createElement(external_antd_["Col"], {
    span: 12
  }, external_react_default.a.createElement(external_antd_["Form"].Item, {
    label: "Name"
  }, form.getFieldDecorator('name', {
    rules: [{
      required: true,
      message: 'please enter user name'
    }]
  })(external_react_default.a.createElement(external_antd_["Input"], {
    placeholder: "please enter user name"
  })))), external_react_default.a.createElement(external_antd_["Col"], {
    span: 12
  }, external_react_default.a.createElement(external_antd_["Form"].Item, {
    label: "Url"
  }, form.getFieldDecorator('url', {
    rules: [{
      required: true,
      message: 'please enter url'
    }]
  })(external_react_default.a.createElement(external_antd_["Input"], {
    style: {
      width: '100%'
    },
    addonBefore: "http://",
    addonAfter: ".com",
    placeholder: "please enter url"
  }))))), external_react_default.a.createElement(external_antd_["Row"], {
    gutter: 16
  }, external_react_default.a.createElement(external_antd_["Col"], {
    span: 12
  }, external_react_default.a.createElement(external_antd_["Form"].Item, {
    label: "Owner"
  }, form.getFieldDecorator('owner', {
    rules: [{
      required: true,
      message: 'Please select an owner'
    }]
  })(external_react_default.a.createElement(external_antd_["Select"], {
    placeholder: "Please select an owner"
  }, external_react_default.a.createElement(Option, {
    value: "xiao"
  }, "Xiaoxiao Fu"), external_react_default.a.createElement(Option, {
    value: "mao"
  }, "Maomao Zhou"))))), external_react_default.a.createElement(external_antd_["Col"], {
    span: 12
  }, external_react_default.a.createElement(external_antd_["Form"].Item, {
    label: "Type"
  }, form.getFieldDecorator('type', {
    rules: [{
      required: true,
      message: 'Please choose the type'
    }]
  })(external_react_default.a.createElement(external_antd_["Select"], {
    placeholder: "Please choose the type"
  }, external_react_default.a.createElement(Option, {
    value: "private"
  }, "Private"), external_react_default.a.createElement(Option, {
    value: "public"
  }, "Public")))))), external_react_default.a.createElement(external_antd_["Row"], {
    gutter: 16
  }, external_react_default.a.createElement(external_antd_["Col"], {
    span: 12
  }, external_react_default.a.createElement(external_antd_["Form"].Item, {
    label: "Approver"
  }, form.getFieldDecorator('approver', {
    rules: [{
      required: true,
      message: 'Please choose the approver'
    }]
  })(external_react_default.a.createElement(external_antd_["Select"], {
    placeholder: "Please choose the approver"
  }, external_react_default.a.createElement(Option, {
    value: "jack"
  }, "Jack Ma"), external_react_default.a.createElement(Option, {
    value: "tom"
  }, "Tom Liu"))))), external_react_default.a.createElement(external_antd_["Col"], {
    span: 12
  }, external_react_default.a.createElement(external_antd_["Form"].Item, {
    label: "DateTime"
  }, form.getFieldDecorator('dateTime', {
    rules: [{
      required: true,
      message: 'Please choose the dateTime'
    }]
  })(external_react_default.a.createElement(external_antd_["DatePicker"].RangePicker, {
    style: {
      width: '100%'
    },
    getPopupContainer: function getPopupContainer(trigger) {
      return trigger.parentNode;
    }
  }))))), external_react_default.a.createElement(external_antd_["Row"], {
    gutter: 16
  }, external_react_default.a.createElement(external_antd_["Col"], {
    span: 24
  }, external_react_default.a.createElement(external_antd_["Form"].Item, {
    label: "Description"
  }, form.getFieldDecorator('description', {
    rules: [{
      required: true,
      message: 'please enter url description'
    }]
  })(external_react_default.a.createElement(external_antd_["Input"].TextArea, {
    rows: 4,
    placeholder: "please enter url description"
  })))))), external_react_default.a.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      borderTop: '1px solid #e8e8e8',
      padding: '10px 16px',
      textAlign: 'right',
      left: 0,
      background: '#fff',
      borderRadius: '0 0 4px 4px'
    }
  }, external_react_default.a.createElement(external_antd_["Button"], {
    style: {
      marginRight: 8
    },
    onClick: function onClick() {
      return setBox(!replyBox);
    }
  }, "Cancel"), external_react_default.a.createElement(external_antd_["Button"], {
    onClick: function onClick() {
      return setBox(!replyBox);
    }
  }, "Submit"))));
};

/* harmony default export */ var components_Messages = (external_antd_["Form"].create()(Messages_Messages));
// CONCATENATED MODULE: ./pages/apps/messages.js



var messages_MessagesPage = function MessagesPage() {
  return external_react_default.a.createElement(components_Messages, null);
};

/* harmony default export */ var apps_messages = __webpack_exports__["default"] = (messages_MessagesPage);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cdcc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("a/kM");


/***/ }),

/***/ "doui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rt45":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2Eek");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FbiP");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "sRs4":
/***/ (function(module, exports) {

module.exports = require("date-fns/sub_minutes");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "zDu7":
/***/ (function(module, exports) {

module.exports = require("date-fns/sub_days");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });