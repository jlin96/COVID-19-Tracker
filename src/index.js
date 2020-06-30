import './styles/index.scss';
import utils from "./lib/utils"

const DIMENSIONS = {
    width: 1000,
    height: 500
}

document.addEventListener("DOMContentLoaded", () => {
    const country = ["World"];
    const countries = utils.getAllStatistics();
    const states = utils.getAllUSStatistics();
    const filter = ["cases"];
    drawBarGraph(countries, country, filter);
    drawLineGraph(states)
    utils.fetchCountries();

    let checkboxShown = false;
    const selectcheckbox = document.querySelector("div.select-box-wrapper");

    selectcheckbox.addEventListener('click', e => {
        const checkbox_wrapper = document.querySelector("div.checkboxes");
        if (!checkboxShown) {
            checkbox_wrapper.classList.remove("hidden");
            checkbox_wrapper.focus();
            checkboxShown = true;
        } else {
            checkbox_wrapper.classList.add("hidden");
            checkboxShown = false;
        }
    })

    const checkbox = document.querySelector("div.checkboxes");
    checkbox.addEventListener('click', e => {
        if(country.includes(e.target.value)) {
            country.splice(country.indexOf(e.target.value), 1);
            drawBarGraph(countries, country, filter);
        } else {
            if (e.target.value !== undefined) {
              country.push(e.target.value);
              drawBarGraph(countries, country, filter);
            }
        }
    })

    const filter_checkbox = document.querySelector("div.subgroup-checkboxes");

    filter_checkbox.addEventListener('click', e => {
        if(filter.includes(e.target.value)) {
            filter.splice(filter.indexOf(e.target.value), 1);
            drawBarGraph(countries, country, filter);
        } else {
            if (e.target.value !== undefined) {
              filter.push(e.target.value);
              drawBarGraph(countries, country, filter);
            }
        }
    })

    const checkbox_wrapper = document.querySelector("div.checkboxes");
    checkbox_wrapper.addEventListener("blur", e => {
        if(e.relatedTarget === null ) {
            checkbox_wrapper.classList.add("hidden");
            checkboxShown = false;
        }
    })
})

function clearGraph() {
    d3.select("svg").remove();
}

function drawBarGraph(data, country, filter) {
    let margin = { top: 20, right: 0, bottom: 30, left: 65 }
    clearGraph();
    data.then(result => {
        const xAxisData = [];
        const yAxisData = [];
        let both = [];

        let worldTotalCases = 0;
        result.forEach(country => {
            worldTotalCases += country.totalTests;
        })

        result[0].totalTests = worldTotalCases;
        
        country.forEach( ele => {
            result.forEach( countries => {
                if(countries.country === ele) {
                    Object.keys(countries).forEach( key => {
                        if(Number.isInteger(countries[key]) && filter.includes(key)) yAxisData.push(countries[key]);
                    })
                    both.push(countries);
                }
            })
        })

        let subgroups = filter;
        let groups = d3.map(both, function(d){return(d.country)}).keys()
        const maxValue = Math.max(...yAxisData);

        let svg = d3
          .select("#svgcontainer")
          .append("svg")
          .attr("width", DIMENSIONS.width + margin.left + margin.right)
          .attr("height", DIMENSIONS.height + margin.top + margin.bottom)
          .append("g")
          .attr( "transform", "translate(" + margin.left + "," + margin.top + ")");

        // X scale and Axis
        let x = d3.scaleBand()
            .domain(groups)
            .range([0, DIMENSIONS.width])
            .padding([0.2])

        svg
          .append("g")
          .attr("transform", "translate(0," + DIMENSIONS.height + ")")
          .call(d3.axisBottom(x))
          .selectAll("text")
          .style("font-size", "10px")


        const maxHeight = (maxValue / 9) * 10;

        function make_y_gridlines() {
          return d3.axisLeft(y).ticks(10);
        }

        //y axis
        let y = d3.scaleLinear()
            .domain([0, maxHeight])
            .range([ DIMENSIONS.height, 0 ]);

         svg
           .append("g")
           .attr("class", "grid")
           .call(make_y_gridlines().tickSize(-DIMENSIONS.width).tickFormat(""));

        svg.append("g")
            .call(d3.axisLeft(y));

        let xSubgroup = d3
            .scaleBand()
            .domain(subgroups)
            .range([0, x.bandwidth()])
            .padding([0.05]);

        let color = d3
            .scaleOrdinal()
            .domain(subgroups)
            .range(["#05A8AA", "#3B5249", "#D7B49E", "#DC602E", "#BC412B", "#4C6085", "#3E442B"]);

        let bars = svg.append("g")
            .selectAll("g")
            .data(both)
            .enter()
            .append("g")
            .attr("transform", function(d) { return "translate(" + x(d.country) + ",0)"; })

        bars.selectAll("rect")  
            .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
            .enter()
            .append("rect")
            .attr("x", function(d) { return xSubgroup(d.key) + (xSubgroup.bandwidth() /2) ; })
            .attr("y", function(d) { return y(0); }) //starts y from 0
            .transition()
            .duration(2000)
            .delay(function (d, i) { return i * 300; })
            .attr("x", function(d) { return xSubgroup(d.key); })
            .attr("y", function(d) { return y(d.value); }) //grows y to actual value
            .attr("width", xSubgroup.bandwidth())
            .attr("height", function(d) { return DIMENSIONS.height - y(d.value); })
            .attr("fill", function(d) { return color(d.key); });
 
        
        bars.selectAll("textbars")
            .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
            .enter()
            .append("text")
            .style("font-size", "8px")
            .attr("y", function(d) { return y(0); })
            .attr("x", function(d) { return xSubgroup(d.key) + (xSubgroup.bandwidth() /2) ; })
            .transition()
            .duration(2000)
            .delay(function (d, i) { return i * 300; })
            .text(function(d) { return d.value })
            .attr("y", function(d) { return y(d.value) - 5; })
            .attr("x", function(d) { return xSubgroup(d.key) + (xSubgroup.bandwidth() /2) ; })
            .attr("text-anchor", "middle")
            

        let size = 6;
        //Creating lengend
        svg.selectAll("mydots")
            .data(subgroups)
            .enter()
            .append("rect")
                .transition()
                .duration(1500)
                .delay(function(d,i){ return 1100 + 100 * i; })
                .attr("x", 910)
                .attr("y", function(d,i){ return 24 + i*(size+10)}) // 100 is where the first dot appears. 25 is the distance between dots
                .attr("width", size)
                .attr("height", size)
                .style("fill", function(d){ return color(d)})

        //Adding text
        svg.selectAll("mylabels")
            .data(subgroups)
            .enter()
            .append("text")
                .transition()
                .duration(1500)
                .delay(function(d,i){ return 1100 + 100 * i; })
                .attr("x", 910 + size*1.2)
                .attr("y", function(d,i){ return 25 + i*(size+10) + (size/2)})
                .style("fill", function(d){ return color(d)})
                .style("font-size", "12px")
                .text(function(d){ 
                    if(d === 'cases') {
                        return 'Total Cases'
                    } else if (d === 'todayCases') {
                        return 'Cases Today'
                    } else if (d === 'deaths') {
                        return 'Total Deaths'
                    } else if (d === 'todayDeaths') {
                        return 'Deaths Today'
                    } else if (d === 'recovered') {
                        return 'Total Recovered'
                    } else if ( d === 'critical') {
                        return 'Total Critical'
                    } else if ( d === 'totalTests') {
                        return 'Total Tests'
                    }
                })
                .attr("text-anchor", "left")
                .style("alignment-baseline", "middle")
    })
}

function drawLineGraph(data) {
    let margin = { top: 20, right: 0, bottom: 30, left: 65 };
    clearGraph();
    data.then(result => {
        console.log(result);
        let svg = d3
          .select("#svglinecontainer")
          .append("svg")
          .attr("width", DIMENSIONS.width + margin.left + margin.right)
          .attr("height", DIMENSIONS.height + margin.top + margin.bottom)
          .append("g")
          .attr(
            "transform",
            "translate(" + margin.left + "," + margin.top + ")"
        );

    let parseTime = d3.timeParse("%Y%m%d");

    const filterData = [];
    let parseDate = d3.timeParse("%Y%m%d");
    // result.forEach(ele => {
    //     ele.date = parseTime(ele.date)
    // })
    
    result.forEach(ele => {
        if (filterData.some(e => e.date === ele.date)) {
            const index = filterData.map(e => e.date).indexOf(ele.date);
            filterData[index][ele.state] = ele.positive;
            // e[ele.state] = ele.positive 
        } else {
            let newObj = {};
            newObj["date"] = ele.date; 
            newObj[ele.state] = ele.positive;
            filterData.push(newObj);
        }
    })
    console.log(filterData[0].date === filterData[1].date);

    let sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
        .key(function(d) { return d.state;})
        .entries(result);

    // Add X axis --> it is a date format
    let x = d3.scaleLinear()
        .domain(d3.extent(result, function(d) { return parseDate(d.date); }))
        .range([ 0, DIMENSIONS.width ]);
    svg.append("g")
        .attr("transform", "translate(0," + DIMENSIONS.height + ")")
        .call(d3.axisBottom(x).ticks(5));
    
    // Add Y axis
    let y = d3.scaleLinear()
        .domain([0, d3.max(result, function(d) { return +d.positive; })])
        .range([ DIMENSIONS.height, 0 ]);
    svg.append("g")
        .call(d3.axisLeft(y));
            
    // color palette
    let res = sumstat.map(function(d){ return d.key }) // list of group names
    let color = d3.scaleOrdinal()
        .domain(res)
        .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'])
            
    // Draw the line
    svg.selectAll(".line")
        .data(sumstat)
        .enter()
        .append("path")
            .attr("fill", "none")
            // .attr("stroke", function(d){ return color(d.key) })
            .attr("stroke", "#ffffff")
            .attr("stroke-width", 1.5)
            .attr("d", function(d){
            return d3.line()
                .x(function(d) { 
                    return x(d.state); })
                .y(function(d) { 
                    return y(+d.positive);
                })
                (d.values)
            })
        })
}       