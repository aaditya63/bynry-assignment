import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapComponent({custom_address}) {
  const [position, setPosition] = useState([51.505, -0.09]); // Default location

  useEffect(() => {
    const getCoordinates = async () => {
      const address = custom_address; // Replace with your address
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
      );
      const data = await response.json();
      if (data.length > 0) {
        setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
      }
    };

    getCoordinates();
  }, []);

  return (
    <MapContainer className="h-50 w-full md:w-80 rounded-2xl" center={position} zoom={13}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <ChangeView center={position} />
      <Marker position={position}>
        <Popup> Location: {position[0]}, {position[1]} </Popup>
      </Marker>
    </MapContainer>
  );
}

function ChangeView({ center }) {  // Updates the map's view
  const map = useMap();
  map.setView(center, map.getZoom()); 
  return null;
}
