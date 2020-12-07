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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/atoms/Button.tsx":
/*!*************************************!*\
  !*** ./components/atoms/Button.tsx ***!
  \*************************************/
/*! exports provided: Button, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shyuniz\\Desktop\\moreh\\self-kubernetes\\components\\atoms\\Button.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const StyledButton = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.attrs({
  type: 'button'
}).withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-18qtclf-0"
})(["line-height:1.5;font-weight:400;background:rgba(0,0,0,0.4);border:1px solid #c77e19;color:#f7b10a;min-width:180px;margin:10px;padding:12px 30px;text-transform:uppercase;cursor:pointer;&:hover{background:#b06601;color:#ffd36b;outline-width:0;}-webkit-transition:0.2s;transition:0.2s;&.primary{background:rgba(159,22,0,0.6);border:1px solid #ea3012;&:hover{background:#9f1600;color:#ffd36b;outline-width:0;}}"]);
/**
 * Primary UI component for user interaction
 */

const Button = (_ref) => {
  let {
    primary = false,
    style = {},
    disabled = false
  } = _ref,
      props = _objectWithoutProperties(_ref, ["primary", "style", "disabled"]);

  return __jsx(StyledButton, _extends({
    style: style,
    disabled: disabled,
    className: primary ? 'primary' : ''
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }), props.children);
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/atoms/Panel.tsx":
/*!************************************!*\
  !*** ./components/atoms/Panel.tsx ***!
  \************************************/
/*! exports provided: Panel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shyuniz\\Desktop\\moreh\\self-kubernetes\\components\\atoms\\Panel.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const StyledPanel = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Panel__StyledPanel",
  componentId: "sc-1giua8n-0"
})(["display:flex;flex:1 1 auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;border:1px solid ", ";background-color:", ";color:", ";width:calc(100% - 20px);height:100%;padding:15px;margin:0px 10px;&:not(:last-child){margin-bottom:10px;}& h2.panel-title{font-size:27px;color:#f8b700;line-height:1.5;font-family:Semplicita Pro,Open Sans,Arial,Helvetica,sans-serif;text-shadow:0 0 1px transparent,0 1px 2px rgba(0,0,0,0.8);font-weight:700;}& h3.panel-sub-title{font-size:15px;line-height:1.5;font-family:Open Sans,Arial,Helvetica,sans-serif;color:#ebdec2;text-shadow:0 0 1px transparent,0 1px 2px rgba(0,0,0,0.8);font-weight:400;margin-top:0;margin-bottom:0;text-transform:uppercase;}& div.panel-content{font-size:13px;line-height:1.5;font-family:Open Sans,Arial,Helvetica,sans-serif;color:#ebdec2;text-shadow:0 0 1px transparent,0 1px 2px rgba(0,0,0,0.8);font-weight:400;margin:13px auto 10px;overflow:hidden;}"], ({
  theme
}) => theme.colors.border, ({
  theme
}) => theme.colors.background, ({
  theme
}) => theme.colors.white);
const StyledPanelBox = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Panel__StyledPanelBox",
  componentId: "sc-1giua8n-1"
})(["position:static;top:0;bottom:0;right:10%;left:10%;"]);
const StyledPanelContent = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Panel__StyledPanelContent",
  componentId: "sc-1giua8n-2"
})(["margin-left:auto;margin-right:auto;position:relative;top:0;-webkit-transform:none;transform:none;text-align:center;width:100%;color:#fff;z-index:0;"]);
const Panel = (_ref) => {
  let {
    style = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["style"]);

  return __jsx(StyledPanel, _extends({
    style: style
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }), __jsx(StyledPanelBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(StyledPanelContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, props.children)));
};
/* harmony default export */ __webpack_exports__["default"] = (Panel);

/***/ }),

/***/ "./components/organisms/ClusterModnn.tsx":
/*!***********************************************!*\
  !*** ./components/organisms/ClusterModnn.tsx ***!
  \***********************************************/
/*! exports provided: ClusterModnn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterModnn", function() { return ClusterModnn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_Panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/Panel */ "./components/atoms/Panel.tsx");
/* harmony import */ var _lib_setting_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/setting.json */ "./lib/setting.json");
var _lib_setting_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../lib/setting.json */ "./lib/setting.json", 1);
var _jsxFileName = "C:\\Users\\shyuniz\\Desktop\\moreh\\self-kubernetes\\components\\organisms\\ClusterModnn.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import styled from 'styled-components';



const conn = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: _lib_setting_json__WEBPACK_IMPORTED_MODULE_3__.modnn.ip,
  timeout: 10 * 1000
});
const ClusterModnn = () => {
  const {
    0: result,
    1: setResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let unmount = false;

    const onLoadApi = () => {
      conn.get('/modnn').then(response => {
        if (unmount) return;

        if (response.status === 200) {
          console.log(response.data);
          setResult(response.data);
        } else {
          setResult(undefined);
        }
      }).catch(error => {
        if (unmount) return;
        console.log('error', error);
      });
    };

    const interval = setInterval(() => {
      onLoadApi();
    }, 1000);
    return () => {
      unmount = true;
      clearInterval(interval);
    };
  }, []);
  const cols = ['dtInputTime', 'sNodeId', 'sType', 'sGroup', 'sDataname', 'nDataValue'];
  return __jsx(_atoms_Panel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("table", {
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("thead", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, cols.map(el => __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, el)))), __jsx("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, result && result.map(row => __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, cols.map(col => __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, row[col])))))));
};
/* harmony default export */ __webpack_exports__["default"] = (ClusterModnn);

/***/ }),

/***/ "./components/organisms/Todo.tsx":
/*!***************************************!*\
  !*** ./components/organisms/Todo.tsx ***!
  \***************************************/
/*! exports provided: Todo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_Panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/Panel */ "./components/atoms/Panel.tsx");
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/Button */ "./components/atoms/Button.tsx");
var _jsxFileName = "C:\\Users\\shyuniz\\Desktop\\moreh\\self-kubernetes\\components\\organisms\\Todo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Todo = ({
  title = undefined,
  subtitle = undefined,
  items = []
}) => {
  return __jsx(_atoms_Panel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, subtitle && __jsx("h3", {
    className: 'panel-sub-title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 20
    }
  }, subtitle), title && __jsx("h2", {
    className: 'panel-title',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, title), items.length > 0 && __jsx("div", {
    className: 'panel-content',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, items.map((el, elIdx) => __jsx(_atoms_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: elIdx // disabled={el.link === undefined}
    ,
    primary: el.link === undefined,
    onClick: () => {
      if (el.link === undefined) {
        react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].error('Not yet', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined
        });
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(`/${el.link}`);
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, el.name))));
};
/* harmony default export */ __webpack_exports__["default"] = (Todo);

/***/ }),

/***/ "./components/organisms/Wrapper.tsx":
/*!******************************************!*\
  !*** ./components/organisms/Wrapper.tsx ***!
  \******************************************/
/*! exports provided: Wrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locales_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../locales/i18n */ "./locales/i18n.tsx");
/* harmony import */ var _styles_global_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/global-styles */ "./styles/global-styles.tsx");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.tsx");
/* harmony import */ var _styles_themed_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/themed-components */ "./styles/themed-components.tsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\shyuniz\\Desktop\\moreh\\self-kubernetes\\components\\organisms\\Wrapper.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const StyledToastContainer = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"]).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress'
}).withConfig({
  displayName: "Wrapper__StyledToastContainer",
  componentId: "qrysba-0"
})(["height:32px;.toast{border-radius:20px;min-height:auto;}button[aria-label=\"close\"]{}.body{text-indent:10px;}.progress{}"]);
const StyledWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Wrapper__StyledWrapper",
  componentId: "qrysba-1"
})(["width:100%;height:100%;margin:0px auto;position:relative;", " ", ""], ({
  theme
}) => theme.media.tablet`
    width: 100%;
  `, ({
  theme
}) => theme.media.mobile`
    width: 100%;
  `);
const Wrapper = ({
  children
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(StyledToastContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }), __jsx(_styles_global_styles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), __jsx(_styles_themed_components__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(StyledWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, children)));
};
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./lib/setting.json":
/*!**************************!*\
  !*** ./lib/setting.json ***!
  \**************************/
/*! exports provided: clusters, amd, nvidia, filterOption, modnn, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"clusters\":[{\"name\":\"Moreh Test 1\",\"nodes\":[{\"name\":\"p100\",\"type\":\"nvidia\",\"ip\":\"http://147.46.219.42:35100\"},{\"name\":\"rx52\",\"type\":\"amd\",\"ip\":\"http://147.46.219.61:35100\"},{\"name\":\"rx51:35100\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35100\"},{\"name\":\"rx51:35101\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35101\"},{\"name\":\"rx51:35102\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35102\"},{\"name\":\"rx51:35103\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35103\"},{\"name\":\"rx51:35104\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35104\"},{\"name\":\"rx51:35105\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35105\"},{\"name\":\"rx51:35106\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35106\"},{\"name\":\"rx51:35107\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35107\"},{\"name\":\"rx51:35108\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35108\"},{\"name\":\"rx51:35109\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35109\"},{\"name\":\"rx51:35110\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35110\"},{\"name\":\"rx51:35111\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35111\"},{\"name\":\"rx51:35112\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35112\"},{\"name\":\"rx51:35113\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35113\"},{\"name\":\"rx51:35114\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35114\"},{\"name\":\"rx51:35115\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35115\"},{\"name\":\"rx51:35116\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35116\"},{\"name\":\"rx51:35117\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35117\"},{\"name\":\"rx51:35118\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35118\"},{\"name\":\"rx51:35119\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35119\"},{\"name\":\"rx51:35120\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35120\"},{\"name\":\"rx51:35121\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35121\"},{\"name\":\"rx51:35122\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35122\"},{\"name\":\"rx51:35123\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35123\"},{\"name\":\"rx51:35124\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35124\"},{\"name\":\"rx51:35125\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35125\"},{\"name\":\"rx51:35126\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35126\"},{\"name\":\"rx51:35127\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35127\"},{\"name\":\"rx51:35128\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35128\"},{\"name\":\"rx51:35129\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35129\"}]},{\"name\":\"Moreh Test 2\",\"nodes\":[{\"name\":\"rx51:35130\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35130\"},{\"name\":\"rx51:35131\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35131\"},{\"name\":\"rx51:35132\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35132\"},{\"name\":\"rx51:35133\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35133\"},{\"name\":\"rx51:35134\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35134\"},{\"name\":\"rx51:35135\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35135\"},{\"name\":\"rx51:35136\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35136\"},{\"name\":\"rx51:35137\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35137\"},{\"name\":\"rx51:35138\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35138\"},{\"name\":\"rx51:35139\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35139\"},{\"name\":\"rx51:35140\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35140\"},{\"name\":\"rx51:35141\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35141\"},{\"name\":\"rx51:35142\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35142\"},{\"name\":\"rx51:35143\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35143\"},{\"name\":\"rx51:35144\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35144\"},{\"name\":\"rx51:35145\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35145\"},{\"name\":\"rx51:35146\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35146\"},{\"name\":\"rx51:35147\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35147\"},{\"name\":\"rx51:35148\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35148\"},{\"name\":\"rx51:35149\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35149\"},{\"name\":\"rx51:35150\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35150\"}]}],\"amd\":{\"deviceName\":\"Card series\",\"chartItem\":[\"Temperature (Sensor junction) (C)\",\"Temperature (Sensor mem) (C)\",\"GPU use (%)\",\"GPU memory use (%)\"]},\"nvidia\":{\"deviceName\":\"product_name\",\"chartItem\":[\"temperature>gpu_temp\",\"temperature>memory_temp\",\"utilization>gpu_util\",\"utilization>memory_util\"]},\"filterOption\":[{\"value\":\"Temperature (Sensor junction) (C)\",\"label\":\"Temperature (Sensor junction) (C)\"},{\"value\":\"Temperature (Sensor mem) (C)\",\"label\":\"Temperature (Sensor mem) (C)\"},{\"value\":\"GPU use (%)\",\"label\":\"GPU use (%)\"},{\"value\":\"GPU memory use (%)\",\"label\":\"GPU memory use (%)\"}],\"modnn\":{\"ip\":\"http://147.46.219.62:35000\"}}");

/***/ }),

/***/ "./locales/i18n.tsx":
/*!**************************!*\
  !*** ./locales/i18n.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "i18next");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);


const resources = {
  ko: {
    translation: {
      'btn-test-start': '시작하기',
      prev: '이전',
      next: '다음'
    }
  }
};
i18next__WEBPACK_IMPORTED_MODULE_0___default.a.use(react_i18next__WEBPACK_IMPORTED_MODULE_1__["initReactI18next"]).init({
  resources,
  lng: 'ko'
});
/* harmony default export */ __webpack_exports__["default"] = (i18next__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: ClusterMode, Index, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterMode", function() { return ClusterMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_atoms_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/atoms/Button */ "./components/atoms/Button.tsx");
/* harmony import */ var _components_organisms_Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/organisms/Todo */ "./components/organisms/Todo.tsx");
/* harmony import */ var _components_organisms_Wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/organisms/Wrapper */ "./components/organisms/Wrapper.tsx");
/* harmony import */ var _components_organisms_ClusterModnn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/organisms/ClusterModnn */ "./components/organisms/ClusterModnn.tsx");
var _jsxFileName = "C:\\Users\\shyuniz\\Desktop\\moreh\\self-kubernetes\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







let ClusterMode;

(function (ClusterMode) {
  ClusterMode["none"] = "";
  ClusterMode["hex"] = "hex";
  ClusterMode["chart"] = "chart";
  ClusterMode["modnn"] = "modnn";
})(ClusterMode || (ClusterMode = {}));

const Index = () => {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])();
  const {
    0: moreh,
    1: setMoreh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: mode,
    1: setMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(ClusterMode.modnn);
  const kubernetes = {
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
  const nvidia = {
    title: 'NVIDIA',
    subtitle: 'dashboard (nvidia-smi)',
    items: [{
      name: 'p100',
      link: 'nvidia/dashboard'
    }]
  };
  const amd = {
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
  const etc = {
    title: 'DASHBOARD',
    items: [{
      name: 'manual',
      link: 'total/manual'
    }, {
      name: 'p100 + rx51 + rx52',
      link: 'total/dashboard'
    }]
  };
  const doc = {
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

  return __jsx(_components_organisms_Wrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, "Admin Page"), __jsx("nav", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx(_components_atoms_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    primary: moreh,
    onClick: () => setMoreh(prev => !prev),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, moreh ? 'Moreh > User' : 'User > Moreh'), !moreh && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_atoms_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      backgroundColor: mode === ClusterMode.modnn ? '#b06601' : '',
      color: mode === ClusterMode.modnn ? '#ffd36b' : ''
    },
    onClick: () => setMode(ClusterMode.modnn),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "modnn"))), !moreh && mode === ClusterMode.modnn && __jsx(_components_organisms_ClusterModnn__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 48
    }
  }), moreh && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_organisms_Todo__WEBPACK_IMPORTED_MODULE_3__["Todo"], _extends({}, etc, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  })), __jsx(_components_organisms_Todo__WEBPACK_IMPORTED_MODULE_3__["Todo"], _extends({}, doc, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  })), __jsx(_components_organisms_Todo__WEBPACK_IMPORTED_MODULE_3__["Todo"], _extends({}, nvidia, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  })), __jsx(_components_organisms_Todo__WEBPACK_IMPORTED_MODULE_3__["Todo"], _extends({}, amd, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  })), __jsx(_components_organisms_Todo__WEBPACK_IMPORTED_MODULE_3__["Todo"], _extends({}, kubernetes, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./styles/global-styles.tsx":
/*!**********************************!*\
  !*** ./styles/global-styles.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-reset */ "styled-reset");
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_reset__WEBPACK_IMPORTED_MODULE_1__);


const GlobalStyle = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  ${styled_reset__WEBPACK_IMPORTED_MODULE_1___default.a}
  /* @font-face {
    font-family: "Museo Sans";
    src: url("../fonts/en/Museo Sans 300.OTF");
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Noto Sans";
    src: url("/fonts/en/Noto Sans Regular.OTF");
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  } */

  * {
    box-sizing: border-box;
    font-family: 'Museo Sans', 'Noto Sans';
    line-height: 1.5;
  }
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    font-family: 'Museo Sans', 'Noto Sans';
    line-height: 1.5;
  }
  body {
    /* background-color: #e8eaed; */
    background-color: #000;
    color: #fff;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  h1 { font-size: 2em; }
  h2 { font-size: 1.5em; }
  h3 { font-size: 1.17em; }
  h4 { font-size: 1em; }
  h5 { font-size: .83em; }
  h6 { font-size: .67em; }
  a {
    color: inherit;
    text-decoration: none;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

   /* Track */
  ::-webkit-scrollbar-track {
    background-color: #aaa;
    border-radius : 3px;
  }

   /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 3px;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./styles/theme.tsx":
/*!**************************!*\
  !*** ./styles/theme.tsx ***!
  \**************************/
/*! exports provided: styled, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return styled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const sizes = {
  mobile: 320,
  tablet: 768,
  // desktop: 1024
  desktop: 1200
};
const media = {
  mobile: (...args) => undefined,
  tablet: (...args) => undefined,
  desktop: (...args) => undefined
};
Object.keys(sizes).reduce((acc, label) => {
  switch (label) {
    case 'desktop':
      acc.desktop = (...args) => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media only screen and (min-width:", "px){", "}"], sizes.desktop, args);

      break;

    case 'tablet':
      acc.tablet = (...args) => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media only screen and (max-width:", "px) and (min-width:", "px){", "}"], sizes.desktop, sizes.tablet, args);

      break;

    case 'mobile':
      acc.mobile = (...args) => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media only screen and (max-width:", "px){", "}"], sizes.tablet, args);

      break;

    default:
      break;
  }

  return acc;
}, media);
const colors = {
  main: '#272A34',
  sub: '#727985',
  black: '#222222',
  gray8: '#888888',
  grayA: '#aaaaaa',
  grayC: '#cacaca',
  grayD: '#dadce0',
  grayE: '#e8eaed',
  grayF: '#f5f5f5',
  background: '#211510',
  border: '#504137',
  button: '#9f1600',
  hover: '#f8b700',
  primary: '#170e09',
  secondary: '#c77e19',
  success: '#137333',
  danger: '#ea3012',
  warning: '#fdcc5e',
  info: '#f7b10a',
  white: '#ffffff'
};
const secondaryColors = {};
const fontFamily = ['Museo Sans', 'Noto Sans', 'Arial', 'Courier'].join(',');
const fontSizes = {
  h1: '32px',
  h2: '24px',
  h3: '20px',
  subtitle16: '16px',
  //  h4
  body14: '14px',
  //  h5
  cation12: '12px' //  h6

};
const theme = {
  colors,
  fontSizes,
  fontFamily,
  secondaryColors,
  media
};
const styled = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a;
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./styles/themed-components.tsx":
/*!**************************************!*\
  !*** ./styles/themed-components.tsx ***!
  \**************************************/
/*! exports provided: css, keyframes, ThemeProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider
} = styled_components__WEBPACK_IMPORTED_MODULE_0__;

/* harmony default export */ __webpack_exports__["default"] = (styled);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-reset":
/*!*******************************!*\
  !*** external "styled-reset" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-reset");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdG9tcy9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXRvbXMvUGFuZWwudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3JnYW5pc21zL0NsdXN0ZXJNb2Rubi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvVG9kby50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlcy9pMThuLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2dsb2JhbC1zdHlsZXMudHN4Iiwid2VicGFjazovLy8uL3N0eWxlcy90aGVtZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3RoZW1lZC1jb21wb25lbnRzLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtcmVzZXRcIiJdLCJuYW1lcyI6WyJTdHlsZWRCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJhdHRycyIsInR5cGUiLCJCdXR0b24iLCJwcmltYXJ5Iiwic3R5bGUiLCJkaXNhYmxlZCIsInByb3BzIiwiY2hpbGRyZW4iLCJTdHlsZWRQYW5lbCIsImRpdiIsInRoZW1lIiwiY29sb3JzIiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsIndoaXRlIiwiU3R5bGVkUGFuZWxCb3giLCJTdHlsZWRQYW5lbENvbnRlbnQiLCJQYW5lbCIsImNvbm4iLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJNb2RubkNvbmZpZyIsIm1vZG5uIiwiaXAiLCJ0aW1lb3V0IiwiQ2x1c3Rlck1vZG5uIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJ1c2VFZmZlY3QiLCJ1bm1vdW50Iiwib25Mb2FkQXBpIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjb2xzIiwid2lkdGgiLCJtYXAiLCJlbCIsInJvdyIsImNvbCIsIlRvZG8iLCJ0aXRsZSIsInN1YnRpdGxlIiwiaXRlbXMiLCJsZW5ndGgiLCJlbElkeCIsImxpbmsiLCJ0b2FzdCIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJSb3V0ZXIiLCJwdXNoIiwibmFtZSIsIlN0eWxlZFRvYXN0Q29udGFpbmVyIiwiVG9hc3RDb250YWluZXIiLCJjbGFzc05hbWUiLCJ0b2FzdENsYXNzTmFtZSIsImJvZHlDbGFzc05hbWUiLCJwcm9ncmVzc0NsYXNzTmFtZSIsIlN0eWxlZFdyYXBwZXIiLCJtZWRpYSIsInRhYmxldCIsIm1vYmlsZSIsIldyYXBwZXIiLCJyZXNvdXJjZXMiLCJrbyIsInRyYW5zbGF0aW9uIiwicHJldiIsIm5leHQiLCJpMThuIiwidXNlIiwiaW5pdFJlYWN0STE4bmV4dCIsImluaXQiLCJsbmciLCJDbHVzdGVyTW9kZSIsIkluZGV4IiwidCIsInVzZVRyYW5zbGF0aW9uIiwibW9yZWgiLCJzZXRNb3JlaCIsIm1vZGUiLCJzZXRNb2RlIiwia3ViZXJuZXRlcyIsIm52aWRpYSIsImFtZCIsImV0YyIsImRvYyIsIm1hcmdpbiIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJyZXNldCIsInNpemVzIiwiZGVza3RvcCIsImFyZ3MiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjIiwibGFiZWwiLCJjc3MiLCJtYWluIiwic3ViIiwiYmxhY2siLCJncmF5OCIsImdyYXlBIiwiZ3JheUMiLCJncmF5RCIsImdyYXlFIiwiZ3JheUYiLCJob3ZlciIsInNlY29uZGFyeSIsInN1Y2Nlc3MiLCJkYW5nZXIiLCJ3YXJuaW5nIiwiaW5mbyIsInNlY29uZGFyeUNvbG9ycyIsImZvbnRGYW1pbHkiLCJqb2luIiwiZm9udFNpemVzIiwiaDEiLCJoMiIsImgzIiwic3VidGl0bGUxNiIsImJvZHkxNCIsImNhdGlvbjEyIiwiYmFzZVN0eWxlZCIsImRlZmF1bHQiLCJrZXlmcmFtZXMiLCJUaGVtZVByb3ZpZGVyIiwic3R5bGVkQ29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFB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SSxXQUZZO0FBR1pGLFlBSFk7QUFJWkQsaUJBSlk7QUFLWjNEO0FBTFksQ0FBZDtBQVNPLE1BQU0vRSxNQUFNLEdBQUdvSix3REFBZjtBQUNReEksb0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDaEdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0EsTUFBTTtBQUNKeUksU0FBTyxFQUFFckosTUFETDtBQUVKMEgsS0FGSTtBQUdKNEIsV0FISTtBQUlKQztBQUpJLElBS0ZDLDhDQUxKO0FBT0E7QUFFZXhKLHFFQUFmLEU7Ozs7Ozs7Ozs7O0FDWkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCB0eXBlIEJ1dHRvblByb3BzID0ge1xyXG4gIC8qKlxyXG4gICAqIENTU1xyXG4gICAqL1xyXG4gIHN0eWxlPzogQ1NTUHJvcGVydGllcztcclxuICAvKipcclxuICAgKiBJcyBwcmltYXJ5XHJcbiAgICovXHJcbiAgcHJpbWFyeT86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogSXMgZGlzYWJsZWRcclxuICAgKi9cclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogb25DbGlja1xyXG4gICAqL1xyXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbi5hdHRycyh7XHJcbiAgdHlwZTogJ2J1dHRvbidcclxufSlgXHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzc3ZTE5O1xyXG4gIGNvbG9yOiAjZjdiMTBhO1xyXG4gIG1pbi13aWR0aDogMTgwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEycHggMzBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjA2NjAxO1xyXG4gICAgY29sb3I6ICNmZmQzNmI7XHJcbiAgICBvdXRsaW5lLXdpZHRoOiAwO1xyXG4gIH1cclxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuICAmLnByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxNTksIDIyLCAwLCAwLjYpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhMzAxMjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjOWYxNjAwO1xyXG4gICAgICBjb2xvcjogI2ZmZDM2YjtcclxuICAgICAgb3V0bGluZS13aWR0aDogMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG4vKipcclxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCBCdXR0b246IFJlYWN0LkZDPEJ1dHRvblByb3BzPiA9ICh7XHJcbiAgcHJpbWFyeSA9IGZhbHNlLFxyXG4gIHN0eWxlID0ge30sXHJcbiAgZGlzYWJsZWQgPSBmYWxzZSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRCdXR0b25cclxuICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgIGNsYXNzTmFtZT17cHJpbWFyeSA/ICdwcmltYXJ5JyA6ICcnfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvU3R5bGVkQnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCB0eXBlIFBhbmVsUHJvcHMgPSB7XHJcbiAgLyoqXHJcbiAgICogQ1NTXHJcbiAgICovXHJcbiAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkUGFuZWwgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ib3JkZXJ9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogMHB4IDEwcHg7XHJcblxyXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJiBoMi5wYW5lbC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBjb2xvcjogI2Y4YjcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBmb250LWZhbWlseTogU2VtcGxpY2l0YSBQcm8sIE9wZW4gU2FucywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgMXB4IHRyYW5zcGFyZW50LCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gICYgaDMucGFuZWwtc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNlYmRlYzI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDFweCB0cmFuc3BhcmVudCwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxuICAmIGRpdi5wYW5lbC1jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNlYmRlYzI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDFweCB0cmFuc3BhcmVudCwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW46IDEzcHggYXV0byAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFN0eWxlZFBhbmVsQm94ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogc3RhdGljO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDEwJTtcclxuICBsZWZ0OiAxMCU7XHJcbmA7XHJcbmNvbnN0IFN0eWxlZFBhbmVsQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIC8qIG1heC13aWR0aDogMTYwMHB4OyAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgdHJhbnNmb3JtOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB6LWluZGV4OiAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhbmVsOiBSZWFjdC5GQzxQYW5lbFByb3BzPiA9ICh7IHN0eWxlID0ge30sIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFBhbmVsIHN0eWxlPXtzdHlsZX0gey4uLnByb3BzfT5cclxuICAgICAgPFN0eWxlZFBhbmVsQm94PlxyXG4gICAgICAgIDxTdHlsZWRQYW5lbENvbnRlbnQ+e3Byb3BzLmNoaWxkcmVufTwvU3R5bGVkUGFuZWxDb250ZW50PlxyXG4gICAgICA8L1N0eWxlZFBhbmVsQm94PlxyXG4gICAgPC9TdHlsZWRQYW5lbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFuZWw7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCBQYW5lbCBmcm9tICcuLi9hdG9tcy9QYW5lbCc7XHJcblxyXG5pbXBvcnQgTW9kbm5Db25maWcgZnJvbSAnLi4vLi4vbGliL3NldHRpbmcuanNvbic7XHJcblxyXG5jb25zdCBjb25uID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBNb2RubkNvbmZpZy5tb2Rubi5pcCxcclxuICB0aW1lb3V0OiAxMCAqIDEwMDBcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2x1c3Rlck1vZG5uOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8YW55Pih1bmRlZmluZWQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHVubW91bnQgPSBmYWxzZTtcclxuICAgIGNvbnN0IG9uTG9hZEFwaSA9ICgpID0+IHtcclxuICAgICAgY29ublxyXG4gICAgICAgIC5nZXQoJy9tb2RubicpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAodW5tb3VudCkgcmV0dXJuO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBzZXRSZXN1bHQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRSZXN1bHQodW5kZWZpbmVkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGlmICh1bm1vdW50KSByZXR1cm47XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBvbkxvYWRBcGkoKTtcclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHVubW91bnQgPSB0cnVlO1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBjb2xzID0gWydkdElucHV0VGltZScsICdzTm9kZUlkJywgJ3NUeXBlJywgJ3NHcm91cCcsICdzRGF0YW5hbWUnLCAnbkRhdGFWYWx1ZSddO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhbmVsPlxyXG4gICAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIHtjb2xzLm1hcCgoZWwpID0+IChcclxuICAgICAgICAgICAgICA8dGg+e2VsfTwvdGg+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtyZXN1bHQgJiZcclxuICAgICAgICAgICAgcmVzdWx0Lm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAge2NvbHMubWFwKChjb2wpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHRkPntyb3dbY29sXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvUGFuZWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsdXN0ZXJNb2RubjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbmltcG9ydCBQYW5lbCBmcm9tICcuLi9hdG9tcy9QYW5lbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYXRvbXMvQnV0dG9uJztcclxuXHJcbmV4cG9ydCB0eXBlIFRvZG9JdGVtUHJvcHMgPSB7XHJcbiAgLyoqXHJcbiAgICogSXRlbSBuYW1lXHJcbiAgICovXHJcbiAgbmFtZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBJdGVtIGxpbmtcclxuICAgKi9cclxuICBsaW5rPzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgVG9kb1Byb3BzID0ge1xyXG4gIC8qKlxyXG4gICAqIFRpdGxlXHJcbiAgICovXHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogU3ViIHRpdGxlXHJcbiAgICovXHJcbiAgc3VidGl0bGU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVG9kbyBhcnJheVxyXG4gICAqL1xyXG4gIGl0ZW1zPzogVG9kb0l0ZW1Qcm9wc1tdO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvZG86IFJlYWN0LkZDPFRvZG9Qcm9wcz4gPSAoe1xyXG4gIHRpdGxlID0gdW5kZWZpbmVkLFxyXG4gIHN1YnRpdGxlID0gdW5kZWZpbmVkLFxyXG4gIGl0ZW1zID0gW11cclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFuZWw+XHJcbiAgICAgIHtzdWJ0aXRsZSAmJiA8aDMgY2xhc3NOYW1lPXsncGFuZWwtc3ViLXRpdGxlJ30+e3N1YnRpdGxlfTwvaDM+fVxyXG4gICAgICB7dGl0bGUgJiYgPGgyIGNsYXNzTmFtZT17J3BhbmVsLXRpdGxlJ30+e3RpdGxlfTwvaDI+fVxyXG4gICAgICB7aXRlbXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwYW5lbC1jb250ZW50J30+XHJcbiAgICAgICAgICB7aXRlbXMubWFwKChlbCwgZWxJZHgpID0+IChcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT17ZWxJZHh9XHJcbiAgICAgICAgICAgICAgLy8gZGlzYWJsZWQ9e2VsLmxpbmsgPT09IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICBwcmltYXJ5PXtlbC5saW5rID09PSB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLmxpbmsgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcignTm90IHlldCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcC1jZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYC8ke2VsLmxpbmt9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtlbC5uYW1lfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9QYW5lbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kbztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCAnLi4vLi4vbG9jYWxlcy9pMThuJztcclxuXHJcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvZ2xvYmFsLXN0eWxlcyc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi9zdHlsZXMvdGhlbWUnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1lZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5cclxuY29uc3QgU3R5bGVkVG9hc3RDb250YWluZXIgPSBzdHlsZWQoVG9hc3RDb250YWluZXIpLmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICd0b2FzdC1jb250YWluZXInLFxyXG4gIHRvYXN0Q2xhc3NOYW1lOiAndG9hc3QnLFxyXG4gIGJvZHlDbGFzc05hbWU6ICdib2R5JyxcclxuICBwcm9ncmVzc0NsYXNzTmFtZTogJ3Byb2dyZXNzJyxcclxufSlgXHJcbiAgLyogLnRvYXN0LWNvbnRhaW5lciAqL1xyXG4gIGhlaWdodDogMzJweDtcclxuXHJcbiAgIC8qIC50b2FzdCBpcyBwYXNzZWQgdG8gdG9hc3RDbGFzc05hbWUgKi9cclxuICAudG9hc3Qge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBidXR0b25bYXJpYS1sYWJlbD1cImNsb3NlXCJdIHtcclxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXHJcbiAgfVxyXG5cclxuICAvKiAuYm9keSBpcyBwYXNzZWQgdG8gYm9keUNsYXNzTmFtZSAqL1xyXG4gIC5ib2R5IHtcclxuICAgIHRleHQtaW5kZW50OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLyogLnByb2dyZXNzIGlzIHBhc3NlZCB0byBwcm9ncmVzc0NsYXNzTmFtZSAqL1xyXG4gIC5wcm9ncmVzcyB7fVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubWVkaWEudGFibGV0YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgYH1cclxuICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1lZGlhLm1vYmlsZWBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIGB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgV3JhcHBlcjogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTdHlsZWRUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICA8U3R5bGVkV3JhcHBlcj57Y2hpbGRyZW59PC9TdHlsZWRXcmFwcGVyPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlcjsiLCJpbXBvcnQgaTE4biBmcm9tICdpMThuZXh0JztcclxuaW1wb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5jb25zdCByZXNvdXJjZXMgPSB7XHJcbiAga286IHtcclxuICAgIHRyYW5zbGF0aW9uOiB7XHJcbiAgICAgICdidG4tdGVzdC1zdGFydCc6ICfsi5zsnpHtlZjquLAnLFxyXG5cclxuICAgICAgcHJldjogJ+ydtOyghCcsXHJcbiAgICAgIG5leHQ6ICfri6TsnYwnXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5pMThuLnVzZShpbml0UmVhY3RJMThuZXh0KS5pbml0KHtcclxuICByZXNvdXJjZXMsXHJcbiAgbG5nOiAna28nXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBpMThuO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvYXRvbXMvQnV0dG9uJztcclxuXHJcbmltcG9ydCB7IFRvZG8sIFRvZG9Qcm9wcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL1RvZG8nO1xyXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuLi9jb21wb25lbnRzL29yZ2FuaXNtcy9XcmFwcGVyJztcclxuaW1wb3J0IENsdXN0ZXJDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL29yZ2FuaXNtcy9DbHVzdGVyQ2hhcnQnO1xyXG5pbXBvcnQgQ2x1c3RlckhleCBmcm9tICcuLi9jb21wb25lbnRzL29yZ2FuaXNtcy9DbHVzdGVySGV4JztcclxuaW1wb3J0IENsdXN0ZXJNb2RubiBmcm9tICcuLi9jb21wb25lbnRzL29yZ2FuaXNtcy9DbHVzdGVyTW9kbm4nO1xyXG5cclxuZXhwb3J0IGVudW0gQ2x1c3Rlck1vZGUge1xyXG4gIG5vbmUgPSAnJyxcclxuICBoZXggPSAnaGV4JyxcclxuICBjaGFydCA9ICdjaGFydCcsXHJcbiAgbW9kbm4gPSAnbW9kbm4nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBJbmRleDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gIGNvbnN0IFttb3JlaCwgc2V0TW9yZWhdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlPHN0cmluZz4oQ2x1c3Rlck1vZGUubW9kbm4pO1xyXG5cclxuICBjb25zdCBrdWJlcm5ldGVzOiBUb2RvUHJvcHMgPSB7XHJcbiAgICB0aXRsZTogJ0t1YmVybmV0ZXMnLFxyXG4gICAgc3VidGl0bGU6ICdLdWJlcm5ldGVzIEFQSSB0ZXN0JyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQVBJJ1xyXG4gICAgICAgIC8vIGxpbms6ICdrdWJlcm5ldGVzL3Rlc3QnXHJcbiAgICAgIH1cclxuICAgICAgLy8ge1xyXG4gICAgICAvLyAgIG5hbWU6ICdsb2dpbidcclxuICAgICAgLy8gfSxcclxuICAgICAgLy8ge1xyXG4gICAgICAvLyAgIG5hbWU6ICd0b2tlbidcclxuICAgICAgLy8gfVxyXG4gICAgXVxyXG4gIH07XHJcbiAgY29uc3QgbnZpZGlhOiBUb2RvUHJvcHMgPSB7XHJcbiAgICB0aXRsZTogJ05WSURJQScsXHJcbiAgICBzdWJ0aXRsZTogJ2Rhc2hib2FyZCAobnZpZGlhLXNtaSknLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdwMTAwJyxcclxuICAgICAgICBsaW5rOiAnbnZpZGlhL2Rhc2hib2FyZCdcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcbiAgY29uc3QgYW1kOiBUb2RvUHJvcHMgPSB7XHJcbiAgICB0aXRsZTogJ0FNRCcsXHJcbiAgICBzdWJ0aXRsZTogJ2Rhc2hib2FyZCAocm9jbS1zbWkpJyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAncng1MScsXHJcbiAgICAgICAgbGluazogJ2FtZC9kYXNoYm9hcmQxJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3J4NTInLFxyXG4gICAgICAgIGxpbms6ICdhbWQvZGFzaGJvYXJkMidcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcbiAgY29uc3QgZXRjOiBUb2RvUHJvcHMgPSB7XHJcbiAgICB0aXRsZTogJ0RBU0hCT0FSRCcsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ21hbnVhbCcsXHJcbiAgICAgICAgbGluazogJ3RvdGFsL21hbnVhbCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdwMTAwICsgcng1MSArIHJ4NTInLFxyXG4gICAgICAgIGxpbms6ICd0b3RhbC9kYXNoYm9hcmQnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG4gIGNvbnN0IGRvYzogVG9kb1Byb3BzID0ge1xyXG4gICAgdGl0bGU6ICdEb2N1bWVudCcsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1JFQURNRScsXHJcbiAgICAgICAgbGluazogJ2RvYy9yZWFkbWUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnZGV2IHRlc3QnLFxyXG4gICAgICAgIGxpbms6ICdkb2MvdGVzdCdcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IGNoYW5nZWxhbmd1YWdlVG9LbyA9ICgpID0+IGkxOG4uY2hhbmdlTGFuZ3VhZ2UoJ2tvJyk7XHJcbiAgLy8gY29uc3QgY2hhbmdlbGFuZ3VhZ2VUb0VuID0gKCkgPT4gaTE4bi5jaGFuZ2VMYW5ndWFnZSgnZW4nKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIHsvKiA8YnV0dG9uIHR5cGU9eydidXR0b24nfSBvbkNsaWNrPXtjaGFuZ2VsYW5ndWFnZVRvS299PlxyXG4gICAgICAgIO2VnOq1reyWtFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPXsnYnV0dG9uJ30gb25DbGljaz17Y2hhbmdlbGFuZ3VhZ2VUb0VufT5cclxuICAgICAgICBFbmdsaXNoXHJcbiAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgPGgxIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRXZWlnaHQ6IDYwMCB9fT5BZG1pbiBQYWdlPC9oMT5cclxuICAgICAgPG5hdj5cclxuICAgICAgICA8QnV0dG9uIHByaW1hcnk9e21vcmVofSBvbkNsaWNrPXsoKSA9PiBzZXRNb3JlaCgocHJldikgPT4gIXByZXYpfT5cclxuICAgICAgICAgIHttb3JlaCA/ICdNb3JlaCA+IFVzZXInIDogJ1VzZXIgPiBNb3JlaCd9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgeyFtb3JlaCAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbW9kZSA9PT0gQ2x1c3Rlck1vZGUubW9kbm4gPyAnI2IwNjYwMScgOiAnJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBtb2RlID09PSBDbHVzdGVyTW9kZS5tb2RubiA/ICcjZmZkMzZiJyA6ICcnXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RlKENsdXN0ZXJNb2RlLm1vZG5uKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIG1vZG5uXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICB7LyogPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG1vZGUgPT09IENsdXN0ZXJNb2RlLmhleCA/ICcjYjA2NjAxJyA6ICcnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IG1vZGUgPT09IENsdXN0ZXJNb2RlLmhleCA/ICcjZmZkMzZiJyA6ICcnXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RlKENsdXN0ZXJNb2RlLmhleCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBoZXhcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBtb2RlID09PSBDbHVzdGVyTW9kZS5jaGFydCA/ICcjYjA2NjAxJyA6ICcnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IG1vZGUgPT09IENsdXN0ZXJNb2RlLmNoYXJ0ID8gJyNmZmQzNmInIDogJydcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vZGUoQ2x1c3Rlck1vZGUuY2hhcnQpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgY2hhcnRcclxuICAgICAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9uYXY+XHJcblxyXG4gICAgICB7LyogeyFtb3JlaCAmJiBtb2RlID09PSBDbHVzdGVyTW9kZS5jaGFydCAmJiA8Q2x1c3RlckNoYXJ0IC8+fVxyXG4gICAgICB7IW1vcmVoICYmIG1vZGUgPT09IENsdXN0ZXJNb2RlLmhleCAmJiA8Q2x1c3RlckhleCAvPn0gKi99XHJcbiAgICAgIHshbW9yZWggJiYgbW9kZSA9PT0gQ2x1c3Rlck1vZGUubW9kbm4gJiYgPENsdXN0ZXJNb2RubiAvPn1cclxuXHJcbiAgICAgIHttb3JlaCAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxUb2RvIHsuLi5ldGN9IC8+XHJcbiAgICAgICAgICA8VG9kbyB7Li4uZG9jfSAvPlxyXG4gICAgICAgICAgPFRvZG8gey4uLm52aWRpYX0gLz5cclxuICAgICAgICAgIDxUb2RvIHsuLi5hbWR9IC8+XHJcbiAgICAgICAgICA8VG9kbyB7Li4ua3ViZXJuZXRlc30gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgcmVzZXQgZnJvbSAnc3R5bGVkLXJlc2V0JztcclxuXHJcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgJHtyZXNldH1cclxuICAvKiBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvIFNhbnNcIjtcclxuICAgIHNyYzogdXJsKFwiLi4vZm9udHMvZW4vTXVzZW8gU2FucyAzMDAuT1RGXCIpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICB9XHJcbiAgXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIjtcclxuICAgIHNyYzogdXJsKFwiL2ZvbnRzL2VuL05vdG8gU2FucyBSZWd1bGFyLk9URlwiKTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgfSAqL1xyXG5cclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogJ011c2VvIFNhbnMnLCAnTm90byBTYW5zJztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgfVxyXG4gIGh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCwgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhciwgYiwgdSwgaSwgY2VudGVyLCBkbCwgZHQsIGRkLCBtZW51LCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1haW4sIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNdXNlbyBTYW5zJywgJ05vdG8gU2Fucyc7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxuICBib2R5IHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlOGVhZWQ7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIGlucHV0LCBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBvbCwgdWwsIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBoMSB7IGZvbnQtc2l6ZTogMmVtOyB9XHJcbiAgaDIgeyBmb250LXNpemU6IDEuNWVtOyB9XHJcbiAgaDMgeyBmb250LXNpemU6IDEuMTdlbTsgfVxyXG4gIGg0IHsgZm9udC1zaXplOiAxZW07IH1cclxuICBoNSB7IGZvbnQtc2l6ZTogLjgzZW07IH1cclxuICBoNiB7IGZvbnQtc2l6ZTogLjY3ZW07IH1cclxuICBhIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLyogd2lkdGggKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICB9XHJcblxyXG4gICAvKiBUcmFjayAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcclxuICAgIGJvcmRlci1yYWRpdXMgOiAzcHg7XHJcbiAgfVxyXG5cclxuICAgLyogSGFuZGxlICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xyXG4iLCJpbXBvcnQgYmFzZVN0eWxlZCwgeyBjc3MsIENTU1Byb3AsIFRoZW1lZFN0eWxlZEludGVyZmFjZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IHNpemVzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge1xyXG4gIG1vYmlsZTogMzIwLFxyXG4gIHRhYmxldDogNzY4LFxyXG4gIC8vIGRlc2t0b3A6IDEwMjRcclxuICBkZXNrdG9wOiAxMjAwXHJcbn07XHJcblxyXG50eXBlIEJhY2tRdW90ZUFyZ3MgPSBzdHJpbmdbXTtcclxuXHJcbnR5cGUgTWVkaWEgPSB7XHJcbiAgbW9iaWxlOiAoLi4uYXJnczogQmFja1F1b3RlQXJncykgPT4gQ1NTUHJvcCB8IHVuZGVmaW5lZDtcclxuICB0YWJsZXQ6ICguLi5hcmdzOiBCYWNrUXVvdGVBcmdzKSA9PiBDU1NQcm9wIHwgdW5kZWZpbmVkO1xyXG4gIGRlc2t0b3A6ICguLi5hcmdzOiBCYWNrUXVvdGVBcmdzKSA9PiBDU1NQcm9wIHwgdW5kZWZpbmVkO1xyXG59O1xyXG5cclxuY29uc3QgbWVkaWE6IE1lZGlhID0ge1xyXG4gIG1vYmlsZTogKC4uLmFyZ3M6IEJhY2tRdW90ZUFyZ3MpID0+IHVuZGVmaW5lZCxcclxuICB0YWJsZXQ6ICguLi5hcmdzOiBCYWNrUXVvdGVBcmdzKSA9PiB1bmRlZmluZWQsXHJcbiAgZGVza3RvcDogKC4uLmFyZ3M6IEJhY2tRdW90ZUFyZ3MpID0+IHVuZGVmaW5lZFxyXG59O1xyXG5cclxuT2JqZWN0LmtleXMoc2l6ZXMpLnJlZHVjZSgoYWNjOiBNZWRpYSwgbGFiZWw6IHN0cmluZykgPT4ge1xyXG4gIHN3aXRjaCAobGFiZWwpIHtcclxuICAgIGNhc2UgJ2Rlc2t0b3AnOlxyXG4gICAgICBhY2MuZGVza3RvcCA9ICguLi5hcmdzOiBCYWNrUXVvdGVBcmdzKSA9PiBjc3NgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemVzLmRlc2t0b3B9cHgpIHtcclxuICAgICAgICAgICR7YXJnc31cclxuICAgICAgICB9XHJcbiAgICAgIGA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAndGFibGV0JzpcclxuICAgICAgYWNjLnRhYmxldCA9ICguLi5hcmdzOiBCYWNrUXVvdGVBcmdzKSA9PiBjc3NgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke3NpemVzLmRlc2t0b3B9cHgpIGFuZCAobWluLXdpZHRoOiAke3NpemVzLnRhYmxldH1weCkge1xyXG4gICAgICAgICAgJHthcmdzfVxyXG4gICAgICAgIH1cclxuICAgICAgYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdtb2JpbGUnOlxyXG4gICAgICBhY2MubW9iaWxlID0gKC4uLmFyZ3M6IEJhY2tRdW90ZUFyZ3MpID0+IGNzc2BcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7c2l6ZXMudGFibGV0fXB4KSB7XHJcbiAgICAgICAgICAke2FyZ3N9XHJcbiAgICAgICAgfVxyXG4gICAgICBgO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICByZXR1cm4gYWNjO1xyXG59LCBtZWRpYSk7XHJcblxyXG5jb25zdCBjb2xvcnMgPSB7XHJcbiAgbWFpbjogJyMyNzJBMzQnLFxyXG4gIHN1YjogJyM3Mjc5ODUnLFxyXG4gIGJsYWNrOiAnIzIyMjIyMicsXHJcbiAgZ3JheTg6ICcjODg4ODg4JyxcclxuICBncmF5QTogJyNhYWFhYWEnLFxyXG4gIGdyYXlDOiAnI2NhY2FjYScsXHJcbiAgZ3JheUQ6ICcjZGFkY2UwJyxcclxuICBncmF5RTogJyNlOGVhZWQnLFxyXG4gIGdyYXlGOiAnI2Y1ZjVmNScsXHJcbiAgYmFja2dyb3VuZDogJyMyMTE1MTAnLFxyXG4gIGJvcmRlcjogJyM1MDQxMzcnLFxyXG4gIGJ1dHRvbjogJyM5ZjE2MDAnLFxyXG4gIGhvdmVyOiAnI2Y4YjcwMCcsXHJcbiAgcHJpbWFyeTogJyMxNzBlMDknLFxyXG4gIHNlY29uZGFyeTogJyNjNzdlMTknLFxyXG4gIHN1Y2Nlc3M6ICcjMTM3MzMzJyxcclxuICBkYW5nZXI6ICcjZWEzMDEyJyxcclxuICB3YXJuaW5nOiAnI2ZkY2M1ZScsXHJcbiAgaW5mbzogJyNmN2IxMGEnLFxyXG4gIHdoaXRlOiAnI2ZmZmZmZidcclxufTtcclxuXHJcbmNvbnN0IHNlY29uZGFyeUNvbG9ycyA9IHt9O1xyXG5jb25zdCBmb250RmFtaWx5ID0gWydNdXNlbyBTYW5zJywgJ05vdG8gU2FucycsICdBcmlhbCcsICdDb3VyaWVyJ10uam9pbignLCcpO1xyXG5jb25zdCBmb250U2l6ZXMgPSB7XHJcbiAgaDE6ICczMnB4JyxcclxuICBoMjogJzI0cHgnLFxyXG4gIGgzOiAnMjBweCcsXHJcbiAgc3VidGl0bGUxNjogJzE2cHgnLCAvLyAgaDRcclxuICBib2R5MTQ6ICcxNHB4JywgLy8gIGg1XHJcbiAgY2F0aW9uMTI6ICcxMnB4JyAvLyAgaDZcclxufTtcclxuXHJcbmNvbnN0IHRoZW1lID0ge1xyXG4gIGNvbG9ycyxcclxuICBmb250U2l6ZXMsXHJcbiAgZm9udEZhbWlseSxcclxuICBzZWNvbmRhcnlDb2xvcnMsXHJcbiAgbWVkaWFcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFRoZW1lID0gdHlwZW9mIHRoZW1lO1xyXG5leHBvcnQgY29uc3Qgc3R5bGVkID0gYmFzZVN0eWxlZCBhcyBUaGVtZWRTdHlsZWRJbnRlcmZhY2U8VGhlbWU+O1xyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcclxuIiwiaW1wb3J0ICogYXMgc3R5bGVkQ29tcG9uZW50cyBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi90aGVtZSc7XHJcblxyXG5jb25zdCB7XHJcbiAgZGVmYXVsdDogc3R5bGVkLFxyXG4gIGNzcyxcclxuICBrZXlmcmFtZXMsXHJcbiAgVGhlbWVQcm92aWRlclxyXG59ID0gc3R5bGVkQ29tcG9uZW50cyBhcyBzdHlsZWRDb21wb25lbnRzLlRoZW1lZFN0eWxlZENvbXBvbmVudHNNb2R1bGU8VGhlbWU+O1xyXG5cclxuZXhwb3J0IHsgY3NzLCBrZXlmcmFtZXMsIFRoZW1lUHJvdmlkZXIgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1yZXNldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9