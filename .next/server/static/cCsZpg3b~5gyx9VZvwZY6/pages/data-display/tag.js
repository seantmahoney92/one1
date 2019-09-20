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
/******/ 	return __webpack_require__(__webpack_require__.s = "4660");
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

/***/ "4660":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FixV");


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

/***/ "FixV":
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

// CONCATENATED MODULE: ./demos/antd/tag/basic.js



function log(e) {
  console.log(e);
}

function preventDefault(e) {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
}

var basic_Component = function Component() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Tag"], null, "Tag 1"), external_react_default.a.createElement(external_antd_["Tag"], null, external_react_default.a.createElement("a", {
    href: "https://github.com/ant-design/ant-design/issues/1862"
  }, "Link")), external_react_default.a.createElement(external_antd_["Tag"], {
    closable: true,
    onClose: log
  }, "Tag 2"), external_react_default.a.createElement(external_antd_["Tag"], {
    closable: true,
    onClose: preventDefault
  }, "Prevent Default"));
};

/* harmony default export */ var basic = (basic_Component);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// CONCATENATED MODULE: ./demos/antd/tag/checkable.js










var CheckableTag = external_antd_["Tag"].CheckableTag;

var checkable_MyTag =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(MyTag, _React$Component);

  function MyTag() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, MyTag);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(MyTag)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      checked: true
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleChange", function (checked) {
      _this.setState({
        checked: checked
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(MyTag, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(CheckableTag, Object(esm_extends["a" /* default */])({}, this.props, {
        checked: this.state.checked,
        onChange: this.handleChange
      }));
    }
  }]);

  return MyTag;
}(external_react_default.a.Component);

var checkable_Component = function Component() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(checkable_MyTag, null, "Tag1"), external_react_default.a.createElement(checkable_MyTag, null, "Tag2"), external_react_default.a.createElement(checkable_MyTag, null, "Tag3"));
};

/* harmony default export */ var checkable = (checkable_Component);
// CONCATENATED MODULE: ./demos/antd/tag/colorful.js



var colorful_Component = function Component() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", {
    style: {
      marginBottom: 16
    }
  }, "Presets:"), external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Tag"], {
    color: "magenta"
  }, "magenta"), external_react_default.a.createElement(external_antd_["Tag"], {
    color: "red"
  }, "red"), external_react_default.a.createElement(external_antd_["Tag"], {
    color: "volcano"
  }, "volcano"), external_react_default.a.createElement(external_antd_["Tag"], {
    color: "orange"
  }, "orange"), external_react_default.a.createElement(external_antd_["Tag"], {
    color: "gold"
  }, "gold"), external_react_default.a.createElement(external_antd_["Tag"], {
    color: "lime"
  }, "lime"), external_react_default.a.createElement(external_antd_["Tag"], {
    color: "green"
  }, "green"), external_react_default.a.createElement(external_antd_["Tag"], {
    color: "cyan"
  }, "cyan"), external_react_default.a.createElement(external_antd_["Tag"], {
    color: "blue"
  }, "blue"), external_react_default.a.createElement(external_antd_["Tag"], {
    color: "geekblue"
  }, "geekblue"), external_react_default.a.createElement(external_antd_["Tag"], {
    color: "purple"
  }, "purple")), external_react_default.a.createElement("p", {
    style: {
      margin: '16px 0'
    }
  }, "Custom:"), external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Tag"], {
    color: "#f50"
  }, "#f50"), external_react_default.a.createElement(external_antd_["Tag"], {
    color: "#2db7f5"
  }, "#2db7f5"), external_react_default.a.createElement(external_antd_["Tag"], {
    color: "#87d068"
  }, "#87d068"), external_react_default.a.createElement(external_antd_["Tag"], {
    color: "#108ee9"
  }, "#108ee9")));
};

/* harmony default export */ var colorful = (colorful_Component);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("dfwq");

// CONCATENATED MODULE: ./demos/antd/tag/control.js











var control_EditableTagGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(EditableTagGroup, _React$Component);

  function EditableTagGroup() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, EditableTagGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(EditableTagGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      tags: ['Unremovable', 'Tag 2', 'Tag 3'],
      inputVisible: false,
      inputValue: ''
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleClose", function (removedTag) {
      var tags = _this.state.tags.filter(function (tag) {
        return tag !== removedTag;
      });

      console.log(tags);

      _this.setState({
        tags: tags
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showInput", function () {
      _this.setState({
        inputVisible: true
      }, function () {
        return _this.input.focus();
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleInputChange", function (e) {
      _this.setState({
        inputValue: e.target.value
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleInputConfirm", function () {
      var state = _this.state;
      var inputValue = state.inputValue;
      var tags = state.tags;

      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [].concat(Object(toConsumableArray["a" /* default */])(tags), [inputValue]);
      }

      console.log(tags);

      _this.setState({
        tags: tags,
        inputVisible: false,
        inputValue: ''
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "saveInputRef", function (input) {
      return _this.input = input;
    });

    return _this;
  }

  Object(createClass["a" /* default */])(EditableTagGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          tags = _this$state.tags,
          inputVisible = _this$state.inputVisible,
          inputValue = _this$state.inputValue;
      return external_react_default.a.createElement("div", null, tags.map(function (tag, index) {
        var isLongTag = tag.length > 20;
        var tagElem = external_react_default.a.createElement(external_antd_["Tag"], {
          key: tag,
          closable: index !== 0,
          afterClose: function afterClose() {
            return _this2.handleClose(tag);
          }
        }, isLongTag ? "".concat(tag.slice(0, 20), "...") : tag);
        return isLongTag ? external_react_default.a.createElement(external_antd_["Tooltip"], {
          title: tag,
          key: tag
        }, tagElem) : tagElem;
      }), inputVisible && external_react_default.a.createElement(external_antd_["Input"], {
        ref: this.saveInputRef,
        type: "text",
        size: "small",
        style: {
          width: 78
        },
        value: inputValue,
        onChange: this.handleInputChange,
        onBlur: this.handleInputConfirm,
        onPressEnter: this.handleInputConfirm
      }), !inputVisible && external_react_default.a.createElement(external_antd_["Tag"], {
        onClick: this.showInput,
        style: {
          background: '#fff',
          borderStyle: 'dashed'
        }
      }, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "plus"
      }), " New Tag"));
    }
  }]);

  return EditableTagGroup;
}(external_react_default.a.Component);

/* harmony default export */ var control = (control_EditableTagGroup);
// CONCATENATED MODULE: ./demos/antd/tag/controlled.js










var controlled_Demo =
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
      visible: true
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Demo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Tag"], {
        closable: true,
        visible: this.state.visible,
        onClose: function onClose() {
          return _this2.setState({
            visible: false
          });
        }
      }, "Movies"), external_react_default.a.createElement("br", null), external_react_default.a.createElement(external_antd_["Button"], {
        size: "small",
        onClick: function onClick() {
          return _this2.setState({
            visible: !_this2.state.visible
          });
        }
      }, "Toggle"));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var controlled = (controlled_Demo);
// CONCATENATED MODULE: ./demos/antd/tag/hot-tags.js










var hot_tags_CheckableTag = external_antd_["Tag"].CheckableTag;
var tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];

var hot_tags_HotTags =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(HotTags, _React$Component);

  function HotTags() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, HotTags);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(HotTags)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      selectedTags: []
    });

    return _this;
  }

  Object(createClass["a" /* default */])(HotTags, [{
    key: "handleChange",
    value: function handleChange(tag, checked) {
      var selectedTags = this.state.selectedTags;
      var nextSelectedTags = checked ? [].concat(Object(toConsumableArray["a" /* default */])(selectedTags), [tag]) : selectedTags.filter(function (t) {
        return t !== tag;
      });
      console.log('You are interested in: ', nextSelectedTags);
      this.setState({
        selectedTags: nextSelectedTags
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var selectedTags = this.state.selectedTags;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h6", {
        style: {
          marginRight: 8,
          display: 'inline'
        }
      }, "Categories:"), tagsFromServer.map(function (tag) {
        return external_react_default.a.createElement(hot_tags_CheckableTag, {
          key: tag,
          checked: selectedTags.indexOf(tag) > -1,
          onChange: function onChange(checked) {
            return _this2.handleChange(tag, checked);
          }
        }, tag);
      }));
    }
  }]);

  return HotTags;
}(external_react_default.a.Component);

/* harmony default export */ var hot_tags = (hot_tags_HotTags);
// CONCATENATED MODULE: ./demos/antd/tag/demo.js














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
      }, external_react_default.a.createElement("small", null, "Checkable")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(checkable, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Colorful")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(colorful, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Control")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(control, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Controlled")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(controlled, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Hot tags")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(hot_tags, null)));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var demo = (demo_Demo);
// CONCATENATED MODULE: ./pages/data-display/tag.js



var tag_DemoPage = function DemoPage() {
  return external_react_default.a.createElement(demo, null);
};

/* harmony default export */ var data_display_tag = __webpack_exports__["default"] = (tag_DemoPage);

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

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

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

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ })

/******/ });