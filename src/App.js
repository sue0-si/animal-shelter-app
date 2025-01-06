import React, { useState } from 'react';
import ZipCodeInput from './components/ZipCodeInput';
import ShelterList from './components/ShelterList';
import './App.css';
import { fetchByZipCode } from './services/api';
import Filters from './components/Filters';

function App() {
  const [zipCode, setZipCode] = useState('');
  const [shelters, setShelters] = useState([]);
  const [distance, setDistance] = useState('');

  const handleZipCodeSubmit = async (code) => {
    setZipCode(code);
    const fetchedShelters = await fetchByZipCode(code, 'organizations', distance);
    console.log('fetched shelters:', fetchedShelters);
    localStorage.setItem('shelters', JSON.stringify(fetchedShelters.organizations));
    setShelters(fetchedShelters);
  };

  const handleDistanceChange = async (dist) => {
    setDistance(dist);
    // if (zipCode) {
    //   const fetchedShelters = await fetchByZipCode(zipCode, dist);
    //   setShelters(fetchedShelters);
    // }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Animal Adoption Shelters</h1>
        <Filters onFilterChange={handleDistanceChange} />
        <ZipCodeInput onSubmit={handleZipCodeSubmit} />
      </header>
      <ShelterList shelters={shelters} />
    </div>
  );
}

export default App;