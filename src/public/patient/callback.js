import { setSearchUrl } from "../components/table/table.js";

document.getElementById('tab1').addEventListener('click', function() {
  setSearchUrl(catalogServiceUrl + '/patients/findByGivenName?givenName=',['givenName', 'familyName', 'address[0].street', 'address[0].city']);
});
