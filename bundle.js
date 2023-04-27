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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  overflow: hidden;\n}\n\n#drawing-canvas {\n  background-color: #fff;\n}\n\n#palette {\n  justify-content: space-around;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  bottom: 0;\n  padding-left: 20px;\n  padding-bottom: 20px;\n  pointer-events: none;\n}\n#palette .color {\n  pointer-events: all;\n  margin-top: 1rem;\n  width: 80px;\n  cursor: pointer;\n  height: 80px;\n  border-radius: 50%;\n  border: 10px solid rgba(128, 128, 128, 0.2);\n}\n#palette .color:hover {\n  border: 10px solid rgba(255, 255, 255, 0.8);\n}\n#palette .color.selected {\n  border: 10px solid rgba(204, 204, 255, 0.7);\n}\n\n#layers {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  top: 0px;\n  right: 0px;\n  height: 100%;\n  pointer-events: none;\n  margin: 40px;\n}\n#layers .layer {\n  pointer-events: auto;\n  background-color: rgba(255, 255, 255, 0.7);\n  border: 1px solid #cacaca;\n  border-radius: 2%;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n#layers .active {\n  border: 2px solid rgb(255, 128, 0);\n}\n#layers .layer:hover {\n  background-color: rgb(255, 255, 255);\n}\n\n.hidden {\n  display: none;\n}\n\n#tools {\n  position: absolute;\n  left: 1rem;\n  top: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n#tools button {\n  height: 3rem;\n  padding: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n#help.visible {\n  font-family: Arial, Helvetica, sans-serif;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 2px solid #cdcdcd;\n  background-color: rgb(240, 240, 240);\n  width: 50%;\n  height: 50%;\n  border-radius: 1rem;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n#help.visible .header {\n  height: 8rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n#help.visible .header button {\n  border: 0;\n  font-size: 1.5rem;\n  cursor: pointer;\n  height: 1rem;\n}\n#help.visible .header h2 {\n  font-size: 3rem;\n}\n#help.visible h3 {\n  font-size: 2rem;\n  height: 4rem;\n}\n#help.visible .body {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n}\n#help.visible .body .left {\n  width: 50%;\n  padding-right: 2rem;\n}\n#help.visible .body .left p {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n#help.visible .body .right {\n  width: 50%;\n}\n#help.visible .body .right dl.inline-flex {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: wrap;\n  width: 100%;\n  /* set the container width*/\n  overflow: visible;\n}\n#help.visible .body .right dl.inline-flex dt {\n  font-size: 1.5rem;\n  height: 2rem;\n  font-weight: 900;\n  flex: 0 0 20%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n#help.visible .body .right dl.inline-flex dd {\n  font-size: 1.5rem;\n  flex: 0 0 80%;\n  height: 2rem;\n  margin-left: auto;\n  text-align: left;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}", "",{"version":3,"sources":["webpack://./src/scss/styles.scss"],"names":[],"mappings":"AAGA;EACE,eAAA;EACA,SAAA;EACA,UAAA;AAFF;;AAKA;EACE,gBAAA;AAFF;;AAKA;EACE,sBAAA;AAFF;;AAKA;EACE,6BAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,OAAA;EACA,SAAA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;AAFF;AAGE;EACE,mBAAA;EACA,gBAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,2CAAA;AADJ;AAEI;EACE,2CAAA;AAAN;AAEI;EACE,2CAAA;AAAN;;AAKA;EACE,eAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;EACA,UAAA;EACA,YAAA;EACA,oBAAA;EAEA,YAAA;AAHF;AAKE;EACE,oBAAA;EACA,0CAAA;EACA,yBAAA;EACA,iBAAA;EACA,mBAAA;EACA,eAAA;AAHJ;AAME;EACE,kCAAA;AAJJ;AAOE;EACE,oCAAA;AALJ;;AASA;EACE,aAAA;AANF;;AASA;EACE,kBAAA;EACA,UAAA;EACA,SAAA;EACA,aAAA;EACA,sBAAA;AANF;AAOE;EACE,YAAA;EACA,eAAA;EACA,qBAAA;AALJ;;AASA;EACE,yCAAA;EACA,eAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;EACA,yBAAA;EACA,oCAAA;EACA,UAAA;EACA,WAAA;EACA,mBAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;AANF;AAQE;EACE,YAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AANJ;AAQI;EACE,SAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;AANN;AASI;EACE,eAAA;AAPN;AAWE;EACE,eAAA;EACA,YAAA;AATJ;AAYE;EACE,aAAA;EACA,mBAAA;EACA,YAAA;AAVJ;AAYI;EACE,UAAA;EACA,mBAAA;AAVN;AAWM;EACE,iBAAA;EACA,iBAAA;AATR;AAaI;EACE,UAAA;AAXN;AAaI;EACE,aAAA;EACA,cAAA;EACA,eAAA;EACA,WAAA;EACA,2BAAA;EACA,iBAAA;AAXN;AAcI;EACE,iBAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,gBAAA;AAZN;AAeI;EACE,iBAAA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;EACA,gBAAA;EACA,uBAAA;EACA,gBAAA;AAbN","sourcesContent":["// This is all horrible...\n// but it works.\n\n* {\n  font-size: 16px;\n  margin:0;\n  padding:0;\n}\n\nbody {\n  overflow:hidden;\n}\n\n#drawing-canvas {\n  background-color: #fff;\n}\n\n#palette {\n  justify-content: space-around;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  bottom: 0;\n  padding-left: 20px;\n  padding-bottom: 20px;\n  pointer-events: none;\n  .color {\n    pointer-events: all;\n    margin-top: 1rem;\n    width: 80px;\n    cursor: pointer;\n    height: 80px;\n    border-radius: 50%;\n    border: 10px solid rgba(128, 128, 128, 0.2);\n    &:hover {\n      border: 10px solid rgba(255, 255, 255, 0.8);\n    }\n    &.selected {\n      border: 10px solid rgba(204, 204, 255, 0.7);\n    }\n  }\n}\n\n#layers {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  top: 0px;\n  right: 0px;\n  height: 100%;\n  pointer-events: none;\n\n  margin: 40px;\n\n  .layer {\n    pointer-events: auto;\n    background-color: rgba(255, 255, 255, 0.7);\n    border: 1px solid #cacaca;\n    border-radius: 2%;\n    margin-bottom: 20px;\n    cursor: pointer;\n  }\n\n  .active {\n    border: 2px solid rgb(255, 128, 0);\n  }\n\n  .layer:hover {\n    background-color: rgba(255, 255, 255, 1.0);\n  }\n}\n\n.hidden {\n  display: none;\n}\n\n#tools {\n  position: absolute;\n  left: 1rem;\n  top: 1rem;\n  display: flex;\n  flex-direction: column;\n  button {\n    height: 3rem;\n    padding: .5rem;\n    margin-bottom: 0.5rem;\n  }\n}\n\n#help.visible {\n  font-family: Arial, Helvetica, sans-serif;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 2px solid #cdcdcd;\n  background-color: rgb(240, 240, 240);\n  width: 50%;\n  height: 50%;\n  border-radius: 1rem;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n\n  .header {\n    height: 8rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n\n    button {\n      border: 0;\n      font-size: 1.5rem;\n      cursor: pointer;\n      height: 1rem;\n    }\n  \n    h2 {\n      font-size: 3rem;\n    }\n  }\n\n  h3 {\n    font-size: 2rem;\n    height: 4rem;\n  }\n\n  .body {\n    display: flex;\n    flex-direction: row;\n    height: 100%;\n\n    .left {\n      width: 50%;\n      padding-right: 2rem;\n      p {\n        font-size: 1.5rem;\n        line-height: 2rem;\n      }\n    }\n\n    .right {\n      width: 50%;\n\n    dl.inline-flex {\n      display: flex;\n      flex-flow: row;\n      flex-wrap: wrap;\n      width: 100%;\n      /* set the container width*/\n      overflow: visible;\n    }\n\n    dl.inline-flex dt {\n      font-size: 1.5rem;\n      height: 2rem;\n      font-weight:900;\n      flex: 0 0 20%;\n      text-overflow: ellipsis;\n      overflow: hidden;\n    }\n\n    dl.inline-flex dd {\n      font-size: 1.5rem;\n      flex: 0 0 80%;\n      height: 2rem;\n      margin-left: auto;\n      text-align: left;\n      text-overflow: ellipsis;\n      overflow: hidden;\n    }\n    }\n  }\n    \n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawing */ "./src/drawing.ts");


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
        // Create drawing
        if (this.canvas) {
            this.drawing = new _drawing__WEBPACK_IMPORTED_MODULE_1__["default"]();
            this.drawing.setup(this.canvas);
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
/* harmony export */   "Constants": () => (/* binding */ Constants),
/* harmony export */   "LAYER_CREATE_KEYS": () => (/* binding */ LAYER_CREATE_KEYS)
/* harmony export */ });
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
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _hud_hud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hud/hud */ "./src/hud/hud.ts");
/* harmony import */ var _util_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/color */ "./src/util/color.ts");
/* harmony import */ var _tools_layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tools/layer */ "./src/tools/layer.ts");
/* harmony import */ var _tools_marker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools/marker */ "./src/tools/marker.ts");
/* harmony import */ var _hud_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hud/toolbar */ "./src/hud/toolbar.ts");
/* harmony import */ var _hud_layers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hud/layers */ "./src/hud/layers.ts");
/* harmony import */ var _util_key_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/key_events */ "./src/util/key_events.ts");
/* harmony import */ var _hud_color_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hud/color_picker */ "./src/hud/color_picker.ts");










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
        /**
         * Stroke color
         */
        this.stroke_color = new _util_color__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0, 0, 1);
        /**
         * Fill Color
         */
        this.fill_color = new _util_color__WEBPACK_IMPORTED_MODULE_3__["default"](255, 255, 0, 1);
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
        this.active_layer = new _tools_layer__WEBPACK_IMPORTED_MODULE_4__["default"](this.layer_id, this);
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
     * [setup description]
     *
     * @param   {HTMLCanvasElement}  canvas  [canvas description]
     *
     * @return  {void}                       [return description]
     */
    setup(canvas) {
        var _a;
        // Sets the defaul/starting Tool.
        this.setTool(new _tools_marker__WEBPACK_IMPORTED_MODULE_5__["default"](this));
        // Add a layer to the drawing
        this.addLayer();
        // Items to the hud
        const hud = new _hud_hud__WEBPACK_IMPORTED_MODULE_2__["default"]();
        const setStroke = (color) => {
            this.stroke_color = color;
        };
        const setFill = (color) => {
            this.stroke_color = color;
        };
        const color_picker = new _hud_color_picker__WEBPACK_IMPORTED_MODULE_9__["default"](this);
        hud.addItem(color_picker);
        const toolbar = new _hud_toolbar__WEBPACK_IMPORTED_MODULE_6__["default"]("toolbar", this);
        hud.addItem(toolbar);
        // Attach the layers overview to the HUD
        const layers = new _hud_layers__WEBPACK_IMPORTED_MODULE_7__["default"](this);
        hud.addItem(layers);
        // Draw the overview, for each layer
        layers.build();
        // Attach the HUD to the drawing
        this.hud = hud;
        // Event listener to close the help popup that shows on load.
        (_a = document.querySelector("#help #close")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (event) => {
            const help = document.getElementById("help");
            help === null || help === void 0 ? void 0 : help.classList.remove("visible");
            help === null || help === void 0 ? void 0 : help.classList.add("hidden");
        });
        // Pass off all Keyboard events to the key_events handler. 
        // Do this globally. Not just on the Canvas.
        const keyEventHandler = new _util_key_events__WEBPACK_IMPORTED_MODULE_8__["default"](this);
        document.addEventListener('keydown', (event) => {
            keyEventHandler.handle(event);
        });
        // Attach some events to the main canvas
        if (canvas instanceof HTMLCanvasElement) {
            /**
             * Envent to handle input movement
             *
             * @param   {MouseEvent}  event       [event description]
             * @param   {[type]}      TouchEvent  [TouchEvent description]
             *
             * @return  {[type]}                  [return description]
             */
            const moveEvent = (event) => {
                let position = null;
                if (event instanceof MouseEvent) {
                    position = new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(event.clientX, event.clientY);
                }
                else {
                    position = new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(event.touches[0].clientX, event.touches[0].clientY);
                }
                this.setTargetPosition(position);
                hud.setCursorPosition(position);
            };
            // Update the target position (where we want to draw) when the mouse moves over the canvas
            canvas.addEventListener("mousemove", moveEvent);
            canvas.addEventListener("touchmove", moveEvent);
            /**
             * Event to handle touch start
             *
             * @param   {MouseEvent}  event       [event description]
             * @param   {[type]}      TouchEvent  [TouchEvent description]
             *
             * @return  {[type]}                  [return description]
             */
            const downEvent = (event) => {
                var _a;
                let position = null;
                if (event instanceof MouseEvent) {
                    position = new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(event.clientX, event.clientY);
                }
                else {
                    position = new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(event.touches[0].clientX, event.touches[0].clientY);
                }
                (_a = this.tool) === null || _a === void 0 ? void 0 : _a.startDrawing(position);
            };
            // If the mouse is down, signal to then drawing object that we're 
            // drawing, with whatever tool we've currently selected.
            canvas.addEventListener("mousedown", downEvent);
            canvas.addEventListener("touchstart", downEvent);
            // Listen for mousewheel, and resize the tool depending on direction.
            canvas.addEventListener("wheel", (event) => {
                var _a, _b, _c;
                if (event.deltaY > 0) {
                    (_a = this.tool) === null || _a === void 0 ? void 0 : _a.setSize(this.tool.size - 2);
                }
                else {
                    (_b = this.tool) === null || _b === void 0 ? void 0 : _b.setSize(this.tool.size + 2);
                }
                this.global_target_size = ((_c = this.tool) === null || _c === void 0 ? void 0 : _c.size) || 20;
            });
            /**
             * Event to handle stopping of mouse events
             *
             * @param   {MouseEvent}  event       [event description]
             * @param   {[type]}      TouchEvent  [TouchEvent description]
             *
             * @return  {[type]}                  [return description]
             */
            const upEvent = (event) => {
                var _a;
                (_a = this.tool) === null || _a === void 0 ? void 0 : _a.stopDrawing();
            };
            // If we mouseup we need to tell the drawing object, we've stopped drawing.
            canvas.addEventListener("mouseup", upEvent);
            canvas.addEventListener("touchend", upEvent);
        }
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
        context.fillRect(_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.width - 75, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.height - 100, 75, 100);
        context.font = '11px Arial';
        context.fillStyle = 'black';
        context.fillText("FPS: " + this.fps, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.width - 70, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.height - 85);
        context.fillText("LAYERS: " + this.layers.size, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.width - 70, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.height - 70);
        context.fillText("ENT: " + this.countEntities(), _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.width - 70, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.height - 55);
        context.fillText("LOC-X: " + ((_a = this.target) === null || _a === void 0 ? void 0 : _a.x), _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.width - 70, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.height - 40);
        context.fillText("LOC-Y: " + ((_b = this.target) === null || _b === void 0 ? void 0 : _b.y), _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.width - 70, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_SIZE.height - 25);
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
        return this.stroke_color;
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
        this.stroke_color = new _util_color__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 0);
        /**
         * Colour of the entity
         *
         * @return  {Color}  Colour object that the entity will be drawn as.
         */
        this.fill_color = new _util_color__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 0);
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
     * Sets Stroke Color
     *
     * @param   {Color}  color  Color to set on the entity
     *
     * @return  {void}
     */
    setStrokeColor(color) {
        this.stroke_color = color;
    }
    /**
     * Sets Fill Color
     *
     * @param   {Color}  color  Color to set on the entity
     *
     * @return  {void}
     */
    setFillColor(color) {
        this.fill_color = color;
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
    constructor(size, stroke_color, fill_color, drawing, close = false) {
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
        this.stroke_color = stroke_color;
        this.fill_color = fill_color;
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
        context.strokeStyle = this.stroke_color.getHex();
        context.fillStyle = this.fill_color.getHex();
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
        context.save();
        context.clip();
        if (this.close) {
            context.closePath();
            context.fill();
        }
        context.restore();
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
    constructor(size, stroke_color, fill_color, drawing) {
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
        this.stroke_color = stroke_color;
        this.fill_color = fill_color;
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
            context.strokeStyle = this.stroke_color.getHex();
            context.fillStyle = this.fill_color.getHex();
            context.lineCap = "round";
            context.rect(origin.x, origin.y, -(origin.x - destination.x), -(origin.y - destination.y));
            // save the un-clipped context state
            context.save();
            // Create a clipping area from the path
            // All new drawing will be contained inside
            // the clipping area
            context.clip();
            context.fill();
            context.restore();
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
        if (this.fill_color.getRgba()[3] > 0) {
            return context.isPointInPath(pointer.x, pointer.y);
        }
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

/***/ "./src/hud/color_picker.ts":
/*!*********************************!*\
  !*** ./src/hud/color_picker.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColorPicker)
/* harmony export */ });
/* harmony import */ var _util_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/color */ "./src/util/color.ts");
/* harmony import */ var _hud_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hud_item */ "./src/hud/hud_item.ts");
/* harmony import */ var vanilla_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vanilla-picker */ "./node_modules/vanilla-picker/dist/vanilla-picker.mjs");



class ColorPicker extends _hud_item__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Sets up the Palette HUD item
     */
    constructor(drawing) {
        super("picker");
        /**
         * Ref to the drawing
         */
        this.drawing = null;
        this.drawing = drawing;
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
        var _a, _b, _c, _d;
        const target = document.getElementById('palette');
        const stroke = document.createElement('div');
        stroke.classList.add('color');
        stroke.classList.add('stroke');
        stroke.title = 'Stroke Color';
        stroke.style.backgroundColor = ((_a = this.drawing) === null || _a === void 0 ? void 0 : _a.stroke_color).getHex();
        var strokePicker = new vanilla_picker__WEBPACK_IMPORTED_MODULE_2__["default"]({
            parent: stroke,
            popup: 'top',
            color: ((_b = this.drawing) === null || _b === void 0 ? void 0 : _b.stroke_color).getHex()
        });
        strokePicker.onChange = (color) => {
            if (this.drawing) {
                const newColor = new _util_color__WEBPACK_IMPORTED_MODULE_0__["default"](color.rgba[0], color.rgba[1], color.rgba[2], color.rgba[3]);
                this.drawing.stroke_color = newColor;
                stroke.style.backgroundColor = newColor.getHex();
            }
        };
        target === null || target === void 0 ? void 0 : target.appendChild(stroke);
        const fill = document.createElement('div');
        fill.classList.add('color');
        fill.classList.add('fill');
        fill.title = 'Fill Color';
        fill.style.backgroundColor = ((_c = this.drawing) === null || _c === void 0 ? void 0 : _c.fill_color).getHex();
        // Add the event listener
        var fillPicker = new vanilla_picker__WEBPACK_IMPORTED_MODULE_2__["default"]({
            parent: fill,
            popup: 'top',
            color: ((_d = this.drawing) === null || _d === void 0 ? void 0 : _d.fill_color).getHex()
        });
        fillPicker.onChange = (color) => {
            if (this.drawing) {
                const newColor = new _util_color__WEBPACK_IMPORTED_MODULE_0__["default"](color.rgba[0], color.rgba[1], color.rgba[2], color.rgba[3]);
                this.drawing.fill_color = newColor;
                fill.style.backgroundColor = newColor.getHex();
            }
        };
        target === null || target === void 0 ? void 0 : target.appendChild(fill);
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
        return new _entities_freehand__WEBPACK_IMPORTED_MODULE_0__["default"](this.size, this.drawing.stroke_color, this.drawing.fill_color, this.drawing);
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
        return new _entities_rect__WEBPACK_IMPORTED_MODULE_1__["default"](this.size, this.drawing.stroke_color, this.drawing.fill_color, this.drawing);
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
        return new _entities_freehand__WEBPACK_IMPORTED_MODULE_0__["default"](this.size, this.drawing.stroke_color, this.drawing.fill_color, this.drawing, true);
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

/***/ }),

/***/ "./node_modules/vanilla-picker/dist/vanilla-picker.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/vanilla-picker/dist/vanilla-picker.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Picker)
/* harmony export */ });
/*!
 * vanilla-picker v2.12.1
 * https://vanilla-picker.js.org
 *
 * Copyright 2017-2021 Andreas Borgen (https://github.com/Sphinxxxx), Adam Brooks (https://github.com/dissimulate)
 * Released under the ISC license.
 */
var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

String.prototype.startsWith = String.prototype.startsWith || function (needle) {
    return this.indexOf(needle) === 0;
};
String.prototype.padStart = String.prototype.padStart || function (len, pad) {
    var str = this;while (str.length < len) {
        str = pad + str;
    }return str;
};

var colorNames = { cb: '0f8ff', tqw: 'aebd7', q: '-ffff', qmrn: '7fffd4', zr: '0ffff', bg: '5f5dc', bsq: 'e4c4', bck: '---', nch: 'ebcd', b: '--ff', bvt: '8a2be2', brwn: 'a52a2a', brw: 'deb887', ctb: '5f9ea0', hrt: '7fff-', chcT: 'd2691e', cr: '7f50', rnw: '6495ed', crns: '8dc', crms: 'dc143c', cn: '-ffff', Db: '--8b', Dcn: '-8b8b', Dgnr: 'b8860b', Dgr: 'a9a9a9', Dgrn: '-64-', Dkhk: 'bdb76b', Dmgn: '8b-8b', Dvgr: '556b2f', Drng: '8c-', Drch: '9932cc', Dr: '8b--', Dsmn: 'e9967a', Dsgr: '8fbc8f', DsTb: '483d8b', DsTg: '2f4f4f', Dtrq: '-ced1', Dvt: '94-d3', ppnk: '1493', pskb: '-bfff', mgr: '696969', grb: '1e90ff', rbrc: 'b22222', rwht: 'af0', stg: '228b22', chs: '-ff', gnsb: 'dcdcdc', st: '8f8ff', g: 'd7-', gnr: 'daa520', gr: '808080', grn: '-8-0', grnw: 'adff2f', hnw: '0fff0', htpn: '69b4', nnr: 'cd5c5c', ng: '4b-82', vr: '0', khk: '0e68c', vnr: 'e6e6fa', nrb: '0f5', wngr: '7cfc-', mnch: 'acd', Lb: 'add8e6', Lcr: '08080', Lcn: 'e0ffff', Lgnr: 'afad2', Lgr: 'd3d3d3', Lgrn: '90ee90', Lpnk: 'b6c1', Lsmn: 'a07a', Lsgr: '20b2aa', Lskb: '87cefa', LsTg: '778899', Lstb: 'b0c4de', Lw: 'e0', m: '-ff-', mgrn: '32cd32', nn: 'af0e6', mgnt: '-ff', mrn: '8--0', mqm: '66cdaa', mmb: '--cd', mmrc: 'ba55d3', mmpr: '9370db', msg: '3cb371', mmsT: '7b68ee', '': '-fa9a', mtr: '48d1cc', mmvt: 'c71585', mnLb: '191970', ntc: '5fffa', mstr: 'e4e1', mccs: 'e4b5', vjw: 'dead', nv: '--80', c: 'df5e6', v: '808-0', vrb: '6b8e23', rng: 'a5-', rngr: '45-', rch: 'da70d6', pgnr: 'eee8aa', pgrn: '98fb98', ptrq: 'afeeee', pvtr: 'db7093', ppwh: 'efd5', pchp: 'dab9', pr: 'cd853f', pnk: 'c0cb', pm: 'dda0dd', pwrb: 'b0e0e6', prp: '8-080', cc: '663399', r: '--', sbr: 'bc8f8f', rb: '4169e1', sbrw: '8b4513', smn: 'a8072', nbr: '4a460', sgrn: '2e8b57', ssh: '5ee', snn: 'a0522d', svr: 'c0c0c0', skb: '87ceeb', sTb: '6a5acd', sTgr: '708090', snw: 'afa', n: '-ff7f', stb: '4682b4', tn: 'd2b48c', t: '-8080', thst: 'd8bfd8', tmT: '6347', trqs: '40e0d0', vt: 'ee82ee', whT: '5deb3', wht: '', hts: '5f5f5', w: '-', wgrn: '9acd32' };

function printNum(num) {
    var decs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var str = decs > 0 ? num.toFixed(decs).replace(/0+$/, '').replace(/\.$/, '') : num.toString();
    return str || '0';
}

var Color = function () {
    function Color(r, g, b, a) {
        classCallCheck(this, Color);


        var that = this;
        function parseString(input) {

            if (input.startsWith('hsl')) {
                var _input$match$map = input.match(/([\-\d\.e]+)/g).map(Number),
                    _input$match$map2 = slicedToArray(_input$match$map, 4),
                    h = _input$match$map2[0],
                    s = _input$match$map2[1],
                    l = _input$match$map2[2],
                    _a = _input$match$map2[3];

                if (_a === undefined) {
                    _a = 1;
                }

                h /= 360;
                s /= 100;
                l /= 100;
                that.hsla = [h, s, l, _a];
            } else if (input.startsWith('rgb')) {
                var _input$match$map3 = input.match(/([\-\d\.e]+)/g).map(Number),
                    _input$match$map4 = slicedToArray(_input$match$map3, 4),
                    _r = _input$match$map4[0],
                    _g = _input$match$map4[1],
                    _b = _input$match$map4[2],
                    _a2 = _input$match$map4[3];

                if (_a2 === undefined) {
                    _a2 = 1;
                }

                that.rgba = [_r, _g, _b, _a2];
            } else {
                if (input.startsWith('#')) {
                    that.rgba = Color.hexToRgb(input);
                } else {
                    that.rgba = Color.nameToRgb(input) || Color.hexToRgb(input);
                }
            }
        }

        if (r === undefined) ; else if (Array.isArray(r)) {
            this.rgba = r;
        } else if (b === undefined) {
            var color = r && '' + r;
            if (color) {
                parseString(color.toLowerCase());
            }
        } else {
            this.rgba = [r, g, b, a === undefined ? 1 : a];
        }
    }

    createClass(Color, [{
        key: 'printRGB',
        value: function printRGB(alpha) {
            var rgb = alpha ? this.rgba : this.rgba.slice(0, 3),
                vals = rgb.map(function (x, i) {
                return printNum(x, i === 3 ? 3 : 0);
            });

            return alpha ? 'rgba(' + vals + ')' : 'rgb(' + vals + ')';
        }
    }, {
        key: 'printHSL',
        value: function printHSL(alpha) {
            var mults = [360, 100, 100, 1],
                suff = ['', '%', '%', ''];

            var hsl = alpha ? this.hsla : this.hsla.slice(0, 3),
                vals = hsl.map(function (x, i) {
                return printNum(x * mults[i], i === 3 ? 3 : 1) + suff[i];
            });

            return alpha ? 'hsla(' + vals + ')' : 'hsl(' + vals + ')';
        }
    }, {
        key: 'printHex',
        value: function printHex(alpha) {
            var hex = this.hex;
            return alpha ? hex : hex.substring(0, 7);
        }
    }, {
        key: 'rgba',
        get: function get() {
            if (this._rgba) {
                return this._rgba;
            }
            if (!this._hsla) {
                throw new Error('No color is set');
            }

            return this._rgba = Color.hslToRgb(this._hsla);
        },
        set: function set(rgb) {
            if (rgb.length === 3) {
                rgb[3] = 1;
            }

            this._rgba = rgb;
            this._hsla = null;
        }
    }, {
        key: 'rgbString',
        get: function get() {
            return this.printRGB();
        }
    }, {
        key: 'rgbaString',
        get: function get() {
            return this.printRGB(true);
        }
    }, {
        key: 'hsla',
        get: function get() {
            if (this._hsla) {
                return this._hsla;
            }
            if (!this._rgba) {
                throw new Error('No color is set');
            }

            return this._hsla = Color.rgbToHsl(this._rgba);
        },
        set: function set(hsl) {
            if (hsl.length === 3) {
                hsl[3] = 1;
            }

            this._hsla = hsl;
            this._rgba = null;
        }
    }, {
        key: 'hslString',
        get: function get() {
            return this.printHSL();
        }
    }, {
        key: 'hslaString',
        get: function get() {
            return this.printHSL(true);
        }
    }, {
        key: 'hex',
        get: function get() {
            var rgb = this.rgba,
                hex = rgb.map(function (x, i) {
                return i < 3 ? x.toString(16) : Math.round(x * 255).toString(16);
            });

            return '#' + hex.map(function (x) {
                return x.padStart(2, '0');
            }).join('');
        },
        set: function set(hex) {
            this.rgba = Color.hexToRgb(hex);
        }
    }], [{
        key: 'hexToRgb',
        value: function hexToRgb(input) {

            var hex = (input.startsWith('#') ? input.slice(1) : input).replace(/^(\w{3})$/, '$1F').replace(/^(\w)(\w)(\w)(\w)$/, '$1$1$2$2$3$3$4$4').replace(/^(\w{6})$/, '$1FF');

            if (!hex.match(/^([0-9a-fA-F]{8})$/)) {
                throw new Error('Unknown hex color; ' + input);
            }

            var rgba = hex.match(/^(\w\w)(\w\w)(\w\w)(\w\w)$/).slice(1).map(function (x) {
                return parseInt(x, 16);
            });

            rgba[3] = rgba[3] / 255;
            return rgba;
        }
    }, {
        key: 'nameToRgb',
        value: function nameToRgb(input) {

            var hash = input.toLowerCase().replace('at', 'T').replace(/[aeiouyldf]/g, '').replace('ght', 'L').replace('rk', 'D').slice(-5, 4),
                hex = colorNames[hash];
            return hex === undefined ? hex : Color.hexToRgb(hex.replace(/\-/g, '00').padStart(6, 'f'));
        }
    }, {
        key: 'rgbToHsl',
        value: function rgbToHsl(_ref) {
            var _ref2 = slicedToArray(_ref, 4),
                r = _ref2[0],
                g = _ref2[1],
                b = _ref2[2],
                a = _ref2[3];

            r /= 255;
            g /= 255;
            b /= 255;

            var max = Math.max(r, g, b),
                min = Math.min(r, g, b);
            var h = void 0,
                s = void 0,
                l = (max + min) / 2;

            if (max === min) {
                h = s = 0;
            } else {
                var d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);break;
                    case g:
                        h = (b - r) / d + 2;break;
                    case b:
                        h = (r - g) / d + 4;break;
                }

                h /= 6;
            }

            return [h, s, l, a];
        }
    }, {
        key: 'hslToRgb',
        value: function hslToRgb(_ref3) {
            var _ref4 = slicedToArray(_ref3, 4),
                h = _ref4[0],
                s = _ref4[1],
                l = _ref4[2],
                a = _ref4[3];

            var r = void 0,
                g = void 0,
                b = void 0;

            if (s === 0) {
                r = g = b = l;
            } else {
                var hue2rgb = function hue2rgb(p, q, t) {
                    if (t < 0) t += 1;
                    if (t > 1) t -= 1;
                    if (t < 1 / 6) return p + (q - p) * 6 * t;
                    if (t < 1 / 2) return q;
                    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                    return p;
                };

                var q = l < 0.5 ? l * (1 + s) : l + s - l * s,
                    p = 2 * l - q;

                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }

            var rgba = [r * 255, g * 255, b * 255].map(Math.round);
            rgba[3] = a;

            return rgba;
        }
    }]);
    return Color;
}();

var EventBucket = function () {
    function EventBucket() {
        classCallCheck(this, EventBucket);

        this._events = [];
    }

    createClass(EventBucket, [{
        key: 'add',
        value: function add(target, type, handler) {
            target.addEventListener(type, handler, false);
            this._events.push({
                target: target,
                type: type,
                handler: handler
            });
        }
    }, {
        key: 'remove',
        value: function remove(target, type, handler) {
            this._events = this._events.filter(function (e) {
                var isMatch = true;
                if (target && target !== e.target) {
                    isMatch = false;
                }
                if (type && type !== e.type) {
                    isMatch = false;
                }
                if (handler && handler !== e.handler) {
                    isMatch = false;
                }

                if (isMatch) {
                    EventBucket._doRemove(e.target, e.type, e.handler);
                }
                return !isMatch;
            });
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this._events.forEach(function (e) {
                return EventBucket._doRemove(e.target, e.type, e.handler);
            });
            this._events = [];
        }
    }], [{
        key: '_doRemove',
        value: function _doRemove(target, type, handler) {
            target.removeEventListener(type, handler, false);
        }
    }]);
    return EventBucket;
}();

function parseHTML(htmlString) {

    var div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.firstElementChild;
}

function dragTrack(eventBucket, area, callback) {
    var dragging = false;

    function clamp(val, min, max) {
        return Math.max(min, Math.min(val, max));
    }

    function onMove(e, info, starting) {
        if (starting) {
            dragging = true;
        }
        if (!dragging) {
            return;
        }

        e.preventDefault();

        var bounds = area.getBoundingClientRect(),
            w = bounds.width,
            h = bounds.height,
            x = info.clientX,
            y = info.clientY;

        var relX = clamp(x - bounds.left, 0, w),
            relY = clamp(y - bounds.top, 0, h);

        callback(relX / w, relY / h);
    }

    function onMouse(e, starting) {
        var button = e.buttons === undefined ? e.which : e.buttons;
        if (button === 1) {
            onMove(e, e, starting);
        } else {
            dragging = false;
        }
    }

    function onTouch(e, starting) {
        if (e.touches.length === 1) {
            onMove(e, e.touches[0], starting);
        } else {
            dragging = false;
        }
    }

    eventBucket.add(area, 'mousedown', function (e) {
        onMouse(e, true);
    });
    eventBucket.add(area, 'touchstart', function (e) {
        onTouch(e, true);
    });
    eventBucket.add(window, 'mousemove', onMouse);
    eventBucket.add(area, 'touchmove', onTouch);
    eventBucket.add(window, 'mouseup', function (e) {
        dragging = false;
    });
    eventBucket.add(area, 'touchend', function (e) {
        dragging = false;
    });
    eventBucket.add(area, 'touchcancel', function (e) {
        dragging = false;
    });
}

var BG_TRANSP = 'linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%) 0 0 / 2em 2em,\n                   linear-gradient(45deg, lightgrey 25%,       white 25%,       white 75%, lightgrey 75%) 1em 1em / 2em 2em';
var HUES = 360;

var EVENT_KEY = 'keydown',
    EVENT_CLICK_OUTSIDE = 'mousedown',
    EVENT_TAB_MOVE = 'focusin';

function $(selector, context) {
    return (context || document).querySelector(selector);
}

function stopEvent(e) {

    e.preventDefault();
    e.stopPropagation();
}
function onKey(bucket, target, keys, handler, stop) {
    bucket.add(target, EVENT_KEY, function (e) {
        if (keys.indexOf(e.key) >= 0) {
            if (stop) {
                stopEvent(e);
            }
            handler(e);
        }
    });
}

var Picker = function () {
    function Picker(options) {
        classCallCheck(this, Picker);


        this.settings = {

            popup: 'right',
            layout: 'default',
            alpha: true,
            editor: true,
            editorFormat: 'hex',
            cancelButton: false,
            defaultColor: '#0cf'
        };

        this._events = new EventBucket();

        this.onChange = null;

        this.onDone = null;

        this.onOpen = null;

        this.onClose = null;

        this.setOptions(options);
    }

    createClass(Picker, [{
        key: 'setOptions',
        value: function setOptions(options) {
            var _this = this;

            if (!options) {
                return;
            }
            var settings = this.settings;

            function transfer(source, target, skipKeys) {
                for (var key in source) {
                    if (skipKeys && skipKeys.indexOf(key) >= 0) {
                        continue;
                    }

                    target[key] = source[key];
                }
            }

            if (options instanceof HTMLElement) {
                settings.parent = options;
            } else {

                if (settings.parent && options.parent && settings.parent !== options.parent) {
                    this._events.remove(settings.parent);
                    this._popupInited = false;
                }

                transfer(options, settings);

                if (options.onChange) {
                    this.onChange = options.onChange;
                }
                if (options.onDone) {
                    this.onDone = options.onDone;
                }
                if (options.onOpen) {
                    this.onOpen = options.onOpen;
                }
                if (options.onClose) {
                    this.onClose = options.onClose;
                }

                var col = options.color || options.colour;
                if (col) {
                    this._setColor(col);
                }
            }

            var parent = settings.parent;
            if (parent && settings.popup && !this._popupInited) {

                var openProxy = function openProxy(e) {
                    return _this.openHandler(e);
                };

                this._events.add(parent, 'click', openProxy);

                onKey(this._events, parent, [' ', 'Spacebar', 'Enter'], openProxy);

                this._popupInited = true;
            } else if (options.parent && !settings.popup) {
                this.show();
            }
        }
    }, {
        key: 'openHandler',
        value: function openHandler(e) {
            if (this.show()) {

                e && e.preventDefault();

                this.settings.parent.style.pointerEvents = 'none';

                var toFocus = e && e.type === EVENT_KEY ? this._domEdit : this.domElement;
                setTimeout(function () {
                    return toFocus.focus();
                }, 100);

                if (this.onOpen) {
                    this.onOpen(this.colour);
                }
            }
        }
    }, {
        key: 'closeHandler',
        value: function closeHandler(e) {
            var event = e && e.type;
            var doHide = false;

            if (!e) {
                doHide = true;
            } else if (event === EVENT_CLICK_OUTSIDE || event === EVENT_TAB_MOVE) {

                var knownTime = (this.__containedEvent || 0) + 100;
                if (e.timeStamp > knownTime) {
                    doHide = true;
                }
            } else {

                stopEvent(e);

                doHide = true;
            }

            if (doHide && this.hide()) {
                this.settings.parent.style.pointerEvents = '';

                if (event !== EVENT_CLICK_OUTSIDE) {
                    this.settings.parent.focus();
                }

                if (this.onClose) {
                    this.onClose(this.colour);
                }
            }
        }
    }, {
        key: 'movePopup',
        value: function movePopup(options, open) {

            this.closeHandler();

            this.setOptions(options);
            if (open) {
                this.openHandler();
            }
        }
    }, {
        key: 'setColor',
        value: function setColor(color, silent) {
            this._setColor(color, { silent: silent });
        }
    }, {
        key: '_setColor',
        value: function _setColor(color, flags) {
            if (typeof color === 'string') {
                color = color.trim();
            }
            if (!color) {
                return;
            }

            flags = flags || {};
            var c = void 0;
            try {

                c = new Color(color);
            } catch (ex) {
                if (flags.failSilently) {
                    return;
                }
                throw ex;
            }

            if (!this.settings.alpha) {
                var hsla = c.hsla;
                hsla[3] = 1;
                c.hsla = hsla;
            }
            this.colour = this.color = c;
            this._setHSLA(null, null, null, null, flags);
        }
    }, {
        key: 'setColour',
        value: function setColour(colour, silent) {
            this.setColor(colour, silent);
        }
    }, {
        key: 'show',
        value: function show() {
            var parent = this.settings.parent;
            if (!parent) {
                return false;
            }

            if (this.domElement) {
                var toggled = this._toggleDOM(true);

                this._setPosition();

                return toggled;
            }

            var html = this.settings.template || '<div class="picker_wrapper" tabindex="-1"><div class="picker_arrow"></div><div class="picker_hue picker_slider"><div class="picker_selector"></div></div><div class="picker_sl"><div class="picker_selector"></div></div><div class="picker_alpha picker_slider"><div class="picker_selector"></div></div><div class="picker_editor"><input aria-label="Type a color name or hex value"/></div><div class="picker_sample"></div><div class="picker_done"><button>Ok</button></div><div class="picker_cancel"><button>Cancel</button></div></div>';
            var wrapper = parseHTML(html);

            this.domElement = wrapper;
            this._domH = $('.picker_hue', wrapper);
            this._domSL = $('.picker_sl', wrapper);
            this._domA = $('.picker_alpha', wrapper);
            this._domEdit = $('.picker_editor input', wrapper);
            this._domSample = $('.picker_sample', wrapper);
            this._domOkay = $('.picker_done button', wrapper);
            this._domCancel = $('.picker_cancel button', wrapper);

            wrapper.classList.add('layout_' + this.settings.layout);
            if (!this.settings.alpha) {
                wrapper.classList.add('no_alpha');
            }
            if (!this.settings.editor) {
                wrapper.classList.add('no_editor');
            }
            if (!this.settings.cancelButton) {
                wrapper.classList.add('no_cancel');
            }
            this._ifPopup(function () {
                return wrapper.classList.add('popup');
            });

            this._setPosition();

            if (this.colour) {
                this._updateUI();
            } else {
                this._setColor(this.settings.defaultColor);
            }
            this._bindEvents();

            return true;
        }
    }, {
        key: 'hide',
        value: function hide() {
            return this._toggleDOM(false);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this._events.destroy();
            if (this.domElement) {
                this.settings.parent.removeChild(this.domElement);
            }
        }
    }, {
        key: '_bindEvents',
        value: function _bindEvents() {
            var _this2 = this;

            var that = this,
                dom = this.domElement,
                events = this._events;

            function addEvent(target, type, handler) {
                events.add(target, type, handler);
            }

            addEvent(dom, 'click', function (e) {
                return e.preventDefault();
            });

            dragTrack(events, this._domH, function (x, y) {
                return that._setHSLA(x);
            });

            dragTrack(events, this._domSL, function (x, y) {
                return that._setHSLA(null, x, 1 - y);
            });

            if (this.settings.alpha) {
                dragTrack(events, this._domA, function (x, y) {
                    return that._setHSLA(null, null, null, 1 - y);
                });
            }

            var editInput = this._domEdit;
            {
                addEvent(editInput, 'input', function (e) {
                    that._setColor(this.value, { fromEditor: true, failSilently: true });
                });

                addEvent(editInput, 'focus', function (e) {
                    var input = this;

                    if (input.selectionStart === input.selectionEnd) {
                        input.select();
                    }
                });
            }

            this._ifPopup(function () {

                var popupCloseProxy = function popupCloseProxy(e) {
                    return _this2.closeHandler(e);
                };

                addEvent(window, EVENT_CLICK_OUTSIDE, popupCloseProxy);
                addEvent(window, EVENT_TAB_MOVE, popupCloseProxy);
                onKey(events, dom, ['Esc', 'Escape'], popupCloseProxy);

                var timeKeeper = function timeKeeper(e) {
                    _this2.__containedEvent = e.timeStamp;
                };
                addEvent(dom, EVENT_CLICK_OUTSIDE, timeKeeper);

                addEvent(dom, EVENT_TAB_MOVE, timeKeeper);

                addEvent(_this2._domCancel, 'click', popupCloseProxy);
            });

            var onDoneProxy = function onDoneProxy(e) {
                _this2._ifPopup(function () {
                    return _this2.closeHandler(e);
                });
                if (_this2.onDone) {
                    _this2.onDone(_this2.colour);
                }
            };
            addEvent(this._domOkay, 'click', onDoneProxy);
            onKey(events, dom, ['Enter'], onDoneProxy);
        }
    }, {
        key: '_setPosition',
        value: function _setPosition() {
            var parent = this.settings.parent,
                elm = this.domElement;

            if (parent !== elm.parentNode) {
                parent.appendChild(elm);
            }

            this._ifPopup(function (popup) {

                if (getComputedStyle(parent).position === 'static') {
                    parent.style.position = 'relative';
                }

                var cssClass = popup === true ? 'popup_right' : 'popup_' + popup;

                ['popup_top', 'popup_bottom', 'popup_left', 'popup_right'].forEach(function (c) {

                    if (c === cssClass) {
                        elm.classList.add(c);
                    } else {
                        elm.classList.remove(c);
                    }
                });

                elm.classList.add(cssClass);
            });
        }
    }, {
        key: '_setHSLA',
        value: function _setHSLA(h, s, l, a, flags) {
            flags = flags || {};

            var col = this.colour,
                hsla = col.hsla;

            [h, s, l, a].forEach(function (x, i) {
                if (x || x === 0) {
                    hsla[i] = x;
                }
            });
            col.hsla = hsla;

            this._updateUI(flags);

            if (this.onChange && !flags.silent) {
                this.onChange(col);
            }
        }
    }, {
        key: '_updateUI',
        value: function _updateUI(flags) {
            if (!this.domElement) {
                return;
            }
            flags = flags || {};

            var col = this.colour,
                hsl = col.hsla,
                cssHue = 'hsl(' + hsl[0] * HUES + ', 100%, 50%)',
                cssHSL = col.hslString,
                cssHSLA = col.hslaString;

            var uiH = this._domH,
                uiSL = this._domSL,
                uiA = this._domA,
                thumbH = $('.picker_selector', uiH),
                thumbSL = $('.picker_selector', uiSL),
                thumbA = $('.picker_selector', uiA);

            function posX(parent, child, relX) {
                child.style.left = relX * 100 + '%';
            }
            function posY(parent, child, relY) {
                child.style.top = relY * 100 + '%';
            }

            posX(uiH, thumbH, hsl[0]);

            this._domSL.style.backgroundColor = this._domH.style.color = cssHue;

            posX(uiSL, thumbSL, hsl[1]);
            posY(uiSL, thumbSL, 1 - hsl[2]);

            uiSL.style.color = cssHSL;

            posY(uiA, thumbA, 1 - hsl[3]);

            var opaque = cssHSL,
                transp = opaque.replace('hsl', 'hsla').replace(')', ', 0)'),
                bg = 'linear-gradient(' + [opaque, transp] + ')';

            this._domA.style.background = bg + ', ' + BG_TRANSP;

            if (!flags.fromEditor) {
                var format = this.settings.editorFormat,
                    alpha = this.settings.alpha;

                var value = void 0;
                switch (format) {
                    case 'rgb':
                        value = col.printRGB(alpha);break;
                    case 'hsl':
                        value = col.printHSL(alpha);break;
                    default:
                        value = col.printHex(alpha);
                }
                this._domEdit.value = value;
            }

            this._domSample.style.color = cssHSLA;
        }
    }, {
        key: '_ifPopup',
        value: function _ifPopup(actionIf, actionElse) {
            if (this.settings.parent && this.settings.popup) {
                actionIf && actionIf(this.settings.popup);
            } else {
                actionElse && actionElse();
            }
        }
    }, {
        key: '_toggleDOM',
        value: function _toggleDOM(toVisible) {
            var dom = this.domElement;
            if (!dom) {
                return false;
            }

            var displayStyle = toVisible ? '' : 'none',
                toggle = dom.style.display !== displayStyle;

            if (toggle) {
                dom.style.display = displayStyle;
            }
            return toggle;
        }
    }]);
    return Picker;
}();

{
    var style = document.createElement('style');
    style.textContent = '.picker_wrapper.no_alpha .picker_alpha{display:none}.picker_wrapper.no_editor .picker_editor{position:absolute;z-index:-1;opacity:0}.picker_wrapper.no_cancel .picker_cancel{display:none}.layout_default.picker_wrapper{display:flex;flex-flow:row wrap;justify-content:space-between;align-items:stretch;font-size:10px;width:25em;padding:.5em}.layout_default.picker_wrapper input,.layout_default.picker_wrapper button{font-size:1rem}.layout_default.picker_wrapper>*{margin:.5em}.layout_default.picker_wrapper::before{content:"";display:block;width:100%;height:0;order:1}.layout_default .picker_slider,.layout_default .picker_selector{padding:1em}.layout_default .picker_hue{width:100%}.layout_default .picker_sl{flex:1 1 auto}.layout_default .picker_sl::before{content:"";display:block;padding-bottom:100%}.layout_default .picker_editor{order:1;width:6.5rem}.layout_default .picker_editor input{width:100%;height:100%}.layout_default .picker_sample{order:1;flex:1 1 auto}.layout_default .picker_done,.layout_default .picker_cancel{order:1}.picker_wrapper{box-sizing:border-box;background:#f2f2f2;box-shadow:0 0 0 1px silver;cursor:default;font-family:sans-serif;color:#444;pointer-events:auto}.picker_wrapper:focus{outline:none}.picker_wrapper button,.picker_wrapper input{box-sizing:border-box;border:none;box-shadow:0 0 0 1px silver;outline:none}.picker_wrapper button:focus,.picker_wrapper button:active,.picker_wrapper input:focus,.picker_wrapper input:active{box-shadow:0 0 2px 1px #1e90ff}.picker_wrapper button{padding:.4em .6em;cursor:pointer;background-color:#f5f5f5;background-image:linear-gradient(0deg, gainsboro, transparent)}.picker_wrapper button:active{background-image:linear-gradient(0deg, transparent, gainsboro)}.picker_wrapper button:hover{background-color:#fff}.picker_selector{position:absolute;z-index:1;display:block;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border:2px solid #fff;border-radius:100%;box-shadow:0 0 3px 1px #67b9ff;background:currentColor;cursor:pointer}.picker_slider .picker_selector{border-radius:2px}.picker_hue{position:relative;background-image:linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red);box-shadow:0 0 0 1px silver}.picker_sl{position:relative;box-shadow:0 0 0 1px silver;background-image:linear-gradient(180deg, white, rgba(255, 255, 255, 0) 50%),linear-gradient(0deg, black, rgba(0, 0, 0, 0) 50%),linear-gradient(90deg, #808080, rgba(128, 128, 128, 0))}.picker_alpha,.picker_sample{position:relative;background:linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%) 0 0/2em 2em,linear-gradient(45deg, lightgrey 25%, white 25%, white 75%, lightgrey 75%) 1em 1em/2em 2em;box-shadow:0 0 0 1px silver}.picker_alpha .picker_selector,.picker_sample .picker_selector{background:none}.picker_editor input{font-family:monospace;padding:.2em .4em}.picker_sample::before{content:"";position:absolute;display:block;width:100%;height:100%;background:currentColor}.picker_arrow{position:absolute;z-index:-1}.picker_wrapper.popup{position:absolute;z-index:2;margin:1.5em}.picker_wrapper.popup,.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{background:#f2f2f2;box-shadow:0 0 10px 1px rgba(0,0,0,.4)}.picker_wrapper.popup .picker_arrow{width:3em;height:3em;margin:0}.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{content:"";display:block;position:absolute;top:0;left:0;z-index:-99}.picker_wrapper.popup .picker_arrow::before{width:100%;height:100%;-webkit-transform:skew(45deg);transform:skew(45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%}.picker_wrapper.popup .picker_arrow::after{width:150%;height:150%;box-shadow:none}.popup.popup_top{bottom:100%;left:0}.popup.popup_top .picker_arrow{bottom:0;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.popup.popup_bottom{top:100%;left:0}.popup.popup_bottom .picker_arrow{top:0;left:0;-webkit-transform:rotate(90deg) scale(1, -1);transform:rotate(90deg) scale(1, -1)}.popup.popup_left{top:0;right:100%}.popup.popup_left .picker_arrow{top:0;right:0;-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.popup.popup_right{top:0;left:100%}.popup.popup_right .picker_arrow{top:0;left:0}';
    document.documentElement.firstElementChild.appendChild(style);

    Picker.StyleElement = style;
}




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztB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QUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEscUZBQXFGLEVBQUUsNEVBQTRFLEVBQUU7O0FBRXJLLDBDQUEwQyxFQUFFO0FBQzVDLG9EQUFvRDtBQUNwRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9DQUFvQyxnQkFBZ0I7QUFDcEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFF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L3N0eWxlcy5zY3NzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3M/MzIxZiIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvZHJhd2luZy50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2VudGl0aWVzL2VudGl0eS50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2VudGl0aWVzL2ZyZWVoYW5kLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvZW50aXRpZXMvbnVsbC50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2VudGl0aWVzL3JlY3QudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9odWQvY29sb3JfcGlja2VyLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvaHVkL2h1ZC50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2h1ZC9odWRfaXRlbS50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2h1ZC9sYXllcnMudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9odWQvdG9vbGJhci50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL3Rvb2xzL2xheWVyLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdG9vbHMvbWFya2VyLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdG9vbHMvcmVjdGFuZ2xlLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdG9vbHMvc2VsZWN0LnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdG9vbHMvc2hhcGUudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy90b29scy90b29sLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdXRpbC9jaXJjbGUudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy91dGlsL2NvbG9yLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdXRpbC9ndWlkZS50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL3V0aWwva2V5X2V2ZW50cy50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL3V0aWwvbm9ybWFsaXplLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdXRpbC9wb2ludHMudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvQWJzdHJhY3RWZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvQXJyYXlWZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvRmxvYXQzMlZlY3Rvci5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9WZWMyRC5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9WZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy92YW5pbGxhLXBpY2tlci9kaXN0L3ZhbmlsbGEtcGlja2VyLm1qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3doaXRlYm9hcmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3doaXRlYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNkcmF3aW5nLWNhbnZhcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jcGFsZXR0ZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbiNwYWxldHRlIC5jb2xvciB7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yKTtcXG59XFxuI3BhbGV0dGUgLmNvbG9yOmhvdmVyIHtcXG4gIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcbiNwYWxldHRlIC5jb2xvci5zZWxlY3RlZCB7XFxuICBib3JkZXI6IDEwcHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjU1LCAwLjcpO1xcbn1cXG5cXG4jbGF5ZXJzIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdG9wOiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBtYXJnaW46IDQwcHg7XFxufVxcbiNsYXllcnMgLmxheWVyIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2xheWVycyAuYWN0aXZlIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDEyOCwgMCk7XFxufVxcbiNsYXllcnMgLmxheWVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jdG9vbHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMXJlbTtcXG4gIHRvcDogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jdG9vbHMgYnV0dG9uIHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuI2hlbHAudmlzaWJsZSB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjY2RjZGNkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI2hlbHAudmlzaWJsZSAuaGVhZGVyIHtcXG4gIGhlaWdodDogOHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jaGVscC52aXNpYmxlIC5oZWFkZXIgYnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbn1cXG4jaGVscC52aXNpYmxlIC5oZWFkZXIgaDIge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG4jaGVscC52aXNpYmxlIGgzIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuI2hlbHAudmlzaWJsZSAuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuI2hlbHAudmlzaWJsZSAuYm9keSAubGVmdCB7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXG59XFxuI2hlbHAudmlzaWJsZSAuYm9keSAubGVmdCBwIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcbiNoZWxwLnZpc2libGUgLmJvZHkgLnJpZ2h0IHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcbiNoZWxwLnZpc2libGUgLmJvZHkgLnJpZ2h0IGRsLmlubGluZS1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogc2V0IHRoZSBjb250YWluZXIgd2lkdGgqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcbiNoZWxwLnZpc2libGUgLmJvZHkgLnJpZ2h0IGRsLmlubGluZS1mbGV4IGR0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZsZXg6IDAgMCAyMCU7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbiNoZWxwLnZpc2libGUgLmJvZHkgLnJpZ2h0IGRsLmlubGluZS1mbGV4IGRkIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZmxleDogMCAwIDgwJTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxzQkFBQTtBQUZGOztBQUtBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFGRjtBQUdFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUFESjtBQUVJO0VBQ0UsMkNBQUE7QUFBTjtBQUVJO0VBQ0UsMkNBQUE7QUFBTjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUVBLFlBQUE7QUFIRjtBQUtFO0VBQ0Usb0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFISjtBQU1FO0VBQ0Usa0NBQUE7QUFKSjtBQU9FO0VBQ0Usb0NBQUE7QUFMSjs7QUFTQTtFQUNFLGFBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFORjtBQU9FO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUxKOztBQVNBO0VBQ0UseUNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQU5GO0FBUUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFOSjtBQVFJO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFOTjtBQVNJO0VBQ0UsZUFBQTtBQVBOO0FBV0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQVRKO0FBWUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBVko7QUFZSTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQVZOO0FBV007RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBVFI7QUFhSTtFQUNFLFVBQUE7QUFYTjtBQWFJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUFYTjtBQWNJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQVpOO0FBZUk7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFiTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBUaGlzIGlzIGFsbCBob3JyaWJsZS4uLlxcbi8vIGJ1dCBpdCB3b3Jrcy5cXG5cXG4qIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbjowO1xcbiAgcGFkZGluZzowO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG92ZXJmbG93OmhpZGRlbjtcXG59XFxuXFxuI2RyYXdpbmctY2FudmFzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbiNwYWxldHRlIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIC5jb2xvciB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDEwcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIpO1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBib3JkZXI6IDEwcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICB9XFxuICAgICYuc2VsZWN0ZWQge1xcbiAgICAgIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDIwNCwgMjA0LCAyNTUsIDAuNyk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuI2xheWVycyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRvcDogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbiAgbWFyZ2luOiA0MHB4O1xcblxcbiAgLmxheWVyIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcXG4gICAgYm9yZGVyLXJhZGl1czogMiU7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5hY3RpdmUge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAxMjgsIDApO1xcbiAgfVxcblxcbiAgLmxheWVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxLjApO1xcbiAgfVxcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN0b29scyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxcmVtO1xcbiAgdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICB9XFxufVxcblxcbiNoZWxwLnZpc2libGUge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2NkY2RjZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA4cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBoZWlnaHQ6IDFyZW07XFxuICAgIH1cXG4gIFxcbiAgICBoMiB7XFxuICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgfVxcblxcbiAgLmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIC5sZWZ0IHtcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxuICAgICAgcCB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAucmlnaHQge1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuXFxuICAgIGRsLmlubGluZS1mbGV4IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZmxvdzogcm93O1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAvKiBzZXQgdGhlIGNvbnRhaW5lciB3aWR0aCovXFxuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIH1cXG5cXG4gICAgZGwuaW5saW5lLWZsZXggZHQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICBmb250LXdlaWdodDo5MDA7XFxuICAgICAgZmxleDogMCAwIDIwJTtcXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgIGRsLmlubGluZS1mbGV4IGRkIHtcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICBmbGV4OiAwIDAgODAlO1xcbiAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgICBcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IERyYXdpbmcgZnJvbSBcIi4vZHJhd2luZ1wiO1xuLyoqXG4gKiBUaGUgdG9wLWxldmVsIEFwcCBjbGFzcywgbWFuYWdlcyBzZXR1cCwgYmFzZSBsb29wLCBhbmQgZXZlbnRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtIVE1MQ2FudmFzRWxlbWVudH0gICAgICAgICBjYW52YXMgICBUaGlzIGlzIHRoZSB0YXJnZXQgY2FudmFzIGZvciBvdXIgZ2FtZVxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBUaGlzIGlzIHRoZSBjb250ZXQgZm9yIHRoZSBjYW52YXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbnRleHQpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IGZvciB0aGUgY2FudmFzLm9uS2V5RG93biBldmVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5rZXlfZG93biA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBmb3IgdGhlIGNhbnZhcy5vbk1vdXNlTW92ZSBldmVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb3VzZV9tb3ZlID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IGZvciB0aGUgY2FudmFzLm9uTW91c2VNb3ZlIGV2ZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdXNlX3doZWVsID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IGZvciB0aGUgY2FudmFzLm9uTW91c2VEb3duIGV2ZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdXNlX2Rvd24gPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgZm9yIHRoZSBjYW52YXMub25Nb3VzZVVwIGV2ZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdXNlX3VwID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyYXdpbmcgY2FudmFzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNhbnZhcyA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaW1lc3RhbXAgd2hlbiBsYXN0IGZyYW1lIHdhcyBwcm9jZXNzZWRcbiAgICAgICAgICogdXNlZCBmb3IgY2FsY3VsYXRpbmcgdGhlIGRlbHRhVGltZSBhbmRcbiAgICAgICAgICogRlBTLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbGRUaW1lc3RhbXAgPSAwLjA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIb2xkZXIgZm9yIEZQUywgdXNlZnVsIHdoZW4gbmVlZGluZyB0byByZW5kZXJcbiAgICAgICAgICogdGhpcyB3aXRoaW4gdGhlIGdhbWUgZW52aXJvbm1lbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZnBzID0gMDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIC8vIFNldCBjYW52YXMgZGltZW5zaW9ucywgVE9ETzogbWFrZSB0aGlzIGR5bmFtaWMsIFxuICAgICAgICAvLyBjdXJyZW50bHkgaXQncyBvbmx5IHNldCB3aGVuIHRoZSBwYWdlIGxvYWRzLlxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQm9vdHN0cmFwIGZ1bmN0aW9uLCB1c2VkIGZvciBzZXR0aW5nXG4gICAgICogZXZlcnl0aGluZyB1cCBwcmlvciB0byBraWNraW5nIG9mZiB0aGUgcmVuZGVyTG9vcFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0VXAoKSB7XG4gICAgICAgIC8vIENyZWF0ZSBkcmF3aW5nXG4gICAgICAgIGlmICh0aGlzLmNhbnZhcykge1xuICAgICAgICAgICAgdGhpcy5kcmF3aW5nID0gbmV3IERyYXdpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuZHJhd2luZy5zZXR1cCh0aGlzLmNhbnZhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGFueSBwZXJpb2RpYyB0aW1lcnMuXG4gICAgICogV2UgY2FuIHVzZSB0aGlzIHRvIHRyaWdnZXIgYW55IHRpbWUgYmFzZWQgZXZlbnRzLiBpZSBldmVyeSA1IHNlY29uZHMgZG8gWFxuICAgICAqXG4gICAgICogQHBhcmFtICAge0RPTUhpZ2hSZXNUaW1lU3RhbXB9ICB0aW1lc3RhbXAgIEVQT0MgTWlsbGlzZWNvbmRzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm9jZXNzVGltZXJzKHRpbWVzdGFtcCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbnRyeSBwb2ludCBmb3IgYWxsIHRoaW5ncy5cbiAgICAgKlxuICAgICAqIFByb2Nlc3NlcyB0aW1lcnNcbiAgICAgKiBVcGRhdGVzIGFsbCBhcHBsaWNhdGlvbiBlbnRpdGllcyxcbiAgICAgKiBDYXNjYWRlcyByZW5kZXIgdG8gZW50aXRpZXMuXG4gICAgICogQ2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7RE9NSGlnaFJlc1RpbWVTdGFtcH0gIHRpbWVzdGFtcCAgRVBPQyBtaWxsaXNlY29uZHNcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHByb2Nlc3ModGltZXN0YW1wKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIC8vIFNob3J0IGNpcmN1dCwgdGhlc2UgTVVTVCBleGlzdFxuICAgICAgICBpZiAodGhpcy5jYW52YXMgPT0gbnVsbCB8fCB0aGlzLmNvbnRleHQgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gUHJvY2VzcyBhbnkgdGltZXJzXG4gICAgICAgIHRoaXMucHJvY2Vzc1RpbWVycyh0aW1lc3RhbXApO1xuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBzZWNvbmRzIHBhc3NlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZVxuICAgICAgICBjb25zdCBkdCA9IHRpbWVzdGFtcCAtIHRoaXMub2xkVGltZXN0YW1wO1xuICAgICAgICAvLyBVcGRhdGUgdGltZXN0YW1wIGZvciBuZXh0IHByb2Nlc3MgZnJhbWVcbiAgICAgICAgdGhpcy5vbGRUaW1lc3RhbXAgPSB0aW1lc3RhbXA7XG4gICAgICAgIC8vIFRyaWdnZXIgV29ybGQgY2FsY3NcbiAgICAgICAgLy8gVE9ETzogYXN5bmM/IFBlcmZvcm1hbmNlIGltcHJvdm1lbnQgYXQgYSBsYXRlciBkYXRlLlxuICAgICAgICAoX2EgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wcm9jZXNzKGR0LCB0aW1lc3RhbXApO1xuICAgICAgICAvLyBSZW5kZXIgdGhpbmdzXG4gICAgICAgIChfYiA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnJlbmRlcih0aGlzLmNhbnZhcywgdGhpcy5jb250ZXh0KTtcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgTEFZRVJfQ1JFQVRFX0tFWVMgPSAwO1xuZXhwb3J0IGNvbnN0IENvbnN0YW50cyA9IHtcbiAgICBQQUxMRVRURV9TSVpFOiA2MCxcbiAgICBUT09MX1NQQUNJTkc6IDIwLFxuICAgIENBTlZBU19TSVpFOiB7XG4gICAgICAgIHdpZHRoOiAod2luZG93KSA/IHdpbmRvdy5pbm5lcldpZHRoIDogMTk4MCxcbiAgICAgICAgaGVpZ2h0OiAod2luZG93KSA/IHdpbmRvdy5pbm5lckhlaWdodCA6IDEwODBcbiAgICB9LFxuICAgIEdVSURFX1NJWkU6IDEwLFxuICAgIExBWUVSU19XSURUSDogMTI1LFxuICAgIExBWUVSX0NSRUFURV9ERUxBWTogNTAwMCxcbiAgICBMQVlFUl9DUkVBVEVfQkVIQVZJT1I6IExBWUVSX0NSRUFURV9LRVlTLFxuICAgIENBTlZBU19UQVJHRVQ6IFwiZHJhd2luZy1jYW52YXNcIlxufTtcbiIsImltcG9ydCAqIGFzIFZlYzIgZnJvbSAndmVjdG9yMmQnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgSHVkIGZyb20gXCIuL2h1ZC9odWRcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiLi91dGlsL2NvbG9yXCI7XG5pbXBvcnQgTGF5ZXIgZnJvbSBcIi4vdG9vbHMvbGF5ZXJcIjtcbmltcG9ydCBNYXJrZXIgZnJvbSBcIi4vdG9vbHMvbWFya2VyXCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiLi9odWQvdG9vbGJhclwiO1xuaW1wb3J0IExheWVycyBmcm9tIFwiLi9odWQvbGF5ZXJzXCI7XG5pbXBvcnQgS2V5RXZlbnRzIGZyb20gXCIuL3V0aWwva2V5X2V2ZW50c1wiO1xuaW1wb3J0IENvbG9yUGlja2VyIGZyb20gXCIuL2h1ZC9jb2xvcl9waWNrZXJcIjtcbi8qKlxuICogTWFpbiBkcmF3aW5nIGNsYXNzLCBjb25zdHJ1Y3RzIGV2ZXJ5dHJoaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdpbmcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogTGF5ZXIgaW5jcmVtZW50YWwgbnVtYmVyLCB1c2VkIHRvIHRyYWNrIHVuaXF1ZSBudW1lcmljYWxcbiAgICAgICAgICogaWQgb2YgYWxsIGVudGl0aWVzIGxvYWRlZCBvbnRvIHRoZSBjYW52YXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sYXllcl9pZCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbGF5ZXJzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIgIHtNYXA8bnVtYmVyLCBMYXllcj59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxheWVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhlYWRzIHVwIGRpc3BsYXkgKEdVSSlcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7SHVkfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5odWQgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdWxkIHdlIGRyYXcgdGhlIHRhcmdldHMuIFRoaXMgaXMgdGhlIHNpemUgYW5kIHNoYXBlIG9mIHRoZSBjdXJyZW50IGJydXNoL3Rvb2wuXG4gICAgICAgICAqIFRoaXMgaXMgYSB0ZW1wb3Jhcnkgb3ZlcmxheSBzbyB0aGUgdXNlciBjYW4gc2VlIGFuIGluZGVpY2F0aW9uIG9mIHdoYXQgdGhleSBhcmVcbiAgICAgICAgICogZG9pbmcgYmVmb3JlIHRoZXkgZG8gaXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRyYXdfdGFyZ2V0ID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRhcmdldCBjdXJyZW50IGxvY2F0aW9uLCB3aGVyZSB3ZSdyZSBkcmF3aW5nL3dvcmtpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge1ZlYzIuVmVjdG9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2xvYmFsIHRvb2wgc2l6ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdsb2JhbF90YXJnZXRfc2l6ZSA9IDIwO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3VycmVudCB0b29sIHRoZSB1c2VyIGhhcyBzZWxlY3RlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7VG9vbH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudG9vbCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIZWxwZXIgdG8gY2FsY3VsYXRlIEZQUyBhbmQgZnJhbWVyYXRlc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRpbWVUb0RyYXcgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogSG9sZGVyIGZvciBkZWx0YXRpbWUsIHVzZWQgZm9yIGFuaW1hdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kdCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmV2aW91cyBmcmFtZSB0aW1lc3RhbXAsIHVzZWQgdG8gY2FsY3VsYXRlIEZQUyBhbmQgYW5pbWF0aW9ucy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7RE9NSGlnaFJlc1RpbWVTdGFtcH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub2xkVGltZXN0YW1wID0gMC4wO1xuICAgICAgICAvKipcbiAgICAgICAgICogRnJhbWVzIHBlciBzZWNvbmRcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mcHMgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdyBkZWJ1Zy4gRG8gd2Ugd2FudCB0byBzaG93IGRlYnVnIGluZm8gb25zY3JlZW4uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3dfZGVidWcgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogU3Ryb2tlIGNvbG9yXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0cm9rZV9jb2xvciA9IG5ldyBDb2xvcigwLCAwLCAwLCAxKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbGwgQ29sb3JcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZmlsbF9jb2xvciA9IG5ldyBDb2xvcigyNTUsIDI1NSwgMCwgMSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIExheWVyIGZyb20gdGhlIGNhbnZhc1xuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIGxheWVyX2lkICAgIElEIG9mIHRoZSBsYXllciB0byByZW1vdmVcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbW92ZUxheWVyKGxheWVyX2lkKSB7XG4gICAgICAgIGlmIChsYXllcl9pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhpcyByZW1vdmVzIHRoZSBsYXllciBmcm9tIHRoZSBkcmF3aW5nXG4gICAgICAgIHRoaXMubGF5ZXJzLmRlbGV0ZShsYXllcl9pZCk7XG4gICAgICAgIC8vIE5vdyB0aGF0IHRoZSBsYXllciBoYXMgYmVlbiByZW1vdmVkXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gc2V0IHRoZSBuZXcgYWN0aXZlX2xheWVyLlxuICAgICAgICAvLyBJZiB0aGVyZSdzIG9uZSBiZWxvdywgdGhlbiBjaG9vc2UgdGhhdC5cbiAgICAgICAgaWYgKHRoaXMubGF5ZXJzLmhhcyhsYXllcl9pZCAtIDEpKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9sYXllciA9IHRoaXMubGF5ZXJzLmdldChsYXllcl9pZCAtIDEpO1xuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGNob29zZSB0aGUgb25lIGFib3ZlIGlmIGl0IGV4aXN0c1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMubGF5ZXJzLmhhcyhsYXllcl9pZCArIDEpKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9sYXllciA9IHRoaXMubGF5ZXJzLmdldChsYXllcl9pZCArIDEpO1xuICAgICAgICAgICAgLy8gSWYgbmVpdGhlciBvZiB0aG9zZSBhcmUgdHJ1ZS4uLlxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5ZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gbGF5ZXJzIGxlZnQsIGNyZWF0ZSBhIG5ldyBvbmUsIHNldCBpdCBhY3RpdmUuXG4gICAgICAgICAgICAgICAgdGhpcy5sYXllcnMuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExheWVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPdGVoZXJ3aXNlIGNob29zZSB0aGUgbGF5ZXIgd2l0aCB0aGUgc21hbGxlc3QgSURcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZV9sYXllciA9IHRoaXMubGF5ZXJzLmdldChNYXRoLm1pbiguLi50aGlzLmxheWVycy5rZXlzKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZWRyYXcgdGhlIGxheWVycyBvdmVydmlldy5cbiAgICAgICAgdGhpcy5yZWRyYXdIdWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2l2ZW4gYW4gSUQsIHJldHVybiBhIExheWVyIHdpdGggdGhhdCBJRCBpZiBpdCBleGlzdHMsIG51bGwgaWYgaXQgZG9lc24ndC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBsYXllcl9pZCAgSUQgb2YgdGhlIGxheWVyIHRvIHJldHVybi5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtMYXllciB8IG51bGx9XG4gICAgICovXG4gICAgZ2V0TGF5ZXIobGF5ZXJfaWQpIHtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSB0aGlzLmxheWVycy5nZXQobGF5ZXJfaWQpO1xuICAgICAgICBpZiAobGF5ZXIpXG4gICAgICAgICAgICByZXR1cm4gbGF5ZXI7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWRyYXcgYWxsIEhVRCBpdGVtcy4gV2UgZG9uJ3Qgd2FudCB0byBkb1xuICAgICAqIHRoaXMgZXZlcnkgZnJhbWUgYXMgdGhlc2UgYXJlIERPTSBpdGVtcywgc28gd2UgaGF2ZVxuICAgICAqIGFuIGV4cGxpY2l0IGNhbGwgdG8gZG8gc28gd2hlbiB3ZSBuZWVkIHRvLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcmVkcmF3SHVkKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLmh1ZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEJ5TmFtZShcImxheWVyc1wiKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmJ1aWxkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZCBhIGxheWVyIHRvIHRoZSBkcmF3aW5nLCBzZXQgaXQgYXMgYWN0aXZlXG4gICAgICogYW5kIHJlZHJhdyB0aGUgaHVkIHRvIHNob3cgaXQgaW4gdGhlIGxheWVyIG92ZXJ2aWV3LlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgYWRkTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlX2xheWVyID0gbmV3IExheWVyKHRoaXMubGF5ZXJfaWQsIHRoaXMpO1xuICAgICAgICB0aGlzLmxheWVycy5zZXQodGhpcy5hY3RpdmVfbGF5ZXIuaWQsIHRoaXMuYWN0aXZlX2xheWVyKTtcbiAgICAgICAgdGhpcy5sYXllcl9pZCsrO1xuICAgICAgICB0aGlzLnJlZHJhd0h1ZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBhY3RpdmUgbGF5ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgbGF5ZXJfaWQgIElEIG9mIHRoZSBsYXllciB0byBzZXQgYXMgYWN0aXZlLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0QWN0aXZlTGF5ZXIobGF5ZXJfaWQpIHtcbiAgICAgICAgLy8gVE9ETzogQXNzdW1lcyB0aGUgbGF5ZXJfaWQgZXhpc3RzLCB3aGF0IGRvIHdlIGRvIGlmIGl0IGRvZXNuJ3Q/XG4gICAgICAgIHRoaXMuYWN0aXZlX2xheWVyID0gdGhpcy5sYXllcnMuZ2V0KGxheWVyX2lkKTtcbiAgICAgICAgdGhpcy5yZWRyYXdIdWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmV4dCBMYXllclxuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIGN1cnJlbnRfbGF5ZXJfaWQgIElEIG9mIHRoZSBjdXJyZW50IGxheWVyLlxuICAgICAqXG4gICAgICogQHJldHVybiAge251bWJlcn0gICBSZXR1cm5zIHRoZSBJRCBvZiB0aGUgbmV4dCBsYXllciBpbiB0aGUgTWFwKClcbiAgICAgKi9cbiAgICBnZXROZXh0TGF5ZXIoY3VycmVudF9sYXllcl9pZCkge1xuICAgICAgICBsZXQgbmV4dCA9IGZhbHNlO1xuICAgICAgICAvLyBSZW5kZXIgZWFjaCBvZiB0aGUgZXhpc3RpbmcgZW50aXRpdGVzLiAoRHJhd2luZ3MpXG4gICAgICAgIGZvciAobGV0IFtrZXksIGxheWVyXSBvZiB0aGlzLmxheWVycykge1xuICAgICAgICAgICAgaWYgKG5leHQgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IGN1cnJlbnRfbGF5ZXJfaWQpIHtcbiAgICAgICAgICAgICAgICBuZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJldiBMYXllclxuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIGN1cnJlbnRfbGF5ZXJfaWQgIElEIG9mIHRoZSBjdXJyZW50IGxheWVyLlxuICAgICAqXG4gICAgICogQHJldHVybiAge251bWJlcn0gICBSZXR1cm5zIHRoZSBJRCBvZiB0aGUgbmV4dCBsYXllciBpbiB0aGUgTWFwKClcbiAgICAgKi9cbiAgICBnZXRQcmV2TGF5ZXIoY3VycmVudF9sYXllcl9pZCkge1xuICAgICAgICBsZXQgcHJldmlvdXMgPSAtMTtcbiAgICAgICAgLy8gUmVuZGVyIGVhY2ggb2YgdGhlIGV4aXN0aW5nIGVudGl0aXRlcy4gKERyYXdpbmdzKVxuICAgICAgICBmb3IgKGxldCBba2V5LCBsYXllcl0gb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IGN1cnJlbnRfbGF5ZXJfaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldmlvdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmV2aW91cyA9IGtleTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBlbnRpdHkgdG8gdGhlIGFjdGl2ZSBsYXllci4gVGhpcyB3aWxsIGdldCBkcmF3biBpbiB0aGUgbmV4dCBmcmFtZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtFbnRpdHl9ICBlbnRpdHkgIEVudGl0eSB0byBhZGQgdG8gdGhlIGdhbWV3b3JsZFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgYWRkRW50aXR5KGVudGl0eSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghdGhpcy5hY3RpdmVfbGF5ZXIpXG4gICAgICAgICAgICB0aGlzLmFkZExheWVyKCk7XG4gICAgICAgIChfYSA9IHRoaXMuYWN0aXZlX2xheWVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRW50aXR5KGVudGl0eSk7XG4gICAgICAgIHRoaXMucmVkcmF3SHVkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtzZXR1cCBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtIVE1MQ2FudmFzRWxlbWVudH0gIGNhbnZhcyAgW2NhbnZhcyBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICAgICAgICAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBzZXR1cChjYW52YXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBTZXRzIHRoZSBkZWZhdWwvc3RhcnRpbmcgVG9vbC5cbiAgICAgICAgdGhpcy5zZXRUb29sKG5ldyBNYXJrZXIodGhpcykpO1xuICAgICAgICAvLyBBZGQgYSBsYXllciB0byB0aGUgZHJhd2luZ1xuICAgICAgICB0aGlzLmFkZExheWVyKCk7XG4gICAgICAgIC8vIEl0ZW1zIHRvIHRoZSBodWRcbiAgICAgICAgY29uc3QgaHVkID0gbmV3IEh1ZCgpO1xuICAgICAgICBjb25zdCBzZXRTdHJva2UgPSAoY29sb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3Ryb2tlX2NvbG9yID0gY29sb3I7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHNldEZpbGwgPSAoY29sb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3Ryb2tlX2NvbG9yID0gY29sb3I7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbG9yX3BpY2tlciA9IG5ldyBDb2xvclBpY2tlcih0aGlzKTtcbiAgICAgICAgaHVkLmFkZEl0ZW0oY29sb3JfcGlja2VyKTtcbiAgICAgICAgY29uc3QgdG9vbGJhciA9IG5ldyBUb29sYmFyKFwidG9vbGJhclwiLCB0aGlzKTtcbiAgICAgICAgaHVkLmFkZEl0ZW0odG9vbGJhcik7XG4gICAgICAgIC8vIEF0dGFjaCB0aGUgbGF5ZXJzIG92ZXJ2aWV3IHRvIHRoZSBIVURcbiAgICAgICAgY29uc3QgbGF5ZXJzID0gbmV3IExheWVycyh0aGlzKTtcbiAgICAgICAgaHVkLmFkZEl0ZW0obGF5ZXJzKTtcbiAgICAgICAgLy8gRHJhdyB0aGUgb3ZlcnZpZXcsIGZvciBlYWNoIGxheWVyXG4gICAgICAgIGxheWVycy5idWlsZCgpO1xuICAgICAgICAvLyBBdHRhY2ggdGhlIEhVRCB0byB0aGUgZHJhd2luZ1xuICAgICAgICB0aGlzLmh1ZCA9IGh1ZDtcbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXIgdG8gY2xvc2UgdGhlIGhlbHAgcG9wdXAgdGhhdCBzaG93cyBvbiBsb2FkLlxuICAgICAgICAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlbHAgI2Nsb3NlXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhlbHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlbHBcIik7XG4gICAgICAgICAgICBoZWxwID09PSBudWxsIHx8IGhlbHAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlbHAuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgICAgICAgICBoZWxwID09PSBudWxsIHx8IGhlbHAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlbHAuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFBhc3Mgb2ZmIGFsbCBLZXlib2FyZCBldmVudHMgdG8gdGhlIGtleV9ldmVudHMgaGFuZGxlci4gXG4gICAgICAgIC8vIERvIHRoaXMgZ2xvYmFsbHkuIE5vdCBqdXN0IG9uIHRoZSBDYW52YXMuXG4gICAgICAgIGNvbnN0IGtleUV2ZW50SGFuZGxlciA9IG5ldyBLZXlFdmVudHModGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGtleUV2ZW50SGFuZGxlci5oYW5kbGUoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQXR0YWNoIHNvbWUgZXZlbnRzIHRvIHRoZSBtYWluIGNhbnZhc1xuICAgICAgICBpZiAoY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW52ZW50IHRvIGhhbmRsZSBpbnB1dCBtb3ZlbWVudFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgIHtNb3VzZUV2ZW50fSAgZXZlbnQgICAgICAgW2V2ZW50IGRlc2NyaXB0aW9uXVxuICAgICAgICAgICAgICogQHBhcmFtICAge1t0eXBlXX0gICAgICBUb3VjaEV2ZW50ICBbVG91Y2hFdmVudCBkZXNjcmlwdGlvbl1cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgICAgICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IG1vdmVFdmVudCA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBWZWMyLlZlY3RvcihldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFZlYzIuVmVjdG9yKGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRZKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUYXJnZXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgaHVkLnNldEN1cnNvclBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHRhcmdldCBwb3NpdGlvbiAod2hlcmUgd2Ugd2FudCB0byBkcmF3KSB3aGVuIHRoZSBtb3VzZSBtb3ZlcyBvdmVyIHRoZSBjYW52YXNcbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVFdmVudCk7XG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBtb3ZlRXZlbnQpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFdmVudCB0byBoYW5kbGUgdG91Y2ggc3RhcnRcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICB7TW91c2VFdmVudH0gIGV2ZW50ICAgICAgIFtldmVudCBkZXNjcmlwdGlvbl1cbiAgICAgICAgICAgICAqIEBwYXJhbSAgIHtbdHlwZV19ICAgICAgVG91Y2hFdmVudCAgW1RvdWNoRXZlbnQgZGVzY3JpcHRpb25dXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHJldHVybiAge1t0eXBlXX0gICAgICAgICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCBkb3duRXZlbnQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFZlYzIuVmVjdG9yKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjMi5WZWN0b3IoZXZlbnQudG91Y2hlc1swXS5jbGllbnRYLCBldmVudC50b3VjaGVzWzBdLmNsaWVudFkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLnRvb2wpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zdGFydERyYXdpbmcocG9zaXRpb24pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBtb3VzZSBpcyBkb3duLCBzaWduYWwgdG8gdGhlbiBkcmF3aW5nIG9iamVjdCB0aGF0IHdlJ3JlIFxuICAgICAgICAgICAgLy8gZHJhd2luZywgd2l0aCB3aGF0ZXZlciB0b29sIHdlJ3ZlIGN1cnJlbnRseSBzZWxlY3RlZC5cbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGRvd25FdmVudCk7XG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZG93bkV2ZW50KTtcbiAgICAgICAgICAgIC8vIExpc3RlbiBmb3IgbW91c2V3aGVlbCwgYW5kIHJlc2l6ZSB0aGUgdG9vbCBkZXBlbmRpbmcgb24gZGlyZWN0aW9uLlxuICAgICAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLnRvb2wpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRTaXplKHRoaXMudG9vbC5zaXplIC0gMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAoX2IgPSB0aGlzLnRvb2wpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zZXRTaXplKHRoaXMudG9vbC5zaXplICsgMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ2xvYmFsX3RhcmdldF9zaXplID0gKChfYyA9IHRoaXMudG9vbCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnNpemUpIHx8IDIwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEV2ZW50IHRvIGhhbmRsZSBzdG9wcGluZyBvZiBtb3VzZSBldmVudHNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gICB7TW91c2VFdmVudH0gIGV2ZW50ICAgICAgIFtldmVudCBkZXNjcmlwdGlvbl1cbiAgICAgICAgICAgICAqIEBwYXJhbSAgIHtbdHlwZV19ICAgICAgVG91Y2hFdmVudCAgW1RvdWNoRXZlbnQgZGVzY3JpcHRpb25dXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHJldHVybiAge1t0eXBlXX0gICAgICAgICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCB1cEV2ZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMudG9vbCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN0b3BEcmF3aW5nKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gSWYgd2UgbW91c2V1cCB3ZSBuZWVkIHRvIHRlbGwgdGhlIGRyYXdpbmcgb2JqZWN0LCB3ZSd2ZSBzdG9wcGVkIGRyYXdpbmcuXG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdXBFdmVudCk7XG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHVwRXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgdG9vbCB0aGF0IHRoZSB1c2VyIGhhcyBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtUb29sfSAgdG9vbCAgU2V0J3MgdGhlIGFjdGl2ZSB0b29sIHRvIFRvb2xcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHNldFRvb2wodG9vbCkge1xuICAgICAgICB0aGlzLnRvb2wgPSB0b29sO1xuICAgICAgICB0aGlzLnRvb2wuc2V0U2l6ZSh0aGlzLmdsb2JhbF90YXJnZXRfc2l6ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVuc2V0J3MgdGhlIGN1cnJlbnQgdGFyZ2V0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICB1bnNldFRhcmdldCgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHRhcmdldCBwb3NpdGlvbiAoV2hlcmUgdGhlIG1vdXNlIGlzKVxuICAgICAqXG4gICAgICogQHZhciB7VmVjMi5WZWN0b3J9IG1vdXNlX3BvcyAgIFRhcmdldCBwb3NpdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXRUYXJnZXRQb3NpdGlvbihtb3VzZV9wb3MpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBtb3VzZV9wb3M7XG4gICAgICAgIGlmICh0aGlzLnRvb2wpIHtcbiAgICAgICAgICAgIHRoaXMudG9vbC5zZXRMb2NhdGlvbihtb3VzZV9wb3MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byBkcmF3IHRoZSB0YXJnZXRzLCAoRHJhd3MgdGhlIFRvb2wgaGVscGVyIHRvIHRoZSBVSSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBDYW52YXMgZHJhd2luZyBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBkcmF3VGFyZ2V0KGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHRoaXMudG9vbCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnRvb2wuZHJhd1RhcmdldChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gY291bnQgb2YgYWxsIGVudGl0ZXMgYnkgdHlwZSwgaWYgbm8gdHlwZSBzcGVjaWZpZWQsXG4gICAgICogdGhlbiByZXR1bnIgY291bnQgb2YgYWxsLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZz99ICB0eXBlICBFbnRpdHkgVHlwZXxOYW1lIFtvcHRpb25hbF1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtudW1iZXJ9ICAgICAgICBOdW1iZXIgb2YgZW50aXRpZXNcbiAgICAgKi9cbiAgICBjb3VudEVudGl0aWVzKHR5cGUpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChsZXQgW2tleSwgbGF5ZXJdIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICAgICAgICBjb3VudCArPSBsYXllci5jb3VudEVudGl0aWVzKHR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHJhdyB0aGUgZGVidWdnaW5nIHBhbmVsXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIHJlbmRlcmluZyBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBkcmF3RGVidWcoY29udGV4dCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZGRkZGRkNTUnO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCAtIDc1LCBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0IC0gMTAwLCA3NSwgMTAwKTtcbiAgICAgICAgY29udGV4dC5mb250ID0gJzExcHggQXJpYWwnO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQoXCJGUFM6IFwiICsgdGhpcy5mcHMsIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCAtIDcwLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0IC0gODUpO1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KFwiTEFZRVJTOiBcIiArIHRoaXMubGF5ZXJzLnNpemUsIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCAtIDcwLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0IC0gNzApO1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KFwiRU5UOiBcIiArIHRoaXMuY291bnRFbnRpdGllcygpLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGggLSA3MCwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodCAtIDU1KTtcbiAgICAgICAgY29udGV4dC5maWxsVGV4dChcIkxPQy1YOiBcIiArICgoX2EgPSB0aGlzLnRhcmdldCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLngpLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGggLSA3MCwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodCAtIDQwKTtcbiAgICAgICAgY29udGV4dC5maWxsVGV4dChcIkxPQy1ZOiBcIiArICgoX2IgPSB0aGlzLnRhcmdldCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnkpLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGggLSA3MCwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodCAtIDI1KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhbnkgY2FudmFzIGJhc2VkIGh1ZCBpdGVtcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBDYW52YXMgcmVuZGVyaW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXdIdWQoY29udGV4dCkge1xuICAgICAgICBpZiAoIXRoaXMuaHVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmh1ZC5yZW5kZXIoY29udGV4dCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgYWN0aXZlIGNvbG9yLCBhcyBzcGVjaWZpZWQgYnUgdGhlIHBhbGV0dGUuXG4gICAgICogZGVmYXVsdHMgdG8gQmxhY2sgaWYgbm8gY29sb3IgaXMgc2V0LlxuICAgICAqXG4gICAgICogQHJldHVybiAge0NvbG9yfSAgIFRoZSBzZWxlY3RlZCBjb2xvclxuICAgICAqL1xuICAgIGdldENvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJva2VfY29sb3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBhcmVudCBmb3IgYWxsIHRoZSByZW5kZXJpbmcgZm9yIHRoZSBhcHBcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtIVE1MQ2FudmFzRWxlbWVudH0gICAgICAgICBjYW52YXMgICBDYW52YXNcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIGRyYXdpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcmVuZGVyKGNhbnZhcywgY29udGV4dCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgLy8gQ2xlYXIgdGhlIHNjcmVlbiBldmVyeSBmcmFtZVxuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAvLyBSZW5kZXIgZWFjaCBvZiB0aGUgZXhpc3RpbmcgZW50aXRpdGVzLiAoRHJhd2luZ3MpXG4gICAgICAgIGZvciAobGV0IFtrZXksIGxheWVyXSBvZiB0aGlzLmxheWVycykge1xuICAgICAgICAgICAgbGF5ZXIucmVuZGVyKGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERyYXcgYW55IHRvb2wgaGVscGVycywgZHJhdyB0aGUgdGhpbmcgY3VycmVudGx5IGJlaW5nIGRyYXduLlxuICAgICAgICBpZiAoKF9hID0gdGhpcy50b29sKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWN0aXZlX2VudGl0eSkge1xuICAgICAgICAgICAgdGhpcy50b29sLmFjdGl2ZV9lbnRpdHkuZHJhdyhjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEcmF3IHRvIHRoZSBlbnRpdHkgY3VycmVudGx5IGJlaW5nIGRyYXduXG4gICAgICAgIGlmICgoX2IgPSB0aGlzLnRvb2wpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pc19kcmF3aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnRvb2wuZHJhdyhjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEcmF3IHRhcmdldCwgaWYgdHVybmVkIG9uLlxuICAgICAgICBpZiAodGhpcy5kcmF3X3RhcmdldClcbiAgICAgICAgICAgIHRoaXMuZHJhd1RhcmdldChjb250ZXh0KTtcbiAgICAgICAgLy8gU2hvdyB0aGUgZGVidWcsIGlmIHR1cm5lZCBvbi5cbiAgICAgICAgaWYgKHRoaXMuc2hvd19kZWJ1ZylcbiAgICAgICAgICAgIHRoaXMuZHJhd0RlYnVnKGNvbnRleHQpO1xuICAgICAgICAvLyBEcmF3IHRoZSBIVUQuXG4gICAgICAgIHRoaXMuZHJhd0h1ZChjb250ZXh0KTtcbiAgICAgICAgaWYgKCgoX2MgPSB0aGlzLnRvb2wpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5uYW1lKSA9PT0gJ3NlbGVjdCcgJiYgdGhpcy5hY3RpdmVfbGF5ZXIgJiYgdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX2xheWVyLmRyYXdHdWlkZXMoY29udGV4dCwgdGhpcy50YXJnZXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdhcmJhZ2UgY2xlYW4gdXAsIHJlbW92ZXMgYW55IGVudGl0aWVzIHRoYXQgYXJlIHNjaGVkdWxlIGZvciByZW1vdmFsXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVFbnRpdGllcygpIHtcbiAgICAgICAgZm9yIChsZXQgW2tleSwgbGF5ZXJdIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICAgICAgICBsYXllci5yZW1vdmVFbnRpdGllcygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERvIGFsbCB3b3JsZCBjYWxjdWxhdGlvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICAgICAgICAgICAgICAgZ2FtZVRpbWUgICBEZWx0YVRpbWVcbiAgICAgKiBAcGFyYW0gICB7RE9NSGlnaFJlc1RpbWVTdGFtcH0gIHRpbWVzdGFtcCAgQ3VycmVudCB0aW1lXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm9jZXNzKHRpbWUsIHRpbWVzdGFtcCkge1xuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBzZWNvbmRzIHBhc3NlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZVxuICAgICAgICB0aGlzLnRpbWVUb0RyYXcgPSB0aW1lIC8gMTAwMDtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIGZwc1xuICAgICAgICB0aGlzLmZwcyA9IE1hdGgucm91bmQoMSAvIHRoaXMudGltZVRvRHJhdyk7XG4gICAgICAgIC8vIFJlbW92ZSBhbnkgZW50aXRpZXMgdGhhdCBhcmUgc2V0IGZvciByZW1vdmFsLiBDb3VsZCBwcm9iYWJseSBcbiAgICAgICAgLy8vIGJlIGRvbmUgaW4gdGhlIGxvb3AgYmVsb3cgaWYgcGVyZm9ybWFuY2UgYmVjb21lcyBhbiBpc3N1ZSxcbiAgICAgICAgLy8gZm9yIG5vdyBpdCdzIGZpbmUuIENsZWFyZXIgdG8ga2VlcCB0aGUgc2VwZXJhdGUuXG4gICAgICAgIHRoaXMucmVtb3ZlRW50aXRpZXMoKTtcbiAgICAgICAgLy8gUHJvY2VzcyBhbnkgZW50aXR5IGNhbGNzIGZvciByZW5kZXJpbmcgbmV4dCB0aWNrLlxuICAgICAgICBmb3IgKGxldCBba2V5LCBsYXllcl0gb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgICAgICAgIGxheWVyLnByb2Nlc3ModGltZSwgdGltZXN0YW1wKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBbGxvdyBodWQgdG8gcHJvY2VzcyB0aGluZ3NcbiAgICAgICAgaWYgKHRoaXMuaHVkKVxuICAgICAgICAgICAgdGhpcy5odWQucHJvY2Vzcyh0aW1lKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSAnLi4vdXRpbC9jb2xvcic7XG4vKipcbiAqIENvcmUgZW50aXR5IGNsYXNzLCBhbGwgZHJhd24gb2JqZWN0cyB3aXRoaW4gdGhlIGFwcCBhcmUgZW50aXRpZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudGl0eSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIG5hbWUgIG5hbWUgb3IgdHlwZSBvZiBlbnRpdHlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaW1lIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQsIG1pbGxpc2Vjb25kcyBzaW5jZSBFUE9DXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRpbWUgdGhlIGVudGl0eSB3YXMgY3JlYXRlZCwgbWlsbGlzZWNvbmRzIHNpbmNlIEVQT0NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaW1lIHRoZSBlbnRpdHkgd2FzIGZpbmlzaGVkIGRyYXdpbmcsIG1pbGxpc2Vjb25kcyBzaW5jZSBFUE9DXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb2xvdXIgb2YgdGhlIGVudGl0eVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuICB7Q29sb3J9ICBDb2xvdXIgb2JqZWN0IHRoYXQgdGhlIGVudGl0eSB3aWxsIGJlIGRyYXduIGFzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdHJva2VfY29sb3IgPSBuZXcgQ29sb3IoMCwgMCwgMCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb2xvdXIgb2YgdGhlIGVudGl0eVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuICB7Q29sb3J9ICBDb2xvdXIgb2JqZWN0IHRoYXQgdGhlIGVudGl0eSB3aWxsIGJlIGRyYXduIGFzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5maWxsX2NvbG9yID0gbmV3IENvbG9yKDAsIDAsIDApO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2l6ZSBvZiB0aGUgZW50aXR5XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBuYW1lIGZvciB0aGUgZW50aXR5LCBha2EgdHlwZS4gQ2FuIGJlIHVzZWQgdG8gcXVlcnkgZm9yIGVuZWl0aWVzIG9mIFwibmFtZVwiXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSAnJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHNldCB0byB0cnVlIHRoZSBlbnRpdHkgd2lsbCBiZSBkaXNwb3NlZCBvZiBuZXh0IHRpY2suXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlbW92ZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVmIHRvIHRoZSBkcmF3aW5nIGNhbnZzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRyYXdpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBEYXRlLm5vdygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIFN0cm9rZSBDb2xvclxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NvbG9yfSAgY29sb3IgIENvbG9yIHRvIHNldCBvbiB0aGUgZW50aXR5XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXRTdHJva2VDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLnN0cm9rZV9jb2xvciA9IGNvbG9yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIEZpbGwgQ29sb3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDb2xvcn0gIGNvbG9yICBDb2xvciB0byBzZXQgb24gdGhlIGVudGl0eVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0RmlsbENvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuZmlsbF9jb2xvciA9IGNvbG9yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGVudGl0eSwgYnkgZGVmYXVsdCBhbGwgZW50aXRpZXMgYXJlIHRyZWF0ZWQgYXMgY2lyY2xlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBDYW52YXMgZHJhd2luZyBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICByZW5kZXIoY29udGV4dCkge1xuICAgICAgICB0aGlzLmRyYXcoY29udGV4dCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByb2Nlc3MgYW55IGVudGl0eSB1cGRhdGVzIG9yIGNhbGN1bGF0aW9ucyB0byBiZSByZW5kZXJlZCBuZXh0IHRpY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgZGVsdGEgIHRpbWUgc2luY2UgbGFzdCBmcmFtZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHByb2Nlc3MoZGVsdGEpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGRyYXdpbmcgaXMgY29tcGxldGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7PHZvaWQ+fVxuICAgICAqL1xuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IERhdGUubm93KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmbGF0dGVuUG9pbnRzLCBleHBhbmRQb2ludHMsIGdldEN1cnZlUG9pbnRzLCBzaW1wbGlmeSB9IGZyb20gXCIuLi91dGlsL3BvaW50c1wiO1xuaW1wb3J0IHsgZGVub3JtYWxpemUsIG5vcm1hbGl6ZSB9IGZyb20gXCIuLi91dGlsL25vcm1hbGl6ZVwiO1xuaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9lbnRpdHlcIjtcbmltcG9ydCB7IGRyYXdCb3VuZGluZ0JveCwgZHJhd0d1aWRlIH0gZnJvbSBcIi4uL3V0aWwvZ3VpZGVcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyZWVoYW5kIGV4dGVuZHMgRW50aXR5IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgc2l6ZSAgIFNpemUgb2YgdGhlIGVudGl0eVxuICAgICAqIEBwYXJhbSAgIHtDb2xvcn0gICBjb2xvciAgQ29sb3Igb2YgdGhlIGVudGl0eVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIHN0cm9rZV9jb2xvciwgZmlsbF9jb2xvciwgZHJhd2luZywgY2xvc2UgPSBmYWxzZSkge1xuICAgICAgICBzdXBlcignZnJlZWhhbmQnKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBvaW50cyBvZiB0aGUgZnJlZWhhbmQgbGluZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtBcnJheTxWZWN0b3I+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuYWJsZXMgdGhlIGVudGl0eSB0byBiZSBzY2FsZWQgYW5kIGRpc3BsYXllZCBhdFxuICAgICAgICAgKiBhIGRpZmZlcmVudCBzaXplLCBpZSBpbiB0aGUgbGF5ZXJzIG92ZXJ2aWV3LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNjYWxlID0gMS4wO1xuICAgICAgICB0aGlzLmNsb3NlID0gY2xvc2U7XG4gICAgICAgIHRoaXMuZHJhd2luZyA9IGRyYXdpbmc7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuc3Ryb2tlX2NvbG9yID0gc3Ryb2tlX2NvbG9yO1xuICAgICAgICB0aGlzLmZpbGxfY29sb3IgPSBmaWxsX2NvbG9yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBbY29tcGxldGUgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgc3VwZXIuY29tcGxldGUoKTtcbiAgICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHNpbXBsaWZpZWQgPSBzaW1wbGlmeSh0aGlzLnBvaW50cywgMyk7XG4gICAgICAgIGNvbnN0IGZsYXQgPSBmbGF0dGVuUG9pbnRzKHNpbXBsaWZpZWQpO1xuICAgICAgICBjb25zdCBjdXJ2ZWQgPSBnZXRDdXJ2ZVBvaW50cyhmbGF0LCAwLjcsIDEsIHRoaXMuY2xvc2UpO1xuICAgICAgICB0aGlzLnBvaW50cyA9IGV4cGFuZFBvaW50cyhjdXJ2ZWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEcmF3IHRoaXMgZW50aXR5IHRvIHRoZSBnaXZlbiBjb250ZXh0LiBDb250YWlucyBhbGwgdGhlXG4gICAgICogbG9naWMgdG8gZHJhdyBhIGZyZWVoYW5kIGxpbmUgb250byBhIGNvbnRleHQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgVGhlIGNhbnZhcyBjb250ZXh0IHRvIGRyYXcgdGhpcyBlbnRpdHkgdG8uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBkcmF3UGF0aChjb250ZXh0LCBzdHJva2UpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUncyBub3RoaW5nIHRvIGRyYXcsIHNob3JjaXJjdWl0LlxuICAgICAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoIDwgMSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gU2V0IHRoZSBzY2FsZSB0byBlcXVhbCB0aGUgZGVmYXVsdFxuICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgICAgICAvLyBDYWN1bGF0ZSB0aGUgc2NhbGUgYmFzZWQgb24gdGhlIHNpemUgb2YgdGhlIGNhbnZhcyBjb250ZXh0J3MgY2FudmFzXG4gICAgICAgIGlmIChjb250ZXh0LmNhbnZhcy53aWR0aCAhPT0gQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoKSB7XG4gICAgICAgICAgICBzY2FsZSA9IGNvbnRleHQuY2FudmFzLndpZHRoIC8gQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIC8vIERyYXdcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSB0aGlzLnNpemUgKiBzY2FsZTtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuc3Ryb2tlX2NvbG9yLmdldEhleCgpO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuZmlsbF9jb2xvci5nZXRIZXgoKTtcbiAgICAgICAgY29udGV4dC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgICAgICAvLyBXZSBkZW5vcm1hbGl6ZSB0aGUgcG9pbnRzLCBiYXNlZCBvbiB0aGUgY2FudmFzIHNpemUgYW5kIHNjYWxlLlxuICAgICAgICBjb25zdCBpbml0aWFsUG9pbnQgPSBkZW5vcm1hbGl6ZSh0aGlzLnBvaW50c1swXSwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIC8vIE1vdmUgdGhlIHR1cnRsZSB0byB0aGlzLnBvaW50c1swXVxuICAgICAgICBjb250ZXh0Lm1vdmVUbyhpbml0aWFsUG9pbnQueCwgaW5pdGlhbFBvaW50LnkpO1xuICAgICAgICAvLyBTdGFydCBhdCB0aGUgc2Vjb25kIHBvaW50IGB0aGlzLnBvaW50c1sxXWBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gRGVubW9ybWFsaXNlIGN1cnJlbnQgcG9pbnQgdG8gcGl4ZWwgdmFsdWVzXG4gICAgICAgICAgICBjb25zdCBkZW5vcm1hbGl6ZWQgPSBkZW5vcm1hbGl6ZSh0aGlzLnBvaW50c1tpXSwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIG1vcmUgdGhhbiAyIHBvaW50cyBhbmQgdGhlIGN1cnJlbnQgcG9pbnQgaXNuJ3QgdGhlIGxhc3Qgb25lLi4uXG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoID4gMSAmJiBpIDwgKHRoaXMucG9pbnRzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgLy8gRGVub3JtYWxpc2UgdGhlIG5leHQgcG9pbnQsIHNvIHRoYXQgd2UgY2FuIGRyYXcgYSBxdWFkcmF0aWMgY3VydmUgdG8gaXRcbiAgICAgICAgICAgICAgICBjb25zdCBkZW5vbWFsaXplZE5leHQgPSBkZW5vcm1hbGl6ZSh0aGlzLnBvaW50c1tpICsgMV0sIGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIC8vIENhbHVsYXRlIHRoZSBtaWQtcG9pbnQgYmV0d2VlbiBjdXJyZW50IGFuZCBuZXh0IHBvaW50c1xuICAgICAgICAgICAgICAgIHZhciBjID0gKGRlbm9ybWFsaXplZC54ICsgZGVub21hbGl6ZWROZXh0LngpIC8gMjtcbiAgICAgICAgICAgICAgICB2YXIgZCA9IChkZW5vcm1hbGl6ZWQueSArIGRlbm9tYWxpemVkTmV4dC55KSAvIDI7XG4gICAgICAgICAgICAgICAgLy8gRHJhdyB0aGUgcXVhZHJhdGljIGN1cnZlIHRvIHRoaXMgcG9pbnRcbiAgICAgICAgICAgICAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8oZGVub3JtYWxpemVkLngsIGRlbm9ybWFsaXplZC55LCBjLCBkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBqdXN0IGRyYXcgYSBzaW1wbGUgbGluZVxuICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVRvKGRlbm9ybWFsaXplZC54LCBkZW5vcm1hbGl6ZWQueSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgIGNvbnRleHQuY2xpcCgpO1xuICAgICAgICBpZiAodGhpcy5jbG9zZSkge1xuICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICAvLyBTdHJva2UgaXQuINSFKOKJluKMo+KJltSFKVxuICAgICAgICBpZiAoc3Ryb2tlKVxuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogW2RyYXcgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgW2NvbnRleHQgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkcmF3KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5kcmF3UGF0aChjb250ZXh0LCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHJhd3MgdG9vbCBndWlkZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBbY29udGV4dCBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRyYXdHdWlkZXMoY29udGV4dCwgdGFyZ2V0KSB7XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm90aGluZyB0byBkcmF3LCBzaG9yY2lyY3VpdC5cbiAgICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZWN0b3IgPSBkZW5vcm1hbGl6ZSh0aGlzLnBvaW50c1tpXSwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBkcmF3R3VpZGUoY29udGV4dCwgdmVjdG9yLCB0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYm91bmRpbmdCb3ggPSB0aGlzLmdldEJvdW5kaW5nQm94KCk7XG4gICAgICAgICAgICBkcmF3Qm91bmRpbmdCb3goYm91bmRpbmdCb3hbMF0sIGJvdW5kaW5nQm94WzFdLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGQgYSBwb2ludCB0byB0aGUgY2FudmFzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7VmVjdG9yfSAgbG9jYXRpb24gIFtsb2NhdGlvbiBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGFkZChsb2NhdGlvbikge1xuICAgICAgICAvLyBQb2ludHMgYXJlIG5vcm1hbGl6ZWQgdG8geDogMC4wIC0gMS4wLCB5OiAwLjAgLSAxLjAsIGFzIHVzaW5nIHBpeGVsIHZhbHVlcyBpcyByZXN0cmljdGl2ZVxuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKG5vcm1hbGl6ZShsb2NhdGlvbiwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHdlJ3JlIGludGVyc2VjdGluZyBhIHZlY3RvclxuICAgICAqXG4gICAgICogQHBhcmFtICAge1ZlY3Rvcn0gIHBvc2l0aW9uICBbcG9zaXRpb24gZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0SW50ZXJjZXRpbmdWZWN0b3IocG9zaXRpb24pIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IENvbnN0YW50cy5HVUlERV9TSVpFO1xuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vdGhpbmcgdG8gZHJhdywgc2hvcmNpcmN1aXQuXG4gICAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVjdG9yID0gZGVub3JtYWxpemUodGhpcy5wb2ludHNbaV0sIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRYID0gdmVjdG9yLnggLSAoc2l6ZSAvIDIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0WSA9IHZlY3Rvci55IC0gKHNpemUgLyAyKTtcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24ueCA+IHN0YXJ0WCAmJiBwb3NpdGlvbi54IDwgKHN0YXJ0WCArIHNpemUpICYmIHBvc2l0aW9uLnkgPiBzdGFydFkgJiYgcG9zaXRpb24ueSA8IChzdGFydFkgKyBzaXplKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wb2ludHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtnZXRCb3VuZGluZ0JveCBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3JbXX0gIHBvc2l0aW9uICBbcG9zaXRpb24gZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZFtdfSAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRCb3VuZGluZ0JveCgpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IENvbnN0YW50cy5DQU5WQVNfU0laRS5oZWlnaHQ7XG4gICAgICAgIGxldCBtaW5YID0gd2lkdGg7XG4gICAgICAgIGxldCBtaW5ZID0gaGVpZ2h0O1xuICAgICAgICBsZXQgbWF4WCA9IDA7XG4gICAgICAgIGxldCBtYXhZID0gMDtcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2YgdGhpcy5wb2ludHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbm9ybWFsaXplUG9pbnQgPSBkZW5vcm1hbGl6ZShwb2ludCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICBpZiAoZGVub3JtYWxpemVQb2ludC54IDwgbWluWClcbiAgICAgICAgICAgICAgICBtaW5YID0gZGVub3JtYWxpemVQb2ludC54O1xuICAgICAgICAgICAgaWYgKGRlbm9ybWFsaXplUG9pbnQueSA8IG1pblkpXG4gICAgICAgICAgICAgICAgbWluWSA9IGRlbm9ybWFsaXplUG9pbnQueTtcbiAgICAgICAgICAgIGlmIChkZW5vcm1hbGl6ZVBvaW50LnggPj0gbWF4WClcbiAgICAgICAgICAgICAgICBtYXhYID0gZGVub3JtYWxpemVQb2ludC54O1xuICAgICAgICAgICAgaWYgKGRlbm9ybWFsaXplUG9pbnQueSA+PSBtYXhZKVxuICAgICAgICAgICAgICAgIG1heFkgPSBkZW5vcm1hbGl6ZVBvaW50Lnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG5vcm1hbGl6ZShuZXcgVmVjdG9yKG1pblggLSAodGhpcy5zaXplIC8gMiksIG1pblkgLSAodGhpcy5zaXplIC8gMikpLCB3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICAgIG5vcm1hbGl6ZShuZXcgVmVjdG9yKG1heFggKyAodGhpcy5zaXplIC8gMiksIG1heFkgKyAodGhpcy5zaXplIC8gMikpLCB3aWR0aCwgaGVpZ2h0KVxuICAgICAgICBdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBbaXNQb2ludE92ZXIgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBpc1BvaW50T3Zlcihjb250ZXh0LCBwb2ludGVyKSB7XG4gICAgICAgIHRoaXMuZHJhd1BhdGgoY29udGV4dCwgZmFsc2UpO1xuICAgICAgICBpZiAodGhpcy5jbG9zZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQuaXNQb2ludEluUGF0aChwb2ludGVyLngsIHBvaW50ZXIueSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQuaXNQb2ludEluU3Ryb2tlKHBvaW50ZXIueCwgcG9pbnRlci55KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTW92ZXMgYW4gZW50aXR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7VmVjdG9yfSAgdmVjdG9yICBbdmVjdG9yIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBtb3ZlRW50aXR5KHZlY3Rvcikge1xuICAgICAgICBmb3IgKGxldCBwb2ludCBvZiB0aGlzLnBvaW50cykge1xuICAgICAgICAgICAgcG9pbnQuc3VidHJhY3QodmVjdG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4vZW50aXR5XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdWxsIGV4dGVuZHMgRW50aXR5IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgc2l6ZSAgIFNpemUgb2YgdGhlIGVudGl0eVxuICAgICAqIEBwYXJhbSAgIHtDb2xvcn0gICBjb2xvciAgQ29sb3Igb2YgdGhlIGVudGl0eVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRyYXdpbmcpIHtcbiAgICAgICAgc3VwZXIoJ251bGwnKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBvaW50cyBvZiB0aGUgZnJlZWhhbmQgbGluZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtBcnJheTxWZWN0b3I+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuYWJsZXMgdGhlIGVudGl0eSB0byBiZSBzY2FsZWQgYW5kIGRpc3BsYXllZCBhdFxuICAgICAgICAgKiBhIGRpZmZlcmVudCBzaXplLCBpZSBpbiB0aGUgbGF5ZXJzIG92ZXJ2aWV3LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNjYWxlID0gMS4wO1xuICAgICAgICB0aGlzLmRyYXdpbmcgPSBkcmF3aW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBbY29tcGxldGUgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzdXBlci5jb21wbGV0ZSgpO1xuICAgICAgICAoX2EgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZWRyYXdIdWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHJhdyB0aGlzIGVudGl0eSB0byB0aGUgZ2l2ZW4gY29udGV4dC4gQ29udGFpbnMgYWxsIHRoZVxuICAgICAqIGxvZ2ljIHRvIGRyYXcgYSBmcmVlaGFuZCBsaW5lIG9udG8gYSBjb250ZXh0LlxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIFRoZSBjYW52YXMgY29udGV4dCB0byBkcmF3IHRoaXMgZW50aXR5IHRvLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgZHJhdyhjb250ZXh0KSB7XG4gICAgICAgIC8vIE5vdCB1c2VkXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHJhd3MgdG9vbCBndWlkZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBbY29udGV4dCBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRyYXdHdWlkZXMoY29udGV4dCwgdGFyZ2V0KSB7XG4gICAgICAgIC8vIE5vdCB1c2VkXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkIGEgcG9pbnQgdG8gdGhlIGNhbnZhc1xuICAgICAqXG4gICAgICogQHBhcmFtICAge1ZlY3Rvcn0gIGxvY2F0aW9uICBbbG9jYXRpb24gZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBhZGQobG9jYXRpb24pIHtcbiAgICAgICAgLy8gTm90IHVzZWRcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBbZ2V0SW50ZXJjZXRpbmdWZWN0b3IgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7VmVjdG9yfSAgcG9zaXRpb24gIFtwb3NpdGlvbiBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRJbnRlcmNldGluZ1ZlY3Rvcihwb3NpdGlvbikge1xuICAgICAgICAvLyBOb3QgdXNlZFxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtnZXRCb3VuZGluZ0JveCBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3I8VmVjdG9yPn0gIHBvc2l0aW9uICBbcG9zaXRpb24gZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZDxWZWN0b3I+fSAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRCb3VuZGluZ0JveCgpIHtcbiAgICAgICAgLy8gTm90IHVzZWRcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpc1BvaW50T3Zlcihjb250ZXh0LCBwb2ludGVyKSB7XG4gICAgICAgIC8vIE5vdCB1c2VkXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbW92ZUVudGl0eSh2ZWN0b3IpIHtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBkZW5vcm1hbGl6ZSwgbm9ybWFsaXplIH0gZnJvbSBcIi4uL3V0aWwvbm9ybWFsaXplXCI7XG5pbXBvcnQgRW50aXR5IGZyb20gXCIuL2VudGl0eVwiO1xuaW1wb3J0IHsgZHJhd0JvdW5kaW5nQm94LCBkcmF3R3VpZGUgfSBmcm9tIFwiLi4vdXRpbC9ndWlkZVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdCBleHRlbmRzIEVudGl0eSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIHNpemUgICBTaXplIG9mIHRoZSBlbnRpdHlcbiAgICAgKiBAcGFyYW0gICB7Q29sb3J9ICAgY29sb3IgIENvbG9yIG9mIHRoZSBlbnRpdHlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzaXplLCBzdHJva2VfY29sb3IsIGZpbGxfY29sb3IsIGRyYXdpbmcpIHtcbiAgICAgICAgc3VwZXIoJ3JlY3QnKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBvaW50cyBvZiB0aGUgZnJlZWhhbmQgbGluZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtBcnJheTxWZWN0b3I+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9yaWdpbiA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBbZGVzY3JpcHRpb25dXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuYWJsZXMgdGhlIGVudGl0eSB0byBiZSBzY2FsZWQgYW5kIGRpc3BsYXllZCBhdFxuICAgICAgICAgKiBhIGRpZmZlcmVudCBzaXplLCBpZSBpbiB0aGUgbGF5ZXJzIG92ZXJ2aWV3LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNjYWxlID0gMS4wO1xuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMC4wMTtcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gZHJhd2luZztcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5zdHJva2VfY29sb3IgPSBzdHJva2VfY29sb3I7XG4gICAgICAgIHRoaXMuZmlsbF9jb2xvciA9IGZpbGxfY29sb3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtjb21wbGV0ZSBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBzdXBlci5jb21wbGV0ZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEcmF3IHRoaXMgZW50aXR5IHRvIHRoZSBnaXZlbiBjb250ZXh0LiBDb250YWlucyBhbGwgdGhlXG4gICAgICogbG9naWMgdG8gZHJhdyBhIGZyZWVoYW5kIGxpbmUgb250byBhIGNvbnRleHQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgVGhlIGNhbnZhcyBjb250ZXh0IHRvIGRyYXcgdGhpcyBlbnRpdHkgdG8uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBkcmF3UGF0aChjb250ZXh0LCBzdHJva2UpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUncyBub3RoaW5nIHRvIGRyYXcsIHNob3JjaXJjdWl0LlxuICAgICAgICBpZiAodGhpcy5vcmlnaW4gJiYgdGhpcy5kZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gZGVub3JtYWxpemUodGhpcy5vcmlnaW4sIGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBkZW5vcm1hbGl6ZSh0aGlzLmRlc3RpbmF0aW9uLCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgc2NhbGUgdG8gZXF1YWwgdGhlIGRlZmF1bHRcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IHRoaXMuc2NhbGU7XG4gICAgICAgICAgICAvLyBDYWN1bGF0ZSB0aGUgc2NhbGUgYmFzZWQgb24gdGhlIHNpemUgb2YgdGhlIGNhbnZhcyBjb250ZXh0J3MgY2FudmFzXG4gICAgICAgICAgICBpZiAoY29udGV4dC5jYW52YXMud2lkdGggIT09IENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHNjYWxlID0gY29udGV4dC5jYW52YXMud2lkdGggLyBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEcmF3XG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSB0aGlzLnNpemUgKiBzY2FsZTtcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZV9jb2xvci5nZXRIZXgoKTtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5maWxsX2NvbG9yLmdldEhleCgpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgICAgICAgICAgY29udGV4dC5yZWN0KG9yaWdpbi54LCBvcmlnaW4ueSwgLShvcmlnaW4ueCAtIGRlc3RpbmF0aW9uLngpLCAtKG9yaWdpbi55IC0gZGVzdGluYXRpb24ueSkpO1xuICAgICAgICAgICAgLy8gc2F2ZSB0aGUgdW4tY2xpcHBlZCBjb250ZXh0IHN0YXRlXG4gICAgICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNsaXBwaW5nIGFyZWEgZnJvbSB0aGUgcGF0aFxuICAgICAgICAgICAgLy8gQWxsIG5ldyBkcmF3aW5nIHdpbGwgYmUgY29udGFpbmVkIGluc2lkZVxuICAgICAgICAgICAgLy8gdGhlIGNsaXBwaW5nIGFyZWFcbiAgICAgICAgICAgIGNvbnRleHQuY2xpcCgpO1xuICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIGlmIChzdHJva2UpXG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5kcmF3UGF0aChjb250ZXh0LCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHJhd3MgdG9vbCBndWlkZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBbY29udGV4dCBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRyYXdHdWlkZXMoY29udGV4dCwgdGFyZ2V0KSB7XG4gICAgICAgIGlmICh0aGlzLm9yaWdpbiAmJiB0aGlzLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICBkcmF3R3VpZGUoY29udGV4dCwgZGVub3JtYWxpemUodGhpcy5vcmlnaW4sIGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpLCB0YXJnZXQpO1xuICAgICAgICAgICAgZHJhd0d1aWRlKGNvbnRleHQsIGRlbm9ybWFsaXplKHRoaXMuZGVzdGluYXRpb24sIGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpLCB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJvdW5kaW5nQm94ID0gdGhpcy5nZXRCb3VuZGluZ0JveCgpO1xuICAgICAgICBkcmF3Qm91bmRpbmdCb3goYm91bmRpbmdCb3hbMF0sIGJvdW5kaW5nQm94WzFdLCBjb250ZXh0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkIGEgcG9pbnQgdG8gdGhlIGNhbnZhc1xuICAgICAqXG4gICAgICogQHBhcmFtICAge1ZlY3Rvcn0gIGxvY2F0aW9uICBbbG9jYXRpb24gZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBhZGQobG9jYXRpb24pIHtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBub3JtYWxpemUobG9jYXRpb24sIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodCk7XG4gICAgICAgIGlmICghdGhpcy5vcmlnaW4pIHtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luID0gcG9pbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uID0gcG9pbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgd2UncmUgaW50ZXJzZWN0aW5nIGEgdmVjdG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7VmVjdG9yfSAgcG9zaXRpb24gIFtwb3NpdGlvbiBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRJbnRlcmNldGluZ1ZlY3Rvcihwb3NpdGlvbikge1xuICAgICAgICBjb25zdCBzaXplID0gQ29uc3RhbnRzLkdVSURFX1NJWkU7XG4gICAgICAgIGlmICh0aGlzLm9yaWdpbiAmJiB0aGlzLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBkZW5vcm1hbF9vcmlnaW4gPSBkZW5vcm1hbGl6ZSh0aGlzLm9yaWdpbiwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0KTtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbi54ID4gKGRlbm9ybWFsX29yaWdpbi54IC0gKHNpemUgLyAyKSkgJiZcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi54IDwgKChkZW5vcm1hbF9vcmlnaW4ueCAtIChzaXplIC8gMikpICsgc2l6ZSkgJiZcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi55ID4gKGRlbm9ybWFsX29yaWdpbi55IC0gKHNpemUgLyAyKSkgJiZcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi55IDwgKChkZW5vcm1hbF9vcmlnaW4ueSAtIChzaXplIC8gMikpICsgc2l6ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZW5vcm1hbF9kZXN0aW5hdGlvbiA9IGRlbm9ybWFsaXplKHRoaXMuZGVzdGluYXRpb24sIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodCk7XG4gICAgICAgICAgICBpZiAocG9zaXRpb24ueCA+IChkZW5vcm1hbF9kZXN0aW5hdGlvbi54IC0gKHNpemUgLyAyKSkgJiZcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi54IDwgKChkZW5vcm1hbF9kZXN0aW5hdGlvbi54IC0gKHNpemUgLyAyKSkgKyBzaXplKSAmJlxuICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgPiAoZGVub3JtYWxfZGVzdGluYXRpb24ueSAtIChzaXplIC8gMikpICYmXG4gICAgICAgICAgICAgICAgcG9zaXRpb24ueSA8ICgoZGVub3JtYWxfZGVzdGluYXRpb24ueSAtIChzaXplIC8gMikpICsgc2l6ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgQm91bmRpbmcgYm94XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZFtdfSAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRCb3VuZGluZ0JveCgpIHtcbiAgICAgICAgaWYgKHRoaXMub3JpZ2luICYmIHRoaXMuZGVzdGluYXRpb24pXG4gICAgICAgICAgICByZXR1cm4gW3RoaXMub3JpZ2luLCB0aGlzLmRlc3RpbmF0aW9uXTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJcyBwb2ludCBvdmVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgW2NvbnRleHQgZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge1ZlY3Rvcn0gICAgICAgICAgICAgICAgICAgIHBvaW50ZXIgIFtwb2ludGVyIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgaXNQb2ludE92ZXIoY29udGV4dCwgcG9pbnRlcikge1xuICAgICAgICB0aGlzLmRyYXdQYXRoKGNvbnRleHQsIGZhbHNlKTtcbiAgICAgICAgaWYgKHRoaXMuZmlsbF9jb2xvci5nZXRSZ2JhKClbM10gPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5pc1BvaW50SW5QYXRoKHBvaW50ZXIueCwgcG9pbnRlci55KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dC5pc1BvaW50SW5TdHJva2UocG9pbnRlci54LCBwb2ludGVyLnkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNb3ZlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7VmVjdG9yfSAgdmVjdG9yICBbdmVjdG9yIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBtb3ZlRW50aXR5KHZlY3Rvcikge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAoX2EgPSB0aGlzLm9yaWdpbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN1YnRyYWN0KHZlY3Rvcik7XG4gICAgICAgIChfYiA9IHRoaXMuZGVzdGluYXRpb24pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zdWJ0cmFjdCh2ZWN0b3IpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb2xvciBmcm9tIFwiLi4vdXRpbC9jb2xvclwiO1xuaW1wb3J0IEh1ZEl0ZW0gZnJvbSBcIi4vaHVkX2l0ZW1cIjtcbmltcG9ydCBQaWNrZXIgZnJvbSAndmFuaWxsYS1waWNrZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3JQaWNrZXIgZXh0ZW5kcyBIdWRJdGVtIHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBQYWxldHRlIEhVRCBpdGVtXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZHJhd2luZykge1xuICAgICAgICBzdXBlcihcInBpY2tlclwiKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZiB0byB0aGUgZHJhd2luZ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kcmF3aW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gZHJhd2luZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgdGhlIFVJLCB0aGlzIGZpbmRzIHRoZSBIVE1MRGl2RWxlbWVudCB3aXRoIHRoZVxuICAgICAqIElEIGBwYWxldHRlYCBhbmQgY2xlYXJzIGl0IG91dCwgdGhlbiBwbGFjZXMgYW5vdGhlclxuICAgICAqIEhUTUxEaXZFbGVtZW50IGluc2lkZSBmb3IgZXZlcnkgY29sb3IgaW4gYHRoaXMuY29sb3JzYFxuICAgICAqIGFuZCBzZXRzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSBjb2xvciBvZiBlYWNoIGNvbG9yLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhbGV0dGUnKTtcbiAgICAgICAgY29uc3Qgc3Ryb2tlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHN0cm9rZS5jbGFzc0xpc3QuYWRkKCdjb2xvcicpO1xuICAgICAgICBzdHJva2UuY2xhc3NMaXN0LmFkZCgnc3Ryb2tlJyk7XG4gICAgICAgIHN0cm9rZS50aXRsZSA9ICdTdHJva2UgQ29sb3InO1xuICAgICAgICBzdHJva2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gKChfYSA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN0cm9rZV9jb2xvcikuZ2V0SGV4KCk7XG4gICAgICAgIHZhciBzdHJva2VQaWNrZXIgPSBuZXcgUGlja2VyKHtcbiAgICAgICAgICAgIHBhcmVudDogc3Ryb2tlLFxuICAgICAgICAgICAgcG9wdXA6ICd0b3AnLFxuICAgICAgICAgICAgY29sb3I6ICgoX2IgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zdHJva2VfY29sb3IpLmdldEhleCgpXG4gICAgICAgIH0pO1xuICAgICAgICBzdHJva2VQaWNrZXIub25DaGFuZ2UgPSAoY29sb3IpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRyYXdpbmcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDb2xvciA9IG5ldyBDb2xvcihjb2xvci5yZ2JhWzBdLCBjb2xvci5yZ2JhWzFdLCBjb2xvci5yZ2JhWzJdLCBjb2xvci5yZ2JhWzNdKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdpbmcuc3Ryb2tlX2NvbG9yID0gbmV3Q29sb3I7XG4gICAgICAgICAgICAgICAgc3Ryb2tlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG5ld0NvbG9yLmdldEhleCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0YXJnZXQgPT09IG51bGwgfHwgdGFyZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YXJnZXQuYXBwZW5kQ2hpbGQoc3Ryb2tlKTtcbiAgICAgICAgY29uc3QgZmlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmaWxsLmNsYXNzTGlzdC5hZGQoJ2NvbG9yJyk7XG4gICAgICAgIGZpbGwuY2xhc3NMaXN0LmFkZCgnZmlsbCcpO1xuICAgICAgICBmaWxsLnRpdGxlID0gJ0ZpbGwgQ29sb3InO1xuICAgICAgICBmaWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICgoX2MgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5maWxsX2NvbG9yKS5nZXRIZXgoKTtcbiAgICAgICAgLy8gQWRkIHRoZSBldmVudCBsaXN0ZW5lclxuICAgICAgICB2YXIgZmlsbFBpY2tlciA9IG5ldyBQaWNrZXIoe1xuICAgICAgICAgICAgcGFyZW50OiBmaWxsLFxuICAgICAgICAgICAgcG9wdXA6ICd0b3AnLFxuICAgICAgICAgICAgY29sb3I6ICgoX2QgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5maWxsX2NvbG9yKS5nZXRIZXgoKVxuICAgICAgICB9KTtcbiAgICAgICAgZmlsbFBpY2tlci5vbkNoYW5nZSA9IChjb2xvcikgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJhd2luZykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbG9yID0gbmV3IENvbG9yKGNvbG9yLnJnYmFbMF0sIGNvbG9yLnJnYmFbMV0sIGNvbG9yLnJnYmFbMl0sIGNvbG9yLnJnYmFbM10pO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2luZy5maWxsX2NvbG9yID0gbmV3Q29sb3I7XG4gICAgICAgICAgICAgICAgZmlsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBuZXdDb2xvci5nZXRIZXgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGFyZ2V0ID09PSBudWxsIHx8IHRhcmdldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFyZ2V0LmFwcGVuZENoaWxkKGZpbGwpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEh1ZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcnJheSBvZiBpdGVtcyB0byByZW5kZXIgZm9yIHRoZSBIdWRcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7QXJyYXk8SHVkSXRlbT59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB3ZSB3YW50IHRoZSBIVUQgdG8gYmUgdmlzaWJsZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBvc2l0aW9uIG9mIHRoZSBtb3VzZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtWZWN0b3J9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmN1cnNvcl9wb3NpdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdvdWxkIHJlbmRlciBhbnkgY2FudmFzIGJhc2VkIGh1ZCBpdGVtcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBDYW52YXMgcmVuZGVyaW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbmRlcihjb250ZXh0KSB7XG4gICAgICAgIC8vIE5vdGhpbmcgaGVyZSB5ZXQuXG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBjdXJzb3IgYW5kIGh1ZCBpbnRlcnNlY3RzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgZGVsdGEgIFtkZWx0YSBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBwcm9jZXNzKGRlbHRhKSB7XG4gICAgICAgIC8vIE5vdGhpbmcgaGVyZSB5ZXQuXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZCBhbiBpdGVtIHRvIHRoZSBIVURcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtIdWRJdGVtfSAgaXRlbSAgSXRlbSB0aGF0IGluaGVyaXRzIGZyb20gdGhlIEh1dEl0ZW0gYWJzdHJhY3QgY2xhc3NcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIGl0ZW0uYnVpbGQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGEgcmVmZXJlbmNlIHRvIGEgaHVkIGl0ZW0gYnkgbmFtZVxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICBuYW1lICB0aGUgbmFtZSBvZiB0aGUgaHVkIGl0ZW0gdG8gcmV0cmlldmVcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtIdWRJdGVtfG51bGx9ICAgdGhlIGh1ZCBpdGVtIGlmIGZvdW5kIG90aGVyd2lzZSBudWxsLlxuICAgICAqL1xuICAgIGdldEJ5TmFtZShuYW1lKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbaV0ubmFtZSA9PT0gbmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhY2tzIHRoZSBjdXJzb3IgcG9zaXRpb24gZm9yIGh1ZCB1c2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7VmVjdG9yfSAgcG9zaXRpb24gIFBvc2l0aW9uIG9mIHRoZSBtb3VzZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHNldEN1cnNvclBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuY3Vyc29yX3Bvc2l0aW9uID0gcG9zaXRpb247XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHVkSXRlbSB7XG4gICAgLyoqXG4gICAgICogSHVkIEl0ZW1zIG5lZWQgYSBuYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgbmFtZSAgVGhlIG5hbWUgZm9yIHRoZSBpdGVtXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbCBhbnkgdXBkYXRlIGZ1bmN0aW9ucyB0aGF0IG5lZWQgdG8gYmUgY2FsbGVkLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmJ1aWxkKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IEh1ZEl0ZW0gZnJvbSBcIi4vaHVkX2l0ZW1cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVycyBleHRlbmRzIEh1ZEl0ZW0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgdGhlIGxheWVycyBzZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7RHJhd2luZ30gIGRyYXdpbmdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkcmF3aW5nKSB7XG4gICAgICAgIHN1cGVyKFwibGF5ZXJzXCIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSFRNTCBEaXYgRWxlbWVudCwgd2hlcmUgdGhlIEhUTUxDYW52YXNFbGVtZW50IGxheWVycyB3aWxsIGJlIGNyZWF0ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge0hUTUxEaXZFbGVtZW50IHwgbnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5ZXJzJyk7XG4gICAgICAgIHRoaXMuZHJhd2luZyA9IGRyYXdpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHRoZSBsYXllcnMgVUksIHRoaXMgZW1wdGllcyB0aGVuIGNyZWF0ZXNcbiAgICAgKiBIVE1MQ2FudmFzRWxlbWVudHMgaW5zaWRlIHRoZSBgdGhpcy50YXJnZXRgIEhUTUxEaXZFbGVtZW50XG4gICAgICogVGhpcyBnaXZlcyB1cyB0aGUgbGF5ZXIgb3ZlcnZpZXcgb24gdGhlIHJpZ2h0LlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGlmICghdGhpcy5kcmF3aW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLnRhcmdldC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3Qgd2lkdGggPSBDb25zdGFudHMuTEFZRVJTX1dJRFRIO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSAod2lkdGggLyBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGgpICogQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodDtcbiAgICAgICAgZm9yIChsZXQgW2tleSwgbGF5ZXJdIG9mIHRoaXMuZHJhd2luZy5sYXllcnMpIHtcbiAgICAgICAgICAgIGxheWVyLmRyYXcodGhpcy50YXJnZXQsIHdpZHRoLCBoZWlnaHQsIHRoaXMuZHJhd2luZy5hY3RpdmVfbGF5ZXIgPT09IGxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBNYXJrZXIgZnJvbSBcIi4uL3Rvb2xzL21hcmtlclwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vdG9vbHMvcmVjdGFuZ2xlXCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi90b29scy9zZWxlY3RcIjtcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi4vdG9vbHMvc2hhcGVcIjtcbmltcG9ydCBIdWRJdGVtIGZyb20gXCIuL2h1ZF9pdGVtXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sYmFyIGV4dGVuZHMgSHVkSXRlbSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZHJhd2luZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgdGhpcy50b29scyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibWFya2VyXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTWFya2VyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImZyZWVoYW5kX3NoYXBlXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ2xvc2VkXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcInJlY3RcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJSZWN0YW5nbGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTW9kaWZ5XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcmF3aW5nIHJlZmVyZW5jZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZHJhd2luZyA9IG51bGw7XG4gICAgICAgIHRoaXMuZHJhd2luZyA9IGRyYXdpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtzZXRUb29sIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIHRvb2wgIFt0b29sIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgc2V0VG9vbCh0b29sKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgc3dpdGNoICh0b29sKSB7XG4gICAgICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFRvb2wobmV3IFNlbGVjdCh0aGlzLmRyYXdpbmcpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21hcmtlcic6XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc2V0VG9vbChuZXcgTWFya2VyKHRoaXMuZHJhd2luZykpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZnJlZWhhbmRfc2hhcGUnOlxuICAgICAgICAgICAgICAgIChfYyA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnNldFRvb2wobmV3IFNoYXBlKHRoaXMuZHJhd2luZykpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVjdCc6XG4gICAgICAgICAgICAgICAgKF9kID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Quc2V0VG9vbChuZXcgUmVjdGFuZ2xlKHRoaXMuZHJhd2luZykpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHRoZSB0b29sYmFyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b29sc1wiKTtcbiAgICAgICAgaWYgKCF0YXJnZXQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRhcmdldC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZm9yIChsZXQgdG9vbCBvZiB0aGlzLnRvb2xzKSB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSB0b29sLnRpdGxlO1xuICAgICAgICAgICAgYnV0dG9uLmlkID0gdG9vbC5rZXk7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9vbCh0b29sLmtleSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXIge1xuICAgIC8qKlxuICAgICAqIFNldCB1cCB0aGUgTGF5ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtEcmF3aW5nfSAgZHJhd2luZyAgRHJhd2luZyByZWZlcmVuY2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpZCwgZHJhd2luZykge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBMYXllcnMgSURcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pZCA9IC0xO1xuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIGRyYXduIGVudGl0aWVzLCB0aGVzZSB3aWxsIGFsbCBnZXRcbiAgICAgICAgICogcHJvY2Vzc2VkIGFuZCByZW5kZXJlZCB3aGVuIHRoZSBuZWVkIHRvIGJlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIgIHtNYXA8bnVtYmVyLCBFbnRpdHk+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhY3RpdmUgZW50aXR5XG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge0VudGl0eSB8IG51bGx9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFjdGl2ZV9lbnRpdHkgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogSXMgdGhlcmUgYW4gZW50aXR5IGJlaW5nIHRhcmdldGVkIGluIGVkaXQgbW9kZT9cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZW50aXR5VGFyZ2V0ZWQgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRW50aXR5IGluY3JlbWVudGFsIG51bWJlciwgdXNlZCB0byB0cmFjayB1bmlxdWUgbnVtZXJpY2FsXG4gICAgICAgICAqIGlkIG9mIGFsbCBlbnRpdGllcyBsb2FkZWQgb250byB0aGUgY2FudmFzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZW50aXR5X2lkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZmVyZW5jZSB0byB0aGUgbWFpbiBEcmF3aW5nXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge0RyYXdpbmcgfCBudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kcmF3aW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmRyYXdpbmcgPSBkcmF3aW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGVudGl0eSB0byB0aGUgZ2FtZVxuICAgICAqXG4gICAgICogQHBhcmFtICAge0VudGl0eX0gIGVudGl0eSAgRW50aXR5IHRvIGFkZCB0byB0aGUgZ2FtZXdvcmxkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBhZGRFbnRpdHkoZW50aXR5KSB7XG4gICAgICAgIGVudGl0eS5pZCA9IHRoaXMuZW50aXR5X2lkO1xuICAgICAgICBlbnRpdHkuZHJhd2luZyA9IHRoaXMuZHJhd2luZztcbiAgICAgICAgdGhpcy5lbnRpdGllcy5zZXQodGhpcy5lbnRpdHlfaWQsIGVudGl0eSk7XG4gICAgICAgIHRoaXMuZW50aXR5X2lkICs9IDE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdhcmJhZ2UgY2xlYW4gdXAsIHJlbW92ZXMgYW55IGVudGl0aWVzIHRoYXQgYXJlIHNjaGVkdWxlIGZvciByZW1vdmFsXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVFbnRpdGllcygpIHtcbiAgICAgICAgY29uc3QgaWRzID0gW107XG4gICAgICAgIGZvciAobGV0IFtrZXksIGVudGl0eV0gb2YgdGhpcy5lbnRpdGllcykge1xuICAgICAgICAgICAgaWYgKGVudGl0eS5yZW1vdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0aWVzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gRW50aXR5IGdpdmVuIGFuIElEXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgaWQgIEVudGl0aSBudW1lcmljYWwgSURcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtFbnRpdHl9XG4gICAgICovXG4gICAgZ2V0RW50aXR5KGlkKSB7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuZW50aXRpZXMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKGVudGl0eSlcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gY291bnQgb2YgZW50aXRlcyBieSB0eXBlLCBpZiBubyB0eXBlIHNwZWNpZmllZCxcbiAgICAgKiB0aGVuIHJldHVuciBjb3VudCBvZiBhbGwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgdHlwZSAgRW50aXR5IFR5cGV8TmFtZSBbb3B0aW9uYWxdXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7bnVtYmVyfSAgICAgICAgTnVtYmVyIG9mIGVudGl0aWVzXG4gICAgICovXG4gICAgY291bnRFbnRpdGllcyh0eXBlKSB7XG4gICAgICAgIC8vIE5vIHR5cGUgc3BlY2lmaWNlLCBzbyBpbmNsdWRlIGFsbCBlbnRpdGllcy5cbiAgICAgICAgaWYgKCF0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXMuc2l6ZTtcbiAgICAgICAgLy8gQSB0eXBlIHdhcyBzcGVjaWZpZWQsIHNvIGNoZWNrIHR5cGUgYmVmb3JlIGFkZGluZ1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBba2V5LCBlbnRpdHldIG9mIHRoaXMuZW50aXRpZXMpIHtcbiAgICAgICAgICAgIGlmIChlbnRpdHkubmFtZSA9PSB0eXBlICYmIGVudGl0eS5yZW1vdmUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvY2VzcyBhbnkgdXBkYXRlcyB0aGF0IG5lZWQgdG8gYmUgcmVuZGVyZWQgbmV4dCB0aWNrLiBXZVxuICAgICAqIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVtb3ZlIHRoZSBlbnRpdGllcyBvbmUgYnkgb25lLiBUaGF0J3NcbiAgICAgKiBzdGlsbCBhIFRPRE8gdGhvdWdoLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gICAgICAgICAgICAgICBkZWx0YXRpbWUgICAgICAgIFRoZSB0aW1lIHNpbmNlIGxhc3QgdGlja1xuICAgICAqIEBwYXJhbSAgIHtET01IaWdoUmVzVGltZVN0YW1wfSAgdGltZXN0YW1wICAgICAgICBDdXJyZW50IHRpbWVzdGFtcFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2VzcyhkZWx0YXRpbWUsIHRpbWVzdGFtcCkge1xuICAgICAgICBmb3IgKGxldCBba2V5LCBlbnRpdHldIG9mIHRoaXMuZW50aXRpZXMpIHtcbiAgICAgICAgICAgIGlmIChlbnRpdHkucmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRpdGllcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYWxsIHRoZSByZW5kZXJpbmcgZm9yIHRoaXMgbGF5ZXJzIGVudGl0aWVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgVGhlIGNhbnZhcyBjb250ZXh0IGZvciBhcHBseWluZyB0aGUgZW50aXR5IHJlZGVycyB0b1xuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRleHQpIHtcbiAgICAgICAgLy8gUmVuZGVyIGVhY2ggb2YgdGhlIGV4aXN0aW5nIGVudGl0aXRlcy4gKERyYXdpbmdzKVxuICAgICAgICBmb3IgKGxldCBba2V5LCBlbnRpdHldIG9mIHRoaXMuZW50aXRpZXMpIHtcbiAgICAgICAgICAgIGVudGl0eS5yZW5kZXIoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgVUkgZHJhd2luZyBvZiBhIGxheWVyIGluIHRoZSBsYXllciBvdmVydmlld1xuICAgICAqXG4gICAgICogQHBhcmFtICAge0hUTUxEaXZFbGVtZW50fSAgICAgcGFyZW50ICBUaGUgRGl2IGVsZW1lbnQgdG8gcmVuZGVyIGludG9cbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgICAgICAgICAgICB3aWR0aCAgIFRoZSB0YXJnZXQgd2lkdGggb2YgdGhlIGNhbnZhc1xuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICAgICAgICAgICAgIGhlaWdodCAgVGhlIHRhcmdldCBoZWlnaHQgb2YgdGhlIGNhbnZhc1xuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgZHJhdyhwYXJlbnQsIHdpZHRoLCBoZWlnaHQsIGFjdGl2ZSkge1xuICAgICAgICAvLyBDcmVhdGUgdGhlIG5ldyBDYW52YXMgRWxlbWVudFxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAvLyBTZXQgYWxsIGl0J3MgcHJvcGVydGllc1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY2FudmFzLmlkID0gYGxheWVyLSR7dGhpcy5pZH1gO1xuICAgICAgICBjYW52YXMuY2xhc3NMaXN0LmFkZCgnbGF5ZXInKTtcbiAgICAgICAgLy8gTGlzdGVuIGZvciB0aGUgc2VsZWN0ZWQgbGF5ZXIgY2xpY2tcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRBY3RpdmVMYXllcih0aGlzLmlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFNldCB0aGUgYWN0aXZlIGNsYXNzIGlmIGl0J3MgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBvbmUuXG4gICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgIGNhbnZhcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOZXdlciBsYXllcnMgZ28gb24gdG9wLCBzbyBgaW5zZXJ0QmVmb3JlYCBpcyB1c2VkXG4gICAgICAgIHBhcmVudCA9PT0gbnVsbCB8fCBwYXJlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudC5pbnNlcnRCZWZvcmUoY2FudmFzLCBwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIC8vIEdldCB0aGUgY29udGV4dCBmb3IgcmVuZGVyaW5nXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgaWYgKGNvbnRleHQgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gUmVuZGVyIGVhY2ggb2YgdGhlIGVudGl0aWVzIHRvIHRoZSBuZXcgSFRNTENhbnZhc0VsZW1lbnRcbiAgICAgICAgZm9yIChsZXQgW2tleSwgZW50aXR5XSBvZiB0aGlzLmVudGl0aWVzKSB7XG4gICAgICAgICAgICBlbnRpdHkucmVuZGVyKGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtkcmF3R3VpZGVzIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIFtjb250ZXh0IGRlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3J9ICAgICAgICAgICAgICAgICAgICB0YXJnZXQgICBbdGFyZ2V0IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZHJhd0d1aWRlcyhjb250ZXh0LCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgbGV0IHNlbGVjdGVkX3ZlY3RvcjtcbiAgICAgICAgbGV0IHBvaW50ZXJPdmVyRW50aXR5ID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgW2tleSwgZW50aXR5XSBvZiB0aGlzLmVudGl0aWVzKSB7XG4gICAgICAgICAgICBlbnRpdHkuZHJhd0d1aWRlcyhjb250ZXh0LCB0YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgcG9pbnRlck92ZXIgPSBlbnRpdHkuaXNQb2ludE92ZXIoY29udGV4dCwgdGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChwb2ludGVyT3Zlcikge1xuICAgICAgICAgICAgICAgIHBvaW50ZXJPdmVyRW50aXR5ID0gZW50aXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzZWxlY3RlZF92ZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZF92ZWN0b3IgPSBlbnRpdHkuZ2V0SW50ZXJjZXRpbmdWZWN0b3IodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocG9pbnRlck92ZXJFbnRpdHkpIHtcbiAgICAgICAgICAgIGlmIChwb2ludGVyT3ZlckVudGl0eSAhPT0gdGhpcy5lbnRpdHlUYXJnZXRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50aXR5VGFyZ2V0ZWQgPSBwb2ludGVyT3ZlckVudGl0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW50aXR5VGFyZ2V0ZWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKENvbnN0YW50cy5DQU5WQVNfVEFSR0VUKTtcbiAgICAgICAgaWYgKHRoaXMuZW50aXR5VGFyZ2V0ZWQpIHtcbiAgICAgICAgICAgIGlmIChjYW52YXMpXG4gICAgICAgICAgICAgICAgY2FudmFzLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjYW52YXMpXG4gICAgICAgICAgICAgICAgY2FudmFzLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0ZWRfdmVjdG9yKSB7XG4gICAgICAgICAgICAoKF9hID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9vbCkuc2VsZWN0ZWRfdmVjdG9yID0gc2VsZWN0ZWRfdmVjdG9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgKChfYiA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRvb2wpLnNlbGVjdGVkX3ZlY3RvciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgRnJlZWhhbmQgZnJvbSBcIi4uL2VudGl0aWVzL2ZyZWVoYW5kXCI7XG5pbXBvcnQgVG9vbCBmcm9tIFwiLi90b29sXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZXIgZXh0ZW5kcyBUb29sIHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIG1hcmtlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRyYXdpbmcpIHtcbiAgICAgICAgc3VwZXIoZHJhd2luZywgJ21hcmtlcicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGlsZSBkcmF3aW5nIChtb3VzZWRvd24pIGNvbnN0YW50bHkgYWRkIHRoZSBjdXJyZW50IGN1cnNvclxuICAgICAqIGxvY2F0aW9uIHRvIHRoZSBhY3RpdmUgZW50aXR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIHJlZGVyaW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXcoY29udGV4dCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVfZW50aXR5KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9lbnRpdHkuYWRkKHRoaXMubG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGVudGl0eSB0aGlzIGBUb29sYCBjcmVhdGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiAge0VudGl0eX0gIFRoZSBlbnRpdHkgdG8gYmUgYWRkZWQgdG8gdGhlIGxheWVyXG4gICAgICovXG4gICAgZ2V0RW50aXR5KGRyYXdpbmcpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmRyYXdpbmcuZ2V0Q29sb3IoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBGcmVlaGFuZCh0aGlzLnNpemUsIHRoaXMuZHJhd2luZy5zdHJva2VfY29sb3IsIHRoaXMuZHJhd2luZy5maWxsX2NvbG9yLCB0aGlzLmRyYXdpbmcpO1xuICAgIH1cbn1cbiIsImltcG9ydCBUb29sIGZyb20gXCIuL3Rvb2xcIjtcbmltcG9ydCBSZWN0IGZyb20gXCIuLi9lbnRpdGllcy9yZWN0XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBUb29sIHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIG1hcmtlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRyYXdpbmcpIHtcbiAgICAgICAgc3VwZXIoZHJhd2luZywgJ3JlY3RhbmdsZScpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGlsZSBkcmF3aW5nIChtb3VzZWRvd24pIGNvbnN0YW50bHkgYWRkIHRoZSBjdXJyZW50IGN1cnNvclxuICAgICAqIGxvY2F0aW9uIHRvIHRoZSBhY3RpdmUgZW50aXR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIHJlZGVyaW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXcoY29udGV4dCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVfZW50aXR5KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9lbnRpdHkuYWRkKHRoaXMubG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGVudGl0eSB0aGlzIGBUb29sYCBjcmVhdGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiAge0VudGl0eX0gIFRoZSBlbnRpdHkgdG8gYmUgYWRkZWQgdG8gdGhlIGxheWVyXG4gICAgICovXG4gICAgZ2V0RW50aXR5KGRyYXdpbmcpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmRyYXdpbmcuZ2V0Q29sb3IoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0KHRoaXMuc2l6ZSwgdGhpcy5kcmF3aW5nLnN0cm9rZV9jb2xvciwgdGhpcy5kcmF3aW5nLmZpbGxfY29sb3IsIHRoaXMuZHJhd2luZyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFRvb2wgZnJvbSBcIi4vdG9vbFwiO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XG5pbXBvcnQgTnVsbCBmcm9tIFwiLi4vZW50aXRpZXMvbnVsbFwiO1xuaW1wb3J0IHsgbm9ybWFsaXplIH0gZnJvbSBcIi4uL3V0aWwvbm9ybWFsaXplXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBUb29sIHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIG1hcmtlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRyYXdpbmcpIHtcbiAgICAgICAgc3VwZXIoZHJhd2luZywgJ3NlbGVjdCcpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3VycmVudGx5IHNlbGVjdGVkIHZlZGN0b3IgaWYgYW55XG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge1ZlY3Rvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRfdmVjdG9yID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpbml0YWwgcG9pbnQgd2hlcmUgd2Ugc3RhcnRlZCBkcmF3aW5nXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmluaXRpYWxfcG9pbnQgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBbc2V0TG9jYXRpb24gZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7VmVjdG9yfSAgbG9jYXRpb24gIFtsb2NhdGlvbiBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBzdGFydERyYXdpbmcobG9jYXRpb24pIHtcbiAgICAgICAgc3VwZXIuc3RhcnREcmF3aW5nKGxvY2F0aW9uKTtcbiAgICAgICAgaWYgKCF0aGlzLmluaXRpYWxfcG9pbnQpXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxfcG9pbnQgPSBsb2NhdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2hpbGUgZHJhd2luZyAobW91c2Vkb3duKSBjb25zdGFudGx5IGFkZCB0aGUgY3VycmVudCBjdXJzb3JcbiAgICAgKiBsb2NhdGlvbiB0byB0aGUgYWN0aXZlIGVudGl0eVxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyByZWRlcmluZyBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBkcmF3KGNvbnRleHQpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZF9sb2NhdGlvbiA9IG5vcm1hbGl6ZSh0aGlzLmxvY2F0aW9uLCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfdmVjdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkX3ZlY3Rvci54ID0gbm9ybWFsaXplZF9sb2NhdGlvbi54O1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF92ZWN0b3IueSA9IG5vcm1hbGl6ZWRfbG9jYXRpb24ueTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICgoX2EgPSB0aGlzLmRyYXdpbmcuYWN0aXZlX2xheWVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZW50aXR5VGFyZ2V0ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbml0aWFsX3BvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZlcmVuY2VWZWMgPSBub3JtYWxpemUobmV3IFZlY3Rvcih0aGlzLmluaXRpYWxfcG9pbnQueCAtIHRoaXMubG9jYXRpb24ueCwgdGhpcy5pbml0aWFsX3BvaW50LnkgLSB0aGlzLmxvY2F0aW9uLnkpLCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgKF9iID0gdGhpcy5kcmF3aW5nLmFjdGl2ZV9sYXllcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmVudGl0eVRhcmdldGVkLm1vdmVFbnRpdHkoZGlmZmVyZW5jZVZlYyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbF9wb2ludCA9IHRoaXMubG9jYXRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0b3BzIGRyYXdpbmcsIGFkZHMgZW5ldGl0eSBjb21wbGV0ZSB0aW1lLCBhZGRzIHRoZVxuICAgICAqIGVudGl0eSB0byB0aGUgZHJhd2luZywgd2hpY2ggd2lsbCBwYXNzIGl0IHRvIHRoZVxuICAgICAqIGFjdGl2ZSBsYXllcmFuZCByZXNldHMgdGhlIGFjdGl2ZSBlbnRpdHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBzdG9wRHJhd2luZygpIHtcbiAgICAgICAgc3VwZXIuc3RvcERyYXdpbmcoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsX3BvaW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZF92ZWN0b3IgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEcmF3IHRoZSB0b29sIHRhcmdldFxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyBkcmF3aW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXdUYXJnZXQoY29udGV4dCkge1xuICAgICAgICAvLyB2b2lkXG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGVudGl0eSB0aGlzIGBUb29sYCBjcmVhdGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiAge0VudGl0eX0gIFRoZSBlbnRpdHkgdG8gYmUgYWRkZWQgdG8gdGhlIGxheWVyXG4gICAgICovXG4gICAgZ2V0RW50aXR5KGRyYXdpbmcpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmRyYXdpbmcuZ2V0Q29sb3IoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBOdWxsKGRyYXdpbmcpO1xuICAgIH1cbn1cbiIsImltcG9ydCBGcmVlaGFuZCBmcm9tIFwiLi4vZW50aXRpZXMvZnJlZWhhbmRcIjtcbmltcG9ydCBUb29sIGZyb20gXCIuL3Rvb2xcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXBlIGV4dGVuZHMgVG9vbCB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBtYXJrZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkcmF3aW5nKSB7XG4gICAgICAgIHN1cGVyKGRyYXdpbmcsICdmcmVlaGFuZF9zaGFwZScpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGlsZSBkcmF3aW5nIChtb3VzZWRvd24pIGNvbnN0YW50bHkgYWRkIHRoZSBjdXJyZW50IGN1cnNvclxuICAgICAqIGxvY2F0aW9uIHRvIHRoZSBhY3RpdmUgZW50aXR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIHJlZGVyaW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXcoY29udGV4dCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVfZW50aXR5KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9lbnRpdHkuYWRkKHRoaXMubG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGVudGl0eSB0aGlzIGBUb29sYCBjcmVhdGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiAge0VudGl0eX0gIFRoZSBlbnRpdHkgdG8gYmUgYWRkZWQgdG8gdGhlIGxheWVyXG4gICAgICovXG4gICAgZ2V0RW50aXR5KGRyYXdpbmcpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmRyYXdpbmcuZ2V0Q29sb3IoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBGcmVlaGFuZCh0aGlzLnNpemUsIHRoaXMuZHJhd2luZy5zdHJva2VfY29sb3IsIHRoaXMuZHJhd2luZy5maWxsX2NvbG9yLCB0aGlzLmRyYXdpbmcsIHRydWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xuaW1wb3J0IGRyYXdDaXJjbGUgZnJvbSBcIi4uL3V0aWwvY2lyY2xlXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4uL3V0aWwvY29sb3JcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2wge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSAgIHtEcmF3aW5nfSAgZHJhd2luZyAgTWFpbiBkcmF3aW5nIGNhbnZhc1xuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgbmFtZSAgICAgVGhlIG5hbWUgb2YgdGhlIHRvb2xcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkcmF3aW5nLCBuYW1lKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOYW1lIG9mIHRoZSB0b29sXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9ICcnO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2lkdGggb2YgdGhlIHRvb2xcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zaXplID0gMjA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUYXJnZXQgQ29sb3JcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7Q29sb3J9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRhcmdldF9jb2xvciA9IG5ldyBDb2xvcigxMjgsIDEyOCwgMjU1LCAwLjIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogTG9jYXRpb24gb2YgdGhlIHRvb2xcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7VmVjdG9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG5ldyBWZWN0b3IoMCwgMCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyB0aGUgdG9vbCBkb3duIChkcmF3aW5nKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pc19kcmF3aW5nID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudCBlbnRpdHkgYmVpbmcgZHJhd25cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7RW50aXR5IHwgbnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWN0aXZlX2VudGl0eSA9IG51bGw7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZHJhd2luZyA9IGRyYXdpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCdzIHRoZSBsb2NhdGlvbiBvZiB0aGUgdG9vbFxuICAgICAqXG4gICAgICogQHBhcmFtICAge1ZlY3Rvcn0gIGxvY2F0aW9uICBMb2NhdGlvbiBvZiB0aGUgdG9vbFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0TG9jYXRpb24obG9jYXRpb24pIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdGFydCBkcmF3aW5nLCBjcmVhdGUgdGhlIHRvb2wncyBgRW50aXR5YCBhbmRcbiAgICAgKiBzZXRzIGl0IGFzIGFjdGl2ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHN0YXJ0RHJhd2luZyhsb2NhdGlvbikge1xuICAgICAgICB0aGlzLnNldElzRHJhd2luZyh0cnVlKTtcbiAgICAgICAgdGhpcy5hY3RpdmVfZW50aXR5ID0gdGhpcy5nZXRFbnRpdHkodGhpcy5kcmF3aW5nKTtcbiAgICAgICAgdGhpcy5zZXRMb2NhdGlvbihsb2NhdGlvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHNpemUgb2YgdGhlIGJydXNoL2xpbmUvc3Ryb2tlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgc2l6ZSAgU2l6ZSBpbiBwaXhlbHMgb2YgdGhlIHJhZGl1c1xuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0U2l6ZShzaXplKSB7XG4gICAgICAgIGlmIChzaXplID4gMClcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IE1hdGgubWluKHNpemUsIDEwMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0b3BzIGRyYXdpbmcsIGFkZHMgZW5ldGl0eSBjb21wbGV0ZSB0aW1lLCBhZGRzIHRoZVxuICAgICAqIGVudGl0eSB0byB0aGUgZHJhd2luZywgd2hpY2ggd2lsbCBwYXNzIGl0IHRvIHRoZVxuICAgICAqIGFjdGl2ZSBsYXllcmFuZCByZXNldHMgdGhlIGFjdGl2ZSBlbnRpdHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBzdG9wRHJhd2luZygpIHtcbiAgICAgICAgdGhpcy5zZXRJc0RyYXdpbmcoZmFsc2UpO1xuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlX2VudGl0eSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gUnVuIHRoZSBjb21wbGV0aW9uIGZ1bmN0aW9uc1xuICAgICAgICB0aGlzLmFjdGl2ZV9lbnRpdHkuY29tcGxldGUoKTtcbiAgICAgICAgLy8gSWYgbm90IHRoZSBzcGVjaWFsIGVudGl0eVxuICAgICAgICBpZiAodGhpcy5hY3RpdmVfZW50aXR5Lm5hbWUgIT09IFwibnVsbFwiKSB7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGNvbXBsZXRlZCBlbnRpdHkgdG8gdGhlIGRyYXdpbmdcbiAgICAgICAgICAgIHRoaXMuZHJhd2luZy5hZGRFbnRpdHkodGhpcy5hY3RpdmVfZW50aXR5KTtcbiAgICAgICAgICAgIC8vIHJlc2V0IHRoZSBhY3RpdmUgZW50aXR5XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZV9lbnRpdHkgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGRyYXdpbmcgc3RhdGUgb2YgdGhlIHRvb2xcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtib29sZWFufSAgc3RhdGUgIElzIHRoZSB0b29sIGRyYXdpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHNldElzRHJhd2luZyhzdGF0ZSkge1xuICAgICAgICB0aGlzLmlzX2RyYXdpbmcgPSBzdGF0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHJhdyB0aGUgdG9vbCB0YXJnZXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBDYW52YXMgZHJhd2luZyBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBkcmF3VGFyZ2V0KGNvbnRleHQpIHtcbiAgICAgICAgZHJhd0NpcmNsZShjb250ZXh0LCB0aGlzLmxvY2F0aW9uLCB0aGlzLnRhcmdldF9jb2xvciwgdGhpcy5zaXplKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIERyYXcgYSBjaXJjbGUgb24gdGhlIGNvbnRleHQgZ2l2ZW5cbiAqXG4gKiBAdmFyIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICAgQ2FudmFzIHJlbmRlcmluZyBjb250ZXh0IHRvIGRyYXcgd2l0aFxuICogQHZhciB7VmVjMi5WZWN0b3J9ICAgICAgICAgICAgICAgbG9jYXRpb24gIFdoZXJlIHRvIGRyYXcgdGhlIGNpcmNsZVxuICogQHZhciB7Q29sb3J9ICAgICAgICAgICAgICAgICAgICAgY29sb3IgICAgIENvbG9yIHRvIGRyYXcgd2l0aFxuICogQHZhciB7bnVtYmVyfSAgICAgICAgICAgICAgICAgICAgc2l6ZSAgICAgIERpYW1ldGVyIGluIHBpeGVsc1xuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmF3Q2lyY2xlKGNvbnRleHQsIGxvY2F0aW9uLCBjb2xvciwgc2l6ZSkge1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5hcmMobG9jYXRpb24ueCwgbG9jYXRpb24ueSwgTWF0aC5yb3VuZChzaXplIC8gMiksIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvci5nZXRSZ2JTdHJpbmcoKTtcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yLmdldFJnYlN0cmluZygpO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG59XG4iLCIvKipcbiAqIENvbG91ciBoZWxwZXIsIHVzZWZ1bCBmb3IgY29udmVydGluZyBiZXR3ZWVuIGNvbG91ciBmb3JtYXRzLlxuICogVGhpcyBpcyBwcm9iYWJseSBub3QgcmVhbGx5IG5lZWRlZCBmb3IgdGhlIFRTL0pTIHZlcnNpb24gYnV0IGlzXG4gKiBtb3JlIG9mIGEgaGFuZ292ZXIgZnJvbSB0aGUgRGFydCB2ZXJzaW9uIG9mIHRoZSBnYW1lLiBXYXMgZ29vZFxuICogbGVhcm5pbmcgY29udmVydGluZyBpdCB0byBqYXZhc2NyaXB0L3R5cGVzY3JpcHQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG9yIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgciAgcmVkIFswIC0gMjU1XVxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBnICBncmVlbiBbMCAtIDI1NV1cbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgYiAgYmx1ZSBbMCAtIDI1NV1cbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyP30gIGEgIGFscGhhIFswLjAgLSAxLjBdXG4gICAgICovXG4gICAgY29uc3RydWN0b3IociwgZywgYiwgYSA9IDEuMCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogcmVkXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuciA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBncmVlblxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmcgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogYmx1ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmIgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogYWxwaGFcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hID0gMC4wO1xuICAgICAgICB0aGlzLnIgPSByO1xuICAgICAgICB0aGlzLmcgPSBnO1xuICAgICAgICB0aGlzLmIgPSBiO1xuICAgICAgICB0aGlzLmEgPSBhO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIFJHQiB2YWx1ZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtBcnJheTxudW1iZXI+fVxuICAgICAqL1xuICAgIGdldFJnYigpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzLnIsIHRoaXMuZywgdGhpcy5iXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBSR0IgdmFsdWVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7QXJyYXk8bnVtYmVyPn1cbiAgICAgKi9cbiAgICBnZXRSZ2JhKCkge1xuICAgICAgICByZXR1cm4gW3RoaXMuciwgdGhpcy5nLCB0aGlzLmIsIHRoaXMuYV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgUkdCIHZhbHVlc1xuICAgICAqXG4gICAgICogQHJldHVybiAge0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgZ2V0UmdiU3RyaW5nKHdpdGhBbHBoYSA9IHRydWUpIHtcbiAgICAgICAgaWYgKHdpdGhBbHBoYSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIHJldHVybiBgcmdiYSgke3RoaXMucn0sICR7dGhpcy5nfSwgJHt0aGlzLmJ9LCAke3RoaXMuYX0pYDtcbiAgICAgICAgcmV0dXJuIGByZ2IoJHt0aGlzLnJ9LCAke3RoaXMuZ30sICR7dGhpcy5ifSlgO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYXJyYXkgb2YgSFNMIHZhbHVlc1xuICAgICAqXG4gICAgICogRnJvbTogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9jb252ZXJ0aW5nLWNvbG9yLXNwYWNlcy1pbi1qYXZhc2NyaXB0L1xuICAgICAqXG4gICAgICogQHJldHVybiAge0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgZ2V0SHNsKCkge1xuICAgICAgICAvLyBNYWtlIHIsIGcsIGFuZCBiIGZyYWN0aW9ucyBvZiAxXG4gICAgICAgIGNvbnN0IHIgPSB0aGlzLnIgLyAyNTU7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmcgLyAyNTU7XG4gICAgICAgIGNvbnN0IGIgPSB0aGlzLmIgLyAyNTU7XG4gICAgICAgIC8vIEZpbmQgZ3JlYXRlc3QgYW5kIHNtYWxsZXN0IGNoYW5uZWwgdmFsdWVzXG4gICAgICAgIGxldCBjbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgICAgIGxldCBjbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgICAgIGxldCBkZWx0YSA9IGNtYXggLSBjbWluO1xuICAgICAgICBsZXQgaCA9IDA7XG4gICAgICAgIGxldCBzID0gMDtcbiAgICAgICAgbGV0IGwgPSAwO1xuICAgICAgICAvLyBDYWxjdWxhdGUgaHVlXG4gICAgICAgIC8vIE5vIGRpZmZlcmVuY2VcbiAgICAgICAgaWYgKGRlbHRhID09IDApIHtcbiAgICAgICAgICAgIGggPSAwO1xuICAgICAgICAgICAgLy8gUmVkIGlzIG1heFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNtYXggPT0gcikge1xuICAgICAgICAgICAgaCA9ICgoZyAtIGIpIC8gZGVsdGEpICUgNjtcbiAgICAgICAgICAgIC8vIEdyZWVuIGlzIG1heFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNtYXggPT0gZykge1xuICAgICAgICAgICAgaCA9IChiIC0gcikgLyBkZWx0YSArIDI7XG4gICAgICAgICAgICAvLyBCbHVlIGlzIG1heFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaCA9IChyIC0gZykgLyBkZWx0YSArIDQ7XG4gICAgICAgIH1cbiAgICAgICAgaCA9IE1hdGgucm91bmQoaCAqIDYwKTtcbiAgICAgICAgLy8gTWFrZSBuZWdhdGl2ZSBodWVzIHBvc2l0aXZlIGJlaGluZCAzNjDCsFxuICAgICAgICBpZiAoaCA8IDApIHtcbiAgICAgICAgICAgIGggKz0gMzYwO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhbGN1bGF0ZSBsaWdodG5lc3NcbiAgICAgICAgbCA9IChjbWF4ICsgY21pbikgLyAyO1xuICAgICAgICAvLyBDYWxjdWxhdGUgc2F0dXJhdGlvblxuICAgICAgICBzID0gZGVsdGEgPT0gMCA/IDAgOiBkZWx0YSAvICgxIC0gTWF0aC5hYnMoMiAqIGwgLSAxKSk7XG4gICAgICAgIC8vIE11bHRpcGx5IGwgYW5kIHMgYnkgMTAwXG4gICAgICAgIHMgPSArKHMgKiAxMDApLnRvRml4ZWQoMSk7XG4gICAgICAgIGwgPSArKGwgKiAxMDApLnRvRml4ZWQoMSk7XG4gICAgICAgIHJldHVybiBbaCwgcywgbF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBIRVggdmFsdWUgb2YgY29sb3VyIChpbmxjdWRpbmcgYWxwaGEpXG4gICAgICpcbiAgICAgKiBGcm9tOiBodHRwczovL2Nzcy10cmlja3MuY29tL2NvbnZlcnRpbmctY29sb3Itc3BhY2VzLWluLWphdmFzY3JpcHQvXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldEhleCh3aXRoQWxwaGEgPSB0cnVlKSB7XG4gICAgICAgIGxldCByID0gdGhpcy5yLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgbGV0IGcgPSB0aGlzLmcudG9TdHJpbmcoMTYpO1xuICAgICAgICBsZXQgYiA9IHRoaXMuYi50b1N0cmluZygxNik7XG4gICAgICAgIGxldCBhID0gTWF0aC5yb3VuZCgodGhpcy5hICogMjU1KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICBpZiAoci5sZW5ndGggPT0gMSlcbiAgICAgICAgICAgIHIgPSBcIjBcIiArIHI7XG4gICAgICAgIGlmIChnLmxlbmd0aCA9PSAxKVxuICAgICAgICAgICAgZyA9IFwiMFwiICsgZztcbiAgICAgICAgaWYgKGIubGVuZ3RoID09IDEpXG4gICAgICAgICAgICBiID0gXCIwXCIgKyBiO1xuICAgICAgICBpZiAoYS5sZW5ndGggPT0gMSlcbiAgICAgICAgICAgIGEgPSBcIjBcIiArIGE7XG4gICAgICAgIGlmICghd2l0aEFscGhhKVxuICAgICAgICAgICAgcmV0dXJuIFwiI1wiICsgciArIGcgKyBiO1xuICAgICAgICByZXR1cm4gXCIjXCIgKyByICsgZyArIGIgKyBhO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRlbm9ybWFsaXplIH0gZnJvbSBcIi4vbm9ybWFsaXplXCI7XG5leHBvcnQgZnVuY3Rpb24gZHJhd0d1aWRlKGNvbnRleHQsIHBvcywgdGFyZ2V0KSB7XG4gICAgY29uc3Qgc2l6ZSA9IENvbnN0YW50cy5HVUlERV9TSVpFO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgIGNvbnN0IHN0YXJ0WCA9IHBvcy54IC0gKHNpemUgLyAyKTtcbiAgICBjb25zdCBzdGFydFkgPSBwb3MueSAtIChzaXplIC8gMik7XG4gICAgaWYgKHRhcmdldC54ID4gc3RhcnRYICYmIHRhcmdldC54IDwgKHN0YXJ0WCArIHNpemUpICYmIHRhcmdldC55ID4gc3RhcnRZICYmIHRhcmdldC55IDwgKHN0YXJ0WSArIHNpemUpKSB7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcIiM4ODg4RkZcIjtcbiAgICB9XG4gICAgY29udGV4dC5yZWN0KHN0YXJ0WCwgc3RhcnRZLCBzaXplLCBzaXplKTtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xufVxuO1xuLyoqXG4gKiBEcmF3IGEgYm91bmRpbmcgYm94XG4gKlxuICogQHBhcmFtICAge1ZlY3Rvcn0gICAgICAgICAgICAgICAgICAgIHN0YXJ0ICAgIFtzdGFydCBkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAgIHtWZWN0b3J9ICAgICAgICAgICAgICAgICAgICBlbmQgICAgICBbZW5kIGRlc2NyaXB0aW9uXVxuICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIFtjb250ZXh0IGRlc2NyaXB0aW9uXVxuICpcbiAqIEByZXR1cm4gIHt2b2lkfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICovXG5leHBvcnQgZnVuY3Rpb24gZHJhd0JvdW5kaW5nQm94KHN0YXJ0LCBlbmQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkZW5vcm1fc3RhcnQgPSBkZW5vcm1hbGl6ZShzdGFydCwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7XG4gICAgY29uc3QgZGVub3JtX2VuZCA9IGRlbm9ybWFsaXplKGVuZCwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwiIzg4ODhGRlwiO1xuICAgIGNvbnRleHQucmVjdChkZW5vcm1fc3RhcnQueCwgZGVub3JtX3N0YXJ0LnksIChkZW5vcm1fZW5kLnggLSBkZW5vcm1fc3RhcnQueCksIChkZW5vcm1fZW5kLnkgLSBkZW5vcm1fc3RhcnQueSkpO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlFdmVudHMge1xuICAgIC8qKlxuICAgICAqIFNldCB1cCB0aGUga2V5IGV2ZW50IGhhbmRsZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7RHJhd2luZ30gIGRyYXdpbmcgIE1haW4gZHJhd2luZyBvYmplY3RcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZHJhd2luZykge1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVmZXJlbmNlIHRvIHRoZSBtYWluIGRyYXdpbmcgb2JqZWN0XG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge0RyYXdpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRyYXdpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLmRyYXdpbmcgPSBkcmF3aW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGFsbCB0aGUga2V5IGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtLZXlib2FyZEV2ZW50fSAgZXZlbnQgcmVsYXRlZCB0byB0aGUga2V5IGRvd25cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGhhbmRsZShldmVudCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgaWYgKCF0aGlzLmRyYXdpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2luZy5hZGRMYXllcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlTGF5ZXIoKF9iID0gdGhpcy5kcmF3aW5nLmFjdGl2ZV9sYXllcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmlkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgY2FzZSAnMic6XG4gICAgICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICAgIGNhc2UgJzQnOlxuICAgICAgICAgICAgY2FzZSAnNSc6XG4gICAgICAgICAgICBjYXNlICc2JzpcbiAgICAgICAgICAgICAgICBjb25zdCBwYWxldHRlID0gKF9jID0gdGhpcy5kcmF3aW5nLmh1ZCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmdldEJ5TmFtZSgncGFsZXR0ZScpO1xuICAgICAgICAgICAgICAgIHBhbGV0dGUuc2V0Q29sb3JJbmRleChwYXJzZUludChldmVudC5rZXkpIC0gMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlJzpcbiAgICAgICAgICAgICAgICAvLyBsYXllciB1cFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRyYXdpbmcuYWN0aXZlX2xheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd2luZy5zZXRBY3RpdmVMYXllcih0aGlzLmRyYXdpbmcuZ2V0TmV4dExheWVyKHRoaXMuZHJhd2luZy5hY3RpdmVfbGF5ZXIuaWQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kcmF3aW5nLmFjdGl2ZV9sYXllcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdpbmcuc2V0QWN0aXZlTGF5ZXIodGhpcy5kcmF3aW5nLmdldFByZXZMYXllcih0aGlzLmRyYXdpbmcuYWN0aXZlX2xheWVyLmlkKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAgY29uc3QgaGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVscFwiKTtcbiAgICAgICAgICAgICAgICBoZWxwID09PSBudWxsIHx8IGhlbHAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlbHAuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICBoZWxwID09PSBudWxsIHx8IGhlbHAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlbHAuY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcbi8qKlxuICogTm9ybWFsaXplIGEgdmVjdG9yLiBUYWtlcyBhIHZlY3RvciBhbmQgYSBzb3VyY2Ugd2lkdGggYW5kIGhlaWdodFxuICogdGhlbiBub3JtYWxpemVzIGl0IHRvIGZhbGwgd2l0aGluIHRoZSByYW5nZSBvZiAwLjAgLSAxLjAgcmVsYXRpdmVcbiAqIHRvIHRoZSBzb3VyY2UncyB3aXRoIGFuZCBoZWlnaHQuIEVmZmVjdGl2ZWx5IGJlY29taW5nIGEgcGVyY2VudGFnZVxuICogb2YgdGhlIHRhcmdldCwgaW5zdGVhZCBvZiBleGFjdCB2YWx1ZXMuXG4gKlxuICogQHBhcmFtICAge1ZlY3Rvcn0gIHZlY3RvciAgICAgICAgICAgIFRoZSB2ZWN0b3IgdG8gbm9ybWFsaXplXG4gKiBAcGFyYW0gICB7bnVtYmVyfSAgc291cmNlX3dpZHRoICAgICAgVGhlIHNvdXJjZSB3aWR0aFxuICogQHBhcmFtICAge251bWJlcn0gIHNvdXJjZV9oZWlnaHQgICAgIFRoZSBzb3VyY2UgaGVpZ2h0XG4gKlxuICogQHJldHVybiAge1ZlY3Rvcn0gICAgICAgICAgICAgICAgICAgIE5vcm1hbGl6ZWQgdmVjdG9yIGNvbnRhaW5pbmcgeHkgdmFsdWVzIGJldHdlZW4gMC4wIGFuZCAxLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZSh2ZWN0b3IsIHNvdXJjZV93aWR0aCwgc291cmNlX2hlaWdodCkge1xuICAgIHJldHVybiBuZXcgVmVjdG9yKCgoMTAwLiAvIHNvdXJjZV93aWR0aCkgKiB2ZWN0b3IueCkgLyAxMDAuLCAoKDEwMC4gLyBzb3VyY2VfaGVpZ2h0KSAqIHZlY3Rvci55KSAvIDEwMC4pO1xufVxuLyoqXG4gKiBUYWtlcyBhIG5vcm1hbGl6ZWQgdmVjdG9yICh4eSB3aXRoIHZhbHVlcyAwLjAgLSAxLjApIGFuZCBtYXBzIGl0XG4gKiB0byB0aGUgdGFyZ2V0cyBkaW1lbnRpb25zIChpZSBwaXhlbCB2YWx1ZXMpXG4gKlxuICogQHBhcmFtICAge1ZlY3Rvcn0gIG5vcm1hbGl6ZWRfdmVjdG9yICAgVGhlIHZlY3RvciB0byBkZW5vbWFsaXplXG4gKiBAcGFyYW0gICB7bnVtYmVyfSAgdGFyZ2V0X3dpZHRoICAgICAgICBUaGUgdGFyZ2V0IHdpZHRoXG4gKiBAcGFyYW0gICB7bnVtYmVyfSAgdGFyZ2V0X2hlaWdodCAgICAgICBUaGUgdGFyZ2V0IGhlaWdodFxuICpcbiAqIEByZXR1cm4gIHtWZWN0b3J9ICAgICAgICAgICAgICAgICAgICAgIEEgZGVub21hbGl6ZWQgdmVjdG9yIGNvbmFpbmluZyB4eSB2YWx1ZXMgYmV0d2VlbiAwIGFuZCB0YXJnZXRfd2lkdGgvaGVpZ2h0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZW5vcm1hbGl6ZShub3JtYWxpemVkX3ZlY3RvciwgdGFyZ2V0X3dpZHRoLCB0YXJnZXRfaGVpZ2h0KSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3Iobm9ybWFsaXplZF92ZWN0b3IueCAqIHRhcmdldF93aWR0aCwgbm9ybWFsaXplZF92ZWN0b3IueSAqIHRhcmdldF9oZWlnaHQpO1xufVxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XG4vKipcbiAqIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2dkZW5pc292L2NhcmRpbmFsLXNwbGluZS1qcy9ibG9iL21hc3Rlci9zcmMvY3VydmVfY2FsYy5qc1xuICpcbiAqIENhbGN1bGF0ZXMgYW4gYXJyYXkgY29udGFpbmluZyBwb2ludHMgcmVwcmVzZW50aW5nIGEgY2FyZGluYWwgc3BsaW5lIHRocm91Z2ggZ2l2ZW4gcG9pbnQgYXJyYXkuXG4gKiBQb2ludHMgbXVzdCBiZSBhcnJhbmdlZCBhczogW3gxLCB5MSwgeDIsIHkyLCAuLi4sIHhuLCB5bl0uXG4gKlxuICogVGhlIHBvaW50cyBmb3IgdGhlIGNhcmRpbmFsIHNwbGluZSBhcmUgcmV0dXJuZWQgYXMgYSBuZXcgYXJyYXkuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcG9pbnRzIC0gcG9pbnQgYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbdGVuc2lvbj0wLjVdIC0gdGVuc2lvbi4gVHlwaWNhbGx5IGJldHdlZW4gWzAuMCwgMS4wXSBidXQgY2FuIGJlIGV4Y2VlZGVkXG4gKiBAcGFyYW0ge051bWJlcn0gW251bU9mU2VnPTIwXSAtIG51bWJlciBvZiBzZWdtZW50cyBiZXR3ZWVuIHR3byBwb2ludHMgKGxpbmUgcmVzb2x1dGlvbilcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2Nsb3NlPWZhbHNlXSAtIENsb3NlIHRoZSBlbmRzIG1ha2luZyB0aGUgbGluZSBjb250aW51b3VzXG4gKiBAcmV0dXJucyB7RmxvYXQzMkFycmF5fSBOZXcgYXJyYXkgd2l0aCB0aGUgY2FsY3VsYXRlZCBwb2ludHMgdGhhdCB3YXMgYWRkZWQgdG8gdGhlIHBhdGhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnZlUG9pbnRzKHBvaW50cywgdGVuc2lvbiA9IDAuNywgbnVtT2ZTZWcgPSAxLCBjbG9zZSA9IGZhbHNlKSB7XG4gICAgdmFyIHB0cywgLy8gZm9yIGNsb25pbmcgcG9pbnQgYXJyYXlcbiAgICBpID0gMSwgbCA9IHBvaW50cy5sZW5ndGgsIHJQb3MgPSAwLCByTGVuID0gKGwgLSAyKSAqIG51bU9mU2VnICsgMiArIChjbG9zZSA/IDIgKiBudW1PZlNlZyA6IDApLCByZXMgPSBuZXcgRmxvYXQzMkFycmF5KHJMZW4pLCBjYWNoZSA9IG5ldyBGbG9hdDMyQXJyYXkoKG51bU9mU2VnICsgMikgKiA0KSwgY2FjaGVQdHIgPSA0O1xuICAgIGNvbnN0IHBhcnNlID0gKHB0cywgY2FjaGUsIGwpID0+IHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDIsIHQ7IGkgPCBsOyBpICs9IDIpIHtcbiAgICAgICAgICAgIHZhciBwdDEgPSBwdHNbaV0sIHB0MiA9IHB0c1tpICsgMV0sIHB0MyA9IHB0c1tpICsgMl0sIHB0NCA9IHB0c1tpICsgM10sIHQxeCA9IChwdDMgLSBwdHNbaSAtIDJdKSAqIHRlbnNpb24sIHQxeSA9IChwdDQgLSBwdHNbaSAtIDFdKSAqIHRlbnNpb24sIHQyeCA9IChwdHNbaSArIDRdIC0gcHQxKSAqIHRlbnNpb24sIHQyeSA9IChwdHNbaSArIDVdIC0gcHQyKSAqIHRlbnNpb247XG4gICAgICAgICAgICBmb3IgKHQgPSAwOyB0IDwgbnVtT2ZTZWc7IHQrKykge1xuICAgICAgICAgICAgICAgIHZhciBjID0gdCA8PCAyLCAvL3QgKiA0O1xuICAgICAgICAgICAgICAgIGMxID0gY2FjaGVbY10sIGMyID0gY2FjaGVbYyArIDFdLCBjMyA9IGNhY2hlW2MgKyAyXSwgYzQgPSBjYWNoZVtjICsgM107XG4gICAgICAgICAgICAgICAgcmVzW3JQb3MrK10gPSBjMSAqIHB0MSArIGMyICogcHQzICsgYzMgKiB0MXggKyBjNCAqIHQyeDtcbiAgICAgICAgICAgICAgICByZXNbclBvcysrXSA9IGMxICogcHQyICsgYzIgKiBwdDQgKyBjMyAqIHQxeSArIGM0ICogdDJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBwdHMgPSBwb2ludHMuc2xpY2UoMCk7XG4gICAgaWYgKGNsb3NlKSB7XG4gICAgICAgIHB0cy51bnNoaWZ0KHBvaW50c1tsIC0gMV0pOyAvLyBpbnNlcnQgZW5kIHBvaW50IGFzIGZpcnN0IHBvaW50XG4gICAgICAgIHB0cy51bnNoaWZ0KHBvaW50c1tsIC0gMl0pO1xuICAgICAgICBwdHMucHVzaChwb2ludHNbMF0sIHBvaW50c1sxXSk7IC8vIGZpcnN0IHBvaW50IGFzIGxhc3QgcG9pbnRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHB0cy51bnNoaWZ0KHBvaW50c1sxXSk7IC8vIGNvcHkgMS4gcG9pbnQgYW5kIGluc2VydCBhdCBiZWdpbm5pbmdcbiAgICAgICAgcHRzLnVuc2hpZnQocG9pbnRzWzBdKTtcbiAgICAgICAgcHRzLnB1c2gocG9pbnRzW2wgLSAyXSwgcG9pbnRzW2wgLSAxXSk7IC8vIGR1cGxpY2F0ZSBlbmQtcG9pbnRzXG4gICAgfVxuICAgIC8vIGNhY2hlIGlubmVyLWxvb3AgY2FsY3VsYXRpb25zIGFzIHRoZXkgYXJlIGJhc2VkIG9uIHQgYWxvbmVcbiAgICBjYWNoZVswXSA9IDE7IC8vIDEsMCwwLDBcbiAgICBmb3IgKDsgaSA8IG51bU9mU2VnOyBpKyspIHtcbiAgICAgICAgdmFyIHN0ID0gaSAvIG51bU9mU2VnLCBzdDIgPSBzdCAqIHN0LCBzdDMgPSBzdDIgKiBzdCwgc3QyMyA9IHN0MyAqIDIsIHN0MzIgPSBzdDIgKiAzO1xuICAgICAgICBjYWNoZVtjYWNoZVB0cisrXSA9IHN0MjMgLSBzdDMyICsgMTsgLy8gYzFcbiAgICAgICAgY2FjaGVbY2FjaGVQdHIrK10gPSBzdDMyIC0gc3QyMzsgLy8gYzJcbiAgICAgICAgY2FjaGVbY2FjaGVQdHIrK10gPSBzdDMgLSAyICogc3QyICsgc3Q7IC8vIGMzXG4gICAgICAgIGNhY2hlW2NhY2hlUHRyKytdID0gc3QzIC0gc3QyOyAvLyBjNFxuICAgIH1cbiAgICBjYWNoZVsrK2NhY2hlUHRyXSA9IDE7IC8vIDAsMSwwLDBcbiAgICAvLyBjYWxjLiBwb2ludHNcbiAgICBwYXJzZShwdHMsIGNhY2hlLCBsKTtcbiAgICBpZiAoY2xvc2UpIHtcbiAgICAgICAgLy9sID0gcG9pbnRzLmxlbmd0aDtcbiAgICAgICAgcHRzID0gW107XG4gICAgICAgIHB0cy5wdXNoKHBvaW50c1tsIC0gNF0sIHBvaW50c1tsIC0gM10sIHBvaW50c1tsIC0gMl0sIHBvaW50c1tsIC0gMV0pOyAvLyBzZWNvbmQgbGFzdCBhbmQgbGFzdFxuICAgICAgICBwdHMucHVzaChwb2ludHNbMF0sIHBvaW50c1sxXSwgcG9pbnRzWzJdLCBwb2ludHNbM10pOyAvLyBmaXJzdCBhbmQgc2Vjb25kXG4gICAgICAgIHBhcnNlKHB0cywgY2FjaGUsIDQpO1xuICAgIH1cbiAgICAvLyBhZGQgbGFzdCBwb2ludFxuICAgIGwgPSBjbG9zZSA/IDAgOiBwb2ludHMubGVuZ3RoIC0gMjtcbiAgICByZXNbclBvcysrXSA9IHBvaW50c1tsXTtcbiAgICByZXNbclBvc10gPSBwb2ludHNbbCArIDFdO1xuICAgIHJldHVybiByZXM7XG59XG4vKipcbiAqIEZsYXR0ZW4gYW4gYXJyYXkgb2YgdmVjdG9ycyB0byBhIGZsYXQgYXJyYXkgb2YgcG9pbnRzXG4gKiBpbiB0aGUgZm9ybWF0IFt4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLCB4TiwgeU5dXG4gKlxuICogQHBhcmFtICAge0FycmF5PFZlY3Rvcj59ICAgcG9pbnRzICBQb2ludHMgYXJyYXkgdG8gZmxhdHRlblxuICpcbiAqIEByZXR1cm4gIHtBcnJheTxudW1iZXI+fSAgIEZsYXQgYXJyYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW5Qb2ludHMocG9pbnRzKSB7XG4gICAgY29uc3QgZmxhdHRlbmVkX2FycmF5ID0gW107XG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAobGV0IHBvaW50IG9mIHBvaW50cykge1xuICAgICAgICBmbGF0dGVuZWRfYXJyYXlbaV0gPSBwb2ludC54O1xuICAgICAgICBmbGF0dGVuZWRfYXJyYXlbaSArIDFdID0gcG9pbnQueTtcbiAgICAgICAgaSA9IGkgKyAyO1xuICAgIH1cbiAgICByZXR1cm4gZmxhdHRlbmVkX2FycmF5O1xufVxuLyoqXG4gKiBUYWtlcyBhIEZsb2F0MzJBcnJheSBmbGF0IHBvaW50cyBhcnJheSBbeDAsIHkwLCB4MSwgeTEsIHhOLCB5Tl1cbiAqIGFuZCBjb252ZXJ0cyBpdCB0byBhbiBhcnJheSBvdiB2ZWN0b3JzXG4gKlxuICogQHBhcmFtICAge0Zsb2F0MzJBcnJheX0gIGZsYXRfcG9pbnRzXG4gKlxuICogQHJldHVybiAge0FycmF5PFZlY3Rvcj59ICBBcnJheSBvdiBWZWN0b3IgcG9pbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRQb2ludHMoZmxhdF9wb2ludHMpIHtcbiAgICBjb25zdCBwb2ludHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZsYXRfcG9pbnRzLmxlbmd0aDsgaSA9IGkgKyAyKSB7XG4gICAgICAgIHBvaW50cy5wdXNoKG5ldyBWZWN0b3IoZmxhdF9wb2ludHNbaV0sIGZsYXRfcG9pbnRzW2kgKyAxXSkpO1xuICAgIH1cbiAgICByZXR1cm4gcG9pbnRzO1xufVxuLyoqXG4gKiBTaW1wbGlmaWVzIGFuIGFycmF5IG9mIHZlY3RvcnNcbiAqXG4gKiBAcGFyYW0gICB7QXJyYXk8VmVjdG9yPn0gICAgIHBvaW50cyAgUG9pbnRzIGFycmF5IHRvIHNpbXBsaWZ5XG4gKiBAcGFyYW0gICB7bnVtYmVyP30gICAgICAgICAgIGZhY3RvciAgSG93IG11Y2ggdG8gc2ltcGxpZnlcbiAqXG4gKiBAcmV0dXJuICB7QXJyYXk8VmVjdG9yPn0gU2ltcGxpZmllZCBhcnJheVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2ltcGxpZnkocG9pbnRzLCBmYWN0b3IgPSAyKSB7XG4gICAgY29uc3Qgc2ltcGxpZmllZF9wb2ludHMgPSBbXTtcbiAgICAvLyBBZGQgdGhlIGZpcnN0IHBvaW50XG4gICAgc2ltcGxpZmllZF9wb2ludHMucHVzaChwb2ludHNbMF0pO1xuICAgIGZvciAobGV0IGkgPSBmYWN0b3I7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSA9IGkgKyBmYWN0b3IpIHtcbiAgICAgICAgc2ltcGxpZmllZF9wb2ludHMucHVzaChwb2ludHNbaV0pO1xuICAgIH1cbiAgICBzaW1wbGlmaWVkX3BvaW50cy5wdXNoKHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV0pO1xuICAgIHJldHVybiBzaW1wbGlmaWVkX3BvaW50cztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUaGVzZSB2YWx1ZXMgYXJlIHVzZWQgYnkgdGhlIGBBYnN0cmFjdFZlY3Rvci5yb3VuZGAgbWV0aG9kIHRvIGluY3JlYXNlXG4gKiBwZXJmb3JtYW5jZSB2cy4gdXNpbmcgIE51bWJlci50b0ZpeGVkLlxuICovXG52YXIgcHJlY2lzaW9uID0gW1xuICAgIDEsXG4gICAgMTAsXG4gICAgMTAwLFxuICAgIDEwMDAsXG4gICAgMTAwMDAsXG4gICAgMTAwMDAwLFxuICAgIDEwMDAwMDAsXG4gICAgMTAwMDAwMDAsXG4gICAgMTAwMDAwMDAwLFxuICAgIDEwMDAwMDAwMDAsXG4gICAgMTAwMDAwMDAwMDBcbl07XG4vKipcbiAqIFRoZSBjbGFzcyB0aGF0IGFsbCBvdGhlciB2ZWN0b3IgcmVwcmVzZW50YXRpb25zIGFyZSBkZXJpdmVkIGZyb20uXG4gKlxuICogQ29udGFpbnMgdGhlIGNvcmUgaW1wbGVtZW50YXRpb24gZm9yIGFsbCBtZXRob2RzIHRoYXQgd2lsbCBiZSBleHBvc2VkIGJ5XG4gKiB2ZWN0b3IgaW5zdGFuY2VzLlxuICpcbiAqIEV4YW1wbGUgb2YgY3JlYXRpbmcgYSBjdXN0b20gaW1wbGVtZW50YXRpb246XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IEFic3RyYWN0VmVjdG9yIH0gZnJvbSBcIi4vQWJzdHJhY3RWZWN0b3JcIlxuICpcbiAqIGV4cG9ydCBjbGFzcyBNeUN1c3RvbVZlY3RvciBleHRlbmRzIEFic3RyYWN0VmVjdG9yIHtcbiAqICBjb25zdHJ1Y3RvciAoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAqICAgIHN1cGVyKEN1c3RvbVZlY3RvclR5cGUpXG4gKiAgfVxuICogfVxuICogYGBgXG4gKi9cbnZhciBBYnN0cmFjdFZlY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBYnN0cmFjdFZlY3RvcihjdG9yKSB7XG4gICAgICAgIHRoaXMuY3RvciA9IGN0b3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCBib3RoIHggYW5kIHkgYXhpcyB2YWx1ZVxuICAgICAqIEBwYXJhbSB4ICAgTmV3IHggdmFsXG4gICAgICogQHBhcmFtIHkgICBOZXcgeSB2YWxcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuc2V0QXhlcyA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0dGVyIGZvciB4IHRoZSBheGlzIHZhbHVlXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLng7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgZm9yIHggYXhpcyB2YWx1ZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXR0ZXIgZm9yIHkgYXhpcyB2YWx1ZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy55O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0dGVyIGZvciB5IGF4aXMuXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnNldFkgPSBmdW5jdGlvbiAoeSkge1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgdmVjdG9yIGFzIGEgZm9ybWF0dGVkIHN0cmluZywgZS5nIFwiKDAsIDQpXCJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAocm91bmQpIHtcbiAgICAgICAgaWYgKHJvdW5kID09PSB2b2lkIDApIHsgcm91bmQgPSBmYWxzZTsgfVxuICAgICAgICBpZiAocm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIihcIiArIE1hdGgucm91bmQodGhpcy54KSArIFwiLCBcIiArIE1hdGgucm91bmQodGhpcy55KSArIFwiKVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIihcIiArIHRoaXMueCArIFwiLCBcIiArIHRoaXMueSArIFwiKVwiO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIEFycmF5IGNvbnRhaW5pbmcgdGhlIHZlY3RvciBheGVzLCBlLmcgWzAsIDRdXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIE9iamVjdCBjb250YWluaW5nIHRoZSB2ZWN0b3IgYXhlcywgZS5nIHsgeDogMCwgeTogNCB9XG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgeTogdGhpcy55XG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIHByb3ZpZGVkIHZlY3RvciB0byB0aGlzIG9uZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ICs9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0IHRoZSBwcm92aWRlZCB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIHByb3ZpZGVkIHZlY3RvciBlcXVhbCB0byB0aGlzIG9uZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHJldHVybiB2ZWMueCA9PT0gdGhpcy54ICYmIHZlYy55ID09PSB0aGlzLnk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm11bHRpcGx5QnlWZWN0b3IgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHRoaXMueCAqPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ICo9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubXVsViA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHlCeVZlY3Rvcih2ZWMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGl2aWRlIHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGl2aWRlQnlWZWN0b3IgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHRoaXMueCAvPSB2ZWMueDtcbiAgICAgICAgdGhpcy55IC89IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpdmlkZSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRpdlYgPSBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGVCeVZlY3Rvcih2KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCBudW1iZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubXVsdGlwbHlCeVNjYWxhciA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHRoaXMueCAqPSBuO1xuICAgICAgICB0aGlzLnkgKj0gbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgbnVtYmVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm11bFMgPSBmdW5jdGlvbiAobikge1xuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseUJ5U2NhbGFyKG4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGl2aXZlIHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCBudW1iZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGl2aWRlQnlTY2FsYXIgPSBmdW5jdGlvbiAobikge1xuICAgICAgICB0aGlzLnggLz0gbjtcbiAgICAgICAgdGhpcy55IC89IG47XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGl2aXZlIHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCBudW1iZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGl2UyA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpdmlkZUJ5U2NhbGFyKG4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTm9ybWFsaXNlIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm5vcm1hbGlzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGl2aWRlQnlTY2FsYXIodGhpcy5tYWduaXR1ZGUoKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGb3IgQW1lcmljYW4gc3BlbGxpbmcuIFNhbWUgYXMgdW5pdC9ub3JtYWxpc2UgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubm9ybWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpc2UoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBzYW1lIGFzIG5vcm1hbGlzZSBhbmQgbm9ybWFsaXplXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnVuaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGlzZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWFnbml0dWRlIChsZW5ndGgpIG9mIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm1hZ25pdHVkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHggPSB0aGlzLng7XG4gICAgICAgIHZhciB5ID0gdGhpcy55O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWFnbml0dWRlIChsZW5ndGgpIG9mIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFnbml0dWRlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzcXVyZWQgbGVuZ3RoIG9mIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmxlbmd0aFNxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgeCA9IHRoaXMueDtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnk7XG4gICAgICAgIHJldHVybiB4ICogeCArIHkgKiB5O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZG90IHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYnkgYW5vdGhlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kb3QgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHJldHVybiB2ZWMueCAqIHRoaXMueCArIHZlYy55ICogdGhpcy55O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBieSBhbm90aGVyLlxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5jcm9zcyA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHZlYy55IC0gdGhpcy55ICogdmVjLng7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXZlcnNlcyB0aGlzIHZlY3RvciBpLmUgbXVsdGlwbGllcyBpdCBieSAtMVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnggPSAtdGhpcy54O1xuICAgICAgICB0aGlzLnkgPSAtdGhpcy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgdmVjdG9yIGF4ZXMgdmFsdWVzIHRvIGFic29sdXRlIHZhbHVlc1xuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5hYnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMueCA9IE1hdGguYWJzKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGguYWJzKHRoaXMueSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogWmVyb2VzIHRoZSB2ZWN0b3IgaS5lIHNldHMgYWxsIGF4ZXMgdG8gMFxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS56ZXJvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGlzdGFuY2UgPSBmdW5jdGlvbiAodikge1xuICAgICAgICB2YXIgeCA9IHRoaXMueCAtIHYueDtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnkgLSB2Lnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIHRoZSB2ZXRvciBieSBwcm92aWRlZCByYWRpYW5zXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnJvdGF0ZSA9IGZ1bmN0aW9uIChyYWRzKSB7XG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyYWRzKTtcbiAgICAgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZHMpO1xuICAgICAgICB2YXIgb3ggPSB0aGlzLng7XG4gICAgICAgIHZhciBveSA9IHRoaXMueTtcbiAgICAgICAgdGhpcy54ID0gb3ggKiBjb3MgLSBveSAqIHNpbjtcbiAgICAgICAgdGhpcy55ID0gb3ggKiBzaW4gKyBveSAqIGNvcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSb3VuZHMgdGhpcyB2ZWN0b3IgdG8gbiBkZWNpbWFsIHBsYWNlc1xuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5yb3VuZCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIGlmIChuID09PSB2b2lkIDApIHsgbiA9IDI7IH1cbiAgICAgICAgdmFyIHAgPSBwcmVjaXNpb25bbl07XG4gICAgICAgIC8vIFRoaXMgcGVyZm9ybXMgd2FhYXkgYmV0dGVyIHRoYW4gdG9GaXhlZCBhbmQgZ2l2ZSBGbG9hdDMyIHRoZSBlZGdlIGFnYWluLlxuICAgICAgICAvLyBodHRwOi8vd3d3LmR5bmFtaWNndXJ1LmNvbS9qYXZhc2NyaXB0L3JvdW5kLW51bWJlcnMtd2l0aC1wcmVjaXNpb24vXG4gICAgICAgIHRoaXMueCA9ICgoMC41ICsgdGhpcy54ICogcCkgPDwgMCkgLyBwO1xuICAgICAgICB0aGlzLnkgPSAoKDAuNSArIHRoaXMueSAqIHApIDw8IDApIC8gcDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgY29weSBvZiB0aGlzIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmN0b3IodGhpcy54LCB0aGlzLnkpO1xuICAgIH07XG4gICAgcmV0dXJuIEFic3RyYWN0VmVjdG9yO1xufSgpKTtcbmV4cG9ydHMuQWJzdHJhY3RWZWN0b3IgPSBBYnN0cmFjdFZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFic3RyYWN0VmVjdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQWJzdHJhY3RWZWN0b3JfMSA9IHJlcXVpcmUoXCIuL0Fic3RyYWN0VmVjdG9yXCIpO1xuLyoqXG4gKiBBIHZlY3RvciByZXByZXNlbnRhdGlvbiB0aGF0IHN0b3JlcyB0aGUgYXhlcyBpbiBhbiBBcnJheVxuICpcbiAqIGBgYFxuICogY29uc3QgdiA9IG5ldyBWZWMyRC5BcnJheVZlY3RvcigyLCA1KVxuICogYGBgXG4gKi9cbnZhciBBcnJheVZlY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXJyYXlWZWN0b3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXJyYXlWZWN0b3IoeCwgeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBBcnJheVZlY3RvcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYXhlcyA9IFt4LCB5XTtcbiAgICAgICAgX3RoaXMuY3RvciA9IEFycmF5VmVjdG9yO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheVZlY3Rvci5wcm90b3R5cGUsIFwieFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXhlc1swXTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgdGhpcy5heGVzWzBdID0geDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5VmVjdG9yLnByb3RvdHlwZSwgXCJ5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5heGVzWzFdO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh5KSB7XG4gICAgICAgICAgICB0aGlzLmF4ZXNbMV0gPSB5O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQXJyYXlWZWN0b3I7XG59KEFic3RyYWN0VmVjdG9yXzEuQWJzdHJhY3RWZWN0b3IpKTtcbmV4cG9ydHMuQXJyYXlWZWN0b3IgPSBBcnJheVZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFycmF5VmVjdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQWJzdHJhY3RWZWN0b3JfMSA9IHJlcXVpcmUoXCIuL0Fic3RyYWN0VmVjdG9yXCIpO1xuLyoqXG4gKiBBIHZlY3RvciByZXByZXNlbnRhdGlvbiB0aGF0IHN0b3JlcyB0aGUgYXhlcyBpbiBhIEZsb2F0MzJBcnJheVxuICpcbiAqIGBgYFxuICogY29uc3QgdiA9IG5ldyBWZWMyRC5GbG9hdDMyVmVjdG9yKDIsIDUpXG4gKiBgYGBcbiAqL1xudmFyIEZsb2F0MzJWZWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZsb2F0MzJWZWN0b3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmxvYXQzMlZlY3Rvcih4LCB5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIEZsb2F0MzJWZWN0b3IpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmF4ZXMgPSBuZXcgRmxvYXQzMkFycmF5KDIpO1xuICAgICAgICBfdGhpcy5heGVzWzBdID0geDtcbiAgICAgICAgX3RoaXMuYXhlc1sxXSA9IHk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZsb2F0MzJWZWN0b3IucHJvdG90eXBlLCBcInhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF4ZXNbMF07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHRoaXMuYXhlc1swXSA9IHg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGbG9hdDMyVmVjdG9yLnByb3RvdHlwZSwgXCJ5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5heGVzWzFdO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh5KSB7XG4gICAgICAgICAgICB0aGlzLmF4ZXNbMV0gPSB5O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gRmxvYXQzMlZlY3Rvcjtcbn0oQWJzdHJhY3RWZWN0b3JfMS5BYnN0cmFjdFZlY3RvcikpO1xuZXhwb3J0cy5GbG9hdDMyVmVjdG9yID0gRmxvYXQzMlZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZsb2F0MzJWZWN0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQocmVxdWlyZShcIi4vQWJzdHJhY3RWZWN0b3JcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vQXJyYXlWZWN0b3JcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vRmxvYXQzMlZlY3RvclwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9WZWN0b3JcIikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VmVjMkQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBYnN0cmFjdFZlY3Rvcl8xID0gcmVxdWlyZShcIi4vQWJzdHJhY3RWZWN0b3JcIik7XG4vKipcbiAqIEEgdmVjdG9yIHJlcHJlc2VudGF0aW9uIHRoYXQgc3RvcmVzIHRoZSBheGVzIGFzIHBhcnQgb2YgdGhlIGluc3RhbmNlIGl0c2VsZlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCB2ID0gbmV3IFZlYzJELlZlY3RvcigyLCA1KVxuICogYGBgXG4gKi9cbnZhciBWZWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZlY3RvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBWZWN0b3IoeCwgeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBWZWN0b3IpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl94ID0geDtcbiAgICAgICAgX3RoaXMuX3kgPSB5O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IucHJvdG90eXBlLCBcInhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl94O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICB0aGlzLl94ID0geDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3Rvci5wcm90b3R5cGUsIFwieVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3k7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgICAgIHRoaXMuX3kgPSB5O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gVmVjdG9yO1xufShBYnN0cmFjdFZlY3Rvcl8xLkFic3RyYWN0VmVjdG9yKSk7XG5leHBvcnRzLlZlY3RvciA9IFZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZlY3Rvci5qcy5tYXAiLCIvKiFcbiAqIHZhbmlsbGEtcGlja2VyIHYyLjEyLjFcbiAqIGh0dHBzOi8vdmFuaWxsYS1waWNrZXIuanMub3JnXG4gKlxuICogQ29weXJpZ2h0IDIwMTctMjAyMSBBbmRyZWFzIEJvcmdlbiAoaHR0cHM6Ly9naXRodWIuY29tL1NwaGlueHh4eCksIEFkYW0gQnJvb2tzIChodHRwczovL2dpdGh1Yi5jb20vZGlzc2ltdWxhdGUpXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKi9cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cbnZhciBzbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkge1xuICAgIHZhciBfYXJyID0gW107XG4gICAgdmFyIF9uID0gdHJ1ZTtcbiAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkge1xuICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gICAgfVxuICB9O1xufSgpO1xuXG5TdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggPSBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggfHwgZnVuY3Rpb24gKG5lZWRsZSkge1xuICAgIHJldHVybiB0aGlzLmluZGV4T2YobmVlZGxlKSA9PT0gMDtcbn07XG5TdHJpbmcucHJvdG90eXBlLnBhZFN0YXJ0ID0gU3RyaW5nLnByb3RvdHlwZS5wYWRTdGFydCB8fCBmdW5jdGlvbiAobGVuLCBwYWQpIHtcbiAgICB2YXIgc3RyID0gdGhpczt3aGlsZSAoc3RyLmxlbmd0aCA8IGxlbikge1xuICAgICAgICBzdHIgPSBwYWQgKyBzdHI7XG4gICAgfXJldHVybiBzdHI7XG59O1xuXG52YXIgY29sb3JOYW1lcyA9IHsgY2I6ICcwZjhmZicsIHRxdzogJ2FlYmQ3JywgcTogJy1mZmZmJywgcW1ybjogJzdmZmZkNCcsIHpyOiAnMGZmZmYnLCBiZzogJzVmNWRjJywgYnNxOiAnZTRjNCcsIGJjazogJy0tLScsIG5jaDogJ2ViY2QnLCBiOiAnLS1mZicsIGJ2dDogJzhhMmJlMicsIGJyd246ICdhNTJhMmEnLCBicnc6ICdkZWI4ODcnLCBjdGI6ICc1ZjllYTAnLCBocnQ6ICc3ZmZmLScsIGNoY1Q6ICdkMjY5MWUnLCBjcjogJzdmNTAnLCBybnc6ICc2NDk1ZWQnLCBjcm5zOiAnOGRjJywgY3JtczogJ2RjMTQzYycsIGNuOiAnLWZmZmYnLCBEYjogJy0tOGInLCBEY246ICctOGI4YicsIERnbnI6ICdiODg2MGInLCBEZ3I6ICdhOWE5YTknLCBEZ3JuOiAnLTY0LScsIERraGs6ICdiZGI3NmInLCBEbWduOiAnOGItOGInLCBEdmdyOiAnNTU2YjJmJywgRHJuZzogJzhjLScsIERyY2g6ICc5OTMyY2MnLCBEcjogJzhiLS0nLCBEc21uOiAnZTk5NjdhJywgRHNncjogJzhmYmM4ZicsIERzVGI6ICc0ODNkOGInLCBEc1RnOiAnMmY0ZjRmJywgRHRycTogJy1jZWQxJywgRHZ0OiAnOTQtZDMnLCBwcG5rOiAnMTQ5MycsIHBza2I6ICctYmZmZicsIG1ncjogJzY5Njk2OScsIGdyYjogJzFlOTBmZicsIHJicmM6ICdiMjIyMjInLCByd2h0OiAnYWYwJywgc3RnOiAnMjI4YjIyJywgY2hzOiAnLWZmJywgZ25zYjogJ2RjZGNkYycsIHN0OiAnOGY4ZmYnLCBnOiAnZDctJywgZ25yOiAnZGFhNTIwJywgZ3I6ICc4MDgwODAnLCBncm46ICctOC0wJywgZ3JudzogJ2FkZmYyZicsIGhudzogJzBmZmYwJywgaHRwbjogJzY5YjQnLCBubnI6ICdjZDVjNWMnLCBuZzogJzRiLTgyJywgdnI6ICcwJywga2hrOiAnMGU2OGMnLCB2bnI6ICdlNmU2ZmEnLCBucmI6ICcwZjUnLCB3bmdyOiAnN2NmYy0nLCBtbmNoOiAnYWNkJywgTGI6ICdhZGQ4ZTYnLCBMY3I6ICcwODA4MCcsIExjbjogJ2UwZmZmZicsIExnbnI6ICdhZmFkMicsIExncjogJ2QzZDNkMycsIExncm46ICc5MGVlOTAnLCBMcG5rOiAnYjZjMScsIExzbW46ICdhMDdhJywgTHNncjogJzIwYjJhYScsIExza2I6ICc4N2NlZmEnLCBMc1RnOiAnNzc4ODk5JywgTHN0YjogJ2IwYzRkZScsIEx3OiAnZTAnLCBtOiAnLWZmLScsIG1ncm46ICczMmNkMzInLCBubjogJ2FmMGU2JywgbWdudDogJy1mZicsIG1ybjogJzgtLTAnLCBtcW06ICc2NmNkYWEnLCBtbWI6ICctLWNkJywgbW1yYzogJ2JhNTVkMycsIG1tcHI6ICc5MzcwZGInLCBtc2c6ICczY2IzNzEnLCBtbXNUOiAnN2I2OGVlJywgJyc6ICctZmE5YScsIG10cjogJzQ4ZDFjYycsIG1tdnQ6ICdjNzE1ODUnLCBtbkxiOiAnMTkxOTcwJywgbnRjOiAnNWZmZmEnLCBtc3RyOiAnZTRlMScsIG1jY3M6ICdlNGI1Jywgdmp3OiAnZGVhZCcsIG52OiAnLS04MCcsIGM6ICdkZjVlNicsIHY6ICc4MDgtMCcsIHZyYjogJzZiOGUyMycsIHJuZzogJ2E1LScsIHJuZ3I6ICc0NS0nLCByY2g6ICdkYTcwZDYnLCBwZ25yOiAnZWVlOGFhJywgcGdybjogJzk4ZmI5OCcsIHB0cnE6ICdhZmVlZWUnLCBwdnRyOiAnZGI3MDkzJywgcHB3aDogJ2VmZDUnLCBwY2hwOiAnZGFiOScsIHByOiAnY2Q4NTNmJywgcG5rOiAnYzBjYicsIHBtOiAnZGRhMGRkJywgcHdyYjogJ2IwZTBlNicsIHBycDogJzgtMDgwJywgY2M6ICc2NjMzOTknLCByOiAnLS0nLCBzYnI6ICdiYzhmOGYnLCByYjogJzQxNjllMScsIHNicnc6ICc4YjQ1MTMnLCBzbW46ICdhODA3MicsIG5icjogJzRhNDYwJywgc2dybjogJzJlOGI1NycsIHNzaDogJzVlZScsIHNubjogJ2EwNTIyZCcsIHN2cjogJ2MwYzBjMCcsIHNrYjogJzg3Y2VlYicsIHNUYjogJzZhNWFjZCcsIHNUZ3I6ICc3MDgwOTAnLCBzbnc6ICdhZmEnLCBuOiAnLWZmN2YnLCBzdGI6ICc0NjgyYjQnLCB0bjogJ2QyYjQ4YycsIHQ6ICctODA4MCcsIHRoc3Q6ICdkOGJmZDgnLCB0bVQ6ICc2MzQ3JywgdHJxczogJzQwZTBkMCcsIHZ0OiAnZWU4MmVlJywgd2hUOiAnNWRlYjMnLCB3aHQ6ICcnLCBodHM6ICc1ZjVmNScsIHc6ICctJywgd2dybjogJzlhY2QzMicgfTtcblxuZnVuY3Rpb24gcHJpbnROdW0obnVtKSB7XG4gICAgdmFyIGRlY3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE7XG5cbiAgICB2YXIgc3RyID0gZGVjcyA+IDAgPyBudW0udG9GaXhlZChkZWNzKS5yZXBsYWNlKC8wKyQvLCAnJykucmVwbGFjZSgvXFwuJC8sICcnKSA6IG51bS50b1N0cmluZygpO1xuICAgIHJldHVybiBzdHIgfHwgJzAnO1xufVxuXG52YXIgQ29sb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29sb3IociwgZywgYiwgYSkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBDb2xvcik7XG5cblxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlU3RyaW5nKGlucHV0KSB7XG5cbiAgICAgICAgICAgIGlmIChpbnB1dC5zdGFydHNXaXRoKCdoc2wnKSkge1xuICAgICAgICAgICAgICAgIHZhciBfaW5wdXQkbWF0Y2gkbWFwID0gaW5wdXQubWF0Y2goLyhbXFwtXFxkXFwuZV0rKS9nKS5tYXAoTnVtYmVyKSxcbiAgICAgICAgICAgICAgICAgICAgX2lucHV0JG1hdGNoJG1hcDIgPSBzbGljZWRUb0FycmF5KF9pbnB1dCRtYXRjaCRtYXAsIDQpLFxuICAgICAgICAgICAgICAgICAgICBoID0gX2lucHV0JG1hdGNoJG1hcDJbMF0sXG4gICAgICAgICAgICAgICAgICAgIHMgPSBfaW5wdXQkbWF0Y2gkbWFwMlsxXSxcbiAgICAgICAgICAgICAgICAgICAgbCA9IF9pbnB1dCRtYXRjaCRtYXAyWzJdLFxuICAgICAgICAgICAgICAgICAgICBfYSA9IF9pbnB1dCRtYXRjaCRtYXAyWzNdO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9hID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX2EgPSAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGggLz0gMzYwO1xuICAgICAgICAgICAgICAgIHMgLz0gMTAwO1xuICAgICAgICAgICAgICAgIGwgLz0gMTAwO1xuICAgICAgICAgICAgICAgIHRoYXQuaHNsYSA9IFtoLCBzLCBsLCBfYV07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0LnN0YXJ0c1dpdGgoJ3JnYicpKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9pbnB1dCRtYXRjaCRtYXAzID0gaW5wdXQubWF0Y2goLyhbXFwtXFxkXFwuZV0rKS9nKS5tYXAoTnVtYmVyKSxcbiAgICAgICAgICAgICAgICAgICAgX2lucHV0JG1hdGNoJG1hcDQgPSBzbGljZWRUb0FycmF5KF9pbnB1dCRtYXRjaCRtYXAzLCA0KSxcbiAgICAgICAgICAgICAgICAgICAgX3IgPSBfaW5wdXQkbWF0Y2gkbWFwNFswXSxcbiAgICAgICAgICAgICAgICAgICAgX2cgPSBfaW5wdXQkbWF0Y2gkbWFwNFsxXSxcbiAgICAgICAgICAgICAgICAgICAgX2IgPSBfaW5wdXQkbWF0Y2gkbWFwNFsyXSxcbiAgICAgICAgICAgICAgICAgICAgX2EyID0gX2lucHV0JG1hdGNoJG1hcDRbM107XG5cbiAgICAgICAgICAgICAgICBpZiAoX2EyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX2EyID0gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGF0LnJnYmEgPSBbX3IsIF9nLCBfYiwgX2EyXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnJnYmEgPSBDb2xvci5oZXhUb1JnYihpbnB1dCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yZ2JhID0gQ29sb3IubmFtZVRvUmdiKGlucHV0KSB8fCBDb2xvci5oZXhUb1JnYihpbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHIgPT09IHVuZGVmaW5lZCkgOyBlbHNlIGlmIChBcnJheS5pc0FycmF5KHIpKSB7XG4gICAgICAgICAgICB0aGlzLnJnYmEgPSByO1xuICAgICAgICB9IGVsc2UgaWYgKGIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGNvbG9yID0gciAmJiAnJyArIHI7XG4gICAgICAgICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgICAgICAgICBwYXJzZVN0cmluZyhjb2xvci50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmdiYSA9IFtyLCBnLCBiLCBhID09PSB1bmRlZmluZWQgPyAxIDogYV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhDb2xvciwgW3tcbiAgICAgICAga2V5OiAncHJpbnRSR0InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRSR0IoYWxwaGEpIHtcbiAgICAgICAgICAgIHZhciByZ2IgPSBhbHBoYSA/IHRoaXMucmdiYSA6IHRoaXMucmdiYS5zbGljZSgwLCAzKSxcbiAgICAgICAgICAgICAgICB2YWxzID0gcmdiLm1hcChmdW5jdGlvbiAoeCwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmludE51bSh4LCBpID09PSAzID8gMyA6IDApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBhbHBoYSA/ICdyZ2JhKCcgKyB2YWxzICsgJyknIDogJ3JnYignICsgdmFscyArICcpJztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJpbnRIU0wnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRIU0woYWxwaGEpIHtcbiAgICAgICAgICAgIHZhciBtdWx0cyA9IFszNjAsIDEwMCwgMTAwLCAxXSxcbiAgICAgICAgICAgICAgICBzdWZmID0gWycnLCAnJScsICclJywgJyddO1xuXG4gICAgICAgICAgICB2YXIgaHNsID0gYWxwaGEgPyB0aGlzLmhzbGEgOiB0aGlzLmhzbGEuc2xpY2UoMCwgMyksXG4gICAgICAgICAgICAgICAgdmFscyA9IGhzbC5tYXAoZnVuY3Rpb24gKHgsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJpbnROdW0oeCAqIG11bHRzW2ldLCBpID09PSAzID8gMyA6IDEpICsgc3VmZltpXTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYWxwaGEgPyAnaHNsYSgnICsgdmFscyArICcpJyA6ICdoc2woJyArIHZhbHMgKyAnKSc7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByaW50SGV4JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByaW50SGV4KGFscGhhKSB7XG4gICAgICAgICAgICB2YXIgaGV4ID0gdGhpcy5oZXg7XG4gICAgICAgICAgICByZXR1cm4gYWxwaGEgPyBoZXggOiBoZXguc3Vic3RyaW5nKDAsIDcpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZ2JhJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcmdiYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZ2JhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLl9oc2xhKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb2xvciBpcyBzZXQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JnYmEgPSBDb2xvci5oc2xUb1JnYih0aGlzLl9oc2xhKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQocmdiKSB7XG4gICAgICAgICAgICBpZiAocmdiLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJnYlszXSA9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3JnYmEgPSByZ2I7XG4gICAgICAgICAgICB0aGlzLl9oc2xhID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmdiU3RyaW5nJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmludFJHQigpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZ2JhU3RyaW5nJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmludFJHQih0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaHNsYScsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2hzbGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faHNsYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5fcmdiYSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY29sb3IgaXMgc2V0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oc2xhID0gQ29sb3IucmdiVG9Ic2wodGhpcy5fcmdiYSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGhzbCkge1xuICAgICAgICAgICAgaWYgKGhzbC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICBoc2xbM10gPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9oc2xhID0gaHNsO1xuICAgICAgICAgICAgdGhpcy5fcmdiYSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hzbFN0cmluZycsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRIU0woKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaHNsYVN0cmluZycsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRIU0wodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hleCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgdmFyIHJnYiA9IHRoaXMucmdiYSxcbiAgICAgICAgICAgICAgICBoZXggPSByZ2IubWFwKGZ1bmN0aW9uICh4LCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkgPCAzID8geC50b1N0cmluZygxNikgOiBNYXRoLnJvdW5kKHggKiAyNTUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gJyMnICsgaGV4Lm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4LnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgICAgICB9KS5qb2luKCcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoaGV4KSB7XG4gICAgICAgICAgICB0aGlzLnJnYmEgPSBDb2xvci5oZXhUb1JnYihoZXgpO1xuICAgICAgICB9XG4gICAgfV0sIFt7XG4gICAgICAgIGtleTogJ2hleFRvUmdiJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhleFRvUmdiKGlucHV0KSB7XG5cbiAgICAgICAgICAgIHZhciBoZXggPSAoaW5wdXQuc3RhcnRzV2l0aCgnIycpID8gaW5wdXQuc2xpY2UoMSkgOiBpbnB1dCkucmVwbGFjZSgvXihcXHd7M30pJC8sICckMUYnKS5yZXBsYWNlKC9eKFxcdykoXFx3KShcXHcpKFxcdykkLywgJyQxJDEkMiQyJDMkMyQ0JDQnKS5yZXBsYWNlKC9eKFxcd3s2fSkkLywgJyQxRkYnKTtcblxuICAgICAgICAgICAgaWYgKCFoZXgubWF0Y2goL14oWzAtOWEtZkEtRl17OH0pJC8pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGhleCBjb2xvcjsgJyArIGlucHV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHJnYmEgPSBoZXgubWF0Y2goL14oXFx3XFx3KShcXHdcXHcpKFxcd1xcdykoXFx3XFx3KSQvKS5zbGljZSgxKS5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTYpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJnYmFbM10gPSByZ2JhWzNdIC8gMjU1O1xuICAgICAgICAgICAgcmV0dXJuIHJnYmE7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ25hbWVUb1JnYicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBuYW1lVG9SZ2IoaW5wdXQpIHtcblxuICAgICAgICAgICAgdmFyIGhhc2ggPSBpbnB1dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJ2F0JywgJ1QnKS5yZXBsYWNlKC9bYWVpb3V5bGRmXS9nLCAnJykucmVwbGFjZSgnZ2h0JywgJ0wnKS5yZXBsYWNlKCdyaycsICdEJykuc2xpY2UoLTUsIDQpLFxuICAgICAgICAgICAgICAgIGhleCA9IGNvbG9yTmFtZXNbaGFzaF07XG4gICAgICAgICAgICByZXR1cm4gaGV4ID09PSB1bmRlZmluZWQgPyBoZXggOiBDb2xvci5oZXhUb1JnYihoZXgucmVwbGFjZSgvXFwtL2csICcwMCcpLnBhZFN0YXJ0KDYsICdmJykpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZ2JUb0hzbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZ2JUb0hzbChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgX3JlZjIgPSBzbGljZWRUb0FycmF5KF9yZWYsIDQpLFxuICAgICAgICAgICAgICAgIHIgPSBfcmVmMlswXSxcbiAgICAgICAgICAgICAgICBnID0gX3JlZjJbMV0sXG4gICAgICAgICAgICAgICAgYiA9IF9yZWYyWzJdLFxuICAgICAgICAgICAgICAgIGEgPSBfcmVmMlszXTtcblxuICAgICAgICAgICAgciAvPSAyNTU7XG4gICAgICAgICAgICBnIC89IDI1NTtcbiAgICAgICAgICAgIGIgLz0gMjU1O1xuXG4gICAgICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYiksXG4gICAgICAgICAgICAgICAgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgICAgICAgICB2YXIgaCA9IHZvaWQgMCxcbiAgICAgICAgICAgICAgICBzID0gdm9pZCAwLFxuICAgICAgICAgICAgICAgIGwgPSAobWF4ICsgbWluKSAvIDI7XG5cbiAgICAgICAgICAgIGlmIChtYXggPT09IG1pbikge1xuICAgICAgICAgICAgICAgIGggPSBzID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGQgPSBtYXggLSBtaW47XG4gICAgICAgICAgICAgICAgcyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBtYXggLSBtaW4pIDogZCAvIChtYXggKyBtaW4pO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKTticmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IChiIC0gcikgLyBkICsgMjticmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IChyIC0gZykgLyBkICsgNDticmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoIC89IDY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBbaCwgcywgbCwgYV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hzbFRvUmdiJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhzbFRvUmdiKF9yZWYzKSB7XG4gICAgICAgICAgICB2YXIgX3JlZjQgPSBzbGljZWRUb0FycmF5KF9yZWYzLCA0KSxcbiAgICAgICAgICAgICAgICBoID0gX3JlZjRbMF0sXG4gICAgICAgICAgICAgICAgcyA9IF9yZWY0WzFdLFxuICAgICAgICAgICAgICAgIGwgPSBfcmVmNFsyXSxcbiAgICAgICAgICAgICAgICBhID0gX3JlZjRbM107XG5cbiAgICAgICAgICAgIHZhciByID0gdm9pZCAwLFxuICAgICAgICAgICAgICAgIGcgPSB2b2lkIDAsXG4gICAgICAgICAgICAgICAgYiA9IHZvaWQgMDtcblxuICAgICAgICAgICAgaWYgKHMgPT09IDApIHtcbiAgICAgICAgICAgICAgICByID0gZyA9IGIgPSBsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaHVlMnJnYiA9IGZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodCA8IDApIHQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgPiAxKSB0IC09IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0IDwgMSAvIDYpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodCA8IDEgLyAyKSByZXR1cm4gcTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgPCAyIC8gMykgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdmFyIHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzLFxuICAgICAgICAgICAgICAgICAgICBwID0gMiAqIGwgLSBxO1xuXG4gICAgICAgICAgICAgICAgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEgLyAzKTtcbiAgICAgICAgICAgICAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcbiAgICAgICAgICAgICAgICBiID0gaHVlMnJnYihwLCBxLCBoIC0gMSAvIDMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcmdiYSA9IFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XS5tYXAoTWF0aC5yb3VuZCk7XG4gICAgICAgICAgICByZ2JhWzNdID0gYTtcblxuICAgICAgICAgICAgcmV0dXJuIHJnYmE7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIENvbG9yO1xufSgpO1xuXG52YXIgRXZlbnRCdWNrZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXZlbnRCdWNrZXQoKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50QnVja2V0KTtcblxuICAgICAgICB0aGlzLl9ldmVudHMgPSBbXTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhFdmVudEJ1Y2tldCwgW3tcbiAgICAgICAga2V5OiAnYWRkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZCh0YXJnZXQsIHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKHRhcmdldCwgdHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBpc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCAhPT0gZS50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZSAmJiB0eXBlICE9PSBlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlciAmJiBoYW5kbGVyICE9PSBlLmhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIEV2ZW50QnVja2V0Ll9kb1JlbW92ZShlLnRhcmdldCwgZS50eXBlLCBlLmhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gIWlzTWF0Y2g7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVzdHJveScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRXZlbnRCdWNrZXQuX2RvUmVtb3ZlKGUudGFyZ2V0LCBlLnR5cGUsIGUuaGFuZGxlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IFtdO1xuICAgICAgICB9XG4gICAgfV0sIFt7XG4gICAgICAgIGtleTogJ19kb1JlbW92ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZG9SZW1vdmUodGFyZ2V0LCB0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIEV2ZW50QnVja2V0O1xufSgpO1xuXG5mdW5jdGlvbiBwYXJzZUhUTUwoaHRtbFN0cmluZykge1xuXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICAgIHJldHVybiBkaXYuZmlyc3RFbGVtZW50Q2hpbGQ7XG59XG5cbmZ1bmN0aW9uIGRyYWdUcmFjayhldmVudEJ1Y2tldCwgYXJlYSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGNsYW1wKHZhbCwgbWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4odmFsLCBtYXgpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdmUoZSwgaW5mbywgc3RhcnRpbmcpIHtcbiAgICAgICAgaWYgKHN0YXJ0aW5nKSB7XG4gICAgICAgICAgICBkcmFnZ2luZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciBib3VuZHMgPSBhcmVhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgdyA9IGJvdW5kcy53aWR0aCxcbiAgICAgICAgICAgIGggPSBib3VuZHMuaGVpZ2h0LFxuICAgICAgICAgICAgeCA9IGluZm8uY2xpZW50WCxcbiAgICAgICAgICAgIHkgPSBpbmZvLmNsaWVudFk7XG5cbiAgICAgICAgdmFyIHJlbFggPSBjbGFtcCh4IC0gYm91bmRzLmxlZnQsIDAsIHcpLFxuICAgICAgICAgICAgcmVsWSA9IGNsYW1wKHkgLSBib3VuZHMudG9wLCAwLCBoKTtcblxuICAgICAgICBjYWxsYmFjayhyZWxYIC8gdywgcmVsWSAvIGgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTW91c2UoZSwgc3RhcnRpbmcpIHtcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGUuYnV0dG9ucyA9PT0gdW5kZWZpbmVkID8gZS53aGljaCA6IGUuYnV0dG9ucztcbiAgICAgICAgaWYgKGJ1dHRvbiA9PT0gMSkge1xuICAgICAgICAgICAgb25Nb3ZlKGUsIGUsIHN0YXJ0aW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblRvdWNoKGUsIHN0YXJ0aW5nKSB7XG4gICAgICAgIGlmIChlLnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBvbk1vdmUoZSwgZS50b3VjaGVzWzBdLCBzdGFydGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRCdWNrZXQuYWRkKGFyZWEsICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBvbk1vdXNlKGUsIHRydWUpO1xuICAgIH0pO1xuICAgIGV2ZW50QnVja2V0LmFkZChhcmVhLCAndG91Y2hzdGFydCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIG9uVG91Y2goZSwgdHJ1ZSk7XG4gICAgfSk7XG4gICAgZXZlbnRCdWNrZXQuYWRkKHdpbmRvdywgJ21vdXNlbW92ZScsIG9uTW91c2UpO1xuICAgIGV2ZW50QnVja2V0LmFkZChhcmVhLCAndG91Y2htb3ZlJywgb25Ub3VjaCk7XG4gICAgZXZlbnRCdWNrZXQuYWRkKHdpbmRvdywgJ21vdXNldXAnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBkcmFnZ2luZyA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGV2ZW50QnVja2V0LmFkZChhcmVhLCAndG91Y2hlbmQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBkcmFnZ2luZyA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGV2ZW50QnVja2V0LmFkZChhcmVhLCAndG91Y2hjYW5jZWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBkcmFnZ2luZyA9IGZhbHNlO1xuICAgIH0pO1xufVxuXG52YXIgQkdfVFJBTlNQID0gJ2xpbmVhci1ncmFkaWVudCg0NWRlZywgbGlnaHRncmV5IDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsIGxpZ2h0Z3JleSA3NSUpIDAgMCAvIDJlbSAyZW0sXFxuICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgbGlnaHRncmV5IDI1JSwgICAgICAgd2hpdGUgMjUlLCAgICAgICB3aGl0ZSA3NSUsIGxpZ2h0Z3JleSA3NSUpIDFlbSAxZW0gLyAyZW0gMmVtJztcbnZhciBIVUVTID0gMzYwO1xuXG52YXIgRVZFTlRfS0VZID0gJ2tleWRvd24nLFxuICAgIEVWRU5UX0NMSUNLX09VVFNJREUgPSAnbW91c2Vkb3duJyxcbiAgICBFVkVOVF9UQUJfTU9WRSA9ICdmb2N1c2luJztcblxuZnVuY3Rpb24gJChzZWxlY3RvciwgY29udGV4dCkge1xuICAgIHJldHVybiAoY29udGV4dCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5cbmZ1bmN0aW9uIHN0b3BFdmVudChlKSB7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbn1cbmZ1bmN0aW9uIG9uS2V5KGJ1Y2tldCwgdGFyZ2V0LCBrZXlzLCBoYW5kbGVyLCBzdG9wKSB7XG4gICAgYnVja2V0LmFkZCh0YXJnZXQsIEVWRU5UX0tFWSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGtleXMuaW5kZXhPZihlLmtleSkgPj0gMCkge1xuICAgICAgICAgICAgaWYgKHN0b3ApIHtcbiAgICAgICAgICAgICAgICBzdG9wRXZlbnQoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGVyKGUpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbnZhciBQaWNrZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGlja2VyKG9wdGlvbnMpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUGlja2VyKTtcblxuXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7XG5cbiAgICAgICAgICAgIHBvcHVwOiAncmlnaHQnLFxuICAgICAgICAgICAgbGF5b3V0OiAnZGVmYXVsdCcsXG4gICAgICAgICAgICBhbHBoYTogdHJ1ZSxcbiAgICAgICAgICAgIGVkaXRvcjogdHJ1ZSxcbiAgICAgICAgICAgIGVkaXRvckZvcm1hdDogJ2hleCcsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b246IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdENvbG9yOiAnIzBjZidcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRCdWNrZXQoKTtcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gbnVsbDtcblxuICAgICAgICB0aGlzLm9uRG9uZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5vbk9wZW4gPSBudWxsO1xuXG4gICAgICAgIHRoaXMub25DbG9zZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFBpY2tlciwgW3tcbiAgICAgICAga2V5OiAnc2V0T3B0aW9ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3M7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHRyYW5zZmVyKHNvdXJjZSwgdGFyZ2V0LCBza2lwS2V5cykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNraXBLZXlzICYmIHNraXBLZXlzLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3B0aW9ucyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3MucGFyZW50ID0gb3B0aW9ucztcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MucGFyZW50ICYmIG9wdGlvbnMucGFyZW50ICYmIHNldHRpbmdzLnBhcmVudCAhPT0gb3B0aW9ucy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzLnJlbW92ZShzZXR0aW5ncy5wYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3B1cEluaXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyYW5zZmVyKG9wdGlvbnMsIHNldHRpbmdzKTtcblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBvcHRpb25zLm9uQ2hhbmdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5vbkRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRvbmUgPSBvcHRpb25zLm9uRG9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMub25PcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25PcGVuID0gb3B0aW9ucy5vbk9wZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm9uQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNsb3NlID0gb3B0aW9ucy5vbkNsb3NlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBjb2wgPSBvcHRpb25zLmNvbG9yIHx8IG9wdGlvbnMuY29sb3VyO1xuICAgICAgICAgICAgICAgIGlmIChjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2V0Q29sb3IoY29sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBzZXR0aW5ncy5wYXJlbnQ7XG4gICAgICAgICAgICBpZiAocGFyZW50ICYmIHNldHRpbmdzLnBvcHVwICYmICF0aGlzLl9wb3B1cEluaXRlZCkge1xuXG4gICAgICAgICAgICAgICAgdmFyIG9wZW5Qcm94eSA9IGZ1bmN0aW9uIG9wZW5Qcm94eShlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5vcGVuSGFuZGxlcihlKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmFkZChwYXJlbnQsICdjbGljaycsIG9wZW5Qcm94eSk7XG5cbiAgICAgICAgICAgICAgICBvbktleSh0aGlzLl9ldmVudHMsIHBhcmVudCwgWycgJywgJ1NwYWNlYmFyJywgJ0VudGVyJ10sIG9wZW5Qcm94eSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9wb3B1cEluaXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMucGFyZW50ICYmICFzZXR0aW5ncy5wb3B1cCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvcGVuSGFuZGxlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuSGFuZGxlcihlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG93KCkpIHtcblxuICAgICAgICAgICAgICAgIGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wYXJlbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcblxuICAgICAgICAgICAgICAgIHZhciB0b0ZvY3VzID0gZSAmJiBlLnR5cGUgPT09IEVWRU5UX0tFWSA/IHRoaXMuX2RvbUVkaXQgOiB0aGlzLmRvbUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b0ZvY3VzLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uT3Blbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uT3Blbih0aGlzLmNvbG91cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjbG9zZUhhbmRsZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VIYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIHZhciBldmVudCA9IGUgJiYgZS50eXBlO1xuICAgICAgICAgICAgdmFyIGRvSGlkZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoIWUpIHtcbiAgICAgICAgICAgICAgICBkb0hpZGUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudCA9PT0gRVZFTlRfQ0xJQ0tfT1VUU0lERSB8fCBldmVudCA9PT0gRVZFTlRfVEFCX01PVkUpIHtcblxuICAgICAgICAgICAgICAgIHZhciBrbm93blRpbWUgPSAodGhpcy5fX2NvbnRhaW5lZEV2ZW50IHx8IDApICsgMTAwO1xuICAgICAgICAgICAgICAgIGlmIChlLnRpbWVTdGFtcCA+IGtub3duVGltZSkge1xuICAgICAgICAgICAgICAgICAgICBkb0hpZGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBzdG9wRXZlbnQoZSk7XG5cbiAgICAgICAgICAgICAgICBkb0hpZGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZG9IaWRlICYmIHRoaXMuaGlkZSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wYXJlbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICcnO1xuXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50ICE9PSBFVkVOVF9DTElDS19PVVRTSURFKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucGFyZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25DbG9zZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2xvc2UodGhpcy5jb2xvdXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbW92ZVBvcHVwJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG1vdmVQb3B1cChvcHRpb25zLCBvcGVuKSB7XG5cbiAgICAgICAgICAgIHRoaXMuY2xvc2VIYW5kbGVyKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuSGFuZGxlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRDb2xvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDb2xvcihjb2xvciwgc2lsZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRDb2xvcihjb2xvciwgeyBzaWxlbnQ6IHNpbGVudCB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3NldENvbG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRDb2xvcihjb2xvciwgZmxhZ3MpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBjb2xvci50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmbGFncyA9IGZsYWdzIHx8IHt9O1xuICAgICAgICAgICAgdmFyIGMgPSB2b2lkIDA7XG4gICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgYyA9IG5ldyBDb2xvcihjb2xvcik7XG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIGlmIChmbGFncy5mYWlsU2lsZW50bHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmFscGhhKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhzbGEgPSBjLmhzbGE7XG4gICAgICAgICAgICAgICAgaHNsYVszXSA9IDE7XG4gICAgICAgICAgICAgICAgYy5oc2xhID0gaHNsYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29sb3VyID0gdGhpcy5jb2xvciA9IGM7XG4gICAgICAgICAgICB0aGlzLl9zZXRIU0xBKG51bGwsIG51bGwsIG51bGwsIG51bGwsIGZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0Q29sb3VyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldENvbG91cihjb2xvdXIsIHNpbGVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRDb2xvcihjb2xvdXIsIHNpbGVudCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Nob3cnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnNldHRpbmdzLnBhcmVudDtcbiAgICAgICAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5kb21FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvZ2dsZWQgPSB0aGlzLl90b2dnbGVET00odHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvZ2dsZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBodG1sID0gdGhpcy5zZXR0aW5ncy50ZW1wbGF0ZSB8fCAnPGRpdiBjbGFzcz1cInBpY2tlcl93cmFwcGVyXCIgdGFiaW5kZXg9XCItMVwiPjxkaXYgY2xhc3M9XCJwaWNrZXJfYXJyb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwicGlja2VyX2h1ZSBwaWNrZXJfc2xpZGVyXCI+PGRpdiBjbGFzcz1cInBpY2tlcl9zZWxlY3RvclwiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJwaWNrZXJfc2xcIj48ZGl2IGNsYXNzPVwicGlja2VyX3NlbGVjdG9yXCI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cInBpY2tlcl9hbHBoYSBwaWNrZXJfc2xpZGVyXCI+PGRpdiBjbGFzcz1cInBpY2tlcl9zZWxlY3RvclwiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJwaWNrZXJfZWRpdG9yXCI+PGlucHV0IGFyaWEtbGFiZWw9XCJUeXBlIGEgY29sb3IgbmFtZSBvciBoZXggdmFsdWVcIi8+PC9kaXY+PGRpdiBjbGFzcz1cInBpY2tlcl9zYW1wbGVcIj48L2Rpdj48ZGl2IGNsYXNzPVwicGlja2VyX2RvbmVcIj48YnV0dG9uPk9rPC9idXR0b24+PC9kaXY+PGRpdiBjbGFzcz1cInBpY2tlcl9jYW5jZWxcIj48YnV0dG9uPkNhbmNlbDwvYnV0dG9uPjwvZGl2PjwvZGl2Pic7XG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IHBhcnNlSFRNTChodG1sKTtcblxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gd3JhcHBlcjtcbiAgICAgICAgICAgIHRoaXMuX2RvbUggPSAkKCcucGlja2VyX2h1ZScsIHdyYXBwZXIpO1xuICAgICAgICAgICAgdGhpcy5fZG9tU0wgPSAkKCcucGlja2VyX3NsJywgd3JhcHBlcik7XG4gICAgICAgICAgICB0aGlzLl9kb21BID0gJCgnLnBpY2tlcl9hbHBoYScsIHdyYXBwZXIpO1xuICAgICAgICAgICAgdGhpcy5fZG9tRWRpdCA9ICQoJy5waWNrZXJfZWRpdG9yIGlucHV0Jywgd3JhcHBlcik7XG4gICAgICAgICAgICB0aGlzLl9kb21TYW1wbGUgPSAkKCcucGlja2VyX3NhbXBsZScsIHdyYXBwZXIpO1xuICAgICAgICAgICAgdGhpcy5fZG9tT2theSA9ICQoJy5waWNrZXJfZG9uZSBidXR0b24nLCB3cmFwcGVyKTtcbiAgICAgICAgICAgIHRoaXMuX2RvbUNhbmNlbCA9ICQoJy5waWNrZXJfY2FuY2VsIGJ1dHRvbicsIHdyYXBwZXIpO1xuXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2xheW91dF8nICsgdGhpcy5zZXR0aW5ncy5sYXlvdXQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmFscGhhKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdub19hbHBoYScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmVkaXRvcikge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbm9fZWRpdG9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuY2FuY2VsQnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdub19jYW5jZWwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lmUG9wdXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5fc2V0UG9zaXRpb24oKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY29sb3VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVUkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0Q29sb3IodGhpcy5zZXR0aW5ncy5kZWZhdWx0Q29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fYmluZEV2ZW50cygpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGlkZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RvZ2dsZURPTShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5kZXN0cm95KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5kb21FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnX2JpbmRFdmVudHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2JpbmRFdmVudHMoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGRvbSA9IHRoaXMuZG9tRWxlbWVudCxcbiAgICAgICAgICAgICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZEV2ZW50KHRhcmdldCwgdHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIGV2ZW50cy5hZGQodGFyZ2V0LCB0eXBlLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRkRXZlbnQoZG9tLCAnY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZHJhZ1RyYWNrKGV2ZW50cywgdGhpcy5fZG9tSCwgZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC5fc2V0SFNMQSh4KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkcmFnVHJhY2soZXZlbnRzLCB0aGlzLl9kb21TTCwgZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC5fc2V0SFNMQShudWxsLCB4LCAxIC0geSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYWxwaGEpIHtcbiAgICAgICAgICAgICAgICBkcmFnVHJhY2soZXZlbnRzLCB0aGlzLl9kb21BLCBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC5fc2V0SFNMQShudWxsLCBudWxsLCBudWxsLCAxIC0geSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBlZGl0SW5wdXQgPSB0aGlzLl9kb21FZGl0O1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFkZEV2ZW50KGVkaXRJbnB1dCwgJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5fc2V0Q29sb3IodGhpcy52YWx1ZSwgeyBmcm9tRWRpdG9yOiB0cnVlLCBmYWlsU2lsZW50bHk6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBhZGRFdmVudChlZGl0SW5wdXQsICdmb2N1cycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LnNlbGVjdGlvblN0YXJ0ID09PSBpbnB1dC5zZWxlY3Rpb25FbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2lmUG9wdXAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgdmFyIHBvcHVwQ2xvc2VQcm94eSA9IGZ1bmN0aW9uIHBvcHVwQ2xvc2VQcm94eShlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIuY2xvc2VIYW5kbGVyKGUpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBhZGRFdmVudCh3aW5kb3csIEVWRU5UX0NMSUNLX09VVFNJREUsIHBvcHVwQ2xvc2VQcm94eSk7XG4gICAgICAgICAgICAgICAgYWRkRXZlbnQod2luZG93LCBFVkVOVF9UQUJfTU9WRSwgcG9wdXBDbG9zZVByb3h5KTtcbiAgICAgICAgICAgICAgICBvbktleShldmVudHMsIGRvbSwgWydFc2MnLCAnRXNjYXBlJ10sIHBvcHVwQ2xvc2VQcm94eSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgdGltZUtlZXBlciA9IGZ1bmN0aW9uIHRpbWVLZWVwZXIoZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIuX19jb250YWluZWRFdmVudCA9IGUudGltZVN0YW1wO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYWRkRXZlbnQoZG9tLCBFVkVOVF9DTElDS19PVVRTSURFLCB0aW1lS2VlcGVyKTtcblxuICAgICAgICAgICAgICAgIGFkZEV2ZW50KGRvbSwgRVZFTlRfVEFCX01PVkUsIHRpbWVLZWVwZXIpO1xuXG4gICAgICAgICAgICAgICAgYWRkRXZlbnQoX3RoaXMyLl9kb21DYW5jZWwsICdjbGljaycsIHBvcHVwQ2xvc2VQcm94eSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIG9uRG9uZVByb3h5ID0gZnVuY3Rpb24gb25Eb25lUHJveHkoZSkge1xuICAgICAgICAgICAgICAgIF90aGlzMi5faWZQb3B1cChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIuY2xvc2VIYW5kbGVyKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpczIub25Eb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMi5vbkRvbmUoX3RoaXMyLmNvbG91cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFkZEV2ZW50KHRoaXMuX2RvbU9rYXksICdjbGljaycsIG9uRG9uZVByb3h5KTtcbiAgICAgICAgICAgIG9uS2V5KGV2ZW50cywgZG9tLCBbJ0VudGVyJ10sIG9uRG9uZVByb3h5KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3NldFBvc2l0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRQb3NpdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnNldHRpbmdzLnBhcmVudCxcbiAgICAgICAgICAgICAgICBlbG0gPSB0aGlzLmRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnQgIT09IGVsbS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsbSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2lmUG9wdXAoZnVuY3Rpb24gKHBvcHVwKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBjc3NDbGFzcyA9IHBvcHVwID09PSB0cnVlID8gJ3BvcHVwX3JpZ2h0JyA6ICdwb3B1cF8nICsgcG9wdXA7XG5cbiAgICAgICAgICAgICAgICBbJ3BvcHVwX3RvcCcsICdwb3B1cF9ib3R0b20nLCAncG9wdXBfbGVmdCcsICdwb3B1cF9yaWdodCddLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PT0gY3NzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QuYWRkKGMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5yZW1vdmUoYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdfc2V0SFNMQScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0SFNMQShoLCBzLCBsLCBhLCBmbGFncykge1xuICAgICAgICAgICAgZmxhZ3MgPSBmbGFncyB8fCB7fTtcblxuICAgICAgICAgICAgdmFyIGNvbCA9IHRoaXMuY29sb3VyLFxuICAgICAgICAgICAgICAgIGhzbGEgPSBjb2wuaHNsYTtcblxuICAgICAgICAgICAgW2gsIHMsIGwsIGFdLmZvckVhY2goZnVuY3Rpb24gKHgsIGkpIHtcbiAgICAgICAgICAgICAgICBpZiAoeCB8fCB4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGhzbGFbaV0gPSB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29sLmhzbGEgPSBoc2xhO1xuXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVVSShmbGFncyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlICYmICFmbGFncy5zaWxlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGNvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ191cGRhdGVVSScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlVUkoZmxhZ3MpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kb21FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmxhZ3MgPSBmbGFncyB8fCB7fTtcblxuICAgICAgICAgICAgdmFyIGNvbCA9IHRoaXMuY29sb3VyLFxuICAgICAgICAgICAgICAgIGhzbCA9IGNvbC5oc2xhLFxuICAgICAgICAgICAgICAgIGNzc0h1ZSA9ICdoc2woJyArIGhzbFswXSAqIEhVRVMgKyAnLCAxMDAlLCA1MCUpJyxcbiAgICAgICAgICAgICAgICBjc3NIU0wgPSBjb2wuaHNsU3RyaW5nLFxuICAgICAgICAgICAgICAgIGNzc0hTTEEgPSBjb2wuaHNsYVN0cmluZztcblxuICAgICAgICAgICAgdmFyIHVpSCA9IHRoaXMuX2RvbUgsXG4gICAgICAgICAgICAgICAgdWlTTCA9IHRoaXMuX2RvbVNMLFxuICAgICAgICAgICAgICAgIHVpQSA9IHRoaXMuX2RvbUEsXG4gICAgICAgICAgICAgICAgdGh1bWJIID0gJCgnLnBpY2tlcl9zZWxlY3RvcicsIHVpSCksXG4gICAgICAgICAgICAgICAgdGh1bWJTTCA9ICQoJy5waWNrZXJfc2VsZWN0b3InLCB1aVNMKSxcbiAgICAgICAgICAgICAgICB0aHVtYkEgPSAkKCcucGlja2VyX3NlbGVjdG9yJywgdWlBKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gcG9zWChwYXJlbnQsIGNoaWxkLCByZWxYKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUubGVmdCA9IHJlbFggKiAxMDAgKyAnJSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBwb3NZKHBhcmVudCwgY2hpbGQsIHJlbFkpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5zdHlsZS50b3AgPSByZWxZICogMTAwICsgJyUnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb3NYKHVpSCwgdGh1bWJILCBoc2xbMF0pO1xuXG4gICAgICAgICAgICB0aGlzLl9kb21TTC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLl9kb21ILnN0eWxlLmNvbG9yID0gY3NzSHVlO1xuXG4gICAgICAgICAgICBwb3NYKHVpU0wsIHRodW1iU0wsIGhzbFsxXSk7XG4gICAgICAgICAgICBwb3NZKHVpU0wsIHRodW1iU0wsIDEgLSBoc2xbMl0pO1xuXG4gICAgICAgICAgICB1aVNMLnN0eWxlLmNvbG9yID0gY3NzSFNMO1xuXG4gICAgICAgICAgICBwb3NZKHVpQSwgdGh1bWJBLCAxIC0gaHNsWzNdKTtcblxuICAgICAgICAgICAgdmFyIG9wYXF1ZSA9IGNzc0hTTCxcbiAgICAgICAgICAgICAgICB0cmFuc3AgPSBvcGFxdWUucmVwbGFjZSgnaHNsJywgJ2hzbGEnKS5yZXBsYWNlKCcpJywgJywgMCknKSxcbiAgICAgICAgICAgICAgICBiZyA9ICdsaW5lYXItZ3JhZGllbnQoJyArIFtvcGFxdWUsIHRyYW5zcF0gKyAnKSc7XG5cbiAgICAgICAgICAgIHRoaXMuX2RvbUEuc3R5bGUuYmFja2dyb3VuZCA9IGJnICsgJywgJyArIEJHX1RSQU5TUDtcblxuICAgICAgICAgICAgaWYgKCFmbGFncy5mcm9tRWRpdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1hdCA9IHRoaXMuc2V0dGluZ3MuZWRpdG9yRm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICBhbHBoYSA9IHRoaXMuc2V0dGluZ3MuYWxwaGE7XG5cbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmdiJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gY29sLnByaW50UkdCKGFscGhhKTticmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaHNsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gY29sLnByaW50SFNMKGFscGhhKTticmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gY29sLnByaW50SGV4KGFscGhhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fZG9tRWRpdC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9kb21TYW1wbGUuc3R5bGUuY29sb3IgPSBjc3NIU0xBO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdfaWZQb3B1cCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaWZQb3B1cChhY3Rpb25JZiwgYWN0aW9uRWxzZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MucGFyZW50ICYmIHRoaXMuc2V0dGluZ3MucG9wdXApIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25JZiAmJiBhY3Rpb25JZih0aGlzLnNldHRpbmdzLnBvcHVwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uRWxzZSAmJiBhY3Rpb25FbHNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ190b2dnbGVET00nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3RvZ2dsZURPTSh0b1Zpc2libGUpIHtcbiAgICAgICAgICAgIHZhciBkb20gPSB0aGlzLmRvbUVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoIWRvbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRpc3BsYXlTdHlsZSA9IHRvVmlzaWJsZSA/ICcnIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHRvZ2dsZSA9IGRvbS5zdHlsZS5kaXNwbGF5ICE9PSBkaXNwbGF5U3R5bGU7XG5cbiAgICAgICAgICAgIGlmICh0b2dnbGUpIHtcbiAgICAgICAgICAgICAgICBkb20uc3R5bGUuZGlzcGxheSA9IGRpc3BsYXlTdHlsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b2dnbGU7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFBpY2tlcjtcbn0oKTtcblxue1xuICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSAnLnBpY2tlcl93cmFwcGVyLm5vX2FscGhhIC5waWNrZXJfYWxwaGF7ZGlzcGxheTpub25lfS5waWNrZXJfd3JhcHBlci5ub19lZGl0b3IgLnBpY2tlcl9lZGl0b3J7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDotMTtvcGFjaXR5OjB9LnBpY2tlcl93cmFwcGVyLm5vX2NhbmNlbCAucGlja2VyX2NhbmNlbHtkaXNwbGF5Om5vbmV9LmxheW91dF9kZWZhdWx0LnBpY2tlcl93cmFwcGVye2Rpc3BsYXk6ZmxleDtmbGV4LWZsb3c6cm93IHdyYXA7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6c3RyZXRjaDtmb250LXNpemU6MTBweDt3aWR0aDoyNWVtO3BhZGRpbmc6LjVlbX0ubGF5b3V0X2RlZmF1bHQucGlja2VyX3dyYXBwZXIgaW5wdXQsLmxheW91dF9kZWZhdWx0LnBpY2tlcl93cmFwcGVyIGJ1dHRvbntmb250LXNpemU6MXJlbX0ubGF5b3V0X2RlZmF1bHQucGlja2VyX3dyYXBwZXI+KnttYXJnaW46LjVlbX0ubGF5b3V0X2RlZmF1bHQucGlja2VyX3dyYXBwZXI6OmJlZm9yZXtjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDowO29yZGVyOjF9LmxheW91dF9kZWZhdWx0IC5waWNrZXJfc2xpZGVyLC5sYXlvdXRfZGVmYXVsdCAucGlja2VyX3NlbGVjdG9ye3BhZGRpbmc6MWVtfS5sYXlvdXRfZGVmYXVsdCAucGlja2VyX2h1ZXt3aWR0aDoxMDAlfS5sYXlvdXRfZGVmYXVsdCAucGlja2VyX3Nse2ZsZXg6MSAxIGF1dG99LmxheW91dF9kZWZhdWx0IC5waWNrZXJfc2w6OmJlZm9yZXtjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jaztwYWRkaW5nLWJvdHRvbToxMDAlfS5sYXlvdXRfZGVmYXVsdCAucGlja2VyX2VkaXRvcntvcmRlcjoxO3dpZHRoOjYuNXJlbX0ubGF5b3V0X2RlZmF1bHQgLnBpY2tlcl9lZGl0b3IgaW5wdXR7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0ubGF5b3V0X2RlZmF1bHQgLnBpY2tlcl9zYW1wbGV7b3JkZXI6MTtmbGV4OjEgMSBhdXRvfS5sYXlvdXRfZGVmYXVsdCAucGlja2VyX2RvbmUsLmxheW91dF9kZWZhdWx0IC5waWNrZXJfY2FuY2Vse29yZGVyOjF9LnBpY2tlcl93cmFwcGVye2JveC1zaXppbmc6Ym9yZGVyLWJveDtiYWNrZ3JvdW5kOiNmMmYyZjI7Ym94LXNoYWRvdzowIDAgMCAxcHggc2lsdmVyO2N1cnNvcjpkZWZhdWx0O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Y29sb3I6IzQ0NDtwb2ludGVyLWV2ZW50czphdXRvfS5waWNrZXJfd3JhcHBlcjpmb2N1c3tvdXRsaW5lOm5vbmV9LnBpY2tlcl93cmFwcGVyIGJ1dHRvbiwucGlja2VyX3dyYXBwZXIgaW5wdXR7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlcjpub25lO2JveC1zaGFkb3c6MCAwIDAgMXB4IHNpbHZlcjtvdXRsaW5lOm5vbmV9LnBpY2tlcl93cmFwcGVyIGJ1dHRvbjpmb2N1cywucGlja2VyX3dyYXBwZXIgYnV0dG9uOmFjdGl2ZSwucGlja2VyX3dyYXBwZXIgaW5wdXQ6Zm9jdXMsLnBpY2tlcl93cmFwcGVyIGlucHV0OmFjdGl2ZXtib3gtc2hhZG93OjAgMCAycHggMXB4ICMxZTkwZmZ9LnBpY2tlcl93cmFwcGVyIGJ1dHRvbntwYWRkaW5nOi40ZW0gLjZlbTtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMGRlZywgZ2FpbnNib3JvLCB0cmFuc3BhcmVudCl9LnBpY2tlcl93cmFwcGVyIGJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMGRlZywgdHJhbnNwYXJlbnQsIGdhaW5zYm9ybyl9LnBpY2tlcl93cmFwcGVyIGJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnBpY2tlcl9zZWxlY3Rvcntwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjE7ZGlzcGxheTpibG9jazstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtib3JkZXI6MnB4IHNvbGlkICNmZmY7Ym9yZGVyLXJhZGl1czoxMDAlO2JveC1zaGFkb3c6MCAwIDNweCAxcHggIzY3YjlmZjtiYWNrZ3JvdW5kOmN1cnJlbnRDb2xvcjtjdXJzb3I6cG9pbnRlcn0ucGlja2VyX3NsaWRlciAucGlja2VyX3NlbGVjdG9ye2JvcmRlci1yYWRpdXM6MnB4fS5waWNrZXJfaHVle3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDkwZGVnLCByZWQsIHllbGxvdywgbGltZSwgY3lhbiwgYmx1ZSwgbWFnZW50YSwgcmVkKTtib3gtc2hhZG93OjAgMCAwIDFweCBzaWx2ZXJ9LnBpY2tlcl9zbHtwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2hhZG93OjAgMCAwIDFweCBzaWx2ZXI7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB3aGl0ZSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA1MCUpLGxpbmVhci1ncmFkaWVudCgwZGVnLCBibGFjaywgcmdiYSgwLCAwLCAwLCAwKSA1MCUpLGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzgwODA4MCwgcmdiYSgxMjgsIDEyOCwgMTI4LCAwKSl9LnBpY2tlcl9hbHBoYSwucGlja2VyX3NhbXBsZXtwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg0NWRlZywgbGlnaHRncmV5IDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsIGxpZ2h0Z3JleSA3NSUpIDAgMC8yZW0gMmVtLGxpbmVhci1ncmFkaWVudCg0NWRlZywgbGlnaHRncmV5IDI1JSwgd2hpdGUgMjUlLCB3aGl0ZSA3NSUsIGxpZ2h0Z3JleSA3NSUpIDFlbSAxZW0vMmVtIDJlbTtib3gtc2hhZG93OjAgMCAwIDFweCBzaWx2ZXJ9LnBpY2tlcl9hbHBoYSAucGlja2VyX3NlbGVjdG9yLC5waWNrZXJfc2FtcGxlIC5waWNrZXJfc2VsZWN0b3J7YmFja2dyb3VuZDpub25lfS5waWNrZXJfZWRpdG9yIGlucHV0e2ZvbnQtZmFtaWx5Om1vbm9zcGFjZTtwYWRkaW5nOi4yZW0gLjRlbX0ucGlja2VyX3NhbXBsZTo6YmVmb3Jle2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDpjdXJyZW50Q29sb3J9LnBpY2tlcl9hcnJvd3twb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Oi0xfS5waWNrZXJfd3JhcHBlci5wb3B1cHtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjI7bWFyZ2luOjEuNWVtfS5waWNrZXJfd3JhcHBlci5wb3B1cCwucGlja2VyX3dyYXBwZXIucG9wdXAgLnBpY2tlcl9hcnJvdzo6YmVmb3JlLC5waWNrZXJfd3JhcHBlci5wb3B1cCAucGlja2VyX2Fycm93OjphZnRlcntiYWNrZ3JvdW5kOiNmMmYyZjI7Ym94LXNoYWRvdzowIDAgMTBweCAxcHggcmdiYSgwLDAsMCwuNCl9LnBpY2tlcl93cmFwcGVyLnBvcHVwIC5waWNrZXJfYXJyb3d7d2lkdGg6M2VtO2hlaWdodDozZW07bWFyZ2luOjB9LnBpY2tlcl93cmFwcGVyLnBvcHVwIC5waWNrZXJfYXJyb3c6OmJlZm9yZSwucGlja2VyX3dyYXBwZXIucG9wdXAgLnBpY2tlcl9hcnJvdzo6YWZ0ZXJ7Y29udGVudDpcIlwiO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3otaW5kZXg6LTk5fS5waWNrZXJfd3JhcHBlci5wb3B1cCAucGlja2VyX2Fycm93OjpiZWZvcmV7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDQ1ZGVnKTt0cmFuc2Zvcm06c2tldyg0NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgMTAwJTt0cmFuc2Zvcm0tb3JpZ2luOjAgMTAwJX0ucGlja2VyX3dyYXBwZXIucG9wdXAgLnBpY2tlcl9hcnJvdzo6YWZ0ZXJ7d2lkdGg6MTUwJTtoZWlnaHQ6MTUwJTtib3gtc2hhZG93Om5vbmV9LnBvcHVwLnBvcHVwX3RvcHtib3R0b206MTAwJTtsZWZ0OjB9LnBvcHVwLnBvcHVwX3RvcCAucGlja2VyX2Fycm93e2JvdHRvbTowO2xlZnQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC05MGRlZyl9LnBvcHVwLnBvcHVwX2JvdHRvbXt0b3A6MTAwJTtsZWZ0OjB9LnBvcHVwLnBvcHVwX2JvdHRvbSAucGlja2VyX2Fycm93e3RvcDowO2xlZnQ6MDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpIHNjYWxlKDEsIC0xKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKSBzY2FsZSgxLCAtMSl9LnBvcHVwLnBvcHVwX2xlZnR7dG9wOjA7cmlnaHQ6MTAwJX0ucG9wdXAucG9wdXBfbGVmdCAucGlja2VyX2Fycm93e3RvcDowO3JpZ2h0OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLTEsIDEpO3RyYW5zZm9ybTpzY2FsZSgtMSwgMSl9LnBvcHVwLnBvcHVwX3JpZ2h0e3RvcDowO2xlZnQ6MTAwJX0ucG9wdXAucG9wdXBfcmlnaHQgLnBpY2tlcl9hcnJvd3t0b3A6MDtsZWZ0OjB9JztcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gICAgUGlja2VyLlN0eWxlRWxlbWVudCA9IHN0eWxlO1xufVxuXG5leHBvcnQgeyBQaWNrZXIgYXMgZGVmYXVsdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zY3NzL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuLyoqXG4gKiBRdWVyeSBzZWxlY3RvciBzdHJpbmdcbiAqIGZvciB0aGUgY2FudmFzIHRhcmdldFxuICovXG5jb25zdCB0YXJnZXQgPSBgIyR7Q29uc3RhbnRzLkNBTlZBU19UQVJHRVR9YDtcbi8qKlxuICogQXBwIGVudHJ5IHBvaW50LiBTdGFydCBoZXJlLlxuICovXG4oKCkgPT4ge1xuICAgIC8vIFRoaXMgaXMgb3VyIHRhcmdldCBjYW52YXNcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gICAgaWYgKGNhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgIC8vIFVzaW5nIHRoZSAyRCBjb250ZXh0XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgaWYgKGNvbnRleHQgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gQ3JlYXRlIGFwcGxpY2F0aW9uIG9iamVjdC5cbiAgICAgICAgY29uc3QgYXBwID0gbmV3IEFwcChjYW52YXMsIGNvbnRleHQpO1xuICAgICAgICAvLyBEZWZpbmUgYW5pbWF0aW9uIGxvb3AgYW5kIHByb2Nlc3MuXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkxvb3AgPSAodGltZXN0YW1wKSA9PiB7XG4gICAgICAgICAgICAvLyBFdmVyeXRoaW5nIGdldHMgZG9uZSBoZXJlLlxuICAgICAgICAgICAgYXBwLnByb2Nlc3ModGltZXN0YW1wKTtcbiAgICAgICAgICAgIC8vIEtlZXAgcmVxdWVzdGluZyBuZXcgZnJhbWVzXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkxvb3ApO1xuICAgICAgICB9O1xuICAgICAgICAvLyBCb290c3RyYXAgYW55IHNldHVwIHN0dWZmXG4gICAgICAgIGFwcC5zZXRVcCgpO1xuICAgICAgICAvLyBTdGFydCB0aGUgcmVuZGVybG9vcC5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb25Mb29wKTtcbiAgICB9XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9