webpackHotUpdate_N_E("pages/index",{

/***/ "./components/organisms/ClusterModnn.tsx":
/*!***********************************************!*\
  !*** ./components/organisms/ClusterModnn.tsx ***!
  \***********************************************/
/*! exports provided: ClusterModnn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterModnn", function() { return ClusterModnn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_Panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/Panel */ "./components/atoms/Panel.tsx");
/* harmony import */ var _lib_setting_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/setting.json */ "./lib/setting.json");
var _lib_setting_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../lib/setting.json */ "./lib/setting.json", 1);
var _this = undefined,
    _jsxFileName = "C:\\Users\\shyuniz\\Desktop\\moreh\\self-kubernetes\\components\\organisms\\ClusterModnn.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var conn = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: _lib_setting_json__WEBPACK_IMPORTED_MODULE_3__.modnn.ip,
  timeout: 10 * 1000
});
var ClusterModnn = function ClusterModnn() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      result = _useState[0],
      setResult = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var unmount = false;

    var onLoadApi = function onLoadApi() {
      conn.get('/modnn').then(function (response) {
        if (unmount) return;

        if (response.status === 200) {
          console.log(response);
          setResult(response);
        } else {
          setResult(undefined);
        }
      })["catch"](function (error) {
        if (unmount) return;
        console.log('error', error);
      });
    };

    var interval = setInterval(function () {
      onLoadApi();
    }, 1000);
    return function () {
      unmount = true;
      clearInterval(interval);
    };
  }, []);
  return __jsx(_atoms_Panel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 10
    }
  }, "TEST");
};

_s(ClusterModnn, "Z/A/9w2TB6edPN8ruHGm8He8oPs=");

_c = ClusterModnn;
/* harmony default export */ __webpack_exports__["default"] = (ClusterModnn);

var _c;

$RefreshReg$(_c, "ClusterModnn");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ2x1c3Rlck1vZG5uLnRzeCJdLCJuYW1lcyI6WyJjb25uIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiTW9kbm5Db25maWciLCJtb2RubiIsImlwIiwidGltZW91dCIsIkNsdXN0ZXJNb2RubiIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwidXNlRWZmZWN0IiwidW5tb3VudCIsIm9uTG9hZEFwaSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUVBLElBQU1BLElBQUksR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQ3hCQyxTQUFPLEVBQUVDLDhDQUFXLENBQUNDLEtBQVosQ0FBa0JDLEVBREg7QUFFeEJDLFNBQU8sRUFBRSxLQUFLO0FBRlUsQ0FBYixDQUFiO0FBS08sSUFBTUMsWUFBc0IsR0FBRyxTQUF6QkEsWUFBeUIsR0FBTTtBQUFBOztBQUFBLGtCQUNkQyxzREFBUSxDQUFNQyxTQUFOLENBRE07QUFBQSxNQUNuQ0MsTUFEbUM7QUFBQSxNQUMzQkMsU0FEMkI7O0FBRzFDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxPQUFPLEdBQUcsS0FBZDs7QUFDQSxRQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCZixVQUFJLENBQ0RnQixHQURILENBQ08sUUFEUCxFQUVHQyxJQUZILENBRVEsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCLFlBQUlKLE9BQUosRUFBYTs7QUFDYixZQUFJSSxRQUFRLENBQUNDLE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7QUFDM0JDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUgsUUFBWjtBQUNBTixtQkFBUyxDQUFDTSxRQUFELENBQVQ7QUFDRCxTQUhELE1BR087QUFDTE4sbUJBQVMsQ0FBQ0YsU0FBRCxDQUFUO0FBQ0Q7QUFDRixPQVZILFdBV1MsVUFBQ1ksS0FBRCxFQUFXO0FBQ2hCLFlBQUlSLE9BQUosRUFBYTtBQUNiTSxlQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCQyxLQUFyQjtBQUNELE9BZEg7QUFlRCxLQWhCRDs7QUFrQkEsUUFBTUMsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUNqQ1QsZUFBUztBQUNWLEtBRjJCLEVBRXpCLElBRnlCLENBQTVCO0FBSUEsV0FBTyxZQUFNO0FBQ1hELGFBQU8sR0FBRyxJQUFWO0FBQ0FXLG1CQUFhLENBQUNGLFFBQUQsQ0FBYjtBQUNELEtBSEQ7QUFJRCxHQTVCUSxFQTRCTixFQTVCTSxDQUFUO0FBOEJBLFNBQU8sTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRCxDQWxDTTs7R0FBTWYsWTs7S0FBQUEsWTtBQW9DRUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmVlNGViZWM1ZGYwMzM5M2FjNzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgUGFuZWwgZnJvbSAnLi4vYXRvbXMvUGFuZWwnO1xyXG5cclxuaW1wb3J0IE1vZG5uQ29uZmlnIGZyb20gJy4uLy4uL2xpYi9zZXR0aW5nLmpzb24nO1xyXG5cclxuY29uc3QgY29ubiA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogTW9kbm5Db25maWcubW9kbm4uaXAsXHJcbiAgdGltZW91dDogMTAgKiAxMDAwXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsdXN0ZXJNb2RubjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPGFueT4odW5kZWZpbmVkKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB1bm1vdW50ID0gZmFsc2U7XHJcbiAgICBjb25zdCBvbkxvYWRBcGkgPSAoKSA9PiB7XHJcbiAgICAgIGNvbm5cclxuICAgICAgICAuZ2V0KCcvbW9kbm4nKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHVubW91bnQpIHJldHVybjtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdChyZXNwb25zZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRSZXN1bHQodW5kZWZpbmVkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGlmICh1bm1vdW50KSByZXR1cm47XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBvbkxvYWRBcGkoKTtcclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHVubW91bnQgPSB0cnVlO1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gPFBhbmVsPlRFU1Q8L1BhbmVsPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsdXN0ZXJNb2RubjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==