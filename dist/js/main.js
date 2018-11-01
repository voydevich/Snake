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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Snake\", function() { return Snake; });\n/* harmony import */ var _src_scss_common_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/scss/common.scss */ \"./src/scss/common.scss\");\n/* harmony import */ var _src_scss_common_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_scss_common_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Snake =\n/*#__PURE__*/\nfunction () {\n  function Snake() {\n    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, Snake);\n\n    var canvas = props.canvas,\n        width = props.width,\n        height = props.height,\n        zoom = props.zoom,\n        speed = props.speed;\n\n    function newCanvas() {\n      var canvas = document.createElement('canvas');\n      document.body.appendChild(canvas);\n      return canvas;\n    }\n\n    var optCanvas = canvas ? canvas : newCanvas();\n    var optZoom = zoom ? zoom : 10;\n    var optWidth = width ? width : 10;\n    var optHeight = height ? height : 10;\n    optCanvas.width = optWidth * optZoom;\n    optCanvas.height = optHeight * optZoom;\n    this.state = {\n      start: {\n        x: 0,\n        y: 0\n      },\n      frame: false,\n      pause: false,\n      speed: speed ? speed : 100,\n      size: {\n        x: optWidth,\n        y: optHeight\n      },\n      zoom: optZoom,\n      ctx: optCanvas.getContext('2d')\n    };\n    this.start = this.start.bind(this);\n    this.stop = this.stop.bind(this);\n    this.lost = this.lost.bind(this);\n    this.pause = this.pause.bind(this);\n    this.animate = this.animate.bind(this);\n    this.step = this.step.bind(this);\n    this.newFruit = this.newFruit.bind(this);\n    document.addEventListener('keydown', this.keypress.bind(this));\n  }\n\n  _createClass(Snake, [{\n    key: \"keypress\",\n    value: function keypress(e) {\n      var vector = this.state.vector;\n      var key = e.keyCode;\n\n      switch (key) {\n        case 37:\n          {\n            if (vector.name !== 'right' && !vector.change) this.state.vector = {\n              x: -1,\n              y: 0,\n              name: 'left',\n              change: true\n            };\n            break;\n          }\n\n        case 38:\n          {\n            if (vector.name !== 'bottom' && !vector.change) this.state.vector = {\n              x: 0,\n              y: -1,\n              name: 'top',\n              change: true\n            };\n            break;\n          }\n\n        case 39:\n          {\n            if (vector.name !== 'left' && !vector.change) this.state.vector = {\n              x: 1,\n              y: 0,\n              name: 'right',\n              change: true\n            };\n            break;\n          }\n\n        case 40:\n          {\n            if (vector.name !== 'top' && !vector.change) this.state.vector = {\n              x: 0,\n              y: 1,\n              name: 'bottom',\n              change: true\n            };\n            break;\n          }\n\n        case 13:\n          {\n            this.start();\n            break;\n          }\n\n        case 32:\n          {\n            this.pause();\n            break;\n          }\n\n        case 27:\n          {\n            this.stop();\n            break;\n          }\n      }\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      var _this$state = this.state,\n          frame = _this$state.frame,\n          speed = _this$state.speed,\n          start = _this$state.start;\n      this.state.vector = {\n        x: 1,\n        y: 0\n      };\n      this.Snake = [_objectSpread({}, start)];\n      this.state.pause = false;\n      this.newFruit();\n\n      if (!frame) {\n        this.state.frame = setInterval(this.animate, speed);\n      }\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      var frame = this.state.frame;\n\n      if (frame) {\n        clearInterval(frame);\n        this.state.frame = false;\n      }\n    }\n  }, {\n    key: \"lost\",\n    value: function lost() {\n      this.stop();\n      alert('You lose');\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      this.state.pause = !this.state.pause;\n    }\n  }, {\n    key: \"newFruit\",\n    value: function newFruit() {\n      var _this = this;\n\n      var size = this.state.size;\n      var x = Math.floor(Math.random() * size.x);\n      var y = Math.floor(Math.random() * size.y);\n      this.Fruit = {\n        x: x,\n        y: y\n      };\n      this.Snake.forEach(function (pos) {\n        if (pos.x === x && pos.y == y) _this.newFruit();\n      });\n    }\n  }, {\n    key: \"step\",\n    value: function step() {\n      var _this2 = this;\n\n      var _this$state2 = this.state,\n          vector = _this$state2.vector,\n          size = _this$state2.size;\n      vector.change = false;\n      var dot = {\n        x: this.Snake[0].x + vector.x,\n        y: this.Snake[0].y + vector.y\n      };\n\n      if (dot.x < 0 || dot.x >= size.x || dot.y < 0 || dot.y >= size.y) {\n        this.lost();\n      }\n\n      if (JSON.stringify(this.Snake[0]) !== JSON.stringify(this.Fruit)) {\n        this.Snake.pop();\n        this.Snake.forEach(function (pos) {\n          if (pos.x === dot.x && pos.y == dot.y) _this2.lost();\n        });\n      } else {\n        this.newFruit();\n      }\n\n      this.Snake.unshift(dot);\n    }\n  }, {\n    key: \"animate\",\n    value: function animate() {\n      var _this$state3 = this.state,\n          ctx = _this$state3.ctx,\n          zoom = _this$state3.zoom,\n          size = _this$state3.size,\n          pause = _this$state3.pause;\n      if (!pause) this.step();\n      ctx.clearRect(0, 0, size.x * zoom, size.y * zoom);\n      ctx.fillStyle = \"red\";\n      ctx.fillRect(this.Fruit.x * zoom, this.Fruit.y * zoom, zoom, zoom);\n      ctx.fillStyle = \"green\";\n      this.Snake.forEach(function (body) {\n        ctx.fillRect(body.x * zoom, body.y * zoom, zoom, zoom);\n      });\n    }\n  }]);\n\n  return Snake;\n}();\nwindow.Snake = Snake;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0ICcuL3NyYy9zY3NzL2NvbW1vbi5zY3NzJ1xuXG5leHBvcnQgY2xhc3MgU25ha2Uge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcbiAgICAgICAgY29uc3Qge2NhbnZhcywgd2lkdGgsIGhlaWdodCwgem9vbSwgc3BlZWR9ID0gcHJvcHM7XG5cbiAgICAgICAgZnVuY3Rpb24gbmV3Q2FudmFzKCkge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgICAgICAgICByZXR1cm4gY2FudmFzXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcHRDYW52YXMgPSBjYW52YXMgPyBjYW52YXMgOiBuZXdDYW52YXMoKTtcbiAgICAgICAgY29uc3Qgb3B0Wm9vbSA9IHpvb20gPyB6b29tIDogMTA7XG4gICAgICAgIGNvbnN0IG9wdFdpZHRoID0gd2lkdGggPyB3aWR0aCA6IDEwO1xuICAgICAgICBjb25zdCBvcHRIZWlnaHQgPSBoZWlnaHQgPyBoZWlnaHQgOiAxMDtcblxuICAgICAgICBvcHRDYW52YXMud2lkdGggPSBvcHRXaWR0aCAqIG9wdFpvb207XG4gICAgICAgIG9wdENhbnZhcy5oZWlnaHQgPSBvcHRIZWlnaHQgKiBvcHRab29tO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc3RhcnQ6IHt4OiAwLCB5OiAwLH0sXG4gICAgICAgICAgICBmcmFtZTogZmFsc2UsXG4gICAgICAgICAgICBwYXVzZTogZmFsc2UsXG4gICAgICAgICAgICBzcGVlZDogc3BlZWQgPyBzcGVlZCA6IDEwMCxcbiAgICAgICAgICAgIHNpemU6IHt4OiBvcHRXaWR0aCwgeTogb3B0SGVpZ2h0fSxcbiAgICAgICAgICAgIHpvb206IG9wdFpvb20sXG4gICAgICAgICAgICBjdHg6IG9wdENhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdG9wID0gdGhpcy5zdG9wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubG9zdCA9IHRoaXMubG9zdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBhdXNlID0gdGhpcy5wYXVzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGVwID0gdGhpcy5zdGVwLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubmV3RnJ1aXQgPSB0aGlzLm5ld0ZydWl0LmJpbmQodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleXByZXNzLmJpbmQodGhpcykpXG4gICAgfVxuXG5cbiAgICBrZXlwcmVzcyhlKSB7XG4gICAgICAgIGNvbnN0IHt2ZWN0b3J9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3Qga2V5ID0gZS5rZXlDb2RlO1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuXG4gICAgICAgICAgICBjYXNlIDM3IDoge1xuICAgICAgICAgICAgICAgIGlmICh2ZWN0b3IubmFtZSAhPT0gJ3JpZ2h0JyAmJiAhdmVjdG9yLmNoYW5nZSkgdGhpcy5zdGF0ZS52ZWN0b3IgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IC0xLFxuICAgICAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDM4IDoge1xuICAgICAgICAgICAgICAgIGlmICh2ZWN0b3IubmFtZSAhPT0gJ2JvdHRvbScgJiYgIXZlY3Rvci5jaGFuZ2UpIHRoaXMuc3RhdGUudmVjdG9yID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAtMSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDM5IDoge1xuICAgICAgICAgICAgICAgIGlmICh2ZWN0b3IubmFtZSAhPT0gJ2xlZnQnICYmICF2ZWN0b3IuY2hhbmdlKSB0aGlzLnN0YXRlLnZlY3RvciA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiB0cnVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgNDAgOiB7XG4gICAgICAgICAgICAgICAgaWYgKHZlY3Rvci5uYW1lICE9PSAndG9wJyAmJiAhdmVjdG9yLmNoYW5nZSkgdGhpcy5zdGF0ZS52ZWN0b3IgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IHRydWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAxMyA6IHtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMzIgOiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDI3IDoge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgY29uc3Qge2ZyYW1lLCBzcGVlZCwgc3RhcnR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICB0aGlzLnN0YXRlLnZlY3RvciA9IHt4OiAxLCB5OiAwfTtcblxuICAgICAgICB0aGlzLlNuYWtlID0gW3suLi5zdGFydH1dO1xuXG4gICAgICAgIHRoaXMuc3RhdGUucGF1c2UgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm5ld0ZydWl0KCk7XG5cbiAgICAgICAgaWYgKCFmcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mcmFtZSA9IHNldEludGVydmFsKHRoaXMuYW5pbWF0ZSwgc3BlZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdG9wKCkge1xuICAgICAgICBjb25zdCB7ZnJhbWV9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKGZyYW1lKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGZyYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZnJhbWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvc3QoKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICBhbGVydCgnWW91IGxvc2UnKTtcbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5wYXVzZSA9ICF0aGlzLnN0YXRlLnBhdXNlO1xuICAgIH1cblxuICAgIG5ld0ZydWl0KCkge1xuICAgICAgICBjb25zdCB7c2l6ZX0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2l6ZS54KTtcbiAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpemUueSk7XG4gICAgICAgIHRoaXMuRnJ1aXQgPSB7eDogeCwgeTogeX07XG4gICAgICAgIHRoaXMuU25ha2UuZm9yRWFjaChwb3MgPT4ge1xuICAgICAgICAgICAgaWYgKHBvcy54ID09PSB4ICYmIHBvcy55ID09IHkpIHRoaXMubmV3RnJ1aXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RlcCgpIHtcbiAgICAgICAgY29uc3Qge3ZlY3Rvciwgc2l6ZX0gPSB0aGlzLnN0YXRlO1xuICAgICAgICB2ZWN0b3IuY2hhbmdlID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgZG90ID0ge1xuICAgICAgICAgICAgeDogdGhpcy5TbmFrZVswXS54ICsgdmVjdG9yLngsXG4gICAgICAgICAgICB5OiB0aGlzLlNuYWtlWzBdLnkgKyB2ZWN0b3IueVxuICAgICAgICB9O1xuICAgICAgICBpZiAoZG90LnggPCAwIHx8IGRvdC54ID49IHNpemUueCB8fCBkb3QueSA8IDAgfHwgZG90LnkgPj0gc2l6ZS55KSB7XG4gICAgICAgICAgICB0aGlzLmxvc3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh0aGlzLlNuYWtlWzBdKSAhPT0gSlNPTi5zdHJpbmdpZnkodGhpcy5GcnVpdCkpIHtcbiAgICAgICAgICAgIHRoaXMuU25ha2UucG9wKCk7XG4gICAgICAgICAgICB0aGlzLlNuYWtlLmZvckVhY2gocG9zID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocG9zLnggPT09IGRvdC54ICYmIHBvcy55ID09IGRvdC55KSB0aGlzLmxvc3QoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5ld0ZydWl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5TbmFrZS51bnNoaWZ0KGRvdCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgY29uc3Qge2N0eCwgem9vbSwgc2l6ZSwgcGF1c2V9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoIXBhdXNlKSB0aGlzLnN0ZXAoKTtcblxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHNpemUueCAqIHpvb20sIHNpemUueSAqIHpvb20pO1xuXG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLkZydWl0LnggKiB6b29tLCB0aGlzLkZydWl0LnkgKiB6b29tLCB6b29tLCB6b29tKTtcblxuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgICAgIHRoaXMuU25ha2UuZm9yRWFjaChib2R5ID0+IHtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChib2R5LnggKiB6b29tLCBib2R5LnkgKiB6b29tLCB6b29tLCB6b29tKTtcbiAgICAgICAgfSk7XG5cblxuICAgIH1cbn1cblxud2luZG93LlNuYWtlID0gU25ha2U7XG5cblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBDQTtBQUFBO0FBQUE7QUFzQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQW5EQTtBQXNEQTtBQS9GQTtBQUFBO0FBQUE7QUFpR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvR0E7QUFBQTtBQUFBO0FBa0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEhBO0FBQUE7QUFBQTtBQTJIQTtBQUNBO0FBQ0E7QUE3SEE7QUFBQTtBQUFBO0FBZ0lBO0FBQ0E7QUFqSUE7QUFBQTtBQUFBO0FBbUlBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0lBO0FBQUE7QUFBQTtBQTZJQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBbktBO0FBQUE7QUFBQTtBQXFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBdkxBO0FBQ0E7QUFEQTtBQUFBO0FBMExBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./src/scss/common.scss":
/*!******************************!*\
  !*** ./src/scss/common.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9jb21tb24uc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3NzL2NvbW1vbi5zY3NzPzBjZmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/common.scss\n");

/***/ })

/******/ });