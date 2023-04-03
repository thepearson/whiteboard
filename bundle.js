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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  overflow: hidden;\n}\n\n#drawing-canvas {\n  background-color: #fff;\n}\n\n#palette {\n  justify-content: space-around;\n  transform: translate(-50%, 0);\n  position: fixed;\n  display: flex;\n  height: 120px;\n  bottom: 0;\n  left: 50%;\n  padding-bottom: 20px;\n  pointer-events: none;\n}\n#palette .color {\n  margin: 20px;\n  pointer-events: all;\n  width: 80px;\n  cursor: pointer;\n  height: 80px;\n  border-radius: 50%;\n  border: 10px solid rgba(255, 255, 255, 0);\n}\n#palette .color:hover {\n  border: 10px solid rgba(255, 255, 255, 0.8);\n}\n#palette .color.selected {\n  border: 10px solid rgba(204, 204, 255, 0.7);\n}\n\n#layers {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  top: 0px;\n  right: 0px;\n  height: 100%;\n  pointer-events: none;\n  margin: 40px;\n}\n#layers .layer {\n  pointer-events: auto;\n  background-color: rgba(255, 255, 255, 0.7);\n  border: 1px solid #cacaca;\n  border-radius: 2%;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n#layers .layer:hover {\n  background-color: rgb(255, 255, 255);\n}", "",{"version":3,"sources":["webpack://./src/scss/styles.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,SAAA;EACA,UAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,sBAAA;AACF;;AAEA;EACE,6BAAA;EACA,6BAAA;EACA,eAAA;EACA,aAAA;EACA,aAAA;EACA,SAAA;EACA,SAAA;EACA,oBAAA;EACA,oBAAA;AACF;AACE;EACE,YAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,yCAAA;AACJ;AAAI;EACE,2CAAA;AAEN;AAAI;EACE,2CAAA;AAEN;;AAGA;EACE,eAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;EACA,UAAA;EACA,YAAA;EACA,oBAAA;EAEA,YAAA;AADF;AAGE;EACE,oBAAA;EACA,0CAAA;EACA,yBAAA;EACA,iBAAA;EACA,mBAAA;EACA,eAAA;AADJ;AAIE;EACE,oCAAA;AAFJ","sourcesContent":["* {\n  font-size: 16px;\n  margin:0;\n  padding:0;\n}\n\nbody {\n  overflow:hidden;\n}\n\n#drawing-canvas {\n  background-color: #fff;\n}\n\n#palette {\n  justify-content: space-around;\n  transform: translate(-50%, 0);\n  position: fixed;\n  display: flex;\n  height: 120px;\n  bottom: 0;\n  left: 50%;\n  padding-bottom: 20px;\n  pointer-events: none;\n\n  .color {\n    margin: 20px;\n    pointer-events: all;\n    width: 80px;\n    cursor: pointer;\n    height: 80px;\n    border-radius: 50%;\n    border: 10px solid rgba(255, 255, 255, 0);\n    &:hover {\n      border: 10px solid rgba(255, 255, 255, 0.8);\n    }\n    &.selected {\n      border: 10px solid rgba(204, 204, 255, 0.7);\n    }\n  }\n}\n\n#layers {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  top: 0px;\n  right: 0px;\n  height: 100%;\n  pointer-events: none;\n\n  margin: 40px;\n\n  .layer {\n    pointer-events: auto;\n    background-color: rgba(255, 255, 255, 0.7);\n    border: 1px solid #cacaca;\n    border-radius: 2%;\n    margin-bottom: 20px;\n    cursor: pointer;\n  }\n\n  .layer:hover {\n    background-color: rgba(255, 255, 255, 1.0);\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _hud_layers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hud/layers */ "./src/hud/layers.ts");







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
        const palette = new _hud_palette__WEBPACK_IMPORTED_MODULE_4__["default"]();
        palette.setColorIndex(0);
        hud.addItem(palette);
        const layers = new _hud_layers__WEBPACK_IMPORTED_MODULE_6__["default"](this.drawing);
        hud.addItem(layers);
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
/* harmony export */   "COLOR_BLACK": () => (/* binding */ COLOR_BLACK),
/* harmony export */   "COLOR_BLUE": () => (/* binding */ COLOR_BLUE),
/* harmony export */   "COLOR_GREEN": () => (/* binding */ COLOR_GREEN),
/* harmony export */   "COLOR_ORANGE": () => (/* binding */ COLOR_ORANGE),
/* harmony export */   "COLOR_RED": () => (/* binding */ COLOR_RED),
/* harmony export */   "COLOR_YELLOW": () => (/* binding */ COLOR_YELLOW),
/* harmony export */   "Constants": () => (/* binding */ Constants),
/* harmony export */   "LAYER_CREATE_KEYS": () => (/* binding */ LAYER_CREATE_KEYS),
/* harmony export */   "LAYER_CREATE_TIME": () => (/* binding */ LAYER_CREATE_TIME)
/* harmony export */ });
const COLOR_RED = { r: 255, g: 0, b: 0, a: 1.0 };
const COLOR_GREEN = { r: 0, g: 192, b: 0, a: 1.0 };
const COLOR_BLUE = { r: 0, g: 0, b: 255, a: 1.0 };
const COLOR_YELLOW = { r: 255, g: 255, b: 0, a: 1.0 };
const COLOR_ORANGE = { r: 255, g: 128, b: 0, a: 1.0 };
const COLOR_BLACK = { r: 0, g: 0, b: 0, a: 1.0 };
const LAYER_CREATE_TIME = 0;
const LAYER_CREATE_KEYS = 1;
const Constants = {
    PALLETTE_SIZE: 60,
    TOOL_SPACING: 20,
    CANVAS_SIZE: {
        width: window.innerWidth,
        height: window.innerHeight
    },
    LAYERS_WIDTH: 125,
    LAYER_CREATE_DELAY: 5000,
    LAYER_CREATE_BEHAVIOR: LAYER_CREATE_TIME,
    COLORS: [
        COLOR_RED,
        COLOR_GREEN,
        COLOR_BLUE,
        COLOR_YELLOW,
        COLOR_ORANGE,
        COLOR_BLACK
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
/* harmony import */ var _tools_layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/layer */ "./src/tools/layer.ts");



/**
 * Main world class, constructs everytrhing about the game world
 */
class Drawing {
    constructor() {
        /**
         * Layer incremental number, used to track unique numerical
         * id of all entities loaded onto the canvas
         *
         * @var {number}
         */
        this.layer_id = 0;
        /**
         * The layers
         *
         * @return  {[type]}  [return description]
         */
        this.layers = new Map();
        /**
         * Heads up display (GUI)
         *
         * @var {Hud}
         */
        this.hud = null;
        /**
         * The active layer
         */
        this.active_layer = null;
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
     * Returns a Layer
     *
     * @param   {number}  id  Layer numerical ID
     *
     * @return  {Layer}
     */
    getLayer(id) {
        const layer = this.layers.get(id);
        if (layer)
            return layer;
        return null;
    }
    /**
     * [addLayer description]
     *
     * @return  {void}    [return description]
     */
    addLayer() {
        this.active_layer = new _tools_layer__WEBPACK_IMPORTED_MODULE_2__["default"](this.layer_id, this);
        this.layers.set(this.active_layer.id, this.active_layer);
        this.layer_id++;
    }
    /**
     * Adds an entity to the active layer
     *
     * @param   {Entity}  entity  Entity to add to the gameworld
     *
     * @return  {void}
     */
    addEntity(entity) {
        var _a;
        if (!this.active_layer)
            this.addLayer();
        (_a = this.active_layer) === null || _a === void 0 ? void 0 : _a.addEntity(entity);
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
        for (let [key, layer] of this.layers) {
            count += layer.countEntities(type);
        }
        return count;
    }
    /**
     * Remove a Layer from the canvas
     *
     * @param   {number}  id  Numebrical ID of the entity
     *
     * @return  {void}
     */
    removeLayer(id) {
        this.layers.delete(id);
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
        context.fillText("LAYERS: " + this.layers.size, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width - 70, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height - 70);
        context.fillText("ENT: " + this.countEntities(), _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width - 70, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height - 55);
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
        const pallette = (_a = this.hud) === null || _a === void 0 ? void 0 : _a.getByName("palette");
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
        // Render each of the existing entitites. (Drawings)
        for (let [key, layer] of this.layers) {
            layer.render(context);
        }
        // Draw any pen helpers, draw the thing currently being drawn.
        if ((_a = this.pen) === null || _a === void 0 ? void 0 : _a.active_entity) {
            this.pen.active_entity.draw(context);
        }
        // Draw to the entity currently being drawn
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
        for (let [key, layer] of this.layers) {
            layer.removeEntities();
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
        for (let [key, layer] of this.layers) {
            layer.process(time, timestamp);
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
         * Time the entity was finished drawing, milliseconds since EPOC
         */
        this.completed = 0;
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _util_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/normalize */ "./src/util/normalize.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entity */ "./src/entities/entity.ts");



class Freehand extends _entity__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(size, color) {
        super('freehand');
        this.points = [];
        this.scale = 1.0;
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
        const debug = true;
        let scale = this.scale;
        if (context.canvas.width !== _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width) {
            scale = context.canvas.width / _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width;
        }
        context.beginPath();
        context.lineWidth = this.size * scale;
        context.strokeStyle = this.color.getHex(false);
        context.fillStyle = this.color.getHex(false);
        context.lineCap = "round";
        const initialPoint = (0,_util_normalize__WEBPACK_IMPORTED_MODULE_1__.denormalize)(this.points[0], context.canvas.width, context.canvas.height);
        context.moveTo(initialPoint.x, initialPoint.y);
        for (var i = 1; i < this.points.length; i++) {
            const denormalized = (0,_util_normalize__WEBPACK_IMPORTED_MODULE_1__.denormalize)(this.points[i], context.canvas.width, context.canvas.height);
            if (i === 1) {
                context.lineTo(denormalized.x, denormalized.y);
                continue;
            }
            if (this.points.length > 2 && i < (this.points.length - 1)) {
                const denomalizedNext = (0,_util_normalize__WEBPACK_IMPORTED_MODULE_1__.denormalize)(this.points[i + 1], context.canvas.width, context.canvas.height);
                var c = (denormalized.x + denomalizedNext.x) / 2;
                var d = (denormalized.y + denomalizedNext.y) / 2;
                context.quadraticCurveTo(denormalized.x, denormalized.y, c, d);
            }
            else {
                context.lineTo(denormalized.x, denormalized.y);
            }
        }
        context.stroke();
    }
    /**
     * [update description]
     *
     * @param   {Vector}  location  [location description]
     *
     * @return  {void}              [return description]
     */
    update(location) {
        this.points.push((0,_util_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize)(location, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height));
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
        // Currently does nothing
    }
    /**
     * Check for cursor and hud intersects
     *
     * @param   {number}  delta  [delta description]
     *
     * @return  {void}           [return description]
     */
    process(delta) {
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
        this.name = name;
    }
    /**
     * Call any update functions that need to be called.
     *
     * @return  {void}
     */
    update() {
        this.build();
    }
}


/***/ }),

/***/ "./src/hud/layers.ts":
/*!***************************!*\
  !*** ./src/hud/layers.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layers)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _hud_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hud_item */ "./src/hud/hud_item.ts");


class Layers extends _hud_item__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Sets up the layers section
     *
     * @param   {Drawing}  drawing
     *
     * @return  {[type]}
     */
    constructor(drawing) {
        super("layers");
        /**
         * The layer we're currently working on
         */
        this.current_layer = null;
        /**
         * Array containing all the layers
         */
        this.layers = [];
        /**
         * HTML Canvas E
         */
        this.target = null;
        this.target = document.getElementById('layers');
        this.drawing = drawing;
    }
    addLayer() {
    }
    build() {
        switch (_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.LAYER_CREATE_BEHAVIOR) {
            case _constants__WEBPACK_IMPORTED_MODULE_0__.LAYER_CREATE_TIME:
                this.buildTime();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_0__.LAYER_CREATE_KEYS:
            default:
                this.buildDefault();
                break;
        }
    }
    buildDefault() {
        if (!this.drawing)
            return;
        if (!this.target)
            return;
        if (!this.current_layer) {
            //this.current_layer = new Layer(this.target, 1, 0);
        }
        // for (let [key, entity] of this.drawing.entities) {
        // }
    }
    /**
     * Build the layers
     *
     * @return  {void}    [return description]
     */
    buildTime() {
        if (!this.drawing)
            return;
        if (!this.target)
            return;
        let index = 0;
        let current_time = 0;
        //this.current_layer = new Layer(this.target, 1, index);
        // for (let [key, entity] of this.drawing.entities) {
        //   if (entity.completed < (current_time + Constants.LAYER_CREATE_DELAY)) {
        //     this.current_layer.addEntity(entity);
        //     current_time = entity.completed;
        //   } else {
        //     index++;
        //     current_time = entity.completed;
        //     this.current_layer = new Layer(this.target, 1, index);
        //     this.current_layer.addEntity(entity);
        //     this.layers.push(this.current_layer);
        //   }
        // }
    }
    /**
     * Draw the layers
     *
     * @return  {void}
     */
    draw() {
        if (!this.target)
            return;
        // clear the target
        this.target.innerHTML = '';
        for (let i = 0; i < this.layers.length; i++) {
            this.layers[i].draw();
        }
    }
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
    constructor() {
        super("palette");
        /**
         * List of available colors
         */
        this.colors = [];
        /**
         * The currently selected color
         */
        this.selected_color = new _util_color__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, 0, 0.5);
        /**
         * The currently selected color index
         */
        this.selected_color_index = 1;
        for (var color of _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.COLORS) {
            this.colors.push(new _util_color__WEBPACK_IMPORTED_MODULE_1__["default"](color.r, color.g, color.b, color.a));
        }
        this.update();
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
        // Run any GUI updates
        this.update();
    }
}


/***/ }),

/***/ "./src/tools/layer.ts":
/*!****************************!*\
  !*** ./src/tools/layer.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layer)
/* harmony export */ });
class Layer {
    /**
     * Constructor for Layer
     *
     * @param   {Drawing}  drawing  Drawing reference
     *
     * @return  {[type]}
     */
    constructor(id, drawing) {
        /**
         * Layer ID
         */
        this.id = -1;
        /**
         * All drawn entities, these will all get
         * processed and rendered when the need to be
         *
         * @var  {Map<number, Entity>}
         */
        this.entities = new Map();
        /**
         * The active entity
         */
        this.active_entity = null;
        /**
         * Entity incremental number, used to track unique numerical
         * id of all entities loaded onto the canvas
         *
         * @var {number}
         */
        this.entity_id = 0;
        /**
         * Reference to the main Drawing
         */
        this.drawing = null;
        this.id = id;
        this.drawing = drawing;
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
        entity.drawing = this.drawing;
        this.entities.set(this.entity_id, entity);
        this.entity_id += 1;
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
    process(time, timestamp) {
        for (let [key, entity] of this.entities) {
            if (entity.remove) {
                this.entities.delete(key);
            }
        }
    }
    render(context) {
        // Render each of the existing entitites. (Drawings)
        for (let [key, entity] of this.entities) {
            entity.render(context);
        }
    }
    /**
     * [description]
     */
    draw() {
        let canvas = document.getElementById(`layer-${this.id}`);
        if (!canvas) {
            canvas = document.createElement("canvas");
            canvas.width = 150; // this.width;
            canvas.height = 80; //this.height;
            canvas.id = `layer-${this.id}`;
            canvas.classList.add('layer');
        }
        const context = canvas.getContext('2d');
        //this.parent?.insertBefore(canvas, this.parent.firstChild);
        if (context == null)
            return;
        for (let [key, entity] of this.entities) {
            entity.render(context);
        }
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
            this.active_entity.completed = Date.now();
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

/***/ "./src/util/normalize.ts":
/*!*******************************!*\
  !*** ./src/util/normalize.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "denormalize": () => (/* binding */ denormalize),
/* harmony export */   "normalize": () => (/* binding */ normalize)
/* harmony export */ });
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_0__);

function normalize(position, width, height) {
    return new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(((100. / width) * position.x) / 100., ((100. / height) * position.y) / 100.);
}
function denormalize(position, width, height) {
    return new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(position.x * width, position.y * height);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3QkFBd0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25FZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixVQUFVO0FBQzNCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDSjtBQUNnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrREFBdUIsQ0FBQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNENBQUc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcz8zMjFmIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9kcmF3aW5nLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvZW50aXRpZXMvZW50aXR5LnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvZW50aXRpZXMvZnJlZWhhbmQudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9odWQvaHVkLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvaHVkL2h1ZF9pdGVtLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvaHVkL2xheWVycy50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2h1ZC9wYWxldHRlLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdG9vbHMvbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy90b29scy9tYXJrZXIudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy90b29scy9wZW4udHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy91dGlsL2NpcmNsZS50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL3V0aWwvY29sb3IudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy91dGlsL25vcm1hbGl6ZS50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9BYnN0cmFjdFZlY3Rvci5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9BcnJheVZlY3Rvci5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9GbG9hdDMyVmVjdG9yLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvdmVjdG9yMmQvc3JjL1ZlYzJELmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvdmVjdG9yMmQvc3JjL1ZlY3Rvci5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3doaXRlYm9hcmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3doaXRlYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNkcmF3aW5nLWNhbnZhcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jcGFsZXR0ZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA1MCU7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4jcGFsZXR0ZSAuY29sb3Ige1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxufVxcbiNwYWxldHRlIC5jb2xvcjpob3ZlciB7XFxuICBib3JkZXI6IDEwcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbn1cXG4jcGFsZXR0ZSAuY29sb3Iuc2VsZWN0ZWQge1xcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYmEoMjA0LCAyMDQsIDI1NSwgMC43KTtcXG59XFxuXFxuI2xheWVycyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRvcDogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgbWFyZ2luOiA0MHB4O1xcbn1cXG4jbGF5ZXJzIC5sYXllciB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XFxuICBib3JkZXItcmFkaXVzOiAyJTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNsYXllcnMgLmxheWVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FBQ0o7QUFBSTtFQUNFLDJDQUFBO0FBRU47QUFBSTtFQUNFLDJDQUFBO0FBRU47O0FBR0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFFQSxZQUFBO0FBREY7QUFHRTtFQUNFLG9CQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLG9DQUFBO0FBRkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46MDtcXG4gIHBhZGRpbmc6MDtcXG59XFxuXFxuYm9keSB7XFxuICBvdmVyZmxvdzpoaWRkZW47XFxufVxcblxcbiNkcmF3aW5nLWNhbnZhcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jcGFsZXR0ZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA1MCU7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgLmNvbG9yIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIH1cXG4gICAgJi5zZWxlY3RlZCB7XFxuICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYmEoMjA0LCAyMDQsIDI1NSwgMC43KTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4jbGF5ZXJzIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdG9wOiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFxuICBtYXJnaW46IDQwcHg7XFxuXFxuICAubGF5ZXIge1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmxheWVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxLjApO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgKiBhcyBWZWMyIGZyb20gXCJ2ZWN0b3IyZFwiO1xuaW1wb3J0IERyYXdpbmcgZnJvbSBcIi4vZHJhd2luZ1wiO1xuaW1wb3J0IE1hcmtlciBmcm9tIFwiLi90b29scy9tYXJrZXJcIjtcbmltcG9ydCBQYWxldHRlIGZyb20gXCIuL2h1ZC9wYWxldHRlXCI7XG5pbXBvcnQgSHVkIGZyb20gXCIuL2h1ZC9odWRcIjtcbmltcG9ydCBMYXllcnMgZnJvbSBcIi4vaHVkL2xheWVyc1wiO1xuLyoqXG4gKiBUaGUgdG9wLWxldmVsIEdhbWUgY2xhc3MsIG1hbmFnZXMgc2V0dXAsIGJhc2UgbG9vcCwgYW5kIGV2ZW50c1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7SFRNTENhbnZhc0VsZW1lbnR9ICAgICAgICAgY2FudmFzICAgVGhpcyBpcyB0aGUgdGFyZ2V0IGNhbnZhcyBmb3Igb3VyIGdhbWVcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgVGhpcyBpcyB0aGUgY29udGV0IGZvciB0aGUgY2FudmFzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjb250ZXh0KSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBmb3IgdGhlIGNhbnZhcy5vbk1vdXNlTW92ZSBldmVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb3VzZV9tb3ZlID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IGZvciB0aGUgY2FudmFzLm9uTW91c2VNb3ZlIGV2ZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdXNlX3doZWVsID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IGZvciB0aGUgY2FudmFzLm9uTW91c2VEb3duIGV2ZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdXNlX2Rvd24gPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgZm9yIHRoZSBjYW52YXMub25Nb3VzZVVwIGV2ZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdXNlX3VwID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyYXdpbmcgY2FudmFzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNhbnZhcyA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaW1lc3RhbXAgd2hlbiBsYXN0IGZyYW1lIHdhcyBwcm9jZXNzZWRcbiAgICAgICAgICogdXNlZCBmb3IgY2FsY3VsYXRpbmcgdGhlIGRlbHRhVGltZSBhbmRcbiAgICAgICAgICogRlBTLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbGRUaW1lc3RhbXAgPSAwLjA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIb2xkZXIgZm9yIEZQUywgdXNlZnVsIHdoZW4gbmVlZGluZyB0byByZW5kZXJcbiAgICAgICAgICogdGhpcyB3aXRoaW4gdGhlIGdhbWUgZW52aXJvbm1lbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZnBzID0gMDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIC8vIFNldCBjYW52YXMgZGltZW5zaW9uc1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQm9vdHN0cmFwIGZ1bmN0aW9uLCB1c2VkIGZvciBzZXR0aW5nXG4gICAgICogZXZlcnl0aGluZyB1cCBwcmlvciB0byBraWNraW5nIG9mZiB0aGUgcmVuZGVyTG9vcFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0VXAoKSB7XG4gICAgICAgIC8vIENyZWF0ZSB3b3JsZFxuICAgICAgICB0aGlzLmRyYXdpbmcgPSBuZXcgRHJhd2luZygpO1xuICAgICAgICB0aGlzLmRyYXdpbmcuc2V0UGVuKG5ldyBNYXJrZXIodGhpcy5kcmF3aW5nKSk7XG4gICAgICAgIC8vdGhpcy5kcmF3aW5nLnNldFBhbGxldHRlKG5ldyBQYWxsZXR0ZSgpKTtcbiAgICAgICAgLy8gSXRlbXMgdG8gdGhlIGh1ZFxuICAgICAgICBjb25zdCBodWQgPSBuZXcgSHVkKCk7XG4gICAgICAgIGNvbnN0IHBhbGV0dGUgPSBuZXcgUGFsZXR0ZSgpO1xuICAgICAgICBwYWxldHRlLnNldENvbG9ySW5kZXgoMCk7XG4gICAgICAgIGh1ZC5hZGRJdGVtKHBhbGV0dGUpO1xuICAgICAgICBjb25zdCBsYXllcnMgPSBuZXcgTGF5ZXJzKHRoaXMuZHJhd2luZyk7XG4gICAgICAgIGh1ZC5hZGRJdGVtKGxheWVycyk7XG4gICAgICAgIHRoaXMuZHJhd2luZy5odWQgPSBodWQ7XG4gICAgICAgIC8vIEFkZCBldmVudHNcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMubW91c2VfbW92ZSA9IHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdXNlX3BvcyA9IG5ldyBWZWMyLlZlY3RvcihldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRUYXJnZXRQb3NpdGlvbihtb3VzZV9wb3MpO1xuICAgICAgICAgICAgICAgIGh1ZC5zZXRDdXJzb3JQb3NpdGlvbihtb3VzZV9wb3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm1vdXNlX2Rvd24gPSB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgKF9iID0gKF9hID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGVuKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc3RhcnREcmF3aW5nKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubW91c2Vfd2hlZWwgPSB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2Y7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRlbHRhWSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgKF9iID0gKF9hID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGVuKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc2V0U2l6ZSgoKF9jID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MucGVuLnNpemUpIC0gMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAoX2UgPSAoX2QgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5wZW4pID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5zZXRTaXplKCgoX2YgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5wZW4uc2l6ZSkgKyAyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubW91c2VfdXAgPSB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBlbikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnN0b3BEcmF3aW5nKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYW55IHBlcmlvZGljIHRpbWVyc1xuICAgICAqXG4gICAgICogQHBhcmFtICAge0RPTUhpZ2hSZXNUaW1lU3RhbXB9ICB0aW1lc3RhbXAgIEVQT0MgTWlsbGlzZWNvbmRzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm9jZXNzVGltZXJzKHRpbWVzdGFtcCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIGFueSBnYW1lIGNhbGN1bGF0aW9ucywgY2FzY2FkZXMgZG93biB0byB0aGVcbiAgICAgKiBXb3JsZCBvYmplY3QgYW5kIHBhc3NlcyBvZmYgYW55IGVudGl0eSBiYXNlZCBjYWxjcyB0byB0aGVyZS5cbiAgICAgKiBUaGVuIHRyaWdnZXIgb2YgYWxsIHJlbmRlcmluZyBmb3IgdGhlIHdvcmxkLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge0RPTUhpZ2hSZXNUaW1lU3RhbXB9ICB0aW1lc3RhbXAgIEVQT0MgbWlsbGlzZWNvbmRzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm9jZXNzKHRpbWVzdGFtcCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAvLyBTaG9ydCBjaXJjdXQsIHRoZXNlIE1VU1QgZXhpc3RcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzID09IG51bGwgfHwgdGhpcy5jb250ZXh0ID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIFByb2Nlc3MgYW55IHRpbWVyc1xuICAgICAgICB0aGlzLnByb2Nlc3NUaW1lcnModGltZXN0YW1wKTtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBwYXNzZWQgc2luY2UgdGhlIGxhc3QgZnJhbWVcbiAgICAgICAgY29uc3QgZHQgPSB0aW1lc3RhbXAgLSB0aGlzLm9sZFRpbWVzdGFtcDtcbiAgICAgICAgLy8gVXBkYXRlIHRpbWVzdGFtcCBmb3IgbmV4dCBwcm9jZXNzIGZyYW1lXG4gICAgICAgIHRoaXMub2xkVGltZXN0YW1wID0gdGltZXN0YW1wO1xuICAgICAgICAvLyBUcmlnZ2VyIFdvcmxkIGNhbGNzXG4gICAgICAgIC8vIFRPRE86IGFzeW5jPyBQZXJmb3JtYW5jZSBpbXByb3ZtZW50IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICAgICAgKF9hID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucHJvY2VzcyhkdCwgdGltZXN0YW1wKTtcbiAgICAgICAgLy8gUmVuZGVyIHRoaW5nc1xuICAgICAgICAoX2IgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZW5kZXIodGhpcy5jYW52YXMsIHRoaXMuY29udGV4dCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IENPTE9SX1JFRCA9IHsgcjogMjU1LCBnOiAwLCBiOiAwLCBhOiAxLjAgfTtcbmV4cG9ydCBjb25zdCBDT0xPUl9HUkVFTiA9IHsgcjogMCwgZzogMTkyLCBiOiAwLCBhOiAxLjAgfTtcbmV4cG9ydCBjb25zdCBDT0xPUl9CTFVFID0geyByOiAwLCBnOiAwLCBiOiAyNTUsIGE6IDEuMCB9O1xuZXhwb3J0IGNvbnN0IENPTE9SX1lFTExPVyA9IHsgcjogMjU1LCBnOiAyNTUsIGI6IDAsIGE6IDEuMCB9O1xuZXhwb3J0IGNvbnN0IENPTE9SX09SQU5HRSA9IHsgcjogMjU1LCBnOiAxMjgsIGI6IDAsIGE6IDEuMCB9O1xuZXhwb3J0IGNvbnN0IENPTE9SX0JMQUNLID0geyByOiAwLCBnOiAwLCBiOiAwLCBhOiAxLjAgfTtcbmV4cG9ydCBjb25zdCBMQVlFUl9DUkVBVEVfVElNRSA9IDA7XG5leHBvcnQgY29uc3QgTEFZRVJfQ1JFQVRFX0tFWVMgPSAxO1xuZXhwb3J0IGNvbnN0IENvbnN0YW50cyA9IHtcbiAgICBQQUxMRVRURV9TSVpFOiA2MCxcbiAgICBUT09MX1NQQUNJTkc6IDIwLFxuICAgIENBTlZBU19TSVpFOiB7XG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB9LFxuICAgIExBWUVSU19XSURUSDogMTI1LFxuICAgIExBWUVSX0NSRUFURV9ERUxBWTogNTAwMCxcbiAgICBMQVlFUl9DUkVBVEVfQkVIQVZJT1I6IExBWUVSX0NSRUFURV9USU1FLFxuICAgIENPTE9SUzogW1xuICAgICAgICBDT0xPUl9SRUQsXG4gICAgICAgIENPTE9SX0dSRUVOLFxuICAgICAgICBDT0xPUl9CTFVFLFxuICAgICAgICBDT0xPUl9ZRUxMT1csXG4gICAgICAgIENPTE9SX09SQU5HRSxcbiAgICAgICAgQ09MT1JfQkxBQ0tcbiAgICBdLFxuICAgIENBTlZBU19UQVJHRVQ6IFwiZHJhd2luZy1jYW52YXNcIlxufTtcbiIsImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IENvbG9yIGZyb20gXCIuL3V0aWwvY29sb3JcIjtcbmltcG9ydCBMYXllciBmcm9tIFwiLi90b29scy9sYXllclwiO1xuLyoqXG4gKiBNYWluIHdvcmxkIGNsYXNzLCBjb25zdHJ1Y3RzIGV2ZXJ5dHJoaW5nIGFib3V0IHRoZSBnYW1lIHdvcmxkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdpbmcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogTGF5ZXIgaW5jcmVtZW50YWwgbnVtYmVyLCB1c2VkIHRvIHRyYWNrIHVuaXF1ZSBudW1lcmljYWxcbiAgICAgICAgICogaWQgb2YgYWxsIGVudGl0aWVzIGxvYWRlZCBvbnRvIHRoZSBjYW52YXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sYXllcl9pZCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbGF5ZXJzXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sYXllcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIZWFkcyB1cCBkaXNwbGF5IChHVUkpXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge0h1ZH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaHVkID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhY3RpdmUgbGF5ZXJcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWN0aXZlX2xheWVyID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3VsZCB3ZSBkcmF3IHRoZSB0YXJnZXRzP1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kcmF3X3RhcmdldCA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUYXJnZXQgY3VycmVudCBsb2NhdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtWZWMyLlZlY3Rvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1cnJlbnQgcGVuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge1Blbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucGVuID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhlbHBlciB0byBjYWxjdWxhdGUgRlBTIGFuZCBmcmFtZXJhdGVzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGltZVRvRHJhdyA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIb2xkZXIgZm9yIGRlbHRhdGltZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmR0ID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXZpb3VzIGZyYW1lIHRpbWVzdGFtcFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtET01IaWdoUmVzVGltZVN0YW1wfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbGRUaW1lc3RhbXAgPSAwLjA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGcmFtZXMgcGVyIHNlY29uZCBob2xkZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mcHMgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdyBkZWJ1Zz9cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvd19kZWJ1ZyA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgTGF5ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBpZCAgTGF5ZXIgbnVtZXJpY2FsIElEXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7TGF5ZXJ9XG4gICAgICovXG4gICAgZ2V0TGF5ZXIoaWQpIHtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSB0aGlzLmxheWVycy5nZXQoaWQpO1xuICAgICAgICBpZiAobGF5ZXIpXG4gICAgICAgICAgICByZXR1cm4gbGF5ZXI7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBbYWRkTGF5ZXIgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBhZGRMYXllcigpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVfbGF5ZXIgPSBuZXcgTGF5ZXIodGhpcy5sYXllcl9pZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubGF5ZXJzLnNldCh0aGlzLmFjdGl2ZV9sYXllci5pZCwgdGhpcy5hY3RpdmVfbGF5ZXIpO1xuICAgICAgICB0aGlzLmxheWVyX2lkKys7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZW50aXR5IHRvIHRoZSBhY3RpdmUgbGF5ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtFbnRpdHl9ICBlbnRpdHkgIEVudGl0eSB0byBhZGQgdG8gdGhlIGdhbWV3b3JsZFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgYWRkRW50aXR5KGVudGl0eSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghdGhpcy5hY3RpdmVfbGF5ZXIpXG4gICAgICAgICAgICB0aGlzLmFkZExheWVyKCk7XG4gICAgICAgIChfYSA9IHRoaXMuYWN0aXZlX2xheWVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRW50aXR5KGVudGl0eSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgcGVuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7UGVufSAgcGVuICBTZXQncyB0aGUgYWN0aXZlIHBlbiB0byBQZW5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHNldFBlbihwZW4pIHtcbiAgICAgICAgdGhpcy5wZW4gPSBwZW47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVuc2V0J3MgdGhlIGN1cnJlbnQgdGFyZ2V0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICB1bnNldFRhcmdldCgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHRhcmdldCBwb3NpdGlvblxuICAgICAqXG4gICAgICogQHZhciB7VmVjMi5WZWN0b3J9IG1vdXNlX3BvcyAgIFRhcmdldCBwb3NpdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXRUYXJnZXRQb3NpdGlvbihtb3VzZV9wb3MpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBtb3VzZV9wb3M7XG4gICAgICAgIGlmICh0aGlzLnBlbikge1xuICAgICAgICAgICAgdGhpcy5wZW4uc2V0TG9jYXRpb24obW91c2VfcG9zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gZHJhdyB0aGUgdGFyZ2V0c1xuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyBkcmF3aW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXdUYXJnZXQoY29udGV4dCkge1xuICAgICAgICBpZiAodGhpcy5wZW4gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wZW4uZHJhd1RhcmdldChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gY291bnQgb2YgZW50aXRlcyBieSB0eXBlLCBpZiBubyB0eXBlIHNwZWNpZmllZCxcbiAgICAgKiB0aGVuIHJldHVuciBjb3VudCBvZiBhbGwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgdHlwZSAgRW50aXR5IFR5cGV8TmFtZSBbb3B0aW9uYWxdXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7bnVtYmVyfSAgICAgICAgTnVtYmVyIG9mIGVudGl0aWVzXG4gICAgICovXG4gICAgY291bnRFbnRpdGllcyh0eXBlKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAobGV0IFtrZXksIGxheWVyXSBvZiB0aGlzLmxheWVycykge1xuICAgICAgICAgICAgY291bnQgKz0gbGF5ZXIuY291bnRFbnRpdGllcyh0eXBlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIExheWVyIGZyb20gdGhlIGNhbnZhc1xuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIGlkICBOdW1lYnJpY2FsIElEIG9mIHRoZSBlbnRpdHlcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbW92ZUxheWVyKGlkKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzLmRlbGV0ZShpZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIGRlYnVnZ2luZyBwYW5lbFxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyByZW5kZXJpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgZHJhd0RlYnVnKGNvbnRleHQpIHtcbiAgICAgICAgLy8gRHJhdyBudW1iZXIgdG8gdGhlIHNjcmVlblxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZGRkZGRkNTUnO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCAtIDc1LCBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0IC0gMTAwLCA3NSwgMTAwKTtcbiAgICAgICAgY29udGV4dC5mb250ID0gJzExcHggQXJpYWwnO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQoXCJGUFM6IFwiICsgdGhpcy5mcHMsIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCAtIDcwLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0IC0gODUpO1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KFwiTEFZRVJTOiBcIiArIHRoaXMubGF5ZXJzLnNpemUsIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCAtIDcwLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0IC0gNzApO1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KFwiRU5UOiBcIiArIHRoaXMuY291bnRFbnRpdGllcygpLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGggLSA3MCwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodCAtIDU1KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHJhdyB0aGUgSFVEIGd1aVxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyByZW5kZXJpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgZHJhd0d1aShjb250ZXh0KSB7XG4gICAgICAgIGlmICghdGhpcy5odWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuaHVkLnJlbmRlcihjb250ZXh0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBhY3RpdmUgY29sb3JcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtDb2xvcn0gICBUaGUgc2VsZWN0ZWQgY29sb3JcbiAgICAgKi9cbiAgICBnZXRDb2xvcigpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBwYWxsZXR0ZSA9IChfYSA9IHRoaXMuaHVkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0QnlOYW1lKFwicGFsZXR0ZVwiKTtcbiAgICAgICAgaWYgKHBhbGxldHRlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFsbGV0dGUuZ2V0Q29sb3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKDAsIDAsIDApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIGFsbCB0aGUgcmVuZGVyaW5nIGZvciB0aGUgd29ybGRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtIVE1MQ2FudmFzRWxlbWVudH0gICAgICAgICBjYW52YXMgICBDYW52YXNcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIGRyYXdpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcmVuZGVyKGNhbnZhcywgY29udGV4dCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAvLyBDbGVhciB0aGUgc2NyZWVuIGV2ZXJ5IGZyYW1lXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIC8vIFJlbmRlciBlYWNoIG9mIHRoZSBleGlzdGluZyBlbnRpdGl0ZXMuIChEcmF3aW5ncylcbiAgICAgICAgZm9yIChsZXQgW2tleSwgbGF5ZXJdIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICAgICAgICBsYXllci5yZW5kZXIoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRHJhdyBhbnkgcGVuIGhlbHBlcnMsIGRyYXcgdGhlIHRoaW5nIGN1cnJlbnRseSBiZWluZyBkcmF3bi5cbiAgICAgICAgaWYgKChfYSA9IHRoaXMucGVuKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWN0aXZlX2VudGl0eSkge1xuICAgICAgICAgICAgdGhpcy5wZW4uYWN0aXZlX2VudGl0eS5kcmF3KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERyYXcgdG8gdGhlIGVudGl0eSBjdXJyZW50bHkgYmVpbmcgZHJhd25cbiAgICAgICAgaWYgKChfYiA9IHRoaXMucGVuKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaXNfZHJhd2luZykge1xuICAgICAgICAgICAgdGhpcy5wZW4uZHJhdyhjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3IHRhcmdldCBpZiBhbnlcbiAgICAgICAgaWYgKHRoaXMuZHJhd190YXJnZXQpXG4gICAgICAgICAgICB0aGlzLmRyYXdUYXJnZXQoY29udGV4dCk7XG4gICAgICAgIGlmICh0aGlzLnNob3dfZGVidWcpXG4gICAgICAgICAgICB0aGlzLmRyYXdEZWJ1Zyhjb250ZXh0KTtcbiAgICAgICAgdGhpcy5kcmF3R3VpKGNvbnRleHQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHYXJiYWdlIGNsZWFuIHVwLCByZW1vdmVzIGFueSBlbnRpdGllcyB0aGF0IGFyZSBzY2hlZHVsZSBmb3IgcmVtb3ZhbFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlRW50aXRpZXMoKSB7XG4gICAgICAgIGZvciAobGV0IFtrZXksIGxheWVyXSBvZiB0aGlzLmxheWVycykge1xuICAgICAgICAgICAgbGF5ZXIucmVtb3ZlRW50aXRpZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEbyBhbGwgd29ybGQgY2FsY3VsYXRpb25zXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgICAgICAgICAgICAgIGdhbWVUaW1lICAgRGVsdGFUaW1lXG4gICAgICogQHBhcmFtICAge0RPTUhpZ2hSZXNUaW1lU3RhbXB9ICB0aW1lc3RhbXAgIEN1cnJlbnQgdGltZVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2Vzcyh0aW1lLCB0aW1lc3RhbXApIHtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBwYXNzZWQgc2luY2UgdGhlIGxhc3QgZnJhbWVcbiAgICAgICAgdGhpcy50aW1lVG9EcmF3ID0gdGltZSAvIDEwMDA7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBmcHNcbiAgICAgICAgdGhpcy5mcHMgPSBNYXRoLnJvdW5kKDEgLyB0aGlzLnRpbWVUb0RyYXcpO1xuICAgICAgICB0aGlzLnJlbW92ZUVudGl0aWVzKCk7XG4gICAgICAgIGZvciAobGV0IFtrZXksIGxheWVyXSBvZiB0aGlzLmxheWVycykge1xuICAgICAgICAgICAgbGF5ZXIucHJvY2Vzcyh0aW1lLCB0aW1lc3RhbXApO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFsbG93IGh1ZCB0byBwcm9jZXNzIHRoaW5nc1xuICAgICAgICBpZiAodGhpcy5odWQpXG4gICAgICAgICAgICB0aGlzLmh1ZC5wcm9jZXNzKHRpbWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb2xvciBmcm9tICcuLi91dGlsL2NvbG9yJztcbi8qKlxuICogQ29yZSBlbnRpdHkgY2xhc3MsIGFsbCBvYmplY3RzIHdpdGhpbiB0aGUgZ2FtZSBmaWVsZCBhcmUgZW50aXRpZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudGl0eSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIG5hbWUgIG5hbWUgb3IgdHlwZSBvZiBlbnRpdHlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaW1lIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQsIG1pbGxpc2Vjb25kcyBzaW5jZSBFUE9DXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRpbWUgdGhlIGVudGl0eSB3YXMgY3JlYXRlZCwgbWlsbGlzZWNvbmRzIHNpbmNlIEVQT0NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaW1lIHRoZSBlbnRpdHkgd2FzIGZpbmlzaGVkIGRyYXdpbmcsIG1pbGxpc2Vjb25kcyBzaW5jZSBFUE9DXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb2xvdXIgb2YgdGhlIHBlblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuICB7Q29sb3J9ICBDb2xvdXIgb2JqZWN0IHRoYXQgdGhlIGVudGl0eSB3aWxsIGJlIGRyYXduIGFzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb2xvciA9IG5ldyBDb2xvcigwLCAwLCAwKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNpemUgb2YgdGhlIHBlblxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgbmFtZSBmb3IgdGhlIGVudGl0eSwgYWthIHR5cGUuIENhbiBiZSB1c2VkIHRvIHF1ZXJ5IGZvciBlbmVpdGllcyBvZiBcIm5hbWVcIlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gJyc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBzZXQgdG8gdHJ1ZSB0aGUgZW50aXR5IHdpbGwgYmUgZGlzcG9zZWQgb2YgbmV4dCB0aWNrLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZW1vdmUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZiB0byB0aGUgZHJhd2luZyBjYW52c1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kcmF3aW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gRGF0ZS5ub3coKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBDb2xvclxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NvbG9yfSAgY29sb3IgIENvbG9yIHRvIHNldCBvbiB0aGUgZW50aXR5XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXRDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgZW50aXR5LCBieSBkZWZhdWx0IGFsbCBlbnRpdGllcyBhcmUgdHJlYXRlZCBhcyBjaXJjbGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyBkcmF3aW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbmRlcihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuZHJhdyhjb250ZXh0KTtcbiAgICB9XG4gICAgcHJvY2VzcyhnYW1ldGltZSkge1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRlbm9ybWFsaXplLCBub3JtYWxpemUgfSBmcm9tIFwiLi4vdXRpbC9ub3JtYWxpemVcIjtcbmltcG9ydCBFbnRpdHkgZnJvbSBcIi4vZW50aXR5XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmVlaGFuZCBleHRlbmRzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgY29sb3IpIHtcbiAgICAgICAgc3VwZXIoJ2ZyZWVoYW5kJyk7XG4gICAgICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgICAgIHRoaXMuc2NhbGUgPSAxLjA7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogW2RyYXcgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgW2NvbnRleHQgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkcmF3KGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGRlYnVnID0gdHJ1ZTtcbiAgICAgICAgbGV0IHNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICAgICAgaWYgKGNvbnRleHQuY2FudmFzLndpZHRoICE9PSBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGgpIHtcbiAgICAgICAgICAgIHNjYWxlID0gY29udGV4dC5jYW52YXMud2lkdGggLyBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSB0aGlzLnNpemUgKiBzY2FsZTtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3IuZ2V0SGV4KGZhbHNlKTtcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yLmdldEhleChmYWxzZSk7XG4gICAgICAgIGNvbnRleHQubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICAgICAgY29uc3QgaW5pdGlhbFBvaW50ID0gZGVub3JtYWxpemUodGhpcy5wb2ludHNbMF0sIGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjb250ZXh0Lm1vdmVUbyhpbml0aWFsUG9pbnQueCwgaW5pdGlhbFBvaW50LnkpO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkZW5vcm1hbGl6ZWQgPSBkZW5vcm1hbGl6ZSh0aGlzLnBvaW50c1tpXSwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVRvKGRlbm9ybWFsaXplZC54LCBkZW5vcm1hbGl6ZWQueSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoID4gMiAmJiBpIDwgKHRoaXMucG9pbnRzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVub21hbGl6ZWROZXh0ID0gZGVub3JtYWxpemUodGhpcy5wb2ludHNbaSArIDFdLCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IChkZW5vcm1hbGl6ZWQueCArIGRlbm9tYWxpemVkTmV4dC54KSAvIDI7XG4gICAgICAgICAgICAgICAgdmFyIGQgPSAoZGVub3JtYWxpemVkLnkgKyBkZW5vbWFsaXplZE5leHQueSkgLyAyO1xuICAgICAgICAgICAgICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyhkZW5vcm1hbGl6ZWQueCwgZGVub3JtYWxpemVkLnksIGMsIGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5saW5lVG8oZGVub3JtYWxpemVkLngsIGRlbm9ybWFsaXplZC55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBbdXBkYXRlIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICAge1ZlY3Rvcn0gIGxvY2F0aW9uICBbbG9jYXRpb24gZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgdXBkYXRlKGxvY2F0aW9uKSB7XG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gobm9ybWFsaXplKGxvY2F0aW9uLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGgsIENvbnN0YW50cy5DQU5WQVNfU0laRS5oZWlnaHQpKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIdWQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQXJyYXkgb2YgaXRlbXMgdG8gcmVuZGVyIGZvciB0aGUgSHVkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB3ZSB3YW50IHRoZSBIVUQgdG8gYmUgdmlzaWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBvc2l0aW9uIG9mIHRoZSBtb3VzZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jdXJzb3JfcG9zaXRpb24gPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgZm9yIHRoZSBjYW52YXMub25Nb3VzZU1vdmUgZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2xpY2tfZXZlbnQgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsIGFsbCB0aGUgcmVuZGVyIGZ1bmN0aW9ucyBvZiBlYWNoIEh1ZEl0ZW1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBDYW52YXMgcmVuZGVyaW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbmRlcihjb250ZXh0KSB7XG4gICAgICAgIC8vIEN1cnJlbnRseSBkb2VzIG5vdGhpbmdcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGN1cnNvciBhbmQgaHVkIGludGVyc2VjdHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBkZWx0YSAgW2RlbHRhIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHByb2Nlc3MoZGVsdGEpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkIGFuIGl0ZW0gdG8gdGhlIEhVRFxuICAgICAqXG4gICAgICogQHBhcmFtICAge0h1ZEl0ZW19ICBpdGVtICBJdGVtIHRoYXQgaW5oZXJpdHMgZnJvbSB0aGUgSHV0SXRlbSBhYnN0cmFjdCBjbGFzc1xuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGEgcmVmZXJlbmNlIHRvIGEgaHVkIGl0ZW0gYnkgbmFtZVxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICBuYW1lICB0aGUgbmFtZSBvZiB0aGUgaHVkIGl0ZW0gdG8gcmV0cmlldmVcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtIdWRJdGVtfG51bGx9ICAgdGhlIGh1ZCBpdGVtIGlmIGZvdW5kIG90aGVyd2lzZSBudWxsLlxuICAgICAqL1xuICAgIGdldEJ5TmFtZShuYW1lKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbaV0ubmFtZSA9PT0gbmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhY2tzIHRoZSBjdXJzb3IgcG9zaXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3J9ICBwb3NpdGlvbiAgUG9zaXRpb24gb2YgdGhlIG1vdXNlLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0Q3Vyc29yUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5jdXJzb3JfcG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIdWRJdGVtIHtcbiAgICAvKipcbiAgICAgKiBIdWQgSXRlbXMgbmVlZCBhIG5hbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBuYW1lICBUaGUgbmFtZSBmb3IgdGhlIGl0ZW1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19XG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsIGFueSB1cGRhdGUgZnVuY3Rpb25zIHRoYXQgbmVlZCB0byBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb25zdGFudHMsIExBWUVSX0NSRUFURV9USU1FLCBMQVlFUl9DUkVBVEVfS0VZUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBIdWRJdGVtIGZyb20gXCIuL2h1ZF9pdGVtXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllcnMgZXh0ZW5kcyBIdWRJdGVtIHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBsYXllcnMgc2VjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtICAge0RyYXdpbmd9ICBkcmF3aW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRyYXdpbmcpIHtcbiAgICAgICAgc3VwZXIoXCJsYXllcnNcIik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbGF5ZXIgd2UncmUgY3VycmVudGx5IHdvcmtpbmcgb25cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY3VycmVudF9sYXllciA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcnJheSBjb250YWluaW5nIGFsbCB0aGUgbGF5ZXJzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxheWVycyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogSFRNTCBDYW52YXMgRVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICB0aGlzLnRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXllcnMnKTtcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gZHJhd2luZztcbiAgICB9XG4gICAgYWRkTGF5ZXIoKSB7XG4gICAgfVxuICAgIGJ1aWxkKCkge1xuICAgICAgICBzd2l0Y2ggKENvbnN0YW50cy5MQVlFUl9DUkVBVEVfQkVIQVZJT1IpIHtcbiAgICAgICAgICAgIGNhc2UgTEFZRVJfQ1JFQVRFX1RJTUU6XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFRpbWUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTEFZRVJfQ1JFQVRFX0tFWVM6XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYnVpbGREZWZhdWx0KCkge1xuICAgICAgICBpZiAoIXRoaXMuZHJhd2luZylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRfbGF5ZXIpIHtcbiAgICAgICAgICAgIC8vdGhpcy5jdXJyZW50X2xheWVyID0gbmV3IExheWVyKHRoaXMudGFyZ2V0LCAxLCAwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBmb3IgKGxldCBba2V5LCBlbnRpdHldIG9mIHRoaXMuZHJhd2luZy5lbnRpdGllcykge1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHRoZSBsYXllcnNcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGJ1aWxkVGltZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyYXdpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy50YXJnZXQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGxldCBjdXJyZW50X3RpbWUgPSAwO1xuICAgICAgICAvL3RoaXMuY3VycmVudF9sYXllciA9IG5ldyBMYXllcih0aGlzLnRhcmdldCwgMSwgaW5kZXgpO1xuICAgICAgICAvLyBmb3IgKGxldCBba2V5LCBlbnRpdHldIG9mIHRoaXMuZHJhd2luZy5lbnRpdGllcykge1xuICAgICAgICAvLyAgIGlmIChlbnRpdHkuY29tcGxldGVkIDwgKGN1cnJlbnRfdGltZSArIENvbnN0YW50cy5MQVlFUl9DUkVBVEVfREVMQVkpKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmN1cnJlbnRfbGF5ZXIuYWRkRW50aXR5KGVudGl0eSk7XG4gICAgICAgIC8vICAgICBjdXJyZW50X3RpbWUgPSBlbnRpdHkuY29tcGxldGVkO1xuICAgICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBpbmRleCsrO1xuICAgICAgICAvLyAgICAgY3VycmVudF90aW1lID0gZW50aXR5LmNvbXBsZXRlZDtcbiAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudF9sYXllciA9IG5ldyBMYXllcih0aGlzLnRhcmdldCwgMSwgaW5kZXgpO1xuICAgICAgICAvLyAgICAgdGhpcy5jdXJyZW50X2xheWVyLmFkZEVudGl0eShlbnRpdHkpO1xuICAgICAgICAvLyAgICAgdGhpcy5sYXllcnMucHVzaCh0aGlzLmN1cnJlbnRfbGF5ZXIpO1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEcmF3IHRoZSBsYXllcnNcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXcoKSB7XG4gICAgICAgIGlmICghdGhpcy50YXJnZXQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIGNsZWFyIHRoZSB0YXJnZXRcbiAgICAgICAgdGhpcy50YXJnZXQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubGF5ZXJzW2ldLmRyYXcoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiLi4vdXRpbC9jb2xvclwiO1xuaW1wb3J0IEh1ZEl0ZW0gZnJvbSBcIi4vaHVkX2l0ZW1cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbGV0dGUgZXh0ZW5kcyBIdWRJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXCJwYWxldHRlXCIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdCBvZiBhdmFpbGFibGUgY29sb3JzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbG9ycyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb2xvclxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZWxlY3RlZF9jb2xvciA9IG5ldyBDb2xvcigwLCAwLCAwLCAwLjUpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb2xvciBpbmRleFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZWxlY3RlZF9jb2xvcl9pbmRleCA9IDE7XG4gICAgICAgIGZvciAodmFyIGNvbG9yIG9mIENvbnN0YW50cy5DT0xPUlMpIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3JzLnB1c2gobmV3IENvbG9yKGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIsIGNvbG9yLmEpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWlsZCB0aGUgVUlcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGJ1aWxkKCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFsZXR0ZScpO1xuICAgICAgICBpZiAoIXRhcmdldClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGFyZ2V0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3JzW2ldLmdldEhleCgpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjb2xvclwiKTtcbiAgICAgICAgICAgIGlmIChpID09PSB0aGlzLnNlbGVjdGVkX2NvbG9yX2luZGV4KVxuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENvbG9ySW5kZXgoaSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhcmdldCA9PT0gbnVsbCB8fCB0YXJnZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhcmdldC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgZHJhd2luZyBjb2xvclxuICAgICAqXG4gICAgICogQHJldHVybiAge0NvbG9yfSAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0Q29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkX2NvbG9yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBpbmRleCBvZiB0aGUgc2VsZWN0ZWQgY29sb3VyIGFuZFxuICAgICAqIHVwZGF0ZXMgdGhlIHNlbGVjdGVkIGNvbG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgaW5kZXhcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHNldENvbG9ySW5kZXgoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZF9jb2xvcl9pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnNlbGVjdGVkX2NvbG9yID0gdGhpcy5jb2xvcnNbdGhpcy5zZWxlY3RlZF9jb2xvcl9pbmRleF07XG4gICAgICAgIC8vIFJ1biBhbnkgR1VJIHVwZGF0ZXNcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllciB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgZm9yIExheWVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7RHJhd2luZ30gIGRyYXdpbmcgIERyYXdpbmcgcmVmZXJlbmNlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlkLCBkcmF3aW5nKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMYXllciBJRFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pZCA9IC0xO1xuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIGRyYXduIGVudGl0aWVzLCB0aGVzZSB3aWxsIGFsbCBnZXRcbiAgICAgICAgICogcHJvY2Vzc2VkIGFuZCByZW5kZXJlZCB3aGVuIHRoZSBuZWVkIHRvIGJlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIgIHtNYXA8bnVtYmVyLCBFbnRpdHk+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhY3RpdmUgZW50aXR5XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFjdGl2ZV9lbnRpdHkgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRW50aXR5IGluY3JlbWVudGFsIG51bWJlciwgdXNlZCB0byB0cmFjayB1bmlxdWUgbnVtZXJpY2FsXG4gICAgICAgICAqIGlkIG9mIGFsbCBlbnRpdGllcyBsb2FkZWQgb250byB0aGUgY2FudmFzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZW50aXR5X2lkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZmVyZW5jZSB0byB0aGUgbWFpbiBEcmF3aW5nXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRyYXdpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuZHJhd2luZyA9IGRyYXdpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZW50aXR5IHRvIHRoZSBnYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7RW50aXR5fSAgZW50aXR5ICBFbnRpdHkgdG8gYWRkIHRvIHRoZSBnYW1ld29ybGRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGFkZEVudGl0eShlbnRpdHkpIHtcbiAgICAgICAgZW50aXR5LmlkID0gdGhpcy5lbnRpdHlfaWQ7XG4gICAgICAgIGVudGl0eS5kcmF3aW5nID0gdGhpcy5kcmF3aW5nO1xuICAgICAgICB0aGlzLmVudGl0aWVzLnNldCh0aGlzLmVudGl0eV9pZCwgZW50aXR5KTtcbiAgICAgICAgdGhpcy5lbnRpdHlfaWQgKz0gMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2FyYmFnZSBjbGVhbiB1cCwgcmVtb3ZlcyBhbnkgZW50aXRpZXMgdGhhdCBhcmUgc2NoZWR1bGUgZm9yIHJlbW92YWxcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbW92ZUVudGl0aWVzKCkge1xuICAgICAgICBjb25zdCBpZHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgW2tleSwgZW50aXR5XSBvZiB0aGlzLmVudGl0aWVzKSB7XG4gICAgICAgICAgICBpZiAoZW50aXR5LnJlbW92ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50aXRpZXMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGdhbWUgRW50aXR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgaWQgIEVudGl0aSBudW1lcmljYWwgSURcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtFbnRpdHl9XG4gICAgICovXG4gICAgZ2V0RW50aXR5KGlkKSB7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuZW50aXRpZXMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKGVudGl0eSlcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gY291bnQgb2YgZW50aXRlcyBieSB0eXBlLCBpZiBubyB0eXBlIHNwZWNpZmllZCxcbiAgICAgKiB0aGVuIHJldHVuciBjb3VudCBvZiBhbGwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgdHlwZSAgRW50aXR5IFR5cGV8TmFtZSBbb3B0aW9uYWxdXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7bnVtYmVyfSAgICAgICAgTnVtYmVyIG9mIGVudGl0aWVzXG4gICAgICovXG4gICAgY291bnRFbnRpdGllcyh0eXBlKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGlmICghdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVudGl0aWVzLnNpemU7XG4gICAgICAgIGZvciAobGV0IFtrZXksIGVudGl0eV0gb2YgdGhpcy5lbnRpdGllcykge1xuICAgICAgICAgICAgaWYgKGVudGl0eS5uYW1lID09IHR5cGUgJiYgZW50aXR5LnJlbW92ZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cbiAgICBwcm9jZXNzKHRpbWUsIHRpbWVzdGFtcCkge1xuICAgICAgICBmb3IgKGxldCBba2V5LCBlbnRpdHldIG9mIHRoaXMuZW50aXRpZXMpIHtcbiAgICAgICAgICAgIGlmIChlbnRpdHkucmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRpdGllcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoY29udGV4dCkge1xuICAgICAgICAvLyBSZW5kZXIgZWFjaCBvZiB0aGUgZXhpc3RpbmcgZW50aXRpdGVzLiAoRHJhd2luZ3MpXG4gICAgICAgIGZvciAobGV0IFtrZXksIGVudGl0eV0gb2YgdGhpcy5lbnRpdGllcykge1xuICAgICAgICAgICAgZW50aXR5LnJlbmRlcihjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZHJhdygpIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsYXllci0ke3RoaXMuaWR9YCk7XG4gICAgICAgIGlmICghY2FudmFzKSB7XG4gICAgICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gMTUwOyAvLyB0aGlzLndpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IDgwOyAvL3RoaXMuaGVpZ2h0O1xuICAgICAgICAgICAgY2FudmFzLmlkID0gYGxheWVyLSR7dGhpcy5pZH1gO1xuICAgICAgICAgICAgY2FudmFzLmNsYXNzTGlzdC5hZGQoJ2xheWVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAvL3RoaXMucGFyZW50Py5pbnNlcnRCZWZvcmUoY2FudmFzLCB0aGlzLnBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgICAgaWYgKGNvbnRleHQgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZm9yIChsZXQgW2tleSwgZW50aXR5XSBvZiB0aGlzLmVudGl0aWVzKSB7XG4gICAgICAgICAgICBlbnRpdHkucmVuZGVyKGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IEZyZWVoYW5kIGZyb20gXCIuLi9lbnRpdGllcy9mcmVlaGFuZFwiO1xuaW1wb3J0IFBlbiBmcm9tIFwiLi9wZW5cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlciBleHRlbmRzIFBlbiB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGZvciBtYXJrZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtNYXJrZXJ9ICBzZWxmXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZHJhd2luZykge1xuICAgICAgICBzdXBlcihkcmF3aW5nLCAnbWFya2VyJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtkcmF3IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIFtjb250ZXh0IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZHJhdyhjb250ZXh0KSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZV9lbnRpdHkpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX2VudGl0eS51cGRhdGUodGhpcy5sb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0RW50aXR5KCkge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuZHJhd2luZy5nZXRDb2xvcigpO1xuICAgICAgICByZXR1cm4gbmV3IEZyZWVoYW5kKHRoaXMuc2l6ZSwgY29sb3IpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xuaW1wb3J0IGRyYXdDaXJjbGUgZnJvbSBcIi4uL3V0aWwvY2lyY2xlXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4uL3V0aWwvY29sb3JcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlbiB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIG5hbWUgIG5hbWUgb3IgdHlwZSBvZiBlbnRpdHlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkcmF3aW5nLCBuYW1lKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOYW1lIG9mIHRoZSBwZW5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9ICcnO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2lkdGggb2YgdGhlIHBlblxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zaXplID0gMjA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUYXJnZXQgQ29sb3JcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGFyZ2V0X2NvbG9yID0gbmV3IENvbG9yKDEyOCwgMTI4LCAyNTUsIDAuMik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMb2NhdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG5ldyBWZWN0b3IoMCwgMCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyB0aGUgcGVuIGRvd24gKGRyYXdpbmcpXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlzX2RyYXdpbmcgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBlbnRpdHkgYmVpbmcgZHJhd25cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWN0aXZlX2VudGl0eSA9IG51bGw7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZHJhd2luZyA9IGRyYXdpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCdzIHRoZSBsb2NhdGlvbiBvZiB0aGUgcGVuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7VmVjdG9yfSAgbG9jYXRpb24gIExvY2F0aW9uIG9mIHRoZSBwZW5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICAgICAgICAgICAgdm9pZFxuICAgICAqL1xuICAgIHNldExvY2F0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RhcnQgZHJhd2luZywgY3JlYXRlIHRoZSBlbnRpdHkgZXRjLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc3RhcnREcmF3aW5nKCkge1xuICAgICAgICB0aGlzLnNldElzRHJhd2luZyh0cnVlKTtcbiAgICAgICAgdGhpcy5hY3RpdmVfZW50aXR5ID0gdGhpcy5nZXRFbnRpdHkoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgc2l6ZSBvZiB0aGUgcG9pbnRlciBicnVzaFxuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIHNpemUgIFtzaXplIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgc2V0U2l6ZShzaXplKSB7XG4gICAgICAgIGlmIChzaXplID4gMClcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IE1hdGgubWluKHNpemUsIDEwMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0b3AgZHJhd2luZywgYXBwbHkgdGhlIGVudGl0eVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgc3RvcERyYXdpbmcoKSB7XG4gICAgICAgIHRoaXMuc2V0SXNEcmF3aW5nKGZhbHNlKTtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlX2VudGl0eSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVfZW50aXR5LmNvbXBsZXRlZCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdpbmcuYWRkRW50aXR5KHRoaXMuYWN0aXZlX2VudGl0eSk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9lbnRpdHkgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGRyYXdpbmcgc3RhdGUgb2YgdGhlIFBlblxuICAgICAqXG4gICAgICogQHBhcmFtICAge2Jvb2xlYW59ICBzdGF0ZSAgSXMgdGhlIHBlbiBkcmF3aW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgICAgICAgICB2b2lkXG4gICAgICovXG4gICAgc2V0SXNEcmF3aW5nKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuaXNfZHJhd2luZyA9IHN0YXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEcmF3IHRoZSBwZW4gdGFyZ2V0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIGRyYXdpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZHJhd1RhcmdldChjb250ZXh0KSB7XG4gICAgICAgIGRyYXdDaXJjbGUoY29udGV4dCwgdGhpcy5sb2NhdGlvbiwgdGhpcy50YXJnZXRfY29sb3IsIHRoaXMuc2l6ZSk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBEcmF3IGEgY2lyY2xlIG9uIHRoZSBjb250ZXh0IGdpdmVuXG4gKlxuICogQHZhciB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgIENhbnZhcyByZW5kZXJpbmcgY29udGV4dCB0byBkcmF3IHdpdGhcbiAqIEB2YXIge1ZlYzIuVmVjdG9yfSAgICAgICAgICAgICAgIGxvY2F0aW9uICBXaGVyZSB0byBkcmF3IHRoZSBjaXJjbGVcbiAqIEB2YXIge0NvbG9yfSAgICAgICAgICAgICAgICAgICAgIGNvbG9yICAgICBDb2xvciB0byBkcmF3IHdpdGhcbiAqIEB2YXIge251bWJlcn0gICAgICAgICAgICAgICAgICAgIHNpemUgICAgICBEaWFtZXRlciBpbiBwaXhlbHNcbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhd0NpcmNsZShjb250ZXh0LCBsb2NhdGlvbiwgY29sb3IsIHNpemUpIHtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQuYXJjKGxvY2F0aW9uLngsIGxvY2F0aW9uLnksIE1hdGgucm91bmQoc2l6ZSAvIDIpLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3IuZ2V0UmdiU3RyaW5nKCk7XG4gICAgY29udGV4dC5maWxsKCk7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvci5nZXRSZ2JTdHJpbmcoKTtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xufVxuIiwiLyoqXG4gKiBDb2xvdXIgaGVscGVyLCB1c2VmdWwgZm9yIGNvbnZlcnRpbmcgYmV0d2VlbiBjb2xvdXIgZm9ybWF0cy5cbiAqIFRoaXMgaXMgcHJvYmFibHkgbm90IHJlYWxseSBuZWVkZWQgZm9yIHRoZSBUUy9KUyB2ZXJzaW9uIGJ1dCBpc1xuICogbW9yZSBvZiBhIGhhbmdvdmVyIGZyb20gdGhlIERhcnQgdmVyc2lvbiBvZiB0aGUgZ2FtZS4gV2FzIGdvb2RcbiAqIGxlYXJuaW5nIGNvbnZlcnRpbmcgaXQgdG8gamF2YXNjcmlwdC90eXBlc2NyaXB0LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvciB7XG4gICAgLyoqXG4gICAgICogW2NvbnN0cnVjdG9yIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIHIgIHJlZCBbMCAtIDI1NV1cbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgZyAgZ3JlZW4gWzAgLSAyNTVdXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIGIgIGJsdWUgWzAgLSAyNTVdXG4gICAgICogQHBhcmFtICAge251bWJlcj99ICBhICBhbHBoYSBbMC4wIC0gMS4wXVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHIsIGcsIGIsIGEpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHJlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGdyZWVuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmcgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogYmx1ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFscGhhXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmEgPSAwLjA7XG4gICAgICAgIHRoaXMuciA9IHI7XG4gICAgICAgIHRoaXMuZyA9IGc7XG4gICAgICAgIHRoaXMuYiA9IGI7XG4gICAgICAgIHRoaXMuYSA9IGEgPyBhIDogMS4wO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIFJHQiB2YWx1ZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtBcnJheTxudW1iZXI+fVxuICAgICAqL1xuICAgIGdldFJnYigpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzLnIsIHRoaXMuZywgdGhpcy5iXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBSR0IgdmFsdWVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7QXJyYXk8bnVtYmVyPn1cbiAgICAgKi9cbiAgICBnZXRSZ2JTdHJpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmEpXG4gICAgICAgICAgICByZXR1cm4gYHJnYmEoJHt0aGlzLnJ9LCAke3RoaXMuZ30sICR7dGhpcy5ifSwgJHt0aGlzLmF9KWA7XG4gICAgICAgIHJldHVybiBgcmdiYSgke3RoaXMucn0sICR7dGhpcy5nfSwgJHt0aGlzLmJ9KWA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBhcnJheSBvZiBIU0wgdmFsdWVzXG4gICAgICpcbiAgICAgKiBGcm9tOiBodHRwczovL2Nzcy10cmlja3MuY29tL2NvbnZlcnRpbmctY29sb3Itc3BhY2VzLWluLWphdmFzY3JpcHQvXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7QXJyYXk8bnVtYmVyPn1cbiAgICAgKi9cbiAgICBnZXRIc2woKSB7XG4gICAgICAgIC8vIE1ha2UgciwgZywgYW5kIGIgZnJhY3Rpb25zIG9mIDFcbiAgICAgICAgY29uc3QgciA9IHRoaXMuciAvIDI1NTtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMuZyAvIDI1NTtcbiAgICAgICAgY29uc3QgYiA9IHRoaXMuYiAvIDI1NTtcbiAgICAgICAgLy8gRmluZCBncmVhdGVzdCBhbmQgc21hbGxlc3QgY2hhbm5lbCB2YWx1ZXNcbiAgICAgICAgbGV0IGNtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICAgICAgbGV0IGNtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICAgICAgbGV0IGRlbHRhID0gY21heCAtIGNtaW47XG4gICAgICAgIGxldCBoID0gMDtcbiAgICAgICAgbGV0IHMgPSAwO1xuICAgICAgICBsZXQgbCA9IDA7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBodWVcbiAgICAgICAgLy8gTm8gZGlmZmVyZW5jZVxuICAgICAgICBpZiAoZGVsdGEgPT0gMCkge1xuICAgICAgICAgICAgaCA9IDA7XG4gICAgICAgICAgICAvLyBSZWQgaXMgbWF4XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY21heCA9PSByKSB7XG4gICAgICAgICAgICBoID0gKChnIC0gYikgLyBkZWx0YSkgJSA2O1xuICAgICAgICAgICAgLy8gR3JlZW4gaXMgbWF4XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY21heCA9PSBnKSB7XG4gICAgICAgICAgICBoID0gKGIgLSByKSAvIGRlbHRhICsgMjtcbiAgICAgICAgICAgIC8vIEJsdWUgaXMgbWF4XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoID0gKHIgLSBnKSAvIGRlbHRhICsgNDtcbiAgICAgICAgfVxuICAgICAgICBoID0gTWF0aC5yb3VuZChoICogNjApO1xuICAgICAgICAvLyBNYWtlIG5lZ2F0aXZlIGh1ZXMgcG9zaXRpdmUgYmVoaW5kIDM2MMKwXG4gICAgICAgIGlmIChoIDwgMCkge1xuICAgICAgICAgICAgaCArPSAzNjA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2FsY3VsYXRlIGxpZ2h0bmVzc1xuICAgICAgICBsID0gKGNtYXggKyBjbWluKSAvIDI7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBzYXR1cmF0aW9uXG4gICAgICAgIHMgPSBkZWx0YSA9PSAwID8gMCA6IGRlbHRhIC8gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKTtcbiAgICAgICAgLy8gTXVsdGlwbHkgbCBhbmQgcyBieSAxMDBcbiAgICAgICAgcyA9ICsocyAqIDEwMCkudG9GaXhlZCgxKTtcbiAgICAgICAgbCA9ICsobCAqIDEwMCkudG9GaXhlZCgxKTtcbiAgICAgICAgcmV0dXJuIFtoLCBzLCBsXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIEhFWCB2YWx1ZSBvZiBjb2xvdXIgKGlubGN1ZGluZyBhbHBoYSlcbiAgICAgKlxuICAgICAqIEZyb206IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vY29udmVydGluZy1jb2xvci1zcGFjZXMtaW4tamF2YXNjcmlwdC9cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SGV4KHdpdGhBbHBoYSA9IHRydWUpIHtcbiAgICAgICAgbGV0IHIgPSB0aGlzLnIudG9TdHJpbmcoMTYpO1xuICAgICAgICBsZXQgZyA9IHRoaXMuZy50b1N0cmluZygxNik7XG4gICAgICAgIGxldCBiID0gdGhpcy5iLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgbGV0IGEgPSAodGhpcy5hICogMjU1KS50b1N0cmluZygxNik7XG4gICAgICAgIGlmIChyLmxlbmd0aCA9PSAxKVxuICAgICAgICAgICAgciA9IFwiMFwiICsgcjtcbiAgICAgICAgaWYgKGcubGVuZ3RoID09IDEpXG4gICAgICAgICAgICBnID0gXCIwXCIgKyBnO1xuICAgICAgICBpZiAoYi5sZW5ndGggPT0gMSlcbiAgICAgICAgICAgIGIgPSBcIjBcIiArIGI7XG4gICAgICAgIGlmIChhLmxlbmd0aCA9PSAxKVxuICAgICAgICAgICAgYSA9IFwiMFwiICsgYTtcbiAgICAgICAgaWYgKCF3aXRoQWxwaGEpXG4gICAgICAgICAgICByZXR1cm4gXCIjXCIgKyByICsgZyArIGI7XG4gICAgICAgIHJldHVybiBcIiNcIiArIHIgKyBnICsgYiArIGE7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKHBvc2l0aW9uLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IoKCgxMDAuIC8gd2lkdGgpICogcG9zaXRpb24ueCkgLyAxMDAuLCAoKDEwMC4gLyBoZWlnaHQpICogcG9zaXRpb24ueSkgLyAxMDAuKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZW5vcm1hbGl6ZShwb3NpdGlvbiwgd2lkdGgsIGhlaWdodCkge1xuICAgIHJldHVybiBuZXcgVmVjdG9yKHBvc2l0aW9uLnggKiB3aWR0aCwgcG9zaXRpb24ueSAqIGhlaWdodCk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVGhlc2UgdmFsdWVzIGFyZSB1c2VkIGJ5IHRoZSBgQWJzdHJhY3RWZWN0b3Iucm91bmRgIG1ldGhvZCB0byBpbmNyZWFzZVxuICogcGVyZm9ybWFuY2UgdnMuIHVzaW5nICBOdW1iZXIudG9GaXhlZC5cbiAqL1xudmFyIHByZWNpc2lvbiA9IFtcbiAgICAxLFxuICAgIDEwLFxuICAgIDEwMCxcbiAgICAxMDAwLFxuICAgIDEwMDAwLFxuICAgIDEwMDAwMCxcbiAgICAxMDAwMDAwLFxuICAgIDEwMDAwMDAwLFxuICAgIDEwMDAwMDAwMCxcbiAgICAxMDAwMDAwMDAwLFxuICAgIDEwMDAwMDAwMDAwXG5dO1xuLyoqXG4gKiBUaGUgY2xhc3MgdGhhdCBhbGwgb3RoZXIgdmVjdG9yIHJlcHJlc2VudGF0aW9ucyBhcmUgZGVyaXZlZCBmcm9tLlxuICpcbiAqIENvbnRhaW5zIHRoZSBjb3JlIGltcGxlbWVudGF0aW9uIGZvciBhbGwgbWV0aG9kcyB0aGF0IHdpbGwgYmUgZXhwb3NlZCBieVxuICogdmVjdG9yIGluc3RhbmNlcy5cbiAqXG4gKiBFeGFtcGxlIG9mIGNyZWF0aW5nIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBBYnN0cmFjdFZlY3RvciB9IGZyb20gXCIuL0Fic3RyYWN0VmVjdG9yXCJcbiAqXG4gKiBleHBvcnQgY2xhc3MgTXlDdXN0b21WZWN0b3IgZXh0ZW5kcyBBYnN0cmFjdFZlY3RvciB7XG4gKiAgY29uc3RydWN0b3IgKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gKiAgICBzdXBlcihDdXN0b21WZWN0b3JUeXBlKVxuICogIH1cbiAqIH1cbiAqIGBgYFxuICovXG52YXIgQWJzdHJhY3RWZWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWJzdHJhY3RWZWN0b3IoY3Rvcikge1xuICAgICAgICB0aGlzLmN0b3IgPSBjdG9yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgYm90aCB4IGFuZCB5IGF4aXMgdmFsdWVcbiAgICAgKiBAcGFyYW0geCAgIE5ldyB4IHZhbFxuICAgICAqIEBwYXJhbSB5ICAgTmV3IHkgdmFsXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnNldEF4ZXMgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldHRlciBmb3IgeCB0aGUgYXhpcyB2YWx1ZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy54O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0dGVyIGZvciB4IGF4aXMgdmFsdWVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuc2V0WCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0dGVyIGZvciB5IGF4aXMgdmFsdWVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHRlciBmb3IgeSBheGlzLlxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5zZXRZID0gZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHZlY3RvciBhcyBhIGZvcm1hdHRlZCBzdHJpbmcsIGUuZyBcIigwLCA0KVwiXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKHJvdW5kKSB7XG4gICAgICAgIGlmIChyb3VuZCA9PT0gdm9pZCAwKSB7IHJvdW5kID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKHJvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gXCIoXCIgKyBNYXRoLnJvdW5kKHRoaXMueCkgKyBcIiwgXCIgKyBNYXRoLnJvdW5kKHRoaXMueSkgKyBcIilcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCIoXCIgKyB0aGlzLnggKyBcIiwgXCIgKyB0aGlzLnkgKyBcIilcIjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiBhbiBBcnJheSBjb250YWluaW5nIHRoZSB2ZWN0b3IgYXhlcywgZS5nIFswLCA0XVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiBhbiBPYmplY3QgY29udGFpbmluZyB0aGUgdmVjdG9yIGF4ZXMsIGUuZyB7IHg6IDAsIHk6IDQgfVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgICAgIHk6IHRoaXMueVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkIHRoZSBwcm92aWRlZCB2ZWN0b3IgdG8gdGhpcyBvbmVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICB0aGlzLnggKz0gdmVjLng7XG4gICAgICAgIHRoaXMueSArPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdCB0aGUgcHJvdmlkZWQgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHRoaXMueCAtPSB2ZWMueDtcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBwcm92aWRlZCB2ZWN0b3IgZXF1YWwgdG8gdGhpcyBvbmVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICByZXR1cm4gdmVjLnggPT09IHRoaXMueCAmJiB2ZWMueSA9PT0gdGhpcy55O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTXVsdGlwbHkgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5tdWx0aXBseUJ5VmVjdG9yID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICB0aGlzLnggKj0gdmVjLng7XG4gICAgICAgIHRoaXMueSAqPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm11bFYgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm11bHRpcGx5QnlWZWN0b3IodmVjKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpdmlkZSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRpdmlkZUJ5VmVjdG9yID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICB0aGlzLnggLz0gdmVjLng7XG4gICAgICAgIHRoaXMueSAvPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXZpZGUgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kaXZWID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGl2aWRlQnlWZWN0b3Iodik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgbnVtYmVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm11bHRpcGx5QnlTY2FsYXIgPSBmdW5jdGlvbiAobikge1xuICAgICAgICB0aGlzLnggKj0gbjtcbiAgICAgICAgdGhpcy55ICo9IG47XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTXVsdGlwbHkgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIG51bWJlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5tdWxTID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHlCeVNjYWxhcihuKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpdml2ZSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgbnVtYmVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRpdmlkZUJ5U2NhbGFyID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgdGhpcy54IC89IG47XG4gICAgICAgIHRoaXMueSAvPSBuO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpdml2ZSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgbnVtYmVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRpdlMgPSBmdW5jdGlvbiAobikge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGVCeVNjYWxhcihuKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE5vcm1hbGlzZSB0aGlzIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5ub3JtYWxpc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpdmlkZUJ5U2NhbGFyKHRoaXMubWFnbml0dWRlKCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRm9yIEFtZXJpY2FuIHNwZWxsaW5nLiBTYW1lIGFzIHVuaXQvbm9ybWFsaXNlIGZ1bmN0aW9uXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXNlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUgc2FtZSBhcyBub3JtYWxpc2UgYW5kIG5vcm1hbGl6ZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS51bml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpc2UoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1hZ25pdHVkZSAobGVuZ3RoKSBvZiB0aGlzIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5tYWduaXR1ZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB4ID0gdGhpcy54O1xuICAgICAgICB2YXIgeSA9IHRoaXMueTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1hZ25pdHVkZSAobGVuZ3RoKSBvZiB0aGlzIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5sZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hZ25pdHVkZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc3F1cmVkIGxlbmd0aCBvZiB0aGlzIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5sZW5ndGhTcSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHggPSB0aGlzLng7XG4gICAgICAgIHZhciB5ID0gdGhpcy55O1xuICAgICAgICByZXR1cm4geCAqIHggKyB5ICogeTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRvdCBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGJ5IGFub3RoZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZG90ID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICByZXR1cm4gdmVjLnggKiB0aGlzLnggKyB2ZWMueSAqIHRoaXMueTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYnkgYW5vdGhlci5cbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuY3Jvc3MgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2ZWMueSAtIHRoaXMueSAqIHZlYy54O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV2ZXJzZXMgdGhpcyB2ZWN0b3IgaS5lIG11bHRpcGxpZXMgaXQgYnkgLTFcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy54ID0gLXRoaXMueDtcbiAgICAgICAgdGhpcy55ID0gLXRoaXMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHZlY3RvciBheGVzIHZhbHVlcyB0byBhYnNvbHV0ZSB2YWx1ZXNcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuYWJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLmFicyh0aGlzLngpO1xuICAgICAgICB0aGlzLnkgPSBNYXRoLmFicyh0aGlzLnkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFplcm9lcyB0aGUgdmVjdG9yIGkuZSBzZXRzIGFsbCBheGVzIHRvIDBcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuemVybyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy54ID0gdGhpcy55ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRpc3RhbmNlID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgdmFyIHggPSB0aGlzLnggLSB2Lng7XG4gICAgICAgIHZhciB5ID0gdGhpcy55IC0gdi55O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgdmV0b3IgYnkgcHJvdmlkZWQgcmFkaWFuc1xuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5yb3RhdGUgPSBmdW5jdGlvbiAocmFkcykge1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MocmFkcyk7XG4gICAgICAgIHZhciBzaW4gPSBNYXRoLnNpbihyYWRzKTtcbiAgICAgICAgdmFyIG94ID0gdGhpcy54O1xuICAgICAgICB2YXIgb3kgPSB0aGlzLnk7XG4gICAgICAgIHRoaXMueCA9IG94ICogY29zIC0gb3kgKiBzaW47XG4gICAgICAgIHRoaXMueSA9IG94ICogc2luICsgb3kgKiBjb3M7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUm91bmRzIHRoaXMgdmVjdG9yIHRvIG4gZGVjaW1hbCBwbGFjZXNcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUucm91bmQgPSBmdW5jdGlvbiAobikge1xuICAgICAgICBpZiAobiA9PT0gdm9pZCAwKSB7IG4gPSAyOyB9XG4gICAgICAgIHZhciBwID0gcHJlY2lzaW9uW25dO1xuICAgICAgICAvLyBUaGlzIHBlcmZvcm1zIHdhYWF5IGJldHRlciB0aGFuIHRvRml4ZWQgYW5kIGdpdmUgRmxvYXQzMiB0aGUgZWRnZSBhZ2Fpbi5cbiAgICAgICAgLy8gaHR0cDovL3d3dy5keW5hbWljZ3VydS5jb20vamF2YXNjcmlwdC9yb3VuZC1udW1iZXJzLXdpdGgtcHJlY2lzaW9uL1xuICAgICAgICB0aGlzLnggPSAoKDAuNSArIHRoaXMueCAqIHApIDw8IDApIC8gcDtcbiAgICAgICAgdGhpcy55ID0gKCgwLjUgKyB0aGlzLnkgKiBwKSA8PCAwKSAvIHA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGNvcHkgb2YgdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgICB9O1xuICAgIHJldHVybiBBYnN0cmFjdFZlY3Rvcjtcbn0oKSk7XG5leHBvcnRzLkFic3RyYWN0VmVjdG9yID0gQWJzdHJhY3RWZWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BYnN0cmFjdFZlY3Rvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFic3RyYWN0VmVjdG9yXzEgPSByZXF1aXJlKFwiLi9BYnN0cmFjdFZlY3RvclwiKTtcbi8qKlxuICogQSB2ZWN0b3IgcmVwcmVzZW50YXRpb24gdGhhdCBzdG9yZXMgdGhlIGF4ZXMgaW4gYW4gQXJyYXlcbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHYgPSBuZXcgVmVjMkQuQXJyYXlWZWN0b3IoMiwgNSlcbiAqIGBgYFxuICovXG52YXIgQXJyYXlWZWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFycmF5VmVjdG9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFycmF5VmVjdG9yKHgsIHkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgQXJyYXlWZWN0b3IpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmF4ZXMgPSBbeCwgeV07XG4gICAgICAgIF90aGlzLmN0b3IgPSBBcnJheVZlY3RvcjtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXlWZWN0b3IucHJvdG90eXBlLCBcInhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF4ZXNbMF07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHRoaXMuYXhlc1swXSA9IHg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheVZlY3Rvci5wcm90b3R5cGUsIFwieVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXhlc1sxXTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeSkge1xuICAgICAgICAgICAgdGhpcy5heGVzWzFdID0geTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEFycmF5VmVjdG9yO1xufShBYnN0cmFjdFZlY3Rvcl8xLkFic3RyYWN0VmVjdG9yKSk7XG5leHBvcnRzLkFycmF5VmVjdG9yID0gQXJyYXlWZWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BcnJheVZlY3Rvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFic3RyYWN0VmVjdG9yXzEgPSByZXF1aXJlKFwiLi9BYnN0cmFjdFZlY3RvclwiKTtcbi8qKlxuICogQSB2ZWN0b3IgcmVwcmVzZW50YXRpb24gdGhhdCBzdG9yZXMgdGhlIGF4ZXMgaW4gYSBGbG9hdDMyQXJyYXlcbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHYgPSBuZXcgVmVjMkQuRmxvYXQzMlZlY3RvcigyLCA1KVxuICogYGBgXG4gKi9cbnZhciBGbG9hdDMyVmVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGbG9hdDMyVmVjdG9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZsb2F0MzJWZWN0b3IoeCwgeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBGbG9hdDMyVmVjdG9yKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5heGVzID0gbmV3IEZsb2F0MzJBcnJheSgyKTtcbiAgICAgICAgX3RoaXMuYXhlc1swXSA9IHg7XG4gICAgICAgIF90aGlzLmF4ZXNbMV0gPSB5O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGbG9hdDMyVmVjdG9yLnByb3RvdHlwZSwgXCJ4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5heGVzWzBdO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICB0aGlzLmF4ZXNbMF0gPSB4O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmxvYXQzMlZlY3Rvci5wcm90b3R5cGUsIFwieVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXhlc1sxXTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeSkge1xuICAgICAgICAgICAgdGhpcy5heGVzWzFdID0geTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEZsb2F0MzJWZWN0b3I7XG59KEFic3RyYWN0VmVjdG9yXzEuQWJzdHJhY3RWZWN0b3IpKTtcbmV4cG9ydHMuRmxvYXQzMlZlY3RvciA9IEZsb2F0MzJWZWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1GbG9hdDMyVmVjdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL0Fic3RyYWN0VmVjdG9yXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL0FycmF5VmVjdG9yXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL0Zsb2F0MzJWZWN0b3JcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vVmVjdG9yXCIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZlYzJELmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQWJzdHJhY3RWZWN0b3JfMSA9IHJlcXVpcmUoXCIuL0Fic3RyYWN0VmVjdG9yXCIpO1xuLyoqXG4gKiBBIHZlY3RvciByZXByZXNlbnRhdGlvbiB0aGF0IHN0b3JlcyB0aGUgYXhlcyBhcyBwYXJ0IG9mIHRoZSBpbnN0YW5jZSBpdHNlbGZcbiAqXG4gKiBgYGB0c1xuICogY29uc3QgdiA9IG5ldyBWZWMyRC5WZWN0b3IoMiwgNSlcbiAqIGBgYFxuICovXG52YXIgVmVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhWZWN0b3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVmVjdG9yKHgsIHkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgVmVjdG9yKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5feCA9IHg7XG4gICAgICAgIF90aGlzLl95ID0geTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yLnByb3RvdHlwZSwgXCJ4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5feDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgdGhpcy5feCA9IHg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IucHJvdG90eXBlLCBcInlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl95O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh5KSB7XG4gICAgICAgICAgICB0aGlzLl95ID0geTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFZlY3Rvcjtcbn0oQWJzdHJhY3RWZWN0b3JfMS5BYnN0cmFjdFZlY3RvcikpO1xuZXhwb3J0cy5WZWN0b3IgPSBWZWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1WZWN0b3IuanMubWFwIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zY3NzL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuLyoqXG4gKiBRdWVyeSBzZWxlY3RvciBzdHJpbmdcbiAqIGZvciB0aGUgY2FudmFzIHRhcmdldFxuICovXG5jb25zdCB0YXJnZXQgPSBgIyR7Q29uc3RhbnRzLkNBTlZBU19UQVJHRVR9YDtcbigoKSA9PiB7XG4gICAgLy8gVGhpcyBpcyBvdXIgdGFyZ2V0IGNhbnZhc1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgICBpZiAoY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgLy8gVXNpbmcgdGhlIDJEIGNvbnRleHRcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBpZiAoY29udGV4dCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBDcmVhdGUgR2FtZSBvYmplY3QuXG4gICAgICAgIGNvbnN0IGFwcCA9IG5ldyBBcHAoY2FudmFzLCBjb250ZXh0KTtcbiAgICAgICAgLy8gRGVmaW5lIGdhbWVsb29wIGFuZCBwcm9jZXNzLlxuICAgICAgICBjb25zdCBhbmltYXRpb25Mb29wID0gKHRpbWVzdGFtcCkgPT4ge1xuICAgICAgICAgICAgYXBwLnByb2Nlc3ModGltZXN0YW1wKTtcbiAgICAgICAgICAgIC8vIEtlZXAgcmVxdWVzdGluZyBuZXcgZnJhbWVzXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkxvb3ApO1xuICAgICAgICB9O1xuICAgICAgICAvLyBCb290c3RyYXAgYW55IHNldHVwIHN0dWZmXG4gICAgICAgIGFwcC5zZXRVcCgpO1xuICAgICAgICAvLyBTdGFydCB0aGUgcmVuZGVybG9vcC5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb25Mb29wKTtcbiAgICB9XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9