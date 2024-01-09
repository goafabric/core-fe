import * as properties from "../properties.js";
import { setSearchUrl, performSearch } from "../components/table/table.js";

addTabListener();
addSearchListener();
document.addEventListener('DOMContentLoaded', () => document.getElementById('tab1').click());

function addSearchListener() {
    document.getElementById('search').addEventListener('input', () => performSearch());
}

function addTabListener() {
    document.getElementById('tab1').addEventListener('click', () => {
        save();
    });

}

function save() {
    console.log("yo");
    var patient = {};
    patient.givenName = "Hans";
    patient.familyName = "Müller";
    put("1", patient);
}


function put(documentId, jsonData) {
  return fetch(`http://localhost:9200/person_names/_doc/${documentId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonData),
  }).then(response => response.json());
}

