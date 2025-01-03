const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON
app.use(express.json());

// Endpoint to fetch shelters by zip code
app.get('/api/shelters', async (req, res) => {
  const { zipCode } = req.query;
  try {
    const response = await axios.get(`https://api.example.com/shelters?zipCode=${zipCode}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching shelters:', error);
    res.status(500).json({ error: 'Failed to fetch shelters' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});