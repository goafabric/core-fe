import * as properties from "../../properties.js";
import { addCellListener } from "./tableCellEditor.js";

let searchUrl = "";
let tableColumns = [];
let bodyCallbackFunction = null;

export function setSearchUrl(url, columns, callback) {
    searchUrl = url;
    tableColumns = columns;
    bodyCallbackFunction = callback;
    addCellListener();
    performSearch();
}

export function performSearch() {
    updateHeader();
    const none = properties.mockMode == true
                 ? updateTableBody(properties.mockData)
                 : fetch(searchUrl + document.getElementById('search').value).then(response => response.json()).then(data => updateBody(data));
}

function updateHeader() {
    document.getElementById('tableHeader').innerHTML =
        tableColumns.map(column => '<th>' + column.toUpperCase() + '</th>').join('');
}

function updateBody(data) {
    document.getElementById('tableBody').innerHTML =
        data.map(arElement => '<tr>' + bodyCallbackFunction(arElement) + '</tr>').join('');
}

document.addEventListener('DOMContentLoaded', () => document.getElementById('tab1').click());
