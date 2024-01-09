import * as properties from "../properties.js";
//import { setSearchUrl, performSearch } from "../components/table/table.js";
import { put, search } from "./elasticClient.js";

addTabListener();
addSearchListener();
document.addEventListener('DOMContentLoaded', () => document.getElementById('tab1').click());

function addSearchListener() {
    document.getElementById('search').addEventListener('input', () => performSearch());
}

function addTabListener() {
    document.getElementById('tab1').addEventListener('click', () => {
        save();
        search("", updateBody);
    });
}

function save() {
    var patient = {};

    patient.givenName = "Hans";
    patient.familyName = "Müller";
    put("1", patient);

    patient.givenName = "Erich";
    patient.familyName = "Meyer";
    put("2", patient);
}

function updateBody(data) {
    document.getElementById('tableBody').innerHTML =
        data.map(arElement => '<tr>' + insertTable(arElement._source) + '</tr>').join('');
}


function insertTable(patient) {
    return `<td>${patient.givenName}</td> <td>${patient.familyName}</td>`;
}

function performSearch() {
    const searchValue = document.getElementById('search').value;
    search(searchValue, updateBody);
}
