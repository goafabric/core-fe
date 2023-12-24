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

document.addEventListener('DOMContentLoaded', function () {
    loadCatalog('http://localhost:50600/insurances/findByDisplay?display=a');
});

