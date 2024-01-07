import * as properties from "../properties.js";
import { setSearchUrl, performSearch } from "../components/table/table.js";

document.getElementById('search').addEventListener('input', () => performSearch());

document.getElementById('tab1').addEventListener('click', () =>
    setSearchUrl(properties.coreServiceUrl + '/practitioners/findByFamilyName?familyName=',['givenName', 'familyName', 'address[0].street', 'address[0].city'], insertPractitioner));

document.getElementById('tab2').addEventListener('click', () =>
    setSearchUrl(properties.coreServiceUrl + '/organizations/findByName?name=',['name', 'street', 'city'], insertOrganization));

document.getElementById('tab3').addEventListener('click', () =>
    setSearchUrl(properties.coreServiceUrl + '/roles/findByName?name=',['name', 'roles[0].name'], insertUser));

document.getElementById('tab4').addEventListener('click', () =>
    setSearchUrl(properties.coreServiceUrl + '/roles/findByName?name=',['name'], insertRole));

function insertPractitioner(practitioner) {
    return `<td>${practitioner.givenName}</td> <td>${practitioner.familyName}</td> <td>${practitioner.address[0].street}</td> <td>${practitioner.address[0].city}</td>`;
}

function insertOrganization(organization) {
    return `<td>${organization.name}</td> <td>${organization.address[0].street}</td> <td>${organization.address[0].city}</td>`;
}

function insertUser(user) {
    return `<td>${user.name}</td> <td>${user.roles[0].name}</td>`;
}

function insertRole(role) {
    return `<td>${role.name}</td>`;
}