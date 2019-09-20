module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "7201");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

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

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./assets/styles.less
var styles = __webpack_require__("Vh1e");

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: ./components/shared/AppProvider.js
var AppProvider = __webpack_require__("+xaq");

// EXTERNAL MODULE: ./components/styles/GlobalStyles.js + 1 modules
var GlobalStyles = __webpack_require__("GXHU");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/styles/Page.js


function _templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  margin: 0 auto;\n  padding: 1.5rem;\n  position: relative;\n  background-color: #f0f0f0;\n  min-height: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  background-color: #f0f0f0;\n  &.boxed {\n    overflow: hidden;\n    margin-right: auto;\n    margin-left: auto;\n  }\n  @media (min-width: 992px) {\n    &.boxed {\n      max-width: 95%;\n    }\n  }\n  .workspace {\n    height: ", ";\n    width: 100%;\n    display: flex;\n    position: relative;\n    overflow: hidden;\n    max-width: 100%;\n    flex-grow: 1;\n    flex-direction: row;\n  }\n  .workspace > .ant-layout {\n    overflow-x: hidden;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Container = external_styled_components_default.a.div(_templateObject(), function (props) {
  return "calc(100vh - ".concat(props.theme.layoutHeaderHeight, ")");
});
var Inner = external_styled_components_default.a.div(_templateObject2(), function (props) {
  return "calc(100vh - ".concat(props.theme.layoutHeaderHeight, ")");
});

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__("NC1Z");

// CONCATENATED MODULE: ./components/styles/Header.js


function Header_templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  .ant-list-item {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n"]);

  Header_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Header_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  .ant-layout-header {\n    position: relative;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    display: flex;\n    align-items: center;\n    min-height: 4.286rem;\n    z-index: 11;\n    padding: 0 1rem;\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.02), 0 1px 0 rgba(0, 0, 0, 0.02);\n  }\n  .trigger {\n    transform: rotate(90deg);\n    margin-right: 1rem;\n  }\n  .menu-divider {\n    position: relative;\n  }\n  .menu-divider:before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: inline-block;\n    width: 1px;\n    height: 100%;\n    content: '';\n    background-color: #f9f9f9;\n  }\n  .brand {\n    display: flex;\n    align-items: center;\n    margin-right: 1rem;\n    font-size: 1.25rem;\n    white-space: nowrap;\n  }\n  .brand > svg {\n    fill: ", ";\n  }\n  .ant-menu {\n    font-family: inherit;\n    line-height: inherit;\n    box-shadow: none;\n    display: inline-block;\n    border: 0;\n    margin-bottom: 1px;\n  }\n  .ant-menu-item,\n  .ant-menu-item,\n  .ant-menu-submenu-title {\n    padding: 0 1rem;\n  }\n  .ant-menu-item,\n  .ant-menu-submenu {\n    top: 2px;\n  }\n  .nav-link {\n    display: initial;\n    color: inherit;\n  }\n  .ant-list-header,\n  .ant-list-footer {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n"]);

  Header_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var DashHeader = external_styled_components_default.a.div(Header_templateObject(), function (props) {
  return props.theme.primaryColor;
});
var Notification = external_styled_components_default.a.div(Header_templateObject2());
/* harmony default export */ var Header = (DashHeader);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./demos/mock/notifications.js



/* harmony default export */ var mock_notifications = ([{
  title: 'John Doe launched a new application',
  description: '1 hour ago',
  avatar: external_react_default.a.createElement(external_antd_["Avatar"], {
    size: "large",
    style: {
      color: 'rgb(34, 245, 0)',
      backgroundColor: 'rgb(207, 253, 219)'
    }
  }, external_react_default.a.createElement(external_react_feather_["MessageCircle"], {
    size: 24,
    strokeWidth: 1
  }))
}, {
  title: 'Removed calendar from application list',
  description: '1 hour ago',
  avatar: external_react_default.a.createElement(external_antd_["Avatar"], {
    size: "large",
    src: "/static/images/face1.jpg"
  })
}, {
  title: 'Jack Hunt has joined your mailing list',
  description: '1 hour ago',
  avatar: external_react_default.a.createElement(external_antd_["Avatar"], {
    size: "large",
    src: "/static/images/avatar.jpg"
  })
}, {
  title: 'John Doe created a new task list',
  description: '1 hour ago',
  avatar: external_react_default.a.createElement(external_antd_["Avatar"], {
    size: "large",
    style: {
      color: '#f56a00',
      backgroundColor: '#fde3cf'
    }
  }, "D")
}, {
  title: 'John Doe sent you a friend request',
  description: '2 hours ago',
  avatar: external_react_default.a.createElement(external_antd_["Avatar"], {
    size: "large",
    src: "/static/images/face5.jpg"
  })
}]);
// CONCATENATED MODULE: ./components/Header.js









var SubMenu = external_antd_["Menu"].SubMenu;
var Header_Header = external_antd_["Layout"].Header;

var Header_MainHeader = function MainHeader() {
  var _useAppState = Object(AppProvider["b" /* useAppState */])(),
      _useAppState2 = Object(slicedToArray["a" /* default */])(_useAppState, 2),
      state = _useAppState2[0],
      dispatch = _useAppState2[1];

  var _useState = Object(external_react_["useState"])(mock_notifications),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 1),
      notifications = _useState2[0];

  return external_react_default.a.createElement(Header, null, external_react_default.a.createElement(Header_Header, null, state.mobile && external_react_default.a.createElement("a", {
    onClick: function onClick() {
      return dispatch({
        type: 'mobileDrawer'
      });
    },
    className: "trigger"
  }, external_react_default.a.createElement(external_react_feather_["BarChart"], {
    size: 20,
    strokeWidth: 1
  })), external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", {
    className: "brand"
  }, external_react_default.a.createElement(external_react_feather_["Triangle"], {
    size: 24,
    strokeWidth: 1
  }), external_react_default.a.createElement("strong", {
    className: "mx-1 text-black"
  }, state.name))), external_react_default.a.createElement(external_antd_["Menu"], {
    mode: "horizontal",
    className: "menu-divider"
  }, !state.mobile && external_react_default.a.createElement(external_antd_["Menu"].Item, null, external_react_default.a.createElement(link_default.a, {
    href: "/apps/calendar"
  }, external_react_default.a.createElement("a", null, "Calendar"))), !state.mobile && external_react_default.a.createElement(external_antd_["Menu"].Item, null, external_react_default.a.createElement(link_default.a, {
    href: "/apps/messages"
  }, external_react_default.a.createElement("a", null, "Messages"))), !state.mobile && external_react_default.a.createElement(external_antd_["Menu"].Item, null, external_react_default.a.createElement(link_default.a, {
    href: "/apps/social"
  }, external_react_default.a.createElement("a", null, "Social"))), !state.mobile && external_react_default.a.createElement(external_antd_["Menu"].Item, null, external_react_default.a.createElement(link_default.a, {
    href: "/apps/chat"
  }, external_react_default.a.createElement("a", null, "Chat"))), state.mobile && external_react_default.a.createElement(SubMenu, {
    title: external_react_default.a.createElement(external_react_feather_["ChevronsDown"], {
      size: 20,
      strokeWidth: 1
    })
  }, external_react_default.a.createElement(external_antd_["Menu"].Item, null, "Calendar"), external_react_default.a.createElement(external_antd_["Menu"].Item, null, "Messages"), external_react_default.a.createElement(external_antd_["Menu"].Item, null, "Social"), external_react_default.a.createElement(external_antd_["Menu"].Item, null, "Chat"))), external_react_default.a.createElement("span", {
    className: "mr-auto"
  }), external_react_default.a.createElement(external_antd_["Menu"], {
    mode: "horizontal"
  }, !state.mobile && external_react_default.a.createElement(external_antd_["Menu"].Item, {
    onClick: function onClick() {
      return dispatch({
        type: 'fullscreen'
      });
    }
  }, !state.fullscreen ? external_react_default.a.createElement(external_react_feather_["Maximize"], {
    size: 20,
    strokeWidth: 1
  }) : external_react_default.a.createElement(external_react_feather_["Minimize"], {
    size: 20,
    strokeWidth: 1
  })), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    onClick: function onClick() {
      return dispatch({
        type: 'options'
      });
    }
  }, external_react_default.a.createElement(external_react_feather_["Settings"], {
    size: 20,
    strokeWidth: 1
  })), external_react_default.a.createElement(SubMenu, {
    title: external_react_default.a.createElement(external_antd_["Badge"], {
      count: 5
    }, external_react_default.a.createElement("span", {
      className: "submenu-title-wrapper"
    }, external_react_default.a.createElement(external_react_feather_["Bell"], {
      size: 20,
      strokeWidth: 1
    })))
  }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
    className: "p-0 bg-transparent",
    style: {
      height: 'auto'
    }
  }, external_react_default.a.createElement(external_antd_["List"], {
    className: "header-notifications",
    itemLayout: "horizontal",
    dataSource: notifications,
    footer: external_react_default.a.createElement("div", null, "5 Notifications"),
    renderItem: function renderItem(item) {
      return external_react_default.a.createElement(Notification, null, external_react_default.a.createElement(external_antd_["List"].Item, null, external_react_default.a.createElement(external_antd_["List"].Item.Meta, {
        avatar: item.avatar,
        title: external_react_default.a.createElement("a", {
          href: "javascript:;"
        }, item.title),
        description: external_react_default.a.createElement("small", null, item.description)
      })));
    }
  }))), external_react_default.a.createElement(SubMenu, {
    title: external_react_default.a.createElement(external_antd_["Avatar"], {
      src: "/static/images/avatar.jpg"
    })
  }, external_react_default.a.createElement(external_antd_["Menu"].Item, null, "Settings"), external_react_default.a.createElement(external_antd_["Menu"].Item, null, "Profile"), external_react_default.a.createElement(external_antd_["Menu"].Item, null, "Notifications"), external_react_default.a.createElement(external_antd_["Menu"].Divider, null), external_react_default.a.createElement(external_antd_["Menu"].Item, null, external_react_default.a.createElement(link_default.a, {
    href: "https://one-readme.fusepx.com"
  }, external_react_default.a.createElement("a", null, "Help?"))), external_react_default.a.createElement(external_antd_["Menu"].Item, null, "Signout")))));
};

/* harmony default export */ var components_Header = (Header_MainHeader);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("dfwq");

// EXTERNAL MODULE: ./lib/helpers.js
var helpers = __webpack_require__("FWZJ");

// CONCATENATED MODULE: ./components/styles/Sidebar.js


function Sidebar_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  height: 100%;\n  display: flex;\n  .ant-layout-sider {\n    box-shadow: 0 0px 3px rgba(0, 0, 0, 0.02), 0 0 1px rgba(0, 0, 0, 0.05);\n    z-index: 10;\n  }\n  .ant-menu-item > a {\n    display: flex;\n    align-items: center;\n  }\n  .ant-menu-item .anticon,\n  .ant-menu-submenu-title .anticon {\n    margin-right: 1rem;\n  }\n  .ant-layout-sider-zero-width-trigger {\n    z-index: 9;\n  }\n  .ant-menu-inline-collapsed .ant-badge {\n    max-width: 0;\n    display: inline-block;\n    opacity: 0;\n  }\n  .ant-menu-inline .ant-menu-item, .ant-menu-inline .ant-menu-submenu-title {\n    width: calc(100%);\n  }\n"]);

  Sidebar_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Sidebar = external_styled_components_default.a.div(Sidebar_templateObject());
/* harmony default export */ var styles_Sidebar = (Sidebar);
// CONCATENATED MODULE: ./lib/routes.js


/* harmony default export */ var routes = ([{
  path: '/',
  name: 'Home',
  icon: external_react_default.a.createElement(external_react_feather_["Home"], {
    strokeWidth: 1,
    size: 16
  })
}, {
  name: 'Apps',
  icon: external_react_default.a.createElement(external_react_feather_["MessageCircle"], {
    strokeWidth: 1,
    size: 16
  }),
  children: [{
    path: '/apps/calendar',
    name: 'Calendar'
  }, {
    path: '/apps/messages',
    name: 'Messages'
  }, {
    path: '/apps/social',
    name: 'Social'
  }, {
    path: '/apps/chat',
    name: 'Chat'
  }]
}, {
  path: '/widgets',
  name: 'Widgets',
  icon: external_react_default.a.createElement(external_react_feather_["Droplet"], {
    strokeWidth: 1,
    size: 16
  }),
  badge: {
    value: '5'
  }
}, {
  path: '/taskboard',
  name: 'Taskboard',
  icon: external_react_default.a.createElement(external_react_feather_["Sidebar"], {
    strokeWidth: 1,
    size: 16
  }),
  badge: {
    value: 'New'
  }
}, {
  name: 'Charts',
  icon: external_react_default.a.createElement(external_react_feather_["PieChart"], {
    strokeWidth: 1,
    size: 16
  }),
  children: [{
    path: '/charts/plots',
    name: 'Plots'
  }, {
    path: '/charts/axes',
    name: 'Axes'
  }, {
    path: '/charts/legends',
    name: 'Legends'
  }, {
    path: '/charts/sunburst',
    name: 'Sunburst'
  }, {
    path: '/charts/radial',
    name: 'Radial'
  }, {
    path: '/charts/sankeys',
    name: 'Sankeys'
  }, {
    path: '/charts/treemaps',
    name: 'Treemaps'
  }, {
    path: '/charts/radar',
    name: 'Radar charts'
  }, {
    path: '/charts/misc',
    name: 'Misc'
  }]
}, {
  name: 'Media',
  icon: external_react_default.a.createElement(external_react_feather_["Image"], {
    strokeWidth: 1,
    size: 16
  }),
  children: [{
    path: '/media/grid',
    name: 'Grid'
  }, {
    path: '/media/tile',
    name: 'Tile'
  }]
}, {
  name: 'Maps',
  icon: external_react_default.a.createElement(external_react_feather_["MapPin"], {
    strokeWidth: 1,
    size: 16
  }),
  children: [{
    path: '/maps/markers',
    name: 'Markers'
  }, {
    path: '/maps/geojson',
    name: 'Geo JSON'
  }]
}, {
  name: 'Extras',
  icon: external_react_default.a.createElement(external_react_feather_["Gift"], {
    strokeWidth: 1,
    size: 16
  }),
  children: [{
    path: '/extras/invoice',
    name: 'Invoice'
  }, {
    path: '/extras/timeline',
    name: 'Timeline'
  }, {
    path: '/extras/blank',
    name: 'Blank'
  }, {
    path: '/extras/pricing',
    name: 'Pricing'
  }]
}, {
  name: 'Authentication',
  icon: external_react_default.a.createElement(external_react_feather_["User"], {
    strokeWidth: 1,
    size: 16
  }),
  children: [{
    path: '/signin',
    name: 'Signin'
  }, {
    path: '/signup',
    name: 'Signup'
  }, {
    path: '/forgot',
    name: 'Forgot'
  }, {
    path: '/lockscreen',
    name: 'Lockscreen'
  }]
}, {
  name: 'Error',
  icon: external_react_default.a.createElement(external_react_feather_["AlertCircle"], {
    strokeWidth: 1,
    size: 16
  }),
  children: [{
    path: '/thisroutedoesntwork',
    name: '404'
  }, {
    path: '/500',
    name: 'Error'
  }]
}, {
  name: 'General elements',
  icon: external_react_default.a.createElement(external_react_feather_["Bold"], {
    strokeWidth: 1,
    size: 16
  }),
  children: [{
    path: '/general/button',
    name: 'Button'
  }, {
    path: '/general/icon',
    name: 'Icon'
  }]
}, {
  name: 'Navigation',
  icon: external_react_default.a.createElement(external_react_feather_["Navigation"], {
    strokeWidth: 1,
    size: 16
  }),
  children: [{
    path: '/navigation/breadcrumb',
    name: 'Breadcrumb'
  }, {
    path: '/navigation/dropdown',
    name: 'Dropdown'
  }, {
    path: '/navigation/menu',
    name: 'Menu'
  }, {
    path: '/navigation/pagination',
    name: 'Pagination'
  }, {
    path: '/navigation/steps',
    name: 'Steps'
  }]
}, {
  name: 'Data entry',
  icon: external_react_default.a.createElement(external_react_feather_["Type"], {
    strokeWidth: 1,
    size: 16
  }),
  children: [{
    path: '/data-entry/autocomplete',
    name: 'AutoComplete'
  }, {
    path: '/data-entry/checkbox',
    name: 'Checkbox'
  }, {
    path: '/data-entry/cascader',
    name: 'Cascader'
  }, {
    path: '/data-entry/datepicker',
    name: 'Date picker'
  }, {
    path: '/data-entry/form',
    name: 'form'
  }, {
    path: '/data-entry/inputnumber',
    name: 'Input number'
  }, {
    path: '/data-entry/input',
    name: 'Input'
  }, {
    path: '/data-entry/mention',
    name: 'Mention'
  }, {
    path: '/data-entry/rate',
    name: 'Rate'
  }, {
    path: '/data-entry/radio',
    name: 'Radio'
  }, {
    path: '/data-entry/switch',
    name: 'Switch'
  }, {
    path: '/data-entry/slider',
    name: 'Slider'
  }, {
    path: '/data-entry/select',
    name: 'Select'
  }, {
    path: '/data-entry/treeselect',
    name: 'Tree select'
  }, {
    path: '/data-entry/transfer',
    name: 'Transfer'
  }, {
    path: '/data-entry/timepicker',
    name: 'Time picker'
  }, {
    path: '/data-entry/upload',
    name: 'Upload'
  }]
}, {
  name: 'Data display',
  icon: external_react_default.a.createElement(external_react_feather_["Underline"], {
    strokeWidth: 1,
    size: 16
  }),
  children: [{
    path: '/data-display/avatar',
    name: 'Avatar'
  }, {
    path: '/data-display/badge',
    name: 'Badge'
  }, {
    path: '/data-display/collapse',
    name: 'Collapse'
  }, {
    path: '/data-display/carousel',
    name: 'Carousel'
  }, {
    path: '/data-display/card',
    name: 'Card'
  }, {
    path: '/data-display/calendar',
    name: 'Calendar'
  }, {
    path: '/data-display/list',
    name: 'List'
  }, {
    path: '/data-display/popover',
    name: 'Popover'
  }, {
    path: '/data-display/tree',
    name: 'Tree'
  }, {
    path: '/data-display/tooltip',
    name: 'Tooltip'
  }, {
    path: '/data-display/timeline',
    name: 'Timeline'
  }, {
    path: '/data-display/tag',
    name: 'Tag'
  }, {
    path: '/data-display/tabs',
    name: 'Tabs'
  }, {
    path: '/data-display/table',
    name: 'Table'
  }]
}, {
  name: 'Feedback',
  icon: external_react_default.a.createElement(external_react_feather_["Terminal"], {
    strokeWidth: 1,
    size: 16
  }),
  children: [{
    path: '/feedback/alert',
    name: 'Alert'
  }, {
    path: '/feedback/drawer',
    name: 'Drawer'
  }, {
    path: '/feedback/modal',
    name: 'Modal'
  }, {
    path: '/feedback/message',
    name: 'Message'
  }, {
    path: '/feedback/notification',
    name: 'Notification'
  }, {
    path: '/feedback/progress',
    name: 'Progress'
  }, {
    path: '/feedback/popconfirm',
    name: 'Pop confirm'
  }, {
    path: '/feedback/spin',
    name: 'Spin'
  }, {
    path: '/feedback/skeleton',
    name: 'Skeleton'
  }]
}, {
  path: 'https://one-readme.fusepx.com',
  name: 'Documentation',
  icon: external_react_default.a.createElement(external_react_feather_["HelpCircle"], {
    strokeWidth: 1,
    size: 16
  })
}, {
  path: 'https://nyasha.me',
  name: 'Browse more templates',
  icon: external_react_default.a.createElement(external_react_feather_["Link"], {
    strokeWidth: 1,
    size: 16
  })
}]);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/SidebarMenu.js













var SidebarMenu_SubMenu = external_antd_["Menu"].SubMenu;
var SidebarMenu_Header = external_antd_["Layout"].Header,
    Sider = external_antd_["Layout"].Sider;
var rootSubMenuKeys = [];

var getKey = function getKey(name, index) {
  var string = "".concat(name, "-").concat(index);
  var key = string.replace(' ', '-');
  return key.charAt(0).toLowerCase() + key.slice(1);
};

var UserMenu = external_react_default.a.createElement(external_antd_["Menu"], null, external_react_default.a.createElement(external_antd_["Menu"].Item, null, "Settings"), external_react_default.a.createElement(external_antd_["Menu"].Item, null, "Profile"), external_react_default.a.createElement(external_antd_["Menu"].Item, null, "Notifications"));

var SidebarMenu_SidebarContent = function SidebarContent(_ref) {
  var sidebarTheme = _ref.sidebarTheme,
      sidebarMode = _ref.sidebarMode,
      sidebarIcons = _ref.sidebarIcons,
      collapsed = _ref.collapsed,
      router = _ref.router;

  var _useAppState = Object(AppProvider["b" /* useAppState */])(),
      _useAppState2 = Object(slicedToArray["a" /* default */])(_useAppState, 2),
      state = _useAppState2[0],
      dispatch = _useAppState2[1];

  var _useState = Object(external_react_["useState"])([]),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      openKeys = _useState2[0],
      setOpenKeys = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(routes),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 1),
      appRoutes = _useState4[0];

  var pathname = router.pathname;

  var badgeTemplate = function badgeTemplate(badge) {
    return external_react_default.a.createElement(external_antd_["Badge"], {
      count: badge.value
    });
  };

  Object(external_react_["useEffect"])(function () {
    appRoutes.forEach(function (route, index) {
      var isCurrentPath = pathname.indexOf(Object(helpers["e" /* lowercase */])(route.name)) > -1 ? true : false;
      var key = getKey(route.name, index);
      rootSubMenuKeys.push(key);
      if (isCurrentPath) setOpenKeys([].concat(Object(toConsumableArray["a" /* default */])(openKeys), [key]));
    });
  }, []);

  var onOpenChange = function onOpenChange(openKeys) {
    var latestOpenKey = openKeys.slice(-1);

    if (rootSubMenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(Object(toConsumableArray["a" /* default */])(latestOpenKey));
    } else {
      setOpenKeys(latestOpenKey ? Object(toConsumableArray["a" /* default */])(latestOpenKey) : []);
    }
  };

  var menu = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_antd_["Menu"], {
    theme: sidebarTheme,
    className: "border-0 scroll-y",
    style: {
      flex: 1,
      height: '100%'
    },
    mode: sidebarMode,
    openKeys: openKeys,
    onOpenChange: onOpenChange
  }, appRoutes.map(function (route, index) {
    var hasChildren = route.children ? true : false;
    if (!hasChildren) return external_react_default.a.createElement(external_antd_["Menu"].Item, {
      key: getKey(route.name, index),
      className: pathname === route.path ? 'ant-menu-item-selected' : '',
      onClick: function onClick() {
        setOpenKeys([getKey(route.name, index)]);
        if (state.mobile) dispatch({
          type: 'mobileDrawer'
        });
      }
    }, external_react_default.a.createElement(link_default.a, {
      href: route.path,
      prefetch: true
    }, external_react_default.a.createElement("a", null, sidebarIcons && external_react_default.a.createElement("span", {
      className: "anticon"
    }, route.icon), external_react_default.a.createElement("span", {
      className: "mr-auto"
    }, Object(helpers["a" /* capitalize */])(route.name)), route.badge && badgeTemplate(route.badge))));
    if (hasChildren) return external_react_default.a.createElement(SidebarMenu_SubMenu, {
      key: getKey(route.name, index),
      title: external_react_default.a.createElement("span", null, sidebarIcons && external_react_default.a.createElement("span", {
        className: "anticon"
      }, route.icon), external_react_default.a.createElement("span", null, Object(helpers["a" /* capitalize */])(route.name)), route.badge && badgeTemplate(route.badge))
    }, route.children.map(function (subitem, index) {
      return external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: getKey(subitem.name, index),
        className: pathname === subitem.path ? 'ant-menu-item-selected' : '',
        onClick: function onClick() {
          if (state.mobile) dispatch({
            type: 'mobileDrawer'
          });
        }
      }, external_react_default.a.createElement(link_default.a, {
        href: "".concat(subitem.path ? subitem.path : ''),
        prefetch: true
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("span", {
        className: "mr-auto"
      }, Object(helpers["a" /* capitalize */])(subitem.name)), subitem.badge && badgeTemplate(subitem.badge))));
    }));
  })), external_react_default.a.createElement(external_antd_["Divider"], {
    className: "m-0",
    style: {
      display: "".concat(sidebarTheme === 'dark' ? 'none' : '')
    }
  }), external_react_default.a.createElement("div", {
    className: "py-3 px-4 bg-".concat(sidebarTheme)
  }, external_react_default.a.createElement(external_antd_["Row"], {
    type: "flex",
    align: "middle",
    justify: "space-around"
  }, external_react_default.a.createElement(external_antd_["Dropdown"], {
    overlay: UserMenu
  }, external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Badge"], {
    count: 6,
    overflowCount: 5,
    style: {
      color: 'rgb(245, 106, 0)',
      backgroundColor: 'rgb(253, 227, 207)'
    }
  }, external_react_default.a.createElement(external_antd_["Avatar"], {
    shape: "circle",
    size: 40,
    src: "/static/images/avatar.jpg"
  })))), !collapsed && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("span", {
    className: "mr-auto"
  }), external_react_default.a.createElement(link_default.a, {
    href: "https://one-readme.fusepx.com"
  }, external_react_default.a.createElement("a", {
    className: "px-3 ".concat(sidebarTheme === 'dark' ? 'text-white' : 'text-body')
  }, external_react_default.a.createElement(external_antd_["Tooltip"], {
    title: "Help"
  }, external_react_default.a.createElement(external_react_feather_["Book"], {
    size: 20,
    strokeWidth: 1
  })))), external_react_default.a.createElement(external_antd_["Popconfirm"], {
    placement: "top",
    title: "Are you sure you want to sign out?",
    onConfirm: function onConfirm() {
      return router.push('/signin');
    },
    okText: "Yes",
    cancelText: "Cancel"
  }, external_react_default.a.createElement("a", {
    className: "px-3 ".concat(sidebarTheme === 'dark' ? 'text-white' : 'text-body')
  }, external_react_default.a.createElement(external_react_feather_["LogOut"], {
    size: 20,
    strokeWidth: 1
  })))))));
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(styles_Sidebar, null, !state.mobile && external_react_default.a.createElement(Sider, {
    width: 240,
    className: "bg-".concat(sidebarTheme),
    theme: sidebarTheme,
    collapsed: collapsed
  }, menu), external_react_default.a.createElement(external_antd_["Drawer"], {
    closable: false,
    width: 240,
    placement: "left",
    onClose: function onClose() {
      return dispatch({
        type: 'mobileDrawer'
      });
    },
    visible: state.mobileDrawer,
    className: "chat-drawer"
  }, external_react_default.a.createElement(styles_Sidebar, null, external_react_default.a.createElement("div", {
    css: "\n                overflow: hidden;\n                flex: 1 1 auto;\n                flex-direction: column;\n                display: flex;\n                height: 100vh;\n              "
  }, external_react_default.a.createElement(Header, null, external_react_default.a.createElement(SidebarMenu_Header, null, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", {
    className: "brand"
  }, external_react_default.a.createElement(external_react_feather_["Triangle"], {
    size: 24,
    strokeWidth: 1
  }), external_react_default.a.createElement("strong", {
    className: "mx-1",
    css: "\n                          display: inline;\n                        "
  }, state.name))))), menu))), external_react_default.a.createElement(external_antd_["Drawer"], {
    title: "Settings",
    placement: "right",
    closable: true,
    width: 300,
    onClose: function onClose() {
      return dispatch({
        type: 'options'
      });
    },
    visible: state.optionDrawer
  }, external_react_default.a.createElement(external_antd_["List"].Item, {
    actions: [external_react_default.a.createElement(external_antd_["Switch"], {
      size: "small",
      checked: !!state.boxed,
      onChange: function onChange(checked) {
        return dispatch({
          type: 'boxed'
        });
      }
    })]
  }, external_react_default.a.createElement("span", {
    css: "\n                -webkit-box-flex: 1;\n                -webkit-flex: 1 0;\n                -ms-flex: 1 0;\n                flex: 1 0;\n              "
  }, "Boxed view")), external_react_default.a.createElement(external_antd_["List"].Item, {
    actions: [external_react_default.a.createElement(external_antd_["Switch"], {
      size: "small",
      checked: !!state.darkSidebar,
      disabled: state.weakColor,
      onChange: function onChange(checked) {
        return dispatch({
          type: 'sidebarTheme'
        });
      }
    })]
  }, external_react_default.a.createElement("span", {
    css: "\n                -webkit-box-flex: 1;\n                -webkit-flex: 1 0;\n                -ms-flex: 1 0;\n                flex: 1 0;\n              "
  }, "Dark sidebar menu")), external_react_default.a.createElement(external_antd_["List"].Item, {
    actions: [external_react_default.a.createElement(external_antd_["Switch"], {
      size: "small",
      checked: !!state.sidebarPopup,
      disabled: state.collapsed,
      onChange: function onChange(checked) {
        return dispatch({
          type: 'sidebarPopup'
        });
      }
    })]
  }, external_react_default.a.createElement("span", {
    css: "\n                -webkit-box-flex: 1;\n                -webkit-flex: 1 0;\n                -ms-flex: 1 0;\n                flex: 1 0;\n              "
  }, "Popup sub menus")), external_react_default.a.createElement(external_antd_["List"].Item, {
    actions: [external_react_default.a.createElement(external_antd_["Switch"], {
      size: "small",
      checked: !!state.sidebarIcons,
      disabled: state.collapsed,
      onChange: function onChange(checked) {
        return dispatch({
          type: 'sidebarIcons'
        });
      }
    })]
  }, external_react_default.a.createElement("span", {
    css: "\n                -webkit-box-flex: 1;\n                -webkit-flex: 1 0;\n                -ms-flex: 1 0;\n                flex: 1 0;\n              "
  }, "Sidebar menu icons")), external_react_default.a.createElement(external_antd_["List"].Item, {
    actions: [external_react_default.a.createElement(external_antd_["Switch"], {
      size: "small",
      checked: !!state.collapsed,
      onChange: function onChange(checked) {
        return dispatch({
          type: 'collapse'
        });
      }
    })]
  }, external_react_default.a.createElement("span", {
    css: "\n                -webkit-box-flex: 1;\n                -webkit-flex: 1 0;\n                -ms-flex: 1 0;\n                flex: 1 0;\n              "
  }, "Collapsed sidebar menu")), external_react_default.a.createElement(external_antd_["List"].Item, {
    actions: [external_react_default.a.createElement(external_antd_["Switch"], {
      size: "small",
      checked: !!state.weakColor,
      onChange: function onChange(checked) {
        return dispatch({
          type: 'weak',
          value: checked
        });
      }
    })]
  }, external_react_default.a.createElement("span", {
    css: "\n                -webkit-box-flex: 1;\n                -webkit-flex: 1 0;\n                -ms-flex: 1 0;\n                flex: 1 0;\n              "
  }, "Weak colors")))));
};

/* harmony default export */ var SidebarMenu = (Object(router_["withRouter"])(SidebarMenu_SidebarContent));
// CONCATENATED MODULE: ./components/Page.js











var Content = external_antd_["Layout"].Content;
var NonDashboardRoutes = ['/signin', '/signup', '/forgot', '/lockscreen', '/_error'];

var Page_Page = function Page(_ref) {
  var router = _ref.router,
      children = _ref.children;

  var _useState = Object(external_react_["useState"])(true),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useAppState = Object(AppProvider["b" /* useAppState */])(),
      _useAppState2 = Object(slicedToArray["a" /* default */])(_useAppState, 1),
      state = _useAppState2[0];

  var isNotDashboard = NonDashboardRoutes.includes(router.pathname);
  Object(external_react_["useEffect"])(function () {
    setTimeout(function () {
      setLoading(false);
    }, 1000);
  }, [loading]);
  return external_react_default.a.createElement(external_antd_["Spin"], {
    tip: "Loading...",
    size: "large",
    spinning: loading
  }, external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
    theme: GlobalStyles["b" /* theme */]
  }, external_react_default.a.createElement(Container, {
    className: "".concat(state.weakColor ? 'weakColor' : '', " ").concat(state.boxed ? 'boxed shadow-sm' : '')
  }, !isNotDashboard && external_react_default.a.createElement(components_Header, null), external_react_default.a.createElement(external_antd_["Layout"], {
    className: "workspace"
  }, !isNotDashboard && external_react_default.a.createElement(SidebarMenu, {
    sidebarTheme: state.darkSidebar ? 'dark' : 'light',
    sidebarMode: state.sidebarPopup ? 'vertical' : 'inline',
    sidebarIcons: state.sidebarIcons,
    collapsed: state.collapsed
  }), external_react_default.a.createElement(external_antd_["Layout"], null, external_react_default.a.createElement(Content, null, !isNotDashboard ? external_react_default.a.createElement(Inner, null, children) : children))))));
};

/* harmony default export */ var components_Page = (Object(router_["withRouter"])(Page_Page));
// CONCATENATED MODULE: ./pages/_app.js
















router_default.a.events.on('routeChangeStart', function () {
  return external_nprogress_default.a.start();
});
router_default.a.events.on('routeChangeComplete', function () {
  return external_nprogress_default.a.done();
});
router_default.a.events.on('routeChangeError', function () {
  return external_nprogress_default.a.done();
});

var _app_MyApp =
/*#__PURE__*/
function (_App) {
  Object(inherits["a" /* default */])(MyApp, _App);

  function MyApp() {
    Object(classCallCheck["a" /* default */])(this, MyApp);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(MyApp).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return external_react_default.a.createElement(app["Container"], null, external_react_default.a.createElement(GlobalStyles["a" /* GlobalStyles */], null), external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
        name: "viewport",
        content: "user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height"
      }), external_react_default.a.createElement("meta", {
        charSet: "utf-8"
      }), external_react_default.a.createElement("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }), external_react_default.a.createElement("link", {
        rel: "shortcut icon",
        href: "/static/images/triangle.png"
      }), external_react_default.a.createElement("title", null, "One - React Next.js Ant Design Dashboard"), external_react_default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Anonymous+Pro:400,700",
        rel: "stylesheet"
      }), pageProps.ieBrowser && external_react_default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.2.5/polyfill.min.js"
      })), external_react_default.a.createElement(AppProvider["a" /* default */], null, external_react_default.a.createElement(components_Page, null, external_react_default.a.createElement(Component, pageProps))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var Component, ctx, req, pageProps, userAgent, ie;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx, req = _ref.req;
                pageProps = {};
                userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent;
                ie = false;

                if (userAgent.match(/Edge/i) || userAgent.match(/Trident.*rv[ :]*11\./i)) {
                  ie = true;
                }

                if (!Component.getInitialProps) {
                  _context.next = 9;
                  break;
                }

                _context.next = 8;
                return Component.getInitialProps(ctx);

              case 8:
                pageProps = _context.sent;

              case 9:
                pageProps.query = ctx.query;
                pageProps.ieBrowser = ie;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(app_default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_MyApp);

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

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "7201":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _assign = _interopRequireDefault(__webpack_require__("UXZV"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var utils_1 = __webpack_require__("p8BD");

var router_1 = __webpack_require__("4Q3z");

var App =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(App, _react_1$Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: router_1.makePublicRouterInstance(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return react_1.default.createElement(Container, null, react_1.default.createElement(Component, (0, _assign.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                _context.next = 3;
                return utils_1.loadGetInitialProps(Component, ctx);

              case 3:
                pageProps = _context.sent;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return App;
}(react_1.Component);

App.childContextTypes = {
  router: prop_types_1.default.object
};
exports.default = App;

var Container =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Container, _react_1$Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = window.location.hash;
      hash = hash ? hash.substring(1) : false;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Container;
}(react_1.Component);

exports.Container = Container;
var warnUrl = utils_1.execOnce(function () {
  if (false) {}
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

exports.createUrl = createUrl;

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "FWZJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return lowercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return windDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getWeatherIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return objectToCamelCase; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O40h");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Wa2I");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






var weatherIcons = {
  '01d': '/static/weather/day.svg',
  '02d': '/static/weather/cloudy-day-1.svg',
  '03d': '/static/weather/cloudy-day-2.svg',
  '04d': '/static/weather/cloudy-day-3.svg',
  '09d': '/static/weather/rainy-4.svg',
  '10d': '/static/weather/rainy-1.svg',
  '11d': '/static/weather/thunder.svg',
  '13d': '/static/weather/snowy-3.svg',
  '50d': '/static/weather/cloudy-day-3.svg',
  '01n': '/static/weather/night.svg',
  '02n': '/static/weather/cloudy-night-1.svg',
  '03n': '/static/weather/cloudy-night-2.svg',
  '04n': '/static/weather/cloudy-night-3.svg',
  '09n': '/static/weather/rainy-4.svg',
  '10n': '/static/weather/rainy-5.svg',
  '11n': '/static/weather/thunder.svg',
  '13n': '/static/weather/snowy-5.svg',
  '50n': '/static/weather/cloudy-day-3.svg'
}; // Capitalize

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function lowercase(string) {
  return string.toLowerCase();
} // Format price

function formatPrice(number) {
  var fnumber = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_4___default()(number);

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(fnumber);
} // Get wind direction

function windDirection(degree) {
  var sectors = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
  degree += 22.5;

  if (degree < 0) {
    degree = 360 - Math.abs(degree) % 360;
  } else {
    degree = degree % 360;
  }

  var which = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(degree / 45, 10);

  return sectors[which];
} // Get weather icon class

function getWeatherIcon(code, size) {
  var icon = weatherIcons[code];
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    css: "\n        background: none, url(".concat(icon, ") no-repeat;\n        background-size: contain;\n        width: ").concat(size, "px;\n        height: ").concat(size, "px;\n        display: inline-block;\n      ")
  });
} // Get weather data

function getWeather(_x, _x2, _x3) {
  return _getWeather.apply(this, arguments);
}

function _getWeather() {
  _getWeather = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(city, country, days) {
    var forecast, forecast_call;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            forecast = undefined;
            _context.prev = 1;
            _context.next = 4;
            return fetch("//api.openweathermap.org/data/2.5/forecast?q=".concat(city, ",").concat(country, "&appid=").concat("", "&cnt=").concat(days, "&units=metric")).then(function (res) {
              if (res.ok) {
                return res;
              } else {
                throw Error("Request rejected with status ".concat(res.status));
              }
            }).catch(console.error);

          case 4:
            forecast_call = _context.sent;

            if (!(forecast_call !== undefined)) {
              _context.next = 9;
              break;
            }

            _context.next = 8;
            return forecast_call.json();

          case 8:
            forecast = _context.sent;

          case 9:
            return _context.abrupt("return", forecast);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", '');

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));
  return _getWeather.apply(this, arguments);
}

function toCamelCase(str) {
  return str.toLowerCase().replace(/[-_]+/g, ' ').replace(/[^\w\s]/g, '').replace(/ (.)/g, function ($1) {
    return $1.toUpperCase();
  }).replace(/ /g, '');
}

function objectToCamelCase(origObj) {
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(origObj).reduce(function (newObj, key) {
    var val = origObj[key];
    var newVal = typeof val === 'object' ? objectToCamelCase(val) : val;
    newObj[toCamelCase(key)] = newVal;
    return newObj;
  }, {});
}

/***/ }),

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "GXHU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: external "less-vars-to-js"
var external_less_vars_to_js_ = __webpack_require__("bPsq");
var external_less_vars_to_js_default = /*#__PURE__*/__webpack_require__.n(external_less_vars_to_js_);

// EXTERNAL MODULE: ./lib/helpers.js
var helpers = __webpack_require__("FWZJ");

// CONCATENATED MODULE: ./node_modules/raw-loader/dist/cjs.js!./assets/antd-custom.less
/* harmony default export */ var antd_custom = ("// Default ant design variales ->>> https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less\n// -------- Colors -----------\n@primary-color          : #007bff;\n@info-color             : #1890ff;\n@success-color          : #52c41a;\n@processing-color       : #1890ff;\n@error-color            : #f5222d;\n@highlight-color        : #f5222d;\n@warning-color          : #faad14;\n@normal-color           : #d9d9d9;\n@background-color       : #f7f7f9;\n@dark-color             : rgb(51,51,51);\n@text-color             : rgba(0, 0, 0, .65);\n@text-color-secondary   : rgba(0,0,0,.45);\n\n// -------- Border radius -----------\n@border-radius-base     : 4px;\n@border-radius-sm       : 4px;\n\n// -------- Border color -----------\n@border-color-base      : hsv(0, 0, 85%);\n@border-color-split     : rgba(0, 0, 0, 0.05);\n\n// -------- Font family -----------\n@font-family            : \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif,\n\"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n@code-family            : \"Anonymous Pro\", \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n\n// -------- Menu -----------\n@menu-inline-toplevel-item-height: 36px;\n@menu-item-height       : 36px;\n\n// -------- Header -----------\n@layout-header-background: #ffffff;\n@layout-header-height    : 60px;\n\n// -------- Card -----------\n@card-padding-base      : 16px;\n@card-padding-wider      : 16px;\n\n\n\n@menu-dark-bg: rgb(51,51,51);\n@menu-dark-submenu-bg: rgb(51,51,51);");
// CONCATENATED MODULE: ./components/styles/GlobalStyles.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return theme; });



function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  @import url('/static/app.css');\n  @import url('/static/nprogress.css');\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  #__next > .ant-spin-nested-loading > .ant-spin-blur:after {\n    opacity: .8;\n  }\n\n  html {\n    box-sizing: border-box;\n    font-size: 14px;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n\n  body {\n    background-color: ", ";\n    -ms-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering:optimizeLegibility;\n  }\n\n  #nprogress .bar {\n    background: ", ";\n  }\n  #nprogress .peg {\n    box-shadow: 0 0 10px ", ", 0 0 5px ", ";\n  }\n  #nprogress .spinner-icon {\n    border-top-color: ", ";\n    border-left-color: ", ";\n  }\n\n  .weakColor{\n    -webkit-filter:invert(80%);\n    filter:invert(80%)\n  }\n\n  .weakColor img {\n    -webkit-filter:invert(100%);\n    filter:invert(100%)\n  }\n\n  a:hover {\n    text-decoration: none;\n  }\n\n  svg {\n    overflow: hidden;\n    vertical-align: middle;\n  }\n  .brand {\n    display: flex;\n    align-items: center;\n    margin-right: 1rem;\n    font-size: 1.25rem;\n    white-space: nowrap;\n    color: ", ";\n    justify-content: center;\n  }\n  .brand > svg {\n    fill: ", ";\n  }\n  .anticon {\n    vertical-align: middle\n  }\n\n  b, strong {\n    font-weight: 600;\n  }\n\n  h1, h2, h3, h4, h5, h6,\n  .h1, .h2, .h3, .h4, .h5, .h6 {\n    margin-bottom: 0.5rem;\n    font-family: inherit;\n    font-weight: 400;\n    line-height: 1.2;\n  }\n\n  h1, .h1 {\n    font-size: 2.5rem;\n  }\n\n  h2, .h2 {\n    font-size: 2rem;\n  }\n\n  h3, .h3 {\n    font-size: 1.75rem;\n  }\n\n  h4, .h4 {\n    font-size: 1.5rem;\n  }\n\n  h5, .h5 {\n    font-size: 1.25rem;\n  }\n\n  h6, .h6 {\n    font-size: 1rem;\n  }\n\n  .clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n  .list-unstyled {\n    padding-left: 0;\n    list-style: none;\n  }\n\n  .overflow-hidden {\n    overflow: hidden;\n  }\n\n  .scroll-y {\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n\n  .scroll-x {\n    overflow-x: auto!important;\n  }\n\n  .fill-workspace {\n    height: calc(100vh - 105px);\n  }\n\n  .full-workspace {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right:0;\n    overflow: hidden;\n  }\n\n  .bg-primary {\n    background-color: ", " !important;\n  }\n\n  .bg-normal {\n    background-color: ", " !important;\n  }\n\n  .bg-success {\n    background-color: ", " !important;\n  }\n\n  .bg-info {\n    background-color: ", " !important;\n  }\n\n  .bg-warning {\n    background-color: ", " !important;\n  }\n\n  .bg-error {\n    background-color: ", " !important;\n  }\n\n  .bg-dark {\n    background-color: ", " !important;\n  }\n\n  .bg-white {\n    background-color: #fff !important;\n  }\n\n  .bg-transparent {\n    background-color: transparent !important;\n  }\n\n  .border {\n    border: 1px solid ", " !important;\n  }\n\n  .border-top {\n    border-top: 1px solid ", " !important;\n  }\n\n  .border-right {\n    border-right: 1px solid ", " !important;\n  }\n\n  .border-bottom {\n    border-bottom: 1px solid ", " !important;\n  }\n\n  .border-left {\n    border-left: 1px solid ", " !important;\n  }\n\n  .border-0 {\n    border: 0 !important;\n  }\n\n  .border-top-0 {\n    border-top: 0 !important;\n  }\n\n  .border-right-0 {\n    border-right: 0 !important;\n  }\n\n  .border-bottom-0 {\n    border-bottom: 0 !important;\n  }\n\n  .border-left-0 {\n    border-left: 0 !important;\n  }\n\n  .border-primary {\n    border-color: ", " !important;\n  }\n\n  .border-normal {\n    border-color: ", " !important;\n  }\n\n  .border-success {\n    border-color: ", " !important;\n  }\n\n  .border-info {\n    border-color: ", " !important;\n  }\n\n  .border-warning {\n    border-color: ", " !important;\n  }\n\n  .border-error {\n    border-color: ", " !important;\n  }\n\n  .border-white {\n    border-color: #fff !important;\n  }\n\n  .rounded {\n    border-radius: ", " !important;\n  }\n\n  .rounded-top {\n    border-top-left-radius: ", " !important;\n    border-top-right-radius: ", " !important;\n  }\n\n  .rounded-right {\n    border-top-right-radius: ", " !important;\n    border-bottom-right-radius: ", " !important;\n  }\n\n  .rounded-bottom {\n    border-bottom-right-radius: ", " !important;\n    border-bottom-left-radius: ", " !important;\n  }\n\n  .rounded-left {\n    border-top-left-radius: ", " !important;\n    border-bottom-left-radius: ", " !important;\n  }\n\n  .rounded-circle {\n    border-radius: 50% !important;\n  }\n\n  .rounded-0 {\n    border-radius: 0 !important;\n  }\n\n  .shadow-sm {\n    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n  }\n\n  .shadow {\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n  }\n\n  .shadow-lg {\n    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n  }\n\n  .shadow-none, .shadow-0 {\n    box-shadow: none !important;\n  }\n\n  .m-0 {\n    margin: 0 !important;\n  }\n\n  .mt-0,\n  .my-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-0,\n  .mx-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-0,\n  .my-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-0,\n  .mx-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-1,\n  .my-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-1,\n  .mx-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-1,\n  .my-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-1,\n  .mx-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-2,\n  .my-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-2,\n  .mx-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-2,\n  .my-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-2,\n  .mx-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-3,\n  .my-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-3,\n  .mx-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-3,\n  .my-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-3,\n  .mx-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-4,\n  .my-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-4,\n  .mx-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-4,\n  .my-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-4,\n  .mx-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-5,\n  .my-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-5,\n  .mx-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-5,\n  .my-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-5,\n  .mx-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-0 {\n    padding: 0 !important;\n  }\n\n  .pt-0,\n  .py-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-0,\n  .px-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-0,\n  .py-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-0,\n  .px-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-1,\n  .py-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-1,\n  .px-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-1,\n  .py-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-1,\n  .px-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-2,\n  .py-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-2,\n  .px-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-2,\n  .py-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-2,\n  .px-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-3,\n  .py-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-3,\n  .px-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-3,\n  .py-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-3,\n  .px-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-4,\n  .py-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-4,\n  .px-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-4,\n  .py-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-4,\n  .px-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-5,\n  .py-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-5,\n  .px-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-5,\n  .py-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-5,\n  .px-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-auto {\n    margin: auto !important;\n  }\n\n  .mt-auto,\n  .my-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-auto,\n  .mx-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-auto,\n  .my-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-auto,\n  .mx-auto {\n    margin-left: auto !important;\n  }\n\n  @media (min-width: 576px) {\n    .m-sm-0 {\n      margin: 0 !important;\n    }\n    .mt-sm-0,\n    .my-sm-0 {\n      margin-top: 0 !important;\n    }\n    .mr-sm-0,\n    .mx-sm-0 {\n      margin-right: 0 !important;\n    }\n    .mb-sm-0,\n    .my-sm-0 {\n      margin-bottom: 0 !important;\n    }\n    .ml-sm-0,\n    .mx-sm-0 {\n      margin-left: 0 !important;\n    }\n    .m-sm-1 {\n      margin: 0.25rem !important;\n    }\n    .mt-sm-1,\n    .my-sm-1 {\n      margin-top: 0.25rem !important;\n    }\n    .mr-sm-1,\n    .mx-sm-1 {\n      margin-right: 0.25rem !important;\n    }\n    .mb-sm-1,\n    .my-sm-1 {\n      margin-bottom: 0.25rem !important;\n    }\n    .ml-sm-1,\n    .mx-sm-1 {\n      margin-left: 0.25rem !important;\n    }\n    .m-sm-2 {\n      margin: 0.5rem !important;\n    }\n    .mt-sm-2,\n    .my-sm-2 {\n      margin-top: 0.5rem !important;\n    }\n    .mr-sm-2,\n    .mx-sm-2 {\n      margin-right: 0.5rem !important;\n    }\n    .mb-sm-2,\n    .my-sm-2 {\n      margin-bottom: 0.5rem !important;\n    }\n    .ml-sm-2,\n    .mx-sm-2 {\n      margin-left: 0.5rem !important;\n    }\n    .m-sm-3 {\n      margin: 1rem !important;\n    }\n    .mt-sm-3,\n    .my-sm-3 {\n      margin-top: 1rem !important;\n    }\n    .mr-sm-3,\n    .mx-sm-3 {\n      margin-right: 1rem !important;\n    }\n    .mb-sm-3,\n    .my-sm-3 {\n      margin-bottom: 1rem !important;\n    }\n    .ml-sm-3,\n    .mx-sm-3 {\n      margin-left: 1rem !important;\n    }\n    .m-sm-4 {\n      margin: 1.5rem !important;\n    }\n    .mt-sm-4,\n    .my-sm-4 {\n      margin-top: 1.5rem !important;\n    }\n    .mr-sm-4,\n    .mx-sm-4 {\n      margin-right: 1.5rem !important;\n    }\n    .mb-sm-4,\n    .my-sm-4 {\n      margin-bottom: 1.5rem !important;\n    }\n    .ml-sm-4,\n    .mx-sm-4 {\n      margin-left: 1.5rem !important;\n    }\n    .m-sm-5 {\n      margin: 3rem !important;\n    }\n    .mt-sm-5,\n    .my-sm-5 {\n      margin-top: 3rem !important;\n    }\n    .mr-sm-5,\n    .mx-sm-5 {\n      margin-right: 3rem !important;\n    }\n    .mb-sm-5,\n    .my-sm-5 {\n      margin-bottom: 3rem !important;\n    }\n    .ml-sm-5,\n    .mx-sm-5 {\n      margin-left: 3rem !important;\n    }\n    .p-sm-0 {\n      padding: 0 !important;\n    }\n    .pt-sm-0,\n    .py-sm-0 {\n      padding-top: 0 !important;\n    }\n    .pr-sm-0,\n    .px-sm-0 {\n      padding-right: 0 !important;\n    }\n    .pb-sm-0,\n    .py-sm-0 {\n      padding-bottom: 0 !important;\n    }\n    .pl-sm-0,\n    .px-sm-0 {\n      padding-left: 0 !important;\n    }\n    .p-sm-1 {\n      padding: 0.25rem !important;\n    }\n    .pt-sm-1,\n    .py-sm-1 {\n      padding-top: 0.25rem !important;\n    }\n    .pr-sm-1,\n    .px-sm-1 {\n      padding-right: 0.25rem !important;\n    }\n    .pb-sm-1,\n    .py-sm-1 {\n      padding-bottom: 0.25rem !important;\n    }\n    .pl-sm-1,\n    .px-sm-1 {\n      padding-left: 0.25rem !important;\n    }\n    .p-sm-2 {\n      padding: 0.5rem !important;\n    }\n    .pt-sm-2,\n    .py-sm-2 {\n      padding-top: 0.5rem !important;\n    }\n    .pr-sm-2,\n    .px-sm-2 {\n      padding-right: 0.5rem !important;\n    }\n    .pb-sm-2,\n    .py-sm-2 {\n      padding-bottom: 0.5rem !important;\n    }\n    .pl-sm-2,\n    .px-sm-2 {\n      padding-left: 0.5rem !important;\n    }\n    .p-sm-3 {\n      padding: 1rem !important;\n    }\n    .pt-sm-3,\n    .py-sm-3 {\n      padding-top: 1rem !important;\n    }\n    .pr-sm-3,\n    .px-sm-3 {\n      padding-right: 1rem !important;\n    }\n    .pb-sm-3,\n    .py-sm-3 {\n      padding-bottom: 1rem !important;\n    }\n    .pl-sm-3,\n    .px-sm-3 {\n      padding-left: 1rem !important;\n    }\n    .p-sm-4 {\n      padding: 1.5rem !important;\n    }\n    .pt-sm-4,\n    .py-sm-4 {\n      padding-top: 1.5rem !important;\n    }\n    .pr-sm-4,\n    .px-sm-4 {\n      padding-right: 1.5rem !important;\n    }\n    .pb-sm-4,\n    .py-sm-4 {\n      padding-bottom: 1.5rem !important;\n    }\n    .pl-sm-4,\n    .px-sm-4 {\n      padding-left: 1.5rem !important;\n    }\n    .p-sm-5 {\n      padding: 3rem !important;\n    }\n    .pt-sm-5,\n    .py-sm-5 {\n      padding-top: 3rem !important;\n    }\n    .pr-sm-5,\n    .px-sm-5 {\n      padding-right: 3rem !important;\n    }\n    .pb-sm-5,\n    .py-sm-5 {\n      padding-bottom: 3rem !important;\n    }\n    .pl-sm-5,\n    .px-sm-5 {\n      padding-left: 3rem !important;\n    }\n    .m-sm-auto {\n      margin: auto !important;\n    }\n    .mt-sm-auto,\n    .my-sm-auto {\n      margin-top: auto !important;\n    }\n    .mr-sm-auto,\n    .mx-sm-auto {\n      margin-right: auto !important;\n    }\n    .mb-sm-auto,\n    .my-sm-auto {\n      margin-bottom: auto !important;\n    }\n    .ml-sm-auto,\n    .mx-sm-auto {\n      margin-left: auto !important;\n    }\n  }\n\n  @media (min-width: 768px) {\n    .m-md-0 {\n      margin: 0 !important;\n    }\n    .mt-md-0,\n    .my-md-0 {\n      margin-top: 0 !important;\n    }\n    .mr-md-0,\n    .mx-md-0 {\n      margin-right: 0 !important;\n    }\n    .mb-md-0,\n    .my-md-0 {\n      margin-bottom: 0 !important;\n    }\n    .ml-md-0,\n    .mx-md-0 {\n      margin-left: 0 !important;\n    }\n    .m-md-1 {\n      margin: 0.25rem !important;\n    }\n    .mt-md-1,\n    .my-md-1 {\n      margin-top: 0.25rem !important;\n    }\n    .mr-md-1,\n    .mx-md-1 {\n      margin-right: 0.25rem !important;\n    }\n    .mb-md-1,\n    .my-md-1 {\n      margin-bottom: 0.25rem !important;\n    }\n    .ml-md-1,\n    .mx-md-1 {\n      margin-left: 0.25rem !important;\n    }\n    .m-md-2 {\n      margin: 0.5rem !important;\n    }\n    .mt-md-2,\n    .my-md-2 {\n      margin-top: 0.5rem !important;\n    }\n    .mr-md-2,\n    .mx-md-2 {\n      margin-right: 0.5rem !important;\n    }\n    .mb-md-2,\n    .my-md-2 {\n      margin-bottom: 0.5rem !important;\n    }\n    .ml-md-2,\n    .mx-md-2 {\n      margin-left: 0.5rem !important;\n    }\n    .m-md-3 {\n      margin: 1rem !important;\n    }\n    .mt-md-3,\n    .my-md-3 {\n      margin-top: 1rem !important;\n    }\n    .mr-md-3,\n    .mx-md-3 {\n      margin-right: 1rem !important;\n    }\n    .mb-md-3,\n    .my-md-3 {\n      margin-bottom: 1rem !important;\n    }\n    .ml-md-3,\n    .mx-md-3 {\n      margin-left: 1rem !important;\n    }\n    .m-md-4 {\n      margin: 1.5rem !important;\n    }\n    .mt-md-4,\n    .my-md-4 {\n      margin-top: 1.5rem !important;\n    }\n    .mr-md-4,\n    .mx-md-4 {\n      margin-right: 1.5rem !important;\n    }\n    .mb-md-4,\n    .my-md-4 {\n      margin-bottom: 1.5rem !important;\n    }\n    .ml-md-4,\n    .mx-md-4 {\n      margin-left: 1.5rem !important;\n    }\n    .m-md-5 {\n      margin: 3rem !important;\n    }\n    .mt-md-5,\n    .my-md-5 {\n      margin-top: 3rem !important;\n    }\n    .mr-md-5,\n    .mx-md-5 {\n      margin-right: 3rem !important;\n    }\n    .mb-md-5,\n    .my-md-5 {\n      margin-bottom: 3rem !important;\n    }\n    .ml-md-5,\n    .mx-md-5 {\n      margin-left: 3rem !important;\n    }\n    .p-md-0 {\n      padding: 0 !important;\n    }\n    .pt-md-0,\n    .py-md-0 {\n      padding-top: 0 !important;\n    }\n    .pr-md-0,\n    .px-md-0 {\n      padding-right: 0 !important;\n    }\n    .pb-md-0,\n    .py-md-0 {\n      padding-bottom: 0 !important;\n    }\n    .pl-md-0,\n    .px-md-0 {\n      padding-left: 0 !important;\n    }\n    .p-md-1 {\n      padding: 0.25rem !important;\n    }\n    .pt-md-1,\n    .py-md-1 {\n      padding-top: 0.25rem !important;\n    }\n    .pr-md-1,\n    .px-md-1 {\n      padding-right: 0.25rem !important;\n    }\n    .pb-md-1,\n    .py-md-1 {\n      padding-bottom: 0.25rem !important;\n    }\n    .pl-md-1,\n    .px-md-1 {\n      padding-left: 0.25rem !important;\n    }\n    .p-md-2 {\n      padding: 0.5rem !important;\n    }\n    .pt-md-2,\n    .py-md-2 {\n      padding-top: 0.5rem !important;\n    }\n    .pr-md-2,\n    .px-md-2 {\n      padding-right: 0.5rem !important;\n    }\n    .pb-md-2,\n    .py-md-2 {\n      padding-bottom: 0.5rem !important;\n    }\n    .pl-md-2,\n    .px-md-2 {\n      padding-left: 0.5rem !important;\n    }\n    .p-md-3 {\n      padding: 1rem !important;\n    }\n    .pt-md-3,\n    .py-md-3 {\n      padding-top: 1rem !important;\n    }\n    .pr-md-3,\n    .px-md-3 {\n      padding-right: 1rem !important;\n    }\n    .pb-md-3,\n    .py-md-3 {\n      padding-bottom: 1rem !important;\n    }\n    .pl-md-3,\n    .px-md-3 {\n      padding-left: 1rem !important;\n    }\n    .p-md-4 {\n      padding: 1.5rem !important;\n    }\n    .pt-md-4,\n    .py-md-4 {\n      padding-top: 1.5rem !important;\n    }\n    .pr-md-4,\n    .px-md-4 {\n      padding-right: 1.5rem !important;\n    }\n    .pb-md-4,\n    .py-md-4 {\n      padding-bottom: 1.5rem !important;\n    }\n    .pl-md-4,\n    .px-md-4 {\n      padding-left: 1.5rem !important;\n    }\n    .p-md-5 {\n      padding: 3rem !important;\n    }\n    .pt-md-5,\n    .py-md-5 {\n      padding-top: 3rem !important;\n    }\n    .pr-md-5,\n    .px-md-5 {\n      padding-right: 3rem !important;\n    }\n    .pb-md-5,\n    .py-md-5 {\n      padding-bottom: 3rem !important;\n    }\n    .pl-md-5,\n    .px-md-5 {\n      padding-left: 3rem !important;\n    }\n    .m-md-auto {\n      margin: auto !important;\n    }\n    .mt-md-auto,\n    .my-md-auto {\n      margin-top: auto !important;\n    }\n    .mr-md-auto,\n    .mx-md-auto {\n      margin-right: auto !important;\n    }\n    .mb-md-auto,\n    .my-md-auto {\n      margin-bottom: auto !important;\n    }\n    .ml-md-auto,\n    .mx-md-auto {\n      margin-left: auto !important;\n    }\n  }\n\n  @media (min-width: 992px) {\n    .m-lg-0 {\n      margin: 0 !important;\n    }\n    .mt-lg-0,\n    .my-lg-0 {\n      margin-top: 0 !important;\n    }\n    .mr-lg-0,\n    .mx-lg-0 {\n      margin-right: 0 !important;\n    }\n    .mb-lg-0,\n    .my-lg-0 {\n      margin-bottom: 0 !important;\n    }\n    .ml-lg-0,\n    .mx-lg-0 {\n      margin-left: 0 !important;\n    }\n    .m-lg-1 {\n      margin: 0.25rem !important;\n    }\n    .mt-lg-1,\n    .my-lg-1 {\n      margin-top: 0.25rem !important;\n    }\n    .mr-lg-1,\n    .mx-lg-1 {\n      margin-right: 0.25rem !important;\n    }\n    .mb-lg-1,\n    .my-lg-1 {\n      margin-bottom: 0.25rem !important;\n    }\n    .ml-lg-1,\n    .mx-lg-1 {\n      margin-left: 0.25rem !important;\n    }\n    .m-lg-2 {\n      margin: 0.5rem !important;\n    }\n    .mt-lg-2,\n    .my-lg-2 {\n      margin-top: 0.5rem !important;\n    }\n    .mr-lg-2,\n    .mx-lg-2 {\n      margin-right: 0.5rem !important;\n    }\n    .mb-lg-2,\n    .my-lg-2 {\n      margin-bottom: 0.5rem !important;\n    }\n    .ml-lg-2,\n    .mx-lg-2 {\n      margin-left: 0.5rem !important;\n    }\n    .m-lg-3 {\n      margin: 1rem !important;\n    }\n    .mt-lg-3,\n    .my-lg-3 {\n      margin-top: 1rem !important;\n    }\n    .mr-lg-3,\n    .mx-lg-3 {\n      margin-right: 1rem !important;\n    }\n    .mb-lg-3,\n    .my-lg-3 {\n      margin-bottom: 1rem !important;\n    }\n    .ml-lg-3,\n    .mx-lg-3 {\n      margin-left: 1rem !important;\n    }\n    .m-lg-4 {\n      margin: 1.5rem !important;\n    }\n    .mt-lg-4,\n    .my-lg-4 {\n      margin-top: 1.5rem !important;\n    }\n    .mr-lg-4,\n    .mx-lg-4 {\n      margin-right: 1.5rem !important;\n    }\n    .mb-lg-4,\n    .my-lg-4 {\n      margin-bottom: 1.5rem !important;\n    }\n    .ml-lg-4,\n    .mx-lg-4 {\n      margin-left: 1.5rem !important;\n    }\n    .m-lg-5 {\n      margin: 3rem !important;\n    }\n    .mt-lg-5,\n    .my-lg-5 {\n      margin-top: 3rem !important;\n    }\n    .mr-lg-5,\n    .mx-lg-5 {\n      margin-right: 3rem !important;\n    }\n    .mb-lg-5,\n    .my-lg-5 {\n      margin-bottom: 3rem !important;\n    }\n    .ml-lg-5,\n    .mx-lg-5 {\n      margin-left: 3rem !important;\n    }\n    .p-lg-0 {\n      padding: 0 !important;\n    }\n    .pt-lg-0,\n    .py-lg-0 {\n      padding-top: 0 !important;\n    }\n    .pr-lg-0,\n    .px-lg-0 {\n      padding-right: 0 !important;\n    }\n    .pb-lg-0,\n    .py-lg-0 {\n      padding-bottom: 0 !important;\n    }\n    .pl-lg-0,\n    .px-lg-0 {\n      padding-left: 0 !important;\n    }\n    .p-lg-1 {\n      padding: 0.25rem !important;\n    }\n    .pt-lg-1,\n    .py-lg-1 {\n      padding-top: 0.25rem !important;\n    }\n    .pr-lg-1,\n    .px-lg-1 {\n      padding-right: 0.25rem !important;\n    }\n    .pb-lg-1,\n    .py-lg-1 {\n      padding-bottom: 0.25rem !important;\n    }\n    .pl-lg-1,\n    .px-lg-1 {\n      padding-left: 0.25rem !important;\n    }\n    .p-lg-2 {\n      padding: 0.5rem !important;\n    }\n    .pt-lg-2,\n    .py-lg-2 {\n      padding-top: 0.5rem !important;\n    }\n    .pr-lg-2,\n    .px-lg-2 {\n      padding-right: 0.5rem !important;\n    }\n    .pb-lg-2,\n    .py-lg-2 {\n      padding-bottom: 0.5rem !important;\n    }\n    .pl-lg-2,\n    .px-lg-2 {\n      padding-left: 0.5rem !important;\n    }\n    .p-lg-3 {\n      padding: 1rem !important;\n    }\n    .pt-lg-3,\n    .py-lg-3 {\n      padding-top: 1rem !important;\n    }\n    .pr-lg-3,\n    .px-lg-3 {\n      padding-right: 1rem !important;\n    }\n    .pb-lg-3,\n    .py-lg-3 {\n      padding-bottom: 1rem !important;\n    }\n    .pl-lg-3,\n    .px-lg-3 {\n      padding-left: 1rem !important;\n    }\n    .p-lg-4 {\n      padding: 1.5rem !important;\n    }\n    .pt-lg-4,\n    .py-lg-4 {\n      padding-top: 1.5rem !important;\n    }\n    .pr-lg-4,\n    .px-lg-4 {\n      padding-right: 1.5rem !important;\n    }\n    .pb-lg-4,\n    .py-lg-4 {\n      padding-bottom: 1.5rem !important;\n    }\n    .pl-lg-4,\n    .px-lg-4 {\n      padding-left: 1.5rem !important;\n    }\n    .p-lg-5 {\n      padding: 3rem !important;\n    }\n    .pt-lg-5,\n    .py-lg-5 {\n      padding-top: 3rem !important;\n    }\n    .pr-lg-5,\n    .px-lg-5 {\n      padding-right: 3rem !important;\n    }\n    .pb-lg-5,\n    .py-lg-5 {\n      padding-bottom: 3rem !important;\n    }\n    .pl-lg-5,\n    .px-lg-5 {\n      padding-left: 3rem !important;\n    }\n    .m-lg-auto {\n      margin: auto !important;\n    }\n    .mt-lg-auto,\n    .my-lg-auto {\n      margin-top: auto !important;\n    }\n    .mr-lg-auto,\n    .mx-lg-auto {\n      margin-right: auto !important;\n    }\n    .mb-lg-auto,\n    .my-lg-auto {\n      margin-bottom: auto !important;\n    }\n    .ml-lg-auto,\n    .mx-lg-auto {\n      margin-left: auto !important;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    .m-xl-0 {\n      margin: 0 !important;\n    }\n    .mt-xl-0,\n    .my-xl-0 {\n      margin-top: 0 !important;\n    }\n    .mr-xl-0,\n    .mx-xl-0 {\n      margin-right: 0 !important;\n    }\n    .mb-xl-0,\n    .my-xl-0 {\n      margin-bottom: 0 !important;\n    }\n    .ml-xl-0,\n    .mx-xl-0 {\n      margin-left: 0 !important;\n    }\n    .m-xl-1 {\n      margin: 0.25rem !important;\n    }\n    .mt-xl-1,\n    .my-xl-1 {\n      margin-top: 0.25rem !important;\n    }\n    .mr-xl-1,\n    .mx-xl-1 {\n      margin-right: 0.25rem !important;\n    }\n    .mb-xl-1,\n    .my-xl-1 {\n      margin-bottom: 0.25rem !important;\n    }\n    .ml-xl-1,\n    .mx-xl-1 {\n      margin-left: 0.25rem !important;\n    }\n    .m-xl-2 {\n      margin: 0.5rem !important;\n    }\n    .mt-xl-2,\n    .my-xl-2 {\n      margin-top: 0.5rem !important;\n    }\n    .mr-xl-2,\n    .mx-xl-2 {\n      margin-right: 0.5rem !important;\n    }\n    .mb-xl-2,\n    .my-xl-2 {\n      margin-bottom: 0.5rem !important;\n    }\n    .ml-xl-2,\n    .mx-xl-2 {\n      margin-left: 0.5rem !important;\n    }\n    .m-xl-3 {\n      margin: 1rem !important;\n    }\n    .mt-xl-3,\n    .my-xl-3 {\n      margin-top: 1rem !important;\n    }\n    .mr-xl-3,\n    .mx-xl-3 {\n      margin-right: 1rem !important;\n    }\n    .mb-xl-3,\n    .my-xl-3 {\n      margin-bottom: 1rem !important;\n    }\n    .ml-xl-3,\n    .mx-xl-3 {\n      margin-left: 1rem !important;\n    }\n    .m-xl-4 {\n      margin: 1.5rem !important;\n    }\n    .mt-xl-4,\n    .my-xl-4 {\n      margin-top: 1.5rem !important;\n    }\n    .mr-xl-4,\n    .mx-xl-4 {\n      margin-right: 1.5rem !important;\n    }\n    .mb-xl-4,\n    .my-xl-4 {\n      margin-bottom: 1.5rem !important;\n    }\n    .ml-xl-4,\n    .mx-xl-4 {\n      margin-left: 1.5rem !important;\n    }\n    .m-xl-5 {\n      margin: 3rem !important;\n    }\n    .mt-xl-5,\n    .my-xl-5 {\n      margin-top: 3rem !important;\n    }\n    .mr-xl-5,\n    .mx-xl-5 {\n      margin-right: 3rem !important;\n    }\n    .mb-xl-5,\n    .my-xl-5 {\n      margin-bottom: 3rem !important;\n    }\n    .ml-xl-5,\n    .mx-xl-5 {\n      margin-left: 3rem !important;\n    }\n    .p-xl-0 {\n      padding: 0 !important;\n    }\n    .pt-xl-0,\n    .py-xl-0 {\n      padding-top: 0 !important;\n    }\n    .pr-xl-0,\n    .px-xl-0 {\n      padding-right: 0 !important;\n    }\n    .pb-xl-0,\n    .py-xl-0 {\n      padding-bottom: 0 !important;\n    }\n    .pl-xl-0,\n    .px-xl-0 {\n      padding-left: 0 !important;\n    }\n    .p-xl-1 {\n      padding: 0.25rem !important;\n    }\n    .pt-xl-1,\n    .py-xl-1 {\n      padding-top: 0.25rem !important;\n    }\n    .pr-xl-1,\n    .px-xl-1 {\n      padding-right: 0.25rem !important;\n    }\n    .pb-xl-1,\n    .py-xl-1 {\n      padding-bottom: 0.25rem !important;\n    }\n    .pl-xl-1,\n    .px-xl-1 {\n      padding-left: 0.25rem !important;\n    }\n    .p-xl-2 {\n      padding: 0.5rem !important;\n    }\n    .pt-xl-2,\n    .py-xl-2 {\n      padding-top: 0.5rem !important;\n    }\n    .pr-xl-2,\n    .px-xl-2 {\n      padding-right: 0.5rem !important;\n    }\n    .pb-xl-2,\n    .py-xl-2 {\n      padding-bottom: 0.5rem !important;\n    }\n    .pl-xl-2,\n    .px-xl-2 {\n      padding-left: 0.5rem !important;\n    }\n    .p-xl-3 {\n      padding: 1rem !important;\n    }\n    .pt-xl-3,\n    .py-xl-3 {\n      padding-top: 1rem !important;\n    }\n    .pr-xl-3,\n    .px-xl-3 {\n      padding-right: 1rem !important;\n    }\n    .pb-xl-3,\n    .py-xl-3 {\n      padding-bottom: 1rem !important;\n    }\n    .pl-xl-3,\n    .px-xl-3 {\n      padding-left: 1rem !important;\n    }\n    .p-xl-4 {\n      padding: 1.5rem !important;\n    }\n    .pt-xl-4,\n    .py-xl-4 {\n      padding-top: 1.5rem !important;\n    }\n    .pr-xl-4,\n    .px-xl-4 {\n      padding-right: 1.5rem !important;\n    }\n    .pb-xl-4,\n    .py-xl-4 {\n      padding-bottom: 1.5rem !important;\n    }\n    .pl-xl-4,\n    .px-xl-4 {\n      padding-left: 1.5rem !important;\n    }\n    .p-xl-5 {\n      padding: 3rem !important;\n    }\n    .pt-xl-5,\n    .py-xl-5 {\n      padding-top: 3rem !important;\n    }\n    .pr-xl-5,\n    .px-xl-5 {\n      padding-right: 3rem !important;\n    }\n    .pb-xl-5,\n    .py-xl-5 {\n      padding-bottom: 3rem !important;\n    }\n    .pl-xl-5,\n    .px-xl-5 {\n      padding-left: 3rem !important;\n    }\n    .m-xl-auto {\n      margin: auto !important;\n    }\n    .mt-xl-auto,\n    .my-xl-auto {\n      margin-top: auto !important;\n    }\n    .mr-xl-auto,\n    .mx-xl-auto {\n      margin-right: auto !important;\n    }\n    .mb-xl-auto,\n    .my-xl-auto {\n      margin-bottom: auto !important;\n    }\n    .ml-xl-auto,\n    .mx-xl-auto {\n      margin-left: auto !important;\n    }\n  }\n\n  .text-monospace {\n    font-family: ", " ;\n  }\n\n  .text-justify {\n    text-align: justify !important;\n  }\n\n  .text-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .text-truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .text-left {\n    text-align: left !important;\n  }\n\n  .text-right {\n    text-align: right !important;\n  }\n\n  .text-center {\n    text-align: center !important;\n  }\n\n  .text-lowercase {\n    text-transform: lowercase !important;\n  }\n\n  .text-uppercase {\n    text-transform: uppercase !important;\n  }\n\n  .text-capitalize {\n    text-transform: capitalize !important;\n  }\n\n  .font-weight-light {\n    font-weight: 300 !important;\n  }\n\n  .font-weight-normal {\n    font-weight: 400 !important;\n  }\n\n  .font-weight-bold {\n    font-weight: 700 !important;\n  }\n\n  .font-italic {\n    font-style: italic !important;\n  }\n\n  .text-white {\n    color: #fff !important;\n  }\n\n  .text-primary {\n    color: ", " !important;\n  }\n\n  .text-normal {\n    color: ", " !important;\n  }\n\n  .text-success {\n    color: ", " !important;\n  }\n\n  .text-info {\n    color: ", " !important;\n  }\n\n  .text-warning {\n    color: ", " !important;\n  }\n\n  .text-error {\n    color: ", " !important;\n  }\n\n  .text-dark {\n    color: ", " !important;\n  }\n\n  .text-body {\n    color: ", " !important;\n  }\n\n  .text-muted {\n    color: ", " !important;\n  }\n\n  .text-black {\n    color: rgba(0, 0, 0, 1) !important;\n  }\n\n  .text-black-50 {\n    color: rgba(0, 0, 0, 0.5) !important;\n  }\n\n  .text-white-50 {\n    color: rgba(255, 255, 255, 0.5) !important;\n  }\n\n  .text-white-65 {\n    color: rgba(255, 255, 255, 0.5) !important;\n  }\n\n  .text-light {\n    color: white !important;\n  }\n\n  .text-hide {\n    font: 0/0 a;\n    color: transparent;\n    text-shadow: none;\n    background-color: transparent;\n    border: 0;\n  }\n\n  /* Fixes */\n  .mapboxgl-ctrl-group {\n    display: inline-block;\n    margin: 1rem;\n  }\n  .rv-discrete-color-legend {\n    display: block;\n    width: 100%!important;\n    text-align: center;\n  }\n  .rv-discrete-color-legend-item {\n    display: inline-block;\n  }\n\n  .ant-menu-vertical .ant-menu-item, .ant-menu-vertical-left .ant-menu-item, .ant-menu-vertical-right .ant-menu-item, .ant-menu-inline .ant-menu-item, .ant-menu-vertical .ant-menu-submenu-title, .ant-menu-vertical-left .ant-menu-submenu-title, .ant-menu-vertical-right .ant-menu-submenu-title, .ant-menu-inline .ant-menu-submenu-title,\n  .ant-menu-vertical .ant-menu-item:not(:last-child), .ant-menu-vertical-left .ant-menu-item:not(:last-child), .ant-menu-vertical-right .ant-menu-item:not(:last-child), .ant-menu-inline .ant-menu-item:not(:last-child) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  .ant-menu-dark .ant-menu-inline.ant-menu-sub {\n    box-shadow: none;\n  }\n  .header-notifications .ant-spin-container {\n    overflow: auto;\n    height: 220px;\n    width: 350px;\n  }\n  .header-notifications .ant-list-footer {\n    padding-left: 1rem;\n    padding-right: 1rem;\n    border-top: 1px solid rgba(0,0,0,.03)\n  }\n  /* custom card */\n  .ant-card-bordered {\n    box-shadow: 0 0 1px rgba(0,0,0,.1);\n    border: 0!important;\n    background-clip: padding-box;\n  }\n  .card-head-0 .ant-card-head {\n    border: 0;\n  }\n  .ant-card-actions {\n    border-radius: 0 0 ", " ", ";\n  }\n  .ant-card-head-title {\n    font-weight: 700;\n  }\n  .ant-menu-submenu-open.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:before {\n    transform: rotate(45deg) translateX(3px);\n  }\n  .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:before {\n    transform: rotate(-45deg) translateX(3px);\n  }\n  .ant-menu-submenu-open.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:after {\n    transform: rotate(-45deg) translateX(-3px);\n  }\n  .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:after {\n    transform: rotate(45deg) translateX(-3px);\n  }\n  .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow:before, .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow:before, .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow:before, .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:before, .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow:after, .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow:after, .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow:after, .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:after {\n    height: 1px;\n  }\n  /* Chart */\n  .rv-xy-plot__grid-lines, .rv-xy-plot__axis {\n    stroke-width: 0.2;\n  }\n  .rv-discrete-color-legend-item__color {\n    height: 6px;\n  }\n  .rv-discrete-color-legend-item__color__path {\n    stroke-width: 6px;\n  }\n  /* Chat */\n  .chat-drawer .ant-drawer-header,\n  .chat-drawer .ant-drawer-body {\n    padding: 0;\n  }\n  .message-modal .ant-modal-content {\n    border-radius: 4px 4px 0 0;\n  }\n\n  .am-weather-cloud-2 > path, [id^=cloudy-day-] > path {\n    stroke-width: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var lessVariables = external_less_vars_to_js_default()(antd_custom, {
  resolveVariables: true,
  stripPrefix: true
}),
    camelCasedVariables = Object(helpers["f" /* objectToCamelCase */])(lessVariables),
    theme = Object(objectSpread["a" /* default */])({}, camelCasedVariables);

var GlobalStyles = Object(external_styled_components_["createGlobalStyle"])(_templateObject(), theme.backgroundColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.normalColor, theme.successColor, theme.infoColor, theme.warningColor, theme.errorColor, theme.darkColor, theme.borderColorBase, theme.borderColorBase, theme.borderColorBase, theme.borderColorBase, theme.borderColorBase, theme.primaryColor, theme.normalColor, theme.successColor, theme.infoColor, theme.warningColor, theme.errorColor, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.codeFamily, theme.primaryColor, theme.normalColor, theme.successColor, theme.infoColor, theme.warningColor, theme.errorColor, theme.darkColor, theme.textColor, theme.textColorSecondary, theme.borderRadiusBase, theme.borderRadiusBase);


/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "NC1Z":
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "T22j":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Vh1e":
/***/ (function(module, exports) {



/***/ }),

/***/ "Wa2I":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("T22j");

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bPsq":
/***/ (function(module, exports) {

module.exports = require("less-vars-to-js");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dfwq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("yLu3");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

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

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

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

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

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