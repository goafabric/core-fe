let searchUrl = ""
let tableColumns = [];
const mockData = [{"id":"11abfe3a-3d6f-48f7-89e3-dcebff6964f7","version":"0","givenName":"Monty","familyName":"Burns","gender":"male","birthDate":"2020-01-08","address":[{"id":"fa0e345b-f27b-4890-af62-7b641d50ad52","version":"0","use":"home","street":"Springfield","city":"Springfield 0","postalCode":"555","state":"Florida","country":"US"}],"contactPoint":[{"id":"3ec87a16-a5da-497c-85dd-ab6f5822e1d1","version":null,"use":"home","system":"phone","value":"555-520"}]},{"id":"a47806f0-504b-45b8-9fef-ddc93191caf0","version":"0","givenName":"Ashley","familyName":"Baumbach","gender":"male","birthDate":"2020-01-08","address":[{"id":"fca51a13-f630-4520-b0f9-09af3fdee423","version":"0","use":"home","street":"North Haverbrook","city":"Springfield 0","postalCode":"555","state":"Florida","country":"US"}],"contactPoint":[{"id":"1f777589-13de-4f42-a2ba-af2c8a0a8352","version":null,"use":"home","system":"phone","value":"555-520"}]},{"id":"eacef1aa-0fb7-452d-90f2-8d43cdd5c45c","version":"0","givenName":"Frederic","familyName":"Barrows","gender":"male","birthDate":"2020-01-08","address":[{"id":"6a1f9933-06f1-4dd7-90c2-9db50859d806","version":"0","use":"home","street":"Krusty Burger","city":"Springfield 0","postalCode":"555","state":"Florida","country":"US"}],"contactPoint":[{"id":"a90eb9e8-020e-43ce-9f7b-441ed62d127b","version":null,"use":"home","system":"phone","value":"555-520"}]},{"id":"aad08e51-5b62-4129-9388-b38bf910fcb8","version":"0","givenName":"Tonita","familyName":"Bosco","gender":"male","birthDate":"2020-01-08","address":[{"id":"05e27eea-d47e-4d6f-852b-99a89bafb6b5","version":"0","use":"home","street":"North Haverbrook","city":"Springfield 0","postalCode":"555","state":"Florida","country":"US"}],"contactPoint":[{"id":"161e176e-4b89-413c-9cf6-c9c177ce2d38","version":null,"use":"home","system":"phone","value":"555-520"}]},{"id":"7f6dd186-10c7-4138-96a7-99557b330015","version":"0","givenName":"Georgianne","familyName":"Braun","gender":"male","birthDate":"2020-01-08","address":[{"id":"841b5fba-4e02-4ca1-8026-97ea1fdb3ef5","version":"0","use":"home","street":"Kwik-E-Mart","city":"Springfield 0","postalCode":"555","state":"Florida","country":"US"}],"contactPoint":[{"id":"9e36161e-6a88-44f5-8fd0-1950f4405c7b","version":null,"use":"home","system":"phone","value":"555-520"}]}];

function setSearchUrl(url, columns) {
    searchUrl = url;
    tableColumns = columns;
    performSearch();
}

function performSearch() {
    const url = serviceUrl + searchUrl + document.getElementById('search').value;
    fetch(url).then(response => response.json()).then(data => updateTableBody(data));
    //updateTableBody(mockData);
}

function updateTableBody(data) {
    updateHeader();
    
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

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('tab1').click();
});
