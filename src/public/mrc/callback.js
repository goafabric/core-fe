import * as properties from "../properties.js";
import { setSearchUrl, performSearch } from "../components/table/table.js";

addTabListener();
addSearchListener();
document.addEventListener('DOMContentLoaded', () => document.getElementById('tab1').click());

function addSearchListener() {
    document.getElementById('search').addEventListener('input', () => performSearch());
}

function addTabListener() {
    document.getElementById('tab1').addEventListener('click', () => mySearch(['type', 'display', 'code']));
}

function mySearch(columns) {
    if (properties.mockMode == true) {
        setSearchUrl(properties.coreServiceUrl + '/encounters/findByPatientIdAndDisplay?patientId=', columns, insertMedicalRecord);
        return;
    }

    fetch(properties.coreServiceUrl + '/patients/findByFamilyName?familyName=Burns').then(response => response.json())
    .then(data => {
        var url = '/encounters/findByPatientIdAndDisplay?patientId=' + data[0].id + '&display=';
        setSearchUrl(properties.coreServiceUrl + url, columns, insertMedicalRecord);
    });
}

function insertMedicalRecord(encounter) {
    const medicalRecords = encounter.medicalRecords;
    return medicalRecords.map(medicalRecord => `<tr> <td>${medicalRecord.type}</td> <td>${medicalRecord.display}</td> <td>${medicalRecord.code}</td> </tr>`).join('');
}