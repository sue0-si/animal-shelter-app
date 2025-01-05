import axios from 'axios';

const API_BASE_URL = 'https://api.petfinder.com/v2/animals'; // Replace with the actual API endpoint

const getOAuthToken = async () => {
  try {
    const response = await axios.post('https://api.petfinder.com/v2/oauth2/token', {
      grant_type: 'client_credentials',
      client_id: process.env.PETFINDER_API_KEY,
      client_secret: process.env.PETFINDER_API_SECRET
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching OAuth token:', error);
    throw error;
  };
}

export const fetchSheltersByZipCode = async (zipCode) => {
  try {
        const token = await getOAuthToken();
        const response = await axios.get(`${API_BASE_URL}`, {
          params: {
            location: zipCode
          },
          headers: {
            Authorization: `Bearer ${token}`
          }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching shelters:', error);
    throw error;
  }
};