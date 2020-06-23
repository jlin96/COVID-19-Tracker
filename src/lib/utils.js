import axios from 'axios';
const Util = {
    fetchCountries() {
        let countries;
        fetch("https://coronavirus-19-api.herokuapp.com/countries")
            .then(response => response.json())
            .then(result => countries = result)
            .then(() => {
                const countrySelector = document.getElementsByClassName('countries-selector');
                const comparedAgainst = document.getElementsByClassName('compared-countries');

                

                for (let i = 0; i < countries.length; i++) {
                    let selected = document.createElement('option');
                    selected.value = countries[i].country;
                    selected.innerHTML = countries[i].country;
                    selected.classList.add('country-selector-options')
                    countrySelector[0].appendChild(selected);
                    if(i === 0) {
                        selected.selected = true;
                    }
                }

                for (let i = 0; i < countries.length; i++) {
                    let selected = document.createElement('option');
                    selected.value = countries[i].country;
                    selected.innerHTML = countries[i].country;
                    selected.classList.add('compared-countries-options')
                    comparedAgainst[0].appendChild(selected);
                    if(i === 0 ) {
                        selected.disabled = true;
                        selected.selected = true;
                    }
                }
            })
    },
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
    setNewDisabledElement(disabledValue) {
        let comparedAgainst = document.getElementsByClassName('compared-countries');
        comparedAgainst = comparedAgainst[0];
        for (let i = 0; i < comparedAgainst.length; i++) {
            if (comparedAgainst[i].value === disabledValue) {
                comparedAgainst[i].disabled = true;
            }
        }
    },
    getAllStatistics() {
        // axios.get("/allstatistics").then(console.log("success"));
        fetch("https://covidtracking.com/api/v1/us/current.json")
          .then((response) => response.json())
          .then((result) => console.log(result));
    }
}

export default Util;
