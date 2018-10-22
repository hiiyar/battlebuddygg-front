webpackHotUpdate("static/development/pages/user/login.js",{

/***/ "./src/services/auth.ts":
/*!******************************!*\
  !*** ./src/services/auth.ts ***!
  \******************************/
/*! exports provided: AuthService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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

/***/ })

})
//# sourceMappingURL=login.js.0afcd8047e89ffad7414.hot-update.js.map