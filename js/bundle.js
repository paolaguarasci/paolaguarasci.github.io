/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _src_scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_js_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _src_js_main_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_js_main_js__WEBPACK_IMPORTED_MODULE_1__);\n__webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n\n\n\nfunction requireAll(r) {\n  r.keys().forEach(r);\n}\n\n// Import all IMG files\nconst img = requireAll(__webpack_require__(\"./src/img sync recursive \\\\.(png|jpg|gif)$\"));\n\n// Import all HTML files\nrequireAll(__webpack_require__(\"./src sync recursive \\\\.(html|htm|)$\"));\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./node_modules/normalize.css/normalize.css?");

/***/ }),

/***/ "./src sync recursive \\.(html|htm|)$":
/*!*********************************!*\
  !*** ./src sync \.(html|htm|)$ ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./html/about.html\": \"./src/html/about.html\",\n\t\"./html/contact.html\": \"./src/html/contact.html\",\n\t\"./html/index.html\": \"./src/html/index.html\",\n\t\"./html/work.html\": \"./src/html/work.html\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src sync recursive \\\\.(html|htm|)$\";\n\n//# sourceURL=webpack:///./src_sync_\\.(html%7Chtm%7C)$?");

/***/ }),

/***/ "./src/html/about.html":
/*!*****************************!*\
  !*** ./src/html/about.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"about.html\";\n\n//# sourceURL=webpack:///./src/html/about.html?");

/***/ }),

/***/ "./src/html/contact.html":
/*!*******************************!*\
  !*** ./src/html/contact.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"contact.html\";\n\n//# sourceURL=webpack:///./src/html/contact.html?");

/***/ }),

/***/ "./src/html/index.html":
/*!*****************************!*\
  !*** ./src/html/index.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"index.html\";\n\n//# sourceURL=webpack:///./src/html/index.html?");

/***/ }),

/***/ "./src/html/work.html":
/*!****************************!*\
  !*** ./src/html/work.html ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"work.html\";\n\n//# sourceURL=webpack:///./src/html/work.html?");

/***/ }),

/***/ "./src/img sync recursive \\.(png|jpg|gif)$":
/*!***************************************!*\
  !*** ./src/img sync \.(png|jpg|gif)$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./background.jpg\": \"./src/img/background.jpg\",\n\t\"./icon/android-icon-144x144.png\": \"./src/img/icon/android-icon-144x144.png\",\n\t\"./icon/android-icon-192x192.png\": \"./src/img/icon/android-icon-192x192.png\",\n\t\"./icon/android-icon-36x36.png\": \"./src/img/icon/android-icon-36x36.png\",\n\t\"./icon/android-icon-48x48.png\": \"./src/img/icon/android-icon-48x48.png\",\n\t\"./icon/android-icon-72x72.png\": \"./src/img/icon/android-icon-72x72.png\",\n\t\"./icon/android-icon-96x96.png\": \"./src/img/icon/android-icon-96x96.png\",\n\t\"./icon/apple-icon-114x114.png\": \"./src/img/icon/apple-icon-114x114.png\",\n\t\"./icon/apple-icon-120x120.png\": \"./src/img/icon/apple-icon-120x120.png\",\n\t\"./icon/apple-icon-144x144.png\": \"./src/img/icon/apple-icon-144x144.png\",\n\t\"./icon/apple-icon-152x152.png\": \"./src/img/icon/apple-icon-152x152.png\",\n\t\"./icon/apple-icon-180x180.png\": \"./src/img/icon/apple-icon-180x180.png\",\n\t\"./icon/apple-icon-57x57.png\": \"./src/img/icon/apple-icon-57x57.png\",\n\t\"./icon/apple-icon-60x60.png\": \"./src/img/icon/apple-icon-60x60.png\",\n\t\"./icon/apple-icon-72x72.png\": \"./src/img/icon/apple-icon-72x72.png\",\n\t\"./icon/apple-icon-76x76.png\": \"./src/img/icon/apple-icon-76x76.png\",\n\t\"./icon/apple-icon-precomposed.png\": \"./src/img/icon/apple-icon-precomposed.png\",\n\t\"./icon/apple-icon.png\": \"./src/img/icon/apple-icon.png\",\n\t\"./icon/favicon-16x16.png\": \"./src/img/icon/favicon-16x16.png\",\n\t\"./icon/favicon-32x32.png\": \"./src/img/icon/favicon-32x32.png\",\n\t\"./icon/favicon-96x96.png\": \"./src/img/icon/favicon-96x96.png\",\n\t\"./icon/ms-icon-144x144.png\": \"./src/img/icon/ms-icon-144x144.png\",\n\t\"./icon/ms-icon-150x150.png\": \"./src/img/icon/ms-icon-150x150.png\",\n\t\"./icon/ms-icon-310x310.png\": \"./src/img/icon/ms-icon-310x310.png\",\n\t\"./icon/ms-icon-70x70.png\": \"./src/img/icon/ms-icon-70x70.png\",\n\t\"./me.jpg\": \"./src/img/me.jpg\",\n\t\"./me_small.jpg\": \"./src/img/me_small.jpg\",\n\t\"./projects/project01.jpg\": \"./src/img/projects/project01.jpg\",\n\t\"./projects/project01_big.jpg\": \"./src/img/projects/project01_big.jpg\",\n\t\"./projects/project02.jpg\": \"./src/img/projects/project02.jpg\",\n\t\"./projects/project02_big.jpg\": \"./src/img/projects/project02_big.jpg\",\n\t\"./projects/project03.jpg\": \"./src/img/projects/project03.jpg\",\n\t\"./projects/project03_big.jpg\": \"./src/img/projects/project03_big.jpg\",\n\t\"./projects/project04.jpg\": \"./src/img/projects/project04.jpg\",\n\t\"./projects/project04_big.jpg\": \"./src/img/projects/project04_big.jpg\",\n\t\"./projects/project05.jpg\": \"./src/img/projects/project05.jpg\",\n\t\"./projects/project05_big.jpg\": \"./src/img/projects/project05_big.jpg\",\n\t\"./projects/project06.jpg\": \"./src/img/projects/project06.jpg\",\n\t\"./projects/project06_big.jpg\": \"./src/img/projects/project06_big.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img sync recursive \\\\.(png|jpg|gif)$\";\n\n//# sourceURL=webpack:///./src/img_sync_\\.(png%7Cjpg%7Cgif)$?");

/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/background.jpg\";\n\n//# sourceURL=webpack:///./src/img/background.jpg?");

/***/ }),

/***/ "./src/img/icon/android-icon-144x144.png":
/*!***********************************************!*\
  !*** ./src/img/icon/android-icon-144x144.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/android-icon-144x144.png\";\n\n//# sourceURL=webpack:///./src/img/icon/android-icon-144x144.png?");

/***/ }),

/***/ "./src/img/icon/android-icon-192x192.png":
/*!***********************************************!*\
  !*** ./src/img/icon/android-icon-192x192.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/android-icon-192x192.png\";\n\n//# sourceURL=webpack:///./src/img/icon/android-icon-192x192.png?");

/***/ }),

/***/ "./src/img/icon/android-icon-36x36.png":
/*!*********************************************!*\
  !*** ./src/img/icon/android-icon-36x36.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/android-icon-36x36.png\";\n\n//# sourceURL=webpack:///./src/img/icon/android-icon-36x36.png?");

/***/ }),

/***/ "./src/img/icon/android-icon-48x48.png":
/*!*********************************************!*\
  !*** ./src/img/icon/android-icon-48x48.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/android-icon-48x48.png\";\n\n//# sourceURL=webpack:///./src/img/icon/android-icon-48x48.png?");

/***/ }),

/***/ "./src/img/icon/android-icon-72x72.png":
/*!*********************************************!*\
  !*** ./src/img/icon/android-icon-72x72.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/android-icon-72x72.png\";\n\n//# sourceURL=webpack:///./src/img/icon/android-icon-72x72.png?");

/***/ }),

/***/ "./src/img/icon/android-icon-96x96.png":
/*!*********************************************!*\
  !*** ./src/img/icon/android-icon-96x96.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/android-icon-96x96.png\";\n\n//# sourceURL=webpack:///./src/img/icon/android-icon-96x96.png?");

/***/ }),

/***/ "./src/img/icon/apple-icon-114x114.png":
/*!*********************************************!*\
  !*** ./src/img/icon/apple-icon-114x114.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/apple-icon-114x114.png\";\n\n//# sourceURL=webpack:///./src/img/icon/apple-icon-114x114.png?");

/***/ }),

/***/ "./src/img/icon/apple-icon-120x120.png":
/*!*********************************************!*\
  !*** ./src/img/icon/apple-icon-120x120.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/apple-icon-120x120.png\";\n\n//# sourceURL=webpack:///./src/img/icon/apple-icon-120x120.png?");

/***/ }),

/***/ "./src/img/icon/apple-icon-144x144.png":
/*!*********************************************!*\
  !*** ./src/img/icon/apple-icon-144x144.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/apple-icon-144x144.png\";\n\n//# sourceURL=webpack:///./src/img/icon/apple-icon-144x144.png?");

/***/ }),

/***/ "./src/img/icon/apple-icon-152x152.png":
/*!*********************************************!*\
  !*** ./src/img/icon/apple-icon-152x152.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/apple-icon-152x152.png\";\n\n//# sourceURL=webpack:///./src/img/icon/apple-icon-152x152.png?");

/***/ }),

/***/ "./src/img/icon/apple-icon-180x180.png":
/*!*********************************************!*\
  !*** ./src/img/icon/apple-icon-180x180.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/apple-icon-180x180.png\";\n\n//# sourceURL=webpack:///./src/img/icon/apple-icon-180x180.png?");

/***/ }),

/***/ "./src/img/icon/apple-icon-57x57.png":
/*!*******************************************!*\
  !*** ./src/img/icon/apple-icon-57x57.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/apple-icon-57x57.png\";\n\n//# sourceURL=webpack:///./src/img/icon/apple-icon-57x57.png?");

/***/ }),

/***/ "./src/img/icon/apple-icon-60x60.png":
/*!*******************************************!*\
  !*** ./src/img/icon/apple-icon-60x60.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/apple-icon-60x60.png\";\n\n//# sourceURL=webpack:///./src/img/icon/apple-icon-60x60.png?");

/***/ }),

/***/ "./src/img/icon/apple-icon-72x72.png":
/*!*******************************************!*\
  !*** ./src/img/icon/apple-icon-72x72.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/apple-icon-72x72.png\";\n\n//# sourceURL=webpack:///./src/img/icon/apple-icon-72x72.png?");

/***/ }),

/***/ "./src/img/icon/apple-icon-76x76.png":
/*!*******************************************!*\
  !*** ./src/img/icon/apple-icon-76x76.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/apple-icon-76x76.png\";\n\n//# sourceURL=webpack:///./src/img/icon/apple-icon-76x76.png?");

/***/ }),

/***/ "./src/img/icon/apple-icon-precomposed.png":
/*!*************************************************!*\
  !*** ./src/img/icon/apple-icon-precomposed.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/apple-icon-precomposed.png\";\n\n//# sourceURL=webpack:///./src/img/icon/apple-icon-precomposed.png?");

/***/ }),

/***/ "./src/img/icon/apple-icon.png":
/*!*************************************!*\
  !*** ./src/img/icon/apple-icon.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/apple-icon.png\";\n\n//# sourceURL=webpack:///./src/img/icon/apple-icon.png?");

/***/ }),

/***/ "./src/img/icon/favicon-16x16.png":
/*!****************************************!*\
  !*** ./src/img/icon/favicon-16x16.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/favicon-16x16.png\";\n\n//# sourceURL=webpack:///./src/img/icon/favicon-16x16.png?");

/***/ }),

/***/ "./src/img/icon/favicon-32x32.png":
/*!****************************************!*\
  !*** ./src/img/icon/favicon-32x32.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/favicon-32x32.png\";\n\n//# sourceURL=webpack:///./src/img/icon/favicon-32x32.png?");

/***/ }),

/***/ "./src/img/icon/favicon-96x96.png":
/*!****************************************!*\
  !*** ./src/img/icon/favicon-96x96.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/favicon-96x96.png\";\n\n//# sourceURL=webpack:///./src/img/icon/favicon-96x96.png?");

/***/ }),

/***/ "./src/img/icon/ms-icon-144x144.png":
/*!******************************************!*\
  !*** ./src/img/icon/ms-icon-144x144.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/ms-icon-144x144.png\";\n\n//# sourceURL=webpack:///./src/img/icon/ms-icon-144x144.png?");

/***/ }),

/***/ "./src/img/icon/ms-icon-150x150.png":
/*!******************************************!*\
  !*** ./src/img/icon/ms-icon-150x150.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/ms-icon-150x150.png\";\n\n//# sourceURL=webpack:///./src/img/icon/ms-icon-150x150.png?");

/***/ }),

/***/ "./src/img/icon/ms-icon-310x310.png":
/*!******************************************!*\
  !*** ./src/img/icon/ms-icon-310x310.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/ms-icon-310x310.png\";\n\n//# sourceURL=webpack:///./src/img/icon/ms-icon-310x310.png?");

/***/ }),

/***/ "./src/img/icon/ms-icon-70x70.png":
/*!****************************************!*\
  !*** ./src/img/icon/ms-icon-70x70.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/ms-icon-70x70.png\";\n\n//# sourceURL=webpack:///./src/img/icon/ms-icon-70x70.png?");

/***/ }),

/***/ "./src/img/me.jpg":
/*!************************!*\
  !*** ./src/img/me.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/me.jpg\";\n\n//# sourceURL=webpack:///./src/img/me.jpg?");

/***/ }),

/***/ "./src/img/me_small.jpg":
/*!******************************!*\
  !*** ./src/img/me_small.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/me_small.jpg\";\n\n//# sourceURL=webpack:///./src/img/me_small.jpg?");

/***/ }),

/***/ "./src/img/projects/project01.jpg":
/*!****************************************!*\
  !*** ./src/img/projects/project01.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/project01.jpg\";\n\n//# sourceURL=webpack:///./src/img/projects/project01.jpg?");

/***/ }),

/***/ "./src/img/projects/project01_big.jpg":
/*!********************************************!*\
  !*** ./src/img/projects/project01_big.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/project01_big.jpg\";\n\n//# sourceURL=webpack:///./src/img/projects/project01_big.jpg?");

/***/ }),

/***/ "./src/img/projects/project02.jpg":
/*!****************************************!*\
  !*** ./src/img/projects/project02.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/project02.jpg\";\n\n//# sourceURL=webpack:///./src/img/projects/project02.jpg?");

/***/ }),

/***/ "./src/img/projects/project02_big.jpg":
/*!********************************************!*\
  !*** ./src/img/projects/project02_big.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/project02_big.jpg\";\n\n//# sourceURL=webpack:///./src/img/projects/project02_big.jpg?");

/***/ }),

/***/ "./src/img/projects/project03.jpg":
/*!****************************************!*\
  !*** ./src/img/projects/project03.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/project03.jpg\";\n\n//# sourceURL=webpack:///./src/img/projects/project03.jpg?");

/***/ }),

/***/ "./src/img/projects/project03_big.jpg":
/*!********************************************!*\
  !*** ./src/img/projects/project03_big.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/project03_big.jpg\";\n\n//# sourceURL=webpack:///./src/img/projects/project03_big.jpg?");

/***/ }),

/***/ "./src/img/projects/project04.jpg":
/*!****************************************!*\
  !*** ./src/img/projects/project04.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/project04.jpg\";\n\n//# sourceURL=webpack:///./src/img/projects/project04.jpg?");

/***/ }),

/***/ "./src/img/projects/project04_big.jpg":
/*!********************************************!*\
  !*** ./src/img/projects/project04_big.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/project04_big.jpg\";\n\n//# sourceURL=webpack:///./src/img/projects/project04_big.jpg?");

/***/ }),

/***/ "./src/img/projects/project05.jpg":
/*!****************************************!*\
  !*** ./src/img/projects/project05.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/project05.jpg\";\n\n//# sourceURL=webpack:///./src/img/projects/project05.jpg?");

/***/ }),

/***/ "./src/img/projects/project05_big.jpg":
/*!********************************************!*\
  !*** ./src/img/projects/project05_big.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/project05_big.jpg\";\n\n//# sourceURL=webpack:///./src/img/projects/project05_big.jpg?");

/***/ }),

/***/ "./src/img/projects/project06.jpg":
/*!****************************************!*\
  !*** ./src/img/projects/project06.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/project06.jpg\";\n\n//# sourceURL=webpack:///./src/img/projects/project06.jpg?");

/***/ }),

/***/ "./src/img/projects/project06_big.jpg":
/*!********************************************!*\
  !*** ./src/img/projects/project06_big.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/project06_big.jpg\";\n\n//# sourceURL=webpack:///./src/img/projects/project06_big.jpg?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Select DOM Items\nconst menuBtn = document.querySelector(\".menu-btn\");\nconst menu = document.querySelector(\".menu\");\nconst menuNav = document.querySelector(\".menu-nav\");\nconst menuBranding = document.querySelector(\".menu-branding\");\n\nconst navItems = document.querySelectorAll(\".nav-item\");\n\n// Set initial state of Menu\nlet showMenu = false;\n\nfunction toggleMenu() {\n  if (!showMenu) {\n    menuBtn.classList.add(\"close\");\n    menu.classList.add(\"show\");\n    menuNav.classList.add(\"show\");\n    menuBranding.classList.add(\"show\");\n    navItems.forEach(navItem => navItem.classList.add(\"show\"));\n\n    // Set menu status\n    showMenu = true;\n  } else {\n    menuBtn.classList.remove(\"close\");\n    menu.classList.remove(\"show\");\n    menuNav.classList.remove(\"show\");\n    menuBranding.classList.remove(\"show\");\n    navItems.forEach(navItem => navItem.classList.add(\"show\"));\n    // Set menu status\n    showMenu = false;\n  }\n}\n\nmenuBtn.addEventListener(\"click\", toggleMenu);\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_./index.js?");

/***/ })

/******/ });