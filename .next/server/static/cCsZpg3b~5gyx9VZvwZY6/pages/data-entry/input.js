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
/******/ 	return __webpack_require__(__webpack_require__.s = "de59");
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

/***/ "aWGI":
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

// CONCATENATED MODULE: ./demos/antd/input/addon.js


var Option = external_antd_["Select"].Option;
var selectBefore = external_react_default.a.createElement(external_antd_["Select"], {
  defaultValue: "Http://",
  style: {
    width: 90
  }
}, external_react_default.a.createElement(Option, {
  value: "Http://"
}, "Http://"), external_react_default.a.createElement(Option, {
  value: "Https://"
}, "Https://"));
var selectAfter = external_react_default.a.createElement(external_antd_["Select"], {
  defaultValue: ".com",
  style: {
    width: 80
  }
}, external_react_default.a.createElement(Option, {
  value: ".com"
}, ".com"), external_react_default.a.createElement(Option, {
  value: ".jp"
}, ".jp"), external_react_default.a.createElement(Option, {
  value: ".cn"
}, ".cn"), external_react_default.a.createElement(Option, {
  value: ".org"
}, ".org"));

var addon_Component = function Component() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, external_react_default.a.createElement(external_antd_["Input"], {
    addonBefore: "Http://",
    addonAfter: ".com",
    defaultValue: "mysite"
  })), external_react_default.a.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, external_react_default.a.createElement(external_antd_["Input"], {
    addonBefore: selectBefore,
    addonAfter: selectAfter,
    defaultValue: "mysite"
  })), external_react_default.a.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, external_react_default.a.createElement(external_antd_["Input"], {
    addonAfter: external_react_default.a.createElement(external_antd_["Icon"], {
      type: "setting"
    }),
    defaultValue: "mysite"
  })));
};

/* harmony default export */ var addon = (addon_Component);
// CONCATENATED MODULE: ./demos/antd/input/autosize-textarea.js


var TextArea = external_antd_["Input"].TextArea;

var autosize_textarea_Component = function Component() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(TextArea, {
    placeholder: "Autosize height based on content lines",
    autosize: true
  }), external_react_default.a.createElement("div", {
    style: {
      margin: '24px 0'
    }
  }), external_react_default.a.createElement(TextArea, {
    placeholder: "Autosize height with minimum and maximum number of lines",
    autosize: {
      minRows: 2,
      maxRows: 6
    }
  }));
};

/* harmony default export */ var autosize_textarea = (autosize_textarea_Component);
// CONCATENATED MODULE: ./demos/antd/input/basic.js



var basic_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Input"], {
    placeholder: "Basic usage"
  });
};

/* harmony default export */ var basic = (basic_Component);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// CONCATENATED MODULE: ./demos/antd/input/group.js









var InputGroup = external_antd_["Input"].Group;
var group_Option = external_antd_["Select"].Option;
var options = [{
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

var group_CompactDemo =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(CompactDemo, _React$Component);

  function CompactDemo() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, CompactDemo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(CompactDemo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      dataSource: []
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleChange", function (value) {
      _this.setState({
        dataSource: !value || value.indexOf('@') >= 0 ? [] : ["".concat(value, "@gmail.com"), "".concat(value, "@163.com"), "".concat(value, "@qq.com")]
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(CompactDemo, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(InputGroup, {
        size: "large"
      }, external_react_default.a.createElement(external_antd_["Col"], {
        span: 5
      }, external_react_default.a.createElement(external_antd_["Input"], {
        defaultValue: "0571"
      })), external_react_default.a.createElement(external_antd_["Col"], {
        span: 8
      }, external_react_default.a.createElement(external_antd_["Input"], {
        defaultValue: "26888888"
      }))), external_react_default.a.createElement("br", null), external_react_default.a.createElement(InputGroup, {
        compact: true
      }, external_react_default.a.createElement(external_antd_["Input"], {
        style: {
          width: '20%'
        },
        defaultValue: "0571"
      }), external_react_default.a.createElement(external_antd_["Input"], {
        style: {
          width: '30%'
        },
        defaultValue: "26888888"
      })), external_react_default.a.createElement("br", null), external_react_default.a.createElement(InputGroup, {
        compact: true
      }, external_react_default.a.createElement(external_antd_["Select"], {
        defaultValue: "Zhejiang"
      }, external_react_default.a.createElement(group_Option, {
        value: "Zhejiang"
      }, "Zhejiang"), external_react_default.a.createElement(group_Option, {
        value: "Jiangsu"
      }, "Jiangsu")), external_react_default.a.createElement(external_antd_["Input"], {
        style: {
          width: '50%'
        },
        defaultValue: "Xihu District, Hangzhou"
      })), external_react_default.a.createElement("br", null), external_react_default.a.createElement(InputGroup, {
        compact: true
      }, external_react_default.a.createElement(external_antd_["Select"], {
        defaultValue: "Option1"
      }, external_react_default.a.createElement(group_Option, {
        value: "Option1"
      }, "Option1"), external_react_default.a.createElement(group_Option, {
        value: "Option2"
      }, "Option2")), external_react_default.a.createElement(external_antd_["Input"], {
        style: {
          width: '50%'
        },
        defaultValue: "input content"
      }), external_react_default.a.createElement(external_antd_["InputNumber"], null)), external_react_default.a.createElement("br", null), external_react_default.a.createElement(InputGroup, {
        compact: true
      }, external_react_default.a.createElement(external_antd_["Input"], {
        style: {
          width: '50%'
        },
        defaultValue: "input content"
      }), external_react_default.a.createElement(external_antd_["DatePicker"], null)), external_react_default.a.createElement("br", null), external_react_default.a.createElement(InputGroup, {
        compact: true
      }, external_react_default.a.createElement(external_antd_["Select"], {
        defaultValue: "Option1-1"
      }, external_react_default.a.createElement(group_Option, {
        value: "Option1-1"
      }, "Option1-1"), external_react_default.a.createElement(group_Option, {
        value: "Option1-2"
      }, "Option1-2")), external_react_default.a.createElement(external_antd_["Select"], {
        defaultValue: "Option2-2"
      }, external_react_default.a.createElement(group_Option, {
        value: "Option2-1"
      }, "Option2-1"), external_react_default.a.createElement(group_Option, {
        value: "Option2-2"
      }, "Option2-2"))), external_react_default.a.createElement("br", null), external_react_default.a.createElement(InputGroup, {
        compact: true
      }, external_react_default.a.createElement(external_antd_["Select"], {
        defaultValue: "1"
      }, external_react_default.a.createElement(group_Option, {
        value: "1"
      }, "Between"), external_react_default.a.createElement(group_Option, {
        value: "2"
      }, "Except")), external_react_default.a.createElement(external_antd_["Input"], {
        style: {
          width: 100,
          textAlign: 'center'
        },
        placeholder: "Minimum"
      }), external_react_default.a.createElement(external_antd_["Input"], {
        style: {
          width: 30,
          borderLeft: 0,
          pointerEvents: 'none',
          backgroundColor: '#fff'
        },
        placeholder: "~",
        disabled: true
      }), external_react_default.a.createElement(external_antd_["Input"], {
        style: {
          width: 100,
          textAlign: 'center',
          borderLeft: 0
        },
        placeholder: "Maximum"
      })), external_react_default.a.createElement("br", null), external_react_default.a.createElement(InputGroup, {
        compact: true
      }, external_react_default.a.createElement(external_antd_["Select"], {
        defaultValue: "Sign Up"
      }, external_react_default.a.createElement(group_Option, {
        value: "Sign Up"
      }, "Sign Up"), external_react_default.a.createElement(group_Option, {
        value: "Sign In"
      }, "Sign In")), external_react_default.a.createElement(external_antd_["AutoComplete"], {
        dataSource: this.state.dataSource,
        style: {
          width: 200
        },
        onChange: this.handleChange,
        placeholder: "Email"
      })), external_react_default.a.createElement("br", null), external_react_default.a.createElement(InputGroup, {
        compact: true
      }, external_react_default.a.createElement(external_antd_["Select"], {
        style: {
          width: '30%'
        },
        defaultValue: "Home"
      }, external_react_default.a.createElement(group_Option, {
        value: "Home"
      }, "Home"), external_react_default.a.createElement(group_Option, {
        value: "Company"
      }, "Company")), external_react_default.a.createElement(external_antd_["Cascader"], {
        style: {
          width: '70%'
        },
        options: options,
        placeholder: "Select Address"
      })));
    }
  }]);

  return CompactDemo;
}(external_react_default.a.Component);

/* harmony default export */ var group = (group_CompactDemo);
// CONCATENATED MODULE: ./demos/antd/input/presuffix.js










var presuffix_App =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(App, _React$Component);

  function App(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, App);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(App).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "emitEmpty", function () {
      _this.userNameInput.focus();

      _this.setState({
        userName: ''
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onChangeUserName", function (e) {
      _this.setState({
        userName: e.target.value
      });
    });

    _this.state = {
      userName: ''
    };
    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var userName = this.state.userName;
      var suffix = userName ? external_react_default.a.createElement(external_antd_["Icon"], {
        type: "close-circle",
        onClick: this.emitEmpty
      }) : null;
      return external_react_default.a.createElement(external_antd_["Input"], {
        placeholder: "Enter your username",
        prefix: external_react_default.a.createElement(external_antd_["Icon"], {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        suffix: suffix,
        value: userName,
        onChange: this.onChangeUserName,
        ref: function ref(node) {
          return _this2.userNameInput = node;
        }
      });
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var presuffix = (presuffix_App);
// CONCATENATED MODULE: ./demos/antd/input/search-input.js


var Search = external_antd_["Input"].Search;

var search_input_Component = function Component() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Search, {
    placeholder: "input search text",
    onSearch: function onSearch(value) {
      return console.log(value);
    },
    style: {
      width: 200
    }
  }), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement(Search, {
    placeholder: "input search text",
    onSearch: function onSearch(value) {
      return console.log(value);
    },
    enterButton: true
  }), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement(Search, {
    placeholder: "input search text",
    enterButton: "Search",
    size: "large",
    onSearch: function onSearch(value) {
      return console.log(value);
    }
  }));
};

/* harmony default export */ var search_input = (search_input_Component);
// CONCATENATED MODULE: ./demos/antd/input/size.js



var size_Component = function Component() {
  return external_react_default.a.createElement("div", {
    className: "example-input"
  }, external_react_default.a.createElement(external_antd_["Input"], {
    size: "large",
    placeholder: "large size"
  }), external_react_default.a.createElement(external_antd_["Input"], {
    placeholder: "default size"
  }), external_react_default.a.createElement(external_antd_["Input"], {
    size: "small",
    placeholder: "small size"
  }));
};

/* harmony default export */ var size = (size_Component);
// CONCATENATED MODULE: ./demos/antd/input/textarea.js


var textarea_TextArea = external_antd_["Input"].TextArea;

var textarea_Component = function Component() {
  return external_react_default.a.createElement(textarea_TextArea, {
    rows: 4
  });
};

/* harmony default export */ var input_textarea = (textarea_Component);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// CONCATENATED MODULE: ./demos/antd/input/tooltip.js











function formatNumber(value) {
  value += '';
  var list = value.split('.');
  var prefix = list[0].charAt(0) === '-' ? '-' : '';
  var num = prefix ? list[0].slice(1) : list[0];
  var result = '';

  while (num.length > 3) {
    result = ",".concat(num.slice(-3)).concat(result);
    num = num.slice(0, num.length - 3);
  }

  if (num) {
    result = num + result;
  }

  return "".concat(prefix).concat(result).concat(list[1] ? ".".concat(list[1]) : '');
}

var tooltip_NumericInput =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(NumericInput, _React$Component);

  function NumericInput() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, NumericInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(NumericInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onChange", function (e) {
      var value = e.target.value;
      var reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;

      if (!isNaN(value) && reg.test(value) || value === '' || value === '-') {
        _this.props.onChange(value);
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onBlur", function () {
      var _this$props = _this.props,
          value = _this$props.value,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange;

      if (value.charAt(value.length - 1) === '.' || value === '-') {
        onChange({
          value: value.slice(0, -1)
        });
      }

      if (onBlur) {
        onBlur();
      }
    });

    return _this;
  }

  Object(createClass["a" /* default */])(NumericInput, [{
    key: "render",
    value: function render() {
      var value = this.props.value;
      var title = value ? external_react_default.a.createElement("span", {
        className: "numeric-input-title"
      }, value !== '-' ? formatNumber(value) : '-') : 'Input a number';
      return external_react_default.a.createElement(external_antd_["Tooltip"], {
        trigger: ['focus'],
        title: title,
        placement: "topLeft",
        overlayClassName: "numeric-input"
      }, external_react_default.a.createElement(external_antd_["Input"], Object(esm_extends["a" /* default */])({}, this.props, {
        onChange: this.onChange,
        onBlur: this.onBlur,
        placeholder: "Input a number",
        maxLength: "25"
      })));
    }
  }]);

  return NumericInput;
}(external_react_default.a.Component);

var tooltip_NumericInputDemo =
/*#__PURE__*/
function (_React$Component2) {
  Object(inherits["a" /* default */])(NumericInputDemo, _React$Component2);

  function NumericInputDemo(props) {
    var _this2;

    Object(classCallCheck["a" /* default */])(this, NumericInputDemo);

    _this2 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NumericInputDemo).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this2), "onChange", function (value) {
      _this2.setState({
        value: value
      });
    });

    _this2.state = {
      value: ''
    };
    return _this2;
  }

  Object(createClass["a" /* default */])(NumericInputDemo, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(tooltip_NumericInput, {
        style: {
          width: 120
        },
        value: this.state.value,
        onChange: this.onChange
      });
    }
  }]);

  return NumericInputDemo;
}(external_react_default.a.Component);

/* harmony default export */ var tooltip = (tooltip_NumericInputDemo);
// CONCATENATED MODULE: ./demos/antd/input/demo.js

















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
        id: "components-input-demo"
      }, external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Addon")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(addon, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Autosize textarea")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(autosize_textarea, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Basic")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(basic, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Group")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(group, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Presuffix")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(presuffix, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Search input")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(search_input, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Size")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(size, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Textarea")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(input_textarea, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Tooltip")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(tooltip, null)));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var demo = (demo_Demo);
// CONCATENATED MODULE: ./pages/data-entry/input.js



var input_DemoPage = function DemoPage() {
  return external_react_default.a.createElement(demo, null);
};

/* harmony default export */ var input = __webpack_exports__["default"] = (input_DemoPage);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "de59":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aWGI");


/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

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