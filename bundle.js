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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  overflow: hidden;\n}\n\n#drawing-canvas {\n  background-color: #fff;\n}\n\n#palette {\n  justify-content: space-around;\n  transform: translate(-50%, 0);\n  position: fixed;\n  display: flex;\n  height: 120px;\n  bottom: 0;\n  left: 50%;\n  padding-bottom: 20px;\n  pointer-events: none;\n}\n#palette .color {\n  margin: 20px;\n  pointer-events: all;\n  width: 80px;\n  cursor: pointer;\n  height: 80px;\n  border-radius: 50%;\n  border: 10px solid rgba(255, 255, 255, 0);\n}\n#palette .color:hover {\n  border: 10px solid rgba(255, 255, 255, 0.8);\n}\n#palette .color.selected {\n  border: 10px solid rgba(204, 204, 255, 0.7);\n}\n\n#layers {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  top: 0px;\n  right: 0px;\n  height: 100%;\n  pointer-events: none;\n  margin: 40px;\n}\n#layers .layer {\n  pointer-events: auto;\n  background-color: rgba(255, 255, 255, 0.7);\n  border: 1px solid #cacaca;\n  border-radius: 2%;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n#layers .active {\n  border: 2px solid rgb(255, 128, 0);\n}\n#layers .layer:hover {\n  background-color: rgb(255, 255, 255);\n}\n\n.hidden {\n  display: none;\n}\n\n#tools {\n  position: absolute;\n  left: 1rem;\n  top: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n#tools button {\n  height: 3rem;\n  padding: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n#help.visible {\n  font-family: Arial, Helvetica, sans-serif;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 2px solid #cdcdcd;\n  background-color: rgb(240, 240, 240);\n  width: 50%;\n  height: 50%;\n  border-radius: 1rem;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n#help.visible .header {\n  height: 8rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n#help.visible .header button {\n  border: 0;\n  font-size: 1.5rem;\n  cursor: pointer;\n  height: 1rem;\n}\n#help.visible .header h2 {\n  font-size: 3rem;\n}\n#help.visible h3 {\n  font-size: 2rem;\n  height: 4rem;\n}\n#help.visible .body {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n}\n#help.visible .body .left {\n  width: 50%;\n  padding-right: 2rem;\n}\n#help.visible .body .left p {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n#help.visible .body .right {\n  width: 50%;\n}\n#help.visible .body .right dl.inline-flex {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: wrap;\n  width: 100%;\n  /* set the container width*/\n  overflow: visible;\n}\n#help.visible .body .right dl.inline-flex dt {\n  font-size: 1.5rem;\n  height: 2rem;\n  font-weight: 900;\n  flex: 0 0 20%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n#help.visible .body .right dl.inline-flex dd {\n  font-size: 1.5rem;\n  flex: 0 0 80%;\n  height: 2rem;\n  margin-left: auto;\n  text-align: left;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}", "",{"version":3,"sources":["webpack://./src/scss/styles.scss"],"names":[],"mappings":"AAGA;EACE,eAAA;EACA,SAAA;EACA,UAAA;AAFF;;AAKA;EACE,gBAAA;AAFF;;AAKA;EACE,sBAAA;AAFF;;AAKA;EACE,6BAAA;EACA,6BAAA;EACA,eAAA;EACA,aAAA;EACA,aAAA;EACA,SAAA;EACA,SAAA;EACA,oBAAA;EACA,oBAAA;AAFF;AAIE;EACE,YAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,yCAAA;AAFJ;AAGI;EACE,2CAAA;AADN;AAGI;EACE,2CAAA;AADN;;AAMA;EACE,eAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;EACA,UAAA;EACA,YAAA;EACA,oBAAA;EAEA,YAAA;AAJF;AAME;EACE,oBAAA;EACA,0CAAA;EACA,yBAAA;EACA,iBAAA;EACA,mBAAA;EACA,eAAA;AAJJ;AAOE;EACE,kCAAA;AALJ;AAQE;EACE,oCAAA;AANJ;;AAUA;EACE,aAAA;AAPF;;AAUA;EACE,kBAAA;EACA,UAAA;EACA,SAAA;EACA,aAAA;EACA,sBAAA;AAPF;AAQE;EACE,YAAA;EACA,eAAA;EACA,qBAAA;AANJ;;AAUA;EACE,yCAAA;EACA,eAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;EACA,yBAAA;EACA,oCAAA;EACA,UAAA;EACA,WAAA;EACA,mBAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;AAPF;AASE;EACE,YAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AAPJ;AASI;EACE,SAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;AAPN;AAUI;EACE,eAAA;AARN;AAYE;EACE,eAAA;EACA,YAAA;AAVJ;AAaE;EACE,aAAA;EACA,mBAAA;EACA,YAAA;AAXJ;AAaI;EACE,UAAA;EACA,mBAAA;AAXN;AAYM;EACE,iBAAA;EACA,iBAAA;AAVR;AAcI;EACE,UAAA;AAZN;AAcI;EACE,aAAA;EACA,cAAA;EACA,eAAA;EACA,WAAA;EACA,2BAAA;EACA,iBAAA;AAZN;AAeI;EACE,iBAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,gBAAA;AAbN;AAgBI;EACE,iBAAA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;EACA,gBAAA;EACA,uBAAA;EACA,gBAAA;AAdN","sourcesContent":["// This is all horrible...\n// but it works.\n\n* {\n  font-size: 16px;\n  margin:0;\n  padding:0;\n}\n\nbody {\n  overflow:hidden;\n}\n\n#drawing-canvas {\n  background-color: #fff;\n}\n\n#palette {\n  justify-content: space-around;\n  transform: translate(-50%, 0);\n  position: fixed;\n  display: flex;\n  height: 120px;\n  bottom: 0;\n  left: 50%;\n  padding-bottom: 20px;\n  pointer-events: none;\n\n  .color {\n    margin: 20px;\n    pointer-events: all;\n    width: 80px;\n    cursor: pointer;\n    height: 80px;\n    border-radius: 50%;\n    border: 10px solid rgba(255, 255, 255, 0);\n    &:hover {\n      border: 10px solid rgba(255, 255, 255, 0.8);\n    }\n    &.selected {\n      border: 10px solid rgba(204, 204, 255, 0.7);\n    }\n  }\n}\n\n#layers {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  top: 0px;\n  right: 0px;\n  height: 100%;\n  pointer-events: none;\n\n  margin: 40px;\n\n  .layer {\n    pointer-events: auto;\n    background-color: rgba(255, 255, 255, 0.7);\n    border: 1px solid #cacaca;\n    border-radius: 2%;\n    margin-bottom: 20px;\n    cursor: pointer;\n  }\n\n  .active {\n    border: 2px solid rgb(255, 128, 0);\n  }\n\n  .layer:hover {\n    background-color: rgba(255, 255, 255, 1.0);\n  }\n}\n\n.hidden {\n  display: none;\n}\n\n#tools {\n  position: absolute;\n  left: 1rem;\n  top: 1rem;\n  display: flex;\n  flex-direction: column;\n  button {\n    height: 3rem;\n    padding: .5rem;\n    margin-bottom: 0.5rem;\n  }\n}\n\n#help.visible {\n  font-family: Arial, Helvetica, sans-serif;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 2px solid #cdcdcd;\n  background-color: rgb(240, 240, 240);\n  width: 50%;\n  height: 50%;\n  border-radius: 1rem;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n\n  .header {\n    height: 8rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n\n    button {\n      border: 0;\n      font-size: 1.5rem;\n      cursor: pointer;\n      height: 1rem;\n    }\n  \n    h2 {\n      font-size: 3rem;\n    }\n  }\n\n  h3 {\n    font-size: 2rem;\n    height: 4rem;\n  }\n\n  .body {\n    display: flex;\n    flex-direction: row;\n    height: 100%;\n\n    .left {\n      width: 50%;\n      padding-right: 2rem;\n      p {\n        font-size: 1.5rem;\n        line-height: 2rem;\n      }\n    }\n\n    .right {\n      width: 50%;\n\n    dl.inline-flex {\n      display: flex;\n      flex-flow: row;\n      flex-wrap: wrap;\n      width: 100%;\n      /* set the container width*/\n      overflow: visible;\n    }\n\n    dl.inline-flex dt {\n      font-size: 1.5rem;\n      height: 2rem;\n      font-weight:900;\n      flex: 0 0 20%;\n      text-overflow: ellipsis;\n      overflow: hidden;\n    }\n\n    dl.inline-flex dd {\n      font-size: 1.5rem;\n      flex: 0 0 80%;\n      height: 2rem;\n      margin-left: auto;\n      text-align: left;\n      text-overflow: ellipsis;\n      overflow: hidden;\n    }\n    }\n  }\n    \n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _hud_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hud/toolbar */ "./src/hud/toolbar.ts");









/**
 * The top-level App class, manages setup, base loop, and events
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
        // Set canvas dimensions, TODO: make this dynamic, 
        // currently it's only set when the page loads.
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
        // Create drawing
        this.drawing = new _drawing__WEBPACK_IMPORTED_MODULE_2__["default"]();
        // Sets the defaul/starting Tool.
        this.drawing.setTool(new _tools_marker__WEBPACK_IMPORTED_MODULE_3__["default"](this.drawing));
        // Add a layer to the drawing
        this.drawing.addLayer();
        // Items to the hud
        const hud = new _hud_hud__WEBPACK_IMPORTED_MODULE_5__["default"]();
        // Attach palette to the HUD
        const palette = new _hud_palette__WEBPACK_IMPORTED_MODULE_4__["default"]();
        palette.setColorIndex(0);
        hud.addItem(palette);
        const toolbar = new _hud_toolbar__WEBPACK_IMPORTED_MODULE_8__["default"]("toolbar", this.drawing);
        hud.addItem(toolbar);
        // Attach the layers overview to the HUD
        const layers = new _hud_layers__WEBPACK_IMPORTED_MODULE_6__["default"](this.drawing);
        hud.addItem(layers);
        // Draw the overview, for each layer
        layers.build();
        // Attach the HUD to the drawing
        this.drawing.hud = hud;
        // Event listener to close the help popup that shows on load.
        (_a = document.querySelector("#help #close")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (event) => {
            const help = document.getElementById("help");
            help === null || help === void 0 ? void 0 : help.classList.remove("visible");
            help === null || help === void 0 ? void 0 : help.classList.add("hidden");
        });
        // Pass off all Keyboard events to the key_events handler. 
        // Do this globally. Not just on the Canvas.
        const keyEventHandler = new _util_key_events__WEBPACK_IMPORTED_MODULE_7__["default"](this.drawing);
        document.addEventListener('keydown', (event) => {
            keyEventHandler.handle(event);
        });
        // Attach some events to the main canvas
        if (this.canvas instanceof HTMLCanvasElement) {
            // Update the target position (where we want to draw) when the mouse moves over the canvas
            this.mouse_move = this.canvas.addEventListener("mousemove", (event) => {
                var _a;
                const mouse_pos = new vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector(event.clientX, event.clientY);
                (_a = this.drawing) === null || _a === void 0 ? void 0 : _a.setTargetPosition(mouse_pos);
                hud.setCursorPosition(mouse_pos);
            });
            // If the mouse is down, signal to then drawing object that we're 
            // drawing, with whatever tool we've currently selected.
            this.mouse_down = this.canvas.addEventListener("mousedown", (event) => {
                var _a, _b;
                const mouse_pos = new vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector(event.clientX, event.clientY);
                (_b = (_a = this.drawing) === null || _a === void 0 ? void 0 : _a.tool) === null || _b === void 0 ? void 0 : _b.startDrawing(mouse_pos);
            });
            // Listen for mousewheel, and resize the tool depending on direction.
            this.mouse_wheel = this.canvas.addEventListener("wheel", (event) => {
                var _a, _b, _c, _d, _e, _f;
                if (!this.drawing)
                    return;
                if (event.deltaY > 0) {
                    (_a = this.drawing.tool) === null || _a === void 0 ? void 0 : _a.setSize(((_b = this.drawing) === null || _b === void 0 ? void 0 : _b.tool.size) - 2);
                }
                else {
                    (_c = this.drawing.tool) === null || _c === void 0 ? void 0 : _c.setSize(((_d = this.drawing) === null || _d === void 0 ? void 0 : _d.tool.size) + 2);
                }
                this.drawing.global_target_size = ((_f = (_e = this.drawing) === null || _e === void 0 ? void 0 : _e.tool) === null || _f === void 0 ? void 0 : _f.size) || 20;
            });
            // If we mouseup we need to tell the drawing object, we've stopped drawing.
            this.mouse_up = this.canvas.addEventListener("mouseup", (event) => {
                var _a, _b;
                (_b = (_a = this.drawing) === null || _a === void 0 ? void 0 : _a.tool) === null || _b === void 0 ? void 0 : _b.stopDrawing();
            });
        }
    }
    /**
     * Processes any periodic timers.
     * We can use this to trigger any time based events. ie every 5 seconds do X
     *
     * @param   {DOMHighResTimeStamp}  timestamp  EPOC Milliseconds
     *
     * @return  {void}
     */
    processTimers(timestamp) {
    }
    /**
     * Entry point for all things.
     *
     * Processes timers
     * Updates all application entities,
     * Cascades render to entities.
     * Called every frame
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
/* harmony export */   "LAYER_CREATE_KEYS": () => (/* binding */ LAYER_CREATE_KEYS)
/* harmony export */ });
// The default colors
const COLOR_RED = { r: 255, g: 0, b: 0, a: 1.0 };
const COLOR_GREEN = { r: 0, g: 192, b: 0, a: 1.0 };
const COLOR_BLUE = { r: 0, g: 0, b: 255, a: 1.0 };
const COLOR_YELLOW = { r: 255, g: 255, b: 0, a: 1.0 };
const COLOR_ORANGE = { r: 255, g: 128, b: 0, a: 1.0 };
const COLOR_BLACK = { r: 0, g: 0, b: 0, a: 1.0 };
const LAYER_CREATE_KEYS = 0;
const Constants = {
    PALLETTE_SIZE: 60,
    TOOL_SPACING: 20,
    CANVAS_SIZE: {
        width: (window) ? window.innerWidth : 1980,
        height: (window) ? window.innerHeight : 1080
    },
    GUIDE_SIZE: 10,
    LAYERS_WIDTH: 125,
    LAYER_CREATE_DELAY: 5000,
    LAYER_CREATE_BEHAVIOR: LAYER_CREATE_KEYS,
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
 * Main drawing class, constructs everytrhing
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
         * @var  {Map<number, Layer>}
         */
        this.layers = new Map();
        /**
         * Heads up display (GUI)
         *
         * @var {Hud}
         */
        this.hud = null;
        /**
         * Should we draw the targets. This is the size and shape of the current brush/tool.
         * This is a temporary overlay so the user can see an indeication of what they are
         * doing before they do it.
         *
         * @var {boolean}
         */
        this.draw_target = true;
        /**
         * Target current location, where we're drawing/working.
         *
         * @var {Vec2.Vector}
         */
        this.target = null;
        /**
         * Global tool size
         *
         * @var {number}
         */
        this.global_target_size = 20;
        /**
         * Current tool the user has selected.
         *
         * @var {Tool}
         */
        this.tool = null;
        /**
         * Helper to calculate FPS and framerates
         *
         * @var {number}
         */
        this.timeToDraw = 0;
        /**
         * Holder for deltatime, used for animation.
         *
         * @var {number}
         */
        this.dt = 0;
        /**
         * Previous frame timestamp, used to calculate FPS and animations.
         *
         * @var {DOMHighResTimeStamp}
         */
        this.oldTimestamp = 0.0;
        /**
         * Frames per second
         *
         * @var {number}
         */
        this.fps = 0;
        /**
         * Show debug. Do we want to show debug info onscreen.
         *
         * @var {boolean}
         */
        this.show_debug = true;
    }
    /**
     * Remove a Layer from the canvas
     *
     * @param   {number}  layer_id    ID of the layer to remove
     *
     * @return  {void}
     */
    removeLayer(layer_id) {
        if (layer_id === undefined) {
            return;
        }
        // This removes the layer from the drawing
        this.layers.delete(layer_id);
        // Now that the layer has been removed
        // we need to set the new active_layer.
        // If there's one below, then choose that.
        if (this.layers.has(layer_id - 1)) {
            this.active_layer = this.layers.get(layer_id - 1);
            // Otherwise choose the one above if it exists
        }
        else if (this.layers.has(layer_id + 1)) {
            this.active_layer = this.layers.get(layer_id + 1);
            // If neither of those are true...
        }
        else {
            if (this.layers.size === 0) {
                // If there are no layers left, create a new one, set it active.
                this.layers.clear();
                this.addLayer();
            }
            else {
                // Oteherwise choose the layer with the smallest ID
                this.active_layer = this.layers.get(Math.min(...this.layers.keys()));
            }
        }
        // Redraw the layers overview.
        this.redrawHud();
    }
    /**
     * Given an ID, return a Layer with that ID if it exists, null if it doesn't.
     *
     * @param   {number}  layer_id  ID of the layer to return.
     *
     * @return  {Layer | null}
     */
    getLayer(layer_id) {
        const layer = this.layers.get(layer_id);
        if (layer)
            return layer;
        return null;
    }
    /**
     * Redraw all HUD items. We don't want to do
     * this every frame as these are DOM items, so we have
     * an explicit call to do so when we need to.
     *
     * @return  {void}
     */
    redrawHud() {
        var _a, _b;
        (_b = (_a = this.hud) === null || _a === void 0 ? void 0 : _a.getByName("layers")) === null || _b === void 0 ? void 0 : _b.build();
    }
    /**
     * Add a layer to the drawing, set it as active
     * and redraw the hud to show it in the layer overview.
     *
     * @return  {void}
     */
    addLayer() {
        this.active_layer = new _tools_layer__WEBPACK_IMPORTED_MODULE_2__["default"](this.layer_id, this);
        this.layers.set(this.active_layer.id, this.active_layer);
        this.layer_id++;
        this.redrawHud();
    }
    /**
     * Sets the active layer.
     *
     * @param   {number}  layer_id  ID of the layer to set as active.
     *
     * @return  {void}
     */
    setActiveLayer(layer_id) {
        // TODO: Assumes the layer_id exists, what do we do if it doesn't?
        this.active_layer = this.layers.get(layer_id);
        this.redrawHud();
    }
    /**
     * Returns the next Layer
     *
     * @param   {number}  current_layer_id  ID of the current layer.
     *
     * @return  {number}   Returns the ID of the next layer in the Map()
     */
    getNextLayer(current_layer_id) {
        let next = false;
        // Render each of the existing entitites. (Drawings)
        for (let [key, layer] of this.layers) {
            if (next === true)
                return key;
            if (key === current_layer_id) {
                next = true;
            }
        }
        return 1;
    }
    /**
     * Returns the prev Layer
     *
     * @param   {number}  current_layer_id  ID of the current layer.
     *
     * @return  {number}   Returns the ID of the next layer in the Map()
     */
    getPrevLayer(current_layer_id) {
        let previous = -1;
        // Render each of the existing entitites. (Drawings)
        for (let [key, layer] of this.layers) {
            if (key === current_layer_id) {
                return previous;
            }
            previous = key;
        }
        return 1;
    }
    /**
     * Adds an entity to the active layer. This will get drawn in the next frame.
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
     * Set the tool that the user has selected.
     *
     * @param   {Tool}  tool  Set's the active tool to Tool
     *
     * @return  {void}
     */
    setTool(tool) {
        this.tool = tool;
        this.tool.setSize(this.global_target_size);
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
     * Sets the current target position (Where the mouse is)
     *
     * @var {Vec2.Vector} mouse_pos   Target position
     *
     * @return {void}
     */
    setTargetPosition(mouse_pos) {
        this.target = mouse_pos;
        if (this.tool) {
            this.tool.setLocation(mouse_pos);
        }
    }
    /**
     * Helper function to draw the targets, (Draws the Tool helper to the UI)
     *
     * @param   {CanvasRenderingContext2D}  context  Canvas drawing context
     *
     * @return  {void}
     */
    drawTarget(context) {
        if (this.tool != null) {
            this.tool.drawTarget(context);
        }
    }
    /**
     * Return count of all entites by type, if no type specified,
     * then retunr count of all.
     *
     * @param   {string?}  type  Entity Type|Name [optional]
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
        var _a, _b;
        context.fillStyle = '#dddddd55';
        context.fillRect(_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width - 75, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height - 100, 75, 100);
        context.font = '11px Arial';
        context.fillStyle = 'black';
        context.fillText("FPS: " + this.fps, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width - 70, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height - 85);
        context.fillText("LAYERS: " + this.layers.size, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width - 70, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height - 70);
        context.fillText("ENT: " + this.countEntities(), _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width - 70, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height - 55);
        context.fillText("LOC-X: " + ((_a = this.target) === null || _a === void 0 ? void 0 : _a.x), _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width - 70, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height - 40);
        context.fillText("LOC-Y: " + ((_b = this.target) === null || _b === void 0 ? void 0 : _b.y), _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width - 70, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height - 25);
    }
    /**
     * Renders any canvas based hud items.
     *
     * @param   {CanvasRenderingContext2D}  context  Canvas rendering context
     *
     * @return  {void}
     */
    drawHud(context) {
        if (!this.hud)
            return;
        this.hud.render(context);
    }
    /**
     * Returns the current active color, as specified bu the palette.
     * defaults to Black if no color is set.
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
     * Parent for all the rendering for the app
     *
     * @param   {HTMLCanvasElement}         canvas   Canvas
     * @param   {CanvasRenderingContext2D}  context  Canvas drawing context
     *
     * @return  {void}
     */
    render(canvas, context) {
        var _a, _b, _c;
        // Clear the screen every frame
        context.clearRect(0, 0, canvas.width, canvas.height);
        // Render each of the existing entitites. (Drawings)
        for (let [key, layer] of this.layers) {
            layer.render(context);
        }
        // Draw any tool helpers, draw the thing currently being drawn.
        if ((_a = this.tool) === null || _a === void 0 ? void 0 : _a.active_entity) {
            this.tool.active_entity.draw(context);
        }
        // Draw to the entity currently being drawn
        if ((_b = this.tool) === null || _b === void 0 ? void 0 : _b.is_drawing) {
            this.tool.draw(context);
        }
        // Draw target, if turned on.
        if (this.draw_target)
            this.drawTarget(context);
        // Show the debug, if turned on.
        if (this.show_debug)
            this.drawDebug(context);
        // Draw the HUD.
        this.drawHud(context);
        if (((_c = this.tool) === null || _c === void 0 ? void 0 : _c.name) === 'select' && this.active_layer && this.target) {
            this.active_layer.drawGuides(context, this.target);
        }
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
        // Remove any entities that are set for removal. Could probably 
        /// be done in the loop below if performance becomes an issue,
        // for now it's fine. Clearer to keep the seperate.
        this.removeEntities();
        // Process any entity calcs for rendering next tick.
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
 * Core entity class, all drawn objects within the app are entities.
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
         * Colour of the entity
         *
         * @return  {Color}  Colour object that the entity will be drawn as.
         */
        this.color = new _util_color__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 0);
        /**
         * Size of the entity
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
    /**
     * Process any entity updates or calculations to be rendered next tick.
     *
     * @param   {number}  delta  time since last frame.
     *
     * @return  {void}
     */
    process(delta) {
    }
    /**
     * Function to call when drawing is complete.
     *
     * @return  {<void>}
     */
    complete() {
        this.completed = Date.now();
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
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _util_points__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/points */ "./src/util/points.ts");
/* harmony import */ var _util_normalize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/normalize */ "./src/util/normalize.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entity */ "./src/entities/entity.ts");
/* harmony import */ var _util_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/guide */ "./src/util/guide.ts");






class Freehand extends _entity__WEBPACK_IMPORTED_MODULE_4__["default"] {
    /**
     * @param   {number}  size   Size of the entity
     * @param   {Color}   color  Color of the entity
     */
    constructor(size, color, drawing, close = false) {
        super('freehand');
        /**
         * Points of the freehand line
         *
         * @var {Array<Vector>}
         */
        this.points = [];
        /**
         * Enables the entity to be scaled and displayed at
         * a different size, ie in the layers overview.
         *
         * @var {number}
         */
        this.scale = 1.0;
        this.close = close;
        this.drawing = drawing;
        this.size = size;
        this.color = color;
    }
    /**
     * [complete description]
     *
     * @return  {void}    [return description]
     */
    complete() {
        super.complete();
        if (this.points.length < 1)
            return;
        const simplified = (0,_util_points__WEBPACK_IMPORTED_MODULE_2__.simplify)(this.points, 3);
        const flat = (0,_util_points__WEBPACK_IMPORTED_MODULE_2__.flattenPoints)(simplified);
        const curved = (0,_util_points__WEBPACK_IMPORTED_MODULE_2__.getCurvePoints)(flat, 0.7, 1, this.close);
        this.points = (0,_util_points__WEBPACK_IMPORTED_MODULE_2__.expandPoints)(curved);
    }
    /**
     * Draw this entity to the given context. Contains all the
     * logic to draw a freehand line onto a context.
     *
     * @param   {CanvasRenderingContext2D}  context  The canvas context to draw this entity to.
     *
     * @return  {void}
     */
    drawPath(context, stroke) {
        // If there's nothing to draw, shorcircuit.
        if (this.points.length < 1)
            return;
        // Set the scale to equal the default
        let scale = this.scale;
        // Caculate the scale based on the size of the canvas context's canvas
        if (context.canvas.width !== _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.width) {
            scale = context.canvas.width / _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.width;
        }
        // Draw
        context.beginPath();
        context.lineWidth = this.size * scale;
        context.strokeStyle = this.color.getHex(false);
        context.fillStyle = this.color.getHex(false);
        context.lineCap = "round";
        // We denormalize the points, based on the canvas size and scale.
        const initialPoint = (0,_util_normalize__WEBPACK_IMPORTED_MODULE_3__.denormalize)(this.points[0], context.canvas.width, context.canvas.height);
        // Move the turtle to this.points[0]
        context.moveTo(initialPoint.x, initialPoint.y);
        // Start at the second point `this.points[1]`
        for (var i = 0; i < this.points.length; i++) {
            // Denmormalise current point to pixel values
            const denormalized = (0,_util_normalize__WEBPACK_IMPORTED_MODULE_3__.denormalize)(this.points[i], context.canvas.width, context.canvas.height);
            // If there's more than 2 points and the current point isn't the last one...
            if (this.points.length > 1 && i < (this.points.length - 1)) {
                // Denormalise the next point, so that we can draw a quadratic curve to it
                const denomalizedNext = (0,_util_normalize__WEBPACK_IMPORTED_MODULE_3__.denormalize)(this.points[i + 1], context.canvas.width, context.canvas.height);
                // Calulate the mid-point between current and next points
                var c = (denormalized.x + denomalizedNext.x) / 2;
                var d = (denormalized.y + denomalizedNext.y) / 2;
                // Draw the quadratic curve to this point
                context.quadraticCurveTo(denormalized.x, denormalized.y, c, d);
            }
            else {
                // Otherwise just draw a simple line
                context.lineTo(denormalized.x, denormalized.y);
            }
        }
        if (this.close) {
            context.closePath();
            context.fill();
        }
        // Stroke it. ԅ(≖⌣≖ԅ)
        if (stroke)
            context.stroke();
    }
    /**
     * [draw description]
     *
     * @param   {CanvasRenderingContext2D}  context  [context description]
     *
     * @return  {void}                               [return description]
     */
    draw(context) {
        this.drawPath(context, true);
    }
    /**
     * Draws tool guides
     *
     * @param   {CanvasRenderingContext2D}  context  [context description]
     *
     * @return  {void}                               [return description]
     */
    drawGuides(context, target) {
        // If there's nothing to draw, shorcircuit.
        if (this.points.length > 0) {
            for (var i = 0; i < this.points.length; i++) {
                const vector = (0,_util_normalize__WEBPACK_IMPORTED_MODULE_3__.denormalize)(this.points[i], _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.width, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.height);
                (0,_util_guide__WEBPACK_IMPORTED_MODULE_5__.drawGuide)(context, vector, target);
            }
            const boundingBox = this.getBoundingBox();
            (0,_util_guide__WEBPACK_IMPORTED_MODULE_5__.drawBoundingBox)(boundingBox[0], boundingBox[1], context);
        }
    }
    /**
     * Add a point to the canvas
     *
     * @param   {Vector}  location  [location description]
     *
     * @return  {void}
     */
    add(location) {
        // Points are normalized to x: 0.0 - 1.0, y: 0.0 - 1.0, as using pixel values is restrictive
        this.points.push((0,_util_normalize__WEBPACK_IMPORTED_MODULE_3__.normalize)(location, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.width, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.height));
    }
    /**
     * Check if we're intersecting a vector
     *
     * @param   {Vector}  position  [position description]
     *
     * @return  {void}              [return description]
     */
    getIntercetingVector(position) {
        const size = _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.GUIDE_SIZE;
        // If there's nothing to draw, shorcircuit.
        if (this.points.length > 0) {
            for (var i = 0; i < this.points.length; i++) {
                const vector = (0,_util_normalize__WEBPACK_IMPORTED_MODULE_3__.denormalize)(this.points[i], _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.width, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.height);
                const startX = vector.x - (size / 2);
                const startY = vector.y - (size / 2);
                if (position.x > startX && position.x < (startX + size) && position.y > startY && position.y < (startY + size)) {
                    return this.points[i];
                }
            }
        }
    }
    /**
     * [getBoundingBox description]
     *
     * @param   {Vector[]}  position  [position description]
     *
     * @return  {void[]}              [return description]
     */
    getBoundingBox() {
        const width = _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.width;
        const height = _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.height;
        let minX = width;
        let minY = height;
        let maxX = 0;
        let maxY = 0;
        for (let point of this.points) {
            const denormalizePoint = (0,_util_normalize__WEBPACK_IMPORTED_MODULE_3__.denormalize)(point, width, height);
            if (denormalizePoint.x < minX)
                minX = denormalizePoint.x;
            if (denormalizePoint.y < minY)
                minY = denormalizePoint.y;
            if (denormalizePoint.x >= maxX)
                maxX = denormalizePoint.x;
            if (denormalizePoint.y >= maxY)
                maxY = denormalizePoint.y;
        }
        return [
            (0,_util_normalize__WEBPACK_IMPORTED_MODULE_3__.normalize)(new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(minX - (this.size / 2), minY - (this.size / 2)), width, height),
            (0,_util_normalize__WEBPACK_IMPORTED_MODULE_3__.normalize)(new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(maxX + (this.size / 2), maxY + (this.size / 2)), width, height)
        ];
    }
    /**
     * [isPointOver description]
     *
     * @return  {void}    [return description]
     */
    isPointOver(context, pointer) {
        this.drawPath(context, false);
        if (this.close) {
            return context.isPointInPath(pointer.x, pointer.y);
        }
        return context.isPointInStroke(pointer.x, pointer.y);
    }
    /**
     * Moves an entity
     *
     * @param   {Vector}  vector  [vector description]
     *
     * @return  {void}            [return description]
     */
    moveEntity(vector) {
        for (let point of this.points) {
            point.subtract(vector);
        }
    }
}


/***/ }),

/***/ "./src/entities/null.ts":
/*!******************************!*\
  !*** ./src/entities/null.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Null)
/* harmony export */ });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/entities/entity.ts");

class Null extends _entity__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * @param   {number}  size   Size of the entity
     * @param   {Color}   color  Color of the entity
     */
    constructor(drawing) {
        super('null');
        /**
         * Points of the freehand line
         *
         * @var {Array<Vector>}
         */
        this.points = [];
        /**
         * Enables the entity to be scaled and displayed at
         * a different size, ie in the layers overview.
         *
         * @var {number}
         */
        this.scale = 1.0;
        this.drawing = drawing;
    }
    /**
     * [complete description]
     *
     * @return  {void}    [return description]
     */
    complete() {
        var _a;
        super.complete();
        (_a = this.drawing) === null || _a === void 0 ? void 0 : _a.redrawHud();
    }
    /**
     * Draw this entity to the given context. Contains all the
     * logic to draw a freehand line onto a context.
     *
     * @param   {CanvasRenderingContext2D}  context  The canvas context to draw this entity to.
     *
     * @return  {void}
     */
    draw(context) {
        // Not used
        return;
    }
    /**
     * Draws tool guides
     *
     * @param   {CanvasRenderingContext2D}  context  [context description]
     *
     * @return  {void}                               [return description]
     */
    drawGuides(context, target) {
        // Not used
        return;
    }
    /**
     * Add a point to the canvas
     *
     * @param   {Vector}  location  [location description]
     *
     * @return  {void}
     */
    add(location) {
        // Not used
        return;
    }
    /**
     * [getIntercetingVector description]
     *
     * @param   {Vector}  position  [position description]
     *
     * @return  {void}              [return description]
     */
    getIntercetingVector(position) {
        // Not used
        return;
    }
    /**
     * [getBoundingBox description]
     *
     * @param   {Vector<Vector>}  position  [position description]
     *
     * @return  {void<Vector>}              [return description]
     */
    getBoundingBox() {
        // Not used
        return;
    }
    isPointOver(context, pointer) {
        // Not used
        return;
    }
    moveEntity(vector) {
    }
}


/***/ }),

/***/ "./src/entities/rect.ts":
/*!******************************!*\
  !*** ./src/entities/rect.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Rect)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _util_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/normalize */ "./src/util/normalize.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entity */ "./src/entities/entity.ts");
/* harmony import */ var _util_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/guide */ "./src/util/guide.ts");




class Rect extends _entity__WEBPACK_IMPORTED_MODULE_2__["default"] {
    /**
     * @param   {number}  size   Size of the entity
     * @param   {Color}   color  Color of the entity
     */
    constructor(size, color, drawing) {
        super('rect');
        /**
         * Points of the freehand line
         *
         * @var {Array<Vector>}
         */
        this.points = [];
        /**
         *
         */
        this.origin = null;
        /**
         * [description]
         */
        this.destination = null;
        /**
         * Enables the entity to be scaled and displayed at
         * a different size, ie in the layers overview.
         *
         * @var {number}
         */
        this.scale = 1.0;
        this.rotation = 0.01;
        this.drawing = drawing;
        this.size = size;
        this.color = color;
    }
    /**
     * [complete description]
     *
     * @return  {void}    [return description]
     */
    complete() {
        super.complete();
    }
    /**
     * Draw this entity to the given context. Contains all the
     * logic to draw a freehand line onto a context.
     *
     * @param   {CanvasRenderingContext2D}  context  The canvas context to draw this entity to.
     *
     * @return  {void}
     */
    drawPath(context, stroke) {
        // If there's nothing to draw, shorcircuit.
        if (this.origin && this.destination) {
            const origin = (0,_util_normalize__WEBPACK_IMPORTED_MODULE_1__.denormalize)(this.origin, context.canvas.width, context.canvas.height);
            const destination = (0,_util_normalize__WEBPACK_IMPORTED_MODULE_1__.denormalize)(this.destination, context.canvas.width, context.canvas.height);
            // Set the scale to equal the default
            let scale = this.scale;
            // Caculate the scale based on the size of the canvas context's canvas
            if (context.canvas.width !== _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width) {
                scale = context.canvas.width / _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width;
            }
            // Draw
            context.beginPath();
            context.lineWidth = this.size * scale;
            context.strokeStyle = this.color.getHex(false);
            context.fillStyle = this.color.getHex(false);
            context.lineCap = "round";
            context.rect(origin.x, origin.y, -(origin.x - destination.x), -(origin.y - destination.y));
            if (stroke)
                context.stroke();
        }
    }
    draw(context) {
        this.drawPath(context, true);
    }
    /**
     * Draws tool guides
     *
     * @param   {CanvasRenderingContext2D}  context  [context description]
     *
     * @return  {void}                               [return description]
     */
    drawGuides(context, target) {
        if (this.origin && this.destination) {
            (0,_util_guide__WEBPACK_IMPORTED_MODULE_3__.drawGuide)(context, (0,_util_normalize__WEBPACK_IMPORTED_MODULE_1__.denormalize)(this.origin, context.canvas.width, context.canvas.height), target);
            (0,_util_guide__WEBPACK_IMPORTED_MODULE_3__.drawGuide)(context, (0,_util_normalize__WEBPACK_IMPORTED_MODULE_1__.denormalize)(this.destination, context.canvas.width, context.canvas.height), target);
        }
        const boundingBox = this.getBoundingBox();
        (0,_util_guide__WEBPACK_IMPORTED_MODULE_3__.drawBoundingBox)(boundingBox[0], boundingBox[1], context);
    }
    /**
     * Add a point to the canvas
     *
     * @param   {Vector}  location  [location description]
     *
     * @return  {void}
     */
    add(location) {
        const point = (0,_util_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize)(location, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height);
        if (!this.origin) {
            this.origin = point;
        }
        else {
            this.destination = point;
        }
    }
    /**
     * Check if we're intersecting a vector
     *
     * @param   {Vector}  position  [position description]
     *
     * @return  {void}              [return description]
     */
    getIntercetingVector(position) {
        const size = _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.GUIDE_SIZE;
        if (this.origin && this.destination) {
            const denormal_origin = (0,_util_normalize__WEBPACK_IMPORTED_MODULE_1__.denormalize)(this.origin, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height);
            if (position.x > (denormal_origin.x - (size / 2)) &&
                position.x < ((denormal_origin.x - (size / 2)) + size) &&
                position.y > (denormal_origin.y - (size / 2)) &&
                position.y < ((denormal_origin.y - (size / 2)) + size)) {
                return this.origin;
            }
            const denormal_destination = (0,_util_normalize__WEBPACK_IMPORTED_MODULE_1__.denormalize)(this.destination, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height);
            if (position.x > (denormal_destination.x - (size / 2)) &&
                position.x < ((denormal_destination.x - (size / 2)) + size) &&
                position.y > (denormal_destination.y - (size / 2)) &&
                position.y < ((denormal_destination.y - (size / 2)) + size)) {
                return this.destination;
            }
        }
    }
    /**
     * Get Bounding box
     *
     * @return  {void[]}  [return description]
     */
    getBoundingBox() {
        if (this.origin && this.destination)
            return [this.origin, this.destination];
        return;
    }
    /**
     * Is point over
     *
     * @param   {CanvasRenderingContext2D}  context  [context description]
     * @param   {Vector}                    pointer  [pointer description]
     *
     * @return  {boolean}                            [return description]
     */
    isPointOver(context, pointer) {
        this.drawPath(context, false);
        return context.isPointInStroke(pointer.x, pointer.y);
    }
    /**
     * Move
     *
     * @param   {Vector}  vector  [vector description]
     *
     * @return  {void}            [return description]
     */
    moveEntity(vector) {
        var _a, _b;
        (_a = this.origin) === null || _a === void 0 ? void 0 : _a.subtract(vector);
        (_b = this.destination) === null || _b === void 0 ? void 0 : _b.subtract(vector);
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
         *
         * @var {Array<HudItem>}
         */
        this.items = [];
        /**
         * If we want the HUD to be visible
         *
         * @var {boolean}
         */
        this.visible = true;
        /**
         * Position of the mouse
         *
         * @var {Vector}
         */
        this.cursor_position = null;
    }
    /**
     * Would render any canvas based hud items.
     *
     * @param   {CanvasRenderingContext2D}  context  Canvas rendering context
     *
     * @return  {void}
     */
    render(context) {
        // Nothing here yet.
    }
    /**
     * Check for cursor and hud intersects
     *
     * @param   {number}  delta  [delta description]
     *
     * @return  {void}           [return description]
     */
    process(delta) {
        // Nothing here yet.
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
        item.build();
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
     * Tracks the cursor position for hud use.
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
     */
    constructor(drawing) {
        super("layers");
        /**
         * HTML Div Element, where the HTMLCanvasElement layers will be created.
         *
         * @var {HTMLDivElement | null}
         */
        this.target = null;
        this.target = document.getElementById('layers');
        this.drawing = drawing;
    }
    /**
     * Build the layers UI, this empties then creates
     * HTMLCanvasElements inside the `this.target` HTMLDivElement
     * This gives us the layer overview on the right.
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
    /**
     * Sets up the Palette HUD item
     */
    constructor() {
        super("palette");
        /**
         * List of available colors
         *
         * @var {Array<Color>}
         */
        this.colors = [];
        /**
         * The currently selected color
         *
         * @var {Color}
         */
        this.selected_color = new _util_color__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, 0, 0.5);
        /**
         * The currently selected color index, this is the index
         * in `this.colors` of the currently selected color
         *
         * @var {number}
         */
        this.selected_color_index = 1;
        for (var color of _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.COLORS) {
            this.colors.push(new _util_color__WEBPACK_IMPORTED_MODULE_1__["default"](color.r, color.g, color.b, color.a));
        }
        this.update();
    }
    /**
     * Build the UI, this finds the HTMLDivElement with the
     * ID `palette` and clears it out, then places another
     * HTMLDivElement inside for every color in `this.colors`
     * and sets the background color to the color of each color.
     *
     * @return  {void}
     */
    build() {
        const target = document.getElementById('palette');
        if (!target)
            return;
        // Empty the target
        target.innerHTML = '';
        // Add each of the colours as a Div with a background color
        for (let i = 0; i < this.colors.length; i++) {
            const div = document.createElement("div");
            div.style.backgroundColor = this.colors[i].getHex();
            // Add the class `color` which applies the styles
            div.classList.add("color");
            // This is the currently selected color, so add the appropriate class
            if (i === this.selected_color_index)
                div.classList.add("selected");
            // Add the event listener
            div.addEventListener('click', (event) => {
                this.setColorIndex(i);
            });
            target === null || target === void 0 ? void 0 : target.appendChild(div);
        }
    }
    /**
     * Returns the currently selected color
     *
     * @return  {Color}   The currently selected color
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

/***/ "./src/hud/toolbar.ts":
/*!****************************!*\
  !*** ./src/hud/toolbar.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Toolbar)
/* harmony export */ });
/* harmony import */ var _tools_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/marker */ "./src/tools/marker.ts");
/* harmony import */ var _tools_rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/rectangle */ "./src/tools/rectangle.ts");
/* harmony import */ var _tools_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/select */ "./src/tools/select.ts");
/* harmony import */ var _tools_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/shape */ "./src/tools/shape.ts");
/* harmony import */ var _hud_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hud_item */ "./src/hud/hud_item.ts");





class Toolbar extends _hud_item__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor(name, drawing) {
        super(name);
        this.tools = [
            {
                key: "marker",
                title: "Marker"
            },
            {
                key: "freehand_shape",
                title: "Closed"
            },
            {
                key: "rect",
                title: "Rectangle"
            },
            {
                key: "select",
                title: "Modify"
            },
        ];
        /**
         * Drawing reference.
         */
        this.drawing = null;
        this.drawing = drawing;
    }
    /**
     * [setTool description]
     *
     * @param   {string}  tool  [tool description]
     *
     * @return  {[type]}        [return description]
     */
    setTool(tool) {
        var _a, _b, _c, _d;
        switch (tool) {
            case 'select':
                (_a = this.drawing) === null || _a === void 0 ? void 0 : _a.setTool(new _tools_select__WEBPACK_IMPORTED_MODULE_2__["default"](this.drawing));
                break;
            case 'marker':
                (_b = this.drawing) === null || _b === void 0 ? void 0 : _b.setTool(new _tools_marker__WEBPACK_IMPORTED_MODULE_0__["default"](this.drawing));
                break;
            case 'freehand_shape':
                (_c = this.drawing) === null || _c === void 0 ? void 0 : _c.setTool(new _tools_shape__WEBPACK_IMPORTED_MODULE_3__["default"](this.drawing));
                break;
            case 'rect':
                (_d = this.drawing) === null || _d === void 0 ? void 0 : _d.setTool(new _tools_rectangle__WEBPACK_IMPORTED_MODULE_1__["default"](this.drawing));
                break;
        }
    }
    /**
     * Build the toolbar
     *
     * @return  {void}
     */
    build() {
        const target = document.getElementById("tools");
        if (!target)
            return;
        target.innerHTML = '';
        for (let tool of this.tools) {
            const button = document.createElement('button');
            button.innerText = tool.title;
            button.id = tool.key;
            button.addEventListener("click", (event) => {
                this.setTool(tool.key);
            });
            target.appendChild(button);
        }
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");

class Layer {
    /**
     * Set up the Layer
     *
     * @param   {Drawing}  drawing  Drawing reference
     */
    constructor(id, drawing) {
        /**
         * This Layers ID
         *
         * @var {number}
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
         *
         * @var {Entity | null}
         */
        this.active_entity = null;
        /**
         * Is there an entity being targeted in edit mode?
         */
        this.entityTargeted = null;
        /**
         * Entity incremental number, used to track unique numerical
         * id of all entities loaded onto the canvas
         *
         * @var {number}
         */
        this.entity_id = 0;
        /**
         * Reference to the main Drawing
         *
         * @var {Drawing | null}
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
     * Returns an Entity given an ID
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
        // No type specifice, so include all entities.
        if (!type)
            return this.entities.size;
        // A type was specified, so check type before adding
        let count = 0;
        for (let [key, entity] of this.entities) {
            if (entity.name == type && entity.remove == false) {
                count++;
            }
        }
        return count;
    }
    /**
     * Process any updates that need to be rendered next tick. We
     * have the ability to remove the entities one by one. That's
     * still a TODO though.
     *
     * @param   {number}               deltatime        The time since last tick
     * @param   {DOMHighResTimeStamp}  timestamp        Current timestamp
     *
     * @return  {void}
     */
    process(deltatime, timestamp) {
        for (let [key, entity] of this.entities) {
            if (entity.remove) {
                this.entities.delete(key);
            }
        }
    }
    /**
     * Handle all the rendering for this layers entities
     *
     * @param   {CanvasRenderingContext2D}  context  The canvas context for applying the entity reders to
     *
     * @return  {void}
     */
    render(context) {
        // Render each of the existing entitites. (Drawings)
        for (let [key, entity] of this.entities) {
            entity.render(context);
        }
    }
    /**
     * Handles the UI drawing of a layer in the layer overview
     *
     * @param   {HTMLDivElement}     parent  The Div element to render into
     * @param   {number}             width   The target width of the canvas
     * @param   {number}             height  The target height of the canvas
     *
     * @return  {void}
     */
    draw(parent, width, height, active) {
        // Create the new Canvas Element
        const canvas = document.createElement("canvas");
        // Set all it's properties
        canvas.width = width;
        canvas.height = height;
        canvas.id = `layer-${this.id}`;
        canvas.classList.add('layer');
        // Listen for the selected layer click
        canvas.addEventListener('click', (event) => {
            var _a;
            (_a = this.drawing) === null || _a === void 0 ? void 0 : _a.setActiveLayer(this.id);
        });
        // Set the active class if it's the currently selected one.
        if (active) {
            canvas.classList.add('active');
        }
        // Newer layers go on top, so `insertBefore` is used
        parent === null || parent === void 0 ? void 0 : parent.insertBefore(canvas, parent.firstChild);
        // Get the context for rendering
        const context = canvas.getContext('2d');
        if (context == null)
            return;
        // Render each of the entities to the new HTMLCanvasElement
        for (let [key, entity] of this.entities) {
            entity.render(context);
        }
    }
    /**
     * [drawGuides description]
     *
     * @param   {CanvasRenderingContext2D}  context  [context description]
     * @param   {Vector}                    target   [target description]
     *
     * @return  {void}                               [return description]
     */
    drawGuides(context, target) {
        var _a, _b;
        let selected_vector;
        let pointerOverEntity = null;
        for (let [key, entity] of this.entities) {
            entity.drawGuides(context, target);
            const pointerOver = entity.isPointOver(context, target);
            if (pointerOver) {
                pointerOverEntity = entity;
            }
            if (!selected_vector) {
                selected_vector = entity.getIntercetingVector(target);
            }
        }
        if (pointerOverEntity) {
            if (pointerOverEntity !== this.entityTargeted) {
                this.entityTargeted = pointerOverEntity;
            }
        }
        else {
            this.entityTargeted = null;
        }
        const canvas = document.getElementById(_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_TARGET);
        if (this.entityTargeted) {
            if (canvas)
                canvas.style.cursor = 'pointer';
        }
        else {
            if (canvas)
                canvas.style.cursor = 'default';
        }
        if (selected_vector) {
            ((_a = this.drawing) === null || _a === void 0 ? void 0 : _a.tool).selected_vector = selected_vector;
        }
        else {
            ((_b = this.drawing) === null || _b === void 0 ? void 0 : _b.tool).selected_vector = null;
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
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tool */ "./src/tools/tool.ts");


class Marker extends _tool__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Sets up marker
     */
    constructor(drawing) {
        super(drawing, 'marker');
    }
    /**
     * While drawing (mousedown) constantly add the current cursor
     * location to the active entity
     *
     * @param   {CanvasRenderingContext2D}  context  Canvas redering context
     *
     * @return  {void}
     */
    draw(context) {
        if (this.active_entity) {
            this.active_entity.add(this.location);
        }
    }
    /**
     * Returns the entity this `Tool` creates.
     *
     * @return  {Entity}  The entity to be added to the layer
     */
    getEntity(drawing) {
        const color = this.drawing.getColor();
        return new _entities_freehand__WEBPACK_IMPORTED_MODULE_0__["default"](this.size, color, this.drawing);
    }
}


/***/ }),

/***/ "./src/tools/rectangle.ts":
/*!********************************!*\
  !*** ./src/tools/rectangle.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Rectangle)
/* harmony export */ });
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./src/tools/tool.ts");
/* harmony import */ var _entities_rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/rect */ "./src/entities/rect.ts");


class Rectangle extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Sets up marker
     */
    constructor(drawing) {
        super(drawing, 'rectangle');
    }
    /**
     * While drawing (mousedown) constantly add the current cursor
     * location to the active entity
     *
     * @param   {CanvasRenderingContext2D}  context  Canvas redering context
     *
     * @return  {void}
     */
    draw(context) {
        if (this.active_entity) {
            this.active_entity.add(this.location);
        }
    }
    /**
     * Returns the entity this `Tool` creates.
     *
     * @return  {Entity}  The entity to be added to the layer
     */
    getEntity(drawing) {
        const color = this.drawing.getColor();
        return new _entities_rect__WEBPACK_IMPORTED_MODULE_1__["default"](this.size, color, this.drawing);
    }
}


/***/ }),

/***/ "./src/tools/select.ts":
/*!*****************************!*\
  !*** ./src/tools/select.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./src/tools/tool.ts");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entities_null__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/null */ "./src/entities/null.ts");
/* harmony import */ var _util_normalize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/normalize */ "./src/util/normalize.ts");




class Select extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Sets up marker
     */
    constructor(drawing) {
        super(drawing, 'select');
        /**
         * Currently selected vedctor if any
         *
         * @var {Vector}
         */
        this.selected_vector = null;
        /**
         * The inital point where we started drawing
         */
        this.initial_point = null;
    }
    /**
     * [setLocation description]
     *
     * @param   {Vector}  location  [location description]
     *
     * @return  {void}              [return description]
     */
    startDrawing(location) {
        super.startDrawing(location);
        if (!this.initial_point)
            this.initial_point = location;
    }
    /**
     * While drawing (mousedown) constantly add the current cursor
     * location to the active entity
     *
     * @param   {CanvasRenderingContext2D}  context  Canvas redering context
     *
     * @return  {void}
     */
    draw(context) {
        var _a, _b;
        const normalized_location = (0,_util_normalize__WEBPACK_IMPORTED_MODULE_3__.normalize)(this.location, context.canvas.width, context.canvas.height);
        if (this.selected_vector) {
            this.selected_vector.x = normalized_location.x;
            this.selected_vector.y = normalized_location.y;
        }
        else {
            if ((_a = this.drawing.active_layer) === null || _a === void 0 ? void 0 : _a.entityTargeted) {
                if (this.initial_point) {
                    const differenceVec = (0,_util_normalize__WEBPACK_IMPORTED_MODULE_3__.normalize)(new vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector(this.initial_point.x - this.location.x, this.initial_point.y - this.location.y), context.canvas.width, context.canvas.height);
                    (_b = this.drawing.active_layer) === null || _b === void 0 ? void 0 : _b.entityTargeted.moveEntity(differenceVec);
                    this.initial_point = this.location;
                }
            }
        }
    }
    /**
     * Stops drawing, adds enetity complete time, adds the
     * entity to the drawing, which will pass it to the
     * active layerand resets the active entity.
     *
     * @return  {void}
     */
    stopDrawing() {
        super.stopDrawing();
        this.initial_point = null;
        this.selected_vector = null;
    }
    /**
     * Draw the tool target
     *
     * @param   {CanvasRenderingContext2D}  context  Canvas drawing context
     *
     * @return  {void}
     */
    drawTarget(context) {
        // void
    }
    /**
     * Returns the entity this `Tool` creates.
     *
     * @return  {Entity}  The entity to be added to the layer
     */
    getEntity(drawing) {
        const color = this.drawing.getColor();
        return new _entities_null__WEBPACK_IMPORTED_MODULE_2__["default"](drawing);
    }
}


/***/ }),

/***/ "./src/tools/shape.ts":
/*!****************************!*\
  !*** ./src/tools/shape.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Shape)
/* harmony export */ });
/* harmony import */ var _entities_freehand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/freehand */ "./src/entities/freehand.ts");
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tool */ "./src/tools/tool.ts");


class Shape extends _tool__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Sets up marker
     */
    constructor(drawing) {
        super(drawing, 'freehand_shape');
    }
    /**
     * While drawing (mousedown) constantly add the current cursor
     * location to the active entity
     *
     * @param   {CanvasRenderingContext2D}  context  Canvas redering context
     *
     * @return  {void}
     */
    draw(context) {
        if (this.active_entity) {
            this.active_entity.add(this.location);
        }
    }
    /**
     * Returns the entity this `Tool` creates.
     *
     * @return  {Entity}  The entity to be added to the layer
     */
    getEntity(drawing) {
        const color = this.drawing.getColor();
        return new _entities_freehand__WEBPACK_IMPORTED_MODULE_0__["default"](this.size, color, this.drawing, true);
    }
}


/***/ }),

/***/ "./src/tools/tool.ts":
/*!***************************!*\
  !*** ./src/tools/tool.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tool)
/* harmony export */ });
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/circle */ "./src/util/circle.ts");
/* harmony import */ var _util_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/color */ "./src/util/color.ts");



class Tool {
    /**
     * @param   {Drawing}  drawing  Main drawing canvas
     * @param   {string}   name     The name of the tool
     */
    constructor(drawing, name) {
        /**
         * Name of the tool
         *
         * @var {string}
         */
        this.name = '';
        /**
         * Width of the tool
         *
         * @var {number}
         */
        this.size = 20;
        /**
         * Target Color
         *
         * @var {Color}
         */
        this.target_color = new _util_color__WEBPACK_IMPORTED_MODULE_2__["default"](128, 128, 255, 0.2);
        /**
         * Location of the tool
         *
         * @var {Vector}
         */
        this.location = new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(0, 0);
        /**
         * Is the tool down (drawing)
         *
         * @var {boolean}
         */
        this.is_drawing = false;
        /**
         * The current entity being drawn
         *
         * @var {Entity | null}
         */
        this.active_entity = null;
        this.name = name;
        this.drawing = drawing;
    }
    /**
     * Set's the location of the tool
     *
     * @param   {Vector}  location  Location of the tool
     *
     * @return  {void}
     */
    setLocation(location) {
        this.location = location;
    }
    /**
     * Start drawing, create the tool's `Entity` and
     * sets it as active.
     *
     * @return  {void}
     */
    startDrawing(location) {
        this.setIsDrawing(true);
        this.active_entity = this.getEntity(this.drawing);
        this.setLocation(location);
    }
    /**
     * Sets the size of the brush/line/stroke
     *
     * @param   {number}  size  Size in pixels of the radius
     *
     * @return  {void}
     */
    setSize(size) {
        if (size > 0)
            this.size = Math.min(size, 100);
    }
    /**
     * Stops drawing, adds enetity complete time, adds the
     * entity to the drawing, which will pass it to the
     * active layerand resets the active entity.
     *
     * @return  {void}
     */
    stopDrawing() {
        this.setIsDrawing(false);
        if (!this.active_entity)
            return;
        // Run the completion functions
        this.active_entity.complete();
        // If not the special entity
        if (this.active_entity.name !== "null") {
            // Add the completed entity to the drawing
            this.drawing.addEntity(this.active_entity);
            // reset the active entity
            this.active_entity = null;
        }
    }
    /**
     * Sets the drawing state of the tool
     *
     * @param   {boolean}  state  Is the tool drawing
     *
     * @return  {void}
     */
    setIsDrawing(state) {
        this.is_drawing = state;
    }
    /**
     * Draw the tool target
     *
     * @param   {CanvasRenderingContext2D}  context  Canvas drawing context
     *
     * @return  {void}
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
     * @param   {number}  r  red [0 - 255]
     * @param   {number}  g  green [0 - 255]
     * @param   {number}  b  blue [0 - 255]
     * @param   {number?}  a  alpha [0.0 - 1.0]
     */
    constructor(r, g, b, a = 1.0) {
        /**
         * red
         *
         * @var {number}
         */
        this.r = 0;
        /**
         * green
         *
         * @var {number}
         */
        this.g = 0;
        /**
         * blue
         *
         * @var {number}
         */
        this.b = 0;
        /**
         * alpha
         *
         * @var {number}
         */
        this.a = 0.0;
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
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
    getRgba() {
        return [this.r, this.g, this.b, this.a];
    }
    /**
     * Returns an array of RGB values
     *
     * @return  {Array<number>}
     */
    getRgbString(withAlpha = true) {
        if (withAlpha === true)
            return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
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
        let a = Math.round((this.a * 255)).toString(16);
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

/***/ "./src/util/guide.ts":
/*!***************************!*\
  !*** ./src/util/guide.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawBoundingBox": () => (/* binding */ drawBoundingBox),
/* harmony export */   "drawGuide": () => (/* binding */ drawGuide)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalize */ "./src/util/normalize.ts");


function drawGuide(context, pos, target) {
    const size = _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.GUIDE_SIZE;
    context.beginPath();
    context.lineWidth = 1;
    const startX = pos.x - (size / 2);
    const startY = pos.y - (size / 2);
    if (target.x > startX && target.x < (startX + size) && target.y > startY && target.y < (startY + size)) {
        context.strokeStyle = "#000000";
    }
    else {
        context.strokeStyle = "#8888FF";
    }
    context.rect(startX, startY, size, size);
    context.stroke();
}
;
/**
 * Draw a bounding box
 *
 * @param   {Vector}                    start    [start description]
 * @param   {Vector}                    end      [end description]
 * @param   {CanvasRenderingContext2D}  context  [context description]
 *
 * @return  {void}                               [return description]
 */
function drawBoundingBox(start, end, context) {
    const denorm_start = (0,_normalize__WEBPACK_IMPORTED_MODULE_1__.denormalize)(start, context.canvas.width, context.canvas.height);
    const denorm_end = (0,_normalize__WEBPACK_IMPORTED_MODULE_1__.denormalize)(end, context.canvas.width, context.canvas.height);
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = "#8888FF";
    context.rect(denorm_start.x, denorm_start.y, (denorm_end.x - denorm_start.x), (denorm_end.y - denorm_start.y));
    context.stroke();
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
    /**
     * Set up the key event handler.
     *
     * @param   {Drawing}  drawing  Main drawing object
     *
     * @return  {[type]}
     */
    constructor(drawing) {
        /**
         * Reference to the main drawing object
         *
         * @var {Drawing}
         */
        this.drawing = null;
        this.drawing = drawing;
    }
    /**
     * Handles all the key events.
     *
     * @param   {KeyboardEvent}  event related to the key down
     *
     * @return  {void}
     */
    handle(event) {
        var _a, _b, _c;
        if (!this.drawing)
            return;
        switch (event.key.toLowerCase()) {
            case 'a':
                this.drawing.addLayer();
                break;
            case 'x':
                (_a = this.drawing) === null || _a === void 0 ? void 0 : _a.removeLayer((_b = this.drawing.active_layer) === null || _b === void 0 ? void 0 : _b.id);
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
                const palette = (_c = this.drawing.hud) === null || _c === void 0 ? void 0 : _c.getByName('palette');
                palette.setColorIndex(parseInt(event.key) - 1);
                break;
            case 'e':
                // layer up
                if (this.drawing.active_layer) {
                    this.drawing.setActiveLayer(this.drawing.getNextLayer(this.drawing.active_layer.id));
                }
                break;
            case 'c':
                if (this.drawing.active_layer) {
                    this.drawing.setActiveLayer(this.drawing.getPrevLayer(this.drawing.active_layer.id));
                }
                break;
            case 'h':
                const help = document.getElementById("help");
                help === null || help === void 0 ? void 0 : help.classList.toggle("hidden");
                help === null || help === void 0 ? void 0 : help.classList.toggle("visible");
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

/**
 * Normalize a vector. Takes a vector and a source width and height
 * then normalizes it to fall within the range of 0.0 - 1.0 relative
 * to the source's with and height. Effectively becoming a percentage
 * of the target, instead of exact values.
 *
 * @param   {Vector}  vector            The vector to normalize
 * @param   {number}  source_width      The source width
 * @param   {number}  source_height     The source height
 *
 * @return  {Vector}                    Normalized vector containing xy values between 0.0 and 1.0
 */
function normalize(vector, source_width, source_height) {
    return new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(((100. / source_width) * vector.x) / 100., ((100. / source_height) * vector.y) / 100.);
}
/**
 * Takes a normalized vector (xy with values 0.0 - 1.0) and maps it
 * to the targets dimentions (ie pixel values)
 *
 * @param   {Vector}  normalized_vector   The vector to denomalize
 * @param   {number}  target_width        The target width
 * @param   {number}  target_height       The target height
 *
 * @return  {Vector}                      A denomalized vector conaining xy values between 0 and target_width/height
 */
function denormalize(normalized_vector, target_width, target_height) {
    return new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(normalized_vector.x * target_width, normalized_vector.y * target_height);
}


/***/ }),

/***/ "./src/util/points.ts":
/*!****************************!*\
  !*** ./src/util/points.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "expandPoints": () => (/* binding */ expandPoints),
/* harmony export */   "flattenPoints": () => (/* binding */ flattenPoints),
/* harmony export */   "getCurvePoints": () => (/* binding */ getCurvePoints),
/* harmony export */   "simplify": () => (/* binding */ simplify)
/* harmony export */ });
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_0__);

/**
 * See: https://github.com/gdenisov/cardinal-spline-js/blob/master/src/curve_calc.js
 *
 * Calculates an array containing points representing a cardinal spline through given point array.
 * Points must be arranged as: [x1, y1, x2, y2, ..., xn, yn].
 *
 * The points for the cardinal spline are returned as a new array.
 *
 * @param {Array} points - point array
 * @param {Number} [tension=0.5] - tension. Typically between [0.0, 1.0] but can be exceeded
 * @param {Number} [numOfSeg=20] - number of segments between two points (line resolution)
 * @param {Boolean} [close=false] - Close the ends making the line continuous
 * @returns {Float32Array} New array with the calculated points that was added to the path
 */
function getCurvePoints(points, tension = 0.7, numOfSeg = 1, close = false) {
    var pts, // for cloning point array
    i = 1, l = points.length, rPos = 0, rLen = (l - 2) * numOfSeg + 2 + (close ? 2 * numOfSeg : 0), res = new Float32Array(rLen), cache = new Float32Array((numOfSeg + 2) * 4), cachePtr = 4;
    const parse = (pts, cache, l) => {
        for (var i = 2, t; i < l; i += 2) {
            var pt1 = pts[i], pt2 = pts[i + 1], pt3 = pts[i + 2], pt4 = pts[i + 3], t1x = (pt3 - pts[i - 2]) * tension, t1y = (pt4 - pts[i - 1]) * tension, t2x = (pts[i + 4] - pt1) * tension, t2y = (pts[i + 5] - pt2) * tension;
            for (t = 0; t < numOfSeg; t++) {
                var c = t << 2, //t * 4;
                c1 = cache[c], c2 = cache[c + 1], c3 = cache[c + 2], c4 = cache[c + 3];
                res[rPos++] = c1 * pt1 + c2 * pt3 + c3 * t1x + c4 * t2x;
                res[rPos++] = c1 * pt2 + c2 * pt4 + c3 * t1y + c4 * t2y;
            }
        }
    };
    pts = points.slice(0);
    if (close) {
        pts.unshift(points[l - 1]); // insert end point as first point
        pts.unshift(points[l - 2]);
        pts.push(points[0], points[1]); // first point as last point
    }
    else {
        pts.unshift(points[1]); // copy 1. point and insert at beginning
        pts.unshift(points[0]);
        pts.push(points[l - 2], points[l - 1]); // duplicate end-points
    }
    // cache inner-loop calculations as they are based on t alone
    cache[0] = 1; // 1,0,0,0
    for (; i < numOfSeg; i++) {
        var st = i / numOfSeg, st2 = st * st, st3 = st2 * st, st23 = st3 * 2, st32 = st2 * 3;
        cache[cachePtr++] = st23 - st32 + 1; // c1
        cache[cachePtr++] = st32 - st23; // c2
        cache[cachePtr++] = st3 - 2 * st2 + st; // c3
        cache[cachePtr++] = st3 - st2; // c4
    }
    cache[++cachePtr] = 1; // 0,1,0,0
    // calc. points
    parse(pts, cache, l);
    if (close) {
        //l = points.length;
        pts = [];
        pts.push(points[l - 4], points[l - 3], points[l - 2], points[l - 1]); // second last and last
        pts.push(points[0], points[1], points[2], points[3]); // first and second
        parse(pts, cache, 4);
    }
    // add last point
    l = close ? 0 : points.length - 2;
    res[rPos++] = points[l];
    res[rPos] = points[l + 1];
    return res;
}
/**
 * Flatten an array of vectors to a flat array of points
 * in the format [x0, y0, x1, y1, x2, y2, xN, yN]
 *
 * @param   {Array<Vector>}   points  Points array to flatten
 *
 * @return  {Array<number>}   Flat array
 */
function flattenPoints(points) {
    const flattened_array = [];
    let i = 0;
    for (let point of points) {
        flattened_array[i] = point.x;
        flattened_array[i + 1] = point.y;
        i = i + 2;
    }
    return flattened_array;
}
/**
 * Takes a Float32Array flat points array [x0, y0, x1, y1, xN, yN]
 * and converts it to an array ov vectors
 *
 * @param   {Float32Array}  flat_points
 *
 * @return  {Array<Vector>}  Array ov Vector points
 */
function expandPoints(flat_points) {
    const points = [];
    for (let i = 0; i < flat_points.length; i = i + 2) {
        points.push(new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(flat_points[i], flat_points[i + 1]));
    }
    return points;
}
/**
 * Simplifies an array of vectors
 *
 * @param   {Array<Vector>}     points  Points array to simplify
 * @param   {number?}           factor  How much to simplify
 *
 * @return  {Array<Vector>} Simplified array
 */
function simplify(points, factor = 2) {
    const simplified_points = [];
    // Add the first point
    simplified_points.push(points[0]);
    for (let i = factor; i < points.length - 1; i = i + factor) {
        simplified_points.push(points[i]);
    }
    simplified_points.push(points[points.length - 1]);
    return simplified_points;
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
/**
 * App entry point. Start here.
 */
(() => {
    // This is our target canvas
    const canvas = document.querySelector(target);
    if (canvas instanceof HTMLCanvasElement) {
        // Using the 2D context
        const context = canvas.getContext('2d');
        if (context == null)
            return;
        // Create application object.
        const app = new _app__WEBPACK_IMPORTED_MODULE_1__["default"](canvas, context);
        // Define animation loop and process.
        const animationLoop = (timestamp) => {
            // Everything gets done here.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlCQUFpQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0QsY0FBYztBQUNkOzs7Ozs7VUNuREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ0o7QUFDZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0RBQXVCLENBQUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRDQUFHO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcz8zMjFmIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9kcmF3aW5nLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvZW50aXRpZXMvZW50aXR5LnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvZW50aXRpZXMvZnJlZWhhbmQudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9lbnRpdGllcy9udWxsLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvZW50aXRpZXMvcmVjdC50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2h1ZC9odWQudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9odWQvaHVkX2l0ZW0udHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9odWQvbGF5ZXJzLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvaHVkL3BhbGV0dGUudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9odWQvdG9vbGJhci50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL3Rvb2xzL2xheWVyLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdG9vbHMvbWFya2VyLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdG9vbHMvcmVjdGFuZ2xlLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdG9vbHMvc2VsZWN0LnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdG9vbHMvc2hhcGUudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy90b29scy90b29sLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdXRpbC9jaXJjbGUudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy91dGlsL2NvbG9yLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdXRpbC9ndWlkZS50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL3V0aWwva2V5X2V2ZW50cy50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL3V0aWwvbm9ybWFsaXplLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdXRpbC9wb2ludHMudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvQWJzdHJhY3RWZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvQXJyYXlWZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvRmxvYXQzMlZlY3Rvci5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9WZWMyRC5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9WZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3doaXRlYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3doaXRlYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jZHJhd2luZy1jYW52YXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuI3BhbGV0dGUge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuI3BhbGV0dGUgLmNvbG9yIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICB3aWR0aDogODBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogODBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbn1cXG4jcGFsZXR0ZSAuY29sb3I6aG92ZXIge1xcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuI3BhbGV0dGUgLmNvbG9yLnNlbGVjdGVkIHtcXG4gIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDIwNCwgMjA0LCAyNTUsIDAuNyk7XFxufVxcblxcbiNsYXllcnMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0b3A6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG1hcmdpbjogNDBweDtcXG59XFxuI2xheWVycyAubGF5ZXIge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xcbiAgYm9yZGVyLXJhZGl1czogMiU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jbGF5ZXJzIC5hY3RpdmUge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMTI4LCAwKTtcXG59XFxuI2xheWVycyAubGF5ZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN0b29scyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxcmVtO1xcbiAgdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiN0b29scyBidXR0b24ge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4jaGVscC52aXNpYmxlIHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjZGNkY2Q7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jaGVscC52aXNpYmxlIC5oZWFkZXIge1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiNoZWxwLnZpc2libGUgLmhlYWRlciBidXR0b24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDFyZW07XFxufVxcbiNoZWxwLnZpc2libGUgLmhlYWRlciBoMiB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcbiNoZWxwLnZpc2libGUgaDMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG4jaGVscC52aXNpYmxlIC5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jaGVscC52aXNpYmxlIC5ib2R5IC5sZWZ0IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbn1cXG4jaGVscC52aXNpYmxlIC5ib2R5IC5sZWZ0IHAge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuI2hlbHAudmlzaWJsZSAuYm9keSAucmlnaHQge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuI2hlbHAudmlzaWJsZSAuYm9keSAucmlnaHQgZGwuaW5saW5lLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBzZXQgdGhlIGNvbnRhaW5lciB3aWR0aCovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuI2hlbHAudmlzaWJsZSAuYm9keSAucmlnaHQgZGwuaW5saW5lLWZsZXggZHQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZmxleDogMCAwIDIwJTtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuI2hlbHAudmlzaWJsZSAuYm9keSAucmlnaHQgZGwuaW5saW5lLWZsZXggZGQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmbGV4OiAwIDAgODAlO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLHNCQUFBO0FBRkY7O0FBS0E7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FBRkY7QUFJRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUFGSjtBQUdJO0VBQ0UsMkNBQUE7QUFETjtBQUdJO0VBQ0UsMkNBQUE7QUFETjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUVBLFlBQUE7QUFKRjtBQU1FO0VBQ0Usb0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFKSjtBQU9FO0VBQ0Usa0NBQUE7QUFMSjtBQVFFO0VBQ0Usb0NBQUE7QUFOSjs7QUFVQTtFQUNFLGFBQUE7QUFQRjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFQRjtBQVFFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQU5KOztBQVVBO0VBQ0UseUNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQVBGO0FBU0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFQSjtBQVNJO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFQTjtBQVVJO0VBQ0UsZUFBQTtBQVJOO0FBWUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQVZKO0FBYUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBWEo7QUFhSTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQVhOO0FBWU07RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBVlI7QUFjSTtFQUNFLFVBQUE7QUFaTjtBQWNJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUFaTjtBQWVJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQWJOO0FBZ0JJO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBZE5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gVGhpcyBpcyBhbGwgaG9ycmlibGUuLi5cXG4vLyBidXQgaXQgd29ya3MuXFxuXFxuKiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46MDtcXG4gIHBhZGRpbmc6MDtcXG59XFxuXFxuYm9keSB7XFxuICBvdmVyZmxvdzpoaWRkZW47XFxufVxcblxcbiNkcmF3aW5nLWNhbnZhcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jcGFsZXR0ZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA1MCU7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgLmNvbG9yIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIH1cXG4gICAgJi5zZWxlY3RlZCB7XFxuICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYmEoMjA0LCAyMDQsIDI1NSwgMC43KTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4jbGF5ZXJzIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdG9wOiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFxuICBtYXJnaW46IDQwcHg7XFxuXFxuICAubGF5ZXIge1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDEyOCwgMCk7XFxuICB9XFxuXFxuICAubGF5ZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEuMCk7XFxuICB9XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Rvb2xzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDFyZW07XFxuICB0b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIH1cXG59XFxuXFxuI2hlbHAudmlzaWJsZSB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjY2RjZGNkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIC5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgfVxcbiAgXFxuICAgIGgyIHtcXG4gICAgICBmb250LXNpemU6IDNyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIGgzIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICB9XFxuXFxuICAuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgLmxlZnQge1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gICAgICBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5yaWdodCB7XFxuICAgICAgd2lkdGg6IDUwJTtcXG5cXG4gICAgZGwuaW5saW5lLWZsZXgge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1mbG93OiByb3c7XFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIC8qIHNldCB0aGUgY29udGFpbmVyIHdpZHRoKi9cXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgfVxcblxcbiAgICBkbC5pbmxpbmUtZmxleCBkdCB7XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OjkwMDtcXG4gICAgICBmbGV4OiAwIDAgMjAlO1xcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgZGwuaW5saW5lLWZsZXggZGQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIGZsZXg6IDAgMCA4MCU7XFxuICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcbiAgICB9XFxuICB9XFxuICAgIFxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgKiBhcyBWZWMyIGZyb20gXCJ2ZWN0b3IyZFwiO1xuaW1wb3J0IERyYXdpbmcgZnJvbSBcIi4vZHJhd2luZ1wiO1xuaW1wb3J0IE1hcmtlciBmcm9tIFwiLi90b29scy9tYXJrZXJcIjtcbmltcG9ydCBQYWxldHRlIGZyb20gXCIuL2h1ZC9wYWxldHRlXCI7XG5pbXBvcnQgSHVkIGZyb20gXCIuL2h1ZC9odWRcIjtcbmltcG9ydCBMYXllcnMgZnJvbSBcIi4vaHVkL2xheWVyc1wiO1xuaW1wb3J0IEtleUV2ZW50cyBmcm9tIFwiLi91dGlsL2tleV9ldmVudHNcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gXCIuL2h1ZC90b29sYmFyXCI7XG4vKipcbiAqIFRoZSB0b3AtbGV2ZWwgQXBwIGNsYXNzLCBtYW5hZ2VzIHNldHVwLCBiYXNlIGxvb3AsIGFuZCBldmVudHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQHBhcmFtICAge0hUTUxDYW52YXNFbGVtZW50fSAgICAgICAgIGNhbnZhcyAgIFRoaXMgaXMgdGhlIHRhcmdldCBjYW52YXMgZm9yIG91ciBnYW1lXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIFRoaXMgaXMgdGhlIGNvbnRldCBmb3IgdGhlIGNhbnZhc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY29udGV4dCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgZm9yIHRoZSBjYW52YXMub25LZXlEb3duIGV2ZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmtleV9kb3duID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IGZvciB0aGUgY2FudmFzLm9uTW91c2VNb3ZlIGV2ZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdXNlX21vdmUgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgZm9yIHRoZSBjYW52YXMub25Nb3VzZU1vdmUgZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2Vfd2hlZWwgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgZm9yIHRoZSBjYW52YXMub25Nb3VzZURvd24gZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2VfZG93biA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBmb3IgdGhlIGNhbnZhcy5vbk1vdXNlVXAgZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2VfdXAgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRHJhd2luZyBjYW52YXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2FudmFzID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRpbWVzdGFtcCB3aGVuIGxhc3QgZnJhbWUgd2FzIHByb2Nlc3NlZFxuICAgICAgICAgKiB1c2VkIGZvciBjYWxjdWxhdGluZyB0aGUgZGVsdGFUaW1lIGFuZFxuICAgICAgICAgKiBGUFMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9sZFRpbWVzdGFtcCA9IDAuMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhvbGRlciBmb3IgRlBTLCB1c2VmdWwgd2hlbiBuZWVkaW5nIHRvIHJlbmRlclxuICAgICAgICAgKiB0aGlzIHdpdGhpbiB0aGUgZ2FtZSBlbnZpcm9ubWVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mcHMgPSAwO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgLy8gU2V0IGNhbnZhcyBkaW1lbnNpb25zLCBUT0RPOiBtYWtlIHRoaXMgZHluYW1pYywgXG4gICAgICAgIC8vIGN1cnJlbnRseSBpdCdzIG9ubHkgc2V0IHdoZW4gdGhlIHBhZ2UgbG9hZHMuXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCb290c3RyYXAgZnVuY3Rpb24sIHVzZWQgZm9yIHNldHRpbmdcbiAgICAgKiBldmVyeXRoaW5nIHVwIHByaW9yIHRvIGtpY2tpbmcgb2ZmIHRoZSByZW5kZXJMb29wXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXRVcCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBDcmVhdGUgZHJhd2luZ1xuICAgICAgICB0aGlzLmRyYXdpbmcgPSBuZXcgRHJhd2luZygpO1xuICAgICAgICAvLyBTZXRzIHRoZSBkZWZhdWwvc3RhcnRpbmcgVG9vbC5cbiAgICAgICAgdGhpcy5kcmF3aW5nLnNldFRvb2wobmV3IE1hcmtlcih0aGlzLmRyYXdpbmcpKTtcbiAgICAgICAgLy8gQWRkIGEgbGF5ZXIgdG8gdGhlIGRyYXdpbmdcbiAgICAgICAgdGhpcy5kcmF3aW5nLmFkZExheWVyKCk7XG4gICAgICAgIC8vIEl0ZW1zIHRvIHRoZSBodWRcbiAgICAgICAgY29uc3QgaHVkID0gbmV3IEh1ZCgpO1xuICAgICAgICAvLyBBdHRhY2ggcGFsZXR0ZSB0byB0aGUgSFVEXG4gICAgICAgIGNvbnN0IHBhbGV0dGUgPSBuZXcgUGFsZXR0ZSgpO1xuICAgICAgICBwYWxldHRlLnNldENvbG9ySW5kZXgoMCk7XG4gICAgICAgIGh1ZC5hZGRJdGVtKHBhbGV0dGUpO1xuICAgICAgICBjb25zdCB0b29sYmFyID0gbmV3IFRvb2xiYXIoXCJ0b29sYmFyXCIsIHRoaXMuZHJhd2luZyk7XG4gICAgICAgIGh1ZC5hZGRJdGVtKHRvb2xiYXIpO1xuICAgICAgICAvLyBBdHRhY2ggdGhlIGxheWVycyBvdmVydmlldyB0byB0aGUgSFVEXG4gICAgICAgIGNvbnN0IGxheWVycyA9IG5ldyBMYXllcnModGhpcy5kcmF3aW5nKTtcbiAgICAgICAgaHVkLmFkZEl0ZW0obGF5ZXJzKTtcbiAgICAgICAgLy8gRHJhdyB0aGUgb3ZlcnZpZXcsIGZvciBlYWNoIGxheWVyXG4gICAgICAgIGxheWVycy5idWlsZCgpO1xuICAgICAgICAvLyBBdHRhY2ggdGhlIEhVRCB0byB0aGUgZHJhd2luZ1xuICAgICAgICB0aGlzLmRyYXdpbmcuaHVkID0gaHVkO1xuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lciB0byBjbG9zZSB0aGUgaGVscCBwb3B1cCB0aGF0IHNob3dzIG9uIGxvYWQuXG4gICAgICAgIChfYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVscCAjY2xvc2VcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVscFwiKTtcbiAgICAgICAgICAgIGhlbHAgPT09IG51bGwgfHwgaGVscCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVscC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgICAgIGhlbHAgPT09IG51bGwgfHwgaGVscCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVscC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gUGFzcyBvZmYgYWxsIEtleWJvYXJkIGV2ZW50cyB0byB0aGUga2V5X2V2ZW50cyBoYW5kbGVyLiBcbiAgICAgICAgLy8gRG8gdGhpcyBnbG9iYWxseS4gTm90IGp1c3Qgb24gdGhlIENhbnZhcy5cbiAgICAgICAgY29uc3Qga2V5RXZlbnRIYW5kbGVyID0gbmV3IEtleUV2ZW50cyh0aGlzLmRyYXdpbmcpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBrZXlFdmVudEhhbmRsZXIuaGFuZGxlKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEF0dGFjaCBzb21lIGV2ZW50cyB0byB0aGUgbWFpbiBjYW52YXNcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdGFyZ2V0IHBvc2l0aW9uICh3aGVyZSB3ZSB3YW50IHRvIGRyYXcpIHdoZW4gdGhlIG1vdXNlIG1vdmVzIG92ZXIgdGhlIGNhbnZhc1xuICAgICAgICAgICAgdGhpcy5tb3VzZV9tb3ZlID0gdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgY29uc3QgbW91c2VfcG9zID0gbmV3IFZlYzIuVmVjdG9yKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFRhcmdldFBvc2l0aW9uKG1vdXNlX3Bvcyk7XG4gICAgICAgICAgICAgICAgaHVkLnNldEN1cnNvclBvc2l0aW9uKG1vdXNlX3Bvcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBtb3VzZSBpcyBkb3duLCBzaWduYWwgdG8gdGhlbiBkcmF3aW5nIG9iamVjdCB0aGF0IHdlJ3JlIFxuICAgICAgICAgICAgLy8gZHJhd2luZywgd2l0aCB3aGF0ZXZlciB0b29sIHdlJ3ZlIGN1cnJlbnRseSBzZWxlY3RlZC5cbiAgICAgICAgICAgIHRoaXMubW91c2VfZG93biA9IHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICBjb25zdCBtb3VzZV9wb3MgPSBuZXcgVmVjMi5WZWN0b3IoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgICAgICAgKF9iID0gKF9hID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9vbCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnN0YXJ0RHJhd2luZyhtb3VzZV9wb3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBMaXN0ZW4gZm9yIG1vdXNld2hlZWwsIGFuZCByZXNpemUgdGhlIHRvb2wgZGVwZW5kaW5nIG9uIGRpcmVjdGlvbi5cbiAgICAgICAgICAgIHRoaXMubW91c2Vfd2hlZWwgPSB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2Y7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRyYXdpbmcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmRyYXdpbmcudG9vbCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFNpemUoKChfYiA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRvb2wuc2l6ZSkgLSAyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIChfYyA9IHRoaXMuZHJhd2luZy50b29sKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Muc2V0U2l6ZSgoKF9kID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QudG9vbC5zaXplKSArIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdpbmcuZ2xvYmFsX3RhcmdldF9zaXplID0gKChfZiA9IChfZSA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLnRvb2wpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5zaXplKSB8fCAyMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gSWYgd2UgbW91c2V1cCB3ZSBuZWVkIHRvIHRlbGwgdGhlIGRyYXdpbmcgb2JqZWN0LCB3ZSd2ZSBzdG9wcGVkIGRyYXdpbmcuXG4gICAgICAgICAgICB0aGlzLm1vdXNlX3VwID0gdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b29sKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc3RvcERyYXdpbmcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyBhbnkgcGVyaW9kaWMgdGltZXJzLlxuICAgICAqIFdlIGNhbiB1c2UgdGhpcyB0byB0cmlnZ2VyIGFueSB0aW1lIGJhc2VkIGV2ZW50cy4gaWUgZXZlcnkgNSBzZWNvbmRzIGRvIFhcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtET01IaWdoUmVzVGltZVN0YW1wfSAgdGltZXN0YW1wICBFUE9DIE1pbGxpc2Vjb25kc1xuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2Vzc1RpbWVycyh0aW1lc3RhbXApIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW50cnkgcG9pbnQgZm9yIGFsbCB0aGluZ3MuXG4gICAgICpcbiAgICAgKiBQcm9jZXNzZXMgdGltZXJzXG4gICAgICogVXBkYXRlcyBhbGwgYXBwbGljYXRpb24gZW50aXRpZXMsXG4gICAgICogQ2FzY2FkZXMgcmVuZGVyIHRvIGVudGl0aWVzLlxuICAgICAqIENhbGxlZCBldmVyeSBmcmFtZVxuICAgICAqXG4gICAgICogQHBhcmFtICAge0RPTUhpZ2hSZXNUaW1lU3RhbXB9ICB0aW1lc3RhbXAgIEVQT0MgbWlsbGlzZWNvbmRzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm9jZXNzKHRpbWVzdGFtcCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAvLyBTaG9ydCBjaXJjdXQsIHRoZXNlIE1VU1QgZXhpc3RcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzID09IG51bGwgfHwgdGhpcy5jb250ZXh0ID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIFByb2Nlc3MgYW55IHRpbWVyc1xuICAgICAgICB0aGlzLnByb2Nlc3NUaW1lcnModGltZXN0YW1wKTtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBwYXNzZWQgc2luY2UgdGhlIGxhc3QgZnJhbWVcbiAgICAgICAgY29uc3QgZHQgPSB0aW1lc3RhbXAgLSB0aGlzLm9sZFRpbWVzdGFtcDtcbiAgICAgICAgLy8gVXBkYXRlIHRpbWVzdGFtcCBmb3IgbmV4dCBwcm9jZXNzIGZyYW1lXG4gICAgICAgIHRoaXMub2xkVGltZXN0YW1wID0gdGltZXN0YW1wO1xuICAgICAgICAvLyBUcmlnZ2VyIFdvcmxkIGNhbGNzXG4gICAgICAgIC8vIFRPRE86IGFzeW5jPyBQZXJmb3JtYW5jZSBpbXByb3ZtZW50IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICAgICAgKF9hID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucHJvY2VzcyhkdCwgdGltZXN0YW1wKTtcbiAgICAgICAgLy8gUmVuZGVyIHRoaW5nc1xuICAgICAgICAoX2IgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZW5kZXIodGhpcy5jYW52YXMsIHRoaXMuY29udGV4dCk7XG4gICAgfVxufVxuIiwiLy8gVGhlIGRlZmF1bHQgY29sb3JzXG5leHBvcnQgY29uc3QgQ09MT1JfUkVEID0geyByOiAyNTUsIGc6IDAsIGI6IDAsIGE6IDEuMCB9O1xuZXhwb3J0IGNvbnN0IENPTE9SX0dSRUVOID0geyByOiAwLCBnOiAxOTIsIGI6IDAsIGE6IDEuMCB9O1xuZXhwb3J0IGNvbnN0IENPTE9SX0JMVUUgPSB7IHI6IDAsIGc6IDAsIGI6IDI1NSwgYTogMS4wIH07XG5leHBvcnQgY29uc3QgQ09MT1JfWUVMTE9XID0geyByOiAyNTUsIGc6IDI1NSwgYjogMCwgYTogMS4wIH07XG5leHBvcnQgY29uc3QgQ09MT1JfT1JBTkdFID0geyByOiAyNTUsIGc6IDEyOCwgYjogMCwgYTogMS4wIH07XG5leHBvcnQgY29uc3QgQ09MT1JfQkxBQ0sgPSB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDEuMCB9O1xuZXhwb3J0IGNvbnN0IExBWUVSX0NSRUFURV9LRVlTID0gMDtcbmV4cG9ydCBjb25zdCBDb25zdGFudHMgPSB7XG4gICAgUEFMTEVUVEVfU0laRTogNjAsXG4gICAgVE9PTF9TUEFDSU5HOiAyMCxcbiAgICBDQU5WQVNfU0laRToge1xuICAgICAgICB3aWR0aDogKHdpbmRvdykgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IDE5ODAsXG4gICAgICAgIGhlaWdodDogKHdpbmRvdykgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiAxMDgwXG4gICAgfSxcbiAgICBHVUlERV9TSVpFOiAxMCxcbiAgICBMQVlFUlNfV0lEVEg6IDEyNSxcbiAgICBMQVlFUl9DUkVBVEVfREVMQVk6IDUwMDAsXG4gICAgTEFZRVJfQ1JFQVRFX0JFSEFWSU9SOiBMQVlFUl9DUkVBVEVfS0VZUyxcbiAgICBDT0xPUlM6IFtcbiAgICAgICAgQ09MT1JfUkVELFxuICAgICAgICBDT0xPUl9HUkVFTixcbiAgICAgICAgQ09MT1JfQkxVRSxcbiAgICAgICAgQ09MT1JfWUVMTE9XLFxuICAgICAgICBDT0xPUl9PUkFOR0UsXG4gICAgICAgIENPTE9SX0JMQUNLXG4gICAgXSxcbiAgICBDQU5WQVNfVEFSR0VUOiBcImRyYXdpbmctY2FudmFzXCJcbn07XG4iLCJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiLi91dGlsL2NvbG9yXCI7XG5pbXBvcnQgTGF5ZXIgZnJvbSBcIi4vdG9vbHMvbGF5ZXJcIjtcbi8qKlxuICogTWFpbiBkcmF3aW5nIGNsYXNzLCBjb25zdHJ1Y3RzIGV2ZXJ5dHJoaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdpbmcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogTGF5ZXIgaW5jcmVtZW50YWwgbnVtYmVyLCB1c2VkIHRvIHRyYWNrIHVuaXF1ZSBudW1lcmljYWxcbiAgICAgICAgICogaWQgb2YgYWxsIGVudGl0aWVzIGxvYWRlZCBvbnRvIHRoZSBjYW52YXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sYXllcl9pZCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbGF5ZXJzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIgIHtNYXA8bnVtYmVyLCBMYXllcj59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxheWVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhlYWRzIHVwIGRpc3BsYXkgKEdVSSlcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7SHVkfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5odWQgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdWxkIHdlIGRyYXcgdGhlIHRhcmdldHMuIFRoaXMgaXMgdGhlIHNpemUgYW5kIHNoYXBlIG9mIHRoZSBjdXJyZW50IGJydXNoL3Rvb2wuXG4gICAgICAgICAqIFRoaXMgaXMgYSB0ZW1wb3Jhcnkgb3ZlcmxheSBzbyB0aGUgdXNlciBjYW4gc2VlIGFuIGluZGVpY2F0aW9uIG9mIHdoYXQgdGhleSBhcmVcbiAgICAgICAgICogZG9pbmcgYmVmb3JlIHRoZXkgZG8gaXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRyYXdfdGFyZ2V0ID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRhcmdldCBjdXJyZW50IGxvY2F0aW9uLCB3aGVyZSB3ZSdyZSBkcmF3aW5nL3dvcmtpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge1ZlYzIuVmVjdG9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2xvYmFsIHRvb2wgc2l6ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdsb2JhbF90YXJnZXRfc2l6ZSA9IDIwO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3VycmVudCB0b29sIHRoZSB1c2VyIGhhcyBzZWxlY3RlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7VG9vbH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudG9vbCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIZWxwZXIgdG8gY2FsY3VsYXRlIEZQUyBhbmQgZnJhbWVyYXRlc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRpbWVUb0RyYXcgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogSG9sZGVyIGZvciBkZWx0YXRpbWUsIHVzZWQgZm9yIGFuaW1hdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kdCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmV2aW91cyBmcmFtZSB0aW1lc3RhbXAsIHVzZWQgdG8gY2FsY3VsYXRlIEZQUyBhbmQgYW5pbWF0aW9ucy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7RE9NSGlnaFJlc1RpbWVTdGFtcH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub2xkVGltZXN0YW1wID0gMC4wO1xuICAgICAgICAvKipcbiAgICAgICAgICogRnJhbWVzIHBlciBzZWNvbmRcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mcHMgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdyBkZWJ1Zy4gRG8gd2Ugd2FudCB0byBzaG93IGRlYnVnIGluZm8gb25zY3JlZW4uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3dfZGVidWcgPSB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBMYXllciBmcm9tIHRoZSBjYW52YXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBsYXllcl9pZCAgICBJRCBvZiB0aGUgbGF5ZXIgdG8gcmVtb3ZlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVMYXllcihsYXllcl9pZCkge1xuICAgICAgICBpZiAobGF5ZXJfaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoaXMgcmVtb3ZlcyB0aGUgbGF5ZXIgZnJvbSB0aGUgZHJhd2luZ1xuICAgICAgICB0aGlzLmxheWVycy5kZWxldGUobGF5ZXJfaWQpO1xuICAgICAgICAvLyBOb3cgdGhhdCB0aGUgbGF5ZXIgaGFzIGJlZW4gcmVtb3ZlZFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHNldCB0aGUgbmV3IGFjdGl2ZV9sYXllci5cbiAgICAgICAgLy8gSWYgdGhlcmUncyBvbmUgYmVsb3csIHRoZW4gY2hvb3NlIHRoYXQuXG4gICAgICAgIGlmICh0aGlzLmxheWVycy5oYXMobGF5ZXJfaWQgLSAxKSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVfbGF5ZXIgPSB0aGlzLmxheWVycy5nZXQobGF5ZXJfaWQgLSAxKTtcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBjaG9vc2UgdGhlIG9uZSBhYm92ZSBpZiBpdCBleGlzdHNcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmxheWVycy5oYXMobGF5ZXJfaWQgKyAxKSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVfbGF5ZXIgPSB0aGlzLmxheWVycy5nZXQobGF5ZXJfaWQgKyAxKTtcbiAgICAgICAgICAgIC8vIElmIG5laXRoZXIgb2YgdGhvc2UgYXJlIHRydWUuLi5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxheWVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGxheWVycyBsZWZ0LCBjcmVhdGUgYSBuZXcgb25lLCBzZXQgaXQgYWN0aXZlLlxuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMYXllcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RlaGVyd2lzZSBjaG9vc2UgdGhlIGxheWVyIHdpdGggdGhlIHNtYWxsZXN0IElEXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVfbGF5ZXIgPSB0aGlzLmxheWVycy5nZXQoTWF0aC5taW4oLi4udGhpcy5sYXllcnMua2V5cygpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVkcmF3IHRoZSBsYXllcnMgb3ZlcnZpZXcuXG4gICAgICAgIHRoaXMucmVkcmF3SHVkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdpdmVuIGFuIElELCByZXR1cm4gYSBMYXllciB3aXRoIHRoYXQgSUQgaWYgaXQgZXhpc3RzLCBudWxsIGlmIGl0IGRvZXNuJ3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgbGF5ZXJfaWQgIElEIG9mIHRoZSBsYXllciB0byByZXR1cm4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7TGF5ZXIgfCBudWxsfVxuICAgICAqL1xuICAgIGdldExheWVyKGxheWVyX2lkKSB7XG4gICAgICAgIGNvbnN0IGxheWVyID0gdGhpcy5sYXllcnMuZ2V0KGxheWVyX2lkKTtcbiAgICAgICAgaWYgKGxheWVyKVxuICAgICAgICAgICAgcmV0dXJuIGxheWVyO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVkcmF3IGFsbCBIVUQgaXRlbXMuIFdlIGRvbid0IHdhbnQgdG8gZG9cbiAgICAgKiB0aGlzIGV2ZXJ5IGZyYW1lIGFzIHRoZXNlIGFyZSBET00gaXRlbXMsIHNvIHdlIGhhdmVcbiAgICAgKiBhbiBleHBsaWNpdCBjYWxsIHRvIGRvIHNvIHdoZW4gd2UgbmVlZCB0by5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHJlZHJhd0h1ZCgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgKF9iID0gKF9hID0gdGhpcy5odWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRCeU5hbWUoXCJsYXllcnNcIikpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5idWlsZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGQgYSBsYXllciB0byB0aGUgZHJhd2luZywgc2V0IGl0IGFzIGFjdGl2ZVxuICAgICAqIGFuZCByZWRyYXcgdGhlIGh1ZCB0byBzaG93IGl0IGluIHRoZSBsYXllciBvdmVydmlldy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGFkZExheWVyKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZV9sYXllciA9IG5ldyBMYXllcih0aGlzLmxheWVyX2lkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5sYXllcnMuc2V0KHRoaXMuYWN0aXZlX2xheWVyLmlkLCB0aGlzLmFjdGl2ZV9sYXllcik7XG4gICAgICAgIHRoaXMubGF5ZXJfaWQrKztcbiAgICAgICAgdGhpcy5yZWRyYXdIdWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYWN0aXZlIGxheWVyLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIGxheWVyX2lkICBJRCBvZiB0aGUgbGF5ZXIgdG8gc2V0IGFzIGFjdGl2ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHNldEFjdGl2ZUxheWVyKGxheWVyX2lkKSB7XG4gICAgICAgIC8vIFRPRE86IEFzc3VtZXMgdGhlIGxheWVyX2lkIGV4aXN0cywgd2hhdCBkbyB3ZSBkbyBpZiBpdCBkb2Vzbid0P1xuICAgICAgICB0aGlzLmFjdGl2ZV9sYXllciA9IHRoaXMubGF5ZXJzLmdldChsYXllcl9pZCk7XG4gICAgICAgIHRoaXMucmVkcmF3SHVkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5leHQgTGF5ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBjdXJyZW50X2xheWVyX2lkICBJRCBvZiB0aGUgY3VycmVudCBsYXllci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtudW1iZXJ9ICAgUmV0dXJucyB0aGUgSUQgb2YgdGhlIG5leHQgbGF5ZXIgaW4gdGhlIE1hcCgpXG4gICAgICovXG4gICAgZ2V0TmV4dExheWVyKGN1cnJlbnRfbGF5ZXJfaWQpIHtcbiAgICAgICAgbGV0IG5leHQgPSBmYWxzZTtcbiAgICAgICAgLy8gUmVuZGVyIGVhY2ggb2YgdGhlIGV4aXN0aW5nIGVudGl0aXRlcy4gKERyYXdpbmdzKVxuICAgICAgICBmb3IgKGxldCBba2V5LCBsYXllcl0gb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgICAgICAgIGlmIChuZXh0ID09PSB0cnVlKVxuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBjdXJyZW50X2xheWVyX2lkKSB7XG4gICAgICAgICAgICAgICAgbmV4dCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHByZXYgTGF5ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBjdXJyZW50X2xheWVyX2lkICBJRCBvZiB0aGUgY3VycmVudCBsYXllci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtudW1iZXJ9ICAgUmV0dXJucyB0aGUgSUQgb2YgdGhlIG5leHQgbGF5ZXIgaW4gdGhlIE1hcCgpXG4gICAgICovXG4gICAgZ2V0UHJldkxheWVyKGN1cnJlbnRfbGF5ZXJfaWQpIHtcbiAgICAgICAgbGV0IHByZXZpb3VzID0gLTE7XG4gICAgICAgIC8vIFJlbmRlciBlYWNoIG9mIHRoZSBleGlzdGluZyBlbnRpdGl0ZXMuIChEcmF3aW5ncylcbiAgICAgICAgZm9yIChsZXQgW2tleSwgbGF5ZXJdIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBjdXJyZW50X2xheWVyX2lkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldmlvdXMgPSBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZW50aXR5IHRvIHRoZSBhY3RpdmUgbGF5ZXIuIFRoaXMgd2lsbCBnZXQgZHJhd24gaW4gdGhlIG5leHQgZnJhbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7RW50aXR5fSAgZW50aXR5ICBFbnRpdHkgdG8gYWRkIHRvIHRoZSBnYW1ld29ybGRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGFkZEVudGl0eShlbnRpdHkpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlX2xheWVyKVxuICAgICAgICAgICAgdGhpcy5hZGRMYXllcigpO1xuICAgICAgICAoX2EgPSB0aGlzLmFjdGl2ZV9sYXllcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEVudGl0eShlbnRpdHkpO1xuICAgICAgICB0aGlzLnJlZHJhd0h1ZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHRvb2wgdGhhdCB0aGUgdXNlciBoYXMgc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7VG9vbH0gIHRvb2wgIFNldCdzIHRoZSBhY3RpdmUgdG9vbCB0byBUb29sXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXRUb29sKHRvb2wpIHtcbiAgICAgICAgdGhpcy50b29sID0gdG9vbDtcbiAgICAgICAgdGhpcy50b29sLnNldFNpemUodGhpcy5nbG9iYWxfdGFyZ2V0X3NpemUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVbnNldCdzIHRoZSBjdXJyZW50IHRhcmdldFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgdW5zZXRUYXJnZXQoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY3VycmVudCB0YXJnZXQgcG9zaXRpb24gKFdoZXJlIHRoZSBtb3VzZSBpcylcbiAgICAgKlxuICAgICAqIEB2YXIge1ZlYzIuVmVjdG9yfSBtb3VzZV9wb3MgICBUYXJnZXQgcG9zaXRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0VGFyZ2V0UG9zaXRpb24obW91c2VfcG9zKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbW91c2VfcG9zO1xuICAgICAgICBpZiAodGhpcy50b29sKSB7XG4gICAgICAgICAgICB0aGlzLnRvb2wuc2V0TG9jYXRpb24obW91c2VfcG9zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gZHJhdyB0aGUgdGFyZ2V0cywgKERyYXdzIHRoZSBUb29sIGhlbHBlciB0byB0aGUgVUkpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIGRyYXdpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgZHJhd1RhcmdldChjb250ZXh0KSB7XG4gICAgICAgIGlmICh0aGlzLnRvb2wgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50b29sLmRyYXdUYXJnZXQoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGNvdW50IG9mIGFsbCBlbnRpdGVzIGJ5IHR5cGUsIGlmIG5vIHR5cGUgc3BlY2lmaWVkLFxuICAgICAqIHRoZW4gcmV0dW5yIGNvdW50IG9mIGFsbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmc/fSAgdHlwZSAgRW50aXR5IFR5cGV8TmFtZSBbb3B0aW9uYWxdXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7bnVtYmVyfSAgICAgICAgTnVtYmVyIG9mIGVudGl0aWVzXG4gICAgICovXG4gICAgY291bnRFbnRpdGllcyh0eXBlKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAobGV0IFtrZXksIGxheWVyXSBvZiB0aGlzLmxheWVycykge1xuICAgICAgICAgICAgY291bnQgKz0gbGF5ZXIuY291bnRFbnRpdGllcyh0eXBlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIGRlYnVnZ2luZyBwYW5lbFxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyByZW5kZXJpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgZHJhd0RlYnVnKGNvbnRleHQpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2RkZGRkZDU1JztcbiAgICAgICAgY29udGV4dC5maWxsUmVjdChDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGggLSA3NSwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodCAtIDEwMCwgNzUsIDEwMCk7XG4gICAgICAgIGNvbnRleHQuZm9udCA9ICcxMXB4IEFyaWFsJztcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KFwiRlBTOiBcIiArIHRoaXMuZnBzLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGggLSA3MCwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodCAtIDg1KTtcbiAgICAgICAgY29udGV4dC5maWxsVGV4dChcIkxBWUVSUzogXCIgKyB0aGlzLmxheWVycy5zaXplLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGggLSA3MCwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodCAtIDcwKTtcbiAgICAgICAgY29udGV4dC5maWxsVGV4dChcIkVOVDogXCIgKyB0aGlzLmNvdW50RW50aXRpZXMoKSwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoIC0gNzAsIENvbnN0YW50cy5DQU5WQVNfU0laRS5oZWlnaHQgLSA1NSk7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQoXCJMT0MtWDogXCIgKyAoKF9hID0gdGhpcy50YXJnZXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS54KSwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoIC0gNzAsIENvbnN0YW50cy5DQU5WQVNfU0laRS5oZWlnaHQgLSA0MCk7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQoXCJMT0MtWTogXCIgKyAoKF9iID0gdGhpcy50YXJnZXQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi55KSwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoIC0gNzAsIENvbnN0YW50cy5DQU5WQVNfU0laRS5oZWlnaHQgLSAyNSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYW55IGNhbnZhcyBiYXNlZCBodWQgaXRlbXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIHJlbmRlcmluZyBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBkcmF3SHVkKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmh1ZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5odWQucmVuZGVyKGNvbnRleHQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGFjdGl2ZSBjb2xvciwgYXMgc3BlY2lmaWVkIGJ1IHRoZSBwYWxldHRlLlxuICAgICAqIGRlZmF1bHRzIHRvIEJsYWNrIGlmIG5vIGNvbG9yIGlzIHNldC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtDb2xvcn0gICBUaGUgc2VsZWN0ZWQgY29sb3JcbiAgICAgKi9cbiAgICBnZXRDb2xvcigpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBwYWxsZXR0ZSA9IChfYSA9IHRoaXMuaHVkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0QnlOYW1lKFwicGFsZXR0ZVwiKTtcbiAgICAgICAgaWYgKHBhbGxldHRlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFsbGV0dGUuZ2V0Q29sb3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKDAsIDAsIDApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQYXJlbnQgZm9yIGFsbCB0aGUgcmVuZGVyaW5nIGZvciB0aGUgYXBwXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7SFRNTENhbnZhc0VsZW1lbnR9ICAgICAgICAgY2FudmFzICAgQ2FudmFzXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyBkcmF3aW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbmRlcihjYW52YXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIC8vIENsZWFyIHRoZSBzY3JlZW4gZXZlcnkgZnJhbWVcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgLy8gUmVuZGVyIGVhY2ggb2YgdGhlIGV4aXN0aW5nIGVudGl0aXRlcy4gKERyYXdpbmdzKVxuICAgICAgICBmb3IgKGxldCBba2V5LCBsYXllcl0gb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgICAgICAgIGxheWVyLnJlbmRlcihjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEcmF3IGFueSB0b29sIGhlbHBlcnMsIGRyYXcgdGhlIHRoaW5nIGN1cnJlbnRseSBiZWluZyBkcmF3bi5cbiAgICAgICAgaWYgKChfYSA9IHRoaXMudG9vbCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFjdGl2ZV9lbnRpdHkpIHtcbiAgICAgICAgICAgIHRoaXMudG9vbC5hY3RpdmVfZW50aXR5LmRyYXcoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRHJhdyB0byB0aGUgZW50aXR5IGN1cnJlbnRseSBiZWluZyBkcmF3blxuICAgICAgICBpZiAoKF9iID0gdGhpcy50b29sKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaXNfZHJhd2luZykge1xuICAgICAgICAgICAgdGhpcy50b29sLmRyYXcoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRHJhdyB0YXJnZXQsIGlmIHR1cm5lZCBvbi5cbiAgICAgICAgaWYgKHRoaXMuZHJhd190YXJnZXQpXG4gICAgICAgICAgICB0aGlzLmRyYXdUYXJnZXQoY29udGV4dCk7XG4gICAgICAgIC8vIFNob3cgdGhlIGRlYnVnLCBpZiB0dXJuZWQgb24uXG4gICAgICAgIGlmICh0aGlzLnNob3dfZGVidWcpXG4gICAgICAgICAgICB0aGlzLmRyYXdEZWJ1Zyhjb250ZXh0KTtcbiAgICAgICAgLy8gRHJhdyB0aGUgSFVELlxuICAgICAgICB0aGlzLmRyYXdIdWQoY29udGV4dCk7XG4gICAgICAgIGlmICgoKF9jID0gdGhpcy50b29sKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MubmFtZSkgPT09ICdzZWxlY3QnICYmIHRoaXMuYWN0aXZlX2xheWVyICYmIHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9sYXllci5kcmF3R3VpZGVzKGNvbnRleHQsIHRoaXMudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHYXJiYWdlIGNsZWFuIHVwLCByZW1vdmVzIGFueSBlbnRpdGllcyB0aGF0IGFyZSBzY2hlZHVsZSBmb3IgcmVtb3ZhbFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlRW50aXRpZXMoKSB7XG4gICAgICAgIGZvciAobGV0IFtrZXksIGxheWVyXSBvZiB0aGlzLmxheWVycykge1xuICAgICAgICAgICAgbGF5ZXIucmVtb3ZlRW50aXRpZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEbyBhbGwgd29ybGQgY2FsY3VsYXRpb25zXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgICAgICAgICAgICAgIGdhbWVUaW1lICAgRGVsdGFUaW1lXG4gICAgICogQHBhcmFtICAge0RPTUhpZ2hSZXNUaW1lU3RhbXB9ICB0aW1lc3RhbXAgIEN1cnJlbnQgdGltZVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2Vzcyh0aW1lLCB0aW1lc3RhbXApIHtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBwYXNzZWQgc2luY2UgdGhlIGxhc3QgZnJhbWVcbiAgICAgICAgdGhpcy50aW1lVG9EcmF3ID0gdGltZSAvIDEwMDA7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBmcHNcbiAgICAgICAgdGhpcy5mcHMgPSBNYXRoLnJvdW5kKDEgLyB0aGlzLnRpbWVUb0RyYXcpO1xuICAgICAgICAvLyBSZW1vdmUgYW55IGVudGl0aWVzIHRoYXQgYXJlIHNldCBmb3IgcmVtb3ZhbC4gQ291bGQgcHJvYmFibHkgXG4gICAgICAgIC8vLyBiZSBkb25lIGluIHRoZSBsb29wIGJlbG93IGlmIHBlcmZvcm1hbmNlIGJlY29tZXMgYW4gaXNzdWUsXG4gICAgICAgIC8vIGZvciBub3cgaXQncyBmaW5lLiBDbGVhcmVyIHRvIGtlZXAgdGhlIHNlcGVyYXRlLlxuICAgICAgICB0aGlzLnJlbW92ZUVudGl0aWVzKCk7XG4gICAgICAgIC8vIFByb2Nlc3MgYW55IGVudGl0eSBjYWxjcyBmb3IgcmVuZGVyaW5nIG5leHQgdGljay5cbiAgICAgICAgZm9yIChsZXQgW2tleSwgbGF5ZXJdIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICAgICAgICBsYXllci5wcm9jZXNzKHRpbWUsIHRpbWVzdGFtcCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWxsb3cgaHVkIHRvIHByb2Nlc3MgdGhpbmdzXG4gICAgICAgIGlmICh0aGlzLmh1ZClcbiAgICAgICAgICAgIHRoaXMuaHVkLnByb2Nlc3ModGltZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4uL3V0aWwvY29sb3InO1xuLyoqXG4gKiBDb3JlIGVudGl0eSBjbGFzcywgYWxsIGRyYXduIG9iamVjdHMgd2l0aGluIHRoZSBhcHAgYXJlIGVudGl0aWVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRpdHkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBuYW1lICBuYW1lIG9yIHR5cGUgb2YgZW50aXR5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGltZSB0aGUgZW50aXR5IHdhcyBjcmVhdGVkLCBtaWxsaXNlY29uZHMgc2luY2UgRVBPQ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pZCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaW1lIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQsIG1pbGxpc2Vjb25kcyBzaW5jZSBFUE9DXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNyZWF0ZWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGltZSB0aGUgZW50aXR5IHdhcyBmaW5pc2hlZCBkcmF3aW5nLCBtaWxsaXNlY29uZHMgc2luY2UgRVBPQ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29sb3VyIG9mIHRoZSBlbnRpdHlcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiAge0NvbG9yfSAgQ29sb3VyIG9iamVjdCB0aGF0IHRoZSBlbnRpdHkgd2lsbCBiZSBkcmF3biBhcy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29sb3IgPSBuZXcgQ29sb3IoMCwgMCwgMCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaXplIG9mIHRoZSBlbnRpdHlcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIG5hbWUgZm9yIHRoZSBlbnRpdHksIGFrYSB0eXBlLiBDYW4gYmUgdXNlZCB0byBxdWVyeSBmb3IgZW5laXRpZXMgb2YgXCJuYW1lXCJcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9ICcnO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgc2V0IHRvIHRydWUgdGhlIGVudGl0eSB3aWxsIGJlIGRpc3Bvc2VkIG9mIG5leHQgdGljay5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVtb3ZlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWYgdG8gdGhlIGRyYXdpbmcgY2FudnNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZHJhd2luZyA9IG51bGw7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IERhdGUubm93KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgQ29sb3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDb2xvcn0gIGNvbG9yICBDb2xvciB0byBzZXQgb24gdGhlIGVudGl0eVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGVudGl0eSwgYnkgZGVmYXVsdCBhbGwgZW50aXRpZXMgYXJlIHRyZWF0ZWQgYXMgY2lyY2xlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBDYW52YXMgZHJhd2luZyBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICByZW5kZXIoY29udGV4dCkge1xuICAgICAgICB0aGlzLmRyYXcoY29udGV4dCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByb2Nlc3MgYW55IGVudGl0eSB1cGRhdGVzIG9yIGNhbGN1bGF0aW9ucyB0byBiZSByZW5kZXJlZCBuZXh0IHRpY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgZGVsdGEgIHRpbWUgc2luY2UgbGFzdCBmcmFtZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHByb2Nlc3MoZGVsdGEpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGRyYXdpbmcgaXMgY29tcGxldGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7PHZvaWQ+fVxuICAgICAqL1xuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IERhdGUubm93KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmbGF0dGVuUG9pbnRzLCBleHBhbmRQb2ludHMsIGdldEN1cnZlUG9pbnRzLCBzaW1wbGlmeSB9IGZyb20gXCIuLi91dGlsL3BvaW50c1wiO1xuaW1wb3J0IHsgZGVub3JtYWxpemUsIG5vcm1hbGl6ZSB9IGZyb20gXCIuLi91dGlsL25vcm1hbGl6ZVwiO1xuaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9lbnRpdHlcIjtcbmltcG9ydCB7IGRyYXdCb3VuZGluZ0JveCwgZHJhd0d1aWRlIH0gZnJvbSBcIi4uL3V0aWwvZ3VpZGVcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyZWVoYW5kIGV4dGVuZHMgRW50aXR5IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgc2l6ZSAgIFNpemUgb2YgdGhlIGVudGl0eVxuICAgICAqIEBwYXJhbSAgIHtDb2xvcn0gICBjb2xvciAgQ29sb3Igb2YgdGhlIGVudGl0eVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIGNvbG9yLCBkcmF3aW5nLCBjbG9zZSA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKCdmcmVlaGFuZCcpO1xuICAgICAgICAvKipcbiAgICAgICAgICogUG9pbnRzIG9mIHRoZSBmcmVlaGFuZCBsaW5lXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge0FycmF5PFZlY3Rvcj59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogRW5hYmxlcyB0aGUgZW50aXR5IHRvIGJlIHNjYWxlZCBhbmQgZGlzcGxheWVkIGF0XG4gICAgICAgICAqIGEgZGlmZmVyZW50IHNpemUsIGllIGluIHRoZSBsYXllcnMgb3ZlcnZpZXcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2NhbGUgPSAxLjA7XG4gICAgICAgIHRoaXMuY2xvc2UgPSBjbG9zZTtcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gZHJhd2luZztcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBbY29tcGxldGUgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgc3VwZXIuY29tcGxldGUoKTtcbiAgICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHNpbXBsaWZpZWQgPSBzaW1wbGlmeSh0aGlzLnBvaW50cywgMyk7XG4gICAgICAgIGNvbnN0IGZsYXQgPSBmbGF0dGVuUG9pbnRzKHNpbXBsaWZpZWQpO1xuICAgICAgICBjb25zdCBjdXJ2ZWQgPSBnZXRDdXJ2ZVBvaW50cyhmbGF0LCAwLjcsIDEsIHRoaXMuY2xvc2UpO1xuICAgICAgICB0aGlzLnBvaW50cyA9IGV4cGFuZFBvaW50cyhjdXJ2ZWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEcmF3IHRoaXMgZW50aXR5IHRvIHRoZSBnaXZlbiBjb250ZXh0LiBDb250YWlucyBhbGwgdGhlXG4gICAgICogbG9naWMgdG8gZHJhdyBhIGZyZWVoYW5kIGxpbmUgb250byBhIGNvbnRleHQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgVGhlIGNhbnZhcyBjb250ZXh0IHRvIGRyYXcgdGhpcyBlbnRpdHkgdG8uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBkcmF3UGF0aChjb250ZXh0LCBzdHJva2UpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUncyBub3RoaW5nIHRvIGRyYXcsIHNob3JjaXJjdWl0LlxuICAgICAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoIDwgMSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gU2V0IHRoZSBzY2FsZSB0byBlcXVhbCB0aGUgZGVmYXVsdFxuICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgICAgICAvLyBDYWN1bGF0ZSB0aGUgc2NhbGUgYmFzZWQgb24gdGhlIHNpemUgb2YgdGhlIGNhbnZhcyBjb250ZXh0J3MgY2FudmFzXG4gICAgICAgIGlmIChjb250ZXh0LmNhbnZhcy53aWR0aCAhPT0gQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoKSB7XG4gICAgICAgICAgICBzY2FsZSA9IGNvbnRleHQuY2FudmFzLndpZHRoIC8gQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIC8vIERyYXdcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSB0aGlzLnNpemUgKiBzY2FsZTtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3IuZ2V0SGV4KGZhbHNlKTtcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yLmdldEhleChmYWxzZSk7XG4gICAgICAgIGNvbnRleHQubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICAgICAgLy8gV2UgZGVub3JtYWxpemUgdGhlIHBvaW50cywgYmFzZWQgb24gdGhlIGNhbnZhcyBzaXplIGFuZCBzY2FsZS5cbiAgICAgICAgY29uc3QgaW5pdGlhbFBvaW50ID0gZGVub3JtYWxpemUodGhpcy5wb2ludHNbMF0sIGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAvLyBNb3ZlIHRoZSB0dXJ0bGUgdG8gdGhpcy5wb2ludHNbMF1cbiAgICAgICAgY29udGV4dC5tb3ZlVG8oaW5pdGlhbFBvaW50LngsIGluaXRpYWxQb2ludC55KTtcbiAgICAgICAgLy8gU3RhcnQgYXQgdGhlIHNlY29uZCBwb2ludCBgdGhpcy5wb2ludHNbMV1gXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIERlbm1vcm1hbGlzZSBjdXJyZW50IHBvaW50IHRvIHBpeGVsIHZhbHVlc1xuICAgICAgICAgICAgY29uc3QgZGVub3JtYWxpemVkID0gZGVub3JtYWxpemUodGhpcy5wb2ludHNbaV0sIGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBtb3JlIHRoYW4gMiBwb2ludHMgYW5kIHRoZSBjdXJyZW50IHBvaW50IGlzbid0IHRoZSBsYXN0IG9uZS4uLlxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA+IDEgJiYgaSA8ICh0aGlzLnBvaW50cy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgIC8vIERlbm9ybWFsaXNlIHRoZSBuZXh0IHBvaW50LCBzbyB0aGF0IHdlIGNhbiBkcmF3IGEgcXVhZHJhdGljIGN1cnZlIHRvIGl0XG4gICAgICAgICAgICAgICAgY29uc3QgZGVub21hbGl6ZWROZXh0ID0gZGVub3JtYWxpemUodGhpcy5wb2ludHNbaSArIDFdLCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAvLyBDYWx1bGF0ZSB0aGUgbWlkLXBvaW50IGJldHdlZW4gY3VycmVudCBhbmQgbmV4dCBwb2ludHNcbiAgICAgICAgICAgICAgICB2YXIgYyA9IChkZW5vcm1hbGl6ZWQueCArIGRlbm9tYWxpemVkTmV4dC54KSAvIDI7XG4gICAgICAgICAgICAgICAgdmFyIGQgPSAoZGVub3JtYWxpemVkLnkgKyBkZW5vbWFsaXplZE5leHQueSkgLyAyO1xuICAgICAgICAgICAgICAgIC8vIERyYXcgdGhlIHF1YWRyYXRpYyBjdXJ2ZSB0byB0aGlzIHBvaW50XG4gICAgICAgICAgICAgICAgY29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvKGRlbm9ybWFsaXplZC54LCBkZW5vcm1hbGl6ZWQueSwgYywgZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UganVzdCBkcmF3IGEgc2ltcGxlIGxpbmVcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhkZW5vcm1hbGl6ZWQueCwgZGVub3JtYWxpemVkLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNsb3NlKSB7XG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3Ryb2tlIGl0LiDUhSjiiZbijKPiiZbUhSlcbiAgICAgICAgaWYgKHN0cm9rZSlcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtkcmF3IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIFtjb250ZXh0IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZHJhdyhjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuZHJhd1BhdGgoY29udGV4dCwgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERyYXdzIHRvb2wgZ3VpZGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgW2NvbnRleHQgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkcmF3R3VpZGVzKGNvbnRleHQsIHRhcmdldCkge1xuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vdGhpbmcgdG8gZHJhdywgc2hvcmNpcmN1aXQuXG4gICAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVjdG9yID0gZGVub3JtYWxpemUodGhpcy5wb2ludHNbaV0sIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgZHJhd0d1aWRlKGNvbnRleHQsIHZlY3RvciwgdGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGJvdW5kaW5nQm94ID0gdGhpcy5nZXRCb3VuZGluZ0JveCgpO1xuICAgICAgICAgICAgZHJhd0JvdW5kaW5nQm94KGJvdW5kaW5nQm94WzBdLCBib3VuZGluZ0JveFsxXSwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkIGEgcG9pbnQgdG8gdGhlIGNhbnZhc1xuICAgICAqXG4gICAgICogQHBhcmFtICAge1ZlY3Rvcn0gIGxvY2F0aW9uICBbbG9jYXRpb24gZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBhZGQobG9jYXRpb24pIHtcbiAgICAgICAgLy8gUG9pbnRzIGFyZSBub3JtYWxpemVkIHRvIHg6IDAuMCAtIDEuMCwgeTogMC4wIC0gMS4wLCBhcyB1c2luZyBwaXhlbCB2YWx1ZXMgaXMgcmVzdHJpY3RpdmVcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChub3JtYWxpemUobG9jYXRpb24sIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB3ZSdyZSBpbnRlcnNlY3RpbmcgYSB2ZWN0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3J9ICBwb3NpdGlvbiAgW3Bvc2l0aW9uIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGdldEludGVyY2V0aW5nVmVjdG9yKHBvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNpemUgPSBDb25zdGFudHMuR1VJREVfU0laRTtcbiAgICAgICAgLy8gSWYgdGhlcmUncyBub3RoaW5nIHRvIGRyYXcsIHNob3JjaXJjdWl0LlxuICAgICAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlY3RvciA9IGRlbm9ybWFsaXplKHRoaXMucG9pbnRzW2ldLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGgsIENvbnN0YW50cy5DQU5WQVNfU0laRS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0WCA9IHZlY3Rvci54IC0gKHNpemUgLyAyKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydFkgPSB2ZWN0b3IueSAtIChzaXplIC8gMik7XG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnggPiBzdGFydFggJiYgcG9zaXRpb24ueCA8IChzdGFydFggKyBzaXplKSAmJiBwb3NpdGlvbi55ID4gc3RhcnRZICYmIHBvc2l0aW9uLnkgPCAoc3RhcnRZICsgc2l6ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBbZ2V0Qm91bmRpbmdCb3ggZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7VmVjdG9yW119ICBwb3NpdGlvbiAgW3Bvc2l0aW9uIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWRbXX0gICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0Qm91bmRpbmdCb3goKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0O1xuICAgICAgICBsZXQgbWluWCA9IHdpZHRoO1xuICAgICAgICBsZXQgbWluWSA9IGhlaWdodDtcbiAgICAgICAgbGV0IG1heFggPSAwO1xuICAgICAgICBsZXQgbWF4WSA9IDA7XG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHRoaXMucG9pbnRzKSB7XG4gICAgICAgICAgICBjb25zdCBkZW5vcm1hbGl6ZVBvaW50ID0gZGVub3JtYWxpemUocG9pbnQsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgaWYgKGRlbm9ybWFsaXplUG9pbnQueCA8IG1pblgpXG4gICAgICAgICAgICAgICAgbWluWCA9IGRlbm9ybWFsaXplUG9pbnQueDtcbiAgICAgICAgICAgIGlmIChkZW5vcm1hbGl6ZVBvaW50LnkgPCBtaW5ZKVxuICAgICAgICAgICAgICAgIG1pblkgPSBkZW5vcm1hbGl6ZVBvaW50Lnk7XG4gICAgICAgICAgICBpZiAoZGVub3JtYWxpemVQb2ludC54ID49IG1heFgpXG4gICAgICAgICAgICAgICAgbWF4WCA9IGRlbm9ybWFsaXplUG9pbnQueDtcbiAgICAgICAgICAgIGlmIChkZW5vcm1hbGl6ZVBvaW50LnkgPj0gbWF4WSlcbiAgICAgICAgICAgICAgICBtYXhZID0gZGVub3JtYWxpemVQb2ludC55O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBub3JtYWxpemUobmV3IFZlY3RvcihtaW5YIC0gKHRoaXMuc2l6ZSAvIDIpLCBtaW5ZIC0gKHRoaXMuc2l6ZSAvIDIpKSwgd2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgICBub3JtYWxpemUobmV3IFZlY3RvcihtYXhYICsgKHRoaXMuc2l6ZSAvIDIpLCBtYXhZICsgKHRoaXMuc2l6ZSAvIDIpKSwgd2lkdGgsIGhlaWdodClcbiAgICAgICAgXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogW2lzUG9pbnRPdmVyIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgaXNQb2ludE92ZXIoY29udGV4dCwgcG9pbnRlcikge1xuICAgICAgICB0aGlzLmRyYXdQYXRoKGNvbnRleHQsIGZhbHNlKTtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LmlzUG9pbnRJblBhdGgocG9pbnRlci54LCBwb2ludGVyLnkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0LmlzUG9pbnRJblN0cm9rZShwb2ludGVyLngsIHBvaW50ZXIueSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1vdmVzIGFuIGVudGl0eVxuICAgICAqXG4gICAgICogQHBhcmFtICAge1ZlY3Rvcn0gIHZlY3RvciAgW3ZlY3RvciBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgbW92ZUVudGl0eSh2ZWN0b3IpIHtcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2YgdGhpcy5wb2ludHMpIHtcbiAgICAgICAgICAgIHBvaW50LnN1YnRyYWN0KHZlY3Rvcik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuL2VudGl0eVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVsbCBleHRlbmRzIEVudGl0eSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIHNpemUgICBTaXplIG9mIHRoZSBlbnRpdHlcbiAgICAgKiBAcGFyYW0gICB7Q29sb3J9ICAgY29sb3IgIENvbG9yIG9mIHRoZSBlbnRpdHlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkcmF3aW5nKSB7XG4gICAgICAgIHN1cGVyKCdudWxsJyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQb2ludHMgb2YgdGhlIGZyZWVoYW5kIGxpbmVcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7QXJyYXk8VmVjdG9yPn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmFibGVzIHRoZSBlbnRpdHkgdG8gYmUgc2NhbGVkIGFuZCBkaXNwbGF5ZWQgYXRcbiAgICAgICAgICogYSBkaWZmZXJlbnQgc2l6ZSwgaWUgaW4gdGhlIGxheWVycyBvdmVydmlldy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zY2FsZSA9IDEuMDtcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gZHJhd2luZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogW2NvbXBsZXRlIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgc3VwZXIuY29tcGxldGUoKTtcbiAgICAgICAgKF9hID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVkcmF3SHVkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERyYXcgdGhpcyBlbnRpdHkgdG8gdGhlIGdpdmVuIGNvbnRleHQuIENvbnRhaW5zIGFsbCB0aGVcbiAgICAgKiBsb2dpYyB0byBkcmF3IGEgZnJlZWhhbmQgbGluZSBvbnRvIGEgY29udGV4dC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBUaGUgY2FudmFzIGNvbnRleHQgdG8gZHJhdyB0aGlzIGVudGl0eSB0by5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXcoY29udGV4dCkge1xuICAgICAgICAvLyBOb3QgdXNlZFxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERyYXdzIHRvb2wgZ3VpZGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgW2NvbnRleHQgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkcmF3R3VpZGVzKGNvbnRleHQsIHRhcmdldCkge1xuICAgICAgICAvLyBOb3QgdXNlZFxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZCBhIHBvaW50IHRvIHRoZSBjYW52YXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3J9ICBsb2NhdGlvbiAgW2xvY2F0aW9uIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgYWRkKGxvY2F0aW9uKSB7XG4gICAgICAgIC8vIE5vdCB1c2VkXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogW2dldEludGVyY2V0aW5nVmVjdG9yIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICAge1ZlY3Rvcn0gIHBvc2l0aW9uICBbcG9zaXRpb24gZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0SW50ZXJjZXRpbmdWZWN0b3IocG9zaXRpb24pIHtcbiAgICAgICAgLy8gTm90IHVzZWRcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBbZ2V0Qm91bmRpbmdCb3ggZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7VmVjdG9yPFZlY3Rvcj59ICBwb3NpdGlvbiAgW3Bvc2l0aW9uIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWQ8VmVjdG9yPn0gICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0Qm91bmRpbmdCb3goKSB7XG4gICAgICAgIC8vIE5vdCB1c2VkXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaXNQb2ludE92ZXIoY29udGV4dCwgcG9pbnRlcikge1xuICAgICAgICAvLyBOb3QgdXNlZFxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIG1vdmVFbnRpdHkodmVjdG9yKSB7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZGVub3JtYWxpemUsIG5vcm1hbGl6ZSB9IGZyb20gXCIuLi91dGlsL25vcm1hbGl6ZVwiO1xuaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9lbnRpdHlcIjtcbmltcG9ydCB7IGRyYXdCb3VuZGluZ0JveCwgZHJhd0d1aWRlIH0gZnJvbSBcIi4uL3V0aWwvZ3VpZGVcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3QgZXh0ZW5kcyBFbnRpdHkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBzaXplICAgU2l6ZSBvZiB0aGUgZW50aXR5XG4gICAgICogQHBhcmFtICAge0NvbG9yfSAgIGNvbG9yICBDb2xvciBvZiB0aGUgZW50aXR5XG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgY29sb3IsIGRyYXdpbmcpIHtcbiAgICAgICAgc3VwZXIoJ3JlY3QnKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBvaW50cyBvZiB0aGUgZnJlZWhhbmQgbGluZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtBcnJheTxWZWN0b3I+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9yaWdpbiA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBbZGVzY3JpcHRpb25dXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuYWJsZXMgdGhlIGVudGl0eSB0byBiZSBzY2FsZWQgYW5kIGRpc3BsYXllZCBhdFxuICAgICAgICAgKiBhIGRpZmZlcmVudCBzaXplLCBpZSBpbiB0aGUgbGF5ZXJzIG92ZXJ2aWV3LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNjYWxlID0gMS4wO1xuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMC4wMTtcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gZHJhd2luZztcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBbY29tcGxldGUgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgc3VwZXIuY29tcGxldGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHJhdyB0aGlzIGVudGl0eSB0byB0aGUgZ2l2ZW4gY29udGV4dC4gQ29udGFpbnMgYWxsIHRoZVxuICAgICAqIGxvZ2ljIHRvIGRyYXcgYSBmcmVlaGFuZCBsaW5lIG9udG8gYSBjb250ZXh0LlxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIFRoZSBjYW52YXMgY29udGV4dCB0byBkcmF3IHRoaXMgZW50aXR5IHRvLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgZHJhd1BhdGgoY29udGV4dCwgc3Ryb2tlKSB7XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm90aGluZyB0byBkcmF3LCBzaG9yY2lyY3VpdC5cbiAgICAgICAgaWYgKHRoaXMub3JpZ2luICYmIHRoaXMuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbiA9IGRlbm9ybWFsaXplKHRoaXMub3JpZ2luLCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gZGVub3JtYWxpemUodGhpcy5kZXN0aW5hdGlvbiwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAvLyBTZXQgdGhlIHNjYWxlIHRvIGVxdWFsIHRoZSBkZWZhdWx0XG4gICAgICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgLy8gQ2FjdWxhdGUgdGhlIHNjYWxlIGJhc2VkIG9uIHRoZSBzaXplIG9mIHRoZSBjYW52YXMgY29udGV4dCdzIGNhbnZhc1xuICAgICAgICAgICAgaWYgKGNvbnRleHQuY2FudmFzLndpZHRoICE9PSBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGgpIHtcbiAgICAgICAgICAgICAgICBzY2FsZSA9IGNvbnRleHQuY2FudmFzLndpZHRoIC8gQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRHJhd1xuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gdGhpcy5zaXplICogc2NhbGU7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvci5nZXRIZXgoZmFsc2UpO1xuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yLmdldEhleChmYWxzZSk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgICAgICAgICBjb250ZXh0LnJlY3Qob3JpZ2luLngsIG9yaWdpbi55LCAtKG9yaWdpbi54IC0gZGVzdGluYXRpb24ueCksIC0ob3JpZ2luLnkgLSBkZXN0aW5hdGlvbi55KSk7XG4gICAgICAgICAgICBpZiAoc3Ryb2tlKVxuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHJhdyhjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuZHJhd1BhdGgoY29udGV4dCwgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERyYXdzIHRvb2wgZ3VpZGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgW2NvbnRleHQgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkcmF3R3VpZGVzKGNvbnRleHQsIHRhcmdldCkge1xuICAgICAgICBpZiAodGhpcy5vcmlnaW4gJiYgdGhpcy5kZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgZHJhd0d1aWRlKGNvbnRleHQsIGRlbm9ybWFsaXplKHRoaXMub3JpZ2luLCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KSwgdGFyZ2V0KTtcbiAgICAgICAgICAgIGRyYXdHdWlkZShjb250ZXh0LCBkZW5vcm1hbGl6ZSh0aGlzLmRlc3RpbmF0aW9uLCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KSwgdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBib3VuZGluZ0JveCA9IHRoaXMuZ2V0Qm91bmRpbmdCb3goKTtcbiAgICAgICAgZHJhd0JvdW5kaW5nQm94KGJvdW5kaW5nQm94WzBdLCBib3VuZGluZ0JveFsxXSwgY29udGV4dCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZCBhIHBvaW50IHRvIHRoZSBjYW52YXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3J9ICBsb2NhdGlvbiAgW2xvY2F0aW9uIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgYWRkKGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IHBvaW50ID0gbm9ybWFsaXplKGxvY2F0aW9uLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGgsIENvbnN0YW50cy5DQU5WQVNfU0laRS5oZWlnaHQpO1xuICAgICAgICBpZiAoIXRoaXMub3JpZ2luKSB7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbiA9IHBvaW50O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IHBvaW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHdlJ3JlIGludGVyc2VjdGluZyBhIHZlY3RvclxuICAgICAqXG4gICAgICogQHBhcmFtICAge1ZlY3Rvcn0gIHBvc2l0aW9uICBbcG9zaXRpb24gZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0SW50ZXJjZXRpbmdWZWN0b3IocG9zaXRpb24pIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IENvbnN0YW50cy5HVUlERV9TSVpFO1xuICAgICAgICBpZiAodGhpcy5vcmlnaW4gJiYgdGhpcy5kZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgY29uc3QgZGVub3JtYWxfb3JpZ2luID0gZGVub3JtYWxpemUodGhpcy5vcmlnaW4sIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodCk7XG4gICAgICAgICAgICBpZiAocG9zaXRpb24ueCA+IChkZW5vcm1hbF9vcmlnaW4ueCAtIChzaXplIC8gMikpICYmXG4gICAgICAgICAgICAgICAgcG9zaXRpb24ueCA8ICgoZGVub3JtYWxfb3JpZ2luLnggLSAoc2l6ZSAvIDIpKSArIHNpemUpICYmXG4gICAgICAgICAgICAgICAgcG9zaXRpb24ueSA+IChkZW5vcm1hbF9vcmlnaW4ueSAtIChzaXplIC8gMikpICYmXG4gICAgICAgICAgICAgICAgcG9zaXRpb24ueSA8ICgoZGVub3JtYWxfb3JpZ2luLnkgLSAoc2l6ZSAvIDIpKSArIHNpemUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3JpZ2luO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGVub3JtYWxfZGVzdGluYXRpb24gPSBkZW5vcm1hbGl6ZSh0aGlzLmRlc3RpbmF0aW9uLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGgsIENvbnN0YW50cy5DQU5WQVNfU0laRS5oZWlnaHQpO1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnggPiAoZGVub3JtYWxfZGVzdGluYXRpb24ueCAtIChzaXplIC8gMikpICYmXG4gICAgICAgICAgICAgICAgcG9zaXRpb24ueCA8ICgoZGVub3JtYWxfZGVzdGluYXRpb24ueCAtIChzaXplIC8gMikpICsgc2l6ZSkgJiZcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi55ID4gKGRlbm9ybWFsX2Rlc3RpbmF0aW9uLnkgLSAoc2l6ZSAvIDIpKSAmJlxuICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgPCAoKGRlbm9ybWFsX2Rlc3RpbmF0aW9uLnkgLSAoc2l6ZSAvIDIpKSArIHNpemUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IEJvdW5kaW5nIGJveFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWRbXX0gIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0Qm91bmRpbmdCb3goKSB7XG4gICAgICAgIGlmICh0aGlzLm9yaWdpbiAmJiB0aGlzLmRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIFt0aGlzLm9yaWdpbiwgdGhpcy5kZXN0aW5hdGlvbl07XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSXMgcG9pbnQgb3ZlclxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIFtjb250ZXh0IGRlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3J9ICAgICAgICAgICAgICAgICAgICBwb2ludGVyICBbcG9pbnRlciBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGlzUG9pbnRPdmVyKGNvbnRleHQsIHBvaW50ZXIpIHtcbiAgICAgICAgdGhpcy5kcmF3UGF0aChjb250ZXh0LCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBjb250ZXh0LmlzUG9pbnRJblN0cm9rZShwb2ludGVyLngsIHBvaW50ZXIueSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1vdmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3J9ICB2ZWN0b3IgIFt2ZWN0b3IgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIG1vdmVFbnRpdHkodmVjdG9yKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIChfYSA9IHRoaXMub3JpZ2luKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3VidHJhY3QodmVjdG9yKTtcbiAgICAgICAgKF9iID0gdGhpcy5kZXN0aW5hdGlvbikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnN1YnRyYWN0KHZlY3Rvcik7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHVkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFycmF5IG9mIGl0ZW1zIHRvIHJlbmRlciBmb3IgdGhlIEh1ZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtBcnJheTxIdWRJdGVtPn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHdlIHdhbnQgdGhlIEhVRCB0byBiZSB2aXNpYmxlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogUG9zaXRpb24gb2YgdGhlIG1vdXNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge1ZlY3Rvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY3Vyc29yX3Bvc2l0aW9uID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV291bGQgcmVuZGVyIGFueSBjYW52YXMgYmFzZWQgaHVkIGl0ZW1zLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyByZW5kZXJpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRleHQpIHtcbiAgICAgICAgLy8gTm90aGluZyBoZXJlIHlldC5cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGN1cnNvciBhbmQgaHVkIGludGVyc2VjdHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBkZWx0YSAgW2RlbHRhIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHByb2Nlc3MoZGVsdGEpIHtcbiAgICAgICAgLy8gTm90aGluZyBoZXJlIHlldC5cbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkIGFuIGl0ZW0gdG8gdGhlIEhVRFxuICAgICAqXG4gICAgICogQHBhcmFtICAge0h1ZEl0ZW19ICBpdGVtICBJdGVtIHRoYXQgaW5oZXJpdHMgZnJvbSB0aGUgSHV0SXRlbSBhYnN0cmFjdCBjbGFzc1xuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgaXRlbS5idWlsZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSByZWZlcmVuY2UgdG8gYSBodWQgaXRlbSBieSBuYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgIG5hbWUgIHRoZSBuYW1lIG9mIHRoZSBodWQgaXRlbSB0byByZXRyaWV2ZVxuICAgICAqXG4gICAgICogQHJldHVybiAge0h1ZEl0ZW18bnVsbH0gICB0aGUgaHVkIGl0ZW0gaWYgZm91bmQgb3RoZXJ3aXNlIG51bGwuXG4gICAgICovXG4gICAgZ2V0QnlOYW1lKG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc1tpXS5uYW1lID09PSBuYW1lKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFja3MgdGhlIGN1cnNvciBwb3NpdGlvbiBmb3IgaHVkIHVzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3J9ICBwb3NpdGlvbiAgUG9zaXRpb24gb2YgdGhlIG1vdXNlLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0Q3Vyc29yUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5jdXJzb3JfcG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIdWRJdGVtIHtcbiAgICAvKipcbiAgICAgKiBIdWQgSXRlbXMgbmVlZCBhIG5hbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBuYW1lICBUaGUgbmFtZSBmb3IgdGhlIGl0ZW1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19XG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsIGFueSB1cGRhdGUgZnVuY3Rpb25zIHRoYXQgbmVlZCB0byBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgSHVkSXRlbSBmcm9tIFwiLi9odWRfaXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXJzIGV4dGVuZHMgSHVkSXRlbSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCB0aGUgbGF5ZXJzIHNlY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtEcmF3aW5nfSAgZHJhd2luZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRyYXdpbmcpIHtcbiAgICAgICAgc3VwZXIoXCJsYXllcnNcIik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIVE1MIERpdiBFbGVtZW50LCB3aGVyZSB0aGUgSFRNTENhbnZhc0VsZW1lbnQgbGF5ZXJzIHdpbGwgYmUgY3JlYXRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7SFRNTERpdkVsZW1lbnQgfCBudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICB0aGlzLnRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXllcnMnKTtcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gZHJhd2luZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgdGhlIGxheWVycyBVSSwgdGhpcyBlbXB0aWVzIHRoZW4gY3JlYXRlc1xuICAgICAqIEhUTUxDYW52YXNFbGVtZW50cyBpbnNpZGUgdGhlIGB0aGlzLnRhcmdldGAgSFRNTERpdkVsZW1lbnRcbiAgICAgKiBUaGlzIGdpdmVzIHVzIHRoZSBsYXllciBvdmVydmlldyBvbiB0aGUgcmlnaHQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyYXdpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy50YXJnZXQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMudGFyZ2V0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCB3aWR0aCA9IENvbnN0YW50cy5MQVlFUlNfV0lEVEg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9ICh3aWR0aCAvIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCkgKiBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0O1xuICAgICAgICBmb3IgKGxldCBba2V5LCBsYXllcl0gb2YgdGhpcy5kcmF3aW5nLmxheWVycykge1xuICAgICAgICAgICAgbGF5ZXIuZHJhdyh0aGlzLnRhcmdldCwgd2lkdGgsIGhlaWdodCwgdGhpcy5kcmF3aW5nLmFjdGl2ZV9sYXllciA9PT0gbGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IENvbG9yIGZyb20gXCIuLi91dGlsL2NvbG9yXCI7XG5pbXBvcnQgSHVkSXRlbSBmcm9tIFwiLi9odWRfaXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFsZXR0ZSBleHRlbmRzIEh1ZEl0ZW0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgdGhlIFBhbGV0dGUgSFVEIGl0ZW1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXCJwYWxldHRlXCIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdCBvZiBhdmFpbGFibGUgY29sb3JzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge0FycmF5PENvbG9yPn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29sb3JzID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbG9yXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge0NvbG9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZWxlY3RlZF9jb2xvciA9IG5ldyBDb2xvcigwLCAwLCAwLCAwLjUpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb2xvciBpbmRleCwgdGhpcyBpcyB0aGUgaW5kZXhcbiAgICAgICAgICogaW4gYHRoaXMuY29sb3JzYCBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbG9yXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRfY29sb3JfaW5kZXggPSAxO1xuICAgICAgICBmb3IgKHZhciBjb2xvciBvZiBDb25zdGFudHMuQ09MT1JTKSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9ycy5wdXNoKG5ldyBDb2xvcihjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iLCBjb2xvci5hKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgdGhlIFVJLCB0aGlzIGZpbmRzIHRoZSBIVE1MRGl2RWxlbWVudCB3aXRoIHRoZVxuICAgICAqIElEIGBwYWxldHRlYCBhbmQgY2xlYXJzIGl0IG91dCwgdGhlbiBwbGFjZXMgYW5vdGhlclxuICAgICAqIEhUTUxEaXZFbGVtZW50IGluc2lkZSBmb3IgZXZlcnkgY29sb3IgaW4gYHRoaXMuY29sb3JzYFxuICAgICAqIGFuZCBzZXRzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSBjb2xvciBvZiBlYWNoIGNvbG9yLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWxldHRlJyk7XG4gICAgICAgIGlmICghdGFyZ2V0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBFbXB0eSB0aGUgdGFyZ2V0XG4gICAgICAgIHRhcmdldC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgLy8gQWRkIGVhY2ggb2YgdGhlIGNvbG91cnMgYXMgYSBEaXYgd2l0aCBhIGJhY2tncm91bmQgY29sb3JcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmNvbG9yc1tpXS5nZXRIZXgoKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgY2xhc3MgYGNvbG9yYCB3aGljaCBhcHBsaWVzIHRoZSBzdHlsZXNcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiY29sb3JcIik7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29sb3IsIHNvIGFkZCB0aGUgYXBwcm9wcmlhdGUgY2xhc3NcbiAgICAgICAgICAgIGlmIChpID09PSB0aGlzLnNlbGVjdGVkX2NvbG9yX2luZGV4KVxuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENvbG9ySW5kZXgoaSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhcmdldCA9PT0gbnVsbCB8fCB0YXJnZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhcmdldC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb2xvclxuICAgICAqXG4gICAgICogQHJldHVybiAge0NvbG9yfSAgIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29sb3JcbiAgICAgKi9cbiAgICBnZXRDb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRfY29sb3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGluZGV4IG9mIHRoZSBzZWxlY3RlZCBjb2xvdXIgYW5kXG4gICAgICogdXBkYXRlcyB0aGUgc2VsZWN0ZWQgY29sb3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBpbmRleFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0Q29sb3JJbmRleChpbmRleCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkX2NvbG9yX2luZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRfY29sb3IgPSB0aGlzLmNvbG9yc1t0aGlzLnNlbGVjdGVkX2NvbG9yX2luZGV4XTtcbiAgICAgICAgLy8gUnVuIGFueSBHVUkgdXBkYXRlc1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBNYXJrZXIgZnJvbSBcIi4uL3Rvb2xzL21hcmtlclwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vdG9vbHMvcmVjdGFuZ2xlXCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi90b29scy9zZWxlY3RcIjtcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi4vdG9vbHMvc2hhcGVcIjtcbmltcG9ydCBIdWRJdGVtIGZyb20gXCIuL2h1ZF9pdGVtXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sYmFyIGV4dGVuZHMgSHVkSXRlbSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZHJhd2luZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgdGhpcy50b29scyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibWFya2VyXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTWFya2VyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImZyZWVoYW5kX3NoYXBlXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ2xvc2VkXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcInJlY3RcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJSZWN0YW5nbGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTW9kaWZ5XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcmF3aW5nIHJlZmVyZW5jZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZHJhd2luZyA9IG51bGw7XG4gICAgICAgIHRoaXMuZHJhd2luZyA9IGRyYXdpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtzZXRUb29sIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIHRvb2wgIFt0b29sIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgc2V0VG9vbCh0b29sKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgc3dpdGNoICh0b29sKSB7XG4gICAgICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFRvb2wobmV3IFNlbGVjdCh0aGlzLmRyYXdpbmcpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21hcmtlcic6XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc2V0VG9vbChuZXcgTWFya2VyKHRoaXMuZHJhd2luZykpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZnJlZWhhbmRfc2hhcGUnOlxuICAgICAgICAgICAgICAgIChfYyA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnNldFRvb2wobmV3IFNoYXBlKHRoaXMuZHJhd2luZykpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVjdCc6XG4gICAgICAgICAgICAgICAgKF9kID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Quc2V0VG9vbChuZXcgUmVjdGFuZ2xlKHRoaXMuZHJhd2luZykpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHRoZSB0b29sYmFyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b29sc1wiKTtcbiAgICAgICAgaWYgKCF0YXJnZXQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRhcmdldC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZm9yIChsZXQgdG9vbCBvZiB0aGlzLnRvb2xzKSB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSB0b29sLnRpdGxlO1xuICAgICAgICAgICAgYnV0dG9uLmlkID0gdG9vbC5rZXk7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9vbCh0b29sLmtleSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXIge1xuICAgIC8qKlxuICAgICAqIFNldCB1cCB0aGUgTGF5ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtEcmF3aW5nfSAgZHJhd2luZyAgRHJhd2luZyByZWZlcmVuY2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpZCwgZHJhd2luZykge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBMYXllcnMgSURcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pZCA9IC0xO1xuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIGRyYXduIGVudGl0aWVzLCB0aGVzZSB3aWxsIGFsbCBnZXRcbiAgICAgICAgICogcHJvY2Vzc2VkIGFuZCByZW5kZXJlZCB3aGVuIHRoZSBuZWVkIHRvIGJlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIgIHtNYXA8bnVtYmVyLCBFbnRpdHk+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhY3RpdmUgZW50aXR5XG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge0VudGl0eSB8IG51bGx9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFjdGl2ZV9lbnRpdHkgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogSXMgdGhlcmUgYW4gZW50aXR5IGJlaW5nIHRhcmdldGVkIGluIGVkaXQgbW9kZT9cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZW50aXR5VGFyZ2V0ZWQgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRW50aXR5IGluY3JlbWVudGFsIG51bWJlciwgdXNlZCB0byB0cmFjayB1bmlxdWUgbnVtZXJpY2FsXG4gICAgICAgICAqIGlkIG9mIGFsbCBlbnRpdGllcyBsb2FkZWQgb250byB0aGUgY2FudmFzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZW50aXR5X2lkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZmVyZW5jZSB0byB0aGUgbWFpbiBEcmF3aW5nXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge0RyYXdpbmcgfCBudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kcmF3aW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmRyYXdpbmcgPSBkcmF3aW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGVudGl0eSB0byB0aGUgZ2FtZVxuICAgICAqXG4gICAgICogQHBhcmFtICAge0VudGl0eX0gIGVudGl0eSAgRW50aXR5IHRvIGFkZCB0byB0aGUgZ2FtZXdvcmxkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBhZGRFbnRpdHkoZW50aXR5KSB7XG4gICAgICAgIGVudGl0eS5pZCA9IHRoaXMuZW50aXR5X2lkO1xuICAgICAgICBlbnRpdHkuZHJhd2luZyA9IHRoaXMuZHJhd2luZztcbiAgICAgICAgdGhpcy5lbnRpdGllcy5zZXQodGhpcy5lbnRpdHlfaWQsIGVudGl0eSk7XG4gICAgICAgIHRoaXMuZW50aXR5X2lkICs9IDE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdhcmJhZ2UgY2xlYW4gdXAsIHJlbW92ZXMgYW55IGVudGl0aWVzIHRoYXQgYXJlIHNjaGVkdWxlIGZvciByZW1vdmFsXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVFbnRpdGllcygpIHtcbiAgICAgICAgY29uc3QgaWRzID0gW107XG4gICAgICAgIGZvciAobGV0IFtrZXksIGVudGl0eV0gb2YgdGhpcy5lbnRpdGllcykge1xuICAgICAgICAgICAgaWYgKGVudGl0eS5yZW1vdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0aWVzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gRW50aXR5IGdpdmVuIGFuIElEXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgaWQgIEVudGl0aSBudW1lcmljYWwgSURcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtFbnRpdHl9XG4gICAgICovXG4gICAgZ2V0RW50aXR5KGlkKSB7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuZW50aXRpZXMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKGVudGl0eSlcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gY291bnQgb2YgZW50aXRlcyBieSB0eXBlLCBpZiBubyB0eXBlIHNwZWNpZmllZCxcbiAgICAgKiB0aGVuIHJldHVuciBjb3VudCBvZiBhbGwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgdHlwZSAgRW50aXR5IFR5cGV8TmFtZSBbb3B0aW9uYWxdXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7bnVtYmVyfSAgICAgICAgTnVtYmVyIG9mIGVudGl0aWVzXG4gICAgICovXG4gICAgY291bnRFbnRpdGllcyh0eXBlKSB7XG4gICAgICAgIC8vIE5vIHR5cGUgc3BlY2lmaWNlLCBzbyBpbmNsdWRlIGFsbCBlbnRpdGllcy5cbiAgICAgICAgaWYgKCF0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXMuc2l6ZTtcbiAgICAgICAgLy8gQSB0eXBlIHdhcyBzcGVjaWZpZWQsIHNvIGNoZWNrIHR5cGUgYmVmb3JlIGFkZGluZ1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBba2V5LCBlbnRpdHldIG9mIHRoaXMuZW50aXRpZXMpIHtcbiAgICAgICAgICAgIGlmIChlbnRpdHkubmFtZSA9PSB0eXBlICYmIGVudGl0eS5yZW1vdmUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvY2VzcyBhbnkgdXBkYXRlcyB0aGF0IG5lZWQgdG8gYmUgcmVuZGVyZWQgbmV4dCB0aWNrLiBXZVxuICAgICAqIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVtb3ZlIHRoZSBlbnRpdGllcyBvbmUgYnkgb25lLiBUaGF0J3NcbiAgICAgKiBzdGlsbCBhIFRPRE8gdGhvdWdoLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gICAgICAgICAgICAgICBkZWx0YXRpbWUgICAgICAgIFRoZSB0aW1lIHNpbmNlIGxhc3QgdGlja1xuICAgICAqIEBwYXJhbSAgIHtET01IaWdoUmVzVGltZVN0YW1wfSAgdGltZXN0YW1wICAgICAgICBDdXJyZW50IHRpbWVzdGFtcFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2VzcyhkZWx0YXRpbWUsIHRpbWVzdGFtcCkge1xuICAgICAgICBmb3IgKGxldCBba2V5LCBlbnRpdHldIG9mIHRoaXMuZW50aXRpZXMpIHtcbiAgICAgICAgICAgIGlmIChlbnRpdHkucmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRpdGllcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYWxsIHRoZSByZW5kZXJpbmcgZm9yIHRoaXMgbGF5ZXJzIGVudGl0aWVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgVGhlIGNhbnZhcyBjb250ZXh0IGZvciBhcHBseWluZyB0aGUgZW50aXR5IHJlZGVycyB0b1xuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRleHQpIHtcbiAgICAgICAgLy8gUmVuZGVyIGVhY2ggb2YgdGhlIGV4aXN0aW5nIGVudGl0aXRlcy4gKERyYXdpbmdzKVxuICAgICAgICBmb3IgKGxldCBba2V5LCBlbnRpdHldIG9mIHRoaXMuZW50aXRpZXMpIHtcbiAgICAgICAgICAgIGVudGl0eS5yZW5kZXIoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgVUkgZHJhd2luZyBvZiBhIGxheWVyIGluIHRoZSBsYXllciBvdmVydmlld1xuICAgICAqXG4gICAgICogQHBhcmFtICAge0hUTUxEaXZFbGVtZW50fSAgICAgcGFyZW50ICBUaGUgRGl2IGVsZW1lbnQgdG8gcmVuZGVyIGludG9cbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgICAgICAgICAgICB3aWR0aCAgIFRoZSB0YXJnZXQgd2lkdGggb2YgdGhlIGNhbnZhc1xuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICAgICAgICAgICAgIGhlaWdodCAgVGhlIHRhcmdldCBoZWlnaHQgb2YgdGhlIGNhbnZhc1xuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgZHJhdyhwYXJlbnQsIHdpZHRoLCBoZWlnaHQsIGFjdGl2ZSkge1xuICAgICAgICAvLyBDcmVhdGUgdGhlIG5ldyBDYW52YXMgRWxlbWVudFxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAvLyBTZXQgYWxsIGl0J3MgcHJvcGVydGllc1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY2FudmFzLmlkID0gYGxheWVyLSR7dGhpcy5pZH1gO1xuICAgICAgICBjYW52YXMuY2xhc3NMaXN0LmFkZCgnbGF5ZXInKTtcbiAgICAgICAgLy8gTGlzdGVuIGZvciB0aGUgc2VsZWN0ZWQgbGF5ZXIgY2xpY2tcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRBY3RpdmVMYXllcih0aGlzLmlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFNldCB0aGUgYWN0aXZlIGNsYXNzIGlmIGl0J3MgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBvbmUuXG4gICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgIGNhbnZhcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOZXdlciBsYXllcnMgZ28gb24gdG9wLCBzbyBgaW5zZXJ0QmVmb3JlYCBpcyB1c2VkXG4gICAgICAgIHBhcmVudCA9PT0gbnVsbCB8fCBwYXJlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudC5pbnNlcnRCZWZvcmUoY2FudmFzLCBwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIC8vIEdldCB0aGUgY29udGV4dCBmb3IgcmVuZGVyaW5nXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgaWYgKGNvbnRleHQgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gUmVuZGVyIGVhY2ggb2YgdGhlIGVudGl0aWVzIHRvIHRoZSBuZXcgSFRNTENhbnZhc0VsZW1lbnRcbiAgICAgICAgZm9yIChsZXQgW2tleSwgZW50aXR5XSBvZiB0aGlzLmVudGl0aWVzKSB7XG4gICAgICAgICAgICBlbnRpdHkucmVuZGVyKGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtkcmF3R3VpZGVzIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIFtjb250ZXh0IGRlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3J9ICAgICAgICAgICAgICAgICAgICB0YXJnZXQgICBbdGFyZ2V0IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZHJhd0d1aWRlcyhjb250ZXh0LCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgbGV0IHNlbGVjdGVkX3ZlY3RvcjtcbiAgICAgICAgbGV0IHBvaW50ZXJPdmVyRW50aXR5ID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgW2tleSwgZW50aXR5XSBvZiB0aGlzLmVudGl0aWVzKSB7XG4gICAgICAgICAgICBlbnRpdHkuZHJhd0d1aWRlcyhjb250ZXh0LCB0YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgcG9pbnRlck92ZXIgPSBlbnRpdHkuaXNQb2ludE92ZXIoY29udGV4dCwgdGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChwb2ludGVyT3Zlcikge1xuICAgICAgICAgICAgICAgIHBvaW50ZXJPdmVyRW50aXR5ID0gZW50aXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzZWxlY3RlZF92ZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZF92ZWN0b3IgPSBlbnRpdHkuZ2V0SW50ZXJjZXRpbmdWZWN0b3IodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocG9pbnRlck92ZXJFbnRpdHkpIHtcbiAgICAgICAgICAgIGlmIChwb2ludGVyT3ZlckVudGl0eSAhPT0gdGhpcy5lbnRpdHlUYXJnZXRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50aXR5VGFyZ2V0ZWQgPSBwb2ludGVyT3ZlckVudGl0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW50aXR5VGFyZ2V0ZWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKENvbnN0YW50cy5DQU5WQVNfVEFSR0VUKTtcbiAgICAgICAgaWYgKHRoaXMuZW50aXR5VGFyZ2V0ZWQpIHtcbiAgICAgICAgICAgIGlmIChjYW52YXMpXG4gICAgICAgICAgICAgICAgY2FudmFzLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjYW52YXMpXG4gICAgICAgICAgICAgICAgY2FudmFzLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0ZWRfdmVjdG9yKSB7XG4gICAgICAgICAgICAoKF9hID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9vbCkuc2VsZWN0ZWRfdmVjdG9yID0gc2VsZWN0ZWRfdmVjdG9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgKChfYiA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRvb2wpLnNlbGVjdGVkX3ZlY3RvciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgRnJlZWhhbmQgZnJvbSBcIi4uL2VudGl0aWVzL2ZyZWVoYW5kXCI7XG5pbXBvcnQgVG9vbCBmcm9tIFwiLi90b29sXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZXIgZXh0ZW5kcyBUb29sIHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIG1hcmtlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRyYXdpbmcpIHtcbiAgICAgICAgc3VwZXIoZHJhd2luZywgJ21hcmtlcicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGlsZSBkcmF3aW5nIChtb3VzZWRvd24pIGNvbnN0YW50bHkgYWRkIHRoZSBjdXJyZW50IGN1cnNvclxuICAgICAqIGxvY2F0aW9uIHRvIHRoZSBhY3RpdmUgZW50aXR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIHJlZGVyaW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXcoY29udGV4dCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVfZW50aXR5KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9lbnRpdHkuYWRkKHRoaXMubG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGVudGl0eSB0aGlzIGBUb29sYCBjcmVhdGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiAge0VudGl0eX0gIFRoZSBlbnRpdHkgdG8gYmUgYWRkZWQgdG8gdGhlIGxheWVyXG4gICAgICovXG4gICAgZ2V0RW50aXR5KGRyYXdpbmcpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmRyYXdpbmcuZ2V0Q29sb3IoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBGcmVlaGFuZCh0aGlzLnNpemUsIGNvbG9yLCB0aGlzLmRyYXdpbmcpO1xuICAgIH1cbn1cbiIsImltcG9ydCBUb29sIGZyb20gXCIuL3Rvb2xcIjtcbmltcG9ydCBSZWN0IGZyb20gXCIuLi9lbnRpdGllcy9yZWN0XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBUb29sIHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIG1hcmtlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRyYXdpbmcpIHtcbiAgICAgICAgc3VwZXIoZHJhd2luZywgJ3JlY3RhbmdsZScpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGlsZSBkcmF3aW5nIChtb3VzZWRvd24pIGNvbnN0YW50bHkgYWRkIHRoZSBjdXJyZW50IGN1cnNvclxuICAgICAqIGxvY2F0aW9uIHRvIHRoZSBhY3RpdmUgZW50aXR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIHJlZGVyaW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXcoY29udGV4dCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVfZW50aXR5KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9lbnRpdHkuYWRkKHRoaXMubG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGVudGl0eSB0aGlzIGBUb29sYCBjcmVhdGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiAge0VudGl0eX0gIFRoZSBlbnRpdHkgdG8gYmUgYWRkZWQgdG8gdGhlIGxheWVyXG4gICAgICovXG4gICAgZ2V0RW50aXR5KGRyYXdpbmcpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmRyYXdpbmcuZ2V0Q29sb3IoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0KHRoaXMuc2l6ZSwgY29sb3IsIHRoaXMuZHJhd2luZyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFRvb2wgZnJvbSBcIi4vdG9vbFwiO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XG5pbXBvcnQgTnVsbCBmcm9tIFwiLi4vZW50aXRpZXMvbnVsbFwiO1xuaW1wb3J0IHsgbm9ybWFsaXplIH0gZnJvbSBcIi4uL3V0aWwvbm9ybWFsaXplXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBUb29sIHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIG1hcmtlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRyYXdpbmcpIHtcbiAgICAgICAgc3VwZXIoZHJhd2luZywgJ3NlbGVjdCcpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3VycmVudGx5IHNlbGVjdGVkIHZlZGN0b3IgaWYgYW55XG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge1ZlY3Rvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRfdmVjdG9yID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpbml0YWwgcG9pbnQgd2hlcmUgd2Ugc3RhcnRlZCBkcmF3aW5nXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmluaXRpYWxfcG9pbnQgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBbc2V0TG9jYXRpb24gZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7VmVjdG9yfSAgbG9jYXRpb24gIFtsb2NhdGlvbiBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBzdGFydERyYXdpbmcobG9jYXRpb24pIHtcbiAgICAgICAgc3VwZXIuc3RhcnREcmF3aW5nKGxvY2F0aW9uKTtcbiAgICAgICAgaWYgKCF0aGlzLmluaXRpYWxfcG9pbnQpXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxfcG9pbnQgPSBsb2NhdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2hpbGUgZHJhd2luZyAobW91c2Vkb3duKSBjb25zdGFudGx5IGFkZCB0aGUgY3VycmVudCBjdXJzb3JcbiAgICAgKiBsb2NhdGlvbiB0byB0aGUgYWN0aXZlIGVudGl0eVxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyByZWRlcmluZyBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBkcmF3KGNvbnRleHQpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZF9sb2NhdGlvbiA9IG5vcm1hbGl6ZSh0aGlzLmxvY2F0aW9uLCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfdmVjdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkX3ZlY3Rvci54ID0gbm9ybWFsaXplZF9sb2NhdGlvbi54O1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF92ZWN0b3IueSA9IG5vcm1hbGl6ZWRfbG9jYXRpb24ueTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICgoX2EgPSB0aGlzLmRyYXdpbmcuYWN0aXZlX2xheWVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZW50aXR5VGFyZ2V0ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbml0aWFsX3BvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZlcmVuY2VWZWMgPSBub3JtYWxpemUobmV3IFZlY3Rvcih0aGlzLmluaXRpYWxfcG9pbnQueCAtIHRoaXMubG9jYXRpb24ueCwgdGhpcy5pbml0aWFsX3BvaW50LnkgLSB0aGlzLmxvY2F0aW9uLnkpLCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgKF9iID0gdGhpcy5kcmF3aW5nLmFjdGl2ZV9sYXllcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmVudGl0eVRhcmdldGVkLm1vdmVFbnRpdHkoZGlmZmVyZW5jZVZlYyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbF9wb2ludCA9IHRoaXMubG9jYXRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0b3BzIGRyYXdpbmcsIGFkZHMgZW5ldGl0eSBjb21wbGV0ZSB0aW1lLCBhZGRzIHRoZVxuICAgICAqIGVudGl0eSB0byB0aGUgZHJhd2luZywgd2hpY2ggd2lsbCBwYXNzIGl0IHRvIHRoZVxuICAgICAqIGFjdGl2ZSBsYXllcmFuZCByZXNldHMgdGhlIGFjdGl2ZSBlbnRpdHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBzdG9wRHJhd2luZygpIHtcbiAgICAgICAgc3VwZXIuc3RvcERyYXdpbmcoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsX3BvaW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZF92ZWN0b3IgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEcmF3IHRoZSB0b29sIHRhcmdldFxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyBkcmF3aW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXdUYXJnZXQoY29udGV4dCkge1xuICAgICAgICAvLyB2b2lkXG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGVudGl0eSB0aGlzIGBUb29sYCBjcmVhdGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiAge0VudGl0eX0gIFRoZSBlbnRpdHkgdG8gYmUgYWRkZWQgdG8gdGhlIGxheWVyXG4gICAgICovXG4gICAgZ2V0RW50aXR5KGRyYXdpbmcpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmRyYXdpbmcuZ2V0Q29sb3IoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBOdWxsKGRyYXdpbmcpO1xuICAgIH1cbn1cbiIsImltcG9ydCBGcmVlaGFuZCBmcm9tIFwiLi4vZW50aXRpZXMvZnJlZWhhbmRcIjtcbmltcG9ydCBUb29sIGZyb20gXCIuL3Rvb2xcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXBlIGV4dGVuZHMgVG9vbCB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBtYXJrZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkcmF3aW5nKSB7XG4gICAgICAgIHN1cGVyKGRyYXdpbmcsICdmcmVlaGFuZF9zaGFwZScpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGlsZSBkcmF3aW5nIChtb3VzZWRvd24pIGNvbnN0YW50bHkgYWRkIHRoZSBjdXJyZW50IGN1cnNvclxuICAgICAqIGxvY2F0aW9uIHRvIHRoZSBhY3RpdmUgZW50aXR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIHJlZGVyaW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXcoY29udGV4dCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVfZW50aXR5KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9lbnRpdHkuYWRkKHRoaXMubG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGVudGl0eSB0aGlzIGBUb29sYCBjcmVhdGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiAge0VudGl0eX0gIFRoZSBlbnRpdHkgdG8gYmUgYWRkZWQgdG8gdGhlIGxheWVyXG4gICAgICovXG4gICAgZ2V0RW50aXR5KGRyYXdpbmcpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmRyYXdpbmcuZ2V0Q29sb3IoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBGcmVlaGFuZCh0aGlzLnNpemUsIGNvbG9yLCB0aGlzLmRyYXdpbmcsIHRydWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xuaW1wb3J0IGRyYXdDaXJjbGUgZnJvbSBcIi4uL3V0aWwvY2lyY2xlXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4uL3V0aWwvY29sb3JcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2wge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSAgIHtEcmF3aW5nfSAgZHJhd2luZyAgTWFpbiBkcmF3aW5nIGNhbnZhc1xuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgbmFtZSAgICAgVGhlIG5hbWUgb2YgdGhlIHRvb2xcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkcmF3aW5nLCBuYW1lKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOYW1lIG9mIHRoZSB0b29sXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9ICcnO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2lkdGggb2YgdGhlIHRvb2xcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zaXplID0gMjA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUYXJnZXQgQ29sb3JcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7Q29sb3J9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRhcmdldF9jb2xvciA9IG5ldyBDb2xvcigxMjgsIDEyOCwgMjU1LCAwLjIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogTG9jYXRpb24gb2YgdGhlIHRvb2xcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7VmVjdG9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG5ldyBWZWN0b3IoMCwgMCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyB0aGUgdG9vbCBkb3duIChkcmF3aW5nKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pc19kcmF3aW5nID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudCBlbnRpdHkgYmVpbmcgZHJhd25cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7RW50aXR5IHwgbnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWN0aXZlX2VudGl0eSA9IG51bGw7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZHJhd2luZyA9IGRyYXdpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCdzIHRoZSBsb2NhdGlvbiBvZiB0aGUgdG9vbFxuICAgICAqXG4gICAgICogQHBhcmFtICAge1ZlY3Rvcn0gIGxvY2F0aW9uICBMb2NhdGlvbiBvZiB0aGUgdG9vbFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0TG9jYXRpb24obG9jYXRpb24pIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdGFydCBkcmF3aW5nLCBjcmVhdGUgdGhlIHRvb2wncyBgRW50aXR5YCBhbmRcbiAgICAgKiBzZXRzIGl0IGFzIGFjdGl2ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHN0YXJ0RHJhd2luZyhsb2NhdGlvbikge1xuICAgICAgICB0aGlzLnNldElzRHJhd2luZyh0cnVlKTtcbiAgICAgICAgdGhpcy5hY3RpdmVfZW50aXR5ID0gdGhpcy5nZXRFbnRpdHkodGhpcy5kcmF3aW5nKTtcbiAgICAgICAgdGhpcy5zZXRMb2NhdGlvbihsb2NhdGlvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHNpemUgb2YgdGhlIGJydXNoL2xpbmUvc3Ryb2tlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgc2l6ZSAgU2l6ZSBpbiBwaXhlbHMgb2YgdGhlIHJhZGl1c1xuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0U2l6ZShzaXplKSB7XG4gICAgICAgIGlmIChzaXplID4gMClcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IE1hdGgubWluKHNpemUsIDEwMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0b3BzIGRyYXdpbmcsIGFkZHMgZW5ldGl0eSBjb21wbGV0ZSB0aW1lLCBhZGRzIHRoZVxuICAgICAqIGVudGl0eSB0byB0aGUgZHJhd2luZywgd2hpY2ggd2lsbCBwYXNzIGl0IHRvIHRoZVxuICAgICAqIGFjdGl2ZSBsYXllcmFuZCByZXNldHMgdGhlIGFjdGl2ZSBlbnRpdHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBzdG9wRHJhd2luZygpIHtcbiAgICAgICAgdGhpcy5zZXRJc0RyYXdpbmcoZmFsc2UpO1xuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlX2VudGl0eSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gUnVuIHRoZSBjb21wbGV0aW9uIGZ1bmN0aW9uc1xuICAgICAgICB0aGlzLmFjdGl2ZV9lbnRpdHkuY29tcGxldGUoKTtcbiAgICAgICAgLy8gSWYgbm90IHRoZSBzcGVjaWFsIGVudGl0eVxuICAgICAgICBpZiAodGhpcy5hY3RpdmVfZW50aXR5Lm5hbWUgIT09IFwibnVsbFwiKSB7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGNvbXBsZXRlZCBlbnRpdHkgdG8gdGhlIGRyYXdpbmdcbiAgICAgICAgICAgIHRoaXMuZHJhd2luZy5hZGRFbnRpdHkodGhpcy5hY3RpdmVfZW50aXR5KTtcbiAgICAgICAgICAgIC8vIHJlc2V0IHRoZSBhY3RpdmUgZW50aXR5XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9lbnRpdHkgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGRyYXdpbmcgc3RhdGUgb2YgdGhlIHRvb2xcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtib29sZWFufSAgc3RhdGUgIElzIHRoZSB0b29sIGRyYXdpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHNldElzRHJhd2luZyhzdGF0ZSkge1xuICAgICAgICB0aGlzLmlzX2RyYXdpbmcgPSBzdGF0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHJhdyB0aGUgdG9vbCB0YXJnZXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBDYW52YXMgZHJhd2luZyBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBkcmF3VGFyZ2V0KGNvbnRleHQpIHtcbiAgICAgICAgZHJhd0NpcmNsZShjb250ZXh0LCB0aGlzLmxvY2F0aW9uLCB0aGlzLnRhcmdldF9jb2xvciwgdGhpcy5zaXplKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIERyYXcgYSBjaXJjbGUgb24gdGhlIGNvbnRleHQgZ2l2ZW5cbiAqXG4gKiBAdmFyIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICAgQ2FudmFzIHJlbmRlcmluZyBjb250ZXh0IHRvIGRyYXcgd2l0aFxuICogQHZhciB7VmVjMi5WZWN0b3J9ICAgICAgICAgICAgICAgbG9jYXRpb24gIFdoZXJlIHRvIGRyYXcgdGhlIGNpcmNsZVxuICogQHZhciB7Q29sb3J9ICAgICAgICAgICAgICAgICAgICAgY29sb3IgICAgIENvbG9yIHRvIGRyYXcgd2l0aFxuICogQHZhciB7bnVtYmVyfSAgICAgICAgICAgICAgICAgICAgc2l6ZSAgICAgIERpYW1ldGVyIGluIHBpeGVsc1xuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmF3Q2lyY2xlKGNvbnRleHQsIGxvY2F0aW9uLCBjb2xvciwgc2l6ZSkge1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5hcmMobG9jYXRpb24ueCwgbG9jYXRpb24ueSwgTWF0aC5yb3VuZChzaXplIC8gMiksIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvci5nZXRSZ2JTdHJpbmcoKTtcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yLmdldFJnYlN0cmluZygpO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG59XG4iLCIvKipcbiAqIENvbG91ciBoZWxwZXIsIHVzZWZ1bCBmb3IgY29udmVydGluZyBiZXR3ZWVuIGNvbG91ciBmb3JtYXRzLlxuICogVGhpcyBpcyBwcm9iYWJseSBub3QgcmVhbGx5IG5lZWRlZCBmb3IgdGhlIFRTL0pTIHZlcnNpb24gYnV0IGlzXG4gKiBtb3JlIG9mIGEgaGFuZ292ZXIgZnJvbSB0aGUgRGFydCB2ZXJzaW9uIG9mIHRoZSBnYW1lLiBXYXMgZ29vZFxuICogbGVhcm5pbmcgY29udmVydGluZyBpdCB0byBqYXZhc2NyaXB0L3R5cGVzY3JpcHQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG9yIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgciAgcmVkIFswIC0gMjU1XVxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBnICBncmVlbiBbMCAtIDI1NV1cbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgYiAgYmx1ZSBbMCAtIDI1NV1cbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyP30gIGEgIGFscGhhIFswLjAgLSAxLjBdXG4gICAgICovXG4gICAgY29uc3RydWN0b3IociwgZywgYiwgYSA9IDEuMCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogcmVkXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuciA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBncmVlblxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmcgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogYmx1ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmIgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogYWxwaGFcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hID0gMC4wO1xuICAgICAgICB0aGlzLnIgPSByO1xuICAgICAgICB0aGlzLmcgPSBnO1xuICAgICAgICB0aGlzLmIgPSBiO1xuICAgICAgICB0aGlzLmEgPSBhO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIFJHQiB2YWx1ZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtBcnJheTxudW1iZXI+fVxuICAgICAqL1xuICAgIGdldFJnYigpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzLnIsIHRoaXMuZywgdGhpcy5iXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBSR0IgdmFsdWVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7QXJyYXk8bnVtYmVyPn1cbiAgICAgKi9cbiAgICBnZXRSZ2JhKCkge1xuICAgICAgICByZXR1cm4gW3RoaXMuciwgdGhpcy5nLCB0aGlzLmIsIHRoaXMuYV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgUkdCIHZhbHVlc1xuICAgICAqXG4gICAgICogQHJldHVybiAge0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgZ2V0UmdiU3RyaW5nKHdpdGhBbHBoYSA9IHRydWUpIHtcbiAgICAgICAgaWYgKHdpdGhBbHBoYSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIHJldHVybiBgcmdiYSgke3RoaXMucn0sICR7dGhpcy5nfSwgJHt0aGlzLmJ9LCAke3RoaXMuYX0pYDtcbiAgICAgICAgcmV0dXJuIGByZ2IoJHt0aGlzLnJ9LCAke3RoaXMuZ30sICR7dGhpcy5ifSlgO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYXJyYXkgb2YgSFNMIHZhbHVlc1xuICAgICAqXG4gICAgICogRnJvbTogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9jb252ZXJ0aW5nLWNvbG9yLXNwYWNlcy1pbi1qYXZhc2NyaXB0L1xuICAgICAqXG4gICAgICogQHJldHVybiAge0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgZ2V0SHNsKCkge1xuICAgICAgICAvLyBNYWtlIHIsIGcsIGFuZCBiIGZyYWN0aW9ucyBvZiAxXG4gICAgICAgIGNvbnN0IHIgPSB0aGlzLnIgLyAyNTU7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmcgLyAyNTU7XG4gICAgICAgIGNvbnN0IGIgPSB0aGlzLmIgLyAyNTU7XG4gICAgICAgIC8vIEZpbmQgZ3JlYXRlc3QgYW5kIHNtYWxsZXN0IGNoYW5uZWwgdmFsdWVzXG4gICAgICAgIGxldCBjbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgICAgIGxldCBjbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgICAgIGxldCBkZWx0YSA9IGNtYXggLSBjbWluO1xuICAgICAgICBsZXQgaCA9IDA7XG4gICAgICAgIGxldCBzID0gMDtcbiAgICAgICAgbGV0IGwgPSAwO1xuICAgICAgICAvLyBDYWxjdWxhdGUgaHVlXG4gICAgICAgIC8vIE5vIGRpZmZlcmVuY2VcbiAgICAgICAgaWYgKGRlbHRhID09IDApIHtcbiAgICAgICAgICAgIGggPSAwO1xuICAgICAgICAgICAgLy8gUmVkIGlzIG1heFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNtYXggPT0gcikge1xuICAgICAgICAgICAgaCA9ICgoZyAtIGIpIC8gZGVsdGEpICUgNjtcbiAgICAgICAgICAgIC8vIEdyZWVuIGlzIG1heFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNtYXggPT0gZykge1xuICAgICAgICAgICAgaCA9IChiIC0gcikgLyBkZWx0YSArIDI7XG4gICAgICAgICAgICAvLyBCbHVlIGlzIG1heFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaCA9IChyIC0gZykgLyBkZWx0YSArIDQ7XG4gICAgICAgIH1cbiAgICAgICAgaCA9IE1hdGgucm91bmQoaCAqIDYwKTtcbiAgICAgICAgLy8gTWFrZSBuZWdhdGl2ZSBodWVzIHBvc2l0aXZlIGJlaGluZCAzNjDCsFxuICAgICAgICBpZiAoaCA8IDApIHtcbiAgICAgICAgICAgIGggKz0gMzYwO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhbGN1bGF0ZSBsaWdodG5lc3NcbiAgICAgICAgbCA9IChjbWF4ICsgY21pbikgLyAyO1xuICAgICAgICAvLyBDYWxjdWxhdGUgc2F0dXJhdGlvblxuICAgICAgICBzID0gZGVsdGEgPT0gMCA/IDAgOiBkZWx0YSAvICgxIC0gTWF0aC5hYnMoMiAqIGwgLSAxKSk7XG4gICAgICAgIC8vIE11bHRpcGx5IGwgYW5kIHMgYnkgMTAwXG4gICAgICAgIHMgPSArKHMgKiAxMDApLnRvRml4ZWQoMSk7XG4gICAgICAgIGwgPSArKGwgKiAxMDApLnRvRml4ZWQoMSk7XG4gICAgICAgIHJldHVybiBbaCwgcywgbF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBIRVggdmFsdWUgb2YgY29sb3VyIChpbmxjdWRpbmcgYWxwaGEpXG4gICAgICpcbiAgICAgKiBGcm9tOiBodHRwczovL2Nzcy10cmlja3MuY29tL2NvbnZlcnRpbmctY29sb3Itc3BhY2VzLWluLWphdmFzY3JpcHQvXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldEhleCh3aXRoQWxwaGEgPSB0cnVlKSB7XG4gICAgICAgIGxldCByID0gdGhpcy5yLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgbGV0IGcgPSB0aGlzLmcudG9TdHJpbmcoMTYpO1xuICAgICAgICBsZXQgYiA9IHRoaXMuYi50b1N0cmluZygxNik7XG4gICAgICAgIGxldCBhID0gTWF0aC5yb3VuZCgodGhpcy5hICogMjU1KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICBpZiAoci5sZW5ndGggPT0gMSlcbiAgICAgICAgICAgIHIgPSBcIjBcIiArIHI7XG4gICAgICAgIGlmIChnLmxlbmd0aCA9PSAxKVxuICAgICAgICAgICAgZyA9IFwiMFwiICsgZztcbiAgICAgICAgaWYgKGIubGVuZ3RoID09IDEpXG4gICAgICAgICAgICBiID0gXCIwXCIgKyBiO1xuICAgICAgICBpZiAoYS5sZW5ndGggPT0gMSlcbiAgICAgICAgICAgIGEgPSBcIjBcIiArIGE7XG4gICAgICAgIGlmICghd2l0aEFscGhhKVxuICAgICAgICAgICAgcmV0dXJuIFwiI1wiICsgciArIGcgKyBiO1xuICAgICAgICByZXR1cm4gXCIjXCIgKyByICsgZyArIGIgKyBhO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRlbm9ybWFsaXplIH0gZnJvbSBcIi4vbm9ybWFsaXplXCI7XG5leHBvcnQgZnVuY3Rpb24gZHJhd0d1aWRlKGNvbnRleHQsIHBvcywgdGFyZ2V0KSB7XG4gICAgY29uc3Qgc2l6ZSA9IENvbnN0YW50cy5HVUlERV9TSVpFO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgIGNvbnN0IHN0YXJ0WCA9IHBvcy54IC0gKHNpemUgLyAyKTtcbiAgICBjb25zdCBzdGFydFkgPSBwb3MueSAtIChzaXplIC8gMik7XG4gICAgaWYgKHRhcmdldC54ID4gc3RhcnRYICYmIHRhcmdldC54IDwgKHN0YXJ0WCArIHNpemUpICYmIHRhcmdldC55ID4gc3RhcnRZICYmIHRhcmdldC55IDwgKHN0YXJ0WSArIHNpemUpKSB7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcIiM4ODg4RkZcIjtcbiAgICB9XG4gICAgY29udGV4dC5yZWN0KHN0YXJ0WCwgc3RhcnRZLCBzaXplLCBzaXplKTtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xufVxuO1xuLyoqXG4gKiBEcmF3IGEgYm91bmRpbmcgYm94XG4gKlxuICogQHBhcmFtICAge1ZlY3Rvcn0gICAgICAgICAgICAgICAgICAgIHN0YXJ0ICAgIFtzdGFydCBkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAgIHtWZWN0b3J9ICAgICAgICAgICAgICAgICAgICBlbmQgICAgICBbZW5kIGRlc2NyaXB0aW9uXVxuICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIFtjb250ZXh0IGRlc2NyaXB0aW9uXVxuICpcbiAqIEByZXR1cm4gIHt2b2lkfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICovXG5leHBvcnQgZnVuY3Rpb24gZHJhd0JvdW5kaW5nQm94KHN0YXJ0LCBlbmQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkZW5vcm1fc3RhcnQgPSBkZW5vcm1hbGl6ZShzdGFydCwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7XG4gICAgY29uc3QgZGVub3JtX2VuZCA9IGRlbm9ybWFsaXplKGVuZCwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwiIzg4ODhGRlwiO1xuICAgIGNvbnRleHQucmVjdChkZW5vcm1fc3RhcnQueCwgZGVub3JtX3N0YXJ0LnksIChkZW5vcm1fZW5kLnggLSBkZW5vcm1fc3RhcnQueCksIChkZW5vcm1fZW5kLnkgLSBkZW5vcm1fc3RhcnQueSkpO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlFdmVudHMge1xuICAgIC8qKlxuICAgICAqIFNldCB1cCB0aGUga2V5IGV2ZW50IGhhbmRsZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7RHJhd2luZ30gIGRyYXdpbmcgIE1haW4gZHJhd2luZyBvYmplY3RcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZHJhd2luZykge1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVmZXJlbmNlIHRvIHRoZSBtYWluIGRyYXdpbmcgb2JqZWN0XG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge0RyYXdpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRyYXdpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLmRyYXdpbmcgPSBkcmF3aW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGFsbCB0aGUga2V5IGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtLZXlib2FyZEV2ZW50fSAgZXZlbnQgcmVsYXRlZCB0byB0aGUga2V5IGRvd25cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGhhbmRsZShldmVudCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgaWYgKCF0aGlzLmRyYXdpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2luZy5hZGRMYXllcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlTGF5ZXIoKF9iID0gdGhpcy5kcmF3aW5nLmFjdGl2ZV9sYXllcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmlkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgY2FzZSAnMic6XG4gICAgICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICAgIGNhc2UgJzQnOlxuICAgICAgICAgICAgY2FzZSAnNSc6XG4gICAgICAgICAgICBjYXNlICc2JzpcbiAgICAgICAgICAgICAgICBjb25zdCBwYWxldHRlID0gKF9jID0gdGhpcy5kcmF3aW5nLmh1ZCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmdldEJ5TmFtZSgncGFsZXR0ZScpO1xuICAgICAgICAgICAgICAgIHBhbGV0dGUuc2V0Q29sb3JJbmRleChwYXJzZUludChldmVudC5rZXkpIC0gMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlJzpcbiAgICAgICAgICAgICAgICAvLyBsYXllciB1cFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRyYXdpbmcuYWN0aXZlX2xheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd2luZy5zZXRBY3RpdmVMYXllcih0aGlzLmRyYXdpbmcuZ2V0TmV4dExheWVyKHRoaXMuZHJhd2luZy5hY3RpdmVfbGF5ZXIuaWQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kcmF3aW5nLmFjdGl2ZV9sYXllcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdpbmcuc2V0QWN0aXZlTGF5ZXIodGhpcy5kcmF3aW5nLmdldFByZXZMYXllcih0aGlzLmRyYXdpbmcuYWN0aXZlX2xheWVyLmlkKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAgY29uc3QgaGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVscFwiKTtcbiAgICAgICAgICAgICAgICBoZWxwID09PSBudWxsIHx8IGhlbHAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlbHAuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICBoZWxwID09PSBudWxsIHx8IGhlbHAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlbHAuY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcbi8qKlxuICogTm9ybWFsaXplIGEgdmVjdG9yLiBUYWtlcyBhIHZlY3RvciBhbmQgYSBzb3VyY2Ugd2lkdGggYW5kIGhlaWdodFxuICogdGhlbiBub3JtYWxpemVzIGl0IHRvIGZhbGwgd2l0aGluIHRoZSByYW5nZSBvZiAwLjAgLSAxLjAgcmVsYXRpdmVcbiAqIHRvIHRoZSBzb3VyY2UncyB3aXRoIGFuZCBoZWlnaHQuIEVmZmVjdGl2ZWx5IGJlY29taW5nIGEgcGVyY2VudGFnZVxuICogb2YgdGhlIHRhcmdldCwgaW5zdGVhZCBvZiBleGFjdCB2YWx1ZXMuXG4gKlxuICogQHBhcmFtICAge1ZlY3Rvcn0gIHZlY3RvciAgICAgICAgICAgIFRoZSB2ZWN0b3IgdG8gbm9ybWFsaXplXG4gKiBAcGFyYW0gICB7bnVtYmVyfSAgc291cmNlX3dpZHRoICAgICAgVGhlIHNvdXJjZSB3aWR0aFxuICogQHBhcmFtICAge251bWJlcn0gIHNvdXJjZV9oZWlnaHQgICAgIFRoZSBzb3VyY2UgaGVpZ2h0XG4gKlxuICogQHJldHVybiAge1ZlY3Rvcn0gICAgICAgICAgICAgICAgICAgIE5vcm1hbGl6ZWQgdmVjdG9yIGNvbnRhaW5pbmcgeHkgdmFsdWVzIGJldHdlZW4gMC4wIGFuZCAxLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZSh2ZWN0b3IsIHNvdXJjZV93aWR0aCwgc291cmNlX2hlaWdodCkge1xuICAgIHJldHVybiBuZXcgVmVjdG9yKCgoMTAwLiAvIHNvdXJjZV93aWR0aCkgKiB2ZWN0b3IueCkgLyAxMDAuLCAoKDEwMC4gLyBzb3VyY2VfaGVpZ2h0KSAqIHZlY3Rvci55KSAvIDEwMC4pO1xufVxuLyoqXG4gKiBUYWtlcyBhIG5vcm1hbGl6ZWQgdmVjdG9yICh4eSB3aXRoIHZhbHVlcyAwLjAgLSAxLjApIGFuZCBtYXBzIGl0XG4gKiB0byB0aGUgdGFyZ2V0cyBkaW1lbnRpb25zIChpZSBwaXhlbCB2YWx1ZXMpXG4gKlxuICogQHBhcmFtICAge1ZlY3Rvcn0gIG5vcm1hbGl6ZWRfdmVjdG9yICAgVGhlIHZlY3RvciB0byBkZW5vbWFsaXplXG4gKiBAcGFyYW0gICB7bnVtYmVyfSAgdGFyZ2V0X3dpZHRoICAgICAgICBUaGUgdGFyZ2V0IHdpZHRoXG4gKiBAcGFyYW0gICB7bnVtYmVyfSAgdGFyZ2V0X2hlaWdodCAgICAgICBUaGUgdGFyZ2V0IGhlaWdodFxuICpcbiAqIEByZXR1cm4gIHtWZWN0b3J9ICAgICAgICAgICAgICAgICAgICAgIEEgZGVub21hbGl6ZWQgdmVjdG9yIGNvbmFpbmluZyB4eSB2YWx1ZXMgYmV0d2VlbiAwIGFuZCB0YXJnZXRfd2lkdGgvaGVpZ2h0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZW5vcm1hbGl6ZShub3JtYWxpemVkX3ZlY3RvciwgdGFyZ2V0X3dpZHRoLCB0YXJnZXRfaGVpZ2h0KSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3Iobm9ybWFsaXplZF92ZWN0b3IueCAqIHRhcmdldF93aWR0aCwgbm9ybWFsaXplZF92ZWN0b3IueSAqIHRhcmdldF9oZWlnaHQpO1xufVxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XG4vKipcbiAqIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2dkZW5pc292L2NhcmRpbmFsLXNwbGluZS1qcy9ibG9iL21hc3Rlci9zcmMvY3VydmVfY2FsYy5qc1xuICpcbiAqIENhbGN1bGF0ZXMgYW4gYXJyYXkgY29udGFpbmluZyBwb2ludHMgcmVwcmVzZW50aW5nIGEgY2FyZGluYWwgc3BsaW5lIHRocm91Z2ggZ2l2ZW4gcG9pbnQgYXJyYXkuXG4gKiBQb2ludHMgbXVzdCBiZSBhcnJhbmdlZCBhczogW3gxLCB5MSwgeDIsIHkyLCAuLi4sIHhuLCB5bl0uXG4gKlxuICogVGhlIHBvaW50cyBmb3IgdGhlIGNhcmRpbmFsIHNwbGluZSBhcmUgcmV0dXJuZWQgYXMgYSBuZXcgYXJyYXkuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcG9pbnRzIC0gcG9pbnQgYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbdGVuc2lvbj0wLjVdIC0gdGVuc2lvbi4gVHlwaWNhbGx5IGJldHdlZW4gWzAuMCwgMS4wXSBidXQgY2FuIGJlIGV4Y2VlZGVkXG4gKiBAcGFyYW0ge051bWJlcn0gW251bU9mU2VnPTIwXSAtIG51bWJlciBvZiBzZWdtZW50cyBiZXR3ZWVuIHR3byBwb2ludHMgKGxpbmUgcmVzb2x1dGlvbilcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2Nsb3NlPWZhbHNlXSAtIENsb3NlIHRoZSBlbmRzIG1ha2luZyB0aGUgbGluZSBjb250aW51b3VzXG4gKiBAcmV0dXJucyB7RmxvYXQzMkFycmF5fSBOZXcgYXJyYXkgd2l0aCB0aGUgY2FsY3VsYXRlZCBwb2ludHMgdGhhdCB3YXMgYWRkZWQgdG8gdGhlIHBhdGhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnZlUG9pbnRzKHBvaW50cywgdGVuc2lvbiA9IDAuNywgbnVtT2ZTZWcgPSAxLCBjbG9zZSA9IGZhbHNlKSB7XG4gICAgdmFyIHB0cywgLy8gZm9yIGNsb25pbmcgcG9pbnQgYXJyYXlcbiAgICBpID0gMSwgbCA9IHBvaW50cy5sZW5ndGgsIHJQb3MgPSAwLCByTGVuID0gKGwgLSAyKSAqIG51bU9mU2VnICsgMiArIChjbG9zZSA/IDIgKiBudW1PZlNlZyA6IDApLCByZXMgPSBuZXcgRmxvYXQzMkFycmF5KHJMZW4pLCBjYWNoZSA9IG5ldyBGbG9hdDMyQXJyYXkoKG51bU9mU2VnICsgMikgKiA0KSwgY2FjaGVQdHIgPSA0O1xuICAgIGNvbnN0IHBhcnNlID0gKHB0cywgY2FjaGUsIGwpID0+IHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDIsIHQ7IGkgPCBsOyBpICs9IDIpIHtcbiAgICAgICAgICAgIHZhciBwdDEgPSBwdHNbaV0sIHB0MiA9IHB0c1tpICsgMV0sIHB0MyA9IHB0c1tpICsgMl0sIHB0NCA9IHB0c1tpICsgM10sIHQxeCA9IChwdDMgLSBwdHNbaSAtIDJdKSAqIHRlbnNpb24sIHQxeSA9IChwdDQgLSBwdHNbaSAtIDFdKSAqIHRlbnNpb24sIHQyeCA9IChwdHNbaSArIDRdIC0gcHQxKSAqIHRlbnNpb24sIHQyeSA9IChwdHNbaSArIDVdIC0gcHQyKSAqIHRlbnNpb247XG4gICAgICAgICAgICBmb3IgKHQgPSAwOyB0IDwgbnVtT2ZTZWc7IHQrKykge1xuICAgICAgICAgICAgICAgIHZhciBjID0gdCA8PCAyLCAvL3QgKiA0O1xuICAgICAgICAgICAgICAgIGMxID0gY2FjaGVbY10sIGMyID0gY2FjaGVbYyArIDFdLCBjMyA9IGNhY2hlW2MgKyAyXSwgYzQgPSBjYWNoZVtjICsgM107XG4gICAgICAgICAgICAgICAgcmVzW3JQb3MrK10gPSBjMSAqIHB0MSArIGMyICogcHQzICsgYzMgKiB0MXggKyBjNCAqIHQyeDtcbiAgICAgICAgICAgICAgICByZXNbclBvcysrXSA9IGMxICogcHQyICsgYzIgKiBwdDQgKyBjMyAqIHQxeSArIGM0ICogdDJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBwdHMgPSBwb2ludHMuc2xpY2UoMCk7XG4gICAgaWYgKGNsb3NlKSB7XG4gICAgICAgIHB0cy51bnNoaWZ0KHBvaW50c1tsIC0gMV0pOyAvLyBpbnNlcnQgZW5kIHBvaW50IGFzIGZpcnN0IHBvaW50XG4gICAgICAgIHB0cy51bnNoaWZ0KHBvaW50c1tsIC0gMl0pO1xuICAgICAgICBwdHMucHVzaChwb2ludHNbMF0sIHBvaW50c1sxXSk7IC8vIGZpcnN0IHBvaW50IGFzIGxhc3QgcG9pbnRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHB0cy51bnNoaWZ0KHBvaW50c1sxXSk7IC8vIGNvcHkgMS4gcG9pbnQgYW5kIGluc2VydCBhdCBiZWdpbm5pbmdcbiAgICAgICAgcHRzLnVuc2hpZnQocG9pbnRzWzBdKTtcbiAgICAgICAgcHRzLnB1c2gocG9pbnRzW2wgLSAyXSwgcG9pbnRzW2wgLSAxXSk7IC8vIGR1cGxpY2F0ZSBlbmQtcG9pbnRzXG4gICAgfVxuICAgIC8vIGNhY2hlIGlubmVyLWxvb3AgY2FsY3VsYXRpb25zIGFzIHRoZXkgYXJlIGJhc2VkIG9uIHQgYWxvbmVcbiAgICBjYWNoZVswXSA9IDE7IC8vIDEsMCwwLDBcbiAgICBmb3IgKDsgaSA8IG51bU9mU2VnOyBpKyspIHtcbiAgICAgICAgdmFyIHN0ID0gaSAvIG51bU9mU2VnLCBzdDIgPSBzdCAqIHN0LCBzdDMgPSBzdDIgKiBzdCwgc3QyMyA9IHN0MyAqIDIsIHN0MzIgPSBzdDIgKiAzO1xuICAgICAgICBjYWNoZVtjYWNoZVB0cisrXSA9IHN0MjMgLSBzdDMyICsgMTsgLy8gYzFcbiAgICAgICAgY2FjaGVbY2FjaGVQdHIrK10gPSBzdDMyIC0gc3QyMzsgLy8gYzJcbiAgICAgICAgY2FjaGVbY2FjaGVQdHIrK10gPSBzdDMgLSAyICogc3QyICsgc3Q7IC8vIGMzXG4gICAgICAgIGNhY2hlW2NhY2hlUHRyKytdID0gc3QzIC0gc3QyOyAvLyBjNFxuICAgIH1cbiAgICBjYWNoZVsrK2NhY2hlUHRyXSA9IDE7IC8vIDAsMSwwLDBcbiAgICAvLyBjYWxjLiBwb2ludHNcbiAgICBwYXJzZShwdHMsIGNhY2hlLCBsKTtcbiAgICBpZiAoY2xvc2UpIHtcbiAgICAgICAgLy9sID0gcG9pbnRzLmxlbmd0aDtcbiAgICAgICAgcHRzID0gW107XG4gICAgICAgIHB0cy5wdXNoKHBvaW50c1tsIC0gNF0sIHBvaW50c1tsIC0gM10sIHBvaW50c1tsIC0gMl0sIHBvaW50c1tsIC0gMV0pOyAvLyBzZWNvbmQgbGFzdCBhbmQgbGFzdFxuICAgICAgICBwdHMucHVzaChwb2ludHNbMF0sIHBvaW50c1sxXSwgcG9pbnRzWzJdLCBwb2ludHNbM10pOyAvLyBmaXJzdCBhbmQgc2Vjb25kXG4gICAgICAgIHBhcnNlKHB0cywgY2FjaGUsIDQpO1xuICAgIH1cbiAgICAvLyBhZGQgbGFzdCBwb2ludFxuICAgIGwgPSBjbG9zZSA/IDAgOiBwb2ludHMubGVuZ3RoIC0gMjtcbiAgICByZXNbclBvcysrXSA9IHBvaW50c1tsXTtcbiAgICByZXNbclBvc10gPSBwb2ludHNbbCArIDFdO1xuICAgIHJldHVybiByZXM7XG59XG4vKipcbiAqIEZsYXR0ZW4gYW4gYXJyYXkgb2YgdmVjdG9ycyB0byBhIGZsYXQgYXJyYXkgb2YgcG9pbnRzXG4gKiBpbiB0aGUgZm9ybWF0IFt4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLCB4TiwgeU5dXG4gKlxuICogQHBhcmFtICAge0FycmF5PFZlY3Rvcj59ICAgcG9pbnRzICBQb2ludHMgYXJyYXkgdG8gZmxhdHRlblxuICpcbiAqIEByZXR1cm4gIHtBcnJheTxudW1iZXI+fSAgIEZsYXQgYXJyYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW5Qb2ludHMocG9pbnRzKSB7XG4gICAgY29uc3QgZmxhdHRlbmVkX2FycmF5ID0gW107XG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAobGV0IHBvaW50IG9mIHBvaW50cykge1xuICAgICAgICBmbGF0dGVuZWRfYXJyYXlbaV0gPSBwb2ludC54O1xuICAgICAgICBmbGF0dGVuZWRfYXJyYXlbaSArIDFdID0gcG9pbnQueTtcbiAgICAgICAgaSA9IGkgKyAyO1xuICAgIH1cbiAgICByZXR1cm4gZmxhdHRlbmVkX2FycmF5O1xufVxuLyoqXG4gKiBUYWtlcyBhIEZsb2F0MzJBcnJheSBmbGF0IHBvaW50cyBhcnJheSBbeDAsIHkwLCB4MSwgeTEsIHhOLCB5Tl1cbiAqIGFuZCBjb252ZXJ0cyBpdCB0byBhbiBhcnJheSBvdiB2ZWN0b3JzXG4gKlxuICogQHBhcmFtICAge0Zsb2F0MzJBcnJheX0gIGZsYXRfcG9pbnRzXG4gKlxuICogQHJldHVybiAge0FycmF5PFZlY3Rvcj59ICBBcnJheSBvdiBWZWN0b3IgcG9pbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRQb2ludHMoZmxhdF9wb2ludHMpIHtcbiAgICBjb25zdCBwb2ludHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZsYXRfcG9pbnRzLmxlbmd0aDsgaSA9IGkgKyAyKSB7XG4gICAgICAgIHBvaW50cy5wdXNoKG5ldyBWZWN0b3IoZmxhdF9wb2ludHNbaV0sIGZsYXRfcG9pbnRzW2kgKyAxXSkpO1xuICAgIH1cbiAgICByZXR1cm4gcG9pbnRzO1xufVxuLyoqXG4gKiBTaW1wbGlmaWVzIGFuIGFycmF5IG9mIHZlY3RvcnNcbiAqXG4gKiBAcGFyYW0gICB7QXJyYXk8VmVjdG9yPn0gICAgIHBvaW50cyAgUG9pbnRzIGFycmF5IHRvIHNpbXBsaWZ5XG4gKiBAcGFyYW0gICB7bnVtYmVyP30gICAgICAgICAgIGZhY3RvciAgSG93IG11Y2ggdG8gc2ltcGxpZnlcbiAqXG4gKiBAcmV0dXJuICB7QXJyYXk8VmVjdG9yPn0gU2ltcGxpZmllZCBhcnJheVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2ltcGxpZnkocG9pbnRzLCBmYWN0b3IgPSAyKSB7XG4gICAgY29uc3Qgc2ltcGxpZmllZF9wb2ludHMgPSBbXTtcbiAgICAvLyBBZGQgdGhlIGZpcnN0IHBvaW50XG4gICAgc2ltcGxpZmllZF9wb2ludHMucHVzaChwb2ludHNbMF0pO1xuICAgIGZvciAobGV0IGkgPSBmYWN0b3I7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSA9IGkgKyBmYWN0b3IpIHtcbiAgICAgICAgc2ltcGxpZmllZF9wb2ludHMucHVzaChwb2ludHNbaV0pO1xuICAgIH1cbiAgICBzaW1wbGlmaWVkX3BvaW50cy5wdXNoKHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV0pO1xuICAgIHJldHVybiBzaW1wbGlmaWVkX3BvaW50cztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUaGVzZSB2YWx1ZXMgYXJlIHVzZWQgYnkgdGhlIGBBYnN0cmFjdFZlY3Rvci5yb3VuZGAgbWV0aG9kIHRvIGluY3JlYXNlXG4gKiBwZXJmb3JtYW5jZSB2cy4gdXNpbmcgIE51bWJlci50b0ZpeGVkLlxuICovXG52YXIgcHJlY2lzaW9uID0gW1xuICAgIDEsXG4gICAgMTAsXG4gICAgMTAwLFxuICAgIDEwMDAsXG4gICAgMTAwMDAsXG4gICAgMTAwMDAwLFxuICAgIDEwMDAwMDAsXG4gICAgMTAwMDAwMDAsXG4gICAgMTAwMDAwMDAwLFxuICAgIDEwMDAwMDAwMDAsXG4gICAgMTAwMDAwMDAwMDBcbl07XG4vKipcbiAqIFRoZSBjbGFzcyB0aGF0IGFsbCBvdGhlciB2ZWN0b3IgcmVwcmVzZW50YXRpb25zIGFyZSBkZXJpdmVkIGZyb20uXG4gKlxuICogQ29udGFpbnMgdGhlIGNvcmUgaW1wbGVtZW50YXRpb24gZm9yIGFsbCBtZXRob2RzIHRoYXQgd2lsbCBiZSBleHBvc2VkIGJ5XG4gKiB2ZWN0b3IgaW5zdGFuY2VzLlxuICpcbiAqIEV4YW1wbGUgb2YgY3JlYXRpbmcgYSBjdXN0b20gaW1wbGVtZW50YXRpb246XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IEFic3RyYWN0VmVjdG9yIH0gZnJvbSBcIi4vQWJzdHJhY3RWZWN0b3JcIlxuICpcbiAqIGV4cG9ydCBjbGFzcyBNeUN1c3RvbVZlY3RvciBleHRlbmRzIEFic3RyYWN0VmVjdG9yIHtcbiAqICBjb25zdHJ1Y3RvciAoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAqICAgIHN1cGVyKEN1c3RvbVZlY3RvclR5cGUpXG4gKiAgfVxuICogfVxuICogYGBgXG4gKi9cbnZhciBBYnN0cmFjdFZlY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBYnN0cmFjdFZlY3RvcihjdG9yKSB7XG4gICAgICAgIHRoaXMuY3RvciA9IGN0b3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCBib3RoIHggYW5kIHkgYXhpcyB2YWx1ZVxuICAgICAqIEBwYXJhbSB4ICAgTmV3IHggdmFsXG4gICAgICogQHBhcmFtIHkgICBOZXcgeSB2YWxcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuc2V0QXhlcyA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0dGVyIGZvciB4IHRoZSBheGlzIHZhbHVlXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLng7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgZm9yIHggYXhpcyB2YWx1ZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXR0ZXIgZm9yIHkgYXhpcyB2YWx1ZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy55O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0dGVyIGZvciB5IGF4aXMuXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnNldFkgPSBmdW5jdGlvbiAoeSkge1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgdmVjdG9yIGFzIGEgZm9ybWF0dGVkIHN0cmluZywgZS5nIFwiKDAsIDQpXCJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAocm91bmQpIHtcbiAgICAgICAgaWYgKHJvdW5kID09PSB2b2lkIDApIHsgcm91bmQgPSBmYWxzZTsgfVxuICAgICAgICBpZiAocm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIihcIiArIE1hdGgucm91bmQodGhpcy54KSArIFwiLCBcIiArIE1hdGgucm91bmQodGhpcy55KSArIFwiKVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIihcIiArIHRoaXMueCArIFwiLCBcIiArIHRoaXMueSArIFwiKVwiO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIEFycmF5IGNvbnRhaW5pbmcgdGhlIHZlY3RvciBheGVzLCBlLmcgWzAsIDRdXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIE9iamVjdCBjb250YWluaW5nIHRoZSB2ZWN0b3IgYXhlcywgZS5nIHsgeDogMCwgeTogNCB9XG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgeTogdGhpcy55XG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIHByb3ZpZGVkIHZlY3RvciB0byB0aGlzIG9uZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ICs9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0IHRoZSBwcm92aWRlZCB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIHByb3ZpZGVkIHZlY3RvciBlcXVhbCB0byB0aGlzIG9uZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHJldHVybiB2ZWMueCA9PT0gdGhpcy54ICYmIHZlYy55ID09PSB0aGlzLnk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm11bHRpcGx5QnlWZWN0b3IgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHRoaXMueCAqPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ICo9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubXVsViA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHlCeVZlY3Rvcih2ZWMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGl2aWRlIHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGl2aWRlQnlWZWN0b3IgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHRoaXMueCAvPSB2ZWMueDtcbiAgICAgICAgdGhpcy55IC89IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpdmlkZSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRpdlYgPSBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGVCeVZlY3Rvcih2KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCBudW1iZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubXVsdGlwbHlCeVNjYWxhciA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHRoaXMueCAqPSBuO1xuICAgICAgICB0aGlzLnkgKj0gbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgbnVtYmVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm11bFMgPSBmdW5jdGlvbiAobikge1xuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseUJ5U2NhbGFyKG4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGl2aXZlIHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCBudW1iZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGl2aWRlQnlTY2FsYXIgPSBmdW5jdGlvbiAobikge1xuICAgICAgICB0aGlzLnggLz0gbjtcbiAgICAgICAgdGhpcy55IC89IG47XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGl2aXZlIHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCBudW1iZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGl2UyA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpdmlkZUJ5U2NhbGFyKG4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTm9ybWFsaXNlIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm5vcm1hbGlzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGl2aWRlQnlTY2FsYXIodGhpcy5tYWduaXR1ZGUoKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGb3IgQW1lcmljYW4gc3BlbGxpbmcuIFNhbWUgYXMgdW5pdC9ub3JtYWxpc2UgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubm9ybWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpc2UoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBzYW1lIGFzIG5vcm1hbGlzZSBhbmQgbm9ybWFsaXplXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnVuaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGlzZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWFnbml0dWRlIChsZW5ndGgpIG9mIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm1hZ25pdHVkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHggPSB0aGlzLng7XG4gICAgICAgIHZhciB5ID0gdGhpcy55O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWFnbml0dWRlIChsZW5ndGgpIG9mIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFnbml0dWRlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzcXVyZWQgbGVuZ3RoIG9mIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmxlbmd0aFNxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgeCA9IHRoaXMueDtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnk7XG4gICAgICAgIHJldHVybiB4ICogeCArIHkgKiB5O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZG90IHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYnkgYW5vdGhlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kb3QgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHJldHVybiB2ZWMueCAqIHRoaXMueCArIHZlYy55ICogdGhpcy55O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBieSBhbm90aGVyLlxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5jcm9zcyA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHZlYy55IC0gdGhpcy55ICogdmVjLng7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXZlcnNlcyB0aGlzIHZlY3RvciBpLmUgbXVsdGlwbGllcyBpdCBieSAtMVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnggPSAtdGhpcy54O1xuICAgICAgICB0aGlzLnkgPSAtdGhpcy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgdmVjdG9yIGF4ZXMgdmFsdWVzIHRvIGFic29sdXRlIHZhbHVlc1xuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5hYnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMueCA9IE1hdGguYWJzKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGguYWJzKHRoaXMueSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogWmVyb2VzIHRoZSB2ZWN0b3IgaS5lIHNldHMgYWxsIGF4ZXMgdG8gMFxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS56ZXJvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGlzdGFuY2UgPSBmdW5jdGlvbiAodikge1xuICAgICAgICB2YXIgeCA9IHRoaXMueCAtIHYueDtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnkgLSB2Lnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIHRoZSB2ZXRvciBieSBwcm92aWRlZCByYWRpYW5zXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnJvdGF0ZSA9IGZ1bmN0aW9uIChyYWRzKSB7XG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyYWRzKTtcbiAgICAgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZHMpO1xuICAgICAgICB2YXIgb3ggPSB0aGlzLng7XG4gICAgICAgIHZhciBveSA9IHRoaXMueTtcbiAgICAgICAgdGhpcy54ID0gb3ggKiBjb3MgLSBveSAqIHNpbjtcbiAgICAgICAgdGhpcy55ID0gb3ggKiBzaW4gKyBveSAqIGNvcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSb3VuZHMgdGhpcyB2ZWN0b3IgdG8gbiBkZWNpbWFsIHBsYWNlc1xuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5yb3VuZCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIGlmIChuID09PSB2b2lkIDApIHsgbiA9IDI7IH1cbiAgICAgICAgdmFyIHAgPSBwcmVjaXNpb25bbl07XG4gICAgICAgIC8vIFRoaXMgcGVyZm9ybXMgd2FhYXkgYmV0dGVyIHRoYW4gdG9GaXhlZCBhbmQgZ2l2ZSBGbG9hdDMyIHRoZSBlZGdlIGFnYWluLlxuICAgICAgICAvLyBodHRwOi8vd3d3LmR5bmFtaWNndXJ1LmNvbS9qYXZhc2NyaXB0L3JvdW5kLW51bWJlcnMtd2l0aC1wcmVjaXNpb24vXG4gICAgICAgIHRoaXMueCA9ICgoMC41ICsgdGhpcy54ICogcCkgPDwgMCkgLyBwO1xuICAgICAgICB0aGlzLnkgPSAoKDAuNSArIHRoaXMueSAqIHApIDw8IDApIC8gcDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgY29weSBvZiB0aGlzIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmN0b3IodGhpcy54LCB0aGlzLnkpO1xuICAgIH07XG4gICAgcmV0dXJuIEFic3RyYWN0VmVjdG9yO1xufSgpKTtcbmV4cG9ydHMuQWJzdHJhY3RWZWN0b3IgPSBBYnN0cmFjdFZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFic3RyYWN0VmVjdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQWJzdHJhY3RWZWN0b3JfMSA9IHJlcXVpcmUoXCIuL0Fic3RyYWN0VmVjdG9yXCIpO1xuLyoqXG4gKiBBIHZlY3RvciByZXByZXNlbnRhdGlvbiB0aGF0IHN0b3JlcyB0aGUgYXhlcyBpbiBhbiBBcnJheVxuICpcbiAqIGBgYFxuICogY29uc3QgdiA9IG5ldyBWZWMyRC5BcnJheVZlY3RvcigyLCA1KVxuICogYGBgXG4gKi9cbnZhciBBcnJheVZlY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXJyYXlWZWN0b3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXJyYXlWZWN0b3IoeCwgeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBBcnJheVZlY3RvcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYXhlcyA9IFt4LCB5XTtcbiAgICAgICAgX3RoaXMuY3RvciA9IEFycmF5VmVjdG9yO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheVZlY3Rvci5wcm90b3R5cGUsIFwieFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXhlc1swXTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgdGhpcy5heGVzWzBdID0geDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5VmVjdG9yLnByb3RvdHlwZSwgXCJ5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5heGVzWzFdO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh5KSB7XG4gICAgICAgICAgICB0aGlzLmF4ZXNbMV0gPSB5O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQXJyYXlWZWN0b3I7XG59KEFic3RyYWN0VmVjdG9yXzEuQWJzdHJhY3RWZWN0b3IpKTtcbmV4cG9ydHMuQXJyYXlWZWN0b3IgPSBBcnJheVZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFycmF5VmVjdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQWJzdHJhY3RWZWN0b3JfMSA9IHJlcXVpcmUoXCIuL0Fic3RyYWN0VmVjdG9yXCIpO1xuLyoqXG4gKiBBIHZlY3RvciByZXByZXNlbnRhdGlvbiB0aGF0IHN0b3JlcyB0aGUgYXhlcyBpbiBhIEZsb2F0MzJBcnJheVxuICpcbiAqIGBgYFxuICogY29uc3QgdiA9IG5ldyBWZWMyRC5GbG9hdDMyVmVjdG9yKDIsIDUpXG4gKiBgYGBcbiAqL1xudmFyIEZsb2F0MzJWZWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZsb2F0MzJWZWN0b3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmxvYXQzMlZlY3Rvcih4LCB5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIEZsb2F0MzJWZWN0b3IpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmF4ZXMgPSBuZXcgRmxvYXQzMkFycmF5KDIpO1xuICAgICAgICBfdGhpcy5heGVzWzBdID0geDtcbiAgICAgICAgX3RoaXMuYXhlc1sxXSA9IHk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZsb2F0MzJWZWN0b3IucHJvdG90eXBlLCBcInhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF4ZXNbMF07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHRoaXMuYXhlc1swXSA9IHg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGbG9hdDMyVmVjdG9yLnByb3RvdHlwZSwgXCJ5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5heGVzWzFdO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh5KSB7XG4gICAgICAgICAgICB0aGlzLmF4ZXNbMV0gPSB5O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gRmxvYXQzMlZlY3Rvcjtcbn0oQWJzdHJhY3RWZWN0b3JfMS5BYnN0cmFjdFZlY3RvcikpO1xuZXhwb3J0cy5GbG9hdDMyVmVjdG9yID0gRmxvYXQzMlZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZsb2F0MzJWZWN0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQocmVxdWlyZShcIi4vQWJzdHJhY3RWZWN0b3JcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vQXJyYXlWZWN0b3JcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vRmxvYXQzMlZlY3RvclwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9WZWN0b3JcIikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VmVjMkQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBYnN0cmFjdFZlY3Rvcl8xID0gcmVxdWlyZShcIi4vQWJzdHJhY3RWZWN0b3JcIik7XG4vKipcbiAqIEEgdmVjdG9yIHJlcHJlc2VudGF0aW9uIHRoYXQgc3RvcmVzIHRoZSBheGVzIGFzIHBhcnQgb2YgdGhlIGluc3RhbmNlIGl0c2VsZlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCB2ID0gbmV3IFZlYzJELlZlY3RvcigyLCA1KVxuICogYGBgXG4gKi9cbnZhciBWZWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZlY3RvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBWZWN0b3IoeCwgeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBWZWN0b3IpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl94ID0geDtcbiAgICAgICAgX3RoaXMuX3kgPSB5O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IucHJvdG90eXBlLCBcInhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl94O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICB0aGlzLl94ID0geDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3Rvci5wcm90b3R5cGUsIFwieVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3k7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgICAgIHRoaXMuX3kgPSB5O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gVmVjdG9yO1xufShBYnN0cmFjdFZlY3Rvcl8xLkFic3RyYWN0VmVjdG9yKSk7XG5leHBvcnRzLlZlY3RvciA9IFZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZlY3Rvci5qcy5tYXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3Njc3Mvc3R5bGVzLnNjc3NcIjtcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG4vKipcbiAqIFF1ZXJ5IHNlbGVjdG9yIHN0cmluZ1xuICogZm9yIHRoZSBjYW52YXMgdGFyZ2V0XG4gKi9cbmNvbnN0IHRhcmdldCA9IGAjJHtDb25zdGFudHMuQ0FOVkFTX1RBUkdFVH1gO1xuLyoqXG4gKiBBcHAgZW50cnkgcG9pbnQuIFN0YXJ0IGhlcmUuXG4gKi9cbigoKSA9PiB7XG4gICAgLy8gVGhpcyBpcyBvdXIgdGFyZ2V0IGNhbnZhc1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgICBpZiAoY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgLy8gVXNpbmcgdGhlIDJEIGNvbnRleHRcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBpZiAoY29udGV4dCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBDcmVhdGUgYXBwbGljYXRpb24gb2JqZWN0LlxuICAgICAgICBjb25zdCBhcHAgPSBuZXcgQXBwKGNhbnZhcywgY29udGV4dCk7XG4gICAgICAgIC8vIERlZmluZSBhbmltYXRpb24gbG9vcCBhbmQgcHJvY2Vzcy5cbiAgICAgICAgY29uc3QgYW5pbWF0aW9uTG9vcCA9ICh0aW1lc3RhbXApID0+IHtcbiAgICAgICAgICAgIC8vIEV2ZXJ5dGhpbmcgZ2V0cyBkb25lIGhlcmUuXG4gICAgICAgICAgICBhcHAucHJvY2Vzcyh0aW1lc3RhbXApO1xuICAgICAgICAgICAgLy8gS2VlcCByZXF1ZXN0aW5nIG5ldyBmcmFtZXNcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uTG9vcCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEJvb3RzdHJhcCBhbnkgc2V0dXAgc3R1ZmZcbiAgICAgICAgYXBwLnNldFVwKCk7XG4gICAgICAgIC8vIFN0YXJ0IHRoZSByZW5kZXJsb29wLlxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkxvb3ApO1xuICAgIH1cbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=