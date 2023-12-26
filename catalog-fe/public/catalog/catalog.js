let searchUrl = ""
let tableColumns = [];

function setSearchUrl(url, columns) {
    searchUrl = url
    tableColumns = columns
    performSearch()
}

function performSearch() {
    const url = 'http://localhost:50600/' + searchUrl + document.getElementById('search').value;
    fetch(url).then(response => response.json()).then(data => updateTableBody(data));
}

function updateTableBody(data) {
    var header = '';
    tableColumns.forEach(function(column) {
        header += '<th>' + column + '</th>';
    });
    document.getElementById('catalogHeader').innerHTML = header;

    var html = '';
    data.forEach(function(catalog) {
        html += '<tr>';
        html += '<td>' + catalog.code + '</td>';
        html += '<td>' + catalog.display + '</td>';
        html += '<td>' + catalog.shortname + '</td>';
        html += '</tr>';
    });
    document.getElementById('catalogTableBody').innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('tab1').click();
});
