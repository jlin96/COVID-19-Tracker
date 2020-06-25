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
  drawBarGraph(countries, country);
  _lib_utils__WEBPACK_IMPORTED_MODULE_1__["default"].fetchCountries();
  var checkboxShown = false;
  var selectcheckbox = document.querySelector("div.select-box-wrapper");
  selectcheckbox.addEventListener('click', function (e) {
    var checkbox_wrapper = document.querySelector("div.checkboxes");

    if (!checkboxShown) {
      checkbox_wrapper.classList.remove("hidden");
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
      drawBarGraph(countries, country);
    } else {
      if (e.target.value === undefined) {
        console.log("nope");
      } else {
        country.push(e.target.value);
        console.log(country);
        drawBarGraph(countries, country);
      }
    }
  });
  var states = _lib_utils__WEBPACK_IMPORTED_MODULE_1__["default"].getAllUSStatistics();
});

function clearGraph() {
  d3.select("svg").remove();
}

function drawBarGraph(data, country) {
  var margin = {
    top: 30,
    right: 20,
    bottom: 80,
    left: 60
  };
  clearGraph();
  data.then(function (result) {
    var xAxisData = [];
    var yAxisData = [];
    var both = [];
    result.forEach(function (ele) {
      if (country.includes(ele.country)) {
        xAxisData.push(ele.country);
        yAxisData.push(ele.cases);
        both.push(ele);
      }
    });
    var subgroups = Object.keys(both[0]).slice(1);
    subgroups.splice(7, 2);
    subgroups.splice(8, 1);
    subgroups.splice(5, 1);
    console.log(subgroups);
    var groups = d3.map(both, function (d) {
      return d.country;
    }).keys(); // console.log(groups);

    var svg = d3.select("#svgcontainer").append("svg").attr("width", DIMENSIONS.width + margin.left + margin.right).attr("height", DIMENSIONS.height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // X scale and Axis

    var x = d3.scaleBand().domain(groups).range([0, DIMENSIONS.width]).padding([0.2]);
    svg.append("g").attr("transform", "translate(0," + DIMENSIONS.height + ")").call(d3.axisBottom(x).tickSize(7)).selectAll("text").style("text-anchor", "end").attr("dx", "-1em").attr("dy", "-.15em").attr("transform", "rotate(-45)"); //y axis

    var maxHeight = d3.max(yAxisData) / 9 * 10;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIkRJTUVOU0lPTlMiLCJ3aWR0aCIsImhlaWdodCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvdW50cnkiLCJjb3VudHJpZXMiLCJ1dGlscyIsImdldEFsbFN0YXRpc3RpY3MiLCJkcmF3QmFyR3JhcGgiLCJmZXRjaENvdW50cmllcyIsImNoZWNrYm94U2hvd24iLCJzZWxlY3RjaGVja2JveCIsInF1ZXJ5U2VsZWN0b3IiLCJlIiwiY2hlY2tib3hfd3JhcHBlciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImNoZWNrYm94IiwiaW5jbHVkZXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNwbGljZSIsImluZGV4T2YiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInN0YXRlcyIsImdldEFsbFVTU3RhdGlzdGljcyIsImNsZWFyR3JhcGgiLCJkMyIsInNlbGVjdCIsImRhdGEiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ0aGVuIiwicmVzdWx0IiwieEF4aXNEYXRhIiwieUF4aXNEYXRhIiwiYm90aCIsImZvckVhY2giLCJlbGUiLCJjYXNlcyIsInN1Ymdyb3VwcyIsIk9iamVjdCIsImtleXMiLCJzbGljZSIsImdyb3VwcyIsIm1hcCIsImQiLCJzdmciLCJhcHBlbmQiLCJhdHRyIiwieCIsInNjYWxlQmFuZCIsImRvbWFpbiIsInJhbmdlIiwicGFkZGluZyIsImNhbGwiLCJheGlzQm90dG9tIiwidGlja1NpemUiLCJzZWxlY3RBbGwiLCJzdHlsZSIsIm1heEhlaWdodCIsIm1heCIsInkiLCJzY2FsZUxpbmVhciIsImF4aXNMZWZ0IiwieFN1Ymdyb3VwIiwiYmFuZHdpZHRoIiwiY29sb3IiLCJzY2FsZU9yZGluYWwiLCJiYXJzIiwiZW50ZXIiLCJrZXkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsImkiLCJ0ZXh0Iiwic2l6ZSIsIlV0aWwiLCJkeW5hbWljU29ydCIsInByb3BlcnR5Iiwic29ydE9yZGVyIiwic3Vic3RyIiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJjb3VudHJ5U2VsZWN0b3IiLCJzb3J0IiwibGVuZ3RoIiwib3V0ZXJEaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5wdXQiLCJ0eXBlIiwiYXBwZW5kQ2hpbGQiLCJsYWJlbCIsImlubmVySFRNTCIsImdldERpc2FibGVkRWxlbWVudCIsImNvbXBhcmVkQWdhaW5zdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJkaXNhYmxlZCIsInNldE5ld0Rpc2FibGVkRWxlbWVudCIsImRpc2FibGVkVmFsdWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7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LGVBQWUsR0FBR3pHLFFBQVEsQ0FBQzBHLHNCQUFULENBQWdDLG9CQUFoQyxDQUF0QjtBQUNBRCxtQkFBZSxHQUFHQSxlQUFlLENBQUMsQ0FBRCxDQUFqQzs7QUFDQSxTQUFLLElBQUl6QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeUIsZUFBZSxDQUFDVCxNQUFwQyxFQUE0Q2hCLENBQUMsRUFBN0MsRUFBaUQ7QUFDN0MsVUFBSXlCLGVBQWUsQ0FBQ3pCLENBQUQsQ0FBZixDQUFtQjdELEtBQW5CLEtBQTZCMEYsYUFBakMsRUFBZ0Q7QUFDNUNKLHVCQUFlLENBQUN6QixDQUFELENBQWYsQ0FBbUIyQixRQUFuQixHQUE4QixJQUE5QjtBQUNIO0FBQ0o7QUFDSixHQWhFUTtBQWlFVDtBQUNBdEcsa0JBbEVTLDhCQWtFVTtBQUNmLFdBQU9zRixLQUFLLENBQUMsb0RBQUQsQ0FBTCxDQUNKdEQsSUFESSxDQUNFLFVBQUF1RCxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQURWLENBQVA7QUFFSCxHQXJFUTtBQXNFVDtBQUNBbEUsb0JBdkVTLGdDQXVFWTtBQUNqQixXQUFPZ0UsS0FBSyxDQUFDLG9EQUFELENBQUwsQ0FDRnRELElBREUsQ0FDRyxVQUFBdUQsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsS0FEWCxDQUFQO0FBRUg7QUExRVEsQ0FBYjtBQTZFZVYsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUM3RUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCB1dGlscyBmcm9tIFwiLi9saWIvdXRpbHNcIlxuXG5jb25zdCBESU1FTlNJT05TID0ge1xuICAgIHdpZHRoOiAxMDAwLFxuICAgIGhlaWdodDogNTAwXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjb3VudHJ5ID0gW1wiV29ybGRcIl07XG4gICAgY29uc3QgY291bnRyaWVzID0gdXRpbHMuZ2V0QWxsU3RhdGlzdGljcygpO1xuICAgIGRyYXdCYXJHcmFwaChjb3VudHJpZXMsIGNvdW50cnkpO1xuICAgIHV0aWxzLmZldGNoQ291bnRyaWVzKCk7XG5cbiAgICBsZXQgY2hlY2tib3hTaG93biA9IGZhbHNlO1xuICAgIGNvbnN0IHNlbGVjdGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5zZWxlY3QtYm94LXdyYXBwZXJcIik7XG5cbiAgICBzZWxlY3RjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjb25zdCBjaGVja2JveF93cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5jaGVja2JveGVzXCIpO1xuICAgICAgICBpZiAoIWNoZWNrYm94U2hvd24pIHtcbiAgICAgICAgICAgIGNoZWNrYm94X3dyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgIGNoZWNrYm94U2hvd24gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tib3hfd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgY2hlY2tib3hTaG93biA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5jaGVja2JveGVzXCIpO1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGlmKGNvdW50cnkuaW5jbHVkZXMoZS50YXJnZXQudmFsdWUpKSB7XG4gICAgICAgICAgICBjb3VudHJ5LnNwbGljZShjb3VudHJ5LmluZGV4T2YoZS50YXJnZXQudmFsdWUpLCAxKTtcbiAgICAgICAgICAgIGRyYXdCYXJHcmFwaChjb3VudHJpZXMsIGNvdW50cnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJub3BlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY291bnRyeS5wdXNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coY291bnRyeSk7XG4gICAgICAgICAgICAgIGRyYXdCYXJHcmFwaChjb3VudHJpZXMsIGNvdW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHN0YXRlcyA9IHV0aWxzLmdldEFsbFVTU3RhdGlzdGljcygpO1xufSlcblxuZnVuY3Rpb24gY2xlYXJHcmFwaCgpIHtcbiAgICBkMy5zZWxlY3QoXCJzdmdcIikucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGRyYXdCYXJHcmFwaChkYXRhLCBjb3VudHJ5KSB7XG4gICAgbGV0IG1hcmdpbiA9IHsgdG9wOiAzMCwgcmlnaHQ6IDIwLCBib3R0b206IDgwLCBsZWZ0OiA2MCB9XG4gICAgY2xlYXJHcmFwaCgpO1xuICAgIGRhdGEudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBjb25zdCB4QXhpc0RhdGEgPSBbXTtcbiAgICAgICAgY29uc3QgeUF4aXNEYXRhID0gW107XG4gICAgICAgIGxldCBib3RoID0gW107XG5cbiAgICAgICAgcmVzdWx0LmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgIGlmIChjb3VudHJ5LmluY2x1ZGVzKGVsZS5jb3VudHJ5KSkge1xuICAgICAgICAgICAgICAgIHhBeGlzRGF0YS5wdXNoKGVsZS5jb3VudHJ5KTtcbiAgICAgICAgICAgICAgICB5QXhpc0RhdGEucHVzaChlbGUuY2FzZXMpO1xuICAgICAgICAgICAgICAgIGJvdGgucHVzaChlbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBzdWJncm91cHMgPSBPYmplY3Qua2V5cyhib3RoWzBdKS5zbGljZSgxKTtcbiAgICAgICAgc3ViZ3JvdXBzLnNwbGljZSg3LDIpO1xuICAgICAgICBzdWJncm91cHMuc3BsaWNlKDgsMSk7XG4gICAgICAgIHN1Ymdyb3Vwcy5zcGxpY2UoNSwxKTtcbiAgICAgICAgY29uc29sZS5sb2coc3ViZ3JvdXBzKTtcblxuICAgICAgICBsZXQgZ3JvdXBzID0gZDMubWFwKGJvdGgsIGZ1bmN0aW9uKGQpe3JldHVybihkLmNvdW50cnkpfSkua2V5cygpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGdyb3Vwcyk7XG5cbiAgICAgICAgbGV0IHN2ZyA9IGQzXG4gICAgICAgICAgLnNlbGVjdChcIiNzdmdjb250YWluZXJcIilcbiAgICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBESU1FTlNJT05TLndpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgRElNRU5TSU9OUy5oZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcbiAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgIC5hdHRyKCBcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gICAgICAgIC8vIFggc2NhbGUgYW5kIEF4aXNcbiAgICAgICAgbGV0IHggPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgICAgICAgLmRvbWFpbihncm91cHMpXG4gICAgICAgICAgICAucmFuZ2UoWzAsIERJTUVOU0lPTlMud2lkdGhdKVxuICAgICAgICAgICAgLnBhZGRpbmcoWzAuMl0pXG5cbiAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBESU1FTlNJT05TLmhlaWdodCArIFwiKVwiKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KS50aWNrU2l6ZSg3KSlcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXHRcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgICAgICAuYXR0cihcImR4XCIsIFwiLTFlbVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIi0uMTVlbVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTQ1KVwiKTtcblxuICAgICAgICAvL3kgYXhpc1xuICAgICAgICBjb25zdCBtYXhIZWlnaHQgPSAoZDMubWF4KHlBeGlzRGF0YSkgLyA5KSAqIDEwO1xuICAgICAgICBsZXQgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5kb21haW4oWzAsIG1heEhlaWdodF0pXG4gICAgICAgICAgICAucmFuZ2UoWyBESU1FTlNJT05TLmhlaWdodCwgMCBdKTtcblxuICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpO1xuXG4gICAgICAgIGxldCB4U3ViZ3JvdXAgPSBkM1xuICAgICAgICAgICAgLnNjYWxlQmFuZCgpXG4gICAgICAgICAgICAuZG9tYWluKHN1Ymdyb3VwcylcbiAgICAgICAgICAgIC5yYW5nZShbMCwgeC5iYW5kd2lkdGgoKV0pXG4gICAgICAgICAgICAucGFkZGluZyhbMC4wNV0pO1xuXG4gICAgICAgIGxldCBjb2xvciA9IGQzXG4gICAgICAgICAgICAuc2NhbGVPcmRpbmFsKClcbiAgICAgICAgICAgIC5kb21haW4oc3ViZ3JvdXBzKVxuICAgICAgICAgICAgLnJhbmdlKFtcIiMwNUE4QUFcIiwgXCIjM0I1MjQ5XCIsIFwiI0Q3QjQ5RVwiLCBcIiNEQzYwMkVcIiwgXCIjQkM0MTJCXCIsIFwiIzRDNjA4NVwiLCBcIiMzRTQ0MkJcIl0pO1xuXG4gICAgICAgIGxldCBiYXJzID0gc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJnXCIpXG4gICAgICAgICAgICAuZGF0YShib3RoKVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBcInRyYW5zbGF0ZShcIiArIHgoZC5jb3VudHJ5KSArIFwiLDApXCI7IH0pXG5cbiAgICAgICAgYmFycy5zZWxlY3RBbGwoXCJyZWN0XCIpICBcbiAgICAgICAgICAgIC5kYXRhKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHN1Ymdyb3Vwcy5tYXAoZnVuY3Rpb24oa2V5KSB7IHJldHVybiB7a2V5OiBrZXksIHZhbHVlOiBkW2tleV19OyB9KTsgfSlcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHhTdWJncm91cChkLmtleSkgKyAoeFN1Ymdyb3VwLmJhbmR3aWR0aCgpIC8yKSA7IH0pXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geSgwKTsgfSkgLy9zdGFydHMgeSBmcm9tIDBcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAgICAgLmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7IHJldHVybiBpICogMzAwOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHhTdWJncm91cChkLmtleSk7IH0pXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geShkLnZhbHVlKTsgfSkgLy9ncm93cyB5IHRvIGFjdHVhbCB2YWx1ZVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB4U3ViZ3JvdXAuYmFuZHdpZHRoKCkpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBESU1FTlNJT05TLmhlaWdodCAtIHkoZC52YWx1ZSk7IH0pXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gY29sb3IoZC5rZXkpOyB9KTtcbiBcbiAgICAgICAgXG4gICAgICAgIGJhcnMuc2VsZWN0QWxsKFwidGV4dGJhcnNcIilcbiAgICAgICAgICAgIC5kYXRhKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHN1Ymdyb3Vwcy5tYXAoZnVuY3Rpb24oa2V5KSB7IHJldHVybiB7a2V5OiBrZXksIHZhbHVlOiBkW2tleV19OyB9KTsgfSlcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiOHB4XCIpXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geSgwKTsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB4U3ViZ3JvdXAoZC5rZXkpICsgKHhTdWJncm91cC5iYW5kd2lkdGgoKSAvMikgOyB9KVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4gICAgICAgICAgICAuZGVsYXkoZnVuY3Rpb24gKGQsIGkpIHsgcmV0dXJuIGkgKiAzMDA7IH0pXG4gICAgICAgICAgICAudGV4dChmdW5jdGlvbihkKSB7IHJldHVybiBkLnZhbHVlIH0pXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geShkLnZhbHVlKSAtIDU7IH0pXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geFN1Ymdyb3VwKGQua2V5KSArICh4U3ViZ3JvdXAuYmFuZHdpZHRoKCkgLzIpIDsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAgIFxuXG4gICAgICAgIGxldCBzaXplID0gNjtcbiAgICAgICAgLy9DcmVhdGluZyBsZW5nZW5kXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJteWRvdHNcIilcbiAgICAgICAgICAgIC5kYXRhKHN1Ymdyb3VwcylcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oMTUwMClcbiAgICAgICAgICAgICAgICAuZGVsYXkoZnVuY3Rpb24oZCxpKXsgcmV0dXJuIDExMDAgKyAxMDAgKiBpOyB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCA5MjApXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQsaSl7IHJldHVybiAyNCArIGkqKHNpemUrMTApfSkgLy8gMTAwIGlzIHdoZXJlIHRoZSBmaXJzdCBkb3QgYXBwZWFycy4gMjUgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gZG90c1xuICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgc2l6ZSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBzaXplKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24oZCl7IHJldHVybiBjb2xvcihkKX0pXG5cbiAgICAgICAgLy9BZGRpbmcgdGV4dFxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwibXlsYWJlbHNcIilcbiAgICAgICAgICAgIC5kYXRhKHN1Ymdyb3VwcylcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oMTUwMClcbiAgICAgICAgICAgICAgICAuZGVsYXkoZnVuY3Rpb24oZCxpKXsgcmV0dXJuIDExMDAgKyAxMDAgKiBpOyB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCA5MjAgKyBzaXplKjEuMilcbiAgICAgICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCxpKXsgcmV0dXJuIDI1ICsgaSooc2l6ZSsxMCkgKyAoc2l6ZS8yKX0pXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBmdW5jdGlvbihkKXsgcmV0dXJuIGNvbG9yKGQpfSlcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxMnB4XCIpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24oZCl7IFxuICAgICAgICAgICAgICAgICAgICBpZihkID09PSAnY2FzZXMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1RvdGFsIENhc2VzJ1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQgPT09ICd0b2RheUNhc2VzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdDYXNlcyBUb2RheSdcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkID09PSAnZGVhdGhzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdUb3RhbCBEZWF0aHMnXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZCA9PT0gJ3RvZGF5RGVhdGhzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdEZWF0aHMgVG9kYXknXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZCA9PT0gJ3JlY292ZXJlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnVG90YWwgUmVjb3ZlcmVkJ1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBkID09PSAnY3JpdGljYWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1RvdGFsIENyaXRpY2FsJ1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBkID09PSAndG90YWxUZXN0cycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnVG90YWwgVGVzdHMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJsZWZ0XCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwiYWxpZ25tZW50LWJhc2VsaW5lXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICAgICAgXG5cblxuICAgIH0pXG59IiwiY29uc3QgVXRpbCA9IHtcbiAgICBkeW5hbWljU29ydChwcm9wZXJ0eSkge1xuICAgICAgICB2YXIgc29ydE9yZGVyID0gMTtcblxuICAgICAgICBpZihwcm9wZXJ0eVswXSA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgIHNvcnRPcmRlciA9IC0xO1xuICAgICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5zdWJzdHIoMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGEsYikge1xuICAgICAgICAgICAgaWYoc29ydE9yZGVyID09IC0xKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gYltwcm9wZXJ0eV0ubG9jYWxlQ29tcGFyZShhW3Byb3BlcnR5XSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gYVtwcm9wZXJ0eV0ubG9jYWxlQ29tcGFyZShiW3Byb3BlcnR5XSk7XG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy9zZXRzIHVwIGFsbCBjb3VudHJ5cyBmb3Igc2VsZWN0IGh0bWxcbiAgICBmZXRjaENvdW50cmllcygpIHtcbiAgICAgICAgbGV0IGNvdW50cmllcztcbiAgICAgICAgZmV0Y2goXCJodHRwczovL2Nvcm9uYXZpcnVzLTE5LWFwaS5oZXJva3VhcHAuY29tL2NvdW50cmllc1wiKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IGNvdW50cmllcyA9IHJlc3VsdClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY2hlY2tib3hlcycpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIHB1dCB3b3JsZCBmaXJzdFxuICAgICAgICAgICAgICAgIGNvdW50cmllcy5zb3J0KFV0aWwuZHluYW1pY1NvcnQoJ2NvdW50cnknKSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgb3V0ZXJEaXYuY2xhc3NMaXN0LmFkZChcImNoZWNrYm94LXdyYXBwZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveC1ib3hcIik7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gY291bnRyaWVzW2ldLmNvdW50cnk7XG4gICAgICAgICAgICAgICAgICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gY291bnRyaWVzW2ldLmNvdW50cnk7XG4gICAgICAgICAgICAgICAgICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeVNlbGVjdG9yLmFwcGVuZENoaWxkKG91dGVyRGl2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH0sXG4gICAgLy9maW5kcyBkaXNhYmxlZCBlbGVtZW50IGFuZCBzZXRzIGl0IGZhbHNlXG4gICAgZ2V0RGlzYWJsZWRFbGVtZW50KCkge1xuICAgICAgICBsZXQgY29tcGFyZWRBZ2FpbnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29tcGFyZWQtY291bnRyaWVzJyk7XG4gICAgICAgIGNvbXBhcmVkQWdhaW5zdCA9IGNvbXBhcmVkQWdhaW5zdFswXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNvbXBhcmVkQWdhaW5zdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoY29tcGFyZWRBZ2FpbnN0W2ldLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgY29tcGFyZWRBZ2FpbnN0W2ldLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vc2V0cyBuZXcgZGlzYWJsZWQgZWxlbWVudCB0byB0cnVlXG4gICAgc2V0TmV3RGlzYWJsZWRFbGVtZW50KGRpc2FibGVkVmFsdWUpIHtcbiAgICAgICAgbGV0IGNvbXBhcmVkQWdhaW5zdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbXBhcmVkLWNvdW50cmllcycpO1xuICAgICAgICBjb21wYXJlZEFnYWluc3QgPSBjb21wYXJlZEFnYWluc3RbMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcGFyZWRBZ2FpbnN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZWRBZ2FpbnN0W2ldLnZhbHVlID09PSBkaXNhYmxlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29tcGFyZWRBZ2FpbnN0W2ldLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy9nZXRzIGFsbCBjb3VudHJpZXMgc3RhdGlzdGljc1xuICAgIGdldEFsbFN0YXRpc3RpY3MoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHBzOi8vY29yb25hdmlydXMtMTktYXBpLmhlcm9rdWFwcC5jb20vY291bnRyaWVzXCIpXG4gICAgICAgICAgLnRoZW4oIHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICB9LFxuICAgIC8vZ2V0cyBhbGwgc3RhdGVzIHN0YXRpc3RpY3NcbiAgICBnZXRBbGxVU1N0YXRpc3RpY3MoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHBzOi8vY292aWR0cmFja2luZy5jb20vYXBpL3YxL3N0YXRlcy9kYWlseS5qc29uXCIpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==