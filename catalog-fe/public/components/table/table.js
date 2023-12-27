let searchUrl = ""
let tableColumns = [];

function setSearchUrl(url, columns) {
    searchUrl = url;
    tableColumns = columns;
    performSearch();
}

function performSearch() {
    const url = serviceUrl + searchUrl + document.getElementById('search').value;
    fetch(url).then(response => response.json()).then(data => updateTableBody(data));
}

function updateTableBody(data) {
    updateHeader();
    
    var html = '';
    data.forEach(function (table) {
        html += '<tr>';
        html += buildTableCells(table, tableColumns);
        html += '</tr>';
    });

    document.getElementById('tableBody').innerHTML = html;
}

function updateHeader() {
    var header = '';
    tableColumns.forEach(function (column) {
        header += '<th>' + column.toUpperCase() + '</th>';
    });
    document.getElementById('tableHeader').innerHTML = header;
}

function buildTableCells(obj, columns) {
    var html = '';
    columns.forEach(function (column) {
        var properties = column.split('.');
        var value = obj;

        properties.forEach(function (prop) {
            if (value) {
                // Check if the property includes array indexing
                var arrayMatch = prop.match(/(\w+)\[(\d+)\]/);
                if (arrayMatch) {
                    var arrayProp = arrayMatch[1];
                    var arrayIndex = parseInt(arrayMatch[2], 10);
                    value = value[arrayProp][arrayIndex];
                } else {
                    value = value[prop];
                }
            } else {
                value = null;
            }
        });

        html += '<td>' + (value !== null ? value : '') + '</td>';
    });
    return html;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('tab1').click();
});
