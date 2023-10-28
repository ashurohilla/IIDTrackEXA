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
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <br />
      <div className=" items-center justify-center flex flex-col p-10 m-4" >
      <h1 className="font-bold text-darkBlue text-xl">
        Enter the Device IP address Here to find the Location.
      </h1>
      <div className="flex flex-col items-center justify-center" >

      <input
        type="text"
        placeholder="Enter an IP address"
        value={ipAddress}
        onChange={handleInputChange}
        className="text-gray-900 bg-gray text-center font-bold m-2"
      /> 
      <div className="m-2">
        <button
          onClick={fetchLocation}
          className="bg-lightBlue text-white rounded-[10px] p-2 text-center items-center font-bold"
        >
          Get Location
        </button>
      </div>
      </div>
      {location && (
        <div className="m-1">
          <h2 className="font-bold text-center text-darkBlue m-1" >Location Information:</h2>
          <p className="text-darkBlue font-bold mb-1" >IP Address: <span className="underline font-light">{location.query}</span> </p>
          <p className="text-darkBlue font-bold mb-1" >Country: <span className="underline font-light " > {location.country}</span> </p>
          <p className="text-darkBlue font-bold mb-1" >City:  <span className="underline font-light " >{location.city}</span> </p>
          <p className="text-darkBlue font-bold mb-1" >Latitude: <span className="underline font-light " >{location.lat}</span>  </p>
          <p className="text-darkBlue font-bold mb-1" >Longitude <span className="underline font-light " > {location.lon}</span> </p>
        </div>
      )}
      </div>
    </div>
  );
}

export default IPTracking;
