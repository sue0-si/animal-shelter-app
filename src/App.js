import React, { useState } from "react";
import ZipCodeInput from "./components/ZipCodeInput";
import ShelterList from "./components/ShelterList";
import CatList from "./components/CatList";
import "./App.css";
import { fetchByZipCode } from "./services/api";

function App() {
    const [zipCode, setZipCode] = useState("");
    const [shelters, setShelters] = useState([]);
    const [cats, setCats] = useState([]);

    const handleZipCodeSubmit = async (code) => {
        setZipCode(code);
        const fetchedShelters = await fetchByZipCode(code, "organizations");
        console.log(fetchedShelters);
        setShelters(fetchedShelters.organizations);
        const fetchedCats = await fetchByZipCode(code, "animals");
        console.log(fetchedCats);
        setCats(fetchedCats.animals);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Animal Adoption Shelters</h1>
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