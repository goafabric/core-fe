import * as properties from "../properties.js";
import { setSearchUrl, performSearch } from "../components/table/table.js";

document.getElementById('search').addEventListener('input', () => performSearch());

document.getElementById('tab1').addEventListener('click', () =>
    setSearchUrl(properties.coreServiceUrl + '/practitioners/findByFamilyName?familyName=',['givenName', 'familyName', 'address[0].street', 'address[0].city']));

document.getElementById('tab2').addEventListener('click', () =>
    setSearchUrl(properties.coreServiceUrl + '/organizations/findByName?name=',['name', 'address[0].street', 'address[0].city']));

document.getElementById('tab3').addEventListener('click', () =>
    setSearchUrl(properties.coreServiceUrl + '/roles/findByName?name=',['name', 'roles[0].name']));

document.getElementById('tab4').addEventListener('click', () =>
    setSearchUrl(properties.coreServiceUrl + '/roles/findByName?name=',['name']));
