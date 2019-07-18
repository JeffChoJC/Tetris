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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _tetrominos_tetromino__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tetrominos/tetromino */ \"./src/tetrominos/tetromino.js\");\n/* harmony import */ var _scoreboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scoreboard */ \"./src/scoreboard.js\");\n\n\n\n\nclass Board {\n    constructor(ctx) {\n        this.row = 20;\n        this.column = 10;\n        this.offsetX = 6;\n        this.offsetY = 4;\n        \n        this.grid = [];\n        for (let r = 0; r < this.row; r++) {\n            this.grid.push([]);\n            for (let c = 0; c < this.column; c++) {\n                this.grid[r].push(\"white\");\n            }\n        }\n\n        this.scoreboard = new _scoreboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this, ctx);\n\n        this.history = [0, 1, 2, 3, 4, 5, 6];\n        this.shuffle();\n        this.generateTetromino(ctx);\n        this.speed = setInterval(() => this.drop(ctx), 820);\n        document.addEventListener(\"keydown\", e => this.control(e, ctx));\n    }\n\n    draw(ctx) {\n        for (let r = 0; r < this.row; r++) {\n            for (let c = 0; c < this.column; c++) {\n                Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"drawSquare\"])(c + this.offsetX, r + this.offsetY, this.grid[r][c], ctx);\n            }\n        }\n    }\n\n    shuffle() {\n        for (let i = 6; i > 0; i--) {\n            const j = Math.floor(Math.random() * 7);\n            [this.history[i], this.history[j]] = [this.history[j], this.history[i]];\n        }\n    }\n\n    generateTetromino(ctx) {\n        if (this.history.length === 0) {\n            this.history = [0, 1, 2, 3, 4, 5, 6];\n            this.shuffle();\n        }\n\n        const pieceNumber = this.history[0];\n        if (this.isGameOver() === false) {\n            this.draw(ctx);\n            this.tetromino = new _tetrominos_tetromino__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, ctx, pieceNumber);\n            this.history.shift();\n        }\n    }\n\n    drop(ctx) {\n        this.tetromino.moveDown(ctx);\n    }\n\n    control(e, ctx) {\n        switch (e.key) {\n            case \"ArrowRight\":\n                this.tetromino.moveRight(ctx);\n                break;\n            case \"ArrowLeft\":\n                this.tetromino.moveLeft(ctx);\n                break;\n            case \"ArrowUp\":\n                this.tetromino.rotate(ctx);\n                break;\n            case \"ArrowDown\":\n                this.tetromino.moveDown(ctx);\n                break;\n            case \" \":\n                this.tetromino.floor(ctx);\n        }\n    }\n\n    collision(x, y, currentTetromino) {\n        for (let r = 0; r < currentTetromino.length; r++) {\n            for (let c = 0; c < currentTetromino[r].length; c++) {\n                if (!currentTetromino[r][c]) {\n                    continue;\n                }\n\n                let newX = this.tetromino.x + c + x;\n                let newY = this.tetromino.y + r + y;\n\n                if (newY >= this.row + this.offsetY) {\n                    return true;\n                }\n\n                if (newX < 0 || newX >= this.column) {\n                    return \"border\";\n                }\n\n                let gridY = newY - this.offsetY;\n                if (newY >= 4) {\n                    if (this.grid[gridY][newX] !== \"white\") {\n                        return true;\n                    }\n                }\n            }\n        }\n        return false;\n    }\n\n    clearLines(ctx) {\n        for (let r = 0; r < this.row; r++) {\n            for (let c = 0; c < this.column; c++) {\n                if (this.grid[r][c] === 'white') {\n                    break;\n                }\n\n                if (c === this.column - 1) {\n                    this.grid.splice(r, 1);\n                    this.scoreboard.addScore(14, ctx);\n                    this.grid.unshift(new Array(10).fill(\"white\"));\n                }\n            }\n        }\n    }\n\n    isGameOver() {\n        for (let c = 0; c < this.column; c++) {\n            if (this.grid[0][c] !== \"white\") {\n                alert(\"Game Over\");\n                clearInterval(this.speed);\n                return true;\n            }\n        }\n        return false;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\nclass Game {\n    constructor(ctx) {\n        this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n        this.paused = false;\n\n        document.addEventListener(\"keydown\", e => this.pause(e, ctx))\n    }\n\n    start() {\n        \n    }\n\n    pause(e, ctx) {\n        if (e.key === \"p\" && this.paused === false) {\n            clearInterval(this.board.speed)\n            alert('Game is paused. Press OK and any key to resume.');\n            this.paused = true;\n        } else if (this.paused === true) {\n            const interval = 900 - (this.board.scoreboard.level * 80);\n            this.board.speed = setInterval(() => this.board.drop(ctx), interval);\n            this.paused = false;\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById(\"canvas\");\n    const ctx = canvas.getContext(\"2d\");\n    ctx.font = '22px Changa';\n\n    const audioContext = new AudioContext();\n\n    const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n})\n\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/scoreboard.js":
/*!***************************!*\
  !*** ./src/scoreboard.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nclass Scoreboard {\n    constructor(board, ctx){\n        this.board = board;\n\n        this.currentScore = 0;\n        this.level = 1;\n        this.interval = 1000;\n    }\n\n    addScore(points, ctx) {\n        this.currentScore += points;\n        this.levelUp(ctx);\n        Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"drawScore\"])(this.currentScore, ctx);\n        Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"drawLevel\"])(this.level, ctx);\n    }\n\n    levelUp(ctx) {\n        if ((this.currentScore > (this.level * 2000)) && this.level < 10) {\n            this.level++;\n            this.interval -= 80;\n            clearInterval(this.board.speed);\n            this.board.speed = setInterval(() => this.board.drop(ctx), this.interval);\n        } \n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scoreboard);\n\n//# sourceURL=webpack:///./src/scoreboard.js?");

/***/ }),

/***/ "./src/tetrominos/i.js":
/*!*****************************!*\
  !*** ./src/tetrominos/i.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass I {\n    constructor() {\n        this.color = 'blue';\n        this.rotations = [\n            [\n                [0, 1, 0, 0],\n                [0, 1, 0, 0],\n                [0, 1, 0, 0],\n                [0, 1, 0, 0]\n            ],\n            [\n                [0, 0, 0, 0],\n                [0, 0, 0, 0],\n                [0, 0, 0, 0],\n                [1, 1, 1, 1],\n            ]\n        ]\n\n        this.x = 4;\n        this.y = 0;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (I);\n\n//# sourceURL=webpack:///./src/tetrominos/i.js?");

/***/ }),

/***/ "./src/tetrominos/j.js":
/*!*****************************!*\
  !*** ./src/tetrominos/j.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass J {\n    constructor() {\n        this.color = 'green';\n        this.rotations = [\n            [\n                [0, 0, 0],\n                [0, 1, 0],\n                [0, 1, 0],\n                [1, 1, 0]\n            ],\n            [\n                [0, 0, 0],\n                [1, 0, 0],\n                [1, 1, 1],\n                [0, 0, 0]\n            ],\n            [\n                [0, 0, 0],\n                [0, 1, 1],\n                [0, 1, 0],\n                [0, 1, 0]\n            ],\n            [\n                [0, 0, 0],\n                [0, 0, 0],\n                [1, 1, 1],\n                [0, 0, 1]\n            ],\n        ]\n\n        this.x = 4;\n        this.y = 0;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (J);\n\n//# sourceURL=webpack:///./src/tetrominos/j.js?");

/***/ }),

/***/ "./src/tetrominos/l.js":
/*!*****************************!*\
  !*** ./src/tetrominos/l.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass L {\n    constructor() {\n        this.color = 'gold';\n        this.rotations = [\n            [\n                [0, 0, 0],\n                [0, 1, 0],\n                [0, 1, 0],\n                [0, 1, 1]\n            ],\n            [\n                [0, 0, 0],\n                [0, 0, 0],\n                [1, 1, 1],\n                [1, 0, 0]\n            ],\n            [\n                [0, 0, 0],\n                [1, 1, 0],\n                [0, 1, 0],\n                [0, 1, 0]\n            ],\n            [\n                [0, 0, 0],\n                [0, 0, 1],\n                [1, 1, 1],\n                [0, 0, 0]\n            ],\n        ]\n\n        this.x = 3;\n        this.y = 0;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (L);\n\n//# sourceURL=webpack:///./src/tetrominos/l.js?");

/***/ }),

/***/ "./src/tetrominos/o.js":
/*!*****************************!*\
  !*** ./src/tetrominos/o.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass O {\n    constructor() {\n        this.color = 'red';\n        this.rotations = [\n            [\n                [0, 0],\n                [0, 0],\n                [1, 1],\n                [1, 1],\n            ]\n        ]\n\n        this.x = 4;\n        this.y = 0;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (O);\n\n//# sourceURL=webpack:///./src/tetrominos/o.js?");

/***/ }),

/***/ "./src/tetrominos/s.js":
/*!*****************************!*\
  !*** ./src/tetrominos/s.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass S {\n    constructor() {\n        this.color = 'orange';\n        this.rotations = [\n            [\n                [0, 0, 0],\n                [0, 0, 0],\n                [0, 1, 1],\n                [1, 1, 0]\n            ],\n            [\n                [0, 0, 0],\n                [0, 1, 0],\n                [0, 1, 1],\n                [0, 0, 1]\n            ]\n        ]\n\n        this.x = 3;\n        this.y = 0;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (S);\n\n//# sourceURL=webpack:///./src/tetrominos/s.js?");

/***/ }),

/***/ "./src/tetrominos/t.js":
/*!*****************************!*\
  !*** ./src/tetrominos/t.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass T {\n    constructor() {\n        this.color = 'pink';\n        this.rotations = [\n            [\n                [0, 0, 0],\n                [0, 0, 0],\n                [0, 1, 0],\n                [1, 1, 1],\n                [0, 0, 0]\n            ],\n            [\n                [0, 0, 0],\n                [0, 0, 0],\n                [0, 1, 0],\n                [0, 1, 1],\n                [0, 1, 0]\n            ],\n            [\n                [0, 0, 0],\n                [0, 0, 0],\n                [0, 0, 0],\n                [1, 1, 1],\n                [0, 1, 0]\n            ],\n            [\n                [0, 0, 0],\n                [0, 0, 0],\n                [0, 1, 0],\n                [1, 1, 0],\n                [0, 1, 0]\n            ]\n        ]\n    \n        this.x = 3;\n        this.y = 0;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (T);\n\n//# sourceURL=webpack:///./src/tetrominos/t.js?");

/***/ }),

/***/ "./src/tetrominos/tetromino.js":
/*!*************************************!*\
  !*** ./src/tetrominos/tetromino.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _i__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i */ \"./src/tetrominos/i.js\");\n/* harmony import */ var _j__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./j */ \"./src/tetrominos/j.js\");\n/* harmony import */ var _l__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./l */ \"./src/tetrominos/l.js\");\n/* harmony import */ var _o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./o */ \"./src/tetrominos/o.js\");\n/* harmony import */ var _s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./s */ \"./src/tetrominos/s.js\");\n/* harmony import */ var _z__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./z */ \"./src/tetrominos/z.js\");\n/* harmony import */ var _t__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./t */ \"./src/tetrominos/t.js\");\n\n\n\n\n\n\n\n\n\nclass Tetromino {\n    constructor(board, ctx, pieceNumber) {\n        this.board = board;\n\n        switch (pieceNumber) {\n            case 0:\n                this.piece = new _i__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n                break;\n            case 1:\n                this.piece = new _j__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n                break;\n            case 2:\n                this.piece = new _l__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n                break;\n            case 3:\n                this.piece = new _o__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n                break;\n            case 4:\n                this.piece = new _s__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n                break;\n            case 5:\n                this.piece = new _t__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\n                break;\n            case 6:\n                this.piece = new _z__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n        }\n\n        this.color = this.piece.color;\n        this.rotation = 0;\n        this.currentTetromino = this.piece.rotations[this.rotation];\n\n        this.x = this.piece.x;\n        this.y = this.piece.y;\n        this.offsetX = this.board.offsetX;\n        this.offsetY = this.board.offsetY;\n    }\n    \n    draw(ctx) {\n        for (let r = 0; r < this.currentTetromino.length; r++) {\n            for (let c = 0; c < this.currentTetromino[r].length; c++) {\n                if (this.currentTetromino[r][c] && this.y + r >= this.offsetY) {\n                    Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"drawSquare\"])(this.x + c + this.offsetX, this.y + r, this.color, ctx);\n                }\n            }\n        }\n    }\n\n    undraw(ctx) {\n        for (let r = 0; r < this.currentTetromino.length; r++) {\n            for (let c = 0; c < this.currentTetromino[r].length; c++) {\n                if (this.currentTetromino[r][c] && this.y + r >= this.offsetY) {\n                    Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"drawSquare\"])(this.x + c + this.offsetX, this.y + r, \"white\", ctx);\n                }\n            }\n        }\n    }\n\n    lock() {\n        for (let r = 0; r < this.currentTetromino.length; r++) {\n            for (let c = 0; c < this.currentTetromino[r].length; c++) {\n                if (this.currentTetromino[r][c] && this.y + r >= this.offsetY) {\n                    this.board.grid[this.y + r - this.offsetY][this.x + c] = this.color;\n                }\n            }\n        }\n    }\n\n    moveDown(ctx) {\n        if (!this.board.collision(0, 1, this.currentTetromino)) {\n            this.board.scoreboard.addScore(4, ctx);\n            this.undraw(ctx);\n            this.y++;\n            this.draw(ctx);\n        } else {\n            this.lock();\n            this.board.clearLines(ctx);\n            this.board.generateTetromino(ctx);\n        }\n    }\n\n    moveRight(ctx) {\n        if (!this.board.collision(1, 0, this.currentTetromino)) {\n            this.undraw(ctx);\n            this.x++;\n            this.draw(ctx);\n        }\n    }\n\n    moveLeft(ctx) {\n        if (!this.board.collision(-1, 0, this.currentTetromino)) {\n            this.undraw(ctx);\n            this.x--;\n            this.draw(ctx);\n        }\n    }\n\n    rotate(ctx) {\n        const nextRotation = (this.rotation + 1) % (this.piece.rotations.length)\n        const nextTetromino = this.piece.rotations[nextRotation]\n\n        while (this.board.collision(0, 0, nextTetromino) === \"border\") {\n            this.undraw(ctx);\n            if (this.x > this.board.column/2) {\n                this.x--;\n            } else {\n                this.x++;\n            }\n        }\n\n        if (!this.board.collision(0, 0, nextTetromino)) {\n            this.undraw(ctx);\n            this.rotation = nextRotation;\n            this.currentTetromino = nextTetromino;\n            this.draw(ctx);\n        }\n    }\n\n    floor(ctx) {\n        while (!this.board.collision(0, 1, this.currentTetromino)) {\n            this.moveDown(ctx);\n        }\n        this.moveDown(ctx);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tetromino);\n\n//# sourceURL=webpack:///./src/tetrominos/tetromino.js?");

/***/ }),

/***/ "./src/tetrominos/z.js":
/*!*****************************!*\
  !*** ./src/tetrominos/z.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Z {\n    constructor() {\n        this.color = 'purple';\n        this.rotations = [\n            [\n                [0, 0, 0],\n                [0, 0, 0],\n                [1, 1, 0],\n                [0, 1, 1]\n            ],\n            [\n                [0, 0, 0],\n                [0, 1, 0],\n                [1, 1, 0],\n                [1, 0, 0]\n            ]\n        ]\n        \n        this.x = 3;\n        this.y = 0;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Z);\n\n//# sourceURL=webpack:///./src/tetrominos/z.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: drawSquare, drawScore, drawLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawSquare\", function() { return drawSquare; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawScore\", function() { return drawScore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawLevel\", function() { return drawLevel; });\nconst drawSquare = (x, y, color, ctx) => {\n    const square = 25;\n\n    ctx.fillStyle = color;\n    ctx.fillRect(x * square, y * square, square, square);\n    ctx.strokeStyle = 'black';\n    ctx.strokeRect(x * square, y * square, square, square);\n}\n\nconst drawScore = (score, ctx) => {\n    debugger\n    ctx.clearRect(0, 0, 140, 100);\n    ctx.fillStyle = \"black\";\n    ctx.fillText(\"Score: \" + score, 8, 40);\n}\n\nconst drawLevel = (level, ctx) => {\n    ctx.fillStyle = \"black\";\n    ctx.fillText(\"Level:  \" + level, 8, 20);\n}\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });