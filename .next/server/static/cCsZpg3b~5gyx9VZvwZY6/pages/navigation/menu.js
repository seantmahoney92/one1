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
/******/ 	return __webpack_require__(__webpack_require__.s = "05b9");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/AqL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

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

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// CONCATENATED MODULE: ./demos/antd/menu/horizontal.js









var SubMenu = external_antd_["Menu"].SubMenu;
var MenuItemGroup = external_antd_["Menu"].ItemGroup;

var horizontal_Component =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Component, _React$Component);

  function Component() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Component);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Component)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      current: 'mail'
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleClick", function (e) {
      console.log('click ', e);

      _this.setState({
        current: e.key
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Component, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_antd_["Menu"], {
        onClick: this.handleClick,
        selectedKeys: [this.state.current],
        mode: "horizontal"
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "mail"
      }, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "mail"
      }), "Navigation One"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "app",
        disabled: true
      }, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "appstore"
      }), "Navigation Two"), external_react_default.a.createElement(SubMenu, {
        title: external_react_default.a.createElement("span", {
          className: "submenu-title-wrapper"
        }, external_react_default.a.createElement(external_antd_["Icon"], {
          type: "setting"
        }), "Navigation Three - Submenu")
      }, external_react_default.a.createElement(MenuItemGroup, {
        title: "Item 1"
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "setting:1"
      }, "Option 1"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "setting:2"
      }, "Option 2")), external_react_default.a.createElement(MenuItemGroup, {
        title: "Item 2"
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "setting:3"
      }, "Option 3"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "setting:4"
      }, "Option 4"))), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "alipay"
      }, external_react_default.a.createElement("a", {
        href: "https://ant.design",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Navigation Four - Link")));
    }
  }]);

  return Component;
}(external_react_default.a.Component);

/* harmony default export */ var horizontal = (horizontal_Component);
// CONCATENATED MODULE: ./demos/antd/menu/inline.js









var inline_SubMenu = external_antd_["Menu"].SubMenu;
var inline_MenuItemGroup = external_antd_["Menu"].ItemGroup;

var inline_Component =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Component, _React$Component);

  function Component() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Component);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Component)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleClick", function (e) {
      console.log('click ', e);
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Component, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_antd_["Menu"], {
        onClick: this.handleClick,
        style: {
          width: 256
        },
        defaultSelectedKeys: ['1'],
        defaultOpenKeys: ['sub1'],
        mode: "inline"
      }, external_react_default.a.createElement(inline_SubMenu, {
        key: "sub1",
        title: external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Icon"], {
          type: "mail"
        }), external_react_default.a.createElement("span", null, "Navigation One"))
      }, external_react_default.a.createElement(inline_MenuItemGroup, {
        key: "g1",
        title: "Item 1"
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "1"
      }, "Option 1"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "2"
      }, "Option 2")), external_react_default.a.createElement(inline_MenuItemGroup, {
        key: "g2",
        title: "Item 2"
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "3"
      }, "Option 3"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "4"
      }, "Option 4"))), external_react_default.a.createElement(inline_SubMenu, {
        key: "sub2",
        title: external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Icon"], {
          type: "appstore"
        }), external_react_default.a.createElement("span", null, "Navigation Two"))
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "5"
      }, "Option 5"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "6"
      }, "Option 6"), external_react_default.a.createElement(inline_SubMenu, {
        key: "sub3",
        title: "Submenu"
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "7"
      }, "Option 7"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "8"
      }, "Option 8"))), external_react_default.a.createElement(inline_SubMenu, {
        key: "sub4",
        title: external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Icon"], {
          type: "setting"
        }), external_react_default.a.createElement("span", null, "Navigation Three"))
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "9"
      }, "Option 9"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "10"
      }, "Option 10"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "11"
      }, "Option 11"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "12"
      }, "Option 12")));
    }
  }]);

  return Component;
}(external_react_default.a.Component);

/* harmony default export */ var inline = (inline_Component);
// CONCATENATED MODULE: ./demos/antd/menu/inline-collapsed.js









var inline_collapsed_SubMenu = external_antd_["Menu"].SubMenu;

var inline_collapsed_Component =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Component, _React$Component);

  function Component() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Component);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Component)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      collapsed: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "toggleCollapsed", function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Component, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        style: {
          width: 256
        }
      }, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        onClick: this.toggleCollapsed,
        style: {
          marginBottom: 16
        }
      }, external_react_default.a.createElement(external_antd_["Icon"], {
        type: this.state.collapsed ? 'menu-unfold' : 'menu-fold'
      })), external_react_default.a.createElement(external_antd_["Menu"], {
        defaultSelectedKeys: ['1'],
        defaultOpenKeys: ['sub1'],
        mode: "inline",
        theme: "dark",
        inlineCollapsed: this.state.collapsed
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "1"
      }, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "pie-chart"
      }), external_react_default.a.createElement("span", null, "Option 1")), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "2"
      }, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "desktop"
      }), external_react_default.a.createElement("span", null, "Option 2")), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "3"
      }, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "inbox"
      }), external_react_default.a.createElement("span", null, "Option 3")), external_react_default.a.createElement(inline_collapsed_SubMenu, {
        key: "sub1",
        title: external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Icon"], {
          type: "mail"
        }), external_react_default.a.createElement("span", null, "Navigation One"))
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "5"
      }, "Option 5"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "6"
      }, "Option 6"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "7"
      }, "Option 7"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "8"
      }, "Option 8")), external_react_default.a.createElement(inline_collapsed_SubMenu, {
        key: "sub2",
        title: external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Icon"], {
          type: "appstore"
        }), external_react_default.a.createElement("span", null, "Navigation Two"))
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "9"
      }, "Option 9"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "10"
      }, "Option 10"), external_react_default.a.createElement(inline_collapsed_SubMenu, {
        key: "sub3",
        title: "Submenu"
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "11"
      }, "Option 11"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "12"
      }, "Option 12")))));
    }
  }]);

  return Component;
}(external_react_default.a.Component);

/* harmony default export */ var inline_collapsed = (inline_collapsed_Component);
// CONCATENATED MODULE: ./demos/antd/menu/sider-current.js









var sider_current_SubMenu = external_antd_["Menu"].SubMenu;

var sider_current_Component =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Component, _React$Component);

  function Component() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Component);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Component)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "rootSubmenuKeys", ['sub1', 'sub2', 'sub4']);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      openKeys: ['sub1']
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onOpenChange", function (openKeys) {
      var latestOpenKey = openKeys.find(function (key) {
        return _this.state.openKeys.indexOf(key) === -1;
      });

      if (_this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        _this.setState({
          openKeys: openKeys
        });
      } else {
        _this.setState({
          openKeys: latestOpenKey ? [latestOpenKey] : []
        });
      }
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Component, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_antd_["Menu"], {
        mode: "inline",
        openKeys: this.state.openKeys,
        onOpenChange: this.onOpenChange,
        style: {
          width: 256
        }
      }, external_react_default.a.createElement(sider_current_SubMenu, {
        key: "sub1",
        title: external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Icon"], {
          type: "mail"
        }), external_react_default.a.createElement("span", null, "Navigation One"))
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "1"
      }, "Option 1"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "2"
      }, "Option 2"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "3"
      }, "Option 3"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "4"
      }, "Option 4")), external_react_default.a.createElement(sider_current_SubMenu, {
        key: "sub2",
        title: external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Icon"], {
          type: "appstore"
        }), external_react_default.a.createElement("span", null, "Navigation Two"))
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "5"
      }, "Option 5"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "6"
      }, "Option 6"), external_react_default.a.createElement(sider_current_SubMenu, {
        key: "sub3",
        title: "Submenu"
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "7"
      }, "Option 7"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "8"
      }, "Option 8"))), external_react_default.a.createElement(sider_current_SubMenu, {
        key: "sub4",
        title: external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Icon"], {
          type: "setting"
        }), external_react_default.a.createElement("span", null, "Navigation Three"))
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "9"
      }, "Option 9"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "10"
      }, "Option 10"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "11"
      }, "Option 11"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "12"
      }, "Option 12")));
    }
  }]);

  return Component;
}(external_react_default.a.Component);

/* harmony default export */ var sider_current = (sider_current_Component);
// CONCATENATED MODULE: ./demos/antd/menu/switch-mode.js









var switch_mode_SubMenu = external_antd_["Menu"].SubMenu;

var switch_mode_Component =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Component, _React$Component);

  function Component() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Component);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Component)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      mode: 'inline',
      theme: 'light'
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "changeMode", function (value) {
      _this.setState({
        mode: value ? 'vertical' : 'inline'
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "changeTheme", function (value) {
      _this.setState({
        theme: value ? 'dark' : 'light'
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Component, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Switch"], {
        onChange: this.changeMode
      }), " Change Mode", external_react_default.a.createElement("span", {
        className: "ant-divider",
        style: {
          margin: '0 1em'
        }
      }), external_react_default.a.createElement(external_antd_["Switch"], {
        onChange: this.changeTheme
      }), " Change Theme", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement(external_antd_["Menu"], {
        style: {
          width: 256
        },
        defaultSelectedKeys: ['1'],
        defaultOpenKeys: ['sub1'],
        mode: this.state.mode,
        theme: this.state.theme
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "1"
      }, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "mail"
      }), "Navigation One"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "2"
      }, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "calendar"
      }), "Navigation Two"), external_react_default.a.createElement(switch_mode_SubMenu, {
        key: "sub1",
        title: external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Icon"], {
          type: "appstore"
        }), external_react_default.a.createElement("span", null, "Navigation Three"))
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "3"
      }, "Option 3"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "4"
      }, "Option 4"), external_react_default.a.createElement(switch_mode_SubMenu, {
        key: "sub1-2",
        title: "Submenu"
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "5"
      }, "Option 5"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "6"
      }, "Option 6"))), external_react_default.a.createElement(switch_mode_SubMenu, {
        key: "sub2",
        title: external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Icon"], {
          type: "setting"
        }), external_react_default.a.createElement("span", null, "Navigation Four"))
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "7"
      }, "Option 7"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "8"
      }, "Option 8"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "9"
      }, "Option 9"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "10"
      }, "Option 10"))));
    }
  }]);

  return Component;
}(external_react_default.a.Component);

/* harmony default export */ var switch_mode = (switch_mode_Component);
// CONCATENATED MODULE: ./demos/antd/menu/theme.js









var theme_SubMenu = external_antd_["Menu"].SubMenu;

var theme_Component =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Component, _React$Component);

  function Component() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Component);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Component)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      theme: 'dark',
      current: '1'
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "changeTheme", function (value) {
      _this.setState({
        theme: value ? 'dark' : 'light'
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleClick", function (e) {
      console.log('click ', e);

      _this.setState({
        current: e.key
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Component, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Switch"], {
        checked: this.state.theme === 'dark',
        onChange: this.changeTheme,
        checkedChildren: "Dark",
        unCheckedChildren: "Light"
      }), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement(external_antd_["Menu"], {
        theme: this.state.theme,
        onClick: this.handleClick,
        style: {
          width: 256
        },
        defaultOpenKeys: ['sub1'],
        selectedKeys: [this.state.current],
        mode: "inline"
      }, external_react_default.a.createElement(theme_SubMenu, {
        key: "sub1",
        title: external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Icon"], {
          type: "mail"
        }), external_react_default.a.createElement("span", null, "Navigation One"))
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "1"
      }, "Option 1"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "2"
      }, "Option 2"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "3"
      }, "Option 3"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "4"
      }, "Option 4")), external_react_default.a.createElement(theme_SubMenu, {
        key: "sub2",
        title: external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Icon"], {
          type: "appstore"
        }), external_react_default.a.createElement("span", null, "Navigtion Two"))
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "5"
      }, "Option 5"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "6"
      }, "Option 6"), external_react_default.a.createElement(theme_SubMenu, {
        key: "sub3",
        title: "Submenu"
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "7"
      }, "Option 7"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "8"
      }, "Option 8"))), external_react_default.a.createElement(theme_SubMenu, {
        key: "sub4",
        title: external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Icon"], {
          type: "setting"
        }), external_react_default.a.createElement("span", null, "Navigation Three"))
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "9"
      }, "Option 9"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "10"
      }, "Option 10"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "11"
      }, "Option 11"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "12"
      }, "Option 12"))));
    }
  }]);

  return Component;
}(external_react_default.a.Component);

/* harmony default export */ var theme = (theme_Component);
// CONCATENATED MODULE: ./demos/antd/menu/vertical.js


var vertical_SubMenu = external_antd_["Menu"].SubMenu;
var vertical_MenuItemGroup = external_antd_["Menu"].ItemGroup;

function handleClick(e) {
  console.log('click', e);
}

var vertical_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Menu"], {
    onClick: handleClick,
    style: {
      width: 256
    },
    mode: "vertical"
  }, external_react_default.a.createElement(vertical_SubMenu, {
    key: "sub1",
    title: external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Icon"], {
      type: "mail"
    }), external_react_default.a.createElement("span", null, "Navigation One"))
  }, external_react_default.a.createElement(vertical_MenuItemGroup, {
    title: "Item 1"
  }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "1"
  }, "Option 1"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "2"
  }, "Option 2")), external_react_default.a.createElement(vertical_MenuItemGroup, {
    title: "Iteom 2"
  }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "3"
  }, "Option 3"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "4"
  }, "Option 4"))), external_react_default.a.createElement(vertical_SubMenu, {
    key: "sub2",
    title: external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Icon"], {
      type: "appstore"
    }), external_react_default.a.createElement("span", null, "Navigation Two"))
  }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "5"
  }, "Option 5"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "6"
  }, "Option 6"), external_react_default.a.createElement(vertical_SubMenu, {
    key: "sub3",
    title: "Submenu"
  }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "7"
  }, "Option 7"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "8"
  }, "Option 8"))), external_react_default.a.createElement(vertical_SubMenu, {
    key: "sub4",
    title: external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Icon"], {
      type: "setting"
    }), external_react_default.a.createElement("span", null, "Navigation Three"))
  }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "9"
  }, "Option 9"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "10"
  }, "Option 10"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "11"
  }, "Option 11"), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "12"
  }, "Option 12")));
};

/* harmony default export */ var vertical = (vertical_Component);
// CONCATENATED MODULE: ./demos/antd/menu/demo.js















var demo_Demo =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Demo, _React$Component);

  function Demo() {
    Object(classCallCheck["a" /* default */])(this, Demo);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Demo).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Demo, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_antd_["Card"], {
        bodyStyle: {
          padding: 0
        },
        id: "components-menu-demo"
      }, external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Horizontal")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(horizontal, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Inline collapsed")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(inline_collapsed, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Inline")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(inline, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Sider current")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(sider_current, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Switch mode")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(switch_mode, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Theme")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(theme, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Vertical")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(vertical, null)));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var demo = (demo_Demo);
// CONCATENATED MODULE: ./pages/navigation/menu.js



var menu_MenuPage = function MenuPage() {
  return external_react_default.a.createElement(demo, null);
};

/* harmony default export */ var menu = __webpack_exports__["default"] = (menu_MenuPage);

/***/ }),

/***/ "05b9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/AqL");


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

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

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

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

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

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

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

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ })

/******/ });