/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/Ancients/Azathoth.png":
/*!******************************************!*\
  !*** ./src/assets/Ancients/Azathoth.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"e76cc60e6f2b9bb167ce75f3457ed219.png\");\n\n//# sourceURL=webpack://eldritch-codejam/./src/assets/Ancients/Azathoth.png?");

/***/ }),

/***/ "./src/assets/Ancients/Cthulthu.png":
/*!******************************************!*\
  !*** ./src/assets/Ancients/Cthulthu.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"e7bfd029744dc9f87c1ac5f42d90402a.png\");\n\n//# sourceURL=webpack://eldritch-codejam/./src/assets/Ancients/Cthulthu.png?");

/***/ }),

/***/ "./src/assets/Ancients/IogSothoth.png":
/*!********************************************!*\
  !*** ./src/assets/Ancients/IogSothoth.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"c5b7717bff973cda27bed23257e72234.png\");\n\n//# sourceURL=webpack://eldritch-codejam/./src/assets/Ancients/IogSothoth.png?");

/***/ }),

/***/ "./src/assets/Ancients/ShubNiggurath.png":
/*!***********************************************!*\
  !*** ./src/assets/Ancients/ShubNiggurath.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"68c4272e00c9596e65b1806b18598a43.png\");\n\n//# sourceURL=webpack://eldritch-codejam/./src/assets/Ancients/ShubNiggurath.png?");

/***/ }),

/***/ "./src/assets/Ancients/index.js":
/*!**************************************!*\
  !*** ./src/assets/Ancients/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Azathoth_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Azathoth.png */ \"./src/assets/Ancients/Azathoth.png\");\n/* harmony import */ var _Cthulthu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cthulthu.png */ \"./src/assets/Ancients/Cthulthu.png\");\n/* harmony import */ var _IogSothoth_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IogSothoth.png */ \"./src/assets/Ancients/IogSothoth.png\");\n/* harmony import */ var _ShubNiggurath_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShubNiggurath.png */ \"./src/assets/Ancients/ShubNiggurath.png\");\n\r\n\r\n\r\n\r\n\r\nconst ancients = {\r\n  azathoth: _Azathoth_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n  cthulhu: _Cthulthu_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n  iogSothoth: _IogSothoth_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n  shubNiggurath: _ShubNiggurath_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ancients);\n\n//# sourceURL=webpack://eldritch-codejam/./src/assets/Ancients/index.js?");

/***/ }),

/***/ "./src/data/ancients.js":
/*!******************************!*\
  !*** ./src/data/ancients.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/Ancients/index */ \"./src/assets/Ancients/index.js\");\n\r\n\r\nconst ancientsData = [\r\n  {\r\n    id: 'azathoth',\r\n    name: 'azathoth',\r\n    cardFace: _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].azathoth,\r\n    firstStage: {\r\n      greenCards: 1,\r\n      blueCards: 1,\r\n      brownCards: 2,\r\n    },\r\n    secondStage: {\r\n      greenCards: 2,\r\n      blueCards: 1,\r\n      brownCards: 3,\r\n    },\r\n    thirdStage: {\r\n      greenCards: 2,\r\n      blueCards: 0,\r\n      brownCards: 4,\r\n    },\r\n  },\r\n  {\r\n    id: 'cthulhu',\r\n    name: 'cthulhu',\r\n    cardFace: _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cthulhu,\r\n    firstStage: {\r\n      greenCards: 0,\r\n      blueCards: 2,\r\n      brownCards: 2,\r\n    },\r\n    secondStage: {\r\n      greenCards: 1,\r\n      blueCards: 0,\r\n      brownCards: 3,\r\n    },\r\n    thirdStage: {\r\n      greenCards: 3,\r\n      blueCards: 0,\r\n      brownCards: 4,\r\n    },\r\n  },\r\n  {\r\n    id: 'iogSothoth',\r\n    name: 'iogSothoth',\r\n    cardFace: _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].iogSothoth,\r\n    firstStage: {\r\n      greenCards: 0,\r\n      blueCards: 1,\r\n      brownCards: 2,\r\n    },\r\n    secondStage: {\r\n      greenCards: 2,\r\n      blueCards: 1,\r\n      brownCards: 3,\r\n    },\r\n    thirdStage: {\r\n      greenCards: 3,\r\n      blueCards: 0,\r\n      brownCards: 4,\r\n    },\r\n  },\r\n  {\r\n    id: 'shubNiggurath',\r\n    name: 'shubNiggurath',\r\n    cardFace: _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].shubNiggurath,\r\n    firstStage: {\r\n      greenCards: 1,\r\n      blueCards: 1,\r\n      brownCards: 2,\r\n    },\r\n    secondStage: {\r\n      greenCards: 3,\r\n      blueCards: 1,\r\n      brownCards: 2,\r\n    },\r\n    thirdStage: {\r\n      greenCards: 2,\r\n      blueCards: 0,\r\n      brownCards: 4,\r\n    },\r\n  },\r\n]\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ancientsData);\n\n//# sourceURL=webpack://eldritch-codejam/./src/data/ancients.js?");

/***/ }),

/***/ "./src/data/difficulties.js":
/*!**********************************!*\
  !*** ./src/data/difficulties.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst difficulties = [\r\n  {\r\n    id: 'easy',\r\n    name: 'Низкая'\r\n  },\r\n  {\r\n    id: 'normal',\r\n    name: 'Средняя'\r\n  },\r\n  {\r\n    id: 'hard',\r\n    name: 'Высокая'\r\n  },\r\n]\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (difficulties);\n\n//# sourceURL=webpack://eldritch-codejam/./src/data/difficulties.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_difficulties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/difficulties */ \"./src/data/difficulties.js\");\n/* harmony import */ var _data_ancients__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/ancients */ \"./src/data/ancients.js\");\n\r\n\r\n\r\nconsole.log(_data_ancients__WEBPACK_IMPORTED_MODULE_1__[\"default\"][3].id);\r\n\n\n//# sourceURL=webpack://eldritch-codejam/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;