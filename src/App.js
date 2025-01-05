import React, { useState } from 'react';
import ZipCodeInput from './components/ZipCodeInput';
import ShelterList from './components/ShelterList';
import './App.css';
import { fetchByZipCode, fetchSheltersByZipCode } from './services/api';

function App() {
  const [zipCode, setZipCode] = useState('');
  const [shelters, setShelters] = useState([]);

  const handleZipCodeSubmit = async (code) => {
    setZipCode(code);
    const fetchedShelters = await fetchByZipCode(code, 'organizations');
    localStorage.setItem('shelters', JSON.stringify(fetchedShelters.organizations));
    setShelters(fetchedShelters.organizations);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Animal Adoption Shelters</h1>
        <ZipCodeInput onSubmit={handleZipCodeSubmit} />
      </header>
      <ShelterList shelters={shelters} />
    </div>
  );
}

export default App;