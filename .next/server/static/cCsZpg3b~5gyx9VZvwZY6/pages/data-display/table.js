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
/******/ 	return __webpack_require__(__webpack_require__.s = "1601");
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

/***/ "1601":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YIsO");


/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

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

/***/ "Qfv/":
/***/ (function(module, exports) {

module.exports = require("react-resizable");

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

/***/ "YIsO":
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

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "reqwest"
var external_reqwest_ = __webpack_require__("+WR9");
var external_reqwest_default = /*#__PURE__*/__webpack_require__.n(external_reqwest_);

// CONCATENATED MODULE: ./demos/antd/table/ajax.js











var ajax_columns = [{
  title: 'Name',
  dataIndex: 'name',
  sorter: true,
  render: function render(name) {
    return "".concat(name.first, " ").concat(name.last);
  },
  width: '20%'
}, {
  title: 'Gender',
  dataIndex: 'gender',
  filters: [{
    text: 'Male',
    value: 'male'
  }, {
    text: 'Female',
    value: 'female'
  }],
  width: '20%'
}, {
  title: 'Email',
  dataIndex: 'email'
}];

var ajax_App =
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
      data: [],
      pagination: {},
      loading: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleTableChange", function (pagination, filters, sorter) {
      var pager = Object(objectSpread["a" /* default */])({}, _this.state.pagination);

      pager.current = pagination.current;

      _this.setState({
        pagination: pager
      });

      _this.fetch(Object(objectSpread["a" /* default */])({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order
      }, filters));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "fetch", function () {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.log('params:', params);

      _this.setState({
        loading: true
      });

      external_reqwest_default()({
        url: 'https://randomuser.me/api',
        method: 'get',
        data: Object(objectSpread["a" /* default */])({
          results: 10
        }, params),
        type: 'json'
      }).then(function (data) {
        var pagination = Object(objectSpread["a" /* default */])({}, _this.state.pagination); // Read total count from server
        // pagination.total = data.totalCount;


        pagination.total = 200;

        _this.setState({
          loading: false,
          data: data.results,
          pagination: pagination
        });
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetch();
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_antd_["Table"], {
        columns: ajax_columns,
        rowKey: function rowKey(record) {
          return record.login.uuid;
        },
        dataSource: this.state.data,
        pagination: this.state.pagination,
        loading: this.state.loading,
        onChange: this.handleTableChange
      });
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var ajax = (ajax_App);
// CONCATENATED MODULE: ./demos/antd/table/basic.js


var basic_columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: function render(text) {
    return external_react_default.a.createElement("a", {
      href: "javascript:;"
    }, text);
  }
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age'
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address'
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: function render(tags) {
    return external_react_default.a.createElement("span", null, tags.map(function (tag) {
      return external_react_default.a.createElement(external_antd_["Tag"], {
        color: "blue",
        key: tag
      }, tag);
    }));
  }
}, {
  title: 'Action',
  key: 'action',
  render: function render(text, record) {
    return external_react_default.a.createElement("span", null, external_react_default.a.createElement("a", {
      href: "javascript:;"
    }, "Invite ", record.name), external_react_default.a.createElement(external_antd_["Divider"], {
      type: "vertical"
    }), external_react_default.a.createElement("a", {
      href: "javascript:;"
    }, "Delete"));
  }
}];
var basic_data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer']
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser']
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher']
}];

var basic_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Table"], {
    columns: basic_columns,
    dataSource: basic_data
  });
};

/* harmony default export */ var basic = (basic_Component);
// CONCATENATED MODULE: ./demos/antd/table/bordered.js


var bordered_columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: function render(text) {
    return external_react_default.a.createElement("a", {
      href: "javascript:;"
    }, text);
  }
}, {
  title: 'Cash Assets',
  className: 'column-money',
  dataIndex: 'money'
}, {
  title: 'Address',
  dataIndex: 'address'
}];
var bordered_data = [{
  key: '1',
  name: 'John Brown',
  money: '￥300,000.00',
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  name: 'Jim Green',
  money: '￥1,256,000.00',
  address: 'London No. 1 Lake Park'
}, {
  key: '3',
  name: 'Joe Black',
  money: '￥120,000.00',
  address: 'Sidney No. 1 Lake Park'
}];

var bordered_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Table"], {
    columns: bordered_columns,
    dataSource: bordered_data,
    bordered: true,
    title: function title() {
      return 'Header';
    },
    footer: function footer() {
      return 'Footer';
    }
  });
};

/* harmony default export */ var bordered = (bordered_Component);
// CONCATENATED MODULE: ./demos/antd/table/colspan-rowspan.js

 // In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0

var renderContent = function renderContent(value, row, index) {
  var obj = {
    children: value,
    props: {}
  };

  if (index === 4) {
    obj.props.colSpan = 0;
  }

  return obj;
};

var colspan_rowspan_columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: function render(text, row, index) {
    if (index < 4) {
      return external_react_default.a.createElement("a", {
        href: "javascript:;"
      }, text);
    }

    return {
      children: external_react_default.a.createElement("a", {
        href: "javascript:;"
      }, text),
      props: {
        colSpan: 5
      }
    };
  }
}, {
  title: 'Age',
  dataIndex: 'age',
  render: renderContent
}, {
  title: 'Home phone',
  colSpan: 2,
  dataIndex: 'tel',
  render: function render(value, row, index) {
    var obj = {
      children: value,
      props: {}
    };

    if (index === 2) {
      obj.props.rowSpan = 2;
    } // These two are merged into above cell


    if (index === 3) {
      obj.props.rowSpan = 0;
    }

    if (index === 4) {
      obj.props.colSpan = 0;
    }

    return obj;
  }
}, {
  title: 'Phone',
  colSpan: 0,
  dataIndex: 'phone',
  render: renderContent
}, {
  title: 'Address',
  dataIndex: 'address',
  render: renderContent
}];
var colspan_rowspan_data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  tel: '0571-22098909',
  phone: 18889898989,
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  name: 'Jim Green',
  tel: '0571-22098333',
  phone: 18889898888,
  age: 42,
  address: 'London No. 1 Lake Park'
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'Sidney No. 1 Lake Park'
}, {
  key: '4',
  name: 'Jim Red',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'London No. 2 Lake Park'
}, {
  key: '5',
  name: 'Jake White',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'Dublin No. 2 Lake Park'
}];

var colspan_rowspan_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Table"], {
    columns: colspan_rowspan_columns,
    dataSource: colspan_rowspan_data,
    bordered: true
  });
};

/* harmony default export */ var colspan_rowspan = (colspan_rowspan_Component);
// CONCATENATED MODULE: ./demos/antd/table/custom-filter-panel.js









var custom_filter_panel_data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  name: 'Joe Black',
  age: 42,
  address: 'London No. 1 Lake Park'
}, {
  key: '3',
  name: 'Jim Green',
  age: 32,
  address: 'Sidney No. 1 Lake Park'
}, {
  key: '4',
  name: 'Jim Red',
  age: 32,
  address: 'London No. 2 Lake Park'
}];

var custom_filter_panel_App =
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
      searchText: ''
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSearch", function (selectedKeys, confirm) {
      return function () {
        confirm();

        _this.setState({
          searchText: selectedKeys[0]
        });
      };
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleReset", function (clearFilters) {
      return function () {
        clearFilters();

        _this.setState({
          searchText: ''
        });
      };
    });

    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filterDropdown: function filterDropdown(_ref) {
          var setSelectedKeys = _ref.setSelectedKeys,
              selectedKeys = _ref.selectedKeys,
              confirm = _ref.confirm,
              clearFilters = _ref.clearFilters;
          return external_react_default.a.createElement("div", {
            className: "custom-filter-dropdown"
          }, external_react_default.a.createElement(external_antd_["Input"], {
            ref: function ref(ele) {
              return _this2.searchInput = ele;
            },
            placeholder: "Search name",
            value: selectedKeys[0],
            onChange: function onChange(e) {
              return setSelectedKeys(e.target.value ? [e.target.value] : []);
            },
            onPressEnter: _this2.handleSearch(selectedKeys, confirm)
          }), external_react_default.a.createElement(external_antd_["Button"], {
            type: "primary",
            onClick: _this2.handleSearch(selectedKeys, confirm)
          }, "Search"), external_react_default.a.createElement(external_antd_["Button"], {
            onClick: _this2.handleReset(clearFilters)
          }, "Reset"));
        },
        filterIcon: function filterIcon(filtered) {
          return external_react_default.a.createElement(external_antd_["Icon"], {
            type: "smile-o",
            style: {
              color: filtered ? '#108ee9' : '#aaa'
            }
          });
        },
        onFilter: function onFilter(value, record) {
          return record.name.toLowerCase().includes(value.toLowerCase());
        },
        onFilterDropdownVisibleChange: function onFilterDropdownVisibleChange(visible) {
          if (visible) {
            setTimeout(function () {
              _this2.searchInput.focus();
            });
          }
        },
        render: function render(text) {
          var searchText = _this2.state.searchText;
          return searchText ? external_react_default.a.createElement("span", null, text.split(new RegExp("(?<=".concat(searchText, ")|(?=").concat(searchText, ")"), 'i')).map(function (fragment, i) {
            return fragment.toLowerCase() === searchText.toLowerCase() ? external_react_default.a.createElement("span", {
              key: i,
              className: "highlight"
            }, fragment) : fragment;
          } // eslint-disable-line
          )) : text;
        }
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [{
          text: 'London',
          value: 'London'
        }, {
          text: 'New York',
          value: 'New York'
        }],
        onFilter: function onFilter(value, record) {
          return record.address.indexOf(value) === 0;
        }
      }];
      return external_react_default.a.createElement(external_antd_["Table"], {
        columns: columns,
        dataSource: custom_filter_panel_data
      });
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var custom_filter_panel = (custom_filter_panel_App);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// CONCATENATED MODULE: ./demos/antd/table/dynamic-settings.js










var FormItem = external_antd_["Form"].Item;
var dynamic_settings_columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: 150,
  render: function render(text) {
    return external_react_default.a.createElement("a", {
      href: "javascript:;"
    }, text);
  }
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  width: 70
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address'
}, {
  title: 'Action',
  key: 'action',
  width: 360,
  render: function render(text, record) {
    return external_react_default.a.createElement("span", null, external_react_default.a.createElement("a", {
      href: "javascript:;"
    }, "Action \u4E00 ", record.name), external_react_default.a.createElement(external_antd_["Divider"], {
      type: "vertical"
    }), external_react_default.a.createElement("a", {
      href: "javascript:;"
    }, "Delete"), external_react_default.a.createElement(external_antd_["Divider"], {
      type: "vertical"
    }), external_react_default.a.createElement("a", {
      href: "javascript:;",
      className: "ant-dropdown-link"
    }, "More actions ", external_react_default.a.createElement(external_antd_["Icon"], {
      type: "down"
    })));
  }
}];
var dynamic_settings_data = [];

for (var dynamic_settings_i = 1; dynamic_settings_i <= 10; dynamic_settings_i++) {
  dynamic_settings_data.push({
    key: dynamic_settings_i,
    name: 'John Brown',
    age: "".concat(dynamic_settings_i, "2"),
    address: "New York No. ".concat(dynamic_settings_i, " Lake Park"),
    description: "My name is John Brown, I am ".concat(dynamic_settings_i, "2 years old, living in New York No. ").concat(dynamic_settings_i, " Lake Park.")
  });
}

var dynamic_settings_expandedRowRender = function expandedRowRender(record) {
  return external_react_default.a.createElement("p", null, record.description);
};

var dynamic_settings_title = function title() {
  return 'Here is title';
};

var showHeader = true;

var footer = function footer() {
  return 'Here is footer';
};

var dynamic_settings_scroll = {
  y: 240
};
var dynamic_settings_pagination = {
  position: 'bottom'
};

var dynamic_settings_Demo =
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
      bordered: false,
      loading: false,
      pagination: dynamic_settings_pagination,
      size: 'default',
      expandedRowRender: dynamic_settings_expandedRowRender,
      title: undefined,
      showHeader: showHeader,
      footer: footer,
      rowSelection: {},
      scroll: undefined,
      hasData: true
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleToggle", function (prop) {
      return function (enable) {
        _this.setState(Object(defineProperty["a" /* default */])({}, prop, enable));
      };
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSizeChange", function (e) {
      _this.setState({
        size: e.target.value
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleExpandChange", function (enable) {
      _this.setState({
        expandedRowRender: enable ? dynamic_settings_expandedRowRender : undefined
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleTitleChange", function (enable) {
      _this.setState({
        title: enable ? dynamic_settings_title : undefined
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleHeaderChange", function (enable) {
      _this.setState({
        showHeader: enable ? showHeader : false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleFooterChange", function (enable) {
      _this.setState({
        footer: enable ? footer : undefined
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleRowSelectionChange", function (enable) {
      _this.setState({
        rowSelection: enable ? {} : undefined
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleScollChange", function (enable) {
      _this.setState({
        scroll: enable ? dynamic_settings_scroll : undefined
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleDataChange", function (hasData) {
      _this.setState({
        hasData: hasData
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handlePaginationChange", function (e) {
      var value = e.target.value;

      _this.setState({
        pagination: value === 'none' ? false : {
          position: value
        }
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Demo, [{
    key: "render",
    value: function render() {
      var state = this.state;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
        className: "components-table-demo-control-bar"
      }, external_react_default.a.createElement(external_antd_["Form"], {
        layout: "inline"
      }, external_react_default.a.createElement(FormItem, {
        label: "Bordered"
      }, external_react_default.a.createElement(external_antd_["Switch"], {
        checked: state.bordered,
        onChange: this.handleToggle('bordered')
      })), external_react_default.a.createElement(FormItem, {
        label: "loading"
      }, external_react_default.a.createElement(external_antd_["Switch"], {
        checked: state.loading,
        onChange: this.handleToggle('loading')
      })), external_react_default.a.createElement(FormItem, {
        label: "Title"
      }, external_react_default.a.createElement(external_antd_["Switch"], {
        checked: !!state.title,
        onChange: this.handleTitleChange
      })), external_react_default.a.createElement(FormItem, {
        label: "Column Header"
      }, external_react_default.a.createElement(external_antd_["Switch"], {
        checked: !!state.showHeader,
        onChange: this.handleHeaderChange
      })), external_react_default.a.createElement(FormItem, {
        label: "Footer"
      }, external_react_default.a.createElement(external_antd_["Switch"], {
        checked: !!state.footer,
        onChange: this.handleFooterChange
      })), external_react_default.a.createElement(FormItem, {
        label: "Expandable"
      }, external_react_default.a.createElement(external_antd_["Switch"], {
        checked: !!state.expandedRowRender,
        onChange: this.handleExpandChange
      })), external_react_default.a.createElement(FormItem, {
        label: "Checkbox"
      }, external_react_default.a.createElement(external_antd_["Switch"], {
        checked: !!state.rowSelection,
        onChange: this.handleRowSelectionChange
      })), external_react_default.a.createElement(FormItem, {
        label: "Fixed Header"
      }, external_react_default.a.createElement(external_antd_["Switch"], {
        checked: !!state.scroll,
        onChange: this.handleScollChange
      })), external_react_default.a.createElement(FormItem, {
        label: "Has Data"
      }, external_react_default.a.createElement(external_antd_["Switch"], {
        checked: !!state.hasData,
        onChange: this.handleDataChange
      })), external_react_default.a.createElement(FormItem, {
        label: "Size"
      }, external_react_default.a.createElement(external_antd_["Radio"].Group, {
        size: "default",
        value: state.size,
        onChange: this.handleSizeChange
      }, external_react_default.a.createElement(external_antd_["Radio"].Button, {
        value: "default"
      }, "Default"), external_react_default.a.createElement(external_antd_["Radio"].Button, {
        value: "middle"
      }, "Middle"), external_react_default.a.createElement(external_antd_["Radio"].Button, {
        value: "small"
      }, "Small"))), external_react_default.a.createElement(FormItem, {
        label: "Pagination"
      }, external_react_default.a.createElement(external_antd_["Radio"].Group, {
        value: state.pagination ? state.pagination.position : 'none',
        onChange: this.handlePaginationChange
      }, external_react_default.a.createElement(external_antd_["Radio"].Button, {
        value: "top"
      }, "Top"), external_react_default.a.createElement(external_antd_["Radio"].Button, {
        value: "bottom"
      }, "Bottom"), external_react_default.a.createElement(external_antd_["Radio"].Button, {
        value: "both"
      }, "Both"), external_react_default.a.createElement(external_antd_["Radio"].Button, {
        value: "none"
      }, "None"))))), external_react_default.a.createElement(external_antd_["Table"], Object(esm_extends["a" /* default */])({}, this.state, {
        columns: dynamic_settings_columns,
        dataSource: state.hasData ? dynamic_settings_data : null
      })));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var dynamic_settings = (dynamic_settings_Demo);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("dfwq");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// CONCATENATED MODULE: ./demos/antd/table/edit-cell.js













var edit_cell_FormItem = external_antd_["Form"].Item;
var EditableContext = external_react_default.a.createContext();

var edit_cell_EditableRow = function EditableRow(_ref) {
  var form = _ref.form,
      index = _ref.index,
      props = _objectWithoutProperties(_ref, ["form", "index"]);

  return external_react_default.a.createElement(EditableContext.Provider, {
    value: form
  }, external_react_default.a.createElement("tr", props));
};

var EditableFormRow = external_antd_["Form"].create()(edit_cell_EditableRow);

var edit_cell_EditableCell =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(EditableCell, _React$Component);

  function EditableCell() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, EditableCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(EditableCell)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      editing: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "toggleEdit", function () {
      var editing = !_this.state.editing;

      _this.setState({
        editing: editing
      }, function () {
        if (editing) {
          _this.input.focus();
        }
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleClickOutside", function (e) {
      var editing = _this.state.editing;

      if (editing && _this.cell !== e.target && !_this.cell.contains(e.target)) {
        _this.save();
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "save", function () {
      var _this$props = _this.props,
          record = _this$props.record,
          handleSave = _this$props.handleSave;

      _this.form.validateFields(function (error, values) {
        if (error) {
          return;
        }

        _this.toggleEdit();

        handleSave(Object(objectSpread["a" /* default */])({}, record, values));
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(EditableCell, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.editable) {
        document.addEventListener('click', this.handleClickOutside, true);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.editable) {
        document.removeEventListener('click', this.handleClickOutside, true);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var editing = this.state.editing;

      var _this$props2 = this.props,
          editable = _this$props2.editable,
          dataIndex = _this$props2.dataIndex,
          title = _this$props2.title,
          record = _this$props2.record,
          index = _this$props2.index,
          handleSave = _this$props2.handleSave,
          restProps = _objectWithoutProperties(_this$props2, ["editable", "dataIndex", "title", "record", "index", "handleSave"]);

      return external_react_default.a.createElement("td", Object(esm_extends["a" /* default */])({
        ref: function ref(node) {
          return _this2.cell = node;
        }
      }, restProps), editable ? external_react_default.a.createElement(EditableContext.Consumer, null, function (form) {
        _this2.form = form;
        return editing ? external_react_default.a.createElement(edit_cell_FormItem, {
          style: {
            margin: 0
          }
        }, form.getFieldDecorator(dataIndex, {
          rules: [{
            required: true,
            message: "".concat(title, " is required.")
          }],
          initialValue: record[dataIndex]
        })(external_react_default.a.createElement(external_antd_["Input"], {
          ref: function ref(node) {
            return _this2.input = node;
          },
          onPressEnter: _this2.save
        }))) : external_react_default.a.createElement("div", {
          className: "editable-cell-value-wrap",
          style: {
            paddingRight: 24
          },
          onClick: _this2.toggleEdit
        }, restProps.children);
      }) : restProps.children);
    }
  }]);

  return EditableCell;
}(external_react_default.a.Component);

var edit_cell_EditableTable =
/*#__PURE__*/
function (_React$Component2) {
  Object(inherits["a" /* default */])(EditableTable, _React$Component2);

  function EditableTable(props) {
    var _this3;

    Object(classCallCheck["a" /* default */])(this, EditableTable);

    _this3 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(EditableTable).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this3), "handleDelete", function (key) {
      var dataSource = Object(toConsumableArray["a" /* default */])(_this3.state.dataSource);

      _this3.setState({
        dataSource: dataSource.filter(function (item) {
          return item.key !== key;
        })
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this3), "handleAdd", function () {
      var _this3$state = _this3.state,
          count = _this3$state.count,
          dataSource = _this3$state.dataSource;
      var newData = {
        key: count,
        name: "Edward King ".concat(count),
        age: 32,
        address: "London, Park Lane no. ".concat(count)
      };

      _this3.setState({
        dataSource: [].concat(Object(toConsumableArray["a" /* default */])(dataSource), [newData]),
        count: count + 1
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this3), "handleSave", function (row) {
      var newData = Object(toConsumableArray["a" /* default */])(_this3.state.dataSource);

      var index = newData.findIndex(function (item) {
        return row.key === item.key;
      });
      var item = newData[index];
      newData.splice(index, 1, Object(objectSpread["a" /* default */])({}, item, row));

      _this3.setState({
        dataSource: newData
      });
    });

    _this3.columns = [{
      title: 'name',
      dataIndex: 'name',
      width: '30%',
      editable: true
    }, {
      title: 'age',
      dataIndex: 'age'
    }, {
      title: 'address',
      dataIndex: 'address'
    }, {
      title: 'operation',
      dataIndex: 'operation',
      render: function render(text, record) {
        return _this3.state.dataSource.length >= 1 ? external_react_default.a.createElement(external_antd_["Popconfirm"], {
          title: "Sure to delete?",
          onConfirm: function onConfirm() {
            return _this3.handleDelete(record.key);
          }
        }, external_react_default.a.createElement("a", {
          href: "javascript:;"
        }, "Delete")) : null;
      }
    }];
    _this3.state = {
      dataSource: [{
        key: '0',
        name: 'Edward King 0',
        age: '32',
        address: 'London, Park Lane no. 0'
      }, {
        key: '1',
        name: 'Edward King 1',
        age: '32',
        address: 'London, Park Lane no. 1'
      }],
      count: 2
    };
    return _this3;
  }

  Object(createClass["a" /* default */])(EditableTable, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var dataSource = this.state.dataSource;
      var components = {
        body: {
          row: EditableFormRow,
          cell: edit_cell_EditableCell
        }
      };
      var columns = this.columns.map(function (col) {
        if (!col.editable) {
          return col;
        }

        return Object(objectSpread["a" /* default */])({}, col, {
          onCell: function onCell(record) {
            return {
              record: record,
              editable: col.editable,
              dataIndex: col.dataIndex,
              title: col.title,
              handleSave: _this4.handleSave
            };
          }
        });
      });
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Button"], {
        onClick: this.handleAdd,
        type: "primary",
        style: {
          marginBottom: 16
        }
      }, "Add a row"), external_react_default.a.createElement(external_antd_["Table"], {
        components: components,
        rowClassName: function rowClassName() {
          return 'editable-row';
        },
        bordered: true,
        dataSource: dataSource,
        columns: columns
      }));
    }
  }]);

  return EditableTable;
}(external_react_default.a.Component);

/* harmony default export */ var edit_cell = (edit_cell_EditableTable);
// CONCATENATED MODULE: ./demos/antd/table/edit-row.js












var edit_row_data = [];

for (var edit_row_i = 0; edit_row_i < 100; edit_row_i++) {
  edit_row_data.push({
    key: edit_row_i.toString(),
    name: "Edrward ".concat(edit_row_i),
    age: 32,
    address: "London Park no. ".concat(edit_row_i)
  });
}

var edit_row_FormItem = external_antd_["Form"].Item;
var edit_row_EditableContext = external_react_default.a.createContext();

var edit_row_EditableRow = function EditableRow(_ref) {
  var form = _ref.form,
      index = _ref.index,
      props = _objectWithoutProperties(_ref, ["form", "index"]);

  return external_react_default.a.createElement(edit_row_EditableContext.Provider, {
    value: form
  }, external_react_default.a.createElement("tr", props));
};

var edit_row_EditableFormRow = external_antd_["Form"].create()(edit_row_EditableRow);

var edit_row_EditableCell =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(EditableCell, _React$Component);

  function EditableCell() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, EditableCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(EditableCell)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getInput", function () {
      if (_this.props.inputType === 'number') {
        return external_react_default.a.createElement(external_antd_["InputNumber"], null);
      }

      return external_react_default.a.createElement(external_antd_["Input"], null);
    });

    return _this;
  }

  Object(createClass["a" /* default */])(EditableCell, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          editing = _this$props.editing,
          dataIndex = _this$props.dataIndex,
          title = _this$props.title,
          inputType = _this$props.inputType,
          record = _this$props.record,
          index = _this$props.index,
          restProps = _objectWithoutProperties(_this$props, ["editing", "dataIndex", "title", "inputType", "record", "index"]);

      return external_react_default.a.createElement(edit_row_EditableContext.Consumer, null, function (form) {
        var getFieldDecorator = form.getFieldDecorator;
        return external_react_default.a.createElement("td", restProps, editing ? external_react_default.a.createElement(edit_row_FormItem, {
          style: {
            margin: 0
          }
        }, getFieldDecorator(dataIndex, {
          rules: [{
            required: true,
            message: "Please Input ".concat(title, "!")
          }],
          initialValue: record[dataIndex]
        })(_this2.getInput())) : restProps.children);
      });
    }
  }]);

  return EditableCell;
}(external_react_default.a.Component);

var edit_row_EditableTable =
/*#__PURE__*/
function (_React$Component2) {
  Object(inherits["a" /* default */])(EditableTable, _React$Component2);

  function EditableTable(props) {
    var _this3;

    Object(classCallCheck["a" /* default */])(this, EditableTable);

    _this3 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(EditableTable).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this3), "isEditing", function (record) {
      return record.key === _this3.state.editingKey;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this3), "cancel", function () {
      _this3.setState({
        editingKey: ''
      });
    });

    _this3.state = {
      data: edit_row_data,
      editingKey: ''
    };
    _this3.columns = [{
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: true
    }, {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true
    }, {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      editable: true
    }, {
      title: 'operation',
      dataIndex: 'operation',
      render: function render(text, record) {
        var editable = _this3.isEditing(record);

        return external_react_default.a.createElement("div", null, editable ? external_react_default.a.createElement("span", null, external_react_default.a.createElement(edit_row_EditableContext.Consumer, null, function (form) {
          return external_react_default.a.createElement("a", {
            href: "javascript:;",
            onClick: function onClick() {
              return _this3.save(form, record.key);
            },
            style: {
              marginRight: 8
            }
          }, "Save");
        }), external_react_default.a.createElement(external_antd_["Popconfirm"], {
          title: "Sure to cancel?",
          onConfirm: function onConfirm() {
            return _this3.cancel(record.key);
          }
        }, external_react_default.a.createElement("a", null, "Cancel"))) : external_react_default.a.createElement("a", {
          onClick: function onClick() {
            return _this3.edit(record.key);
          }
        }, "Edit"));
      }
    }];
    return _this3;
  }

  Object(createClass["a" /* default */])(EditableTable, [{
    key: "save",
    value: function save(form, key) {
      var _this4 = this;

      form.validateFields(function (error, row) {
        if (error) {
          return;
        }

        var newData = Object(toConsumableArray["a" /* default */])(_this4.state.data);

        var index = newData.findIndex(function (item) {
          return key === item.key;
        });

        if (index > -1) {
          var item = newData[index];
          newData.splice(index, 1, Object(objectSpread["a" /* default */])({}, item, row));

          _this4.setState({
            data: newData,
            editingKey: ''
          });
        } else {
          newData.push(row);

          _this4.setState({
            data: newData,
            editingKey: ''
          });
        }
      });
    }
  }, {
    key: "edit",
    value: function edit(key) {
      this.setState({
        editingKey: key
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var components = {
        body: {
          row: edit_row_EditableFormRow,
          cell: edit_row_EditableCell
        }
      };
      var columns = this.columns.map(function (col) {
        if (!col.editable) {
          return col;
        }

        return Object(objectSpread["a" /* default */])({}, col, {
          onCell: function onCell(record) {
            return {
              record: record,
              inputType: col.dataIndex === 'age' ? 'number' : 'text',
              dataIndex: col.dataIndex,
              title: col.title,
              editing: _this5.isEditing(record)
            };
          }
        });
      });
      return external_react_default.a.createElement(external_antd_["Table"], {
        components: components,
        bordered: true,
        dataSource: this.state.data,
        columns: columns,
        rowClassName: "editable-row"
      });
    }
  }]);

  return EditableTable;
}(external_react_default.a.Component);

/* harmony default export */ var edit_row = (edit_row_EditableTable);
// CONCATENATED MODULE: ./demos/antd/table/expand.js


var expand_columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age'
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address'
}, {
  title: 'Action',
  dataIndex: '',
  key: 'x',
  render: function render() {
    return external_react_default.a.createElement("a", {
      href: "javascript:;"
    }, "Delete");
  }
}];
var expand_data = [{
  key: 1,
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
}, {
  key: 2,
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
}, {
  key: 3,
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
}];

var expand_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Table"], {
    columns: expand_columns,
    expandedRowRender: function expandedRowRender(record) {
      return external_react_default.a.createElement("p", {
        style: {
          margin: 0
        }
      }, record.description);
    },
    dataSource: expand_data
  });
};

/* harmony default export */ var expand = (expand_Component);
// CONCATENATED MODULE: ./demos/antd/table/expand-children.js


var expand_children_columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  width: '12%'
}, {
  title: 'Address',
  dataIndex: 'address',
  width: '30%',
  key: 'address'
}];
var expand_children_data = [{
  key: 1,
  name: 'John Brown sr.',
  age: 60,
  address: 'New York No. 1 Lake Park',
  children: [{
    key: 11,
    name: 'John Brown',
    age: 42,
    address: 'New York No. 2 Lake Park'
  }, {
    key: 12,
    name: 'John Brown jr.',
    age: 30,
    address: 'New York No. 3 Lake Park',
    children: [{
      key: 121,
      name: 'Jimmy Brown',
      age: 16,
      address: 'New York No. 3 Lake Park'
    }]
  }, {
    key: 13,
    name: 'Jim Green sr.',
    age: 72,
    address: 'London No. 1 Lake Park',
    children: [{
      key: 131,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 2 Lake Park',
      children: [{
        key: 1311,
        name: 'Jim Green jr.',
        age: 25,
        address: 'London No. 3 Lake Park'
      }, {
        key: 1312,
        name: 'Jimmy Green sr.',
        age: 18,
        address: 'London No. 4 Lake Park'
      }]
    }]
  }]
}, {
  key: 2,
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park'
}]; // rowSelection objects indicates the need for row selection

var expand_children_rowSelection = {
  onChange: function onChange(selectedRowKeys, selectedRows) {
    console.log("selectedRowKeys: ".concat(selectedRowKeys), 'selectedRows: ', selectedRows);
  },
  onSelect: function onSelect(record, selected, selectedRows) {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: function onSelectAll(selected, selectedRows, changeRows) {
    console.log(selected, selectedRows, changeRows);
  }
};

var expand_children_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Table"], {
    columns: expand_children_columns,
    rowSelection: expand_children_rowSelection,
    dataSource: expand_children_data
  });
};

/* harmony default export */ var expand_children = (expand_children_Component);
// CONCATENATED MODULE: ./demos/antd/table/fixed-columns.js


var fixed_columns_columns = [{
  title: 'Full Name',
  width: 100,
  dataIndex: 'name',
  key: 'name',
  fixed: 'left'
}, {
  title: 'Age',
  width: 100,
  dataIndex: 'age',
  key: 'age',
  fixed: 'left'
}, {
  title: 'Column 1',
  dataIndex: 'address',
  key: '1'
}, {
  title: 'Column 2',
  dataIndex: 'address',
  key: '2'
}, {
  title: 'Column 3',
  dataIndex: 'address',
  key: '3'
}, {
  title: 'Column 4',
  dataIndex: 'address',
  key: '4'
}, {
  title: 'Column 5',
  dataIndex: 'address',
  key: '5'
}, {
  title: 'Column 6',
  dataIndex: 'address',
  key: '6'
}, {
  title: 'Column 7',
  dataIndex: 'address',
  key: '7'
}, {
  title: 'Column 8',
  dataIndex: 'address',
  key: '8'
}, {
  title: 'Action',
  key: 'operation',
  fixed: 'right',
  width: 100,
  render: function render() {
    return external_react_default.a.createElement("a", {
      href: "javascript:;"
    }, "action");
  }
}];
var fixed_columns_data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York Park'
}, {
  key: '2',
  name: 'Jim Green',
  age: 40,
  address: 'London Park'
}];

var fixed_columns_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Table"], {
    columns: fixed_columns_columns,
    dataSource: fixed_columns_data,
    scroll: {
      x: 1300
    }
  });
};

/* harmony default export */ var fixed_columns = (fixed_columns_Component);
// CONCATENATED MODULE: ./demos/antd/table/fixed-columns-header.js


var fixed_columns_header_columns = [{
  title: 'Full Name',
  width: 100,
  dataIndex: 'name',
  key: 'name',
  fixed: 'left'
}, {
  title: 'Age',
  width: 100,
  dataIndex: 'age',
  key: 'age',
  fixed: 'left'
}, {
  title: 'Column 1',
  dataIndex: 'address',
  key: '1',
  width: 150
}, {
  title: 'Column 2',
  dataIndex: 'address',
  key: '2',
  width: 150
}, {
  title: 'Column 3',
  dataIndex: 'address',
  key: '3',
  width: 150
}, {
  title: 'Column 4',
  dataIndex: 'address',
  key: '4',
  width: 150
}, {
  title: 'Column 5',
  dataIndex: 'address',
  key: '5',
  width: 150
}, {
  title: 'Column 6',
  dataIndex: 'address',
  key: '6',
  width: 150
}, {
  title: 'Column 7',
  dataIndex: 'address',
  key: '7',
  width: 150
}, {
  title: 'Column 8',
  dataIndex: 'address',
  key: '8'
}, {
  title: 'Action',
  key: 'operation',
  fixed: 'right',
  width: 100,
  render: function render() {
    return external_react_default.a.createElement("a", {
      href: "javascript:;"
    }, "action");
  }
}];
var fixed_columns_header_data = [];

for (var fixed_columns_header_i = 0; fixed_columns_header_i < 100; fixed_columns_header_i++) {
  fixed_columns_header_data.push({
    key: fixed_columns_header_i,
    name: "Edrward ".concat(fixed_columns_header_i),
    age: 32,
    address: "London Park no. ".concat(fixed_columns_header_i)
  });
}

var fixed_columns_header_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Table"], {
    columns: fixed_columns_header_columns,
    dataSource: fixed_columns_header_data,
    scroll: {
      x: 1500,
      y: 300
    }
  });
};

/* harmony default export */ var fixed_columns_header = (fixed_columns_header_Component);
// CONCATENATED MODULE: ./demos/antd/table/fixed-header.js


var fixed_header_columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: 150
}, {
  title: 'Age',
  dataIndex: 'age',
  width: 150
}, {
  title: 'Address',
  dataIndex: 'address'
}];
var fixed_header_data = [];

for (var fixed_header_i = 0; fixed_header_i < 100; fixed_header_i++) {
  fixed_header_data.push({
    key: fixed_header_i,
    name: "Edward King ".concat(fixed_header_i),
    age: 32,
    address: "London, Park Lane no. ".concat(fixed_header_i)
  });
}

var fixed_header_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Table"], {
    columns: fixed_header_columns,
    dataSource: fixed_header_data,
    pagination: {
      pageSize: 50
    },
    scroll: {
      y: 240
    }
  });
};

/* harmony default export */ var fixed_header = (fixed_header_Component);
// CONCATENATED MODULE: ./demos/antd/table/grouping-columns.js


var grouping_columns_columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: 100,
  fixed: 'left',
  filters: [{
    text: 'Joe',
    value: 'Joe'
  }, {
    text: 'John',
    value: 'John'
  }],
  onFilter: function onFilter(value, record) {
    return record.name.indexOf(value) === 0;
  }
}, {
  title: 'Other',
  children: [{
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 200,
    sorter: function sorter(a, b) {
      return a.age - b.age;
    }
  }, {
    title: 'Address',
    children: [{
      title: 'Street',
      dataIndex: 'street',
      key: 'street',
      width: 200
    }, {
      title: 'Block',
      children: [{
        title: 'Building',
        dataIndex: 'building',
        key: 'building',
        width: 100
      }, {
        title: 'Door No.',
        dataIndex: 'number',
        key: 'number',
        width: 100
      }]
    }]
  }]
}, {
  title: 'Company',
  children: [{
    title: 'Company Address',
    dataIndex: 'companyAddress',
    key: 'companyAddress'
  }, {
    title: 'Company Name',
    dataIndex: 'companyName',
    key: 'companyName'
  }]
}, {
  title: 'Gender',
  dataIndex: 'gender',
  key: 'gender',
  width: 80,
  fixed: 'right'
}];
var grouping_columns_data = [];

for (var grouping_columns_i = 0; grouping_columns_i < 100; grouping_columns_i++) {
  grouping_columns_data.push({
    key: grouping_columns_i,
    name: 'John Brown',
    age: grouping_columns_i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M'
  });
}

var grouping_columns_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Table"], {
    columns: grouping_columns_columns,
    dataSource: grouping_columns_data,
    bordered: true,
    size: "middle",
    scroll: {
      x: '130%',
      y: 240
    }
  });
};

/* harmony default export */ var grouping_columns = (grouping_columns_Component);
// CONCATENATED MODULE: ./demos/antd/table/head.js


var head_columns = [{
  title: 'Name',
  dataIndex: 'name',
  filters: [{
    text: 'Joe',
    value: 'Joe'
  }, {
    text: 'Jim',
    value: 'Jim'
  }, {
    text: 'Submenu',
    value: 'Submenu',
    children: [{
      text: 'Green',
      value: 'Green'
    }, {
      text: 'Black',
      value: 'Black'
    }]
  }],
  // specify the condition of filtering result
  // here is that finding the name started with `value`
  onFilter: function onFilter(value, record) {
    return record.name.indexOf(value) === 0;
  },
  sorter: function sorter(a, b) {
    return a.name.length - b.name.length;
  }
}, {
  title: 'Age',
  dataIndex: 'age',
  defaultSortOrder: 'descend',
  sorter: function sorter(a, b) {
    return a.age - b.age;
  }
}, {
  title: 'Address',
  dataIndex: 'address',
  filters: [{
    text: 'London',
    value: 'London'
  }, {
    text: 'New York',
    value: 'New York'
  }],
  filterMultiple: false,
  onFilter: function onFilter(value, record) {
    return record.address.indexOf(value) === 0;
  },
  sorter: function sorter(a, b) {
    return a.address.length - b.address.length;
  }
}];
var head_data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park'
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park'
}, {
  key: '4',
  name: 'Jim Red',
  age: 32,
  address: 'London No. 2 Lake Park'
}];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

var head_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Table"], {
    columns: head_columns,
    dataSource: head_data,
    onChange: onChange
  });
};

/* harmony default export */ var head = (head_Component);
// CONCATENATED MODULE: ./demos/antd/table/jsx.js


var Column = external_antd_["Table"].Column,
    ColumnGroup = external_antd_["Table"].ColumnGroup;
var jsx_data = [{
  key: '1',
  firstName: 'John',
  lastName: 'Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer']
}, {
  key: '2',
  firstName: 'Jim',
  lastName: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser']
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher']
}];

var jsx_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Table"], {
    dataSource: jsx_data
  }, external_react_default.a.createElement(ColumnGroup, {
    title: "Name"
  }, external_react_default.a.createElement(Column, {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName"
  }), external_react_default.a.createElement(Column, {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName"
  })), external_react_default.a.createElement(Column, {
    title: "Age",
    dataIndex: "age",
    key: "age"
  }), external_react_default.a.createElement(Column, {
    title: "Address",
    dataIndex: "address",
    key: "address"
  }), external_react_default.a.createElement(Column, {
    title: "Tags",
    dataIndex: "tags",
    key: "tags",
    render: function render(tags) {
      return external_react_default.a.createElement("span", null, tags.map(function (tag) {
        return external_react_default.a.createElement(external_antd_["Tag"], {
          color: "blue",
          key: tag
        }, tag);
      }));
    }
  }), external_react_default.a.createElement(Column, {
    title: "Action",
    key: "action",
    render: function render(text, record) {
      return external_react_default.a.createElement("span", null, external_react_default.a.createElement("a", {
        href: "javascript:;"
      }, "Invite ", record.lastName), external_react_default.a.createElement(external_antd_["Divider"], {
        type: "vertical"
      }), external_react_default.a.createElement("a", {
        href: "javascript:;"
      }, "Delete"));
    }
  }));
};

/* harmony default export */ var jsx = (jsx_Component);
// CONCATENATED MODULE: ./demos/antd/table/nested-table.js


var menu = external_react_default.a.createElement(external_antd_["Menu"], null, external_react_default.a.createElement(external_antd_["Menu"].Item, null, "Action 1"), external_react_default.a.createElement(external_antd_["Menu"].Item, null, "Action 2"));

function NestedTable() {
  var expandedRowRender = function expandedRowRender() {
    var columns = [{
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    }, {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: 'Status',
      key: 'state',
      render: function render() {
        return external_react_default.a.createElement("span", null, external_react_default.a.createElement(external_antd_["Badge"], {
          status: "success"
        }), "Finished");
      }
    }, {
      title: 'Upgrade Status',
      dataIndex: 'upgradeNum',
      key: 'upgradeNum'
    }, {
      title: 'Action',
      dataIndex: 'operation',
      key: 'operation',
      render: function render() {
        return external_react_default.a.createElement("span", {
          className: "table-operation"
        }, external_react_default.a.createElement("a", {
          href: "javascript:;"
        }, "Pause"), external_react_default.a.createElement("a", {
          href: "javascript:;"
        }, "Stop"), external_react_default.a.createElement(external_antd_["Dropdown"], {
          overlay: menu
        }, external_react_default.a.createElement("a", {
          href: "javascript:;"
        }, "More ", external_react_default.a.createElement(external_antd_["Icon"], {
          type: "down"
        }))));
      }
    }];
    var data = [];

    for (var i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56'
      });
    }

    return external_react_default.a.createElement(external_antd_["Table"], {
      columns: columns,
      dataSource: data,
      pagination: false
    });
  };

  var columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: 'Platform',
    dataIndex: 'platform',
    key: 'platform'
  }, {
    title: 'Version',
    dataIndex: 'version',
    key: 'version'
  }, {
    title: 'Upgraded',
    dataIndex: 'upgradeNum',
    key: 'upgradeNum'
  }, {
    title: 'Creator',
    dataIndex: 'creator',
    key: 'creator'
  }, {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt'
  }, {
    title: 'Action',
    key: 'operation',
    render: function render() {
      return external_react_default.a.createElement("a", {
        href: "javascript:;"
      }, "Publish");
    }
  }];
  var data = [];

  for (var i = 0; i < 3; ++i) {
    data.push({
      key: i,
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00'
    });
  }

  return external_react_default.a.createElement(external_antd_["Table"], {
    className: "components-table-demo-nested",
    columns: columns,
    expandedRowRender: expandedRowRender,
    dataSource: data
  });
}

/* harmony default export */ var nested_table = (NestedTable);
// CONCATENATED MODULE: ./demos/antd/table/reset-filter.js









var reset_filter_data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park'
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park'
}, {
  key: '4',
  name: 'Jim Red',
  age: 32,
  address: 'London No. 2 Lake Park'
}];

var reset_filter_App =
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
      filteredInfo: null,
      sortedInfo: null
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleChange", function (pagination, filters, sorter) {
      console.log('Various parameters', pagination, filters, sorter);

      _this.setState({
        filteredInfo: filters,
        sortedInfo: sorter
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "clearFilters", function () {
      _this.setState({
        filteredInfo: null
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "clearAll", function () {
      _this.setState({
        filteredInfo: null,
        sortedInfo: null
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "setAgeSort", function () {
      _this.setState({
        sortedInfo: {
          order: 'descend',
          columnKey: 'age'
        }
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          sortedInfo = _this$state.sortedInfo,
          filteredInfo = _this$state.filteredInfo;
      sortedInfo = sortedInfo || {};
      filteredInfo = filteredInfo || {};
      var columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filters: [{
          text: 'Joe',
          value: 'Joe'
        }, {
          text: 'Jim',
          value: 'Jim'
        }],
        filteredValue: filteredInfo.name || null,
        onFilter: function onFilter(value, record) {
          return record.name.includes(value);
        },
        sorter: function sorter(a, b) {
          return a.name.length - b.name.length;
        },
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: function sorter(a, b) {
          return a.age - b.age;
        },
        sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [{
          text: 'London',
          value: 'London'
        }, {
          text: 'New York',
          value: 'New York'
        }],
        filteredValue: filteredInfo.address || null,
        onFilter: function onFilter(value, record) {
          return record.address.includes(value);
        },
        sorter: function sorter(a, b) {
          return a.address.length - b.address.length;
        },
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order
      }];
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
        className: "table-operations"
      }, external_react_default.a.createElement(external_antd_["Button"], {
        onClick: this.setAgeSort
      }, "Sort age"), external_react_default.a.createElement(external_antd_["Button"], {
        onClick: this.clearFilters
      }, "Clear filters"), external_react_default.a.createElement(external_antd_["Button"], {
        onClick: this.clearAll
      }, "Clear filters and sorters")), external_react_default.a.createElement(external_antd_["Table"], {
        columns: columns,
        dataSource: reset_filter_data,
        onChange: this.handleChange
      }));
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var reset_filter = (reset_filter_App);
// EXTERNAL MODULE: external "react-resizable"
var external_react_resizable_ = __webpack_require__("Qfv/");

// CONCATENATED MODULE: ./demos/antd/table/resizable-column.js














var resizable_column_ResizeableTitle = function ResizeableTitle(props) {
  var onResize = props.onResize,
      width = props.width,
      restProps = _objectWithoutProperties(props, ["onResize", "width"]);

  if (!width) {
    return external_react_default.a.createElement("th", restProps);
  }

  return external_react_default.a.createElement(external_react_resizable_["Resizable"], {
    width: width,
    height: 0,
    onResize: onResize
  }, external_react_default.a.createElement("th", restProps));
};

var resizable_column_Demo =
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
      columns: [{
        title: 'Date',
        dataIndex: 'date',
        width: 200
      }, {
        title: 'Amount',
        dataIndex: 'amount',
        width: 100
      }, {
        title: 'Type',
        dataIndex: 'type',
        width: 100
      }, {
        title: 'Note',
        dataIndex: 'note',
        width: 100
      }, {
        title: 'Action',
        key: 'action',
        render: function render() {
          return external_react_default.a.createElement("a", {
            href: "javascript:;"
          }, "Delete");
        }
      }]
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "components", {
      header: {
        cell: resizable_column_ResizeableTitle
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "data", [{
      key: 0,
      date: '2018-02-11',
      amount: 120,
      type: 'income',
      note: 'transfer'
    }, {
      key: 1,
      date: '2018-03-11',
      amount: 243,
      type: 'income',
      note: 'transfer'
    }, {
      key: 2,
      date: '2018-04-11',
      amount: 98,
      type: 'income',
      note: 'transfer'
    }]);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleResize", function (index) {
      return function (e, _ref) {
        var size = _ref.size;

        _this.setState(function (_ref2) {
          var columns = _ref2.columns;

          var nextColumns = Object(toConsumableArray["a" /* default */])(columns);

          nextColumns[index] = Object(objectSpread["a" /* default */])({}, nextColumns[index], {
            width: size.width
          });
          return {
            columns: nextColumns
          };
        });
      };
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Demo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var columns = this.state.columns.map(function (col, index) {
        return Object(objectSpread["a" /* default */])({}, col, {
          onHeaderCell: function onHeaderCell(column) {
            return {
              width: column.width,
              onResize: _this2.handleResize(index)
            };
          }
        });
      });
      return external_react_default.a.createElement(external_antd_["Table"], {
        bordered: true,
        components: this.components,
        columns: columns,
        dataSource: this.data
      });
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var resizable_column = (resizable_column_Demo);
// CONCATENATED MODULE: ./demos/antd/table/row-selection.js


var row_selection_columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: function render(text) {
    return external_react_default.a.createElement("a", {
      href: "javascript:;"
    }, text);
  }
}, {
  title: 'Age',
  dataIndex: 'age'
}, {
  title: 'Address',
  dataIndex: 'address'
}];
var row_selection_data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park'
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park'
}, {
  key: '4',
  name: 'Disabled User',
  age: 99,
  address: 'Sidney No. 1 Lake Park'
}]; // rowSelection object indicates the need for row selection

var row_selection_rowSelection = {
  onChange: function onChange(selectedRowKeys, selectedRows) {
    console.log("selectedRowKeys: ".concat(selectedRowKeys), 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: function getCheckboxProps(record) {
    return {
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name
    };
  }
};

var row_selection_Component = function Component() {
  return external_react_default.a.createElement(external_antd_["Table"], {
    rowSelection: row_selection_rowSelection,
    columns: row_selection_columns,
    dataSource: row_selection_data
  });
};

/* harmony default export */ var row_selection = (row_selection_Component);
// CONCATENATED MODULE: ./demos/antd/table/row-selection-custom.js










var row_selection_custom_columns = [{
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Age',
  dataIndex: 'age'
}, {
  title: 'Address',
  dataIndex: 'address'
}];
var row_selection_custom_data = [];

for (var row_selection_custom_i = 0; row_selection_custom_i < 46; row_selection_custom_i++) {
  row_selection_custom_data.push({
    key: row_selection_custom_i,
    name: "Edward King ".concat(row_selection_custom_i),
    age: 32,
    address: "London, Park Lane no. ".concat(row_selection_custom_i)
  });
}

var row_selection_custom_App =
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
      selectedRowKeys: [] // Check here to configure the default column

    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSelectChange", function (selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);

      _this.setState({
        selectedRowKeys: selectedRowKeys
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var selectedRowKeys = this.state.selectedRowKeys;
      var rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: this.onSelectChange,
        hideDefaultSelections: true,
        selections: [{
          key: 'all-data',
          text: 'Select All Data',
          onSelect: function onSelect() {
            _this2.setState({
              selectedRowKeys: Object(toConsumableArray["a" /* default */])(Array(46).keys()) // 0...45

            });
          }
        }, {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: function onSelect(changableRowKeys) {
            var newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter(function (key, index) {
              if (index % 2 !== 0) {
                return false;
              }

              return true;
            });

            _this2.setState({
              selectedRowKeys: newSelectedRowKeys
            });
          }
        }, {
          key: 'even',
          text: 'Select Even Row',
          onSelect: function onSelect(changableRowKeys) {
            var newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter(function (key, index) {
              if (index % 2 !== 0) {
                return true;
              }

              return false;
            });

            _this2.setState({
              selectedRowKeys: newSelectedRowKeys
            });
          }
        }],
        onSelection: this.onSelection
      };
      return external_react_default.a.createElement(external_antd_["Table"], {
        rowSelection: rowSelection,
        columns: row_selection_custom_columns,
        dataSource: row_selection_custom_data
      });
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var row_selection_custom = (row_selection_custom_App);
// CONCATENATED MODULE: ./demos/antd/table/row-selection-and-operation.js









var row_selection_and_operation_columns = [{
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Age',
  dataIndex: 'age'
}, {
  title: 'Address',
  dataIndex: 'address'
}];
var row_selection_and_operation_data = [];

for (var row_selection_and_operation_i = 0; row_selection_and_operation_i < 46; row_selection_and_operation_i++) {
  row_selection_and_operation_data.push({
    key: row_selection_and_operation_i,
    name: "Edward King ".concat(row_selection_and_operation_i),
    age: 32,
    address: "London, Park Lane no. ".concat(row_selection_and_operation_i)
  });
}

var row_selection_and_operation_App =
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
      selectedRowKeys: [],
      // Check here to configure the default column
      loading: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "start", function () {
      _this.setState({
        loading: true
      }); // ajax request after empty completing


      setTimeout(function () {
        _this.setState({
          selectedRowKeys: [],
          loading: false
        });
      }, 1000);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSelectChange", function (selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);

      _this.setState({
        selectedRowKeys: selectedRowKeys
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          selectedRowKeys = _this$state.selectedRowKeys;
      var rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: this.onSelectChange
      };
      var hasSelected = selectedRowKeys.length > 0;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
        style: {
          marginBottom: 16
        }
      }, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        onClick: this.start,
        disabled: !hasSelected,
        loading: loading
      }, "Reload"), external_react_default.a.createElement("span", {
        style: {
          marginLeft: 8
        }
      }, hasSelected ? "Selected ".concat(selectedRowKeys.length, " items") : '')), external_react_default.a.createElement(external_antd_["Table"], {
        rowSelection: rowSelection,
        columns: row_selection_and_operation_columns,
        dataSource: row_selection_and_operation_data
      }));
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var row_selection_and_operation = (row_selection_and_operation_App);
// CONCATENATED MODULE: ./demos/antd/table/size.js


var size_columns = [{
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Age',
  dataIndex: 'age'
}, {
  title: 'Address',
  dataIndex: 'address'
}];
var size_data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park'
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park'
}];

var size_Component = function Component() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h4", null, "Middle size table"), external_react_default.a.createElement(external_antd_["Table"], {
    columns: size_columns,
    dataSource: size_data,
    size: "middle"
  }), external_react_default.a.createElement("h4", null, "Small size table"), external_react_default.a.createElement(external_antd_["Table"], {
    columns: size_columns,
    dataSource: size_data,
    size: "small"
  }));
};

/* harmony default export */ var table_size = (size_Component);
// CONCATENATED MODULE: ./demos/antd/table/demo.js











 //import Drag from './drag-sorting';




















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
      }, external_react_default.a.createElement("small", null, "Ajax")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(ajax, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Bordered")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(bordered, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Colspan rowspan")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(colspan_rowspan, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Custom filter panel")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(custom_filter_panel, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Dyanmic settings")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(dynamic_settings, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Edit cell")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(edit_cell, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "BasiEDit rowc")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(edit_row, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Expand children")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(expand_children, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Expand")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(expand, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Fixed columns header")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(fixed_columns_header, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Fixed columns")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(fixed_columns, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Fixed header")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(fixed_header, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Grouping columns")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(grouping_columns, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Head")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(head, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Jsx")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(jsx, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Nested table")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(nested_table, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Reset filter")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(reset_filter, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Resizable column")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(resizable_column, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Row selection and opration")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(row_selection_and_operation, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Row selection custom")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(row_selection_custom, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Row selection")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(row_selection, null)), external_react_default.a.createElement(external_antd_["Divider"], {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Size")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(table_size, null)));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var demo = (demo_Demo);
// CONCATENATED MODULE: ./pages/data-display/table.js



var table_DemoPage = function DemoPage() {
  return external_react_default.a.createElement(demo, null);
};

/* harmony default export */ var table = __webpack_exports__["default"] = (table_DemoPage);

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