import React from 'react';

const ShelterList = ({ shelters }) => {
  return (
    <div>
      <h2>Available Animal Adoption Shelters</h2>
      {shelters.length > 0 ? (
        <ul>
          {shelters.map((shelter, index) => (
            <li key={index}>
              <h3>{shelter.name}</h3>
              <p>{shelter.address}</p>
              <p>{shelter.phone}</p>
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