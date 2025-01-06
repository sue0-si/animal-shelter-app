import React, { useState } from 'react';
import ZipCodeInput from './components/ZipCodeInput';
import ShelterList from './components/ShelterList';
import CatList from "./components/CatList";
import './App.css';
import { fetchByZipCode } from './services/api';
import Filters from './components/Filters';

function App() {
    const [zipCode, setZipCode] = useState("");
    const [shelters, setShelters] = useState([]);
    const [cats, setCats] = useState([]);
    const [distance, setDistance] = useState('5');

    const handleZipCodeSubmit = async (code) => {
        setZipCode(code);
        const fetchedShelters = await fetchByZipCode(code, "organizations", distance);
        console.log('fetched shelters:', fetchedShelters);
        setShelters(fetchedShelters);
        const fetchedCats = await fetchByZipCode(code, "animals", distance);
        setCats(fetchedCats);
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
            <div className="container">
                <div className="box">
                    <ShelterList shelters={shelters} />
                </div>
                <div className="box">
                    <CatList cats={cats}/>
                </div>
            </div>
        </div>
    );
}

export default App;