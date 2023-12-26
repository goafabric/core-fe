let catalogType = ""

function performSearch() {
    var searchInput = document.getElementById('search').value;
    loadCatalog('http://localhost:50600/' + catalogType + "/findByDisplay?display=" + searchInput);
}

function loadCatalog(url) {
    fetch(url).then(response => response.json()).then(data => updateTableBody(data));
}

function updateTableBody(data) {
    var header = '';
    header += '<th>Code</th>'
    header += '<th>Display</th>'
    header += '<th>Short</th>'
    document.getElementById('catalogHeader').innerHTML = header

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

function setCatalogType(catalog) {
    catalogType = catalog
    performSearch()
}

document.addEventListener('DOMContentLoaded', function () {
    setCatalogType('chargeitems')
});

