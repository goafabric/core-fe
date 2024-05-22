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
            if (response.status === 302) { // If the response is a 302 redirect to login, force the browser to follow it
                window.location.href = response.headers.get('Location');
            } else {
                const data = await response.json();
                updateBody(data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            //window.location.reload();
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