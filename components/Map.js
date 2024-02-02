import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";

/*
  Ref Link: https://lonare.medium.com/how-to-embed-google-maps-on-your-next-js-app-in-3-steps-ad3d26de96ec
**/
// function Map({ address }) {
const Map = () => {
  // const google = window.google;

  // const mapRef = useRef(null);
  // const geocoder = useMemo(() => google.maps.Geocoder(), []);
  // // useEffect(() => {
  // //   const loader = new Loader({
  // //     apiKey: "AIzaSyDiquB535BCBhQMXGGtV781Wh9rqSEmAqI", //process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  // //     version: "weekly",
  // //   });
  // //   loader.load().then(() => {
  // //     geocoder.geocode({ address: address }, (results, status) => {
  // //       if (status === "OK") {
  // //         const map = new google.maps.Map(mapRef.current, {
  // //           center: results[0].geometry.location,
  // //           zoom: 8,
  // //         });
  // //         const marker = new google.maps.Marker({
  // //           map: map,
  // //           position: results[0].geometry.location,
  // //         });
  // //       } else {
  // //         console.error(
  // //           `Geocode was not successful for the following reason: ${status}`
  // //         );
  // //       }
  // //     });
  // //   });
  // // }, [address, geocoder]);
  // return (
  //   <div style={{ height: "400px" }}>
  //     <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
  //       {true && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  //     </GoogleMap>
  //   </div>
  // );
  return withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: 23.076250, lng: 72.594559 }}>
        {true && <Marker position={{ lat: 23.076250, lng: 72.594559 }} />}
      </GoogleMap>
    ))
  );
};

export default Map;
