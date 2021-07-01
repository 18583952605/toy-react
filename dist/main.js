/******/
(function (modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/
  var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/
    /******/ 		// Check if module is in cache
    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/ 		// Create a new module (and put it into the cache)
    /******/
    var module = installedModules[moduleId] = {
      /******/            i: moduleId,
      /******/            l: false,
      /******/            exports: {}
      /******/
    };
    /******/
    /******/ 		// Execute the module function
    /******/
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ 		// Flag the module as loaded
    /******/
    module.l = true;
    /******/
    /******/ 		// Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/
  __webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/
  __webpack_require__.c = installedModules;
  /******/
  /******/ 	// define getter function for harmony exports
  /******/
  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {enumerable: true, get: getter});
      /******/
    }
    /******/
  };
  /******/
  /******/ 	// define __esModule on exports
  /******/
  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
      /******/
    }
    /******/
    Object.defineProperty(exports, '__esModule', {value: true});
    /******/
  };
  /******/
  /******/ 	// create a fake namespace object
  /******/ 	// mode & 1: value is a module id, require it
  /******/ 	// mode & 2: merge all properties of value into the ns
  /******/ 	// mode & 4: return value when already ns object
  /******/ 	// mode & 8|1: behave like require
  /******/
  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/
    if (mode & 8) return value;
    /******/
    if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /******/
    var ns = Object.create(null);
    /******/
    __webpack_require__.r(ns);
    /******/
    Object.defineProperty(ns, 'default', {enumerable: true, value: value});
    /******/
    if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
      return value[key];
    }.bind(null, key));
    /******/
    return ns;
    /******/
  };
  /******/
  /******/ 	// getDefaultExport function for compatibility with non-harmony modules
  /******/
  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
        /******/            function getDefault() {
          return module['default'];
        } :
        /******/            function getModuleExports() {
          return module;
        };
    /******/
    __webpack_require__.d(getter, 'a', getter);
    /******/
    return getter;
    /******/
  };
  /******/
  /******/ 	// Object.prototype.hasOwnProperty.call
  /******/
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ 	// __webpack_public_path__
  /******/
  __webpack_require__.p = "";
  /******/
  /******/
  /******/ 	// Load entry module and return exports
  /******/
  return __webpack_require__(__webpack_require__.s = "./main.js");
  /******/
})
/************************************************************************/
/******/ ({
  
  /***/ "./ToyReact.js":
  /*!*********************!*\
    !*** ./ToyReact.js ***!
    \*********************/
  /*! exports provided: ToyReact */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToyReact\", function() { return ToyReact; });\nvar ToyReact = {\n  createElement: function createElement(type, attr) {\n    var el = null;\n\n    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      children[_key - 2] = arguments[_key];\n    }\n\n    if (typeof type === 'string') {\n      el = document.createElement(type);\n\n      for (var key in attr) {\n        el.setAttribute(key, attr[key]);\n      }\n\n      for (var _key2 in children) {\n        el.append(children[_key2]);\n      }\n    } else {\n      el = new type();\n\n      for (var _key3 in attr) {\n        el[_key3] = attr[_key3];\n      }\n\n      for (var _key4 in children) {\n        el.append(children[_key4]);\n      }\n\n      el = el.render();\n    }\n\n    return el;\n  },\n  render: function render(el, parent) {\n    parent.append(el);\n  }\n};\n\n//# sourceURL=webpack:///./ToyReact.js?");
    
    /***/
  }),
  
  /***/ "./main.js":
  /*!*****************!*\
    !*** ./main.js ***!
    \*****************/
  /*! no exports provided */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ToyReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToyReact */ \"./ToyReact.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Div = /*#__PURE__*/function () {\n  function Div() {\n    _classCallCheck(this, Div);\n\n    this.children = [];\n  }\n\n  _createClass(Div, [{\n    key: \"append\",\n    value: function append(child) {\n      var _this = this;\n\n      this.children.push(child);\n      this.child = document.createElement('div');\n      this.children.forEach(function (item) {\n        return _this.child.append(item);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", null, this.child);\n    }\n  }]);\n\n  return Div;\n}();\n\nvar div = _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", {\n  id: \"div\"\n}, _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", null, \"555\"), _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", null, \"666\"));\nvar div2 = _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(Div, null, _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", null, \"444\"), _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(Div, null, _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", null, \"555\"), _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", null, \"666\")));\nvar div3 = _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", null, _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", null, \"444\"), _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(Div, null, _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", null, \"555\"), _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", null, \"666\")));\n_ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].render(div, document.body); // ToyReact.render(div2, document.body)\n// ToyReact.render(div3, document.body)\n\n//# sourceURL=webpack:///./main.js?");
    
    /***/
  })
  
  /******/
});
