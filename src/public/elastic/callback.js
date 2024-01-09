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
        console.log(search("Müller"));
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

function search(query) {
  const jsonData = {
    query: {
      bool: {
        should: [
          {
            wildcard: {
              last_name: {
                value: `${query}*`,
              },
            },
          },
          {
            fuzzy: {
              last_name: {
                value: `${query}`,
              },
            },
          },
        ],
      },
    },
  };

  return fetch('http://localhost:9200/person_names/_search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonData),
  }).then(response => response.json());
}

