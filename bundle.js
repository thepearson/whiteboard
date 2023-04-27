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
        this.fill_color = new _util_color__WEBPACK_IMPORTED_MODULE_3__["default"](228, 228, 228, 1);
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
        var _a, _b, _c;
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
                //if (!(this.drawing?.tool as Select).selected_vector) {
                this.entityTargeted = pointerOverEntity;
                //}
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
            if (!((_a = this.drawing) === null || _a === void 0 ? void 0 : _a.tool).selected_vector) {
                ((_b = this.drawing) === null || _b === void 0 ? void 0 : _b.tool).selected_vector = selected_vector;
            }
        }
        else {
            ((_c = this.drawing) === null || _c === void 0 ? void 0 : _c.tool).selected_vector = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsc0JBQXNC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LENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsbUJBQW1COztBQUVuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0I7QUFDL0I7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxxRkFBcUYsRUFBRSw0RUFBNEUsRUFBRTs7QUFFckssMENBQTBDLEVBQUU7QUFDNUMsb0RBQW9EO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0NBQW9DLGdCQUFnQjtBQUNwRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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c3MiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcz8zMjFmIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9kcmF3aW5nLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvZW50aXRpZXMvZW50aXR5LnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvZW50aXRpZXMvZnJlZWhhbmQudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9lbnRpdGllcy9udWxsLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvZW50aXRpZXMvcmVjdC50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2h1ZC9jb2xvcl9waWNrZXIudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy9odWQvaHVkLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvaHVkL2h1ZF9pdGVtLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvaHVkL2xheWVycy50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL2h1ZC90b29sYmFyLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdG9vbHMvbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy90b29scy9tYXJrZXIudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy90b29scy9yZWN0YW5nbGUudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy90b29scy9zZWxlY3QudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy90b29scy9zaGFwZS50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL3Rvb2xzL3Rvb2wudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy91dGlsL2NpcmNsZS50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vc3JjL3V0aWwvY29sb3IudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy91dGlsL2d1aWRlLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdXRpbC9rZXlfZXZlbnRzLnRzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvdXRpbC9ub3JtYWxpemUudHMiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC8uL3NyYy91dGlsL3BvaW50cy50cyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9BYnN0cmFjdFZlY3Rvci5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9BcnJheVZlY3Rvci5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9GbG9hdDMyVmVjdG9yLmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvdmVjdG9yMmQvc3JjL1ZlYzJELmpzIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9ub2RlX21vZHVsZXMvdmVjdG9yMmQvc3JjL1ZlY3Rvci5qcyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtcGlja2VyL2Rpc3QvdmFuaWxsYS1waWNrZXIubWpzIiwid2VicGFjazovL3doaXRlYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93aGl0ZWJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2hpdGVib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3doaXRlYm9hcmQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3doaXRlYm9hcmQvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2RyYXdpbmctY2FudmFzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbiNwYWxldHRlIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuI3BhbGV0dGUgLmNvbG9yIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDEwcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIpO1xcbn1cXG4jcGFsZXR0ZSAuY29sb3I6aG92ZXIge1xcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuI3BhbGV0dGUgLmNvbG9yLnNlbGVjdGVkIHtcXG4gIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDIwNCwgMjA0LCAyNTUsIDAuNyk7XFxufVxcblxcbiNsYXllcnMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0b3A6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG1hcmdpbjogNDBweDtcXG59XFxuI2xheWVycyAubGF5ZXIge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xcbiAgYm9yZGVyLXJhZGl1czogMiU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jbGF5ZXJzIC5hY3RpdmUge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMTI4LCAwKTtcXG59XFxuI2xheWVycyAubGF5ZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN0b29scyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxcmVtO1xcbiAgdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiN0b29scyBidXR0b24ge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4jaGVscC52aXNpYmxlIHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjZGNkY2Q7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jaGVscC52aXNpYmxlIC5oZWFkZXIge1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiNoZWxwLnZpc2libGUgLmhlYWRlciBidXR0b24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDFyZW07XFxufVxcbiNoZWxwLnZpc2libGUgLmhlYWRlciBoMiB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcbiNoZWxwLnZpc2libGUgaDMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG4jaGVscC52aXNpYmxlIC5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jaGVscC52aXNpYmxlIC5ib2R5IC5sZWZ0IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbn1cXG4jaGVscC52aXNpYmxlIC5ib2R5IC5sZWZ0IHAge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuI2hlbHAudmlzaWJsZSAuYm9keSAucmlnaHQge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuI2hlbHAudmlzaWJsZSAuYm9keSAucmlnaHQgZGwuaW5saW5lLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBzZXQgdGhlIGNvbnRhaW5lciB3aWR0aCovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuI2hlbHAudmlzaWJsZSAuYm9keSAucmlnaHQgZGwuaW5saW5lLWZsZXggZHQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZmxleDogMCAwIDIwJTtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuI2hlbHAudmlzaWJsZSAuYm9keSAucmlnaHQgZGwuaW5saW5lLWZsZXggZGQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmbGV4OiAwIDAgODAlO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLHNCQUFBO0FBRkY7O0FBS0E7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQUZGO0FBR0U7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQURKO0FBRUk7RUFDRSwyQ0FBQTtBQUFOO0FBRUk7RUFDRSwyQ0FBQTtBQUFOOztBQUtBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBRUEsWUFBQTtBQUhGO0FBS0U7RUFDRSxvQkFBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUhKO0FBTUU7RUFDRSxrQ0FBQTtBQUpKO0FBT0U7RUFDRSxvQ0FBQTtBQUxKOztBQVNBO0VBQ0UsYUFBQTtBQU5GOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQU5GO0FBT0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBTEo7O0FBU0E7RUFDRSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBTkY7QUFRRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQU5KO0FBUUk7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQU5OO0FBU0k7RUFDRSxlQUFBO0FBUE47QUFXRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBVEo7QUFZRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFWSjtBQVlJO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBVk47QUFXTTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFUUjtBQWFJO0VBQ0UsVUFBQTtBQVhOO0FBYUk7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQVhOO0FBY0k7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBWk47QUFlSTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQWJOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIFRoaXMgaXMgYWxsIGhvcnJpYmxlLi4uXFxuLy8gYnV0IGl0IHdvcmtzLlxcblxcbioge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luOjA7XFxuICBwYWRkaW5nOjA7XFxufVxcblxcbmJvZHkge1xcbiAgb3ZlcmZsb3c6aGlkZGVuO1xcbn1cXG5cXG4jZHJhd2luZy1jYW52YXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuI3BhbGV0dGUge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgLmNvbG9yIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMik7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIH1cXG4gICAgJi5zZWxlY3RlZCB7XFxuICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYmEoMjA0LCAyMDQsIDI1NSwgMC43KTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4jbGF5ZXJzIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdG9wOiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFxuICBtYXJnaW46IDQwcHg7XFxuXFxuICAubGF5ZXIge1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDEyOCwgMCk7XFxuICB9XFxuXFxuICAubGF5ZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEuMCk7XFxuICB9XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Rvb2xzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDFyZW07XFxuICB0b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIH1cXG59XFxuXFxuI2hlbHAudmlzaWJsZSB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjY2RjZGNkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIC5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgfVxcbiAgXFxuICAgIGgyIHtcXG4gICAgICBmb250LXNpemU6IDNyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIGgzIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICB9XFxuXFxuICAuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgLmxlZnQge1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gICAgICBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5yaWdodCB7XFxuICAgICAgd2lkdGg6IDUwJTtcXG5cXG4gICAgZGwuaW5saW5lLWZsZXgge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1mbG93OiByb3c7XFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIC8qIHNldCB0aGUgY29udGFpbmVyIHdpZHRoKi9cXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgfVxcblxcbiAgICBkbC5pbmxpbmUtZmxleCBkdCB7XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OjkwMDtcXG4gICAgICBmbGV4OiAwIDAgMjAlO1xcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgZGwuaW5saW5lLWZsZXggZGQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIGZsZXg6IDAgMCA4MCU7XFxuICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcbiAgICB9XFxuICB9XFxuICAgIFxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgRHJhd2luZyBmcm9tIFwiLi9kcmF3aW5nXCI7XG4vKipcbiAqIFRoZSB0b3AtbGV2ZWwgQXBwIGNsYXNzLCBtYW5hZ2VzIHNldHVwLCBiYXNlIGxvb3AsIGFuZCBldmVudHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQHBhcmFtICAge0hUTUxDYW52YXNFbGVtZW50fSAgICAgICAgIGNhbnZhcyAgIFRoaXMgaXMgdGhlIHRhcmdldCBjYW52YXMgZm9yIG91ciBnYW1lXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIFRoaXMgaXMgdGhlIGNvbnRldCBmb3IgdGhlIGNhbnZhc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY29udGV4dCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgZm9yIHRoZSBjYW52YXMub25LZXlEb3duIGV2ZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmtleV9kb3duID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IGZvciB0aGUgY2FudmFzLm9uTW91c2VNb3ZlIGV2ZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdXNlX21vdmUgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgZm9yIHRoZSBjYW52YXMub25Nb3VzZU1vdmUgZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2Vfd2hlZWwgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgZm9yIHRoZSBjYW52YXMub25Nb3VzZURvd24gZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2VfZG93biA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBmb3IgdGhlIGNhbnZhcy5vbk1vdXNlVXAgZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2VfdXAgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRHJhd2luZyBjYW52YXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2FudmFzID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRpbWVzdGFtcCB3aGVuIGxhc3QgZnJhbWUgd2FzIHByb2Nlc3NlZFxuICAgICAgICAgKiB1c2VkIGZvciBjYWxjdWxhdGluZyB0aGUgZGVsdGFUaW1lIGFuZFxuICAgICAgICAgKiBGUFMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9sZFRpbWVzdGFtcCA9IDAuMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhvbGRlciBmb3IgRlBTLCB1c2VmdWwgd2hlbiBuZWVkaW5nIHRvIHJlbmRlclxuICAgICAgICAgKiB0aGlzIHdpdGhpbiB0aGUgZ2FtZSBlbnZpcm9ubWVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mcHMgPSAwO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgLy8gU2V0IGNhbnZhcyBkaW1lbnNpb25zLCBUT0RPOiBtYWtlIHRoaXMgZHluYW1pYywgXG4gICAgICAgIC8vIGN1cnJlbnRseSBpdCdzIG9ubHkgc2V0IHdoZW4gdGhlIHBhZ2UgbG9hZHMuXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCb290c3RyYXAgZnVuY3Rpb24sIHVzZWQgZm9yIHNldHRpbmdcbiAgICAgKiBldmVyeXRoaW5nIHVwIHByaW9yIHRvIGtpY2tpbmcgb2ZmIHRoZSByZW5kZXJMb29wXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXRVcCgpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGRyYXdpbmdcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdpbmcgPSBuZXcgRHJhd2luZygpO1xuICAgICAgICAgICAgdGhpcy5kcmF3aW5nLnNldHVwKHRoaXMuY2FudmFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYW55IHBlcmlvZGljIHRpbWVycy5cbiAgICAgKiBXZSBjYW4gdXNlIHRoaXMgdG8gdHJpZ2dlciBhbnkgdGltZSBiYXNlZCBldmVudHMuIGllIGV2ZXJ5IDUgc2Vjb25kcyBkbyBYXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7RE9NSGlnaFJlc1RpbWVTdGFtcH0gIHRpbWVzdGFtcCAgRVBPQyBNaWxsaXNlY29uZHNcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHByb2Nlc3NUaW1lcnModGltZXN0YW1wKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVudHJ5IHBvaW50IGZvciBhbGwgdGhpbmdzLlxuICAgICAqXG4gICAgICogUHJvY2Vzc2VzIHRpbWVyc1xuICAgICAqIFVwZGF0ZXMgYWxsIGFwcGxpY2F0aW9uIGVudGl0aWVzLFxuICAgICAqIENhc2NhZGVzIHJlbmRlciB0byBlbnRpdGllcy5cbiAgICAgKiBDYWxsZWQgZXZlcnkgZnJhbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtET01IaWdoUmVzVGltZVN0YW1wfSAgdGltZXN0YW1wICBFUE9DIG1pbGxpc2Vjb25kc1xuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2Vzcyh0aW1lc3RhbXApIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgLy8gU2hvcnQgY2lyY3V0LCB0aGVzZSBNVVNUIGV4aXN0XG4gICAgICAgIGlmICh0aGlzLmNhbnZhcyA9PSBudWxsIHx8IHRoaXMuY29udGV4dCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBQcm9jZXNzIGFueSB0aW1lcnNcbiAgICAgICAgdGhpcy5wcm9jZXNzVGltZXJzKHRpbWVzdGFtcCk7XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIHNlY29uZHMgcGFzc2VkIHNpbmNlIHRoZSBsYXN0IGZyYW1lXG4gICAgICAgIGNvbnN0IGR0ID0gdGltZXN0YW1wIC0gdGhpcy5vbGRUaW1lc3RhbXA7XG4gICAgICAgIC8vIFVwZGF0ZSB0aW1lc3RhbXAgZm9yIG5leHQgcHJvY2VzcyBmcmFtZVxuICAgICAgICB0aGlzLm9sZFRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICAgICAgLy8gVHJpZ2dlciBXb3JsZCBjYWxjc1xuICAgICAgICAvLyBUT0RPOiBhc3luYz8gUGVyZm9ybWFuY2UgaW1wcm92bWVudCBhdCBhIGxhdGVyIGRhdGUuXG4gICAgICAgIChfYSA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByb2Nlc3MoZHQsIHRpbWVzdGFtcCk7XG4gICAgICAgIC8vIFJlbmRlciB0aGluZ3NcbiAgICAgICAgKF9iID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucmVuZGVyKHRoaXMuY2FudmFzLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBMQVlFUl9DUkVBVEVfS0VZUyA9IDA7XG5leHBvcnQgY29uc3QgQ29uc3RhbnRzID0ge1xuICAgIFBBTExFVFRFX1NJWkU6IDYwLFxuICAgIFRPT0xfU1BBQ0lORzogMjAsXG4gICAgQ0FOVkFTX1NJWkU6IHtcbiAgICAgICAgd2lkdGg6ICh3aW5kb3cpID8gd2luZG93LmlubmVyV2lkdGggOiAxOTgwLFxuICAgICAgICBoZWlnaHQ6ICh3aW5kb3cpID8gd2luZG93LmlubmVySGVpZ2h0IDogMTA4MFxuICAgIH0sXG4gICAgR1VJREVfU0laRTogMTAsXG4gICAgTEFZRVJTX1dJRFRIOiAxMjUsXG4gICAgTEFZRVJfQ1JFQVRFX0RFTEFZOiA1MDAwLFxuICAgIExBWUVSX0NSRUFURV9CRUhBVklPUjogTEFZRVJfQ1JFQVRFX0tFWVMsXG4gICAgQ0FOVkFTX1RBUkdFVDogXCJkcmF3aW5nLWNhbnZhc1wiXG59O1xuIiwiaW1wb3J0ICogYXMgVmVjMiBmcm9tICd2ZWN0b3IyZCc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBIdWQgZnJvbSBcIi4vaHVkL2h1ZFwiO1xuaW1wb3J0IENvbG9yIGZyb20gXCIuL3V0aWwvY29sb3JcIjtcbmltcG9ydCBMYXllciBmcm9tIFwiLi90b29scy9sYXllclwiO1xuaW1wb3J0IE1hcmtlciBmcm9tIFwiLi90b29scy9tYXJrZXJcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gXCIuL2h1ZC90b29sYmFyXCI7XG5pbXBvcnQgTGF5ZXJzIGZyb20gXCIuL2h1ZC9sYXllcnNcIjtcbmltcG9ydCBLZXlFdmVudHMgZnJvbSBcIi4vdXRpbC9rZXlfZXZlbnRzXCI7XG5pbXBvcnQgQ29sb3JQaWNrZXIgZnJvbSBcIi4vaHVkL2NvbG9yX3BpY2tlclwiO1xuLyoqXG4gKiBNYWluIGRyYXdpbmcgY2xhc3MsIGNvbnN0cnVjdHMgZXZlcnl0cmhpbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd2luZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMYXllciBpbmNyZW1lbnRhbCBudW1iZXIsIHVzZWQgdG8gdHJhY2sgdW5pcXVlIG51bWVyaWNhbFxuICAgICAgICAgKiBpZCBvZiBhbGwgZW50aXRpZXMgbG9hZGVkIG9udG8gdGhlIGNhbnZhc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxheWVyX2lkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBsYXllcnNcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciAge01hcDxudW1iZXIsIExheWVyPn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubGF5ZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSGVhZHMgdXAgZGlzcGxheSAoR1VJKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtIdWR9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmh1ZCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG91bGQgd2UgZHJhdyB0aGUgdGFyZ2V0cy4gVGhpcyBpcyB0aGUgc2l6ZSBhbmQgc2hhcGUgb2YgdGhlIGN1cnJlbnQgYnJ1c2gvdG9vbC5cbiAgICAgICAgICogVGhpcyBpcyBhIHRlbXBvcmFyeSBvdmVybGF5IHNvIHRoZSB1c2VyIGNhbiBzZWUgYW4gaW5kZWljYXRpb24gb2Ygd2hhdCB0aGV5IGFyZVxuICAgICAgICAgKiBkb2luZyBiZWZvcmUgdGhleSBkbyBpdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZHJhd190YXJnZXQgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGFyZ2V0IGN1cnJlbnQgbG9jYXRpb24sIHdoZXJlIHdlJ3JlIGRyYXdpbmcvd29ya2luZy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7VmVjMi5WZWN0b3J9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHbG9iYWwgdG9vbCBzaXplXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZ2xvYmFsX3RhcmdldF9zaXplID0gMjA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXJyZW50IHRvb2wgdGhlIHVzZXIgaGFzIHNlbGVjdGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtUb29sfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50b29sID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhlbHBlciB0byBjYWxjdWxhdGUgRlBTIGFuZCBmcmFtZXJhdGVzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGltZVRvRHJhdyA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIb2xkZXIgZm9yIGRlbHRhdGltZSwgdXNlZCBmb3IgYW5pbWF0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmR0ID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXZpb3VzIGZyYW1lIHRpbWVzdGFtcCwgdXNlZCB0byBjYWxjdWxhdGUgRlBTIGFuZCBhbmltYXRpb25zLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtET01IaWdoUmVzVGltZVN0YW1wfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbGRUaW1lc3RhbXAgPSAwLjA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGcmFtZXMgcGVyIHNlY29uZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZwcyA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG93IGRlYnVnLiBEbyB3ZSB3YW50IHRvIHNob3cgZGVidWcgaW5mbyBvbnNjcmVlbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvd19kZWJ1ZyA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdHJva2UgY29sb3JcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3Ryb2tlX2NvbG9yID0gbmV3IENvbG9yKDAsIDAsIDAsIDEpO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmlsbCBDb2xvclxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5maWxsX2NvbG9yID0gbmV3IENvbG9yKDIyOCwgMjI4LCAyMjgsIDEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBMYXllciBmcm9tIHRoZSBjYW52YXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBsYXllcl9pZCAgICBJRCBvZiB0aGUgbGF5ZXIgdG8gcmVtb3ZlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVMYXllcihsYXllcl9pZCkge1xuICAgICAgICBpZiAobGF5ZXJfaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoaXMgcmVtb3ZlcyB0aGUgbGF5ZXIgZnJvbSB0aGUgZHJhd2luZ1xuICAgICAgICB0aGlzLmxheWVycy5kZWxldGUobGF5ZXJfaWQpO1xuICAgICAgICAvLyBOb3cgdGhhdCB0aGUgbGF5ZXIgaGFzIGJlZW4gcmVtb3ZlZFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHNldCB0aGUgbmV3IGFjdGl2ZV9sYXllci5cbiAgICAgICAgLy8gSWYgdGhlcmUncyBvbmUgYmVsb3csIHRoZW4gY2hvb3NlIHRoYXQuXG4gICAgICAgIGlmICh0aGlzLmxheWVycy5oYXMobGF5ZXJfaWQgLSAxKSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVfbGF5ZXIgPSB0aGlzLmxheWVycy5nZXQobGF5ZXJfaWQgLSAxKTtcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBjaG9vc2UgdGhlIG9uZSBhYm92ZSBpZiBpdCBleGlzdHNcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmxheWVycy5oYXMobGF5ZXJfaWQgKyAxKSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVfbGF5ZXIgPSB0aGlzLmxheWVycy5nZXQobGF5ZXJfaWQgKyAxKTtcbiAgICAgICAgICAgIC8vIElmIG5laXRoZXIgb2YgdGhvc2UgYXJlIHRydWUuLi5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxheWVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGxheWVycyBsZWZ0LCBjcmVhdGUgYSBuZXcgb25lLCBzZXQgaXQgYWN0aXZlLlxuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMYXllcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RlaGVyd2lzZSBjaG9vc2UgdGhlIGxheWVyIHdpdGggdGhlIHNtYWxsZXN0IElEXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVfbGF5ZXIgPSB0aGlzLmxheWVycy5nZXQoTWF0aC5taW4oLi4udGhpcy5sYXllcnMua2V5cygpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVkcmF3IHRoZSBsYXllcnMgb3ZlcnZpZXcuXG4gICAgICAgIHRoaXMucmVkcmF3SHVkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdpdmVuIGFuIElELCByZXR1cm4gYSBMYXllciB3aXRoIHRoYXQgSUQgaWYgaXQgZXhpc3RzLCBudWxsIGlmIGl0IGRvZXNuJ3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgbGF5ZXJfaWQgIElEIG9mIHRoZSBsYXllciB0byByZXR1cm4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7TGF5ZXIgfCBudWxsfVxuICAgICAqL1xuICAgIGdldExheWVyKGxheWVyX2lkKSB7XG4gICAgICAgIGNvbnN0IGxheWVyID0gdGhpcy5sYXllcnMuZ2V0KGxheWVyX2lkKTtcbiAgICAgICAgaWYgKGxheWVyKVxuICAgICAgICAgICAgcmV0dXJuIGxheWVyO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVkcmF3IGFsbCBIVUQgaXRlbXMuIFdlIGRvbid0IHdhbnQgdG8gZG9cbiAgICAgKiB0aGlzIGV2ZXJ5IGZyYW1lIGFzIHRoZXNlIGFyZSBET00gaXRlbXMsIHNvIHdlIGhhdmVcbiAgICAgKiBhbiBleHBsaWNpdCBjYWxsIHRvIGRvIHNvIHdoZW4gd2UgbmVlZCB0by5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHJlZHJhd0h1ZCgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgKF9iID0gKF9hID0gdGhpcy5odWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRCeU5hbWUoXCJsYXllcnNcIikpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5idWlsZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGQgYSBsYXllciB0byB0aGUgZHJhd2luZywgc2V0IGl0IGFzIGFjdGl2ZVxuICAgICAqIGFuZCByZWRyYXcgdGhlIGh1ZCB0byBzaG93IGl0IGluIHRoZSBsYXllciBvdmVydmlldy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGFkZExheWVyKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZV9sYXllciA9IG5ldyBMYXllcih0aGlzLmxheWVyX2lkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5sYXllcnMuc2V0KHRoaXMuYWN0aXZlX2xheWVyLmlkLCB0aGlzLmFjdGl2ZV9sYXllcik7XG4gICAgICAgIHRoaXMubGF5ZXJfaWQrKztcbiAgICAgICAgdGhpcy5yZWRyYXdIdWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYWN0aXZlIGxheWVyLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIGxheWVyX2lkICBJRCBvZiB0aGUgbGF5ZXIgdG8gc2V0IGFzIGFjdGl2ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHNldEFjdGl2ZUxheWVyKGxheWVyX2lkKSB7XG4gICAgICAgIC8vIFRPRE86IEFzc3VtZXMgdGhlIGxheWVyX2lkIGV4aXN0cywgd2hhdCBkbyB3ZSBkbyBpZiBpdCBkb2Vzbid0P1xuICAgICAgICB0aGlzLmFjdGl2ZV9sYXllciA9IHRoaXMubGF5ZXJzLmdldChsYXllcl9pZCk7XG4gICAgICAgIHRoaXMucmVkcmF3SHVkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5leHQgTGF5ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBjdXJyZW50X2xheWVyX2lkICBJRCBvZiB0aGUgY3VycmVudCBsYXllci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtudW1iZXJ9ICAgUmV0dXJucyB0aGUgSUQgb2YgdGhlIG5leHQgbGF5ZXIgaW4gdGhlIE1hcCgpXG4gICAgICovXG4gICAgZ2V0TmV4dExheWVyKGN1cnJlbnRfbGF5ZXJfaWQpIHtcbiAgICAgICAgbGV0IG5leHQgPSBmYWxzZTtcbiAgICAgICAgLy8gUmVuZGVyIGVhY2ggb2YgdGhlIGV4aXN0aW5nIGVudGl0aXRlcy4gKERyYXdpbmdzKVxuICAgICAgICBmb3IgKGxldCBba2V5LCBsYXllcl0gb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgICAgICAgIGlmIChuZXh0ID09PSB0cnVlKVxuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBjdXJyZW50X2xheWVyX2lkKSB7XG4gICAgICAgICAgICAgICAgbmV4dCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHByZXYgTGF5ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBjdXJyZW50X2xheWVyX2lkICBJRCBvZiB0aGUgY3VycmVudCBsYXllci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtudW1iZXJ9ICAgUmV0dXJucyB0aGUgSUQgb2YgdGhlIG5leHQgbGF5ZXIgaW4gdGhlIE1hcCgpXG4gICAgICovXG4gICAgZ2V0UHJldkxheWVyKGN1cnJlbnRfbGF5ZXJfaWQpIHtcbiAgICAgICAgbGV0IHByZXZpb3VzID0gLTE7XG4gICAgICAgIC8vIFJlbmRlciBlYWNoIG9mIHRoZSBleGlzdGluZyBlbnRpdGl0ZXMuIChEcmF3aW5ncylcbiAgICAgICAgZm9yIChsZXQgW2tleSwgbGF5ZXJdIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBjdXJyZW50X2xheWVyX2lkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldmlvdXMgPSBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZW50aXR5IHRvIHRoZSBhY3RpdmUgbGF5ZXIuIFRoaXMgd2lsbCBnZXQgZHJhd24gaW4gdGhlIG5leHQgZnJhbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7RW50aXR5fSAgZW50aXR5ICBFbnRpdHkgdG8gYWRkIHRvIHRoZSBnYW1ld29ybGRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGFkZEVudGl0eShlbnRpdHkpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlX2xheWVyKVxuICAgICAgICAgICAgdGhpcy5hZGRMYXllcigpO1xuICAgICAgICAoX2EgPSB0aGlzLmFjdGl2ZV9sYXllcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEVudGl0eShlbnRpdHkpO1xuICAgICAgICB0aGlzLnJlZHJhd0h1ZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBbc2V0dXAgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7SFRNTENhbnZhc0VsZW1lbnR9ICBjYW52YXMgIFtjYW52YXMgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgICAgICAgICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgc2V0dXAoY2FudmFzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gU2V0cyB0aGUgZGVmYXVsL3N0YXJ0aW5nIFRvb2wuXG4gICAgICAgIHRoaXMuc2V0VG9vbChuZXcgTWFya2VyKHRoaXMpKTtcbiAgICAgICAgLy8gQWRkIGEgbGF5ZXIgdG8gdGhlIGRyYXdpbmdcbiAgICAgICAgdGhpcy5hZGRMYXllcigpO1xuICAgICAgICAvLyBJdGVtcyB0byB0aGUgaHVkXG4gICAgICAgIGNvbnN0IGh1ZCA9IG5ldyBIdWQoKTtcbiAgICAgICAgY29uc3QgY29sb3JfcGlja2VyID0gbmV3IENvbG9yUGlja2VyKHRoaXMpO1xuICAgICAgICBodWQuYWRkSXRlbShjb2xvcl9waWNrZXIpO1xuICAgICAgICBjb25zdCB0b29sYmFyID0gbmV3IFRvb2xiYXIoXCJ0b29sYmFyXCIsIHRoaXMpO1xuICAgICAgICBodWQuYWRkSXRlbSh0b29sYmFyKTtcbiAgICAgICAgLy8gQXR0YWNoIHRoZSBsYXllcnMgb3ZlcnZpZXcgdG8gdGhlIEhVRFxuICAgICAgICBjb25zdCBsYXllcnMgPSBuZXcgTGF5ZXJzKHRoaXMpO1xuICAgICAgICBodWQuYWRkSXRlbShsYXllcnMpO1xuICAgICAgICAvLyBEcmF3IHRoZSBvdmVydmlldywgZm9yIGVhY2ggbGF5ZXJcbiAgICAgICAgbGF5ZXJzLmJ1aWxkKCk7XG4gICAgICAgIC8vIEF0dGFjaCB0aGUgSFVEIHRvIHRoZSBkcmF3aW5nXG4gICAgICAgIHRoaXMuaHVkID0gaHVkO1xuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lciB0byBjbG9zZSB0aGUgaGVscCBwb3B1cCB0aGF0IHNob3dzIG9uIGxvYWQuXG4gICAgICAgIChfYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVscCAjY2xvc2VcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVscFwiKTtcbiAgICAgICAgICAgIGhlbHAgPT09IG51bGwgfHwgaGVscCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVscC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgICAgIGhlbHAgPT09IG51bGwgfHwgaGVscCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVscC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gUGFzcyBvZmYgYWxsIEtleWJvYXJkIGV2ZW50cyB0byB0aGUga2V5X2V2ZW50cyBoYW5kbGVyLiBcbiAgICAgICAgLy8gRG8gdGhpcyBnbG9iYWxseS4gTm90IGp1c3Qgb24gdGhlIENhbnZhcy5cbiAgICAgICAgY29uc3Qga2V5RXZlbnRIYW5kbGVyID0gbmV3IEtleUV2ZW50cyh0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAga2V5RXZlbnRIYW5kbGVyLmhhbmRsZShldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBdHRhY2ggc29tZSBldmVudHMgdG8gdGhlIG1haW4gY2FudmFzXG4gICAgICAgIGlmIChjYW52YXMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbnZlbnQgdG8gaGFuZGxlIGlucHV0IG1vdmVtZW50XG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICAge01vdXNlRXZlbnR9ICBldmVudCAgICAgICBbZXZlbnQgZGVzY3JpcHRpb25dXG4gICAgICAgICAgICAgKiBAcGFyYW0gICB7W3R5cGVdfSAgICAgIFRvdWNoRXZlbnQgIFtUb3VjaEV2ZW50IGRlc2NyaXB0aW9uXVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICAgICAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29uc3QgbW92ZUV2ZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFZlYzIuVmVjdG9yKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjMi5WZWN0b3IoZXZlbnQudG91Y2hlc1swXS5jbGllbnRYLCBldmVudC50b3VjaGVzWzBdLmNsaWVudFkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFRhcmdldFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBodWQuc2V0Q3Vyc29yUG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdGFyZ2V0IHBvc2l0aW9uICh3aGVyZSB3ZSB3YW50IHRvIGRyYXcpIHdoZW4gdGhlIG1vdXNlIG1vdmVzIG92ZXIgdGhlIGNhbnZhc1xuICAgICAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW92ZUV2ZW50KTtcbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG1vdmVFdmVudCk7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEV2ZW50IHRvIGhhbmRsZSB0b3VjaCBzdGFydFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgIHtNb3VzZUV2ZW50fSAgZXZlbnQgICAgICAgW2V2ZW50IGRlc2NyaXB0aW9uXVxuICAgICAgICAgICAgICogQHBhcmFtICAge1t0eXBlXX0gICAgICBUb3VjaEV2ZW50ICBbVG91Y2hFdmVudCBkZXNjcmlwdGlvbl1cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgICAgICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IGRvd25FdmVudCA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBuZXcgVmVjMi5WZWN0b3IoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBWZWMyLlZlY3RvcihldmVudC50b3VjaGVzWzBdLmNsaWVudFgsIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMudG9vbCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN0YXJ0RHJhd2luZyhwb3NpdGlvbik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gSWYgdGhlIG1vdXNlIGlzIGRvd24sIHNpZ25hbCB0byB0aGVuIGRyYXdpbmcgb2JqZWN0IHRoYXQgd2UncmUgXG4gICAgICAgICAgICAvLyBkcmF3aW5nLCB3aXRoIHdoYXRldmVyIHRvb2wgd2UndmUgY3VycmVudGx5IHNlbGVjdGVkLlxuICAgICAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZG93bkV2ZW50KTtcbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBkb3duRXZlbnQpO1xuICAgICAgICAgICAgLy8gTGlzdGVuIGZvciBtb3VzZXdoZWVsLCBhbmQgcmVzaXplIHRoZSB0b29sIGRlcGVuZGluZyBvbiBkaXJlY3Rpb24uXG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5kZWx0YVkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIChfYSA9IHRoaXMudG9vbCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFNpemUodGhpcy50b29sLnNpemUgLSAyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIChfYiA9IHRoaXMudG9vbCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnNldFNpemUodGhpcy50b29sLnNpemUgKyAyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxfdGFyZ2V0X3NpemUgPSAoKF9jID0gdGhpcy50b29sKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Muc2l6ZSkgfHwgMjA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXZlbnQgdG8gaGFuZGxlIHN0b3BwaW5nIG9mIG1vdXNlIGV2ZW50c1xuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAgIHtNb3VzZUV2ZW50fSAgZXZlbnQgICAgICAgW2V2ZW50IGRlc2NyaXB0aW9uXVxuICAgICAgICAgICAgICogQHBhcmFtICAge1t0eXBlXX0gICAgICBUb3VjaEV2ZW50ICBbVG91Y2hFdmVudCBkZXNjcmlwdGlvbl1cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgICAgICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IHVwRXZlbnQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy50b29sKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3RvcERyYXdpbmcoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBJZiB3ZSBtb3VzZXVwIHdlIG5lZWQgdG8gdGVsbCB0aGUgZHJhd2luZyBvYmplY3QsIHdlJ3ZlIHN0b3BwZWQgZHJhd2luZy5cbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB1cEV2ZW50KTtcbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdXBFdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSB0b29sIHRoYXQgdGhlIHVzZXIgaGFzIHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge1Rvb2x9ICB0b29sICBTZXQncyB0aGUgYWN0aXZlIHRvb2wgdG8gVG9vbFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0VG9vbCh0b29sKSB7XG4gICAgICAgIHRoaXMudG9vbCA9IHRvb2w7XG4gICAgICAgIHRoaXMudG9vbC5zZXRTaXplKHRoaXMuZ2xvYmFsX3RhcmdldF9zaXplKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVW5zZXQncyB0aGUgY3VycmVudCB0YXJnZXRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHVuc2V0VGFyZ2V0KCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgdGFyZ2V0IHBvc2l0aW9uIChXaGVyZSB0aGUgbW91c2UgaXMpXG4gICAgICpcbiAgICAgKiBAdmFyIHtWZWMyLlZlY3Rvcn0gbW91c2VfcG9zICAgVGFyZ2V0IHBvc2l0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNldFRhcmdldFBvc2l0aW9uKG1vdXNlX3Bvcykge1xuICAgICAgICB0aGlzLnRhcmdldCA9IG1vdXNlX3BvcztcbiAgICAgICAgaWYgKHRoaXMudG9vbCkge1xuICAgICAgICAgICAgdGhpcy50b29sLnNldExvY2F0aW9uKG1vdXNlX3Bvcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRvIGRyYXcgdGhlIHRhcmdldHMsIChEcmF3cyB0aGUgVG9vbCBoZWxwZXIgdG8gdGhlIFVJKVxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyBkcmF3aW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXdUYXJnZXQoY29udGV4dCkge1xuICAgICAgICBpZiAodGhpcy50b29sICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudG9vbC5kcmF3VGFyZ2V0KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBjb3VudCBvZiBhbGwgZW50aXRlcyBieSB0eXBlLCBpZiBubyB0eXBlIHNwZWNpZmllZCxcbiAgICAgKiB0aGVuIHJldHVuciBjb3VudCBvZiBhbGwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nP30gIHR5cGUgIEVudGl0eSBUeXBlfE5hbWUgW29wdGlvbmFsXVxuICAgICAqXG4gICAgICogQHJldHVybiAge251bWJlcn0gICAgICAgIE51bWJlciBvZiBlbnRpdGllc1xuICAgICAqL1xuICAgIGNvdW50RW50aXRpZXModHlwZSkge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBba2V5LCBsYXllcl0gb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgICAgICAgIGNvdW50ICs9IGxheWVyLmNvdW50RW50aXRpZXModHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEcmF3IHRoZSBkZWJ1Z2dpbmcgcGFuZWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBDYW52YXMgcmVuZGVyaW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXdEZWJ1Zyhjb250ZXh0KSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNkZGRkZGQ1NSc7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoIC0gNzUsIENvbnN0YW50cy5DQU5WQVNfU0laRS5oZWlnaHQgLSAxMDAsIDc1LCAxMDApO1xuICAgICAgICBjb250ZXh0LmZvbnQgPSAnMTFweCBBcmlhbCc7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgY29udGV4dC5maWxsVGV4dChcIkZQUzogXCIgKyB0aGlzLmZwcywgQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoIC0gNzAsIENvbnN0YW50cy5DQU5WQVNfU0laRS5oZWlnaHQgLSA4NSk7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQoXCJMQVlFUlM6IFwiICsgdGhpcy5sYXllcnMuc2l6ZSwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoIC0gNzAsIENvbnN0YW50cy5DQU5WQVNfU0laRS5oZWlnaHQgLSA3MCk7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQoXCJFTlQ6IFwiICsgdGhpcy5jb3VudEVudGl0aWVzKCksIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCAtIDcwLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0IC0gNTUpO1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KFwiTE9DLVg6IFwiICsgKChfYSA9IHRoaXMudGFyZ2V0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EueCksIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCAtIDcwLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0IC0gNDApO1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KFwiTE9DLVk6IFwiICsgKChfYiA9IHRoaXMudGFyZ2V0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IueSksIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCAtIDcwLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0IC0gMjUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGFueSBjYW52YXMgYmFzZWQgaHVkIGl0ZW1zLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyByZW5kZXJpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgZHJhd0h1ZChjb250ZXh0KSB7XG4gICAgICAgIGlmICghdGhpcy5odWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuaHVkLnJlbmRlcihjb250ZXh0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBhY3RpdmUgY29sb3IsIGFzIHNwZWNpZmllZCBidSB0aGUgcGFsZXR0ZS5cbiAgICAgKiBkZWZhdWx0cyB0byBCbGFjayBpZiBubyBjb2xvciBpcyBzZXQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Q29sb3J9ICAgVGhlIHNlbGVjdGVkIGNvbG9yXG4gICAgICovXG4gICAgZ2V0Q29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cm9rZV9jb2xvcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGFyZW50IGZvciBhbGwgdGhlIHJlbmRlcmluZyBmb3IgdGhlIGFwcFxuICAgICAqXG4gICAgICogQHBhcmFtICAge0hUTUxDYW52YXNFbGVtZW50fSAgICAgICAgIGNhbnZhcyAgIENhbnZhc1xuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBDYW52YXMgZHJhd2luZyBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICByZW5kZXIoY2FudmFzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICAvLyBDbGVhciB0aGUgc2NyZWVuIGV2ZXJ5IGZyYW1lXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIC8vIFJlbmRlciBlYWNoIG9mIHRoZSBleGlzdGluZyBlbnRpdGl0ZXMuIChEcmF3aW5ncylcbiAgICAgICAgZm9yIChsZXQgW2tleSwgbGF5ZXJdIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICAgICAgICBsYXllci5yZW5kZXIoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRHJhdyBhbnkgdG9vbCBoZWxwZXJzLCBkcmF3IHRoZSB0aGluZyBjdXJyZW50bHkgYmVpbmcgZHJhd24uXG4gICAgICAgIGlmICgoX2EgPSB0aGlzLnRvb2wpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hY3RpdmVfZW50aXR5KSB7XG4gICAgICAgICAgICB0aGlzLnRvb2wuYWN0aXZlX2VudGl0eS5kcmF3KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERyYXcgdG8gdGhlIGVudGl0eSBjdXJyZW50bHkgYmVpbmcgZHJhd25cbiAgICAgICAgaWYgKChfYiA9IHRoaXMudG9vbCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmlzX2RyYXdpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudG9vbC5kcmF3KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERyYXcgdGFyZ2V0LCBpZiB0dXJuZWQgb24uXG4gICAgICAgIGlmICh0aGlzLmRyYXdfdGFyZ2V0KVxuICAgICAgICAgICAgdGhpcy5kcmF3VGFyZ2V0KGNvbnRleHQpO1xuICAgICAgICAvLyBTaG93IHRoZSBkZWJ1ZywgaWYgdHVybmVkIG9uLlxuICAgICAgICBpZiAodGhpcy5zaG93X2RlYnVnKVxuICAgICAgICAgICAgdGhpcy5kcmF3RGVidWcoY29udGV4dCk7XG4gICAgICAgIC8vIERyYXcgdGhlIEhVRC5cbiAgICAgICAgdGhpcy5kcmF3SHVkKGNvbnRleHQpO1xuICAgICAgICBpZiAoKChfYyA9IHRoaXMudG9vbCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLm5hbWUpID09PSAnc2VsZWN0JyAmJiB0aGlzLmFjdGl2ZV9sYXllciAmJiB0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVfbGF5ZXIuZHJhd0d1aWRlcyhjb250ZXh0LCB0aGlzLnRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2FyYmFnZSBjbGVhbiB1cCwgcmVtb3ZlcyBhbnkgZW50aXRpZXMgdGhhdCBhcmUgc2NoZWR1bGUgZm9yIHJlbW92YWxcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbW92ZUVudGl0aWVzKCkge1xuICAgICAgICBmb3IgKGxldCBba2V5LCBsYXllcl0gb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgICAgICAgIGxheWVyLnJlbW92ZUVudGl0aWVzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRG8gYWxsIHdvcmxkIGNhbGN1bGF0aW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gICAgICAgICAgICAgICBnYW1lVGltZSAgIERlbHRhVGltZVxuICAgICAqIEBwYXJhbSAgIHtET01IaWdoUmVzVGltZVN0YW1wfSAgdGltZXN0YW1wICBDdXJyZW50IHRpbWVcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHByb2Nlc3ModGltZSwgdGltZXN0YW1wKSB7XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIHNlY29uZHMgcGFzc2VkIHNpbmNlIHRoZSBsYXN0IGZyYW1lXG4gICAgICAgIHRoaXMudGltZVRvRHJhdyA9IHRpbWUgLyAxMDAwO1xuICAgICAgICAvLyBDYWxjdWxhdGUgZnBzXG4gICAgICAgIHRoaXMuZnBzID0gTWF0aC5yb3VuZCgxIC8gdGhpcy50aW1lVG9EcmF3KTtcbiAgICAgICAgLy8gUmVtb3ZlIGFueSBlbnRpdGllcyB0aGF0IGFyZSBzZXQgZm9yIHJlbW92YWwuIENvdWxkIHByb2JhYmx5IFxuICAgICAgICAvLy8gYmUgZG9uZSBpbiB0aGUgbG9vcCBiZWxvdyBpZiBwZXJmb3JtYW5jZSBiZWNvbWVzIGFuIGlzc3VlLFxuICAgICAgICAvLyBmb3Igbm93IGl0J3MgZmluZS4gQ2xlYXJlciB0byBrZWVwIHRoZSBzZXBlcmF0ZS5cbiAgICAgICAgdGhpcy5yZW1vdmVFbnRpdGllcygpO1xuICAgICAgICAvLyBQcm9jZXNzIGFueSBlbnRpdHkgY2FsY3MgZm9yIHJlbmRlcmluZyBuZXh0IHRpY2suXG4gICAgICAgIGZvciAobGV0IFtrZXksIGxheWVyXSBvZiB0aGlzLmxheWVycykge1xuICAgICAgICAgICAgbGF5ZXIucHJvY2Vzcyh0aW1lLCB0aW1lc3RhbXApO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFsbG93IGh1ZCB0byBwcm9jZXNzIHRoaW5nc1xuICAgICAgICBpZiAodGhpcy5odWQpXG4gICAgICAgICAgICB0aGlzLmh1ZC5wcm9jZXNzKHRpbWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb2xvciBmcm9tICcuLi91dGlsL2NvbG9yJztcbi8qKlxuICogQ29yZSBlbnRpdHkgY2xhc3MsIGFsbCBkcmF3biBvYmplY3RzIHdpdGhpbiB0aGUgYXBwIGFyZSBlbnRpdGllcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50aXR5IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgbmFtZSAgbmFtZSBvciB0eXBlIG9mIGVudGl0eVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRpbWUgdGhlIGVudGl0eSB3YXMgY3JlYXRlZCwgbWlsbGlzZWNvbmRzIHNpbmNlIEVQT0NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGltZSB0aGUgZW50aXR5IHdhcyBjcmVhdGVkLCBtaWxsaXNlY29uZHMgc2luY2UgRVBPQ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jcmVhdGVkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRpbWUgdGhlIGVudGl0eSB3YXMgZmluaXNoZWQgZHJhd2luZywgbWlsbGlzZWNvbmRzIHNpbmNlIEVQT0NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbG91ciBvZiB0aGUgZW50aXR5XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gIHtDb2xvcn0gIENvbG91ciBvYmplY3QgdGhhdCB0aGUgZW50aXR5IHdpbGwgYmUgZHJhd24gYXMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0cm9rZV9jb2xvciA9IG5ldyBDb2xvcigwLCAwLCAwKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbG91ciBvZiB0aGUgZW50aXR5XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gIHtDb2xvcn0gIENvbG91ciBvYmplY3QgdGhhdCB0aGUgZW50aXR5IHdpbGwgYmUgZHJhd24gYXMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZpbGxfY29sb3IgPSBuZXcgQ29sb3IoMCwgMCwgMCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaXplIG9mIHRoZSBlbnRpdHlcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIG5hbWUgZm9yIHRoZSBlbnRpdHksIGFrYSB0eXBlLiBDYW4gYmUgdXNlZCB0byBxdWVyeSBmb3IgZW5laXRpZXMgb2YgXCJuYW1lXCJcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9ICcnO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgc2V0IHRvIHRydWUgdGhlIGVudGl0eSB3aWxsIGJlIGRpc3Bvc2VkIG9mIG5leHQgdGljay5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVtb3ZlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWYgdG8gdGhlIGRyYXdpbmcgY2FudnNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZHJhd2luZyA9IG51bGw7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IERhdGUubm93KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgU3Ryb2tlIENvbG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q29sb3J9ICBjb2xvciAgQ29sb3IgdG8gc2V0IG9uIHRoZSBlbnRpdHlcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHNldFN0cm9rZUNvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuc3Ryb2tlX2NvbG9yID0gY29sb3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgRmlsbCBDb2xvclxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NvbG9yfSAgY29sb3IgIENvbG9yIHRvIHNldCBvbiB0aGUgZW50aXR5XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXRGaWxsQ29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5maWxsX2NvbG9yID0gY29sb3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgZW50aXR5LCBieSBkZWZhdWx0IGFsbCBlbnRpdGllcyBhcmUgdHJlYXRlZCBhcyBjaXJjbGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyBkcmF3aW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbmRlcihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuZHJhdyhjb250ZXh0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvY2VzcyBhbnkgZW50aXR5IHVwZGF0ZXMgb3IgY2FsY3VsYXRpb25zIHRvIGJlIHJlbmRlcmVkIG5leHQgdGljay5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBkZWx0YSAgdGltZSBzaW5jZSBsYXN0IGZyYW1lLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2VzcyhkZWx0YSkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gZHJhd2luZyBpcyBjb21wbGV0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHs8dm9pZD59XG4gICAgICovXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gRGF0ZS5ub3coKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZsYXR0ZW5Qb2ludHMsIGV4cGFuZFBvaW50cywgZ2V0Q3VydmVQb2ludHMsIHNpbXBsaWZ5IH0gZnJvbSBcIi4uL3V0aWwvcG9pbnRzXCI7XG5pbXBvcnQgeyBkZW5vcm1hbGl6ZSwgbm9ybWFsaXplIH0gZnJvbSBcIi4uL3V0aWwvbm9ybWFsaXplXCI7XG5pbXBvcnQgRW50aXR5IGZyb20gXCIuL2VudGl0eVwiO1xuaW1wb3J0IHsgZHJhd0JvdW5kaW5nQm94LCBkcmF3R3VpZGUgfSBmcm9tIFwiLi4vdXRpbC9ndWlkZVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJlZWhhbmQgZXh0ZW5kcyBFbnRpdHkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBzaXplICAgU2l6ZSBvZiB0aGUgZW50aXR5XG4gICAgICogQHBhcmFtICAge0NvbG9yfSAgIGNvbG9yICBDb2xvciBvZiB0aGUgZW50aXR5XG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgc3Ryb2tlX2NvbG9yLCBmaWxsX2NvbG9yLCBkcmF3aW5nLCBjbG9zZSA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKCdmcmVlaGFuZCcpO1xuICAgICAgICAvKipcbiAgICAgICAgICogUG9pbnRzIG9mIHRoZSBmcmVlaGFuZCBsaW5lXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge0FycmF5PFZlY3Rvcj59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogRW5hYmxlcyB0aGUgZW50aXR5IHRvIGJlIHNjYWxlZCBhbmQgZGlzcGxheWVkIGF0XG4gICAgICAgICAqIGEgZGlmZmVyZW50IHNpemUsIGllIGluIHRoZSBsYXllcnMgb3ZlcnZpZXcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2NhbGUgPSAxLjA7XG4gICAgICAgIHRoaXMuY2xvc2UgPSBjbG9zZTtcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gZHJhd2luZztcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5zdHJva2VfY29sb3IgPSBzdHJva2VfY29sb3I7XG4gICAgICAgIHRoaXMuZmlsbF9jb2xvciA9IGZpbGxfY29sb3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtjb21wbGV0ZSBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBzdXBlci5jb21wbGV0ZSgpO1xuICAgICAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoIDwgMSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3Qgc2ltcGxpZmllZCA9IHNpbXBsaWZ5KHRoaXMucG9pbnRzLCAzKTtcbiAgICAgICAgY29uc3QgZmxhdCA9IGZsYXR0ZW5Qb2ludHMoc2ltcGxpZmllZCk7XG4gICAgICAgIGNvbnN0IGN1cnZlZCA9IGdldEN1cnZlUG9pbnRzKGZsYXQsIDAuNywgMSwgdGhpcy5jbG9zZSk7XG4gICAgICAgIHRoaXMucG9pbnRzID0gZXhwYW5kUG9pbnRzKGN1cnZlZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERyYXcgdGhpcyBlbnRpdHkgdG8gdGhlIGdpdmVuIGNvbnRleHQuIENvbnRhaW5zIGFsbCB0aGVcbiAgICAgKiBsb2dpYyB0byBkcmF3IGEgZnJlZWhhbmQgbGluZSBvbnRvIGEgY29udGV4dC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBUaGUgY2FudmFzIGNvbnRleHQgdG8gZHJhdyB0aGlzIGVudGl0eSB0by5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXdQYXRoKGNvbnRleHQsIHN0cm9rZSkge1xuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vdGhpbmcgdG8gZHJhdywgc2hvcmNpcmN1aXQuXG4gICAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGggPCAxKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBTZXQgdGhlIHNjYWxlIHRvIGVxdWFsIHRoZSBkZWZhdWx0XG4gICAgICAgIGxldCBzY2FsZSA9IHRoaXMuc2NhbGU7XG4gICAgICAgIC8vIENhY3VsYXRlIHRoZSBzY2FsZSBiYXNlZCBvbiB0aGUgc2l6ZSBvZiB0aGUgY2FudmFzIGNvbnRleHQncyBjYW52YXNcbiAgICAgICAgaWYgKGNvbnRleHQuY2FudmFzLndpZHRoICE9PSBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGgpIHtcbiAgICAgICAgICAgIHNjYWxlID0gY29udGV4dC5jYW52YXMud2lkdGggLyBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRHJhd1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMuc2l6ZSAqIHNjYWxlO1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5zdHJva2VfY29sb3IuZ2V0SGV4KCk7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5maWxsX2NvbG9yLmdldEhleCgpO1xuICAgICAgICBjb250ZXh0LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgICAgIC8vIFdlIGRlbm9ybWFsaXplIHRoZSBwb2ludHMsIGJhc2VkIG9uIHRoZSBjYW52YXMgc2l6ZSBhbmQgc2NhbGUuXG4gICAgICAgIGNvbnN0IGluaXRpYWxQb2ludCA9IGRlbm9ybWFsaXplKHRoaXMucG9pbnRzWzBdLCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgLy8gTW92ZSB0aGUgdHVydGxlIHRvIHRoaXMucG9pbnRzWzBdXG4gICAgICAgIGNvbnRleHQubW92ZVRvKGluaXRpYWxQb2ludC54LCBpbml0aWFsUG9pbnQueSk7XG4gICAgICAgIC8vIFN0YXJ0IGF0IHRoZSBzZWNvbmQgcG9pbnQgYHRoaXMucG9pbnRzWzFdYFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBEZW5tb3JtYWxpc2UgY3VycmVudCBwb2ludCB0byBwaXhlbCB2YWx1ZXNcbiAgICAgICAgICAgIGNvbnN0IGRlbm9ybWFsaXplZCA9IGRlbm9ybWFsaXplKHRoaXMucG9pbnRzW2ldLCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgbW9yZSB0aGFuIDIgcG9pbnRzIGFuZCB0aGUgY3VycmVudCBwb2ludCBpc24ndCB0aGUgbGFzdCBvbmUuLi5cbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGggPiAxICYmIGkgPCAodGhpcy5wb2ludHMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAvLyBEZW5vcm1hbGlzZSB0aGUgbmV4dCBwb2ludCwgc28gdGhhdCB3ZSBjYW4gZHJhdyBhIHF1YWRyYXRpYyBjdXJ2ZSB0byBpdFxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbm9tYWxpemVkTmV4dCA9IGRlbm9ybWFsaXplKHRoaXMucG9pbnRzW2kgKyAxXSwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgLy8gQ2FsdWxhdGUgdGhlIG1pZC1wb2ludCBiZXR3ZWVuIGN1cnJlbnQgYW5kIG5leHQgcG9pbnRzXG4gICAgICAgICAgICAgICAgdmFyIGMgPSAoZGVub3JtYWxpemVkLnggKyBkZW5vbWFsaXplZE5leHQueCkgLyAyO1xuICAgICAgICAgICAgICAgIHZhciBkID0gKGRlbm9ybWFsaXplZC55ICsgZGVub21hbGl6ZWROZXh0LnkpIC8gMjtcbiAgICAgICAgICAgICAgICAvLyBEcmF3IHRoZSBxdWFkcmF0aWMgY3VydmUgdG8gdGhpcyBwb2ludFxuICAgICAgICAgICAgICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyhkZW5vcm1hbGl6ZWQueCwgZGVub3JtYWxpemVkLnksIGMsIGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGp1c3QgZHJhdyBhIHNpbXBsZSBsaW5lXG4gICAgICAgICAgICAgICAgY29udGV4dC5saW5lVG8oZGVub3JtYWxpemVkLngsIGRlbm9ybWFsaXplZC55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgY29udGV4dC5jbGlwKCk7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlKSB7XG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIC8vIFN0cm9rZSBpdC4g1IUo4omW4oyj4omW1IUpXG4gICAgICAgIGlmIChzdHJva2UpXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBbZHJhdyBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBbY29udGV4dCBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRyYXcoY29udGV4dCkge1xuICAgICAgICB0aGlzLmRyYXdQYXRoKGNvbnRleHQsIHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEcmF3cyB0b29sIGd1aWRlc1xuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIFtjb250ZXh0IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZHJhd0d1aWRlcyhjb250ZXh0LCB0YXJnZXQpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUncyBub3RoaW5nIHRvIGRyYXcsIHNob3JjaXJjdWl0LlxuICAgICAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlY3RvciA9IGRlbm9ybWFsaXplKHRoaXMucG9pbnRzW2ldLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGgsIENvbnN0YW50cy5DQU5WQVNfU0laRS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIGRyYXdHdWlkZShjb250ZXh0LCB2ZWN0b3IsIHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBib3VuZGluZ0JveCA9IHRoaXMuZ2V0Qm91bmRpbmdCb3goKTtcbiAgICAgICAgICAgIGRyYXdCb3VuZGluZ0JveChib3VuZGluZ0JveFswXSwgYm91bmRpbmdCb3hbMV0sIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZCBhIHBvaW50IHRvIHRoZSBjYW52YXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3J9ICBsb2NhdGlvbiAgW2xvY2F0aW9uIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgYWRkKGxvY2F0aW9uKSB7XG4gICAgICAgIC8vIFBvaW50cyBhcmUgbm9ybWFsaXplZCB0byB4OiAwLjAgLSAxLjAsIHk6IDAuMCAtIDEuMCwgYXMgdXNpbmcgcGl4ZWwgdmFsdWVzIGlzIHJlc3RyaWN0aXZlXG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gobm9ybWFsaXplKGxvY2F0aW9uLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGgsIENvbnN0YW50cy5DQU5WQVNfU0laRS5oZWlnaHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgd2UncmUgaW50ZXJzZWN0aW5nIGEgdmVjdG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7VmVjdG9yfSAgcG9zaXRpb24gIFtwb3NpdGlvbiBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRJbnRlcmNldGluZ1ZlY3Rvcihwb3NpdGlvbikge1xuICAgICAgICBjb25zdCBzaXplID0gQ29uc3RhbnRzLkdVSURFX1NJWkU7XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm90aGluZyB0byBkcmF3LCBzaG9yY2lyY3VpdC5cbiAgICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZWN0b3IgPSBkZW5vcm1hbGl6ZSh0aGlzLnBvaW50c1tpXSwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydFggPSB2ZWN0b3IueCAtIChzaXplIC8gMik7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRZID0gdmVjdG9yLnkgLSAoc2l6ZSAvIDIpO1xuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbi54ID4gc3RhcnRYICYmIHBvc2l0aW9uLnggPCAoc3RhcnRYICsgc2l6ZSkgJiYgcG9zaXRpb24ueSA+IHN0YXJ0WSAmJiBwb3NpdGlvbi55IDwgKHN0YXJ0WSArIHNpemUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBvaW50c1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogW2dldEJvdW5kaW5nQm94IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICAge1ZlY3RvcltdfSAgcG9zaXRpb24gIFtwb3NpdGlvbiBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkW119ICAgICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGdldEJvdW5kaW5nQm94KCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gQ29uc3RhbnRzLkNBTlZBU19TSVpFLmhlaWdodDtcbiAgICAgICAgbGV0IG1pblggPSB3aWR0aDtcbiAgICAgICAgbGV0IG1pblkgPSBoZWlnaHQ7XG4gICAgICAgIGxldCBtYXhYID0gMDtcbiAgICAgICAgbGV0IG1heFkgPSAwO1xuICAgICAgICBmb3IgKGxldCBwb2ludCBvZiB0aGlzLnBvaW50cykge1xuICAgICAgICAgICAgY29uc3QgZGVub3JtYWxpemVQb2ludCA9IGRlbm9ybWFsaXplKHBvaW50LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIGlmIChkZW5vcm1hbGl6ZVBvaW50LnggPCBtaW5YKVxuICAgICAgICAgICAgICAgIG1pblggPSBkZW5vcm1hbGl6ZVBvaW50Lng7XG4gICAgICAgICAgICBpZiAoZGVub3JtYWxpemVQb2ludC55IDwgbWluWSlcbiAgICAgICAgICAgICAgICBtaW5ZID0gZGVub3JtYWxpemVQb2ludC55O1xuICAgICAgICAgICAgaWYgKGRlbm9ybWFsaXplUG9pbnQueCA+PSBtYXhYKVxuICAgICAgICAgICAgICAgIG1heFggPSBkZW5vcm1hbGl6ZVBvaW50Lng7XG4gICAgICAgICAgICBpZiAoZGVub3JtYWxpemVQb2ludC55ID49IG1heFkpXG4gICAgICAgICAgICAgICAgbWF4WSA9IGRlbm9ybWFsaXplUG9pbnQueTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgbm9ybWFsaXplKG5ldyBWZWN0b3IobWluWCAtICh0aGlzLnNpemUgLyAyKSwgbWluWSAtICh0aGlzLnNpemUgLyAyKSksIHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgICAgbm9ybWFsaXplKG5ldyBWZWN0b3IobWF4WCArICh0aGlzLnNpemUgLyAyKSwgbWF4WSArICh0aGlzLnNpemUgLyAyKSksIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtpc1BvaW50T3ZlciBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGlzUG9pbnRPdmVyKGNvbnRleHQsIHBvaW50ZXIpIHtcbiAgICAgICAgdGhpcy5kcmF3UGF0aChjb250ZXh0LCBmYWxzZSk7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5pc1BvaW50SW5QYXRoKHBvaW50ZXIueCwgcG9pbnRlci55KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dC5pc1BvaW50SW5TdHJva2UocG9pbnRlci54LCBwb2ludGVyLnkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNb3ZlcyBhbiBlbnRpdHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3J9ICB2ZWN0b3IgIFt2ZWN0b3IgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIG1vdmVFbnRpdHkodmVjdG9yKSB7XG4gICAgICAgIGZvciAobGV0IHBvaW50IG9mIHRoaXMucG9pbnRzKSB7XG4gICAgICAgICAgICBwb2ludC5zdWJ0cmFjdCh2ZWN0b3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9lbnRpdHlcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bGwgZXh0ZW5kcyBFbnRpdHkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBzaXplICAgU2l6ZSBvZiB0aGUgZW50aXR5XG4gICAgICogQHBhcmFtICAge0NvbG9yfSAgIGNvbG9yICBDb2xvciBvZiB0aGUgZW50aXR5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZHJhd2luZykge1xuICAgICAgICBzdXBlcignbnVsbCcpO1xuICAgICAgICAvKipcbiAgICAgICAgICogUG9pbnRzIG9mIHRoZSBmcmVlaGFuZCBsaW5lXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge0FycmF5PFZlY3Rvcj59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogRW5hYmxlcyB0aGUgZW50aXR5IHRvIGJlIHNjYWxlZCBhbmQgZGlzcGxheWVkIGF0XG4gICAgICAgICAqIGEgZGlmZmVyZW50IHNpemUsIGllIGluIHRoZSBsYXllcnMgb3ZlcnZpZXcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2NhbGUgPSAxLjA7XG4gICAgICAgIHRoaXMuZHJhd2luZyA9IGRyYXdpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtjb21wbGV0ZSBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHN1cGVyLmNvbXBsZXRlKCk7XG4gICAgICAgIChfYSA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlZHJhd0h1ZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEcmF3IHRoaXMgZW50aXR5IHRvIHRoZSBnaXZlbiBjb250ZXh0LiBDb250YWlucyBhbGwgdGhlXG4gICAgICogbG9naWMgdG8gZHJhdyBhIGZyZWVoYW5kIGxpbmUgb250byBhIGNvbnRleHQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgVGhlIGNhbnZhcyBjb250ZXh0IHRvIGRyYXcgdGhpcyBlbnRpdHkgdG8uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBkcmF3KGNvbnRleHQpIHtcbiAgICAgICAgLy8gTm90IHVzZWRcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEcmF3cyB0b29sIGd1aWRlc1xuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIFtjb250ZXh0IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZHJhd0d1aWRlcyhjb250ZXh0LCB0YXJnZXQpIHtcbiAgICAgICAgLy8gTm90IHVzZWRcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGQgYSBwb2ludCB0byB0aGUgY2FudmFzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7VmVjdG9yfSAgbG9jYXRpb24gIFtsb2NhdGlvbiBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGFkZChsb2NhdGlvbikge1xuICAgICAgICAvLyBOb3QgdXNlZFxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtnZXRJbnRlcmNldGluZ1ZlY3RvciBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3J9ICBwb3NpdGlvbiAgW3Bvc2l0aW9uIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGdldEludGVyY2V0aW5nVmVjdG9yKHBvc2l0aW9uKSB7XG4gICAgICAgIC8vIE5vdCB1c2VkXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogW2dldEJvdW5kaW5nQm94IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICAge1ZlY3RvcjxWZWN0b3I+fSAgcG9zaXRpb24gIFtwb3NpdGlvbiBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkPFZlY3Rvcj59ICAgICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGdldEJvdW5kaW5nQm94KCkge1xuICAgICAgICAvLyBOb3QgdXNlZFxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlzUG9pbnRPdmVyKGNvbnRleHQsIHBvaW50ZXIpIHtcbiAgICAgICAgLy8gTm90IHVzZWRcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBtb3ZlRW50aXR5KHZlY3Rvcikge1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRlbm9ybWFsaXplLCBub3JtYWxpemUgfSBmcm9tIFwiLi4vdXRpbC9ub3JtYWxpemVcIjtcbmltcG9ydCBFbnRpdHkgZnJvbSBcIi4vZW50aXR5XCI7XG5pbXBvcnQgeyBkcmF3Qm91bmRpbmdCb3gsIGRyYXdHdWlkZSB9IGZyb20gXCIuLi91dGlsL2d1aWRlXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0IGV4dGVuZHMgRW50aXR5IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgc2l6ZSAgIFNpemUgb2YgdGhlIGVudGl0eVxuICAgICAqIEBwYXJhbSAgIHtDb2xvcn0gICBjb2xvciAgQ29sb3Igb2YgdGhlIGVudGl0eVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIHN0cm9rZV9jb2xvciwgZmlsbF9jb2xvciwgZHJhd2luZykge1xuICAgICAgICBzdXBlcigncmVjdCcpO1xuICAgICAgICAvKipcbiAgICAgICAgICogUG9pbnRzIG9mIHRoZSBmcmVlaGFuZCBsaW5lXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge0FycmF5PFZlY3Rvcj59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub3JpZ2luID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFtkZXNjcmlwdGlvbl1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogRW5hYmxlcyB0aGUgZW50aXR5IHRvIGJlIHNjYWxlZCBhbmQgZGlzcGxheWVkIGF0XG4gICAgICAgICAqIGEgZGlmZmVyZW50IHNpemUsIGllIGluIHRoZSBsYXllcnMgb3ZlcnZpZXcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2NhbGUgPSAxLjA7XG4gICAgICAgIHRoaXMucm90YXRpb24gPSAwLjAxO1xuICAgICAgICB0aGlzLmRyYXdpbmcgPSBkcmF3aW5nO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLnN0cm9rZV9jb2xvciA9IHN0cm9rZV9jb2xvcjtcbiAgICAgICAgdGhpcy5maWxsX2NvbG9yID0gZmlsbF9jb2xvcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogW2NvbXBsZXRlIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIHN1cGVyLmNvbXBsZXRlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERyYXcgdGhpcyBlbnRpdHkgdG8gdGhlIGdpdmVuIGNvbnRleHQuIENvbnRhaW5zIGFsbCB0aGVcbiAgICAgKiBsb2dpYyB0byBkcmF3IGEgZnJlZWhhbmQgbGluZSBvbnRvIGEgY29udGV4dC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBUaGUgY2FudmFzIGNvbnRleHQgdG8gZHJhdyB0aGlzIGVudGl0eSB0by5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXdQYXRoKGNvbnRleHQsIHN0cm9rZSkge1xuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vdGhpbmcgdG8gZHJhdywgc2hvcmNpcmN1aXQuXG4gICAgICAgIGlmICh0aGlzLm9yaWdpbiAmJiB0aGlzLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW4gPSBkZW5vcm1hbGl6ZSh0aGlzLm9yaWdpbiwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IGRlbm9ybWFsaXplKHRoaXMuZGVzdGluYXRpb24sIGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgLy8gU2V0IHRoZSBzY2FsZSB0byBlcXVhbCB0aGUgZGVmYXVsdFxuICAgICAgICAgICAgbGV0IHNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICAgICAgICAgIC8vIENhY3VsYXRlIHRoZSBzY2FsZSBiYXNlZCBvbiB0aGUgc2l6ZSBvZiB0aGUgY2FudmFzIGNvbnRleHQncyBjYW52YXNcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmNhbnZhcy53aWR0aCAhPT0gQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgc2NhbGUgPSBjb250ZXh0LmNhbnZhcy53aWR0aCAvIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERyYXdcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMuc2l6ZSAqIHNjYWxlO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuc3Ryb2tlX2NvbG9yLmdldEhleCgpO1xuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmZpbGxfY29sb3IuZ2V0SGV4KCk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgICAgICAgICBjb250ZXh0LnJlY3Qob3JpZ2luLngsIG9yaWdpbi55LCAtKG9yaWdpbi54IC0gZGVzdGluYXRpb24ueCksIC0ob3JpZ2luLnkgLSBkZXN0aW5hdGlvbi55KSk7XG4gICAgICAgICAgICAvLyBzYXZlIHRoZSB1bi1jbGlwcGVkIGNvbnRleHQgc3RhdGVcbiAgICAgICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgY2xpcHBpbmcgYXJlYSBmcm9tIHRoZSBwYXRoXG4gICAgICAgICAgICAvLyBBbGwgbmV3IGRyYXdpbmcgd2lsbCBiZSBjb250YWluZWQgaW5zaWRlXG4gICAgICAgICAgICAvLyB0aGUgY2xpcHBpbmcgYXJlYVxuICAgICAgICAgICAgY29udGV4dC5jbGlwKCk7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICAgICAgaWYgKHN0cm9rZSlcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRyYXcoY29udGV4dCkge1xuICAgICAgICB0aGlzLmRyYXdQYXRoKGNvbnRleHQsIHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEcmF3cyB0b29sIGd1aWRlc1xuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIFtjb250ZXh0IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZHJhd0d1aWRlcyhjb250ZXh0LCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRoaXMub3JpZ2luICYmIHRoaXMuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAgIGRyYXdHdWlkZShjb250ZXh0LCBkZW5vcm1hbGl6ZSh0aGlzLm9yaWdpbiwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCksIHRhcmdldCk7XG4gICAgICAgICAgICBkcmF3R3VpZGUoY29udGV4dCwgZGVub3JtYWxpemUodGhpcy5kZXN0aW5hdGlvbiwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCksIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYm91bmRpbmdCb3ggPSB0aGlzLmdldEJvdW5kaW5nQm94KCk7XG4gICAgICAgIGRyYXdCb3VuZGluZ0JveChib3VuZGluZ0JveFswXSwgYm91bmRpbmdCb3hbMV0sIGNvbnRleHQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGQgYSBwb2ludCB0byB0aGUgY2FudmFzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7VmVjdG9yfSAgbG9jYXRpb24gIFtsb2NhdGlvbiBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGFkZChsb2NhdGlvbikge1xuICAgICAgICBjb25zdCBwb2ludCA9IG5vcm1hbGl6ZShsb2NhdGlvbiwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0KTtcbiAgICAgICAgaWYgKCF0aGlzLm9yaWdpbikge1xuICAgICAgICAgICAgdGhpcy5vcmlnaW4gPSBwb2ludDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBwb2ludDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB3ZSdyZSBpbnRlcnNlY3RpbmcgYSB2ZWN0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3J9ICBwb3NpdGlvbiAgW3Bvc2l0aW9uIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGdldEludGVyY2V0aW5nVmVjdG9yKHBvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNpemUgPSBDb25zdGFudHMuR1VJREVfU0laRTtcbiAgICAgICAgaWYgKHRoaXMub3JpZ2luICYmIHRoaXMuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbm9ybWFsX29yaWdpbiA9IGRlbm9ybWFsaXplKHRoaXMub3JpZ2luLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUud2lkdGgsIENvbnN0YW50cy5DQU5WQVNfU0laRS5oZWlnaHQpO1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnggPiAoZGVub3JtYWxfb3JpZ2luLnggLSAoc2l6ZSAvIDIpKSAmJlxuICAgICAgICAgICAgICAgIHBvc2l0aW9uLnggPCAoKGRlbm9ybWFsX29yaWdpbi54IC0gKHNpemUgLyAyKSkgKyBzaXplKSAmJlxuICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgPiAoZGVub3JtYWxfb3JpZ2luLnkgLSAoc2l6ZSAvIDIpKSAmJlxuICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgPCAoKGRlbm9ybWFsX29yaWdpbi55IC0gKHNpemUgLyAyKSkgKyBzaXplKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9yaWdpbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRlbm9ybWFsX2Rlc3RpbmF0aW9uID0gZGVub3JtYWxpemUodGhpcy5kZXN0aW5hdGlvbiwgQ29uc3RhbnRzLkNBTlZBU19TSVpFLndpZHRoLCBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0KTtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbi54ID4gKGRlbm9ybWFsX2Rlc3RpbmF0aW9uLnggLSAoc2l6ZSAvIDIpKSAmJlxuICAgICAgICAgICAgICAgIHBvc2l0aW9uLnggPCAoKGRlbm9ybWFsX2Rlc3RpbmF0aW9uLnggLSAoc2l6ZSAvIDIpKSArIHNpemUpICYmXG4gICAgICAgICAgICAgICAgcG9zaXRpb24ueSA+IChkZW5vcm1hbF9kZXN0aW5hdGlvbi55IC0gKHNpemUgLyAyKSkgJiZcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi55IDwgKChkZW5vcm1hbF9kZXN0aW5hdGlvbi55IC0gKHNpemUgLyAyKSkgKyBzaXplKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBCb3VuZGluZyBib3hcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkW119ICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGdldEJvdW5kaW5nQm94KCkge1xuICAgICAgICBpZiAodGhpcy5vcmlnaW4gJiYgdGhpcy5kZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHJldHVybiBbdGhpcy5vcmlnaW4sIHRoaXMuZGVzdGluYXRpb25dO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElzIHBvaW50IG92ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBbY29udGV4dCBkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7VmVjdG9yfSAgICAgICAgICAgICAgICAgICAgcG9pbnRlciAgW3BvaW50ZXIgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBpc1BvaW50T3Zlcihjb250ZXh0LCBwb2ludGVyKSB7XG4gICAgICAgIHRoaXMuZHJhd1BhdGgoY29udGV4dCwgZmFsc2UpO1xuICAgICAgICBpZiAodGhpcy5maWxsX2NvbG9yLmdldFJnYmEoKVszXSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LmlzUG9pbnRJblBhdGgocG9pbnRlci54LCBwb2ludGVyLnkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0LmlzUG9pbnRJblN0cm9rZShwb2ludGVyLngsIHBvaW50ZXIueSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1vdmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3J9ICB2ZWN0b3IgIFt2ZWN0b3IgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIG1vdmVFbnRpdHkodmVjdG9yKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIChfYSA9IHRoaXMub3JpZ2luKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3VidHJhY3QodmVjdG9yKTtcbiAgICAgICAgKF9iID0gdGhpcy5kZXN0aW5hdGlvbikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnN1YnRyYWN0KHZlY3Rvcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbG9yIGZyb20gXCIuLi91dGlsL2NvbG9yXCI7XG5pbXBvcnQgSHVkSXRlbSBmcm9tIFwiLi9odWRfaXRlbVwiO1xuaW1wb3J0IFBpY2tlciBmcm9tICd2YW5pbGxhLXBpY2tlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvclBpY2tlciBleHRlbmRzIEh1ZEl0ZW0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgdGhlIFBhbGV0dGUgSFVEIGl0ZW1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkcmF3aW5nKSB7XG4gICAgICAgIHN1cGVyKFwicGlja2VyXCIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVmIHRvIHRoZSBkcmF3aW5nXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRyYXdpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLmRyYXdpbmcgPSBkcmF3aW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWlsZCB0aGUgVUksIHRoaXMgZmluZHMgdGhlIEhUTUxEaXZFbGVtZW50IHdpdGggdGhlXG4gICAgICogSUQgYHBhbGV0dGVgIGFuZCBjbGVhcnMgaXQgb3V0LCB0aGVuIHBsYWNlcyBhbm90aGVyXG4gICAgICogSFRNTERpdkVsZW1lbnQgaW5zaWRlIGZvciBldmVyeSBjb2xvciBpbiBgdGhpcy5jb2xvcnNgXG4gICAgICogYW5kIHNldHMgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIGNvbG9yIG9mIGVhY2ggY29sb3IuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFsZXR0ZScpO1xuICAgICAgICBjb25zdCBzdHJva2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3Ryb2tlLmNsYXNzTGlzdC5hZGQoJ2NvbG9yJyk7XG4gICAgICAgIHN0cm9rZS5jbGFzc0xpc3QuYWRkKCdzdHJva2UnKTtcbiAgICAgICAgc3Ryb2tlLnRpdGxlID0gJ1N0cm9rZSBDb2xvcic7XG4gICAgICAgIHN0cm9rZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAoKF9hID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3Ryb2tlX2NvbG9yKS5nZXRIZXgoKTtcbiAgICAgICAgdmFyIHN0cm9rZVBpY2tlciA9IG5ldyBQaWNrZXIoe1xuICAgICAgICAgICAgcGFyZW50OiBzdHJva2UsXG4gICAgICAgICAgICBwb3B1cDogJ3RvcCcsXG4gICAgICAgICAgICBjb2xvcjogKChfYiA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnN0cm9rZV9jb2xvcikuZ2V0SGV4KClcbiAgICAgICAgfSk7XG4gICAgICAgIHN0cm9rZVBpY2tlci5vbkNoYW5nZSA9IChjb2xvcikgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJhd2luZykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbG9yID0gbmV3IENvbG9yKGNvbG9yLnJnYmFbMF0sIGNvbG9yLnJnYmFbMV0sIGNvbG9yLnJnYmFbMl0sIGNvbG9yLnJnYmFbM10pO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2luZy5zdHJva2VfY29sb3IgPSBuZXdDb2xvcjtcbiAgICAgICAgICAgICAgICBzdHJva2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbmV3Q29sb3IuZ2V0SGV4KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRhcmdldCA9PT0gbnVsbCB8fCB0YXJnZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhcmdldC5hcHBlbmRDaGlsZChzdHJva2UpO1xuICAgICAgICBjb25zdCBmaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZpbGwuY2xhc3NMaXN0LmFkZCgnY29sb3InKTtcbiAgICAgICAgZmlsbC5jbGFzc0xpc3QuYWRkKCdmaWxsJyk7XG4gICAgICAgIGZpbGwudGl0bGUgPSAnRmlsbCBDb2xvcic7XG4gICAgICAgIGZpbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gKChfYyA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmZpbGxfY29sb3IpLmdldEhleCgpO1xuICAgICAgICAvLyBBZGQgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIHZhciBmaWxsUGlja2VyID0gbmV3IFBpY2tlcih7XG4gICAgICAgICAgICBwYXJlbnQ6IGZpbGwsXG4gICAgICAgICAgICBwb3B1cDogJ3RvcCcsXG4gICAgICAgICAgICBjb2xvcjogKChfZCA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmZpbGxfY29sb3IpLmdldEhleCgpXG4gICAgICAgIH0pO1xuICAgICAgICBmaWxsUGlja2VyLm9uQ2hhbmdlID0gKGNvbG9yKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5kcmF3aW5nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q29sb3IgPSBuZXcgQ29sb3IoY29sb3IucmdiYVswXSwgY29sb3IucmdiYVsxXSwgY29sb3IucmdiYVsyXSwgY29sb3IucmdiYVszXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3aW5nLmZpbGxfY29sb3IgPSBuZXdDb2xvcjtcbiAgICAgICAgICAgICAgICBmaWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG5ld0NvbG9yLmdldEhleCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0YXJnZXQgPT09IG51bGwgfHwgdGFyZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YXJnZXQuYXBwZW5kQ2hpbGQoZmlsbCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHVkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFycmF5IG9mIGl0ZW1zIHRvIHJlbmRlciBmb3IgdGhlIEh1ZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtBcnJheTxIdWRJdGVtPn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHdlIHdhbnQgdGhlIEhVRCB0byBiZSB2aXNpYmxlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogUG9zaXRpb24gb2YgdGhlIG1vdXNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge1ZlY3Rvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY3Vyc29yX3Bvc2l0aW9uID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV291bGQgcmVuZGVyIGFueSBjYW52YXMgYmFzZWQgaHVkIGl0ZW1zLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyByZW5kZXJpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRleHQpIHtcbiAgICAgICAgLy8gTm90aGluZyBoZXJlIHlldC5cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGN1cnNvciBhbmQgaHVkIGludGVyc2VjdHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBkZWx0YSAgW2RlbHRhIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHByb2Nlc3MoZGVsdGEpIHtcbiAgICAgICAgLy8gTm90aGluZyBoZXJlIHlldC5cbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkIGFuIGl0ZW0gdG8gdGhlIEhVRFxuICAgICAqXG4gICAgICogQHBhcmFtICAge0h1ZEl0ZW19ICBpdGVtICBJdGVtIHRoYXQgaW5oZXJpdHMgZnJvbSB0aGUgSHV0SXRlbSBhYnN0cmFjdCBjbGFzc1xuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgaXRlbS5idWlsZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSByZWZlcmVuY2UgdG8gYSBodWQgaXRlbSBieSBuYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgIG5hbWUgIHRoZSBuYW1lIG9mIHRoZSBodWQgaXRlbSB0byByZXRyaWV2ZVxuICAgICAqXG4gICAgICogQHJldHVybiAge0h1ZEl0ZW18bnVsbH0gICB0aGUgaHVkIGl0ZW0gaWYgZm91bmQgb3RoZXJ3aXNlIG51bGwuXG4gICAgICovXG4gICAgZ2V0QnlOYW1lKG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc1tpXS5uYW1lID09PSBuYW1lKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFja3MgdGhlIGN1cnNvciBwb3NpdGlvbiBmb3IgaHVkIHVzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3J9ICBwb3NpdGlvbiAgUG9zaXRpb24gb2YgdGhlIG1vdXNlLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0Q3Vyc29yUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5jdXJzb3JfcG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIdWRJdGVtIHtcbiAgICAvKipcbiAgICAgKiBIdWQgSXRlbXMgbmVlZCBhIG5hbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBuYW1lICBUaGUgbmFtZSBmb3IgdGhlIGl0ZW1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19XG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsIGFueSB1cGRhdGUgZnVuY3Rpb25zIHRoYXQgbmVlZCB0byBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgSHVkSXRlbSBmcm9tIFwiLi9odWRfaXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXJzIGV4dGVuZHMgSHVkSXRlbSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCB0aGUgbGF5ZXJzIHNlY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtEcmF3aW5nfSAgZHJhd2luZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRyYXdpbmcpIHtcbiAgICAgICAgc3VwZXIoXCJsYXllcnNcIik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIVE1MIERpdiBFbGVtZW50LCB3aGVyZSB0aGUgSFRNTENhbnZhc0VsZW1lbnQgbGF5ZXJzIHdpbGwgYmUgY3JlYXRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7SFRNTERpdkVsZW1lbnQgfCBudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICB0aGlzLnRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXllcnMnKTtcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gZHJhd2luZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgdGhlIGxheWVycyBVSSwgdGhpcyBlbXB0aWVzIHRoZW4gY3JlYXRlc1xuICAgICAqIEhUTUxDYW52YXNFbGVtZW50cyBpbnNpZGUgdGhlIGB0aGlzLnRhcmdldGAgSFRNTERpdkVsZW1lbnRcbiAgICAgKiBUaGlzIGdpdmVzIHVzIHRoZSBsYXllciBvdmVydmlldyBvbiB0aGUgcmlnaHQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyYXdpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy50YXJnZXQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMudGFyZ2V0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCB3aWR0aCA9IENvbnN0YW50cy5MQVlFUlNfV0lEVEg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9ICh3aWR0aCAvIENvbnN0YW50cy5DQU5WQVNfU0laRS53aWR0aCkgKiBDb25zdGFudHMuQ0FOVkFTX1NJWkUuaGVpZ2h0O1xuICAgICAgICBmb3IgKGxldCBba2V5LCBsYXllcl0gb2YgdGhpcy5kcmF3aW5nLmxheWVycykge1xuICAgICAgICAgICAgbGF5ZXIuZHJhdyh0aGlzLnRhcmdldCwgd2lkdGgsIGhlaWdodCwgdGhpcy5kcmF3aW5nLmFjdGl2ZV9sYXllciA9PT0gbGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IE1hcmtlciBmcm9tIFwiLi4vdG9vbHMvbWFya2VyXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi90b29scy9yZWN0YW5nbGVcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4uL3Rvb2xzL3NlbGVjdFwiO1xuaW1wb3J0IFNoYXBlIGZyb20gXCIuLi90b29scy9zaGFwZVwiO1xuaW1wb3J0IEh1ZEl0ZW0gZnJvbSBcIi4vaHVkX2l0ZW1cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xiYXIgZXh0ZW5kcyBIdWRJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkcmF3aW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgICAgICB0aGlzLnRvb2xzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJtYXJrZXJcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJNYXJrZXJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZnJlZWhhbmRfc2hhcGVcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDbG9zZWRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicmVjdFwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlY3RhbmdsZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJNb2RpZnlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyYXdpbmcgcmVmZXJlbmNlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kcmF3aW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gZHJhd2luZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogW3NldFRvb2wgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgdG9vbCAgW3Rvb2wgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBzZXRUb29sKHRvb2wpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICBzd2l0Y2ggKHRvb2wpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0VG9vbChuZXcgU2VsZWN0KHRoaXMuZHJhd2luZykpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWFya2VyJzpcbiAgICAgICAgICAgICAgICAoX2IgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zZXRUb29sKG5ldyBNYXJrZXIodGhpcy5kcmF3aW5nKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdmcmVlaGFuZF9zaGFwZSc6XG4gICAgICAgICAgICAgICAgKF9jID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Muc2V0VG9vbChuZXcgU2hhcGUodGhpcy5kcmF3aW5nKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZWN0JzpcbiAgICAgICAgICAgICAgICAoX2QgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5zZXRUb29sKG5ldyBSZWN0YW5nbGUodGhpcy5kcmF3aW5nKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgdGhlIHRvb2xiYXJcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGJ1aWxkKCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvb2xzXCIpO1xuICAgICAgICBpZiAoIXRhcmdldClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGFyZ2V0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBmb3IgKGxldCB0b29sIG9mIHRoaXMudG9vbHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IHRvb2wudGl0bGU7XG4gICAgICAgICAgICBidXR0b24uaWQgPSB0b29sLmtleTtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb29sKHRvb2wua2V5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllciB7XG4gICAgLyoqXG4gICAgICogU2V0IHVwIHRoZSBMYXllclxuICAgICAqXG4gICAgICogQHBhcmFtICAge0RyYXdpbmd9ICBkcmF3aW5nICBEcmF3aW5nIHJlZmVyZW5jZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlkLCBkcmF3aW5nKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIExheWVycyBJRFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlkID0gLTE7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgZHJhd24gZW50aXRpZXMsIHRoZXNlIHdpbGwgYWxsIGdldFxuICAgICAgICAgKiBwcm9jZXNzZWQgYW5kIHJlbmRlcmVkIHdoZW4gdGhlIG5lZWQgdG8gYmVcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciAge01hcDxudW1iZXIsIEVudGl0eT59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmVudGl0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGFjdGl2ZSBlbnRpdHlcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7RW50aXR5IHwgbnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWN0aXZlX2VudGl0eSA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyB0aGVyZSBhbiBlbnRpdHkgYmVpbmcgdGFyZ2V0ZWQgaW4gZWRpdCBtb2RlP1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5lbnRpdHlUYXJnZXRlZCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbnRpdHkgaW5jcmVtZW50YWwgbnVtYmVyLCB1c2VkIHRvIHRyYWNrIHVuaXF1ZSBudW1lcmljYWxcbiAgICAgICAgICogaWQgb2YgYWxsIGVudGl0aWVzIGxvYWRlZCBvbnRvIHRoZSBjYW52YXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5lbnRpdHlfaWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVmZXJlbmNlIHRvIHRoZSBtYWluIERyYXdpbmdcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7RHJhd2luZyB8IG51bGx9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRyYXdpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuZHJhd2luZyA9IGRyYXdpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZW50aXR5IHRvIHRoZSBnYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7RW50aXR5fSAgZW50aXR5ICBFbnRpdHkgdG8gYWRkIHRvIHRoZSBnYW1ld29ybGRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGFkZEVudGl0eShlbnRpdHkpIHtcbiAgICAgICAgZW50aXR5LmlkID0gdGhpcy5lbnRpdHlfaWQ7XG4gICAgICAgIGVudGl0eS5kcmF3aW5nID0gdGhpcy5kcmF3aW5nO1xuICAgICAgICB0aGlzLmVudGl0aWVzLnNldCh0aGlzLmVudGl0eV9pZCwgZW50aXR5KTtcbiAgICAgICAgdGhpcy5lbnRpdHlfaWQgKz0gMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2FyYmFnZSBjbGVhbiB1cCwgcmVtb3ZlcyBhbnkgZW50aXRpZXMgdGhhdCBhcmUgc2NoZWR1bGUgZm9yIHJlbW92YWxcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbW92ZUVudGl0aWVzKCkge1xuICAgICAgICBjb25zdCBpZHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgW2tleSwgZW50aXR5XSBvZiB0aGlzLmVudGl0aWVzKSB7XG4gICAgICAgICAgICBpZiAoZW50aXR5LnJlbW92ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50aXRpZXMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBFbnRpdHkgZ2l2ZW4gYW4gSURcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBpZCAgRW50aXRpIG51bWVyaWNhbCBJRFxuICAgICAqXG4gICAgICogQHJldHVybiAge0VudGl0eX1cbiAgICAgKi9cbiAgICBnZXRFbnRpdHkoaWQpIHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy5lbnRpdGllcy5nZXQoaWQpO1xuICAgICAgICBpZiAoZW50aXR5KVxuICAgICAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBjb3VudCBvZiBlbnRpdGVzIGJ5IHR5cGUsIGlmIG5vIHR5cGUgc3BlY2lmaWVkLFxuICAgICAqIHRoZW4gcmV0dW5yIGNvdW50IG9mIGFsbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICB0eXBlICBFbnRpdHkgVHlwZXxOYW1lIFtvcHRpb25hbF1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtudW1iZXJ9ICAgICAgICBOdW1iZXIgb2YgZW50aXRpZXNcbiAgICAgKi9cbiAgICBjb3VudEVudGl0aWVzKHR5cGUpIHtcbiAgICAgICAgLy8gTm8gdHlwZSBzcGVjaWZpY2UsIHNvIGluY2x1ZGUgYWxsIGVudGl0aWVzLlxuICAgICAgICBpZiAoIXR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbnRpdGllcy5zaXplO1xuICAgICAgICAvLyBBIHR5cGUgd2FzIHNwZWNpZmllZCwgc28gY2hlY2sgdHlwZSBiZWZvcmUgYWRkaW5nXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAobGV0IFtrZXksIGVudGl0eV0gb2YgdGhpcy5lbnRpdGllcykge1xuICAgICAgICAgICAgaWYgKGVudGl0eS5uYW1lID09IHR5cGUgJiYgZW50aXR5LnJlbW92ZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIGFueSB1cGRhdGVzIHRoYXQgbmVlZCB0byBiZSByZW5kZXJlZCBuZXh0IHRpY2suIFdlXG4gICAgICogaGF2ZSB0aGUgYWJpbGl0eSB0byByZW1vdmUgdGhlIGVudGl0aWVzIG9uZSBieSBvbmUuIFRoYXQnc1xuICAgICAqIHN0aWxsIGEgVE9ETyB0aG91Z2guXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgICAgICAgICAgICAgIGRlbHRhdGltZSAgICAgICAgVGhlIHRpbWUgc2luY2UgbGFzdCB0aWNrXG4gICAgICogQHBhcmFtICAge0RPTUhpZ2hSZXNUaW1lU3RhbXB9ICB0aW1lc3RhbXAgICAgICAgIEN1cnJlbnQgdGltZXN0YW1wXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm9jZXNzKGRlbHRhdGltZSwgdGltZXN0YW1wKSB7XG4gICAgICAgIGZvciAobGV0IFtrZXksIGVudGl0eV0gb2YgdGhpcy5lbnRpdGllcykge1xuICAgICAgICAgICAgaWYgKGVudGl0eS5yZW1vdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0aWVzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhbGwgdGhlIHJlbmRlcmluZyBmb3IgdGhpcyBsYXllcnMgZW50aXRpZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBUaGUgY2FudmFzIGNvbnRleHQgZm9yIGFwcGx5aW5nIHRoZSBlbnRpdHkgcmVkZXJzIHRvXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICByZW5kZXIoY29udGV4dCkge1xuICAgICAgICAvLyBSZW5kZXIgZWFjaCBvZiB0aGUgZXhpc3RpbmcgZW50aXRpdGVzLiAoRHJhd2luZ3MpXG4gICAgICAgIGZvciAobGV0IFtrZXksIGVudGl0eV0gb2YgdGhpcy5lbnRpdGllcykge1xuICAgICAgICAgICAgZW50aXR5LnJlbmRlcihjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBVSSBkcmF3aW5nIG9mIGEgbGF5ZXIgaW4gdGhlIGxheWVyIG92ZXJ2aWV3XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7SFRNTERpdkVsZW1lbnR9ICAgICBwYXJlbnQgIFRoZSBEaXYgZWxlbWVudCB0byByZW5kZXIgaW50b1xuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICAgICAgICAgICAgIHdpZHRoICAgVGhlIHRhcmdldCB3aWR0aCBvZiB0aGUgY2FudmFzXG4gICAgICogQHBhcmFtICAge251bWJlcn0gICAgICAgICAgICAgaGVpZ2h0ICBUaGUgdGFyZ2V0IGhlaWdodCBvZiB0aGUgY2FudmFzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBkcmF3KHBhcmVudCwgd2lkdGgsIGhlaWdodCwgYWN0aXZlKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbmV3IENhbnZhcyBFbGVtZW50XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIC8vIFNldCBhbGwgaXQncyBwcm9wZXJ0aWVzXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjYW52YXMuaWQgPSBgbGF5ZXItJHt0aGlzLmlkfWA7XG4gICAgICAgIGNhbnZhcy5jbGFzc0xpc3QuYWRkKCdsYXllcicpO1xuICAgICAgICAvLyBMaXN0ZW4gZm9yIHRoZSBzZWxlY3RlZCBsYXllciBjbGlja1xuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIChfYSA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldEFjdGl2ZUxheWVyKHRoaXMuaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gU2V0IHRoZSBhY3RpdmUgY2xhc3MgaWYgaXQncyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG9uZS5cbiAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgY2FudmFzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5ld2VyIGxheWVycyBnbyBvbiB0b3AsIHNvIGBpbnNlcnRCZWZvcmVgIGlzIHVzZWRcbiAgICAgICAgcGFyZW50ID09PSBudWxsIHx8IHBhcmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50Lmluc2VydEJlZm9yZShjYW52YXMsIHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgICAgLy8gR2V0IHRoZSBjb250ZXh0IGZvciByZW5kZXJpbmdcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBpZiAoY29udGV4dCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBSZW5kZXIgZWFjaCBvZiB0aGUgZW50aXRpZXMgdG8gdGhlIG5ldyBIVE1MQ2FudmFzRWxlbWVudFxuICAgICAgICBmb3IgKGxldCBba2V5LCBlbnRpdHldIG9mIHRoaXMuZW50aXRpZXMpIHtcbiAgICAgICAgICAgIGVudGl0eS5yZW5kZXIoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogW2RyYXdHdWlkZXMgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgW2NvbnRleHQgZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge1ZlY3Rvcn0gICAgICAgICAgICAgICAgICAgIHRhcmdldCAgIFt0YXJnZXQgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkcmF3R3VpZGVzKGNvbnRleHQsIHRhcmdldCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgbGV0IHNlbGVjdGVkX3ZlY3RvcjtcbiAgICAgICAgbGV0IHBvaW50ZXJPdmVyRW50aXR5ID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgW2tleSwgZW50aXR5XSBvZiB0aGlzLmVudGl0aWVzKSB7XG4gICAgICAgICAgICBlbnRpdHkuZHJhd0d1aWRlcyhjb250ZXh0LCB0YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgcG9pbnRlck92ZXIgPSBlbnRpdHkuaXNQb2ludE92ZXIoY29udGV4dCwgdGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChwb2ludGVyT3Zlcikge1xuICAgICAgICAgICAgICAgIHBvaW50ZXJPdmVyRW50aXR5ID0gZW50aXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzZWxlY3RlZF92ZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZF92ZWN0b3IgPSBlbnRpdHkuZ2V0SW50ZXJjZXRpbmdWZWN0b3IodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocG9pbnRlck92ZXJFbnRpdHkpIHtcbiAgICAgICAgICAgIGlmIChwb2ludGVyT3ZlckVudGl0eSAhPT0gdGhpcy5lbnRpdHlUYXJnZXRlZCkge1xuICAgICAgICAgICAgICAgIC8vaWYgKCEodGhpcy5kcmF3aW5nPy50b29sIGFzIFNlbGVjdCkuc2VsZWN0ZWRfdmVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRpdHlUYXJnZXRlZCA9IHBvaW50ZXJPdmVyRW50aXR5O1xuICAgICAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbnRpdHlUYXJnZXRlZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQ29uc3RhbnRzLkNBTlZBU19UQVJHRVQpO1xuICAgICAgICBpZiAodGhpcy5lbnRpdHlUYXJnZXRlZCkge1xuICAgICAgICAgICAgaWYgKGNhbnZhcylcbiAgICAgICAgICAgICAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNhbnZhcylcbiAgICAgICAgICAgICAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3RlZF92ZWN0b3IpIHtcbiAgICAgICAgICAgIGlmICghKChfYSA9IHRoaXMuZHJhd2luZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvb2wpLnNlbGVjdGVkX3ZlY3Rvcikge1xuICAgICAgICAgICAgICAgICgoX2IgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50b29sKS5zZWxlY3RlZF92ZWN0b3IgPSBzZWxlY3RlZF92ZWN0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAoKF9jID0gdGhpcy5kcmF3aW5nKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9vbCkuc2VsZWN0ZWRfdmVjdG9yID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBGcmVlaGFuZCBmcm9tIFwiLi4vZW50aXRpZXMvZnJlZWhhbmRcIjtcbmltcG9ydCBUb29sIGZyb20gXCIuL3Rvb2xcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlciBleHRlbmRzIFRvb2wge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgbWFya2VyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZHJhd2luZykge1xuICAgICAgICBzdXBlcihkcmF3aW5nLCAnbWFya2VyJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoaWxlIGRyYXdpbmcgKG1vdXNlZG93bikgY29uc3RhbnRseSBhZGQgdGhlIGN1cnJlbnQgY3Vyc29yXG4gICAgICogbG9jYXRpb24gdG8gdGhlIGFjdGl2ZSBlbnRpdHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBDYW52YXMgcmVkZXJpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgZHJhdyhjb250ZXh0KSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZV9lbnRpdHkpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX2VudGl0eS5hZGQodGhpcy5sb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZW50aXR5IHRoaXMgYFRvb2xgIGNyZWF0ZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7RW50aXR5fSAgVGhlIGVudGl0eSB0byBiZSBhZGRlZCB0byB0aGUgbGF5ZXJcbiAgICAgKi9cbiAgICBnZXRFbnRpdHkoZHJhd2luZykge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuZHJhd2luZy5nZXRDb2xvcigpO1xuICAgICAgICByZXR1cm4gbmV3IEZyZWVoYW5kKHRoaXMuc2l6ZSwgdGhpcy5kcmF3aW5nLnN0cm9rZV9jb2xvciwgdGhpcy5kcmF3aW5nLmZpbGxfY29sb3IsIHRoaXMuZHJhd2luZyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFRvb2wgZnJvbSBcIi4vdG9vbFwiO1xuaW1wb3J0IFJlY3QgZnJvbSBcIi4uL2VudGl0aWVzL3JlY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFRvb2wge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgbWFya2VyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZHJhd2luZykge1xuICAgICAgICBzdXBlcihkcmF3aW5nLCAncmVjdGFuZ2xlJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoaWxlIGRyYXdpbmcgKG1vdXNlZG93bikgY29uc3RhbnRseSBhZGQgdGhlIGN1cnJlbnQgY3Vyc29yXG4gICAgICogbG9jYXRpb24gdG8gdGhlIGFjdGl2ZSBlbnRpdHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBDYW52YXMgcmVkZXJpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgZHJhdyhjb250ZXh0KSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZV9lbnRpdHkpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX2VudGl0eS5hZGQodGhpcy5sb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZW50aXR5IHRoaXMgYFRvb2xgIGNyZWF0ZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7RW50aXR5fSAgVGhlIGVudGl0eSB0byBiZSBhZGRlZCB0byB0aGUgbGF5ZXJcbiAgICAgKi9cbiAgICBnZXRFbnRpdHkoZHJhd2luZykge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuZHJhd2luZy5nZXRDb2xvcigpO1xuICAgICAgICByZXR1cm4gbmV3IFJlY3QodGhpcy5zaXplLCB0aGlzLmRyYXdpbmcuc3Ryb2tlX2NvbG9yLCB0aGlzLmRyYXdpbmcuZmlsbF9jb2xvciwgdGhpcy5kcmF3aW5nKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgVG9vbCBmcm9tIFwiLi90b29sXCI7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcbmltcG9ydCBOdWxsIGZyb20gXCIuLi9lbnRpdGllcy9udWxsXCI7XG5pbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tIFwiLi4vdXRpbC9ub3JtYWxpemVcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIFRvb2wge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgbWFya2VyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZHJhd2luZykge1xuICAgICAgICBzdXBlcihkcmF3aW5nLCAnc2VsZWN0Jyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXJyZW50bHkgc2VsZWN0ZWQgdmVkY3RvciBpZiBhbnlcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7VmVjdG9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZWxlY3RlZF92ZWN0b3IgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGluaXRhbCBwb2ludCB3aGVyZSB3ZSBzdGFydGVkIGRyYXdpbmdcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW5pdGlhbF9wb2ludCA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtzZXRMb2NhdGlvbiBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtWZWN0b3J9ICBsb2NhdGlvbiAgW2xvY2F0aW9uIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9ICAgICAgICAgICAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHN0YXJ0RHJhd2luZyhsb2NhdGlvbikge1xuICAgICAgICBzdXBlci5zdGFydERyYXdpbmcobG9jYXRpb24pO1xuICAgICAgICBpZiAoIXRoaXMuaW5pdGlhbF9wb2ludClcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbF9wb2ludCA9IGxvY2F0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGlsZSBkcmF3aW5nIChtb3VzZWRvd24pIGNvbnN0YW50bHkgYWRkIHRoZSBjdXJyZW50IGN1cnNvclxuICAgICAqIGxvY2F0aW9uIHRvIHRoZSBhY3RpdmUgZW50aXR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIHJlZGVyaW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXcoY29udGV4dCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkX2xvY2F0aW9uID0gbm9ybWFsaXplKHRoaXMubG9jYXRpb24sIGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZF92ZWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfdmVjdG9yLnggPSBub3JtYWxpemVkX2xvY2F0aW9uLng7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkX3ZlY3Rvci55ID0gbm9ybWFsaXplZF9sb2NhdGlvbi55O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKChfYSA9IHRoaXMuZHJhd2luZy5hY3RpdmVfbGF5ZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5lbnRpdHlUYXJnZXRlZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluaXRpYWxfcG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlmZmVyZW5jZVZlYyA9IG5vcm1hbGl6ZShuZXcgVmVjdG9yKHRoaXMuaW5pdGlhbF9wb2ludC54IC0gdGhpcy5sb2NhdGlvbi54LCB0aGlzLmluaXRpYWxfcG9pbnQueSAtIHRoaXMubG9jYXRpb24ueSksIGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAoX2IgPSB0aGlzLmRyYXdpbmcuYWN0aXZlX2xheWVyKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZW50aXR5VGFyZ2V0ZWQubW92ZUVudGl0eShkaWZmZXJlbmNlVmVjKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsX3BvaW50ID0gdGhpcy5sb2NhdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RvcHMgZHJhd2luZywgYWRkcyBlbmV0aXR5IGNvbXBsZXRlIHRpbWUsIGFkZHMgdGhlXG4gICAgICogZW50aXR5IHRvIHRoZSBkcmF3aW5nLCB3aGljaCB3aWxsIHBhc3MgaXQgdG8gdGhlXG4gICAgICogYWN0aXZlIGxheWVyYW5kIHJlc2V0cyB0aGUgYWN0aXZlIGVudGl0eS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHN0b3BEcmF3aW5nKCkge1xuICAgICAgICBzdXBlci5zdG9wRHJhd2luZygpO1xuICAgICAgICB0aGlzLmluaXRpYWxfcG9pbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGVkX3ZlY3RvciA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIHRvb2wgdGFyZ2V0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIGRyYXdpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgZHJhd1RhcmdldChjb250ZXh0KSB7XG4gICAgICAgIC8vIHZvaWRcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZW50aXR5IHRoaXMgYFRvb2xgIGNyZWF0ZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7RW50aXR5fSAgVGhlIGVudGl0eSB0byBiZSBhZGRlZCB0byB0aGUgbGF5ZXJcbiAgICAgKi9cbiAgICBnZXRFbnRpdHkoZHJhd2luZykge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuZHJhd2luZy5nZXRDb2xvcigpO1xuICAgICAgICByZXR1cm4gbmV3IE51bGwoZHJhd2luZyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEZyZWVoYW5kIGZyb20gXCIuLi9lbnRpdGllcy9mcmVlaGFuZFwiO1xuaW1wb3J0IFRvb2wgZnJvbSBcIi4vdG9vbFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcGUgZXh0ZW5kcyBUb29sIHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIG1hcmtlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRyYXdpbmcpIHtcbiAgICAgICAgc3VwZXIoZHJhd2luZywgJ2ZyZWVoYW5kX3NoYXBlJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoaWxlIGRyYXdpbmcgKG1vdXNlZG93bikgY29uc3RhbnRseSBhZGQgdGhlIGN1cnJlbnQgY3Vyc29yXG4gICAgICogbG9jYXRpb24gdG8gdGhlIGFjdGl2ZSBlbnRpdHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBDYW52YXMgcmVkZXJpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgZHJhdyhjb250ZXh0KSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZV9lbnRpdHkpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX2VudGl0eS5hZGQodGhpcy5sb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZW50aXR5IHRoaXMgYFRvb2xgIGNyZWF0ZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7RW50aXR5fSAgVGhlIGVudGl0eSB0byBiZSBhZGRlZCB0byB0aGUgbGF5ZXJcbiAgICAgKi9cbiAgICBnZXRFbnRpdHkoZHJhd2luZykge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuZHJhd2luZy5nZXRDb2xvcigpO1xuICAgICAgICByZXR1cm4gbmV3IEZyZWVoYW5kKHRoaXMuc2l6ZSwgdGhpcy5kcmF3aW5nLnN0cm9rZV9jb2xvciwgdGhpcy5kcmF3aW5nLmZpbGxfY29sb3IsIHRoaXMuZHJhd2luZywgdHJ1ZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XG5pbXBvcnQgZHJhd0NpcmNsZSBmcm9tIFwiLi4vdXRpbC9jaXJjbGVcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiLi4vdXRpbC9jb2xvclwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtICAge0RyYXdpbmd9ICBkcmF3aW5nICBNYWluIGRyYXdpbmcgY2FudmFzXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICBuYW1lICAgICBUaGUgbmFtZSBvZiB0aGUgdG9vbFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRyYXdpbmcsIG5hbWUpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5hbWUgb2YgdGhlIHRvb2xcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gJyc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaWR0aCBvZiB0aGUgdG9vbFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNpemUgPSAyMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRhcmdldCBDb2xvclxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtDb2xvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGFyZ2V0X2NvbG9yID0gbmV3IENvbG9yKDEyOCwgMTI4LCAyNTUsIDAuMik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMb2NhdGlvbiBvZiB0aGUgdG9vbFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtWZWN0b3J9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbmV3IFZlY3RvcigwLCAwKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHRoZSB0b29sIGRvd24gKGRyYXdpbmcpXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlzX2RyYXdpbmcgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjdXJyZW50IGVudGl0eSBiZWluZyBkcmF3blxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtFbnRpdHkgfCBudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hY3RpdmVfZW50aXR5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gZHJhd2luZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0J3MgdGhlIGxvY2F0aW9uIG9mIHRoZSB0b29sXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7VmVjdG9yfSAgbG9jYXRpb24gIExvY2F0aW9uIG9mIHRoZSB0b29sXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXRMb2NhdGlvbihsb2NhdGlvbikge1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0YXJ0IGRyYXdpbmcsIGNyZWF0ZSB0aGUgdG9vbCdzIGBFbnRpdHlgIGFuZFxuICAgICAqIHNldHMgaXQgYXMgYWN0aXZlLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc3RhcnREcmF3aW5nKGxvY2F0aW9uKSB7XG4gICAgICAgIHRoaXMuc2V0SXNEcmF3aW5nKHRydWUpO1xuICAgICAgICB0aGlzLmFjdGl2ZV9lbnRpdHkgPSB0aGlzLmdldEVudGl0eSh0aGlzLmRyYXdpbmcpO1xuICAgICAgICB0aGlzLnNldExvY2F0aW9uKGxvY2F0aW9uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgc2l6ZSBvZiB0aGUgYnJ1c2gvbGluZS9zdHJva2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBzaXplICBTaXplIGluIHBpeGVscyBvZiB0aGUgcmFkaXVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXRTaXplKHNpemUpIHtcbiAgICAgICAgaWYgKHNpemUgPiAwKVxuICAgICAgICAgICAgdGhpcy5zaXplID0gTWF0aC5taW4oc2l6ZSwgMTAwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RvcHMgZHJhd2luZywgYWRkcyBlbmV0aXR5IGNvbXBsZXRlIHRpbWUsIGFkZHMgdGhlXG4gICAgICogZW50aXR5IHRvIHRoZSBkcmF3aW5nLCB3aGljaCB3aWxsIHBhc3MgaXQgdG8gdGhlXG4gICAgICogYWN0aXZlIGxheWVyYW5kIHJlc2V0cyB0aGUgYWN0aXZlIGVudGl0eS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHN0b3BEcmF3aW5nKCkge1xuICAgICAgICB0aGlzLnNldElzRHJhd2luZyhmYWxzZSk7XG4gICAgICAgIGlmICghdGhpcy5hY3RpdmVfZW50aXR5KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBSdW4gdGhlIGNvbXBsZXRpb24gZnVuY3Rpb25zXG4gICAgICAgIHRoaXMuYWN0aXZlX2VudGl0eS5jb21wbGV0ZSgpO1xuICAgICAgICAvLyBJZiBub3QgdGhlIHNwZWNpYWwgZW50aXR5XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZV9lbnRpdHkubmFtZSAhPT0gXCJudWxsXCIpIHtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgY29tcGxldGVkIGVudGl0eSB0byB0aGUgZHJhd2luZ1xuICAgICAgICAgICAgdGhpcy5kcmF3aW5nLmFkZEVudGl0eSh0aGlzLmFjdGl2ZV9lbnRpdHkpO1xuICAgICAgICAgICAgLy8gcmVzZXQgdGhlIGFjdGl2ZSBlbnRpdHlcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlX2VudGl0eSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZHJhd2luZyBzdGF0ZSBvZiB0aGUgdG9vbFxuICAgICAqXG4gICAgICogQHBhcmFtICAge2Jvb2xlYW59ICBzdGF0ZSAgSXMgdGhlIHRvb2wgZHJhd2luZ1xuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0SXNEcmF3aW5nKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuaXNfZHJhd2luZyA9IHN0YXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEcmF3IHRoZSB0b29sIHRhcmdldFxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyBkcmF3aW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXdUYXJnZXQoY29udGV4dCkge1xuICAgICAgICBkcmF3Q2lyY2xlKGNvbnRleHQsIHRoaXMubG9jYXRpb24sIHRoaXMudGFyZ2V0X2NvbG9yLCB0aGlzLnNpemUpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogRHJhdyBhIGNpcmNsZSBvbiB0aGUgY29udGV4dCBnaXZlblxuICpcbiAqIEB2YXIge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgICBDYW52YXMgcmVuZGVyaW5nIGNvbnRleHQgdG8gZHJhdyB3aXRoXG4gKiBAdmFyIHtWZWMyLlZlY3Rvcn0gICAgICAgICAgICAgICBsb2NhdGlvbiAgV2hlcmUgdG8gZHJhdyB0aGUgY2lyY2xlXG4gKiBAdmFyIHtDb2xvcn0gICAgICAgICAgICAgICAgICAgICBjb2xvciAgICAgQ29sb3IgdG8gZHJhdyB3aXRoXG4gKiBAdmFyIHtudW1iZXJ9ICAgICAgICAgICAgICAgICAgICBzaXplICAgICAgRGlhbWV0ZXIgaW4gcGl4ZWxzXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYXdDaXJjbGUoY29udGV4dCwgbG9jYXRpb24sIGNvbG9yLCBzaXplKSB7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmFyYyhsb2NhdGlvbi54LCBsb2NhdGlvbi55LCBNYXRoLnJvdW5kKHNpemUgLyAyKSwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yLmdldFJnYlN0cmluZygpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3IuZ2V0UmdiU3RyaW5nKCk7XG4gICAgY29udGV4dC5zdHJva2UoKTtcbn1cbiIsIi8qKlxuICogQ29sb3VyIGhlbHBlciwgdXNlZnVsIGZvciBjb252ZXJ0aW5nIGJldHdlZW4gY29sb3VyIGZvcm1hdHMuXG4gKiBUaGlzIGlzIHByb2JhYmx5IG5vdCByZWFsbHkgbmVlZGVkIGZvciB0aGUgVFMvSlMgdmVyc2lvbiBidXQgaXNcbiAqIG1vcmUgb2YgYSBoYW5nb3ZlciBmcm9tIHRoZSBEYXJ0IHZlcnNpb24gb2YgdGhlIGdhbWUuIFdhcyBnb29kXG4gKiBsZWFybmluZyBjb252ZXJ0aW5nIGl0IHRvIGphdmFzY3JpcHQvdHlwZXNjcmlwdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3Ige1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICByICByZWQgWzAgLSAyNTVdXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIGcgIGdyZWVuIFswIC0gMjU1XVxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBiICBibHVlIFswIC0gMjU1XVxuICAgICAqIEBwYXJhbSAgIHtudW1iZXI/fSAgYSAgYWxwaGEgWzAuMCAtIDEuMF1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyLCBnLCBiLCBhID0gMS4wKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiByZWRcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGdyZWVuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZyA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBibHVlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYiA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhbHBoYVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmEgPSAwLjA7XG4gICAgICAgIHRoaXMuciA9IHI7XG4gICAgICAgIHRoaXMuZyA9IGc7XG4gICAgICAgIHRoaXMuYiA9IGI7XG4gICAgICAgIHRoaXMuYSA9IGE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgUkdCIHZhbHVlc1xuICAgICAqXG4gICAgICogQHJldHVybiAge0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgZ2V0UmdiKCkge1xuICAgICAgICByZXR1cm4gW3RoaXMuciwgdGhpcy5nLCB0aGlzLmJdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIFJHQiB2YWx1ZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtBcnJheTxudW1iZXI+fVxuICAgICAqL1xuICAgIGdldFJnYmEoKSB7XG4gICAgICAgIHJldHVybiBbdGhpcy5yLCB0aGlzLmcsIHRoaXMuYiwgdGhpcy5hXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBSR0IgdmFsdWVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7QXJyYXk8bnVtYmVyPn1cbiAgICAgKi9cbiAgICBnZXRSZ2JTdHJpbmcod2l0aEFscGhhID0gdHJ1ZSkge1xuICAgICAgICBpZiAod2l0aEFscGhhID09PSB0cnVlKVxuICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7dGhpcy5yfSwgJHt0aGlzLmd9LCAke3RoaXMuYn0sICR7dGhpcy5hfSlgO1xuICAgICAgICByZXR1cm4gYHJnYigke3RoaXMucn0sICR7dGhpcy5nfSwgJHt0aGlzLmJ9KWA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBhcnJheSBvZiBIU0wgdmFsdWVzXG4gICAgICpcbiAgICAgKiBGcm9tOiBodHRwczovL2Nzcy10cmlja3MuY29tL2NvbnZlcnRpbmctY29sb3Itc3BhY2VzLWluLWphdmFzY3JpcHQvXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7QXJyYXk8bnVtYmVyPn1cbiAgICAgKi9cbiAgICBnZXRIc2woKSB7XG4gICAgICAgIC8vIE1ha2UgciwgZywgYW5kIGIgZnJhY3Rpb25zIG9mIDFcbiAgICAgICAgY29uc3QgciA9IHRoaXMuciAvIDI1NTtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMuZyAvIDI1NTtcbiAgICAgICAgY29uc3QgYiA9IHRoaXMuYiAvIDI1NTtcbiAgICAgICAgLy8gRmluZCBncmVhdGVzdCBhbmQgc21hbGxlc3QgY2hhbm5lbCB2YWx1ZXNcbiAgICAgICAgbGV0IGNtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICAgICAgbGV0IGNtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICAgICAgbGV0IGRlbHRhID0gY21heCAtIGNtaW47XG4gICAgICAgIGxldCBoID0gMDtcbiAgICAgICAgbGV0IHMgPSAwO1xuICAgICAgICBsZXQgbCA9IDA7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBodWVcbiAgICAgICAgLy8gTm8gZGlmZmVyZW5jZVxuICAgICAgICBpZiAoZGVsdGEgPT0gMCkge1xuICAgICAgICAgICAgaCA9IDA7XG4gICAgICAgICAgICAvLyBSZWQgaXMgbWF4XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY21heCA9PSByKSB7XG4gICAgICAgICAgICBoID0gKChnIC0gYikgLyBkZWx0YSkgJSA2O1xuICAgICAgICAgICAgLy8gR3JlZW4gaXMgbWF4XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY21heCA9PSBnKSB7XG4gICAgICAgICAgICBoID0gKGIgLSByKSAvIGRlbHRhICsgMjtcbiAgICAgICAgICAgIC8vIEJsdWUgaXMgbWF4XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoID0gKHIgLSBnKSAvIGRlbHRhICsgNDtcbiAgICAgICAgfVxuICAgICAgICBoID0gTWF0aC5yb3VuZChoICogNjApO1xuICAgICAgICAvLyBNYWtlIG5lZ2F0aXZlIGh1ZXMgcG9zaXRpdmUgYmVoaW5kIDM2MMKwXG4gICAgICAgIGlmIChoIDwgMCkge1xuICAgICAgICAgICAgaCArPSAzNjA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2FsY3VsYXRlIGxpZ2h0bmVzc1xuICAgICAgICBsID0gKGNtYXggKyBjbWluKSAvIDI7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBzYXR1cmF0aW9uXG4gICAgICAgIHMgPSBkZWx0YSA9PSAwID8gMCA6IGRlbHRhIC8gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKTtcbiAgICAgICAgLy8gTXVsdGlwbHkgbCBhbmQgcyBieSAxMDBcbiAgICAgICAgcyA9ICsocyAqIDEwMCkudG9GaXhlZCgxKTtcbiAgICAgICAgbCA9ICsobCAqIDEwMCkudG9GaXhlZCgxKTtcbiAgICAgICAgcmV0dXJuIFtoLCBzLCBsXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIEhFWCB2YWx1ZSBvZiBjb2xvdXIgKGlubGN1ZGluZyBhbHBoYSlcbiAgICAgKlxuICAgICAqIEZyb206IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vY29udmVydGluZy1jb2xvci1zcGFjZXMtaW4tamF2YXNjcmlwdC9cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SGV4KHdpdGhBbHBoYSA9IHRydWUpIHtcbiAgICAgICAgbGV0IHIgPSB0aGlzLnIudG9TdHJpbmcoMTYpO1xuICAgICAgICBsZXQgZyA9IHRoaXMuZy50b1N0cmluZygxNik7XG4gICAgICAgIGxldCBiID0gdGhpcy5iLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgbGV0IGEgPSBNYXRoLnJvdW5kKCh0aGlzLmEgKiAyNTUpKS50b1N0cmluZygxNik7XG4gICAgICAgIGlmIChyLmxlbmd0aCA9PSAxKVxuICAgICAgICAgICAgciA9IFwiMFwiICsgcjtcbiAgICAgICAgaWYgKGcubGVuZ3RoID09IDEpXG4gICAgICAgICAgICBnID0gXCIwXCIgKyBnO1xuICAgICAgICBpZiAoYi5sZW5ndGggPT0gMSlcbiAgICAgICAgICAgIGIgPSBcIjBcIiArIGI7XG4gICAgICAgIGlmIChhLmxlbmd0aCA9PSAxKVxuICAgICAgICAgICAgYSA9IFwiMFwiICsgYTtcbiAgICAgICAgaWYgKCF3aXRoQWxwaGEpXG4gICAgICAgICAgICByZXR1cm4gXCIjXCIgKyByICsgZyArIGI7XG4gICAgICAgIHJldHVybiBcIiNcIiArIHIgKyBnICsgYiArIGE7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZGVub3JtYWxpemUgfSBmcm9tIFwiLi9ub3JtYWxpemVcIjtcbmV4cG9ydCBmdW5jdGlvbiBkcmF3R3VpZGUoY29udGV4dCwgcG9zLCB0YXJnZXQpIHtcbiAgICBjb25zdCBzaXplID0gQ29uc3RhbnRzLkdVSURFX1NJWkU7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgY29uc3Qgc3RhcnRYID0gcG9zLnggLSAoc2l6ZSAvIDIpO1xuICAgIGNvbnN0IHN0YXJ0WSA9IHBvcy55IC0gKHNpemUgLyAyKTtcbiAgICBpZiAodGFyZ2V0LnggPiBzdGFydFggJiYgdGFyZ2V0LnggPCAoc3RhcnRYICsgc2l6ZSkgJiYgdGFyZ2V0LnkgPiBzdGFydFkgJiYgdGFyZ2V0LnkgPCAoc3RhcnRZICsgc2l6ZSkpIHtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwiIzg4ODhGRlwiO1xuICAgIH1cbiAgICBjb250ZXh0LnJlY3Qoc3RhcnRYLCBzdGFydFksIHNpemUsIHNpemUpO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG59XG47XG4vKipcbiAqIERyYXcgYSBib3VuZGluZyBib3hcbiAqXG4gKiBAcGFyYW0gICB7VmVjdG9yfSAgICAgICAgICAgICAgICAgICAgc3RhcnQgICAgW3N0YXJ0IGRlc2NyaXB0aW9uXVxuICogQHBhcmFtICAge1ZlY3Rvcn0gICAgICAgICAgICAgICAgICAgIGVuZCAgICAgIFtlbmQgZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgW2NvbnRleHQgZGVzY3JpcHRpb25dXG4gKlxuICogQHJldHVybiAge3ZvaWR9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXR1cm4gZGVzY3JpcHRpb25dXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkcmF3Qm91bmRpbmdCb3goc3RhcnQsIGVuZCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRlbm9ybV9zdGFydCA9IGRlbm9ybWFsaXplKHN0YXJ0LCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICBjb25zdCBkZW5vcm1fZW5kID0gZGVub3JtYWxpemUoZW5kLCBjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCIjODg4OEZGXCI7XG4gICAgY29udGV4dC5yZWN0KGRlbm9ybV9zdGFydC54LCBkZW5vcm1fc3RhcnQueSwgKGRlbm9ybV9lbmQueCAtIGRlbm9ybV9zdGFydC54KSwgKGRlbm9ybV9lbmQueSAtIGRlbm9ybV9zdGFydC55KSk7XG4gICAgY29udGV4dC5zdHJva2UoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleUV2ZW50cyB7XG4gICAgLyoqXG4gICAgICogU2V0IHVwIHRoZSBrZXkgZXZlbnQgaGFuZGxlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtEcmF3aW5nfSAgZHJhd2luZyAgTWFpbiBkcmF3aW5nIG9iamVjdFxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkcmF3aW5nKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWZlcmVuY2UgdG8gdGhlIG1haW4gZHJhd2luZyBvYmplY3RcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7RHJhd2luZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZHJhd2luZyA9IG51bGw7XG4gICAgICAgIHRoaXMuZHJhd2luZyA9IGRyYXdpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgYWxsIHRoZSBrZXkgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge0tleWJvYXJkRXZlbnR9ICBldmVudCByZWxhdGVkIHRvIHRoZSBrZXkgZG93blxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgaGFuZGxlKGV2ZW50KSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICBpZiAoIXRoaXMuZHJhd2luZylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3aW5nLmFkZExheWVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd4JzpcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmRyYXdpbmcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmVMYXllcigoX2IgPSB0aGlzLmRyYXdpbmcuYWN0aXZlX2xheWVyKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgIGNhc2UgJzMnOlxuICAgICAgICAgICAgY2FzZSAnNCc6XG4gICAgICAgICAgICBjYXNlICc1JzpcbiAgICAgICAgICAgIGNhc2UgJzYnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHBhbGV0dGUgPSAoX2MgPSB0aGlzLmRyYXdpbmcuaHVkKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZ2V0QnlOYW1lKCdwYWxldHRlJyk7XG4gICAgICAgICAgICAgICAgcGFsZXR0ZS5zZXRDb2xvckluZGV4KHBhcnNlSW50KGV2ZW50LmtleSkgLSAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2UnOlxuICAgICAgICAgICAgICAgIC8vIGxheWVyIHVwXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHJhd2luZy5hY3RpdmVfbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3aW5nLnNldEFjdGl2ZUxheWVyKHRoaXMuZHJhd2luZy5nZXROZXh0TGF5ZXIodGhpcy5kcmF3aW5nLmFjdGl2ZV9sYXllci5pZCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRyYXdpbmcuYWN0aXZlX2xheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd2luZy5zZXRBY3RpdmVMYXllcih0aGlzLmRyYXdpbmcuZ2V0UHJldkxheWVyKHRoaXMuZHJhd2luZy5hY3RpdmVfbGF5ZXIuaWQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgICAgICBjb25zdCBoZWxwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWxwXCIpO1xuICAgICAgICAgICAgICAgIGhlbHAgPT09IG51bGwgfHwgaGVscCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVscC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIGhlbHAgPT09IG51bGwgfHwgaGVscCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVscC5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xuLyoqXG4gKiBOb3JtYWxpemUgYSB2ZWN0b3IuIFRha2VzIGEgdmVjdG9yIGFuZCBhIHNvdXJjZSB3aWR0aCBhbmQgaGVpZ2h0XG4gKiB0aGVuIG5vcm1hbGl6ZXMgaXQgdG8gZmFsbCB3aXRoaW4gdGhlIHJhbmdlIG9mIDAuMCAtIDEuMCByZWxhdGl2ZVxuICogdG8gdGhlIHNvdXJjZSdzIHdpdGggYW5kIGhlaWdodC4gRWZmZWN0aXZlbHkgYmVjb21pbmcgYSBwZXJjZW50YWdlXG4gKiBvZiB0aGUgdGFyZ2V0LCBpbnN0ZWFkIG9mIGV4YWN0IHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0gICB7VmVjdG9yfSAgdmVjdG9yICAgICAgICAgICAgVGhlIHZlY3RvciB0byBub3JtYWxpemVcbiAqIEBwYXJhbSAgIHtudW1iZXJ9ICBzb3VyY2Vfd2lkdGggICAgICBUaGUgc291cmNlIHdpZHRoXG4gKiBAcGFyYW0gICB7bnVtYmVyfSAgc291cmNlX2hlaWdodCAgICAgVGhlIHNvdXJjZSBoZWlnaHRcbiAqXG4gKiBAcmV0dXJuICB7VmVjdG9yfSAgICAgICAgICAgICAgICAgICAgTm9ybWFsaXplZCB2ZWN0b3IgY29udGFpbmluZyB4eSB2YWx1ZXMgYmV0d2VlbiAwLjAgYW5kIDEuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKHZlY3Rvciwgc291cmNlX3dpZHRoLCBzb3VyY2VfaGVpZ2h0KSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IoKCgxMDAuIC8gc291cmNlX3dpZHRoKSAqIHZlY3Rvci54KSAvIDEwMC4sICgoMTAwLiAvIHNvdXJjZV9oZWlnaHQpICogdmVjdG9yLnkpIC8gMTAwLik7XG59XG4vKipcbiAqIFRha2VzIGEgbm9ybWFsaXplZCB2ZWN0b3IgKHh5IHdpdGggdmFsdWVzIDAuMCAtIDEuMCkgYW5kIG1hcHMgaXRcbiAqIHRvIHRoZSB0YXJnZXRzIGRpbWVudGlvbnMgKGllIHBpeGVsIHZhbHVlcylcbiAqXG4gKiBAcGFyYW0gICB7VmVjdG9yfSAgbm9ybWFsaXplZF92ZWN0b3IgICBUaGUgdmVjdG9yIHRvIGRlbm9tYWxpemVcbiAqIEBwYXJhbSAgIHtudW1iZXJ9ICB0YXJnZXRfd2lkdGggICAgICAgIFRoZSB0YXJnZXQgd2lkdGhcbiAqIEBwYXJhbSAgIHtudW1iZXJ9ICB0YXJnZXRfaGVpZ2h0ICAgICAgIFRoZSB0YXJnZXQgaGVpZ2h0XG4gKlxuICogQHJldHVybiAge1ZlY3Rvcn0gICAgICAgICAgICAgICAgICAgICAgQSBkZW5vbWFsaXplZCB2ZWN0b3IgY29uYWluaW5nIHh5IHZhbHVlcyBiZXR3ZWVuIDAgYW5kIHRhcmdldF93aWR0aC9oZWlnaHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbm9ybWFsaXplKG5vcm1hbGl6ZWRfdmVjdG9yLCB0YXJnZXRfd2lkdGgsIHRhcmdldF9oZWlnaHQpIHtcbiAgICByZXR1cm4gbmV3IFZlY3Rvcihub3JtYWxpemVkX3ZlY3Rvci54ICogdGFyZ2V0X3dpZHRoLCBub3JtYWxpemVkX3ZlY3Rvci55ICogdGFyZ2V0X2hlaWdodCk7XG59XG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcbi8qKlxuICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZ2Rlbmlzb3YvY2FyZGluYWwtc3BsaW5lLWpzL2Jsb2IvbWFzdGVyL3NyYy9jdXJ2ZV9jYWxjLmpzXG4gKlxuICogQ2FsY3VsYXRlcyBhbiBhcnJheSBjb250YWluaW5nIHBvaW50cyByZXByZXNlbnRpbmcgYSBjYXJkaW5hbCBzcGxpbmUgdGhyb3VnaCBnaXZlbiBwb2ludCBhcnJheS5cbiAqIFBvaW50cyBtdXN0IGJlIGFycmFuZ2VkIGFzOiBbeDEsIHkxLCB4MiwgeTIsIC4uLiwgeG4sIHluXS5cbiAqXG4gKiBUaGUgcG9pbnRzIGZvciB0aGUgY2FyZGluYWwgc3BsaW5lIGFyZSByZXR1cm5lZCBhcyBhIG5ldyBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwb2ludHMgLSBwb2ludCBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IFt0ZW5zaW9uPTAuNV0gLSB0ZW5zaW9uLiBUeXBpY2FsbHkgYmV0d2VlbiBbMC4wLCAxLjBdIGJ1dCBjYW4gYmUgZXhjZWVkZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBbbnVtT2ZTZWc9MjBdIC0gbnVtYmVyIG9mIHNlZ21lbnRzIGJldHdlZW4gdHdvIHBvaW50cyAobGluZSByZXNvbHV0aW9uKVxuICogQHBhcmFtIHtCb29sZWFufSBbY2xvc2U9ZmFsc2VdIC0gQ2xvc2UgdGhlIGVuZHMgbWFraW5nIHRoZSBsaW5lIGNvbnRpbnVvdXNcbiAqIEByZXR1cm5zIHtGbG9hdDMyQXJyYXl9IE5ldyBhcnJheSB3aXRoIHRoZSBjYWxjdWxhdGVkIHBvaW50cyB0aGF0IHdhcyBhZGRlZCB0byB0aGUgcGF0aFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VydmVQb2ludHMocG9pbnRzLCB0ZW5zaW9uID0gMC43LCBudW1PZlNlZyA9IDEsIGNsb3NlID0gZmFsc2UpIHtcbiAgICB2YXIgcHRzLCAvLyBmb3IgY2xvbmluZyBwb2ludCBhcnJheVxuICAgIGkgPSAxLCBsID0gcG9pbnRzLmxlbmd0aCwgclBvcyA9IDAsIHJMZW4gPSAobCAtIDIpICogbnVtT2ZTZWcgKyAyICsgKGNsb3NlID8gMiAqIG51bU9mU2VnIDogMCksIHJlcyA9IG5ldyBGbG9hdDMyQXJyYXkockxlbiksIGNhY2hlID0gbmV3IEZsb2F0MzJBcnJheSgobnVtT2ZTZWcgKyAyKSAqIDQpLCBjYWNoZVB0ciA9IDQ7XG4gICAgY29uc3QgcGFyc2UgPSAocHRzLCBjYWNoZSwgbCkgPT4ge1xuICAgICAgICBmb3IgKHZhciBpID0gMiwgdDsgaSA8IGw7IGkgKz0gMikge1xuICAgICAgICAgICAgdmFyIHB0MSA9IHB0c1tpXSwgcHQyID0gcHRzW2kgKyAxXSwgcHQzID0gcHRzW2kgKyAyXSwgcHQ0ID0gcHRzW2kgKyAzXSwgdDF4ID0gKHB0MyAtIHB0c1tpIC0gMl0pICogdGVuc2lvbiwgdDF5ID0gKHB0NCAtIHB0c1tpIC0gMV0pICogdGVuc2lvbiwgdDJ4ID0gKHB0c1tpICsgNF0gLSBwdDEpICogdGVuc2lvbiwgdDJ5ID0gKHB0c1tpICsgNV0gLSBwdDIpICogdGVuc2lvbjtcbiAgICAgICAgICAgIGZvciAodCA9IDA7IHQgPCBudW1PZlNlZzsgdCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSB0IDw8IDIsIC8vdCAqIDQ7XG4gICAgICAgICAgICAgICAgYzEgPSBjYWNoZVtjXSwgYzIgPSBjYWNoZVtjICsgMV0sIGMzID0gY2FjaGVbYyArIDJdLCBjNCA9IGNhY2hlW2MgKyAzXTtcbiAgICAgICAgICAgICAgICByZXNbclBvcysrXSA9IGMxICogcHQxICsgYzIgKiBwdDMgKyBjMyAqIHQxeCArIGM0ICogdDJ4O1xuICAgICAgICAgICAgICAgIHJlc1tyUG9zKytdID0gYzEgKiBwdDIgKyBjMiAqIHB0NCArIGMzICogdDF5ICsgYzQgKiB0Mnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHB0cyA9IHBvaW50cy5zbGljZSgwKTtcbiAgICBpZiAoY2xvc2UpIHtcbiAgICAgICAgcHRzLnVuc2hpZnQocG9pbnRzW2wgLSAxXSk7IC8vIGluc2VydCBlbmQgcG9pbnQgYXMgZmlyc3QgcG9pbnRcbiAgICAgICAgcHRzLnVuc2hpZnQocG9pbnRzW2wgLSAyXSk7XG4gICAgICAgIHB0cy5wdXNoKHBvaW50c1swXSwgcG9pbnRzWzFdKTsgLy8gZmlyc3QgcG9pbnQgYXMgbGFzdCBwb2ludFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHRzLnVuc2hpZnQocG9pbnRzWzFdKTsgLy8gY29weSAxLiBwb2ludCBhbmQgaW5zZXJ0IGF0IGJlZ2lubmluZ1xuICAgICAgICBwdHMudW5zaGlmdChwb2ludHNbMF0pO1xuICAgICAgICBwdHMucHVzaChwb2ludHNbbCAtIDJdLCBwb2ludHNbbCAtIDFdKTsgLy8gZHVwbGljYXRlIGVuZC1wb2ludHNcbiAgICB9XG4gICAgLy8gY2FjaGUgaW5uZXItbG9vcCBjYWxjdWxhdGlvbnMgYXMgdGhleSBhcmUgYmFzZWQgb24gdCBhbG9uZVxuICAgIGNhY2hlWzBdID0gMTsgLy8gMSwwLDAsMFxuICAgIGZvciAoOyBpIDwgbnVtT2ZTZWc7IGkrKykge1xuICAgICAgICB2YXIgc3QgPSBpIC8gbnVtT2ZTZWcsIHN0MiA9IHN0ICogc3QsIHN0MyA9IHN0MiAqIHN0LCBzdDIzID0gc3QzICogMiwgc3QzMiA9IHN0MiAqIDM7XG4gICAgICAgIGNhY2hlW2NhY2hlUHRyKytdID0gc3QyMyAtIHN0MzIgKyAxOyAvLyBjMVxuICAgICAgICBjYWNoZVtjYWNoZVB0cisrXSA9IHN0MzIgLSBzdDIzOyAvLyBjMlxuICAgICAgICBjYWNoZVtjYWNoZVB0cisrXSA9IHN0MyAtIDIgKiBzdDIgKyBzdDsgLy8gYzNcbiAgICAgICAgY2FjaGVbY2FjaGVQdHIrK10gPSBzdDMgLSBzdDI7IC8vIGM0XG4gICAgfVxuICAgIGNhY2hlWysrY2FjaGVQdHJdID0gMTsgLy8gMCwxLDAsMFxuICAgIC8vIGNhbGMuIHBvaW50c1xuICAgIHBhcnNlKHB0cywgY2FjaGUsIGwpO1xuICAgIGlmIChjbG9zZSkge1xuICAgICAgICAvL2wgPSBwb2ludHMubGVuZ3RoO1xuICAgICAgICBwdHMgPSBbXTtcbiAgICAgICAgcHRzLnB1c2gocG9pbnRzW2wgLSA0XSwgcG9pbnRzW2wgLSAzXSwgcG9pbnRzW2wgLSAyXSwgcG9pbnRzW2wgLSAxXSk7IC8vIHNlY29uZCBsYXN0IGFuZCBsYXN0XG4gICAgICAgIHB0cy5wdXNoKHBvaW50c1swXSwgcG9pbnRzWzFdLCBwb2ludHNbMl0sIHBvaW50c1szXSk7IC8vIGZpcnN0IGFuZCBzZWNvbmRcbiAgICAgICAgcGFyc2UocHRzLCBjYWNoZSwgNCk7XG4gICAgfVxuICAgIC8vIGFkZCBsYXN0IHBvaW50XG4gICAgbCA9IGNsb3NlID8gMCA6IHBvaW50cy5sZW5ndGggLSAyO1xuICAgIHJlc1tyUG9zKytdID0gcG9pbnRzW2xdO1xuICAgIHJlc1tyUG9zXSA9IHBvaW50c1tsICsgMV07XG4gICAgcmV0dXJuIHJlcztcbn1cbi8qKlxuICogRmxhdHRlbiBhbiBhcnJheSBvZiB2ZWN0b3JzIHRvIGEgZmxhdCBhcnJheSBvZiBwb2ludHNcbiAqIGluIHRoZSBmb3JtYXQgW3gwLCB5MCwgeDEsIHkxLCB4MiwgeTIsIHhOLCB5Tl1cbiAqXG4gKiBAcGFyYW0gICB7QXJyYXk8VmVjdG9yPn0gICBwb2ludHMgIFBvaW50cyBhcnJheSB0byBmbGF0dGVuXG4gKlxuICogQHJldHVybiAge0FycmF5PG51bWJlcj59ICAgRmxhdCBhcnJheVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlblBvaW50cyhwb2ludHMpIHtcbiAgICBjb25zdCBmbGF0dGVuZWRfYXJyYXkgPSBbXTtcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yIChsZXQgcG9pbnQgb2YgcG9pbnRzKSB7XG4gICAgICAgIGZsYXR0ZW5lZF9hcnJheVtpXSA9IHBvaW50Lng7XG4gICAgICAgIGZsYXR0ZW5lZF9hcnJheVtpICsgMV0gPSBwb2ludC55O1xuICAgICAgICBpID0gaSArIDI7XG4gICAgfVxuICAgIHJldHVybiBmbGF0dGVuZWRfYXJyYXk7XG59XG4vKipcbiAqIFRha2VzIGEgRmxvYXQzMkFycmF5IGZsYXQgcG9pbnRzIGFycmF5IFt4MCwgeTAsIHgxLCB5MSwgeE4sIHlOXVxuICogYW5kIGNvbnZlcnRzIGl0IHRvIGFuIGFycmF5IG92IHZlY3RvcnNcbiAqXG4gKiBAcGFyYW0gICB7RmxvYXQzMkFycmF5fSAgZmxhdF9wb2ludHNcbiAqXG4gKiBAcmV0dXJuICB7QXJyYXk8VmVjdG9yPn0gIEFycmF5IG92IFZlY3RvciBwb2ludHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZFBvaW50cyhmbGF0X3BvaW50cykge1xuICAgIGNvbnN0IHBvaW50cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmxhdF9wb2ludHMubGVuZ3RoOyBpID0gaSArIDIpIHtcbiAgICAgICAgcG9pbnRzLnB1c2gobmV3IFZlY3RvcihmbGF0X3BvaW50c1tpXSwgZmxhdF9wb2ludHNbaSArIDFdKSk7XG4gICAgfVxuICAgIHJldHVybiBwb2ludHM7XG59XG4vKipcbiAqIFNpbXBsaWZpZXMgYW4gYXJyYXkgb2YgdmVjdG9yc1xuICpcbiAqIEBwYXJhbSAgIHtBcnJheTxWZWN0b3I+fSAgICAgcG9pbnRzICBQb2ludHMgYXJyYXkgdG8gc2ltcGxpZnlcbiAqIEBwYXJhbSAgIHtudW1iZXI/fSAgICAgICAgICAgZmFjdG9yICBIb3cgbXVjaCB0byBzaW1wbGlmeVxuICpcbiAqIEByZXR1cm4gIHtBcnJheTxWZWN0b3I+fSBTaW1wbGlmaWVkIGFycmF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaW1wbGlmeShwb2ludHMsIGZhY3RvciA9IDIpIHtcbiAgICBjb25zdCBzaW1wbGlmaWVkX3BvaW50cyA9IFtdO1xuICAgIC8vIEFkZCB0aGUgZmlyc3QgcG9pbnRcbiAgICBzaW1wbGlmaWVkX3BvaW50cy5wdXNoKHBvaW50c1swXSk7XG4gICAgZm9yIChsZXQgaSA9IGZhY3RvcjsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpID0gaSArIGZhY3Rvcikge1xuICAgICAgICBzaW1wbGlmaWVkX3BvaW50cy5wdXNoKHBvaW50c1tpXSk7XG4gICAgfVxuICAgIHNpbXBsaWZpZWRfcG9pbnRzLnB1c2gocG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSk7XG4gICAgcmV0dXJuIHNpbXBsaWZpZWRfcG9pbnRzO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRoZXNlIHZhbHVlcyBhcmUgdXNlZCBieSB0aGUgYEFic3RyYWN0VmVjdG9yLnJvdW5kYCBtZXRob2QgdG8gaW5jcmVhc2VcbiAqIHBlcmZvcm1hbmNlIHZzLiB1c2luZyAgTnVtYmVyLnRvRml4ZWQuXG4gKi9cbnZhciBwcmVjaXNpb24gPSBbXG4gICAgMSxcbiAgICAxMCxcbiAgICAxMDAsXG4gICAgMTAwMCxcbiAgICAxMDAwMCxcbiAgICAxMDAwMDAsXG4gICAgMTAwMDAwMCxcbiAgICAxMDAwMDAwMCxcbiAgICAxMDAwMDAwMDAsXG4gICAgMTAwMDAwMDAwMCxcbiAgICAxMDAwMDAwMDAwMFxuXTtcbi8qKlxuICogVGhlIGNsYXNzIHRoYXQgYWxsIG90aGVyIHZlY3RvciByZXByZXNlbnRhdGlvbnMgYXJlIGRlcml2ZWQgZnJvbS5cbiAqXG4gKiBDb250YWlucyB0aGUgY29yZSBpbXBsZW1lbnRhdGlvbiBmb3IgYWxsIG1ldGhvZHMgdGhhdCB3aWxsIGJlIGV4cG9zZWQgYnlcbiAqIHZlY3RvciBpbnN0YW5jZXMuXG4gKlxuICogRXhhbXBsZSBvZiBjcmVhdGluZyBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvbjpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgQWJzdHJhY3RWZWN0b3IgfSBmcm9tIFwiLi9BYnN0cmFjdFZlY3RvclwiXG4gKlxuICogZXhwb3J0IGNsYXNzIE15Q3VzdG9tVmVjdG9yIGV4dGVuZHMgQWJzdHJhY3RWZWN0b3Ige1xuICogIGNvbnN0cnVjdG9yICh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICogICAgc3VwZXIoQ3VzdG9tVmVjdG9yVHlwZSlcbiAqICB9XG4gKiB9XG4gKiBgYGBcbiAqL1xudmFyIEFic3RyYWN0VmVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFic3RyYWN0VmVjdG9yKGN0b3IpIHtcbiAgICAgICAgdGhpcy5jdG9yID0gY3RvcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IGJvdGggeCBhbmQgeSBheGlzIHZhbHVlXG4gICAgICogQHBhcmFtIHggICBOZXcgeCB2YWxcbiAgICAgKiBAcGFyYW0geSAgIE5ldyB5IHZhbFxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5zZXRBeGVzID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXR0ZXIgZm9yIHggdGhlIGF4aXMgdmFsdWVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHRlciBmb3IgeCBheGlzIHZhbHVlXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnNldFggPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldHRlciBmb3IgeSBheGlzIHZhbHVlXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgZm9yIHkgYXhpcy5cbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuc2V0WSA9IGZ1bmN0aW9uICh5KSB7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSB2ZWN0b3IgYXMgYSBmb3JtYXR0ZWQgc3RyaW5nLCBlLmcgXCIoMCwgNClcIlxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChyb3VuZCkge1xuICAgICAgICBpZiAocm91bmQgPT09IHZvaWQgMCkgeyByb3VuZCA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChyb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiKFwiICsgTWF0aC5yb3VuZCh0aGlzLngpICsgXCIsIFwiICsgTWF0aC5yb3VuZCh0aGlzLnkpICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiKFwiICsgdGhpcy54ICsgXCIsIFwiICsgdGhpcy55ICsgXCIpXCI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYW4gQXJyYXkgY29udGFpbmluZyB0aGUgdmVjdG9yIGF4ZXMsIGUuZyBbMCwgNF1cbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueV07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYW4gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIHZlY3RvciBheGVzLCBlLmcgeyB4OiAwLCB5OiA0IH1cbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICB5OiB0aGlzLnlcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgcHJvdmlkZWQgdmVjdG9yIHRvIHRoaXMgb25lXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3VidHJhY3QgdGhlIHByb3ZpZGVkIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICB0aGlzLnggLT0gdmVjLng7XG4gICAgICAgIHRoaXMueSAtPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgcHJvdmlkZWQgdmVjdG9yIGVxdWFsIHRvIHRoaXMgb25lXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgcmV0dXJuIHZlYy54ID09PSB0aGlzLnggJiYgdmVjLnkgPT09IHRoaXMueTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubXVsdGlwbHlCeVZlY3RvciA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgdGhpcy54ICo9IHZlYy54O1xuICAgICAgICB0aGlzLnkgKj0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTXVsdGlwbHkgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5tdWxWID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseUJ5VmVjdG9yKHZlYyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXZpZGUgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kaXZpZGVCeVZlY3RvciA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgdGhpcy54IC89IHZlYy54O1xuICAgICAgICB0aGlzLnkgLz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGl2aWRlIHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGl2ViA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpdmlkZUJ5VmVjdG9yKHYpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTXVsdGlwbHkgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIG51bWJlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5tdWx0aXBseUJ5U2NhbGFyID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgdGhpcy54ICo9IG47XG4gICAgICAgIHRoaXMueSAqPSBuO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCBudW1iZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubXVsUyA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm11bHRpcGx5QnlTY2FsYXIobik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXZpdmUgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIG51bWJlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kaXZpZGVCeVNjYWxhciA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHRoaXMueCAvPSBuO1xuICAgICAgICB0aGlzLnkgLz0gbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXZpdmUgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIG51bWJlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kaXZTID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGl2aWRlQnlTY2FsYXIobik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBOb3JtYWxpc2UgdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubm9ybWFsaXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGVCeVNjYWxhcih0aGlzLm1hZ25pdHVkZSgpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZvciBBbWVyaWNhbiBzcGVsbGluZy4gU2FtZSBhcyB1bml0L25vcm1hbGlzZSBmdW5jdGlvblxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5ub3JtYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGlzZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIHNhbWUgYXMgbm9ybWFsaXNlIGFuZCBub3JtYWxpemVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUudW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXNlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtYWduaXR1ZGUgKGxlbmd0aCkgb2YgdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubWFnbml0dWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgeCA9IHRoaXMueDtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtYWduaXR1ZGUgKGxlbmd0aCkgb2YgdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWduaXR1ZGUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNxdXJlZCBsZW5ndGggb2YgdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubGVuZ3RoU3EgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB4ID0gdGhpcy54O1xuICAgICAgICB2YXIgeSA9IHRoaXMueTtcbiAgICAgICAgcmV0dXJuIHggKiB4ICsgeSAqIHk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkb3QgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBieSBhbm90aGVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRvdCA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgcmV0dXJuIHZlYy54ICogdGhpcy54ICsgdmVjLnkgKiB0aGlzLnk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGJ5IGFub3RoZXIuXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmNyb3NzID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdmVjLnkgLSB0aGlzLnkgKiB2ZWMueDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldmVyc2VzIHRoaXMgdmVjdG9yIGkuZSBtdWx0aXBsaWVzIGl0IGJ5IC0xXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMueCA9IC10aGlzLng7XG4gICAgICAgIHRoaXMueSA9IC10aGlzLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSB2ZWN0b3IgYXhlcyB2YWx1ZXMgdG8gYWJzb2x1dGUgdmFsdWVzXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmFicyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5hYnModGhpcy54KTtcbiAgICAgICAgdGhpcy55ID0gTWF0aC5hYnModGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBaZXJvZXMgdGhlIHZlY3RvciBpLmUgc2V0cyBhbGwgYXhlcyB0byAwXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnplcm8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueSA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kaXN0YW5jZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHZhciB4ID0gdGhpcy54IC0gdi54O1xuICAgICAgICB2YXIgeSA9IHRoaXMueSAtIHYueTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIHZldG9yIGJ5IHByb3ZpZGVkIHJhZGlhbnNcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUucm90YXRlID0gZnVuY3Rpb24gKHJhZHMpIHtcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZHMpO1xuICAgICAgICB2YXIgc2luID0gTWF0aC5zaW4ocmFkcyk7XG4gICAgICAgIHZhciBveCA9IHRoaXMueDtcbiAgICAgICAgdmFyIG95ID0gdGhpcy55O1xuICAgICAgICB0aGlzLnggPSBveCAqIGNvcyAtIG95ICogc2luO1xuICAgICAgICB0aGlzLnkgPSBveCAqIHNpbiArIG95ICogY29zO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJvdW5kcyB0aGlzIHZlY3RvciB0byBuIGRlY2ltYWwgcGxhY2VzXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnJvdW5kID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgaWYgKG4gPT09IHZvaWQgMCkgeyBuID0gMjsgfVxuICAgICAgICB2YXIgcCA9IHByZWNpc2lvbltuXTtcbiAgICAgICAgLy8gVGhpcyBwZXJmb3JtcyB3YWFheSBiZXR0ZXIgdGhhbiB0b0ZpeGVkIGFuZCBnaXZlIEZsb2F0MzIgdGhlIGVkZ2UgYWdhaW4uXG4gICAgICAgIC8vIGh0dHA6Ly93d3cuZHluYW1pY2d1cnUuY29tL2phdmFzY3JpcHQvcm91bmQtbnVtYmVycy13aXRoLXByZWNpc2lvbi9cbiAgICAgICAgdGhpcy54ID0gKCgwLjUgKyB0aGlzLnggKiBwKSA8PCAwKSAvIHA7XG4gICAgICAgIHRoaXMueSA9ICgoMC41ICsgdGhpcy55ICogcCkgPDwgMCkgLyBwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBjb3B5IG9mIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gICAgfTtcbiAgICByZXR1cm4gQWJzdHJhY3RWZWN0b3I7XG59KCkpO1xuZXhwb3J0cy5BYnN0cmFjdFZlY3RvciA9IEFic3RyYWN0VmVjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWJzdHJhY3RWZWN0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBYnN0cmFjdFZlY3Rvcl8xID0gcmVxdWlyZShcIi4vQWJzdHJhY3RWZWN0b3JcIik7XG4vKipcbiAqIEEgdmVjdG9yIHJlcHJlc2VudGF0aW9uIHRoYXQgc3RvcmVzIHRoZSBheGVzIGluIGFuIEFycmF5XG4gKlxuICogYGBgXG4gKiBjb25zdCB2ID0gbmV3IFZlYzJELkFycmF5VmVjdG9yKDIsIDUpXG4gKiBgYGBcbiAqL1xudmFyIEFycmF5VmVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBcnJheVZlY3RvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBcnJheVZlY3Rvcih4LCB5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIEFycmF5VmVjdG9yKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5heGVzID0gW3gsIHldO1xuICAgICAgICBfdGhpcy5jdG9yID0gQXJyYXlWZWN0b3I7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5VmVjdG9yLnByb3RvdHlwZSwgXCJ4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5heGVzWzBdO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICB0aGlzLmF4ZXNbMF0gPSB4O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXlWZWN0b3IucHJvdG90eXBlLCBcInlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF4ZXNbMV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgICAgIHRoaXMuYXhlc1sxXSA9IHk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBBcnJheVZlY3Rvcjtcbn0oQWJzdHJhY3RWZWN0b3JfMS5BYnN0cmFjdFZlY3RvcikpO1xuZXhwb3J0cy5BcnJheVZlY3RvciA9IEFycmF5VmVjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXJyYXlWZWN0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBYnN0cmFjdFZlY3Rvcl8xID0gcmVxdWlyZShcIi4vQWJzdHJhY3RWZWN0b3JcIik7XG4vKipcbiAqIEEgdmVjdG9yIHJlcHJlc2VudGF0aW9uIHRoYXQgc3RvcmVzIHRoZSBheGVzIGluIGEgRmxvYXQzMkFycmF5XG4gKlxuICogYGBgXG4gKiBjb25zdCB2ID0gbmV3IFZlYzJELkZsb2F0MzJWZWN0b3IoMiwgNSlcbiAqIGBgYFxuICovXG52YXIgRmxvYXQzMlZlY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmxvYXQzMlZlY3RvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGbG9hdDMyVmVjdG9yKHgsIHkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgRmxvYXQzMlZlY3RvcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYXhlcyA9IG5ldyBGbG9hdDMyQXJyYXkoMik7XG4gICAgICAgIF90aGlzLmF4ZXNbMF0gPSB4O1xuICAgICAgICBfdGhpcy5heGVzWzFdID0geTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmxvYXQzMlZlY3Rvci5wcm90b3R5cGUsIFwieFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXhlc1swXTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgdGhpcy5heGVzWzBdID0geDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZsb2F0MzJWZWN0b3IucHJvdG90eXBlLCBcInlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF4ZXNbMV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgICAgIHRoaXMuYXhlc1sxXSA9IHk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBGbG9hdDMyVmVjdG9yO1xufShBYnN0cmFjdFZlY3Rvcl8xLkFic3RyYWN0VmVjdG9yKSk7XG5leHBvcnRzLkZsb2F0MzJWZWN0b3IgPSBGbG9hdDMyVmVjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmxvYXQzMlZlY3Rvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9BYnN0cmFjdFZlY3RvclwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9BcnJheVZlY3RvclwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9GbG9hdDMyVmVjdG9yXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL1ZlY3RvclwiKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1WZWMyRC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFic3RyYWN0VmVjdG9yXzEgPSByZXF1aXJlKFwiLi9BYnN0cmFjdFZlY3RvclwiKTtcbi8qKlxuICogQSB2ZWN0b3IgcmVwcmVzZW50YXRpb24gdGhhdCBzdG9yZXMgdGhlIGF4ZXMgYXMgcGFydCBvZiB0aGUgaW5zdGFuY2UgaXRzZWxmXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IHYgPSBuZXcgVmVjMkQuVmVjdG9yKDIsIDUpXG4gKiBgYGBcbiAqL1xudmFyIFZlY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVmVjdG9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFZlY3Rvcih4LCB5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFZlY3RvcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3ggPSB4O1xuICAgICAgICBfdGhpcy5feSA9IHk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3Rvci5wcm90b3R5cGUsIFwieFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3g7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHRoaXMuX3ggPSB4O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yLnByb3RvdHlwZSwgXCJ5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5feTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeSkge1xuICAgICAgICAgICAgdGhpcy5feSA9IHk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBWZWN0b3I7XG59KEFic3RyYWN0VmVjdG9yXzEuQWJzdHJhY3RWZWN0b3IpKTtcbmV4cG9ydHMuVmVjdG9yID0gVmVjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VmVjdG9yLmpzLm1hcCIsIi8qIVxuICogdmFuaWxsYS1waWNrZXIgdjIuMTIuMVxuICogaHR0cHM6Ly92YW5pbGxhLXBpY2tlci5qcy5vcmdcbiAqXG4gKiBDb3B5cmlnaHQgMjAxNy0yMDIxIEFuZHJlYXMgQm9yZ2VuIChodHRwczovL2dpdGh1Yi5jb20vU3BoaW54eHh4KSwgQWRhbSBCcm9va3MgKGh0dHBzOi8vZ2l0aHViLmNvbS9kaXNzaW11bGF0ZSlcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqL1xudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxudmFyIHNsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSB0cnVlO1xuICAgICAgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KCk7XG5cblN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA9IFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCB8fCBmdW5jdGlvbiAobmVlZGxlKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXhPZihuZWVkbGUpID09PSAwO1xufTtcblN0cmluZy5wcm90b3R5cGUucGFkU3RhcnQgPSBTdHJpbmcucHJvdG90eXBlLnBhZFN0YXJ0IHx8IGZ1bmN0aW9uIChsZW4sIHBhZCkge1xuICAgIHZhciBzdHIgPSB0aGlzO3doaWxlIChzdHIubGVuZ3RoIDwgbGVuKSB7XG4gICAgICAgIHN0ciA9IHBhZCArIHN0cjtcbiAgICB9cmV0dXJuIHN0cjtcbn07XG5cbnZhciBjb2xvck5hbWVzID0geyBjYjogJzBmOGZmJywgdHF3OiAnYWViZDcnLCBxOiAnLWZmZmYnLCBxbXJuOiAnN2ZmZmQ0JywgenI6ICcwZmZmZicsIGJnOiAnNWY1ZGMnLCBic3E6ICdlNGM0JywgYmNrOiAnLS0tJywgbmNoOiAnZWJjZCcsIGI6ICctLWZmJywgYnZ0OiAnOGEyYmUyJywgYnJ3bjogJ2E1MmEyYScsIGJydzogJ2RlYjg4NycsIGN0YjogJzVmOWVhMCcsIGhydDogJzdmZmYtJywgY2hjVDogJ2QyNjkxZScsIGNyOiAnN2Y1MCcsIHJudzogJzY0OTVlZCcsIGNybnM6ICc4ZGMnLCBjcm1zOiAnZGMxNDNjJywgY246ICctZmZmZicsIERiOiAnLS04YicsIERjbjogJy04YjhiJywgRGducjogJ2I4ODYwYicsIERncjogJ2E5YTlhOScsIERncm46ICctNjQtJywgRGtoazogJ2JkYjc2YicsIERtZ246ICc4Yi04YicsIER2Z3I6ICc1NTZiMmYnLCBEcm5nOiAnOGMtJywgRHJjaDogJzk5MzJjYycsIERyOiAnOGItLScsIERzbW46ICdlOTk2N2EnLCBEc2dyOiAnOGZiYzhmJywgRHNUYjogJzQ4M2Q4YicsIERzVGc6ICcyZjRmNGYnLCBEdHJxOiAnLWNlZDEnLCBEdnQ6ICc5NC1kMycsIHBwbms6ICcxNDkzJywgcHNrYjogJy1iZmZmJywgbWdyOiAnNjk2OTY5JywgZ3JiOiAnMWU5MGZmJywgcmJyYzogJ2IyMjIyMicsIHJ3aHQ6ICdhZjAnLCBzdGc6ICcyMjhiMjInLCBjaHM6ICctZmYnLCBnbnNiOiAnZGNkY2RjJywgc3Q6ICc4ZjhmZicsIGc6ICdkNy0nLCBnbnI6ICdkYWE1MjAnLCBncjogJzgwODA4MCcsIGdybjogJy04LTAnLCBncm53OiAnYWRmZjJmJywgaG53OiAnMGZmZjAnLCBodHBuOiAnNjliNCcsIG5ucjogJ2NkNWM1YycsIG5nOiAnNGItODInLCB2cjogJzAnLCBraGs6ICcwZTY4YycsIHZucjogJ2U2ZTZmYScsIG5yYjogJzBmNScsIHduZ3I6ICc3Y2ZjLScsIG1uY2g6ICdhY2QnLCBMYjogJ2FkZDhlNicsIExjcjogJzA4MDgwJywgTGNuOiAnZTBmZmZmJywgTGducjogJ2FmYWQyJywgTGdyOiAnZDNkM2QzJywgTGdybjogJzkwZWU5MCcsIExwbms6ICdiNmMxJywgTHNtbjogJ2EwN2EnLCBMc2dyOiAnMjBiMmFhJywgTHNrYjogJzg3Y2VmYScsIExzVGc6ICc3Nzg4OTknLCBMc3RiOiAnYjBjNGRlJywgTHc6ICdlMCcsIG06ICctZmYtJywgbWdybjogJzMyY2QzMicsIG5uOiAnYWYwZTYnLCBtZ250OiAnLWZmJywgbXJuOiAnOC0tMCcsIG1xbTogJzY2Y2RhYScsIG1tYjogJy0tY2QnLCBtbXJjOiAnYmE1NWQzJywgbW1wcjogJzkzNzBkYicsIG1zZzogJzNjYjM3MScsIG1tc1Q6ICc3YjY4ZWUnLCAnJzogJy1mYTlhJywgbXRyOiAnNDhkMWNjJywgbW12dDogJ2M3MTU4NScsIG1uTGI6ICcxOTE5NzAnLCBudGM6ICc1ZmZmYScsIG1zdHI6ICdlNGUxJywgbWNjczogJ2U0YjUnLCB2anc6ICdkZWFkJywgbnY6ICctLTgwJywgYzogJ2RmNWU2JywgdjogJzgwOC0wJywgdnJiOiAnNmI4ZTIzJywgcm5nOiAnYTUtJywgcm5ncjogJzQ1LScsIHJjaDogJ2RhNzBkNicsIHBnbnI6ICdlZWU4YWEnLCBwZ3JuOiAnOThmYjk4JywgcHRycTogJ2FmZWVlZScsIHB2dHI6ICdkYjcwOTMnLCBwcHdoOiAnZWZkNScsIHBjaHA6ICdkYWI5JywgcHI6ICdjZDg1M2YnLCBwbms6ICdjMGNiJywgcG06ICdkZGEwZGQnLCBwd3JiOiAnYjBlMGU2JywgcHJwOiAnOC0wODAnLCBjYzogJzY2MzM5OScsIHI6ICctLScsIHNicjogJ2JjOGY4ZicsIHJiOiAnNDE2OWUxJywgc2JydzogJzhiNDUxMycsIHNtbjogJ2E4MDcyJywgbmJyOiAnNGE0NjAnLCBzZ3JuOiAnMmU4YjU3Jywgc3NoOiAnNWVlJywgc25uOiAnYTA1MjJkJywgc3ZyOiAnYzBjMGMwJywgc2tiOiAnODdjZWViJywgc1RiOiAnNmE1YWNkJywgc1RncjogJzcwODA5MCcsIHNudzogJ2FmYScsIG46ICctZmY3ZicsIHN0YjogJzQ2ODJiNCcsIHRuOiAnZDJiNDhjJywgdDogJy04MDgwJywgdGhzdDogJ2Q4YmZkOCcsIHRtVDogJzYzNDcnLCB0cnFzOiAnNDBlMGQwJywgdnQ6ICdlZTgyZWUnLCB3aFQ6ICc1ZGViMycsIHdodDogJycsIGh0czogJzVmNWY1JywgdzogJy0nLCB3Z3JuOiAnOWFjZDMyJyB9O1xuXG5mdW5jdGlvbiBwcmludE51bShudW0pIHtcbiAgICB2YXIgZGVjcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTtcblxuICAgIHZhciBzdHIgPSBkZWNzID4gMCA/IG51bS50b0ZpeGVkKGRlY3MpLnJlcGxhY2UoLzArJC8sICcnKS5yZXBsYWNlKC9cXC4kLywgJycpIDogbnVtLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIHN0ciB8fCAnMCc7XG59XG5cbnZhciBDb2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb2xvcihyLCBnLCBiLCBhKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIENvbG9yKTtcblxuXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgZnVuY3Rpb24gcGFyc2VTdHJpbmcoaW5wdXQpIHtcblxuICAgICAgICAgICAgaWYgKGlucHV0LnN0YXJ0c1dpdGgoJ2hzbCcpKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9pbnB1dCRtYXRjaCRtYXAgPSBpbnB1dC5tYXRjaCgvKFtcXC1cXGRcXC5lXSspL2cpLm1hcChOdW1iZXIpLFxuICAgICAgICAgICAgICAgICAgICBfaW5wdXQkbWF0Y2gkbWFwMiA9IHNsaWNlZFRvQXJyYXkoX2lucHV0JG1hdGNoJG1hcCwgNCksXG4gICAgICAgICAgICAgICAgICAgIGggPSBfaW5wdXQkbWF0Y2gkbWFwMlswXSxcbiAgICAgICAgICAgICAgICAgICAgcyA9IF9pbnB1dCRtYXRjaCRtYXAyWzFdLFxuICAgICAgICAgICAgICAgICAgICBsID0gX2lucHV0JG1hdGNoJG1hcDJbMl0sXG4gICAgICAgICAgICAgICAgICAgIF9hID0gX2lucHV0JG1hdGNoJG1hcDJbM107XG5cbiAgICAgICAgICAgICAgICBpZiAoX2EgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBfYSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaCAvPSAzNjA7XG4gICAgICAgICAgICAgICAgcyAvPSAxMDA7XG4gICAgICAgICAgICAgICAgbCAvPSAxMDA7XG4gICAgICAgICAgICAgICAgdGhhdC5oc2xhID0gW2gsIHMsIGwsIF9hXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXQuc3RhcnRzV2l0aCgncmdiJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2lucHV0JG1hdGNoJG1hcDMgPSBpbnB1dC5tYXRjaCgvKFtcXC1cXGRcXC5lXSspL2cpLm1hcChOdW1iZXIpLFxuICAgICAgICAgICAgICAgICAgICBfaW5wdXQkbWF0Y2gkbWFwNCA9IHNsaWNlZFRvQXJyYXkoX2lucHV0JG1hdGNoJG1hcDMsIDQpLFxuICAgICAgICAgICAgICAgICAgICBfciA9IF9pbnB1dCRtYXRjaCRtYXA0WzBdLFxuICAgICAgICAgICAgICAgICAgICBfZyA9IF9pbnB1dCRtYXRjaCRtYXA0WzFdLFxuICAgICAgICAgICAgICAgICAgICBfYiA9IF9pbnB1dCRtYXRjaCRtYXA0WzJdLFxuICAgICAgICAgICAgICAgICAgICBfYTIgPSBfaW5wdXQkbWF0Y2gkbWFwNFszXTtcblxuICAgICAgICAgICAgICAgIGlmIChfYTIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBfYTIgPSAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoYXQucmdiYSA9IFtfciwgX2csIF9iLCBfYTJdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmdiYSA9IENvbG9yLmhleFRvUmdiKGlucHV0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnJnYmEgPSBDb2xvci5uYW1lVG9SZ2IoaW5wdXQpIHx8IENvbG9yLmhleFRvUmdiKGlucHV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAociA9PT0gdW5kZWZpbmVkKSA7IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocikpIHtcbiAgICAgICAgICAgIHRoaXMucmdiYSA9IHI7XG4gICAgICAgIH0gZWxzZSBpZiAoYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgY29sb3IgPSByICYmICcnICsgcjtcbiAgICAgICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgICAgIHBhcnNlU3RyaW5nKGNvbG9yLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZ2JhID0gW3IsIGcsIGIsIGEgPT09IHVuZGVmaW5lZCA/IDEgOiBhXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKENvbG9yLCBbe1xuICAgICAgICBrZXk6ICdwcmludFJHQicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludFJHQihhbHBoYSkge1xuICAgICAgICAgICAgdmFyIHJnYiA9IGFscGhhID8gdGhpcy5yZ2JhIDogdGhpcy5yZ2JhLnNsaWNlKDAsIDMpLFxuICAgICAgICAgICAgICAgIHZhbHMgPSByZ2IubWFwKGZ1bmN0aW9uICh4LCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByaW50TnVtKHgsIGkgPT09IDMgPyAzIDogMCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGFscGhhID8gJ3JnYmEoJyArIHZhbHMgKyAnKScgOiAncmdiKCcgKyB2YWxzICsgJyknO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcmludEhTTCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmludEhTTChhbHBoYSkge1xuICAgICAgICAgICAgdmFyIG11bHRzID0gWzM2MCwgMTAwLCAxMDAsIDFdLFxuICAgICAgICAgICAgICAgIHN1ZmYgPSBbJycsICclJywgJyUnLCAnJ107XG5cbiAgICAgICAgICAgIHZhciBoc2wgPSBhbHBoYSA/IHRoaXMuaHNsYSA6IHRoaXMuaHNsYS5zbGljZSgwLCAzKSxcbiAgICAgICAgICAgICAgICB2YWxzID0gaHNsLm1hcChmdW5jdGlvbiAoeCwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmludE51bSh4ICogbXVsdHNbaV0sIGkgPT09IDMgPyAzIDogMSkgKyBzdWZmW2ldO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBhbHBoYSA/ICdoc2xhKCcgKyB2YWxzICsgJyknIDogJ2hzbCgnICsgdmFscyArICcpJztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJpbnRIZXgnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpbnRIZXgoYWxwaGEpIHtcbiAgICAgICAgICAgIHZhciBoZXggPSB0aGlzLmhleDtcbiAgICAgICAgICAgIHJldHVybiBhbHBoYSA/IGhleCA6IGhleC5zdWJzdHJpbmcoMCwgNyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JnYmEnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZ2JhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JnYmE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2hzbGEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbG9yIGlzIHNldCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmdiYSA9IENvbG9yLmhzbFRvUmdiKHRoaXMuX2hzbGEpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChyZ2IpIHtcbiAgICAgICAgICAgIGlmIChyZ2IubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmdiWzNdID0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fcmdiYSA9IHJnYjtcbiAgICAgICAgICAgIHRoaXMuX2hzbGEgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZ2JTdHJpbmcnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByaW50UkdCKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JnYmFTdHJpbmcnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByaW50UkdCKHRydWUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoc2xhJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faHNsYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9oc2xhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLl9yZ2JhKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb2xvciBpcyBzZXQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hzbGEgPSBDb2xvci5yZ2JUb0hzbCh0aGlzLl9yZ2JhKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoaHNsKSB7XG4gICAgICAgICAgICBpZiAoaHNsLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGhzbFszXSA9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2hzbGEgPSBoc2w7XG4gICAgICAgICAgICB0aGlzLl9yZ2JhID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaHNsU3RyaW5nJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmludEhTTCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoc2xhU3RyaW5nJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmludEhTTCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGV4JyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICB2YXIgcmdiID0gdGhpcy5yZ2JhLFxuICAgICAgICAgICAgICAgIGhleCA9IHJnYi5tYXAoZnVuY3Rpb24gKHgsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaSA8IDMgPyB4LnRvU3RyaW5nKDE2KSA6IE1hdGgucm91bmQoeCAqIDI1NSkudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiAnIycgKyBoZXgubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHgucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgICAgIH0pLmpvaW4oJycpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChoZXgpIHtcbiAgICAgICAgICAgIHRoaXMucmdiYSA9IENvbG9yLmhleFRvUmdiKGhleCk7XG4gICAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgICAga2V5OiAnaGV4VG9SZ2InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGV4VG9SZ2IoaW5wdXQpIHtcblxuICAgICAgICAgICAgdmFyIGhleCA9IChpbnB1dC5zdGFydHNXaXRoKCcjJykgPyBpbnB1dC5zbGljZSgxKSA6IGlucHV0KS5yZXBsYWNlKC9eKFxcd3szfSkkLywgJyQxRicpLnJlcGxhY2UoL14oXFx3KShcXHcpKFxcdykoXFx3KSQvLCAnJDEkMSQyJDIkMyQzJDQkNCcpLnJlcGxhY2UoL14oXFx3ezZ9KSQvLCAnJDFGRicpO1xuXG4gICAgICAgICAgICBpZiAoIWhleC5tYXRjaCgvXihbMC05YS1mQS1GXXs4fSkkLykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gaGV4IGNvbG9yOyAnICsgaW5wdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcmdiYSA9IGhleC5tYXRjaCgvXihcXHdcXHcpKFxcd1xcdykoXFx3XFx3KShcXHdcXHcpJC8pLnNsaWNlKDEpLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh4LCAxNik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmdiYVszXSA9IHJnYmFbM10gLyAyNTU7XG4gICAgICAgICAgICByZXR1cm4gcmdiYTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbmFtZVRvUmdiJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5hbWVUb1JnYihpbnB1dCkge1xuXG4gICAgICAgICAgICB2YXIgaGFzaCA9IGlucHV0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnYXQnLCAnVCcpLnJlcGxhY2UoL1thZWlvdXlsZGZdL2csICcnKS5yZXBsYWNlKCdnaHQnLCAnTCcpLnJlcGxhY2UoJ3JrJywgJ0QnKS5zbGljZSgtNSwgNCksXG4gICAgICAgICAgICAgICAgaGV4ID0gY29sb3JOYW1lc1toYXNoXTtcbiAgICAgICAgICAgIHJldHVybiBoZXggPT09IHVuZGVmaW5lZCA/IGhleCA6IENvbG9yLmhleFRvUmdiKGhleC5yZXBsYWNlKC9cXC0vZywgJzAwJykucGFkU3RhcnQoNiwgJ2YnKSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JnYlRvSHNsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJnYlRvSHNsKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBfcmVmMiA9IHNsaWNlZFRvQXJyYXkoX3JlZiwgNCksXG4gICAgICAgICAgICAgICAgciA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgICAgIGcgPSBfcmVmMlsxXSxcbiAgICAgICAgICAgICAgICBiID0gX3JlZjJbMl0sXG4gICAgICAgICAgICAgICAgYSA9IF9yZWYyWzNdO1xuXG4gICAgICAgICAgICByIC89IDI1NTtcbiAgICAgICAgICAgIGcgLz0gMjU1O1xuICAgICAgICAgICAgYiAvPSAyNTU7XG5cbiAgICAgICAgICAgIHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKSxcbiAgICAgICAgICAgICAgICBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICAgICAgICAgIHZhciBoID0gdm9pZCAwLFxuICAgICAgICAgICAgICAgIHMgPSB2b2lkIDAsXG4gICAgICAgICAgICAgICAgbCA9IChtYXggKyBtaW4pIC8gMjtcblxuICAgICAgICAgICAgaWYgKG1heCA9PT0gbWluKSB7XG4gICAgICAgICAgICAgICAgaCA9IHMgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZCA9IG1heCAtIG1pbjtcbiAgICAgICAgICAgICAgICBzID0gbCA+IDAuNSA/IGQgLyAoMiAtIG1heCAtIG1pbikgOiBkIC8gKG1heCArIG1pbik7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSByOlxuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApO2JyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGc6XG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gKGIgLSByKSAvIGQgKyAyO2JyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGI6XG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gKHIgLSBnKSAvIGQgKyA0O2JyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGggLz0gNjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFtoLCBzLCBsLCBhXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaHNsVG9SZ2InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaHNsVG9SZ2IoX3JlZjMpIHtcbiAgICAgICAgICAgIHZhciBfcmVmNCA9IHNsaWNlZFRvQXJyYXkoX3JlZjMsIDQpLFxuICAgICAgICAgICAgICAgIGggPSBfcmVmNFswXSxcbiAgICAgICAgICAgICAgICBzID0gX3JlZjRbMV0sXG4gICAgICAgICAgICAgICAgbCA9IF9yZWY0WzJdLFxuICAgICAgICAgICAgICAgIGEgPSBfcmVmNFszXTtcblxuICAgICAgICAgICAgdmFyIHIgPSB2b2lkIDAsXG4gICAgICAgICAgICAgICAgZyA9IHZvaWQgMCxcbiAgICAgICAgICAgICAgICBiID0gdm9pZCAwO1xuXG4gICAgICAgICAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHIgPSBnID0gYiA9IGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBodWUycmdiID0gZnVuY3Rpb24gaHVlMnJnYihwLCBxLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0IDwgMCkgdCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAodCA+IDEpIHQgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgPCAxIC8gNikgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0IDwgMSAvIDIpIHJldHVybiBxO1xuICAgICAgICAgICAgICAgICAgICBpZiAodCA8IDIgLyAzKSByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDY7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB2YXIgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHMsXG4gICAgICAgICAgICAgICAgICAgIHAgPSAyICogbCAtIHE7XG5cbiAgICAgICAgICAgICAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMSAvIDMpO1xuICAgICAgICAgICAgICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xuICAgICAgICAgICAgICAgIGIgPSBodWUycmdiKHAsIHEsIGggLSAxIC8gMyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciByZ2JhID0gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdLm1hcChNYXRoLnJvdW5kKTtcbiAgICAgICAgICAgIHJnYmFbM10gPSBhO1xuXG4gICAgICAgICAgICByZXR1cm4gcmdiYTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gQ29sb3I7XG59KCk7XG5cbnZhciBFdmVudEJ1Y2tldCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudEJ1Y2tldCgpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRCdWNrZXQpO1xuXG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IFtdO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKEV2ZW50QnVja2V0LCBbe1xuICAgICAgICBrZXk6ICdhZGQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKHRhcmdldCwgdHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbW92ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUodGFyZ2V0LCB0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSBlLnRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICBpc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlICYmIHR5cGUgIT09IGUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBpc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyICYmIGhhbmRsZXIgIT09IGUuaGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICBpc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRCdWNrZXQuX2RvUmVtb3ZlKGUudGFyZ2V0LCBlLnR5cGUsIGUuaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhaXNNYXRjaDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkZXN0cm95JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBFdmVudEJ1Y2tldC5fZG9SZW1vdmUoZS50YXJnZXQsIGUudHlwZSwgZS5oYW5kbGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gW107XG4gICAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgICAga2V5OiAnX2RvUmVtb3ZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9kb1JlbW92ZSh0YXJnZXQsIHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gRXZlbnRCdWNrZXQ7XG59KCk7XG5cbmZ1bmN0aW9uIHBhcnNlSFRNTChodG1sU3RyaW5nKSB7XG5cbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gICAgcmV0dXJuIGRpdi5maXJzdEVsZW1lbnRDaGlsZDtcbn1cblxuZnVuY3Rpb24gZHJhZ1RyYWNrKGV2ZW50QnVja2V0LCBhcmVhLCBjYWxsYmFjaykge1xuICAgIHZhciBkcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gY2xhbXAodmFsLCBtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbih2YWwsIG1heCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTW92ZShlLCBpbmZvLCBzdGFydGluZykge1xuICAgICAgICBpZiAoc3RhcnRpbmcpIHtcbiAgICAgICAgICAgIGRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIGJvdW5kcyA9IGFyZWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICB3ID0gYm91bmRzLndpZHRoLFxuICAgICAgICAgICAgaCA9IGJvdW5kcy5oZWlnaHQsXG4gICAgICAgICAgICB4ID0gaW5mby5jbGllbnRYLFxuICAgICAgICAgICAgeSA9IGluZm8uY2xpZW50WTtcblxuICAgICAgICB2YXIgcmVsWCA9IGNsYW1wKHggLSBib3VuZHMubGVmdCwgMCwgdyksXG4gICAgICAgICAgICByZWxZID0gY2xhbXAoeSAtIGJvdW5kcy50b3AsIDAsIGgpO1xuXG4gICAgICAgIGNhbGxiYWNrKHJlbFggLyB3LCByZWxZIC8gaCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZShlLCBzdGFydGluZykge1xuICAgICAgICB2YXIgYnV0dG9uID0gZS5idXR0b25zID09PSB1bmRlZmluZWQgPyBlLndoaWNoIDogZS5idXR0b25zO1xuICAgICAgICBpZiAoYnV0dG9uID09PSAxKSB7XG4gICAgICAgICAgICBvbk1vdmUoZSwgZSwgc3RhcnRpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVG91Y2goZSwgc3RhcnRpbmcpIHtcbiAgICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIG9uTW92ZShlLCBlLnRvdWNoZXNbMF0sIHN0YXJ0aW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudEJ1Y2tldC5hZGQoYXJlYSwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIG9uTW91c2UoZSwgdHJ1ZSk7XG4gICAgfSk7XG4gICAgZXZlbnRCdWNrZXQuYWRkKGFyZWEsICd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgb25Ub3VjaChlLCB0cnVlKTtcbiAgICB9KTtcbiAgICBldmVudEJ1Y2tldC5hZGQod2luZG93LCAnbW91c2Vtb3ZlJywgb25Nb3VzZSk7XG4gICAgZXZlbnRCdWNrZXQuYWRkKGFyZWEsICd0b3VjaG1vdmUnLCBvblRvdWNoKTtcbiAgICBldmVudEJ1Y2tldC5hZGQod2luZG93LCAnbW91c2V1cCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRyYWdnaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gICAgZXZlbnRCdWNrZXQuYWRkKGFyZWEsICd0b3VjaGVuZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRyYWdnaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gICAgZXZlbnRCdWNrZXQuYWRkKGFyZWEsICd0b3VjaGNhbmNlbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRyYWdnaW5nID0gZmFsc2U7XG4gICAgfSk7XG59XG5cbnZhciBCR19UUkFOU1AgPSAnbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBsaWdodGdyZXkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDc1JSwgbGlnaHRncmV5IDc1JSkgMCAwIC8gMmVtIDJlbSxcXG4gICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBsaWdodGdyZXkgMjUlLCAgICAgICB3aGl0ZSAyNSUsICAgICAgIHdoaXRlIDc1JSwgbGlnaHRncmV5IDc1JSkgMWVtIDFlbSAvIDJlbSAyZW0nO1xudmFyIEhVRVMgPSAzNjA7XG5cbnZhciBFVkVOVF9LRVkgPSAna2V5ZG93bicsXG4gICAgRVZFTlRfQ0xJQ0tfT1VUU0lERSA9ICdtb3VzZWRvd24nLFxuICAgIEVWRU5UX1RBQl9NT1ZFID0gJ2ZvY3VzaW4nO1xuXG5mdW5jdGlvbiAkKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIChjb250ZXh0IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuZnVuY3Rpb24gc3RvcEV2ZW50KGUpIHtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufVxuZnVuY3Rpb24gb25LZXkoYnVja2V0LCB0YXJnZXQsIGtleXMsIGhhbmRsZXIsIHN0b3ApIHtcbiAgICBidWNrZXQuYWRkKHRhcmdldCwgRVZFTlRfS0VZLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoa2V5cy5pbmRleE9mKGUua2V5KSA+PSAwKSB7XG4gICAgICAgICAgICBpZiAoc3RvcCkge1xuICAgICAgICAgICAgICAgIHN0b3BFdmVudChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZXIoZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxudmFyIFBpY2tlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQaWNrZXIob3B0aW9ucykge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBQaWNrZXIpO1xuXG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHtcblxuICAgICAgICAgICAgcG9wdXA6ICdyaWdodCcsXG4gICAgICAgICAgICBsYXlvdXQ6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgIGFscGhhOiB0cnVlLFxuICAgICAgICAgICAgZWRpdG9yOiB0cnVlLFxuICAgICAgICAgICAgZWRpdG9yRm9ybWF0OiAnaGV4JyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogZmFsc2UsXG4gICAgICAgICAgICBkZWZhdWx0Q29sb3I6ICcjMGNmJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudEJ1Y2tldCgpO1xuXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBudWxsO1xuXG4gICAgICAgIHRoaXMub25Eb25lID0gbnVsbDtcblxuICAgICAgICB0aGlzLm9uT3BlbiA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5vbkNsb3NlID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoUGlja2VyLCBbe1xuICAgICAgICBrZXk6ICdzZXRPcHRpb25zJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncztcblxuICAgICAgICAgICAgZnVuY3Rpb24gdHJhbnNmZXIoc291cmNlLCB0YXJnZXQsIHNraXBLZXlzKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2tpcEtleXMgJiYgc2tpcEtleXMuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5wYXJlbnQgPSBvcHRpb25zO1xuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5wYXJlbnQgJiYgb3B0aW9ucy5wYXJlbnQgJiYgc2V0dGluZ3MucGFyZW50ICE9PSBvcHRpb25zLnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHMucmVtb3ZlKHNldHRpbmdzLnBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BvcHVwSW5pdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJhbnNmZXIob3B0aW9ucywgc2V0dGluZ3MpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IG9wdGlvbnMub25DaGFuZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm9uRG9uZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRG9uZSA9IG9wdGlvbnMub25Eb25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5vbk9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk9wZW4gPSBvcHRpb25zLm9uT3BlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMub25DbG9zZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2xvc2UgPSBvcHRpb25zLm9uQ2xvc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGNvbCA9IG9wdGlvbnMuY29sb3IgfHwgb3B0aW9ucy5jb2xvdXI7XG4gICAgICAgICAgICAgICAgaWYgKGNvbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRDb2xvcihjb2wpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBhcmVudCA9IHNldHRpbmdzLnBhcmVudDtcbiAgICAgICAgICAgIGlmIChwYXJlbnQgJiYgc2V0dGluZ3MucG9wdXAgJiYgIXRoaXMuX3BvcHVwSW5pdGVkKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgb3BlblByb3h5ID0gZnVuY3Rpb24gb3BlblByb3h5KGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLm9wZW5IYW5kbGVyKGUpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHMuYWRkKHBhcmVudCwgJ2NsaWNrJywgb3BlblByb3h5KTtcblxuICAgICAgICAgICAgICAgIG9uS2V5KHRoaXMuX2V2ZW50cywgcGFyZW50LCBbJyAnLCAnU3BhY2ViYXInLCAnRW50ZXInXSwgb3BlblByb3h5KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3BvcHVwSW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5wYXJlbnQgJiYgIXNldHRpbmdzLnBvcHVwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29wZW5IYW5kbGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW5IYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3coKSkge1xuXG4gICAgICAgICAgICAgICAgZSAmJiBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBhcmVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuXG4gICAgICAgICAgICAgICAgdmFyIHRvRm9jdXMgPSBlICYmIGUudHlwZSA9PT0gRVZFTlRfS0VZID8gdGhpcy5fZG9tRWRpdCA6IHRoaXMuZG9tRWxlbWVudDtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvRm9jdXMuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25PcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25PcGVuKHRoaXMuY29sb3VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Nsb3NlSGFuZGxlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZUhhbmRsZXIoZSkge1xuICAgICAgICAgICAgdmFyIGV2ZW50ID0gZSAmJiBlLnR5cGU7XG4gICAgICAgICAgICB2YXIgZG9IaWRlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICghZSkge1xuICAgICAgICAgICAgICAgIGRvSGlkZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSBFVkVOVF9DTElDS19PVVRTSURFIHx8IGV2ZW50ID09PSBFVkVOVF9UQUJfTU9WRSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGtub3duVGltZSA9ICh0aGlzLl9fY29udGFpbmVkRXZlbnQgfHwgMCkgKyAxMDA7XG4gICAgICAgICAgICAgICAgaWYgKGUudGltZVN0YW1wID4ga25vd25UaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvSGlkZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHN0b3BFdmVudChlKTtcblxuICAgICAgICAgICAgICAgIGRvSGlkZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkb0hpZGUgJiYgdGhpcy5oaWRlKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBhcmVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyc7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQgIT09IEVWRU5UX0NMSUNLX09VVFNJREUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wYXJlbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbkNsb3NlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DbG9zZSh0aGlzLmNvbG91cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdtb3ZlUG9wdXAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbW92ZVBvcHVwKG9wdGlvbnMsIG9wZW4pIHtcblxuICAgICAgICAgICAgdGhpcy5jbG9zZUhhbmRsZXIoKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5IYW5kbGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldENvbG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldENvbG9yKGNvbG9yLCBzaWxlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldENvbG9yKGNvbG9yLCB7IHNpbGVudDogc2lsZW50IH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdfc2V0Q29sb3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldENvbG9yKGNvbG9yLCBmbGFncykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IGNvbG9yLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY29sb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZsYWdzID0gZmxhZ3MgfHwge307XG4gICAgICAgICAgICB2YXIgYyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICBjID0gbmV3IENvbG9yKGNvbG9yKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGZsYWdzLmZhaWxTaWxlbnRseSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuYWxwaGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgaHNsYSA9IGMuaHNsYTtcbiAgICAgICAgICAgICAgICBoc2xhWzNdID0gMTtcbiAgICAgICAgICAgICAgICBjLmhzbGEgPSBoc2xhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb2xvdXIgPSB0aGlzLmNvbG9yID0gYztcbiAgICAgICAgICAgIHRoaXMuX3NldEhTTEEobnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgZmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRDb2xvdXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q29sb3VyKGNvbG91ciwgc2lsZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldENvbG9yKGNvbG91ciwgc2lsZW50KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2hvdycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMuc2V0dGluZ3MucGFyZW50O1xuICAgICAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9nZ2xlZCA9IHRoaXMuX3RvZ2dsZURPTSh0cnVlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3NldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdG9nZ2xlZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGh0bWwgPSB0aGlzLnNldHRpbmdzLnRlbXBsYXRlIHx8ICc8ZGl2IGNsYXNzPVwicGlja2VyX3dyYXBwZXJcIiB0YWJpbmRleD1cIi0xXCI+PGRpdiBjbGFzcz1cInBpY2tlcl9hcnJvd1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJwaWNrZXJfaHVlIHBpY2tlcl9zbGlkZXJcIj48ZGl2IGNsYXNzPVwicGlja2VyX3NlbGVjdG9yXCI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cInBpY2tlcl9zbFwiPjxkaXYgY2xhc3M9XCJwaWNrZXJfc2VsZWN0b3JcIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwicGlja2VyX2FscGhhIHBpY2tlcl9zbGlkZXJcIj48ZGl2IGNsYXNzPVwicGlja2VyX3NlbGVjdG9yXCI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cInBpY2tlcl9lZGl0b3JcIj48aW5wdXQgYXJpYS1sYWJlbD1cIlR5cGUgYSBjb2xvciBuYW1lIG9yIGhleCB2YWx1ZVwiLz48L2Rpdj48ZGl2IGNsYXNzPVwicGlja2VyX3NhbXBsZVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJwaWNrZXJfZG9uZVwiPjxidXR0b24+T2s8L2J1dHRvbj48L2Rpdj48ZGl2IGNsYXNzPVwicGlja2VyX2NhbmNlbFwiPjxidXR0b24+Q2FuY2VsPC9idXR0b24+PC9kaXY+PC9kaXY+JztcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gcGFyc2VIVE1MKGh0bWwpO1xuXG4gICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSB3cmFwcGVyO1xuICAgICAgICAgICAgdGhpcy5fZG9tSCA9ICQoJy5waWNrZXJfaHVlJywgd3JhcHBlcik7XG4gICAgICAgICAgICB0aGlzLl9kb21TTCA9ICQoJy5waWNrZXJfc2wnLCB3cmFwcGVyKTtcbiAgICAgICAgICAgIHRoaXMuX2RvbUEgPSAkKCcucGlja2VyX2FscGhhJywgd3JhcHBlcik7XG4gICAgICAgICAgICB0aGlzLl9kb21FZGl0ID0gJCgnLnBpY2tlcl9lZGl0b3IgaW5wdXQnLCB3cmFwcGVyKTtcbiAgICAgICAgICAgIHRoaXMuX2RvbVNhbXBsZSA9ICQoJy5waWNrZXJfc2FtcGxlJywgd3JhcHBlcik7XG4gICAgICAgICAgICB0aGlzLl9kb21Pa2F5ID0gJCgnLnBpY2tlcl9kb25lIGJ1dHRvbicsIHdyYXBwZXIpO1xuICAgICAgICAgICAgdGhpcy5fZG9tQ2FuY2VsID0gJCgnLnBpY2tlcl9jYW5jZWwgYnV0dG9uJywgd3JhcHBlcik7XG5cbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbGF5b3V0XycgKyB0aGlzLnNldHRpbmdzLmxheW91dCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuYWxwaGEpIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ25vX2FscGhhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZWRpdG9yKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdub19lZGl0b3InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5jYW5jZWxCdXR0b24pIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ25vX2NhbmNlbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWZQb3B1cChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgncG9wdXAnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLl9zZXRQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jb2xvdXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVVSSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRDb2xvcih0aGlzLnNldHRpbmdzLmRlZmF1bHRDb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoaWRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdG9nZ2xlRE9NKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVzdHJveScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdfYmluZEV2ZW50cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYmluZEV2ZW50cygpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgZG9tID0gdGhpcy5kb21FbGVtZW50LFxuICAgICAgICAgICAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICAgICAgICAgICAgZnVuY3Rpb24gYWRkRXZlbnQodGFyZ2V0LCB0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRzLmFkZCh0YXJnZXQsIHR5cGUsIGhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhZGRFdmVudChkb20sICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkcmFnVHJhY2soZXZlbnRzLCB0aGlzLl9kb21ILCBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0Ll9zZXRIU0xBKHgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRyYWdUcmFjayhldmVudHMsIHRoaXMuX2RvbVNMLCBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0Ll9zZXRIU0xBKG51bGwsIHgsIDEgLSB5KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hbHBoYSkge1xuICAgICAgICAgICAgICAgIGRyYWdUcmFjayhldmVudHMsIHRoaXMuX2RvbUEsIGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGF0Ll9zZXRIU0xBKG51bGwsIG51bGwsIG51bGwsIDEgLSB5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGVkaXRJbnB1dCA9IHRoaXMuX2RvbUVkaXQ7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWRkRXZlbnQoZWRpdElucHV0LCAnaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGF0Ll9zZXRDb2xvcih0aGlzLnZhbHVlLCB7IGZyb21FZGl0b3I6IHRydWUsIGZhaWxTaWxlbnRseTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGFkZEV2ZW50KGVkaXRJbnB1dCwgJ2ZvY3VzJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQuc2VsZWN0aW9uU3RhcnQgPT09IGlucHV0LnNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5faWZQb3B1cChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgcG9wdXBDbG9zZVByb3h5ID0gZnVuY3Rpb24gcG9wdXBDbG9zZVByb3h5KGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5jbG9zZUhhbmRsZXIoZSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGFkZEV2ZW50KHdpbmRvdywgRVZFTlRfQ0xJQ0tfT1VUU0lERSwgcG9wdXBDbG9zZVByb3h5KTtcbiAgICAgICAgICAgICAgICBhZGRFdmVudCh3aW5kb3csIEVWRU5UX1RBQl9NT1ZFLCBwb3B1cENsb3NlUHJveHkpO1xuICAgICAgICAgICAgICAgIG9uS2V5KGV2ZW50cywgZG9tLCBbJ0VzYycsICdFc2NhcGUnXSwgcG9wdXBDbG9zZVByb3h5KTtcblxuICAgICAgICAgICAgICAgIHZhciB0aW1lS2VlcGVyID0gZnVuY3Rpb24gdGltZUtlZXBlcihlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMi5fX2NvbnRhaW5lZEV2ZW50ID0gZS50aW1lU3RhbXA7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhZGRFdmVudChkb20sIEVWRU5UX0NMSUNLX09VVFNJREUsIHRpbWVLZWVwZXIpO1xuXG4gICAgICAgICAgICAgICAgYWRkRXZlbnQoZG9tLCBFVkVOVF9UQUJfTU9WRSwgdGltZUtlZXBlcik7XG5cbiAgICAgICAgICAgICAgICBhZGRFdmVudChfdGhpczIuX2RvbUNhbmNlbCwgJ2NsaWNrJywgcG9wdXBDbG9zZVByb3h5KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgb25Eb25lUHJveHkgPSBmdW5jdGlvbiBvbkRvbmVQcm94eShlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLl9pZlBvcHVwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5jbG9zZUhhbmRsZXIoZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5vbkRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLm9uRG9uZShfdGhpczIuY29sb3VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYWRkRXZlbnQodGhpcy5fZG9tT2theSwgJ2NsaWNrJywgb25Eb25lUHJveHkpO1xuICAgICAgICAgICAgb25LZXkoZXZlbnRzLCBkb20sIFsnRW50ZXInXSwgb25Eb25lUHJveHkpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdfc2V0UG9zaXRpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldFBvc2l0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMuc2V0dGluZ3MucGFyZW50LFxuICAgICAgICAgICAgICAgIGVsbSA9IHRoaXMuZG9tRWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKHBhcmVudCAhPT0gZWxtLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5faWZQb3B1cChmdW5jdGlvbiAocG9wdXApIHtcblxuICAgICAgICAgICAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGNzc0NsYXNzID0gcG9wdXAgPT09IHRydWUgPyAncG9wdXBfcmlnaHQnIDogJ3BvcHVwXycgKyBwb3B1cDtcblxuICAgICAgICAgICAgICAgIFsncG9wdXBfdG9wJywgJ3BvcHVwX2JvdHRvbScsICdwb3B1cF9sZWZ0JywgJ3BvcHVwX3JpZ2h0J10uZm9yRWFjaChmdW5jdGlvbiAoYykge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjID09PSBjc3NDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5hZGQoYyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbG0uY2xhc3NMaXN0LnJlbW92ZShjKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ19zZXRIU0xBJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRIU0xBKGgsIHMsIGwsIGEsIGZsYWdzKSB7XG4gICAgICAgICAgICBmbGFncyA9IGZsYWdzIHx8IHt9O1xuXG4gICAgICAgICAgICB2YXIgY29sID0gdGhpcy5jb2xvdXIsXG4gICAgICAgICAgICAgICAgaHNsYSA9IGNvbC5oc2xhO1xuXG4gICAgICAgICAgICBbaCwgcywgbCwgYV0uZm9yRWFjaChmdW5jdGlvbiAoeCwgaSkge1xuICAgICAgICAgICAgICAgIGlmICh4IHx8IHggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaHNsYVtpXSA9IHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb2wuaHNsYSA9IGhzbGE7XG5cbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVVJKGZsYWdzKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMub25DaGFuZ2UgJiYgIWZsYWdzLnNpbGVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoY29sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VwZGF0ZVVJJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVVSShmbGFncykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmbGFncyA9IGZsYWdzIHx8IHt9O1xuXG4gICAgICAgICAgICB2YXIgY29sID0gdGhpcy5jb2xvdXIsXG4gICAgICAgICAgICAgICAgaHNsID0gY29sLmhzbGEsXG4gICAgICAgICAgICAgICAgY3NzSHVlID0gJ2hzbCgnICsgaHNsWzBdICogSFVFUyArICcsIDEwMCUsIDUwJSknLFxuICAgICAgICAgICAgICAgIGNzc0hTTCA9IGNvbC5oc2xTdHJpbmcsXG4gICAgICAgICAgICAgICAgY3NzSFNMQSA9IGNvbC5oc2xhU3RyaW5nO1xuXG4gICAgICAgICAgICB2YXIgdWlIID0gdGhpcy5fZG9tSCxcbiAgICAgICAgICAgICAgICB1aVNMID0gdGhpcy5fZG9tU0wsXG4gICAgICAgICAgICAgICAgdWlBID0gdGhpcy5fZG9tQSxcbiAgICAgICAgICAgICAgICB0aHVtYkggPSAkKCcucGlja2VyX3NlbGVjdG9yJywgdWlIKSxcbiAgICAgICAgICAgICAgICB0aHVtYlNMID0gJCgnLnBpY2tlcl9zZWxlY3RvcicsIHVpU0wpLFxuICAgICAgICAgICAgICAgIHRodW1iQSA9ICQoJy5waWNrZXJfc2VsZWN0b3InLCB1aUEpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBwb3NYKHBhcmVudCwgY2hpbGQsIHJlbFgpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5zdHlsZS5sZWZ0ID0gcmVsWCAqIDEwMCArICclJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHBvc1kocGFyZW50LCBjaGlsZCwgcmVsWSkge1xuICAgICAgICAgICAgICAgIGNoaWxkLnN0eWxlLnRvcCA9IHJlbFkgKiAxMDAgKyAnJSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBvc1godWlILCB0aHVtYkgsIGhzbFswXSk7XG5cbiAgICAgICAgICAgIHRoaXMuX2RvbVNMLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuX2RvbUguc3R5bGUuY29sb3IgPSBjc3NIdWU7XG5cbiAgICAgICAgICAgIHBvc1godWlTTCwgdGh1bWJTTCwgaHNsWzFdKTtcbiAgICAgICAgICAgIHBvc1kodWlTTCwgdGh1bWJTTCwgMSAtIGhzbFsyXSk7XG5cbiAgICAgICAgICAgIHVpU0wuc3R5bGUuY29sb3IgPSBjc3NIU0w7XG5cbiAgICAgICAgICAgIHBvc1kodWlBLCB0aHVtYkEsIDEgLSBoc2xbM10pO1xuXG4gICAgICAgICAgICB2YXIgb3BhcXVlID0gY3NzSFNMLFxuICAgICAgICAgICAgICAgIHRyYW5zcCA9IG9wYXF1ZS5yZXBsYWNlKCdoc2wnLCAnaHNsYScpLnJlcGxhY2UoJyknLCAnLCAwKScpLFxuICAgICAgICAgICAgICAgIGJnID0gJ2xpbmVhci1ncmFkaWVudCgnICsgW29wYXF1ZSwgdHJhbnNwXSArICcpJztcblxuICAgICAgICAgICAgdGhpcy5fZG9tQS5zdHlsZS5iYWNrZ3JvdW5kID0gYmcgKyAnLCAnICsgQkdfVFJBTlNQO1xuXG4gICAgICAgICAgICBpZiAoIWZsYWdzLmZyb21FZGl0b3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm9ybWF0ID0gdGhpcy5zZXR0aW5ncy5lZGl0b3JGb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgIGFscGhhID0gdGhpcy5zZXR0aW5ncy5hbHBoYTtcblxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdyZ2InOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBjb2wucHJpbnRSR0IoYWxwaGEpO2JyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdoc2wnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBjb2wucHJpbnRIU0woYWxwaGEpO2JyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBjb2wucHJpbnRIZXgoYWxwaGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9kb21FZGl0LnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2RvbVNhbXBsZS5zdHlsZS5jb2xvciA9IGNzc0hTTEE7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ19pZlBvcHVwJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9pZlBvcHVwKGFjdGlvbklmLCBhY3Rpb25FbHNlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5wYXJlbnQgJiYgdGhpcy5zZXR0aW5ncy5wb3B1cCkge1xuICAgICAgICAgICAgICAgIGFjdGlvbklmICYmIGFjdGlvbklmKHRoaXMuc2V0dGluZ3MucG9wdXApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25FbHNlICYmIGFjdGlvbkVsc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3RvZ2dsZURPTScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdG9nZ2xlRE9NKHRvVmlzaWJsZSkge1xuICAgICAgICAgICAgdmFyIGRvbSA9IHRoaXMuZG9tRWxlbWVudDtcbiAgICAgICAgICAgIGlmICghZG9tKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZGlzcGxheVN0eWxlID0gdG9WaXNpYmxlID8gJycgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgdG9nZ2xlID0gZG9tLnN0eWxlLmRpc3BsYXkgIT09IGRpc3BsYXlTdHlsZTtcblxuICAgICAgICAgICAgaWYgKHRvZ2dsZSkge1xuICAgICAgICAgICAgICAgIGRvbS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheVN0eWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvZ2dsZTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gUGlja2VyO1xufSgpO1xuXG57XG4gICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9ICcucGlja2VyX3dyYXBwZXIubm9fYWxwaGEgLnBpY2tlcl9hbHBoYXtkaXNwbGF5Om5vbmV9LnBpY2tlcl93cmFwcGVyLm5vX2VkaXRvciAucGlja2VyX2VkaXRvcntwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Oi0xO29wYWNpdHk6MH0ucGlja2VyX3dyYXBwZXIubm9fY2FuY2VsIC5waWNrZXJfY2FuY2Vse2Rpc3BsYXk6bm9uZX0ubGF5b3V0X2RlZmF1bHQucGlja2VyX3dyYXBwZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZmxvdzpyb3cgd3JhcDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpzdHJldGNoO2ZvbnQtc2l6ZToxMHB4O3dpZHRoOjI1ZW07cGFkZGluZzouNWVtfS5sYXlvdXRfZGVmYXVsdC5waWNrZXJfd3JhcHBlciBpbnB1dCwubGF5b3V0X2RlZmF1bHQucGlja2VyX3dyYXBwZXIgYnV0dG9ue2ZvbnQtc2l6ZToxcmVtfS5sYXlvdXRfZGVmYXVsdC5waWNrZXJfd3JhcHBlcj4qe21hcmdpbjouNWVtfS5sYXlvdXRfZGVmYXVsdC5waWNrZXJfd3JhcHBlcjo6YmVmb3Jle2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjA7b3JkZXI6MX0ubGF5b3V0X2RlZmF1bHQgLnBpY2tlcl9zbGlkZXIsLmxheW91dF9kZWZhdWx0IC5waWNrZXJfc2VsZWN0b3J7cGFkZGluZzoxZW19LmxheW91dF9kZWZhdWx0IC5waWNrZXJfaHVle3dpZHRoOjEwMCV9LmxheW91dF9kZWZhdWx0IC5waWNrZXJfc2x7ZmxleDoxIDEgYXV0b30ubGF5b3V0X2RlZmF1bHQgLnBpY2tlcl9zbDo6YmVmb3Jle2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO3BhZGRpbmctYm90dG9tOjEwMCV9LmxheW91dF9kZWZhdWx0IC5waWNrZXJfZWRpdG9ye29yZGVyOjE7d2lkdGg6Ni41cmVtfS5sYXlvdXRfZGVmYXVsdCAucGlja2VyX2VkaXRvciBpbnB1dHt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5sYXlvdXRfZGVmYXVsdCAucGlja2VyX3NhbXBsZXtvcmRlcjoxO2ZsZXg6MSAxIGF1dG99LmxheW91dF9kZWZhdWx0IC5waWNrZXJfZG9uZSwubGF5b3V0X2RlZmF1bHQgLnBpY2tlcl9jYW5jZWx7b3JkZXI6MX0ucGlja2VyX3dyYXBwZXJ7Ym94LXNpemluZzpib3JkZXItYm94O2JhY2tncm91bmQ6I2YyZjJmMjtib3gtc2hhZG93OjAgMCAwIDFweCBzaWx2ZXI7Y3Vyc29yOmRlZmF1bHQ7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtjb2xvcjojNDQ0O3BvaW50ZXItZXZlbnRzOmF1dG99LnBpY2tlcl93cmFwcGVyOmZvY3Vze291dGxpbmU6bm9uZX0ucGlja2VyX3dyYXBwZXIgYnV0dG9uLC5waWNrZXJfd3JhcHBlciBpbnB1dHtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOm5vbmU7Ym94LXNoYWRvdzowIDAgMCAxcHggc2lsdmVyO291dGxpbmU6bm9uZX0ucGlja2VyX3dyYXBwZXIgYnV0dG9uOmZvY3VzLC5waWNrZXJfd3JhcHBlciBidXR0b246YWN0aXZlLC5waWNrZXJfd3JhcHBlciBpbnB1dDpmb2N1cywucGlja2VyX3dyYXBwZXIgaW5wdXQ6YWN0aXZle2JveC1zaGFkb3c6MCAwIDJweCAxcHggIzFlOTBmZn0ucGlja2VyX3dyYXBwZXIgYnV0dG9ue3BhZGRpbmc6LjRlbSAuNmVtO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgwZGVnLCBnYWluc2Jvcm8sIHRyYW5zcGFyZW50KX0ucGlja2VyX3dyYXBwZXIgYnV0dG9uOmFjdGl2ZXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgwZGVnLCB0cmFuc3BhcmVudCwgZ2FpbnNib3JvKX0ucGlja2VyX3dyYXBwZXIgYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZn0ucGlja2VyX3NlbGVjdG9ye3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTtkaXNwbGF5OmJsb2NrOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsIC01MCUpO2JvcmRlcjoycHggc29saWQgI2ZmZjtib3JkZXItcmFkaXVzOjEwMCU7Ym94LXNoYWRvdzowIDAgM3B4IDFweCAjNjdiOWZmO2JhY2tncm91bmQ6Y3VycmVudENvbG9yO2N1cnNvcjpwb2ludGVyfS5waWNrZXJfc2xpZGVyIC5waWNrZXJfc2VsZWN0b3J7Ym9yZGVyLXJhZGl1czoycHh9LnBpY2tlcl9odWV7cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJlZCwgeWVsbG93LCBsaW1lLCBjeWFuLCBibHVlLCBtYWdlbnRhLCByZWQpO2JveC1zaGFkb3c6MCAwIDAgMXB4IHNpbHZlcn0ucGlja2VyX3Nse3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaGFkb3c6MCAwIDAgMXB4IHNpbHZlcjtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDUwJSksbGluZWFyLWdyYWRpZW50KDBkZWcsIGJsYWNrLCByZ2JhKDAsIDAsIDAsIDApIDUwJSksbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjODA4MDgwLCByZ2JhKDEyOCwgMTI4LCAxMjgsIDApKX0ucGlja2VyX2FscGhhLC5waWNrZXJfc2FtcGxle3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBsaWdodGdyZXkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDc1JSwgbGlnaHRncmV5IDc1JSkgMCAwLzJlbSAyZW0sbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBsaWdodGdyZXkgMjUlLCB3aGl0ZSAyNSUsIHdoaXRlIDc1JSwgbGlnaHRncmV5IDc1JSkgMWVtIDFlbS8yZW0gMmVtO2JveC1zaGFkb3c6MCAwIDAgMXB4IHNpbHZlcn0ucGlja2VyX2FscGhhIC5waWNrZXJfc2VsZWN0b3IsLnBpY2tlcl9zYW1wbGUgLnBpY2tlcl9zZWxlY3RvcntiYWNrZ3JvdW5kOm5vbmV9LnBpY2tlcl9lZGl0b3IgaW5wdXR7Zm9udC1mYW1pbHk6bW9ub3NwYWNlO3BhZGRpbmc6LjJlbSAuNGVtfS5waWNrZXJfc2FtcGxlOjpiZWZvcmV7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOmN1cnJlbnRDb2xvcn0ucGlja2VyX2Fycm93e3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6LTF9LnBpY2tlcl93cmFwcGVyLnBvcHVwe3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MjttYXJnaW46MS41ZW19LnBpY2tlcl93cmFwcGVyLnBvcHVwLC5waWNrZXJfd3JhcHBlci5wb3B1cCAucGlja2VyX2Fycm93OjpiZWZvcmUsLnBpY2tlcl93cmFwcGVyLnBvcHVwIC5waWNrZXJfYXJyb3c6OmFmdGVye2JhY2tncm91bmQ6I2YyZjJmMjtib3gtc2hhZG93OjAgMCAxMHB4IDFweCByZ2JhKDAsMCwwLC40KX0ucGlja2VyX3dyYXBwZXIucG9wdXAgLnBpY2tlcl9hcnJvd3t3aWR0aDozZW07aGVpZ2h0OjNlbTttYXJnaW46MH0ucGlja2VyX3dyYXBwZXIucG9wdXAgLnBpY2tlcl9hcnJvdzo6YmVmb3JlLC5waWNrZXJfd3JhcHBlci5wb3B1cCAucGlja2VyX2Fycm93OjphZnRlcntjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7ei1pbmRleDotOTl9LnBpY2tlcl93cmFwcGVyLnBvcHVwIC5waWNrZXJfYXJyb3c6OmJlZm9yZXt3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoNDVkZWcpO3RyYW5zZm9ybTpza2V3KDQ1ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MCAxMDAlO3RyYW5zZm9ybS1vcmlnaW46MCAxMDAlfS5waWNrZXJfd3JhcHBlci5wb3B1cCAucGlja2VyX2Fycm93OjphZnRlcnt3aWR0aDoxNTAlO2hlaWdodDoxNTAlO2JveC1zaGFkb3c6bm9uZX0ucG9wdXAucG9wdXBfdG9we2JvdHRvbToxMDAlO2xlZnQ6MH0ucG9wdXAucG9wdXBfdG9wIC5waWNrZXJfYXJyb3d7Ym90dG9tOjA7bGVmdDowOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKX0ucG9wdXAucG9wdXBfYm90dG9te3RvcDoxMDAlO2xlZnQ6MH0ucG9wdXAucG9wdXBfYm90dG9tIC5waWNrZXJfYXJyb3d7dG9wOjA7bGVmdDowOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZykgc2NhbGUoMSwgLTEpO3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpIHNjYWxlKDEsIC0xKX0ucG9wdXAucG9wdXBfbGVmdHt0b3A6MDtyaWdodDoxMDAlfS5wb3B1cC5wb3B1cF9sZWZ0IC5waWNrZXJfYXJyb3d7dG9wOjA7cmlnaHQ6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgtMSwgMSk7dHJhbnNmb3JtOnNjYWxlKC0xLCAxKX0ucG9wdXAucG9wdXBfcmlnaHR7dG9wOjA7bGVmdDoxMDAlfS5wb3B1cC5wb3B1cF9yaWdodCAucGlja2VyX2Fycm93e3RvcDowO2xlZnQ6MH0nO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgICBQaWNrZXIuU3R5bGVFbGVtZW50ID0gc3R5bGU7XG59XG5cbmV4cG9ydCB7IFBpY2tlciBhcyBkZWZhdWx0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3Njc3Mvc3R5bGVzLnNjc3NcIjtcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG4vKipcbiAqIFF1ZXJ5IHNlbGVjdG9yIHN0cmluZ1xuICogZm9yIHRoZSBjYW52YXMgdGFyZ2V0XG4gKi9cbmNvbnN0IHRhcmdldCA9IGAjJHtDb25zdGFudHMuQ0FOVkFTX1RBUkdFVH1gO1xuLyoqXG4gKiBBcHAgZW50cnkgcG9pbnQuIFN0YXJ0IGhlcmUuXG4gKi9cbigoKSA9PiB7XG4gICAgLy8gVGhpcyBpcyBvdXIgdGFyZ2V0IGNhbnZhc1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgICBpZiAoY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgLy8gVXNpbmcgdGhlIDJEIGNvbnRleHRcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBpZiAoY29udGV4dCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBDcmVhdGUgYXBwbGljYXRpb24gb2JqZWN0LlxuICAgICAgICBjb25zdCBhcHAgPSBuZXcgQXBwKGNhbnZhcywgY29udGV4dCk7XG4gICAgICAgIC8vIERlZmluZSBhbmltYXRpb24gbG9vcCBhbmQgcHJvY2Vzcy5cbiAgICAgICAgY29uc3QgYW5pbWF0aW9uTG9vcCA9ICh0aW1lc3RhbXApID0+IHtcbiAgICAgICAgICAgIC8vIEV2ZXJ5dGhpbmcgZ2V0cyBkb25lIGhlcmUuXG4gICAgICAgICAgICBhcHAucHJvY2Vzcyh0aW1lc3RhbXApO1xuICAgICAgICAgICAgLy8gS2VlcCByZXF1ZXN0aW5nIG5ldyBmcmFtZXNcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uTG9vcCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEJvb3RzdHJhcCBhbnkgc2V0dXAgc3R1ZmZcbiAgICAgICAgYXBwLnNldFVwKCk7XG4gICAgICAgIC8vIFN0YXJ0IHRoZSByZW5kZXJsb29wLlxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkxvb3ApO1xuICAgIH1cbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=