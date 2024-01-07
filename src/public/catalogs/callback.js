import { setSearchUrl } from "../components/table/table.js";
import * as properties from "../properties.js";

document.getElementById('tab1').addEventListener('click', () =>
    setSearchUrl(properties.catalogServiceUrl + '/chargeitems/findByDisplay?display=', ['code', 'display', 'price']));

document.getElementById('tab2').addEventListener('click', () =>
  setSearchUrl(properties.catalogServiceUrl + '/diagnosis/findByDisplay?display=', ['code', 'display', 'shortname']));

document.getElementById('tab3').addEventListener('click', () =>
  setSearchUrl(properties.catalogServiceUrl + '/insurances/findByDisplay?display=', ['code', 'display', 'shortname']));
