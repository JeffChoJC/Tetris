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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _tetrominos_tetromino__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tetrominos/tetromino */ \"./src/tetrominos/tetromino.js\");\n\n\n\nclass Board {\n    constructor(ctx) {\n        this.row = 20;\n        this.column = 10;\n        \n        this.board = [];\n        for (let r = 0; r < this.row; r++) {\n            this.board.push([]);\n            for (let c = 0; c < this.column; c++) {\n                this.board[r].push(\"white\");\n            }\n        }\n\n        this.draw(ctx);\n        this.tetromino = new _tetrominos_tetromino__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, ctx);\n    }\n\n    draw(ctx) {\n        for (let r = 0; r < this.row; r++) {\n            for (let c = 0; c < this.column; c++) {\n                Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"drawSquare\"])(c, r, this.board[r][c], ctx);\n            }\n        }\n    }\n\n    collision(x, y, currentTetromino) {\n        debugger\n        for (let r = 0; r < currentTetromino.length; r++) {\n            for (let c = 0; c < currentTetromino[r].length; c++) {\n                if (!currentTetromino[r][c]) {\n                    continue;\n                }\n                let newX = this.tetromino.x + c + x;\n                let newY = this.tetromino.y + r + y;\n                debugger\n                if (newX < 0 || newX >= this.column || newY >= this.row) {\n                    debugger\n                    return true;\n                }\n                if (this.board[newY][newX] !== \"white\") {\n                    debugger\n                    return true;\n                }\n            }\n        }\n        return false;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _tetrominos_tetromino__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tetrominos/tetromino */ \"./src/tetrominos/tetromino.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById(\"canvas\");\n    const ctx = canvas.getContext(\"2d\");\n    const board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n})\n\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/tetrominos/i.js":
/*!*****************************!*\
  !*** ./src/tetrominos/i.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass I {\n    constructor() {\n        this.color = 'blue';\n        this.rotations = [\n            [\n                [1],\n                [1],\n                [1],\n                [1]\n            ],\n            [\n                [1, 1, 1, 1],\n            ]\n        ]\n\n        this.x = 4;\n        this.y = 0;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (I);\n\n//# sourceURL=webpack:///./src/tetrominos/i.js?");

/***/ }),

/***/ "./src/tetrominos/j.js":
/*!*****************************!*\
  !*** ./src/tetrominos/j.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass J {\n    constructor() {\n        this.color = 'green';\n        this.rotations = [\n            [\n                [0, 1],\n                [0, 1],\n                [1, 1]\n            ],\n            [\n                [1, 0, 0],\n                [1, 1, 1]\n            ],\n            [\n                [1, 1],\n                [1, 0],\n                [1, 0]\n            ],\n            [\n                [1, 1, 1],\n                [0, 0, 1]\n            ],\n        ]\n\n        this.x = 4;\n        this.y = 0;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (J);\n\n//# sourceURL=webpack:///./src/tetrominos/j.js?");

/***/ }),

/***/ "./src/tetrominos/l.js":
/*!*****************************!*\
  !*** ./src/tetrominos/l.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass L {\n    constructor() {\n        this.color = 'yellow';\n        this.rotations = [\n            [\n                [1, 0],\n                [1, 0],\n                [1, 1]\n            ],\n            [\n                [1, 1, 1],\n                [1, 0, 0]\n            ],\n            [\n                [1, 1,],\n                [0, 1,],\n                [0, 1,]\n            ],\n            [\n                [0, 0, 1],\n                [1, 1, 1],\n            ],\n        ]\n\n        this.x = 3;\n        this.y = 0;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (L);\n\n//# sourceURL=webpack:///./src/tetrominos/l.js?");

/***/ }),

/***/ "./src/tetrominos/o.js":
/*!*****************************!*\
  !*** ./src/tetrominos/o.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass O {\n    constructor() {\n        this.color = 'red';\n        this.rotations = [\n            [\n                [1, 1],\n                [1, 1],\n            ]\n        ]\n\n        this.x = 4;\n        this.y = 0;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (O);\n\n//# sourceURL=webpack:///./src/tetrominos/o.js?");

/***/ }),

/***/ "./src/tetrominos/s.js":
/*!*****************************!*\
  !*** ./src/tetrominos/s.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass S {\n    constructor() {\n        this.color = 'orange';\n        this.rotations = [\n            [\n                [0, 1, 1],\n                [1, 1, 0],\n            ],\n            [\n                [1, 0],\n                [1, 1],\n                [0, 1]\n            ]\n        ]\n\n        this.x = 3;\n        this.y = 0;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (S);\n\n//# sourceURL=webpack:///./src/tetrominos/s.js?");

/***/ }),

/***/ "./src/tetrominos/t.js":
/*!*****************************!*\
  !*** ./src/tetrominos/t.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass T {\n    constructor() {\n        this.color = 'pink';\n        this.rotations = [\n            [\n                [0, 1, 0],\n                [1, 1, 1]\n            ],\n            [\n                [1, 0],\n                [1, 1],\n                [1, 0]\n            ],\n            [\n                [1, 1, 1],\n                [0, 1, 0]\n            ],\n            [\n                [0, 1],\n                [1, 1],\n                [0, 1]\n            ]\n        ]\n    \n        this.x = 3;\n        this.y = 0;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (T);\n\n//# sourceURL=webpack:///./src/tetrominos/t.js?");

/***/ }),

/***/ "./src/tetrominos/tetromino.js":
/*!*************************************!*\
  !*** ./src/tetrominos/tetromino.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _i__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i */ \"./src/tetrominos/i.js\");\n/* harmony import */ var _j__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./j */ \"./src/tetrominos/j.js\");\n/* harmony import */ var _l__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./l */ \"./src/tetrominos/l.js\");\n/* harmony import */ var _o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./o */ \"./src/tetrominos/o.js\");\n/* harmony import */ var _s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./s */ \"./src/tetrominos/s.js\");\n/* harmony import */ var _z__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./z */ \"./src/tetrominos/z.js\");\n/* harmony import */ var _t__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./t */ \"./src/tetrominos/t.js\");\n\n\n\n\n\n\n\n\n\nclass Tetromino {\n    constructor(board, ctx) {\n        this.board = board;\n\n        switch (Math.floor(Math.random() * 7)) {\n            case 0:\n                this.piece = new _i__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n                break;\n            case 1:\n                this.piece = new _j__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n                break;\n            case 2:\n                this.piece = new _l__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n                break;\n            case 3:\n                this.piece = new _o__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n                break;\n            case 4:\n                this.piece = new _s__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n                break;\n            case 5:\n                this.piece = new _z__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n                break;\n            case 6:\n                this.piece = new _t__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\n        }\n\n        this.color = this.piece.color;\n        this.rotation = 0;\n        this.currentTetromino = this.piece.rotations[this.rotation];\n\n        this.x = this.piece.x;\n        this.y = this.piece.y;\n\n        this.draw(ctx);\n        this.drop(ctx);\n        this.control = this.control.bind(this)\n\n        document.addEventListener(\"keydown\", e => this.control(e, ctx));\n    }\n    \n    draw(ctx) {\n        for (let r = 0; r < this.currentTetromino.length; r++) {\n            for (let c = 0; c < this.currentTetromino[r].length; c++) {\n                if (this.currentTetromino[r][c]) {\n                    Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"drawSquare\"])(this.x + c, this.y + r, this.color, ctx);\n                }\n            }\n        }\n    }\n\n    undraw(ctx) {\n        for (let r = 0; r < this.currentTetromino.length; r++) {\n            for (let c = 0; c < this.currentTetromino[r].length; c++) {\n                if (this.currentTetromino[r][c]) {\n                    Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"drawSquare\"])(this.x + c, this.y + r, \"white\", ctx);\n                }\n            }\n        }\n    }\n\n    moveDown(ctx) {\n        this.undraw(ctx);\n        this.y++;\n        this.draw(ctx);\n    }\n\n    moveRight(ctx) {\n        if (!this.board.collision(1, 0, this.currentTetromino)) {\n            this.undraw(ctx);\n            this.x++;\n            this.draw(ctx);\n        }\n    }\n\n    moveLeft(ctx) {\n        if (!this.board.collision(-1, 0, this.currentTetromino)) {\n            this.undraw(ctx);\n            this.x--;\n            this.draw(ctx);\n        }\n    }\n\n    rotate(ctx) {\n        const next = this.piece.rotations[(this.rotation + 1) % (this.piece.rotations.length)]\n        if (!this.board.collision(0, 0, next)) {\n            this.undraw(ctx);\n            this.rotation = (this.rotation + 1) % (this.piece.rotations.length);\n            this.currentTetromino = this.piece.rotations[this.rotation];\n            this.draw(ctx);\n        }\n    }\n\n    drop(ctx) {\n        setInterval(() => {\n            this.moveDown(ctx);\n        }, 1000);\n    }\n\n    control(e, ctx) {\n        switch (e.key) {\n            case \"ArrowRight\":\n                this.moveRight(ctx);\n                break;\n            case \"ArrowLeft\":\n                this.moveLeft(ctx);\n                break;\n            case \"ArrowUp\":\n                this.rotate(ctx);\n                break;\n            case \"ArrowDown\":\n                this.moveDown(ctx);\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tetromino);\n\n//# sourceURL=webpack:///./src/tetrominos/tetromino.js?");

/***/ }),

/***/ "./src/tetrominos/z.js":
/*!*****************************!*\
  !*** ./src/tetrominos/z.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Z {\n    constructor() {\n        this.color = 'purple';\n        this.rotations = [\n            [\n                [1, 1, 0],\n                [0, 1, 1]\n            ],\n            [\n                [0, 1],\n                [1, 1],\n                [1, 0]\n            ]\n        ]\n        \n        this.x = 3;\n        this.y = 0;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Z);\n\n//# sourceURL=webpack:///./src/tetrominos/z.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: drawSquare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawSquare\", function() { return drawSquare; });\nconst drawSquare = (x, y, color, ctx) => {\n    const square = 25;\n\n    ctx.fillStyle = color;\n    ctx.fillRect(x * square, y * square, square, square);\n    ctx.strokeStyle = 'black';\n    ctx.strokeRect(x * square, y * square, square, square);\n}\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });