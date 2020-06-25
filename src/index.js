import './styles/index.scss';
import utils from "./lib/utils"

const DIMENSIONS = {
    width: 1000,
    height: 500
}

document.addEventListener("DOMContentLoaded", () => {
    const country = ["World"];
    const countries = utils.getAllStatistics();
    drawBarGraph(countries, country);
    utils.fetchCountries();

    let checkboxShown = false;
    const selectcheckbox = document.querySelector("div.select-box-wrapper");

    selectcheckbox.addEventListener('click', e => {
        const checkbox_wrapper = document.querySelector("div.checkboxes");
        if (!checkboxShown) {
            checkbox_wrapper.classList.remove("hidden");
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
    })

    const states = utils.getAllUSStatistics();
})

function clearGraph() {
    d3.select("svg").remove();
}

function drawBarGraph(data, country) {
    let margin = { top: 30, right: 20, bottom: 80, left: 60 }
    clearGraph();
    data.then(result => {
        const xAxisData = [];
        const yAxisData = [];
        let both = [];

        result.forEach(ele => {
            if (country.includes(ele.country)) {
                xAxisData.push(ele.country);
                yAxisData.push(ele.cases);
                both.push(ele);
            }
        })

        let subgroups = Object.keys(both[0]).slice(1);
        subgroups.splice(7,2);
        subgroups.splice(8,1);
        subgroups.splice(5,1);
        console.log(subgroups);

        let groups = d3.map(both, function(d){return(d.country)}).keys()
        // console.log(groups);

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

        svg.append("g")
            .attr("transform", "translate(0," + DIMENSIONS.height + ")")
            .call(d3.axisBottom(x).tickSize(7))
            .selectAll("text")	
            .style("text-anchor", "end")
            .attr("dx", "-1em")
            .attr("dy", "-.15em")
            .attr("transform", "rotate(-45)");

        //y axis
        const maxHeight = (d3.max(yAxisData) / 9) * 10;
        let y = d3.scaleLinear()
            .domain([0, maxHeight])
            .range([ DIMENSIONS.height, 0 ]);

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
                .attr("x", 920)
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
                .attr("x", 920 + size*1.2)
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