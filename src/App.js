import React, { useState } from 'react';
import ZipCodeInput from './components/ZipCodeInput';
import ShelterList from './components/ShelterList';
import './App.css';
import { fetchSheltersByZipCode } from './services/api';

function App() {
  const [zipCode, setZipCode] = useState('');
  const [shelters, setShelters] = useState([]);

  const handleZipCodeSubmit = async (code) => {
    setZipCode(code);
    const fetchedShelters = await fetchSheltersByZipCode(code);
    setShelters(fetchedShelters);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Animal Adoption Shelters</h1>
        <ZipCodeInput onSubmit={handleZipCodeSubmit} />
        <ShelterList shelters={shelters} />
      </header>
    </div>
  );
}

export default App;