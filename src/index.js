import './styles/index.scss';
const utils = require('./lib/utils')

document.addEventListener("DOMContentLoaded", () => {
    utils.fetchCountries();
    let selectedValue = document.getElementsByClassName('countries-selector');
    let comparedValue = document.getElementsByClassName('compared-countries');
    selectedValue = selectedValue[0];
    comparedValue = comparedValue[0];
    
    selectedValue.addEventListener("change", e => {
        for (let i = 0; i < comparedValue.length; i++) {
            if(comparedValue[i].value === e.target.value) {
                utils.getDisabledElement();
                utils.setNewDisabledElement(comparedValue[i].value)
            }
        }
    })
  
    comparedValue.addEventListener("change", e => {
    })
})