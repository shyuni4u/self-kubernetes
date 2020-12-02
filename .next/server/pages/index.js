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

/***/ "./components/organisms/ClusterChart.tsx":
/*!***********************************************!*\
  !*** ./components/organisms/ClusterChart.tsx ***!
  \***********************************************/
/*! exports provided: ClusterChart, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterChart", function() { return ClusterChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_setting_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/setting.json */ "./lib/setting.json");
var _lib_setting_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../lib/setting.json */ "./lib/setting.json", 1);
/* harmony import */ var _ClusterChartItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClusterChartItem */ "./components/organisms/ClusterChartItem.tsx");
var _jsxFileName = "C:\\Users\\shyuniz\\Desktop\\moreh\\self-kubernetes\\components\\organisms\\ClusterChart.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const marginCW = 10;
const StyledClusterWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "ClusterChart__StyledClusterWrapper",
  componentId: "sc-1th5jxm-0"
})(["width:calc(100% - ", "px);margin:0 ", "px 30px;&:last-child{margin-bottom:5px;}"], marginCW * 2, marginCW);
const StyledClusterItemWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.article.withConfig({
  displayName: "ClusterChart__StyledClusterItemWrapper",
  componentId: "sc-1th5jxm-1"
})(["display:flex;flex-wrap:wrap;"]);
const ClusterChart = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _lib_setting_json__WEBPACK_IMPORTED_MODULE_2__.clusters.map((cluster, clusterIndex) => __jsx(StyledClusterWrapper, {
    key: clusterIndex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Cluster: ", cluster.name), __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx(StyledClusterItemWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, cluster.nodes.map((node, nodeIndex) => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: `${clusterIndex}-${nodeIndex}-${node.name}-${node.type}-${node.ip}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, __jsx(_ClusterChartItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: node.name,
    type: node.type,
    ip: node.ip,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (ClusterChart);

/***/ }),

/***/ "./components/organisms/ClusterChartItem.tsx":
/*!***************************************************!*\
  !*** ./components/organisms/ClusterChartItem.tsx ***!
  \***************************************************/
/*! exports provided: ClusterChartItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterChartItem", function() { return ClusterChartItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var echarts_for_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts-for-react */ "echarts-for-react");
/* harmony import */ var echarts_for_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(echarts_for_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! echarts */ "echarts");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_utilMethods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/utilMethods */ "./lib/utilMethods.tsx");
/* harmony import */ var _lib_setting_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/setting.json */ "./lib/setting.json");
var _lib_setting_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../lib/setting.json */ "./lib/setting.json", 1);
var _jsxFileName = "C:\\Users\\shyuniz\\Desktop\\moreh\\self-kubernetes\\components\\organisms\\ClusterChartItem.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const StyledItemWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ClusterChartItem__StyledItemWrapper",
  componentId: "sc-1upiinl-0"
})(["position:relative;flex:0 0 400px;border:1px solid #fff;margin:5px;padding-top:100px;"]);
const StyledItemTitle = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ClusterChartItem__StyledItemTitle",
  componentId: "sc-1upiinl-1"
})(["position:absolute;display:flex;align-items:center;top:5px;left:5px;color:#fff;font-size:14px;user-select:none;& > .upper{text-transform:uppercase;margin-right:5px;}"]);
const StyledItemLegendList = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul.withConfig({
  displayName: "ClusterChartItem__StyledItemLegendList",
  componentId: "sc-1upiinl-2"
})(["position:absolute;top:35px;left:5px;width:calc(400px - 10px);max-height:60px;overflow-y:auto;color:#fff;font-size:14px;user-select:none;border-top:1px solid #ccc;border-bottom:1px solid #ccc;& > li{display:flex;align-items:center;}"]);
const StyledItemChartWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ClusterChartItem__StyledItemChartWrapper",
  componentId: "sc-1upiinl-3"
})(["width:400px;display:flex;flex-wrap:wrap;"]);
const StyledConnectionStatusWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ClusterChartItem__StyledConnectionStatusWrapper",
  componentId: "sc-1upiinl-4"
})(["position:absolute;display:flex;align-items:center;top:5px;right:5px;color:#fff;font-size:10px;user-select:none;z-index:1;cursor:zoom-in;&:hover{font-size:14px;}"]);
const StyledConnectionStatus = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ClusterChartItem__StyledConnectionStatus",
  componentId: "sc-1upiinl-5"
})(["width:10px;height:10px;border-radius:50%;margin-right:4px;"]);
const CHART_X_SIZE = 50;

const settingAxios = ip => {
  const conn = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: ip,
    timeout: 10 * 1000
  });
  conn.interceptors.request.use(config => {
    config.params = {
      startTime: new Date()
    };
    return config;
  }, error => {
    return Promise.reject(error);
  });
  conn.interceptors.response.use(response => {
    response.config.params.endTime = new Date();
    response.config.params.duration = response.config.params.endTime - response.config.params.startTime;
    return response;
  }, error => {
    error.config.params.endTime = new Date();
    error.config.params.duration = error.config.params.endTime - error.config.params.startTime;
    return Promise.reject(error);
  });
  return conn;
};

const findTreeInNvidia = (jsonObject, search) => {
  const token = '>';

  if (search.indexOf(token) < 0) {
    return jsonObject[search];
  } else {
    const target = search.substr(0, search.indexOf(token));
    const param = search.substr(search.indexOf(token) + token.length);

    if (typeof jsonObject[target] === 'object') {
      return findTreeInNvidia(jsonObject[target], param);
    } else if (typeof jsonObject[target] === 'string') {
      return jsonObject[target];
    }
  }

  return undefined;
};

const ClusterChartItem = ({
  name,
  type,
  ip
}) => {
  const conn = settingAxios(ip);
  const {
    0: duration,
    1: setDuration
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1);
  const {
    0: result,
    1: setResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const {
    0: latency,
    1: setLatency
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1);
  const {
    0: amdGpuList,
    1: setAmdGpuList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: gpuNameList,
    1: setGpuNameList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: chartData,
    1: setChartData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const envAMD = _lib_setting_json__WEBPACK_IMPORTED_MODULE_6__.amd;
  const envNVIDIA = _lib_setting_json__WEBPACK_IMPORTED_MODULE_6__.nvidia;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let unmount = false;

    const onLoadApi = () => {
      const url = type === 'amd' ? `/${type}/api/min` : `/${type}/api`;
      conn.get(url).then(response => {
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
      }).catch(error => {
        if (unmount) return;
        setDuration(-1);
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
  }, []); // for AMD

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (type === 'amd' && amdGpuList.length > 0) {
      if (result) {
        setGpuNameList(amdGpuList.filter(device => device !== 'system').map(device => result.data.smiResult[device][envAMD.deviceName]));
      }

      const tempArray = [];

      if (chartData.length === 0) {
        for (let n = 0; n < CHART_X_SIZE; n++) {
          tempArray.push({
            x: '',
            value: envAMD.chartItem.map(() => amdGpuList.map(() => '0'))
          });
        }

        setChartData([...tempArray]);
      }
    }
  }, [amdGpuList]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (result) {
      if (type === 'amd' && amdGpuList.length > 0 && chartData.length > 0) {
        const data = result.data.smiResult;
        const tempArray = chartData;
        const tempValue = {
          x: _lib_utilMethods__WEBPACK_IMPORTED_MODULE_5__["default"].getMMSS(),
          value: envAMD.chartItem.map(() => amdGpuList.map(() => '0'))
        };
        amdGpuList.forEach((device, deviceIndex) => {
          if (device === 'system') return;
          envAMD.chartItem.forEach((el, idx) => {
            if (data[device][el] === undefined) {} else {
              tempValue.value[idx][deviceIndex] = data[device][el];
            }
          });
        });
        if (tempArray.length >= CHART_X_SIZE) tempArray.shift();
        tempArray.push(tempValue);
        setChartData(tempArray);
      }

      if (type === 'nvidia') {
        const data = result.gpu;

        if (chartData.length === 0) {
          const tempArray = [];

          for (let n = 0; n < CHART_X_SIZE; n++) {
            tempArray.push({
              x: '',
              value: envNVIDIA.chartItem.map(() => data.map(() => '0'))
            });
          }

          tempArray[CHART_X_SIZE - 1] = {
            x: _lib_utilMethods__WEBPACK_IMPORTED_MODULE_5__["default"].getMMSS(),
            value: envNVIDIA.chartItem.map(itemTree => {
              return data.map((_, deviceIndex) => {
                return findTreeInNvidia(data[deviceIndex], itemTree);
              });
            })
          };
          setChartData([...tempArray]);
        } else {
          const tempArray = chartData;
          const tempValue = {
            x: _lib_utilMethods__WEBPACK_IMPORTED_MODULE_5__["default"].getMMSS(),
            value: envNVIDIA.chartItem.map(itemTree => {
              return data.map((_, deviceIndex) => {
                return findTreeInNvidia(data[deviceIndex], itemTree);
              });
            })
          };
          if (tempArray.length >= CHART_X_SIZE) tempArray.shift();
          tempArray.push(tempValue);
          setChartData(tempArray);
        }
      }
    }
  }, [result]);

  const getOption = (data, envType, envTypeIndex) => {
    let parseValue = [];

    if (type === 'amd') {
      parseValue = amdGpuList.filter(device => device !== 'system').map((_, deviceIndex) => {
        const color = _lib_utilMethods__WEBPACK_IMPORTED_MODULE_5__["default"].colors[deviceIndex % _lib_utilMethods__WEBPACK_IMPORTED_MODULE_5__["default"].colors.length];
        return {
          name: gpuNameList[deviceIndex],
          data: data.map(item => parseInt(item.value[envTypeIndex][deviceIndex], 10)),
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          itemStyle: {
            color: color
          },
          symbol: 'circle',
          symbolSize: 5,
          areaStyle: {
            opacity: 0.2,
            color: new echarts__WEBPACK_IMPORTED_MODULE_4___default.a.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: color
            }, {
              offset: 1,
              color: '#211510'
            }])
          }
        };
      });
    }

    if (type === 'nvidia') {
      parseValue = result.gpu.map((device, deviceIndex) => {
        const color = _lib_utilMethods__WEBPACK_IMPORTED_MODULE_5__["default"].colors[deviceIndex % _lib_utilMethods__WEBPACK_IMPORTED_MODULE_5__["default"].colors.length];
        return {
          name: device[envNVIDIA.deviceName],
          data: data.map(item => parseInt(item.value[envTypeIndex][deviceIndex], 10)),
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          itemStyle: {
            color: color
          },
          symbol: 'circle',
          symbolSize: 5,
          areaStyle: {
            opacity: 0.2,
            color: new echarts__WEBPACK_IMPORTED_MODULE_4___default.a.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: color
            }, {
              offset: 1,
              color: '#211510'
            }])
          }
        };
      });
    }

    return {
      title: {
        text: `${envType}`,
        textStyle: {
          color: '#ccc',
          fontSize: 11
        }
      },
      grid: {
        top: 35,
        left: 30,
        right: 10,
        bottom: 30
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'category',
        splitLine: {
          show: false
        },
        axisLabel: {
          color: '#aaa',
          fontFamily: 'SpoqaHanSans-Regular'
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        data: data.map(item => item.x)
      },
      yAxis: {
        type: 'value',
        boundaryGap: false,
        splitLine: {
          show: false
        },
        axisLabel: {
          color: '#ddd',
          fontFamily: 'SpoqaHanSans-Regular'
        } // min: 'dataMin',
        // max: 'dataMax'

      },
      series: parseValue
    };
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(StyledItemWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 7
    }
  }, __jsx(StyledItemTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: 'upper',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 11
    }
  }, "[", type, "]"), name), __jsx(StyledItemLegendList, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 9
    }
  }, type === 'nvidia' && result && result.gpu && result.gpu.length > 0 && result.gpu.map((device, deviceIndex) => __jsx("li", {
    key: deviceIndex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 15
    }
  }, __jsx("div", {
    style: {
      backgroundColor: _lib_utilMethods__WEBPACK_IMPORTED_MODULE_5__["default"].colors[deviceIndex % _lib_utilMethods__WEBPACK_IMPORTED_MODULE_5__["default"].colors.length],
      width: '10px',
      height: '10px',
      borderRadius: '2px',
      margin: '4px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 17
    }
  }), device[envNVIDIA.deviceName])), type === 'amd' && gpuNameList.length > 0 && gpuNameList.map((gpuName, gpuNameIndex) => __jsx("li", {
    key: gpuNameIndex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 15
    }
  }, __jsx("div", {
    style: {
      backgroundColor: _lib_utilMethods__WEBPACK_IMPORTED_MODULE_5__["default"].colors[gpuNameIndex % _lib_utilMethods__WEBPACK_IMPORTED_MODULE_5__["default"].colors.length],
      width: '10px',
      height: '10px',
      borderRadius: '2px',
      margin: '4px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 17
    }
  }), gpuName))), __jsx(StyledItemChartWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 9
    }
  }, type === 'nvidia' && chartData.length > 0 && envNVIDIA.chartItem.map((envType, envTypeIndex) => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: `${name}-${type}-${envTypeIndex}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 15
    }
  }, __jsx(echarts_for_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
    option: getOption(chartData, envType, envTypeIndex),
    notMerge: true,
    lazyUpdate: true,
    style: {
      height: '180px',
      width: '200px'
    } // opts={{ renderer: 'svg' }}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 17
    }
  }))), type === 'amd' && result && result.data && chartData.length > 0 && envAMD.chartItem.map((envType, envTypeIndex) => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: `${name}-${type}-${envTypeIndex}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 15
    }
  }, __jsx(echarts_for_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
    option: getOption(chartData, envType, envTypeIndex),
    notMerge: true,
    lazyUpdate: true,
    style: {
      height: '180px',
      width: '200px'
    } // opts={{ renderer: 'svg' }}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 17
    }
  })))), __jsx(StyledConnectionStatusWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 9
    }
  }, __jsx(StyledConnectionStatus, {
    style: {
      backgroundColor: duration === -1 ? 'red' : 'green'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 11
    }
  }), ' ', duration === -1 ? '' : `${duration / 1000}s`, " (", latency === -1 ? '' : `${latency / 1000}s`, ")")));
};
/* harmony default export */ __webpack_exports__["default"] = (ClusterChartItem);

/***/ }),

/***/ "./components/organisms/ClusterHex.tsx":
/*!*********************************************!*\
  !*** ./components/organisms/ClusterHex.tsx ***!
  \*********************************************/
/*! exports provided: ClusterHex, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterHex", function() { return ClusterHex; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_setting_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/setting.json */ "./lib/setting.json");
var _lib_setting_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../lib/setting.json */ "./lib/setting.json", 1);
/* harmony import */ var _ClusterHexItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClusterHexItem */ "./components/organisms/ClusterHexItem.tsx");
var _jsxFileName = "C:\\Users\\shyuniz\\Desktop\\moreh\\self-kubernetes\\components\\organisms\\ClusterHex.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const marginCW = 10;
const StyledClusterWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "ClusterHex__StyledClusterWrapper",
  componentId: "sc-1swt1s-0"
})(["width:calc(100% - ", "px);margin:0 ", "px 30px;&:last-child{margin-bottom:5px;}"], marginCW * 2, marginCW);
const StyledClusterItemWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.article.withConfig({
  displayName: "ClusterHex__StyledClusterItemWrapper",
  componentId: "sc-1swt1s-1"
})(["display:flex;flex-wrap:wrap;"]);

const customStyles = selectType => {
  return {
    option: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
      borderBottom: '1px dotted pink',
      color: state.isSelected ? '#999' : '#333'
    }),
    container: provided => _objectSpread(_objectSpread({}, provided), {}, {
      width: selectType === 'fil' ? '300px' : '100px',
      marginLeft: '10px'
    })
  };
};

const ClusterHex = () => {
  const filterOptions = _lib_setting_json__WEBPACK_IMPORTED_MODULE_3__.filterOption;
  const rangeOptions = [{
    value: 'avg',
    label: 'AVG'
  }, {
    value: 'max',
    label: 'MAX'
  }, {
    value: 'min',
    label: 'MIN'
  }];
  const defaultFilter = 2;
  const defaultRange = 0;
  const {
    0: filter,
    1: setFilter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(filterOptions[defaultFilter].value);
  const {
    0: range,
    1: setRange
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(rangeOptions[defaultRange].value);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      display: 'flex',
      marginBottom: '20px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_2___default.a, {
    instanceId: 'filter_option',
    styles: customStyles('fil'),
    options: filterOptions,
    onChange: e => setFilter(e['value']),
    defaultValue: filterOptions[defaultFilter],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx(react_select__WEBPACK_IMPORTED_MODULE_2___default.a, {
    instanceId: 'value_option',
    styles: customStyles('range'),
    options: rangeOptions,
    onChange: e => setRange(e['value']),
    defaultValue: rangeOptions[defaultRange],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  })), _lib_setting_json__WEBPACK_IMPORTED_MODULE_3__.clusters.map((cluster, clusterIndex) => __jsx(StyledClusterWrapper, {
    key: clusterIndex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "Cluster: ", cluster.name), __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }), __jsx(StyledClusterItemWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, cluster.nodes.map((node, nodeIndex) => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: `${clusterIndex}-${nodeIndex}-${node.name}-${node.type}-${node.ip}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx(_ClusterHexItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: node.name,
    type: node.type,
    ip: node.ip,
    filter: filter,
    range: range,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (ClusterHex);

/***/ }),

/***/ "./components/organisms/ClusterHexItem.tsx":
/*!*************************************************!*\
  !*** ./components/organisms/ClusterHexItem.tsx ***!
  \*************************************************/
/*! exports provided: ClusterHexItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterHexItem", function() { return ClusterHexItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_setting_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/setting.json */ "./lib/setting.json");
var _lib_setting_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../lib/setting.json */ "./lib/setting.json", 1);
var _jsxFileName = "C:\\Users\\shyuniz\\Desktop\\moreh\\self-kubernetes\\components\\organisms\\ClusterHexItem.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const hoverSize = {
  width: 400,
  height: 200
};
const StyledItemWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ClusterHexItem__StyledItemWrapper",
  componentId: "sc-1utj8fj-0"
})(["position:relative;flex:0 0 60px;height:60px;border:2px solid #999;border-top-right-radius:15px;border-bottom-left-radius:15px;margin:2px;background-color:", ";user-select:none;cursor:pointer;"], props => props.connect ? '#ffe996' : 'transparent');
const StyledValueStatus = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ClusterHexItem__StyledValueStatus",
  componentId: "sc-1utj8fj-1"
})(["position:absolute;top:0px;left:0px;width:100%;height:100%;background-color:#e1272c;border-top-right-radius:15px;border-bottom-left-radius:15px;opacity:", ";"], props => props.value ? props.value : 0);
const StyledConnectionStatus = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ClusterHexItem__StyledConnectionStatus",
  componentId: "sc-1utj8fj-2"
})(["border-radius:50%;position:absolute;top:4px;left:4px;width:10px;height:10px;border:1px solid #888;background-color:", ";"], props => props.connect ? 'green' : 'red');
const StyledHoverContent = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ClusterHexItem__StyledHoverContent",
  componentId: "sc-1utj8fj-3"
})(["display:", ";position:absolute;width:", "px;height:", "px;top:10px;left:10px;z-index:1;", ""], props => props.hover ? 'block' : 'none', hoverSize.width, hoverSize.height, props => {
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
const StyledHoverContentBodyWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul.withConfig({
  displayName: "ClusterHexItem__StyledHoverContentBodyWrapper",
  componentId: "sc-1utj8fj-4"
})(["display:flex;flex-wrap:wrap;align-items:bottom;width:", "px;height:", "px;overflow:auto;padding:10px;border:2px solid ", ";border-radius:10px;background-color:", ";& > li{border-bottom:1px solid #eee;}& > li.subject{flex:0 0 70%;font-weight:600;text-align:right;padding-right:10px;}& > li.value{flex:0 0 30%;text-align:right;border-left:1px solid #eee;}"], hoverSize.width, hoverSize.height, ({
  theme
}) => theme.colors.hover, ({
  theme
}) => theme.colors.border);

const settingAxios = ip => {
  const conn = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: ip,
    timeout: 10 * 1000
  });
  conn.interceptors.request.use(config => {
    config.params = {
      startTime: new Date()
    };
    return config;
  }, error => {
    return Promise.reject(error);
  });
  conn.interceptors.response.use(response => {
    response.config.params.endTime = new Date();
    response.config.params.duration = response.config.params.endTime - response.config.params.startTime;
    return response;
  }, error => {
    error.config.params.endTime = new Date();
    error.config.params.duration = error.config.params.endTime - error.config.params.startTime;
    return Promise.reject(error);
  });
  return conn;
};

const findTreeInNvidia = (jsonObject, search) => {
  const token = '>';

  if (search.indexOf(token) < 0) {
    return jsonObject[search];
  } else {
    const target = search.substr(0, search.indexOf(token));
    const param = search.substr(search.indexOf(token) + token.length);

    if (typeof jsonObject[target] === 'object') {
      return findTreeInNvidia(jsonObject[target], param);
    } else if (typeof jsonObject[target] === 'string') {
      return jsonObject[target];
    }
  }

  return undefined;
};

const ClusterHexItem = ({
  name,
  type,
  ip,
  filter,
  range
}) => {
  const conn = settingAxios(ip);
  const filtered = _lib_setting_json__WEBPACK_IMPORTED_MODULE_3__.filterOption.filter(el => el.value === filter);
  const {
    0: duration,
    1: setDuration
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1);
  const {
    0: result,
    1: setResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const {
    0: latency,
    1: setLatency
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1);
  const {
    0: amdGpuList,
    1: setAmdGpuList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: hover,
    1: setHover
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  const envAMD = _lib_setting_json__WEBPACK_IMPORTED_MODULE_3__.amd;
  const envNVIDIA = _lib_setting_json__WEBPACK_IMPORTED_MODULE_3__.nvidia;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let unmount = false;

    const onLoadApi = () => {
      const url = type === 'amd' ? `/${type}/api/min` : `/${type}/api`;
      conn.get(url).then(response => {
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
      }).catch(error => {
        if (unmount) return;
        setDuration(-1);
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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (result) {
      if (type === 'amd' && amdGpuList.length > 0) {
        const data = result.data.smiResult;
        const tempArray = [];
        amdGpuList.forEach(device => {
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
        const data = result.gpu;
        const tempArray = [];
        data.forEach((device, deviceIndex) => {
          tempArray.push({
            name: device[envNVIDIA.deviceName],
            value: findTreeInNvidia(data[deviceIndex], filtered[0].nvidia)
          });
        });
        setValues(tempArray);
      }
    }
  }, [result]);

  const getParseValue = () => {
    if (values.length === 0) return 0;

    switch (range) {
      case 'avg':
        let sum = 0;
        values.forEach(el => sum += parseInt(el.value, 10));
        return sum / values.length || 0;

      case 'max':
        let max = -Infinity;
        values.forEach(el => max = Math.max(max, parseInt(el.value, 10)));
        return max;

      case 'min':
        let min = Infinity;
        values.forEach(el => min = Math.min(min, parseInt(el.value, 10)));
        return min;

      default:
        return 0;
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(StyledItemWrapper // key={key}
  , {
    connect: duration !== -1,
    value: 0,
    onMouseEnter: e => setHover({
      x: e.clientX,
      y: e.clientY
    }),
    onMouseLeave: () => setHover(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 7
    }
  }, __jsx(StyledValueStatus, {
    value: getParseValue() * 0.01,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 9
    }
  }), __jsx(StyledConnectionStatus, {
    connect: duration !== -1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 9
    }
  }), __jsx(StyledHoverContent, {
    hover: hover,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 9
    }
  }, __jsx(StyledHoverContentBodyWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: 'subject',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 13
    }
  }, "Name"), __jsx("li", {
    className: 'value',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 13
    }
  }, name), __jsx("li", {
    className: 'subject',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 13
    }
  }, "Network"), __jsx("li", {
    className: 'value',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 13
    }
  }, duration === -1 ? '' : `${duration / 1000}s`), __jsx("li", {
    className: 'subject',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 13
    }
  }, "Command"), __jsx("li", {
    className: 'value',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 13
    }
  }, latency === -1 ? '' : `${latency / 1000}s`), values.map((el, elIndex) => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: elIndex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 15
    }
  }, __jsx("li", {
    className: 'subject',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 17
    }
  }, el.name), __jsx("li", {
    className: 'value',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 17
    }
  }, el.value)))))));
};
/* harmony default export */ __webpack_exports__["default"] = (ClusterHexItem);

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
/*! exports provided: clusters, amd, nvidia, filterOption, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"clusters\":[{\"name\":\"Moreh Test 1\",\"nodes\":[{\"name\":\"p100\",\"type\":\"nvidia\",\"ip\":\"http://147.46.219.42:35100\"},{\"name\":\"rx52\",\"type\":\"amd\",\"ip\":\"http://147.46.219.61:35100\"},{\"name\":\"rx51:35100\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35100\"},{\"name\":\"rx51:35101\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35101\"},{\"name\":\"rx51:35102\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35102\"},{\"name\":\"rx51:35103\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35103\"},{\"name\":\"rx51:35104\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35104\"},{\"name\":\"rx51:35105\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35105\"},{\"name\":\"rx51:35106\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35106\"},{\"name\":\"rx51:35107\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35107\"},{\"name\":\"rx51:35108\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35108\"},{\"name\":\"rx51:35109\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35109\"},{\"name\":\"rx51:35110\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35110\"},{\"name\":\"rx51:35111\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35111\"},{\"name\":\"rx51:35112\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35112\"},{\"name\":\"rx51:35113\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35113\"},{\"name\":\"rx51:35114\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35114\"},{\"name\":\"rx51:35115\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35115\"},{\"name\":\"rx51:35116\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35116\"},{\"name\":\"rx51:35117\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35117\"},{\"name\":\"rx51:35118\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35118\"},{\"name\":\"rx51:35119\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35119\"},{\"name\":\"rx51:35120\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35120\"},{\"name\":\"rx51:35121\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35121\"},{\"name\":\"rx51:35122\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35122\"},{\"name\":\"rx51:35123\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35123\"},{\"name\":\"rx51:35124\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35124\"},{\"name\":\"rx51:35125\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35125\"},{\"name\":\"rx51:35126\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35126\"},{\"name\":\"rx51:35127\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35127\"},{\"name\":\"rx51:35128\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35128\"},{\"name\":\"rx51:35129\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35129\"}]},{\"name\":\"Moreh Test 2\",\"nodes\":[{\"name\":\"rx51:35130\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35130\"},{\"name\":\"rx51:35131\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35131\"},{\"name\":\"rx51:35132\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35132\"},{\"name\":\"rx51:35133\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35133\"},{\"name\":\"rx51:35134\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35134\"},{\"name\":\"rx51:35135\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35135\"},{\"name\":\"rx51:35136\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35136\"},{\"name\":\"rx51:35137\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35137\"},{\"name\":\"rx51:35138\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35138\"},{\"name\":\"rx51:35139\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35139\"},{\"name\":\"rx51:35140\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35140\"},{\"name\":\"rx51:35141\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35141\"},{\"name\":\"rx51:35142\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35142\"},{\"name\":\"rx51:35143\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35143\"},{\"name\":\"rx51:35144\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35144\"},{\"name\":\"rx51:35145\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35145\"},{\"name\":\"rx51:35146\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35146\"},{\"name\":\"rx51:35147\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35147\"},{\"name\":\"rx51:35148\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35148\"},{\"name\":\"rx51:35149\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35149\"},{\"name\":\"rx51:35150\",\"type\":\"amd\",\"ip\":\"http://147.46.219.60:35150\"}]}],\"amd\":{\"deviceName\":\"Card series\",\"chartItem\":[\"Temperature (Sensor junction) (C)\",\"Temperature (Sensor mem) (C)\",\"GPU use (%)\",\"GPU memory use (%)\"]},\"nvidia\":{\"deviceName\":\"product_name\",\"chartItem\":[\"temperature>gpu_temp\",\"temperature>memory_temp\",\"utilization>gpu_util\",\"utilization>memory_util\"]},\"filterOption\":[{\"value\":\"Temperature (Sensor junction) (C)\",\"label\":\"Temperature (Sensor junction) (C)\"},{\"value\":\"Temperature (Sensor mem) (C)\",\"label\":\"Temperature (Sensor mem) (C)\"},{\"value\":\"GPU use (%)\",\"label\":\"GPU use (%)\"},{\"value\":\"GPU memory use (%)\",\"label\":\"GPU memory use (%)\"}]}");

/***/ }),

/***/ "./lib/utilMethods.tsx":
/*!*****************************!*\
  !*** ./lib/utilMethods.tsx ***!
  \*****************************/
/*! exports provided: Util, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
// import JSZip from 'jszip'
// import { saveAs } from 'file-saver'
// import xml from 'xmlserializer'
const Util = {
  colors: ['#9d96f5', '#e7bcf3', '#e690d1', '#fb7293', '#ff9f7f', '#ffdb5c', '#9fe6b8', '#67e0e3', '#37a2da', '#4424A7', '#8378ea', '#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C', '#FF9F7F', '#FB7293', '#E062AE', '#E690D1', '#E7BCF3', '#9D96F5', '#8378EA', '#96BFFF'],
  getYYYYMMDD: () => {
    const pad2 = n => {
      return n < 10 ? '0' + n : n;
    };

    const date = new Date();
    return date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) + pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds());
  },
  getMMSS: () => {
    const pad2 = n => {
      return n < 10 ? '0' + n : n;
    };

    const date = new Date();
    return '' + pad2(date.getMinutes()) + ':' + pad2(date.getSeconds());
  },
  exportCSVFile: (csv, fileName, header) => {
    if (header) csv = [header, csv].join('\n');
    const fileType = 'txt/csv;charset=utf-8';
    const e = document.createElement('a');
    e.setAttribute('href', 'data:' + fileType + ',' + encodeURIComponent(csv));
    e.setAttribute('download', fileName);
    e.style.display = 'none';
    document.body.appendChild(e);
    e.click();
    document.body.removeChild(e);
  },
  zeroPad: (num, numZeros) => {
    const n = Math.abs(num);
    const zeros = Math.max(0, numZeros - Math.floor(n).toString().length);
    let zeroString = Math.pow(10, zeros).toString().substr(1);

    if (num < 0) {
      zeroString = '-' + zeroString;
    }

    return zeroString + n;
  },
  isFloat: val => {
    return Number(val) === parseFloat(val) && Number(val) % 1 !== 0;
  },
  isInteger: val => {
    return Number(val) === parseInt(val, 10);
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getHeader: item => {
    const temp = [];

    for (const [key] of Object.entries(item)) {
      temp.push(key);
    }

    return temp;
  },
  getIndexArray: (max, includeMax = false) => {
    const arr = [];

    for (let idx = 0; idx < max; idx++) {
      arr.push(idx);
    }

    if (includeMax) arr.push(max);
    return arr;
  },
  getFileNameFromPath: fullPath => {
    return fullPath.replace(/^.*[\\/]/, '');
  }
}; // type ChartOption = {
//   ratio?: string;
//   addNumberingName?: string;
//   chartType?: string;
// };
// export const Chart = {
//   /**
//    * @param chartSource source of used echart.
//    * @param chartName chart name, used finding chart class. (ex. ${chartSource[n][chartName]}-mcs-chart).
//    * if you used only string chart-name, then chartName is ''
//    * if chartName === '' then can't use option.addNumberingName
//    * @param zipName zip file name
//    * @param success callback function when success
//    * @param option { ChartOption }
//    */
//   downloadZip: (
//     chartSource: any[],
//     chartName: string,
//     zipName: string,
//     success: () => void,
//     option?: ChartOption): void => {
//     const _option: ChartOption = { ratio: '100', chartType: 'canvas', ...option }
//     const zip = new JSZip()
//     if (chartName === '') {
//       for (const n in chartSource) {
//         const wrapper = document.getElementsByClassName(`${chartSource[n]}-mcs-chart`)
//         if (wrapper) {
//           if (_option.chartType === 'svg') {
//             const svg = wrapper[0].getElementsByTagName('svg')[0]
//             const copySVG = svg.cloneNode(true) as SVGSVGElement
//             const s = xml.serializeToString(copySVG)
//             zip.file(`${chartSource[n]}.svg`, s)
//           } else {
//             const canvas = wrapper[0].getElementsByTagName('canvas')[0]
//             const resizeCanvas = document.createElement('canvas')
//             const ctx = resizeCanvas.getContext('2d')
//             if (ctx) {
//               const _w = Math.round(canvas.getBoundingClientRect().width * (parseInt(_option.ratio || '100', 10) / 100))
//               const _h = Math.round(canvas.getBoundingClientRect().height * (parseInt(_option.ratio || '100', 10) / 100))
//               resizeCanvas.width = _w
//               resizeCanvas.height = _h
//               ctx.drawImage(canvas, 0, 0, _w, _h)
//             }
//             const base64Image = resizeCanvas.toDataURL().replace(/^data:image\/(png|jpg);base64,/, '')
//             zip.file(`${chartSource[n]}.png`, base64Image, { base64: true })
//           }
//         }
//       }
//     } else {
//       for (const n in chartSource) {
//         const wrapper = document.getElementsByClassName(`${chartSource[n][chartName]}-mcs-chart`)
//         if (wrapper) {
//           if (_option.chartType === 'svg') {
//             const svg = wrapper[0].getElementsByTagName('svg')[0]
//             const copySVG = svg.cloneNode(true) as SVGSVGElement
//             copySVG.setAttribute('background-color', '#fff')
//             // console.log(copySVG.viewBox.baseVal)
//             const s = xml.serializeToString(copySVG)
//             zip.file(`${chartSource[n][chartName]}.svg`, s)
//           } else {
//             const canvas = wrapper[0].getElementsByTagName('canvas')[0]
//             const resizeCanvas = document.createElement('canvas')
//             const ctx = resizeCanvas.getContext('2d')
//             if (ctx) {
//               const _w = Math.round(canvas.getBoundingClientRect().width * (parseInt(_option.ratio || '100', 10) / 100))
//               const _h = Math.round(canvas.getBoundingClientRect().height * (parseInt(_option.ratio || '100', 10) / 100))
//               resizeCanvas.width = _w
//               resizeCanvas.height = _h
//               ctx.drawImage(canvas, 0, 0, _w, _h)
//             }
//             const base64Image = resizeCanvas.toDataURL().replace(/^data:image\/(png|jpg);base64,/, '')
//             if (_option.addNumberingName) {
//               zip.file(`${Util.zeroPad(chartSource[n][_option.addNumberingName], 5)}_${chartSource[n][chartName]}.png`, base64Image, { base64: true })
//             } else {
//               zip.file(`${chartSource[n][chartName]}.png`, base64Image, { base64: true })
//             }
//           }
//         }
//       }
//     }
//     zip.generateAsync({ type: 'blob' }).then(content => {
//       saveAs(content, `${zipName}.zip`)
//       success()
//     })
//   },
//   colors: ['#4424A7', '#8378ea', '#9d96f5', '#e7bcf3', '#e690d1', '#fb7293', '#ff9f7f', '#ffdb5c', '#9fe6b8', '#67e0e3', '#37a2da']
// }

/* harmony default export */ __webpack_exports__["default"] = (Util);

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
/* harmony import */ var _components_organisms_ClusterChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/organisms/ClusterChart */ "./components/organisms/ClusterChart.tsx");
/* harmony import */ var _components_organisms_ClusterHex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/organisms/ClusterHex */ "./components/organisms/ClusterHex.tsx");
var _jsxFileName = "C:\\Users\\shyuniz\\Desktop\\moreh\\self-kubernetes\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








let ClusterMode;

(function (ClusterMode) {
  ClusterMode["none"] = "";
  ClusterMode["hex"] = "hex";
  ClusterMode["chart"] = "chart";
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(ClusterMode.hex);
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
      lineNumber: 92,
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
      lineNumber: 99,
      columnNumber: 7
    }
  }, "Admin Page"), __jsx("nav", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx(_components_atoms_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    primary: moreh,
    onClick: () => setMoreh(prev => !prev),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, moreh ? 'Moreh > User' : 'User > Moreh'), !moreh && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_atoms_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      backgroundColor: mode === ClusterMode.hex ? '#b06601' : '',
      color: mode === ClusterMode.hex ? '#ffd36b' : ''
    },
    onClick: () => setMode(ClusterMode.hex),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, "hex"), __jsx(_components_atoms_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      backgroundColor: mode === ClusterMode.chart ? '#b06601' : '',
      color: mode === ClusterMode.chart ? '#ffd36b' : ''
    },
    onClick: () => setMode(ClusterMode.chart),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, "chart"))), !moreh && mode === ClusterMode.chart && __jsx(_components_organisms_ClusterChart__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 48
    }
  }), !moreh && mode === ClusterMode.hex && __jsx(_components_organisms_ClusterHex__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 46
    }
  }), moreh && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_organisms_Todo__WEBPACK_IMPORTED_MODULE_3__["Todo"], _extends({}, etc, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  })), __jsx(_components_organisms_Todo__WEBPACK_IMPORTED_MODULE_3__["Todo"], _extends({}, doc, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  })), __jsx(_components_organisms_Todo__WEBPACK_IMPORTED_MODULE_3__["Todo"], _extends({}, nvidia, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  })), __jsx(_components_organisms_Todo__WEBPACK_IMPORTED_MODULE_3__["Todo"], _extends({}, amd, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  })), __jsx(_components_organisms_Todo__WEBPACK_IMPORTED_MODULE_3__["Todo"], _extends({}, kubernetes, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
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

/***/ "echarts":
/*!**************************!*\
  !*** external "echarts" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("echarts");

/***/ }),

/***/ "echarts-for-react":
/*!************************************!*\
  !*** external "echarts-for-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("echarts-for-react");

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

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdG9tcy9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXRvbXMvUGFuZWwudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3JnYW5pc21zL0NsdXN0ZXJDaGFydC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ2x1c3RlckNoYXJ0SXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ2x1c3RlckhleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ2x1c3RlckhleEl0ZW0udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3JnYW5pc21zL1RvZG8udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3JnYW5pc21zL1dyYXBwZXIudHN4Iiwid2VicGFjazovLy8uL2xpYi91dGlsTWV0aG9kcy50c3giLCJ3ZWJwYWNrOi8vLy4vbG9jYWxlcy9pMThuLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2dsb2JhbC1zdHlsZXMudHN4Iiwid2VicGFjazovLy8uL3N0eWxlcy90aGVtZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3RoZW1lZC1jb21wb25lbnRzLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVjaGFydHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlY2hhcnRzLWZvci1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNlbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtcmVzZXRcIiJdLCJuYW1lcyI6WyJTdHlsZWRCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJhdHRycyIsInR5cGUiLCJCdXR0b24iLCJwcmltYXJ5Iiwic3R5bGUiLCJkaXNhYmxlZCIsInByb3BzIiwiY2hpbGRyZW4iLCJTdHlsZWRQYW5lbCIsImRpdiIsInRoZW1lIiwiY29sb3JzIiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsIndoaXRlIiwiU3R5bGVkUGFuZWxCb3giLCJTdHlsZWRQYW5lbENvbnRlbnQiLCJQYW5lbCIsIm1hcmdpbkNXIiwiU3R5bGVkQ2x1c3RlcldyYXBwZXIiLCJzZWN0aW9uIiwiU3R5bGVkQ2x1c3Rlckl0ZW1XcmFwcGVyIiwiYXJ0aWNsZSIsIkNsdXN0ZXJDaGFydCIsImNsdXN0ZXJJbmZvIiwiY2x1c3RlcnMiLCJtYXAiLCJjbHVzdGVyIiwiY2x1c3RlckluZGV4IiwibmFtZSIsIm5vZGVzIiwibm9kZSIsIm5vZGVJbmRleCIsImlwIiwiU3R5bGVkSXRlbVdyYXBwZXIiLCJTdHlsZWRJdGVtVGl0bGUiLCJTdHlsZWRJdGVtTGVnZW5kTGlzdCIsInVsIiwiU3R5bGVkSXRlbUNoYXJ0V3JhcHBlciIsIlN0eWxlZENvbm5lY3Rpb25TdGF0dXNXcmFwcGVyIiwiU3R5bGVkQ29ubmVjdGlvblN0YXR1cyIsIkNIQVJUX1hfU0laRSIsInNldHRpbmdBeGlvcyIsImNvbm4iLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJ0aW1lb3V0IiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsInBhcmFtcyIsInN0YXJ0VGltZSIsIkRhdGUiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsImVuZFRpbWUiLCJkdXJhdGlvbiIsImZpbmRUcmVlSW5OdmlkaWEiLCJqc29uT2JqZWN0Iiwic2VhcmNoIiwidG9rZW4iLCJpbmRleE9mIiwidGFyZ2V0Iiwic3Vic3RyIiwicGFyYW0iLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJDbHVzdGVyQ2hhcnRJdGVtIiwic2V0RHVyYXRpb24iLCJ1c2VTdGF0ZSIsInJlc3VsdCIsInNldFJlc3VsdCIsImxhdGVuY3kiLCJzZXRMYXRlbmN5IiwiYW1kR3B1TGlzdCIsInNldEFtZEdwdUxpc3QiLCJncHVOYW1lTGlzdCIsInNldEdwdU5hbWVMaXN0IiwiY2hhcnREYXRhIiwic2V0Q2hhcnREYXRhIiwiZW52QU1EIiwiU2V0dGluZyIsImFtZCIsImVudk5WSURJQSIsIm52aWRpYSIsInVzZUVmZmVjdCIsInVubW91bnQiLCJvbkxvYWRBcGkiLCJ1cmwiLCJnZXQiLCJ0aGVuIiwic3RhdHVzIiwiZGF0YSIsImNvbW1hbmREZWxheSIsInNtaVJlc3VsdCIsIm52aWRpYV9zbWlfbG9nIiwiY29uc29sZSIsIk9iamVjdCIsImtleXMiLCJjYXRjaCIsImxvZyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZmlsdGVyIiwiZGV2aWNlIiwiZGV2aWNlTmFtZSIsInRlbXBBcnJheSIsIm4iLCJwdXNoIiwieCIsInZhbHVlIiwiY2hhcnRJdGVtIiwidGVtcFZhbHVlIiwiVXRpbCIsImdldE1NU1MiLCJmb3JFYWNoIiwiZGV2aWNlSW5kZXgiLCJlbCIsImlkeCIsInNoaWZ0IiwiZ3B1IiwiaXRlbVRyZWUiLCJfIiwiZ2V0T3B0aW9uIiwiZW52VHlwZSIsImVudlR5cGVJbmRleCIsInBhcnNlVmFsdWUiLCJjb2xvciIsIml0ZW0iLCJwYXJzZUludCIsInNob3dTeW1ib2wiLCJob3ZlckFuaW1hdGlvbiIsIml0ZW1TdHlsZSIsInN5bWJvbCIsInN5bWJvbFNpemUiLCJhcmVhU3R5bGUiLCJvcGFjaXR5IiwiZWNoYXJ0cyIsImdyYXBoaWMiLCJMaW5lYXJHcmFkaWVudCIsIm9mZnNldCIsInRpdGxlIiwidGV4dCIsInRleHRTdHlsZSIsImZvbnRTaXplIiwiZ3JpZCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsInRvb2x0aXAiLCJ0cmlnZ2VyIiwiYXhpc1BvaW50ZXIiLCJhbmltYXRpb24iLCJ4QXhpcyIsInNwbGl0TGluZSIsInNob3ciLCJheGlzTGFiZWwiLCJmb250RmFtaWx5IiwiYXhpc0xpbmUiLCJheGlzVGljayIsInlBeGlzIiwiYm91bmRhcnlHYXAiLCJzZXJpZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsImdwdU5hbWUiLCJncHVOYW1lSW5kZXgiLCJjdXN0b21TdHlsZXMiLCJzZWxlY3RUeXBlIiwib3B0aW9uIiwicHJvdmlkZWQiLCJzdGF0ZSIsImJvcmRlckJvdHRvbSIsImlzU2VsZWN0ZWQiLCJjb250YWluZXIiLCJtYXJnaW5MZWZ0IiwiQ2x1c3RlckhleCIsImZpbHRlck9wdGlvbnMiLCJmaWx0ZXJPcHRpb24iLCJyYW5nZU9wdGlvbnMiLCJsYWJlbCIsImRlZmF1bHRGaWx0ZXIiLCJkZWZhdWx0UmFuZ2UiLCJzZXRGaWx0ZXIiLCJyYW5nZSIsInNldFJhbmdlIiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsImUiLCJob3ZlclNpemUiLCJjb25uZWN0IiwiU3R5bGVkVmFsdWVTdGF0dXMiLCJTdHlsZWRIb3ZlckNvbnRlbnQiLCJob3ZlciIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImNzcyIsIlN0eWxlZEhvdmVyQ29udGVudEJvZHlXcmFwcGVyIiwiQ2x1c3RlckhleEl0ZW0iLCJmaWx0ZXJlZCIsInNldEhvdmVyIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidGVzdCIsImdldFBhcnNlVmFsdWUiLCJzdW0iLCJtYXgiLCJJbmZpbml0eSIsIk1hdGgiLCJtaW4iLCJjbGllbnRYIiwieSIsImNsaWVudFkiLCJlbEluZGV4IiwiVG9kbyIsInN1YnRpdGxlIiwiaXRlbXMiLCJlbElkeCIsImxpbmsiLCJ0b2FzdCIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJSb3V0ZXIiLCJTdHlsZWRUb2FzdENvbnRhaW5lciIsIlRvYXN0Q29udGFpbmVyIiwiY2xhc3NOYW1lIiwidG9hc3RDbGFzc05hbWUiLCJib2R5Q2xhc3NOYW1lIiwicHJvZ3Jlc3NDbGFzc05hbWUiLCJTdHlsZWRXcmFwcGVyIiwibWVkaWEiLCJ0YWJsZXQiLCJtb2JpbGUiLCJXcmFwcGVyIiwiZ2V0WVlZWU1NREQiLCJwYWQyIiwiZGF0ZSIsImdldEZ1bGxZZWFyIiwidG9TdHJpbmciLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZXhwb3J0Q1NWRmlsZSIsImNzdiIsImZpbGVOYW1lIiwiaGVhZGVyIiwiam9pbiIsImZpbGVUeXBlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsInplcm9QYWQiLCJudW0iLCJudW1aZXJvcyIsImFicyIsInplcm9zIiwiZmxvb3IiLCJ6ZXJvU3RyaW5nIiwicG93IiwiaXNGbG9hdCIsInZhbCIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJpc0ludGVnZXIiLCJnZXRIZWFkZXIiLCJ0ZW1wIiwia2V5IiwiZW50cmllcyIsImdldEluZGV4QXJyYXkiLCJpbmNsdWRlTWF4IiwiYXJyIiwiZ2V0RmlsZU5hbWVGcm9tUGF0aCIsImZ1bGxQYXRoIiwicmVwbGFjZSIsInJlc291cmNlcyIsImtvIiwidHJhbnNsYXRpb24iLCJwcmV2IiwibmV4dCIsImkxOG4iLCJpbml0UmVhY3RJMThuZXh0IiwiaW5pdCIsImxuZyIsIkNsdXN0ZXJNb2RlIiwiSW5kZXgiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJtb3JlaCIsInNldE1vcmVoIiwibW9kZSIsInNldE1vZGUiLCJoZXgiLCJrdWJlcm5ldGVzIiwiZXRjIiwiZG9jIiwidGV4dEFsaWduIiwiZm9udFdlaWdodCIsImNoYXJ0IiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInJlc2V0Iiwic2l6ZXMiLCJkZXNrdG9wIiwiYXJncyIsInJlZHVjZSIsImFjYyIsIm1haW4iLCJzdWIiLCJibGFjayIsImdyYXk4IiwiZ3JheUEiLCJncmF5QyIsImdyYXlEIiwiZ3JheUUiLCJncmF5RiIsInNlY29uZGFyeSIsInN1Y2Nlc3MiLCJkYW5nZXIiLCJ3YXJuaW5nIiwiaW5mbyIsInNlY29uZGFyeUNvbG9ycyIsImZvbnRTaXplcyIsImgxIiwiaDIiLCJoMyIsInN1YnRpdGxlMTYiLCJib2R5MTQiLCJjYXRpb24xMiIsImJhc2VTdHlsZWQiLCJkZWZhdWx0Iiwia2V5ZnJhbWVzIiwiVGhlbWVQcm92aWRlciIsInN0eWxlZENvbXBvbmVudHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFt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QUFFLE1BSkk7QUFJSTtBQUNwQkMsUUFBTSxFQUFFLE1BTFE7QUFLQTtBQUNoQkMsVUFBUSxFQUFFLE1BTk0sQ0FNQzs7QUFORCxDQUFsQjtBQVNBLE1BQU1uVixLQUFLLEdBQUc7QUFDWkMsUUFEWTtBQUVaNFUsV0FGWTtBQUdacEwsWUFIWTtBQUlabUwsaUJBSlk7QUFLWmpHO0FBTFksQ0FBZDtBQVNPLE1BQU12UCxNQUFNLEdBQUdnVyx3REFBZjtBQUNRcFYsb0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDaEdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0EsTUFBTTtBQUNKcVYsU0FBTyxFQUFFalcsTUFETDtBQUVKZ04sS0FGSTtBQUdKa0osV0FISTtBQUlKQztBQUpJLElBS0ZDLDhDQUxKO0FBT0E7QUFFZXBXLHFFQUFmLEU7Ozs7Ozs7Ozs7O0FDWkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCB0eXBlIEJ1dHRvblByb3BzID0ge1xyXG4gIC8qKlxyXG4gICAqIENTU1xyXG4gICAqL1xyXG4gIHN0eWxlPzogQ1NTUHJvcGVydGllcztcclxuICAvKipcclxuICAgKiBJcyBwcmltYXJ5XHJcbiAgICovXHJcbiAgcHJpbWFyeT86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogSXMgZGlzYWJsZWRcclxuICAgKi9cclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogb25DbGlja1xyXG4gICAqL1xyXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbi5hdHRycyh7XHJcbiAgdHlwZTogJ2J1dHRvbidcclxufSlgXHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzc3ZTE5O1xyXG4gIGNvbG9yOiAjZjdiMTBhO1xyXG4gIG1pbi13aWR0aDogMTgwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEycHggMzBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjA2NjAxO1xyXG4gICAgY29sb3I6ICNmZmQzNmI7XHJcbiAgICBvdXRsaW5lLXdpZHRoOiAwO1xyXG4gIH1cclxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuICAmLnByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxNTksIDIyLCAwLCAwLjYpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhMzAxMjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjOWYxNjAwO1xyXG4gICAgICBjb2xvcjogI2ZmZDM2YjtcclxuICAgICAgb3V0bGluZS13aWR0aDogMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG4vKipcclxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCBCdXR0b246IFJlYWN0LkZDPEJ1dHRvblByb3BzPiA9ICh7XHJcbiAgcHJpbWFyeSA9IGZhbHNlLFxyXG4gIHN0eWxlID0ge30sXHJcbiAgZGlzYWJsZWQgPSBmYWxzZSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRCdXR0b25cclxuICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgIGNsYXNzTmFtZT17cHJpbWFyeSA/ICdwcmltYXJ5JyA6ICcnfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvU3R5bGVkQnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCB0eXBlIFBhbmVsUHJvcHMgPSB7XHJcbiAgLyoqXHJcbiAgICogQ1NTXHJcbiAgICovXHJcbiAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkUGFuZWwgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ib3JkZXJ9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogMHB4IDEwcHg7XHJcblxyXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJiBoMi5wYW5lbC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBjb2xvcjogI2Y4YjcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBmb250LWZhbWlseTogU2VtcGxpY2l0YSBQcm8sIE9wZW4gU2FucywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgMXB4IHRyYW5zcGFyZW50LCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gICYgaDMucGFuZWwtc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNlYmRlYzI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDFweCB0cmFuc3BhcmVudCwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxuICAmIGRpdi5wYW5lbC1jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNlYmRlYzI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDFweCB0cmFuc3BhcmVudCwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW46IDEzcHggYXV0byAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFN0eWxlZFBhbmVsQm94ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogc3RhdGljO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDEwJTtcclxuICBsZWZ0OiAxMCU7XHJcbmA7XHJcbmNvbnN0IFN0eWxlZFBhbmVsQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIC8qIG1heC13aWR0aDogMTYwMHB4OyAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgdHJhbnNmb3JtOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB6LWluZGV4OiAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhbmVsOiBSZWFjdC5GQzxQYW5lbFByb3BzPiA9ICh7IHN0eWxlID0ge30sIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFBhbmVsIHN0eWxlPXtzdHlsZX0gey4uLnByb3BzfT5cclxuICAgICAgPFN0eWxlZFBhbmVsQm94PlxyXG4gICAgICAgIDxTdHlsZWRQYW5lbENvbnRlbnQ+e3Byb3BzLmNoaWxkcmVufTwvU3R5bGVkUGFuZWxDb250ZW50PlxyXG4gICAgICA8L1N0eWxlZFBhbmVsQm94PlxyXG4gICAgPC9TdHlsZWRQYW5lbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFuZWw7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgY2x1c3RlckluZm8gZnJvbSAnLi4vLi4vbGliL3NldHRpbmcuanNvbic7XHJcblxyXG5pbXBvcnQgSXRlbSBmcm9tICcuL0NsdXN0ZXJDaGFydEl0ZW0nO1xyXG5cclxuY29uc3QgbWFyZ2luQ1cgPSAxMDtcclxuY29uc3QgU3R5bGVkQ2x1c3RlcldyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICB3aWR0aDogY2FsYygxMDAlIC0gJHttYXJnaW5DVyAqIDJ9cHgpO1xyXG4gIG1hcmdpbjogMCAke21hcmdpbkNXfXB4IDMwcHg7XHJcblxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBTdHlsZWRDbHVzdGVySXRlbVdyYXBwZXIgPSBzdHlsZWQuYXJ0aWNsZWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDbHVzdGVyQ2hhcnQ6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7Y2x1c3RlckluZm8uY2x1c3RlcnMubWFwKChjbHVzdGVyLCBjbHVzdGVySW5kZXgpID0+IChcclxuICAgICAgICA8U3R5bGVkQ2x1c3RlcldyYXBwZXIga2V5PXtjbHVzdGVySW5kZXh9PlxyXG4gICAgICAgICAgPGgzPkNsdXN0ZXI6IHtjbHVzdGVyLm5hbWV9PC9oMz5cclxuICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgPFN0eWxlZENsdXN0ZXJJdGVtV3JhcHBlcj5cclxuICAgICAgICAgICAge2NsdXN0ZXIubm9kZXMubWFwKChub2RlLCBub2RlSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtgJHtjbHVzdGVySW5kZXh9LSR7bm9kZUluZGV4fS0ke25vZGUubmFtZX0tJHtub2RlLnR5cGV9LSR7bm9kZS5pcH1gfT5cclxuICAgICAgICAgICAgICAgIDxJdGVtIG5hbWU9e25vZGUubmFtZX0gdHlwZT17bm9kZS50eXBlfSBpcD17bm9kZS5pcH0gLz5cclxuICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU3R5bGVkQ2x1c3Rlckl0ZW1XcmFwcGVyPlxyXG4gICAgICAgIDwvU3R5bGVkQ2x1c3RlcldyYXBwZXI+XHJcbiAgICAgICkpfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsdXN0ZXJDaGFydDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NJbnN0YW5jZSB9IGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBSZWFjdEVjaGFydHMgZnJvbSAnZWNoYXJ0cy1mb3ItcmVhY3QnO1xyXG5pbXBvcnQgZWNoYXJ0cyBmcm9tICdlY2hhcnRzJztcclxuXHJcbmltcG9ydCBVdGlsIGZyb20gJy4uLy4uL2xpYi91dGlsTWV0aG9kcyc7XHJcbmltcG9ydCBTZXR0aW5nIGZyb20gJy4uLy4uL2xpYi9zZXR0aW5nLmpzb24nO1xyXG5cclxuY29uc3QgU3R5bGVkSXRlbVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4OiAwIDAgNDAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbmA7XHJcbmNvbnN0IFN0eWxlZEl0ZW1UaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0b3A6IDVweDtcclxuICBsZWZ0OiA1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICYgPiAudXBwZXIge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuYDtcclxuY29uc3QgU3R5bGVkSXRlbUxlZ2VuZExpc3QgPSBzdHlsZWQudWxgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzVweDtcclxuICBsZWZ0OiA1cHg7XHJcbiAgd2lkdGg6IGNhbGMoNDAwcHggLSAxMHB4KTtcclxuICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICYgPiBsaSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFN0eWxlZEl0ZW1DaGFydFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA0MDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuYDtcclxuY29uc3QgU3R5bGVkQ29ubmVjdGlvblN0YXR1c1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgei1pbmRleDogMTtcclxuICBjdXJzb3I6IHpvb20taW47XHJcbiAgJjpob3ZlciB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBTdHlsZWRDb25uZWN0aW9uU3RhdHVzID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ0hBUlRfWF9TSVpFID0gNTA7XHJcbnR5cGUgY2hhcnRQcm9wcyA9IHtcclxuICB4OiBzdHJpbmc7XHJcbiAgdmFsdWU6IHN0cmluZ1tdW107XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBDbHVzdGVyQ2hhcnRJdGVtUHJvcHMgPSB7XHJcbiAgLyoqXHJcbiAgICogTm9kZSBuYW1lXHJcbiAgICovXHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIE5vZGUgdHlwZVxyXG4gICAqL1xyXG4gIHR5cGU6IHN0cmluZzsgLy8gJ2FtZCcgfCAnbnZpZGlhJ1xyXG4gIC8qKlxyXG4gICAqIE5vZGUgSVBcclxuICAgKi9cclxuICBpcDogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3Qgc2V0dGluZ0F4aW9zID0gKGlwOiBzdHJpbmcpOiBBeGlvc0luc3RhbmNlID0+IHtcclxuICBjb25zdCBjb25uID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IGlwLFxyXG4gICAgdGltZW91dDogMTAgKiAxMDAwXHJcbiAgfSk7XHJcblxyXG4gIGNvbm4uaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxyXG4gICAgKGNvbmZpZykgPT4ge1xyXG4gICAgICBjb25maWcucGFyYW1zID0geyBzdGFydFRpbWU6IG5ldyBEYXRlKCkgfTtcclxuICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH0sXHJcbiAgICAoZXJyb3IpID0+IHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICBjb25uLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgICAocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzcG9uc2UuY29uZmlnLnBhcmFtcy5lbmRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgcmVzcG9uc2UuY29uZmlnLnBhcmFtcy5kdXJhdGlvbiA9IHJlc3BvbnNlLmNvbmZpZy5wYXJhbXMuZW5kVGltZSAtIHJlc3BvbnNlLmNvbmZpZy5wYXJhbXMuc3RhcnRUaW1lO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9LFxyXG4gICAgKGVycm9yKSA9PiB7XHJcbiAgICAgIGVycm9yLmNvbmZpZy5wYXJhbXMuZW5kVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGVycm9yLmNvbmZpZy5wYXJhbXMuZHVyYXRpb24gPSBlcnJvci5jb25maWcucGFyYW1zLmVuZFRpbWUgLSBlcnJvci5jb25maWcucGFyYW1zLnN0YXJ0VGltZTtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICByZXR1cm4gY29ubjtcclxufTtcclxuXHJcbmNvbnN0IGZpbmRUcmVlSW5OdmlkaWEgPSAoanNvbk9iamVjdDogYW55LCBzZWFyY2g6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IHRva2VuID0gJz4nO1xyXG4gIGlmIChzZWFyY2guaW5kZXhPZih0b2tlbikgPCAwKSB7XHJcbiAgICByZXR1cm4ganNvbk9iamVjdFtzZWFyY2hdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBzZWFyY2guc3Vic3RyKDAsIHNlYXJjaC5pbmRleE9mKHRva2VuKSk7XHJcbiAgICBjb25zdCBwYXJhbSA9IHNlYXJjaC5zdWJzdHIoc2VhcmNoLmluZGV4T2YodG9rZW4pICsgdG9rZW4ubGVuZ3RoKTtcclxuICAgIGlmICh0eXBlb2YganNvbk9iamVjdFt0YXJnZXRdID09PSAnb2JqZWN0Jykge1xyXG4gICAgICByZXR1cm4gZmluZFRyZWVJbk52aWRpYShqc29uT2JqZWN0W3RhcmdldF0sIHBhcmFtKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGpzb25PYmplY3RbdGFyZ2V0XSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuIGpzb25PYmplY3RbdGFyZ2V0XTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDbHVzdGVyQ2hhcnRJdGVtOiBSZWFjdC5GQzxDbHVzdGVyQ2hhcnRJdGVtUHJvcHM+ID0gKHsgbmFtZSwgdHlwZSwgaXAgfSkgPT4ge1xyXG4gIGNvbnN0IGNvbm4gPSBzZXR0aW5nQXhpb3MoaXApO1xyXG4gIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGU8bnVtYmVyPigtMSk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPGFueT4odW5kZWZpbmVkKTtcclxuICBjb25zdCBbbGF0ZW5jeSwgc2V0TGF0ZW5jeV0gPSB1c2VTdGF0ZTxudW1iZXI+KC0xKTtcclxuICBjb25zdCBbYW1kR3B1TGlzdCwgc2V0QW1kR3B1TGlzdF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG4gIGNvbnN0IFtncHVOYW1lTGlzdCwgc2V0R3B1TmFtZUxpc3RdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGU8Y2hhcnRQcm9wc1tdPihbXSk7XHJcblxyXG4gIGNvbnN0IGVudkFNRCA9IFNldHRpbmcuYW1kO1xyXG4gIGNvbnN0IGVudk5WSURJQSA9IFNldHRpbmcubnZpZGlhO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHVubW91bnQgPSBmYWxzZTtcclxuICAgIGNvbnN0IG9uTG9hZEFwaSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgdXJsID0gdHlwZSA9PT0gJ2FtZCcgPyBgLyR7dHlwZX0vYXBpL21pbmAgOiBgLyR7dHlwZX0vYXBpYDtcclxuICAgICAgY29ublxyXG4gICAgICAgIC5nZXQodXJsKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHVubW91bnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICBzZXREdXJhdGlvbihyZXNwb25zZS5jb25maWcucGFyYW1zLmR1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgc2V0TGF0ZW5jeShyZXNwb25zZS5kYXRhLmNvbW1hbmREZWxheSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ252aWRpYScpIHtcclxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvciA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3BvbnNlLmRhdGEuc21pUmVzdWx0Lm52aWRpYV9zbWlfbG9nKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5kYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2FtZCcpIHtcclxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvciA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGlmIChhbWRHcHVMaXN0Lmxlbmd0aCAhPT0gcmVzcG9uc2UuZGF0YS5zbWlSZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEFtZEdwdUxpc3QoT2JqZWN0LmtleXMocmVzcG9uc2UuZGF0YS5zbWlSZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5kYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdCh1bmRlZmluZWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgaWYgKHVubW91bnQpIHJldHVybjtcclxuICAgICAgICAgIHNldER1cmF0aW9uKC0xKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIG9uTG9hZEFwaSgpO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgdW5tb3VudCA9IHRydWU7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIGZvciBBTURcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09ICdhbWQnICYmIGFtZEdwdUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgc2V0R3B1TmFtZUxpc3QoXHJcbiAgICAgICAgICBhbWRHcHVMaXN0XHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGRldmljZSkgPT4gZGV2aWNlICE9PSAnc3lzdGVtJylcclxuICAgICAgICAgICAgLm1hcCgoZGV2aWNlKSA9PiByZXN1bHQuZGF0YS5zbWlSZXN1bHRbZGV2aWNlXVtlbnZBTUQuZGV2aWNlTmFtZV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB0ZW1wQXJyYXk6IGNoYXJ0UHJvcHNbXSA9IFtdO1xyXG4gICAgICBpZiAoY2hhcnREYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgQ0hBUlRfWF9TSVpFOyBuKyspIHtcclxuICAgICAgICAgIHRlbXBBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgeDogJycsXHJcbiAgICAgICAgICAgIHZhbHVlOiBlbnZBTUQuY2hhcnRJdGVtLm1hcCgoKSA9PiBhbWRHcHVMaXN0Lm1hcCgoKSA9PiAnMCcpKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENoYXJ0RGF0YShbLi4udGVtcEFycmF5XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbYW1kR3B1TGlzdF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBpZiAodHlwZSA9PT0gJ2FtZCcgJiYgYW1kR3B1TGlzdC5sZW5ndGggPiAwICYmIGNoYXJ0RGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdC5kYXRhLnNtaVJlc3VsdDtcclxuXHJcbiAgICAgICAgY29uc3QgdGVtcEFycmF5ID0gY2hhcnREYXRhO1xyXG4gICAgICAgIGNvbnN0IHRlbXBWYWx1ZTogY2hhcnRQcm9wcyA9IHtcclxuICAgICAgICAgIHg6IFV0aWwuZ2V0TU1TUygpLFxyXG4gICAgICAgICAgdmFsdWU6IGVudkFNRC5jaGFydEl0ZW0ubWFwKCgpID0+IGFtZEdwdUxpc3QubWFwKCgpID0+ICcwJykpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBhbWRHcHVMaXN0LmZvckVhY2goKGRldmljZSwgZGV2aWNlSW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmIChkZXZpY2UgPT09ICdzeXN0ZW0nKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgZW52QU1ELmNoYXJ0SXRlbS5mb3JFYWNoKChlbCwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhW2RldmljZV1bZWxdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0ZW1wVmFsdWUudmFsdWVbaWR4XVtkZXZpY2VJbmRleF0gPSBkYXRhW2RldmljZV1bZWxdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGVtcEFycmF5Lmxlbmd0aCA+PSBDSEFSVF9YX1NJWkUpIHRlbXBBcnJheS5zaGlmdCgpO1xyXG4gICAgICAgIHRlbXBBcnJheS5wdXNoKHRlbXBWYWx1ZSk7XHJcbiAgICAgICAgc2V0Q2hhcnREYXRhKHRlbXBBcnJheSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGUgPT09ICdudmlkaWEnKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdC5ncHU7XHJcblxyXG4gICAgICAgIGlmIChjaGFydERhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICBjb25zdCB0ZW1wQXJyYXk6IGNoYXJ0UHJvcHNbXSA9IFtdO1xyXG4gICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBDSEFSVF9YX1NJWkU7IG4rKykge1xyXG4gICAgICAgICAgICB0ZW1wQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgeDogJycsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IGVudk5WSURJQS5jaGFydEl0ZW0ubWFwKCgpID0+IGRhdGEubWFwKCgpID0+ICcwJykpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGVtcEFycmF5W0NIQVJUX1hfU0laRSAtIDFdID0ge1xyXG4gICAgICAgICAgICB4OiBVdGlsLmdldE1NU1MoKSxcclxuICAgICAgICAgICAgdmFsdWU6IGVudk5WSURJQS5jaGFydEl0ZW0ubWFwKChpdGVtVHJlZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBkYXRhLm1hcCgoXywgZGV2aWNlSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaW5kVHJlZUluTnZpZGlhKGRhdGFbZGV2aWNlSW5kZXhdLCBpdGVtVHJlZSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgc2V0Q2hhcnREYXRhKFsuLi50ZW1wQXJyYXldKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgdGVtcEFycmF5ID0gY2hhcnREYXRhO1xyXG4gICAgICAgICAgY29uc3QgdGVtcFZhbHVlOiBjaGFydFByb3BzID0ge1xyXG4gICAgICAgICAgICB4OiBVdGlsLmdldE1NU1MoKSxcclxuICAgICAgICAgICAgdmFsdWU6IGVudk5WSURJQS5jaGFydEl0ZW0ubWFwKChpdGVtVHJlZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBkYXRhLm1hcCgoXywgZGV2aWNlSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaW5kVHJlZUluTnZpZGlhKGRhdGFbZGV2aWNlSW5kZXhdLCBpdGVtVHJlZSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgaWYgKHRlbXBBcnJheS5sZW5ndGggPj0gQ0hBUlRfWF9TSVpFKSB0ZW1wQXJyYXkuc2hpZnQoKTtcclxuICAgICAgICAgIHRlbXBBcnJheS5wdXNoKHRlbXBWYWx1ZSk7XHJcbiAgICAgICAgICBzZXRDaGFydERhdGEodGVtcEFycmF5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbcmVzdWx0XSk7XHJcblxyXG4gIGNvbnN0IGdldE9wdGlvbiA9IChkYXRhOiBjaGFydFByb3BzW10sIGVudlR5cGU6IHN0cmluZywgZW52VHlwZUluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIGxldCBwYXJzZVZhbHVlID0gW107XHJcbiAgICBpZiAodHlwZSA9PT0gJ2FtZCcpIHtcclxuICAgICAgcGFyc2VWYWx1ZSA9IGFtZEdwdUxpc3RcclxuICAgICAgICAuZmlsdGVyKChkZXZpY2UpID0+IGRldmljZSAhPT0gJ3N5c3RlbScpXHJcbiAgICAgICAgLm1hcCgoXywgZGV2aWNlSW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNvbG9yID0gVXRpbC5jb2xvcnNbZGV2aWNlSW5kZXggJSBVdGlsLmNvbG9ycy5sZW5ndGhdO1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogZ3B1TmFtZUxpc3RbZGV2aWNlSW5kZXhdLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLm1hcCgoaXRlbSkgPT4gcGFyc2VJbnQoaXRlbS52YWx1ZVtlbnZUeXBlSW5kZXhdW2RldmljZUluZGV4XSwgMTApKSxcclxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICBzaG93U3ltYm9sOiBmYWxzZSxcclxuICAgICAgICAgICAgaG92ZXJBbmltYXRpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBpdGVtU3R5bGU6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogY29sb3JcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcclxuICAgICAgICAgICAgc3ltYm9sU2l6ZTogNSxcclxuICAgICAgICAgICAgYXJlYVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC4yLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBuZXcgZWNoYXJ0cy5ncmFwaGljLkxpbmVhckdyYWRpZW50KDAsIDAsIDAsIDEsIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogY29sb3JcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIG9mZnNldDogMSxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMjExNTEwJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gJ252aWRpYScpIHtcclxuICAgICAgcGFyc2VWYWx1ZSA9IHJlc3VsdC5ncHUubWFwKChkZXZpY2UsIGRldmljZUluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBVdGlsLmNvbG9yc1tkZXZpY2VJbmRleCAlIFV0aWwuY29sb3JzLmxlbmd0aF07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG5hbWU6IGRldmljZVtlbnZOVklESUEuZGV2aWNlTmFtZV0sXHJcbiAgICAgICAgICBkYXRhOiBkYXRhLm1hcCgoaXRlbSkgPT4gcGFyc2VJbnQoaXRlbS52YWx1ZVtlbnZUeXBlSW5kZXhdW2RldmljZUluZGV4XSwgMTApKSxcclxuICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgIHNob3dTeW1ib2w6IGZhbHNlLFxyXG4gICAgICAgICAgaG92ZXJBbmltYXRpb246IGZhbHNlLFxyXG4gICAgICAgICAgaXRlbVN0eWxlOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvclxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN5bWJvbDogJ2NpcmNsZScsXHJcbiAgICAgICAgICBzeW1ib2xTaXplOiA1LFxyXG4gICAgICAgICAgYXJlYVN0eWxlOiB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMixcclxuICAgICAgICAgICAgY29sb3I6IG5ldyBlY2hhcnRzLmdyYXBoaWMuTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgMSwgW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9mZnNldDogMCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvclxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAxLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMjExNTEwJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdGV4dDogYCR7ZW52VHlwZX1gLFxyXG4gICAgICAgIHRleHRTdHlsZToge1xyXG4gICAgICAgICAgY29sb3I6ICcjY2NjJyxcclxuICAgICAgICAgIGZvbnRTaXplOiAxMVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZ3JpZDoge1xyXG4gICAgICAgIHRvcDogMzUsXHJcbiAgICAgICAgbGVmdDogMzAsXHJcbiAgICAgICAgcmlnaHQ6IDEwLFxyXG4gICAgICAgIGJvdHRvbTogMzBcclxuICAgICAgfSxcclxuICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgIHRyaWdnZXI6ICdheGlzJyxcclxuICAgICAgICBheGlzUG9pbnRlcjoge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgeEF4aXM6IHtcclxuICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxyXG4gICAgICAgIHNwbGl0TGluZToge1xyXG4gICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF4aXNMYWJlbDoge1xyXG4gICAgICAgICAgY29sb3I6ICcjYWFhJyxcclxuICAgICAgICAgIGZvbnRGYW1pbHk6ICdTcG9xYUhhblNhbnMtUmVndWxhcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF4aXNMaW5lOiB7XHJcbiAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXhpc1RpY2s6IHtcclxuICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiBkYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS54KVxyXG4gICAgICB9LFxyXG4gICAgICB5QXhpczoge1xyXG4gICAgICAgIHR5cGU6ICd2YWx1ZScsXHJcbiAgICAgICAgYm91bmRhcnlHYXA6IGZhbHNlLFxyXG4gICAgICAgIHNwbGl0TGluZToge1xyXG4gICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF4aXNMYWJlbDoge1xyXG4gICAgICAgICAgY29sb3I6ICcjZGRkJyxcclxuICAgICAgICAgIGZvbnRGYW1pbHk6ICdTcG9xYUhhblNhbnMtUmVndWxhcidcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbWluOiAnZGF0YU1pbicsXHJcbiAgICAgICAgLy8gbWF4OiAnZGF0YU1heCdcclxuICAgICAgfSxcclxuICAgICAgc2VyaWVzOiBwYXJzZVZhbHVlXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U3R5bGVkSXRlbVdyYXBwZXI+XHJcbiAgICAgICAgPFN0eWxlZEl0ZW1UaXRsZT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J3VwcGVyJ30+W3t0eXBlfV08L3NwYW4+XHJcbiAgICAgICAgICB7bmFtZX1cclxuICAgICAgICA8L1N0eWxlZEl0ZW1UaXRsZT5cclxuICAgICAgICA8U3R5bGVkSXRlbUxlZ2VuZExpc3Q+XHJcbiAgICAgICAgICB7dHlwZSA9PT0gJ252aWRpYScgJiZcclxuICAgICAgICAgICAgcmVzdWx0ICYmXHJcbiAgICAgICAgICAgIHJlc3VsdC5ncHUgJiZcclxuICAgICAgICAgICAgcmVzdWx0LmdwdS5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIHJlc3VsdC5ncHUubWFwKChkZXZpY2UsIGRldmljZUluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17ZGV2aWNlSW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogVXRpbC5jb2xvcnNbZGV2aWNlSW5kZXggJSBVdGlsLmNvbG9ycy5sZW5ndGhdLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICc0cHgnXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ZGV2aWNlW2Vudk5WSURJQS5kZXZpY2VOYW1lXX1cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIHt0eXBlID09PSAnYW1kJyAmJlxyXG4gICAgICAgICAgICBncHVOYW1lTGlzdC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIGdwdU5hbWVMaXN0Lm1hcCgoZ3B1TmFtZSwgZ3B1TmFtZUluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17Z3B1TmFtZUluZGV4fT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFV0aWwuY29sb3JzW2dwdU5hbWVJbmRleCAlIFV0aWwuY29sb3JzLmxlbmd0aF0sXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzRweCdcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtncHVOYW1lfVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU3R5bGVkSXRlbUxlZ2VuZExpc3Q+XHJcbiAgICAgICAgPFN0eWxlZEl0ZW1DaGFydFdyYXBwZXI+XHJcbiAgICAgICAgICB7dHlwZSA9PT0gJ252aWRpYScgJiZcclxuICAgICAgICAgICAgY2hhcnREYXRhLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgZW52TlZJRElBLmNoYXJ0SXRlbS5tYXAoKGVudlR5cGUsIGVudlR5cGVJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2Ake25hbWV9LSR7dHlwZX0tJHtlbnZUeXBlSW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICA8UmVhY3RFY2hhcnRzXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbj17Z2V0T3B0aW9uKGNoYXJ0RGF0YSwgZW52VHlwZSwgZW52VHlwZUluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgbm90TWVyZ2U9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIGxhenlVcGRhdGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzE4MHB4Jywgd2lkdGg6ICcyMDBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgLy8gb3B0cz17eyByZW5kZXJlcjogJ3N2ZycgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICB7dHlwZSA9PT0gJ2FtZCcgJiZcclxuICAgICAgICAgICAgcmVzdWx0ICYmXHJcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhICYmXHJcbiAgICAgICAgICAgIGNoYXJ0RGF0YS5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIGVudkFNRC5jaGFydEl0ZW0ubWFwKChlbnZUeXBlLCBlbnZUeXBlSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtgJHtuYW1lfS0ke3R5cGV9LSR7ZW52VHlwZUluZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0RWNoYXJ0c1xyXG4gICAgICAgICAgICAgICAgICBvcHRpb249e2dldE9wdGlvbihjaGFydERhdGEsIGVudlR5cGUsIGVudlR5cGVJbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgIG5vdE1lcmdlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICBsYXp5VXBkYXRlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxODBweCcsIHdpZHRoOiAnMjAwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgIC8vIG9wdHM9e3sgcmVuZGVyZXI6ICdzdmcnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU3R5bGVkSXRlbUNoYXJ0V3JhcHBlcj5cclxuICAgICAgICA8U3R5bGVkQ29ubmVjdGlvblN0YXR1c1dyYXBwZXI+XHJcbiAgICAgICAgICA8U3R5bGVkQ29ubmVjdGlvblN0YXR1c1xyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZHVyYXRpb24gPT09IC0xID8gJ3JlZCcgOiAnZ3JlZW4nXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9TdHlsZWRDb25uZWN0aW9uU3RhdHVzPnsnICd9XHJcbiAgICAgICAgICB7ZHVyYXRpb24gPT09IC0xID8gJycgOiBgJHtkdXJhdGlvbiAvIDEwMDB9c2B9ICh7bGF0ZW5jeSA9PT0gLTEgPyAnJyA6IGAke2xhdGVuY3kgLyAxMDAwfXNgfSlcclxuICAgICAgICA8L1N0eWxlZENvbm5lY3Rpb25TdGF0dXNXcmFwcGVyPlxyXG4gICAgICA8L1N0eWxlZEl0ZW1XcmFwcGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsdXN0ZXJDaGFydEl0ZW07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XHJcblxyXG5pbXBvcnQgY2x1c3RlckluZm8gZnJvbSAnLi4vLi4vbGliL3NldHRpbmcuanNvbic7XHJcblxyXG5pbXBvcnQgSXRlbSBmcm9tICcuL0NsdXN0ZXJIZXhJdGVtJztcclxuXHJcbmNvbnN0IG1hcmdpbkNXID0gMTA7XHJcbmNvbnN0IFN0eWxlZENsdXN0ZXJXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtICR7bWFyZ2luQ1cgKiAyfXB4KTtcclxuICBtYXJnaW46IDAgJHttYXJnaW5DV31weCAzMHB4O1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuYDtcclxuY29uc3QgU3R5bGVkQ2x1c3Rlckl0ZW1XcmFwcGVyID0gc3R5bGVkLmFydGljbGVgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbmA7XHJcblxyXG5jb25zdCBjdXN0b21TdHlsZXMgPSAoc2VsZWN0VHlwZTogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG9wdGlvbjogKHByb3ZpZGVkOiBhbnksIHN0YXRlOiB7IGlzU2VsZWN0ZWQ6IGFueSB9KSA9PiAoe1xyXG4gICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IGRvdHRlZCBwaW5rJyxcclxuICAgICAgY29sb3I6IHN0YXRlLmlzU2VsZWN0ZWQgPyAnIzk5OScgOiAnIzMzMydcclxuICAgIH0pLFxyXG4gICAgY29udGFpbmVyOiAocHJvdmlkZWQ6IGFueSkgPT4gKHtcclxuICAgICAgLi4ucHJvdmlkZWQsXHJcbiAgICAgIHdpZHRoOiBzZWxlY3RUeXBlID09PSAnZmlsJyA/ICczMDBweCcgOiAnMTAwcHgnLFxyXG4gICAgICBtYXJnaW5MZWZ0OiAnMTBweCdcclxuICAgIH0pXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDbHVzdGVySGV4OiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBmaWx0ZXJPcHRpb25zID0gY2x1c3RlckluZm8uZmlsdGVyT3B0aW9uO1xyXG4gIGNvbnN0IHJhbmdlT3B0aW9ucyA9IFtcclxuICAgIHsgdmFsdWU6ICdhdmcnLCBsYWJlbDogJ0FWRycgfSxcclxuICAgIHsgdmFsdWU6ICdtYXgnLCBsYWJlbDogJ01BWCcgfSxcclxuICAgIHsgdmFsdWU6ICdtaW4nLCBsYWJlbDogJ01JTicgfVxyXG4gIF07XHJcbiAgY29uc3QgZGVmYXVsdEZpbHRlciA9IDI7XHJcbiAgY29uc3QgZGVmYXVsdFJhbmdlID0gMDtcclxuICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGU8c3RyaW5nPihmaWx0ZXJPcHRpb25zW2RlZmF1bHRGaWx0ZXJdLnZhbHVlKTtcclxuICBjb25zdCBbcmFuZ2UsIHNldFJhbmdlXSA9IHVzZVN0YXRlPHN0cmluZz4ocmFuZ2VPcHRpb25zW2RlZmF1bHRSYW5nZV0udmFsdWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpbkJvdHRvbTogJzIwcHgnIH19PlxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIGluc3RhbmNlSWQ9eydmaWx0ZXJfb3B0aW9uJ31cclxuICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzKCdmaWwnKX1cclxuICAgICAgICAgIG9wdGlvbnM9e2ZpbHRlck9wdGlvbnN9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpbHRlcihlWyd2YWx1ZSddKX1cclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZmlsdGVyT3B0aW9uc1tkZWZhdWx0RmlsdGVyXX1cclxuICAgICAgICA+PC9TZWxlY3Q+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgaW5zdGFuY2VJZD17J3ZhbHVlX29wdGlvbid9XHJcbiAgICAgICAgICBzdHlsZXM9e2N1c3RvbVN0eWxlcygncmFuZ2UnKX1cclxuICAgICAgICAgIG9wdGlvbnM9e3JhbmdlT3B0aW9uc31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmFuZ2UoZVsndmFsdWUnXSl9XHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3JhbmdlT3B0aW9uc1tkZWZhdWx0UmFuZ2VdfVxyXG4gICAgICAgID48L1NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtjbHVzdGVySW5mby5jbHVzdGVycy5tYXAoKGNsdXN0ZXIsIGNsdXN0ZXJJbmRleCkgPT4gKFxyXG4gICAgICAgIDxTdHlsZWRDbHVzdGVyV3JhcHBlciBrZXk9e2NsdXN0ZXJJbmRleH0+XHJcbiAgICAgICAgICA8aDM+Q2x1c3Rlcjoge2NsdXN0ZXIubmFtZX08L2gzPlxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICA8U3R5bGVkQ2x1c3Rlckl0ZW1XcmFwcGVyPlxyXG4gICAgICAgICAgICB7Y2x1c3Rlci5ub2Rlcy5tYXAoKG5vZGUsIG5vZGVJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2Ake2NsdXN0ZXJJbmRleH0tJHtub2RlSW5kZXh9LSR7bm9kZS5uYW1lfS0ke25vZGUudHlwZX0tJHtub2RlLmlwfWB9PlxyXG4gICAgICAgICAgICAgICAgPEl0ZW0gbmFtZT17bm9kZS5uYW1lfSB0eXBlPXtub2RlLnR5cGV9IGlwPXtub2RlLmlwfSBmaWx0ZXI9e2ZpbHRlcn0gcmFuZ2U9e3JhbmdlfSAvPlxyXG4gICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TdHlsZWRDbHVzdGVySXRlbVdyYXBwZXI+XHJcbiAgICAgICAgPC9TdHlsZWRDbHVzdGVyV3JhcHBlcj5cclxuICAgICAgKSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2x1c3RlckhleDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NJbnN0YW5jZSB9IGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgU2V0dGluZyBmcm9tICcuLi8uLi9saWIvc2V0dGluZy5qc29uJztcclxuXHJcbmNvbnN0IGhvdmVyU2l6ZSA9IHtcclxuICB3aWR0aDogNDAwLFxyXG4gIGhlaWdodDogMjAwXHJcbn07XHJcbnR5cGUgbW91c2VYWSA9IHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG59O1xyXG50eXBlIEhleFN0YXR1cyA9IHtcclxuICBob3Zlcj86IGJvb2xlYW4gfCBtb3VzZVhZO1xyXG4gIGNvbm5lY3Q/OiBib29sZWFuO1xyXG4gIHZhbHVlPzogbnVtYmVyO1xyXG59O1xyXG50eXBlIHZhbHVlUHJvcHMgPSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWRJdGVtV3JhcHBlciA9IHN0eWxlZC5kaXY8SGV4U3RhdHVzPmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleDogMCAwIDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5OTk7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcclxuICBtYXJnaW46IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLmNvbm5lY3QgPyAnI2ZmZTk5NicgOiAndHJhbnNwYXJlbnQnKX07XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5jb25zdCBTdHlsZWRWYWx1ZVN0YXR1cyA9IHN0eWxlZC5kaXY8SGV4U3RhdHVzPmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTEyNzJjO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgb3BhY2l0eTogJHsocHJvcHMpID0+IChwcm9wcy52YWx1ZSA/IHByb3BzLnZhbHVlIDogMCl9O1xyXG5gO1xyXG5jb25zdCBTdHlsZWRDb25uZWN0aW9uU3RhdHVzID0gc3R5bGVkLmRpdjxIZXhTdGF0dXM+YFxyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0cHg7XHJcbiAgbGVmdDogNHB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuY29ubmVjdCA/ICdncmVlbicgOiAncmVkJyl9O1xyXG5gO1xyXG5jb25zdCBTdHlsZWRIb3ZlckNvbnRlbnQgPSBzdHlsZWQuZGl2PEhleFN0YXR1cz5gXHJcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IChwcm9wcy5ob3ZlciA/ICdibG9jaycgOiAnbm9uZScpfTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6ICR7aG92ZXJTaXplLndpZHRofXB4O1xyXG4gIGhlaWdodDogJHtob3ZlclNpemUuaGVpZ2h0fXB4O1xyXG4gIHRvcDogMTBweDtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgJHsocHJvcHMpID0+IHtcclxuICAgIGlmIChwcm9wcy5ob3ZlciAmJiBwcm9wcy5ob3ZlclsneCddICYmIHByb3BzLmhvdmVyWyd4J10gKyBob3ZlclNpemUud2lkdGggPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xyXG4gICAgICBpZiAocHJvcHMuaG92ZXIgJiYgcHJvcHMuaG92ZXJbJ3knXSAmJiBwcm9wcy5ob3ZlclsneSddICsgaG92ZXJTaXplLmhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgbGVmdDogdW5zZXQ7XHJcbiAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgIHRvcDogdW5zZXQ7XHJcbiAgICAgICAgYDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgbGVmdDogdW5zZXQ7XHJcbiAgICAgIGA7XHJcbiAgICB9XHJcbiAgICBpZiAocHJvcHMuaG92ZXIgJiYgcHJvcHMuaG92ZXJbJ3knXSAmJiBwcm9wcy5ob3ZlclsneSddICsgaG92ZXJTaXplLmhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIHRvcDogdW5zZXQ7XHJcbiAgICAgIGA7XHJcbiAgICB9XHJcbiAgfX1cclxuYDtcclxuY29uc3QgU3R5bGVkSG92ZXJDb250ZW50Qm9keVdyYXBwZXIgPSBzdHlsZWQudWxgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGJvdHRvbTtcclxuICB3aWR0aDogJHtob3ZlclNpemUud2lkdGh9cHg7XHJcbiAgaGVpZ2h0OiAke2hvdmVyU2l6ZS5oZWlnaHR9cHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ob3Zlcn07XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ib3JkZXJ9O1xyXG4gICYgPiBsaSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICB9XHJcbiAgJiA+IGxpLnN1YmplY3Qge1xyXG4gICAgZmxleDogMCAwIDcwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gICYgPiBsaS52YWx1ZSB7XHJcbiAgICBmbGV4OiAwIDAgMzAlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZWU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IHR5cGUgQ2x1c3RlckhleEl0ZW1Qcm9wcyA9IHtcclxuICAvKipcclxuICAgKiBOb2RlIG5hbWVcclxuICAgKi9cclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogTm9kZSB0eXBlXHJcbiAgICovXHJcbiAgdHlwZTogJ2FtZCcgfCAnbnZpZGlhJyB8IHN0cmluZztcclxuICAvKipcclxuICAgKiBOb2RlIElQXHJcbiAgICovXHJcbiAgaXA6IHN0cmluZztcclxuICAvKipcclxuICAgKiBGaWx0ZXIgdHlwZVxyXG4gICAqL1xyXG4gIGZpbHRlcjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFJhbmdlIHR5cGVcclxuICAgKi9cclxuICByYW5nZTogJ2F2ZycgfCAnbWF4JyB8ICdtaW4nIHwgc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3Qgc2V0dGluZ0F4aW9zID0gKGlwOiBzdHJpbmcpOiBBeGlvc0luc3RhbmNlID0+IHtcclxuICBjb25zdCBjb25uID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IGlwLFxyXG4gICAgdGltZW91dDogMTAgKiAxMDAwXHJcbiAgfSk7XHJcblxyXG4gIGNvbm4uaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxyXG4gICAgKGNvbmZpZykgPT4ge1xyXG4gICAgICBjb25maWcucGFyYW1zID0geyBzdGFydFRpbWU6IG5ldyBEYXRlKCkgfTtcclxuICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH0sXHJcbiAgICAoZXJyb3IpID0+IHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICBjb25uLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgICAocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzcG9uc2UuY29uZmlnLnBhcmFtcy5lbmRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgcmVzcG9uc2UuY29uZmlnLnBhcmFtcy5kdXJhdGlvbiA9IHJlc3BvbnNlLmNvbmZpZy5wYXJhbXMuZW5kVGltZSAtIHJlc3BvbnNlLmNvbmZpZy5wYXJhbXMuc3RhcnRUaW1lO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9LFxyXG4gICAgKGVycm9yKSA9PiB7XHJcbiAgICAgIGVycm9yLmNvbmZpZy5wYXJhbXMuZW5kVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGVycm9yLmNvbmZpZy5wYXJhbXMuZHVyYXRpb24gPSBlcnJvci5jb25maWcucGFyYW1zLmVuZFRpbWUgLSBlcnJvci5jb25maWcucGFyYW1zLnN0YXJ0VGltZTtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICByZXR1cm4gY29ubjtcclxufTtcclxuXHJcbmNvbnN0IGZpbmRUcmVlSW5OdmlkaWEgPSAoanNvbk9iamVjdDogYW55LCBzZWFyY2g6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IHRva2VuID0gJz4nO1xyXG4gIGlmIChzZWFyY2guaW5kZXhPZih0b2tlbikgPCAwKSB7XHJcbiAgICByZXR1cm4ganNvbk9iamVjdFtzZWFyY2hdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBzZWFyY2guc3Vic3RyKDAsIHNlYXJjaC5pbmRleE9mKHRva2VuKSk7XHJcbiAgICBjb25zdCBwYXJhbSA9IHNlYXJjaC5zdWJzdHIoc2VhcmNoLmluZGV4T2YodG9rZW4pICsgdG9rZW4ubGVuZ3RoKTtcclxuICAgIGlmICh0eXBlb2YganNvbk9iamVjdFt0YXJnZXRdID09PSAnb2JqZWN0Jykge1xyXG4gICAgICByZXR1cm4gZmluZFRyZWVJbk52aWRpYShqc29uT2JqZWN0W3RhcmdldF0sIHBhcmFtKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGpzb25PYmplY3RbdGFyZ2V0XSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuIGpzb25PYmplY3RbdGFyZ2V0XTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDbHVzdGVySGV4SXRlbTogUmVhY3QuRkM8Q2x1c3RlckhleEl0ZW1Qcm9wcz4gPSAoeyBuYW1lLCB0eXBlLCBpcCwgZmlsdGVyLCByYW5nZSB9KSA9PiB7XHJcbiAgY29uc3QgY29ubiA9IHNldHRpbmdBeGlvcyhpcCk7XHJcbiAgY29uc3QgZmlsdGVyZWQgPSBTZXR0aW5nLmZpbHRlck9wdGlvbi5maWx0ZXIoKGVsKSA9PiBlbC52YWx1ZSA9PT0gZmlsdGVyKTtcclxuXHJcbiAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZTxudW1iZXI+KC0xKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8YW55Pih1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFtsYXRlbmN5LCBzZXRMYXRlbmN5XSA9IHVzZVN0YXRlPG51bWJlcj4oLTEpO1xyXG4gIGNvbnN0IFthbWRHcHVMaXN0LCBzZXRBbWRHcHVMaXN0XSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcbiAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZTxib29sZWFuIHwgbW91c2VYWT4oZmFsc2UpO1xyXG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZTx2YWx1ZVByb3BzW10+KFtdKTtcclxuICBjb25zdCB0ZXN0ID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5XTtcclxuXHJcbiAgY29uc3QgZW52QU1EID0gU2V0dGluZy5hbWQ7XHJcbiAgY29uc3QgZW52TlZJRElBID0gU2V0dGluZy5udmlkaWE7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdW5tb3VudCA9IGZhbHNlO1xyXG4gICAgY29uc3Qgb25Mb2FkQXBpID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB1cmwgPSB0eXBlID09PSAnYW1kJyA/IGAvJHt0eXBlfS9hcGkvbWluYCA6IGAvJHt0eXBlfS9hcGlgO1xyXG4gICAgICBjb25uXHJcbiAgICAgICAgLmdldCh1cmwpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAodW5tb3VudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgIHNldER1cmF0aW9uKHJlc3BvbnNlLmNvbmZpZy5wYXJhbXMuZHVyYXRpb24pO1xyXG5cclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBzZXRMYXRlbmN5KHJlc3BvbnNlLmRhdGEuY29tbWFuZERlbGF5KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnbnZpZGlhJykge1xyXG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmVycm9yID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzcG9uc2UuZGF0YS5zbWlSZXN1bHQubnZpZGlhX3NtaV9sb2cpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLmRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnYW1kJykge1xyXG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmVycm9yID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFtZEdwdUxpc3QubGVuZ3RoICE9PSByZXNwb25zZS5kYXRhLnNtaVJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgc2V0QW1kR3B1TGlzdChPYmplY3Qua2V5cyhyZXNwb25zZS5kYXRhLnNtaVJlc3VsdCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLmRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UmVzdWx0KHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBpZiAodW5tb3VudCkgcmV0dXJuO1xyXG4gICAgICAgICAgc2V0RHVyYXRpb24oLTEpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgb25Mb2FkQXBpKCk7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB1bm1vdW50ID0gdHJ1ZTtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgaWYgKHR5cGUgPT09ICdhbWQnICYmIGFtZEdwdUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YS5zbWlSZXN1bHQ7XHJcbiAgICAgICAgY29uc3QgdGVtcEFycmF5OiB2YWx1ZVByb3BzW10gPSBbXTtcclxuXHJcbiAgICAgICAgYW1kR3B1TGlzdC5mb3JFYWNoKChkZXZpY2UpID0+IHtcclxuICAgICAgICAgIGlmIChkZXZpY2UgPT09ICdzeXN0ZW0nKSByZXR1cm47XHJcbiAgICAgICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0ZW1wQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgbmFtZTogZGF0YVtkZXZpY2VdW2VudkFNRC5kZXZpY2VOYW1lXSxcclxuICAgICAgICAgICAgICB2YWx1ZTogZGF0YVtkZXZpY2VdW2ZpbHRlcmVkWzBdLmFtZF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VmFsdWVzKHRlbXBBcnJheSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGUgPT09ICdudmlkaWEnKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdC5ncHU7XHJcbiAgICAgICAgY29uc3QgdGVtcEFycmF5OiB2YWx1ZVByb3BzW10gPSBbXTtcclxuICAgICAgICBkYXRhLmZvckVhY2goKGRldmljZSwgZGV2aWNlSW5kZXgpID0+IHtcclxuICAgICAgICAgIHRlbXBBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgbmFtZTogZGV2aWNlW2Vudk5WSURJQS5kZXZpY2VOYW1lXSxcclxuICAgICAgICAgICAgdmFsdWU6IGZpbmRUcmVlSW5OdmlkaWEoZGF0YVtkZXZpY2VJbmRleF0sIGZpbHRlcmVkWzBdLm52aWRpYSlcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFZhbHVlcyh0ZW1wQXJyYXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3Jlc3VsdF0pO1xyXG5cclxuICBjb25zdCBnZXRQYXJzZVZhbHVlID0gKCkgPT4ge1xyXG4gICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHJldHVybiAwO1xyXG4gICAgc3dpdGNoIChyYW5nZSkge1xyXG4gICAgICBjYXNlICdhdmcnOlxyXG4gICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgIHZhbHVlcy5mb3JFYWNoKChlbCkgPT4gKHN1bSArPSBwYXJzZUludChlbC52YWx1ZSwgMTApKSk7XHJcbiAgICAgICAgcmV0dXJuIHN1bSAvIHZhbHVlcy5sZW5ndGggfHwgMDtcclxuICAgICAgY2FzZSAnbWF4JzpcclxuICAgICAgICBsZXQgbWF4ID0gLUluZmluaXR5O1xyXG4gICAgICAgIHZhbHVlcy5mb3JFYWNoKChlbCkgPT4gKG1heCA9IE1hdGgubWF4KG1heCwgcGFyc2VJbnQoZWwudmFsdWUsIDEwKSkpKTtcclxuICAgICAgICByZXR1cm4gbWF4O1xyXG4gICAgICBjYXNlICdtaW4nOlxyXG4gICAgICAgIGxldCBtaW4gPSBJbmZpbml0eTtcclxuICAgICAgICB2YWx1ZXMuZm9yRWFjaCgoZWwpID0+IChtaW4gPSBNYXRoLm1pbihtaW4sIHBhcnNlSW50KGVsLnZhbHVlLCAxMCkpKSk7XHJcbiAgICAgICAgcmV0dXJuIG1pbjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIHt0ZXN0Lm1hcCgoXywga2V5KSA9PiAoICovfVxyXG4gICAgICA8U3R5bGVkSXRlbVdyYXBwZXJcclxuICAgICAgICAvLyBrZXk9e2tleX1cclxuICAgICAgICBjb25uZWN0PXtkdXJhdGlvbiAhPT0gLTF9XHJcbiAgICAgICAgdmFsdWU9ezB9XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4gc2V0SG92ZXIoeyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9KX1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyKGZhbHNlKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxTdHlsZWRWYWx1ZVN0YXR1cyB2YWx1ZT17Z2V0UGFyc2VWYWx1ZSgpICogMC4wMX0gLz5cclxuICAgICAgICA8U3R5bGVkQ29ubmVjdGlvblN0YXR1cyBjb25uZWN0PXtkdXJhdGlvbiAhPT0gLTF9PjwvU3R5bGVkQ29ubmVjdGlvblN0YXR1cz5cclxuICAgICAgICA8U3R5bGVkSG92ZXJDb250ZW50IGhvdmVyPXtob3Zlcn0+XHJcbiAgICAgICAgICA8U3R5bGVkSG92ZXJDb250ZW50Qm9keVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eydzdWJqZWN0J30+TmFtZTwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyd2YWx1ZSd9PntuYW1lfTwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eydzdWJqZWN0J30+TmV0d29yazwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyd2YWx1ZSd9PntkdXJhdGlvbiA9PT0gLTEgPyAnJyA6IGAke2R1cmF0aW9uIC8gMTAwMH1zYH08L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsnc3ViamVjdCd9PkNvbW1hbmQ8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsndmFsdWUnfT57bGF0ZW5jeSA9PT0gLTEgPyAnJyA6IGAke2xhdGVuY3kgLyAxMDAwfXNgfTwvbGk+XHJcbiAgICAgICAgICAgIHt2YWx1ZXMubWFwKChlbCwgZWxJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2VsSW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17J3N1YmplY3QnfT57ZWwubmFtZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17J3ZhbHVlJ30+e2VsLnZhbHVlfTwvbGk+XHJcbiAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1N0eWxlZEhvdmVyQ29udGVudEJvZHlXcmFwcGVyPlxyXG4gICAgICAgIDwvU3R5bGVkSG92ZXJDb250ZW50PlxyXG4gICAgICA8L1N0eWxlZEl0ZW1XcmFwcGVyPlxyXG4gICAgICB7LyogKSl9ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsdXN0ZXJIZXhJdGVtO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5cclxuaW1wb3J0IFBhbmVsIGZyb20gJy4uL2F0b21zL1BhbmVsJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9hdG9tcy9CdXR0b24nO1xyXG5cclxuZXhwb3J0IHR5cGUgVG9kb0l0ZW1Qcm9wcyA9IHtcclxuICAvKipcclxuICAgKiBJdGVtIG5hbWVcclxuICAgKi9cclxuICBuYW1lPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEl0ZW0gbGlua1xyXG4gICAqL1xyXG4gIGxpbms/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBUb2RvUHJvcHMgPSB7XHJcbiAgLyoqXHJcbiAgICogVGl0bGVcclxuICAgKi9cclxuICB0aXRsZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBTdWIgdGl0bGVcclxuICAgKi9cclxuICBzdWJ0aXRsZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBUb2RvIGFycmF5XHJcbiAgICovXHJcbiAgaXRlbXM/OiBUb2RvSXRlbVByb3BzW107XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVG9kbzogUmVhY3QuRkM8VG9kb1Byb3BzPiA9ICh7XHJcbiAgdGl0bGUgPSB1bmRlZmluZWQsXHJcbiAgc3VidGl0bGUgPSB1bmRlZmluZWQsXHJcbiAgaXRlbXMgPSBbXVxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQYW5lbD5cclxuICAgICAge3N1YnRpdGxlICYmIDxoMyBjbGFzc05hbWU9eydwYW5lbC1zdWItdGl0bGUnfT57c3VidGl0bGV9PC9oMz59XHJcbiAgICAgIHt0aXRsZSAmJiA8aDIgY2xhc3NOYW1lPXsncGFuZWwtdGl0bGUnfT57dGl0bGV9PC9oMj59XHJcbiAgICAgIHtpdGVtcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3BhbmVsLWNvbnRlbnQnfT5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKGVsLCBlbElkeCkgPT4gKFxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXtlbElkeH1cclxuICAgICAgICAgICAgICAvLyBkaXNhYmxlZD17ZWwubGluayA9PT0gdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgIHByaW1hcnk9e2VsLmxpbmsgPT09IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwubGluayA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKCdOb3QgeWV0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wLWNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgLyR7ZWwubGlua31gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2VsLm5hbWV9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L1BhbmVsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0ICcuLi8uLi9sb2NhbGVzL2kxOG4nO1xyXG5cclxuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gJy4uLy4uL3N0eWxlcy9nbG9iYWwtc3R5bGVzJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL3N0eWxlcy90aGVtZSc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9zdHlsZXMvdGhlbWVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcblxyXG5jb25zdCBTdHlsZWRUb2FzdENvbnRhaW5lciA9IHN0eWxlZChUb2FzdENvbnRhaW5lcikuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ3RvYXN0LWNvbnRhaW5lcicsXHJcbiAgdG9hc3RDbGFzc05hbWU6ICd0b2FzdCcsXHJcbiAgYm9keUNsYXNzTmFtZTogJ2JvZHknLFxyXG4gIHByb2dyZXNzQ2xhc3NOYW1lOiAncHJvZ3Jlc3MnLFxyXG59KWBcclxuICAvKiAudG9hc3QtY29udGFpbmVyICovXHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG5cclxuICAgLyogLnRvYXN0IGlzIHBhc3NlZCB0byB0b2FzdENsYXNzTmFtZSAqL1xyXG4gIC50b2FzdCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWluLWhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIGJ1dHRvblthcmlhLWxhYmVsPVwiY2xvc2VcIl0ge1xyXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cclxuICB9XHJcblxyXG4gIC8qIC5ib2R5IGlzIHBhc3NlZCB0byBib2R5Q2xhc3NOYW1lICovXHJcbiAgLmJvZHkge1xyXG4gICAgdGV4dC1pbmRlbnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAvKiAucHJvZ3Jlc3MgaXMgcGFzc2VkIHRvIHByb2dyZXNzQ2xhc3NOYW1lICovXHJcbiAgLnByb2dyZXNzIHt9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tZWRpYS50YWJsZXRgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBgfVxyXG4gICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubWVkaWEubW9iaWxlYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgYH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFN0eWxlZFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxTdHlsZWRXcmFwcGVyPntjaGlsZHJlbn08L1N0eWxlZFdyYXBwZXI+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyOyIsIi8vIGltcG9ydCBKU1ppcCBmcm9tICdqc3ppcCdcclxuLy8gaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcidcclxuLy8gaW1wb3J0IHhtbCBmcm9tICd4bWxzZXJpYWxpemVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFV0aWwgPSB7XHJcbiAgY29sb3JzOiBbXHJcbiAgICAnIzlkOTZmNScsXHJcbiAgICAnI2U3YmNmMycsXHJcbiAgICAnI2U2OTBkMScsXHJcbiAgICAnI2ZiNzI5MycsXHJcbiAgICAnI2ZmOWY3ZicsXHJcbiAgICAnI2ZmZGI1YycsXHJcbiAgICAnIzlmZTZiOCcsXHJcbiAgICAnIzY3ZTBlMycsXHJcbiAgICAnIzM3YTJkYScsXHJcbiAgICAnIzQ0MjRBNycsXHJcbiAgICAnIzgzNzhlYScsXHJcblxyXG4gICAgJyMzN0EyREEnLFxyXG4gICAgJyMzMkM1RTknLFxyXG4gICAgJyM2N0UwRTMnLFxyXG4gICAgJyM5RkU2QjgnLFxyXG4gICAgJyNGRkRCNUMnLFxyXG4gICAgJyNGRjlGN0YnLFxyXG4gICAgJyNGQjcyOTMnLFxyXG4gICAgJyNFMDYyQUUnLFxyXG4gICAgJyNFNjkwRDEnLFxyXG4gICAgJyNFN0JDRjMnLFxyXG4gICAgJyM5RDk2RjUnLFxyXG4gICAgJyM4Mzc4RUEnLFxyXG4gICAgJyM5NkJGRkYnXHJcbiAgXSxcclxuXHJcbiAgZ2V0WVlZWU1NREQ6ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgcGFkMiA9IChuOiBudW1iZXIpID0+IHtcclxuICAgICAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4gOiBuO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkgK1xyXG4gICAgICBwYWQyKGRhdGUuZ2V0TW9udGgoKSArIDEpICtcclxuICAgICAgcGFkMihkYXRlLmdldERhdGUoKSkgK1xyXG4gICAgICBwYWQyKGRhdGUuZ2V0SG91cnMoKSkgK1xyXG4gICAgICBwYWQyKGRhdGUuZ2V0TWludXRlcygpKSArXHJcbiAgICAgIHBhZDIoZGF0ZS5nZXRTZWNvbmRzKCkpXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgZ2V0TU1TUzogKCk6IHN0cmluZyA9PiB7XHJcbiAgICBjb25zdCBwYWQyID0gKG46IG51bWJlcikgPT4ge1xyXG4gICAgICByZXR1cm4gbiA8IDEwID8gJzAnICsgbiA6IG47XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICByZXR1cm4gJycgKyBwYWQyKGRhdGUuZ2V0TWludXRlcygpKSArICc6JyArIHBhZDIoZGF0ZS5nZXRTZWNvbmRzKCkpO1xyXG4gIH0sXHJcbiAgZXhwb3J0Q1NWRmlsZTogKGNzdjogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCBoZWFkZXI/OiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgIGlmIChoZWFkZXIpIGNzdiA9IFtoZWFkZXIsIGNzdl0uam9pbignXFxuJyk7XHJcbiAgICBjb25zdCBmaWxlVHlwZSA9ICd0eHQvY3N2O2NoYXJzZXQ9dXRmLTgnO1xyXG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGUuc2V0QXR0cmlidXRlKCdocmVmJywgJ2RhdGE6JyArIGZpbGVUeXBlICsgJywnICsgZW5jb2RlVVJJQ29tcG9uZW50KGNzdikpO1xyXG4gICAgZS5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgZmlsZU5hbWUpO1xyXG4gICAgZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKTtcclxuICAgIGUuY2xpY2soKTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZSk7XHJcbiAgfSxcclxuICB6ZXJvUGFkOiAobnVtOiBudW1iZXIsIG51bVplcm9zOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgbiA9IE1hdGguYWJzKG51bSk7XHJcbiAgICBjb25zdCB6ZXJvcyA9IE1hdGgubWF4KDAsIG51bVplcm9zIC0gTWF0aC5mbG9vcihuKS50b1N0cmluZygpLmxlbmd0aCk7XHJcbiAgICBsZXQgemVyb1N0cmluZyA9IE1hdGgucG93KDEwLCB6ZXJvcykudG9TdHJpbmcoKS5zdWJzdHIoMSk7XHJcbiAgICBpZiAobnVtIDwgMCkge1xyXG4gICAgICB6ZXJvU3RyaW5nID0gJy0nICsgemVyb1N0cmluZztcclxuICAgIH1cclxuICAgIHJldHVybiB6ZXJvU3RyaW5nICsgbjtcclxuICB9LFxyXG4gIGlzRmxvYXQ6ICh2YWw6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gICAgcmV0dXJuIE51bWJlcih2YWwpID09PSBwYXJzZUZsb2F0KHZhbCkgJiYgTnVtYmVyKHZhbCkgJSAxICE9PSAwO1xyXG4gIH0sXHJcbiAgaXNJbnRlZ2VyOiAodmFsOiBzdHJpbmcpOiBib29sZWFuID0+IHtcclxuICAgIHJldHVybiBOdW1iZXIodmFsKSA9PT0gcGFyc2VJbnQodmFsLCAxMCk7XHJcbiAgfSxcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xyXG4gIGdldEhlYWRlcjogKGl0ZW06IGFueSk6IHN0cmluZ1tdID0+IHtcclxuICAgIGNvbnN0IHRlbXA6IHN0cmluZ1tdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IFtrZXldIG9mIE9iamVjdC5lbnRyaWVzKGl0ZW0pKSB7XHJcbiAgICAgIHRlbXAucHVzaChrZXkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlbXA7XHJcbiAgfSxcclxuICBnZXRJbmRleEFycmF5OiAobWF4OiBudW1iZXIsIGluY2x1ZGVNYXggPSBmYWxzZSk6IG51bWJlcltdID0+IHtcclxuICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgbWF4OyBpZHgrKykge1xyXG4gICAgICBhcnIucHVzaChpZHgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGluY2x1ZGVNYXgpIGFyci5wdXNoKG1heCk7XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH0sXHJcbiAgZ2V0RmlsZU5hbWVGcm9tUGF0aDogKGZ1bGxQYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGZ1bGxQYXRoLnJlcGxhY2UoL14uKltcXFxcL10vLCAnJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gdHlwZSBDaGFydE9wdGlvbiA9IHtcclxuLy8gICByYXRpbz86IHN0cmluZztcclxuLy8gICBhZGROdW1iZXJpbmdOYW1lPzogc3RyaW5nO1xyXG4vLyAgIGNoYXJ0VHlwZT86IHN0cmluZztcclxuLy8gfTtcclxuLy8gZXhwb3J0IGNvbnN0IENoYXJ0ID0ge1xyXG4vLyAgIC8qKlxyXG4vLyAgICAqIEBwYXJhbSBjaGFydFNvdXJjZSBzb3VyY2Ugb2YgdXNlZCBlY2hhcnQuXHJcbi8vICAgICogQHBhcmFtIGNoYXJ0TmFtZSBjaGFydCBuYW1lLCB1c2VkIGZpbmRpbmcgY2hhcnQgY2xhc3MuIChleC4gJHtjaGFydFNvdXJjZVtuXVtjaGFydE5hbWVdfS1tY3MtY2hhcnQpLlxyXG4vLyAgICAqIGlmIHlvdSB1c2VkIG9ubHkgc3RyaW5nIGNoYXJ0LW5hbWUsIHRoZW4gY2hhcnROYW1lIGlzICcnXHJcbi8vICAgICogaWYgY2hhcnROYW1lID09PSAnJyB0aGVuIGNhbid0IHVzZSBvcHRpb24uYWRkTnVtYmVyaW5nTmFtZVxyXG4vLyAgICAqIEBwYXJhbSB6aXBOYW1lIHppcCBmaWxlIG5hbWVcclxuLy8gICAgKiBAcGFyYW0gc3VjY2VzcyBjYWxsYmFjayBmdW5jdGlvbiB3aGVuIHN1Y2Nlc3NcclxuLy8gICAgKiBAcGFyYW0gb3B0aW9uIHsgQ2hhcnRPcHRpb24gfVxyXG4vLyAgICAqL1xyXG4vLyAgIGRvd25sb2FkWmlwOiAoXHJcbi8vICAgICBjaGFydFNvdXJjZTogYW55W10sXHJcbi8vICAgICBjaGFydE5hbWU6IHN0cmluZyxcclxuLy8gICAgIHppcE5hbWU6IHN0cmluZyxcclxuLy8gICAgIHN1Y2Nlc3M6ICgpID0+IHZvaWQsXHJcbi8vICAgICBvcHRpb24/OiBDaGFydE9wdGlvbik6IHZvaWQgPT4ge1xyXG4vLyAgICAgY29uc3QgX29wdGlvbjogQ2hhcnRPcHRpb24gPSB7IHJhdGlvOiAnMTAwJywgY2hhcnRUeXBlOiAnY2FudmFzJywgLi4ub3B0aW9uIH1cclxuLy8gICAgIGNvbnN0IHppcCA9IG5ldyBKU1ppcCgpXHJcbi8vICAgICBpZiAoY2hhcnROYW1lID09PSAnJykge1xyXG4vLyAgICAgICBmb3IgKGNvbnN0IG4gaW4gY2hhcnRTb3VyY2UpIHtcclxuLy8gICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtjaGFydFNvdXJjZVtuXX0tbWNzLWNoYXJ0YClcclxuLy8gICAgICAgICBpZiAod3JhcHBlcikge1xyXG4vLyAgICAgICAgICAgaWYgKF9vcHRpb24uY2hhcnRUeXBlID09PSAnc3ZnJykge1xyXG4vLyAgICAgICAgICAgICBjb25zdCBzdmcgPSB3cmFwcGVyWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzdmcnKVswXVxyXG4vLyAgICAgICAgICAgICBjb25zdCBjb3B5U1ZHID0gc3ZnLmNsb25lTm9kZSh0cnVlKSBhcyBTVkdTVkdFbGVtZW50XHJcbi8vICAgICAgICAgICAgIGNvbnN0IHMgPSB4bWwuc2VyaWFsaXplVG9TdHJpbmcoY29weVNWRylcclxuLy8gICAgICAgICAgICAgemlwLmZpbGUoYCR7Y2hhcnRTb3VyY2Vbbl19LnN2Z2AsIHMpXHJcbi8vICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICBjb25zdCBjYW52YXMgPSB3cmFwcGVyWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjYW52YXMnKVswXVxyXG4vLyAgICAgICAgICAgICBjb25zdCByZXNpemVDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxyXG4vLyAgICAgICAgICAgICBjb25zdCBjdHggPSByZXNpemVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG4vLyAgICAgICAgICAgICBpZiAoY3R4KSB7XHJcbi8vICAgICAgICAgICAgICAgY29uc3QgX3cgPSBNYXRoLnJvdW5kKGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAqIChwYXJzZUludChfb3B0aW9uLnJhdGlvIHx8ICcxMDAnLCAxMCkgLyAxMDApKVxyXG4vLyAgICAgICAgICAgICAgIGNvbnN0IF9oID0gTWF0aC5yb3VuZChjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICogKHBhcnNlSW50KF9vcHRpb24ucmF0aW8gfHwgJzEwMCcsIDEwKSAvIDEwMCkpXHJcbi8vICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzLndpZHRoID0gX3dcclxuLy8gICAgICAgICAgICAgICByZXNpemVDYW52YXMuaGVpZ2h0ID0gX2hcclxuLy8gICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGNhbnZhcywgMCwgMCwgX3csIF9oKVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIGNvbnN0IGJhc2U2NEltYWdlID0gcmVzaXplQ2FudmFzLnRvRGF0YVVSTCgpLnJlcGxhY2UoL15kYXRhOmltYWdlXFwvKHBuZ3xqcGcpO2Jhc2U2NCwvLCAnJylcclxuLy8gICAgICAgICAgICAgemlwLmZpbGUoYCR7Y2hhcnRTb3VyY2Vbbl19LnBuZ2AsIGJhc2U2NEltYWdlLCB7IGJhc2U2NDogdHJ1ZSB9KVxyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgZm9yIChjb25zdCBuIGluIGNoYXJ0U291cmNlKSB7XHJcbi8vICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7Y2hhcnRTb3VyY2Vbbl1bY2hhcnROYW1lXX0tbWNzLWNoYXJ0YClcclxuLy8gICAgICAgICBpZiAod3JhcHBlcikge1xyXG4vLyAgICAgICAgICAgaWYgKF9vcHRpb24uY2hhcnRUeXBlID09PSAnc3ZnJykge1xyXG4vLyAgICAgICAgICAgICBjb25zdCBzdmcgPSB3cmFwcGVyWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzdmcnKVswXVxyXG4vLyAgICAgICAgICAgICBjb25zdCBjb3B5U1ZHID0gc3ZnLmNsb25lTm9kZSh0cnVlKSBhcyBTVkdTVkdFbGVtZW50XHJcbi8vICAgICAgICAgICAgIGNvcHlTVkcuc2V0QXR0cmlidXRlKCdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmZmYnKVxyXG4vLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb3B5U1ZHLnZpZXdCb3guYmFzZVZhbClcclxuLy8gICAgICAgICAgICAgY29uc3QgcyA9IHhtbC5zZXJpYWxpemVUb1N0cmluZyhjb3B5U1ZHKVxyXG4vLyAgICAgICAgICAgICB6aXAuZmlsZShgJHtjaGFydFNvdXJjZVtuXVtjaGFydE5hbWVdfS5zdmdgLCBzKVxyXG4vLyAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgY29uc3QgY2FudmFzID0gd3JhcHBlclswXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJylbMF1cclxuLy8gICAgICAgICAgICAgY29uc3QgcmVzaXplQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcclxuLy8gICAgICAgICAgICAgY29uc3QgY3R4ID0gcmVzaXplQ2FudmFzLmdldENvbnRleHQoJzJkJylcclxuLy8gICAgICAgICAgICAgaWYgKGN0eCkge1xyXG4vLyAgICAgICAgICAgICAgIGNvbnN0IF93ID0gTWF0aC5yb3VuZChjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKiAocGFyc2VJbnQoX29wdGlvbi5yYXRpbyB8fCAnMTAwJywgMTApIC8gMTAwKSlcclxuLy8gICAgICAgICAgICAgICBjb25zdCBfaCA9IE1hdGgucm91bmQoY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAqIChwYXJzZUludChfb3B0aW9uLnJhdGlvIHx8ICcxMDAnLCAxMCkgLyAxMDApKVxyXG4vLyAgICAgICAgICAgICAgIHJlc2l6ZUNhbnZhcy53aWR0aCA9IF93XHJcbi8vICAgICAgICAgICAgICAgcmVzaXplQ2FudmFzLmhlaWdodCA9IF9oXHJcbi8vICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShjYW52YXMsIDAsIDAsIF93LCBfaClcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBjb25zdCBiYXNlNjRJbWFnZSA9IHJlc2l6ZUNhbnZhcy50b0RhdGFVUkwoKS5yZXBsYWNlKC9eZGF0YTppbWFnZVxcLyhwbmd8anBnKTtiYXNlNjQsLywgJycpXHJcbi8vICAgICAgICAgICAgIGlmIChfb3B0aW9uLmFkZE51bWJlcmluZ05hbWUpIHtcclxuLy8gICAgICAgICAgICAgICB6aXAuZmlsZShgJHtVdGlsLnplcm9QYWQoY2hhcnRTb3VyY2Vbbl1bX29wdGlvbi5hZGROdW1iZXJpbmdOYW1lXSwgNSl9XyR7Y2hhcnRTb3VyY2Vbbl1bY2hhcnROYW1lXX0ucG5nYCwgYmFzZTY0SW1hZ2UsIHsgYmFzZTY0OiB0cnVlIH0pXHJcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgemlwLmZpbGUoYCR7Y2hhcnRTb3VyY2Vbbl1bY2hhcnROYW1lXX0ucG5nYCwgYmFzZTY0SW1hZ2UsIHsgYmFzZTY0OiB0cnVlIH0pXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIHppcC5nZW5lcmF0ZUFzeW5jKHsgdHlwZTogJ2Jsb2InIH0pLnRoZW4oY29udGVudCA9PiB7XHJcbi8vICAgICAgIHNhdmVBcyhjb250ZW50LCBgJHt6aXBOYW1lfS56aXBgKVxyXG4vLyAgICAgICBzdWNjZXNzKClcclxuLy8gICAgIH0pXHJcbi8vICAgfSxcclxuLy8gICBjb2xvcnM6IFsnIzQ0MjRBNycsICcjODM3OGVhJywgJyM5ZDk2ZjUnLCAnI2U3YmNmMycsICcjZTY5MGQxJywgJyNmYjcyOTMnLCAnI2ZmOWY3ZicsICcjZmZkYjVjJywgJyM5ZmU2YjgnLCAnIzY3ZTBlMycsICcjMzdhMmRhJ11cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXRpbDtcclxuIiwiaW1wb3J0IGkxOG4gZnJvbSAnaTE4bmV4dCc7XHJcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuY29uc3QgcmVzb3VyY2VzID0ge1xyXG4gIGtvOiB7XHJcbiAgICB0cmFuc2xhdGlvbjoge1xyXG4gICAgICAnYnRuLXRlc3Qtc3RhcnQnOiAn7Iuc7J6R7ZWY6riwJyxcclxuXHJcbiAgICAgIHByZXY6ICfsnbTsoIQnLFxyXG4gICAgICBuZXh0OiAn64uk7J2MJ1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuaTE4bi51c2UoaW5pdFJlYWN0STE4bmV4dCkuaW5pdCh7XHJcbiAgcmVzb3VyY2VzLFxyXG4gIGxuZzogJ2tvJ1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgaTE4bjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2F0b21zL0J1dHRvbic7XHJcblxyXG5pbXBvcnQgeyBUb2RvLCBUb2RvUHJvcHMgfSBmcm9tICcuLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Ub2RvJztcclxuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvV3JhcHBlcic7XHJcbmltcG9ydCBDbHVzdGVyQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ2x1c3RlckNoYXJ0JztcclxuaW1wb3J0IENsdXN0ZXJIZXggZnJvbSAnLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ2x1c3RlckhleCc7XHJcblxyXG5leHBvcnQgZW51bSBDbHVzdGVyTW9kZSB7XHJcbiAgbm9uZSA9ICcnLFxyXG4gIGhleCA9ICdoZXgnLFxyXG4gIGNoYXJ0ID0gJ2NoYXJ0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSW5kZXg6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICBjb25zdCBbbW9yZWgsIHNldE1vcmVoXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KENsdXN0ZXJNb2RlLmhleCk7XHJcblxyXG4gIGNvbnN0IGt1YmVybmV0ZXM6IFRvZG9Qcm9wcyA9IHtcclxuICAgIHRpdGxlOiAnS3ViZXJuZXRlcycsXHJcbiAgICBzdWJ0aXRsZTogJ0t1YmVybmV0ZXMgQVBJIHRlc3QnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdBUEknXHJcbiAgICAgICAgLy8gbGluazogJ2t1YmVybmV0ZXMvdGVzdCdcclxuICAgICAgfVxyXG4gICAgICAvLyB7XHJcbiAgICAgIC8vICAgbmFtZTogJ2xvZ2luJ1xyXG4gICAgICAvLyB9LFxyXG4gICAgICAvLyB7XHJcbiAgICAgIC8vICAgbmFtZTogJ3Rva2VuJ1xyXG4gICAgICAvLyB9XHJcbiAgICBdXHJcbiAgfTtcclxuICBjb25zdCBudmlkaWE6IFRvZG9Qcm9wcyA9IHtcclxuICAgIHRpdGxlOiAnTlZJRElBJyxcclxuICAgIHN1YnRpdGxlOiAnZGFzaGJvYXJkIChudmlkaWEtc21pKScsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3AxMDAnLFxyXG4gICAgICAgIGxpbms6ICdudmlkaWEvZGFzaGJvYXJkJ1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfTtcclxuICBjb25zdCBhbWQ6IFRvZG9Qcm9wcyA9IHtcclxuICAgIHRpdGxlOiAnQU1EJyxcclxuICAgIHN1YnRpdGxlOiAnZGFzaGJvYXJkIChyb2NtLXNtaSknLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdyeDUxJyxcclxuICAgICAgICBsaW5rOiAnYW1kL2Rhc2hib2FyZDEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAncng1MicsXHJcbiAgICAgICAgbGluazogJ2FtZC9kYXNoYm9hcmQyJ1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfTtcclxuICBjb25zdCBldGM6IFRvZG9Qcm9wcyA9IHtcclxuICAgIHRpdGxlOiAnREFTSEJPQVJEJyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnbWFudWFsJyxcclxuICAgICAgICBsaW5rOiAndG90YWwvbWFudWFsJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3AxMDAgKyByeDUxICsgcng1MicsXHJcbiAgICAgICAgbGluazogJ3RvdGFsL2Rhc2hib2FyZCdcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcbiAgY29uc3QgZG9jOiBUb2RvUHJvcHMgPSB7XHJcbiAgICB0aXRsZTogJ0RvY3VtZW50JyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnUkVBRE1FJyxcclxuICAgICAgICBsaW5rOiAnZG9jL3JlYWRtZSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdkZXYgdGVzdCcsXHJcbiAgICAgICAgbGluazogJ2RvYy90ZXN0J1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc3QgY2hhbmdlbGFuZ3VhZ2VUb0tvID0gKCkgPT4gaTE4bi5jaGFuZ2VMYW5ndWFnZSgna28nKTtcclxuICAvLyBjb25zdCBjaGFuZ2VsYW5ndWFnZVRvRW4gPSAoKSA9PiBpMThuLmNoYW5nZUxhbmd1YWdlKCdlbicpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgey8qIDxidXR0b24gdHlwZT17J2J1dHRvbid9IG9uQ2xpY2s9e2NoYW5nZWxhbmd1YWdlVG9Lb30+XHJcbiAgICAgICAg7ZWc6rWt7Ja0XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9eydidXR0b24nfSBvbkNsaWNrPXtjaGFuZ2VsYW5ndWFnZVRvRW59PlxyXG4gICAgICAgIEVuZ2xpc2hcclxuICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICA8aDEgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwJywgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFdlaWdodDogNjAwIH19PkFkbWluIFBhZ2U8L2gxPlxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDxCdXR0b24gcHJpbWFyeT17bW9yZWh9IG9uQ2xpY2s9eygpID0+IHNldE1vcmVoKChwcmV2KSA9PiAhcHJldil9PlxyXG4gICAgICAgICAge21vcmVoID8gJ01vcmVoID4gVXNlcicgOiAnVXNlciA+IE1vcmVoJ31cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICB7IW1vcmVoICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBtb2RlID09PSBDbHVzdGVyTW9kZS5oZXggPyAnI2IwNjYwMScgOiAnJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBtb2RlID09PSBDbHVzdGVyTW9kZS5oZXggPyAnI2ZmZDM2YicgOiAnJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kZShDbHVzdGVyTW9kZS5oZXgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgaGV4XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbW9kZSA9PT0gQ2x1c3Rlck1vZGUuY2hhcnQgPyAnI2IwNjYwMScgOiAnJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBtb2RlID09PSBDbHVzdGVyTW9kZS5jaGFydCA/ICcjZmZkMzZiJyA6ICcnXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RlKENsdXN0ZXJNb2RlLmNoYXJ0KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIGNoYXJ0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9uYXY+XHJcblxyXG4gICAgICB7IW1vcmVoICYmIG1vZGUgPT09IENsdXN0ZXJNb2RlLmNoYXJ0ICYmIDxDbHVzdGVyQ2hhcnQgLz59XHJcbiAgICAgIHshbW9yZWggJiYgbW9kZSA9PT0gQ2x1c3Rlck1vZGUuaGV4ICYmIDxDbHVzdGVySGV4IC8+fVxyXG5cclxuICAgICAge21vcmVoICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFRvZG8gey4uLmV0Y30gLz5cclxuICAgICAgICAgIDxUb2RvIHsuLi5kb2N9IC8+XHJcbiAgICAgICAgICA8VG9kbyB7Li4ubnZpZGlhfSAvPlxyXG4gICAgICAgICAgPFRvZG8gey4uLmFtZH0gLz5cclxuICAgICAgICAgIDxUb2RvIHsuLi5rdWJlcm5ldGVzfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCByZXNldCBmcm9tICdzdHlsZWQtcmVzZXQnO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAke3Jlc2V0fVxyXG4gIC8qIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTXVzZW8gU2Fuc1wiO1xyXG4gICAgc3JjOiB1cmwoXCIuLi9mb250cy9lbi9NdXNlbyBTYW5zIDMwMC5PVEZcIik7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gIH1cclxuICBcclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiO1xyXG4gICAgc3JjOiB1cmwoXCIvZm9udHMvZW4vTm90byBTYW5zIFJlZ3VsYXIuT1RGXCIpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICB9ICovXHJcblxyXG4gICoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTXVzZW8gU2FucycsICdOb3RvIFNhbnMnO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB9XHJcbiAgaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSwgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLCBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLCBiLCB1LCBpLCBjZW50ZXIsIGRsLCBkdCwgZGQsIG1lbnUsIG9sLCB1bCwgbGksIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLCB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCwgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWFpbiwgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcbiAgICBmb250LWZhbWlseTogJ011c2VvIFNhbnMnLCAnTm90byBTYW5zJztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgfVxyXG4gIGJvZHkge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2U4ZWFlZDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgaW5wdXQsIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIG9sLCB1bCwgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIGgxIHsgZm9udC1zaXplOiAyZW07IH1cclxuICBoMiB7IGZvbnQtc2l6ZTogMS41ZW07IH1cclxuICBoMyB7IGZvbnQtc2l6ZTogMS4xN2VtOyB9XHJcbiAgaDQgeyBmb250LXNpemU6IDFlbTsgfVxyXG4gIGg1IHsgZm9udC1zaXplOiAuODNlbTsgfVxyXG4gIGg2IHsgZm9udC1zaXplOiAuNjdlbTsgfVxyXG4gIGEge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKiB3aWR0aCAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gIH1cclxuXHJcbiAgIC8qIFRyYWNrICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xyXG4gICAgYm9yZGVyLXJhZGl1cyA6IDNweDtcclxuICB9XHJcblxyXG4gICAvKiBIYW5kbGUgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGU7XHJcbiIsImltcG9ydCBiYXNlU3R5bGVkLCB7IGNzcywgQ1NTUHJvcCwgVGhlbWVkU3R5bGVkSW50ZXJmYWNlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3Qgc2l6ZXM6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7XHJcbiAgbW9iaWxlOiAzMjAsXHJcbiAgdGFibGV0OiA3NjgsXHJcbiAgLy8gZGVza3RvcDogMTAyNFxyXG4gIGRlc2t0b3A6IDEyMDBcclxufTtcclxuXHJcbnR5cGUgQmFja1F1b3RlQXJncyA9IHN0cmluZ1tdO1xyXG5cclxudHlwZSBNZWRpYSA9IHtcclxuICBtb2JpbGU6ICguLi5hcmdzOiBCYWNrUXVvdGVBcmdzKSA9PiBDU1NQcm9wIHwgdW5kZWZpbmVkO1xyXG4gIHRhYmxldDogKC4uLmFyZ3M6IEJhY2tRdW90ZUFyZ3MpID0+IENTU1Byb3AgfCB1bmRlZmluZWQ7XHJcbiAgZGVza3RvcDogKC4uLmFyZ3M6IEJhY2tRdW90ZUFyZ3MpID0+IENTU1Byb3AgfCB1bmRlZmluZWQ7XHJcbn07XHJcblxyXG5jb25zdCBtZWRpYTogTWVkaWEgPSB7XHJcbiAgbW9iaWxlOiAoLi4uYXJnczogQmFja1F1b3RlQXJncykgPT4gdW5kZWZpbmVkLFxyXG4gIHRhYmxldDogKC4uLmFyZ3M6IEJhY2tRdW90ZUFyZ3MpID0+IHVuZGVmaW5lZCxcclxuICBkZXNrdG9wOiAoLi4uYXJnczogQmFja1F1b3RlQXJncykgPT4gdW5kZWZpbmVkXHJcbn07XHJcblxyXG5PYmplY3Qua2V5cyhzaXplcykucmVkdWNlKChhY2M6IE1lZGlhLCBsYWJlbDogc3RyaW5nKSA9PiB7XHJcbiAgc3dpdGNoIChsYWJlbCkge1xyXG4gICAgY2FzZSAnZGVza3RvcCc6XHJcbiAgICAgIGFjYy5kZXNrdG9wID0gKC4uLmFyZ3M6IEJhY2tRdW90ZUFyZ3MpID0+IGNzc2BcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZXMuZGVza3RvcH1weCkge1xyXG4gICAgICAgICAgJHthcmdzfVxyXG4gICAgICAgIH1cclxuICAgICAgYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICd0YWJsZXQnOlxyXG4gICAgICBhY2MudGFibGV0ID0gKC4uLmFyZ3M6IEJhY2tRdW90ZUFyZ3MpID0+IGNzc2BcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7c2l6ZXMuZGVza3RvcH1weCkgYW5kIChtaW4td2lkdGg6ICR7c2l6ZXMudGFibGV0fXB4KSB7XHJcbiAgICAgICAgICAke2FyZ3N9XHJcbiAgICAgICAgfVxyXG4gICAgICBgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ21vYmlsZSc6XHJcbiAgICAgIGFjYy5tb2JpbGUgPSAoLi4uYXJnczogQmFja1F1b3RlQXJncykgPT4gY3NzYFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtzaXplcy50YWJsZXR9cHgpIHtcclxuICAgICAgICAgICR7YXJnc31cclxuICAgICAgICB9XHJcbiAgICAgIGA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiBhY2M7XHJcbn0sIG1lZGlhKTtcclxuXHJcbmNvbnN0IGNvbG9ycyA9IHtcclxuICBtYWluOiAnIzI3MkEzNCcsXHJcbiAgc3ViOiAnIzcyNzk4NScsXHJcbiAgYmxhY2s6ICcjMjIyMjIyJyxcclxuICBncmF5ODogJyM4ODg4ODgnLFxyXG4gIGdyYXlBOiAnI2FhYWFhYScsXHJcbiAgZ3JheUM6ICcjY2FjYWNhJyxcclxuICBncmF5RDogJyNkYWRjZTAnLFxyXG4gIGdyYXlFOiAnI2U4ZWFlZCcsXHJcbiAgZ3JheUY6ICcjZjVmNWY1JyxcclxuICBiYWNrZ3JvdW5kOiAnIzIxMTUxMCcsXHJcbiAgYm9yZGVyOiAnIzUwNDEzNycsXHJcbiAgYnV0dG9uOiAnIzlmMTYwMCcsXHJcbiAgaG92ZXI6ICcjZjhiNzAwJyxcclxuICBwcmltYXJ5OiAnIzE3MGUwOScsXHJcbiAgc2Vjb25kYXJ5OiAnI2M3N2UxOScsXHJcbiAgc3VjY2VzczogJyMxMzczMzMnLFxyXG4gIGRhbmdlcjogJyNlYTMwMTInLFxyXG4gIHdhcm5pbmc6ICcjZmRjYzVlJyxcclxuICBpbmZvOiAnI2Y3YjEwYScsXHJcbiAgd2hpdGU6ICcjZmZmZmZmJ1xyXG59O1xyXG5cclxuY29uc3Qgc2Vjb25kYXJ5Q29sb3JzID0ge307XHJcbmNvbnN0IGZvbnRGYW1pbHkgPSBbJ011c2VvIFNhbnMnLCAnTm90byBTYW5zJywgJ0FyaWFsJywgJ0NvdXJpZXInXS5qb2luKCcsJyk7XHJcbmNvbnN0IGZvbnRTaXplcyA9IHtcclxuICBoMTogJzMycHgnLFxyXG4gIGgyOiAnMjRweCcsXHJcbiAgaDM6ICcyMHB4JyxcclxuICBzdWJ0aXRsZTE2OiAnMTZweCcsIC8vICBoNFxyXG4gIGJvZHkxNDogJzE0cHgnLCAvLyAgaDVcclxuICBjYXRpb24xMjogJzEycHgnIC8vICBoNlxyXG59O1xyXG5cclxuY29uc3QgdGhlbWUgPSB7XHJcbiAgY29sb3JzLFxyXG4gIGZvbnRTaXplcyxcclxuICBmb250RmFtaWx5LFxyXG4gIHNlY29uZGFyeUNvbG9ycyxcclxuICBtZWRpYVxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgVGhlbWUgPSB0eXBlb2YgdGhlbWU7XHJcbmV4cG9ydCBjb25zdCBzdHlsZWQgPSBiYXNlU3R5bGVkIGFzIFRoZW1lZFN0eWxlZEludGVyZmFjZTxUaGVtZT47XHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xyXG4iLCJpbXBvcnQgKiBhcyBzdHlsZWRDb21wb25lbnRzIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuL3RoZW1lJztcclxuXHJcbmNvbnN0IHtcclxuICBkZWZhdWx0OiBzdHlsZWQsXHJcbiAgY3NzLFxyXG4gIGtleWZyYW1lcyxcclxuICBUaGVtZVByb3ZpZGVyXHJcbn0gPSBzdHlsZWRDb21wb25lbnRzIGFzIHN0eWxlZENvbXBvbmVudHMuVGhlbWVkU3R5bGVkQ29tcG9uZW50c01vZHVsZTxUaGVtZT47XHJcblxyXG5leHBvcnQgeyBjc3MsIGtleWZyYW1lcywgVGhlbWVQcm92aWRlciB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlY2hhcnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVjaGFydHMtZm9yLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLXJlc2V0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=