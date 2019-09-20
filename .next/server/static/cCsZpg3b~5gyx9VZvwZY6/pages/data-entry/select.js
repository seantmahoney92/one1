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
/******/ 	return __webpack_require__(__webpack_require__.s = "4e8b");
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

/***/ "4e8b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("NQez");


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

/***/ "NQez":
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

// CONCATENATED MODULE: ./demos/antd/select/automatic-tokenization.js


var Option = external_antd_["Select"].Option;
var children = [];

for (var i = 10; i < 36; i++) {
  children.push(external_react_default.a.createElement(Option, {
    key: i.toString(36) + i
  }, i.toString(36) + i));
}

function handleChange(value) {
  console.log("selected ".concat(value));
}

var automatic_tokenization_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Select"], {
    mode: "tags",
    style: {
      width: '100%'
    },
    onChange: handleChange,
    tokenSeparators: [',']
  }, children);
};

/* harmony default export */ var automatic_tokenization = (automatic_tokenization_Component);
// CONCATENATED MODULE: ./demos/antd/select/basic.js


var basic_Option = external_antd_["Select"].Option;

function basic_handleChange(value) {
  console.log("selected ".concat(value));
}

var basic_Component = function Component() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Select"], {
    defaultValue: "lucy",
    style: {
      width: 120
    },
    onChange: basic_handleChange
  }, external_react_default.a.createElement(basic_Option, {
    value: "jack"
  }, "Jack"), external_react_default.a.createElement(basic_Option, {
    value: "lucy"
  }, "Lucy"), external_react_default.a.createElement(basic_Option, {
    value: "disabled",
    disabled: true
  }, "Disabled"), external_react_default.a.createElement(basic_Option, {
    value: "Yiminghe"
  }, "yiminghe")), external_react_default.a.createElement(external_antd_["Select"], {
    defaultValue: "lucy",
    style: {
      width: 120
    },
    disabled: true
  }, external_react_default.a.createElement(basic_Option, {
    value: "lucy"
  }, "Lucy")));
};

/* harmony default export */ var basic = (basic_Component);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// CONCATENATED MODULE: ./demos/antd/select/coordinate.js









var coordinate_Option = external_antd_["Select"].Option;
var provinceData = ['Zhejiang', 'Jiangsu'];
var cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
};

var coordinate_App =
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
      cities: cityData[provinceData[0]],
      secondCity: cityData[provinceData[0]][0]
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleProvinceChange", function (value) {
      _this.setState({
        cities: cityData[value],
        secondCity: cityData[value][0]
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSecondCityChange", function (value) {
      _this.setState({
        secondCity: value
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "render",
    value: function render() {
      var cities = this.state.cities;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Select"], {
        defaultValue: provinceData[0],
        style: {
          width: 120
        },
        onChange: this.handleProvinceChange
      }, provinceData.map(function (province) {
        return external_react_default.a.createElement(coordinate_Option, {
          key: province
        }, province);
      })), external_react_default.a.createElement(external_antd_["Select"], {
        style: {
          width: 120
        },
        value: this.state.secondCity,
        onChange: this.onSecondCityChange
      }, cities.map(function (city) {
        return external_react_default.a.createElement(coordinate_Option, {
          key: city
        }, city);
      })));
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var coordinate = (coordinate_App);
// CONCATENATED MODULE: ./demos/antd/select/label-in-value.js


var label_in_value_Option = external_antd_["Select"].Option;

function label_in_value_handleChange(value) {
  console.log(value); // { key: "lucy", label: "Lucy (101)" }
}

var label_in_value_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Select"], {
    labelInValue: true,
    defaultValue: {
      key: 'lucy'
    },
    style: {
      width: 120
    },
    onChange: label_in_value_handleChange
  }, external_react_default.a.createElement(label_in_value_Option, {
    value: "jack"
  }, "Jack (100)"), external_react_default.a.createElement(label_in_value_Option, {
    value: "lucy"
  }, "Lucy (101)"));
};

/* harmony default export */ var label_in_value = (label_in_value_Component);
// CONCATENATED MODULE: ./demos/antd/select/multiple.js


var multiple_Option = external_antd_["Select"].Option;
var multiple_children = [];

for (var multiple_i = 10; multiple_i < 36; multiple_i++) {
  multiple_children.push(external_react_default.a.createElement(multiple_Option, {
    key: multiple_i.toString(36) + multiple_i
  }, multiple_i.toString(36) + multiple_i));
}

function multiple_handleChange(value) {
  console.log("selected ".concat(value));
}

var multiple_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Select"], {
    mode: "multiple",
    style: {
      width: '100%'
    },
    placeholder: "Please select",
    defaultValue: ['a10', 'c12'],
    onChange: multiple_handleChange
  }, multiple_children);
};

/* harmony default export */ var multiple = (multiple_Component);
// CONCATENATED MODULE: ./demos/antd/select/optgroup.js


var optgroup_Option = external_antd_["Select"].Option,
    OptGroup = external_antd_["Select"].OptGroup;

function optgroup_handleChange(value) {
  console.log("selected ".concat(value));
}

var optgroup_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Select"], {
    defaultValue: "lucy",
    style: {
      width: 200
    },
    onChange: optgroup_handleChange
  }, external_react_default.a.createElement(OptGroup, {
    label: "Manager"
  }, external_react_default.a.createElement(optgroup_Option, {
    value: "jack"
  }, "Jack"), external_react_default.a.createElement(optgroup_Option, {
    value: "lucy"
  }, "Lucy")), external_react_default.a.createElement(OptGroup, {
    label: "Engineer"
  }, external_react_default.a.createElement(optgroup_Option, {
    value: "Yiminghe"
  }, "yiminghe")));
};

/* harmony default export */ var optgroup = (optgroup_Component);
// CONCATENATED MODULE: ./demos/antd/select/search.js


var search_Option = external_antd_["Select"].Option;

function search_handleChange(value) {
  console.log("selected ".concat(value));
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

var search_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Select"], {
    showSearch: true,
    style: {
      width: 200
    },
    placeholder: "Select a person",
    optionFilterProp: "children",
    onChange: search_handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, external_react_default.a.createElement(search_Option, {
    value: "jack"
  }, "Jack"), external_react_default.a.createElement(search_Option, {
    value: "lucy"
  }, "Lucy"), external_react_default.a.createElement(search_Option, {
    value: "tom"
  }, "Tom"));
};

/* harmony default export */ var search = (search_Component);
// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__("NUC6");
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// CONCATENATED MODULE: ./demos/antd/select/select-users.js










var select_users_Option = external_antd_["Select"].Option;

var select_users_UserRemoteSelect =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(UserRemoteSelect, _React$Component);

  function UserRemoteSelect(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, UserRemoteSelect);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(UserRemoteSelect).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      data: [],
      value: [],
      fetching: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "fetchUser", function (value) {
      console.log('fetching user', value);
      _this.lastFetchId += 1;
      var fetchId = _this.lastFetchId;

      _this.setState({
        data: [],
        fetching: true
      });

      fetch('https://randomuser.me/api/?results=5').then(function (response) {
        return response.json();
      }).then(function (body) {
        if (fetchId !== _this.lastFetchId) {
          // for fetch callback order
          return;
        }

        var data = body.results.map(function (user) {
          return {
            text: "".concat(user.name.first, " ").concat(user.name.last),
            value: user.login.username
          };
        });

        _this.setState({
          data: data,
          fetching: false
        });
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleChange", function (value) {
      _this.setState({
        value: value,
        data: [],
        fetching: false
      });
    });

    _this.lastFetchId = 0;
    _this.fetchUser = debounce_default()(_this.fetchUser, 800);
    return _this;
  }

  Object(createClass["a" /* default */])(UserRemoteSelect, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          fetching = _this$state.fetching,
          data = _this$state.data,
          value = _this$state.value;
      return external_react_default.a.createElement(external_antd_["Select"], {
        mode: "multiple",
        labelInValue: true,
        value: value,
        placeholder: "Select users",
        notFoundContent: fetching ? external_react_default.a.createElement(external_antd_["Spin"], {
          size: "small"
        }) : null,
        filterOption: false,
        onSearch: this.fetchUser,
        onChange: this.handleChange,
        style: {
          width: '100%'
        }
      }, data.map(function (d) {
        return external_react_default.a.createElement(select_users_Option, {
          key: d.value
        }, d.text);
      }));
    }
  }]);

  return UserRemoteSelect;
}(external_react_default.a.Component);

/* harmony default export */ var select_users = (select_users_UserRemoteSelect);
// CONCATENATED MODULE: ./demos/antd/select/size.js









var size_Option = external_antd_["Select"].Option;
var size_children = [];

for (var size_i = 10; size_i < 36; size_i++) {
  size_children.push(external_react_default.a.createElement(size_Option, {
    key: size_i.toString(36) + size_i
  }, size_i.toString(36) + size_i));
}

function size_handleChange(value) {
  console.log("Selected: ".concat(value));
}

var size_SelectSizesDemo =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(SelectSizesDemo, _React$Component);

  function SelectSizesDemo() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, SelectSizesDemo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(SelectSizesDemo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      size: 'default'
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSizeChange", function (e) {
      _this.setState({
        size: e.target.value
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(SelectSizesDemo, [{
    key: "render",
    value: function render() {
      var size = this.state.size;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Radio"].Group, {
        value: size,
        onChange: this.handleSizeChange
      }, external_react_default.a.createElement(external_antd_["Radio"].Button, {
        value: "large"
      }, "Large"), external_react_default.a.createElement(external_antd_["Radio"].Button, {
        value: "default"
      }, "Default"), external_react_default.a.createElement(external_antd_["Radio"].Button, {
        value: "small"
      }, "Small")), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement(external_antd_["Select"], {
        size: size,
        defaultValue: "a1",
        onChange: size_handleChange,
        style: {
          width: 200
        }
      }, size_children), external_react_default.a.createElement("br", null), external_react_default.a.createElement(external_antd_["Select"], {
        mode: "multiple",
        size: size,
        placeholder: "Please select",
        defaultValue: ['a10', 'c12'],
        onChange: size_handleChange,
        style: {
          width: '100%'
        }
      }, size_children), external_react_default.a.createElement("br", null), external_react_default.a.createElement(external_antd_["Select"], {
        mode: "tags",
        size: size,
        placeholder: "Please select",
        defaultValue: ['a10', 'c12'],
        onChange: size_handleChange,
        style: {
          width: '100%'
        }
      }, size_children));
    }
  }]);

  return SelectSizesDemo;
}(external_react_default.a.Component);

/* harmony default export */ var select_size = (size_SelectSizesDemo);
// CONCATENATED MODULE: ./demos/antd/select/suffix.js


var smileIcon = external_react_default.a.createElement(external_antd_["Icon"], {
  type: "smile"
});
var mehIcon = external_react_default.a.createElement(external_antd_["Icon"], {
  type: "meh"
});
var suffix_Option = external_antd_["Select"].Option;

function suffix_handleChange(value) {
  console.log("selected ".concat(value));
}

var suffix_Component = function Component() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Select"], {
    suffixIcon: smileIcon,
    defaultValue: "lucy",
    style: {
      width: 120
    },
    onChange: suffix_handleChange
  }, external_react_default.a.createElement(suffix_Option, {
    value: "jack"
  }, "Jack"), external_react_default.a.createElement(suffix_Option, {
    value: "lucy"
  }, "Lucy"), external_react_default.a.createElement(suffix_Option, {
    value: "disabled",
    disabled: true
  }, "Disabled"), external_react_default.a.createElement(suffix_Option, {
    value: "Yiminghe"
  }, "yiminghe")), external_react_default.a.createElement(external_antd_["Select"], {
    suffixIcon: mehIcon,
    defaultValue: "lucy",
    style: {
      width: 120
    },
    disabled: true
  }, external_react_default.a.createElement(suffix_Option, {
    value: "lucy"
  }, "Lucy")));
};

/* harmony default export */ var suffix = (suffix_Component);
// CONCATENATED MODULE: ./demos/antd/select/tags.js


var tags_Option = external_antd_["Select"].Option;
var tags_children = [];

for (var tags_i = 10; tags_i < 36; tags_i++) {
  tags_children.push(external_react_default.a.createElement(tags_Option, {
    key: tags_i.toString(36) + tags_i
  }, tags_i.toString(36) + tags_i));
}

function tags_handleChange(value) {
  console.log("selected ".concat(value));
}

var tags_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Select"], {
    mode: "tags",
    style: {
      width: '100%'
    },
    placeholder: "Tags Mode",
    onChange: tags_handleChange
  }, tags_children);
};

/* harmony default export */ var tags = (tags_Component);
// CONCATENATED MODULE: ./demos/antd/select/demo.js












 //import Searchbox from './search-box';







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
      }, external_react_default.a.createElement("small", null, "Basic")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(basic, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Automatic tokenization")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(automatic_tokenization, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Coordinate")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(coordinate, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Label in value")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(label_in_value, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Multiple")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(multiple, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Optgroup")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(optgroup, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Search")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(search, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Select users")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(select_users, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Size")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(select_size, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Suffix")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(suffix, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Tags")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(tags, null)));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var demo = (demo_Demo);
// CONCATENATED MODULE: ./pages/data-entry/select.js



var select_DemoPage = function DemoPage() {
  return external_react_default.a.createElement(demo, null);
};

/* harmony default export */ var data_entry_select = __webpack_exports__["default"] = (select_DemoPage);

/***/ }),

/***/ "NUC6":
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

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