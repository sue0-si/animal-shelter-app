import axios from "axios";

const API_BASE_URL = "https://api.petfinder.com/v2"; // Replace with the actual API endpoint
let OAuthResponse = null;

const getOAuthToken = async () => {
    try {
        if (!OAuthResponse) {
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                OAuthResponse = JSON.parse(storedToken);
            }
        }
        if (OAuthResponse) {
            if (OAuthResponse.expires_at > Date.now()) {
                return OAuthResponse.data.access_token;
            } else {
                OAuthResponse = null;
            }
        }
        const response = await axios.post(
            "https://api.petfinder.com/v2/oauth2/token",
            {
                grant_type: "client_credentials",
                client_id: process.env.REACT_APP_PETFINDER_API_KEY,
                client_secret: process.env.REACT_APP_PETFINDER_API_SECRET,
            }
        );
        if (response.status === 200 && response.data.token_type === "Bearer") {
            OAuthResponse = {
                ...response,
                expires_at: Date.now() + response.data.expires_in * 1000,
            };
            localStorage.setItem("token", JSON.stringify(OAuthResponse));
            return OAuthResponse.data.access_token;
        }
        else {
            throw new Error("No data existed in localStorage and no token was returned from the API");
        }
    } catch (error) {
        console.error("Error fetching OAuth token:", error);
        throw error;
    }
};

const valid_types = ["organizations", "animals"];

export const fetchByZipCode = async (zipCode, type, distance) => {
    try {
        if (!valid_types.includes(type)) {
            throw new Error("Invalid type provided");
        }
        const token = await getOAuthToken();
        if (token === null) {
            throw new Error("No OAuth token was returned");
        }

        const response = await axios.get(`${API_BASE_URL}/${type}`, {
            params: {
                location: zipCode,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (distance != null){
          const filteredData = response.data[type].filter((item) => item.distance <= distance);
          return filteredData;
        } else {
          return response.data[type];
        }
    } catch (error) {
        console.error("Error fetching shelters:", error);
        throw error;
    }
};
