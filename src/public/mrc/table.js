let searchUrl = ""
let tableColumns = [];

function setSearchUrl(url, columns) {
    searchUrl = url;
    tableColumns = columns;
    performSearch();
}

function performSearch() {
    const url = searchUrl + document.getElementById('search').value;
    fetch(url).then(response => response.json()).then(data => updateTableBody(data));
    if (mockMode == true) { updateTableBody(mockData); }
}

function updateTableBody(data) {
    updateHeader();

    data = data[0]['medicalRecords']
    var html = '';
    data.forEach(arElement => {
        html += '<tr>';
        html += buildTableCells(arElement, tableColumns);
        html += '</tr>';
    });

    document.getElementById('tableBody').innerHTML = html;
}

function updateHeader() {
    var header = tableColumns.map(column =>
        '<th>' + column.split('.').pop().toUpperCase() + '</th>').join('');
    document.getElementById('tableHeader').innerHTML = header;
}

function buildTableCells(obj, columns) {
    var html = '';
    columns.forEach(column => {
        var properties = column.split('.');
        var value = obj;

        properties.forEach(prop => {
            var arrayMatch = prop.match(/(\w+)\[(\d+)\]/);
            value = arrayMatch ? value[arrayMatch[1]][parseInt(arrayMatch[2], 10)] : value[prop];
        });

        html += '<td>' + (value !== null ? value : '') + '</td>';
    });
    return html;
}

document.addEventListener('DOMContentLoaded', () => document.getElementById('tab1').click());
