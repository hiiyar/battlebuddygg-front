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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/user/login.tsx":
/*!******************************!*\
  !*** ./pages/user/login.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/services/auth */ "./src/services/auth.ts");
/* harmony import */ var _src_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/rxjs-operators */ "./src/rxjs-operators/index.ts");

var _jsxFileName = "/home/michele/battlebuddygg-front/pages/user/login.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  _createClass(Index, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", {});

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isClientOrServer", function () {
      return typeof window !== 'undefined' && window.document ? 'client' : 'server';
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submit", function () {
      _src_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].login(_this.state.email, _this.state.password).pipe(_src_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["default"].switchMap(function () {
        return _src_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].isAuthenticated();
      })).subscribe(function (isAuthenticated) {
        return alert('Authenticated: ' + isAuthenticated);
      });
    });

    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      email: '',
      password: ''
    };
    return _this;
  }

  _createClass(Index, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.id, e.target.value));
    }
  }, {
    key: "logout",
    value: function logout() {
      _src_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].logout().subscribe(function () {
        return alert('Logout');
      });
    }
  }, {
    key: "getUser",
    value: function getUser() {
      _src_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].getUser().subscribe(function (user) {
        console.log('user', user);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Login Page"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("fieldset", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "E-mail"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", {
        id: "email",
        type: "email",
        value: this.state.email,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", {
        htmlFor: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", {
        id: "password",
        type: "password",
        value: this.state.password,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        onClick: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        onClick: this.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Logout"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        onClick: this.getUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Get User")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Rendering by: ", this.isClientOrServer()));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./src/formatters/apiResponse.ts":
/*!***************************************!*\
  !*** ./src/formatters/apiResponse.ts ***!
  \***************************************/
/*! exports provided: apiResponseFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiResponseFormatter", function() { return apiResponseFormatter; });
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date */ "./src/formatters/date.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


function apiResponseFormatter(obj) {
  if (!obj) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(function (i) {
      return apiResponseFormatter(i);
    });
  }

  if (typeof obj === 'string' && isValidDateString(obj)) {
    return Object(_date__WEBPACK_IMPORTED_MODULE_0__["dateParse"])(obj);
  }

  if (typeof obj === 'string' && !isNaN(Number(obj))) {
    return Number(obj);
  }

  if (_typeof(obj) === 'object' && !(obj instanceof Date)) {
    return Object.keys(obj).reduce(function (acc, key) {
      acc[key] = apiResponseFormatter(obj[key]);
      return acc;
    }, {});
  }

  return obj;
}

function isValidDateString(value) {
  return /^(\d{4})-(\d{2})-(\d{2})([T\s](\d{2}):(\d{2}):(\d{2})(\.(\d+)Z)?)?$/.test(value);
}

/***/ }),

/***/ "./src/formatters/date.ts":
/*!********************************!*\
  !*** ./src/formatters/date.ts ***!
  \********************************/
/*! exports provided: dateParse, dateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateParse", function() { return dateParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormat", function() { return dateFormat; });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ "luxon");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_0__);

function dateParse(value, format) {
  if (!value) {
    return value;
  }

  if (value instanceof Date) {
    return value;
  }

  var date = format ? luxon__WEBPACK_IMPORTED_MODULE_0__["DateTime"].fromFormat(value, format) : luxon__WEBPACK_IMPORTED_MODULE_0__["DateTime"].fromISO(value);
  return date.toJSDate();
}
function dateFormat(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'D';
  return luxon__WEBPACK_IMPORTED_MODULE_0__["DateTime"].fromJSDate(date).toFormat(format);
}

/***/ }),

/***/ "./src/rxjs-operators/index.ts":
/*!*************************************!*\
  !*** ./src/rxjs-operators/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in rxjs_operators__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var rxjsOperators = _objectSpread({}, rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (rxjsOperators);

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/*! exports provided: ApiService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings */ "./src/settings.ts");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token */ "./src/services/token.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rxjs-operators */ "./src/rxjs-operators/index.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var ApiService =
/*#__PURE__*/
function () {
  function ApiService(apiEndpoint, tokenService) {
    _classCallCheck(this, ApiService);

    this.apiEndpoint = apiEndpoint;
    this.tokenService = tokenService;
  }

  _createClass(ApiService, [{
    key: "get",
    value: function get(url, params) {
      return this.request('GET', url, params);
    }
  }, {
    key: "post",
    value: function post(url, body) {
      return this.request('POST', url, body);
    }
  }, {
    key: "request",
    value: function request(method, url) {
      var _this = this;

      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return this.tokenService.getToken().pipe(_rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["default"].first(), _rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (token) {
        return token ? {
          Authorization: "Bearer ".concat(token)
        } : null;
      }), _rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["default"].switchMap(function (headers) {
        return axios__WEBPACK_IMPORTED_MODULE_1___default.a.request({
          baseURL: _this.apiEndpoint,
          url: url,
          method: method,
          timeout: 30000,
          headers: _objectSpread({
            'Content-type': 'application/json'
          }, headers),
          params: method === 'GET' ? data : null,
          data: method === 'POST' ? data : null
        });
      }), _rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (res) {
        return res.data;
      }), _rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["default"].catchError(function (err) {
        return _this.handleError(err);
      }));
    }
  }, {
    key: "handleError",
    value: function handleError(err) {
      return rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"](err);
    }
  }]);

  return ApiService;
}();
var apiService = new ApiService(_settings__WEBPACK_IMPORTED_MODULE_2__["API_ENDPOINT"], _token__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (apiService);

/***/ }),

/***/ "./src/services/auth.ts":
/*!******************************!*\
  !*** ./src/services/auth.ts ***!
  \******************************/
/*! exports provided: AuthService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/services/api.ts");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token */ "./src/services/token.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rxjs-operators */ "./src/rxjs-operators/index.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var AuthService =
/*#__PURE__*/
function () {
  function AuthService(api, tokenService) {
    var _this = this;

    _classCallCheck(this, AuthService);

    this.api = api;
    this.tokenService = tokenService;
    this.user$ = this.tokenService.getToken().pipe(_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (token) {
      if (!token) {
        return null;
      }

      var user = _this.tokenService.decode(token);

      if (!user) {
        return null;
      }

      return user;
    }), _rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["default"].catchError(function () {
      return rxjs__WEBPACK_IMPORTED_MODULE_0__["of"](null);
    }), _rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["default"].shareReplay(1));
  }

  _createClass(AuthService, [{
    key: "login",
    value: function login(email, password) {
      return this.api.post('/login', {
        email: email,
        password: password
      }).pipe(_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["default"].switchMap(function (response) {
        return _token__WEBPACK_IMPORTED_MODULE_2__["default"].setToken(response.token);
      }), _rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["default"].tap(function () {
        return console.log('Login efetuado com sucesso!');
      }));
    }
  }, {
    key: "logout",
    value: function logout() {
      return this.tokenService.clearToken();
    }
  }, {
    key: "getUser",
    value: function getUser() {
      return this.user$;
    }
  }, {
    key: "isAuthenticated",
    value: function isAuthenticated() {
      return this.tokenService.getToken().pipe(_rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (token) {
        return !!token;
      }));
    }
  }]);

  return AuthService;
}();
var authService = new AuthService(_api__WEBPACK_IMPORTED_MODULE_1__["default"], _token__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (authService);

/***/ }),

/***/ "./src/services/storage.ts":
/*!*********************************!*\
  !*** ./src/services/storage.ts ***!
  \*********************************/
/*! exports provided: StorageService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formatters_apiResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formatters/apiResponse */ "./src/formatters/apiResponse.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var StorageService =
/*#__PURE__*/
function () {
  function StorageService() {
    _classCallCheck(this, StorageService);
  }

  _createClass(StorageService, [{
    key: "get",
    value: function get(key) {
      return rxjs__WEBPACK_IMPORTED_MODULE_0__["of"](true).pipe(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"](function () {
        return localStorage.getItem(key);
      }), rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"](function (data) {
        return data ? Object(_formatters_apiResponse__WEBPACK_IMPORTED_MODULE_2__["apiResponseFormatter"])(JSON.parse(data)) : null;
      }), rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"](function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["of"](null);
      }));
    }
  }, {
    key: "set",
    value: function set(key, value) {
      return rxjs__WEBPACK_IMPORTED_MODULE_0__["of"](true).pipe(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"](function () {
        return localStorage.setItem(key, JSON.stringify(value));
      }), rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"](function () {
        return value;
      }));
    }
  }, {
    key: "clear",
    value: function clear(regexp) {
      return rxjs__WEBPACK_IMPORTED_MODULE_0__["of"](Object.keys(localStorage)).pipe(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"](function (keys) {
        if (regexp) {
          keys = keys.filter(function (k) {
            return regexp.test(k);
          });
        }

        keys.forEach(function (k) {
          return localStorage.removeItem(k);
        });
      }));
    }
  }]);

  return StorageService;
}();
var storageService = new StorageService();
/* harmony default export */ __webpack_exports__["default"] = (storageService);

/***/ }),

/***/ "./src/services/token.ts":
/*!*******************************!*\
  !*** ./src/services/token.ts ***!
  \*******************************/
/*! exports provided: TokenService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rxjs-operators */ "./src/rxjs-operators/index.ts");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/services/storage.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var TokenService =
/*#__PURE__*/
function () {
  function TokenService(storageService) {
    var _this = this;

    _classCallCheck(this, TokenService);

    this.storageService = storageService;
    this.token$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
    this.storageService.get('battleBuddyAuthToken').subscribe(function (token) {
      return _this.token$.next(token);
    });
  }

  _createClass(TokenService, [{
    key: "getToken",
    value: function getToken() {
      return this.token$.pipe(_rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"]());
    }
  }, {
    key: "setToken",
    value: function setToken(token) {
      var _this2 = this;

      return this.storageService.set('battleBuddyAuthToken', token).pipe(_rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"](function () {
        return _this2.token$.next(token);
      }));
    }
  }, {
    key: "clearToken",
    value: function clearToken() {
      return this.setToken(null).pipe(_rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"](function () {
        return null;
      }));
    }
  }, {
    key: "decode",
    value: function decode(token) {
      try {
        var data = JSON.parse(atob(token.split('.')[1]));
        var currentTime = Date.now() / 1000;
        return currentTime > data.exp ? null : data;
      } catch (err) {
        return null;
      }
    }
  }]);

  return TokenService;
}();
var tokenService = new TokenService(_storage__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (tokenService);

/***/ }),

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/*! exports provided: API_ENDPOINT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ENDPOINT", function() { return API_ENDPOINT; });
var API_ENDPOINT = 'http://demo4652258.mockable.io';

/***/ }),

/***/ 4:
/*!************************************!*\
  !*** multi ./pages/user/login.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/user/login.tsx */"./pages/user/login.tsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "luxon":
/*!************************!*\
  !*** external "luxon" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("luxon");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map