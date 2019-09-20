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
/******/ 	return __webpack_require__(__webpack_require__.s = "ad3c");
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

/***/ "ad3c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ttbm");


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

/***/ "ttbm":
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

// CONCATENATED MODULE: ./demos/antd/autocomplete/basic.js










function onSelect(value) {
  console.log('onSelect', value);
}

var basic_Complete =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Complete, _React$Component);

  function Complete() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Complete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Complete)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      dataSource: []
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSearch", function (value) {
      _this.setState({
        dataSource: !value ? [] : [value, value + value, value + value + value]
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Complete, [{
    key: "render",
    value: function render() {
      var dataSource = this.state.dataSource;
      return external_react_default.a.createElement(external_antd_["AutoComplete"], {
        dataSource: dataSource,
        style: {
          width: 200
        },
        onSelect: onSelect,
        onSearch: this.handleSearch,
        placeholder: "input here"
      });
    }
  }]);

  return Complete;
}(external_react_default.a.Component);

/* harmony default export */ var basic = (basic_Complete);
// CONCATENATED MODULE: ./demos/antd/autocomplete/non-case-sensitive.js


var non_case_sensitive_dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

function non_case_sensitive_Complete() {
  return external_react_default.a.createElement(external_antd_["AutoComplete"], {
    style: {
      width: 200
    },
    dataSource: non_case_sensitive_dataSource,
    placeholder: "try to type `b`",
    filterOption: function filterOption(inputValue, option) {
      return option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
    }
  });
}

/* harmony default export */ var non_case_sensitive = (non_case_sensitive_Complete);
// CONCATENATED MODULE: ./demos/antd/autocomplete/certain-category.js


var Option = external_antd_["AutoComplete"].Option;
var OptGroup = external_antd_["AutoComplete"].OptGroup;
var certain_category_dataSource = [{
  title: '话题',
  children: [{
    title: 'AntDesign',
    count: 10000
  }, {
    title: 'AntDesign UI',
    count: 10600
  }]
}, {
  title: '问题',
  children: [{
    title: 'AntDesign UI 有多好',
    count: 60100
  }, {
    title: 'AntDesign 是啥',
    count: 30010
  }]
}, {
  title: '文章',
  children: [{
    title: 'AntDesign 是一个设计语言',
    count: 100000
  }]
}];

function renderTitle(title) {
  return external_react_default.a.createElement("span", null, title, external_react_default.a.createElement("a", {
    style: {
      float: 'right'
    },
    href: "https://www.google.com/search?q=antd",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "\u66F4\u591A"));
}

var options = certain_category_dataSource.map(function (group) {
  return external_react_default.a.createElement(OptGroup, {
    key: group.title,
    label: renderTitle(group.title)
  }, group.children.map(function (opt) {
    return external_react_default.a.createElement(Option, {
      key: opt.title,
      value: opt.title
    }, opt.title, external_react_default.a.createElement("span", {
      className: "certain-search-item-count"
    }, opt.count, " \u4EBA \u5173\u6CE8"));
  }));
}).concat([external_react_default.a.createElement(Option, {
  disabled: true,
  key: "all",
  className: "show-all"
}, external_react_default.a.createElement("a", {
  href: "https://www.google.com/search?q=antd",
  target: "_blank",
  rel: "noopener noreferrer"
}, "\u67E5\u770B\u6240\u6709\u7ED3\u679C"))]);

function certain_category_Complete() {
  return external_react_default.a.createElement("div", {
    className: "certain-category-search-wrapper",
    style: {
      width: 250
    }
  }, external_react_default.a.createElement(external_antd_["AutoComplete"], {
    className: "certain-category-search",
    dropdownClassName: "certain-category-search-dropdown",
    dropdownMatchSelectWidth: false,
    dropdownStyle: {
      width: 300
    },
    size: "large",
    style: {
      width: '100%'
    },
    dataSource: options,
    placeholder: "input here",
    optionLabelProp: "value"
  }, external_react_default.a.createElement(external_antd_["Input"], {
    suffix: external_react_default.a.createElement(external_antd_["Icon"], {
      type: "search",
      className: "certain-category-icon"
    })
  })));
}

/* harmony default export */ var certain_category = (certain_category_Complete);
// CONCATENATED MODULE: ./demos/antd/autocomplete/custom.js









var TextArea = external_antd_["Input"].TextArea;

function custom_onSelect(value) {
  console.log('onSelect', value);
}

var custom_Complete =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Complete, _React$Component);

  function Complete() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Complete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Complete)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      dataSource: []
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSearch", function (value) {
      _this.setState({
        dataSource: !value ? [] : [value, value + value, value + value + value]
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleKeyPress", function (ev) {
      console.log('handleKeyPress', ev);
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Complete, [{
    key: "render",
    value: function render() {
      var dataSource = this.state.dataSource;
      return external_react_default.a.createElement(external_antd_["AutoComplete"], {
        dataSource: dataSource,
        style: {
          width: 200
        },
        onSelect: custom_onSelect,
        onSearch: this.handleSearch
      }, external_react_default.a.createElement(TextArea, {
        placeholder: "input here",
        className: "custom",
        style: {
          height: 50
        },
        onKeyPress: this.handleKeyPress
      }));
    }
  }]);

  return Complete;
}(external_react_default.a.Component);

/* harmony default export */ var custom = (custom_Complete);
// CONCATENATED MODULE: ./demos/antd/autocomplete/options.js









var options_Option = external_antd_["AutoComplete"].Option;

var options_Complete =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Complete, _React$Component);

  function Complete() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Complete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Complete)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      result: []
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSearch", function (value) {
      var result;

      if (!value || value.indexOf('@') >= 0) {
        result = [];
      } else {
        result = ['gmail.com', '163.com', 'qq.com'].map(function (domain) {
          return "".concat(value, "@").concat(domain);
        });
      }

      _this.setState({
        result: result
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Complete, [{
    key: "render",
    value: function render() {
      var result = this.state.result;
      var children = result.map(function (email) {
        return external_react_default.a.createElement(options_Option, {
          key: email
        }, email);
      });
      return external_react_default.a.createElement(external_antd_["AutoComplete"], {
        style: {
          width: 200
        },
        onSearch: this.handleSearch,
        placeholder: "input here"
      }, children);
    }
  }]);

  return Complete;
}(external_react_default.a.Component);

/* harmony default export */ var autocomplete_options = (options_Complete);
// CONCATENATED MODULE: ./demos/antd/autocomplete/uncertain-category.js









var uncertain_category_Option = external_antd_["AutoComplete"].Option;

function uncertain_category_onSelect(value) {
  console.log('onSelect', value);
}

function getRandomInt(max) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return new Array(getRandomInt(5)).join('.').split('.').map(function (item, idx) {
    return {
      query: query,
      category: "".concat(query).concat(idx),
      count: getRandomInt(200, 100)
    };
  });
}

function renderOption(item) {
  return external_react_default.a.createElement(uncertain_category_Option, {
    key: item.category,
    text: item.category
  }, item.query, " \u5728", external_react_default.a.createElement("a", {
    href: "https://s.taobao.com/search?q=".concat(item.query),
    target: "_blank",
    rel: "noopener noreferrer"
  }, item.category), "\u533A\u5757\u4E2D", external_react_default.a.createElement("span", {
    className: "global-search-item-count"
  }, "\u7EA6 ", item.count, " \u4E2A\u7ED3\u679C"));
}

var uncertain_category_Complete =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Complete, _React$Component);

  function Complete() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Complete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Complete)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      dataSource: []
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSearch", function (value) {
      _this.setState({
        dataSource: value ? searchResult(value) : []
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Complete, [{
    key: "render",
    value: function render() {
      var dataSource = this.state.dataSource;
      return external_react_default.a.createElement("div", {
        className: "global-search-wrapper",
        style: {
          width: 300
        }
      }, external_react_default.a.createElement(external_antd_["AutoComplete"], {
        className: "global-search",
        size: "large",
        style: {
          width: '100%'
        },
        dataSource: dataSource.map(renderOption),
        onSelect: uncertain_category_onSelect,
        onSearch: this.handleSearch,
        placeholder: "input here",
        optionLabelProp: "text"
      }, external_react_default.a.createElement(external_antd_["Input"], {
        suffix: external_react_default.a.createElement(external_antd_["Button"], {
          className: "search-btn",
          size: "large",
          type: "primary"
        }, external_react_default.a.createElement(external_antd_["Icon"], {
          type: "search"
        }))
      })));
    }
  }]);

  return Complete;
}(external_react_default.a.Component);

/* harmony default export */ var uncertain_category = (uncertain_category_Complete);
// CONCATENATED MODULE: ./demos/antd/autocomplete/demo.js














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
        id: "components-autocomplete-demo"
      }, external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Basic")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(basic, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Certain")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(certain_category, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Custom")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(custom, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Non case sensitive")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(non_case_sensitive, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Options")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(autocomplete_options, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Uncertain")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(uncertain_category, null)));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var demo = (demo_Demo);
// CONCATENATED MODULE: ./pages/data-entry/autocomplete.js



var autocomplete_DemoPage = function DemoPage() {
  return external_react_default.a.createElement(demo, null);
};

/* harmony default export */ var autocomplete = __webpack_exports__["default"] = (autocomplete_DemoPage);

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