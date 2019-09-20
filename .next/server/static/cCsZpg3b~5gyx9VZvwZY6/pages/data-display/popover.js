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
/******/ 	return __webpack_require__(__webpack_require__.s = "537b");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

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

/***/ "537b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qVT8");


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

/***/ "qVT8":
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

// CONCATENATED MODULE: ./demos/antd/popover/arrow-point-at-center.js


var arrow_point_at_center_text = external_react_default.a.createElement("span", null, "Title");
var content = external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "Content"), external_react_default.a.createElement("p", null, "Content"));

var arrow_point_at_center_Component = function Component() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Popover"], {
    placement: "topLeft",
    title: arrow_point_at_center_text,
    content: content
  }, external_react_default.a.createElement(external_antd_["Button"], null, "Align edge / \u8FB9\u7F18\u5BF9\u9F50")), external_react_default.a.createElement(external_antd_["Popover"], {
    placement: "topLeft",
    title: arrow_point_at_center_text,
    content: content,
    arrowPointAtCenter: true
  }, external_react_default.a.createElement(external_antd_["Button"], null, "Arrow points to center / \u7BAD\u5934\u6307\u5411\u4E2D\u5FC3")));
};

/* harmony default export */ var arrow_point_at_center = (arrow_point_at_center_Component);
// CONCATENATED MODULE: ./demos/antd/popover/basic.js


var basic_content = external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "Content"), external_react_default.a.createElement("p", null, "Content"));

var basic_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Popover"], {
    content: basic_content,
    title: "Title"
  }, external_react_default.a.createElement(external_antd_["Button"], null, "Hover me"));
};

/* harmony default export */ var basic = (basic_Component);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// CONCATENATED MODULE: ./demos/antd/popover/control.js










var control_App =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      visible: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "hide", function () {
      _this.setState({
        visible: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleVisibleChange", function (visible) {
      _this.setState({
        visible: visible
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_antd_["Popover"], {
        content: external_react_default.a.createElement("a", {
          onClick: this.hide
        }, "Close"),
        title: "Title",
        trigger: "click",
        visible: this.state.visible,
        onVisibleChange: this.handleVisibleChange
      }, external_react_default.a.createElement(external_antd_["Button"], null, "Click me"));
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var control = (control_App);
// CONCATENATED MODULE: ./demos/antd/popover/hover-with-click.js










var hover_with_click_App =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      clicked: false,
      hovered: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "hide", function () {
      _this.setState({
        clicked: false,
        hovered: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleHoverChange", function (visible) {
      _this.setState({
        hovered: visible,
        clicked: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleClickChange", function (visible) {
      _this.setState({
        clicked: visible,
        hovered: false
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "render",
    value: function render() {
      var hoverContent = external_react_default.a.createElement("div", null, "This is hover content.");
      var clickContent = external_react_default.a.createElement("div", null, "This is click content.");
      return external_react_default.a.createElement(external_antd_["Popover"], {
        style: {
          width: 500
        },
        content: hoverContent,
        title: "Hover title",
        trigger: "hover",
        visible: this.state.hovered,
        onVisibleChange: this.handleHoverChange
      }, external_react_default.a.createElement(external_antd_["Popover"], {
        content: external_react_default.a.createElement("div", null, clickContent, external_react_default.a.createElement("a", {
          onClick: this.hide
        }, "Close")),
        title: "Click title",
        trigger: "click",
        visible: this.state.clicked,
        onVisibleChange: this.handleClickChange
      }, external_react_default.a.createElement(external_antd_["Button"], null, "Hover and click / \u60AC\u505C\u5E76\u5355\u51FB")));
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var hover_with_click = (hover_with_click_App);
// CONCATENATED MODULE: ./demos/antd/popover/placement.js


var placement_text = external_react_default.a.createElement("span", null, "Title");
var placement_content = external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "Content"), external_react_default.a.createElement("p", null, "Content"));
var buttonWidth = 70;

var placement_Component = function Component() {
  return external_react_default.a.createElement("div", {
    className: "demo"
  }, external_react_default.a.createElement("div", {
    style: {
      marginLeft: buttonWidth,
      whiteSpace: 'nowrap'
    }
  }, external_react_default.a.createElement(external_antd_["Popover"], {
    placement: "topLeft",
    title: placement_text,
    content: placement_content,
    trigger: "click"
  }, external_react_default.a.createElement(external_antd_["Button"], null, "TL")), external_react_default.a.createElement(external_antd_["Popover"], {
    placement: "top",
    title: placement_text,
    content: placement_content,
    trigger: "click"
  }, external_react_default.a.createElement(external_antd_["Button"], null, "Top")), external_react_default.a.createElement(external_antd_["Popover"], {
    placement: "topRight",
    title: placement_text,
    content: placement_content,
    trigger: "click"
  }, external_react_default.a.createElement(external_antd_["Button"], null, "TR"))), external_react_default.a.createElement("div", {
    style: {
      width: buttonWidth,
      float: 'left'
    }
  }, external_react_default.a.createElement(external_antd_["Popover"], {
    placement: "leftTop",
    title: placement_text,
    content: placement_content,
    trigger: "click"
  }, external_react_default.a.createElement(external_antd_["Button"], null, "LT")), external_react_default.a.createElement(external_antd_["Popover"], {
    placement: "left",
    title: placement_text,
    content: placement_content,
    trigger: "click"
  }, external_react_default.a.createElement(external_antd_["Button"], null, "Left")), external_react_default.a.createElement(external_antd_["Popover"], {
    placement: "leftBottom",
    title: placement_text,
    content: placement_content,
    trigger: "click"
  }, external_react_default.a.createElement(external_antd_["Button"], null, "LB"))), external_react_default.a.createElement("div", {
    style: {
      width: buttonWidth,
      marginLeft: buttonWidth * 4 + 24
    }
  }, external_react_default.a.createElement(external_antd_["Popover"], {
    placement: "rightTop",
    title: placement_text,
    content: placement_content,
    trigger: "click"
  }, external_react_default.a.createElement(external_antd_["Button"], null, "RT")), external_react_default.a.createElement(external_antd_["Popover"], {
    placement: "right",
    title: placement_text,
    content: placement_content,
    trigger: "click"
  }, external_react_default.a.createElement(external_antd_["Button"], null, "Right")), external_react_default.a.createElement(external_antd_["Popover"], {
    placement: "rightBottom",
    title: placement_text,
    content: placement_content,
    trigger: "click"
  }, external_react_default.a.createElement(external_antd_["Button"], null, "RB"))), external_react_default.a.createElement("div", {
    style: {
      marginLeft: buttonWidth,
      clear: 'both',
      whiteSpace: 'nowrap'
    }
  }, external_react_default.a.createElement(external_antd_["Popover"], {
    placement: "bottomLeft",
    title: placement_text,
    content: placement_content,
    trigger: "click"
  }, external_react_default.a.createElement(external_antd_["Button"], null, "BL")), external_react_default.a.createElement(external_antd_["Popover"], {
    placement: "bottom",
    title: placement_text,
    content: placement_content,
    trigger: "click"
  }, external_react_default.a.createElement(external_antd_["Button"], null, "Bottom")), external_react_default.a.createElement(external_antd_["Popover"], {
    placement: "bottomRight",
    title: placement_text,
    content: placement_content,
    trigger: "click"
  }, external_react_default.a.createElement(external_antd_["Button"], null, "BR"))));
};

/* harmony default export */ var placement = (placement_Component);
// CONCATENATED MODULE: ./demos/antd/popover/triggerType.js


var triggerType_content = external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "Content"), external_react_default.a.createElement("p", null, "Content"));

var triggerType_Component = function Component() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Popover"], {
    content: triggerType_content,
    title: "Title",
    trigger: "hover"
  }, external_react_default.a.createElement(external_antd_["Button"], null, "Hover me")), external_react_default.a.createElement(external_antd_["Popover"], {
    content: triggerType_content,
    title: "Title",
    trigger: "focus"
  }, external_react_default.a.createElement(external_antd_["Button"], null, "Focus me")), external_react_default.a.createElement(external_antd_["Popover"], {
    content: triggerType_content,
    title: "Title",
    trigger: "click"
  }, external_react_default.a.createElement(external_antd_["Button"], null, "Click me")));
};

/* harmony default export */ var triggerType = (triggerType_Component);
// CONCATENATED MODULE: ./demos/antd/popover/demo.js














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
      }, external_react_default.a.createElement("small", null, "Placement")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(placement, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Arrow point at center")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(arrow_point_at_center, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Three ways to trigger")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(triggerType, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Controlling the close of the dialog")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(control, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Hover with click popover")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(hover_with_click, null)));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var demo = (demo_Demo);
// CONCATENATED MODULE: ./pages/data-display/popover.js



var popover_DemoPage = function DemoPage() {
  return external_react_default.a.createElement(demo, null);
};

/* harmony default export */ var popover = __webpack_exports__["default"] = (popover_DemoPage);

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