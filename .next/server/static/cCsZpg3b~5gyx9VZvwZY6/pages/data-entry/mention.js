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
/******/ 	return __webpack_require__(__webpack_require__.s = "6ced");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0TAV":
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

// CONCATENATED MODULE: ./demos/antd/mention/async.js









var users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

var async_AsyncMention =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(AsyncMention, _React$Component);

  function AsyncMention() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, AsyncMention);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(AsyncMention)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      suggestions: [],
      loading: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "fetchSuggestions", function (value, callback) {
      setTimeout(function () {
        callback(users.filter(function (item) {
          return item.indexOf(value) !== -1;
        }));
      }, 500);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSearchChange", function (value) {
      _this.fetchSuggestions(value, function (suggestions) {
        _this.setState({
          suggestions: suggestions,
          loading: false
        });
      });

      _this.setState({
        loading: true
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(AsyncMention, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          suggestions = _this$state.suggestions,
          loading = _this$state.loading;
      return external_react_default.a.createElement(external_antd_["Mention"], {
        style: {
          width: '100%'
        },
        loading: loading,
        suggestions: suggestions,
        onSearchChange: this.onSearchChange
      });
    }
  }]);

  return AsyncMention;
}(external_react_default.a.Component);

/* harmony default export */ var mention_async = (async_AsyncMention);
// CONCATENATED MODULE: ./demos/antd/mention/avatar.js









var Nav = external_antd_["Mention"].Nav;
var webFrameworks = [{
  name: 'React',
  type: 'JavaScript',
  icon: 'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg'
}, {
  name: 'Angular',
  type: 'JavaScript',
  icon: 'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png'
}, {
  name: 'Dva',
  type: 'Javascript',
  icon: 'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png'
}, {
  name: 'Flask',
  type: 'Python',
  icon: 'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png'
}];

var avatar_CustomNavMention =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(CustomNavMention, _React$Component);

  function CustomNavMention() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, CustomNavMention);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(CustomNavMention)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      suggestions: []
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSearchChange", function (value) {
      var searchValue = value.toLowerCase();
      var filtered = webFrameworks.filter(function (item) {
        return item.name.toLowerCase().indexOf(searchValue) !== -1;
      });
      var suggestions = filtered.map(function (suggestion) {
        return external_react_default.a.createElement(Nav, {
          value: suggestion.name,
          data: suggestion,
          disabled: suggestion.disabled
        }, external_react_default.a.createElement(external_antd_["Avatar"], {
          src: suggestion.icon,
          size: "small",
          style: {
            width: 14,
            height: 14,
            marginRight: 8,
            top: -1,
            position: 'relative'
          }
        }), suggestion.name, " - ", suggestion.type);
      });

      _this.setState({
        suggestions: suggestions
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(CustomNavMention, [{
    key: "render",
    value: function render() {
      var suggestions = this.state.suggestions;
      return external_react_default.a.createElement(external_antd_["Mention"], {
        style: {
          width: '100%'
        },
        suggestions: suggestions,
        onSearchChange: this.onSearchChange
      });
    }
  }]);

  return CustomNavMention;
}(external_react_default.a.Component);

/* harmony default export */ var avatar = (avatar_CustomNavMention);
// CONCATENATED MODULE: ./demos/antd/mention/basic.js


var basic_toString = external_antd_["Mention"].toString,
    toContentState = external_antd_["Mention"].toContentState;

function onChange(contentState) {
  console.log(basic_toString(contentState));
}

function onSelect(suggestion) {
  console.log('onSelect', suggestion);
}

var basic_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Mention"], {
    style: {
      width: '100%'
    },
    onChange: onChange,
    defaultValue: toContentState('@afc163'),
    suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'],
    onSelect: onSelect
  });
};

/* harmony default export */ var basic = (basic_Component);
// CONCATENATED MODULE: ./demos/antd/mention/controlled.js









var controlled_toContentState = external_antd_["Mention"].toContentState,
    getMentions = external_antd_["Mention"].getMentions;
var FormItem = external_antd_["Form"].Item;

var controlled_App =
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
      initValue: controlled_toContentState('@afc163')
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleReset", function (e) {
      e.preventDefault();

      _this.props.form.resetFields();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (errors, values) {
        if (errors) {
          console.log('Errors in the form!!!');
          return;
        }

        console.log('Submit!!!');
        console.log(values);
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "checkMention", function (rule, value, callback) {
      var getFieldValue = _this.props.form.getFieldValue;
      var mentions = getMentions(getFieldValue('mention'));

      if (mentions.length < 2) {
        callback(new Error('More than one must be selected!'));
      } else {
        callback();
      }
    });

    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "render",
    value: function render() {
      var _this$props$form = this.props.form,
          getFieldDecorator = _this$props$form.getFieldDecorator,
          getFieldValue = _this$props$form.getFieldValue;
      console.log('>> render', getFieldValue('mention') === this.state.initValue);
      return external_react_default.a.createElement(external_antd_["Form"], {
        layout: "horizontal"
      }, external_react_default.a.createElement(FormItem, {
        id: "control-mention",
        label: "Top coders",
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 16
        }
      }, getFieldDecorator('mention', {
        rules: [{
          validator: this.checkMention
        }],
        initialValue: this.state.initValue
      })(external_react_default.a.createElement(external_antd_["Mention"], {
        suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']
      }))), external_react_default.a.createElement(FormItem, {
        wrapperCol: {
          span: 14,
          offset: 6
        }
      }, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        onClick: this.handleSubmit
      }, "Submit"), "\xA0\xA0\xA0", external_react_default.a.createElement(external_antd_["Button"], {
        onClick: this.handleReset
      }, "Reset")));
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var controlled = (external_antd_["Form"].create()(controlled_App));
// CONCATENATED MODULE: ./demos/antd/mention/controllder-simple.js









var controllder_simple_toContentState = external_antd_["Mention"].toContentState;

var controllder_simple_App =
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
      value: controllder_simple_toContentState('@afc163')
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleChange", function (editorState) {
      _this.setState({
        value: editorState
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mention.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(external_antd_["Mention"], {
        ref: function ref(ele) {
          return _this2.mention = ele;
        },
        suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'],
        value: this.state.value,
        onChange: this.handleChange
      });
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var controllder_simple = (controllder_simple_App);
// CONCATENATED MODULE: ./demos/antd/mention/custom-tag.js









var custom_tag_Nav = external_antd_["Mention"].Nav;
var custom_tag_webFrameworks = [{
  name: 'React',
  type: 'JavaScript'
}, {
  name: 'Angular',
  type: 'JavaScript'
}, {
  name: 'Laravel',
  type: 'PHP',
  disabled: true
}, {
  name: 'Flask',
  type: 'Python'
}, {
  name: 'Django',
  type: 'Python'
}];

function custom_tag_onSelect(suggestion, data) {
  console.log('onSelect', suggestion, data);
}

var custom_tag_CustomNavMention =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(CustomNavMention, _React$Component);

  function CustomNavMention() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, CustomNavMention);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(CustomNavMention)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      suggestions: []
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSearchChange", function (value) {
      var searchValue = value.toLowerCase();
      var filtered = custom_tag_webFrameworks.filter(function (item) {
        return item.name.toLowerCase().indexOf(searchValue) !== -1;
      });
      var suggestions = filtered.map(function (suggestion) {
        return external_react_default.a.createElement(custom_tag_Nav, {
          value: suggestion.name,
          data: suggestion
        }, external_react_default.a.createElement("span", null, suggestion.name, " - ", suggestion.type));
      });

      _this.setState({
        suggestions: suggestions
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(CustomNavMention, [{
    key: "render",
    value: function render() {
      var suggestions = this.state.suggestions;
      return external_react_default.a.createElement(external_antd_["Mention"], {
        placeholder: "@someone",
        style: {
          width: '100%'
        },
        suggestions: suggestions,
        onSearchChange: this.onSearchChange,
        onSelect: custom_tag_onSelect
      });
    }
  }]);

  return CustomNavMention;
}(external_react_default.a.Component);

/* harmony default export */ var custom_tag = (custom_tag_CustomNavMention);
// CONCATENATED MODULE: ./demos/antd/mention/multilines.js


var multilines_toString = external_antd_["Mention"].toString;

function multilines_onChange(editorState) {
  console.log(multilines_toString(editorState));
}

var multilines_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Mention"], {
    style: {
      width: '100%',
      height: 100
    },
    onChange: multilines_onChange,
    suggestions: ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'],
    multiLines: true
  });
};

/* harmony default export */ var multilines = (multilines_Component);
// CONCATENATED MODULE: ./demos/antd/mention/multiple-trigger.js









var multiple_trigger_toString = external_antd_["Mention"].toString;

function multiple_trigger_onChange(editorState) {
  console.log(multiple_trigger_toString(editorState));
}

function multiple_trigger_onSelect(suggestion) {
  console.log('onSelect', suggestion);
}

var multiple_trigger_users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];
var tags = ['1.0', '2.0', '3.0'];

var multiple_trigger_App =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(App, _React$Component);

  function App() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, App);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(App).call(this));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSearchChange", function (value, trigger) {
      console.log('onSearchChange', value, trigger);
      var dataSource = trigger === '@' ? multiple_trigger_users : tags;

      _this.setState({
        suggestions: dataSource.filter(function (item) {
          return item.indexOf(value) !== -1;
        })
      });
    });

    _this.state = {
      suggestions: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_antd_["Mention"], {
        style: {
          width: '100%'
        },
        onChange: multiple_trigger_onChange,
        placeholder: "input @ to mention people, # to mention tag",
        prefix: ['@', '#'],
        onSearchChange: this.onSearchChange,
        suggestions: this.state.suggestions,
        onSelect: multiple_trigger_onSelect
      });
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var multiple_trigger = (multiple_trigger_App);
// CONCATENATED MODULE: ./demos/antd/mention/placement.js


var placement_toString = external_antd_["Mention"].toString;

function placement_onChange(contentState) {
  console.log(placement_toString(contentState));
}

function placement_onSelect(suggestion) {
  console.log('onSelect', suggestion);
}

var placement_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Mention"], {
    style: {
      width: '100%'
    },
    onChange: placement_onChange,
    suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'],
    onSelect: placement_onSelect,
    placement: "top"
  });
};

/* harmony default export */ var placement = (placement_Component);
// CONCATENATED MODULE: ./demos/antd/mention/popupContainer.js









var popupContainer_toString = external_antd_["Mention"].toString,
    popupContainer_toContentState = external_antd_["Mention"].toContentState;

function popupContainer_onChange(editorState) {
  console.log(popupContainer_toString(editorState));
}

function popupContainer_onSelect(suggestion) {
  console.log('onSelect', suggestion);
}

var popupContainer_PopoverContainer =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(PopoverContainer, _React$Component);

  function PopoverContainer() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, PopoverContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(PopoverContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getSuggestionContainer", function () {
      return _this.popover.getPopupDomNode();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "visibleChange", function (visible) {
      if (visible && _this.mention) {
        _this.mention.focus();
      }
    });

    return _this;
  }

  Object(createClass["a" /* default */])(PopoverContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var mention = external_react_default.a.createElement(external_antd_["Mention"], {
        ref: function ref(ele) {
          return _this2.mention = ele;
        },
        style: {
          width: '100%'
        },
        onChange: popupContainer_onChange,
        defaultValue: popupContainer_toContentState('@afc163'),
        suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'],
        onSelect: popupContainer_onSelect,
        getSuggestionContainer: this.getSuggestionContainer
      });
      return external_react_default.a.createElement(external_antd_["Popover"], {
        trigger: "click",
        content: mention,
        title: "Title",
        ref: function ref(popover) {
          return _this2.popover = popover;
        },
        onVisibleChange: this.visibleChange
      }, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary"
      }, "Click Me"));
    }
  }]);

  return PopoverContainer;
}(external_react_default.a.Component);

/* harmony default export */ var popupContainer = (popupContainer_PopoverContainer);
// CONCATENATED MODULE: ./demos/antd/mention/readonly.js


var readonly_toString = external_antd_["Mention"].toString;

function readonly_onChange(editorState) {
  console.log(readonly_toString(editorState));
}

var readonly_users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

function readonly_App() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, external_react_default.a.createElement(external_antd_["Mention"], {
    style: {
      width: '100%'
    },
    onChange: readonly_onChange,
    placeholder: "this is disabled Mention",
    suggestions: readonly_users,
    disabled: true
  })), external_react_default.a.createElement(external_antd_["Mention"], {
    style: {
      width: '100%'
    },
    onChange: readonly_onChange,
    placeholder: "this is readOnly Mention",
    suggestions: readonly_users,
    readOnly: true
  }));
}

/* harmony default export */ var readonly = (readonly_App);
// CONCATENATED MODULE: ./demos/antd/mention/demo.js



















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
      }, external_react_default.a.createElement("small", null, "Async")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(mention_async, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Avatar")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(avatar, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Basic")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(basic, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Controlled simple")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(controllder_simple, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Controlled")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(controlled, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Custom")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(custom_tag, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Multilines")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(multilines, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Multiple trigger")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(multiple_trigger, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Placement")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(placement, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Popup container")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(popupContainer, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Readonly")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(readonly, null)));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var demo = (demo_Demo);
// CONCATENATED MODULE: ./pages/data-entry/mention.js



var mention_DemoPage = function DemoPage() {
  return external_react_default.a.createElement(demo, null);
};

/* harmony default export */ var data_entry_mention = __webpack_exports__["default"] = (mention_DemoPage);

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

/***/ "6ced":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0TAV");


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