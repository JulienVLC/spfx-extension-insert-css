define("c74ad9b5-542d-478d-aab1-0ff8121cc850_0.0.1", ["@microsoft/sp-application-base","@microsoft/sp-core-library","InsertCustomCssApplicationCustomizerStrings"], function(__WEBPACK_EXTERNAL_MODULE_GPet__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_b5Tc__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "ft/t");
/******/ })
/************************************************************************/
/******/ ({

/***/ "GPet":
/*!*************************************************!*\
  !*** external "@microsoft/sp-application-base" ***!
  \*************************************************/
/*! no static exports found */
/*! exports used: BaseApplicationCustomizer */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_GPet__;

/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/*! exports used: Log */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "b5Tc":
/*!**************************************************************!*\
  !*** external "InsertCustomCssApplicationCustomizerStrings" ***!
  \**************************************************************/
/*! no static exports found */
/*! exports used: Title */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_b5Tc__;

/***/ }),

/***/ "ft/t":
/*!********************************************************************************!*\
  !*** ./lib/extensions/insertCustomCss/InsertCustomCssApplicationCustomizer.js ***!
  \********************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-application-base */ "GPet");
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var InsertCustomCssApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! InsertCustomCssApplicationCustomizerStrings */ "b5Tc");
/* harmony import */ var InsertCustomCssApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(InsertCustomCssApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var LOG_SOURCE = 'InsertCustomCssApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var InsertCustomCssApplicationCustomizer = /** @class */ (function (_super) {
    __extends(InsertCustomCssApplicationCustomizer, _super);
    function InsertCustomCssApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InsertCustomCssApplicationCustomizer.prototype.onInit = function () {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Log"].info(LOG_SOURCE, "Initialized ".concat(InsertCustomCssApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_2__["Title"]));
        var cssUrl = this.context.pageContext.site.absoluteUrl + this.properties.urlCustomCss + "?v=" + (new Date().getTime()); // prevent caching
        var headDOM = document.getElementsByTagName("head")[0] || document.documentElement;
        var customStyle = document.createElement("link");
        customStyle.href = cssUrl;
        customStyle.rel = "stylesheet";
        customStyle.type = "text/css";
        headDOM.insertAdjacentElement("beforeEnd", customStyle);
        return Promise.resolve();
    };
    return InsertCustomCssApplicationCustomizer;
}(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1__["BaseApplicationCustomizer"]));
/* harmony default export */ __webpack_exports__["default"] = (InsertCustomCssApplicationCustomizer);


/***/ })

/******/ })});;
//# sourceMappingURL=insert-custom-css-application-customizer.js.map