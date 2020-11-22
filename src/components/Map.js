import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "../index.css";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData }) => {
  const [viewport, setViewport] = useState({
    latitude: 42.3265,
    longitude: -122.8756,
    width: "100vw",
    height: "100vh",
    zoom: 5,
  });
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((e) => {
    if (e.categories[0].id === 8) {
      return (
        <Marker
          key={e.id}
          latitude={e.geometries[0].coordinates[1]}
          longitude={e.geometries[0].coordinates[0]}
        >
          <button
            className="fire-button"
            onClick={(e) => {
              console.log(locationInfo);
              e.preventDefault();

              setLocationInfo({ id: e.id, title: e.title });
            }}
          >
            <LocationMarker />
          </button>
        </Marker>
      );
    } else {
      return null;
    }
  });

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1Ijoic3JpMzIiLCJhIjoiY2toc3R5NGt1MDQ4ZzJzbzN1dzNneG0yOSJ9.0WCHH9jte5JJxzfGaangqQ"
        }
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {markers}
      </ReactMapGL>
      {locationInfo ? <LocationInfoBox info={locationInfo} /> : null}
    </div>
  );
};
export default Map;
