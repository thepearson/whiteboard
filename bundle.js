/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  overflow: hidden;\n}\n\n#drawing-canvas {\n  background-color: #fff;\n}\n\n#palette {\n  justify-content: space-around;\n  transform: translate(-50%, 0);\n  position: fixed;\n  display: flex;\n  height: 120px;\n  bottom: 0;\n  left: 50%;\n  padding-bottom: 20px;\n  pointer-events: none;\n}\n#palette .color {\n  margin: 20px;\n  pointer-events: all;\n  width: 80px;\n  cursor: pointer;\n  height: 80px;\n  border-radius: 50%;\n  border: 10px solid rgba(255, 255, 255, 0);\n}\n#palette .color:hover {\n  border: 10px solid rgba(255, 255, 255, 0.8);\n}\n#palette .color.selected {\n  border: 10px solid rgba(204, 204, 255, 0.7);\n}", "",{"version":3,"sources":["webpack://./src/scss/styles.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,SAAA;EACA,UAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,sBAAA;AACF;;AAEA;EACE,6BAAA;EACA,6BAAA;EACA,eAAA;EACA,aAAA;EACA,aAAA;EACA,SAAA;EACA,SAAA;EACA,oBAAA;EACA,oBAAA;AACF;AAGE;EACE,YAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,yCAAA;AADJ;AAEI;EACE,2CAAA;AAAN;AAEI;EACE,2CAAA;AAAN","sourcesContent":["* {\n  font-size: 16px;\n  margin:0;\n  padding:0;\n}\n\nbody {\n  overflow:hidden;\n}\n\n#drawing-canvas {\n  background-color: #fff;\n}\n\n#palette {\n  justify-content: space-around;\n  transform: translate(-50%, 0);\n  position: fixed;\n  display: flex;\n  height: 120px;\n  bottom: 0;\n  left: 50%;\n  padding-bottom: 20px;\n  pointer-events: none;\n  \n\n\n  .color {\n    margin: 20px;\n    pointer-events: all;\n    width: 80px;\n    cursor: pointer;\n    height: 80px;\n    border-radius: 50%;\n    border: 10px solid rgba(255, 255, 255, 0);\n    &:hover {\n      border: 10px solid rgba(255, 255, 255, 0.8);\n    }\n    &.selected {\n      border: 10px solid rgba(204, 204, 255, 0.7);\n    }\n  }\n\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawing */ "./src/drawing.ts");
/* harmony import */ var _tools_marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools/marker */ "./src/tools/marker.ts");
/* harmony import */ var _hud_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hud/palette */ "./src/hud/palette.ts");
/* harmony import */ var _hud_hud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hud/hud */ "./src/hud/hud.ts");







/**
 * The top-level Game class, manages setup, base loop, and events
 */
class App {
    /**
     * Constructor
     *
     * @param   {HTMLCanvasElement}         canvas   This is the target canvas for our game
     * @param   {CanvasRenderingContext2D}  context  This is the contet for the canvas
     */
    constructor(canvas, context) {
        /**
         * Event for the canvas.onMouseMove event
         */
        this.mouse_move = null;
        /**
         * Event for the canvas.onMouseMove event
         */
        this.mouse_wheel = null;
        /**
         * Event for the canvas.onMouseDown event
         */
        this.mouse_down = null;
        /**
         * Event for the canvas.onMouseUp event
         */
        this.mouse_up = null;
        /**
         * Drawing canvas
         */
        this.canvas = null;
        /**
         * Timestamp when last frame was processed
         * used for calculating the deltaTime and
         * FPS.
         */
        this.oldTimestamp = 0.0;
        /**
         * Holder for FPS, useful when needing to render
         * this within the game environment
         */
        this.fps = 0;
        this.canvas = canvas;
        this.context = context;
        // Set canvas dimensions
        this.canvas.width = _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width;
        this.canvas.height = _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height;
    }
    /**
     * Bootstrap function, used for setting
     * everything up prior to kicking off the renderLoop
     *
     * @return  {void}
     */
    setUp() {
        // Create world
        this.drawing = new _drawing__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.drawing.setPen(new _tools_marker__WEBPACK_IMPORTED_MODULE_3__["default"](this.drawing));
        //this.drawing.setPallette(new Pallette());
        // Items to the hud
        const hud = new _hud_hud__WEBPACK_IMPORTED_MODULE_5__["default"]();
        const pallette = new _hud_palette__WEBPACK_IMPORTED_MODULE_4__["default"](new vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector(_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width / 2, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height - _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.PALLETTE_SIZE));
        pallette.setColorIndex(0);
        hud.addItem(pallette);
        this.drawing.hud = hud;
        // Add events
        if (this.canvas instanceof HTMLCanvasElement) {
            this.mouse_move = this.canvas.addEventListener("mousemove", (event) => {
                var _a;
                const mouse_pos = new vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector(event.clientX, event.clientY);
                (_a = this.drawing) === null || _a === void 0 ? void 0 : _a.setTargetPosition(mouse_pos);
                hud.setCursorPosition(mouse_pos);
            });
            this.mouse_down = this.canvas.addEventListener("mousedown", (event) => {
                var _a, _b;
                (_b = (_a = this.drawing) === null || _a === void 0 ? void 0 : _a.pen) === null || _b === void 0 ? void 0 : _b.startDrawing();
            });
            this.mouse_wheel = this.canvas.addEventListener("wheel", (event) => {
                var _a, _b, _c, _d, _e, _f;
                if (event.deltaY > 0) {
                    (_b = (_a = this.drawing) === null || _a === void 0 ? void 0 : _a.pen) === null || _b === void 0 ? void 0 : _b.setSize(((_c = this.drawing) === null || _c === void 0 ? void 0 : _c.pen.size) - 2);
                }
                else {
                    (_e = (_d = this.drawing) === null || _d === void 0 ? void 0 : _d.pen) === null || _e === void 0 ? void 0 : _e.setSize(((_f = this.drawing) === null || _f === void 0 ? void 0 : _f.pen.size) + 2);
                }
            });
            this.mouse_up = this.canvas.addEventListener("mouseup", (event) => {
                var _a, _b;
                (_b = (_a = this.drawing) === null || _a === void 0 ? void 0 : _a.pen) === null || _b === void 0 ? void 0 : _b.stopDrawing();
            });
        }
    }
    /**
     * Processes any periodic timers
     *
     * @param   {DOMHighResTimeStamp}  timestamp  EPOC Milliseconds
     *
     * @return  {void}
     */
    processTimers(timestamp) {
    }
    /**
     * Process any game calculations, cascades down to the
     * World object and passes off any entity based calcs to there.
     * Then trigger of all rendering for the world.
     *
     * @param   {DOMHighResTimeStamp}  timestamp  EPOC milliseconds
     *
     * @return  {void}
     */
    process(timestamp) {
        var _a, _b;
        // Short circut, these MUST exist
        if (this.canvas == null || this.context == null)
            return;
        // Process any timers
        this.processTimers(timestamp);
        // Calculate the number of seconds passed since the last frame
        const dt = timestamp - this.oldTimestamp;
        // Update timestamp for next process frame
        this.oldTimestamp = timestamp;
        // Trigger World calcs
        // TODO: async? Performance improvment at a later date.
        (_a = this.drawing) === null || _a === void 0 ? void 0 : _a.process(dt, timestamp);
        // Render things
        (_b = this.drawing) === null || _b === void 0 ? void 0 : _b.render(this.canvas, this.context);
    }
}


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Constants": () => (/* binding */ Constants)
/* harmony export */ });
const Constants = {
    PALLETTE_SIZE: 60,
    TOOL_SPACING: 20,
    CANVAS_SIZE: {
        width: window.innerWidth,
        height: window.innerHeight
    },
    COLORS: [
        {
            r: 255,
            g: 0,
            b: 0,
            a: 1.0
        },
        {
            r: 0,
            g: 192,
            b: 0,
            a: 1.0
        },
        {
            r: 0,
            g: 0,
            b: 255,
            a: 1.0
        },
        {
            r: 255,
            g: 255,
            b: 0,
            a: 1.0
        },
        {
            r: 255,
            g: 128,
            b: 0,
            a: 1.0
        },
        {
            r: 0,
            g: 0,
            b: 0,
            a: 1.0
        },
    ],
    CANVAS_TARGET: "drawing-canvas"
};


/***/ }),

/***/ "./src/drawing.ts":
/*!************************!*\
  !*** ./src/drawing.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Drawing)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _util_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/color */ "./src/util/color.ts");


/**
 * Main world class, constructs everytrhing about the game world
 */
class Drawing {
    constructor() {
        /**
         * All drawn entities, these will all get
         * processed and rendered when the need to be
         *
         * @var  {Map<number, Entity>}
         */
        this.entities = new Map();
        /**
         * Heads up display (GUI)
         *
         * @var {Hud}
         */
        this.hud = null;
        /**
         * Entity incremental number, used to track unique numerical
         * id of all entities loaded onto the canvas
         *
         * @var {number}
         */
        this.entity_id = 0;
        /**
         * The active entity
         *
         */
        this.active_entity = null;
        /**
         * Should we draw the targets?
         *
         * @var {boolean}
         */
        this.draw_target = true;
        /**
         * Target current location
         *
         * @var {Vec2.Vector}
         */
        this.target = null;
        /**
         * Current pen
         *
         * @var {Pen}
         */
        this.pen = null;
        /**
         * [description]
         */
        /**
         * Helper to calculate FPS and framerates
         *
         * @var {number}
         */
        this.timeToDraw = 0;
        /**
         * Holder for deltatime
         *
         * @var {number}
         */
        this.dt = 0;
        /**
         * Previous frame timestamp
         *
         * @var {DOMHighResTimeStamp}
         */
        this.oldTimestamp = 0.0;
        /**
         * Frames per second holder
         *
         * @var {number}
         */
        this.fps = 0;
        /**
         * Show debug?
         *
         * @var {boolean}
         */
        this.show_debug = false;
    }
    /**
     * Returns a game Entity
     *
     * @param   {number}  id  Entiti numerical ID
     *
     * @return  {Entity}
     */
    getEntity(id) {
        const entity = this.entities.get(id);
        if (entity)
            return entity;
        return null;
    }
    /**
     * Adds an entity to the game
     *
     * @param   {Entity}  entity  Entity to add to the gameworld
     *
     * @return  {void}
     */
    addEntity(entity) {
        entity.id = this.entity_id;
        entity.drawing = this;
        this.entities.set(this.entity_id, entity);
        this.entity_id += 1;
    }
    /**
     * Set the pen
     *
     * @param   {Pen}  pen  Set's the active pen to Pen
     *
     * @return  {void}
     */
    setPen(pen) {
        this.pen = pen;
    }
    /**
     * Unset's the current target
     *
     * @return  {void}
     */
    unsetTarget() {
        this.target = null;
    }
    /**
     * Sets the current target position
     *
     * @var {Vec2.Vector} mouse_pos   Target position
     *
     * @return {void}
     */
    setTargetPosition(mouse_pos) {
        this.target = mouse_pos;
        if (this.pen) {
            this.pen.setLocation(mouse_pos);
        }
    }
    /**
     * Helper function to draw the targets
     *
     * @param   {CanvasRenderingContext2D}  context  Canvas drawing context
     *
     * @return  {void}
     */
    drawTarget(context) {
        if (this.pen != null) {
            this.pen.drawTarget(context);
        }
    }
    /**
     * Return count of entites by type, if no type specified,
     * then retunr count of all.
     *
     * @param   {string}  type  Entity Type|Name [optional]
     *
     * @return  {number}        Number of entities
     */
    countEntities(type) {
        let count = 0;
        if (!type)
            return this.entities.size;
        for (let [key, entity] of this.entities) {
            if (entity.name == type && entity.remove == false) {
                count++;
            }
        }
        return count;
    }
    /**
     * Remove an entity fromt he game
     *
     * @param   {number}  id  Numebrical ID of the entity
     *
     * @return  {void}
     */
    removeEntity(id) {
        this.entities.delete(id);
    }
    /**
     * Draw the debugging panel
     *
     * @param   {CanvasRenderingContext2D}  context  Canvas rendering context
     *
     * @return  {void}
     */
    drawDebug(context) {
        // Draw number to the screen
        context.fillStyle = '#dddddd55';
        context.fillRect(_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width - 75, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height - 100, 75, 100);
        context.font = '11px Arial';
        context.fillStyle = 'black';
        context.fillText("FPS: " + this.fps, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width - 70, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height - 85);
        context.fillText("ENT: " + this.entities.size, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width - 70, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height - 70);
    }
    /**
     * Draw the HUD gui
     *
     * @param   {CanvasRenderingContext2D}  context  Canvas rendering context
     *
     * @return  {void}
     */
    drawGui(context) {
        if (!this.hud)
            return;
        this.hud.render(context);
    }
    /**
     * Returns the current active color
     *
     * @return  {Color}   The selected color
     */
    getColor() {
        var _a;
        const pallette = (_a = this.hud) === null || _a === void 0 ? void 0 : _a.getByName("pallette");
        if (pallette) {
            return pallette.getColor();
        }
        return new _util_color__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, 0);
    }
    /**
     * Process all the rendering for the world
     *
     * @param   {HTMLCanvasElement}         canvas   Canvas
     * @param   {CanvasRenderingContext2D}  context  Canvas drawing context
     *
     * @return  {void}
     */
    render(canvas, context) {
        var _a, _b;
        // Clear the screen every frame
        context.clearRect(0, 0, canvas.width, canvas.height);
        // Render each og the entitites. (Drawings)
        for (let [key, entity] of this.entities) {
            entity.render(context);
        }
        // Draw any pen helpers
        if ((_a = this.pen) === null || _a === void 0 ? void 0 : _a.active_entity) {
            this.pen.active_entity.draw(context);
        }
        //
        if ((_b = this.pen) === null || _b === void 0 ? void 0 : _b.is_drawing) {
            this.pen.draw(context);
        }
        // draw target if any
        if (this.draw_target)
            this.drawTarget(context);
        if (this.show_debug)
            this.drawDebug(context);
        this.drawGui(context);
    }
    /**
     * Garbage clean up, removes any entities that are schedule for removal
     *
     * @return  {void}
     */
    removeEntities() {
        const ids = [];
        for (let [key, entity] of this.entities) {
            if (entity.remove) {
                this.entities.delete(key);
            }
        }
    }
    /**
     * Do all world calculations
     *
     * @param   {number}               gameTime   DeltaTime
     * @param   {DOMHighResTimeStamp}  timestamp  Current time
     *
     * @return  {void}
     */
    process(time, timestamp) {
        // Calculate the number of seconds passed since the last frame
        this.timeToDraw = time / 1000;
        // Calculate fps
        this.fps = Math.round(1 / this.timeToDraw);
        this.removeEntities();
        for (let [key, entity] of this.entities) {
            entity.process(time);
        }
        // Allow hud to process things
        if (this.hud)
            this.hud.process(time);
    }
}


/***/ }),

/***/ "./src/entities/entity.ts":
/*!********************************!*\
  !*** ./src/entities/entity.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Entity)
/* harmony export */ });
/* harmony import */ var _util_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/color */ "./src/util/color.ts");

/**
 * Core entity class, all objects within the game field are entities.
 */
class Entity {
    /**
     * @param   {string}  name  name or type of entity
     */
    constructor(name) {
        /**
         * Time the entity was created, milliseconds since EPOC
         */
        this.id = 0;
        /**
         * Time the entity was created, milliseconds since EPOC
         */
        this.created = 0;
        /**
         * Colour of the pen
         *
         * @return  {Color}  Colour object that the entity will be drawn as.
         */
        this.color = new _util_color__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 0);
        /**
         * Size of the pen
         */
        this.size = 0;
        /**
         * A name for the entity, aka type. Can be used to query for eneities of "name"
         */
        this.name = '';
        /**
         * If set to true the entity will be disposed of next tick.
         */
        this.remove = false;
        /**
         * Ref to the drawing canvs
         */
        this.drawing = null;
        this.name = name;
        this.created = Date.now();
    }
    /**
     * Sets Color
     *
     * @param   {Color}  color  Color to set on the entity
     *
     * @return  {void}
     */
    setColor(color) {
        this.color = color;
    }
    /**
     * Render the entity, by default all entities are treated as circles.
     *
     * @param   {CanvasRenderingContext2D}  context  Canvas drawing context
     *
     * @return  {void}
     */
    render(context) {
        this.draw(context);
    }
    process(gametime) {
    }
}


/***/ }),

/***/ "./src/entities/freehand.ts":
/*!**********************************!*\
  !*** ./src/entities/freehand.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Freehand)
/* harmony export */ });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/entities/entity.ts");

class Freehand extends _entity__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(size, color) {
        super('freehand');
        this.points = [];
        this.size = size;
        this.color = color;
    }
    /**
     * [draw description]
     *
     * @param   {CanvasRenderingContext2D}  context  [context description]
     *
     * @return  {void}                               [return description]
     */
    draw(context) {
        if (this.points.length < 1)
            return;
        context.beginPath();
        context.lineWidth = this.size;
        context.strokeStyle = this.color.getHex(false);
        context.fillStyle = this.color.getHex(false);
        context.lineCap = "round";
        context.moveTo(this.points[0].x, this.points[0].y);
        for (var i = 0; i < this.points.length; i++) {
            context.lineTo(this.points[i].x, this.points[i].y);
        }
        context.stroke();
        // for (let point of this.points) {
        //   drawCircle(context, point, this.color, this.size);
        // }
    }
    /**
     * [update description]
     *
     * @param   {Vector}  location  [location description]
     *
     * @return  {void}              [return description]
     */
    update(location) {
        this.points.push(location);
    }
}


/***/ }),

/***/ "./src/hud/hud.ts":
/*!************************!*\
  !*** ./src/hud/hud.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hud)
/* harmony export */ });
class Hud {
    constructor() {
        /**
         * Array of items to render for the Hud
         */
        this.items = [];
        /**
         * If we want the HUD to be visible
         */
        this.visible = true;
        /**
         * Position of the mouse
         */
        this.cursor_position = null;
        /**
         * Event for the canvas.onMouseMove event
         */
        this.click_event = null;
    }
    /**
     * Call all the render functions of each HudItem
     *
     * @param   {CanvasRenderingContext2D}  context  Canvas rendering context
     *
     * @return  {void}
     */
    render(context) {
        // Short circuit if not visible
        if (!this.visible)
            return;
        // Otherwise render all the HUD items.
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].render(context);
        }
    }
    /**
     * Check for cursor and hud intersects
     *
     * @param   {number}  delta  [delta description]
     *
     * @return  {void}           [return description]
     */
    process(delta) {
        //for (let i = 0; i < this.items.length; i++) {
        // const item_box: Array<Vector> = this.items[i].getBounds();
        // const [start, end] = item_box;
        // if (!this.cursor_position) continue;
        // if (this.cursor_position.x > start.x && this.cursor_position.x < end.x && this.cursor_position.y > start.y && this.cursor_position.y < end.y && this.items[i].hovered === false) {
        //   this.items[i].handleMouseEnter(this.cursor_position);
        //   this.click_event = document.getElementById(`${Constants.CANVAS_TARGET}`)?.addEventListener('click', (event: MouseEvent) => {
        //     if (this.cursor_position) {
        //       this.items[i].handleMouseClick(this.cursor_position);
        //     }
        //   });
        // }
        //   if ((this.cursor_position.x < start.x || this.cursor_position.x > end.x || this.cursor_position.y < start.y || this.cursor_position.y > end.y) && this.items[i].hovered === true) {
        //     this.items[i].handleMouseLeave(this.cursor_position);
        //     document.getElementById(`#${Constants.CANVAS_TARGET}`)?.removeEventListener('click', this.click_event)
        //   }
        // }
    }
    /**
     * Add an item to the HUD
     *
     * @param   {HudItem}  item  Item that inherits from the HutItem abstract class
     *
     * @return  {void}
     */
    addItem(item) {
        this.items.push(item);
    }
    /**
     * Get a reference to a hud item by name
     *
     * @param   {string}   name  the name of the hud item to retrieve
     *
     * @return  {HudItem|null}   the hud item if found otherwise null.
     */
    getByName(name) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name === name)
                return this.items[i];
        }
        return null;
    }
    /**
     * Tracks the cursor position
     *
     * @param   {Vector}  position  Position of the mouse.
     *
     * @return  {void}
     */
    setCursorPosition(position) {
        this.cursor_position = position;
    }
}


/***/ }),

/***/ "./src/hud/hud_item.ts":
/*!*****************************!*\
  !*** ./src/hud/hud_item.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HudItem)
/* harmony export */ });
class HudItem {
    /**
     * Hud Items need a name
     *
     * @param   {string}  name  The name for the item
     *
     * @return  {[type]}
     */
    constructor(name) {
        /**
         * If this hud item has a mouse over it.
         */
        this.hovered = false;
        /**
         * [description]
         */
        this.bounding_box = [];
        this.name = name;
    }
    /**
     * Returns two vectors, top l
     *
     * @return  {Array<Vector>}
     */
    getBounds() {
        return this.bounding_box;
    }
    ;
    /**
     * Returns two vectors, top l
     *
     * @return  {Array<Vector>}
     */
    setBounds(start, end) {
        this.bounding_box = [
            start,
            end
        ];
    }
    ;
}


/***/ }),

/***/ "./src/hud/palette.ts":
/*!****************************!*\
  !*** ./src/hud/palette.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Palette)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _util_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/color */ "./src/util/color.ts");
/* harmony import */ var _hud_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hud_item */ "./src/hud/hud_item.ts");



class Palette extends _hud_item__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(position) {
        super("pallette");
        /**
         * List of available colors
         */
        this.colors = [];
        /**
         * The currently selected color
         */
        this.selected_color = new _util_color__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, 0, 0.5);
        /**
         * Color bounds
         */
        // color_bounds: Array<{
        //   position: Vector | null,
        //   size: number,
        //   color: Color
        // }> = [];
        /**
         * Position of Pallette
         */
        //position: Vector | null = null;
        /**
         * The currently selected color index
         */
        this.selected_color_index = 1;
        //this.position = position;
        for (var color of _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.COLORS) {
            this.colors.push(new _util_color__WEBPACK_IMPORTED_MODULE_1__["default"](color.r, color.g, color.b, color.a));
        }
        this.build();
    }
    /**
     * Build the UI
     *
     * @return  {void}
     */
    build() {
        const target = document.getElementById('palette');
        if (!target)
            return;
        target.innerHTML = '';
        for (let i = 0; i < this.colors.length; i++) {
            const div = document.createElement("div");
            div.style.backgroundColor = this.colors[i].getHex();
            div.classList.add("color");
            if (i === this.selected_color_index)
                div.classList.add("selected");
            div.addEventListener('click', (event) => {
                this.setColorIndex(i);
            });
            target === null || target === void 0 ? void 0 : target.appendChild(div);
        }
    }
    /**
     * Returns the current drawing color
     *
     * @return  {Color}   [return description]
     */
    getColor() {
        return this.selected_color;
    }
    /**
     * Sets the index of the selected colour and
     * updates the selected color
     *
     * @param   {number}  index
     *
     * @return  {void}
     */
    setColorIndex(index) {
        this.selected_color_index = index;
        this.selected_color = this.colors[this.selected_color_index];
        this.build();
    }
    /**
     * Renders the pallette
     *
     * @param   {CanvasRenderingContext2D}  context  Canvas 2D Drawing context
     *
     * @return  {void}
     */
    render(context) {
        // if (!this.position) return;
        // let alpha = 0.2;
        // if (this.hovered) alpha = 1.0;
        // const offset = (this.colors.length / 2) * (Constants.PALLETTE_SIZE + Constants.TOOL_SPACING) - (Constants.PALLETTE_SIZE / 2 + Constants.TOOL_SPACING);
        // for (let i = 0; i < this.colors.length; i++) {
        //   const currentPosition = new Vector(this.position?.x - offset + (i * (Constants.PALLETTE_SIZE + Constants.TOOL_SPACING)), this.position?.y);
        //   if (i === this.selected_color_index) {
        //     drawCircle(context, currentPosition, new Color(204, 204, 255, alpha), Constants.PALLETTE_SIZE + 25);  
        //   }
        //   const color = this.colors[i].getRgb();
        //   this.color_bounds[i].position =currentPosition;
        //   drawCircle(context, currentPosition, new Color(color[0], color[1], color[2], alpha), Constants.PALLETTE_SIZE);
        // }
    }
    /**
     * What to do when the mouse cursor enters the pallette element
     *
     * @param   {Vector}  position
     *
     * @return  {void}
     */
    handleMouseEnter(position) {
        // this.hovered = true;
        // const f = document.getElementById(Constants.CANVAS_TARGET);
        // if (f) f.style.cursor = "pointer";
    }
    /**
     * How to handle when the mouse cursor leaves the UI
     *
     * @param   {Vector}  position
     *
     * @return  {void}
     */
    handleMouseLeave(position) {
        // this.hovered = false;
        // const f = document.getElementById(Constants.CANVAS_TARGET);
        // if (f) f.style.cursor = "auto";
    }
    /**
     * How to deal with the click niside the element
     *
     * @param   {Vector}  position
     *
     * @return  {void}
     */
    handleMouseClick(position) {
        // for (let i = 0; i < this.color_bounds.length; i++) {
        //   const pos = this.color_bounds[i].position;
        //   if (!pos) continue;
        //   if (pos?.distance(position) <= this.color_bounds[i].size) {
        //     this.setColorIndex(i);
        //   }
        // }
    }
}


/***/ }),

/***/ "./src/tools/marker.ts":
/*!*****************************!*\
  !*** ./src/tools/marker.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Marker)
/* harmony export */ });
/* harmony import */ var _entities_freehand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/freehand */ "./src/entities/freehand.ts");
/* harmony import */ var _pen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pen */ "./src/tools/pen.ts");


class Marker extends _pen__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Construct for marker
     *
     * @return  {Marker}  self
     */
    constructor(drawing) {
        super(drawing, 'marker');
    }
    /**
     * [draw description]
     *
     * @param   {CanvasRenderingContext2D}  context  [context description]
     *
     * @return  {[type]}                             [return description]
     */
    draw(context) {
        if (this.active_entity) {
            this.active_entity.update(this.location);
        }
    }
    getEntity() {
        const color = this.drawing.getColor();
        return new _entities_freehand__WEBPACK_IMPORTED_MODULE_0__["default"](this.size, color);
    }
}


/***/ }),

/***/ "./src/tools/pen.ts":
/*!**************************!*\
  !*** ./src/tools/pen.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pen)
/* harmony export */ });
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/circle */ "./src/util/circle.ts");
/* harmony import */ var _util_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/color */ "./src/util/color.ts");



class Pen {
    /**
     * @param   {string}  name  name or type of entity
     */
    constructor(drawing, name) {
        /**
         * Name of the pen
         */
        this.name = '';
        /**
         * Width of the pen
         */
        this.size = 20;
        /**
         * Target Color
         */
        this.target_color = new _util_color__WEBPACK_IMPORTED_MODULE_2__["default"](128, 128, 255, 0.2);
        /**
         * Location
         */
        this.location = new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(0, 0);
        /**
         * Is the pen down (drawing)
         */
        this.is_drawing = false;
        /**
         * The entity being drawn
         */
        this.active_entity = null;
        this.name = name;
        this.drawing = drawing;
    }
    /**
     * Set's the location of the pen
     *
     * @param   {Vector}  location  Location of the pen
     *
     * @return  {[type]}            void
     */
    setLocation(location) {
        this.location = location;
    }
    /**
     * Start drawing, create the entity etc.
     *
     * @return  {void}
     */
    startDrawing() {
        this.setIsDrawing(true);
        this.active_entity = this.getEntity();
    }
    /**
     * Sets the size of the pointer brush
     *
     * @param   {number}  size  [size description]
     *
     * @return  {void}          [return description]
     */
    setSize(size) {
        if (size > 0)
            this.size = Math.min(size, 100);
    }
    /**
     * Stop drawing, apply the entity
     *
     * @return  {void}    [return description]
     */
    stopDrawing() {
        this.setIsDrawing(false);
        if (this.active_entity) {
            this.drawing.addEntity(this.active_entity);
            this.active_entity = null;
        }
    }
    /**
     * Sets the drawing state of the Pen
     *
     * @param   {boolean}  state  Is the pen drawing
     *
     * @return  {[type]}          void
     */
    setIsDrawing(state) {
        this.is_drawing = state;
    }
    /**
     * Draw the pen target
     *
     * @param   {CanvasRenderingContext2D}  context  Canvas drawing context
     *
     * @return  {[type]}                             [return description]
     */
    drawTarget(context) {
        (0,_util_circle__WEBPACK_IMPORTED_MODULE_1__["default"])(context, this.location, this.target_color, this.size);
    }
}


/***/ }),

/***/ "./src/util/circle.ts":
/*!****************************!*\
  !*** ./src/util/circle.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawCircle)
/* harmony export */ });
/**
 * Draw a circle on the context given
 *
 * @var {CanvasRenderingContext2D}  context   Canvas rendering context to draw with
 * @var {Vec2.Vector}               location  Where to draw the circle
 * @var {Color}                     color     Color to draw with
 * @var {number}                    size      Diameter in pixels
 *
 * @returns {void}
 */
function drawCircle(context, location, color, size) {
    context.beginPath();
    context.arc(location.x, location.y, Math.round(size / 2), 0, 2 * Math.PI, false);
    context.fillStyle = color.getRgbString();
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = color.getRgbString();
    context.stroke();
}


/***/ }),

/***/ "./src/util/color.ts":
/*!***************************!*\
  !*** ./src/util/color.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Color)
/* harmony export */ });
/**
 * Colour helper, useful for converting between colour formats.
 * This is probably not really needed for the TS/JS version but is
 * more of a hangover from the Dart version of the game. Was good
 * learning converting it to javascript/typescript.
 */
class Color {
    /**
     * [constructor description]
     *
     * @param   {number}  r  red [0 - 255]
     * @param   {number}  g  green [0 - 255]
     * @param   {number}  b  blue [0 - 255]
     * @param   {number?}  a  alpha [0.0 - 1.0]
     */
    constructor(r, g, b, a) {
        /**
         * red
         */
        this.r = 0;
        /**
         * green
         */
        this.g = 0;
        /**
         * blue
         */
        this.b = 0;
        /**
         * alpha
         */
        this.a = 0.0;
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a ? a : 1.0;
    }
    /**
     * Returns an array of RGB values
     *
     * @return  {Array<number>}
     */
    getRgb() {
        return [this.r, this.g, this.b];
    }
    /**
     * Returns an array of RGB values
     *
     * @return  {Array<number>}
     */
    getRgbString() {
        if (this.a)
            return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
        return `rgba(${this.r}, ${this.g}, ${this.b})`;
    }
    /**
     * Return array of HSL values
     *
     * From: https://css-tricks.com/converting-color-spaces-in-javascript/
     *
     * @return  {Array<number>}
     */
    getHsl() {
        // Make r, g, and b fractions of 1
        const r = this.r / 255;
        const g = this.g / 255;
        const b = this.b / 255;
        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b);
        let cmax = Math.max(r, g, b);
        let delta = cmax - cmin;
        let h = 0;
        let s = 0;
        let l = 0;
        // Calculate hue
        // No difference
        if (delta == 0) {
            h = 0;
            // Red is max
        }
        else if (cmax == r) {
            h = ((g - b) / delta) % 6;
            // Green is max
        }
        else if (cmax == g) {
            h = (b - r) / delta + 2;
            // Blue is max
        }
        else {
            h = (r - g) / delta + 4;
        }
        h = Math.round(h * 60);
        // Make negative hues positive behind 360°
        if (h < 0) {
            h += 360;
        }
        // Calculate lightness
        l = (cmax + cmin) / 2;
        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        return [h, s, l];
    }
    /**
     * Return HEX value of colour (inlcuding alpha)
     *
     * From: https://css-tricks.com/converting-color-spaces-in-javascript/
     *
     * @return  {string}
     */
    getHex(withAlpha = true) {
        let r = this.r.toString(16);
        let g = this.g.toString(16);
        let b = this.b.toString(16);
        let a = (this.a * 255).toString(16);
        if (r.length == 1)
            r = "0" + r;
        if (g.length == 1)
            g = "0" + g;
        if (b.length == 1)
            b = "0" + b;
        if (a.length == 1)
            a = "0" + a;
        if (!withAlpha)
            return "#" + r + g + b;
        return "#" + r + g + b + a;
    }
}


/***/ }),

/***/ "./node_modules/vector2d/src/AbstractVector.js":
/*!*****************************************************!*\
  !*** ./node_modules/vector2d/src/AbstractVector.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * These values are used by the `AbstractVector.round` method to increase
 * performance vs. using  Number.toFixed.
 */
var precision = [
    1,
    10,
    100,
    1000,
    10000,
    100000,
    1000000,
    10000000,
    100000000,
    1000000000,
    10000000000
];
/**
 * The class that all other vector representations are derived from.
 *
 * Contains the core implementation for all methods that will be exposed by
 * vector instances.
 *
 * Example of creating a custom implementation:
 *
 * ```ts
 * import { AbstractVector } from "./AbstractVector"
 *
 * export class MyCustomVector extends AbstractVector {
 *  constructor (x: number, y: number) {
 *    super(CustomVectorType)
 *  }
 * }
 * ```
 */
var AbstractVector = /** @class */ (function () {
    function AbstractVector(ctor) {
        this.ctor = ctor;
    }
    /**
     * Set both x and y axis value
     * @param x   New x val
     * @param y   New y val
     */
    AbstractVector.prototype.setAxes = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    /**
     * Getter for x the axis value
     */
    AbstractVector.prototype.getX = function () {
        return this.x;
    };
    /**
     * Setter for x axis value
     */
    AbstractVector.prototype.setX = function (x) {
        this.x = x;
        return this;
    };
    /**
     * Getter for y axis value
     */
    AbstractVector.prototype.getY = function () {
        return this.y;
    };
    /**
     * Setter for y axis.
     */
    AbstractVector.prototype.setY = function (y) {
        this.y = y;
        return this;
    };
    /**
     * Return the vector as a formatted string, e.g "(0, 4)"
     */
    AbstractVector.prototype.toString = function (round) {
        if (round === void 0) { round = false; }
        if (round) {
            return "(" + Math.round(this.x) + ", " + Math.round(this.y) + ")";
        }
        return "(" + this.x + ", " + this.y + ")";
    };
    /**
     * Return an Array containing the vector axes, e.g [0, 4]
     */
    AbstractVector.prototype.toArray = function () {
        return [this.x, this.y];
    };
    /**
     * Return an Object containing the vector axes, e.g { x: 0, y: 4 }
     */
    AbstractVector.prototype.toObject = function () {
        return {
            x: this.x,
            y: this.y
        };
    };
    /**
     * Add the provided vector to this one
     */
    AbstractVector.prototype.add = function (vec) {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    };
    /**
     * Subtract the provided vector from this one
     */
    AbstractVector.prototype.subtract = function (vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    };
    /**
     * Check if the provided vector equal to this one
     */
    AbstractVector.prototype.equals = function (vec) {
        return vec.x === this.x && vec.y === this.y;
    };
    /**
     * Multiply this vector by the provided vector
     */
    AbstractVector.prototype.multiplyByVector = function (vec) {
        this.x *= vec.x;
        this.y *= vec.y;
        return this;
    };
    /**
     * Multiply this vector by the provided vector
     */
    AbstractVector.prototype.mulV = function (vec) {
        return this.multiplyByVector(vec);
    };
    /**
     * Divide this vector by the provided vector
     */
    AbstractVector.prototype.divideByVector = function (vec) {
        this.x /= vec.x;
        this.y /= vec.y;
        return this;
    };
    /**
     * Divide this vector by the provided vector
     */
    AbstractVector.prototype.divV = function (v) {
        return this.divideByVector(v);
    };
    /**
     * Multiply this vector by the provided number
     */
    AbstractVector.prototype.multiplyByScalar = function (n) {
        this.x *= n;
        this.y *= n;
        return this;
    };
    /**
     * Multiply this vector by the provided number
     */
    AbstractVector.prototype.mulS = function (n) {
        return this.multiplyByScalar(n);
    };
    /**
     * Divive this vector by the provided number
     */
    AbstractVector.prototype.divideByScalar = function (n) {
        this.x /= n;
        this.y /= n;
        return this;
    };
    /**
     * Divive this vector by the provided number
     */
    AbstractVector.prototype.divS = function (n) {
        return this.divideByScalar(n);
    };
    /**
     * Normalise this vector
     */
    AbstractVector.prototype.normalise = function () {
        return this.divideByScalar(this.magnitude());
    };
    /**
     * For American spelling. Same as unit/normalise function
     */
    AbstractVector.prototype.normalize = function () {
        return this.normalise();
    };
    /**
     * The same as normalise and normalize
     */
    AbstractVector.prototype.unit = function () {
        return this.normalise();
    };
    /**
     * Returns the magnitude (length) of this vector
     */
    AbstractVector.prototype.magnitude = function () {
        var x = this.x;
        var y = this.y;
        return Math.sqrt(x * x + y * y);
    };
    /**
     * Returns the magnitude (length) of this vector
     */
    AbstractVector.prototype.length = function () {
        return this.magnitude();
    };
    /**
     * Returns the squred length of this vector
     */
    AbstractVector.prototype.lengthSq = function () {
        var x = this.x;
        var y = this.y;
        return x * x + y * y;
    };
    /**
     * Returns the dot product of this vector by another
     */
    AbstractVector.prototype.dot = function (vec) {
        return vec.x * this.x + vec.y * this.y;
    };
    /**
     * Returns the cross product of this vector by another.
     */
    AbstractVector.prototype.cross = function (vec) {
        return this.x * vec.y - this.y * vec.x;
    };
    /**
     * Reverses this vector i.e multiplies it by -1
     */
    AbstractVector.prototype.reverse = function () {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    };
    /**
     * Set the vector axes values to absolute values
     */
    AbstractVector.prototype.abs = function () {
        this.x = Math.abs(this.x);
        this.y = Math.abs(this.y);
        return this;
    };
    /**
     * Zeroes the vector i.e sets all axes to 0
     */
    AbstractVector.prototype.zero = function () {
        this.x = this.y = 0;
        return this;
    };
    /**
     * Returns the distance between this vector and another
     */
    AbstractVector.prototype.distance = function (v) {
        var x = this.x - v.x;
        var y = this.y - v.y;
        return Math.sqrt(x * x + y * y);
    };
    /**
     * Rotates the vetor by provided radians
     */
    AbstractVector.prototype.rotate = function (rads) {
        var cos = Math.cos(rads);
        var sin = Math.sin(rads);
        var ox = this.x;
        var oy = this.y;
        this.x = ox * cos - oy * sin;
        this.y = ox * sin + oy * cos;
        return this;
    };
    /**
     * Rounds this vector to n decimal places
     */
    AbstractVector.prototype.round = function (n) {
        if (n === void 0) { n = 2; }
        var p = precision[n];
        // This performs waaay better than toFixed and give Float32 the edge again.
        // http://www.dynamicguru.com/javascript/round-numbers-with-precision/
        this.x = ((0.5 + this.x * p) << 0) / p;
        this.y = ((0.5 + this.y * p) << 0) / p;
        return this;
    };
    /**
     * Returns a copy of this vector
     */
    AbstractVector.prototype.clone = function () {
        return new this.ctor(this.x, this.y);
    };
    return AbstractVector;
}());
exports.AbstractVector = AbstractVector;
//# sourceMappingURL=AbstractVector.js.map

/***/ }),

/***/ "./node_modules/vector2d/src/ArrayVector.js":
/*!**************************************************!*\
  !*** ./node_modules/vector2d/src/ArrayVector.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var AbstractVector_1 = __webpack_require__(/*! ./AbstractVector */ "./node_modules/vector2d/src/AbstractVector.js");
/**
 * A vector representation that stores the axes in an Array
 *
 * ```
 * const v = new Vec2D.ArrayVector(2, 5)
 * ```
 */
var ArrayVector = /** @class */ (function (_super) {
    __extends(ArrayVector, _super);
    function ArrayVector(x, y) {
        var _this = _super.call(this, ArrayVector) || this;
        _this.axes = [x, y];
        _this.ctor = ArrayVector;
        return _this;
    }
    Object.defineProperty(ArrayVector.prototype, "x", {
        get: function () {
            return this.axes[0];
        },
        set: function (x) {
            this.axes[0] = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayVector.prototype, "y", {
        get: function () {
            return this.axes[1];
        },
        set: function (y) {
            this.axes[1] = y;
        },
        enumerable: true,
        configurable: true
    });
    return ArrayVector;
}(AbstractVector_1.AbstractVector));
exports.ArrayVector = ArrayVector;
//# sourceMappingURL=ArrayVector.js.map

/***/ }),

/***/ "./node_modules/vector2d/src/Float32Vector.js":
/*!****************************************************!*\
  !*** ./node_modules/vector2d/src/Float32Vector.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var AbstractVector_1 = __webpack_require__(/*! ./AbstractVector */ "./node_modules/vector2d/src/AbstractVector.js");
/**
 * A vector representation that stores the axes in a Float32Array
 *
 * ```
 * const v = new Vec2D.Float32Vector(2, 5)
 * ```
 */
var Float32Vector = /** @class */ (function (_super) {
    __extends(Float32Vector, _super);
    function Float32Vector(x, y) {
        var _this = _super.call(this, Float32Vector) || this;
        _this.axes = new Float32Array(2);
        _this.axes[0] = x;
        _this.axes[1] = y;
        return _this;
    }
    Object.defineProperty(Float32Vector.prototype, "x", {
        get: function () {
            return this.axes[0];
        },
        set: function (x) {
            this.axes[0] = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Float32Vector.prototype, "y", {
        get: function () {
            return this.axes[1];
        },
        set: function (y) {
            this.axes[1] = y;
        },
        enumerable: true,
        configurable: true
    });
    return Float32Vector;
}(AbstractVector_1.AbstractVector));
exports.Float32Vector = Float32Vector;
//# sourceMappingURL=Float32Vector.js.map

/***/ }),

/***/ "./node_modules/vector2d/src/Vec2D.js":
/*!********************************************!*\
  !*** ./node_modules/vector2d/src/Vec2D.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
__export(__webpack_require__(/*! ./AbstractVector */ "./node_modules/vector2d/src/AbstractVector.js"));
__export(__webpack_require__(/*! ./ArrayVector */ "./node_modules/vector2d/src/ArrayVector.js"));
__export(__webpack_require__(/*! ./Float32Vector */ "./node_modules/vector2d/src/Float32Vector.js"));
__export(__webpack_require__(/*! ./Vector */ "./node_modules/vector2d/src/Vector.js"));
//# sourceMappingURL=Vec2D.js.map

/***/ }),

/***/ "./node_modules/vector2d/src/Vector.js":
/*!*********************************************!*\
  !*** ./node_modules/vector2d/src/Vector.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var AbstractVector_1 = __webpack_require__(/*! ./AbstractVector */ "./node_modules/vector2d/src/AbstractVector.js");
/**
 * A vector representation that stores the axes as part of the instance itself
 *
 * ```ts
 * const v = new Vec2D.Vector(2, 5)
 * ```
 */
var Vector = /** @class */ (function (_super) {
    __extends(Vector, _super);
    function Vector(x, y) {
        var _this = _super.call(this, Vector) || this;
        _this._x = x;
        _this._y = y;
        return _this;
    }
    Object.defineProperty(Vector.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    return Vector;
}(AbstractVector_1.AbstractVector));
exports.Vector = Vector;
//# sourceMappingURL=Vector.js.map

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");



/**
 * Query selector string
 * for the canvas target
 */
const target = `#${_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.CANVAS_TARGET}`;
(() => {
    // This is our target canvas
    const canvas = document.querySelector(target);
    if (canvas instanceof HTMLCanvasElement) {
        // Using the 2D context
        const context = canvas.getContext('2d');
        if (context == null)
            return;
        // Create Game object.
        const app = new _app__WEBPACK_IMPORTED_MODULE_1__["default"](canvas, context);
        // Define gameloop and process.
        const animationLoop = (timestamp) => {
            app.process(timestamp);
            // Keep requesting new frames
            window.requestAnimationFrame(animationLoop);
        };
        // Bootstrap any setup stuff
        app.setUp();
        // Start the renderloop.
        window.requestAnimationFrame(animationLoop);
    }
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0EsaUJBQWlCLGVBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaklhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlCQUFpQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQSxDQUFDO0FBQ0QsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHVCQUF1QixtQkFBTyxDQUFDLHVFQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0QsY0FBYztBQUNkOzs7Ozs7VUNuREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ0o7QUFDZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0RBQXVCLENBQUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRDQUFHO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3M/MzIxZiIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvZHJhd2luZy50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2VudGl0aWVzL2VudGl0eS50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2VudGl0aWVzL2ZyZWVoYW5kLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvaHVkL2h1ZC50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2h1ZC9odWRfaXRlbS50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2h1ZC9wYWxldHRlLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdG9vbHMvbWFya2VyLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdG9vbHMvcGVuLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdXRpbC9jaXJjbGUudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy91dGlsL2NvbG9yLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvdmVjdG9yMmQvc3JjL0Fic3RyYWN0VmVjdG9yLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvdmVjdG9yMmQvc3JjL0FycmF5VmVjdG9yLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvdmVjdG9yMmQvc3JjL0Zsb2F0MzJWZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvVmVjMkQuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvVmVjdG9yLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3doaXRlYm9hcmQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2RyYXdpbmctY2FudmFzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbiNwYWxldHRlIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbiNwYWxldHRlIC5jb2xvciB7XFxuICBtYXJnaW46IDIwcHg7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDEwcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG59XFxuI3BhbGV0dGUgLmNvbG9yOmhvdmVyIHtcXG4gIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcbiNwYWxldHRlIC5jb2xvci5zZWxlY3RlZCB7XFxuICBib3JkZXI6IDEwcHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjU1LCAwLjcpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFHRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUFESjtBQUVJO0VBQ0UsMkNBQUE7QUFBTjtBQUVJO0VBQ0UsMkNBQUE7QUFBTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbjowO1xcbiAgcGFkZGluZzowO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG92ZXJmbG93OmhpZGRlbjtcXG59XFxuXFxuI2RyYXdpbmctY2FudmFzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbiNwYWxldHRlIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBcXG5cXG5cXG4gIC5jb2xvciB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBib3JkZXI6IDEwcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICB9XFxuICAgICYuc2VsZWN0ZWQge1xcbiAgICAgIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDIwNCwgMjA0LCAyNTUsIDAuNyk7XFxuICAgIH1cXG4gIH1cXG5cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0ICogYXMgVmVjMiBmcm9tIFwidmVjdG9yMmRcIjtcbmltcG9ydCBEcmF3aW5nIGZyb20gXCIuL2RyYXdpbmdcIjtcbmltcG9ydCBNYXJrZXIgZnJvbSBcIi4vdG9vbHMvbWFya2VyXCI7XG5pbXBvcnQgUGFsbGV0dGUgZnJvbSBcIi4vaHVkL3BhbGV0dGVcIjtcbmltcG9ydCBIdWQgZnJvbSBcIi4vaHVkL2h1ZFwiO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XG4vKipcbiAqIFRoZSB0b3AtbGV2ZWwgR2FtZSBjbGFzcywgbWFuYWdlcyBzZXR1cCwgYmFzZSBsb29wLCBhbmQgZXZlbnRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtIVE1MQ2FudmFzRWxlbWVudH0gICAgICAgICBjYW52YXMgICBUaGlzIGlzIHRoZSB0YXJnZXQgY2FudmFzIGZvciBvdXIgZ2FtZVxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBUaGlzIGlzIHRoZSBjb250ZXQgZm9yIHRoZSBjYW52YXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbnRleHQpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IGZvciB0aGUgY2FudmFzLm9uTW91c2VNb3ZlIGV2ZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdXNlX21vdmUgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgZm9yIHRoZSBjYW52YXMub25Nb3VzZU1vdmUgZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2Vfd2hlZWwgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgZm9yIHRoZSBjYW52YXMub25Nb3VzZURvd24gZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2VfZG93biA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBmb3IgdGhlIGNhbnZhcy5vbk1vdXNlVXAgZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2VfdXAgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRHJhd2luZyBjYW52YXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2FudmFzID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRpbWVzdGFtcCB3aGVuIGxhc3QgZnJhbWUgd2FzIHByb2Nlc3NlZFxuICAgICAgICAgKiB1c2VkIGZvciBjYWxjdWxhdGluZyB0aGUgZGVsdGFUaW1lIGFuZFxuICAgICAgICAgKiBGUFMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9sZFRpbWVzdGFtcCA9IDAuMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhvbGRlciBmb3IgRlBTLCB1c2VmdWwgd2hlbiBuZWVkaW5nIHRvIHJlbmRlclxuICAgICAgICAgKiB0aGlzIHdpdGhpbiB0aGUgZ2FtZSBlbnZpcm9ubWVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mcHMgPSAwO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgLy8gU2V0IGNhbnZhcyBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCb290c3RyYXAgZnVuY3Rpb24sIHVzZWQgZm9yIHNldHRpbmdcbiAgICAgKiBldmVyeXRoaW5nIHVwIHByaW9yIHRvIGtpY2tpbmcgb2ZmIHRoZSByZW5kZXJMb29wXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXRVcCgpIHtcbiAgICAgICAgLy8gQ3JlYXRlIHdvcmxkXG4gICAgICAgIHRoaXMuZHJhd2luZyA9IG5ldyBEcmF3aW5nKCk7XG4gICAgICAgIHRoaXMuZHJhd2luZy5zZXRQZW4obmV3IE1hcmtlcih0aGlzLmRyYXdpbmcpKTtcbiAgICAgICAgLy90aGlzLmRyYXdpbmcuc2V0UGFsbGV0dGUobmV3IFBhbGxldHRlKCkpO1xuICAgICAgICAvLyBJdGVtcyB0byB0aGUgaHVkXG4gICAgICAgIGNvbnN0IGh1ZCA9IG5ldyBIdWQoKTtcbiAgICAgICAgY29uc3QgcGFsbGV0dGUgPSBuZXcgUGFsbGV0dGUobmV3IFZlY3RvcihDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGggLyAyLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0IC0gQ29uc3RhbnRzLlBBTExFVFRFX1NJWkUpKTtcbiAgICAgICAgcGFsbGV0dGUuc2V0Q29sb3JJbmRleCgwKTtcbiAgICAgICAgaHVkLmFkZEl0ZW0ocGFsbGV0dGUpO1xuICAgICAgICB0aGlzLmRyYXdpbmcuaHVkID0gaHVkO1xuICAgICAgICAvLyBBZGQgZXZlbnRzXG4gICAgICAgIGlmICh0aGlzLmNhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlX21vdmUgPSB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBjb25zdCBtb3VzZV9wb3MgPSBuZXcgVmVjMi5WZWN0b3IoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0VGFyZ2V0UG9zaXRpb24obW91c2VfcG9zKTtcbiAgICAgICAgICAgICAgICBodWQuc2V0Q3Vyc29yUG9zaXRpb24obW91c2VfcG9zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5tb3VzZV9kb3duID0gdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBlbikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnN0YXJ0RHJhd2luZygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm1vdXNlX3doZWVsID0gdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mO1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5kZWx0YVkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBlbikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnNldFNpemUoKChfYyA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnBlbi5zaXplKSAtIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgKF9lID0gKF9kID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QucGVuKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Uuc2V0U2l6ZSgoKF9mID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YucGVuLnNpemUpICsgMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm1vdXNlX3VwID0gdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wZW4pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zdG9wRHJhd2luZygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGFueSBwZXJpb2RpYyB0aW1lcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtET01IaWdoUmVzVGltZVN0YW1wfSAgdGltZXN0YW1wICBFUE9DIE1pbGxpc2Vjb25kc1xuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2Vzc1RpbWVycyh0aW1lc3RhbXApIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvY2VzcyBhbnkgZ2FtZSBjYWxjdWxhdGlvbnMsIGNhc2NhZGVzIGRvd24gdG8gdGhlXG4gICAgICogV29ybGQgb2JqZWN0IGFuZCBwYXNzZXMgb2ZmIGFueSBlbnRpdHkgYmFzZWQgY2FsY3MgdG8gdGhlcmUuXG4gICAgICogVGhlbiB0cmlnZ2VyIG9mIGFsbCByZW5kZXJpbmcgZm9yIHRoZSB3b3JsZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtET01IaWdoUmVzVGltZVN0YW1wfSAgdGltZXN0YW1wICBFUE9DIG1pbGxpc2Vjb25kc1xuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2Vzcyh0aW1lc3RhbXApIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgLy8gU2hvcnQgY2lyY3V0LCB0aGVzZSBNVVNUIGV4aXN0XG4gICAgICAgIGlmICh0aGlzLmNhbnZhcyA9PSBudWxsIHx8IHRoaXMuY29udGV4dCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBQcm9jZXNzIGFueSB0aW1lcnNcbiAgICAgICAgdGhpcy5wcm9jZXNzVGltZXJzKHRpbWVzdGFtcCk7XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIHNlY29uZHMgcGFzc2VkIHNpbmNlIHRoZSBsYXN0IGZyYW1lXG4gICAgICAgIGNvbnN0IGR0ID0gdGltZXN0YW1wIC0gdGhpcy5vbGRUaW1lc3RhbXA7XG4gICAgICAgIC8vIFVwZGF0ZSB0aW1lc3RhbXAgZm9yIG5leHQgcHJvY2VzcyBmcmFtZVxuICAgICAgICB0aGlzLm9sZFRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICAgICAgLy8gVHJpZ2dlciBXb3JsZCBjYWxjc1xuICAgICAgICAvLyBUT0RPOiBhc3luYz8gUGVyZm9ybWFuY2UgaW1wcm92bWVudCBhdCBhIGxhdGVyIGRhdGUuXG4gICAgICAgIChfYSA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByb2Nlc3MoZHQsIHRpbWVzdGFtcCk7XG4gICAgICAgIC8vIFJlbmRlciB0aGluZ3NcbiAgICAgICAgKF9iID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucmVuZGVyKHRoaXMuY2FudmFzLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDb25zdGFudHMgPSB7XG4gICAgUEFMTEVUVEVfU0laRTogNjAsXG4gICAgVE9PTF9TUEFDSU5HOiAyMCxcbiAgICBDQU5WQVNfU0laRToge1xuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG4gICAgfSxcbiAgICBDT0xPUlM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcjogMjU1LFxuICAgICAgICAgICAgZzogMCxcbiAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICBhOiAxLjBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcjogMCxcbiAgICAgICAgICAgIGc6IDE5MixcbiAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICBhOiAxLjBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcjogMCxcbiAgICAgICAgICAgIGc6IDAsXG4gICAgICAgICAgICBiOiAyNTUsXG4gICAgICAgICAgICBhOiAxLjBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcjogMjU1LFxuICAgICAgICAgICAgZzogMjU1LFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGE6IDEuMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICByOiAyNTUsXG4gICAgICAgICAgICBnOiAxMjgsXG4gICAgICAgICAgICBiOiAwLFxuICAgICAgICAgICAgYTogMS4wXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgICBnOiAwLFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGE6IDEuMFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgQ0FOVkFTX1RBUkdFVDogXCJkcmF3aW5nLWNhbnZhc1wiXG59O1xuIiwiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4vdXRpbC9jb2xvclwiO1xuLyoqXG4gKiBNYWluIHdvcmxkIGNsYXNzLCBjb25zdHJ1Y3RzIGV2ZXJ5dHJoaW5nIGFib3V0IHRoZSBnYW1lIHdvcmxkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdpbmcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIGRyYXduIGVudGl0aWVzLCB0aGVzZSB3aWxsIGFsbCBnZXRcbiAgICAgICAgICogcHJvY2Vzc2VkIGFuZCByZW5kZXJlZCB3aGVuIHRoZSBuZWVkIHRvIGJlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIgIHtNYXA8bnVtYmVyLCBFbnRpdHk+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhlYWRzIHVwIGRpc3BsYXkgKEdVSSlcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7SHVkfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5odWQgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRW50aXR5IGluY3JlbWVudGFsIG51bWJlciwgdXNlZCB0byB0cmFjayB1bmlxdWUgbnVtZXJpY2FsXG4gICAgICAgICAqIGlkIG9mIGFsbCBlbnRpdGllcyBsb2FkZWQgb250byB0aGUgY2FudmFzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZW50aXR5X2lkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhY3RpdmUgZW50aXR5XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFjdGl2ZV9lbnRpdHkgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdWxkIHdlIGRyYXcgdGhlIHRhcmdldHM/XG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRyYXdfdGFyZ2V0ID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRhcmdldCBjdXJyZW50IGxvY2F0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge1ZlYzIuVmVjdG9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3VycmVudCBwZW5cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7UGVufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wZW4gPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogW2Rlc2NyaXB0aW9uXVxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhlbHBlciB0byBjYWxjdWxhdGUgRlBTIGFuZCBmcmFtZXJhdGVzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGltZVRvRHJhdyA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIb2xkZXIgZm9yIGRlbHRhdGltZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmR0ID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXZpb3VzIGZyYW1lIHRpbWVzdGFtcFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtET01IaWdoUmVzVGltZVN0YW1wfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbGRUaW1lc3RhbXAgPSAwLjA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGcmFtZXMgcGVyIHNlY29uZCBob2xkZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mcHMgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdyBkZWJ1Zz9cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvd19kZWJ1ZyA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZ2FtZSBFbnRpdHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBpZCAgRW50aXRpIG51bWVyaWNhbCBJRFxuICAgICAqXG4gICAgICogQHJldHVybiAge0VudGl0eX1cbiAgICAgKi9cbiAgICBnZXRFbnRpdHkoaWQpIHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy5lbnRpdGllcy5nZXQoaWQpO1xuICAgICAgICBpZiAoZW50aXR5KVxuICAgICAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZW50aXR5IHRvIHRoZSBnYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7RW50aXR5fSAgZW50aXR5ICBFbnRpdHkgdG8gYWRkIHRvIHRoZSBnYW1ld29ybGRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGFkZEVudGl0eShlbnRpdHkpIHtcbiAgICAgICAgZW50aXR5LmlkID0gdGhpcy5lbnRpdHlfaWQ7XG4gICAgICAgIGVudGl0eS5kcmF3aW5nID0gdGhpcztcbiAgICAgICAgdGhpcy5lbnRpdGllcy5zZXQodGhpcy5lbnRpdHlfaWQsIGVudGl0eSk7XG4gICAgICAgIHRoaXMuZW50aXR5X2lkICs9IDE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgcGVuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7UGVufSAgcGVuICBTZXQncyB0aGUgYWN0aXZlIHBlbiB0byBQZW5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHNldFBlbihwZW4pIHtcbiAgICAgICAgdGhpcy5wZW4gPSBwZW47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVuc2V0J3MgdGhlIGN1cnJlbnQgdGFyZ2V0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICB1bnNldFRhcmdldCgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHRhcmdldCBwb3NpdGlvblxuICAgICAqXG4gICAgICogQHZhciB7VmVjMi5WZWN0b3J9IG1vdXNlX3BvcyAgIFRhcmdldCBwb3NpdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXRUYXJnZXRQb3NpdGlvbihtb3VzZV9wb3MpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBtb3VzZV9wb3M7XG4gICAgICAgIGlmICh0aGlzLnBlbikge1xuICAgICAgICAgICAgdGhpcy5wZW4uc2V0TG9jYXRpb24obW91c2VfcG9zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gZHJhdyB0aGUgdGFyZ2V0c1xuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyBkcmF3aW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXdUYXJnZXQoY29udGV4dCkge1xuICAgICAgICBpZiAodGhpcy5wZW4gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wZW4uZHJhd1RhcmdldChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gY291bnQgb2YgZW50aXRlcyBieSB0eXBlLCBpZiBubyB0eXBlIHNwZWNpZmllZCxcbiAgICAgKiB0aGVuIHJldHVuciBjb3VudCBvZiBhbGwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgdHlwZSAgRW50aXR5IFR5cGV8TmFtZSBbb3B0aW9uYWxdXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7bnVtYmVyfSAgICAgICAgTnVtYmVyIG9mIGVudGl0aWVzXG4gICAgICovXG4gICAgY291bnRFbnRpdGllcyh0eXBlKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGlmICghdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVudGl0aWVzLnNpemU7XG4gICAgICAgIGZvciAobGV0IFtrZXksIGVudGl0eV0gb2YgdGhpcy5lbnRpdGllcykge1xuICAgICAgICAgICAgaWYgKGVudGl0eS5uYW1lID09IHR5cGUgJiYgZW50aXR5LnJlbW92ZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYW4gZW50aXR5IGZyb210IGhlIGdhbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBpZCAgTnVtZWJyaWNhbCBJRCBvZiB0aGUgZW50aXR5XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVFbnRpdHkoaWQpIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5kZWxldGUoaWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEcmF3IHRoZSBkZWJ1Z2dpbmcgcGFuZWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBDYW52YXMgcmVuZGVyaW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXdEZWJ1Zyhjb250ZXh0KSB7XG4gICAgICAgIC8vIERyYXcgbnVtYmVyIHRvIHRoZSBzY3JlZW5cbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2RkZGRkZDU1JztcbiAgICAgICAgY29udGV4dC5maWxsUmVjdChDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGggLSA3NSwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodCAtIDEwMCwgNzUsIDEwMCk7XG4gICAgICAgIGNvbnRleHQuZm9udCA9ICcxMXB4IEFyaWFsJztcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KFwiRlBTOiBcIiArIHRoaXMuZnBzLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGggLSA3MCwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodCAtIDg1KTtcbiAgICAgICAgY29udGV4dC5maWxsVGV4dChcIkVOVDogXCIgKyB0aGlzLmVudGl0aWVzLnNpemUsIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCAtIDcwLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0IC0gNzApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEcmF3IHRoZSBIVUQgZ3VpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIHJlbmRlcmluZyBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBkcmF3R3VpKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmh1ZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5odWQucmVuZGVyKGNvbnRleHQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGFjdGl2ZSBjb2xvclxuICAgICAqXG4gICAgICogQHJldHVybiAge0NvbG9yfSAgIFRoZSBzZWxlY3RlZCBjb2xvclxuICAgICAqL1xuICAgIGdldENvbG9yKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHBhbGxldHRlID0gKF9hID0gdGhpcy5odWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRCeU5hbWUoXCJwYWxsZXR0ZVwiKTtcbiAgICAgICAgaWYgKHBhbGxldHRlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFsbGV0dGUuZ2V0Q29sb3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKDAsIDAsIDApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIGFsbCB0aGUgcmVuZGVyaW5nIGZvciB0aGUgd29ybGRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtIVE1MQ2FudmFzRWxlbWVudH0gICAgICAgICBjYW52YXMgICBDYW52YXNcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIGRyYXdpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcmVuZGVyKGNhbnZhcywgY29udGV4dCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAvLyBDbGVhciB0aGUgc2NyZWVuIGV2ZXJ5IGZyYW1lXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIC8vIFJlbmRlciBlYWNoIG9nIHRoZSBlbnRpdGl0ZXMuIChEcmF3aW5ncylcbiAgICAgICAgZm9yIChsZXQgW2tleSwgZW50aXR5XSBvZiB0aGlzLmVudGl0aWVzKSB7XG4gICAgICAgICAgICBlbnRpdHkucmVuZGVyKGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERyYXcgYW55IHBlbiBoZWxwZXJzXG4gICAgICAgIGlmICgoX2EgPSB0aGlzLnBlbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFjdGl2ZV9lbnRpdHkpIHtcbiAgICAgICAgICAgIHRoaXMucGVuLmFjdGl2ZV9lbnRpdHkuZHJhdyhjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICAvL1xuICAgICAgICBpZiAoKF9iID0gdGhpcy5wZW4pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pc19kcmF3aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnBlbi5kcmF3KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRyYXcgdGFyZ2V0IGlmIGFueVxuICAgICAgICBpZiAodGhpcy5kcmF3X3RhcmdldClcbiAgICAgICAgICAgIHRoaXMuZHJhd1RhcmdldChjb250ZXh0KTtcbiAgICAgICAgaWYgKHRoaXMuc2hvd19kZWJ1ZylcbiAgICAgICAgICAgIHRoaXMuZHJhd0RlYnVnKGNvbnRleHQpO1xuICAgICAgICB0aGlzLmRyYXdHdWkoY29udGV4dCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdhcmJhZ2UgY2xlYW4gdXAsIHJlbW92ZXMgYW55IGVudGl0aWVzIHRoYXQgYXJlIHNjaGVkdWxlIGZvciByZW1vdmFsXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVFbnRpdGllcygpIHtcbiAgICAgICAgY29uc3QgaWRzID0gW107XG4gICAgICAgIGZvciAobGV0IFtrZXksIGVudGl0eV0gb2YgdGhpcy5lbnRpdGllcykge1xuICAgICAgICAgICAgaWYgKGVudGl0eS5yZW1vdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0aWVzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERvIGFsbCB3b3JsZCBjYWxjdWxhdGlvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICAgICAgICAgICAgICAgZ2FtZVRpbWUgICBEZWx0YVRpbWVcbiAgICAgKiBAcGFyYW0gICB7RE9NSGlnaFJlc1RpbWVTdGFtcH0gIHRpbWVzdGFtcCAgQ3VycmVudCB0aW1lXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm9jZXNzKHRpbWUsIHRpbWVzdGFtcCkge1xuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBzZWNvbmRzIHBhc3NlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZVxuICAgICAgICB0aGlzLnRpbWVUb0RyYXcgPSB0aW1lIC8gMTAwMDtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIGZwc1xuICAgICAgICB0aGlzLmZwcyA9IE1hdGgucm91bmQoMSAvIHRoaXMudGltZVRvRHJhdyk7XG4gICAgICAgIHRoaXMucmVtb3ZlRW50aXRpZXMoKTtcbiAgICAgICAgZm9yIChsZXQgW2tleSwgZW50aXR5XSBvZiB0aGlzLmVudGl0aWVzKSB7XG4gICAgICAgICAgICBlbnRpdHkucHJvY2Vzcyh0aW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBbGxvdyBodWQgdG8gcHJvY2VzcyB0aGluZ3NcbiAgICAgICAgaWYgKHRoaXMuaHVkKVxuICAgICAgICAgICAgdGhpcy5odWQucHJvY2Vzcyh0aW1lKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSAnLi4vdXRpbC9jb2xvcic7XG4vKipcbiAqIENvcmUgZW50aXR5IGNsYXNzLCBhbGwgb2JqZWN0cyB3aXRoaW4gdGhlIGdhbWUgZmllbGQgYXJlIGVudGl0aWVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRpdHkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBuYW1lICBuYW1lIG9yIHR5cGUgb2YgZW50aXR5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGltZSB0aGUgZW50aXR5IHdhcyBjcmVhdGVkLCBtaWxsaXNlY29uZHMgc2luY2UgRVBPQ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pZCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaW1lIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQsIG1pbGxpc2Vjb25kcyBzaW5jZSBFUE9DXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNyZWF0ZWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29sb3VyIG9mIHRoZSBwZW5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiAge0NvbG9yfSAgQ29sb3VyIG9iamVjdCB0aGF0IHRoZSBlbnRpdHkgd2lsbCBiZSBkcmF3biBhcy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29sb3IgPSBuZXcgQ29sb3IoMCwgMCwgMCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaXplIG9mIHRoZSBwZW5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIG5hbWUgZm9yIHRoZSBlbnRpdHksIGFrYSB0eXBlLiBDYW4gYmUgdXNlZCB0byBxdWVyeSBmb3IgZW5laXRpZXMgb2YgXCJuYW1lXCJcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9ICcnO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgc2V0IHRvIHRydWUgdGhlIGVudGl0eSB3aWxsIGJlIGRpc3Bvc2VkIG9mIG5leHQgdGljay5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVtb3ZlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWYgdG8gdGhlIGRyYXdpbmcgY2FudnNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZHJhd2luZyA9IG51bGw7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IERhdGUubm93KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgQ29sb3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDb2xvcn0gIGNvbG9yICBDb2xvciB0byBzZXQgb24gdGhlIGVudGl0eVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGVudGl0eSwgYnkgZGVmYXVsdCBhbGwgZW50aXRpZXMgYXJlIHRyZWF0ZWQgYXMgY2lyY2xlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBDYW52YXMgZHJhd2luZyBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICByZW5kZXIoY29udGV4dCkge1xuICAgICAgICB0aGlzLmRyYXcoY29udGV4dCk7XG4gICAgfVxuICAgIHByb2Nlc3MoZ2FtZXRpbWUpIHtcbiAgICB9XG59XG4iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuL2VudGl0eVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJlZWhhbmQgZXh0ZW5kcyBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIGNvbG9yKSB7XG4gICAgICAgIHN1cGVyKCdmcmVlaGFuZCcpO1xuICAgICAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtkcmF3IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIFtjb250ZXh0IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZHJhdyhjb250ZXh0KSB7XG4gICAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGggPCAxKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMuc2l6ZTtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3IuZ2V0SGV4KGZhbHNlKTtcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yLmdldEhleChmYWxzZSk7XG4gICAgICAgIGNvbnRleHQubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICAgICAgY29udGV4dC5tb3ZlVG8odGhpcy5wb2ludHNbMF0ueCwgdGhpcy5wb2ludHNbMF0ueSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHRoaXMucG9pbnRzW2ldLngsIHRoaXMucG9pbnRzW2ldLnkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIC8vIGZvciAobGV0IHBvaW50IG9mIHRoaXMucG9pbnRzKSB7XG4gICAgICAgIC8vICAgZHJhd0NpcmNsZShjb250ZXh0LCBwb2ludCwgdGhpcy5jb2xvciwgdGhpcy5zaXplKTtcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBbdXBkYXRlIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICAge1ZlY3Rvcn0gIGxvY2F0aW9uICBbbG9jYXRpb24gZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgdXBkYXRlKGxvY2F0aW9uKSB7XG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gobG9jYXRpb24pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEh1ZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcnJheSBvZiBpdGVtcyB0byByZW5kZXIgZm9yIHRoZSBIdWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHdlIHdhbnQgdGhlIEhVRCB0byBiZSB2aXNpYmxlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogUG9zaXRpb24gb2YgdGhlIG1vdXNlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmN1cnNvcl9wb3NpdGlvbiA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBmb3IgdGhlIGNhbnZhcy5vbk1vdXNlTW92ZSBldmVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jbGlja19ldmVudCA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGwgYWxsIHRoZSByZW5kZXIgZnVuY3Rpb25zIG9mIGVhY2ggSHVkSXRlbVxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyByZW5kZXJpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRleHQpIHtcbiAgICAgICAgLy8gU2hvcnQgY2lyY3VpdCBpZiBub3QgdmlzaWJsZVxuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gT3RoZXJ3aXNlIHJlbmRlciBhbGwgdGhlIEhVRCBpdGVtcy5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zW2ldLnJlbmRlcihjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgY3Vyc29yIGFuZCBodWQgaW50ZXJzZWN0c1xuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIGRlbHRhICBbZGVsdGEgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcHJvY2VzcyhkZWx0YSkge1xuICAgICAgICAvL2ZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBjb25zdCBpdGVtX2JveDogQXJyYXk8VmVjdG9yPiA9IHRoaXMuaXRlbXNbaV0uZ2V0Qm91bmRzKCk7XG4gICAgICAgIC8vIGNvbnN0IFtzdGFydCwgZW5kXSA9IGl0ZW1fYm94O1xuICAgICAgICAvLyBpZiAoIXRoaXMuY3Vyc29yX3Bvc2l0aW9uKSBjb250aW51ZTtcbiAgICAgICAgLy8gaWYgKHRoaXMuY3Vyc29yX3Bvc2l0aW9uLnggPiBzdGFydC54ICYmIHRoaXMuY3Vyc29yX3Bvc2l0aW9uLnggPCBlbmQueCAmJiB0aGlzLmN1cnNvcl9wb3NpdGlvbi55ID4gc3RhcnQueSAmJiB0aGlzLmN1cnNvcl9wb3NpdGlvbi55IDwgZW5kLnkgJiYgdGhpcy5pdGVtc1tpXS5ob3ZlcmVkID09PSBmYWxzZSkge1xuICAgICAgICAvLyAgIHRoaXMuaXRlbXNbaV0uaGFuZGxlTW91c2VFbnRlcih0aGlzLmN1cnNvcl9wb3NpdGlvbik7XG4gICAgICAgIC8vICAgdGhpcy5jbGlja19ldmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke0NvbnN0YW50cy5DQU5WQVNfVEFSR0VUfWApPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMuY3Vyc29yX3Bvc2l0aW9uKSB7XG4gICAgICAgIC8vICAgICAgIHRoaXMuaXRlbXNbaV0uaGFuZGxlTW91c2VDbGljayh0aGlzLmN1cnNvcl9wb3NpdGlvbik7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gICBpZiAoKHRoaXMuY3Vyc29yX3Bvc2l0aW9uLnggPCBzdGFydC54IHx8IHRoaXMuY3Vyc29yX3Bvc2l0aW9uLnggPiBlbmQueCB8fCB0aGlzLmN1cnNvcl9wb3NpdGlvbi55IDwgc3RhcnQueSB8fCB0aGlzLmN1cnNvcl9wb3NpdGlvbi55ID4gZW5kLnkpICYmIHRoaXMuaXRlbXNbaV0uaG92ZXJlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyAgICAgdGhpcy5pdGVtc1tpXS5oYW5kbGVNb3VzZUxlYXZlKHRoaXMuY3Vyc29yX3Bvc2l0aW9uKTtcbiAgICAgICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAjJHtDb25zdGFudHMuQ0FOVkFTX1RBUkdFVH1gKT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrX2V2ZW50KVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGQgYW4gaXRlbSB0byB0aGUgSFVEXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7SHVkSXRlbX0gIGl0ZW0gIEl0ZW0gdGhhdCBpbmhlcml0cyBmcm9tIHRoZSBIdXRJdGVtIGFic3RyYWN0IGNsYXNzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBhZGRJdGVtKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSByZWZlcmVuY2UgdG8gYSBodWQgaXRlbSBieSBuYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgIG5hbWUgIHRoZSBuYW1lIG9mIHRoZSBodWQgaXRlbSB0byByZXRyaWV2ZVxuICAgICAqXG4gICAgICogQHJldHVybiAge0h1ZEl0ZW18bnVsbH0gICB0aGUgaHVkIGl0ZW0gaWYgZm91bmQgb3RoZXJ3aXNlIG51bGwuXG4gICAgICovXG4gICAgZ2V0QnlOYW1lKG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc1tpXS5uYW1lID09PSBuYW1lKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFja3MgdGhlIGN1cnNvciBwb3NpdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtICAge1ZlY3Rvcn0gIHBvc2l0aW9uICBQb3NpdGlvbiBvZiB0aGUgbW91c2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXRDdXJzb3JQb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgICB0aGlzLmN1cnNvcl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEh1ZEl0ZW0ge1xuICAgIC8qKlxuICAgICAqIEh1ZCBJdGVtcyBuZWVkIGEgbmFtZVxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIG5hbWUgIFRoZSBuYW1lIGZvciB0aGUgaXRlbVxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGlzIGh1ZCBpdGVtIGhhcyBhIG1vdXNlIG92ZXIgaXQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFtkZXNjcmlwdGlvbl1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYm91bmRpbmdfYm94ID0gW107XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHdvIHZlY3RvcnMsIHRvcCBsXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7QXJyYXk8VmVjdG9yPn1cbiAgICAgKi9cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvdW5kaW5nX2JveDtcbiAgICB9XG4gICAgO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHdvIHZlY3RvcnMsIHRvcCBsXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7QXJyYXk8VmVjdG9yPn1cbiAgICAgKi9cbiAgICBzZXRCb3VuZHMoc3RhcnQsIGVuZCkge1xuICAgICAgICB0aGlzLmJvdW5kaW5nX2JveCA9IFtcbiAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgZW5kXG4gICAgICAgIF07XG4gICAgfVxuICAgIDtcbn1cbiIsImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiLi4vdXRpbC9jb2xvclwiO1xuaW1wb3J0IEh1ZEl0ZW0gZnJvbSBcIi4vaHVkX2l0ZW1cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbGV0dGUgZXh0ZW5kcyBIdWRJdGVtIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xuICAgICAgICBzdXBlcihcInBhbGxldHRlXCIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdCBvZiBhdmFpbGFibGUgY29sb3JzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbG9ycyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb2xvclxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZWxlY3RlZF9jb2xvciA9IG5ldyBDb2xvcigwLCAwLCAwLCAwLjUpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29sb3IgYm91bmRzXG4gICAgICAgICAqL1xuICAgICAgICAvLyBjb2xvcl9ib3VuZHM6IEFycmF5PHtcbiAgICAgICAgLy8gICBwb3NpdGlvbjogVmVjdG9yIHwgbnVsbCxcbiAgICAgICAgLy8gICBzaXplOiBudW1iZXIsXG4gICAgICAgIC8vICAgY29sb3I6IENvbG9yXG4gICAgICAgIC8vIH0+ID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQb3NpdGlvbiBvZiBQYWxsZXR0ZVxuICAgICAgICAgKi9cbiAgICAgICAgLy9wb3NpdGlvbjogVmVjdG9yIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbG9yIGluZGV4XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNlbGVjdGVkX2NvbG9yX2luZGV4ID0gMTtcbiAgICAgICAgLy90aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIGZvciAodmFyIGNvbG9yIG9mIENvbnN0YW50cy5DT0xPUlMpIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3JzLnB1c2gobmV3IENvbG9yKGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIsIGNvbG9yLmEpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ1aWxkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHRoZSBVSVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWxldHRlJyk7XG4gICAgICAgIGlmICghdGFyZ2V0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0YXJnZXQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5jb2xvcnNbaV0uZ2V0SGV4KCk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImNvbG9yXCIpO1xuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMuc2VsZWN0ZWRfY29sb3JfaW5kZXgpXG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29sb3JJbmRleChpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGFyZ2V0ID09PSBudWxsIHx8IHRhcmdldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFyZ2V0LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBkcmF3aW5nIGNvbG9yXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Q29sb3J9ICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRDb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRfY29sb3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGluZGV4IG9mIHRoZSBzZWxlY3RlZCBjb2xvdXIgYW5kXG4gICAgICogdXBkYXRlcyB0aGUgc2VsZWN0ZWQgY29sb3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBpbmRleFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0Q29sb3JJbmRleChpbmRleCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkX2NvbG9yX2luZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRfY29sb3IgPSB0aGlzLmNvbG9yc1t0aGlzLnNlbGVjdGVkX2NvbG9yX2luZGV4XTtcbiAgICAgICAgdGhpcy5idWlsZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBwYWxsZXR0ZVxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyAyRCBEcmF3aW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbmRlcihjb250ZXh0KSB7XG4gICAgICAgIC8vIGlmICghdGhpcy5wb3NpdGlvbikgcmV0dXJuO1xuICAgICAgICAvLyBsZXQgYWxwaGEgPSAwLjI7XG4gICAgICAgIC8vIGlmICh0aGlzLmhvdmVyZWQpIGFscGhhID0gMS4wO1xuICAgICAgICAvLyBjb25zdCBvZmZzZXQgPSAodGhpcy5jb2xvcnMubGVuZ3RoIC8gMikgKiAoQ29uc3RhbnRzLlBBTExFVFRFX1NJWkUgKyBDb25zdGFudHMuVE9PTF9TUEFDSU5HKSAtIChDb25zdGFudHMuUEFMTEVUVEVfU0laRSAvIDIgKyBDb25zdGFudHMuVE9PTF9TUEFDSU5HKTtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IG5ldyBWZWN0b3IodGhpcy5wb3NpdGlvbj8ueCAtIG9mZnNldCArIChpICogKENvbnN0YW50cy5QQUxMRVRURV9TSVpFICsgQ29uc3RhbnRzLlRPT0xfU1BBQ0lORykpLCB0aGlzLnBvc2l0aW9uPy55KTtcbiAgICAgICAgLy8gICBpZiAoaSA9PT0gdGhpcy5zZWxlY3RlZF9jb2xvcl9pbmRleCkge1xuICAgICAgICAvLyAgICAgZHJhd0NpcmNsZShjb250ZXh0LCBjdXJyZW50UG9zaXRpb24sIG5ldyBDb2xvcigyMDQsIDIwNCwgMjU1LCBhbHBoYSksIENvbnN0YW50cy5QQUxMRVRURV9TSVpFICsgMjUpOyAgXG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvcnNbaV0uZ2V0UmdiKCk7XG4gICAgICAgIC8vICAgdGhpcy5jb2xvcl9ib3VuZHNbaV0ucG9zaXRpb24gPWN1cnJlbnRQb3NpdGlvbjtcbiAgICAgICAgLy8gICBkcmF3Q2lyY2xlKGNvbnRleHQsIGN1cnJlbnRQb3NpdGlvbiwgbmV3IENvbG9yKGNvbG9yWzBdLCBjb2xvclsxXSwgY29sb3JbMl0sIGFscGhhKSwgQ29uc3RhbnRzLlBBTExFVFRFX1NJWkUpO1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoYXQgdG8gZG8gd2hlbiB0aGUgbW91c2UgY3Vyc29yIGVudGVycyB0aGUgcGFsbGV0dGUgZWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtICAge1ZlY3Rvcn0gIHBvc2l0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBoYW5kbGVNb3VzZUVudGVyKHBvc2l0aW9uKSB7XG4gICAgICAgIC8vIHRoaXMuaG92ZXJlZCA9IHRydWU7XG4gICAgICAgIC8vIGNvbnN0IGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDb25zdGFudHMuQ0FOVkFTX1RBUkdFVCk7XG4gICAgICAgIC8vIGlmIChmKSBmLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBIb3cgdG8gaGFuZGxlIHdoZW4gdGhlIG1vdXNlIGN1cnNvciBsZWF2ZXMgdGhlIFVJXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7VmVjdG9yfSAgcG9zaXRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGhhbmRsZU1vdXNlTGVhdmUocG9zaXRpb24pIHtcbiAgICAgICAgLy8gdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgIC8vIGNvbnN0IGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDb25zdGFudHMuQ0FOVkFTX1RBUkdFVCk7XG4gICAgICAgIC8vIGlmIChmKSBmLnN0eWxlLmN1cnNvciA9IFwiYXV0b1wiO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBIb3cgdG8gZGVhbCB3aXRoIHRoZSBjbGljayBuaXNpZGUgdGhlIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3J9ICBwb3NpdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgaGFuZGxlTW91c2VDbGljayhwb3NpdGlvbikge1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sb3JfYm91bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgY29uc3QgcG9zID0gdGhpcy5jb2xvcl9ib3VuZHNbaV0ucG9zaXRpb247XG4gICAgICAgIC8vICAgaWYgKCFwb3MpIGNvbnRpbnVlO1xuICAgICAgICAvLyAgIGlmIChwb3M/LmRpc3RhbmNlKHBvc2l0aW9uKSA8PSB0aGlzLmNvbG9yX2JvdW5kc1tpXS5zaXplKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnNldENvbG9ySW5kZXgoaSk7XG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxufVxuIiwiaW1wb3J0IEZyZWVoYW5kIGZyb20gXCIuLi9lbnRpdGllcy9mcmVlaGFuZFwiO1xuaW1wb3J0IFBlbiBmcm9tIFwiLi9wZW5cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlciBleHRlbmRzIFBlbiB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGZvciBtYXJrZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtNYXJrZXJ9ICBzZWxmXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZHJhd2luZykge1xuICAgICAgICBzdXBlcihkcmF3aW5nLCAnbWFya2VyJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtkcmF3IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIFtjb250ZXh0IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZHJhdyhjb250ZXh0KSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZV9lbnRpdHkpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX2VudGl0eS51cGRhdGUodGhpcy5sb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0RW50aXR5KCkge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuZHJhd2luZy5nZXRDb2xvcigpO1xuICAgICAgICByZXR1cm4gbmV3IEZyZWVoYW5kKHRoaXMuc2l6ZSwgY29sb3IpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xuaW1wb3J0IGRyYXdDaXJjbGUgZnJvbSBcIi4uL3V0aWwvY2lyY2xlXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4uL3V0aWwvY29sb3JcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlbiB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIG5hbWUgIG5hbWUgb3IgdHlwZSBvZiBlbnRpdHlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkcmF3aW5nLCBuYW1lKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOYW1lIG9mIHRoZSBwZW5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9ICcnO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2lkdGggb2YgdGhlIHBlblxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zaXplID0gMjA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUYXJnZXQgQ29sb3JcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGFyZ2V0X2NvbG9yID0gbmV3IENvbG9yKDEyOCwgMTI4LCAyNTUsIDAuMik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMb2NhdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG5ldyBWZWN0b3IoMCwgMCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyB0aGUgcGVuIGRvd24gKGRyYXdpbmcpXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlzX2RyYXdpbmcgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBlbnRpdHkgYmVpbmcgZHJhd25cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWN0aXZlX2VudGl0eSA9IG51bGw7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZHJhd2luZyA9IGRyYXdpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCdzIHRoZSBsb2NhdGlvbiBvZiB0aGUgcGVuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7VmVjdG9yfSAgbG9jYXRpb24gIExvY2F0aW9uIG9mIHRoZSBwZW5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICAgICAgICAgICAgdm9pZFxuICAgICAqL1xuICAgIHNldExvY2F0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RhcnQgZHJhd2luZywgY3JlYXRlIHRoZSBlbnRpdHkgZXRjLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc3RhcnREcmF3aW5nKCkge1xuICAgICAgICB0aGlzLnNldElzRHJhd2luZyh0cnVlKTtcbiAgICAgICAgdGhpcy5hY3RpdmVfZW50aXR5ID0gdGhpcy5nZXRFbnRpdHkoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgc2l6ZSBvZiB0aGUgcG9pbnRlciBicnVzaFxuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIHNpemUgIFtzaXplIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgc2V0U2l6ZShzaXplKSB7XG4gICAgICAgIGlmIChzaXplID4gMClcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IE1hdGgubWluKHNpemUsIDEwMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0b3AgZHJhd2luZywgYXBwbHkgdGhlIGVudGl0eVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgc3RvcERyYXdpbmcoKSB7XG4gICAgICAgIHRoaXMuc2V0SXNEcmF3aW5nKGZhbHNlKTtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlX2VudGl0eSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3aW5nLmFkZEVudGl0eSh0aGlzLmFjdGl2ZV9lbnRpdHkpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVfZW50aXR5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBkcmF3aW5nIHN0YXRlIG9mIHRoZSBQZW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtib29sZWFufSAgc3RhdGUgIElzIHRoZSBwZW4gZHJhd2luZ1xuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gICAgICAgICAgdm9pZFxuICAgICAqL1xuICAgIHNldElzRHJhd2luZyhzdGF0ZSkge1xuICAgICAgICB0aGlzLmlzX2RyYXdpbmcgPSBzdGF0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHJhdyB0aGUgcGVuIHRhcmdldFxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyBkcmF3aW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRyYXdUYXJnZXQoY29udGV4dCkge1xuICAgICAgICBkcmF3Q2lyY2xlKGNvbnRleHQsIHRoaXMubG9jYXRpb24sIHRoaXMudGFyZ2V0X2NvbG9yLCB0aGlzLnNpemUpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogRHJhdyBhIGNpcmNsZSBvbiB0aGUgY29udGV4dCBnaXZlblxuICpcbiAqIEB2YXIge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgICBDYW52YXMgcmVuZGVyaW5nIGNvbnRleHQgdG8gZHJhdyB3aXRoXG4gKiBAdmFyIHtWZWMyLlZlY3Rvcn0gICAgICAgICAgICAgICBsb2NhdGlvbiAgV2hlcmUgdG8gZHJhdyB0aGUgY2lyY2xlXG4gKiBAdmFyIHtDb2xvcn0gICAgICAgICAgICAgICAgICAgICBjb2xvciAgICAgQ29sb3IgdG8gZHJhdyB3aXRoXG4gKiBAdmFyIHtudW1iZXJ9ICAgICAgICAgICAgICAgICAgICBzaXplICAgICAgRGlhbWV0ZXIgaW4gcGl4ZWxzXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYXdDaXJjbGUoY29udGV4dCwgbG9jYXRpb24sIGNvbG9yLCBzaXplKSB7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmFyYyhsb2NhdGlvbi54LCBsb2NhdGlvbi55LCBNYXRoLnJvdW5kKHNpemUgLyAyKSwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yLmdldFJnYlN0cmluZygpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3IuZ2V0UmdiU3RyaW5nKCk7XG4gICAgY29udGV4dC5zdHJva2UoKTtcbn1cbiIsIi8qKlxuICogQ29sb3VyIGhlbHBlciwgdXNlZnVsIGZvciBjb252ZXJ0aW5nIGJldHdlZW4gY29sb3VyIGZvcm1hdHMuXG4gKiBUaGlzIGlzIHByb2JhYmx5IG5vdCByZWFsbHkgbmVlZGVkIGZvciB0aGUgVFMvSlMgdmVyc2lvbiBidXQgaXNcbiAqIG1vcmUgb2YgYSBoYW5nb3ZlciBmcm9tIHRoZSBEYXJ0IHZlcnNpb24gb2YgdGhlIGdhbWUuIFdhcyBnb29kXG4gKiBsZWFybmluZyBjb252ZXJ0aW5nIGl0IHRvIGphdmFzY3JpcHQvdHlwZXNjcmlwdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3Ige1xuICAgIC8qKlxuICAgICAqIFtjb25zdHJ1Y3RvciBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICByICByZWQgWzAgLSAyNTVdXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIGcgIGdyZWVuIFswIC0gMjU1XVxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBiICBibHVlIFswIC0gMjU1XVxuICAgICAqIEBwYXJhbSAgIHtudW1iZXI/fSAgYSAgYWxwaGEgWzAuMCAtIDEuMF1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyLCBnLCBiLCBhKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiByZWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuciA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBncmVlblxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5nID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGJsdWVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYiA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhbHBoYVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hID0gMC4wO1xuICAgICAgICB0aGlzLnIgPSByO1xuICAgICAgICB0aGlzLmcgPSBnO1xuICAgICAgICB0aGlzLmIgPSBiO1xuICAgICAgICB0aGlzLmEgPSBhID8gYSA6IDEuMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBSR0IgdmFsdWVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7QXJyYXk8bnVtYmVyPn1cbiAgICAgKi9cbiAgICBnZXRSZ2IoKSB7XG4gICAgICAgIHJldHVybiBbdGhpcy5yLCB0aGlzLmcsIHRoaXMuYl07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgUkdCIHZhbHVlc1xuICAgICAqXG4gICAgICogQHJldHVybiAge0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgZ2V0UmdiU3RyaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5hKVxuICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7dGhpcy5yfSwgJHt0aGlzLmd9LCAke3RoaXMuYn0sICR7dGhpcy5hfSlgO1xuICAgICAgICByZXR1cm4gYHJnYmEoJHt0aGlzLnJ9LCAke3RoaXMuZ30sICR7dGhpcy5ifSlgO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYXJyYXkgb2YgSFNMIHZhbHVlc1xuICAgICAqXG4gICAgICogRnJvbTogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9jb252ZXJ0aW5nLWNvbG9yLXNwYWNlcy1pbi1qYXZhc2NyaXB0L1xuICAgICAqXG4gICAgICogQHJldHVybiAge0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgZ2V0SHNsKCkge1xuICAgICAgICAvLyBNYWtlIHIsIGcsIGFuZCBiIGZyYWN0aW9ucyBvZiAxXG4gICAgICAgIGNvbnN0IHIgPSB0aGlzLnIgLyAyNTU7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmcgLyAyNTU7XG4gICAgICAgIGNvbnN0IGIgPSB0aGlzLmIgLyAyNTU7XG4gICAgICAgIC8vIEZpbmQgZ3JlYXRlc3QgYW5kIHNtYWxsZXN0IGNoYW5uZWwgdmFsdWVzXG4gICAgICAgIGxldCBjbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgICAgIGxldCBjbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgICAgIGxldCBkZWx0YSA9IGNtYXggLSBjbWluO1xuICAgICAgICBsZXQgaCA9IDA7XG4gICAgICAgIGxldCBzID0gMDtcbiAgICAgICAgbGV0IGwgPSAwO1xuICAgICAgICAvLyBDYWxjdWxhdGUgaHVlXG4gICAgICAgIC8vIE5vIGRpZmZlcmVuY2VcbiAgICAgICAgaWYgKGRlbHRhID09IDApIHtcbiAgICAgICAgICAgIGggPSAwO1xuICAgICAgICAgICAgLy8gUmVkIGlzIG1heFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNtYXggPT0gcikge1xuICAgICAgICAgICAgaCA9ICgoZyAtIGIpIC8gZGVsdGEpICUgNjtcbiAgICAgICAgICAgIC8vIEdyZWVuIGlzIG1heFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNtYXggPT0gZykge1xuICAgICAgICAgICAgaCA9IChiIC0gcikgLyBkZWx0YSArIDI7XG4gICAgICAgICAgICAvLyBCbHVlIGlzIG1heFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaCA9IChyIC0gZykgLyBkZWx0YSArIDQ7XG4gICAgICAgIH1cbiAgICAgICAgaCA9IE1hdGgucm91bmQoaCAqIDYwKTtcbiAgICAgICAgLy8gTWFrZSBuZWdhdGl2ZSBodWVzIHBvc2l0aXZlIGJlaGluZCAzNjDCsFxuICAgICAgICBpZiAoaCA8IDApIHtcbiAgICAgICAgICAgIGggKz0gMzYwO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhbGN1bGF0ZSBsaWdodG5lc3NcbiAgICAgICAgbCA9IChjbWF4ICsgY21pbikgLyAyO1xuICAgICAgICAvLyBDYWxjdWxhdGUgc2F0dXJhdGlvblxuICAgICAgICBzID0gZGVsdGEgPT0gMCA/IDAgOiBkZWx0YSAvICgxIC0gTWF0aC5hYnMoMiAqIGwgLSAxKSk7XG4gICAgICAgIC8vIE11bHRpcGx5IGwgYW5kIHMgYnkgMTAwXG4gICAgICAgIHMgPSArKHMgKiAxMDApLnRvRml4ZWQoMSk7XG4gICAgICAgIGwgPSArKGwgKiAxMDApLnRvRml4ZWQoMSk7XG4gICAgICAgIHJldHVybiBbaCwgcywgbF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBIRVggdmFsdWUgb2YgY29sb3VyIChpbmxjdWRpbmcgYWxwaGEpXG4gICAgICpcbiAgICAgKiBGcm9tOiBodHRwczovL2Nzcy10cmlja3MuY29tL2NvbnZlcnRpbmctY29sb3Itc3BhY2VzLWluLWphdmFzY3JpcHQvXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldEhleCh3aXRoQWxwaGEgPSB0cnVlKSB7XG4gICAgICAgIGxldCByID0gdGhpcy5yLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgbGV0IGcgPSB0aGlzLmcudG9TdHJpbmcoMTYpO1xuICAgICAgICBsZXQgYiA9IHRoaXMuYi50b1N0cmluZygxNik7XG4gICAgICAgIGxldCBhID0gKHRoaXMuYSAqIDI1NSkudG9TdHJpbmcoMTYpO1xuICAgICAgICBpZiAoci5sZW5ndGggPT0gMSlcbiAgICAgICAgICAgIHIgPSBcIjBcIiArIHI7XG4gICAgICAgIGlmIChnLmxlbmd0aCA9PSAxKVxuICAgICAgICAgICAgZyA9IFwiMFwiICsgZztcbiAgICAgICAgaWYgKGIubGVuZ3RoID09IDEpXG4gICAgICAgICAgICBiID0gXCIwXCIgKyBiO1xuICAgICAgICBpZiAoYS5sZW5ndGggPT0gMSlcbiAgICAgICAgICAgIGEgPSBcIjBcIiArIGE7XG4gICAgICAgIGlmICghd2l0aEFscGhhKVxuICAgICAgICAgICAgcmV0dXJuIFwiI1wiICsgciArIGcgKyBiO1xuICAgICAgICByZXR1cm4gXCIjXCIgKyByICsgZyArIGIgKyBhO1xuICAgIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUaGVzZSB2YWx1ZXMgYXJlIHVzZWQgYnkgdGhlIGBBYnN0cmFjdFZlY3Rvci5yb3VuZGAgbWV0aG9kIHRvIGluY3JlYXNlXG4gKiBwZXJmb3JtYW5jZSB2cy4gdXNpbmcgIE51bWJlci50b0ZpeGVkLlxuICovXG52YXIgcHJlY2lzaW9uID0gW1xuICAgIDEsXG4gICAgMTAsXG4gICAgMTAwLFxuICAgIDEwMDAsXG4gICAgMTAwMDAsXG4gICAgMTAwMDAwLFxuICAgIDEwMDAwMDAsXG4gICAgMTAwMDAwMDAsXG4gICAgMTAwMDAwMDAwLFxuICAgIDEwMDAwMDAwMDAsXG4gICAgMTAwMDAwMDAwMDBcbl07XG4vKipcbiAqIFRoZSBjbGFzcyB0aGF0IGFsbCBvdGhlciB2ZWN0b3IgcmVwcmVzZW50YXRpb25zIGFyZSBkZXJpdmVkIGZyb20uXG4gKlxuICogQ29udGFpbnMgdGhlIGNvcmUgaW1wbGVtZW50YXRpb24gZm9yIGFsbCBtZXRob2RzIHRoYXQgd2lsbCBiZSBleHBvc2VkIGJ5XG4gKiB2ZWN0b3IgaW5zdGFuY2VzLlxuICpcbiAqIEV4YW1wbGUgb2YgY3JlYXRpbmcgYSBjdXN0b20gaW1wbGVtZW50YXRpb246XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IEFic3RyYWN0VmVjdG9yIH0gZnJvbSBcIi4vQWJzdHJhY3RWZWN0b3JcIlxuICpcbiAqIGV4cG9ydCBjbGFzcyBNeUN1c3RvbVZlY3RvciBleHRlbmRzIEFic3RyYWN0VmVjdG9yIHtcbiAqICBjb25zdHJ1Y3RvciAoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAqICAgIHN1cGVyKEN1c3RvbVZlY3RvclR5cGUpXG4gKiAgfVxuICogfVxuICogYGBgXG4gKi9cbnZhciBBYnN0cmFjdFZlY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBYnN0cmFjdFZlY3RvcihjdG9yKSB7XG4gICAgICAgIHRoaXMuY3RvciA9IGN0b3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCBib3RoIHggYW5kIHkgYXhpcyB2YWx1ZVxuICAgICAqIEBwYXJhbSB4ICAgTmV3IHggdmFsXG4gICAgICogQHBhcmFtIHkgICBOZXcgeSB2YWxcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuc2V0QXhlcyA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0dGVyIGZvciB4IHRoZSBheGlzIHZhbHVlXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLng7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgZm9yIHggYXhpcyB2YWx1ZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXR0ZXIgZm9yIHkgYXhpcyB2YWx1ZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy55O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0dGVyIGZvciB5IGF4aXMuXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnNldFkgPSBmdW5jdGlvbiAoeSkge1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgdmVjdG9yIGFzIGEgZm9ybWF0dGVkIHN0cmluZywgZS5nIFwiKDAsIDQpXCJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAocm91bmQpIHtcbiAgICAgICAgaWYgKHJvdW5kID09PSB2b2lkIDApIHsgcm91bmQgPSBmYWxzZTsgfVxuICAgICAgICBpZiAocm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIihcIiArIE1hdGgucm91bmQodGhpcy54KSArIFwiLCBcIiArIE1hdGgucm91bmQodGhpcy55KSArIFwiKVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIihcIiArIHRoaXMueCArIFwiLCBcIiArIHRoaXMueSArIFwiKVwiO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIEFycmF5IGNvbnRhaW5pbmcgdGhlIHZlY3RvciBheGVzLCBlLmcgWzAsIDRdXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIE9iamVjdCBjb250YWluaW5nIHRoZSB2ZWN0b3IgYXhlcywgZS5nIHsgeDogMCwgeTogNCB9XG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgeTogdGhpcy55XG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIHByb3ZpZGVkIHZlY3RvciB0byB0aGlzIG9uZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ICs9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0IHRoZSBwcm92aWRlZCB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIHByb3ZpZGVkIHZlY3RvciBlcXVhbCB0byB0aGlzIG9uZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHJldHVybiB2ZWMueCA9PT0gdGhpcy54ICYmIHZlYy55ID09PSB0aGlzLnk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm11bHRpcGx5QnlWZWN0b3IgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHRoaXMueCAqPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ICo9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubXVsViA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHlCeVZlY3Rvcih2ZWMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGl2aWRlIHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGl2aWRlQnlWZWN0b3IgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHRoaXMueCAvPSB2ZWMueDtcbiAgICAgICAgdGhpcy55IC89IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpdmlkZSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRpdlYgPSBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGVCeVZlY3Rvcih2KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCBudW1iZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubXVsdGlwbHlCeVNjYWxhciA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHRoaXMueCAqPSBuO1xuICAgICAgICB0aGlzLnkgKj0gbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgbnVtYmVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm11bFMgPSBmdW5jdGlvbiAobikge1xuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseUJ5U2NhbGFyKG4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGl2aXZlIHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCBudW1iZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGl2aWRlQnlTY2FsYXIgPSBmdW5jdGlvbiAobikge1xuICAgICAgICB0aGlzLnggLz0gbjtcbiAgICAgICAgdGhpcy55IC89IG47XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGl2aXZlIHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCBudW1iZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGl2UyA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpdmlkZUJ5U2NhbGFyKG4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTm9ybWFsaXNlIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm5vcm1hbGlzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGl2aWRlQnlTY2FsYXIodGhpcy5tYWduaXR1ZGUoKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGb3IgQW1lcmljYW4gc3BlbGxpbmcuIFNhbWUgYXMgdW5pdC9ub3JtYWxpc2UgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubm9ybWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpc2UoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBzYW1lIGFzIG5vcm1hbGlzZSBhbmQgbm9ybWFsaXplXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnVuaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGlzZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWFnbml0dWRlIChsZW5ndGgpIG9mIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm1hZ25pdHVkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHggPSB0aGlzLng7XG4gICAgICAgIHZhciB5ID0gdGhpcy55O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWFnbml0dWRlIChsZW5ndGgpIG9mIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFnbml0dWRlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzcXVyZWQgbGVuZ3RoIG9mIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmxlbmd0aFNxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgeCA9IHRoaXMueDtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnk7XG4gICAgICAgIHJldHVybiB4ICogeCArIHkgKiB5O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZG90IHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYnkgYW5vdGhlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kb3QgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHJldHVybiB2ZWMueCAqIHRoaXMueCArIHZlYy55ICogdGhpcy55O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBieSBhbm90aGVyLlxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5jcm9zcyA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHZlYy55IC0gdGhpcy55ICogdmVjLng7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXZlcnNlcyB0aGlzIHZlY3RvciBpLmUgbXVsdGlwbGllcyBpdCBieSAtMVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnggPSAtdGhpcy54O1xuICAgICAgICB0aGlzLnkgPSAtdGhpcy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgdmVjdG9yIGF4ZXMgdmFsdWVzIHRvIGFic29sdXRlIHZhbHVlc1xuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5hYnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMueCA9IE1hdGguYWJzKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGguYWJzKHRoaXMueSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogWmVyb2VzIHRoZSB2ZWN0b3IgaS5lIHNldHMgYWxsIGF4ZXMgdG8gMFxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS56ZXJvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGlzdGFuY2UgPSBmdW5jdGlvbiAodikge1xuICAgICAgICB2YXIgeCA9IHRoaXMueCAtIHYueDtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnkgLSB2Lnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIHRoZSB2ZXRvciBieSBwcm92aWRlZCByYWRpYW5zXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnJvdGF0ZSA9IGZ1bmN0aW9uIChyYWRzKSB7XG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyYWRzKTtcbiAgICAgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZHMpO1xuICAgICAgICB2YXIgb3ggPSB0aGlzLng7XG4gICAgICAgIHZhciBveSA9IHRoaXMueTtcbiAgICAgICAgdGhpcy54ID0gb3ggKiBjb3MgLSBveSAqIHNpbjtcbiAgICAgICAgdGhpcy55ID0gb3ggKiBzaW4gKyBveSAqIGNvcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSb3VuZHMgdGhpcyB2ZWN0b3IgdG8gbiBkZWNpbWFsIHBsYWNlc1xuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5yb3VuZCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIGlmIChuID09PSB2b2lkIDApIHsgbiA9IDI7IH1cbiAgICAgICAgdmFyIHAgPSBwcmVjaXNpb25bbl07XG4gICAgICAgIC8vIFRoaXMgcGVyZm9ybXMgd2FhYXkgYmV0dGVyIHRoYW4gdG9GaXhlZCBhbmQgZ2l2ZSBGbG9hdDMyIHRoZSBlZGdlIGFnYWluLlxuICAgICAgICAvLyBodHRwOi8vd3d3LmR5bmFtaWNndXJ1LmNvbS9qYXZhc2NyaXB0L3JvdW5kLW51bWJlcnMtd2l0aC1wcmVjaXNpb24vXG4gICAgICAgIHRoaXMueCA9ICgoMC41ICsgdGhpcy54ICogcCkgPDwgMCkgLyBwO1xuICAgICAgICB0aGlzLnkgPSAoKDAuNSArIHRoaXMueSAqIHApIDw8IDApIC8gcDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgY29weSBvZiB0aGlzIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmN0b3IodGhpcy54LCB0aGlzLnkpO1xuICAgIH07XG4gICAgcmV0dXJuIEFic3RyYWN0VmVjdG9yO1xufSgpKTtcbmV4cG9ydHMuQWJzdHJhY3RWZWN0b3IgPSBBYnN0cmFjdFZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFic3RyYWN0VmVjdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQWJzdHJhY3RWZWN0b3JfMSA9IHJlcXVpcmUoXCIuL0Fic3RyYWN0VmVjdG9yXCIpO1xuLyoqXG4gKiBBIHZlY3RvciByZXByZXNlbnRhdGlvbiB0aGF0IHN0b3JlcyB0aGUgYXhlcyBpbiBhbiBBcnJheVxuICpcbiAqIGBgYFxuICogY29uc3QgdiA9IG5ldyBWZWMyRC5BcnJheVZlY3RvcigyLCA1KVxuICogYGBgXG4gKi9cbnZhciBBcnJheVZlY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXJyYXlWZWN0b3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXJyYXlWZWN0b3IoeCwgeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBBcnJheVZlY3RvcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYXhlcyA9IFt4LCB5XTtcbiAgICAgICAgX3RoaXMuY3RvciA9IEFycmF5VmVjdG9yO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheVZlY3Rvci5wcm90b3R5cGUsIFwieFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXhlc1swXTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgdGhpcy5heGVzWzBdID0geDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5VmVjdG9yLnByb3RvdHlwZSwgXCJ5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5heGVzWzFdO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh5KSB7XG4gICAgICAgICAgICB0aGlzLmF4ZXNbMV0gPSB5O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQXJyYXlWZWN0b3I7XG59KEFic3RyYWN0VmVjdG9yXzEuQWJzdHJhY3RWZWN0b3IpKTtcbmV4cG9ydHMuQXJyYXlWZWN0b3IgPSBBcnJheVZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFycmF5VmVjdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQWJzdHJhY3RWZWN0b3JfMSA9IHJlcXVpcmUoXCIuL0Fic3RyYWN0VmVjdG9yXCIpO1xuLyoqXG4gKiBBIHZlY3RvciByZXByZXNlbnRhdGlvbiB0aGF0IHN0b3JlcyB0aGUgYXhlcyBpbiBhIEZsb2F0MzJBcnJheVxuICpcbiAqIGBgYFxuICogY29uc3QgdiA9IG5ldyBWZWMyRC5GbG9hdDMyVmVjdG9yKDIsIDUpXG4gKiBgYGBcbiAqL1xudmFyIEZsb2F0MzJWZWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZsb2F0MzJWZWN0b3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmxvYXQzMlZlY3Rvcih4LCB5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIEZsb2F0MzJWZWN0b3IpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmF4ZXMgPSBuZXcgRmxvYXQzMkFycmF5KDIpO1xuICAgICAgICBfdGhpcy5heGVzWzBdID0geDtcbiAgICAgICAgX3RoaXMuYXhlc1sxXSA9IHk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZsb2F0MzJWZWN0b3IucHJvdG90eXBlLCBcInhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF4ZXNbMF07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHRoaXMuYXhlc1swXSA9IHg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGbG9hdDMyVmVjdG9yLnByb3RvdHlwZSwgXCJ5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5heGVzWzFdO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh5KSB7XG4gICAgICAgICAgICB0aGlzLmF4ZXNbMV0gPSB5O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gRmxvYXQzMlZlY3Rvcjtcbn0oQWJzdHJhY3RWZWN0b3JfMS5BYnN0cmFjdFZlY3RvcikpO1xuZXhwb3J0cy5GbG9hdDMyVmVjdG9yID0gRmxvYXQzMlZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZsb2F0MzJWZWN0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQocmVxdWlyZShcIi4vQWJzdHJhY3RWZWN0b3JcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vQXJyYXlWZWN0b3JcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vRmxvYXQzMlZlY3RvclwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9WZWN0b3JcIikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VmVjMkQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBYnN0cmFjdFZlY3Rvcl8xID0gcmVxdWlyZShcIi4vQWJzdHJhY3RWZWN0b3JcIik7XG4vKipcbiAqIEEgdmVjdG9yIHJlcHJlc2VudGF0aW9uIHRoYXQgc3RvcmVzIHRoZSBheGVzIGFzIHBhcnQgb2YgdGhlIGluc3RhbmNlIGl0c2VsZlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCB2ID0gbmV3IFZlYzJELlZlY3RvcigyLCA1KVxuICogYGBgXG4gKi9cbnZhciBWZWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZlY3RvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBWZWN0b3IoeCwgeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBWZWN0b3IpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl94ID0geDtcbiAgICAgICAgX3RoaXMuX3kgPSB5O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IucHJvdG90eXBlLCBcInhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl94O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICB0aGlzLl94ID0geDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3Rvci5wcm90b3R5cGUsIFwieVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3k7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgICAgIHRoaXMuX3kgPSB5O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gVmVjdG9yO1xufShBYnN0cmFjdFZlY3Rvcl8xLkFic3RyYWN0VmVjdG9yKSk7XG5leHBvcnRzLlZlY3RvciA9IFZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZlY3Rvci5qcy5tYXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3Njc3Mvc3R5bGVzLnNjc3NcIjtcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG4vKipcbiAqIFF1ZXJ5IHNlbGVjdG9yIHN0cmluZ1xuICogZm9yIHRoZSBjYW52YXMgdGFyZ2V0XG4gKi9cbmNvbnN0IHRhcmdldCA9IGAjJHtDb25zdGFudHMuQ0FOVkFTX1RBUkdFVH1gO1xuKCgpID0+IHtcbiAgICAvLyBUaGlzIGlzIG91ciB0YXJnZXQgY2FudmFzXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICAgIGlmIChjYW52YXMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICAvLyBVc2luZyB0aGUgMkQgY29udGV4dFxuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGlmIChjb250ZXh0ID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIENyZWF0ZSBHYW1lIG9iamVjdC5cbiAgICAgICAgY29uc3QgYXBwID0gbmV3IEFwcChjYW52YXMsIGNvbnRleHQpO1xuICAgICAgICAvLyBEZWZpbmUgZ2FtZWxvb3AgYW5kIHByb2Nlc3MuXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkxvb3AgPSAodGltZXN0YW1wKSA9PiB7XG4gICAgICAgICAgICBhcHAucHJvY2Vzcyh0aW1lc3RhbXApO1xuICAgICAgICAgICAgLy8gS2VlcCByZXF1ZXN0aW5nIG5ldyBmcmFtZXNcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uTG9vcCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEJvb3RzdHJhcCBhbnkgc2V0dXAgc3R1ZmZcbiAgICAgICAgYXBwLnNldFVwKCk7XG4gICAgICAgIC8vIFN0YXJ0IHRoZSByZW5kZXJsb29wLlxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkxvb3ApO1xuICAgIH1cbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=