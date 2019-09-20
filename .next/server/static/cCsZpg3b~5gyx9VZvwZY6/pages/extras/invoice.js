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
/******/ 	return __webpack_require__(__webpack_require__.s = "6456");
/******/ })
/************************************************************************/
/******/ ({

/***/ "6456":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("rZDb");


/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "FWZJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return lowercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return windDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getWeatherIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return objectToCamelCase; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O40h");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Wa2I");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






var weatherIcons = {
  '01d': '/static/weather/day.svg',
  '02d': '/static/weather/cloudy-day-1.svg',
  '03d': '/static/weather/cloudy-day-2.svg',
  '04d': '/static/weather/cloudy-day-3.svg',
  '09d': '/static/weather/rainy-4.svg',
  '10d': '/static/weather/rainy-1.svg',
  '11d': '/static/weather/thunder.svg',
  '13d': '/static/weather/snowy-3.svg',
  '50d': '/static/weather/cloudy-day-3.svg',
  '01n': '/static/weather/night.svg',
  '02n': '/static/weather/cloudy-night-1.svg',
  '03n': '/static/weather/cloudy-night-2.svg',
  '04n': '/static/weather/cloudy-night-3.svg',
  '09n': '/static/weather/rainy-4.svg',
  '10n': '/static/weather/rainy-5.svg',
  '11n': '/static/weather/thunder.svg',
  '13n': '/static/weather/snowy-5.svg',
  '50n': '/static/weather/cloudy-day-3.svg'
}; // Capitalize

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function lowercase(string) {
  return string.toLowerCase();
} // Format price

function formatPrice(number) {
  var fnumber = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_4___default()(number);

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(fnumber);
} // Get wind direction

function windDirection(degree) {
  var sectors = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
  degree += 22.5;

  if (degree < 0) {
    degree = 360 - Math.abs(degree) % 360;
  } else {
    degree = degree % 360;
  }

  var which = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(degree / 45, 10);

  return sectors[which];
} // Get weather icon class

function getWeatherIcon(code, size) {
  var icon = weatherIcons[code];
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    css: "\n        background: none, url(".concat(icon, ") no-repeat;\n        background-size: contain;\n        width: ").concat(size, "px;\n        height: ").concat(size, "px;\n        display: inline-block;\n      ")
  });
} // Get weather data

function getWeather(_x, _x2, _x3) {
  return _getWeather.apply(this, arguments);
}

function _getWeather() {
  _getWeather = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(city, country, days) {
    var forecast, forecast_call;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            forecast = undefined;
            _context.prev = 1;
            _context.next = 4;
            return fetch("//api.openweathermap.org/data/2.5/forecast?q=".concat(city, ",").concat(country, "&appid=").concat("", "&cnt=").concat(days, "&units=metric")).then(function (res) {
              if (res.ok) {
                return res;
              } else {
                throw Error("Request rejected with status ".concat(res.status));
              }
            }).catch(console.error);

          case 4:
            forecast_call = _context.sent;

            if (!(forecast_call !== undefined)) {
              _context.next = 9;
              break;
            }

            _context.next = 8;
            return forecast_call.json();

          case 8:
            forecast = _context.sent;

          case 9:
            return _context.abrupt("return", forecast);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", '');

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));
  return _getWeather.apply(this, arguments);
}

function toCamelCase(str) {
  return str.toLowerCase().replace(/[-_]+/g, ' ').replace(/[^\w\s]/g, '').replace(/ (.)/g, function ($1) {
    return $1.toUpperCase();
  }).replace(/ /g, '');
}

function objectToCamelCase(origObj) {
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(origObj).reduce(function (newObj, key) {
    var val = origObj[key];
    var newVal = typeof val === 'object' ? objectToCamelCase(val) : val;
    newObj[toCamelCase(key)] = newVal;
    return newObj;
  }, {});
}

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "T22j":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "Wa2I":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("T22j");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rZDb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// CONCATENATED MODULE: ./demos/mock/invoice.js
/* harmony default export */ var invoice = ([{
  title: 'Maintanance',
  subtitle: 'Monthly web updates for http://www.themeforest.net',
  price: 250.0,
  quantity: 1
}, {
  title: 'Recurring Bill (Hosting)',
  subtitle: 'Monthly dedicated VPN web hosting (1 Jan - 30 Jan, 2014)',
  price: 652.87,
  quantity: 3
}, {
  title: 'Recurring Bill (Domain)',
  subtitle: '2 year domain name purchase',
  price: 239.0,
  quantity: 3
}, {
  title: 'Web design',
  subtitle: 'PSD to HTML Conversion (3 pages)',
  price: 958.0,
  quantity: 1
}]);
// EXTERNAL MODULE: ./lib/helpers.js
var helpers = __webpack_require__("FWZJ");

// CONCATENATED MODULE: ./components/Invoice.js





var Invoice_Invoice = function Invoice() {
  var tax = 15;

  var getSubTotal = function getSubTotal() {
    return invoice.reduce(function (sum, item) {
      return sum + item.quantity * item.price;
    }, 0);
  };

  var getCalculatedTax = function getCalculatedTax() {
    return tax * getSubTotal() / 100;
  };

  var getTotal = function getTotal() {
    return getSubTotal() + getCalculatedTax();
  };

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_antd_["Card"], {
    className: "shadow-sm text-monospace",
    bodyStyle: {
      padding: 0
    },
    bordered: false
  }, external_react_default.a.createElement("div", {
    className: "bg-dark text-light rounded-top p-5"
  }, external_react_default.a.createElement("div", {
    className: "p-5"
  }, external_react_default.a.createElement("h1", {
    className: "text-white"
  }, "Envato"), external_react_default.a.createElement(external_antd_["Row"], {
    type: "flex",
    justify: "space-between"
  }, external_react_default.a.createElement(external_antd_["Col"], null, external_react_default.a.createElement("ul", {
    className: "list-unstyled"
  }, external_react_default.a.createElement("li", null, "Apple Inc"), external_react_default.a.createElement("li", null, "Austin Walker"), external_react_default.a.createElement("li", null, "austin.walker94@example.com")), external_react_default.a.createElement("ul", {
    className: "list-unstyled"
  }, external_react_default.a.createElement("li", null, "4783 Blue Island Ave"), external_react_default.a.createElement("li", null, "Ljan terrasse 346"), external_react_default.a.createElement("li", null, "Vear"), external_react_default.a.createElement("li", null, "Rogaland"), external_react_default.a.createElement("li", null, "3095"), external_react_default.a.createElement("li", null, "United States of America")), external_react_default.a.createElement("ul", {
    className: "list-unstyled"
  }, external_react_default.a.createElement("li", null, "Invoice #45789"), external_react_default.a.createElement("li", null, "November 05, 2019"))), external_react_default.a.createElement(external_antd_["Col"], {
    className: "text-right"
  }, external_react_default.a.createElement("ul", {
    className: "list-unstyled"
  }, external_react_default.a.createElement("li", null, "Amazon AWS"), external_react_default.a.createElement("li", null, "Francine Miles"), external_react_default.a.createElement("li", null, "frank.miles98@example.com")), external_react_default.a.createElement("ul", {
    className: "list-unstyled"
  }, external_react_default.a.createElement("li", null, "1033 W Sherman Dr"), external_react_default.a.createElement("li", null, "798 Mariana Isle"), external_react_default.a.createElement("li", null, "Lake Maegan"), external_react_default.a.createElement("li", null, "Wyoming"), external_react_default.a.createElement("li", null, "00 263"), external_react_default.a.createElement("li", null, "South Africa")))))), external_react_default.a.createElement("div", {
    className: "p-5"
  }, external_react_default.a.createElement("div", {
    className: "p-5"
  }, external_react_default.a.createElement(external_antd_["Divider"], {
    className: "m-0"
  }), external_react_default.a.createElement(external_antd_["Row"], {
    type: "flex",
    justify: "space-between",
    className: "py-2 text-muted"
  }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("small", null, "Description")), external_react_default.a.createElement("div", {
    className: "text-right"
  }, external_react_default.a.createElement("small", null, "Amount"))), external_react_default.a.createElement(external_antd_["Divider"], {
    className: "m-0"
  }), invoice.map(function (item, index) {
    return external_react_default.a.createElement("div", {
      key: index
    }, external_react_default.a.createElement(external_antd_["Row"], {
      type: "flex",
      justify: "space-between",
      align: "middle",
      className: "py-4"
    }, external_react_default.a.createElement("div", {
      className: "mr-auto"
    }, external_react_default.a.createElement("span", null, item.title), external_react_default.a.createElement("small", {
      className: "text-muted",
      css: "\n                        display: block;\n                      "
    }, item.subtitle, item.quantity && external_react_default.a.createElement("span", null, "\xA0*\xA0", item.quantity))), external_react_default.a.createElement("div", {
      className: "text-right"
    }, external_react_default.a.createElement("span", null, Object(helpers["b" /* formatPrice */])(item.price * item.quantity)))), external_react_default.a.createElement(external_antd_["Divider"], {
      className: "m-0"
    }));
  }), external_react_default.a.createElement(external_antd_["Divider"], {
    className: "m-0"
  }), external_react_default.a.createElement(external_antd_["Row"], null, external_react_default.a.createElement("div", {
    className: "ml-auto",
    css: "\n                  display: block;\n                  width: 100%;\n                  max-width: 400px;\n                "
  }, external_react_default.a.createElement(external_antd_["Row"], {
    type: "flex",
    justify: "space-between",
    align: "middle",
    className: "py-4"
  }, external_react_default.a.createElement("small", {
    className: "mr-auto text-muted"
  }, "Subtotal"), external_react_default.a.createElement("span", {
    className: "text-right"
  }, Object(helpers["b" /* formatPrice */])(getSubTotal()))), external_react_default.a.createElement(external_antd_["Divider"], {
    className: "m-0"
  }), external_react_default.a.createElement(external_antd_["Row"], {
    type: "flex",
    justify: "space-between",
    align: "middle",
    className: "py-4"
  }, external_react_default.a.createElement("small", {
    className: "mr-auto text-muted"
  }, "Tax"), external_react_default.a.createElement("span", null, external_react_default.a.createElement("small", {
    className: "text-muted"
  }, "@ ", tax, "% - "), external_react_default.a.createElement("span", null, Object(helpers["b" /* formatPrice */])(getCalculatedTax())))), external_react_default.a.createElement(external_antd_["Divider"], {
    className: "m-0"
  }), external_react_default.a.createElement(external_antd_["Row"], {
    type: "flex",
    justify: "space-between",
    align: "middle",
    className: "py-4"
  }, external_react_default.a.createElement("small", {
    className: "mr-auto text-muted"
  }, "Discount"), external_react_default.a.createElement("span", null, external_react_default.a.createElement("small", {
    className: "text-muted"
  }, "0% off - "), external_react_default.a.createElement("span", null, Object(helpers["b" /* formatPrice */])(0)))), external_react_default.a.createElement(external_antd_["Divider"], {
    className: "m-0 bg-primary"
  }), external_react_default.a.createElement(external_antd_["Row"], {
    type: "flex",
    justify: "space-between",
    align: "middle",
    className: "py-4"
  }, external_react_default.a.createElement("small", {
    className: "mr-auto text-muted"
  }, "Total"), external_react_default.a.createElement("strong", null, Object(helpers["b" /* formatPrice */])(getTotal()))), external_react_default.a.createElement(external_antd_["Divider"], {
    className: "m-0 bg-primary"
  })))))), external_react_default.a.createElement("div", {
    className: "my-5 text-center"
  }, external_react_default.a.createElement(external_antd_["Button"], {
    type: "primary",
    className: "px-5"
  }, "Pay Now")));
};

/* harmony default export */ var components_Invoice = (Invoice_Invoice);
// CONCATENATED MODULE: ./pages/extras/invoice.js



var invoice_InvoicePage = function InvoicePage() {
  return external_react_default.a.createElement(components_Invoice, null);
};

/* harmony default export */ var extras_invoice = __webpack_exports__["default"] = (invoice_InvoicePage);

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ })

/******/ });