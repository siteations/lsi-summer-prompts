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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/p5/lib/p5.js":
/*!***********************************!*\
  !*** ./node_modules/p5/lib/p5.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\r\n} catch (e) {\r\n\t// This works if the window reference is available\r\n\tif (typeof window === \"object\") g = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/Button.js":
/*!***********************!*\
  !*** ./src/Button.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar wb = 100;\n\n// Button class\nclass Button {\n  constructor(name, x, y, order) {\n  this.w = wb;\n  this.h = 30;\n  this.x = x;\n  this.y = y;\n  this.name = name;\n\n  // for updates logging\n  this.order = order;\n  this.active = false\n  }\n\n  // for state updates\n  mouse (){\n  \treturn (p5.mouseX>this.x && p5.mouseX<this.x+this.w) && (p5.mouseY>this.y && p5.mouseY<this.y+this.h)\n  }\n\n  pressed (){\n  \treturn p5.mouseIsPressed ;\n  }\n\n  updateButton (){\n  \tif (this.mouse() && this.pressed()){\n  \t\tthis.active = !(this.active) ;\n  \t}\n  }\n\n  //visual elements and updating\n  drawButton (){\n\n\t\t  p5.strokeWeight(2);\n\n\t\t  if (this.active) { p5.fill('red')\n\t\t\t} else if (this.mouse() && !this.active){ p5.fill('magenta')\n\t\t\t} else { p5.fill(255,255,255) };\n\n\t\t  p5.rect(this.x, this.y, this.w, this.h, 5);\n\t\t  p5.textSize(12);\n\t\t  p5.textAlign(p5.CENTER);\n\t\t  p5.fill(0,0,0)\n\t\t\tp5.text(this.name, this.w/2+this.x, this.h*2/3+this.y);\n\n\t\t\treturn {// keep series in sync\n\t\t\t\t\t\t\t\t[this.order]: this.active\n\t\t\t\t\t\t\t}\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n\n//# sourceURL=webpack:///./src/Button.js?");

/***/ }),

/***/ "./src/Emitter.js":
/*!************************!*\
  !*** ./src/Emitter.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Emitter{\n  constructor(x, y){\n\tthis.x = x;\n  this.y0 = y;\n  this.y = y;\n  this.t = 0;\n  this.rad = 10;\n  }\n\n  display(){\n\n  \t\t// starting point of each circle\n      let xAngle = p5.map(this.x, 0, p5.width, -16 * p5.PI, 16 * p5.PI, true);\n      let yAngle = p5.map(this.y, 0, p5.height, -16 * p5.PI, 16 * p5.PI, true);\n      // and also varies based on the particle's location\n      let angle = xAngle * (this.x / p5.width) + yAngle * (this.y / p5.height);\n\n\n  \t  let myX = this.x + 20 * p5.cos(2 * p5.PI * this.t + this.t);\n      let myY = this.y + 20 * p5.sin(2 * p5.PI * this.t + this.t);\n\n      // let myX2 = this.x + 20 * cos(2 * PI * this.t + this.t);\n      // let myY2 = this.y + 20 * sin(2 * PI * this.t + this.t);\n\n      p5.ellipse(myX, myY, this.rad); // draw particle\n      //ellipse(myX2, myY2, this.rad);\n  }\n\n  update(){\n  \t\tthis.y --;\n  \t\tthis.t ++;\n      this.t ++;\n\n  \t\tif (this.y<=0){\n  \t\t\tthis.y=this.y0;\n  \t\t\tthis.t=0;\n  \t\t}\n  }\n\n  reset(){\n  \t\t\tthis.y=this.y0;\n  \t\t\tthis.t=0;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Emitter);\n\n\n//# sourceURL=webpack:///./src/Emitter.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p5 */ \"./node_modules/p5/lib/p5.js\");\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.js */ \"./src/Button.js\");\n/* harmony import */ var _Emitter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Emitter.js */ \"./src/Emitter.js\");\n\n\n\n\n\n\n// // Sketch scope instead of global\nconst sketch = (p5) => {\n\n  // make library globally available\n  window.p5 = p5;\n\n\nvar labels = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eight', 'nineth'];\nvar buttons = [];\nvar emissions = [];\nvar emit = [];\nvar wb = 100;\n\n\np5.setup =()=>{\n  //console.log(window);\n\n  p5.createCanvas(p5.windowWidth, p5.windowHeight);\n\n  labels.forEach((label,i)=>{\n    buttons.push(new _Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](labels[i], i*140+100, 600, i));\n    emissions.push(new _Emitter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](i*140+100+wb/2, 550));\n\n    emit.push(false);\n\n  })\n\n\n\n  //frameRate(30);\n\n\n}\n\np5.draw =()=>{\n  p5.background('rgba(255,255,255,.05)');\n\n  buttons.forEach(button=>{\n\n    button.updateButton();\n    let emited = button.drawButton();\n\n    if (emited!==undefined){\n      let index = Object.keys(emited)[0];\n      emit[index]=emited[index];\n    }\n  })\n\n  console.log(emit);\n\n  emit.forEach((item, i)=>{\n    if (item){\n      emissions[i].update();\n      emissions[i].display();\n    } else {\n      emissions[i].reset();\n    }\n  })\n  //forEach and cycle through with internal updates and display functions / inverse of snowflake or squiggly line...\n\n}\n\np5.mousePressed = ()=>{\n  buttons.forEach(button=>{\n    button.updateButton();\n  });\n}\n\n\n}\n\nnew p5__WEBPACK_IMPORTED_MODULE_0___default.a(sketch);\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });