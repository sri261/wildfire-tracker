import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "../index.css";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 42.3265,
    longitude: -122.8756,
    width: "100vw",
    height: "100vh",
    zoom: 10,
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
        <Marker latitude={42.3265} longitude={-122.8756}>
          <button>click here</button>
        </Marker>
      </ReactMapGL>
    </div>
  );
};
export default Map;
// =========================================
// export default function Map() {
//   const [viewport, setViewport] = useState({
//     latitude: 45.4211,
//     longitude: -75.6903,
//     width: "100vw",
//     height: "100vh",
//     zoom: 10,
//   });

//   return (
//     <div>
//       <ReactMapGL
//         {...viewport}
//         mapboxApiAccessToken={
//           "pk.eyJ1Ijoic3JpMzIiLCJhIjoiY2toc3R5NGt1MDQ4ZzJzbzN1dzNneG0yOSJ9.0WCHH9jte5JJxzfGaangqQ"
//         }
//       ></ReactMapGL>
//     </div>
//   );
// }

// =========================================

// const Map = ({ center, zoom }) => {
//   return (
//     <div className="map">
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "EMPTY" }}
//         defaultCenter={center}
//         defaultZoom={zoom}
//       ></GoogleMapReact>
//     </div>
//   );
// };

// Map.defaultProps = {
//   center: {
//     lat: 42.3265,
//     lng: -122.8756,
//   },
//   zoom: 6,
// };
// export default Map;
