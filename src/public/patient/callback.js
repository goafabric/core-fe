import * as properties from "../properties.js";
import { setSearchUrl, performSearch } from "../components/table/table.js";

document.getElementById('search').addEventListener('input', () => performSearch());

document.getElementById('tab1').addEventListener('click', function() {
  setSearchUrl(properties.coreServiceUrl + '/patients/findByFamilyName?familyName=',['givenName', 'familyName', 'address[0].street', 'address[0].city']);
});
