/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);


var utils = __webpack_require__(/*! ./lib/utils */ "./src/lib/utils.js");

document.addEventListener("DOMContentLoaded", function () {
  utils.fetchCountries();
  var selectedValue = document.getElementsByClassName('countries-selector');
  var comparedValue = document.getElementsByClassName('compared-countries');
  selectedValue = selectedValue[0];
  comparedValue = comparedValue[0];
  selectedValue.addEventListener("change", function (e) {
    for (var i = 0; i < comparedValue.length; i++) {
      if (comparedValue[i].value === e.target.value) {
        utils.getDisabledElement();
        utils.setNewDisabledElement(comparedValue[i].value);
      }
    }
  });
  comparedValue.addEventListener("change", function (e) {});
});

/***/ }),

/***/ "./src/lib/utils.js":
/*!**************************!*\
  !*** ./src/lib/utils.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Util = {
  fetchCountries: function fetchCountries() {
    fetch('https://api.covid19api.com/countries').then(function (response) {
      return response.json();
    }).then(function (result) {
      return countries = result;
    }).then(function () {
      var countrySelector = document.getElementsByClassName('countries-selector');
      var comparedAgainst = document.getElementsByClassName('compared-countries');
      var selected = document.createElement('option');
      selected.value = "All Countries";
      selected.innerHTML = "All Countries";
      selected.classList.add('country-selector-options');
      selected.selected = true;
      countrySelector[0].appendChild(selected);

      for (var i = 0; i < countries.length; i++) {
        var _selected = document.createElement('option');

        _selected.value = countries[i].Country;
        _selected.innerHTML = countries[i].Country;

        _selected.classList.add('country-selector-options');

        countrySelector[0].appendChild(_selected);
      }

      selected = document.createElement('option');
      selected.value = "All Countries";
      selected.innerHTML = "All Countries";
      selected.classList.add('compared-countries-options');
      selected.disabled = true;
      selected.selected = true;
      comparedAgainst[0].appendChild(selected);

      for (var _i = 0; _i < countries.length; _i++) {
        selected = document.createElement('option');
        selected.value = countries[_i].Country;
        selected.innerHTML = countries[_i].Country;
        selected.classList.add('compared-countries-options');
        comparedAgainst[0].appendChild(selected);
      }
    });
  },
  getDisabledElement: function getDisabledElement() {
    var comparedAgainst = document.getElementsByClassName('compared-countries');
    comparedAgainst = comparedAgainst[0];

    for (var i = 0; i < comparedAgainst.length; i++) {
      if (comparedAgainst[i].disabled) {
        comparedAgainst[i].disabled = false;
        break;
      }
    }
  },
  setNewDisabledElement: function setNewDisabledElement(disabledValue) {
    var comparedAgainst = document.getElementsByClassName('compared-countries');
    comparedAgainst = comparedAgainst[0];

    for (var i = 0; i < comparedAgainst.length; i++) {
      if (comparedAgainst[i].value === disabledValue) {
        comparedAgainst[i].disabled = true;
      }
    }
  }
};
module.exports = Util;

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbInV0aWxzIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZldGNoQ291bnRyaWVzIiwic2VsZWN0ZWRWYWx1ZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjb21wYXJlZFZhbHVlIiwiZSIsImkiLCJsZW5ndGgiLCJ2YWx1ZSIsInRhcmdldCIsImdldERpc2FibGVkRWxlbWVudCIsInNldE5ld0Rpc2FibGVkRWxlbWVudCIsIlV0aWwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJjb3VudHJpZXMiLCJjb3VudHJ5U2VsZWN0b3IiLCJjb21wYXJlZEFnYWluc3QiLCJzZWxlY3RlZCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsIkNvdW50cnkiLCJkaXNhYmxlZCIsImRpc2FibGVkVmFsdWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUFnQyxvQkFBaEMsQ0FBdEI7QUFDQWlCLG1CQUFlLEdBQUdBLGVBQWUsQ0FBQyxDQUFELENBQWpDOztBQUNBLFNBQUksSUFBSWQsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHYyxlQUFlLENBQUNiLE1BQW5DLEVBQTJDRCxDQUFDLEVBQTVDLEVBQWdEO0FBQzVDLFVBQUdjLGVBQWUsQ0FBQ2QsQ0FBRCxDQUFmLENBQW1Cc0IsUUFBdEIsRUFBZ0M7QUFDNUJSLHVCQUFlLENBQUNkLENBQUQsQ0FBZixDQUFtQnNCLFFBQW5CLEdBQThCLEtBQTlCO0FBQ0E7QUFDSDtBQUNKO0FBQ0osR0FsRFE7QUFtRFRqQix1QkFuRFMsaUNBbURha0IsYUFuRGIsRUFtRDRCO0FBQ2pDLFFBQUlULGVBQWUsR0FBR3JCLFFBQVEsQ0FBQ0ksc0JBQVQsQ0FBZ0Msb0JBQWhDLENBQXRCO0FBQ0FpQixtQkFBZSxHQUFHQSxlQUFlLENBQUMsQ0FBRCxDQUFqQzs7QUFDQSxTQUFLLElBQUlkLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdjLGVBQWUsQ0FBQ2IsTUFBcEMsRUFBNENELENBQUMsRUFBN0MsRUFBaUQ7QUFDN0MsVUFBSWMsZUFBZSxDQUFDZCxDQUFELENBQWYsQ0FBbUJFLEtBQW5CLEtBQTZCcUIsYUFBakMsRUFBZ0Q7QUFDNUNULHVCQUFlLENBQUNkLENBQUQsQ0FBZixDQUFtQnNCLFFBQW5CLEdBQThCLElBQTlCO0FBQ0g7QUFDSjtBQUNKO0FBM0RRLENBQWI7QUFnRUFFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm5CLElBQWpCLEM7Ozs7Ozs7Ozs7O0FDaEVBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vbGliL3V0aWxzJylcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIHV0aWxzLmZldGNoQ291bnRyaWVzKCk7XG4gICAgbGV0IHNlbGVjdGVkVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb3VudHJpZXMtc2VsZWN0b3InKTtcbiAgICBsZXQgY29tcGFyZWRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbXBhcmVkLWNvdW50cmllcycpO1xuICAgIHNlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZFZhbHVlWzBdO1xuICAgIGNvbXBhcmVkVmFsdWUgPSBjb21wYXJlZFZhbHVlWzBdO1xuICAgIFxuICAgIHNlbGVjdGVkVmFsdWUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wYXJlZFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihjb21wYXJlZFZhbHVlW2ldLnZhbHVlID09PSBlLnRhcmdldC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHV0aWxzLmdldERpc2FibGVkRWxlbWVudCgpO1xuICAgICAgICAgICAgICAgIHV0aWxzLnNldE5ld0Rpc2FibGVkRWxlbWVudChjb21wYXJlZFZhbHVlW2ldLnZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgXG4gICAgY29tcGFyZWRWYWx1ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgIH0pXG59KSIsImNvbnN0IFV0aWwgPSB7XG4gICAgZmV0Y2hDb3VudHJpZXMoKSB7XG4gICAgICAgIGZldGNoKCdodHRwczovL2FwaS5jb3ZpZDE5YXBpLmNvbS9jb3VudHJpZXMnKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IGNvdW50cmllcyA9IHJlc3VsdClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5U2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb3VudHJpZXMtc2VsZWN0b3InKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wYXJlZEFnYWluc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb21wYXJlZC1jb3VudHJpZXMnKTtcblxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkLnZhbHVlID0gXCJBbGwgQ291bnRyaWVzXCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5pbm5lckhUTUwgPSBcIkFsbCBDb3VudHJpZXNcIlxuICAgICAgICAgICAgICAgIHNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoJ2NvdW50cnktc2VsZWN0b3Itb3B0aW9ucycpXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvdW50cnlTZWxlY3RvclswXS5hcHBlbmRDaGlsZChzZWxlY3RlZCk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQudmFsdWUgPSBjb3VudHJpZXNbaV0uQ291bnRyeTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQuaW5uZXJIVE1MID0gY291bnRyaWVzW2ldLkNvdW50cnk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoJ2NvdW50cnktc2VsZWN0b3Itb3B0aW9ucycpXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnlTZWxlY3RvclswXS5hcHBlbmRDaGlsZChzZWxlY3RlZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC52YWx1ZSA9IFwiQWxsIENvdW50cmllc1wiXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuaW5uZXJIVE1MID0gXCJBbGwgQ291bnRyaWVzXCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5jbGFzc0xpc3QuYWRkKCdjb21wYXJlZC1jb3VudHJpZXMtb3B0aW9ucycpXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb21wYXJlZEFnYWluc3RbMF0uYXBwZW5kQ2hpbGQoc2VsZWN0ZWQpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQudmFsdWUgPSBjb3VudHJpZXNbaV0uQ291bnRyeTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQuaW5uZXJIVE1MID0gY291bnRyaWVzW2ldLkNvdW50cnk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoJ2NvbXBhcmVkLWNvdW50cmllcy1vcHRpb25zJylcbiAgICAgICAgICAgICAgICAgICAgY29tcGFyZWRBZ2FpbnN0WzBdLmFwcGVuZENoaWxkKHNlbGVjdGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH0sXG4gICAgZ2V0RGlzYWJsZWRFbGVtZW50KCkge1xuICAgICAgICBsZXQgY29tcGFyZWRBZ2FpbnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29tcGFyZWQtY291bnRyaWVzJyk7XG4gICAgICAgIGNvbXBhcmVkQWdhaW5zdCA9IGNvbXBhcmVkQWdhaW5zdFswXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNvbXBhcmVkQWdhaW5zdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoY29tcGFyZWRBZ2FpbnN0W2ldLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgY29tcGFyZWRBZ2FpbnN0W2ldLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNldE5ld0Rpc2FibGVkRWxlbWVudChkaXNhYmxlZFZhbHVlKSB7XG4gICAgICAgIGxldCBjb21wYXJlZEFnYWluc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb21wYXJlZC1jb3VudHJpZXMnKTtcbiAgICAgICAgY29tcGFyZWRBZ2FpbnN0ID0gY29tcGFyZWRBZ2FpbnN0WzBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBhcmVkQWdhaW5zdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmVkQWdhaW5zdFtpXS52YWx1ZSA9PT0gZGlzYWJsZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbXBhcmVkQWdhaW5zdFtpXS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVdGlsO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==