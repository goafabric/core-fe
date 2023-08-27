// DataTable.js
import React from 'react';

const CatalogDataTable = ({ selectedItem, searchText, handleSearchChange, apiData }) => {
  return (
    <div>
      <div className="search-field">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>
      {selectedItem && (
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Display</th>
                <th>Code</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.display}</td>
                  <td>{item.code}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CatalogDataTable;
