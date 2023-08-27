import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BurgerMenu.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [apiData, setApiData] = useState([]);
  const [apiEndpoint, setApiEndpoint] = useState(null);
  const [searchText, setSearchText] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetchApiData();
  }, [apiEndpoint]);

  const fetchApiData = async () => {
    if (!apiEndpoint) return;

    try {
      const response = await axios.get(apiEndpoint);
      setApiData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const menuItems = [
    { id: 1, display: 'Diagnosis', endpoint: 'http://localhost:50600/diagnosis/findByDisplay?display=' },
    { id: 2, display: 'Insurances', endpoint: 'http://localhost:50600/insurances/findByDisplay?display=' },
    { id: 2, display: 'Chargeitems', endpoint: 'http://localhost:50600/insurances/findByDisplay?chargeitems=' },
    // Add more menu items here with their corresponding endpoints
  ];

  const onItemClick = (item) => {
    setSelectedItem(item);
    setApiEndpoint(item.endpoint + searchText);
  };

  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);
    if (selectedItem) {
      setApiEndpoint(selectedItem.endpoint + searchText);
    }
  };

  return (
    <div className="burger-menu">
      <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} onClick={() => onItemClick(item)}>
              {item.display}
            </li>
          ))}
        </ul>
      </div>
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

export default BurgerMenu;
