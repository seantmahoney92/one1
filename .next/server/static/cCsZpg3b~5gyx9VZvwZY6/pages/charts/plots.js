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
/******/ 	return __webpack_require__(__webpack_require__.s = "b009");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0IK7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fullMapSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);


function mapSection(section, index) {
  var name = section.name;
  var SectionComponent = section.component;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 12,
    key: "".concat(name, "-index")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "mb-4",
    title: name
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, SectionComponent && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionComponent, null))));
}
function fullMapSection(section, index) {
  var comment = section.comment,
      name = section.name;
  var SectionComponent = section.component;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 24,
    md: 24,
    lg: 24,
    key: "".concat(name, "-index")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "mb-4",
    title: name
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, comment && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "docs-comment"
  }, comment), SectionComponent && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionComponent, null))));
}

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

/***/ "1cN5":
/***/ (function(module, exports) {

module.exports = require("d3-format");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "6lF4":
/***/ (function(module) {

module.exports = [{"eruptions":3.6,"waiting":79},{"eruptions":1.8,"waiting":54},{"eruptions":3.333,"waiting":74},{"eruptions":2.283,"waiting":62},{"eruptions":4.533,"waiting":85},{"eruptions":2.883,"waiting":55},{"eruptions":4.7,"waiting":88},{"eruptions":3.6,"waiting":85},{"eruptions":1.95,"waiting":51},{"eruptions":4.35,"waiting":85},{"eruptions":1.833,"waiting":54},{"eruptions":3.917,"waiting":84},{"eruptions":4.2,"waiting":78},{"eruptions":1.75,"waiting":47},{"eruptions":4.7,"waiting":83},{"eruptions":2.167,"waiting":52},{"eruptions":1.75,"waiting":62},{"eruptions":4.8,"waiting":84},{"eruptions":1.6,"waiting":52},{"eruptions":4.25,"waiting":79},{"eruptions":1.8,"waiting":51},{"eruptions":1.75,"waiting":47},{"eruptions":3.45,"waiting":78},{"eruptions":3.067,"waiting":69},{"eruptions":4.533,"waiting":74},{"eruptions":3.6,"waiting":83},{"eruptions":1.967,"waiting":55},{"eruptions":4.083,"waiting":76},{"eruptions":3.85,"waiting":78},{"eruptions":4.433,"waiting":79},{"eruptions":4.3,"waiting":73},{"eruptions":4.467,"waiting":77},{"eruptions":3.367,"waiting":66},{"eruptions":4.033,"waiting":80},{"eruptions":3.833,"waiting":74},{"eruptions":2.017,"waiting":52},{"eruptions":1.867,"waiting":48},{"eruptions":4.833,"waiting":80},{"eruptions":1.833,"waiting":59},{"eruptions":4.783,"waiting":90},{"eruptions":4.35,"waiting":80},{"eruptions":1.883,"waiting":58},{"eruptions":4.567,"waiting":84},{"eruptions":1.75,"waiting":58},{"eruptions":4.533,"waiting":73},{"eruptions":3.317,"waiting":83},{"eruptions":3.833,"waiting":64},{"eruptions":2.1,"waiting":53},{"eruptions":4.633,"waiting":82},{"eruptions":2,"waiting":59},{"eruptions":4.8,"waiting":75},{"eruptions":4.716,"waiting":90},{"eruptions":1.833,"waiting":54},{"eruptions":4.833,"waiting":80},{"eruptions":1.733,"waiting":54},{"eruptions":4.883,"waiting":83},{"eruptions":3.717,"waiting":71},{"eruptions":1.667,"waiting":64},{"eruptions":4.567,"waiting":77},{"eruptions":4.317,"waiting":81},{"eruptions":2.233,"waiting":59},{"eruptions":4.5,"waiting":84},{"eruptions":1.75,"waiting":48},{"eruptions":4.8,"waiting":82},{"eruptions":1.817,"waiting":60},{"eruptions":4.4,"waiting":92},{"eruptions":4.167,"waiting":78},{"eruptions":4.7,"waiting":78},{"eruptions":2.067,"waiting":65},{"eruptions":4.7,"waiting":73},{"eruptions":4.033,"waiting":82},{"eruptions":1.967,"waiting":56},{"eruptions":4.5,"waiting":79},{"eruptions":4,"waiting":71},{"eruptions":1.983,"waiting":62},{"eruptions":5.067,"waiting":76},{"eruptions":2.017,"waiting":60},{"eruptions":4.567,"waiting":78},{"eruptions":3.883,"waiting":76},{"eruptions":3.6,"waiting":83},{"eruptions":4.133,"waiting":75},{"eruptions":4.333,"waiting":82},{"eruptions":4.1,"waiting":70},{"eruptions":2.633,"waiting":65},{"eruptions":4.067,"waiting":73},{"eruptions":4.933,"waiting":88},{"eruptions":3.95,"waiting":76},{"eruptions":4.517,"waiting":80},{"eruptions":2.167,"waiting":48},{"eruptions":4,"waiting":86},{"eruptions":2.2,"waiting":60},{"eruptions":4.333,"waiting":90},{"eruptions":1.867,"waiting":50},{"eruptions":4.817,"waiting":78},{"eruptions":1.833,"waiting":63},{"eruptions":4.3,"waiting":72},{"eruptions":4.667,"waiting":84},{"eruptions":3.75,"waiting":75},{"eruptions":1.867,"waiting":51},{"eruptions":4.9,"waiting":82},{"eruptions":2.483,"waiting":62},{"eruptions":4.367,"waiting":88},{"eruptions":2.1,"waiting":49},{"eruptions":4.5,"waiting":83},{"eruptions":4.05,"waiting":81},{"eruptions":1.867,"waiting":47},{"eruptions":4.7,"waiting":84},{"eruptions":1.783,"waiting":52},{"eruptions":4.85,"waiting":86},{"eruptions":3.683,"waiting":81},{"eruptions":4.733,"waiting":75},{"eruptions":2.3,"waiting":59},{"eruptions":4.9,"waiting":89},{"eruptions":4.417,"waiting":79},{"eruptions":1.7,"waiting":59},{"eruptions":4.633,"waiting":81},{"eruptions":2.317,"waiting":50},{"eruptions":4.6,"waiting":85},{"eruptions":1.817,"waiting":59},{"eruptions":4.417,"waiting":87},{"eruptions":2.617,"waiting":53},{"eruptions":4.067,"waiting":69},{"eruptions":4.25,"waiting":77},{"eruptions":1.967,"waiting":56},{"eruptions":4.6,"waiting":88},{"eruptions":3.767,"waiting":81},{"eruptions":1.917,"waiting":45},{"eruptions":4.5,"waiting":82},{"eruptions":2.267,"waiting":55},{"eruptions":4.65,"waiting":90},{"eruptions":1.867,"waiting":45},{"eruptions":4.167,"waiting":83},{"eruptions":2.8,"waiting":56},{"eruptions":4.333,"waiting":89},{"eruptions":1.833,"waiting":46},{"eruptions":4.383,"waiting":82},{"eruptions":1.883,"waiting":51},{"eruptions":4.933,"waiting":86},{"eruptions":2.033,"waiting":53},{"eruptions":3.733,"waiting":79},{"eruptions":4.233,"waiting":81},{"eruptions":2.233,"waiting":60},{"eruptions":4.533,"waiting":82},{"eruptions":4.817,"waiting":77},{"eruptions":4.333,"waiting":76},{"eruptions":1.983,"waiting":59},{"eruptions":4.633,"waiting":80},{"eruptions":2.017,"waiting":49},{"eruptions":5.1,"waiting":96},{"eruptions":1.8,"waiting":53},{"eruptions":5.033,"waiting":77},{"eruptions":4,"waiting":77},{"eruptions":2.4,"waiting":65},{"eruptions":4.6,"waiting":81},{"eruptions":3.567,"waiting":71},{"eruptions":4,"waiting":70},{"eruptions":4.5,"waiting":81},{"eruptions":4.083,"waiting":93},{"eruptions":1.8,"waiting":53},{"eruptions":3.967,"waiting":89},{"eruptions":2.2,"waiting":45},{"eruptions":4.15,"waiting":86},{"eruptions":2,"waiting":58},{"eruptions":3.833,"waiting":78},{"eruptions":3.5,"waiting":66},{"eruptions":4.583,"waiting":76},{"eruptions":2.367,"waiting":63},{"eruptions":5,"waiting":88},{"eruptions":1.933,"waiting":52},{"eruptions":4.617,"waiting":93},{"eruptions":1.917,"waiting":49},{"eruptions":2.083,"waiting":57},{"eruptions":4.583,"waiting":77},{"eruptions":3.333,"waiting":68},{"eruptions":4.167,"waiting":81},{"eruptions":4.333,"waiting":81},{"eruptions":4.5,"waiting":73},{"eruptions":2.417,"waiting":50},{"eruptions":4,"waiting":85},{"eruptions":4.167,"waiting":74},{"eruptions":1.883,"waiting":55},{"eruptions":4.583,"waiting":77},{"eruptions":4.25,"waiting":83},{"eruptions":3.767,"waiting":83},{"eruptions":2.033,"waiting":51},{"eruptions":4.433,"waiting":78},{"eruptions":4.083,"waiting":84},{"eruptions":1.833,"waiting":46},{"eruptions":4.417,"waiting":83},{"eruptions":2.183,"waiting":55},{"eruptions":4.8,"waiting":81},{"eruptions":1.833,"waiting":57},{"eruptions":4.8,"waiting":76},{"eruptions":4.1,"waiting":84},{"eruptions":3.966,"waiting":77},{"eruptions":4.233,"waiting":81},{"eruptions":3.5,"waiting":87},{"eruptions":4.366,"waiting":77},{"eruptions":2.25,"waiting":51},{"eruptions":4.667,"waiting":78},{"eruptions":2.1,"waiting":60},{"eruptions":4.35,"waiting":82},{"eruptions":4.133,"waiting":91},{"eruptions":1.867,"waiting":53},{"eruptions":4.6,"waiting":78},{"eruptions":1.783,"waiting":46},{"eruptions":4.367,"waiting":77},{"eruptions":3.85,"waiting":84},{"eruptions":1.933,"waiting":49},{"eruptions":4.5,"waiting":83},{"eruptions":2.383,"waiting":71},{"eruptions":4.7,"waiting":80},{"eruptions":1.867,"waiting":49},{"eruptions":3.833,"waiting":75},{"eruptions":3.417,"waiting":64},{"eruptions":4.233,"waiting":76},{"eruptions":2.4,"waiting":53},{"eruptions":4.8,"waiting":94},{"eruptions":2,"waiting":55},{"eruptions":4.15,"waiting":76},{"eruptions":1.867,"waiting":50},{"eruptions":4.267,"waiting":82},{"eruptions":1.75,"waiting":54},{"eruptions":4.483,"waiting":75},{"eruptions":4,"waiting":78},{"eruptions":4.117,"waiting":79},{"eruptions":4.083,"waiting":78},{"eruptions":4.267,"waiting":78},{"eruptions":3.917,"waiting":70},{"eruptions":4.55,"waiting":79},{"eruptions":4.083,"waiting":70},{"eruptions":2.417,"waiting":54},{"eruptions":4.183,"waiting":86},{"eruptions":2.217,"waiting":50},{"eruptions":4.45,"waiting":90},{"eruptions":1.883,"waiting":54},{"eruptions":1.85,"waiting":54},{"eruptions":4.283,"waiting":77},{"eruptions":3.95,"waiting":79},{"eruptions":2.333,"waiting":64},{"eruptions":4.15,"waiting":75},{"eruptions":2.35,"waiting":47},{"eruptions":4.933,"waiting":86},{"eruptions":2.9,"waiting":63},{"eruptions":4.583,"waiting":85},{"eruptions":3.833,"waiting":82},{"eruptions":2.083,"waiting":57},{"eruptions":4.367,"waiting":82},{"eruptions":2.133,"waiting":67},{"eruptions":4.35,"waiting":74},{"eruptions":2.2,"waiting":54},{"eruptions":4.45,"waiting":83},{"eruptions":3.567,"waiting":73},{"eruptions":4.5,"waiting":73},{"eruptions":4.15,"waiting":88},{"eruptions":3.817,"waiting":80},{"eruptions":3.917,"waiting":71},{"eruptions":4.45,"waiting":83},{"eruptions":2,"waiting":56},{"eruptions":4.283,"waiting":79},{"eruptions":4.767,"waiting":78},{"eruptions":4.533,"waiting":84},{"eruptions":1.85,"waiting":58},{"eruptions":4.25,"waiting":83},{"eruptions":1.983,"waiting":43},{"eruptions":2.25,"waiting":60},{"eruptions":4.75,"waiting":75},{"eruptions":4.117,"waiting":81},{"eruptions":2.15,"waiting":46},{"eruptions":4.417,"waiting":90},{"eruptions":1.817,"waiting":46},{"eruptions":4.467,"waiting":74}];

/***/ }),

/***/ "7hvg":
/***/ (function(module) {

module.exports = {"children":[{"name":"analytics","hex":"#12939A","children":[{"name":"cluster","children":[{"name":"AgglomerativeCluster","hex":"#12939A","value":3938},{"name":"CommunityStructure","hex":"#12939A","value":3812},{"name":"HierarchicalCluster","hex":"#12939A","value":6714},{"name":"MergeEdge","hex":"#12939A","value":743}]},{"name":"graph","children":[{"name":"BetweennessCentrality","hex":"#12939A","value":3534},{"name":"LinkDistance","hex":"#12939A","value":5731},{"name":"MaxFlowMinCut","hex":"#12939A","value":7840},{"name":"ShortestPaths","hex":"#12939A","value":5914},{"name":"SpanningTree","hex":"#12939A","value":3416}]},{"name":"optimization","children":[{"name":"AspectRatioBanker","hex":"#12939A","value":7074}]}]},{"name":"animate","children":[{"name":"Easing","hex":"#12939A","value":17010},{"name":"FunctionSequence","hex":"#12939A","value":5842},{"name":"interpolate","children":[{"name":"ArrayInterpolator","hex":"#12939A","value":1983},{"name":"hexInterpolator","hex":"#12939A","value":2047},{"name":"DateInterpolator","hex":"#12939A","value":1375},{"name":"Interpolator","hex":"#12939A","value":8746},{"name":"MatrixInterpolator","hex":"#12939A","value":2202},{"name":"NumberInterpolator","hex":"#12939A","value":1382},{"name":"ObjectInterpolator","hex":"#12939A","value":1629},{"name":"PointInterpolator","hex":"#12939A","value":1675},{"name":"RectangleInterpolator","hex":"#12939A","value":2042}]},{"name":"ISchedulable","hex":"#12939A","value":1041},{"name":"Parallel","hex":"#12939A","value":5176},{"name":"Pause","hex":"#12939A","value":449},{"name":"Scheduler","hex":"#12939A","value":5593},{"name":"Sequence","hex":"#12939A","value":5534},{"name":"Transition","hex":"#12939A","value":9201},{"name":"Transitioner","hex":"#12939A","value":19975},{"name":"TransitionEvent","hex":"#12939A","value":1116},{"name":"Neonate","hex":"#12939A","value":6006}]},{"name":"data","children":[{"name":"converters","children":[{"name":"Converters","hex":"#12939A","value":721},{"name":"DelimitedTextConverter","hex":"#12939A","value":4294},{"name":"GraphMLConverter","hex":"#12939A","value":9800},{"name":"IDataConverter","hex":"#12939A","value":1314},{"name":"JSONConverter","hex":"#12939A","value":2220}]},{"name":"DataField","hex":"#12939A","value":1759},{"name":"DataSchema","hex":"#12939A","value":2165},{"name":"DataSet","hex":"#12939A","value":586},{"name":"DataSource","hex":"#12939A","value":3331},{"name":"DataTable","hex":"#12939A","value":772},{"name":"DataUtil","hex":"#12939A","value":3322}]},{"name":"display","children":[{"name":"DirtySprite","hex":"#12939A","value":8833},{"name":"LineSprite","hex":"#12939A","value":1732},{"name":"RectSprite","hex":"#12939A","value":3623},{"name":"TextSprite","hex":"#12939A","value":10066}]},{"name":"flex","children":[{"name":"FlareVis","hex":"#12939A","value":4116}]},{"name":"physics","children":[{"name":"DragForce","hex":"#12939A","value":1082},{"name":"GravityForce","hex":"#12939A","value":1336},{"name":"IForce","hex":"#12939A","value":319},{"name":"NBodyForce","hex":"#12939A","value":10498},{"name":"Particle","hex":"#12939A","value":2822},{"name":"Simulation","hex":"#12939A","value":9983},{"name":"Spring","hex":"#12939A","value":2213},{"name":"SpringForce","hex":"#12939A","value":1681}]},{"name":"query","children":[{"name":"AggregateExpression","hex":"#12939A","value":1616},{"name":"And","hex":"#12939A","value":1027},{"name":"Arithmetic","hex":"#12939A","value":3891},{"name":"Average","hex":"#12939A","value":891},{"name":"BinaryExpression","hex":"#12939A","value":2893},{"name":"Comparison","hex":"#12939A","value":5103},{"name":"CompositeExpression","hex":"#12939A","value":3677},{"name":"Count","hex":"#12939A","value":781},{"name":"DateUtil","hex":"#12939A","value":4141},{"name":"Distinct","hex":"#12939A","value":933},{"name":"Expression","hex":"#12939A","value":5130},{"name":"ExpressionIterator","hex":"#12939A","value":3617},{"name":"Fn","hex":"#12939A","value":3240},{"name":"If","hex":"#12939A","value":2732},{"name":"IsA","hex":"#12939A","value":2039},{"name":"Literal","hex":"#12939A","value":1214},{"name":"Match","hex":"#12939A","value":3748},{"name":"Maximum","hex":"#12939A","value":843},{"name":"methods","children":[{"name":"add","hex":"#12939A","value":593},{"name":"and","hex":"#12939A","value":330},{"name":"average","hex":"#12939A","value":287},{"name":"count","hex":"#12939A","value":277},{"name":"distinct","hex":"#12939A","value":292},{"name":"div","hex":"#12939A","value":595},{"name":"eq","hex":"#12939A","value":594},{"name":"fn","hex":"#12939A","value":460},{"name":"gt","hex":"#12939A","value":603},{"name":"gte","hex":"#12939A","value":625},{"name":"iff","hex":"#12939A","value":748},{"name":"isa","hex":"#12939A","value":461},{"name":"lt","hex":"#12939A","value":597},{"name":"lte","hex":"#12939A","value":619},{"name":"max","hex":"#12939A","value":283},{"name":"min","hex":"#12939A","value":283},{"name":"mod","hex":"#12939A","value":591},{"name":"mul","hex":"#12939A","value":603},{"name":"neq","hex":"#12939A","value":599},{"name":"not","hex":"#12939A","value":386},{"name":"or","hex":"#12939A","value":323},{"name":"orderby","hex":"#12939A","value":307},{"name":"range","hex":"#12939A","value":772},{"name":"select","hex":"#12939A","value":296},{"name":"stddev","hex":"#12939A","value":363},{"name":"sub","hex":"#12939A","value":600},{"name":"sum","hex":"#12939A","value":280},{"name":"update","hex":"#12939A","value":307},{"name":"variance","hex":"#12939A","value":335},{"name":"where","hex":"#12939A","value":299},{"name":"xor","hex":"#12939A","value":354},{"name":"_","hex":"#12939A","value":264}]},{"name":"Minimum","hex":"#12939A","value":843},{"name":"Not","hex":"#12939A","value":1554},{"name":"Or","hex":"#12939A","value":970},{"name":"Query","hex":"#12939A","value":13896},{"name":"Range","hex":"#12939A","value":1594},{"name":"StringUtil","hex":"#12939A","value":4130},{"name":"Sum","hex":"#12939A","value":791},{"name":"Variable","hex":"#12939A","value":1124},{"name":"Variance","hex":"#12939A","value":1876},{"name":"Xor","hex":"#12939A","value":1101}]},{"name":"scale","children":[{"name":"IScaleMap","hex":"#FF9833","value":2105},{"name":"LinearScale","hex":"#FF9833","value":1316},{"name":"LogScale","hex":"#FF9833","value":3151},{"name":"OrdinalScale","hex":"#FF9833","value":3770},{"name":"QuantileScale","hex":"#1A3177","value":2435},{"name":"QuantitativeScale","hex":"#FF9833","value":4839},{"name":"RootScale","hex":"#FF9833","value":1756},{"name":"Scale","hex":"#FF9833","value":4268},{"name":"ScaleType","hex":"#FF9833","value":1821},{"name":"TimeScale","hex":"#FF9833","value":5833}]},{"name":"util","children":[{"name":"Arrays","hex":"#12939A","value":8258},{"name":"hexs","hex":"#12939A","value":10001},{"name":"Dates","hex":"#12939A","value":8217},{"name":"Displays","hex":"#12939A","value":12555},{"name":"Filter","hex":"#12939A","value":2324},{"name":"Geometry","hex":"#12939A","value":10993},{"name":"heap","children":[{"name":"FibonacciHeap","hex":"#12939A","value":9354},{"name":"HeapNode","hex":"#12939A","value":1233}]},{"name":"IEvaluable","hex":"#12939A","value":335},{"name":"IPredicate","hex":"#12939A","value":383},{"name":"IValueProxy","hex":"#12939A","value":874},{"name":"math","children":[{"name":"DenseMatrix","hex":"#12939A","value":3165},{"name":"IMatrix","hex":"#12939A","value":2815},{"name":"SparseMatrix","hex":"#12939A","value":3366}]},{"name":"Maths","hex":"#12939A","value":17705},{"name":"Orientation","hex":"#12939A","value":1486},{"name":"palette","children":[{"name":"hexPalette","hex":"#12939A","value":6367},{"name":"Palette","hex":"#12939A","value":1229},{"name":"ShapePalette","hex":"#12939A","value":2059},{"name":"valuePalette","hex":"#12939A","value":2291}]},{"name":"Property","hex":"#12939A","value":5559},{"name":"Shapes","hex":"#12939A","value":19118},{"name":"Sort","hex":"#12939A","value":6887},{"name":"Stats","hex":"#12939A","value":6557},{"name":"Strings","hex":"#12939A","value":22026}]},{"name":"vis","children":[{"name":"axis","children":[{"name":"Axes","hex":"#12939A","value":1302},{"name":"Axis","hex":"#12939A","value":24593},{"name":"AxisGridLine","hex":"#12939A","value":652},{"name":"AxisLabel","hex":"#12939A","value":636},{"name":"CartesianAxes","hex":"#12939A","value":6703}]},{"name":"controls","children":[{"name":"AnchorControl","hex":"#12939A","value":2138},{"name":"ClickControl","hex":"#12939A","value":3824},{"name":"Control","hex":"#12939A","value":1353},{"name":"ControlList","hex":"#12939A","value":4665},{"name":"DragControl","hex":"#12939A","value":2649},{"name":"ExpandControl","hex":"#12939A","value":2832},{"name":"HoverControl","hex":"#12939A","value":4896},{"name":"IControl","hex":"#12939A","value":763},{"name":"PanZoomControl","hex":"#12939A","value":5222},{"name":"SelectionControl","hex":"#12939A","value":7862},{"name":"TooltipControl","hex":"#12939A","value":8435}]},{"name":"data","children":[{"name":"Data","hex":"#12939A","value":20544},{"name":"DataList","hex":"#12939A","value":19788},{"name":"DataSprite","hex":"#12939A","value":10349},{"name":"EdgeSprite","hex":"#12939A","value":3301},{"name":"NodeSprite","hex":"#12939A","value":19382},{"name":"render","children":[{"name":"ArrowType","hex":"#12939A","value":698},{"name":"EdgeRenderer","hex":"#12939A","value":5569},{"name":"IRenderer","hex":"#12939A","value":353},{"name":"ShapeRenderer","hex":"#12939A","value":2247}]},{"name":"ScaleBinding","hex":"#12939A","value":11275},{"name":"Tree","hex":"#12939A","value":7147},{"name":"TreeBuilder","hex":"#12939A","value":9930}]},{"name":"events","children":[{"name":"DataEvent","hex":"#12939A","value":2313},{"name":"SelectionEvent","hex":"#12939A","value":1880},{"name":"TooltipEvent","hex":"#12939A","value":1701},{"name":"VisualizationEvent","hex":"#12939A","value":1117}]},{"name":"legend","children":[{"name":"Legend","hex":"#12939A","value":20859},{"name":"LegendItem","hex":"#12939A","value":4614},{"name":"LegendRange","hex":"#12939A","value":10530}]},{"name":"operator","children":[{"name":"distortion","children":[{"name":"BifocalDistortion","hex":"#12939A","value":4461},{"name":"Distortion","hex":"#12939A","value":6314},{"name":"FisheyeDistortion","hex":"#12939A","value":3444}]},{"name":"encoder","children":[{"name":"hexEncoder","hex":"#12939A","value":3179},{"name":"Encoder","hex":"#12939A","value":4060},{"name":"PropertyEncoder","hex":"#12939A","value":4138},{"name":"ShapeEncoder","hex":"#12939A","value":1690},{"name":"valueEncoder","hex":"#12939A","value":1830}]},{"name":"filter","children":[{"name":"FisheyeTreeFilter","hex":"#12939A","value":5219},{"name":"GraphDistanceFilter","hex":"#12939A","value":3165},{"name":"VisibilityFilter","hex":"#12939A","value":3509}]},{"name":"IOperator","hex":"#12939A","value":1286},{"name":"label","children":[{"name":"Labeler","hex":"#12939A","value":9956},{"name":"RadialLabeler","hex":"#12939A","value":3899},{"name":"StackedAreaLabeler","hex":"#12939A","value":3202}]},{"name":"layout","children":[{"name":"AxisLayout","hex":"#12939A","value":6725},{"name":"BundledEdgeRouter","hex":"#12939A","value":3727},{"name":"CircleLayout","hex":"#12939A","value":9317},{"name":"CirclePackingLayout","hex":"#12939A","value":12003},{"name":"DendrogramLayout","hex":"#12939A","value":4853},{"name":"ForceDirectedLayout","hex":"#12939A","value":8411},{"name":"IcicleTreeLayout","hex":"#12939A","value":4864},{"name":"IndentedTreeLayout","hex":"#12939A","value":3174},{"name":"Layout","hex":"#12939A","value":7881},{"name":"NodeLinkTreeLayout","hex":"#12939A","value":12870},{"name":"PieLayout","hex":"#12939A","value":2728},{"name":"RadialTreeLayout","hex":"#12939A","value":12348},{"name":"RandomLayout","hex":"#12939A","value":870},{"name":"StackedAreaLayout","hex":"#12939A","value":9121},{"name":"TreeMapLayout","hex":"#12939A","value":9191}]},{"name":"Operator","hex":"#12939A","value":2490},{"name":"OperatorList","hex":"#12939A","value":5248},{"name":"OperatorSequence","hex":"#12939A","value":4190},{"name":"OperatorSwitch","hex":"#12939A","value":2581},{"name":"SortOperator","hex":"#12939A","value":2023}]},{"name":"Visualization","hex":"#12939A","value":16540}]}]};

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

/***/ "Bb8b":
/***/ (function(module, exports) {

module.exports = require("react-vis/dist/theme");

/***/ }),

/***/ "BgRP":
/***/ (function(module, exports) {

module.exports = require("react-vis/dist/radial-chart");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Db1m":
/***/ (function(module, exports) {

module.exports = require("react-vis/dist/legends/continuous-size-legend");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "H1bH":
/***/ (function(module, exports) {

module.exports = require("react-vis/dist/legends/discrete-color-legend");

/***/ }),

/***/ "IqNg":
/***/ (function(module, exports) {

module.exports = require("d3-scale");

/***/ }),

/***/ "JnV7":
/***/ (function(module, exports) {

module.exports = require("react-vis/dist/sunburst");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KK4J":
/***/ (function(module, exports) {

module.exports = require("react-no-ssr");

/***/ }),

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "LRpp":
/***/ (function(module, exports) {

module.exports = require("react-vis/dist/treemap");

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

/***/ "NC1Z":
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "S11y":
/***/ (function(module) {

module.exports = [{"name":"AMC Ambassador Brougham","economy (mpg)":"13","cylinders":"8","displacement (cc)":"360","power (hp)":"175","weight (lb)":"3821","0-60 mph (s)":"11","year":"73"},{"name":"AMC Ambassador DPL","economy (mpg)":"15","cylinders":"8","displacement (cc)":"390","power (hp)":"190","weight (lb)":"3850","0-60 mph (s)":"8.5","year":"70"},{"name":"AMC Ambassador SST","economy (mpg)":"17","cylinders":"8","displacement (cc)":"304","power (hp)":"150","weight (lb)":"3672","0-60 mph (s)":"11.5","year":"72"},{"name":"AMC Concord DL 6","economy (mpg)":"20.2","cylinders":"6","displacement (cc)":"232","power (hp)":"90","weight (lb)":"3265","0-60 mph (s)":"18.2","year":"79"},{"name":"AMC Concord DL","economy (mpg)":"18.1","cylinders":"6","displacement (cc)":"258","power (hp)":"120","weight (lb)":"3410","0-60 mph (s)":"15.1","year":"78"},{"name":"AMC Concord DL","economy (mpg)":"23","cylinders":"4","displacement (cc)":"151","power (hp)":"","weight (lb)":"3035","0-60 mph (s)":"20.5","year":"82"},{"name":"AMC Concord","economy (mpg)":"19.4","cylinders":"6","displacement (cc)":"232","power (hp)":"90","weight (lb)":"3210","0-60 mph (s)":"17.2","year":"78"},{"name":"AMC Concord","economy (mpg)":"24.3","cylinders":"4","displacement (cc)":"151","power (hp)":"90","weight (lb)":"3003","0-60 mph (s)":"20.1","year":"80"},{"name":"AMC Gremlin","economy (mpg)":"18","cylinders":"6","displacement (cc)":"232","power (hp)":"100","weight (lb)":"2789","0-60 mph (s)":"15","year":"73"},{"name":"AMC Gremlin","economy (mpg)":"19","cylinders":"6","displacement (cc)":"232","power (hp)":"100","weight (lb)":"2634","0-60 mph (s)":"13","year":"71"},{"name":"AMC Gremlin","economy (mpg)":"20","cylinders":"6","displacement (cc)":"232","power (hp)":"100","weight (lb)":"2914","0-60 mph (s)":"16","year":"75"},{"name":"AMC Gremlin","economy (mpg)":"21","cylinders":"6","displacement (cc)":"199","power (hp)":"90","weight (lb)":"2648","0-60 mph (s)":"15","year":"70"},{"name":"AMC Hornet Sportabout (Wagon)","economy (mpg)":"18","cylinders":"6","displacement (cc)":"258","power (hp)":"110","weight (lb)":"2962","0-60 mph (s)":"13.5","year":"71"},{"name":"AMC Hornet","economy (mpg)":"18","cylinders":"6","displacement (cc)":"199","power (hp)":"97","weight (lb)":"2774","0-60 mph (s)":"15.5","year":"70"},{"name":"AMC Hornet","economy (mpg)":"18","cylinders":"6","displacement (cc)":"232","power (hp)":"100","weight (lb)":"2945","0-60 mph (s)":"16","year":"73"},{"name":"AMC Hornet","economy (mpg)":"19","cylinders":"6","displacement (cc)":"232","power (hp)":"100","weight (lb)":"2901","0-60 mph (s)":"16","year":"74"},{"name":"AMC Hornet","economy (mpg)":"22.5","cylinders":"6","displacement (cc)":"232","power (hp)":"90","weight (lb)":"3085","0-60 mph (s)":"17.6","year":"76"},{"name":"AMC Matador (Wagon)","economy (mpg)":"14","cylinders":"8","displacement (cc)":"304","power (hp)":"150","weight (lb)":"4257","0-60 mph (s)":"15.5","year":"74"},{"name":"AMC Matador (Wagon)","economy (mpg)":"15","cylinders":"8","displacement (cc)":"304","power (hp)":"150","weight (lb)":"3892","0-60 mph (s)":"12.5","year":"72"},{"name":"AMC Matador","economy (mpg)":"14","cylinders":"8","displacement (cc)":"304","power (hp)":"150","weight (lb)":"3672","0-60 mph (s)":"11.5","year":"73"},{"name":"AMC Matador","economy (mpg)":"15","cylinders":"6","displacement (cc)":"258","power (hp)":"110","weight (lb)":"3730","0-60 mph (s)":"19","year":"75"},{"name":"AMC Matador","economy (mpg)":"15.5","cylinders":"8","displacement (cc)":"304","power (hp)":"120","weight (lb)":"3962","0-60 mph (s)":"13.9","year":"76"},{"name":"AMC Matador","economy (mpg)":"16","cylinders":"6","displacement (cc)":"258","power (hp)":"110","weight (lb)":"3632","0-60 mph (s)":"18","year":"74"},{"name":"AMC Matador","economy (mpg)":"18","cylinders":"6","displacement (cc)":"232","power (hp)":"100","weight (lb)":"3288","0-60 mph (s)":"15.5","year":"71"},{"name":"AMC Pacer D/L","economy (mpg)":"17.5","cylinders":"6","displacement (cc)":"258","power (hp)":"95","weight (lb)":"3193","0-60 mph (s)":"17.8","year":"76"},{"name":"AMC Pacer","economy (mpg)":"19","cylinders":"6","displacement (cc)":"232","power (hp)":"90","weight (lb)":"3211","0-60 mph (s)":"17","year":"75"},{"name":"AMC Rebel SST (Wagon)","economy (mpg)":"","cylinders":"8","displacement (cc)":"360","power (hp)":"175","weight (lb)":"3850","0-60 mph (s)":"11","year":"70"},{"name":"AMC Rebel SST","economy (mpg)":"16","cylinders":"8","displacement (cc)":"304","power (hp)":"150","weight (lb)":"3433","0-60 mph (s)":"12","year":"70"},{"name":"AMC Spirit DL","economy (mpg)":"27.4","cylinders":"4","displacement (cc)":"121","power (hp)":"80","weight (lb)":"2670","0-60 mph (s)":"15","year":"79"},{"name":"Audi 100 LS","economy (mpg)":"20","cylinders":"4","displacement (cc)":"114","power (hp)":"91","weight (lb)":"2582","0-60 mph (s)":"14","year":"73"},{"name":"Audi 100 LS","economy (mpg)":"23","cylinders":"4","displacement (cc)":"115","power (hp)":"95","weight (lb)":"2694","0-60 mph (s)":"15","year":"75"},{"name":"Audi 100 LS","economy (mpg)":"24","cylinders":"4","displacement (cc)":"107","power (hp)":"90","weight (lb)":"2430","0-60 mph (s)":"14.5","year":"70"},{"name":"Audi 4000","economy (mpg)":"34.3","cylinders":"4","displacement (cc)":"97","power (hp)":"78","weight (lb)":"2188","0-60 mph (s)":"15.8","year":"80"},{"name":"Audi 5000","economy (mpg)":"20.3","cylinders":"5","displacement (cc)":"131","power (hp)":"103","weight (lb)":"2830","0-60 mph (s)":"15.9","year":"78"},{"name":"Audi 5000S (Diesel)","economy (mpg)":"36.4","cylinders":"5","displacement (cc)":"121","power (hp)":"67","weight (lb)":"2950","0-60 mph (s)":"19.9","year":"80"},{"name":"Audi Fox","economy (mpg)":"29","cylinders":"4","displacement (cc)":"98","power (hp)":"83","weight (lb)":"2219","0-60 mph (s)":"16.5","year":"74"},{"name":"BMW 2002","economy (mpg)":"26","cylinders":"4","displacement (cc)":"121","power (hp)":"113","weight (lb)":"2234","0-60 mph (s)":"12.5","year":"70"},{"name":"BMW 320i","economy (mpg)":"21.5","cylinders":"4","displacement (cc)":"121","power (hp)":"110","weight (lb)":"2600","0-60 mph (s)":"12.8","year":"77"},{"name":"Buick Century 350","economy (mpg)":"13","cylinders":"8","displacement (cc)":"350","power (hp)":"175","weight (lb)":"4100","0-60 mph (s)":"13","year":"73"},{"name":"Buick Century Limited","economy (mpg)":"25","cylinders":"6","displacement (cc)":"181","power (hp)":"110","weight (lb)":"2945","0-60 mph (s)":"16.4","year":"82"},{"name":"Buick Century Luxus (Wagon)","economy (mpg)":"13","cylinders":"8","displacement (cc)":"350","power (hp)":"150","weight (lb)":"4699","0-60 mph (s)":"14.5","year":"74"},{"name":"Buick Century Special","economy (mpg)":"20.6","cylinders":"6","displacement (cc)":"231","power (hp)":"105","weight (lb)":"3380","0-60 mph (s)":"15.8","year":"78"},{"name":"Buick Century","economy (mpg)":"17","cylinders":"6","displacement (cc)":"231","power (hp)":"110","weight (lb)":"3907","0-60 mph (s)":"21","year":"75"},{"name":"Buick Century","economy (mpg)":"22.4","cylinders":"6","displacement (cc)":"231","power (hp)":"110","weight (lb)":"3415","0-60 mph (s)":"15.8","year":"81"},{"name":"Buick Electra 225 Custom","economy (mpg)":"12","cylinders":"8","displacement (cc)":"455","power (hp)":"225","weight (lb)":"4951","0-60 mph (s)":"11","year":"73"},{"name":"Buick Estate Wagon (Wagon)","economy (mpg)":"14","cylinders":"8","displacement (cc)":"455","power (hp)":"225","weight (lb)":"3086","0-60 mph (s)":"10","year":"70"},{"name":"Buick Estate Wagon (Wagon)","economy (mpg)":"16.9","cylinders":"8","displacement (cc)":"350","power (hp)":"155","weight (lb)":"4360","0-60 mph (s)":"14.9","year":"79"},{"name":"Buick Lesabre Custom","economy (mpg)":"13","cylinders":"8","displacement (cc)":"350","power (hp)":"155","weight (lb)":"4502","0-60 mph (s)":"13.5","year":"72"},{"name":"Buick Opel Isuzu Deluxe","economy (mpg)":"30","cylinders":"4","displacement (cc)":"111","power (hp)":"80","weight (lb)":"2155","0-60 mph (s)":"14.8","year":"77"},{"name":"Buick Regal Sport Coupe (Turbo)","economy (mpg)":"17.7","cylinders":"6","displacement (cc)":"231","power (hp)":"165","weight (lb)":"3445","0-60 mph (s)":"13.4","year":"78"},{"name":"Buick Skyhawk","economy (mpg)":"21","cylinders":"6","displacement (cc)":"231","power (hp)":"110","weight (lb)":"3039","0-60 mph (s)":"15","year":"75"},{"name":"Buick Skylark 320","economy (mpg)":"15","cylinders":"8","displacement (cc)":"350","power (hp)":"165","weight (lb)":"3693","0-60 mph (s)":"11.5","year":"70"},{"name":"Buick Skylark Limited","economy (mpg)":"28.4","cylinders":"4","displacement (cc)":"151","power (hp)":"90","weight (lb)":"2670","0-60 mph (s)":"16","year":"79"},{"name":"Buick Skylark","economy (mpg)":"20.5","cylinders":"6","displacement (cc)":"231","power (hp)":"105","weight (lb)":"3425","0-60 mph (s)":"16.9","year":"77"},{"name":"Buick Skylark","economy (mpg)":"26.6","cylinders":"4","displacement (cc)":"151","power (hp)":"84","weight (lb)":"2635","0-60 mph (s)":"16.4","year":"81"},{"name":"Cadillac Eldorado","economy (mpg)":"23","cylinders":"8","displacement (cc)":"350","power (hp)":"125","weight (lb)":"3900","0-60 mph (s)":"17.4","year":"79"},{"name":"Cadillac Seville","economy (mpg)":"16.5","cylinders":"8","displacement (cc)":"350","power (hp)":"180","weight (lb)":"4380","0-60 mph (s)":"12.1","year":"76"},{"name":"Chevroelt Chevelle Malibu","economy (mpg)":"16","cylinders":"6","displacement (cc)":"250","power (hp)":"105","weight (lb)":"3897","0-60 mph (s)":"18.5","year":"75"},{"name":"Chevrolet Bel Air","economy (mpg)":"15","cylinders":"8","displacement (cc)":"350","power (hp)":"145","weight (lb)":"4440","0-60 mph (s)":"14","year":"75"},{"name":"Chevrolet Camaro","economy (mpg)":"27","cylinders":"4","displacement (cc)":"151","power (hp)":"90","weight (lb)":"2950","0-60 mph (s)":"17.3","year":"82"},{"name":"Chevrolet Caprice Classic","economy (mpg)":"13","cylinders":"8","displacement (cc)":"400","power (hp)":"150","weight (lb)":"4464","0-60 mph (s)":"12","year":"73"},{"name":"Chevrolet Caprice Classic","economy (mpg)":"17","cylinders":"8","displacement (cc)":"305","power (hp)":"130","weight (lb)":"3840","0-60 mph (s)":"15.4","year":"79"},{"name":"Chevrolet Caprice Classic","economy (mpg)":"17.5","cylinders":"8","displacement (cc)":"305","power (hp)":"145","weight (lb)":"3880","0-60 mph (s)":"12.5","year":"77"},{"name":"Chevrolet Cavalier 2-Door","economy (mpg)":"34","cylinders":"4","displacement (cc)":"112","power (hp)":"88","weight (lb)":"2395","0-60 mph (s)":"18","year":"82"},{"name":"Chevrolet Cavalier Wagon","economy (mpg)":"27","cylinders":"4","displacement (cc)":"112","power (hp)":"88","weight (lb)":"2640","0-60 mph (s)":"18.6","year":"82"},{"name":"Chevrolet Cavalier","economy (mpg)":"28","cylinders":"4","displacement (cc)":"112","power (hp)":"88","weight (lb)":"2605","0-60 mph (s)":"19.6","year":"82"},{"name":"Chevrolet Chevelle Concours (Wagon)","economy (mpg)":"","cylinders":"8","displacement (cc)":"350","power (hp)":"165","weight (lb)":"4142","0-60 mph (s)":"11.5","year":"70"},{"name":"Chevrolet Chevelle Concours (Wagon)","economy (mpg)":"13","cylinders":"8","displacement (cc)":"307","power (hp)":"130","weight (lb)":"4098","0-60 mph (s)":"14","year":"72"},{"name":"Chevrolet Chevelle Malibu Classic","economy (mpg)":"16","cylinders":"6","displacement (cc)":"250","power (hp)":"100","weight (lb)":"3781","0-60 mph (s)":"17","year":"74"},{"name":"Chevrolet Chevelle Malibu Classic","economy (mpg)":"17.5","cylinders":"8","displacement (cc)":"305","power (hp)":"140","weight (lb)":"4215","0-60 mph (s)":"13","year":"76"},{"name":"Chevrolet Chevelle Malibu","economy (mpg)":"17","cylinders":"6","displacement (cc)":"250","power (hp)":"100","weight (lb)":"3329","0-60 mph (s)":"15.5","year":"71"},{"name":"Chevrolet Chevelle Malibu","economy (mpg)":"18","cylinders":"8","displacement (cc)":"307","power (hp)":"130","weight (lb)":"3504","0-60 mph (s)":"12","year":"70"},{"name":"Chevrolet Chevette","economy (mpg)":"29","cylinders":"4","displacement (cc)":"85","power (hp)":"52","weight (lb)":"2035","0-60 mph (s)":"22.2","year":"76"},{"name":"Chevrolet Chevette","economy (mpg)":"30","cylinders":"4","displacement (cc)":"98","power (hp)":"68","weight (lb)":"2155","0-60 mph (s)":"16.5","year":"78"},{"name":"Chevrolet Chevette","economy (mpg)":"30.5","cylinders":"4","displacement (cc)":"98","power (hp)":"63","weight (lb)":"2051","0-60 mph (s)":"17","year":"77"},{"name":"Chevrolet Chevette","economy (mpg)":"32.1","cylinders":"4","displacement (cc)":"98","power (hp)":"70","weight (lb)":"2120","0-60 mph (s)":"15.5","year":"80"},{"name":"Chevrolet Citation","economy (mpg)":"23.5","cylinders":"6","displacement (cc)":"173","power (hp)":"110","weight (lb)":"2725","0-60 mph (s)":"12.6","year":"81"},{"name":"Chevrolet Citation","economy (mpg)":"28","cylinders":"4","displacement (cc)":"151","power (hp)":"90","weight (lb)":"2678","0-60 mph (s)":"16.5","year":"80"},{"name":"Chevrolet Citation","economy (mpg)":"28.8","cylinders":"6","displacement (cc)":"173","power (hp)":"115","weight (lb)":"2595","0-60 mph (s)":"11.3","year":"79"},{"name":"Chevrolet Concours","economy (mpg)":"17.5","cylinders":"6","displacement (cc)":"250","power (hp)":"110","weight (lb)":"3520","0-60 mph (s)":"16.4","year":"77"},{"name":"Chevrolet Impala","economy (mpg)":"11","cylinders":"8","displacement (cc)":"400","power (hp)":"150","weight (lb)":"4997","0-60 mph (s)":"14","year":"73"},{"name":"Chevrolet Impala","economy (mpg)":"13","cylinders":"8","displacement (cc)":"350","power (hp)":"165","weight (lb)":"4274","0-60 mph (s)":"12","year":"72"},{"name":"Chevrolet Impala","economy (mpg)":"14","cylinders":"8","displacement (cc)":"350","power (hp)":"165","weight (lb)":"4209","0-60 mph (s)":"12","year":"71"},{"name":"Chevrolet Impala","economy (mpg)":"14","cylinders":"8","displacement (cc)":"454","power (hp)":"220","weight (lb)":"4354","0-60 mph (s)":"9","year":"70"},{"name":"Chevrolet Malibu Classic (Wagon)","economy (mpg)":"19.2","cylinders":"8","displacement (cc)":"267","power (hp)":"125","weight (lb)":"3605","0-60 mph (s)":"15","year":"79"},{"name":"Chevrolet Malibu","economy (mpg)":"13","cylinders":"8","displacement (cc)":"350","power (hp)":"145","weight (lb)":"3988","0-60 mph (s)":"13","year":"73"},{"name":"Chevrolet Malibu","economy (mpg)":"20.5","cylinders":"6","displacement (cc)":"200","power (hp)":"95","weight (lb)":"3155","0-60 mph (s)":"18.2","year":"78"},{"name":"Chevrolet Monte Carlo Landau","economy (mpg)":"15.5","cylinders":"8","displacement (cc)":"350","power (hp)":"170","weight (lb)":"4165","0-60 mph (s)":"11.4","year":"77"},{"name":"Chevrolet Monte Carlo Landau","economy (mpg)":"19.2","cylinders":"8","displacement (cc)":"305","power (hp)":"145","weight (lb)":"3425","0-60 mph (s)":"13.2","year":"78"},{"name":"Chevrolet Monte Carlo S","economy (mpg)":"15","cylinders":"8","displacement (cc)":"350","power (hp)":"145","weight (lb)":"4082","0-60 mph (s)":"13","year":"73"},{"name":"Chevrolet Monte Carlo","economy (mpg)":"15","cylinders":"8","displacement (cc)":"400","power (hp)":"150","weight (lb)":"3761","0-60 mph (s)":"9.5","year":"70"},{"name":"Chevrolet Monza 2+2","economy (mpg)":"20","cylinders":"8","displacement (cc)":"262","power (hp)":"110","weight (lb)":"3221","0-60 mph (s)":"13.5","year":"75"},{"name":"Chevrolet Nova Custom","economy (mpg)":"16","cylinders":"6","displacement (cc)":"250","power (hp)":"100","weight (lb)":"3278","0-60 mph (s)":"18","year":"73"},{"name":"Chevrolet Nova","economy (mpg)":"15","cylinders":"6","displacement (cc)":"250","power (hp)":"100","weight (lb)":"3336","0-60 mph (s)":"17","year":"74"},{"name":"Chevrolet Nova","economy (mpg)":"18","cylinders":"6","displacement (cc)":"250","power (hp)":"105","weight (lb)":"3459","0-60 mph (s)":"16","year":"75"},{"name":"Chevrolet Nova","economy (mpg)":"22","cylinders":"6","displacement (cc)":"250","power (hp)":"105","weight (lb)":"3353","0-60 mph (s)":"14.5","year":"76"},{"name":"Chevrolet Vega (Wagon)","economy (mpg)":"22","cylinders":"4","displacement (cc)":"140","power (hp)":"72","weight (lb)":"2408","0-60 mph (s)":"19","year":"71"},{"name":"Chevrolet Vega 2300","economy (mpg)":"28","cylinders":"4","displacement (cc)":"140","power (hp)":"90","weight (lb)":"2264","0-60 mph (s)":"15.5","year":"71"},{"name":"Chevrolet Vega","economy (mpg)":"20","cylinders":"4","displacement (cc)":"140","power (hp)":"90","weight (lb)":"2408","0-60 mph (s)":"19.5","year":"72"},{"name":"Chevrolet Vega","economy (mpg)":"21","cylinders":"4","displacement (cc)":"140","power (hp)":"72","weight (lb)":"2401","0-60 mph (s)":"19.5","year":"73"},{"name":"Chevrolet Vega","economy (mpg)":"25","cylinders":"4","displacement (cc)":"140","power (hp)":"75","weight (lb)":"2542","0-60 mph (s)":"17","year":"74"},{"name":"Chevrolet Woody","economy (mpg)":"24.5","cylinders":"4","displacement (cc)":"98","power (hp)":"60","weight (lb)":"2164","0-60 mph (s)":"22.1","year":"76"},{"name":"Chevy C10","economy (mpg)":"13","cylinders":"8","displacement (cc)":"350","power (hp)":"145","weight (lb)":"4055","0-60 mph (s)":"12","year":"76"},{"name":"Chevy C20","economy (mpg)":"10","cylinders":"8","displacement (cc)":"307","power (hp)":"200","weight (lb)":"4376","0-60 mph (s)":"15","year":"70"},{"name":"Chevy S-10","economy (mpg)":"31","cylinders":"4","displacement (cc)":"119","power (hp)":"82","weight (lb)":"2720","0-60 mph (s)":"19.4","year":"82"},{"name":"Chrysler Cordoba","economy (mpg)":"15.5","cylinders":"8","displacement (cc)":"400","power (hp)":"190","weight (lb)":"4325","0-60 mph (s)":"12.2","year":"77"},{"name":"Chrysler Lebaron Medallion","economy (mpg)":"26","cylinders":"4","displacement (cc)":"156","power (hp)":"92","weight (lb)":"2585","0-60 mph (s)":"14.5","year":"82"},{"name":"Chrysler Lebaron Salon","economy (mpg)":"17.6","cylinders":"6","displacement (cc)":"225","power (hp)":"85","weight (lb)":"3465","0-60 mph (s)":"16.6","year":"81"},{"name":"Chrysler Lebaron Town & Country (Wagon)","economy (mpg)":"18.5","cylinders":"8","displacement (cc)":"360","power (hp)":"150","weight (lb)":"3940","0-60 mph (s)":"13","year":"79"},{"name":"Chrysler New Yorker Brougham","economy (mpg)":"13","cylinders":"8","displacement (cc)":"440","power (hp)":"215","weight (lb)":"4735","0-60 mph (s)":"11","year":"73"},{"name":"Chrysler Newport Royal","economy (mpg)":"13","cylinders":"8","displacement (cc)":"400","power (hp)":"190","weight (lb)":"4422","0-60 mph (s)":"12.5","year":"72"},{"name":"Citroen DS-21 Pallas","economy (mpg)":"","cylinders":"4","displacement (cc)":"133","power (hp)":"115","weight (lb)":"3090","0-60 mph (s)":"17.5","year":"70"},{"name":"Datsun 1200","economy (mpg)":"35","cylinders":"4","displacement (cc)":"72","power (hp)":"69","weight (lb)":"1613","0-60 mph (s)":"18","year":"71"},{"name":"Datsun 200SX","economy (mpg)":"23.9","cylinders":"4","displacement (cc)":"119","power (hp)":"97","weight (lb)":"2405","0-60 mph (s)":"14.9","year":"78"},{"name":"Datsun 200SX","economy (mpg)":"32.9","cylinders":"4","displacement (cc)":"119","power (hp)":"100","weight (lb)":"2615","0-60 mph (s)":"14.8","year":"81"},{"name":"Datsun 210","economy (mpg)":"31.8","cylinders":"4","displacement (cc)":"85","power (hp)":"65","weight (lb)":"2020","0-60 mph (s)":"19.2","year":"79"},{"name":"Datsun 210","economy (mpg)":"37","cylinders":"4","displacement (cc)":"85","power (hp)":"65","weight (lb)":"1975","0-60 mph (s)":"19.4","year":"81"},{"name":"Datsun 210","economy (mpg)":"40.8","cylinders":"4","displacement (cc)":"85","power (hp)":"65","weight (lb)":"2110","0-60 mph (s)":"19.2","year":"80"},{"name":"Datsun 280ZX","economy (mpg)":"32.7","cylinders":"6","displacement (cc)":"168","power (hp)":"132","weight (lb)":"2910","0-60 mph (s)":"11.4","year":"80"},{"name":"Datsun 310 GX","economy (mpg)":"38","cylinders":"4","displacement (cc)":"91","power (hp)":"67","weight (lb)":"1995","0-60 mph (s)":"16.2","year":"82"},{"name":"Datsun 310","economy (mpg)":"37.2","cylinders":"4","displacement (cc)":"86","power (hp)":"65","weight (lb)":"2019","0-60 mph (s)":"16.4","year":"80"},{"name":"Datsun 510 (Wagon)","economy (mpg)":"28","cylinders":"4","displacement (cc)":"97","power (hp)":"92","weight (lb)":"2288","0-60 mph (s)":"17","year":"72"},{"name":"Datsun 510 Hatchback","economy (mpg)":"37","cylinders":"4","displacement (cc)":"119","power (hp)":"92","weight (lb)":"2434","0-60 mph (s)":"15","year":"80"},{"name":"Datsun 510","economy (mpg)":"27.2","cylinders":"4","displacement (cc)":"119","power (hp)":"97","weight (lb)":"2300","0-60 mph (s)":"14.7","year":"78"},{"name":"Datsun 610","economy (mpg)":"22","cylinders":"4","displacement (cc)":"108","power (hp)":"94","weight (lb)":"2379","0-60 mph (s)":"16.5","year":"73"},{"name":"Datsun 710","economy (mpg)":"24","cylinders":"4","displacement (cc)":"119","power (hp)":"97","weight (lb)":"2545","0-60 mph (s)":"17","year":"75"},{"name":"Datsun 710","economy (mpg)":"32","cylinders":"4","displacement (cc)":"83","power (hp)":"61","weight (lb)":"2003","0-60 mph (s)":"19","year":"74"},{"name":"Datsun 810 Maxima","economy (mpg)":"24.2","cylinders":"6","displacement (cc)":"146","power (hp)":"120","weight (lb)":"2930","0-60 mph (s)":"13.8","year":"81"},{"name":"Datsun 810","economy (mpg)":"22","cylinders":"6","displacement (cc)":"146","power (hp)":"97","weight (lb)":"2815","0-60 mph (s)":"14.5","year":"77"},{"name":"Datsun B-210","economy (mpg)":"32","cylinders":"4","displacement (cc)":"85","power (hp)":"70","weight (lb)":"1990","0-60 mph (s)":"17","year":"76"},{"name":"Datsun B210 GX","economy (mpg)":"39.4","cylinders":"4","displacement (cc)":"85","power (hp)":"70","weight (lb)":"2070","0-60 mph (s)":"18.6","year":"78"},{"name":"Datsun B210","economy (mpg)":"31","cylinders":"4","displacement (cc)":"79","power (hp)":"67","weight (lb)":"1950","0-60 mph (s)":"19","year":"74"},{"name":"Datsun F-10 Hatchback","economy (mpg)":"33.5","cylinders":"4","displacement (cc)":"85","power (hp)":"70","weight (lb)":"1945","0-60 mph (s)":"16.8","year":"77"},{"name":"Datsun PL510","economy (mpg)":"27","cylinders":"4","displacement (cc)":"97","power (hp)":"88","weight (lb)":"2130","0-60 mph (s)":"14.5","year":"70"},{"name":"Datsun PL510","economy (mpg)":"27","cylinders":"4","displacement (cc)":"97","power (hp)":"88","weight (lb)":"2130","0-60 mph (s)":"14.5","year":"71"},{"name":"Dodge Aries SE","economy (mpg)":"29","cylinders":"4","displacement (cc)":"135","power (hp)":"84","weight (lb)":"2525","0-60 mph (s)":"16","year":"82"},{"name":"Dodge Aries Wagon (Wagon)","economy (mpg)":"25.8","cylinders":"4","displacement (cc)":"156","power (hp)":"92","weight (lb)":"2620","0-60 mph (s)":"14.4","year":"81"},{"name":"Dodge Aspen 6","economy (mpg)":"20.6","cylinders":"6","displacement (cc)":"225","power (hp)":"110","weight (lb)":"3360","0-60 mph (s)":"16.6","year":"79"},{"name":"Dodge Aspen SE","economy (mpg)":"20","cylinders":"6","displacement (cc)":"225","power (hp)":"100","weight (lb)":"3651","0-60 mph (s)":"17.7","year":"76"},{"name":"Dodge Aspen","economy (mpg)":"18.6","cylinders":"6","displacement (cc)":"225","power (hp)":"110","weight (lb)":"3620","0-60 mph (s)":"18.7","year":"78"},{"name":"Dodge Aspen","economy (mpg)":"19.1","cylinders":"6","displacement (cc)":"225","power (hp)":"90","weight (lb)":"3381","0-60 mph (s)":"18.7","year":"80"},{"name":"Dodge Challenger SE","economy (mpg)":"15","cylinders":"8","displacement (cc)":"383","power (hp)":"170","weight (lb)":"3563","0-60 mph (s)":"10","year":"70"},{"name":"Dodge Charger 2.2","economy (mpg)":"36","cylinders":"4","displacement (cc)":"135","power (hp)":"84","weight (lb)":"2370","0-60 mph (s)":"13","year":"82"},{"name":"Dodge Colt (Wagon)","economy (mpg)":"28","cylinders":"4","displacement (cc)":"98","power (hp)":"80","weight (lb)":"2164","0-60 mph (s)":"15","year":"72"},{"name":"Dodge Colt Hardtop","economy (mpg)":"25","cylinders":"4","displacement (cc)":"97.5","power (hp)":"80","weight (lb)":"2126","0-60 mph (s)":"17","year":"72"},{"name":"Dodge Colt Hatchback Custom","economy (mpg)":"35.7","cylinders":"4","displacement (cc)":"98","power (hp)":"80","weight (lb)":"1915","0-60 mph (s)":"14.4","year":"79"},{"name":"Dodge Colt M/M","economy (mpg)":"33.5","cylinders":"4","displacement (cc)":"98","power (hp)":"83","weight (lb)":"2075","0-60 mph (s)":"15.9","year":"77"},{"name":"Dodge Colt","economy (mpg)":"26","cylinders":"4","displacement (cc)":"98","power (hp)":"79","weight (lb)":"2255","0-60 mph (s)":"17.7","year":"76"},{"name":"Dodge Colt","economy (mpg)":"27.9","cylinders":"4","displacement (cc)":"156","power (hp)":"105","weight (lb)":"2800","0-60 mph (s)":"14.4","year":"80"},{"name":"Dodge Colt","economy (mpg)":"28","cylinders":"4","displacement (cc)":"90","power (hp)":"75","weight (lb)":"2125","0-60 mph (s)":"14.5","year":"74"},{"name":"Dodge Coronet Brougham","economy (mpg)":"16","cylinders":"8","displacement (cc)":"318","power (hp)":"150","weight (lb)":"4190","0-60 mph (s)":"13","year":"76"},{"name":"Dodge Coronet Custom (Wagon)","economy (mpg)":"14","cylinders":"8","displacement (cc)":"318","power (hp)":"150","weight (lb)":"4457","0-60 mph (s)":"13.5","year":"74"},{"name":"Dodge Coronet Custom","economy (mpg)":"15","cylinders":"8","displacement (cc)":"318","power (hp)":"150","weight (lb)":"3777","0-60 mph (s)":"12.5","year":"73"},{"name":"Dodge D100","economy (mpg)":"13","cylinders":"8","displacement (cc)":"318","power (hp)":"150","weight (lb)":"3755","0-60 mph (s)":"14","year":"76"},{"name":"Dodge D200","economy (mpg)":"11","cylinders":"8","displacement (cc)":"318","power (hp)":"210","weight (lb)":"4382","0-60 mph (s)":"13.5","year":"70"},{"name":"Dodge Dart Custom","economy (mpg)":"15","cylinders":"8","displacement (cc)":"318","power (hp)":"150","weight (lb)":"3399","0-60 mph (s)":"11","year":"73"},{"name":"Dodge Diplomat","economy (mpg)":"19.4","cylinders":"8","displacement (cc)":"318","power (hp)":"140","weight (lb)":"3735","0-60 mph (s)":"13.2","year":"78"},{"name":"Dodge Magnum XE","economy (mpg)":"17.5","cylinders":"8","displacement (cc)":"318","power (hp)":"140","weight (lb)":"4080","0-60 mph (s)":"13.7","year":"78"},{"name":"Dodge Monaco (Wagon)","economy (mpg)":"12","cylinders":"8","displacement (cc)":"383","power (hp)":"180","weight (lb)":"4955","0-60 mph (s)":"11.5","year":"71"},{"name":"Dodge Monaco Brougham","economy (mpg)":"15.5","cylinders":"8","displacement (cc)":"318","power (hp)":"145","weight (lb)":"4140","0-60 mph (s)":"13.7","year":"77"},{"name":"Dodge Omni","economy (mpg)":"30.9","cylinders":"4","displacement (cc)":"105","power (hp)":"75","weight (lb)":"2230","0-60 mph (s)":"14.5","year":"78"},{"name":"Dodge Rampage","economy (mpg)":"32","cylinders":"4","displacement (cc)":"135","power (hp)":"84","weight (lb)":"2295","0-60 mph (s)":"11.6","year":"82"},{"name":"Dodge St. Regis","economy (mpg)":"18.2","cylinders":"8","displacement (cc)":"318","power (hp)":"135","weight (lb)":"3830","0-60 mph (s)":"15.2","year":"79"},{"name":"Fiat 124 Sport Coupe","economy (mpg)":"26","cylinders":"4","displacement (cc)":"98","power (hp)":"90","weight (lb)":"2265","0-60 mph (s)":"15.5","year":"73"},{"name":"Fiat 124 TC","economy (mpg)":"26","cylinders":"4","displacement (cc)":"116","power (hp)":"75","weight (lb)":"2246","0-60 mph (s)":"14","year":"74"},{"name":"Fiat 124B","economy (mpg)":"30","cylinders":"4","displacement (cc)":"88","power (hp)":"76","weight (lb)":"2065","0-60 mph (s)":"14.5","year":"71"},{"name":"Fiat 128","economy (mpg)":"24","cylinders":"4","displacement (cc)":"90","power (hp)":"75","weight (lb)":"2108","0-60 mph (s)":"15.5","year":"74"},{"name":"Fiat 128","economy (mpg)":"29","cylinders":"4","displacement (cc)":"68","power (hp)":"49","weight (lb)":"1867","0-60 mph (s)":"19.5","year":"73"},{"name":"Fiat 131","economy (mpg)":"28","cylinders":"4","displacement (cc)":"107","power (hp)":"86","weight (lb)":"2464","0-60 mph (s)":"15.5","year":"76"},{"name":"Fiat Strada Custom","economy (mpg)":"37.3","cylinders":"4","displacement (cc)":"91","power (hp)":"69","weight (lb)":"2130","0-60 mph (s)":"14.7","year":"79"},{"name":"Fiat X1.9","economy (mpg)":"31","cylinders":"4","displacement (cc)":"79","power (hp)":"67","weight (lb)":"2000","0-60 mph (s)":"16","year":"74"},{"name":"Ford Capri II","economy (mpg)":"25","cylinders":"4","displacement (cc)":"140","power (hp)":"92","weight (lb)":"2572","0-60 mph (s)":"14.9","year":"76"},{"name":"Ford Country Squire (Wagon)","economy (mpg)":"13","cylinders":"8","displacement (cc)":"400","power (hp)":"170","weight (lb)":"4746","0-60 mph (s)":"12","year":"71"},{"name":"Ford Country Squire (Wagon)","economy (mpg)":"15.5","cylinders":"8","displacement (cc)":"351","power (hp)":"142","weight (lb)":"4054","0-60 mph (s)":"14.3","year":"79"},{"name":"Ford Country","economy (mpg)":"12","cylinders":"8","displacement (cc)":"400","power (hp)":"167","weight (lb)":"4906","0-60 mph (s)":"12.5","year":"73"},{"name":"Ford Escort 2H","economy (mpg)":"29.9","cylinders":"4","displacement (cc)":"98","power (hp)":"65","weight (lb)":"2380","0-60 mph (s)":"20.7","year":"81"},{"name":"Ford Escort 4W","economy (mpg)":"34.4","cylinders":"4","displacement (cc)":"98","power (hp)":"65","weight (lb)":"2045","0-60 mph (s)":"16.2","year":"81"},{"name":"Ford F108","economy (mpg)":"13","cylinders":"8","displacement (cc)":"302","power (hp)":"130","weight (lb)":"3870","0-60 mph (s)":"15","year":"76"},{"name":"Ford F250","economy (mpg)":"10","cylinders":"8","displacement (cc)":"360","power (hp)":"215","weight (lb)":"4615","0-60 mph (s)":"14","year":"70"},{"name":"Ford Fairmont (Auto)","economy (mpg)":"20.2","cylinders":"6","displacement (cc)":"200","power (hp)":"85","weight (lb)":"2965","0-60 mph (s)":"15.8","year":"78"},{"name":"Ford Fairmont (Man)","economy (mpg)":"25.1","cylinders":"4","displacement (cc)":"140","power (hp)":"88","weight (lb)":"2720","0-60 mph (s)":"15.4","year":"78"},{"name":"Ford Fairmont 4","economy (mpg)":"22.3","cylinders":"4","displacement (cc)":"140","power (hp)":"88","weight (lb)":"2890","0-60 mph (s)":"17.3","year":"79"},{"name":"Ford Fairmont Futura","economy (mpg)":"24","cylinders":"4","displacement (cc)":"140","power (hp)":"92","weight (lb)":"2865","0-60 mph (s)":"16.4","year":"82"},{"name":"Ford Fairmont","economy (mpg)":"26.4","cylinders":"4","displacement (cc)":"140","power (hp)":"88","weight (lb)":"2870","0-60 mph (s)":"18.1","year":"80"},{"name":"Ford Fiesta","economy (mpg)":"36.1","cylinders":"4","displacement (cc)":"98","power (hp)":"66","weight (lb)":"1800","0-60 mph (s)":"14.4","year":"78"},{"name":"Ford Futura","economy (mpg)":"18.1","cylinders":"8","displacement (cc)":"302","power (hp)":"139","weight (lb)":"3205","0-60 mph (s)":"11.2","year":"78"},{"name":"Ford Galaxie 500","economy (mpg)":"14","cylinders":"8","displacement (cc)":"351","power (hp)":"153","weight (lb)":"4129","0-60 mph (s)":"13","year":"72"},{"name":"Ford Galaxie 500","economy (mpg)":"14","cylinders":"8","displacement (cc)":"351","power (hp)":"153","weight (lb)":"4154","0-60 mph (s)":"13.5","year":"71"},{"name":"Ford Galaxie 500","economy (mpg)":"15","cylinders":"8","displacement (cc)":"429","power (hp)":"198","weight (lb)":"4341","0-60 mph (s)":"10","year":"70"},{"name":"Ford Gran Torino (Wagon)","economy (mpg)":"13","cylinders":"8","displacement (cc)":"302","power (hp)":"140","weight (lb)":"4294","0-60 mph (s)":"16","year":"72"},{"name":"Ford Gran Torino (Wagon)","economy (mpg)":"14","cylinders":"8","displacement (cc)":"302","power (hp)":"140","weight (lb)":"4638","0-60 mph (s)":"16","year":"74"},{"name":"Ford Gran Torino","economy (mpg)":"14","cylinders":"8","displacement (cc)":"302","power (hp)":"137","weight (lb)":"4042","0-60 mph (s)":"14.5","year":"73"},{"name":"Ford Gran Torino","economy (mpg)":"14.5","cylinders":"8","displacement (cc)":"351","power (hp)":"152","weight (lb)":"4215","0-60 mph (s)":"12.8","year":"76"},{"name":"Ford Gran Torino","economy (mpg)":"16","cylinders":"8","displacement (cc)":"302","power (hp)":"140","weight (lb)":"4141","0-60 mph (s)":"14","year":"74"},{"name":"Ford Granada Ghia","economy (mpg)":"18","cylinders":"6","displacement (cc)":"250","power (hp)":"78","weight (lb)":"3574","0-60 mph (s)":"21","year":"76"},{"name":"Ford Granada GL","economy (mpg)":"20.2","cylinders":"6","displacement (cc)":"200","power (hp)":"88","weight (lb)":"3060","0-60 mph (s)":"17.1","year":"81"},{"name":"Ford Granada L","economy (mpg)":"22","cylinders":"6","displacement (cc)":"232","power (hp)":"112","weight (lb)":"2835","0-60 mph (s)":"14.7","year":"82"},{"name":"Ford Granada","economy (mpg)":"18.5","cylinders":"6","displacement (cc)":"250","power (hp)":"98","weight (lb)":"3525","0-60 mph (s)":"19","year":"77"},{"name":"Ford LTD Landau","economy (mpg)":"17.6","cylinders":"8","displacement (cc)":"302","power (hp)":"129","weight (lb)":"3725","0-60 mph (s)":"13.4","year":"79"},{"name":"Ford LTD","economy (mpg)":"13","cylinders":"8","displacement (cc)":"351","power (hp)":"158","weight (lb)":"4363","0-60 mph (s)":"13","year":"73"},{"name":"Ford LTD","economy (mpg)":"14","cylinders":"8","displacement (cc)":"351","power (hp)":"148","weight (lb)":"4657","0-60 mph (s)":"13.5","year":"75"},{"name":"Ford Maverick","economy (mpg)":"15","cylinders":"6","displacement (cc)":"250","power (hp)":"72","weight (lb)":"3158","0-60 mph (s)":"19.5","year":"75"},{"name":"Ford Maverick","economy (mpg)":"18","cylinders":"6","displacement (cc)":"250","power (hp)":"88","weight (lb)":"3021","0-60 mph (s)":"16.5","year":"73"},{"name":"Ford Maverick","economy (mpg)":"21","cylinders":"6","displacement (cc)":"200","power (hp)":"","weight (lb)":"2875","0-60 mph (s)":"17","year":"74"},{"name":"Ford Maverick","economy (mpg)":"21","cylinders":"6","displacement (cc)":"200","power (hp)":"85","weight (lb)":"2587","0-60 mph (s)":"16","year":"70"},{"name":"Ford Maverick","economy (mpg)":"24","cylinders":"6","displacement (cc)":"200","power (hp)":"81","weight (lb)":"3012","0-60 mph (s)":"17.6","year":"76"},{"name":"Ford Mustang Boss 302","economy (mpg)":"","cylinders":"8","displacement (cc)":"302","power (hp)":"140","weight (lb)":"3353","0-60 mph (s)":"8","year":"70"},{"name":"Ford Mustang Cobra","economy (mpg)":"23.6","cylinders":"4","displacement (cc)":"140","power (hp)":"","weight (lb)":"2905","0-60 mph (s)":"14.3","year":"80"},{"name":"Ford Mustang GL","economy (mpg)":"27","cylinders":"4","displacement (cc)":"140","power (hp)":"86","weight (lb)":"2790","0-60 mph (s)":"15.6","year":"82"},{"name":"Ford Mustang II 2+2","economy (mpg)":"25.5","cylinders":"4","displacement (cc)":"140","power (hp)":"89","weight (lb)":"2755","0-60 mph (s)":"15.8","year":"77"},{"name":"Ford Mustang II","economy (mpg)":"13","cylinders":"8","displacement (cc)":"302","power (hp)":"129","weight (lb)":"3169","0-60 mph (s)":"12","year":"75"},{"name":"Ford Mustang","economy (mpg)":"18","cylinders":"6","displacement (cc)":"250","power (hp)":"88","weight (lb)":"3139","0-60 mph (s)":"14.5","year":"71"},{"name":"Ford Pinto (Wagon)","economy (mpg)":"22","cylinders":"4","displacement (cc)":"122","power (hp)":"86","weight (lb)":"2395","0-60 mph (s)":"16","year":"72"},{"name":"Ford Pinto Runabout","economy (mpg)":"21","cylinders":"4","displacement (cc)":"122","power (hp)":"86","weight (lb)":"2226","0-60 mph (s)":"16.5","year":"72"},{"name":"Ford Pinto","economy (mpg)":"18","cylinders":"6","displacement (cc)":"171","power (hp)":"97","weight (lb)":"2984","0-60 mph (s)":"14.5","year":"75"},{"name":"Ford Pinto","economy (mpg)":"19","cylinders":"4","displacement (cc)":"122","power (hp)":"85","weight (lb)":"2310","0-60 mph (s)":"18.5","year":"73"},{"name":"Ford Pinto","economy (mpg)":"23","cylinders":"4","displacement (cc)":"140","power (hp)":"83","weight (lb)":"2639","0-60 mph (s)":"17","year":"75"},{"name":"Ford Pinto","economy (mpg)":"25","cylinders":"4","displacement (cc)":"98","power (hp)":"","weight (lb)":"2046","0-60 mph (s)":"19","year":"71"},{"name":"Ford Pinto","economy (mpg)":"26","cylinders":"4","displacement (cc)":"122","power (hp)":"80","weight (lb)":"2451","0-60 mph (s)":"16.5","year":"74"},{"name":"Ford Pinto","economy (mpg)":"26.5","cylinders":"4","displacement (cc)":"140","power (hp)":"72","weight (lb)":"2565","0-60 mph (s)":"13.6","year":"76"},{"name":"Ford Ranger","economy (mpg)":"28","cylinders":"4","displacement (cc)":"120","power (hp)":"79","weight (lb)":"2625","0-60 mph (s)":"18.6","year":"82"},{"name":"Ford Thunderbird","economy (mpg)":"16","cylinders":"8","displacement (cc)":"351","power (hp)":"149","weight (lb)":"4335","0-60 mph (s)":"14.5","year":"77"},{"name":"Ford Torino (Wagon)","economy (mpg)":"","cylinders":"8","displacement (cc)":"351","power (hp)":"153","weight (lb)":"4034","0-60 mph (s)":"11","year":"70"},{"name":"Ford Torino 500","economy (mpg)":"19","cylinders":"6","displacement (cc)":"250","power (hp)":"88","weight (lb)":"3302","0-60 mph (s)":"15.5","year":"71"},{"name":"Ford Torino","economy (mpg)":"17","cylinders":"8","displacement (cc)":"302","power (hp)":"140","weight (lb)":"3449","0-60 mph (s)":"10.5","year":"70"},{"name":"Hi 1200D","economy (mpg)":"9","cylinders":"8","displacement (cc)":"304","power (hp)":"193","weight (lb)":"4732","0-60 mph (s)":"18.5","year":"70"},{"name":"Honda Accord CVCC","economy (mpg)":"31.5","cylinders":"4","displacement (cc)":"98","power (hp)":"68","weight (lb)":"2045","0-60 mph (s)":"18.5","year":"77"},{"name":"Honda Accord LX","economy (mpg)":"29.5","cylinders":"4","displacement (cc)":"98","power (hp)":"68","weight (lb)":"2135","0-60 mph (s)":"16.6","year":"78"},{"name":"Honda Accord","economy (mpg)":"32.4","cylinders":"4","displacement (cc)":"107","power (hp)":"72","weight (lb)":"2290","0-60 mph (s)":"17","year":"80"},{"name":"Honda Accord","economy (mpg)":"36","cylinders":"4","displacement (cc)":"107","power (hp)":"75","weight (lb)":"2205","0-60 mph (s)":"14.5","year":"82"},{"name":"Honda Civic (Auto)","economy (mpg)":"32","cylinders":"4","displacement (cc)":"91","power (hp)":"67","weight (lb)":"1965","0-60 mph (s)":"15.7","year":"82"},{"name":"Honda Civic 1300","economy (mpg)":"35.1","cylinders":"4","displacement (cc)":"81","power (hp)":"60","weight (lb)":"1760","0-60 mph (s)":"16.1","year":"81"},{"name":"Honda Civic 1500 GL","economy (mpg)":"44.6","cylinders":"4","displacement (cc)":"91","power (hp)":"67","weight (lb)":"1850","0-60 mph (s)":"13.8","year":"80"},{"name":"Honda Civic CVCC","economy (mpg)":"33","cylinders":"4","displacement (cc)":"91","power (hp)":"53","weight (lb)":"1795","0-60 mph (s)":"17.5","year":"75"},{"name":"Honda Civic CVCC","economy (mpg)":"36.1","cylinders":"4","displacement (cc)":"91","power (hp)":"60","weight (lb)":"1800","0-60 mph (s)":"16.4","year":"78"},{"name":"Honda Civic","economy (mpg)":"24","cylinders":"4","displacement (cc)":"120","power (hp)":"97","weight (lb)":"2489","0-60 mph (s)":"15","year":"74"},{"name":"Honda Civic","economy (mpg)":"33","cylinders":"4","displacement (cc)":"91","power (hp)":"53","weight (lb)":"1795","0-60 mph (s)":"17.4","year":"76"},{"name":"Honda Civic","economy (mpg)":"38","cylinders":"4","displacement (cc)":"91","power (hp)":"67","weight (lb)":"1965","0-60 mph (s)":"15","year":"82"},{"name":"Honda Prelude","economy (mpg)":"33.7","cylinders":"4","displacement (cc)":"107","power (hp)":"75","weight (lb)":"2210","0-60 mph (s)":"14.4","year":"81"},{"name":"Maxda GLC Deluxe","economy (mpg)":"34.1","cylinders":"4","displacement (cc)":"86","power (hp)":"65","weight (lb)":"1975","0-60 mph (s)":"15.2","year":"79"},{"name":"Maxda RX-3","economy (mpg)":"18","cylinders":"3","displacement (cc)":"70","power (hp)":"90","weight (lb)":"2124","0-60 mph (s)":"13.5","year":"73"},{"name":"Mazda 626","economy (mpg)":"31.3","cylinders":"4","displacement (cc)":"120","power (hp)":"75","weight (lb)":"2542","0-60 mph (s)":"17.5","year":"80"},{"name":"Mazda 626","economy (mpg)":"31.6","cylinders":"4","displacement (cc)":"120","power (hp)":"74","weight (lb)":"2635","0-60 mph (s)":"18.3","year":"81"},{"name":"Mazda GLC 4","economy (mpg)":"34.1","cylinders":"4","displacement (cc)":"91","power (hp)":"68","weight (lb)":"1985","0-60 mph (s)":"16","year":"81"},{"name":"Mazda GLC Custom L","economy (mpg)":"37","cylinders":"4","displacement (cc)":"91","power (hp)":"68","weight (lb)":"2025","0-60 mph (s)":"18.2","year":"82"},{"name":"Mazda GLC Custom","economy (mpg)":"31","cylinders":"4","displacement (cc)":"91","power (hp)":"68","weight (lb)":"1970","0-60 mph (s)":"17.6","year":"82"},{"name":"Mazda GLC Deluxe","economy (mpg)":"32.8","cylinders":"4","displacement (cc)":"78","power (hp)":"52","weight (lb)":"1985","0-60 mph (s)":"19.4","year":"78"},{"name":"Mazda GLC","economy (mpg)":"46.6","cylinders":"4","displacement (cc)":"86","power (hp)":"65","weight (lb)":"2110","0-60 mph (s)":"17.9","year":"80"},{"name":"Mazda RX-2 Coupe","economy (mpg)":"19","cylinders":"3","displacement (cc)":"70","power (hp)":"97","weight (lb)":"2330","0-60 mph (s)":"13.5","year":"72"},{"name":"Mazda RX-4","economy (mpg)":"21.5","cylinders":"3","displacement (cc)":"80","power (hp)":"110","weight (lb)":"2720","0-60 mph (s)":"13.5","year":"77"},{"name":"Mazda RX-7 Gs","economy (mpg)":"23.7","cylinders":"3","displacement (cc)":"70","power (hp)":"100","weight (lb)":"2420","0-60 mph (s)":"12.5","year":"80"},{"name":"Mercedes-Benz 240D","economy (mpg)":"30","cylinders":"4","displacement (cc)":"146","power (hp)":"67","weight (lb)":"3250","0-60 mph (s)":"21.8","year":"80"},{"name":"Mercedes-Benz 280S","economy (mpg)":"16.5","cylinders":"6","displacement (cc)":"168","power (hp)":"120","weight (lb)":"3820","0-60 mph (s)":"16.7","year":"76"},{"name":"Mercedes-Benz 300D","economy (mpg)":"25.4","cylinders":"5","displacement (cc)":"183","power (hp)":"77","weight (lb)":"3530","0-60 mph (s)":"20.1","year":"79"},{"name":"Mercury Capri 2000","economy (mpg)":"23","cylinders":"4","displacement (cc)":"122","power (hp)":"86","weight (lb)":"2220","0-60 mph (s)":"14","year":"71"},{"name":"Mercury Capri V6","economy (mpg)":"21","cylinders":"6","displacement (cc)":"155","power (hp)":"107","weight (lb)":"2472","0-60 mph (s)":"14","year":"73"},{"name":"Mercury Cougar Brougham","economy (mpg)":"15","cylinders":"8","displacement (cc)":"302","power (hp)":"130","weight (lb)":"4295","0-60 mph (s)":"14.9","year":"77"},{"name":"Mercury Grand Marquis","economy (mpg)":"16.5","cylinders":"8","displacement (cc)":"351","power (hp)":"138","weight (lb)":"3955","0-60 mph (s)":"13.2","year":"79"},{"name":"Mercury Lynx L","economy (mpg)":"36","cylinders":"4","displacement (cc)":"98","power (hp)":"70","weight (lb)":"2125","0-60 mph (s)":"17.3","year":"82"},{"name":"Mercury Marquis Brougham","economy (mpg)":"12","cylinders":"8","displacement (cc)":"429","power (hp)":"198","weight (lb)":"4952","0-60 mph (s)":"11.5","year":"73"},{"name":"Mercury Marquis","economy (mpg)":"11","cylinders":"8","displacement (cc)":"429","power (hp)":"208","weight (lb)":"4633","0-60 mph (s)":"11","year":"72"},{"name":"Mercury Monarch Ghia","economy (mpg)":"20.2","cylinders":"8","displacement (cc)":"302","power (hp)":"139","weight (lb)":"3570","0-60 mph (s)":"12.8","year":"78"},{"name":"Mercury Monarch","economy (mpg)":"15","cylinders":"6","displacement (cc)":"250","power (hp)":"72","weight (lb)":"3432","0-60 mph (s)":"21","year":"75"},{"name":"Mercury Zephyr 6","economy (mpg)":"19.8","cylinders":"6","displacement (cc)":"200","power (hp)":"85","weight (lb)":"2990","0-60 mph (s)":"18.2","year":"79"},{"name":"Mercury Zephyr","economy (mpg)":"20.8","cylinders":"6","displacement (cc)":"200","power (hp)":"85","weight (lb)":"3070","0-60 mph (s)":"16.7","year":"78"},{"name":"Nissan Stanza XE","economy (mpg)":"36","cylinders":"4","displacement (cc)":"120","power (hp)":"88","weight (lb)":"2160","0-60 mph (s)":"14.5","year":"82"},{"name":"Oldsmobile Cutlass Ciera (Diesel)","economy (mpg)":"38","cylinders":"6","displacement (cc)":"262","power (hp)":"85","weight (lb)":"3015","0-60 mph (s)":"17","year":"82"},{"name":"Oldsmobile Cutlass LS","economy (mpg)":"26.6","cylinders":"8","displacement (cc)":"350","power (hp)":"105","weight (lb)":"3725","0-60 mph (s)":"19","year":"81"},{"name":"Oldsmobile Cutlass Salon Brougham","economy (mpg)":"19.9","cylinders":"8","displacement (cc)":"260","power (hp)":"110","weight (lb)":"3365","0-60 mph (s)":"15.5","year":"78"},{"name":"Oldsmobile Cutlass Salon Brougham","economy (mpg)":"23.9","cylinders":"8","displacement (cc)":"260","power (hp)":"90","weight (lb)":"3420","0-60 mph (s)":"22.2","year":"79"},{"name":"Oldsmobile Cutlass Supreme","economy (mpg)":"17","cylinders":"8","displacement (cc)":"260","power (hp)":"110","weight (lb)":"4060","0-60 mph (s)":"19","year":"77"},{"name":"Oldsmobile Delta 88 Royale","economy (mpg)":"12","cylinders":"8","displacement (cc)":"350","power (hp)":"160","weight (lb)":"4456","0-60 mph (s)":"13.5","year":"72"},{"name":"Oldsmobile Omega Brougham","economy (mpg)":"26.8","cylinders":"6","displacement (cc)":"173","power (hp)":"115","weight (lb)":"2700","0-60 mph (s)":"12.9","year":"79"},{"name":"Oldsmobile Omega","economy (mpg)":"11","cylinders":"8","displacement (cc)":"350","power (hp)":"180","weight (lb)":"3664","0-60 mph (s)":"11","year":"73"},{"name":"Oldsmobile Starfire SX","economy (mpg)":"23.8","cylinders":"4","displacement (cc)":"151","power (hp)":"85","weight (lb)":"2855","0-60 mph (s)":"17.6","year":"78"},{"name":"Oldsmobile Vista Cruiser","economy (mpg)":"12","cylinders":"8","displacement (cc)":"350","power (hp)":"180","weight (lb)":"4499","0-60 mph (s)":"12.5","year":"73"},{"name":"Opel 1900","economy (mpg)":"25","cylinders":"4","displacement (cc)":"116","power (hp)":"81","weight (lb)":"2220","0-60 mph (s)":"16.9","year":"76"},{"name":"Opel 1900","economy (mpg)":"28","cylinders":"4","displacement (cc)":"116","power (hp)":"90","weight (lb)":"2123","0-60 mph (s)":"14","year":"71"},{"name":"Opel Manta","economy (mpg)":"24","cylinders":"4","displacement (cc)":"116","power (hp)":"75","weight (lb)":"2158","0-60 mph (s)":"15.5","year":"73"},{"name":"Opel Manta","economy (mpg)":"26","cylinders":"4","displacement (cc)":"97","power (hp)":"78","weight (lb)":"2300","0-60 mph (s)":"14.5","year":"74"},{"name":"Peugeot 304","economy (mpg)":"30","cylinders":"4","displacement (cc)":"79","power (hp)":"70","weight (lb)":"2074","0-60 mph (s)":"19.5","year":"71"},{"name":"Peugeot 504 (Wagon)","economy (mpg)":"21","cylinders":"4","displacement (cc)":"120","power (hp)":"87","weight (lb)":"2979","0-60 mph (s)":"19.5","year":"72"},{"name":"Peugeot 504","economy (mpg)":"19","cylinders":"4","displacement (cc)":"120","power (hp)":"88","weight (lb)":"3270","0-60 mph (s)":"21.9","year":"76"},{"name":"Peugeot 504","economy (mpg)":"23","cylinders":"4","displacement (cc)":"120","power (hp)":"88","weight (lb)":"2957","0-60 mph (s)":"17","year":"75"},{"name":"Peugeot 504","economy (mpg)":"25","cylinders":"4","displacement (cc)":"110","power (hp)":"87","weight (lb)":"2672","0-60 mph (s)":"17.5","year":"70"},{"name":"Peugeot 504","economy (mpg)":"27.2","cylinders":"4","displacement (cc)":"141","power (hp)":"71","weight (lb)":"3190","0-60 mph (s)":"24.8","year":"79"},{"name":"Peugeot 505S Turbo Diesel","economy (mpg)":"28.1","cylinders":"4","displacement (cc)":"141","power (hp)":"80","weight (lb)":"3230","0-60 mph (s)":"20.4","year":"81"},{"name":"Peugeot 604SL","economy (mpg)":"16.2","cylinders":"6","displacement (cc)":"163","power (hp)":"133","weight (lb)":"3410","0-60 mph (s)":"15.8","year":"78"},{"name":"Plymouth Arrow GS","economy (mpg)":"25.5","cylinders":"4","displacement (cc)":"122","power (hp)":"96","weight (lb)":"2300","0-60 mph (s)":"15.5","year":"77"},{"name":"Plymouth Barracuda 340","economy (mpg)":"14","cylinders":"8","displacement (cc)":"340","power (hp)":"160","weight (lb)":"3609","0-60 mph (s)":"8","year":"70"},{"name":"Plymouth Champ","economy (mpg)":"39","cylinders":"4","displacement (cc)":"86","power (hp)":"64","weight (lb)":"1875","0-60 mph (s)":"16.4","year":"81"},{"name":"Plymouth Cricket","economy (mpg)":"26","cylinders":"4","displacement (cc)":"91","power (hp)":"70","weight (lb)":"1955","0-60 mph (s)":"20.5","year":"71"},{"name":"Plymouth Custom Suburb","economy (mpg)":"13","cylinders":"8","displacement (cc)":"360","power (hp)":"170","weight (lb)":"4654","0-60 mph (s)":"13","year":"73"},{"name":"Plymouth Duster","economy (mpg)":"20","cylinders":"6","displacement (cc)":"198","power (hp)":"95","weight (lb)":"3102","0-60 mph (s)":"16.5","year":"74"},{"name":"Plymouth Duster","economy (mpg)":"22","cylinders":"6","displacement (cc)":"198","power (hp)":"95","weight (lb)":"2833","0-60 mph (s)":"15.5","year":"70"},{"name":"Plymouth Duster","economy (mpg)":"23","cylinders":"6","displacement (cc)":"198","power (hp)":"95","weight (lb)":"2904","0-60 mph (s)":"16","year":"73"},{"name":"Plymouth Fury Gran Sedan","economy (mpg)":"14","cylinders":"8","displacement (cc)":"318","power (hp)":"150","weight (lb)":"4237","0-60 mph (s)":"14.5","year":"73"},{"name":"Plymouth Fury III","economy (mpg)":"14","cylinders":"8","displacement (cc)":"318","power (hp)":"150","weight (lb)":"4096","0-60 mph (s)":"13","year":"71"},{"name":"Plymouth Fury III","economy (mpg)":"14","cylinders":"8","displacement (cc)":"440","power (hp)":"215","weight (lb)":"4312","0-60 mph (s)":"8.5","year":"70"},{"name":"Plymouth Fury III","economy (mpg)":"15","cylinders":"8","displacement (cc)":"318","power (hp)":"150","weight (lb)":"4135","0-60 mph (s)":"13.5","year":"72"},{"name":"Plymouth Fury","economy (mpg)":"18","cylinders":"6","displacement (cc)":"225","power (hp)":"95","weight (lb)":"3785","0-60 mph (s)":"19","year":"75"},{"name":"Plymouth Grand Fury","economy (mpg)":"16","cylinders":"8","displacement (cc)":"318","power (hp)":"150","weight (lb)":"4498","0-60 mph (s)":"14.5","year":"75"},{"name":"Plymouth Horizon 4","economy (mpg)":"34.7","cylinders":"4","displacement (cc)":"105","power (hp)":"63","weight (lb)":"2215","0-60 mph (s)":"14.9","year":"81"},{"name":"Plymouth Horizon Miser","economy (mpg)":"38","cylinders":"4","displacement (cc)":"105","power (hp)":"63","weight (lb)":"2125","0-60 mph (s)":"14.7","year":"82"},{"name":"Plymouth Horizon TC3","economy (mpg)":"34.5","cylinders":"4","displacement (cc)":"105","power (hp)":"70","weight (lb)":"2150","0-60 mph (s)":"14.9","year":"79"},{"name":"Plymouth Horizon","economy (mpg)":"34.2","cylinders":"4","displacement (cc)":"105","power (hp)":"70","weight (lb)":"2200","0-60 mph (s)":"13.2","year":"79"},{"name":"Plymouth Reliant","economy (mpg)":"27.2","cylinders":"4","displacement (cc)":"135","power (hp)":"84","weight (lb)":"2490","0-60 mph (s)":"15.7","year":"81"},{"name":"Plymouth Reliant","economy (mpg)":"30","cylinders":"4","displacement (cc)":"135","power (hp)":"84","weight (lb)":"2385","0-60 mph (s)":"12.9","year":"81"},{"name":"Plymouth Sapporo","economy (mpg)":"23.2","cylinders":"4","displacement (cc)":"156","power (hp)":"105","weight (lb)":"2745","0-60 mph (s)":"16.7","year":"78"},{"name":"Plymouth Satellite (Wagon)","economy (mpg)":"","cylinders":"8","displacement (cc)":"383","power (hp)":"175","weight (lb)":"4166","0-60 mph (s)":"10.5","year":"70"},{"name":"Plymouth Satellite Custom (Wagon)","economy (mpg)":"14","cylinders":"8","displacement (cc)":"318","power (hp)":"150","weight (lb)":"4077","0-60 mph (s)":"14","year":"72"},{"name":"Plymouth Satellite Custom","economy (mpg)":"16","cylinders":"6","displacement (cc)":"225","power (hp)":"105","weight (lb)":"3439","0-60 mph (s)":"15.5","year":"71"},{"name":"Plymouth Satellite Sebring","economy (mpg)":"18","cylinders":"6","displacement (cc)":"225","power (hp)":"105","weight (lb)":"3613","0-60 mph (s)":"16.5","year":"74"},{"name":"Plymouth Satellite","economy (mpg)":"18","cylinders":"8","displacement (cc)":"318","power (hp)":"150","weight (lb)":"3436","0-60 mph (s)":"11","year":"70"},{"name":"Plymouth Valiant Custom","economy (mpg)":"19","cylinders":"6","displacement (cc)":"225","power (hp)":"95","weight (lb)":"3264","0-60 mph (s)":"16","year":"75"},{"name":"Plymouth Valiant","economy (mpg)":"18","cylinders":"6","displacement (cc)":"225","power (hp)":"105","weight (lb)":"3121","0-60 mph (s)":"16.5","year":"73"},{"name":"Plymouth Valiant","economy (mpg)":"22","cylinders":"6","displacement (cc)":"225","power (hp)":"100","weight (lb)":"3233","0-60 mph (s)":"15.4","year":"76"},{"name":"Plymouth Volare Custom","economy (mpg)":"19","cylinders":"6","displacement (cc)":"225","power (hp)":"100","weight (lb)":"3630","0-60 mph (s)":"17.7","year":"77"},{"name":"Plymouth Volare Premier V8","economy (mpg)":"13","cylinders":"8","displacement (cc)":"318","power (hp)":"150","weight (lb)":"3940","0-60 mph (s)":"13.2","year":"76"},{"name":"Plymouth Volare","economy (mpg)":"20.5","cylinders":"6","displacement (cc)":"225","power (hp)":"100","weight (lb)":"3430","0-60 mph (s)":"17.2","year":"78"},{"name":"Pontiac Astro","economy (mpg)":"23","cylinders":"4","displacement (cc)":"140","power (hp)":"78","weight (lb)":"2592","0-60 mph (s)":"18.5","year":"75"},{"name":"Pontiac Catalina Brougham","economy (mpg)":"14","cylinders":"8","displacement (cc)":"400","power (hp)":"175","weight (lb)":"4464","0-60 mph (s)":"11.5","year":"71"},{"name":"Pontiac Catalina","economy (mpg)":"14","cylinders":"8","displacement (cc)":"400","power (hp)":"175","weight (lb)":"4385","0-60 mph (s)":"12","year":"72"},{"name":"Pontiac Catalina","economy (mpg)":"14","cylinders":"8","displacement (cc)":"455","power (hp)":"225","weight (lb)":"4425","0-60 mph (s)":"10","year":"70"},{"name":"Pontiac Catalina","economy (mpg)":"16","cylinders":"8","displacement (cc)":"400","power (hp)":"170","weight (lb)":"4668","0-60 mph (s)":"11.5","year":"75"},{"name":"Pontiac Firebird","economy (mpg)":"19","cylinders":"6","displacement (cc)":"250","power (hp)":"100","weight (lb)":"3282","0-60 mph (s)":"15","year":"71"},{"name":"Pontiac Grand Prix Lj","economy (mpg)":"16","cylinders":"8","displacement (cc)":"400","power (hp)":"180","weight (lb)":"4220","0-60 mph (s)":"11.1","year":"77"},{"name":"Pontiac Grand Prix","economy (mpg)":"16","cylinders":"8","displacement (cc)":"400","power (hp)":"230","weight (lb)":"4278","0-60 mph (s)":"9.5","year":"73"},{"name":"Pontiac J2000 Se Hatchback","economy (mpg)":"31","cylinders":"4","displacement (cc)":"112","power (hp)":"85","weight (lb)":"2575","0-60 mph (s)":"16.2","year":"82"},{"name":"Pontiac Lemans V6","economy (mpg)":"21.5","cylinders":"6","displacement (cc)":"231","power (hp)":"115","weight (lb)":"3245","0-60 mph (s)":"15.4","year":"79"},{"name":"Pontiac Phoenix LJ","economy (mpg)":"19.2","cylinders":"6","displacement (cc)":"231","power (hp)":"105","weight (lb)":"3535","0-60 mph (s)":"19.2","year":"78"},{"name":"Pontiac Phoenix","economy (mpg)":"27","cylinders":"4","displacement (cc)":"151","power (hp)":"90","weight (lb)":"2735","0-60 mph (s)":"18","year":"82"},{"name":"Pontiac Phoenix","economy (mpg)":"33.5","cylinders":"4","displacement (cc)":"151","power (hp)":"90","weight (lb)":"2556","0-60 mph (s)":"13.2","year":"79"},{"name":"Pontiac Safari (Wagon)","economy (mpg)":"13","cylinders":"8","displacement (cc)":"400","power (hp)":"175","weight (lb)":"5140","0-60 mph (s)":"12","year":"71"},{"name":"Pontiac Sunbird Coupe","economy (mpg)":"24.5","cylinders":"4","displacement (cc)":"151","power (hp)":"88","weight (lb)":"2740","0-60 mph (s)":"16","year":"77"},{"name":"Pontiac Ventura Sj","economy (mpg)":"18.5","cylinders":"6","displacement (cc)":"250","power (hp)":"110","weight (lb)":"3645","0-60 mph (s)":"16.2","year":"76"},{"name":"Renault 12 (Wagon)","economy (mpg)":"26","cylinders":"4","displacement (cc)":"96","power (hp)":"69","weight (lb)":"2189","0-60 mph (s)":"18","year":"72"},{"name":"Renault 12TL","economy (mpg)":"27","cylinders":"4","displacement (cc)":"101","power (hp)":"83","weight (lb)":"2202","0-60 mph (s)":"15.3","year":"76"},{"name":"Renault 18I","economy (mpg)":"34.5","cylinders":"4","displacement (cc)":"100","power (hp)":"","weight (lb)":"2320","0-60 mph (s)":"15.8","year":"81"},{"name":"Renault 5 Gtl","economy (mpg)":"36","cylinders":"4","displacement (cc)":"79","power (hp)":"58","weight (lb)":"1825","0-60 mph (s)":"18.6","year":"77"},{"name":"Renault Lecar Deluxe","economy (mpg)":"40.9","cylinders":"4","displacement (cc)":"85","power (hp)":"","weight (lb)":"1835","0-60 mph (s)":"17.3","year":"80"},{"name":"Saab 900S","economy (mpg)":"","cylinders":"4","displacement (cc)":"121","power (hp)":"110","weight (lb)":"2800","0-60 mph (s)":"15.4","year":"81"},{"name":"Saab 99E","economy (mpg)":"25","cylinders":"4","displacement (cc)":"104","power (hp)":"95","weight (lb)":"2375","0-60 mph (s)":"17.5","year":"70"},{"name":"Saab 99GLE","economy (mpg)":"21.6","cylinders":"4","displacement (cc)":"121","power (hp)":"115","weight (lb)":"2795","0-60 mph (s)":"15.7","year":"78"},{"name":"Saab 99LE","economy (mpg)":"24","cylinders":"4","displacement (cc)":"121","power (hp)":"110","weight (lb)":"2660","0-60 mph (s)":"14","year":"73"},{"name":"Saab 99LE","economy (mpg)":"25","cylinders":"4","displacement (cc)":"121","power (hp)":"115","weight (lb)":"2671","0-60 mph (s)":"13.5","year":"75"},{"name":"Subaru DL","economy (mpg)":"30","cylinders":"4","displacement (cc)":"97","power (hp)":"67","weight (lb)":"1985","0-60 mph (s)":"16.4","year":"77"},{"name":"Subaru DL","economy (mpg)":"33.8","cylinders":"4","displacement (cc)":"97","power (hp)":"67","weight (lb)":"2145","0-60 mph (s)":"18","year":"80"},{"name":"Subaru","economy (mpg)":"26","cylinders":"4","displacement (cc)":"108","power (hp)":"93","weight (lb)":"2391","0-60 mph (s)":"15.5","year":"74"},{"name":"Subaru","economy (mpg)":"32.3","cylinders":"4","displacement (cc)":"97","power (hp)":"67","weight (lb)":"2065","0-60 mph (s)":"17.8","year":"81"},{"name":"Toyota Carina","economy (mpg)":"20","cylinders":"4","displacement (cc)":"97","power (hp)":"88","weight (lb)":"2279","0-60 mph (s)":"19","year":"73"},{"name":"Toyota Celica GT Liftback","economy (mpg)":"21.1","cylinders":"4","displacement (cc)":"134","power (hp)":"95","weight (lb)":"2515","0-60 mph (s)":"14.8","year":"78"},{"name":"Toyota Celica GT","economy (mpg)":"32","cylinders":"4","displacement (cc)":"144","power (hp)":"96","weight (lb)":"2665","0-60 mph (s)":"13.9","year":"82"},{"name":"Toyota Corolla 1200","economy (mpg)":"31","cylinders":"4","displacement (cc)":"71","power (hp)":"65","weight (lb)":"1773","0-60 mph (s)":"19","year":"71"},{"name":"Toyota Corolla 1200","economy (mpg)":"32","cylinders":"4","displacement (cc)":"71","power (hp)":"65","weight (lb)":"1836","0-60 mph (s)":"21","year":"74"},{"name":"Toyota Corolla 1600 (Wagon)","economy (mpg)":"27","cylinders":"4","displacement (cc)":"97","power (hp)":"88","weight (lb)":"2100","0-60 mph (s)":"16.5","year":"72"},{"name":"Toyota Corolla Liftback","economy (mpg)":"26","cylinders":"4","displacement (cc)":"97","power (hp)":"75","weight (lb)":"2265","0-60 mph (s)":"18.2","year":"77"},{"name":"Toyota Corolla Tercel","economy (mpg)":"38.1","cylinders":"4","displacement (cc)":"89","power (hp)":"60","weight (lb)":"1968","0-60 mph (s)":"18.8","year":"80"},{"name":"Toyota Corolla","economy (mpg)":"28","cylinders":"4","displacement (cc)":"97","power (hp)":"75","weight (lb)":"2155","0-60 mph (s)":"16.4","year":"76"},{"name":"Toyota Corolla","economy (mpg)":"29","cylinders":"4","displacement (cc)":"97","power (hp)":"75","weight (lb)":"2171","0-60 mph (s)":"16","year":"75"},{"name":"Toyota Corolla","economy (mpg)":"32.2","cylinders":"4","displacement (cc)":"108","power (hp)":"75","weight (lb)":"2265","0-60 mph (s)":"15.2","year":"80"},{"name":"Toyota Corolla","economy (mpg)":"32.4","cylinders":"4","displacement (cc)":"108","power (hp)":"75","weight (lb)":"2350","0-60 mph (s)":"16.8","year":"81"},{"name":"Toyota Corolla","economy (mpg)":"34","cylinders":"4","displacement (cc)":"108","power (hp)":"70","weight (lb)":"2245","0-60 mph (s)":"16.9","year":"82"},{"name":"Toyota Corona Hardtop","economy (mpg)":"24","cylinders":"4","displacement (cc)":"113","power (hp)":"95","weight (lb)":"2278","0-60 mph (s)":"15.5","year":"72"},{"name":"Toyota Corona Liftback","economy (mpg)":"29.8","cylinders":"4","displacement (cc)":"134","power (hp)":"90","weight (lb)":"2711","0-60 mph (s)":"15.5","year":"80"},{"name":"Toyota Corona Mark II","economy (mpg)":"24","cylinders":"4","displacement (cc)":"113","power (hp)":"95","weight (lb)":"2372","0-60 mph (s)":"15","year":"70"},{"name":"Toyota Corona","economy (mpg)":"24","cylinders":"4","displacement (cc)":"134","power (hp)":"96","weight (lb)":"2702","0-60 mph (s)":"13.5","year":"75"},{"name":"Toyota Corona","economy (mpg)":"25","cylinders":"4","displacement (cc)":"113","power (hp)":"95","weight (lb)":"2228","0-60 mph (s)":"14","year":"71"},{"name":"Toyota Corona","economy (mpg)":"27.5","cylinders":"4","displacement (cc)":"134","power (hp)":"95","weight (lb)":"2560","0-60 mph (s)":"14.2","year":"78"},{"name":"Toyota Corona","economy (mpg)":"31","cylinders":"4","displacement (cc)":"76","power (hp)":"52","weight (lb)":"1649","0-60 mph (s)":"16.5","year":"74"},{"name":"Toyota Cressida","economy (mpg)":"25.4","cylinders":"6","displacement (cc)":"168","power (hp)":"116","weight (lb)":"2900","0-60 mph (s)":"12.6","year":"81"},{"name":"Toyota Mark II","economy (mpg)":"19","cylinders":"6","displacement (cc)":"156","power (hp)":"108","weight (lb)":"2930","0-60 mph (s)":"15.5","year":"76"},{"name":"Toyota Mark II","economy (mpg)":"20","cylinders":"6","displacement (cc)":"156","power (hp)":"122","weight (lb)":"2807","0-60 mph (s)":"13.5","year":"73"},{"name":"Toyota Starlet","economy (mpg)":"39.1","cylinders":"4","displacement (cc)":"79","power (hp)":"58","weight (lb)":"1755","0-60 mph (s)":"16.9","year":"81"},{"name":"Toyota Tercel","economy (mpg)":"37.7","cylinders":"4","displacement (cc)":"89","power (hp)":"62","weight (lb)":"2050","0-60 mph (s)":"17.3","year":"81"},{"name":"Toyouta Corona Mark II (Wagon)","economy (mpg)":"23","cylinders":"4","displacement (cc)":"120","power (hp)":"97","weight (lb)":"2506","0-60 mph (s)":"14.5","year":"72"},{"name":"Triumph TR7 Coupe","economy (mpg)":"35","cylinders":"4","displacement (cc)":"122","power (hp)":"88","weight (lb)":"2500","0-60 mph (s)":"15.1","year":"80"},{"name":"Vokswagen Rabbit","economy (mpg)":"29.8","cylinders":"4","displacement (cc)":"89","power (hp)":"62","weight (lb)":"1845","0-60 mph (s)":"15.3","year":"80"},{"name":"Volkswagen 1131 Deluxe Sedan","economy (mpg)":"26","cylinders":"4","displacement (cc)":"97","power (hp)":"46","weight (lb)":"1835","0-60 mph (s)":"20.5","year":"70"},{"name":"Volkswagen 411 (Wagon)","economy (mpg)":"22","cylinders":"4","displacement (cc)":"121","power (hp)":"76","weight (lb)":"2511","0-60 mph (s)":"18","year":"72"},{"name":"Volkswagen Dasher (Diesel)","economy (mpg)":"43.4","cylinders":"4","displacement (cc)":"90","power (hp)":"48","weight (lb)":"2335","0-60 mph (s)":"23.7","year":"80"},{"name":"Volkswagen Dasher","economy (mpg)":"25","cylinders":"4","displacement (cc)":"90","power (hp)":"71","weight (lb)":"2223","0-60 mph (s)":"16.5","year":"75"},{"name":"Volkswagen Dasher","economy (mpg)":"26","cylinders":"4","displacement (cc)":"79","power (hp)":"67","weight (lb)":"1963","0-60 mph (s)":"15.5","year":"74"},{"name":"Volkswagen Dasher","economy (mpg)":"30.5","cylinders":"4","displacement (cc)":"97","power (hp)":"78","weight (lb)":"2190","0-60 mph (s)":"14.1","year":"77"},{"name":"Volkswagen Jetta","economy (mpg)":"33","cylinders":"4","displacement (cc)":"105","power (hp)":"74","weight (lb)":"2190","0-60 mph (s)":"14.2","year":"81"},{"name":"Volkswagen Model 111","economy (mpg)":"27","cylinders":"4","displacement (cc)":"97","power (hp)":"60","weight (lb)":"1834","0-60 mph (s)":"19","year":"71"},{"name":"Volkswagen Pickup","economy (mpg)":"44","cylinders":"4","displacement (cc)":"97","power (hp)":"52","weight (lb)":"2130","0-60 mph (s)":"24.6","year":"82"},{"name":"Volkswagen Rabbit C (Diesel)","economy (mpg)":"44.3","cylinders":"4","displacement (cc)":"90","power (hp)":"48","weight (lb)":"2085","0-60 mph (s)":"21.7","year":"80"},{"name":"Volkswagen Rabbit Custom Diesel","economy (mpg)":"43.1","cylinders":"4","displacement (cc)":"90","power (hp)":"48","weight (lb)":"1985","0-60 mph (s)":"21.5","year":"78"},{"name":"Volkswagen Rabbit Custom","economy (mpg)":"29","cylinders":"4","displacement (cc)":"97","power (hp)":"78","weight (lb)":"1940","0-60 mph (s)":"14.5","year":"77"},{"name":"Volkswagen Rabbit Custom","economy (mpg)":"31.9","cylinders":"4","displacement (cc)":"89","power (hp)":"71","weight (lb)":"1925","0-60 mph (s)":"14","year":"79"},{"name":"Volkswagen Rabbit L","economy (mpg)":"36","cylinders":"4","displacement (cc)":"105","power (hp)":"74","weight (lb)":"1980","0-60 mph (s)":"15.3","year":"82"},{"name":"Volkswagen Rabbit","economy (mpg)":"29","cylinders":"4","displacement (cc)":"90","power (hp)":"70","weight (lb)":"1937","0-60 mph (s)":"14","year":"75"},{"name":"Volkswagen Rabbit","economy (mpg)":"29","cylinders":"4","displacement (cc)":"90","power (hp)":"70","weight (lb)":"1937","0-60 mph (s)":"14.2","year":"76"},{"name":"Volkswagen Rabbit","economy (mpg)":"29.5","cylinders":"4","displacement (cc)":"97","power (hp)":"71","weight (lb)":"1825","0-60 mph (s)":"12.2","year":"76"},{"name":"Volkswagen Rabbit","economy (mpg)":"41.5","cylinders":"4","displacement (cc)":"98","power (hp)":"76","weight (lb)":"2144","0-60 mph (s)":"14.7","year":"80"},{"name":"Volkswagen Scirocco","economy (mpg)":"31.5","cylinders":"4","displacement (cc)":"89","power (hp)":"71","weight (lb)":"1990","0-60 mph (s)":"14.9","year":"78"},{"name":"Volkswagen Super Beetle 117","economy (mpg)":"","cylinders":"4","displacement (cc)":"97","power (hp)":"48","weight (lb)":"1978","0-60 mph (s)":"20","year":"71"},{"name":"Volkswagen Super Beetle","economy (mpg)":"26","cylinders":"4","displacement (cc)":"97","power (hp)":"46","weight (lb)":"1950","0-60 mph (s)":"21","year":"73"},{"name":"Volkswagen Type 3","economy (mpg)":"23","cylinders":"4","displacement (cc)":"97","power (hp)":"54","weight (lb)":"2254","0-60 mph (s)":"23.5","year":"72"},{"name":"Volvo 144EA","economy (mpg)":"19","cylinders":"4","displacement (cc)":"121","power (hp)":"112","weight (lb)":"2868","0-60 mph (s)":"15.5","year":"73"},{"name":"Volvo 145E (Wagon)","economy (mpg)":"18","cylinders":"4","displacement (cc)":"121","power (hp)":"112","weight (lb)":"2933","0-60 mph (s)":"14.5","year":"72"},{"name":"Volvo 244DL","economy (mpg)":"22","cylinders":"4","displacement (cc)":"121","power (hp)":"98","weight (lb)":"2945","0-60 mph (s)":"14.5","year":"75"},{"name":"Volvo 245","economy (mpg)":"20","cylinders":"4","displacement (cc)":"130","power (hp)":"102","weight (lb)":"3150","0-60 mph (s)":"15.7","year":"76"},{"name":"Volvo 264GL","economy (mpg)":"17","cylinders":"6","displacement (cc)":"163","power (hp)":"125","weight (lb)":"3140","0-60 mph (s)":"13.6","year":"78"},{"name":"Volvo Diesel","economy (mpg)":"30.7","cylinders":"6","displacement (cc)":"145","power (hp)":"76","weight (lb)":"3160","0-60 mph (s)":"19.6","year":"81"}];

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

/***/ "b009":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vSfk");


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "d9oP":
/***/ (function(module) {

module.exports = {"nodes":[{"name":"Agricultural 'waste'"},{"name":"Bio-conversion"},{"name":"Liquid"},{"name":"Losses"},{"name":"Solid"},{"name":"Gas"},{"name":"Biofuel imports"},{"name":"Biomass imports"},{"name":"Coal imports"},{"name":"Coal"},{"name":"Coal reserves"},{"name":"District heating"},{"name":"Industry"},{"name":"Heating and cooling - commercial"},{"name":"Heating and cooling - homes"},{"name":"Electricity grid"},{"name":"Over generation / exports"},{"name":"H2 conversion"},{"name":"Road transport"},{"name":"Agriculture"},{"name":"Rail transport"},{"name":"Lighting & appliances - commercial"},{"name":"Lighting & appliances - homes"},{"name":"Gas imports"},{"name":"Ngas"},{"name":"Gas reserves"},{"name":"Thermal generation"},{"name":"Geothermal"},{"name":"H2"},{"name":"Hydro"},{"name":"International shipping"},{"name":"Domestic aviation"},{"name":"International aviation"},{"name":"National navigation"},{"name":"Marine algae"},{"name":"Nuclear"},{"name":"Oil imports"},{"name":"Oil"},{"name":"Oil reserves"},{"name":"Other waste"},{"name":"Pumped heat"},{"name":"Solar PV"},{"name":"Solar Thermal"},{"name":"Solar"},{"name":"Tidal"},{"name":"UK land based bioenergy"},{"name":"Wave"},{"name":"Wind"}],"links":[{"source":0,"target":1,"value":124.729},{"source":1,"target":2,"value":0.597},{"source":1,"target":3,"value":26.862},{"source":1,"target":4,"value":280.322},{"source":1,"target":5,"value":81.144},{"source":6,"target":2,"value":35},{"source":7,"target":4,"value":35},{"source":8,"target":9,"value":11.606},{"source":10,"target":9,"value":63.965},{"source":9,"target":4,"value":75.571},{"source":11,"target":12,"value":10.639},{"source":11,"target":13,"value":22.505},{"source":11,"target":14,"value":46.184},{"source":15,"target":16,"value":104.453},{"source":15,"target":14,"value":113.726},{"source":15,"target":17,"value":27.14},{"source":15,"target":12,"value":342.165},{"source":15,"target":18,"value":37.797},{"source":15,"target":19,"value":4.412},{"source":15,"target":13,"value":40.858},{"source":15,"target":3,"value":56.691},{"source":15,"target":20,"value":7.863},{"source":15,"target":21,"value":90.008},{"source":15,"target":22,"value":93.494},{"source":23,"target":24,"value":40.719},{"source":25,"target":24,"value":82.233},{"source":5,"target":13,"value":0.129},{"source":5,"target":3,"value":1.401},{"source":5,"target":26,"value":151.891},{"source":5,"target":19,"value":2.096},{"source":5,"target":12,"value":48.58},{"source":27,"target":15,"value":7.013},{"source":17,"target":28,"value":20.897},{"source":17,"target":3,"value":6.242},{"source":28,"target":18,"value":20.897},{"source":29,"target":15,"value":6.995},{"source":2,"target":12,"value":121.066},{"source":2,"target":30,"value":128.69},{"source":2,"target":18,"value":135.835},{"source":2,"target":31,"value":14.458},{"source":2,"target":32,"value":206.267},{"source":2,"target":19,"value":3.64},{"source":2,"target":33,"value":33.218},{"source":2,"target":20,"value":4.413},{"source":34,"target":1,"value":4.375},{"source":24,"target":5,"value":122.952},{"source":35,"target":26,"value":839.978},{"source":36,"target":37,"value":504.287},{"source":38,"target":37,"value":107.703},{"source":37,"target":2,"value":611.99},{"source":39,"target":4,"value":56.587},{"source":39,"target":1,"value":77.81},{"source":40,"target":14,"value":193.026},{"source":40,"target":13,"value":70.672},{"source":41,"target":15,"value":59.901},{"source":42,"target":14,"value":19.263},{"source":43,"target":42,"value":19.263},{"source":43,"target":41,"value":59.901},{"source":4,"target":19,"value":0.882},{"source":4,"target":26,"value":400.12},{"source":4,"target":12,"value":46.477},{"source":26,"target":15,"value":525.531},{"source":26,"target":3,"value":787.129},{"source":26,"target":11,"value":79.329},{"source":44,"target":15,"value":9.452},{"source":45,"target":1,"value":182.01},{"source":46,"target":15,"value":19.013},{"source":47,"target":15,"value":289.366}]};

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

/***/ "e+d2":
/***/ (function(module, exports) {

module.exports = require("react-vis/dist/plot/hint");

/***/ }),

/***/ "eZPE":
/***/ (function(module, exports) {

module.exports = require("d3-shape");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gQze":
/***/ (function(module, exports) {

module.exports = require("react-vis/dist/radar-chart");

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

/***/ "oOBo":
/***/ (function(module, exports) {

module.exports = require("react-vis/dist/plot/gradient-defs");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pfeL":
/***/ (function(module, exports) {

module.exports = require("react-vis/dist/legends/searchable-discrete-color-legend");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "rfx9":
/***/ (function(module, exports) {

module.exports = require("react-vis/dist/sankey");

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

/***/ "sO1i":
/***/ (function(module, exports) {

module.exports = require("react-vis");

/***/ }),

/***/ "vSfk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./demos/vis/showcase-components/showcase-utils.js
var showcase_utils = __webpack_require__("0IK7");

// EXTERNAL MODULE: ./demos/vis/index.js + 102 modules
var vis = __webpack_require__("wR7h");

// CONCATENATED MODULE: ./demos/vis/showcase-sections/plots-showcase.js




var AreaChart = vis["a" /* showCase */].AreaChart,
    AreaChartElevated = vis["a" /* showCase */].AreaChartElevated,
    BarChart = vis["a" /* showCase */].BarChart,
    BigBaseBarChart = vis["a" /* showCase */].BigBaseBarChart,
    ClusteredStackedVerticalBarChart = vis["a" /* showCase */].ClusteredStackedVerticalBarChart,
    ContourSeriesExample = vis["a" /* showCase */].ContourSeriesExample,
    ComplexChart = vis["a" /* showCase */].ComplexChart,
    CustomScales = vis["a" /* showCase */].CustomScales,
    CustomSVGExample = vis["a" /* showCase */].CustomSVGExample,
    CustomSVGAllTheMarks = vis["a" /* showCase */].CustomSVGAllTheMarks,
    CustomSVGRootLevel = vis["a" /* showCase */].CustomSVGRootLevel,
    DifferenceChart = vis["a" /* showCase */].DifferenceChart,
    EmptyChart = vis["a" /* showCase */].EmptyChart,
    FauxScatterplotChart = vis["a" /* showCase */].FauxScatterplotChart,
    GridLinesChart = vis["a" /* showCase */].GridLinesChart,
    HeatmapChart = vis["a" /* showCase */].HeatmapChart,
    HexHeatmap = vis["a" /* showCase */].HexHeatmap,
    HexbinSizeExample = vis["a" /* showCase */].HexbinSizeExample,
    Histogram = vis["a" /* showCase */].Histogram,
    LabeledHeatmap = vis["a" /* showCase */].LabeledHeatmap,
    LineChart = vis["a" /* showCase */].LineChart,
    LineChartManyColors = vis["a" /* showCase */].LineChartManyColors,
    LineChartWithStyle = vis["a" /* showCase */].LineChartWithStyle,
    LineChartCanvas = vis["a" /* showCase */].LineChartCanvas,
    LineSeriesCanvasNearestXYExample = vis["a" /* showCase */].LineSeriesCanvasNearestXYExample,
    LineMarkChart = vis["a" /* showCase */].LineMarkChart,
    MixedStackedChart = vis["a" /* showCase */].MixedStackedChart,
    StackedVerticalBarChart = vis["a" /* showCase */].StackedVerticalBarChart,
    StackedHorizontalBarChart = vis["a" /* showCase */].StackedHorizontalBarChart,
    StackedHistogram = vis["a" /* showCase */].StackedHistogram,
    ScatterplotChart = vis["a" /* showCase */].ScatterplotChart,
    ScatterplotCanvas = vis["a" /* showCase */].ScatterplotCanvas,
    WhiskerChart = vis["a" /* showCase */].WhiskerChart,
    WidthHeightMarginChart = vis["a" /* showCase */].WidthHeightMarginChart;
var PLOTS = [{
  component: LineChart,
  componentName: 'LineChart',
  name: 'Line Series',
  sourceLink: 'https://github.com/uber/react-vis/blob/master/src/plot/series/line-series.js',
  docsLink: 'http://uber.github.io/react-vis/documentation/series-reference/line-series'
}, {
  component: LineChartWithStyle,
  componentName: 'LineChartWithStyle',
  name: 'Line Series with style',
  sourceLink: 'https://github.com/uber/react-vis/blob/master/src/plot/series/line-series.js',
  docsLink: 'http://uber.github.io/react-vis/documentation/series-reference/line-series'
}, {
  component: LineMarkChart,
  componentName: 'LineMarkChart',
  name: 'LineMark Series',
  sourceLink: 'https://github.com/uber/react-vis/blob/master/src/plot/series/line-mark-series.js',
  docsLink: 'http://uber.github.io/react-vis/documentation/series-reference/line-mark-series'
}, {
  component: LineChartCanvas,
  componentName: 'LineChartCanvas',
  name: 'Line Chart Canvas'
}, {
  component: LineSeriesCanvasNearestXYExample,
  componentName: 'LineSeriesCanvasNearestXYExample',
  name: 'Line Series Canvas'
}, {
  component: LineChartManyColors,
  componentName: 'LineChartManyColors',
  name: 'Line Series With Many Colors'
}, {
  component: ScatterplotChart,
  componentName: 'ScatterplotChart',
  name: 'Mark Series',
  sourceLink: 'https://github.com/uber/react-vis/blob/master/src/plot/series/mark-series.js',
  docsLink: 'http://uber.github.io/react-vis/documentation/series-reference/mark-series'
}, {
  component: ScatterplotCanvas,
  componentName: 'ScatterplotCanvas',
  name: 'Mark Series Canvas'
}, {
  component: WhiskerChart,
  componentName: 'WhiskerChart',
  name: 'Whisker Series',
  sourceLink: 'https://github.com/uber/react-vis/blob/master/src/plot/series/whisker-series.js',
  docsLink: 'http://uber.github.io/react-vis/documentation/series-reference/whisker-series'
}, {
  component: AreaChart,
  componentName: 'AreaChart',
  name: 'Area Series',
  sourceLink: 'https://github.com/uber/react-vis/blob/master/src/plot/series/area-series.js'
}, {
  component: AreaChartElevated,
  componentName: 'AreaChartElevated',
  name: 'Area Series With vertical offset',
  sourceLink: 'http://uber.github.io/react-vis/documentation/series-reference/area-series'
}, {
  component: BarChart,
  componentName: 'BarChart',
  name: 'Bar Series',
  sourceLink: 'https://github.com/uber/react-vis/blob/master/src/plot/series/bar-series.js',
  docsLink: 'http://uber.github.io/react-vis/documentation/series-reference/bar-series'
}, {
  component: BigBaseBarChart,
  componentName: 'BigBaseBarChart',
  name: 'Big Base Bar Series'
}, {
  component: DifferenceChart,
  componentName: 'DifferenceChart',
  name: 'Difference Bar Series'
}, {
  name: 'Stacked Horizontal Bar Series',
  component: StackedHorizontalBarChart,
  componentName: 'StackedHorizontalBarChart'
}, {
  name: 'Stacked Vertical Bar Series',
  component: StackedVerticalBarChart,
  componentName: 'StackedVerticalBarChart'
}, {
  name: 'Mixed Stacked Series',
  component: MixedStackedChart
}, {
  name: 'Clustered Stacked Vertical Bar Series',
  component: ClusteredStackedVerticalBarChart,
  componentName: 'ClusteredStackedVerticalBarChart'
}, {
  name: 'Stacked Vertical Rect Series (histogram)',
  component: StackedHistogram,
  componentName: 'StackedHistogram'
}, {
  name: 'Horizontal Rect Series',
  component: Histogram,
  componentName: 'Histogram'
}, {
  name: 'Heatmap Series',
  component: HeatmapChart,
  componentName: 'HeatmapChart',
  sourceLink: 'https://github.com/uber/react-vis/blob/master/src/plot/series/heatmap-series.js',
  docsLink: 'http://uber.github.io/react-vis/documentation/series-reference/heatmap-series'
}, {
  name: 'Hexbin Series',
  component: HexHeatmap,
  componentName: 'HexHeatmap',
  sourceLink: 'https://github.com/uber/react-vis/blob/master/src/plot/series/hexbin-series.js',
  docsLink: 'http://uber.github.io/react-vis/documentation/series-reference/hexbin-series'
}, {
  name: 'Hexbin Size',
  component: HexbinSizeExample,
  componentName: 'HexbinSizeExample'
}, {
  name: 'Labeled Heatmap',
  component: LabeledHeatmap,
  componentName: 'LabeledHeatmap',
  sourceLink: 'https://github.com/uber/react-vis/blob/master/src/plot/series/heatmap-series.js'
}, {
  name: 'Contour Series',
  component: ContourSeriesExample,
  componentName: 'ContourSeriesExample'
}, {
  name: 'Custom SVG Series',
  component: CustomSVGExample,
  componentName: 'CustomSVGExample'
}, {
  name: 'Custom SVG - All The Marks (with tooltips)',
  component: CustomSVGAllTheMarks,
  componentName: 'CustomSVGAllTheMarks'
}, {
  name: 'Custom SVG - Root Level Function Definition',
  component: CustomSVGRootLevel,
  componentName: 'CustomSVGRootLevel'
}];
var BASIC_COMPONENTS = [{
  name: 'Custom Size and Margin',
  component: WidthHeightMarginChart,
  componentName: 'WidthHeightMarginChart'
}, {
  name: 'Custom scales',
  component: CustomScales,
  componentName: 'CustomScales'
}, {
  name: 'Custom GridLines',
  component: GridLinesChart,
  componentName: 'GridLinesChart'
}, {
  name: 'Circular Gridlines',
  component: FauxScatterplotChart,
  componentName: 'FauxScatterplotChart',
  sourceLink: 'https://github.com/uber/react-vis/blob/master/src/plot/circular-grid-lines.js',
  docsLink: 'http://uber.github.io/react-vis/documentation/api-reference/grids'
}];

function PlotsShowcase(props) {
  var forExample = props.forExample;
  return external_react_default.a.createElement("article", {
    id: "plots"
  }, !forExample && external_react_default.a.createElement(external_antd_["Card"], {
    className: "mb-4",
    title: "Plots"
  }, external_react_default.a.createElement(ComplexChart, null)), external_react_default.a.createElement(external_antd_["Row"], {
    type: "flex",
    align: "top",
    gutter: 16
  }, PLOTS.map(showcase_utils["b" /* mapSection */])), external_react_default.a.createElement(external_antd_["Row"], {
    type: "flex",
    align: "top",
    gutter: 16
  }, BASIC_COMPONENTS.map(showcase_utils["b" /* mapSection */])));
}

/* harmony default export */ var plots_showcase = (PlotsShowcase);
// CONCATENATED MODULE: ./pages/charts/plots.js




var plots_PlotPage = function PlotPage() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/react-vis.css"
  })), external_react_default.a.createElement(plots_showcase, null));
};

/* harmony default export */ var plots = __webpack_exports__["default"] = (plots_PlotPage);

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

/***/ "wR7h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("dfwq");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: external "react-vis/dist/theme"
var theme_ = __webpack_require__("Bb8b");

// EXTERNAL MODULE: external "react-vis"
var external_react_vis_ = __webpack_require__("sO1i");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./demos/vis/color/mini-color-examples.js



// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



var colors = ['#cd3b54', '#59b953', '#ba4fb9', '#99b53e', '#7f61d3', '#c9a83a', '#626dbc', '#e08b39', '#5ea0d8', '#cf4d2a', '#4fb79b', '#d24691', '#528240', '#c388d2', '#80742b', '#9c4a6d', '#caaa70', '#e0829f', '#9d5d30', '#dc7666'];
var mini_color_examples_data = {
  noColor: [],
  categoryColorAtSeriesLevel: [],
  literalColorAtSeriesLevel: [],
  linearColorAtSeriesLevel: [],
  literalColorAtMarkLevel: [],
  linearColorAtMarkLevel: [],
  categoryColorAtMarkLevel: []
};

for (var mini_color_examples_i = 0; mini_color_examples_i < 3; mini_color_examples_i++) {
  var noColorSeries = [];
  var categoryColorSeries = [];
  var literalColorSeries = [];
  var linearColorSeries = [];

  for (var j = 0; j < 10; j++) {
    var datapoint = {
      x: j,
      y: Math.random() * 10
    };

    var categoryDatapoint = Object(objectSpread["a" /* default */])({}, datapoint, {
      color: Math.floor(Math.random() * 20)
    });

    var linearDatapoint = Object(objectSpread["a" /* default */])({}, datapoint, {
      color: Math.random() * 10
    });

    var literalDatapoint = Object(objectSpread["a" /* default */])({}, datapoint, {
      color: colors[Math.floor(Math.random() * 20)]
    });

    noColorSeries.push(datapoint);
    categoryColorSeries.push(categoryDatapoint);
    literalColorSeries.push(literalDatapoint);
    linearColorSeries.push(linearDatapoint);
  }

  mini_color_examples_data.noColor.push({
    key: mini_color_examples_i,
    data: noColorSeries
  });
  mini_color_examples_data.categoryColorAtSeriesLevel.push({
    key: mini_color_examples_i,
    data: noColorSeries,
    color: mini_color_examples_i
  });
  mini_color_examples_data.literalColorAtSeriesLevel.push({
    key: mini_color_examples_i,
    data: noColorSeries,
    color: colors[mini_color_examples_i]
  });
  mini_color_examples_data.linearColorAtSeriesLevel.push({
    key: mini_color_examples_i,
    data: noColorSeries,
    color: Math.floor(Math.random() * 20)
  });
  mini_color_examples_data.literalColorAtMarkLevel.push({
    key: mini_color_examples_i,
    data: literalColorSeries
  });
  mini_color_examples_data.linearColorAtMarkLevel.push({
    key: mini_color_examples_i,
    data: linearColorSeries
  });
  mini_color_examples_data.categoryColorAtMarkLevel.push({
    key: mini_color_examples_i,
    data: categoryColorSeries
  });
}

var defaultXYPlotProps = {
  width: 200,
  height: 200,
  xDomain: [-0.5, 9.5],
  yDomain: [-0.5, 10.5],
  margin: {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5
  }
};
function SensibleDefaults() {
  return generateCharts(mini_color_examples_data.noColor);
}
function ColorInXYPlot() {
  return generateCharts(mini_color_examples_data.noColor, {
    color: 'red',
    stroke: 'red'
  });
}
function LiteralColorAtSeriesLevel() {
  return generateCharts(mini_color_examples_data.literalColorAtSeriesLevel);
}
function LinearColorAtSeriesLevel() {
  return generateCharts(mini_color_examples_data.linearColorAtSeriesLevel, {
    colorType: 'linear',
    colorDomain: [0, 9],
    colorRange: theme_["CONTINUOUS_COLOR_RANGE"]
  });
}
function CategoryColorAtSeriesLevel() {
  return generateCharts(mini_color_examples_data.categoryColorAtSeriesLevel, {
    colorType: 'category',
    colorDomain: [0, 1, 2],
    colorRange: theme_["EXTENDED_DISCRETE_COLOR_RANGE"]
  });
}
function LiteralColorAtMarkLevel() {
  return generateCharts(mini_color_examples_data.literalColorAtMarkLevel, {
    colorType: 'literal'
  });
}
function CategoryColorAtMarkLevel() {
  return generateCharts(mini_color_examples_data.categoryColorAtMarkLevel, {
    colorType: 'category'
  });
}
function CategoryColorAtMarkLevelCustomPalette() {
  return generateCharts(mini_color_examples_data.categoryColorAtMarkLevel, {
    colorType: 'category',
    colorRange: colors
  });
}
function CategoryColorAtMarkLevelFixedStroke() {
  return generateCharts(mini_color_examples_data.categoryColorAtMarkLevel, {
    colorType: 'category',
    stroke: '#f70'
  });
}
function LinearColorAtMarkLevelNoPalette() {
  return generateCharts(mini_color_examples_data.linearColorAtMarkLevel);
}
function LinearColorAtMarkLevel() {
  return generateCharts(mini_color_examples_data.linearColorAtMarkLevel, {
    colorRange: ['#c7e9c0', '#00441b']
  });
}
function LineSeriesMarkSeries() {
  return external_react_default.a.createElement(external_react_vis_["XYPlot"], Object(esm_extends["a" /* default */])({}, defaultXYPlotProps, {
    width: 600
  }), mini_color_examples_data.noColor.map(function (d, i) {
    return external_react_default.a.createElement(external_react_vis_["LineSeries"], Object(esm_extends["a" /* default */])({}, d, {
      key: i,
      color: theme_["DISCRETE_COLOR_RANGE"][i]
    }));
  }), mini_color_examples_data.noColor.map(function (d, i) {
    return external_react_default.a.createElement(external_react_vis_["MarkSeries"], Object(esm_extends["a" /* default */])({}, d, {
      key: i,
      color: theme_["DISCRETE_COLOR_RANGE"][i],
      stroke: "white"
    }));
  }));
}
function GradientCharts() {
  var gradient = external_react_default.a.createElement(external_react_vis_["GradientDefs"], null, external_react_default.a.createElement("linearGradient", {
    id: "myGradient",
    gradientUnits: "userSpaceOnUse",
    x1: "0",
    y1: "0",
    x2: "200",
    y2: "200"
  }, external_react_default.a.createElement("stop", {
    offset: "10%",
    stopColor: "#c6e48b"
  }), external_react_default.a.createElement("stop", {
    offset: "33%",
    stopColor: "#7bc96f"
  }), external_react_default.a.createElement("stop", {
    offset: "66%",
    stopColor: "#239a3b"
  }), external_react_default.a.createElement("stop", {
    offset: "90%",
    stopColor: "#196127"
  })));
  return external_react_default.a.createElement("div", {
    style: {
      display: 'flex'
    }
  }, external_react_default.a.createElement(external_react_vis_["XYPlot"], defaultXYPlotProps, gradient, external_react_default.a.createElement(external_react_vis_["VerticalBarSeries"], Object(esm_extends["a" /* default */])({}, mini_color_examples_data.noColor[0], {
    color: 'url(#myGradient)'
  }))), external_react_default.a.createElement(external_react_vis_["XYPlot"], defaultXYPlotProps, gradient, external_react_default.a.createElement(external_react_vis_["LineSeries"], Object(esm_extends["a" /* default */])({}, mini_color_examples_data.noColor[0], {
    color: 'url(#myGradient)'
  }))), external_react_default.a.createElement(external_react_vis_["XYPlot"], defaultXYPlotProps, gradient, external_react_default.a.createElement(external_react_vis_["MarkSeries"], Object(esm_extends["a" /* default */])({}, mini_color_examples_data.noColor[0], {
    color: 'url(#myGradient)'
  }))));
}
function ColorSpecificity() {
  var accentColor = '#FF9833';

  var seventhElementColored = Object(toConsumableArray["a" /* default */])(mini_color_examples_data.noColor[2].data);

  seventhElementColored[6].color = accentColor;
  return external_react_default.a.createElement("div", {
    style: {
      display: 'flex'
    }
  }, external_react_default.a.createElement(external_react_vis_["XYPlot"], Object(esm_extends["a" /* default */])({}, defaultXYPlotProps, {
    color: "#12939A",
    colorType: "literal"
  }), external_react_default.a.createElement(external_react_vis_["VerticalBarSeries"], {
    data: seventhElementColored
  })), external_react_default.a.createElement(external_react_vis_["XYPlot"], Object(esm_extends["a" /* default */])({}, defaultXYPlotProps, {
    stroke: "#e5e5e5",
    strokeType: "literal"
  }), external_react_default.a.createElement(external_react_vis_["LineSeries"], mini_color_examples_data.noColor[0]), external_react_default.a.createElement(external_react_vis_["LineSeries"], mini_color_examples_data.noColor[1]), external_react_default.a.createElement(external_react_vis_["LineSeries"], Object(esm_extends["a" /* default */])({}, mini_color_examples_data.noColor[2], {
    stroke: accentColor
  }))), external_react_default.a.createElement(external_react_vis_["XYPlot"], Object(esm_extends["a" /* default */])({}, defaultXYPlotProps, {
    color: "#12939A",
    colorType: "literal",
    stroke: "white"
  }), external_react_default.a.createElement(external_react_vis_["MarkSeries"], mini_color_examples_data.noColor[0]), external_react_default.a.createElement(external_react_vis_["MarkSeries"], mini_color_examples_data.noColor[1]), external_react_default.a.createElement(external_react_vis_["MarkSeries"], {
    data: seventhElementColored,
    color: "#4fb79b"
  })));
}
function ReactVis5() {
  return generatePalette(theme_["DISCRETE_COLOR_RANGE"]);
}
function ReactVis20() {
  return generatePalette(theme_["EXTENDED_DISCRETE_COLOR_RANGE"]);
}
function Continuous() {
  return generatePalette(theme_["CONTINUOUS_COLOR_RANGE"]);
}
function CustomPalette() {
  return generatePalette(colors);
}

function generatePalette(range) {
  return external_react_default.a.createElement("div", {
    style: {
      display: 'flex',
      maxWidth: 700,
      flexWrap: 'wrap'
    }
  }, range.map(function (d, i) {
    return external_react_default.a.createElement("div", {
      key: i,
      style: {
        background: d,
        width: 80,
        height: 80,
        borderRadius: 5,
        margin: 10,
        position: 'relative'
      }
    }, external_react_default.a.createElement("div", {
      className: "color-box",
      style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        textShadow: 'white 1px 1px',
        transform: 'translate(-50%, -50%)'
      }
    }, d));
  }));
}

function generateCharts(seriesData, props) {
  return external_react_default.a.createElement("div", {
    style: {
      display: 'flex'
    }
  }, [external_react_vis_["VerticalBarSeries"], external_react_vis_["LineSeries"], external_react_vis_["MarkSeries"]].map(function (Type, key) {
    return external_react_default.a.createElement(external_react_vis_["XYPlot"], Object(esm_extends["a" /* default */])({
      key: key
    }, defaultXYPlotProps, props), seriesData.map(function (d, i) {
      return external_react_default.a.createElement(Type, d);
    }));
  }));
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

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

// CONCATENATED MODULE: ./demos/vis/interaction/interaction-examples.js











// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



var scatterPlotData = Object(toConsumableArray["a" /* default */])(Array(30).keys()).map(function () {
  return {
    x: Math.random() * 10,
    y: Math.random() * 10
  };
});

var lineData = Object(toConsumableArray["a" /* default */])(Array(3).keys()).map(function () {
  return Object(toConsumableArray["a" /* default */])(Array(10).keys()).map(function (x) {
    return {
      x: x,
      y: Math.random() * 10
    };
  });
});

var allData = lineData.reduce(function (prev, curr, i) {
  return [].concat(Object(toConsumableArray["a" /* default */])(prev), Object(toConsumableArray["a" /* default */])(curr.map(function (d) {
    return Object(objectSpread["a" /* default */])({}, d, {
      seriesNb: i
    });
  })));
}, []);
var defaultProps = {
  width: 400,
  height: 200,
  margin: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5
  }
};
var interaction_examples_ScatterPlotOnNearestXY =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(ScatterPlotOnNearestXY, _Component);

  function ScatterPlotOnNearestXY() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ScatterPlotOnNearestXY);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ScatterPlotOnNearestXY).call(this));
    _this.state = {
      index: null
    };
    return _this;
  }

  Object(createClass["a" /* default */])(ScatterPlotOnNearestXY, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var index = this.state.index;
      var data = scatterPlotData.map(function (d, i) {
        return Object(objectSpread["a" /* default */])({}, d, {
          color: i === index ? 1 : 0
        });
      });
      return external_react_default.a.createElement(external_react_vis_["XYPlot"], Object(esm_extends["a" /* default */])({}, defaultProps, {
        xDomain: [-0.5, 9.5],
        yDomain: [-0.5, 9.5],
        size: 5,
        colorDomain: [0, 1],
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            index: null
          });
        }
      }), external_react_default.a.createElement(external_react_vis_["MarkSeries"], {
        data: data,
        stroke: "white",
        onNearestXY: function onNearestXY(d, e) {
          return _this2.setState({
            index: e.index
          });
        }
      }));
    }
  }]);

  return ScatterPlotOnNearestXY;
}(external_react_["Component"]);
var interaction_examples_LineChartMouseOverSeries =
/*#__PURE__*/
function (_Component2) {
  Object(inherits["a" /* default */])(LineChartMouseOverSeries, _Component2);

  function LineChartMouseOverSeries() {
    var _this3;

    Object(classCallCheck["a" /* default */])(this, LineChartMouseOverSeries);

    _this3 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(LineChartMouseOverSeries).call(this));
    _this3.state = {
      index: null
    };
    return _this3;
  }

  Object(createClass["a" /* default */])(LineChartMouseOverSeries, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var index = this.state.index;
      return external_react_default.a.createElement(external_react_vis_["XYPlot"], Object(esm_extends["a" /* default */])({}, defaultProps, {
        onMouseLeave: function onMouseLeave() {
          return _this4.setState({
            index: null
          });
        }
      }), lineData.map(function (d, i) {
        return external_react_default.a.createElement(external_react_vis_["LineSeries"], {
          data: d,
          key: "".concat(i),
          stroke: i === index ? 'orange' : undefined
        });
      }), lineData.map(function (d, i) {
        return external_react_default.a.createElement(external_react_vis_["LineSeries"], {
          data: d,
          key: "".concat(i, "-mouseover"),
          onSeriesMouseOut: function onSeriesMouseOut() {
            return _this4.setState({
              index: null
            });
          },
          onSeriesMouseOver: function onSeriesMouseOver() {
            return _this4.setState({
              index: i
            });
          },
          strokeWidth: 10,
          stroke: index === i ? 'rgba(0,0,0,0.2)' : 'transparent'
        });
      }));
    }
  }]);

  return LineChartMouseOverSeries;
}(external_react_["Component"]);
var interaction_examples_LineChartMouseOverXY =
/*#__PURE__*/
function (_Component3) {
  Object(inherits["a" /* default */])(LineChartMouseOverXY, _Component3);

  function LineChartMouseOverXY() {
    var _this5;

    Object(classCallCheck["a" /* default */])(this, LineChartMouseOverXY);

    _this5 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(LineChartMouseOverXY).call(this));
    _this5.state = {
      highlightedSeries: null,
      pointUsed: null
    };
    return _this5;
  }

  Object(createClass["a" /* default */])(LineChartMouseOverXY, [{
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$state = this.state,
          pointUsed = _this$state.pointUsed,
          highlightedSeries = _this$state.highlightedSeries;
      var data = allData.map(function (d, i) {
        return Object(objectSpread["a" /* default */])({}, d, {
          color: i === pointUsed ? 'rgba(0,0,0,0.2)' : 'transparent'
        });
      });
      return external_react_default.a.createElement(external_react_vis_["XYPlot"], Object(esm_extends["a" /* default */])({}, defaultProps, {
        onMouseLeave: function onMouseLeave() {
          return _this6.setState({
            highlightedSeries: null,
            pointUsed: null
          });
        }
      }), lineData.map(function (d, i) {
        return external_react_default.a.createElement(external_react_vis_["LineSeries"], {
          data: d,
          key: "".concat(i),
          stroke: i === highlightedSeries ? 'orange' : undefined
        });
      }), external_react_default.a.createElement(external_react_vis_["MarkSeries"], {
        data: data,
        colorType: "literal",
        size: 10,
        onNearestXY: function onNearestXY(_ref, _ref2) {
          var seriesNb = _ref.seriesNb;
          var index = _ref2.index;
          return _this6.setState({
            highlightedSeries: seriesNb,
            pointUsed: index
          });
        }
      }));
    }
  }]);

  return LineChartMouseOverXY;
}(external_react_["Component"]);
var interaction_examples_LinkedCharts =
/*#__PURE__*/
function (_Component4) {
  Object(inherits["a" /* default */])(LinkedCharts, _Component4);

  function LinkedCharts() {
    var _this7;

    Object(classCallCheck["a" /* default */])(this, LinkedCharts);

    _this7 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(LinkedCharts).call(this));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this7), "handleMouseOver", function (index) {
      _this7.setState({
        index: index
      });
    });

    _this7.state = {
      index: null
    };
    return _this7;
  }

  Object(createClass["a" /* default */])(LinkedCharts, [{
    key: "render",
    value: function render() {
      var _this8 = this;

      var index = this.state.index;
      return external_react_default.a.createElement("div", null, lineData.map(function (d, i) {
        return external_react_default.a.createElement("div", {
          key: i
        }, external_react_default.a.createElement(LineChart, {
          data: d,
          index: index,
          handleMouseOver: _this8.handleMouseOver
        }));
      }));
    }
  }]);

  return LinkedCharts;
}(external_react_["Component"]);

function LineChart(_ref3) {
  var data = _ref3.data,
      index = _ref3.index,
      handleMouseOver = _ref3.handleMouseOver;
  return external_react_default.a.createElement(external_react_vis_["XYPlot"], Object(esm_extends["a" /* default */])({}, defaultProps, {
    height: 80,
    yDomain: [0, 10],
    onMouseLeave: function onMouseLeave() {
      return handleMouseOver(null);
    }
  }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    data: data,
    onNearestX: function onNearestX(d, e) {
      return handleMouseOver(e.index);
    }
  }), index === null ? null : external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    data: [{
      x: index,
      y: 0
    }, {
      x: index,
      y: 10
    }],
    opacity: 0.5
  }), index === null ? null : external_react_default.a.createElement(external_react_vis_["MarkSeries"], {
    data: [data[index]],
    stroke: "white"
  }));
}
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// CONCATENATED MODULE: ./demos/vis/showcase-components/showcase-button.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


function ShowcaseButton(props) {
  var buttonContent = props.buttonContent,
      onClick = props.onClick;
  return external_react_default.a.createElement(external_antd_["Button"], {
    onClick: onClick,
    type: "default",
    size: "small"
  }, buttonContent);
}

/* harmony default export */ var showcase_button = (ShowcaseButton);
// CONCATENATED MODULE: ./demos/vis/parallel-coordinates/animated-parallel-coordinates.js









// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



var DATA = [{
  explosions: 7,
  wow: 10,
  dog: 8,
  sickMoves: 9,
  nice: 7
}];
var DOMAIN = [{
  name: 'nice',
  domain: [0, 100],
  tickFormat: function tickFormat(t) {
    return t;
  }
}, {
  name: 'explosions',
  domain: [6.9, 7.1]
}, {
  name: 'wow',
  domain: [0, 11]
}, {
  name: 'dog',
  domain: [0, 16]
}, {
  name: 'sickMoves',
  domain: [0, 20]
}];

function generateData() {
  return [keys_default()(DATA[0]).reduce(function (acc, key) {
    acc[key] = DATA[0][key] + 5 * (Math.random() - 0.5);
    return acc;
  }, {})];
}

var animated_parallel_coordinates_AnimatedParallelCoordinates =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(AnimatedParallelCoordinates, _Component);

  function AnimatedParallelCoordinates() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, AnimatedParallelCoordinates);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(AnimatedParallelCoordinates)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      data: DATA
    });

    return _this;
  }

  Object(createClass["a" /* default */])(AnimatedParallelCoordinates, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = this.state.data;
      return external_react_default.a.createElement("div", {
        className: "centered-and-flexed"
      }, external_react_default.a.createElement(external_react_vis_["ParallelCoordinates"], {
        animation: true,
        data: data,
        domains: DOMAIN,
        style: {
          lines: {
            strokeWidth: 3,
            strokeDasharray: '2, 2'
          },
          axes: {
            text: {
              opacity: 1
            }
          },
          labels: {
            textAnchor: 'right'
          }
        },
        margin: {
          left: 30,
          top: 30,
          bottom: 40,
          right: 50
        },
        tickFormat: function tickFormat(t) {
          return '';
        },
        width: 400,
        height: 300
      }), external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.setState({
            data: generateData()
          });
        },
        buttonContent: 'UPDATE DATA'
      }));
    }
  }]);

  return AnimatedParallelCoordinates;
}(external_react_["Component"]);


// EXTERNAL MODULE: external "react-vis/dist/plot/circular-grid-lines"
var circular_grid_lines_ = __webpack_require__("wuxH");
var circular_grid_lines_default = /*#__PURE__*/__webpack_require__.n(circular_grid_lines_);

// EXTERNAL MODULE: external "react-vis/dist/radar-chart"
var radar_chart_ = __webpack_require__("gQze");
var radar_chart_default = /*#__PURE__*/__webpack_require__.n(radar_chart_);

// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__("NC1Z");

// CONCATENATED MODULE: ./demos/vis/radar-chart/animated-radar-chart.js










// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.





var animated_radar_chart_DATA = [{
  explosions: 7,
  wow: 10,
  dog: 8,
  sickMoves: 9,
  nice: 7
}];
var animated_radar_chart_DOMAIN = [{
  name: 'nice',
  domain: [0, 100],
  tickFormat: function tickFormat(t) {
    return t;
  }
}, {
  name: 'explosions',
  domain: [6.9, 7.1]
}, {
  name: 'wow',
  domain: [0, 11]
}, {
  name: 'dog',
  domain: [0, 16]
}, {
  name: 'sickMoves',
  domain: [0, 20]
}];

function animated_radar_chart_generateData() {
  return [keys_default()(animated_radar_chart_DATA[0]).reduce(function (acc, key) {
    acc[key] = animated_radar_chart_DATA[0][key] + 5 * (Math.random() - 0.5);
    return acc;
  }, {})];
}

var animated_radar_chart_AnimatedRadar =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(AnimatedRadar, _Component);

  function AnimatedRadar() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, AnimatedRadar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(AnimatedRadar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      data: animated_radar_chart_DATA
    });

    return _this;
  }

  Object(createClass["a" /* default */])(AnimatedRadar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = this.state.data;
      return external_react_default.a.createElement("div", {
        className: "centered-and-flexed"
      }, external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.setState({
            data: animated_radar_chart_generateData()
          });
        },
        buttonContent: external_react_default.a.createElement(external_react_feather_["RefreshCcw"], {
          size: 14,
          strokeWidth: 1
        })
      }), external_react_default.a.createElement(radar_chart_default.a, {
        className: "m-auto",
        animation: true,
        data: data,
        domains: animated_radar_chart_DOMAIN,
        style: {
          polygons: {
            fillOpacity: 0,
            strokeWidth: 3
          },
          axes: {
            text: {
              opacity: 1
            }
          },
          labels: {
            textAnchor: 'middle'
          }
        },
        margin: {
          left: 30,
          top: 30,
          bottom: 40,
          right: 50
        },
        tickFormat: function tickFormat(t) {
          return '';
        },
        width: 400,
        height: 276
      }, external_react_default.a.createElement(circular_grid_lines_default.a, {
        tickValues: Object(toConsumableArray["a" /* default */])(new Array(10)).map(function (v, i) {
          return i / 10 - 1;
        })
      })));
    }
  }]);

  return AnimatedRadar;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./demos/vis/sunbursts/animated-sunburst.js









// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




function randomLeaf() {
  return {
    size: Math.random() * 1000,
    color: Math.random()
  };
}

function updateData() {
  var totalLeaves = Math.random() * 20;
  var leaves = [];

  for (var i = 0; i < totalLeaves; i++) {
    var leaf = randomLeaf();

    if (Math.random() > 0.8) {
      leaf.children = Object(toConsumableArray["a" /* default */])(new Array(3)).map(function () {
        return randomLeaf();
      });
    }

    leaves.push(leaf);
  }

  return {
    title: '',
    color: 1,
    children: leaves
  };
}

var DIVERGING_COLOR_SCALE = ['#007bff', '#52c41a', '#f5222d', '#faad14'];

var animated_sunburst_AnimatedSunburst =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(AnimatedSunburst, _React$Component);

  function AnimatedSunburst() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, AnimatedSunburst);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(AnimatedSunburst)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      data: updateData(),
      hovering: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(AnimatedSunburst, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          data = _this$state.data,
          hovering = _this$state.hovering;
      return external_react_default.a.createElement("div", {
        className: "animated-sunburst-example-wrapper text-center"
      }, external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.setState({
            data: updateData()
          });
        },
        buttonContent: external_react_default.a.createElement(external_react_feather_["RefreshCcw"], {
          size: 14,
          strokeWidth: 1
        })
      }), external_react_default.a.createElement(external_react_vis_["Sunburst"], {
        animation: {
          damping: 20,
          stiffness: 300
        },
        data: data,
        colorType: 'category',
        className: "m-auto",
        colorRange: DIVERGING_COLOR_SCALE,
        style: {
          stroke: '#fff'
        },
        onValueMouseOver: function onValueMouseOver() {
          return _this2.setState({
            hovering: true
          });
        },
        onValueMouseOut: function onValueMouseOut() {
          return _this2.setState({
            hovering: false
          });
        },
        height: 276,
        width: 350
      }));
    }
  }]);

  return AnimatedSunburst;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/misc/animation-example.js









// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




var Option = external_antd_["Select"].Option;

function animation_example_generateData() {
  return Object(toConsumableArray["a" /* default */])(new Array(10)).map(function (row) {
    return {
      x: Math.random() * 5,
      y: Math.random() * 10
    };
  });
}

var MODE = ['noWobble', 'gentle', 'wobbly', 'stiff'];

var animation_example_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      data: animation_example_generateData(),
      modeIndex: MODE[0]
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "updateModeIndex", function (value) {
      _this.setState({
        modeIndex: value
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          modeIndex = _this$state.modeIndex,
          data = _this$state.data;
      return external_react_default.a.createElement("div", {
        className: "centered-and-flexed"
      }, external_react_default.a.createElement(external_antd_["Select"], {
        defaultValue: modeIndex,
        onChange: this.updateModeIndex,
        size: "small",
        className: "mr-2"
      }, MODE.map(function (mode, index) {
        return external_react_default.a.createElement(Option, {
          value: mode,
          key: index
        }, mode);
      })), external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.setState({
            data: animation_example_generateData()
          });
        },
        buttonContent: external_react_default.a.createElement(external_react_feather_["RefreshCcw"], {
          size: 14,
          strokeWidth: 1
        })
      }), external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        height: 276
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["MarkSeries"], {
        animation: modeIndex,
        data: data,
        color: "#007bff"
      })));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/radial-chart/arc-series-example.js










// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




var PI = Math.PI;

function arc_series_example_updateData() {
  var divider = Math.floor(Math.random() * 8 + 3);

  var newData = Object(toConsumableArray["a" /* default */])(new Array(5)).map(function (row, index) {
    return {
      color: index,
      radius0: Math.random() > 0.8 ? Math.random() + 1 : 0,
      radius: Math.random() * 3 + 1,
      angle: (index + 1) * PI / divider,
      angle0: index * PI / divider
    };
  });

  return newData.concat([{
    angle0: 0,
    angle: PI * 2 * Math.random(),
    radius: 1.1,
    radius0: 0.8
  }]);
}

function updateLittleData() {
  var portion = Math.random();
  return [{
    angle0: 0,
    angle: portion * PI * 2,
    radius0: 0,
    radius: 10,
    color: theme_["EXTENDED_DISCRETE_COLOR_RANGE"][13]
  }, {
    angle0: portion * PI * 2,
    angle: 2 * PI,
    radius0: 0,
    radius: 10,
    color: theme_["EXTENDED_DISCRETE_COLOR_RANGE"][12]
  }];
}

var arc_series_example_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      data: arc_series_example_updateData(),
      littleData: updateLittleData(),
      value: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.setState({
            data: arc_series_example_updateData(),
            littleData: updateLittleData()
          });
        },
        buttonContent: external_react_default.a.createElement(external_react_feather_["RefreshCcw"], {
          size: 14,
          strokeWidth: 1
        })
      }), external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        className: "m-auto",
        xDomain: [-5, 5],
        yDomain: [-5, 5],
        height: 297
      }, external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["ArcSeries"], {
        animation: true,
        radiusDomain: [0, 4],
        data: this.state.data.map(function (row) {
          if (_this2.state.value && _this2.state.value.color === row.color) {
            return Object(objectSpread["a" /* default */])({}, row, {
              style: {
                stroke: 'black',
                strokeWidth: '5px'
              }
            });
          }

          return row;
        }),
        colorRange: theme_["EXTENDED_DISCRETE_COLOR_RANGE"],
        onValueMouseOver: function onValueMouseOver(row) {
          return _this2.setState({
            value: row
          });
        },
        onSeriesMouseOut: function onSeriesMouseOut() {
          return _this2.setState({
            value: false
          });
        },
        colorType: 'category'
      }), external_react_default.a.createElement(external_react_vis_["ArcSeries"], {
        animation: true,
        radiusType: 'literal',
        center: {
          x: -2,
          y: 2
        },
        data: this.state.littleData,
        colorType: 'literal'
      })));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/plot/area-chart.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function area_chart_Example(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["AreaSeries"], {
    className: "area-series-example",
    color: "#007bff",
    curve: "curveNatural",
    data: [{
      x: 1,
      y: 10
    }, {
      x: 2,
      y: 5
    }, {
      x: 3,
      y: 15
    }]
  }));
}
// CONCATENATED MODULE: ./demos/vis/plot/area-chart-elevated.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function AreaChartElevated(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["AreaSeries"], {
    className: "area-elevated-series-1",
    color: "#007bff",
    data: [{
      x: 1,
      y: 10,
      y0: 1
    }, {
      x: 2,
      y: 25,
      y0: 5
    }, {
      x: 3,
      y: 15,
      y0: 3
    }]
  }), external_react_default.a.createElement(external_react_vis_["AreaSeries"], {
    className: "area-elevated-series-2",
    color: "#52c41a",
    data: [{
      x: 1,
      y: 5,
      y0: 6
    }, {
      x: 2,
      y: 20,
      y0: 11
    }, {
      x: 3,
      y: 10,
      y0: 9
    }]
  }), external_react_default.a.createElement(external_react_vis_["LineMarkSeries"], {
    className: "area-elevated-line-series",
    color: "#f5222d",
    data: [{
      x: 1,
      y: 5.5
    }, {
      x: 2,
      y: 15
    }, {
      x: 3,
      y: 9
    }]
  }));
}
// CONCATENATED MODULE: ./demos/vis/axes/axis-on-0.js


// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function AxisOn0(_ref) {
  var _ref$xDomain = _ref.xDomain,
      xDomain = _ref$xDomain === void 0 ? [-1, 3] : _ref$xDomain,
      _ref$yDomain = _ref.yDomain,
      yDomain = _ref$yDomain === void 0 ? [-5, 15] : _ref$yDomain,
      _ref$xAxisOn = _ref.xAxisOn0,
      xAxisOn0 = _ref$xAxisOn === void 0 ? true : _ref$xAxisOn,
      _ref$yAxisOn = _ref.yAxisOn0,
      yAxisOn0 = _ref$yAxisOn === void 0 ? true : _ref$yAxisOn,
      _ref$verticalTickValu = _ref.verticalTickValues,
      verticalTickValues = _ref$verticalTickValu === void 0 ? [] : _ref$verticalTickValu,
      _ref$horizontalTickVa = _ref.horizontalTickValues,
      horizontalTickValues = _ref$horizontalTickVa === void 0 ? [0] : _ref$horizontalTickVa;
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], Object(esm_extends["a" /* default */])({
    height: 300
  }, {
    xDomain: xDomain,
    yDomain: yDomain
  }), !verticalTickValues || verticalTickValues.length ? external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
    tickValues: verticalTickValues
  }) : null, !horizontalTickValues || horizontalTickValues.length ? external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
    tickValues: horizontalTickValues
  }) : null, external_react_default.a.createElement(external_react_vis_["XAxis"], {
    on0: xAxisOn0
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    on0: yAxisOn0
  }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    color: "#007bff",
    data: [{
      x: -1,
      y: 10
    }, {
      x: 0,
      y: 5
    }, {
      x: 1,
      y: 3
    }, {
      x: 2,
      y: -5
    }, {
      x: 3,
      y: 15
    }]
  }));
}
// CONCATENATED MODULE: ./demos/vis/plot/axis-with-turned-labels.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function axis_with_turned_labels_Example(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    margin: {
      bottom: 70
    },
    xType: "ordinal",
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
    tickLabelAngle: -45,
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["VerticalBarSeries"], {
    color: "#007bff",
    data: [{
      x: 'Apples',
      y: 10
    }, {
      x: 'Bananas',
      y: 5
    }, {
      x: 'Cranberries',
      y: 15
    }]
  }), external_react_default.a.createElement(external_react_vis_["VerticalBarSeries"], {
    color: "#52c41a",
    data: [{
      x: 'Apples',
      y: 12
    }, {
      x: 'Bananas',
      y: 2
    }, {
      x: 'Cranberries',
      y: 11
    }]
  }));
}
// CONCATENATED MODULE: ./demos/vis/plot/bar-chart.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var greenData = [{
  x: 'A',
  y: 10
}, {
  x: 'B',
  y: 5
}, {
  x: 'C',
  y: 15
}];
var blueData = [{
  x: 'A',
  y: 12
}, {
  x: 'B',
  y: 2
}, {
  x: 'C',
  y: 11
}];
var labelData = greenData.map(function (d, idx) {
  return {
    x: d.x,
    y: Math.max(greenData[idx].y, blueData[idx].y)
  };
});

var bar_chart_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      useCanvas: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var useCanvas = this.state.useCanvas;
      var BarSeries = useCanvas ? external_react_vis_["VerticalBarSeriesCanvas"] : external_react_vis_["VerticalBarSeries"];
      return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        xType: "ordinal",
        height: 300,
        xDistance: 100
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(BarSeries, {
        className: "vertical-bar-series-example",
        color: "#007bff",
        data: greenData
      }), external_react_default.a.createElement(BarSeries, {
        color: "#52c41a",
        data: blueData
      }), external_react_default.a.createElement(external_react_vis_["LabelSeries"], {
        data: labelData,
        getLabel: function getLabel(d) {
          return d.x;
        }
      }));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "d3-format"
var external_d3_format_ = __webpack_require__("1cN5");

// CONCATENATED MODULE: ./demos/vis/parallel-coordinates/basic-parallel-coordinates.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var basic_parallel_coordinates_DATA = [{
  name: 'Mercedes',
  mileage: 7,
  price: 10,
  safety: 8,
  performance: 9,
  interior: 7,
  warranty: 7
}, {
  name: 'Honda',
  mileage: 8,
  price: 6,
  safety: 9,
  performance: 6,
  interior: 3,
  warranty: 9,
  style: {
    strokeWidth: 3,
    strokeDasharray: '2, 2'
  }
}, {
  name: 'Chevrolet',
  mileage: 5,
  price: 4,
  safety: 6,
  performance: 4,
  interior: 5,
  warranty: 6
}];
var basicFormat = Object(external_d3_format_["format"])('.2r');
var wideFormat = Object(external_d3_format_["format"])('.3r');
function BasicParallelCoordinates(props) {
  return external_react_default.a.createElement(external_react_vis_["ParallelCoordinates"], {
    data: basic_parallel_coordinates_DATA,
    tickFormat: function tickFormat(t) {
      return wideFormat(t);
    },
    margin: 50,
    colorRange: ['#172d47', '#911116', '#998965'],
    domains: [{
      name: 'mileage',
      domain: [0, 10]
    }, {
      name: 'price',
      domain: [2, 16],
      tickFormat: function tickFormat(t) {
        return "$".concat(basicFormat(t));
      },
      getValue: function getValue(d) {
        return d.price;
      }
    }, {
      name: 'safety',
      domain: [5, 10],
      getValue: function getValue(d) {
        return d.safety;
      }
    }, {
      name: 'performance',
      domain: [0, 10],
      getValue: function getValue(d) {
        return d.performance;
      }
    }, {
      name: 'interior',
      domain: [0, 7],
      getValue: function getValue(d) {
        return d.interior;
      }
    }, {
      name: 'warranty',
      domain: [10, 2],
      getValue: function getValue(d) {
        return d.warranty;
      }
    }],
    showMarks: true,
    width: 400,
    height: 300
  });
}
// CONCATENATED MODULE: ./demos/vis/radar-chart/basic-radar-chart.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var basic_radar_chart_DATA = [{
  name: 'Mercedes',
  mileage: 7,
  price: 10,
  safety: 8,
  performance: 9,
  interior: 7,
  warranty: 7
}, {
  name: 'Honda',
  mileage: 8,
  price: 6,
  safety: 9,
  performance: 6,
  interior: 3,
  warranty: 9
}, {
  name: 'Chevrolet',
  mileage: 5,
  price: 4,
  safety: 6,
  performance: 4,
  interior: 5,
  warranty: 6
}];
var basic_radar_chart_basicFormat = Object(external_d3_format_["format"])('.2r');
var basic_radar_chart_wideFormat = Object(external_d3_format_["format"])('.3r');
function basic_radar_chart_BasicRadarChart(props) {
  return external_react_default.a.createElement(radar_chart_default.a, {
    className: "m-auto",
    data: basic_radar_chart_DATA,
    tickFormat: function tickFormat(t) {
      return basic_radar_chart_wideFormat(t);
    },
    startingAngle: 0,
    domains: [{
      name: 'mileage',
      domain: [0, 10]
    }, {
      name: 'price',
      domain: [2, 16],
      tickFormat: function tickFormat(t) {
        return "$".concat(basic_radar_chart_basicFormat(t));
      },
      getValue: function getValue(d) {
        return d.price;
      }
    }, {
      name: 'safety',
      domain: [5, 10],
      getValue: function getValue(d) {
        return d.safety;
      }
    }, {
      name: 'performance',
      domain: [0, 10],
      getValue: function getValue(d) {
        return d.performance;
      }
    }, {
      name: 'interior',
      domain: [0, 7],
      getValue: function getValue(d) {
        return d.interior;
      }
    }, {
      name: 'warranty',
      domain: [10, 2],
      getValue: function getValue(d) {
        return d.warranty;
      }
    }],
    width: 400,
    height: 300
  });
}
// EXTERNAL MODULE: external "react-vis/dist/sankey"
var sankey_ = __webpack_require__("rfx9");
var sankey_default = /*#__PURE__*/__webpack_require__.n(sankey_);

// CONCATENATED MODULE: ./demos/vis/sankey/basic.js


var nodes = [{
  name: 'a',
  rotation: 0
}, {
  name: 'b'
}, {
  name: 'c'
}];
var links = [{
  source: 0,
  target: 1,
  value: 10,
  opacity: 0.2
}, {
  source: 0,
  target: 2,
  value: 20
}, {
  source: 1,
  target: 2,
  value: 20
}];
function BasicSankeyExample() {
  return external_react_default.a.createElement(sankey_default.a, {
    className: "m-auto",
    nodes: nodes,
    links: links,
    width: 200,
    height: 221,
    labelRotation: 45
  });
}
// EXTERNAL MODULE: ./demos/vis/datasets/d3-flare-example.json
var d3_flare_example = __webpack_require__("7hvg");

// EXTERNAL MODULE: external "react-vis/dist/sunburst"
var sunburst_ = __webpack_require__("JnV7");
var sunburst_default = /*#__PURE__*/__webpack_require__.n(sunburst_);

// CONCATENATED MODULE: ./demos/vis/sunbursts/basic-sunburst.js









// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




var LABEL_STYLE = {
  fontSize: '8px',
  textAnchor: 'middle'
};
/**
 * Recursively work backwards from highlighted node to find path of valud nodes
 * @param {Object} node - the current node being considered
 * @returns {Array} an array of strings describing the key route to the current node
 */

function getKeyPath(node) {
  if (!node.parent) {
    return ['root'];
  }

  return [node.data && node.data.name || node.name].concat(getKeyPath(node.parent));
}
/**
 * Recursively modify data depending on whether or not each cell has been selected by the hover/highlight
 * @param {Object} data - the current node being considered
 * @param {Object|Boolean} keyPath - a map of keys that are in the highlight path
 * if this is false then all nodes are marked as selected
 * @returns {Object} Updated tree structure
 */


function basic_sunburst_updateData(data, keyPath) {
  if (data.children) {
    data.children.map(function (child) {
      return basic_sunburst_updateData(child, keyPath);
    });
  } // add a fill to all the uncolored cells


  if (!data.hex) {
    data.style = {
      fill: theme_["EXTENDED_DISCRETE_COLOR_RANGE"][5]
    };
  }

  data.style = Object(objectSpread["a" /* default */])({}, data.style, {
    fillOpacity: keyPath && !keyPath[data.name] ? 0.2 : 1
  });
  return data;
}

var decoratedData = basic_sunburst_updateData(d3_flare_example, false);

var basic_sunburst_BasicSunburst =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(BasicSunburst, _React$Component);

  function BasicSunburst() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, BasicSunburst);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(BasicSunburst)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      pathValue: false,
      data: decoratedData,
      finalValue: 'SUNBURST',
      clicked: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(BasicSunburst, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          clicked = _this$state.clicked,
          data = _this$state.data,
          finalValue = _this$state.finalValue,
          pathValue = _this$state.pathValue;
      return external_react_default.a.createElement("div", {
        className: "basic-sunburst-example-wrapper"
      }, external_react_default.a.createElement("div", null, clicked ? 'click to unlock selection' : 'click to lock selection'), external_react_default.a.createElement(sunburst_default.a, {
        animation: true,
        className: "basic-sunburst-example m-auto",
        hideRootNode: true,
        onValueMouseOver: function onValueMouseOver(node) {
          if (clicked) {
            return;
          }

          var path = getKeyPath(node).reverse();
          var pathAsMap = path.reduce(function (res, row) {
            res[row] = true;
            return res;
          }, {});

          _this2.setState({
            finalValue: path[path.length - 1],
            pathValue: path.join(' > '),
            data: basic_sunburst_updateData(decoratedData, pathAsMap)
          });
        },
        onValueMouseOut: function onValueMouseOut() {
          return clicked ? function () {} : _this2.setState({
            pathValue: false,
            finalValue: false,
            data: basic_sunburst_updateData(decoratedData, false)
          });
        },
        onValueClick: function onValueClick() {
          return _this2.setState({
            clicked: !clicked
          });
        },
        style: {
          stroke: '#ddd',
          strokeOpacity: 0.3,
          strokeWidth: '0.5'
        },
        colorType: "literal",
        getSize: function getSize(d) {
          return d.value;
        },
        getColor: function getColor(d) {
          return d.hex;
        },
        data: data,
        height: 300,
        width: 350
      }, finalValue && external_react_default.a.createElement(external_react_vis_["LabelSeries"], {
        data: [{
          x: 0,
          y: 0,
          label: finalValue,
          style: LABEL_STYLE
        }]
      })), external_react_default.a.createElement("div", {
        className: "basic-sunburst-example-path-name"
      }, pathValue));
    }
  }]);

  return BasicSunburst;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/showcase-utils.js
// sourced from
// http://indiegamr.com/generate-repeatable-random-numbers-in-js/
function generateSeededRandom() {
  var baseSeed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var seed = baseSeed;
  return function seededRandom(max, min) {
    max = max || 1;
    min = min || 0;
    seed = (seed * 9301 + 49297) % 233280;
    var rnd = seed / 233280;
    return min + rnd * (max - min);
  };
}
// CONCATENATED MODULE: ./demos/vis/misc/2d-dragable-plot.js









// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var seededRandom = generateSeededRandom(3); // randomly generated data

var _2d_dragable_plot_data = Object(toConsumableArray["a" /* default */])(new Array(30)).map(function (row) {
  return {
    x: seededRandom() * 5,
    y: seededRandom() * 10
  };
});

var _2d_dragable_plot_BidirectionDragChart =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(BidirectionDragChart, _React$Component);

  function BidirectionDragChart() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, BidirectionDragChart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(BidirectionDragChart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      filter: null,
      hovered: null,
      highlighting: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(BidirectionDragChart, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          filter = _this$state.filter,
          hovered = _this$state.hovered,
          highlighting = _this$state.highlighting;

      var highlightPoint = function highlightPoint(d) {
        if (!filter) {
          return false;
        }

        var leftRight = d.x <= filter.right && d.x >= filter.left;
        var upDown = d.y <= filter.top && d.y >= filter.bottom;
        return leftRight && upDown;
      };

      var numSelectedPoints = filter ? _2d_dragable_plot_data.filter(highlightPoint).length : 0;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        height: 286
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["Highlight"], {
        drag: true,
        onBrushStart: function onBrushStart() {
          return _this2.setState({
            highlighting: true
          });
        },
        onBrush: function onBrush(area) {
          return _this2.setState({
            filter: area
          });
        },
        onBrushEnd: function onBrushEnd(area) {
          return _this2.setState({
            highlighting: false,
            filter: area
          });
        },
        onDragStart: function onDragStart(area) {
          return _this2.setState({
            highlighting: true
          });
        },
        onDrag: function onDrag(area) {
          return _this2.setState({
            filter: area
          });
        },
        onDragEnd: function onDragEnd(area) {
          return _this2.setState({
            highlighting: false,
            filter: area
          });
        }
      }), external_react_default.a.createElement(external_react_vis_["MarkSeries"], {
        className: "mark-series-example",
        strokeWidth: 2,
        opacity: "0.8",
        sizeRange: [5, 15],
        style: {
          pointerEvents: highlighting ? 'none' : ''
        },
        colorType: "literal",
        getColor: function getColor(d) {
          return highlightPoint(d) ? '#f5222d' : '#007bff';
        },
        onValueMouseOver: function onValueMouseOver(d) {
          return _this2.setState({
            hovered: d
          });
        },
        onValueMouseOut: function onValueMouseOut(d) {
          return _this2.setState({
            hovered: false
          });
        },
        data: _2d_dragable_plot_data
      }), hovered && external_react_default.a.createElement(external_react_vis_["Hint"], {
        value: hovered
      })), external_react_default.a.createElement("p", null, "There are ".concat(numSelectedPoints, " selected points")));
    }
  }]);

  return BidirectionDragChart;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/plot/big-base-bar-chart.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var myDATA = [{
  id: '00036',
  y: 200400,
  x: 1504121437
}, {
  id: '00036',
  y: 200350,
  x: 1504121156
}, {
  id: '00036',
  y: 200310,
  x: 1504120874
}, {
  id: '00036',
  y: 200260,
  x: 1504120590
}, {
  id: '00036',
  y: 200210,
  x: 1504120306
}, {
  id: '00036',
  y: 200160,
  x: 1504120024
}, {
  id: '00036',
  y: 200120,
  x: 1504119740
}, {
  id: '00036',
  y: 200070,
  x: 1504119458
}, {
  id: '00036',
  y: 200020,
  x: 1504119177
}, {
  id: '00036',
  y: 199980,
  x: 1504118893
}, {
  id: '00036',
  y: 199930,
  x: 1504118611
}, {
  id: '00036',
  y: 199880,
  x: 1504118330
}, {
  id: '00036',
  y: 199830,
  x: 1504118048
}, {
  id: '00036',
  y: 199790,
  x: 1504117763
}, {
  id: '00036',
  y: 199740,
  x: 1504117481
}];
var big_base_bar_chart_yDomain = myDATA.reduce(function (res, row) {
  return {
    max: Math.max(res.max, row.y),
    min: Math.min(res.min, row.y)
  };
}, {
  max: -Infinity,
  min: Infinity
});

var big_base_bar_chart_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      useCanvas: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var useCanvas = this.state.useCanvas;
      var BarSeries = useCanvas ? external_react_vis_["VerticalBarSeriesCanvas"] : external_react_vis_["VerticalBarSeries"];
      return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        margin: {
          left: 75
        },
        xType: "time",
        height: 300,
        yDomain: [big_base_bar_chart_yDomain.min, big_base_bar_chart_yDomain.max]
      }, external_react_default.a.createElement(BarSeries, {
        className: "vertical-bar-series-example",
        color: "#007bff",
        data: myDATA
      }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./demos/vis/datasets/iris.json
var iris = __webpack_require__("zQqO");

// CONCATENATED MODULE: ./demos/vis/parallel-coordinates/brushed-parallel-coordinates.js



// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

 // {"sepal length": 5.1, "sepal width": 3.5, "petal length": 1.4, "petal width": 0.2, "species": "setosa"},

var SPECIES_COLORS = {
  setosa: '#12939A',
  virginica: '#79C7E3',
  versicolor: '#1A3177'
};

var domainStructure = keys_default()(iris[0]).filter(function (name) {
  return name !== 'species';
}).map(function (name) {
  return {
    name: name,
    domain: [Infinity, -Infinity]
  };
});

var domains = iris.reduce(function (acc, row) {
  return acc.map(function (d) {
    return {
      name: d.name,
      domain: [Math.min(d.domain[0], row[d.name]), Math.max(d.domain[1], row[d.name])]
    };
  });
}, domainStructure);
function BrushedParallelCoordinates(props) {
  return external_react_default.a.createElement(external_react_vis_["ParallelCoordinates"], {
    animation: true,
    brushing: true,
    data: iris.map(function (d) {
      return Object(objectSpread["a" /* default */])({}, d, {
        color: SPECIES_COLORS[d.species]
      });
    }),
    domains: domains,
    margin: 60,
    width: 600,
    height: 400
  });
}
// CONCATENATED MODULE: ./demos/vis/sunbursts/clock-example.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var clock_example_PI = Math.PI;
var clock_example_DIVERGING_COLOR_SCALE = ['#007bff', '#52c41a', '#f5222d', '#faad14'];

function getSeconds() {
  return Math.floor(new Date().getTime() / 1000);
}

var clock_example_ClockExample =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(ClockExample, _React$Component);

  function ClockExample() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, ClockExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(ClockExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      time: 0
    });

    return _this;
  }

  Object(createClass["a" /* default */])(ClockExample, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this._timerId = setInterval(function () {
        return _this2.setState({
          time: getSeconds()
        });
      }, 100);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this._timerId);
      this.setState({
        timerId: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var time = this.state.time;
      var seconds = time % 60;
      var minutes = time / 60 % 60;
      var hours = time / (60 * 24) % 24;
      return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        className: "m-auto",
        xDomain: [-3, 3],
        yDomain: [-3, 3],
        getAngle: function getAngle(d) {
          return d.time;
        },
        getAngle0: function getAngle0(d) {
          return 0;
        },
        height: 300
      }, external_react_default.a.createElement(external_react_vis_["ArcSeries"], {
        animation: {
          damping: 9,
          stiffness: 300
        },
        radiusDomain: [0, 3],
        data: [{
          time: seconds / 60 * 2 * clock_example_PI,
          radius0: 1,
          radius: 1.5,
          color: 0
        }, {
          time: minutes / 60 * 2 * clock_example_PI,
          radius0: 1.6,
          radius: 2.1,
          color: 1
        }, {
          time: hours / 24 * 2 * clock_example_PI,
          radius0: 2.2,
          radius: 2.7,
          color: 2
        }],
        colorRange: clock_example_DIVERGING_COLOR_SCALE
      }));
    }
  }]);

  return ClockExample;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/plot/clustered-stacked-bar-chart.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var clustered_stacked_bar_chart_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      useCanvas: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var useCanvas = this.state.useCanvas;
      var BarSeries = useCanvas ? external_react_vis_["VerticalBarSeriesCanvas"] : external_react_vis_["VerticalBarSeries"];
      return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        className: "clustered-stacked-bar-chart-example",
        xType: "ordinal",
        stackBy: "y",
        height: 300
      }, external_react_default.a.createElement(external_react_vis_["DiscreteColorLegend"], {
        style: {
          position: 'absolute',
          left: '50px',
          top: '10px'
        },
        orientation: "horizontal",
        items: [{
          title: 'Apples',
          color: '#007bff'
        }, {
          title: 'Oranges',
          color: '#52c41a'
        }]
      }), external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(BarSeries, {
        cluster: "2015",
        color: "#007bff",
        data: [{
          x: 'Q1',
          y: 10
        }, {
          x: 'Q2',
          y: 5
        }, {
          x: 'Q3',
          y: 15
        }, {
          x: 'Q4',
          y: 20
        }]
      }), external_react_default.a.createElement(BarSeries, {
        cluster: "2015",
        color: "#52c41a",
        data: [{
          x: 'Q1',
          y: 3
        }, {
          x: 'Q2',
          y: 7
        }, {
          x: 'Q3',
          y: 2
        }, {
          x: 'Q4',
          y: 1
        }]
      }), external_react_default.a.createElement(BarSeries, {
        cluster: "2016",
        color: "#f5222d",
        data: [{
          x: 'Q1',
          y: 3
        }, {
          x: 'Q2',
          y: 8
        }, {
          x: 'Q3',
          y: 11
        }, {
          x: 'Q4',
          y: 19
        }]
      }), external_react_default.a.createElement(BarSeries, {
        cluster: "2016",
        color: "#faad14",
        data: [{
          x: 'Q1',
          y: 22
        }, {
          x: 'Q2',
          y: 2
        }, {
          x: 'Q3',
          y: 22
        }, {
          x: 'Q4',
          y: 18
        }]
      }));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "react-no-ssr"
var external_react_no_ssr_ = __webpack_require__("KK4J");
var external_react_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_react_no_ssr_);

// CONCATENATED MODULE: ./demos/vis/plot/complex-chart.js









// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




/**
 * Get the array of x and y pairs.
 * The function tries to avoid too large changes of the chart.
 * @param {number} total Total number of values.
 * @returns {Array} Array of data.
 * @private
 */

function getRandomSeriesData(total) {
  var result = [];
  var lastY = Math.random() * 40 - 20;
  var y;
  var firstY = lastY;

  for (var i = 0; i < Math.max(total, 3); i++) {
    y = Math.random() * firstY - firstY / 2 + lastY;
    result.push({
      left: i,
      top: y
    });
    lastY = y;
  }

  return result;
}

var complex_chart_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Example).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_formatCrosshairItems", function (values) {
      var series = _this.state.series;
      return values.map(function (v, i) {
        return {
          title: series[i].title,
          value: v.top
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_formatCrosshairTitle", function (values) {
      return {
        title: 'X',
        value: values[0].left
      };
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_legendClickHandler", function (item, i) {
      var series = _this.state.series;
      series[i].disabled = !series[i].disabled;

      _this.setState({
        series: series
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_mouseLeaveHandler", function () {
      _this.setState({
        crosshairValues: []
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_nearestXHandler", function (value, _ref) {
      var index = _ref.index;
      var series = _this.state.series;

      _this.setState({
        crosshairValues: series.map(function (s) {
          return s.data[index];
        })
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_updateButtonClicked", function () {
      var series = _this.state.series;
      var totalValues = Math.random() * 50;
      series.forEach(function (s) {
        s.data = getRandomSeriesData(totalValues);
      });

      _this.setState({
        series: series
      });
    });

    var _totalValues = Math.random() * 50;

    _this.state = {
      crosshairValues: [],
      series: [{
        title: 'Apples',
        disabled: false,
        data: getRandomSeriesData(_totalValues)
      }, {
        title: 'Bananas',
        disabled: false,
        data: getRandomSeriesData(_totalValues)
      }]
    };
    return _this;
  }
  /**
   * A callback to format the crosshair items.
   * @param {Object} values Array of values.
   * @returns {Array<Object>} Array of objects with titles and values.
   * @private
   */


  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          series = _this$state.series,
          crosshairValues = _this$state.crosshairValues;
      return external_react_default.a.createElement(external_react_no_ssr_default.a, null, external_react_default.a.createElement("div", {
        className: "example-with-click-me"
      }, external_react_default.a.createElement("div", {
        className: "legend text-center"
      }, external_react_default.a.createElement(external_react_vis_["DiscreteColorLegend"], {
        onItemClick: this._legendClickHandler,
        width: 180,
        items: series
      }), external_react_default.a.createElement(showcase_button, {
        buttonContent: external_react_default.a.createElement(external_react_feather_["RefreshCcw"], {
          size: 14,
          strokeWidth: 1
        }),
        onClick: this._updateButtonClicked
      })), external_react_default.a.createElement("div", {
        className: "chart"
      }, external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        animation: true,
        getX: function getX(d) {
          return d.left;
        },
        getY: function getY(d) {
          return d.top;
        },
        onMouseLeave: this._mouseLeaveHandler,
        xDomain: [-0.5, series[0].data.length - 1],
        height: 300
      }, external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], {
        className: "cool-custom-name",
        tickSizeInner: 0,
        tickSizeOuter: 8,
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        className: "even-cooler-custom-name",
        tickSizeInner: 0,
        tickSizeOuter: 8,
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["VerticalRectSeries"], Object(esm_extends["a" /* default */])({
        data: series[0].data.map(function (_ref2) {
          var left = _ref2.left,
              top = _ref2.top;
          return {
            x0: left - 0.5,
            left: left + 0.5,
            top: top
          };
        }),
        stroke: "white",
        color: "#007bff",
        onNearestX: this._nearestXHandler
      }, series[0].disabled ? {
        opacity: 0.2
      } : null)), external_react_default.a.createElement(external_react_vis_["LineSeries"], Object(esm_extends["a" /* default */])({
        data: series[1].data,
        curve: "curveMonotoneX",
        color: "#f5222d"
      }, series[1].disabled ? {
        opacity: 0.2
      } : null)), external_react_default.a.createElement(external_react_vis_["Crosshair"], {
        itemsFormat: this._formatCrosshairItems,
        titleFormat: this._formatCrosshairTitle,
        values: crosshairValues
      })))));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "react-vis/dist/legends/continuous-color-legend"
var continuous_color_legend_ = __webpack_require__("wiC0");
var continuous_color_legend_default = /*#__PURE__*/__webpack_require__.n(continuous_color_legend_);

// CONCATENATED MODULE: ./demos/vis/legends/continuous-color.js






// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var continuous_color_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example(props) {
    Object(classCallCheck["a" /* default */])(this, Example);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Example).call(this, props));
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(continuous_color_legend_default.a, {
        startTitle: "100",
        midTitle: "150",
        endTitle: "200"
      });
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "react-vis/dist/legends/continuous-size-legend"
var continuous_size_legend_ = __webpack_require__("Db1m");
var continuous_size_legend_default = /*#__PURE__*/__webpack_require__.n(continuous_size_legend_);

// CONCATENATED MODULE: ./demos/vis/legends/continuous-size.js






// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var continuous_size_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example(props) {
    Object(classCallCheck["a" /* default */])(this, Example);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Example).call(this, props));
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(continuous_size_legend_default.a, {
        startTitle: "100",
        endTitle: "200"
      });
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./demos/vis/datasets/old-faithful.json
var old_faithful = __webpack_require__("6lF4");

// CONCATENATED MODULE: ./demos/vis/plot/contour-series-example.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.







var ButtonGroup = external_antd_["Button"].Group;

function contour_series_example_updateData() {
  return old_faithful.map(function (row) {
    return {
      waiting: row.waiting + (Math.random() - 0.5) * 10,
      eruptions: row.eruptions + (Math.random() - 0.5) * 2
    };
  });
}

var contour_series_example_ContourSeriesExample =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(ContourSeriesExample, _Component);

  function ContourSeriesExample() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, ContourSeriesExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(ContourSeriesExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      data: old_faithful
    });

    return _this;
  }

  Object(createClass["a" /* default */])(ContourSeriesExample, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = this.state.data;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_react_no_ssr_default.a, null, external_react_default.a.createElement(ButtonGroup, {
        size: "sm"
      }, external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.setState({
            data: contour_series_example_updateData()
          });
        },
        buttonContent: external_react_default.a.createElement(external_react_feather_["RefreshCcw"], {
          size: 14,
          strokeWidth: 1
        })
      })), external_react_default.a.createElement(external_react_vis_["XYPlot"], {
        xDomain: [40, 100],
        yDomain: [1.5, 8],
        width: 600,
        getX: function getX(d) {
          return d.waiting;
        },
        getY: function getY(d) {
          return d.eruptions;
        },
        height: 276
      }, external_react_default.a.createElement(external_react_vis_["ContourSeries"], {
        animation: true,
        className: "contour-series-example",
        style: {
          stroke: '#125C77',
          strokeLinejoin: 'round'
        },
        colorRange: ['#007bff', '#52c41a'],
        data: data
      }), external_react_default.a.createElement(external_react_vis_["MarkSeriesCanvas"], {
        animation: true,
        data: data,
        size: 1,
        color: '#125C77'
      }), external_react_default.a.createElement(external_react_vis_["Borders"], {
        style: {
          all: {
            fill: '#fff'
          }
        }
      }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }))));
    }
  }]);

  return ContourSeriesExample;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./demos/vis/axes/custom-axes.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var MARGIN = {
  left: 10,
  right: 10,
  bottom: 80,
  top: 20
};
var WORDS = ['cool', 'dog', 'skateboard', 'wow', 'such', external_react_default.a.createElement("tspan", null, external_react_default.a.createElement("tspan", {
  x: "0",
  dy: "1em"
}, "Multiline"), external_react_default.a.createElement("tspan", {
  x: "0",
  dy: "1em"
}, "dogs"))];
function custom_axes_Example(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    margin: MARGIN,
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["XAxis"], {
    top: 0,
    hideLine: true,
    tickValues: [0, 1, 3, 4, 5],
    title: "X"
  }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
    tickFormat: function tickFormat(v) {
      return "Value is ".concat(v);
    },
    tickLabelAngle: -90
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    hideTicks: true
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    left: 50,
    tickFormat: function tickFormat(v) {
      return v * v;
    }
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    hideLine: true,
    left: 150,
    tickFormat: function tickFormat(v) {
      return WORDS[v];
    }
  }), external_react_default.a.createElement(external_react_vis_["MarkSeries"], {
    color: "#007bff",
    data: [{
      x: 0,
      y: 0
    }, {
      x: 5,
      y: 5
    }],
    opacity: 0,
    opacityType: "linear"
  }));
}
// CONCATENATED MODULE: ./demos/vis/axes/custom-axes-orientation.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function custom_axes_orientation_Example(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    margin: {
      top: 40,
      right: 40,
      left: 10,
      bottom: 10
    },
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], {
    orientation: "top",
    title: "X Axis"
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    orientation: "right",
    title: "Y Axis"
  }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    color: "#007bff",
    data: [{
      x: 1,
      y: 3,
      z: 10
    }, {
      x: 2,
      y: 4,
      z: 10
    }, {
      x: 3,
      y: 8,
      z: 10
    }, {
      x: 4,
      y: 11,
      z: 10
    }]
  }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    color: "#52c41a",
    data: null
  }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    color: "#f5222d",
    data: [{
      x: 1,
      y: 3,
      z: 10
    }, {
      x: 2,
      y: 9,
      z: 10
    }, {
      x: 3,
      y: 2,
      z: 10
    }, {
      x: 4,
      y: 11,
      z: 10
    }]
  }));
}
// CONCATENATED MODULE: ./demos/vis/axes/custom-axis.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function custom_axis_Example(props) {
  var axisStyle = {
    ticks: {
      fontSize: '14px',
      color: '#333'
    },
    title: {
      fontSize: '16px',
      color: '#333'
    }
  };
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], {
    hideLine: true,
    title: "X",
    labelFormat: function labelFormat(v) {
      return "Value is ".concat(v);
    },
    labelValues: [2],
    tickValues: [1, 1.5, 2, 3],
    style: axisStyle
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    hideTicks: true
  }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    color: "#007bff",
    data: [{
      x: 1,
      y: 10
    }, {
      x: 2,
      y: 5
    }, {
      x: 3,
      y: 15
    }]
  }));
}
// CONCATENATED MODULE: ./demos/vis/axes/custom-axis-tick-element.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var custom_axis_tick_element_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      data: [{
        x: 0,
        y: 100,
        label: external_react_default.a.createElement("circle", {
          cx: 0,
          cy: 10,
          r: 5,
          fill: "darksalmon"
        })
      }, {
        x: 1,
        y: 200,
        label: external_react_default.a.createElement("rect", {
          x: -5,
          y: 5,
          width: 10,
          height: 10,
          fill: "slateblue"
        })
      }, {
        x: 2,
        y: 500,
        label: external_react_default.a.createElement("tspan", null, "Label")
      }, {
        x: 3,
        y: 900,
        label: external_react_default.a.createElement("path", {
          d: "M0 5 L5 15 L-5 15 Z",
          fill: "sandybrown"
        })
      }, {
        x: 4,
        y: 1000,
        label: 'Label'
      }]
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "formatX", function (v, i, scale, tickTotal) {
      if (i < _this.state.data.length) {
        return _this.state.data[i].label;
      }

      return null;
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        height: 300,
        xDomain: [0, 4],
        yDomain: [0, 1000],
        margin: {
          top: 10,
          right: 10,
          left: 60,
          bottom: 40
        }
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        tickTotal: this.state.data.length,
        tickFormat: this.formatX
      }), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
        color: "#007bff",
        data: this.state.data
      }));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/axes/custom-axis-tick-format.js







// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var custom_axis_tick_format_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example() {
    Object(classCallCheck["a" /* default */])(this, Example);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Example).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var data = [{
        x: 0.042,
        y: 100
      }, {
        x: 0.051,
        y: 1200
      }, {
        x: 0.063,
        y: 1600
      }, {
        x: 0.07,
        y: 1300
      }, {
        x: 0.073,
        y: 1220
      }];
      var xMin = Math.min.apply(Math, Object(toConsumableArray["a" /* default */])(data.map(function (e) {
        return e.x;
      })));
      var xMax = Math.max.apply(Math, Object(toConsumableArray["a" /* default */])(data.map(function (e) {
        return e.x;
      })));
      var yMin = 0;
      var yMax = Math.max.apply(Math, Object(toConsumableArray["a" /* default */])(data.map(function (e) {
        return e.y;
      })));
      return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        height: 300,
        xType: "linear",
        xDomain: [xMin, xMax],
        yType: "linear",
        yDomain: [yMin, yMax],
        margin: {
          top: 10,
          right: 10,
          left: 60,
          bottom: 40
        }
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        tickFormat: Example._xTickFormatValue
      }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
        tickFormat: Example._yTickFormatValue
      }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
        color: "#007bff",
        data: data
      }));
    }
  }], [{
    key: "_xTickFormatValue",
    value: function _xTickFormatValue(v, i, scale, tickTotal) {
      // format axis tick with SI prefix (e.g. ms, µs)
      // see https://github.com/d3/d3-scale#continuous_tickFormat
      // and https://github.com/d3/d3-format#locale_format
      return "".concat(scale.tickFormat(tickTotal, 's')(v), "s");
    }
  }, {
    key: "_yTickFormatValue",
    value: function _yTickFormatValue(v, i, scale, tickTotal) {
      // format axis tick with SI prefix (e.g. kWh, MWh)
      return "".concat(scale.tickFormat(tickTotal, 's')(v), "Wh");
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/radial-chart/custom-radius-radial-chart.js









// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var custom_radius_radial_chart_DATA = [{
  angle: 1,
  id: 1,
  radius: 10
}, {
  angle: 2,
  label: 'Super Custom label',
  subLabel: 'With annotation',
  id: 2,
  radius: 20
}, {
  angle: 5,
  id: 3,
  radius: 5,
  label: 'Alt Label'
}, {
  angle: 3,
  id: 4,
  radius: 14
}, {
  angle: 5,
  id: 5,
  radius: 12,
  subLabel: 'Sub Label only'
}];

function mapData(hoveredSection) {
  return custom_radius_radial_chart_DATA.map(function (row, index) {
    return Object(objectSpread["a" /* default */])({}, row, {
      innerRadius: hoveredSection === index + 1 ? row.radius - 1 : null,
      opacity: !hoveredSection || hoveredSection === index + 1 ? 1 : 0.6
    });
  });
}

var custom_radius_radial_chart_SimpleRadialChart =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(SimpleRadialChart, _Component);

  function SimpleRadialChart() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, SimpleRadialChart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(SimpleRadialChart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      hoveredSection: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(SimpleRadialChart, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var hoveredSection = this.state.hoveredSection;
      return external_react_default.a.createElement(external_react_vis_["RadialChart"], {
        className: "m-auto",
        animation: true,
        showLabels: true,
        radiusDomain: [0, 20],
        data: mapData(hoveredSection),
        labelsAboveChildren: true,
        onValueMouseOver: function onValueMouseOver(row) {
          return _this2.setState({
            hoveredSection: row.id
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            hoveredSection: false
          });
        },
        width: 600,
        height: 300
      }, external_react_default.a.createElement(external_react_vis_["CircularGridLines"], {
        tickTotal: 20,
        rRange: [0, 150]
      }));
    }
  }]);

  return SimpleRadialChart;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./demos/vis/plot/custom-svg-all-the-marks.js









// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



var custom_svg_all_the_marks_ButtonGroup = external_antd_["Button"].Group;

function custom_svg_all_the_marks_generateData(reversed) {
  return ['star', 'square', 'circle', 'diamond'].reduce(function (acc, row, rowIndex) {
    var cellsInRow = Object(toConsumableArray["a" /* default */])(new Array(5)).map(function (cell, index) {
      return {
        x: index,
        y: reversed ? (5 - rowIndex) * 5 : rowIndex * 5,
        size: (index + 1) * 3,
        customComponent: row
      };
    });

    return acc.concat(cellsInRow);
  }, []);
}

var custom_svg_all_the_marks_DATA = custom_svg_all_the_marks_generateData(false);
var REVERSED_DATA = custom_svg_all_the_marks_generateData(true);
var tipStyle = {
  display: 'flex',
  color: '#fff',
  background: '#000',
  alignItems: 'center',
  padding: '5px'
};

var custom_svg_all_the_marks_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      reverse: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          reverse = _this$state.reverse,
          hoveredCell = _this$state.hoveredCell;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(custom_svg_all_the_marks_ButtonGroup, {
        size: "sm"
      }, external_react_default.a.createElement(showcase_button, {
        buttonContent: "Reverse",
        onClick: function onClick() {
          return _this2.setState({
            reverse: !reverse
          });
        }
      })), external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        margin: 50,
        height: 276
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["CustomSVGSeries"], {
        animation: true,
        style: {
          stroke: '#f5222d',
          fill: '#007bff'
        },
        data: reverse ? REVERSED_DATA : custom_svg_all_the_marks_DATA,
        onValueMouseOver: function onValueMouseOver(v) {
          _this2.setState({
            hoveredCell: v
          });
        },
        onValueMouseOut: function onValueMouseOut(v) {
          return _this2.setState({
            hoveredCell: false
          });
        }
      }), hoveredCell && external_react_default.a.createElement(external_react_vis_["Hint"], {
        value: hoveredCell
      }, external_react_default.a.createElement("div", {
        style: tipStyle
      }, hoveredCell.customComponent))));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/plot/custom-svg-example.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function custom_svg_example_Example(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["CustomSVGSeries"], {
    className: "custom-marking",
    customComponent: "square",
    data: [{
      x: 1,
      y: 10,
      customComponent: 'circle',
      size: 10
    }, {
      x: 1.7,
      y: 12,
      size: 20,
      style: {
        stroke: '#f5222d',
        fill: '#007bff'
      }
    }, {
      x: 2,
      y: 5
    }, {
      x: 3,
      y: 15
    }, {
      x: 2.5,
      y: 7,
      customComponent: function customComponent(row, positionInPixels, globalStyle) {
        return external_react_default.a.createElement("g", {
          className: "inner-inner-component"
        }, external_react_default.a.createElement("circle", {
          cx: "0",
          cy: "0",
          r: 10,
          fill: "green"
        }), external_react_default.a.createElement("text", {
          x: 0,
          y: 0
        }, external_react_default.a.createElement("tspan", {
          x: "0",
          y: "0"
        }, "x: ".concat(positionInPixels.x)), external_react_default.a.createElement("tspan", {
          x: "0",
          y: "1em"
        }, "y: ".concat(positionInPixels.y))));
      }
    }]
  }));
}
// CONCATENATED MODULE: ./demos/vis/plot/custom-svg-root-level.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function CustomSVGRootLevelComponent(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["CustomSVGSeries"], {
    className: "custom-marking",
    customComponent: function customComponent(row, positionInPixels) {
      return external_react_default.a.createElement("g", {
        className: "inner-inner-component"
      }, external_react_default.a.createElement("circle", {
        cx: "0",
        cy: "0",
        r: row.size || 10,
        fill: "#007bff"
      }), external_react_default.a.createElement("text", {
        x: 0,
        y: 0
      }, external_react_default.a.createElement("tspan", {
        x: "0",
        y: "0"
      }, "x: ".concat(positionInPixels.x)), external_react_default.a.createElement("tspan", {
        x: "0",
        y: "1em"
      }, "y: ".concat(positionInPixels.y))));
    },
    data: [{
      x: 1,
      y: 10,
      size: 3
    }, {
      x: 1.7,
      y: 12,
      size: 20,
      style: {
        stroke: 'red',
        fill: 'orange'
      }
    }, {
      x: 2,
      y: 5
    }, {
      x: 3,
      y: 15
    }, {
      x: 2.5,
      y: 7
    }]
  }));
}
// CONCATENATED MODULE: ./demos/vis/plot/custom-scales.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function custom_scales_Example(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    xType: "linear",
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
    title: "X Axis",
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    title: "Y Axis",
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    color: "#007bff",
    data: [{
      x: 1,
      y: 3
    }, {
      x: 2,
      y: 5
    }, {
      x: 3,
      y: 15
    }, {
      x: 4,
      y: 12
    }]
  }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    color: "#f5222d",
    data: null
  }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    color: "#52c41a",
    data: [{
      x: 1,
      y: 10
    }, {
      x: 2,
      y: 4
    }, {
      x: 4,
      y: 2
    }, {
      x: 5,
      y: 15
    }]
  }));
}
// CONCATENATED MODULE: ./demos/vis/axes/decorative-axes-criss-cross.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var decorative_axes_criss_cross_MARGIN = {
  left: 30,
  right: 30,
  top: 30,
  bottom: 30
};
function decorative_axes_criss_cross_Example(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    dontCheckIfEmpty: true,
    margin: decorative_axes_criss_cross_MARGIN,
    xDomain: [0, 1],
    yDomain: [0, 1],
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["DecorativeAxis"], {
    axisStart: {
      x: 0,
      y: 0
    },
    axisEnd: {
      x: 1,
      y: 1
    },
    axisDomain: [-10, 100]
  }), external_react_default.a.createElement(external_react_vis_["DecorativeAxis"], {
    axisStart: {
      x: 1,
      y: 0
    },
    axisEnd: {
      x: 0,
      y: 1
    },
    axisDomain: [1000, 900],
    tickSize: -10,
    tickValue: function tickValue(t) {
      return "\xA1".concat(t, "!");
    }
  }));
}
// CONCATENATED MODULE: ./demos/vis/plot/difference-chart.js









// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
 // When making a difference chart you are specifying in coordinates
// where you want your bars to start and stop

var difference_chart_myDATA = Object(toConsumableArray["a" /* default */])(new Array(15)).map(function (x, idx) {
  return {
    x: idx,
    // if the bars are above zero then we start them at zero
    y0: idx - 4 < 0 ? idx - 4 : 0,
    // if the bars are below zero then we stop them at zero
    y: idx < 5 ? 0 : Math.abs(idx - 4)
  };
});

var difference_chart_yDomain = difference_chart_myDATA.reduce(function (res, row) {
  return {
    max: Math.max(res.max, row.y, row.y0),
    min: Math.min(res.min, row.y, row.y0)
  };
}, {
  max: -Infinity,
  min: Infinity
});

var difference_chart_DifferenceChart =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(DifferenceChart, _React$Component);

  function DifferenceChart() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, DifferenceChart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(DifferenceChart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      useCanvas: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(DifferenceChart, [{
    key: "render",
    value: function render() {
      var useCanvas = this.state.useCanvas;
      var BarSeries = useCanvas ? external_react_vis_["VerticalBarSeriesCanvas"] : external_react_vis_["VerticalBarSeries"];
      return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        height: 300,
        yDomain: [difference_chart_yDomain.min, difference_chart_yDomain.max]
      }, external_react_default.a.createElement(BarSeries, {
        data: difference_chart_myDATA,
        colorType: "literal",
        getColor: function getColor(d) {
          return d.y0 < 0 ? '#007bff' : '#52c41a';
        }
      }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }));
    }
  }]);

  return DifferenceChart;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/radial-chart/donut-chart.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



var donut_chart_SimpleRadialChart =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(SimpleRadialChart, _Component);

  function SimpleRadialChart() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, SimpleRadialChart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(SimpleRadialChart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      value: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(SimpleRadialChart, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      return external_react_default.a.createElement(external_react_vis_["RadialChart"], {
        className: 'donut-chart-example m-auto',
        innerRadius: 100,
        radius: 140,
        getAngle: function getAngle(d) {
          return d.theta;
        },
        data: [{
          theta: 2,
          className: 'custom-class'
        }, {
          theta: 6
        }, {
          theta: 2
        }, {
          theta: 3
        }, {
          theta: 1
        }],
        onValueMouseOver: function onValueMouseOver(v) {
          return _this2.setState({
            value: v
          });
        },
        onSeriesMouseOut: function onSeriesMouseOut(v) {
          return _this2.setState({
            value: false
          });
        },
        width: 300,
        height: 300,
        padAngle: 0.04
      }, value && external_react_default.a.createElement(external_react_vis_["Hint"], {
        value: value
      }));
    }
  }]);

  return SimpleRadialChart;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./demos/vis/misc/dragable-chart-example.js








// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var dragable_chart_example_DATA = [{
  x0: 0,
  x: 1,
  y: 1
}, {
  x0: 1,
  x: 2,
  y: 2
}, {
  x0: 2,
  x: 3,
  y: 10
}, {
  x0: 3,
  x: 4,
  y: 6
}, {
  x0: 4,
  x: 5,
  y: 5
}, {
  x0: 5,
  x: 6,
  y: 3
}, {
  x0: 6,
  x: 7,
  y: 1
}];

var dragable_chart_example_DragableChartExample =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(DragableChartExample, _React$Component);

  function DragableChartExample() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, DragableChartExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(DragableChartExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      selectionStart: null,
      selectionEnd: null
    });

    return _this;
  }

  Object(createClass["a" /* default */])(DragableChartExample, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          selectionStart = _this$state.selectionStart,
          selectionEnd = _this$state.selectionEnd;

      var updateDragState = function updateDragState(area) {
        return _this2.setState({
          selectionStart: area && area.left,
          selectionEnd: area && area.right
        });
      };

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        height: 300
      }, external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["VerticalRectSeries"], {
        data: dragable_chart_example_DATA,
        stroke: "white",
        colorType: "literal",
        getColor: function getColor(d) {
          if (selectionStart === null || selectionEnd === null) {
            return '#007bff';
          }

          var inX = d.x >= selectionStart && d.x <= selectionEnd;
          var inX0 = d.x0 >= selectionStart && d.x0 <= selectionEnd;
          var inStart = selectionStart >= d.x0 && selectionStart <= d.x;
          var inEnd = selectionEnd >= d.x0 && selectionEnd <= d.x;
          return inStart || inEnd || inX || inX0 ? '#f5222d' : '#007bff';
        }
      }), external_react_default.a.createElement(external_react_vis_["Highlight"], {
        color: "#829AE3",
        drag: true,
        enableY: false,
        onDrag: updateDragState,
        onDragEnd: updateDragState
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("b", null, "selectionStart:"), " ", "".concat(Math.floor(selectionStart * 100) / 100, ","), external_react_default.a.createElement("b", null, "selectionEnd:"), " ", "".concat(Math.floor(selectionEnd * 100) / 100, ",")));
    }
  }]);

  return DragableChartExample;
}(external_react_default.a.Component);

/* harmony default export */ var dragable_chart_example = (dragable_chart_example_DragableChartExample);
// CONCATENATED MODULE: ./demos/vis/axes/dynamic-complex-edge-hints.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var _Hint$ALIGN = external_react_vis_["Hint"].ALIGN,
    LEFT = _Hint$ALIGN.LEFT,
    TOP = _Hint$ALIGN.TOP,
    BOTTOM_EDGE = _Hint$ALIGN.BOTTOM_EDGE,
    LEFT_EDGE = _Hint$ALIGN.LEFT_EDGE,
    RIGHT_EDGE = _Hint$ALIGN.RIGHT_EDGE,
    TOP_EDGE = _Hint$ALIGN.TOP_EDGE;
var CHART_MARGINS = {
  left: 30,
  right: 10,
  top: 10,
  bottom: 25
};
var XMIN = 1;
var XMAX = 4;
var YMIN = 5;
var YMAX = 15;
var dynamic_complex_edge_hints_DATA = [{
  x: 1,
  y: 5
}, {
  x: 2,
  y: 8
}, {
  x: 3,
  y: 12
}, {
  x: 4,
  y: 15
}];
var POLE = [[{
  x: XMIN,
  y: dynamic_complex_edge_hints_DATA[0].y
}, {
  x: XMAX,
  y: dynamic_complex_edge_hints_DATA[0].y
}], [{
  x: dynamic_complex_edge_hints_DATA[1].x,
  y: dynamic_complex_edge_hints_DATA[1].y
}, {
  x: dynamic_complex_edge_hints_DATA[1].x,
  y: YMAX
}], [{
  x: dynamic_complex_edge_hints_DATA[2].x,
  y: YMIN
}, {
  x: dynamic_complex_edge_hints_DATA[2].x,
  y: dynamic_complex_edge_hints_DATA[2].y
}], [{
  x: XMIN,
  y: dynamic_complex_edge_hints_DATA[3].y
}, {
  x: dynamic_complex_edge_hints_DATA[3].x,
  y: dynamic_complex_edge_hints_DATA[3].y
}]];
var DATA_HINT_ALIGN = [{
  horizontal: RIGHT_EDGE,
  vertical: TOP
}, {
  horizontal: LEFT,
  vertical: TOP_EDGE
}, {
  horizontal: LEFT,
  vertical: BOTTOM_EDGE
}, {
  horizontal: LEFT_EDGE,
  vertical: TOP
}];

var dynamic_complex_edge_hints_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Example).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_rememberValue", function (value) {
      _this.setState({
        value: value
      });
    });

    _this.state = {
      value: null
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var value = this.state.value;
      return external_react_default.a.createElement("div", {
        className: "complex-hint"
      }, external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        height: 300,
        margin: CHART_MARGINS
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["MarkSeries"], {
        color: "#007bff",
        onNearestX: this._rememberValue,
        data: dynamic_complex_edge_hints_DATA
      }), value ? external_react_default.a.createElement(external_react_vis_["LineSeries"], {
        color: "#007bff",
        data: POLE[value.x - 1],
        stroke: "black"
      }) : null, value ? external_react_default.a.createElement(external_react_vis_["Hint"], {
        value: value,
        align: DATA_HINT_ALIGN[value.x - 1]
      }, external_react_default.a.createElement("div", {
        className: "hint--text-container ".concat(DATA_HINT_ALIGN[value.x - 1].horizontal, "-").concat(DATA_HINT_ALIGN[value.x - 1].vertical)
      }, external_react_default.a.createElement("div", {
        className: "hint--text"
      }, "(".concat(value.x, ", ").concat(value.y, ")"))), external_react_default.a.createElement("div", {
        className: "hint--pole ".concat(DATA_HINT_ALIGN[value.x - 1].horizontal, "-").concat(DATA_HINT_ALIGN[value.x - 1].vertical)
      })) : null));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/axes/dynamic-crosshair.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var dynamic_crosshair_DATA = [[{
  x: 1,
  y: 10
}, {
  x: 2,
  y: 7
}, {
  x: 3,
  y: 15
}], [{
  x: 1,
  y: 20
}, {
  x: 2,
  y: 5
}, {
  x: 3,
  y: 15
}]];

var dynamic_crosshair_DynamicCrosshair =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(DynamicCrosshair, _React$Component);

  function DynamicCrosshair(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DynamicCrosshair);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DynamicCrosshair).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onMouseLeave", function () {
      _this.setState({
        crosshairValues: []
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onNearestX", function (value, _ref) {
      var index = _ref.index;

      _this.setState({
        crosshairValues: dynamic_crosshair_DATA.map(function (d) {
          return d[index];
        })
      });
    });

    _this.state = {
      crosshairValues: []
    };
    return _this;
  }
  /**
   * Event handler for onMouseLeave.
   * @private
   */


  Object(createClass["a" /* default */])(DynamicCrosshair, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        onMouseLeave: this._onMouseLeave,
        height: 300
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
        color: "#007bff",
        onNearestX: this._onNearestX,
        data: dynamic_crosshair_DATA[0]
      }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
        color: "#52c41a",
        data: dynamic_crosshair_DATA[1]
      }), external_react_default.a.createElement(external_react_vis_["Crosshair"], {
        values: this.state.crosshairValues,
        className: 'test-class-name'
      }));
    }
  }]);

  return DynamicCrosshair;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "d3-scale"
var external_d3_scale_ = __webpack_require__("IqNg");

// CONCATENATED MODULE: ./demos/vis/axes/dynamic-crosshair-scatterplot.js









// Copyright (c) 2016-2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



var dynamic_crosshair_scatterplot_DATA = [{
  x: 1,
  y: 4,
  size: 9
}, {
  x: 1,
  y: 5,
  size: 18
}, {
  x: 1,
  y: 10,
  size: 5
}, {
  x: 1,
  y: 11,
  size: 29
}, {
  x: 1,
  y: 13.9,
  size: 5
}, {
  x: 1,
  y: 14,
  size: 8
}, {
  x: 1.5,
  y: 11.8,
  size: 25
}, {
  x: 1.7,
  y: 9,
  size: 30
}, {
  x: 2,
  y: 5,
  size: 11
}, {
  x: 2.1,
  y: 11.8,
  size: 28
}, {
  x: 2.4,
  y: 7.9,
  size: 14
}, {
  x: 2.4,
  y: 13.5,
  size: 20
}, {
  x: 2.7,
  y: 13.7,
  size: 14
}, {
  x: 2.9,
  y: 7.7,
  size: 26
}, {
  x: 3,
  y: 5.4,
  size: 6
}].map(function (d, id) {
  return Object(objectSpread["a" /* default */])({}, d, {
    id: id
  });
});

var getDomain = function getDomain(data, key) {
  var _data$reduce = data.reduce(function (acc, row) {
    return {
      min: Math.min(acc.min, row[key]),
      max: Math.max(acc.max, row[key])
    };
  }, {
    min: Infinity,
    max: -Infinity
  }),
      min = _data$reduce.min,
      max = _data$reduce.max;

  return [min, max];
}; // magic numbers chosen for design


var sizeRange = [5, 13];
var margin = {
  top: 10,
  left: 40,
  bottom: 40,
  right: 10
};
var dynamic_crosshair_scatterplot_width = 300;
var dynamic_crosshair_scatterplot_height = 279; // Intentionally using explicit sales here to show another way of using the voronoi

var _x = Object(external_d3_scale_["scaleLinear"])().domain(getDomain(dynamic_crosshair_scatterplot_DATA, 'x')).range([0, dynamic_crosshair_scatterplot_width]);

var _y = Object(external_d3_scale_["scaleLinear"])().domain(getDomain(dynamic_crosshair_scatterplot_DATA, 'y')).range([dynamic_crosshair_scatterplot_height, 0]);

var dynamic_crosshair_scatterplot_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      selectedPointId: null,
      showVoronoi: true
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          crosshairValues = _this$state.crosshairValues,
          selectedPointId = _this$state.selectedPointId,
          showVoronoi = _this$state.showVoronoi;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Checkbox"], {
        checked: showVoronoi,
        onChange: function onChange() {
          return _this2.setState({
            showVoronoi: !showVoronoi
          });
        }
      }, "Show Voronoi"), external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            selectedPointId: null,
            crosshairValues: null
          });
        },
        height: dynamic_crosshair_scatterplot_height
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["MarkSeries"], {
        className: "mark-series-example",
        colorType: "literal",
        data: dynamic_crosshair_scatterplot_DATA,
        onNearestXY: function onNearestXY(value, _ref) {
          var index = _ref.index;
          return _this2.setState({
            selectedPointId: index,
            crosshairValues: [value]
          });
        },
        getColor: function getColor(_ref2) {
          var id = _ref2.id;
          return selectedPointId === id ? '#f5222d' : '#007bff';
        },
        sizeRange: sizeRange
      }), crosshairValues && external_react_default.a.createElement(external_react_vis_["Crosshair"], {
        values: crosshairValues
      }), showVoronoi && external_react_default.a.createElement(external_react_vis_["Voronoi"], {
        extent: [[margin.left, margin.top], [dynamic_crosshair_scatterplot_width - margin.right, dynamic_crosshair_scatterplot_height - margin.bottom]],
        nodes: dynamic_crosshair_scatterplot_DATA,
        polygonStyle: {
          stroke: 'rgba(0, 0, 0, .2)'
        },
        x: function x(d) {
          return _x(d.x);
        },
        y: function y(d) {
          return _y(d.y);
        }
      })));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/axes/dynamic-hints.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var dynamic_hints_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Example).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_forgetValue", function () {
      _this.setState({
        value: null
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_rememberValue", function (value) {
      _this.setState({
        value: value
      });
    });

    _this.state = {
      value: null
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var value = this.state.value;
      return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        height: 300
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["MarkSeries"], {
        color: "#007bff",
        onValueMouseOver: this._rememberValue,
        onValueMouseOut: this._forgetValue,
        data: [{
          x: 1,
          y: 10
        }, {
          x: 2,
          y: 5
        }, {
          x: 3,
          y: 15
        }]
      }), value ? external_react_default.a.createElement(external_react_vis_["Hint"], {
        value: value
      }) : null);
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/axes/dynamic-programmatic-rightedge-hints.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var dynamic_programmatic_rightedge_hints_CHART_MARGINS = {
  left: 50,
  right: 10,
  top: 10,
  bottom: 25
};
var dynamic_programmatic_rightedge_hints_DATA = [{
  x: 1,
  y: 5
}, {
  x: 2,
  y: 12
}, {
  x: 3,
  y: 8
}, {
  x: 4,
  y: 15
}];
var dynamic_programmatic_rightedge_hints_XMAX = 4;

function getAlignStyle(align, x, y) {
  return {
    right: 0,
    top: dynamic_programmatic_rightedge_hints_CHART_MARGINS.top + y
  };
}

var dynamic_programmatic_rightedge_hints_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Example).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_rememberValue", function (value) {
      _this.setState({
        value: value
      });
    });

    _this.state = {
      value: null
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var value = this.state.value;
      return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        height: 300,
        margin: dynamic_programmatic_rightedge_hints_CHART_MARGINS
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["MarkSeries"], {
        color: "#007bff",
        onNearestX: this._rememberValue,
        data: dynamic_programmatic_rightedge_hints_DATA
      }), value ? external_react_default.a.createElement(external_react_vis_["LineSeries"], {
        color: "#52c41a",
        data: [{
          x: value.x,
          y: value.y
        }, {
          x: dynamic_programmatic_rightedge_hints_XMAX,
          y: value.y
        }],
        stroke: "black"
      }) : null, value ? external_react_default.a.createElement(external_react_vis_["Hint"], {
        value: value,
        getAlignStyle: getAlignStyle
      }, external_react_default.a.createElement("div", {
        className: "rv-hint__content"
      }, "(".concat(value.x, ", ").concat(value.y, ")"))) : null);
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/axes/dynamic-simple-edge-hints.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var dynamic_simple_edge_hints_Hint$ALIGN = external_react_vis_["Hint"].ALIGN,
    dynamic_simple_edge_hints_LEFT = dynamic_simple_edge_hints_Hint$ALIGN.LEFT,
    RIGHT = dynamic_simple_edge_hints_Hint$ALIGN.RIGHT,
    dynamic_simple_edge_hints_TOP = dynamic_simple_edge_hints_Hint$ALIGN.TOP,
    dynamic_simple_edge_hints_BOTTOM_EDGE = dynamic_simple_edge_hints_Hint$ALIGN.BOTTOM_EDGE,
    dynamic_simple_edge_hints_RIGHT_EDGE = dynamic_simple_edge_hints_Hint$ALIGN.RIGHT_EDGE,
    dynamic_simple_edge_hints_TOP_EDGE = dynamic_simple_edge_hints_Hint$ALIGN.TOP_EDGE;
var dynamic_simple_edge_hints_CHART_MARGINS = {
  left: 50,
  right: 10,
  top: 10,
  bottom: 25
};
var dynamic_simple_edge_hints_DATA = [{
  x: 1,
  y: 5
}, {
  x: 2,
  y: 10
}, {
  x: 3,
  y: 10
}, {
  x: 4,
  y: 15
}];
var dynamic_simple_edge_hints_DATA_HINT_ALIGN = [{
  horizontal: dynamic_simple_edge_hints_RIGHT_EDGE,
  vertical: dynamic_simple_edge_hints_TOP
}, {
  horizontal: RIGHT,
  vertical: dynamic_simple_edge_hints_BOTTOM_EDGE
}, {
  horizontal: dynamic_simple_edge_hints_LEFT,
  vertical: dynamic_simple_edge_hints_TOP_EDGE
}, {
  horizontal: dynamic_simple_edge_hints_LEFT,
  vertical: dynamic_simple_edge_hints_BOTTOM_EDGE
}];

var dynamic_simple_edge_hints_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Example).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_rememberValue", function (value) {
      _this.setState({
        value: value
      });
    });

    _this.state = {
      value: null
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var value = this.state.value;
      return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        height: 300,
        margin: dynamic_simple_edge_hints_CHART_MARGINS
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["MarkSeries"], {
        color: "#007bff",
        onNearestX: this._rememberValue,
        data: dynamic_simple_edge_hints_DATA
      }), value ? external_react_default.a.createElement(external_react_vis_["Hint"], {
        value: value,
        align: dynamic_simple_edge_hints_DATA_HINT_ALIGN[value.x - 1]
      }, external_react_default.a.createElement("div", {
        className: "rv-hint__content"
      }, "(".concat(value.x, ", ").concat(value.y, ")"), external_react_default.a.createElement("br", null), "".concat(dynamic_simple_edge_hints_DATA_HINT_ALIGN[value.x - 1].horizontal, "-").concat(dynamic_simple_edge_hints_DATA_HINT_ALIGN[value.x - 1].vertical))) : null);
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/axes/dynamic-simple-topedge-hints.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var dynamic_simple_topedge_hints_CHART_MARGINS = {
  left: 50,
  right: 10,
  top: 10,
  bottom: 25
};
var dynamic_simple_topedge_hints_DATA = [{
  x: 1,
  y: 5
}, {
  x: 2,
  y: 10
}, {
  x: 3,
  y: 10
}, {
  x: 4,
  y: 15
}];
var dynamic_simple_topedge_hints_YMAX = 15;

var dynamic_simple_topedge_hints_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Example).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_rememberValue", function (value) {
      _this.setState({
        value: value
      });
    });

    _this.state = {
      value: null
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var value = this.state.value;
      return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        height: 300,
        margin: dynamic_simple_topedge_hints_CHART_MARGINS
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["MarkSeries"], {
        color: "#007bff",
        onNearestX: this._rememberValue,
        data: dynamic_simple_topedge_hints_DATA
      }), value ? external_react_default.a.createElement(external_react_vis_["LineSeries"], {
        color: "#52c41a",
        data: [{
          x: value.x,
          y: value.y
        }, {
          x: value.x,
          y: dynamic_simple_topedge_hints_YMAX
        }],
        stroke: "black"
      }) : null, value ? external_react_default.a.createElement(external_react_vis_["Hint"], {
        value: value,
        align: {
          horizontal: external_react_vis_["Hint"].ALIGN.AUTO,
          vertical: external_react_vis_["Hint"].ALIGN.TOP_EDGE
        }
      }, external_react_default.a.createElement("div", {
        className: "rv-hint__content"
      }, "(".concat(value.x, ", ").concat(value.y, ")"))) : null);
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/axes/empty-chart.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function EmptyChart() {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    dontCheckIfEmpty: true,
    xDomain: [0, 3],
    yDomain: [10, 3],
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], {
    hideLine: true,
    title: "Empty Chart Right Here",
    tickFormat: function tickFormat(v) {
      return "".concat(v, "!");
    },
    tickValues: [1, 1.5, 2, 3]
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    hideTicks: true
  }));
}
// EXTERNAL MODULE: ./demos/vis/datasets/energy.json
var energy = __webpack_require__("d9oP");

// CONCATENATED MODULE: ./demos/vis/sankey/energy-sankey.js











var energy_sankey_Option = external_antd_["Select"].Option;
var energy_sankey_MODE = ['justify', 'center', 'left', 'right'];

var energy_sankey_EnergySankey =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(EnergySankey, _React$Component);

  function EnergySankey() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, EnergySankey);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(EnergySankey)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      modeIndex: energy_sankey_MODE[0]
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "updateModeIndex", function (value) {
      _this.setState({
        modeIndex: value
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(EnergySankey, [{
    key: "render",
    value: function render() {
      var modeIndex = this.state.modeIndex;
      return external_react_default.a.createElement("div", {
        className: "centered-and-flexed"
      }, external_react_default.a.createElement(external_antd_["Select"], {
        defaultValue: modeIndex,
        onChange: this.updateModeIndex,
        size: "small",
        className: "mx-3"
      }, energy_sankey_MODE.map(function (mode, index) {
        return external_react_default.a.createElement(energy_sankey_Option, {
          value: mode,
          key: index
        }, mode);
      })), external_react_default.a.createElement(sankey_default.a, {
        className: "m-auto",
        animation: true,
        margin: 50,
        nodes: energy.nodes,
        links: energy.links,
        width: 960,
        align: modeIndex,
        height: 500,
        layout: 24,
        nodeWidth: 15,
        nodePadding: 10,
        style: {
          links: {
            opacity: 0.3
          },
          labels: {
            fontSize: '8px'
          },
          rects: {
            strokeWidth: 2,
            stroke: '#1A3177'
          }
        }
      }));
    }
  }]);

  return EnergySankey;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/plot/faux-radial-scatterplot.js


// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var faux_radial_scatterplot_data = [{
  r: 1,
  theta: Math.PI / 3,
  size: 30
}, {
  r: 1.7,
  theta: 2 * Math.PI / 3,
  size: 10
}, {
  r: 2,
  theta: Math.PI,
  size: 1
}, {
  r: 3,
  theta: 3 * Math.PI / 2,
  size: 12
}, {
  r: 2.5,
  theta: Math.PI / 4,
  size: 4
}, {
  r: 0,
  theta: Math.PI / 4,
  size: 1
}];
var faux_radial_scatterplot_margin = {
  top: 10,
  bottom: 10,
  left: 10,
  right: 10
};
var WIDTH = 300;
var HEIGHT = 300;
function faux_radial_scatterplot_Example(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    margin: faux_radial_scatterplot_margin,
    xDomain: [0, 3],
    yDomain: [0, 3],
    height: HEIGHT
  }, external_react_default.a.createElement(external_react_vis_["XAxis"], {
    top: (HEIGHT - faux_radial_scatterplot_margin.top) / 2,
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    left: (WIDTH - faux_radial_scatterplot_margin.left - faux_radial_scatterplot_margin.right) / 2,
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["MarkSeries"], {
    color: "#007bff",
    strokeWidth: 2,
    sizeRange: [5, 15],
    data: faux_radial_scatterplot_data.map(function (row) {
      return Object(objectSpread["a" /* default */])({}, row, {
        x: Math.abs(Math.cos(row.theta) * row.r),
        y: Math.abs(Math.sin(row.theta) * row.r)
      });
    })
  }));
}
// CONCATENATED MODULE: ./demos/vis/flexible/flexible-examples.js


// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var flexible_examples_data = [{
  x: 0,
  y: 8
}, {
  x: 1,
  y: 5
}, {
  x: 2,
  y: 4
}, {
  x: 3,
  y: 9
}, {
  x: 4,
  y: 1
}, {
  x: 5,
  y: 7
}, {
  x: 6,
  y: 6
}, {
  x: 7,
  y: 3
}, {
  x: 8,
  y: 2
}];
var flexible_examples_defaultProps = {
  margin: {
    top: 10,
    left: 10,
    right: 10,
    bottom: 10
  }
};
var flexible_examples_FlexibleCharts = function FlexibleCharts(_ref) {
  var height = _ref.height,
      width = _ref.width;
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      position: 'relative',
      width: width || '60vw'
    }
  }, external_react_default.a.createElement("div", {
    style: {
      width: '30%'
    }
  }, "Flexible width - fixed height"), external_react_default.a.createElement("div", {
    style: {
      width: '30%'
    }
  }, "Flexible height - fixed width"), external_react_default.a.createElement("div", {
    style: {
      width: '30%'
    }
  }, "Flexible width and height")), external_react_default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      position: 'relative',
      width: width || '60vw',
      height: height || '30vh'
    }
  }, external_react_default.a.createElement("div", {
    className: "flexible-width",
    style: {
      width: '30%',
      height: '100%',
      border: '1px solid #ccc'
    }
  }, external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], Object(esm_extends["a" /* default */])({}, flexible_examples_defaultProps, {
    height: 100
  }), external_react_default.a.createElement(external_react_vis_["VerticalBarSeries"], {
    data: flexible_examples_data
  }))), external_react_default.a.createElement("div", {
    className: "flexible-height",
    style: {
      width: '30%',
      height: '100%',
      border: '1px solid #ccc'
    }
  }, external_react_default.a.createElement(external_react_vis_["FlexibleHeightXYPlot"], Object(esm_extends["a" /* default */])({}, flexible_examples_defaultProps, {
    width: 100
  }), external_react_default.a.createElement(external_react_vis_["VerticalBarSeries"], {
    data: flexible_examples_data
  }))), external_react_default.a.createElement("div", {
    className: "flexible-vis",
    style: {
      width: '30%',
      height: '100%',
      border: '1px solid #ccc'
    }
  }, external_react_default.a.createElement(external_react_vis_["FlexibleXYPlot"], flexible_examples_defaultProps, external_react_default.a.createElement(external_react_vis_["VerticalBarSeries"], {
    data: flexible_examples_data
  })))));
};
// CONCATENATED MODULE: ./demos/vis/radar-chart/four-quadrant-radar-chart.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var RADAR_PROPS = {
  data: [{
    C: 30,
    VisualBasics: 60,
    Excel: 40,
    Access: 40
  }],
  domains: [{
    name: 'C',
    domain: [0, 100]
  }, {
    name: 'VisualBasics',
    domain: [0, 100]
  }, {
    name: 'Excel',
    domain: [0, 100]
  }, {
    name: 'Access',
    domain: [0, 100]
  }],
  height: 300,
  width: 400
};
function FourQuadrantRadarChart(props) {
  return external_react_default.a.createElement(radar_chart_default.a, {
    data: RADAR_PROPS.data,
    domains: RADAR_PROPS.domains,
    height: RADAR_PROPS.height,
    width: RADAR_PROPS.width,
    startingAngle: Math.PI / 7,
    className: "overflow-okay horizontally-centered m-auto",
    style: {
      labels: {
        fontSize: 13
      },
      polygons: {
        fillOpacity: 0.1,
        strokeOpacity: 1,
        strokeWidth: 0.5
      }
    }
  });
}
// CONCATENATED MODULE: ./demos/vis/misc/gradient-example.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function GradientExample(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    xDomain: [1.2, 3],
    yDomain: [11, 26],
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["GradientDefs"], null, external_react_default.a.createElement("linearGradient", {
    id: "CoolGradient",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, external_react_default.a.createElement("stop", {
    offset: "0%",
    stopColor: "#52c41a",
    stopOpacity: 0.4
  }), external_react_default.a.createElement("stop", {
    offset: "100%",
    stopColor: "#007bff",
    stopOpacity: 0.3
  }))), external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["AreaSeries"], {
    color: 'url(#CoolGradient)',
    data: [{
      x: 1,
      y: 10,
      y0: 1
    }, {
      x: 2,
      y: 25,
      y0: 5
    }, {
      x: 3,
      y: 15,
      y0: 3
    }]
  }), external_react_default.a.createElement(external_react_vis_["Borders"], {
    style: {
      bottom: {
        fill: '#fff'
      },
      left: {
        fill: 'url(#CoolGradient)',
        opacity: 0.3
      },
      right: {
        fill: '#fff'
      },
      top: {
        fill: '#fff'
      }
    }
  }), external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["AreaSeries"], {
    data: [{
      x: 1,
      y: 5,
      y0: 6
    }, {
      x: 2,
      y: 20,
      y0: 11
    }, {
      x: 3,
      y: 10,
      y0: 9
    }]
  }));
}
// CONCATENATED MODULE: ./demos/vis/radial-chart/gradient-pie.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function GradientPie(props) {
  return external_react_default.a.createElement(external_react_vis_["RadialChart"], {
    className: "m-auto",
    colorType: 'literal',
    colorDomain: [0, 100],
    colorRange: [0, 10],
    margin: {
      top: 100
    },
    getColor: function getColor(d) {
      return "url(#".concat(d.gradientLabel, ")");
    },
    data: [{
      angle: 1,
      gradientLabel: 'grad1'
    }, {
      angle: 2,
      gradientLabel: 'grad2'
    }, {
      angle: 5,
      gradientLabel: 'grad3'
    }],
    labelsRadiusMultiplier: 1.1,
    labelsStyle: {
      fontSize: 16,
      fill: '#222'
    },
    showLabels: true,
    style: {
      stroke: '#fff',
      strokeWidth: 2
    },
    width: 400,
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["GradientDefs"], null, external_react_default.a.createElement("linearGradient", {
    id: "grad1",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, external_react_default.a.createElement("stop", {
    offset: "0%",
    stopColor: "red",
    stopOpacity: 0.4
  }), external_react_default.a.createElement("stop", {
    offset: "100%",
    stopColor: "blue",
    stopOpacity: 0.3
  })), external_react_default.a.createElement("linearGradient", {
    id: "grad2",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, external_react_default.a.createElement("stop", {
    offset: "0%",
    stopColor: "blue",
    stopOpacity: 0.4
  }), external_react_default.a.createElement("stop", {
    offset: "100%",
    stopColor: "green",
    stopOpacity: 0.3
  })), external_react_default.a.createElement("linearGradient", {
    id: "grad3",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, external_react_default.a.createElement("stop", {
    offset: "0%",
    stopColor: "yellow",
    stopOpacity: 0.4
  }), external_react_default.a.createElement("stop", {
    offset: "100%",
    stopColor: "green",
    stopOpacity: 0.3
  }))));
}
// CONCATENATED MODULE: ./demos/vis/plot/grid.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function grid_Example(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
    values: [2, 2.3, 2.7],
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    color: "#007bff",
    data: [{
      x: 1,
      y: 10
    }, {
      x: 2,
      y: 5
    }, {
      x: 3,
      y: 15
    }]
  }));
}
// CONCATENATED MODULE: ./demos/vis/plot/heatmap-chart.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function heatmap_chart_Example(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["XAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["HeatmapSeries"], {
    className: "heatmap-series-example",
    data: [{
      x: 1,
      y: 0,
      color: 10
    }, {
      x: 1,
      y: 5,
      color: 10
    }, {
      x: 1,
      y: 10,
      color: 6
    }, {
      x: 1,
      y: 15,
      color: 7
    }, {
      x: 2,
      y: 0,
      color: 12
    }, {
      x: 2,
      y: 5,
      color: 2
    }, {
      x: 2,
      y: 10,
      color: 1
    }, {
      x: 2,
      y: 15,
      color: 12
    }, {
      x: 3,
      y: 0,
      color: 9
    }, {
      x: 3,
      y: 5,
      color: 2
    }, {
      x: 3,
      y: 10,
      color: 6
    }, {
      x: 3,
      y: 15,
      color: 12
    }]
  }));
}
// CONCATENATED MODULE: ./demos/vis/plot/hex-heatmap.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.





var hex_heatmap_ButtonGroup = external_antd_["Button"].Group;

function hex_heatmap_updateData() {
  return old_faithful.map(function (row) {
    return {
      waiting: row.waiting + (Math.random() - 0.5) * 10,
      eruptions: row.eruptions + (Math.random() - 0.5) * 2
    };
  });
}

var hex_heatmap_HexHeatmap =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(HexHeatmap, _Component);

  function HexHeatmap() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, HexHeatmap);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(HexHeatmap)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      data: old_faithful,
      hoveredNode: null,
      radius: 10,
      offset: 0
    });

    return _this;
  }

  Object(createClass["a" /* default */])(HexHeatmap, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          data = _this$state.data,
          radius = _this$state.radius,
          hoveredNode = _this$state.hoveredNode,
          offset = _this$state.offset;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(hex_heatmap_ButtonGroup, {
        size: "sm"
      }, external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.setState({
            data: hex_heatmap_updateData()
          });
        },
        buttonContent: 'Update data'
      }), external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.setState({
            radius: (Math.random() - 0.5) * 10 + 10
          });
        },
        buttonContent: 'Update radius'
      }), external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.setState({
            offset: (Math.random() - 0.5) * 10 + 10
          });
        },
        buttonContent: 'Update offset'
      })), external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        xDomain: [40, 100],
        yDomain: [1.5, 8],
        getX: function getX(d) {
          return d.waiting;
        },
        getY: function getY(d) {
          return d.eruptions;
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            hoveredNode: null
          });
        },
        height: 276
      }, external_react_default.a.createElement(external_react_vis_["HexbinSeries"], {
        animation: true,
        className: "hexbin-example",
        style: {
          stroke: '#125C77',
          strokeLinejoin: 'round'
        },
        onValueMouseOver: function onValueMouseOver(d) {
          return _this2.setState({
            hoveredNode: d
          });
        },
        xOffset: offset,
        yOffset: offset,
        colorRange: ['#f5222d', '#faad14'],
        radius: radius,
        data: data
      }), external_react_default.a.createElement(external_react_vis_["Borders"], {
        style: {
          all: {
            fill: '#fff'
          }
        }
      }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), hoveredNode && external_react_default.a.createElement(external_react_vis_["Hint"], {
        xType: "literal",
        yType: "literal",
        getX: function getX(d) {
          return d.x;
        },
        getY: function getY(d) {
          return d.y;
        },
        value: {
          x: hoveredNode.x,
          y: hoveredNode.y,
          value: hoveredNode.length
        }
      })));
    }
  }]);

  return HexHeatmap;
}(external_react_["Component"]);


// EXTERNAL MODULE: ./demos/vis/datasets/car-data.json
var car_data = __webpack_require__("S11y");

// CONCATENATED MODULE: ./demos/vis/plot/hexbin-size-example.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.





var hexbin_size_example_ButtonGroup = external_antd_["Button"].Group;
var DIMENSIONS = ['economy (mpg)', 'cylinders', 'displacement (cc)', 'power (hp)', 'weight (lb)', '0-60 mph (s)', 'year'];

var hexbin_size_example_HexbinSizeExample =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(HexbinSizeExample, _Component);

  function HexbinSizeExample() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, HexbinSizeExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(HexbinSizeExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      xAxis: 0,
      yAxis: 3
    });

    return _this;
  }

  Object(createClass["a" /* default */])(HexbinSizeExample, [{
    key: "updateX",
    value: function updateX(increment) {
      this.setState({
        xAxis: (this.state.xAxis + (increment ? 1 : -1)) % DIMENSIONS.length
      });
    }
  }, {
    key: "updateY",
    value: function updateY(increment) {
      this.setState({
        yAxis: (this.state.yAxis + (increment ? 1 : -1)) % DIMENSIONS.length
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          xAxis = _this$state.xAxis,
          yAxis = _this$state.yAxis;
      var data = car_data.map(function (d) {
        return {
          x: Number(d[DIMENSIONS[xAxis]]),
          y: Number(d[DIMENSIONS[yAxis]])
        };
      });
      return external_react_default.a.createElement("div", {
        className: "centered-and-flexed"
      }, external_react_default.a.createElement("div", {
        className: "centered-and-flexed-controls d-flex"
      }, external_react_default.a.createElement(hexbin_size_example_ButtonGroup, {
        size: "sm"
      }, external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.updateX(false);
        },
        buttonContent: 'Prev X'
      }), external_react_default.a.createElement(showcase_button, {
        buttonContent: "X AXIS ".concat(DIMENSIONS[xAxis])
      }), external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.updateX(true);
        },
        buttonContent: 'Next X'
      })), external_react_default.a.createElement("span", {
        className: "mr-auto"
      }), external_react_default.a.createElement(hexbin_size_example_ButtonGroup, {
        size: "sm"
      }, external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.updateY(false);
        },
        buttonContent: 'Prev Y'
      }), external_react_default.a.createElement(showcase_button, {
        buttonContent: "Y AXIS ".concat(DIMENSIONS[yAxis])
      }), external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.updateY(true);
        },
        buttonContent: 'Next Y'
      }))), external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            hoveredNode: null
          });
        },
        height: 331
      }, external_react_default.a.createElement(external_react_vis_["HexbinSeries"], {
        animation: true,
        sizeHexagonsWithCount: true,
        className: "hexbin-size-example",
        colorRange: ['#f5222d', '#faad14'],
        radius: 15,
        data: data
      }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        title: DIMENSIONS[xAxis],
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
        title: DIMENSIONS[yAxis],
        style: {
          strokeWidth: 0.5
        }
      })));
    }
  }]);

  return HexbinSizeExample;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./demos/vis/plot/histogram.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var histogram_timestamp = new Date('May 23 2017').getTime();
var ONE_DAY = 86400000;
var histogram_DATA = [{
  x0: ONE_DAY * 2,
  x: ONE_DAY * 3,
  y: 1
}, {
  x0: ONE_DAY * 7,
  x: ONE_DAY * 8,
  y: 1
}, {
  x0: ONE_DAY * 8,
  x: ONE_DAY * 9,
  y: 1
}, {
  x0: ONE_DAY * 9,
  x: ONE_DAY * 10,
  y: 2
}, {
  x0: ONE_DAY * 10,
  x: ONE_DAY * 11,
  y: 2.2
}, {
  x0: ONE_DAY * 19,
  x: ONE_DAY * 20,
  y: 1
}, {
  x0: ONE_DAY * 20,
  x: ONE_DAY * 21,
  y: 2.5
}, {
  x0: ONE_DAY * 21,
  x: ONE_DAY * 24,
  y: 1
}].map(function (el) {
  return {
    x0: el.x0 + histogram_timestamp,
    x: el.x + histogram_timestamp,
    y: el.y
  };
});
function histogram_Example(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    xDomain: [histogram_timestamp - 2 * ONE_DAY, histogram_timestamp + 30 * ONE_DAY],
    yDomain: [0.1, 2.1],
    xType: "time",
    height: 300,
    color: "#007bff"
  }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["VerticalRectSeries"], {
    data: histogram_DATA,
    style: {
      stroke: '#fff'
    }
  }));
}
// EXTERNAL MODULE: external "react-vis/dist/legends/discrete-color-legend"
var discrete_color_legend_ = __webpack_require__("H1bH");
var discrete_color_legend_default = /*#__PURE__*/__webpack_require__.n(discrete_color_legend_);

// EXTERNAL MODULE: external "react-vis/dist/plot/gradient-defs"
var gradient_defs_ = __webpack_require__("oOBo");
var gradient_defs_default = /*#__PURE__*/__webpack_require__.n(gradient_defs_);

// CONCATENATED MODULE: ./demos/vis/legends/horizontal-discrete-color.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var ITEMS = [{
  title: 'Dashed',
  color: '#45aeb1',
  strokeStyle: 'dashed'
}, {
  title: 'Dasharray',
  color: '#f93',
  strokeDasharray: '1 2 3 4 5 6 7'
}, {
  title: 'Dots',
  color: 'url(#circles)',
  strokeWidth: 9
}, {
  title: 'Stripes',
  color: 'url(#stripes)'
}, {
  title: 'Wide stripes',
  color: 'url(#stripes)',
  strokeWidth: 13
}, {
  title: 'Normal',
  color: 'purple'
}, {
  title: 'Wide',
  color: 'powderblue',
  strokeWidth: 6
}];
function DiscreteColorExample() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("svg", {
    height: 0,
    width: 0
  }, external_react_default.a.createElement(gradient_defs_default.a, null, external_react_default.a.createElement("pattern", {
    id: "stripes",
    width: "4",
    height: "4",
    patternUnits: "userSpaceOnUse"
  }, external_react_default.a.createElement("path", {
    d: "M 0, 0 l 5, 5",
    stroke: "#45aeb1",
    strokeLinecap: "square"
  })), external_react_default.a.createElement("pattern", {
    id: "circles",
    width: "3",
    height: "3",
    patternUnits: "userSpaceOnUse"
  }, external_react_default.a.createElement("circle", {
    cx: "1.5",
    cy: "1.5",
    r: "0.8",
    fill: "magenta"
  })))), external_react_default.a.createElement(discrete_color_legend_default.a, {
    orientation: "horizontal",
    items: ITEMS
  }));
}
// CONCATENATED MODULE: ./demos/vis/legends/horizontal-discrete-custom-palette.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var horizontal_discrete_custom_palette_ITEMS = ['Options', 'Buttons', 'Select boxes', 'Date inputs', 'Password inputs', 'Forms', 'Other'];
var COLORS = ['#6588cd', '#66b046', '#a361c7', '#ad953f', '#c75a87', '#55a47b', '#cb6141'];

var horizontal_discrete_custom_palette_HorizontalDiscreteColorPalette =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(HorizontalDiscreteColorPalette, _Component);

  function HorizontalDiscreteColorPalette() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, HorizontalDiscreteColorPalette);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(HorizontalDiscreteColorPalette)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      hoveredItem: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(HorizontalDiscreteColorPalette, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var hoveredItem = this.state.hoveredItem;
      return external_react_default.a.createElement(discrete_color_legend_default.a, {
        colors: COLORS,
        onItemMouseEnter: function onItemMouseEnter(i) {
          return _this2.setState({
            hoveredItem: i
          });
        },
        onItemMouseLeave: function onItemMouseLeave() {
          return _this2.setState({
            hoveredItem: false
          });
        },
        orientation: "horizontal",
        items: horizontal_discrete_custom_palette_ITEMS.map(function (item, key) {
          return hoveredItem === item ? external_react_default.a.createElement("div", {
            key: key
          }, item, external_react_default.a.createElement("br", null), 'SELECTED') : item;
        })
      });
    }
  }]);

  return HorizontalDiscreteColorPalette;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./demos/vis/misc/label-series-example.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




function label_series_example_generateData() {
  return [{
    x: Math.random() * 3,
    y: Math.random() * 20,
    label: 'Wigglytuff',
    size: 30,
    style: {
      fontSize: 20
    }
  }, {
    x: Math.random() * 3,
    y: Math.random() * 20,
    label: 'Psyduck',
    size: 10
  }, {
    x: Math.random() * 3,
    y: Math.random() * 20,
    label: 'Geodude',
    size: 1
  }, {
    x: Math.random() * 3,
    y: Math.random() * 20,
    label: 'red',
    size: 12,
    rotation: 45
  }, {
    x: Math.random() * 3,
    y: Math.random() * 20,
    label: 'blue',
    size: 4
  }];
}

var label_series_example_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      data: [{
        x: 3,
        y: 7,
        label: 'Wigglytuff',
        size: 30,
        style: {
          fontSize: 20
        },
        rotation: 45
      }, {
        x: 2,
        y: 4,
        label: 'Psyduck',
        size: 10
      }, {
        x: 1,
        y: 20,
        label: 'Geodude',
        size: 1
      }, {
        x: 4,
        y: 12,
        label: 'Ditto',
        size: 12,
        rotation: 45
      }, {
        x: 1,
        y: 14,
        label: 'Snorlax',
        size: 4
      }]
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = this.state.data;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.setState({
            data: label_series_example_generateData()
          });
        },
        buttonContent: external_react_default.a.createElement(external_react_feather_["RefreshCcw"], {
          size: 14,
          strokeWidth: 1
        })
      }), external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        yDomain: [-1, 22],
        xDomain: [-1, 5],
        height: 276
      }, external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["MarkSeries"], {
        className: "mark-series-example",
        strokeWidth: 2,
        sizeRange: [5, 15],
        data: data,
        color: "#007bff"
      }), external_react_default.a.createElement(external_react_vis_["LabelSeries"], {
        animation: true,
        allowOffsetToBeReversed: true,
        data: data
      })));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/plot/labeled-heatmap.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
var labeled_heatmap_data = alphabet.reduce(function (acc, letter1, idx) {
  return acc.concat(alphabet.map(function (letter2, jdx) {
    return {
      x: "".concat(letter1, "1"),
      y: "".concat(letter2, "2"),
      color: (idx + jdx) % Math.floor(jdx / idx) || idx
    };
  }));
}, []);

var _data$reduce = labeled_heatmap_data.reduce(function (acc, row) {
  return {
    min: Math.min(acc.min, row.color),
    max: Math.max(acc.max, row.color)
  };
}, {
  min: Infinity,
  max: -Infinity
}),
    min = _data$reduce.min,
    max = _data$reduce.max;

function LabeledHeatmap() {
  var exampleColorScale = Object(external_d3_scale_["scaleLinear"])().domain([min, (min + max) / 2, max]).range(['#007bff', '#52c41a', '#f5222d']);
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    xType: "ordinal",
    xDomain: alphabet.map(function (letter) {
      return "".concat(letter, "1");
    }),
    yType: "ordinal",
    yDomain: alphabet.map(function (letter) {
      return "".concat(letter, "2");
    }).reverse(),
    margin: 50,
    height: 355
  }, external_react_default.a.createElement(external_react_vis_["XAxis"], {
    orientation: "top",
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["HeatmapSeries"], {
    colorType: "literal",
    getColor: function getColor(d) {
      return exampleColorScale(d.color);
    },
    style: {
      stroke: 'white',
      strokeWidth: '1px',
      rectStyle: {
        rx: 0,
        ry: 0
      }
    },
    className: "heatmap-series-example",
    data: labeled_heatmap_data
  }), external_react_default.a.createElement(external_react_vis_["LabelSeries"], {
    data: labeled_heatmap_data,
    labelAnchorX: "middle",
    labelAnchorY: "baseline",
    getLabel: function getLabel(d) {
      return "".concat(d.color);
    }
  }));
}
// EXTERNAL MODULE: external "d3-shape"
var external_d3_shape_ = __webpack_require__("eZPE");

// CONCATENATED MODULE: ./demos/vis/plot/line-chart.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



var line_chart_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      useCanvas: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var useCanvas = this.state.useCanvas;
      var Line = useCanvas ? external_react_vis_["LineSeriesCanvas"] : external_react_vis_["LineSeries"];
      return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        height: 300
      }, external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        title: "X Axis",
        position: "start",
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
        title: "Y Axis",
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(Line, {
        className: "first-series",
        color: "#007bff",
        data: [{
          x: 1,
          y: 3
        }, {
          x: 2,
          y: 5
        }, {
          x: 3,
          y: 15
        }, {
          x: 4,
          y: 12
        }]
      }), external_react_default.a.createElement(Line, {
        className: "second-series",
        color: "#52c41a",
        data: null
      }), external_react_default.a.createElement(Line, {
        className: "third-series",
        color: "#f5222d",
        curve: 'curveMonotoneX',
        data: [{
          x: 1,
          y: 10
        }, {
          x: 2,
          y: 4
        }, {
          x: 3,
          y: 2
        }, {
          x: 4,
          y: 15
        }],
        strokeDasharray: useCanvas ? [7, 3] : '7, 3'
      }), external_react_default.a.createElement(Line, {
        className: "fourth-series",
        color: "#faad14",
        curve: external_d3_shape_["curveCatmullRom"].alpha(0.5),
        style: {
          // note that this can not be translated to the canvas version
          strokeDasharray: '2 2'
        },
        data: [{
          x: 1,
          y: 7
        }, {
          x: 2,
          y: 11
        }, {
          x: 3,
          y: 9
        }, {
          x: 4,
          y: 2
        }]
      }));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/plot/line-chart-canvas.js








// Copyright (c) 2016 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




var line_chart_canvas_ButtonGroup = external_antd_["Button"].Group;

function line_chart_canvas_getRandomData() {
  return new Array(100).fill(0).map(function (row, i) {
    return {
      x: i,
      y: Math.random() * 20,
      color: Math.random() * 10
    };
  });
}

var randomData = line_chart_canvas_getRandomData();
var colorRanges = {
  typeA: ['#007bff', '#52c41a'],
  typeB: ['#faad14', '#f5222d']
};
var nextType = {
  typeA: 'typeB',
  typeB: 'typeA'
};
var nextModeContent = {
  canvas: 'Switch to SVG',
  svg: 'Switch to canvas'
};
var drawModes = ['canvas', 'svg'];

var line_chart_canvas_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      drawMode: 1,
      data: randomData,
      colorType: 'typeA',
      strokeWidth: 1,
      showMarks: false,
      value: false,
      hideComponent: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          colorType = _this$state.colorType,
          drawMode = _this$state.drawMode,
          data = _this$state.data,
          hideComponent = _this$state.hideComponent,
          strokeWidth = _this$state.strokeWidth,
          showMarks = _this$state.showMarks,
          value = _this$state.value;
      var lineSeriesProps = {
        animation: true,
        className: 'mark-series-example',
        sizeRange: [5, 15],
        color: colorType === 'typeA' ? '#007bff' : '#f5222d',
        colorRange: colorRanges[colorType],
        opacityType: 'literal',
        strokeWidth: strokeWidth,
        data: data,
        onNearestX: function onNearestX(d) {
          return _this2.setState({
            value: d
          });
        }
      };
      var SVGComponent = showMarks ? external_react_vis_["LineMarkSeries"] : external_react_vis_["LineSeries"];
      var CanvasComponent = showMarks ? external_react_vis_["LineMarkSeriesCanvas"] : external_react_vis_["LineSeriesCanvas"];
      var mode = drawModes[drawMode];
      return external_react_default.a.createElement("div", {
        className: "canvas-wrapper"
      }, external_react_default.a.createElement(line_chart_canvas_ButtonGroup, {
        size: "sm"
      }, external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.setState({
            drawMode: (drawMode + 1) % 2
          });
        },
        buttonContent: nextModeContent[mode]
      }), external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.setState({
            showMarks: !showMarks
          });
        },
        buttonContent: showMarks ? 'Hide marks' : 'Show marks'
      }), external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.setState({
            data: line_chart_canvas_getRandomData()
          });
        },
        buttonContent: 'Update data'
      }), external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.setState({
            colorType: nextType[colorType]
          });
        },
        buttonContent: "Toggle color to ".concat(nextType[colorType])
      }), external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.setState({
            strokeWidth: strokeWidth === 1 ? 2 : 1
          });
        },
        buttonContent: 'Toggle strokewidth'
      }), external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.setState({
            hideComponent: !hideComponent
          });
        },
        buttonContent: hideComponent ? 'SHow' : 'Hide'
      })), !hideComponent && external_react_default.a.createElement(external_react_no_ssr_default.a, null, external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            value: false
          });
        },
        height: 276
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), mode === 'canvas' && external_react_default.a.createElement(CanvasComponent, lineSeriesProps), mode === 'svg' && external_react_default.a.createElement(SVGComponent, lineSeriesProps), value && external_react_default.a.createElement(external_react_vis_["Crosshair"], {
        values: [value]
      }))));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/color/line-chart-many-colors.js
// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var line_chart_many_colors_data = [];

for (var line_chart_many_colors_i = 0; line_chart_many_colors_i < 20; line_chart_many_colors_i++) {
  var line_chart_many_colors_series = [];

  for (var line_chart_many_colors_j = 0; line_chart_many_colors_j < 100; line_chart_many_colors_j++) {
    line_chart_many_colors_series.push({
      x: line_chart_many_colors_j,
      y: (line_chart_many_colors_i / 10 + 1) * Math.sin(Math.PI * (line_chart_many_colors_i + line_chart_many_colors_j) / 50)
    });
  }

  line_chart_many_colors_data.push({
    color: line_chart_many_colors_i,
    key: line_chart_many_colors_i,
    data: line_chart_many_colors_series,
    opacity: 0.8
  });
}

function line_chart_many_colors_Example() {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    height: 300,
    colorType: "linear",
    colorDomain: [0, 9],
    colorRange: ['#f5222d', '#007bff']
  }, external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), line_chart_many_colors_data.map(function (props) {
    return external_react_default.a.createElement(external_react_vis_["LineSeries"], props);
  }));
}
// CONCATENATED MODULE: ./demos/vis/plot/line-chart-with-style.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


function line_chart_with_style_Example(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
    style: {
      stroke: '#B7E9ED',
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
    style: {
      stroke: '#B7E9ED',
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
    title: "X Axis",
    style: {
      strokeWidth: 0.5,
      line: {
        stroke: '#ADDDE1'
      },
      ticks: {
        stroke: '#ADDDE1'
      },
      text: {
        stroke: 'none',
        fill: '#6b6b76',
        fontWeight: 600
      }
    }
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    title: "Y Axis",
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    className: "first-series",
    color: "#007bff",
    data: [{
      x: 1,
      y: 3
    }, {
      x: 2,
      y: 5
    }, {
      x: 3,
      y: 15
    }, {
      x: 4,
      y: 12
    }],
    style: {
      strokeLinejoin: 'round',
      strokeWidth: 4
    }
  }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    className: "second-series",
    color: "#52c41a",
    data: null
  }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    className: "third-series",
    color: "#f5222d",
    curve: 'curveMonotoneX',
    data: [{
      x: 1,
      y: 10
    }, {
      x: 2,
      y: 4
    }, {
      x: 3,
      y: 2
    }, {
      x: 4,
      y: 15
    }],
    strokeDasharray: "7, 3"
  }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    className: "fourth-series",
    color: "#faad14",
    curve: external_d3_shape_["curveCatmullRom"].alpha(0.5),
    data: [{
      x: 1,
      y: 7
    }, {
      x: 2,
      y: 11
    }, {
      x: 3,
      y: 9
    }, {
      x: 4,
      y: 2
    }]
  }));
}
// CONCATENATED MODULE: ./demos/vis/plot/linemark-chart.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function linemark_chart_Example(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["LineMarkSeries"], {
    className: "linemark-series-example",
    color: "#007bff",
    style: {
      strokeWidth: '3px'
    },
    lineStyle: {
      stroke: '#007bff'
    },
    markStyle: {
      stroke: '#faad14'
    },
    data: [{
      x: 1,
      y: 10
    }, {
      x: 2,
      y: 5
    }, {
      x: 3,
      y: 15
    }]
  }), external_react_default.a.createElement(external_react_vis_["LineMarkSeries"], {
    className: "linemark-series-example-2",
    color: "#52c41a",
    curve: 'curveMonotoneX',
    data: [{
      x: 1,
      y: 11
    }, {
      x: 1.5,
      y: 29
    }, {
      x: 3,
      y: 7
    }]
  }));
}
// CONCATENATED MODULE: ./demos/vis/plot/line-series-canvas-nearest-xy-example.js








// Copyright (c) 2016-2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var k = 100;
var line_series_canvas_nearest_xy_example_data = Array(k).fill(0).map(function (n, x) {
  return {
    x: x,
    y: x % 2 ? 180 : -180
  };
});

var line_series_canvas_nearest_xy_example_LineSeriesCanvasNearestXYExample =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(LineSeriesCanvasNearestXYExample, _React$Component);

  function LineSeriesCanvasNearestXYExample() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, LineSeriesCanvasNearestXYExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(LineSeriesCanvasNearestXYExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      nearestXY: line_series_canvas_nearest_xy_example_data[0]
    });

    return _this;
  }

  Object(createClass["a" /* default */])(LineSeriesCanvasNearestXYExample, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var nearestXY = this.state.nearestXY;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_react_no_ssr_default.a, null, external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        height: 300,
        domainX: [0, 2 * k],
        domainY: [-200, 200]
      }, external_react_default.a.createElement(external_react_vis_["LineSeriesCanvas"], {
        onNearestXY: function onNearestXY(point) {
          return _this2.setState({
            nearestXY: point
          });
        },
        data: line_series_canvas_nearest_xy_example_data,
        color: "#007bff"
      }), external_react_default.a.createElement(external_react_vis_["MarkSeriesCanvas"], {
        size: 5,
        fill: 'yellow',
        stroke: 'red',
        style: {
          pointerEvents: 'none'
        },
        data: [nearestXY]
      }))));
    }
  }]);

  return LineSeriesCanvasNearestXYExample;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/sankey/link-event.js










var BLURRED_LINK_OPACITY = 0.3;
var FOCUSED_LINK_OPACITY = 0.6;
var link_event_nodes = [{
  name: 'a'
}, {
  name: 'b'
}, {
  name: 'c'
}];
var link_event_links = [{
  source: 0,
  target: 1,
  value: 10
}, {
  source: 0,
  target: 2,
  value: 20
}, {
  source: 1,
  target: 2,
  value: 20
}];

var link_event_LinkEventSankeyExample =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(LinkEventSankeyExample, _React$Component);

  function LinkEventSankeyExample() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, LinkEventSankeyExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(LinkEventSankeyExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      activeLink: null
    });

    return _this;
  }

  Object(createClass["a" /* default */])(LinkEventSankeyExample, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeLink = this.state.activeLink; // Note: d3.sankey currently mutates the `nodes` and `links` arrays, which doesn't play nice
      // with React's single-direction data flow. We create a copy of each before we pass to the sankey
      // component, just to be sure.

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", null, "".concat(activeLink ? "".concat(link_event_nodes[activeLink.source.index].name, " -> ").concat(link_event_nodes[activeLink.target.index].name) : 'None', " selected")), external_react_default.a.createElement(sankey_default.a, {
        className: "m-auto",
        nodes: link_event_nodes.map(function (d) {
          return Object(objectSpread["a" /* default */])({}, d);
        }),
        links: link_event_links.map(function (d, i) {
          return Object(objectSpread["a" /* default */])({}, d, {
            opacity: activeLink && i === activeLink.index ? FOCUSED_LINK_OPACITY : BLURRED_LINK_OPACITY
          });
        }),
        width: 200,
        height: 200,
        onLinkMouseOver: function onLinkMouseOver(node) {
          return _this2.setState({
            activeLink: node
          });
        },
        onLinkMouseOut: function onLinkMouseOut() {
          return _this2.setState({
            activeLink: null
          });
        }
      }));
    }
  }]);

  return LinkEventSankeyExample;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "react-vis/dist/plot/hint"
var hint_ = __webpack_require__("e+d2");
var hint_default = /*#__PURE__*/__webpack_require__.n(hint_);

// CONCATENATED MODULE: ./demos/vis/sankey/link-hint.js











var link_hint_BLURRED_LINK_OPACITY = 0.3;
var link_hint_FOCUSED_LINK_OPACITY = 0.6;
var link_hint_nodes = [{
  name: 'a'
}, {
  name: 'b'
}, {
  name: 'c'
}];
var link_hint_links = [{
  source: 0,
  target: 1,
  value: 10
}, {
  source: 0,
  target: 2,
  value: 20
}, {
  source: 1,
  target: 2,
  value: 20
}];

var link_hint_LinkHintSankeyExample =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(LinkHintSankeyExample, _React$Component);

  function LinkHintSankeyExample() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, LinkHintSankeyExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(LinkHintSankeyExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      activeLink: null
    });

    return _this;
  }

  Object(createClass["a" /* default */])(LinkHintSankeyExample, [{
    key: "_renderHint",
    value: function _renderHint() {
      var activeLink = this.state.activeLink; // calculate center x,y position of link for positioning of hint

      var x = activeLink.source.x1 + (activeLink.target.x0 - activeLink.source.x1) / 2;
      var y = activeLink.y0 - (activeLink.y0 - activeLink.y1) / 2;

      var hintValue = Object(defineProperty["a" /* default */])({}, "".concat(activeLink.source.name, " \u279E ").concat(activeLink.target.name), activeLink.value);

      return external_react_default.a.createElement(hint_default.a, {
        x: x,
        y: y,
        value: hintValue
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeLink = this.state.activeLink; // Note: d3.sankey currently mutates the `nodes` and `links` arrays, which doesn't play nice
      // with React's single-direction data flow. We create a copy of each before we pass to the sankey
      // component, just to be sure.

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(sankey_default.a, {
        className: "m-auto",
        nodes: link_hint_nodes.map(function (d) {
          return Object(objectSpread["a" /* default */])({}, d);
        }),
        links: link_hint_links.map(function (d, i) {
          return Object(objectSpread["a" /* default */])({}, d, {
            opacity: activeLink && i === activeLink.index ? link_hint_FOCUSED_LINK_OPACITY : link_hint_BLURRED_LINK_OPACITY
          });
        }),
        width: 200,
        height: 221 // do not use voronoi in combination with link mouse over
        ,
        hasVoronoi: false,
        onLinkMouseOver: function onLinkMouseOver(node) {
          return _this2.setState({
            activeLink: node
          });
        },
        onLinkMouseOut: function onLinkMouseOut() {
          return _this2.setState({
            activeLink: null
          });
        }
      }, activeLink && this._renderHint()));
    }
  }]);

  return LinkHintSankeyExample;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/data/mini-data-examples.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var mini_data_examples_data = [{
  x: 0,
  y: 8
}, {
  x: 1,
  y: 5
}, {
  x: 2,
  y: 4
}, {
  x: 3,
  y: 9
}, {
  x: 4,
  y: 1
}, {
  x: 5,
  y: 7
}, {
  x: 6,
  y: 6
}, {
  x: 7,
  y: 3
}, {
  x: 8,
  y: 2
}, {
  x: 9,
  y: 0
}];
var mini_data_examples_defaultProps = {
  width: 200,
  height: 200,
  margin: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5
  }
};
function MiniCharts() {
  return external_react_default.a.createElement("div", {
    style: {
      display: 'flex'
    }
  }, external_react_default.a.createElement(external_react_vis_["XYPlot"], mini_data_examples_defaultProps, external_react_default.a.createElement(external_react_vis_["VerticalBarSeries"], {
    data: mini_data_examples_data
  })), external_react_default.a.createElement(external_react_vis_["XYPlot"], mini_data_examples_defaultProps, external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    data: mini_data_examples_data
  })), external_react_default.a.createElement(external_react_vis_["XYPlot"], mini_data_examples_defaultProps, external_react_default.a.createElement(external_react_vis_["MarkSeries"], {
    data: mini_data_examples_data
  })));
}
// CONCATENATED MODULE: ./demos/vis/plot/mixed-stacked-chart.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var mixed_stacked_chart_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      useCanvas: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var useCanvas = this.state.useCanvas;
      var BarSeries = useCanvas ? external_react_vis_["VerticalBarSeriesCanvas"] : external_react_vis_["VerticalBarSeries"];
      return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        height: 300,
        stackBy: "y"
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(BarSeries, {
        color: "#007bff",
        data: [{
          x: 2,
          y: 10
        }, {
          x: 4,
          y: 5
        }, {
          x: 5,
          y: 15
        }],
        stack: true
      }), external_react_default.a.createElement(BarSeries, {
        color: "#52c41a",
        data: [{
          x: 2,
          y: 12
        }, {
          x: 4,
          y: 2
        }, {
          x: 5,
          y: 11
        }],
        stack: true
      }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
        className: "fourth-series",
        color: "#f5222d",
        data: [{
          x: 2,
          y: 26
        }, {
          x: 4,
          y: 8
        }, {
          x: 5,
          y: 30
        }]
      }));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/misc/null-data-example.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var null_data_example_DATA = [[{
  x: 1,
  y: 10
}, {
  x: 2,
  y: 10
}, {
  x: 3,
  y: 13
}, {
  x: 4,
  y: 7
}, {
  x: 5,
  y: null
}], [{
  x: 1,
  y: 30
}, {
  x: 2,
  y: 0
}, {
  x: 5,
  y: null
}, {
  x: 4,
  y: 15
}, {
  x: 5,
  y: null
}]];

var null_data_example_NullDataExample =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(NullDataExample, _React$Component);

  function NullDataExample() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, NullDataExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(NullDataExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      crosshairValues: []
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onMouseLeave", function () {
      return _this.setState({
        crosshairValues: []
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onNearestX", function (value, _ref) {
      var index = _ref.index;
      return _this.setState({
        crosshairValues: null_data_example_DATA.map(function (d) {
          return d[index].y !== null && d[index];
        })
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(NullDataExample, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        height: 300,
        onMouseLeave: this.onMouseLeave
      }, external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["AreaSeries"], {
        getNull: function getNull(d) {
          return d.y !== null;
        },
        onNearestX: this.onNearestX,
        data: null_data_example_DATA[0],
        color: "#007bff"
      }), external_react_default.a.createElement(external_react_vis_["LineMarkSeries"], {
        getNull: function getNull(d) {
          return d.y !== null;
        },
        data: null_data_example_DATA[1],
        color: "#52c41a"
      }), external_react_default.a.createElement(external_react_vis_["Crosshair"], {
        values: this.state.crosshairValues
      }));
    }
  }]);

  return NullDataExample;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/axes/padded-axis.js







// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var padded_axis_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example() {
    Object(classCallCheck["a" /* default */])(this, Example);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Example).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "getRandomData",
    value: function getRandomData() {
      var randomYData = Object(toConsumableArray["a" /* default */])(new Array(10)).map(function () {
        return Math.round(Math.random() * 40);
      });

      return randomYData.map(function (val, idx) {
        return {
          x: idx,
          y: val
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var firstData = this.getRandomData();
      var secondData = this.getRandomData();
      return external_react_default.a.createElement("div", {
        style: {
          display: 'flex'
        }
      }, external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        height: 300
      }, external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        title: "X Axis"
      }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
        title: "Y Axis"
      }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
        className: "first-series",
        color: "#007bff",
        data: firstData
      }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
        className: "second-series",
        color: "#52c41a",
        data: secondData
      })), external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        yPadding: 60,
        height: 300
      }, external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        title: "X Axis"
      }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
        title: "Y Axis"
      }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
        className: "first-series",
        color: "#007bff",
        data: firstData
      }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
        className: "second-series",
        color: "#52c41a",
        data: secondData
      })));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/axes/parallel-coordinates-example.js



// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



var DEFAULT_DOMAIN = {
  min: Infinity,
  max: -Infinity
}; // begin by figuring out the domain of each of the columns

var parallel_coordinates_example_domains = car_data.reduce(function (res, row) {
  keys_default()(row).forEach(function (key) {
    if (!res[key]) {
      res[key] = Object(objectSpread["a" /* default */])({}, DEFAULT_DOMAIN);
    }

    res[key] = {
      min: Math.min(res[key].min, row[key]),
      max: Math.max(res[key].max, row[key])
    };
  });

  return res;
}, {}); // use that to generate columns that map the data to a unit scale

var scales = keys_default()(parallel_coordinates_example_domains).reduce(function (res, key) {
  var domain = parallel_coordinates_example_domains[key];
  res[key] = Object(external_d3_scale_["scaleLinear"])().domain([domain.min, domain.max]).range([0, 1]);
  return res;
}, {}); // break each object into an array and rescale it


var mappedData = car_data.map(function (row) {
  return keys_default()(row).filter(function (key) {
    return key !== 'name';
  }).map(function (key) {
    return {
      x: key,
      y: scales[key](Number(row[key]))
    };
  });
});
var parallel_coordinates_example_MARGIN = {
  left: 10,
  right: 10,
  top: 10,
  bottom: 10
};

function ParallelCoordinatesExample(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    height: 300,
    xType: "ordinal",
    margin: parallel_coordinates_example_MARGIN,
    className: "parallel-coordinates-example"
  }, mappedData.map(function (series, index) {
    return external_react_default.a.createElement(external_react_vis_["LineSeries"], {
      color: "#007bff",
      data: series,
      key: "series-".concat(index)
    });
  }), mappedData[0].map(function (cell, index) {
    return external_react_default.a.createElement(external_react_vis_["DecorativeAxis"], {
      key: "".concat(index, "-axis"),
      axisStart: {
        x: cell.x,
        y: 0
      },
      axisEnd: {
        x: cell.x,
        y: 1
      },
      axisDomain: [parallel_coordinates_example_domains[cell.x].min, parallel_coordinates_example_domains[cell.x].max]
    });
  }));
}

/* harmony default export */ var parallel_coordinates_example = (ParallelCoordinatesExample);
// CONCATENATED MODULE: ./demos/vis/radar-chart/radar-chart-series-tooltips.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




var radar_chart_series_tooltips_DATA = [{
  name: 'Mercedes',
  mileage: 7,
  price: 10,
  safety: 8,
  performance: 9,
  interior: 7,
  warranty: 7
}, {
  name: 'Honda',
  mileage: 8,
  price: 6,
  safety: 9,
  performance: 6,
  interior: 3,
  warranty: 9
}, {
  name: 'Chevrolet',
  mileage: 5,
  price: 4,
  safety: 6,
  performance: 4,
  interior: 5,
  warranty: 6
}];
var radar_chart_series_tooltips_basicFormat = Object(external_d3_format_["format"])('.2r');
var radar_chart_series_tooltips_wideFormat = Object(external_d3_format_["format"])('.3r');
var radar_chart_series_tooltips_tipStyle = {
  display: 'flex',
  color: '#fff',
  background: '#000',
  alignItems: 'center',
  padding: '5px'
};

var radar_chart_series_tooltips_BasicRadarChart =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(BasicRadarChart, _Component);

  function BasicRadarChart() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, BasicRadarChart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(BasicRadarChart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      hoveredCell: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(BasicRadarChart, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var hoveredCell = this.state.hoveredCell;
      return external_react_default.a.createElement(radar_chart_default.a, {
        className: "m-auto",
        data: radar_chart_series_tooltips_DATA,
        tickFormat: function tickFormat(t) {
          return radar_chart_series_tooltips_wideFormat(t);
        },
        startingAngle: 0,
        domains: [{
          name: 'mileage',
          domain: [0, 10]
        }, {
          name: 'price',
          domain: [2, 16],
          tickFormat: function tickFormat(t) {
            return "$".concat(radar_chart_series_tooltips_basicFormat(t));
          },
          getValue: function getValue(d) {
            return d.price;
          }
        }, {
          name: 'safety',
          domain: [5, 10],
          getValue: function getValue(d) {
            return d.safety;
          }
        }, {
          name: 'performance',
          domain: [0, 10],
          getValue: function getValue(d) {
            return d.performance;
          }
        }, {
          name: 'interior',
          domain: [0, 7],
          getValue: function getValue(d) {
            return d.interior;
          }
        }, {
          name: 'warranty',
          domain: [10, 2],
          getValue: function getValue(d) {
            return d.warranty;
          }
        }],
        width: 400,
        height: 300,
        onSeriesMouseOver: function onSeriesMouseOver(data) {
          _this2.setState({
            hoveredCell: data.event[0]
          });
        },
        onSeriesMouseOut: function onSeriesMouseOut() {
          return _this2.setState({
            hoveredCell: false
          });
        }
      }, hoveredCell && external_react_default.a.createElement(external_react_vis_["Hint"], {
        value: {
          x: 0,
          y: 0
        }
      }, external_react_default.a.createElement("div", {
        style: radar_chart_series_tooltips_tipStyle
      }, hoveredCell.name)));
    }
  }]);

  return BasicRadarChart;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./demos/vis/radar-chart/radar-chart-with-tooltips.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


 // The first 6 data elements here are to simulate a 'spider' type of radar chart -
// similar to CircularGridLines, but straight edges instead.

var radar_chart_with_tooltips_DATA = [{
  name: 'Spider5',
  mileage: 5,
  price: 5,
  safety: 5,
  performance: 5,
  interior: 5,
  warranty: 5,
  fill: '#f8f8f8',
  stroke: '#cccccc'
}, {
  name: 'Spider4',
  mileage: 4,
  price: 4,
  safety: 4,
  performance: 4,
  interior: 4,
  warranty: 4,
  fill: 'white',
  stroke: '#cccccc'
}, {
  name: 'Spider3',
  mileage: 3,
  price: 3,
  safety: 3,
  performance: 3,
  interior: 3,
  warranty: 3,
  fill: '#f8f8f8',
  stroke: '#cccccc'
}, {
  name: 'Spider2',
  mileage: 2,
  price: 2,
  safety: 2,
  performance: 2,
  interior: 2,
  warranty: 2,
  fill: 'white',
  stroke: '#cccccc'
}, {
  name: 'Spider1',
  mileage: 1,
  price: 1,
  safety: 1,
  performance: 1,
  interior: 1,
  warranty: 1,
  fill: '#f8f8f8',
  stroke: '#cccccc'
}, {
  name: 'Spider0',
  mileage: 0.1,
  price: 0.1,
  safety: 0.1,
  performance: 0.1,
  interior: 0.1,
  warranty: 0.1,
  fill: '#f8f8f8',
  stroke: '#cccccc'
}, {
  name: 'Mercedes',
  mileage: 3,
  price: 4,
  safety: 5,
  performance: 1.5,
  interior: 4,
  warranty: 4.5,
  fill: 'rgba(114,172,240,0.5)',
  stroke: 'rgba(114,172,240,0.2)'
}];
var radar_chart_with_tooltips_tipStyle = {
  display: 'flex',
  color: '#fff',
  background: '#000',
  alignItems: 'center',
  padding: '5px'
};

var radar_chart_with_tooltips_RadarChartWithTooltips =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(RadarChartWithTooltips, _Component);

  function RadarChartWithTooltips() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, RadarChartWithTooltips);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(RadarChartWithTooltips)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      hoveredCell: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(RadarChartWithTooltips, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var hoveredCell = this.state.hoveredCell;
      return external_react_default.a.createElement(radar_chart_default.a, {
        className: "m-auto",
        data: radar_chart_with_tooltips_DATA,
        tickFormat: function tickFormat(t) {
          return '';
        },
        domains: [{
          name: 'mileage',
          domain: [0, 5],
          tickFormat: function tickFormat(t) {
            if (t < 5 && t > 0) {
              return Math.round(t);
            }

            return '';
          }
        }, {
          name: 'price',
          domain: [0, 5],
          getValue: function getValue(d) {
            return d.price;
          }
        }, {
          name: 'safety',
          domain: [0, 5],
          getValue: function getValue(d) {
            return d.safety;
          }
        }, {
          name: 'performance',
          domain: [0, 5],
          getValue: function getValue(d) {
            return d.performance;
          }
        }, {
          name: 'interior',
          domain: [0, 5],
          getValue: function getValue(d) {
            return d.interior;
          }
        }, {
          name: 'warranty',
          domain: [0, 5],
          getValue: function getValue(d) {
            return d.warranty;
          }
        }],
        width: 300,
        height: 300,
        onValueMouseOver: function onValueMouseOver(v) {
          _this2.setState({
            hoveredCell: v
          });
        },
        onValueMouseOut: function onValueMouseOut(v) {
          return _this2.setState({
            hoveredCell: false
          });
        },
        style: {
          polygons: {
            strokeWidth: 1,
            strokeOpacity: 0.8,
            fillOpacity: 0.8
          },
          labels: {
            textAnchor: 'middle'
          },
          axes: {
            line: {
              fillOpacity: 0.8,
              strokeWidth: 0.5,
              strokeOpacity: 0.8
            },
            ticks: {
              fillOpacity: 0,
              strokeOpacity: 0
            },
            text: {}
          }
        },
        colorRange: ['transparent'],
        hideInnerMostValues: false,
        renderAxesOverPolygons: true
      }, hoveredCell && hoveredCell.dataName === 'Mercedes' && external_react_default.a.createElement(external_react_vis_["Hint"], {
        value: hoveredCell
      }, external_react_default.a.createElement("div", {
        style: radar_chart_with_tooltips_tipStyle
      }, hoveredCell.domain, ": ", hoveredCell.value)));
    }
  }]);

  return RadarChartWithTooltips;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./demos/vis/plot/scatterplot-canvas.js








// Copyright (c) 2016 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



function scatterplot_canvas_getRandomData() {
  return new Array(100).fill(0).map(function (row) {
    return {
      x: Math.random() * 10,
      y: Math.random() * 20,
      size: Math.random() * 10,
      color: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.5
    };
  });
}

var scatterplot_canvas_colorRanges = {
  typeA: ['#59E4EC', '#0D676C'],
  typeB: ['#EFC1E3', '#B52F93']
};
var scatterplot_canvas_randomData = scatterplot_canvas_getRandomData();
var scatterplot_canvas_nextType = {
  typeA: 'typeB',
  typeB: 'typeA'
};
var scatterplot_canvas_nextModeContent = {
  canvas: 'SWITCH TO SVG',
  svg: 'SWITCH TO CANVAS'
};
var scatterplot_canvas_drawModes = ['canvas', 'svg'];

var scatterplot_canvas_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      drawMode: 0,
      data: scatterplot_canvas_randomData,
      colorType: 'typeA',
      value: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          drawMode = _this$state.drawMode,
          data = _this$state.data,
          colorType = _this$state.colorType;
      var markSeriesProps = {
        animation: true,
        className: 'mark-series-example',
        sizeRange: [5, 15],
        seriesId: 'my-example-scatterplot',
        colorRange: scatterplot_canvas_colorRanges[colorType],
        opacityType: 'literal',
        data: data,
        onNearestXY: function onNearestXY(value) {
          return _this2.setState({
            value: value
          });
        }
      };
      var mode = scatterplot_canvas_drawModes[drawMode];
      return external_react_default.a.createElement("div", {
        className: "canvas-wrapper"
      }, external_react_default.a.createElement(external_react_no_ssr_default.a, null, external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            value: false
          });
        },
        height: 300,
        color: "#007bff"
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), mode === 'canvas' && external_react_default.a.createElement(external_react_vis_["MarkSeriesCanvas"], markSeriesProps), mode === 'svg' && external_react_default.a.createElement(external_react_vis_["MarkSeries"], markSeriesProps), this.state.value ? external_react_default.a.createElement(external_react_vis_["Hint"], {
        value: this.state.value
      }) : null)));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/plot/scatterplot.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function scatterplot_Example(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["MarkSeries"], {
    className: "mark-series-example",
    color: "#007bff",
    strokeWidth: 2,
    opacity: "0.8",
    sizeRange: [5, 15],
    data: [{
      x: 1,
      y: 10,
      size: 30
    }, {
      x: 1.7,
      y: 12,
      size: 10
    }, {
      x: 2,
      y: 5,
      size: 1
    }, {
      x: 3,
      y: 15,
      size: 12
    }, {
      x: 2.5,
      y: 7,
      size: 4
    }]
  }));
}
// EXTERNAL MODULE: external "react-vis/dist/legends/searchable-discrete-color-legend"
var searchable_discrete_color_legend_ = __webpack_require__("pfeL");
var searchable_discrete_color_legend_default = /*#__PURE__*/__webpack_require__.n(searchable_discrete_color_legend_);

// CONCATENATED MODULE: ./demos/vis/legends/searchable-discrete-color.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var searchable_discrete_color_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Example).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_clickHandler", function (item) {
      var items = _this.state.items;
      item.disabled = !item.disabled;

      _this.setState({
        items: items
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_searchChangeHandler", function (searchText) {
      _this.setState({
        searchText: searchText
      });
    });

    _this.state = {
      items: [{
        title: 'Apples',
        color: '#3a3'
      }, {
        title: 'Bananas',
        color: '#fc0'
      }, {
        title: 'Blueberries',
        color: '#337'
      }, {
        title: 'Carrots',
        color: '#f93'
      }, {
        title: 'Eggplants',
        color: '#337'
      }, {
        title: 'Limes',
        color: '#cf3'
      }, {
        title: 'Potatoes',
        color: '#766'
      }],
      searchText: ''
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          items = _this$state.items,
          searchText = _this$state.searchText;
      return external_react_default.a.createElement(searchable_discrete_color_legend_default.a, {
        onSearchChange: this._searchChangeHandler,
        searchText: searchText,
        onItemClick: this._clickHandler,
        items: items
      });
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/misc/selection-plot-example.js









// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var selection_plot_example_seededRandom = generateSeededRandom(36); // randomly generated data

var selection_plot_example_data = Object(toConsumableArray["a" /* default */])(new Array(10)).map(function (row) {
  return {
    x: selection_plot_example_seededRandom() * 3,
    y: selection_plot_example_seededRandom() * 11 + 4,
    size: selection_plot_example_seededRandom() * 30 + 1
  };
});

var selection_plot_example_SelectionPlotExample =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(SelectionPlotExample, _React$Component);

  function SelectionPlotExample() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, SelectionPlotExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(SelectionPlotExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      filter: null
    });

    return _this;
  }

  Object(createClass["a" /* default */])(SelectionPlotExample, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var filter = this.state.filter;

      var highlightPoint = function highlightPoint(d) {
        if (!filter) {
          return false;
        }

        return d.y <= filter.top && d.y >= filter.bottom;
      };

      var numSelectedPoints = filter ? selection_plot_example_data.filter(highlightPoint).length : 0;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        height: 300
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["MarkSeries"], {
        className: "mark-series-example",
        sizeRange: [5, 15],
        colorType: "literal",
        getColor: function getColor(d) {
          return highlightPoint(d) ? '#f5222d' : '#007bff';
        },
        data: selection_plot_example_data
      }), external_react_default.a.createElement(external_react_vis_["Highlight"], {
        enableX: false,
        className: "selection-example",
        onBrush: function onBrush(area) {
          return _this2.setState({
            filter: area
          });
        },
        onBrushEnd: function onBrushEnd(area) {
          return _this2.setState({
            filter: area
          });
        }
      })), external_react_default.a.createElement("p", null, "There are ".concat(numSelectedPoints, " selected points")));
    }
  }]);

  return SelectionPlotExample;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "react-vis/dist/radial-chart"
var radial_chart_ = __webpack_require__("BgRP");
var radial_chart_default = /*#__PURE__*/__webpack_require__.n(radial_chart_);

// CONCATENATED MODULE: ./demos/vis/radial-chart/simple-radial-chart.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function simple_radial_chart_SimpleRadialChart(props) {
  return external_react_default.a.createElement(radial_chart_default.a, {
    className: "m-auto",
    colorType: 'literal',
    colorDomain: [0, 100],
    colorRange: [0, 10],
    margin: {
      top: 100
    },
    getLabel: function getLabel(d) {
      return d.name;
    },
    data: [{
      angle: 1,
      color: '#007bff',
      name: 'blue',
      opacity: 0.2
    }, {
      angle: 2,
      color: '#52c41a',
      name: 'green'
    }, {
      angle: 5,
      color: '#f5222d',
      name: 'red'
    }, {
      angle: 3,
      color: '#faad14',
      name: 'yellow'
    }, {
      angle: 5,
      color: '#52c41a',
      name: 'green again'
    }],
    labelsRadiusMultiplier: 1.1,
    labelsStyle: {
      fontSize: 16,
      fill: '#222'
    },
    showLabels: true,
    style: {
      stroke: '#fff',
      strokeWidth: 1
    },
    width: 400,
    height: 300
  });
}
// EXTERNAL MODULE: external "react-vis/dist/treemap"
var treemap_ = __webpack_require__("LRpp");
var treemap_default = /*#__PURE__*/__webpack_require__.n(treemap_);

// CONCATENATED MODULE: ./demos/vis/treemap/simple-treemap.js









// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




var simple_treemap_Option = external_antd_["Select"].Option;
var simple_treemap_MODE = ['circlePack', 'partition', 'partition-pivot', 'squarify', 'resquarify', 'slice', 'dice', 'slicedice', 'binary'];
var STYLES = {
  SVG: {
    stroke: '#fff',
    strokeWidth: '0.25',
    strokeOpacity: 0.5
  },
  DOM: {
    border: 'thin solid #fff'
  }
};

var simple_treemap_SimpleTreemapExample =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(SimpleTreemapExample, _React$Component);

  function SimpleTreemapExample() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, SimpleTreemapExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(SimpleTreemapExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      modeIndex: simple_treemap_MODE[0],
      useSVG: true
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "updateModeIndex", function (value) {
      _this.setState({
        modeIndex: value
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(SimpleTreemapExample, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          modeIndex = _this$state.modeIndex,
          useSVG = _this$state.useSVG;
      return external_react_default.a.createElement("div", {
        className: "centered-and-flexed"
      }, external_react_default.a.createElement(external_antd_["Row"], {
        type: "flex",
        align: "middle",
        justify: "center"
      }, external_react_default.a.createElement(external_antd_["Select"], {
        defaultValue: modeIndex,
        onChange: this.updateModeIndex,
        size: "small",
        className: "mx-3"
      }, simple_treemap_MODE.map(function (mode, index) {
        return external_react_default.a.createElement(simple_treemap_Option, {
          value: mode,
          key: index
        }, mode);
      })), external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.setState({
            useSVG: !useSVG
          });
        },
        buttonContent: useSVG ? 'Use dom' : 'use SVG'
      })), external_react_default.a.createElement(external_antd_["Row"], {
        type: "flex",
        align: "middle",
        justify: "center"
      }, external_react_default.a.createElement(treemap_default.a, Object(esm_extends["a" /* default */])({
        className: "m-auto d-block"
      }, {
        animation: true,
        className: 'nested-tree-example',
        colorType: 'literal',
        colorRange: ['#007bff'],
        data: d3_flare_example,
        mode: modeIndex,
        renderMode: useSVG ? 'SVG' : 'DOM',
        height: 300,
        width: 350,
        margin: 10,
        getSize: function getSize(d) {
          return d.value;
        },
        getColor: function getColor(d) {
          return d.hex;
        },
        style: STYLES[useSVG ? 'SVG' : 'DOM']
      }))));
    }
  }]);

  return SimpleTreemapExample;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/plot/stacked-histogram.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var stacked_histogram_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      useCanvas: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var useCanvas = this.state.useCanvas;
      var RectSeries = useCanvas ? external_react_vis_["VerticalRectSeriesCanvas"] : external_react_vis_["VerticalRectSeries"];
      return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        xDomain: [0, 7],
        height: 300,
        stackBy: "y"
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(RectSeries, {
        color: "#007bff",
        data: [{
          x0: 1,
          x: 2,
          y: 10
        }, {
          x0: 2,
          x: 4,
          y: 5
        }, {
          x0: 5,
          x: 6,
          y: 15
        }]
      }), external_react_default.a.createElement(RectSeries, {
        color: "#52c41a",
        data: [{
          x0: 1,
          x: 2,
          y: 12
        }, {
          x0: 2,
          x: 4,
          y: 2
        }, {
          x0: 5,
          x: 6,
          y: 15
        }]
      }));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/plot/stacked-horizontal-bar-chart.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var stacked_horizontal_bar_chart_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      useCanvas: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var useCanvas = this.state.useCanvas;
      var BarSeries = useCanvas ? external_react_vis_["HorizontalBarSeriesCanvas"] : external_react_vis_["HorizontalBarSeries"];
      return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        height: 300,
        stackBy: "x"
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(BarSeries, {
        color: "#007bff",
        data: [{
          y: 2,
          x: 10
        }, {
          y: 4,
          x: 5
        }, {
          y: 5,
          x: 15
        }]
      }), external_react_default.a.createElement(BarSeries, {
        color: "#52c41a",
        data: [{
          y: 2,
          x: 12
        }, {
          y: 4,
          x: 2
        }, {
          y: 5,
          x: 11
        }]
      }));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/plot/stacked-vertical-bar-chart.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var stacked_vertical_bar_chart_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      useCanvas: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var useCanvas = this.state.useCanvas;
      var BarSeries = useCanvas ? external_react_vis_["VerticalBarSeriesCanvas"] : external_react_vis_["VerticalBarSeries"];
      return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        height: 300,
        stackBy: "y"
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
        style: {
          strokeWidth: 0.5
        }
      }), external_react_default.a.createElement(BarSeries, {
        color: "#007bff",
        data: [{
          x: 2,
          y: 10
        }, {
          x: 4,
          y: 5
        }, {
          x: 5,
          y: 15
        }]
      }), external_react_default.a.createElement(BarSeries, {
        color: "#52c41a",
        data: [{
          x: 2,
          y: 12
        }, {
          x: 4,
          y: 2
        }, {
          x: 5,
          y: 11
        }]
      }));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/axes/static-crosshair.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function static_crosshair_Example(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    color: "#007bff",
    data: [{
      x: 1,
      y: 10
    }, {
      x: 2,
      y: 7
    }, {
      x: 3,
      y: 15
    }]
  }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    color: "#52c41a",
    data: [{
      x: 1,
      y: 20
    }, {
      x: 2,
      y: 5
    }, {
      x: 3,
      y: 15
    }]
  }), external_react_default.a.createElement(external_react_vis_["Crosshair"], {
    values: [{
      x: 2,
      y: 5
    }, {
      x: 2,
      y: 7
    }]
  }));
}
// CONCATENATED MODULE: ./demos/vis/axes/static-hints.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function static_hints_Example(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    color: "#007bff",
    data: [{
      x: 0,
      y: 1
    }, {
      x: 1,
      y: 10
    }, {
      x: 2,
      y: 5
    }, {
      x: 3,
      y: 15
    }]
  }), external_react_default.a.createElement(external_react_vis_["Hint"], {
    value: {
      x: 1,
      y: 10
    }
  }), external_react_default.a.createElement(external_react_vis_["Hint"], {
    value: {
      x: 0.4,
      y: 14
    },
    horizontalAlign: external_react_vis_["Hint"].ALIGN.RIGHT,
    verticalAlign: external_react_vis_["Hint"].ALIGN.BOTTOM
  }, external_react_default.a.createElement("div", {
    className: "custom-hint"
  }, "This is a custom hint", external_react_default.a.createElement("br", null), "for a non-existent value")));
}
// CONCATENATED MODULE: ./demos/vis/sunbursts/sunburst-with-tooltips.js









// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var sunburst_with_tooltips_DATA = {
  children: [{
    children: [{
      bigness: 1,
      children: [],
      clr: theme_["EXTENDED_DISCRETE_COLOR_RANGE"][1],
      name: 'excellent'
    }, {
      bigness: 1,
      children: [],
      clr: theme_["EXTENDED_DISCRETE_COLOR_RANGE"][2],
      name: 'chart'
    }],
    clr: theme_["EXTENDED_DISCRETE_COLOR_RANGE"][3]
  }, {
    bigness: 1,
    children: [],
    clr: theme_["EXTENDED_DISCRETE_COLOR_RANGE"][4],
    name: 'cool',
    labelStyle: {
      fontSize: 15,
      fontWeight: 'bold'
    }
  }, {
    bigness: 1,
    children: [],
    clr: theme_["EXTENDED_DISCRETE_COLOR_RANGE"][5],
    name: 'dogs'
  }, {
    bigness: 1,
    children: [],
    clr: theme_["EXTENDED_DISCRETE_COLOR_RANGE"][6],
    name: 'sunglasses'
  }, {
    children: [{
      bigness: 1,
      children: [],
      clr: theme_["EXTENDED_DISCRETE_COLOR_RANGE"][7],
      name: 'great'
    }, {
      bigness: 1,
      children: [],
      clr: theme_["EXTENDED_DISCRETE_COLOR_RANGE"][8],
      name: 'label'
    }],
    clr: theme_["EXTENDED_DISCRETE_COLOR_RANGE"][9]
  }]
};
var sunburst_with_tooltips_tipStyle = {
  display: 'flex',
  color: '#fff',
  background: '#000',
  alignItems: 'center',
  padding: '5px'
};
var boxStyle = {
  height: '10px',
  width: '10px'
};

function buildValue(hoveredCell) {
  var radius = hoveredCell.radius,
      angle = hoveredCell.angle,
      angle0 = hoveredCell.angle0;
  var truedAngle = (angle + angle0) / 2;
  return {
    x: radius * Math.cos(truedAngle),
    y: radius * Math.sin(truedAngle)
  };
}

var sunburst_with_tooltips_SunburstWithTooltips =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(SunburstWithTooltips, _React$Component);

  function SunburstWithTooltips() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, SunburstWithTooltips);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(SunburstWithTooltips)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      hoveredCell: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(SunburstWithTooltips, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var hoveredCell = this.state.hoveredCell;
      return external_react_default.a.createElement(external_react_vis_["Sunburst"], {
        data: sunburst_with_tooltips_DATA,
        className: "m-auto",
        style: {
          stroke: '#fff'
        },
        onValueMouseOver: function onValueMouseOver(v) {
          return _this2.setState({
            hoveredCell: v.x && v.y ? v : false
          });
        },
        onValueMouseOut: function onValueMouseOut(v) {
          return _this2.setState({
            hoveredCell: false
          });
        },
        height: 300,
        margin: {
          top: 50,
          bottom: 50,
          left: 50,
          right: 50
        },
        getLabel: function getLabel(d) {
          return d.name;
        },
        getSize: function getSize(d) {
          return d.bigness;
        },
        getColor: function getColor(d) {
          return d.clr;
        },
        width: 350,
        padAngle: function padAngle() {
          return 0.02;
        }
      }, hoveredCell ? external_react_default.a.createElement(external_react_vis_["Hint"], {
        value: buildValue(hoveredCell)
      }, external_react_default.a.createElement("div", {
        style: sunburst_with_tooltips_tipStyle
      }, external_react_default.a.createElement("div", {
        style: Object(objectSpread["a" /* default */])({}, boxStyle, {
          background: hoveredCell.clr
        })
      }), hoveredCell.clr)) : null);
    }
  }]);

  return SunburstWithTooltips;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/misc/synced-charts.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var synced_charts_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Example).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onChartMouseLeave", function () {
      _this.setState({
        selectedIndex: null
      });
    });

    _this.state = {
      selectedIndex: null
    };
    _this._onSeriesMouseOvers = [_this._onSeriesMouseOver.bind(Object(assertThisInitialized["a" /* default */])(_this), 0), _this._onSeriesMouseOver.bind(Object(assertThisInitialized["a" /* default */])(_this), 1)];
    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "_getSeriesColor",
    value: function _getSeriesColor(index) {
      var selectedIndex = this.state.selectedIndex;

      if (selectedIndex !== null && selectedIndex !== index) {
        return '#52c41a';
      }

      return '#007bff';
    }
  }, {
    key: "_onSeriesMouseOver",
    value: function _onSeriesMouseOver(selectedIndex) {
      this.setState({
        selectedIndex: selectedIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        onMouseLeave: this._onChartMouseLeave,
        height: 150
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
        color: this._getSeriesColor(0),
        onSeriesMouseOver: this._onSeriesMouseOvers[0],
        data: [{
          x: 1,
          y: 15
        }, {
          x: 2,
          y: 8
        }, {
          x: 3,
          y: 1
        }]
      }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
        color: this._getSeriesColor(1),
        onSeriesMouseOver: this._onSeriesMouseOvers[1],
        data: [{
          x: 1,
          y: 10
        }, {
          x: 2,
          y: 5
        }, {
          x: 3,
          y: 15
        }]
      })), external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        onMouseLeave: this._onChartMouseLeave,
        height: 150
      }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
        color: this._getSeriesColor(0),
        onSeriesMouseOver: this._onSeriesMouseOvers[0],
        data: [{
          x: 1,
          y: 4
        }, {
          x: 2,
          y: 11
        }, {
          x: 3,
          y: 9
        }]
      }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
        color: this._getSeriesColor(1),
        onSeriesMouseOver: this._onSeriesMouseOvers[1],
        data: [{
          x: 1,
          y: 2
        }, {
          x: 2,
          y: 3
        }, {
          x: 3,
          y: 11
        }]
      })));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/misc/time-chart.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var MSEC_DAILY = 86400000;
function time_chart_Example(props) {
  var timestamp = new Date('September 9 2017').getTime();
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    xType: "time",
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], {
    title: "X Axis"
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    title: "Y Axis"
  }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    color: "#007bff",
    data: [{
      x: timestamp + MSEC_DAILY,
      y: 3
    }, {
      x: timestamp + MSEC_DAILY * 2,
      y: 5
    }, {
      x: timestamp + MSEC_DAILY * 3,
      y: 15
    }, {
      x: timestamp + MSEC_DAILY * 4,
      y: 12
    }]
  }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    data: null,
    color: "#52c41a"
  }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    color: "#f5222d",
    data: [{
      x: timestamp + MSEC_DAILY,
      y: 10
    }, {
      x: timestamp + MSEC_DAILY * 2,
      y: 4
    }, {
      x: timestamp + MSEC_DAILY * 3,
      y: 2
    }, {
      x: timestamp + MSEC_DAILY * 4,
      y: 15
    }]
  }));
}
// CONCATENATED MODULE: ./demos/vis/treemap/dynamic-treemap.js









// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




function _getRandomData(total) {
  var totalLeaves = total || Math.random() * 20;
  var leaves = [];

  for (var i = 0; i < totalLeaves; i++) {
    leaves.push({
      name: total ? total : String(Math.random()).slice(0, 3),
      size: Math.random() * 1000,
      color: Math.random(),
      style: {
        border: 'thin solid red'
      }
    });
  }

  return {
    title: '',
    color: 1,
    children: leaves
  };
}

var dynamic_treemap_DynamicTreemapExample =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(DynamicTreemapExample, _React$Component);

  function DynamicTreemapExample() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, DynamicTreemapExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(DynamicTreemapExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      hoveredNode: false,
      treemapData: _getRandomData(20),
      useCirclePacking: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(DynamicTreemapExample, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          hoveredNode = _this$state.hoveredNode,
          useCirclePacking = _this$state.useCirclePacking;
      var treeProps = {
        animation: {
          damping: 9,
          stiffness: 300
        },
        data: this.state.treemapData,
        onLeafMouseOver: function onLeafMouseOver(x) {
          return _this2.setState({
            hoveredNode: x
          });
        },
        onLeafMouseOut: function onLeafMouseOut() {
          return _this2.setState({
            hoveredNode: false
          });
        },
        onLeafClick: function onLeafClick() {
          return _this2.setState({
            treemapData: _getRandomData()
          });
        },
        height: 300,
        mode: this.state.useCirclePacking ? 'circlePack' : 'squarify',
        getLabel: function getLabel(x) {
          return x.name;
        },
        width: 350
      };
      return external_react_default.a.createElement("div", {
        className: "dynamic-treemap-example"
      }, external_react_default.a.createElement(showcase_button, {
        onClick: function onClick() {
          return _this2.setState({
            useCirclePacking: !useCirclePacking
          });
        },
        buttonContent: 'Toggle circle pack'
      }), external_react_default.a.createElement("span", {
        className: " mb-3 d-block"
      }), external_react_default.a.createElement(external_antd_["Row"], {
        type: "flex",
        align: "middle",
        justify: "center"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement(treemap_default.a, Object(esm_extends["a" /* default */])({
        className: "m-auto"
      }, treeProps)), "click above to the update data", hoveredNode && hoveredNode.value)));
    }
  }]);

  return DynamicTreemapExample;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/misc/triangle-example.js








// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


function buildTriangle(sideWidth, lowerLeftCoord) {
  var x = lowerLeftCoord.x,
      y = lowerLeftCoord.y;
  var triangle = [[{
    x: x,
    y: y
  }, {
    x: x,
    y: y + sideWidth
  }, {
    x: x + sideWidth,
    y: y
  }]];

  if (sideWidth < 0.5) {
    return triangle;
  }

  var newWidth = sideWidth * 0.5;
  var a = buildTriangle(newWidth, lowerLeftCoord);
  var b = buildTriangle(newWidth, {
    x: x + sideWidth,
    y: y
  });
  var c = buildTriangle(newWidth, {
    x: x,
    y: y + sideWidth
  });
  return triangle.concat(a).concat(b).concat(c);
}

var triangles = buildTriangle(7, {
  x: 0,
  y: 0
});

var triangle_example_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      hoveredIndex: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var hoveredIndex = this.state.hoveredIndex;
      return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        height: 300
      }, external_react_default.a.createElement(external_react_vis_["GradientDefs"], null, external_react_default.a.createElement("radialGradient", {
        id: "grad1",
        cx: "50%",
        cy: "50%",
        r: "50%",
        fx: "50%",
        fy: "50%"
      }, external_react_default.a.createElement("stop", {
        offset: "0%",
        stopColor: "#52c41a",
        stopOpacity: "0"
      }), external_react_default.a.createElement("stop", {
        offset: "100%",
        stopColor: "#007bff",
        stopOpacity: "1"
      }))), external_react_default.a.createElement(external_react_vis_["XAxis"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), triangles.map(function (triangle, index) {
        return external_react_default.a.createElement(external_react_vis_["PolygonSeries"], {
          key: "triangle-".concat(index),
          data: triangle,
          onSeriesMouseOver: function onSeriesMouseOver() {
            return _this2.setState({
              hoveredIndex: index
            });
          },
          onSeriesMouseOut: function onSeriesMouseOut() {
            return _this2.setState({
              hoveredIndex: false
            });
          },
          color: index !== hoveredIndex ? 'url(#grad1)' : null,
          style: {
            strokeWidth: 0.5,
            strokeOpacity: 1,
            opacity: 0.5,
            fill: index === hoveredIndex ? '#f5222d' : null
          }
        });
      }));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/legends/vertical-discrete-color.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var vertical_discrete_color_ITEMS = ['Options', 'Buttons', 'Select boxes', 'Date inputs', 'Password inputs', 'Forms', 'Other'];
function vertical_discrete_color_DiscreteColorExample() {
  return external_react_default.a.createElement(discrete_color_legend_default.a, {
    items: vertical_discrete_color_ITEMS
  });
}
// CONCATENATED MODULE: ./demos/vis/sankey/voronoi.js










var BLURRED_NODE_OPACITY = 0.8;
var FOCUSED_NODE_OPACITY = 1;
var voronoi_nodes = [{
  name: 'a'
}, {
  name: 'b'
}, {
  name: 'c'
}];
var voronoi_links = [{
  source: 0,
  target: 1,
  value: 10
}, {
  source: 0,
  target: 2,
  value: 20
}, {
  source: 1,
  target: 2,
  value: 20
}];

var voronoi_VoronoiSankeyExample =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(VoronoiSankeyExample, _React$Component);

  function VoronoiSankeyExample() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, VoronoiSankeyExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(VoronoiSankeyExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      activeNode: null
    });

    return _this;
  }

  Object(createClass["a" /* default */])(VoronoiSankeyExample, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeNode = this.state.activeNode; // Note: d3.sankey currently mutates the `nodes` and `links` arrays, which doesn't play nice
      // with React's single-direction data flow. We create a copy of each before we pass to the sankey
      // component, just to be sure.

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", null, "".concat(activeNode ? activeNode.name : 'None', " selected")), external_react_default.a.createElement(sankey_default.a, {
        className: "m-auto",
        nodes: voronoi_nodes.map(function (d) {
          var isActiveNode = activeNode && d.name === activeNode.name;
          return Object(objectSpread["a" /* default */])({}, d, {
            opacity: isActiveNode ? FOCUSED_NODE_OPACITY : BLURRED_NODE_OPACITY,
            name: isActiveNode ? "!".concat(d.name, "!") : d.name
          });
        }),
        links: voronoi_links.map(function (d) {
          return Object(objectSpread["a" /* default */])({}, d);
        }),
        width: 200,
        height: 200,
        hasVoronoi: true,
        onValueMouseOver: function onValueMouseOver(node) {
          return _this2.setState({
            activeNode: node
          });
        },
        onValueMouseOut: function onValueMouseOut() {
          return _this2.setState({
            activeNode: null
          });
        }
      }));
    }
  }]);

  return VoronoiSankeyExample;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/misc/voronoi-line-chart.js










// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


var lines = [[{
  x: 1,
  y: 3
}, {
  x: 2,
  y: 5
}, {
  x: 3,
  y: 15
}, {
  x: 4,
  y: 12
}], [{
  x: 1,
  y: 10
}, {
  x: 2,
  y: 4
}, {
  x: 3,
  y: 2
}, {
  x: 4,
  y: 15
}], [{
  x: 1,
  y: 7
}, {
  x: 2,
  y: 11
}, {
  x: 3,
  y: 9
}, {
  x: 4,
  y: 2
}]].map(function (p, i) {
  return p.map(function (d) {
    return Object(objectSpread["a" /* default */])({}, d, {
      line: i
    });
  });
});
var voronoi_line_chart_nodes = lines.reduce(function (acc, d) {
  return [].concat(Object(toConsumableArray["a" /* default */])(acc), Object(toConsumableArray["a" /* default */])(d));
}, []);

var voronoi_line_chart_getDomain = function getDomain(data, key) {
  var _data$reduce = data.reduce(function (acc, row) {
    return {
      min: Math.min(acc.min, row[key]),
      max: Math.max(acc.max, row[key])
    };
  }, {
    min: Infinity,
    max: -Infinity
  }),
      min = _data$reduce.min,
      max = _data$reduce.max;

  return [min, max];
};

var voronoi_line_chart_xDomain = voronoi_line_chart_getDomain(voronoi_line_chart_nodes, 'x');
var voronoi_line_chart_yDomain = voronoi_line_chart_getDomain(voronoi_line_chart_nodes, 'y');

var voronoi_line_chart_Example =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      hoveredNode: null,
      showVoronoi: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          hoveredNode = _this$state.hoveredNode,
          showVoronoi = _this$state.showVoronoi;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Checkbox"], {
        checked: showVoronoi,
        onChange: function onChange(e) {
          return _this2.setState({
            showVoronoi: !showVoronoi
          });
        }
      }, "Show Voronoi"), external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        xDomain: voronoi_line_chart_xDomain,
        yDomain: voronoi_line_chart_yDomain,
        margin: {
          top: 10,
          left: 40,
          bottom: 40,
          right: 10
        },
        height: 279
      }, external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], {
        title: "X Axis"
      }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
        title: "Y Axis"
      }), lines.map(function (d, i) {
        return external_react_default.a.createElement(external_react_vis_["LineSeries"], {
          key: i,
          opacity: hoveredNode && hoveredNode.line === i ? 1 : 0.5,
          data: d,
          color: "".concat(i === 0 ? '#007bff' : '', " ").concat(i === 1 ? '#52c41a' : '', " ").concat(i === 2 ? '#f5222d' : '')
        });
      }), hoveredNode && external_react_default.a.createElement(external_react_vis_["MarkSeries"], {
        data: [hoveredNode]
      }), external_react_default.a.createElement(external_react_vis_["Voronoi"], {
        nodes: lines.reduce(function (acc, d) {
          return [].concat(Object(toConsumableArray["a" /* default */])(acc), Object(toConsumableArray["a" /* default */])(d));
        }, []),
        onHover: function onHover(node) {
          return _this2.setState({
            hoveredNode: node
          });
        },
        onBlur: function onBlur() {
          return _this2.setState({
            hoveredNode: null
          });
        },
        polygonStyle: {
          stroke: showVoronoi ? 'rgba(0, 0, 0, .2)' : null
        }
      })));
    }
  }]);

  return Example;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/plot/whisker-chart.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function whisker_chart_Example(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["WhiskerSeries"], {
    className: "whisker-series-example",
    color: "#007bff",
    data: [{
      x: 1,
      y: 10,
      xVariance: 0.2,
      yVariance: 4
    }, {
      x: 1.7,
      y: 12,
      xVariance: 0.3,
      yVariance: 7
    }, {
      x: 2,
      y: 5,
      xVariance: 0.1,
      yVariance: 3
    }, {
      x: 3,
      y: 15,
      xVariance: 0.4,
      yVariance: 10
    }, {
      x: 2.5,
      y: 7,
      xVariance: 0.3,
      yVariance: 4
    }]
  }));
}
// CONCATENATED MODULE: ./demos/vis/plot/width-height-margin.js

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function width_height_margin_Example(props) {
  return external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    margin: 50,
    height: 300
  }, external_react_default.a.createElement(external_react_vis_["VerticalGridLines"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["XAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["YAxis"], {
    style: {
      strokeWidth: 0.5
    }
  }), external_react_default.a.createElement(external_react_vis_["LineSeries"], {
    color: "#007bff",
    data: [{
      x: 1,
      y: 10
    }, {
      x: 2,
      y: 5
    }, {
      x: 3,
      y: 15
    }]
  }));
}
// CONCATENATED MODULE: ./demos/vis/misc/zoomable-chart-example.js








// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



var zoomable_chart_example_seededRandom = generateSeededRandom(9);
var totalValues = 100;
/**
 * Get the array of x and y pairs.
 * The function tries to avoid too large changes of the chart.
 * @param {number} total Total number of values.
 * @returns {Array} Array of data.
 * @private
 */

function zoomable_chart_example_getRandomSeriesData(total) {
  var result = [];
  var lastY = zoomable_chart_example_seededRandom() * 40 - 20;
  var y;
  var firstY = lastY;

  for (var i = 0; i < total; i++) {
    y = zoomable_chart_example_seededRandom() * firstY - firstY / 2 + lastY;
    result.push({
      x: i,
      y: y
    });
    lastY = y;
  }

  return result;
}

var zoomable_chart_example_ZoomableChartExample =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(ZoomableChartExample, _React$Component);

  function ZoomableChartExample() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, ZoomableChartExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(ZoomableChartExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      lastDrawLocation: null,
      series: [{
        data: zoomable_chart_example_getRandomSeriesData(totalValues),
        disabled: false,
        title: 'Apples'
      }, {
        data: zoomable_chart_example_getRandomSeriesData(totalValues),
        disabled: false,
        title: 'Bananas'
      }]
    });

    return _this;
  }

  Object(createClass["a" /* default */])(ZoomableChartExample, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          series = _this$state.series,
          lastDrawLocation = _this$state.lastDrawLocation;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
        animation: true,
        xDomain: lastDrawLocation && [lastDrawLocation.left, lastDrawLocation.right],
        yDomain: lastDrawLocation && [lastDrawLocation.bottom, lastDrawLocation.top],
        height: 311
      }, external_react_default.a.createElement(external_react_vis_["HorizontalGridLines"], null), external_react_default.a.createElement(external_react_vis_["YAxis"], null), external_react_default.a.createElement(external_react_vis_["XAxis"], null), series.map(function (entry, i) {
        return external_react_default.a.createElement(external_react_vis_["LineSeries"], {
          key: entry.title,
          data: entry.data,
          color: "".concat(i === 0 ? '#007bff' : '#52c41a')
        });
      }), external_react_default.a.createElement(external_react_vis_["Highlight"], {
        onBrushEnd: function onBrushEnd(area) {
          return _this2.setState({
            lastDrawLocation: area
          });
        },
        onDrag: function onDrag(area) {
          _this2.setState({
            lastDrawLocation: {
              bottom: lastDrawLocation.bottom + (area.top - area.bottom),
              left: lastDrawLocation.left - (area.right - area.left),
              right: lastDrawLocation.right - (area.right - area.left),
              top: lastDrawLocation.top + (area.top - area.bottom)
            }
          });
        }
      }))), external_react_default.a.createElement(showcase_button, {
        buttonContent: 'Reset zoom',
        onClick: function onClick() {
          return _this2.setState({
            lastDrawLocation: null
          });
        }
      }));
    }
  }]);

  return ZoomableChartExample;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./demos/vis/showcase-components/source-linker.js


// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
function sourceLinker(ShowcaseComponent, link) {
  return function renderExample() {
    return external_react_default.a.createElement("div", {
      style: {
        alignItem: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%'
      }
    }, ShowcaseComponent && external_react_default.a.createElement(ShowcaseComponent, null), link && external_react_default.a.createElement("a", Object(esm_extends["a" /* default */])({
      className: 'docs-link',
      target: '_blank',
      rel: 'noopener noreferrer'
    }, {
      href: link
    }), "> View Code"));
  };
}
// CONCATENATED MODULE: ./demos/vis/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showCase; });


// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.







































































































var mainShowCase = {
  AxisOn0: AxisOn0,
  ComplexChart: complex_chart_Example,
  LineChart: line_chart_Example,
  LineChartManyColors: line_chart_many_colors_Example,
  LineChartCanvas: line_chart_canvas_Example,
  LineChartWithStyle: line_chart_with_style_Example,
  LineMarkChart: linemark_chart_Example,
  LineSeriesCanvasNearestXYExample: line_series_canvas_nearest_xy_example_LineSeriesCanvasNearestXYExample,
  BarChart: bar_chart_Example,
  BigBaseBarChart: big_base_bar_chart_Example,
  DifferenceChart: difference_chart_DifferenceChart,
  StackedVerticalBarChart: stacked_vertical_bar_chart_Example,
  MixedStackedChart: mixed_stacked_chart_Example,
  StackedHorizontalBarChart: stacked_horizontal_bar_chart_Example,
  ClusteredStackedVerticalBarChart: clustered_stacked_bar_chart_Example,
  StackedHistogram: stacked_histogram_Example,
  Histogram: histogram_Example,
  AnimationExample: animation_example_Example,
  AreaChart: area_chart_Example,
  AreaChartElevated: AreaChartElevated,
  FauxScatterplotChart: faux_radial_scatterplot_Example,
  CustomSVGExample: custom_svg_example_Example,
  CustomSVGRootLevel: CustomSVGRootLevelComponent,
  CustomSVGAllTheMarks: custom_svg_all_the_marks_Example,
  ScatterplotChart: scatterplot_Example,
  ScatterplotCanvas: scatterplot_canvas_Example,
  WhiskerChart: whisker_chart_Example,
  HeatmapChart: heatmap_chart_Example,
  HexHeatmap: hex_heatmap_HexHeatmap,
  HexbinSizeExample: hexbin_size_example_HexbinSizeExample,
  LabeledHeatmap: LabeledHeatmap,
  ContourSeriesExample: contour_series_example_ContourSeriesExample,
  WidthHeightMarginChart: width_height_margin_Example,
  CustomScales: custom_scales_Example,
  CustomAxesOrientation: custom_axes_orientation_Example,
  CustomAxisChart: custom_axis_Example,
  CustomAxisTickFormat: custom_axis_tick_format_Example,
  CustomAxisTickElement: custom_axis_tick_element_Example,
  AxisWithTurnedLabels: axis_with_turned_labels_Example,
  GridLinesChart: grid_Example,
  StaticHints: static_hints_Example,
  DecorativeAxisCrissCross: decorative_axes_criss_cross_Example,
  DynamicHints: dynamic_hints_Example,
  DynamicComplexEdgeHints: dynamic_complex_edge_hints_Example,
  DynamicSimpleEdgeHints: dynamic_simple_edge_hints_Example,
  DynamicSimpleTopEdgeHints: dynamic_simple_topedge_hints_Example,
  DynamicProgrammaticRightEdgeHints: dynamic_programmatic_rightedge_hints_Example,
  EmptyChart: EmptyChart,
  StaticCrosshair: static_crosshair_Example,
  DynamicCrosshair: dynamic_crosshair_DynamicCrosshair,
  DynamicCrosshairScatterplot: dynamic_crosshair_scatterplot_Example,
  PaddedAxis: padded_axis_Example,
  ParallelCoordinatesExample: parallel_coordinates_example,
  SyncedCharts: synced_charts_Example,
  TimeChart: time_chart_Example,
  TriangleExample: triangle_example_Example,
  VoronoiLineChart: voronoi_line_chart_Example,
  CustomAxes: custom_axes_Example,
  LabelSeriesExample: label_series_example_Example,
  GradientExample: GradientExample,
  NullDataExample: null_data_example_NullDataExample,
  ZoomableChartExample: zoomable_chart_example_ZoomableChartExample,
  SelectionPlotExample: selection_plot_example_SelectionPlotExample,
  DragableChartExample: dragable_chart_example,
  BidirectionDragChart: _2d_dragable_plot_BidirectionDragChart,
  SensibleDefaults: SensibleDefaults,
  ColorInXYPlot: ColorInXYPlot,
  ColorSpecificity: ColorSpecificity,
  CategoryColorAtMarkLevel: CategoryColorAtMarkLevel,
  CategoryColorAtMarkLevelCustomPalette: CategoryColorAtMarkLevelCustomPalette,
  CategoryColorAtMarkLevelFixedStroke: CategoryColorAtMarkLevelFixedStroke,
  GradientCharts: GradientCharts,
  LinearColorAtMarkLevel: LinearColorAtMarkLevel,
  LinearColorAtMarkLevelNoPalette: LinearColorAtMarkLevelNoPalette,
  LineSeriesMarkSeries: LineSeriesMarkSeries,
  LiteralColorAtMarkLevel: LiteralColorAtMarkLevel,
  CategoryColorAtSeriesLevel: CategoryColorAtSeriesLevel,
  LinearColorAtSeriesLevel: LinearColorAtSeriesLevel,
  LiteralColorAtSeriesLevel: LiteralColorAtSeriesLevel,
  ReactVis5: ReactVis5,
  ReactVis20: ReactVis20,
  Continuous: Continuous,
  CustomPalette: CustomPalette,
  MiniCharts: MiniCharts,
  FlexibleCharts: flexible_examples_FlexibleCharts,
  LineChartMouseOverSeries: interaction_examples_LineChartMouseOverSeries,
  LineChartMouseOverXY: interaction_examples_LineChartMouseOverXY,
  LinkedCharts: interaction_examples_LinkedCharts,
  ScatterPlotOnNearestXY: interaction_examples_ScatterPlotOnNearestXY,
  SimpleTreemap: simple_treemap_SimpleTreemapExample,
  TreemapExample: dynamic_treemap_DynamicTreemapExample,
  AnimatedSunburst: animated_sunburst_AnimatedSunburst,
  BasicSunburst: basic_sunburst_BasicSunburst,
  ClockExample: clock_example_ClockExample,
  SunburstWithTooltips: sunburst_with_tooltips_SunburstWithTooltips,
  SimpleRadialChart: simple_radial_chart_SimpleRadialChart,
  DonutChartExample: donut_chart_SimpleRadialChart,
  CustomRadiusRadialChart: custom_radius_radial_chart_SimpleRadialChart,
  GradientPie: GradientPie,
  ArcSeriesExample: arc_series_example_Example,
  AnimatedRadarChart: animated_radar_chart_AnimatedRadar,
  BasicRadarChart: basic_radar_chart_BasicRadarChart,
  FourQuadrantRadarChart: FourQuadrantRadarChart,
  RadarChartWithTooltips: radar_chart_with_tooltips_RadarChartWithTooltips,
  RadarChartSeriesTooltips: radar_chart_series_tooltips_BasicRadarChart,
  BasicParallelCoordinates: BasicParallelCoordinates,
  AnimatedParallelCoordinates: animated_parallel_coordinates_AnimatedParallelCoordinates,
  BrushedParallelCoordinates: BrushedParallelCoordinates,
  BasicSankeyExample: BasicSankeyExample,
  VoronoiSankeyExample: voronoi_VoronoiSankeyExample,
  EnergySankeyExample: energy_sankey_EnergySankey,
  LinkEventSankeyExample: link_event_LinkEventSankeyExample,
  LinkHintSankeyExample: link_hint_LinkHintSankeyExample,
  VerticalDiscreteColorLegendExample: vertical_discrete_color_DiscreteColorExample,
  HorizontalDiscreteColorLegendExample: DiscreteColorExample,
  HorizontalDiscreteCustomPalette: horizontal_discrete_custom_palette_HorizontalDiscreteColorPalette,
  SearchableDiscreteColorLegendExample: searchable_discrete_color_Example,
  ContinuousColorLegendExample: continuous_color_Example,
  ContinuousSizeLegendExample: continuous_size_Example,
  EnergySankey: energy_sankey_EnergySankey,
  BasicSankey: BasicSankeyExample,
  VornoiSankey: voronoi_VoronoiSankeyExample
};

var showCaseWithLinks = keys_default()(mainShowCase).reduce(function (acc, showCaseExample) {
  acc["".concat(showCaseExample, "WithLink")] = sourceLinker(mainShowCase[showCaseExample]);
  return acc;
}, {});

var showCase = Object(objectSpread["a" /* default */])({}, mainShowCase, showCaseWithLinks);

/***/ }),

/***/ "wiC0":
/***/ (function(module, exports) {

module.exports = require("react-vis/dist/legends/continuous-color-legend");

/***/ }),

/***/ "wuxH":
/***/ (function(module, exports) {

module.exports = require("react-vis/dist/plot/circular-grid-lines");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ }),

/***/ "zQqO":
/***/ (function(module) {

module.exports = [{"sepal length":5.1,"sepal width":3.5,"petal length":1.4,"petal width":0.2,"species":"setosa"},{"sepal length":4.9,"sepal width":3,"petal length":1.4,"petal width":0.2,"species":"setosa"},{"sepal length":4.7,"sepal width":3.2,"petal length":1.3,"petal width":0.2,"species":"setosa"},{"sepal length":4.6,"sepal width":3.1,"petal length":1.5,"petal width":0.2,"species":"setosa"},{"sepal length":5,"sepal width":3.6,"petal length":1.4,"petal width":0.2,"species":"setosa"},{"sepal length":5.4,"sepal width":3.9,"petal length":1.7,"petal width":0.4,"species":"setosa"},{"sepal length":4.6,"sepal width":3.4,"petal length":1.4,"petal width":0.3,"species":"setosa"},{"sepal length":5,"sepal width":3.4,"petal length":1.5,"petal width":0.2,"species":"setosa"},{"sepal length":4.4,"sepal width":2.9,"petal length":1.4,"petal width":0.2,"species":"setosa"},{"sepal length":4.9,"sepal width":3.1,"petal length":1.5,"petal width":0.1,"species":"setosa"},{"sepal length":5.4,"sepal width":3.7,"petal length":1.5,"petal width":0.2,"species":"setosa"},{"sepal length":4.8,"sepal width":3.4,"petal length":1.6,"petal width":0.2,"species":"setosa"},{"sepal length":4.8,"sepal width":3,"petal length":1.4,"petal width":0.1,"species":"setosa"},{"sepal length":4.3,"sepal width":3,"petal length":1.1,"petal width":0.1,"species":"setosa"},{"sepal length":5.8,"sepal width":4,"petal length":1.2,"petal width":0.2,"species":"setosa"},{"sepal length":5.7,"sepal width":4.4,"petal length":1.5,"petal width":0.4,"species":"setosa"},{"sepal length":5.4,"sepal width":3.9,"petal length":1.3,"petal width":0.4,"species":"setosa"},{"sepal length":5.1,"sepal width":3.5,"petal length":1.4,"petal width":0.3,"species":"setosa"},{"sepal length":5.7,"sepal width":3.8,"petal length":1.7,"petal width":0.3,"species":"setosa"},{"sepal length":5.1,"sepal width":3.8,"petal length":1.5,"petal width":0.3,"species":"setosa"},{"sepal length":5.4,"sepal width":3.4,"petal length":1.7,"petal width":0.2,"species":"setosa"},{"sepal length":5.1,"sepal width":3.7,"petal length":1.5,"petal width":0.4,"species":"setosa"},{"sepal length":4.6,"sepal width":3.6,"petal length":1,"petal width":0.2,"species":"setosa"},{"sepal length":5.1,"sepal width":3.3,"petal length":1.7,"petal width":0.5,"species":"setosa"},{"sepal length":4.8,"sepal width":3.4,"petal length":1.9,"petal width":0.2,"species":"setosa"},{"sepal length":5,"sepal width":3,"petal length":1.6,"petal width":0.2,"species":"setosa"},{"sepal length":5,"sepal width":3.4,"petal length":1.6,"petal width":0.4,"species":"setosa"},{"sepal length":5.2,"sepal width":3.5,"petal length":1.5,"petal width":0.2,"species":"setosa"},{"sepal length":5.2,"sepal width":3.4,"petal length":1.4,"petal width":0.2,"species":"setosa"},{"sepal length":4.7,"sepal width":3.2,"petal length":1.6,"petal width":0.2,"species":"setosa"},{"sepal length":4.8,"sepal width":3.1,"petal length":1.6,"petal width":0.2,"species":"setosa"},{"sepal length":5.4,"sepal width":3.4,"petal length":1.5,"petal width":0.4,"species":"setosa"},{"sepal length":5.2,"sepal width":4.1,"petal length":1.5,"petal width":0.1,"species":"setosa"},{"sepal length":5.5,"sepal width":4.2,"petal length":1.4,"petal width":0.2,"species":"setosa"},{"sepal length":4.9,"sepal width":3.1,"petal length":1.5,"petal width":0.2,"species":"setosa"},{"sepal length":5,"sepal width":3.2,"petal length":1.2,"petal width":0.2,"species":"setosa"},{"sepal length":5.5,"sepal width":3.5,"petal length":1.3,"petal width":0.2,"species":"setosa"},{"sepal length":4.9,"sepal width":3.6,"petal length":1.4,"petal width":0.1,"species":"setosa"},{"sepal length":4.4,"sepal width":3,"petal length":1.3,"petal width":0.2,"species":"setosa"},{"sepal length":5.1,"sepal width":3.4,"petal length":1.5,"petal width":0.2,"species":"setosa"},{"sepal length":5,"sepal width":3.5,"petal length":1.3,"petal width":0.3,"species":"setosa"},{"sepal length":4.5,"sepal width":2.3,"petal length":1.3,"petal width":0.3,"species":"setosa"},{"sepal length":4.4,"sepal width":3.2,"petal length":1.3,"petal width":0.2,"species":"setosa"},{"sepal length":5,"sepal width":3.5,"petal length":1.6,"petal width":0.6,"species":"setosa"},{"sepal length":5.1,"sepal width":3.8,"petal length":1.9,"petal width":0.4,"species":"setosa"},{"sepal length":4.8,"sepal width":3,"petal length":1.4,"petal width":0.3,"species":"setosa"},{"sepal length":5.1,"sepal width":3.8,"petal length":1.6,"petal width":0.2,"species":"setosa"},{"sepal length":4.6,"sepal width":3.2,"petal length":1.4,"petal width":0.2,"species":"setosa"},{"sepal length":5.3,"sepal width":3.7,"petal length":1.5,"petal width":0.2,"species":"setosa"},{"sepal length":5,"sepal width":3.3,"petal length":1.4,"petal width":0.2,"species":"setosa"},{"sepal length":7,"sepal width":3.2,"petal length":4.7,"petal width":1.4,"species":"versicolor"},{"sepal length":6.4,"sepal width":3.2,"petal length":4.5,"petal width":1.5,"species":"versicolor"},{"sepal length":6.9,"sepal width":3.1,"petal length":4.9,"petal width":1.5,"species":"versicolor"},{"sepal length":5.5,"sepal width":2.3,"petal length":4,"petal width":1.3,"species":"versicolor"},{"sepal length":6.5,"sepal width":2.8,"petal length":4.6,"petal width":1.5,"species":"versicolor"},{"sepal length":5.7,"sepal width":2.8,"petal length":4.5,"petal width":1.3,"species":"versicolor"},{"sepal length":6.3,"sepal width":3.3,"petal length":4.7,"petal width":1.6,"species":"versicolor"},{"sepal length":4.9,"sepal width":2.4,"petal length":3.3,"petal width":1,"species":"versicolor"},{"sepal length":6.6,"sepal width":2.9,"petal length":4.6,"petal width":1.3,"species":"versicolor"},{"sepal length":5.2,"sepal width":2.7,"petal length":3.9,"petal width":1.4,"species":"versicolor"},{"sepal length":5,"sepal width":2,"petal length":3.5,"petal width":1,"species":"versicolor"},{"sepal length":5.9,"sepal width":3,"petal length":4.2,"petal width":1.5,"species":"versicolor"},{"sepal length":6,"sepal width":2.2,"petal length":4,"petal width":1,"species":"versicolor"},{"sepal length":6.1,"sepal width":2.9,"petal length":4.7,"petal width":1.4,"species":"versicolor"},{"sepal length":5.6,"sepal width":2.9,"petal length":3.6,"petal width":1.3,"species":"versicolor"},{"sepal length":6.7,"sepal width":3.1,"petal length":4.4,"petal width":1.4,"species":"versicolor"},{"sepal length":5.6,"sepal width":3,"petal length":4.5,"petal width":1.5,"species":"versicolor"},{"sepal length":5.8,"sepal width":2.7,"petal length":4.1,"petal width":1,"species":"versicolor"},{"sepal length":6.2,"sepal width":2.2,"petal length":4.5,"petal width":1.5,"species":"versicolor"},{"sepal length":5.6,"sepal width":2.5,"petal length":3.9,"petal width":1.1,"species":"versicolor"},{"sepal length":5.9,"sepal width":3.2,"petal length":4.8,"petal width":1.8,"species":"versicolor"},{"sepal length":6.1,"sepal width":2.8,"petal length":4,"petal width":1.3,"species":"versicolor"},{"sepal length":6.3,"sepal width":2.5,"petal length":4.9,"petal width":1.5,"species":"versicolor"},{"sepal length":6.1,"sepal width":2.8,"petal length":4.7,"petal width":1.2,"species":"versicolor"},{"sepal length":6.4,"sepal width":2.9,"petal length":4.3,"petal width":1.3,"species":"versicolor"},{"sepal length":6.6,"sepal width":3,"petal length":4.4,"petal width":1.4,"species":"versicolor"},{"sepal length":6.8,"sepal width":2.8,"petal length":4.8,"petal width":1.4,"species":"versicolor"},{"sepal length":6.7,"sepal width":3,"petal length":5,"petal width":1.7,"species":"versicolor"},{"sepal length":6,"sepal width":2.9,"petal length":4.5,"petal width":1.5,"species":"versicolor"},{"sepal length":5.7,"sepal width":2.6,"petal length":3.5,"petal width":1,"species":"versicolor"},{"sepal length":5.5,"sepal width":2.4,"petal length":3.8,"petal width":1.1,"species":"versicolor"},{"sepal length":5.5,"sepal width":2.4,"petal length":3.7,"petal width":1,"species":"versicolor"},{"sepal length":5.8,"sepal width":2.7,"petal length":3.9,"petal width":1.2,"species":"versicolor"},{"sepal length":6,"sepal width":2.7,"petal length":5.1,"petal width":1.6,"species":"versicolor"},{"sepal length":5.4,"sepal width":3,"petal length":4.5,"petal width":1.5,"species":"versicolor"},{"sepal length":6,"sepal width":3.4,"petal length":4.5,"petal width":1.6,"species":"versicolor"},{"sepal length":6.7,"sepal width":3.1,"petal length":4.7,"petal width":1.5,"species":"versicolor"},{"sepal length":6.3,"sepal width":2.3,"petal length":4.4,"petal width":1.3,"species":"versicolor"},{"sepal length":5.6,"sepal width":3,"petal length":4.1,"petal width":1.3,"species":"versicolor"},{"sepal length":5.5,"sepal width":2.5,"petal length":4,"petal width":1.3,"species":"versicolor"},{"sepal length":5.5,"sepal width":2.6,"petal length":4.4,"petal width":1.2,"species":"versicolor"},{"sepal length":6.1,"sepal width":3,"petal length":4.6,"petal width":1.4,"species":"versicolor"},{"sepal length":5.8,"sepal width":2.6,"petal length":4,"petal width":1.2,"species":"versicolor"},{"sepal length":5,"sepal width":2.3,"petal length":3.3,"petal width":1,"species":"versicolor"},{"sepal length":5.6,"sepal width":2.7,"petal length":4.2,"petal width":1.3,"species":"versicolor"},{"sepal length":5.7,"sepal width":3,"petal length":4.2,"petal width":1.2,"species":"versicolor"},{"sepal length":5.7,"sepal width":2.9,"petal length":4.2,"petal width":1.3,"species":"versicolor"},{"sepal length":6.2,"sepal width":2.9,"petal length":4.3,"petal width":1.3,"species":"versicolor"},{"sepal length":5.1,"sepal width":2.5,"petal length":3,"petal width":1.1,"species":"versicolor"},{"sepal length":5.7,"sepal width":2.8,"petal length":4.1,"petal width":1.3,"species":"versicolor"},{"sepal length":6.3,"sepal width":3.3,"petal length":6,"petal width":2.5,"species":"virginica"},{"sepal length":5.8,"sepal width":2.7,"petal length":5.1,"petal width":1.9,"species":"virginica"},{"sepal length":7.1,"sepal width":3,"petal length":5.9,"petal width":2.1,"species":"virginica"},{"sepal length":6.3,"sepal width":2.9,"petal length":5.6,"petal width":1.8,"species":"virginica"},{"sepal length":6.5,"sepal width":3,"petal length":5.8,"petal width":2.2,"species":"virginica"},{"sepal length":7.6,"sepal width":3,"petal length":6.6,"petal width":2.1,"species":"virginica"},{"sepal length":4.9,"sepal width":2.5,"petal length":4.5,"petal width":1.7,"species":"virginica"},{"sepal length":7.3,"sepal width":2.9,"petal length":6.3,"petal width":1.8,"species":"virginica"},{"sepal length":6.7,"sepal width":2.5,"petal length":5.8,"petal width":1.8,"species":"virginica"},{"sepal length":7.2,"sepal width":3.6,"petal length":6.1,"petal width":2.5,"species":"virginica"},{"sepal length":6.5,"sepal width":3.2,"petal length":5.1,"petal width":2,"species":"virginica"},{"sepal length":6.4,"sepal width":2.7,"petal length":5.3,"petal width":1.9,"species":"virginica"},{"sepal length":6.8,"sepal width":3,"petal length":5.5,"petal width":2.1,"species":"virginica"},{"sepal length":5.7,"sepal width":2.5,"petal length":5,"petal width":2,"species":"virginica"},{"sepal length":5.8,"sepal width":2.8,"petal length":5.1,"petal width":2.4,"species":"virginica"},{"sepal length":6.4,"sepal width":3.2,"petal length":5.3,"petal width":2.3,"species":"virginica"},{"sepal length":6.5,"sepal width":3,"petal length":5.5,"petal width":1.8,"species":"virginica"},{"sepal length":7.7,"sepal width":3.8,"petal length":6.7,"petal width":2.2,"species":"virginica"},{"sepal length":7.7,"sepal width":2.6,"petal length":6.9,"petal width":2.3,"species":"virginica"},{"sepal length":6,"sepal width":2.2,"petal length":5,"petal width":1.5,"species":"virginica"},{"sepal length":6.9,"sepal width":3.2,"petal length":5.7,"petal width":2.3,"species":"virginica"},{"sepal length":5.6,"sepal width":2.8,"petal length":4.9,"petal width":2,"species":"virginica"},{"sepal length":7.7,"sepal width":2.8,"petal length":6.7,"petal width":2,"species":"virginica"},{"sepal length":6.3,"sepal width":2.7,"petal length":4.9,"petal width":1.8,"species":"virginica"},{"sepal length":6.7,"sepal width":3.3,"petal length":5.7,"petal width":2.1,"species":"virginica"},{"sepal length":7.2,"sepal width":3.2,"petal length":6,"petal width":1.8,"species":"virginica"},{"sepal length":6.2,"sepal width":2.8,"petal length":4.8,"petal width":1.8,"species":"virginica"},{"sepal length":6.1,"sepal width":3,"petal length":4.9,"petal width":1.8,"species":"virginica"},{"sepal length":6.4,"sepal width":2.8,"petal length":5.6,"petal width":2.1,"species":"virginica"},{"sepal length":7.2,"sepal width":3,"petal length":5.8,"petal width":1.6,"species":"virginica"},{"sepal length":7.4,"sepal width":2.8,"petal length":6.1,"petal width":1.9,"species":"virginica"},{"sepal length":7.9,"sepal width":3.8,"petal length":6.4,"petal width":2,"species":"virginica"},{"sepal length":6.4,"sepal width":2.8,"petal length":5.6,"petal width":2.2,"species":"virginica"},{"sepal length":6.3,"sepal width":2.8,"petal length":5.1,"petal width":1.5,"species":"virginica"},{"sepal length":6.1,"sepal width":2.6,"petal length":5.6,"petal width":1.4,"species":"virginica"},{"sepal length":7.7,"sepal width":3,"petal length":6.1,"petal width":2.3,"species":"virginica"},{"sepal length":6.3,"sepal width":3.4,"petal length":5.6,"petal width":2.4,"species":"virginica"},{"sepal length":6.4,"sepal width":3.1,"petal length":5.5,"petal width":1.8,"species":"virginica"},{"sepal length":6,"sepal width":3,"petal length":4.8,"petal width":1.8,"species":"virginica"},{"sepal length":6.9,"sepal width":3.1,"petal length":5.4,"petal width":2.1,"species":"virginica"},{"sepal length":6.7,"sepal width":3.1,"petal length":5.6,"petal width":2.4,"species":"virginica"},{"sepal length":6.9,"sepal width":3.1,"petal length":5.1,"petal width":2.3,"species":"virginica"},{"sepal length":5.8,"sepal width":2.7,"petal length":5.1,"petal width":1.9,"species":"virginica"},{"sepal length":6.8,"sepal width":3.2,"petal length":5.9,"petal width":2.3,"species":"virginica"},{"sepal length":6.7,"sepal width":3.3,"petal length":5.7,"petal width":2.5,"species":"virginica"},{"sepal length":6.7,"sepal width":3,"petal length":5.2,"petal width":2.3,"species":"virginica"},{"sepal length":6.3,"sepal width":2.5,"petal length":5,"petal width":1.9,"species":"virginica"},{"sepal length":6.5,"sepal width":3,"petal length":5.2,"petal width":2,"species":"virginica"},{"sepal length":6.2,"sepal width":3.4,"petal length":5.4,"petal width":2.3,"species":"virginica"},{"sepal length":5.9,"sepal width":3,"petal length":5.1,"petal width":1.8,"species":"virginica"}];

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