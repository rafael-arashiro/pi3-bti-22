import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Map() {
  return (
    <>
      <MapContainer
        center={[-23.551, -46.633]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-23.551, -46.633]}>
          <Popup>This is a popup</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Map;
