import { setSearchUrl } from "../components/table/table.js";
import * as properties from "../properties.js";

document.getElementById('tab1').addEventListener('click', () =>
    search(['type', 'display', 'code']));

function search(columns) {
    if (properties.mockMode == true) {
        setSearchUrl(properties.coreServiceUrl + '/encounters/findByPatientIdAndDisplay?patientId=', columns);
        return;
    }

    fetch(properties.coreServiceUrl + '/patients/findByFamilyName?familyName=Burns').then(response => response.json())
    .then(data => {
        var url = '/encounters/findByPatientIdAndDisplay?patientId=' + data[0].id + '&display=';
        setSearchUrl(properties.coreServiceUrl + url, columns);
    });
}