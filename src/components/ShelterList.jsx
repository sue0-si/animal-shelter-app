import React from 'react';
import styled from 'styled-components'

export const DivBox = styled.div`
  border-radius: 3px;
  border: 2px solid #282c34;
  padding: 10px;
  margin-bottom: 20px;
  width: 50%;
  align-self: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
      {shelters.length > 0 ? (
        <Container>
          {shelters.map((shelter, index) => (
            <DivBox key={index}>
              <h3>{shelter.name}</h3>
              <p>{formatAddress(shelter.address)}</p>
              <p>{shelter.phone}</p>
              <EmailLink email={shelter.email}/>
            </DivBox>
          ))}
        </Container>
      ) : (
        <p>No shelters found for the provided zip code.</p>
      )}
    </div>
  );
};


export default ShelterList;