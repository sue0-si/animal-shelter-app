# Animal Shelter App

This is a web application that allows users to input a zip code and displays available animal adoption shelters in the area.

## Features

- User-friendly interface for entering zip codes.
- Displays a list of animal adoption shelters based on the provided zip code.
- Responsive design for optimal viewing on various devices.

## Project Structure

```
animal-shelter-app
├── public
│   ├── index.html          # Main HTML document
│   └── manifest.json       # Metadata for PWA features
├── src
│   ├── components
│   │   ├── ShelterList.js  # Component to display list of shelters
│   │   └── ZipCodeInput.js  # Component for zip code input
│   ├── App.js              # Main application component
│   ├── App.css             # Styles for the application
│   ├── index.js            # Entry point of the React application
│   └── services
│       └── api.js          # API calls for fetching shelters
├── package.json            # npm configuration file
├── .gitignore              # Files and directories to ignore by Git
└── README.md               # Documentation for the project
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd animal-shelter-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000`.
3. Enter a zip code in the input field to find nearby animal adoption shelters.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.