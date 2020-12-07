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
        console.log(response);

        if (response.status === 200) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ2x1c3Rlck1vZG5uLnRzeCJdLCJuYW1lcyI6WyJjb25uIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiTW9kbm5Db25maWciLCJtb2RubiIsImlwIiwidGltZW91dCIsIkNsdXN0ZXJNb2RubiIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwidXNlRWZmZWN0IiwidW5tb3VudCIsIm9uTG9hZEFwaSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJlcnJvciIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUVBLElBQU1BLElBQUksR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQ3hCQyxTQUFPLEVBQUVDLDhDQUFXLENBQUNDLEtBQVosQ0FBa0JDLEVBREg7QUFFeEJDLFNBQU8sRUFBRSxLQUFLO0FBRlUsQ0FBYixDQUFiO0FBS08sSUFBTUMsWUFBc0IsR0FBRyxTQUF6QkEsWUFBeUIsR0FBTTtBQUFBOztBQUFBLGtCQUNkQyxzREFBUSxDQUFNQyxTQUFOLENBRE07QUFBQSxNQUNuQ0MsTUFEbUM7QUFBQSxNQUMzQkMsU0FEMkI7O0FBRzFDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxPQUFPLEdBQUcsS0FBZDs7QUFDQSxRQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCZixVQUFJLENBQ0RnQixHQURILENBQ08sUUFEUCxFQUVHQyxJQUZILENBRVEsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCLFlBQUlKLE9BQUosRUFBYTtBQUNiSyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjs7QUFDQSxZQUFJQSxRQUFRLENBQUNHLE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7QUFDM0JULG1CQUFTLENBQUNNLFFBQUQsQ0FBVDtBQUNELFNBRkQsTUFFTztBQUNMTixtQkFBUyxDQUFDRixTQUFELENBQVQ7QUFDRDtBQUNGLE9BVkgsV0FXUyxVQUFDWSxLQUFELEVBQVc7QUFDaEIsWUFBSVIsT0FBSixFQUFhO0FBQ2JLLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJFLEtBQXJCO0FBQ0QsT0FkSDtBQWVELEtBaEJEOztBQWtCQSxRQUFNQyxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQ2pDVCxlQUFTO0FBQ1YsS0FGMkIsRUFFekIsSUFGeUIsQ0FBNUI7QUFJQSxXQUFPLFlBQU07QUFDWEQsYUFBTyxHQUFHLElBQVY7QUFDQVcsbUJBQWEsQ0FBQ0YsUUFBRCxDQUFiO0FBQ0QsS0FIRDtBQUlELEdBNUJRLEVBNEJOLEVBNUJNLENBQVQ7QUE4QkEsU0FBTyxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNELENBbENNOztHQUFNZixZOztLQUFBQSxZO0FBb0NFQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NGFmZGZkYmUzOWJjMGZlMWU2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCBQYW5lbCBmcm9tICcuLi9hdG9tcy9QYW5lbCc7XHJcblxyXG5pbXBvcnQgTW9kbm5Db25maWcgZnJvbSAnLi4vLi4vbGliL3NldHRpbmcuanNvbic7XHJcblxyXG5jb25zdCBjb25uID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBNb2RubkNvbmZpZy5tb2Rubi5pcCxcclxuICB0aW1lb3V0OiAxMCAqIDEwMDBcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2x1c3Rlck1vZG5uOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8YW55Pih1bmRlZmluZWQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHVubW91bnQgPSBmYWxzZTtcclxuICAgIGNvbnN0IG9uTG9hZEFwaSA9ICgpID0+IHtcclxuICAgICAgY29ublxyXG4gICAgICAgIC5nZXQoJy9tb2RubicpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAodW5tb3VudCkgcmV0dXJuO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdChyZXNwb25zZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRSZXN1bHQodW5kZWZpbmVkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGlmICh1bm1vdW50KSByZXR1cm47XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBvbkxvYWRBcGkoKTtcclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHVubW91bnQgPSB0cnVlO1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gPFBhbmVsPlRFU1Q8L1BhbmVsPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsdXN0ZXJNb2RubjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==