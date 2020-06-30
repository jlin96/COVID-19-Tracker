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
    var parseDate = d3.timeParse("%Y%m%d"); // result.forEach(ele => {
    //     ele.date = parseTime(ele.date)
    // })

    result.forEach(function (ele) {
      if (filterData.some(function (e) {
        return e.date === ele.date;
      })) {
        var index = filterData.map(function (e) {
          return e.date;
        }).indexOf(ele.date);
        filterData[index][ele.state] = ele.positive; // e[ele.state] = ele.positive 
      } else {
        var newObj = {};
        newObj["date"] = ele.date;
        newObj[ele.state] = ele.positive;
        filterData.push(newObj);
      }
    });
    console.log(filterData[0].date === filterData[1].date);
    var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
    .key(function (d) {
      return d.state;
    }).entries(result); // Add X axis --> it is a date format

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2RjMmEiXSwibmFtZXMiOlsiRElNRU5TSU9OUyIsIndpZHRoIiwiaGVpZ2h0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY291bnRyeSIsImNvdW50cmllcyIsInV0aWxzIiwiZ2V0QWxsU3RhdGlzdGljcyIsInN0YXRlcyIsImdldEFsbFVTU3RhdGlzdGljcyIsImZpbHRlciIsImRyYXdCYXJHcmFwaCIsImRyYXdMaW5lR3JhcGgiLCJmZXRjaENvdW50cmllcyIsImNoZWNrYm94U2hvd24iLCJzZWxlY3RjaGVja2JveCIsInF1ZXJ5U2VsZWN0b3IiLCJlIiwiY2hlY2tib3hfd3JhcHBlciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImZvY3VzIiwiYWRkIiwiY2hlY2tib3giLCJpbmNsdWRlcyIsInRhcmdldCIsInZhbHVlIiwic3BsaWNlIiwiaW5kZXhPZiIsInVuZGVmaW5lZCIsInB1c2giLCJmaWx0ZXJfY2hlY2tib3giLCJyZWxhdGVkVGFyZ2V0IiwiY2xlYXJHcmFwaCIsImQzIiwic2VsZWN0IiwiZGF0YSIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInRoZW4iLCJyZXN1bHQiLCJ4QXhpc0RhdGEiLCJ5QXhpc0RhdGEiLCJib3RoIiwid29ybGRUb3RhbENhc2VzIiwiZm9yRWFjaCIsInRvdGFsVGVzdHMiLCJlbGUiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwic3ViZ3JvdXBzIiwiZ3JvdXBzIiwibWFwIiwiZCIsIm1heFZhbHVlIiwiTWF0aCIsIm1heCIsInN2ZyIsImFwcGVuZCIsImF0dHIiLCJ4Iiwic2NhbGVCYW5kIiwiZG9tYWluIiwicmFuZ2UiLCJwYWRkaW5nIiwiY2FsbCIsImF4aXNCb3R0b20iLCJzZWxlY3RBbGwiLCJzdHlsZSIsIm1heEhlaWdodCIsIm1ha2VfeV9ncmlkbGluZXMiLCJheGlzTGVmdCIsInkiLCJ0aWNrcyIsInNjYWxlTGluZWFyIiwidGlja1NpemUiLCJ0aWNrRm9ybWF0IiwieFN1Ymdyb3VwIiwiYmFuZHdpZHRoIiwiY29sb3IiLCJzY2FsZU9yZGluYWwiLCJiYXJzIiwiZW50ZXIiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsImkiLCJ0ZXh0Iiwic2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJwYXJzZVRpbWUiLCJ0aW1lUGFyc2UiLCJmaWx0ZXJEYXRhIiwicGFyc2VEYXRlIiwic29tZSIsImRhdGUiLCJpbmRleCIsInN0YXRlIiwicG9zaXRpdmUiLCJuZXdPYmoiLCJzdW1zdGF0IiwibmVzdCIsImVudHJpZXMiLCJleHRlbnQiLCJyZXMiLCJsaW5lIiwidmFsdWVzIiwiVXRpbCIsImR5bmFtaWNTb3J0IiwicHJvcGVydHkiLCJzb3J0T3JkZXIiLCJzdWJzdHIiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImNvdW50cnlTZWxlY3RvciIsInNvcnQiLCJsZW5ndGgiLCJvdXRlckRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwiYXBwZW5kQ2hpbGQiLCJsYWJlbCIsImlubmVySFRNTCIsImdldERpc2FibGVkRWxlbWVudCIsImNvbXBhcmVkQWdhaW5zdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJkaXNhYmxlZCIsInNldE5ld0Rpc2FibGVkRWxlbWVudCIsImRpc2FibGVkVmFsdWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFD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bkgsb0JBM0VTLGdDQTJFWTtBQUNqQixXQUFPaUgsS0FBSyxDQUFDLG9EQUFELENBQUwsQ0FDRmhGLElBREUsQ0FDRyxVQUFBaUYsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsS0FEWCxDQUFQO0FBRUg7QUE5RVEsQ0FBYjtBQWlGZVYsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNqRkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCB1dGlscyBmcm9tIFwiLi9saWIvdXRpbHNcIlxuXG5jb25zdCBESU1FTlNJT05TID0ge1xuICAgIHdpZHRoOiAxMDAwLFxuICAgIGhlaWdodDogNTAwXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjb3VudHJ5ID0gW1wiV29ybGRcIl07XG4gICAgY29uc3QgY291bnRyaWVzID0gdXRpbHMuZ2V0QWxsU3RhdGlzdGljcygpO1xuICAgIGNvbnN0IHN0YXRlcyA9IHV0aWxzLmdldEFsbFVTU3RhdGlzdGljcygpO1xuICAgIGNvbnN0IGZpbHRlciA9IFtcImNhc2VzXCJdO1xuICAgIGRyYXdCYXJHcmFwaChjb3VudHJpZXMsIGNvdW50cnksIGZpbHRlcik7XG4gICAgZHJhd0xpbmVHcmFwaChzdGF0ZXMpXG4gICAgdXRpbHMuZmV0Y2hDb3VudHJpZXMoKTtcblxuICAgIGxldCBjaGVja2JveFNob3duID0gZmFsc2U7XG4gICAgY29uc3Qgc2VsZWN0Y2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnNlbGVjdC1ib3gtd3JhcHBlclwiKTtcblxuICAgIHNlbGVjdGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94X3dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmNoZWNrYm94ZXNcIik7XG4gICAgICAgIGlmICghY2hlY2tib3hTaG93bikge1xuICAgICAgICAgICAgY2hlY2tib3hfd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgY2hlY2tib3hfd3JhcHBlci5mb2N1cygpO1xuICAgICAgICAgICAgY2hlY2tib3hTaG93biA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja2JveF93cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBjaGVja2JveFNob3duID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmNoZWNrYm94ZXNcIik7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgaWYoY291bnRyeS5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvdW50cnkuc3BsaWNlKGNvdW50cnkuaW5kZXhPZihlLnRhcmdldC52YWx1ZSksIDEpO1xuICAgICAgICAgICAgZHJhd0JhckdyYXBoKGNvdW50cmllcywgY291bnRyeSwgZmlsdGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGNvdW50cnkucHVzaChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIGRyYXdCYXJHcmFwaChjb3VudHJpZXMsIGNvdW50cnksIGZpbHRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgZmlsdGVyX2NoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5zdWJncm91cC1jaGVja2JveGVzXCIpO1xuXG4gICAgZmlsdGVyX2NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGlmKGZpbHRlci5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZSkpIHtcbiAgICAgICAgICAgIGZpbHRlci5zcGxpY2UoZmlsdGVyLmluZGV4T2YoZS50YXJnZXQudmFsdWUpLCAxKTtcbiAgICAgICAgICAgIGRyYXdCYXJHcmFwaChjb3VudHJpZXMsIGNvdW50cnksIGZpbHRlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBmaWx0ZXIucHVzaChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIGRyYXdCYXJHcmFwaChjb3VudHJpZXMsIGNvdW50cnksIGZpbHRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY2hlY2tib3hfd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY2hlY2tib3hlc1wiKTtcbiAgICBjaGVja2JveF93cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGUgPT4ge1xuICAgICAgICBpZihlLnJlbGF0ZWRUYXJnZXQgPT09IG51bGwgKSB7XG4gICAgICAgICAgICBjaGVja2JveF93cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBjaGVja2JveFNob3duID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KVxufSlcblxuZnVuY3Rpb24gY2xlYXJHcmFwaCgpIHtcbiAgICBkMy5zZWxlY3QoXCJzdmdcIikucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGRyYXdCYXJHcmFwaChkYXRhLCBjb3VudHJ5LCBmaWx0ZXIpIHtcbiAgICBsZXQgbWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogMCwgYm90dG9tOiAzMCwgbGVmdDogNjUgfVxuICAgIGNsZWFyR3JhcGgoKTtcbiAgICBkYXRhLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc3QgeEF4aXNEYXRhID0gW107XG4gICAgICAgIGNvbnN0IHlBeGlzRGF0YSA9IFtdO1xuICAgICAgICBsZXQgYm90aCA9IFtdO1xuXG4gICAgICAgIGxldCB3b3JsZFRvdGFsQ2FzZXMgPSAwO1xuICAgICAgICByZXN1bHQuZm9yRWFjaChjb3VudHJ5ID0+IHtcbiAgICAgICAgICAgIHdvcmxkVG90YWxDYXNlcyArPSBjb3VudHJ5LnRvdGFsVGVzdHM7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmVzdWx0WzBdLnRvdGFsVGVzdHMgPSB3b3JsZFRvdGFsQ2FzZXM7XG4gICAgICAgIFxuICAgICAgICBjb3VudHJ5LmZvckVhY2goIGVsZSA9PiB7XG4gICAgICAgICAgICByZXN1bHQuZm9yRWFjaCggY291bnRyaWVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihjb3VudHJpZXMuY291bnRyeSA9PT0gZWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvdW50cmllcykuZm9yRWFjaCgga2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKE51bWJlci5pc0ludGVnZXIoY291bnRyaWVzW2tleV0pICYmIGZpbHRlci5pbmNsdWRlcyhrZXkpKSB5QXhpc0RhdGEucHVzaChjb3VudHJpZXNba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGJvdGgucHVzaChjb3VudHJpZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IHN1Ymdyb3VwcyA9IGZpbHRlcjtcbiAgICAgICAgbGV0IGdyb3VwcyA9IGQzLm1hcChib3RoLCBmdW5jdGlvbihkKXtyZXR1cm4oZC5jb3VudHJ5KX0pLmtleXMoKVxuICAgICAgICBjb25zdCBtYXhWYWx1ZSA9IE1hdGgubWF4KC4uLnlBeGlzRGF0YSk7XG5cbiAgICAgICAgbGV0IHN2ZyA9IGQzXG4gICAgICAgICAgLnNlbGVjdChcIiNzdmdjb250YWluZXJcIilcbiAgICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBESU1FTlNJT05TLndpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgRElNRU5TSU9OUy5oZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcbiAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgIC5hdHRyKCBcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gICAgICAgIC8vIFggc2NhbGUgYW5kIEF4aXNcbiAgICAgICAgbGV0IHggPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgICAgICAgLmRvbWFpbihncm91cHMpXG4gICAgICAgICAgICAucmFuZ2UoWzAsIERJTUVOU0lPTlMud2lkdGhdKVxuICAgICAgICAgICAgLnBhZGRpbmcoWzAuMl0pXG5cbiAgICAgICAgc3ZnXG4gICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgRElNRU5TSU9OUy5oZWlnaHQgKyBcIilcIilcbiAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAgICAgLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMTBweFwiKVxuXG5cbiAgICAgICAgY29uc3QgbWF4SGVpZ2h0ID0gKG1heFZhbHVlIC8gOSkgKiAxMDtcblxuICAgICAgICBmdW5jdGlvbiBtYWtlX3lfZ3JpZGxpbmVzKCkge1xuICAgICAgICAgIHJldHVybiBkMy5heGlzTGVmdCh5KS50aWNrcygxMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL3kgYXhpc1xuICAgICAgICBsZXQgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5kb21haW4oWzAsIG1heEhlaWdodF0pXG4gICAgICAgICAgICAucmFuZ2UoWyBESU1FTlNJT05TLmhlaWdodCwgMCBdKTtcblxuICAgICAgICAgc3ZnXG4gICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJncmlkXCIpXG4gICAgICAgICAgIC5jYWxsKG1ha2VfeV9ncmlkbGluZXMoKS50aWNrU2l6ZSgtRElNRU5TSU9OUy53aWR0aCkudGlja0Zvcm1hdChcIlwiKSk7XG5cbiAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKTtcblxuICAgICAgICBsZXQgeFN1Ymdyb3VwID0gZDNcbiAgICAgICAgICAgIC5zY2FsZUJhbmQoKVxuICAgICAgICAgICAgLmRvbWFpbihzdWJncm91cHMpXG4gICAgICAgICAgICAucmFuZ2UoWzAsIHguYmFuZHdpZHRoKCldKVxuICAgICAgICAgICAgLnBhZGRpbmcoWzAuMDVdKTtcblxuICAgICAgICBsZXQgY29sb3IgPSBkM1xuICAgICAgICAgICAgLnNjYWxlT3JkaW5hbCgpXG4gICAgICAgICAgICAuZG9tYWluKHN1Ymdyb3VwcylcbiAgICAgICAgICAgIC5yYW5nZShbXCIjMDVBOEFBXCIsIFwiIzNCNTI0OVwiLCBcIiNEN0I0OUVcIiwgXCIjREM2MDJFXCIsIFwiI0JDNDEyQlwiLCBcIiM0QzYwODVcIiwgXCIjM0U0NDJCXCJdKTtcblxuICAgICAgICBsZXQgYmFycyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuc2VsZWN0QWxsKFwiZ1wiKVxuICAgICAgICAgICAgLmRhdGEoYm90aClcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB4KGQuY291bnRyeSkgKyBcIiwwKVwiOyB9KVxuXG4gICAgICAgIGJhcnMuc2VsZWN0QWxsKFwicmVjdFwiKSAgXG4gICAgICAgICAgICAuZGF0YShmdW5jdGlvbihkKSB7IHJldHVybiBzdWJncm91cHMubWFwKGZ1bmN0aW9uKGtleSkgeyByZXR1cm4ge2tleToga2V5LCB2YWx1ZTogZFtrZXldfTsgfSk7IH0pXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB4U3ViZ3JvdXAoZC5rZXkpICsgKHhTdWJncm91cC5iYW5kd2lkdGgoKSAvMikgOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoMCk7IH0pIC8vc3RhcnRzIHkgZnJvbSAwXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjAwMClcbiAgICAgICAgICAgIC5kZWxheShmdW5jdGlvbiAoZCwgaSkgeyByZXR1cm4gaSAqIDMwMDsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB4U3ViZ3JvdXAoZC5rZXkpOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZC52YWx1ZSk7IH0pIC8vZ3Jvd3MgeSB0byBhY3R1YWwgdmFsdWVcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgeFN1Ymdyb3VwLmJhbmR3aWR0aCgpKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gRElNRU5TSU9OUy5oZWlnaHQgLSB5KGQudmFsdWUpOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGNvbG9yKGQua2V5KTsgfSk7XG4gXG4gICAgICAgIFxuICAgICAgICBiYXJzLnNlbGVjdEFsbChcInRleHRiYXJzXCIpXG4gICAgICAgICAgICAuZGF0YShmdW5jdGlvbihkKSB7IHJldHVybiBzdWJncm91cHMubWFwKGZ1bmN0aW9uKGtleSkgeyByZXR1cm4ge2tleToga2V5LCB2YWx1ZTogZFtrZXldfTsgfSk7IH0pXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjhweFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoMCk7IH0pXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geFN1Ymdyb3VwKGQua2V5KSArICh4U3ViZ3JvdXAuYmFuZHdpZHRoKCkgLzIpIDsgfSlcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAgICAgLmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7IHJldHVybiBpICogMzAwOyB9KVxuICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC52YWx1ZSB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZC52YWx1ZSkgLSA1OyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHhTdWJncm91cChkLmtleSkgKyAoeFN1Ymdyb3VwLmJhbmR3aWR0aCgpIC8yKSA7IH0pXG4gICAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgICBcblxuICAgICAgICBsZXQgc2l6ZSA9IDY7XG4gICAgICAgIC8vQ3JlYXRpbmcgbGVuZ2VuZFxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwibXlkb3RzXCIpXG4gICAgICAgICAgICAuZGF0YShzdWJncm91cHMpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDE1MDApXG4gICAgICAgICAgICAgICAgLmRlbGF5KGZ1bmN0aW9uKGQsaSl7IHJldHVybiAxMTAwICsgMTAwICogaTsgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgOTEwKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkLGkpeyByZXR1cm4gMjQgKyBpKihzaXplKzEwKX0pIC8vIDEwMCBpcyB3aGVyZSB0aGUgZmlyc3QgZG90IGFwcGVhcnMuIDI1IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGRvdHNcbiAgICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHNpemUpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgc2l6ZSlcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpeyByZXR1cm4gY29sb3IoZCl9KVxuXG4gICAgICAgIC8vQWRkaW5nIHRleHRcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcIm15bGFiZWxzXCIpXG4gICAgICAgICAgICAuZGF0YShzdWJncm91cHMpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDE1MDApXG4gICAgICAgICAgICAgICAgLmRlbGF5KGZ1bmN0aW9uKGQsaSl7IHJldHVybiAxMTAwICsgMTAwICogaTsgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgOTEwICsgc2l6ZSoxLjIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQsaSl7IHJldHVybiAyNSArIGkqKHNpemUrMTApICsgKHNpemUvMil9KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24oZCl7IHJldHVybiBjb2xvcihkKX0pXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMTJweFwiKVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpeyBcbiAgICAgICAgICAgICAgICAgICAgaWYoZCA9PT0gJ2Nhc2VzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdUb3RhbCBDYXNlcydcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkID09PSAndG9kYXlDYXNlcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnQ2FzZXMgVG9kYXknXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZCA9PT0gJ2RlYXRocycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnVG90YWwgRGVhdGhzJ1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQgPT09ICd0b2RheURlYXRocycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnRGVhdGhzIFRvZGF5J1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQgPT09ICdyZWNvdmVyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1RvdGFsIFJlY292ZXJlZCdcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggZCA9PT0gJ2NyaXRpY2FsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdUb3RhbCBDcml0aWNhbCdcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggZCA9PT0gJ3RvdGFsVGVzdHMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1RvdGFsIFRlc3RzJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibGVmdFwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImFsaWdubWVudC1iYXNlbGluZVwiLCBcIm1pZGRsZVwiKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRyYXdMaW5lR3JhcGgoZGF0YSkge1xuICAgIGxldCBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiAwLCBib3R0b206IDMwLCBsZWZ0OiA2NSB9O1xuICAgIGNsZWFyR3JhcGgoKTtcbiAgICBkYXRhLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgbGV0IHN2ZyA9IGQzXG4gICAgICAgICAgLnNlbGVjdChcIiNzdmdsaW5lY29udGFpbmVyXCIpXG4gICAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgRElNRU5TSU9OUy53aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIERJTUVOU0lPTlMuaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAuYXR0cihcbiAgICAgICAgICAgIFwidHJhbnNmb3JtXCIsXG4gICAgICAgICAgICBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCJcbiAgICAgICAgKTtcblxuICAgIGxldCBwYXJzZVRpbWUgPSBkMy50aW1lUGFyc2UoXCIlWSVtJWRcIik7XG5cbiAgICBjb25zdCBmaWx0ZXJEYXRhID0gW107XG4gICAgbGV0IHBhcnNlRGF0ZSA9IGQzLnRpbWVQYXJzZShcIiVZJW0lZFwiKTtcbiAgICAvLyByZXN1bHQuZm9yRWFjaChlbGUgPT4ge1xuICAgIC8vICAgICBlbGUuZGF0ZSA9IHBhcnNlVGltZShlbGUuZGF0ZSlcbiAgICAvLyB9KVxuICAgIFxuICAgIHJlc3VsdC5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgIGlmIChmaWx0ZXJEYXRhLnNvbWUoZSA9PiBlLmRhdGUgPT09IGVsZS5kYXRlKSkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBmaWx0ZXJEYXRhLm1hcChlID0+IGUuZGF0ZSkuaW5kZXhPZihlbGUuZGF0ZSk7XG4gICAgICAgICAgICBmaWx0ZXJEYXRhW2luZGV4XVtlbGUuc3RhdGVdID0gZWxlLnBvc2l0aXZlO1xuICAgICAgICAgICAgLy8gZVtlbGUuc3RhdGVdID0gZWxlLnBvc2l0aXZlIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG5ld09iaiA9IHt9O1xuICAgICAgICAgICAgbmV3T2JqW1wiZGF0ZVwiXSA9IGVsZS5kYXRlOyBcbiAgICAgICAgICAgIG5ld09ialtlbGUuc3RhdGVdID0gZWxlLnBvc2l0aXZlO1xuICAgICAgICAgICAgZmlsdGVyRGF0YS5wdXNoKG5ld09iaik7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKGZpbHRlckRhdGFbMF0uZGF0ZSA9PT0gZmlsdGVyRGF0YVsxXS5kYXRlKTtcblxuICAgIGxldCBzdW1zdGF0ID0gZDMubmVzdCgpIC8vIG5lc3QgZnVuY3Rpb24gYWxsb3dzIHRvIGdyb3VwIHRoZSBjYWxjdWxhdGlvbiBwZXIgbGV2ZWwgb2YgYSBmYWN0b3JcbiAgICAgICAgLmtleShmdW5jdGlvbihkKSB7IHJldHVybiBkLnN0YXRlO30pXG4gICAgICAgIC5lbnRyaWVzKHJlc3VsdCk7XG5cbiAgICAvLyBBZGQgWCBheGlzIC0tPiBpdCBpcyBhIGRhdGUgZm9ybWF0XG4gICAgbGV0IHggPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oZDMuZXh0ZW50KHJlc3VsdCwgZnVuY3Rpb24oZCkgeyByZXR1cm4gcGFyc2VEYXRlKGQuZGF0ZSk7IH0pKVxuICAgICAgICAucmFuZ2UoWyAwLCBESU1FTlNJT05TLndpZHRoIF0pO1xuICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBESU1FTlNJT05TLmhlaWdodCArIFwiKVwiKVxuICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpLnRpY2tzKDUpKTtcbiAgICBcbiAgICAvLyBBZGQgWSBheGlzXG4gICAgbGV0IHkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oWzAsIGQzLm1heChyZXN1bHQsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuICtkLnBvc2l0aXZlOyB9KV0pXG4gICAgICAgIC5yYW5nZShbIERJTUVOU0lPTlMuaGVpZ2h0LCAwIF0pO1xuICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKTtcbiAgICAgICAgICAgIFxuICAgIC8vIGNvbG9yIHBhbGV0dGVcbiAgICBsZXQgcmVzID0gc3Vtc3RhdC5tYXAoZnVuY3Rpb24oZCl7IHJldHVybiBkLmtleSB9KSAvLyBsaXN0IG9mIGdyb3VwIG5hbWVzXG4gICAgbGV0IGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKClcbiAgICAgICAgLmRvbWFpbihyZXMpXG4gICAgICAgIC5yYW5nZShbJyNlNDFhMWMnLCcjMzc3ZWI4JywnIzRkYWY0YScsJyM5ODRlYTMnLCcjZmY3ZjAwJywnI2ZmZmYzMycsJyNhNjU2MjgnLCcjZjc4MWJmJywnIzk5OTk5OSddKVxuICAgICAgICAgICAgXG4gICAgLy8gRHJhdyB0aGUgbGluZVxuICAgIHN2Zy5zZWxlY3RBbGwoXCIubGluZVwiKVxuICAgICAgICAuZGF0YShzdW1zdGF0KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAgICAgLy8gLmF0dHIoXCJzdHJva2VcIiwgZnVuY3Rpb24oZCl7IHJldHVybiBjb2xvcihkLmtleSkgfSlcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiI2ZmZmZmZlwiKVxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMS41KVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgcmV0dXJuIGQzLmxpbmUoKVxuICAgICAgICAgICAgICAgIC54KGZ1bmN0aW9uKGQpIHsgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4KGQuc3RhdGUpOyB9KVxuICAgICAgICAgICAgICAgIC55KGZ1bmN0aW9uKGQpIHsgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5KCtkLnBvc2l0aXZlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIChkLnZhbHVlcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG59ICAgICAgICIsImNvbnN0IFV0aWwgPSB7XG4gICAgZHluYW1pY1NvcnQocHJvcGVydHkpIHtcbiAgICAgICAgdmFyIHNvcnRPcmRlciA9IDE7XG5cbiAgICAgICAgaWYocHJvcGVydHlbMF0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICBzb3J0T3JkZXIgPSAtMTtcbiAgICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkuc3Vic3RyKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhLGIpIHtcbiAgICAgICAgICAgIGlmKHNvcnRPcmRlciA9PSAtMSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJbcHJvcGVydHldLmxvY2FsZUNvbXBhcmUoYVtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYltwcm9wZXJ0eV0gPT09ICdXb3JsZCcpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIHJldHVybiBhW3Byb3BlcnR5XS5sb2NhbGVDb21wYXJlKGJbcHJvcGVydHldKTtcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICB9XG4gICAgfSxcbiAgICAvL3NldHMgdXAgYWxsIGNvdW50cnlzIGZvciBzZWxlY3QgaHRtbFxuICAgIGZldGNoQ291bnRyaWVzKCkge1xuICAgICAgICBsZXQgY291bnRyaWVzO1xuICAgICAgICBmZXRjaChcImh0dHBzOi8vY29yb25hdmlydXMtMTktYXBpLmhlcm9rdWFwcC5jb20vY291bnRyaWVzXCIpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gY291bnRyaWVzID0gcmVzdWx0KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnlTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jaGVja2JveGVzJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gcHV0IHdvcmxkIGZpcnN0XG4gICAgICAgICAgICAgICAgY291bnRyaWVzLnNvcnQoVXRpbC5keW5hbWljU29ydCgnY291bnRyeScpKTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBvdXRlckRpdi5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3gtd3JhcHBlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImNoZWNrYm94LWJveFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBjb3VudHJpZXNbaV0uY291bnRyeTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50cmllc1tpXS5jb3VudHJ5ID09PSBcIldvcmxkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gY291bnRyaWVzW2ldLmNvdW50cnk7XG4gICAgICAgICAgICAgICAgICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeVNlbGVjdG9yLmFwcGVuZENoaWxkKG91dGVyRGl2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH0sXG4gICAgLy9maW5kcyBkaXNhYmxlZCBlbGVtZW50IGFuZCBzZXRzIGl0IGZhbHNlXG4gICAgZ2V0RGlzYWJsZWRFbGVtZW50KCkge1xuICAgICAgICBsZXQgY29tcGFyZWRBZ2FpbnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29tcGFyZWQtY291bnRyaWVzJyk7XG4gICAgICAgIGNvbXBhcmVkQWdhaW5zdCA9IGNvbXBhcmVkQWdhaW5zdFswXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNvbXBhcmVkQWdhaW5zdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoY29tcGFyZWRBZ2FpbnN0W2ldLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgY29tcGFyZWRBZ2FpbnN0W2ldLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vc2V0cyBuZXcgZGlzYWJsZWQgZWxlbWVudCB0byB0cnVlXG4gICAgc2V0TmV3RGlzYWJsZWRFbGVtZW50KGRpc2FibGVkVmFsdWUpIHtcbiAgICAgICAgbGV0IGNvbXBhcmVkQWdhaW5zdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbXBhcmVkLWNvdW50cmllcycpO1xuICAgICAgICBjb21wYXJlZEFnYWluc3QgPSBjb21wYXJlZEFnYWluc3RbMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcGFyZWRBZ2FpbnN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZWRBZ2FpbnN0W2ldLnZhbHVlID09PSBkaXNhYmxlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29tcGFyZWRBZ2FpbnN0W2ldLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy9nZXRzIGFsbCBjb3VudHJpZXMgc3RhdGlzdGljc1xuICAgIGdldEFsbFN0YXRpc3RpY3MoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHBzOi8vY29yb25hdmlydXMtMTktYXBpLmhlcm9rdWFwcC5jb20vY291bnRyaWVzXCIpXG4gICAgICAgICAgLnRoZW4oIHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICB9LFxuICAgIC8vZ2V0cyBhbGwgc3RhdGVzIHN0YXRpc3RpY3NcbiAgICBnZXRBbGxVU1N0YXRpc3RpY3MoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHBzOi8vY292aWR0cmFja2luZy5jb20vYXBpL3YxL3N0YXRlcy9kYWlseS5qc29uXCIpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==