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
/******/ 	return __webpack_require__(__webpack_require__.s = "66ca");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "3GIh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);



var StatCard = function StatCard(_ref) {
  var type = _ref.type,
      title = _ref.title,
      value = _ref.value,
      icon = _ref.icon,
      color = _ref.color,
      clickHandler = _ref.clickHandler;
  var before = null,
      after = null;
  var cardIcon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    shape: "circle",
    size: "large",
    type: "primary",
    style: {
      backgroundColor: color,
      borderColor: color
    },
    className: type !== 'fill' ? 'mr-4' : null,
    onClick: clickHandler
  }, icon));

  if (icon) {
    type === 'fill' ? after = cardIcon : before = cardIcon;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "mb-4",
    style: type === 'fill' ? {
      backgroundColor: color
    } : null
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    type: "flex",
    align: "middle",
    justify: "start"
  }, before, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "mb-0 ".concat(type === 'fill' ? 'text-white' : null)
  }, value), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: type === 'fill' ? 'text-white-50' : null
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mr-auto"
  }), after));
};

/* harmony default export */ __webpack_exports__["a"] = (StatCard);

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5vHU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rt45");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("NC1Z");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);



function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n  position: relative;\n  height: 4.5em;\n  overflow: hidden;\n  &:after {\n    content: '';\n    text-align: right;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 10%;\n    height: 1.5em;\n    background: linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0),\n      rgba(255, 255, 255, 1) 50%\n    );\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n  position: relative;\n  width: 100%;\n  .ant-carousel {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n  }\n  .slick-slider {\n    width: 100%;\n    height: 100%;\n  }\n  .slick-slide > div {\n    display: flex;\n  }\n  .image {\n    position: relative;\n    background-size: cover;\n    background-position: top center;\n    width: 100%;\n  }\n  .weakColor & .image {\n    -webkit-filter: invert(100%);\n    filter: invert(100%);\n  }\n  .content {\n    position: relative;\n    z-index: 9;\n  }\n  .title {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background-image: linear-gradient(\n      to bottom,\n      transparent 0,\n      rgb(29, 29, 29) 100%\n    );\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n  .ant-card-cover {\n    position: relative;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(_templateObject());
var Cover = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(_templateObject2());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(_templateObject3());

var PostCard = function PostCard(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      text = _ref.text,
      images = _ref.images,
      imageHeight = _ref.imageHeight;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledCard, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    cover: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Cover, {
      style: {
        height: imageHeight
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
      autoplay: true,
      autoplaySpeed: 6000,
      className: "rounded-top overflow-hidden"
    }, images.map(function (image, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: index
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "image",
        css: "\n                    background-image: url(".concat(image, ");\n                    height: ").concat(imageHeight, "px;\n                  ")
      }));
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "title p-4"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
      className: "mb-0 text-white"
    }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
      className: "mb-0 text-white-50"
    }, subtitle))),
    actions: [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_3__["Heart"], {
      size: 20,
      strokeWidth: 1
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_3__["Star"], {
      size: 20,
      strokeWidth: 1
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_3__["Share"], {
      size: 20,
      strokeWidth: 1
    })]
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, null, text)));
};

/* harmony default export */ __webpack_exports__["a"] = (PostCard);

/***/ }),

/***/ "66ca":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

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

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "GKd8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O40h");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("doui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("NC1Z");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("FWZJ");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Skji");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_8__);











var DescriptionItem = function DescriptionItem(_ref) {
  var title = _ref.title,
      content = _ref.content;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    type: "flex",
    align: "middle",
    justify: "space-between",
    className: "mb-2"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, title), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("small", null, content));
};

var ForecastItem = function ForecastItem(_ref2) {
  var content = _ref2.content;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    css: "\n      display: block;\n    "
  }, content);
};

var getWindDirection = function getWindDirection(degree) {
  var direction = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_7__[/* windDirection */ "g"])(degree);

  switch (direction) {
    case 'n':
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_5__["ArrowUp"], {
        size: 20,
        strokeWidth: 1
      });

    case 'ne':
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_5__["ArrowUpRight"], {
        size: 20,
        strokeWidth: 1
      });

    case 'e':
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_5__["ArrowRight"], {
        size: 20,
        strokeWidth: 1
      });

    case 'se':
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_5__["ArrowDownRight"], {
        size: 20,
        strokeWidth: 1
      });

    case 's':
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_5__["ArrowDown"], {
        size: 20,
        strokeWidth: 1
      });

    case 'sw':
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_5__["ArrowDownLeft"], {
        size: 20,
        strokeWidth: 1
      });

    case 'w':
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_5__["ArrowLeft"], {
        size: 20,
        strokeWidth: 1
      });

    case 'nw':
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_5__["ArrowUpLeft"], {
        size: 20,
        strokeWidth: 1
      });

    default:
      break;
  }
};

var WeatherCard = function WeatherCard(_ref3) {
  var city = _ref3.city,
      country = _ref3.country,
      days = _ref3.days;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(undefined),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(undefined),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState3, 2),
      forecast = _useState4[0],
      setForecast = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var _forecast, _current;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getWeather */ "c"])(city, country, days);

            case 3:
              _forecast = _context.sent;

              if (_forecast) {
                _current = _forecast.list[0];
                setCurrent(_current);
                setForecast(_forecast);
              }

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }))();
  }, [city, country, days]);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    bodyStyle: {
      padding: 0
    },
    className: "mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Skeleton"], {
    loading: !current && !forecast,
    active: true,
    className: "p-4"
  }, current && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "p-4"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    type: "flex",
    align: "middle",
    justify: "space-between",
    className: "mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], null, forecast && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h5", {
    className: "mb-0 font-weight-bold"
  }, "".concat(forecast.city.name, ", ").concat(forecast.city.country)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h6", {
    className: "mb-0"
  }, date_fns_format__WEBPACK_IMPORTED_MODULE_8___default()(current.dt * 1000, 'MMMM Do YYYY')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("small", null, Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_7__[/* capitalize */ "a"])(current.weather[0].description))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    className: "text-right"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    className: "font-weight-light mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, current.main.temp, "\xB0")))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    type: "flex",
    align: "middle",
    justify: "space-between",
    gutter: 16
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(current.main).map(function (key, index) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 12,
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(DescriptionItem, {
      title: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_7__[/* capitalize */ "a"])(key.replace(/_/g, ' ')),
      content: current.main[key]
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
    orientation: "left"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("small", null, "Forecast")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "p-4"
  }, forecast && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    type: "flex",
    align: "middle",
    justify: "space-between",
    className: "text-center",
    style: {
      flexFlow: 'initial'
    }
  }, forecast.list.map(function (day, index) {
    return index !== 0 && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "text-center mb-0",
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ForecastItem, {
      content: date_fns_format__WEBPACK_IMPORTED_MODULE_8___default()(day.dt * 1000, 'ddd')
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ForecastItem, {
      content: day.weather.description
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ForecastItem, {
      content: getWindDirection(day.wind.deg)
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ForecastItem, {
      content: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getWeatherIcon */ "d"])(day.weather[0].icon, 50)
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ForecastItem, {
      content: "".concat(day.main.temp, "\xB0")
    }));
  }))))));
};

/* harmony default export */ __webpack_exports__["a"] = (WeatherCard);

/***/ }),

/***/ "GXHU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: external "less-vars-to-js"
var external_less_vars_to_js_ = __webpack_require__("bPsq");
var external_less_vars_to_js_default = /*#__PURE__*/__webpack_require__.n(external_less_vars_to_js_);

// EXTERNAL MODULE: ./lib/helpers.js
var helpers = __webpack_require__("FWZJ");

// CONCATENATED MODULE: ./node_modules/raw-loader/dist/cjs.js!./assets/antd-custom.less
/* harmony default export */ var antd_custom = ("// Default ant design variales ->>> https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less\n// -------- Colors -----------\n@primary-color          : #007bff;\n@info-color             : #1890ff;\n@success-color          : #52c41a;\n@processing-color       : #1890ff;\n@error-color            : #f5222d;\n@highlight-color        : #f5222d;\n@warning-color          : #faad14;\n@normal-color           : #d9d9d9;\n@background-color       : #f7f7f9;\n@dark-color             : rgb(51,51,51);\n@text-color             : rgba(0, 0, 0, .65);\n@text-color-secondary   : rgba(0,0,0,.45);\n\n// -------- Border radius -----------\n@border-radius-base     : 4px;\n@border-radius-sm       : 4px;\n\n// -------- Border color -----------\n@border-color-base      : hsv(0, 0, 85%);\n@border-color-split     : rgba(0, 0, 0, 0.05);\n\n// -------- Font family -----------\n@font-family            : \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif,\n\"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n@code-family            : \"Anonymous Pro\", \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n\n// -------- Menu -----------\n@menu-inline-toplevel-item-height: 36px;\n@menu-item-height       : 36px;\n\n// -------- Header -----------\n@layout-header-background: #ffffff;\n@layout-header-height    : 60px;\n\n// -------- Card -----------\n@card-padding-base      : 16px;\n@card-padding-wider      : 16px;\n\n\n\n@menu-dark-bg: rgb(51,51,51);\n@menu-dark-submenu-bg: rgb(51,51,51);");
// CONCATENATED MODULE: ./components/styles/GlobalStyles.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return theme; });



function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  @import url('/static/app.css');\n  @import url('/static/nprogress.css');\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  #__next > .ant-spin-nested-loading > .ant-spin-blur:after {\n    opacity: .8;\n  }\n\n  html {\n    box-sizing: border-box;\n    font-size: 14px;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n\n  body {\n    background-color: ", ";\n    -ms-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering:optimizeLegibility;\n  }\n\n  #nprogress .bar {\n    background: ", ";\n  }\n  #nprogress .peg {\n    box-shadow: 0 0 10px ", ", 0 0 5px ", ";\n  }\n  #nprogress .spinner-icon {\n    border-top-color: ", ";\n    border-left-color: ", ";\n  }\n\n  .weakColor{\n    -webkit-filter:invert(80%);\n    filter:invert(80%)\n  }\n\n  .weakColor img {\n    -webkit-filter:invert(100%);\n    filter:invert(100%)\n  }\n\n  a:hover {\n    text-decoration: none;\n  }\n\n  svg {\n    overflow: hidden;\n    vertical-align: middle;\n  }\n  .brand {\n    display: flex;\n    align-items: center;\n    margin-right: 1rem;\n    font-size: 1.25rem;\n    white-space: nowrap;\n    color: ", ";\n    justify-content: center;\n  }\n  .brand > svg {\n    fill: ", ";\n  }\n  .anticon {\n    vertical-align: middle\n  }\n\n  b, strong {\n    font-weight: 600;\n  }\n\n  h1, h2, h3, h4, h5, h6,\n  .h1, .h2, .h3, .h4, .h5, .h6 {\n    margin-bottom: 0.5rem;\n    font-family: inherit;\n    font-weight: 400;\n    line-height: 1.2;\n  }\n\n  h1, .h1 {\n    font-size: 2.5rem;\n  }\n\n  h2, .h2 {\n    font-size: 2rem;\n  }\n\n  h3, .h3 {\n    font-size: 1.75rem;\n  }\n\n  h4, .h4 {\n    font-size: 1.5rem;\n  }\n\n  h5, .h5 {\n    font-size: 1.25rem;\n  }\n\n  h6, .h6 {\n    font-size: 1rem;\n  }\n\n  .clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n  .list-unstyled {\n    padding-left: 0;\n    list-style: none;\n  }\n\n  .overflow-hidden {\n    overflow: hidden;\n  }\n\n  .scroll-y {\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n\n  .scroll-x {\n    overflow-x: auto!important;\n  }\n\n  .fill-workspace {\n    height: calc(100vh - 105px);\n  }\n\n  .full-workspace {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right:0;\n    overflow: hidden;\n  }\n\n  .bg-primary {\n    background-color: ", " !important;\n  }\n\n  .bg-normal {\n    background-color: ", " !important;\n  }\n\n  .bg-success {\n    background-color: ", " !important;\n  }\n\n  .bg-info {\n    background-color: ", " !important;\n  }\n\n  .bg-warning {\n    background-color: ", " !important;\n  }\n\n  .bg-error {\n    background-color: ", " !important;\n  }\n\n  .bg-dark {\n    background-color: ", " !important;\n  }\n\n  .bg-white {\n    background-color: #fff !important;\n  }\n\n  .bg-transparent {\n    background-color: transparent !important;\n  }\n\n  .border {\n    border: 1px solid ", " !important;\n  }\n\n  .border-top {\n    border-top: 1px solid ", " !important;\n  }\n\n  .border-right {\n    border-right: 1px solid ", " !important;\n  }\n\n  .border-bottom {\n    border-bottom: 1px solid ", " !important;\n  }\n\n  .border-left {\n    border-left: 1px solid ", " !important;\n  }\n\n  .border-0 {\n    border: 0 !important;\n  }\n\n  .border-top-0 {\n    border-top: 0 !important;\n  }\n\n  .border-right-0 {\n    border-right: 0 !important;\n  }\n\n  .border-bottom-0 {\n    border-bottom: 0 !important;\n  }\n\n  .border-left-0 {\n    border-left: 0 !important;\n  }\n\n  .border-primary {\n    border-color: ", " !important;\n  }\n\n  .border-normal {\n    border-color: ", " !important;\n  }\n\n  .border-success {\n    border-color: ", " !important;\n  }\n\n  .border-info {\n    border-color: ", " !important;\n  }\n\n  .border-warning {\n    border-color: ", " !important;\n  }\n\n  .border-error {\n    border-color: ", " !important;\n  }\n\n  .border-white {\n    border-color: #fff !important;\n  }\n\n  .rounded {\n    border-radius: ", " !important;\n  }\n\n  .rounded-top {\n    border-top-left-radius: ", " !important;\n    border-top-right-radius: ", " !important;\n  }\n\n  .rounded-right {\n    border-top-right-radius: ", " !important;\n    border-bottom-right-radius: ", " !important;\n  }\n\n  .rounded-bottom {\n    border-bottom-right-radius: ", " !important;\n    border-bottom-left-radius: ", " !important;\n  }\n\n  .rounded-left {\n    border-top-left-radius: ", " !important;\n    border-bottom-left-radius: ", " !important;\n  }\n\n  .rounded-circle {\n    border-radius: 50% !important;\n  }\n\n  .rounded-0 {\n    border-radius: 0 !important;\n  }\n\n  .shadow-sm {\n    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n  }\n\n  .shadow {\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n  }\n\n  .shadow-lg {\n    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n  }\n\n  .shadow-none, .shadow-0 {\n    box-shadow: none !important;\n  }\n\n  .m-0 {\n    margin: 0 !important;\n  }\n\n  .mt-0,\n  .my-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-0,\n  .mx-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-0,\n  .my-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-0,\n  .mx-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-1,\n  .my-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-1,\n  .mx-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-1,\n  .my-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-1,\n  .mx-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-2,\n  .my-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-2,\n  .mx-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-2,\n  .my-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-2,\n  .mx-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-3,\n  .my-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-3,\n  .mx-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-3,\n  .my-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-3,\n  .mx-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-4,\n  .my-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-4,\n  .mx-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-4,\n  .my-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-4,\n  .mx-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-5,\n  .my-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-5,\n  .mx-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-5,\n  .my-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-5,\n  .mx-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-0 {\n    padding: 0 !important;\n  }\n\n  .pt-0,\n  .py-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-0,\n  .px-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-0,\n  .py-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-0,\n  .px-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-1,\n  .py-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-1,\n  .px-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-1,\n  .py-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-1,\n  .px-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-2,\n  .py-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-2,\n  .px-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-2,\n  .py-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-2,\n  .px-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-3,\n  .py-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-3,\n  .px-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-3,\n  .py-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-3,\n  .px-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-4,\n  .py-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-4,\n  .px-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-4,\n  .py-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-4,\n  .px-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-5,\n  .py-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-5,\n  .px-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-5,\n  .py-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-5,\n  .px-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-auto {\n    margin: auto !important;\n  }\n\n  .mt-auto,\n  .my-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-auto,\n  .mx-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-auto,\n  .my-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-auto,\n  .mx-auto {\n    margin-left: auto !important;\n  }\n\n  @media (min-width: 576px) {\n    .m-sm-0 {\n      margin: 0 !important;\n    }\n    .mt-sm-0,\n    .my-sm-0 {\n      margin-top: 0 !important;\n    }\n    .mr-sm-0,\n    .mx-sm-0 {\n      margin-right: 0 !important;\n    }\n    .mb-sm-0,\n    .my-sm-0 {\n      margin-bottom: 0 !important;\n    }\n    .ml-sm-0,\n    .mx-sm-0 {\n      margin-left: 0 !important;\n    }\n    .m-sm-1 {\n      margin: 0.25rem !important;\n    }\n    .mt-sm-1,\n    .my-sm-1 {\n      margin-top: 0.25rem !important;\n    }\n    .mr-sm-1,\n    .mx-sm-1 {\n      margin-right: 0.25rem !important;\n    }\n    .mb-sm-1,\n    .my-sm-1 {\n      margin-bottom: 0.25rem !important;\n    }\n    .ml-sm-1,\n    .mx-sm-1 {\n      margin-left: 0.25rem !important;\n    }\n    .m-sm-2 {\n      margin: 0.5rem !important;\n    }\n    .mt-sm-2,\n    .my-sm-2 {\n      margin-top: 0.5rem !important;\n    }\n    .mr-sm-2,\n    .mx-sm-2 {\n      margin-right: 0.5rem !important;\n    }\n    .mb-sm-2,\n    .my-sm-2 {\n      margin-bottom: 0.5rem !important;\n    }\n    .ml-sm-2,\n    .mx-sm-2 {\n      margin-left: 0.5rem !important;\n    }\n    .m-sm-3 {\n      margin: 1rem !important;\n    }\n    .mt-sm-3,\n    .my-sm-3 {\n      margin-top: 1rem !important;\n    }\n    .mr-sm-3,\n    .mx-sm-3 {\n      margin-right: 1rem !important;\n    }\n    .mb-sm-3,\n    .my-sm-3 {\n      margin-bottom: 1rem !important;\n    }\n    .ml-sm-3,\n    .mx-sm-3 {\n      margin-left: 1rem !important;\n    }\n    .m-sm-4 {\n      margin: 1.5rem !important;\n    }\n    .mt-sm-4,\n    .my-sm-4 {\n      margin-top: 1.5rem !important;\n    }\n    .mr-sm-4,\n    .mx-sm-4 {\n      margin-right: 1.5rem !important;\n    }\n    .mb-sm-4,\n    .my-sm-4 {\n      margin-bottom: 1.5rem !important;\n    }\n    .ml-sm-4,\n    .mx-sm-4 {\n      margin-left: 1.5rem !important;\n    }\n    .m-sm-5 {\n      margin: 3rem !important;\n    }\n    .mt-sm-5,\n    .my-sm-5 {\n      margin-top: 3rem !important;\n    }\n    .mr-sm-5,\n    .mx-sm-5 {\n      margin-right: 3rem !important;\n    }\n    .mb-sm-5,\n    .my-sm-5 {\n      margin-bottom: 3rem !important;\n    }\n    .ml-sm-5,\n    .mx-sm-5 {\n      margin-left: 3rem !important;\n    }\n    .p-sm-0 {\n      padding: 0 !important;\n    }\n    .pt-sm-0,\n    .py-sm-0 {\n      padding-top: 0 !important;\n    }\n    .pr-sm-0,\n    .px-sm-0 {\n      padding-right: 0 !important;\n    }\n    .pb-sm-0,\n    .py-sm-0 {\n      padding-bottom: 0 !important;\n    }\n    .pl-sm-0,\n    .px-sm-0 {\n      padding-left: 0 !important;\n    }\n    .p-sm-1 {\n      padding: 0.25rem !important;\n    }\n    .pt-sm-1,\n    .py-sm-1 {\n      padding-top: 0.25rem !important;\n    }\n    .pr-sm-1,\n    .px-sm-1 {\n      padding-right: 0.25rem !important;\n    }\n    .pb-sm-1,\n    .py-sm-1 {\n      padding-bottom: 0.25rem !important;\n    }\n    .pl-sm-1,\n    .px-sm-1 {\n      padding-left: 0.25rem !important;\n    }\n    .p-sm-2 {\n      padding: 0.5rem !important;\n    }\n    .pt-sm-2,\n    .py-sm-2 {\n      padding-top: 0.5rem !important;\n    }\n    .pr-sm-2,\n    .px-sm-2 {\n      padding-right: 0.5rem !important;\n    }\n    .pb-sm-2,\n    .py-sm-2 {\n      padding-bottom: 0.5rem !important;\n    }\n    .pl-sm-2,\n    .px-sm-2 {\n      padding-left: 0.5rem !important;\n    }\n    .p-sm-3 {\n      padding: 1rem !important;\n    }\n    .pt-sm-3,\n    .py-sm-3 {\n      padding-top: 1rem !important;\n    }\n    .pr-sm-3,\n    .px-sm-3 {\n      padding-right: 1rem !important;\n    }\n    .pb-sm-3,\n    .py-sm-3 {\n      padding-bottom: 1rem !important;\n    }\n    .pl-sm-3,\n    .px-sm-3 {\n      padding-left: 1rem !important;\n    }\n    .p-sm-4 {\n      padding: 1.5rem !important;\n    }\n    .pt-sm-4,\n    .py-sm-4 {\n      padding-top: 1.5rem !important;\n    }\n    .pr-sm-4,\n    .px-sm-4 {\n      padding-right: 1.5rem !important;\n    }\n    .pb-sm-4,\n    .py-sm-4 {\n      padding-bottom: 1.5rem !important;\n    }\n    .pl-sm-4,\n    .px-sm-4 {\n      padding-left: 1.5rem !important;\n    }\n    .p-sm-5 {\n      padding: 3rem !important;\n    }\n    .pt-sm-5,\n    .py-sm-5 {\n      padding-top: 3rem !important;\n    }\n    .pr-sm-5,\n    .px-sm-5 {\n      padding-right: 3rem !important;\n    }\n    .pb-sm-5,\n    .py-sm-5 {\n      padding-bottom: 3rem !important;\n    }\n    .pl-sm-5,\n    .px-sm-5 {\n      padding-left: 3rem !important;\n    }\n    .m-sm-auto {\n      margin: auto !important;\n    }\n    .mt-sm-auto,\n    .my-sm-auto {\n      margin-top: auto !important;\n    }\n    .mr-sm-auto,\n    .mx-sm-auto {\n      margin-right: auto !important;\n    }\n    .mb-sm-auto,\n    .my-sm-auto {\n      margin-bottom: auto !important;\n    }\n    .ml-sm-auto,\n    .mx-sm-auto {\n      margin-left: auto !important;\n    }\n  }\n\n  @media (min-width: 768px) {\n    .m-md-0 {\n      margin: 0 !important;\n    }\n    .mt-md-0,\n    .my-md-0 {\n      margin-top: 0 !important;\n    }\n    .mr-md-0,\n    .mx-md-0 {\n      margin-right: 0 !important;\n    }\n    .mb-md-0,\n    .my-md-0 {\n      margin-bottom: 0 !important;\n    }\n    .ml-md-0,\n    .mx-md-0 {\n      margin-left: 0 !important;\n    }\n    .m-md-1 {\n      margin: 0.25rem !important;\n    }\n    .mt-md-1,\n    .my-md-1 {\n      margin-top: 0.25rem !important;\n    }\n    .mr-md-1,\n    .mx-md-1 {\n      margin-right: 0.25rem !important;\n    }\n    .mb-md-1,\n    .my-md-1 {\n      margin-bottom: 0.25rem !important;\n    }\n    .ml-md-1,\n    .mx-md-1 {\n      margin-left: 0.25rem !important;\n    }\n    .m-md-2 {\n      margin: 0.5rem !important;\n    }\n    .mt-md-2,\n    .my-md-2 {\n      margin-top: 0.5rem !important;\n    }\n    .mr-md-2,\n    .mx-md-2 {\n      margin-right: 0.5rem !important;\n    }\n    .mb-md-2,\n    .my-md-2 {\n      margin-bottom: 0.5rem !important;\n    }\n    .ml-md-2,\n    .mx-md-2 {\n      margin-left: 0.5rem !important;\n    }\n    .m-md-3 {\n      margin: 1rem !important;\n    }\n    .mt-md-3,\n    .my-md-3 {\n      margin-top: 1rem !important;\n    }\n    .mr-md-3,\n    .mx-md-3 {\n      margin-right: 1rem !important;\n    }\n    .mb-md-3,\n    .my-md-3 {\n      margin-bottom: 1rem !important;\n    }\n    .ml-md-3,\n    .mx-md-3 {\n      margin-left: 1rem !important;\n    }\n    .m-md-4 {\n      margin: 1.5rem !important;\n    }\n    .mt-md-4,\n    .my-md-4 {\n      margin-top: 1.5rem !important;\n    }\n    .mr-md-4,\n    .mx-md-4 {\n      margin-right: 1.5rem !important;\n    }\n    .mb-md-4,\n    .my-md-4 {\n      margin-bottom: 1.5rem !important;\n    }\n    .ml-md-4,\n    .mx-md-4 {\n      margin-left: 1.5rem !important;\n    }\n    .m-md-5 {\n      margin: 3rem !important;\n    }\n    .mt-md-5,\n    .my-md-5 {\n      margin-top: 3rem !important;\n    }\n    .mr-md-5,\n    .mx-md-5 {\n      margin-right: 3rem !important;\n    }\n    .mb-md-5,\n    .my-md-5 {\n      margin-bottom: 3rem !important;\n    }\n    .ml-md-5,\n    .mx-md-5 {\n      margin-left: 3rem !important;\n    }\n    .p-md-0 {\n      padding: 0 !important;\n    }\n    .pt-md-0,\n    .py-md-0 {\n      padding-top: 0 !important;\n    }\n    .pr-md-0,\n    .px-md-0 {\n      padding-right: 0 !important;\n    }\n    .pb-md-0,\n    .py-md-0 {\n      padding-bottom: 0 !important;\n    }\n    .pl-md-0,\n    .px-md-0 {\n      padding-left: 0 !important;\n    }\n    .p-md-1 {\n      padding: 0.25rem !important;\n    }\n    .pt-md-1,\n    .py-md-1 {\n      padding-top: 0.25rem !important;\n    }\n    .pr-md-1,\n    .px-md-1 {\n      padding-right: 0.25rem !important;\n    }\n    .pb-md-1,\n    .py-md-1 {\n      padding-bottom: 0.25rem !important;\n    }\n    .pl-md-1,\n    .px-md-1 {\n      padding-left: 0.25rem !important;\n    }\n    .p-md-2 {\n      padding: 0.5rem !important;\n    }\n    .pt-md-2,\n    .py-md-2 {\n      padding-top: 0.5rem !important;\n    }\n    .pr-md-2,\n    .px-md-2 {\n      padding-right: 0.5rem !important;\n    }\n    .pb-md-2,\n    .py-md-2 {\n      padding-bottom: 0.5rem !important;\n    }\n    .pl-md-2,\n    .px-md-2 {\n      padding-left: 0.5rem !important;\n    }\n    .p-md-3 {\n      padding: 1rem !important;\n    }\n    .pt-md-3,\n    .py-md-3 {\n      padding-top: 1rem !important;\n    }\n    .pr-md-3,\n    .px-md-3 {\n      padding-right: 1rem !important;\n    }\n    .pb-md-3,\n    .py-md-3 {\n      padding-bottom: 1rem !important;\n    }\n    .pl-md-3,\n    .px-md-3 {\n      padding-left: 1rem !important;\n    }\n    .p-md-4 {\n      padding: 1.5rem !important;\n    }\n    .pt-md-4,\n    .py-md-4 {\n      padding-top: 1.5rem !important;\n    }\n    .pr-md-4,\n    .px-md-4 {\n      padding-right: 1.5rem !important;\n    }\n    .pb-md-4,\n    .py-md-4 {\n      padding-bottom: 1.5rem !important;\n    }\n    .pl-md-4,\n    .px-md-4 {\n      padding-left: 1.5rem !important;\n    }\n    .p-md-5 {\n      padding: 3rem !important;\n    }\n    .pt-md-5,\n    .py-md-5 {\n      padding-top: 3rem !important;\n    }\n    .pr-md-5,\n    .px-md-5 {\n      padding-right: 3rem !important;\n    }\n    .pb-md-5,\n    .py-md-5 {\n      padding-bottom: 3rem !important;\n    }\n    .pl-md-5,\n    .px-md-5 {\n      padding-left: 3rem !important;\n    }\n    .m-md-auto {\n      margin: auto !important;\n    }\n    .mt-md-auto,\n    .my-md-auto {\n      margin-top: auto !important;\n    }\n    .mr-md-auto,\n    .mx-md-auto {\n      margin-right: auto !important;\n    }\n    .mb-md-auto,\n    .my-md-auto {\n      margin-bottom: auto !important;\n    }\n    .ml-md-auto,\n    .mx-md-auto {\n      margin-left: auto !important;\n    }\n  }\n\n  @media (min-width: 992px) {\n    .m-lg-0 {\n      margin: 0 !important;\n    }\n    .mt-lg-0,\n    .my-lg-0 {\n      margin-top: 0 !important;\n    }\n    .mr-lg-0,\n    .mx-lg-0 {\n      margin-right: 0 !important;\n    }\n    .mb-lg-0,\n    .my-lg-0 {\n      margin-bottom: 0 !important;\n    }\n    .ml-lg-0,\n    .mx-lg-0 {\n      margin-left: 0 !important;\n    }\n    .m-lg-1 {\n      margin: 0.25rem !important;\n    }\n    .mt-lg-1,\n    .my-lg-1 {\n      margin-top: 0.25rem !important;\n    }\n    .mr-lg-1,\n    .mx-lg-1 {\n      margin-right: 0.25rem !important;\n    }\n    .mb-lg-1,\n    .my-lg-1 {\n      margin-bottom: 0.25rem !important;\n    }\n    .ml-lg-1,\n    .mx-lg-1 {\n      margin-left: 0.25rem !important;\n    }\n    .m-lg-2 {\n      margin: 0.5rem !important;\n    }\n    .mt-lg-2,\n    .my-lg-2 {\n      margin-top: 0.5rem !important;\n    }\n    .mr-lg-2,\n    .mx-lg-2 {\n      margin-right: 0.5rem !important;\n    }\n    .mb-lg-2,\n    .my-lg-2 {\n      margin-bottom: 0.5rem !important;\n    }\n    .ml-lg-2,\n    .mx-lg-2 {\n      margin-left: 0.5rem !important;\n    }\n    .m-lg-3 {\n      margin: 1rem !important;\n    }\n    .mt-lg-3,\n    .my-lg-3 {\n      margin-top: 1rem !important;\n    }\n    .mr-lg-3,\n    .mx-lg-3 {\n      margin-right: 1rem !important;\n    }\n    .mb-lg-3,\n    .my-lg-3 {\n      margin-bottom: 1rem !important;\n    }\n    .ml-lg-3,\n    .mx-lg-3 {\n      margin-left: 1rem !important;\n    }\n    .m-lg-4 {\n      margin: 1.5rem !important;\n    }\n    .mt-lg-4,\n    .my-lg-4 {\n      margin-top: 1.5rem !important;\n    }\n    .mr-lg-4,\n    .mx-lg-4 {\n      margin-right: 1.5rem !important;\n    }\n    .mb-lg-4,\n    .my-lg-4 {\n      margin-bottom: 1.5rem !important;\n    }\n    .ml-lg-4,\n    .mx-lg-4 {\n      margin-left: 1.5rem !important;\n    }\n    .m-lg-5 {\n      margin: 3rem !important;\n    }\n    .mt-lg-5,\n    .my-lg-5 {\n      margin-top: 3rem !important;\n    }\n    .mr-lg-5,\n    .mx-lg-5 {\n      margin-right: 3rem !important;\n    }\n    .mb-lg-5,\n    .my-lg-5 {\n      margin-bottom: 3rem !important;\n    }\n    .ml-lg-5,\n    .mx-lg-5 {\n      margin-left: 3rem !important;\n    }\n    .p-lg-0 {\n      padding: 0 !important;\n    }\n    .pt-lg-0,\n    .py-lg-0 {\n      padding-top: 0 !important;\n    }\n    .pr-lg-0,\n    .px-lg-0 {\n      padding-right: 0 !important;\n    }\n    .pb-lg-0,\n    .py-lg-0 {\n      padding-bottom: 0 !important;\n    }\n    .pl-lg-0,\n    .px-lg-0 {\n      padding-left: 0 !important;\n    }\n    .p-lg-1 {\n      padding: 0.25rem !important;\n    }\n    .pt-lg-1,\n    .py-lg-1 {\n      padding-top: 0.25rem !important;\n    }\n    .pr-lg-1,\n    .px-lg-1 {\n      padding-right: 0.25rem !important;\n    }\n    .pb-lg-1,\n    .py-lg-1 {\n      padding-bottom: 0.25rem !important;\n    }\n    .pl-lg-1,\n    .px-lg-1 {\n      padding-left: 0.25rem !important;\n    }\n    .p-lg-2 {\n      padding: 0.5rem !important;\n    }\n    .pt-lg-2,\n    .py-lg-2 {\n      padding-top: 0.5rem !important;\n    }\n    .pr-lg-2,\n    .px-lg-2 {\n      padding-right: 0.5rem !important;\n    }\n    .pb-lg-2,\n    .py-lg-2 {\n      padding-bottom: 0.5rem !important;\n    }\n    .pl-lg-2,\n    .px-lg-2 {\n      padding-left: 0.5rem !important;\n    }\n    .p-lg-3 {\n      padding: 1rem !important;\n    }\n    .pt-lg-3,\n    .py-lg-3 {\n      padding-top: 1rem !important;\n    }\n    .pr-lg-3,\n    .px-lg-3 {\n      padding-right: 1rem !important;\n    }\n    .pb-lg-3,\n    .py-lg-3 {\n      padding-bottom: 1rem !important;\n    }\n    .pl-lg-3,\n    .px-lg-3 {\n      padding-left: 1rem !important;\n    }\n    .p-lg-4 {\n      padding: 1.5rem !important;\n    }\n    .pt-lg-4,\n    .py-lg-4 {\n      padding-top: 1.5rem !important;\n    }\n    .pr-lg-4,\n    .px-lg-4 {\n      padding-right: 1.5rem !important;\n    }\n    .pb-lg-4,\n    .py-lg-4 {\n      padding-bottom: 1.5rem !important;\n    }\n    .pl-lg-4,\n    .px-lg-4 {\n      padding-left: 1.5rem !important;\n    }\n    .p-lg-5 {\n      padding: 3rem !important;\n    }\n    .pt-lg-5,\n    .py-lg-5 {\n      padding-top: 3rem !important;\n    }\n    .pr-lg-5,\n    .px-lg-5 {\n      padding-right: 3rem !important;\n    }\n    .pb-lg-5,\n    .py-lg-5 {\n      padding-bottom: 3rem !important;\n    }\n    .pl-lg-5,\n    .px-lg-5 {\n      padding-left: 3rem !important;\n    }\n    .m-lg-auto {\n      margin: auto !important;\n    }\n    .mt-lg-auto,\n    .my-lg-auto {\n      margin-top: auto !important;\n    }\n    .mr-lg-auto,\n    .mx-lg-auto {\n      margin-right: auto !important;\n    }\n    .mb-lg-auto,\n    .my-lg-auto {\n      margin-bottom: auto !important;\n    }\n    .ml-lg-auto,\n    .mx-lg-auto {\n      margin-left: auto !important;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    .m-xl-0 {\n      margin: 0 !important;\n    }\n    .mt-xl-0,\n    .my-xl-0 {\n      margin-top: 0 !important;\n    }\n    .mr-xl-0,\n    .mx-xl-0 {\n      margin-right: 0 !important;\n    }\n    .mb-xl-0,\n    .my-xl-0 {\n      margin-bottom: 0 !important;\n    }\n    .ml-xl-0,\n    .mx-xl-0 {\n      margin-left: 0 !important;\n    }\n    .m-xl-1 {\n      margin: 0.25rem !important;\n    }\n    .mt-xl-1,\n    .my-xl-1 {\n      margin-top: 0.25rem !important;\n    }\n    .mr-xl-1,\n    .mx-xl-1 {\n      margin-right: 0.25rem !important;\n    }\n    .mb-xl-1,\n    .my-xl-1 {\n      margin-bottom: 0.25rem !important;\n    }\n    .ml-xl-1,\n    .mx-xl-1 {\n      margin-left: 0.25rem !important;\n    }\n    .m-xl-2 {\n      margin: 0.5rem !important;\n    }\n    .mt-xl-2,\n    .my-xl-2 {\n      margin-top: 0.5rem !important;\n    }\n    .mr-xl-2,\n    .mx-xl-2 {\n      margin-right: 0.5rem !important;\n    }\n    .mb-xl-2,\n    .my-xl-2 {\n      margin-bottom: 0.5rem !important;\n    }\n    .ml-xl-2,\n    .mx-xl-2 {\n      margin-left: 0.5rem !important;\n    }\n    .m-xl-3 {\n      margin: 1rem !important;\n    }\n    .mt-xl-3,\n    .my-xl-3 {\n      margin-top: 1rem !important;\n    }\n    .mr-xl-3,\n    .mx-xl-3 {\n      margin-right: 1rem !important;\n    }\n    .mb-xl-3,\n    .my-xl-3 {\n      margin-bottom: 1rem !important;\n    }\n    .ml-xl-3,\n    .mx-xl-3 {\n      margin-left: 1rem !important;\n    }\n    .m-xl-4 {\n      margin: 1.5rem !important;\n    }\n    .mt-xl-4,\n    .my-xl-4 {\n      margin-top: 1.5rem !important;\n    }\n    .mr-xl-4,\n    .mx-xl-4 {\n      margin-right: 1.5rem !important;\n    }\n    .mb-xl-4,\n    .my-xl-4 {\n      margin-bottom: 1.5rem !important;\n    }\n    .ml-xl-4,\n    .mx-xl-4 {\n      margin-left: 1.5rem !important;\n    }\n    .m-xl-5 {\n      margin: 3rem !important;\n    }\n    .mt-xl-5,\n    .my-xl-5 {\n      margin-top: 3rem !important;\n    }\n    .mr-xl-5,\n    .mx-xl-5 {\n      margin-right: 3rem !important;\n    }\n    .mb-xl-5,\n    .my-xl-5 {\n      margin-bottom: 3rem !important;\n    }\n    .ml-xl-5,\n    .mx-xl-5 {\n      margin-left: 3rem !important;\n    }\n    .p-xl-0 {\n      padding: 0 !important;\n    }\n    .pt-xl-0,\n    .py-xl-0 {\n      padding-top: 0 !important;\n    }\n    .pr-xl-0,\n    .px-xl-0 {\n      padding-right: 0 !important;\n    }\n    .pb-xl-0,\n    .py-xl-0 {\n      padding-bottom: 0 !important;\n    }\n    .pl-xl-0,\n    .px-xl-0 {\n      padding-left: 0 !important;\n    }\n    .p-xl-1 {\n      padding: 0.25rem !important;\n    }\n    .pt-xl-1,\n    .py-xl-1 {\n      padding-top: 0.25rem !important;\n    }\n    .pr-xl-1,\n    .px-xl-1 {\n      padding-right: 0.25rem !important;\n    }\n    .pb-xl-1,\n    .py-xl-1 {\n      padding-bottom: 0.25rem !important;\n    }\n    .pl-xl-1,\n    .px-xl-1 {\n      padding-left: 0.25rem !important;\n    }\n    .p-xl-2 {\n      padding: 0.5rem !important;\n    }\n    .pt-xl-2,\n    .py-xl-2 {\n      padding-top: 0.5rem !important;\n    }\n    .pr-xl-2,\n    .px-xl-2 {\n      padding-right: 0.5rem !important;\n    }\n    .pb-xl-2,\n    .py-xl-2 {\n      padding-bottom: 0.5rem !important;\n    }\n    .pl-xl-2,\n    .px-xl-2 {\n      padding-left: 0.5rem !important;\n    }\n    .p-xl-3 {\n      padding: 1rem !important;\n    }\n    .pt-xl-3,\n    .py-xl-3 {\n      padding-top: 1rem !important;\n    }\n    .pr-xl-3,\n    .px-xl-3 {\n      padding-right: 1rem !important;\n    }\n    .pb-xl-3,\n    .py-xl-3 {\n      padding-bottom: 1rem !important;\n    }\n    .pl-xl-3,\n    .px-xl-3 {\n      padding-left: 1rem !important;\n    }\n    .p-xl-4 {\n      padding: 1.5rem !important;\n    }\n    .pt-xl-4,\n    .py-xl-4 {\n      padding-top: 1.5rem !important;\n    }\n    .pr-xl-4,\n    .px-xl-4 {\n      padding-right: 1.5rem !important;\n    }\n    .pb-xl-4,\n    .py-xl-4 {\n      padding-bottom: 1.5rem !important;\n    }\n    .pl-xl-4,\n    .px-xl-4 {\n      padding-left: 1.5rem !important;\n    }\n    .p-xl-5 {\n      padding: 3rem !important;\n    }\n    .pt-xl-5,\n    .py-xl-5 {\n      padding-top: 3rem !important;\n    }\n    .pr-xl-5,\n    .px-xl-5 {\n      padding-right: 3rem !important;\n    }\n    .pb-xl-5,\n    .py-xl-5 {\n      padding-bottom: 3rem !important;\n    }\n    .pl-xl-5,\n    .px-xl-5 {\n      padding-left: 3rem !important;\n    }\n    .m-xl-auto {\n      margin: auto !important;\n    }\n    .mt-xl-auto,\n    .my-xl-auto {\n      margin-top: auto !important;\n    }\n    .mr-xl-auto,\n    .mx-xl-auto {\n      margin-right: auto !important;\n    }\n    .mb-xl-auto,\n    .my-xl-auto {\n      margin-bottom: auto !important;\n    }\n    .ml-xl-auto,\n    .mx-xl-auto {\n      margin-left: auto !important;\n    }\n  }\n\n  .text-monospace {\n    font-family: ", " ;\n  }\n\n  .text-justify {\n    text-align: justify !important;\n  }\n\n  .text-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .text-truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .text-left {\n    text-align: left !important;\n  }\n\n  .text-right {\n    text-align: right !important;\n  }\n\n  .text-center {\n    text-align: center !important;\n  }\n\n  .text-lowercase {\n    text-transform: lowercase !important;\n  }\n\n  .text-uppercase {\n    text-transform: uppercase !important;\n  }\n\n  .text-capitalize {\n    text-transform: capitalize !important;\n  }\n\n  .font-weight-light {\n    font-weight: 300 !important;\n  }\n\n  .font-weight-normal {\n    font-weight: 400 !important;\n  }\n\n  .font-weight-bold {\n    font-weight: 700 !important;\n  }\n\n  .font-italic {\n    font-style: italic !important;\n  }\n\n  .text-white {\n    color: #fff !important;\n  }\n\n  .text-primary {\n    color: ", " !important;\n  }\n\n  .text-normal {\n    color: ", " !important;\n  }\n\n  .text-success {\n    color: ", " !important;\n  }\n\n  .text-info {\n    color: ", " !important;\n  }\n\n  .text-warning {\n    color: ", " !important;\n  }\n\n  .text-error {\n    color: ", " !important;\n  }\n\n  .text-dark {\n    color: ", " !important;\n  }\n\n  .text-body {\n    color: ", " !important;\n  }\n\n  .text-muted {\n    color: ", " !important;\n  }\n\n  .text-black {\n    color: rgba(0, 0, 0, 1) !important;\n  }\n\n  .text-black-50 {\n    color: rgba(0, 0, 0, 0.5) !important;\n  }\n\n  .text-white-50 {\n    color: rgba(255, 255, 255, 0.5) !important;\n  }\n\n  .text-white-65 {\n    color: rgba(255, 255, 255, 0.5) !important;\n  }\n\n  .text-light {\n    color: white !important;\n  }\n\n  .text-hide {\n    font: 0/0 a;\n    color: transparent;\n    text-shadow: none;\n    background-color: transparent;\n    border: 0;\n  }\n\n  /* Fixes */\n  .mapboxgl-ctrl-group {\n    display: inline-block;\n    margin: 1rem;\n  }\n  .rv-discrete-color-legend {\n    display: block;\n    width: 100%!important;\n    text-align: center;\n  }\n  .rv-discrete-color-legend-item {\n    display: inline-block;\n  }\n\n  .ant-menu-vertical .ant-menu-item, .ant-menu-vertical-left .ant-menu-item, .ant-menu-vertical-right .ant-menu-item, .ant-menu-inline .ant-menu-item, .ant-menu-vertical .ant-menu-submenu-title, .ant-menu-vertical-left .ant-menu-submenu-title, .ant-menu-vertical-right .ant-menu-submenu-title, .ant-menu-inline .ant-menu-submenu-title,\n  .ant-menu-vertical .ant-menu-item:not(:last-child), .ant-menu-vertical-left .ant-menu-item:not(:last-child), .ant-menu-vertical-right .ant-menu-item:not(:last-child), .ant-menu-inline .ant-menu-item:not(:last-child) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  .ant-menu-dark .ant-menu-inline.ant-menu-sub {\n    box-shadow: none;\n  }\n  .header-notifications .ant-spin-container {\n    overflow: auto;\n    height: 220px;\n    width: 350px;\n  }\n  .header-notifications .ant-list-footer {\n    padding-left: 1rem;\n    padding-right: 1rem;\n    border-top: 1px solid rgba(0,0,0,.03)\n  }\n  /* custom card */\n  .ant-card-bordered {\n    box-shadow: 0 0 1px rgba(0,0,0,.1);\n    border: 0!important;\n    background-clip: padding-box;\n  }\n  .card-head-0 .ant-card-head {\n    border: 0;\n  }\n  .ant-card-actions {\n    border-radius: 0 0 ", " ", ";\n  }\n  .ant-card-head-title {\n    font-weight: 700;\n  }\n  .ant-menu-submenu-open.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:before {\n    transform: rotate(45deg) translateX(3px);\n  }\n  .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:before {\n    transform: rotate(-45deg) translateX(3px);\n  }\n  .ant-menu-submenu-open.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:after {\n    transform: rotate(-45deg) translateX(-3px);\n  }\n  .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:after {\n    transform: rotate(45deg) translateX(-3px);\n  }\n  .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow:before, .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow:before, .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow:before, .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:before, .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow:after, .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow:after, .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow:after, .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:after {\n    height: 1px;\n  }\n  /* Chart */\n  .rv-xy-plot__grid-lines, .rv-xy-plot__axis {\n    stroke-width: 0.2;\n  }\n  .rv-discrete-color-legend-item__color {\n    height: 6px;\n  }\n  .rv-discrete-color-legend-item__color__path {\n    stroke-width: 6px;\n  }\n  /* Chat */\n  .chat-drawer .ant-drawer-header,\n  .chat-drawer .ant-drawer-body {\n    padding: 0;\n  }\n  .message-modal .ant-modal-content {\n    border-radius: 4px 4px 0 0;\n  }\n\n  .am-weather-cloud-2 > path, [id^=cloudy-day-] > path {\n    stroke-width: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var lessVariables = external_less_vars_to_js_default()(antd_custom, {
  resolveVariables: true,
  stripPrefix: true
}),
    camelCasedVariables = Object(helpers["f" /* objectToCamelCase */])(lessVariables),
    theme = Object(objectSpread["a" /* default */])({}, camelCasedVariables);

var GlobalStyles = Object(external_styled_components_["createGlobalStyle"])(_templateObject(), theme.backgroundColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.normalColor, theme.successColor, theme.infoColor, theme.warningColor, theme.errorColor, theme.darkColor, theme.borderColorBase, theme.borderColorBase, theme.borderColorBase, theme.borderColorBase, theme.borderColorBase, theme.primaryColor, theme.normalColor, theme.successColor, theme.infoColor, theme.warningColor, theme.errorColor, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.codeFamily, theme.primaryColor, theme.normalColor, theme.successColor, theme.infoColor, theme.warningColor, theme.errorColor, theme.darkColor, theme.textColor, theme.textColorSecondary, theme.borderRadiusBase, theme.borderRadiusBase);


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

/***/ "KK4J":
/***/ (function(module, exports) {

module.exports = require("react-no-ssr");

/***/ }),

/***/ "NC1Z":
/***/ (function(module, exports) {

module.exports = require("react-feather");

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

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__("NC1Z");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react-vis"
var external_react_vis_ = __webpack_require__("sO1i");

// EXTERNAL MODULE: external "react-no-ssr"
var external_react_no_ssr_ = __webpack_require__("KK4J");
var external_react_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_react_no_ssr_);

// EXTERNAL MODULE: ./components/shared/PostCard.js
var PostCard = __webpack_require__("5vHU");

// EXTERNAL MODULE: ./components/shared/StatCard.js
var StatCard = __webpack_require__("3GIh");

// EXTERNAL MODULE: ./components/shared/WeatherCard.js
var WeatherCard = __webpack_require__("GKd8");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./components/styles/GlobalStyles.js + 1 modules
var GlobalStyles = __webpack_require__("GXHU");

// CONCATENATED MODULE: ./components/Overview.js




function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 0;\n  .rv-discrete-color-legend {\n    display: inline-block;\n    width: auto !important;\n  }\n  .rv-discrete-color-legend-item {\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var MonthPicker = external_antd_["DatePicker"].MonthPicker;

var axes = from_default()(Array(12).keys());

var generate = function generate() {
  var arr = [];
  axes.map(function (x) {
    var y = Math.floor(Math.random() * 10) + 1;
    arr.push({
      x: x,
      y: y
    });
  });
  return arr;
};

var series = [{
  title: 'Views',
  data: generate()
}, {
  title: 'Sales',
  data: generate()
}];
var Legend = external_styled_components_default.a.div(_templateObject());
var menu = external_react_default.a.createElement(external_antd_["Menu"], null, external_react_default.a.createElement(external_antd_["Menu"].Item, null, external_react_default.a.createElement(external_antd_["Row"], {
  type: "flex",
  align: "middle"
}, external_react_default.a.createElement(external_react_feather_["Archive"], {
  size: 16,
  strokeWidth: 1,
  className: "mr-3"
}), ' ', external_react_default.a.createElement("span", null, "Archive"))), external_react_default.a.createElement(external_antd_["Menu"].Item, null, external_react_default.a.createElement(external_antd_["Row"], {
  type: "flex",
  align: "middle"
}, external_react_default.a.createElement(external_react_feather_["Edit"], {
  size: 16,
  strokeWidth: 1,
  className: "mr-3"
}), " ", external_react_default.a.createElement("span", null, "Edit"))), external_react_default.a.createElement(external_antd_["Menu"].Item, null, external_react_default.a.createElement(external_antd_["Row"], {
  type: "flex",
  align: "middle"
}, external_react_default.a.createElement(external_react_feather_["Trash"], {
  size: 16,
  strokeWidth: 1,
  className: "mr-3"
}), " ", external_react_default.a.createElement("span", null, "Delete"))), external_react_default.a.createElement(external_antd_["Menu"].Divider, null), external_react_default.a.createElement(external_antd_["Menu"].Item, null, external_react_default.a.createElement(external_antd_["Row"], {
  type: "flex",
  align: "middle"
}, external_react_default.a.createElement(external_react_feather_["Save"], {
  size: 16,
  strokeWidth: 1,
  className: "mr-3"
}), " ", external_react_default.a.createElement("span", null, "Save as"))), external_react_default.a.createElement(external_antd_["Menu"].Item, null, external_react_default.a.createElement(external_antd_["Row"], {
  type: "flex",
  align: "middle"
}, external_react_default.a.createElement(external_react_feather_["Printer"], {
  size: 16,
  strokeWidth: 1,
  className: "mr-3"
}), ' ', external_react_default.a.createElement("span", null, "Print"))));
var Overview_data = [{
  title: 'Click through ratio',
  subtitle: external_react_default.a.createElement("span", null, external_react_default.a.createElement("span", {
    className: "mr-1"
  }, "15%"), external_react_default.a.createElement(external_react_feather_["TrendingUp"], {
    size: 20,
    strokeWidth: 1,
    className: "text-success"
  }))
}, {
  title: 'Cost per thousand',
  subtitle: external_react_default.a.createElement("span", null, external_react_default.a.createElement("span", {
    className: "mr-1"
  }, "$320.89"), external_react_default.a.createElement(external_react_feather_["TrendingDown"], {
    size: 20,
    strokeWidth: 1,
    className: "text-error"
  }))
}, {
  title: 'Bounce rate',
  subtitle: external_react_default.a.createElement("span", null, external_react_default.a.createElement("span", {
    className: "mr-1"
  }, "34%"), external_react_default.a.createElement(external_react_feather_["TrendingUp"], {
    size: 20,
    strokeWidth: 1,
    className: "text-success"
  }))
}];

var Overview_TimelinePeriod = function TimelinePeriod(_ref) {
  var content = _ref.content;
  return external_react_default.a.createElement("small", {
    className: "text-muted",
    css: "\n      display: block;\n    "
  }, content);
};

var Overview_Overview = function Overview() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Row"], {
    gutter: 16
  }, external_react_default.a.createElement(external_antd_["Col"], {
    xs: 24,
    sm: 12,
    md: 6
  }, external_react_default.a.createElement(StatCard["a" /* default */], {
    type: "fill",
    title: "Campaigns",
    value: 103,
    icon: external_react_default.a.createElement(external_react_feather_["Bookmark"], {
      size: 20,
      strokeWidth: 1
    }),
    color: GlobalStyles["b" /* theme */].primaryColor,
    clickHandler: function clickHandler() {
      return external_antd_["Message"].info('Campaign stat button clicked');
    }
  })), external_react_default.a.createElement(external_antd_["Col"], {
    xs: 24,
    sm: 12,
    md: 6
  }, external_react_default.a.createElement(StatCard["a" /* default */], {
    type: "fill",
    title: "Customers",
    value: 230,
    icon: external_react_default.a.createElement(external_react_feather_["PhoneCall"], {
      size: 20,
      strokeWidth: 1
    }),
    color: GlobalStyles["b" /* theme */].darkColor,
    clickHandler: function clickHandler() {
      return external_antd_["Message"].info('Customers stat button clicked');
    }
  })), external_react_default.a.createElement(external_antd_["Col"], {
    xs: 24,
    sm: 12,
    md: 6
  }, external_react_default.a.createElement(StatCard["a" /* default */], {
    type: "fill",
    title: "Queries",
    value: 323,
    icon: external_react_default.a.createElement(external_react_feather_["Bell"], {
      size: 20,
      strokeWidth: 1
    }),
    color: GlobalStyles["b" /* theme */].warningColor,
    clickHandler: function clickHandler() {
      return external_antd_["Message"].info('Queries stat button clicked');
    }
  })), external_react_default.a.createElement(external_antd_["Col"], {
    xs: 24,
    sm: 12,
    md: 6
  }, external_react_default.a.createElement(StatCard["a" /* default */], {
    type: "fill",
    title: "Opens",
    value: 870,
    icon: external_react_default.a.createElement(external_react_feather_["MessageCircle"], {
      size: 20,
      strokeWidth: 1
    }),
    color: GlobalStyles["b" /* theme */].errorColor,
    clickHandler: function clickHandler() {
      return external_antd_["Message"].info('Opens stat button clicked');
    }
  }))), external_react_default.a.createElement(external_antd_["Card"], {
    title: "Sales analytics",
    extra: external_react_default.a.createElement(external_antd_["Dropdown"], {
      overlay: menu
    }, external_react_default.a.createElement(external_react_feather_["MoreHorizontal"], {
      size: 20,
      strokeWidth: 1,
      fill: GlobalStyles["b" /* theme */].textColor
    })),
    bodyStyle: {
      padding: '1rem'
    },
    className: "mb-4"
  }, external_react_default.a.createElement(external_react_no_ssr_default.a, null, external_react_default.a.createElement(Legend, null, external_react_default.a.createElement(external_react_vis_["DiscreteColorLegend"], {
    width: 180,
    height: 20,
    items: series
  }), external_react_default.a.createElement(MonthPicker, {
    placeholder: "Select a month"
  })), external_react_default.a.createElement(external_react_vis_["FlexibleWidthXYPlot"], {
    xType: "ordinal",
    height: 340,
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
  }), external_react_default.a.createElement(external_react_vis_["VerticalBarSeries"], {
    color: "#007bff",
    data: series[0].data
  }), external_react_default.a.createElement(external_react_vis_["VerticalBarSeries"], {
    color: "rgb(211, 232, 255)",
    data: series[1].data
  })))), external_react_default.a.createElement(external_antd_["Row"], {
    gutter: 16
  }, external_react_default.a.createElement(external_antd_["Col"], {
    sm: 24,
    md: 8,
    className: "mb-4"
  }, external_react_default.a.createElement(external_antd_["Card"], {
    bodyStyle: {
      padding: 0
    }
  }, external_react_default.a.createElement(external_antd_["Row"], {
    type: "flex",
    align: "middle",
    justify: "center",
    gutter: 16,
    className: "py-4"
  }, external_react_default.a.createElement(external_antd_["Progress"], {
    type: "dashboard",
    percent: 90,
    width: 181,
    format: function format(percent) {
      return external_react_default.a.createElement("span", {
        className: "text-center"
      }, external_react_default.a.createElement("div", {
        css: "\n                        display: block;\n                        color: #007bff;\n                        margin: auto;\n                      "
      }, external_react_default.a.createElement(external_react_feather_["GitCommit"], {
        size: 20,
        strokeWidth: 2
      })), external_react_default.a.createElement("div", {
        className: "h5 mb-0",
        css: "\n                        display: block;\n                      "
      }, percent), external_react_default.a.createElement("div", {
        className: "h6"
      }, external_react_default.a.createElement("small", null, "30% commission rate")));
    }
  })), external_react_default.a.createElement(external_antd_["List"], {
    itemLayout: "horizontal",
    dataSource: Overview_data,
    renderItem: function renderItem(item) {
      return external_react_default.a.createElement(external_antd_["List"].Item, null, external_react_default.a.createElement(external_antd_["List"].Item.Meta, {
        title: external_react_default.a.createElement("a", {
          href: "javascript:;",
          className: "px-4",
          css: "\n                          display: flex;\n                        "
        }, item.title, external_react_default.a.createElement("span", {
          className: "mr-auto"
        }), external_react_default.a.createElement("small", null, item.subtitle))
      }));
    }
  }))), external_react_default.a.createElement(external_antd_["Col"], {
    sm: 24,
    md: 8,
    className: "mb-4"
  }, external_react_default.a.createElement(external_antd_["Card"], {
    title: "Tasks",
    extra: external_react_default.a.createElement(external_antd_["Dropdown"], {
      overlay: menu
    }, external_react_default.a.createElement(external_react_feather_["MoreHorizontal"], {
      size: 20,
      strokeWidth: 1,
      fill: GlobalStyles["b" /* theme */].textColor
    }))
  }, external_react_default.a.createElement(external_antd_["Timeline"], {
    pending: "Tasks pending...",
    className: "mt-2"
  }, external_react_default.a.createElement(external_antd_["Timeline"].Item, null, external_react_default.a.createElement("div", {
    className: "text-truncate"
  }, external_react_default.a.createElement(Overview_TimelinePeriod, {
    content: "09.45"
  }), external_react_default.a.createElement("span", null, "Create a services site"))), external_react_default.a.createElement(external_antd_["Timeline"].Item, null, external_react_default.a.createElement("div", {
    className: "text-truncate"
  }, external_react_default.a.createElement(Overview_TimelinePeriod, {
    content: "11.20"
  }), external_react_default.a.createElement("span", null, "Solve initial network problems"))), external_react_default.a.createElement(external_antd_["Timeline"].Item, {
    dot: external_react_default.a.createElement(external_react_feather_["Server"], {
      size: 16,
      strokeWidth: 1,
      color: GlobalStyles["b" /* theme */].errorColor
    })
  }, external_react_default.a.createElement("div", {
    className: "text-truncate"
  }, external_react_default.a.createElement(Overview_TimelinePeriod, {
    content: "13.00"
  }), external_react_default.a.createElement("span", null, "Technical testing"))), external_react_default.a.createElement(external_antd_["Timeline"].Item, null, external_react_default.a.createElement("div", {
    className: "text-truncate"
  }, external_react_default.a.createElement(Overview_TimelinePeriod, {
    content: "15.00"
  }), external_react_default.a.createElement("span", null, "Network problems being solved")))))), external_react_default.a.createElement(external_antd_["Col"], {
    sm: 24,
    md: 8,
    className: "mb-4"
  }, external_react_default.a.createElement(external_antd_["Card"], {
    title: "Activity",
    extra: external_react_default.a.createElement(external_antd_["Dropdown"], {
      overlay: menu
    }, external_react_default.a.createElement(external_react_feather_["MoreHorizontal"], {
      size: 20,
      strokeWidth: 1,
      fill: GlobalStyles["b" /* theme */].textColor
    }))
  }, external_react_default.a.createElement(external_antd_["Timeline"], {
    pending: external_react_default.a.createElement("div", {
      className: "ml-4"
    }, "Activities pending..."),
    className: "mt-2"
  }, external_react_default.a.createElement(external_antd_["Timeline"].Item, {
    dot: external_react_default.a.createElement(external_antd_["Avatar"], {
      size: 24,
      src: "/static/images/face1.jpg"
    })
  }, external_react_default.a.createElement("div", {
    className: "ml-4 text-truncate"
  }, external_react_default.a.createElement(Overview_TimelinePeriod, {
    content: "9.45"
  }), external_react_default.a.createElement("span", null, external_react_default.a.createElement("a", null, "John Doe"), " launched a new application"))), external_react_default.a.createElement(external_antd_["Timeline"].Item, {
    dot: external_react_default.a.createElement(external_antd_["Avatar"], {
      size: 24,
      src: "/static/images/face2.jpg"
    })
  }, external_react_default.a.createElement("div", {
    className: "ml-4 text-truncate"
  }, external_react_default.a.createElement(Overview_TimelinePeriod, {
    content: "11.20"
  }), external_react_default.a.createElement("span", null, external_react_default.a.createElement("a", null, "Paula Bean"), " Cleared calendar events"))), external_react_default.a.createElement(external_antd_["Timeline"].Item, {
    dot: external_react_default.a.createElement(external_antd_["Avatar"], {
      size: 24,
      src: "/static/images/face3.jpg"
    })
  }, external_react_default.a.createElement("div", {
    className: "ml-4 text-truncate"
  }, external_react_default.a.createElement(Overview_TimelinePeriod, {
    content: "13.00"
  }), external_react_default.a.createElement("span", null, external_react_default.a.createElement("a", null, "Peter Hadji"), " Joined your mailing list"))), external_react_default.a.createElement(external_antd_["Timeline"].Item, {
    dot: external_react_default.a.createElement(external_antd_["Avatar"], {
      size: 24,
      src: "/static/images/face4.jpg"
    })
  }, external_react_default.a.createElement("div", {
    className: "ml-4 text-truncate"
  }, external_react_default.a.createElement(Overview_TimelinePeriod, {
    content: "15.00"
  }), external_react_default.a.createElement("span", null, external_react_default.a.createElement("a", null, "Trevor Belmont"), " Created a new task list"))))))), external_react_default.a.createElement(external_antd_["Row"], {
    gutter: 16
  }, external_react_default.a.createElement(external_antd_["Col"], {
    md: 24,
    lg: 12
  }, external_react_default.a.createElement(WeatherCard["a" /* default */], {
    city: "harare",
    country: "zw",
    days: 7
  })), external_react_default.a.createElement(external_antd_["Col"], {
    md: 24,
    lg: 12
  }, external_react_default.a.createElement(PostCard["a" /* default */], {
    title: "Shrimp and Chorizo Paella",
    subtitle: "Yesterday",
    image: "/static/images/unsplash/1.jpg",
    images: ['/static/images/unsplash/1.jpg', '/static/images/unsplash/15.jpg'],
    imageHeight: 309,
    text: "Phileas Fogg and Aouda went on board, where they found Fix already installed. Below deck was a square cabin, of which the walls bulged out in the form of cots, above a circular divan; in the centre was a table provided with a swinging lamp."
  }))));
};

/* harmony default export */ var components_Overview = (Overview_Overview);
// CONCATENATED MODULE: ./pages/index.js




var pages_OverviewPage = function OverviewPage() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/react-vis.css"
  })), external_react_default.a.createElement(components_Overview, null));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_OverviewPage);

/***/ }),

/***/ "Skji":
/***/ (function(module, exports) {

module.exports = require("date-fns/format");

/***/ }),

/***/ "T22j":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Wa2I":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("T22j");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bPsq":
/***/ (function(module, exports) {

module.exports = require("less-vars-to-js");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

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

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

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

/***/ "sO1i":
/***/ (function(module, exports) {

module.exports = require("react-vis");

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

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

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