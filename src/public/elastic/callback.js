import * as properties from "../properties.js";
import { put, search, createMockData } from "./elasticClient.js";

addTabListener();
addSearchListener();
document.addEventListener('DOMContentLoaded', () => document.getElementById('tab1').click());

function addSearchListener() {
    document.getElementById('search').addEventListener('input', () => performSearch());
}

function addTabListener() {
    document.getElementById('tab1').addEventListener('click', () => {
        createMockData();
        search("", updateBody);
    });
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