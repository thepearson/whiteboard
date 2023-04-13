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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  overflow: hidden;\n}\n\n#drawing-canvas {\n  background-color: #fff;\n}\n\n#palette {\n  justify-content: space-around;\n  transform: translate(-50%, 0);\n  position: fixed;\n  display: flex;\n  height: 120px;\n  bottom: 0;\n  left: 50%;\n  padding-bottom: 20px;\n  pointer-events: none;\n}\n#palette .color {\n  margin: 20px;\n  pointer-events: all;\n  width: 80px;\n  cursor: pointer;\n  height: 80px;\n  border-radius: 50%;\n  border: 10px solid rgba(255, 255, 255, 0);\n}\n#palette .color:hover {\n  border: 10px solid rgba(255, 255, 255, 0.8);\n}\n#palette .color.selected {\n  border: 10px solid rgba(204, 204, 255, 0.7);\n}\n\n#layers {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  top: 0px;\n  right: 0px;\n  height: 100%;\n  pointer-events: none;\n  margin: 40px;\n}\n#layers .layer {\n  pointer-events: auto;\n  background-color: rgba(255, 255, 255, 0.7);\n  border: 1px solid #cacaca;\n  border-radius: 2%;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n#layers .active {\n  border: 2px solid rgb(255, 128, 0);\n}\n#layers .layer:hover {\n  background-color: rgb(255, 255, 255);\n}\n\n#help.visible {\n  font-family: Arial, Helvetica, sans-serif;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 2px solid #cdcdcd;\n  background-color: rgb(240, 240, 240);\n  width: 50%;\n  height: 50%;\n  border-radius: 1rem;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n#help.visible .header {\n  height: 8rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n#help.visible .header button {\n  border: 0;\n  font-size: 1.5rem;\n  cursor: pointer;\n  height: 1rem;\n}\n#help.visible .header h2 {\n  font-size: 3rem;\n}\n#help.visible h3 {\n  font-size: 2rem;\n  height: 4rem;\n}\n#help.visible .body {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n}\n#help.visible .body .left {\n  width: 50%;\n  padding-right: 2rem;\n}\n#help.visible .body .left p {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n#help.visible .body .right {\n  width: 50%;\n}\n#help.visible .body .right dl.inline-flex {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: wrap;\n  width: 100%;\n  /* set the container width*/\n  overflow: visible;\n}\n#help.visible .body .right dl.inline-flex dt {\n  font-size: 1.5rem;\n  height: 2rem;\n  flex: 0 0 15%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n#help.visible .body .right dl.inline-flex dd {\n  font-size: 1.5rem;\n  flex: 0 0 85%;\n  height: 2rem;\n  margin-left: auto;\n  text-align: left;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}", "",{"version":3,"sources":["webpack://./src/scss/styles.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,SAAA;EACA,UAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,sBAAA;AACF;;AAEA;EACE,6BAAA;EACA,6BAAA;EACA,eAAA;EACA,aAAA;EACA,aAAA;EACA,SAAA;EACA,SAAA;EACA,oBAAA;EACA,oBAAA;AACF;AACE;EACE,YAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,yCAAA;AACJ;AAAI;EACE,2CAAA;AAEN;AAAI;EACE,2CAAA;AAEN;;AAGA;EACE,eAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;EACA,UAAA;EACA,YAAA;EACA,oBAAA;EAEA,YAAA;AADF;AAGE;EACE,oBAAA;EACA,0CAAA;EACA,yBAAA;EACA,iBAAA;EACA,mBAAA;EACA,eAAA;AADJ;AAIE;EACE,kCAAA;AAFJ;AAKE;EACE,oCAAA;AAHJ;;AAOA;EACE,yCAAA;EACA,eAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;EACA,yBAAA;EACA,oCAAA;EACA,UAAA;EACA,WAAA;EACA,mBAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;AAJF;AAME;EACE,YAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AAJJ;AAMI;EACE,SAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;AAJN;AAOI;EACE,eAAA;AALN;AASE;EACE,eAAA;EACA,YAAA;AAPJ;AAUE;EACE,aAAA;EACA,mBAAA;EACA,YAAA;AARJ;AAUI;EACE,UAAA;EACA,mBAAA;AARN;AASM;EACE,iBAAA;EACA,iBAAA;AAPR;AAWI;EACE,UAAA;AATN;AAWI;EACE,aAAA;EACA,cAAA;EACA,eAAA;EACA,WAAA;EACA,2BAAA;EACA,iBAAA;AATN;AAYI;EACE,iBAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,gBAAA;AAVN;AAaI;EACE,iBAAA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;EACA,gBAAA;EACA,uBAAA;EACA,gBAAA;AAXN","sourcesContent":["* {\n  font-size: 16px;\n  margin:0;\n  padding:0;\n}\n\nbody {\n  overflow:hidden;\n}\n\n#drawing-canvas {\n  background-color: #fff;\n}\n\n#palette {\n  justify-content: space-around;\n  transform: translate(-50%, 0);\n  position: fixed;\n  display: flex;\n  height: 120px;\n  bottom: 0;\n  left: 50%;\n  padding-bottom: 20px;\n  pointer-events: none;\n\n  .color {\n    margin: 20px;\n    pointer-events: all;\n    width: 80px;\n    cursor: pointer;\n    height: 80px;\n    border-radius: 50%;\n    border: 10px solid rgba(255, 255, 255, 0);\n    &:hover {\n      border: 10px solid rgba(255, 255, 255, 0.8);\n    }\n    &.selected {\n      border: 10px solid rgba(204, 204, 255, 0.7);\n    }\n  }\n}\n\n#layers {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  top: 0px;\n  right: 0px;\n  height: 100%;\n  pointer-events: none;\n\n  margin: 40px;\n\n  .layer {\n    pointer-events: auto;\n    background-color: rgba(255, 255, 255, 0.7);\n    border: 1px solid #cacaca;\n    border-radius: 2%;\n    margin-bottom: 20px;\n    cursor: pointer;\n  }\n\n  .active {\n    border: 2px solid rgb(255, 128, 0);\n  }\n\n  .layer:hover {\n    background-color: rgba(255, 255, 255, 1.0);\n  }\n}\n\n#help.visible {\n  font-family: Arial, Helvetica, sans-serif;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 2px solid #cdcdcd;\n  background-color: rgb(240, 240, 240);\n  width: 50%;\n  height: 50%;\n  border-radius: 1rem;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n\n  .header {\n    height: 8rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n\n    button {\n      border: 0;\n      font-size: 1.5rem;\n      cursor: pointer;\n      height: 1rem;\n    }\n  \n    h2 {\n      font-size: 3rem;\n    }\n  }\n\n  h3 {\n    font-size: 2rem;\n    height: 4rem;\n  }\n\n  .body {\n    display: flex;\n    flex-direction: row;\n    height: 100%;\n\n    .left {\n      width: 50%;\n      padding-right: 2rem;\n      p {\n        font-size: 1.5rem;\n        line-height: 2rem;\n      }\n    }\n\n    .right {\n      width: 50%;\n\n    dl.inline-flex {\n      display: flex;\n      flex-flow: row;\n      flex-wrap: wrap;\n      width: 100%;\n      /* set the container width*/\n      overflow: visible;\n    }\n\n    dl.inline-flex dt {\n      font-size: 1.5rem;\n      height: 2rem;\n      flex: 0 0 15%;\n      text-overflow: ellipsis;\n      overflow: hidden;\n    }\n\n    dl.inline-flex dd {\n      font-size: 1.5rem;\n      flex: 0 0 85%;\n      height: 2rem;\n      margin-left: auto;\n      text-align: left;\n      text-overflow: ellipsis;\n      overflow: hidden;\n    }\n    }\n  }\n    \n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _util_key_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/key_events */ "./src/util/key_events.ts");








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
         * Event for the canvas.onKeyDown event
         */
        this.key_down = null;
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
        var _a;
        // Create world
        this.drawing = new _drawing__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.drawing.setPen(new _tools_marker__WEBPACK_IMPORTED_MODULE_3__["default"](this.drawing));
        //this.drawing.setPallette(new Pallette());
        // Items to the hud
        const hud = new _hud_hud__WEBPACK_IMPORTED_MODULE_5__["default"]();
        const palette = new _hud_palette__WEBPACK_IMPORTED_MODULE_4__["default"]();
        palette.setColorIndex(0);
        hud.addItem(palette);
        this.drawing.addLayer();
        const layers = new _hud_layers__WEBPACK_IMPORTED_MODULE_6__["default"](this.drawing);
        hud.addItem(layers);
        layers.build();
        this.drawing.hud = hud;
        (_a = document.querySelector("#help #close")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (event) => {
            const help = document.getElementById("help");
            help === null || help === void 0 ? void 0 : help.classList.remove("visible");
        });
        // Handle Keyboard events;
        const keyEventHandler = new _util_key_events__WEBPACK_IMPORTED_MODULE_7__["default"](this.drawing);
        document.addEventListener('keydown', (event) => {
            keyEventHandler.handle(event);
        });
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
     * Remove a Layer from the canvas
     *
     * @param   {number}  id  Numebrical ID of the entity
     *
     * @return  {void}
     */
    removeLayer(id) {
        if (id === undefined) {
            return;
        }
        this.layers.delete(id);
        if (this.layers.has(id - 1)) {
            this.active_layer = this.layers.get(id - 1);
        }
        else if (this.layers.has(id + 1)) {
            this.active_layer = this.layers.get(id + 1);
        }
        else {
            if (this.layers.size === 0) {
                this.layers.clear();
                this.addLayer();
            }
            else {
                this.active_layer = this.layers.get(Math.min(...this.layers.keys()));
            }
        }
        this.redrawHud();
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
    redrawHud() {
        var _a, _b;
        (_b = (_a = this.hud) === null || _a === void 0 ? void 0 : _a.getByName("layers")) === null || _b === void 0 ? void 0 : _b.build();
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
        this.redrawHud();
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
        this.redrawHud();
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
         * HTML Canvas E
         */
        this.target = null;
        this.target = document.getElementById('layers');
        this.drawing = drawing;
    }
    /**
     * Build the layers UI
     *
     * @return  {void}
     */
    build() {
        if (!this.drawing)
            return;
        if (!this.target)
            return;
        this.target.innerHTML = '';
        const width = _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.LAYERS_WIDTH;
        const height = (width / _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width) * _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height;
        for (let [key, layer] of this.drawing.layers) {
            layer.draw(this.target, width, height, this.drawing.active_layer === layer);
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
     * Handles the UI drawing of a layer
     *
     * @param   {HTMLDivElement}     parent  [parent description]
     * @param   {number}             width   [width description]
     * @param   {number}             height  [height description]
     *
     * @return  {void}                       [return description]
     */
    draw(parent, width, height, active) {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.id = `layer-${this.id}`;
        canvas.classList.add('layer');
        if (active) {
            canvas.classList.add('active');
        }
        const context = canvas.getContext('2d');
        parent === null || parent === void 0 ? void 0 : parent.insertBefore(canvas, parent.firstChild);
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

/***/ "./src/util/key_events.ts":
/*!********************************!*\
  !*** ./src/util/key_events.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KeyEvents)
/* harmony export */ });
class KeyEvents {
    constructor(drawing) {
        this.drawing = null;
        this.drawing = drawing;
    }
    handle(event) {
        var _a, _b, _c, _d, _e, _f;
        switch (event.key) {
            case 'a':
                (_a = this.drawing) === null || _a === void 0 ? void 0 : _a.addLayer();
                break;
            case 'x':
                (_b = this.drawing) === null || _b === void 0 ? void 0 : _b.removeLayer((_d = (_c = this.drawing) === null || _c === void 0 ? void 0 : _c.active_layer) === null || _d === void 0 ? void 0 : _d.id);
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
                const palette = (_f = (_e = this.drawing) === null || _e === void 0 ? void 0 : _e.hud) === null || _f === void 0 ? void 0 : _f.getByName('palette');
                palette.setColorIndex(parseInt(event.key) - 1);
                break;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCa0M7QUFDM0I7QUFDUCxlQUFlLDRDQUFNO0FBQ3JCO0FBQ087QUFDUCxlQUFlLDRDQUFNO0FBQ3JCOzs7Ozs7Ozs7OztBQ05hO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlCQUFpQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3M/MzIxZiIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvZHJhd2luZy50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2VudGl0aWVzL2VudGl0eS50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2VudGl0aWVzL2ZyZWVoYW5kLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvaHVkL2h1ZC50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2h1ZC9odWRfaXRlbS50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2h1ZC9sYXllcnMudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9odWQvcGFsZXR0ZS50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL3Rvb2xzL2xheWVyLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdG9vbHMvbWFya2VyLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdG9vbHMvcGVuLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdXRpbC9jaXJjbGUudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy91dGlsL2NvbG9yLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdXRpbC9rZXlfZXZlbnRzLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdXRpbC9ub3JtYWxpemUudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvQWJzdHJhY3RWZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvQXJyYXlWZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvRmxvYXQzMlZlY3Rvci5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9WZWMyRC5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9WZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3doaXRlYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3doaXRlYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jZHJhd2luZy1jYW52YXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuI3BhbGV0dGUge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuI3BhbGV0dGUgLmNvbG9yIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICB3aWR0aDogODBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogODBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbn1cXG4jcGFsZXR0ZSAuY29sb3I6aG92ZXIge1xcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuI3BhbGV0dGUgLmNvbG9yLnNlbGVjdGVkIHtcXG4gIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDIwNCwgMjA0LCAyNTUsIDAuNyk7XFxufVxcblxcbiNsYXllcnMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0b3A6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG1hcmdpbjogNDBweDtcXG59XFxuI2xheWVycyAubGF5ZXIge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xcbiAgYm9yZGVyLXJhZGl1czogMiU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jbGF5ZXJzIC5hY3RpdmUge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMTI4LCAwKTtcXG59XFxuI2xheWVycyAubGF5ZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4jaGVscC52aXNpYmxlIHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjZGNkY2Q7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jaGVscC52aXNpYmxlIC5oZWFkZXIge1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiNoZWxwLnZpc2libGUgLmhlYWRlciBidXR0b24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDFyZW07XFxufVxcbiNoZWxwLnZpc2libGUgLmhlYWRlciBoMiB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcbiNoZWxwLnZpc2libGUgaDMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG4jaGVscC52aXNpYmxlIC5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jaGVscC52aXNpYmxlIC5ib2R5IC5sZWZ0IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbn1cXG4jaGVscC52aXNpYmxlIC5ib2R5IC5sZWZ0IHAge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuI2hlbHAudmlzaWJsZSAuYm9keSAucmlnaHQge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuI2hlbHAudmlzaWJsZSAuYm9keSAucmlnaHQgZGwuaW5saW5lLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBzZXQgdGhlIGNvbnRhaW5lciB3aWR0aCovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuI2hlbHAudmlzaWJsZSAuYm9keSAucmlnaHQgZGwuaW5saW5lLWZsZXggZHQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBmbGV4OiAwIDAgMTUlO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4jaGVscC52aXNpYmxlIC5ib2R5IC5yaWdodCBkbC5pbmxpbmUtZmxleCBkZCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZsZXg6IDAgMCA4NSU7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQUNKO0FBQUk7RUFDRSwyQ0FBQTtBQUVOO0FBQUk7RUFDRSwyQ0FBQTtBQUVOOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBRUEsWUFBQTtBQURGO0FBR0U7RUFDRSxvQkFBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURKO0FBSUU7RUFDRSxrQ0FBQTtBQUZKO0FBS0U7RUFDRSxvQ0FBQTtBQUhKOztBQU9BO0VBQ0UseUNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUpGO0FBTUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFKSjtBQU1JO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFKTjtBQU9JO0VBQ0UsZUFBQTtBQUxOO0FBU0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQVBKO0FBVUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBUko7QUFVSTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQVJOO0FBU007RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBUFI7QUFXSTtFQUNFLFVBQUE7QUFUTjtBQVdJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUFUTjtBQVlJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFWTjtBQWFJO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBWE5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46MDtcXG4gIHBhZGRpbmc6MDtcXG59XFxuXFxuYm9keSB7XFxuICBvdmVyZmxvdzpoaWRkZW47XFxufVxcblxcbiNkcmF3aW5nLWNhbnZhcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jcGFsZXR0ZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA1MCU7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgLmNvbG9yIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIH1cXG4gICAgJi5zZWxlY3RlZCB7XFxuICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYmEoMjA0LCAyMDQsIDI1NSwgMC43KTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4jbGF5ZXJzIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdG9wOiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFxuICBtYXJnaW46IDQwcHg7XFxuXFxuICAubGF5ZXIge1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDEyOCwgMCk7XFxuICB9XFxuXFxuICAubGF5ZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEuMCk7XFxuICB9XFxufVxcblxcbiNoZWxwLnZpc2libGUge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2NkY2RjZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA4cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBoZWlnaHQ6IDFyZW07XFxuICAgIH1cXG4gIFxcbiAgICBoMiB7XFxuICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgfVxcblxcbiAgLmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIC5sZWZ0IHtcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxuICAgICAgcCB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAucmlnaHQge1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuXFxuICAgIGRsLmlubGluZS1mbGV4IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZmxvdzogcm93O1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAvKiBzZXQgdGhlIGNvbnRhaW5lciB3aWR0aCovXFxuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIH1cXG5cXG4gICAgZGwuaW5saW5lLWZsZXggZHQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICBmbGV4OiAwIDAgMTUlO1xcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgZGwuaW5saW5lLWZsZXggZGQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIGZsZXg6IDAgMCA4NSU7XFxuICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcbiAgICB9XFxuICB9XFxuICAgIFxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgKiBhcyBWZWMyIGZyb20gXCJ2ZWN0b3IyZFwiO1xuaW1wb3J0IERyYXdpbmcgZnJvbSBcIi4vZHJhd2luZ1wiO1xuaW1wb3J0IE1hcmtlciBmcm9tIFwiLi90b29scy9tYXJrZXJcIjtcbmltcG9ydCBQYWxldHRlIGZyb20gXCIuL2h1ZC9wYWxldHRlXCI7XG5pbXBvcnQgSHVkIGZyb20gXCIuL2h1ZC9odWRcIjtcbmltcG9ydCBMYXllcnMgZnJvbSBcIi4vaHVkL2xheWVyc1wiO1xuaW1wb3J0IEtleUV2ZW50cyBmcm9tIFwiLi91dGlsL2tleV9ldmVudHNcIjtcbi8qKlxuICogVGhlIHRvcC1sZXZlbCBHYW1lIGNsYXNzLCBtYW5hZ2VzIHNldHVwLCBiYXNlIGxvb3AsIGFuZCBldmVudHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQHBhcmFtICAge0hUTUxDYW52YXNFbGVtZW50fSAgICAgICAgIGNhbnZhcyAgIFRoaXMgaXMgdGhlIHRhcmdldCBjYW52YXMgZm9yIG91ciBnYW1lXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIFRoaXMgaXMgdGhlIGNvbnRldCBmb3IgdGhlIGNhbnZhc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY29udGV4dCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgZm9yIHRoZSBjYW52YXMub25LZXlEb3duIGV2ZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmtleV9kb3duID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IGZvciB0aGUgY2FudmFzLm9uTW91c2VNb3ZlIGV2ZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdXNlX21vdmUgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgZm9yIHRoZSBjYW52YXMub25Nb3VzZU1vdmUgZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2Vfd2hlZWwgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgZm9yIHRoZSBjYW52YXMub25Nb3VzZURvd24gZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2VfZG93biA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBmb3IgdGhlIGNhbnZhcy5vbk1vdXNlVXAgZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2VfdXAgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRHJhd2luZyBjYW52YXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2FudmFzID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRpbWVzdGFtcCB3aGVuIGxhc3QgZnJhbWUgd2FzIHByb2Nlc3NlZFxuICAgICAgICAgKiB1c2VkIGZvciBjYWxjdWxhdGluZyB0aGUgZGVsdGFUaW1lIGFuZFxuICAgICAgICAgKiBGUFMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9sZFRpbWVzdGFtcCA9IDAuMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhvbGRlciBmb3IgRlBTLCB1c2VmdWwgd2hlbiBuZWVkaW5nIHRvIHJlbmRlclxuICAgICAgICAgKiB0aGlzIHdpdGhpbiB0aGUgZ2FtZSBlbnZpcm9ubWVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mcHMgPSAwO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgLy8gU2V0IGNhbnZhcyBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCb290c3RyYXAgZnVuY3Rpb24sIHVzZWQgZm9yIHNldHRpbmdcbiAgICAgKiBldmVyeXRoaW5nIHVwIHByaW9yIHRvIGtpY2tpbmcgb2ZmIHRoZSByZW5kZXJMb29wXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXRVcCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBDcmVhdGUgd29ybGRcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gbmV3IERyYXdpbmcoKTtcbiAgICAgICAgdGhpcy5kcmF3aW5nLnNldFBlbihuZXcgTWFya2VyKHRoaXMuZHJhd2luZykpO1xuICAgICAgICAvL3RoaXMuZHJhd2luZy5zZXRQYWxsZXR0ZShuZXcgUGFsbGV0dGUoKSk7XG4gICAgICAgIC8vIEl0ZW1zIHRvIHRoZSBodWRcbiAgICAgICAgY29uc3QgaHVkID0gbmV3IEh1ZCgpO1xuICAgICAgICBjb25zdCBwYWxldHRlID0gbmV3IFBhbGV0dGUoKTtcbiAgICAgICAgcGFsZXR0ZS5zZXRDb2xvckluZGV4KDApO1xuICAgICAgICBodWQuYWRkSXRlbShwYWxldHRlKTtcbiAgICAgICAgdGhpcy5kcmF3aW5nLmFkZExheWVyKCk7XG4gICAgICAgIGNvbnN0IGxheWVycyA9IG5ldyBMYXllcnModGhpcy5kcmF3aW5nKTtcbiAgICAgICAgaHVkLmFkZEl0ZW0obGF5ZXJzKTtcbiAgICAgICAgbGF5ZXJzLmJ1aWxkKCk7XG4gICAgICAgIHRoaXMuZHJhd2luZy5odWQgPSBodWQ7XG4gICAgICAgIChfYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVscCAjY2xvc2VcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVscFwiKTtcbiAgICAgICAgICAgIGhlbHAgPT09IG51bGwgfHwgaGVscCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVscC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEhhbmRsZSBLZXlib2FyZCBldmVudHM7XG4gICAgICAgIGNvbnN0IGtleUV2ZW50SGFuZGxlciA9IG5ldyBLZXlFdmVudHModGhpcy5kcmF3aW5nKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAga2V5RXZlbnRIYW5kbGVyLmhhbmRsZShldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBZGQgZXZlbnRzXG4gICAgICAgIGlmICh0aGlzLmNhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlX21vdmUgPSB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBjb25zdCBtb3VzZV9wb3MgPSBuZXcgVmVjMi5WZWN0b3IoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0VGFyZ2V0UG9zaXRpb24obW91c2VfcG9zKTtcbiAgICAgICAgICAgICAgICBodWQuc2V0Q3Vyc29yUG9zaXRpb24obW91c2VfcG9zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5tb3VzZV9kb3duID0gdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBlbikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnN0YXJ0RHJhd2luZygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm1vdXNlX3doZWVsID0gdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mO1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5kZWx0YVkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBlbikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnNldFNpemUoKChfYyA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnBlbi5zaXplKSAtIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgKF9lID0gKF9kID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QucGVuKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Uuc2V0U2l6ZSgoKF9mID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YucGVuLnNpemUpICsgMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm1vdXNlX3VwID0gdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wZW4pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zdG9wRHJhd2luZygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGFueSBwZXJpb2RpYyB0aW1lcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtET01IaWdoUmVzVGltZVN0YW1wfSAgdGltZXN0YW1wICBFUE9DIE1pbGxpc2Vjb25kc1xuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2Vzc1RpbWVycyh0aW1lc3RhbXApIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvY2VzcyBhbnkgZ2FtZSBjYWxjdWxhdGlvbnMsIGNhc2NhZGVzIGRvd24gdG8gdGhlXG4gICAgICogV29ybGQgb2JqZWN0IGFuZCBwYXNzZXMgb2ZmIGFueSBlbnRpdHkgYmFzZWQgY2FsY3MgdG8gdGhlcmUuXG4gICAgICogVGhlbiB0cmlnZ2VyIG9mIGFsbCByZW5kZXJpbmcgZm9yIHRoZSB3b3JsZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtET01IaWdoUmVzVGltZVN0YW1wfSAgdGltZXN0YW1wICBFUE9DIG1pbGxpc2Vjb25kc1xuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2Vzcyh0aW1lc3RhbXApIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgLy8gU2hvcnQgY2lyY3V0LCB0aGVzZSBNVVNUIGV4aXN0XG4gICAgICAgIGlmICh0aGlzLmNhbnZhcyA9PSBudWxsIHx8IHRoaXMuY29udGV4dCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBQcm9jZXNzIGFueSB0aW1lcnNcbiAgICAgICAgdGhpcy5wcm9jZXNzVGltZXJzKHRpbWVzdGFtcCk7XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIHNlY29uZHMgcGFzc2VkIHNpbmNlIHRoZSBsYXN0IGZyYW1lXG4gICAgICAgIGNvbnN0IGR0ID0gdGltZXN0YW1wIC0gdGhpcy5vbGRUaW1lc3RhbXA7XG4gICAgICAgIC8vIFVwZGF0ZSB0aW1lc3RhbXAgZm9yIG5leHQgcHJvY2VzcyBmcmFtZVxuICAgICAgICB0aGlzLm9sZFRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICAgICAgLy8gVHJpZ2dlciBXb3JsZCBjYWxjc1xuICAgICAgICAvLyBUT0RPOiBhc3luYz8gUGVyZm9ybWFuY2UgaW1wcm92bWVudCBhdCBhIGxhdGVyIGRhdGUuXG4gICAgICAgIChfYSA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByb2Nlc3MoZHQsIHRpbWVzdGFtcCk7XG4gICAgICAgIC8vIFJlbmRlciB0aGluZ3NcbiAgICAgICAgKF9iID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucmVuZGVyKHRoaXMuY2FudmFzLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDT0xPUl9SRUQgPSB7IHI6IDI1NSwgZzogMCwgYjogMCwgYTogMS4wIH07XG5leHBvcnQgY29uc3QgQ09MT1JfR1JFRU4gPSB7IHI6IDAsIGc6IDE5MiwgYjogMCwgYTogMS4wIH07XG5leHBvcnQgY29uc3QgQ09MT1JfQkxVRSA9IHsgcjogMCwgZzogMCwgYjogMjU1LCBhOiAxLjAgfTtcbmV4cG9ydCBjb25zdCBDT0xPUl9ZRUxMT1cgPSB7IHI6IDI1NSwgZzogMjU1LCBiOiAwLCBhOiAxLjAgfTtcbmV4cG9ydCBjb25zdCBDT0xPUl9PUkFOR0UgPSB7IHI6IDI1NSwgZzogMTI4LCBiOiAwLCBhOiAxLjAgfTtcbmV4cG9ydCBjb25zdCBDT0xPUl9CTEFDSyA9IHsgcjogMCwgZzogMCwgYjogMCwgYTogMS4wIH07XG5leHBvcnQgY29uc3QgTEFZRVJfQ1JFQVRFX1RJTUUgPSAwO1xuZXhwb3J0IGNvbnN0IExBWUVSX0NSRUFURV9LRVlTID0gMTtcbmV4cG9ydCBjb25zdCBDb25zdGFudHMgPSB7XG4gICAgUEFMTEVUVEVfU0laRTogNjAsXG4gICAgVE9PTF9TUEFDSU5HOiAyMCxcbiAgICBDQU5WQVNfU0laRToge1xuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG4gICAgfSxcbiAgICBMQVlFUlNfV0lEVEg6IDEyNSxcbiAgICBMQVlFUl9DUkVBVEVfREVMQVk6IDUwMDAsXG4gICAgTEFZRVJfQ1JFQVRFX0JFSEFWSU9SOiBMQVlFUl9DUkVBVEVfVElNRSxcbiAgICBDT0xPUlM6IFtcbiAgICAgICAgQ09MT1JfUkVELFxuICAgICAgICBDT0xPUl9HUkVFTixcbiAgICAgICAgQ09MT1JfQkxVRSxcbiAgICAgICAgQ09MT1JfWUVMTE9XLFxuICAgICAgICBDT0xPUl9PUkFOR0UsXG4gICAgICAgIENPTE9SX0JMQUNLXG4gICAgXSxcbiAgICBDQU5WQVNfVEFSR0VUOiBcImRyYXdpbmctY2FudmFzXCJcbn07XG4iLCJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiLi91dGlsL2NvbG9yXCI7XG5pbXBvcnQgTGF5ZXIgZnJvbSBcIi4vdG9vbHMvbGF5ZXJcIjtcbi8qKlxuICogTWFpbiB3b3JsZCBjbGFzcywgY29uc3RydWN0cyBldmVyeXRyaGluZyBhYm91dCB0aGUgZ2FtZSB3b3JsZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3aW5nIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIExheWVyIGluY3JlbWVudGFsIG51bWJlciwgdXNlZCB0byB0cmFjayB1bmlxdWUgbnVtZXJpY2FsXG4gICAgICAgICAqIGlkIG9mIGFsbCBlbnRpdGllcyBsb2FkZWQgb250byB0aGUgY2FudmFzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubGF5ZXJfaWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGxheWVyc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubGF5ZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSGVhZHMgdXAgZGlzcGxheSAoR1VJKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtIdWR9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmh1ZCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG91bGQgd2UgZHJhdyB0aGUgdGFyZ2V0cz9cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZHJhd190YXJnZXQgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGFyZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7VmVjMi5WZWN0b3J9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXJyZW50IHBlblxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtQZW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBlbiA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIZWxwZXIgdG8gY2FsY3VsYXRlIEZQUyBhbmQgZnJhbWVyYXRlc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRpbWVUb0RyYXcgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogSG9sZGVyIGZvciBkZWx0YXRpbWVcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kdCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmV2aW91cyBmcmFtZSB0aW1lc3RhbXBcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7RE9NSGlnaFJlc1RpbWVTdGFtcH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub2xkVGltZXN0YW1wID0gMC4wO1xuICAgICAgICAvKipcbiAgICAgICAgICogRnJhbWVzIHBlciBzZWNvbmQgaG9sZGVyXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZnBzID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3cgZGVidWc/XG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3dfZGVidWcgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgTGF5ZXIgZnJvbSB0aGUgY2FudmFzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgaWQgIE51bWVicmljYWwgSUQgb2YgdGhlIGVudGl0eVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlTGF5ZXIoaWQpIHtcbiAgICAgICAgaWYgKGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheWVycy5kZWxldGUoaWQpO1xuICAgICAgICBpZiAodGhpcy5sYXllcnMuaGFzKGlkIC0gMSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX2xheWVyID0gdGhpcy5sYXllcnMuZ2V0KGlkIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5sYXllcnMuaGFzKGlkICsgMSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX2xheWVyID0gdGhpcy5sYXllcnMuZ2V0KGlkICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXllcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMYXllcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVfbGF5ZXIgPSB0aGlzLmxheWVycy5nZXQoTWF0aC5taW4oLi4udGhpcy5sYXllcnMua2V5cygpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWRyYXdIdWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIExheWVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgaWQgIExheWVyIG51bWVyaWNhbCBJRFxuICAgICAqXG4gICAgICogQHJldHVybiAge0xheWVyfVxuICAgICAqL1xuICAgIGdldExheWVyKGlkKSB7XG4gICAgICAgIGNvbnN0IGxheWVyID0gdGhpcy5sYXllcnMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKGxheWVyKVxuICAgICAgICAgICAgcmV0dXJuIGxheWVyO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmVkcmF3SHVkKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLmh1ZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEJ5TmFtZShcImxheWVyc1wiKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmJ1aWxkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFthZGRMYXllciBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGFkZExheWVyKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZV9sYXllciA9IG5ldyBMYXllcih0aGlzLmxheWVyX2lkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5sYXllcnMuc2V0KHRoaXMuYWN0aXZlX2xheWVyLmlkLCB0aGlzLmFjdGl2ZV9sYXllcik7XG4gICAgICAgIHRoaXMubGF5ZXJfaWQrKztcbiAgICAgICAgdGhpcy5yZWRyYXdIdWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBlbnRpdHkgdG8gdGhlIGFjdGl2ZSBsYXllclxuICAgICAqXG4gICAgICogQHBhcmFtICAge0VudGl0eX0gIGVudGl0eSAgRW50aXR5IHRvIGFkZCB0byB0aGUgZ2FtZXdvcmxkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBhZGRFbnRpdHkoZW50aXR5KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZV9sYXllcilcbiAgICAgICAgICAgIHRoaXMuYWRkTGF5ZXIoKTtcbiAgICAgICAgKF9hID0gdGhpcy5hY3RpdmVfbGF5ZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFbnRpdHkoZW50aXR5KTtcbiAgICAgICAgdGhpcy5yZWRyYXdIdWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBwZW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtQZW59ICBwZW4gIFNldCdzIHRoZSBhY3RpdmUgcGVuIHRvIFBlblxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0UGVuKHBlbikge1xuICAgICAgICB0aGlzLnBlbiA9IHBlbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVW5zZXQncyB0aGUgY3VycmVudCB0YXJnZXRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHVuc2V0VGFyZ2V0KCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgdGFyZ2V0IHBvc2l0aW9uXG4gICAgICpcbiAgICAgKiBAdmFyIHtWZWMyLlZlY3Rvcn0gbW91c2VfcG9zICAgVGFyZ2V0IHBvc2l0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNldFRhcmdldFBvc2l0aW9uKG1vdXNlX3Bvcykge1xuICAgICAgICB0aGlzLnRhcmdldCA9IG1vdXNlX3BvcztcbiAgICAgICAgaWYgKHRoaXMucGVuKSB7XG4gICAgICAgICAgICB0aGlzLnBlbi5zZXRMb2NhdGlvbihtb3VzZV9wb3MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byBkcmF3IHRoZSB0YXJnZXRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIGRyYXdpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgZHJhd1RhcmdldChjb250ZXh0KSB7XG4gICAgICAgIGlmICh0aGlzLnBlbiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBlbi5kcmF3VGFyZ2V0KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBjb3VudCBvZiBlbnRpdGVzIGJ5IHR5cGUsIGlmIG5vIHR5cGUgc3BlY2lmaWVkLFxuICAgICAqIHRoZW4gcmV0dW5yIGNvdW50IG9mIGFsbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICB0eXBlICBFbnRpdHkgVHlwZXxOYW1lIFtvcHRpb25hbF1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtudW1iZXJ9ICAgICAgICBOdW1iZXIgb2YgZW50aXRpZXNcbiAgICAgKi9cbiAgICBjb3VudEVudGl0aWVzKHR5cGUpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChsZXQgW2tleSwgbGF5ZXJdIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICAgICAgICBjb3VudCArPSBsYXllci5jb3VudEVudGl0aWVzKHR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHJhdyB0aGUgZGVidWdnaW5nIHBhbmVsXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIHJlbmRlcmluZyBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBkcmF3RGVidWcoY29udGV4dCkge1xuICAgICAgICAvLyBEcmF3IG51bWJlciB0byB0aGUgc2NyZWVuXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNkZGRkZGQ1NSc7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoIC0gNzUsIENvbnN0YW50cy5DQU5WQVNfU0laRS5oZWlnaHQgLSAxMDAsIDc1LCAxMDApO1xuICAgICAgICBjb250ZXh0LmZvbnQgPSAnMTFweCBBcmlhbCc7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgY29udGV4dC5maWxsVGV4dChcIkZQUzogXCIgKyB0aGlzLmZwcywgQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoIC0gNzAsIENvbnN0YW50cy5DQU5WQVNfU0laRS5oZWlnaHQgLSA4NSk7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQoXCJMQVlFUlM6IFwiICsgdGhpcy5sYXllcnMuc2l6ZSwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoIC0gNzAsIENvbnN0YW50cy5DQU5WQVNfU0laRS5oZWlnaHQgLSA3MCk7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQoXCJFTlQ6IFwiICsgdGhpcy5jb3VudEVudGl0aWVzKCksIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCAtIDcwLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0IC0gNTUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEcmF3IHRoZSBIVUQgZ3VpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIHJlbmRlcmluZyBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBkcmF3R3VpKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmh1ZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5odWQucmVuZGVyKGNvbnRleHQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGFjdGl2ZSBjb2xvclxuICAgICAqXG4gICAgICogQHJldHVybiAge0NvbG9yfSAgIFRoZSBzZWxlY3RlZCBjb2xvclxuICAgICAqL1xuICAgIGdldENvbG9yKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHBhbGxldHRlID0gKF9hID0gdGhpcy5odWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRCeU5hbWUoXCJwYWxldHRlXCIpO1xuICAgICAgICBpZiAocGFsbGV0dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwYWxsZXR0ZS5nZXRDb2xvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IoMCwgMCwgMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByb2Nlc3MgYWxsIHRoZSByZW5kZXJpbmcgZm9yIHRoZSB3b3JsZFxuICAgICAqXG4gICAgICogQHBhcmFtICAge0hUTUxDYW52YXNFbGVtZW50fSAgICAgICAgIGNhbnZhcyAgIENhbnZhc1xuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBDYW52YXMgZHJhd2luZyBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICByZW5kZXIoY2FudmFzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIC8vIENsZWFyIHRoZSBzY3JlZW4gZXZlcnkgZnJhbWVcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgLy8gUmVuZGVyIGVhY2ggb2YgdGhlIGV4aXN0aW5nIGVudGl0aXRlcy4gKERyYXdpbmdzKVxuICAgICAgICBmb3IgKGxldCBba2V5LCBsYXllcl0gb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgICAgICAgIGxheWVyLnJlbmRlcihjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEcmF3IGFueSBwZW4gaGVscGVycywgZHJhdyB0aGUgdGhpbmcgY3VycmVudGx5IGJlaW5nIGRyYXduLlxuICAgICAgICBpZiAoKF9hID0gdGhpcy5wZW4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hY3RpdmVfZW50aXR5KSB7XG4gICAgICAgICAgICB0aGlzLnBlbi5hY3RpdmVfZW50aXR5LmRyYXcoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRHJhdyB0byB0aGUgZW50aXR5IGN1cnJlbnRseSBiZWluZyBkcmF3blxuICAgICAgICBpZiAoKF9iID0gdGhpcy5wZW4pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pc19kcmF3aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnBlbi5kcmF3KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRyYXcgdGFyZ2V0IGlmIGFueVxuICAgICAgICBpZiAodGhpcy5kcmF3X3RhcmdldClcbiAgICAgICAgICAgIHRoaXMuZHJhd1RhcmdldChjb250ZXh0KTtcbiAgICAgICAgaWYgKHRoaXMuc2hvd19kZWJ1ZylcbiAgICAgICAgICAgIHRoaXMuZHJhd0RlYnVnKGNvbnRleHQpO1xuICAgICAgICB0aGlzLmRyYXdHdWkoY29udGV4dCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdhcmJhZ2UgY2xlYW4gdXAsIHJlbW92ZXMgYW55IGVudGl0aWVzIHRoYXQgYXJlIHNjaGVkdWxlIGZvciByZW1vdmFsXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVFbnRpdGllcygpIHtcbiAgICAgICAgZm9yIChsZXQgW2tleSwgbGF5ZXJdIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICAgICAgICBsYXllci5yZW1vdmVFbnRpdGllcygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERvIGFsbCB3b3JsZCBjYWxjdWxhdGlvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICAgICAgICAgICAgICAgZ2FtZVRpbWUgICBEZWx0YVRpbWVcbiAgICAgKiBAcGFyYW0gICB7RE9NSGlnaFJlc1RpbWVTdGFtcH0gIHRpbWVzdGFtcCAgQ3VycmVudCB0aW1lXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm9jZXNzKHRpbWUsIHRpbWVzdGFtcCkge1xuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBzZWNvbmRzIHBhc3NlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZVxuICAgICAgICB0aGlzLnRpbWVUb0RyYXcgPSB0aW1lIC8gMTAwMDtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIGZwc1xuICAgICAgICB0aGlzLmZwcyA9IE1hdGgucm91bmQoMSAvIHRoaXMudGltZVRvRHJhdyk7XG4gICAgICAgIHRoaXMucmVtb3ZlRW50aXRpZXMoKTtcbiAgICAgICAgZm9yIChsZXQgW2tleSwgbGF5ZXJdIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICAgICAgICBsYXllci5wcm9jZXNzKHRpbWUsIHRpbWVzdGFtcCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWxsb3cgaHVkIHRvIHByb2Nlc3MgdGhpbmdzXG4gICAgICAgIGlmICh0aGlzLmh1ZClcbiAgICAgICAgICAgIHRoaXMuaHVkLnByb2Nlc3ModGltZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4uL3V0aWwvY29sb3InO1xuLyoqXG4gKiBDb3JlIGVudGl0eSBjbGFzcywgYWxsIG9iamVjdHMgd2l0aGluIHRoZSBnYW1lIGZpZWxkIGFyZSBlbnRpdGllcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50aXR5IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgbmFtZSAgbmFtZSBvciB0eXBlIG9mIGVudGl0eVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRpbWUgdGhlIGVudGl0eSB3YXMgY3JlYXRlZCwgbWlsbGlzZWNvbmRzIHNpbmNlIEVQT0NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGltZSB0aGUgZW50aXR5IHdhcyBjcmVhdGVkLCBtaWxsaXNlY29uZHMgc2luY2UgRVBPQ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jcmVhdGVkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRpbWUgdGhlIGVudGl0eSB3YXMgZmluaXNoZWQgZHJhd2luZywgbWlsbGlzZWNvbmRzIHNpbmNlIEVQT0NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbG91ciBvZiB0aGUgcGVuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gIHtDb2xvcn0gIENvbG91ciBvYmplY3QgdGhhdCB0aGUgZW50aXR5IHdpbGwgYmUgZHJhd24gYXMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbG9yID0gbmV3IENvbG9yKDAsIDAsIDApO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2l6ZSBvZiB0aGUgcGVuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBuYW1lIGZvciB0aGUgZW50aXR5LCBha2EgdHlwZS4gQ2FuIGJlIHVzZWQgdG8gcXVlcnkgZm9yIGVuZWl0aWVzIG9mIFwibmFtZVwiXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSAnJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHNldCB0byB0cnVlIHRoZSBlbnRpdHkgd2lsbCBiZSBkaXNwb3NlZCBvZiBuZXh0IHRpY2suXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlbW92ZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVmIHRvIHRoZSBkcmF3aW5nIGNhbnZzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRyYXdpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBEYXRlLm5vdygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIENvbG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q29sb3J9ICBjb2xvciAgQ29sb3IgdG8gc2V0IG9uIHRoZSBlbnRpdHlcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHNldENvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBlbnRpdHksIGJ5IGRlZmF1bHQgYWxsIGVudGl0aWVzIGFyZSB0cmVhdGVkIGFzIGNpcmNsZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIGRyYXdpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5kcmF3KGNvbnRleHQpO1xuICAgIH1cbiAgICBwcm9jZXNzKGdhbWV0aW1lKSB7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZGVub3JtYWxpemUsIG5vcm1hbGl6ZSB9IGZyb20gXCIuLi91dGlsL25vcm1hbGl6ZVwiO1xuaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9lbnRpdHlcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyZWVoYW5kIGV4dGVuZHMgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihzaXplLCBjb2xvcikge1xuICAgICAgICBzdXBlcignZnJlZWhhbmQnKTtcbiAgICAgICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICAgICAgdGhpcy5zY2FsZSA9IDEuMDtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBbZHJhdyBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBbY29udGV4dCBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRyYXcoY29udGV4dCkge1xuICAgICAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoIDwgMSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgZGVidWcgPSB0cnVlO1xuICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgICAgICBpZiAoY29udGV4dC5jYW52YXMud2lkdGggIT09IENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCkge1xuICAgICAgICAgICAgc2NhbGUgPSBjb250ZXh0LmNhbnZhcy53aWR0aCAvIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMuc2l6ZSAqIHNjYWxlO1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvci5nZXRIZXgoZmFsc2UpO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29sb3IuZ2V0SGV4KGZhbHNlKTtcbiAgICAgICAgY29udGV4dC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgICAgICBjb25zdCBpbml0aWFsUG9pbnQgPSBkZW5vcm1hbGl6ZSh0aGlzLnBvaW50c1swXSwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGNvbnRleHQubW92ZVRvKGluaXRpYWxQb2ludC54LCBpbml0aWFsUG9pbnQueSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbm9ybWFsaXplZCA9IGRlbm9ybWFsaXplKHRoaXMucG9pbnRzW2ldLCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGlmIChpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5saW5lVG8oZGVub3JtYWxpemVkLngsIGRlbm9ybWFsaXplZC55KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGggPiAyICYmIGkgPCAodGhpcy5wb2ludHMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZW5vbWFsaXplZE5leHQgPSBkZW5vcm1hbGl6ZSh0aGlzLnBvaW50c1tpICsgMV0sIGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIHZhciBjID0gKGRlbm9ybWFsaXplZC54ICsgZGVub21hbGl6ZWROZXh0LngpIC8gMjtcbiAgICAgICAgICAgICAgICB2YXIgZCA9IChkZW5vcm1hbGl6ZWQueSArIGRlbm9tYWxpemVkTmV4dC55KSAvIDI7XG4gICAgICAgICAgICAgICAgY29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvKGRlbm9ybWFsaXplZC54LCBkZW5vcm1hbGl6ZWQueSwgYywgZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhkZW5vcm1hbGl6ZWQueCwgZGVub3JtYWxpemVkLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFt1cGRhdGUgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7VmVjdG9yfSAgbG9jYXRpb24gIFtsb2NhdGlvbiBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICB1cGRhdGUobG9jYXRpb24pIHtcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChub3JtYWxpemUobG9jYXRpb24sIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodCkpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEh1ZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcnJheSBvZiBpdGVtcyB0byByZW5kZXIgZm9yIHRoZSBIdWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHdlIHdhbnQgdGhlIEhVRCB0byBiZSB2aXNpYmxlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogUG9zaXRpb24gb2YgdGhlIG1vdXNlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmN1cnNvcl9wb3NpdGlvbiA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBmb3IgdGhlIGNhbnZhcy5vbk1vdXNlTW92ZSBldmVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jbGlja19ldmVudCA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGwgYWxsIHRoZSByZW5kZXIgZnVuY3Rpb25zIG9mIGVhY2ggSHVkSXRlbVxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyByZW5kZXJpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRleHQpIHtcbiAgICAgICAgLy8gQ3VycmVudGx5IGRvZXMgbm90aGluZ1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgY3Vyc29yIGFuZCBodWQgaW50ZXJzZWN0c1xuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIGRlbHRhICBbZGVsdGEgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcHJvY2VzcyhkZWx0YSkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGQgYW4gaXRlbSB0byB0aGUgSFVEXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7SHVkSXRlbX0gIGl0ZW0gIEl0ZW0gdGhhdCBpbmhlcml0cyBmcm9tIHRoZSBIdXRJdGVtIGFic3RyYWN0IGNsYXNzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBhZGRJdGVtKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSByZWZlcmVuY2UgdG8gYSBodWQgaXRlbSBieSBuYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgIG5hbWUgIHRoZSBuYW1lIG9mIHRoZSBodWQgaXRlbSB0byByZXRyaWV2ZVxuICAgICAqXG4gICAgICogQHJldHVybiAge0h1ZEl0ZW18bnVsbH0gICB0aGUgaHVkIGl0ZW0gaWYgZm91bmQgb3RoZXJ3aXNlIG51bGwuXG4gICAgICovXG4gICAgZ2V0QnlOYW1lKG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc1tpXS5uYW1lID09PSBuYW1lKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFja3MgdGhlIGN1cnNvciBwb3NpdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtICAge1ZlY3Rvcn0gIHBvc2l0aW9uICBQb3NpdGlvbiBvZiB0aGUgbW91c2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXRDdXJzb3JQb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgICB0aGlzLmN1cnNvcl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEh1ZEl0ZW0ge1xuICAgIC8qKlxuICAgICAqIEh1ZCBJdGVtcyBuZWVkIGEgbmFtZVxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIG5hbWUgIFRoZSBuYW1lIGZvciB0aGUgaXRlbVxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGwgYW55IHVwZGF0ZSBmdW5jdGlvbnMgdGhhdCBuZWVkIHRvIGJlIGNhbGxlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5idWlsZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBIdWRJdGVtIGZyb20gXCIuL2h1ZF9pdGVtXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllcnMgZXh0ZW5kcyBIdWRJdGVtIHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBsYXllcnMgc2VjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtICAge0RyYXdpbmd9ICBkcmF3aW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRyYXdpbmcpIHtcbiAgICAgICAgc3VwZXIoXCJsYXllcnNcIik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIVE1MIENhbnZhcyBFXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheWVycycpO1xuICAgICAgICB0aGlzLmRyYXdpbmcgPSBkcmF3aW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWlsZCB0aGUgbGF5ZXJzIFVJXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyYXdpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy50YXJnZXQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMudGFyZ2V0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCB3aWR0aCA9IENvbnN0YW50cy5MQVlFUlNfV0lEVEg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9ICh3aWR0aCAvIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCkgKiBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0O1xuICAgICAgICBmb3IgKGxldCBba2V5LCBsYXllcl0gb2YgdGhpcy5kcmF3aW5nLmxheWVycykge1xuICAgICAgICAgICAgbGF5ZXIuZHJhdyh0aGlzLnRhcmdldCwgd2lkdGgsIGhlaWdodCwgdGhpcy5kcmF3aW5nLmFjdGl2ZV9sYXllciA9PT0gbGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IENvbG9yIGZyb20gXCIuLi91dGlsL2NvbG9yXCI7XG5pbXBvcnQgSHVkSXRlbSBmcm9tIFwiLi9odWRfaXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFsZXR0ZSBleHRlbmRzIEh1ZEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcInBhbGV0dGVcIik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMaXN0IG9mIGF2YWlsYWJsZSBjb2xvcnNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29sb3JzID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbG9yXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNlbGVjdGVkX2NvbG9yID0gbmV3IENvbG9yKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbG9yIGluZGV4XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNlbGVjdGVkX2NvbG9yX2luZGV4ID0gMTtcbiAgICAgICAgZm9yICh2YXIgY29sb3Igb2YgQ29uc3RhbnRzLkNPTE9SUykge1xuICAgICAgICAgICAgdGhpcy5jb2xvcnMucHVzaChuZXcgQ29sb3IoY29sb3IuciwgY29sb3IuZywgY29sb3IuYiwgY29sb3IuYSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHRoZSBVSVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWxldHRlJyk7XG4gICAgICAgIGlmICghdGFyZ2V0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0YXJnZXQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5jb2xvcnNbaV0uZ2V0SGV4KCk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImNvbG9yXCIpO1xuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMuc2VsZWN0ZWRfY29sb3JfaW5kZXgpXG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29sb3JJbmRleChpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGFyZ2V0ID09PSBudWxsIHx8IHRhcmdldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFyZ2V0LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBkcmF3aW5nIGNvbG9yXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Q29sb3J9ICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRDb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRfY29sb3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGluZGV4IG9mIHRoZSBzZWxlY3RlZCBjb2xvdXIgYW5kXG4gICAgICogdXBkYXRlcyB0aGUgc2VsZWN0ZWQgY29sb3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBpbmRleFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0Q29sb3JJbmRleChpbmRleCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkX2NvbG9yX2luZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRfY29sb3IgPSB0aGlzLmNvbG9yc1t0aGlzLnNlbGVjdGVkX2NvbG9yX2luZGV4XTtcbiAgICAgICAgLy8gUnVuIGFueSBHVUkgdXBkYXRlc1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgTGF5ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtEcmF3aW5nfSAgZHJhd2luZyAgRHJhd2luZyByZWZlcmVuY2VcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaWQsIGRyYXdpbmcpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIExheWVyIElEXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlkID0gLTE7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgZHJhd24gZW50aXRpZXMsIHRoZXNlIHdpbGwgYWxsIGdldFxuICAgICAgICAgKiBwcm9jZXNzZWQgYW5kIHJlbmRlcmVkIHdoZW4gdGhlIG5lZWQgdG8gYmVcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciAge01hcDxudW1iZXIsIEVudGl0eT59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmVudGl0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGFjdGl2ZSBlbnRpdHlcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWN0aXZlX2VudGl0eSA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbnRpdHkgaW5jcmVtZW50YWwgbnVtYmVyLCB1c2VkIHRvIHRyYWNrIHVuaXF1ZSBudW1lcmljYWxcbiAgICAgICAgICogaWQgb2YgYWxsIGVudGl0aWVzIGxvYWRlZCBvbnRvIHRoZSBjYW52YXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5lbnRpdHlfaWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVmZXJlbmNlIHRvIHRoZSBtYWluIERyYXdpbmdcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZHJhd2luZyA9IG51bGw7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gZHJhd2luZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBlbnRpdHkgdG8gdGhlIGdhbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtFbnRpdHl9ICBlbnRpdHkgIEVudGl0eSB0byBhZGQgdG8gdGhlIGdhbWV3b3JsZFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgYWRkRW50aXR5KGVudGl0eSkge1xuICAgICAgICBlbnRpdHkuaWQgPSB0aGlzLmVudGl0eV9pZDtcbiAgICAgICAgZW50aXR5LmRyYXdpbmcgPSB0aGlzLmRyYXdpbmc7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuc2V0KHRoaXMuZW50aXR5X2lkLCBlbnRpdHkpO1xuICAgICAgICB0aGlzLmVudGl0eV9pZCArPSAxO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHYXJiYWdlIGNsZWFuIHVwLCByZW1vdmVzIGFueSBlbnRpdGllcyB0aGF0IGFyZSBzY2hlZHVsZSBmb3IgcmVtb3ZhbFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlRW50aXRpZXMoKSB7XG4gICAgICAgIGNvbnN0IGlkcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBba2V5LCBlbnRpdHldIG9mIHRoaXMuZW50aXRpZXMpIHtcbiAgICAgICAgICAgIGlmIChlbnRpdHkucmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRpdGllcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZ2FtZSBFbnRpdHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBpZCAgRW50aXRpIG51bWVyaWNhbCBJRFxuICAgICAqXG4gICAgICogQHJldHVybiAge0VudGl0eX1cbiAgICAgKi9cbiAgICBnZXRFbnRpdHkoaWQpIHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy5lbnRpdGllcy5nZXQoaWQpO1xuICAgICAgICBpZiAoZW50aXR5KVxuICAgICAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBjb3VudCBvZiBlbnRpdGVzIGJ5IHR5cGUsIGlmIG5vIHR5cGUgc3BlY2lmaWVkLFxuICAgICAqIHRoZW4gcmV0dW5yIGNvdW50IG9mIGFsbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICB0eXBlICBFbnRpdHkgVHlwZXxOYW1lIFtvcHRpb25hbF1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtudW1iZXJ9ICAgICAgICBOdW1iZXIgb2YgZW50aXRpZXNcbiAgICAgKi9cbiAgICBjb3VudEVudGl0aWVzKHR5cGUpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgaWYgKCF0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXMuc2l6ZTtcbiAgICAgICAgZm9yIChsZXQgW2tleSwgZW50aXR5XSBvZiB0aGlzLmVudGl0aWVzKSB7XG4gICAgICAgICAgICBpZiAoZW50aXR5Lm5hbWUgPT0gdHlwZSAmJiBlbnRpdHkucmVtb3ZlID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuICAgIHByb2Nlc3ModGltZSwgdGltZXN0YW1wKSB7XG4gICAgICAgIGZvciAobGV0IFtrZXksIGVudGl0eV0gb2YgdGhpcy5lbnRpdGllcykge1xuICAgICAgICAgICAgaWYgKGVudGl0eS5yZW1vdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0aWVzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcihjb250ZXh0KSB7XG4gICAgICAgIC8vIFJlbmRlciBlYWNoIG9mIHRoZSBleGlzdGluZyBlbnRpdGl0ZXMuIChEcmF3aW5ncylcbiAgICAgICAgZm9yIChsZXQgW2tleSwgZW50aXR5XSBvZiB0aGlzLmVudGl0aWVzKSB7XG4gICAgICAgICAgICBlbnRpdHkucmVuZGVyKGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIFVJIGRyYXdpbmcgb2YgYSBsYXllclxuICAgICAqXG4gICAgICogQHBhcmFtICAge0hUTUxEaXZFbGVtZW50fSAgICAgcGFyZW50ICBbcGFyZW50IGRlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICAgICAgICAgICAgIHdpZHRoICAgW3dpZHRoIGRlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICAgICAgICAgICAgIGhlaWdodCAgW2hlaWdodCBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICAgICAgICAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkcmF3KHBhcmVudCwgd2lkdGgsIGhlaWdodCwgYWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjYW52YXMuaWQgPSBgbGF5ZXItJHt0aGlzLmlkfWA7XG4gICAgICAgIGNhbnZhcy5jbGFzc0xpc3QuYWRkKCdsYXllcicpO1xuICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBjYW52YXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBwYXJlbnQgPT09IG51bGwgfHwgcGFyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNhbnZhcywgcGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICBpZiAoY29udGV4dCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBmb3IgKGxldCBba2V5LCBlbnRpdHldIG9mIHRoaXMuZW50aXRpZXMpIHtcbiAgICAgICAgICAgIGVudGl0eS5yZW5kZXIoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgRnJlZWhhbmQgZnJvbSBcIi4uL2VudGl0aWVzL2ZyZWVoYW5kXCI7XG5pbXBvcnQgUGVuIGZyb20gXCIuL3BlblwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2VyIGV4dGVuZHMgUGVuIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgZm9yIG1hcmtlclxuICAgICAqXG4gICAgICogQHJldHVybiAge01hcmtlcn0gIHNlbGZcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkcmF3aW5nKSB7XG4gICAgICAgIHN1cGVyKGRyYXdpbmcsICdtYXJrZXInKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogW2RyYXcgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgW2NvbnRleHQgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkcmF3KGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlX2VudGl0eSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVfZW50aXR5LnVwZGF0ZSh0aGlzLmxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRFbnRpdHkoKSB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5kcmF3aW5nLmdldENvbG9yKCk7XG4gICAgICAgIHJldHVybiBuZXcgRnJlZWhhbmQodGhpcy5zaXplLCBjb2xvcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XG5pbXBvcnQgZHJhd0NpcmNsZSBmcm9tIFwiLi4vdXRpbC9jaXJjbGVcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiLi4vdXRpbC9jb2xvclwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVuIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgbmFtZSAgbmFtZSBvciB0eXBlIG9mIGVudGl0eVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRyYXdpbmcsIG5hbWUpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5hbWUgb2YgdGhlIHBlblxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gJyc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaWR0aCBvZiB0aGUgcGVuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNpemUgPSAyMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRhcmdldCBDb2xvclxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50YXJnZXRfY29sb3IgPSBuZXcgQ29sb3IoMTI4LCAxMjgsIDI1NSwgMC4yKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIExvY2F0aW9uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbmV3IFZlY3RvcigwLCAwKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHRoZSBwZW4gZG93biAoZHJhd2luZylcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaXNfZHJhd2luZyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGVudGl0eSBiZWluZyBkcmF3blxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hY3RpdmVfZW50aXR5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gZHJhd2luZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0J3MgdGhlIGxvY2F0aW9uIG9mIHRoZSBwZW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3J9ICBsb2NhdGlvbiAgTG9jYXRpb24gb2YgdGhlIHBlblxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gICAgICAgICAgICB2b2lkXG4gICAgICovXG4gICAgc2V0TG9jYXRpb24obG9jYXRpb24pIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdGFydCBkcmF3aW5nLCBjcmVhdGUgdGhlIGVudGl0eSBldGMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBzdGFydERyYXdpbmcoKSB7XG4gICAgICAgIHRoaXMuc2V0SXNEcmF3aW5nKHRydWUpO1xuICAgICAgICB0aGlzLmFjdGl2ZV9lbnRpdHkgPSB0aGlzLmdldEVudGl0eSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzaXplIG9mIHRoZSBwb2ludGVyIGJydXNoXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgc2l6ZSAgW3NpemUgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBzZXRTaXplKHNpemUpIHtcbiAgICAgICAgaWYgKHNpemUgPiAwKVxuICAgICAgICAgICAgdGhpcy5zaXplID0gTWF0aC5taW4oc2l6ZSwgMTAwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RvcCBkcmF3aW5nLCBhcHBseSB0aGUgZW50aXR5XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBzdG9wRHJhd2luZygpIHtcbiAgICAgICAgdGhpcy5zZXRJc0RyYXdpbmcoZmFsc2UpO1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVfZW50aXR5KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9lbnRpdHkuY29tcGxldGVkID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHRoaXMuZHJhd2luZy5hZGRFbnRpdHkodGhpcy5hY3RpdmVfZW50aXR5KTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX2VudGl0eSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZHJhd2luZyBzdGF0ZSBvZiB0aGUgUGVuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Ym9vbGVhbn0gIHN0YXRlICBJcyB0aGUgcGVuIGRyYXdpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICAgICAgICAgIHZvaWRcbiAgICAgKi9cbiAgICBzZXRJc0RyYXdpbmcoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5pc19kcmF3aW5nID0gc3RhdGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIHBlbiB0YXJnZXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBDYW52YXMgZHJhd2luZyBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkcmF3VGFyZ2V0KGNvbnRleHQpIHtcbiAgICAgICAgZHJhd0NpcmNsZShjb250ZXh0LCB0aGlzLmxvY2F0aW9uLCB0aGlzLnRhcmdldF9jb2xvciwgdGhpcy5zaXplKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIERyYXcgYSBjaXJjbGUgb24gdGhlIGNvbnRleHQgZ2l2ZW5cbiAqXG4gKiBAdmFyIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICAgQ2FudmFzIHJlbmRlcmluZyBjb250ZXh0IHRvIGRyYXcgd2l0aFxuICogQHZhciB7VmVjMi5WZWN0b3J9ICAgICAgICAgICAgICAgbG9jYXRpb24gIFdoZXJlIHRvIGRyYXcgdGhlIGNpcmNsZVxuICogQHZhciB7Q29sb3J9ICAgICAgICAgICAgICAgICAgICAgY29sb3IgICAgIENvbG9yIHRvIGRyYXcgd2l0aFxuICogQHZhciB7bnVtYmVyfSAgICAgICAgICAgICAgICAgICAgc2l6ZSAgICAgIERpYW1ldGVyIGluIHBpeGVsc1xuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmF3Q2lyY2xlKGNvbnRleHQsIGxvY2F0aW9uLCBjb2xvciwgc2l6ZSkge1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5hcmMobG9jYXRpb24ueCwgbG9jYXRpb24ueSwgTWF0aC5yb3VuZChzaXplIC8gMiksIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvci5nZXRSZ2JTdHJpbmcoKTtcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yLmdldFJnYlN0cmluZygpO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG59XG4iLCIvKipcbiAqIENvbG91ciBoZWxwZXIsIHVzZWZ1bCBmb3IgY29udmVydGluZyBiZXR3ZWVuIGNvbG91ciBmb3JtYXRzLlxuICogVGhpcyBpcyBwcm9iYWJseSBub3QgcmVhbGx5IG5lZWRlZCBmb3IgdGhlIFRTL0pTIHZlcnNpb24gYnV0IGlzXG4gKiBtb3JlIG9mIGEgaGFuZ292ZXIgZnJvbSB0aGUgRGFydCB2ZXJzaW9uIG9mIHRoZSBnYW1lLiBXYXMgZ29vZFxuICogbGVhcm5pbmcgY29udmVydGluZyBpdCB0byBqYXZhc2NyaXB0L3R5cGVzY3JpcHQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG9yIHtcbiAgICAvKipcbiAgICAgKiBbY29uc3RydWN0b3IgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgciAgcmVkIFswIC0gMjU1XVxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBnICBncmVlbiBbMCAtIDI1NV1cbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgYiAgYmx1ZSBbMCAtIDI1NV1cbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyP30gIGEgIGFscGhhIFswLjAgLSAxLjBdXG4gICAgICovXG4gICAgY29uc3RydWN0b3IociwgZywgYiwgYSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogcmVkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnIgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogZ3JlZW5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZyA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBibHVlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmIgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogYWxwaGFcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYSA9IDAuMDtcbiAgICAgICAgdGhpcy5yID0gcjtcbiAgICAgICAgdGhpcy5nID0gZztcbiAgICAgICAgdGhpcy5iID0gYjtcbiAgICAgICAgdGhpcy5hID0gYSA/IGEgOiAxLjA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgUkdCIHZhbHVlc1xuICAgICAqXG4gICAgICogQHJldHVybiAge0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgZ2V0UmdiKCkge1xuICAgICAgICByZXR1cm4gW3RoaXMuciwgdGhpcy5nLCB0aGlzLmJdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIFJHQiB2YWx1ZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtBcnJheTxudW1iZXI+fVxuICAgICAqL1xuICAgIGdldFJnYlN0cmluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuYSlcbiAgICAgICAgICAgIHJldHVybiBgcmdiYSgke3RoaXMucn0sICR7dGhpcy5nfSwgJHt0aGlzLmJ9LCAke3RoaXMuYX0pYDtcbiAgICAgICAgcmV0dXJuIGByZ2JhKCR7dGhpcy5yfSwgJHt0aGlzLmd9LCAke3RoaXMuYn0pYDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFycmF5IG9mIEhTTCB2YWx1ZXNcbiAgICAgKlxuICAgICAqIEZyb206IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vY29udmVydGluZy1jb2xvci1zcGFjZXMtaW4tamF2YXNjcmlwdC9cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtBcnJheTxudW1iZXI+fVxuICAgICAqL1xuICAgIGdldEhzbCgpIHtcbiAgICAgICAgLy8gTWFrZSByLCBnLCBhbmQgYiBmcmFjdGlvbnMgb2YgMVxuICAgICAgICBjb25zdCByID0gdGhpcy5yIC8gMjU1O1xuICAgICAgICBjb25zdCBnID0gdGhpcy5nIC8gMjU1O1xuICAgICAgICBjb25zdCBiID0gdGhpcy5iIC8gMjU1O1xuICAgICAgICAvLyBGaW5kIGdyZWF0ZXN0IGFuZCBzbWFsbGVzdCBjaGFubmVsIHZhbHVlc1xuICAgICAgICBsZXQgY21pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgICBsZXQgY21heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgICAgICBsZXQgZGVsdGEgPSBjbWF4IC0gY21pbjtcbiAgICAgICAgbGV0IGggPSAwO1xuICAgICAgICBsZXQgcyA9IDA7XG4gICAgICAgIGxldCBsID0gMDtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIGh1ZVxuICAgICAgICAvLyBObyBkaWZmZXJlbmNlXG4gICAgICAgIGlmIChkZWx0YSA9PSAwKSB7XG4gICAgICAgICAgICBoID0gMDtcbiAgICAgICAgICAgIC8vIFJlZCBpcyBtYXhcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjbWF4ID09IHIpIHtcbiAgICAgICAgICAgIGggPSAoKGcgLSBiKSAvIGRlbHRhKSAlIDY7XG4gICAgICAgICAgICAvLyBHcmVlbiBpcyBtYXhcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjbWF4ID09IGcpIHtcbiAgICAgICAgICAgIGggPSAoYiAtIHIpIC8gZGVsdGEgKyAyO1xuICAgICAgICAgICAgLy8gQmx1ZSBpcyBtYXhcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGggPSAociAtIGcpIC8gZGVsdGEgKyA0O1xuICAgICAgICB9XG4gICAgICAgIGggPSBNYXRoLnJvdW5kKGggKiA2MCk7XG4gICAgICAgIC8vIE1ha2UgbmVnYXRpdmUgaHVlcyBwb3NpdGl2ZSBiZWhpbmQgMzYwwrBcbiAgICAgICAgaWYgKGggPCAwKSB7XG4gICAgICAgICAgICBoICs9IDM2MDtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYWxjdWxhdGUgbGlnaHRuZXNzXG4gICAgICAgIGwgPSAoY21heCArIGNtaW4pIC8gMjtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHNhdHVyYXRpb25cbiAgICAgICAgcyA9IGRlbHRhID09IDAgPyAwIDogZGVsdGEgLyAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpO1xuICAgICAgICAvLyBNdWx0aXBseSBsIGFuZCBzIGJ5IDEwMFxuICAgICAgICBzID0gKyhzICogMTAwKS50b0ZpeGVkKDEpO1xuICAgICAgICBsID0gKyhsICogMTAwKS50b0ZpeGVkKDEpO1xuICAgICAgICByZXR1cm4gW2gsIHMsIGxdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gSEVYIHZhbHVlIG9mIGNvbG91ciAoaW5sY3VkaW5nIGFscGhhKVxuICAgICAqXG4gICAgICogRnJvbTogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9jb252ZXJ0aW5nLWNvbG9yLXNwYWNlcy1pbi1qYXZhc2NyaXB0L1xuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRIZXgod2l0aEFscGhhID0gdHJ1ZSkge1xuICAgICAgICBsZXQgciA9IHRoaXMuci50b1N0cmluZygxNik7XG4gICAgICAgIGxldCBnID0gdGhpcy5nLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgbGV0IGIgPSB0aGlzLmIudG9TdHJpbmcoMTYpO1xuICAgICAgICBsZXQgYSA9ICh0aGlzLmEgKiAyNTUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgaWYgKHIubGVuZ3RoID09IDEpXG4gICAgICAgICAgICByID0gXCIwXCIgKyByO1xuICAgICAgICBpZiAoZy5sZW5ndGggPT0gMSlcbiAgICAgICAgICAgIGcgPSBcIjBcIiArIGc7XG4gICAgICAgIGlmIChiLmxlbmd0aCA9PSAxKVxuICAgICAgICAgICAgYiA9IFwiMFwiICsgYjtcbiAgICAgICAgaWYgKGEubGVuZ3RoID09IDEpXG4gICAgICAgICAgICBhID0gXCIwXCIgKyBhO1xuICAgICAgICBpZiAoIXdpdGhBbHBoYSlcbiAgICAgICAgICAgIHJldHVybiBcIiNcIiArIHIgKyBnICsgYjtcbiAgICAgICAgcmV0dXJuIFwiI1wiICsgciArIGcgKyBiICsgYTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlFdmVudHMge1xuICAgIGNvbnN0cnVjdG9yKGRyYXdpbmcpIHtcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gZHJhd2luZztcbiAgICB9XG4gICAgaGFuZGxlKGV2ZW50KSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkTGF5ZXIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3gnOlxuICAgICAgICAgICAgICAgIChfYiA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnJlbW92ZUxheWVyKChfZCA9IChfYyA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmFjdGl2ZV9sYXllcikgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmlkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgY2FzZSAnMic6XG4gICAgICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICAgIGNhc2UgJzQnOlxuICAgICAgICAgICAgY2FzZSAnNSc6XG4gICAgICAgICAgICBjYXNlICc2JzpcbiAgICAgICAgICAgICAgICBjb25zdCBwYWxldHRlID0gKF9mID0gKF9lID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UuaHVkKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuZ2V0QnlOYW1lKCdwYWxldHRlJyk7XG4gICAgICAgICAgICAgICAgcGFsZXR0ZS5zZXRDb2xvckluZGV4KHBhcnNlSW50KGV2ZW50LmtleSkgLSAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShwb3NpdGlvbiwgd2lkdGgsIGhlaWdodCkge1xuICAgIHJldHVybiBuZXcgVmVjdG9yKCgoMTAwLiAvIHdpZHRoKSAqIHBvc2l0aW9uLngpIC8gMTAwLiwgKCgxMDAuIC8gaGVpZ2h0KSAqIHBvc2l0aW9uLnkpIC8gMTAwLik7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVub3JtYWxpemUocG9zaXRpb24sIHdpZHRoLCBoZWlnaHQpIHtcbiAgICByZXR1cm4gbmV3IFZlY3Rvcihwb3NpdGlvbi54ICogd2lkdGgsIHBvc2l0aW9uLnkgKiBoZWlnaHQpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRoZXNlIHZhbHVlcyBhcmUgdXNlZCBieSB0aGUgYEFic3RyYWN0VmVjdG9yLnJvdW5kYCBtZXRob2QgdG8gaW5jcmVhc2VcbiAqIHBlcmZvcm1hbmNlIHZzLiB1c2luZyAgTnVtYmVyLnRvRml4ZWQuXG4gKi9cbnZhciBwcmVjaXNpb24gPSBbXG4gICAgMSxcbiAgICAxMCxcbiAgICAxMDAsXG4gICAgMTAwMCxcbiAgICAxMDAwMCxcbiAgICAxMDAwMDAsXG4gICAgMTAwMDAwMCxcbiAgICAxMDAwMDAwMCxcbiAgICAxMDAwMDAwMDAsXG4gICAgMTAwMDAwMDAwMCxcbiAgICAxMDAwMDAwMDAwMFxuXTtcbi8qKlxuICogVGhlIGNsYXNzIHRoYXQgYWxsIG90aGVyIHZlY3RvciByZXByZXNlbnRhdGlvbnMgYXJlIGRlcml2ZWQgZnJvbS5cbiAqXG4gKiBDb250YWlucyB0aGUgY29yZSBpbXBsZW1lbnRhdGlvbiBmb3IgYWxsIG1ldGhvZHMgdGhhdCB3aWxsIGJlIGV4cG9zZWQgYnlcbiAqIHZlY3RvciBpbnN0YW5jZXMuXG4gKlxuICogRXhhbXBsZSBvZiBjcmVhdGluZyBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvbjpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgQWJzdHJhY3RWZWN0b3IgfSBmcm9tIFwiLi9BYnN0cmFjdFZlY3RvclwiXG4gKlxuICogZXhwb3J0IGNsYXNzIE15Q3VzdG9tVmVjdG9yIGV4dGVuZHMgQWJzdHJhY3RWZWN0b3Ige1xuICogIGNvbnN0cnVjdG9yICh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICogICAgc3VwZXIoQ3VzdG9tVmVjdG9yVHlwZSlcbiAqICB9XG4gKiB9XG4gKiBgYGBcbiAqL1xudmFyIEFic3RyYWN0VmVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFic3RyYWN0VmVjdG9yKGN0b3IpIHtcbiAgICAgICAgdGhpcy5jdG9yID0gY3RvcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IGJvdGggeCBhbmQgeSBheGlzIHZhbHVlXG4gICAgICogQHBhcmFtIHggICBOZXcgeCB2YWxcbiAgICAgKiBAcGFyYW0geSAgIE5ldyB5IHZhbFxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5zZXRBeGVzID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXR0ZXIgZm9yIHggdGhlIGF4aXMgdmFsdWVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHRlciBmb3IgeCBheGlzIHZhbHVlXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnNldFggPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldHRlciBmb3IgeSBheGlzIHZhbHVlXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgZm9yIHkgYXhpcy5cbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuc2V0WSA9IGZ1bmN0aW9uICh5KSB7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSB2ZWN0b3IgYXMgYSBmb3JtYXR0ZWQgc3RyaW5nLCBlLmcgXCIoMCwgNClcIlxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChyb3VuZCkge1xuICAgICAgICBpZiAocm91bmQgPT09IHZvaWQgMCkgeyByb3VuZCA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChyb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiKFwiICsgTWF0aC5yb3VuZCh0aGlzLngpICsgXCIsIFwiICsgTWF0aC5yb3VuZCh0aGlzLnkpICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiKFwiICsgdGhpcy54ICsgXCIsIFwiICsgdGhpcy55ICsgXCIpXCI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYW4gQXJyYXkgY29udGFpbmluZyB0aGUgdmVjdG9yIGF4ZXMsIGUuZyBbMCwgNF1cbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueV07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYW4gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIHZlY3RvciBheGVzLCBlLmcgeyB4OiAwLCB5OiA0IH1cbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICB5OiB0aGlzLnlcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgcHJvdmlkZWQgdmVjdG9yIHRvIHRoaXMgb25lXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3VidHJhY3QgdGhlIHByb3ZpZGVkIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICB0aGlzLnggLT0gdmVjLng7XG4gICAgICAgIHRoaXMueSAtPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgcHJvdmlkZWQgdmVjdG9yIGVxdWFsIHRvIHRoaXMgb25lXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgcmV0dXJuIHZlYy54ID09PSB0aGlzLnggJiYgdmVjLnkgPT09IHRoaXMueTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubXVsdGlwbHlCeVZlY3RvciA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgdGhpcy54ICo9IHZlYy54O1xuICAgICAgICB0aGlzLnkgKj0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTXVsdGlwbHkgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5tdWxWID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseUJ5VmVjdG9yKHZlYyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXZpZGUgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kaXZpZGVCeVZlY3RvciA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgdGhpcy54IC89IHZlYy54O1xuICAgICAgICB0aGlzLnkgLz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGl2aWRlIHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGl2ViA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpdmlkZUJ5VmVjdG9yKHYpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTXVsdGlwbHkgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIG51bWJlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5tdWx0aXBseUJ5U2NhbGFyID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgdGhpcy54ICo9IG47XG4gICAgICAgIHRoaXMueSAqPSBuO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCBudW1iZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubXVsUyA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm11bHRpcGx5QnlTY2FsYXIobik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXZpdmUgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIG51bWJlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kaXZpZGVCeVNjYWxhciA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHRoaXMueCAvPSBuO1xuICAgICAgICB0aGlzLnkgLz0gbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXZpdmUgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIG51bWJlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kaXZTID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGl2aWRlQnlTY2FsYXIobik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBOb3JtYWxpc2UgdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubm9ybWFsaXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGVCeVNjYWxhcih0aGlzLm1hZ25pdHVkZSgpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZvciBBbWVyaWNhbiBzcGVsbGluZy4gU2FtZSBhcyB1bml0L25vcm1hbGlzZSBmdW5jdGlvblxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5ub3JtYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGlzZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIHNhbWUgYXMgbm9ybWFsaXNlIGFuZCBub3JtYWxpemVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUudW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXNlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtYWduaXR1ZGUgKGxlbmd0aCkgb2YgdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubWFnbml0dWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgeCA9IHRoaXMueDtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtYWduaXR1ZGUgKGxlbmd0aCkgb2YgdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWduaXR1ZGUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNxdXJlZCBsZW5ndGggb2YgdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubGVuZ3RoU3EgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB4ID0gdGhpcy54O1xuICAgICAgICB2YXIgeSA9IHRoaXMueTtcbiAgICAgICAgcmV0dXJuIHggKiB4ICsgeSAqIHk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkb3QgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBieSBhbm90aGVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRvdCA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgcmV0dXJuIHZlYy54ICogdGhpcy54ICsgdmVjLnkgKiB0aGlzLnk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGJ5IGFub3RoZXIuXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmNyb3NzID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdmVjLnkgLSB0aGlzLnkgKiB2ZWMueDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldmVyc2VzIHRoaXMgdmVjdG9yIGkuZSBtdWx0aXBsaWVzIGl0IGJ5IC0xXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMueCA9IC10aGlzLng7XG4gICAgICAgIHRoaXMueSA9IC10aGlzLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSB2ZWN0b3IgYXhlcyB2YWx1ZXMgdG8gYWJzb2x1dGUgdmFsdWVzXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmFicyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5hYnModGhpcy54KTtcbiAgICAgICAgdGhpcy55ID0gTWF0aC5hYnModGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBaZXJvZXMgdGhlIHZlY3RvciBpLmUgc2V0cyBhbGwgYXhlcyB0byAwXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnplcm8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueSA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kaXN0YW5jZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHZhciB4ID0gdGhpcy54IC0gdi54O1xuICAgICAgICB2YXIgeSA9IHRoaXMueSAtIHYueTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIHZldG9yIGJ5IHByb3ZpZGVkIHJhZGlhbnNcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUucm90YXRlID0gZnVuY3Rpb24gKHJhZHMpIHtcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZHMpO1xuICAgICAgICB2YXIgc2luID0gTWF0aC5zaW4ocmFkcyk7XG4gICAgICAgIHZhciBveCA9IHRoaXMueDtcbiAgICAgICAgdmFyIG95ID0gdGhpcy55O1xuICAgICAgICB0aGlzLnggPSBveCAqIGNvcyAtIG95ICogc2luO1xuICAgICAgICB0aGlzLnkgPSBveCAqIHNpbiArIG95ICogY29zO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJvdW5kcyB0aGlzIHZlY3RvciB0byBuIGRlY2ltYWwgcGxhY2VzXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnJvdW5kID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgaWYgKG4gPT09IHZvaWQgMCkgeyBuID0gMjsgfVxuICAgICAgICB2YXIgcCA9IHByZWNpc2lvbltuXTtcbiAgICAgICAgLy8gVGhpcyBwZXJmb3JtcyB3YWFheSBiZXR0ZXIgdGhhbiB0b0ZpeGVkIGFuZCBnaXZlIEZsb2F0MzIgdGhlIGVkZ2UgYWdhaW4uXG4gICAgICAgIC8vIGh0dHA6Ly93d3cuZHluYW1pY2d1cnUuY29tL2phdmFzY3JpcHQvcm91bmQtbnVtYmVycy13aXRoLXByZWNpc2lvbi9cbiAgICAgICAgdGhpcy54ID0gKCgwLjUgKyB0aGlzLnggKiBwKSA8PCAwKSAvIHA7XG4gICAgICAgIHRoaXMueSA9ICgoMC41ICsgdGhpcy55ICogcCkgPDwgMCkgLyBwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBjb3B5IG9mIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gICAgfTtcbiAgICByZXR1cm4gQWJzdHJhY3RWZWN0b3I7XG59KCkpO1xuZXhwb3J0cy5BYnN0cmFjdFZlY3RvciA9IEFic3RyYWN0VmVjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWJzdHJhY3RWZWN0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBYnN0cmFjdFZlY3Rvcl8xID0gcmVxdWlyZShcIi4vQWJzdHJhY3RWZWN0b3JcIik7XG4vKipcbiAqIEEgdmVjdG9yIHJlcHJlc2VudGF0aW9uIHRoYXQgc3RvcmVzIHRoZSBheGVzIGluIGFuIEFycmF5XG4gKlxuICogYGBgXG4gKiBjb25zdCB2ID0gbmV3IFZlYzJELkFycmF5VmVjdG9yKDIsIDUpXG4gKiBgYGBcbiAqL1xudmFyIEFycmF5VmVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBcnJheVZlY3RvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBcnJheVZlY3Rvcih4LCB5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIEFycmF5VmVjdG9yKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5heGVzID0gW3gsIHldO1xuICAgICAgICBfdGhpcy5jdG9yID0gQXJyYXlWZWN0b3I7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5VmVjdG9yLnByb3RvdHlwZSwgXCJ4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5heGVzWzBdO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICB0aGlzLmF4ZXNbMF0gPSB4O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXlWZWN0b3IucHJvdG90eXBlLCBcInlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF4ZXNbMV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgICAgIHRoaXMuYXhlc1sxXSA9IHk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBBcnJheVZlY3Rvcjtcbn0oQWJzdHJhY3RWZWN0b3JfMS5BYnN0cmFjdFZlY3RvcikpO1xuZXhwb3J0cy5BcnJheVZlY3RvciA9IEFycmF5VmVjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXJyYXlWZWN0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBYnN0cmFjdFZlY3Rvcl8xID0gcmVxdWlyZShcIi4vQWJzdHJhY3RWZWN0b3JcIik7XG4vKipcbiAqIEEgdmVjdG9yIHJlcHJlc2VudGF0aW9uIHRoYXQgc3RvcmVzIHRoZSBheGVzIGluIGEgRmxvYXQzMkFycmF5XG4gKlxuICogYGBgXG4gKiBjb25zdCB2ID0gbmV3IFZlYzJELkZsb2F0MzJWZWN0b3IoMiwgNSlcbiAqIGBgYFxuICovXG52YXIgRmxvYXQzMlZlY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmxvYXQzMlZlY3RvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGbG9hdDMyVmVjdG9yKHgsIHkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgRmxvYXQzMlZlY3RvcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYXhlcyA9IG5ldyBGbG9hdDMyQXJyYXkoMik7XG4gICAgICAgIF90aGlzLmF4ZXNbMF0gPSB4O1xuICAgICAgICBfdGhpcy5heGVzWzFdID0geTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmxvYXQzMlZlY3Rvci5wcm90b3R5cGUsIFwieFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXhlc1swXTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgdGhpcy5heGVzWzBdID0geDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZsb2F0MzJWZWN0b3IucHJvdG90eXBlLCBcInlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF4ZXNbMV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgICAgIHRoaXMuYXhlc1sxXSA9IHk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBGbG9hdDMyVmVjdG9yO1xufShBYnN0cmFjdFZlY3Rvcl8xLkFic3RyYWN0VmVjdG9yKSk7XG5leHBvcnRzLkZsb2F0MzJWZWN0b3IgPSBGbG9hdDMyVmVjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmxvYXQzMlZlY3Rvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9BYnN0cmFjdFZlY3RvclwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9BcnJheVZlY3RvclwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9GbG9hdDMyVmVjdG9yXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL1ZlY3RvclwiKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1WZWMyRC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFic3RyYWN0VmVjdG9yXzEgPSByZXF1aXJlKFwiLi9BYnN0cmFjdFZlY3RvclwiKTtcbi8qKlxuICogQSB2ZWN0b3IgcmVwcmVzZW50YXRpb24gdGhhdCBzdG9yZXMgdGhlIGF4ZXMgYXMgcGFydCBvZiB0aGUgaW5zdGFuY2UgaXRzZWxmXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IHYgPSBuZXcgVmVjMkQuVmVjdG9yKDIsIDUpXG4gKiBgYGBcbiAqL1xudmFyIFZlY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVmVjdG9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFZlY3Rvcih4LCB5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFZlY3RvcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3ggPSB4O1xuICAgICAgICBfdGhpcy5feSA9IHk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3Rvci5wcm90b3R5cGUsIFwieFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3g7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHRoaXMuX3ggPSB4O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yLnByb3RvdHlwZSwgXCJ5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5feTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeSkge1xuICAgICAgICAgICAgdGhpcy5feSA9IHk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBWZWN0b3I7XG59KEFic3RyYWN0VmVjdG9yXzEuQWJzdHJhY3RWZWN0b3IpKTtcbmV4cG9ydHMuVmVjdG9yID0gVmVjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VmVjdG9yLmpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc2Nzcy9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbi8qKlxuICogUXVlcnkgc2VsZWN0b3Igc3RyaW5nXG4gKiBmb3IgdGhlIGNhbnZhcyB0YXJnZXRcbiAqL1xuY29uc3QgdGFyZ2V0ID0gYCMke0NvbnN0YW50cy5DQU5WQVNfVEFSR0VUfWA7XG4oKCkgPT4ge1xuICAgIC8vIFRoaXMgaXMgb3VyIHRhcmdldCBjYW52YXNcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gICAgaWYgKGNhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgIC8vIFVzaW5nIHRoZSAyRCBjb250ZXh0XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgaWYgKGNvbnRleHQgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gQ3JlYXRlIEdhbWUgb2JqZWN0LlxuICAgICAgICBjb25zdCBhcHAgPSBuZXcgQXBwKGNhbnZhcywgY29udGV4dCk7XG4gICAgICAgIC8vIERlZmluZSBnYW1lbG9vcCBhbmQgcHJvY2Vzcy5cbiAgICAgICAgY29uc3QgYW5pbWF0aW9uTG9vcCA9ICh0aW1lc3RhbXApID0+IHtcbiAgICAgICAgICAgIGFwcC5wcm9jZXNzKHRpbWVzdGFtcCk7XG4gICAgICAgICAgICAvLyBLZWVwIHJlcXVlc3RpbmcgbmV3IGZyYW1lc1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb25Mb29wKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQm9vdHN0cmFwIGFueSBzZXR1cCBzdHVmZlxuICAgICAgICBhcHAuc2V0VXAoKTtcbiAgICAgICAgLy8gU3RhcnQgdGhlIHJlbmRlcmxvb3AuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uTG9vcCk7XG4gICAgfVxufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==