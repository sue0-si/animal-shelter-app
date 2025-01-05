import React from 'react';


const ShelterList = ({ shelters }) => {
  const formatAddress = (address) => {
    const nullCheck = (value) => value == null ? "" : (value + ",");
    return `${nullCheck(address.address1)} ${nullCheck(address.address2)} ${nullCheck(address.city)} ${nullCheck(address.state)} ${nullCheck(address.postcode).replace(',', '')}`;
  };  
  return (
    <div>
      <h2>Available Animal Adoption Shelters</h2>
      {shelters.length > 0 ? (
        <ul>
          {shelters.map((shelter, index) => (
            <li key={index}>
              <h3>{shelter.name}</h3>
              <p>{formatAddress(shelter.address)}</p>
              <p>{shelter.phone}</p>
              <p>{shelter.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No shelters found for the provided zip code.</p>
      )}
    </div>
  );
};


export default ShelterList;