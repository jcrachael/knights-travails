"use strict";
(self["webpackChunkknights_travails"] = self["webpackChunkknights_travails"] || []).push([["bundle"],{

/***/ 426:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0; padding: 0;\r\n    font-family: 'Roboto Mono', Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n    width: 100vw;\r\n    text-align: center;\r\n}\r\n\r\n#board-container {\r\n    margin: 20px auto;\r\n    width: 550px;\r\n    height: 550px;\r\n    display: grid;\r\n    grid-template-columns: repeat(8, auto);\r\n    grid-template-rows: repeat(8, auto);\r\n    align-items: center;\r\n    justify-items: center;\r\n}\r\n\r\n.cell {\r\n    border: 1px black solid;\r\n    background-color: #fff;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.cell:hover {\r\n    background-color: rgba(144,144,144,0.3);\r\n}\r\n\r\n.cell:active {\r\n    background-color: rgba(144,144,144,0.5);\r\n}\r\n\r\n\r\n#comment {\r\n    height: 130px;\r\n}\r\n\r\nheader {\r\n    margin: 20pt;\r\n}\r\n\r\nfooter {\r\n    position: absolute;\r\n    bottom: 0;\r\n    font-size: 8pt;\r\n    width: 100%;\r\n    height: 19px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS,EAAE,UAAU;IACrB,wDAAwD;AAC5D;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,sBAAsB;IACtB,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,uCAAuC;AAC3C;;;AAGA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,cAAc;IACd,WAAW;IACX,YAAY;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap');\r\n\r\n* {\r\n    margin: 0; padding: 0;\r\n    font-family: 'Roboto Mono', Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n    width: 100vw;\r\n    text-align: center;\r\n}\r\n\r\n#board-container {\r\n    margin: 20px auto;\r\n    width: 550px;\r\n    height: 550px;\r\n    display: grid;\r\n    grid-template-columns: repeat(8, auto);\r\n    grid-template-rows: repeat(8, auto);\r\n    align-items: center;\r\n    justify-items: center;\r\n}\r\n\r\n.cell {\r\n    border: 1px black solid;\r\n    background-color: #fff;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.cell:hover {\r\n    background-color: rgba(144,144,144,0.3);\r\n}\r\n\r\n.cell:active {\r\n    background-color: rgba(144,144,144,0.5);\r\n}\r\n\r\n\r\n#comment {\r\n    height: 130px;\r\n}\r\n\r\nheader {\r\n    margin: 20pt;\r\n}\r\n\r\nfooter {\r\n    position: absolute;\r\n    bottom: 0;\r\n    font-size: 8pt;\r\n    width: 100%;\r\n    height: 19px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ 537:
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 654:
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ 426);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 379:
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

/***/ 569:
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

/***/ 216:
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

/***/ 565:
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

/***/ 795:
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
  } // For old IE

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

/***/ 589:
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

/***/ 972:
/*!********************************!*\
  !*** ./src/displayControls.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "beginGame": () => (/* binding */ beginGame),
/* harmony export */   "updateComment": () => (/* binding */ updateComment)
/* harmony export */ });
/* harmony import */ var _knightMoves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knightMoves */ 581);


function printBoard(board) {
    // Grab main and build container
    const main = document.getElementById('main');
    const div = document.createElement('div');
    div.setAttribute('id', 'board-container');
    main.appendChild(div);
    // for each row of the board
    for (let i = 0; i < board.length; i++) {
        // For each cell in each row
        for (let j = 0; j < board[i].length; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('id', `cell-${board[i][j]}`);
            cell.classList.add('cell');
            cell.setAttribute('data-coord', `${board[i][j]}`);
            cell.innerHTML = `<p class="cell-text">${board[i][j]}</p>`;
            div.appendChild(cell);
        }
    }
}

function updateComment(message) {
    const comment = document.getElementById('comment');
    comment.innerText = message;
}

function beginGame() {
    // Declare variables
    // Instantiate the Graph to represent the board
    const boardGraph = (0,_knightMoves__WEBPACK_IMPORTED_MODULE_0__.makeGraph)();
    // Board array for printing and making cells
    const board = [
        [0,1,2,3,4,5,6,7],
        [8,9,10,11,12,13,14,15],
        [16,17,18,19,20,21,22,23],
        [24,25,26,27,28,29,30,31],
        [32,33,34,35,36,37,38,39],
        [40,41,42,43,44,45,46,47],
        [48,49,50,51,52,53,54,55],
        [56,57,58,59,60,61,62,63]
    ]
    // Welcome message
    let welcomeMessage = `Welcome to Knights Travails!

    Please select a starting square...`;    
    // Start and end vertices set to null
    let start = null;
    let end = null;

    // Print the board and comment
    updateComment(welcomeMessage);
    printBoard(board);

    // Get all the cells
    const cells = document.querySelectorAll('.cell');

    // Iterate through each cell 
    cells.forEach(function(cell) {
        cell.addEventListener('click', function() {   
            // Get the coord/index number
            let coord = cell.getAttribute('data-coord');
            // get the vertex with this index number
            let thisVertex = boardGraph.list[coord]
            // If start is not defined, set this coord to start
            if (start === null) {
                cells.forEach(function(cell) {
                    cell.style.backgroundColor = 'white';
                });
                start = thisVertex;
                cell.style.backgroundColor = 'yellowgreen';
                updateComment();
                updateComment('Start: ' + start.coord + `

                ` + 'Please select an ending square...');
                return start

            // Otherwise, set this coord to end
            } else if (start !== null && end === null) {
                let end = thisVertex;
                cell.style.backgroundColor = '#eb4934';
                updateComment('Start: ' + start.coord + `
                ` +'End: ' + end.coord + `
                
                ` + `Moving the Knight from [${start.coord}] to [${end.coord}]...`);
                
                // Call the function to move from start to end
                (0,_knightMoves__WEBPACK_IMPORTED_MODULE_0__.knightMoves)(boardGraph, start, end);

                // reset start to null for next click
                start = null;
                return;
            } 
          
        });
    });
    
}




/***/ }),

/***/ 304:
/*!**********************!*\
  !*** ./src/graph.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Graph": () => (/* binding */ Graph),
/* harmony export */   "Vertex": () => (/* binding */ Vertex),
/* harmony export */   "adjacencyList": () => (/* binding */ adjacencyList)
/* harmony export */ });
/* harmony import */ var _displayControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayControls */ 972);


const adjacencyList = {
    '0': [10, 17],
    '1': [16, 18, 11],
    '2': [8, 17, 12, 19],
    '3': [9, 18, 20, 13],
    '4': [10, 19, 21, 14],
    '5': [11, 20, 22, 15],
    '6': [12, 21, 23],
    '7': [13, 22],

    '8': [ 2, 18, 25 ],
    '9': [ 3, 24, 19, 26 ],
    '10': [ 0, 16, 4, 20, 25, 27 ],
    '11': [ 1, 17, 21, 5, 26, 28 ],
    '12': [ 2, 18, 22, 6, 27, 29 ],
    '13': [ 3, 19, 7, 23, 28, 30 ],
    '14': [ 4, 20, 31, 29 ],
    '15': [ 5, 21, 30 ],

    '16': [ 1, 10, 26, 33 ],
    '17': [ 0, 2, 11, 32, 27, 34 ],
    '18': [ 1, 3, 12, 28, 35, 33, 24, 8 ],
    '19': [ 2, 4, 13, 29, 36, 34, 25, 9 ],
    '20': [ 3, 5, 14, 30, 37, 35, 26, 10 ],
    '21': [ 4, 6, 15, 31, 38, 36, 27, 11 ],
    '22': [ 5, 7, 39, 37, 28, 12 ],
    '23': [ 6, 13, 29, 38 ],
    
    '24': [ 9, 18, 34, 41 ],
    '25': [ 8, 10, 19, 35, 42, 40 ],
    '26': [ 9, 11, 20, 36, 43, 41, 32, 16 ],
    '27': [ 10, 12, 21, 37, 44, 42, 33, 17 ],
    '28': [ 11, 13, 22, 38, 45, 43, 34, 18 ],
    '29': [ 12, 14, 23, 39, 46, 44, 35, 19 ],
    '30': [ 13, 15, 47, 45, 36, 20 ],
    '31': [ 14, 21, 37, 46 ],
    
    '32': [ 17, 26, 42, 49 ],
    '33': [ 16, 18, 27, 43, 50, 48 ],
    '34': [ 17, 19, 28, 44, 51, 49, 40, 24 ],
    '35': [ 18, 20, 29, 45, 52, 50, 41, 25 ],
    '36': [ 19, 21, 30, 46, 53, 51, 42, 26 ],
    '37': [ 20, 22, 31, 47, 54, 52, 43, 27 ],
    '38': [ 21, 23, 55, 53, 44, 28 ],
    '39': [ 22, 29, 45, 54 ],
    
    '40': [ 25, 34, 50, 57 ],
    '41': [ 24, 26, 35, 51, 58, 56 ],  
    '42': [ 25, 27, 36, 52, 59, 57, 48, 32 ],
    '43': [ 26, 28, 37, 53, 60, 58, 49, 33 ],
    '44': [ 27, 29, 38, 54, 61, 59, 50, 34 ],
    '45': [ 28, 30, 39, 55, 62, 60, 51, 35 ],
    '46': [ 29, 31, 63, 61, 52, 36 ],
    '47': [ 30, 37, 53, 62 ],
    
    '48': [ 33, 42, 58 ],
    '49': [ 32, 34, 43, 59 ],   
    '50': [ 33, 35, 44, 60, 56, 40 ],
    '51': [ 34, 36, 45, 61, 57, 41 ],
    '52': [ 35, 37, 46, 62, 58, 42 ],
    '53': [ 36, 38, 47, 63, 59, 43 ],
    '54': [ 37, 39, 60, 44 ],
    '55': [ 38, 45, 61 ],
    
    '56': [ 41, 50 ],
    '57': [ 40, 42, 51 ],
    '58': [ 41, 43, 52, 48 ],
    '59': [ 42, 44, 53, 49 ],
    '60': [ 43, 45, 54, 50 ],
    '61': [ 44, 46, 55, 51 ],
    '62': [ 45, 47, 52 ],
    '63': [ 46, 53,],
};

class Vertex {
    constructor(coord) {
        // set the coordinate of this vertex
        this.coord = coord;
        // get this vertex's adjacency list
        this.neighbours = [];
        // set visited to false
        this.visited = false;
        // set queued to false
        this.queued = false;
        // set level to null;
        this.level = null;
    }
};


class Graph { 
    constructor(numVertices, list) {
        this.vertices = numVertices;
        this.list = list;
    }

    breadthFirstTraverse(start, end) {
        // DEBUG console logs
        console.log('Traversing the graph from node ' + start + ' to node ' + end);

        // set all vertices' 'visited' and 'queued' properties to false
        for (let i = 0; i < this.list.length; i++) {
            this.list[i].visited = false;
            this.list[i].queued = false;
        }


        // Get the right start vertex
        let startVertex = this.list[start];
        let endVertex = this.list[end];


        console.log('start vertex: ' + startVertex.coord);

        console.log('end vertex: ' + endVertex.coord);

        // Make a queue
        let queue = [];

      

        // Add start node to queue and mark it as queued
        startVertex.queued = true;
        startVertex.level = 0;
        queue.push(startVertex);
        
  
        // While items are in the queue
        while (queue.length > 0) {
            
            // Get the first item in the queue
            let thisNode = queue[0];
            
            // Mark this item as visited
            thisNode.visited = true;

            // For each of this item's neighbours
            for (let i = 0; i < thisNode.neighbours.length; i++) {
                let thisNodeNeighbour = thisNode.neighbours[i];
                
                // If this neighbour has been visited or is already queued, skip it
                if (thisNodeNeighbour.visited === false && 
                    thisNodeNeighbour.queued === false &&
                    thisNodeNeighbour.coord !== end) { 
                    // Add this neighbour to the queue
                    thisNodeNeighbour.parent = thisNode;
                    thisNodeNeighbour.level = thisNode.level + 1;
                    thisNodeNeighbour.queued = true;
                    queue.push(thisNodeNeighbour);
                } 
            }
            // Remove the first item from the queue
            queue[0].queued = false;
            queue.splice(0,1);
            
            // if the current node is our target, end traversal
            if (thisNode === endVertex) {

                if (thisNode.level === 0) {
                    (0,_displayControls__WEBPACK_IMPORTED_MODULE_0__.updateComment)(`Start: ${startVertex.coord} -> End: ${thisNode.coord}
                    
                    You were already here!`)
                }

                if (thisNode.level === 1) {
                    (0,_displayControls__WEBPACK_IMPORTED_MODULE_0__.updateComment)(`Start: ${startVertex.coord} -> End: ${thisNode.coord}
                    
                    You made it in ${thisNode.level} move!

                    Move: ${startVertex.coord} -> ${endVertex.coord}`);
                } else if (thisNode.level === 2) {
                   (0,_displayControls__WEBPACK_IMPORTED_MODULE_0__.updateComment)(`Start: ${startVertex.coord} -> End: ${thisNode.coord}
                    
                   You made it in ${thisNode.level} moves!
                    
                    Moves: ${startVertex.coord} -> ${thisNode.parent.coord} -> ${thisNode.coord}`);
                } else if (thisNode.level === 3) {
    
                    (0,_displayControls__WEBPACK_IMPORTED_MODULE_0__.updateComment)(`Start: ${startVertex.coord} -> End: ${thisNode.coord}
                    
                    You made it in ${thisNode.level} moves!
                    
                    Moves: ${startVertex.coord} -> ${thisNode.parent.parent.coord} -> ${thisNode.parent.coord} -> ${thisNode.coord}`);
                } else if (thisNode.level === 4) {
                    (0,_displayControls__WEBPACK_IMPORTED_MODULE_0__.updateComment)(`Start: ${startVertex.coord} -> End: ${thisNode.coord}
                    
                    You made it in ${thisNode.level} moves!
                    
                    Moves: ${startVertex.coord} -> ${thisNode.parent.parent.parent.coord} -> ${thisNode.parent.parent.coord} -> ${thisNode.parent.coord} -> ${thisNode.coord}`);
                } else if (thisNode.level === 5) {
                    (0,_displayControls__WEBPACK_IMPORTED_MODULE_0__.updateComment)(`Start: ${startVertex.coord} -> End: ${thisNode.coord}
                    
                    You made it in ${thisNode.level} moves!
                    
                    Moves: ${startVertex.coord} -> ${thisNode.parent.parent.parent.parent.coord} -> ${thisNode.parent.parent.parent.coord} -> ${thisNode.parent.parent.coord} -> ${thisNode.parent.coord} -> ${thisNode.coord}`);
                } else if (thisNode.level === 6) {
                    (0,_displayControls__WEBPACK_IMPORTED_MODULE_0__.updateComment)(`Start: ${startVertex.coord} -> End: ${thisNode.coord}
                    
                    You made it in ${thisNode.level} moves!
                    
                    Moves: ${startVertex.coord} -> ${thisNode.parent.parent.parent.parent.parent.coord} -> ${thisNode.parent.parent.parent.parent.coord} -> ${thisNode.parent.parent.parent.coord} -> ${thisNode.parent.parent.coord} -> ${thisNode.parent.coord} -> ${thisNode.coord}`);
                } else if (thisNode.level === 7) {
                    (0,_displayControls__WEBPACK_IMPORTED_MODULE_0__.updateComment)(`Start: ${startVertex.coord} -> End: ${thisNode.coord}
                    
                    You made it in ${thisNode.level} moves!
                    
                    Moves: ${startVertex.coord} -> ${thisNode.parent.parent.parent.parent.parent.parent.coord} -> ${thisNode.parent.parent.parent.parent.parent.coord} -> ${thisNode.parent.parent.parent.parent.coord} -> ${thisNode.parent.parent.parent.coord} -> ${thisNode.parent.parent.coord} -> ${thisNode.parent.coord} -> ${thisNode.coord}`);
                } 
                return;
            } 
        }
        // End traversal after going through all nodes
        console.log('No possible moves found. Finished traversal!');
}

    breadthFirstSearch() {
        // perform breadth first search to find the shortest path using 
        // Dijkstra's algorithm: 
        // (https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
        // For a given source node in the graph, the algorithm finds the
        // shortest path between that node and every other
    }
};



/***/ }),

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ 654);
/* harmony import */ var _displayControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayControls */ 972);



(0,_displayControls__WEBPACK_IMPORTED_MODULE_1__.beginGame)();

/***/ }),

/***/ 581:
/*!****************************!*\
  !*** ./src/knightMoves.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "knightMoves": () => (/* binding */ knightMoves),
/* harmony export */   "makeGraph": () => (/* binding */ makeGraph)
/* harmony export */ });
/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph */ 304);




function makeVertices() {
    // Instantiate an empty array to hold the Vertices
    let vertexList = [];
    // Make a Vertex for each key in adjacencyList, with neighbours set to the values for that key
    for (const index in _graph__WEBPACK_IMPORTED_MODULE_0__.adjacencyList) {
        const vertex = new _graph__WEBPACK_IMPORTED_MODULE_0__.Vertex(index);
        vertexList.push(vertex);
    }
    // For each Vertex in vertexList, add its neighbours
    for (const vertex in vertexList) {
        const thisVertex = vertexList[vertex];
        // For each index in this vertex's adjacency list
        for (const index in _graph__WEBPACK_IMPORTED_MODULE_0__.adjacencyList[vertex]) {
            // Add the vertex with this coord to thisVertex's neighbours list
            const neighbourVertex = vertexList[_graph__WEBPACK_IMPORTED_MODULE_0__.adjacencyList[vertex][index]];
            thisVertex.neighbours.push(neighbourVertex);
        }
    }
    return vertexList;
}


function makeGraph() {
    // make list of vertices
    let vertexList = makeVertices();
    // make a graph to represent the board
    const boardGraph = new _graph__WEBPACK_IMPORTED_MODULE_0__.Graph(64, vertexList);
    return boardGraph;

}


function knightMoves(graph, start, end) {
    let traverseStart = parseInt(start.coord);
    let traverseEnd = parseInt(end.coord);
    // Call the traverse function
    graph.breadthFirstTraverse(traverseStart, traverseEnd);
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(138));
/******/ }
]);
//# sourceMappingURL=bundle-fee53d4f8575f4fd480d.js.map