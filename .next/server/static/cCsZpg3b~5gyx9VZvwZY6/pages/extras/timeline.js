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
/******/ 	return __webpack_require__(__webpack_require__.s = "2d2e");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "2d2e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f3ID");


/***/ }),

/***/ "Cg2A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y6vh");

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

/***/ "JlRy":
/***/ (function(module, exports) {

module.exports = require("date-fns/distance_in_words_to_now");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "f3ID":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/styles/Timeline.js


function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  position: relative;\n  &::before {\n    position: absolute;\n    top: 6px;\n    width: 4px;\n    height: 100%;\n    content: '';\n    background-color: #e6e6e6;\n    left: 4px;\n    @media (min-width: 576px) {\n      left: 50%;\n      margin-left: -2px;\n    }\n  }\n\n  .icon {\n    position: absolute;\n    top: 6px;\n    left: 0;\n    width: 28px;\n    height: 4px;\n    border-radius: 4px;\n    background-color: #e6e6e6;\n    @media (min-width: 576px) {\n      left: 50%;\n      margin-left: -6px;\n    }\n  }\n  .icon-even {\n    margin-left: -26px;\n    @media (max-width: 576px) {\n      margin-left: 0;\n    }\n  }\n  .icon-odd {\n    margin-left: -2px;\n    @media (max-width: 576px) {\n      margin-left: 0;\n    }\n  }\n  .content {\n    position: relative;\n    margin-left: 1rem;\n    @media (min-width: 576px) {\n      width: 47%;\n      margin-left: 0;\n    }\n    @media (max-width: 576px) {\n      margin-left: 30px;\n    }\n  }\n  .content.right,\n  .body.right {\n    @media (min-width: 576px) {\n      float: right;\n    }\n    @media (max-width: 576px) {\n      float: left;\n    }\n  }\n  .content.left,\n  .content.left {\n    @media (min-width: 576px) {\n      float: left;\n    }\n    @media (max-width: 576px) {\n      float: left;\n    }\n  }\n  .body {\n    float: left;\n    margin: 0;\n    @media (max-width: 576px) {\n      float: left;\n      margin-bottom: 0;\n    }\n  }\n\n  .date {\n    display: inline-block;\n    width: 47%;\n    @media (min-width: 576px) {\n      position: absolute;\n      top: 0;\n    }\n    @media (max-width: 576px) {\n      position: relative;\n      top: 0;\n      width: 100%;\n      left: 30px;\n    }\n  }\n  .date-even {\n    @media (min-width: 576px) {\n      padding-left: 42px;\n      left: 50%;\n    }\n  }\n  .date-odd {\n    @media (min-width: 576px) {\n      padding-right: 42px;\n      text-align: right;\n      right: 50%;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Timeline_Timeline = external_styled_components_default.a.div(_templateObject());
/* harmony default export */ var styles_Timeline = (Timeline_Timeline);
// EXTERNAL MODULE: external "date-fns/distance_in_words_to_now"
var distance_in_words_to_now_ = __webpack_require__("JlRy");
var distance_in_words_to_now_default = /*#__PURE__*/__webpack_require__.n(distance_in_words_to_now_);

// CONCATENATED MODULE: ./components/shared/Timeline.js






var shared_Timeline_Timeline = function Timeline(_ref) {
  var title = _ref.title,
      timeline = _ref.timeline;
  return external_react_default.a.createElement(styles_Timeline, null, title && external_react_default.a.createElement("div", {
    className: "text-center clearfix mb-4",
    css: "\n          position: relative;\n          clear: both;\n        "
  }, external_react_default.a.createElement(external_antd_["Button"], {
    type: "primary"
  }, title)), timeline.map(function (item, index) {
    return external_react_default.a.createElement("section", {
      key: index,
      className: "clearfix my-4",
      css: "\n          position: relative;\n          clear: both;\n        "
    }, external_react_default.a.createElement("span", {
      className: "icon ".concat(index % 2 ? 'icon-odd' : 'icon-even')
    }), external_react_default.a.createElement("small", {
      className: "date text-muted ".concat(index % 2 ? 'date-odd' : 'date-even')
    }, distance_in_words_to_now_default()(item.date)), external_react_default.a.createElement("section", {
      className: "content ".concat(index % 2 ? 'right' : 'left')
    }, external_react_default.a.createElement(external_antd_["Card"], {
      bordered: false,
      className: "body shadow-sm ".concat(index % 2 ? 'left' : 'right')
    }, item.text)));
  }));
};

shared_Timeline_Timeline.prototypes = {
  title: external_prop_types_default.a.string,
  timeline: external_prop_types_default.a.arrayOf(external_prop_types_default.a.shape({
    text: external_prop_types_default.a.string,
    date: external_prop_types_default.a.string
  }))
};
/* harmony default export */ var shared_Timeline = (shared_Timeline_Timeline);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/date/now.js
var now = __webpack_require__("Cg2A");
var now_default = /*#__PURE__*/__webpack_require__.n(now);

// CONCATENATED MODULE: ./demos/mock/timeline.js


var date = now_default()();

/* harmony default export */ var mock_timeline = ([{
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum.',
  date: date
}, {
  text: 'Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  date: new Date(date - 1000 * 60 * 20)
}, {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  date: new Date(date - 1000 * 60 * 43)
}, {
  text: '3 more people joined your campaign.',
  date: new Date(date - 1000 * 60 * 55)
}, {
  text: 'Six new friend requests',
  date: new Date(date - 1000 * 60 * 60)
}, {
  text: 'Curabitur blandit tempus porttitor.',
  date: new Date(date - 1000 * 60 * 60)
}, {
  text: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
  date: new Date(date - 1000 * 60 * 60 * 24)
}, {
  text: 'Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus.',
  date: new Date(date - 1000 * 60 * 60 * 24 * 2)
}, {
  text: 'Vestibulum id ligula porta felis euismod semper.',
  date: new Date(date - 1000 * 60 * 60 * 24 * 31)
}]);
// CONCATENATED MODULE: ./pages/extras/timeline.js




var timeline_TimelinePage = function TimelinePage() {
  return external_react_default.a.createElement(shared_Timeline, {
    title: "Period ending 2017",
    timeline: mock_timeline
  });
};

/* harmony default export */ var extras_timeline = __webpack_exports__["default"] = (timeline_TimelinePage);

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ })

/******/ });