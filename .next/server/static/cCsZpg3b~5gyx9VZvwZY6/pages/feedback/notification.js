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
/******/ 	return __webpack_require__(__webpack_require__.s = "e123");
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

/***/ "Cg2A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y6vh");

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

/***/ "e123":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gLwC");


/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gLwC":
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

// CONCATENATED MODULE: ./demos/antd/notification/basic.js



var basic_openNotification = function openNotification() {
  external_antd_["notification"].open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
  });
};

var basic_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Button"], {
    onClick: basic_openNotification
  }, "Open the notification box");
};

/* harmony default export */ var basic = (basic_Component);
// CONCATENATED MODULE: ./demos/antd/notification/custom-icon.js



var custom_icon_openNotification = function openNotification() {
  external_antd_["notification"].open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: external_react_default.a.createElement(external_antd_["Icon"], {
      type: "smile",
      style: {
        color: '#108ee9'
      }
    })
  });
};

var custom_icon_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Button"], {
    onClick: custom_icon_openNotification
  }, "Open the notification box");
};

/* harmony default export */ var custom_icon = (custom_icon_Component);
// CONCATENATED MODULE: ./demos/antd/notification/custom-style.js



var custom_style_openNotification = function openNotification() {
  external_antd_["notification"].open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    style: {
      width: 600,
      marginLeft: 335 - 600
    }
  });
};

var custom_style_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Button"], {
    onClick: custom_style_openNotification
  }, "Open the notification box");
};

/* harmony default export */ var custom_style = (custom_style_Component);
// CONCATENATED MODULE: ./demos/antd/notification/duration.js



var duration_openNotification = function openNotification() {
  var args = {
    message: 'Notification Title',
    description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
    duration: 0
  };
  external_antd_["notification"].open(args);
};

var duration_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Button"], {
    onClick: duration_openNotification
  }, "Open the notification box");
};

/* harmony default export */ var duration = (duration_Component);
// CONCATENATED MODULE: ./demos/antd/notification/placement.js


var Option = external_antd_["Select"].Option;
var options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];

var placement_openNotification = function openNotification() {
  external_antd_["notification"].open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
  });
};

var placement_Component = function Component() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Select"], {
    defaultValue: "topRight",
    style: {
      width: 120,
      marginRight: 10
    },
    onChange: function onChange(val) {
      external_antd_["notification"].config({
        placement: val
      });
    }
  }, options.map(function (val) {
    return external_react_default.a.createElement(Option, {
      key: val,
      value: val
    }, val);
  })), external_react_default.a.createElement(external_antd_["Button"], {
    onClick: placement_openNotification
  }, "Open the notification box"));
};

/* harmony default export */ var placement = (placement_Component);
// CONCATENATED MODULE: ./demos/antd/notification/update.js


var update_key = 'updatable';

var update_openNotification = function openNotification() {
  external_antd_["notification"].open({
    key: update_key,
    message: 'Notification Title',
    description: 'description.'
  });
  setTimeout(function () {
    external_antd_["notification"].open({
      key: update_key,
      message: 'New Title',
      description: 'New description.'
    });
  }, 1000);
};

var update_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Button"], {
    onClick: update_openNotification
  }, "Open the notification box");
};

/* harmony default export */ var update = (update_Component);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/date/now.js
var now = __webpack_require__("Cg2A");
var now_default = /*#__PURE__*/__webpack_require__.n(now);

// CONCATENATED MODULE: ./demos/antd/notification/with-btn.js




var with_btn_close = function close() {
  console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
};

var with_btn_openNotification = function openNotification() {
  var key = "open".concat(now_default()());
  var btn = external_react_default.a.createElement(external_antd_["Button"], {
    size: "small",
    onClick: function onClick() {
      return external_antd_["notification"].close(key);
    }
  }, "Confirm");
  external_antd_["notification"].open({
    message: 'Notification Title',
    description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
    btn: btn,
    key: key,
    onClose: with_btn_close
  });
};

var with_btn_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Button"], {
    onClick: with_btn_openNotification
  }, "Open the notification box");
};

/* harmony default export */ var with_btn = (with_btn_Component);
// CONCATENATED MODULE: ./demos/antd/notification/with-icon.js



var with_icon_openNotificationWithIcon = function openNotificationWithIcon(type) {
  external_antd_["notification"][type]({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
  });
};

var with_icon_Component = function Component() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Button"], {
    onClick: function onClick() {
      return with_icon_openNotificationWithIcon('success');
    }
  }, "Success"), external_react_default.a.createElement(external_antd_["Button"], {
    onClick: function onClick() {
      return with_icon_openNotificationWithIcon('info');
    }
  }, "Info"), external_react_default.a.createElement(external_antd_["Button"], {
    onClick: function onClick() {
      return with_icon_openNotificationWithIcon('warning');
    }
  }, "Warning"), external_react_default.a.createElement(external_antd_["Button"], {
    onClick: function onClick() {
      return with_icon_openNotificationWithIcon('error');
    }
  }, "Error"));
};

/* harmony default export */ var with_icon = (with_icon_Component);
// CONCATENATED MODULE: ./demos/antd/notification/demo.js
















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
      }, external_react_default.a.createElement("small", null, "Notification with icon")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(with_icon, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Customized icon")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(custom_icon, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Customized style")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(custom_style, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Notification duration")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(duration, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Custom close button")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(with_btn, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Placement")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(placement, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Update message content")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(update, null)));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var demo = (demo_Demo);
// CONCATENATED MODULE: ./pages/feedback/notification.js



var notification_NotificationPage = function NotificationPage() {
  return external_react_default.a.createElement(demo, null);
};

/* harmony default export */ var notification = __webpack_exports__["default"] = (notification_NotificationPage);

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

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ })

/******/ });