import { setSearchUrl } from "../components/table/table.js";
import * as properties from "../properties.js";

document.getElementById('tab1').addEventListener('click', function() {
  setSearchUrl(properties.catalogServiceUrl + '/patients/findByGivenName?givenName=',['givenName', 'familyName', 'address[0].street', 'address[0].city']);
});
