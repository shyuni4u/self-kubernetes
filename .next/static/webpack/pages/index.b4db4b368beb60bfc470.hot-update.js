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
          console.log(response.data);
          setResult(response.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ2x1c3Rlck1vZG5uLnRzeCJdLCJuYW1lcyI6WyJjb25uIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiTW9kbm5Db25maWciLCJtb2RubiIsImlwIiwidGltZW91dCIsIkNsdXN0ZXJNb2RubiIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwidXNlRWZmZWN0IiwidW5tb3VudCIsIm9uTG9hZEFwaSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUN4QkMsU0FBTyxFQUFFQyw4Q0FBVyxDQUFDQyxLQUFaLENBQWtCQyxFQURIO0FBRXhCQyxTQUFPLEVBQUUsS0FBSztBQUZVLENBQWIsQ0FBYjtBQUtPLElBQU1DLFlBQXNCLEdBQUcsU0FBekJBLFlBQXlCLEdBQU07QUFBQTs7QUFBQSxrQkFDZEMsc0RBQVEsQ0FBTUMsU0FBTixDQURNO0FBQUEsTUFDbkNDLE1BRG1DO0FBQUEsTUFDM0JDLFNBRDJCOztBQUcxQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsT0FBTyxHQUFHLEtBQWQ7O0FBQ0EsUUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QmYsVUFBSSxDQUNEZ0IsR0FESCxDQUNPLFFBRFAsRUFFR0MsSUFGSCxDQUVRLFVBQUNDLFFBQUQsRUFBYztBQUNsQixZQUFJSixPQUFKLEVBQWE7O0FBQ2IsWUFBSUksUUFBUSxDQUFDQyxNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQzNCQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlILFFBQVEsQ0FBQ0ksSUFBckI7QUFDQVYsbUJBQVMsQ0FBQ00sUUFBUSxDQUFDSSxJQUFWLENBQVQ7QUFDRCxTQUhELE1BR087QUFDTFYsbUJBQVMsQ0FBQ0YsU0FBRCxDQUFUO0FBQ0Q7QUFDRixPQVZILFdBV1MsVUFBQ2EsS0FBRCxFQUFXO0FBQ2hCLFlBQUlULE9BQUosRUFBYTtBQUNiTSxlQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCRSxLQUFyQjtBQUNELE9BZEg7QUFlRCxLQWhCRDs7QUFrQkEsUUFBTUMsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUNqQ1YsZUFBUztBQUNWLEtBRjJCLEVBRXpCLElBRnlCLENBQTVCO0FBSUEsV0FBTyxZQUFNO0FBQ1hELGFBQU8sR0FBRyxJQUFWO0FBQ0FZLG1CQUFhLENBQUNGLFFBQUQsQ0FBYjtBQUNELEtBSEQ7QUFJRCxHQTVCUSxFQTRCTixFQTVCTSxDQUFUO0FBOEJBLFNBQU8sTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRCxDQWxDTTs7R0FBTWhCLFk7O0tBQUFBLFk7QUFvQ0VBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI0ZGI0YjM2OGJlYjYwYmZjNDcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IFBhbmVsIGZyb20gJy4uL2F0b21zL1BhbmVsJztcclxuXHJcbmltcG9ydCBNb2RubkNvbmZpZyBmcm9tICcuLi8uLi9saWIvc2V0dGluZy5qc29uJztcclxuXHJcbmNvbnN0IGNvbm4gPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IE1vZG5uQ29uZmlnLm1vZG5uLmlwLFxyXG4gIHRpbWVvdXQ6IDEwICogMTAwMFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBDbHVzdGVyTW9kbm46IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZTxhbnk+KHVuZGVmaW5lZCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdW5tb3VudCA9IGZhbHNlO1xyXG4gICAgY29uc3Qgb25Mb2FkQXBpID0gKCkgPT4ge1xyXG4gICAgICBjb25uXHJcbiAgICAgICAgLmdldCgnL21vZG5uJylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmICh1bm1vdW50KSByZXR1cm47XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdCh1bmRlZmluZWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgaWYgKHVubW91bnQpIHJldHVybjtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIG9uTG9hZEFwaSgpO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgdW5tb3VudCA9IHRydWU7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiA8UGFuZWw+VEVTVDwvUGFuZWw+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2x1c3Rlck1vZG5uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9