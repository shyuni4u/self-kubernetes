webpackHotUpdate_N_E("pages/index",{

/***/ "./components/organisms/ClusterHexItem.tsx":
false,

/***/ "./components/organisms/ClusterModnn.tsx":
/*!***********************************************!*\
  !*** ./components/organisms/ClusterModnn.tsx ***!
  \***********************************************/
/*! exports provided: ClusterModnn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterModnn", function() { return ClusterModnn; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\shyuniz\\Desktop\\moreh\\self-kubernetes\\components\\organisms\\ClusterModnn.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var marginCW = 10;
var StyledClusterWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "ClusterModnn__StyledClusterWrapper",
  componentId: "sc-67wgkp-0"
})(["width:calc(100% - ", "px);margin:0 ", "px 30px;&:last-child{margin-bottom:5px;}"], marginCW * 2, marginCW);
_c = StyledClusterWrapper;
var StyledClusterItemWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].article.withConfig({
  displayName: "ClusterModnn__StyledClusterItemWrapper",
  componentId: "sc-67wgkp-1"
})(["display:flex;flex-wrap:wrap;"]);
_c2 = StyledClusterItemWrapper;

var customStyles = function customStyles(selectType) {
  return {
    option: function option(provided, state) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        borderBottom: '1px dotted pink',
        color: state.isSelected ? '#999' : '#333'
      });
    },
    container: function container(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        width: selectType === 'fil' ? '300px' : '100px',
        marginLeft: '10px'
      });
    }
  };
};

var ClusterModnn = function ClusterModnn() {
  _s();

  var filterOptions = clusterInfo.filterOption;
  var rangeOptions = [{
    value: 'avg',
    label: 'AVG'
  }, {
    value: 'max',
    label: 'MAX'
  }, {
    value: 'min',
    label: 'MIN'
  }];
  var defaultFilter = 2;
  var defaultRange = 0;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(filterOptions[defaultFilter].value),
      filter = _useState[0],
      setFilter = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(rangeOptions[defaultRange].value),
      range = _useState2[0],
      setRange = _useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    style: {
      display: 'flex',
      marginBottom: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(Select, {
    instanceId: 'filter_option',
    styles: customStyles('fil'),
    options: filterOptions,
    onChange: function onChange(e) {
      return setFilter(e['value']);
    },
    defaultValue: filterOptions[defaultFilter],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx(Select, {
    instanceId: 'value_option',
    styles: customStyles('range'),
    options: rangeOptions,
    onChange: function onChange(e) {
      return setRange(e['value']);
    },
    defaultValue: rangeOptions[defaultRange],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  })), clusterInfo.clusters.map(function (cluster, clusterIndex) {
    return __jsx(StyledClusterWrapper, {
      key: clusterIndex,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }
    }, "Cluster: ", cluster.name), __jsx("hr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }
    }), __jsx(StyledClusterItemWrapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }
    }, cluster.nodes.map(function (node, nodeIndex) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: "".concat(clusterIndex, "-").concat(nodeIndex, "-").concat(node.name, "-").concat(node.type, "-").concat(node.ip),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 15
        }
      }, __jsx(Item, {
        name: node.name,
        type: node.type,
        ip: node.ip,
        filter: filter,
        range: range,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }
      }));
    })));
  }));
};

_s(ClusterModnn, "OXRHR/mxlB2lEr4EZdUKMjjlmoc=");

_c3 = ClusterModnn;
/* harmony default export */ __webpack_exports__["default"] = (ClusterModnn);

var _c, _c2, _c3;

$RefreshReg$(_c, "StyledClusterWrapper");
$RefreshReg$(_c2, "StyledClusterItemWrapper");
$RefreshReg$(_c3, "ClusterModnn");

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

/***/ }),

/***/ "./lib/setting.json":
false,

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
false,

/***/ "./node_modules/@emotion/cache/dist/cache.browser.esm.js":
false,

/***/ "./node_modules/@emotion/core/dist/core.browser.esm.js":
false,

/***/ "./node_modules/@emotion/core/dist/emotion-element-57a3a7a3.browser.esm.js":
false,

/***/ "./node_modules/@emotion/css/dist/css.browser.esm.js":
false,

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
false,

/***/ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js":
false,

/***/ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js":
false,

/***/ "./node_modules/@emotion/utils/dist/utils.browser.esm.js":
false,

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
false,

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
false,

/***/ "./node_modules/react-input-autosize/lib/AutosizeInput.js":
false,

/***/ "./node_modules/react-select/dist/Select-9fdb8cd0.browser.esm.js":
false,

/***/ "./node_modules/react-select/dist/index-4322c0ed.browser.esm.js":
false,

/***/ "./node_modules/react-select/dist/react-select.browser.esm.js":
false,

/***/ "./node_modules/react-select/dist/stateManager-04f734a2.browser.esm.js":
false,

/***/ "./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ2x1c3Rlck1vZG5uLnRzeCJdLCJuYW1lcyI6WyJtYXJnaW5DVyIsIlN0eWxlZENsdXN0ZXJXcmFwcGVyIiwic3R5bGVkIiwic2VjdGlvbiIsIlN0eWxlZENsdXN0ZXJJdGVtV3JhcHBlciIsImFydGljbGUiLCJjdXN0b21TdHlsZXMiLCJzZWxlY3RUeXBlIiwib3B0aW9uIiwicHJvdmlkZWQiLCJzdGF0ZSIsImJvcmRlckJvdHRvbSIsImNvbG9yIiwiaXNTZWxlY3RlZCIsImNvbnRhaW5lciIsIndpZHRoIiwibWFyZ2luTGVmdCIsIkNsdXN0ZXJNb2RubiIsImZpbHRlck9wdGlvbnMiLCJjbHVzdGVySW5mbyIsImZpbHRlck9wdGlvbiIsInJhbmdlT3B0aW9ucyIsInZhbHVlIiwibGFiZWwiLCJkZWZhdWx0RmlsdGVyIiwiZGVmYXVsdFJhbmdlIiwidXNlU3RhdGUiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJyYW5nZSIsInNldFJhbmdlIiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsImUiLCJjbHVzdGVycyIsIm1hcCIsImNsdXN0ZXIiLCJjbHVzdGVySW5kZXgiLCJuYW1lIiwibm9kZXMiLCJub2RlIiwibm9kZUluZGV4IiwidHlwZSIsImlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxFQUFqQjtBQUNBLElBQU1DLG9CQUFvQixnQkFBR0MseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSx3RkFDSEgsUUFBUSxHQUFHLENBRFIsRUFFWkEsUUFGWSxDQUExQjtLQUFNQyxvQjtBQVFOLElBQU1HLHdCQUF3QixnQkFBR0YseURBQU0sQ0FBQ0csT0FBVjtBQUFBO0FBQUE7QUFBQSxvQ0FBOUI7TUFBTUQsd0I7O0FBS04sSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsVUFBRCxF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R0YsT0FBTyxDQUFDRyxLQUFSLENBQWNKLEdBQWQsQ0FBa0IsVUFBQ0ssSUFBRCxFQUFPQyxTQUFQO0FBQUEsYUFDakIsTUFBQyw4Q0FBRDtBQUFVLFdBQUcsWUFBS0osWUFBTCxjQUFxQkksU0FBckIsY0FBa0NELElBQUksQ0FBQ0YsSUFBdkMsY0FBK0NFLElBQUksQ0FBQ0UsSUFBcEQsY0FBNERGLElBQUksQ0FBQ0csRUFBakUsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxJQUFEO0FBQU0sWUFBSSxFQUFFSCxJQUFJLENBQUNGLElBQWpCO0FBQXVCLFlBQUksRUFBRUUsSUFBSSxDQUFDRSxJQUFsQztBQUF3QyxVQUFFLEVBQUVGLElBQUksQ0FBQ0csRUFBakQ7QUFBcUQsY0FBTSxFQUFFaEIsTUFBN0Q7QUFBcUUsYUFBSyxFQUFFRSxLQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FEaUI7QUFBQSxLQUFsQixDQURILENBSEYsQ0FEd0I7QUFBQSxHQUF6QixDQWpCSCxDQURGO0FBaUNELENBN0NNOztHQUFNWixZOztNQUFBQSxZO0FBK0NFQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kZTNmMzM4YTQ3MmE2NmY1YTAxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBtYXJnaW5DVyA9IDEwO1xyXG5jb25zdCBTdHlsZWRDbHVzdGVyV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAke21hcmdpbkNXICogMn1weCk7XHJcbiAgbWFyZ2luOiAwICR7bWFyZ2luQ1d9cHggMzBweDtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFN0eWxlZENsdXN0ZXJJdGVtV3JhcHBlciA9IHN0eWxlZC5hcnRpY2xlYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5gO1xyXG5cclxuY29uc3QgY3VzdG9tU3R5bGVzID0gKHNlbGVjdFR5cGU6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBvcHRpb246IChwcm92aWRlZDogYW55LCBzdGF0ZTogeyBpc1NlbGVjdGVkOiBhbnkgfSkgPT4gKHtcclxuICAgICAgLi4ucHJvdmlkZWQsXHJcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBkb3R0ZWQgcGluaycsXHJcbiAgICAgIGNvbG9yOiBzdGF0ZS5pc1NlbGVjdGVkID8gJyM5OTknIDogJyMzMzMnXHJcbiAgICB9KSxcclxuICAgIGNvbnRhaW5lcjogKHByb3ZpZGVkOiBhbnkpID0+ICh7XHJcbiAgICAgIC4uLnByb3ZpZGVkLFxyXG4gICAgICB3aWR0aDogc2VsZWN0VHlwZSA9PT0gJ2ZpbCcgPyAnMzAwcHgnIDogJzEwMHB4JyxcclxuICAgICAgbWFyZ2luTGVmdDogJzEwcHgnXHJcbiAgICB9KVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ2x1c3Rlck1vZG5uOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBmaWx0ZXJPcHRpb25zID0gY2x1c3RlckluZm8uZmlsdGVyT3B0aW9uO1xyXG4gIGNvbnN0IHJhbmdlT3B0aW9ucyA9IFtcclxuICAgIHsgdmFsdWU6ICdhdmcnLCBsYWJlbDogJ0FWRycgfSxcclxuICAgIHsgdmFsdWU6ICdtYXgnLCBsYWJlbDogJ01BWCcgfSxcclxuICAgIHsgdmFsdWU6ICdtaW4nLCBsYWJlbDogJ01JTicgfVxyXG4gIF07XHJcbiAgY29uc3QgZGVmYXVsdEZpbHRlciA9IDI7XHJcbiAgY29uc3QgZGVmYXVsdFJhbmdlID0gMDtcclxuICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGU8c3RyaW5nPihmaWx0ZXJPcHRpb25zW2RlZmF1bHRGaWx0ZXJdLnZhbHVlKTtcclxuICBjb25zdCBbcmFuZ2UsIHNldFJhbmdlXSA9IHVzZVN0YXRlPHN0cmluZz4ocmFuZ2VPcHRpb25zW2RlZmF1bHRSYW5nZV0udmFsdWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpbkJvdHRvbTogJzIwcHgnIH19PlxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIGluc3RhbmNlSWQ9eydmaWx0ZXJfb3B0aW9uJ31cclxuICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzKCdmaWwnKX1cclxuICAgICAgICAgIG9wdGlvbnM9e2ZpbHRlck9wdGlvbnN9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpbHRlcihlWyd2YWx1ZSddKX1cclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZmlsdGVyT3B0aW9uc1tkZWZhdWx0RmlsdGVyXX1cclxuICAgICAgICA+PC9TZWxlY3Q+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgaW5zdGFuY2VJZD17J3ZhbHVlX29wdGlvbid9XHJcbiAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlcygncmFuZ2UnKX1cclxuICAgICAgICAgIG9wdGlvbnM9e3JhbmdlT3B0aW9uc31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmFuZ2UoZVsndmFsdWUnXSl9XHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3JhbmdlT3B0aW9uc1tkZWZhdWx0UmFuZ2VdfVxyXG4gICAgICAgID48L1NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtjbHVzdGVySW5mby5jbHVzdGVycy5tYXAoKGNsdXN0ZXIsIGNsdXN0ZXJJbmRleCkgPT4gKFxyXG4gICAgICAgIDxTdHlsZWRDbHVzdGVyV3JhcHBlciBrZXk9e2NsdXN0ZXJJbmRleH0+XHJcbiAgICAgICAgICA8aDM+Q2x1c3Rlcjoge2NsdXN0ZXIubmFtZX08L2gzPlxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICA8U3R5bGVkQ2x1c3Rlckl0ZW1XcmFwcGVyPlxyXG4gICAgICAgICAgICB7Y2x1c3Rlci5ub2Rlcy5tYXAoKG5vZGUsIG5vZGVJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2Ake2NsdXN0ZXJJbmRleH0tJHtub2RlSW5kZXh9LSR7bm9kZS5uYW1lfS0ke25vZGUudHlwZX0tJHtub2RlLmlwfWB9PlxyXG4gICAgICAgICAgICAgICAgPEl0ZW0gbmFtZT17bm9kZS5uYW1lfSB0eXBlPXtub2RlLnR5cGV9IGlwPXtub2RlLmlwfSBmaWx0ZXI9e2ZpbHRlcn0gcmFuZ2U9e3JhbmdlfSAvPlxyXG4gICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TdHlsZWRDbHVzdGVySXRlbVdyYXBwZXI+XHJcbiAgICAgICAgPC9TdHlsZWRDbHVzdGVyV3JhcHBlcj5cclxuICAgICAgKSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2x1c3Rlck1vZG5uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9