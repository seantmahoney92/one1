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
/******/ 	return __webpack_require__(__webpack_require__.s = "005a");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+xaq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useAppState; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("doui");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);






var Context = Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])();
var Provider = Context.Provider;
var mql;
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeComplete', function () {
  return document.querySelector('.workspace > .ant-layout').scrollTop = 0;
});

var saveToLocal = function saveToLocal(state) {
  delete state.mobile;
  delete state.optionDrawer;
  delete state.mobileDrawer;
  localStorage.setItem('settings', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(state));
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'fullscreen':
      {
        var element = document.querySelector('#__next');
        var isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;

        element.requestFullScreen = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || function () {
          return false;
        };

        document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || function () {
          return false;
        };

        isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          fullscreen: !isFullscreen
        });
      }

    case 'boxed':
      {
        var newState = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          boxed: !state.boxed
        });

        saveToLocal(newState);
        return newState;
      }

    case 'sidebarTheme':
      {
        var _newState = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          darkSidebar: !state.darkSidebar
        });

        saveToLocal(_newState);
        return _newState;
      }

    case 'sidebarPopup':
      {
        var _newState2 = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          sidebarPopup: !state.sidebarPopup
        });

        saveToLocal(_newState2);
        return _newState2;
      }

    case 'sidebarIcons':
      {
        if (state.collapsed) return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state);

        var _newState3 = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          sidebarIcons: !state.sidebarIcons
        });

        saveToLocal(_newState3);
        return _newState3;
      }

    case 'collapse':
      {
        var collapse = state.collapsed;
        var sidebarIcons = state.sidebarIcons;
        if (!collapse) sidebarIcons = true;

        var _newState4 = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          collapsed: !state.collapsed,
          sidebarIcons: sidebarIcons
        });

        saveToLocal(_newState4);
        return _newState4;
      }

    case 'weak':
      {
        var weak = state.weakColor;
        var darkSidebar = state.darkSidebar;
        if (!weak && darkSidebar) darkSidebar = false;

        var _newState5 = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          weakColor: !state.weakColor,
          darkSidebar: darkSidebar
        });

        saveToLocal(_newState5);
        return _newState5;
      }

    case 'mobile':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
        mobile: !mql.matches
      });

    case 'options':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
        optionDrawer: !state.optionDrawer
      });

    case 'mobileDrawer':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
        mobileDrawer: !state.mobileDrawer
      });

    case 'setup':
      {
        var settings = JSON.parse(localStorage.getItem('settings'));
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          mobile: !mql.matches
        }, settings);
      }

    default:
      return state;
  }
};

var AppProvider = function AppProvider(props) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(reducer, {
    name: 'One',
    mobile: false,
    boxed: false,
    darkSidebar: false,
    sidebarPopup: false,
    sidebarIcons: false,
    collapsed: false,
    weakColor: false,
    optionDrawer: false,
    mobileDrawer: false,
    fullscreen: false
  }),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    mql = window.matchMedia("(min-width: 992px)");
    mql.addListener(mediaQueryChanged);
    dispatch({
      type: 'setup'
    });
    return function () {
      return mql.removeListener(mediaQueryChanged);
    };
  }, []);

  var mediaQueryChanged = function mediaQueryChanged() {
    dispatch({
      type: 'mobile'
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Provider, {
    value: [state, dispatch]
  }, props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (AppProvider);
var useAppState = function useAppState() {
  return Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(Context);
};

/***/ }),

/***/ "005a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3v3x");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "3v3x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__("NC1Z");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/styles/Chat.js


function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  flex: 1;\n  overflow-y: auto;\n  position: relative;\n  padding: 5rem 2rem;\n  background-color: #f9f9f9;\n\n  .weakColor & {\n    -webkit-filter: invert(100%);\n    filter: invert(100%);\n  }\n  p {\n    margin-bottom: 0;\n  }\n  .conversation {\n    box-sizing: border-box;\n    width: 100%;\n    margin-bottom: 1rem;\n    display: flex;\n  }\n  .conversation-sent {\n    justify-content: flex-end;\n  }\n  .body {\n    position: relative;\n    padding: 0.625rem 1rem;\n    background-color: white;\n    border-radius: 0.8rem;\n    min-width: 100px;\n  }\n\n  .body-sent {\n    position: relative;\n    background-color: #e2f8ff;\n    float: right;\n    order: 1;\n  }\n  .date {\n    display: block;\n    font-size: 11px;\n    padding-top: 2px;\n    font-weight: 600;\n    color: ", ";\n    text-align: right;\n  }\n  .date-Sent {\n    text-align: right;\n  }\n  input {\n    flex: 1 1 0%;\n    box-sizing: border-box;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Chat_Chat = external_styled_components_default.a.div(_templateObject(), function (props) {
  return props.theme.textColorSecondary;
});
/* harmony default export */ var styles_Chat = (Chat_Chat);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/date/now.js
var now = __webpack_require__("Cg2A");
var now_default = /*#__PURE__*/__webpack_require__.n(now);

// CONCATENATED MODULE: ./demos/mock/chats.js


var date = now_default()();

/* harmony default export */ var chats = ([{
  message: 'Hey.',
  type: 'received',
  date: new Date(date - 1000 * 60 * 60 * 10)
}, {
  message: 'How are the wife and kids Taylor?',
  type: 'received',
  date: new Date(date - 1000 * 60 * 60 * 6)
}, {
  message: 'Pretty good Samuel.',
  type: 'sent',
  date: new Date(date - 1000 * 60 * 60 * 3)
}, {
  message: 'Cras mattis consectetur purus sit amet fermentum.',
  type: 'received',
  date: new Date(date - 1000 * 60 * 60 * 2)
}, {
  message: 'Goodnight.',
  type: 'sent',
  date: new Date(date - 1000 * 60 * 60 * 1)
}, {
  message: 'Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
  type: 'received',
  date: new Date(date - 1000 * 60 * 30)
}, {
  message: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
  type: 'sent',
  date: date
}, {
  message: 'Received it thanks 😀',
  type: 'received',
  date: new Date(date - 1000 * 60 * 20)
}, {
  message: "You're welcome 👍🏿",
  type: 'sent',
  date: new Date(date - 1000 * 60 * 10)
}, {
  message: 'Typing...',
  type: 'received',
  date: date
}]);
// EXTERNAL MODULE: ./demos/mock/contacts.js
var mock_contacts = __webpack_require__("v+u8");

// EXTERNAL MODULE: external "date-fns/format"
var format_ = __webpack_require__("Skji");
var format_default = /*#__PURE__*/__webpack_require__.n(format_);

// EXTERNAL MODULE: ./components/shared/AppProvider.js
var AppProvider = __webpack_require__("+xaq");

// CONCATENATED MODULE: ./components/Chat.js




function Chat_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  position: fixed;\n  bottom: 0;\n  z-index: 1;\n  width: 40px;\n  right: 2rem;\n  padding: 0 2rem;\n  margin-bottom: 2rem;\n"]);

  Chat_templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var Sider = external_antd_["Layout"].Sider,
    Header = external_antd_["Layout"].Header;
var TextArea = external_antd_["Input"].TextArea,
    Search = external_antd_["Input"].Search;
var SubMenu = external_antd_["Menu"].SubMenu;
var Fab = external_styled_components_default.a.div(Chat_templateObject());

var components_Chat_Chat = function Chat() {
  var _useAppState = Object(AppProvider["b" /* useAppState */])(),
      _useAppState2 = Object(slicedToArray["a" /* default */])(_useAppState, 2),
      state = _useAppState2[0],
      dispatch = _useAppState2[1];

  var _useState = Object(external_react_["useState"])(0),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      selectedIndex = _useState2[0],
      setSelectedIndex = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      profile = _useState4[0],
      setProfile = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(false),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      contacts = _useState6[0],
      setContacts = _useState6[1];

  var messageHeader = external_react_default.a.createElement(external_antd_["Menu"], {
    mode: "horizontal",
    className: "border-0"
  }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "read"
  }, external_react_default.a.createElement("a", {
    href: "javascript:;"
  }, external_react_default.a.createElement(external_react_feather_["CheckCircle"], {
    size: 20,
    strokeWidth: 1
  }))), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "favorite"
  }, external_react_default.a.createElement("a", {
    href: "javascript:;"
  }, external_react_default.a.createElement(external_react_feather_["Heart"], {
    size: 20,
    strokeWidth: 1
  }))), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "star"
  }, external_react_default.a.createElement("a", {
    href: "javascript:;"
  }, external_react_default.a.createElement(external_react_feather_["Star"], {
    size: 20,
    strokeWidth: 1
  }))), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "refresh"
  }, external_react_default.a.createElement("a", {
    href: "javascript:;"
  }, external_react_default.a.createElement(external_react_feather_["RefreshCcw"], {
    size: 20,
    strokeWidth: 1
  }))));
  var messageFooter = external_react_default.a.createElement("div", {
    className: "py-3 px-3"
  }, external_react_default.a.createElement(Search, {
    placeholder: "Search contact"
  }));
  var messagesSidebar = external_react_default.a.createElement(external_antd_["List"], {
    className: "scroll-y flex-1 bg-transparent",
    itemLayout: "horizontal",
    dataSource: mock_contacts["a" /* default */],
    renderItem: function renderItem(item, index) {
      return external_react_default.a.createElement(external_antd_["List"].Item, {
        onClick: function onClick() {
          return setSelectedIndex(index);
        },
        style: {
          backgroundColor: selectedIndex === index ? '#e6f7ff' : ''
        },
        className: "".concat(selectedIndex === index ? '' : 'border-0', " border-0 px-4 py-3")
      }, external_react_default.a.createElement(external_antd_["List"].Item.Meta, {
        avatar: item.avatar,
        title: external_react_default.a.createElement("small", {
          css: "\n                  display: flex;\n                  width: 100%;\n                "
        }, external_react_default.a.createElement("span", {
          className: "".concat(selectedIndex === index ? 'ant-menu-item-selected' : '', " ")
        }, item.name)),
        description: external_react_default.a.createElement("span", null, item.status)
      }));
    }
  });
  return external_react_default.a.createElement(external_antd_["Layout"], {
    className: "fill-workspace rounded shadow-sm overflow-hidden"
  }, external_react_default.a.createElement(Header, {
    css: "\n          display: flex;\n          align-items: center;\n          padding: 0.3rem 2rem;\n          z-index: 1;\n          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.02), 0 1px 0 rgba(0, 0, 0, 0.02);\n          height: auto;\n          line-height: auto;\n        "
  }, state.mobile && external_react_default.a.createElement(external_antd_["Button"], {
    shape: "circle",
    size: "large",
    onClick: function onClick() {
      return setContacts(true);
    },
    className: "mr-3"
  }, external_react_default.a.createElement(external_react_feather_["MessageCircle"], {
    size: 20,
    strokeWidth: 1
  })), external_react_default.a.createElement(external_antd_["Row"], {
    type: "flex",
    align: "middle"
  }, external_react_default.a.createElement(external_antd_["Avatar"], {
    shape: "circle",
    size: 40,
    src: "/static/images/avatar.jpg"
  }), !state.mobile && external_react_default.a.createElement("span", {
    className: "ml-3",
    css: "\n                line-height: 1;\n              "
  }, external_react_default.a.createElement("span", {
    css: "\n                  display: block;\n                "
  }, "John Doe"), external_react_default.a.createElement("small", {
    className: "text-muted"
  }, external_react_default.a.createElement("span", null, "Online")))), external_react_default.a.createElement("span", {
    className: "mr-auto"
  }), external_react_default.a.createElement(external_antd_["Menu"], {
    mode: "horizontal",
    className: "border-0"
  }, external_react_default.a.createElement(external_antd_["Menu"].Item, null, external_react_default.a.createElement(external_react_feather_["Search"], {
    size: 20,
    strokeWidth: 1
  })), external_react_default.a.createElement(external_antd_["Menu"].Item, null, external_react_default.a.createElement(external_react_feather_["Settings"], {
    size: 20,
    strokeWidth: 1
  })))), external_react_default.a.createElement(external_antd_["Layout"], null, !state.mobile && external_react_default.a.createElement(Sider, {
    width: 260
  }, external_react_default.a.createElement("div", {
    css: "\n                display: flex;\n                flex: 1;\n                flex-direction: column;\n                height: 100%;\n                border-right: 1px solid rgba(0, 0, 0, 0.05);\n              "
  }, messageHeader, messagesSidebar, messageFooter)), external_react_default.a.createElement(external_antd_["Drawer"], {
    title: messageHeader,
    closable: false,
    width: 240,
    placement: "left",
    onClose: function onClose() {
      return setContacts(false);
    },
    visible: contacts,
    className: "chat-drawer"
  }, external_react_default.a.createElement("div", {
    css: "\n              display: flex;\n              flex: 1;\n              flex-direction: column;\n              height: 100%;\n              overflow: hidden;\n            "
  }, messagesSidebar, messageFooter)), external_react_default.a.createElement(external_antd_["Layout"], null, external_react_default.a.createElement("div", {
    css: "\n              display: flex;\n              flex: 1;\n              flex-direction: column;\n              height: 100%;\n              overflow: hidden;\n            "
  }, external_react_default.a.createElement(styles_Chat, null, external_react_default.a.createElement(external_react_default.a.Fragment, null, chats.map(function (chat, index) {
    return external_react_default.a.createElement("div", {
      key: index,
      className: "conversation\n                        ".concat(chat.type === 'sent' ? 'conversation-sent' : 'conversation-received', "\n                      ")
    }, external_react_default.a.createElement("div", {
      className: "\n                          body shadow-sm\n                          ".concat(chat.type === 'sent' ? 'body-sent' : 'body-received text-body', "\n                        ")
    }, external_react_default.a.createElement("p", {
      color: "inherit"
    }, chat.message), external_react_default.a.createElement("p", {
      variant: "caption",
      className: "\n                            date\n                            ".concat(chat.type === 'sent' ? 'date-sent' : 'date-received', "\n                          ")
    }, format_default()(chat.date, 'hh:mm'))));
  }))), external_react_default.a.createElement("div", {
    className: "px-3 py-2",
    css: "\n                background: #f9f9f9;\n              "
  }, external_react_default.a.createElement("div", {
    css: "\n                  display: flex;\n                  align-items: center;\n                "
  }, external_react_default.a.createElement(external_antd_["Menu"], {
    mode: "horizontal",
    className: "border-bottom-0 bg-transparent"
  }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "read"
  }, external_react_default.a.createElement("a", {
    href: "javascript:;"
  }, external_react_default.a.createElement(external_react_feather_["Image"], {
    size: 20,
    strokeWidth: 1
  }))), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "favorite"
  }, external_react_default.a.createElement("a", {
    href: "javascript:;"
  }, external_react_default.a.createElement(external_react_feather_["Anchor"], {
    size: 20,
    strokeWidth: 1
  }))), external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "star"
  }, external_react_default.a.createElement("a", {
    href: "javascript:;"
  }, external_react_default.a.createElement(external_react_feather_["Mic"], {
    size: 20,
    strokeWidth: 1
  })))), external_react_default.a.createElement(TextArea, {
    placeholder: "Type a message",
    autosize: true
  })))))));
};

/* harmony default export */ var components_Chat = (components_Chat_Chat);
// CONCATENATED MODULE: ./pages/apps/chat.js



var chat_ChatPage = function ChatPage() {
  return external_react_default.a.createElement(components_Chat, null);
};

/* harmony default export */ var apps_chat = __webpack_exports__["default"] = (chat_ChatPage);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

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

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "NC1Z":
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "Skji":
/***/ (function(module, exports) {

module.exports = require("date-fns/format");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

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

/***/ "v+u8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = ([{
  name: 'Bobby Sullivan',
  status: 'Mollis Nullam',
  avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 48,
    style: {
      color: '#f56a00',
      backgroundColor: '#fde3cf'
    }
  }, "B")
}, {
  name: 'Bryan Morgan',
  status: 'Risus Justo',
  avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 48,
    src: "/static/images/face4.jpg"
  })
}, {
  name: 'Phillip Caroll',
  status: 'Mollis Nibh',
  avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 48,
    style: {
      color: 'rgb(34, 245, 0)',
      backgroundColor: 'rgb(207, 253, 219)'
    }
  }, "P")
}, {
  name: 'Brandon Boyd',
  status: 'Dolor Mattis',
  avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 48,
    src: "/static/images/face1.jpg"
  })
}, {
  name: 'Laura Mason',
  status: 'Commodo Amet',
  avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 48,
    src: "/static/images/face3.jpg"
  })
}, {
  name: 'Barbara Chapman',
  status: 'Tellus Sollicitudin',
  avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 48,
    src: "/static/images/face2.jpg"
  })
}, {
  name: 'Doris Baker',
  status: 'Nibh Adipiscing',
  avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 48,
    src: "/static/images/face1.jpg"
  })
}, {
  name: 'Doris Marshall',
  status: 'Tellus Sollicitudin',
  avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 48,
    style: {
      color: 'rgb(143, 0, 245)',
      backgroundColor: 'rgb(214, 207, 253)'
    }
  }, "D")
}, {
  name: 'Andrew Weber',
  status: 'Nibh Adipiscing',
  avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 48,
    src: "/static/images/face4.jpg"
  })
}, {
  name: 'John Doe',
  status: 'Nibh Adipiscing',
  avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 48,
    src: "/static/images/face5.jpg"
  })
}]);

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

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

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