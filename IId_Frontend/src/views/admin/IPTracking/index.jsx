import React, { useState } from "react";

function IPTracking() {
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState(null);

  const handleInputChange = (event) => {
    setIpAddress(event.target.value);
  };

  const fetchLocation = () => {
    fetch(`http://ip-api.com/json/${ipAddress}`)
      .then((response) => response.json())
      .then((data) => {
        setLocation(data);
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
        setLocation(null);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen border border-2">
      <br />
      <h1 className="font-bold">
        Enter the Device IP address Here to finf the Location
      </h1>
      <div>
      <input
        type="text"
        placeholder="Enter an IP address"
        value={ipAddress}
        onChange={handleInputChange}
        className="text-lightBlue bg-gray"
      />
      <div>
        <button
          onClick={fetchLocation}
          className="bg-lightBlue text-white rounded-[10px] p-2 "
        >
          Get Location
        </button>
      </div>
      </div>
      {location && (
        <div>
          <h2>Location Information:</h2>
          <p>IP Address: {location.query}</p>
          <p>Country: {location.country}</p>
          <p>City: {location.city}</p>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lon}</p>
        </div>
      )}
    </div>
  );
}

export default IPTracking;
