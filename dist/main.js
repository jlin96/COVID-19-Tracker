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
        Object.keys(ele).forEach(function (key) {
          if (Number.isInteger(ele[key]) && filter.includes(key)) yAxisData.push(ele[key]);
        });
        both.push(ele);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIkRJTUVOU0lPTlMiLCJ3aWR0aCIsImhlaWdodCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvdW50cnkiLCJjb3VudHJpZXMiLCJ1dGlscyIsImdldEFsbFN0YXRpc3RpY3MiLCJmaWx0ZXIiLCJkcmF3QmFyR3JhcGgiLCJmZXRjaENvdW50cmllcyIsImNoZWNrYm94U2hvd24iLCJzZWxlY3RjaGVja2JveCIsInF1ZXJ5U2VsZWN0b3IiLCJlIiwiY2hlY2tib3hfd3JhcHBlciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImZvY3VzIiwiYWRkIiwiY2hlY2tib3giLCJpbmNsdWRlcyIsInRhcmdldCIsInZhbHVlIiwic3BsaWNlIiwiaW5kZXhPZiIsInVuZGVmaW5lZCIsInB1c2giLCJmaWx0ZXJfY2hlY2tib3giLCJyZWxhdGVkVGFyZ2V0Iiwic3RhdGVzIiwiZ2V0QWxsVVNTdGF0aXN0aWNzIiwiY2xlYXJHcmFwaCIsImQzIiwic2VsZWN0IiwiZGF0YSIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInRoZW4iLCJyZXN1bHQiLCJ4QXhpc0RhdGEiLCJ5QXhpc0RhdGEiLCJib3RoIiwiZm9yRWFjaCIsImVsZSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJzdWJncm91cHMiLCJncm91cHMiLCJtYXAiLCJkIiwibWF4VmFsdWUiLCJNYXRoIiwibWF4Iiwic3ZnIiwiYXBwZW5kIiwiYXR0ciIsIngiLCJzY2FsZUJhbmQiLCJkb21haW4iLCJyYW5nZSIsInBhZGRpbmciLCJjYWxsIiwiYXhpc0JvdHRvbSIsInRpY2tTaXplIiwic2VsZWN0QWxsIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJ5Iiwic2NhbGVMaW5lYXIiLCJheGlzTGVmdCIsInhTdWJncm91cCIsImJhbmR3aWR0aCIsImNvbG9yIiwic2NhbGVPcmRpbmFsIiwiYmFycyIsImVudGVyIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJpIiwidGV4dCIsInNpemUiLCJVdGlsIiwiZHluYW1pY1NvcnQiLCJwcm9wZXJ0eSIsInNvcnRPcmRlciIsInN1YnN0ciIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiY291bnRyeVNlbGVjdG9yIiwic29ydCIsImxlbmd0aCIsIm91dGVyRGl2IiwiY3JlYXRlRWxlbWVudCIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJhcHBlbmRDaGlsZCIsImxhYmVsIiwiaW5uZXJIVE1MIiwiZ2V0RGlzYWJsZWRFbGVtZW50IiwiY29tcGFyZWRBZ2FpbnN0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImRpc2FibGVkIiwic2V0TmV3RGlzYWJsZWRFbGVtZW50IiwiZGlzYWJsZWRWYWx1ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJB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Q0E7QUFDSDtBQUNKO0FBQ0osR0F6RFE7QUEwRFQ7QUFDQUMsdUJBM0RTLGlDQTJEYUMsYUEzRGIsRUEyRDRCO0FBQ2pDLFFBQUlKLGVBQWUsR0FBRzlHLFFBQVEsQ0FBQytHLHNCQUFULENBQWdDLG9CQUFoQyxDQUF0QjtBQUNBRCxtQkFBZSxHQUFHQSxlQUFlLENBQUMsQ0FBRCxDQUFqQzs7QUFDQSxTQUFLLElBQUkxQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMEIsZUFBZSxDQUFDVixNQUFwQyxFQUE0Q2hCLENBQUMsRUFBN0MsRUFBaUQ7QUFDN0MsVUFBSTBCLGVBQWUsQ0FBQzFCLENBQUQsQ0FBZixDQUFtQi9ELEtBQW5CLEtBQTZCNkYsYUFBakMsRUFBZ0Q7QUFDNUNKLHVCQUFlLENBQUMxQixDQUFELENBQWYsQ0FBbUI0QixRQUFuQixHQUE4QixJQUE5QjtBQUNIO0FBQ0o7QUFDSixHQW5FUTtBQW9FVDtBQUNBM0csa0JBckVTLDhCQXFFVTtBQUNmLFdBQU8wRixLQUFLLENBQUMsb0RBQUQsQ0FBTCxDQUNKeEQsSUFESSxDQUNFLFVBQUF5RCxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQURWLENBQVA7QUFFSCxHQXhFUTtBQXlFVDtBQUNBcEUsb0JBMUVTLGdDQTBFWTtBQUNqQixXQUFPa0UsS0FBSyxDQUFDLG9EQUFELENBQUwsQ0FDRnhELElBREUsQ0FDRyxVQUFBeUQsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsS0FEWCxDQUFQO0FBRUg7QUE3RVEsQ0FBYjtBQWdGZVYsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNoRkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCB1dGlscyBmcm9tIFwiLi9saWIvdXRpbHNcIlxuXG5jb25zdCBESU1FTlNJT05TID0ge1xuICAgIHdpZHRoOiAxMDAwLFxuICAgIGhlaWdodDogNTAwXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjb3VudHJ5ID0gW1wiV29ybGRcIl07XG4gICAgY29uc3QgY291bnRyaWVzID0gdXRpbHMuZ2V0QWxsU3RhdGlzdGljcygpO1xuICAgIGNvbnN0IGZpbHRlciA9IFtcImNhc2VzXCJdO1xuICAgIGRyYXdCYXJHcmFwaChjb3VudHJpZXMsIGNvdW50cnksIGZpbHRlcik7XG4gICAgdXRpbHMuZmV0Y2hDb3VudHJpZXMoKTtcblxuICAgIGxldCBjaGVja2JveFNob3duID0gZmFsc2U7XG4gICAgY29uc3Qgc2VsZWN0Y2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnNlbGVjdC1ib3gtd3JhcHBlclwiKTtcblxuICAgIHNlbGVjdGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94X3dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmNoZWNrYm94ZXNcIik7XG4gICAgICAgIGlmICghY2hlY2tib3hTaG93bikge1xuICAgICAgICAgICAgY2hlY2tib3hfd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgY2hlY2tib3hfd3JhcHBlci5mb2N1cygpO1xuICAgICAgICAgICAgY2hlY2tib3hTaG93biA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja2JveF93cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBjaGVja2JveFNob3duID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmNoZWNrYm94ZXNcIik7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgaWYoY291bnRyeS5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvdW50cnkuc3BsaWNlKGNvdW50cnkuaW5kZXhPZihlLnRhcmdldC52YWx1ZSksIDEpO1xuICAgICAgICAgICAgZHJhd0JhckdyYXBoKGNvdW50cmllcywgY291bnRyeSwgZmlsdGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGNvdW50cnkucHVzaChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIGRyYXdCYXJHcmFwaChjb3VudHJpZXMsIGNvdW50cnksIGZpbHRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgZmlsdGVyX2NoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5zdWJncm91cC1jaGVja2JveGVzXCIpO1xuXG4gICAgZmlsdGVyX2NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGlmKGZpbHRlci5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZSkpIHtcbiAgICAgICAgICAgIGZpbHRlci5zcGxpY2UoZmlsdGVyLmluZGV4T2YoZS50YXJnZXQudmFsdWUpLCAxKTtcbiAgICAgICAgICAgIGRyYXdCYXJHcmFwaChjb3VudHJpZXMsIGNvdW50cnksIGZpbHRlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBmaWx0ZXIucHVzaChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIGRyYXdCYXJHcmFwaChjb3VudHJpZXMsIGNvdW50cnksIGZpbHRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY2hlY2tib3hfd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY2hlY2tib3hlc1wiKTtcbiAgICBjaGVja2JveF93cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGUgPT4ge1xuICAgICAgICBpZihlLnJlbGF0ZWRUYXJnZXQgPT09IG51bGwgKSB7XG4gICAgICAgICAgICBjaGVja2JveF93cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBjaGVja2JveFNob3duID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IHN0YXRlcyA9IHV0aWxzLmdldEFsbFVTU3RhdGlzdGljcygpO1xufSlcblxuZnVuY3Rpb24gY2xlYXJHcmFwaCgpIHtcbiAgICBkMy5zZWxlY3QoXCJzdmdcIikucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGRyYXdCYXJHcmFwaChkYXRhLCBjb3VudHJ5LCBmaWx0ZXIpIHtcbiAgICBsZXQgbWFyZ2luID0geyB0b3A6IDMwLCByaWdodDogMjAsIGJvdHRvbTogODAsIGxlZnQ6IDYwIH1cbiAgICBjbGVhckdyYXBoKCk7XG4gICAgZGF0YS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IHhBeGlzRGF0YSA9IFtdO1xuICAgICAgICBjb25zdCB5QXhpc0RhdGEgPSBbXTtcbiAgICAgICAgbGV0IGJvdGggPSBbXTtcblxuICAgICAgICByZXN1bHQuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgICAgaWYgKGNvdW50cnkuaW5jbHVkZXMoZWxlLmNvdW50cnkpKSB7XG4gICAgICAgICAgICAgICAgeEF4aXNEYXRhLnB1c2goZWxlLmNvdW50cnkpO1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGVsZSkuZm9yRWFjaCgga2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoTnVtYmVyLmlzSW50ZWdlcihlbGVba2V5XSkgJiYgZmlsdGVyLmluY2x1ZGVzKGtleSkpIHlBeGlzRGF0YS5wdXNoKGVsZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGJvdGgucHVzaChlbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBzdWJncm91cHMgPSBmaWx0ZXI7XG4gICAgICAgIGxldCBncm91cHMgPSBkMy5tYXAoYm90aCwgZnVuY3Rpb24oZCl7cmV0dXJuKGQuY291bnRyeSl9KS5rZXlzKClcbiAgICAgICAgY29uc3QgbWF4VmFsdWUgPSBNYXRoLm1heCguLi55QXhpc0RhdGEpO1xuXG4gICAgICAgIGxldCBzdmcgPSBkM1xuICAgICAgICAgIC5zZWxlY3QoXCIjc3ZnY29udGFpbmVyXCIpXG4gICAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgRElNRU5TSU9OUy53aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIERJTUVOU0lPTlMuaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAuYXR0ciggXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuICAgICAgICAvLyBYIHNjYWxlIGFuZCBBeGlzXG4gICAgICAgIGxldCB4ID0gZDMuc2NhbGVCYW5kKClcbiAgICAgICAgICAgIC5kb21haW4oZ3JvdXBzKVxuICAgICAgICAgICAgLnJhbmdlKFswLCBESU1FTlNJT05TLndpZHRoXSlcbiAgICAgICAgICAgIC5wYWRkaW5nKFswLjJdKVxuXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgRElNRU5TSU9OUy5oZWlnaHQgKyBcIilcIilcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkudGlja1NpemUoNykpXG4gICAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVx0XG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJkeFwiLCBcIi0xZW1cIilcbiAgICAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCItLjE1ZW1cIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC00NSlcIik7XG5cbiAgICAgICAgLy95IGF4aXNcbiAgICAgICAgY29uc3QgbWF4SGVpZ2h0ID0gKG1heFZhbHVlIC8gOSkgKiAxMDtcbiAgICAgICAgbGV0IHkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFswLCBtYXhIZWlnaHRdKVxuICAgICAgICAgICAgLnJhbmdlKFsgRElNRU5TSU9OUy5oZWlnaHQsIDAgXSk7XG5cbiAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKTtcblxuICAgICAgICBsZXQgeFN1Ymdyb3VwID0gZDNcbiAgICAgICAgICAgIC5zY2FsZUJhbmQoKVxuICAgICAgICAgICAgLmRvbWFpbihzdWJncm91cHMpXG4gICAgICAgICAgICAucmFuZ2UoWzAsIHguYmFuZHdpZHRoKCldKVxuICAgICAgICAgICAgLnBhZGRpbmcoWzAuMDVdKTtcblxuICAgICAgICBsZXQgY29sb3IgPSBkM1xuICAgICAgICAgICAgLnNjYWxlT3JkaW5hbCgpXG4gICAgICAgICAgICAuZG9tYWluKHN1Ymdyb3VwcylcbiAgICAgICAgICAgIC5yYW5nZShbXCIjMDVBOEFBXCIsIFwiIzNCNTI0OVwiLCBcIiNEN0I0OUVcIiwgXCIjREM2MDJFXCIsIFwiI0JDNDEyQlwiLCBcIiM0QzYwODVcIiwgXCIjM0U0NDJCXCJdKTtcblxuICAgICAgICBsZXQgYmFycyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuc2VsZWN0QWxsKFwiZ1wiKVxuICAgICAgICAgICAgLmRhdGEoYm90aClcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB4KGQuY291bnRyeSkgKyBcIiwwKVwiOyB9KVxuXG4gICAgICAgIGJhcnMuc2VsZWN0QWxsKFwicmVjdFwiKSAgXG4gICAgICAgICAgICAuZGF0YShmdW5jdGlvbihkKSB7IHJldHVybiBzdWJncm91cHMubWFwKGZ1bmN0aW9uKGtleSkgeyByZXR1cm4ge2tleToga2V5LCB2YWx1ZTogZFtrZXldfTsgfSk7IH0pXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB4U3ViZ3JvdXAoZC5rZXkpICsgKHhTdWJncm91cC5iYW5kd2lkdGgoKSAvMikgOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoMCk7IH0pIC8vc3RhcnRzIHkgZnJvbSAwXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjAwMClcbiAgICAgICAgICAgIC5kZWxheShmdW5jdGlvbiAoZCwgaSkgeyByZXR1cm4gaSAqIDEwMDsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB4U3ViZ3JvdXAoZC5rZXkpOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZC52YWx1ZSk7IH0pIC8vZ3Jvd3MgeSB0byBhY3R1YWwgdmFsdWVcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgeFN1Ymdyb3VwLmJhbmR3aWR0aCgpKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gRElNRU5TSU9OUy5oZWlnaHQgLSB5KGQudmFsdWUpOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGNvbG9yKGQua2V5KTsgfSk7XG4gXG4gICAgICAgIFxuICAgICAgICBiYXJzLnNlbGVjdEFsbChcInRleHRiYXJzXCIpXG4gICAgICAgICAgICAuZGF0YShmdW5jdGlvbihkKSB7IHJldHVybiBzdWJncm91cHMubWFwKGZ1bmN0aW9uKGtleSkgeyByZXR1cm4ge2tleToga2V5LCB2YWx1ZTogZFtrZXldfTsgfSk7IH0pXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjhweFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoMCk7IH0pXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geFN1Ymdyb3VwKGQua2V5KSArICh4U3ViZ3JvdXAuYmFuZHdpZHRoKCkgLzIpIDsgfSlcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAgICAgLmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7IHJldHVybiBpICogMzAwOyB9KVxuICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC52YWx1ZSB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZC52YWx1ZSkgLSA1OyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHhTdWJncm91cChkLmtleSkgKyAoeFN1Ymdyb3VwLmJhbmR3aWR0aCgpIC8yKSA7IH0pXG4gICAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICBcblxuICAgICAgICBsZXQgc2l6ZSA9IDY7XG4gICAgICAgIC8vQ3JlYXRpbmcgbGVuZ2VuZFxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwibXlkb3RzXCIpXG4gICAgICAgICAgICAuZGF0YShzdWJncm91cHMpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDE1MDApXG4gICAgICAgICAgICAgICAgLmRlbGF5KGZ1bmN0aW9uKGQsaSl7IHJldHVybiAxMTAwICsgMTAwICogaTsgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgOTIwKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkLGkpeyByZXR1cm4gMjQgKyBpKihzaXplKzEwKX0pIC8vIDEwMCBpcyB3aGVyZSB0aGUgZmlyc3QgZG90IGFwcGVhcnMuIDI1IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGRvdHNcbiAgICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHNpemUpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgc2l6ZSlcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpeyByZXR1cm4gY29sb3IoZCl9KVxuXG4gICAgICAgIC8vQWRkaW5nIHRleHRcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcIm15bGFiZWxzXCIpXG4gICAgICAgICAgICAuZGF0YShzdWJncm91cHMpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDE1MDApXG4gICAgICAgICAgICAgICAgLmRlbGF5KGZ1bmN0aW9uKGQsaSl7IHJldHVybiAxMTAwICsgMTAwICogaTsgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgOTIwICsgc2l6ZSoxLjIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQsaSl7IHJldHVybiAyNSArIGkqKHNpemUrMTApICsgKHNpemUvMil9KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24oZCl7IHJldHVybiBjb2xvcihkKX0pXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMTJweFwiKVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpeyBcbiAgICAgICAgICAgICAgICAgICAgaWYoZCA9PT0gJ2Nhc2VzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdUb3RhbCBDYXNlcydcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkID09PSAndG9kYXlDYXNlcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnQ2FzZXMgVG9kYXknXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZCA9PT0gJ2RlYXRocycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnVG90YWwgRGVhdGhzJ1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQgPT09ICd0b2RheURlYXRocycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnRGVhdGhzIFRvZGF5J1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQgPT09ICdyZWNvdmVyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1RvdGFsIFJlY292ZXJlZCdcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggZCA9PT0gJ2NyaXRpY2FsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdUb3RhbCBDcml0aWNhbCdcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggZCA9PT0gJ3RvdGFsVGVzdHMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1RvdGFsIFRlc3RzJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibGVmdFwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImFsaWdubWVudC1iYXNlbGluZVwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgICAgIFxuXG5cbiAgICB9KVxufSIsImNvbnN0IFV0aWwgPSB7XG4gICAgZHluYW1pY1NvcnQocHJvcGVydHkpIHtcbiAgICAgICAgdmFyIHNvcnRPcmRlciA9IDE7XG5cbiAgICAgICAgaWYocHJvcGVydHlbMF0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICBzb3J0T3JkZXIgPSAtMTtcbiAgICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkuc3Vic3RyKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhLGIpIHtcbiAgICAgICAgICAgIGlmKHNvcnRPcmRlciA9PSAtMSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJbcHJvcGVydHldLmxvY2FsZUNvbXBhcmUoYVtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbcHJvcGVydHldLmxvY2FsZUNvbXBhcmUoYltwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vc2V0cyB1cCBhbGwgY291bnRyeXMgZm9yIHNlbGVjdCBodG1sXG4gICAgZmV0Y2hDb3VudHJpZXMoKSB7XG4gICAgICAgIGxldCBjb3VudHJpZXM7XG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9jb3JvbmF2aXJ1cy0xOS1hcGkuaGVyb2t1YXBwLmNvbS9jb3VudHJpZXNcIilcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiBjb3VudHJpZXMgPSByZXN1bHQpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY291bnRyeVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmNoZWNrYm94ZXMnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBwdXQgd29ybGQgZmlyc3RcbiAgICAgICAgICAgICAgICBjb3VudHJpZXMuc29ydChVdGlsLmR5bmFtaWNTb3J0KCdjb3VudHJ5JykpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG91dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIG91dGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveC13cmFwcGVyXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3gtYm94XCIpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGNvdW50cmllc1tpXS5jb3VudHJ5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRyaWVzW2ldLmNvdW50cnkgPT09IFwiV29ybGRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBjb3VudHJpZXNbaV0uY291bnRyeTtcbiAgICAgICAgICAgICAgICAgICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5U2VsZWN0b3IuYXBwZW5kQ2hpbGQob3V0ZXJEaXYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfSxcbiAgICAvL2ZpbmRzIGRpc2FibGVkIGVsZW1lbnQgYW5kIHNldHMgaXQgZmFsc2VcbiAgICBnZXREaXNhYmxlZEVsZW1lbnQoKSB7XG4gICAgICAgIGxldCBjb21wYXJlZEFnYWluc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb21wYXJlZC1jb3VudHJpZXMnKTtcbiAgICAgICAgY29tcGFyZWRBZ2FpbnN0ID0gY29tcGFyZWRBZ2FpbnN0WzBdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29tcGFyZWRBZ2FpbnN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihjb21wYXJlZEFnYWluc3RbaV0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBjb21wYXJlZEFnYWluc3RbaV0uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy9zZXRzIG5ldyBkaXNhYmxlZCBlbGVtZW50IHRvIHRydWVcbiAgICBzZXROZXdEaXNhYmxlZEVsZW1lbnQoZGlzYWJsZWRWYWx1ZSkge1xuICAgICAgICBsZXQgY29tcGFyZWRBZ2FpbnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29tcGFyZWQtY291bnRyaWVzJyk7XG4gICAgICAgIGNvbXBhcmVkQWdhaW5zdCA9IGNvbXBhcmVkQWdhaW5zdFswXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wYXJlZEFnYWluc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlZEFnYWluc3RbaV0udmFsdWUgPT09IGRpc2FibGVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb21wYXJlZEFnYWluc3RbaV0uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvL2dldHMgYWxsIGNvdW50cmllcyBzdGF0aXN0aWNzXG4gICAgZ2V0QWxsU3RhdGlzdGljcygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9jb3JvbmF2aXJ1cy0xOS1hcGkuaGVyb2t1YXBwLmNvbS9jb3VudHJpZXNcIilcbiAgICAgICAgICAudGhlbiggcmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIH0sXG4gICAgLy9nZXRzIGFsbCBzdGF0ZXMgc3RhdGlzdGljc1xuICAgIGdldEFsbFVTU3RhdGlzdGljcygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9jb3ZpZHRyYWNraW5nLmNvbS9hcGkvdjEvc3RhdGVzL2RhaWx5Lmpzb25cIilcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWw7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9