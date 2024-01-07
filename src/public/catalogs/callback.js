import * as properties from "../properties.js";
import { setSearchUrl, performSearch } from "../components/table/table.js";

document.getElementById('search').addEventListener('input', () => performSearch());

document.getElementById('tab1').addEventListener('click', () =>
    setSearchUrl(properties.catalogServiceUrl + '/chargeitems/findByDisplay?display=', ['code', 'display', 'price']));

document.getElementById('tab2').addEventListener('click', () =>
  setSearchUrl(properties.catalogServiceUrl + '/diagnosis/findByDisplay?display=', ['code', 'display', 'shortname']));

document.getElementById('tab3').addEventListener('click', () =>
  setSearchUrl(properties.catalogServiceUrl + '/insurances/findByDisplay?display=', ['code', 'display', 'shortname']));

