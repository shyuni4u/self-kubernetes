webpackHotUpdate_N_E("pages/index",{

/***/ "./components/organisms/ClusterHexItem.tsx":
/*!*************************************************!*\
  !*** ./components/organisms/ClusterHexItem.tsx ***!
  \*************************************************/
/*! exports provided: ClusterHexItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterHexItem", function() { return ClusterHexItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_setting_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/setting.json */ "./lib/setting.json");
var _lib_setting_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../lib/setting.json */ "./lib/setting.json", 1);
var _this = undefined,
    _jsxFileName = "C:\\Users\\shyuniz\\Desktop\\moreh\\self-kubernetes\\components\\organisms\\ClusterHexItem.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var hoverSize = {
  width: 400,
  height: 200
};
var StyledItemWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ClusterHexItem__StyledItemWrapper",
  componentId: "sc-1utj8fj-0"
})(["position:relative;flex:0 0 60px;height:60px;border:2px solid #999;border-top-right-radius:15px;border-bottom-left-radius:15px;margin:2px;background-color:", ";user-select:none;cursor:pointer;"], function (props) {
  return props.connect ? '#ffe996' : 'transparent';
});
_c = StyledItemWrapper;
var StyledValueStatus = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ClusterHexItem__StyledValueStatus",
  componentId: "sc-1utj8fj-1"
})(["position:absolute;top:0px;left:0px;width:100%;height:100%;background-color:#e1272c;border-top-right-radius:15px;border-bottom-left-radius:15px;opacity:", ";"], function (props) {
  return props.value ? props.value : 0;
});
_c2 = StyledValueStatus;
var StyledConnectionStatus = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ClusterHexItem__StyledConnectionStatus",
  componentId: "sc-1utj8fj-2"
})(["border-radius:50%;position:absolute;top:4px;left:4px;width:10px;height:10px;border:1px solid #888;background-color:", ";"], function (props) {
  return props.connect ? 'green' : 'red';
});
_c3 = StyledConnectionStatus;
var StyledHoverContent = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ClusterHexItem__StyledHoverContent",
  componentId: "sc-1utj8fj-3"
})(["display:", ";position:absolute;width:", "px;height:", "px;top:10px;left:10px;z-index:1;", ""], function (props) {
  return props.hover ? 'block' : 'none';
}, hoverSize.width, hoverSize.height, function (props) {
  if (props.hover && props.hover['x'] && props.hover['x'] + hoverSize.width > window.innerWidth) {
    if (props.hover && props.hover['y'] && props.hover['y'] + hoverSize.height > window.innerHeight) {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["right:0px;left:unset;bottom:0px;top:unset;"]);
    }

    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["right:0px;left:unset;"]);
  }

  if (props.hover && props.hover['y'] && props.hover['y'] + hoverSize.height > window.innerHeight) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["bottom:0px;top:unset;"]);
  }
});
_c4 = StyledHoverContent;
var StyledHoverContentBodyWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "ClusterHexItem__StyledHoverContentBodyWrapper",
  componentId: "sc-1utj8fj-4"
})(["display:flex;flex-wrap:wrap;align-items:bottom;width:", "px;height:", "px;overflow:auto;padding:10px;border:2px solid ", ";border-radius:10px;background-color:", ";& > li{border-bottom:1px solid #eee;}& > li.subject{flex:0 0 70%;font-weight:600;text-align:right;padding-right:10px;}& > li.value{flex:0 0 30%;text-align:right;border-left:1px solid #eee;}"], hoverSize.width, hoverSize.height, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.hover;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.border;
});
_c5 = StyledHoverContentBodyWrapper;

var settingAxios = function settingAxios(ip) {
  var conn = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: ip,
    timeout: 10 * 1000
  });
  conn.interceptors.request.use(function (config) {
    config.params = {
      startTime: new Date()
    };
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
  conn.interceptors.response.use(function (response) {
    response.config.params.endTime = new Date();
    response.config.params.duration = response.config.params.endTime - response.config.params.startTime;
    return response;
  }, function (error) {
    error.config.params.endTime = new Date();
    error.config.params.duration = error.config.params.endTime - error.config.params.startTime;
    return Promise.reject(error);
  });
  return conn;
};

var findTreeInNvidia = function findTreeInNvidia(jsonObject, search) {
  var token = '>';

  if (search.indexOf(token) < 0) {
    return jsonObject[search];
  } else {
    var target = search.substr(0, search.indexOf(token));
    var param = search.substr(search.indexOf(token) + token.length);

    if (typeof jsonObject[target] === 'object') {
      return findTreeInNvidia(jsonObject[target], param);
    } else if (typeof jsonObject[target] === 'string') {
      return jsonObject[target];
    }
  }

  return undefined;
};

var ClusterHexItem = function ClusterHexItem(_ref3) {
  _s();

  var name = _ref3.name,
      type = _ref3.type,
      ip = _ref3.ip,
      filter = _ref3.filter,
      range = _ref3.range;
  var conn = settingAxios(ip);
  var filtered = _lib_setting_json__WEBPACK_IMPORTED_MODULE_3__.filterOption.filter(function (el) {
    return el.value === filter;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1),
      duration = _useState[0],
      setDuration = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      result = _useState2[0],
      setResult = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1),
      latency = _useState3[0],
      setLatency = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      amdGpuList = _useState4[0],
      setAmdGpuList = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      hover = _useState5[0],
      setHover = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      values = _useState6[0],
      setValues = _useState6[1];

  var test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  var envAMD = _lib_setting_json__WEBPACK_IMPORTED_MODULE_3__.amd;
  var envNVIDIA = _lib_setting_json__WEBPACK_IMPORTED_MODULE_3__.nvidia;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var unmount = false;

    var onLoadApi = function onLoadApi() {
      var url = type === 'amd' ? "/".concat(type, "/api/min") : "/".concat(type, "/api");
      conn.get(url).then(function (response) {
        if (unmount) return;
        setDuration(response.config.params.duration);

        if (response.status === 200) {
          setLatency(response.data.commandDelay);

          if (type === 'nvidia') {
            if (response.data.error === 'ok') {
              setResult(response.data.smiResult.nvidia_smi_log);
            } else {
              console.error(response.data.error);
            }
          } else if (type === 'amd') {
            if (response.data.error === 'ok') {
              setResult(response);

              if (amdGpuList.length !== response.data.smiResult.length) {
                setAmdGpuList(Object.keys(response.data.smiResult));
              }
            } else {
              console.error(response.data.error);
            }
          }
        } else {
          setResult(undefined);
        }
      })["catch"](function (error) {
        if (unmount) return;
        setDuration(-1);
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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (result) {
      if (type === 'amd' && amdGpuList.length > 0) {
        var data = result.data.smiResult;
        var tempArray = [];
        amdGpuList.forEach(function (device) {
          if (device === 'system') return;

          if (filtered.length > 0) {
            tempArray.push({
              name: data[device][envAMD.deviceName],
              value: data[device][filtered[0].amd]
            });
          }
        });
        setValues(tempArray);
      }

      if (type === 'nvidia') {
        var _data = result.gpu;
        var _tempArray = [];

        _data.forEach(function (device, deviceIndex) {
          _tempArray.push({
            name: device[envNVIDIA.deviceName],
            value: findTreeInNvidia(_data[deviceIndex], filtered[0].nvidia)
          });
        });

        setValues(_tempArray);
      }
    }
  }, [result]);

  var getParseValue = function getParseValue() {
    if (values.length === 0) return 0;

    switch (range) {
      case 'avg':
        var sum = 0;
        values.forEach(function (el) {
          return sum += parseInt(el.value, 10);
        });
        return sum / values.length || 0;

      case 'max':
        var max = -Infinity;
        values.forEach(function (el) {
          return max = Math.max(max, parseInt(el.value, 10));
        });
        return max;

      case 'min':
        var min = Infinity;
        values.forEach(function (el) {
          return min = Math.min(min, parseInt(el.value, 10));
        });
        return min;

      default:
        return 0;
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(StyledItemWrapper // key={key}
  , {
    connect: duration !== -1,
    value: 0,
    onMouseEnter: function onMouseEnter(e) {
      return setHover({
        x: e.clientX,
        y: e.clientY
      });
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 7
    }
  }, __jsx(StyledValueStatus, {
    value: getParseValue() * 0.01,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 9
    }
  }), __jsx(StyledConnectionStatus, {
    connect: duration !== -1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 9
    }
  }), __jsx(StyledHoverContent, {
    hover: hover,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 9
    }
  }, __jsx(StyledHoverContentBodyWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: 'subject',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 13
    }
  }, "Name"), __jsx("li", {
    className: 'value',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 13
    }
  }, name), __jsx("li", {
    className: 'subject',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 13
    }
  }, "Network"), __jsx("li", {
    className: 'value',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 13
    }
  }, duration === -1 ? '' : "".concat(duration / 1000, "s")), __jsx("li", {
    className: 'subject',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 13
    }
  }, "Command"), __jsx("li", {
    className: 'value',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 13
    }
  }, latency === -1 ? '' : "".concat(latency / 1000, "s")), values.map(function (el, elIndex) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: elIndex,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 15
      }
    }, __jsx("li", {
      className: 'subject',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 17
      }
    }, el.name), __jsx("li", {
      className: 'value',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 17
      }
    }, el.value));
  })))));
};

_s(ClusterHexItem, "eMheCIYRZxmfWJxSGlwYi4LwGas=");

_c6 = ClusterHexItem;
/* harmony default export */ __webpack_exports__["default"] = (ClusterHexItem);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "StyledItemWrapper");
$RefreshReg$(_c2, "StyledValueStatus");
$RefreshReg$(_c3, "StyledConnectionStatus");
$RefreshReg$(_c4, "StyledHoverContent");
$RefreshReg$(_c5, "StyledHoverContentBodyWrapper");
$RefreshReg$(_c6, "ClusterHexItem");

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

/***/ "./components/organisms/ClusterModnn.tsx":
/*!***********************************************!*\
  !*** ./components/organisms/ClusterModnn.tsx ***!
  \***********************************************/
/*! exports provided: ClusterHex, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterHex", function() { return ClusterHex; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _lib_setting_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/setting.json */ "./lib/setting.json");
var _lib_setting_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../lib/setting.json */ "./lib/setting.json", 1);
/* harmony import */ var _ClusterHexItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ClusterHexItem */ "./components/organisms/ClusterHexItem.tsx");


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

var ClusterHex = function ClusterHex() {
  _s();

  var filterOptions = _lib_setting_json__WEBPACK_IMPORTED_MODULE_4__.filterOption;
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
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      lineNumber: 60,
      columnNumber: 9
    }
  })), _lib_setting_json__WEBPACK_IMPORTED_MODULE_4__.clusters.map(function (cluster, clusterIndex) {
    return __jsx(StyledClusterWrapper, {
      key: clusterIndex,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }
    }, "Cluster: ", cluster.name), __jsx("hr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }
    }), __jsx(StyledClusterItemWrapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }
    }, cluster.nodes.map(function (node, nodeIndex) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: "".concat(clusterIndex, "-").concat(nodeIndex, "-").concat(node.name, "-").concat(node.type, "-").concat(node.ip),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 15
        }
      }, __jsx(_ClusterHexItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: node.name,
        type: node.type,
        ip: node.ip,
        filter: filter,
        range: range,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }
      }));
    })));
  }));
};

_s(ClusterHex, "OXRHR/mxlB2lEr4EZdUKMjjlmoc=");

_c3 = ClusterHex;
/* harmony default export */ __webpack_exports__["default"] = (ClusterHex);

var _c, _c2, _c3;

$RefreshReg$(_c, "StyledClusterWrapper");
$RefreshReg$(_c2, "StyledClusterItemWrapper");
$RefreshReg$(_c3, "ClusterHex");

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
/*!**************************!*\
  !*** ./lib/setting.json ***!
  \**************************/
/*! exports provided: clusters, amd, nvidia, filterOption, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"clusters\":[{\"name\":\"Moreh Test 1\",\"nodes\":[{\"name\":\"p100\",\"type\":\"nvidia\",\"ip\":\"http://147.46.219.42:35100\"},{\"name\":\"rx52\",\"type\":\"amd\",\"ip\":\"http://147.46.219.61:35100\"},{\"name\":\"rx51:35100\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35100\"},{\"name\":\"rx51:35101\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35101\"},{\"name\":\"rx51:35102\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35102\"},{\"name\":\"rx51:35103\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35103\"},{\"name\":\"rx51:35104\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35104\"},{\"name\":\"rx51:35105\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35105\"},{\"name\":\"rx51:35106\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35106\"},{\"name\":\"rx51:35107\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35107\"},{\"name\":\"rx51:35108\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35108\"},{\"name\":\"rx51:35109\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35109\"},{\"name\":\"rx51:35110\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35110\"},{\"name\":\"rx51:35111\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35111\"},{\"name\":\"rx51:35112\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35112\"},{\"name\":\"rx51:35113\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35113\"},{\"name\":\"rx51:35114\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35114\"},{\"name\":\"rx51:35115\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35115\"},{\"name\":\"rx51:35116\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35116\"},{\"name\":\"rx51:35117\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35117\"},{\"name\":\"rx51:35118\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35118\"},{\"name\":\"rx51:35119\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35119\"},{\"name\":\"rx51:35120\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35120\"},{\"name\":\"rx51:35121\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35121\"},{\"name\":\"rx51:35122\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35122\"},{\"name\":\"rx51:35123\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35123\"},{\"name\":\"rx51:35124\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35124\"},{\"name\":\"rx51:35125\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35125\"},{\"name\":\"rx51:35126\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35126\"},{\"name\":\"rx51:35127\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35127\"},{\"name\":\"rx51:35128\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35128\"},{\"name\":\"rx51:35129\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35129\"}]},{\"name\":\"Moreh Test 2\",\"nodes\":[{\"name\":\"rx51:35130\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35130\"},{\"name\":\"rx51:35131\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35131\"},{\"name\":\"rx51:35132\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35132\"},{\"name\":\"rx51:35133\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35133\"},{\"name\":\"rx51:35134\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35134\"},{\"name\":\"rx51:35135\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35135\"},{\"name\":\"rx51:35136\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35136\"},{\"name\":\"rx51:35137\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35137\"},{\"name\":\"rx51:35138\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35138\"},{\"name\":\"rx51:35139\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35139\"},{\"name\":\"rx51:35140\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35140\"},{\"name\":\"rx51:35141\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35141\"},{\"name\":\"rx51:35142\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35142\"},{\"name\":\"rx51:35143\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35143\"},{\"name\":\"rx51:35144\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35144\"},{\"name\":\"rx51:35145\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35145\"},{\"name\":\"rx51:35146\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35146\"},{\"name\":\"rx51:35147\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35147\"},{\"name\":\"rx51:35148\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35148\"},{\"name\":\"rx51:35149\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35149\"},{\"name\":\"rx51:35150\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35150\"}]}],\"amd\":{\"deviceName\":\"Card series\",\"chartItem\":[\"Temperature (Sensor junction) (C)\",\"Temperature (Sensor mem) (C)\",\"GPU use (%)\",\"GPU memory use (%)\"]},\"nvidia\":{\"deviceName\":\"product_name\",\"chartItem\":[\"temperature>gpu_temp\",\"temperature>memory_temp\",\"utilization>gpu_util\",\"utilization>memory_util\"]},\"filterOption\":[{\"value\":\"Temperature (Sensor junction) (C)\",\"label\":\"Temperature (Sensor junction) (C)\"},{\"value\":\"Temperature (Sensor mem) (C)\",\"label\":\"Temperature (Sensor mem) (C)\"},{\"value\":\"GPU use (%)\",\"label\":\"GPU use (%)\"},{\"value\":\"GPU memory use (%)\",\"label\":\"GPU memory use (%)\"}]}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@emotion/cache/dist/cache.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/cache.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__["default"](stylisOptions);

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if ( true && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (true) {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/core/dist/core.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/core/dist/core.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: CacheProvider, ThemeContext, withEmotionCache, css, ClassNames, Global, createElement, jsx, keyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emotion-element-57a3a7a3.browser.esm.js */ "./node_modules/@emotion/core/dist/emotion-element-57a3a7a3.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return _emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return _emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["T"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return _emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["w"]; });

/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _emotion_css__WEBPACK_IMPORTED_MODULE_7__["default"]; });












var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["h"].call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = _emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["E"];
  createElementArgArray[1] = Object(_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["c"])(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global = /* #__PURE__ */Object(_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["w"])(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;

  if (typeof styles === 'function') {
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["T"].Consumer, null, function (theme) {
      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])([styles(theme)]);
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])([styles]);
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_6__["StyleSheet"]({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["insertStyles"])(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var keyframes = function keyframes() {
  var insertable = _emotion_css__WEBPACK_IMPORTED_MODULE_7__["default"].apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = Object(_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["w"])(function (props, context) {
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["T"].Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])(args, context.registered);

      {
        Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["insertStyles"])(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    return ele;
  });
});




/***/ }),

/***/ "./node_modules/@emotion/core/dist/emotion-element-57a3a7a3.browser.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@emotion/core/dist/emotion-element-57a3a7a3.browser.esm.js ***!
  \*********************************************************************************/
/*! exports provided: C, E, T, c, h, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return Emotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createEmotionProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasOwnProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return withEmotionCache; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");






var hasOwnProperty = Object.prototype.hasOwnProperty;

var EmotionCacheContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_2__["default"])() : null);
var ThemeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // TODO: check if this still works with all of those different JSX functions

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|Module\.|)(?:jsx|createEmotionProps).*\n\s+at (?:Object\.|)([A-Z][A-Za-z$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  return newProps;
};

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(registeredStyles);

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(type, newProps);

  return ele;
}; // eslint-disable-next-line no-undef


var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  if (typeof props.css === 'function') {
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
}




/***/ }),

/***/ "./node_modules/@emotion/css/dist/css.browser.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/css/dist/css.browser.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_0__["serializeStyles"])(args);
}

/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmur2);


/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if ( true && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/sheet.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/utils/dist/utils.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/utils.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./node_modules/react-input-autosize/lib/AutosizeInput.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-input-autosize/lib/AutosizeInput.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId()
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'UNSAFE_componentWillReceiveProps',
		value: function UNSAFE_componentWillReceiveProps(nextProps) {
			var id = nextProps.id;

			if (id !== this.props.id) {
				this.setState({ inputId: id || generateId() });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;

/***/ }),

/***/ "./node_modules/react-select/dist/Select-9fdb8cd0.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-select/dist/Select-9fdb8cd0.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: S, a, c, d, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return mergeStyles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils-06b0d5a4.browser.esm.js */ "./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js");
/* harmony import */ var _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-4322c0ed.browser.esm.js */ "./node_modules/react-select/dist/index-4322c0ed.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");








var diacritics = [{
  base: 'A',
  letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
}, {
  base: 'AA',
  letters: /[\uA732]/g
}, {
  base: 'AE',
  letters: /[\u00C6\u01FC\u01E2]/g
}, {
  base: 'AO',
  letters: /[\uA734]/g
}, {
  base: 'AU',
  letters: /[\uA736]/g
}, {
  base: 'AV',
  letters: /[\uA738\uA73A]/g
}, {
  base: 'AY',
  letters: /[\uA73C]/g
}, {
  base: 'B',
  letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
}, {
  base: 'C',
  letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
}, {
  base: 'D',
  letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
}, {
  base: 'DZ',
  letters: /[\u01F1\u01C4]/g
}, {
  base: 'Dz',
  letters: /[\u01F2\u01C5]/g
}, {
  base: 'E',
  letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
}, {
  base: 'F',
  letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
}, {
  base: 'G',
  letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
}, {
  base: 'H',
  letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
}, {
  base: 'I',
  letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
}, {
  base: 'J',
  letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
}, {
  base: 'K',
  letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
}, {
  base: 'L',
  letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
}, {
  base: 'LJ',
  letters: /[\u01C7]/g
}, {
  base: 'Lj',
  letters: /[\u01C8]/g
}, {
  base: 'M',
  letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
}, {
  base: 'N',
  letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
}, {
  base: 'NJ',
  letters: /[\u01CA]/g
}, {
  base: 'Nj',
  letters: /[\u01CB]/g
}, {
  base: 'O',
  letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
}, {
  base: 'OI',
  letters: /[\u01A2]/g
}, {
  base: 'OO',
  letters: /[\uA74E]/g
}, {
  base: 'OU',
  letters: /[\u0222]/g
}, {
  base: 'P',
  letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
}, {
  base: 'Q',
  letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
}, {
  base: 'R',
  letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
}, {
  base: 'S',
  letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
}, {
  base: 'T',
  letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
}, {
  base: 'TZ',
  letters: /[\uA728]/g
}, {
  base: 'U',
  letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
}, {
  base: 'V',
  letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
}, {
  base: 'VY',
  letters: /[\uA760]/g
}, {
  base: 'W',
  letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
}, {
  base: 'X',
  letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
}, {
  base: 'Y',
  letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
}, {
  base: 'Z',
  letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
}, {
  base: 'a',
  letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
}, {
  base: 'aa',
  letters: /[\uA733]/g
}, {
  base: 'ae',
  letters: /[\u00E6\u01FD\u01E3]/g
}, {
  base: 'ao',
  letters: /[\uA735]/g
}, {
  base: 'au',
  letters: /[\uA737]/g
}, {
  base: 'av',
  letters: /[\uA739\uA73B]/g
}, {
  base: 'ay',
  letters: /[\uA73D]/g
}, {
  base: 'b',
  letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
}, {
  base: 'c',
  letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
}, {
  base: 'd',
  letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
}, {
  base: 'dz',
  letters: /[\u01F3\u01C6]/g
}, {
  base: 'e',
  letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
}, {
  base: 'f',
  letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
}, {
  base: 'g',
  letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
}, {
  base: 'h',
  letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
}, {
  base: 'hv',
  letters: /[\u0195]/g
}, {
  base: 'i',
  letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
}, {
  base: 'j',
  letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
}, {
  base: 'k',
  letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
}, {
  base: 'l',
  letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
}, {
  base: 'lj',
  letters: /[\u01C9]/g
}, {
  base: 'm',
  letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
}, {
  base: 'n',
  letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
}, {
  base: 'nj',
  letters: /[\u01CC]/g
}, {
  base: 'o',
  letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
}, {
  base: 'oi',
  letters: /[\u01A3]/g
}, {
  base: 'ou',
  letters: /[\u0223]/g
}, {
  base: 'oo',
  letters: /[\uA74F]/g
}, {
  base: 'p',
  letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
}, {
  base: 'q',
  letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
}, {
  base: 'r',
  letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
}, {
  base: 's',
  letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
}, {
  base: 't',
  letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
}, {
  base: 'tz',
  letters: /[\uA729]/g
}, {
  base: 'u',
  letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
}, {
  base: 'v',
  letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
}, {
  base: 'vy',
  letters: /[\uA761]/g
}, {
  base: 'w',
  letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
}, {
  base: 'x',
  letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
}, {
  base: 'y',
  letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
}, {
  base: 'z',
  letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
}];
var stripDiacritics = function stripDiacritics(str) {
  for (var i = 0; i < diacritics.length; i++) {
    str = str.replace(diacritics[i].letters, diacritics[i].base);
  }

  return str;
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var defaultStringify = function defaultStringify(option) {
  return option.label + " " + option.value;
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = _extends({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
      candidate = stripDiacritics(candidate);
    }

    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var _ref =  false ? undefined : {
  name: "1laao21-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFNIiwiZmlsZSI6IkExMXlUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgdHlwZSBFbGVtZW50Q29uZmlnIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbi8vIEFzc2lzdGl2ZSB0ZXh0IHRvIGRlc2NyaWJlIHZpc3VhbCBlbGVtZW50cy4gSGlkZGVuIGZvciBzaWdodGVkIHVzZXJzLlxuY29uc3QgQTExeVRleHQgPSAocHJvcHM6IEVsZW1lbnRDb25maWc8J3NwYW4nPikgPT4gKFxuICAgIDxzcGFuXG4gICAgICBjc3M9e3tcbiAgICAgICAgbGFiZWw6ICdhMTF5VGV4dCcsXG4gICAgICAgIHpJbmRleDogOTk5OSxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpJyxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBMTF5VGV4dDtcbiJdfQ== */"
};

var A11yText = function A11yText(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", _extends$1({
    css: _ref
  }, props));
};

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function DummyInput(_ref) {
  var inProp = _ref.in,
      out = _ref.out,
      onExited = _ref.onExited,
      appear = _ref.appear,
      enter = _ref.enter,
      exit = _ref.exit,
      innerRef = _ref.innerRef,
      emotion = _ref.emotion,
      props = _objectWithoutPropertiesLoose(_ref, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("input", _extends$2({
    ref: innerRef
  }, props, {
    css:
    /*#__PURE__*/
    Object(_emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"])({
      label: 'dummyInput',
      // get rid of any default styles
      background: 0,
      border: 0,
      fontSize: 'inherit',
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: 'transparent',
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: 'relative',
      transform: 'scale(0)'
    },  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJNIiwiZmlsZSI6IkR1bW15SW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHVtbXlJbnB1dCh7XG4gIGluOiBpblByb3AsXG4gIG91dCxcbiAgb25FeGl0ZWQsXG4gIGFwcGVhcixcbiAgZW50ZXIsXG4gIGV4aXQsXG4gIGlubmVyUmVmLFxuICBlbW90aW9uLFxuICAuLi5wcm9wc1xufTogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgey4uLnByb3BzfVxuICAgICAgY3NzPXt7XG4gICAgICAgIGxhYmVsOiAnZHVtbXlJbnB1dCcsXG4gICAgICAgIC8vIGdldCByaWQgb2YgYW55IGRlZmF1bHQgc3R5bGVzXG4gICAgICAgIGJhY2tncm91bmQ6IDAsXG4gICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgICAgb3V0bGluZTogMCxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgLy8gaW1wb3J0YW50ISB3aXRob3V0IGB3aWR0aGAgYnJvd3NlcnMgd29uJ3QgYWxsb3cgZm9jdXNcbiAgICAgICAgd2lkdGg6IDEsXG5cbiAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBkZXNrdG9wXG4gICAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gbW9iaWxlIHdoaWxzdCBtYWludGFpbmluZyBcInNjcm9sbCBpbnRvIHZpZXdcIiBiZWhhdmlvdXJcbiAgICAgICAgbGVmdDogLTEwMCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ== */")
  }));
}

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var NodeResolver =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(NodeResolver, _Component);

  function NodeResolver() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = NodeResolver.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.innerRef(Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(this));
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.innerRef(null);
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return NodeResolver;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
} // `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

function _inheritsLoose$1(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
var canUseDOM = !!( window.document && window.document.createElement);
var activeScrollLocks = 0;

var ScrollLock =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$1(ScrollLock, _Component);

  function ScrollLock() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.originalStyles = {};
    _this.listenerOptions = {
      capture: false,
      passive: false
    };
    return _this;
  }

  var _proto = ScrollLock.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (!canUseDOM) return;
    var _this$props = this.props,
        accountForScrollbars = _this$props.accountForScrollbars,
        touchScrollTarget = _this$props.touchScrollTarget;
    var target = document.body;
    var targetStyle = target && target.style;

    if (accountForScrollbars) {
      // store any styles already applied to the body
      STYLE_KEYS.forEach(function (key) {
        var val = targetStyle && targetStyle[key];
        _this2.originalStyles[key] = val;
      });
    } // apply the lock styles and padding if this is the first scroll lock


    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function (key) {
        var val = LOCK_STYLES[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });

      if (targetStyle) {
        targetStyle.paddingRight = adjustedPadding + "px";
      }
    } // account for touch devices


    if (target && isTouchDevice()) {
      // Mobile Safari ignores { overflow: hidden } declaration on the body.
      target.addEventListener('touchmove', preventTouchMove, this.listenerOptions); // Allow scroll on provided target

      if (touchScrollTarget) {
        touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
        touchScrollTarget.addEventListener('touchmove', allowTouchMove, this.listenerOptions);
      }
    } // increment active scroll locks


    activeScrollLocks += 1;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this3 = this;

    if (!canUseDOM) return;
    var _this$props2 = this.props,
        accountForScrollbars = _this$props2.accountForScrollbars,
        touchScrollTarget = _this$props2.touchScrollTarget;
    var target = document.body;
    var targetStyle = target && target.style; // safely decrement active scroll locks

    activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function (key) {
        var val = _this3.originalStyles[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    } // remove touch listeners


    if (target && isTouchDevice()) {
      target.removeEventListener('touchmove', preventTouchMove, this.listenerOptions);

      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
        touchScrollTarget.removeEventListener('touchmove', allowTouchMove, this.listenerOptions);
      }
    }
  };

  _proto.render = function render() {
    return null;
  };

  return ScrollLock;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ScrollLock.defaultProps = {
  accountForScrollbars: true
};

function _inheritsLoose$2(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var _ref$1 =  false ? undefined : {
  name: "1dsbpcp",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbEJsb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEVSIsImZpbGUiOiJTY3JvbGxCbG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFB1cmVDb21wb25lbnQsIHR5cGUgRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IE5vZGVSZXNvbHZlciBmcm9tICcuL05vZGVSZXNvbHZlcic7XG5pbXBvcnQgU2Nyb2xsTG9jayBmcm9tICcuL1Njcm9sbExvY2svaW5kZXgnO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogRWxlbWVudDwqPixcbiAgaXNFbmFibGVkOiBib29sZWFuLFxufTtcbnR5cGUgU3RhdGUgPSB7XG4gIHRvdWNoU2Nyb2xsVGFyZ2V0OiBIVE1MRWxlbWVudCB8IG51bGwsXG59O1xuXG4vLyBOT1RFOlxuLy8gV2Ugc2hvdWxkbid0IG5lZWQgdGhpcyBhZnRlciB1cGRhdGluZyB0byBSZWFjdCB2MTYuMy4wLCB3aGljaCBpbnRyb2R1Y2VzOlxuLy8gLSBjcmVhdGVSZWYoKSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjcmVhdGVyZWZcbi8vIC0gZm9yd2FyZFJlZigpIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGZvcndhcmRyZWZcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsQmxvY2sgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0ZSA9IHsgdG91Y2hTY3JvbGxUYXJnZXQ6IG51bGwgfTtcblxuICAvLyBtdXN0IGJlIGluIHN0YXRlIHRvIHRyaWdnZXIgYSByZS1yZW5kZXIsIG9ubHkgcnVucyBvbmNlIHBlciBpbnN0YW5jZVxuICBnZXRTY3JvbGxUYXJnZXQgPSAocmVmOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlmIChyZWYgPT09IHRoaXMuc3RhdGUudG91Y2hTY3JvbGxUYXJnZXQpIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKHsgdG91Y2hTY3JvbGxUYXJnZXQ6IHJlZiB9KTtcbiAgfTtcblxuICAvLyB0aGlzIHdpbGwgY2xvc2UgdGhlIG1lbnUgd2hlbiBhIHVzZXIgY2xpY2tzIG91dHNpZGVcbiAgYmx1clNlbGVjdElucHV0ID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGlzRW5hYmxlZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRvdWNoU2Nyb2xsVGFyZ2V0IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgLy8gYmFpbCBlYXJseSBpZiBub3QgZW5hYmxlZFxuICAgIGlmICghaXNFbmFibGVkKSByZXR1cm4gY2hpbGRyZW47XG5cbiAgICAvKlxuICAgICAqIERpdlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIGJsb2NrcyBzY3JvbGxpbmcgb24gbm9uLWJvZHkgZWxlbWVudHMgYmVoaW5kIHRoZSBtZW51XG5cbiAgICAgKiBOb2RlUmVzb2x2ZXJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiB3ZSBuZWVkIGEgcmVmZXJlbmNlIHRvIHRoZSBzY3JvbGxhYmxlIGVsZW1lbnQgdG8gXCJ1bmxvY2tcIiBzY3JvbGwgb25cbiAgICAgKiBtb2JpbGUgZGV2aWNlc1xuXG4gICAgICogU2Nyb2xsTG9ja1xuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIGFjdHVhbGx5IGRvZXMgdGhlIHNjcm9sbCBsb2NraW5nXG4gICAgICovXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmJsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgICA8Tm9kZVJlc29sdmVyIGlubmVyUmVmPXt0aGlzLmdldFNjcm9sbFRhcmdldH0+e2NoaWxkcmVufTwvTm9kZVJlc29sdmVyPlxuICAgICAgICB7dG91Y2hTY3JvbGxUYXJnZXQgPyAoXG4gICAgICAgICAgPFNjcm9sbExvY2sgdG91Y2hTY3JvbGxUYXJnZXQ9e3RvdWNoU2Nyb2xsVGFyZ2V0fSAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"
};

// NOTE:
// We shouldn't need this after updating to React v16.3.0, which introduces:
// - createRef() https://reactjs.org/docs/react-api.html#reactcreateref
// - forwardRef() https://reactjs.org/docs/react-api.html#reactforwardref
var ScrollBlock =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose$2(ScrollBlock, _PureComponent);

  function ScrollBlock() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.state = {
      touchScrollTarget: null
    };

    _this.getScrollTarget = function (ref) {
      if (ref === _this.state.touchScrollTarget) return;

      _this.setState({
        touchScrollTarget: ref
      });
    };

    _this.blurSelectInput = function () {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    };

    return _this;
  }

  var _proto = ScrollBlock.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        isEnabled = _this$props.isEnabled;
    var touchScrollTarget = this.state.touchScrollTarget; // bail early if not enabled

    if (!isEnabled) return children;
    /*
     * Div
     * ------------------------------
     * blocks scrolling on non-body elements behind the menu
      * NodeResolver
     * ------------------------------
     * we need a reference to the scrollable element to "unlock" scroll on
     * mobile devices
      * ScrollLock
     * ------------------------------
     * actually does the scroll locking
     */

    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      onClick: this.blurSelectInput,
      css: _ref$1
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(NodeResolver, {
      innerRef: this.getScrollTarget
    }, children), touchScrollTarget ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(ScrollLock, {
      touchScrollTarget: touchScrollTarget
    }) : null);
  };

  return ScrollBlock;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$3(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ScrollCaptor =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$3(ScrollCaptor, _Component);

  function ScrollCaptor() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.isBottom = false;
    _this.isTop = false;
    _this.scrollTarget = void 0;
    _this.touchStart = void 0;

    _this.cancelScroll = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };

    _this.handleEventDelta = function (event, delta) {
      var _this$props = _this.props,
          onBottomArrive = _this$props.onBottomArrive,
          onBottomLeave = _this$props.onBottomLeave,
          onTopArrive = _this$props.onTopArrive,
          onTopLeave = _this$props.onTopLeave;
      var _this$scrollTarget = _this.scrollTarget,
          scrollTop = _this$scrollTarget.scrollTop,
          scrollHeight = _this$scrollTarget.scrollHeight,
          clientHeight = _this$scrollTarget.clientHeight;
      var target = _this.scrollTarget;
      var isDeltaPositive = delta > 0;
      var availableScroll = scrollHeight - clientHeight - scrollTop;
      var shouldCancelScroll = false; // reset bottom/top flags

      if (availableScroll > delta && _this.isBottom) {
        if (onBottomLeave) onBottomLeave(event);
        _this.isBottom = false;
      }

      if (isDeltaPositive && _this.isTop) {
        if (onTopLeave) onTopLeave(event);
        _this.isTop = false;
      } // bottom limit


      if (isDeltaPositive && delta > availableScroll) {
        if (onBottomArrive && !_this.isBottom) {
          onBottomArrive(event);
        }

        target.scrollTop = scrollHeight;
        shouldCancelScroll = true;
        _this.isBottom = true; // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        if (onTopArrive && !_this.isTop) {
          onTopArrive(event);
        }

        target.scrollTop = 0;
        shouldCancelScroll = true;
        _this.isTop = true;
      } // cancel scroll


      if (shouldCancelScroll) {
        _this.cancelScroll(event);
      }
    };

    _this.onWheel = function (event) {
      _this.handleEventDelta(event, event.deltaY);
    };

    _this.onTouchStart = function (event) {
      // set touch start so we can calculate touchmove delta
      _this.touchStart = event.changedTouches[0].clientY;
    };

    _this.onTouchMove = function (event) {
      var deltaY = _this.touchStart - event.changedTouches[0].clientY;

      _this.handleEventDelta(event, deltaY);
    };

    _this.getScrollTarget = function (ref) {
      _this.scrollTarget = ref;
    };

    return _this;
  }

  var _proto = ScrollCaptor.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.startListening(this.scrollTarget);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.stopListening(this.scrollTarget);
  };

  _proto.startListening = function startListening(el) {
    // bail early if no element is available to attach to
    if (!el) return; // all the if statements are to appease Flow 😢

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('wheel', this.onWheel, false);
    }

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('touchstart', this.onTouchStart, false);
    }

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('touchmove', this.onTouchMove, false);
    }
  };

  _proto.stopListening = function stopListening(el) {
    // all the if statements are to appease Flow 😢
    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('wheel', this.onWheel, false);
    }

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('touchstart', this.onTouchStart, false);
    }

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('touchmove', this.onTouchMove, false);
    }
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NodeResolver, {
      innerRef: this.getScrollTarget
    }, this.props.children);
  };

  return ScrollCaptor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function ScrollCaptorSwitch(_ref) {
  var _ref$isEnabled = _ref.isEnabled,
      isEnabled = _ref$isEnabled === void 0 ? true : _ref$isEnabled,
      props = _objectWithoutPropertiesLoose$1(_ref, ["isEnabled"]);

  return isEnabled ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollCaptor, props) : props.children;
}

var instructionsAriaMessage = function instructionsAriaMessage(event, context) {
  if (context === void 0) {
    context = {};
  }

  var _context = context,
      isSearchable = _context.isSearchable,
      isMulti = _context.isMulti,
      label = _context.label,
      isDisabled = _context.isDisabled;

  switch (event) {
    case 'menu':
      return "Use Up and Down to choose options" + (isDisabled ? '' : ', press Enter to select the currently focused option') + ", press Escape to exit the menu, press Tab to select the option and exit the menu.";

    case 'input':
      return (label ? label : 'Select') + " is focused " + (isSearchable ? ',type to refine list' : '') + ", press Down to open the menu, " + (isMulti ? ' press left to focus selected values' : '');

    case 'value':
      return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
  }
};
var valueEventAriaMessage = function valueEventAriaMessage(event, context) {
  var value = context.value,
      isDisabled = context.isDisabled;
  if (!value) return;

  switch (event) {
    case 'deselect-option':
    case 'pop-value':
    case 'remove-value':
      return "option " + value + ", deselected.";

    case 'select-option':
      return isDisabled ? "option " + value + " is disabled. Select another option." : "option " + value + ", selected.";
  }
};
var valueFocusAriaMessage = function valueFocusAriaMessage(_ref) {
  var focusedValue = _ref.focusedValue,
      getOptionLabel = _ref.getOptionLabel,
      selectValue = _ref.selectValue;
  return "value " + getOptionLabel(focusedValue) + " focused, " + (selectValue.indexOf(focusedValue) + 1) + " of " + selectValue.length + ".";
};
var optionFocusAriaMessage = function optionFocusAriaMessage(_ref2) {
  var focusedOption = _ref2.focusedOption,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options;
  return "option " + getOptionLabel(focusedOption) + " focused" + (focusedOption.isDisabled ? ' disabled' : '') + ", " + (options.indexOf(focusedOption) + 1) + " of " + options.length + ".";
};
var resultsAriaMessage = function resultsAriaMessage(_ref3) {
  var inputValue = _ref3.inputValue,
      screenReaderMessage = _ref3.screenReaderMessage;
  return "" + screenReaderMessage + (inputValue ? ' for search term ' + inputValue : '') + ".";
};

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var defaultStyles = {
  clearIndicator: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["c"],
  container: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["a"],
  control: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["b"],
  dropdownIndicator: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["d"],
  group: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["g"],
  groupHeading: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["e"],
  indicatorsContainer: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["i"],
  indicatorSeparator: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["f"],
  input: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["h"],
  loadingIndicator: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["l"],
  loadingMessage: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["j"],
  menu: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["m"],
  menuList: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["k"],
  menuPortal: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["n"],
  multiValue: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["o"],
  multiValueLabel: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["p"],
  multiValueRemove: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["q"],
  noOptionsMessage: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["r"],
  option: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["s"],
  placeholder: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["t"],
  singleValue: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["u"],
  valueContainer: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["v"]
}; // Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source, target) {
  if (target === void 0) {
    target = {};
  }

  // initialize with source styles
  var styles = _extends$3({}, source); // massage in target styles


  Object.keys(target).forEach(function (key) {
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4; // Used to calculate consistent margin/padding on elements

var baseUnit = 4; // The minimum height of the control

var controlHeight = 38; // The amount of space between the control and menu */

var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _inheritsLoose$4(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
var defaultProps = {
  backspaceRemovesValue: true,
  blurInputOnSelect: Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["i"])(),
  captureMenuScroll: !Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["i"])(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["d"])(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return count + " result" + (count !== 1 ? 's' : '') + " available";
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};
var instanceId = 1;

var Select =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$4(Select, _Component);

  // Misc. Instance Properties
  // ------------------------------
  // TODO
  // Refs
  // ------------------------------
  // Lifecycle
  // ------------------------------
  function Select(_props) {
    var _this;

    _this = _Component.call(this, _props) || this;
    _this.state = {
      ariaLiveSelection: '',
      ariaLiveContext: '',
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      menuOptions: {
        render: [],
        focusable: []
      },
      selectValue: []
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.clearFocusValueOnUpdate = false;
    _this.commonProps = void 0;
    _this.components = void 0;
    _this.hasGroups = false;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.inputIsHiddenAfterUpdate = void 0;
    _this.instancePrefix = '';
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;

    _this.getControlRef = function (ref) {
      _this.controlRef = ref;
    };

    _this.focusedOptionRef = null;

    _this.getFocusedOptionRef = function (ref) {
      _this.focusedOptionRef = ref;
    };

    _this.menuListRef = null;

    _this.getMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };

    _this.inputRef = null;

    _this.getInputRef = function (ref) {
      _this.inputRef = ref;
    };

    _this.cacheComponents = function (components) {
      _this.components = Object(_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["w"])({
        components: components
      });
    };

    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;

    _this.onChange = function (newValue, actionMeta) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
      onChange(newValue, _extends$4({}, actionMeta, {
        name: name
      }));
    };

    _this.setValue = function (newValue, action, option) {
      if (action === void 0) {
        action = 'set-value';
      }

      var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti;

      _this.onInputChange('', {
        action: 'set-value'
      });

      if (closeMenuOnSelect) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } // when the select value should change, we should reset focusedValue


      _this.clearFocusValueOnUpdate = true;

      _this.onChange(newValue, {
        action: action,
        option: option
      });
    };

    _this.selectOption = function (newValue) {
      var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti;
      var selectValue = _this.state.selectValue;

      if (isMulti) {
        if (_this.isOptionSelected(newValue, selectValue)) {
          var candidate = _this.getOptionValue(newValue);

          _this.setValue(selectValue.filter(function (i) {
            return _this.getOptionValue(i) !== candidate;
          }), 'deselect-option', newValue);

          _this.announceAriaLiveSelection({
            event: 'deselect-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          if (!_this.isOptionDisabled(newValue, selectValue)) {
            _this.setValue([].concat(selectValue, [newValue]), 'select-option', newValue);

            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue)
              }
            });
          } else {
            // announce that option is disabled
            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue),
                isDisabled: true
              }
            });
          }
        }
      } else {
        if (!_this.isOptionDisabled(newValue, selectValue)) {
          _this.setValue(newValue, 'select-option');

          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          // announce that option is disabled
          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue),
              isDisabled: true
            }
          });
        }
      }

      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };

    _this.removeValue = function (removedValue) {
      var selectValue = _this.state.selectValue;

      var candidate = _this.getOptionValue(removedValue);

      var newValue = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });

      _this.onChange(newValue.length ? newValue : null, {
        action: 'remove-value',
        removedValue: removedValue
      });

      _this.announceAriaLiveSelection({
        event: 'remove-value',
        context: {
          value: removedValue ? _this.getOptionLabel(removedValue) : ''
        }
      });

      _this.focusInput();
    };

    _this.clearValue = function () {
      var isMulti = _this.props.isMulti;

      _this.onChange(isMulti ? [] : null, {
        action: 'clear'
      });
    };

    _this.popValue = function () {
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValue = selectValue.slice(0, selectValue.length - 1);

      _this.announceAriaLiveSelection({
        event: 'pop-value',
        context: {
          value: lastSelectedValue ? _this.getOptionLabel(lastSelectedValue) : ''
        }
      });

      _this.onChange(newValue.length ? newValue : null, {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    };

    _this.getOptionLabel = function (data) {
      return _this.props.getOptionLabel(data);
    };

    _this.getOptionValue = function (data) {
      return _this.props.getOptionValue(data);
    };

    _this.getStyles = function (key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };

    _this.getElementId = function (element) {
      return _this.instancePrefix + "-" + element;
    };

    _this.getActiveDescendentId = function () {
      var menuIsOpen = _this.props.menuIsOpen;
      var _this$state = _this.state,
          menuOptions = _this$state.menuOptions,
          focusedOption = _this$state.focusedOption;
      if (!focusedOption || !menuIsOpen) return undefined;
      var index = menuOptions.focusable.indexOf(focusedOption);
      var option = menuOptions.render[index];
      return option && option.key;
    };

    _this.announceAriaLiveSelection = function (_ref2) {
      var event = _ref2.event,
          context = _ref2.context;

      _this.setState({
        ariaLiveSelection: valueEventAriaMessage(event, context)
      });
    };

    _this.announceAriaLiveContext = function (_ref3) {
      var event = _ref3.event,
          context = _ref3.context;

      _this.setState({
        ariaLiveContext: instructionsAriaMessage(event, _extends$4({}, context, {
          label: _this.props['aria-label']
        }))
      });
    };

    _this.onMenuMouseDown = function (event) {
      if (event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.focusInput();
    };

    _this.onMenuMouseMove = function (event) {
      _this.blockOptionHover = false;
    };

    _this.onControlMouseDown = function (event) {
      var openMenuOnClick = _this.props.openMenuOnClick;

      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }

        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        if ( // $FlowFixMe
        event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          _this.onMenuClose();
        }
      }

      if ( // $FlowFixMe
      event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
      }
    };

    _this.onDropdownIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;

      _this.focusInput();

      if (menuIsOpen) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }

      event.preventDefault();
      event.stopPropagation();
    };

    _this.onClearIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      _this.clearValue();

      event.stopPropagation();
      _this.openAfterFocus = false;

      if (event.type === 'touchend') {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    };

    _this.onScroll = function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["j"])(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };

    _this.onCompositionStart = function () {
      _this.isComposing = true;
    };

    _this.onCompositionEnd = function () {
      _this.isComposing = false;
    };

    _this.onTouchStart = function (_ref4) {
      var touches = _ref4.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };

    _this.onTouchMove = function (_ref5) {
      var touches = _ref5.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };

    _this.onTouchEnd = function (event) {
      if (_this.userIsDragging) return; // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).

      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      } // reset move vars


      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };

    _this.onControlTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onControlMouseDown(event);
    };

    _this.onClearIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onClearIndicatorMouseDown(event);
    };

    _this.onDropdownIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onDropdownIndicatorMouseDown(event);
    };

    _this.handleInputChange = function (event) {
      var inputValue = event.currentTarget.value;
      _this.inputIsHiddenAfterUpdate = false;

      _this.onInputChange(inputValue, {
        action: 'input-change'
      });

      _this.onMenuOpen();
    };

    _this.onInputFocus = function (event) {
      var _this$props5 = _this.props,
          isSearchable = _this$props5.isSearchable,
          isMulti = _this$props5.isMulti;

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.inputIsHiddenAfterUpdate = false;

      _this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });

      _this.setState({
        isFocused: true
      });

      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }

      _this.openAfterFocus = false;
    };

    _this.onInputBlur = function (event) {
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();

        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.onInputChange('', {
        action: 'input-blur'
      });

      _this.onMenuClose();

      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };

    _this.onOptionHover = function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }

      _this.setState({
        focusedOption: focusedOption
      });
    };

    _this.shouldHideSelectedOptions = function () {
      var _this$props6 = _this.props,
          hideSelectedOptions = _this$props6.hideSelectedOptions,
          isMulti = _this$props6.isMulti;
      if (hideSelectedOptions === undefined) return isMulti;
      return hideSelectedOptions;
    };

    _this.onKeyDown = function (event) {
      var _this$props7 = _this.props,
          isMulti = _this$props7.isMulti,
          backspaceRemovesValue = _this$props7.backspaceRemovesValue,
          escapeClearsValue = _this$props7.escapeClearsValue,
          inputValue = _this$props7.inputValue,
          isClearable = _this$props7.isClearable,
          isDisabled = _this$props7.isDisabled,
          menuIsOpen = _this$props7.menuIsOpen,
          onKeyDown = _this$props7.onKeyDown,
          tabSelectsValue = _this$props7.tabSelectsValue,
          openMenuOnFocus = _this$props7.openMenuOnFocus;
      var _this$state2 = _this.state,
          focusedOption = _this$state2.focusedOption,
          focusedValue = _this$state2.focusedValue,
          selectValue = _this$state2.selectValue;
      if (isDisabled) return;

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      } // Block option hover events when the user has just pressed a key


      _this.blockOptionHover = true;

      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;

          _this.focusValue('previous');

          break;

        case 'ArrowRight':
          if (!isMulti || inputValue) return;

          _this.focusValue('next');

          break;

        case 'Delete':
        case 'Backspace':
          if (inputValue) return;

          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;

            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }

          break;

        case 'Tab':
          if (_this.isComposing) return;

          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }

          _this.selectOption(focusedOption);

          break;

        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }

          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;

            _this.selectOption(focusedOption);

            break;
          }

          return;

        case 'Escape':
          if (menuIsOpen) {
            _this.inputIsHiddenAfterUpdate = false;

            _this.onInputChange('', {
              action: 'menu-close'
            });

            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }

          break;

        case ' ':
          // space
          if (inputValue) {
            return;
          }

          if (!menuIsOpen) {
            _this.openMenu('first');

            break;
          }

          if (!focusedOption) return;

          _this.selectOption(focusedOption);

          break;

        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }

          break;

        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }

          break;

        case 'PageUp':
          if (!menuIsOpen) return;

          _this.focusOption('pageup');

          break;

        case 'PageDown':
          if (!menuIsOpen) return;

          _this.focusOption('pagedown');

          break;

        case 'Home':
          if (!menuIsOpen) return;

          _this.focusOption('first');

          break;

        case 'End':
          if (!menuIsOpen) return;

          _this.focusOption('last');

          break;

        default:
          return;
      }

      event.preventDefault();
    };

    _this.buildMenuOptions = function (props, selectValue) {
      var _props$inputValue = props.inputValue,
          inputValue = _props$inputValue === void 0 ? '' : _props$inputValue,
          options = props.options;

      var toOption = function toOption(option, id) {
        var isDisabled = _this.isOptionDisabled(option, selectValue);

        var isSelected = _this.isOptionSelected(option, selectValue);

        var label = _this.getOptionLabel(option);

        var value = _this.getOptionValue(option);

        if (_this.shouldHideSelectedOptions() && isSelected || !_this.filterOption({
          label: label,
          value: value,
          data: option
        }, inputValue)) {
          return;
        }

        var onHover = isDisabled ? undefined : function () {
          return _this.onOptionHover(option);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this.selectOption(option);
        };
        var optionId = _this.getElementId('option') + "-" + id;
        return {
          innerProps: {
            id: optionId,
            onClick: onSelect,
            onMouseMove: onHover,
            onMouseOver: onHover,
            tabIndex: -1
          },
          data: option,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: 'option',
          value: value
        };
      };

      return options.reduce(function (acc, item, itemIndex) {
        if (item.options) {
          // TODO needs a tidier implementation
          if (!_this.hasGroups) _this.hasGroups = true;
          var items = item.options;
          var children = items.map(function (child, i) {
            var option = toOption(child, itemIndex + "-" + i);
            if (option) acc.focusable.push(child);
            return option;
          }).filter(Boolean);

          if (children.length) {
            var groupId = _this.getElementId('group') + "-" + itemIndex;
            acc.render.push({
              type: 'group',
              key: groupId,
              data: item,
              options: children
            });
          }
        } else {
          var option = toOption(item, "" + itemIndex);

          if (option) {
            acc.render.push(option);
            acc.focusable.push(item);
          }
        }

        return acc;
      }, {
        render: [],
        focusable: []
      });
    };

    var _value = _props.value;
    _this.cacheComponents = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.cacheComponents, _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["x"]).bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.cacheComponents(_props.components);

    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);

    var _selectValue = Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["e"])(_value);

    _this.buildMenuOptions = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.buildMenuOptions, function (newArgs, lastArgs) {
      var _ref6 = newArgs,
          newProps = _ref6[0],
          newSelectValue = _ref6[1];
      var _ref7 = lastArgs,
          lastProps = _ref7[0],
          lastSelectValue = _ref7[1];
      return Object(_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["x"])(newSelectValue, lastSelectValue) && Object(_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["x"])(newProps.inputValue, lastProps.inputValue) && Object(_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["x"])(newProps.options, lastProps.options);
    }).bind(_assertThisInitialized(_assertThisInitialized(_this)));

    var _menuOptions = _props.menuIsOpen ? _this.buildMenuOptions(_props, _selectValue) : {
      render: [],
      focusable: []
    };

    _this.state.menuOptions = _menuOptions;
    _this.state.selectValue = _selectValue;
    return _this;
  }

  var _proto = Select.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.startListeningComposition();
    this.startListeningToTouch();

    if (this.props.closeMenuOnScroll && document && document.addEventListener) {
      // Listen to all scroll events, and filter them out inside of 'onScroll'
      document.addEventListener('scroll', this.onScroll, true);
    }

    if (this.props.autoFocus) {
      this.focusInput();
    }
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    var _this$props8 = this.props,
        options = _this$props8.options,
        value = _this$props8.value,
        menuIsOpen = _this$props8.menuIsOpen,
        inputValue = _this$props8.inputValue; // re-cache custom components

    this.cacheComponents(nextProps.components); // rebuild the menu options

    if (nextProps.value !== value || nextProps.options !== options || nextProps.menuIsOpen !== menuIsOpen || nextProps.inputValue !== inputValue) {
      var selectValue = Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["e"])(nextProps.value);
      var menuOptions = nextProps.menuIsOpen ? this.buildMenuOptions(nextProps, selectValue) : {
        render: [],
        focusable: []
      };
      var focusedValue = this.getNextFocusedValue(selectValue);
      var focusedOption = this.getNextFocusedOption(menuOptions.focusable);
      this.setState({
        menuOptions: menuOptions,
        selectValue: selectValue,
        focusedOption: focusedOption,
        focusedValue: focusedValue
      });
    } // some updates should toggle the state of the input visibility


    if (this.inputIsHiddenAfterUpdate != null) {
      this.setState({
        inputIsHidden: this.inputIsHiddenAfterUpdate
      });
      delete this.inputIsHiddenAfterUpdate;
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props9 = this.props,
        isDisabled = _this$props9.isDisabled,
        menuIsOpen = _this$props9.menuIsOpen;
    var isFocused = this.state.isFocused;

    if ( // ensure focus is restored correctly when the control becomes enabled
    isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
    isFocused && menuIsOpen && !prevProps.menuIsOpen) {
      this.focusInput();
    } // scroll the focused option into view if necessary


    if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
      Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["f"])(this.menuListRef, this.focusedOptionRef);
      this.scrollToFocusedOptionOnUpdate = false;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.stopListeningComposition();
    this.stopListeningToTouch();
    document.removeEventListener('scroll', this.onScroll, true);
  };

  // ==============================
  // Consumer Handlers
  // ==============================
  _proto.onMenuOpen = function onMenuOpen() {
    this.props.onMenuOpen();
  };

  _proto.onMenuClose = function onMenuClose() {
    var _this$props10 = this.props,
        isSearchable = _this$props10.isSearchable,
        isMulti = _this$props10.isMulti;
    this.announceAriaLiveContext({
      event: 'input',
      context: {
        isSearchable: isSearchable,
        isMulti: isMulti
      }
    });
    this.onInputChange('', {
      action: 'menu-close'
    });
    this.props.onMenuClose();
  };

  _proto.onInputChange = function onInputChange(newValue, actionMeta) {
    this.props.onInputChange(newValue, actionMeta);
  } // ==============================
  // Methods
  // ==============================
  ;

  _proto.focusInput = function focusInput() {
    if (!this.inputRef) return;
    this.inputRef.focus();
  };

  _proto.blurInput = function blurInput() {
    if (!this.inputRef) return;
    this.inputRef.blur();
  } // aliased for consumers
  ;

  _proto.openMenu = function openMenu(focusOption) {
    var _this2 = this;

    var _this$state3 = this.state,
        selectValue = _this$state3.selectValue,
        isFocused = _this$state3.isFocused;
    var menuOptions = this.buildMenuOptions(this.props, selectValue);
    var isMulti = this.props.isMulti;
    var openAtIndex = focusOption === 'first' ? 0 : menuOptions.focusable.length - 1;

    if (!isMulti) {
      var selectedIndex = menuOptions.focusable.indexOf(selectValue[0]);

      if (selectedIndex > -1) {
        openAtIndex = selectedIndex;
      }
    } // only scroll if the menu isn't already open


    this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
    this.inputIsHiddenAfterUpdate = false;
    this.setState({
      menuOptions: menuOptions,
      focusedValue: null,
      focusedOption: menuOptions.focusable[openAtIndex]
    }, function () {
      _this2.onMenuOpen();

      _this2.announceAriaLiveContext({
        event: 'menu'
      });
    });
  };

  _proto.focusValue = function focusValue(direction) {
    var _this$props11 = this.props,
        isMulti = _this$props11.isMulti,
        isSearchable = _this$props11.isSearchable;
    var _this$state4 = this.state,
        selectValue = _this$state4.selectValue,
        focusedValue = _this$state4.focusedValue; // Only multiselects support value focusing

    if (!isMulti) return;
    this.setState({
      focusedOption: null
    });
    var focusedIndex = selectValue.indexOf(focusedValue);

    if (!focusedValue) {
      focusedIndex = -1;
      this.announceAriaLiveContext({
        event: 'value'
      });
    }

    var lastIndex = selectValue.length - 1;
    var nextFocus = -1;
    if (!selectValue.length) return;

    switch (direction) {
      case 'previous':
        if (focusedIndex === 0) {
          // don't cycle from the start to the end
          nextFocus = 0;
        } else if (focusedIndex === -1) {
          // if nothing is focused, focus the last value first
          nextFocus = lastIndex;
        } else {
          nextFocus = focusedIndex - 1;
        }

        break;

      case 'next':
        if (focusedIndex > -1 && focusedIndex < lastIndex) {
          nextFocus = focusedIndex + 1;
        }

        break;
    }

    if (nextFocus === -1) {
      this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });
    }

    this.setState({
      inputIsHidden: nextFocus !== -1,
      focusedValue: selectValue[nextFocus]
    });
  };

  _proto.focusOption = function focusOption(direction) {
    if (direction === void 0) {
      direction = 'first';
    }

    var pageSize = this.props.pageSize;
    var _this$state5 = this.state,
        focusedOption = _this$state5.focusedOption,
        menuOptions = _this$state5.menuOptions;
    var options = menuOptions.focusable;
    if (!options.length) return;
    var nextFocus = 0; // handles 'first'

    var focusedIndex = options.indexOf(focusedOption);

    if (!focusedOption) {
      focusedIndex = -1;
      this.announceAriaLiveContext({
        event: 'menu'
      });
    }

    if (direction === 'up') {
      nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
    } else if (direction === 'down') {
      nextFocus = (focusedIndex + 1) % options.length;
    } else if (direction === 'pageup') {
      nextFocus = focusedIndex - pageSize;
      if (nextFocus < 0) nextFocus = 0;
    } else if (direction === 'pagedown') {
      nextFocus = focusedIndex + pageSize;
      if (nextFocus > options.length - 1) nextFocus = options.length - 1;
    } else if (direction === 'last') {
      nextFocus = options.length - 1;
    }

    this.scrollToFocusedOptionOnUpdate = true;
    this.setState({
      focusedOption: options[nextFocus],
      focusedValue: null
    });
    this.announceAriaLiveContext({
      event: 'menu',
      context: {
        isDisabled: isOptionDisabled(options[nextFocus])
      }
    });
  };

  // ==============================
  // Getters
  // ==============================
  _proto.getTheme = function getTheme() {
    // Use the default theme if there are no customizations.
    if (!this.props.theme) {
      return defaultTheme;
    } // If the theme prop is a function, assume the function
    // knows how to merge the passed-in default theme with
    // its own modifications.


    if (typeof this.props.theme === 'function') {
      return this.props.theme(defaultTheme);
    } // Otherwise, if a plain theme object was passed in,
    // overlay it with the default theme.


    return _extends$4({}, defaultTheme, this.props.theme);
  };

  _proto.getCommonProps = function getCommonProps() {
    var clearValue = this.clearValue,
        getStyles = this.getStyles,
        setValue = this.setValue,
        selectOption = this.selectOption,
        props = this.props;
    var classNamePrefix = props.classNamePrefix,
        isMulti = props.isMulti,
        isRtl = props.isRtl,
        options = props.options;
    var selectValue = this.state.selectValue;
    var hasValue = this.hasValue();

    var getValue = function getValue() {
      return selectValue;
    };

    var cx = _utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["h"].bind(null, classNamePrefix);
    return {
      cx: cx,
      clearValue: clearValue,
      getStyles: getStyles,
      getValue: getValue,
      hasValue: hasValue,
      isMulti: isMulti,
      isRtl: isRtl,
      options: options,
      selectOption: selectOption,
      setValue: setValue,
      selectProps: props,
      theme: this.getTheme()
    };
  };

  _proto.getNextFocusedValue = function getNextFocusedValue(nextSelectValue) {
    if (this.clearFocusValueOnUpdate) {
      this.clearFocusValueOnUpdate = false;
      return null;
    }

    var _this$state6 = this.state,
        focusedValue = _this$state6.focusedValue,
        lastSelectValue = _this$state6.selectValue;
    var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

    if (lastFocusedIndex > -1) {
      var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

      if (nextFocusedIndex > -1) {
        // the focused value is still in the selectValue, return it
        return focusedValue;
      } else if (lastFocusedIndex < nextSelectValue.length) {
        // the focusedValue is not present in the next selectValue array by
        // reference, so return the new value at the same index
        return nextSelectValue[lastFocusedIndex];
      }
    }

    return null;
  };

  _proto.getNextFocusedOption = function getNextFocusedOption(options) {
    var lastFocusedOption = this.state.focusedOption;
    return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
  };

  _proto.hasValue = function hasValue() {
    var selectValue = this.state.selectValue;
    return selectValue.length > 0;
  };

  _proto.hasOptions = function hasOptions() {
    return !!this.state.menuOptions.render.length;
  };

  _proto.countOptions = function countOptions() {
    return this.state.menuOptions.focusable.length;
  };

  _proto.isClearable = function isClearable() {
    var _this$props12 = this.props,
        isClearable = _this$props12.isClearable,
        isMulti = _this$props12.isMulti; // single select, by default, IS NOT clearable
    // multi select, by default, IS clearable

    if (isClearable === undefined) return isMulti;
    return isClearable;
  };

  _proto.isOptionDisabled = function isOptionDisabled(option, selectValue) {
    return typeof this.props.isOptionDisabled === 'function' ? this.props.isOptionDisabled(option, selectValue) : false;
  };

  _proto.isOptionSelected = function isOptionSelected(option, selectValue) {
    var _this3 = this;

    if (selectValue.indexOf(option) > -1) return true;

    if (typeof this.props.isOptionSelected === 'function') {
      return this.props.isOptionSelected(option, selectValue);
    }

    var candidate = this.getOptionValue(option);
    return selectValue.some(function (i) {
      return _this3.getOptionValue(i) === candidate;
    });
  };

  _proto.filterOption = function filterOption(option, inputValue) {
    return this.props.filterOption ? this.props.filterOption(option, inputValue) : true;
  };

  _proto.formatOptionLabel = function formatOptionLabel(data, context) {
    if (typeof this.props.formatOptionLabel === 'function') {
      var inputValue = this.props.inputValue;
      var selectValue = this.state.selectValue;
      return this.props.formatOptionLabel(data, {
        context: context,
        inputValue: inputValue,
        selectValue: selectValue
      });
    } else {
      return this.getOptionLabel(data);
    }
  };

  _proto.formatGroupLabel = function formatGroupLabel(data) {
    return this.props.formatGroupLabel(data);
  } // ==============================
  // Mouse Handlers
  // ==============================
  ;

  // ==============================
  // Composition Handlers
  // ==============================
  _proto.startListeningComposition = function startListeningComposition() {
    if (document && document.addEventListener) {
      document.addEventListener('compositionstart', this.onCompositionStart, false);
      document.addEventListener('compositionend', this.onCompositionEnd, false);
    }
  };

  _proto.stopListeningComposition = function stopListeningComposition() {
    if (document && document.removeEventListener) {
      document.removeEventListener('compositionstart', this.onCompositionStart);
      document.removeEventListener('compositionend', this.onCompositionEnd);
    }
  };

  // ==============================
  // Touch Handlers
  // ==============================
  _proto.startListeningToTouch = function startListeningToTouch() {
    if (document && document.addEventListener) {
      document.addEventListener('touchstart', this.onTouchStart, false);
      document.addEventListener('touchmove', this.onTouchMove, false);
      document.addEventListener('touchend', this.onTouchEnd, false);
    }
  };

  _proto.stopListeningToTouch = function stopListeningToTouch() {
    if (document && document.removeEventListener) {
      document.removeEventListener('touchstart', this.onTouchStart);
      document.removeEventListener('touchmove', this.onTouchMove);
      document.removeEventListener('touchend', this.onTouchEnd);
    }
  };

  // ==============================
  // Renderers
  // ==============================
  _proto.constructAriaLiveMessage = function constructAriaLiveMessage() {
    var _this$state7 = this.state,
        ariaLiveContext = _this$state7.ariaLiveContext,
        selectValue = _this$state7.selectValue,
        focusedValue = _this$state7.focusedValue,
        focusedOption = _this$state7.focusedOption;
    var _this$props13 = this.props,
        options = _this$props13.options,
        menuIsOpen = _this$props13.menuIsOpen,
        inputValue = _this$props13.inputValue,
        screenReaderStatus = _this$props13.screenReaderStatus; // An aria live message representing the currently focused value in the select.

    var focusedValueMsg = focusedValue ? valueFocusAriaMessage({
      focusedValue: focusedValue,
      getOptionLabel: this.getOptionLabel,
      selectValue: selectValue
    }) : ''; // An aria live message representing the currently focused option in the select.

    var focusedOptionMsg = focusedOption && menuIsOpen ? optionFocusAriaMessage({
      focusedOption: focusedOption,
      getOptionLabel: this.getOptionLabel,
      options: options
    }) : ''; // An aria live message representing the set of focusable results and current searchterm/inputvalue.

    var resultsMsg = resultsAriaMessage({
      inputValue: inputValue,
      screenReaderMessage: screenReaderStatus({
        count: this.countOptions()
      })
    });
    return focusedValueMsg + " " + focusedOptionMsg + " " + resultsMsg + " " + ariaLiveContext;
  };

  _proto.renderInput = function renderInput() {
    var _this$props14 = this.props,
        isDisabled = _this$props14.isDisabled,
        isSearchable = _this$props14.isSearchable,
        inputId = _this$props14.inputId,
        inputValue = _this$props14.inputValue,
        tabIndex = _this$props14.tabIndex;
    var Input = this.components.Input;
    var inputIsHidden = this.state.inputIsHidden;
    var id = inputId || this.getElementId('input'); // aria attributes makes the JSX "noisy", separated for clarity

    var ariaAttributes = {
      'aria-autocomplete': 'list',
      'aria-label': this.props['aria-label'],
      'aria-labelledby': this.props['aria-labelledby']
    };

    if (!isSearchable) {
      // use a dummy input to maintain focus/blur functionality
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DummyInput, _extends$4({
        id: id,
        innerRef: this.getInputRef,
        onBlur: this.onInputBlur,
        onChange: _utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["n"],
        onFocus: this.onInputFocus,
        readOnly: true,
        disabled: isDisabled,
        tabIndex: tabIndex,
        value: ""
      }, ariaAttributes));
    }

    var _this$commonProps = this.commonProps,
        cx = _this$commonProps.cx,
        theme = _this$commonProps.theme,
        selectProps = _this$commonProps.selectProps;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, _extends$4({
      autoCapitalize: "none",
      autoComplete: "off",
      autoCorrect: "off",
      cx: cx,
      getStyles: this.getStyles,
      id: id,
      innerRef: this.getInputRef,
      isDisabled: isDisabled,
      isHidden: inputIsHidden,
      onBlur: this.onInputBlur,
      onChange: this.handleInputChange,
      onFocus: this.onInputFocus,
      selectProps: selectProps,
      spellCheck: "false",
      tabIndex: tabIndex,
      theme: theme,
      type: "text",
      value: inputValue
    }, ariaAttributes));
  };

  _proto.renderPlaceholderOrValue = function renderPlaceholderOrValue() {
    var _this4 = this;

    var _this$components = this.components,
        MultiValue = _this$components.MultiValue,
        MultiValueContainer = _this$components.MultiValueContainer,
        MultiValueLabel = _this$components.MultiValueLabel,
        MultiValueRemove = _this$components.MultiValueRemove,
        SingleValue = _this$components.SingleValue,
        Placeholder = _this$components.Placeholder;
    var commonProps = this.commonProps;
    var _this$props15 = this.props,
        controlShouldRenderValue = _this$props15.controlShouldRenderValue,
        isDisabled = _this$props15.isDisabled,
        isMulti = _this$props15.isMulti,
        inputValue = _this$props15.inputValue,
        placeholder = _this$props15.placeholder;
    var _this$state8 = this.state,
        selectValue = _this$state8.selectValue,
        focusedValue = _this$state8.focusedValue,
        isFocused = _this$state8.isFocused;

    if (!this.hasValue() || !controlShouldRenderValue) {
      return inputValue ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Placeholder, _extends$4({}, commonProps, {
        key: "placeholder",
        isDisabled: isDisabled,
        isFocused: isFocused
      }), placeholder);
    }

    if (isMulti) {
      var selectValues = selectValue.map(function (opt, index) {
        var isOptionFocused = opt === focusedValue;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MultiValue, _extends$4({}, commonProps, {
          components: {
            Container: MultiValueContainer,
            Label: MultiValueLabel,
            Remove: MultiValueRemove
          },
          isFocused: isOptionFocused,
          isDisabled: isDisabled,
          key: _this4.getOptionValue(opt),
          index: index,
          removeProps: {
            onClick: function onClick() {
              return _this4.removeValue(opt);
            },
            onTouchEnd: function onTouchEnd() {
              return _this4.removeValue(opt);
            },
            onMouseDown: function onMouseDown(e) {
              e.preventDefault();
              e.stopPropagation();
            }
          },
          data: opt
        }), _this4.formatOptionLabel(opt, 'value'));
      });
      return selectValues;
    }

    if (inputValue) {
      return null;
    }

    var singleValue = selectValue[0];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleValue, _extends$4({}, commonProps, {
      data: singleValue,
      isDisabled: isDisabled
    }), this.formatOptionLabel(singleValue, 'value'));
  };

  _proto.renderClearIndicator = function renderClearIndicator() {
    var ClearIndicator = this.components.ClearIndicator;
    var commonProps = this.commonProps;
    var _this$props16 = this.props,
        isDisabled = _this$props16.isDisabled,
        isLoading = _this$props16.isLoading;
    var isFocused = this.state.isFocused;

    if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
      return null;
    }

    var innerProps = {
      onMouseDown: this.onClearIndicatorMouseDown,
      onTouchEnd: this.onClearIndicatorTouchEnd,
      'aria-hidden': 'true'
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClearIndicator, _extends$4({}, commonProps, {
      innerProps: innerProps,
      isFocused: isFocused
    }));
  };

  _proto.renderLoadingIndicator = function renderLoadingIndicator() {
    var LoadingIndicator = this.components.LoadingIndicator;
    var commonProps = this.commonProps;
    var _this$props17 = this.props,
        isDisabled = _this$props17.isDisabled,
        isLoading = _this$props17.isLoading;
    var isFocused = this.state.isFocused;
    if (!LoadingIndicator || !isLoading) return null;
    var innerProps = {
      'aria-hidden': 'true'
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingIndicator, _extends$4({}, commonProps, {
      innerProps: innerProps,
      isDisabled: isDisabled,
      isFocused: isFocused
    }));
  };

  _proto.renderIndicatorSeparator = function renderIndicatorSeparator() {
    var _this$components2 = this.components,
        DropdownIndicator = _this$components2.DropdownIndicator,
        IndicatorSeparator = _this$components2.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator

    if (!DropdownIndicator || !IndicatorSeparator) return null;
    var commonProps = this.commonProps;
    var isDisabled = this.props.isDisabled;
    var isFocused = this.state.isFocused;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndicatorSeparator, _extends$4({}, commonProps, {
      isDisabled: isDisabled,
      isFocused: isFocused
    }));
  };

  _proto.renderDropdownIndicator = function renderDropdownIndicator() {
    var DropdownIndicator = this.components.DropdownIndicator;
    if (!DropdownIndicator) return null;
    var commonProps = this.commonProps;
    var isDisabled = this.props.isDisabled;
    var isFocused = this.state.isFocused;
    var innerProps = {
      onMouseDown: this.onDropdownIndicatorMouseDown,
      onTouchEnd: this.onDropdownIndicatorTouchEnd,
      'aria-hidden': 'true'
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownIndicator, _extends$4({}, commonProps, {
      innerProps: innerProps,
      isDisabled: isDisabled,
      isFocused: isFocused
    }));
  };

  _proto.renderMenu = function renderMenu() {
    var _this5 = this;

    var _this$components3 = this.components,
        Group = _this$components3.Group,
        GroupHeading = _this$components3.GroupHeading,
        Menu = _this$components3.Menu,
        MenuList = _this$components3.MenuList,
        MenuPortal = _this$components3.MenuPortal,
        LoadingMessage = _this$components3.LoadingMessage,
        NoOptionsMessage = _this$components3.NoOptionsMessage,
        Option = _this$components3.Option;
    var commonProps = this.commonProps;
    var _this$state9 = this.state,
        focusedOption = _this$state9.focusedOption,
        menuOptions = _this$state9.menuOptions;
    var _this$props18 = this.props,
        captureMenuScroll = _this$props18.captureMenuScroll,
        inputValue = _this$props18.inputValue,
        isLoading = _this$props18.isLoading,
        loadingMessage = _this$props18.loadingMessage,
        minMenuHeight = _this$props18.minMenuHeight,
        maxMenuHeight = _this$props18.maxMenuHeight,
        menuIsOpen = _this$props18.menuIsOpen,
        menuPlacement = _this$props18.menuPlacement,
        menuPosition = _this$props18.menuPosition,
        menuPortalTarget = _this$props18.menuPortalTarget,
        menuShouldBlockScroll = _this$props18.menuShouldBlockScroll,
        menuShouldScrollIntoView = _this$props18.menuShouldScrollIntoView,
        noOptionsMessage = _this$props18.noOptionsMessage,
        onMenuScrollToTop = _this$props18.onMenuScrollToTop,
        onMenuScrollToBottom = _this$props18.onMenuScrollToBottom;
    if (!menuIsOpen) return null; // TODO: Internal Option Type here

    var render = function render(props) {
      // for performance, the menu options in state aren't changed when the
      // focused option changes so we calculate additional props based on that
      var isFocused = focusedOption === props.data;
      props.innerRef = isFocused ? _this5.getFocusedOptionRef : undefined;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, _extends$4({}, commonProps, props, {
        isFocused: isFocused
      }), _this5.formatOptionLabel(props.data, 'menu'));
    };

    var menuUI;

    if (this.hasOptions()) {
      menuUI = menuOptions.render.map(function (item) {
        if (item.type === 'group') {
          var type = item.type,
              group = _objectWithoutPropertiesLoose$2(item, ["type"]);

          var headingId = item.key + "-heading";
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Group, _extends$4({}, commonProps, group, {
            Heading: GroupHeading,
            headingProps: {
              id: headingId
            },
            label: _this5.formatGroupLabel(item.data)
          }), item.options.map(function (option) {
            return render(option);
          }));
        } else if (item.type === 'option') {
          return render(item);
        }
      });
    } else if (isLoading) {
      var message = loadingMessage({
        inputValue: inputValue
      });
      if (message === null) return null;
      menuUI = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingMessage, commonProps, message);
    } else {
      var _message = noOptionsMessage({
        inputValue: inputValue
      });

      if (_message === null) return null;
      menuUI = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoOptionsMessage, commonProps, _message);
    }

    var menuPlacementProps = {
      minMenuHeight: minMenuHeight,
      maxMenuHeight: maxMenuHeight,
      menuPlacement: menuPlacement,
      menuPosition: menuPosition,
      menuShouldScrollIntoView: menuShouldScrollIntoView
    };
    var menuElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["M"], _extends$4({}, commonProps, menuPlacementProps), function (_ref8) {
      var ref = _ref8.ref,
          _ref8$placerProps = _ref8.placerProps,
          placement = _ref8$placerProps.placement,
          maxHeight = _ref8$placerProps.maxHeight;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, _extends$4({}, commonProps, menuPlacementProps, {
        innerRef: ref,
        innerProps: {
          onMouseDown: _this5.onMenuMouseDown,
          onMouseMove: _this5.onMenuMouseMove
        },
        isLoading: isLoading,
        placement: placement
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollCaptorSwitch, {
        isEnabled: captureMenuScroll,
        onTopArrive: onMenuScrollToTop,
        onBottomArrive: onMenuScrollToBottom
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollBlock, {
        isEnabled: menuShouldBlockScroll
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuList, _extends$4({}, commonProps, {
        innerRef: _this5.getMenuListRef,
        isLoading: isLoading,
        maxHeight: maxHeight
      }), menuUI))));
    }); // positioning behaviour is almost identical for portalled and fixed,
    // so we use the same component. the actual portalling logic is forked
    // within the component based on `menuPosition`

    return menuPortalTarget || menuPosition === 'fixed' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuPortal, _extends$4({}, commonProps, {
      appendTo: menuPortalTarget,
      controlElement: this.controlRef,
      menuPlacement: menuPlacement,
      menuPosition: menuPosition
    }), menuElement) : menuElement;
  };

  _proto.renderFormField = function renderFormField() {
    var _this6 = this;

    var _this$props19 = this.props,
        delimiter = _this$props19.delimiter,
        isDisabled = _this$props19.isDisabled,
        isMulti = _this$props19.isMulti,
        name = _this$props19.name;
    var selectValue = this.state.selectValue;
    if (!name || isDisabled) return;

    if (isMulti) {
      if (delimiter) {
        var value = selectValue.map(function (opt) {
          return _this6.getOptionValue(opt);
        }).join(delimiter);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          name: name,
          type: "hidden",
          value: value
        });
      } else {
        var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            key: "i-" + i,
            name: name,
            type: "hidden",
            value: _this6.getOptionValue(opt)
          });
        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          name: name,
          type: "hidden"
        });
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, input);
      }
    } else {
      var _value2 = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: name,
        type: "hidden",
        value: _value2
      });
    }
  };

  _proto.renderLiveRegion = function renderLiveRegion() {
    if (!this.state.isFocused) return null;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(A11yText, {
      "aria-live": "polite"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      id: "aria-selection-event"
    }, "\xA0", this.state.ariaLiveSelection), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      id: "aria-context"
    }, "\xA0", this.constructAriaLiveMessage()));
  };

  _proto.render = function render() {
    var _this$components4 = this.components,
        Control = _this$components4.Control,
        IndicatorsContainer = _this$components4.IndicatorsContainer,
        SelectContainer = _this$components4.SelectContainer,
        ValueContainer = _this$components4.ValueContainer;
    var _this$props20 = this.props,
        className = _this$props20.className,
        id = _this$props20.id,
        isDisabled = _this$props20.isDisabled,
        menuIsOpen = _this$props20.menuIsOpen;
    var isFocused = this.state.isFocused;
    var commonProps = this.commonProps = this.getCommonProps();
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectContainer, _extends$4({}, commonProps, {
      className: className,
      innerProps: {
        id: id,
        onKeyDown: this.onKeyDown
      },
      isDisabled: isDisabled,
      isFocused: isFocused
    }), this.renderLiveRegion(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Control, _extends$4({}, commonProps, {
      innerRef: this.getControlRef,
      innerProps: {
        onMouseDown: this.onControlMouseDown,
        onTouchEnd: this.onControlTouchEnd
      },
      isDisabled: isDisabled,
      isFocused: isFocused,
      menuIsOpen: menuIsOpen
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ValueContainer, _extends$4({}, commonProps, {
      isDisabled: isDisabled
    }), this.renderPlaceholderOrValue(), this.renderInput()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndicatorsContainer, _extends$4({}, commonProps, {
      isDisabled: isDisabled
    }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
  };

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Select.defaultProps = defaultProps;




/***/ }),

/***/ "./node_modules/react-select/dist/index-4322c0ed.browser.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-select/dist/index-4322c0ed.browser.esm.js ***!
  \**********************************************************************/
/*! exports provided: M, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return MenuPlacer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return containerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clearIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dropdownIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return groupHeadingCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return indicatorSeparatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return groupCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return inputCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return indicatorsContainerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return loadingMessageCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return menuListCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return loadingIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return menuCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return menuPortalCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return multiValueCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return multiValueLabelCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return multiValueRemoveCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return noOptionsMessageCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return optionCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return placeholderCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return css$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return valueContainerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return defaultComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return exportedEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return components; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils-06b0d5a4.browser.esm.js */ "./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_6__);








function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      theme = _ref.theme;
  var spacing = theme.spacing;
  var scrollParent = Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["a"])(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: maxHeight
  }; // something went wrong, return default state

  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["b"])(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["c"])(scrollParent, scrollDown, scrollDuration);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["c"])(scrollParent, scrollDown, scrollDuration);
        } // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.


        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      } // 4. Forked beviour when there isn't enough space below
      // AUTO: flip the menu, render above


      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


      if (placement === 'bottom') {
        Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["s"])(scrollParent, scrollDown);
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      }

      break;

    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["c"])(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["c"])(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      } // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below


      return {
        placement: 'bottom',
        maxHeight: maxHeight
      };

    default:
      throw new Error("Invalid placement provided \"" + placement + "\".");
  } // fulfil contract with flow: implicit return value of undefined


  return defaultState;
} // Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}

var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {
    label: 'menu'
  }, _ref3[alignToControl(placement)] = '100%', _ref3.backgroundColor = colors.neutral0, _ref3.borderRadius = borderRadius, _ref3.boxShadow = '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)', _ref3.marginBottom = spacing.menuGutter, _ref3.marginTop = spacing.menuGutter, _ref3.position = 'absolute', _ref3.width = '100%', _ref3.zIndex = 1, _ref3;
}; // NOTE: internal only

var MenuPlacer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(MenuPlacer, _Component);

  function MenuPlacer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    };

    _this.getPlacement = function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (!ref) return; // DO NOT scroll if position is fixed

      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        theme: theme
      });
      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    };

    _this.getUpdatedProps = function () {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return _extends({}, _this.props, {
        placement: placement,
        maxHeight: _this.state.maxHeight
      });
    };

    return _this;
  }

  var _proto = MenuPlacer.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    return children({
      ref: this.getPlacement,
      placerProps: this.getUpdatedProps()
    });
  };

  return MenuPlacer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
MenuPlacer.contextTypes = {
  getPortalPlacement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

var Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    css: getStyles('menu', props),
    className: cx({
      menu: true
    }, className)
  }, innerProps, {
    ref: innerRef
  }), children);
};
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4) {
  var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: baseUnit,
    paddingTop: baseUnit,
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isMulti = props.isMulti,
      innerRef = props.innerRef;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: getStyles('menuList', props),
    className: cx({
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }, className),
    ref: innerRef
  }, children);
}; // ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5) {
  var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
  return {
    color: colors.neutral40,
    padding: baseUnit * 2 + "px " + baseUnit * 3 + "px",
    textAlign: 'center'
  };
};

var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    css: getStyles('noOptionsMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--no-options': true
    }, className)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    css: getStyles('loadingMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--loading': true
    }, className)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
}; // ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal =
/*#__PURE__*/
function (_Component2) {
  _inheritsLoose(MenuPortal, _Component2);

  function MenuPortal() {
    var _this2;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _Component2.call.apply(_Component2, [this].concat(args)) || this;
    _this2.state = {
      placement: null
    };

    _this2.getPortalPlacement = function (_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

      if (placement !== initialPlacement) {
        _this2.setState({
          placement: placement
        });
      }
    };

    return _this2;
  }

  var _proto2 = MenuPortal.prototype;

  _proto2.getChildContext = function getChildContext() {
    return {
      getPortalPlacement: this.getPortalPlacement
    };
  } // callback for occassions where the menu must "flip"
  ;

  _proto2.render = function render() {
    var _this$props2 = this.props,
        appendTo = _this$props2.appendTo,
        children = _this$props2.children,
        controlElement = _this$props2.controlElement,
        menuPlacement = _this$props2.menuPlacement,
        position = _this$props2.menuPosition,
        getStyles = _this$props2.getStyles;
    var isFixed = position === 'fixed'; // bail early if required elements aren't present

    if (!appendTo && !isFixed || !controlElement) {
      return null;
    }

    var placement = this.state.placement || coercePlacement(menuPlacement);
    var rect = Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["g"])(controlElement);
    var scrollDistance = isFixed ? 0 : window.pageYOffset;
    var offset = rect[placement] + scrollDistance;
    var state = {
      offset: offset,
      position: position,
      rect: rect
    }; // same wrapper element whether fixed or portalled

    var menuWrapper = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      css: getStyles('menuPortal', state)
    }, children);
    return appendTo ? Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"])(menuWrapper, appendTo) : menuWrapper;
  };

  return MenuPortal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
MenuPortal.childContextTypes = {
  getPortalPlacement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    } // end fast-deep-equal
    // Custom handling for React


    for (i = length; i-- !== 0;) {
      key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    } // fast-deep-equal index.js 2.0.1


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
}

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$1({
    css: getStyles('container', props),
    className: cx({
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }, className)
  }, innerProps), children);
}; // ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: spacing.baseUnit / 2 + "px " + spacing.baseUnit * 2 + "px",
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  };
};
var ValueContainer = function ValueContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      isMulti = props.isMulti,
      getStyles = props.getStyles,
      hasValue = props.hasValue;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: getStyles('valueContainer', props),
    className: cx({
      'value-container': true,
      'value-container--is-multi': isMulti,
      'value-container--has-value': hasValue
    }, className)
  }, children);
}; // ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: getStyles('indicatorsContainer', props),
    className: cx({
      indicators: true
    }, className)
  }, children);
};

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _ref2 =  false ? undefined : {
  name: "19bqh2r",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IENvbW1vblByb3BzLCBUaGVtZSB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHsgc2l6ZSwgLi4ucHJvcHMgfTogeyBzaXplOiBudW1iZXIgfSkgPT4gKFxuICA8c3ZnXG4gICAgaGVpZ2h0PXtzaXplfVxuICAgIHdpZHRoPXtzaXplfVxuICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgIGNzcz17e1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBzdHJva2U6ICdjdXJyZW50Q29sb3InLFxuICAgICAgc3Ryb2tlV2lkdGg6IDAsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBhbnkpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk00LjUxNiA3LjU0OGMwLjQzNi0wLjQ0NiAxLjA0My0wLjQ4MSAxLjU3NiAwbDMuOTA4IDMuNzQ3IDMuOTA4LTMuNzQ3YzAuNTMzLTAuNDgxIDEuMTQxLTAuNDQ2IDEuNTc0IDAgMC40MzYgMC40NDUgMC40MDggMS4xOTcgMCAxLjYxNS0wLjQwNiAwLjQxOC00LjY5NSA0LjUwMi00LjY5NSA0LjUwMi0wLjIxNyAwLjIyMy0wLjUwMiAwLjMzNS0wLjc4NyAwLjMzNXMtMC41Ny0wLjExMi0wLjc4OS0wLjMzNWMwIDAtNC4yODctNC4wODQtNC42OTUtNC41MDJzLTAuNDM2LTEuMTcgMC0xLjYxNXpcIiAvPlxuICA8L1N2Zz5cbik7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgSW5kaWNhdG9yUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW46IE5vZGUsXG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufTtcblxuY29uc3QgYmFzZUNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogSW5kaWNhdG9yUHJvcHMpID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yQ29udGFpbmVyJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcblxuICAnOmhvdmVyJzoge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWw0MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2Ryb3Bkb3duSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnZHJvcGRvd24taW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2NsZWFySW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnY2xlYXItaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIFNlcGFyYXRvclN0YXRlID0geyBpc0Rpc2FibGVkOiBib29sZWFuIH07XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSAoe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBDb21tb25Qcm9wcyAmIFNlcGFyYXRvclN0YXRlKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gKHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiB7XG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgc2l6ZTogbnVtYmVyLFxuICB0aGVtZTogVGhlbWUsXG59KSA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxufSk7XG5cbnR5cGUgRG90UHJvcHMgPSB7IGRlbGF5OiBudW1iZXIsIG9mZnNldDogYm9vbGVhbiB9O1xuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogRG90UHJvcHMpID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGFuaW1hdGlvbjogYCR7bG9hZGluZ0RvdEFuaW1hdGlvbnN9IDFzIGVhc2UtaW4tb3V0ICR7ZGVsYXl9bXMgaW5maW5pdGU7YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IG51bGwsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIExvYWRpbmdJY29uUHJvcHMgPSB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufSAmIENvbW1vblByb3BzICYge1xuICAgIC8qKiBTZXQgc2l6ZSBvZiB0aGUgY29udGFpbmVyLiAqL1xuICAgIHNpemU6IG51bWJlcixcbiAgfTtcbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gKHByb3BzOiBMb2FkaW5nSWNvblByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzLCBpc1J0bCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdsb2FkaW5nSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnbG9hZGluZy1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezB9IG9mZnNldD17aXNSdGx9IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MTYwfSBvZmZzZXQgLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXszMjB9IG9mZnNldD17IWlzUnRsfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbkxvYWRpbmdJbmRpY2F0b3IuZGVmYXVsdFByb3BzID0geyBzaXplOiA0IH07XG4iXX0= */"
};

// ==============================
// Dropdown & Clear Icons
// ==============================
var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = _objectWithoutPropertiesLoose(_ref, ["size"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", _extends$2({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2
  }, props));
};

var CrossIcon = function CrossIcon(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Svg, _extends$2({
    size: 20
  }, props), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Svg, _extends$2({
    size: 20
  }, props), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}; // ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref3) {
  var isFocused = _ref3.isFocused,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
  return {
    label: 'indicatorContainer',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$2({}, innerProps, {
    css: getStyles('dropdownIndicator', props),
    className: cx({
      indicator: true,
      'dropdown-indicator': true
    }, className)
  }), children || Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$2({}, innerProps, {
    css: getStyles('clearIndicator', props),
    className: cx({
      indicator: true,
      'clear-indicator': true
    }, className)
  }), children || Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(CrossIcon, null));
}; // ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4) {
  var isDisabled = _ref4.isDisabled,
      _ref4$theme = _ref4.theme,
      baseUnit = _ref4$theme.spacing.baseUnit,
      colors = _ref4$theme.colors;
  return {
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", _extends$2({}, innerProps, {
    css: getStyles('indicatorSeparator', props),
    className: cx({
      'indicator-separator': true
    }, className)
  }));
}; // ==============================
// Loading
// ==============================

var loadingDotAnimations = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5) {
  var isFocused = _ref5.isFocused,
      size = _ref5.size,
      _ref5$theme = _ref5.theme,
      colors = _ref5$theme.colors,
      baseUnit = _ref5$theme.spacing.baseUnit;
  return {
    label: 'loadingIndicator',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref6) {
  var delay = _ref6.delay,
      offset = _ref6.offset;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    css:
    /*#__PURE__*/
    Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["default"])({
      animation: loadingDotAnimations + " 1s ease-in-out " + delay + "ms infinite;",
      backgroundColor: 'currentColor',
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    },  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0xJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IENvbW1vblByb3BzLCBUaGVtZSB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHsgc2l6ZSwgLi4ucHJvcHMgfTogeyBzaXplOiBudW1iZXIgfSkgPT4gKFxuICA8c3ZnXG4gICAgaGVpZ2h0PXtzaXplfVxuICAgIHdpZHRoPXtzaXplfVxuICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgIGNzcz17e1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBzdHJva2U6ICdjdXJyZW50Q29sb3InLFxuICAgICAgc3Ryb2tlV2lkdGg6IDAsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBhbnkpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk00LjUxNiA3LjU0OGMwLjQzNi0wLjQ0NiAxLjA0My0wLjQ4MSAxLjU3NiAwbDMuOTA4IDMuNzQ3IDMuOTA4LTMuNzQ3YzAuNTMzLTAuNDgxIDEuMTQxLTAuNDQ2IDEuNTc0IDAgMC40MzYgMC40NDUgMC40MDggMS4xOTcgMCAxLjYxNS0wLjQwNiAwLjQxOC00LjY5NSA0LjUwMi00LjY5NSA0LjUwMi0wLjIxNyAwLjIyMy0wLjUwMiAwLjMzNS0wLjc4NyAwLjMzNXMtMC41Ny0wLjExMi0wLjc4OS0wLjMzNWMwIDAtNC4yODctNC4wODQtNC42OTUtNC41MDJzLTAuNDM2LTEuMTcgMC0xLjYxNXpcIiAvPlxuICA8L1N2Zz5cbik7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgSW5kaWNhdG9yUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW46IE5vZGUsXG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufTtcblxuY29uc3QgYmFzZUNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogSW5kaWNhdG9yUHJvcHMpID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yQ29udGFpbmVyJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcblxuICAnOmhvdmVyJzoge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWw0MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2Ryb3Bkb3duSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnZHJvcGRvd24taW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2NsZWFySW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnY2xlYXItaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIFNlcGFyYXRvclN0YXRlID0geyBpc0Rpc2FibGVkOiBib29sZWFuIH07XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSAoe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBDb21tb25Qcm9wcyAmIFNlcGFyYXRvclN0YXRlKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gKHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiB7XG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgc2l6ZTogbnVtYmVyLFxuICB0aGVtZTogVGhlbWUsXG59KSA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxufSk7XG5cbnR5cGUgRG90UHJvcHMgPSB7IGRlbGF5OiBudW1iZXIsIG9mZnNldDogYm9vbGVhbiB9O1xuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogRG90UHJvcHMpID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGFuaW1hdGlvbjogYCR7bG9hZGluZ0RvdEFuaW1hdGlvbnN9IDFzIGVhc2UtaW4tb3V0ICR7ZGVsYXl9bXMgaW5maW5pdGU7YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IG51bGwsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIExvYWRpbmdJY29uUHJvcHMgPSB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufSAmIENvbW1vblByb3BzICYge1xuICAgIC8qKiBTZXQgc2l6ZSBvZiB0aGUgY29udGFpbmVyLiAqL1xuICAgIHNpemU6IG51bWJlcixcbiAgfTtcbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gKHByb3BzOiBMb2FkaW5nSWNvblByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzLCBpc1J0bCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdsb2FkaW5nSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnbG9hZGluZy1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezB9IG9mZnNldD17aXNSdGx9IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MTYwfSBvZmZzZXQgLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXszMjB9IG9mZnNldD17IWlzUnRsfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbkxvYWRpbmdJbmRpY2F0b3IuZGVmYXVsdFByb3BzID0geyBzaXplOiA0IH07XG4iXX0= */")
  });
};

var LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isRtl = props.isRtl;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$2({}, innerProps, {
    css: getStyles('loadingIndicator', props),
    className: cx({
      indicator: true,
      'loading-indicator': true
    }, className)
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(LoadingDot, {
    delay: 160,
    offset: true
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var css = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
  return {
    label: 'control',
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px " + colors.primary : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$3({
    ref: innerRef,
    css: getStyles('control', props),
    className: cx({
      control: true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }, className)
  }, innerProps), children);
};

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }
var groupCSS = function groupCSS(_ref) {
  var spacing = _ref.theme.spacing;
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: getStyles('group', props),
    className: cx({
      group: true
    }, className)
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Heading, _extends$4({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    cx: cx
  }), label), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", null, children));
};

var groupHeadingCSS = function groupHeadingCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    label: 'group',
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};
var GroupHeading = function GroupHeading(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      theme = props.theme,
      selectProps = props.selectProps,
      cleanProps = _objectWithoutPropertiesLoose$1(props, ["className", "cx", "getStyles", "theme", "selectProps"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$4({
    css: getStyles('groupHeading', _extends$4({
      theme: theme
    }, cleanProps)),
    className: cx({
      'group-heading': true
    }, className)
  }, cleanProps));
};

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.neutral80
  };
};

var inputStyle = function inputStyle(isHidden) {
  return {
    label: 'input',
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var Input = function Input(_ref2) {
  var className = _ref2.className,
      cx = _ref2.cx,
      getStyles = _ref2.getStyles,
      innerRef = _ref2.innerRef,
      isHidden = _ref2.isHidden,
      isDisabled = _ref2.isDisabled,
      theme = _ref2.theme,
      selectProps = _ref2.selectProps,
      props = _objectWithoutPropertiesLoose$2(_ref2, ["className", "cx", "getStyles", "innerRef", "isHidden", "isDisabled", "theme", "selectProps"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: getStyles('input', _extends$5({
      theme: theme
    }, props))
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_input_autosize__WEBPACK_IMPORTED_MODULE_6___default.a, _extends$5({
    className: cx({
      input: true
    }, className),
    inputRef: innerRef,
    inputStyle: inputStyle(isHidden),
    disabled: isDisabled
  }, props)));
};

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }
var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    label: 'multiValue',
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug

  };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children,
      innerProps = _ref5.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", innerProps, children || Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(CrossIcon, {
    size: 14
  }));
}

var MultiValue = function MultiValue(props) {
  var children = props.children,
      className = props.className,
      components = props.components,
      cx = props.cx,
      data = props.data,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      removeProps = props.removeProps,
      selectProps = props.selectProps;
  var Container = components.Container,
      Label = components.Label,
      Remove = components.Remove;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["ClassNames"], null, function (_ref6) {
    var css = _ref6.css,
        emotionCx = _ref6.cx;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Container, {
      data: data,
      innerProps: _extends$6({}, innerProps, {
        className: emotionCx(css(getStyles('multiValue', props)), cx({
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className))
      }),
      selectProps: selectProps
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Label, {
      data: data,
      innerProps: {
        className: emotionCx(css(getStyles('multiValueLabel', props)), cx({
          'multi-value__label': true
        }, className))
      },
      selectProps: selectProps
    }, children), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Remove, {
      data: data,
      innerProps: _extends$6({
        className: emotionCx(css(getStyles('multiValueRemove', props)), cx({
          'multi-value__remove': true
        }, className))
      }, removeProps),
      selectProps: selectProps
    }));
  });
};

MultiValue.defaultProps = {
  cropWithEllipsis: true
};

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }
var optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'option',
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: spacing.baseUnit * 2 + "px " + spacing.baseUnit * 3 + "px",
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled && (isSelected ? colors.primary : colors.primary50)
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$7({
    css: getStyles('option', props),
    className: cx({
      option: true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }, className),
    ref: innerRef
  }, innerProps), children);
};

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }
var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'placeholder',
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$8({
    css: getStyles('placeholder', props),
    className: cx({
      placeholder: true
    }, className)
  }, innerProps), children);
};

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }
var css$1 = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'singleValue',
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: "calc(100% - " + spacing.baseUnit * 2 + "px)",
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$9({
    css: getStyles('singleValue', props),
    className: cx({
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }, className)
  }, innerProps), children);
};

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }
var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return _extends$a({}, components, props.components);
};




/***/ }),

/***/ "./node_modules/react-select/dist/react-select.browser.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-select/dist/react-select.browser.esm.js ***!
  \********************************************************************/
/*! exports provided: components, createFilter, defaultTheme, mergeStyles, default, NonceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonceProvider", function() { return NonceProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils-06b0d5a4.browser.esm.js */ "./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js");
/* harmony import */ var _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-4322c0ed.browser.esm.js */ "./node_modules/react-select/dist/index-4322c0ed.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__["y"]; });

/* harmony import */ var _Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Select-9fdb8cd0.browser.esm.js */ "./node_modules/react-select/dist/Select-9fdb8cd0.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFilter", function() { return _Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTheme", function() { return _Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["m"]; });

/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _stateManager_04f734a2_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stateManager-04f734a2.browser.esm.js */ "./node_modules/react-select/dist/stateManager-04f734a2.browser.esm.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");














function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var NonceProvider =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(NonceProvider, _Component);

  function NonceProvider(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.createEmotionCache = function (nonce) {
      return Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_11__["default"])({
        nonce: nonce
      });
    };

    _this.createEmotionCache = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.createEmotionCache);
    return _this;
  }

  var _proto = NonceProvider.prototype;

  _proto.render = function render() {
    var emotionCache = this.createEmotionCache(this.props.nonce);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["CacheProvider"], {
      value: emotionCache
    }, this.props.children);
  };

  return NonceProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var index = Object(_stateManager_04f734a2_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["m"])(_Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["S"]);

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/react-select/dist/stateManager-04f734a2.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-select/dist/stateManager-04f734a2.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return manageState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
var defaultProps = {
  defaultInputValue: '',
  defaultMenuIsOpen: false,
  defaultValue: null
};

var manageState = function manageState(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(StateManager, _Component);

    function StateManager() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.select = void 0;
      _this.state = {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      };

      _this.onChange = function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);

        _this.setState({
          value: value
        });
      };

      _this.onInputChange = function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);

        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      };

      _this.onMenuOpen = function () {
        _this.callProp('onMenuOpen');

        _this.setState({
          menuIsOpen: true
        });
      };

      _this.onMenuClose = function () {
        _this.callProp('onMenuClose');

        _this.setState({
          menuIsOpen: false
        });
      };

      return _this;
    }

    var _proto = StateManager.prototype;

    _proto.focus = function focus() {
      this.select.focus();
    };

    _proto.blur = function blur() {
      this.select.blur();
    } // FIXME: untyped flow code, return any
    ;

    _proto.getProp = function getProp(key) {
      return this.props[key] !== undefined ? this.props[key] : this.state[key];
    } // FIXME: untyped flow code, return any
    ;

    _proto.callProp = function callProp(name) {
      if (typeof this.props[name] === 'function') {
        var _this$props;

        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        return (_this$props = this.props)[name].apply(_this$props, args);
      }
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          defaultInputValue = _this$props2.defaultInputValue,
          defaultMenuIsOpen = _this$props2.defaultMenuIsOpen,
          defaultValue = _this$props2.defaultValue,
          props = _objectWithoutPropertiesLoose(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectComponent, _extends({}, props, {
        ref: function ref(_ref) {
          _this2.select = _ref;
        },
        inputValue: this.getProp('inputValue'),
        menuIsOpen: this.getProp('menuIsOpen'),
        onChange: this.onChange,
        onInputChange: this.onInputChange,
        onMenuClose: this.onMenuClose,
        onMenuOpen: this.onMenuOpen,
        value: this.getProp('value')
      }));
    };

    return StateManager;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.defaultProps = defaultProps, _temp;
};




/***/ }),

/***/ "./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js ***!
  \**********************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k, n, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getScrollParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return animatedScrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isMobileDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return cleanValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return scrollIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getBoundingClientObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isTouchCapable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isDocumentElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return handleInputChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return scrollTo; });
// ==============================
// NO OP
// ==============================
var noop = function noop() {};
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/

function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, state, className) {
  var arr = [className];

  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("" + applyPrefixToName(prefix, key));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
} // ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof value === 'object' && value !== null) return [value];
  return [];
}; // ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var newValue = onInputChange(inputValue, actionMeta);
    if (typeof newValue === 'string') return newValue;
  }

  return inputValue;
} // ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
} // Normalized Scroll Top
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }

  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
} // Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === 'static') {
      continue;
    }

    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
} // Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/

function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to, duration, callback) {
  if (duration === void 0) {
    duration = 200;
  }

  if (callback === void 0) {
    callback = noop;
  }

  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);

    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }

  animateScroll();
} // Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
} // ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect

function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
} // ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}




/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: ClusterMode, Index, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterMode", function() { return ClusterMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components_atoms_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/atoms/Button */ "./components/atoms/Button.tsx");
/* harmony import */ var _components_organisms_Todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/organisms/Todo */ "./components/organisms/Todo.tsx");
/* harmony import */ var _components_organisms_Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/organisms/Wrapper */ "./components/organisms/Wrapper.tsx");
/* harmony import */ var _components_organisms_ClusterModnn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/organisms/ClusterModnn */ "./components/organisms/ClusterModnn.tsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\shyuniz\\Desktop\\moreh\\self-kubernetes\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var ClusterMode;

(function (ClusterMode) {
  ClusterMode["none"] = "";
  ClusterMode["hex"] = "hex";
  ClusterMode["chart"] = "chart";
  ClusterMode["modnn"] = "modnn";
})(ClusterMode || (ClusterMode = {}));

var Index = function Index() {
  _s();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      moreh = _useState[0],
      setMoreh = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(ClusterMode.modnn),
      mode = _useState2[0],
      setMode = _useState2[1];

  var kubernetes = {
    title: 'Kubernetes',
    subtitle: 'Kubernetes API test',
    items: [{
      name: 'API' // link: 'kubernetes/test'

    } // {
    //   name: 'login'
    // },
    // {
    //   name: 'token'
    // }
    ]
  };
  var nvidia = {
    title: 'NVIDIA',
    subtitle: 'dashboard (nvidia-smi)',
    items: [{
      name: 'p100',
      link: 'nvidia/dashboard'
    }]
  };
  var amd = {
    title: 'AMD',
    subtitle: 'dashboard (rocm-smi)',
    items: [{
      name: 'rx51',
      link: 'amd/dashboard1'
    }, {
      name: 'rx52',
      link: 'amd/dashboard2'
    }]
  };
  var etc = {
    title: 'DASHBOARD',
    items: [{
      name: 'manual',
      link: 'total/manual'
    }, {
      name: 'p100 + rx51 + rx52',
      link: 'total/dashboard'
    }]
  };
  var doc = {
    title: 'Document',
    items: [{
      name: 'README',
      link: 'doc/readme'
    }, {
      name: 'dev test',
      link: 'doc/test'
    }]
  }; // const changelanguageToKo = () => i18n.changeLanguage('ko');
  // const changelanguageToEn = () => i18n.changeLanguage('en');

  return __jsx(_components_organisms_Wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx("h1", {
    style: {
      margin: '10px 0',
      textAlign: 'center',
      fontWeight: 600
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, "Admin Page"), __jsx("nav", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx(_components_atoms_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    primary: moreh,
    onClick: function onClick() {
      return setMoreh(function (prev) {
        return !prev;
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, moreh ? 'Moreh > User' : 'User > Moreh'), !moreh && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_atoms_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      backgroundColor: mode === ClusterMode.modnn ? '#b06601' : '',
      color: mode === ClusterMode.modnn ? '#ffd36b' : ''
    },
    onClick: function onClick() {
      return setMode(ClusterMode.modnn);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "modnn"))), !moreh && mode === ClusterMode.modnn && __jsx(_components_organisms_ClusterModnn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 48
    }
  }), moreh && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_organisms_Todo__WEBPACK_IMPORTED_MODULE_4__["Todo"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, etc, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  })), __jsx(_components_organisms_Todo__WEBPACK_IMPORTED_MODULE_4__["Todo"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, doc, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  })), __jsx(_components_organisms_Todo__WEBPACK_IMPORTED_MODULE_4__["Todo"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, nvidia, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  })), __jsx(_components_organisms_Todo__WEBPACK_IMPORTED_MODULE_4__["Todo"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, amd, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  })), __jsx(_components_organisms_Todo__WEBPACK_IMPORTED_MODULE_4__["Todo"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, kubernetes, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }))));
};

_s(Index, "4+0VHWgK1GIASmB2vk/rx64Iy5c=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"]];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ2x1c3RlckhleEl0ZW0udHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9DbHVzdGVyTW9kbm4udHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c0xvb3NlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vY2FjaGUvZGlzdC9jYWNoZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2NvcmUvZGlzdC9jb3JlLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vY29yZS9kaXN0L2Vtb3Rpb24tZWxlbWVudC01N2EzYTdhMy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2Nzcy9kaXN0L2Nzcy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2hhc2gvZGlzdC9oYXNoLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc2VyaWFsaXplL2Rpc3Qvc2VyaWFsaXplLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc2hlZXQvZGlzdC9zaGVldC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3V0aWxzL2Rpc3QvdXRpbHMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi93ZWFrLW1lbW9pemUvZGlzdC93ZWFrLW1lbW9pemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21lbW9pemUtb25lL2Rpc3QvbWVtb2l6ZS1vbmUuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtYXV0b3NpemUvbGliL0F1dG9zaXplSW5wdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC9TZWxlY3QtOWZkYjhjZDAuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC9pbmRleC00MzIyYzBlZC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9kaXN0L3N0YXRlTWFuYWdlci0wNGY3MzRhMi5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9kaXN0L3V0aWxzLTA2YjBkNWE0LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiaG92ZXJTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJTdHlsZWRJdGVtV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiY29ubmVjdCIsIlN0eWxlZFZhbHVlU3RhdHVzIiwidmFsdWUiLCJTdHlsZWRDb25uZWN0aW9uU3RhdHVzIiwiU3R5bGVkSG92ZXJDb250ZW50IiwiaG92ZXIiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJjc3MiLCJTdHlsZWRIb3ZlckNvbnRlbnRCb2R5V3JhcHBlciIsInVsIiwidGhlbWUiLCJjb2xvcnMiLCJib3JkZXIiLCJzZXR0aW5nQXhpb3MiLCJpcCIsImNvbm4iLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJ0aW1lb3V0IiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsInBhcmFtcyIsInN0YXJ0VGltZSIsIkRhdGUiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsImVuZFRpbWUiLCJkdXJhdGlvbiIsImZpbmRUcmVlSW5OdmlkaWEiLCJqc29uT2JqZWN0Iiwic2VhcmNoIiwidG9rZW4iLCJpbmRleE9mIiwidGFyZ2V0Iiwic3Vic3RyIiwicGFyYW0iLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJDbHVzdGVySGV4SXRlbSIsIm5hbWUiLCJ0eXBlIiwiZmlsdGVyIiwicmFuZ2UiLCJmaWx0ZXJlZCIsIlNldHRpbmciLCJmaWx0ZXJPcHRpb24iLCJlbCIsInVzZVN0YXRlIiwic2V0RHVyYXRpb24iLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJsYXRlbmN5Iiwic2V0TGF0ZW5jeSIsImFtZEdwdUxpc3QiLCJzZXRBbWRHcHVMaXN0Iiwic2V0SG92ZXIiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0ZXN0IiwiZW52QU1EIiwiYW1kIiwiZW52TlZJRElBIiwibnZpZGlhIiwidXNlRWZmZWN0IiwidW5tb3VudCIsIm9uTG9hZEFwaSIsInVybCIsImdldCIsInRoZW4iLCJzdGF0dXMiLCJkYXRhIiwiY29tbWFuZERlbGF5Iiwic21pUmVzdWx0IiwibnZpZGlhX3NtaV9sb2ciLCJjb25zb2xlIiwiT2JqZWN0Iiwia2V5cyIsImxvZyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidGVtcEFycmF5IiwiZm9yRWFjaCIsImRldmljZSIsInB1c2giLCJkZXZpY2VOYW1lIiwiZ3B1IiwiZGV2aWNlSW5kZXgiLCJnZXRQYXJzZVZhbHVlIiwic3VtIiwicGFyc2VJbnQiLCJtYXgiLCJJbmZpbml0eSIsIk1hdGgiLCJtaW4iLCJlIiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsIm1hcCIsImVsSW5kZXgiLCJtYXJnaW5DVyIsIlN0eWxlZENsdXN0ZXJXcmFwcGVyIiwic2VjdGlvbiIsIlN0eWxlZENsdXN0ZXJJdGVtV3JhcHBlciIsImFydGljbGUiLCJjdXN0b21TdHlsZXMiLCJzZWxlY3RUeXBlIiwib3B0aW9uIiwicHJvdmlkZWQiLCJzdGF0ZSIsImJvcmRlckJvdHRvbSIsImNvbG9yIiwiaXNTZWxlY3RlZCIsImNvbnRhaW5lciIsIm1hcmdpbkxlZnQiLCJDbHVzdGVySGV4IiwiZmlsdGVyT3B0aW9ucyIsImNsdXN0ZXJJbmZvIiwicmFuZ2VPcHRpb25zIiwibGFiZWwiLCJkZWZhdWx0RmlsdGVyIiwiZGVmYXVsdFJhbmdlIiwic2V0RmlsdGVyIiwic2V0UmFuZ2UiLCJkaXNwbGF5IiwibWFyZ2luQm90dG9tIiwiY2x1c3RlcnMiLCJjbHVzdGVyIiwiY2x1c3RlckluZGV4Iiwibm9kZXMiLCJub2RlIiwibm9kZUluZGV4IiwiQ2x1c3Rlck1vZGUiLCJJbmRleCIsInVzZVRyYW5zbGF0aW9uIiwidCIsIm1vcmVoIiwic2V0TW9yZWgiLCJtb2RubiIsIm1vZGUiLCJzZXRNb2RlIiwia3ViZXJuZXRlcyIsInRpdGxlIiwic3VidGl0bGUiLCJpdGVtcyIsImxpbmsiLCJldGMiLCJkb2MiLCJtYXJnaW4iLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0IiwicHJldiIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLE9BQUssRUFBRSxHQURTO0FBRWhCQyxRQUFNLEVBQUU7QUFGUSxDQUFsQjtBQWtCQSxJQUFNQyxpQkFBaUIsZ0JBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd01BUUQsVUFBQ0MsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsT0FBTixHQUFnQixTQUFoQixHQUE0QixhQUF4QztBQUFBLENBUkMsQ0FBdkI7S0FBTUosaUI7QUFZTixJQUFNSyxpQkFBaUIsZ0JBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscUtBU1YsVUFBQ0MsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0csS0FBTixHQUFjSCxLQUFLLENBQUNHLEtBQXBCLEdBQTRCLENBQXhDO0FBQUEsQ0FUVSxDQUF2QjtNQUFNRCxpQjtBQVdOLElBQU1FLHNCQUFzQixnQkFBR04seURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpSUFRTixVQUFDQyxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDQyxPQUFOLEdBQWdCLE9BQWhCLEdBQTBCLEtBQXRDO0FBQUEsQ0FSTSxDQUE1QjtNQUFNRyxzQjtBQVVOLElBQU1DLGtCQUFrQixnQkFBR1AseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvR0FDWCxVQUFDQyxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDTSxLQUFOLEdBQWMsT0FBZCxHQUF3QixNQUFwQztBQUFBLENBRFcsRUFHYlosU0FBUyxDQUFDQyxLQUhHLEVBSVpELFNBQVMsQ0FBQ0UsTUFKRSxFQVFwQixVQUFDSSxLQUFELEVBQVc7QUFDWCxNQUFJQSxLQUFLLENBQUNNLEtBQU4sSUFBZU4sS0FBSyxDQUFDTSxLQUFOLENBQVksR0FBWixDQUFmLElBQW1DTixLQUFLLENBQUNNLEtBQU4sQ0FBWSxHQUFaLElBQW1CWixTQUFTLENBQUNDLEtBQTdCLEdBQXFDWSxNQUFNLENBQUNDLFVBQW5GLEVBQStGO0FBQzdGLFFBQUlSLEtBQUssQ0FBQ00sS0FBTixJQUFlTixLQUFLLENBQUNNLEtBQU4sQ0FBWSxHQUFaLENBQWYsSUFBbUNOLEtBQUssQ0FBQ00sS0FBTixDQUFZLEdBQVosSUFBbUJaLFNBQVMsQ0FBQ0UsTUFBN0IsR0FBc0NXLE1BQU0sQ0FBQ0UsV0FBcEYsRUFBaUc7QUFDL0YsYUFBT0MsNkRBQVA7QUFNRDs7QUFDRCxXQUFPQSw2REFBUDtBQUlEOztBQUNELE1BQUlWLEtBQUssQ0FBQ00sS0FBTixJQUFlTixLQUFLLENBQUNNLEtBQU4sQ0FBWSxHQUFaLENBQWYsSUFBbUNOLEtBQUssQ0FBQ00sS0FBTixDQUFZLEdBQVosSUFBbUJaLFNBQVMsQ0FBQ0UsTUFBN0IsR0FBc0NXLE1BQU0sQ0FBQ0UsV0FBcEYsRUFBaUc7QUFDL0YsV0FBT0MsNkRBQVA7QUFJRDtBQUNGLENBN0JxQixDQUF4QjtNQUFNTCxrQjtBQStCTixJQUFNTSw2QkFBNkIsZ0JBQUdiLHlEQUFNLENBQUNjLEVBQVY7QUFBQTtBQUFBO0FBQUEsMFdBSXhCbEIsU0FBUyxDQUFDQyxLQUpjLEVBS3ZCRCxTQUFTLENBQUNFLE1BTGEsRUFRYjtBQUFBLE1BQUdpQixLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYVIsS0FBNUI7QUFBQSxDQVJhLEVBVWI7QUFBQSxNQUFHTyxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsTUFBNUI7QUFBQSxDQVZhLENBQW5DO01BQU1KLDZCOztBQWtETixJQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxFQUFELEVBQStCO0FBQ2xELE1BQU1DLElBQUksR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQ3hCQyxXQUFPLEVBQUVKLEVBRGU7QUFFeEJLLFdBQU8sRUFBRSxLQUFLO0FBRlUsR0FBYixDQUFiO0FBS0FKLE1BQUksQ0FBQ0ssWUFBTCxDQUFrQkMsT0FBbEIsQ0FBMEJDLEdBQTFCLENBQ0UsVUFBQ0MsTUFBRCxFQUFZO0FBQ1ZBLFVBQU0sQ0FBQ0MsTUFBUCxHQUFnQjtBQUFFQyxlQUFTLEVBQUUsSUFBSUMsSUFBSjtBQUFiLEtBQWhCO0FBQ0EsV0FBT0gsTUFBUDtBQUNELEdBSkgsRUFLRSxVQUFDSSxLQUFELEVBQVc7QUFDVCxXQUFPQyxPQUFPLENBQUNDLE1BQVIsQ0FBZUYsS0FBZixDQUFQO0FBQ0QsR0FQSDtBQVVBWixNQUFJLENBQUNLLFlBQUwsQ0FBa0JVLFFBQWxCLENBQTJCUixHQUEzQixDQUNFLFVBQUNRLFFBQUQsRUFBYztBQUNaQSxZQUFRLENBQUNQLE1BQVQsQ0FBZ0JDLE1BQWhCLENBQXVCTyxPQUF2QixHQUFpQyxJQUFJTCxJQUFKLEVBQWpDO0FBQ0FJLFlBQVEsQ0FBQ1AsTUFBVCxDQUFnQkMsTUFBaEIsQ0FBdUJRLFFBQXZCLEdBQWtDRixRQUFRLENBQUNQLE1BQVQsQ0FBZ0JDLE1BQWhCLENBQXVCTyxPQUF2QixHQUFpQ0QsUUFBUSxDQUFDUCxNQUFULENBQWdCQyxNQUFoQixDQUF1QkMsU0FBMUY7QUFDQSxXQUFPSyxRQUFQO0FBQ0QsR0FMSCxFQU1FLFVBQUNILEtBQUQsRUFBVztBQUNUQSxTQUFLLENBQUNKLE1BQU4sQ0FBYUMsTUFBYixDQUFvQk8sT0FBcEIsR0FBOEIsSUFBSUwsSUFBSixFQUE5QjtBQUNBQyxTQUFLLENBQUNKLE1BQU4sQ0FBYUMsTUFBYixDQUFvQlEsUUFBcEIsR0FBK0JMLEtBQUssQ0FBQ0osTUFBTixDQUFhQyxNQUFiLENBQW9CTyxPQUFwQixHQUE4QkosS0FBSyxDQUFDSixNQUFOLENBQWFDLE1BQWIsQ0FBb0JDLFNBQWpGO0FBQ0EsV0FBT0csT0FBTyxDQUFDQyxNQUFSLENBQWVGLEtBQWYsQ0FBUDtBQUNELEdBVkg7QUFhQSxTQUFPWixJQUFQO0FBQ0QsQ0E5QkQ7O0FBZ0NBLElBQU1rQixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFVBQUQsRUFBa0JDLE1BQWxCLEVBQXFDO0FBQzVELE1BQU1DLEtBQUssR0FBRyxHQUFkOztBQUNBLE1BQUlELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlRCxLQUFmLElBQXdCLENBQTVCLEVBQStCO0FBQzdCLFdBQU9GLFVBQVUsQ0FBQ0MsTUFBRCxDQUFqQjtBQUNELEdBRkQsTUFFTztBQUNMLFFBQU1HLE1BQU0sR0FBR0gsTUFBTSxDQUFDSSxNQUFQLENBQWMsQ0FBZCxFQUFpQkosTUFBTSxDQUFDRSxPQUFQLENBQWVELEtBQWYsQ0FBakIsQ0FBZjtBQUNBLFFBQU1JLEtBQUssR0FBR0wsTUFBTSxDQUFDSSxNQUFQLENBQWNKLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlRCxLQUFmLElBQXdCQSxLQUFLLENBQUNLLE1BQTVDLENBQWQ7O0FBQ0EsUUFBSSxPQUFPUCxVQUFVLENBQUNJLE1BQUQsQ0FBakIsS0FBOEIsUUFBbEMsRUFBNEM7QUFDMUMsYUFBT0wsZ0JBQWdCLENBQUNDLFVBQVUsQ0FBQ0ksTUFBRCxDQUFYLEVBQXFCRSxLQUFyQixDQUF2QjtBQUNELEtBRkQsTUFFTyxJQUFJLE9BQU9OLFVBQVUsQ0FBQ0ksTUFBRCxDQUFqQixLQUE4QixRQUFsQyxFQUE0QztBQUNqRCxhQUFPSixVQUFVLENBQUNJLE1BQUQsQ0FBakI7QUFDRDtBQUNGOztBQUNELFNBQU9JLFNBQVA7QUFDRCxDQWREOztBQWdCTyxJQUFNQyxjQUE2QyxHQUFHLFNBQWhEQSxjQUFnRCxRQUF1QztBQUFBOztBQUFBLE1BQXBDQyxJQUFvQyxTQUFwQ0EsSUFBb0M7QUFBQSxNQUE5QkMsSUFBOEIsU0FBOUJBLElBQThCO0FBQUEsTUFBeEIvQixFQUF3QixTQUF4QkEsRUFBd0I7QUFBQSxNQUFwQmdDLE1BQW9CLFNBQXBCQSxNQUFvQjtBQUFBLE1BQVpDLEtBQVksU0FBWkEsS0FBWTtBQUNsRyxNQUFNaEMsSUFBSSxHQUFHRixZQUFZLENBQUNDLEVBQUQsQ0FBekI7QUFDQSxNQUFNa0MsUUFBUSxHQUFHQyw4Q0FBTyxDQUFDQyxZQUFSLENBQXFCSixNQUFyQixDQUE0QixVQUFDSyxFQUFEO0FBQUEsV0FBUUEsRUFBRSxDQUFDbkQsS0FBSCxLQUFhOEMsTUFBckI7QUFBQSxHQUE1QixDQUFqQjs7QUFGa0csa0JBSWxFTSxzREFBUSxDQUFTLENBQUMsQ0FBVixDQUowRDtBQUFBLE1BSTNGcEIsUUFKMkY7QUFBQSxNQUlqRnFCLFdBSmlGOztBQUFBLG1CQUt0RUQsc0RBQVEsQ0FBTVYsU0FBTixDQUw4RDtBQUFBLE1BSzNGWSxNQUwyRjtBQUFBLE1BS25GQyxTQUxtRjs7QUFBQSxtQkFNcEVILHNEQUFRLENBQVMsQ0FBQyxDQUFWLENBTjREO0FBQUEsTUFNM0ZJLE9BTjJGO0FBQUEsTUFNbEZDLFVBTmtGOztBQUFBLG1CQU85REwsc0RBQVEsQ0FBVyxFQUFYLENBUHNEO0FBQUEsTUFPM0ZNLFVBUDJGO0FBQUEsTUFPL0VDLGFBUCtFOztBQUFBLG1CQVF4RVAsc0RBQVEsQ0FBb0IsS0FBcEIsQ0FSZ0U7QUFBQSxNQVEzRmpELEtBUjJGO0FBQUEsTUFRcEZ5RCxRQVJvRjs7QUFBQSxtQkFTdEVSLHNEQUFRLENBQWUsRUFBZixDQVQ4RDtBQUFBLE1BUzNGUyxNQVQyRjtBQUFBLE1BU25GQyxTQVRtRjs7QUFVbEcsTUFBTUMsSUFBSSxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsRUFBL0IsRUFBbUMsRUFBbkMsRUFBdUMsRUFBdkMsRUFBMkMsRUFBM0MsRUFBK0MsRUFBL0MsRUFBbUQsRUFBbkQsRUFBdUQsRUFBdkQsRUFBMkQsRUFBM0QsRUFBK0QsRUFBL0QsRUFBbUUsRUFBbkUsQ0FBYjtBQUVBLE1BQU1DLE1BQU0sR0FBR2YsOENBQU8sQ0FBQ2dCLEdBQXZCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHakIsOENBQU8sQ0FBQ2tCLE1BQTFCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLE9BQU8sR0FBRyxLQUFkOztBQUNBLFFBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsVUFBTUMsR0FBRyxHQUFHMUIsSUFBSSxLQUFLLEtBQVQsY0FBcUJBLElBQXJCLDJCQUEwQ0EsSUFBMUMsU0FBWjtBQUNBOUIsVUFBSSxDQUNEeUQsR0FESCxDQUNPRCxHQURQLEVBRUdFLElBRkgsQ0FFUSxVQUFDM0MsUUFBRCxFQUFjO0FBQ2xCLFlBQUl1QyxPQUFKLEVBQWE7QUFFYmhCLG1CQUFXLENBQUN2QixRQUFRLENBQUNQLE1BQVQsQ0FBZ0JDLE1BQWhCLENBQXVCUSxRQUF4QixDQUFYOztBQUVBLFlBQUlGLFFBQVEsQ0FBQzRDLE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7QUFDM0JqQixvQkFBVSxDQUFDM0IsUUFBUSxDQUFDNkMsSUFBVCxDQUFjQyxZQUFmLENBQVY7O0FBRUEsY0FBSS9CLElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQ3JCLGdCQUFJZixRQUFRLENBQUM2QyxJQUFULENBQWNoRCxLQUFkLEtBQXdCLElBQTVCLEVBQWtDO0FBQ2hDNEIsdUJBQVMsQ0FBQ3pCLFFBQVEsQ0FBQzZDLElBQVQsQ0FBY0UsU0FBZCxDQUF3QkMsY0FBekIsQ0FBVDtBQUNELGFBRkQsTUFFTztBQUNMQyxxQkFBTyxDQUFDcEQsS0FBUixDQUFjRyxRQUFRLENBQUM2QyxJQUFULENBQWNoRCxLQUE1QjtBQUNEO0FBQ0YsV0FORCxNQU1PLElBQUlrQixJQUFJLEtBQUssS0FBYixFQUFvQjtBQUN6QixnQkFBSWYsUUFBUSxDQUFDNkMsSUFBVCxDQUFjaEQsS0FBZCxLQUF3QixJQUE1QixFQUFrQztBQUNoQzRCLHVCQUFTLENBQUN6QixRQUFELENBQVQ7O0FBQ0Esa0JBQUk0QixVQUFVLENBQUNqQixNQUFYLEtBQXNCWCxRQUFRLENBQUM2QyxJQUFULENBQWNFLFNBQWQsQ0FBd0JwQyxNQUFsRCxFQUEwRDtBQUN4RGtCLDZCQUFhLENBQUNxQixNQUFNLENBQUNDLElBQVAsQ0FBWW5ELFFBQVEsQ0FBQzZDLElBQVQsQ0FBY0UsU0FBMUIsQ0FBRCxDQUFiO0FBQ0Q7QUFDRixhQUxELE1BS087QUFDTEUscUJBQU8sQ0FBQ3BELEtBQVIsQ0FBY0csUUFBUSxDQUFDNkMsSUFBVCxDQUFjaEQsS0FBNUI7QUFDRDtBQUNGO0FBQ0YsU0FuQkQsTUFtQk87QUFDTDRCLG1CQUFTLENBQUNiLFNBQUQsQ0FBVDtBQUNEO0FBQ0YsT0E3QkgsV0E4QlMsVUFBQ2YsS0FBRCxFQUFXO0FBQ2hCLFlBQUkwQyxPQUFKLEVBQWE7QUFDYmhCLG1CQUFXLENBQUMsQ0FBQyxDQUFGLENBQVg7QUFDQTBCLGVBQU8sQ0FBQ0csR0FBUixDQUFZLE9BQVosRUFBcUJ2RCxLQUFyQjtBQUNELE9BbENIO0FBbUNELEtBckNEOztBQXVDQSxRQUFNd0QsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUNqQ2QsZUFBUztBQUNWLEtBRjJCLEVBRXpCLElBRnlCLENBQTVCO0FBSUEsV0FBTyxZQUFNO0FBQ1hELGFBQU8sR0FBRyxJQUFWO0FBQ0FnQixtQkFBYSxDQUFDRixRQUFELENBQWI7QUFDRCxLQUhEO0FBSUQsR0FqRFEsRUFpRE4sRUFqRE0sQ0FBVDtBQW1EQWYseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSWQsTUFBSixFQUFZO0FBQ1YsVUFBSVQsSUFBSSxLQUFLLEtBQVQsSUFBa0JhLFVBQVUsQ0FBQ2pCLE1BQVgsR0FBb0IsQ0FBMUMsRUFBNkM7QUFDM0MsWUFBTWtDLElBQUksR0FBR3JCLE1BQU0sQ0FBQ3FCLElBQVAsQ0FBWUUsU0FBekI7QUFDQSxZQUFNUyxTQUF1QixHQUFHLEVBQWhDO0FBRUE1QixrQkFBVSxDQUFDNkIsT0FBWCxDQUFtQixVQUFDQyxNQUFELEVBQVk7QUFDN0IsY0FBSUEsTUFBTSxLQUFLLFFBQWYsRUFBeUI7O0FBQ3pCLGNBQUl4QyxRQUFRLENBQUNQLE1BQVQsR0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkI2QyxxQkFBUyxDQUFDRyxJQUFWLENBQWU7QUFDYjdDLGtCQUFJLEVBQUUrQixJQUFJLENBQUNhLE1BQUQsQ0FBSixDQUFheEIsTUFBTSxDQUFDMEIsVUFBcEIsQ0FETztBQUViMUYsbUJBQUssRUFBRTJFLElBQUksQ0FBQ2EsTUFBRCxDQUFKLENBQWF4QyxRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlpQixHQUF6QjtBQUZNLGFBQWY7QUFJRDtBQUNGLFNBUkQ7QUFTQUgsaUJBQVMsQ0FBQ3dCLFNBQUQsQ0FBVDtBQUNEOztBQUNELFVBQUl6QyxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQixZQUFNOEIsS0FBSSxHQUFHckIsTUFBTSxDQUFDcUMsR0FBcEI7QUFDQSxZQUFNTCxVQUF1QixHQUFHLEVBQWhDOztBQUNBWCxhQUFJLENBQUNZLE9BQUwsQ0FBYSxVQUFDQyxNQUFELEVBQVNJLFdBQVQsRUFBeUI7QUFDcENOLG9CQUFTLENBQUNHLElBQVYsQ0FBZTtBQUNiN0MsZ0JBQUksRUFBRTRDLE1BQU0sQ0FBQ3RCLFNBQVMsQ0FBQ3dCLFVBQVgsQ0FEQztBQUViMUYsaUJBQUssRUFBRWlDLGdCQUFnQixDQUFDMEMsS0FBSSxDQUFDaUIsV0FBRCxDQUFMLEVBQW9CNUMsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZbUIsTUFBaEM7QUFGVixXQUFmO0FBSUQsU0FMRDs7QUFNQUwsaUJBQVMsQ0FBQ3dCLFVBQUQsQ0FBVDtBQUNEO0FBQ0Y7QUFDRixHQTdCUSxFQTZCTixDQUFDaEMsTUFBRCxDQTdCTSxDQUFUOztBQStCQSxNQUFNdUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLFFBQUloQyxNQUFNLENBQUNwQixNQUFQLEtBQWtCLENBQXRCLEVBQXlCLE9BQU8sQ0FBUDs7QUFDekIsWUFBUU0sS0FBUjtBQUNFLFdBQUssS0FBTDtBQUNFLFlBQUkrQyxHQUFHLEdBQUcsQ0FBVjtBQUNBakMsY0FBTSxDQUFDMEIsT0FBUCxDQUFlLFVBQUNwQyxFQUFEO0FBQUEsaUJBQVMyQyxHQUFHLElBQUlDLFFBQVEsQ0FBQzVDLEVBQUUsQ0FBQ25ELEtBQUosRUFBVyxFQUFYLENBQXhCO0FBQUEsU0FBZjtBQUNBLGVBQU84RixHQUFHLEdBQUdqQyxNQUFNLENBQUNwQixNQUFiLElBQXVCLENBQTlCOztBQUNGLFdBQUssS0FBTDtBQUNFLFlBQUl1RCxHQUFHLEdBQUcsQ0FBQ0MsUUFBWDtBQUNBcEMsY0FBTSxDQUFDMEIsT0FBUCxDQUFlLFVBQUNwQyxFQUFEO0FBQUEsaUJBQVM2QyxHQUFHLEdBQUdFLElBQUksQ0FBQ0YsR0FBTCxDQUFTQSxHQUFULEVBQWNELFFBQVEsQ0FBQzVDLEVBQUUsQ0FBQ25ELEtBQUosRUFBVyxFQUFYLENBQXRCLENBQWY7QUFBQSxTQUFmO0FBQ0EsZUFBT2dHLEdBQVA7O0FBQ0YsV0FBSyxLQUFMO0FBQ0UsWUFBSUcsR0FBRyxHQUFHRixRQUFWO0FBQ0FwQyxjQUFNLENBQUMwQixPQUFQLENBQWUsVUFBQ3BDLEVBQUQ7QUFBQSxpQkFBU2dELEdBQUcsR0FBR0QsSUFBSSxDQUFDQyxHQUFMLENBQVNBLEdBQVQsRUFBY0osUUFBUSxDQUFDNUMsRUFBRSxDQUFDbkQsS0FBSixFQUFXLEVBQVgsQ0FBdEIsQ0FBZjtBQUFBLFNBQWY7QUFDQSxlQUFPbUcsR0FBUDs7QUFDRjtBQUNFLGVBQU8sQ0FBUDtBQWRKO0FBZ0JELEdBbEJEOztBQW9CQSxTQUNFLG1FQUVFLE1BQUMsaUJBQUQsQ0FDRTtBQURGO0FBRUUsV0FBTyxFQUFFbkUsUUFBUSxLQUFLLENBQUMsQ0FGekI7QUFHRSxTQUFLLEVBQUUsQ0FIVDtBQUlFLGdCQUFZLEVBQUUsc0JBQUNvRSxDQUFEO0FBQUEsYUFBT3hDLFFBQVEsQ0FBQztBQUFFeUMsU0FBQyxFQUFFRCxDQUFDLENBQUNFLE9BQVA7QUFBZ0JDLFNBQUMsRUFBRUgsQ0FBQyxDQUFDSTtBQUFyQixPQUFELENBQWY7QUFBQSxLQUpoQjtBQUtFLGdCQUFZLEVBQUU7QUFBQSxhQUFNNUMsUUFBUSxDQUFDLEtBQUQsQ0FBZDtBQUFBLEtBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLGlCQUFEO0FBQW1CLFNBQUssRUFBRWlDLGFBQWEsS0FBSyxJQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRSxNQUFDLHNCQUFEO0FBQXdCLFdBQU8sRUFBRTdELFFBQVEsS0FBSyxDQUFDLENBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFLE1BQUMsa0JBQUQ7QUFBb0IsU0FBSyxFQUFFN0IsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBSSxhQUFTLEVBQUUsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlCeUMsSUFBekIsQ0FGRixFQUdFO0FBQUksYUFBUyxFQUFFLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLEVBSUU7QUFBSSxhQUFTLEVBQUUsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlCWixRQUFRLEtBQUssQ0FBQyxDQUFkLEdBQWtCLEVBQWxCLGFBQTBCQSxRQUFRLEdBQUcsSUFBckMsTUFBekIsQ0FKRixFQUtFO0FBQUksYUFBUyxFQUFFLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLEVBTUU7QUFBSSxhQUFTLEVBQUUsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlCd0IsT0FBTyxLQUFLLENBQUMsQ0FBYixHQUFpQixFQUFqQixhQUF5QkEsT0FBTyxHQUFHLElBQW5DLE1BQXpCLENBTkYsRUFPR0ssTUFBTSxDQUFDNEMsR0FBUCxDQUFXLFVBQUN0RCxFQUFELEVBQUt1RCxPQUFMO0FBQUEsV0FDVixNQUFDLDhDQUFEO0FBQVUsU0FBRyxFQUFFQSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBRSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMkJ2RCxFQUFFLENBQUNQLElBQTlCLENBREYsRUFFRTtBQUFJLGVBQVMsRUFBRSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBeUJPLEVBQUUsQ0FBQ25ELEtBQTVCLENBRkYsQ0FEVTtBQUFBLEdBQVgsQ0FQSCxDQURGLENBVEYsQ0FGRixDQURGO0FBZ0NELENBckpNOztHQUFNMkMsYzs7TUFBQUEsYztBQXVKRUEsNkVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqVkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBLElBQU1nRSxRQUFRLEdBQUcsRUFBakI7QUFDQSxJQUFNQyxvQkFBb0IsZ0JBQUdqSCx5REFBTSxDQUFDa0gsT0FBVjtBQUFBO0FBQUE7QUFBQSx3RkFDSEYsUUFBUSxHQUFHLENBRFIsRUFFWkEsUUFGWSxDQUExQjtLQUFNQyxvQjtBQVFOLElBQU1FLHdCQUF3QixnQkFBR25ILHlEQUFNLENBQUNvSCxPQUFWO0FBQUE7QUFBQTtBQUFBLG9DQUE5QjtNQUFNRCx3Qjs7QUFLTixJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxVQUFELEVBQXdCO0FBQzNDLFNBQU87QUFDTEMsVUFBTSxFQUFFLGdCQUFDQyxRQUFELEVBQWdCQyxLQUFoQjtBQUFBLDZDQUNIRCxRQURHO0FBRU5FLG9CQUFZLEVBQUUsaUJBRlI7QUFHTkMsYUFBSyxFQUFFRixLQUFLLENBQUNHLFVBQU4sR0FBbUIsTUFBbkIsR0FBNEI7QUFIN0I7QUFBQSxLQURIO0FBTUxDLGFBQVMsRUFBRSxtQkFBQ0wsUUFBRDtBQUFBLDZDQUNOQSxRQURNO0FBRVQzSCxhQUFLLEVBQUV5SCxVQUFVLEtBQUssS0FBZixHQUF1QixPQUF2QixHQUFpQyxPQUYvQjtBQUdUUSxrQkFBVSxFQUFFO0FBSEg7QUFBQTtBQU5OLEdBQVA7QUFZRCxDQWJEOztBQWVPLElBQU1DLFVBQW9CLEdBQUcsU0FBdkJBLFVBQXVCLEdBQU07QUFBQTs7QUFDeEMsTUFBTUMsYUFBYSxHQUFHQyw4Q0FBVyxDQUFDMUUsWUFBbEM7QUFDQSxNQUFNMkUsWUFBWSxHQUFHLENBQ25CO0FBQUU3SCxTQUFLLEVBQUUsS0FBVDtBQUFnQjhILFNBQUssRUFBRTtBQUF2QixHQURtQixFQUVuQjtBQUFFOUgsU0FBSyxFQUFFLEtBQVQ7QUFBZ0I4SCxTQUFLLEVBQUU7QUFBdkIsR0FGbUIsRUFHbkI7QUFBRTlILFNBQUssRUFBRSxLQUFUO0FBQWdCOEgsU0FBSyxFQUFFO0FBQXZCLEdBSG1CLENBQXJCO0FBS0EsTUFBTUMsYUFBYSxHQUFHLENBQXRCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLENBQXJCOztBQVJ3QyxrQkFTWjVFLHNEQUFRLENBQVN1RSxhQUFhLENBQUNJLGFBQUQsQ0FBYixDQUE2Qi9ILEtBQXRDLENBVEk7QUFBQSxNQVNqQzhDLE1BVGlDO0FBQUEsTUFTekJtRixTQVR5Qjs7QUFBQSxtQkFVZDdFLHNEQUFRLENBQVN5RSxZQUFZLENBQUNHLFlBQUQsQ0FBWixDQUEyQmhJLEtBQXBDLENBVk07QUFBQSxNQVVqQytDLEtBVmlDO0FBQUEsTUFVMUJtRixRQVYwQjs7QUFZeEMsU0FDRSxtRUFDRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxhQUFPLEVBQUUsTUFBWDtBQUFtQkMsa0JBQVksRUFBRTtBQUFqQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQ0UsY0FBVSxFQUFFLGVBRGQ7QUFFRSxVQUFNLEVBQUVwQixZQUFZLENBQUMsS0FBRCxDQUZ0QjtBQUdFLFdBQU8sRUFBRVcsYUFIWDtBQUlFLFlBQVEsRUFBRSxrQkFBQ3ZCLENBQUQ7QUFBQSxhQUFPNkIsU0FBUyxDQUFDN0IsQ0FBQyxDQUFDLE9BQUQsQ0FBRixDQUFoQjtBQUFBLEtBSlo7QUFLRSxnQkFBWSxFQUFFdUIsYUFBYSxDQUFDSSxhQUFELENBTDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFFLE1BQUMsb0RBQUQ7QUFDRSxjQUFVLEVBQUUsY0FEZDtBQUVFLFVBQU0sRUFBRWYsWUFBWSxDQUFDLE9BQUQsQ0FGdEI7QUFHRSxXQUFPLEVBQUVhLFlBSFg7QUFJRSxZQUFRLEVBQUUsa0JBQUN6QixDQUFEO0FBQUEsYUFBTzhCLFFBQVEsQ0FBQzlCLENBQUMsQ0FBQyxPQUFELENBQUYsQ0FBZjtBQUFBLEtBSlo7QUFLRSxnQkFBWSxFQUFFeUIsWUFBWSxDQUFDRyxZQUFELENBTDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQURGLEVBaUJHSiw4Q0FBVyxDQUFDUyxRQUFaLENBQXFCNUIsR0FBckIsQ0FBeUIsVUFBQzZCLE9BQUQsRUFBVUMsWUFBVjtBQUFBLFdBQ3hCLE1BQUMsb0JBQUQ7QUFBc0IsU0FBRyxFQUFFQSxZQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBY0QsT0FBTyxDQUFDMUYsSUFBdEIsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUdFLE1BQUMsd0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHMEYsT0FBTyxDQUFDRSxLQUFSLENBQWMvQixHQUFkLENBQWtCLFVBQUNnQyxJQUFELEVBQU9DLFNBQVA7QUFBQSxhQUNqQixNQUFDLDhDQUFEO0FBQVUsV0FBRyxZQUFLSCxZQUFMLGNBQXFCRyxTQUFyQixjQUFrQ0QsSUFBSSxDQUFDN0YsSUFBdkMsY0FBK0M2RixJQUFJLENBQUM1RixJQUFwRCxjQUE0RDRGLElBQUksQ0FBQzNILEVBQWpFLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsdURBQUQ7QUFBTSxZQUFJLEVBQUUySCxJQUFJLENBQUM3RixJQUFqQjtBQUF1QixZQUFJLEVBQUU2RixJQUFJLENBQUM1RixJQUFsQztBQUF3QyxVQUFFLEVBQUU0RixJQUFJLENBQUMzSCxFQUFqRDtBQUFxRCxjQUFNLEVBQUVnQyxNQUE3RDtBQUFxRSxhQUFLLEVBQUVDLEtBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURpQjtBQUFBLEtBQWxCLENBREgsQ0FIRixDQUR3QjtBQUFBLEdBQXpCLENBakJILENBREY7QUFpQ0QsQ0E3Q007O0dBQU0yRSxVOztNQUFBQSxVO0FBK0NFQSx5RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUE0QztBQUNQO0FBQ047O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHVEQUFNOztBQUV6QixNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9COztBQUVwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDs7QUFFNUQ7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxlQUFlLHlEQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsMEVBQVcsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2pOM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRTtBQUNyQjtBQUN6QjtBQUN5STtBQUN4QztBQUN0RDtBQUNkO0FBQ1Q7QUFDYjtBQUNlOztBQUU5QztBQUNBOztBQUVBLHdCQUF3QiwwRUFBYztBQUN0QztBQUNBLFdBQVcsbURBQWE7QUFDeEI7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QiwwRUFBTztBQUNwQyw2QkFBNkIsa0ZBQWtCOztBQUUvQyxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0EsR0FBRzs7O0FBR0gsU0FBUyxtREFBYTtBQUN0Qjs7QUFFQTtBQUNBLDRCQUE0QixrRkFBZ0I7QUFDNUMsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdCQUF3QiwyREFBYSxDQUFDLDBFQUFZO0FBQ2xELHVCQUF1QiwwRUFBZTtBQUN0QywwQkFBMEIsMkRBQWE7QUFDdkM7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUEsbUJBQW1CLDBFQUFlO0FBQ2xDLHNCQUFzQiwyREFBYTtBQUNuQztBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdGQUFjOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIseURBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbUVBQVk7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLENBQUMsK0NBQVM7O0FBRVg7QUFDQSxtQkFBbUIsb0RBQUc7QUFDdEIsNENBQTRDOztBQUU1QztBQUNBO0FBQ0EscUNBQXFDLDBCQUEwQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxTQUFTO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDBFQUFtQjs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLGtGQUFnQjtBQUNqQyxzQkFBc0IsMkRBQWEsQ0FBQywwRUFBWTtBQUNoRDs7QUFFQTtBQUNBLHlCQUF5QixhQUFvQjtBQUM3QztBQUNBOztBQUVBLHlFQUF5RSxhQUFhO0FBQ3RGO0FBQ0E7O0FBRUEsdUJBQXVCLDBFQUFlOztBQUV0QztBQUNBLFFBQVEsbUVBQVk7QUFDcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixhQUFvQjtBQUM3QztBQUNBOztBQUVBLDRFQUE0RSxlQUFlO0FBQzNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVtRTs7Ozs7Ozs7Ozs7OztBQ3RQcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QztBQUNtQjtBQUN4QjtBQUMwQjtBQUNkOztBQUVyRDs7QUFFQSx1Q0FBdUMsMkRBQWE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw4REFBVztBQUNoRCxnQ0FBZ0MsMkRBQWEsR0FBRztBQUNoRDs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLDJEQUFhO0FBQ3JDO0FBQ0EsS0FBSztBQUNMLElBQUk7OztBQUdKLHNCQUFzQix3REFBVTtBQUNoQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7O0FBRWhDLE1BQU0sSUFBcUM7QUFDM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsMEVBQW1CO0FBQ25DLEdBQUc7QUFDSDtBQUNBOztBQUVBLG1CQUFtQiwwRUFBZTs7QUFFbEMsTUFBTSxLQUFxQztBQUMzQzs7QUFFQTtBQUNBLG1CQUFtQiwwRUFBZSw0Q0FBNEM7QUFDOUU7QUFDQTs7QUFFQSxjQUFjLG1FQUFZO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQSxxRkFBcUYsTUFBcUM7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsMkRBQWE7O0FBRXRDO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBLHdCQUF3QiwyREFBYTtBQUNyQztBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVvSTs7Ozs7Ozs7Ozs7OztBQ3ZJcEk7QUFBQTtBQUFxRDs7QUFFckQ7QUFDQSxxRUFBcUUsYUFBYTtBQUNsRjtBQUNBOztBQUVBLFNBQVMsMEVBQWU7QUFDeEI7O0FBRWUsa0VBQUcsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1ZuQjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBOztBQUVBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsc0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7OztBQ3REdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNFO0FBQ0Y7O0FBRXZDLGdSQUFnUix1Q0FBdUM7QUFDdlQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLGdFQUFPO0FBQzlCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsTUFBTSx5REFBUTtBQUNkO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0Q7O0FBRWhELGNBQWMsS0FBcUM7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsSUFBcUM7QUFDeEQscVBBQXFQLFlBQVksa0lBQWtJLGFBQWE7QUFDaFo7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QiwwQkFBMEI7QUFDdkQsU0FBUztBQUNULHNGQUFzRjtBQUN0RjtBQUNBLE9BQU87QUFDUCxnREFBZ0QsYUFBb0I7QUFDcEU7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQkFBbUI7QUFDN0M7QUFDQSw4RkFBOEY7QUFDOUY7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsS0FBcUM7QUFDekQ7QUFDQTs7QUFFQSxtQ0FBbUMscUJBQXFCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1DQUFtQyxHQUFHLE9BQU87QUFDN0M7O0FBRUEsSUFBSSxJQUFxQztBQUN6QyxxRUFBcUU7QUFDckUsQ0FBQztBQUNEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSCxpQkFBaUIsaUJBQWlCO0FBQ2xDOztBQUVBO0FBQ0EsVUFBVSxLQUFxQztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLDZEQUFVOztBQUV2QixNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyQjs7Ozs7Ozs7Ozs7OztBQ2pVM0I7QUFBQTtBQUFBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsUUFBUSxhQUFhOztBQUVyQixpQ0FBaUMsb0NBQW9DOztBQUVyRSx5QkFBeUIsdUJBQXVCLEVBQUU7QUFDbEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOzs7QUFHQSxpQkFBaUIsaUNBQWlDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxhQUFvQjtBQUN2RTtBQUNBO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUY7QUFDbkY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsWUFBWSxJQUFxQztBQUNqRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRXFCOzs7Ozs7Ozs7Ozs7O0FDdEl0QjtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRTZDOzs7Ozs7Ozs7Ozs7O0FDdkM3QztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSwwRUFBVyxFQUFDOzs7Ozs7Ozs7Ozs7QUNmM0IsaUJBQWlCLG1CQUFPLENBQUMsc0RBQWEsRTs7Ozs7Ozs7Ozs7O0FDQXpCOztBQUViLFlBQVksbUJBQU8sQ0FBQyxxREFBWTtBQUNoQyxhQUFhLG1CQUFPLENBQUMsaUVBQWtCO0FBQ3ZDLGNBQWMsbUJBQU8sQ0FBQyx5RUFBc0I7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLDJFQUF1QjtBQUM5QyxvQkFBb0IsbUJBQU8sQ0FBQyw2RUFBdUI7QUFDbkQsbUJBQW1CLG1CQUFPLENBQUMsbUZBQTJCO0FBQ3RELHNCQUFzQixtQkFBTyxDQUFDLHlGQUE4QjtBQUM1RCxrQkFBa0IsbUJBQU8sQ0FBQyx5RUFBcUI7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDbExhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxrREFBUztBQUM3QixXQUFXLG1CQUFPLENBQUMsZ0VBQWdCO0FBQ25DLFlBQVksbUJBQU8sQ0FBQyw0REFBYztBQUNsQyxrQkFBa0IsbUJBQU8sQ0FBQyx3RUFBb0I7QUFDOUMsZUFBZSxtQkFBTyxDQUFDLHdEQUFZOztBQUVuQztBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxrRUFBaUI7QUFDeEMsb0JBQW9CLG1CQUFPLENBQUMsNEVBQXNCO0FBQ2xELGlCQUFpQixtQkFBTyxDQUFDLHNFQUFtQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsb0VBQWtCOztBQUV6Qzs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcERhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2xCYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsMkRBQVU7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3hEYTs7QUFFYjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNKYTs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7QUFDaEMsZUFBZSxtQkFBTyxDQUFDLHlFQUFxQjtBQUM1Qyx5QkFBeUIsbUJBQU8sQ0FBQyxpRkFBc0I7QUFDdkQsc0JBQXNCLG1CQUFPLENBQUMsMkVBQW1CO0FBQ2pELGtCQUFrQixtQkFBTyxDQUFDLG1FQUFlOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7O0FDOUZhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxxREFBWTs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEI7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ25EYTs7QUFFYixvQkFBb0IsbUJBQU8sQ0FBQyxtRkFBMEI7QUFDdEQsa0JBQWtCLG1CQUFPLENBQUMsK0VBQXdCOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQmE7O0FBRWIsbUJBQW1CLG1CQUFPLENBQUMscUVBQWdCOztBQUUzQztBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakJhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxxREFBWTtBQUNoQyxvQkFBb0IsbUJBQU8sQ0FBQyx1RUFBaUI7QUFDN0MsZUFBZSxtQkFBTyxDQUFDLHVFQUFvQjtBQUMzQyxlQUFlLG1CQUFPLENBQUMseURBQWE7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQix1Q0FBdUM7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUM5RWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekNhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxtREFBVTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwyQkFBMkI7QUFDM0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RGYTs7QUFFYixrQkFBa0IsbUJBQU8sQ0FBQyxtRUFBZTs7QUFFekM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4QmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZOztBQUVoQztBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsZUFBZTtBQUMxQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkJBLCtDQUFhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxrREFBUztBQUM3QiwwQkFBMEIsbUJBQU8sQ0FBQyw4RkFBK0I7O0FBRWpFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGdFQUFnQjtBQUN0QyxHQUFHO0FBQ0g7QUFDQSxjQUFjLG1CQUFPLENBQUMsaUVBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLFlBQVk7QUFDbkI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7QUNqR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDO0FBQzFDLFNBQVM7O0FBRVQ7QUFDQSw0REFBNEQsd0JBQXdCO0FBQ3BGO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLCtCQUErQixhQUFhLEVBQUU7QUFDOUM7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQ3BEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQ25FYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsbURBQVU7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ1hhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxxREFBWTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixlQUFlOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcERhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUJhOztBQUViLFdBQVcsbUJBQU8sQ0FBQyxnRUFBZ0I7O0FBRW5DOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUyxHQUFHLFNBQVM7QUFDNUMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCw0QkFBNEI7QUFDNUIsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5VkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLDBCQUEwQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNuQ2I7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVAsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGFBQWEsbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFNUI7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsc0RBQVk7O0FBRXJDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Riw4Q0FBOEMsaUJBQWlCLHFCQUFxQixvQ0FBb0MsNkRBQTZELG9CQUFvQixFQUFFLGVBQWU7O0FBRTFOLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGlEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMENBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQiw4QkFBOEI7QUFDakQ7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUVBQXlFO0FBQ3pFLDJEQUEyRCxlQUFlO0FBQzFFLEtBQUssRUFBRTtBQUNQO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSixpQ0FBaUM7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyx1REFBdUQ7QUFDNUQ7QUFDQSxzREFBc0QsZUFBZSxxQkFBcUI7QUFDMUY7QUFDQTtBQUNBLE1BQU0sd0NBQXdDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBbUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDOzs7Ozs7Ozs7Ozs7QUMzUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdEO0FBQ25CO0FBQ0Q7QUFDSTtBQUM2STtBQUNzWTtBQUMzaEI7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpQkFBaUIsdUJBQXVC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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsNENBQUs7QUFDaEI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDLENBQUMsK0NBQVM7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLDRDQUFLO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBLE9BQU87OztBQUdQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFFQUFxRTtBQUNyRTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1ELHdFQUFpQjtBQUNwRTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSw0QkFBNEIsMkRBQVUsd0JBQXdCLGdFQUFhOztBQUUzRTs7QUFFQTs7QUFFQSx1QkFBdUIsd0VBQVU7O0FBRWpDLDZCQUE2QiwyREFBVTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHdFQUFhLHFDQUFxQyx3RUFBYSwrQ0FBK0Msd0VBQWE7QUFDeEksS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qzs7QUFFN0MsK0NBQStDOztBQUUvQztBQUNBLHdCQUF3Qix3RUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EsTUFBTSx3RUFBYztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxnRUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0EsR0FBRyxDQUFDLCtDQUFTO0FBQ2I7O0FBRTRCOzs7Ozs7Ozs7Ozs7O0FDaEk1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDJCQUEyQjtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7O0FBRUEsNEJBQTRCLCtCQUErQjtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFD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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKRixFQUtFLE1BQUMsK0RBQUQseUZBQVVtRixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMRixDQWxESixDQURGO0FBNkRELENBdklNOztHQUFNUixLO1VBQ0dDLDREOzs7S0FESEQsSztBQXlJRUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2Q4ODliMDMyZTFiMzQxMjI3N2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zLCB7IEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IFNldHRpbmcgZnJvbSAnLi4vLi4vbGliL3NldHRpbmcuanNvbic7XHJcblxyXG5jb25zdCBob3ZlclNpemUgPSB7XHJcbiAgd2lkdGg6IDQwMCxcclxuICBoZWlnaHQ6IDIwMFxyXG59O1xyXG50eXBlIG1vdXNlWFkgPSB7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxufTtcclxudHlwZSBIZXhTdGF0dXMgPSB7XHJcbiAgaG92ZXI/OiBib29sZWFuIHwgbW91c2VYWTtcclxuICBjb25uZWN0PzogYm9vbGVhbjtcclxuICB2YWx1ZT86IG51bWJlcjtcclxufTtcclxudHlwZSB2YWx1ZVByb3BzID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB2YWx1ZTogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkSXRlbVdyYXBwZXIgPSBzdHlsZWQuZGl2PEhleFN0YXR1cz5gXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXg6IDAgMCA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjOTk5O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy5jb25uZWN0ID8gJyNmZmU5OTYnIDogJ3RyYW5zcGFyZW50Jyl9O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuY29uc3QgU3R5bGVkVmFsdWVTdGF0dXMgPSBzdHlsZWQuZGl2PEhleFN0YXR1cz5gXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxMjcyYztcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gIG9wYWNpdHk6ICR7KHByb3BzKSA9PiAocHJvcHMudmFsdWUgPyBwcm9wcy52YWx1ZSA6IDApfTtcclxuYDtcclxuY29uc3QgU3R5bGVkQ29ubmVjdGlvblN0YXR1cyA9IHN0eWxlZC5kaXY8SGV4U3RhdHVzPmBcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNHB4O1xyXG4gIGxlZnQ6IDRweDtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLmNvbm5lY3QgPyAnZ3JlZW4nIDogJ3JlZCcpfTtcclxuYDtcclxuY29uc3QgU3R5bGVkSG92ZXJDb250ZW50ID0gc3R5bGVkLmRpdjxIZXhTdGF0dXM+YFxyXG4gIGRpc3BsYXk6ICR7KHByb3BzKSA9PiAocHJvcHMuaG92ZXIgPyAnYmxvY2snIDogJ25vbmUnKX07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAke2hvdmVyU2l6ZS53aWR0aH1weDtcclxuICBoZWlnaHQ6ICR7aG92ZXJTaXplLmhlaWdodH1weDtcclxuICB0b3A6IDEwcHg7XHJcbiAgbGVmdDogMTBweDtcclxuICB6LWluZGV4OiAxO1xyXG4gICR7KHByb3BzKSA9PiB7XHJcbiAgICBpZiAocHJvcHMuaG92ZXIgJiYgcHJvcHMuaG92ZXJbJ3gnXSAmJiBwcm9wcy5ob3ZlclsneCddICsgaG92ZXJTaXplLndpZHRoID4gd2luZG93LmlubmVyV2lkdGgpIHtcclxuICAgICAgaWYgKHByb3BzLmhvdmVyICYmIHByb3BzLmhvdmVyWyd5J10gJiYgcHJvcHMuaG92ZXJbJ3knXSArIGhvdmVyU2l6ZS5oZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICB0b3A6IHVuc2V0O1xyXG4gICAgICAgIGA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNzc2BcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gICAgaWYgKHByb3BzLmhvdmVyICYmIHByb3BzLmhvdmVyWyd5J10gJiYgcHJvcHMuaG92ZXJbJ3knXSArIGhvdmVyU2l6ZS5oZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgcmV0dXJuIGNzc2BcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICB0b3A6IHVuc2V0O1xyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gIH19XHJcbmA7XHJcbmNvbnN0IFN0eWxlZEhvdmVyQ29udGVudEJvZHlXcmFwcGVyID0gc3R5bGVkLnVsYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBib3R0b207XHJcbiAgd2lkdGg6ICR7aG92ZXJTaXplLndpZHRofXB4O1xyXG4gIGhlaWdodDogJHtob3ZlclNpemUuaGVpZ2h0fXB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuaG92ZXJ9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYm9yZGVyfTtcclxuICAmID4gbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgfVxyXG4gICYgPiBsaS5zdWJqZWN0IHtcclxuICAgIGZsZXg6IDAgMCA3MCU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAmID4gbGkudmFsdWUge1xyXG4gICAgZmxleDogMCAwIDMwJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCB0eXBlIENsdXN0ZXJIZXhJdGVtUHJvcHMgPSB7XHJcbiAgLyoqXHJcbiAgICogTm9kZSBuYW1lXHJcbiAgICovXHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIE5vZGUgdHlwZVxyXG4gICAqL1xyXG4gIHR5cGU6ICdhbWQnIHwgJ252aWRpYScgfCBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogTm9kZSBJUFxyXG4gICAqL1xyXG4gIGlwOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogRmlsdGVyIHR5cGVcclxuICAgKi9cclxuICBmaWx0ZXI6IHN0cmluZztcclxuICAvKipcclxuICAgKiBSYW5nZSB0eXBlXHJcbiAgICovXHJcbiAgcmFuZ2U6ICdhdmcnIHwgJ21heCcgfCAnbWluJyB8IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IHNldHRpbmdBeGlvcyA9IChpcDogc3RyaW5nKTogQXhpb3NJbnN0YW5jZSA9PiB7XHJcbiAgY29uc3QgY29ubiA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBpcCxcclxuICAgIHRpbWVvdXQ6IDEwICogMTAwMFxyXG4gIH0pO1xyXG5cclxuICBjb25uLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcclxuICAgIChjb25maWcpID0+IHtcclxuICAgICAgY29uZmlnLnBhcmFtcyA9IHsgc3RhcnRUaW1lOiBuZXcgRGF0ZSgpIH07XHJcbiAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICB9LFxyXG4gICAgKGVycm9yKSA9PiB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29ubi5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gICAgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJlc3BvbnNlLmNvbmZpZy5wYXJhbXMuZW5kVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIHJlc3BvbnNlLmNvbmZpZy5wYXJhbXMuZHVyYXRpb24gPSByZXNwb25zZS5jb25maWcucGFyYW1zLmVuZFRpbWUgLSByZXNwb25zZS5jb25maWcucGFyYW1zLnN0YXJ0VGltZTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSxcclxuICAgIChlcnJvcikgPT4ge1xyXG4gICAgICBlcnJvci5jb25maWcucGFyYW1zLmVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBlcnJvci5jb25maWcucGFyYW1zLmR1cmF0aW9uID0gZXJyb3IuY29uZmlnLnBhcmFtcy5lbmRUaW1lIC0gZXJyb3IuY29uZmlnLnBhcmFtcy5zdGFydFRpbWU7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIGNvbm47XHJcbn07XHJcblxyXG5jb25zdCBmaW5kVHJlZUluTnZpZGlhID0gKGpzb25PYmplY3Q6IGFueSwgc2VhcmNoOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCB0b2tlbiA9ICc+JztcclxuICBpZiAoc2VhcmNoLmluZGV4T2YodG9rZW4pIDwgMCkge1xyXG4gICAgcmV0dXJuIGpzb25PYmplY3Rbc2VhcmNoXTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gc2VhcmNoLnN1YnN0cigwLCBzZWFyY2guaW5kZXhPZih0b2tlbikpO1xyXG4gICAgY29uc3QgcGFyYW0gPSBzZWFyY2guc3Vic3RyKHNlYXJjaC5pbmRleE9mKHRva2VuKSArIHRva2VuLmxlbmd0aCk7XHJcbiAgICBpZiAodHlwZW9mIGpzb25PYmplY3RbdGFyZ2V0XSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgcmV0dXJuIGZpbmRUcmVlSW5OdmlkaWEoanNvbk9iamVjdFt0YXJnZXRdLCBwYXJhbSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBqc29uT2JqZWN0W3RhcmdldF0gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiBqc29uT2JqZWN0W3RhcmdldF07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ2x1c3RlckhleEl0ZW06IFJlYWN0LkZDPENsdXN0ZXJIZXhJdGVtUHJvcHM+ID0gKHsgbmFtZSwgdHlwZSwgaXAsIGZpbHRlciwgcmFuZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IGNvbm4gPSBzZXR0aW5nQXhpb3MoaXApO1xyXG4gIGNvbnN0IGZpbHRlcmVkID0gU2V0dGluZy5maWx0ZXJPcHRpb24uZmlsdGVyKChlbCkgPT4gZWwudmFsdWUgPT09IGZpbHRlcik7XHJcblxyXG4gIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGU8bnVtYmVyPigtMSk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPGFueT4odW5kZWZpbmVkKTtcclxuICBjb25zdCBbbGF0ZW5jeSwgc2V0TGF0ZW5jeV0gPSB1c2VTdGF0ZTxudW1iZXI+KC0xKTtcclxuICBjb25zdCBbYW1kR3B1TGlzdCwgc2V0QW1kR3B1TGlzdF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG4gIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG1vdXNlWFk+KGZhbHNlKTtcclxuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGU8dmFsdWVQcm9wc1tdPihbXSk7XHJcbiAgY29uc3QgdGVzdCA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOV07XHJcblxyXG4gIGNvbnN0IGVudkFNRCA9IFNldHRpbmcuYW1kO1xyXG4gIGNvbnN0IGVudk5WSURJQSA9IFNldHRpbmcubnZpZGlhO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHVubW91bnQgPSBmYWxzZTtcclxuICAgIGNvbnN0IG9uTG9hZEFwaSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgdXJsID0gdHlwZSA9PT0gJ2FtZCcgPyBgLyR7dHlwZX0vYXBpL21pbmAgOiBgLyR7dHlwZX0vYXBpYDtcclxuICAgICAgY29ublxyXG4gICAgICAgIC5nZXQodXJsKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHVubW91bnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICBzZXREdXJhdGlvbihyZXNwb25zZS5jb25maWcucGFyYW1zLmR1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgc2V0TGF0ZW5jeShyZXNwb25zZS5kYXRhLmNvbW1hbmREZWxheSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ252aWRpYScpIHtcclxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvciA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3BvbnNlLmRhdGEuc21pUmVzdWx0Lm52aWRpYV9zbWlfbG9nKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5kYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2FtZCcpIHtcclxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvciA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGlmIChhbWRHcHVMaXN0Lmxlbmd0aCAhPT0gcmVzcG9uc2UuZGF0YS5zbWlSZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEFtZEdwdUxpc3QoT2JqZWN0LmtleXMocmVzcG9uc2UuZGF0YS5zbWlSZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5kYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdCh1bmRlZmluZWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgaWYgKHVubW91bnQpIHJldHVybjtcclxuICAgICAgICAgIHNldER1cmF0aW9uKC0xKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIG9uTG9hZEFwaSgpO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgdW5tb3VudCA9IHRydWU7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIGlmICh0eXBlID09PSAnYW1kJyAmJiBhbWRHcHVMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzdWx0LmRhdGEuc21pUmVzdWx0O1xyXG4gICAgICAgIGNvbnN0IHRlbXBBcnJheTogdmFsdWVQcm9wc1tdID0gW107XHJcblxyXG4gICAgICAgIGFtZEdwdUxpc3QuZm9yRWFjaCgoZGV2aWNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZGV2aWNlID09PSAnc3lzdGVtJykgcmV0dXJuO1xyXG4gICAgICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGVtcEFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgIG5hbWU6IGRhdGFbZGV2aWNlXVtlbnZBTUQuZGV2aWNlTmFtZV0sXHJcbiAgICAgICAgICAgICAgdmFsdWU6IGRhdGFbZGV2aWNlXVtmaWx0ZXJlZFswXS5hbWRdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFZhbHVlcyh0ZW1wQXJyYXkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlID09PSAnbnZpZGlhJykge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZ3B1O1xyXG4gICAgICAgIGNvbnN0IHRlbXBBcnJheTogdmFsdWVQcm9wc1tdID0gW107XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChkZXZpY2UsIGRldmljZUluZGV4KSA9PiB7XHJcbiAgICAgICAgICB0ZW1wQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IGRldmljZVtlbnZOVklESUEuZGV2aWNlTmFtZV0sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmaW5kVHJlZUluTnZpZGlhKGRhdGFbZGV2aWNlSW5kZXhdLCBmaWx0ZXJlZFswXS5udmlkaWEpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRWYWx1ZXModGVtcEFycmF5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtyZXN1bHRdKTtcclxuXHJcbiAgY29uc3QgZ2V0UGFyc2VWYWx1ZSA9ICgpID0+IHtcclxuICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcclxuICAgIHN3aXRjaCAocmFuZ2UpIHtcclxuICAgICAgY2FzZSAnYXZnJzpcclxuICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICB2YWx1ZXMuZm9yRWFjaCgoZWwpID0+IChzdW0gKz0gcGFyc2VJbnQoZWwudmFsdWUsIDEwKSkpO1xyXG4gICAgICAgIHJldHVybiBzdW0gLyB2YWx1ZXMubGVuZ3RoIHx8IDA7XHJcbiAgICAgIGNhc2UgJ21heCc6XHJcbiAgICAgICAgbGV0IG1heCA9IC1JbmZpbml0eTtcclxuICAgICAgICB2YWx1ZXMuZm9yRWFjaCgoZWwpID0+IChtYXggPSBNYXRoLm1heChtYXgsIHBhcnNlSW50KGVsLnZhbHVlLCAxMCkpKSk7XHJcbiAgICAgICAgcmV0dXJuIG1heDtcclxuICAgICAgY2FzZSAnbWluJzpcclxuICAgICAgICBsZXQgbWluID0gSW5maW5pdHk7XHJcbiAgICAgICAgdmFsdWVzLmZvckVhY2goKGVsKSA9PiAobWluID0gTWF0aC5taW4obWluLCBwYXJzZUludChlbC52YWx1ZSwgMTApKSkpO1xyXG4gICAgICAgIHJldHVybiBtaW47XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiB7dGVzdC5tYXAoKF8sIGtleSkgPT4gKCAqL31cclxuICAgICAgPFN0eWxlZEl0ZW1XcmFwcGVyXHJcbiAgICAgICAgLy8ga2V5PXtrZXl9XHJcbiAgICAgICAgY29ubmVjdD17ZHVyYXRpb24gIT09IC0xfVxyXG4gICAgICAgIHZhbHVlPXswfVxyXG4gICAgICAgIG9uTW91c2VFbnRlcj17KGUpID0+IHNldEhvdmVyKHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfSl9XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcihmYWxzZSl9XHJcbiAgICAgID5cclxuICAgICAgICA8U3R5bGVkVmFsdWVTdGF0dXMgdmFsdWU9e2dldFBhcnNlVmFsdWUoKSAqIDAuMDF9IC8+XHJcbiAgICAgICAgPFN0eWxlZENvbm5lY3Rpb25TdGF0dXMgY29ubmVjdD17ZHVyYXRpb24gIT09IC0xfT48L1N0eWxlZENvbm5lY3Rpb25TdGF0dXM+XHJcbiAgICAgICAgPFN0eWxlZEhvdmVyQ29udGVudCBob3Zlcj17aG92ZXJ9PlxyXG4gICAgICAgICAgPFN0eWxlZEhvdmVyQ29udGVudEJvZHlXcmFwcGVyPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsnc3ViamVjdCd9Pk5hbWU8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsndmFsdWUnfT57bmFtZX08L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsnc3ViamVjdCd9Pk5ldHdvcms8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsndmFsdWUnfT57ZHVyYXRpb24gPT09IC0xID8gJycgOiBgJHtkdXJhdGlvbiAvIDEwMDB9c2B9PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17J3N1YmplY3QnfT5Db21tYW5kPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17J3ZhbHVlJ30+e2xhdGVuY3kgPT09IC0xID8gJycgOiBgJHtsYXRlbmN5IC8gMTAwMH1zYH08L2xpPlxyXG4gICAgICAgICAgICB7dmFsdWVzLm1hcCgoZWwsIGVsSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtlbEluZGV4fT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eydzdWJqZWN0J30+e2VsLm5hbWV9PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyd2YWx1ZSd9PntlbC52YWx1ZX08L2xpPlxyXG4gICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TdHlsZWRIb3ZlckNvbnRlbnRCb2R5V3JhcHBlcj5cclxuICAgICAgICA8L1N0eWxlZEhvdmVyQ29udGVudD5cclxuICAgICAgPC9TdHlsZWRJdGVtV3JhcHBlcj5cclxuICAgICAgey8qICkpfSAqL31cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbHVzdGVySGV4SXRlbTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcclxuXHJcbmltcG9ydCBjbHVzdGVySW5mbyBmcm9tICcuLi8uLi9saWIvc2V0dGluZy5qc29uJztcclxuXHJcbmltcG9ydCBJdGVtIGZyb20gJy4vQ2x1c3RlckhleEl0ZW0nO1xyXG5cclxuY29uc3QgbWFyZ2luQ1cgPSAxMDtcclxuY29uc3QgU3R5bGVkQ2x1c3RlcldyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICB3aWR0aDogY2FsYygxMDAlIC0gJHttYXJnaW5DVyAqIDJ9cHgpO1xyXG4gIG1hcmdpbjogMCAke21hcmdpbkNXfXB4IDMwcHg7XHJcblxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBTdHlsZWRDbHVzdGVySXRlbVdyYXBwZXIgPSBzdHlsZWQuYXJ0aWNsZWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuYDtcclxuXHJcbmNvbnN0IGN1c3RvbVN0eWxlcyA9IChzZWxlY3RUeXBlOiBzdHJpbmcpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgb3B0aW9uOiAocHJvdmlkZWQ6IGFueSwgc3RhdGU6IHsgaXNTZWxlY3RlZDogYW55IH0pID0+ICh7XHJcbiAgICAgIC4uLnByb3ZpZGVkLFxyXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggZG90dGVkIHBpbmsnLFxyXG4gICAgICBjb2xvcjogc3RhdGUuaXNTZWxlY3RlZCA/ICcjOTk5JyA6ICcjMzMzJ1xyXG4gICAgfSksXHJcbiAgICBjb250YWluZXI6IChwcm92aWRlZDogYW55KSA9PiAoe1xyXG4gICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgd2lkdGg6IHNlbGVjdFR5cGUgPT09ICdmaWwnID8gJzMwMHB4JyA6ICcxMDBweCcsXHJcbiAgICAgIG1hcmdpbkxlZnQ6ICcxMHB4J1xyXG4gICAgfSlcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENsdXN0ZXJIZXg6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZpbHRlck9wdGlvbnMgPSBjbHVzdGVySW5mby5maWx0ZXJPcHRpb247XHJcbiAgY29uc3QgcmFuZ2VPcHRpb25zID0gW1xyXG4gICAgeyB2YWx1ZTogJ2F2ZycsIGxhYmVsOiAnQVZHJyB9LFxyXG4gICAgeyB2YWx1ZTogJ21heCcsIGxhYmVsOiAnTUFYJyB9LFxyXG4gICAgeyB2YWx1ZTogJ21pbicsIGxhYmVsOiAnTUlOJyB9XHJcbiAgXTtcclxuICBjb25zdCBkZWZhdWx0RmlsdGVyID0gMjtcclxuICBjb25zdCBkZWZhdWx0UmFuZ2UgPSAwO1xyXG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KGZpbHRlck9wdGlvbnNbZGVmYXVsdEZpbHRlcl0udmFsdWUpO1xyXG4gIGNvbnN0IFtyYW5nZSwgc2V0UmFuZ2VdID0gdXNlU3RhdGU8c3RyaW5nPihyYW5nZU9wdGlvbnNbZGVmYXVsdFJhbmdlXS52YWx1ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luQm90dG9tOiAnMjBweCcgfX0+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgaW5zdGFuY2VJZD17J2ZpbHRlcl9vcHRpb24nfVxyXG4gICAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXMoJ2ZpbCcpfVxyXG4gICAgICAgICAgb3B0aW9ucz17ZmlsdGVyT3B0aW9uc31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RmlsdGVyKGVbJ3ZhbHVlJ10pfVxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtmaWx0ZXJPcHRpb25zW2RlZmF1bHRGaWx0ZXJdfVxyXG4gICAgICAgID48L1NlbGVjdD5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBpbnN0YW5jZUlkPXsndmFsdWVfb3B0aW9uJ31cclxuICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzKCdyYW5nZScpfVxyXG4gICAgICAgICAgb3B0aW9ucz17cmFuZ2VPcHRpb25zfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSYW5nZShlWyd2YWx1ZSddKX1cclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmFuZ2VPcHRpb25zW2RlZmF1bHRSYW5nZV19XHJcbiAgICAgICAgPjwvU2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2NsdXN0ZXJJbmZvLmNsdXN0ZXJzLm1hcCgoY2x1c3RlciwgY2x1c3RlckluZGV4KSA9PiAoXHJcbiAgICAgICAgPFN0eWxlZENsdXN0ZXJXcmFwcGVyIGtleT17Y2x1c3RlckluZGV4fT5cclxuICAgICAgICAgIDxoMz5DbHVzdGVyOiB7Y2x1c3Rlci5uYW1lfTwvaDM+XHJcbiAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgIDxTdHlsZWRDbHVzdGVySXRlbVdyYXBwZXI+XHJcbiAgICAgICAgICAgIHtjbHVzdGVyLm5vZGVzLm1hcCgobm9kZSwgbm9kZUluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17YCR7Y2x1c3RlckluZGV4fS0ke25vZGVJbmRleH0tJHtub2RlLm5hbWV9LSR7bm9kZS50eXBlfS0ke25vZGUuaXB9YH0+XHJcbiAgICAgICAgICAgICAgICA8SXRlbSBuYW1lPXtub2RlLm5hbWV9IHR5cGU9e25vZGUudHlwZX0gaXA9e25vZGUuaXB9IGZpbHRlcj17ZmlsdGVyfSByYW5nZT17cmFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1N0eWxlZENsdXN0ZXJJdGVtV3JhcHBlcj5cclxuICAgICAgICA8L1N0eWxlZENsdXN0ZXJXcmFwcGVyPlxyXG4gICAgICApKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbHVzdGVySGV4O1xyXG4iLCJmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzTG9vc2U7IiwiaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0JztcbmltcG9ydCBTdHlsaXMgZnJvbSAnQGVtb3Rpb24vc3R5bGlzJztcbmltcG9ydCAnQGVtb3Rpb24vd2Vhay1tZW1vaXplJztcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RoeXN1bHRhbi9zdHlsaXMuanMvdHJlZS9tYXN0ZXIvcGx1Z2lucy9ydWxlLXNoZWV0XG4vLyBpbmxpbmVkIHRvIGF2b2lkIHVtZCB3cmFwcGVyIGFuZCBwZWVyRGVwIHdhcm5pbmdzL2luc3RhbGxpbmcgc3R5bGlzXG4vLyBzaW5jZSB3ZSB1c2Ugc3R5bGlzIGFmdGVyIGNsb3N1cmUgY29tcGlsZXJcbnZhciBkZWxpbWl0ZXIgPSAnLyp8Ki8nO1xudmFyIG5lZWRsZSA9IGRlbGltaXRlciArICd9JztcblxuZnVuY3Rpb24gdG9TaGVldChibG9jaykge1xuICBpZiAoYmxvY2spIHtcbiAgICBTaGVldC5jdXJyZW50Lmluc2VydChibG9jayArICd9Jyk7XG4gIH1cbn1cblxudmFyIFNoZWV0ID0ge1xuICBjdXJyZW50OiBudWxsXG59O1xudmFyIHJ1bGVTaGVldCA9IGZ1bmN0aW9uIHJ1bGVTaGVldChjb250ZXh0LCBjb250ZW50LCBzZWxlY3RvcnMsIHBhcmVudHMsIGxpbmUsIGNvbHVtbiwgbGVuZ3RoLCBucywgZGVwdGgsIGF0KSB7XG4gIHN3aXRjaCAoY29udGV4dCkge1xuICAgIC8vIHByb3BlcnR5XG4gICAgY2FzZSAxOlxuICAgICAge1xuICAgICAgICBzd2l0Y2ggKGNvbnRlbnQuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8vIEBpbXBvcnRcbiAgICAgICAgICAgICAgU2hlZXQuY3VycmVudC5pbnNlcnQoY29udGVudCArICc7Jyk7XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjaGFyY29kZSBmb3IgbFxuXG4gICAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8vIGNoYXJjb2RlIGZvciBiXG4gICAgICAgICAgICAgIC8vIHRoaXMgaWdub3JlcyBsYWJlbFxuICAgICAgICAgICAgICBpZiAoY29udGVudC5jaGFyQ29kZUF0KDIpID09PSA5OCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgLy8gc2VsZWN0b3JcblxuICAgIGNhc2UgMjpcbiAgICAgIHtcbiAgICAgICAgaWYgKG5zID09PSAwKSByZXR1cm4gY29udGVudCArIGRlbGltaXRlcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgLy8gYXQtcnVsZVxuXG4gICAgY2FzZSAzOlxuICAgICAge1xuICAgICAgICBzd2l0Y2ggKG5zKSB7XG4gICAgICAgICAgLy8gQGZvbnQtZmFjZSwgQHBhZ2VcbiAgICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICBjYXNlIDExMjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgU2hlZXQuY3VycmVudC5pbnNlcnQoc2VsZWN0b3JzWzBdICsgY29udGVudCk7XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiBjb250ZW50ICsgKGF0ID09PSAwID8gZGVsaW1pdGVyIDogJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBjYXNlIC0yOlxuICAgICAge1xuICAgICAgICBjb250ZW50LnNwbGl0KG5lZWRsZSkuZm9yRWFjaCh0b1NoZWV0KTtcbiAgICAgIH1cbiAgfVxufTtcblxudmFyIGNyZWF0ZUNhY2hlID0gZnVuY3Rpb24gY3JlYXRlQ2FjaGUob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkKSBvcHRpb25zID0ge307XG4gIHZhciBrZXkgPSBvcHRpb25zLmtleSB8fCAnY3NzJztcbiAgdmFyIHN0eWxpc09wdGlvbnM7XG5cbiAgaWYgKG9wdGlvbnMucHJlZml4ICE9PSB1bmRlZmluZWQpIHtcbiAgICBzdHlsaXNPcHRpb25zID0ge1xuICAgICAgcHJlZml4OiBvcHRpb25zLnByZWZpeFxuICAgIH07XG4gIH1cblxuICB2YXIgc3R5bGlzID0gbmV3IFN0eWxpcyhzdHlsaXNPcHRpb25zKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICBpZiAoL1teYS16LV0vLnRlc3Qoa2V5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW1vdGlvbiBrZXkgbXVzdCBvbmx5IGNvbnRhaW4gbG93ZXIgY2FzZSBhbHBoYWJldGljYWwgY2hhcmFjdGVycyBhbmQgLSBidXQgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBwYXNzZWRcIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIGluc2VydGVkID0ge307IC8vICRGbG93Rml4TWVcblxuICB2YXIgY29udGFpbmVyO1xuXG4gIHtcbiAgICBjb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lciB8fCBkb2N1bWVudC5oZWFkO1xuICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtkYXRhLWVtb3Rpb24tXCIgKyBrZXkgKyBcIl1cIik7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBhdHRyaWIgPSBub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtZW1vdGlvbi1cIiArIGtleSk7IC8vICRGbG93Rml4TWVcblxuICAgICAgYXR0cmliLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgaW5zZXJ0ZWRbaWRdID0gdHJ1ZTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobm9kZS5wYXJlbnROb2RlICE9PSBjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIF9pbnNlcnQ7XG5cbiAge1xuICAgIHN0eWxpcy51c2Uob3B0aW9ucy5zdHlsaXNQbHVnaW5zKShydWxlU2hlZXQpO1xuXG4gICAgX2luc2VydCA9IGZ1bmN0aW9uIGluc2VydChzZWxlY3Rvciwgc2VyaWFsaXplZCwgc2hlZXQsIHNob3VsZENhY2hlKSB7XG4gICAgICB2YXIgbmFtZSA9IHNlcmlhbGl6ZWQubmFtZTtcbiAgICAgIFNoZWV0LmN1cnJlbnQgPSBzaGVldDtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc2VyaWFsaXplZC5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgbWFwID0gc2VyaWFsaXplZC5tYXA7XG4gICAgICAgIFNoZWV0LmN1cnJlbnQgPSB7XG4gICAgICAgICAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQocnVsZSkge1xuICAgICAgICAgICAgc2hlZXQuaW5zZXJ0KHJ1bGUgKyBtYXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgc3R5bGlzKHNlbGVjdG9yLCBzZXJpYWxpemVkLnN0eWxlcyk7XG5cbiAgICAgIGlmIChzaG91bGRDYWNoZSkge1xuICAgICAgICBjYWNoZS5pbnNlcnRlZFtuYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YmY3MzcxYTRjZDdlNjAwOWVmNjFkMGFcbiAgICB2YXIgY29tbWVudFN0YXJ0ID0gL1xcL1xcKi9nO1xuICAgIHZhciBjb21tZW50RW5kID0gL1xcKlxcLy9nO1xuICAgIHN0eWxpcy51c2UoZnVuY3Rpb24gKGNvbnRleHQsIGNvbnRlbnQpIHtcbiAgICAgIHN3aXRjaCAoY29udGV4dCkge1xuICAgICAgICBjYXNlIC0xOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHdoaWxlIChjb21tZW50U3RhcnQudGVzdChjb250ZW50KSkge1xuICAgICAgICAgICAgICBjb21tZW50RW5kLmxhc3RJbmRleCA9IGNvbW1lbnRTdGFydC5sYXN0SW5kZXg7XG5cbiAgICAgICAgICAgICAgaWYgKGNvbW1lbnRFbmQudGVzdChjb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbW1lbnRTdGFydC5sYXN0SW5kZXggPSBjb21tZW50RW5kLmxhc3RJbmRleDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91ciBzdHlsZXMgaGF2ZSBhbiB1bnRlcm1pbmF0ZWQgY29tbWVudCAoXCIvKlwiIHdpdGhvdXQgY29ycmVzcG9uZGluZyBcIiovXCIpLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21tZW50U3RhcnQubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBzdHlsaXMudXNlKGZ1bmN0aW9uIChjb250ZXh0LCBjb250ZW50LCBzZWxlY3RvcnMpIHtcbiAgICAgIHN3aXRjaCAoY29udGV4dCkge1xuICAgICAgICBjYXNlIC0xOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBmbGFnID0gJ2Vtb3Rpb24tZGlzYWJsZS1zZXJ2ZXItcmVuZGVyaW5nLXVuc2FmZS1zZWxlY3Rvci13YXJuaW5nLXBsZWFzZS1kby1ub3QtdXNlLXRoaXMtdGhlLXdhcm5pbmctZXhpc3RzLWZvci1hLXJlYXNvbic7XG4gICAgICAgICAgICB2YXIgdW5zYWZlUHNldWRvQ2xhc3NlcyA9IGNvbnRlbnQubWF0Y2goLyg6Zmlyc3R8Om50aHw6bnRoLWxhc3QpLWNoaWxkL2cpO1xuXG4gICAgICAgICAgICBpZiAodW5zYWZlUHNldWRvQ2xhc3NlcyAmJiBjYWNoZS5jb21wYXQgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgdW5zYWZlUHNldWRvQ2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uICh1bnNhZmVQc2V1ZG9DbGFzcykge1xuICAgICAgICAgICAgICAgIHZhciBpZ25vcmVSZWdFeHAgPSBuZXcgUmVnRXhwKHVuc2FmZVBzZXVkb0NsYXNzICsgXCIuKlxcXFwvXFxcXCogXCIgKyBmbGFnICsgXCIgXFxcXCpcXFxcL1wiKTtcbiAgICAgICAgICAgICAgICB2YXIgaWdub3JlID0gaWdub3JlUmVnRXhwLnRlc3QoY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodW5zYWZlUHNldWRvQ2xhc3MgJiYgIWlnbm9yZSkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZSBwc2V1ZG8gY2xhc3MgXFxcIlwiICsgdW5zYWZlUHNldWRvQ2xhc3MgKyBcIlxcXCIgaXMgcG90ZW50aWFsbHkgdW5zYWZlIHdoZW4gZG9pbmcgc2VydmVyLXNpZGUgcmVuZGVyaW5nLiBUcnkgY2hhbmdpbmcgaXQgdG8gXFxcIlwiICsgdW5zYWZlUHNldWRvQ2xhc3Muc3BsaXQoJy1jaGlsZCcpWzBdICsgXCItb2YtdHlwZVxcXCIuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IHtcbiAgICBrZXk6IGtleSxcbiAgICBzaGVldDogbmV3IFN0eWxlU2hlZXQoe1xuICAgICAga2V5OiBrZXksXG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxuICAgICAgc3BlZWR5OiBvcHRpb25zLnNwZWVkeVxuICAgIH0pLFxuICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxuICAgIGluc2VydGVkOiBpbnNlcnRlZCxcbiAgICByZWdpc3RlcmVkOiB7fSxcbiAgICBpbnNlcnQ6IF9pbnNlcnRcbiAgfTtcbiAgcmV0dXJuIGNhY2hlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2FjaGU7XG4iLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCB7IGggYXMgaGFzT3duUHJvcGVydHksIEUgYXMgRW1vdGlvbiwgYyBhcyBjcmVhdGVFbW90aW9uUHJvcHMsIHcgYXMgd2l0aEVtb3Rpb25DYWNoZSwgVCBhcyBUaGVtZUNvbnRleHQgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC01N2EzYTdhMy5icm93c2VyLmVzbS5qcyc7XG5leHBvcnQgeyBDIGFzIENhY2hlUHJvdmlkZXIsIFQgYXMgVGhlbWVDb250ZXh0LCB3IGFzIHdpdGhFbW90aW9uQ2FjaGUgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC01N2EzYTdhMy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBpbnNlcnRTdHlsZXMsIGdldFJlZ2lzdGVyZWRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0JztcbmltcG9ydCBjc3MgZnJvbSAnQGVtb3Rpb24vY3NzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxudmFyIGpzeCA9IGZ1bmN0aW9uIGpzeCh0eXBlLCBwcm9wcykge1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICBpZiAocHJvcHMgPT0gbnVsbCB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywgJ2NzcycpKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50LmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH1cblxuICB2YXIgYXJnc0xlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgY3JlYXRlRWxlbWVudEFyZ0FycmF5ID0gbmV3IEFycmF5KGFyZ3NMZW5ndGgpO1xuICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMF0gPSBFbW90aW9uO1xuICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMV0gPSBjcmVhdGVFbW90aW9uUHJvcHModHlwZSwgcHJvcHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSB7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5W2ldID0gYXJnc1tpXTtcbiAgfSAvLyAkRmxvd0ZpeE1lXG5cblxuICByZXR1cm4gY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBjcmVhdGVFbGVtZW50QXJnQXJyYXkpO1xufTtcblxudmFyIHdhcm5lZEFib3V0Q3NzUHJvcEZvckdsb2JhbCA9IGZhbHNlO1xudmFyIEdsb2JhbCA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsICYmICggLy8gY2hlY2sgZm9yIGNsYXNzTmFtZSBhcyB3ZWxsIHNpbmNlIHRoZSB1c2VyIGlzXG4gIC8vIHByb2JhYmx5IHVzaW5nIHRoZSBjdXN0b20gY3JlYXRlRWxlbWVudCB3aGljaFxuICAvLyBtZWFucyBpdCB3aWxsIGJlIHR1cm5lZCBpbnRvIGEgY2xhc3NOYW1lIHByb3BcbiAgLy8gJEZsb3dGaXhNZSBJIGRvbid0IHJlYWxseSB3YW50IHRvIGFkZCBpdCB0byB0aGUgdHlwZSBzaW5jZSBpdCBzaG91bGRuJ3QgYmUgdXNlZFxuICBwcm9wcy5jbGFzc05hbWUgfHwgcHJvcHMuY3NzKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJJdCBsb29rcyBsaWtlIHlvdSdyZSB1c2luZyB0aGUgY3NzIHByb3Agb24gR2xvYmFsLCBkaWQgeW91IG1lYW4gdG8gdXNlIHRoZSBzdHlsZXMgcHJvcCBpbnN0ZWFkP1wiKTtcbiAgICB3YXJuZWRBYm91dENzc1Byb3BGb3JHbG9iYWwgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IHByb3BzLnN0eWxlcztcblxuICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChUaGVtZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3N0eWxlcyh0aGVtZSldKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChJbm5lckdsb2JhbCwge1xuICAgICAgICBzZXJpYWxpemVkOiBzZXJpYWxpemVkLFxuICAgICAgICBjYWNoZTogY2FjaGVcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3N0eWxlc10pO1xuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoSW5uZXJHbG9iYWwsIHtcbiAgICBzZXJpYWxpemVkOiBzZXJpYWxpemVkLFxuICAgIGNhY2hlOiBjYWNoZVxuICB9KTtcbn0pO1xuXG4vLyBtYWludGFpbiBwbGFjZSBvdmVyIHJlcmVuZGVycy5cbi8vIGluaXRpYWwgcmVuZGVyIGZyb20gYnJvd3NlciwgaW5zZXJ0QmVmb3JlIGNvbnRleHQuc2hlZXQudGFnc1swXSBvciBpZiBhIHN0eWxlIGhhc24ndCBiZWVuIGluc2VydGVkIHRoZXJlIHlldCwgYXBwZW5kQ2hpbGRcbi8vIGluaXRpYWwgY2xpZW50LXNpZGUgcmVuZGVyIGZyb20gU1NSLCB1c2UgcGxhY2Ugb2YgaHlkcmF0aW5nIHRhZ1xudmFyIElubmVyR2xvYmFsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKElubmVyR2xvYmFsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBJbm5lckdsb2JhbChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICAgIHJldHVybiBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSW5uZXJHbG9iYWwucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2hlZXQgPSBuZXcgU3R5bGVTaGVldCh7XG4gICAgICBrZXk6IHRoaXMucHJvcHMuY2FjaGUua2V5ICsgXCItZ2xvYmFsXCIsXG4gICAgICBub25jZTogdGhpcy5wcm9wcy5jYWNoZS5zaGVldC5ub25jZSxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5wcm9wcy5jYWNoZS5zaGVldC5jb250YWluZXJcbiAgICB9KTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGVbZGF0YS1lbW90aW9uLVwiICsgdGhpcy5wcm9wcy5jYWNoZS5rZXkgKyBcIj1cXFwiXCIgKyB0aGlzLnByb3BzLnNlcmlhbGl6ZWQubmFtZSArIFwiXFxcIl1cIik7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zaGVldC50YWdzLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuY2FjaGUuc2hlZXQudGFncy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2hlZXQuYmVmb3JlID0gdGhpcy5wcm9wcy5jYWNoZS5zaGVldC50YWdzWzBdO1xuICAgIH1cblxuICAgIHRoaXMuaW5zZXJ0U3R5bGVzKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLnNlcmlhbGl6ZWQubmFtZSAhPT0gdGhpcy5wcm9wcy5zZXJpYWxpemVkLm5hbWUpIHtcbiAgICAgIHRoaXMuaW5zZXJ0U3R5bGVzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5pbnNlcnRTdHlsZXMgPSBmdW5jdGlvbiBpbnNlcnRTdHlsZXMkMSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zZXJpYWxpemVkLm5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gaW5zZXJ0IGtleWZyYW1lc1xuICAgICAgaW5zZXJ0U3R5bGVzKHRoaXMucHJvcHMuY2FjaGUsIHRoaXMucHJvcHMuc2VyaWFsaXplZC5uZXh0LCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaGVldC50YWdzLmxlbmd0aCkge1xuICAgICAgLy8gaWYgdGhpcyBkb2Vzbid0IGV4aXN0IHRoZW4gaXQgd2lsbCBiZSBudWxsIHNvIHRoZSBzdHlsZSBlbGVtZW50IHdpbGwgYmUgYXBwZW5kZWRcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5zaGVldC50YWdzW3RoaXMuc2hlZXQudGFncy5sZW5ndGggLSAxXS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICB0aGlzLnNoZWV0LmJlZm9yZSA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLnNoZWV0LmZsdXNoKCk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5jYWNoZS5pbnNlcnQoXCJcIiwgdGhpcy5wcm9wcy5zZXJpYWxpemVkLCB0aGlzLnNoZWV0LCBmYWxzZSk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zaGVldC5mbHVzaCgpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gSW5uZXJHbG9iYWw7XG59KENvbXBvbmVudCk7XG5cbnZhciBrZXlmcmFtZXMgPSBmdW5jdGlvbiBrZXlmcmFtZXMoKSB7XG4gIHZhciBpbnNlcnRhYmxlID0gY3NzLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgdmFyIG5hbWUgPSBcImFuaW1hdGlvbi1cIiArIGluc2VydGFibGUubmFtZTsgLy8gJEZsb3dGaXhNZVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBzdHlsZXM6IFwiQGtleWZyYW1lcyBcIiArIG5hbWUgKyBcIntcIiArIGluc2VydGFibGUuc3R5bGVzICsgXCJ9XCIsXG4gICAgYW5pbTogMSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gXCJfRU1PX1wiICsgdGhpcy5uYW1lICsgXCJfXCIgKyB0aGlzLnN0eWxlcyArIFwiX0VNT19cIjtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgY2xhc3NuYW1lcyA9IGZ1bmN0aW9uIGNsYXNzbmFtZXMoYXJncykge1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIGNscyA9ICcnO1xuXG4gIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgYXJnID0gYXJnc1tpXTtcbiAgICBpZiAoYXJnID09IG51bGwpIGNvbnRpbnVlO1xuICAgIHZhciB0b0FkZCA9IHZvaWQgMDtcblxuICAgIHN3aXRjaCAodHlwZW9mIGFyZykge1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICAgICAgdG9BZGQgPSBjbGFzc25hbWVzKGFyZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvQWRkID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gYXJnKSB7XG4gICAgICAgICAgICAgIGlmIChhcmdba10gJiYgaykge1xuICAgICAgICAgICAgICAgIHRvQWRkICYmICh0b0FkZCArPSAnICcpO1xuICAgICAgICAgICAgICAgIHRvQWRkICs9IGs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB7XG4gICAgICAgICAgdG9BZGQgPSBhcmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9BZGQpIHtcbiAgICAgIGNscyAmJiAoY2xzICs9ICcgJyk7XG4gICAgICBjbHMgKz0gdG9BZGQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNscztcbn07XG5cbmZ1bmN0aW9uIG1lcmdlKHJlZ2lzdGVyZWQsIGNzcywgY2xhc3NOYW1lKSB7XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW107XG4gIHZhciByYXdDbGFzc05hbWUgPSBnZXRSZWdpc3RlcmVkU3R5bGVzKHJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIGNsYXNzTmFtZSk7XG5cbiAgaWYgKHJlZ2lzdGVyZWRTdHlsZXMubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICByZXR1cm4gcmF3Q2xhc3NOYW1lICsgY3NzKHJlZ2lzdGVyZWRTdHlsZXMpO1xufVxuXG52YXIgQ2xhc3NOYW1lcyA9IHdpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjb250ZXh0KSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChUaGVtZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgIHZhciBoYXNSZW5kZXJlZCA9IGZhbHNlO1xuXG4gICAgdmFyIGNzcyA9IGZ1bmN0aW9uIGNzcygpIHtcbiAgICAgIGlmIChoYXNSZW5kZXJlZCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY3NzIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIHJlbmRlcicpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoYXJncywgY29udGV4dC5yZWdpc3RlcmVkKTtcblxuICAgICAge1xuICAgICAgICBpbnNlcnRTdHlsZXMoY29udGV4dCwgc2VyaWFsaXplZCwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGV4dC5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcbiAgICB9O1xuXG4gICAgdmFyIGN4ID0gZnVuY3Rpb24gY3goKSB7XG4gICAgICBpZiAoaGFzUmVuZGVyZWQgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2N4IGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIHJlbmRlcicpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWVyZ2UoY29udGV4dC5yZWdpc3RlcmVkLCBjc3MsIGNsYXNzbmFtZXMoYXJncykpO1xuICAgIH07XG5cbiAgICB2YXIgY29udGVudCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgY3g6IGN4LFxuICAgICAgdGhlbWU6IHRoZW1lXG4gICAgfTtcbiAgICB2YXIgZWxlID0gcHJvcHMuY2hpbGRyZW4oY29udGVudCk7XG4gICAgaGFzUmVuZGVyZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGVsZTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IHsgQ2xhc3NOYW1lcywgR2xvYmFsLCBqc3ggYXMgY3JlYXRlRWxlbWVudCwganN4LCBrZXlmcmFtZXMgfTtcbiIsImltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c0xvb3NlJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIGZvcndhcmRSZWYsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuaW1wb3J0IHsgZ2V0UmVnaXN0ZXJlZFN0eWxlcywgaW5zZXJ0U3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vdXRpbHMnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vc2VyaWFsaXplJztcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIEVtb3Rpb25DYWNoZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dCggLy8gd2UncmUgZG9pbmcgdGhpcyB0byBhdm9pZCBwcmVjb25zdHJ1Y3QncyBkZWFkIGNvZGUgZWxpbWluYXRpb24gaW4gdGhpcyBvbmUgY2FzZVxuLy8gYmVjYXVzZSB0aGlzIG1vZHVsZSBpcyBwcmltYXJpbHkgaW50ZW5kZWQgZm9yIHRoZSBicm93c2VyIGFuZCBub2RlXG4vLyBidXQgaXQncyBhbHNvIHJlcXVpcmVkIGluIHJlYWN0IG5hdGl2ZSBhbmQgc2ltaWxhciBlbnZpcm9ubWVudHMgc29tZXRpbWVzXG4vLyBhbmQgd2UgY291bGQgaGF2ZSBhIHNwZWNpYWwgYnVpbGQganVzdCBmb3IgdGhhdFxuLy8gYnV0IHRoaXMgaXMgbXVjaCBlYXNpZXIgYW5kIHRoZSBuYXRpdmUgcGFja2FnZXNcbi8vIG1pZ2h0IHVzZSBhIGRpZmZlcmVudCB0aGVtZSBjb250ZXh0IGluIHRoZSBmdXR1cmUgYW55d2F5XG50eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnID8gY3JlYXRlQ2FjaGUoKSA6IG51bGwpO1xudmFyIFRoZW1lQ29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb250ZXh0KHt9KTtcbnZhciBDYWNoZVByb3ZpZGVyID0gRW1vdGlvbkNhY2hlQ29udGV4dC5Qcm92aWRlcjtcblxudmFyIHdpdGhFbW90aW9uQ2FjaGUgPSBmdW5jdGlvbiB3aXRoRW1vdGlvbkNhY2hlKGZ1bmMpIHtcbiAgdmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KEVtb3Rpb25DYWNoZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgcmV0dXJuIGZ1bmMocHJvcHMsIGNhY2hlLCByZWYpO1xuICAgIH0pO1xuICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICByZXR1cm4gLyojX19QVVJFX18qL2ZvcndhcmRSZWYocmVuZGVyKTtcbn07XG5cbi8vIHRodXMgd2Ugb25seSBuZWVkIHRvIHJlcGxhY2Ugd2hhdCBpcyBhIHZhbGlkIGNoYXJhY3RlciBmb3IgSlMsIGJ1dCBub3QgZm9yIENTU1xuXG52YXIgc2FuaXRpemVJZGVudGlmaWVyID0gZnVuY3Rpb24gc2FuaXRpemVJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgcmV0dXJuIGlkZW50aWZpZXIucmVwbGFjZSgvXFwkL2csICctJyk7XG59O1xuXG52YXIgdHlwZVByb3BOYW1lID0gJ19fRU1PVElPTl9UWVBFX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGxhYmVsUHJvcE5hbWUgPSAnX19FTU9USU9OX0xBQkVMX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGNyZWF0ZUVtb3Rpb25Qcm9wcyA9IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlLCBwcm9wcykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgcHJvcHMuY3NzID09PSAnc3RyaW5nJyAmJiAvLyBjaGVjayBpZiB0aGVyZSBpcyBhIGNzcyBkZWNsYXJhdGlvblxuICBwcm9wcy5jc3MuaW5kZXhPZignOicpICE9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlN0cmluZ3MgYXJlIG5vdCBhbGxvd2VkIGFzIGNzcyBwcm9wIHZhbHVlcywgcGxlYXNlIHdyYXAgaXQgaW4gYSBjc3MgdGVtcGxhdGUgbGl0ZXJhbCBmcm9tICdAZW1vdGlvbi9jc3MnIGxpa2UgdGhpczogY3NzYFwiICsgcHJvcHMuY3NzICsgXCJgXCIpO1xuICB9XG5cbiAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIGtleSkpIHtcbiAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIG5ld1Byb3BzW3R5cGVQcm9wTmFtZV0gPSB0eXBlOyAvLyBUT0RPOiBjaGVjayBpZiB0aGlzIHN0aWxsIHdvcmtzIHdpdGggYWxsIG9mIHRob3NlIGRpZmZlcmVudCBKU1ggZnVuY3Rpb25zXG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblxuICAgIGlmIChlcnJvci5zdGFjaykge1xuICAgICAgLy8gY2hyb21lXG4gICAgICB2YXIgbWF0Y2ggPSBlcnJvci5zdGFjay5tYXRjaCgvYXQgKD86T2JqZWN0XFwufE1vZHVsZVxcLnwpKD86anN4fGNyZWF0ZUVtb3Rpb25Qcm9wcykuKlxcblxccythdCAoPzpPYmplY3RcXC58KShbQS1aXVtBLVphLXokXSspIC8pO1xuXG4gICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIC8vIHNhZmFyaSBhbmQgZmlyZWZveFxuICAgICAgICBtYXRjaCA9IGVycm9yLnN0YWNrLm1hdGNoKC8uKlxcbihbQS1aXVtBLVphLXokXSspQC8pO1xuICAgICAgfVxuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgbmV3UHJvcHNbbGFiZWxQcm9wTmFtZV0gPSBzYW5pdGl6ZUlkZW50aWZpZXIobWF0Y2hbMV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdQcm9wcztcbn07XG5cbnZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoY2FjaGUsIHByb3BzLCB0aGVtZSwgcmVmKSB7XG4gIHZhciBjc3NQcm9wID0gdGhlbWUgPT09IG51bGwgPyBwcm9wcy5jc3MgOiBwcm9wcy5jc3ModGhlbWUpOyAvLyBzbyB0aGF0IHVzaW5nIGBjc3NgIGZyb20gYGVtb3Rpb25gIGFuZCBwYXNzaW5nIHRoZSByZXN1bHQgdG8gdGhlIGNzcyBwcm9wIHdvcmtzXG4gIC8vIG5vdCBwYXNzaW5nIHRoZSByZWdpc3RlcmVkIGNhY2hlIHRvIHNlcmlhbGl6ZVN0eWxlcyBiZWNhdXNlIGl0IHdvdWxkXG4gIC8vIG1ha2UgY2VydGFpbiBiYWJlbCBvcHRpbWlzYXRpb25zIG5vdCBwb3NzaWJsZVxuXG4gIGlmICh0eXBlb2YgY3NzUHJvcCA9PT0gJ3N0cmluZycgJiYgY2FjaGUucmVnaXN0ZXJlZFtjc3NQcm9wXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY3NzUHJvcCA9IGNhY2hlLnJlZ2lzdGVyZWRbY3NzUHJvcF07XG4gIH1cblxuICB2YXIgdHlwZSA9IHByb3BzW3R5cGVQcm9wTmFtZV07XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW2Nzc1Byb3BdO1xuICB2YXIgY2xhc3NOYW1lID0gJyc7XG5cbiAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY2xhc3NOYW1lID0gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhjYWNoZS5yZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBwcm9wcy5jbGFzc05hbWUpO1xuICB9IGVsc2UgaWYgKHByb3BzLmNsYXNzTmFtZSAhPSBudWxsKSB7XG4gICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lICsgXCIgXCI7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhyZWdpc3RlcmVkU3R5bGVzKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzZXJpYWxpemVkLm5hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgIHZhciBsYWJlbEZyb21TdGFjayA9IHByb3BzW2xhYmVsUHJvcE5hbWVdO1xuXG4gICAgaWYgKGxhYmVsRnJvbVN0YWNrKSB7XG4gICAgICBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKFtzZXJpYWxpemVkLCAnbGFiZWw6JyArIGxhYmVsRnJvbVN0YWNrICsgJzsnXSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHJ1bGVzID0gaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpO1xuICBjbGFzc05hbWUgKz0gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG4gIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpICYmIGtleSAhPT0gJ2NzcycgJiYga2V5ICE9PSB0eXBlUHJvcE5hbWUgJiYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgfHwga2V5ICE9PSBsYWJlbFByb3BOYW1lKSkge1xuICAgICAgbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgfVxuICB9XG5cbiAgbmV3UHJvcHMucmVmID0gcmVmO1xuICBuZXdQcm9wcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIHZhciBlbGUgPSAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudCh0eXBlLCBuZXdQcm9wcyk7XG5cbiAgcmV0dXJuIGVsZTtcbn07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXG5cbnZhciBFbW90aW9uID0gLyogI19fUFVSRV9fICovd2l0aEVtb3Rpb25DYWNoZShmdW5jdGlvbiAocHJvcHMsIGNhY2hlLCByZWYpIHtcbiAgaWYgKHR5cGVvZiBwcm9wcy5jc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoVGhlbWVDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAodGhlbWUpIHtcbiAgICAgIHJldHVybiByZW5kZXIoY2FjaGUsIHByb3BzLCB0aGVtZSwgcmVmKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZW5kZXIoY2FjaGUsIHByb3BzLCBudWxsLCByZWYpO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEVtb3Rpb24uZGlzcGxheU5hbWUgPSAnRW1vdGlvbkNzc1Byb3BJbnRlcm5hbCc7XG59XG5cbmV4cG9ydCB7IENhY2hlUHJvdmlkZXIgYXMgQywgRW1vdGlvbiBhcyBFLCBUaGVtZUNvbnRleHQgYXMgVCwgY3JlYXRlRW1vdGlvblByb3BzIGFzIGMsIGhhc093blByb3BlcnR5IGFzIGgsIHdpdGhFbW90aW9uQ2FjaGUgYXMgdyB9O1xuIiwiaW1wb3J0IHsgc2VyaWFsaXplU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vc2VyaWFsaXplJztcblxuZnVuY3Rpb24gY3NzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIHNlcmlhbGl6ZVN0eWxlcyhhcmdzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3NzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9nYXJ5Y291cnQvbXVybXVyaGFzaC1qc1xuLy8gUG9ydGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FhcHBsZWJ5L3NtaGFzaGVyL2Jsb2IvNjFhMDUzMGYyODI3N2YyZTg1MGJmYzM5NjAwY2U2MWQwMmI1MThkZS9zcmMvTXVybXVySGFzaDIuY3BwI0wzNy1MODZcbmZ1bmN0aW9uIG11cm11cjIoc3RyKSB7XG4gIC8vICdtJyBhbmQgJ3InIGFyZSBtaXhpbmcgY29uc3RhbnRzIGdlbmVyYXRlZCBvZmZsaW5lLlxuICAvLyBUaGV5J3JlIG5vdCByZWFsbHkgJ21hZ2ljJywgdGhleSBqdXN0IGhhcHBlbiB0byB3b3JrIHdlbGwuXG4gIC8vIGNvbnN0IG0gPSAweDViZDFlOTk1O1xuICAvLyBjb25zdCByID0gMjQ7XG4gIC8vIEluaXRpYWxpemUgdGhlIGhhc2hcbiAgdmFyIGggPSAwOyAvLyBNaXggNCBieXRlcyBhdCBhIHRpbWUgaW50byB0aGUgaGFzaFxuXG4gIHZhciBrLFxuICAgICAgaSA9IDAsXG4gICAgICBsZW4gPSBzdHIubGVuZ3RoO1xuXG4gIGZvciAoOyBsZW4gPj0gNDsgKytpLCBsZW4gLT0gNCkge1xuICAgIGsgPSBzdHIuY2hhckNvZGVBdChpKSAmIDB4ZmYgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDggfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDE2IHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAyNDtcbiAgICBrID1cbiAgICAvKiBNYXRoLmltdWwoaywgbSk6ICovXG4gICAgKGsgJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoayA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgICBrIF49XG4gICAgLyogayA+Pj4gcjogKi9cbiAgICBrID4+PiAyNDtcbiAgICBoID1cbiAgICAvKiBNYXRoLmltdWwoaywgbSk6ICovXG4gICAgKGsgJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoayA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KSBeXG4gICAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAgIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIH0gLy8gSGFuZGxlIHRoZSBsYXN0IGZldyBieXRlcyBvZiB0aGUgaW5wdXQgYXJyYXlcblxuXG4gIHN3aXRjaCAobGVuKSB7XG4gICAgY2FzZSAzOlxuICAgICAgaCBePSAoc3RyLmNoYXJDb2RlQXQoaSArIDIpICYgMHhmZikgPDwgMTY7XG5cbiAgICBjYXNlIDI6XG4gICAgICBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMSkgJiAweGZmKSA8PCA4O1xuXG4gICAgY2FzZSAxOlxuICAgICAgaCBePSBzdHIuY2hhckNvZGVBdChpKSAmIDB4ZmY7XG4gICAgICBoID1cbiAgICAgIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgICAgIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIH0gLy8gRG8gYSBmZXcgZmluYWwgbWl4ZXMgb2YgdGhlIGhhc2ggdG8gZW5zdXJlIHRoZSBsYXN0IGZld1xuICAvLyBieXRlcyBhcmUgd2VsbC1pbmNvcnBvcmF0ZWQuXG5cblxuICBoIF49IGggPj4+IDEzO1xuICBoID1cbiAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICByZXR1cm4gKChoIF4gaCA+Pj4gMTUpID4+PiAwKS50b1N0cmluZygzNik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG11cm11cjI7XG4iLCJpbXBvcnQgaGFzaFN0cmluZyBmcm9tICdAZW1vdGlvbi9oYXNoJztcbmltcG9ydCB1bml0bGVzcyBmcm9tICdAZW1vdGlvbi91bml0bGVzcyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SID0gXCJZb3UgaGF2ZSBpbGxlZ2FsIGVzY2FwZSBzZXF1ZW5jZSBpbiB5b3VyIHRlbXBsYXRlIGxpdGVyYWwsIG1vc3QgbGlrZWx5IGluc2lkZSBjb250ZW50J3MgcHJvcGVydHkgdmFsdWUuXFxuQmVjYXVzZSB5b3Ugd3JpdGUgeW91ciBDU1MgaW5zaWRlIGEgSmF2YVNjcmlwdCBzdHJpbmcgeW91IGFjdHVhbGx5IGhhdmUgdG8gZG8gZG91YmxlIGVzY2FwaW5nLCBzbyBmb3IgZXhhbXBsZSBcXFwiY29udGVudDogJ1xcXFwwMGQ3JztcXFwiIHNob3VsZCBiZWNvbWUgXFxcImNvbnRlbnQ6ICdcXFxcXFxcXDAwZDcnO1xcXCIuXFxuWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhpcyBoZXJlOlxcbmh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL1RlbXBsYXRlX2xpdGVyYWxzI0VTMjAxOF9yZXZpc2lvbl9vZl9pbGxlZ2FsX2VzY2FwZV9zZXF1ZW5jZXNcIjtcbnZhciBVTkRFRklORURfQVNfT0JKRUNUX0tFWV9FUlJPUiA9IFwiWW91IGhhdmUgcGFzc2VkIGluIGZhbHN5IHZhbHVlIGFzIHN0eWxlIG9iamVjdCdzIGtleSAoY2FuIGhhcHBlbiB3aGVuIGluIGV4YW1wbGUgeW91IHBhc3MgdW5leHBvcnRlZCBjb21wb25lbnQgYXMgY29tcHV0ZWQga2V5KS5cIjtcbnZhciBoeXBoZW5hdGVSZWdleCA9IC9bQS1aXXxebXMvZztcbnZhciBhbmltYXRpb25SZWdleCA9IC9fRU1PXyhbXl9dKz8pXyhbXl0qPylfRU1PXy9nO1xuXG52YXIgaXNDdXN0b21Qcm9wZXJ0eSA9IGZ1bmN0aW9uIGlzQ3VzdG9tUHJvcGVydHkocHJvcGVydHkpIHtcbiAgcmV0dXJuIHByb3BlcnR5LmNoYXJDb2RlQXQoMSkgPT09IDQ1O1xufTtcblxudmFyIGlzUHJvY2Vzc2FibGVWYWx1ZSA9IGZ1bmN0aW9uIGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJztcbn07XG5cbnZhciBwcm9jZXNzU3R5bGVOYW1lID0gbWVtb2l6ZShmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gIHJldHVybiBpc0N1c3RvbVByb3BlcnR5KHN0eWxlTmFtZSkgPyBzdHlsZU5hbWUgOiBzdHlsZU5hbWUucmVwbGFjZShoeXBoZW5hdGVSZWdleCwgJy0kJicpLnRvTG93ZXJDYXNlKCk7XG59KTtcblxudmFyIHByb2Nlc3NTdHlsZVZhbHVlID0gZnVuY3Rpb24gcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSkge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgY2FzZSAnYW5pbWF0aW9uTmFtZSc6XG4gICAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoYW5pbWF0aW9uUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCwgcDEsIHAyKSB7XG4gICAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IHAxLFxuICAgICAgICAgICAgICBzdHlsZXM6IHAyLFxuICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gcDE7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIGlmICh1bml0bGVzc1trZXldICE9PSAxICYmICFpc0N1c3RvbVByb3BlcnR5KGtleSkgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB2YWx1ZSArICdweCc7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgY29udGVudFZhbHVlUGF0dGVybiA9IC8oYXR0cnxjYWxjfGNvdW50ZXJzP3x1cmwpXFwoLztcbiAgdmFyIGNvbnRlbnRWYWx1ZXMgPSBbJ25vcm1hbCcsICdub25lJywgJ2NvdW50ZXInLCAnb3Blbi1xdW90ZScsICdjbG9zZS1xdW90ZScsICduby1vcGVuLXF1b3RlJywgJ25vLWNsb3NlLXF1b3RlJywgJ2luaXRpYWwnLCAnaW5oZXJpdCcsICd1bnNldCddO1xuICB2YXIgb2xkUHJvY2Vzc1N0eWxlVmFsdWUgPSBwcm9jZXNzU3R5bGVWYWx1ZTtcbiAgdmFyIG1zUGF0dGVybiA9IC9eLW1zLS87XG4gIHZhciBoeXBoZW5QYXR0ZXJuID0gLy0oLikvZztcbiAgdmFyIGh5cGhlbmF0ZWRDYWNoZSA9IHt9O1xuXG4gIHByb2Nlc3NTdHlsZVZhbHVlID0gZnVuY3Rpb24gcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgPT09ICdjb250ZW50Jykge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgY29udGVudFZhbHVlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTEgJiYgIWNvbnRlbnRWYWx1ZVBhdHRlcm4udGVzdCh2YWx1ZSkgJiYgKHZhbHVlLmNoYXJBdCgwKSAhPT0gdmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDEpIHx8IHZhbHVlLmNoYXJBdCgwKSAhPT0gJ1wiJyAmJiB2YWx1ZS5jaGFyQXQoMCkgIT09IFwiJ1wiKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiWW91IHNlZW0gdG8gYmUgdXNpbmcgYSB2YWx1ZSBmb3IgJ2NvbnRlbnQnIHdpdGhvdXQgcXVvdGVzLCB0cnkgcmVwbGFjaW5nIGl0IHdpdGggYGNvbnRlbnQ6ICdcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIidgXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcm9jZXNzZWQgPSBvbGRQcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKTtcblxuICAgIGlmIChwcm9jZXNzZWQgIT09ICcnICYmICFpc0N1c3RvbVByb3BlcnR5KGtleSkgJiYga2V5LmluZGV4T2YoJy0nKSAhPT0gLTEgJiYgaHlwaGVuYXRlZENhY2hlW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgaHlwaGVuYXRlZENhY2hlW2tleV0gPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcihcIlVzaW5nIGtlYmFiLWNhc2UgZm9yIGNzcyBwcm9wZXJ0aWVzIGluIG9iamVjdHMgaXMgbm90IHN1cHBvcnRlZC4gRGlkIHlvdSBtZWFuIFwiICsga2V5LnJlcGxhY2UobXNQYXR0ZXJuLCAnbXMtJykucmVwbGFjZShoeXBoZW5QYXR0ZXJuLCBmdW5jdGlvbiAoc3RyLCBfY2hhcikge1xuICAgICAgICByZXR1cm4gX2NoYXIudG9VcHBlckNhc2UoKTtcbiAgICAgIH0pICsgXCI/XCIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZXNzZWQ7XG4gIH07XG59XG5cbnZhciBzaG91bGRXYXJuQWJvdXRJbnRlcnBvbGF0aW5nQ2xhc3NOYW1lRnJvbUNzcyA9IHRydWU7XG5cbmZ1bmN0aW9uIGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGludGVycG9sYXRpb24sIGNvdWxkQmVTZWxlY3RvckludGVycG9sYXRpb24pIHtcbiAgaWYgKGludGVycG9sYXRpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmIChpbnRlcnBvbGF0aW9uLl9fZW1vdGlvbl9zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGludGVycG9sYXRpb24udG9TdHJpbmcoKSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IHNlbGVjdG9ycyBjYW4gb25seSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYmFiZWwtcGx1Z2luLWVtb3Rpb24uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVycG9sYXRpb247XG4gIH1cblxuICBzd2l0Y2ggKHR5cGVvZiBpbnRlcnBvbGF0aW9uKSB7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICB7XG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uLmFuaW0gPT09IDEpIHtcbiAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICBuYW1lOiBpbnRlcnBvbGF0aW9uLm5hbWUsXG4gICAgICAgICAgICBzdHlsZXM6IGludGVycG9sYXRpb24uc3R5bGVzLFxuICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gaW50ZXJwb2xhdGlvbi5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGludGVycG9sYXRpb24uc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IGludGVycG9sYXRpb24ubmV4dDtcblxuICAgICAgICAgIGlmIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vdCB0aGUgbW9zdCBlZmZpY2llbnQgdGhpbmcgZXZlciBidXQgdGhpcyBpcyBhIHByZXR0eSByYXJlIGNhc2VcbiAgICAgICAgICAgIC8vIGFuZCB0aGVyZSB3aWxsIGJlIHZlcnkgZmV3IGl0ZXJhdGlvbnMgb2YgdGhpcyBnZW5lcmFsbHlcbiAgICAgICAgICAgIHdoaWxlIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IG5leHQubmFtZSxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IG5leHQuc3R5bGVzLFxuICAgICAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzdHlsZXMgPSBpbnRlcnBvbGF0aW9uLnN0eWxlcyArIFwiO1wiO1xuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaW50ZXJwb2xhdGlvbi5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3R5bGVzICs9IGludGVycG9sYXRpb24ubWFwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3JlYXRlU3RyaW5nRnJvbU9iamVjdChtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgaW50ZXJwb2xhdGlvbik7XG4gICAgICB9XG5cbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICB7XG4gICAgICAgIGlmIChtZXJnZWRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIHByZXZpb3VzQ3Vyc29yID0gY3Vyc29yO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBpbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzKTtcbiAgICAgICAgICBjdXJzb3IgPSBwcmV2aW91c0N1cnNvcjtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgcmVzdWx0LCBjb3VsZEJlU2VsZWN0b3JJbnRlcnBvbGF0aW9uKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRnVuY3Rpb25zIHRoYXQgYXJlIGludGVycG9sYXRlZCBpbiBjc3MgY2FsbHMgd2lsbCBiZSBzdHJpbmdpZmllZC5cXG4nICsgJ0lmIHlvdSB3YW50IHRvIGhhdmUgYSBjc3MgY2FsbCBiYXNlZCBvbiBwcm9wcywgY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgY3NzIGNhbGwgbGlrZSB0aGlzXFxuJyArICdsZXQgZHluYW1pY1N0eWxlID0gKHByb3BzKSA9PiBjc3NgY29sb3I6ICR7cHJvcHMuY29sb3J9YFxcbicgKyAnSXQgY2FuIGJlIGNhbGxlZCBkaXJlY3RseSB3aXRoIHByb3BzIG9yIGludGVycG9sYXRlZCBpbiBhIHN0eWxlZCBjYWxsIGxpa2UgdGhpc1xcbicgKyBcImxldCBTb21lQ29tcG9uZW50ID0gc3R5bGVkKCdkaXYnKWAke2R5bmFtaWNTdHlsZX1gXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBbXTtcbiAgICAgICAgdmFyIHJlcGxhY2VkID0gaW50ZXJwb2xhdGlvbi5yZXBsYWNlKGFuaW1hdGlvblJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gsIHAxLCBwMikge1xuICAgICAgICAgIHZhciBmYWtlVmFyTmFtZSA9IFwiYW5pbWF0aW9uXCIgKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgICBtYXRjaGVkLnB1c2goXCJjb25zdCBcIiArIGZha2VWYXJOYW1lICsgXCIgPSBrZXlmcmFtZXNgXCIgKyBwMi5yZXBsYWNlKC9eQGtleWZyYW1lcyBhbmltYXRpb24tXFx3Ky8sICcnKSArIFwiYFwiKTtcbiAgICAgICAgICByZXR1cm4gXCIke1wiICsgZmFrZVZhck5hbWUgKyBcIn1cIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZWQubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignYGtleWZyYW1lc2Agb3V0cHV0IGdvdCBpbnRlcnBvbGF0ZWQgaW50byBwbGFpbiBzdHJpbmcsIHBsZWFzZSB3cmFwIGl0IHdpdGggYGNzc2AuXFxuXFxuJyArICdJbnN0ZWFkIG9mIGRvaW5nIHRoaXM6XFxuXFxuJyArIFtdLmNvbmNhdChtYXRjaGVkLCBbXCJgXCIgKyByZXBsYWNlZCArIFwiYFwiXSkuam9pbignXFxuJykgKyAnXFxuXFxuWW91IHNob3VsZCB3cmFwIGl0IHdpdGggYGNzc2AgbGlrZSB0aGlzOlxcblxcbicgKyAoXCJjc3NgXCIgKyByZXBsYWNlZCArIFwiYFwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gIH0gLy8gZmluYWxpemUgc3RyaW5nIHZhbHVlcyAocmVndWxhciBzdHJpbmdzIGFuZCBmdW5jdGlvbnMgaW50ZXJwb2xhdGVkIGludG8gY3NzIGNhbGxzKVxuXG5cbiAgaWYgKHJlZ2lzdGVyZWQgPT0gbnVsbCkge1xuICAgIHJldHVybiBpbnRlcnBvbGF0aW9uO1xuICB9XG5cbiAgdmFyIGNhY2hlZCA9IHJlZ2lzdGVyZWRbaW50ZXJwb2xhdGlvbl07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY291bGRCZVNlbGVjdG9ySW50ZXJwb2xhdGlvbiAmJiBzaG91bGRXYXJuQWJvdXRJbnRlcnBvbGF0aW5nQ2xhc3NOYW1lRnJvbUNzcyAmJiBjYWNoZWQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ludGVycG9sYXRpbmcgYSBjbGFzc05hbWUgZnJvbSBjc3NgYCBpcyBub3QgcmVjb21tZW5kZWQgYW5kIHdpbGwgY2F1c2UgcHJvYmxlbXMgd2l0aCBjb21wb3NpdGlvbi5cXG4nICsgJ0ludGVycG9sYXRpbmcgYSBjbGFzc05hbWUgZnJvbSBjc3NgYCB3aWxsIGJlIGNvbXBsZXRlbHkgdW5zdXBwb3J0ZWQgaW4gYSBmdXR1cmUgbWFqb3IgdmVyc2lvbiBvZiBFbW90aW9uJyk7XG4gICAgc2hvdWxkV2FybkFib3V0SW50ZXJwb2xhdGluZ0NsYXNzTmFtZUZyb21Dc3MgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZWQgIT09IHVuZGVmaW5lZCAmJiAhY291bGRCZVNlbGVjdG9ySW50ZXJwb2xhdGlvbiA/IGNhY2hlZCA6IGludGVycG9sYXRpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0cmluZ0Zyb21PYmplY3QobWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIG9iaikge1xuICB2YXIgc3RyaW5nID0gJyc7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdHJpbmcgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgb2JqW2ldLCBmYWxzZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIF9rZXkgaW4gb2JqKSB7XG4gICAgICB2YXIgdmFsdWUgPSBvYmpbX2tleV07XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChyZWdpc3RlcmVkICE9IG51bGwgJiYgcmVnaXN0ZXJlZFt2YWx1ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN0cmluZyArPSBfa2V5ICsgXCJ7XCIgKyByZWdpc3RlcmVkW3ZhbHVlXSArIFwifVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShfa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoX2tleSwgdmFsdWUpICsgXCI7XCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChfa2V5ID09PSAnTk9fQ09NUE9ORU5UX1NFTEVDVE9SJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgc2VsZWN0b3JzIGNhbiBvbmx5IGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBiYWJlbC1wbHVnaW4tZW1vdGlvbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWVbMF0gPT09ICdzdHJpbmcnICYmIChyZWdpc3RlcmVkID09IG51bGwgfHwgcmVnaXN0ZXJlZFt2YWx1ZVswXV0gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdmFsdWUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXNQcm9jZXNzYWJsZVZhbHVlKHZhbHVlW19pXSkpIHtcbiAgICAgICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoX2tleSkgKyBcIjpcIiArIHByb2Nlc3NTdHlsZVZhbHVlKF9rZXksIHZhbHVlW19pXSkgKyBcIjtcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGludGVycG9sYXRlZCA9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHZhbHVlLCBmYWxzZSk7XG5cbiAgICAgICAgICBzd2l0Y2ggKF9rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgICAgICAgICBjYXNlICdhbmltYXRpb25OYW1lJzpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBpbnRlcnBvbGF0ZWQgKyBcIjtcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgX2tleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoVU5ERUZJTkVEX0FTX09CSkVDVF9LRVlfRVJST1IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBfa2V5ICsgXCJ7XCIgKyBpbnRlcnBvbGF0ZWQgKyBcIn1cIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbnZhciBsYWJlbFBhdHRlcm4gPSAvbGFiZWw6XFxzKihbXlxccztcXG57XSspXFxzKjsvZztcbnZhciBzb3VyY2VNYXBQYXR0ZXJuO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBzb3VyY2VNYXBQYXR0ZXJuID0gL1xcL1xcKiNcXHNzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb25cXC9qc29uO1xcUytcXHMrXFwqXFwvLztcbn0gLy8gdGhpcyBpcyB0aGUgY3Vyc29yIGZvciBrZXlmcmFtZXNcbi8vIGtleWZyYW1lcyBhcmUgc3RvcmVkIG9uIHRoZSBTZXJpYWxpemVkU3R5bGVzIG9iamVjdCBhcyBhIGxpbmtlZCBsaXN0XG5cblxudmFyIGN1cnNvcjtcbnZhciBzZXJpYWxpemVTdHlsZXMgPSBmdW5jdGlvbiBzZXJpYWxpemVTdHlsZXMoYXJncywgcmVnaXN0ZXJlZCwgbWVyZ2VkUHJvcHMpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0JyAmJiBhcmdzWzBdICE9PSBudWxsICYmIGFyZ3NbMF0uc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYXJnc1swXTtcbiAgfVxuXG4gIHZhciBzdHJpbmdNb2RlID0gdHJ1ZTtcbiAgdmFyIHN0eWxlcyA9ICcnO1xuICBjdXJzb3IgPSB1bmRlZmluZWQ7XG4gIHZhciBzdHJpbmdzID0gYXJnc1swXTtcblxuICBpZiAoc3RyaW5ncyA9PSBudWxsIHx8IHN0cmluZ3MucmF3ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdHJpbmdNb2RlID0gZmFsc2U7XG4gICAgc3R5bGVzICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHN0cmluZ3MsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzdHJpbmdzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IpO1xuICAgIH1cblxuICAgIHN0eWxlcyArPSBzdHJpbmdzWzBdO1xuICB9IC8vIHdlIHN0YXJ0IGF0IDEgc2luY2Ugd2UndmUgYWxyZWFkeSBoYW5kbGVkIHRoZSBmaXJzdCBhcmdcblxuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgIHN0eWxlcyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBhcmdzW2ldLCBzdHlsZXMuY2hhckNvZGVBdChzdHlsZXMubGVuZ3RoIC0gMSkgPT09IDQ2KTtcblxuICAgIGlmIChzdHJpbmdNb2RlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzdHJpbmdzW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUik7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlcyArPSBzdHJpbmdzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzb3VyY2VNYXA7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBzdHlsZXMgPSBzdHlsZXMucmVwbGFjZShzb3VyY2VNYXBQYXR0ZXJuLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHNvdXJjZU1hcCA9IG1hdGNoO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuICB9IC8vIHVzaW5nIGEgZ2xvYmFsIHJlZ2V4IHdpdGggLmV4ZWMgaXMgc3RhdGVmdWwgc28gbGFzdEluZGV4IGhhcyB0byBiZSByZXNldCBlYWNoIHRpbWVcblxuXG4gIGxhYmVsUGF0dGVybi5sYXN0SW5kZXggPSAwO1xuICB2YXIgaWRlbnRpZmllck5hbWUgPSAnJztcbiAgdmFyIG1hdGNoOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViODA5YzJjZjI5NDk4MDBhMGY2MWZiNVxuXG4gIHdoaWxlICgobWF0Y2ggPSBsYWJlbFBhdHRlcm4uZXhlYyhzdHlsZXMpKSAhPT0gbnVsbCkge1xuICAgIGlkZW50aWZpZXJOYW1lICs9ICctJyArIC8vICRGbG93Rml4TWUgd2Uga25vdyBpdCdzIG5vdCBudWxsXG4gICAgbWF0Y2hbMV07XG4gIH1cblxuICB2YXIgbmFtZSA9IGhhc2hTdHJpbmcoc3R5bGVzKSArIGlkZW50aWZpZXJOYW1lO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gJEZsb3dGaXhNZSBTZXJpYWxpemVkU3R5bGVzIHR5cGUgZG9lc24ndCBoYXZlIHRvU3RyaW5nIHByb3BlcnR5IChhbmQgd2UgZG9uJ3Qgd2FudCB0byBhZGQgaXQpXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgIG1hcDogc291cmNlTWFwLFxuICAgICAgbmV4dDogY3Vyc29yLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICBuZXh0OiBjdXJzb3JcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9O1xuIiwiLypcblxuQmFzZWQgb2ZmIGdsYW1vcidzIFN0eWxlU2hlZXQsIHRoYW5rcyBTdW5pbCDinaTvuI9cblxuaGlnaCBwZXJmb3JtYW5jZSBTdHlsZVNoZWV0IGZvciBjc3MtaW4tanMgc3lzdGVtc1xuXG4tIHVzZXMgbXVsdGlwbGUgc3R5bGUgdGFncyBiZWhpbmQgdGhlIHNjZW5lcyBmb3IgbWlsbGlvbnMgb2YgcnVsZXNcbi0gdXNlcyBgaW5zZXJ0UnVsZWAgZm9yIGFwcGVuZGluZyBpbiBwcm9kdWN0aW9uIGZvciAqbXVjaCogZmFzdGVyIHBlcmZvcm1hbmNlXG5cbi8vIHVzYWdlXG5cbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdAZW1vdGlvbi9zaGVldCdcblxubGV0IHN0eWxlU2hlZXQgPSBuZXcgU3R5bGVTaGVldCh7IGtleTogJycsIGNvbnRhaW5lcjogZG9jdW1lbnQuaGVhZCB9KVxuXG5zdHlsZVNoZWV0Lmluc2VydCgnI2JveCB7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgfScpXG4tIGFwcGVuZHMgYSBjc3MgcnVsZSBpbnRvIHRoZSBzdHlsZXNoZWV0XG5cbnN0eWxlU2hlZXQuZmx1c2goKVxuLSBlbXB0aWVzIHRoZSBzdHlsZXNoZWV0IG9mIGFsbCBpdHMgY29udGVudHNcblxuKi9cbi8vICRGbG93Rml4TWVcbmZ1bmN0aW9uIHNoZWV0Rm9yVGFnKHRhZykge1xuICBpZiAodGFnLnNoZWV0KSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHJldHVybiB0YWcuc2hlZXQ7XG4gIH0gLy8gdGhpcyB3ZWlyZG5lc3MgYnJvdWdodCB0byB5b3UgYnkgZmlyZWZveFxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLm93bmVyTm9kZSA9PT0gdGFnKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICByZXR1cm4gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLWVtb3Rpb24nLCBvcHRpb25zLmtleSk7XG5cbiAgaWYgKG9wdGlvbnMubm9uY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgb3B0aW9ucy5ub25jZSk7XG4gIH1cblxuICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgcmV0dXJuIHRhZztcbn1cblxudmFyIFN0eWxlU2hlZXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0KG9wdGlvbnMpIHtcbiAgICB0aGlzLmlzU3BlZWR5ID0gb3B0aW9ucy5zcGVlZHkgPT09IHVuZGVmaW5lZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgOiBvcHRpb25zLnNwZWVkeTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLmN0ciA9IDA7XG4gICAgdGhpcy5ub25jZSA9IG9wdGlvbnMubm9uY2U7IC8vIGtleSBpcyB0aGUgdmFsdWUgb2YgdGhlIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGUsIGl0J3MgdXNlZCB0byBpZGVudGlmeSBkaWZmZXJlbnQgc2hlZXRzXG5cbiAgICB0aGlzLmtleSA9IG9wdGlvbnMua2V5O1xuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgdGhpcy5iZWZvcmUgPSBudWxsO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnQocnVsZSkge1xuICAgIC8vIHRoZSBtYXggbGVuZ3RoIGlzIGhvdyBtYW55IHJ1bGVzIHdlIGhhdmUgcGVyIHN0eWxlIHRhZywgaXQncyA2NTAwMCBpbiBzcGVlZHkgbW9kZVxuICAgIC8vIGl0J3MgMSBpbiBkZXYgYmVjYXVzZSB3ZSBpbnNlcnQgc291cmNlIG1hcHMgdGhhdCBtYXAgYSBzaW5nbGUgcnVsZSB0byBhIGxvY2F0aW9uXG4gICAgLy8gYW5kIHlvdSBjYW4gb25seSBoYXZlIG9uZSBzb3VyY2UgbWFwIHBlciBzdHlsZSB0YWdcbiAgICBpZiAodGhpcy5jdHIgJSAodGhpcy5pc1NwZWVkeSA/IDY1MDAwIDogMSkgPT09IDApIHtcbiAgICAgIHZhciBfdGFnID0gY3JlYXRlU3R5bGVFbGVtZW50KHRoaXMpO1xuXG4gICAgICB2YXIgYmVmb3JlO1xuXG4gICAgICBpZiAodGhpcy50YWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBiZWZvcmUgPSB0aGlzLmJlZm9yZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJlZm9yZSA9IHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZShfdGFnLCBiZWZvcmUpO1xuICAgICAgdGhpcy50YWdzLnB1c2goX3RhZyk7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAodGhpcy5pc1NwZWVkeSkge1xuICAgICAgdmFyIHNoZWV0ID0gc2hlZXRGb3JUYWcodGFnKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gdGhpcyBpcyBhIHJlYWxseSBob3QgcGF0aFxuICAgICAgICAvLyB3ZSBjaGVjayB0aGUgc2Vjb25kIGNoYXJhY3RlciBmaXJzdCBiZWNhdXNlIGhhdmluZyBcImlcIlxuICAgICAgICAvLyBhcyB0aGUgc2Vjb25kIGNoYXJhY3RlciB3aWxsIGhhcHBlbiBsZXNzIG9mdGVuIHRoYW5cbiAgICAgICAgLy8gaGF2aW5nIFwiQFwiIGFzIHRoZSBmaXJzdCBjaGFyYWN0ZXJcbiAgICAgICAgdmFyIGlzSW1wb3J0UnVsZSA9IHJ1bGUuY2hhckNvZGVBdCgxKSA9PT0gMTA1ICYmIHJ1bGUuY2hhckNvZGVBdCgwKSA9PT0gNjQ7IC8vIHRoaXMgaXMgdGhlIHVsdHJhZmFzdCB2ZXJzaW9uLCB3b3JrcyBhY3Jvc3MgYnJvd3NlcnNcbiAgICAgICAgLy8gdGhlIGJpZyBkcmF3YmFjayBpcyB0aGF0IHRoZSBjc3Mgd29uJ3QgYmUgZWRpdGFibGUgaW4gZGV2dG9vbHNcblxuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIC8vIHdlIG5lZWQgdG8gaW5zZXJ0IEBpbXBvcnQgcnVsZXMgYmVmb3JlIGFueXRoaW5nIGVsc2VcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHRoZXJlIHdpbGwgYmUgYW4gZXJyb3JcbiAgICAgICAgLy8gdGVjaG5pY2FsbHkgdGhpcyBtZWFucyB0aGF0IHRoZSBAaW1wb3J0IHJ1bGVzIHdpbGxcbiAgICAgICAgLy8gX3VzdWFsbHlfKG5vdCBhbHdheXMgc2luY2UgdGhlcmUgY291bGQgYmUgbXVsdGlwbGUgc3R5bGUgdGFncylcbiAgICAgICAgLy8gYmUgdGhlIGZpcnN0IG9uZXMgaW4gcHJvZCBhbmQgZ2VuZXJhbGx5IGxhdGVyIGluIGRldlxuICAgICAgICAvLyB0aGlzIHNob3VsZG4ndCByZWFsbHkgbWF0dGVyIGluIHRoZSByZWFsIHdvcmxkIHRob3VnaFxuICAgICAgICAvLyBAaW1wb3J0IGlzIGdlbmVyYWxseSBvbmx5IHVzZWQgZm9yIGZvbnQgZmFjZXMgZnJvbSBnb29nbGUgZm9udHMgYW5kIGV0Yy5cbiAgICAgICAgLy8gc28gd2hpbGUgdGhpcyBjb3VsZCBiZSB0ZWNobmljYWxseSBjb3JyZWN0IHRoZW4gaXQgd291bGQgYmUgc2xvd2VyIGFuZCBsYXJnZXJcbiAgICAgICAgLy8gZm9yIGEgdGlueSBiaXQgb2YgY29ycmVjdG5lc3MgdGhhdCB3b24ndCBtYXR0ZXIgaW4gdGhlIHJlYWwgd29ybGRcbiAgICAgICAgaXNJbXBvcnRSdWxlID8gMCA6IHNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlcmUgd2FzIGEgcHJvYmxlbSBpbnNlcnRpbmcgdGhlIGZvbGxvd2luZyBydWxlOiBcXFwiXCIgKyBydWxlICsgXCJcXFwiXCIsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdHIrKztcbiAgfTtcblxuICBfcHJvdG8uZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgdGhpcy50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgcmV0dXJuIHRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgfSk7XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jdHIgPSAwO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG5leHBvcnQgeyBTdHlsZVNoZWV0IH07XG4iLCJ2YXIgaXNCcm93c2VyID0gXCJvYmplY3RcIiAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiBnZXRSZWdpc3RlcmVkU3R5bGVzKHJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIGNsYXNzTmFtZXMpIHtcbiAgdmFyIHJhd0NsYXNzTmFtZSA9ICcnO1xuICBjbGFzc05hbWVzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgaWYgKHJlZ2lzdGVyZWRbY2xhc3NOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZWdpc3RlcmVkU3R5bGVzLnB1c2gocmVnaXN0ZXJlZFtjbGFzc05hbWVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmF3Q2xhc3NOYW1lICs9IGNsYXNzTmFtZSArIFwiIFwiO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByYXdDbGFzc05hbWU7XG59XG52YXIgaW5zZXJ0U3R5bGVzID0gZnVuY3Rpb24gaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBpc1N0cmluZ1RhZykge1xuICB2YXIgY2xhc3NOYW1lID0gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG5cbiAgaWYgKCAvLyB3ZSBvbmx5IG5lZWQgdG8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIHJlZ2lzdGVyZWQgY2FjaGUgaWYgdGhlXG4gIC8vIGNsYXNzIG5hbWUgY291bGQgYmUgdXNlZCBmdXJ0aGVyIGRvd25cbiAgLy8gdGhlIHRyZWUgYnV0IGlmIGl0J3MgYSBzdHJpbmcgdGFnLCB3ZSBrbm93IGl0IHdvbid0XG4gIC8vIHNvIHdlIGRvbid0IGhhdmUgdG8gYWRkIGl0IHRvIHJlZ2lzdGVyZWQgY2FjaGUuXG4gIC8vIHRoaXMgaW1wcm92ZXMgbWVtb3J5IHVzYWdlIHNpbmNlIHdlIGNhbiBhdm9pZCBzdG9yaW5nIHRoZSB3aG9sZSBzdHlsZSBzdHJpbmdcbiAgKGlzU3RyaW5nVGFnID09PSBmYWxzZSB8fCAvLyB3ZSBuZWVkIHRvIGFsd2F5cyBzdG9yZSBpdCBpZiB3ZSdyZSBpbiBjb21wYXQgbW9kZSBhbmRcbiAgLy8gaW4gbm9kZSBzaW5jZSBlbW90aW9uLXNlcnZlciByZWxpZXMgb24gd2hldGhlciBhIHN0eWxlIGlzIGluXG4gIC8vIHRoZSByZWdpc3RlcmVkIGNhY2hlIHRvIGtub3cgd2hldGhlciBhIHN0eWxlIGlzIGdsb2JhbCBvciBub3RcbiAgLy8gYWxzbywgbm90ZSB0aGF0IHRoaXMgY2hlY2sgd2lsbCBiZSBkZWFkIGNvZGUgZWxpbWluYXRlZCBpbiB0aGUgYnJvd3NlclxuICBpc0Jyb3dzZXIgPT09IGZhbHNlICYmIGNhY2hlLmNvbXBhdCAhPT0gdW5kZWZpbmVkKSAmJiBjYWNoZS5yZWdpc3RlcmVkW2NsYXNzTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIGNhY2hlLnJlZ2lzdGVyZWRbY2xhc3NOYW1lXSA9IHNlcmlhbGl6ZWQuc3R5bGVzO1xuICB9XG5cbiAgaWYgKGNhY2hlLmluc2VydGVkW3NlcmlhbGl6ZWQubmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBjdXJyZW50ID0gc2VyaWFsaXplZDtcblxuICAgIGRvIHtcbiAgICAgIHZhciBtYXliZVN0eWxlcyA9IGNhY2hlLmluc2VydChcIi5cIiArIGNsYXNzTmFtZSwgY3VycmVudCwgY2FjaGUuc2hlZXQsIHRydWUpO1xuXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH0gd2hpbGUgKGN1cnJlbnQgIT09IHVuZGVmaW5lZCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGdldFJlZ2lzdGVyZWRTdHlsZXMsIGluc2VydFN0eWxlcyB9O1xuIiwidmFyIHdlYWtNZW1vaXplID0gZnVuY3Rpb24gd2Vha01lbW9pemUoZnVuYykge1xuICAvLyAkRmxvd0ZpeE1lIGZsb3cgZG9lc24ndCBpbmNsdWRlIGFsbCBub24tcHJpbWl0aXZlIHR5cGVzIGFzIGFsbG93ZWQgZm9yIHdlYWttYXBzXG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlLmhhcyhhcmcpKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGFyZyk7XG4gICAgfVxuXG4gICAgdmFyIHJldCA9IGZ1bmMoYXJnKTtcbiAgICBjYWNoZS5zZXQoYXJnLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWFrTWVtb2l6ZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBidWlsZEZ1bGxQYXRoID0gcmVxdWlyZSgnLi4vY29yZS9idWlsZEZ1bGxQYXRoJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgPyB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoY29uZmlnLmF1dGgucGFzc3dvcmQpKSA6ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICB2YXIgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCc7XG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKHRpbWVvdXRFcnJvck1lc3NhZ2UsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXF1ZXN0RGF0YSkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgaWYgKGNvbmZpZy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdHMubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IHRoaXMuZGVmYXVsdHMubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1ldGhvZCA9ICdnZXQnO1xuICB9XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IChjb25maWcgfHwge30pLmRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIGJhc2VVUkwgd2l0aCB0aGUgcmVxdWVzdGVkVVJMLFxuICogb25seSB3aGVuIHRoZSByZXF1ZXN0ZWRVUkwgaXMgbm90IGFscmVhZHkgYW4gYWJzb2x1dGUgVVJMLlxuICogSWYgdGhlIHJlcXVlc3RVUkwgaXMgYWJzb2x1dGUsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWVzdGVkVVJMIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0ZWRVUkwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIGNvbWJpbmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBmdWxsIHBhdGhcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNcbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgdmFyIHZhbHVlRnJvbUNvbmZpZzJLZXlzID0gWyd1cmwnLCAnbWV0aG9kJywgJ2RhdGEnXTtcbiAgdmFyIG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzID0gWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknLCAncGFyYW1zJ107XG4gIHZhciBkZWZhdWx0VG9Db25maWcyS2V5cyA9IFtcbiAgICAnYmFzZVVSTCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxuICAgICd0aW1lb3V0JywgJ3RpbWVvdXRNZXNzYWdlJywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJywgJ2RlY29tcHJlc3MnLFxuICAgICdtYXhDb250ZW50TGVuZ3RoJywgJ21heEJvZHlMZW5ndGgnLCAnbWF4UmVkaXJlY3RzJywgJ3RyYW5zcG9ydCcsICdodHRwQWdlbnQnLFxuICAgICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJywgJ3NvY2tldFBhdGgnLCAncmVzcG9uc2VFbmNvZGluZydcbiAgXTtcbiAgdmFyIGRpcmVjdE1lcmdlS2V5cyA9IFsndmFsaWRhdGVTdGF0dXMnXTtcblxuICBmdW5jdGlvbiBnZXRNZXJnZWRWYWx1ZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHRhcmdldCkgJiYgdXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2UodGFyZ2V0LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoe30sIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBzb3VyY2Uuc2xpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfVxuXG4gIHV0aWxzLmZvckVhY2godmFsdWVGcm9tQ29uZmlnMktleXMsIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMltwcm9wXSk7XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzLCBtZXJnZURlZXBQcm9wZXJ0aWVzKTtcblxuICB1dGlscy5mb3JFYWNoKGRlZmF1bHRUb0NvbmZpZzJLZXlzLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChkaXJlY3RNZXJnZUtleXMsIGZ1bmN0aW9uIG1lcmdlKHByb3ApIHtcbiAgICBpZiAocHJvcCBpbiBjb25maWcyKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHByb3AgaW4gY29uZmlnMSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBheGlvc0tleXMgPSB2YWx1ZUZyb21Db25maWcyS2V5c1xuICAgIC5jb25jYXQobWVyZ2VEZWVwUHJvcGVydGllc0tleXMpXG4gICAgLmNvbmNhdChkZWZhdWx0VG9Db25maWcyS2V5cylcbiAgICAuY29uY2F0KGRpcmVjdE1lcmdlS2V5cyk7XG5cbiAgdmFyIG90aGVyS2V5cyA9IE9iamVjdFxuICAgIC5rZXlzKGNvbmZpZzEpXG4gICAgLmNvbmNhdChPYmplY3Qua2V5cyhjb25maWcyKSlcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIGZpbHRlckF4aW9zS2V5cyhrZXkpIHtcbiAgICAgIHJldHVybiBheGlvc0tleXMuaW5kZXhPZihrZXkpID09PSAtMTtcbiAgICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG90aGVyS2V5cywgbWVyZ2VEZWVwUHJvcGVydGllcyk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuICBtYXhCb2R5TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwpICYmIHZhbC5jb25zdHJ1Y3RvciAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsLmNvbnN0cnVjdG9yKVxuICAgICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWwpIHtcbiAgaWYgKHRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbCk7XG4gIHJldHVybiBwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIChuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTlMnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmIChpc1BsYWluT2JqZWN0KHJlc3VsdFtrZXldKSAmJiBpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsLnNsaWNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYnl0ZSBvcmRlciBtYXJrZXIuIFRoaXMgY2F0Y2hlcyBFRiBCQiBCRiAodGhlIFVURi04IEJPTSlcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCB3aXRoIEJPTVxuICogQHJldHVybiB7c3RyaW5nfSBjb250ZW50IHZhbHVlIHdpdGhvdXQgQk9NXG4gKi9cbmZ1bmN0aW9uIHN0cmlwQk9NKGNvbnRlbnQpIHtcbiAgaWYgKGNvbnRlbnQuY2hhckNvZGVBdCgwKSA9PT0gMHhGRUZGKSB7XG4gICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UoMSk7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdDogaXNQbGFpbk9iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltLFxuICBzdHJpcEJPTTogc3RyaXBCT01cbn07XG4iLCJmdW5jdGlvbiBhcmVJbnB1dHNFcXVhbChuZXdJbnB1dHMsIGxhc3RJbnB1dHMpIHtcbiAgICBpZiAobmV3SW5wdXRzLmxlbmd0aCAhPT0gbGFzdElucHV0cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0lucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobmV3SW5wdXRzW2ldICE9PSBsYXN0SW5wdXRzW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG1lbW9pemVPbmUocmVzdWx0Rm4sIGlzRXF1YWwpIHtcbiAgICBpZiAoaXNFcXVhbCA9PT0gdm9pZCAwKSB7IGlzRXF1YWwgPSBhcmVJbnB1dHNFcXVhbDsgfVxuICAgIHZhciBsYXN0VGhpcztcbiAgICB2YXIgbGFzdEFyZ3MgPSBbXTtcbiAgICB2YXIgbGFzdFJlc3VsdDtcbiAgICB2YXIgY2FsbGVkT25jZSA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIG1lbW9pemVkKCkge1xuICAgICAgICB2YXIgbmV3QXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgbmV3QXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxsZWRPbmNlICYmIGxhc3RUaGlzID09PSB0aGlzICYmIGlzRXF1YWwobmV3QXJncywgbGFzdEFyZ3MpKSB7XG4gICAgICAgICAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBsYXN0UmVzdWx0ID0gcmVzdWx0Rm4uYXBwbHkodGhpcywgbmV3QXJncyk7XG4gICAgICAgIGNhbGxlZE9uY2UgPSB0cnVlO1xuICAgICAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgICAgIGxhc3RBcmdzID0gbmV3QXJncztcbiAgICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgfVxuICAgIHJldHVybiBtZW1vaXplZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZU9uZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBzaXplclN0eWxlID0ge1xuXHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0dG9wOiAwLFxuXHRsZWZ0OiAwLFxuXHR2aXNpYmlsaXR5OiAnaGlkZGVuJyxcblx0aGVpZ2h0OiAwLFxuXHRvdmVyZmxvdzogJ3Njcm9sbCcsXG5cdHdoaXRlU3BhY2U6ICdwcmUnXG59O1xuXG52YXIgSU5QVVRfUFJPUFNfQkxBQ0tMSVNUID0gWydleHRyYVdpZHRoJywgJ2luamVjdFN0eWxlcycsICdpbnB1dENsYXNzTmFtZScsICdpbnB1dFJlZicsICdpbnB1dFN0eWxlJywgJ21pbldpZHRoJywgJ29uQXV0b3NpemUnLCAncGxhY2Vob2xkZXJJc01pbldpZHRoJ107XG5cbnZhciBjbGVhbklucHV0UHJvcHMgPSBmdW5jdGlvbiBjbGVhbklucHV0UHJvcHMoaW5wdXRQcm9wcykge1xuXHRJTlBVVF9QUk9QU19CTEFDS0xJU1QuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcblx0XHRyZXR1cm4gZGVsZXRlIGlucHV0UHJvcHNbZmllbGRdO1xuXHR9KTtcblx0cmV0dXJuIGlucHV0UHJvcHM7XG59O1xuXG52YXIgY29weVN0eWxlcyA9IGZ1bmN0aW9uIGNvcHlTdHlsZXMoc3R5bGVzLCBub2RlKSB7XG5cdG5vZGUuc3R5bGUuZm9udFNpemUgPSBzdHlsZXMuZm9udFNpemU7XG5cdG5vZGUuc3R5bGUuZm9udEZhbWlseSA9IHN0eWxlcy5mb250RmFtaWx5O1xuXHRub2RlLnN0eWxlLmZvbnRXZWlnaHQgPSBzdHlsZXMuZm9udFdlaWdodDtcblx0bm9kZS5zdHlsZS5mb250U3R5bGUgPSBzdHlsZXMuZm9udFN0eWxlO1xuXHRub2RlLnN0eWxlLmxldHRlclNwYWNpbmcgPSBzdHlsZXMubGV0dGVyU3BhY2luZztcblx0bm9kZS5zdHlsZS50ZXh0VHJhbnNmb3JtID0gc3R5bGVzLnRleHRUcmFuc2Zvcm07XG59O1xuXG52YXIgaXNJRSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IgPyAvTVNJRSB8VHJpZGVudFxcL3xFZGdlXFwvLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSA6IGZhbHNlO1xuXG52YXIgZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uIGdlbmVyYXRlSWQoKSB7XG5cdC8vIHdlIG9ubHkgbmVlZCBhbiBhdXRvLWdlbmVyYXRlZCBJRCBmb3Igc3R5bGVzaGVldCBpbmplY3Rpb24sIHdoaWNoIGlzIG9ubHlcblx0Ly8gdXNlZCBmb3IgSUUuIHNvIGlmIHRoZSBicm93c2VyIGlzIG5vdCBJRSwgdGhpcyBzaG91bGQgcmV0dXJuIHVuZGVmaW5lZC5cblx0cmV0dXJuIGlzSUUgPyAnXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgMTIpIDogdW5kZWZpbmVkO1xufTtcblxudmFyIEF1dG9zaXplSW5wdXQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoQXV0b3NpemVJbnB1dCwgX0NvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gQXV0b3NpemVJbnB1dChwcm9wcykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdXRvc2l6ZUlucHV0KTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBdXRvc2l6ZUlucHV0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXV0b3NpemVJbnB1dCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHRcdF90aGlzLmlucHV0UmVmID0gZnVuY3Rpb24gKGVsKSB7XG5cdFx0XHRfdGhpcy5pbnB1dCA9IGVsO1xuXHRcdFx0aWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5pbnB1dFJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRfdGhpcy5wcm9wcy5pbnB1dFJlZihlbCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdF90aGlzLnBsYWNlSG9sZGVyU2l6ZXJSZWYgPSBmdW5jdGlvbiAoZWwpIHtcblx0XHRcdF90aGlzLnBsYWNlSG9sZGVyU2l6ZXIgPSBlbDtcblx0XHR9O1xuXG5cdFx0X3RoaXMuc2l6ZXJSZWYgPSBmdW5jdGlvbiAoZWwpIHtcblx0XHRcdF90aGlzLnNpemVyID0gZWw7XG5cdFx0fTtcblxuXHRcdF90aGlzLnN0YXRlID0ge1xuXHRcdFx0aW5wdXRXaWR0aDogcHJvcHMubWluV2lkdGgsXG5cdFx0XHRpbnB1dElkOiBwcm9wcy5pZCB8fCBnZW5lcmF0ZUlkKClcblx0XHR9O1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhBdXRvc2l6ZUlucHV0LCBbe1xuXHRcdGtleTogJ2NvbXBvbmVudERpZE1vdW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0XHR0aGlzLm1vdW50ZWQgPSB0cnVlO1xuXHRcdFx0dGhpcy5jb3B5SW5wdXRTdHlsZXMoKTtcblx0XHRcdHRoaXMudXBkYXRlSW5wdXRXaWR0aCgpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ1VOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cdFx0XHR2YXIgaWQgPSBuZXh0UHJvcHMuaWQ7XG5cblx0XHRcdGlmIChpZCAhPT0gdGhpcy5wcm9wcy5pZCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgaW5wdXRJZDogaWQgfHwgZ2VuZXJhdGVJZCgpIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuXHRcdFx0aWYgKHByZXZTdGF0ZS5pbnB1dFdpZHRoICE9PSB0aGlzLnN0YXRlLmlucHV0V2lkdGgpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uQXV0b3NpemUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uQXV0b3NpemUodGhpcy5zdGF0ZS5pbnB1dFdpZHRoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy51cGRhdGVJbnB1dFdpZHRoKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRcdHRoaXMubW91bnRlZCA9IGZhbHNlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvcHlJbnB1dFN0eWxlcycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvcHlJbnB1dFN0eWxlcygpIHtcblx0XHRcdGlmICghdGhpcy5tb3VudGVkIHx8ICF3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgaW5wdXRTdHlsZXMgPSB0aGlzLmlucHV0ICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuaW5wdXQpO1xuXHRcdFx0aWYgKCFpbnB1dFN0eWxlcykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb3B5U3R5bGVzKGlucHV0U3R5bGVzLCB0aGlzLnNpemVyKTtcblx0XHRcdGlmICh0aGlzLnBsYWNlSG9sZGVyU2l6ZXIpIHtcblx0XHRcdFx0Y29weVN0eWxlcyhpbnB1dFN0eWxlcywgdGhpcy5wbGFjZUhvbGRlclNpemVyKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICd1cGRhdGVJbnB1dFdpZHRoJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdXBkYXRlSW5wdXRXaWR0aCgpIHtcblx0XHRcdGlmICghdGhpcy5tb3VudGVkIHx8ICF0aGlzLnNpemVyIHx8IHR5cGVvZiB0aGlzLnNpemVyLnNjcm9sbFdpZHRoID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgbmV3SW5wdXRXaWR0aCA9IHZvaWQgMDtcblx0XHRcdGlmICh0aGlzLnByb3BzLnBsYWNlaG9sZGVyICYmICghdGhpcy5wcm9wcy52YWx1ZSB8fCB0aGlzLnByb3BzLnZhbHVlICYmIHRoaXMucHJvcHMucGxhY2Vob2xkZXJJc01pbldpZHRoKSkge1xuXHRcdFx0XHRuZXdJbnB1dFdpZHRoID0gTWF0aC5tYXgodGhpcy5zaXplci5zY3JvbGxXaWR0aCwgdGhpcy5wbGFjZUhvbGRlclNpemVyLnNjcm9sbFdpZHRoKSArIDI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuZXdJbnB1dFdpZHRoID0gdGhpcy5zaXplci5zY3JvbGxXaWR0aCArIDI7XG5cdFx0XHR9XG5cdFx0XHQvLyBhZGQgZXh0cmFXaWR0aCB0byB0aGUgZGV0ZWN0ZWQgd2lkdGguIGZvciBudW1iZXIgdHlwZXMsIHRoaXMgZGVmYXVsdHMgdG8gMTYgdG8gYWxsb3cgZm9yIHRoZSBzdGVwcGVyIFVJXG5cdFx0XHR2YXIgZXh0cmFXaWR0aCA9IHRoaXMucHJvcHMudHlwZSA9PT0gJ251bWJlcicgJiYgdGhpcy5wcm9wcy5leHRyYVdpZHRoID09PSB1bmRlZmluZWQgPyAxNiA6IHBhcnNlSW50KHRoaXMucHJvcHMuZXh0cmFXaWR0aCkgfHwgMDtcblx0XHRcdG5ld0lucHV0V2lkdGggKz0gZXh0cmFXaWR0aDtcblx0XHRcdGlmIChuZXdJbnB1dFdpZHRoIDwgdGhpcy5wcm9wcy5taW5XaWR0aCkge1xuXHRcdFx0XHRuZXdJbnB1dFdpZHRoID0gdGhpcy5wcm9wcy5taW5XaWR0aDtcblx0XHRcdH1cblx0XHRcdGlmIChuZXdJbnB1dFdpZHRoICE9PSB0aGlzLnN0YXRlLmlucHV0V2lkdGgpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0aW5wdXRXaWR0aDogbmV3SW5wdXRXaWR0aFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdnZXRJbnB1dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldElucHV0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5wdXQ7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcblx0XHRcdHRoaXMuaW5wdXQuZm9jdXMoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdibHVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcblx0XHRcdHRoaXMuaW5wdXQuYmx1cigpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3NlbGVjdCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHNlbGVjdCgpIHtcblx0XHRcdHRoaXMuaW5wdXQuc2VsZWN0KCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyU3R5bGVzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyU3R5bGVzKCkge1xuXHRcdFx0Ly8gdGhpcyBtZXRob2QgaW5qZWN0cyBzdHlsZXMgdG8gaGlkZSBJRSdzIGNsZWFyIGluZGljYXRvciwgd2hpY2ggbWVzc2VzXG5cdFx0XHQvLyB3aXRoIGlucHV0IHNpemUgZGV0ZWN0aW9uLiB0aGUgc3R5bGVzaGVldCBpcyBvbmx5IGluamVjdGVkIHdoZW4gdGhlXG5cdFx0XHQvLyBicm93c2VyIGlzIElFLCBhbmQgY2FuIGFsc28gYmUgZGlzYWJsZWQgYnkgdGhlIGBpbmplY3RTdHlsZXNgIHByb3AuXG5cdFx0XHR2YXIgaW5qZWN0U3R5bGVzID0gdGhpcy5wcm9wcy5pbmplY3RTdHlsZXM7XG5cblx0XHRcdHJldHVybiBpc0lFICYmIGluamVjdFN0eWxlcyA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdzdHlsZScsIHsgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcblx0XHRcdFx0XHRfX2h0bWw6ICdpbnB1dCMnICsgdGhpcy5zdGF0ZS5pbnB1dElkICsgJzo6LW1zLWNsZWFyIHtkaXNwbGF5OiBub25lO30nXG5cdFx0XHRcdH0gfSkgOiBudWxsO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBzaXplclZhbHVlID0gW3RoaXMucHJvcHMuZGVmYXVsdFZhbHVlLCB0aGlzLnByb3BzLnZhbHVlLCAnJ10ucmVkdWNlKGZ1bmN0aW9uIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpIHtcblx0XHRcdFx0aWYgKHByZXZpb3VzVmFsdWUgIT09IG51bGwgJiYgcHJldmlvdXNWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHByZXZpb3VzVmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRWYWx1ZTtcblx0XHRcdH0pO1xuXG5cdFx0XHR2YXIgd3JhcHBlclN0eWxlID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMuc3R5bGUpO1xuXHRcdFx0aWYgKCF3cmFwcGVyU3R5bGUuZGlzcGxheSkgd3JhcHBlclN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcblxuXHRcdFx0dmFyIGlucHV0U3R5bGUgPSBfZXh0ZW5kcyh7XG5cdFx0XHRcdGJveFNpemluZzogJ2NvbnRlbnQtYm94Jyxcblx0XHRcdFx0d2lkdGg6IHRoaXMuc3RhdGUuaW5wdXRXaWR0aCArICdweCdcblx0XHRcdH0sIHRoaXMucHJvcHMuaW5wdXRTdHlsZSk7XG5cblx0XHRcdHZhciBpbnB1dFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHRoaXMucHJvcHMsIFtdKTtcblxuXHRcdFx0Y2xlYW5JbnB1dFByb3BzKGlucHV0UHJvcHMpO1xuXHRcdFx0aW5wdXRQcm9wcy5jbGFzc05hbWUgPSB0aGlzLnByb3BzLmlucHV0Q2xhc3NOYW1lO1xuXHRcdFx0aW5wdXRQcm9wcy5pZCA9IHRoaXMuc3RhdGUuaW5wdXRJZDtcblx0XHRcdGlucHV0UHJvcHMuc3R5bGUgPSBpbnB1dFN0eWxlO1xuXG5cdFx0XHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWUsIHN0eWxlOiB3cmFwcGVyU3R5bGUgfSxcblx0XHRcdFx0dGhpcy5yZW5kZXJTdHlsZXMoKSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgX2V4dGVuZHMoe30sIGlucHV0UHJvcHMsIHsgcmVmOiB0aGlzLmlucHV0UmVmIH0pKSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyByZWY6IHRoaXMuc2l6ZXJSZWYsIHN0eWxlOiBzaXplclN0eWxlIH0sXG5cdFx0XHRcdFx0c2l6ZXJWYWx1ZVxuXHRcdFx0XHQpLFxuXHRcdFx0XHR0aGlzLnByb3BzLnBsYWNlaG9sZGVyID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyByZWY6IHRoaXMucGxhY2VIb2xkZXJTaXplclJlZiwgc3R5bGU6IHNpemVyU3R5bGUgfSxcblx0XHRcdFx0XHR0aGlzLnByb3BzLnBsYWNlaG9sZGVyXG5cdFx0XHRcdCkgOiBudWxsXG5cdFx0XHQpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBBdXRvc2l6ZUlucHV0O1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuQXV0b3NpemVJbnB1dC5wcm9wVHlwZXMgPSB7XG5cdGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIGNsYXNzTmFtZSBmb3IgdGhlIG91dGVyIGVsZW1lbnRcblx0ZGVmYXVsdFZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSwgLy8gZGVmYXVsdCBmaWVsZCB2YWx1ZVxuXHRleHRyYVdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbLy8gYWRkaXRpb25hbCB3aWR0aCBmb3IgaW5wdXQgZWxlbWVudFxuXHRfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlciwgX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmddKSxcblx0aWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCAvLyBpZCB0byB1c2UgZm9yIHRoZSBpbnB1dCwgY2FuIGJlIHNldCBmb3IgY29uc2lzdGVudCBzbmFwc2hvdHNcblx0aW5qZWN0U3R5bGVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIGluamVjdCB0aGUgY3VzdG9tIHN0eWxlc2hlZXQgdG8gaGlkZSBjbGVhciBVSSwgZGVmYXVsdHMgdG8gdHJ1ZVxuXHRpbnB1dENsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIGNsYXNzTmFtZSBmb3IgdGhlIGlucHV0IGVsZW1lbnRcblx0aW5wdXRSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gcmVmIGNhbGxiYWNrIGZvciB0aGUgaW5wdXQgZWxlbWVudFxuXHRpbnB1dFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCwgLy8gY3NzIHN0eWxlcyBmb3IgdGhlIGlucHV0IGVsZW1lbnRcblx0bWluV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFsvLyBtaW5pbXVtIHdpZHRoIGZvciBpbnB1dCBlbGVtZW50XG5cdF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ10pLFxuXHRvbkF1dG9zaXplOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIG9uQXV0b3NpemUgaGFuZGxlcjogZnVuY3Rpb24obmV3V2lkdGgpIHt9XG5cdG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIG9uQ2hhbmdlIGhhbmRsZXI6IGZ1bmN0aW9uKGV2ZW50KSB7fVxuXHRwbGFjZWhvbGRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIHBsYWNlaG9sZGVyIHRleHRcblx0cGxhY2Vob2xkZXJJc01pbldpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIGRvbid0IGNvbGxhcHNlIHNpemUgdG8gbGVzcyB0aGFuIHRoZSBwbGFjZWhvbGRlclxuXHRzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsIC8vIGNzcyBzdHlsZXMgZm9yIHRoZSBvdXRlciBlbGVtZW50XG5cdHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSAvLyBmaWVsZCB2YWx1ZVxufTtcbkF1dG9zaXplSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuXHRtaW5XaWR0aDogMSxcblx0aW5qZWN0U3R5bGVzOiB0cnVlXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBdXRvc2l6ZUlucHV0OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tICdtZW1vaXplLW9uZSc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGkgYXMgaXNUb3VjaENhcGFibGUsIGQgYXMgaXNNb2JpbGVEZXZpY2UsIGUgYXMgY2xlYW5WYWx1ZSwgZiBhcyBzY3JvbGxJbnRvVmlldywgaCBhcyBjbGFzc05hbWVzLCBuIGFzIG5vb3AsIGogYXMgaXNEb2N1bWVudEVsZW1lbnQgfSBmcm9tICcuL3V0aWxzLTA2YjBkNWE0LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IGMgYXMgY2xlYXJJbmRpY2F0b3JDU1MsIGEgYXMgY29udGFpbmVyQ1NTLCBiIGFzIGNzcywgZCBhcyBkcm9wZG93bkluZGljYXRvckNTUywgZyBhcyBncm91cENTUywgZSBhcyBncm91cEhlYWRpbmdDU1MsIGkgYXMgaW5kaWNhdG9yc0NvbnRhaW5lckNTUywgZiBhcyBpbmRpY2F0b3JTZXBhcmF0b3JDU1MsIGggYXMgaW5wdXRDU1MsIGwgYXMgbG9hZGluZ0luZGljYXRvckNTUywgaiBhcyBsb2FkaW5nTWVzc2FnZUNTUywgbSBhcyBtZW51Q1NTLCBrIGFzIG1lbnVMaXN0Q1NTLCBuIGFzIG1lbnVQb3J0YWxDU1MsIG8gYXMgbXVsdGlWYWx1ZUNTUywgcCBhcyBtdWx0aVZhbHVlTGFiZWxDU1MsIHEgYXMgbXVsdGlWYWx1ZVJlbW92ZUNTUywgciBhcyBub09wdGlvbnNNZXNzYWdlQ1NTLCBzIGFzIG9wdGlvbkNTUywgdCBhcyBwbGFjZWhvbGRlckNTUywgdSBhcyBjc3MkMSwgdiBhcyB2YWx1ZUNvbnRhaW5lckNTUywgTSBhcyBNZW51UGxhY2VyLCB3IGFzIGRlZmF1bHRDb21wb25lbnRzLCB4IGFzIGV4cG9ydGVkRXF1YWwgfSBmcm9tICcuL2luZGV4LTQzMjJjMGVkLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCBfY3NzIGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5cbnZhciBkaWFjcml0aWNzID0gW3tcbiAgYmFzZTogJ0EnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNDFcXHUyNEI2XFx1RkYyMVxcdTAwQzBcXHUwMEMxXFx1MDBDMlxcdTFFQTZcXHUxRUE0XFx1MUVBQVxcdTFFQThcXHUwMEMzXFx1MDEwMFxcdTAxMDJcXHUxRUIwXFx1MUVBRVxcdTFFQjRcXHUxRUIyXFx1MDIyNlxcdTAxRTBcXHUwMEM0XFx1MDFERVxcdTFFQTJcXHUwMEM1XFx1MDFGQVxcdTAxQ0RcXHUwMjAwXFx1MDIwMlxcdTFFQTBcXHUxRUFDXFx1MUVCNlxcdTFFMDBcXHUwMTA0XFx1MDIzQVxcdTJDNkZdL2dcbn0sIHtcbiAgYmFzZTogJ0FBJyxcbiAgbGV0dGVyczogL1tcXHVBNzMyXS9nXG59LCB7XG4gIGJhc2U6ICdBRScsXG4gIGxldHRlcnM6IC9bXFx1MDBDNlxcdTAxRkNcXHUwMUUyXS9nXG59LCB7XG4gIGJhc2U6ICdBTycsXG4gIGxldHRlcnM6IC9bXFx1QTczNF0vZ1xufSwge1xuICBiYXNlOiAnQVUnLFxuICBsZXR0ZXJzOiAvW1xcdUE3MzZdL2dcbn0sIHtcbiAgYmFzZTogJ0FWJyxcbiAgbGV0dGVyczogL1tcXHVBNzM4XFx1QTczQV0vZ1xufSwge1xuICBiYXNlOiAnQVknLFxuICBsZXR0ZXJzOiAvW1xcdUE3M0NdL2dcbn0sIHtcbiAgYmFzZTogJ0InLFxuICBsZXR0ZXJzOiAvW1xcdTAwNDJcXHUyNEI3XFx1RkYyMlxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTAyNDNcXHUwMTgyXFx1MDE4MV0vZ1xufSwge1xuICBiYXNlOiAnQycsXG4gIGxldHRlcnM6IC9bXFx1MDA0M1xcdTI0QjhcXHVGRjIzXFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xcdTAwQzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXS9nXG59LCB7XG4gIGJhc2U6ICdEJyxcbiAgbGV0dGVyczogL1tcXHUwMDQ0XFx1MjRCOVxcdUZGMjRcXHUxRTBBXFx1MDEwRVxcdTFFMENcXHUxRTEwXFx1MUUxMlxcdTFFMEVcXHUwMTEwXFx1MDE4QlxcdTAxOEFcXHUwMTg5XFx1QTc3OV0vZ1xufSwge1xuICBiYXNlOiAnRFonLFxuICBsZXR0ZXJzOiAvW1xcdTAxRjFcXHUwMUM0XS9nXG59LCB7XG4gIGJhc2U6ICdEeicsXG4gIGxldHRlcnM6IC9bXFx1MDFGMlxcdTAxQzVdL2dcbn0sIHtcbiAgYmFzZTogJ0UnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNDVcXHUyNEJBXFx1RkYyNVxcdTAwQzhcXHUwMEM5XFx1MDBDQVxcdTFFQzBcXHUxRUJFXFx1MUVDNFxcdTFFQzJcXHUxRUJDXFx1MDExMlxcdTFFMTRcXHUxRTE2XFx1MDExNFxcdTAxMTZcXHUwMENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RV0vZ1xufSwge1xuICBiYXNlOiAnRicsXG4gIGxldHRlcnM6IC9bXFx1MDA0NlxcdTI0QkJcXHVGRjI2XFx1MUUxRVxcdTAxOTFcXHVBNzdCXS9nXG59LCB7XG4gIGJhc2U6ICdHJyxcbiAgbGV0dGVyczogL1tcXHUwMDQ3XFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VdL2dcbn0sIHtcbiAgYmFzZTogJ0gnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNDhcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXS9nXG59LCB7XG4gIGJhc2U6ICdJJyxcbiAgbGV0dGVyczogL1tcXHUwMDQ5XFx1MjRCRVxcdUZGMjlcXHUwMENDXFx1MDBDRFxcdTAwQ0VcXHUwMTI4XFx1MDEyQVxcdTAxMkNcXHUwMTMwXFx1MDBDRlxcdTFFMkVcXHUxRUM4XFx1MDFDRlxcdTAyMDhcXHUwMjBBXFx1MUVDQVxcdTAxMkVcXHUxRTJDXFx1MDE5N10vZ1xufSwge1xuICBiYXNlOiAnSicsXG4gIGxldHRlcnM6IC9bXFx1MDA0QVxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDhdL2dcbn0sIHtcbiAgYmFzZTogJ0snLFxuICBsZXR0ZXJzOiAvW1xcdTAwNEJcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyXS9nXG59LCB7XG4gIGJhc2U6ICdMJyxcbiAgbGV0dGVyczogL1tcXHUwMDRDXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODBdL2dcbn0sIHtcbiAgYmFzZTogJ0xKJyxcbiAgbGV0dGVyczogL1tcXHUwMUM3XS9nXG59LCB7XG4gIGJhc2U6ICdMaicsXG4gIGxldHRlcnM6IC9bXFx1MDFDOF0vZ1xufSwge1xuICBiYXNlOiAnTScsXG4gIGxldHRlcnM6IC9bXFx1MDA0RFxcdTI0QzJcXHVGRjJEXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MkM2RVxcdTAxOUNdL2dcbn0sIHtcbiAgYmFzZTogJ04nLFxuICBsZXR0ZXJzOiAvW1xcdTAwNEVcXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx1MDBEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRdL2dcbn0sIHtcbiAgYmFzZTogJ05KJyxcbiAgbGV0dGVyczogL1tcXHUwMUNBXS9nXG59LCB7XG4gIGJhc2U6ICdOaicsXG4gIGxldHRlcnM6IC9bXFx1MDFDQl0vZ1xufSwge1xuICBiYXNlOiAnTycsXG4gIGxldHRlcnM6IC9bXFx1MDA0RlxcdTI0QzRcXHVGRjJGXFx1MDBEMlxcdTAwRDNcXHUwMEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxcdTAwRDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHUwMEQ2XFx1MDIyQVxcdTFFQ0VcXHUwMTUwXFx1MDFEMVxcdTAyMENcXHUwMjBFXFx1MDFBMFxcdTFFRENcXHUxRURBXFx1MUVFMFxcdTFFREVcXHUxRUUyXFx1MUVDQ1xcdTFFRDhcXHUwMUVBXFx1MDFFQ1xcdTAwRDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q10vZ1xufSwge1xuICBiYXNlOiAnT0knLFxuICBsZXR0ZXJzOiAvW1xcdTAxQTJdL2dcbn0sIHtcbiAgYmFzZTogJ09PJyxcbiAgbGV0dGVyczogL1tcXHVBNzRFXS9nXG59LCB7XG4gIGJhc2U6ICdPVScsXG4gIGxldHRlcnM6IC9bXFx1MDIyMl0vZ1xufSwge1xuICBiYXNlOiAnUCcsXG4gIGxldHRlcnM6IC9bXFx1MDA1MFxcdTI0QzVcXHVGRjMwXFx1MUU1NFxcdTFFNTZcXHUwMUE0XFx1MkM2M1xcdUE3NTBcXHVBNzUyXFx1QTc1NF0vZ1xufSwge1xuICBiYXNlOiAnUScsXG4gIGxldHRlcnM6IC9bXFx1MDA1MVxcdTI0QzZcXHVGRjMxXFx1QTc1NlxcdUE3NThcXHUwMjRBXS9nXG59LCB7XG4gIGJhc2U6ICdSJyxcbiAgbGV0dGVyczogL1tcXHUwMDUyXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4Ml0vZ1xufSwge1xuICBiYXNlOiAnUycsXG4gIGxldHRlcnM6IC9bXFx1MDA1M1xcdTI0QzhcXHVGRjMzXFx1MUU5RVxcdTAxNUFcXHUxRTY0XFx1MDE1Q1xcdTFFNjBcXHUwMTYwXFx1MUU2NlxcdTFFNjJcXHUxRTY4XFx1MDIxOFxcdTAxNUVcXHUyQzdFXFx1QTdBOFxcdUE3ODRdL2dcbn0sIHtcbiAgYmFzZTogJ1QnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNTRcXHUyNEM5XFx1RkYzNFxcdTFFNkFcXHUwMTY0XFx1MUU2Q1xcdTAyMUFcXHUwMTYyXFx1MUU3MFxcdTFFNkVcXHUwMTY2XFx1MDFBQ1xcdTAxQUVcXHUwMjNFXFx1QTc4Nl0vZ1xufSwge1xuICBiYXNlOiAnVFonLFxuICBsZXR0ZXJzOiAvW1xcdUE3MjhdL2dcbn0sIHtcbiAgYmFzZTogJ1UnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNTVcXHUyNENBXFx1RkYzNVxcdTAwRDlcXHUwMERBXFx1MDBEQlxcdTAxNjhcXHUxRTc4XFx1MDE2QVxcdTFFN0FcXHUwMTZDXFx1MDBEQ1xcdTAxREJcXHUwMUQ3XFx1MDFENVxcdTAxRDlcXHUxRUU2XFx1MDE2RVxcdTAxNzBcXHUwMUQzXFx1MDIxNFxcdTAyMTZcXHUwMUFGXFx1MUVFQVxcdTFFRThcXHUxRUVFXFx1MUVFQ1xcdTFFRjBcXHUxRUU0XFx1MUU3MlxcdTAxNzJcXHUxRTc2XFx1MUU3NFxcdTAyNDRdL2dcbn0sIHtcbiAgYmFzZTogJ1YnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNTZcXHUyNENCXFx1RkYzNlxcdTFFN0NcXHUxRTdFXFx1MDFCMlxcdUE3NUVcXHUwMjQ1XS9nXG59LCB7XG4gIGJhc2U6ICdWWScsXG4gIGxldHRlcnM6IC9bXFx1QTc2MF0vZ1xufSwge1xuICBiYXNlOiAnVycsXG4gIGxldHRlcnM6IC9bXFx1MDA1N1xcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3Ml0vZ1xufSwge1xuICBiYXNlOiAnWCcsXG4gIGxldHRlcnM6IC9bXFx1MDA1OFxcdTI0Q0RcXHVGRjM4XFx1MUU4QVxcdTFFOENdL2dcbn0sIHtcbiAgYmFzZTogJ1knLFxuICBsZXR0ZXJzOiAvW1xcdTAwNTlcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHUwMEREXFx1MDE3NlxcdTFFRjhcXHUwMjMyXFx1MUU4RVxcdTAxNzhcXHUxRUY2XFx1MUVGNFxcdTAxQjNcXHUwMjRFXFx1MUVGRV0vZ1xufSwge1xuICBiYXNlOiAnWicsXG4gIGxldHRlcnM6IC9bXFx1MDA1QVxcdTI0Q0ZcXHVGRjNBXFx1MDE3OVxcdTFFOTBcXHUwMTdCXFx1MDE3RFxcdTFFOTJcXHUxRTk0XFx1MDFCNVxcdTAyMjRcXHUyQzdGXFx1MkM2QlxcdUE3NjJdL2dcbn0sIHtcbiAgYmFzZTogJ2EnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNjFcXHUyNEQwXFx1RkY0MVxcdTFFOUFcXHUwMEUwXFx1MDBFMVxcdTAwRTJcXHUxRUE3XFx1MUVBNVxcdTFFQUJcXHUxRUE5XFx1MDBFM1xcdTAxMDFcXHUwMTAzXFx1MUVCMVxcdTFFQUZcXHUxRUI1XFx1MUVCM1xcdTAyMjdcXHUwMUUxXFx1MDBFNFxcdTAxREZcXHUxRUEzXFx1MDBFNVxcdTAxRkJcXHUwMUNFXFx1MDIwMVxcdTAyMDNcXHUxRUExXFx1MUVBRFxcdTFFQjdcXHUxRTAxXFx1MDEwNVxcdTJDNjVcXHUwMjUwXS9nXG59LCB7XG4gIGJhc2U6ICdhYScsXG4gIGxldHRlcnM6IC9bXFx1QTczM10vZ1xufSwge1xuICBiYXNlOiAnYWUnLFxuICBsZXR0ZXJzOiAvW1xcdTAwRTZcXHUwMUZEXFx1MDFFM10vZ1xufSwge1xuICBiYXNlOiAnYW8nLFxuICBsZXR0ZXJzOiAvW1xcdUE3MzVdL2dcbn0sIHtcbiAgYmFzZTogJ2F1JyxcbiAgbGV0dGVyczogL1tcXHVBNzM3XS9nXG59LCB7XG4gIGJhc2U6ICdhdicsXG4gIGxldHRlcnM6IC9bXFx1QTczOVxcdUE3M0JdL2dcbn0sIHtcbiAgYmFzZTogJ2F5JyxcbiAgbGV0dGVyczogL1tcXHVBNzNEXS9nXG59LCB7XG4gIGJhc2U6ICdiJyxcbiAgbGV0dGVyczogL1tcXHUwMDYyXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNdL2dcbn0sIHtcbiAgYmFzZTogJ2MnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNjNcXHUyNEQyXFx1RkY0M1xcdTAxMDdcXHUwMTA5XFx1MDEwQlxcdTAxMERcXHUwMEU3XFx1MUUwOVxcdTAxODhcXHUwMjNDXFx1QTczRlxcdTIxODRdL2dcbn0sIHtcbiAgYmFzZTogJ2QnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNjRcXHUyNEQzXFx1RkY0NFxcdTFFMEJcXHUwMTBGXFx1MUUwRFxcdTFFMTFcXHUxRTEzXFx1MUUwRlxcdTAxMTFcXHUwMThDXFx1MDI1NlxcdTAyNTdcXHVBNzdBXS9nXG59LCB7XG4gIGJhc2U6ICdkeicsXG4gIGxldHRlcnM6IC9bXFx1MDFGM1xcdTAxQzZdL2dcbn0sIHtcbiAgYmFzZTogJ2UnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNjVcXHUyNEQ0XFx1RkY0NVxcdTAwRThcXHUwMEU5XFx1MDBFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHUwMEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxRERdL2dcbn0sIHtcbiAgYmFzZTogJ2YnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNjZcXHUyNEQ1XFx1RkY0NlxcdTFFMUZcXHUwMTkyXFx1QTc3Q10vZ1xufSwge1xuICBiYXNlOiAnZycsXG4gIGxldHRlcnM6IC9bXFx1MDA2N1xcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdTFENzlcXHVBNzdGXS9nXG59LCB7XG4gIGJhc2U6ICdoJyxcbiAgbGV0dGVyczogL1tcXHUwMDY4XFx1MjREN1xcdUZGNDhcXHUwMTI1XFx1MUUyM1xcdTFFMjdcXHUwMjFGXFx1MUUyNVxcdTFFMjlcXHUxRTJCXFx1MUU5NlxcdTAxMjdcXHUyQzY4XFx1MkM3NlxcdTAyNjVdL2dcbn0sIHtcbiAgYmFzZTogJ2h2JyxcbiAgbGV0dGVyczogL1tcXHUwMTk1XS9nXG59LCB7XG4gIGJhc2U6ICdpJyxcbiAgbGV0dGVyczogL1tcXHUwMDY5XFx1MjREOFxcdUZGNDlcXHUwMEVDXFx1MDBFRFxcdTAwRUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHUwMEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMV0vZ1xufSwge1xuICBiYXNlOiAnaicsXG4gIGxldHRlcnM6IC9bXFx1MDA2QVxcdTI0RDlcXHVGRjRBXFx1MDEzNVxcdTAxRjBcXHUwMjQ5XS9nXG59LCB7XG4gIGJhc2U6ICdrJyxcbiAgbGV0dGVyczogL1tcXHUwMDZCXFx1MjREQVxcdUZGNEJcXHUxRTMxXFx1MDFFOVxcdTFFMzNcXHUwMTM3XFx1MUUzNVxcdTAxOTlcXHUyQzZBXFx1QTc0MVxcdUE3NDNcXHVBNzQ1XFx1QTdBM10vZ1xufSwge1xuICBiYXNlOiAnbCcsXG4gIGxldHRlcnM6IC9bXFx1MDA2Q1xcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N10vZ1xufSwge1xuICBiYXNlOiAnbGonLFxuICBsZXR0ZXJzOiAvW1xcdTAxQzldL2dcbn0sIHtcbiAgYmFzZTogJ20nLFxuICBsZXR0ZXJzOiAvW1xcdTAwNkRcXHUyNERDXFx1RkY0RFxcdTFFM0ZcXHUxRTQxXFx1MUU0M1xcdTAyNzFcXHUwMjZGXS9nXG59LCB7XG4gIGJhc2U6ICduJyxcbiAgbGV0dGVyczogL1tcXHUwMDZFXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxcdTAwRjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNV0vZ1xufSwge1xuICBiYXNlOiAnbmonLFxuICBsZXR0ZXJzOiAvW1xcdTAxQ0NdL2dcbn0sIHtcbiAgYmFzZTogJ28nLFxuICBsZXR0ZXJzOiAvW1xcdTAwNkZcXHUyNERFXFx1RkY0RlxcdTAwRjJcXHUwMEYzXFx1MDBGNFxcdTFFRDNcXHUxRUQxXFx1MUVEN1xcdTFFRDVcXHUwMEY1XFx1MUU0RFxcdTAyMkRcXHUxRTRGXFx1MDE0RFxcdTFFNTFcXHUxRTUzXFx1MDE0RlxcdTAyMkZcXHUwMjMxXFx1MDBGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHUwMEY4XFx1MDFGRlxcdTAyNTRcXHVBNzRCXFx1QTc0RFxcdTAyNzVdL2dcbn0sIHtcbiAgYmFzZTogJ29pJyxcbiAgbGV0dGVyczogL1tcXHUwMUEzXS9nXG59LCB7XG4gIGJhc2U6ICdvdScsXG4gIGxldHRlcnM6IC9bXFx1MDIyM10vZ1xufSwge1xuICBiYXNlOiAnb28nLFxuICBsZXR0ZXJzOiAvW1xcdUE3NEZdL2dcbn0sIHtcbiAgYmFzZTogJ3AnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNzBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVdL2dcbn0sIHtcbiAgYmFzZTogJ3EnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNzFcXHUyNEUwXFx1RkY1MVxcdTAyNEJcXHVBNzU3XFx1QTc1OV0vZ1xufSwge1xuICBiYXNlOiAncicsXG4gIGxldHRlcnM6IC9bXFx1MDA3MlxcdTI0RTFcXHVGRjUyXFx1MDE1NVxcdTFFNTlcXHUwMTU5XFx1MDIxMVxcdTAyMTNcXHUxRTVCXFx1MUU1RFxcdTAxNTdcXHUxRTVGXFx1MDI0RFxcdTAyN0RcXHVBNzVCXFx1QTdBN1xcdUE3ODNdL2dcbn0sIHtcbiAgYmFzZTogJ3MnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNzNcXHUyNEUyXFx1RkY1M1xcdTAwREZcXHUwMTVCXFx1MUU2NVxcdTAxNURcXHUxRTYxXFx1MDE2MVxcdTFFNjdcXHUxRTYzXFx1MUU2OVxcdTAyMTlcXHUwMTVGXFx1MDIzRlxcdUE3QTlcXHVBNzg1XFx1MUU5Ql0vZ1xufSwge1xuICBiYXNlOiAndCcsXG4gIGxldHRlcnM6IC9bXFx1MDA3NFxcdTI0RTNcXHVGRjU0XFx1MUU2QlxcdTFFOTdcXHUwMTY1XFx1MUU2RFxcdTAyMUJcXHUwMTYzXFx1MUU3MVxcdTFFNkZcXHUwMTY3XFx1MDFBRFxcdTAyODhcXHUyQzY2XFx1QTc4N10vZ1xufSwge1xuICBiYXNlOiAndHonLFxuICBsZXR0ZXJzOiAvW1xcdUE3MjldL2dcbn0sIHtcbiAgYmFzZTogJ3UnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNzVcXHUyNEU0XFx1RkY1NVxcdTAwRjlcXHUwMEZBXFx1MDBGQlxcdTAxNjlcXHUxRTc5XFx1MDE2QlxcdTFFN0JcXHUwMTZEXFx1MDBGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODldL2dcbn0sIHtcbiAgYmFzZTogJ3YnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNzZcXHUyNEU1XFx1RkY1NlxcdTFFN0RcXHUxRTdGXFx1MDI4QlxcdUE3NUZcXHUwMjhDXS9nXG59LCB7XG4gIGJhc2U6ICd2eScsXG4gIGxldHRlcnM6IC9bXFx1QTc2MV0vZ1xufSwge1xuICBiYXNlOiAndycsXG4gIGxldHRlcnM6IC9bXFx1MDA3N1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNdL2dcbn0sIHtcbiAgYmFzZTogJ3gnLFxuICBsZXR0ZXJzOiAvW1xcdTAwNzhcXHUyNEU3XFx1RkY1OFxcdTFFOEJcXHUxRThEXS9nXG59LCB7XG4gIGJhc2U6ICd5JyxcbiAgbGV0dGVyczogL1tcXHUwMDc5XFx1MjRFOFxcdUZGNTlcXHUxRUYzXFx1MDBGRFxcdTAxNzdcXHUxRUY5XFx1MDIzM1xcdTFFOEZcXHUwMEZGXFx1MUVGN1xcdTFFOTlcXHUxRUY1XFx1MDFCNFxcdTAyNEZcXHUxRUZGXS9nXG59LCB7XG4gIGJhc2U6ICd6JyxcbiAgbGV0dGVyczogL1tcXHUwMDdBXFx1MjRFOVxcdUZGNUFcXHUwMTdBXFx1MUU5MVxcdTAxN0NcXHUwMTdFXFx1MUU5M1xcdTFFOTVcXHUwMUI2XFx1MDIyNVxcdTAyNDBcXHUyQzZDXFx1QTc2M10vZ1xufV07XG52YXIgc3RyaXBEaWFjcml0aWNzID0gZnVuY3Rpb24gc3RyaXBEaWFjcml0aWNzKHN0cikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGRpYWNyaXRpY3MubGVuZ3RoOyBpKyspIHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZShkaWFjcml0aWNzW2ldLmxldHRlcnMsIGRpYWNyaXRpY3NbaV0uYmFzZSk7XG4gIH1cblxuICByZXR1cm4gc3RyO1xufTtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIHRyaW1TdHJpbmcgPSBmdW5jdGlvbiB0cmltU3RyaW5nKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn07XG5cbnZhciBkZWZhdWx0U3RyaW5naWZ5ID0gZnVuY3Rpb24gZGVmYXVsdFN0cmluZ2lmeShvcHRpb24pIHtcbiAgcmV0dXJuIG9wdGlvbi5sYWJlbCArIFwiIFwiICsgb3B0aW9uLnZhbHVlO1xufTtcblxudmFyIGNyZWF0ZUZpbHRlciA9IGZ1bmN0aW9uIGNyZWF0ZUZpbHRlcihjb25maWcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvcHRpb24sIHJhd0lucHV0KSB7XG4gICAgdmFyIF9pZ25vcmVDYXNlJGlnbm9yZUFjYyA9IF9leHRlbmRzKHtcbiAgICAgIGlnbm9yZUNhc2U6IHRydWUsXG4gICAgICBpZ25vcmVBY2NlbnRzOiB0cnVlLFxuICAgICAgc3RyaW5naWZ5OiBkZWZhdWx0U3RyaW5naWZ5LFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICAgIG1hdGNoRnJvbTogJ2FueSdcbiAgICB9LCBjb25maWcpLFxuICAgICAgICBpZ25vcmVDYXNlID0gX2lnbm9yZUNhc2UkaWdub3JlQWNjLmlnbm9yZUNhc2UsXG4gICAgICAgIGlnbm9yZUFjY2VudHMgPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2MuaWdub3JlQWNjZW50cyxcbiAgICAgICAgc3RyaW5naWZ5ID0gX2lnbm9yZUNhc2UkaWdub3JlQWNjLnN0cmluZ2lmeSxcbiAgICAgICAgdHJpbSA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy50cmltLFxuICAgICAgICBtYXRjaEZyb20gPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2MubWF0Y2hGcm9tO1xuXG4gICAgdmFyIGlucHV0ID0gdHJpbSA/IHRyaW1TdHJpbmcocmF3SW5wdXQpIDogcmF3SW5wdXQ7XG4gICAgdmFyIGNhbmRpZGF0ZSA9IHRyaW0gPyB0cmltU3RyaW5nKHN0cmluZ2lmeShvcHRpb24pKSA6IHN0cmluZ2lmeShvcHRpb24pO1xuXG4gICAgaWYgKGlnbm9yZUNhc2UpIHtcbiAgICAgIGlucHV0ID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmIChpZ25vcmVBY2NlbnRzKSB7XG4gICAgICBpbnB1dCA9IHN0cmlwRGlhY3JpdGljcyhpbnB1dCk7XG4gICAgICBjYW5kaWRhdGUgPSBzdHJpcERpYWNyaXRpY3MoY2FuZGlkYXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hGcm9tID09PSAnc3RhcnQnID8gY2FuZGlkYXRlLnN1YnN0cigwLCBpbnB1dC5sZW5ndGgpID09PSBpbnB1dCA6IGNhbmRpZGF0ZS5pbmRleE9mKGlucHV0KSA+IC0xO1xuICB9O1xufTtcblxuZnVuY3Rpb24gX2V4dGVuZHMkMSgpIHsgX2V4dGVuZHMkMSA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcyQxLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIF9yZWYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIG5hbWU6IFwiMWxhYW8yMS1hMTF5VGV4dFwiLFxuICBzdHlsZXM6IFwibGFiZWw6YTExeVRleHQ7ei1pbmRleDo5OTk5O2JvcmRlcjowO2NsaXA6cmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO2hlaWdodDoxcHg7d2lkdGg6MXB4O3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjA7d2hpdGUtc3BhY2U6bm93cmFwO1wiXG59IDoge1xuICBuYW1lOiBcIjFsYWFvMjEtYTExeVRleHRcIixcbiAgc3R5bGVzOiBcImxhYmVsOmExMXlUZXh0O3otaW5kZXg6OTk5OTtib3JkZXI6MDtjbGlwOnJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtoZWlnaHQ6MXB4O3dpZHRoOjFweDtwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3doaXRlLXNwYWNlOm5vd3JhcDtcIixcbiAgbWFwOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrRXhNWGxVWlhoMExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVkZOSWl3aVptbHNaU0k2SWtFeE1YbFVaWGgwTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeThnUUdac2IzZGNiaThxS2lCQWFuTjRJR3B6ZUNBcUwxeHVhVzF3YjNKMElIc2dkSGx3WlNCRmJHVnRaVzUwUTI5dVptbG5JSDBnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIc2dhbk40SUgwZ1puSnZiU0FuUUdWdGIzUnBiMjR2WTI5eVpTYzdYRzVjYmk4dklFRnpjMmx6ZEdsMlpTQjBaWGgwSUhSdklHUmxjMk55YVdKbElIWnBjM1ZoYkNCbGJHVnRaVzUwY3k0Z1NHbGtaR1Z1SUdadmNpQnphV2RvZEdWa0lIVnpaWEp6TGx4dVkyOXVjM1FnUVRFeGVWUmxlSFFnUFNBb2NISnZjSE02SUVWc1pXMWxiblJEYjI1bWFXYzhKM053WVc0blBpa2dQVDRnS0Z4dUlDQWdJRHh6Y0dGdVhHNGdJQ0FnSUNCamMzTTllM3RjYmlBZ0lDQWdJQ0FnYkdGaVpXdzZJQ2RoTVRGNVZHVjRkQ2NzWEc0Z0lDQWdJQ0FnSUhwSmJtUmxlRG9nT1RrNU9TeGNiaUFnSUNBZ0lDQWdZbTl5WkdWeU9pQXdMRnh1SUNBZ0lDQWdJQ0JqYkdsd09pQW5jbVZqZENneGNIZ3NJREZ3ZUN3Z01YQjRMQ0F4Y0hncEp5eGNiaUFnSUNBZ0lDQWdhR1ZwWjJoME9pQXhMRnh1SUNBZ0lDQWdJQ0IzYVdSMGFEb2dNU3hjYmlBZ0lDQWdJQ0FnY0c5emFYUnBiMjQ2SUNkaFluTnZiSFYwWlNjc1hHNGdJQ0FnSUNBZ0lHOTJaWEptYkc5M09pQW5hR2xrWkdWdUp5eGNiaUFnSUNBZ0lDQWdjR0ZrWkdsdVp6b2dNQ3hjYmlBZ0lDQWdJQ0FnZDJocGRHVlRjR0ZqWlRvZ0oyNXZkM0poY0Njc1hHNGdJQ0FnSUNCOWZWeHVJQ0FnSUNBZ2V5NHVMbkJ5YjNCemZWeHVJQ0FnSUM4K1hHNHBPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JCTVRGNVZHVjRkRHRjYmlKZGZRPT0gKi9cIlxufTtcblxudmFyIEExMXlUZXh0ID0gZnVuY3Rpb24gQTExeVRleHQocHJvcHMpIHtcbiAgcmV0dXJuIGpzeChcInNwYW5cIiwgX2V4dGVuZHMkMSh7XG4gICAgY3NzOiBfcmVmXG4gIH0sIHByb3BzKSk7XG59O1xuXG5mdW5jdGlvbiBfZXh0ZW5kcyQyKCkgeyBfZXh0ZW5kcyQyID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzJDIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5mdW5jdGlvbiBEdW1teUlucHV0KF9yZWYpIHtcbiAgdmFyIGluUHJvcCA9IF9yZWYuaW4sXG4gICAgICBvdXQgPSBfcmVmLm91dCxcbiAgICAgIG9uRXhpdGVkID0gX3JlZi5vbkV4aXRlZCxcbiAgICAgIGFwcGVhciA9IF9yZWYuYXBwZWFyLFxuICAgICAgZW50ZXIgPSBfcmVmLmVudGVyLFxuICAgICAgZXhpdCA9IF9yZWYuZXhpdCxcbiAgICAgIGlubmVyUmVmID0gX3JlZi5pbm5lclJlZixcbiAgICAgIGVtb3Rpb24gPSBfcmVmLmVtb3Rpb24sXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImluXCIsIFwib3V0XCIsIFwib25FeGl0ZWRcIiwgXCJhcHBlYXJcIiwgXCJlbnRlclwiLCBcImV4aXRcIiwgXCJpbm5lclJlZlwiLCBcImVtb3Rpb25cIl0pO1xuXG4gIHJldHVybiBqc3goXCJpbnB1dFwiLCBfZXh0ZW5kcyQyKHtcbiAgICByZWY6IGlubmVyUmVmXG4gIH0sIHByb3BzLCB7XG4gICAgY3NzOlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfY3NzKHtcbiAgICAgIGxhYmVsOiAnZHVtbXlJbnB1dCcsXG4gICAgICAvLyBnZXQgcmlkIG9mIGFueSBkZWZhdWx0IHN0eWxlc1xuICAgICAgYmFja2dyb3VuZDogMCxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICBvdXRsaW5lOiAwLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICB3aWR0aDogMSxcbiAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gZGVza3RvcFxuICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICBsZWZ0OiAtMTAwLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknXG4gICAgfSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gXCJcIiA6IFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtSMWJXMTVTVzV3ZFhRdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJiVUpOSWl3aVptbHNaU0k2SWtSMWJXMTVTVzV3ZFhRdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2THlCQVpteHZkMXh1THlvcUlFQnFjM2dnYW5ONElDb3ZYRzVwYlhCdmNuUWdleUJxYzNnZ2ZTQm1jbTl0SUNkQVpXMXZkR2x2Ymk5amIzSmxKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnUkhWdGJYbEpibkIxZENoN1hHNGdJR2x1T2lCcGJsQnliM0FzWEc0Z0lHOTFkQ3hjYmlBZ2IyNUZlR2wwWldRc1hHNGdJR0Z3Y0dWaGNpeGNiaUFnWlc1MFpYSXNYRzRnSUdWNGFYUXNYRzRnSUdsdWJtVnlVbVZtTEZ4dUlDQmxiVzkwYVc5dUxGeHVJQ0F1TGk1d2NtOXdjMXh1ZlRvZ1lXNTVLU0I3WEc0Z0lISmxkSFZ5YmlBb1hHNGdJQ0FnUEdsdWNIVjBYRzRnSUNBZ0lDQnlaV1k5ZTJsdWJtVnlVbVZtZlZ4dUlDQWdJQ0FnZXk0dUxuQnliM0J6ZlZ4dUlDQWdJQ0FnWTNOelBYdDdYRzRnSUNBZ0lDQWdJR3hoWW1Wc09pQW5aSFZ0YlhsSmJuQjFkQ2NzWEc0Z0lDQWdJQ0FnSUM4dklHZGxkQ0J5YVdRZ2IyWWdZVzU1SUdSbFptRjFiSFFnYzNSNWJHVnpYRzRnSUNBZ0lDQWdJR0poWTJ0bmNtOTFibVE2SURBc1hHNGdJQ0FnSUNBZ0lHSnZjbVJsY2pvZ01DeGNiaUFnSUNBZ0lDQWdabTl1ZEZOcGVtVTZJQ2RwYm1obGNtbDBKeXhjYmlBZ0lDQWdJQ0FnYjNWMGJHbHVaVG9nTUN4Y2JpQWdJQ0FnSUNBZ2NHRmtaR2x1WnpvZ01DeGNiaUFnSUNBZ0lDQWdMeThnYVcxd2IzSjBZVzUwSVNCM2FYUm9iM1YwSUdCM2FXUjBhR0FnWW5KdmQzTmxjbk1nZDI5dUozUWdZV3hzYjNjZ1ptOWpkWE5jYmlBZ0lDQWdJQ0FnZDJsa2RHZzZJREVzWEc1Y2JpQWdJQ0FnSUNBZ0x5OGdjbVZ0YjNabElHTjFjbk52Y2lCdmJpQmtaWE5yZEc5d1hHNGdJQ0FnSUNBZ0lHTnZiRzl5T2lBbmRISmhibk53WVhKbGJuUW5MRnh1WEc0Z0lDQWdJQ0FnSUM4dklISmxiVzkyWlNCamRYSnpiM0lnYjI0Z2JXOWlhV3hsSUhkb2FXeHpkQ0J0WVdsdWRHRnBibWx1WnlCY0luTmpjbTlzYkNCcGJuUnZJSFpwWlhkY0lpQmlaV2hoZG1sdmRYSmNiaUFnSUNBZ0lDQWdiR1ZtZERvZ0xURXdNQ3hjYmlBZ0lDQWdJQ0FnYjNCaFkybDBlVG9nTUN4Y2JpQWdJQ0FnSUNBZ2NHOXphWFJwYjI0NklDZHlaV3hoZEdsMlpTY3NYRzRnSUNBZ0lDQWdJSFJ5WVc1elptOXliVG9nSjNOallXeGxLREFwSnl4Y2JpQWdJQ0FnSUgxOVhHNGdJQ0FnTHo1Y2JpQWdLVHRjYm4xY2JpSmRmUT09ICovXCIpXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBOb2RlUmVzb2x2ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoTm9kZVJlc29sdmVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBOb2RlUmVzb2x2ZXIoKSB7XG4gICAgcmV0dXJuIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE5vZGVSZXNvbHZlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5pbm5lclJlZihmaW5kRE9NTm9kZSh0aGlzKSk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5pbm5lclJlZihudWxsKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9O1xuXG4gIHJldHVybiBOb2RlUmVzb2x2ZXI7XG59KENvbXBvbmVudCk7XG5cbnZhciBTVFlMRV9LRVlTID0gWydib3hTaXppbmcnLCAnaGVpZ2h0JywgJ292ZXJmbG93JywgJ3BhZGRpbmdSaWdodCcsICdwb3NpdGlvbiddO1xudmFyIExPQ0tfU1RZTEVTID0ge1xuICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgLy8gYWNjb3VudCBmb3IgcG9zc2libGUgZGVjbGFyYXRpb24gYHdpZHRoOiAxMDAlO2Agb24gYm9keVxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBoZWlnaHQ6ICcxMDAlJ1xufTtcblxuZnVuY3Rpb24gcHJldmVudFRvdWNoTW92ZShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cbmZ1bmN0aW9uIGFsbG93VG91Y2hNb3ZlKGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbn1cbmZ1bmN0aW9uIHByZXZlbnRJbmVydGlhU2Nyb2xsKCkge1xuICB2YXIgdG9wID0gdGhpcy5zY3JvbGxUb3A7XG4gIHZhciB0b3RhbFNjcm9sbCA9IHRoaXMuc2Nyb2xsSGVpZ2h0O1xuICB2YXIgY3VycmVudFNjcm9sbCA9IHRvcCArIHRoaXMub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmICh0b3AgPT09IDApIHtcbiAgICB0aGlzLnNjcm9sbFRvcCA9IDE7XG4gIH0gZWxzZSBpZiAoY3VycmVudFNjcm9sbCA9PT0gdG90YWxTY3JvbGwpIHtcbiAgICB0aGlzLnNjcm9sbFRvcCA9IHRvcCAtIDE7XG4gIH1cbn0gLy8gYG9udG91Y2hzdGFydGAgY2hlY2sgd29ya3Mgb24gbW9zdCBicm93c2Vyc1xuLy8gYG1heFRvdWNoUG9pbnRzYCB3b3JrcyBvbiBJRTEwLzExIGFuZCBTdXJmYWNlXG5cbmZ1bmN0aW9uIGlzVG91Y2hEZXZpY2UoKSB7XG4gIHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZSQxKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxudmFyIGNhblVzZURPTSA9ICEhKCB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xudmFyIGFjdGl2ZVNjcm9sbExvY2tzID0gMDtcblxudmFyIFNjcm9sbExvY2sgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UkMShTY3JvbGxMb2NrLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTY3JvbGxMb2NrKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLm9yaWdpbmFsU3R5bGVzID0ge307XG4gICAgX3RoaXMubGlzdGVuZXJPcHRpb25zID0ge1xuICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNjcm9sbExvY2sucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKCFjYW5Vc2VET00pIHJldHVybjtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY2NvdW50Rm9yU2Nyb2xsYmFycyA9IF90aGlzJHByb3BzLmFjY291bnRGb3JTY3JvbGxiYXJzLFxuICAgICAgICB0b3VjaFNjcm9sbFRhcmdldCA9IF90aGlzJHByb3BzLnRvdWNoU2Nyb2xsVGFyZ2V0O1xuICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5ib2R5O1xuICAgIHZhciB0YXJnZXRTdHlsZSA9IHRhcmdldCAmJiB0YXJnZXQuc3R5bGU7XG5cbiAgICBpZiAoYWNjb3VudEZvclNjcm9sbGJhcnMpIHtcbiAgICAgIC8vIHN0b3JlIGFueSBzdHlsZXMgYWxyZWFkeSBhcHBsaWVkIHRvIHRoZSBib2R5XG4gICAgICBTVFlMRV9LRVlTLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsID0gdGFyZ2V0U3R5bGUgJiYgdGFyZ2V0U3R5bGVba2V5XTtcbiAgICAgICAgX3RoaXMyLm9yaWdpbmFsU3R5bGVzW2tleV0gPSB2YWw7XG4gICAgICB9KTtcbiAgICB9IC8vIGFwcGx5IHRoZSBsb2NrIHN0eWxlcyBhbmQgcGFkZGluZyBpZiB0aGlzIGlzIHRoZSBmaXJzdCBzY3JvbGwgbG9ja1xuXG5cbiAgICBpZiAoYWNjb3VudEZvclNjcm9sbGJhcnMgJiYgYWN0aXZlU2Nyb2xsTG9ja3MgPCAxKSB7XG4gICAgICB2YXIgY3VycmVudFBhZGRpbmcgPSBwYXJzZUludCh0aGlzLm9yaWdpbmFsU3R5bGVzLnBhZGRpbmdSaWdodCwgMTApIHx8IDA7XG4gICAgICB2YXIgY2xpZW50V2lkdGggPSBkb2N1bWVudC5ib2R5ID8gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA6IDA7XG4gICAgICB2YXIgYWRqdXN0ZWRQYWRkaW5nID0gd2luZG93LmlubmVyV2lkdGggLSBjbGllbnRXaWR0aCArIGN1cnJlbnRQYWRkaW5nIHx8IDA7XG4gICAgICBPYmplY3Qua2V5cyhMT0NLX1NUWUxFUykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWwgPSBMT0NLX1NUWUxFU1trZXldO1xuXG4gICAgICAgIGlmICh0YXJnZXRTdHlsZSkge1xuICAgICAgICAgIHRhcmdldFN0eWxlW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGFyZ2V0U3R5bGUpIHtcbiAgICAgICAgdGFyZ2V0U3R5bGUucGFkZGluZ1JpZ2h0ID0gYWRqdXN0ZWRQYWRkaW5nICsgXCJweFwiO1xuICAgICAgfVxuICAgIH0gLy8gYWNjb3VudCBmb3IgdG91Y2ggZGV2aWNlc1xuXG5cbiAgICBpZiAodGFyZ2V0ICYmIGlzVG91Y2hEZXZpY2UoKSkge1xuICAgICAgLy8gTW9iaWxlIFNhZmFyaSBpZ25vcmVzIHsgb3ZlcmZsb3c6IGhpZGRlbiB9IGRlY2xhcmF0aW9uIG9uIHRoZSBib2R5LlxuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnRUb3VjaE1vdmUsIHRoaXMubGlzdGVuZXJPcHRpb25zKTsgLy8gQWxsb3cgc2Nyb2xsIG9uIHByb3ZpZGVkIHRhcmdldFxuXG4gICAgICBpZiAodG91Y2hTY3JvbGxUYXJnZXQpIHtcbiAgICAgICAgdG91Y2hTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHByZXZlbnRJbmVydGlhU2Nyb2xsLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICAgIHRvdWNoU2Nyb2xsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGFsbG93VG91Y2hNb3ZlLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSAvLyBpbmNyZW1lbnQgYWN0aXZlIHNjcm9sbCBsb2Nrc1xuXG5cbiAgICBhY3RpdmVTY3JvbGxMb2NrcyArPSAxO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgaWYgKCFjYW5Vc2VET00pIHJldHVybjtcbiAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYWNjb3VudEZvclNjcm9sbGJhcnMgPSBfdGhpcyRwcm9wczIuYWNjb3VudEZvclNjcm9sbGJhcnMsXG4gICAgICAgIHRvdWNoU2Nyb2xsVGFyZ2V0ID0gX3RoaXMkcHJvcHMyLnRvdWNoU2Nyb2xsVGFyZ2V0O1xuICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5ib2R5O1xuICAgIHZhciB0YXJnZXRTdHlsZSA9IHRhcmdldCAmJiB0YXJnZXQuc3R5bGU7IC8vIHNhZmVseSBkZWNyZW1lbnQgYWN0aXZlIHNjcm9sbCBsb2Nrc1xuXG4gICAgYWN0aXZlU2Nyb2xsTG9ja3MgPSBNYXRoLm1heChhY3RpdmVTY3JvbGxMb2NrcyAtIDEsIDApOyAvLyByZWFwcGx5IG9yaWdpbmFsIGJvZHkgc3R5bGVzLCBpZiBhbnlcblxuICAgIGlmIChhY2NvdW50Rm9yU2Nyb2xsYmFycyAmJiBhY3RpdmVTY3JvbGxMb2NrcyA8IDEpIHtcbiAgICAgIFNUWUxFX0tFWVMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWwgPSBfdGhpczMub3JpZ2luYWxTdHlsZXNba2V5XTtcblxuICAgICAgICBpZiAodGFyZ2V0U3R5bGUpIHtcbiAgICAgICAgICB0YXJnZXRTdHlsZVtrZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IC8vIHJlbW92ZSB0b3VjaCBsaXN0ZW5lcnNcblxuXG4gICAgaWYgKHRhcmdldCAmJiBpc1RvdWNoRGV2aWNlKCkpIHtcbiAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50VG91Y2hNb3ZlLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG5cbiAgICAgIGlmICh0b3VjaFNjcm9sbFRhcmdldCkge1xuICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcHJldmVudEluZXJ0aWFTY3JvbGwsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICAgICAgdG91Y2hTY3JvbGxUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgYWxsb3dUb3VjaE1vdmUsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gU2Nyb2xsTG9jaztcbn0oQ29tcG9uZW50KTtcblxuU2Nyb2xsTG9jay5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjY291bnRGb3JTY3JvbGxiYXJzOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZSQyKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlZiQxID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8ge1xuICBuYW1lOiBcIjFkc2JwY3BcIixcbiAgc3R5bGVzOiBcInBvc2l0aW9uOmZpeGVkO2xlZnQ6MDtib3R0b206MDtyaWdodDowO3RvcDowO1wiXG59IDoge1xuICBuYW1lOiBcIjFkc2JwY3BcIixcbiAgc3R5bGVzOiBcInBvc2l0aW9uOmZpeGVkO2xlZnQ6MDtib3R0b206MDtyaWdodDowO3RvcDowO1wiLFxuICBtYXA6IFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWxOamNtOXNiRUpzYjJOckxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVFpFVlNJc0ltWnBiR1VpT2lKVFkzSnZiR3hDYkc5amF5NXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4dklFQm1iRzkzWEc0dktpb2dRR3B6ZUNCcWMzZ2dLaTljYm1sdGNHOXlkQ0I3SUZCMWNtVkRiMjF3YjI1bGJuUXNJSFI1Y0dVZ1JXeGxiV1Z1ZENCOUlHWnliMjBnSjNKbFlXTjBKenRjYm1sdGNHOXlkQ0I3SUdwemVDQjlJR1p5YjIwZ0owQmxiVzkwYVc5dUwyTnZjbVVuTzF4dWFXMXdiM0owSUU1dlpHVlNaWE52YkhabGNpQm1jbTl0SUNjdUwwNXZaR1ZTWlhOdmJIWmxjaWM3WEc1cGJYQnZjblFnVTJOeWIyeHNURzlqYXlCbWNtOXRJQ2N1TDFOamNtOXNiRXh2WTJzdmFXNWtaWGduTzF4dVhHNTBlWEJsSUZCeWIzQnpJRDBnZTF4dUlDQmphR2xzWkhKbGJqb2dSV3hsYldWdWREd3FQaXhjYmlBZ2FYTkZibUZpYkdWa09pQmliMjlzWldGdUxGeHVmVHRjYm5SNWNHVWdVM1JoZEdVZ1BTQjdYRzRnSUhSdmRXTm9VMk55YjJ4c1ZHRnlaMlYwT2lCSVZFMU1SV3hsYldWdWRDQjhJRzUxYkd3c1hHNTlPMXh1WEc0dkx5Qk9UMVJGT2x4dUx5OGdWMlVnYzJodmRXeGtiaWQwSUc1bFpXUWdkR2hwY3lCaFpuUmxjaUIxY0dSaGRHbHVaeUIwYnlCU1pXRmpkQ0IyTVRZdU15NHdMQ0IzYUdsamFDQnBiblJ5YjJSMVkyVnpPbHh1THk4Z0xTQmpjbVZoZEdWU1pXWW9LU0JvZEhSd2N6b3ZMM0psWVdOMGFuTXViM0puTDJSdlkzTXZjbVZoWTNRdFlYQnBMbWgwYld3amNtVmhZM1JqY21WaGRHVnlaV1pjYmk4dklDMGdabTl5ZDJGeVpGSmxaaWdwSUdoMGRIQnpPaTh2Y21WaFkzUnFjeTV2Y21jdlpHOWpjeTl5WldGamRDMWhjR2t1YUhSdGJDTnlaV0ZqZEdadmNuZGhjbVJ5WldaY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVTJOeWIyeHNRbXh2WTJzZ1pYaDBaVzVrY3lCUWRYSmxRMjl0Y0c5dVpXNTBQRkJ5YjNCekxDQlRkR0YwWlQ0Z2UxeHVJQ0J6ZEdGMFpTQTlJSHNnZEc5MVkyaFRZM0p2Ykd4VVlYSm5aWFE2SUc1MWJHd2dmVHRjYmx4dUlDQXZMeUJ0ZFhOMElHSmxJR2x1SUhOMFlYUmxJSFJ2SUhSeWFXZG5aWElnWVNCeVpTMXlaVzVrWlhJc0lHOXViSGtnY25WdWN5QnZibU5sSUhCbGNpQnBibk4wWVc1alpWeHVJQ0JuWlhSVFkzSnZiR3hVWVhKblpYUWdQU0FvY21WbU9pQklWRTFNUld4bGJXVnVkQ2tnUFQ0Z2UxeHVJQ0FnSUdsbUlDaHlaV1lnUFQwOUlIUm9hWE11YzNSaGRHVXVkRzkxWTJoVFkzSnZiR3hVWVhKblpYUXBJSEpsZEhWeWJqdGNiaUFnSUNCMGFHbHpMbk5sZEZOMFlYUmxLSHNnZEc5MVkyaFRZM0p2Ykd4VVlYSm5aWFE2SUhKbFppQjlLVHRjYmlBZ2ZUdGNibHh1SUNBdkx5QjBhR2x6SUhkcGJHd2dZMnh2YzJVZ2RHaGxJRzFsYm5VZ2QyaGxiaUJoSUhWelpYSWdZMnhwWTJ0eklHOTFkSE5wWkdWY2JpQWdZbXgxY2xObGJHVmpkRWx1Y0hWMElEMGdLQ2tnUFQ0Z2UxeHVJQ0FnSUdsbUlDaGtiMk4xYldWdWRDNWhZM1JwZG1WRmJHVnRaVzUwS1NCN1hHNGdJQ0FnSUNCa2IyTjFiV1Z1ZEM1aFkzUnBkbVZGYkdWdFpXNTBMbUpzZFhJb0tUdGNiaUFnSUNCOVhHNGdJSDA3WEc1Y2JpQWdjbVZ1WkdWeUtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1kyaHBiR1J5Wlc0c0lHbHpSVzVoWW14bFpDQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0JqYjI1emRDQjdJSFJ2ZFdOb1UyTnliMnhzVkdGeVoyVjBJSDBnUFNCMGFHbHpMbk4wWVhSbE8xeHVYRzRnSUNBZ0x5OGdZbUZwYkNCbFlYSnNlU0JwWmlCdWIzUWdaVzVoWW14bFpGeHVJQ0FnSUdsbUlDZ2hhWE5GYm1GaWJHVmtLU0J5WlhSMWNtNGdZMmhwYkdSeVpXNDdYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQXFJRVJwZGx4dUlDQWdJQ0FxSUMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExWeHVJQ0FnSUNBcUlHSnNiMk5yY3lCelkzSnZiR3hwYm1jZ2IyNGdibTl1TFdKdlpIa2daV3hsYldWdWRITWdZbVZvYVc1a0lIUm9aU0J0Wlc1MVhHNWNiaUFnSUNBZ0tpQk9iMlJsVW1WemIyeDJaWEpjYmlBZ0lDQWdLaUF0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMxY2JpQWdJQ0FnS2lCM1pTQnVaV1ZrSUdFZ2NtVm1aWEpsYm1ObElIUnZJSFJvWlNCelkzSnZiR3hoWW14bElHVnNaVzFsYm5RZ2RHOGdYQ0oxYm14dlkydGNJaUJ6WTNKdmJHd2diMjVjYmlBZ0lDQWdLaUJ0YjJKcGJHVWdaR1YyYVdObGMxeHVYRzRnSUNBZ0lDb2dVMk55YjJ4c1RHOWphMXh1SUNBZ0lDQXFJQzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFZ4dUlDQWdJQ0FxSUdGamRIVmhiR3g1SUdSdlpYTWdkR2hsSUhOamNtOXNiQ0JzYjJOcmFXNW5YRzRnSUNBZ0lDb3ZYRzRnSUNBZ2NtVjBkWEp1SUNoY2JpQWdJQ0FnSUR4a2FYWStYRzRnSUNBZ0lDQWdJRHhrYVhaY2JpQWdJQ0FnSUNBZ0lDQnZia05zYVdOclBYdDBhR2x6TG1Kc2RYSlRaV3hsWTNSSmJuQjFkSDFjYmlBZ0lDQWdJQ0FnSUNCamMzTTllM3NnY0c5emFYUnBiMjQ2SUNkbWFYaGxaQ2NzSUd4bFpuUTZJREFzSUdKdmRIUnZiVG9nTUN3Z2NtbG5hSFE2SURBc0lIUnZjRG9nTUNCOWZWeHVJQ0FnSUNBZ0lDQXZQbHh1SUNBZ0lDQWdJQ0E4VG05a1pWSmxjMjlzZG1WeUlHbHVibVZ5VW1WbVBYdDBhR2x6TG1kbGRGTmpjbTlzYkZSaGNtZGxkSDArZTJOb2FXeGtjbVZ1ZlR3dlRtOWtaVkpsYzI5c2RtVnlQbHh1SUNBZ0lDQWdJQ0I3ZEc5MVkyaFRZM0p2Ykd4VVlYSm5aWFFnUHlBb1hHNGdJQ0FnSUNBZ0lDQWdQRk5qY205c2JFeHZZMnNnZEc5MVkyaFRZM0p2Ykd4VVlYSm5aWFE5ZTNSdmRXTm9VMk55YjJ4c1ZHRnlaMlYwZlNBdlBseHVJQ0FnSUNBZ0lDQXBJRG9nYm5Wc2JIMWNiaUFnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ2s3WEc0Z0lIMWNibjFjYmlKZGZRPT0gKi9cIlxufTtcblxuLy8gTk9URTpcbi8vIFdlIHNob3VsZG4ndCBuZWVkIHRoaXMgYWZ0ZXIgdXBkYXRpbmcgdG8gUmVhY3QgdjE2LjMuMCwgd2hpY2ggaW50cm9kdWNlczpcbi8vIC0gY3JlYXRlUmVmKCkgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y3JlYXRlcmVmXG4vLyAtIGZvcndhcmRSZWYoKSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3Rmb3J3YXJkcmVmXG52YXIgU2Nyb2xsQmxvY2sgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9QdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlJDIoU2Nyb2xsQmxvY2ssIF9QdXJlQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTY3JvbGxCbG9jaygpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUHVyZUNvbXBvbmVudC5jYWxsLmFwcGx5KF9QdXJlQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdG91Y2hTY3JvbGxUYXJnZXQ6IG51bGxcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0U2Nyb2xsVGFyZ2V0ID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgaWYgKHJlZiA9PT0gX3RoaXMuc3RhdGUudG91Y2hTY3JvbGxUYXJnZXQpIHJldHVybjtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0b3VjaFNjcm9sbFRhcmdldDogcmVmXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYmx1clNlbGVjdElucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTY3JvbGxCbG9jay5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBpc0VuYWJsZWQgPSBfdGhpcyRwcm9wcy5pc0VuYWJsZWQ7XG4gICAgdmFyIHRvdWNoU2Nyb2xsVGFyZ2V0ID0gdGhpcy5zdGF0ZS50b3VjaFNjcm9sbFRhcmdldDsgLy8gYmFpbCBlYXJseSBpZiBub3QgZW5hYmxlZFxuXG4gICAgaWYgKCFpc0VuYWJsZWQpIHJldHVybiBjaGlsZHJlbjtcbiAgICAvKlxuICAgICAqIERpdlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIGJsb2NrcyBzY3JvbGxpbmcgb24gbm9uLWJvZHkgZWxlbWVudHMgYmVoaW5kIHRoZSBtZW51XG4gICAgICAqIE5vZGVSZXNvbHZlclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIHdlIG5lZWQgYSByZWZlcmVuY2UgdG8gdGhlIHNjcm9sbGFibGUgZWxlbWVudCB0byBcInVubG9ja1wiIHNjcm9sbCBvblxuICAgICAqIG1vYmlsZSBkZXZpY2VzXG4gICAgICAqIFNjcm9sbExvY2tcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiBhY3R1YWxseSBkb2VzIHRoZSBzY3JvbGwgbG9ja2luZ1xuICAgICAqL1xuXG4gICAgcmV0dXJuIGpzeChcImRpdlwiLCBudWxsLCBqc3goXCJkaXZcIiwge1xuICAgICAgb25DbGljazogdGhpcy5ibHVyU2VsZWN0SW5wdXQsXG4gICAgICBjc3M6IF9yZWYkMVxuICAgIH0pLCBqc3goTm9kZVJlc29sdmVyLCB7XG4gICAgICBpbm5lclJlZjogdGhpcy5nZXRTY3JvbGxUYXJnZXRcbiAgICB9LCBjaGlsZHJlbiksIHRvdWNoU2Nyb2xsVGFyZ2V0ID8ganN4KFNjcm9sbExvY2ssIHtcbiAgICAgIHRvdWNoU2Nyb2xsVGFyZ2V0OiB0b3VjaFNjcm9sbFRhcmdldFxuICAgIH0pIDogbnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIFNjcm9sbEJsb2NrO1xufShQdXJlQ29tcG9uZW50KTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UkMShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlJDMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTY3JvbGxDYXB0b3IgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UkMyhTY3JvbGxDYXB0b3IsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNjcm9sbENhcHRvcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5pc0JvdHRvbSA9IGZhbHNlO1xuICAgIF90aGlzLmlzVG9wID0gZmFsc2U7XG4gICAgX3RoaXMuc2Nyb2xsVGFyZ2V0ID0gdm9pZCAwO1xuICAgIF90aGlzLnRvdWNoU3RhcnQgPSB2b2lkIDA7XG5cbiAgICBfdGhpcy5jYW5jZWxTY3JvbGwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRXZlbnREZWx0YSA9IGZ1bmN0aW9uIChldmVudCwgZGVsdGEpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uQm90dG9tQXJyaXZlID0gX3RoaXMkcHJvcHMub25Cb3R0b21BcnJpdmUsXG4gICAgICAgICAgb25Cb3R0b21MZWF2ZSA9IF90aGlzJHByb3BzLm9uQm90dG9tTGVhdmUsXG4gICAgICAgICAgb25Ub3BBcnJpdmUgPSBfdGhpcyRwcm9wcy5vblRvcEFycml2ZSxcbiAgICAgICAgICBvblRvcExlYXZlID0gX3RoaXMkcHJvcHMub25Ub3BMZWF2ZTtcbiAgICAgIHZhciBfdGhpcyRzY3JvbGxUYXJnZXQgPSBfdGhpcy5zY3JvbGxUYXJnZXQsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gX3RoaXMkc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCxcbiAgICAgICAgICBzY3JvbGxIZWlnaHQgPSBfdGhpcyRzY3JvbGxUYXJnZXQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IF90aGlzJHNjcm9sbFRhcmdldC5jbGllbnRIZWlnaHQ7XG4gICAgICB2YXIgdGFyZ2V0ID0gX3RoaXMuc2Nyb2xsVGFyZ2V0O1xuICAgICAgdmFyIGlzRGVsdGFQb3NpdGl2ZSA9IGRlbHRhID4gMDtcbiAgICAgIHZhciBhdmFpbGFibGVTY3JvbGwgPSBzY3JvbGxIZWlnaHQgLSBjbGllbnRIZWlnaHQgLSBzY3JvbGxUb3A7XG4gICAgICB2YXIgc2hvdWxkQ2FuY2VsU2Nyb2xsID0gZmFsc2U7IC8vIHJlc2V0IGJvdHRvbS90b3AgZmxhZ3NcblxuICAgICAgaWYgKGF2YWlsYWJsZVNjcm9sbCA+IGRlbHRhICYmIF90aGlzLmlzQm90dG9tKSB7XG4gICAgICAgIGlmIChvbkJvdHRvbUxlYXZlKSBvbkJvdHRvbUxlYXZlKGV2ZW50KTtcbiAgICAgICAgX3RoaXMuaXNCb3R0b20gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGVsdGFQb3NpdGl2ZSAmJiBfdGhpcy5pc1RvcCkge1xuICAgICAgICBpZiAob25Ub3BMZWF2ZSkgb25Ub3BMZWF2ZShldmVudCk7XG4gICAgICAgIF90aGlzLmlzVG9wID0gZmFsc2U7XG4gICAgICB9IC8vIGJvdHRvbSBsaW1pdFxuXG5cbiAgICAgIGlmIChpc0RlbHRhUG9zaXRpdmUgJiYgZGVsdGEgPiBhdmFpbGFibGVTY3JvbGwpIHtcbiAgICAgICAgaWYgKG9uQm90dG9tQXJyaXZlICYmICFfdGhpcy5pc0JvdHRvbSkge1xuICAgICAgICAgIG9uQm90dG9tQXJyaXZlKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldC5zY3JvbGxUb3AgPSBzY3JvbGxIZWlnaHQ7XG4gICAgICAgIHNob3VsZENhbmNlbFNjcm9sbCA9IHRydWU7XG4gICAgICAgIF90aGlzLmlzQm90dG9tID0gdHJ1ZTsgLy8gdG9wIGxpbWl0XG4gICAgICB9IGVsc2UgaWYgKCFpc0RlbHRhUG9zaXRpdmUgJiYgLWRlbHRhID4gc2Nyb2xsVG9wKSB7XG4gICAgICAgIGlmIChvblRvcEFycml2ZSAmJiAhX3RoaXMuaXNUb3ApIHtcbiAgICAgICAgICBvblRvcEFycml2ZShldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXQuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgc2hvdWxkQ2FuY2VsU2Nyb2xsID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuaXNUb3AgPSB0cnVlO1xuICAgICAgfSAvLyBjYW5jZWwgc2Nyb2xsXG5cblxuICAgICAgaWYgKHNob3VsZENhbmNlbFNjcm9sbCkge1xuICAgICAgICBfdGhpcy5jYW5jZWxTY3JvbGwoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbldoZWVsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5oYW5kbGVFdmVudERlbHRhKGV2ZW50LCBldmVudC5kZWx0YVkpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIHNldCB0b3VjaCBzdGFydCBzbyB3ZSBjYW4gY2FsY3VsYXRlIHRvdWNobW92ZSBkZWx0YVxuICAgICAgX3RoaXMudG91Y2hTdGFydCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uVG91Y2hNb3ZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgZGVsdGFZID0gX3RoaXMudG91Y2hTdGFydCAtIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG5cbiAgICAgIF90aGlzLmhhbmRsZUV2ZW50RGVsdGEoZXZlbnQsIGRlbHRhWSk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldFNjcm9sbFRhcmdldCA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLnNjcm9sbFRhcmdldCA9IHJlZjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNjcm9sbENhcHRvci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zdGFydExpc3RlbmluZyh0aGlzLnNjcm9sbFRhcmdldCk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zdG9wTGlzdGVuaW5nKHRoaXMuc2Nyb2xsVGFyZ2V0KTtcbiAgfTtcblxuICBfcHJvdG8uc3RhcnRMaXN0ZW5pbmcgPSBmdW5jdGlvbiBzdGFydExpc3RlbmluZyhlbCkge1xuICAgIC8vIGJhaWwgZWFybHkgaWYgbm8gZWxlbWVudCBpcyBhdmFpbGFibGUgdG8gYXR0YWNoIHRvXG4gICAgaWYgKCFlbCkgcmV0dXJuOyAvLyBhbGwgdGhlIGlmIHN0YXRlbWVudHMgYXJlIHRvIGFwcGVhc2UgRmxvdyDwn5iiXG5cbiAgICBpZiAodHlwZW9mIGVsLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5vbldoZWVsLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBlbC5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGVsLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnN0b3BMaXN0ZW5pbmcgPSBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nKGVsKSB7XG4gICAgLy8gYWxsIHRoZSBpZiBzdGF0ZW1lbnRzIGFyZSB0byBhcHBlYXNlIEZsb3cg8J+YolxuICAgIGlmICh0eXBlb2YgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uV2hlZWwsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSwgZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KE5vZGVSZXNvbHZlciwge1xuICAgICAgaW5uZXJSZWY6IHRoaXMuZ2V0U2Nyb2xsVGFyZ2V0XG4gICAgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gIH07XG5cbiAgcmV0dXJuIFNjcm9sbENhcHRvcjtcbn0oQ29tcG9uZW50KTtcblxuZnVuY3Rpb24gU2Nyb2xsQ2FwdG9yU3dpdGNoKF9yZWYpIHtcbiAgdmFyIF9yZWYkaXNFbmFibGVkID0gX3JlZi5pc0VuYWJsZWQsXG4gICAgICBpc0VuYWJsZWQgPSBfcmVmJGlzRW5hYmxlZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkaXNFbmFibGVkLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSQxKF9yZWYsIFtcImlzRW5hYmxlZFwiXSk7XG5cbiAgcmV0dXJuIGlzRW5hYmxlZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsQ2FwdG9yLCBwcm9wcykgOiBwcm9wcy5jaGlsZHJlbjtcbn1cblxudmFyIGluc3RydWN0aW9uc0FyaWFNZXNzYWdlID0gZnVuY3Rpb24gaW5zdHJ1Y3Rpb25zQXJpYU1lc3NhZ2UoZXZlbnQsIGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkge1xuICAgIGNvbnRleHQgPSB7fTtcbiAgfVxuXG4gIHZhciBfY29udGV4dCA9IGNvbnRleHQsXG4gICAgICBpc1NlYXJjaGFibGUgPSBfY29udGV4dC5pc1NlYXJjaGFibGUsXG4gICAgICBpc011bHRpID0gX2NvbnRleHQuaXNNdWx0aSxcbiAgICAgIGxhYmVsID0gX2NvbnRleHQubGFiZWwsXG4gICAgICBpc0Rpc2FibGVkID0gX2NvbnRleHQuaXNEaXNhYmxlZDtcblxuICBzd2l0Y2ggKGV2ZW50KSB7XG4gICAgY2FzZSAnbWVudSc6XG4gICAgICByZXR1cm4gXCJVc2UgVXAgYW5kIERvd24gdG8gY2hvb3NlIG9wdGlvbnNcIiArIChpc0Rpc2FibGVkID8gJycgOiAnLCBwcmVzcyBFbnRlciB0byBzZWxlY3QgdGhlIGN1cnJlbnRseSBmb2N1c2VkIG9wdGlvbicpICsgXCIsIHByZXNzIEVzY2FwZSB0byBleGl0IHRoZSBtZW51LCBwcmVzcyBUYWIgdG8gc2VsZWN0IHRoZSBvcHRpb24gYW5kIGV4aXQgdGhlIG1lbnUuXCI7XG5cbiAgICBjYXNlICdpbnB1dCc6XG4gICAgICByZXR1cm4gKGxhYmVsID8gbGFiZWwgOiAnU2VsZWN0JykgKyBcIiBpcyBmb2N1c2VkIFwiICsgKGlzU2VhcmNoYWJsZSA/ICcsdHlwZSB0byByZWZpbmUgbGlzdCcgOiAnJykgKyBcIiwgcHJlc3MgRG93biB0byBvcGVuIHRoZSBtZW51LCBcIiArIChpc011bHRpID8gJyBwcmVzcyBsZWZ0IHRvIGZvY3VzIHNlbGVjdGVkIHZhbHVlcycgOiAnJyk7XG5cbiAgICBjYXNlICd2YWx1ZSc6XG4gICAgICByZXR1cm4gJ1VzZSBsZWZ0IGFuZCByaWdodCB0byB0b2dnbGUgYmV0d2VlbiBmb2N1c2VkIHZhbHVlcywgcHJlc3MgQmFja3NwYWNlIHRvIHJlbW92ZSB0aGUgY3VycmVudGx5IGZvY3VzZWQgdmFsdWUnO1xuICB9XG59O1xudmFyIHZhbHVlRXZlbnRBcmlhTWVzc2FnZSA9IGZ1bmN0aW9uIHZhbHVlRXZlbnRBcmlhTWVzc2FnZShldmVudCwgY29udGV4dCkge1xuICB2YXIgdmFsdWUgPSBjb250ZXh0LnZhbHVlLFxuICAgICAgaXNEaXNhYmxlZCA9IGNvbnRleHQuaXNEaXNhYmxlZDtcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuXG4gIHN3aXRjaCAoZXZlbnQpIHtcbiAgICBjYXNlICdkZXNlbGVjdC1vcHRpb24nOlxuICAgIGNhc2UgJ3BvcC12YWx1ZSc6XG4gICAgY2FzZSAncmVtb3ZlLXZhbHVlJzpcbiAgICAgIHJldHVybiBcIm9wdGlvbiBcIiArIHZhbHVlICsgXCIsIGRlc2VsZWN0ZWQuXCI7XG5cbiAgICBjYXNlICdzZWxlY3Qtb3B0aW9uJzpcbiAgICAgIHJldHVybiBpc0Rpc2FibGVkID8gXCJvcHRpb24gXCIgKyB2YWx1ZSArIFwiIGlzIGRpc2FibGVkLiBTZWxlY3QgYW5vdGhlciBvcHRpb24uXCIgOiBcIm9wdGlvbiBcIiArIHZhbHVlICsgXCIsIHNlbGVjdGVkLlwiO1xuICB9XG59O1xudmFyIHZhbHVlRm9jdXNBcmlhTWVzc2FnZSA9IGZ1bmN0aW9uIHZhbHVlRm9jdXNBcmlhTWVzc2FnZShfcmVmKSB7XG4gIHZhciBmb2N1c2VkVmFsdWUgPSBfcmVmLmZvY3VzZWRWYWx1ZSxcbiAgICAgIGdldE9wdGlvbkxhYmVsID0gX3JlZi5nZXRPcHRpb25MYWJlbCxcbiAgICAgIHNlbGVjdFZhbHVlID0gX3JlZi5zZWxlY3RWYWx1ZTtcbiAgcmV0dXJuIFwidmFsdWUgXCIgKyBnZXRPcHRpb25MYWJlbChmb2N1c2VkVmFsdWUpICsgXCIgZm9jdXNlZCwgXCIgKyAoc2VsZWN0VmFsdWUuaW5kZXhPZihmb2N1c2VkVmFsdWUpICsgMSkgKyBcIiBvZiBcIiArIHNlbGVjdFZhbHVlLmxlbmd0aCArIFwiLlwiO1xufTtcbnZhciBvcHRpb25Gb2N1c0FyaWFNZXNzYWdlID0gZnVuY3Rpb24gb3B0aW9uRm9jdXNBcmlhTWVzc2FnZShfcmVmMikge1xuICB2YXIgZm9jdXNlZE9wdGlvbiA9IF9yZWYyLmZvY3VzZWRPcHRpb24sXG4gICAgICBnZXRPcHRpb25MYWJlbCA9IF9yZWYyLmdldE9wdGlvbkxhYmVsLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnM7XG4gIHJldHVybiBcIm9wdGlvbiBcIiArIGdldE9wdGlvbkxhYmVsKGZvY3VzZWRPcHRpb24pICsgXCIgZm9jdXNlZFwiICsgKGZvY3VzZWRPcHRpb24uaXNEaXNhYmxlZCA/ICcgZGlzYWJsZWQnIDogJycpICsgXCIsIFwiICsgKG9wdGlvbnMuaW5kZXhPZihmb2N1c2VkT3B0aW9uKSArIDEpICsgXCIgb2YgXCIgKyBvcHRpb25zLmxlbmd0aCArIFwiLlwiO1xufTtcbnZhciByZXN1bHRzQXJpYU1lc3NhZ2UgPSBmdW5jdGlvbiByZXN1bHRzQXJpYU1lc3NhZ2UoX3JlZjMpIHtcbiAgdmFyIGlucHV0VmFsdWUgPSBfcmVmMy5pbnB1dFZhbHVlLFxuICAgICAgc2NyZWVuUmVhZGVyTWVzc2FnZSA9IF9yZWYzLnNjcmVlblJlYWRlck1lc3NhZ2U7XG4gIHJldHVybiBcIlwiICsgc2NyZWVuUmVhZGVyTWVzc2FnZSArIChpbnB1dFZhbHVlID8gJyBmb3Igc2VhcmNoIHRlcm0gJyArIGlucHV0VmFsdWUgOiAnJykgKyBcIi5cIjtcbn07XG5cbnZhciBmb3JtYXRHcm91cExhYmVsID0gZnVuY3Rpb24gZm9ybWF0R3JvdXBMYWJlbChncm91cCkge1xuICByZXR1cm4gZ3JvdXAubGFiZWw7XG59O1xudmFyIGdldE9wdGlvbkxhYmVsID0gZnVuY3Rpb24gZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB7XG4gIHJldHVybiBvcHRpb24ubGFiZWw7XG59O1xudmFyIGdldE9wdGlvblZhbHVlID0gZnVuY3Rpb24gZ2V0T3B0aW9uVmFsdWUob3B0aW9uKSB7XG4gIHJldHVybiBvcHRpb24udmFsdWU7XG59O1xudmFyIGlzT3B0aW9uRGlzYWJsZWQgPSBmdW5jdGlvbiBpc09wdGlvbkRpc2FibGVkKG9wdGlvbikge1xuICByZXR1cm4gISFvcHRpb24uaXNEaXNhYmxlZDtcbn07XG5cbmZ1bmN0aW9uIF9leHRlbmRzJDMoKSB7IF9leHRlbmRzJDMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMkMy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG52YXIgZGVmYXVsdFN0eWxlcyA9IHtcbiAgY2xlYXJJbmRpY2F0b3I6IGNsZWFySW5kaWNhdG9yQ1NTLFxuICBjb250YWluZXI6IGNvbnRhaW5lckNTUyxcbiAgY29udHJvbDogY3NzLFxuICBkcm9wZG93bkluZGljYXRvcjogZHJvcGRvd25JbmRpY2F0b3JDU1MsXG4gIGdyb3VwOiBncm91cENTUyxcbiAgZ3JvdXBIZWFkaW5nOiBncm91cEhlYWRpbmdDU1MsXG4gIGluZGljYXRvcnNDb250YWluZXI6IGluZGljYXRvcnNDb250YWluZXJDU1MsXG4gIGluZGljYXRvclNlcGFyYXRvcjogaW5kaWNhdG9yU2VwYXJhdG9yQ1NTLFxuICBpbnB1dDogaW5wdXRDU1MsXG4gIGxvYWRpbmdJbmRpY2F0b3I6IGxvYWRpbmdJbmRpY2F0b3JDU1MsXG4gIGxvYWRpbmdNZXNzYWdlOiBsb2FkaW5nTWVzc2FnZUNTUyxcbiAgbWVudTogbWVudUNTUyxcbiAgbWVudUxpc3Q6IG1lbnVMaXN0Q1NTLFxuICBtZW51UG9ydGFsOiBtZW51UG9ydGFsQ1NTLFxuICBtdWx0aVZhbHVlOiBtdWx0aVZhbHVlQ1NTLFxuICBtdWx0aVZhbHVlTGFiZWw6IG11bHRpVmFsdWVMYWJlbENTUyxcbiAgbXVsdGlWYWx1ZVJlbW92ZTogbXVsdGlWYWx1ZVJlbW92ZUNTUyxcbiAgbm9PcHRpb25zTWVzc2FnZTogbm9PcHRpb25zTWVzc2FnZUNTUyxcbiAgb3B0aW9uOiBvcHRpb25DU1MsXG4gIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlckNTUyxcbiAgc2luZ2xlVmFsdWU6IGNzcyQxLFxuICB2YWx1ZUNvbnRhaW5lcjogdmFsdWVDb250YWluZXJDU1Ncbn07IC8vIE1lcmdlIFV0aWxpdHlcbi8vIEFsbG93cyBjb25zdW1lcnMgdG8gZXh0ZW5kIGEgYmFzZSBTZWxlY3Qgd2l0aCBhZGRpdGlvbmFsIHN0eWxlc1xuXG5mdW5jdGlvbiBtZXJnZVN0eWxlcyhzb3VyY2UsIHRhcmdldCkge1xuICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHtcbiAgICB0YXJnZXQgPSB7fTtcbiAgfVxuXG4gIC8vIGluaXRpYWxpemUgd2l0aCBzb3VyY2Ugc3R5bGVzXG4gIHZhciBzdHlsZXMgPSBfZXh0ZW5kcyQzKHt9LCBzb3VyY2UpOyAvLyBtYXNzYWdlIGluIHRhcmdldCBzdHlsZXNcblxuXG4gIE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKHNvdXJjZVtrZXldKSB7XG4gICAgICBzdHlsZXNba2V5XSA9IGZ1bmN0aW9uIChyc0NzcywgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldKHNvdXJjZVtrZXldKHJzQ3NzLCBwcm9wcyksIHByb3BzKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc1trZXldID0gdGFyZ2V0W2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHN0eWxlcztcbn1cblxudmFyIGNvbG9ycyA9IHtcbiAgcHJpbWFyeTogJyMyNjg0RkYnLFxuICBwcmltYXJ5NzU6ICcjNEM5QUZGJyxcbiAgcHJpbWFyeTUwOiAnI0IyRDRGRicsXG4gIHByaW1hcnkyNTogJyNERUVCRkYnLFxuICBkYW5nZXI6ICcjREUzNTBCJyxcbiAgZGFuZ2VyTGlnaHQ6ICcjRkZCREFEJyxcbiAgbmV1dHJhbDA6ICdoc2woMCwgMCUsIDEwMCUpJyxcbiAgbmV1dHJhbDU6ICdoc2woMCwgMCUsIDk1JSknLFxuICBuZXV0cmFsMTA6ICdoc2woMCwgMCUsIDkwJSknLFxuICBuZXV0cmFsMjA6ICdoc2woMCwgMCUsIDgwJSknLFxuICBuZXV0cmFsMzA6ICdoc2woMCwgMCUsIDcwJSknLFxuICBuZXV0cmFsNDA6ICdoc2woMCwgMCUsIDYwJSknLFxuICBuZXV0cmFsNTA6ICdoc2woMCwgMCUsIDUwJSknLFxuICBuZXV0cmFsNjA6ICdoc2woMCwgMCUsIDQwJSknLFxuICBuZXV0cmFsNzA6ICdoc2woMCwgMCUsIDMwJSknLFxuICBuZXV0cmFsODA6ICdoc2woMCwgMCUsIDIwJSknLFxuICBuZXV0cmFsOTA6ICdoc2woMCwgMCUsIDEwJSknXG59O1xudmFyIGJvcmRlclJhZGl1cyA9IDQ7IC8vIFVzZWQgdG8gY2FsY3VsYXRlIGNvbnNpc3RlbnQgbWFyZ2luL3BhZGRpbmcgb24gZWxlbWVudHNcblxudmFyIGJhc2VVbml0ID0gNDsgLy8gVGhlIG1pbmltdW0gaGVpZ2h0IG9mIHRoZSBjb250cm9sXG5cbnZhciBjb250cm9sSGVpZ2h0ID0gMzg7IC8vIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgY29udHJvbCBhbmQgbWVudSAqL1xuXG52YXIgbWVudUd1dHRlciA9IGJhc2VVbml0ICogMjtcbnZhciBzcGFjaW5nID0ge1xuICBiYXNlVW5pdDogYmFzZVVuaXQsXG4gIGNvbnRyb2xIZWlnaHQ6IGNvbnRyb2xIZWlnaHQsXG4gIG1lbnVHdXR0ZXI6IG1lbnVHdXR0ZXJcbn07XG52YXIgZGVmYXVsdFRoZW1lID0ge1xuICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgY29sb3JzOiBjb2xvcnMsXG4gIHNwYWNpbmc6IHNwYWNpbmdcbn07XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJDIoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcyQ0KCkgeyBfZXh0ZW5kcyQ0ID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzJDQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZSQ0KHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZTogdHJ1ZSxcbiAgYmx1cklucHV0T25TZWxlY3Q6IGlzVG91Y2hDYXBhYmxlKCksXG4gIGNhcHR1cmVNZW51U2Nyb2xsOiAhaXNUb3VjaENhcGFibGUoKSxcbiAgY2xvc2VNZW51T25TZWxlY3Q6IHRydWUsXG4gIGNsb3NlTWVudU9uU2Nyb2xsOiBmYWxzZSxcbiAgY29tcG9uZW50czoge30sXG4gIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZTogdHJ1ZSxcbiAgZXNjYXBlQ2xlYXJzVmFsdWU6IGZhbHNlLFxuICBmaWx0ZXJPcHRpb246IGNyZWF0ZUZpbHRlcigpLFxuICBmb3JtYXRHcm91cExhYmVsOiBmb3JtYXRHcm91cExhYmVsLFxuICBnZXRPcHRpb25MYWJlbDogZ2V0T3B0aW9uTGFiZWwsXG4gIGdldE9wdGlvblZhbHVlOiBnZXRPcHRpb25WYWx1ZSxcbiAgaXNEaXNhYmxlZDogZmFsc2UsXG4gIGlzTG9hZGluZzogZmFsc2UsXG4gIGlzTXVsdGk6IGZhbHNlLFxuICBpc1J0bDogZmFsc2UsXG4gIGlzU2VhcmNoYWJsZTogdHJ1ZSxcbiAgaXNPcHRpb25EaXNhYmxlZDogaXNPcHRpb25EaXNhYmxlZCxcbiAgbG9hZGluZ01lc3NhZ2U6IGZ1bmN0aW9uIGxvYWRpbmdNZXNzYWdlKCkge1xuICAgIHJldHVybiAnTG9hZGluZy4uLic7XG4gIH0sXG4gIG1heE1lbnVIZWlnaHQ6IDMwMCxcbiAgbWluTWVudUhlaWdodDogMTQwLFxuICBtZW51SXNPcGVuOiBmYWxzZSxcbiAgbWVudVBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1lbnVQb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgbWVudVNob3VsZEJsb2NrU2Nyb2xsOiBmYWxzZSxcbiAgbWVudVNob3VsZFNjcm9sbEludG9WaWV3OiAhaXNNb2JpbGVEZXZpY2UoKSxcbiAgbm9PcHRpb25zTWVzc2FnZTogZnVuY3Rpb24gbm9PcHRpb25zTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gJ05vIG9wdGlvbnMnO1xuICB9LFxuICBvcGVuTWVudU9uRm9jdXM6IGZhbHNlLFxuICBvcGVuTWVudU9uQ2xpY2s6IHRydWUsXG4gIG9wdGlvbnM6IFtdLFxuICBwYWdlU2l6ZTogNSxcbiAgcGxhY2Vob2xkZXI6ICdTZWxlY3QuLi4nLFxuICBzY3JlZW5SZWFkZXJTdGF0dXM6IGZ1bmN0aW9uIHNjcmVlblJlYWRlclN0YXR1cyhfcmVmKSB7XG4gICAgdmFyIGNvdW50ID0gX3JlZi5jb3VudDtcbiAgICByZXR1cm4gY291bnQgKyBcIiByZXN1bHRcIiArIChjb3VudCAhPT0gMSA/ICdzJyA6ICcnKSArIFwiIGF2YWlsYWJsZVwiO1xuICB9LFxuICBzdHlsZXM6IHt9LFxuICB0YWJJbmRleDogJzAnLFxuICB0YWJTZWxlY3RzVmFsdWU6IHRydWVcbn07XG52YXIgaW5zdGFuY2VJZCA9IDE7XG5cbnZhciBTZWxlY3QgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UkNChTZWxlY3QsIF9Db21wb25lbnQpO1xuXG4gIC8vIE1pc2MuIEluc3RhbmNlIFByb3BlcnRpZXNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFRPRE9cbiAgLy8gUmVmc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTGlmZWN5Y2xlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmdW5jdGlvbiBTZWxlY3QoX3Byb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgX3Byb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgYXJpYUxpdmVTZWxlY3Rpb246ICcnLFxuICAgICAgYXJpYUxpdmVDb250ZXh0OiAnJyxcbiAgICAgIGZvY3VzZWRPcHRpb246IG51bGwsXG4gICAgICBmb2N1c2VkVmFsdWU6IG51bGwsXG4gICAgICBpbnB1dElzSGlkZGVuOiBmYWxzZSxcbiAgICAgIGlzRm9jdXNlZDogZmFsc2UsXG4gICAgICBtZW51T3B0aW9uczoge1xuICAgICAgICByZW5kZXI6IFtdLFxuICAgICAgICBmb2N1c2FibGU6IFtdXG4gICAgICB9LFxuICAgICAgc2VsZWN0VmFsdWU6IFtdXG4gICAgfTtcbiAgICBfdGhpcy5ibG9ja09wdGlvbkhvdmVyID0gZmFsc2U7XG4gICAgX3RoaXMuaXNDb21wb3NpbmcgPSBmYWxzZTtcbiAgICBfdGhpcy5jbGVhckZvY3VzVmFsdWVPblVwZGF0ZSA9IGZhbHNlO1xuICAgIF90aGlzLmNvbW1vblByb3BzID0gdm9pZCAwO1xuICAgIF90aGlzLmNvbXBvbmVudHMgPSB2b2lkIDA7XG4gICAgX3RoaXMuaGFzR3JvdXBzID0gZmFsc2U7XG4gICAgX3RoaXMuaW5pdGlhbFRvdWNoWCA9IDA7XG4gICAgX3RoaXMuaW5pdGlhbFRvdWNoWSA9IDA7XG4gICAgX3RoaXMuaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlID0gdm9pZCAwO1xuICAgIF90aGlzLmluc3RhbmNlUHJlZml4ID0gJyc7XG4gICAgX3RoaXMub3BlbkFmdGVyRm9jdXMgPSBmYWxzZTtcbiAgICBfdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IGZhbHNlO1xuICAgIF90aGlzLnVzZXJJc0RyYWdnaW5nID0gdm9pZCAwO1xuICAgIF90aGlzLmNvbnRyb2xSZWYgPSBudWxsO1xuXG4gICAgX3RoaXMuZ2V0Q29udHJvbFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLmNvbnRyb2xSZWYgPSByZWY7XG4gICAgfTtcblxuICAgIF90aGlzLmZvY3VzZWRPcHRpb25SZWYgPSBudWxsO1xuXG4gICAgX3RoaXMuZ2V0Rm9jdXNlZE9wdGlvblJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLmZvY3VzZWRPcHRpb25SZWYgPSByZWY7XG4gICAgfTtcblxuICAgIF90aGlzLm1lbnVMaXN0UmVmID0gbnVsbDtcblxuICAgIF90aGlzLmdldE1lbnVMaXN0UmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMubWVudUxpc3RSZWYgPSByZWY7XG4gICAgfTtcblxuICAgIF90aGlzLmlucHV0UmVmID0gbnVsbDtcblxuICAgIF90aGlzLmdldElucHV0UmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMuaW5wdXRSZWYgPSByZWY7XG4gICAgfTtcblxuICAgIF90aGlzLmNhY2hlQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChjb21wb25lbnRzKSB7XG4gICAgICBfdGhpcy5jb21wb25lbnRzID0gZGVmYXVsdENvbXBvbmVudHMoe1xuICAgICAgICBjb21wb25lbnRzOiBjb21wb25lbnRzXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZm9jdXMgPSBfdGhpcy5mb2N1c0lucHV0O1xuICAgIF90aGlzLmJsdXIgPSBfdGhpcy5ibHVySW5wdXQ7XG5cbiAgICBfdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfdGhpcyRwcm9wcy5vbkNoYW5nZSxcbiAgICAgICAgICBuYW1lID0gX3RoaXMkcHJvcHMubmFtZTtcbiAgICAgIG9uQ2hhbmdlKG5ld1ZhbHVlLCBfZXh0ZW5kcyQ0KHt9LCBhY3Rpb25NZXRhLCB7XG4gICAgICAgIG5hbWU6IG5hbWVcbiAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAobmV3VmFsdWUsIGFjdGlvbiwgb3B0aW9uKSB7XG4gICAgICBpZiAoYWN0aW9uID09PSB2b2lkIDApIHtcbiAgICAgICAgYWN0aW9uID0gJ3NldC12YWx1ZSc7XG4gICAgICB9XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbG9zZU1lbnVPblNlbGVjdCA9IF90aGlzJHByb3BzMi5jbG9zZU1lbnVPblNlbGVjdCxcbiAgICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHMyLmlzTXVsdGk7XG5cbiAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UoJycsIHtcbiAgICAgICAgYWN0aW9uOiAnc2V0LXZhbHVlJ1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChjbG9zZU1lbnVPblNlbGVjdCkge1xuICAgICAgICBfdGhpcy5pbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUgPSAhaXNNdWx0aTtcblxuICAgICAgICBfdGhpcy5vbk1lbnVDbG9zZSgpO1xuICAgICAgfSAvLyB3aGVuIHRoZSBzZWxlY3QgdmFsdWUgc2hvdWxkIGNoYW5nZSwgd2Ugc2hvdWxkIHJlc2V0IGZvY3VzZWRWYWx1ZVxuXG5cbiAgICAgIF90aGlzLmNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlID0gdHJ1ZTtcblxuICAgICAgX3RoaXMub25DaGFuZ2UobmV3VmFsdWUsIHtcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIG9wdGlvbjogb3B0aW9uXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2VsZWN0T3B0aW9uID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgYmx1cklucHV0T25TZWxlY3QgPSBfdGhpcyRwcm9wczMuYmx1cklucHV0T25TZWxlY3QsXG4gICAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzMy5pc011bHRpO1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gX3RoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG5cbiAgICAgIGlmIChpc011bHRpKSB7XG4gICAgICAgIGlmIChfdGhpcy5pc09wdGlvblNlbGVjdGVkKG5ld1ZhbHVlLCBzZWxlY3RWYWx1ZSkpIHtcbiAgICAgICAgICB2YXIgY2FuZGlkYXRlID0gX3RoaXMuZ2V0T3B0aW9uVmFsdWUobmV3VmFsdWUpO1xuXG4gICAgICAgICAgX3RoaXMuc2V0VmFsdWUoc2VsZWN0VmFsdWUuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZ2V0T3B0aW9uVmFsdWUoaSkgIT09IGNhbmRpZGF0ZTtcbiAgICAgICAgICB9KSwgJ2Rlc2VsZWN0LW9wdGlvbicsIG5ld1ZhbHVlKTtcblxuICAgICAgICAgIF90aGlzLmFubm91bmNlQXJpYUxpdmVTZWxlY3Rpb24oe1xuICAgICAgICAgICAgZXZlbnQ6ICdkZXNlbGVjdC1vcHRpb24nLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3RoaXMuZ2V0T3B0aW9uTGFiZWwobmV3VmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCFfdGhpcy5pc09wdGlvbkRpc2FibGVkKG5ld1ZhbHVlLCBzZWxlY3RWYWx1ZSkpIHtcbiAgICAgICAgICAgIF90aGlzLnNldFZhbHVlKFtdLmNvbmNhdChzZWxlY3RWYWx1ZSwgW25ld1ZhbHVlXSksICdzZWxlY3Qtb3B0aW9uJywgbmV3VmFsdWUpO1xuXG4gICAgICAgICAgICBfdGhpcy5hbm5vdW5jZUFyaWFMaXZlU2VsZWN0aW9uKHtcbiAgICAgICAgICAgICAgZXZlbnQ6ICdzZWxlY3Qtb3B0aW9uJyxcbiAgICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdGhpcy5nZXRPcHRpb25MYWJlbChuZXdWYWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFubm91bmNlIHRoYXQgb3B0aW9uIGlzIGRpc2FibGVkXG4gICAgICAgICAgICBfdGhpcy5hbm5vdW5jZUFyaWFMaXZlU2VsZWN0aW9uKHtcbiAgICAgICAgICAgICAgZXZlbnQ6ICdzZWxlY3Qtb3B0aW9uJyxcbiAgICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdGhpcy5nZXRPcHRpb25MYWJlbChuZXdWYWx1ZSksXG4gICAgICAgICAgICAgICAgaXNEaXNhYmxlZDogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghX3RoaXMuaXNPcHRpb25EaXNhYmxlZChuZXdWYWx1ZSwgc2VsZWN0VmFsdWUpKSB7XG4gICAgICAgICAgX3RoaXMuc2V0VmFsdWUobmV3VmFsdWUsICdzZWxlY3Qtb3B0aW9uJyk7XG5cbiAgICAgICAgICBfdGhpcy5hbm5vdW5jZUFyaWFMaXZlU2VsZWN0aW9uKHtcbiAgICAgICAgICAgIGV2ZW50OiAnc2VsZWN0LW9wdGlvbicsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdGhpcy5nZXRPcHRpb25MYWJlbChuZXdWYWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBhbm5vdW5jZSB0aGF0IG9wdGlvbiBpcyBkaXNhYmxlZFxuICAgICAgICAgIF90aGlzLmFubm91bmNlQXJpYUxpdmVTZWxlY3Rpb24oe1xuICAgICAgICAgICAgZXZlbnQ6ICdzZWxlY3Qtb3B0aW9uJyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF90aGlzLmdldE9wdGlvbkxhYmVsKG5ld1ZhbHVlKSxcbiAgICAgICAgICAgICAgaXNEaXNhYmxlZDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChibHVySW5wdXRPblNlbGVjdCkge1xuICAgICAgICBfdGhpcy5ibHVySW5wdXQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMucmVtb3ZlVmFsdWUgPSBmdW5jdGlvbiAocmVtb3ZlZFZhbHVlKSB7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcblxuICAgICAgdmFyIGNhbmRpZGF0ZSA9IF90aGlzLmdldE9wdGlvblZhbHVlKHJlbW92ZWRWYWx1ZSk7XG5cbiAgICAgIHZhciBuZXdWYWx1ZSA9IHNlbGVjdFZhbHVlLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuZ2V0T3B0aW9uVmFsdWUoaSkgIT09IGNhbmRpZGF0ZTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5vbkNoYW5nZShuZXdWYWx1ZS5sZW5ndGggPyBuZXdWYWx1ZSA6IG51bGwsIHtcbiAgICAgICAgYWN0aW9uOiAncmVtb3ZlLXZhbHVlJyxcbiAgICAgICAgcmVtb3ZlZFZhbHVlOiByZW1vdmVkVmFsdWVcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5hbm5vdW5jZUFyaWFMaXZlU2VsZWN0aW9uKHtcbiAgICAgICAgZXZlbnQ6ICdyZW1vdmUtdmFsdWUnLFxuICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgdmFsdWU6IHJlbW92ZWRWYWx1ZSA/IF90aGlzLmdldE9wdGlvbkxhYmVsKHJlbW92ZWRWYWx1ZSkgOiAnJ1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMuZm9jdXNJbnB1dCgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5jbGVhclZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlzTXVsdGkgPSBfdGhpcy5wcm9wcy5pc011bHRpO1xuXG4gICAgICBfdGhpcy5vbkNoYW5nZShpc011bHRpID8gW10gOiBudWxsLCB7XG4gICAgICAgIGFjdGlvbjogJ2NsZWFyJ1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLnBvcFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gX3RoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgICB2YXIgbGFzdFNlbGVjdGVkVmFsdWUgPSBzZWxlY3RWYWx1ZVtzZWxlY3RWYWx1ZS5sZW5ndGggLSAxXTtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IHNlbGVjdFZhbHVlLnNsaWNlKDAsIHNlbGVjdFZhbHVlLmxlbmd0aCAtIDEpO1xuXG4gICAgICBfdGhpcy5hbm5vdW5jZUFyaWFMaXZlU2VsZWN0aW9uKHtcbiAgICAgICAgZXZlbnQ6ICdwb3AtdmFsdWUnLFxuICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgdmFsdWU6IGxhc3RTZWxlY3RlZFZhbHVlID8gX3RoaXMuZ2V0T3B0aW9uTGFiZWwobGFzdFNlbGVjdGVkVmFsdWUpIDogJydcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlLmxlbmd0aCA/IG5ld1ZhbHVlIDogbnVsbCwge1xuICAgICAgICBhY3Rpb246ICdwb3AtdmFsdWUnLFxuICAgICAgICByZW1vdmVkVmFsdWU6IGxhc3RTZWxlY3RlZFZhbHVlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0T3B0aW9uTGFiZWwgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLmdldE9wdGlvbkxhYmVsKGRhdGEpO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRPcHRpb25WYWx1ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMuZ2V0T3B0aW9uVmFsdWUoZGF0YSk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldFN0eWxlcyA9IGZ1bmN0aW9uIChrZXksIHByb3BzKSB7XG4gICAgICB2YXIgYmFzZSA9IGRlZmF1bHRTdHlsZXNba2V5XShwcm9wcyk7XG4gICAgICBiYXNlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcbiAgICAgIHZhciBjdXN0b20gPSBfdGhpcy5wcm9wcy5zdHlsZXNba2V5XTtcbiAgICAgIHJldHVybiBjdXN0b20gPyBjdXN0b20oYmFzZSwgcHJvcHMpIDogYmFzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0RWxlbWVudElkID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5pbnN0YW5jZVByZWZpeCArIFwiLVwiICsgZWxlbWVudDtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0QWN0aXZlRGVzY2VuZGVudElkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG1lbnVJc09wZW4gPSBfdGhpcy5wcm9wcy5tZW51SXNPcGVuO1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgbWVudU9wdGlvbnMgPSBfdGhpcyRzdGF0ZS5tZW51T3B0aW9ucyxcbiAgICAgICAgICBmb2N1c2VkT3B0aW9uID0gX3RoaXMkc3RhdGUuZm9jdXNlZE9wdGlvbjtcbiAgICAgIGlmICghZm9jdXNlZE9wdGlvbiB8fCAhbWVudUlzT3BlbikgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIHZhciBpbmRleCA9IG1lbnVPcHRpb25zLmZvY3VzYWJsZS5pbmRleE9mKGZvY3VzZWRPcHRpb24pO1xuICAgICAgdmFyIG9wdGlvbiA9IG1lbnVPcHRpb25zLnJlbmRlcltpbmRleF07XG4gICAgICByZXR1cm4gb3B0aW9uICYmIG9wdGlvbi5rZXk7XG4gICAgfTtcblxuICAgIF90aGlzLmFubm91bmNlQXJpYUxpdmVTZWxlY3Rpb24gPSBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciBldmVudCA9IF9yZWYyLmV2ZW50LFxuICAgICAgICAgIGNvbnRleHQgPSBfcmVmMi5jb250ZXh0O1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFyaWFMaXZlU2VsZWN0aW9uOiB2YWx1ZUV2ZW50QXJpYU1lc3NhZ2UoZXZlbnQsIGNvbnRleHQpXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYW5ub3VuY2VBcmlhTGl2ZUNvbnRleHQgPSBmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgIHZhciBldmVudCA9IF9yZWYzLmV2ZW50LFxuICAgICAgICAgIGNvbnRleHQgPSBfcmVmMy5jb250ZXh0O1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFyaWFMaXZlQ29udGV4dDogaW5zdHJ1Y3Rpb25zQXJpYU1lc3NhZ2UoZXZlbnQsIF9leHRlbmRzJDQoe30sIGNvbnRleHQsIHtcbiAgICAgICAgICBsYWJlbDogX3RoaXMucHJvcHNbJ2FyaWEtbGFiZWwnXVxuICAgICAgICB9KSlcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbk1lbnVNb3VzZURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIF90aGlzLmZvY3VzSW5wdXQoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25NZW51TW91c2VNb3ZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5ibG9ja09wdGlvbkhvdmVyID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF90aGlzLm9uQ29udHJvbE1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIG9wZW5NZW51T25DbGljayA9IF90aGlzLnByb3BzLm9wZW5NZW51T25DbGljaztcblxuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5pc0ZvY3VzZWQpIHtcbiAgICAgICAgaWYgKG9wZW5NZW51T25DbGljaykge1xuICAgICAgICAgIF90aGlzLm9wZW5BZnRlckZvY3VzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgIH0gZWxzZSBpZiAoIV90aGlzLnByb3BzLm1lbnVJc09wZW4pIHtcbiAgICAgICAgaWYgKG9wZW5NZW51T25DbGljaykge1xuICAgICAgICAgIF90aGlzLm9wZW5NZW51KCdmaXJzdCcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIC8vICRGbG93Rml4TWVcbiAgICAgICAgZXZlbnQudGFyZ2V0LnRhZ05hbWUgIT09ICdJTlBVVCcgJiYgZXZlbnQudGFyZ2V0LnRhZ05hbWUgIT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgICBfdGhpcy5vbk1lbnVDbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICggLy8gJEZsb3dGaXhNZVxuICAgICAgZXZlbnQudGFyZ2V0LnRhZ05hbWUgIT09ICdJTlBVVCcgJiYgZXZlbnQudGFyZ2V0LnRhZ05hbWUgIT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25Ecm9wZG93bkluZGljYXRvck1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gaWdub3JlIG1vdXNlIGV2ZW50cyB0aGF0IHdlcmVuJ3QgdHJpZ2dlcmVkIGJ5IHRoZSBwcmltYXJ5IGJ1dHRvblxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5pc0Rpc2FibGVkKSByZXR1cm47XG4gICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzNC5pc011bHRpLFxuICAgICAgICAgIG1lbnVJc09wZW4gPSBfdGhpcyRwcm9wczQubWVudUlzT3BlbjtcblxuICAgICAgX3RoaXMuZm9jdXNJbnB1dCgpO1xuXG4gICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICBfdGhpcy5pbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUgPSAhaXNNdWx0aTtcblxuICAgICAgICBfdGhpcy5vbk1lbnVDbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMub3Blbk1lbnUoJ2ZpcnN0Jyk7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25DbGVhckluZGljYXRvck1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gaWdub3JlIG1vdXNlIGV2ZW50cyB0aGF0IHdlcmVuJ3QgdHJpZ2dlcmVkIGJ5IHRoZSBwcmltYXJ5IGJ1dHRvblxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmNsZWFyVmFsdWUoKTtcblxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBfdGhpcy5vcGVuQWZ0ZXJGb2N1cyA9IGZhbHNlO1xuXG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNoZW5kJykge1xuICAgICAgICBfdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25TY3JvbGwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgX3RoaXMucHJvcHMuY2xvc2VNZW51T25TY3JvbGwgPT09ICdib29sZWFuJykge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgaXNEb2N1bWVudEVsZW1lbnQoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uTWVudUNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIF90aGlzLnByb3BzLmNsb3NlTWVudU9uU2Nyb2xsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5jbG9zZU1lbnVPblNjcm9sbChldmVudCkpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbk1lbnVDbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uQ29tcG9zaXRpb25TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmlzQ29tcG9zaW5nID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Db21wb3NpdGlvbkVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmlzQ29tcG9zaW5nID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF90aGlzLm9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChfcmVmNCkge1xuICAgICAgdmFyIHRvdWNoZXMgPSBfcmVmNC50b3VjaGVzO1xuICAgICAgdmFyIHRvdWNoID0gdG91Y2hlcy5pdGVtKDApO1xuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuaW5pdGlhbFRvdWNoWCA9IHRvdWNoLmNsaWVudFg7XG4gICAgICBfdGhpcy5pbml0aWFsVG91Y2hZID0gdG91Y2guY2xpZW50WTtcbiAgICAgIF90aGlzLnVzZXJJc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF90aGlzLm9uVG91Y2hNb3ZlID0gZnVuY3Rpb24gKF9yZWY1KSB7XG4gICAgICB2YXIgdG91Y2hlcyA9IF9yZWY1LnRvdWNoZXM7XG4gICAgICB2YXIgdG91Y2ggPSB0b3VjaGVzLml0ZW0oMCk7XG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGVsdGFYID0gTWF0aC5hYnModG91Y2guY2xpZW50WCAtIF90aGlzLmluaXRpYWxUb3VjaFgpO1xuICAgICAgdmFyIGRlbHRhWSA9IE1hdGguYWJzKHRvdWNoLmNsaWVudFkgLSBfdGhpcy5pbml0aWFsVG91Y2hZKTtcbiAgICAgIHZhciBtb3ZlVGhyZXNob2xkID0gNTtcbiAgICAgIF90aGlzLnVzZXJJc0RyYWdnaW5nID0gZGVsdGFYID4gbW92ZVRocmVzaG9sZCB8fCBkZWx0YVkgPiBtb3ZlVGhyZXNob2xkO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMudXNlcklzRHJhZ2dpbmcpIHJldHVybjsgLy8gY2xvc2UgdGhlIG1lbnUgaWYgdGhlIHVzZXIgdGFwcyBvdXRzaWRlXG4gICAgICAvLyB3ZSdyZSBjaGVja2luZyBvbiBldmVudC50YXJnZXQgaGVyZSBpbnN0ZWFkIG9mIGV2ZW50LmN1cnJlbnRUYXJnZXQsIGJlY2F1c2Ugd2Ugd2FudCB0byBhc3NlcnQgaW5mb3JtYXRpb25cbiAgICAgIC8vIG9uIGV2ZW50cyBvbiBjaGlsZCBlbGVtZW50cywgbm90IHRoZSBkb2N1bWVudCAod2hpY2ggd2UndmUgYXR0YWNoZWQgdGhpcyBoYW5kbGVyIHRvKS5cblxuICAgICAgaWYgKF90aGlzLmNvbnRyb2xSZWYgJiYgIV90aGlzLmNvbnRyb2xSZWYuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiBfdGhpcy5tZW51TGlzdFJlZiAmJiAhX3RoaXMubWVudUxpc3RSZWYuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICBfdGhpcy5ibHVySW5wdXQoKTtcbiAgICAgIH0gLy8gcmVzZXQgbW92ZSB2YXJzXG5cblxuICAgICAgX3RoaXMuaW5pdGlhbFRvdWNoWCA9IDA7XG4gICAgICBfdGhpcy5pbml0aWFsVG91Y2hZID0gMDtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Db250cm9sVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy51c2VySXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5vbkNvbnRyb2xNb3VzZURvd24oZXZlbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNsZWFySW5kaWNhdG9yVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy51c2VySXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5vbkNsZWFySW5kaWNhdG9yTW91c2VEb3duKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Ecm9wZG93bkluZGljYXRvclRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMudXNlcklzRHJhZ2dpbmcpIHJldHVybjtcblxuICAgICAgX3RoaXMub25Ecm9wZG93bkluZGljYXRvck1vdXNlRG93bihldmVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICBfdGhpcy5pbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUgPSBmYWxzZTtcblxuICAgICAgX3RoaXMub25JbnB1dENoYW5nZShpbnB1dFZhbHVlLCB7XG4gICAgICAgIGFjdGlvbjogJ2lucHV0LWNoYW5nZSdcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5vbk1lbnVPcGVuKCk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uSW5wdXRGb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGlzU2VhcmNoYWJsZSA9IF90aGlzJHByb3BzNS5pc1NlYXJjaGFibGUsXG4gICAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzNS5pc011bHRpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlID0gZmFsc2U7XG5cbiAgICAgIF90aGlzLmFubm91bmNlQXJpYUxpdmVDb250ZXh0KHtcbiAgICAgICAgZXZlbnQ6ICdpbnB1dCcsXG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICBpc1NlYXJjaGFibGU6IGlzU2VhcmNoYWJsZSxcbiAgICAgICAgICBpc011bHRpOiBpc011bHRpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzRm9jdXNlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChfdGhpcy5vcGVuQWZ0ZXJGb2N1cyB8fCBfdGhpcy5wcm9wcy5vcGVuTWVudU9uRm9jdXMpIHtcbiAgICAgICAgX3RoaXMub3Blbk1lbnUoJ2ZpcnN0Jyk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLm9wZW5BZnRlckZvY3VzID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF90aGlzLm9uSW5wdXRCbHVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMubWVudUxpc3RSZWYgJiYgX3RoaXMubWVudUxpc3RSZWYuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgX3RoaXMuaW5wdXRSZWYuZm9jdXMoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25CbHVyKGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMub25JbnB1dENoYW5nZSgnJywge1xuICAgICAgICBhY3Rpb246ICdpbnB1dC1ibHVyJ1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLm9uTWVudUNsb3NlKCk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZFZhbHVlOiBudWxsLFxuICAgICAgICBpc0ZvY3VzZWQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25PcHRpb25Ib3ZlciA9IGZ1bmN0aW9uIChmb2N1c2VkT3B0aW9uKSB7XG4gICAgICBpZiAoX3RoaXMuYmxvY2tPcHRpb25Ib3ZlciB8fCBfdGhpcy5zdGF0ZS5mb2N1c2VkT3B0aW9uID09PSBmb2N1c2VkT3B0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkT3B0aW9uOiBmb2N1c2VkT3B0aW9uXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2hvdWxkSGlkZVNlbGVjdGVkT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczYgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBoaWRlU2VsZWN0ZWRPcHRpb25zID0gX3RoaXMkcHJvcHM2LmhpZGVTZWxlY3RlZE9wdGlvbnMsXG4gICAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzNi5pc011bHRpO1xuICAgICAgaWYgKGhpZGVTZWxlY3RlZE9wdGlvbnMgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGlzTXVsdGk7XG4gICAgICByZXR1cm4gaGlkZVNlbGVjdGVkT3B0aW9ucztcbiAgICB9O1xuXG4gICAgX3RoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM3ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzNy5pc011bHRpLFxuICAgICAgICAgIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZSA9IF90aGlzJHByb3BzNy5iYWNrc3BhY2VSZW1vdmVzVmFsdWUsXG4gICAgICAgICAgZXNjYXBlQ2xlYXJzVmFsdWUgPSBfdGhpcyRwcm9wczcuZXNjYXBlQ2xlYXJzVmFsdWUsXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzNy5pbnB1dFZhbHVlLFxuICAgICAgICAgIGlzQ2xlYXJhYmxlID0gX3RoaXMkcHJvcHM3LmlzQ2xlYXJhYmxlLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczcuaXNEaXNhYmxlZCxcbiAgICAgICAgICBtZW51SXNPcGVuID0gX3RoaXMkcHJvcHM3Lm1lbnVJc09wZW4sXG4gICAgICAgICAgb25LZXlEb3duID0gX3RoaXMkcHJvcHM3Lm9uS2V5RG93bixcbiAgICAgICAgICB0YWJTZWxlY3RzVmFsdWUgPSBfdGhpcyRwcm9wczcudGFiU2VsZWN0c1ZhbHVlLFxuICAgICAgICAgIG9wZW5NZW51T25Gb2N1cyA9IF90aGlzJHByb3BzNy5vcGVuTWVudU9uRm9jdXM7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUyID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgZm9jdXNlZE9wdGlvbiA9IF90aGlzJHN0YXRlMi5mb2N1c2VkT3B0aW9uLFxuICAgICAgICAgIGZvY3VzZWRWYWx1ZSA9IF90aGlzJHN0YXRlMi5mb2N1c2VkVmFsdWUsXG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBfdGhpcyRzdGF0ZTIuc2VsZWN0VmFsdWU7XG4gICAgICBpZiAoaXNEaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgICBpZiAodHlwZW9mIG9uS2V5RG93biA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbktleURvd24oZXZlbnQpO1xuXG4gICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IC8vIEJsb2NrIG9wdGlvbiBob3ZlciBldmVudHMgd2hlbiB0aGUgdXNlciBoYXMganVzdCBwcmVzc2VkIGEga2V5XG5cblxuICAgICAgX3RoaXMuYmxvY2tPcHRpb25Ib3ZlciA9IHRydWU7XG5cbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgaWYgKCFpc011bHRpIHx8IGlucHV0VmFsdWUpIHJldHVybjtcblxuICAgICAgICAgIF90aGlzLmZvY3VzVmFsdWUoJ3ByZXZpb3VzJyk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICBpZiAoIWlzTXVsdGkgfHwgaW5wdXRWYWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgX3RoaXMuZm9jdXNWYWx1ZSgnbmV4dCcpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnRGVsZXRlJzpcbiAgICAgICAgY2FzZSAnQmFja3NwYWNlJzpcbiAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgaWYgKGZvY3VzZWRWYWx1ZSkge1xuICAgICAgICAgICAgX3RoaXMucmVtb3ZlVmFsdWUoZm9jdXNlZFZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFiYWNrc3BhY2VSZW1vdmVzVmFsdWUpIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgICAgICAgX3RoaXMucG9wVmFsdWUoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNDbGVhcmFibGUpIHtcbiAgICAgICAgICAgICAgX3RoaXMuY2xlYXJWYWx1ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgICAgaWYgKF90aGlzLmlzQ29tcG9zaW5nKSByZXR1cm47XG5cbiAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkgfHwgIW1lbnVJc09wZW4gfHwgIXRhYlNlbGVjdHNWYWx1ZSB8fCAhZm9jdXNlZE9wdGlvbiB8fCAvLyBkb24ndCBjYXB0dXJlIHRoZSBldmVudCBpZiB0aGUgbWVudSBvcGVucyBvbiBmb2N1cyBhbmQgdGhlIGZvY3VzZWRcbiAgICAgICAgICAvLyBvcHRpb24gaXMgYWxyZWFkeSBzZWxlY3RlZDsgaXQgYnJlYWtzIHRoZSBmbG93IG9mIG5hdmlnYXRpb25cbiAgICAgICAgICBvcGVuTWVudU9uRm9jdXMgJiYgX3RoaXMuaXNPcHRpb25TZWxlY3RlZChmb2N1c2VkT3B0aW9uLCBzZWxlY3RWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpcy5zZWxlY3RPcHRpb24oZm9jdXNlZE9wdGlvbik7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDIyOSkge1xuICAgICAgICAgICAgLy8gaWdub3JlIHRoZSBrZXlkb3duIGV2ZW50IGZyb20gYW4gSW5wdXQgTWV0aG9kIEVkaXRvcihJTUUpXG4gICAgICAgICAgICAvLyByZWYuIGh0dHBzOi8vd3d3LnczLm9yZy9UUi91aWV2ZW50cy8jZGV0ZXJtaW5lLWtleWRvd24ta2V5dXAta2V5Q29kZVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICAgIGlmICghZm9jdXNlZE9wdGlvbikgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKF90aGlzLmlzQ29tcG9zaW5nKSByZXR1cm47XG5cbiAgICAgICAgICAgIF90aGlzLnNlbGVjdE9wdGlvbihmb2N1c2VkT3B0aW9uKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICAgIF90aGlzLmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBfdGhpcy5vbklucHV0Q2hhbmdlKCcnLCB7XG4gICAgICAgICAgICAgIGFjdGlvbjogJ21lbnUtY2xvc2UnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgX3RoaXMub25NZW51Q2xvc2UoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ2xlYXJhYmxlICYmIGVzY2FwZUNsZWFyc1ZhbHVlKSB7XG4gICAgICAgICAgICBfdGhpcy5jbGVhclZhbHVlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgLy8gc3BhY2VcbiAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghbWVudUlzT3Blbikge1xuICAgICAgICAgICAgX3RoaXMub3Blbk1lbnUoJ2ZpcnN0Jyk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZm9jdXNlZE9wdGlvbikgcmV0dXJuO1xuXG4gICAgICAgICAgX3RoaXMuc2VsZWN0T3B0aW9uKGZvY3VzZWRPcHRpb24pO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICAgIF90aGlzLmZvY3VzT3B0aW9uKCd1cCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5vcGVuTWVudSgnbGFzdCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICAgIF90aGlzLmZvY3VzT3B0aW9uKCdkb3duJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLm9wZW5NZW51KCdmaXJzdCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1BhZ2VVcCc6XG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbigncGFnZXVwJyk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdQYWdlRG93bic6XG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbigncGFnZWRvd24nKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgIGlmICghbWVudUlzT3BlbikgcmV0dXJuO1xuXG4gICAgICAgICAgX3RoaXMuZm9jdXNPcHRpb24oJ2ZpcnN0Jyk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdFbmQnOlxuICAgICAgICAgIGlmICghbWVudUlzT3BlbikgcmV0dXJuO1xuXG4gICAgICAgICAgX3RoaXMuZm9jdXNPcHRpb24oJ2xhc3QnKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5idWlsZE1lbnVPcHRpb25zID0gZnVuY3Rpb24gKHByb3BzLCBzZWxlY3RWYWx1ZSkge1xuICAgICAgdmFyIF9wcm9wcyRpbnB1dFZhbHVlID0gcHJvcHMuaW5wdXRWYWx1ZSxcbiAgICAgICAgICBpbnB1dFZhbHVlID0gX3Byb3BzJGlucHV0VmFsdWUgPT09IHZvaWQgMCA/ICcnIDogX3Byb3BzJGlucHV0VmFsdWUsXG4gICAgICAgICAgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnM7XG5cbiAgICAgIHZhciB0b09wdGlvbiA9IGZ1bmN0aW9uIHRvT3B0aW9uKG9wdGlvbiwgaWQpIHtcbiAgICAgICAgdmFyIGlzRGlzYWJsZWQgPSBfdGhpcy5pc09wdGlvbkRpc2FibGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpO1xuXG4gICAgICAgIHZhciBpc1NlbGVjdGVkID0gX3RoaXMuaXNPcHRpb25TZWxlY3RlZChvcHRpb24sIHNlbGVjdFZhbHVlKTtcblxuICAgICAgICB2YXIgbGFiZWwgPSBfdGhpcy5nZXRPcHRpb25MYWJlbChvcHRpb24pO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IF90aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbik7XG5cbiAgICAgICAgaWYgKF90aGlzLnNob3VsZEhpZGVTZWxlY3RlZE9wdGlvbnMoKSAmJiBpc1NlbGVjdGVkIHx8ICFfdGhpcy5maWx0ZXJPcHRpb24oe1xuICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZGF0YTogb3B0aW9uXG4gICAgICAgIH0sIGlucHV0VmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9uSG92ZXIgPSBpc0Rpc2FibGVkID8gdW5kZWZpbmVkIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5vbk9wdGlvbkhvdmVyKG9wdGlvbik7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvblNlbGVjdCA9IGlzRGlzYWJsZWQgPyB1bmRlZmluZWQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3B0aW9uSWQgPSBfdGhpcy5nZXRFbGVtZW50SWQoJ29wdGlvbicpICsgXCItXCIgKyBpZDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpbm5lclByb3BzOiB7XG4gICAgICAgICAgICBpZDogb3B0aW9uSWQsXG4gICAgICAgICAgICBvbkNsaWNrOiBvblNlbGVjdCxcbiAgICAgICAgICAgIG9uTW91c2VNb3ZlOiBvbkhvdmVyLFxuICAgICAgICAgICAgb25Nb3VzZU92ZXI6IG9uSG92ZXIsXG4gICAgICAgICAgICB0YWJJbmRleDogLTFcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGE6IG9wdGlvbixcbiAgICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWQsXG4gICAgICAgICAga2V5OiBvcHRpb25JZCxcbiAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgdHlwZTogJ29wdGlvbicsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gb3B0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgaXRlbSwgaXRlbUluZGV4KSB7XG4gICAgICAgIGlmIChpdGVtLm9wdGlvbnMpIHtcbiAgICAgICAgICAvLyBUT0RPIG5lZWRzIGEgdGlkaWVyIGltcGxlbWVudGF0aW9uXG4gICAgICAgICAgaWYgKCFfdGhpcy5oYXNHcm91cHMpIF90aGlzLmhhc0dyb3VwcyA9IHRydWU7XG4gICAgICAgICAgdmFyIGl0ZW1zID0gaXRlbS5vcHRpb25zO1xuICAgICAgICAgIHZhciBjaGlsZHJlbiA9IGl0ZW1zLm1hcChmdW5jdGlvbiAoY2hpbGQsIGkpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb24gPSB0b09wdGlvbihjaGlsZCwgaXRlbUluZGV4ICsgXCItXCIgKyBpKTtcbiAgICAgICAgICAgIGlmIChvcHRpb24pIGFjYy5mb2N1c2FibGUucHVzaChjaGlsZCk7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgICAgIH0pLmZpbHRlcihCb29sZWFuKTtcblxuICAgICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBncm91cElkID0gX3RoaXMuZ2V0RWxlbWVudElkKCdncm91cCcpICsgXCItXCIgKyBpdGVtSW5kZXg7XG4gICAgICAgICAgICBhY2MucmVuZGVyLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiAnZ3JvdXAnLFxuICAgICAgICAgICAgICBrZXk6IGdyb3VwSWQsXG4gICAgICAgICAgICAgIGRhdGE6IGl0ZW0sXG4gICAgICAgICAgICAgIG9wdGlvbnM6IGNoaWxkcmVuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG9wdGlvbiA9IHRvT3B0aW9uKGl0ZW0sIFwiXCIgKyBpdGVtSW5kZXgpO1xuXG4gICAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgYWNjLnJlbmRlci5wdXNoKG9wdGlvbik7XG4gICAgICAgICAgICBhY2MuZm9jdXNhYmxlLnB1c2goaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHtcbiAgICAgICAgcmVuZGVyOiBbXSxcbiAgICAgICAgZm9jdXNhYmxlOiBbXVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBfdmFsdWUgPSBfcHJvcHMudmFsdWU7XG4gICAgX3RoaXMuY2FjaGVDb21wb25lbnRzID0gbWVtb2l6ZU9uZShfdGhpcy5jYWNoZUNvbXBvbmVudHMsIGV4cG9ydGVkRXF1YWwpLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xuXG4gICAgX3RoaXMuY2FjaGVDb21wb25lbnRzKF9wcm9wcy5jb21wb25lbnRzKTtcblxuICAgIF90aGlzLmluc3RhbmNlUHJlZml4ID0gJ3JlYWN0LXNlbGVjdC0nICsgKF90aGlzLnByb3BzLmluc3RhbmNlSWQgfHwgKytpbnN0YW5jZUlkKTtcblxuICAgIHZhciBfc2VsZWN0VmFsdWUgPSBjbGVhblZhbHVlKF92YWx1ZSk7XG5cbiAgICBfdGhpcy5idWlsZE1lbnVPcHRpb25zID0gbWVtb2l6ZU9uZShfdGhpcy5idWlsZE1lbnVPcHRpb25zLCBmdW5jdGlvbiAobmV3QXJncywgbGFzdEFyZ3MpIHtcbiAgICAgIHZhciBfcmVmNiA9IG5ld0FyZ3MsXG4gICAgICAgICAgbmV3UHJvcHMgPSBfcmVmNlswXSxcbiAgICAgICAgICBuZXdTZWxlY3RWYWx1ZSA9IF9yZWY2WzFdO1xuICAgICAgdmFyIF9yZWY3ID0gbGFzdEFyZ3MsXG4gICAgICAgICAgbGFzdFByb3BzID0gX3JlZjdbMF0sXG4gICAgICAgICAgbGFzdFNlbGVjdFZhbHVlID0gX3JlZjdbMV07XG4gICAgICByZXR1cm4gZXhwb3J0ZWRFcXVhbChuZXdTZWxlY3RWYWx1ZSwgbGFzdFNlbGVjdFZhbHVlKSAmJiBleHBvcnRlZEVxdWFsKG5ld1Byb3BzLmlucHV0VmFsdWUsIGxhc3RQcm9wcy5pbnB1dFZhbHVlKSAmJiBleHBvcnRlZEVxdWFsKG5ld1Byb3BzLm9wdGlvbnMsIGxhc3RQcm9wcy5vcHRpb25zKTtcbiAgICB9KS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcblxuICAgIHZhciBfbWVudU9wdGlvbnMgPSBfcHJvcHMubWVudUlzT3BlbiA/IF90aGlzLmJ1aWxkTWVudU9wdGlvbnMoX3Byb3BzLCBfc2VsZWN0VmFsdWUpIDoge1xuICAgICAgcmVuZGVyOiBbXSxcbiAgICAgIGZvY3VzYWJsZTogW11cbiAgICB9O1xuXG4gICAgX3RoaXMuc3RhdGUubWVudU9wdGlvbnMgPSBfbWVudU9wdGlvbnM7XG4gICAgX3RoaXMuc3RhdGUuc2VsZWN0VmFsdWUgPSBfc2VsZWN0VmFsdWU7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNlbGVjdC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zdGFydExpc3RlbmluZ0NvbXBvc2l0aW9uKCk7XG4gICAgdGhpcy5zdGFydExpc3RlbmluZ1RvVG91Y2goKTtcblxuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlTWVudU9uU2Nyb2xsICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIC8vIExpc3RlbiB0byBhbGwgc2Nyb2xsIGV2ZW50cywgYW5kIGZpbHRlciB0aGVtIG91dCBpbnNpZGUgb2YgJ29uU2Nyb2xsJ1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuYXV0b0ZvY3VzKSB7XG4gICAgICB0aGlzLmZvY3VzSW5wdXQoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIF90aGlzJHByb3BzOCA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9wdGlvbnMgPSBfdGhpcyRwcm9wczgub3B0aW9ucyxcbiAgICAgICAgdmFsdWUgPSBfdGhpcyRwcm9wczgudmFsdWUsXG4gICAgICAgIG1lbnVJc09wZW4gPSBfdGhpcyRwcm9wczgubWVudUlzT3BlbixcbiAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzOC5pbnB1dFZhbHVlOyAvLyByZS1jYWNoZSBjdXN0b20gY29tcG9uZW50c1xuXG4gICAgdGhpcy5jYWNoZUNvbXBvbmVudHMobmV4dFByb3BzLmNvbXBvbmVudHMpOyAvLyByZWJ1aWxkIHRoZSBtZW51IG9wdGlvbnNcblxuICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHZhbHVlIHx8IG5leHRQcm9wcy5vcHRpb25zICE9PSBvcHRpb25zIHx8IG5leHRQcm9wcy5tZW51SXNPcGVuICE9PSBtZW51SXNPcGVuIHx8IG5leHRQcm9wcy5pbnB1dFZhbHVlICE9PSBpbnB1dFZhbHVlKSB7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBjbGVhblZhbHVlKG5leHRQcm9wcy52YWx1ZSk7XG4gICAgICB2YXIgbWVudU9wdGlvbnMgPSBuZXh0UHJvcHMubWVudUlzT3BlbiA/IHRoaXMuYnVpbGRNZW51T3B0aW9ucyhuZXh0UHJvcHMsIHNlbGVjdFZhbHVlKSA6IHtcbiAgICAgICAgcmVuZGVyOiBbXSxcbiAgICAgICAgZm9jdXNhYmxlOiBbXVxuICAgICAgfTtcbiAgICAgIHZhciBmb2N1c2VkVmFsdWUgPSB0aGlzLmdldE5leHRGb2N1c2VkVmFsdWUoc2VsZWN0VmFsdWUpO1xuICAgICAgdmFyIGZvY3VzZWRPcHRpb24gPSB0aGlzLmdldE5leHRGb2N1c2VkT3B0aW9uKG1lbnVPcHRpb25zLmZvY3VzYWJsZSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWVudU9wdGlvbnM6IG1lbnVPcHRpb25zLFxuICAgICAgICBzZWxlY3RWYWx1ZTogc2VsZWN0VmFsdWUsXG4gICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb24sXG4gICAgICAgIGZvY3VzZWRWYWx1ZTogZm9jdXNlZFZhbHVlXG4gICAgICB9KTtcbiAgICB9IC8vIHNvbWUgdXBkYXRlcyBzaG91bGQgdG9nZ2xlIHRoZSBzdGF0ZSBvZiB0aGUgaW5wdXQgdmlzaWJpbGl0eVxuXG5cbiAgICBpZiAodGhpcy5pbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlucHV0SXNIaWRkZW46IHRoaXMuaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlXG4gICAgICB9KTtcbiAgICAgIGRlbGV0ZSB0aGlzLmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHM5ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzOS5pc0Rpc2FibGVkLFxuICAgICAgICBtZW51SXNPcGVuID0gX3RoaXMkcHJvcHM5Lm1lbnVJc09wZW47XG4gICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuXG4gICAgaWYgKCAvLyBlbnN1cmUgZm9jdXMgaXMgcmVzdG9yZWQgY29ycmVjdGx5IHdoZW4gdGhlIGNvbnRyb2wgYmVjb21lcyBlbmFibGVkXG4gICAgaXNGb2N1c2VkICYmICFpc0Rpc2FibGVkICYmIHByZXZQcm9wcy5pc0Rpc2FibGVkIHx8IC8vIGVuc3VyZSBmb2N1cyBpcyBvbiB0aGUgSW5wdXQgd2hlbiB0aGUgbWVudSBvcGVuc1xuICAgIGlzRm9jdXNlZCAmJiBtZW51SXNPcGVuICYmICFwcmV2UHJvcHMubWVudUlzT3Blbikge1xuICAgICAgdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgfSAvLyBzY3JvbGwgdGhlIGZvY3VzZWQgb3B0aW9uIGludG8gdmlldyBpZiBuZWNlc3NhcnlcblxuXG4gICAgaWYgKHRoaXMubWVudUxpc3RSZWYgJiYgdGhpcy5mb2N1c2VkT3B0aW9uUmVmICYmIHRoaXMuc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUpIHtcbiAgICAgIHNjcm9sbEludG9WaWV3KHRoaXMubWVudUxpc3RSZWYsIHRoaXMuZm9jdXNlZE9wdGlvblJlZik7XG4gICAgICB0aGlzLnNjcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuc3RvcExpc3RlbmluZ0NvbXBvc2l0aW9uKCk7XG4gICAgdGhpcy5zdG9wTGlzdGVuaW5nVG9Ub3VjaCgpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIHRydWUpO1xuICB9O1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBDb25zdW1lciBIYW5kbGVyc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgX3Byb3RvLm9uTWVudU9wZW4gPSBmdW5jdGlvbiBvbk1lbnVPcGVuKCkge1xuICAgIHRoaXMucHJvcHMub25NZW51T3BlbigpO1xuICB9O1xuXG4gIF9wcm90by5vbk1lbnVDbG9zZSA9IGZ1bmN0aW9uIG9uTWVudUNsb3NlKCkge1xuICAgIHZhciBfdGhpcyRwcm9wczEwID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaXNTZWFyY2hhYmxlID0gX3RoaXMkcHJvcHMxMC5pc1NlYXJjaGFibGUsXG4gICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczEwLmlzTXVsdGk7XG4gICAgdGhpcy5hbm5vdW5jZUFyaWFMaXZlQ29udGV4dCh7XG4gICAgICBldmVudDogJ2lucHV0JyxcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgaXNTZWFyY2hhYmxlOiBpc1NlYXJjaGFibGUsXG4gICAgICAgIGlzTXVsdGk6IGlzTXVsdGlcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9uSW5wdXRDaGFuZ2UoJycsIHtcbiAgICAgIGFjdGlvbjogJ21lbnUtY2xvc2UnXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5vbk1lbnVDbG9zZSgpO1xuICB9O1xuXG4gIF9wcm90by5vbklucHV0Q2hhbmdlID0gZnVuY3Rpb24gb25JbnB1dENoYW5nZShuZXdWYWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgIHRoaXMucHJvcHMub25JbnB1dENoYW5nZShuZXdWYWx1ZSwgYWN0aW9uTWV0YSk7XG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIDtcblxuICBfcHJvdG8uZm9jdXNJbnB1dCA9IGZ1bmN0aW9uIGZvY3VzSW5wdXQoKSB7XG4gICAgaWYgKCF0aGlzLmlucHV0UmVmKSByZXR1cm47XG4gICAgdGhpcy5pbnB1dFJlZi5mb2N1cygpO1xuICB9O1xuXG4gIF9wcm90by5ibHVySW5wdXQgPSBmdW5jdGlvbiBibHVySW5wdXQoKSB7XG4gICAgaWYgKCF0aGlzLmlucHV0UmVmKSByZXR1cm47XG4gICAgdGhpcy5pbnB1dFJlZi5ibHVyKCk7XG4gIH0gLy8gYWxpYXNlZCBmb3IgY29uc3VtZXJzXG4gIDtcblxuICBfcHJvdG8ub3Blbk1lbnUgPSBmdW5jdGlvbiBvcGVuTWVudShmb2N1c09wdGlvbikge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHN0YXRlMyA9IHRoaXMuc3RhdGUsXG4gICAgICAgIHNlbGVjdFZhbHVlID0gX3RoaXMkc3RhdGUzLnNlbGVjdFZhbHVlLFxuICAgICAgICBpc0ZvY3VzZWQgPSBfdGhpcyRzdGF0ZTMuaXNGb2N1c2VkO1xuICAgIHZhciBtZW51T3B0aW9ucyA9IHRoaXMuYnVpbGRNZW51T3B0aW9ucyh0aGlzLnByb3BzLCBzZWxlY3RWYWx1ZSk7XG4gICAgdmFyIGlzTXVsdGkgPSB0aGlzLnByb3BzLmlzTXVsdGk7XG4gICAgdmFyIG9wZW5BdEluZGV4ID0gZm9jdXNPcHRpb24gPT09ICdmaXJzdCcgPyAwIDogbWVudU9wdGlvbnMuZm9jdXNhYmxlLmxlbmd0aCAtIDE7XG5cbiAgICBpZiAoIWlzTXVsdGkpIHtcbiAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gbWVudU9wdGlvbnMuZm9jdXNhYmxlLmluZGV4T2Yoc2VsZWN0VmFsdWVbMF0pO1xuXG4gICAgICBpZiAoc2VsZWN0ZWRJbmRleCA+IC0xKSB7XG4gICAgICAgIG9wZW5BdEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICAgIH1cbiAgICB9IC8vIG9ubHkgc2Nyb2xsIGlmIHRoZSBtZW51IGlzbid0IGFscmVhZHkgb3BlblxuXG5cbiAgICB0aGlzLnNjcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlID0gIShpc0ZvY3VzZWQgJiYgdGhpcy5tZW51TGlzdFJlZik7XG4gICAgdGhpcy5pbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUgPSBmYWxzZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1lbnVPcHRpb25zOiBtZW51T3B0aW9ucyxcbiAgICAgIGZvY3VzZWRWYWx1ZTogbnVsbCxcbiAgICAgIGZvY3VzZWRPcHRpb246IG1lbnVPcHRpb25zLmZvY3VzYWJsZVtvcGVuQXRJbmRleF1cbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIub25NZW51T3BlbigpO1xuXG4gICAgICBfdGhpczIuYW5ub3VuY2VBcmlhTGl2ZUNvbnRleHQoe1xuICAgICAgICBldmVudDogJ21lbnUnXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZm9jdXNWYWx1ZSA9IGZ1bmN0aW9uIGZvY3VzVmFsdWUoZGlyZWN0aW9uKSB7XG4gICAgdmFyIF90aGlzJHByb3BzMTEgPSB0aGlzLnByb3BzLFxuICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHMxMS5pc011bHRpLFxuICAgICAgICBpc1NlYXJjaGFibGUgPSBfdGhpcyRwcm9wczExLmlzU2VhcmNoYWJsZTtcbiAgICB2YXIgX3RoaXMkc3RhdGU0ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgc2VsZWN0VmFsdWUgPSBfdGhpcyRzdGF0ZTQuc2VsZWN0VmFsdWUsXG4gICAgICAgIGZvY3VzZWRWYWx1ZSA9IF90aGlzJHN0YXRlNC5mb2N1c2VkVmFsdWU7IC8vIE9ubHkgbXVsdGlzZWxlY3RzIHN1cHBvcnQgdmFsdWUgZm9jdXNpbmdcblxuICAgIGlmICghaXNNdWx0aSkgcmV0dXJuO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9jdXNlZE9wdGlvbjogbnVsbFxuICAgIH0pO1xuICAgIHZhciBmb2N1c2VkSW5kZXggPSBzZWxlY3RWYWx1ZS5pbmRleE9mKGZvY3VzZWRWYWx1ZSk7XG5cbiAgICBpZiAoIWZvY3VzZWRWYWx1ZSkge1xuICAgICAgZm9jdXNlZEluZGV4ID0gLTE7XG4gICAgICB0aGlzLmFubm91bmNlQXJpYUxpdmVDb250ZXh0KHtcbiAgICAgICAgZXZlbnQ6ICd2YWx1ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBsYXN0SW5kZXggPSBzZWxlY3RWYWx1ZS5sZW5ndGggLSAxO1xuICAgIHZhciBuZXh0Rm9jdXMgPSAtMTtcbiAgICBpZiAoIXNlbGVjdFZhbHVlLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ3ByZXZpb3VzJzpcbiAgICAgICAgaWYgKGZvY3VzZWRJbmRleCA9PT0gMCkge1xuICAgICAgICAgIC8vIGRvbid0IGN5Y2xlIGZyb20gdGhlIHN0YXJ0IHRvIHRoZSBlbmRcbiAgICAgICAgICBuZXh0Rm9jdXMgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGZvY3VzZWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAvLyBpZiBub3RoaW5nIGlzIGZvY3VzZWQsIGZvY3VzIHRoZSBsYXN0IHZhbHVlIGZpcnN0XG4gICAgICAgICAgbmV4dEZvY3VzID0gbGFzdEluZGV4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHRGb2N1cyA9IGZvY3VzZWRJbmRleCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgIGlmIChmb2N1c2VkSW5kZXggPiAtMSAmJiBmb2N1c2VkSW5kZXggPCBsYXN0SW5kZXgpIHtcbiAgICAgICAgICBuZXh0Rm9jdXMgPSBmb2N1c2VkSW5kZXggKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKG5leHRGb2N1cyA9PT0gLTEpIHtcbiAgICAgIHRoaXMuYW5ub3VuY2VBcmlhTGl2ZUNvbnRleHQoe1xuICAgICAgICBldmVudDogJ2lucHV0JyxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgIGlzU2VhcmNoYWJsZTogaXNTZWFyY2hhYmxlLFxuICAgICAgICAgIGlzTXVsdGk6IGlzTXVsdGlcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dElzSGlkZGVuOiBuZXh0Rm9jdXMgIT09IC0xLFxuICAgICAgZm9jdXNlZFZhbHVlOiBzZWxlY3RWYWx1ZVtuZXh0Rm9jdXNdXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmZvY3VzT3B0aW9uID0gZnVuY3Rpb24gZm9jdXNPcHRpb24oZGlyZWN0aW9uKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICBkaXJlY3Rpb24gPSAnZmlyc3QnO1xuICAgIH1cblxuICAgIHZhciBwYWdlU2l6ZSA9IHRoaXMucHJvcHMucGFnZVNpemU7XG4gICAgdmFyIF90aGlzJHN0YXRlNSA9IHRoaXMuc3RhdGUsXG4gICAgICAgIGZvY3VzZWRPcHRpb24gPSBfdGhpcyRzdGF0ZTUuZm9jdXNlZE9wdGlvbixcbiAgICAgICAgbWVudU9wdGlvbnMgPSBfdGhpcyRzdGF0ZTUubWVudU9wdGlvbnM7XG4gICAgdmFyIG9wdGlvbnMgPSBtZW51T3B0aW9ucy5mb2N1c2FibGU7XG4gICAgaWYgKCFvcHRpb25zLmxlbmd0aCkgcmV0dXJuO1xuICAgIHZhciBuZXh0Rm9jdXMgPSAwOyAvLyBoYW5kbGVzICdmaXJzdCdcblxuICAgIHZhciBmb2N1c2VkSW5kZXggPSBvcHRpb25zLmluZGV4T2YoZm9jdXNlZE9wdGlvbik7XG5cbiAgICBpZiAoIWZvY3VzZWRPcHRpb24pIHtcbiAgICAgIGZvY3VzZWRJbmRleCA9IC0xO1xuICAgICAgdGhpcy5hbm5vdW5jZUFyaWFMaXZlQ29udGV4dCh7XG4gICAgICAgIGV2ZW50OiAnbWVudSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgIG5leHRGb2N1cyA9IGZvY3VzZWRJbmRleCA+IDAgPyBmb2N1c2VkSW5kZXggLSAxIDogb3B0aW9ucy5sZW5ndGggLSAxO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgIG5leHRGb2N1cyA9IChmb2N1c2VkSW5kZXggKyAxKSAlIG9wdGlvbnMubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncGFnZXVwJykge1xuICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4IC0gcGFnZVNpemU7XG4gICAgICBpZiAobmV4dEZvY3VzIDwgMCkgbmV4dEZvY3VzID0gMDtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3BhZ2Vkb3duJykge1xuICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4ICsgcGFnZVNpemU7XG4gICAgICBpZiAobmV4dEZvY3VzID4gb3B0aW9ucy5sZW5ndGggLSAxKSBuZXh0Rm9jdXMgPSBvcHRpb25zLmxlbmd0aCAtIDE7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsYXN0Jykge1xuICAgICAgbmV4dEZvY3VzID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgPSB0cnVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9jdXNlZE9wdGlvbjogb3B0aW9uc1tuZXh0Rm9jdXNdLFxuICAgICAgZm9jdXNlZFZhbHVlOiBudWxsXG4gICAgfSk7XG4gICAgdGhpcy5hbm5vdW5jZUFyaWFMaXZlQ29udGV4dCh7XG4gICAgICBldmVudDogJ21lbnUnLFxuICAgICAgY29udGV4dDoge1xuICAgICAgICBpc0Rpc2FibGVkOiBpc09wdGlvbkRpc2FibGVkKG9wdGlvbnNbbmV4dEZvY3VzXSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gR2V0dGVyc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgX3Byb3RvLmdldFRoZW1lID0gZnVuY3Rpb24gZ2V0VGhlbWUoKSB7XG4gICAgLy8gVXNlIHRoZSBkZWZhdWx0IHRoZW1lIGlmIHRoZXJlIGFyZSBubyBjdXN0b21pemF0aW9ucy5cbiAgICBpZiAoIXRoaXMucHJvcHMudGhlbWUpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0VGhlbWU7XG4gICAgfSAvLyBJZiB0aGUgdGhlbWUgcHJvcCBpcyBhIGZ1bmN0aW9uLCBhc3N1bWUgdGhlIGZ1bmN0aW9uXG4gICAgLy8ga25vd3MgaG93IHRvIG1lcmdlIHRoZSBwYXNzZWQtaW4gZGVmYXVsdCB0aGVtZSB3aXRoXG4gICAgLy8gaXRzIG93biBtb2RpZmljYXRpb25zLlxuXG5cbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMudGhlbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnRoZW1lKGRlZmF1bHRUaGVtZSk7XG4gICAgfSAvLyBPdGhlcndpc2UsIGlmIGEgcGxhaW4gdGhlbWUgb2JqZWN0IHdhcyBwYXNzZWQgaW4sXG4gICAgLy8gb3ZlcmxheSBpdCB3aXRoIHRoZSBkZWZhdWx0IHRoZW1lLlxuXG5cbiAgICByZXR1cm4gX2V4dGVuZHMkNCh7fSwgZGVmYXVsdFRoZW1lLCB0aGlzLnByb3BzLnRoZW1lKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q29tbW9uUHJvcHMgPSBmdW5jdGlvbiBnZXRDb21tb25Qcm9wcygpIHtcbiAgICB2YXIgY2xlYXJWYWx1ZSA9IHRoaXMuY2xlYXJWYWx1ZSxcbiAgICAgICAgZ2V0U3R5bGVzID0gdGhpcy5nZXRTdHlsZXMsXG4gICAgICAgIHNldFZhbHVlID0gdGhpcy5zZXRWYWx1ZSxcbiAgICAgICAgc2VsZWN0T3B0aW9uID0gdGhpcy5zZWxlY3RPcHRpb24sXG4gICAgICAgIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2xhc3NOYW1lUHJlZml4ID0gcHJvcHMuY2xhc3NOYW1lUHJlZml4LFxuICAgICAgICBpc011bHRpID0gcHJvcHMuaXNNdWx0aSxcbiAgICAgICAgaXNSdGwgPSBwcm9wcy5pc1J0bCxcbiAgICAgICAgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnM7XG4gICAgdmFyIHNlbGVjdFZhbHVlID0gdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICB2YXIgaGFzVmFsdWUgPSB0aGlzLmhhc1ZhbHVlKCk7XG5cbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgIHJldHVybiBzZWxlY3RWYWx1ZTtcbiAgICB9O1xuXG4gICAgdmFyIGN4ID0gY2xhc3NOYW1lcy5iaW5kKG51bGwsIGNsYXNzTmFtZVByZWZpeCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN4OiBjeCxcbiAgICAgIGNsZWFyVmFsdWU6IGNsZWFyVmFsdWUsXG4gICAgICBnZXRTdHlsZXM6IGdldFN0eWxlcyxcbiAgICAgIGdldFZhbHVlOiBnZXRWYWx1ZSxcbiAgICAgIGhhc1ZhbHVlOiBoYXNWYWx1ZSxcbiAgICAgIGlzTXVsdGk6IGlzTXVsdGksXG4gICAgICBpc1J0bDogaXNSdGwsXG4gICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgc2VsZWN0T3B0aW9uOiBzZWxlY3RPcHRpb24sXG4gICAgICBzZXRWYWx1ZTogc2V0VmFsdWUsXG4gICAgICBzZWxlY3RQcm9wczogcHJvcHMsXG4gICAgICB0aGVtZTogdGhpcy5nZXRUaGVtZSgpXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0TmV4dEZvY3VzZWRWYWx1ZSA9IGZ1bmN0aW9uIGdldE5leHRGb2N1c2VkVmFsdWUobmV4dFNlbGVjdFZhbHVlKSB7XG4gICAgaWYgKHRoaXMuY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGUpIHtcbiAgICAgIHRoaXMuY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGUgPSBmYWxzZTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBfdGhpcyRzdGF0ZTYgPSB0aGlzLnN0YXRlLFxuICAgICAgICBmb2N1c2VkVmFsdWUgPSBfdGhpcyRzdGF0ZTYuZm9jdXNlZFZhbHVlLFxuICAgICAgICBsYXN0U2VsZWN0VmFsdWUgPSBfdGhpcyRzdGF0ZTYuc2VsZWN0VmFsdWU7XG4gICAgdmFyIGxhc3RGb2N1c2VkSW5kZXggPSBsYXN0U2VsZWN0VmFsdWUuaW5kZXhPZihmb2N1c2VkVmFsdWUpO1xuXG4gICAgaWYgKGxhc3RGb2N1c2VkSW5kZXggPiAtMSkge1xuICAgICAgdmFyIG5leHRGb2N1c2VkSW5kZXggPSBuZXh0U2VsZWN0VmFsdWUuaW5kZXhPZihmb2N1c2VkVmFsdWUpO1xuXG4gICAgICBpZiAobmV4dEZvY3VzZWRJbmRleCA+IC0xKSB7XG4gICAgICAgIC8vIHRoZSBmb2N1c2VkIHZhbHVlIGlzIHN0aWxsIGluIHRoZSBzZWxlY3RWYWx1ZSwgcmV0dXJuIGl0XG4gICAgICAgIHJldHVybiBmb2N1c2VkVmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKGxhc3RGb2N1c2VkSW5kZXggPCBuZXh0U2VsZWN0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIC8vIHRoZSBmb2N1c2VkVmFsdWUgaXMgbm90IHByZXNlbnQgaW4gdGhlIG5leHQgc2VsZWN0VmFsdWUgYXJyYXkgYnlcbiAgICAgICAgLy8gcmVmZXJlbmNlLCBzbyByZXR1cm4gdGhlIG5ldyB2YWx1ZSBhdCB0aGUgc2FtZSBpbmRleFxuICAgICAgICByZXR1cm4gbmV4dFNlbGVjdFZhbHVlW2xhc3RGb2N1c2VkSW5kZXhdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIF9wcm90by5nZXROZXh0Rm9jdXNlZE9wdGlvbiA9IGZ1bmN0aW9uIGdldE5leHRGb2N1c2VkT3B0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgbGFzdEZvY3VzZWRPcHRpb24gPSB0aGlzLnN0YXRlLmZvY3VzZWRPcHRpb247XG4gICAgcmV0dXJuIGxhc3RGb2N1c2VkT3B0aW9uICYmIG9wdGlvbnMuaW5kZXhPZihsYXN0Rm9jdXNlZE9wdGlvbikgPiAtMSA/IGxhc3RGb2N1c2VkT3B0aW9uIDogb3B0aW9uc1swXTtcbiAgfTtcblxuICBfcHJvdG8uaGFzVmFsdWUgPSBmdW5jdGlvbiBoYXNWYWx1ZSgpIHtcbiAgICB2YXIgc2VsZWN0VmFsdWUgPSB0aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuICAgIHJldHVybiBzZWxlY3RWYWx1ZS5sZW5ndGggPiAwO1xuICB9O1xuXG4gIF9wcm90by5oYXNPcHRpb25zID0gZnVuY3Rpb24gaGFzT3B0aW9ucygpIHtcbiAgICByZXR1cm4gISF0aGlzLnN0YXRlLm1lbnVPcHRpb25zLnJlbmRlci5sZW5ndGg7XG4gIH07XG5cbiAgX3Byb3RvLmNvdW50T3B0aW9ucyA9IGZ1bmN0aW9uIGNvdW50T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5tZW51T3B0aW9ucy5mb2N1c2FibGUubGVuZ3RoO1xuICB9O1xuXG4gIF9wcm90by5pc0NsZWFyYWJsZSA9IGZ1bmN0aW9uIGlzQ2xlYXJhYmxlKCkge1xuICAgIHZhciBfdGhpcyRwcm9wczEyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaXNDbGVhcmFibGUgPSBfdGhpcyRwcm9wczEyLmlzQ2xlYXJhYmxlLFxuICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHMxMi5pc011bHRpOyAvLyBzaW5nbGUgc2VsZWN0LCBieSBkZWZhdWx0LCBJUyBOT1QgY2xlYXJhYmxlXG4gICAgLy8gbXVsdGkgc2VsZWN0LCBieSBkZWZhdWx0LCBJUyBjbGVhcmFibGVcblxuICAgIGlmIChpc0NsZWFyYWJsZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaXNNdWx0aTtcbiAgICByZXR1cm4gaXNDbGVhcmFibGU7XG4gIH07XG5cbiAgX3Byb3RvLmlzT3B0aW9uRGlzYWJsZWQgPSBmdW5jdGlvbiBpc09wdGlvbkRpc2FibGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucHJvcHMuaXNPcHRpb25EaXNhYmxlZCA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucHJvcHMuaXNPcHRpb25EaXNhYmxlZChvcHRpb24sIHNlbGVjdFZhbHVlKSA6IGZhbHNlO1xuICB9O1xuXG4gIF9wcm90by5pc09wdGlvblNlbGVjdGVkID0gZnVuY3Rpb24gaXNPcHRpb25TZWxlY3RlZChvcHRpb24sIHNlbGVjdFZhbHVlKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBpZiAoc2VsZWN0VmFsdWUuaW5kZXhPZihvcHRpb24pID4gLTEpIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmlzT3B0aW9uU2VsZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBzZWxlY3RWYWx1ZSk7XG4gICAgfVxuXG4gICAgdmFyIGNhbmRpZGF0ZSA9IHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKTtcbiAgICByZXR1cm4gc2VsZWN0VmFsdWUuc29tZShmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIF90aGlzMy5nZXRPcHRpb25WYWx1ZShpKSA9PT0gY2FuZGlkYXRlO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5maWx0ZXJPcHRpb24gPSBmdW5jdGlvbiBmaWx0ZXJPcHRpb24ob3B0aW9uLCBpbnB1dFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZmlsdGVyT3B0aW9uID8gdGhpcy5wcm9wcy5maWx0ZXJPcHRpb24ob3B0aW9uLCBpbnB1dFZhbHVlKSA6IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLmZvcm1hdE9wdGlvbkxhYmVsID0gZnVuY3Rpb24gZm9ybWF0T3B0aW9uTGFiZWwoZGF0YSwgY29udGV4dCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5mb3JtYXRPcHRpb25MYWJlbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIGlucHV0VmFsdWUgPSB0aGlzLnByb3BzLmlucHV0VmFsdWU7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSB0aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZm9ybWF0T3B0aW9uTGFiZWwoZGF0YSwge1xuICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlLFxuICAgICAgICBzZWxlY3RWYWx1ZTogc2VsZWN0VmFsdWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRPcHRpb25MYWJlbChkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmZvcm1hdEdyb3VwTGFiZWwgPSBmdW5jdGlvbiBmb3JtYXRHcm91cExhYmVsKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5mb3JtYXRHcm91cExhYmVsKGRhdGEpO1xuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBNb3VzZSBIYW5kbGVyc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBDb21wb3NpdGlvbiBIYW5kbGVyc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgX3Byb3RvLnN0YXJ0TGlzdGVuaW5nQ29tcG9zaXRpb24gPSBmdW5jdGlvbiBzdGFydExpc3RlbmluZ0NvbXBvc2l0aW9uKCkge1xuICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0JywgdGhpcy5vbkNvbXBvc2l0aW9uU3RhcnQsIGZhbHNlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgdGhpcy5vbkNvbXBvc2l0aW9uRW5kLCBmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zdG9wTGlzdGVuaW5nQ29tcG9zaXRpb24gPSBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nQ29tcG9zaXRpb24oKSB7XG4gICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uc3RhcnQnLCB0aGlzLm9uQ29tcG9zaXRpb25TdGFydCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbmVuZCcsIHRoaXMub25Db21wb3NpdGlvbkVuZCk7XG4gICAgfVxuICB9O1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBUb3VjaCBIYW5kbGVyc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgX3Byb3RvLnN0YXJ0TGlzdGVuaW5nVG9Ub3VjaCA9IGZ1bmN0aW9uIHN0YXJ0TGlzdGVuaW5nVG9Ub3VjaCgpIHtcbiAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLCBmYWxzZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc3RvcExpc3RlbmluZ1RvVG91Y2ggPSBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nVG9Ub3VjaCgpIHtcbiAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0KTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQpO1xuICAgIH1cbiAgfTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gUmVuZGVyZXJzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBfcHJvdG8uY29uc3RydWN0QXJpYUxpdmVNZXNzYWdlID0gZnVuY3Rpb24gY29uc3RydWN0QXJpYUxpdmVNZXNzYWdlKCkge1xuICAgIHZhciBfdGhpcyRzdGF0ZTcgPSB0aGlzLnN0YXRlLFxuICAgICAgICBhcmlhTGl2ZUNvbnRleHQgPSBfdGhpcyRzdGF0ZTcuYXJpYUxpdmVDb250ZXh0LFxuICAgICAgICBzZWxlY3RWYWx1ZSA9IF90aGlzJHN0YXRlNy5zZWxlY3RWYWx1ZSxcbiAgICAgICAgZm9jdXNlZFZhbHVlID0gX3RoaXMkc3RhdGU3LmZvY3VzZWRWYWx1ZSxcbiAgICAgICAgZm9jdXNlZE9wdGlvbiA9IF90aGlzJHN0YXRlNy5mb2N1c2VkT3B0aW9uO1xuICAgIHZhciBfdGhpcyRwcm9wczEzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb3B0aW9ucyA9IF90aGlzJHByb3BzMTMub3B0aW9ucyxcbiAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzMTMubWVudUlzT3BlbixcbiAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzMTMuaW5wdXRWYWx1ZSxcbiAgICAgICAgc2NyZWVuUmVhZGVyU3RhdHVzID0gX3RoaXMkcHJvcHMxMy5zY3JlZW5SZWFkZXJTdGF0dXM7IC8vIEFuIGFyaWEgbGl2ZSBtZXNzYWdlIHJlcHJlc2VudGluZyB0aGUgY3VycmVudGx5IGZvY3VzZWQgdmFsdWUgaW4gdGhlIHNlbGVjdC5cblxuICAgIHZhciBmb2N1c2VkVmFsdWVNc2cgPSBmb2N1c2VkVmFsdWUgPyB2YWx1ZUZvY3VzQXJpYU1lc3NhZ2Uoe1xuICAgICAgZm9jdXNlZFZhbHVlOiBmb2N1c2VkVmFsdWUsXG4gICAgICBnZXRPcHRpb25MYWJlbDogdGhpcy5nZXRPcHRpb25MYWJlbCxcbiAgICAgIHNlbGVjdFZhbHVlOiBzZWxlY3RWYWx1ZVxuICAgIH0pIDogJyc7IC8vIEFuIGFyaWEgbGl2ZSBtZXNzYWdlIHJlcHJlc2VudGluZyB0aGUgY3VycmVudGx5IGZvY3VzZWQgb3B0aW9uIGluIHRoZSBzZWxlY3QuXG5cbiAgICB2YXIgZm9jdXNlZE9wdGlvbk1zZyA9IGZvY3VzZWRPcHRpb24gJiYgbWVudUlzT3BlbiA/IG9wdGlvbkZvY3VzQXJpYU1lc3NhZ2Uoe1xuICAgICAgZm9jdXNlZE9wdGlvbjogZm9jdXNlZE9wdGlvbixcbiAgICAgIGdldE9wdGlvbkxhYmVsOiB0aGlzLmdldE9wdGlvbkxhYmVsLFxuICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH0pIDogJyc7IC8vIEFuIGFyaWEgbGl2ZSBtZXNzYWdlIHJlcHJlc2VudGluZyB0aGUgc2V0IG9mIGZvY3VzYWJsZSByZXN1bHRzIGFuZCBjdXJyZW50IHNlYXJjaHRlcm0vaW5wdXR2YWx1ZS5cblxuICAgIHZhciByZXN1bHRzTXNnID0gcmVzdWx0c0FyaWFNZXNzYWdlKHtcbiAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICBzY3JlZW5SZWFkZXJNZXNzYWdlOiBzY3JlZW5SZWFkZXJTdGF0dXMoe1xuICAgICAgICBjb3VudDogdGhpcy5jb3VudE9wdGlvbnMoKVxuICAgICAgfSlcbiAgICB9KTtcbiAgICByZXR1cm4gZm9jdXNlZFZhbHVlTXNnICsgXCIgXCIgKyBmb2N1c2VkT3B0aW9uTXNnICsgXCIgXCIgKyByZXN1bHRzTXNnICsgXCIgXCIgKyBhcmlhTGl2ZUNvbnRleHQ7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlcklucHV0ID0gZnVuY3Rpb24gcmVuZGVySW5wdXQoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzMTQgPSB0aGlzLnByb3BzLFxuICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHMxNC5pc0Rpc2FibGVkLFxuICAgICAgICBpc1NlYXJjaGFibGUgPSBfdGhpcyRwcm9wczE0LmlzU2VhcmNoYWJsZSxcbiAgICAgICAgaW5wdXRJZCA9IF90aGlzJHByb3BzMTQuaW5wdXRJZCxcbiAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzMTQuaW5wdXRWYWx1ZSxcbiAgICAgICAgdGFiSW5kZXggPSBfdGhpcyRwcm9wczE0LnRhYkluZGV4O1xuICAgIHZhciBJbnB1dCA9IHRoaXMuY29tcG9uZW50cy5JbnB1dDtcbiAgICB2YXIgaW5wdXRJc0hpZGRlbiA9IHRoaXMuc3RhdGUuaW5wdXRJc0hpZGRlbjtcbiAgICB2YXIgaWQgPSBpbnB1dElkIHx8IHRoaXMuZ2V0RWxlbWVudElkKCdpbnB1dCcpOyAvLyBhcmlhIGF0dHJpYnV0ZXMgbWFrZXMgdGhlIEpTWCBcIm5vaXN5XCIsIHNlcGFyYXRlZCBmb3IgY2xhcml0eVxuXG4gICAgdmFyIGFyaWFBdHRyaWJ1dGVzID0ge1xuICAgICAgJ2FyaWEtYXV0b2NvbXBsZXRlJzogJ2xpc3QnLFxuICAgICAgJ2FyaWEtbGFiZWwnOiB0aGlzLnByb3BzWydhcmlhLWxhYmVsJ10sXG4gICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbGxlZGJ5J11cbiAgICB9O1xuXG4gICAgaWYgKCFpc1NlYXJjaGFibGUpIHtcbiAgICAgIC8vIHVzZSBhIGR1bW15IGlucHV0IHRvIG1haW50YWluIGZvY3VzL2JsdXIgZnVuY3Rpb25hbGl0eVxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHVtbXlJbnB1dCwgX2V4dGVuZHMkNCh7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgaW5uZXJSZWY6IHRoaXMuZ2V0SW5wdXRSZWYsXG4gICAgICAgIG9uQmx1cjogdGhpcy5vbklucHV0Qmx1cixcbiAgICAgICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgICAgIG9uRm9jdXM6IHRoaXMub25JbnB1dEZvY3VzLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICAgICAgdmFsdWU6IFwiXCJcbiAgICAgIH0sIGFyaWFBdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcyxcbiAgICAgICAgY3ggPSBfdGhpcyRjb21tb25Qcm9wcy5jeCxcbiAgICAgICAgdGhlbWUgPSBfdGhpcyRjb21tb25Qcm9wcy50aGVtZSxcbiAgICAgICAgc2VsZWN0UHJvcHMgPSBfdGhpcyRjb21tb25Qcm9wcy5zZWxlY3RQcm9wcztcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgX2V4dGVuZHMkNCh7XG4gICAgICBhdXRvQ2FwaXRhbGl6ZTogXCJub25lXCIsXG4gICAgICBhdXRvQ29tcGxldGU6IFwib2ZmXCIsXG4gICAgICBhdXRvQ29ycmVjdDogXCJvZmZcIixcbiAgICAgIGN4OiBjeCxcbiAgICAgIGdldFN0eWxlczogdGhpcy5nZXRTdHlsZXMsXG4gICAgICBpZDogaWQsXG4gICAgICBpbm5lclJlZjogdGhpcy5nZXRJbnB1dFJlZixcbiAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICBpc0hpZGRlbjogaW5wdXRJc0hpZGRlbixcbiAgICAgIG9uQmx1cjogdGhpcy5vbklucHV0Qmx1cixcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLFxuICAgICAgb25Gb2N1czogdGhpcy5vbklucHV0Rm9jdXMsXG4gICAgICBzZWxlY3RQcm9wczogc2VsZWN0UHJvcHMsXG4gICAgICBzcGVsbENoZWNrOiBcImZhbHNlXCIsXG4gICAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgICB0aGVtZTogdGhlbWUsXG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIHZhbHVlOiBpbnB1dFZhbHVlXG4gICAgfSwgYXJpYUF0dHJpYnV0ZXMpKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyUGxhY2Vob2xkZXJPclZhbHVlID0gZnVuY3Rpb24gcmVuZGVyUGxhY2Vob2xkZXJPclZhbHVlKCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJGNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHMsXG4gICAgICAgIE11bHRpVmFsdWUgPSBfdGhpcyRjb21wb25lbnRzLk11bHRpVmFsdWUsXG4gICAgICAgIE11bHRpVmFsdWVDb250YWluZXIgPSBfdGhpcyRjb21wb25lbnRzLk11bHRpVmFsdWVDb250YWluZXIsXG4gICAgICAgIE11bHRpVmFsdWVMYWJlbCA9IF90aGlzJGNvbXBvbmVudHMuTXVsdGlWYWx1ZUxhYmVsLFxuICAgICAgICBNdWx0aVZhbHVlUmVtb3ZlID0gX3RoaXMkY29tcG9uZW50cy5NdWx0aVZhbHVlUmVtb3ZlLFxuICAgICAgICBTaW5nbGVWYWx1ZSA9IF90aGlzJGNvbXBvbmVudHMuU2luZ2xlVmFsdWUsXG4gICAgICAgIFBsYWNlaG9sZGVyID0gX3RoaXMkY29tcG9uZW50cy5QbGFjZWhvbGRlcjtcbiAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgIHZhciBfdGhpcyRwcm9wczE1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY29udHJvbFNob3VsZFJlbmRlclZhbHVlID0gX3RoaXMkcHJvcHMxNS5jb250cm9sU2hvdWxkUmVuZGVyVmFsdWUsXG4gICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczE1LmlzRGlzYWJsZWQsXG4gICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczE1LmlzTXVsdGksXG4gICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRwcm9wczE1LmlucHV0VmFsdWUsXG4gICAgICAgIHBsYWNlaG9sZGVyID0gX3RoaXMkcHJvcHMxNS5wbGFjZWhvbGRlcjtcbiAgICB2YXIgX3RoaXMkc3RhdGU4ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgc2VsZWN0VmFsdWUgPSBfdGhpcyRzdGF0ZTguc2VsZWN0VmFsdWUsXG4gICAgICAgIGZvY3VzZWRWYWx1ZSA9IF90aGlzJHN0YXRlOC5mb2N1c2VkVmFsdWUsXG4gICAgICAgIGlzRm9jdXNlZCA9IF90aGlzJHN0YXRlOC5pc0ZvY3VzZWQ7XG5cbiAgICBpZiAoIXRoaXMuaGFzVmFsdWUoKSB8fCAhY29udHJvbFNob3VsZFJlbmRlclZhbHVlKSB7XG4gICAgICByZXR1cm4gaW5wdXRWYWx1ZSA/IG51bGwgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFBsYWNlaG9sZGVyLCBfZXh0ZW5kcyQ0KHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBrZXk6IFwicGxhY2Vob2xkZXJcIixcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWRcbiAgICAgIH0pLCBwbGFjZWhvbGRlcik7XG4gICAgfVxuXG4gICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZXMgPSBzZWxlY3RWYWx1ZS5tYXAoZnVuY3Rpb24gKG9wdCwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGlzT3B0aW9uRm9jdXNlZCA9IG9wdCA9PT0gZm9jdXNlZFZhbHVlO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChNdWx0aVZhbHVlLCBfZXh0ZW5kcyQ0KHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIENvbnRhaW5lcjogTXVsdGlWYWx1ZUNvbnRhaW5lcixcbiAgICAgICAgICAgIExhYmVsOiBNdWx0aVZhbHVlTGFiZWwsXG4gICAgICAgICAgICBSZW1vdmU6IE11bHRpVmFsdWVSZW1vdmVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzRm9jdXNlZDogaXNPcHRpb25Gb2N1c2VkLFxuICAgICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAga2V5OiBfdGhpczQuZ2V0T3B0aW9uVmFsdWUob3B0KSxcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgcmVtb3ZlUHJvcHM6IHtcbiAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczQucmVtb3ZlVmFsdWUob3B0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblRvdWNoRW5kOiBmdW5jdGlvbiBvblRvdWNoRW5kKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0LnJlbW92ZVZhbHVlKG9wdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YTogb3B0XG4gICAgICAgIH0pLCBfdGhpczQuZm9ybWF0T3B0aW9uTGFiZWwob3B0LCAndmFsdWUnKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzZWxlY3RWYWx1ZXM7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0VmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBzaW5nbGVWYWx1ZSA9IHNlbGVjdFZhbHVlWzBdO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFNpbmdsZVZhbHVlLCBfZXh0ZW5kcyQ0KHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgZGF0YTogc2luZ2xlVmFsdWUsXG4gICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkXG4gICAgfSksIHRoaXMuZm9ybWF0T3B0aW9uTGFiZWwoc2luZ2xlVmFsdWUsICd2YWx1ZScpKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyQ2xlYXJJbmRpY2F0b3IgPSBmdW5jdGlvbiByZW5kZXJDbGVhckluZGljYXRvcigpIHtcbiAgICB2YXIgQ2xlYXJJbmRpY2F0b3IgPSB0aGlzLmNvbXBvbmVudHMuQ2xlYXJJbmRpY2F0b3I7XG4gICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICB2YXIgX3RoaXMkcHJvcHMxNiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczE2LmlzRGlzYWJsZWQsXG4gICAgICAgIGlzTG9hZGluZyA9IF90aGlzJHByb3BzMTYuaXNMb2FkaW5nO1xuICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcblxuICAgIGlmICghdGhpcy5pc0NsZWFyYWJsZSgpIHx8ICFDbGVhckluZGljYXRvciB8fCBpc0Rpc2FibGVkIHx8ICF0aGlzLmhhc1ZhbHVlKCkgfHwgaXNMb2FkaW5nKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgaW5uZXJQcm9wcyA9IHtcbiAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uQ2xlYXJJbmRpY2F0b3JNb3VzZURvd24sXG4gICAgICBvblRvdWNoRW5kOiB0aGlzLm9uQ2xlYXJJbmRpY2F0b3JUb3VjaEVuZCxcbiAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgIH07XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2xlYXJJbmRpY2F0b3IsIF9leHRlbmRzJDQoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICBpbm5lclByb3BzOiBpbm5lclByb3BzLFxuICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWRcbiAgICB9KSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlckxvYWRpbmdJbmRpY2F0b3IgPSBmdW5jdGlvbiByZW5kZXJMb2FkaW5nSW5kaWNhdG9yKCkge1xuICAgIHZhciBMb2FkaW5nSW5kaWNhdG9yID0gdGhpcy5jb21wb25lbnRzLkxvYWRpbmdJbmRpY2F0b3I7XG4gICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICB2YXIgX3RoaXMkcHJvcHMxNyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczE3LmlzRGlzYWJsZWQsXG4gICAgICAgIGlzTG9hZGluZyA9IF90aGlzJHByb3BzMTcuaXNMb2FkaW5nO1xuICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcbiAgICBpZiAoIUxvYWRpbmdJbmRpY2F0b3IgfHwgIWlzTG9hZGluZykgcmV0dXJuIG51bGw7XG4gICAgdmFyIGlubmVyUHJvcHMgPSB7XG4gICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICB9O1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmdJbmRpY2F0b3IsIF9leHRlbmRzJDQoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICBpbm5lclByb3BzOiBpbm5lclByb3BzLFxuICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgfSkpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXJJbmRpY2F0b3JTZXBhcmF0b3IgPSBmdW5jdGlvbiByZW5kZXJJbmRpY2F0b3JTZXBhcmF0b3IoKSB7XG4gICAgdmFyIF90aGlzJGNvbXBvbmVudHMyID0gdGhpcy5jb21wb25lbnRzLFxuICAgICAgICBEcm9wZG93bkluZGljYXRvciA9IF90aGlzJGNvbXBvbmVudHMyLkRyb3Bkb3duSW5kaWNhdG9yLFxuICAgICAgICBJbmRpY2F0b3JTZXBhcmF0b3IgPSBfdGhpcyRjb21wb25lbnRzMi5JbmRpY2F0b3JTZXBhcmF0b3I7IC8vIHNlcGFyYXRvciBkb2Vzbid0IG1ha2Ugc2Vuc2Ugd2l0aG91dCB0aGUgZHJvcGRvd24gaW5kaWNhdG9yXG5cbiAgICBpZiAoIURyb3Bkb3duSW5kaWNhdG9yIHx8ICFJbmRpY2F0b3JTZXBhcmF0b3IpIHJldHVybiBudWxsO1xuICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgdmFyIGlzRGlzYWJsZWQgPSB0aGlzLnByb3BzLmlzRGlzYWJsZWQ7XG4gICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEluZGljYXRvclNlcGFyYXRvciwgX2V4dGVuZHMkNCh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgIH0pKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyRHJvcGRvd25JbmRpY2F0b3IgPSBmdW5jdGlvbiByZW5kZXJEcm9wZG93bkluZGljYXRvcigpIHtcbiAgICB2YXIgRHJvcGRvd25JbmRpY2F0b3IgPSB0aGlzLmNvbXBvbmVudHMuRHJvcGRvd25JbmRpY2F0b3I7XG4gICAgaWYgKCFEcm9wZG93bkluZGljYXRvcikgcmV0dXJuIG51bGw7XG4gICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICB2YXIgaXNEaXNhYmxlZCA9IHRoaXMucHJvcHMuaXNEaXNhYmxlZDtcbiAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG4gICAgdmFyIGlubmVyUHJvcHMgPSB7XG4gICAgICBvbk1vdXNlRG93bjogdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yTW91c2VEb3duLFxuICAgICAgb25Ub3VjaEVuZDogdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yVG91Y2hFbmQsXG4gICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICB9O1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bkb3duSW5kaWNhdG9yLCBfZXh0ZW5kcyQ0KHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgaW5uZXJQcm9wczogaW5uZXJQcm9wcyxcbiAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgIH0pKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyTWVudSA9IGZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkY29tcG9uZW50czMgPSB0aGlzLmNvbXBvbmVudHMsXG4gICAgICAgIEdyb3VwID0gX3RoaXMkY29tcG9uZW50czMuR3JvdXAsXG4gICAgICAgIEdyb3VwSGVhZGluZyA9IF90aGlzJGNvbXBvbmVudHMzLkdyb3VwSGVhZGluZyxcbiAgICAgICAgTWVudSA9IF90aGlzJGNvbXBvbmVudHMzLk1lbnUsXG4gICAgICAgIE1lbnVMaXN0ID0gX3RoaXMkY29tcG9uZW50czMuTWVudUxpc3QsXG4gICAgICAgIE1lbnVQb3J0YWwgPSBfdGhpcyRjb21wb25lbnRzMy5NZW51UG9ydGFsLFxuICAgICAgICBMb2FkaW5nTWVzc2FnZSA9IF90aGlzJGNvbXBvbmVudHMzLkxvYWRpbmdNZXNzYWdlLFxuICAgICAgICBOb09wdGlvbnNNZXNzYWdlID0gX3RoaXMkY29tcG9uZW50czMuTm9PcHRpb25zTWVzc2FnZSxcbiAgICAgICAgT3B0aW9uID0gX3RoaXMkY29tcG9uZW50czMuT3B0aW9uO1xuICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgdmFyIF90aGlzJHN0YXRlOSA9IHRoaXMuc3RhdGUsXG4gICAgICAgIGZvY3VzZWRPcHRpb24gPSBfdGhpcyRzdGF0ZTkuZm9jdXNlZE9wdGlvbixcbiAgICAgICAgbWVudU9wdGlvbnMgPSBfdGhpcyRzdGF0ZTkubWVudU9wdGlvbnM7XG4gICAgdmFyIF90aGlzJHByb3BzMTggPSB0aGlzLnByb3BzLFxuICAgICAgICBjYXB0dXJlTWVudVNjcm9sbCA9IF90aGlzJHByb3BzMTguY2FwdHVyZU1lbnVTY3JvbGwsXG4gICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRwcm9wczE4LmlucHV0VmFsdWUsXG4gICAgICAgIGlzTG9hZGluZyA9IF90aGlzJHByb3BzMTguaXNMb2FkaW5nLFxuICAgICAgICBsb2FkaW5nTWVzc2FnZSA9IF90aGlzJHByb3BzMTgubG9hZGluZ01lc3NhZ2UsXG4gICAgICAgIG1pbk1lbnVIZWlnaHQgPSBfdGhpcyRwcm9wczE4Lm1pbk1lbnVIZWlnaHQsXG4gICAgICAgIG1heE1lbnVIZWlnaHQgPSBfdGhpcyRwcm9wczE4Lm1heE1lbnVIZWlnaHQsXG4gICAgICAgIG1lbnVJc09wZW4gPSBfdGhpcyRwcm9wczE4Lm1lbnVJc09wZW4sXG4gICAgICAgIG1lbnVQbGFjZW1lbnQgPSBfdGhpcyRwcm9wczE4Lm1lbnVQbGFjZW1lbnQsXG4gICAgICAgIG1lbnVQb3NpdGlvbiA9IF90aGlzJHByb3BzMTgubWVudVBvc2l0aW9uLFxuICAgICAgICBtZW51UG9ydGFsVGFyZ2V0ID0gX3RoaXMkcHJvcHMxOC5tZW51UG9ydGFsVGFyZ2V0LFxuICAgICAgICBtZW51U2hvdWxkQmxvY2tTY3JvbGwgPSBfdGhpcyRwcm9wczE4Lm1lbnVTaG91bGRCbG9ja1Njcm9sbCxcbiAgICAgICAgbWVudVNob3VsZFNjcm9sbEludG9WaWV3ID0gX3RoaXMkcHJvcHMxOC5tZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcsXG4gICAgICAgIG5vT3B0aW9uc01lc3NhZ2UgPSBfdGhpcyRwcm9wczE4Lm5vT3B0aW9uc01lc3NhZ2UsXG4gICAgICAgIG9uTWVudVNjcm9sbFRvVG9wID0gX3RoaXMkcHJvcHMxOC5vbk1lbnVTY3JvbGxUb1RvcCxcbiAgICAgICAgb25NZW51U2Nyb2xsVG9Cb3R0b20gPSBfdGhpcyRwcm9wczE4Lm9uTWVudVNjcm9sbFRvQm90dG9tO1xuICAgIGlmICghbWVudUlzT3BlbikgcmV0dXJuIG51bGw7IC8vIFRPRE86IEludGVybmFsIE9wdGlvbiBUeXBlIGhlcmVcblxuICAgIHZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIocHJvcHMpIHtcbiAgICAgIC8vIGZvciBwZXJmb3JtYW5jZSwgdGhlIG1lbnUgb3B0aW9ucyBpbiBzdGF0ZSBhcmVuJ3QgY2hhbmdlZCB3aGVuIHRoZVxuICAgICAgLy8gZm9jdXNlZCBvcHRpb24gY2hhbmdlcyBzbyB3ZSBjYWxjdWxhdGUgYWRkaXRpb25hbCBwcm9wcyBiYXNlZCBvbiB0aGF0XG4gICAgICB2YXIgaXNGb2N1c2VkID0gZm9jdXNlZE9wdGlvbiA9PT0gcHJvcHMuZGF0YTtcbiAgICAgIHByb3BzLmlubmVyUmVmID0gaXNGb2N1c2VkID8gX3RoaXM1LmdldEZvY3VzZWRPcHRpb25SZWYgOiB1bmRlZmluZWQ7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChPcHRpb24sIF9leHRlbmRzJDQoe30sIGNvbW1vblByb3BzLCBwcm9wcywge1xuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgICAgfSksIF90aGlzNS5mb3JtYXRPcHRpb25MYWJlbChwcm9wcy5kYXRhLCAnbWVudScpKTtcbiAgICB9O1xuXG4gICAgdmFyIG1lbnVVSTtcblxuICAgIGlmICh0aGlzLmhhc09wdGlvbnMoKSkge1xuICAgICAgbWVudVVJID0gbWVudU9wdGlvbnMucmVuZGVyLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgICAgdmFyIHR5cGUgPSBpdGVtLnR5cGUsXG4gICAgICAgICAgICAgIGdyb3VwID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UkMihpdGVtLCBbXCJ0eXBlXCJdKTtcblxuICAgICAgICAgIHZhciBoZWFkaW5nSWQgPSBpdGVtLmtleSArIFwiLWhlYWRpbmdcIjtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChHcm91cCwgX2V4dGVuZHMkNCh7fSwgY29tbW9uUHJvcHMsIGdyb3VwLCB7XG4gICAgICAgICAgICBIZWFkaW5nOiBHcm91cEhlYWRpbmcsXG4gICAgICAgICAgICBoZWFkaW5nUHJvcHM6IHtcbiAgICAgICAgICAgICAgaWQ6IGhlYWRpbmdJZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhYmVsOiBfdGhpczUuZm9ybWF0R3JvdXBMYWJlbChpdGVtLmRhdGEpXG4gICAgICAgICAgfSksIGl0ZW0ub3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHJlbmRlcihvcHRpb24pO1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdvcHRpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIHJlbmRlcihpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgIHZhciBtZXNzYWdlID0gbG9hZGluZ01lc3NhZ2Uoe1xuICAgICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlXG4gICAgICB9KTtcbiAgICAgIGlmIChtZXNzYWdlID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICAgIG1lbnVVSSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZ01lc3NhZ2UsIGNvbW1vblByb3BzLCBtZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9tZXNzYWdlID0gbm9PcHRpb25zTWVzc2FnZSh7XG4gICAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX21lc3NhZ2UgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgICAgbWVudVVJID0gUmVhY3QuY3JlYXRlRWxlbWVudChOb09wdGlvbnNNZXNzYWdlLCBjb21tb25Qcm9wcywgX21lc3NhZ2UpO1xuICAgIH1cblxuICAgIHZhciBtZW51UGxhY2VtZW50UHJvcHMgPSB7XG4gICAgICBtaW5NZW51SGVpZ2h0OiBtaW5NZW51SGVpZ2h0LFxuICAgICAgbWF4TWVudUhlaWdodDogbWF4TWVudUhlaWdodCxcbiAgICAgIG1lbnVQbGFjZW1lbnQ6IG1lbnVQbGFjZW1lbnQsXG4gICAgICBtZW51UG9zaXRpb246IG1lbnVQb3NpdGlvbixcbiAgICAgIG1lbnVTaG91bGRTY3JvbGxJbnRvVmlldzogbWVudVNob3VsZFNjcm9sbEludG9WaWV3XG4gICAgfTtcbiAgICB2YXIgbWVudUVsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVQbGFjZXIsIF9leHRlbmRzJDQoe30sIGNvbW1vblByb3BzLCBtZW51UGxhY2VtZW50UHJvcHMpLCBmdW5jdGlvbiAoX3JlZjgpIHtcbiAgICAgIHZhciByZWYgPSBfcmVmOC5yZWYsXG4gICAgICAgICAgX3JlZjgkcGxhY2VyUHJvcHMgPSBfcmVmOC5wbGFjZXJQcm9wcyxcbiAgICAgICAgICBwbGFjZW1lbnQgPSBfcmVmOCRwbGFjZXJQcm9wcy5wbGFjZW1lbnQsXG4gICAgICAgICAgbWF4SGVpZ2h0ID0gX3JlZjgkcGxhY2VyUHJvcHMubWF4SGVpZ2h0O1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudSwgX2V4dGVuZHMkNCh7fSwgY29tbW9uUHJvcHMsIG1lbnVQbGFjZW1lbnRQcm9wcywge1xuICAgICAgICBpbm5lclJlZjogcmVmLFxuICAgICAgICBpbm5lclByb3BzOiB7XG4gICAgICAgICAgb25Nb3VzZURvd246IF90aGlzNS5vbk1lbnVNb3VzZURvd24sXG4gICAgICAgICAgb25Nb3VzZU1vdmU6IF90aGlzNS5vbk1lbnVNb3VzZU1vdmVcbiAgICAgICAgfSxcbiAgICAgICAgaXNMb2FkaW5nOiBpc0xvYWRpbmcsXG4gICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChTY3JvbGxDYXB0b3JTd2l0Y2gsIHtcbiAgICAgICAgaXNFbmFibGVkOiBjYXB0dXJlTWVudVNjcm9sbCxcbiAgICAgICAgb25Ub3BBcnJpdmU6IG9uTWVudVNjcm9sbFRvVG9wLFxuICAgICAgICBvbkJvdHRvbUFycml2ZTogb25NZW51U2Nyb2xsVG9Cb3R0b21cbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsQmxvY2ssIHtcbiAgICAgICAgaXNFbmFibGVkOiBtZW51U2hvdWxkQmxvY2tTY3JvbGxcbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUxpc3QsIF9leHRlbmRzJDQoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlubmVyUmVmOiBfdGhpczUuZ2V0TWVudUxpc3RSZWYsXG4gICAgICAgIGlzTG9hZGluZzogaXNMb2FkaW5nLFxuICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodFxuICAgICAgfSksIG1lbnVVSSkpKSk7XG4gICAgfSk7IC8vIHBvc2l0aW9uaW5nIGJlaGF2aW91ciBpcyBhbG1vc3QgaWRlbnRpY2FsIGZvciBwb3J0YWxsZWQgYW5kIGZpeGVkLFxuICAgIC8vIHNvIHdlIHVzZSB0aGUgc2FtZSBjb21wb25lbnQuIHRoZSBhY3R1YWwgcG9ydGFsbGluZyBsb2dpYyBpcyBmb3JrZWRcbiAgICAvLyB3aXRoaW4gdGhlIGNvbXBvbmVudCBiYXNlZCBvbiBgbWVudVBvc2l0aW9uYFxuXG4gICAgcmV0dXJuIG1lbnVQb3J0YWxUYXJnZXQgfHwgbWVudVBvc2l0aW9uID09PSAnZml4ZWQnID8gUmVhY3QuY3JlYXRlRWxlbWVudChNZW51UG9ydGFsLCBfZXh0ZW5kcyQ0KHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgYXBwZW5kVG86IG1lbnVQb3J0YWxUYXJnZXQsXG4gICAgICBjb250cm9sRWxlbWVudDogdGhpcy5jb250cm9sUmVmLFxuICAgICAgbWVudVBsYWNlbWVudDogbWVudVBsYWNlbWVudCxcbiAgICAgIG1lbnVQb3NpdGlvbjogbWVudVBvc2l0aW9uXG4gICAgfSksIG1lbnVFbGVtZW50KSA6IG1lbnVFbGVtZW50O1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXJGb3JtRmllbGQgPSBmdW5jdGlvbiByZW5kZXJGb3JtRmllbGQoKSB7XG4gICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMxOSA9IHRoaXMucHJvcHMsXG4gICAgICAgIGRlbGltaXRlciA9IF90aGlzJHByb3BzMTkuZGVsaW1pdGVyLFxuICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHMxOS5pc0Rpc2FibGVkLFxuICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHMxOS5pc011bHRpLFxuICAgICAgICBuYW1lID0gX3RoaXMkcHJvcHMxOS5uYW1lO1xuICAgIHZhciBzZWxlY3RWYWx1ZSA9IHRoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgaWYgKCFuYW1lIHx8IGlzRGlzYWJsZWQpIHJldHVybjtcblxuICAgIGlmIChpc011bHRpKSB7XG4gICAgICBpZiAoZGVsaW1pdGVyKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHNlbGVjdFZhbHVlLm1hcChmdW5jdGlvbiAob3B0KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNi5nZXRPcHRpb25WYWx1ZShvcHQpO1xuICAgICAgICB9KS5qb2luKGRlbGltaXRlcik7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogXCJoaWRkZW5cIixcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaW5wdXQgPSBzZWxlY3RWYWx1ZS5sZW5ndGggPiAwID8gc2VsZWN0VmFsdWUubWFwKGZ1bmN0aW9uIChvcHQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGtleTogXCJpLVwiICsgaSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB0eXBlOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgdmFsdWU6IF90aGlzNi5nZXRPcHRpb25WYWx1ZShvcHQpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pIDogUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6IFwiaGlkZGVuXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIGlucHV0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF92YWx1ZTIgPSBzZWxlY3RWYWx1ZVswXSA/IHRoaXMuZ2V0T3B0aW9uVmFsdWUoc2VsZWN0VmFsdWVbMF0pIDogJyc7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICB0eXBlOiBcImhpZGRlblwiLFxuICAgICAgICB2YWx1ZTogX3ZhbHVlMlxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXJMaXZlUmVnaW9uID0gZnVuY3Rpb24gcmVuZGVyTGl2ZVJlZ2lvbigpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNGb2N1c2VkKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChBMTF5VGV4dCwge1xuICAgICAgXCJhcmlhLWxpdmVcIjogXCJwb2xpdGVcIlxuICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtcbiAgICAgIGlkOiBcImFyaWEtc2VsZWN0aW9uLWV2ZW50XCJcbiAgICB9LCBcIlxceEEwXCIsIHRoaXMuc3RhdGUuYXJpYUxpdmVTZWxlY3Rpb24pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7XG4gICAgICBpZDogXCJhcmlhLWNvbnRleHRcIlxuICAgIH0sIFwiXFx4QTBcIiwgdGhpcy5jb25zdHJ1Y3RBcmlhTGl2ZU1lc3NhZ2UoKSkpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJGNvbXBvbmVudHM0ID0gdGhpcy5jb21wb25lbnRzLFxuICAgICAgICBDb250cm9sID0gX3RoaXMkY29tcG9uZW50czQuQ29udHJvbCxcbiAgICAgICAgSW5kaWNhdG9yc0NvbnRhaW5lciA9IF90aGlzJGNvbXBvbmVudHM0LkluZGljYXRvcnNDb250YWluZXIsXG4gICAgICAgIFNlbGVjdENvbnRhaW5lciA9IF90aGlzJGNvbXBvbmVudHM0LlNlbGVjdENvbnRhaW5lcixcbiAgICAgICAgVmFsdWVDb250YWluZXIgPSBfdGhpcyRjb21wb25lbnRzNC5WYWx1ZUNvbnRhaW5lcjtcbiAgICB2YXIgX3RoaXMkcHJvcHMyMCA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzMjAuY2xhc3NOYW1lLFxuICAgICAgICBpZCA9IF90aGlzJHByb3BzMjAuaWQsXG4gICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczIwLmlzRGlzYWJsZWQsXG4gICAgICAgIG1lbnVJc09wZW4gPSBfdGhpcyRwcm9wczIwLm1lbnVJc09wZW47XG4gICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHMgPSB0aGlzLmdldENvbW1vblByb3BzKCk7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udGFpbmVyLCBfZXh0ZW5kcyQ0KHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICBpbm5lclByb3BzOiB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLm9uS2V5RG93blxuICAgICAgfSxcbiAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgIH0pLCB0aGlzLnJlbmRlckxpdmVSZWdpb24oKSwgUmVhY3QuY3JlYXRlRWxlbWVudChDb250cm9sLCBfZXh0ZW5kcyQ0KHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgaW5uZXJSZWY6IHRoaXMuZ2V0Q29udHJvbFJlZixcbiAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25Db250cm9sTW91c2VEb3duLFxuICAgICAgICBvblRvdWNoRW5kOiB0aGlzLm9uQ29udHJvbFRvdWNoRW5kXG4gICAgICB9LFxuICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkLFxuICAgICAgbWVudUlzT3BlbjogbWVudUlzT3BlblxuICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFZhbHVlQ29udGFpbmVyLCBfZXh0ZW5kcyQ0KHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZFxuICAgIH0pLCB0aGlzLnJlbmRlclBsYWNlaG9sZGVyT3JWYWx1ZSgpLCB0aGlzLnJlbmRlcklucHV0KCkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEluZGljYXRvcnNDb250YWluZXIsIF9leHRlbmRzJDQoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkXG4gICAgfSksIHRoaXMucmVuZGVyQ2xlYXJJbmRpY2F0b3IoKSwgdGhpcy5yZW5kZXJMb2FkaW5nSW5kaWNhdG9yKCksIHRoaXMucmVuZGVySW5kaWNhdG9yU2VwYXJhdG9yKCksIHRoaXMucmVuZGVyRHJvcGRvd25JbmRpY2F0b3IoKSkpLCB0aGlzLnJlbmRlck1lbnUoKSwgdGhpcy5yZW5kZXJGb3JtRmllbGQoKSk7XG4gIH07XG5cbiAgcmV0dXJuIFNlbGVjdDtcbn0oQ29tcG9uZW50KTtcblxuU2VsZWN0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IHsgU2VsZWN0IGFzIFMsIGRlZmF1bHRUaGVtZSBhcyBhLCBjcmVhdGVGaWx0ZXIgYXMgYywgZGVmYXVsdFByb3BzIGFzIGQsIG1lcmdlU3R5bGVzIGFzIG0gfTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCwga2V5ZnJhbWVzLCBDbGFzc05hbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGcgYXMgZ2V0Qm91bmRpbmdDbGllbnRPYmosIGEgYXMgZ2V0U2Nyb2xsUGFyZW50LCBiIGFzIGdldFNjcm9sbFRvcCwgYyBhcyBhbmltYXRlZFNjcm9sbFRvLCBzIGFzIHNjcm9sbFRvIH0gZnJvbSAnLi91dGlscy0wNmIwZDVhNC5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgX2NzcyBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IEF1dG9zaXplSW5wdXQgZnJvbSAncmVhY3QtaW5wdXQtYXV0b3NpemUnO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cbmZ1bmN0aW9uIGdldE1lbnVQbGFjZW1lbnQoX3JlZikge1xuICB2YXIgbWF4SGVpZ2h0ID0gX3JlZi5tYXhIZWlnaHQsXG4gICAgICBtZW51RWwgPSBfcmVmLm1lbnVFbCxcbiAgICAgIG1pbkhlaWdodCA9IF9yZWYubWluSGVpZ2h0LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQsXG4gICAgICBzaG91bGRTY3JvbGwgPSBfcmVmLnNob3VsZFNjcm9sbCxcbiAgICAgIGlzRml4ZWRQb3NpdGlvbiA9IF9yZWYuaXNGaXhlZFBvc2l0aW9uLFxuICAgICAgdGhlbWUgPSBfcmVmLnRoZW1lO1xuICB2YXIgc3BhY2luZyA9IHRoZW1lLnNwYWNpbmc7XG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQobWVudUVsKTtcbiAgdmFyIGRlZmF1bHRTdGF0ZSA9IHtcbiAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gIH07IC8vIHNvbWV0aGluZyB3ZW50IHdyb25nLCByZXR1cm4gZGVmYXVsdCBzdGF0ZVxuXG4gIGlmICghbWVudUVsIHx8ICFtZW51RWwub2Zmc2V0UGFyZW50KSByZXR1cm4gZGVmYXVsdFN0YXRlOyAvLyB3ZSBjYW4ndCB0cnVzdCBgc2Nyb2xsUGFyZW50LnNjcm9sbEhlaWdodGAgLS0+IGl0IG1heSBpbmNyZWFzZSB3aGVuXG4gIC8vIHRoZSBtZW51IGlzIHJlbmRlcmVkXG5cbiAgdmFyIF9zY3JvbGxQYXJlbnQkZ2V0Qm91biA9IHNjcm9sbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHNjcm9sbEhlaWdodCA9IF9zY3JvbGxQYXJlbnQkZ2V0Qm91bi5oZWlnaHQ7XG5cbiAgdmFyIF9tZW51RWwkZ2V0Qm91bmRpbmdDbCA9IG1lbnVFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIG1lbnVCb3R0b20gPSBfbWVudUVsJGdldEJvdW5kaW5nQ2wuYm90dG9tLFxuICAgICAgbWVudUhlaWdodCA9IF9tZW51RWwkZ2V0Qm91bmRpbmdDbC5oZWlnaHQsXG4gICAgICBtZW51VG9wID0gX21lbnVFbCRnZXRCb3VuZGluZ0NsLnRvcDtcblxuICB2YXIgX21lbnVFbCRvZmZzZXRQYXJlbnQkID0gbWVudUVsLm9mZnNldFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGNvbnRhaW5lclRvcCA9IF9tZW51RWwkb2Zmc2V0UGFyZW50JC50b3A7XG5cbiAgdmFyIHZpZXdIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHZhciBzY3JvbGxUb3AgPSBnZXRTY3JvbGxUb3Aoc2Nyb2xsUGFyZW50KTtcbiAgdmFyIG1hcmdpbkJvdHRvbSA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUobWVudUVsKS5tYXJnaW5Cb3R0b20sIDEwKTtcbiAgdmFyIG1hcmdpblRvcCA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUobWVudUVsKS5tYXJnaW5Ub3AsIDEwKTtcbiAgdmFyIHZpZXdTcGFjZUFib3ZlID0gY29udGFpbmVyVG9wIC0gbWFyZ2luVG9wO1xuICB2YXIgdmlld1NwYWNlQmVsb3cgPSB2aWV3SGVpZ2h0IC0gbWVudVRvcDtcbiAgdmFyIHNjcm9sbFNwYWNlQWJvdmUgPSB2aWV3U3BhY2VBYm92ZSArIHNjcm9sbFRvcDtcbiAgdmFyIHNjcm9sbFNwYWNlQmVsb3cgPSBzY3JvbGxIZWlnaHQgLSBzY3JvbGxUb3AgLSBtZW51VG9wO1xuICB2YXIgc2Nyb2xsRG93biA9IG1lbnVCb3R0b20gLSB2aWV3SGVpZ2h0ICsgc2Nyb2xsVG9wICsgbWFyZ2luQm90dG9tO1xuICB2YXIgc2Nyb2xsVXAgPSBzY3JvbGxUb3AgKyBtZW51VG9wIC0gbWFyZ2luVG9wO1xuICB2YXIgc2Nyb2xsRHVyYXRpb24gPSAxNjA7XG5cbiAgc3dpdGNoIChwbGFjZW1lbnQpIHtcbiAgICBjYXNlICdhdXRvJzpcbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgLy8gMTogdGhlIG1lbnUgd2lsbCBmaXQsIGRvIG5vdGhpbmdcbiAgICAgIGlmICh2aWV3U3BhY2VCZWxvdyA+PSBtZW51SGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfSAvLyAyOiB0aGUgbWVudSB3aWxsIGZpdCwgaWYgc2Nyb2xsZWRcblxuXG4gICAgICBpZiAoc2Nyb2xsU3BhY2VCZWxvdyA+PSBtZW51SGVpZ2h0ICYmICFpc0ZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHNob3VsZFNjcm9sbCkge1xuICAgICAgICAgIGFuaW1hdGVkU2Nyb2xsVG8oc2Nyb2xsUGFyZW50LCBzY3JvbGxEb3duLCBzY3JvbGxEdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gMzogdGhlIG1lbnUgd2lsbCBmaXQsIGlmIGNvbnN0cmFpbmVkXG5cblxuICAgICAgaWYgKCFpc0ZpeGVkUG9zaXRpb24gJiYgc2Nyb2xsU3BhY2VCZWxvdyA+PSBtaW5IZWlnaHQgfHwgaXNGaXhlZFBvc2l0aW9uICYmIHZpZXdTcGFjZUJlbG93ID49IG1pbkhlaWdodCkge1xuICAgICAgICBpZiAoc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgICAgYW5pbWF0ZWRTY3JvbGxUbyhzY3JvbGxQYXJlbnQsIHNjcm9sbERvd24sIHNjcm9sbER1cmF0aW9uKTtcbiAgICAgICAgfSAvLyB3ZSB3YW50IHRvIHByb3ZpZGUgYXMgbXVjaCBvZiB0aGUgbWVudSBhcyBwb3NzaWJsZSB0byB0aGUgdXNlcixcbiAgICAgICAgLy8gc28gZ2l2ZSB0aGVtIHdoYXRldmVyIGlzIGF2YWlsYWJsZSBiZWxvdyByYXRoZXIgdGhhbiB0aGUgbWluSGVpZ2h0LlxuXG5cbiAgICAgICAgdmFyIGNvbnN0cmFpbmVkSGVpZ2h0ID0gaXNGaXhlZFBvc2l0aW9uID8gdmlld1NwYWNlQmVsb3cgLSBtYXJnaW5Cb3R0b20gOiBzY3JvbGxTcGFjZUJlbG93IC0gbWFyZ2luQm90dG9tO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBjb25zdHJhaW5lZEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfSAvLyA0LiBGb3JrZWQgYmV2aW91ciB3aGVuIHRoZXJlIGlzbid0IGVub3VnaCBzcGFjZSBiZWxvd1xuICAgICAgLy8gQVVUTzogZmxpcCB0aGUgbWVudSwgcmVuZGVyIGFib3ZlXG5cblxuICAgICAgaWYgKHBsYWNlbWVudCA9PT0gJ2F1dG8nIHx8IGlzRml4ZWRQb3NpdGlvbikge1xuICAgICAgICAvLyBtYXkgbmVlZCB0byBiZSBjb25zdHJhaW5lZCBhZnRlciBmbGlwcGluZ1xuICAgICAgICB2YXIgX2NvbnN0cmFpbmVkSGVpZ2h0ID0gbWF4SGVpZ2h0O1xuICAgICAgICB2YXIgc3BhY2VBYm92ZSA9IGlzRml4ZWRQb3NpdGlvbiA/IHZpZXdTcGFjZUFib3ZlIDogc2Nyb2xsU3BhY2VBYm92ZTtcblxuICAgICAgICBpZiAoc3BhY2VBYm92ZSA+PSBtaW5IZWlnaHQpIHtcbiAgICAgICAgICBfY29uc3RyYWluZWRIZWlnaHQgPSBNYXRoLm1pbihzcGFjZUFib3ZlIC0gbWFyZ2luQm90dG9tIC0gc3BhY2luZy5jb250cm9sSGVpZ2h0LCBtYXhIZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgIG1heEhlaWdodDogX2NvbnN0cmFpbmVkSGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IC8vIEJPVFRPTTogYWxsb3cgYnJvd3NlciB0byBpbmNyZWFzZSBzY3JvbGxhYmxlIGFyZWEgYW5kIGltbWVkaWF0ZWx5IHNldCBzY3JvbGxcblxuXG4gICAgICBpZiAocGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgICAgICBzY3JvbGxUbyhzY3JvbGxQYXJlbnQsIHNjcm9sbERvd24pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd0b3AnOlxuICAgICAgLy8gMTogdGhlIG1lbnUgd2lsbCBmaXQsIGRvIG5vdGhpbmdcbiAgICAgIGlmICh2aWV3U3BhY2VBYm92ZSA+PSBtZW51SGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfSAvLyAyOiB0aGUgbWVudSB3aWxsIGZpdCwgaWYgc2Nyb2xsZWRcblxuXG4gICAgICBpZiAoc2Nyb2xsU3BhY2VBYm92ZSA+PSBtZW51SGVpZ2h0ICYmICFpc0ZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHNob3VsZFNjcm9sbCkge1xuICAgICAgICAgIGFuaW1hdGVkU2Nyb2xsVG8oc2Nyb2xsUGFyZW50LCBzY3JvbGxVcCwgc2Nyb2xsRHVyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IC8vIDM6IHRoZSBtZW51IHdpbGwgZml0LCBpZiBjb25zdHJhaW5lZFxuXG5cbiAgICAgIGlmICghaXNGaXhlZFBvc2l0aW9uICYmIHNjcm9sbFNwYWNlQWJvdmUgPj0gbWluSGVpZ2h0IHx8IGlzRml4ZWRQb3NpdGlvbiAmJiB2aWV3U3BhY2VBYm92ZSA+PSBtaW5IZWlnaHQpIHtcbiAgICAgICAgdmFyIF9jb25zdHJhaW5lZEhlaWdodDIgPSBtYXhIZWlnaHQ7IC8vIHdlIHdhbnQgdG8gcHJvdmlkZSBhcyBtdWNoIG9mIHRoZSBtZW51IGFzIHBvc3NpYmxlIHRvIHRoZSB1c2VyLFxuICAgICAgICAvLyBzbyBnaXZlIHRoZW0gd2hhdGV2ZXIgaXMgYXZhaWxhYmxlIGJlbG93IHJhdGhlciB0aGFuIHRoZSBtaW5IZWlnaHQuXG5cbiAgICAgICAgaWYgKCFpc0ZpeGVkUG9zaXRpb24gJiYgc2Nyb2xsU3BhY2VBYm92ZSA+PSBtaW5IZWlnaHQgfHwgaXNGaXhlZFBvc2l0aW9uICYmIHZpZXdTcGFjZUFib3ZlID49IG1pbkhlaWdodCkge1xuICAgICAgICAgIF9jb25zdHJhaW5lZEhlaWdodDIgPSBpc0ZpeGVkUG9zaXRpb24gPyB2aWV3U3BhY2VBYm92ZSAtIG1hcmdpblRvcCA6IHNjcm9sbFNwYWNlQWJvdmUgLSBtYXJnaW5Ub3A7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgICAgYW5pbWF0ZWRTY3JvbGxUbyhzY3JvbGxQYXJlbnQsIHNjcm9sbFVwLCBzY3JvbGxEdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBfY29uc3RyYWluZWRIZWlnaHQyXG4gICAgICAgIH07XG4gICAgICB9IC8vIDQuIG5vdCBlbm91Z2ggc3BhY2UsIHRoZSBicm93c2VyIFdJTEwgTk9UIGluY3JlYXNlIHNjcm9sbGFibGUgYXJlYSB3aGVuXG4gICAgICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQgZWxlbWVudCByZW5kZXJlZCBhYm92ZSB0aGUgdmlld3BvcnQgKG9ubHkgYmVsb3cpLlxuICAgICAgLy8gRmxpcCB0aGUgbWVudSwgcmVuZGVyIGJlbG93XG5cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHRcbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwbGFjZW1lbnQgcHJvdmlkZWQgXFxcIlwiICsgcGxhY2VtZW50ICsgXCJcXFwiLlwiKTtcbiAgfSAvLyBmdWxmaWwgY29udHJhY3Qgd2l0aCBmbG93OiBpbXBsaWNpdCByZXR1cm4gdmFsdWUgb2YgdW5kZWZpbmVkXG5cblxuICByZXR1cm4gZGVmYXVsdFN0YXRlO1xufSAvLyBNZW51IENvbXBvbmVudFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGFsaWduVG9Db250cm9sKHBsYWNlbWVudCkge1xuICB2YXIgcGxhY2VtZW50VG9DU1NQcm9wID0ge1xuICAgIGJvdHRvbTogJ3RvcCcsXG4gICAgdG9wOiAnYm90dG9tJ1xuICB9O1xuICByZXR1cm4gcGxhY2VtZW50ID8gcGxhY2VtZW50VG9DU1NQcm9wW3BsYWNlbWVudF0gOiAnYm90dG9tJztcbn1cblxudmFyIGNvZXJjZVBsYWNlbWVudCA9IGZ1bmN0aW9uIGNvZXJjZVBsYWNlbWVudChwKSB7XG4gIHJldHVybiBwID09PSAnYXV0bycgPyAnYm90dG9tJyA6IHA7XG59O1xuXG52YXIgbWVudUNTUyA9IGZ1bmN0aW9uIG1lbnVDU1MoX3JlZjIpIHtcbiAgdmFyIF9yZWYzO1xuXG4gIHZhciBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICBfcmVmMiR0aGVtZSA9IF9yZWYyLnRoZW1lLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX3JlZjIkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgc3BhY2luZyA9IF9yZWYyJHRoZW1lLnNwYWNpbmcsXG4gICAgICBjb2xvcnMgPSBfcmVmMiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiBfcmVmMyA9IHtcbiAgICBsYWJlbDogJ21lbnUnXG4gIH0sIF9yZWYzW2FsaWduVG9Db250cm9sKHBsYWNlbWVudCldID0gJzEwMCUnLCBfcmVmMy5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcnMubmV1dHJhbDAsIF9yZWYzLmJvcmRlclJhZGl1cyA9IGJvcmRlclJhZGl1cywgX3JlZjMuYm94U2hhZG93ID0gJzAgMCAwIDFweCBoc2xhKDAsIDAlLCAwJSwgMC4xKSwgMCA0cHggMTFweCBoc2xhKDAsIDAlLCAwJSwgMC4xKScsIF9yZWYzLm1hcmdpbkJvdHRvbSA9IHNwYWNpbmcubWVudUd1dHRlciwgX3JlZjMubWFyZ2luVG9wID0gc3BhY2luZy5tZW51R3V0dGVyLCBfcmVmMy5wb3NpdGlvbiA9ICdhYnNvbHV0ZScsIF9yZWYzLndpZHRoID0gJzEwMCUnLCBfcmVmMy56SW5kZXggPSAxLCBfcmVmMztcbn07IC8vIE5PVEU6IGludGVybmFsIG9ubHlcblxudmFyIE1lbnVQbGFjZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoTWVudVBsYWNlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTWVudVBsYWNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1heEhlaWdodDogX3RoaXMucHJvcHMubWF4TWVudUhlaWdodCxcbiAgICAgIHBsYWNlbWVudDogbnVsbFxuICAgIH07XG5cbiAgICBfdGhpcy5nZXRQbGFjZW1lbnQgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtaW5NZW51SGVpZ2h0ID0gX3RoaXMkcHJvcHMubWluTWVudUhlaWdodCxcbiAgICAgICAgICBtYXhNZW51SGVpZ2h0ID0gX3RoaXMkcHJvcHMubWF4TWVudUhlaWdodCxcbiAgICAgICAgICBtZW51UGxhY2VtZW50ID0gX3RoaXMkcHJvcHMubWVudVBsYWNlbWVudCxcbiAgICAgICAgICBtZW51UG9zaXRpb24gPSBfdGhpcyRwcm9wcy5tZW51UG9zaXRpb24sXG4gICAgICAgICAgbWVudVNob3VsZFNjcm9sbEludG9WaWV3ID0gX3RoaXMkcHJvcHMubWVudVNob3VsZFNjcm9sbEludG9WaWV3LFxuICAgICAgICAgIHRoZW1lID0gX3RoaXMkcHJvcHMudGhlbWU7XG4gICAgICB2YXIgZ2V0UG9ydGFsUGxhY2VtZW50ID0gX3RoaXMuY29udGV4dC5nZXRQb3J0YWxQbGFjZW1lbnQ7XG4gICAgICBpZiAoIXJlZikgcmV0dXJuOyAvLyBETyBOT1Qgc2Nyb2xsIGlmIHBvc2l0aW9uIGlzIGZpeGVkXG5cbiAgICAgIHZhciBpc0ZpeGVkUG9zaXRpb24gPSBtZW51UG9zaXRpb24gPT09ICdmaXhlZCc7XG4gICAgICB2YXIgc2hvdWxkU2Nyb2xsID0gbWVudVNob3VsZFNjcm9sbEludG9WaWV3ICYmICFpc0ZpeGVkUG9zaXRpb247XG4gICAgICB2YXIgc3RhdGUgPSBnZXRNZW51UGxhY2VtZW50KHtcbiAgICAgICAgbWF4SGVpZ2h0OiBtYXhNZW51SGVpZ2h0LFxuICAgICAgICBtZW51RWw6IHJlZixcbiAgICAgICAgbWluSGVpZ2h0OiBtaW5NZW51SGVpZ2h0LFxuICAgICAgICBwbGFjZW1lbnQ6IG1lbnVQbGFjZW1lbnQsXG4gICAgICAgIHNob3VsZFNjcm9sbDogc2hvdWxkU2Nyb2xsLFxuICAgICAgICBpc0ZpeGVkUG9zaXRpb246IGlzRml4ZWRQb3NpdGlvbixcbiAgICAgICAgdGhlbWU6IHRoZW1lXG4gICAgICB9KTtcbiAgICAgIGlmIChnZXRQb3J0YWxQbGFjZW1lbnQpIGdldFBvcnRhbFBsYWNlbWVudChzdGF0ZSk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0VXBkYXRlZFByb3BzID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG1lbnVQbGFjZW1lbnQgPSBfdGhpcy5wcm9wcy5tZW51UGxhY2VtZW50O1xuICAgICAgdmFyIHBsYWNlbWVudCA9IF90aGlzLnN0YXRlLnBsYWNlbWVudCB8fCBjb2VyY2VQbGFjZW1lbnQobWVudVBsYWNlbWVudCk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF90aGlzLnByb3BzLCB7XG4gICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgICBtYXhIZWlnaHQ6IF90aGlzLnN0YXRlLm1heEhlaWdodFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNZW51UGxhY2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgcmV0dXJuIGNoaWxkcmVuKHtcbiAgICAgIHJlZjogdGhpcy5nZXRQbGFjZW1lbnQsXG4gICAgICBwbGFjZXJQcm9wczogdGhpcy5nZXRVcGRhdGVkUHJvcHMoKVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBNZW51UGxhY2VyO1xufShDb21wb25lbnQpO1xuTWVudVBsYWNlci5jb250ZXh0VHlwZXMgPSB7XG4gIGdldFBvcnRhbFBsYWNlbWVudDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbnZhciBNZW51ID0gZnVuY3Rpb24gTWVudShwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdtZW51JywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgbWVudTogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwgaW5uZXJQcm9wcywge1xuICAgIHJlZjogaW5uZXJSZWZcbiAgfSksIGNoaWxkcmVuKTtcbn07XG4vLyBNZW51IExpc3Rcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgbWVudUxpc3RDU1MgPSBmdW5jdGlvbiBtZW51TGlzdENTUyhfcmVmNCkge1xuICB2YXIgbWF4SGVpZ2h0ID0gX3JlZjQubWF4SGVpZ2h0LFxuICAgICAgYmFzZVVuaXQgPSBfcmVmNC50aGVtZS5zcGFjaW5nLmJhc2VVbml0O1xuICByZXR1cm4ge1xuICAgIG1heEhlaWdodDogbWF4SGVpZ2h0LFxuICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgIHBhZGRpbmdCb3R0b206IGJhc2VVbml0LFxuICAgIHBhZGRpbmdUb3A6IGJhc2VVbml0LFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIC8vIHJlcXVpcmVkIGZvciBvZmZzZXRbSGVpZ2h0LCBUb3BdID4ga2V5Ym9hcmQgc2Nyb2xsXG4gICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCdcbiAgfTtcbn07XG52YXIgTWVudUxpc3QgPSBmdW5jdGlvbiBNZW51TGlzdChwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpc011bHRpID0gcHJvcHMuaXNNdWx0aSxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWY7XG4gIHJldHVybiBqc3goXCJkaXZcIiwge1xuICAgIGNzczogZ2V0U3R5bGVzKCdtZW51TGlzdCcsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdtZW51LWxpc3QnOiB0cnVlLFxuICAgICAgJ21lbnUtbGlzdC0taXMtbXVsdGknOiBpc011bHRpXG4gICAgfSwgY2xhc3NOYW1lKSxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0sIGNoaWxkcmVuKTtcbn07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVudSBOb3RpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIG5vdGljZUNTUyA9IGZ1bmN0aW9uIG5vdGljZUNTUyhfcmVmNSkge1xuICB2YXIgX3JlZjUkdGhlbWUgPSBfcmVmNS50aGVtZSxcbiAgICAgIGJhc2VVbml0ID0gX3JlZjUkdGhlbWUuc3BhY2luZy5iYXNlVW5pdCxcbiAgICAgIGNvbG9ycyA9IF9yZWY1JHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBjb2xvcjogY29sb3JzLm5ldXRyYWw0MCxcbiAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIgKyBcInB4IFwiICsgYmFzZVVuaXQgKiAzICsgXCJweFwiLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgfTtcbn07XG5cbnZhciBub09wdGlvbnNNZXNzYWdlQ1NTID0gbm90aWNlQ1NTO1xudmFyIGxvYWRpbmdNZXNzYWdlQ1NTID0gbm90aWNlQ1NTO1xudmFyIE5vT3B0aW9uc01lc3NhZ2UgPSBmdW5jdGlvbiBOb09wdGlvbnNNZXNzYWdlKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IGdldFN0eWxlcygnbm9PcHRpb25zTWVzc2FnZScsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdtZW51LW5vdGljZSc6IHRydWUsXG4gICAgICAnbWVudS1ub3RpY2UtLW5vLW9wdGlvbnMnOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcbk5vT3B0aW9uc01lc3NhZ2UuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogJ05vIG9wdGlvbnMnXG59O1xudmFyIExvYWRpbmdNZXNzYWdlID0gZnVuY3Rpb24gTG9hZGluZ01lc3NhZ2UocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdsb2FkaW5nTWVzc2FnZScsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdtZW51LW5vdGljZSc6IHRydWUsXG4gICAgICAnbWVudS1ub3RpY2UtLWxvYWRpbmcnOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcbkxvYWRpbmdNZXNzYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46ICdMb2FkaW5nLi4uJ1xufTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZW51IFBvcnRhbFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBtZW51UG9ydGFsQ1NTID0gZnVuY3Rpb24gbWVudVBvcnRhbENTUyhfcmVmNikge1xuICB2YXIgcmVjdCA9IF9yZWY2LnJlY3QsXG4gICAgICBvZmZzZXQgPSBfcmVmNi5vZmZzZXQsXG4gICAgICBwb3NpdGlvbiA9IF9yZWY2LnBvc2l0aW9uO1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgdG9wOiBvZmZzZXQsXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgekluZGV4OiAxXG4gIH07XG59O1xudmFyIE1lbnVQb3J0YWwgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gIF9pbmhlcml0c0xvb3NlKE1lbnVQb3J0YWwsIF9Db21wb25lbnQyKTtcblxuICBmdW5jdGlvbiBNZW51UG9ydGFsKCkge1xuICAgIHZhciBfdGhpczI7XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBfdGhpczIgPSBfQ29tcG9uZW50Mi5jYWxsLmFwcGx5KF9Db21wb25lbnQyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzMi5zdGF0ZSA9IHtcbiAgICAgIHBsYWNlbWVudDogbnVsbFxuICAgIH07XG5cbiAgICBfdGhpczIuZ2V0UG9ydGFsUGxhY2VtZW50ID0gZnVuY3Rpb24gKF9yZWY3KSB7XG4gICAgICB2YXIgcGxhY2VtZW50ID0gX3JlZjcucGxhY2VtZW50O1xuICAgICAgdmFyIGluaXRpYWxQbGFjZW1lbnQgPSBjb2VyY2VQbGFjZW1lbnQoX3RoaXMyLnByb3BzLm1lbnVQbGFjZW1lbnQpOyAvLyBhdm9pZCByZS1yZW5kZXJzIGlmIHRoZSBwbGFjZW1lbnQgaGFzIG5vdCBjaGFuZ2VkXG5cbiAgICAgIGlmIChwbGFjZW1lbnQgIT09IGluaXRpYWxQbGFjZW1lbnQpIHtcbiAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuXG4gIHZhciBfcHJvdG8yID0gTWVudVBvcnRhbC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMi5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldFBvcnRhbFBsYWNlbWVudDogdGhpcy5nZXRQb3J0YWxQbGFjZW1lbnRcbiAgICB9O1xuICB9IC8vIGNhbGxiYWNrIGZvciBvY2Nhc3Npb25zIHdoZXJlIHRoZSBtZW51IG11c3QgXCJmbGlwXCJcbiAgO1xuXG4gIF9wcm90bzIucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBhcHBlbmRUbyA9IF90aGlzJHByb3BzMi5hcHBlbmRUbyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczIuY2hpbGRyZW4sXG4gICAgICAgIGNvbnRyb2xFbGVtZW50ID0gX3RoaXMkcHJvcHMyLmNvbnRyb2xFbGVtZW50LFxuICAgICAgICBtZW51UGxhY2VtZW50ID0gX3RoaXMkcHJvcHMyLm1lbnVQbGFjZW1lbnQsXG4gICAgICAgIHBvc2l0aW9uID0gX3RoaXMkcHJvcHMyLm1lbnVQb3NpdGlvbixcbiAgICAgICAgZ2V0U3R5bGVzID0gX3RoaXMkcHJvcHMyLmdldFN0eWxlcztcbiAgICB2YXIgaXNGaXhlZCA9IHBvc2l0aW9uID09PSAnZml4ZWQnOyAvLyBiYWlsIGVhcmx5IGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZW4ndCBwcmVzZW50XG5cbiAgICBpZiAoIWFwcGVuZFRvICYmICFpc0ZpeGVkIHx8ICFjb250cm9sRWxlbWVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHBsYWNlbWVudCA9IHRoaXMuc3RhdGUucGxhY2VtZW50IHx8IGNvZXJjZVBsYWNlbWVudChtZW51UGxhY2VtZW50KTtcbiAgICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50T2JqKGNvbnRyb2xFbGVtZW50KTtcbiAgICB2YXIgc2Nyb2xsRGlzdGFuY2UgPSBpc0ZpeGVkID8gMCA6IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB2YXIgb2Zmc2V0ID0gcmVjdFtwbGFjZW1lbnRdICsgc2Nyb2xsRGlzdGFuY2U7XG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICByZWN0OiByZWN0XG4gICAgfTsgLy8gc2FtZSB3cmFwcGVyIGVsZW1lbnQgd2hldGhlciBmaXhlZCBvciBwb3J0YWxsZWRcblxuICAgIHZhciBtZW51V3JhcHBlciA9IGpzeChcImRpdlwiLCB7XG4gICAgICBjc3M6IGdldFN0eWxlcygnbWVudVBvcnRhbCcsIHN0YXRlKVxuICAgIH0sIGNoaWxkcmVuKTtcbiAgICByZXR1cm4gYXBwZW5kVG8gPyBjcmVhdGVQb3J0YWwobWVudVdyYXBwZXIsIGFwcGVuZFRvKSA6IG1lbnVXcmFwcGVyO1xuICB9O1xuXG4gIHJldHVybiBNZW51UG9ydGFsO1xufShDb21wb25lbnQpO1xuTWVudVBvcnRhbC5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgZ2V0UG9ydGFsUGxhY2VtZW50OiBQcm9wVHlwZXMuZnVuY1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xudmFyIGtleUxpc3QgPSBPYmplY3Qua2V5cztcbnZhciBoYXNQcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZXF1YWwoYSwgYikge1xuICAvLyBmYXN0LWRlZXAtZXF1YWwgaW5kZXguanMgMi4wLjFcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICB2YXIgYXJyQSA9IGlzQXJyYXkoYSksXG4gICAgICAgIGFyckIgPSBpc0FycmF5KGIpLFxuICAgICAgICBpLFxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGtleTtcblxuICAgIGlmIChhcnJBICYmIGFyckIpIHtcbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgICAgaWYgKCFlcXVhbChhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYXJyQSAhPSBhcnJCKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGRhdGVBID0gYSBpbnN0YW5jZW9mIERhdGUsXG4gICAgICAgIGRhdGVCID0gYiBpbnN0YW5jZW9mIERhdGU7XG4gICAgaWYgKGRhdGVBICE9IGRhdGVCKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGRhdGVBICYmIGRhdGVCKSByZXR1cm4gYS5nZXRUaW1lKCkgPT0gYi5nZXRUaW1lKCk7XG4gICAgdmFyIHJlZ2V4cEEgPSBhIGluc3RhbmNlb2YgUmVnRXhwLFxuICAgICAgICByZWdleHBCID0gYiBpbnN0YW5jZW9mIFJlZ0V4cDtcbiAgICBpZiAocmVnZXhwQSAhPSByZWdleHBCKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHJlZ2V4cEEgJiYgcmVnZXhwQikgcmV0dXJuIGEudG9TdHJpbmcoKSA9PSBiLnRvU3RyaW5nKCk7XG4gICAgdmFyIGtleXMgPSBrZXlMaXN0KGEpO1xuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCAhPT0ga2V5TGlzdChiKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIGlmICghaGFzUHJvcC5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBlbmQgZmFzdC1kZWVwLWVxdWFsXG4gICAgLy8gQ3VzdG9tIGhhbmRsaW5nIGZvciBSZWFjdFxuXG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgPT09ICdfb3duZXInICYmIGEuJCR0eXBlb2YpIHtcbiAgICAgICAgLy8gUmVhY3Qtc3BlY2lmaWM6IGF2b2lkIHRyYXZlcnNpbmcgUmVhY3QgZWxlbWVudHMnIF9vd25lci5cbiAgICAgICAgLy8gIF9vd25lciBjb250YWlucyBjaXJjdWxhciByZWZlcmVuY2VzXG4gICAgICAgIC8vIGFuZCBpcyBub3QgbmVlZGVkIHdoZW4gY29tcGFyaW5nIHRoZSBhY3R1YWwgZWxlbWVudHMgKGFuZCBub3QgdGhlaXIgb3duZXJzKVxuICAgICAgICAvLyAuJCR0eXBlb2YgYW5kIC5fc3RvcmUgb24ganVzdCByZWFzb25hYmxlIG1hcmtlcnMgb2YgYSByZWFjdCBlbGVtZW50XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYWxsIG90aGVyIHByb3BlcnRpZXMgc2hvdWxkIGJlIHRyYXZlcnNlZCBhcyB1c3VhbFxuICAgICAgICBpZiAoIWVxdWFsKGFba2V5XSwgYltrZXldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gLy8gZmFzdC1kZWVwLWVxdWFsIGluZGV4LmpzIDIuMC4xXG5cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEgIT09IGEgJiYgYiAhPT0gYjtcbn0gLy8gZW5kIGZhc3QtZGVlcC1lcXVhbFxuXG5cbmZ1bmN0aW9uIGV4cG9ydGVkRXF1YWwoYSwgYikge1xuICB0cnkge1xuICAgIHJldHVybiBlcXVhbChhLCBiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IubWVzc2FnZSAmJiBlcnJvci5tZXNzYWdlLm1hdGNoKC9zdGFja3xyZWN1cnNpb24vaSkpIHtcbiAgICAgIC8vIHdhcm4gb24gY2lyY3VsYXIgcmVmZXJlbmNlcywgZG9uJ3QgY3Jhc2hcbiAgICAgIC8vIGJyb3dzZXJzIGdpdmUgdGhpcyBkaWZmZXJlbnQgZXJyb3JzIG5hbWUgYW5kIG1lc3NhZ2VzOlxuICAgICAgLy8gY2hyb21lL3NhZmFyaTogXCJSYW5nZUVycm9yXCIsIFwiTWF4aW11bSBjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIlxuICAgICAgLy8gZmlyZWZveDogXCJJbnRlcm5hbEVycm9yXCIsIHRvbyBtdWNoIHJlY3Vyc2lvblwiXG4gICAgICAvLyBlZGdlOiBcIkVycm9yXCIsIFwiT3V0IG9mIHN0YWNrIHNwYWNlXCJcbiAgICAgIGNvbnNvbGUud2FybignV2FybmluZzogcmVhY3QtZmFzdC1jb21wYXJlIGRvZXMgbm90IGhhbmRsZSBjaXJjdWxhciByZWZlcmVuY2VzLicsIGVycm9yLm5hbWUsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gc29tZSBvdGhlciBlcnJvci4gd2Ugc2hvdWxkIGRlZmluaXRlbHkga25vdyBhYm91dCB0aGVzZVxuXG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcyQxKCkgeyBfZXh0ZW5kcyQxID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzJDEuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxudmFyIGNvbnRhaW5lckNTUyA9IGZ1bmN0aW9uIGNvbnRhaW5lckNTUyhfcmVmKSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX3JlZi5pc0Rpc2FibGVkLFxuICAgICAgaXNSdGwgPSBfcmVmLmlzUnRsO1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnY29udGFpbmVyJyxcbiAgICBkaXJlY3Rpb246IGlzUnRsID8gJ3J0bCcgOiBudWxsLFxuICAgIHBvaW50ZXJFdmVudHM6IGlzRGlzYWJsZWQgPyAnbm9uZScgOiBudWxsLFxuICAgIC8vIGNhbmNlbCBtb3VzZSBldmVudHMgd2hlbiBkaXNhYmxlZFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH07XG59O1xudmFyIFNlbGVjdENvbnRhaW5lciA9IGZ1bmN0aW9uIFNlbGVjdENvbnRhaW5lcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgICAgaXNSdGwgPSBwcm9wcy5pc1J0bDtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyQxKHtcbiAgICBjc3M6IGdldFN0eWxlcygnY29udGFpbmVyJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJy0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkLFxuICAgICAgJy0taXMtcnRsJzogaXNSdGxcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZhbHVlIENvbnRhaW5lclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciB2YWx1ZUNvbnRhaW5lckNTUyA9IGZ1bmN0aW9uIHZhbHVlQ29udGFpbmVyQ1NTKF9yZWYyKSB7XG4gIHZhciBzcGFjaW5nID0gX3JlZjIudGhlbWUuc3BhY2luZztcbiAgcmV0dXJuIHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleDogMSxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIHBhZGRpbmc6IHNwYWNpbmcuYmFzZVVuaXQgLyAyICsgXCJweCBcIiArIHNwYWNpbmcuYmFzZVVuaXQgKiAyICsgXCJweFwiLFxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9O1xufTtcbnZhciBWYWx1ZUNvbnRhaW5lciA9IGZ1bmN0aW9uIFZhbHVlQ29udGFpbmVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGlzTXVsdGkgPSBwcm9wcy5pc011bHRpLFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaGFzVmFsdWUgPSBwcm9wcy5oYXNWYWx1ZTtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCB7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ3ZhbHVlQ29udGFpbmVyJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ3ZhbHVlLWNvbnRhaW5lcic6IHRydWUsXG4gICAgICAndmFsdWUtY29udGFpbmVyLS1pcy1tdWx0aSc6IGlzTXVsdGksXG4gICAgICAndmFsdWUtY29udGFpbmVyLS1oYXMtdmFsdWUnOiBoYXNWYWx1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwgY2hpbGRyZW4pO1xufTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBJbmRpY2F0b3IgQ29udGFpbmVyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGluZGljYXRvcnNDb250YWluZXJDU1MgPSBmdW5jdGlvbiBpbmRpY2F0b3JzQ29udGFpbmVyQ1NTKCkge1xuICByZXR1cm4ge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4U2hyaW5rOiAwXG4gIH07XG59O1xudmFyIEluZGljYXRvcnNDb250YWluZXIgPSBmdW5jdGlvbiBJbmRpY2F0b3JzQ29udGFpbmVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCB7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2luZGljYXRvcnNDb250YWluZXInLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBpbmRpY2F0b3JzOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBjaGlsZHJlbik7XG59O1xuXG5mdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QoKSB7XG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKFtcIlxcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cXG5cIl0pO1xuXG4gIF90ZW1wbGF0ZU9iamVjdCA9IGZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKHN0cmluZ3MsIHJhdykgeyBpZiAoIXJhdykgeyByYXcgPSBzdHJpbmdzLnNsaWNlKDApOyB9IHN0cmluZ3MucmF3ID0gcmF3OyByZXR1cm4gc3RyaW5nczsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcyQyKCkgeyBfZXh0ZW5kcyQyID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzJDIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBfcmVmMiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgbmFtZTogXCIxOWJxaDJyXCIsXG4gIHN0eWxlczogXCJkaXNwbGF5OmlubGluZS1ibG9jaztmaWxsOmN1cnJlbnRDb2xvcjtsaW5lLWhlaWdodDoxO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjA7XCJcbn0gOiB7XG4gIG5hbWU6IFwiMTlicWgyclwiLFxuICBzdHlsZXM6IFwiZGlzcGxheTppbmxpbmUtYmxvY2s7ZmlsbDpjdXJyZW50Q29sb3I7bGluZS1oZWlnaHQ6MTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowO1wiLFxuICBtYXA6IFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1sdVpHbGpZWFJ2Y25NdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJhMEpKSWl3aVptbHNaU0k2SW1sdVpHbGpZWFJ2Y25NdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2THlCQVpteHZkMXh1THlvcUlFQnFjM2dnYW5ONElDb3ZYRzVwYlhCdmNuUWdleUIwZVhCbElFNXZaR1VnZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdleUJxYzNnc0lHdGxlV1p5WVcxbGN5QjlJR1p5YjIwZ0owQmxiVzkwYVc5dUwyTnZjbVVuTzF4dVhHNXBiWEJ2Y25RZ2RIbHdaU0I3SUVOdmJXMXZibEJ5YjNCekxDQlVhR1Z0WlNCOUlHWnliMjBnSnk0dUwzUjVjR1Z6Snp0Y2JseHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNHZMeUJFY205d1pHOTNiaUFtSUVOc1pXRnlJRWxqYjI1elhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JseHVZMjl1YzNRZ1UzWm5JRDBnS0hzZ2MybDZaU3dnTGk0dWNISnZjSE1nZlRvZ2V5QnphWHBsT2lCdWRXMWlaWElnZlNrZ1BUNGdLRnh1SUNBOGMzWm5YRzRnSUNBZ2FHVnBaMmgwUFh0emFYcGxmVnh1SUNBZ0lIZHBaSFJvUFh0emFYcGxmVnh1SUNBZ0lIWnBaWGRDYjNnOVhDSXdJREFnTWpBZ01qQmNJbHh1SUNBZ0lHRnlhV0V0YUdsa1pHVnVQVndpZEhKMVpWd2lYRzRnSUNBZ1ptOWpkWE5oWW14bFBWd2labUZzYzJWY0lseHVJQ0FnSUdOemN6MTdlMXh1SUNBZ0lDQWdaR2x6Y0d4aGVUb2dKMmx1YkdsdVpTMWliRzlqYXljc1hHNGdJQ0FnSUNCbWFXeHNPaUFuWTNWeWNtVnVkRU52Ykc5eUp5eGNiaUFnSUNBZ0lHeHBibVZJWldsbmFIUTZJREVzWEc0Z0lDQWdJQ0J6ZEhKdmEyVTZJQ2RqZFhKeVpXNTBRMjlzYjNJbkxGeHVJQ0FnSUNBZ2MzUnliMnRsVjJsa2RHZzZJREFzWEc0Z0lDQWdmWDFjYmlBZ0lDQjdMaTR1Y0hKdmNITjlYRzRnSUM4K1hHNHBPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdRM0p2YzNOSlkyOXVJRDBnS0hCeWIzQnpPaUJoYm5rcElEMCtJQ2hjYmlBZ1BGTjJaeUJ6YVhwbFBYc3lNSDBnZXk0dUxuQnliM0J6ZlQ1Y2JpQWdJQ0E4Y0dGMGFDQmtQVndpVFRFMExqTTBPQ0F4TkM0NE5EbGpMVEF1TkRZNUlEQXVORFk1TFRFdU1qSTVJREF1TkRZNUxURXVOamszSURCc0xUSXVOalV4TFRNdU1ETXdMVEl1TmpVeElETXVNREk1WXkwd0xqUTJPU0F3TGpRMk9TMHhMakl5T1NBd0xqUTJPUzB4TGpZNU55QXdMVEF1TkRZNUxUQXVORFk1TFRBdU5EWTVMVEV1TWpJNUlEQXRNUzQyT1Rkc01pNDNOVGd0TXk0eE5TMHlMamMxT1MwekxqRTFNbU10TUM0ME5qa3RNQzQwTmprdE1DNDBOamt0TVM0eU1qZ2dNQzB4TGpZNU4zTXhMakl5T0Mwd0xqUTJPU0F4TGpZNU55QXdiREl1TmpVeUlETXVNRE14SURJdU5qVXhMVE11TURNeFl6QXVORFk1TFRBdU5EWTVJREV1TWpJNExUQXVORFk1SURFdU5qazNJREJ6TUM0ME5qa2dNUzR5TWprZ01DQXhMalk1TjJ3dE1pNDNOVGdnTXk0eE5USWdNaTQzTlRnZ015NHhOV013TGpRMk9TQXdMalEyT1NBd0xqUTJPU0F4TGpJeU9TQXdJREV1TmprNGVsd2lJQzgrWEc0Z0lEd3ZVM1puUGx4dUtUdGNibVY0Y0c5eWRDQmpiMjV6ZENCRWIzZHVRMmhsZG5KdmJpQTlJQ2h3Y205d2N6b2dZVzU1S1NBOVBpQW9YRzRnSUR4VGRtY2djMmw2WlQxN01qQjlJSHN1TGk1d2NtOXdjMzArWEc0Z0lDQWdQSEJoZEdnZ1pEMWNJazAwTGpVeE5pQTNMalUwT0dNd0xqUXpOaTB3TGpRME5pQXhMakEwTXkwd0xqUTRNU0F4TGpVM05pQXdiRE11T1RBNElETXVOelEzSURNdU9UQTRMVE11TnpRM1l6QXVOVE16TFRBdU5EZ3hJREV1TVRReExUQXVORFEySURFdU5UYzBJREFnTUM0ME16WWdNQzQwTkRVZ01DNDBNRGdnTVM0eE9UY2dNQ0F4TGpZeE5TMHdMalF3TmlBd0xqUXhPQzAwTGpZNU5TQTBMalV3TWkwMExqWTVOU0EwTGpVd01pMHdMakl4TnlBd0xqSXlNeTB3TGpVd01pQXdMak16TlMwd0xqYzROeUF3TGpNek5YTXRNQzQxTnkwd0xqRXhNaTB3TGpjNE9TMHdMak16TldNd0lEQXROQzR5T0RjdE5DNHdPRFF0TkM0Mk9UVXROQzQxTURKekxUQXVORE0yTFRFdU1UY2dNQzB4TGpZeE5YcGNJaUF2UGx4dUlDQThMMU4yWno1Y2JpazdYRzVjYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1THk4Z1JISnZjR1J2ZDI0Z0ppQkRiR1ZoY2lCQ2RYUjBiMjV6WEc0dkx5QTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjYmx4dVpYaHdiM0owSUhSNWNHVWdTVzVrYVdOaGRHOXlVSEp2Y0hNZ1BTQkRiMjF0YjI1UWNtOXdjeUFtSUh0Y2JpQWdMeW9xSUZSb1pTQmphR2xzWkhKbGJpQjBieUJpWlNCeVpXNWtaWEpsWkNCcGJuTnBaR1VnZEdobElHbHVaR2xqWVhSdmNpNGdLaTljYmlBZ1kyaHBiR1J5Wlc0NklFNXZaR1VzWEc0Z0lDOHFLaUJRY205d2N5QjBhR0YwSUhkcGJHd2dZbVVnY0dGemMyVmtJRzl1SUhSdklIUm9aU0JqYUdsc1pISmxiaTRnS2k5Y2JpQWdhVzV1WlhKUWNtOXdjem9nWVc1NUxGeHVJQ0F2S2lvZ1ZHaGxJR1p2WTNWelpXUWdjM1JoZEdVZ2IyWWdkR2hsSUhObGJHVmpkQzRnS2k5Y2JpQWdhWE5HYjJOMWMyVmtPaUJpYjI5c1pXRnVMRnh1SUNBdktpb2dWMmhsZEdobGNpQjBhR1VnZEdWNGRDQnBjeUJ5YVdkb2RDQjBieUJzWldaMElDb3ZYRzRnSUdselVuUnNPaUJpYjI5c1pXRnVMRnh1ZlR0Y2JseHVZMjl1YzNRZ1ltRnpaVU5UVXlBOUlDaDdYRzRnSUdselJtOWpkWE5sWkN4Y2JpQWdkR2hsYldVNklIdGNiaUFnSUNCemNHRmphVzVuT2lCN0lHSmhjMlZWYm1sMElIMHNYRzRnSUNBZ1kyOXNiM0p6TEZ4dUlDQjlMRnh1ZlRvZ1NXNWthV05oZEc5eVVISnZjSE1wSUQwK0lDaDdYRzRnSUd4aFltVnNPaUFuYVc1a2FXTmhkRzl5UTI5dWRHRnBibVZ5Snl4Y2JpQWdZMjlzYjNJNklHbHpSbTlqZFhObFpDQS9JR052Ykc5eWN5NXVaWFYwY21Gc05qQWdPaUJqYjJ4dmNuTXVibVYxZEhKaGJESXdMRnh1SUNCa2FYTndiR0Y1T2lBblpteGxlQ2NzWEc0Z0lIQmhaR1JwYm1jNklHSmhjMlZWYm1sMElDb2dNaXhjYmlBZ2RISmhibk5wZEdsdmJqb2dKMk52Ykc5eUlERTFNRzF6Snl4Y2JseHVJQ0FuT21odmRtVnlKem9nZTF4dUlDQWdJR052Ykc5eU9pQnBjMFp2WTNWelpXUWdQeUJqYjJ4dmNuTXVibVYxZEhKaGJEZ3dJRG9nWTI5c2IzSnpMbTVsZFhSeVlXdzBNQ3hjYmlBZ2ZTeGNibjBwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkhKdmNHUnZkMjVKYm1ScFkyRjBiM0pEVTFNZ1BTQmlZWE5sUTFOVE8xeHVaWGh3YjNKMElHTnZibk4wSUVSeWIzQmtiM2R1U1c1a2FXTmhkRzl5SUQwZ0tIQnliM0J6T2lCSmJtUnBZMkYwYjNKUWNtOXdjeWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQjdJR05vYVd4a2NtVnVMQ0JqYkdGemMwNWhiV1VzSUdONExDQm5aWFJUZEhsc1pYTXNJR2x1Ym1WeVVISnZjSE1nZlNBOUlIQnliM0J6TzF4dUlDQnlaWFIxY200Z0tGeHVJQ0FnSUR4a2FYWmNiaUFnSUNBZ0lIc3VMaTVwYm01bGNsQnliM0J6ZlZ4dUlDQWdJQ0FnWTNOelBYdG5aWFJUZEhsc1pYTW9KMlJ5YjNCa2IzZHVTVzVrYVdOaGRHOXlKeXdnY0hKdmNITXBmVnh1SUNBZ0lDQWdZMnhoYzNOT1lXMWxQWHRqZUNoY2JpQWdJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQWdJR2x1WkdsallYUnZjam9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdJQ0FuWkhKdmNHUnZkMjR0YVc1a2FXTmhkRzl5SnpvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ1kyeGhjM05PWVcxbFhHNGdJQ0FnSUNBcGZWeHVJQ0FnSUQ1Y2JpQWdJQ0FnSUh0amFHbHNaSEpsYmlCOGZDQThSRzkzYmtOb1pYWnliMjRnTHo1OVhHNGdJQ0FnUEM5a2FYWStYRzRnSUNrN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdZMnhsWVhKSmJtUnBZMkYwYjNKRFUxTWdQU0JpWVhObFExTlRPMXh1Wlhod2IzSjBJR052Ym5OMElFTnNaV0Z5U1c1a2FXTmhkRzl5SUQwZ0tIQnliM0J6T2lCSmJtUnBZMkYwYjNKUWNtOXdjeWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQjdJR05vYVd4a2NtVnVMQ0JqYkdGemMwNWhiV1VzSUdONExDQm5aWFJUZEhsc1pYTXNJR2x1Ym1WeVVISnZjSE1nZlNBOUlIQnliM0J6TzF4dUlDQnlaWFIxY200Z0tGeHVJQ0FnSUR4a2FYWmNiaUFnSUNBZ0lIc3VMaTVwYm01bGNsQnliM0J6ZlZ4dUlDQWdJQ0FnWTNOelBYdG5aWFJUZEhsc1pYTW9KMk5zWldGeVNXNWthV05oZEc5eUp5d2djSEp2Y0hNcGZWeHVJQ0FnSUNBZ1kyeGhjM05PWVcxbFBYdGplQ2hjYmlBZ0lDQWdJQ0FnZTF4dUlDQWdJQ0FnSUNBZ0lHbHVaR2xqWVhSdmNqb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ0lDQW5ZMnhsWVhJdGFXNWthV05oZEc5eUp6b2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdZMnhoYzNOT1lXMWxYRzRnSUNBZ0lDQXBmVnh1SUNBZ0lENWNiaUFnSUNBZ0lIdGphR2xzWkhKbGJpQjhmQ0E4UTNKdmMzTkpZMjl1SUM4K2ZWeHVJQ0FnSUR3dlpHbDJQbHh1SUNBcE8xeHVmVHRjYmx4dUx5OGdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc0dkx5QlRaWEJoY21GMGIzSmNiaTh2SUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHVYRzUwZVhCbElGTmxjR0Z5WVhSdmNsTjBZWFJsSUQwZ2V5QnBjMFJwYzJGaWJHVmtPaUJpYjI5c1pXRnVJSDA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYm1ScFkyRjBiM0pUWlhCaGNtRjBiM0pEVTFNZ1BTQW9lMXh1SUNCcGMwUnBjMkZpYkdWa0xGeHVJQ0IwYUdWdFpUb2dlMXh1SUNBZ0lITndZV05wYm1jNklIc2dZbUZ6WlZWdWFYUWdmU3hjYmlBZ0lDQmpiMnh2Y25Nc1hHNGdJSDBzWEc1OU9pQkRiMjF0YjI1UWNtOXdjeUFtSUZObGNHRnlZWFJ2Y2xOMFlYUmxLU0E5UGlBb2UxeHVJQ0JzWVdKbGJEb2dKMmx1WkdsallYUnZjbE5sY0dGeVlYUnZjaWNzWEc0Z0lHRnNhV2R1VTJWc1pqb2dKM04wY21WMFkyZ25MRnh1SUNCaVlXTnJaM0p2ZFc1a1EyOXNiM0k2SUdselJHbHpZV0pzWldRZ1B5QmpiMnh2Y25NdWJtVjFkSEpoYkRFd0lEb2dZMjlzYjNKekxtNWxkWFJ5WVd3eU1DeGNiaUFnYldGeVoybHVRbTkwZEc5dE9pQmlZWE5sVlc1cGRDQXFJRElzWEc0Z0lHMWhjbWRwYmxSdmNEb2dZbUZ6WlZWdWFYUWdLaUF5TEZ4dUlDQjNhV1IwYURvZ01TeGNibjBwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnU1c1a2FXTmhkRzl5VTJWd1lYSmhkRzl5SUQwZ0tIQnliM0J6T2lCSmJtUnBZMkYwYjNKUWNtOXdjeWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQjdJR05zWVhOelRtRnRaU3dnWTNnc0lHZGxkRk4wZVd4bGN5d2dhVzV1WlhKUWNtOXdjeUI5SUQwZ2NISnZjSE03WEc0Z0lISmxkSFZ5YmlBb1hHNGdJQ0FnUEhOd1lXNWNiaUFnSUNBZ0lIc3VMaTVwYm01bGNsQnliM0J6ZlZ4dUlDQWdJQ0FnWTNOelBYdG5aWFJUZEhsc1pYTW9KMmx1WkdsallYUnZjbE5sY0dGeVlYUnZjaWNzSUhCeWIzQnpLWDFjYmlBZ0lDQWdJR05zWVhOelRtRnRaVDE3WTNnb2V5QW5hVzVrYVdOaGRHOXlMWE5sY0dGeVlYUnZjaWM2SUhSeWRXVWdmU3dnWTJ4aGMzTk9ZVzFsS1gxY2JpQWdJQ0F2UGx4dUlDQXBPMXh1ZlR0Y2JseHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNHZMeUJNYjJGa2FXNW5YRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNibHh1WTI5dWMzUWdiRzloWkdsdVowUnZkRUZ1YVcxaGRHbHZibk1nUFNCclpYbG1jbUZ0WlhOZ1hHNGdJREFsTENBNE1DVXNJREV3TUNVZ2V5QnZjR0ZqYVhSNU9pQXdPeUI5WEc0Z0lEUXdKU0I3SUc5d1lXTnBkSGs2SURFN0lIMWNibUE3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JzYjJGa2FXNW5TVzVrYVdOaGRHOXlRMU5USUQwZ0tIdGNiaUFnYVhOR2IyTjFjMlZrTEZ4dUlDQnphWHBsTEZ4dUlDQjBhR1Z0WlRvZ2UxeHVJQ0FnSUdOdmJHOXljeXhjYmlBZ0lDQnpjR0ZqYVc1bk9pQjdJR0poYzJWVmJtbDBJSDBzWEc0Z0lIMHNYRzU5T2lCN1hHNGdJR2x6Um05amRYTmxaRG9nWW05dmJHVmhiaXhjYmlBZ2MybDZaVG9nYm5WdFltVnlMRnh1SUNCMGFHVnRaVG9nVkdobGJXVXNYRzU5S1NBOVBpQW9lMXh1SUNCc1lXSmxiRG9nSjJ4dllXUnBibWRKYm1ScFkyRjBiM0luTEZ4dUlDQmpiMnh2Y2pvZ2FYTkdiMk4xYzJWa0lEOGdZMjlzYjNKekxtNWxkWFJ5WVd3Mk1DQTZJR052Ykc5eWN5NXVaWFYwY21Gc01qQXNYRzRnSUdScGMzQnNZWGs2SUNkbWJHVjRKeXhjYmlBZ2NHRmtaR2x1WnpvZ1ltRnpaVlZ1YVhRZ0tpQXlMRnh1SUNCMGNtRnVjMmwwYVc5dU9pQW5ZMjlzYjNJZ01UVXdiWE1uTEZ4dUlDQmhiR2xuYmxObGJHWTZJQ2RqWlc1MFpYSW5MRnh1SUNCbWIyNTBVMmw2WlRvZ2MybDZaU3hjYmlBZ2JHbHVaVWhsYVdkb2REb2dNU3hjYmlBZ2JXRnlaMmx1VW1sbmFIUTZJSE5wZW1Vc1hHNGdJSFJsZUhSQmJHbG5iam9nSjJObGJuUmxjaWNzWEc0Z0lIWmxjblJwWTJGc1FXeHBaMjQ2SUNkdGFXUmtiR1VuTEZ4dWZTazdYRzVjYm5SNWNHVWdSRzkwVUhKdmNITWdQU0I3SUdSbGJHRjVPaUJ1ZFcxaVpYSXNJRzltWm5ObGREb2dZbTl2YkdWaGJpQjlPMXh1WTI5dWMzUWdURzloWkdsdVowUnZkQ0E5SUNoN0lHUmxiR0Y1TENCdlptWnpaWFFnZlRvZ1JHOTBVSEp2Y0hNcElEMCtJQ2hjYmlBZ1BITndZVzVjYmlBZ0lDQmpjM005ZTN0Y2JpQWdJQ0FnSUdGdWFXMWhkR2x2YmpvZ1lDUjdiRzloWkdsdVowUnZkRUZ1YVcxaGRHbHZibk45SURGeklHVmhjMlV0YVc0dGIzVjBJQ1I3WkdWc1lYbDliWE1nYVc1bWFXNXBkR1U3WUN4Y2JpQWdJQ0FnSUdKaFkydG5jbTkxYm1SRGIyeHZjam9nSjJOMWNuSmxiblJEYjJ4dmNpY3NYRzRnSUNBZ0lDQmliM0prWlhKU1lXUnBkWE02SUNjeFpXMG5MRnh1SUNBZ0lDQWdaR2x6Y0d4aGVUb2dKMmx1YkdsdVpTMWliRzlqYXljc1hHNGdJQ0FnSUNCdFlYSm5hVzVNWldaME9pQnZabVp6WlhRZ1B5QW5NV1Z0SnlBNklHNTFiR3dzWEc0Z0lDQWdJQ0JvWldsbmFIUTZJQ2N4WlcwbkxGeHVJQ0FnSUNBZ2RtVnlkR2xqWVd4QmJHbG5iam9nSjNSdmNDY3NYRzRnSUNBZ0lDQjNhV1IwYURvZ0p6RmxiU2NzWEc0Z0lDQWdmWDFjYmlBZ0x6NWNiaWs3WEc1Y2JtVjRjRzl5ZENCMGVYQmxJRXh2WVdScGJtZEpZMjl1VUhKdmNITWdQU0I3WEc0Z0lDOHFLaUJRY205d2N5QjBhR0YwSUhkcGJHd2dZbVVnY0dGemMyVmtJRzl1SUhSdklIUm9aU0JqYUdsc1pISmxiaTRnS2k5Y2JpQWdhVzV1WlhKUWNtOXdjem9nWVc1NUxGeHVJQ0F2S2lvZ1ZHaGxJR1p2WTNWelpXUWdjM1JoZEdVZ2IyWWdkR2hsSUhObGJHVmpkQzRnS2k5Y2JpQWdhWE5HYjJOMWMyVmtPaUJpYjI5c1pXRnVMRnh1SUNBdktpb2dWMmhsZEdobGNpQjBhR1VnZEdWNGRDQnBjeUJ5YVdkb2RDQjBieUJzWldaMElDb3ZYRzRnSUdselVuUnNPaUJpYjI5c1pXRnVMRnh1ZlNBbUlFTnZiVzF2YmxCeWIzQnpJQ1lnZTF4dUlDQWdJQzhxS2lCVFpYUWdjMmw2WlNCdlppQjBhR1VnWTI5dWRHRnBibVZ5TGlBcUwxeHVJQ0FnSUhOcGVtVTZJRzUxYldKbGNpeGNiaUFnZlR0Y2JtVjRjRzl5ZENCamIyNXpkQ0JNYjJGa2FXNW5TVzVrYVdOaGRHOXlJRDBnS0hCeWIzQnpPaUJNYjJGa2FXNW5TV052YmxCeWIzQnpLU0E5UGlCN1hHNGdJR052Ym5OMElIc2dZMnhoYzNOT1lXMWxMQ0JqZUN3Z1oyVjBVM1I1YkdWekxDQnBibTVsY2xCeWIzQnpMQ0JwYzFKMGJDQjlJRDBnY0hKdmNITTdYRzVjYmlBZ2NtVjBkWEp1SUNoY2JpQWdJQ0E4WkdsMlhHNGdJQ0FnSUNCN0xpNHVhVzV1WlhKUWNtOXdjMzFjYmlBZ0lDQWdJR056Y3oxN1oyVjBVM1I1YkdWektDZHNiMkZrYVc1blNXNWthV05oZEc5eUp5d2djSEp2Y0hNcGZWeHVJQ0FnSUNBZ1kyeGhjM05PWVcxbFBYdGplQ2hjYmlBZ0lDQWdJQ0FnZTF4dUlDQWdJQ0FnSUNBZ0lHbHVaR2xqWVhSdmNqb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ0lDQW5iRzloWkdsdVp5MXBibVJwWTJGMGIzSW5PaUIwY25WbExGeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0JqYkdGemMwNWhiV1ZjYmlBZ0lDQWdJQ2w5WEc0Z0lDQWdQbHh1SUNBZ0lDQWdQRXh2WVdScGJtZEViM1FnWkdWc1lYazllekI5SUc5bVpuTmxkRDE3YVhOU2RHeDlJQzgrWEc0Z0lDQWdJQ0E4VEc5aFpHbHVaMFJ2ZENCa1pXeGhlVDE3TVRZd2ZTQnZabVp6WlhRZ0x6NWNiaUFnSUNBZ0lEeE1iMkZrYVc1blJHOTBJR1JsYkdGNVBYc3pNakI5SUc5bVpuTmxkRDE3SVdselVuUnNmU0F2UGx4dUlDQWdJRHd2WkdsMlBseHVJQ0FwTzF4dWZUdGNia3h2WVdScGJtZEpibVJwWTJGMGIzSXVaR1ZtWVhWc2RGQnliM0J6SUQwZ2V5QnphWHBsT2lBMElIMDdYRzRpWFgwPSAqL1wiXG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIFN2ZyA9IGZ1bmN0aW9uIFN2ZyhfcmVmKSB7XG4gIHZhciBzaXplID0gX3JlZi5zaXplLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJzaXplXCJdKTtcblxuICByZXR1cm4ganN4KFwic3ZnXCIsIF9leHRlbmRzJDIoe1xuICAgIGhlaWdodDogc2l6ZSxcbiAgICB3aWR0aDogc2l6ZSxcbiAgICB2aWV3Qm94OiBcIjAgMCAyMCAyMFwiLFxuICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgY3NzOiBfcmVmMlxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIENyb3NzSWNvbiA9IGZ1bmN0aW9uIENyb3NzSWNvbihwcm9wcykge1xuICByZXR1cm4ganN4KFN2ZywgX2V4dGVuZHMkMih7XG4gICAgc2l6ZTogMjBcbiAgfSwgcHJvcHMpLCBqc3goXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xNC4zNDggMTQuODQ5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwbC0yLjY1MS0zLjAzMC0yLjY1MSAzLjAyOWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMC0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOSAwLTEuNjk3bDIuNzU4LTMuMTUtMi43NTktMy4xNTJjLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI4IDAtMS42OTdzMS4yMjgtMC40NjkgMS42OTcgMGwyLjY1MiAzLjAzMSAyLjY1MS0zLjAzMWMwLjQ2OS0wLjQ2OSAxLjIyOC0wLjQ2OSAxLjY5NyAwczAuNDY5IDEuMjI5IDAgMS42OTdsLTIuNzU4IDMuMTUyIDIuNzU4IDMuMTVjMC40NjkgMC40NjkgMC40NjkgMS4yMjkgMCAxLjY5OHpcIlxuICB9KSk7XG59O1xudmFyIERvd25DaGV2cm9uID0gZnVuY3Rpb24gRG93bkNoZXZyb24ocHJvcHMpIHtcbiAgcmV0dXJuIGpzeChTdmcsIF9leHRlbmRzJDIoe1xuICAgIHNpemU6IDIwXG4gIH0sIHByb3BzKSwganN4KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCJcbiAgfSkpO1xufTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgYmFzZUNTUyA9IGZ1bmN0aW9uIGJhc2VDU1MoX3JlZjMpIHtcbiAgdmFyIGlzRm9jdXNlZCA9IF9yZWYzLmlzRm9jdXNlZCxcbiAgICAgIF9yZWYzJHRoZW1lID0gX3JlZjMudGhlbWUsXG4gICAgICBiYXNlVW5pdCA9IF9yZWYzJHRoZW1lLnNwYWNpbmcuYmFzZVVuaXQsXG4gICAgICBjb2xvcnMgPSBfcmVmMyR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWw0MFxuICAgIH1cbiAgfTtcbn07XG5cbnZhciBkcm9wZG93bkluZGljYXRvckNTUyA9IGJhc2VDU1M7XG52YXIgRHJvcGRvd25JbmRpY2F0b3IgPSBmdW5jdGlvbiBEcm9wZG93bkluZGljYXRvcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyQyKHt9LCBpbm5lclByb3BzLCB7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2Ryb3Bkb3duSW5kaWNhdG9yJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0pLCBjaGlsZHJlbiB8fCBqc3goRG93bkNoZXZyb24sIG51bGwpKTtcbn07XG52YXIgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xudmFyIENsZWFySW5kaWNhdG9yID0gZnVuY3Rpb24gQ2xlYXJJbmRpY2F0b3IocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMkMih7fSwgaW5uZXJQcm9wcywge1xuICAgIGNzczogZ2V0U3R5bGVzKCdjbGVhckluZGljYXRvcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9KSwgY2hpbGRyZW4gfHwganN4KENyb3NzSWNvbiwgbnVsbCkpO1xufTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gZnVuY3Rpb24gaW5kaWNhdG9yU2VwYXJhdG9yQ1NTKF9yZWY0KSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX3JlZjQuaXNEaXNhYmxlZCxcbiAgICAgIF9yZWY0JHRoZW1lID0gX3JlZjQudGhlbWUsXG4gICAgICBiYXNlVW5pdCA9IF9yZWY0JHRoZW1lLnNwYWNpbmcuYmFzZVVuaXQsXG4gICAgICBjb2xvcnMgPSBfcmVmNCR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICAgIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICAgIHdpZHRoOiAxXG4gIH07XG59O1xudmFyIEluZGljYXRvclNlcGFyYXRvciA9IGZ1bmN0aW9uIEluZGljYXRvclNlcGFyYXRvcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwic3BhblwiLCBfZXh0ZW5kcyQyKHt9LCBpbm5lclByb3BzLCB7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSkpO1xufTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGxvYWRpbmdEb3RBbmltYXRpb25zID0ga2V5ZnJhbWVzKF90ZW1wbGF0ZU9iamVjdCgpKTtcbnZhciBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gZnVuY3Rpb24gbG9hZGluZ0luZGljYXRvckNTUyhfcmVmNSkge1xuICB2YXIgaXNGb2N1c2VkID0gX3JlZjUuaXNGb2N1c2VkLFxuICAgICAgc2l6ZSA9IF9yZWY1LnNpemUsXG4gICAgICBfcmVmNSR0aGVtZSA9IF9yZWY1LnRoZW1lLFxuICAgICAgY29sb3JzID0gX3JlZjUkdGhlbWUuY29sb3JzLFxuICAgICAgYmFzZVVuaXQgPSBfcmVmNSR0aGVtZS5zcGFjaW5nLmJhc2VVbml0O1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgIGZvbnRTaXplOiBzaXplLFxuICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICB9O1xufTtcblxudmFyIExvYWRpbmdEb3QgPSBmdW5jdGlvbiBMb2FkaW5nRG90KF9yZWY2KSB7XG4gIHZhciBkZWxheSA9IF9yZWY2LmRlbGF5LFxuICAgICAgb2Zmc2V0ID0gX3JlZjYub2Zmc2V0O1xuICByZXR1cm4ganN4KFwic3BhblwiLCB7XG4gICAgY3NzOlxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBfY3NzKHtcbiAgICAgIGFuaW1hdGlvbjogbG9hZGluZ0RvdEFuaW1hdGlvbnMgKyBcIiAxcyBlYXNlLWluLW91dCBcIiArIGRlbGF5ICsgXCJtcyBpbmZpbml0ZTtcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IG51bGwsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbSdcbiAgICB9LCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcIlwiIDogXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWx1WkdsallYUnZjbk11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQmMweEpJaXdpWm1sc1pTSTZJbWx1WkdsallYUnZjbk11YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeUJBWm14dmQxeHVMeW9xSUVCcWMzZ2dhbk40SUNvdlhHNXBiWEJ2Y25RZ2V5QjBlWEJsSUU1dlpHVWdmU0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ2V5QnFjM2dzSUd0bGVXWnlZVzFsY3lCOUlHWnliMjBnSjBCbGJXOTBhVzl1TDJOdmNtVW5PMXh1WEc1cGJYQnZjblFnZEhsd1pTQjdJRU52YlcxdmJsQnliM0J6TENCVWFHVnRaU0I5SUdaeWIyMGdKeTR1TDNSNWNHVnpKenRjYmx4dUx5OGdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc0dkx5QkVjbTl3Wkc5M2JpQW1JRU5zWldGeUlFbGpiMjV6WEc0dkx5QTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjYmx4dVkyOXVjM1FnVTNabklEMGdLSHNnYzJsNlpTd2dMaTR1Y0hKdmNITWdmVG9nZXlCemFYcGxPaUJ1ZFcxaVpYSWdmU2tnUFQ0Z0tGeHVJQ0E4YzNablhHNGdJQ0FnYUdWcFoyaDBQWHR6YVhwbGZWeHVJQ0FnSUhkcFpIUm9QWHR6YVhwbGZWeHVJQ0FnSUhacFpYZENiM2c5WENJd0lEQWdNakFnTWpCY0lseHVJQ0FnSUdGeWFXRXRhR2xrWkdWdVBWd2lkSEoxWlZ3aVhHNGdJQ0FnWm05amRYTmhZbXhsUFZ3aVptRnNjMlZjSWx4dUlDQWdJR056Y3oxN2UxeHVJQ0FnSUNBZ1pHbHpjR3hoZVRvZ0oybHViR2x1WlMxaWJHOWpheWNzWEc0Z0lDQWdJQ0JtYVd4c09pQW5ZM1Z5Y21WdWRFTnZiRzl5Snl4Y2JpQWdJQ0FnSUd4cGJtVklaV2xuYUhRNklERXNYRzRnSUNBZ0lDQnpkSEp2YTJVNklDZGpkWEp5Wlc1MFEyOXNiM0luTEZ4dUlDQWdJQ0FnYzNSeWIydGxWMmxrZEdnNklEQXNYRzRnSUNBZ2ZYMWNiaUFnSUNCN0xpNHVjSEp2Y0hOOVhHNGdJQzgrWEc0cE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1EzSnZjM05KWTI5dUlEMGdLSEJ5YjNCek9pQmhibmtwSUQwK0lDaGNiaUFnUEZOMlp5QnphWHBsUFhzeU1IMGdleTR1TG5CeWIzQnpmVDVjYmlBZ0lDQThjR0YwYUNCa1BWd2lUVEUwTGpNME9DQXhOQzQ0TkRsakxUQXVORFk1SURBdU5EWTVMVEV1TWpJNUlEQXVORFk1TFRFdU5qazNJREJzTFRJdU5qVXhMVE11TURNd0xUSXVOalV4SURNdU1ESTVZeTB3TGpRMk9TQXdMalEyT1MweExqSXlPU0F3TGpRMk9TMHhMalk1TnlBd0xUQXVORFk1TFRBdU5EWTVMVEF1TkRZNUxURXVNakk1SURBdE1TNDJPVGRzTWk0M05UZ3RNeTR4TlMweUxqYzFPUzB6TGpFMU1tTXRNQzQwTmprdE1DNDBOamt0TUM0ME5qa3RNUzR5TWpnZ01DMHhMalk1TjNNeExqSXlPQzB3TGpRMk9TQXhMalk1TnlBd2JESXVOalV5SURNdU1ETXhJREl1TmpVeExUTXVNRE14WXpBdU5EWTVMVEF1TkRZNUlERXVNakk0TFRBdU5EWTVJREV1TmprM0lEQnpNQzQwTmprZ01TNHlNamtnTUNBeExqWTVOMnd0TWk0M05UZ2dNeTR4TlRJZ01pNDNOVGdnTXk0eE5XTXdMalEyT1NBd0xqUTJPU0F3TGpRMk9TQXhMakl5T1NBd0lERXVOams0ZWx3aUlDOCtYRzRnSUR3dlUzWm5QbHh1S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JFYjNkdVEyaGxkbkp2YmlBOUlDaHdjbTl3Y3pvZ1lXNTVLU0E5UGlBb1hHNGdJRHhUZG1jZ2MybDZaVDE3TWpCOUlIc3VMaTV3Y205d2MzMCtYRzRnSUNBZ1BIQmhkR2dnWkQxY0lrMDBMalV4TmlBM0xqVTBPR013TGpRek5pMHdMalEwTmlBeExqQTBNeTB3TGpRNE1TQXhMalUzTmlBd2JETXVPVEE0SURNdU56UTNJRE11T1RBNExUTXVOelEzWXpBdU5UTXpMVEF1TkRneElERXVNVFF4TFRBdU5EUTJJREV1TlRjMElEQWdNQzQwTXpZZ01DNDBORFVnTUM0ME1EZ2dNUzR4T1RjZ01DQXhMall4TlMwd0xqUXdOaUF3TGpReE9DMDBMalk1TlNBMExqVXdNaTAwTGpZNU5TQTBMalV3TWkwd0xqSXhOeUF3TGpJeU15MHdMalV3TWlBd0xqTXpOUzB3TGpjNE55QXdMak16TlhNdE1DNDFOeTB3TGpFeE1pMHdMamM0T1Mwd0xqTXpOV013SURBdE5DNHlPRGN0TkM0d09EUXROQzQyT1RVdE5DNDFNREp6TFRBdU5ETTJMVEV1TVRjZ01DMHhMall4TlhwY0lpQXZQbHh1SUNBOEwxTjJaejVjYmlrN1hHNWNiaTh2SUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHVMeThnUkhKdmNHUnZkMjRnSmlCRGJHVmhjaUJDZFhSMGIyNXpYRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNibHh1Wlhod2IzSjBJSFI1Y0dVZ1NXNWthV05oZEc5eVVISnZjSE1nUFNCRGIyMXRiMjVRY205d2N5QW1JSHRjYmlBZ0x5b3FJRlJvWlNCamFHbHNaSEpsYmlCMGJ5QmlaU0J5Wlc1a1pYSmxaQ0JwYm5OcFpHVWdkR2hsSUdsdVpHbGpZWFJ2Y2k0Z0tpOWNiaUFnWTJocGJHUnlaVzQ2SUU1dlpHVXNYRzRnSUM4cUtpQlFjbTl3Y3lCMGFHRjBJSGRwYkd3Z1ltVWdjR0Z6YzJWa0lHOXVJSFJ2SUhSb1pTQmphR2xzWkhKbGJpNGdLaTljYmlBZ2FXNXVaWEpRY205d2N6b2dZVzU1TEZ4dUlDQXZLaW9nVkdobElHWnZZM1Z6WldRZ2MzUmhkR1VnYjJZZ2RHaGxJSE5sYkdWamRDNGdLaTljYmlBZ2FYTkdiMk4xYzJWa09pQmliMjlzWldGdUxGeHVJQ0F2S2lvZ1YyaGxkR2hsY2lCMGFHVWdkR1Y0ZENCcGN5QnlhV2RvZENCMGJ5QnNaV1owSUNvdlhHNGdJR2x6VW5Sc09pQmliMjlzWldGdUxGeHVmVHRjYmx4dVkyOXVjM1FnWW1GelpVTlRVeUE5SUNoN1hHNGdJR2x6Um05amRYTmxaQ3hjYmlBZ2RHaGxiV1U2SUh0Y2JpQWdJQ0J6Y0dGamFXNW5PaUI3SUdKaGMyVlZibWwwSUgwc1hHNGdJQ0FnWTI5c2IzSnpMRnh1SUNCOUxGeHVmVG9nU1c1a2FXTmhkRzl5VUhKdmNITXBJRDArSUNoN1hHNGdJR3hoWW1Wc09pQW5hVzVrYVdOaGRHOXlRMjl1ZEdGcGJtVnlKeXhjYmlBZ1kyOXNiM0k2SUdselJtOWpkWE5sWkNBL0lHTnZiRzl5Y3k1dVpYVjBjbUZzTmpBZ09pQmpiMnh2Y25NdWJtVjFkSEpoYkRJd0xGeHVJQ0JrYVhOd2JHRjVPaUFuWm14bGVDY3NYRzRnSUhCaFpHUnBibWM2SUdKaGMyVlZibWwwSUNvZ01peGNiaUFnZEhKaGJuTnBkR2x2YmpvZ0oyTnZiRzl5SURFMU1HMXpKeXhjYmx4dUlDQW5PbWh2ZG1WeUp6b2dlMXh1SUNBZ0lHTnZiRzl5T2lCcGMwWnZZM1Z6WldRZ1B5QmpiMnh2Y25NdWJtVjFkSEpoYkRnd0lEb2dZMjlzYjNKekxtNWxkWFJ5WVd3ME1DeGNiaUFnZlN4Y2JuMHBPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdaSEp2Y0dSdmQyNUpibVJwWTJGMGIzSkRVMU1nUFNCaVlYTmxRMU5UTzF4dVpYaHdiM0owSUdOdmJuTjBJRVJ5YjNCa2IzZHVTVzVrYVdOaGRHOXlJRDBnS0hCeWIzQnpPaUJKYm1ScFkyRjBiM0pRY205d2N5a2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lHTm9hV3hrY21WdUxDQmpiR0Z6YzA1aGJXVXNJR040TENCblpYUlRkSGxzWlhNc0lHbHVibVZ5VUhKdmNITWdmU0E5SUhCeWIzQnpPMXh1SUNCeVpYUjFjbTRnS0Z4dUlDQWdJRHhrYVhaY2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lDQWdZM056UFh0blpYUlRkSGxzWlhNb0oyUnliM0JrYjNkdVNXNWthV05oZEc5eUp5d2djSEp2Y0hNcGZWeHVJQ0FnSUNBZ1kyeGhjM05PWVcxbFBYdGplQ2hjYmlBZ0lDQWdJQ0FnZTF4dUlDQWdJQ0FnSUNBZ0lHbHVaR2xqWVhSdmNqb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ0lDQW5aSEp2Y0dSdmQyNHRhVzVrYVdOaGRHOXlKem9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnWTJ4aGMzTk9ZVzFsWEc0Z0lDQWdJQ0FwZlZ4dUlDQWdJRDVjYmlBZ0lDQWdJSHRqYUdsc1pISmxiaUI4ZkNBOFJHOTNia05vWlhaeWIyNGdMejU5WEc0Z0lDQWdQQzlrYVhZK1hHNGdJQ2s3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyeGxZWEpKYm1ScFkyRjBiM0pEVTFNZ1BTQmlZWE5sUTFOVE8xeHVaWGh3YjNKMElHTnZibk4wSUVOc1pXRnlTVzVrYVdOaGRHOXlJRDBnS0hCeWIzQnpPaUJKYm1ScFkyRjBiM0pRY205d2N5a2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lHTm9hV3hrY21WdUxDQmpiR0Z6YzA1aGJXVXNJR040TENCblpYUlRkSGxzWlhNc0lHbHVibVZ5VUhKdmNITWdmU0E5SUhCeWIzQnpPMXh1SUNCeVpYUjFjbTRnS0Z4dUlDQWdJRHhrYVhaY2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lDQWdZM056UFh0blpYUlRkSGxzWlhNb0oyTnNaV0Z5U1c1a2FXTmhkRzl5Snl3Z2NISnZjSE1wZlZ4dUlDQWdJQ0FnWTJ4aGMzTk9ZVzFsUFh0amVDaGNiaUFnSUNBZ0lDQWdlMXh1SUNBZ0lDQWdJQ0FnSUdsdVpHbGpZWFJ2Y2pvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnSUNBblkyeGxZWEl0YVc1a2FXTmhkRzl5SnpvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ1kyeGhjM05PWVcxbFhHNGdJQ0FnSUNBcGZWeHVJQ0FnSUQ1Y2JpQWdJQ0FnSUh0amFHbHNaSEpsYmlCOGZDQThRM0p2YzNOSlkyOXVJQzgrZlZ4dUlDQWdJRHd2WkdsMlBseHVJQ0FwTzF4dWZUdGNibHh1THk4Z1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzR2THlCVFpYQmhjbUYwYjNKY2JpOHZJRDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4dVhHNTBlWEJsSUZObGNHRnlZWFJ2Y2xOMFlYUmxJRDBnZXlCcGMwUnBjMkZpYkdWa09pQmliMjlzWldGdUlIMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnBibVJwWTJGMGIzSlRaWEJoY21GMGIzSkRVMU1nUFNBb2UxeHVJQ0JwYzBScGMyRmliR1ZrTEZ4dUlDQjBhR1Z0WlRvZ2UxeHVJQ0FnSUhOd1lXTnBibWM2SUhzZ1ltRnpaVlZ1YVhRZ2ZTeGNiaUFnSUNCamIyeHZjbk1zWEc0Z0lIMHNYRzU5T2lCRGIyMXRiMjVRY205d2N5QW1JRk5sY0dGeVlYUnZjbE4wWVhSbEtTQTlQaUFvZTF4dUlDQnNZV0psYkRvZ0oybHVaR2xqWVhSdmNsTmxjR0Z5WVhSdmNpY3NYRzRnSUdGc2FXZHVVMlZzWmpvZ0ozTjBjbVYwWTJnbkxGeHVJQ0JpWVdOclozSnZkVzVrUTI5c2IzSTZJR2x6UkdsellXSnNaV1FnUHlCamIyeHZjbk11Ym1WMWRISmhiREV3SURvZ1kyOXNiM0p6TG01bGRYUnlZV3d5TUN4Y2JpQWdiV0Z5WjJsdVFtOTBkRzl0T2lCaVlYTmxWVzVwZENBcUlESXNYRzRnSUcxaGNtZHBibFJ2Y0RvZ1ltRnpaVlZ1YVhRZ0tpQXlMRnh1SUNCM2FXUjBhRG9nTVN4Y2JuMHBPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdTVzVrYVdOaGRHOXlVMlZ3WVhKaGRHOXlJRDBnS0hCeWIzQnpPaUJKYm1ScFkyRjBiM0pRY205d2N5a2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lHTnNZWE56VG1GdFpTd2dZM2dzSUdkbGRGTjBlV3hsY3l3Z2FXNXVaWEpRY205d2N5QjlJRDBnY0hKdmNITTdYRzRnSUhKbGRIVnliaUFvWEc0Z0lDQWdQSE53WVc1Y2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lDQWdZM056UFh0blpYUlRkSGxzWlhNb0oybHVaR2xqWVhSdmNsTmxjR0Z5WVhSdmNpY3NJSEJ5YjNCektYMWNiaUFnSUNBZ0lHTnNZWE56VG1GdFpUMTdZM2dvZXlBbmFXNWthV05oZEc5eUxYTmxjR0Z5WVhSdmNpYzZJSFJ5ZFdVZ2ZTd2dZMnhoYzNOT1lXMWxLWDFjYmlBZ0lDQXZQbHh1SUNBcE8xeHVmVHRjYmx4dUx5OGdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc0dkx5Qk1iMkZrYVc1blhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JseHVZMjl1YzNRZ2JHOWhaR2x1WjBSdmRFRnVhVzFoZEdsdmJuTWdQU0JyWlhsbWNtRnRaWE5nWEc0Z0lEQWxMQ0E0TUNVc0lERXdNQ1VnZXlCdmNHRmphWFI1T2lBd095QjlYRzRnSURRd0pTQjdJRzl3WVdOcGRIazZJREU3SUgxY2JtQTdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnNiMkZrYVc1blNXNWthV05oZEc5eVExTlRJRDBnS0h0Y2JpQWdhWE5HYjJOMWMyVmtMRnh1SUNCemFYcGxMRnh1SUNCMGFHVnRaVG9nZTF4dUlDQWdJR052Ykc5eWN5eGNiaUFnSUNCemNHRmphVzVuT2lCN0lHSmhjMlZWYm1sMElIMHNYRzRnSUgwc1hHNTlPaUI3WEc0Z0lHbHpSbTlqZFhObFpEb2dZbTl2YkdWaGJpeGNiaUFnYzJsNlpUb2diblZ0WW1WeUxGeHVJQ0IwYUdWdFpUb2dWR2hsYldVc1hHNTlLU0E5UGlBb2UxeHVJQ0JzWVdKbGJEb2dKMnh2WVdScGJtZEpibVJwWTJGMGIzSW5MRnh1SUNCamIyeHZjam9nYVhOR2IyTjFjMlZrSUQ4Z1kyOXNiM0p6TG01bGRYUnlZV3cyTUNBNklHTnZiRzl5Y3k1dVpYVjBjbUZzTWpBc1hHNGdJR1JwYzNCc1lYazZJQ2RtYkdWNEp5eGNiaUFnY0dGa1pHbHVaem9nWW1GelpWVnVhWFFnS2lBeUxGeHVJQ0IwY21GdWMybDBhVzl1T2lBblkyOXNiM0lnTVRVd2JYTW5MRnh1SUNCaGJHbG5ibE5sYkdZNklDZGpaVzUwWlhJbkxGeHVJQ0JtYjI1MFUybDZaVG9nYzJsNlpTeGNiaUFnYkdsdVpVaGxhV2RvZERvZ01TeGNiaUFnYldGeVoybHVVbWxuYUhRNklITnBlbVVzWEc0Z0lIUmxlSFJCYkdsbmJqb2dKMk5sYm5SbGNpY3NYRzRnSUhabGNuUnBZMkZzUVd4cFoyNDZJQ2R0YVdSa2JHVW5MRnh1ZlNrN1hHNWNiblI1Y0dVZ1JHOTBVSEp2Y0hNZ1BTQjdJR1JsYkdGNU9pQnVkVzFpWlhJc0lHOW1abk5sZERvZ1ltOXZiR1ZoYmlCOU8xeHVZMjl1YzNRZ1RHOWhaR2x1WjBSdmRDQTlJQ2g3SUdSbGJHRjVMQ0J2Wm1aelpYUWdmVG9nUkc5MFVISnZjSE1wSUQwK0lDaGNiaUFnUEhOd1lXNWNiaUFnSUNCamMzTTllM3RjYmlBZ0lDQWdJR0Z1YVcxaGRHbHZiam9nWUNSN2JHOWhaR2x1WjBSdmRFRnVhVzFoZEdsdmJuTjlJREZ6SUdWaGMyVXRhVzR0YjNWMElDUjdaR1ZzWVhsOWJYTWdhVzVtYVc1cGRHVTdZQ3hjYmlBZ0lDQWdJR0poWTJ0bmNtOTFibVJEYjJ4dmNqb2dKMk4xY25KbGJuUkRiMnh2Y2ljc1hHNGdJQ0FnSUNCaWIzSmtaWEpTWVdScGRYTTZJQ2N4WlcwbkxGeHVJQ0FnSUNBZ1pHbHpjR3hoZVRvZ0oybHViR2x1WlMxaWJHOWpheWNzWEc0Z0lDQWdJQ0J0WVhKbmFXNU1aV1owT2lCdlptWnpaWFFnUHlBbk1XVnRKeUE2SUc1MWJHd3NYRzRnSUNBZ0lDQm9aV2xuYUhRNklDY3haVzBuTEZ4dUlDQWdJQ0FnZG1WeWRHbGpZV3hCYkdsbmJqb2dKM1J2Y0Njc1hHNGdJQ0FnSUNCM2FXUjBhRG9nSnpGbGJTY3NYRzRnSUNBZ2ZYMWNiaUFnTHo1Y2JpazdYRzVjYm1WNGNHOXlkQ0IwZVhCbElFeHZZV1JwYm1kSlkyOXVVSEp2Y0hNZ1BTQjdYRzRnSUM4cUtpQlFjbTl3Y3lCMGFHRjBJSGRwYkd3Z1ltVWdjR0Z6YzJWa0lHOXVJSFJ2SUhSb1pTQmphR2xzWkhKbGJpNGdLaTljYmlBZ2FXNXVaWEpRY205d2N6b2dZVzU1TEZ4dUlDQXZLaW9nVkdobElHWnZZM1Z6WldRZ2MzUmhkR1VnYjJZZ2RHaGxJSE5sYkdWamRDNGdLaTljYmlBZ2FYTkdiMk4xYzJWa09pQmliMjlzWldGdUxGeHVJQ0F2S2lvZ1YyaGxkR2hsY2lCMGFHVWdkR1Y0ZENCcGN5QnlhV2RvZENCMGJ5QnNaV1owSUNvdlhHNGdJR2x6VW5Sc09pQmliMjlzWldGdUxGeHVmU0FtSUVOdmJXMXZibEJ5YjNCeklDWWdlMXh1SUNBZ0lDOHFLaUJUWlhRZ2MybDZaU0J2WmlCMGFHVWdZMjl1ZEdGcGJtVnlMaUFxTDF4dUlDQWdJSE5wZW1VNklHNTFiV0psY2l4Y2JpQWdmVHRjYm1WNGNHOXlkQ0JqYjI1emRDQk1iMkZrYVc1blNXNWthV05oZEc5eUlEMGdLSEJ5YjNCek9pQk1iMkZrYVc1blNXTnZibEJ5YjNCektTQTlQaUI3WEc0Z0lHTnZibk4wSUhzZ1kyeGhjM05PWVcxbExDQmplQ3dnWjJWMFUzUjViR1Z6TENCcGJtNWxjbEJ5YjNCekxDQnBjMUowYkNCOUlEMGdjSEp2Y0hNN1hHNWNiaUFnY21WMGRYSnVJQ2hjYmlBZ0lDQThaR2wyWEc0Z0lDQWdJQ0I3TGk0dWFXNXVaWEpRY205d2MzMWNiaUFnSUNBZ0lHTnpjejE3WjJWMFUzUjViR1Z6S0Nkc2IyRmthVzVuU1c1a2FXTmhkRzl5Snl3Z2NISnZjSE1wZlZ4dUlDQWdJQ0FnWTJ4aGMzTk9ZVzFsUFh0amVDaGNiaUFnSUNBZ0lDQWdlMXh1SUNBZ0lDQWdJQ0FnSUdsdVpHbGpZWFJ2Y2pvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnSUNBbmJHOWhaR2x1WnkxcGJtUnBZMkYwYjNJbk9pQjBjblZsTEZ4dUlDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQmpiR0Z6YzA1aGJXVmNiaUFnSUNBZ0lDbDlYRzRnSUNBZ1BseHVJQ0FnSUNBZ1BFeHZZV1JwYm1kRWIzUWdaR1ZzWVhrOWV6QjlJRzltWm5ObGREMTdhWE5TZEd4OUlDOCtYRzRnSUNBZ0lDQThURzloWkdsdVowUnZkQ0JrWld4aGVUMTdNVFl3ZlNCdlptWnpaWFFnTHo1Y2JpQWdJQ0FnSUR4TWIyRmthVzVuUkc5MElHUmxiR0Y1UFhzek1qQjlJRzltWm5ObGREMTdJV2x6VW5Sc2ZTQXZQbHh1SUNBZ0lEd3ZaR2wyUGx4dUlDQXBPMXh1ZlR0Y2JreHZZV1JwYm1kSmJtUnBZMkYwYjNJdVpHVm1ZWFZzZEZCeWIzQnpJRDBnZXlCemFYcGxPaUEwSUgwN1hHNGlYWDA9ICovXCIpXG4gIH0pO1xufTtcblxudmFyIExvYWRpbmdJbmRpY2F0b3IgPSBmdW5jdGlvbiBMb2FkaW5nSW5kaWNhdG9yKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgICBpc1J0bCA9IHByb3BzLmlzUnRsO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzJDIoe30sIGlubmVyUHJvcHMsIHtcbiAgICBjc3M6IGdldFN0eWxlcygnbG9hZGluZ0luZGljYXRvcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0pLCBqc3goTG9hZGluZ0RvdCwge1xuICAgIGRlbGF5OiAwLFxuICAgIG9mZnNldDogaXNSdGxcbiAgfSksIGpzeChMb2FkaW5nRG90LCB7XG4gICAgZGVsYXk6IDE2MCxcbiAgICBvZmZzZXQ6IHRydWVcbiAgfSksIGpzeChMb2FkaW5nRG90LCB7XG4gICAgZGVsYXk6IDMyMCxcbiAgICBvZmZzZXQ6ICFpc1J0bFxuICB9KSk7XG59O1xuTG9hZGluZ0luZGljYXRvci5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpemU6IDRcbn07XG5cbmZ1bmN0aW9uIF9leHRlbmRzJDMoKSB7IF9leHRlbmRzJDMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMkMy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG52YXIgY3NzID0gZnVuY3Rpb24gY3NzKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgICBpc0ZvY3VzZWQgPSBfcmVmLmlzRm9jdXNlZCxcbiAgICAgIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnMsXG4gICAgICBib3JkZXJSYWRpdXMgPSBfcmVmJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmc7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdjb250cm9sJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDUgOiBjb2xvcnMubmV1dHJhbDAsXG4gICAgYm9yZGVyQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogaXNGb2N1c2VkID8gY29sb3JzLnByaW1hcnkgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgIGJvcmRlcldpZHRoOiAxLFxuICAgIGJveFNoYWRvdzogaXNGb2N1c2VkID8gXCIwIDAgMCAxcHggXCIgKyBjb2xvcnMucHJpbWFyeSA6IG51bGwsXG4gICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBtaW5IZWlnaHQ6IHNwYWNpbmcuY29udHJvbEhlaWdodCxcbiAgICBvdXRsaW5lOiAnMCAhaW1wb3J0YW50JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDEwMG1zJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMucHJpbWFyeSA6IGNvbG9ycy5uZXV0cmFsMzBcbiAgICB9XG4gIH07XG59O1xuXG52YXIgQ29udHJvbCA9IGZ1bmN0aW9uIENvbnRyb2wocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICBpc0ZvY3VzZWQgPSBwcm9wcy5pc0ZvY3VzZWQsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgICBtZW51SXNPcGVuID0gcHJvcHMubWVudUlzT3BlbjtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyQzKHtcbiAgICByZWY6IGlubmVyUmVmLFxuICAgIGNzczogZ2V0U3R5bGVzKCdjb250cm9sJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgY29udHJvbDogdHJ1ZSxcbiAgICAgICdjb250cm9sLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgICAnY29udHJvbC0taXMtZm9jdXNlZCc6IGlzRm9jdXNlZCxcbiAgICAgICdjb250cm9sLS1tZW51LWlzLW9wZW4nOiBtZW51SXNPcGVuXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UkMShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzJDQoKSB7IF9leHRlbmRzJDQgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMkNC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG52YXIgZ3JvdXBDU1MgPSBmdW5jdGlvbiBncm91cENTUyhfcmVmKSB7XG4gIHZhciBzcGFjaW5nID0gX3JlZi50aGVtZS5zcGFjaW5nO1xuICByZXR1cm4ge1xuICAgIHBhZGRpbmdCb3R0b206IHNwYWNpbmcuYmFzZVVuaXQgKiAyLFxuICAgIHBhZGRpbmdUb3A6IHNwYWNpbmcuYmFzZVVuaXQgKiAyXG4gIH07XG59O1xuXG52YXIgR3JvdXAgPSBmdW5jdGlvbiBHcm91cChwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBIZWFkaW5nID0gcHJvcHMuSGVhZGluZyxcbiAgICAgIGhlYWRpbmdQcm9wcyA9IHByb3BzLmhlYWRpbmdQcm9wcyxcbiAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICB0aGVtZSA9IHByb3BzLnRoZW1lLFxuICAgICAgc2VsZWN0UHJvcHMgPSBwcm9wcy5zZWxlY3RQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCB7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2dyb3VwJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgZ3JvdXA6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGpzeChIZWFkaW5nLCBfZXh0ZW5kcyQ0KHt9LCBoZWFkaW5nUHJvcHMsIHtcbiAgICBzZWxlY3RQcm9wczogc2VsZWN0UHJvcHMsXG4gICAgdGhlbWU6IHRoZW1lLFxuICAgIGdldFN0eWxlczogZ2V0U3R5bGVzLFxuICAgIGN4OiBjeFxuICB9KSwgbGFiZWwpLCBqc3goXCJkaXZcIiwgbnVsbCwgY2hpbGRyZW4pKTtcbn07XG5cbnZhciBncm91cEhlYWRpbmdDU1MgPSBmdW5jdGlvbiBncm91cEhlYWRpbmdDU1MoX3JlZjIpIHtcbiAgdmFyIHNwYWNpbmcgPSBfcmVmMi50aGVtZS5zcGFjaW5nO1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnZ3JvdXAnLFxuICAgIGNvbG9yOiAnIzk5OScsXG4gICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBmb250U2l6ZTogJzc1JScsXG4gICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMC4yNWVtJyxcbiAgICBwYWRkaW5nTGVmdDogc3BhY2luZy5iYXNlVW5pdCAqIDMsXG4gICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nLmJhc2VVbml0ICogMyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xuICB9O1xufTtcbnZhciBHcm91cEhlYWRpbmcgPSBmdW5jdGlvbiBHcm91cEhlYWRpbmcocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICB0aGVtZSA9IHByb3BzLnRoZW1lLFxuICAgICAgc2VsZWN0UHJvcHMgPSBwcm9wcy5zZWxlY3RQcm9wcyxcbiAgICAgIGNsZWFuUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSQxKHByb3BzLCBbXCJjbGFzc05hbWVcIiwgXCJjeFwiLCBcImdldFN0eWxlc1wiLCBcInRoZW1lXCIsIFwic2VsZWN0UHJvcHNcIl0pO1xuXG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMkNCh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2dyb3VwSGVhZGluZycsIF9leHRlbmRzJDQoe1xuICAgICAgdGhlbWU6IHRoZW1lXG4gICAgfSwgY2xlYW5Qcm9wcykpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ2dyb3VwLWhlYWRpbmcnOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBjbGVhblByb3BzKSk7XG59O1xuXG5mdW5jdGlvbiBfZXh0ZW5kcyQ1KCkgeyBfZXh0ZW5kcyQ1ID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzJDUuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSQyKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBpbnB1dENTUyA9IGZ1bmN0aW9uIGlucHV0Q1NTKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgICBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBtYXJnaW46IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIHBhZGRpbmdCb3R0b206IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIHBhZGRpbmdUb3A6IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIHZpc2liaWxpdHk6IGlzRGlzYWJsZWQgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJyxcbiAgICBjb2xvcjogY29sb3JzLm5ldXRyYWw4MFxuICB9O1xufTtcblxudmFyIGlucHV0U3R5bGUgPSBmdW5jdGlvbiBpbnB1dFN0eWxlKGlzSGlkZGVuKSB7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdpbnB1dCcsXG4gICAgYmFja2dyb3VuZDogMCxcbiAgICBib3JkZXI6IDAsXG4gICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICBvcGFjaXR5OiBpc0hpZGRlbiA/IDAgOiAxLFxuICAgIG91dGxpbmU6IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBjb2xvcjogJ2luaGVyaXQnXG4gIH07XG59O1xuXG52YXIgSW5wdXQgPSBmdW5jdGlvbiBJbnB1dChfcmVmMikge1xuICB2YXIgY2xhc3NOYW1lID0gX3JlZjIuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBfcmVmMi5jeCxcbiAgICAgIGdldFN0eWxlcyA9IF9yZWYyLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUmVmID0gX3JlZjIuaW5uZXJSZWYsXG4gICAgICBpc0hpZGRlbiA9IF9yZWYyLmlzSGlkZGVuLFxuICAgICAgaXNEaXNhYmxlZCA9IF9yZWYyLmlzRGlzYWJsZWQsXG4gICAgICB0aGVtZSA9IF9yZWYyLnRoZW1lLFxuICAgICAgc2VsZWN0UHJvcHMgPSBfcmVmMi5zZWxlY3RQcm9wcyxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UkMihfcmVmMiwgW1wiY2xhc3NOYW1lXCIsIFwiY3hcIiwgXCJnZXRTdHlsZXNcIiwgXCJpbm5lclJlZlwiLCBcImlzSGlkZGVuXCIsIFwiaXNEaXNhYmxlZFwiLCBcInRoZW1lXCIsIFwic2VsZWN0UHJvcHNcIl0pO1xuXG4gIHJldHVybiBqc3goXCJkaXZcIiwge1xuICAgIGNzczogZ2V0U3R5bGVzKCdpbnB1dCcsIF9leHRlbmRzJDUoe1xuICAgICAgdGhlbWU6IHRoZW1lXG4gICAgfSwgcHJvcHMpKVxuICB9LCBqc3goQXV0b3NpemVJbnB1dCwgX2V4dGVuZHMkNSh7XG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBpbnB1dDogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSksXG4gICAgaW5wdXRSZWY6IGlubmVyUmVmLFxuICAgIGlucHV0U3R5bGU6IGlucHV0U3R5bGUoaXNIaWRkZW4pLFxuICAgIGRpc2FibGVkOiBpc0Rpc2FibGVkXG4gIH0sIHByb3BzKSkpO1xufTtcblxuZnVuY3Rpb24gX2V4dGVuZHMkNigpIHsgX2V4dGVuZHMkNiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcyQ2LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbnZhciBtdWx0aVZhbHVlQ1NTID0gZnVuY3Rpb24gbXVsdGlWYWx1ZUNTUyhfcmVmKSB7XG4gIHZhciBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgICBib3JkZXJSYWRpdXMgPSBfcmVmJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnbXVsdGlWYWx1ZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMubmV1dHJhbDEwLFxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzIC8gMixcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbWFyZ2luOiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBtaW5XaWR0aDogMCAvLyByZXNvbHZlcyBmbGV4L3RleHQtb3ZlcmZsb3cgYnVnXG5cbiAgfTtcbn07XG52YXIgbXVsdGlWYWx1ZUxhYmVsQ1NTID0gZnVuY3Rpb24gbXVsdGlWYWx1ZUxhYmVsQ1NTKF9yZWYyKSB7XG4gIHZhciBfcmVmMiR0aGVtZSA9IF9yZWYyLnRoZW1lLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX3JlZjIkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgY29sb3JzID0gX3JlZjIkdGhlbWUuY29sb3JzLFxuICAgICAgY3JvcFdpdGhFbGxpcHNpcyA9IF9yZWYyLmNyb3BXaXRoRWxsaXBzaXM7XG4gIHJldHVybiB7XG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMgLyAyLFxuICAgIGNvbG9yOiBjb2xvcnMubmV1dHJhbDgwLFxuICAgIGZvbnRTaXplOiAnODUlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcGFkZGluZzogMyxcbiAgICBwYWRkaW5nTGVmdDogNixcbiAgICB0ZXh0T3ZlcmZsb3c6IGNyb3BXaXRoRWxsaXBzaXMgPyAnZWxsaXBzaXMnIDogbnVsbCxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICB9O1xufTtcbnZhciBtdWx0aVZhbHVlUmVtb3ZlQ1NTID0gZnVuY3Rpb24gbXVsdGlWYWx1ZVJlbW92ZUNTUyhfcmVmMykge1xuICB2YXIgX3JlZjMkdGhlbWUgPSBfcmVmMy50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmMyR0aGVtZS5zcGFjaW5nLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX3JlZjMkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgY29sb3JzID0gX3JlZjMkdGhlbWUuY29sb3JzLFxuICAgICAgaXNGb2N1c2VkID0gX3JlZjMuaXNGb2N1c2VkO1xuICByZXR1cm4ge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzIC8gMixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRm9jdXNlZCAmJiBjb2xvcnMuZGFuZ2VyTGlnaHQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nLmJhc2VVbml0LFxuICAgIHBhZGRpbmdSaWdodDogc3BhY2luZy5iYXNlVW5pdCxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZGFuZ2VyTGlnaHQsXG4gICAgICBjb2xvcjogY29sb3JzLmRhbmdlclxuICAgIH1cbiAgfTtcbn07XG52YXIgTXVsdGlWYWx1ZUdlbmVyaWMgPSBmdW5jdGlvbiBNdWx0aVZhbHVlR2VuZXJpYyhfcmVmNCkge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmNC5jaGlsZHJlbixcbiAgICAgIGlubmVyUHJvcHMgPSBfcmVmNC5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIGlubmVyUHJvcHMsIGNoaWxkcmVuKTtcbn07XG52YXIgTXVsdGlWYWx1ZUNvbnRhaW5lciA9IE11bHRpVmFsdWVHZW5lcmljO1xudmFyIE11bHRpVmFsdWVMYWJlbCA9IE11bHRpVmFsdWVHZW5lcmljO1xuZnVuY3Rpb24gTXVsdGlWYWx1ZVJlbW92ZShfcmVmNSkge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmNS5jaGlsZHJlbixcbiAgICAgIGlubmVyUHJvcHMgPSBfcmVmNS5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIGlubmVyUHJvcHMsIGNoaWxkcmVuIHx8IGpzeChDcm9zc0ljb24sIHtcbiAgICBzaXplOiAxNFxuICB9KSk7XG59XG5cbnZhciBNdWx0aVZhbHVlID0gZnVuY3Rpb24gTXVsdGlWYWx1ZShwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNvbXBvbmVudHMgPSBwcm9wcy5jb21wb25lbnRzLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGRhdGEgPSBwcm9wcy5kYXRhLFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICAgIHJlbW92ZVByb3BzID0gcHJvcHMucmVtb3ZlUHJvcHMsXG4gICAgICBzZWxlY3RQcm9wcyA9IHByb3BzLnNlbGVjdFByb3BzO1xuICB2YXIgQ29udGFpbmVyID0gY29tcG9uZW50cy5Db250YWluZXIsXG4gICAgICBMYWJlbCA9IGNvbXBvbmVudHMuTGFiZWwsXG4gICAgICBSZW1vdmUgPSBjb21wb25lbnRzLlJlbW92ZTtcbiAgcmV0dXJuIGpzeChDbGFzc05hbWVzLCBudWxsLCBmdW5jdGlvbiAoX3JlZjYpIHtcbiAgICB2YXIgY3NzID0gX3JlZjYuY3NzLFxuICAgICAgICBlbW90aW9uQ3ggPSBfcmVmNi5jeDtcbiAgICByZXR1cm4ganN4KENvbnRhaW5lciwge1xuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGlubmVyUHJvcHM6IF9leHRlbmRzJDYoe30sIGlubmVyUHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBlbW90aW9uQ3goY3NzKGdldFN0eWxlcygnbXVsdGlWYWx1ZScsIHByb3BzKSksIGN4KHtcbiAgICAgICAgICAnbXVsdGktdmFsdWUnOiB0cnVlLFxuICAgICAgICAgICdtdWx0aS12YWx1ZS0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkXG4gICAgICAgIH0sIGNsYXNzTmFtZSkpXG4gICAgICB9KSxcbiAgICAgIHNlbGVjdFByb3BzOiBzZWxlY3RQcm9wc1xuICAgIH0sIGpzeChMYWJlbCwge1xuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgY2xhc3NOYW1lOiBlbW90aW9uQ3goY3NzKGdldFN0eWxlcygnbXVsdGlWYWx1ZUxhYmVsJywgcHJvcHMpKSwgY3goe1xuICAgICAgICAgICdtdWx0aS12YWx1ZV9fbGFiZWwnOiB0cnVlXG4gICAgICAgIH0sIGNsYXNzTmFtZSkpXG4gICAgICB9LFxuICAgICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzXG4gICAgfSwgY2hpbGRyZW4pLCBqc3goUmVtb3ZlLCB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaW5uZXJQcm9wczogX2V4dGVuZHMkNih7XG4gICAgICAgIGNsYXNzTmFtZTogZW1vdGlvbkN4KGNzcyhnZXRTdHlsZXMoJ211bHRpVmFsdWVSZW1vdmUnLCBwcm9wcykpLCBjeCh7XG4gICAgICAgICAgJ211bHRpLXZhbHVlX19yZW1vdmUnOiB0cnVlXG4gICAgICAgIH0sIGNsYXNzTmFtZSkpXG4gICAgICB9LCByZW1vdmVQcm9wcyksXG4gICAgICBzZWxlY3RQcm9wczogc2VsZWN0UHJvcHNcbiAgICB9KSk7XG4gIH0pO1xufTtcblxuTXVsdGlWYWx1ZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNyb3BXaXRoRWxsaXBzaXM6IHRydWVcbn07XG5cbmZ1bmN0aW9uIF9leHRlbmRzJDcoKSB7IF9leHRlbmRzJDcgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMkNy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG52YXIgb3B0aW9uQ1NTID0gZnVuY3Rpb24gb3B0aW9uQ1NTKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgICBpc0ZvY3VzZWQgPSBfcmVmLmlzRm9jdXNlZCxcbiAgICAgIGlzU2VsZWN0ZWQgPSBfcmVmLmlzU2VsZWN0ZWQsXG4gICAgICBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ29wdGlvbicsXG4gICAgYmFja2dyb3VuZENvbG9yOiBpc1NlbGVjdGVkID8gY29sb3JzLnByaW1hcnkgOiBpc0ZvY3VzZWQgPyBjb2xvcnMucHJpbWFyeTI1IDogJ3RyYW5zcGFyZW50JyxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMjAgOiBpc1NlbGVjdGVkID8gY29sb3JzLm5ldXRyYWwwIDogJ2luaGVyaXQnLFxuICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICBwYWRkaW5nOiBzcGFjaW5nLmJhc2VVbml0ICogMiArIFwicHggXCIgKyBzcGFjaW5nLmJhc2VVbml0ICogMyArIFwicHhcIixcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxuICAgIC8vIHByb3ZpZGUgc29tZSBhZmZvcmRhbmNlIG9uIHRvdWNoIGRldmljZXNcbiAgICAnOmFjdGl2ZSc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogIWlzRGlzYWJsZWQgJiYgKGlzU2VsZWN0ZWQgPyBjb2xvcnMucHJpbWFyeSA6IGNvbG9ycy5wcmltYXJ5NTApXG4gICAgfVxuICB9O1xufTtcblxudmFyIE9wdGlvbiA9IGZ1bmN0aW9uIE9wdGlvbihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZCA9IHByb3BzLmlzRm9jdXNlZCxcbiAgICAgIGlzU2VsZWN0ZWQgPSBwcm9wcy5pc1NlbGVjdGVkLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzJDcoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdvcHRpb24nLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBvcHRpb246IHRydWUsXG4gICAgICAnb3B0aW9uLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgICAnb3B0aW9uLS1pcy1mb2N1c2VkJzogaXNGb2N1c2VkLFxuICAgICAgJ29wdGlvbi0taXMtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkXG4gICAgfSwgY2xhc3NOYW1lKSxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuXG5mdW5jdGlvbiBfZXh0ZW5kcyQ4KCkgeyBfZXh0ZW5kcyQ4ID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzJDguYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxudmFyIHBsYWNlaG9sZGVyQ1NTID0gZnVuY3Rpb24gcGxhY2Vob2xkZXJDU1MoX3JlZikge1xuICB2YXIgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdwbGFjZWhvbGRlcicsXG4gICAgY29sb3I6IGNvbG9ycy5uZXV0cmFsNTAsXG4gICAgbWFyZ2luTGVmdDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgbWFyZ2luUmlnaHQ6IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKSdcbiAgfTtcbn07XG5cbnZhciBQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIFBsYWNlaG9sZGVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzJDgoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdwbGFjZWhvbGRlcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIHBsYWNlaG9sZGVyOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxuZnVuY3Rpb24gX2V4dGVuZHMkOSgpIHsgX2V4dGVuZHMkOSA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcyQ5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbnZhciBjc3MkMSA9IGZ1bmN0aW9uIGNzcyhfcmVmKSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX3JlZi5pc0Rpc2FibGVkLFxuICAgICAgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdzaW5nbGVWYWx1ZScsXG4gICAgY29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDQwIDogY29sb3JzLm5ldXRyYWw4MCxcbiAgICBtYXJnaW5MZWZ0OiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBtYXJnaW5SaWdodDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgbWF4V2lkdGg6IFwiY2FsYygxMDAlIC0gXCIgKyBzcGFjaW5nLmJhc2VVbml0ICogMiArIFwicHgpXCIsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknXG4gIH07XG59O1xuXG52YXIgU2luZ2xlVmFsdWUgPSBmdW5jdGlvbiBTaW5nbGVWYWx1ZShwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzJDkoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdzaW5nbGVWYWx1ZScsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdzaW5nbGUtdmFsdWUnOiB0cnVlLFxuICAgICAgJ3NpbmdsZS12YWx1ZS0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxuZnVuY3Rpb24gX2V4dGVuZHMkYSgpIHsgX2V4dGVuZHMkYSA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcyRhLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbnZhciBjb21wb25lbnRzID0ge1xuICBDbGVhckluZGljYXRvcjogQ2xlYXJJbmRpY2F0b3IsXG4gIENvbnRyb2w6IENvbnRyb2wsXG4gIERyb3Bkb3duSW5kaWNhdG9yOiBEcm9wZG93bkluZGljYXRvcixcbiAgRG93bkNoZXZyb246IERvd25DaGV2cm9uLFxuICBDcm9zc0ljb246IENyb3NzSWNvbixcbiAgR3JvdXA6IEdyb3VwLFxuICBHcm91cEhlYWRpbmc6IEdyb3VwSGVhZGluZyxcbiAgSW5kaWNhdG9yc0NvbnRhaW5lcjogSW5kaWNhdG9yc0NvbnRhaW5lcixcbiAgSW5kaWNhdG9yU2VwYXJhdG9yOiBJbmRpY2F0b3JTZXBhcmF0b3IsXG4gIElucHV0OiBJbnB1dCxcbiAgTG9hZGluZ0luZGljYXRvcjogTG9hZGluZ0luZGljYXRvcixcbiAgTWVudTogTWVudSxcbiAgTWVudUxpc3Q6IE1lbnVMaXN0LFxuICBNZW51UG9ydGFsOiBNZW51UG9ydGFsLFxuICBMb2FkaW5nTWVzc2FnZTogTG9hZGluZ01lc3NhZ2UsXG4gIE5vT3B0aW9uc01lc3NhZ2U6IE5vT3B0aW9uc01lc3NhZ2UsXG4gIE11bHRpVmFsdWU6IE11bHRpVmFsdWUsXG4gIE11bHRpVmFsdWVDb250YWluZXI6IE11bHRpVmFsdWVDb250YWluZXIsXG4gIE11bHRpVmFsdWVMYWJlbDogTXVsdGlWYWx1ZUxhYmVsLFxuICBNdWx0aVZhbHVlUmVtb3ZlOiBNdWx0aVZhbHVlUmVtb3ZlLFxuICBPcHRpb246IE9wdGlvbixcbiAgUGxhY2Vob2xkZXI6IFBsYWNlaG9sZGVyLFxuICBTZWxlY3RDb250YWluZXI6IFNlbGVjdENvbnRhaW5lcixcbiAgU2luZ2xlVmFsdWU6IFNpbmdsZVZhbHVlLFxuICBWYWx1ZUNvbnRhaW5lcjogVmFsdWVDb250YWluZXJcbn07XG52YXIgZGVmYXVsdENvbXBvbmVudHMgPSBmdW5jdGlvbiBkZWZhdWx0Q29tcG9uZW50cyhwcm9wcykge1xuICByZXR1cm4gX2V4dGVuZHMkYSh7fSwgY29tcG9uZW50cywgcHJvcHMuY29tcG9uZW50cyk7XG59O1xuXG5leHBvcnQgeyBNZW51UGxhY2VyIGFzIE0sIGNvbnRhaW5lckNTUyBhcyBhLCBjc3MgYXMgYiwgY2xlYXJJbmRpY2F0b3JDU1MgYXMgYywgZHJvcGRvd25JbmRpY2F0b3JDU1MgYXMgZCwgZ3JvdXBIZWFkaW5nQ1NTIGFzIGUsIGluZGljYXRvclNlcGFyYXRvckNTUyBhcyBmLCBncm91cENTUyBhcyBnLCBpbnB1dENTUyBhcyBoLCBpbmRpY2F0b3JzQ29udGFpbmVyQ1NTIGFzIGksIGxvYWRpbmdNZXNzYWdlQ1NTIGFzIGosIG1lbnVMaXN0Q1NTIGFzIGssIGxvYWRpbmdJbmRpY2F0b3JDU1MgYXMgbCwgbWVudUNTUyBhcyBtLCBtZW51UG9ydGFsQ1NTIGFzIG4sIG11bHRpVmFsdWVDU1MgYXMgbywgbXVsdGlWYWx1ZUxhYmVsQ1NTIGFzIHAsIG11bHRpVmFsdWVSZW1vdmVDU1MgYXMgcSwgbm9PcHRpb25zTWVzc2FnZUNTUyBhcyByLCBvcHRpb25DU1MgYXMgcywgcGxhY2Vob2xkZXJDU1MgYXMgdCwgY3NzJDEgYXMgdSwgdmFsdWVDb250YWluZXJDU1MgYXMgdiwgZGVmYXVsdENvbXBvbmVudHMgYXMgdywgZXhwb3J0ZWRFcXVhbCBhcyB4LCBjb21wb25lbnRzIGFzIHkgfTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tICdtZW1vaXplLW9uZSc7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICcuL3V0aWxzLTA2YjBkNWE0LmJyb3dzZXIuZXNtLmpzJztcbmV4cG9ydCB7IHkgYXMgY29tcG9uZW50cyB9IGZyb20gJy4vaW5kZXgtNDMyMmMwZWQuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgUyBhcyBTZWxlY3QgfSBmcm9tICcuL1NlbGVjdC05ZmRiOGNkMC5icm93c2VyLmVzbS5qcyc7XG5leHBvcnQgeyBjIGFzIGNyZWF0ZUZpbHRlciwgYSBhcyBkZWZhdWx0VGhlbWUsIG0gYXMgbWVyZ2VTdHlsZXMgfSBmcm9tICcuL1NlbGVjdC05ZmRiOGNkMC5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgJ3JlYWN0LWlucHV0LWF1dG9zaXplJztcbmltcG9ydCB7IG0gYXMgbWFuYWdlU3RhdGUgfSBmcm9tICcuL3N0YXRlTWFuYWdlci0wNGY3MzRhMi5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE5vbmNlUHJvdmlkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoTm9uY2VQcm92aWRlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTm9uY2VQcm92aWRlcihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuXG4gICAgX3RoaXMuY3JlYXRlRW1vdGlvbkNhY2hlID0gZnVuY3Rpb24gKG5vbmNlKSB7XG4gICAgICByZXR1cm4gY3JlYXRlQ2FjaGUoe1xuICAgICAgICBub25jZTogbm9uY2VcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5jcmVhdGVFbW90aW9uQ2FjaGUgPSBtZW1vaXplT25lKF90aGlzLmNyZWF0ZUVtb3Rpb25DYWNoZSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE5vbmNlUHJvdmlkZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGVtb3Rpb25DYWNoZSA9IHRoaXMuY3JlYXRlRW1vdGlvbkNhY2hlKHRoaXMucHJvcHMubm9uY2UpO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENhY2hlUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiBlbW90aW9uQ2FjaGVcbiAgICB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfTtcblxuICByZXR1cm4gTm9uY2VQcm92aWRlcjtcbn0oQ29tcG9uZW50KTtcblxudmFyIGluZGV4ID0gbWFuYWdlU3RhdGUoU2VsZWN0KTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG5leHBvcnQgeyBOb25jZVByb3ZpZGVyIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgZGVmYXVsdElucHV0VmFsdWU6ICcnLFxuICBkZWZhdWx0TWVudUlzT3BlbjogZmFsc2UsXG4gIGRlZmF1bHRWYWx1ZTogbnVsbFxufTtcblxudmFyIG1hbmFnZVN0YXRlID0gZnVuY3Rpb24gbWFuYWdlU3RhdGUoU2VsZWN0Q29tcG9uZW50KSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHJldHVybiBfdGVtcCA9IF9jbGFzcyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHNMb29zZShTdGF0ZU1hbmFnZXIsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gU3RhdGVNYW5hZ2VyKCkge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICAgIF90aGlzLnNlbGVjdCA9IHZvaWQgMDtcbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICBpbnB1dFZhbHVlOiBfdGhpcy5wcm9wcy5pbnB1dFZhbHVlICE9PSB1bmRlZmluZWQgPyBfdGhpcy5wcm9wcy5pbnB1dFZhbHVlIDogX3RoaXMucHJvcHMuZGVmYXVsdElucHV0VmFsdWUsXG4gICAgICAgIG1lbnVJc09wZW46IF90aGlzLnByb3BzLm1lbnVJc09wZW4gIT09IHVuZGVmaW5lZCA/IF90aGlzLnByb3BzLm1lbnVJc09wZW4gOiBfdGhpcy5wcm9wcy5kZWZhdWx0TWVudUlzT3BlbixcbiAgICAgICAgdmFsdWU6IF90aGlzLnByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQgPyBfdGhpcy5wcm9wcy52YWx1ZSA6IF90aGlzLnByb3BzLmRlZmF1bHRWYWx1ZVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUsIGFjdGlvbk1ldGEpIHtcbiAgICAgICAgX3RoaXMuY2FsbFByb3AoJ29uQ2hhbmdlJywgdmFsdWUsIGFjdGlvbk1ldGEpO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbklucHV0Q2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlLCBhY3Rpb25NZXRhKSB7XG4gICAgICAgIC8vIFRPRE86IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgd2UgYWxsb3cgdGhlIHByb3AgdG8gcmV0dXJuIGEgbmV3XG4gICAgICAgIC8vIHZhbHVlLCBidXQgbm93IGlucHV0VmFsdWUgaXMgYSBjb250cm9sbGFibGUgcHJvcCB3ZSBwcm9iYWJseSBzaG91bGRuJ3RcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gX3RoaXMuY2FsbFByb3AoJ29uSW5wdXRDaGFuZ2UnLCB2YWx1ZSwgYWN0aW9uTWV0YSk7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlucHV0VmFsdWU6IG5ld1ZhbHVlICE9PSB1bmRlZmluZWQgPyBuZXdWYWx1ZSA6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25NZW51T3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuY2FsbFByb3AoJ29uTWVudU9wZW4nKTtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVudUlzT3BlbjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uTWVudUNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5jYWxsUHJvcCgnb25NZW51Q2xvc2UnKTtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVudUlzT3BlbjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgdmFyIF9wcm90byA9IFN0YXRlTWFuYWdlci5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8uZm9jdXMgPSBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgIHRoaXMuc2VsZWN0LmZvY3VzKCk7XG4gICAgfTtcblxuICAgIF9wcm90by5ibHVyID0gZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgIHRoaXMuc2VsZWN0LmJsdXIoKTtcbiAgICB9IC8vIEZJWE1FOiB1bnR5cGVkIGZsb3cgY29kZSwgcmV0dXJuIGFueVxuICAgIDtcblxuICAgIF9wcm90by5nZXRQcm9wID0gZnVuY3Rpb24gZ2V0UHJvcChrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzW2tleV0gIT09IHVuZGVmaW5lZCA/IHRoaXMucHJvcHNba2V5XSA6IHRoaXMuc3RhdGVba2V5XTtcbiAgICB9IC8vIEZJWE1FOiB1bnR5cGVkIGZsb3cgY29kZSwgcmV0dXJuIGFueVxuICAgIDtcblxuICAgIF9wcm90by5jYWxsUHJvcCA9IGZ1bmN0aW9uIGNhbGxQcm9wKG5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wc1tuYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMpW25hbWVdLmFwcGx5KF90aGlzJHByb3BzLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBkZWZhdWx0SW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzMi5kZWZhdWx0SW5wdXRWYWx1ZSxcbiAgICAgICAgICBkZWZhdWx0TWVudUlzT3BlbiA9IF90aGlzJHByb3BzMi5kZWZhdWx0TWVudUlzT3BlbixcbiAgICAgICAgICBkZWZhdWx0VmFsdWUgPSBfdGhpcyRwcm9wczIuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMyLCBbXCJkZWZhdWx0SW5wdXRWYWx1ZVwiLCBcImRlZmF1bHRNZW51SXNPcGVuXCIsIFwiZGVmYXVsdFZhbHVlXCJdKTtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoX3JlZikge1xuICAgICAgICAgIF90aGlzMi5zZWxlY3QgPSBfcmVmO1xuICAgICAgICB9LFxuICAgICAgICBpbnB1dFZhbHVlOiB0aGlzLmdldFByb3AoJ2lucHV0VmFsdWUnKSxcbiAgICAgICAgbWVudUlzT3BlbjogdGhpcy5nZXRQcm9wKCdtZW51SXNPcGVuJyksXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICBvbklucHV0Q2hhbmdlOiB0aGlzLm9uSW5wdXRDaGFuZ2UsXG4gICAgICAgIG9uTWVudUNsb3NlOiB0aGlzLm9uTWVudUNsb3NlLFxuICAgICAgICBvbk1lbnVPcGVuOiB0aGlzLm9uTWVudU9wZW4sXG4gICAgICAgIHZhbHVlOiB0aGlzLmdldFByb3AoJ3ZhbHVlJylcbiAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFN0YXRlTWFuYWdlcjtcbiAgfShDb21wb25lbnQpLCBfY2xhc3MuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzLCBfdGVtcDtcbn07XG5cbmV4cG9ydCB7IG1hbmFnZVN0YXRlIGFzIG0gfTtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTk8gT1Bcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG4vLyBDbGFzcyBOYW1lIFByZWZpeGVyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGNvbXBvbmVudCBzdGF0ZSBmb3Igc3R5bGluZyB3aXRoIGNsYXNzIG5hbWVzLlxuXG4gRXhwZWN0cyBhbiBhcnJheSBvZiBzdHJpbmdzIE9SIGEgc3RyaW5nL29iamVjdCBwYWlyOlxuIC0gY2xhc3NOYW1lKFsnY29tcCcsICdjb21wLWFyZycsICdjb21wLWFyZy0yJ10pXG4gICBAcmV0dXJucyAncmVhY3Qtc2VsZWN0X19jb21wIHJlYWN0LXNlbGVjdF9fY29tcC1hcmcgcmVhY3Qtc2VsZWN0X19jb21wLWFyZy0yJ1xuIC0gY2xhc3NOYW1lKCdjb21wJywgeyBzb21lOiB0cnVlLCBzdGF0ZTogZmFsc2UgfSlcbiAgIEByZXR1cm5zICdyZWFjdC1zZWxlY3RfX2NvbXAgcmVhY3Qtc2VsZWN0X19jb21wLS1zb21lJ1xuKi9cblxuZnVuY3Rpb24gYXBwbHlQcmVmaXhUb05hbWUocHJlZml4LCBuYW1lKSB7XG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiBwcmVmaXg7XG4gIH0gZWxzZSBpZiAobmFtZVswXSA9PT0gJy0nKSB7XG4gICAgcmV0dXJuIHByZWZpeCArIG5hbWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHByZWZpeCArICdfXycgKyBuYW1lO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsYXNzTmFtZXMocHJlZml4LCBzdGF0ZSwgY2xhc3NOYW1lKSB7XG4gIHZhciBhcnIgPSBbY2xhc3NOYW1lXTtcblxuICBpZiAoc3RhdGUgJiYgcHJlZml4KSB7XG4gICAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzdGF0ZVtrZXldKSB7XG4gICAgICAgIGFyci5wdXNoKFwiXCIgKyBhcHBseVByZWZpeFRvTmFtZShwcmVmaXgsIGtleSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcnIuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIGk7XG4gIH0pLm1hcChmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBTdHJpbmcoaSkudHJpbSgpO1xuICB9KS5qb2luKCcgJyk7XG59IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ2xlYW4gVmFsdWVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgY2xlYW5WYWx1ZSA9IGZ1bmN0aW9uIGNsZWFuVmFsdWUodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWUuZmlsdGVyKEJvb2xlYW4pO1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkgcmV0dXJuIFt2YWx1ZV07XG4gIHJldHVybiBbXTtcbn07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSGFuZGxlIElucHV0IENoYW5nZVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGlucHV0VmFsdWUsIGFjdGlvbk1ldGEsIG9uSW5wdXRDaGFuZ2UpIHtcbiAgaWYgKG9uSW5wdXRDaGFuZ2UpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSBvbklucHV0Q2hhbmdlKGlucHV0VmFsdWUsIGFjdGlvbk1ldGEpO1xuICAgIGlmICh0eXBlb2YgbmV3VmFsdWUgPT09ICdzdHJpbmcnKSByZXR1cm4gbmV3VmFsdWU7XG4gIH1cblxuICByZXR1cm4gaW5wdXRWYWx1ZTtcbn0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTY3JvbGwgSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGlzRG9jdW1lbnRFbGVtZW50KGVsKSB7XG4gIHJldHVybiBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5LCB3aW5kb3ddLmluZGV4T2YoZWwpID4gLTE7XG59IC8vIE5vcm1hbGl6ZWQgU2Nyb2xsIFRvcFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcChlbCkge1xuICBpZiAoaXNEb2N1bWVudEVsZW1lbnQoZWwpKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgfVxuXG4gIHJldHVybiBlbC5zY3JvbGxUb3A7XG59XG5mdW5jdGlvbiBzY3JvbGxUbyhlbCwgdG9wKSB7XG4gIC8vIHdpdGggYSBzY3JvbGwgZGlzdGFuY2UsIHdlIHBlcmZvcm0gc2Nyb2xsIG9uIHRoZSBlbGVtZW50XG4gIGlmIChpc0RvY3VtZW50RWxlbWVudChlbCkpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdG9wKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbC5zY3JvbGxUb3AgPSB0b3A7XG59IC8vIEdldCBTY3JvbGwgUGFyZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgdmFyIGV4Y2x1ZGVTdGF0aWNQYXJlbnQgPSBzdHlsZS5wb3NpdGlvbiA9PT0gJ2Fic29sdXRlJztcbiAgdmFyIG92ZXJmbG93UnggPSAvKGF1dG98c2Nyb2xsKS87XG4gIHZhciBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsgLy8gc3VjayBpdCwgZmxvdy4uLlxuXG4gIGlmIChzdHlsZS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykgcmV0dXJuIGRvY0VsO1xuXG4gIGZvciAodmFyIHBhcmVudCA9IGVsZW1lbnQ7IHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50Oykge1xuICAgIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpO1xuXG4gICAgaWYgKGV4Y2x1ZGVTdGF0aWNQYXJlbnQgJiYgc3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAob3ZlcmZsb3dSeC50ZXN0KHN0eWxlLm92ZXJmbG93ICsgc3R5bGUub3ZlcmZsb3dZICsgc3R5bGUub3ZlcmZsb3dYKSkge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZG9jRWw7XG59IC8vIEFuaW1hdGVkIFNjcm9sbCBUb1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICBAcGFyYW0gdDogdGltZSAoZWxhcHNlZClcbiAgQHBhcmFtIGI6IGluaXRpYWwgdmFsdWVcbiAgQHBhcmFtIGM6IGFtb3VudCBvZiBjaGFuZ2VcbiAgQHBhcmFtIGQ6IGR1cmF0aW9uXG4qL1xuXG5mdW5jdGlvbiBlYXNlT3V0Q3ViaWModCwgYiwgYywgZCkge1xuICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCArIDEpICsgYjtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZWRTY3JvbGxUbyhlbGVtZW50LCB0bywgZHVyYXRpb24sIGNhbGxiYWNrKSB7XG4gIGlmIChkdXJhdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgZHVyYXRpb24gPSAyMDA7XG4gIH1cblxuICBpZiAoY2FsbGJhY2sgPT09IHZvaWQgMCkge1xuICAgIGNhbGxiYWNrID0gbm9vcDtcbiAgfVxuXG4gIHZhciBzdGFydCA9IGdldFNjcm9sbFRvcChlbGVtZW50KTtcbiAgdmFyIGNoYW5nZSA9IHRvIC0gc3RhcnQ7XG4gIHZhciBpbmNyZW1lbnQgPSAxMDtcbiAgdmFyIGN1cnJlbnRUaW1lID0gMDtcblxuICBmdW5jdGlvbiBhbmltYXRlU2Nyb2xsKCkge1xuICAgIGN1cnJlbnRUaW1lICs9IGluY3JlbWVudDtcbiAgICB2YXIgdmFsID0gZWFzZU91dEN1YmljKGN1cnJlbnRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbik7XG4gICAgc2Nyb2xsVG8oZWxlbWVudCwgdmFsKTtcblxuICAgIGlmIChjdXJyZW50VGltZSA8IGR1cmF0aW9uKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVTY3JvbGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBhbmltYXRlU2Nyb2xsKCk7XG59IC8vIFNjcm9sbCBJbnRvIFZpZXdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBzY3JvbGxJbnRvVmlldyhtZW51RWwsIGZvY3VzZWRFbCkge1xuICB2YXIgbWVudVJlY3QgPSBtZW51RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBmb2N1c2VkUmVjdCA9IGZvY3VzZWRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIG92ZXJTY3JvbGwgPSBmb2N1c2VkRWwub2Zmc2V0SGVpZ2h0IC8gMztcblxuICBpZiAoZm9jdXNlZFJlY3QuYm90dG9tICsgb3ZlclNjcm9sbCA+IG1lbnVSZWN0LmJvdHRvbSkge1xuICAgIHNjcm9sbFRvKG1lbnVFbCwgTWF0aC5taW4oZm9jdXNlZEVsLm9mZnNldFRvcCArIGZvY3VzZWRFbC5jbGllbnRIZWlnaHQgLSBtZW51RWwub2Zmc2V0SGVpZ2h0ICsgb3ZlclNjcm9sbCwgbWVudUVsLnNjcm9sbEhlaWdodCkpO1xuICB9IGVsc2UgaWYgKGZvY3VzZWRSZWN0LnRvcCAtIG92ZXJTY3JvbGwgPCBtZW51UmVjdC50b3ApIHtcbiAgICBzY3JvbGxUbyhtZW51RWwsIE1hdGgubWF4KGZvY3VzZWRFbC5vZmZzZXRUb3AgLSBvdmVyU2Nyb2xsLCAwKSk7XG4gIH1cbn0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHZXQgYm91bmRpbmcgY2xpZW50IG9iamVjdFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBjYW5ub3QgZ2V0IGtleXMgdXNpbmcgYXJyYXkgbm90YXRpb24gd2l0aCBET01SZWN0XG5cbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50T2JqKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIGJvdHRvbTogcmVjdC5ib3R0b20sXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgcmlnaHQ6IHJlY3QucmlnaHQsXG4gICAgdG9wOiByZWN0LnRvcCxcbiAgICB3aWR0aDogcmVjdC53aWR0aFxuICB9O1xufVxuLy8gVG91Y2ggQ2FwYWJpbGl0eSBEZXRlY3RvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGlzVG91Y2hDYXBhYmxlKCkge1xuICB0cnkge1xuICAgIGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdUb3VjaEV2ZW50Jyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNb2JpbGUgRGV2aWNlIERldGVjdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gaXNNb2JpbGVEZXZpY2UoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgeyBnZXRTY3JvbGxQYXJlbnQgYXMgYSwgZ2V0U2Nyb2xsVG9wIGFzIGIsIGFuaW1hdGVkU2Nyb2xsVG8gYXMgYywgaXNNb2JpbGVEZXZpY2UgYXMgZCwgY2xlYW5WYWx1ZSBhcyBlLCBzY3JvbGxJbnRvVmlldyBhcyBmLCBnZXRCb3VuZGluZ0NsaWVudE9iaiBhcyBnLCBjbGFzc05hbWVzIGFzIGgsIGlzVG91Y2hDYXBhYmxlIGFzIGksIGlzRG9jdW1lbnRFbGVtZW50IGFzIGosIGhhbmRsZUlucHV0Q2hhbmdlIGFzIGssIG5vb3AgYXMgbiwgc2Nyb2xsVG8gYXMgcyB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2F0b21zL0J1dHRvbic7XHJcblxyXG5pbXBvcnQgeyBUb2RvLCBUb2RvUHJvcHMgfSBmcm9tICcuLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Ub2RvJztcclxuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvV3JhcHBlcic7XHJcbmltcG9ydCBDbHVzdGVyQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ2x1c3RlckNoYXJ0JztcclxuaW1wb3J0IENsdXN0ZXJIZXggZnJvbSAnLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ2x1c3RlckhleCc7XHJcbmltcG9ydCBDbHVzdGVyTW9kbm4gZnJvbSAnLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ2x1c3Rlck1vZG5uJztcclxuXHJcbmV4cG9ydCBlbnVtIENsdXN0ZXJNb2RlIHtcclxuICBub25lID0gJycsXHJcbiAgaGV4ID0gJ2hleCcsXHJcbiAgY2hhcnQgPSAnY2hhcnQnLFxyXG4gIG1vZG5uID0gJ21vZG5uJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSW5kZXg6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICBjb25zdCBbbW9yZWgsIHNldE1vcmVoXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KENsdXN0ZXJNb2RlLm1vZG5uKTtcclxuXHJcbiAgY29uc3Qga3ViZXJuZXRlczogVG9kb1Byb3BzID0ge1xyXG4gICAgdGl0bGU6ICdLdWJlcm5ldGVzJyxcclxuICAgIHN1YnRpdGxlOiAnS3ViZXJuZXRlcyBBUEkgdGVzdCcsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0FQSSdcclxuICAgICAgICAvLyBsaW5rOiAna3ViZXJuZXRlcy90ZXN0J1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHtcclxuICAgICAgLy8gICBuYW1lOiAnbG9naW4nXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIC8vIHtcclxuICAgICAgLy8gICBuYW1lOiAndG9rZW4nXHJcbiAgICAgIC8vIH1cclxuICAgIF1cclxuICB9O1xyXG4gIGNvbnN0IG52aWRpYTogVG9kb1Byb3BzID0ge1xyXG4gICAgdGl0bGU6ICdOVklESUEnLFxyXG4gICAgc3VidGl0bGU6ICdkYXNoYm9hcmQgKG52aWRpYS1zbWkpJyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAncDEwMCcsXHJcbiAgICAgICAgbGluazogJ252aWRpYS9kYXNoYm9hcmQnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG4gIGNvbnN0IGFtZDogVG9kb1Byb3BzID0ge1xyXG4gICAgdGl0bGU6ICdBTUQnLFxyXG4gICAgc3VidGl0bGU6ICdkYXNoYm9hcmQgKHJvY20tc21pKScsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3J4NTEnLFxyXG4gICAgICAgIGxpbms6ICdhbWQvZGFzaGJvYXJkMSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdyeDUyJyxcclxuICAgICAgICBsaW5rOiAnYW1kL2Rhc2hib2FyZDInXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG4gIGNvbnN0IGV0YzogVG9kb1Byb3BzID0ge1xyXG4gICAgdGl0bGU6ICdEQVNIQk9BUkQnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdtYW51YWwnLFxyXG4gICAgICAgIGxpbms6ICd0b3RhbC9tYW51YWwnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAncDEwMCArIHJ4NTEgKyByeDUyJyxcclxuICAgICAgICBsaW5rOiAndG90YWwvZGFzaGJvYXJkJ1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfTtcclxuICBjb25zdCBkb2M6IFRvZG9Qcm9wcyA9IHtcclxuICAgIHRpdGxlOiAnRG9jdW1lbnQnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdSRUFETUUnLFxyXG4gICAgICAgIGxpbms6ICdkb2MvcmVhZG1lJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ2RldiB0ZXN0JyxcclxuICAgICAgICBsaW5rOiAnZG9jL3Rlc3QnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG5cclxuICAvLyBjb25zdCBjaGFuZ2VsYW5ndWFnZVRvS28gPSAoKSA9PiBpMThuLmNoYW5nZUxhbmd1YWdlKCdrbycpO1xyXG4gIC8vIGNvbnN0IGNoYW5nZWxhbmd1YWdlVG9FbiA9ICgpID0+IGkxOG4uY2hhbmdlTGFuZ3VhZ2UoJ2VuJyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICB7LyogPGJ1dHRvbiB0eXBlPXsnYnV0dG9uJ30gb25DbGljaz17Y2hhbmdlbGFuZ3VhZ2VUb0tvfT5cclxuICAgICAgICDtlZzqta3slrRcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT17J2J1dHRvbid9IG9uQ2xpY2s9e2NoYW5nZWxhbmd1YWdlVG9Fbn0+XHJcbiAgICAgICAgRW5nbGlzaFxyXG4gICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDAnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBmb250V2VpZ2h0OiA2MDAgfX0+QWRtaW4gUGFnZTwvaDE+XHJcbiAgICAgIDxuYXY+XHJcbiAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PXttb3JlaH0gb25DbGljaz17KCkgPT4gc2V0TW9yZWgoKHByZXYpID0+ICFwcmV2KX0+XHJcbiAgICAgICAgICB7bW9yZWggPyAnTW9yZWggPiBVc2VyJyA6ICdVc2VyID4gTW9yZWgnfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIHshbW9yZWggJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG1vZGUgPT09IENsdXN0ZXJNb2RlLm1vZG5uID8gJyNiMDY2MDEnIDogJycsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbW9kZSA9PT0gQ2x1c3Rlck1vZGUubW9kbm4gPyAnI2ZmZDM2YicgOiAnJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kZShDbHVzdGVyTW9kZS5tb2Rubil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBtb2RublxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgey8qIDxCdXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBtb2RlID09PSBDbHVzdGVyTW9kZS5oZXggPyAnI2IwNjYwMScgOiAnJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBtb2RlID09PSBDbHVzdGVyTW9kZS5oZXggPyAnI2ZmZDM2YicgOiAnJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kZShDbHVzdGVyTW9kZS5oZXgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgaGV4XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbW9kZSA9PT0gQ2x1c3Rlck1vZGUuY2hhcnQgPyAnI2IwNjYwMScgOiAnJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBtb2RlID09PSBDbHVzdGVyTW9kZS5jaGFydCA/ICcjZmZkMzZiJyA6ICcnXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RlKENsdXN0ZXJNb2RlLmNoYXJ0KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIGNoYXJ0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgey8qIHshbW9yZWggJiYgbW9kZSA9PT0gQ2x1c3Rlck1vZGUuY2hhcnQgJiYgPENsdXN0ZXJDaGFydCAvPn1cclxuICAgICAgeyFtb3JlaCAmJiBtb2RlID09PSBDbHVzdGVyTW9kZS5oZXggJiYgPENsdXN0ZXJIZXggLz59ICovfVxyXG4gICAgICB7IW1vcmVoICYmIG1vZGUgPT09IENsdXN0ZXJNb2RlLm1vZG5uICYmIDxDbHVzdGVyTW9kbm4gLz59XHJcblxyXG4gICAgICB7bW9yZWggJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8VG9kbyB7Li4uZXRjfSAvPlxyXG4gICAgICAgICAgPFRvZG8gey4uLmRvY30gLz5cclxuICAgICAgICAgIDxUb2RvIHsuLi5udmlkaWF9IC8+XHJcbiAgICAgICAgICA8VG9kbyB7Li4uYW1kfSAvPlxyXG4gICAgICAgICAgPFRvZG8gey4uLmt1YmVybmV0ZXN9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9