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
  var country = ["World"];
  var countries = _lib_utils__WEBPACK_IMPORTED_MODULE_1__["default"].getAllStatistics();
  var filter = ["cases"];
  drawBarGraph(countries, country, filter);
  _lib_utils__WEBPACK_IMPORTED_MODULE_1__["default"].fetchCountries();
  var checkboxShown = false;
  var selectcheckbox = document.querySelector("div.select-box-wrapper");
  selectcheckbox.addEventListener('click', function (e) {
    var checkbox_wrapper = document.querySelector("div.checkboxes");

    if (!checkboxShown) {
      checkbox_wrapper.classList.remove("hidden");
      checkbox_wrapper.focus();
      checkboxShown = true;
    } else {
      checkbox_wrapper.classList.add("hidden");
      checkboxShown = false;
    }
  });
  var checkbox = document.querySelector("div.checkboxes");
  checkbox.addEventListener('click', function (e) {
    if (country.includes(e.target.value)) {
      country.splice(country.indexOf(e.target.value), 1);
      drawBarGraph(countries, country, filter);
    } else {
      if (e.target.value !== undefined) {
        country.push(e.target.value);
        drawBarGraph(countries, country, filter);
      }
    }
  });
  var filter_checkbox = document.querySelector("div.subgroup-checkboxes");
  filter_checkbox.addEventListener('click', function (e) {
    if (filter.includes(e.target.value)) {
      filter.splice(filter.indexOf(e.target.value), 1);
      drawBarGraph(countries, country, filter);
    } else {
      if (e.target.value !== undefined) {
        filter.push(e.target.value);
        drawBarGraph(countries, country, filter);
      }
    }
  });
  var checkbox_wrapper = document.querySelector("div.checkboxes");
  checkbox_wrapper.addEventListener("blur", function (e) {
    if (e.relatedTarget === null) {
      checkbox_wrapper.classList.add("hidden");
      checkboxShown = false;
    }
  });
  var states = _lib_utils__WEBPACK_IMPORTED_MODULE_1__["default"].getAllUSStatistics();
});

function clearGraph() {
  d3.select("svg").remove();
}

function drawBarGraph(data, country, filter) {
  var margin = {
    top: 30,
    right: 20,
    bottom: 90,
    left: 60
  };
  clearGraph();
  data.then(function (result) {
    var xAxisData = [];
    var yAxisData = [];
    var both = [];
    country.forEach(function (ele) {
      result.forEach(function (countries) {
        if (countries.country === ele) {
          Object.keys(countries).forEach(function (key) {
            if (Number.isInteger(countries[key]) && filter.includes(key)) yAxisData.push(countries[key]);
          });
          both.push(countries);
        }
      });
    });
    var subgroups = filter;
    var groups = d3.map(both, function (d) {
      return d.country;
    }).keys();
    var maxValue = Math.max.apply(Math, yAxisData);
    var svg = d3.select("#svgcontainer").append("svg").attr("width", DIMENSIONS.width + margin.left + margin.right).attr("height", DIMENSIONS.height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // X scale and Axis

    var x = d3.scaleBand().domain(groups).range([0, DIMENSIONS.width]).padding([0.2]);
    svg.append("g").attr("transform", "translate(0," + DIMENSIONS.height + ")").call(d3.axisBottom(x).tickSize(7)).selectAll("text").style("text-anchor", "end").attr("dx", "-1em").attr("dy", "-.15em").attr("transform", "rotate(-45)"); //y axis

    var maxHeight = maxValue / 9 * 10;
    var y = d3.scaleLinear().domain([0, maxHeight]).range([DIMENSIONS.height, 0]);
    svg.append("g").call(d3.axisLeft(y));
    var xSubgroup = d3.scaleBand().domain(subgroups).range([0, x.bandwidth()]).padding([0.05]);
    var color = d3.scaleOrdinal().domain(subgroups).range(["#05A8AA", "#3B5249", "#D7B49E", "#DC602E", "#BC412B", "#4C6085", "#3E442B"]);
    var bars = svg.append("g").selectAll("g").data(both).enter().append("g").attr("transform", function (d) {
      return "translate(" + x(d.country) + ",0)";
    });
    bars.selectAll("rect").data(function (d) {
      return subgroups.map(function (key) {
        return {
          key: key,
          value: d[key]
        };
      });
    }).enter().append("rect").attr("x", function (d) {
      return xSubgroup(d.key) + xSubgroup.bandwidth() / 2;
    }).attr("y", function (d) {
      return y(0);
    }) //starts y from 0
    .transition().duration(2000).delay(function (d, i) {
      return i * 100;
    }).attr("x", function (d) {
      return xSubgroup(d.key);
    }).attr("y", function (d) {
      return y(d.value);
    }) //grows y to actual value
    .attr("width", xSubgroup.bandwidth()).attr("height", function (d) {
      return DIMENSIONS.height - y(d.value);
    }).attr("fill", function (d) {
      return color(d.key);
    });
    bars.selectAll("textbars").data(function (d) {
      return subgroups.map(function (key) {
        return {
          key: key,
          value: d[key]
        };
      });
    }).enter().append("text").style("font-size", "8px").attr("y", function (d) {
      return y(0);
    }).attr("x", function (d) {
      return xSubgroup(d.key) + xSubgroup.bandwidth() / 2;
    }).transition().duration(2000).delay(function (d, i) {
      return i * 300;
    }).text(function (d) {
      return d.value;
    }).attr("y", function (d) {
      return y(d.value) - 5;
    }).attr("x", function (d) {
      return xSubgroup(d.key) + xSubgroup.bandwidth() / 2;
    }).attr("text-anchor", "middle");
    var size = 6; //Creating lengend

    svg.selectAll("mydots").data(subgroups).enter().append("rect").transition().duration(1500).delay(function (d, i) {
      return 1100 + 100 * i;
    }).attr("x", 920).attr("y", function (d, i) {
      return 24 + i * (size + 10);
    }) // 100 is where the first dot appears. 25 is the distance between dots
    .attr("width", size).attr("height", size).style("fill", function (d) {
      return color(d);
    }); //Adding text

    svg.selectAll("mylabels").data(subgroups).enter().append("text").transition().duration(1500).delay(function (d, i) {
      return 1100 + 100 * i;
    }).attr("x", 920 + size * 1.2).attr("y", function (d, i) {
      return 25 + i * (size + 10) + size / 2;
    }).style("fill", function (d) {
      return color(d);
    }).style("font-size", "12px").text(function (d) {
      if (d === 'cases') {
        return 'Total Cases';
      } else if (d === 'todayCases') {
        return 'Cases Today';
      } else if (d === 'deaths') {
        return 'Total Deaths';
      } else if (d === 'todayDeaths') {
        return 'Deaths Today';
      } else if (d === 'recovered') {
        return 'Total Recovered';
      } else if (d === 'critical') {
        return 'Total Critical';
      } else if (d === 'totalTests') {
        return 'Total Tests';
      }
    }).attr("text-anchor", "left").style("alignment-baseline", "middle");
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
      var countrySelector = document.querySelector('div.checkboxes'); // put world first

      countries.sort(Util.dynamicSort('country'));

      for (var i = 0; i < countries.length; i++) {
        var outerDiv = document.createElement('div');
        outerDiv.classList.add("checkbox-wrapper");
        var input = document.createElement('input');
        input.type = "checkbox";
        input.classList.add("checkbox-box");
        input.value = countries[i].country;

        if (countries[i].country === "World") {
          input.checked = true;
        }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2RjMmEiXSwibmFtZXMiOlsiRElNRU5TSU9OUyIsIndpZHRoIiwiaGVpZ2h0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY291bnRyeSIsImNvdW50cmllcyIsInV0aWxzIiwiZ2V0QWxsU3RhdGlzdGljcyIsImZpbHRlciIsImRyYXdCYXJHcmFwaCIsImZldGNoQ291bnRyaWVzIiwiY2hlY2tib3hTaG93biIsInNlbGVjdGNoZWNrYm94IiwicXVlcnlTZWxlY3RvciIsImUiLCJjaGVja2JveF93cmFwcGVyIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZm9jdXMiLCJhZGQiLCJjaGVja2JveCIsImluY2x1ZGVzIiwidGFyZ2V0IiwidmFsdWUiLCJzcGxpY2UiLCJpbmRleE9mIiwidW5kZWZpbmVkIiwicHVzaCIsImZpbHRlcl9jaGVja2JveCIsInJlbGF0ZWRUYXJnZXQiLCJzdGF0ZXMiLCJnZXRBbGxVU1N0YXRpc3RpY3MiLCJjbGVhckdyYXBoIiwiZDMiLCJzZWxlY3QiLCJkYXRhIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwidGhlbiIsInJlc3VsdCIsInhBeGlzRGF0YSIsInlBeGlzRGF0YSIsImJvdGgiLCJmb3JFYWNoIiwiZWxlIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsIk51bWJlciIsImlzSW50ZWdlciIsInN1Ymdyb3VwcyIsImdyb3VwcyIsIm1hcCIsImQiLCJtYXhWYWx1ZSIsIk1hdGgiLCJtYXgiLCJzdmciLCJhcHBlbmQiLCJhdHRyIiwieCIsInNjYWxlQmFuZCIsImRvbWFpbiIsInJhbmdlIiwicGFkZGluZyIsImNhbGwiLCJheGlzQm90dG9tIiwidGlja1NpemUiLCJzZWxlY3RBbGwiLCJzdHlsZSIsIm1heEhlaWdodCIsInkiLCJzY2FsZUxpbmVhciIsImF4aXNMZWZ0IiwieFN1Ymdyb3VwIiwiYmFuZHdpZHRoIiwiY29sb3IiLCJzY2FsZU9yZGluYWwiLCJiYXJzIiwiZW50ZXIiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsImkiLCJ0ZXh0Iiwic2l6ZSIsIlV0aWwiLCJkeW5hbWljU29ydCIsInByb3BlcnR5Iiwic29ydE9yZGVyIiwic3Vic3RyIiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJjb3VudHJ5U2VsZWN0b3IiLCJzb3J0IiwibGVuZ3RoIiwib3V0ZXJEaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5wdXQiLCJ0eXBlIiwiY2hlY2tlZCIsImFwcGVuZENoaWxkIiwibGFiZWwiLCJpbm5lckhUTUwiLCJnZXREaXNhYmxlZEVsZW1lbnQiLCJjb21wYXJlZEFnYWluc3QiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJzZXROZXdEaXNhYmxlZEVsZW1lbnQiLCJkaXNhYmxlZFZhbHVlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEy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QUFDQTtBQUNIO0FBQ0o7QUFDSixHQXpEUTtBQTBEVDtBQUNBQyx1QkEzRFMsaUNBMkRhQyxhQTNEYixFQTJENEI7QUFDakMsUUFBSUosZUFBZSxHQUFHOUcsUUFBUSxDQUFDK0csc0JBQVQsQ0FBZ0Msb0JBQWhDLENBQXRCO0FBQ0FELG1CQUFlLEdBQUdBLGVBQWUsQ0FBQyxDQUFELENBQWpDOztBQUNBLFNBQUssSUFBSTFCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcwQixlQUFlLENBQUNWLE1BQXBDLEVBQTRDaEIsQ0FBQyxFQUE3QyxFQUFpRDtBQUM3QyxVQUFJMEIsZUFBZSxDQUFDMUIsQ0FBRCxDQUFmLENBQW1CL0QsS0FBbkIsS0FBNkI2RixhQUFqQyxFQUFnRDtBQUM1Q0osdUJBQWUsQ0FBQzFCLENBQUQsQ0FBZixDQUFtQjRCLFFBQW5CLEdBQThCLElBQTlCO0FBQ0g7QUFDSjtBQUNKLEdBbkVRO0FBb0VUO0FBQ0EzRyxrQkFyRVMsOEJBcUVVO0FBQ2YsV0FBTzBGLEtBQUssQ0FBQyxvREFBRCxDQUFMLENBQ0p4RCxJQURJLENBQ0UsVUFBQXlELFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEtBRFYsQ0FBUDtBQUVILEdBeEVRO0FBeUVUO0FBQ0FwRSxvQkExRVMsZ0NBMEVZO0FBQ2pCLFdBQU9rRSxLQUFLLENBQUMsb0RBQUQsQ0FBTCxDQUNGeEQsSUFERSxDQUNHLFVBQUF5RCxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQURYLENBQVA7QUFFSDtBQTdFUSxDQUFiO0FBZ0ZlVixtRUFBZixFOzs7Ozs7Ozs7OztBQ2hGQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuL2xpYi91dGlsc1wiXG5cbmNvbnN0IERJTUVOU0lPTlMgPSB7XG4gICAgd2lkdGg6IDEwMDAsXG4gICAgaGVpZ2h0OiA1MDBcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNvdW50cnkgPSBbXCJXb3JsZFwiXTtcbiAgICBjb25zdCBjb3VudHJpZXMgPSB1dGlscy5nZXRBbGxTdGF0aXN0aWNzKCk7XG4gICAgY29uc3QgZmlsdGVyID0gW1wiY2FzZXNcIl07XG4gICAgZHJhd0JhckdyYXBoKGNvdW50cmllcywgY291bnRyeSwgZmlsdGVyKTtcbiAgICB1dGlscy5mZXRjaENvdW50cmllcygpO1xuXG4gICAgbGV0IGNoZWNrYm94U2hvd24gPSBmYWxzZTtcbiAgICBjb25zdCBzZWxlY3RjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuc2VsZWN0LWJveC13cmFwcGVyXCIpO1xuXG4gICAgc2VsZWN0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2tib3hfd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY2hlY2tib3hlc1wiKTtcbiAgICAgICAgaWYgKCFjaGVja2JveFNob3duKSB7XG4gICAgICAgICAgICBjaGVja2JveF93cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBjaGVja2JveF93cmFwcGVyLmZvY3VzKCk7XG4gICAgICAgICAgICBjaGVja2JveFNob3duID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrYm94X3dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIGNoZWNrYm94U2hvd24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY2hlY2tib3hlc1wiKTtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBpZihjb3VudHJ5LmluY2x1ZGVzKGUudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICAgICAgY291bnRyeS5zcGxpY2UoY291bnRyeS5pbmRleE9mKGUudGFyZ2V0LnZhbHVlKSwgMSk7XG4gICAgICAgICAgICBkcmF3QmFyR3JhcGgoY291bnRyaWVzLCBjb3VudHJ5LCBmaWx0ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY291bnRyeS5wdXNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgZHJhd0JhckdyYXBoKGNvdW50cmllcywgY291bnRyeSwgZmlsdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBmaWx0ZXJfY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnN1Ymdyb3VwLWNoZWNrYm94ZXNcIik7XG5cbiAgICBmaWx0ZXJfY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgaWYoZmlsdGVyLmluY2x1ZGVzKGUudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICAgICAgZmlsdGVyLnNwbGljZShmaWx0ZXIuaW5kZXhPZihlLnRhcmdldC52YWx1ZSksIDEpO1xuICAgICAgICAgICAgZHJhd0JhckdyYXBoKGNvdW50cmllcywgY291bnRyeSwgZmlsdGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGZpbHRlci5wdXNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgZHJhd0JhckdyYXBoKGNvdW50cmllcywgY291bnRyeSwgZmlsdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjaGVja2JveF93cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5jaGVja2JveGVzXCIpO1xuICAgIGNoZWNrYm94X3dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZSA9PiB7XG4gICAgICAgIGlmKGUucmVsYXRlZFRhcmdldCA9PT0gbnVsbCApIHtcbiAgICAgICAgICAgIGNoZWNrYm94X3dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIGNoZWNrYm94U2hvd24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29uc3Qgc3RhdGVzID0gdXRpbHMuZ2V0QWxsVVNTdGF0aXN0aWNzKCk7XG59KVxuXG5mdW5jdGlvbiBjbGVhckdyYXBoKCkge1xuICAgIGQzLnNlbGVjdChcInN2Z1wiKS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gZHJhd0JhckdyYXBoKGRhdGEsIGNvdW50cnksIGZpbHRlcikge1xuICAgIGxldCBtYXJnaW4gPSB7IHRvcDogMzAsIHJpZ2h0OiAyMCwgYm90dG9tOiA5MCwgbGVmdDogNjAgfVxuICAgIGNsZWFyR3JhcGgoKTtcbiAgICBkYXRhLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc3QgeEF4aXNEYXRhID0gW107XG4gICAgICAgIGNvbnN0IHlBeGlzRGF0YSA9IFtdO1xuICAgICAgICBsZXQgYm90aCA9IFtdO1xuXG4gICAgICAgIGNvdW50cnkuZm9yRWFjaCggZWxlID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC5mb3JFYWNoKCBjb3VudHJpZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGNvdW50cmllcy5jb3VudHJ5ID09PSBlbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY291bnRyaWVzKS5mb3JFYWNoKCBrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoTnVtYmVyLmlzSW50ZWdlcihjb3VudHJpZXNba2V5XSkgJiYgZmlsdGVyLmluY2x1ZGVzKGtleSkpIHlBeGlzRGF0YS5wdXNoKGNvdW50cmllc1trZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgYm90aC5wdXNoKGNvdW50cmllcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIGxldCBzdWJncm91cHMgPSBmaWx0ZXI7XG4gICAgICAgIGxldCBncm91cHMgPSBkMy5tYXAoYm90aCwgZnVuY3Rpb24oZCl7cmV0dXJuKGQuY291bnRyeSl9KS5rZXlzKClcbiAgICAgICAgY29uc3QgbWF4VmFsdWUgPSBNYXRoLm1heCguLi55QXhpc0RhdGEpO1xuXG4gICAgICAgIGxldCBzdmcgPSBkM1xuICAgICAgICAgIC5zZWxlY3QoXCIjc3ZnY29udGFpbmVyXCIpXG4gICAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgRElNRU5TSU9OUy53aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIERJTUVOU0lPTlMuaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAuYXR0ciggXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuICAgICAgICAvLyBYIHNjYWxlIGFuZCBBeGlzXG4gICAgICAgIGxldCB4ID0gZDMuc2NhbGVCYW5kKClcbiAgICAgICAgICAgIC5kb21haW4oZ3JvdXBzKVxuICAgICAgICAgICAgLnJhbmdlKFswLCBESU1FTlNJT05TLndpZHRoXSlcbiAgICAgICAgICAgIC5wYWRkaW5nKFswLjJdKVxuXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgRElNRU5TSU9OUy5oZWlnaHQgKyBcIilcIilcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkudGlja1NpemUoNykpXG4gICAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVx0XG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJkeFwiLCBcIi0xZW1cIilcbiAgICAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCItLjE1ZW1cIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC00NSlcIik7XG5cbiAgICAgICAgLy95IGF4aXNcbiAgICAgICAgY29uc3QgbWF4SGVpZ2h0ID0gKG1heFZhbHVlIC8gOSkgKiAxMDtcbiAgICAgICAgbGV0IHkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFswLCBtYXhIZWlnaHRdKVxuICAgICAgICAgICAgLnJhbmdlKFsgRElNRU5TSU9OUy5oZWlnaHQsIDAgXSk7XG5cbiAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKTtcblxuICAgICAgICBsZXQgeFN1Ymdyb3VwID0gZDNcbiAgICAgICAgICAgIC5zY2FsZUJhbmQoKVxuICAgICAgICAgICAgLmRvbWFpbihzdWJncm91cHMpXG4gICAgICAgICAgICAucmFuZ2UoWzAsIHguYmFuZHdpZHRoKCldKVxuICAgICAgICAgICAgLnBhZGRpbmcoWzAuMDVdKTtcblxuICAgICAgICBsZXQgY29sb3IgPSBkM1xuICAgICAgICAgICAgLnNjYWxlT3JkaW5hbCgpXG4gICAgICAgICAgICAuZG9tYWluKHN1Ymdyb3VwcylcbiAgICAgICAgICAgIC5yYW5nZShbXCIjMDVBOEFBXCIsIFwiIzNCNTI0OVwiLCBcIiNEN0I0OUVcIiwgXCIjREM2MDJFXCIsIFwiI0JDNDEyQlwiLCBcIiM0QzYwODVcIiwgXCIjM0U0NDJCXCJdKTtcblxuICAgICAgICBsZXQgYmFycyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuc2VsZWN0QWxsKFwiZ1wiKVxuICAgICAgICAgICAgLmRhdGEoYm90aClcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB4KGQuY291bnRyeSkgKyBcIiwwKVwiOyB9KVxuXG4gICAgICAgIGJhcnMuc2VsZWN0QWxsKFwicmVjdFwiKSAgXG4gICAgICAgICAgICAuZGF0YShmdW5jdGlvbihkKSB7IHJldHVybiBzdWJncm91cHMubWFwKGZ1bmN0aW9uKGtleSkgeyByZXR1cm4ge2tleToga2V5LCB2YWx1ZTogZFtrZXldfTsgfSk7IH0pXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB4U3ViZ3JvdXAoZC5rZXkpICsgKHhTdWJncm91cC5iYW5kd2lkdGgoKSAvMikgOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoMCk7IH0pIC8vc3RhcnRzIHkgZnJvbSAwXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjAwMClcbiAgICAgICAgICAgIC5kZWxheShmdW5jdGlvbiAoZCwgaSkgeyByZXR1cm4gaSAqIDEwMDsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB4U3ViZ3JvdXAoZC5rZXkpOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZC52YWx1ZSk7IH0pIC8vZ3Jvd3MgeSB0byBhY3R1YWwgdmFsdWVcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgeFN1Ymdyb3VwLmJhbmR3aWR0aCgpKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gRElNRU5TSU9OUy5oZWlnaHQgLSB5KGQudmFsdWUpOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGNvbG9yKGQua2V5KTsgfSk7XG4gXG4gICAgICAgIFxuICAgICAgICBiYXJzLnNlbGVjdEFsbChcInRleHRiYXJzXCIpXG4gICAgICAgICAgICAuZGF0YShmdW5jdGlvbihkKSB7IHJldHVybiBzdWJncm91cHMubWFwKGZ1bmN0aW9uKGtleSkgeyByZXR1cm4ge2tleToga2V5LCB2YWx1ZTogZFtrZXldfTsgfSk7IH0pXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjhweFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoMCk7IH0pXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geFN1Ymdyb3VwKGQua2V5KSArICh4U3ViZ3JvdXAuYmFuZHdpZHRoKCkgLzIpIDsgfSlcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAgICAgLmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7IHJldHVybiBpICogMzAwOyB9KVxuICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC52YWx1ZSB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZC52YWx1ZSkgLSA1OyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHhTdWJncm91cChkLmtleSkgKyAoeFN1Ymdyb3VwLmJhbmR3aWR0aCgpIC8yKSA7IH0pXG4gICAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICBcblxuICAgICAgICBsZXQgc2l6ZSA9IDY7XG4gICAgICAgIC8vQ3JlYXRpbmcgbGVuZ2VuZFxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwibXlkb3RzXCIpXG4gICAgICAgICAgICAuZGF0YShzdWJncm91cHMpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDE1MDApXG4gICAgICAgICAgICAgICAgLmRlbGF5KGZ1bmN0aW9uKGQsaSl7IHJldHVybiAxMTAwICsgMTAwICogaTsgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgOTIwKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkLGkpeyByZXR1cm4gMjQgKyBpKihzaXplKzEwKX0pIC8vIDEwMCBpcyB3aGVyZSB0aGUgZmlyc3QgZG90IGFwcGVhcnMuIDI1IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGRvdHNcbiAgICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHNpemUpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgc2l6ZSlcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpeyByZXR1cm4gY29sb3IoZCl9KVxuXG4gICAgICAgIC8vQWRkaW5nIHRleHRcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcIm15bGFiZWxzXCIpXG4gICAgICAgICAgICAuZGF0YShzdWJncm91cHMpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDE1MDApXG4gICAgICAgICAgICAgICAgLmRlbGF5KGZ1bmN0aW9uKGQsaSl7IHJldHVybiAxMTAwICsgMTAwICogaTsgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgOTIwICsgc2l6ZSoxLjIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQsaSl7IHJldHVybiAyNSArIGkqKHNpemUrMTApICsgKHNpemUvMil9KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24oZCl7IHJldHVybiBjb2xvcihkKX0pXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMTJweFwiKVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpeyBcbiAgICAgICAgICAgICAgICAgICAgaWYoZCA9PT0gJ2Nhc2VzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdUb3RhbCBDYXNlcydcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkID09PSAndG9kYXlDYXNlcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnQ2FzZXMgVG9kYXknXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZCA9PT0gJ2RlYXRocycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnVG90YWwgRGVhdGhzJ1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQgPT09ICd0b2RheURlYXRocycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnRGVhdGhzIFRvZGF5J1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQgPT09ICdyZWNvdmVyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1RvdGFsIFJlY292ZXJlZCdcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggZCA9PT0gJ2NyaXRpY2FsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdUb3RhbCBDcml0aWNhbCdcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggZCA9PT0gJ3RvdGFsVGVzdHMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1RvdGFsIFRlc3RzJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibGVmdFwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImFsaWdubWVudC1iYXNlbGluZVwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgICAgIFxuXG5cbiAgICB9KVxufSIsImNvbnN0IFV0aWwgPSB7XG4gICAgZHluYW1pY1NvcnQocHJvcGVydHkpIHtcbiAgICAgICAgdmFyIHNvcnRPcmRlciA9IDE7XG5cbiAgICAgICAgaWYocHJvcGVydHlbMF0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICBzb3J0T3JkZXIgPSAtMTtcbiAgICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkuc3Vic3RyKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhLGIpIHtcbiAgICAgICAgICAgIGlmKHNvcnRPcmRlciA9PSAtMSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJbcHJvcGVydHldLmxvY2FsZUNvbXBhcmUoYVtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbcHJvcGVydHldLmxvY2FsZUNvbXBhcmUoYltwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vc2V0cyB1cCBhbGwgY291bnRyeXMgZm9yIHNlbGVjdCBodG1sXG4gICAgZmV0Y2hDb3VudHJpZXMoKSB7XG4gICAgICAgIGxldCBjb3VudHJpZXM7XG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9jb3JvbmF2aXJ1cy0xOS1hcGkuaGVyb2t1YXBwLmNvbS9jb3VudHJpZXNcIilcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiBjb3VudHJpZXMgPSByZXN1bHQpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY291bnRyeVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmNoZWNrYm94ZXMnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBwdXQgd29ybGQgZmlyc3RcbiAgICAgICAgICAgICAgICBjb3VudHJpZXMuc29ydChVdGlsLmR5bmFtaWNTb3J0KCdjb3VudHJ5JykpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG91dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIG91dGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveC13cmFwcGVyXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3gtYm94XCIpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGNvdW50cmllc1tpXS5jb3VudHJ5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRyaWVzW2ldLmNvdW50cnkgPT09IFwiV29ybGRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBjb3VudHJpZXNbaV0uY291bnRyeTtcbiAgICAgICAgICAgICAgICAgICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5U2VsZWN0b3IuYXBwZW5kQ2hpbGQob3V0ZXJEaXYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfSxcbiAgICAvL2ZpbmRzIGRpc2FibGVkIGVsZW1lbnQgYW5kIHNldHMgaXQgZmFsc2VcbiAgICBnZXREaXNhYmxlZEVsZW1lbnQoKSB7XG4gICAgICAgIGxldCBjb21wYXJlZEFnYWluc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb21wYXJlZC1jb3VudHJpZXMnKTtcbiAgICAgICAgY29tcGFyZWRBZ2FpbnN0ID0gY29tcGFyZWRBZ2FpbnN0WzBdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29tcGFyZWRBZ2FpbnN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihjb21wYXJlZEFnYWluc3RbaV0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBjb21wYXJlZEFnYWluc3RbaV0uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy9zZXRzIG5ldyBkaXNhYmxlZCBlbGVtZW50IHRvIHRydWVcbiAgICBzZXROZXdEaXNhYmxlZEVsZW1lbnQoZGlzYWJsZWRWYWx1ZSkge1xuICAgICAgICBsZXQgY29tcGFyZWRBZ2FpbnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29tcGFyZWQtY291bnRyaWVzJyk7XG4gICAgICAgIGNvbXBhcmVkQWdhaW5zdCA9IGNvbXBhcmVkQWdhaW5zdFswXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wYXJlZEFnYWluc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlZEFnYWluc3RbaV0udmFsdWUgPT09IGRpc2FibGVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb21wYXJlZEFnYWluc3RbaV0uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvL2dldHMgYWxsIGNvdW50cmllcyBzdGF0aXN0aWNzXG4gICAgZ2V0QWxsU3RhdGlzdGljcygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9jb3JvbmF2aXJ1cy0xOS1hcGkuaGVyb2t1YXBwLmNvbS9jb3VudHJpZXNcIilcbiAgICAgICAgICAudGhlbiggcmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIH0sXG4gICAgLy9nZXRzIGFsbCBzdGF0ZXMgc3RhdGlzdGljc1xuICAgIGdldEFsbFVTU3RhdGlzdGljcygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9jb3ZpZHRyYWNraW5nLmNvbS9hcGkvdjEvc3RhdGVzL2RhaWx5Lmpzb25cIilcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWw7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9