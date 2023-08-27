import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BurgerMenu.css';
import CatalogDataTable from './CatalogDataTable'; // Import the new component

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

      {selectedItem && (
        <CatalogDataTable
          selectedItem={selectedItem}
          searchText={searchText}
          handleSearchChange={handleSearchChange}
          apiData={apiData}
        />
      )}
    </div>
  );
};

export default BurgerMenu;
