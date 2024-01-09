export function put(documentId, jsonData) {
  return fetch(`http://localhost:9200/patient_names/_doc/${documentId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonData),
  }).then(response => response.json());
}

export function search(query, callback) {
  const jsonData = { query: { bool: { should: [
                            { wildcard: { familyName: { value: `${query}*` } } }
                            ,{ fuzzy: { familyName: { value: `${query}` } } }
                        ] } } };

  fetch('http://localhost:9200/patient_names/_search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonData),
  }).then(response => response.json()).then(data => {
        console.log(data);
        callback(data.hits.hits);
      }
  );
}

export function createMockData() {
    var patient = {};
    patient.givenName = "Hans";
    patient.familyName = "Müller";
    put("1", patient);

    patient.givenName = "Erich";
    patient.familyName = "Meyer";
    put("2", patient);
}

