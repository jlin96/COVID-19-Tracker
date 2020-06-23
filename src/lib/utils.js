const Util = {
    fetchCountries() {
        fetch('https://api.covid19api.com/countries')
            .then(response => response.json())
            .then(result => countries = result)
            .then(() => {
                const countrySelector = document.getElementsByClassName('countries-selector');
                const comparedAgainst = document.getElementsByClassName('compared-countries');

                let selected = document.createElement('option');
                selected.value = "All Countries"
                selected.innerHTML = "All Countries"
                selected.classList.add('country-selector-options')
                selected.selected = true;
                countrySelector[0].appendChild(selected);

                for (let i = 0; i < countries.length; i++) {
                    let selected = document.createElement('option');
                    selected.value = countries[i].Country;
                    selected.innerHTML = countries[i].Country;
                    selected.classList.add('country-selector-options')
                    countrySelector[0].appendChild(selected);
                }

                selected = document.createElement('option');
                selected.value = "All Countries"
                selected.innerHTML = "All Countries"
                selected.classList.add('compared-countries-options')
                selected.disabled = true;
                selected.selected = true;
                comparedAgainst[0].appendChild(selected);

                for (let i = 0; i < countries.length; i++) {
                    selected = document.createElement('option');
                    selected.value = countries[i].Country;
                    selected.innerHTML = countries[i].Country;
                    selected.classList.add('compared-countries-options')
                    comparedAgainst[0].appendChild(selected);
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


}

module.exports = Util;
