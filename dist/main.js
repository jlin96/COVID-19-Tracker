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
  var states = _lib_utils__WEBPACK_IMPORTED_MODULE_1__["default"].getAllUSStatistics();
  var filter = ["cases"];
  drawBarGraph(countries, country, filter);
  drawLineGraph(states);
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
});

function clearGraph() {
  d3.select("svg").remove();
}

function drawBarGraph(data, country, filter) {
  var margin = {
    top: 20,
    right: 0,
    bottom: 30,
    left: 65
  };
  clearGraph();
  data.then(function (result) {
    var xAxisData = [];
    var yAxisData = [];
    var both = [];
    var worldTotalCases = 0;
    result.forEach(function (country) {
      worldTotalCases += country.totalTests;
    });
    result[0].totalTests = worldTotalCases;
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
    svg.append("g").attr("transform", "translate(0," + DIMENSIONS.height + ")").call(d3.axisBottom(x)).selectAll("text").style("font-size", "10px");
    var maxHeight = maxValue / 9 * 10;

    function make_y_gridlines() {
      return d3.axisLeft(y).ticks(10);
    } //y axis


    var y = d3.scaleLinear().domain([0, maxHeight]).range([DIMENSIONS.height, 0]);
    svg.append("g").attr("class", "grid").call(make_y_gridlines().tickSize(-DIMENSIONS.width).tickFormat(""));
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
      return i * 300;
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
    }).attr("x", 910).attr("y", function (d, i) {
      return 24 + i * (size + 10);
    }) // 100 is where the first dot appears. 25 is the distance between dots
    .attr("width", size).attr("height", size).style("fill", function (d) {
      return color(d);
    }); //Adding text

    svg.selectAll("mylabels").data(subgroups).enter().append("text").transition().duration(1500).delay(function (d, i) {
      return 1100 + 100 * i;
    }).attr("x", 910 + size * 1.2).attr("y", function (d, i) {
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

function drawLineGraph(data) {
  var margin = {
    top: 20,
    right: 0,
    bottom: 30,
    left: 65
  };
  clearGraph();
  data.then(function (result) {
    console.log(result);
    var svg = d3.select("#svglinecontainer").append("svg").attr("width", DIMENSIONS.width + margin.left + margin.right).attr("height", DIMENSIONS.height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var parseTime = d3.timeParse("%Y%m%d");
    var filterData = [];
    result.forEach(function (ele) {
      ele.date = parseTime(ele.date);
    });
    console.log(result);
    var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
    .key(function (d) {
      return d.state;
    }).entries(result);
    var parseDate = d3.timeParse("%Y%m%d"); // Add X axis --> it is a date format

    var x = d3.scaleLinear().domain(d3.extent(result, function (d) {
      return parseDate(d.date);
    })).range([0, DIMENSIONS.width]);
    svg.append("g").attr("transform", "translate(0," + DIMENSIONS.height + ")").call(d3.axisBottom(x).ticks(5)); // Add Y axis

    var y = d3.scaleLinear().domain([0, d3.max(result, function (d) {
      return +d.positive;
    })]).range([DIMENSIONS.height, 0]);
    svg.append("g").call(d3.axisLeft(y)); // color palette

    var res = sumstat.map(function (d) {
      return d.key;
    }); // list of group names

    var color = d3.scaleOrdinal().domain(res).range(['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999']); // Draw the line

    svg.selectAll(".line").data(sumstat).enter().append("path").attr("fill", "none") // .attr("stroke", function(d){ return color(d.key) })
    .attr("stroke", "#ffffff").attr("stroke-width", 1.5).attr("d", function (d) {
      return d3.line().x(function (d) {
        return x(d.state);
      }).y(function (d) {
        return y(+d.positive);
      })(d.values);
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
        if (b[property] === 'World') return 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIkRJTUVOU0lPTlMiLCJ3aWR0aCIsImhlaWdodCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvdW50cnkiLCJjb3VudHJpZXMiLCJ1dGlscyIsImdldEFsbFN0YXRpc3RpY3MiLCJzdGF0ZXMiLCJnZXRBbGxVU1N0YXRpc3RpY3MiLCJmaWx0ZXIiLCJkcmF3QmFyR3JhcGgiLCJkcmF3TGluZUdyYXBoIiwiZmV0Y2hDb3VudHJpZXMiLCJjaGVja2JveFNob3duIiwic2VsZWN0Y2hlY2tib3giLCJxdWVyeVNlbGVjdG9yIiwiZSIsImNoZWNrYm94X3dyYXBwZXIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJmb2N1cyIsImFkZCIsImNoZWNrYm94IiwiaW5jbHVkZXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNwbGljZSIsImluZGV4T2YiLCJ1bmRlZmluZWQiLCJwdXNoIiwiZmlsdGVyX2NoZWNrYm94IiwicmVsYXRlZFRhcmdldCIsImNsZWFyR3JhcGgiLCJkMyIsInNlbGVjdCIsImRhdGEiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ0aGVuIiwicmVzdWx0IiwieEF4aXNEYXRhIiwieUF4aXNEYXRhIiwiYm90aCIsIndvcmxkVG90YWxDYXNlcyIsImZvckVhY2giLCJ0b3RhbFRlc3RzIiwiZWxlIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsIk51bWJlciIsImlzSW50ZWdlciIsInN1Ymdyb3VwcyIsImdyb3VwcyIsIm1hcCIsImQiLCJtYXhWYWx1ZSIsIk1hdGgiLCJtYXgiLCJzdmciLCJhcHBlbmQiLCJhdHRyIiwieCIsInNjYWxlQmFuZCIsImRvbWFpbiIsInJhbmdlIiwicGFkZGluZyIsImNhbGwiLCJheGlzQm90dG9tIiwic2VsZWN0QWxsIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJtYWtlX3lfZ3JpZGxpbmVzIiwiYXhpc0xlZnQiLCJ5IiwidGlja3MiLCJzY2FsZUxpbmVhciIsInRpY2tTaXplIiwidGlja0Zvcm1hdCIsInhTdWJncm91cCIsImJhbmR3aWR0aCIsImNvbG9yIiwic2NhbGVPcmRpbmFsIiwiYmFycyIsImVudGVyIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJpIiwidGV4dCIsInNpemUiLCJjb25zb2xlIiwibG9nIiwicGFyc2VUaW1lIiwidGltZVBhcnNlIiwiZmlsdGVyRGF0YSIsImRhdGUiLCJzdW1zdGF0IiwibmVzdCIsInN0YXRlIiwiZW50cmllcyIsInBhcnNlRGF0ZSIsImV4dGVudCIsInBvc2l0aXZlIiwicmVzIiwibGluZSIsInZhbHVlcyIsIlV0aWwiLCJkeW5hbWljU29ydCIsInByb3BlcnR5Iiwic29ydE9yZGVyIiwic3Vic3RyIiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJjb3VudHJ5U2VsZWN0b3IiLCJzb3J0IiwibGVuZ3RoIiwib3V0ZXJEaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5wdXQiLCJ0eXBlIiwiY2hlY2tlZCIsImFwcGVuZENoaWxkIiwibGFiZWwiLCJpbm5lckhUTUwiLCJnZXREaXNhYmxlZEVsZW1lbnQiLCJjb21wYXJlZEFnYWluc3QiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJzZXROZXdEaXNhYmxlZEVsZW1lbnQiLCJkaXNhYmxlZFZhbHVlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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ZUFBZSxDQUFDMUMsQ0FBRCxDQUFmLENBQW1CbEUsS0FBbkIsS0FBNkJnSCxhQUFqQyxFQUFnRDtBQUM1Q0osdUJBQWUsQ0FBQzFDLENBQUQsQ0FBZixDQUFtQjRDLFFBQW5CLEdBQThCLElBQTlCO0FBQ0g7QUFDSjtBQUNKLEdBcEVRO0FBcUVUO0FBQ0FqSSxrQkF0RVMsOEJBc0VVO0FBQ2YsV0FBT2dILEtBQUssQ0FBQyxvREFBRCxDQUFMLENBQ0o3RSxJQURJLENBQ0UsVUFBQThFLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEtBRFYsQ0FBUDtBQUVILEdBekVRO0FBMEVUO0FBQ0FoSCxvQkEzRVMsZ0NBMkVZO0FBQ2pCLFdBQU84RyxLQUFLLENBQUMsb0RBQUQsQ0FBTCxDQUNGN0UsSUFERSxDQUNHLFVBQUE4RSxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQURYLENBQVA7QUFFSDtBQTlFUSxDQUFiO0FBaUZlVixtRUFBZixFOzs7Ozs7Ozs7OztBQ2pGQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuL2xpYi91dGlsc1wiXG5cbmNvbnN0IERJTUVOU0lPTlMgPSB7XG4gICAgd2lkdGg6IDEwMDAsXG4gICAgaGVpZ2h0OiA1MDBcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNvdW50cnkgPSBbXCJXb3JsZFwiXTtcbiAgICBjb25zdCBjb3VudHJpZXMgPSB1dGlscy5nZXRBbGxTdGF0aXN0aWNzKCk7XG4gICAgY29uc3Qgc3RhdGVzID0gdXRpbHMuZ2V0QWxsVVNTdGF0aXN0aWNzKCk7XG4gICAgY29uc3QgZmlsdGVyID0gW1wiY2FzZXNcIl07XG4gICAgZHJhd0JhckdyYXBoKGNvdW50cmllcywgY291bnRyeSwgZmlsdGVyKTtcbiAgICBkcmF3TGluZUdyYXBoKHN0YXRlcylcbiAgICB1dGlscy5mZXRjaENvdW50cmllcygpO1xuXG4gICAgbGV0IGNoZWNrYm94U2hvd24gPSBmYWxzZTtcbiAgICBjb25zdCBzZWxlY3RjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuc2VsZWN0LWJveC13cmFwcGVyXCIpO1xuXG4gICAgc2VsZWN0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2tib3hfd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY2hlY2tib3hlc1wiKTtcbiAgICAgICAgaWYgKCFjaGVja2JveFNob3duKSB7XG4gICAgICAgICAgICBjaGVja2JveF93cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBjaGVja2JveF93cmFwcGVyLmZvY3VzKCk7XG4gICAgICAgICAgICBjaGVja2JveFNob3duID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrYm94X3dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIGNoZWNrYm94U2hvd24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY2hlY2tib3hlc1wiKTtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBpZihjb3VudHJ5LmluY2x1ZGVzKGUudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICAgICAgY291bnRyeS5zcGxpY2UoY291bnRyeS5pbmRleE9mKGUudGFyZ2V0LnZhbHVlKSwgMSk7XG4gICAgICAgICAgICBkcmF3QmFyR3JhcGgoY291bnRyaWVzLCBjb3VudHJ5LCBmaWx0ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY291bnRyeS5wdXNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgZHJhd0JhckdyYXBoKGNvdW50cmllcywgY291bnRyeSwgZmlsdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBmaWx0ZXJfY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnN1Ymdyb3VwLWNoZWNrYm94ZXNcIik7XG5cbiAgICBmaWx0ZXJfY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgaWYoZmlsdGVyLmluY2x1ZGVzKGUudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICAgICAgZmlsdGVyLnNwbGljZShmaWx0ZXIuaW5kZXhPZihlLnRhcmdldC52YWx1ZSksIDEpO1xuICAgICAgICAgICAgZHJhd0JhckdyYXBoKGNvdW50cmllcywgY291bnRyeSwgZmlsdGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGZpbHRlci5wdXNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgZHJhd0JhckdyYXBoKGNvdW50cmllcywgY291bnRyeSwgZmlsdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjaGVja2JveF93cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5jaGVja2JveGVzXCIpO1xuICAgIGNoZWNrYm94X3dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZSA9PiB7XG4gICAgICAgIGlmKGUucmVsYXRlZFRhcmdldCA9PT0gbnVsbCApIHtcbiAgICAgICAgICAgIGNoZWNrYm94X3dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIGNoZWNrYm94U2hvd24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pXG59KVxuXG5mdW5jdGlvbiBjbGVhckdyYXBoKCkge1xuICAgIGQzLnNlbGVjdChcInN2Z1wiKS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gZHJhd0JhckdyYXBoKGRhdGEsIGNvdW50cnksIGZpbHRlcikge1xuICAgIGxldCBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiAwLCBib3R0b206IDMwLCBsZWZ0OiA2NSB9XG4gICAgY2xlYXJHcmFwaCgpO1xuICAgIGRhdGEudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBjb25zdCB4QXhpc0RhdGEgPSBbXTtcbiAgICAgICAgY29uc3QgeUF4aXNEYXRhID0gW107XG4gICAgICAgIGxldCBib3RoID0gW107XG5cbiAgICAgICAgbGV0IHdvcmxkVG90YWxDYXNlcyA9IDA7XG4gICAgICAgIHJlc3VsdC5mb3JFYWNoKGNvdW50cnkgPT4ge1xuICAgICAgICAgICAgd29ybGRUb3RhbENhc2VzICs9IGNvdW50cnkudG90YWxUZXN0cztcbiAgICAgICAgfSlcblxuICAgICAgICByZXN1bHRbMF0udG90YWxUZXN0cyA9IHdvcmxkVG90YWxDYXNlcztcbiAgICAgICAgXG4gICAgICAgIGNvdW50cnkuZm9yRWFjaCggZWxlID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC5mb3JFYWNoKCBjb3VudHJpZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGNvdW50cmllcy5jb3VudHJ5ID09PSBlbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY291bnRyaWVzKS5mb3JFYWNoKCBrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoTnVtYmVyLmlzSW50ZWdlcihjb3VudHJpZXNba2V5XSkgJiYgZmlsdGVyLmluY2x1ZGVzKGtleSkpIHlBeGlzRGF0YS5wdXNoKGNvdW50cmllc1trZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgYm90aC5wdXNoKGNvdW50cmllcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgc3ViZ3JvdXBzID0gZmlsdGVyO1xuICAgICAgICBsZXQgZ3JvdXBzID0gZDMubWFwKGJvdGgsIGZ1bmN0aW9uKGQpe3JldHVybihkLmNvdW50cnkpfSkua2V5cygpXG4gICAgICAgIGNvbnN0IG1heFZhbHVlID0gTWF0aC5tYXgoLi4ueUF4aXNEYXRhKTtcblxuICAgICAgICBsZXQgc3ZnID0gZDNcbiAgICAgICAgICAuc2VsZWN0KFwiI3N2Z2NvbnRhaW5lclwiKVxuICAgICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIERJTUVOU0lPTlMud2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBESU1FTlNJT05TLmhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgLmF0dHIoIFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICAgICAgLy8gWCBzY2FsZSBhbmQgQXhpc1xuICAgICAgICBsZXQgeCA9IGQzLnNjYWxlQmFuZCgpXG4gICAgICAgICAgICAuZG9tYWluKGdyb3VwcylcbiAgICAgICAgICAgIC5yYW5nZShbMCwgRElNRU5TSU9OUy53aWR0aF0pXG4gICAgICAgICAgICAucGFkZGluZyhbMC4yXSlcblxuICAgICAgICBzdmdcbiAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBESU1FTlNJT05TLmhlaWdodCArIFwiKVwiKVxuICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgICAuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxMHB4XCIpXG5cblxuICAgICAgICBjb25zdCBtYXhIZWlnaHQgPSAobWF4VmFsdWUgLyA5KSAqIDEwO1xuXG4gICAgICAgIGZ1bmN0aW9uIG1ha2VfeV9ncmlkbGluZXMoKSB7XG4gICAgICAgICAgcmV0dXJuIGQzLmF4aXNMZWZ0KHkpLnRpY2tzKDEwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8veSBheGlzXG4gICAgICAgIGxldCB5ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihbMCwgbWF4SGVpZ2h0XSlcbiAgICAgICAgICAgIC5yYW5nZShbIERJTUVOU0lPTlMuaGVpZ2h0LCAwIF0pO1xuXG4gICAgICAgICBzdmdcbiAgICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImdyaWRcIilcbiAgICAgICAgICAgLmNhbGwobWFrZV95X2dyaWRsaW5lcygpLnRpY2tTaXplKC1ESU1FTlNJT05TLndpZHRoKS50aWNrRm9ybWF0KFwiXCIpKTtcblxuICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpO1xuXG4gICAgICAgIGxldCB4U3ViZ3JvdXAgPSBkM1xuICAgICAgICAgICAgLnNjYWxlQmFuZCgpXG4gICAgICAgICAgICAuZG9tYWluKHN1Ymdyb3VwcylcbiAgICAgICAgICAgIC5yYW5nZShbMCwgeC5iYW5kd2lkdGgoKV0pXG4gICAgICAgICAgICAucGFkZGluZyhbMC4wNV0pO1xuXG4gICAgICAgIGxldCBjb2xvciA9IGQzXG4gICAgICAgICAgICAuc2NhbGVPcmRpbmFsKClcbiAgICAgICAgICAgIC5kb21haW4oc3ViZ3JvdXBzKVxuICAgICAgICAgICAgLnJhbmdlKFtcIiMwNUE4QUFcIiwgXCIjM0I1MjQ5XCIsIFwiI0Q3QjQ5RVwiLCBcIiNEQzYwMkVcIiwgXCIjQkM0MTJCXCIsIFwiIzRDNjA4NVwiLCBcIiMzRTQ0MkJcIl0pO1xuXG4gICAgICAgIGxldCBiYXJzID0gc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJnXCIpXG4gICAgICAgICAgICAuZGF0YShib3RoKVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBcInRyYW5zbGF0ZShcIiArIHgoZC5jb3VudHJ5KSArIFwiLDApXCI7IH0pXG5cbiAgICAgICAgYmFycy5zZWxlY3RBbGwoXCJyZWN0XCIpICBcbiAgICAgICAgICAgIC5kYXRhKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHN1Ymdyb3Vwcy5tYXAoZnVuY3Rpb24oa2V5KSB7IHJldHVybiB7a2V5OiBrZXksIHZhbHVlOiBkW2tleV19OyB9KTsgfSlcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHhTdWJncm91cChkLmtleSkgKyAoeFN1Ymdyb3VwLmJhbmR3aWR0aCgpIC8yKSA7IH0pXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geSgwKTsgfSkgLy9zdGFydHMgeSBmcm9tIDBcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAgICAgLmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7IHJldHVybiBpICogMzAwOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHhTdWJncm91cChkLmtleSk7IH0pXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geShkLnZhbHVlKTsgfSkgLy9ncm93cyB5IHRvIGFjdHVhbCB2YWx1ZVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB4U3ViZ3JvdXAuYmFuZHdpZHRoKCkpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBESU1FTlNJT05TLmhlaWdodCAtIHkoZC52YWx1ZSk7IH0pXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gY29sb3IoZC5rZXkpOyB9KTtcbiBcbiAgICAgICAgXG4gICAgICAgIGJhcnMuc2VsZWN0QWxsKFwidGV4dGJhcnNcIilcbiAgICAgICAgICAgIC5kYXRhKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHN1Ymdyb3Vwcy5tYXAoZnVuY3Rpb24oa2V5KSB7IHJldHVybiB7a2V5OiBrZXksIHZhbHVlOiBkW2tleV19OyB9KTsgfSlcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiOHB4XCIpXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geSgwKTsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB4U3ViZ3JvdXAoZC5rZXkpICsgKHhTdWJncm91cC5iYW5kd2lkdGgoKSAvMikgOyB9KVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4gICAgICAgICAgICAuZGVsYXkoZnVuY3Rpb24gKGQsIGkpIHsgcmV0dXJuIGkgKiAzMDA7IH0pXG4gICAgICAgICAgICAudGV4dChmdW5jdGlvbihkKSB7IHJldHVybiBkLnZhbHVlIH0pXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geShkLnZhbHVlKSAtIDU7IH0pXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geFN1Ymdyb3VwKGQua2V5KSArICh4U3ViZ3JvdXAuYmFuZHdpZHRoKCkgLzIpIDsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIFxuXG4gICAgICAgIGxldCBzaXplID0gNjtcbiAgICAgICAgLy9DcmVhdGluZyBsZW5nZW5kXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJteWRvdHNcIilcbiAgICAgICAgICAgIC5kYXRhKHN1Ymdyb3VwcylcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oMTUwMClcbiAgICAgICAgICAgICAgICAuZGVsYXkoZnVuY3Rpb24oZCxpKXsgcmV0dXJuIDExMDAgKyAxMDAgKiBpOyB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCA5MTApXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQsaSl7IHJldHVybiAyNCArIGkqKHNpemUrMTApfSkgLy8gMTAwIGlzIHdoZXJlIHRoZSBmaXJzdCBkb3QgYXBwZWFycy4gMjUgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gZG90c1xuICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgc2l6ZSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBzaXplKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24oZCl7IHJldHVybiBjb2xvcihkKX0pXG5cbiAgICAgICAgLy9BZGRpbmcgdGV4dFxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwibXlsYWJlbHNcIilcbiAgICAgICAgICAgIC5kYXRhKHN1Ymdyb3VwcylcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oMTUwMClcbiAgICAgICAgICAgICAgICAuZGVsYXkoZnVuY3Rpb24oZCxpKXsgcmV0dXJuIDExMDAgKyAxMDAgKiBpOyB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCA5MTAgKyBzaXplKjEuMilcbiAgICAgICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCxpKXsgcmV0dXJuIDI1ICsgaSooc2l6ZSsxMCkgKyAoc2l6ZS8yKX0pXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBmdW5jdGlvbihkKXsgcmV0dXJuIGNvbG9yKGQpfSlcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxMnB4XCIpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24oZCl7IFxuICAgICAgICAgICAgICAgICAgICBpZihkID09PSAnY2FzZXMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1RvdGFsIENhc2VzJ1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQgPT09ICd0b2RheUNhc2VzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdDYXNlcyBUb2RheSdcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkID09PSAnZGVhdGhzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdUb3RhbCBEZWF0aHMnXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZCA9PT0gJ3RvZGF5RGVhdGhzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdEZWF0aHMgVG9kYXknXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZCA9PT0gJ3JlY292ZXJlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnVG90YWwgUmVjb3ZlcmVkJ1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBkID09PSAnY3JpdGljYWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1RvdGFsIENyaXRpY2FsJ1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBkID09PSAndG90YWxUZXN0cycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnVG90YWwgVGVzdHMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJsZWZ0XCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwiYWxpZ25tZW50LWJhc2VsaW5lXCIsIFwibWlkZGxlXCIpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZHJhd0xpbmVHcmFwaChkYXRhKSB7XG4gICAgbGV0IG1hcmdpbiA9IHsgdG9wOiAyMCwgcmlnaHQ6IDAsIGJvdHRvbTogMzAsIGxlZnQ6IDY1IH07XG4gICAgY2xlYXJHcmFwaCgpO1xuICAgIGRhdGEudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICBsZXQgc3ZnID0gZDNcbiAgICAgICAgICAuc2VsZWN0KFwiI3N2Z2xpbmVjb250YWluZXJcIilcbiAgICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBESU1FTlNJT05TLndpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgRElNRU5TSU9OUy5oZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcbiAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgIC5hdHRyKFxuICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgICAgIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIlxuICAgICAgICApO1xuXG4gICAgbGV0IHBhcnNlVGltZSA9IGQzLnRpbWVQYXJzZShcIiVZJW0lZFwiKTtcblxuICAgIGNvbnN0IGZpbHRlckRhdGEgPSBbXTtcbiAgICByZXN1bHQuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICBlbGUuZGF0ZSA9IHBhcnNlVGltZShlbGUuZGF0ZSlcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICBsZXQgc3Vtc3RhdCA9IGQzLm5lc3QoKSAvLyBuZXN0IGZ1bmN0aW9uIGFsbG93cyB0byBncm91cCB0aGUgY2FsY3VsYXRpb24gcGVyIGxldmVsIG9mIGEgZmFjdG9yXG4gICAgICAgIC5rZXkoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5zdGF0ZTt9KVxuICAgICAgICAuZW50cmllcyhyZXN1bHQpO1xuXG4gICAgbGV0IHBhcnNlRGF0ZSA9IGQzLnRpbWVQYXJzZShcIiVZJW0lZFwiKTtcblxuICAgIC8vIEFkZCBYIGF4aXMgLS0+IGl0IGlzIGEgZGF0ZSBmb3JtYXRcbiAgICBsZXQgeCA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgLmRvbWFpbihkMy5leHRlbnQocmVzdWx0LCBmdW5jdGlvbihkKSB7IHJldHVybiBwYXJzZURhdGUoZC5kYXRlKTsgfSkpXG4gICAgICAgIC5yYW5nZShbIDAsIERJTUVOU0lPTlMud2lkdGggXSk7XG4gICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIERJTUVOU0lPTlMuaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkudGlja3MoNSkpO1xuICAgIFxuICAgIC8vIEFkZCBZIGF4aXNcbiAgICBsZXQgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgLmRvbWFpbihbMCwgZDMubWF4KHJlc3VsdCwgZnVuY3Rpb24oZCkgeyByZXR1cm4gK2QucG9zaXRpdmU7IH0pXSlcbiAgICAgICAgLnJhbmdlKFsgRElNRU5TSU9OUy5oZWlnaHQsIDAgXSk7XG4gICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpO1xuICAgICAgICAgICAgXG4gICAgLy8gY29sb3IgcGFsZXR0ZVxuICAgIGxldCByZXMgPSBzdW1zdGF0Lm1hcChmdW5jdGlvbihkKXsgcmV0dXJuIGQua2V5IH0pIC8vIGxpc3Qgb2YgZ3JvdXAgbmFtZXNcbiAgICBsZXQgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoKVxuICAgICAgICAuZG9tYWluKHJlcylcbiAgICAgICAgLnJhbmdlKFsnI2U0MWExYycsJyMzNzdlYjgnLCcjNGRhZjRhJywnIzk4NGVhMycsJyNmZjdmMDAnLCcjZmZmZjMzJywnI2E2NTYyOCcsJyNmNzgxYmYnLCcjOTk5OTk5J10pXG4gICAgICAgICAgICBcbiAgICAvLyBEcmF3IHRoZSBsaW5lXG4gICAgc3ZnLnNlbGVjdEFsbChcIi5saW5lXCIpXG4gICAgICAgIC5kYXRhKHN1bXN0YXQpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgICAgICAvLyAuYXR0cihcInN0cm9rZVwiLCBmdW5jdGlvbihkKXsgcmV0dXJuIGNvbG9yKGQua2V5KSB9KVxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCIjZmZmZmZmXCIpXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAxLjUpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICByZXR1cm4gZDMubGluZSgpXG4gICAgICAgICAgICAgICAgLngoZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHgoZC5zdGF0ZSk7IH0pXG4gICAgICAgICAgICAgICAgLnkoZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHkoK2QucG9zaXRpdmUpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKGQudmFsdWVzKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbn0gICAgICAgIiwiY29uc3QgVXRpbCA9IHtcbiAgICBkeW5hbWljU29ydChwcm9wZXJ0eSkge1xuICAgICAgICB2YXIgc29ydE9yZGVyID0gMTtcblxuICAgICAgICBpZihwcm9wZXJ0eVswXSA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgIHNvcnRPcmRlciA9IC0xO1xuICAgICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5zdWJzdHIoMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGEsYikge1xuICAgICAgICAgICAgaWYoc29ydE9yZGVyID09IC0xKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gYltwcm9wZXJ0eV0ubG9jYWxlQ29tcGFyZShhW3Byb3BlcnR5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChiW3Byb3BlcnR5XSA9PT0gJ1dvcmxkJykgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbcHJvcGVydHldLmxvY2FsZUNvbXBhcmUoYltwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vc2V0cyB1cCBhbGwgY291bnRyeXMgZm9yIHNlbGVjdCBodG1sXG4gICAgZmV0Y2hDb3VudHJpZXMoKSB7XG4gICAgICAgIGxldCBjb3VudHJpZXM7XG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9jb3JvbmF2aXJ1cy0xOS1hcGkuaGVyb2t1YXBwLmNvbS9jb3VudHJpZXNcIilcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiBjb3VudHJpZXMgPSByZXN1bHQpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY291bnRyeVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmNoZWNrYm94ZXMnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBwdXQgd29ybGQgZmlyc3RcbiAgICAgICAgICAgICAgICBjb3VudHJpZXMuc29ydChVdGlsLmR5bmFtaWNTb3J0KCdjb3VudHJ5JykpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG91dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIG91dGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveC13cmFwcGVyXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3gtYm94XCIpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGNvdW50cmllc1tpXS5jb3VudHJ5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRyaWVzW2ldLmNvdW50cnkgPT09IFwiV29ybGRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBjb3VudHJpZXNbaV0uY291bnRyeTtcbiAgICAgICAgICAgICAgICAgICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5U2VsZWN0b3IuYXBwZW5kQ2hpbGQob3V0ZXJEaXYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfSxcbiAgICAvL2ZpbmRzIGRpc2FibGVkIGVsZW1lbnQgYW5kIHNldHMgaXQgZmFsc2VcbiAgICBnZXREaXNhYmxlZEVsZW1lbnQoKSB7XG4gICAgICAgIGxldCBjb21wYXJlZEFnYWluc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb21wYXJlZC1jb3VudHJpZXMnKTtcbiAgICAgICAgY29tcGFyZWRBZ2FpbnN0ID0gY29tcGFyZWRBZ2FpbnN0WzBdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29tcGFyZWRBZ2FpbnN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihjb21wYXJlZEFnYWluc3RbaV0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBjb21wYXJlZEFnYWluc3RbaV0uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy9zZXRzIG5ldyBkaXNhYmxlZCBlbGVtZW50IHRvIHRydWVcbiAgICBzZXROZXdEaXNhYmxlZEVsZW1lbnQoZGlzYWJsZWRWYWx1ZSkge1xuICAgICAgICBsZXQgY29tcGFyZWRBZ2FpbnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29tcGFyZWQtY291bnRyaWVzJyk7XG4gICAgICAgIGNvbXBhcmVkQWdhaW5zdCA9IGNvbXBhcmVkQWdhaW5zdFswXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wYXJlZEFnYWluc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlZEFnYWluc3RbaV0udmFsdWUgPT09IGRpc2FibGVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb21wYXJlZEFnYWluc3RbaV0uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvL2dldHMgYWxsIGNvdW50cmllcyBzdGF0aXN0aWNzXG4gICAgZ2V0QWxsU3RhdGlzdGljcygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9jb3JvbmF2aXJ1cy0xOS1hcGkuaGVyb2t1YXBwLmNvbS9jb3VudHJpZXNcIilcbiAgICAgICAgICAudGhlbiggcmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIH0sXG4gICAgLy9nZXRzIGFsbCBzdGF0ZXMgc3RhdGlzdGljc1xuICAgIGdldEFsbFVTU3RhdGlzdGljcygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9jb3ZpZHRyYWNraW5nLmNvbS9hcGkvdjEvc3RhdGVzL2RhaWx5Lmpzb25cIilcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWw7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9