import axios from 'axios';

const API_BASE_URL = 'https://api.example.com/shelters'; // Replace with the actual API endpoint

export const fetchSheltersByZipCode = async (zipCode) => {
  try {
    const response = await axios.get(`${API_BASE_URL}?zipCode=${zipCode}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching shelters:', error);
    throw error;
  }
};