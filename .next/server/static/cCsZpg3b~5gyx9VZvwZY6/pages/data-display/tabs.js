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
/******/ 	return __webpack_require__(__webpack_require__.s = "0c63");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0c63":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1Izz");


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

/***/ "1Izz":
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

// CONCATENATED MODULE: ./demos/antd/tabs/basic.js


var TabPane = external_antd_["Tabs"].TabPane;

function callback(key) {
  console.log(key);
}

var basic_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Tabs"], {
    defaultActiveKey: "1",
    onChange: callback
  }, external_react_default.a.createElement(TabPane, {
    tab: "Tab 1",
    key: "1"
  }, "Content of Tab Pane 1"), external_react_default.a.createElement(TabPane, {
    tab: "Tab 2",
    key: "2"
  }, "Content of Tab Pane 2"), external_react_default.a.createElement(TabPane, {
    tab: "Tab 3",
    key: "3"
  }, "Content of Tab Pane 3"));
};

/* harmony default export */ var basic = (basic_Component);
// CONCATENATED MODULE: ./demos/antd/tabs/card.js


var card_TabPane = external_antd_["Tabs"].TabPane;

function card_callback(key) {
  console.log(key);
}

var card_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Tabs"], {
    onChange: card_callback,
    type: "card"
  }, external_react_default.a.createElement(card_TabPane, {
    tab: "Tab 1",
    key: "1"
  }, "Content of Tab Pane 1"), external_react_default.a.createElement(card_TabPane, {
    tab: "Tab 2",
    key: "2"
  }, "Content of Tab Pane 2"), external_react_default.a.createElement(card_TabPane, {
    tab: "Tab 3",
    key: "3"
  }, "Content of Tab Pane 3"));
};

/* harmony default export */ var card = (card_Component);
// CONCATENATED MODULE: ./demos/antd/tabs/card-top.js


var card_top_TabPane = external_antd_["Tabs"].TabPane;

var card_top_Component = function Component() {
  return external_react_default.a.createElement("div", {
    className: "card-container"
  }, external_react_default.a.createElement(external_antd_["Tabs"], {
    type: "card"
  }, external_react_default.a.createElement(card_top_TabPane, {
    tab: "Tab Title 1",
    key: "1"
  }, external_react_default.a.createElement("p", null, "Content of Tab Pane 1"), external_react_default.a.createElement("p", null, "Content of Tab Pane 1"), external_react_default.a.createElement("p", null, "Content of Tab Pane 1")), external_react_default.a.createElement(card_top_TabPane, {
    tab: "Tab Title 2",
    key: "2"
  }, external_react_default.a.createElement("p", null, "Content of Tab Pane 2"), external_react_default.a.createElement("p", null, "Content of Tab Pane 2"), external_react_default.a.createElement("p", null, "Content of Tab Pane 2")), external_react_default.a.createElement(card_top_TabPane, {
    tab: "Tab Title 3",
    key: "3"
  }, external_react_default.a.createElement("p", null, "Content of Tab Pane 3"), external_react_default.a.createElement("p", null, "Content of Tab Pane 3"), external_react_default.a.createElement("p", null, "Content of Tab Pane 3"))));
};

/* harmony default export */ var card_top = (card_top_Component);
// CONCATENATED MODULE: ./demos/antd/tabs/disabled.js


var disabled_TabPane = external_antd_["Tabs"].TabPane;

var disabled_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Tabs"], {
    defaultActiveKey: "1"
  }, external_react_default.a.createElement(disabled_TabPane, {
    tab: "Tab 1",
    key: "1"
  }, "Tab 1"), external_react_default.a.createElement(disabled_TabPane, {
    tab: "Tab 2",
    disabled: true,
    key: "2"
  }, "Tab 2"), external_react_default.a.createElement(disabled_TabPane, {
    tab: "Tab 3",
    key: "3"
  }, "Tab 3"));
};

/* harmony default export */ var disabled = (disabled_Component);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// CONCATENATED MODULE: ./demos/antd/tabs/editable-card.js









var editable_card_TabPane = external_antd_["Tabs"].TabPane;

var editable_card_Demo =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Demo, _React$Component);

  function Demo(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Demo);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Demo).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onChange", function (activeKey) {
      _this.setState({
        activeKey: activeKey
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onEdit", function (targetKey, action) {
      _this[action](targetKey);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "add", function () {
      var panes = _this.state.panes;
      var activeKey = "newTab".concat(_this.newTabIndex++);
      panes.push({
        title: 'New Tab',
        content: 'Content of new Tab',
        key: activeKey
      });

      _this.setState({
        panes: panes,
        activeKey: activeKey
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "remove", function (targetKey) {
      var activeKey = _this.state.activeKey;
      var lastIndex;

      _this.state.panes.forEach(function (pane, i) {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });

      var panes = _this.state.panes.filter(function (pane) {
        return pane.key !== targetKey;
      });

      if (lastIndex >= 0 && activeKey === targetKey) {
        activeKey = panes[lastIndex].key;
      }

      _this.setState({
        panes: panes,
        activeKey: activeKey
      });
    });

    _this.newTabIndex = 0;
    var _panes = [{
      title: 'Tab 1',
      content: 'Content of Tab 1',
      key: '1'
    }, {
      title: 'Tab 2',
      content: 'Content of Tab 2',
      key: '2'
    }, {
      title: 'Tab 3',
      content: 'Content of Tab 3',
      key: '3',
      closable: false
    }];
    _this.state = {
      activeKey: _panes[0].key,
      panes: _panes
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Demo, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_antd_["Tabs"], {
        onChange: this.onChange,
        activeKey: this.state.activeKey,
        type: "editable-card",
        onEdit: this.onEdit
      }, this.state.panes.map(function (pane) {
        return external_react_default.a.createElement(editable_card_TabPane, {
          tab: pane.title,
          key: pane.key,
          closable: pane.closable
        }, pane.content);
      }));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var editable_card = (editable_card_Demo);
// CONCATENATED MODULE: ./demos/antd/tabs/extra.js


var extra_TabPane = external_antd_["Tabs"].TabPane;
var operations = external_react_default.a.createElement(external_antd_["Button"], null, "Extra Action");

var extra_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Tabs"], {
    tabBarExtraContent: operations
  }, external_react_default.a.createElement(extra_TabPane, {
    tab: "Tab 1",
    key: "1"
  }, "Content of tab 1"), external_react_default.a.createElement(extra_TabPane, {
    tab: "Tab 2",
    key: "2"
  }, "Content of tab 2"), external_react_default.a.createElement(extra_TabPane, {
    tab: "Tab 3",
    key: "3"
  }, "Content of tab 3"));
};

/* harmony default export */ var extra = (extra_Component);
// CONCATENATED MODULE: ./demos/antd/tabs/icon.js


var icon_TabPane = external_antd_["Tabs"].TabPane;

var icon_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Tabs"], {
    defaultActiveKey: "2"
  }, external_react_default.a.createElement(icon_TabPane, {
    tab: external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Icon"], {
      type: "apple"
    }), "Tab 1"),
    key: "1"
  }, "Tab 1"), external_react_default.a.createElement(icon_TabPane, {
    tab: external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Icon"], {
      type: "android"
    }), "Tab 2"),
    key: "2"
  }, "Tab 2"));
};

/* harmony default export */ var icon = (icon_Component);
// CONCATENATED MODULE: ./demos/antd/tabs/position.js









var position_TabPane = external_antd_["Tabs"].TabPane;
var Option = external_antd_["Select"].Option;

var position_Demo =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Demo, _React$Component);

  function Demo() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Demo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Demo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      tabPosition: 'top'
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "changeTabPosition", function (tabPosition) {
      _this.setState({
        tabPosition: tabPosition
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Demo, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
        style: {
          marginBottom: 16
        }
      }, "Tab position\uFF1A", external_react_default.a.createElement(external_antd_["Select"], {
        value: this.state.tabPosition,
        onChange: this.changeTabPosition,
        dropdownMatchSelectWidth: false
      }, external_react_default.a.createElement(Option, {
        value: "top"
      }, "top"), external_react_default.a.createElement(Option, {
        value: "bottom"
      }, "bottom"), external_react_default.a.createElement(Option, {
        value: "left"
      }, "left"), external_react_default.a.createElement(Option, {
        value: "right"
      }, "right"))), external_react_default.a.createElement(external_antd_["Tabs"], {
        tabPosition: this.state.tabPosition
      }, external_react_default.a.createElement(position_TabPane, {
        tab: "Tab 1",
        key: "1"
      }, "Content of Tab 1"), external_react_default.a.createElement(position_TabPane, {
        tab: "Tab 2",
        key: "2"
      }, "Content of Tab 2"), external_react_default.a.createElement(position_TabPane, {
        tab: "Tab 3",
        key: "3"
      }, "Content of Tab 3")));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var position = (position_Demo);
// CONCATENATED MODULE: ./demos/antd/tabs/size.js









var size_TabPane = external_antd_["Tabs"].TabPane;

var size_Demo =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Demo, _React$Component);

  function Demo() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Demo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Demo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      size: 'small'
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onChange", function (e) {
      _this.setState({
        size: e.target.value
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Demo, [{
    key: "render",
    value: function render() {
      var size = this.state.size;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Radio"].Group, {
        value: size,
        onChange: this.onChange,
        style: {
          marginBottom: 16
        }
      }, external_react_default.a.createElement(external_antd_["Radio"].Button, {
        value: "small"
      }, "Small"), external_react_default.a.createElement(external_antd_["Radio"].Button, {
        value: "default"
      }, "Default"), external_react_default.a.createElement(external_antd_["Radio"].Button, {
        value: "large"
      }, "Large")), external_react_default.a.createElement(external_antd_["Tabs"], {
        defaultActiveKey: "1",
        size: size
      }, external_react_default.a.createElement(size_TabPane, {
        tab: "Tab 1",
        key: "1"
      }, "Content of tab 1"), external_react_default.a.createElement(size_TabPane, {
        tab: "Tab 2",
        key: "2"
      }, "Content of tab 2"), external_react_default.a.createElement(size_TabPane, {
        tab: "Tab 3",
        key: "3"
      }, "Content of tab 3")));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var tabs_size = (size_Demo);
// CONCATENATED MODULE: ./demos/antd/tabs/slide.js









var slide_TabPane = external_antd_["Tabs"].TabPane;

var slide_SlidingTabsDemo =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(SlidingTabsDemo, _React$Component);

  function SlidingTabsDemo(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, SlidingTabsDemo);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(SlidingTabsDemo).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleModeChange", function (e) {
      var mode = e.target.value;

      _this.setState({
        mode: mode
      });
    });

    _this.state = {
      mode: 'top'
    };
    return _this;
  }

  Object(createClass["a" /* default */])(SlidingTabsDemo, [{
    key: "render",
    value: function render() {
      var mode = this.state.mode;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Radio"].Group, {
        onChange: this.handleModeChange,
        value: mode,
        style: {
          marginBottom: 8
        }
      }, external_react_default.a.createElement(external_antd_["Radio"].Button, {
        value: "top"
      }, "Horizontal"), external_react_default.a.createElement(external_antd_["Radio"].Button, {
        value: "left"
      }, "Vertical")), external_react_default.a.createElement(external_antd_["Tabs"], {
        defaultActiveKey: "1",
        tabPosition: mode,
        style: {
          height: 220
        }
      }, external_react_default.a.createElement(slide_TabPane, {
        tab: "Tab 1",
        key: "1"
      }, "Content of tab 1"), external_react_default.a.createElement(slide_TabPane, {
        tab: "Tab 2",
        key: "2"
      }, "Content of tab 2"), external_react_default.a.createElement(slide_TabPane, {
        tab: "Tab 3",
        key: "3"
      }, "Content of tab 3"), external_react_default.a.createElement(slide_TabPane, {
        tab: "Tab 4",
        key: "4"
      }, "Content of tab 4"), external_react_default.a.createElement(slide_TabPane, {
        tab: "Tab 5",
        key: "5"
      }, "Content of tab 5"), external_react_default.a.createElement(slide_TabPane, {
        tab: "Tab 6",
        key: "6"
      }, "Content of tab 6"), external_react_default.a.createElement(slide_TabPane, {
        tab: "Tab 7",
        key: "7"
      }, "Content of tab 7"), external_react_default.a.createElement(slide_TabPane, {
        tab: "Tab 8",
        key: "8"
      }, "Content of tab 8"), external_react_default.a.createElement(slide_TabPane, {
        tab: "Tab 9",
        key: "9"
      }, "Content of tab 9"), external_react_default.a.createElement(slide_TabPane, {
        tab: "Tab 10",
        key: "10"
      }, "Content of tab 10"), external_react_default.a.createElement(slide_TabPane, {
        tab: "Tab 11",
        key: "11"
      }, "Content of tab 11")));
    }
  }]);

  return SlidingTabsDemo;
}(external_react_default.a.Component);

/* harmony default export */ var slide = (slide_SlidingTabsDemo);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: external "react-sticky"
var external_react_sticky_ = __webpack_require__("325u");

// CONCATENATED MODULE: ./demos/antd/tabs/custom-tab-bar.js





var custom_tab_bar_TabPane = external_antd_["Tabs"].TabPane;

var custom_tab_bar_renderTabBar = function renderTabBar(props, DefaultTabBar) {
  return external_react_default.a.createElement(external_react_sticky_["Sticky"], {
    bottomOffset: 80
  }, function (_ref) {
    var style = _ref.style;
    return external_react_default.a.createElement(DefaultTabBar, Object(esm_extends["a" /* default */])({}, props, {
      style: Object(objectSpread["a" /* default */])({}, style, {
        zIndex: 1,
        background: '#fff'
      })
    }));
  });
};

var custom_tab_bar_Component = function Component() {
  return external_react_default.a.createElement(external_react_sticky_["StickyContainer"], null, external_react_default.a.createElement(external_antd_["Tabs"], {
    defaultActiveKey: "1",
    renderTabBar: custom_tab_bar_renderTabBar
  }, external_react_default.a.createElement(custom_tab_bar_TabPane, {
    tab: "Tab 1",
    key: "1",
    style: {
      height: 200
    }
  }, "Content of Tab Pane 1"), external_react_default.a.createElement(custom_tab_bar_TabPane, {
    tab: "Tab 2",
    key: "2"
  }, "Content of Tab Pane 2"), external_react_default.a.createElement(custom_tab_bar_TabPane, {
    tab: "Tab 3",
    key: "3"
  }, "Content of Tab Pane 3")));
};

/* harmony default export */ var custom_tab_bar = (custom_tab_bar_Component);
// CONCATENATED MODULE: ./demos/antd/tabs/custom-add-trigger.js









var custom_add_trigger_TabPane = external_antd_["Tabs"].TabPane;

var custom_add_trigger_Demo =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Demo, _React$Component);

  function Demo(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Demo);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Demo).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onChange", function (activeKey) {
      _this.setState({
        activeKey: activeKey
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onEdit", function (targetKey, action) {
      _this[action](targetKey);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "add", function () {
      var panes = _this.state.panes;
      var activeKey = "newTab".concat(_this.newTabIndex++);
      panes.push({
        title: 'New Tab',
        content: 'New Tab Pane',
        key: activeKey
      });

      _this.setState({
        panes: panes,
        activeKey: activeKey
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "remove", function (targetKey) {
      var activeKey = _this.state.activeKey;
      var lastIndex;

      _this.state.panes.forEach(function (pane, i) {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });

      var panes = _this.state.panes.filter(function (pane) {
        return pane.key !== targetKey;
      });

      if (lastIndex >= 0 && activeKey === targetKey) {
        activeKey = panes[lastIndex].key;
      }

      _this.setState({
        panes: panes,
        activeKey: activeKey
      });
    });

    _this.newTabIndex = 0;
    var _panes = [{
      title: 'Tab 1',
      content: 'Content of Tab Pane 1',
      key: '1'
    }, {
      title: 'Tab 2',
      content: 'Content of Tab Pane 2',
      key: '2'
    }];
    _this.state = {
      activeKey: _panes[0].key,
      panes: _panes
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Demo, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
        style: {
          marginBottom: 16
        }
      }, external_react_default.a.createElement(external_antd_["Button"], {
        onClick: this.add
      }, "ADD")), external_react_default.a.createElement(external_antd_["Tabs"], {
        hideAdd: true,
        onChange: this.onChange,
        activeKey: this.state.activeKey,
        type: "editable-card",
        onEdit: this.onEdit
      }, this.state.panes.map(function (pane) {
        return external_react_default.a.createElement(custom_add_trigger_TabPane, {
          tab: pane.title,
          key: pane.key
        }, pane.content);
      })));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var custom_add_trigger = (custom_add_trigger_Demo);
// CONCATENATED MODULE: ./demos/antd/tabs/demo.js




















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
        id: "components-button-demo"
      }, external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Basic")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(basic, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Card top")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(card_top, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Card")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(card, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Custom add trigger")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(custom_add_trigger, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Custom tab bar")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(custom_tab_bar, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Disabled")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(disabled, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Editable card")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(editable_card, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Extra")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(extra, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Icon")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(icon, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Position")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(position, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Size")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(tabs_size, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Slide")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(slide, null)));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var demo = (demo_Demo);
// CONCATENATED MODULE: ./pages/data-display/tabs.js



var tabs_DemoPage = function DemoPage() {
  return external_react_default.a.createElement(demo, null);
};

/* harmony default export */ var tabs = __webpack_exports__["default"] = (tabs_DemoPage);

/***/ }),

/***/ "325u":
/***/ (function(module, exports) {

module.exports = require("react-sticky");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

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

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

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

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

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

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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