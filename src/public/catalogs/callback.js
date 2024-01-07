import { setSearchUrl } from "../components/table/table.js";

document.getElementById('tab1').addEventListener('click', function() {
  setSearchUrl(catalogServiceUrl + '/chargeitems/findByDisplay?display=', ['code', 'display', 'price']);
});

document.getElementById('tab2').addEventListener('click', function() {
  setSearchUrl(catalogServiceUrl + '/diagnosis/findByDisplay?display=', ['code', 'display', 'shortname']);
});

document.getElementById('tab3').addEventListener('click', function() {
  setSearchUrl(catalogServiceUrl + '/insurances/findByDisplay?display=', ['code', 'display', 'shortname']);
});