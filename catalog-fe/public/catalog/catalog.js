let catalogType = ""

function performSearch() {
    var searchInput = document.getElementById('search').value;
    loadCatalog('http://localhost:50600/' + catalogType + "/findByDisplay?display=" + searchInput);
}

function loadCatalog(url) {
    fetch(url).then(response => response.json()).then(data => updateTableBody(data));
}

function updateTableBody(data) {
    var html = '';
    data.forEach(function(catalog) {
        html += '<tr>';
        html += '<td>' + catalog.code + '</td>';
        html += '<td>' + catalog.display + '</td>';
        html += '<td>' + catalog.shortname + '</td>';
        html += '</tr>';
    });

    var tbody = document.getElementById('catalogTableBody');
    tbody.innerHTML = html;
}

function setCatalogType(catalog) {
    catalogType = catalog
    performSearch()
}

document.addEventListener('DOMContentLoaded', function () {
    setCatalogType('chargeitems')
});

