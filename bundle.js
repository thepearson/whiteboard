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
                (_b = (_a = this.drawing) === null || _a === void 0 ? void 0 : _a.tool) === null || _b === void 0 ? void 0 : _b.startDrawing();
            });
            // Listen for mousewheel, and resize the tool depending on direction.
            this.mouse_wheel = this.canvas.addEventListener("wheel", (event) => {
                var _a, _b, _c, _d, _e, _f;
                if (event.deltaY > 0) {
                    (_b = (_a = this.drawing) === null || _a === void 0 ? void 0 : _a.tool) === null || _b === void 0 ? void 0 : _b.setSize(((_c = this.drawing) === null || _c === void 0 ? void 0 : _c.tool.size) - 2);
                }
                else {
                    (_e = (_d = this.drawing) === null || _d === void 0 ? void 0 : _d.tool) === null || _e === void 0 ? void 0 : _e.setSize(((_f = this.drawing) === null || _f === void 0 ? void 0 : _f.tool.size) + 2);
                }
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
        this.show_debug = false;
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
        context.fillStyle = '#dddddd55';
        context.fillRect(_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width - 75, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height - 100, 75, 100);
        context.font = '11px Arial';
        context.fillStyle = 'black';
        context.fillText("FPS: " + this.fps, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width - 70, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height - 85);
        context.fillText("LAYERS: " + this.layers.size, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width - 70, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height - 70);
        context.fillText("ENT: " + this.countEntities(), _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width - 70, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height - 55);
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
        var _a, _b, _c, _d;
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
        if (((_c = this.tool) === null || _c === void 0 ? void 0 : _c.name) === 'select' && this.active_layer) {
            for (let [key, entity] of (_d = this.active_layer) === null || _d === void 0 ? void 0 : _d.entities) {
                entity.drawGuides(context);
            }
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _util_points__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/points */ "./src/util/points.ts");
/* harmony import */ var _util_normalize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/normalize */ "./src/util/normalize.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity */ "./src/entities/entity.ts");




class Freehand extends _entity__WEBPACK_IMPORTED_MODULE_3__["default"] {
    /**
     * @param   {number}  size   Size of the entity
     * @param   {Color}   color  Color of the entity
     */
    constructor(size, color) {
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
        const simplified = (0,_util_points__WEBPACK_IMPORTED_MODULE_1__.simplify)(this.points);
        const flat = (0,_util_points__WEBPACK_IMPORTED_MODULE_1__.flattenPoints)(simplified);
        const curved = (0,_util_points__WEBPACK_IMPORTED_MODULE_1__.getCurvePoints)(flat);
        this.points = (0,_util_points__WEBPACK_IMPORTED_MODULE_1__.expandPoints)(curved);
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
        // If there's nothing to draw, shorcircuit.
        if (this.points.length < 1)
            return;
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
        // We denormalize the points, based on the canvas size and scale.
        const initialPoint = (0,_util_normalize__WEBPACK_IMPORTED_MODULE_2__.denormalize)(this.points[0], context.canvas.width, context.canvas.height);
        // Move the turtle to this.points[0]
        context.moveTo(initialPoint.x, initialPoint.y);
        // Start at the second point `this.points[1]`
        for (var i = 1; i < this.points.length; i++) {
            // Denmormalise current point to pixel values
            const denormalized = (0,_util_normalize__WEBPACK_IMPORTED_MODULE_2__.denormalize)(this.points[i], context.canvas.width, context.canvas.height);
            // Draw a line to the second point this.points[1] 
            // and continue to the next one.
            if (i === 1) {
                context.lineTo(denormalized.x, denormalized.y);
                continue;
            }
            // If there's more than 2 points and the current point isn't the last one...
            if (this.points.length > 2 && i < (this.points.length - 1)) {
                // Denormalise the next point, so that we can draw a quadratic curve to it
                const denomalizedNext = (0,_util_normalize__WEBPACK_IMPORTED_MODULE_2__.denormalize)(this.points[i + 1], context.canvas.width, context.canvas.height);
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
        // Stroke it. ԅ(≖⌣≖ԅ)
        context.stroke();
    }
    /**
     * Draws tool guides
     *
     * @param   {CanvasRenderingContext2D}  context  [context description]
     *
     * @return  {void}                               [return description]
     */
    drawGuides(context) {
        const size = 10;
        // If there's nothing to draw, shorcircuit.
        if (this.points.length < 1)
            return;
        for (var i = 1; i < this.points.length; i++) {
            const vector = (0,_util_normalize__WEBPACK_IMPORTED_MODULE_2__.denormalize)(this.points[i], _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height);
            context.beginPath();
            context.strokeStyle = "#8888FF";
            context.lineWidth = 1;
            context.rect(vector.x - (size / 2), vector.y - (size / 2), size, size);
            context.stroke();
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
        this.points.push((0,_util_normalize__WEBPACK_IMPORTED_MODULE_2__.normalize)(location, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.width, _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_SIZE.height));
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
/* harmony import */ var _tools_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/select */ "./src/tools/select.ts");
/* harmony import */ var _hud_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hud_item */ "./src/hud/hud_item.ts");



class Toolbar extends _hud_item__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(name, drawing) {
        super(name);
        this.tools = [
            {
                key: "select",
                title: "Select"
            },
            {
                key: "freehand",
                title: "Freehand"
            }
        ];
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
        var _a, _b;
        switch (tool) {
            case 'select':
                (_a = this.drawing) === null || _a === void 0 ? void 0 : _a.setTool(new _tools_select__WEBPACK_IMPORTED_MODULE_1__["default"](this.drawing));
                break;
            case 'freehand':
                (_b = this.drawing) === null || _b === void 0 ? void 0 : _b.setTool(new _tools_marker__WEBPACK_IMPORTED_MODULE_0__["default"](this.drawing));
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
    getEntity() {
        const color = this.drawing.getColor();
        return new _entities_freehand__WEBPACK_IMPORTED_MODULE_0__["default"](this.size, color);
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
/* harmony import */ var _entities_freehand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/freehand */ "./src/entities/freehand.ts");
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tool */ "./src/tools/tool.ts");


class Select extends _tool__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Sets up marker
     */
    constructor(drawing) {
        super(drawing, 'select');
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
    }
    /**
     * Returns the entity this `Tool` creates.
     *
     * @return  {Entity}  The entity to be added to the layer
     */
    getEntity() {
        const color = this.drawing.getColor();
        return new _entities_freehand__WEBPACK_IMPORTED_MODULE_0__["default"](this.size, color);
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
    startDrawing() {
        this.setIsDrawing(true);
        this.active_entity = this.getEntity();
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
        if (this.active_entity) {
            // Run the completion functions
            this.active_entity.complete();
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
        switch (event.key) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q2Q7Ozs7OztVQ25EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDSjtBQUNnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrREFBdUIsQ0FBQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNENBQUc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvc2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzPzMyMWYiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2RyYXdpbmcudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9lbnRpdGllcy9lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9lbnRpdGllcy9mcmVlaGFuZC50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2h1ZC9odWQudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9odWQvaHVkX2l0ZW0udHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9odWQvbGF5ZXJzLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvaHVkL3BhbGV0dGUudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9odWQvdG9vbGJhci50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL3Rvb2xzL2xheWVyLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdG9vbHMvbWFya2VyLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdG9vbHMvc2VsZWN0LnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdG9vbHMvdG9vbC50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL3V0aWwvY2lyY2xlLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdXRpbC9jb2xvci50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL3V0aWwva2V5X2V2ZW50cy50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL3V0aWwvbm9ybWFsaXplLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdXRpbC9wb2ludHMudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvQWJzdHJhY3RWZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvQXJyYXlWZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvRmxvYXQzMlZlY3Rvci5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9WZWMyRC5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9WZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3doaXRlYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3doaXRlYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jZHJhd2luZy1jYW52YXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuI3BhbGV0dGUge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuI3BhbGV0dGUgLmNvbG9yIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICB3aWR0aDogODBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogODBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbn1cXG4jcGFsZXR0ZSAuY29sb3I6aG92ZXIge1xcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuI3BhbGV0dGUgLmNvbG9yLnNlbGVjdGVkIHtcXG4gIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDIwNCwgMjA0LCAyNTUsIDAuNyk7XFxufVxcblxcbiNsYXllcnMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0b3A6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG1hcmdpbjogNDBweDtcXG59XFxuI2xheWVycyAubGF5ZXIge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xcbiAgYm9yZGVyLXJhZGl1czogMiU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jbGF5ZXJzIC5hY3RpdmUge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMTI4LCAwKTtcXG59XFxuI2xheWVycyAubGF5ZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN0b29scyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxcmVtO1xcbiAgdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiN0b29scyBidXR0b24ge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4jaGVscC52aXNpYmxlIHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjZGNkY2Q7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jaGVscC52aXNpYmxlIC5oZWFkZXIge1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiNoZWxwLnZpc2libGUgLmhlYWRlciBidXR0b24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDFyZW07XFxufVxcbiNoZWxwLnZpc2libGUgLmhlYWRlciBoMiB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcbiNoZWxwLnZpc2libGUgaDMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG4jaGVscC52aXNpYmxlIC5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jaGVscC52aXNpYmxlIC5ib2R5IC5sZWZ0IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbn1cXG4jaGVscC52aXNpYmxlIC5ib2R5IC5sZWZ0IHAge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuI2hlbHAudmlzaWJsZSAuYm9keSAucmlnaHQge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuI2hlbHAudmlzaWJsZSAuYm9keSAucmlnaHQgZGwuaW5saW5lLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBzZXQgdGhlIGNvbnRhaW5lciB3aWR0aCovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuI2hlbHAudmlzaWJsZSAuYm9keSAucmlnaHQgZGwuaW5saW5lLWZsZXggZHQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZmxleDogMCAwIDIwJTtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuI2hlbHAudmlzaWJsZSAuYm9keSAucmlnaHQgZGwuaW5saW5lLWZsZXggZGQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmbGV4OiAwIDAgODAlO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLHNCQUFBO0FBRkY7O0FBS0E7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FBRkY7QUFJRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUFGSjtBQUdJO0VBQ0UsMkNBQUE7QUFETjtBQUdJO0VBQ0UsMkNBQUE7QUFETjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUVBLFlBQUE7QUFKRjtBQU1FO0VBQ0Usb0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFKSjtBQU9FO0VBQ0Usa0NBQUE7QUFMSjtBQVFFO0VBQ0Usb0NBQUE7QUFOSjs7QUFVQTtFQUNFLGFBQUE7QUFQRjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFQRjtBQVFFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQU5KOztBQVVBO0VBQ0UseUNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQVBGO0FBU0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFQSjtBQVNJO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFQTjtBQVVJO0VBQ0UsZUFBQTtBQVJOO0FBWUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQVZKO0FBYUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBWEo7QUFhSTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQVhOO0FBWU07RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBVlI7QUFjSTtFQUNFLFVBQUE7QUFaTjtBQWNJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUFaTjtBQWVJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQWJOO0FBZ0JJO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBZE5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gVGhpcyBpcyBhbGwgaG9ycmlibGUuLi5cXG4vLyBidXQgaXQgd29ya3MuXFxuXFxuKiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46MDtcXG4gIHBhZGRpbmc6MDtcXG59XFxuXFxuYm9keSB7XFxuICBvdmVyZmxvdzpoaWRkZW47XFxufVxcblxcbiNkcmF3aW5nLWNhbnZhcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jcGFsZXR0ZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA1MCU7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgLmNvbG9yIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIH1cXG4gICAgJi5zZWxlY3RlZCB7XFxuICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYmEoMjA0LCAyMDQsIDI1NSwgMC43KTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4jbGF5ZXJzIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdG9wOiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFxuICBtYXJnaW46IDQwcHg7XFxuXFxuICAubGF5ZXIge1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDEyOCwgMCk7XFxuICB9XFxuXFxuICAubGF5ZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEuMCk7XFxuICB9XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Rvb2xzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDFyZW07XFxuICB0b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIH1cXG59XFxuXFxuI2hlbHAudmlzaWJsZSB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjY2RjZGNkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIC5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgfVxcbiAgXFxuICAgIGgyIHtcXG4gICAgICBmb250LXNpemU6IDNyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIGgzIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICB9XFxuXFxuICAuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgLmxlZnQge1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gICAgICBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5yaWdodCB7XFxuICAgICAgd2lkdGg6IDUwJTtcXG5cXG4gICAgZGwuaW5saW5lLWZsZXgge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1mbG93OiByb3c7XFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIC8qIHNldCB0aGUgY29udGFpbmVyIHdpZHRoKi9cXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgfVxcblxcbiAgICBkbC5pbmxpbmUtZmxleCBkdCB7XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OjkwMDtcXG4gICAgICBmbGV4OiAwIDAgMjAlO1xcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgZGwuaW5saW5lLWZsZXggZGQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIGZsZXg6IDAgMCA4MCU7XFxuICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcbiAgICB9XFxuICB9XFxuICAgIFxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgKiBhcyBWZWMyIGZyb20gXCJ2ZWN0b3IyZFwiO1xuaW1wb3J0IERyYXdpbmcgZnJvbSBcIi4vZHJhd2luZ1wiO1xuaW1wb3J0IE1hcmtlciBmcm9tIFwiLi90b29scy9tYXJrZXJcIjtcbmltcG9ydCBQYWxldHRlIGZyb20gXCIuL2h1ZC9wYWxldHRlXCI7XG5pbXBvcnQgSHVkIGZyb20gXCIuL2h1ZC9odWRcIjtcbmltcG9ydCBMYXllcnMgZnJvbSBcIi4vaHVkL2xheWVyc1wiO1xuaW1wb3J0IEtleUV2ZW50cyBmcm9tIFwiLi91dGlsL2tleV9ldmVudHNcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gXCIuL2h1ZC90b29sYmFyXCI7XG4vKipcbiAqIFRoZSB0b3AtbGV2ZWwgQXBwIGNsYXNzLCBtYW5hZ2VzIHNldHVwLCBiYXNlIGxvb3AsIGFuZCBldmVudHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQHBhcmFtICAge0hUTUxDYW52YXNFbGVtZW50fSAgICAgICAgIGNhbnZhcyAgIFRoaXMgaXMgdGhlIHRhcmdldCBjYW52YXMgZm9yIG91ciBnYW1lXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIFRoaXMgaXMgdGhlIGNvbnRldCBmb3IgdGhlIGNhbnZhc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY29udGV4dCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgZm9yIHRoZSBjYW52YXMub25LZXlEb3duIGV2ZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmtleV9kb3duID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IGZvciB0aGUgY2FudmFzLm9uTW91c2VNb3ZlIGV2ZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdXNlX21vdmUgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgZm9yIHRoZSBjYW52YXMub25Nb3VzZU1vdmUgZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2Vfd2hlZWwgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgZm9yIHRoZSBjYW52YXMub25Nb3VzZURvd24gZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2VfZG93biA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBmb3IgdGhlIGNhbnZhcy5vbk1vdXNlVXAgZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2VfdXAgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRHJhd2luZyBjYW52YXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2FudmFzID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRpbWVzdGFtcCB3aGVuIGxhc3QgZnJhbWUgd2FzIHByb2Nlc3NlZFxuICAgICAgICAgKiB1c2VkIGZvciBjYWxjdWxhdGluZyB0aGUgZGVsdGFUaW1lIGFuZFxuICAgICAgICAgKiBGUFMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9sZFRpbWVzdGFtcCA9IDAuMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhvbGRlciBmb3IgRlBTLCB1c2VmdWwgd2hlbiBuZWVkaW5nIHRvIHJlbmRlclxuICAgICAgICAgKiB0aGlzIHdpdGhpbiB0aGUgZ2FtZSBlbnZpcm9ubWVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mcHMgPSAwO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgLy8gU2V0IGNhbnZhcyBkaW1lbnNpb25zLCBUT0RPOiBtYWtlIHRoaXMgZHluYW1pYywgXG4gICAgICAgIC8vIGN1cnJlbnRseSBpdCdzIG9ubHkgc2V0IHdoZW4gdGhlIHBhZ2UgbG9hZHMuXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCb290c3RyYXAgZnVuY3Rpb24sIHVzZWQgZm9yIHNldHRpbmdcbiAgICAgKiBldmVyeXRoaW5nIHVwIHByaW9yIHRvIGtpY2tpbmcgb2ZmIHRoZSByZW5kZXJMb29wXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXRVcCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBDcmVhdGUgZHJhd2luZ1xuICAgICAgICB0aGlzLmRyYXdpbmcgPSBuZXcgRHJhd2luZygpO1xuICAgICAgICAvLyBTZXRzIHRoZSBkZWZhdWwvc3RhcnRpbmcgVG9vbC5cbiAgICAgICAgdGhpcy5kcmF3aW5nLnNldFRvb2wobmV3IE1hcmtlcih0aGlzLmRyYXdpbmcpKTtcbiAgICAgICAgLy8gQWRkIGEgbGF5ZXIgdG8gdGhlIGRyYXdpbmdcbiAgICAgICAgdGhpcy5kcmF3aW5nLmFkZExheWVyKCk7XG4gICAgICAgIC8vIEl0ZW1zIHRvIHRoZSBodWRcbiAgICAgICAgY29uc3QgaHVkID0gbmV3IEh1ZCgpO1xuICAgICAgICAvLyBBdHRhY2ggcGFsZXR0ZSB0byB0aGUgSFVEXG4gICAgICAgIGNvbnN0IHBhbGV0dGUgPSBuZXcgUGFsZXR0ZSgpO1xuICAgICAgICBwYWxldHRlLnNldENvbG9ySW5kZXgoMCk7XG4gICAgICAgIGh1ZC5hZGRJdGVtKHBhbGV0dGUpO1xuICAgICAgICBjb25zdCB0b29sYmFyID0gbmV3IFRvb2xiYXIoXCJ0b29sYmFyXCIsIHRoaXMuZHJhd2luZyk7XG4gICAgICAgIGh1ZC5hZGRJdGVtKHRvb2xiYXIpO1xuICAgICAgICAvLyBBdHRhY2ggdGhlIGxheWVycyBvdmVydmlldyB0byB0aGUgSFVEXG4gICAgICAgIGNvbnN0IGxheWVycyA9IG5ldyBMYXllcnModGhpcy5kcmF3aW5nKTtcbiAgICAgICAgaHVkLmFkZEl0ZW0obGF5ZXJzKTtcbiAgICAgICAgLy8gRHJhdyB0aGUgb3ZlcnZpZXcsIGZvciBlYWNoIGxheWVyXG4gICAgICAgIGxheWVycy5idWlsZCgpO1xuICAgICAgICAvLyBBdHRhY2ggdGhlIEhVRCB0byB0aGUgZHJhd2luZ1xuICAgICAgICB0aGlzLmRyYXdpbmcuaHVkID0gaHVkO1xuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lciB0byBjbG9zZSB0aGUgaGVscCBwb3B1cCB0aGF0IHNob3dzIG9uIGxvYWQuXG4gICAgICAgIChfYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVscCAjY2xvc2VcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVscFwiKTtcbiAgICAgICAgICAgIGhlbHAgPT09IG51bGwgfHwgaGVscCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVscC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgICAgIGhlbHAgPT09IG51bGwgfHwgaGVscCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVscC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gUGFzcyBvZmYgYWxsIEtleWJvYXJkIGV2ZW50cyB0byB0aGUga2V5X2V2ZW50cyBoYW5kbGVyLiBcbiAgICAgICAgLy8gRG8gdGhpcyBnbG9iYWxseS4gTm90IGp1c3Qgb24gdGhlIENhbnZhcy5cbiAgICAgICAgY29uc3Qga2V5RXZlbnRIYW5kbGVyID0gbmV3IEtleUV2ZW50cyh0aGlzLmRyYXdpbmcpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBrZXlFdmVudEhhbmRsZXIuaGFuZGxlKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEF0dGFjaCBzb21lIGV2ZW50cyB0byB0aGUgbWFpbiBjYW52YXNcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdGFyZ2V0IHBvc2l0aW9uICh3aGVyZSB3ZSB3YW50IHRvIGRyYXcpIHdoZW4gdGhlIG1vdXNlIG1vdmVzIG92ZXIgdGhlIGNhbnZhc1xuICAgICAgICAgICAgdGhpcy5tb3VzZV9tb3ZlID0gdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgY29uc3QgbW91c2VfcG9zID0gbmV3IFZlYzIuVmVjdG9yKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFRhcmdldFBvc2l0aW9uKG1vdXNlX3Bvcyk7XG4gICAgICAgICAgICAgICAgaHVkLnNldEN1cnNvclBvc2l0aW9uKG1vdXNlX3Bvcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBtb3VzZSBpcyBkb3duLCBzaWduYWwgdG8gdGhlbiBkcmF3aW5nIG9iamVjdCB0aGF0IHdlJ3JlIFxuICAgICAgICAgICAgLy8gZHJhd2luZywgd2l0aCB3aGF0ZXZlciB0b29sIHdlJ3ZlIGN1cnJlbnRseSBzZWxlY3RlZC5cbiAgICAgICAgICAgIHRoaXMubW91c2VfZG93biA9IHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b29sKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc3RhcnREcmF3aW5nKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIExpc3RlbiBmb3IgbW91c2V3aGVlbCwgYW5kIHJlc2l6ZSB0aGUgdG9vbCBkZXBlbmRpbmcgb24gZGlyZWN0aW9uLlxuICAgICAgICAgICAgdGhpcy5tb3VzZV93aGVlbCA9IHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b29sKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc2V0U2l6ZSgoKF9jID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9vbC5zaXplKSAtIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgKF9lID0gKF9kID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QudG9vbCkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLnNldFNpemUoKChfZiA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mLnRvb2wuc2l6ZSkgKyAyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIElmIHdlIG1vdXNldXAgd2UgbmVlZCB0byB0ZWxsIHRoZSBkcmF3aW5nIG9iamVjdCwgd2UndmUgc3RvcHBlZCBkcmF3aW5nLlxuICAgICAgICAgICAgdGhpcy5tb3VzZV91cCA9IHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgKF9iID0gKF9hID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9vbCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnN0b3BEcmF3aW5nKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYW55IHBlcmlvZGljIHRpbWVycy5cbiAgICAgKiBXZSBjYW4gdXNlIHRoaXMgdG8gdHJpZ2dlciBhbnkgdGltZSBiYXNlZCBldmVudHMuIGllIGV2ZXJ5IDUgc2Vjb25kcyBkbyBYXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7RE9NSGlnaFJlc1RpbWVTdGFtcH0gIHRpbWVzdGFtcCAgRVBPQyBNaWxsaXNlY29uZHNcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHByb2Nlc3NUaW1lcnModGltZXN0YW1wKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVudHJ5IHBvaW50IGZvciBhbGwgdGhpbmdzLlxuICAgICAqXG4gICAgICogUHJvY2Vzc2VzIHRpbWVyc1xuICAgICAqIFVwZGF0ZXMgYWxsIGFwcGxpY2F0aW9uIGVudGl0aWVzLFxuICAgICAqIENhc2NhZGVzIHJlbmRlciB0byBlbnRpdGllcy5cbiAgICAgKiBDYWxsZWQgZXZlcnkgZnJhbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtET01IaWdoUmVzVGltZVN0YW1wfSAgdGltZXN0YW1wICBFUE9DIG1pbGxpc2Vjb25kc1xuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2Vzcyh0aW1lc3RhbXApIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgLy8gU2hvcnQgY2lyY3V0LCB0aGVzZSBNVVNUIGV4aXN0XG4gICAgICAgIGlmICh0aGlzLmNhbnZhcyA9PSBudWxsIHx8IHRoaXMuY29udGV4dCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBQcm9jZXNzIGFueSB0aW1lcnNcbiAgICAgICAgdGhpcy5wcm9jZXNzVGltZXJzKHRpbWVzdGFtcCk7XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIHNlY29uZHMgcGFzc2VkIHNpbmNlIHRoZSBsYXN0IGZyYW1lXG4gICAgICAgIGNvbnN0IGR0ID0gdGltZXN0YW1wIC0gdGhpcy5vbGRUaW1lc3RhbXA7XG4gICAgICAgIC8vIFVwZGF0ZSB0aW1lc3RhbXAgZm9yIG5leHQgcHJvY2VzcyBmcmFtZVxuICAgICAgICB0aGlzLm9sZFRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICAgICAgLy8gVHJpZ2dlciBXb3JsZCBjYWxjc1xuICAgICAgICAvLyBUT0RPOiBhc3luYz8gUGVyZm9ybWFuY2UgaW1wcm92bWVudCBhdCBhIGxhdGVyIGRhdGUuXG4gICAgICAgIChfYSA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByb2Nlc3MoZHQsIHRpbWVzdGFtcCk7XG4gICAgICAgIC8vIFJlbmRlciB0aGluZ3NcbiAgICAgICAgKF9iID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucmVuZGVyKHRoaXMuY2FudmFzLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBkZWZhdWx0IGNvbG9yc1xuZXhwb3J0IGNvbnN0IENPTE9SX1JFRCA9IHsgcjogMjU1LCBnOiAwLCBiOiAwLCBhOiAxLjAgfTtcbmV4cG9ydCBjb25zdCBDT0xPUl9HUkVFTiA9IHsgcjogMCwgZzogMTkyLCBiOiAwLCBhOiAxLjAgfTtcbmV4cG9ydCBjb25zdCBDT0xPUl9CTFVFID0geyByOiAwLCBnOiAwLCBiOiAyNTUsIGE6IDEuMCB9O1xuZXhwb3J0IGNvbnN0IENPTE9SX1lFTExPVyA9IHsgcjogMjU1LCBnOiAyNTUsIGI6IDAsIGE6IDEuMCB9O1xuZXhwb3J0IGNvbnN0IENPTE9SX09SQU5HRSA9IHsgcjogMjU1LCBnOiAxMjgsIGI6IDAsIGE6IDEuMCB9O1xuZXhwb3J0IGNvbnN0IENPTE9SX0JMQUNLID0geyByOiAwLCBnOiAwLCBiOiAwLCBhOiAxLjAgfTtcbmV4cG9ydCBjb25zdCBMQVlFUl9DUkVBVEVfS0VZUyA9IDA7XG5leHBvcnQgY29uc3QgQ29uc3RhbnRzID0ge1xuICAgIFBBTExFVFRFX1NJWkU6IDYwLFxuICAgIFRPT0xfU1BBQ0lORzogMjAsXG4gICAgQ0FOVkFTX1NJWkU6IHtcbiAgICAgICAgd2lkdGg6ICh3aW5kb3cpID8gd2luZG93LmlubmVyV2lkdGggOiAxOTgwLFxuICAgICAgICBoZWlnaHQ6ICh3aW5kb3cpID8gd2luZG93LmlubmVySGVpZ2h0IDogMTA4MFxuICAgIH0sXG4gICAgTEFZRVJTX1dJRFRIOiAxMjUsXG4gICAgTEFZRVJfQ1JFQVRFX0RFTEFZOiA1MDAwLFxuICAgIExBWUVSX0NSRUFURV9CRUhBVklPUjogTEFZRVJfQ1JFQVRFX0tFWVMsXG4gICAgQ09MT1JTOiBbXG4gICAgICAgIENPTE9SX1JFRCxcbiAgICAgICAgQ09MT1JfR1JFRU4sXG4gICAgICAgIENPTE9SX0JMVUUsXG4gICAgICAgIENPTE9SX1lFTExPVyxcbiAgICAgICAgQ09MT1JfT1JBTkdFLFxuICAgICAgICBDT0xPUl9CTEFDS1xuICAgIF0sXG4gICAgQ0FOVkFTX1RBUkdFVDogXCJkcmF3aW5nLWNhbnZhc1wiXG59O1xuIiwiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4vdXRpbC9jb2xvclwiO1xuaW1wb3J0IExheWVyIGZyb20gXCIuL3Rvb2xzL2xheWVyXCI7XG4vKipcbiAqIE1haW4gZHJhd2luZyBjbGFzcywgY29uc3RydWN0cyBldmVyeXRyaGluZ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3aW5nIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIExheWVyIGluY3JlbWVudGFsIG51bWJlciwgdXNlZCB0byB0cmFjayB1bmlxdWUgbnVtZXJpY2FsXG4gICAgICAgICAqIGlkIG9mIGFsbCBlbnRpdGllcyBsb2FkZWQgb250byB0aGUgY2FudmFzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubGF5ZXJfaWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGxheWVyc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyICB7TWFwPG51bWJlciwgTGF5ZXI+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sYXllcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIZWFkcyB1cCBkaXNwbGF5IChHVUkpXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge0h1ZH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaHVkID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3VsZCB3ZSBkcmF3IHRoZSB0YXJnZXRzLiBUaGlzIGlzIHRoZSBzaXplIGFuZCBzaGFwZSBvZiB0aGUgY3VycmVudCBicnVzaC90b29sLlxuICAgICAgICAgKiBUaGlzIGlzIGEgdGVtcG9yYXJ5IG92ZXJsYXkgc28gdGhlIHVzZXIgY2FuIHNlZSBhbiBpbmRlaWNhdGlvbiBvZiB3aGF0IHRoZXkgYXJlXG4gICAgICAgICAqIGRvaW5nIGJlZm9yZSB0aGV5IGRvIGl0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kcmF3X3RhcmdldCA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUYXJnZXQgY3VycmVudCBsb2NhdGlvbiwgd2hlcmUgd2UncmUgZHJhd2luZy93b3JraW5nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtWZWMyLlZlY3Rvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1cnJlbnQgdG9vbCB0aGUgdXNlciBoYXMgc2VsZWN0ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge1Rvb2x9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRvb2wgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogSGVscGVyIHRvIGNhbGN1bGF0ZSBGUFMgYW5kIGZyYW1lcmF0ZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50aW1lVG9EcmF3ID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhvbGRlciBmb3IgZGVsdGF0aW1lLCB1c2VkIGZvciBhbmltYXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZHQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogUHJldmlvdXMgZnJhbWUgdGltZXN0YW1wLCB1c2VkIHRvIGNhbGN1bGF0ZSBGUFMgYW5kIGFuaW1hdGlvbnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge0RPTUhpZ2hSZXNUaW1lU3RhbXB9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9sZFRpbWVzdGFtcCA9IDAuMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZyYW1lcyBwZXIgc2Vjb25kXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZnBzID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3cgZGVidWcuIERvIHdlIHdhbnQgdG8gc2hvdyBkZWJ1ZyBpbmZvIG9uc2NyZWVuLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zaG93X2RlYnVnID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIExheWVyIGZyb20gdGhlIGNhbnZhc1xuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIGxheWVyX2lkICAgIElEIG9mIHRoZSBsYXllciB0byByZW1vdmVcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbW92ZUxheWVyKGxheWVyX2lkKSB7XG4gICAgICAgIGlmIChsYXllcl9pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhpcyByZW1vdmVzIHRoZSBsYXllciBmcm9tIHRoZSBkcmF3aW5nXG4gICAgICAgIHRoaXMubGF5ZXJzLmRlbGV0ZShsYXllcl9pZCk7XG4gICAgICAgIC8vIE5vdyB0aGF0IHRoZSBsYXllciBoYXMgYmVlbiByZW1vdmVkXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gc2V0IHRoZSBuZXcgYWN0aXZlX2xheWVyLlxuICAgICAgICAvLyBJZiB0aGVyZSdzIG9uZSBiZWxvdywgdGhlbiBjaG9vc2UgdGhhdC5cbiAgICAgICAgaWYgKHRoaXMubGF5ZXJzLmhhcyhsYXllcl9pZCAtIDEpKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9sYXllciA9IHRoaXMubGF5ZXJzLmdldChsYXllcl9pZCAtIDEpO1xuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGNob29zZSB0aGUgb25lIGFib3ZlIGlmIGl0IGV4aXN0c1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMubGF5ZXJzLmhhcyhsYXllcl9pZCArIDEpKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9sYXllciA9IHRoaXMubGF5ZXJzLmdldChsYXllcl9pZCArIDEpO1xuICAgICAgICAgICAgLy8gSWYgbmVpdGhlciBvZiB0aG9zZSBhcmUgdHJ1ZS4uLlxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5ZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gbGF5ZXJzIGxlZnQsIGNyZWF0ZSBhIG5ldyBvbmUsIHNldCBpdCBhY3RpdmUuXG4gICAgICAgICAgICAgICAgdGhpcy5sYXllcnMuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExheWVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPdGVoZXJ3aXNlIGNob29zZSB0aGUgbGF5ZXIgd2l0aCB0aGUgc21hbGxlc3QgSURcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZV9sYXllciA9IHRoaXMubGF5ZXJzLmdldChNYXRoLm1pbiguLi50aGlzLmxheWVycy5rZXlzKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZWRyYXcgdGhlIGxheWVycyBvdmVydmlldy5cbiAgICAgICAgdGhpcy5yZWRyYXdIdWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2l2ZW4gYW4gSUQsIHJldHVybiBhIExheWVyIHdpdGggdGhhdCBJRCBpZiBpdCBleGlzdHMsIG51bGwgaWYgaXQgZG9lc24ndC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBsYXllcl9pZCAgSUQgb2YgdGhlIGxheWVyIHRvIHJldHVybi5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtMYXllciB8IG51bGx9XG4gICAgICovXG4gICAgZ2V0TGF5ZXIobGF5ZXJfaWQpIHtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSB0aGlzLmxheWVycy5nZXQobGF5ZXJfaWQpO1xuICAgICAgICBpZiAobGF5ZXIpXG4gICAgICAgICAgICByZXR1cm4gbGF5ZXI7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWRyYXcgYWxsIEhVRCBpdGVtcy4gV2UgZG9uJ3Qgd2FudCB0byBkb1xuICAgICAqIHRoaXMgZXZlcnkgZnJhbWUgYXMgdGhlc2UgYXJlIERPTSBpdGVtcywgc28gd2UgaGF2ZVxuICAgICAqIGFuIGV4cGxpY2l0IGNhbGwgdG8gZG8gc28gd2hlbiB3ZSBuZWVkIHRvLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcmVkcmF3SHVkKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLmh1ZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEJ5TmFtZShcImxheWVyc1wiKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmJ1aWxkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZCBhIGxheWVyIHRvIHRoZSBkcmF3aW5nLCBzZXQgaXQgYXMgYWN0aXZlXG4gICAgICogYW5kIHJlZHJhdyB0aGUgaHVkIHRvIHNob3cgaXQgaW4gdGhlIGxheWVyIG92ZXJ2aWV3LlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgYWRkTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlX2xheWVyID0gbmV3IExheWVyKHRoaXMubGF5ZXJfaWQsIHRoaXMpO1xuICAgICAgICB0aGlzLmxheWVycy5zZXQodGhpcy5hY3RpdmVfbGF5ZXIuaWQsIHRoaXMuYWN0aXZlX2xheWVyKTtcbiAgICAgICAgdGhpcy5sYXllcl9pZCsrO1xuICAgICAgICB0aGlzLnJlZHJhd0h1ZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBhY3RpdmUgbGF5ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgbGF5ZXJfaWQgIElEIG9mIHRoZSBsYXllciB0byBzZXQgYXMgYWN0aXZlLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0QWN0aXZlTGF5ZXIobGF5ZXJfaWQpIHtcbiAgICAgICAgLy8gVE9ETzogQXNzdW1lcyB0aGUgbGF5ZXJfaWQgZXhpc3RzLCB3aGF0IGRvIHdlIGRvIGlmIGl0IGRvZXNuJ3Q/XG4gICAgICAgIHRoaXMuYWN0aXZlX2xheWVyID0gdGhpcy5sYXllcnMuZ2V0KGxheWVyX2lkKTtcbiAgICAgICAgdGhpcy5yZWRyYXdIdWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmV4dCBMYXllclxuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIGN1cnJlbnRfbGF5ZXJfaWQgIElEIG9mIHRoZSBjdXJyZW50IGxheWVyLlxuICAgICAqXG4gICAgICogQHJldHVybiAge251bWJlcn0gICBSZXR1cm5zIHRoZSBJRCBvZiB0aGUgbmV4dCBsYXllciBpbiB0aGUgTWFwKClcbiAgICAgKi9cbiAgICBnZXROZXh0TGF5ZXIoY3VycmVudF9sYXllcl9pZCkge1xuICAgICAgICBsZXQgbmV4dCA9IGZhbHNlO1xuICAgICAgICAvLyBSZW5kZXIgZWFjaCBvZiB0aGUgZXhpc3RpbmcgZW50aXRpdGVzLiAoRHJhd2luZ3MpXG4gICAgICAgIGZvciAobGV0IFtrZXksIGxheWVyXSBvZiB0aGlzLmxheWVycykge1xuICAgICAgICAgICAgaWYgKG5leHQgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IGN1cnJlbnRfbGF5ZXJfaWQpIHtcbiAgICAgICAgICAgICAgICBuZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJldiBMYXllclxuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIGN1cnJlbnRfbGF5ZXJfaWQgIElEIG9mIHRoZSBjdXJyZW50IGxheWVyLlxuICAgICAqXG4gICAgICogQHJldHVybiAge251bWJlcn0gICBSZXR1cm5zIHRoZSBJRCBvZiB0aGUgbmV4dCBsYXllciBpbiB0aGUgTWFwKClcbiAgICAgKi9cbiAgICBnZXRQcmV2TGF5ZXIoY3VycmVudF9sYXllcl9pZCkge1xuICAgICAgICBsZXQgcHJldmlvdXMgPSAtMTtcbiAgICAgICAgLy8gUmVuZGVyIGVhY2ggb2YgdGhlIGV4aXN0aW5nIGVudGl0aXRlcy4gKERyYXdpbmdzKVxuICAgICAgICBmb3IgKGxldCBba2V5LCBsYXllcl0gb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IGN1cnJlbnRfbGF5ZXJfaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldmlvdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmV2aW91cyA9IGtleTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBlbnRpdHkgdG8gdGhlIGFjdGl2ZSBsYXllci4gVGhpcyB3aWxsIGdldCBkcmF3biBpbiB0aGUgbmV4dCBmcmFtZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtFbnRpdHl9ICBlbnRpdHkgIEVudGl0eSB0byBhZGQgdG8gdGhlIGdhbWV3b3JsZFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgYWRkRW50aXR5KGVudGl0eSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghdGhpcy5hY3RpdmVfbGF5ZXIpXG4gICAgICAgICAgICB0aGlzLmFkZExheWVyKCk7XG4gICAgICAgIChfYSA9IHRoaXMuYWN0aXZlX2xheWVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRW50aXR5KGVudGl0eSk7XG4gICAgICAgIHRoaXMucmVkcmF3SHVkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgdG9vbCB0aGF0IHRoZSB1c2VyIGhhcyBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtUb29sfSAgdG9vbCAgU2V0J3MgdGhlIGFjdGl2ZSB0b29sIHRvIFRvb2xcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHNldFRvb2wodG9vbCkge1xuICAgICAgICB0aGlzLnRvb2wgPSB0b29sO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVbnNldCdzIHRoZSBjdXJyZW50IHRhcmdldFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgdW5zZXRUYXJnZXQoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY3VycmVudCB0YXJnZXQgcG9zaXRpb24gKFdoZXJlIHRoZSBtb3VzZSBpcylcbiAgICAgKlxuICAgICAqIEB2YXIge1ZlYzIuVmVjdG9yfSBtb3VzZV9wb3MgICBUYXJnZXQgcG9zaXRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0VGFyZ2V0UG9zaXRpb24obW91c2VfcG9zKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbW91c2VfcG9zO1xuICAgICAgICBpZiAodGhpcy50b29sKSB7XG4gICAgICAgICAgICB0aGlzLnRvb2wuc2V0TG9jYXRpb24obW91c2VfcG9zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gZHJhdyB0aGUgdGFyZ2V0cywgKERyYXdzIHRoZSBUb29sIGhlbHBlciB0byB0aGUgVUkpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIGRyYXdpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgZHJhd1RhcmdldChjb250ZXh0KSB7XG4gICAgICAgIGlmICh0aGlzLnRvb2wgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50b29sLmRyYXdUYXJnZXQoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGNvdW50IG9mIGFsbCBlbnRpdGVzIGJ5IHR5cGUsIGlmIG5vIHR5cGUgc3BlY2lmaWVkLFxuICAgICAqIHRoZW4gcmV0dW5yIGNvdW50IG9mIGFsbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmc/fSAgdHlwZSAgRW50aXR5IFR5cGV8TmFtZSBbb3B0aW9uYWxdXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7bnVtYmVyfSAgICAgICAgTnVtYmVyIG9mIGVudGl0aWVzXG4gICAgICovXG4gICAgY291bnRFbnRpdGllcyh0eXBlKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAobGV0IFtrZXksIGxheWVyXSBvZiB0aGlzLmxheWVycykge1xuICAgICAgICAgICAgY291bnQgKz0gbGF5ZXIuY291bnRFbnRpdGllcyh0eXBlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIGRlYnVnZ2luZyBwYW5lbFxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyByZW5kZXJpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgZHJhd0RlYnVnKGNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2RkZGRkZDU1JztcbiAgICAgICAgY29udGV4dC5maWxsUmVjdChDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGggLSA3NSwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodCAtIDEwMCwgNzUsIDEwMCk7XG4gICAgICAgIGNvbnRleHQuZm9udCA9ICcxMXB4IEFyaWFsJztcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KFwiRlBTOiBcIiArIHRoaXMuZnBzLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGggLSA3MCwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodCAtIDg1KTtcbiAgICAgICAgY29udGV4dC5maWxsVGV4dChcIkxBWUVSUzogXCIgKyB0aGlzLmxheWVycy5zaXplLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGggLSA3MCwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodCAtIDcwKTtcbiAgICAgICAgY29udGV4dC5maWxsVGV4dChcIkVOVDogXCIgKyB0aGlzLmNvdW50RW50aXRpZXMoKSwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoIC0gNzAsIENvbnN0YW50cy5DQU5WQVNfU0laRS5oZWlnaHQgLSA1NSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYW55IGNhbnZhcyBiYXNlZCBodWQgaXRlbXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIHJlbmRlcmluZyBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBkcmF3SHVkKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmh1ZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5odWQucmVuZGVyKGNvbnRleHQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGFjdGl2ZSBjb2xvciwgYXMgc3BlY2lmaWVkIGJ1IHRoZSBwYWxldHRlLlxuICAgICAqIGRlZmF1bHRzIHRvIEJsYWNrIGlmIG5vIGNvbG9yIGlzIHNldC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtDb2xvcn0gICBUaGUgc2VsZWN0ZWQgY29sb3JcbiAgICAgKi9cbiAgICBnZXRDb2xvcigpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBwYWxsZXR0ZSA9IChfYSA9IHRoaXMuaHVkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0QnlOYW1lKFwicGFsZXR0ZVwiKTtcbiAgICAgICAgaWYgKHBhbGxldHRlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFsbGV0dGUuZ2V0Q29sb3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKDAsIDAsIDApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQYXJlbnQgZm9yIGFsbCB0aGUgcmVuZGVyaW5nIGZvciB0aGUgYXBwXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7SFRNTENhbnZhc0VsZW1lbnR9ICAgICAgICAgY2FudmFzICAgQ2FudmFzXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyBkcmF3aW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbmRlcihjYW52YXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICAvLyBDbGVhciB0aGUgc2NyZWVuIGV2ZXJ5IGZyYW1lXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIC8vIFJlbmRlciBlYWNoIG9mIHRoZSBleGlzdGluZyBlbnRpdGl0ZXMuIChEcmF3aW5ncylcbiAgICAgICAgZm9yIChsZXQgW2tleSwgbGF5ZXJdIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICAgICAgICBsYXllci5yZW5kZXIoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRHJhdyBhbnkgdG9vbCBoZWxwZXJzLCBkcmF3IHRoZSB0aGluZyBjdXJyZW50bHkgYmVpbmcgZHJhd24uXG4gICAgICAgIGlmICgoX2EgPSB0aGlzLnRvb2wpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hY3RpdmVfZW50aXR5KSB7XG4gICAgICAgICAgICB0aGlzLnRvb2wuYWN0aXZlX2VudGl0eS5kcmF3KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERyYXcgdG8gdGhlIGVudGl0eSBjdXJyZW50bHkgYmVpbmcgZHJhd25cbiAgICAgICAgaWYgKChfYiA9IHRoaXMudG9vbCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmlzX2RyYXdpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudG9vbC5kcmF3KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERyYXcgdGFyZ2V0LCBpZiB0dXJuZWQgb24uXG4gICAgICAgIGlmICh0aGlzLmRyYXdfdGFyZ2V0KVxuICAgICAgICAgICAgdGhpcy5kcmF3VGFyZ2V0KGNvbnRleHQpO1xuICAgICAgICAvLyBTaG93IHRoZSBkZWJ1ZywgaWYgdHVybmVkIG9uLlxuICAgICAgICBpZiAodGhpcy5zaG93X2RlYnVnKVxuICAgICAgICAgICAgdGhpcy5kcmF3RGVidWcoY29udGV4dCk7XG4gICAgICAgIC8vIERyYXcgdGhlIEhVRC5cbiAgICAgICAgdGhpcy5kcmF3SHVkKGNvbnRleHQpO1xuICAgICAgICBpZiAoKChfYyA9IHRoaXMudG9vbCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLm5hbWUpID09PSAnc2VsZWN0JyAmJiB0aGlzLmFjdGl2ZV9sYXllcikge1xuICAgICAgICAgICAgZm9yIChsZXQgW2tleSwgZW50aXR5XSBvZiAoX2QgPSB0aGlzLmFjdGl2ZV9sYXllcikgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmVudGl0aWVzKSB7XG4gICAgICAgICAgICAgICAgZW50aXR5LmRyYXdHdWlkZXMoY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2FyYmFnZSBjbGVhbiB1cCwgcmVtb3ZlcyBhbnkgZW50aXRpZXMgdGhhdCBhcmUgc2NoZWR1bGUgZm9yIHJlbW92YWxcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbW92ZUVudGl0aWVzKCkge1xuICAgICAgICBmb3IgKGxldCBba2V5LCBsYXllcl0gb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgICAgICAgIGxheWVyLnJlbW92ZUVudGl0aWVzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRG8gYWxsIHdvcmxkIGNhbGN1bGF0aW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gICAgICAgICAgICAgICBnYW1lVGltZSAgIERlbHRhVGltZVxuICAgICAqIEBwYXJhbSAgIHtET01IaWdoUmVzVGltZVN0YW1wfSAgdGltZXN0YW1wICBDdXJyZW50IHRpbWVcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHByb2Nlc3ModGltZSwgdGltZXN0YW1wKSB7XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIHNlY29uZHMgcGFzc2VkIHNpbmNlIHRoZSBsYXN0IGZyYW1lXG4gICAgICAgIHRoaXMudGltZVRvRHJhdyA9IHRpbWUgLyAxMDAwO1xuICAgICAgICAvLyBDYWxjdWxhdGUgZnBzXG4gICAgICAgIHRoaXMuZnBzID0gTWF0aC5yb3VuZCgxIC8gdGhpcy50aW1lVG9EcmF3KTtcbiAgICAgICAgLy8gUmVtb3ZlIGFueSBlbnRpdGllcyB0aGF0IGFyZSBzZXQgZm9yIHJlbW92YWwuIENvdWxkIHByb2JhYmx5IFxuICAgICAgICAvLy8gYmUgZG9uZSBpbiB0aGUgbG9vcCBiZWxvdyBpZiBwZXJmb3JtYW5jZSBiZWNvbWVzIGFuIGlzc3VlLFxuICAgICAgICAvLyBmb3Igbm93IGl0J3MgZmluZS4gQ2xlYXJlciB0byBrZWVwIHRoZSBzZXBlcmF0ZS5cbiAgICAgICAgdGhpcy5yZW1vdmVFbnRpdGllcygpO1xuICAgICAgICAvLyBQcm9jZXNzIGFueSBlbnRpdHkgY2FsY3MgZm9yIHJlbmRlcmluZyBuZXh0IHRpY2suXG4gICAgICAgIGZvciAobGV0IFtrZXksIGxheWVyXSBvZiB0aGlzLmxheWVycykge1xuICAgICAgICAgICAgbGF5ZXIucHJvY2Vzcyh0aW1lLCB0aW1lc3RhbXApO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFsbG93IGh1ZCB0byBwcm9jZXNzIHRoaW5nc1xuICAgICAgICBpZiAodGhpcy5odWQpXG4gICAgICAgICAgICB0aGlzLmh1ZC5wcm9jZXNzKHRpbWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb2xvciBmcm9tICcuLi91dGlsL2NvbG9yJztcbi8qKlxuICogQ29yZSBlbnRpdHkgY2xhc3MsIGFsbCBkcmF3biBvYmplY3RzIHdpdGhpbiB0aGUgYXBwIGFyZSBlbnRpdGllcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50aXR5IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgbmFtZSAgbmFtZSBvciB0eXBlIG9mIGVudGl0eVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRpbWUgdGhlIGVudGl0eSB3YXMgY3JlYXRlZCwgbWlsbGlzZWNvbmRzIHNpbmNlIEVQT0NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGltZSB0aGUgZW50aXR5IHdhcyBjcmVhdGVkLCBtaWxsaXNlY29uZHMgc2luY2UgRVBPQ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jcmVhdGVkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRpbWUgdGhlIGVudGl0eSB3YXMgZmluaXNoZWQgZHJhd2luZywgbWlsbGlzZWNvbmRzIHNpbmNlIEVQT0NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbG91ciBvZiB0aGUgZW50aXR5XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gIHtDb2xvcn0gIENvbG91ciBvYmplY3QgdGhhdCB0aGUgZW50aXR5IHdpbGwgYmUgZHJhd24gYXMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbG9yID0gbmV3IENvbG9yKDAsIDAsIDApO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2l6ZSBvZiB0aGUgZW50aXR5XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBuYW1lIGZvciB0aGUgZW50aXR5LCBha2EgdHlwZS4gQ2FuIGJlIHVzZWQgdG8gcXVlcnkgZm9yIGVuZWl0aWVzIG9mIFwibmFtZVwiXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSAnJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHNldCB0byB0cnVlIHRoZSBlbnRpdHkgd2lsbCBiZSBkaXNwb3NlZCBvZiBuZXh0IHRpY2suXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlbW92ZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVmIHRvIHRoZSBkcmF3aW5nIGNhbnZzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRyYXdpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBEYXRlLm5vdygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIENvbG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q29sb3J9ICBjb2xvciAgQ29sb3IgdG8gc2V0IG9uIHRoZSBlbnRpdHlcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHNldENvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBlbnRpdHksIGJ5IGRlZmF1bHQgYWxsIGVudGl0aWVzIGFyZSB0cmVhdGVkIGFzIGNpcmNsZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIGRyYXdpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5kcmF3KGNvbnRleHQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIGFueSBlbnRpdHkgdXBkYXRlcyBvciBjYWxjdWxhdGlvbnMgdG8gYmUgcmVuZGVyZWQgbmV4dCB0aWNrLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIGRlbHRhICB0aW1lIHNpbmNlIGxhc3QgZnJhbWUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm9jZXNzKGRlbHRhKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBkcmF3aW5nIGlzIGNvbXBsZXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiAgezx2b2lkPn1cbiAgICAgKi9cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBEYXRlLm5vdygpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZsYXR0ZW5Qb2ludHMsIGV4cGFuZFBvaW50cywgZ2V0Q3VydmVQb2ludHMsIHNpbXBsaWZ5IH0gZnJvbSBcIi4uL3V0aWwvcG9pbnRzXCI7XG5pbXBvcnQgeyBkZW5vcm1hbGl6ZSwgbm9ybWFsaXplIH0gZnJvbSBcIi4uL3V0aWwvbm9ybWFsaXplXCI7XG5pbXBvcnQgRW50aXR5IGZyb20gXCIuL2VudGl0eVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJlZWhhbmQgZXh0ZW5kcyBFbnRpdHkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBzaXplICAgU2l6ZSBvZiB0aGUgZW50aXR5XG4gICAgICogQHBhcmFtICAge0NvbG9yfSAgIGNvbG9yICBDb2xvciBvZiB0aGUgZW50aXR5XG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgY29sb3IpIHtcbiAgICAgICAgc3VwZXIoJ2ZyZWVoYW5kJyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQb2ludHMgb2YgdGhlIGZyZWVoYW5kIGxpbmVcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7QXJyYXk8VmVjdG9yPn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmFibGVzIHRoZSBlbnRpdHkgdG8gYmUgc2NhbGVkIGFuZCBkaXNwbGF5ZWQgYXRcbiAgICAgICAgICogYSBkaWZmZXJlbnQgc2l6ZSwgaWUgaW4gdGhlIGxheWVycyBvdmVydmlldy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zY2FsZSA9IDEuMDtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBbY29tcGxldGUgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgc3VwZXIuY29tcGxldGUoKTtcbiAgICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHNpbXBsaWZpZWQgPSBzaW1wbGlmeSh0aGlzLnBvaW50cyk7XG4gICAgICAgIGNvbnN0IGZsYXQgPSBmbGF0dGVuUG9pbnRzKHNpbXBsaWZpZWQpO1xuICAgICAgICBjb25zdCBjdXJ2ZWQgPSBnZXRDdXJ2ZVBvaW50cyhmbGF0KTtcbiAgICAgICAgdGhpcy5wb2ludHMgPSBleHBhbmRQb2ludHMoY3VydmVkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHJhdyB0aGlzIGVudGl0eSB0byB0aGUgZ2l2ZW4gY29udGV4dC4gQ29udGFpbnMgYWxsIHRoZVxuICAgICAqIGxvZ2ljIHRvIGRyYXcgYSBmcmVlaGFuZCBsaW5lIG9udG8gYSBjb250ZXh0LlxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIFRoZSBjYW52YXMgY29udGV4dCB0byBkcmF3IHRoaXMgZW50aXR5IHRvLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgZHJhdyhjb250ZXh0KSB7XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm90aGluZyB0byBkcmF3LCBzaG9yY2lyY3VpdC5cbiAgICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIFNldCB0aGUgc2NhbGUgdG8gZXF1YWwgdGhlIGRlZmF1bHRcbiAgICAgICAgbGV0IHNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICAgICAgLy8gQ2FjdWxhdGUgdGhlIHNjYWxlIGJhc2VkIG9uIHRoZSBzaXplIG9mIHRoZSBjYW52YXMgY29udGV4dCdzIGNhbnZhc1xuICAgICAgICBpZiAoY29udGV4dC5jYW52YXMud2lkdGggIT09IENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCkge1xuICAgICAgICAgICAgc2NhbGUgPSBjb250ZXh0LmNhbnZhcy53aWR0aCAvIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICAvLyBEcmF3XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gdGhpcy5zaXplICogc2NhbGU7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yLmdldEhleChmYWxzZSk7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvci5nZXRIZXgoZmFsc2UpO1xuICAgICAgICBjb250ZXh0LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgICAgIC8vIFdlIGRlbm9ybWFsaXplIHRoZSBwb2ludHMsIGJhc2VkIG9uIHRoZSBjYW52YXMgc2l6ZSBhbmQgc2NhbGUuXG4gICAgICAgIGNvbnN0IGluaXRpYWxQb2ludCA9IGRlbm9ybWFsaXplKHRoaXMucG9pbnRzWzBdLCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgLy8gTW92ZSB0aGUgdHVydGxlIHRvIHRoaXMucG9pbnRzWzBdXG4gICAgICAgIGNvbnRleHQubW92ZVRvKGluaXRpYWxQb2ludC54LCBpbml0aWFsUG9pbnQueSk7XG4gICAgICAgIC8vIFN0YXJ0IGF0IHRoZSBzZWNvbmQgcG9pbnQgYHRoaXMucG9pbnRzWzFdYFxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBEZW5tb3JtYWxpc2UgY3VycmVudCBwb2ludCB0byBwaXhlbCB2YWx1ZXNcbiAgICAgICAgICAgIGNvbnN0IGRlbm9ybWFsaXplZCA9IGRlbm9ybWFsaXplKHRoaXMucG9pbnRzW2ldLCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIERyYXcgYSBsaW5lIHRvIHRoZSBzZWNvbmQgcG9pbnQgdGhpcy5wb2ludHNbMV0gXG4gICAgICAgICAgICAvLyBhbmQgY29udGludWUgdG8gdGhlIG5leHQgb25lLlxuICAgICAgICAgICAgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhkZW5vcm1hbGl6ZWQueCwgZGVub3JtYWxpemVkLnkpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBtb3JlIHRoYW4gMiBwb2ludHMgYW5kIHRoZSBjdXJyZW50IHBvaW50IGlzbid0IHRoZSBsYXN0IG9uZS4uLlxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA+IDIgJiYgaSA8ICh0aGlzLnBvaW50cy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgIC8vIERlbm9ybWFsaXNlIHRoZSBuZXh0IHBvaW50LCBzbyB0aGF0IHdlIGNhbiBkcmF3IGEgcXVhZHJhdGljIGN1cnZlIHRvIGl0XG4gICAgICAgICAgICAgICAgY29uc3QgZGVub21hbGl6ZWROZXh0ID0gZGVub3JtYWxpemUodGhpcy5wb2ludHNbaSArIDFdLCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAvLyBDYWx1bGF0ZSB0aGUgbWlkLXBvaW50IGJldHdlZW4gY3VycmVudCBhbmQgbmV4dCBwb2ludHNcbiAgICAgICAgICAgICAgICB2YXIgYyA9IChkZW5vcm1hbGl6ZWQueCArIGRlbm9tYWxpemVkTmV4dC54KSAvIDI7XG4gICAgICAgICAgICAgICAgdmFyIGQgPSAoZGVub3JtYWxpemVkLnkgKyBkZW5vbWFsaXplZE5leHQueSkgLyAyO1xuICAgICAgICAgICAgICAgIC8vIERyYXcgdGhlIHF1YWRyYXRpYyBjdXJ2ZSB0byB0aGlzIHBvaW50XG4gICAgICAgICAgICAgICAgY29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvKGRlbm9ybWFsaXplZC54LCBkZW5vcm1hbGl6ZWQueSwgYywgZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UganVzdCBkcmF3IGEgc2ltcGxlIGxpbmVcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhkZW5vcm1hbGl6ZWQueCwgZGVub3JtYWxpemVkLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFN0cm9rZSBpdC4g1IUo4omW4oyj4omW1IUpXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERyYXdzIHRvb2wgZ3VpZGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgW2NvbnRleHQgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkcmF3R3VpZGVzKGNvbnRleHQpIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IDEwO1xuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vdGhpbmcgdG8gZHJhdywgc2hvcmNpcmN1aXQuXG4gICAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGggPCAxKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB2ZWN0b3IgPSBkZW5vcm1hbGl6ZSh0aGlzLnBvaW50c1tpXSwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCIjODg4OEZGXCI7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICBjb250ZXh0LnJlY3QodmVjdG9yLnggLSAoc2l6ZSAvIDIpLCB2ZWN0b3IueSAtIChzaXplIC8gMiksIHNpemUsIHNpemUpO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGQgYSBwb2ludCB0byB0aGUgY2FudmFzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7VmVjdG9yfSAgbG9jYXRpb24gIFtsb2NhdGlvbiBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGFkZChsb2NhdGlvbikge1xuICAgICAgICAvLyBQb2ludHMgYXJlIG5vcm1hbGl6ZWQgdG8geDogMC4wIC0gMS4wLCB5OiAwLjAgLSAxLjAsIGFzIHVzaW5nIHBpeGVsIHZhbHVlcyBpcyByZXN0cmljdGl2ZVxuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKG5vcm1hbGl6ZShsb2NhdGlvbiwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0KSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHVkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFycmF5IG9mIGl0ZW1zIHRvIHJlbmRlciBmb3IgdGhlIEh1ZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtBcnJheTxIdWRJdGVtPn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHdlIHdhbnQgdGhlIEhVRCB0byBiZSB2aXNpYmxlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogUG9zaXRpb24gb2YgdGhlIG1vdXNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge1ZlY3Rvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY3Vyc29yX3Bvc2l0aW9uID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV291bGQgcmVuZGVyIGFueSBjYW52YXMgYmFzZWQgaHVkIGl0ZW1zLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyByZW5kZXJpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRleHQpIHtcbiAgICAgICAgLy8gTm90aGluZyBoZXJlIHlldC5cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGN1cnNvciBhbmQgaHVkIGludGVyc2VjdHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBkZWx0YSAgW2RlbHRhIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHByb2Nlc3MoZGVsdGEpIHtcbiAgICAgICAgLy8gTm90aGluZyBoZXJlIHlldC5cbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkIGFuIGl0ZW0gdG8gdGhlIEhVRFxuICAgICAqXG4gICAgICogQHBhcmFtICAge0h1ZEl0ZW19ICBpdGVtICBJdGVtIHRoYXQgaW5oZXJpdHMgZnJvbSB0aGUgSHV0SXRlbSBhYnN0cmFjdCBjbGFzc1xuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgaXRlbS5idWlsZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSByZWZlcmVuY2UgdG8gYSBodWQgaXRlbSBieSBuYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgIG5hbWUgIHRoZSBuYW1lIG9mIHRoZSBodWQgaXRlbSB0byByZXRyaWV2ZVxuICAgICAqXG4gICAgICogQHJldHVybiAge0h1ZEl0ZW18bnVsbH0gICB0aGUgaHVkIGl0ZW0gaWYgZm91bmQgb3RoZXJ3aXNlIG51bGwuXG4gICAgICovXG4gICAgZ2V0QnlOYW1lKG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc1tpXS5uYW1lID09PSBuYW1lKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFja3MgdGhlIGN1cnNvciBwb3NpdGlvbiBmb3IgaHVkIHVzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3J9ICBwb3NpdGlvbiAgUG9zaXRpb24gb2YgdGhlIG1vdXNlLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0Q3Vyc29yUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5jdXJzb3JfcG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIdWRJdGVtIHtcbiAgICAvKipcbiAgICAgKiBIdWQgSXRlbXMgbmVlZCBhIG5hbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBuYW1lICBUaGUgbmFtZSBmb3IgdGhlIGl0ZW1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19XG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsIGFueSB1cGRhdGUgZnVuY3Rpb25zIHRoYXQgbmVlZCB0byBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgSHVkSXRlbSBmcm9tIFwiLi9odWRfaXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXJzIGV4dGVuZHMgSHVkSXRlbSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCB0aGUgbGF5ZXJzIHNlY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtEcmF3aW5nfSAgZHJhd2luZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRyYXdpbmcpIHtcbiAgICAgICAgc3VwZXIoXCJsYXllcnNcIik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIVE1MIERpdiBFbGVtZW50LCB3aGVyZSB0aGUgSFRNTENhbnZhc0VsZW1lbnQgbGF5ZXJzIHdpbGwgYmUgY3JlYXRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7SFRNTERpdkVsZW1lbnQgfCBudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICB0aGlzLnRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXllcnMnKTtcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gZHJhd2luZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgdGhlIGxheWVycyBVSSwgdGhpcyBlbXB0aWVzIHRoZW4gY3JlYXRlc1xuICAgICAqIEhUTUxDYW52YXNFbGVtZW50cyBpbnNpZGUgdGhlIGB0aGlzLnRhcmdldGAgSFRNTERpdkVsZW1lbnRcbiAgICAgKiBUaGlzIGdpdmVzIHVzIHRoZSBsYXllciBvdmVydmlldyBvbiB0aGUgcmlnaHQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyYXdpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy50YXJnZXQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMudGFyZ2V0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCB3aWR0aCA9IENvbnN0YW50cy5MQVlFUlNfV0lEVEg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9ICh3aWR0aCAvIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCkgKiBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0O1xuICAgICAgICBmb3IgKGxldCBba2V5LCBsYXllcl0gb2YgdGhpcy5kcmF3aW5nLmxheWVycykge1xuICAgICAgICAgICAgbGF5ZXIuZHJhdyh0aGlzLnRhcmdldCwgd2lkdGgsIGhlaWdodCwgdGhpcy5kcmF3aW5nLmFjdGl2ZV9sYXllciA9PT0gbGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IENvbG9yIGZyb20gXCIuLi91dGlsL2NvbG9yXCI7XG5pbXBvcnQgSHVkSXRlbSBmcm9tIFwiLi9odWRfaXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFsZXR0ZSBleHRlbmRzIEh1ZEl0ZW0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgdGhlIFBhbGV0dGUgSFVEIGl0ZW1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXCJwYWxldHRlXCIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdCBvZiBhdmFpbGFibGUgY29sb3JzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge0FycmF5PENvbG9yPn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29sb3JzID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbG9yXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge0NvbG9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZWxlY3RlZF9jb2xvciA9IG5ldyBDb2xvcigwLCAwLCAwLCAwLjUpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb2xvciBpbmRleCwgdGhpcyBpcyB0aGUgaW5kZXhcbiAgICAgICAgICogaW4gYHRoaXMuY29sb3JzYCBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbG9yXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRfY29sb3JfaW5kZXggPSAxO1xuICAgICAgICBmb3IgKHZhciBjb2xvciBvZiBDb25zdGFudHMuQ09MT1JTKSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9ycy5wdXNoKG5ldyBDb2xvcihjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iLCBjb2xvci5hKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgdGhlIFVJLCB0aGlzIGZpbmRzIHRoZSBIVE1MRGl2RWxlbWVudCB3aXRoIHRoZVxuICAgICAqIElEIGBwYWxldHRlYCBhbmQgY2xlYXJzIGl0IG91dCwgdGhlbiBwbGFjZXMgYW5vdGhlclxuICAgICAqIEhUTUxEaXZFbGVtZW50IGluc2lkZSBmb3IgZXZlcnkgY29sb3IgaW4gYHRoaXMuY29sb3JzYFxuICAgICAqIGFuZCBzZXRzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSBjb2xvciBvZiBlYWNoIGNvbG9yLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWxldHRlJyk7XG4gICAgICAgIGlmICghdGFyZ2V0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBFbXB0eSB0aGUgdGFyZ2V0XG4gICAgICAgIHRhcmdldC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgLy8gQWRkIGVhY2ggb2YgdGhlIGNvbG91cnMgYXMgYSBEaXYgd2l0aCBhIGJhY2tncm91bmQgY29sb3JcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmNvbG9yc1tpXS5nZXRIZXgoKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgY2xhc3MgYGNvbG9yYCB3aGljaCBhcHBsaWVzIHRoZSBzdHlsZXNcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiY29sb3JcIik7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29sb3IsIHNvIGFkZCB0aGUgYXBwcm9wcmlhdGUgY2xhc3NcbiAgICAgICAgICAgIGlmIChpID09PSB0aGlzLnNlbGVjdGVkX2NvbG9yX2luZGV4KVxuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENvbG9ySW5kZXgoaSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhcmdldCA9PT0gbnVsbCB8fCB0YXJnZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhcmdldC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb2xvclxuICAgICAqXG4gICAgICogQHJldHVybiAge0NvbG9yfSAgIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29sb3JcbiAgICAgKi9cbiAgICBnZXRDb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRfY29sb3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGluZGV4IG9mIHRoZSBzZWxlY3RlZCBjb2xvdXIgYW5kXG4gICAgICogdXBkYXRlcyB0aGUgc2VsZWN0ZWQgY29sb3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBpbmRleFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0Q29sb3JJbmRleChpbmRleCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkX2NvbG9yX2luZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRfY29sb3IgPSB0aGlzLmNvbG9yc1t0aGlzLnNlbGVjdGVkX2NvbG9yX2luZGV4XTtcbiAgICAgICAgLy8gUnVuIGFueSBHVUkgdXBkYXRlc1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBNYXJrZXIgZnJvbSBcIi4uL3Rvb2xzL21hcmtlclwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vdG9vbHMvc2VsZWN0XCI7XG5pbXBvcnQgSHVkSXRlbSBmcm9tIFwiLi9odWRfaXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbGJhciBleHRlbmRzIEh1ZEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRyYXdpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgICAgIHRoaXMudG9vbHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNlbGVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJmcmVlaGFuZFwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZyZWVoYW5kXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gZHJhd2luZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogW3NldFRvb2wgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgdG9vbCAgW3Rvb2wgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBzZXRUb29sKHRvb2wpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgc3dpdGNoICh0b29sKSB7XG4gICAgICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFRvb2wobmV3IFNlbGVjdCh0aGlzLmRyYXdpbmcpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZyZWVoYW5kJzpcbiAgICAgICAgICAgICAgICAoX2IgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zZXRUb29sKG5ldyBNYXJrZXIodGhpcy5kcmF3aW5nKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgdGhlIHRvb2xiYXJcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGJ1aWxkKCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvb2xzXCIpO1xuICAgICAgICBpZiAoIXRhcmdldClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGFyZ2V0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBmb3IgKGxldCB0b29sIG9mIHRoaXMudG9vbHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IHRvb2wudGl0bGU7XG4gICAgICAgICAgICBidXR0b24uaWQgPSB0b29sLmtleTtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb29sKHRvb2wua2V5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllciB7XG4gICAgLyoqXG4gICAgICogU2V0IHVwIHRoZSBMYXllclxuICAgICAqXG4gICAgICogQHBhcmFtICAge0RyYXdpbmd9ICBkcmF3aW5nICBEcmF3aW5nIHJlZmVyZW5jZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlkLCBkcmF3aW5nKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIExheWVycyBJRFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlkID0gLTE7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgZHJhd24gZW50aXRpZXMsIHRoZXNlIHdpbGwgYWxsIGdldFxuICAgICAgICAgKiBwcm9jZXNzZWQgYW5kIHJlbmRlcmVkIHdoZW4gdGhlIG5lZWQgdG8gYmVcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciAge01hcDxudW1iZXIsIEVudGl0eT59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmVudGl0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGFjdGl2ZSBlbnRpdHlcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7RW50aXR5IHwgbnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWN0aXZlX2VudGl0eSA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbnRpdHkgaW5jcmVtZW50YWwgbnVtYmVyLCB1c2VkIHRvIHRyYWNrIHVuaXF1ZSBudW1lcmljYWxcbiAgICAgICAgICogaWQgb2YgYWxsIGVudGl0aWVzIGxvYWRlZCBvbnRvIHRoZSBjYW52YXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5lbnRpdHlfaWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVmZXJlbmNlIHRvIHRoZSBtYWluIERyYXdpbmdcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7RHJhd2luZyB8IG51bGx9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRyYXdpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuZHJhd2luZyA9IGRyYXdpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZW50aXR5IHRvIHRoZSBnYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7RW50aXR5fSAgZW50aXR5ICBFbnRpdHkgdG8gYWRkIHRvIHRoZSBnYW1ld29ybGRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGFkZEVudGl0eShlbnRpdHkpIHtcbiAgICAgICAgZW50aXR5LmlkID0gdGhpcy5lbnRpdHlfaWQ7XG4gICAgICAgIGVudGl0eS5kcmF3aW5nID0gdGhpcy5kcmF3aW5nO1xuICAgICAgICB0aGlzLmVudGl0aWVzLnNldCh0aGlzLmVudGl0eV9pZCwgZW50aXR5KTtcbiAgICAgICAgdGhpcy5lbnRpdHlfaWQgKz0gMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2FyYmFnZSBjbGVhbiB1cCwgcmVtb3ZlcyBhbnkgZW50aXRpZXMgdGhhdCBhcmUgc2NoZWR1bGUgZm9yIHJlbW92YWxcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbW92ZUVudGl0aWVzKCkge1xuICAgICAgICBjb25zdCBpZHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgW2tleSwgZW50aXR5XSBvZiB0aGlzLmVudGl0aWVzKSB7XG4gICAgICAgICAgICBpZiAoZW50aXR5LnJlbW92ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50aXRpZXMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBFbnRpdHkgZ2l2ZW4gYW4gSURcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBpZCAgRW50aXRpIG51bWVyaWNhbCBJRFxuICAgICAqXG4gICAgICogQHJldHVybiAge0VudGl0eX1cbiAgICAgKi9cbiAgICBnZXRFbnRpdHkoaWQpIHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy5lbnRpdGllcy5nZXQoaWQpO1xuICAgICAgICBpZiAoZW50aXR5KVxuICAgICAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBjb3VudCBvZiBlbnRpdGVzIGJ5IHR5cGUsIGlmIG5vIHR5cGUgc3BlY2lmaWVkLFxuICAgICAqIHRoZW4gcmV0dW5yIGNvdW50IG9mIGFsbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICB0eXBlICBFbnRpdHkgVHlwZXxOYW1lIFtvcHRpb25hbF1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtudW1iZXJ9ICAgICAgICBOdW1iZXIgb2YgZW50aXRpZXNcbiAgICAgKi9cbiAgICBjb3VudEVudGl0aWVzKHR5cGUpIHtcbiAgICAgICAgLy8gTm8gdHlwZSBzcGVjaWZpY2UsIHNvIGluY2x1ZGUgYWxsIGVudGl0aWVzLlxuICAgICAgICBpZiAoIXR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbnRpdGllcy5zaXplO1xuICAgICAgICAvLyBBIHR5cGUgd2FzIHNwZWNpZmllZCwgc28gY2hlY2sgdHlwZSBiZWZvcmUgYWRkaW5nXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAobGV0IFtrZXksIGVudGl0eV0gb2YgdGhpcy5lbnRpdGllcykge1xuICAgICAgICAgICAgaWYgKGVudGl0eS5uYW1lID09IHR5cGUgJiYgZW50aXR5LnJlbW92ZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIGFueSB1cGRhdGVzIHRoYXQgbmVlZCB0byBiZSByZW5kZXJlZCBuZXh0IHRpY2suIFdlXG4gICAgICogaGF2ZSB0aGUgYWJpbGl0eSB0byByZW1vdmUgdGhlIGVudGl0aWVzIG9uZSBieSBvbmUuIFRoYXQnc1xuICAgICAqIHN0aWxsIGEgVE9ETyB0aG91Z2guXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgICAgICAgICAgICAgIGRlbHRhdGltZSAgICAgICAgVGhlIHRpbWUgc2luY2UgbGFzdCB0aWNrXG4gICAgICogQHBhcmFtICAge0RPTUhpZ2hSZXNUaW1lU3RhbXB9ICB0aW1lc3RhbXAgICAgICAgIEN1cnJlbnQgdGltZXN0YW1wXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm9jZXNzKGRlbHRhdGltZSwgdGltZXN0YW1wKSB7XG4gICAgICAgIGZvciAobGV0IFtrZXksIGVudGl0eV0gb2YgdGhpcy5lbnRpdGllcykge1xuICAgICAgICAgICAgaWYgKGVudGl0eS5yZW1vdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0aWVzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhbGwgdGhlIHJlbmRlcmluZyBmb3IgdGhpcyBsYXllcnMgZW50aXRpZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBUaGUgY2FudmFzIGNvbnRleHQgZm9yIGFwcGx5aW5nIHRoZSBlbnRpdHkgcmVkZXJzIHRvXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICByZW5kZXIoY29udGV4dCkge1xuICAgICAgICAvLyBSZW5kZXIgZWFjaCBvZiB0aGUgZXhpc3RpbmcgZW50aXRpdGVzLiAoRHJhd2luZ3MpXG4gICAgICAgIGZvciAobGV0IFtrZXksIGVudGl0eV0gb2YgdGhpcy5lbnRpdGllcykge1xuICAgICAgICAgICAgZW50aXR5LnJlbmRlcihjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBVSSBkcmF3aW5nIG9mIGEgbGF5ZXIgaW4gdGhlIGxheWVyIG92ZXJ2aWV3XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7SFRNTERpdkVsZW1lbnR9ICAgICBwYXJlbnQgIFRoZSBEaXYgZWxlbWVudCB0byByZW5kZXIgaW50b1xuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICAgICAgICAgICAgIHdpZHRoICAgVGhlIHRhcmdldCB3aWR0aCBvZiB0aGUgY2FudmFzXG4gICAgICogQHBhcmFtICAge251bWJlcn0gICAgICAgICAgICAgaGVpZ2h0ICBUaGUgdGFyZ2V0IGhlaWdodCBvZiB0aGUgY2FudmFzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBkcmF3KHBhcmVudCwgd2lkdGgsIGhlaWdodCwgYWN0aXZlKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbmV3IENhbnZhcyBFbGVtZW50XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIC8vIFNldCBhbGwgaXQncyBwcm9wZXJ0aWVzXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjYW52YXMuaWQgPSBgbGF5ZXItJHt0aGlzLmlkfWA7XG4gICAgICAgIGNhbnZhcy5jbGFzc0xpc3QuYWRkKCdsYXllcicpO1xuICAgICAgICAvLyBMaXN0ZW4gZm9yIHRoZSBzZWxlY3RlZCBsYXllciBjbGlja1xuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIChfYSA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldEFjdGl2ZUxheWVyKHRoaXMuaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gU2V0IHRoZSBhY3RpdmUgY2xhc3MgaWYgaXQncyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG9uZS5cbiAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgY2FudmFzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5ld2VyIGxheWVycyBnbyBvbiB0b3AsIHNvIGBpbnNlcnRCZWZvcmVgIGlzIHVzZWRcbiAgICAgICAgcGFyZW50ID09PSBudWxsIHx8IHBhcmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50Lmluc2VydEJlZm9yZShjYW52YXMsIHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgICAgLy8gR2V0IHRoZSBjb250ZXh0IGZvciByZW5kZXJpbmdcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBpZiAoY29udGV4dCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBSZW5kZXIgZWFjaCBvZiB0aGUgZW50aXRpZXMgdG8gdGhlIG5ldyBIVE1MQ2FudmFzRWxlbWVudFxuICAgICAgICBmb3IgKGxldCBba2V5LCBlbnRpdHldIG9mIHRoaXMuZW50aXRpZXMpIHtcbiAgICAgICAgICAgIGVudGl0eS5yZW5kZXIoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgRnJlZWhhbmQgZnJvbSBcIi4uL2VudGl0aWVzL2ZyZWVoYW5kXCI7XG5pbXBvcnQgVG9vbCBmcm9tIFwiLi90b29sXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZXIgZXh0ZW5kcyBUb29sIHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIG1hcmtlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRyYXdpbmcpIHtcbiAgICAgICAgc3VwZXIoZHJhd2luZywgJ21hcmtlcicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGlsZSBkcmF3aW5nIChtb3VzZWRvd24pIGNvbnN0YW50bHkgYWRkIHRoZSBjdXJyZW50IGN1cnNvclxuICAgICAqIGxvY2F0aW9uIHRvIHRoZSBhY3RpdmUgZW50aXR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIHJlZGVyaW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXcoY29udGV4dCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVfZW50aXR5KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9lbnRpdHkuYWRkKHRoaXMubG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGVudGl0eSB0aGlzIGBUb29sYCBjcmVhdGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiAge0VudGl0eX0gIFRoZSBlbnRpdHkgdG8gYmUgYWRkZWQgdG8gdGhlIGxheWVyXG4gICAgICovXG4gICAgZ2V0RW50aXR5KCkge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuZHJhd2luZy5nZXRDb2xvcigpO1xuICAgICAgICByZXR1cm4gbmV3IEZyZWVoYW5kKHRoaXMuc2l6ZSwgY29sb3IpO1xuICAgIH1cbn1cbiIsImltcG9ydCBGcmVlaGFuZCBmcm9tIFwiLi4vZW50aXRpZXMvZnJlZWhhbmRcIjtcbmltcG9ydCBUb29sIGZyb20gXCIuL3Rvb2xcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIFRvb2wge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgbWFya2VyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZHJhd2luZykge1xuICAgICAgICBzdXBlcihkcmF3aW5nLCAnc2VsZWN0Jyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoaWxlIGRyYXdpbmcgKG1vdXNlZG93bikgY29uc3RhbnRseSBhZGQgdGhlIGN1cnJlbnQgY3Vyc29yXG4gICAgICogbG9jYXRpb24gdG8gdGhlIGFjdGl2ZSBlbnRpdHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBDYW52YXMgcmVkZXJpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgZHJhdyhjb250ZXh0KSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGVudGl0eSB0aGlzIGBUb29sYCBjcmVhdGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiAge0VudGl0eX0gIFRoZSBlbnRpdHkgdG8gYmUgYWRkZWQgdG8gdGhlIGxheWVyXG4gICAgICovXG4gICAgZ2V0RW50aXR5KCkge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuZHJhd2luZy5nZXRDb2xvcigpO1xuICAgICAgICByZXR1cm4gbmV3IEZyZWVoYW5kKHRoaXMuc2l6ZSwgY29sb3IpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xuaW1wb3J0IGRyYXdDaXJjbGUgZnJvbSBcIi4uL3V0aWwvY2lyY2xlXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4uL3V0aWwvY29sb3JcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2wge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSAgIHtEcmF3aW5nfSAgZHJhd2luZyAgTWFpbiBkcmF3aW5nIGNhbnZhc1xuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgbmFtZSAgICAgVGhlIG5hbWUgb2YgdGhlIHRvb2xcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkcmF3aW5nLCBuYW1lKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOYW1lIG9mIHRoZSB0b29sXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9ICcnO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2lkdGggb2YgdGhlIHRvb2xcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zaXplID0gMjA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUYXJnZXQgQ29sb3JcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7Q29sb3J9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRhcmdldF9jb2xvciA9IG5ldyBDb2xvcigxMjgsIDEyOCwgMjU1LCAwLjIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogTG9jYXRpb24gb2YgdGhlIHRvb2xcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7VmVjdG9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG5ldyBWZWN0b3IoMCwgMCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyB0aGUgdG9vbCBkb3duIChkcmF3aW5nKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pc19kcmF3aW5nID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudCBlbnRpdHkgYmVpbmcgZHJhd25cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7RW50aXR5IHwgbnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWN0aXZlX2VudGl0eSA9IG51bGw7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZHJhd2luZyA9IGRyYXdpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCdzIHRoZSBsb2NhdGlvbiBvZiB0aGUgdG9vbFxuICAgICAqXG4gICAgICogQHBhcmFtICAge1ZlY3Rvcn0gIGxvY2F0aW9uICBMb2NhdGlvbiBvZiB0aGUgdG9vbFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0TG9jYXRpb24obG9jYXRpb24pIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdGFydCBkcmF3aW5nLCBjcmVhdGUgdGhlIHRvb2wncyBgRW50aXR5YCBhbmRcbiAgICAgKiBzZXRzIGl0IGFzIGFjdGl2ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHN0YXJ0RHJhd2luZygpIHtcbiAgICAgICAgdGhpcy5zZXRJc0RyYXdpbmcodHJ1ZSk7XG4gICAgICAgIHRoaXMuYWN0aXZlX2VudGl0eSA9IHRoaXMuZ2V0RW50aXR5KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHNpemUgb2YgdGhlIGJydXNoL2xpbmUvc3Ryb2tlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgc2l6ZSAgU2l6ZSBpbiBwaXhlbHMgb2YgdGhlIHJhZGl1c1xuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0U2l6ZShzaXplKSB7XG4gICAgICAgIGlmIChzaXplID4gMClcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IE1hdGgubWluKHNpemUsIDEwMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0b3BzIGRyYXdpbmcsIGFkZHMgZW5ldGl0eSBjb21wbGV0ZSB0aW1lLCBhZGRzIHRoZVxuICAgICAqIGVudGl0eSB0byB0aGUgZHJhd2luZywgd2hpY2ggd2lsbCBwYXNzIGl0IHRvIHRoZVxuICAgICAqIGFjdGl2ZSBsYXllcmFuZCByZXNldHMgdGhlIGFjdGl2ZSBlbnRpdHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBzdG9wRHJhd2luZygpIHtcbiAgICAgICAgdGhpcy5zZXRJc0RyYXdpbmcoZmFsc2UpO1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVfZW50aXR5KSB7XG4gICAgICAgICAgICAvLyBSdW4gdGhlIGNvbXBsZXRpb24gZnVuY3Rpb25zXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9lbnRpdHkuY29tcGxldGUoKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgY29tcGxldGVkIGVudGl0eSB0byB0aGUgZHJhd2luZ1xuICAgICAgICAgICAgdGhpcy5kcmF3aW5nLmFkZEVudGl0eSh0aGlzLmFjdGl2ZV9lbnRpdHkpO1xuICAgICAgICAgICAgLy8gcmVzZXQgdGhlIGFjdGl2ZSBlbnRpdHlcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX2VudGl0eSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZHJhd2luZyBzdGF0ZSBvZiB0aGUgdG9vbFxuICAgICAqXG4gICAgICogQHBhcmFtICAge2Jvb2xlYW59ICBzdGF0ZSAgSXMgdGhlIHRvb2wgZHJhd2luZ1xuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0SXNEcmF3aW5nKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuaXNfZHJhd2luZyA9IHN0YXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEcmF3IHRoZSB0b29sIHRhcmdldFxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyBkcmF3aW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXdUYXJnZXQoY29udGV4dCkge1xuICAgICAgICBkcmF3Q2lyY2xlKGNvbnRleHQsIHRoaXMubG9jYXRpb24sIHRoaXMudGFyZ2V0X2NvbG9yLCB0aGlzLnNpemUpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogRHJhdyBhIGNpcmNsZSBvbiB0aGUgY29udGV4dCBnaXZlblxuICpcbiAqIEB2YXIge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgICBDYW52YXMgcmVuZGVyaW5nIGNvbnRleHQgdG8gZHJhdyB3aXRoXG4gKiBAdmFyIHtWZWMyLlZlY3Rvcn0gICAgICAgICAgICAgICBsb2NhdGlvbiAgV2hlcmUgdG8gZHJhdyB0aGUgY2lyY2xlXG4gKiBAdmFyIHtDb2xvcn0gICAgICAgICAgICAgICAgICAgICBjb2xvciAgICAgQ29sb3IgdG8gZHJhdyB3aXRoXG4gKiBAdmFyIHtudW1iZXJ9ICAgICAgICAgICAgICAgICAgICBzaXplICAgICAgRGlhbWV0ZXIgaW4gcGl4ZWxzXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYXdDaXJjbGUoY29udGV4dCwgbG9jYXRpb24sIGNvbG9yLCBzaXplKSB7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmFyYyhsb2NhdGlvbi54LCBsb2NhdGlvbi55LCBNYXRoLnJvdW5kKHNpemUgLyAyKSwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yLmdldFJnYlN0cmluZygpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3IuZ2V0UmdiU3RyaW5nKCk7XG4gICAgY29udGV4dC5zdHJva2UoKTtcbn1cbiIsIi8qKlxuICogQ29sb3VyIGhlbHBlciwgdXNlZnVsIGZvciBjb252ZXJ0aW5nIGJldHdlZW4gY29sb3VyIGZvcm1hdHMuXG4gKiBUaGlzIGlzIHByb2JhYmx5IG5vdCByZWFsbHkgbmVlZGVkIGZvciB0aGUgVFMvSlMgdmVyc2lvbiBidXQgaXNcbiAqIG1vcmUgb2YgYSBoYW5nb3ZlciBmcm9tIHRoZSBEYXJ0IHZlcnNpb24gb2YgdGhlIGdhbWUuIFdhcyBnb29kXG4gKiBsZWFybmluZyBjb252ZXJ0aW5nIGl0IHRvIGphdmFzY3JpcHQvdHlwZXNjcmlwdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3Ige1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICByICByZWQgWzAgLSAyNTVdXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIGcgIGdyZWVuIFswIC0gMjU1XVxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBiICBibHVlIFswIC0gMjU1XVxuICAgICAqIEBwYXJhbSAgIHtudW1iZXI/fSAgYSAgYWxwaGEgWzAuMCAtIDEuMF1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyLCBnLCBiLCBhID0gMS4wKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiByZWRcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGdyZWVuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZyA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBibHVlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYiA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhbHBoYVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmEgPSAwLjA7XG4gICAgICAgIHRoaXMuciA9IHI7XG4gICAgICAgIHRoaXMuZyA9IGc7XG4gICAgICAgIHRoaXMuYiA9IGI7XG4gICAgICAgIHRoaXMuYSA9IGE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgUkdCIHZhbHVlc1xuICAgICAqXG4gICAgICogQHJldHVybiAge0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgZ2V0UmdiKCkge1xuICAgICAgICByZXR1cm4gW3RoaXMuciwgdGhpcy5nLCB0aGlzLmJdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIFJHQiB2YWx1ZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtBcnJheTxudW1iZXI+fVxuICAgICAqL1xuICAgIGdldFJnYmEoKSB7XG4gICAgICAgIHJldHVybiBbdGhpcy5yLCB0aGlzLmcsIHRoaXMuYiwgdGhpcy5hXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBSR0IgdmFsdWVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7QXJyYXk8bnVtYmVyPn1cbiAgICAgKi9cbiAgICBnZXRSZ2JTdHJpbmcod2l0aEFscGhhID0gdHJ1ZSkge1xuICAgICAgICBpZiAod2l0aEFscGhhID09PSB0cnVlKVxuICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7dGhpcy5yfSwgJHt0aGlzLmd9LCAke3RoaXMuYn0sICR7dGhpcy5hfSlgO1xuICAgICAgICByZXR1cm4gYHJnYigke3RoaXMucn0sICR7dGhpcy5nfSwgJHt0aGlzLmJ9KWA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBhcnJheSBvZiBIU0wgdmFsdWVzXG4gICAgICpcbiAgICAgKiBGcm9tOiBodHRwczovL2Nzcy10cmlja3MuY29tL2NvbnZlcnRpbmctY29sb3Itc3BhY2VzLWluLWphdmFzY3JpcHQvXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7QXJyYXk8bnVtYmVyPn1cbiAgICAgKi9cbiAgICBnZXRIc2woKSB7XG4gICAgICAgIC8vIE1ha2UgciwgZywgYW5kIGIgZnJhY3Rpb25zIG9mIDFcbiAgICAgICAgY29uc3QgciA9IHRoaXMuciAvIDI1NTtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMuZyAvIDI1NTtcbiAgICAgICAgY29uc3QgYiA9IHRoaXMuYiAvIDI1NTtcbiAgICAgICAgLy8gRmluZCBncmVhdGVzdCBhbmQgc21hbGxlc3QgY2hhbm5lbCB2YWx1ZXNcbiAgICAgICAgbGV0IGNtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICAgICAgbGV0IGNtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICAgICAgbGV0IGRlbHRhID0gY21heCAtIGNtaW47XG4gICAgICAgIGxldCBoID0gMDtcbiAgICAgICAgbGV0IHMgPSAwO1xuICAgICAgICBsZXQgbCA9IDA7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBodWVcbiAgICAgICAgLy8gTm8gZGlmZmVyZW5jZVxuICAgICAgICBpZiAoZGVsdGEgPT0gMCkge1xuICAgICAgICAgICAgaCA9IDA7XG4gICAgICAgICAgICAvLyBSZWQgaXMgbWF4XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY21heCA9PSByKSB7XG4gICAgICAgICAgICBoID0gKChnIC0gYikgLyBkZWx0YSkgJSA2O1xuICAgICAgICAgICAgLy8gR3JlZW4gaXMgbWF4XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY21heCA9PSBnKSB7XG4gICAgICAgICAgICBoID0gKGIgLSByKSAvIGRlbHRhICsgMjtcbiAgICAgICAgICAgIC8vIEJsdWUgaXMgbWF4XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoID0gKHIgLSBnKSAvIGRlbHRhICsgNDtcbiAgICAgICAgfVxuICAgICAgICBoID0gTWF0aC5yb3VuZChoICogNjApO1xuICAgICAgICAvLyBNYWtlIG5lZ2F0aXZlIGh1ZXMgcG9zaXRpdmUgYmVoaW5kIDM2MMKwXG4gICAgICAgIGlmIChoIDwgMCkge1xuICAgICAgICAgICAgaCArPSAzNjA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2FsY3VsYXRlIGxpZ2h0bmVzc1xuICAgICAgICBsID0gKGNtYXggKyBjbWluKSAvIDI7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBzYXR1cmF0aW9uXG4gICAgICAgIHMgPSBkZWx0YSA9PSAwID8gMCA6IGRlbHRhIC8gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKTtcbiAgICAgICAgLy8gTXVsdGlwbHkgbCBhbmQgcyBieSAxMDBcbiAgICAgICAgcyA9ICsocyAqIDEwMCkudG9GaXhlZCgxKTtcbiAgICAgICAgbCA9ICsobCAqIDEwMCkudG9GaXhlZCgxKTtcbiAgICAgICAgcmV0dXJuIFtoLCBzLCBsXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIEhFWCB2YWx1ZSBvZiBjb2xvdXIgKGlubGN1ZGluZyBhbHBoYSlcbiAgICAgKlxuICAgICAqIEZyb206IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vY29udmVydGluZy1jb2xvci1zcGFjZXMtaW4tamF2YXNjcmlwdC9cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SGV4KHdpdGhBbHBoYSA9IHRydWUpIHtcbiAgICAgICAgbGV0IHIgPSB0aGlzLnIudG9TdHJpbmcoMTYpO1xuICAgICAgICBsZXQgZyA9IHRoaXMuZy50b1N0cmluZygxNik7XG4gICAgICAgIGxldCBiID0gdGhpcy5iLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgbGV0IGEgPSBNYXRoLnJvdW5kKCh0aGlzLmEgKiAyNTUpKS50b1N0cmluZygxNik7XG4gICAgICAgIGlmIChyLmxlbmd0aCA9PSAxKVxuICAgICAgICAgICAgciA9IFwiMFwiICsgcjtcbiAgICAgICAgaWYgKGcubGVuZ3RoID09IDEpXG4gICAgICAgICAgICBnID0gXCIwXCIgKyBnO1xuICAgICAgICBpZiAoYi5sZW5ndGggPT0gMSlcbiAgICAgICAgICAgIGIgPSBcIjBcIiArIGI7XG4gICAgICAgIGlmIChhLmxlbmd0aCA9PSAxKVxuICAgICAgICAgICAgYSA9IFwiMFwiICsgYTtcbiAgICAgICAgaWYgKCF3aXRoQWxwaGEpXG4gICAgICAgICAgICByZXR1cm4gXCIjXCIgKyByICsgZyArIGI7XG4gICAgICAgIHJldHVybiBcIiNcIiArIHIgKyBnICsgYiArIGE7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5RXZlbnRzIHtcbiAgICAvKipcbiAgICAgKiBTZXQgdXAgdGhlIGtleSBldmVudCBoYW5kbGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge0RyYXdpbmd9ICBkcmF3aW5nICBNYWluIGRyYXdpbmcgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRyYXdpbmcpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZmVyZW5jZSB0byB0aGUgbWFpbiBkcmF3aW5nIG9iamVjdFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtEcmF3aW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kcmF3aW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gZHJhd2luZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBhbGwgdGhlIGtleSBldmVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7S2V5Ym9hcmRFdmVudH0gIGV2ZW50IHJlbGF0ZWQgdG8gdGhlIGtleSBkb3duXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBoYW5kbGUoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIGlmICghdGhpcy5kcmF3aW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3aW5nLmFkZExheWVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd4JzpcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmVMYXllcigoX2IgPSB0aGlzLmRyYXdpbmcuYWN0aXZlX2xheWVyKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgIGNhc2UgJzMnOlxuICAgICAgICAgICAgY2FzZSAnNCc6XG4gICAgICAgICAgICBjYXNlICc1JzpcbiAgICAgICAgICAgIGNhc2UgJzYnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHBhbGV0dGUgPSAoX2MgPSB0aGlzLmRyYXdpbmcuaHVkKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZ2V0QnlOYW1lKCdwYWxldHRlJyk7XG4gICAgICAgICAgICAgICAgcGFsZXR0ZS5zZXRDb2xvckluZGV4KHBhcnNlSW50KGV2ZW50LmtleSkgLSAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2UnOlxuICAgICAgICAgICAgICAgIC8vIGxheWVyIHVwXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHJhd2luZy5hY3RpdmVfbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3aW5nLnNldEFjdGl2ZUxheWVyKHRoaXMuZHJhd2luZy5nZXROZXh0TGF5ZXIodGhpcy5kcmF3aW5nLmFjdGl2ZV9sYXllci5pZCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRyYXdpbmcuYWN0aXZlX2xheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd2luZy5zZXRBY3RpdmVMYXllcih0aGlzLmRyYXdpbmcuZ2V0UHJldkxheWVyKHRoaXMuZHJhd2luZy5hY3RpdmVfbGF5ZXIuaWQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgICAgICBjb25zdCBoZWxwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWxwXCIpO1xuICAgICAgICAgICAgICAgIGhlbHAgPT09IG51bGwgfHwgaGVscCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVscC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIGhlbHAgPT09IG51bGwgfHwgaGVscCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVscC5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xuLyoqXG4gKiBOb3JtYWxpemUgYSB2ZWN0b3IuIFRha2VzIGEgdmVjdG9yIGFuZCBhIHNvdXJjZSB3aWR0aCBhbmQgaGVpZ2h0XG4gKiB0aGVuIG5vcm1hbGl6ZXMgaXQgdG8gZmFsbCB3aXRoaW4gdGhlIHJhbmdlIG9mIDAuMCAtIDEuMCByZWxhdGl2ZVxuICogdG8gdGhlIHNvdXJjZSdzIHdpdGggYW5kIGhlaWdodC4gRWZmZWN0aXZlbHkgYmVjb21pbmcgYSBwZXJjZW50YWdlXG4gKiBvZiB0aGUgdGFyZ2V0LCBpbnN0ZWFkIG9mIGV4YWN0IHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0gICB7VmVjdG9yfSAgdmVjdG9yICAgICAgICAgICAgVGhlIHZlY3RvciB0byBub3JtYWxpemVcbiAqIEBwYXJhbSAgIHtudW1iZXJ9ICBzb3VyY2Vfd2lkdGggICAgICBUaGUgc291cmNlIHdpZHRoXG4gKiBAcGFyYW0gICB7bnVtYmVyfSAgc291cmNlX2hlaWdodCAgICAgVGhlIHNvdXJjZSBoZWlnaHRcbiAqXG4gKiBAcmV0dXJuICB7VmVjdG9yfSAgICAgICAgICAgICAgICAgICAgTm9ybWFsaXplZCB2ZWN0b3IgY29udGFpbmluZyB4eSB2YWx1ZXMgYmV0d2VlbiAwLjAgYW5kIDEuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKHZlY3Rvciwgc291cmNlX3dpZHRoLCBzb3VyY2VfaGVpZ2h0KSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IoKCgxMDAuIC8gc291cmNlX3dpZHRoKSAqIHZlY3Rvci54KSAvIDEwMC4sICgoMTAwLiAvIHNvdXJjZV9oZWlnaHQpICogdmVjdG9yLnkpIC8gMTAwLik7XG59XG4vKipcbiAqIFRha2VzIGEgbm9ybWFsaXplZCB2ZWN0b3IgKHh5IHdpdGggdmFsdWVzIDAuMCAtIDEuMCkgYW5kIG1hcHMgaXRcbiAqIHRvIHRoZSB0YXJnZXRzIGRpbWVudGlvbnMgKGllIHBpeGVsIHZhbHVlcylcbiAqXG4gKiBAcGFyYW0gICB7VmVjdG9yfSAgbm9ybWFsaXplZF92ZWN0b3IgICBUaGUgdmVjdG9yIHRvIGRlbm9tYWxpemVcbiAqIEBwYXJhbSAgIHtudW1iZXJ9ICB0YXJnZXRfd2lkdGggICAgICAgIFRoZSB0YXJnZXQgd2lkdGhcbiAqIEBwYXJhbSAgIHtudW1iZXJ9ICB0YXJnZXRfaGVpZ2h0ICAgICAgIFRoZSB0YXJnZXQgaGVpZ2h0XG4gKlxuICogQHJldHVybiAge1ZlY3Rvcn0gICAgICAgICAgICAgICAgICAgICAgQSBkZW5vbWFsaXplZCB2ZWN0b3IgY29uYWluaW5nIHh5IHZhbHVlcyBiZXR3ZWVuIDAgYW5kIHRhcmdldF93aWR0aC9oZWlnaHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbm9ybWFsaXplKG5vcm1hbGl6ZWRfdmVjdG9yLCB0YXJnZXRfd2lkdGgsIHRhcmdldF9oZWlnaHQpIHtcbiAgICByZXR1cm4gbmV3IFZlY3Rvcihub3JtYWxpemVkX3ZlY3Rvci54ICogdGFyZ2V0X3dpZHRoLCBub3JtYWxpemVkX3ZlY3Rvci55ICogdGFyZ2V0X2hlaWdodCk7XG59XG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcbi8qKlxuICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZ2Rlbmlzb3YvY2FyZGluYWwtc3BsaW5lLWpzL2Jsb2IvbWFzdGVyL3NyYy9jdXJ2ZV9jYWxjLmpzXG4gKlxuICogQ2FsY3VsYXRlcyBhbiBhcnJheSBjb250YWluaW5nIHBvaW50cyByZXByZXNlbnRpbmcgYSBjYXJkaW5hbCBzcGxpbmUgdGhyb3VnaCBnaXZlbiBwb2ludCBhcnJheS5cbiAqIFBvaW50cyBtdXN0IGJlIGFycmFuZ2VkIGFzOiBbeDEsIHkxLCB4MiwgeTIsIC4uLiwgeG4sIHluXS5cbiAqXG4gKiBUaGUgcG9pbnRzIGZvciB0aGUgY2FyZGluYWwgc3BsaW5lIGFyZSByZXR1cm5lZCBhcyBhIG5ldyBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwb2ludHMgLSBwb2ludCBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IFt0ZW5zaW9uPTAuNV0gLSB0ZW5zaW9uLiBUeXBpY2FsbHkgYmV0d2VlbiBbMC4wLCAxLjBdIGJ1dCBjYW4gYmUgZXhjZWVkZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBbbnVtT2ZTZWc9MjBdIC0gbnVtYmVyIG9mIHNlZ21lbnRzIGJldHdlZW4gdHdvIHBvaW50cyAobGluZSByZXNvbHV0aW9uKVxuICogQHBhcmFtIHtCb29sZWFufSBbY2xvc2U9ZmFsc2VdIC0gQ2xvc2UgdGhlIGVuZHMgbWFraW5nIHRoZSBsaW5lIGNvbnRpbnVvdXNcbiAqIEByZXR1cm5zIHtGbG9hdDMyQXJyYXl9IE5ldyBhcnJheSB3aXRoIHRoZSBjYWxjdWxhdGVkIHBvaW50cyB0aGF0IHdhcyBhZGRlZCB0byB0aGUgcGF0aFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VydmVQb2ludHMocG9pbnRzLCB0ZW5zaW9uID0gMC43LCBudW1PZlNlZyA9IDEsIGNsb3NlID0gZmFsc2UpIHtcbiAgICB2YXIgcHRzLCAvLyBmb3IgY2xvbmluZyBwb2ludCBhcnJheVxuICAgIGkgPSAxLCBsID0gcG9pbnRzLmxlbmd0aCwgclBvcyA9IDAsIHJMZW4gPSAobCAtIDIpICogbnVtT2ZTZWcgKyAyICsgKGNsb3NlID8gMiAqIG51bU9mU2VnIDogMCksIHJlcyA9IG5ldyBGbG9hdDMyQXJyYXkockxlbiksIGNhY2hlID0gbmV3IEZsb2F0MzJBcnJheSgobnVtT2ZTZWcgKyAyKSAqIDQpLCBjYWNoZVB0ciA9IDQ7XG4gICAgY29uc3QgcGFyc2UgPSAocHRzLCBjYWNoZSwgbCkgPT4ge1xuICAgICAgICBmb3IgKHZhciBpID0gMiwgdDsgaSA8IGw7IGkgKz0gMikge1xuICAgICAgICAgICAgdmFyIHB0MSA9IHB0c1tpXSwgcHQyID0gcHRzW2kgKyAxXSwgcHQzID0gcHRzW2kgKyAyXSwgcHQ0ID0gcHRzW2kgKyAzXSwgdDF4ID0gKHB0MyAtIHB0c1tpIC0gMl0pICogdGVuc2lvbiwgdDF5ID0gKHB0NCAtIHB0c1tpIC0gMV0pICogdGVuc2lvbiwgdDJ4ID0gKHB0c1tpICsgNF0gLSBwdDEpICogdGVuc2lvbiwgdDJ5ID0gKHB0c1tpICsgNV0gLSBwdDIpICogdGVuc2lvbjtcbiAgICAgICAgICAgIGZvciAodCA9IDA7IHQgPCBudW1PZlNlZzsgdCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSB0IDw8IDIsIC8vdCAqIDQ7XG4gICAgICAgICAgICAgICAgYzEgPSBjYWNoZVtjXSwgYzIgPSBjYWNoZVtjICsgMV0sIGMzID0gY2FjaGVbYyArIDJdLCBjNCA9IGNhY2hlW2MgKyAzXTtcbiAgICAgICAgICAgICAgICByZXNbclBvcysrXSA9IGMxICogcHQxICsgYzIgKiBwdDMgKyBjMyAqIHQxeCArIGM0ICogdDJ4O1xuICAgICAgICAgICAgICAgIHJlc1tyUG9zKytdID0gYzEgKiBwdDIgKyBjMiAqIHB0NCArIGMzICogdDF5ICsgYzQgKiB0Mnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHB0cyA9IHBvaW50cy5zbGljZSgwKTtcbiAgICBpZiAoY2xvc2UpIHtcbiAgICAgICAgcHRzLnVuc2hpZnQocG9pbnRzW2wgLSAxXSk7IC8vIGluc2VydCBlbmQgcG9pbnQgYXMgZmlyc3QgcG9pbnRcbiAgICAgICAgcHRzLnVuc2hpZnQocG9pbnRzW2wgLSAyXSk7XG4gICAgICAgIHB0cy5wdXNoKHBvaW50c1swXSwgcG9pbnRzWzFdKTsgLy8gZmlyc3QgcG9pbnQgYXMgbGFzdCBwb2ludFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHRzLnVuc2hpZnQocG9pbnRzWzFdKTsgLy8gY29weSAxLiBwb2ludCBhbmQgaW5zZXJ0IGF0IGJlZ2lubmluZ1xuICAgICAgICBwdHMudW5zaGlmdChwb2ludHNbMF0pO1xuICAgICAgICBwdHMucHVzaChwb2ludHNbbCAtIDJdLCBwb2ludHNbbCAtIDFdKTsgLy8gZHVwbGljYXRlIGVuZC1wb2ludHNcbiAgICB9XG4gICAgLy8gY2FjaGUgaW5uZXItbG9vcCBjYWxjdWxhdGlvbnMgYXMgdGhleSBhcmUgYmFzZWQgb24gdCBhbG9uZVxuICAgIGNhY2hlWzBdID0gMTsgLy8gMSwwLDAsMFxuICAgIGZvciAoOyBpIDwgbnVtT2ZTZWc7IGkrKykge1xuICAgICAgICB2YXIgc3QgPSBpIC8gbnVtT2ZTZWcsIHN0MiA9IHN0ICogc3QsIHN0MyA9IHN0MiAqIHN0LCBzdDIzID0gc3QzICogMiwgc3QzMiA9IHN0MiAqIDM7XG4gICAgICAgIGNhY2hlW2NhY2hlUHRyKytdID0gc3QyMyAtIHN0MzIgKyAxOyAvLyBjMVxuICAgICAgICBjYWNoZVtjYWNoZVB0cisrXSA9IHN0MzIgLSBzdDIzOyAvLyBjMlxuICAgICAgICBjYWNoZVtjYWNoZVB0cisrXSA9IHN0MyAtIDIgKiBzdDIgKyBzdDsgLy8gYzNcbiAgICAgICAgY2FjaGVbY2FjaGVQdHIrK10gPSBzdDMgLSBzdDI7IC8vIGM0XG4gICAgfVxuICAgIGNhY2hlWysrY2FjaGVQdHJdID0gMTsgLy8gMCwxLDAsMFxuICAgIC8vIGNhbGMuIHBvaW50c1xuICAgIHBhcnNlKHB0cywgY2FjaGUsIGwpO1xuICAgIGlmIChjbG9zZSkge1xuICAgICAgICAvL2wgPSBwb2ludHMubGVuZ3RoO1xuICAgICAgICBwdHMgPSBbXTtcbiAgICAgICAgcHRzLnB1c2gocG9pbnRzW2wgLSA0XSwgcG9pbnRzW2wgLSAzXSwgcG9pbnRzW2wgLSAyXSwgcG9pbnRzW2wgLSAxXSk7IC8vIHNlY29uZCBsYXN0IGFuZCBsYXN0XG4gICAgICAgIHB0cy5wdXNoKHBvaW50c1swXSwgcG9pbnRzWzFdLCBwb2ludHNbMl0sIHBvaW50c1szXSk7IC8vIGZpcnN0IGFuZCBzZWNvbmRcbiAgICAgICAgcGFyc2UocHRzLCBjYWNoZSwgNCk7XG4gICAgfVxuICAgIC8vIGFkZCBsYXN0IHBvaW50XG4gICAgbCA9IGNsb3NlID8gMCA6IHBvaW50cy5sZW5ndGggLSAyO1xuICAgIHJlc1tyUG9zKytdID0gcG9pbnRzW2xdO1xuICAgIHJlc1tyUG9zXSA9IHBvaW50c1tsICsgMV07XG4gICAgcmV0dXJuIHJlcztcbn1cbi8qKlxuICogRmxhdHRlbiBhbiBhcnJheSBvZiB2ZWN0b3JzIHRvIGEgZmxhdCBhcnJheSBvZiBwb2ludHNcbiAqIGluIHRoZSBmb3JtYXQgW3gwLCB5MCwgeDEsIHkxLCB4MiwgeTIsIHhOLCB5Tl1cbiAqXG4gKiBAcGFyYW0gICB7QXJyYXk8VmVjdG9yPn0gICBwb2ludHMgIFBvaW50cyBhcnJheSB0byBmbGF0dGVuXG4gKlxuICogQHJldHVybiAge0FycmF5PG51bWJlcj59ICAgRmxhdCBhcnJheVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlblBvaW50cyhwb2ludHMpIHtcbiAgICBjb25zdCBmbGF0dGVuZWRfYXJyYXkgPSBbXTtcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yIChsZXQgcG9pbnQgb2YgcG9pbnRzKSB7XG4gICAgICAgIGZsYXR0ZW5lZF9hcnJheVtpXSA9IHBvaW50Lng7XG4gICAgICAgIGZsYXR0ZW5lZF9hcnJheVtpICsgMV0gPSBwb2ludC55O1xuICAgICAgICBpID0gaSArIDI7XG4gICAgfVxuICAgIHJldHVybiBmbGF0dGVuZWRfYXJyYXk7XG59XG4vKipcbiAqIFRha2VzIGEgRmxvYXQzMkFycmF5IGZsYXQgcG9pbnRzIGFycmF5IFt4MCwgeTAsIHgxLCB5MSwgeE4sIHlOXVxuICogYW5kIGNvbnZlcnRzIGl0IHRvIGFuIGFycmF5IG92IHZlY3RvcnNcbiAqXG4gKiBAcGFyYW0gICB7RmxvYXQzMkFycmF5fSAgZmxhdF9wb2ludHNcbiAqXG4gKiBAcmV0dXJuICB7QXJyYXk8VmVjdG9yPn0gIEFycmF5IG92IFZlY3RvciBwb2ludHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZFBvaW50cyhmbGF0X3BvaW50cykge1xuICAgIGNvbnN0IHBvaW50cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmxhdF9wb2ludHMubGVuZ3RoOyBpID0gaSArIDIpIHtcbiAgICAgICAgcG9pbnRzLnB1c2gobmV3IFZlY3RvcihmbGF0X3BvaW50c1tpXSwgZmxhdF9wb2ludHNbaSArIDFdKSk7XG4gICAgfVxuICAgIHJldHVybiBwb2ludHM7XG59XG4vKipcbiAqIFNpbXBsaWZpZXMgYW4gYXJyYXkgb2YgdmVjdG9yc1xuICpcbiAqIEBwYXJhbSAgIHtBcnJheTxWZWN0b3I+fSAgICAgcG9pbnRzICBQb2ludHMgYXJyYXkgdG8gc2ltcGxpZnlcbiAqIEBwYXJhbSAgIHtudW1iZXI/fSAgICAgICAgICAgZmFjdG9yICBIb3cgbXVjaCB0byBzaW1wbGlmeVxuICpcbiAqIEByZXR1cm4gIHtBcnJheTxWZWN0b3I+fSBTaW1wbGlmaWVkIGFycmF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaW1wbGlmeShwb2ludHMsIGZhY3RvciA9IDIpIHtcbiAgICBjb25zdCBzaW1wbGlmaWVkX3BvaW50cyA9IFtdO1xuICAgIC8vIEFkZCB0aGUgZmlyc3QgcG9pbnRcbiAgICBzaW1wbGlmaWVkX3BvaW50cy5wdXNoKHBvaW50c1swXSk7XG4gICAgZm9yIChsZXQgaSA9IGZhY3RvcjsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpID0gaSArIGZhY3Rvcikge1xuICAgICAgICBzaW1wbGlmaWVkX3BvaW50cy5wdXNoKHBvaW50c1tpXSk7XG4gICAgfVxuICAgIHNpbXBsaWZpZWRfcG9pbnRzLnB1c2gocG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSk7XG4gICAgcmV0dXJuIHNpbXBsaWZpZWRfcG9pbnRzO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRoZXNlIHZhbHVlcyBhcmUgdXNlZCBieSB0aGUgYEFic3RyYWN0VmVjdG9yLnJvdW5kYCBtZXRob2QgdG8gaW5jcmVhc2VcbiAqIHBlcmZvcm1hbmNlIHZzLiB1c2luZyAgTnVtYmVyLnRvRml4ZWQuXG4gKi9cbnZhciBwcmVjaXNpb24gPSBbXG4gICAgMSxcbiAgICAxMCxcbiAgICAxMDAsXG4gICAgMTAwMCxcbiAgICAxMDAwMCxcbiAgICAxMDAwMDAsXG4gICAgMTAwMDAwMCxcbiAgICAxMDAwMDAwMCxcbiAgICAxMDAwMDAwMDAsXG4gICAgMTAwMDAwMDAwMCxcbiAgICAxMDAwMDAwMDAwMFxuXTtcbi8qKlxuICogVGhlIGNsYXNzIHRoYXQgYWxsIG90aGVyIHZlY3RvciByZXByZXNlbnRhdGlvbnMgYXJlIGRlcml2ZWQgZnJvbS5cbiAqXG4gKiBDb250YWlucyB0aGUgY29yZSBpbXBsZW1lbnRhdGlvbiBmb3IgYWxsIG1ldGhvZHMgdGhhdCB3aWxsIGJlIGV4cG9zZWQgYnlcbiAqIHZlY3RvciBpbnN0YW5jZXMuXG4gKlxuICogRXhhbXBsZSBvZiBjcmVhdGluZyBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvbjpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgQWJzdHJhY3RWZWN0b3IgfSBmcm9tIFwiLi9BYnN0cmFjdFZlY3RvclwiXG4gKlxuICogZXhwb3J0IGNsYXNzIE15Q3VzdG9tVmVjdG9yIGV4dGVuZHMgQWJzdHJhY3RWZWN0b3Ige1xuICogIGNvbnN0cnVjdG9yICh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICogICAgc3VwZXIoQ3VzdG9tVmVjdG9yVHlwZSlcbiAqICB9XG4gKiB9XG4gKiBgYGBcbiAqL1xudmFyIEFic3RyYWN0VmVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFic3RyYWN0VmVjdG9yKGN0b3IpIHtcbiAgICAgICAgdGhpcy5jdG9yID0gY3RvcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IGJvdGggeCBhbmQgeSBheGlzIHZhbHVlXG4gICAgICogQHBhcmFtIHggICBOZXcgeCB2YWxcbiAgICAgKiBAcGFyYW0geSAgIE5ldyB5IHZhbFxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5zZXRBeGVzID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXR0ZXIgZm9yIHggdGhlIGF4aXMgdmFsdWVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHRlciBmb3IgeCBheGlzIHZhbHVlXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnNldFggPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldHRlciBmb3IgeSBheGlzIHZhbHVlXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgZm9yIHkgYXhpcy5cbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuc2V0WSA9IGZ1bmN0aW9uICh5KSB7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSB2ZWN0b3IgYXMgYSBmb3JtYXR0ZWQgc3RyaW5nLCBlLmcgXCIoMCwgNClcIlxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChyb3VuZCkge1xuICAgICAgICBpZiAocm91bmQgPT09IHZvaWQgMCkgeyByb3VuZCA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChyb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiKFwiICsgTWF0aC5yb3VuZCh0aGlzLngpICsgXCIsIFwiICsgTWF0aC5yb3VuZCh0aGlzLnkpICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiKFwiICsgdGhpcy54ICsgXCIsIFwiICsgdGhpcy55ICsgXCIpXCI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYW4gQXJyYXkgY29udGFpbmluZyB0aGUgdmVjdG9yIGF4ZXMsIGUuZyBbMCwgNF1cbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueV07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYW4gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIHZlY3RvciBheGVzLCBlLmcgeyB4OiAwLCB5OiA0IH1cbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICB5OiB0aGlzLnlcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgcHJvdmlkZWQgdmVjdG9yIHRvIHRoaXMgb25lXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3VidHJhY3QgdGhlIHByb3ZpZGVkIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICB0aGlzLnggLT0gdmVjLng7XG4gICAgICAgIHRoaXMueSAtPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgcHJvdmlkZWQgdmVjdG9yIGVxdWFsIHRvIHRoaXMgb25lXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgcmV0dXJuIHZlYy54ID09PSB0aGlzLnggJiYgdmVjLnkgPT09IHRoaXMueTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubXVsdGlwbHlCeVZlY3RvciA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgdGhpcy54ICo9IHZlYy54O1xuICAgICAgICB0aGlzLnkgKj0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTXVsdGlwbHkgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5tdWxWID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseUJ5VmVjdG9yKHZlYyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXZpZGUgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kaXZpZGVCeVZlY3RvciA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgdGhpcy54IC89IHZlYy54O1xuICAgICAgICB0aGlzLnkgLz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGl2aWRlIHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGl2ViA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpdmlkZUJ5VmVjdG9yKHYpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTXVsdGlwbHkgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIG51bWJlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5tdWx0aXBseUJ5U2NhbGFyID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgdGhpcy54ICo9IG47XG4gICAgICAgIHRoaXMueSAqPSBuO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCBudW1iZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubXVsUyA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm11bHRpcGx5QnlTY2FsYXIobik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXZpdmUgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIG51bWJlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kaXZpZGVCeVNjYWxhciA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHRoaXMueCAvPSBuO1xuICAgICAgICB0aGlzLnkgLz0gbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXZpdmUgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIG51bWJlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kaXZTID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGl2aWRlQnlTY2FsYXIobik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBOb3JtYWxpc2UgdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubm9ybWFsaXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGVCeVNjYWxhcih0aGlzLm1hZ25pdHVkZSgpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZvciBBbWVyaWNhbiBzcGVsbGluZy4gU2FtZSBhcyB1bml0L25vcm1hbGlzZSBmdW5jdGlvblxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5ub3JtYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGlzZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIHNhbWUgYXMgbm9ybWFsaXNlIGFuZCBub3JtYWxpemVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUudW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXNlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtYWduaXR1ZGUgKGxlbmd0aCkgb2YgdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubWFnbml0dWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgeCA9IHRoaXMueDtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtYWduaXR1ZGUgKGxlbmd0aCkgb2YgdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWduaXR1ZGUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNxdXJlZCBsZW5ndGggb2YgdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubGVuZ3RoU3EgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB4ID0gdGhpcy54O1xuICAgICAgICB2YXIgeSA9IHRoaXMueTtcbiAgICAgICAgcmV0dXJuIHggKiB4ICsgeSAqIHk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkb3QgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBieSBhbm90aGVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRvdCA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgcmV0dXJuIHZlYy54ICogdGhpcy54ICsgdmVjLnkgKiB0aGlzLnk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGJ5IGFub3RoZXIuXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmNyb3NzID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdmVjLnkgLSB0aGlzLnkgKiB2ZWMueDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldmVyc2VzIHRoaXMgdmVjdG9yIGkuZSBtdWx0aXBsaWVzIGl0IGJ5IC0xXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMueCA9IC10aGlzLng7XG4gICAgICAgIHRoaXMueSA9IC10aGlzLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSB2ZWN0b3IgYXhlcyB2YWx1ZXMgdG8gYWJzb2x1dGUgdmFsdWVzXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmFicyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5hYnModGhpcy54KTtcbiAgICAgICAgdGhpcy55ID0gTWF0aC5hYnModGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBaZXJvZXMgdGhlIHZlY3RvciBpLmUgc2V0cyBhbGwgYXhlcyB0byAwXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnplcm8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueSA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kaXN0YW5jZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHZhciB4ID0gdGhpcy54IC0gdi54O1xuICAgICAgICB2YXIgeSA9IHRoaXMueSAtIHYueTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIHZldG9yIGJ5IHByb3ZpZGVkIHJhZGlhbnNcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUucm90YXRlID0gZnVuY3Rpb24gKHJhZHMpIHtcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZHMpO1xuICAgICAgICB2YXIgc2luID0gTWF0aC5zaW4ocmFkcyk7XG4gICAgICAgIHZhciBveCA9IHRoaXMueDtcbiAgICAgICAgdmFyIG95ID0gdGhpcy55O1xuICAgICAgICB0aGlzLnggPSBveCAqIGNvcyAtIG95ICogc2luO1xuICAgICAgICB0aGlzLnkgPSBveCAqIHNpbiArIG95ICogY29zO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJvdW5kcyB0aGlzIHZlY3RvciB0byBuIGRlY2ltYWwgcGxhY2VzXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnJvdW5kID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgaWYgKG4gPT09IHZvaWQgMCkgeyBuID0gMjsgfVxuICAgICAgICB2YXIgcCA9IHByZWNpc2lvbltuXTtcbiAgICAgICAgLy8gVGhpcyBwZXJmb3JtcyB3YWFheSBiZXR0ZXIgdGhhbiB0b0ZpeGVkIGFuZCBnaXZlIEZsb2F0MzIgdGhlIGVkZ2UgYWdhaW4uXG4gICAgICAgIC8vIGh0dHA6Ly93d3cuZHluYW1pY2d1cnUuY29tL2phdmFzY3JpcHQvcm91bmQtbnVtYmVycy13aXRoLXByZWNpc2lvbi9cbiAgICAgICAgdGhpcy54ID0gKCgwLjUgKyB0aGlzLnggKiBwKSA8PCAwKSAvIHA7XG4gICAgICAgIHRoaXMueSA9ICgoMC41ICsgdGhpcy55ICogcCkgPDwgMCkgLyBwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBjb3B5IG9mIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gICAgfTtcbiAgICByZXR1cm4gQWJzdHJhY3RWZWN0b3I7XG59KCkpO1xuZXhwb3J0cy5BYnN0cmFjdFZlY3RvciA9IEFic3RyYWN0VmVjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWJzdHJhY3RWZWN0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBYnN0cmFjdFZlY3Rvcl8xID0gcmVxdWlyZShcIi4vQWJzdHJhY3RWZWN0b3JcIik7XG4vKipcbiAqIEEgdmVjdG9yIHJlcHJlc2VudGF0aW9uIHRoYXQgc3RvcmVzIHRoZSBheGVzIGluIGFuIEFycmF5XG4gKlxuICogYGBgXG4gKiBjb25zdCB2ID0gbmV3IFZlYzJELkFycmF5VmVjdG9yKDIsIDUpXG4gKiBgYGBcbiAqL1xudmFyIEFycmF5VmVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBcnJheVZlY3RvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBcnJheVZlY3Rvcih4LCB5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIEFycmF5VmVjdG9yKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5heGVzID0gW3gsIHldO1xuICAgICAgICBfdGhpcy5jdG9yID0gQXJyYXlWZWN0b3I7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5VmVjdG9yLnByb3RvdHlwZSwgXCJ4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5heGVzWzBdO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICB0aGlzLmF4ZXNbMF0gPSB4O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXlWZWN0b3IucHJvdG90eXBlLCBcInlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF4ZXNbMV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgICAgIHRoaXMuYXhlc1sxXSA9IHk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBBcnJheVZlY3Rvcjtcbn0oQWJzdHJhY3RWZWN0b3JfMS5BYnN0cmFjdFZlY3RvcikpO1xuZXhwb3J0cy5BcnJheVZlY3RvciA9IEFycmF5VmVjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXJyYXlWZWN0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBYnN0cmFjdFZlY3Rvcl8xID0gcmVxdWlyZShcIi4vQWJzdHJhY3RWZWN0b3JcIik7XG4vKipcbiAqIEEgdmVjdG9yIHJlcHJlc2VudGF0aW9uIHRoYXQgc3RvcmVzIHRoZSBheGVzIGluIGEgRmxvYXQzMkFycmF5XG4gKlxuICogYGBgXG4gKiBjb25zdCB2ID0gbmV3IFZlYzJELkZsb2F0MzJWZWN0b3IoMiwgNSlcbiAqIGBgYFxuICovXG52YXIgRmxvYXQzMlZlY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmxvYXQzMlZlY3RvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGbG9hdDMyVmVjdG9yKHgsIHkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgRmxvYXQzMlZlY3RvcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYXhlcyA9IG5ldyBGbG9hdDMyQXJyYXkoMik7XG4gICAgICAgIF90aGlzLmF4ZXNbMF0gPSB4O1xuICAgICAgICBfdGhpcy5heGVzWzFdID0geTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmxvYXQzMlZlY3Rvci5wcm90b3R5cGUsIFwieFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXhlc1swXTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgdGhpcy5heGVzWzBdID0geDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZsb2F0MzJWZWN0b3IucHJvdG90eXBlLCBcInlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF4ZXNbMV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgICAgIHRoaXMuYXhlc1sxXSA9IHk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBGbG9hdDMyVmVjdG9yO1xufShBYnN0cmFjdFZlY3Rvcl8xLkFic3RyYWN0VmVjdG9yKSk7XG5leHBvcnRzLkZsb2F0MzJWZWN0b3IgPSBGbG9hdDMyVmVjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmxvYXQzMlZlY3Rvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9BYnN0cmFjdFZlY3RvclwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9BcnJheVZlY3RvclwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9GbG9hdDMyVmVjdG9yXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL1ZlY3RvclwiKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1WZWMyRC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFic3RyYWN0VmVjdG9yXzEgPSByZXF1aXJlKFwiLi9BYnN0cmFjdFZlY3RvclwiKTtcbi8qKlxuICogQSB2ZWN0b3IgcmVwcmVzZW50YXRpb24gdGhhdCBzdG9yZXMgdGhlIGF4ZXMgYXMgcGFydCBvZiB0aGUgaW5zdGFuY2UgaXRzZWxmXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IHYgPSBuZXcgVmVjMkQuVmVjdG9yKDIsIDUpXG4gKiBgYGBcbiAqL1xudmFyIFZlY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVmVjdG9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFZlY3Rvcih4LCB5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFZlY3RvcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3ggPSB4O1xuICAgICAgICBfdGhpcy5feSA9IHk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3Rvci5wcm90b3R5cGUsIFwieFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3g7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHRoaXMuX3ggPSB4O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yLnByb3RvdHlwZSwgXCJ5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5feTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeSkge1xuICAgICAgICAgICAgdGhpcy5feSA9IHk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBWZWN0b3I7XG59KEFic3RyYWN0VmVjdG9yXzEuQWJzdHJhY3RWZWN0b3IpKTtcbmV4cG9ydHMuVmVjdG9yID0gVmVjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VmVjdG9yLmpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc2Nzcy9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbi8qKlxuICogUXVlcnkgc2VsZWN0b3Igc3RyaW5nXG4gKiBmb3IgdGhlIGNhbnZhcyB0YXJnZXRcbiAqL1xuY29uc3QgdGFyZ2V0ID0gYCMke0NvbnN0YW50cy5DQU5WQVNfVEFSR0VUfWA7XG4vKipcbiAqIEFwcCBlbnRyeSBwb2ludC4gU3RhcnQgaGVyZS5cbiAqL1xuKCgpID0+IHtcbiAgICAvLyBUaGlzIGlzIG91ciB0YXJnZXQgY2FudmFzXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICAgIGlmIChjYW52YXMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICAvLyBVc2luZyB0aGUgMkQgY29udGV4dFxuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGlmIChjb250ZXh0ID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIENyZWF0ZSBhcHBsaWNhdGlvbiBvYmplY3QuXG4gICAgICAgIGNvbnN0IGFwcCA9IG5ldyBBcHAoY2FudmFzLCBjb250ZXh0KTtcbiAgICAgICAgLy8gRGVmaW5lIGFuaW1hdGlvbiBsb29wIGFuZCBwcm9jZXNzLlxuICAgICAgICBjb25zdCBhbmltYXRpb25Mb29wID0gKHRpbWVzdGFtcCkgPT4ge1xuICAgICAgICAgICAgLy8gRXZlcnl0aGluZyBnZXRzIGRvbmUgaGVyZS5cbiAgICAgICAgICAgIGFwcC5wcm9jZXNzKHRpbWVzdGFtcCk7XG4gICAgICAgICAgICAvLyBLZWVwIHJlcXVlc3RpbmcgbmV3IGZyYW1lc1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb25Mb29wKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQm9vdHN0cmFwIGFueSBzZXR1cCBzdHVmZlxuICAgICAgICBhcHAuc2V0VXAoKTtcbiAgICAgICAgLy8gU3RhcnQgdGhlIHJlbmRlcmxvb3AuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uTG9vcCk7XG4gICAgfVxufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==