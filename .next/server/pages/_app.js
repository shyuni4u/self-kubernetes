module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./modules/count.tsx":
/*!***************************!*\
  !*** ./modules/count.tsx ***!
  \***************************/
/*! exports provided: COUNT_PLUS, COUNT_MINUS, COUNT_SET, initialState, countPlusAction, countMinusAction, setCountAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNT_PLUS", function() { return COUNT_PLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNT_MINUS", function() { return COUNT_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNT_SET", function() { return COUNT_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countPlusAction", function() { return countPlusAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countMinusAction", function() { return countMinusAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCountAction", function() { return setCountAction; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const COUNT_PLUS = 'COUNT_PLUS';
const COUNT_MINUS = 'COUNT_MINUS';
const COUNT_SET = 'COUNT_SET';
const initialState = {
  count: 0
};
const countPlusAction = () => ({
  type: COUNT_PLUS
});
const countMinusAction = () => ({
  type: COUNT_MINUS
});
const setCountAction = value => ({
  type: COUNT_SET,
  count: value
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_PLUS:
      return _objectSpread(_objectSpread({}, state), {}, {
        count: state.count + 1
      });

    case COUNT_MINUS:
      return _objectSpread(_objectSpread({}, state), {}, {
        count: state.count - 1
      });

    case COUNT_SET:
      const {
        count
      } = action;
      return _objectSpread(_objectSpread({}, state), {}, {
        count: count
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./modules/dashboardInfo.tsx":
/*!***********************************!*\
  !*** ./modules/dashboardInfo.tsx ***!
  \***********************************/
/*! exports provided: DASHBOARD_INFO_SET, initialState, setDashboardIfno, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASHBOARD_INFO_SET", function() { return DASHBOARD_INFO_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDashboardIfno", function() { return setDashboardIfno; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DASHBOARD_INFO_SET = 'DASHBOARD-INFO/SET';
const initialState = {
  nvidia: {
    realtime: ['gpu_temp', 'gpu_temp_max_threshold', 'gpu_temp_slow_threshold', 'gpu_util', 'memory_util', 'encoder_util', 'decoder_util'],
    ignore: ['ecc_errors', 'ibmnpu', 'gpu_virtualization_mode', 'gpu_operation_mode', 'inforom_version', 'board_id', 'performance_state', 'fan_speed', 'accounted_processes', 'driver_model', 'accounting_mode_buffer_size', 'accounting_mode', 'display_active', 'display_mode', 'product_brand', 'multigpu_board', 'minor_number', 'gpu_part_number', 'compute_mode', 'ecc_mode', 'clock_policy', 'max_customer_boost_clocks', 'clocks_throttle_reasons', 'bar1_memory_usage', 'encoder_stats', 'fbc_stats', 'retired_pages', 'power_management', 'power_state', 'default_power_limit', 'enforced_power_limit', 'min_power_limit', 'max_power_limit', 'video_clock', 'graphics_clock', 'applications_clocks', 'default_applications_clocks', 'max_clocks', 'supported_clocks']
  },
  amd: {
    realtime: ['Average Graphics Package Power (W)', 'Temperature (Sensor edge) (C)', 'Temperature (Sensor junction) (C)', 'Temperature (Sensor mem) (C)', 'For Manual'],
    ignore: ['RLC SRLG firmware version', 'RLC SRLS firmware version', 'SDMA firmware version', 'SDMA2 firmware version', 'SMC firmware version', 'SOS firmware version', 'RLC SRLC firmware version', 'RLC firmware version', 'PFP firmware version', 'MEC2 firmware version', 'MEC firmware version', 'ME firmware version', 'MC firmware version', 'DMCU firmware version', 'CE firmware version', 'ASD firmware version', 'TA RAS firmware version', 'TA XGMI firmware version', 'UVD firmware version', 'VCE firmware version', 'VCN firmware version']
  }
};
const setDashboardIfno = obj => ({
  type: DASHBOARD_INFO_SET,
  nvidia: {
    realtime: obj.nvidia.realtime,
    ignore: obj.nvidia.ignore
  },
  amd: {
    realtime: obj.amd.realtime,
    ignore: obj.amd.ignore
  }
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD_INFO_SET:
      return _objectSpread(_objectSpread({}, state), {}, {
        nvidia: {
          realtime: action.nvidia.realtime,
          ignore: action.nvidia.ignore
        },
        amd: {
          realtime: action.amd.realtime,
          ignore: action.amd.ignore
        }
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./modules/index.tsx":
/*!***************************!*\
  !*** ./modules/index.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./count */ "./modules/count.tsx");
/* harmony import */ var _dashboardInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboardInfo */ "./modules/dashboardInfo.tsx");



const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  countModule: _count__WEBPACK_IMPORTED_MODULE_1__["default"],
  dashboardInfoModule: _dashboardInfo__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: RootApp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootApp", function() { return RootApp; });
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules */ "./modules/index.tsx");
var _jsxFileName = "C:\\Users\\shyuniz\\Desktop\\moreh\\self-kubernetes\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const styles = {
  layout: {
    display: 'flex',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    flexDirection: 'column',
    position: 'relative'
  },
  main: {
    flex: 1
  },
  footer: {
    width: '100%',
    height: '24px',
    textAlign: 'center',
    lineHeight: '24px',
    color: '#fff',
    backgroundColor: '#000',
    // position: 'absolute',
    // bottom: '0',
    fontSize: '12px'
  }
};

const configureStore = () => {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(_modules__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__["createWrapper"])(configureStore, {
  debug: false
});
class RootApp extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
  render() {
    const {
      Component,
      other
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, "Moreh - Dashboard"), __jsx("link", {
      rel: "shortcut icon",
      href: "/favicon.ico",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    })), __jsx("div", {
      style: styles.layout,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }, __jsx("main", {
      style: styles.main,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }
    }, __jsx(Component, _extends({}, other, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    }))), __jsx("footer", {
      style: styles.footer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, "Copyright 2020 Moreh Authors.")));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (wrapper.withRedux(RootApp));

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL21vZHVsZXMvY291bnQudHN4Iiwid2VicGFjazovLy8uL21vZHVsZXMvZGFzaGJvYXJkSW5mby50c3giLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiXSwibmFtZXMiOlsiQ09VTlRfUExVUyIsIkNPVU5UX01JTlVTIiwiQ09VTlRfU0VUIiwiaW5pdGlhbFN0YXRlIiwiY291bnQiLCJjb3VudFBsdXNBY3Rpb24iLCJ0eXBlIiwiY291bnRNaW51c0FjdGlvbiIsInNldENvdW50QWN0aW9uIiwidmFsdWUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJEQVNIQk9BUkRfSU5GT19TRVQiLCJudmlkaWEiLCJyZWFsdGltZSIsImlnbm9yZSIsImFtZCIsInNldERhc2hib2FyZElmbm8iLCJvYmoiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImNvdW50TW9kdWxlIiwiZGFzaGJvYXJkSW5mb01vZHVsZSIsInBhZ2VQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJfX05fU1NHIiwidXJsIiwiY3JlYXRlVXJsIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJjb25zb2xlIiwid2FyblVybCIsInAiLCJiYWNrIiwicm91dGVyIiwicHVzaCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwic3R5bGVzIiwibGF5b3V0IiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsInBvc2l0aW9uIiwibWFpbiIsImZsZXgiLCJmb290ZXIiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250U2l6ZSIsImNvbmZpZ3VyZVN0b3JlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXJNb2R1bGUiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwiUm9vdEFwcCIsIm90aGVyIiwicHJvcHMiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSwrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTyxNQUFNQSxVQUFVLEdBQUcsWUFBbkI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsV0FBbEI7QUFNQSxNQUFNQyxZQUF3QixHQUFHO0FBQ3RDQyxPQUFLLEVBQUU7QUFEK0IsQ0FBakM7QUFJQSxNQUFNQyxlQUFlLEdBQUcsT0FBTztBQUNwQ0MsTUFBSSxFQUFFTjtBQUQ4QixDQUFQLENBQXhCO0FBSUEsTUFBTU8sZ0JBQWdCLEdBQUcsT0FBTztBQUNyQ0QsTUFBSSxFQUFFTDtBQUQrQixDQUFQLENBQXpCO0FBSUEsTUFBTU8sY0FBYyxHQUFJQyxLQUFELEtBQW9CO0FBQ2hESCxNQUFJLEVBQUVKLFNBRDBDO0FBRWhERSxPQUFLLEVBQUVLO0FBRnlDLENBQXBCLENBQXZCOztBQVNQLE1BQU1DLE9BQU8sR0FBRyxDQUFDQyxLQUFpQixHQUFHUixZQUFyQixFQUFtQ1MsTUFBbkMsS0FBK0U7QUFDN0YsVUFBUUEsTUFBTSxDQUFDTixJQUFmO0FBQ0UsU0FBS04sVUFBTDtBQUNFLDZDQUNLVyxLQURMO0FBRUVQLGFBQUssRUFBRU8sS0FBSyxDQUFDUCxLQUFOLEdBQWM7QUFGdkI7O0FBSUYsU0FBS0gsV0FBTDtBQUNFLDZDQUNLVSxLQURMO0FBRUVQLGFBQUssRUFBRU8sS0FBSyxDQUFDUCxLQUFOLEdBQWM7QUFGdkI7O0FBSUYsU0FBS0YsU0FBTDtBQUNFLFlBQU07QUFBRUU7QUFBRixVQUFZUSxNQUFsQjtBQUNBLDZDQUNLRCxLQURMO0FBRUVQLGFBQUssRUFBRUE7QUFGVDs7QUFJRjtBQUNFLGFBQU9PLEtBQVA7QUFsQko7QUFvQkQsQ0FyQkQ7O0FBdUJlRCxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERPLE1BQU1HLGtCQUFrQixHQUFHLG9CQUEzQjtBQWFBLE1BQU1WLFlBQWdDLEdBQUc7QUFDOUNXLFFBQU0sRUFBRTtBQUNOQyxZQUFRLEVBQUUsQ0FDUixVQURRLEVBRVIsd0JBRlEsRUFHUix5QkFIUSxFQUlSLFVBSlEsRUFLUixhQUxRLEVBTVIsY0FOUSxFQU9SLGNBUFEsQ0FESjtBQVVOQyxVQUFNLEVBQUUsQ0FDTixZQURNLEVBRU4sUUFGTSxFQUdOLHlCQUhNLEVBSU4sb0JBSk0sRUFLTixpQkFMTSxFQU1OLFVBTk0sRUFPTixtQkFQTSxFQVFOLFdBUk0sRUFTTixxQkFUTSxFQVVOLGNBVk0sRUFXTiw2QkFYTSxFQVlOLGlCQVpNLEVBYU4sZ0JBYk0sRUFjTixjQWRNLEVBZU4sZUFmTSxFQWdCTixnQkFoQk0sRUFpQk4sY0FqQk0sRUFrQk4saUJBbEJNLEVBbUJOLGNBbkJNLEVBb0JOLFVBcEJNLEVBcUJOLGNBckJNLEVBc0JOLDJCQXRCTSxFQXVCTix5QkF2Qk0sRUF3Qk4sbUJBeEJNLEVBeUJOLGVBekJNLEVBMEJOLFdBMUJNLEVBMkJOLGVBM0JNLEVBNEJOLGtCQTVCTSxFQTZCTixhQTdCTSxFQThCTixxQkE5Qk0sRUErQk4sc0JBL0JNLEVBZ0NOLGlCQWhDTSxFQWlDTixpQkFqQ00sRUFrQ04sYUFsQ00sRUFtQ04sZ0JBbkNNLEVBb0NOLHFCQXBDTSxFQXFDTiw2QkFyQ00sRUFzQ04sWUF0Q00sRUF1Q04sa0JBdkNNO0FBVkYsR0FEc0M7QUFxRDlDQyxLQUFHLEVBQUU7QUFDSEYsWUFBUSxFQUFFLENBQ1Isb0NBRFEsRUFFUiwrQkFGUSxFQUdSLG1DQUhRLEVBSVIsOEJBSlEsRUFLUixZQUxRLENBRFA7QUFRSEMsVUFBTSxFQUFFLENBQ04sMkJBRE0sRUFFTiwyQkFGTSxFQUdOLHVCQUhNLEVBSU4sd0JBSk0sRUFLTixzQkFMTSxFQU1OLHNCQU5NLEVBT04sMkJBUE0sRUFRTixzQkFSTSxFQVNOLHNCQVRNLEVBVU4sdUJBVk0sRUFXTixzQkFYTSxFQVlOLHFCQVpNLEVBYU4scUJBYk0sRUFjTix1QkFkTSxFQWVOLHFCQWZNLEVBZ0JOLHNCQWhCTSxFQWlCTix5QkFqQk0sRUFrQk4sMEJBbEJNLEVBbUJOLHNCQW5CTSxFQW9CTixzQkFwQk0sRUFxQk4sc0JBckJNO0FBUkw7QUFyRHlDLENBQXpDO0FBdUZBLE1BQU1FLGdCQUFnQixHQUFJQyxHQUFELEtBQThCO0FBQzVEYixNQUFJLEVBQUVPLGtCQURzRDtBQUU1REMsUUFBTSxFQUFFO0FBQ05DLFlBQVEsRUFBRUksR0FBRyxDQUFDTCxNQUFKLENBQVdDLFFBRGY7QUFFTkMsVUFBTSxFQUFFRyxHQUFHLENBQUNMLE1BQUosQ0FBV0U7QUFGYixHQUZvRDtBQU01REMsS0FBRyxFQUFFO0FBQ0hGLFlBQVEsRUFBRUksR0FBRyxDQUFDRixHQUFKLENBQVFGLFFBRGY7QUFFSEMsVUFBTSxFQUFFRyxHQUFHLENBQUNGLEdBQUosQ0FBUUQ7QUFGYjtBQU51RCxDQUE5QixDQUF6Qjs7QUFnQlAsTUFBTU4sT0FBTyxHQUFHLENBQUNDLEtBQXlCLEdBQUdSLFlBQTdCLEVBQTJDUyxNQUEzQyxLQUErRjtBQUM3RyxVQUFRQSxNQUFNLENBQUNOLElBQWY7QUFDRSxTQUFLTyxrQkFBTDtBQUNFLDZDQUNLRixLQURMO0FBRUVHLGNBQU0sRUFBRTtBQUNOQyxrQkFBUSxFQUFFSCxNQUFNLENBQUNFLE1BQVAsQ0FBY0MsUUFEbEI7QUFFTkMsZ0JBQU0sRUFBRUosTUFBTSxDQUFDRSxNQUFQLENBQWNFO0FBRmhCLFNBRlY7QUFNRUMsV0FBRyxFQUFFO0FBQ0hGLGtCQUFRLEVBQUVILE1BQU0sQ0FBQ0ssR0FBUCxDQUFXRixRQURsQjtBQUVIQyxnQkFBTSxFQUFFSixNQUFNLENBQUNLLEdBQVAsQ0FBV0Q7QUFGaEI7QUFOUDs7QUFXRjtBQUNFLGFBQU9MLEtBQVA7QUFkSjtBQWdCRCxDQWpCRDs7QUFtQmVELHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3ZJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTVUsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2xDQyw2REFEa0M7QUFFbENDLDZFQUFtQkE7QUFGZSxDQUFELENBQW5DO0FBT2VILDBFQUFmLEU7Ozs7Ozs7Ozs7O0FDWEEsaUJBQWlCLG1CQUFPLENBQUMsaUVBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTVDOztBQUNBOzs7O0FBa0JBOzs7OztBQUlBLGtDQUFrQztBQUFBO0FBQWxDO0FBQWtDLENBQWxDLEVBR3lDO0FBQ3ZDLFFBQU1JLFNBQVMsR0FBRyxNQUFNLDJDQUF4QixHQUF3QixDQUF4QjtBQUNBLFNBQU87QUFBUDtBQUFPLEdBQVA7QUFHYTs7QUFBQSxrQkFBMkNDLGVBQU1DLFNBQWpELENBR2I7QUFJQTtBQUNBO0FBQ0E7QUFDQUMsbUJBQWlCLG9CQUE0QztBQUMzRDtBQUdGQzs7QUFBQUEsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFxRCxLQUEzRDtBQUdBLHdCQUNFLHFFQUdJO0FBQ0E7QUFDSSxNQUFFQyxPQUFPLElBQVQsV0FBd0I7QUFBRUMsU0FBRyxFQUFFQyxTQUFTLENBQXhDLE1BQXdDO0FBQWhCLEtBQXhCLEdBTlYsRUFDRSxFQURGO0FBZkY7O0FBQUE7OztBQUhtQkMsRyxDQUlaQyxtQkFKWUQsR0FJVUUsa0JBSlZGO0FBQUFBLEcsQ0FLWkcsZUFMWUgsR0FLTUUsa0JBTE5GO0FBK0JyQjtBQUNBOztBQUVBLFVBQTJDO0FBQ3pDSSxlQUFhLEdBQUcscUJBQVMsTUFBTTtBQUM3QkMsV0FBTyxDQUFQQTtBQURGRCxHQUFnQixDQUFoQkE7QUFNQUUsU0FBTyxHQUFHLHFCQUFTLE1BQU07QUFDdkJELFdBQU8sQ0FBUEE7QUFERkMsR0FBVSxDQUFWQTtBQU9GLEMsQ0FBQTs7O0FBQ08sc0JBQTJCO0FBQ2hDLFlBQTJDRixhQUFhO0FBQ3hELFNBQU9HLENBQUMsQ0FBUjtBQUdLOztBQUFBLDJCQUFtQztBQUN4QztBQUNBLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFOO0FBQ0EsU0FBTztBQUNMLGdCQUFZO0FBQ1YsZ0JBQTJDRCxPQUFPO0FBQ2xEO0FBSEc7O0FBS0wsbUJBQWU7QUFDYixnQkFBMkNBLE9BQU87QUFDbEQ7QUFQRzs7QUFTTCxpQkFBYTtBQUNYLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVhHOztBQWFMRSxRQUFJLEVBQUUsTUFBTTtBQUNWLGdCQUEyQ0YsT0FBTztBQUNsREcsWUFBTSxDQUFOQTtBQWZHO0FBaUJMQyxRQUFJLEVBQUUsYUFBOEI7QUFDbEMsZ0JBQTJDSixPQUFPO0FBQ2xELGFBQU9HLE1BQU0sQ0FBTkEsVUFBUCxFQUFPQSxDQUFQO0FBbkJHO0FBcUJMRSxVQUFNLEVBQUUsY0FBK0I7QUFDckMsZ0JBQTJDTCxPQUFPO0FBQ2xELFlBQU1NLFNBQVMsR0FBR0MsRUFBRSxVQUFwQjtBQUNBLFlBQU1DLE9BQU8sR0FBR0QsRUFBRSxJQUFsQjtBQUVBLGFBQU9KLE1BQU0sQ0FBTkEsZ0JBQVAsT0FBT0EsQ0FBUDtBQTFCRztBQTRCTE0sV0FBTyxFQUFFLGFBQThCO0FBQ3JDLGdCQUEyQ1QsT0FBTztBQUNsRCxhQUFPRyxNQUFNLENBQU5BLGFBQVAsRUFBT0EsQ0FBUDtBQTlCRztBQWdDTE8sYUFBUyxFQUFFLGNBQStCO0FBQ3hDLGdCQUEyQ1YsT0FBTztBQUNsRCxZQUFNVyxZQUFZLEdBQUdKLEVBQUUsVUFBdkI7QUFDQSxZQUFNSyxVQUFVLEdBQUdMLEVBQUUsSUFBckI7QUFFQSxhQUFPSixNQUFNLENBQU5BLHNCQUFQLFVBQU9BLENBQVA7QUFyQ0o7QUFBTyxHQUFQO0FBd0NELEM7Ozs7Ozs7Ozs7O0FDaElEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLE1BQU1VLE1BQU0sR0FBRztBQUNiQyxRQUFNLEVBQUU7QUFDTkMsV0FBTyxFQUFFLE1BREg7QUFFTkMsU0FBSyxFQUFFLE1BRkQ7QUFHTkMsVUFBTSxFQUFFLE1BSEY7QUFJTkMsYUFBUyxFQUFFLE9BSkw7QUFLTkMsaUJBQWEsRUFBRSxRQUxUO0FBTU5DLFlBQVEsRUFBRTtBQU5KLEdBREs7QUFTYkMsTUFBSSxFQUFFO0FBQ0pDLFFBQUksRUFBRTtBQURGLEdBVE87QUFZYkMsUUFBTSxFQUFFO0FBQ05QLFNBQUssRUFBRSxNQUREO0FBRU5DLFVBQU0sRUFBRSxNQUZGO0FBR05PLGFBQVMsRUFBRSxRQUhMO0FBSU5DLGNBQVUsRUFBRSxNQUpOO0FBS05DLFNBQUssRUFBRSxNQUxEO0FBTU5DLG1CQUFlLEVBQUUsTUFOWDtBQU9OO0FBQ0E7QUFDQUMsWUFBUSxFQUFFO0FBVEo7QUFaSyxDQUFmOztBQXlCQSxNQUFNQyxjQUFjLEdBQUcsTUFBTTtBQUMzQixRQUFNQyxLQUFLLEdBQUdDLHlEQUFXLENBQUNDLGdEQUFELENBQXpCO0FBQ0EsU0FBT0YsS0FBUDtBQUNELENBSEQ7O0FBS0EsTUFBTUcsT0FBTyxHQUFHQyx3RUFBYSxDQUFDTCxjQUFELEVBQWlCO0FBQzVDTSxPQUFLO0FBRHVDLENBQWpCLENBQTdCO0FBSU8sTUFBTUMsT0FBTixTQUFzQjFDLCtDQUF0QixDQUEwQjtBQUMvQkosUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFRixlQUFGO0FBQWFpRDtBQUFiLFFBQXVCLEtBQUtDLEtBQWxDO0FBQ0EsV0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLEVBRUU7QUFBTSxTQUFHLEVBQUMsZUFBVjtBQUEwQixVQUFJLEVBQUMsY0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBREYsRUFLRTtBQUFLLFdBQUssRUFBRXpCLE1BQU0sQ0FBQ0MsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sV0FBSyxFQUFFRCxNQUFNLENBQUNRLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLFNBQUQsZUFBZWdCLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGLENBREYsRUFJRTtBQUFRLFdBQUssRUFBRXhCLE1BQU0sQ0FBQ1UsTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FKRixDQUxGLENBREY7QUFjRDs7QUFqQjhCO0FBb0JsQlUsc0VBQU8sQ0FBQ00sU0FBUixDQUFrQkgsT0FBbEIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJleHBvcnQgY29uc3QgQ09VTlRfUExVUyA9ICdDT1VOVF9QTFVTJztcclxuZXhwb3J0IGNvbnN0IENPVU5UX01JTlVTID0gJ0NPVU5UX01JTlVTJztcclxuZXhwb3J0IGNvbnN0IENPVU5UX1NFVCA9ICdDT1VOVF9TRVQnO1xyXG5cclxuZXhwb3J0IHR5cGUgY291bnRTdGF0ZSA9IHtcclxuICBjb3VudDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IGNvdW50U3RhdGUgPSB7XHJcbiAgY291bnQ6IDBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb3VudFBsdXNBY3Rpb24gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IENPVU5UX1BMVVNcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgY291bnRNaW51c0FjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogQ09VTlRfTUlOVVNcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDb3VudEFjdGlvbiA9ICh2YWx1ZTogbnVtYmVyKSA9PiAoe1xyXG4gIHR5cGU6IENPVU5UX1NFVCxcclxuICBjb3VudDogdmFsdWVcclxufSlcclxuXHJcbnR5cGUgYWN0aW9ucyA9IHtcclxuICB0eXBlOiBzdHJpbmdcclxufSAmIGNvdW50U3RhdGVcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IGNvdW50U3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogYWN0aW9ucyk6IGNvdW50U3RhdGUgfCB1bmRlZmluZWQgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQ09VTlRfUExVUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb3VudDogc3RhdGUuY291bnQgKyAxXHJcbiAgICAgIH1cclxuICAgIGNhc2UgQ09VTlRfTUlOVVM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY291bnQ6IHN0YXRlLmNvdW50IC0gMVxyXG4gICAgICB9XHJcbiAgICBjYXNlIENPVU5UX1NFVDpcclxuICAgICAgY29uc3QgeyBjb3VudCB9ID0gYWN0aW9uO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvdW50OiBjb3VudFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJleHBvcnQgY29uc3QgREFTSEJPQVJEX0lORk9fU0VUID0gJ0RBU0hCT0FSRC1JTkZPL1NFVCc7XHJcblxyXG5leHBvcnQgdHlwZSBkYXNoYm9hcmRJbmZvU3RhdGUgPSB7XHJcbiAgbnZpZGlhOiB7XHJcbiAgICByZWFsdGltZTogQXJyYXk8c3RyaW5nPjtcclxuICAgIGlnbm9yZTogQXJyYXk8c3RyaW5nPjtcclxuICB9O1xyXG4gIGFtZDoge1xyXG4gICAgcmVhbHRpbWU6IEFycmF5PHN0cmluZz47XHJcbiAgICBpZ25vcmU6IEFycmF5PHN0cmluZz47XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IGRhc2hib2FyZEluZm9TdGF0ZSA9IHtcclxuICBudmlkaWE6IHtcclxuICAgIHJlYWx0aW1lOiBbXHJcbiAgICAgICdncHVfdGVtcCcsXHJcbiAgICAgICdncHVfdGVtcF9tYXhfdGhyZXNob2xkJyxcclxuICAgICAgJ2dwdV90ZW1wX3Nsb3dfdGhyZXNob2xkJyxcclxuICAgICAgJ2dwdV91dGlsJyxcclxuICAgICAgJ21lbW9yeV91dGlsJyxcclxuICAgICAgJ2VuY29kZXJfdXRpbCcsXHJcbiAgICAgICdkZWNvZGVyX3V0aWwnXHJcbiAgICBdLFxyXG4gICAgaWdub3JlOiBbXHJcbiAgICAgICdlY2NfZXJyb3JzJyxcclxuICAgICAgJ2libW5wdScsXHJcbiAgICAgICdncHVfdmlydHVhbGl6YXRpb25fbW9kZScsXHJcbiAgICAgICdncHVfb3BlcmF0aW9uX21vZGUnLFxyXG4gICAgICAnaW5mb3JvbV92ZXJzaW9uJyxcclxuICAgICAgJ2JvYXJkX2lkJyxcclxuICAgICAgJ3BlcmZvcm1hbmNlX3N0YXRlJyxcclxuICAgICAgJ2Zhbl9zcGVlZCcsXHJcbiAgICAgICdhY2NvdW50ZWRfcHJvY2Vzc2VzJyxcclxuICAgICAgJ2RyaXZlcl9tb2RlbCcsXHJcbiAgICAgICdhY2NvdW50aW5nX21vZGVfYnVmZmVyX3NpemUnLFxyXG4gICAgICAnYWNjb3VudGluZ19tb2RlJyxcclxuICAgICAgJ2Rpc3BsYXlfYWN0aXZlJyxcclxuICAgICAgJ2Rpc3BsYXlfbW9kZScsXHJcbiAgICAgICdwcm9kdWN0X2JyYW5kJyxcclxuICAgICAgJ211bHRpZ3B1X2JvYXJkJyxcclxuICAgICAgJ21pbm9yX251bWJlcicsXHJcbiAgICAgICdncHVfcGFydF9udW1iZXInLFxyXG4gICAgICAnY29tcHV0ZV9tb2RlJyxcclxuICAgICAgJ2VjY19tb2RlJyxcclxuICAgICAgJ2Nsb2NrX3BvbGljeScsXHJcbiAgICAgICdtYXhfY3VzdG9tZXJfYm9vc3RfY2xvY2tzJyxcclxuICAgICAgJ2Nsb2Nrc190aHJvdHRsZV9yZWFzb25zJyxcclxuICAgICAgJ2JhcjFfbWVtb3J5X3VzYWdlJyxcclxuICAgICAgJ2VuY29kZXJfc3RhdHMnLFxyXG4gICAgICAnZmJjX3N0YXRzJyxcclxuICAgICAgJ3JldGlyZWRfcGFnZXMnLFxyXG4gICAgICAncG93ZXJfbWFuYWdlbWVudCcsXHJcbiAgICAgICdwb3dlcl9zdGF0ZScsXHJcbiAgICAgICdkZWZhdWx0X3Bvd2VyX2xpbWl0JyxcclxuICAgICAgJ2VuZm9yY2VkX3Bvd2VyX2xpbWl0JyxcclxuICAgICAgJ21pbl9wb3dlcl9saW1pdCcsXHJcbiAgICAgICdtYXhfcG93ZXJfbGltaXQnLFxyXG4gICAgICAndmlkZW9fY2xvY2snLFxyXG4gICAgICAnZ3JhcGhpY3NfY2xvY2snLFxyXG4gICAgICAnYXBwbGljYXRpb25zX2Nsb2NrcycsXHJcbiAgICAgICdkZWZhdWx0X2FwcGxpY2F0aW9uc19jbG9ja3MnLFxyXG4gICAgICAnbWF4X2Nsb2NrcycsXHJcbiAgICAgICdzdXBwb3J0ZWRfY2xvY2tzJ1xyXG4gICAgXVxyXG4gIH0sXHJcbiAgYW1kOiB7XHJcbiAgICByZWFsdGltZTogW1xyXG4gICAgICAnQXZlcmFnZSBHcmFwaGljcyBQYWNrYWdlIFBvd2VyIChXKScsXHJcbiAgICAgICdUZW1wZXJhdHVyZSAoU2Vuc29yIGVkZ2UpIChDKScsXHJcbiAgICAgICdUZW1wZXJhdHVyZSAoU2Vuc29yIGp1bmN0aW9uKSAoQyknLFxyXG4gICAgICAnVGVtcGVyYXR1cmUgKFNlbnNvciBtZW0pIChDKScsXHJcbiAgICAgICdGb3IgTWFudWFsJ1xyXG4gICAgXSxcclxuICAgIGlnbm9yZTogW1xyXG4gICAgICAnUkxDIFNSTEcgZmlybXdhcmUgdmVyc2lvbicsXHJcbiAgICAgICdSTEMgU1JMUyBmaXJtd2FyZSB2ZXJzaW9uJyxcclxuICAgICAgJ1NETUEgZmlybXdhcmUgdmVyc2lvbicsXHJcbiAgICAgICdTRE1BMiBmaXJtd2FyZSB2ZXJzaW9uJyxcclxuICAgICAgJ1NNQyBmaXJtd2FyZSB2ZXJzaW9uJyxcclxuICAgICAgJ1NPUyBmaXJtd2FyZSB2ZXJzaW9uJyxcclxuICAgICAgJ1JMQyBTUkxDIGZpcm13YXJlIHZlcnNpb24nLFxyXG4gICAgICAnUkxDIGZpcm13YXJlIHZlcnNpb24nLFxyXG4gICAgICAnUEZQIGZpcm13YXJlIHZlcnNpb24nLFxyXG4gICAgICAnTUVDMiBmaXJtd2FyZSB2ZXJzaW9uJyxcclxuICAgICAgJ01FQyBmaXJtd2FyZSB2ZXJzaW9uJyxcclxuICAgICAgJ01FIGZpcm13YXJlIHZlcnNpb24nLFxyXG4gICAgICAnTUMgZmlybXdhcmUgdmVyc2lvbicsXHJcbiAgICAgICdETUNVIGZpcm13YXJlIHZlcnNpb24nLFxyXG4gICAgICAnQ0UgZmlybXdhcmUgdmVyc2lvbicsXHJcbiAgICAgICdBU0QgZmlybXdhcmUgdmVyc2lvbicsXHJcbiAgICAgICdUQSBSQVMgZmlybXdhcmUgdmVyc2lvbicsXHJcbiAgICAgICdUQSBYR01JIGZpcm13YXJlIHZlcnNpb24nLFxyXG4gICAgICAnVVZEIGZpcm13YXJlIHZlcnNpb24nLFxyXG4gICAgICAnVkNFIGZpcm13YXJlIHZlcnNpb24nLFxyXG4gICAgICAnVkNOIGZpcm13YXJlIHZlcnNpb24nXHJcbiAgICBdXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldERhc2hib2FyZElmbm8gPSAob2JqOiBkYXNoYm9hcmRJbmZvU3RhdGUpID0+ICh7XHJcbiAgdHlwZTogREFTSEJPQVJEX0lORk9fU0VULFxyXG4gIG52aWRpYToge1xyXG4gICAgcmVhbHRpbWU6IG9iai5udmlkaWEucmVhbHRpbWUsXHJcbiAgICBpZ25vcmU6IG9iai5udmlkaWEuaWdub3JlXHJcbiAgfSxcclxuICBhbWQ6IHtcclxuICAgIHJlYWx0aW1lOiBvYmouYW1kLnJlYWx0aW1lLFxyXG4gICAgaWdub3JlOiBvYmouYW1kLmlnbm9yZVxyXG4gIH1cclxufSk7XHJcblxyXG50eXBlIGFjdGlvbnMgPSB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG59ICYgZGFzaGJvYXJkSW5mb1N0YXRlO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZTogZGFzaGJvYXJkSW5mb1N0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFjdGlvbnMpOiBkYXNoYm9hcmRJbmZvU3RhdGUgfCB1bmRlZmluZWQgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgREFTSEJPQVJEX0lORk9fU0VUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG52aWRpYToge1xyXG4gICAgICAgICAgcmVhbHRpbWU6IGFjdGlvbi5udmlkaWEucmVhbHRpbWUsXHJcbiAgICAgICAgICBpZ25vcmU6IGFjdGlvbi5udmlkaWEuaWdub3JlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbWQ6IHtcclxuICAgICAgICAgIHJlYWx0aW1lOiBhY3Rpb24uYW1kLnJlYWx0aW1lLFxyXG4gICAgICAgICAgaWdub3JlOiBhY3Rpb24uYW1kLmlnbm9yZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBjb3VudE1vZHVsZSBmcm9tICcuL2NvdW50JztcclxuaW1wb3J0IGRhc2hib2FyZEluZm9Nb2R1bGUgZnJvbSAnLi9kYXNoYm9hcmRJbmZvJztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBjb3VudE1vZHVsZSxcclxuICBkYXNoYm9hcmRJbmZvTW9kdWxlXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbiAgTmV4dFdlYlZpdGFsc01ldHJpYyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHsgTmV4dFdlYlZpdGFsc01ldHJpYyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgcmVkdWNlck1vZHVsZSBmcm9tICcuLi9tb2R1bGVzJztcclxuXHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgbGF5b3V0OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXHJcbiAgfSxcclxuICBtYWluOiB7XHJcbiAgICBmbGV4OiAxXHJcbiAgfSxcclxuICBmb290ZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcyNHB4JyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMCcsXHJcbiAgICAvLyBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIC8vIGJvdHRvbTogJzAnLFxyXG4gICAgZm9udFNpemU6ICcxMnB4J1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlck1vZHVsZSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCwnXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJvb3RBcHAgZXh0ZW5kcyBBcHAge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBvdGhlciB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+TW9yZWggLSBEYXNoYm9hcmQ8L3RpdGxlPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubGF5b3V0fT5cclxuICAgICAgICAgIDxtYWluIHN0eWxlPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLm90aGVyfSAvPlxyXG4gICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgPGZvb3RlciBzdHlsZT17c3R5bGVzLmZvb3Rlcn0+Q29weXJpZ2h0IDIwMjAgTW9yZWggQXV0aG9ycy48L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoUm9vdEFwcCk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9