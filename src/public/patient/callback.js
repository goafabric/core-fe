import * as properties from "../properties.js";
import { setSearchUrl, performSearch } from "../components/table/table.js";

document.getElementById('search').addEventListener('input', () => performSearch());

document.getElementById('tab1').addEventListener('click', function() {
    setSearchUrl(properties.coreServiceUrl + '/patients/findByFamilyName?familyName=',['givenName', 'familyName', 'street', 'city'], insertPatient);
});

function insertPatient(patient) {
    return `<td>${patient.givenName}</td> <td>${patient.familyName}</td> <td>${patient.address[0].street}</td> <td>${patient.address[0].city}</td>`;
}