const Util = {
    dynamicSort(property) {
        var sortOrder = 1;

        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }

        return function (a,b) {
            if(sortOrder == -1){
                return b[property].localeCompare(a[property]);
            }else{
                return a[property].localeCompare(b[property]);
            }        
        }
    },
    //sets up all countrys for select html
    fetchCountries() {
        let countries;
        fetch("https://coronavirus-19-api.herokuapp.com/countries")
            .then(response => response.json())
            .then(result => countries = result)
            .then(() => {
                const countrySelector = document.querySelector('div.checkboxes');
                
                // put world first
                countries.sort(Util.dynamicSort('country'));

                for (let i = 0; i < countries.length; i++) {
                    let outerDiv = document.createElement('div');
                    outerDiv.classList.add("checkbox-wrapper");
                    let input = document.createElement('input');
                    input.type = "checkbox";
                    input.classList.add("checkbox-box");
                    input.value = countries[i].country;
                    if (countries[i].country === "World") {
                        input.checked = true;
                    }
                    outerDiv.appendChild(input);
                    let label = document.createElement('label');
                    label.innerHTML = countries[i].country;
                    outerDiv.appendChild(label);
                    countrySelector.appendChild(outerDiv);
                }
            })
    },
    //finds disabled element and sets it false
    getDisabledElement() {
        let comparedAgainst = document.getElementsByClassName('compared-countries');
        comparedAgainst = comparedAgainst[0];
        for(let i = 0; i < comparedAgainst.length; i++) {
            if(comparedAgainst[i].disabled) {
                comparedAgainst[i].disabled = false;
                break;
            }
        }
    },
    //sets new disabled element to true
    setNewDisabledElement(disabledValue) {
        let comparedAgainst = document.getElementsByClassName('compared-countries');
        comparedAgainst = comparedAgainst[0];
        for (let i = 0; i < comparedAgainst.length; i++) {
            if (comparedAgainst[i].value === disabledValue) {
                comparedAgainst[i].disabled = true;
            }
        }
    },
    //gets all countries statistics
    getAllStatistics() {
        return fetch("https://coronavirus-19-api.herokuapp.com/countries")
          .then( response => response.json())
    },
    //gets all states statistics
    getAllUSStatistics() {
        return fetch("https://covidtracking.com/api/v1/states/daily.json")
            .then(response => response.json())
    }
}

export default Util;
