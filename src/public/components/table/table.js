import * as properties from "../../properties.js";

let searchUrl = "";
let tableColumns = [];
let bodyCallbackFunction = null;

export function setSearchUrl(url, columns, callback) {
    searchUrl = url;
    tableColumns = columns;
    bodyCallbackFunction = callback;
    performSearch();
}

export function performSearch() {
    updateHeader();
    if (properties.mockMode == true) {
        updateTableBody(properties.mockData);
    } else {
        const url = searchUrl + document.getElementById('search').value;
        fetch(url).then(response => response.json()).then(data => updateTableBody(data));
    }
}

function updateTableBody(data) {
    if (searchUrl.includes("/encounters")) { data = data[0].medicalRecords; }

    var html = '';
    data.forEach(arElement => {
        html += '<tr>';
        html += bodyCallbackFunction(arElement);
        html += '</tr>';
    });

    document.getElementById('tableBody').innerHTML = html;
}

function updateHeader() {
    var header = tableColumns.map(column =>
        '<th>' + column.split('.').pop().toUpperCase() + '</th>').join('');
    document.getElementById('tableHeader').innerHTML = header;
}

function enableEdit(cell) {
    var inputElement = document.createElement('input');
    inputElement.value = cell.innerText.trim();
    cell.innerHTML = '';
    cell.appendChild(inputElement);
    inputElement.focus();
    inputElement.addEventListener('blur', () => saveEdit(cell, inputElement.value));
    inputElement.addEventListener('keyup', event => event.key === 'Enter' && saveEdit(cell, inputElement.value));
}

function saveEdit(cell, newValue) {
    cell.innerHTML = newValue;
    var cellValues = Array.from(cell.parentNode.cells).map(cell => cell.innerText.trim());
    console.log('Cell values of the current row:', cellValues);
}

document.addEventListener('DOMContentLoaded', () => document.getElementById('tab1').click());
