import './styles/index.scss';
import utils from "./lib/utils"

const DIMENSIONS = {
    width: 1000,
    height: 500
}

document.addEventListener("DOMContentLoaded", () => {
    utils.fetchCountries();
    utils.fetchCountries2();

    //gets country and compare selector to setup change event listeners
    const selectedValue = document.querySelector('select.countries-selector');
    const comparedValue = document.querySelector('select.compared-countries');

    //gets checkout to check for changes
    const checkbox = document.querySelector("input.state-checkbox");

    selectedValue.addEventListener("change", e => {
        for (let i = 0; i < comparedValue.length; i++) {
            if (e.target.value === comparedValue[i].value) {
                utils.getDisabledElement();
                utils.setNewDisabledElement(comparedValue[i].value);

                let usa = document.querySelector("div.states-wrapper");
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
    })
  
    comparedValue.addEventListener("change", e => {
        clearGraph();
        drawBarGraph(countries);
    })

    checkbox.addEventListener('change', e => {
        if(checkbox.checked) {
            e.target.value = 'state';
        } else {
            e.target.value = 'nstate';
        }
    })

    let checkboxShown = false;
    
    const selectcheckbox = document.querySelector("div.select-box-wrapper");

    selectcheckbox.addEventListener('click', e => {
        const checkbox = document.querySelector("div.checkboxes");
        if (!checkboxShown) {
            checkbox.classList.remove("hidden");
            checkboxShown = true;
        } else {
            checkbox.classList.add("hidden");
            checkboxShown = false;
        }
    })
    
    const countries = utils.getAllStatistics();
    drawBarGraph(countries);
    const states = utils.getAllUSStatistics();
})

function clearGraph() {
    d3.select("svg").remove();
}


function drawBarGraph(data, country, compared) {
    let margin = { top: 30, right: 20, bottom: 30, left: 60 }

    data.then(result => {
        let countrySelect = document.querySelector("select.countries-selector");
        country = country || countrySelect.options[countrySelect.selectedIndex];
        let compareSelect = document.querySelector("select.compared-countries");
        compared = compared || compareSelect.options[compareSelect.selectedIndex];

        const xAxisData = [];
        const yAxisData = [];
        // console.log(result);
        let both = [];

        result.forEach(ele => {
            if(ele.country === country.value || ele.country === compared.value) {
                xAxisData.push(ele.country);
                yAxisData.push(ele.cases);
                both.push(ele);
            }
        })

        let subgroups = Object.keys(both[0]).slice(1);
        console.log(subgroups);

        let groups = d3.map(both, function(d){return(d.country)}).keys()
        console.log(groups);

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
            .call(d3.axisBottom(x).tickSize(0));

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
            .range(["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#fdbf6f", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"]);

            console.log(both)
        svg.append("g")
            .selectAll("g")
            // Enter in data = loop group per group
            .data(both)
            .enter()
            .append("g")
            .attr("transform", function(d) { return "translate(" + x(d.country) + ",0)"; })
            .selectAll("rect")
            .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
            .enter().append("rect")
            .attr("x", function(d) { return xSubgroup(d.key); })
            .attr("y", function(d) { return y(d.value); })
            .attr("width", xSubgroup.bandwidth())
            .attr("height", function(d) { return DIMENSIONS.height - y(d.value); })
            .attr("fill", function(d) { return color(d.key); });
    })
}