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
/******/ 	return __webpack_require__(__webpack_require__.s = "3610");
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

/***/ "3610":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("nG52");


/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

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

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

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

/***/ "nG52":
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

// CONCATENATED MODULE: ./demos/antd/form/advanced-search.js









var FormItem = external_antd_["Form"].Item;

var advanced_search_AdvancedSearchForm =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(AdvancedSearchForm, _React$Component);

  function AdvancedSearchForm() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, AdvancedSearchForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(AdvancedSearchForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      expand: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSearch", function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (err, values) {
        console.log('Received values of form: ', values);
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleReset", function () {
      _this.props.form.resetFields();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "toggle", function () {
      var expand = _this.state.expand;

      _this.setState({
        expand: !expand
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(AdvancedSearchForm, [{
    key: "getFields",
    // To generate mock Form.Item
    value: function getFields() {
      var count = this.state.expand ? 10 : 6;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var children = [];

      for (var i = 0; i < 10; i++) {
        children.push(external_react_default.a.createElement(external_antd_["Col"], {
          span: 8,
          key: i,
          style: {
            display: i < count ? 'block' : 'none'
          }
        }, external_react_default.a.createElement(FormItem, {
          label: "Field ".concat(i)
        }, getFieldDecorator("field-".concat(i), {
          rules: [{
            required: true,
            message: 'Input something!'
          }]
        })(external_react_default.a.createElement(external_antd_["Input"], {
          placeholder: "placeholder"
        })))));
      }

      return children;
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_antd_["Form"], {
        className: "ant-advanced-search-form",
        onSubmit: this.handleSearch
      }, external_react_default.a.createElement(external_antd_["Row"], {
        gutter: 24
      }, this.getFields()), external_react_default.a.createElement(external_antd_["Row"], null, external_react_default.a.createElement(external_antd_["Col"], {
        span: 24,
        style: {
          textAlign: 'right'
        }
      }, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        htmlType: "submit"
      }, "Search"), external_react_default.a.createElement(external_antd_["Button"], {
        style: {
          marginLeft: 8
        },
        onClick: this.handleReset
      }, "Clear"), external_react_default.a.createElement("a", {
        style: {
          marginLeft: 8,
          fontSize: 12
        },
        onClick: this.toggle
      }, "Collapse ", external_react_default.a.createElement(external_antd_["Icon"], {
        type: this.state.expand ? 'up' : 'down'
      })))));
    }
  }]);

  return AdvancedSearchForm;
}(external_react_default.a.Component);

var WrappedAdvancedSearchForm = external_antd_["Form"].create()(advanced_search_AdvancedSearchForm);

var advanced_search_Component = function Component() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(WrappedAdvancedSearchForm, null), external_react_default.a.createElement("div", {
    className: "search-result-list"
  }, "Search Result List"));
};

/* harmony default export */ var advanced_search = (advanced_search_Component);
// CONCATENATED MODULE: ./demos/antd/form/coordinated.js









var coordinated_FormItem = external_antd_["Form"].Item;
var Option = external_antd_["Select"].Option;

var coordinated_App =
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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSelectChange", function (value) {
      console.log(value);

      _this.props.form.setFieldsValue({
        note: "Hi, ".concat(value === 'male' ? 'man' : 'lady', "!")
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return external_react_default.a.createElement(external_antd_["Form"], {
        onSubmit: this.handleSubmit
      }, external_react_default.a.createElement(coordinated_FormItem, {
        label: "Note",
        labelCol: {
          span: 5
        },
        wrapperCol: {
          span: 12
        }
      }, getFieldDecorator('note', {
        rules: [{
          required: true,
          message: 'Please input your note!'
        }]
      })(external_react_default.a.createElement(external_antd_["Input"], null))), external_react_default.a.createElement(coordinated_FormItem, {
        label: "Gender",
        labelCol: {
          span: 5
        },
        wrapperCol: {
          span: 12
        }
      }, getFieldDecorator('gender', {
        rules: [{
          required: true,
          message: 'Please select your gender!'
        }]
      })(external_react_default.a.createElement(external_antd_["Select"], {
        placeholder: "Select a option and change input text above",
        onChange: this.handleSelectChange
      }, external_react_default.a.createElement(Option, {
        value: "male"
      }, "male"), external_react_default.a.createElement(Option, {
        value: "female"
      }, "female")))), external_react_default.a.createElement(coordinated_FormItem, {
        wrapperCol: {
          span: 12,
          offset: 5
        }
      }, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        htmlType: "submit"
      }, "Submit")));
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var coordinated = (external_antd_["Form"].create()(coordinated_App));
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// CONCATENATED MODULE: ./demos/antd/form/dynamic-form-item.js










var dynamic_form_item_FormItem = external_antd_["Form"].Item;

var dynamic_form_item_DynamicFieldSet =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(DynamicFieldSet, _React$Component);

  function DynamicFieldSet() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, DynamicFieldSet);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(DynamicFieldSet)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "remove", function (k) {
      var form = _this.props.form; // can use data-binding to get

      var keys = form.getFieldValue('keys'); // We need at least one passenger

      if (keys.length === 1) {
        return;
      } // can use data-binding to set


      form.setFieldsValue({
        keys: keys.filter(function (key) {
          return key !== k;
        })
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "add", function () {
      var form = _this.props.form; // can use data-binding to get

      var keys = form.getFieldValue('keys');
      var nextKeys = keys.concat(keys.length); // can use data-binding to set
      // important! notify form to detect changes

      form.setFieldsValue({
        keys: nextKeys
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(DynamicFieldSet, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$form = this.props.form,
          getFieldDecorator = _this$props$form.getFieldDecorator,
          getFieldValue = _this$props$form.getFieldValue;
      var formItemLayout = {
        labelCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 4
          }
        },
        wrapperCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 20
          }
        }
      };
      var formItemLayoutWithOutLabel = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 20,
            offset: 4
          }
        }
      };
      getFieldDecorator('keys', {
        initialValue: []
      });
      var keys = getFieldValue('keys');
      var formItems = keys.map(function (k, index) {
        return external_react_default.a.createElement(dynamic_form_item_FormItem, Object(esm_extends["a" /* default */])({}, index === 0 ? formItemLayout : formItemLayoutWithOutLabel, {
          label: index === 0 ? 'Passengers' : '',
          required: false,
          key: k
        }), getFieldDecorator("names[".concat(k, "]"), {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [{
            required: true,
            whitespace: true,
            message: "Please input passenger's name or delete this field."
          }]
        })(external_react_default.a.createElement(external_antd_["Input"], {
          placeholder: "passenger name",
          style: {
            width: '60%',
            marginRight: 8
          }
        })), keys.length > 1 ? external_react_default.a.createElement(external_antd_["Icon"], {
          className: "dynamic-delete-button",
          type: "minus-circle-o",
          disabled: keys.length === 1,
          onClick: function onClick() {
            return _this2.remove(k);
          }
        }) : null);
      });
      return external_react_default.a.createElement(external_antd_["Form"], {
        onSubmit: this.handleSubmit
      }, formItems, external_react_default.a.createElement(dynamic_form_item_FormItem, formItemLayoutWithOutLabel, external_react_default.a.createElement(external_antd_["Button"], {
        type: "dashed",
        onClick: this.add,
        style: {
          width: '60%'
        }
      }, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "plus"
      }), " Add field")), external_react_default.a.createElement(dynamic_form_item_FormItem, formItemLayoutWithOutLabel, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        htmlType: "submit"
      }, "Submit")));
    }
  }]);

  return DynamicFieldSet;
}(external_react_default.a.Component);

/* harmony default export */ var dynamic_form_item = (external_antd_["Form"].create()(dynamic_form_item_DynamicFieldSet));
// CONCATENATED MODULE: ./demos/antd/form/dynamic-rule.js










var dynamic_rule_FormItem = external_antd_["Form"].Item;
var dynamic_rule_formItemLayout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 8
  }
};
var formTailLayout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 8,
    offset: 4
  }
};

var dynamic_rule_DynamicRule =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(DynamicRule, _React$Component);

  function DynamicRule() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, DynamicRule);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(DynamicRule)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      checkNick: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "check", function () {
      _this.props.form.validateFields(function (err) {
        if (!err) {
          console.info('success');
        }
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleChange", function (e) {
      _this.setState({
        checkNick: e.target.checked
      }, function () {
        _this.props.form.validateFields(['nickname'], {
          force: true
        });
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(DynamicRule, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(dynamic_rule_FormItem, Object(esm_extends["a" /* default */])({}, dynamic_rule_formItemLayout, {
        label: "Name"
      }), getFieldDecorator('username', {
        rules: [{
          required: true,
          message: 'Please input your name'
        }]
      })(external_react_default.a.createElement(external_antd_["Input"], {
        placeholder: "Please input your name"
      }))), external_react_default.a.createElement(dynamic_rule_FormItem, Object(esm_extends["a" /* default */])({}, dynamic_rule_formItemLayout, {
        label: "Nickname"
      }), getFieldDecorator('nickname', {
        rules: [{
          required: this.state.checkNick,
          message: 'Please input your nickname'
        }]
      })(external_react_default.a.createElement(external_antd_["Input"], {
        placeholder: "Please input your nickname"
      }))), external_react_default.a.createElement(dynamic_rule_FormItem, formTailLayout, external_react_default.a.createElement(external_antd_["Checkbox"], {
        checked: this.state.checkNick,
        onChange: this.handleChange
      }, "Nickname is required")), external_react_default.a.createElement(dynamic_rule_FormItem, formTailLayout, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        onClick: this.check
      }, "Check")));
    }
  }]);

  return DynamicRule;
}(external_react_default.a.Component);

/* harmony default export */ var dynamic_rule = (external_antd_["Form"].create()(dynamic_rule_DynamicRule));
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// CONCATENATED MODULE: ./demos/antd/form/global-state.js












var global_state_FormItem = external_antd_["Form"].Item;
var CustomizedForm = external_antd_["Form"].create({
  onFieldsChange: function onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields: function mapPropsToFields(props) {
    return {
      username: external_antd_["Form"].createFormField(Object(objectSpread["a" /* default */])({}, props.username, {
        value: props.username.value
      }))
    };
  },
  onValuesChange: function onValuesChange(_, values) {
    console.log(values);
  }
})(function (props) {
  var getFieldDecorator = props.form.getFieldDecorator;
  return external_react_default.a.createElement(external_antd_["Form"], {
    layout: "inline"
  }, external_react_default.a.createElement(global_state_FormItem, {
    label: "Username"
  }, getFieldDecorator('username', {
    rules: [{
      required: true,
      message: 'Username is required!'
    }]
  })(external_react_default.a.createElement(external_antd_["Input"], null))));
});

var global_state_Demo =
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
      fields: {
        username: {
          value: 'benjycui'
        }
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleFormChange", function (changedFields) {
      _this.setState(function (_ref) {
        var fields = _ref.fields;
        return {
          fields: Object(objectSpread["a" /* default */])({}, fields, changedFields)
        };
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Demo, [{
    key: "render",
    value: function render() {
      var fields = this.state.fields;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(CustomizedForm, Object(esm_extends["a" /* default */])({}, fields, {
        onChange: this.handleFormChange
      })), external_react_default.a.createElement("pre", {
        className: "language-bash"
      }, stringify_default()(fields, null, 2)));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var global_state = (global_state_Demo);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// CONCATENATED MODULE: ./demos/antd/form/horizontal-login.js










var horizontal_login_FormItem = external_antd_["Form"].Item;

function hasErrors(fieldsError) {
  return keys_default()(fieldsError).some(function (field) {
    return fieldsError[field];
  });
}

var horizontal_login_HorizontalLoginForm =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(HorizontalLoginForm, _React$Component);

  function HorizontalLoginForm() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, HorizontalLoginForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(HorizontalLoginForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(HorizontalLoginForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // To disabled submit button at the beginning.
      this.props.form.validateFields();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$form = this.props.form,
          getFieldDecorator = _this$props$form.getFieldDecorator,
          getFieldsError = _this$props$form.getFieldsError,
          getFieldError = _this$props$form.getFieldError,
          isFieldTouched = _this$props$form.isFieldTouched; // Only show error after a field is touched.

      var userNameError = isFieldTouched('userName') && getFieldError('userName');
      var passwordError = isFieldTouched('password') && getFieldError('password');
      return external_react_default.a.createElement(external_antd_["Form"], {
        layout: "inline",
        onSubmit: this.handleSubmit
      }, external_react_default.a.createElement(horizontal_login_FormItem, {
        validateStatus: userNameError ? 'error' : '',
        help: userNameError || ''
      }, getFieldDecorator('userName', {
        rules: [{
          required: true,
          message: 'Please input your username!'
        }]
      })(external_react_default.a.createElement(external_antd_["Input"], {
        prefix: external_react_default.a.createElement(external_antd_["Icon"], {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Username"
      }))), external_react_default.a.createElement(horizontal_login_FormItem, {
        validateStatus: passwordError ? 'error' : '',
        help: passwordError || ''
      }, getFieldDecorator('password', {
        rules: [{
          required: true,
          message: 'Please input your Password!'
        }]
      })(external_react_default.a.createElement(external_antd_["Input"], {
        prefix: external_react_default.a.createElement(external_antd_["Icon"], {
          type: "lock",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        type: "password",
        placeholder: "Password"
      }))), external_react_default.a.createElement(horizontal_login_FormItem, null, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        htmlType: "submit",
        disabled: hasErrors(getFieldsError())
      }, "Log in")));
    }
  }]);

  return HorizontalLoginForm;
}(external_react_default.a.Component);

/* harmony default export */ var horizontal_login = (external_antd_["Form"].create()(horizontal_login_HorizontalLoginForm));
// CONCATENATED MODULE: ./demos/antd/form/layout.js










var layout_FormItem = external_antd_["Form"].Item;

var layout_FormLayoutDemo =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(FormLayoutDemo, _React$Component);

  function FormLayoutDemo() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, FormLayoutDemo);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(FormLayoutDemo).call(this));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleFormLayoutChange", function (e) {
      _this.setState({
        formLayout: e.target.value
      });
    });

    _this.state = {
      formLayout: 'horizontal'
    };
    return _this;
  }

  Object(createClass["a" /* default */])(FormLayoutDemo, [{
    key: "render",
    value: function render() {
      var formLayout = this.state.formLayout;
      var formItemLayout = formLayout === 'horizontal' ? {
        labelCol: {
          span: 4
        },
        wrapperCol: {
          span: 14
        }
      } : null;
      var buttonItemLayout = formLayout === 'horizontal' ? {
        wrapperCol: {
          span: 14,
          offset: 4
        }
      } : null;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Form"], {
        layout: formLayout
      }, external_react_default.a.createElement(layout_FormItem, Object(esm_extends["a" /* default */])({
        label: "Form Layout"
      }, formItemLayout), external_react_default.a.createElement(external_antd_["Radio"].Group, {
        defaultValue: "horizontal",
        onChange: this.handleFormLayoutChange
      }, external_react_default.a.createElement(external_antd_["Radio"].Button, {
        value: "horizontal"
      }, "Horizontal"), external_react_default.a.createElement(external_antd_["Radio"].Button, {
        value: "vertical"
      }, "Vertical"), external_react_default.a.createElement(external_antd_["Radio"].Button, {
        value: "inline"
      }, "Inline"))), external_react_default.a.createElement(layout_FormItem, Object(esm_extends["a" /* default */])({
        label: "Field A"
      }, formItemLayout), external_react_default.a.createElement(external_antd_["Input"], {
        placeholder: "input placeholder"
      })), external_react_default.a.createElement(layout_FormItem, Object(esm_extends["a" /* default */])({
        label: "Field B"
      }, formItemLayout), external_react_default.a.createElement(external_antd_["Input"], {
        placeholder: "input placeholder"
      })), external_react_default.a.createElement(layout_FormItem, buttonItemLayout, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary"
      }, "Submit"))));
    }
  }]);

  return FormLayoutDemo;
}(external_react_default.a.Component);

/* harmony default export */ var layout = (layout_FormLayoutDemo);
// CONCATENATED MODULE: ./demos/antd/form/form-in-modal.js









var form_in_modal_FormItem = external_antd_["Form"].Item;
var CollectionCreateForm = external_antd_["Form"].create()(
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(_class, _React$Component);

  function _class() {
    Object(classCallCheck["a" /* default */])(this, _class);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(_class).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(_class, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          visible = _this$props.visible,
          onCancel = _this$props.onCancel,
          onCreate = _this$props.onCreate,
          form = _this$props.form;
      var getFieldDecorator = form.getFieldDecorator;
      return external_react_default.a.createElement(external_antd_["Modal"], {
        visible: visible,
        title: "Create a new collection",
        okText: "Create",
        onCancel: onCancel,
        onOk: onCreate
      }, external_react_default.a.createElement(external_antd_["Form"], {
        layout: "vertical"
      }, external_react_default.a.createElement(form_in_modal_FormItem, {
        label: "Title"
      }, getFieldDecorator('title', {
        rules: [{
          required: true,
          message: 'Please input the title of collection!'
        }]
      })(external_react_default.a.createElement(external_antd_["Input"], null))), external_react_default.a.createElement(form_in_modal_FormItem, {
        label: "Description"
      }, getFieldDecorator('description')(external_react_default.a.createElement(external_antd_["Input"], {
        type: "textarea"
      }))), external_react_default.a.createElement(form_in_modal_FormItem, {
        className: "collection-create-form_last-form-item"
      }, getFieldDecorator('modifier', {
        initialValue: 'public'
      })(external_react_default.a.createElement(external_antd_["Radio"].Group, null, external_react_default.a.createElement(external_antd_["Radio"], {
        value: "public"
      }, "Public"), external_react_default.a.createElement(external_antd_["Radio"], {
        value: "private"
      }, "Private"))))));
    }
  }]);

  return _class;
}(external_react_default.a.Component));

var form_in_modal_CollectionsPage =
/*#__PURE__*/
function (_React$Component2) {
  Object(inherits["a" /* default */])(CollectionsPage, _React$Component2);

  function CollectionsPage() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, CollectionsPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(CollectionsPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      visible: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showModal", function () {
      _this.setState({
        visible: true
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleCancel", function () {
      _this.setState({
        visible: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleCreate", function () {
      var form = _this.formRef.props.form;
      form.validateFields(function (err, values) {
        if (err) {
          return;
        }

        console.log('Received values of form: ', values);
        form.resetFields();

        _this.setState({
          visible: false
        });
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "saveFormRef", function (formRef) {
      _this.formRef = formRef;
    });

    return _this;
  }

  Object(createClass["a" /* default */])(CollectionsPage, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        onClick: this.showModal
      }, "New Collection"), external_react_default.a.createElement(CollectionCreateForm, {
        wrappedComponentRef: this.saveFormRef,
        visible: this.state.visible,
        onCancel: this.handleCancel,
        onCreate: this.handleCreate
      }));
    }
  }]);

  return CollectionsPage;
}(external_react_default.a.Component);

/* harmony default export */ var form_in_modal = (form_in_modal_CollectionsPage);
// CONCATENATED MODULE: ./demos/antd/form/normal-login.js









var normal_login_FormItem = external_antd_["Form"].Item;

var normal_login_NormalLoginForm =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(NormalLoginForm, _React$Component);

  function NormalLoginForm() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, NormalLoginForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(NormalLoginForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(NormalLoginForm, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return external_react_default.a.createElement(external_antd_["Form"], {
        onSubmit: this.handleSubmit,
        className: "login-form"
      }, external_react_default.a.createElement(normal_login_FormItem, null, getFieldDecorator('userName', {
        rules: [{
          required: true,
          message: 'Please input your username!'
        }]
      })(external_react_default.a.createElement(external_antd_["Input"], {
        prefix: external_react_default.a.createElement(external_antd_["Icon"], {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Username"
      }))), external_react_default.a.createElement(normal_login_FormItem, null, getFieldDecorator('password', {
        rules: [{
          required: true,
          message: 'Please input your Password!'
        }]
      })(external_react_default.a.createElement(external_antd_["Input"], {
        prefix: external_react_default.a.createElement(external_antd_["Icon"], {
          type: "lock",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        type: "password",
        placeholder: "Password"
      }))), external_react_default.a.createElement(normal_login_FormItem, null, getFieldDecorator('remember', {
        valuePropName: 'checked',
        initialValue: true
      })(external_react_default.a.createElement(external_antd_["Checkbox"], null, "Remember me")), external_react_default.a.createElement("a", {
        className: "login-form-forgot",
        href: ""
      }, "Forgot password"), external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        htmlType: "submit",
        className: "login-form-button"
      }, "Log in"), "Or ", external_react_default.a.createElement("a", {
        href: ""
      }, "register now!")));
    }
  }]);

  return NormalLoginForm;
}(external_react_default.a.Component);

/* harmony default export */ var normal_login = (external_antd_["Form"].create()(normal_login_NormalLoginForm));
// CONCATENATED MODULE: ./demos/antd/form/register.js










var register_FormItem = external_antd_["Form"].Item;
var register_Option = external_antd_["Select"].Option;
var AutoCompleteOption = external_antd_["AutoComplete"].Option;
var residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake'
    }]
  }]
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men'
    }]
  }]
}];

var register_RegistrationForm =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(RegistrationForm, _React$Component);

  function RegistrationForm() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, RegistrationForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(RegistrationForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      confirmDirty: false,
      autoCompleteResult: []
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleConfirmBlur", function (e) {
      var value = e.target.value;

      _this.setState({
        confirmDirty: _this.state.confirmDirty || !!value
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "compareToFirstPassword", function (rule, value, callback) {
      var form = _this.props.form;

      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "validateToNextPassword", function (rule, value, callback) {
      var form = _this.props.form;

      if (value && _this.state.confirmDirty) {
        form.validateFields(['confirm'], {
          force: true
        });
      }

      callback();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleWebsiteChange", function (value) {
      var autoCompleteResult;

      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(function (domain) {
          return "".concat(value).concat(domain);
        });
      }

      _this.setState({
        autoCompleteResult: autoCompleteResult
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(RegistrationForm, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var autoCompleteResult = this.state.autoCompleteResult;
      var formItemLayout = {
        labelCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 8
          }
        },
        wrapperCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 16
          }
        }
      };
      var tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      };
      var prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86'
      })(external_react_default.a.createElement(external_antd_["Select"], {
        style: {
          width: 70
        }
      }, external_react_default.a.createElement(register_Option, {
        value: "86"
      }, "+86"), external_react_default.a.createElement(register_Option, {
        value: "87"
      }, "+87")));
      var websiteOptions = autoCompleteResult.map(function (website) {
        return external_react_default.a.createElement(AutoCompleteOption, {
          key: website
        }, website);
      });
      return external_react_default.a.createElement(external_antd_["Form"], {
        onSubmit: this.handleSubmit
      }, external_react_default.a.createElement(register_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "E-mail"
      }), getFieldDecorator('email', {
        rules: [{
          type: 'email',
          message: 'The input is not valid E-mail!'
        }, {
          required: true,
          message: 'Please input your E-mail!'
        }]
      })(external_react_default.a.createElement(external_antd_["Input"], null))), external_react_default.a.createElement(register_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "Password"
      }), getFieldDecorator('password', {
        rules: [{
          required: true,
          message: 'Please input your password!'
        }, {
          validator: this.validateToNextPassword
        }]
      })(external_react_default.a.createElement(external_antd_["Input"], {
        type: "password"
      }))), external_react_default.a.createElement(register_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "Confirm Password"
      }), getFieldDecorator('confirm', {
        rules: [{
          required: true,
          message: 'Please confirm your password!'
        }, {
          validator: this.compareToFirstPassword
        }]
      })(external_react_default.a.createElement(external_antd_["Input"], {
        type: "password",
        onBlur: this.handleConfirmBlur
      }))), external_react_default.a.createElement(register_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: external_react_default.a.createElement("span", null, "Nickname\xA0", external_react_default.a.createElement(external_antd_["Tooltip"], {
          title: "What do you want others to call you?"
        }, external_react_default.a.createElement(external_antd_["Icon"], {
          type: "question-circle-o"
        })))
      }), getFieldDecorator('nickname', {
        rules: [{
          required: true,
          message: 'Please input your nickname!',
          whitespace: true
        }]
      })(external_react_default.a.createElement(external_antd_["Input"], null))), external_react_default.a.createElement(register_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "Habitual Residence"
      }), getFieldDecorator('residence', {
        initialValue: ['zhejiang', 'hangzhou', 'xihu'],
        rules: [{
          type: 'array',
          required: true,
          message: 'Please select your habitual residence!'
        }]
      })(external_react_default.a.createElement(external_antd_["Cascader"], {
        options: residences
      }))), external_react_default.a.createElement(register_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "Phone Number"
      }), getFieldDecorator('phone', {
        rules: [{
          required: true,
          message: 'Please input your phone number!'
        }]
      })(external_react_default.a.createElement(external_antd_["Input"], {
        addonBefore: prefixSelector,
        style: {
          width: '100%'
        }
      }))), external_react_default.a.createElement(register_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "Website"
      }), getFieldDecorator('website', {
        rules: [{
          required: true,
          message: 'Please input website!'
        }]
      })(external_react_default.a.createElement(external_antd_["AutoComplete"], {
        dataSource: websiteOptions,
        onChange: this.handleWebsiteChange,
        placeholder: "website"
      }, external_react_default.a.createElement(external_antd_["Input"], null)))), external_react_default.a.createElement(register_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "Captcha",
        extra: "We must make sure that your are a human."
      }), external_react_default.a.createElement(external_antd_["Row"], {
        gutter: 8
      }, external_react_default.a.createElement(external_antd_["Col"], {
        span: 12
      }, getFieldDecorator('captcha', {
        rules: [{
          required: true,
          message: 'Please input the captcha you got!'
        }]
      })(external_react_default.a.createElement(external_antd_["Input"], null))), external_react_default.a.createElement(external_antd_["Col"], {
        span: 12
      }, external_react_default.a.createElement(external_antd_["Button"], null, "Get captcha")))), external_react_default.a.createElement(register_FormItem, tailFormItemLayout, getFieldDecorator('agreement', {
        valuePropName: 'checked'
      })(external_react_default.a.createElement(external_antd_["Checkbox"], null, "I have read the ", external_react_default.a.createElement("a", {
        href: ""
      }, "agreement")))), external_react_default.a.createElement(register_FormItem, tailFormItemLayout, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        htmlType: "submit"
      }, "Register")));
    }
  }]);

  return RegistrationForm;
}(external_react_default.a.Component);

/* harmony default export */ var register = (external_antd_["Form"].create()(register_RegistrationForm));
// CONCATENATED MODULE: ./demos/antd/form/time-related-controls.js











var time_related_controls_FormItem = external_antd_["Form"].Item;
var MonthPicker = external_antd_["DatePicker"].MonthPicker,
    RangePicker = external_antd_["DatePicker"].RangePicker;

var time_related_controls_TimeRelatedForm =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(TimeRelatedForm, _React$Component);

  function TimeRelatedForm() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, TimeRelatedForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(TimeRelatedForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (err, fieldsValue) {
        if (err) {
          return;
        } // Should format date value before submit.


        var rangeValue = fieldsValue['range-picker'];
        var rangeTimeValue = fieldsValue['range-time-picker'];

        var values = Object(objectSpread["a" /* default */])({}, fieldsValue, {
          'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
          'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
          'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
          'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
          'range-time-picker': [rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'), rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss')],
          'time-picker': fieldsValue['time-picker'].format('HH:mm:ss')
        });

        console.log('Received values of form: ', values);
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(TimeRelatedForm, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var formItemLayout = {
        labelCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 8
          }
        },
        wrapperCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 16
          }
        }
      };
      var config = {
        rules: [{
          type: 'object',
          required: true,
          message: 'Please select time!'
        }]
      };
      var rangeConfig = {
        rules: [{
          type: 'array',
          required: true,
          message: 'Please select time!'
        }]
      };
      return external_react_default.a.createElement(external_antd_["Form"], {
        onSubmit: this.handleSubmit
      }, external_react_default.a.createElement(time_related_controls_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "DatePicker"
      }), getFieldDecorator('date-picker', config)(external_react_default.a.createElement(external_antd_["DatePicker"], null))), external_react_default.a.createElement(time_related_controls_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "DatePicker[showTime]"
      }), getFieldDecorator('date-time-picker', config)(external_react_default.a.createElement(external_antd_["DatePicker"], {
        showTime: true,
        format: "YYYY-MM-DD HH:mm:ss"
      }))), external_react_default.a.createElement(time_related_controls_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "MonthPicker"
      }), getFieldDecorator('month-picker', config)(external_react_default.a.createElement(MonthPicker, null))), external_react_default.a.createElement(time_related_controls_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "RangePicker"
      }), getFieldDecorator('range-picker', rangeConfig)(external_react_default.a.createElement(RangePicker, null))), external_react_default.a.createElement(time_related_controls_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "RangePicker[showTime]"
      }), getFieldDecorator('range-time-picker', rangeConfig)(external_react_default.a.createElement(RangePicker, {
        showTime: true,
        format: "YYYY-MM-DD HH:mm:ss"
      }))), external_react_default.a.createElement(time_related_controls_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "TimePicker"
      }), getFieldDecorator('time-picker', config)(external_react_default.a.createElement(external_antd_["TimePicker"], null))), external_react_default.a.createElement(time_related_controls_FormItem, {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      }, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        htmlType: "submit"
      }, "Submit")));
    }
  }]);

  return TimeRelatedForm;
}(external_react_default.a.Component);

/* harmony default export */ var time_related_controls = (external_antd_["Form"].create()(time_related_controls_TimeRelatedForm));
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./demos/antd/form/validate-other.js











var validate_other_FormItem = external_antd_["Form"].Item;
var validate_other_Option = external_antd_["Select"].Option;
var RadioButton = external_antd_["Radio"].Button;
var RadioGroup = external_antd_["Radio"].Group;

var validate_other_Demo =
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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "normFile", function (e) {
      console.log('Upload event:', e);

      if (is_array_default()(e)) {
        return e;
      }

      return e && e.fileList;
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Demo, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var formItemLayout = {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 14
        }
      };
      return external_react_default.a.createElement(external_antd_["Form"], {
        onSubmit: this.handleSubmit
      }, external_react_default.a.createElement(validate_other_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "Plain Text"
      }), external_react_default.a.createElement("span", {
        className: "ant-form-text"
      }, "China")), external_react_default.a.createElement(validate_other_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "Select",
        hasFeedback: true
      }), getFieldDecorator('select', {
        rules: [{
          required: true,
          message: 'Please select your country!'
        }]
      })(external_react_default.a.createElement(external_antd_["Select"], {
        placeholder: "Please select a country"
      }, external_react_default.a.createElement(validate_other_Option, {
        value: "china"
      }, "China"), external_react_default.a.createElement(validate_other_Option, {
        value: "usa"
      }, "U.S.A")))), external_react_default.a.createElement(validate_other_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "Select[multiple]"
      }), getFieldDecorator('select-multiple', {
        rules: [{
          required: true,
          message: 'Please select your favourite colors!',
          type: 'array'
        }]
      })(external_react_default.a.createElement(external_antd_["Select"], {
        mode: "multiple",
        placeholder: "Please select favourite colors"
      }, external_react_default.a.createElement(validate_other_Option, {
        value: "red"
      }, "Red"), external_react_default.a.createElement(validate_other_Option, {
        value: "green"
      }, "Green"), external_react_default.a.createElement(validate_other_Option, {
        value: "blue"
      }, "Blue")))), external_react_default.a.createElement(validate_other_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "InputNumber"
      }), getFieldDecorator('input-number', {
        initialValue: 3
      })(external_react_default.a.createElement(external_antd_["InputNumber"], {
        min: 1,
        max: 10
      })), external_react_default.a.createElement("span", {
        className: "ant-form-text"
      }, " machines")), external_react_default.a.createElement(validate_other_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "Switch"
      }), getFieldDecorator('switch', {
        valuePropName: 'checked'
      })(external_react_default.a.createElement(external_antd_["Switch"], null))), external_react_default.a.createElement(validate_other_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "Slider"
      }), getFieldDecorator('slider')(external_react_default.a.createElement(external_antd_["Slider"], {
        marks: {
          0: 'A',
          20: 'B',
          40: 'C',
          60: 'D',
          80: 'E',
          100: 'F'
        }
      }))), external_react_default.a.createElement(validate_other_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "Radio.Group"
      }), getFieldDecorator('radio-group')(external_react_default.a.createElement(RadioGroup, null, external_react_default.a.createElement(external_antd_["Radio"], {
        value: "a"
      }, "item 1"), external_react_default.a.createElement(external_antd_["Radio"], {
        value: "b"
      }, "item 2"), external_react_default.a.createElement(external_antd_["Radio"], {
        value: "c"
      }, "item 3")))), external_react_default.a.createElement(validate_other_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "Radio.Button"
      }), getFieldDecorator('radio-button')(external_react_default.a.createElement(RadioGroup, null, external_react_default.a.createElement(RadioButton, {
        value: "a"
      }, "item 1"), external_react_default.a.createElement(RadioButton, {
        value: "b"
      }, "item 2"), external_react_default.a.createElement(RadioButton, {
        value: "c"
      }, "item 3")))), external_react_default.a.createElement(validate_other_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "Rate"
      }), getFieldDecorator('rate', {
        initialValue: 3.5
      })(external_react_default.a.createElement(external_antd_["Rate"], null))), external_react_default.a.createElement(validate_other_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "Upload",
        extra: "longgggggggggggggggggggggggggggggggggg"
      }), getFieldDecorator('upload', {
        valuePropName: 'fileList',
        getValueFromEvent: this.normFile
      })(external_react_default.a.createElement(external_antd_["Upload"], {
        name: "logo",
        action: "/upload.do",
        listType: "picture"
      }, external_react_default.a.createElement(external_antd_["Button"], null, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "upload"
      }), " Click to upload")))), external_react_default.a.createElement(validate_other_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "Dragger"
      }), external_react_default.a.createElement("div", {
        className: "dropbox"
      }, getFieldDecorator('dragger', {
        valuePropName: 'fileList',
        getValueFromEvent: this.normFile
      })(external_react_default.a.createElement(external_antd_["Upload"].Dragger, {
        name: "files",
        action: "/upload.do"
      }, external_react_default.a.createElement("p", {
        className: "ant-upload-drag-icon"
      }, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "inbox"
      })), external_react_default.a.createElement("p", {
        className: "ant-upload-text"
      }, "Click or drag file to this area to upload"), external_react_default.a.createElement("p", {
        className: "ant-upload-hint"
      }, "Support for a single or bulk upload."))))), external_react_default.a.createElement(validate_other_FormItem, {
        wrapperCol: {
          span: 12,
          offset: 6
        }
      }, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        htmlType: "submit"
      }, "Submit")));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var validate_other = (external_antd_["Form"].create()(validate_other_Demo));
// CONCATENATED MODULE: ./demos/antd/form/without-form-create.js











var without_form_create_FormItem = external_antd_["Form"].Item;

function validatePrimeNumber(number) {
  if (number === 11) {
    return {
      validateStatus: 'success',
      errorMsg: null
    };
  }

  return {
    validateStatus: 'error',
    errorMsg: 'The prime between 8 and 12 is 11!'
  };
}

var without_form_create_RawForm =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(RawForm, _React$Component);

  function RawForm() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, RawForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(RawForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      number: {
        value: 11
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleNumberChange", function (value) {
      _this.setState({
        number: Object(objectSpread["a" /* default */])({}, validatePrimeNumber(value), {
          value: value
        })
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(RawForm, [{
    key: "render",
    value: function render() {
      var formItemLayout = {
        labelCol: {
          span: 7
        },
        wrapperCol: {
          span: 12
        }
      };
      var number = this.state.number;
      var tips = 'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.';
      return external_react_default.a.createElement(external_antd_["Form"], null, external_react_default.a.createElement(without_form_create_FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
        label: "Prime between 8 & 12",
        validateStatus: number.validateStatus,
        help: number.errorMsg || tips
      }), external_react_default.a.createElement(external_antd_["InputNumber"], {
        min: 8,
        max: 12,
        value: number.value,
        onChange: this.handleNumberChange
      })));
    }
  }]);

  return RawForm;
}(external_react_default.a.Component);

/* harmony default export */ var without_form_create = (without_form_create_RawForm);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("6BQ9");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// CONCATENATED MODULE: ./demos/antd/form/customized-form-controls.js












var customized_form_controls_FormItem = external_antd_["Form"].Item;
var customized_form_controls_Option = external_antd_["Select"].Option;

var customized_form_controls_PriceInput =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(PriceInput, _React$Component);

  Object(createClass["a" /* default */])(PriceInput, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      // Should be a controlled component.
      if ('value' in nextProps) {
        return Object(objectSpread["a" /* default */])({}, nextProps.value || {});
      }

      return null;
    }
  }]);

  function PriceInput(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PriceInput);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PriceInput).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleNumberChange", function (e) {
      var number = parse_int_default()(e.target.value || 0, 10);

      if (isNaN(number)) {
        return;
      }

      if (!('value' in _this.props)) {
        _this.setState({
          number: number
        });
      }

      _this.triggerChange({
        number: number
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleCurrencyChange", function (currency) {
      if (!('value' in _this.props)) {
        _this.setState({
          currency: currency
        });
      }

      _this.triggerChange({
        currency: currency
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "triggerChange", function (changedValue) {
      // Should provide an event to pass value to Form.
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(assign_default()({}, _this.state, changedValue));
      }
    });

    var value = props.value || {};
    _this.state = {
      number: value.number || 0,
      currency: value.currency || 'rmb'
    };
    return _this;
  }

  Object(createClass["a" /* default */])(PriceInput, [{
    key: "render",
    value: function render() {
      var size = this.props.size;
      var state = this.state;
      return external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Input"], {
        type: "text",
        size: size,
        value: state.number,
        onChange: this.handleNumberChange,
        style: {
          width: '65%',
          marginRight: '3%'
        }
      }), external_react_default.a.createElement(external_antd_["Select"], {
        value: state.currency,
        size: size,
        style: {
          width: '32%'
        },
        onChange: this.handleCurrencyChange
      }, external_react_default.a.createElement(customized_form_controls_Option, {
        value: "rmb"
      }, "RMB"), external_react_default.a.createElement(customized_form_controls_Option, {
        value: "dollar"
      }, "Dollar")));
    }
  }]);

  return PriceInput;
}(external_react_default.a.Component);

var customized_form_controls_Demo =
/*#__PURE__*/
function (_React$Component2) {
  Object(inherits["a" /* default */])(Demo, _React$Component2);

  function Demo() {
    var _getPrototypeOf2;

    var _this2;

    Object(classCallCheck["a" /* default */])(this, Demo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Demo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this2), "handleSubmit", function (e) {
      e.preventDefault();

      _this2.props.form.validateFields(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this2), "checkPrice", function (rule, value, callback) {
      if (value.number > 0) {
        callback();
        return;
      }

      callback('Price must greater than zero!');
    });

    return _this2;
  }

  Object(createClass["a" /* default */])(Demo, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return external_react_default.a.createElement(external_antd_["Form"], {
        layout: "inline",
        onSubmit: this.handleSubmit
      }, external_react_default.a.createElement(customized_form_controls_FormItem, {
        label: "Price"
      }, getFieldDecorator('price', {
        initialValue: {
          number: 0,
          currency: 'rmb'
        },
        rules: [{
          validator: this.checkPrice
        }]
      })(external_react_default.a.createElement(customized_form_controls_PriceInput, null))), external_react_default.a.createElement(customized_form_controls_FormItem, null, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        htmlType: "submit"
      }, "Submit")));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var customized_form_controls = (external_antd_["Form"].create()(customized_form_controls_Demo));
// CONCATENATED MODULE: ./demos/antd/form/validate-static.js



var validate_static_FormItem = external_antd_["Form"].Item;
var validate_static_Option = external_antd_["Select"].Option;
var validate_static_formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 5
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    }
  }
};

var validate_static_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Form"], null, external_react_default.a.createElement(validate_static_FormItem, Object(esm_extends["a" /* default */])({}, validate_static_formItemLayout, {
    label: "Fail",
    validateStatus: "error",
    help: "Should be combination of numbers & alphabets"
  }), external_react_default.a.createElement(external_antd_["Input"], {
    placeholder: "unavailable choice",
    id: "error"
  })), external_react_default.a.createElement(validate_static_FormItem, Object(esm_extends["a" /* default */])({}, validate_static_formItemLayout, {
    label: "Warning",
    validateStatus: "warning"
  }), external_react_default.a.createElement(external_antd_["Input"], {
    placeholder: "Warning",
    id: "warning"
  })), external_react_default.a.createElement(validate_static_FormItem, Object(esm_extends["a" /* default */])({}, validate_static_formItemLayout, {
    label: "Validating",
    hasFeedback: true,
    validateStatus: "validating",
    help: "The information is being validated..."
  }), external_react_default.a.createElement(external_antd_["Input"], {
    placeholder: "I'm the content is being validated",
    id: "validating"
  })), external_react_default.a.createElement(validate_static_FormItem, Object(esm_extends["a" /* default */])({}, validate_static_formItemLayout, {
    label: "Success",
    hasFeedback: true,
    validateStatus: "success"
  }), external_react_default.a.createElement(external_antd_["Input"], {
    placeholder: "I'm the content",
    id: "success"
  })), external_react_default.a.createElement(validate_static_FormItem, Object(esm_extends["a" /* default */])({}, validate_static_formItemLayout, {
    label: "Warning",
    hasFeedback: true,
    validateStatus: "warning"
  }), external_react_default.a.createElement(external_antd_["Input"], {
    placeholder: "Warning",
    id: "warning"
  })), external_react_default.a.createElement(validate_static_FormItem, Object(esm_extends["a" /* default */])({}, validate_static_formItemLayout, {
    label: "Fail",
    hasFeedback: true,
    validateStatus: "error",
    help: "Should be combination of numbers & alphabets"
  }), external_react_default.a.createElement(external_antd_["Input"], {
    placeholder: "unavailable choice",
    id: "error"
  })), external_react_default.a.createElement(validate_static_FormItem, Object(esm_extends["a" /* default */])({}, validate_static_formItemLayout, {
    label: "Success",
    hasFeedback: true,
    validateStatus: "success"
  }), external_react_default.a.createElement(external_antd_["DatePicker"], {
    style: {
      width: '100%'
    }
  })), external_react_default.a.createElement(validate_static_FormItem, Object(esm_extends["a" /* default */])({}, validate_static_formItemLayout, {
    label: "Warning",
    hasFeedback: true,
    validateStatus: "warning"
  }), external_react_default.a.createElement(external_antd_["TimePicker"], {
    style: {
      width: '100%'
    }
  })), external_react_default.a.createElement(validate_static_FormItem, Object(esm_extends["a" /* default */])({}, validate_static_formItemLayout, {
    label: "Error",
    hasFeedback: true,
    validateStatus: "error"
  }), external_react_default.a.createElement(external_antd_["Select"], {
    defaultValue: "1"
  }, external_react_default.a.createElement(validate_static_Option, {
    value: "1"
  }, "Option 1"), external_react_default.a.createElement(validate_static_Option, {
    value: "2"
  }, "Option 2"), external_react_default.a.createElement(validate_static_Option, {
    value: "3"
  }, "Option 3"))), external_react_default.a.createElement(validate_static_FormItem, Object(esm_extends["a" /* default */])({}, validate_static_formItemLayout, {
    label: "Validating",
    hasFeedback: true,
    validateStatus: "validating",
    help: "The information is being validated..."
  }), external_react_default.a.createElement(external_antd_["Cascader"], {
    defaultValue: ['1'],
    options: []
  })), external_react_default.a.createElement(validate_static_FormItem, Object(esm_extends["a" /* default */])({
    label: "inline"
  }, validate_static_formItemLayout), external_react_default.a.createElement(external_antd_["Col"], {
    span: 11
  }, external_react_default.a.createElement(validate_static_FormItem, {
    validateStatus: "error",
    help: "Please select the correct date"
  }, external_react_default.a.createElement(external_antd_["DatePicker"], null))), external_react_default.a.createElement(external_antd_["Col"], {
    span: 2
  }, external_react_default.a.createElement("span", {
    style: {
      display: 'inline-block',
      width: '100%',
      textAlign: 'center'
    }
  }, "-")), external_react_default.a.createElement(external_antd_["Col"], {
    span: 11
  }, external_react_default.a.createElement(validate_static_FormItem, null, external_react_default.a.createElement(external_antd_["DatePicker"], null)))), external_react_default.a.createElement(validate_static_FormItem, Object(esm_extends["a" /* default */])({}, validate_static_formItemLayout, {
    label: "Success",
    hasFeedback: true,
    validateStatus: "success"
  }), external_react_default.a.createElement(external_antd_["InputNumber"], {
    style: {
      width: '100%'
    }
  })));
};

/* harmony default export */ var validate_static = (validate_static_Component);
// CONCATENATED MODULE: ./demos/antd/form/demo.js























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
      }, external_react_default.a.createElement("small", null, "Horizontal login")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(horizontal_login, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Normal login")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(normal_login, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Register")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(register, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Advanced search")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(advanced_search, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Form in modal")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(form_in_modal, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Dynamic form item")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(dynamic_form_item, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Time related controls")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(time_related_controls, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Customized form control")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement("customized", null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Layout")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(layout, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Coordinated")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(coordinated, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Dynamic rule")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(dynamic_rule, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Global state")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(global_state, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Validate other")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(validate_other, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Validate static")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement("validateStatic", null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Without form create")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(without_form_create, null)));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var demo = (demo_Demo);
// CONCATENATED MODULE: ./pages/data-entry/form.js



var form_DemoPage = function DemoPage() {
  return external_react_default.a.createElement(demo, null);
};

/* harmony default export */ var data_entry_form = __webpack_exports__["default"] = (form_DemoPage);

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

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

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

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