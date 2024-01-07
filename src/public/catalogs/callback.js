import * as properties from "../properties.js";
import { setSearchUrl, performSearch } from "../components/table/table.js";

//search
addTabListener();
addSearchListener();

function addSearchListener() {
    document.getElement('search').addEventListener('input', () => performSearch());
}

function addTabListener() {
    document.getElementById('tab1').addEventListener('click', () =>
        setSearchUrl(properties.catalogServiceUrl + '/chargeitems/findByDisplay?display=', ['code', 'display', 'price'], insertChargeItem));

    document.getElementById('tab2').addEventListener('click', () =>
        setSearchUrl(properties.catalogServiceUrl + '/diagnosis/findByDisplay?display=', ['code', 'display', 'shortname'], insertDiagnosis));

    document.getElementById('tab3').addEventListener('click', () =>
         setSearchUrl(properties.catalogServiceUrl + '/insurances/findByDisplay?display=', ['code', 'display', 'shortname'], insertInsurance));
}

//callbacks
function insertChargeItem(chargeItem) {
    return `<td>${chargeItem.code}</td> <td>${chargeItem.display}</td> <td>${chargeItem.price}</td>`;
}

function insertDiagnosis(diagnosis) {
    return `<td>${diagnosis.code}</td> <td>${diagnosis.display}</td> <td>${diagnosis.shortname}</td>`;
}

function insertInsurance(insurance) {
    return `<td>${insurance.code}</td> <td>${insurance.display}</td> <td>${insurance.shortname}</td>`;
}
