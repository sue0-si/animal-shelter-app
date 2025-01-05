import React, { useState } from 'react';

function ZipCodeInput({ onSubmit }) {
  const [zipCode, setZipCode] = useState('');

  const handleInputChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (zipCode) {
      onSubmit(zipCode);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={zipCode.trim()}
        onChange={handleInputChange}
        placeholder="Enter Zip Code"
        required
      />
      <button type="submit">Search Shelters</button>
    </form>
  );
}

export default ZipCodeInput;