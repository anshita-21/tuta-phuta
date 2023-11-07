// DirectionsMap.js
import React, { useState } from "react";
import { GoogleMap, DirectionsService, DirectionsRenderer, LoadScript } from "@react-google-maps/api";
import { Link } from "react-router-dom";
import "./DirectionsMap.css"; // Create a CSS file for styling

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 22.5726, // Set latitude to Kolkata
  lng: 88.3639, // Set longitude to Kolkata
};

const DirectionsMap = () => {
  const [response, setResponse] = useState(null);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const directionsCallback = (result, status) => {
    if (status === "OK") {
      setResponse(result);
    } else {
      console.error(`Error fetching directions: ${status}`);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "origin") {
      setOrigin(value);
    } else if (name === "destination") {
      setDestination(value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (origin && destination) {
      setResponse(null); // Clear previous directions
    }
  };

  return (
    <div className="directions-map-container">
      <Link to="/home" className="go-back-link">
        Go Back to Home Page
      </Link>
      <form onSubmit={handleFormSubmit}>
        <label>
          Starting Location:
          <input type="text" name="origin" value={origin} onChange={handleInputChange} />
        </label>
        <label>
          Destination:
          <input type="text" name="destination" value={destination} onChange={handleInputChange} />
        </label>
        <button type="submit">Get Directions</button>
      </form>
      <LoadScript googleMapsApiKey="AIzaSyD1hFyxtfEip0QRWpWz4C2CnI-V5A2xBcs">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
          clickableIcons={false}
        >
          {origin && destination && (
            <DirectionsService
              options={{
                destination,
                origin,
                travelMode: "DRIVING",
              }}
              callback={directionsCallback}
            />
          )}
          {response && <DirectionsRenderer options={{ directions: response }} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default DirectionsMap;
