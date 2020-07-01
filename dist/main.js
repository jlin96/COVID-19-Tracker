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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2RjMmEiXSwibmFtZXMiOlsiRElNRU5TSU9OUyIsIndpZHRoIiwiaGVpZ2h0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY291bnRyeSIsImNvdW50cmllcyIsInV0aWxzIiwiZ2V0QWxsU3RhdGlzdGljcyIsInN0YXRlcyIsImdldEFsbFVTU3RhdGlzdGljcyIsImZpbHRlciIsImRyYXdCYXJHcmFwaCIsImRyYXdMaW5lR3JhcGgiLCJmZXRjaENvdW50cmllcyIsImNoZWNrYm94U2hvd24iLCJzZWxlY3RjaGVja2JveCIsInF1ZXJ5U2VsZWN0b3IiLCJlIiwiY2hlY2tib3hfd3JhcHBlciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImZvY3VzIiwiYWRkIiwiY2hlY2tib3giLCJpbmNsdWRlcyIsInRhcmdldCIsInZhbHVlIiwic3BsaWNlIiwiaW5kZXhPZiIsInVuZGVmaW5lZCIsInB1c2giLCJmaWx0ZXJfY2hlY2tib3giLCJyZWxhdGVkVGFyZ2V0IiwiY2xlYXJHcmFwaCIsImQzIiwic2VsZWN0IiwiZGF0YSIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInRoZW4iLCJyZXN1bHQiLCJ4QXhpc0RhdGEiLCJ5QXhpc0RhdGEiLCJib3RoIiwid29ybGRUb3RhbENhc2VzIiwiZm9yRWFjaCIsInRvdGFsVGVzdHMiLCJlbGUiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwic3ViZ3JvdXBzIiwiZ3JvdXBzIiwibWFwIiwiZCIsIm1heFZhbHVlIiwiTWF0aCIsIm1heCIsInN2ZyIsImFwcGVuZCIsImF0dHIiLCJ4Iiwic2NhbGVCYW5kIiwiZG9tYWluIiwicmFuZ2UiLCJwYWRkaW5nIiwiY2FsbCIsImF4aXNCb3R0b20iLCJzZWxlY3RBbGwiLCJzdHlsZSIsIm1heEhlaWdodCIsIm1ha2VfeV9ncmlkbGluZXMiLCJheGlzTGVmdCIsInkiLCJ0aWNrcyIsInNjYWxlTGluZWFyIiwidGlja1NpemUiLCJ0aWNrRm9ybWF0IiwieFN1Ymdyb3VwIiwiYmFuZHdpZHRoIiwiY29sb3IiLCJzY2FsZU9yZGluYWwiLCJiYXJzIiwiZW50ZXIiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsImkiLCJ0ZXh0Iiwic2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJwYXJzZVRpbWUiLCJ0aW1lUGFyc2UiLCJmaWx0ZXJEYXRhIiwiZGF0ZSIsInN1bXN0YXQiLCJuZXN0Iiwic3RhdGUiLCJlbnRyaWVzIiwicGFyc2VEYXRlIiwiZXh0ZW50IiwicG9zaXRpdmUiLCJyZXMiLCJsaW5lIiwidmFsdWVzIiwiVXRpbCIsImR5bmFtaWNTb3J0IiwicHJvcGVydHkiLCJzb3J0T3JkZXIiLCJzdWJzdHIiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImNvdW50cnlTZWxlY3RvciIsInNvcnQiLCJsZW5ndGgiLCJvdXRlckRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwiYXBwZW5kQ2hpbGQiLCJsYWJlbCIsImlubmVySFRNTCIsImdldERpc2FibGVkRWxlbWVudCIsImNvbXBhcmVkQWdhaW5zdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJkaXNhYmxlZCIsInNldE5ld0Rpc2FibGVkRWxlbWVudCIsImRpc2FibGVkVmFsdWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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QUkwQyxlQUFlLENBQUMxQyxDQUFELENBQWYsQ0FBbUJsRSxLQUFuQixLQUE2QmdILGFBQWpDLEVBQWdEO0FBQzVDSix1QkFBZSxDQUFDMUMsQ0FBRCxDQUFmLENBQW1CNEMsUUFBbkIsR0FBOEIsSUFBOUI7QUFDSDtBQUNKO0FBQ0osR0FwRVE7QUFxRVQ7QUFDQWpJLGtCQXRFUyw4QkFzRVU7QUFDZixXQUFPZ0gsS0FBSyxDQUFDLG9EQUFELENBQUwsQ0FDSjdFLElBREksQ0FDRSxVQUFBOEUsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsS0FEVixDQUFQO0FBRUgsR0F6RVE7QUEwRVQ7QUFDQWhILG9CQTNFUyxnQ0EyRVk7QUFDakIsV0FBTzhHLEtBQUssQ0FBQyxvREFBRCxDQUFMLENBQ0Y3RSxJQURFLENBQ0csVUFBQThFLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEtBRFgsQ0FBUDtBQUVIO0FBOUVRLENBQWI7QUFpRmVWLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDakZBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4vbGliL3V0aWxzXCJcblxuY29uc3QgRElNRU5TSU9OUyA9IHtcbiAgICB3aWR0aDogMTAwMCxcbiAgICBoZWlnaHQ6IDUwMFxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY291bnRyeSA9IFtcIldvcmxkXCJdO1xuICAgIGNvbnN0IGNvdW50cmllcyA9IHV0aWxzLmdldEFsbFN0YXRpc3RpY3MoKTtcbiAgICBjb25zdCBzdGF0ZXMgPSB1dGlscy5nZXRBbGxVU1N0YXRpc3RpY3MoKTtcbiAgICBjb25zdCBmaWx0ZXIgPSBbXCJjYXNlc1wiXTtcbiAgICBkcmF3QmFyR3JhcGgoY291bnRyaWVzLCBjb3VudHJ5LCBmaWx0ZXIpO1xuICAgIGRyYXdMaW5lR3JhcGgoc3RhdGVzKVxuICAgIHV0aWxzLmZldGNoQ291bnRyaWVzKCk7XG5cbiAgICBsZXQgY2hlY2tib3hTaG93biA9IGZhbHNlO1xuICAgIGNvbnN0IHNlbGVjdGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5zZWxlY3QtYm94LXdyYXBwZXJcIik7XG5cbiAgICBzZWxlY3RjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjb25zdCBjaGVja2JveF93cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5jaGVja2JveGVzXCIpO1xuICAgICAgICBpZiAoIWNoZWNrYm94U2hvd24pIHtcbiAgICAgICAgICAgIGNoZWNrYm94X3dyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgIGNoZWNrYm94X3dyYXBwZXIuZm9jdXMoKTtcbiAgICAgICAgICAgIGNoZWNrYm94U2hvd24gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tib3hfd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgY2hlY2tib3hTaG93biA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5jaGVja2JveGVzXCIpO1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGlmKGNvdW50cnkuaW5jbHVkZXMoZS50YXJnZXQudmFsdWUpKSB7XG4gICAgICAgICAgICBjb3VudHJ5LnNwbGljZShjb3VudHJ5LmluZGV4T2YoZS50YXJnZXQudmFsdWUpLCAxKTtcbiAgICAgICAgICAgIGRyYXdCYXJHcmFwaChjb3VudHJpZXMsIGNvdW50cnksIGZpbHRlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjb3VudHJ5LnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICBkcmF3QmFyR3JhcGgoY291bnRyaWVzLCBjb3VudHJ5LCBmaWx0ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGZpbHRlcl9jaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuc3ViZ3JvdXAtY2hlY2tib3hlc1wiKTtcblxuICAgIGZpbHRlcl9jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBpZihmaWx0ZXIuaW5jbHVkZXMoZS50YXJnZXQudmFsdWUpKSB7XG4gICAgICAgICAgICBmaWx0ZXIuc3BsaWNlKGZpbHRlci5pbmRleE9mKGUudGFyZ2V0LnZhbHVlKSwgMSk7XG4gICAgICAgICAgICBkcmF3QmFyR3JhcGgoY291bnRyaWVzLCBjb3VudHJ5LCBmaWx0ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgZmlsdGVyLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICBkcmF3QmFyR3JhcGgoY291bnRyaWVzLCBjb3VudHJ5LCBmaWx0ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNoZWNrYm94X3dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmNoZWNrYm94ZXNcIik7XG4gICAgY2hlY2tib3hfd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBlID0+IHtcbiAgICAgICAgaWYoZS5yZWxhdGVkVGFyZ2V0ID09PSBudWxsICkge1xuICAgICAgICAgICAgY2hlY2tib3hfd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgY2hlY2tib3hTaG93biA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIGNsZWFyR3JhcGgoKSB7XG4gICAgZDMuc2VsZWN0KFwic3ZnXCIpLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBkcmF3QmFyR3JhcGgoZGF0YSwgY291bnRyeSwgZmlsdGVyKSB7XG4gICAgbGV0IG1hcmdpbiA9IHsgdG9wOiAyMCwgcmlnaHQ6IDAsIGJvdHRvbTogMzAsIGxlZnQ6IDY1IH1cbiAgICBjbGVhckdyYXBoKCk7XG4gICAgZGF0YS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IHhBeGlzRGF0YSA9IFtdO1xuICAgICAgICBjb25zdCB5QXhpc0RhdGEgPSBbXTtcbiAgICAgICAgbGV0IGJvdGggPSBbXTtcblxuICAgICAgICBsZXQgd29ybGRUb3RhbENhc2VzID0gMDtcbiAgICAgICAgcmVzdWx0LmZvckVhY2goY291bnRyeSA9PiB7XG4gICAgICAgICAgICB3b3JsZFRvdGFsQ2FzZXMgKz0gY291bnRyeS50b3RhbFRlc3RzO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJlc3VsdFswXS50b3RhbFRlc3RzID0gd29ybGRUb3RhbENhc2VzO1xuICAgICAgICBcbiAgICAgICAgY291bnRyeS5mb3JFYWNoKCBlbGUgPT4ge1xuICAgICAgICAgICAgcmVzdWx0LmZvckVhY2goIGNvdW50cmllcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYoY291bnRyaWVzLmNvdW50cnkgPT09IGVsZSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjb3VudHJpZXMpLmZvckVhY2goIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihOdW1iZXIuaXNJbnRlZ2VyKGNvdW50cmllc1trZXldKSAmJiBmaWx0ZXIuaW5jbHVkZXMoa2V5KSkgeUF4aXNEYXRhLnB1c2goY291bnRyaWVzW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBib3RoLnB1c2goY291bnRyaWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBzdWJncm91cHMgPSBmaWx0ZXI7XG4gICAgICAgIGxldCBncm91cHMgPSBkMy5tYXAoYm90aCwgZnVuY3Rpb24oZCl7cmV0dXJuKGQuY291bnRyeSl9KS5rZXlzKClcbiAgICAgICAgY29uc3QgbWF4VmFsdWUgPSBNYXRoLm1heCguLi55QXhpc0RhdGEpO1xuXG4gICAgICAgIGxldCBzdmcgPSBkM1xuICAgICAgICAgIC5zZWxlY3QoXCIjc3ZnY29udGFpbmVyXCIpXG4gICAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgRElNRU5TSU9OUy53aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIERJTUVOU0lPTlMuaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAuYXR0ciggXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuICAgICAgICAvLyBYIHNjYWxlIGFuZCBBeGlzXG4gICAgICAgIGxldCB4ID0gZDMuc2NhbGVCYW5kKClcbiAgICAgICAgICAgIC5kb21haW4oZ3JvdXBzKVxuICAgICAgICAgICAgLnJhbmdlKFswLCBESU1FTlNJT05TLndpZHRoXSlcbiAgICAgICAgICAgIC5wYWRkaW5nKFswLjJdKVxuXG4gICAgICAgIHN2Z1xuICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIERJTUVOU0lPTlMuaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjEwcHhcIilcblxuXG4gICAgICAgIGNvbnN0IG1heEhlaWdodCA9IChtYXhWYWx1ZSAvIDkpICogMTA7XG5cbiAgICAgICAgZnVuY3Rpb24gbWFrZV95X2dyaWRsaW5lcygpIHtcbiAgICAgICAgICByZXR1cm4gZDMuYXhpc0xlZnQoeSkudGlja3MoMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy95IGF4aXNcbiAgICAgICAgbGV0IHkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFswLCBtYXhIZWlnaHRdKVxuICAgICAgICAgICAgLnJhbmdlKFsgRElNRU5TSU9OUy5oZWlnaHQsIDAgXSk7XG5cbiAgICAgICAgIHN2Z1xuICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZ3JpZFwiKVxuICAgICAgICAgICAuY2FsbChtYWtlX3lfZ3JpZGxpbmVzKCkudGlja1NpemUoLURJTUVOU0lPTlMud2lkdGgpLnRpY2tGb3JtYXQoXCJcIikpO1xuXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSk7XG5cbiAgICAgICAgbGV0IHhTdWJncm91cCA9IGQzXG4gICAgICAgICAgICAuc2NhbGVCYW5kKClcbiAgICAgICAgICAgIC5kb21haW4oc3ViZ3JvdXBzKVxuICAgICAgICAgICAgLnJhbmdlKFswLCB4LmJhbmR3aWR0aCgpXSlcbiAgICAgICAgICAgIC5wYWRkaW5nKFswLjA1XSk7XG5cbiAgICAgICAgbGV0IGNvbG9yID0gZDNcbiAgICAgICAgICAgIC5zY2FsZU9yZGluYWwoKVxuICAgICAgICAgICAgLmRvbWFpbihzdWJncm91cHMpXG4gICAgICAgICAgICAucmFuZ2UoW1wiIzA1QThBQVwiLCBcIiMzQjUyNDlcIiwgXCIjRDdCNDlFXCIsIFwiI0RDNjAyRVwiLCBcIiNCQzQxMkJcIiwgXCIjNEM2MDg1XCIsIFwiIzNFNDQyQlwiXSk7XG5cbiAgICAgICAgbGV0IGJhcnMgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcImdcIilcbiAgICAgICAgICAgIC5kYXRhKGJvdGgpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgeChkLmNvdW50cnkpICsgXCIsMClcIjsgfSlcblxuICAgICAgICBiYXJzLnNlbGVjdEFsbChcInJlY3RcIikgIFxuICAgICAgICAgICAgLmRhdGEoZnVuY3Rpb24oZCkgeyByZXR1cm4gc3ViZ3JvdXBzLm1hcChmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHtrZXk6IGtleSwgdmFsdWU6IGRba2V5XX07IH0pOyB9KVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geFN1Ymdyb3VwKGQua2V5KSArICh4U3ViZ3JvdXAuYmFuZHdpZHRoKCkgLzIpIDsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KDApOyB9KSAvL3N0YXJ0cyB5IGZyb20gMFxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4gICAgICAgICAgICAuZGVsYXkoZnVuY3Rpb24gKGQsIGkpIHsgcmV0dXJuIGkgKiAzMDA7IH0pXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geFN1Ymdyb3VwKGQua2V5KTsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQudmFsdWUpOyB9KSAvL2dyb3dzIHkgdG8gYWN0dWFsIHZhbHVlXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHhTdWJncm91cC5iYW5kd2lkdGgoKSlcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIERJTUVOU0lPTlMuaGVpZ2h0IC0geShkLnZhbHVlKTsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBjb2xvcihkLmtleSk7IH0pO1xuIFxuICAgICAgICBcbiAgICAgICAgYmFycy5zZWxlY3RBbGwoXCJ0ZXh0YmFyc1wiKVxuICAgICAgICAgICAgLmRhdGEoZnVuY3Rpb24oZCkgeyByZXR1cm4gc3ViZ3JvdXBzLm1hcChmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHtrZXk6IGtleSwgdmFsdWU6IGRba2V5XX07IH0pOyB9KVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJmb250LXNpemVcIiwgXCI4cHhcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KDApOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHhTdWJncm91cChkLmtleSkgKyAoeFN1Ymdyb3VwLmJhbmR3aWR0aCgpIC8yKSA7IH0pXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjAwMClcbiAgICAgICAgICAgIC5kZWxheShmdW5jdGlvbiAoZCwgaSkgeyByZXR1cm4gaSAqIDMwMDsgfSlcbiAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudmFsdWUgfSlcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQudmFsdWUpIC0gNTsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB4U3ViZ3JvdXAoZC5rZXkpICsgKHhTdWJncm91cC5iYW5kd2lkdGgoKSAvMikgOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgICAgXG5cbiAgICAgICAgbGV0IHNpemUgPSA2O1xuICAgICAgICAvL0NyZWF0aW5nIGxlbmdlbmRcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcIm15ZG90c1wiKVxuICAgICAgICAgICAgLmRhdGEoc3ViZ3JvdXBzKVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbigxNTAwKVxuICAgICAgICAgICAgICAgIC5kZWxheShmdW5jdGlvbihkLGkpeyByZXR1cm4gMTEwMCArIDEwMCAqIGk7IH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDkxMClcbiAgICAgICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCxpKXsgcmV0dXJuIDI0ICsgaSooc2l6ZSsxMCl9KSAvLyAxMDAgaXMgd2hlcmUgdGhlIGZpcnN0IGRvdCBhcHBlYXJzLiAyNSBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiBkb3RzXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBzaXplKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHNpemUpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBmdW5jdGlvbihkKXsgcmV0dXJuIGNvbG9yKGQpfSlcblxuICAgICAgICAvL0FkZGluZyB0ZXh0XG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJteWxhYmVsc1wiKVxuICAgICAgICAgICAgLmRhdGEoc3ViZ3JvdXBzKVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbigxNTAwKVxuICAgICAgICAgICAgICAgIC5kZWxheShmdW5jdGlvbihkLGkpeyByZXR1cm4gMTEwMCArIDEwMCAqIGk7IH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDkxMCArIHNpemUqMS4yKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkLGkpeyByZXR1cm4gMjUgKyBpKihzaXplKzEwKSArIChzaXplLzIpfSlcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpeyByZXR1cm4gY29sb3IoZCl9KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjEycHhcIilcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbihkKXsgXG4gICAgICAgICAgICAgICAgICAgIGlmKGQgPT09ICdjYXNlcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnVG90YWwgQ2FzZXMnXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZCA9PT0gJ3RvZGF5Q2FzZXMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0Nhc2VzIFRvZGF5J1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQgPT09ICdkZWF0aHMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1RvdGFsIERlYXRocydcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkID09PSAndG9kYXlEZWF0aHMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0RlYXRocyBUb2RheSdcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkID09PSAncmVjb3ZlcmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdUb3RhbCBSZWNvdmVyZWQnXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGQgPT09ICdjcml0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnVG90YWwgQ3JpdGljYWwnXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGQgPT09ICd0b3RhbFRlc3RzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdUb3RhbCBUZXN0cydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcImxlZnRcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJtaWRkbGVcIilcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkcmF3TGluZUdyYXBoKGRhdGEpIHtcbiAgICBsZXQgbWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogMCwgYm90dG9tOiAzMCwgbGVmdDogNjUgfTtcbiAgICBjbGVhckdyYXBoKCk7XG4gICAgZGF0YS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIGxldCBzdmcgPSBkM1xuICAgICAgICAgIC5zZWxlY3QoXCIjc3ZnbGluZWNvbnRhaW5lclwiKVxuICAgICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIERJTUVOU0lPTlMud2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBESU1FTlNJT05TLmhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgLmF0dHIoXG4gICAgICAgICAgICBcInRyYW5zZm9ybVwiLFxuICAgICAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiXG4gICAgICAgICk7XG5cbiAgICBsZXQgcGFyc2VUaW1lID0gZDMudGltZVBhcnNlKFwiJVklbSVkXCIpO1xuXG4gICAgY29uc3QgZmlsdGVyRGF0YSA9IFtdO1xuICAgIHJlc3VsdC5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgIGVsZS5kYXRlID0gcGFyc2VUaW1lKGVsZS5kYXRlKVxuICAgIH0pXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgIGxldCBzdW1zdGF0ID0gZDMubmVzdCgpIC8vIG5lc3QgZnVuY3Rpb24gYWxsb3dzIHRvIGdyb3VwIHRoZSBjYWxjdWxhdGlvbiBwZXIgbGV2ZWwgb2YgYSBmYWN0b3JcbiAgICAgICAgLmtleShmdW5jdGlvbihkKSB7IHJldHVybiBkLnN0YXRlO30pXG4gICAgICAgIC5lbnRyaWVzKHJlc3VsdCk7XG5cbiAgICBsZXQgcGFyc2VEYXRlID0gZDMudGltZVBhcnNlKFwiJVklbSVkXCIpO1xuXG4gICAgLy8gQWRkIFggYXhpcyAtLT4gaXQgaXMgYSBkYXRlIGZvcm1hdFxuICAgIGxldCB4ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAuZG9tYWluKGQzLmV4dGVudChyZXN1bHQsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHBhcnNlRGF0ZShkLmRhdGUpOyB9KSlcbiAgICAgICAgLnJhbmdlKFsgMCwgRElNRU5TSU9OUy53aWR0aCBdKTtcbiAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgRElNRU5TSU9OUy5oZWlnaHQgKyBcIilcIilcbiAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KS50aWNrcyg1KSk7XG4gICAgXG4gICAgLy8gQWRkIFkgYXhpc1xuICAgIGxldCB5ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAuZG9tYWluKFswLCBkMy5tYXgocmVzdWx0LCBmdW5jdGlvbihkKSB7IHJldHVybiArZC5wb3NpdGl2ZTsgfSldKVxuICAgICAgICAucmFuZ2UoWyBESU1FTlNJT05TLmhlaWdodCwgMCBdKTtcbiAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSk7XG4gICAgICAgICAgICBcbiAgICAvLyBjb2xvciBwYWxldHRlXG4gICAgbGV0IHJlcyA9IHN1bXN0YXQubWFwKGZ1bmN0aW9uKGQpeyByZXR1cm4gZC5rZXkgfSkgLy8gbGlzdCBvZiBncm91cCBuYW1lc1xuICAgIGxldCBjb2xvciA9IGQzLnNjYWxlT3JkaW5hbCgpXG4gICAgICAgIC5kb21haW4ocmVzKVxuICAgICAgICAucmFuZ2UoWycjZTQxYTFjJywnIzM3N2ViOCcsJyM0ZGFmNGEnLCcjOTg0ZWEzJywnI2ZmN2YwMCcsJyNmZmZmMzMnLCcjYTY1NjI4JywnI2Y3ODFiZicsJyM5OTk5OTknXSlcbiAgICAgICAgICAgIFxuICAgIC8vIERyYXcgdGhlIGxpbmVcbiAgICBzdmcuc2VsZWN0QWxsKFwiLmxpbmVcIilcbiAgICAgICAgLmRhdGEoc3Vtc3RhdClcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgICAgIC8vIC5hdHRyKFwic3Ryb2tlXCIsIGZ1bmN0aW9uKGQpeyByZXR1cm4gY29sb3IoZC5rZXkpIH0pXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNmZmZmZmZcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEuNSlcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgIHJldHVybiBkMy5saW5lKClcbiAgICAgICAgICAgICAgICAueChmdW5jdGlvbihkKSB7IFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geChkLnN0YXRlKTsgfSlcbiAgICAgICAgICAgICAgICAueShmdW5jdGlvbihkKSB7IFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geSgrZC5wb3NpdGl2ZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAoZC52YWx1ZXMpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxufSAgICAgICAiLCJjb25zdCBVdGlsID0ge1xuICAgIGR5bmFtaWNTb3J0KHByb3BlcnR5KSB7XG4gICAgICAgIHZhciBzb3J0T3JkZXIgPSAxO1xuXG4gICAgICAgIGlmKHByb3BlcnR5WzBdID09PSBcIi1cIikge1xuICAgICAgICAgICAgc29ydE9yZGVyID0gLTE7XG4gICAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5LnN1YnN0cigxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYSxiKSB7XG4gICAgICAgICAgICBpZihzb3J0T3JkZXIgPT0gLTEpe1xuICAgICAgICAgICAgICAgIHJldHVybiBiW3Byb3BlcnR5XS5sb2NhbGVDb21wYXJlKGFbcHJvcGVydHldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGJbcHJvcGVydHldID09PSAnV29ybGQnKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYVtwcm9wZXJ0eV0ubG9jYWxlQ29tcGFyZShiW3Byb3BlcnR5XSk7XG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy9zZXRzIHVwIGFsbCBjb3VudHJ5cyBmb3Igc2VsZWN0IGh0bWxcbiAgICBmZXRjaENvdW50cmllcygpIHtcbiAgICAgICAgbGV0IGNvdW50cmllcztcbiAgICAgICAgZmV0Y2goXCJodHRwczovL2Nvcm9uYXZpcnVzLTE5LWFwaS5oZXJva3VhcHAuY29tL2NvdW50cmllc1wiKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IGNvdW50cmllcyA9IHJlc3VsdClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY2hlY2tib3hlcycpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIHB1dCB3b3JsZCBmaXJzdFxuICAgICAgICAgICAgICAgIGNvdW50cmllcy5zb3J0KFV0aWwuZHluYW1pY1NvcnQoJ2NvdW50cnknKSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgb3V0ZXJEaXYuY2xhc3NMaXN0LmFkZChcImNoZWNrYm94LXdyYXBwZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveC1ib3hcIik7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gY291bnRyaWVzW2ldLmNvdW50cnk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudHJpZXNbaV0uY291bnRyeSA9PT0gXCJXb3JsZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvdXRlckRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGNvdW50cmllc1tpXS5jb3VudHJ5O1xuICAgICAgICAgICAgICAgICAgICBvdXRlckRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnlTZWxlY3Rvci5hcHBlbmRDaGlsZChvdXRlckRpdik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9LFxuICAgIC8vZmluZHMgZGlzYWJsZWQgZWxlbWVudCBhbmQgc2V0cyBpdCBmYWxzZVxuICAgIGdldERpc2FibGVkRWxlbWVudCgpIHtcbiAgICAgICAgbGV0IGNvbXBhcmVkQWdhaW5zdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbXBhcmVkLWNvdW50cmllcycpO1xuICAgICAgICBjb21wYXJlZEFnYWluc3QgPSBjb21wYXJlZEFnYWluc3RbMF07XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb21wYXJlZEFnYWluc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGNvbXBhcmVkQWdhaW5zdFtpXS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGNvbXBhcmVkQWdhaW5zdFtpXS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvL3NldHMgbmV3IGRpc2FibGVkIGVsZW1lbnQgdG8gdHJ1ZVxuICAgIHNldE5ld0Rpc2FibGVkRWxlbWVudChkaXNhYmxlZFZhbHVlKSB7XG4gICAgICAgIGxldCBjb21wYXJlZEFnYWluc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb21wYXJlZC1jb3VudHJpZXMnKTtcbiAgICAgICAgY29tcGFyZWRBZ2FpbnN0ID0gY29tcGFyZWRBZ2FpbnN0WzBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBhcmVkQWdhaW5zdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmVkQWdhaW5zdFtpXS52YWx1ZSA9PT0gZGlzYWJsZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbXBhcmVkQWdhaW5zdFtpXS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vZ2V0cyBhbGwgY291bnRyaWVzIHN0YXRpc3RpY3NcbiAgICBnZXRBbGxTdGF0aXN0aWNzKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwczovL2Nvcm9uYXZpcnVzLTE5LWFwaS5oZXJva3VhcHAuY29tL2NvdW50cmllc1wiKVxuICAgICAgICAgIC50aGVuKCByZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgfSxcbiAgICAvL2dldHMgYWxsIHN0YXRlcyBzdGF0aXN0aWNzXG4gICAgZ2V0QWxsVVNTdGF0aXN0aWNzKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwczovL2NvdmlkdHJhY2tpbmcuY29tL2FwaS92MS9zdGF0ZXMvZGFpbHkuanNvblwiKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXRpbDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=