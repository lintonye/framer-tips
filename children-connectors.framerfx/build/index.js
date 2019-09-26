(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react")) : factory(root["Framer"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./package.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./MultipleChildren.tsx": "./code/MultipleChildren.tsx",
	"./MultipleChildrenWithTitles.tsx": "./code/MultipleChildrenWithTitles.tsx",
	"./SingleChild.tsx": "./code/SingleChild.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/MultipleChildren.tsx":
/*!***********************************!*\
  !*** ./code/MultipleChildren.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlwbGVDaGlsZHJlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvTXVsdGlwbGVDaGlsZHJlbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQTJFO0FBRTNFLE1BQU0sS0FBSyxHQUF3QjtJQUMvQixNQUFNLEVBQUUsTUFBTTtJQUNkLE9BQU8sRUFBRSxNQUFNO0lBQ2YsVUFBVSxFQUFFLFFBQVE7SUFDcEIsY0FBYyxFQUFFLFFBQVE7SUFDeEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsS0FBSyxFQUFFLFNBQVM7SUFDaEIsVUFBVSxFQUFFLHlCQUF5QjtJQUNyQyxRQUFRLEVBQUUsUUFBUTtDQUNyQixDQUFBO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsS0FBSzs7SUFDbEMsT0FBTyxDQUNILDZCQUFLLEtBQUssRUFBRSxLQUFLLElBQ1osS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQTBCLEVBQUUsRUFBRTtJQUMvRCw2Q0FBNkM7SUFDN0MsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUU7UUFDbEIsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRTtLQUNsQyxDQUFDLENBQ0wsQ0FDQyxDQUNULENBQUE7Q0FDSjtBQVhELDRDQVdDO0FBRUQsNEJBQW1CLENBQUMsZ0JBQWdCLEVBQUU7SUFDbEMsUUFBUSxFQUFFO1FBQ04sSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSztRQUN2QixLQUFLLEVBQUUsU0FBUztRQUNoQixlQUFlLEVBQUU7WUFDYixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxpQkFBaUI7WUFDbkMsS0FBSyxFQUFFLE1BQU07U0FDaEI7S0FDSjtDQUNKLENBQUMsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const style = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#8855FF",
    background: "rgba(136, 85, 255, 0.1)",
    overflow: "hidden",
};
function MultipleChildren(props) {
    window["__checkBudget__"]();
    return (React.createElement("div", { style: style }, React.Children.map(props.children, (c) => 
    // Overwrite the default "position: absolute"
    React.cloneElement(c, {
        style: { position: "relative" },
    }))));
}
exports.MultipleChildren = MultipleChildren;
framer_1.addPropertyControls(MultipleChildren, {
    children: {
        type: framer_1.ControlType.Array,
        title: "Content",
        propertyControl: {
            type: framer_1.ControlType.ComponentInstance,
            title: "Page",
        },
    },
});
exports.__info__ = [{ "name": "MultipleChildren", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/MultipleChildrenWithTitles.tsx":
/*!*********************************************!*\
  !*** ./code/MultipleChildrenWithTitles.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlwbGVDaGlsZHJlbldpdGhUaXRsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL011bHRpcGxlQ2hpbGRyZW5XaXRoVGl0bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBMkU7QUFFM0UsTUFBTSxLQUFLLEdBQXdCO0lBQy9CLE1BQU0sRUFBRSxNQUFNO0lBQ2QsT0FBTyxFQUFFLE1BQU07SUFDZixtQkFBbUIsRUFBRSxnQkFBZ0I7SUFDckMsVUFBVSxFQUFFLFFBQVE7SUFDcEIsWUFBWSxFQUFFLFFBQVE7SUFDdEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsS0FBSyxFQUFFLFNBQVM7SUFDaEIsVUFBVSxFQUFFLHlCQUF5QjtJQUNyQyxRQUFRLEVBQUUsUUFBUTtDQUNyQixDQUFBO0FBRUQsNkNBQTZDO0FBQzdDLFNBQVMsWUFBWSxDQUFDLENBQUM7O0lBQ25CLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUU7UUFDekIsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7S0FDL0QsQ0FBQyxDQUFBO0NBQ0w7QUFFRCxTQUFnQiwwQkFBMEIsQ0FBQyxLQUFLOztJQUM1QyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFFL0IsT0FBTyxDQUNILDZCQUFLLEtBQUssRUFBRSxLQUFLO1FBQ2IsdUNBQWM7UUFDZCx1Q0FBYztRQUNkLHVDQUFjO1FBQ2QsaUNBQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBTztRQUNuRCxpQ0FBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFPO1FBQ25ELGlDQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQU8sQ0FDakQsQ0FDVCxDQUFBO0NBQ0o7QUFiRCxnRUFhQztBQUVELDRCQUFtQixDQUFDLDBCQUEwQixFQUFFO0lBQzVDLEdBQUcsRUFBRTtRQUNELElBQUksRUFBRSxvQkFBVyxDQUFDLGlCQUFpQjtRQUNuQyxLQUFLLEVBQUUsS0FBSztLQUNmO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsSUFBSSxFQUFFLG9CQUFXLENBQUMsaUJBQWlCO1FBQ25DLEtBQUssRUFBRSxLQUFLO0tBQ2Y7SUFDRCxHQUFHLEVBQUU7UUFDRCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxpQkFBaUI7UUFDbkMsS0FBSyxFQUFFLEtBQUs7S0FDZjtDQUNKLENBQUMsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const style = {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    alignItems: "center",
    justifyItems: "center",
    textAlign: "center",
    color: "#8855FF",
    background: "rgba(136, 85, 255, 0.1)",
    overflow: "hidden",
};
// Overwrite the default "position: absolute"
function cloneElement(e) {
    window["__checkBudget__"]();
    return React.cloneElement(e, {
        style: { position: "relative", transform: "translate(0,0)" },
    });
}
function MultipleChildrenWithTitles(props) {
    window["__checkBudget__"]();
    const { ceo, cto, coo } = props;
    return (React.createElement("div", { style: style },
        React.createElement("div", null, "CEO"),
        React.createElement("div", null, "CTO"),
        React.createElement("div", null, "COO"),
        React.createElement("div", null, ceo[0] ? cloneElement(ceo[0]) : "Who?"),
        React.createElement("div", null, cto[0] ? cloneElement(cto[0]) : "Who?"),
        React.createElement("div", null, coo[0] ? cloneElement(coo[0]) : "Who?")));
}
exports.MultipleChildrenWithTitles = MultipleChildrenWithTitles;
framer_1.addPropertyControls(MultipleChildrenWithTitles, {
    ceo: {
        type: framer_1.ControlType.ComponentInstance,
        title: "CEO",
    },
    cto: {
        type: framer_1.ControlType.ComponentInstance,
        title: "CTO",
    },
    coo: {
        type: framer_1.ControlType.ComponentInstance,
        title: "COO",
    },
});
exports.__info__ = [{ "name": "MultipleChildrenWithTitles", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/SingleChild.tsx":
/*!******************************!*\
  !*** ./code/SingleChild.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2luZ2xlQ2hpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1NpbmdsZUNoaWxkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBMkU7QUFFM0UsTUFBTSxLQUFLLEdBQXdCO0lBQy9CLE1BQU0sRUFBRSxNQUFNO0lBQ2QsT0FBTyxFQUFFLE1BQU07SUFDZixVQUFVLEVBQUUsUUFBUTtJQUNwQixjQUFjLEVBQUUsUUFBUTtJQUN4QixTQUFTLEVBQUUsUUFBUTtJQUNuQixLQUFLLEVBQUUsU0FBUztJQUNoQixVQUFVLEVBQUUseUJBQXlCO0lBQ3JDLFFBQVEsRUFBRSxRQUFRO0NBQ3JCLENBQUE7QUFFRCxTQUFnQixXQUFXLENBQUMsS0FBSzs7SUFDN0IsT0FBTyw2QkFBSyxLQUFLLEVBQUUsS0FBSyxJQUFHLEtBQUssQ0FBQyxRQUFRLENBQU8sQ0FBQTtDQUNuRDtBQUZELGtDQUVDO0FBRUQsNEJBQW1CLENBQUMsV0FBVyxFQUFFO0lBQzdCLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0NBQ3BELENBQUMsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const style = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#8855FF",
    background: "rgba(136, 85, 255, 0.1)",
    overflow: "hidden",
};
function SingleChild(props) {
    window["__checkBudget__"]();
    return React.createElement("div", { style: style }, props.children);
}
exports.SingleChild = SingleChild;
framer_1.addPropertyControls(SingleChild, {
    text: { type: framer_1.ControlType.String, title: "Text" },
});
exports.__info__ = [{ "name": "SingleChild", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                        
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"1.1.3","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.3.4","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/google.fonts":"^1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/promise-queue":"^2.2.0","@types/react":"16.8.4","@types/react-dom":"^16.8","@types/webfontloader":"^1.6.29","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^1.6.7","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"^3.5.3","watch":"^1.0.2","webfontloader":"^1.6.28","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"useOpenURL","type":"action"},{"name":"useLog","type":"action"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

                packages["@framer/tryjohnny.avataaars"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/tryjohnny.avataaars */ "../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/tryjohnny.avataaars/build/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/tryjohnny.avataaars"]
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"build/index.js","license":"MIT","devDependencies":{"@types/react":"^16.0.31","framer":"^0.1.27"},"peerDependencies":{"framer":"^0.1.27","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"3979cdd9-b296-4d28-a3b8-cc084b4c8cd3","displayName":"Avataaars"},"author":"Johnny Rodriguez","dependencies":{"@framer/tryjohnny.avataaars":"^1.0.0"},"name":"@framer/tryjohnny.avataaars","version":"1.1.0"}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"build/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@types/react\":\"^16.0.31\"},\"peerDependencies\":{\"framer\":\"^0.9.0 || ^1 || ^0.10\",\"react\":\"^16.3.0\",\"react-dom\":\"^16.3.0\"},\"framer\":{\"id\":\"b7eb2809-2e01-423b-ace0-e691685e76cc\"},\"author\":\"Linton Ye\",\"dependencies\":{\"@framer/tryjohnny.avataaars\":\"^1.1.0\"}}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});