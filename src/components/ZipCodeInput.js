import React, { useState } from 'react';

function ZipCodeInput({ onSearch }) {
  const [zipCode, setZipCode] = useState('');

  const handleInputChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (zipCode) {
      onSearch(zipCode);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={zipCode}
        onChange={handleInputChange}
        placeholder="Enter Zip Code"
        required
      />
      <button type="submit">Search Shelters</button>
    </form>
  );
}

export default ZipCodeInput;