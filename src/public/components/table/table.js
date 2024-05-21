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

export async function performSearch() {
    updateHeader();

    if (properties.mockMode === true) {
        updateBody(properties.mockData);
    } else {
        try {
            const response = await fetch(searchUrl + document.getElementById('search').value);
            if (response.status === 302) { // Reload the page if a 302 status code is encountered
                window.location.reload();
            } else {
                const data = await response.json();
                updateBody(data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

function updateHeader() {
    document.getElementById('tableHeader').innerHTML =
        tableColumns.map(column => '<th>' + column.toUpperCase() + '</th>').join('');
}

function updateBody(data) {
    document.getElementById('tableBody').innerHTML =
        data.map(arElement => '<tr>' + bodyCallbackFunction(arElement) + '</tr>').join('');
}