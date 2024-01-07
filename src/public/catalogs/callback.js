import { setSearchUrl } from "../components/table/table.js";

document.getElementById('tab1').addEventListener('click', setSearchUrl(catalogServiceUrl + '/chargeitems/findByDisplay?display=',['code', 'display', 'price']));
document.getElementById('tab2').addEventListener('click', setSearchUrl(catalogServiceUrl + '/diagnosis/findByDisplay?display=',['code', 'display', 'price']));
document.getElementById('tab3').addEventListener('click', setSearchUrl(catalogServiceUrl + '/insurances/findByDisplay?display=',['code', 'display', 'price']));