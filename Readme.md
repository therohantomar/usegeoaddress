# useGeoLoc React Hook

A custom React hook to fetch geolocation data and retrieve the user's current location.

## Installation

Before using the `useGeoLoc` hook, make sure you have React installed in your project. You can install the hook using npm or yarn:

```bash
npm install usegeoloc
```

__or__

```bash
yarn add usegeoloc
```

__Usage__

Import the useGeoLoc hook in your React component and use it as follows:

```javascript 
import React from 'react';
import useGeoLoc from 'usegeoloc';

function LocationComponent() {
  const { location, err, status } = useGeoLoc();

  return (
    <div>
      {status === 'granted' ? (
        <div>
          <h2>Your Current Location:</h2>
          <p>County: {location.county}</p>
          <p>State: {location.state}</p>
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
```

**Location Data**

**The useGeoLoc hook returns location data in the following format:**

    *county: The county or administrative division where the location is situated. For example, "Ambernath."
    *state_district: The district within the state. For example, "Thane District."
    *state: The state in which the location is located. For example, "Maharashtra."
    *display_name: A human-readable representation of the location's address. For example, "Ambernath, Thane 
      District, Maharashtra, 421204, India."
    *lat and lon: The latitude and longitude coordinates of the location.
    *type: The type of location, e.g., "residential."

You can access and use this data as needed in your application.


**Issues and Contributions**

If you encounter any issues or would like to contribute to this project, please open an issue or a pull request on the GitHub repository.


- **Developer Name (GitHub Username)** - [GitHub Profile](https://github.com/therohantomar)
  - Contact: therohantomar@gmail.com