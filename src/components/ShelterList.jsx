import React from 'react';

const ShelterList = ({ shelters }) => {
  const formatAddress = (address) => {
    const nullCheck = (value) => value == null ? "" : (value + ",");
    return `${nullCheck(address.address1)} ${nullCheck(address.address2)} ${nullCheck(address.city)} ${nullCheck(address.state).slice(0,-1)} ${nullCheck(address.postcode).slice(0, -1)}`;
  };
  const EmailLink = ({ email }) => {
    return <a href={`mailto:${email}`}>{email}</a>;
  };
  return (
    <div>
      <h2>Available Animal Adoption Shelters</h2>
      {(shelters && shelters.length > 0) ? (
        <ul>
          {shelters.map((shelter, index) => (
            <li key={index}>
              <h3>{shelter.name}</h3>
              <p>{formatAddress(shelter.address)}</p>
              <p>{shelter.phone}</p>
              <EmailLink email={shelter.email}/>
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