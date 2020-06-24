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
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/utils */ "./src/lib/utils.js");


var DIMENSIONS = {
  width: 1000,
  height: 500
};
document.addEventListener("DOMContentLoaded", function () {
  _lib_utils__WEBPACK_IMPORTED_MODULE_1__["default"].fetchCountries();
  _lib_utils__WEBPACK_IMPORTED_MODULE_1__["default"].fetchCountries2(); //gets country and compare selector to setup change event listeners

  var selectedValue = document.querySelector('select.countries-selector');
  var comparedValue = document.querySelector('select.compared-countries'); //gets checkout to check for changes

  var checkbox = document.querySelector("input.state-checkbox");
  selectedValue.addEventListener("change", function (e) {
    for (var i = 0; i < comparedValue.length; i++) {
      if (e.target.value === comparedValue[i].value) {
        _lib_utils__WEBPACK_IMPORTED_MODULE_1__["default"].getDisabledElement();
        _lib_utils__WEBPACK_IMPORTED_MODULE_1__["default"].setNewDisabledElement(comparedValue[i].value);
        var usa = document.querySelector("div.states-wrapper");

        if (e.target.value === "USA") {
          if (comparedValue[i].value === "USA") {
            usa.classList.remove("hidden");
          }
        } else {
          usa.classList.add("hidden");
        }
      }
    }

    clearGraph();
    drawBarGraph(countries);
  });
  comparedValue.addEventListener("change", function (e) {
    clearGraph();
    drawBarGraph(countries);
  });
  checkbox.addEventListener('change', function (e) {
    if (checkbox.checked) {
      e.target.value = 'state';
    } else {
      e.target.value = 'nstate';
    }
  });
  var checkboxShown = false;
  var selectcheckbox = document.querySelector("div.select-box-wrapper");
  selectcheckbox.addEventListener('click', function (e) {
    var checkbox = document.querySelector("div.checkboxes");

    if (!checkboxShown) {
      checkbox.classList.remove("hidden");
      checkboxShown = true;
    } else {
      checkbox.classList.add("hidden");
      checkboxShown = false;
    }
  });
  var countries = _lib_utils__WEBPACK_IMPORTED_MODULE_1__["default"].getAllStatistics();
  drawBarGraph(countries);
  var states = _lib_utils__WEBPACK_IMPORTED_MODULE_1__["default"].getAllUSStatistics();
});

function clearGraph() {
  d3.select("svg").remove();
}

function drawBarGraph(data, country, compared) {
  var margin = {
    top: 30,
    right: 20,
    bottom: 30,
    left: 60
  };
  data.then(function (result) {
    var countrySelect = document.querySelector("select.countries-selector");
    country = country || countrySelect.options[countrySelect.selectedIndex];
    var compareSelect = document.querySelector("select.compared-countries");
    compared = compared || compareSelect.options[compareSelect.selectedIndex];
    var xAxisData = [];
    var yAxisData = []; // console.log(result);

    var both = [];
    result.forEach(function (ele) {
      if (ele.country === country.value || ele.country === compared.value) {
        xAxisData.push(ele.country);
        yAxisData.push(ele.cases);
        both.push(ele);
      }
    });
    var subgroups = Object.keys(both[0]).slice(1);
    console.log(subgroups);
    var groups = d3.map(both, function (d) {
      return d.country;
    }).keys();
    console.log(groups);
    var svg = d3.select("#svgcontainer").append("svg").attr("width", DIMENSIONS.width + margin.left + margin.right).attr("height", DIMENSIONS.height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // X scale and Axis

    var x = d3.scaleBand().domain(groups).range([0, DIMENSIONS.width]).padding([0.2]);
    svg.append("g").attr("transform", "translate(0," + DIMENSIONS.height + ")").call(d3.axisBottom(x).tickSize(0)); //y axis

    var maxHeight = d3.max(yAxisData) / 9 * 10;
    var y = d3.scaleLinear().domain([0, maxHeight]).range([DIMENSIONS.height, 0]);
    svg.append("g").call(d3.axisLeft(y));
    var xSubgroup = d3.scaleBand().domain(subgroups).range([0, x.bandwidth()]).padding([0.05]);
    var color = d3.scaleOrdinal().domain(subgroups).range(["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#fdbf6f", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"]);
    console.log(both);
    svg.append("g").selectAll("g") // Enter in data = loop group per group
    .data(both).enter().append("g").attr("transform", function (d) {
      return "translate(" + x(d.country) + ",0)";
    }).selectAll("rect").data(function (d) {
      return subgroups.map(function (key) {
        return {
          key: key,
          value: d[key]
        };
      });
    }).enter().append("rect").attr("x", function (d) {
      return xSubgroup(d.key);
    }).attr("y", function (d) {
      return y(d.value);
    }).attr("width", xSubgroup.bandwidth()).attr("height", function (d) {
      return DIMENSIONS.height - y(d.value);
    }).attr("fill", function (d) {
      return color(d.key);
    });
  });
}

/***/ }),

/***/ "./src/lib/utils.js":
/*!**************************!*\
  !*** ./src/lib/utils.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Util = {
  dynamicSort: function dynamicSort(property) {
    var sortOrder = 1;

    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }

    return function (a, b) {
      if (sortOrder == -1) {
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }
    };
  },
  //sets up all countrys for select html
  fetchCountries: function fetchCountries() {
    var countries;
    fetch("https://coronavirus-19-api.herokuapp.com/countries").then(function (response) {
      return response.json();
    }).then(function (result) {
      return countries = result;
    }).then(function () {
      var countrySelector = document.getElementsByClassName('countries-selector');
      var comparedAgainst = document.getElementsByClassName('compared-countries');
      countries.sort(Util.dynamicSort('country'));
      console.log(countries);

      for (var i = 0; i < countries.length; i++) {
        var _selected = document.createElement('option');

        _selected.value = countries[i].country;
        _selected.innerHTML = countries[i].country;

        _selected.classList.add('country-selector-options');

        countrySelector[0].appendChild(_selected);

        if (i === 0) {
          _selected.selected = true;
        }
      }

      var selected = document.createElement("option");
      selected.value = 'None';
      selected.innerHTML = 'None';
      selected.classList.add("compared-countries-options");
      comparedAgainst[0].appendChild(selected);
      selected.disabled = true;
      selected.selected = true;

      for (var _i = 0; _i < countries.length; _i++) {
        var _selected2 = document.createElement('option');

        _selected2.value = countries[_i].country;
        _selected2.innerHTML = countries[_i].country;

        _selected2.classList.add('compared-countries-options');

        comparedAgainst[0].appendChild(_selected2);
      }
    });
  },
  fetchCountries2: function fetchCountries2() {
    var countries;
    fetch("https://coronavirus-19-api.herokuapp.com/countries").then(function (response) {
      return response.json();
    }).then(function (result) {
      return countries = result;
    }).then(function () {
      var countrySelector = document.querySelector('div.checkboxes');
      countries.sort(Util.dynamicSort('country'));
      console.log(countries);

      for (var i = 0; i < countries.length; i++) {
        var outerDiv = document.createElement('div');
        outerDiv.classList.add("checkbox-wrapper");
        var input = document.createElement('input');
        input.type = "checkbox";
        input.classList.add("checkbox-box");
        input.value = countries[i].country;
        outerDiv.appendChild(input);
        var label = document.createElement('label');
        label.innerHTML = countries[i].country;
        outerDiv.appendChild(label);
        countrySelector.appendChild(outerDiv);
      }
    });
  },
  //finds disabled element and sets it false
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
  //sets new disabled element to true
  setNewDisabledElement: function setNewDisabledElement(disabledValue) {
    var comparedAgainst = document.getElementsByClassName('compared-countries');
    comparedAgainst = comparedAgainst[0];

    for (var i = 0; i < comparedAgainst.length; i++) {
      if (comparedAgainst[i].value === disabledValue) {
        comparedAgainst[i].disabled = true;
      }
    }
  },
  //gets all countries statistics
  getAllStatistics: function getAllStatistics() {
    return fetch("https://coronavirus-19-api.herokuapp.com/countries").then(function (response) {
      return response.json();
    });
  },
  //gets all states statistics
  getAllUSStatistics: function getAllUSStatistics() {
    return fetch("https://covidtracking.com/api/v1/states/daily.json").then(function (response) {
      return response.json();
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Util);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2RjMmEiXSwibmFtZXMiOlsiRElNRU5TSU9OUyIsIndpZHRoIiwiaGVpZ2h0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidXRpbHMiLCJmZXRjaENvdW50cmllcyIsImZldGNoQ291bnRyaWVzMiIsInNlbGVjdGVkVmFsdWUiLCJxdWVyeVNlbGVjdG9yIiwiY29tcGFyZWRWYWx1ZSIsImNoZWNrYm94IiwiZSIsImkiLCJsZW5ndGgiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdldERpc2FibGVkRWxlbWVudCIsInNldE5ld0Rpc2FibGVkRWxlbWVudCIsInVzYSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImNsZWFyR3JhcGgiLCJkcmF3QmFyR3JhcGgiLCJjb3VudHJpZXMiLCJjaGVja2VkIiwiY2hlY2tib3hTaG93biIsInNlbGVjdGNoZWNrYm94IiwiZ2V0QWxsU3RhdGlzdGljcyIsInN0YXRlcyIsImdldEFsbFVTU3RhdGlzdGljcyIsImQzIiwic2VsZWN0IiwiZGF0YSIsImNvdW50cnkiLCJjb21wYXJlZCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInRoZW4iLCJyZXN1bHQiLCJjb3VudHJ5U2VsZWN0Iiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJjb21wYXJlU2VsZWN0IiwieEF4aXNEYXRhIiwieUF4aXNEYXRhIiwiYm90aCIsImZvckVhY2giLCJlbGUiLCJwdXNoIiwiY2FzZXMiLCJzdWJncm91cHMiLCJPYmplY3QiLCJrZXlzIiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwiZ3JvdXBzIiwibWFwIiwiZCIsInN2ZyIsImFwcGVuZCIsImF0dHIiLCJ4Iiwic2NhbGVCYW5kIiwiZG9tYWluIiwicmFuZ2UiLCJwYWRkaW5nIiwiY2FsbCIsImF4aXNCb3R0b20iLCJ0aWNrU2l6ZSIsIm1heEhlaWdodCIsIm1heCIsInkiLCJzY2FsZUxpbmVhciIsImF4aXNMZWZ0IiwieFN1Ymdyb3VwIiwiYmFuZHdpZHRoIiwiY29sb3IiLCJzY2FsZU9yZGluYWwiLCJzZWxlY3RBbGwiLCJlbnRlciIsImtleSIsIlV0aWwiLCJkeW5hbWljU29ydCIsInByb3BlcnR5Iiwic29ydE9yZGVyIiwic3Vic3RyIiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJjb3VudHJ5U2VsZWN0b3IiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY29tcGFyZWRBZ2FpbnN0Iiwic29ydCIsInNlbGVjdGVkIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiZGlzYWJsZWQiLCJvdXRlckRpdiIsImlucHV0IiwidHlwZSIsImxhYmVsIiwiZGlzYWJsZWRWYWx1ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtR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Ozs7Ozs7Ozs7QUNySEEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCB1dGlscyBmcm9tIFwiLi9saWIvdXRpbHNcIlxuXG5jb25zdCBESU1FTlNJT05TID0ge1xuICAgIHdpZHRoOiAxMDAwLFxuICAgIGhlaWdodDogNTAwXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICB1dGlscy5mZXRjaENvdW50cmllcygpO1xuICAgIHV0aWxzLmZldGNoQ291bnRyaWVzMigpO1xuXG4gICAgLy9nZXRzIGNvdW50cnkgYW5kIGNvbXBhcmUgc2VsZWN0b3IgdG8gc2V0dXAgY2hhbmdlIGV2ZW50IGxpc3RlbmVyc1xuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QuY291bnRyaWVzLXNlbGVjdG9yJyk7XG4gICAgY29uc3QgY29tcGFyZWRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdC5jb21wYXJlZC1jb3VudHJpZXMnKTtcblxuICAgIC8vZ2V0cyBjaGVja291dCB0byBjaGVjayBmb3IgY2hhbmdlc1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LnN0YXRlLWNoZWNrYm94XCIpO1xuXG4gICAgc2VsZWN0ZWRWYWx1ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBhcmVkVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gY29tcGFyZWRWYWx1ZVtpXS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHV0aWxzLmdldERpc2FibGVkRWxlbWVudCgpO1xuICAgICAgICAgICAgICAgIHV0aWxzLnNldE5ld0Rpc2FibGVkRWxlbWVudChjb21wYXJlZFZhbHVlW2ldLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGxldCB1c2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnN0YXRlcy13cmFwcGVyXCIpO1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJVU0FcIikge1xuICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmVkVmFsdWVbaV0udmFsdWUgPT09IFwiVVNBXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdXNhLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHVzYS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjbGVhckdyYXBoKCk7XG4gICAgICAgIGRyYXdCYXJHcmFwaChjb3VudHJpZXMpO1xuICAgIH0pXG4gIFxuICAgIGNvbXBhcmVkVmFsdWUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgY2xlYXJHcmFwaCgpO1xuICAgICAgICBkcmF3QmFyR3JhcGgoY291bnRyaWVzKTtcbiAgICB9KVxuXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIGlmKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gJ3N0YXRlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gJ25zdGF0ZSc7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgbGV0IGNoZWNrYm94U2hvd24gPSBmYWxzZTtcbiAgICBcbiAgICBjb25zdCBzZWxlY3RjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuc2VsZWN0LWJveC13cmFwcGVyXCIpO1xuXG4gICAgc2VsZWN0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmNoZWNrYm94ZXNcIik7XG4gICAgICAgIGlmICghY2hlY2tib3hTaG93bikge1xuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgIGNoZWNrYm94U2hvd24gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIGNoZWNrYm94U2hvd24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgXG4gICAgY29uc3QgY291bnRyaWVzID0gdXRpbHMuZ2V0QWxsU3RhdGlzdGljcygpO1xuICAgIGRyYXdCYXJHcmFwaChjb3VudHJpZXMpO1xuICAgIGNvbnN0IHN0YXRlcyA9IHV0aWxzLmdldEFsbFVTU3RhdGlzdGljcygpO1xufSlcblxuZnVuY3Rpb24gY2xlYXJHcmFwaCgpIHtcbiAgICBkMy5zZWxlY3QoXCJzdmdcIikucmVtb3ZlKCk7XG59XG5cblxuZnVuY3Rpb24gZHJhd0JhckdyYXBoKGRhdGEsIGNvdW50cnksIGNvbXBhcmVkKSB7XG4gICAgbGV0IG1hcmdpbiA9IHsgdG9wOiAzMCwgcmlnaHQ6IDIwLCBib3R0b206IDMwLCBsZWZ0OiA2MCB9XG5cbiAgICBkYXRhLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgbGV0IGNvdW50cnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0LmNvdW50cmllcy1zZWxlY3RvclwiKTtcbiAgICAgICAgY291bnRyeSA9IGNvdW50cnkgfHwgY291bnRyeVNlbGVjdC5vcHRpb25zW2NvdW50cnlTZWxlY3Quc2VsZWN0ZWRJbmRleF07XG4gICAgICAgIGxldCBjb21wYXJlU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdC5jb21wYXJlZC1jb3VudHJpZXNcIik7XG4gICAgICAgIGNvbXBhcmVkID0gY29tcGFyZWQgfHwgY29tcGFyZVNlbGVjdC5vcHRpb25zW2NvbXBhcmVTZWxlY3Quc2VsZWN0ZWRJbmRleF07XG5cbiAgICAgICAgY29uc3QgeEF4aXNEYXRhID0gW107XG4gICAgICAgIGNvbnN0IHlBeGlzRGF0YSA9IFtdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICBsZXQgYm90aCA9IFtdO1xuXG4gICAgICAgIHJlc3VsdC5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgICBpZihlbGUuY291bnRyeSA9PT0gY291bnRyeS52YWx1ZSB8fCBlbGUuY291bnRyeSA9PT0gY29tcGFyZWQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB4QXhpc0RhdGEucHVzaChlbGUuY291bnRyeSk7XG4gICAgICAgICAgICAgICAgeUF4aXNEYXRhLnB1c2goZWxlLmNhc2VzKTtcbiAgICAgICAgICAgICAgICBib3RoLnB1c2goZWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgc3ViZ3JvdXBzID0gT2JqZWN0LmtleXMoYm90aFswXSkuc2xpY2UoMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHN1Ymdyb3Vwcyk7XG5cbiAgICAgICAgbGV0IGdyb3VwcyA9IGQzLm1hcChib3RoLCBmdW5jdGlvbihkKXtyZXR1cm4oZC5jb3VudHJ5KX0pLmtleXMoKVxuICAgICAgICBjb25zb2xlLmxvZyhncm91cHMpO1xuXG4gICAgICAgIGxldCBzdmcgPSBkM1xuICAgICAgICAgIC5zZWxlY3QoXCIjc3ZnY29udGFpbmVyXCIpXG4gICAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgRElNRU5TSU9OUy53aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIERJTUVOU0lPTlMuaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAuYXR0ciggXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuICAgICAgICAvLyBYIHNjYWxlIGFuZCBBeGlzXG4gICAgICAgIGxldCB4ID0gZDMuc2NhbGVCYW5kKClcbiAgICAgICAgICAgIC5kb21haW4oZ3JvdXBzKVxuICAgICAgICAgICAgLnJhbmdlKFswLCBESU1FTlNJT05TLndpZHRoXSlcbiAgICAgICAgICAgIC5wYWRkaW5nKFswLjJdKVxuXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgRElNRU5TSU9OUy5oZWlnaHQgKyBcIilcIilcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkudGlja1NpemUoMCkpO1xuXG4gICAgICAgIC8veSBheGlzXG5cbiAgICAgICAgY29uc3QgbWF4SGVpZ2h0ID0gKGQzLm1heCh5QXhpc0RhdGEpIC8gOSkgKiAxMDtcbiAgICAgICAgbGV0IHkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFswLCBtYXhIZWlnaHRdKVxuICAgICAgICAgICAgLnJhbmdlKFsgRElNRU5TSU9OUy5oZWlnaHQsIDAgXSk7XG5cbiAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKTtcblxuICAgICAgICBsZXQgeFN1Ymdyb3VwID0gZDNcbiAgICAgICAgICAgIC5zY2FsZUJhbmQoKVxuICAgICAgICAgICAgLmRvbWFpbihzdWJncm91cHMpXG4gICAgICAgICAgICAucmFuZ2UoWzAsIHguYmFuZHdpZHRoKCldKVxuICAgICAgICAgICAgLnBhZGRpbmcoWzAuMDVdKTtcblxuICAgICAgICBsZXQgY29sb3IgPSBkM1xuICAgICAgICAgICAgLnNjYWxlT3JkaW5hbCgpXG4gICAgICAgICAgICAuZG9tYWluKHN1Ymdyb3VwcylcbiAgICAgICAgICAgIC5yYW5nZShbXCIjYTZjZWUzXCIsIFwiIzFmNzhiNFwiLCBcIiNiMmRmOGFcIiwgXCIjMzNhMDJjXCIsIFwiI2ZiOWE5OVwiLCBcIiNmZGJmNmZcIiwgXCIjY2FiMmQ2XCIsIFwiIzZhM2Q5YVwiLCBcIiNmZmZmOTlcIiwgXCIjYjE1OTI4XCJdKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coYm90aClcbiAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJnXCIpXG4gICAgICAgICAgICAvLyBFbnRlciBpbiBkYXRhID0gbG9vcCBncm91cCBwZXIgZ3JvdXBcbiAgICAgICAgICAgIC5kYXRhKGJvdGgpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgeChkLmNvdW50cnkpICsgXCIsMClcIjsgfSlcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAgICAgICAuZGF0YShmdW5jdGlvbihkKSB7IHJldHVybiBzdWJncm91cHMubWFwKGZ1bmN0aW9uKGtleSkgeyByZXR1cm4ge2tleToga2V5LCB2YWx1ZTogZFtrZXldfTsgfSk7IH0pXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geFN1Ymdyb3VwKGQua2V5KTsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQudmFsdWUpOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB4U3ViZ3JvdXAuYmFuZHdpZHRoKCkpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBESU1FTlNJT05TLmhlaWdodCAtIHkoZC52YWx1ZSk7IH0pXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gY29sb3IoZC5rZXkpOyB9KTtcbiAgICB9KVxufSIsImNvbnN0IFV0aWwgPSB7XG4gICAgZHluYW1pY1NvcnQocHJvcGVydHkpIHtcbiAgICAgICAgdmFyIHNvcnRPcmRlciA9IDE7XG5cbiAgICAgICAgaWYocHJvcGVydHlbMF0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICBzb3J0T3JkZXIgPSAtMTtcbiAgICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkuc3Vic3RyKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhLGIpIHtcbiAgICAgICAgICAgIGlmKHNvcnRPcmRlciA9PSAtMSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJbcHJvcGVydHldLmxvY2FsZUNvbXBhcmUoYVtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbcHJvcGVydHldLmxvY2FsZUNvbXBhcmUoYltwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vc2V0cyB1cCBhbGwgY291bnRyeXMgZm9yIHNlbGVjdCBodG1sXG4gICAgZmV0Y2hDb3VudHJpZXMoKSB7XG4gICAgICAgIGxldCBjb3VudHJpZXM7XG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9jb3JvbmF2aXJ1cy0xOS1hcGkuaGVyb2t1YXBwLmNvbS9jb3VudHJpZXNcIilcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiBjb3VudHJpZXMgPSByZXN1bHQpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY291bnRyeVNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY291bnRyaWVzLXNlbGVjdG9yJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcGFyZWRBZ2FpbnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29tcGFyZWQtY291bnRyaWVzJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY291bnRyaWVzLnNvcnQoVXRpbC5keW5hbWljU29ydCgnY291bnRyeScpKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvdW50cmllcyk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnZhbHVlID0gY291bnRyaWVzW2ldLmNvdW50cnk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLmlubmVySFRNTCA9IGNvdW50cmllc1tpXS5jb3VudHJ5O1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5jbGFzc0xpc3QuYWRkKCdjb3VudHJ5LXNlbGVjdG9yLW9wdGlvbnMnKVxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5U2VsZWN0b3JbMF0uYXBwZW5kQ2hpbGQoc2VsZWN0ZWQpO1xuICAgICAgICAgICAgICAgICAgICBpZihpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkLnZhbHVlID0gJ05vbmUnO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkLmlubmVySFRNTCA9ICdOb25lJztcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5jbGFzc0xpc3QuYWRkKFwiY29tcGFyZWQtY291bnRyaWVzLW9wdGlvbnNcIik7XG4gICAgICAgICAgICAgICAgY29tcGFyZWRBZ2FpbnN0WzBdLmFwcGVuZENoaWxkKHNlbGVjdGVkKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnZhbHVlID0gY291bnRyaWVzW2ldLmNvdW50cnk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLmlubmVySFRNTCA9IGNvdW50cmllc1tpXS5jb3VudHJ5O1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5jbGFzc0xpc3QuYWRkKCdjb21wYXJlZC1jb3VudHJpZXMtb3B0aW9ucycpXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhcmVkQWdhaW5zdFswXS5hcHBlbmRDaGlsZChzZWxlY3RlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9LFxuICAgIGZldGNoQ291bnRyaWVzMigpIHtcbiAgICAgICAgbGV0IGNvdW50cmllcztcbiAgICAgICAgZmV0Y2goXCJodHRwczovL2Nvcm9uYXZpcnVzLTE5LWFwaS5oZXJva3VhcHAuY29tL2NvdW50cmllc1wiKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IGNvdW50cmllcyA9IHJlc3VsdClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY2hlY2tib3hlcycpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvdW50cmllcy5zb3J0KFV0aWwuZHluYW1pY1NvcnQoJ2NvdW50cnknKSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY291bnRyaWVzKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgb3V0ZXJEaXYuY2xhc3NMaXN0LmFkZChcImNoZWNrYm94LXdyYXBwZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveC1ib3hcIik7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gY291bnRyaWVzW2ldLmNvdW50cnk7XG4gICAgICAgICAgICAgICAgICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gY291bnRyaWVzW2ldLmNvdW50cnk7XG4gICAgICAgICAgICAgICAgICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeVNlbGVjdG9yLmFwcGVuZENoaWxkKG91dGVyRGl2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH0sXG4gICAgLy9maW5kcyBkaXNhYmxlZCBlbGVtZW50IGFuZCBzZXRzIGl0IGZhbHNlXG4gICAgZ2V0RGlzYWJsZWRFbGVtZW50KCkge1xuICAgICAgICBsZXQgY29tcGFyZWRBZ2FpbnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29tcGFyZWQtY291bnRyaWVzJyk7XG4gICAgICAgIGNvbXBhcmVkQWdhaW5zdCA9IGNvbXBhcmVkQWdhaW5zdFswXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNvbXBhcmVkQWdhaW5zdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoY29tcGFyZWRBZ2FpbnN0W2ldLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgY29tcGFyZWRBZ2FpbnN0W2ldLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vc2V0cyBuZXcgZGlzYWJsZWQgZWxlbWVudCB0byB0cnVlXG4gICAgc2V0TmV3RGlzYWJsZWRFbGVtZW50KGRpc2FibGVkVmFsdWUpIHtcbiAgICAgICAgbGV0IGNvbXBhcmVkQWdhaW5zdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbXBhcmVkLWNvdW50cmllcycpO1xuICAgICAgICBjb21wYXJlZEFnYWluc3QgPSBjb21wYXJlZEFnYWluc3RbMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcGFyZWRBZ2FpbnN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZWRBZ2FpbnN0W2ldLnZhbHVlID09PSBkaXNhYmxlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29tcGFyZWRBZ2FpbnN0W2ldLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy9nZXRzIGFsbCBjb3VudHJpZXMgc3RhdGlzdGljc1xuICAgIGdldEFsbFN0YXRpc3RpY3MoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHBzOi8vY29yb25hdmlydXMtMTktYXBpLmhlcm9rdWFwcC5jb20vY291bnRyaWVzXCIpXG4gICAgICAgICAgLnRoZW4oIHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICB9LFxuICAgIC8vZ2V0cyBhbGwgc3RhdGVzIHN0YXRpc3RpY3NcbiAgICBnZXRBbGxVU1N0YXRpc3RpY3MoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHBzOi8vY292aWR0cmFja2luZy5jb20vYXBpL3YxL3N0YXRlcy9kYWlseS5qc29uXCIpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==