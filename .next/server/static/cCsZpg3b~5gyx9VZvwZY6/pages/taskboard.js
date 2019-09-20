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
/******/ 	return __webpack_require__(__webpack_require__.s = "9103");
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

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "9103":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o1NZ");


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

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

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

/***/ "Skji":
/***/ (function(module, exports) {

module.exports = require("date-fns/format");

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

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

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

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "o1NZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: external "react-beautiful-dnd"
var external_react_beautiful_dnd_ = __webpack_require__("uzjx");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("dfwq");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// CONCATENATED MODULE: ./components/shared/taskboard/reorder.js






// a little function to help us with reordering the result
var reorder_reorder = function reorder(list, startIndex, endIndex) {
  var result = from_default()(list);

  var _result$splice = result.splice(startIndex, 1),
      _result$splice2 = Object(slicedToArray["a" /* default */])(_result$splice, 1),
      removed = _result$splice2[0];

  result.splice(endIndex, 0, removed);
  return result;
};

/* harmony default export */ var taskboard_reorder = (reorder_reorder);
var reorder_reorderQuoteMap = function reorderQuoteMap(_ref) {
  var _objectSpread3;

  var quoteMap = _ref.quoteMap,
      source = _ref.source,
      destination = _ref.destination;

  var current = Object(toConsumableArray["a" /* default */])(quoteMap[source.droppableId]);

  var next = Object(toConsumableArray["a" /* default */])(quoteMap[destination.droppableId]);

  var target = current[source.index];

  if (source.droppableId === destination.droppableId) {
    var reordered = reorder_reorder(current, source.index, destination.index);

    var _result = Object(objectSpread["a" /* default */])({}, quoteMap, Object(defineProperty["a" /* default */])({}, source.droppableId, reordered));

    return {
      quoteMap: _result
    };
  }

  current.splice(source.index, 1);
  next.splice(destination.index, 0, target);

  var result = Object(objectSpread["a" /* default */])({}, quoteMap, (_objectSpread3 = {}, Object(defineProperty["a" /* default */])(_objectSpread3, source.droppableId, current), Object(defineProperty["a" /* default */])(_objectSpread3, destination.droppableId, next), _objectSpread3));

  return {
    quoteMap: result
  };
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/styles/Taskboard.js


function _templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  max-height: 100%;\n  white-space: normal;\n  min-width: 0;\n  word-wrap: break-word;\n  background-clip: border-box;\n  border-radius: 0.25rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  width: 320px;\n  padding-right: 0.5rem;\n  padding-top: 1rem;\n  padding-left: 0.5rem;\n  box-sizing: border-box;\n  display: inline-block;\n  height: 100%;\n  vertical-align: top;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Wrapper = external_styled_components_default.a.div(_templateObject());
var Inner = external_styled_components_default.a.div(_templateObject2());

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

// CONCATENATED MODULE: ./components/shared/taskboard/TaskItem.js




function TaskItem_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  position: relative;\n  width: 100%;\n  .ant-carousel {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n  }\n  .slick-slider {\n    width: 100%;\n    height: 100%;\n  }\n  .slick-slide > div {\n    display: flex;\n  }\n  .image {\n    position: relative;\n    background-size: cover;\n    background-position: top center;\n    width: 100%;\n  }\n  .weakColor & .image {\n    -webkit-filter: invert(100%);\n    filter: invert(100%);\n  }\n  .content {\n    position: relative;\n    z-index: 9;\n  }\n"]);

  TaskItem_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Cover = external_styled_components_default.a.div(TaskItem_templateObject());

var TaskItem_TaskItem = function TaskItem(_ref) {
  var task = _ref.task,
      provided = _ref.provided;
  return external_react_default.a.createElement("div", Object(esm_extends["a" /* default */])({
    className: "shadow-sm bg-white mb-2 rounded",
    css: "\n      position: relative;\n    ",
    ref: provided.innerRef
  }, provided.draggableProps, provided.dragHandleProps), external_react_default.a.createElement("div", {
    css: "\n        position: absolute;\n        top: 16px;\n        left: 0;\n        height: 20px;\n        width: 2px;\n      ",
    className: "bg-".concat(task.color)
  }), external_react_default.a.createElement("div", {
    className: "p-3"
  }, external_react_default.a.createElement("p", {
    className: "mb-1"
  }, task.title), external_react_default.a.createElement("small", {
    className: "text-muted d-block clearfix"
  }, task.description)), task.images && external_react_default.a.createElement(Cover, {
    style: {
      height: 150
    }
  }, external_react_default.a.createElement(external_antd_["Carousel"], {
    className: "overflow-hidden"
  }, task.images.map(function (image, index) {
    return external_react_default.a.createElement("div", {
      key: index
    }, external_react_default.a.createElement("div", {
      key: index,
      className: "image rounded-bottom",
      style: {
        backgroundImage: "url(".concat(image, ")"),
        height: 150
      }
    }));
  }))));
};

/* harmony default export */ var taskboard_TaskItem = (TaskItem_TaskItem);
// CONCATENATED MODULE: ./components/shared/taskboard/TaskList.js










var TaskList_InnerTaskList =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(InnerTaskList, _React$Component);

  function InnerTaskList() {
    Object(classCallCheck["a" /* default */])(this, InnerTaskList);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(InnerTaskList).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(InnerTaskList, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (nextProps.tasks !== this.props.tasks) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.tasks.map(function (task, index) {
        return external_react_default.a.createElement(external_react_beautiful_dnd_["Draggable"], {
          key: "".concat(index, "-").concat(task.title),
          draggableId: "".concat(index, "-").concat(task.title),
          index: index
        }, function (dragProvided, dragSnapshot) {
          return external_react_default.a.createElement(taskboard_TaskItem, {
            key: task.id,
            task: task,
            isDragging: dragSnapshot.isDragging,
            provided: dragProvided
          });
        });
      });
    }
  }]);

  return InnerTaskList;
}(external_react_default.a.Component);

var TaskList_InnerList =
/*#__PURE__*/
function (_React$Component2) {
  Object(inherits["a" /* default */])(InnerList, _React$Component2);

  function InnerList() {
    Object(classCallCheck["a" /* default */])(this, InnerList);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(InnerList).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(InnerList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tasks = _this$props.tasks,
          dropProvided = _this$props.dropProvided;
      return external_react_default.a.createElement("div", {
        ref: dropProvided.innerRef
      }, external_react_default.a.createElement(TaskList_InnerTaskList, {
        tasks: tasks
      }), dropProvided.placeholder);
    }
  }]);

  return InnerList;
}(external_react_default.a.Component);

var TaskList_TaskList =
/*#__PURE__*/
function (_React$Component3) {
  Object(inherits["a" /* default */])(TaskList, _React$Component3);

  function TaskList() {
    Object(classCallCheck["a" /* default */])(this, TaskList);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(TaskList).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(TaskList, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          ignoreContainerClipping = _this$props2.ignoreContainerClipping,
          isDropDisabled = _this$props2.isDropDisabled,
          listId = _this$props2.listId,
          tasks = _this$props2.tasks,
          title = _this$props2.title;
      return external_react_default.a.createElement(external_react_beautiful_dnd_["Droppable"], {
        droppableId: listId,
        ignoreContainerClipping: ignoreContainerClipping,
        isDropDisabled: isDropDisabled
      }, function (dropProvided, dropSnapshot) {
        return external_react_default.a.createElement(TaskList_InnerList, {
          tasks: tasks,
          title: title,
          dropProvided: dropProvided
        });
      });
    }
  }]);

  return TaskList;
}(external_react_default.a.Component);

Object(defineProperty["a" /* default */])(TaskList_TaskList, "defaultProps", {
  listId: 'LIST'
});

/* harmony default export */ var taskboard_TaskList = (TaskList_TaskList);
// CONCATENATED MODULE: ./components/shared/taskboard/Column.js






var Column_Column = function Column(_ref) {
  var title = _ref.title,
      tasks = _ref.tasks,
      index = _ref.index;
  return external_react_default.a.createElement(external_react_beautiful_dnd_["Draggable"], {
    draggableId: title,
    index: index
  }, function (provided) {
    return external_react_default.a.createElement(Wrapper, {
      key: index
    }, external_react_default.a.createElement(Inner, null, external_react_default.a.createElement("h6", {
      className: "mx-2 mt-2 text-capitalize"
    }, title), external_react_default.a.createElement("div", Object(esm_extends["a" /* default */])({
      className: "p-1 scroll-y",
      ref: provided.innerRef
    }, provided.draggableProps), external_react_default.a.createElement(taskboard_TaskList, {
      listId: title,
      tasks: tasks
    }))));
  });
};

/* harmony default export */ var taskboard_Column = (Column_Column);
// EXTERNAL MODULE: external "date-fns/format"
var format_ = __webpack_require__("Skji");
var format_default = /*#__PURE__*/__webpack_require__.n(format_);

// CONCATENATED MODULE: ./demos/mock/taskboard.js


function randomDate(start, end) {
  return format_default()(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())), 'MMM Do');
}

/* harmony default export */ var taskboard = ({
  backlog: [{
    title: 'Responsive bug',
    description: 'Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.',
    color: 'error',
    images: ['/static/images/unsplash/12.jpg', '/static/images/unsplash/9.jpg']
  }, {
    title: 'Travel checklist',
    description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'
  }, {
    title: 'Budget review',
    description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
    color: 'success'
  }],
  todo: [{
    title: 'QA Testing',
    description: 'Etiam porta sem malesuada magna mollis euismod.'
  }, {
    title: 'Layout design',
    description: 'Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    color: 'error'
  }, {
    title: 'Fix navigation menu',
    description: 'Donec sed odio dui.',
    color: 'info',
    images: ['/static/images/unsplash/1.jpg']
  }, {
    title: 'Update bootstrap 4',
    description: 'Aenean lacinia bibendum nulla sed consectetur.'
  }, {
    title: 'Run build tools',
    description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
  }, {
    title: 'List article ideas',
    description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
    color: 'success',
    images: ['/static/images/unsplash/5.jpg', '/static/images/unsplash/6.jpg']
  }, {
    title: 'Reactjs fixes',
    description: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper.'
  }, {
    title: 'Implement SSL',
    description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
    color: 'warning'
  }, {
    title: 'Cleanup code',
    description: 'Sollicitudin',
    color: 'error'
  }],
  'In Process': [{
    title: 'QOS Assessment',
    description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.'
  }, {
    title: 'Schedule new tasks',
    description: 'Sed posuere consectetur est at lobortis.',
    color: 'warning'
  }, {
    title: 'Add dashboard variants',
    description: 'Nulla vitae elit libero, a pharetra augue.'
  }, {
    title: 'Extended color scheme support',
    description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
  }, {
    title: 'Merge unit tests',
    description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
    color: 'info',
    images: ['/static/images/unsplash/16.jpg', '/static/images/unsplash/9.jpg']
  }, {
    title: 'Test final version',
    description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  }],
  'Currently in progress': [{
    title: 'Integrate Angular 4',
    description: 'Nulla vitae elit libero, a pharetra augue.'
  }, {
    title: 'Additional fields',
    description: 'Donec id elit non mi porta gravida at eget metus.'
  }, {
    title: 'Draggable task board',
    description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper.',
    color: 'error'
  }, {
    title: 'Setup CI server',
    description: 'Maecenas faucibus mollis interdum.',
    images: ['/static/images/unsplash/10.jpg', '/static/images/unsplash/11.jpg']
  }, {
    title: 'Assign new tasks',
    description: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
    color: 'success'
  }, {
    title: 'Contact administrator',
    description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
  }, {
    title: 'Commit changes',
    description: 'Aenean lacinia bibendum nulla sed consectetur.',
    images: ['/static/images/unsplash/13.jpg', '/static/images/unsplash/14.jpg']
  }],
  Complete: [{
    title: 'Store new files',
    description: 'Sed posuere consectetur est at lobortis.'
  }, {
    title: 'Build landing page',
    description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.'
  }, {
    title: 'Setup basic layout',
    description: 'Vestibulum id ligula porta felis euismod semper.',
    color: 'info',
    images: ['/static/images/unsplash/15.jpg', '/static/images/unsplash/16.jpg']
  }, {
    title: 'Graphical fixes',
    description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
  }, {
    title: 'Email alerts',
    description: 'Donec sed odio dui.'
  }]
});
// CONCATENATED MODULE: ./components/Taskboard.js










var Taskboard_Taskboard = function Taskboard() {
  var _useState = Object(external_react_["useState"])(taskboard),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      columns = _useState2[0],
      setColumn = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(keys_default()(columns)),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      ordered = _useState4[0],
      setOrder = _useState4[1];

  var onDragEnd = function onDragEnd(result) {
    if (!result.destination) return;
    var source = result.source;
    var destination = result.destination;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    if (result.type === 'COLUMN') {
      var _ordered = taskboard_reorder(_ordered, source.index, destination.index);

      setOrder(_ordered);
      return;
    }

    var data = reorder_reorderQuoteMap({
      quoteMap: columns,
      source: source,
      destination: destination
    });
    setColumn(data.quoteMap);
  };

  return external_react_default.a.createElement(external_react_beautiful_dnd_["DragDropContext"], {
    onDragEnd: onDragEnd
  }, external_react_default.a.createElement(external_react_beautiful_dnd_["Droppable"], {
    droppableId: "taskboard",
    type: "COLUMN"
  }, function (provided) {
    return external_react_default.a.createElement("div", Object(esm_extends["a" /* default */])({
      ref: provided.innerRef
    }, provided.droppableProps, {
      className: "full-workspace scroll-x text-nowrap px-2"
    }), ordered.map(function (key, index) {
      return external_react_default.a.createElement(taskboard_Column, {
        key: key,
        index: index,
        title: key,
        tasks: columns[key]
      });
    }));
  }));
};

/* harmony default export */ var components_Taskboard = (Taskboard_Taskboard);
// CONCATENATED MODULE: ./pages/taskboard.js



var taskboard_TaskboardPage = function TaskboardPage() {
  return external_react_default.a.createElement(components_Taskboard, null);
};

/* harmony default export */ var pages_taskboard = __webpack_exports__["default"] = (taskboard_TaskboardPage);

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

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

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

/***/ "uzjx":
/***/ (function(module, exports) {

module.exports = require("react-beautiful-dnd");

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