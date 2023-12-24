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

function performSearch() {
    var searchInput = document.getElementById('search').value;
    var url = new URL(window.location.href).searchParams.get('url');
    loadCatalog('http://localhost:50600' + url + "?display=" + searchInput);
}

/* main */

document.addEventListener('DOMContentLoaded', function () {
    performSearch()
});

