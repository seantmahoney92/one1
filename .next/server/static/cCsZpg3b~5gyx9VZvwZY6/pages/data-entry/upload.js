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
/******/ 	return __webpack_require__(__webpack_require__.s = "3b20");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+WR9":
/***/ (function(module, exports) {

module.exports = require("reqwest");

/***/ }),

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

/***/ "3b20":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("u46i");


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

/***/ "u46i":
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

// CONCATENATED MODULE: ./demos/antd/upload/avatar.js










function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
}

function avatar_beforeUpload(file) {
  var isJPG = file.type === 'image/jpeg';

  if (!isJPG) {
    external_antd_["message"].error('You can only upload JPG file!');
  }

  var isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    external_antd_["message"].error('Image must smaller than 2MB!');
  }

  return isJPG && isLt2M;
}

var avatar_Avatar =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Avatar, _React$Component);

  function Avatar() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Avatar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Avatar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      loading: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleChange", function (info) {
      if (info.file.status === 'uploading') {
        _this.setState({
          loading: true
        });

        return;
      }

      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, function (imageUrl) {
          return _this.setState({
            imageUrl: imageUrl,
            loading: false
          });
        });
      }
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Avatar, [{
    key: "render",
    value: function render() {
      var uploadButton = external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Icon"], {
        type: this.state.loading ? 'loading' : 'plus'
      }), external_react_default.a.createElement("div", {
        className: "ant-upload-text"
      }, "Upload"));
      var imageUrl = this.state.imageUrl;
      return external_react_default.a.createElement(external_antd_["Upload"], {
        name: "avatar",
        listType: "picture-card",
        className: "avatar-uploader",
        showUploadList: false,
        action: "//jsonplaceholder.typicode.com/posts/",
        beforeUpload: avatar_beforeUpload,
        onChange: this.handleChange
      }, imageUrl ? external_react_default.a.createElement("img", {
        src: imageUrl,
        alt: "avatar"
      }) : uploadButton);
    }
  }]);

  return Avatar;
}(external_react_default.a.Component);

/* harmony default export */ var avatar = (avatar_Avatar);
// CONCATENATED MODULE: ./demos/antd/upload/basic.js


var basic_props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text'
  },
  onChange: function onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === 'done') {
      external_antd_["message"].success("".concat(info.file.name, " file uploaded successfully"));
    } else if (info.file.status === 'error') {
      external_antd_["message"].error("".concat(info.file.name, " file upload failed."));
    }
  }
};

var basic_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Upload"], basic_props, external_react_default.a.createElement(external_antd_["Button"], null, external_react_default.a.createElement(external_antd_["Icon"], {
    type: "upload"
  }), " Click to Upload"));
};

/* harmony default export */ var basic = (basic_Component);
// CONCATENATED MODULE: ./demos/antd/upload/picture-card.js










var picture_card_PicturesWall =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(PicturesWall, _React$Component);

  function PicturesWall() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, PicturesWall);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(PicturesWall)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }]
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleCancel", function () {
      return _this.setState({
        previewVisible: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handlePreview", function (file) {
      _this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleChange", function (_ref) {
      var fileList = _ref.fileList;
      return _this.setState({
        fileList: fileList
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(PicturesWall, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          previewVisible = _this$state.previewVisible,
          previewImage = _this$state.previewImage,
          fileList = _this$state.fileList;
      var uploadButton = external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "plus"
      }), external_react_default.a.createElement("div", {
        className: "ant-upload-text"
      }, "Upload"));
      return external_react_default.a.createElement("div", {
        className: "clearfix"
      }, external_react_default.a.createElement(external_antd_["Upload"], {
        action: "//jsonplaceholder.typicode.com/posts/",
        listType: "picture-card",
        fileList: fileList,
        onPreview: this.handlePreview,
        onChange: this.handleChange
      }, fileList.length >= 3 ? null : uploadButton), external_react_default.a.createElement(external_antd_["Modal"], {
        visible: previewVisible,
        footer: null,
        onCancel: this.handleCancel
      }, external_react_default.a.createElement("img", {
        alt: "example",
        style: {
          width: '100%'
        },
        src: previewImage
      })));
    }
  }]);

  return PicturesWall;
}(external_react_default.a.Component);

/* harmony default export */ var picture_card = (picture_card_PicturesWall);
// CONCATENATED MODULE: ./demos/antd/upload/defaultFileList.js


var defaultFileList_props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange: function onChange(_ref) {
    var file = _ref.file,
        fileList = _ref.fileList;

    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [{
    uid: '1',
    name: 'xxx.png',
    status: 'done',
    response: 'Server Error 500',
    // custom error message to show
    url: 'http://www.baidu.com/xxx.png'
  }, {
    uid: '2',
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png'
  }, {
    uid: '3',
    name: 'zzz.png',
    status: 'error',
    response: 'Server Error 500',
    // custom error message to show
    url: 'http://www.baidu.com/zzz.png'
  }]
};

var defaultFileList_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Upload"], defaultFileList_props, external_react_default.a.createElement(external_antd_["Button"], null, external_react_default.a.createElement(external_antd_["Icon"], {
    type: "upload"
  }), " Upload"));
};

/* harmony default export */ var defaultFileList = (defaultFileList_Component);
// CONCATENATED MODULE: ./demos/antd/upload/directory.js



var directory_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Upload"], {
    action: "//jsonplaceholder.typicode.com/posts/",
    directory: true
  }, external_react_default.a.createElement(external_antd_["Button"], null, external_react_default.a.createElement(external_antd_["Icon"], {
    type: "upload"
  }), " Upload Directory"));
};

/* harmony default export */ var directory = (directory_Component);
// CONCATENATED MODULE: ./demos/antd/upload/drag.js


var Dragger = external_antd_["Upload"].Dragger;
var drag_props = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange: function onChange(info) {
    var status = info.file.status;

    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (status === 'done') {
      external_antd_["message"].success("".concat(info.file.name, " file uploaded successfully."));
    } else if (status === 'error') {
      external_antd_["message"].error("".concat(info.file.name, " file upload failed."));
    }
  }
};

var drag_Component = function Component() {
  return external_react_default.a.createElement(Dragger, drag_props, external_react_default.a.createElement("p", {
    className: "ant-upload-drag-icon"
  }, external_react_default.a.createElement(external_antd_["Icon"], {
    type: "inbox"
  })), external_react_default.a.createElement("p", {
    className: "ant-upload-text"
  }, "Click or drag file to this area to upload"), external_react_default.a.createElement("p", {
    className: "ant-upload-hint"
  }, "Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files"));
};

/* harmony default export */ var drag = (drag_Component);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// CONCATENATED MODULE: ./demos/antd/upload/fileList.js











var fileList_MyUpload =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(MyUpload, _React$Component);

  function MyUpload() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, MyUpload);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(MyUpload)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png'
      }]
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleChange", function (info) {
      var fileList = info.fileList; // 1. Limit the number of uploaded files
      // Only to show two recent uploaded files, and old ones will be replaced by the new

      fileList = fileList.slice(-2); // 2. Read from response and show file link

      fileList = fileList.map(function (file) {
        if (file.response) {
          // Component will show file.url as link
          file.url = file.response.url;
        }

        return file;
      }); // 3. Filter successfully uploaded files according to response from server

      fileList = fileList.filter(function (file) {
        if (file.response) {
          return file.response.status === 'success';
        }

        return true;
      });

      _this.setState({
        fileList: fileList
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(MyUpload, [{
    key: "render",
    value: function render() {
      var props = {
        action: '//jsonplaceholder.typicode.com/posts/',
        onChange: this.handleChange,
        multiple: true
      };
      return external_react_default.a.createElement(external_antd_["Upload"], Object(esm_extends["a" /* default */])({}, props, {
        fileList: this.state.fileList
      }), external_react_default.a.createElement(external_antd_["Button"], null, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "upload"
      }), " Upload"));
    }
  }]);

  return MyUpload;
}(external_react_default.a.Component);

/* harmony default export */ var upload_fileList = (fileList_MyUpload);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("dfwq");

// EXTERNAL MODULE: external "reqwest"
var external_reqwest_ = __webpack_require__("+WR9");
var external_reqwest_default = /*#__PURE__*/__webpack_require__.n(external_reqwest_);

// CONCATENATED MODULE: ./demos/antd/upload/upload-manually.js












var upload_manually_Demo =
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
      fileList: [],
      uploading: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleUpload", function () {
      var fileList = _this.state.fileList;
      var formData = new FormData();
      fileList.forEach(function (file) {
        formData.append('files[]', file);
      });

      _this.setState({
        uploading: true
      }); // You can use any AJAX library you like


      external_reqwest_default()({
        url: '//jsonplaceholder.typicode.com/posts/',
        method: 'post',
        processData: false,
        data: formData,
        success: function success() {
          _this.setState({
            fileList: [],
            uploading: false
          });

          external_antd_["message"].success('upload successfully.');
        },
        error: function error() {
          _this.setState({
            uploading: false
          });

          external_antd_["message"].error('upload failed.');
        }
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Demo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          uploading = _this$state.uploading,
          fileList = _this$state.fileList;
      var props = {
        onRemove: function onRemove(file) {
          _this2.setState(function (state) {
            var index = state.fileList.indexOf(file);
            var newFileList = state.fileList.slice();
            newFileList.splice(index, 1);
            return {
              fileList: newFileList
            };
          });
        },
        beforeUpload: function beforeUpload(file) {
          _this2.setState(function (state) {
            return {
              fileList: [].concat(Object(toConsumableArray["a" /* default */])(state.fileList), [file])
            };
          });

          return false;
        },
        fileList: fileList
      };
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Upload"], props, external_react_default.a.createElement(external_antd_["Button"], null, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "upload"
      }), " Select File")), external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        onClick: this.handleUpload,
        disabled: fileList.length === 0,
        loading: uploading,
        style: {
          marginTop: 16
        }
      }, uploading ? 'Uploading' : 'Start Upload'));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var upload_manually = (upload_manually_Demo);
// CONCATENATED MODULE: ./demos/antd/upload/picture-style.js


var picture_style_fileList = [{
  uid: '-1',
  name: 'xxx.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
}, {
  uid: '-2',
  name: 'yyy.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
}];
var picture_style_props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [].concat(picture_style_fileList)
};
var props2 = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [].concat(picture_style_fileList),
  className: 'upload-list-inline'
};

var picture_style_Component = function Component() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Upload"], picture_style_props, external_react_default.a.createElement(external_antd_["Button"], null, external_react_default.a.createElement(external_antd_["Icon"], {
    type: "upload"
  }), " Upload")), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement(external_antd_["Upload"], props2, external_react_default.a.createElement(external_antd_["Button"], null, external_react_default.a.createElement(external_antd_["Icon"], {
    type: "upload"
  }), " Upload")));
};

/* harmony default export */ var picture_style = (picture_style_Component);
// CONCATENATED MODULE: ./demos/antd/upload/demo.js

















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
      }, external_react_default.a.createElement("small", null, "Avatar")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(avatar, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Default file list")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(defaultFileList, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Directory")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(directory, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Drag")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(drag, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "File list")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(upload_fileList, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Picture card")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(picture_card, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Picture style")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(picture_style, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Upload manually")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(upload_manually, null)));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var demo = (demo_Demo);
// CONCATENATED MODULE: ./pages/data-entry/upload.js



var upload_DemoPage = function DemoPage() {
  return external_react_default.a.createElement(demo, null);
};

/* harmony default export */ var upload = __webpack_exports__["default"] = (upload_DemoPage);

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