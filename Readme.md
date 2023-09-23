# useGeoLoc React Hook

A custom React hook to fetch geolocation data and retrieve the user's current location.

## Installation

You can install this hook using npm or yarn:

```bash
npm install use-geoloc-hook

Usage

Import the useGeoLoc hook in your React component and use it as follows:


import React from 'react';
import useGeoLoc from 'usegeoloc';

function LocationComponent() {
  const { location, err, status } = useGeoLoc();

  return (
    <div>
      {status === 'granted' ? (
        <div>
          <h2>Your Current Location:</h2>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lon}</p>
        </div>
      ) : (
        <p>Geolocation permission not granted.</p>
      )}
      {err && <p>Error: {err.message}</p>}
    </div>
  );
}

export default LocationComponent;


Return Values

    location: An object containing the geolocation data (latitude and longitude).
    err: An error object if an error occurs during fetching or processing.
    status: A string indicating the geolocation permission status ('granted', 'prompt', or 'denied').

Examples

You can use the useGeoLoc hook in multiple components to retrieve the user's location based on their geolocation permission status. Customize the rendering and error handling based on your application's needs.

import React from 'react';
import useGeoLoc from 'use-geoloc-hook';

function LocationComponent() {
  const { location, err, status } = useGeoLoc();

  return (
    <div>
      {/* Render based on permission status */}
      {status === 'granted' ? (
        <div>
          <h2>Your Current Location:</h2>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lon}</p>
        </div>
      ) : (
        <p>Geolocation permission not granted.</p>
      )}

      {/* Display error message if an error occurs */}
      {err && <p>Error: {err.message}</p>}
    </div>
  );
}

export default LocationComponent;

import React from 'react';
import useGeoLoc from 'usegeoloc';

function LocationComponent() {
  const { location, err, status } = useGeoLoc();

  return (
    <div>
      {/* Render based on permission status */}
      {status === 'granted' ? (
        <div>
          <h2>Your Current Location:</h2>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lon}</p>
        </div>
      ) : (
        <p>Geolocation permission not granted.</p>
      )}

      {/* Display error message if an error occurs */}
      {err && <p>Error: {err.message}</p>}
    </div>
  );
}

export default LocationComponent;


License

This project is licensed under the MIT License - see the LICENSE.md file for details.
Issues and Contributions

If you encounter any issues or would like to contribute to this project, please open an issue or a pull request on the GitHub repository.
Author

[therohantomar] - [therohantomar@gmail.com]