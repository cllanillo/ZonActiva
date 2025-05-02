import { createFileRoute } from '@tanstack/react-router';
import Map, { FullscreenControl, GeolocateControl, NavigationControl, ScaleControl } from '@vis.gl/react-mapbox';
// import { useState } from 'react';

import '@mui/material-pigment-css/styles.css';
import { AddEvent } from '🪟/event/AddEvent';
import { Portal } from '@mui/material';

export const Route = createFileRoute('/map')({
  component: RouteComponent,
});

const TOKEN = 'pk.eyJ1IjoibGxhbmlsbG8tanIiLCJhIjoiY205cmFlYmJqMHZsNTJpczRpY25zcnZtdyJ9.K8w98iWFPbvTr5q5iR6glQ'; // Set your mapbox token here
function RouteComponent() {
  //   const [popupInfo, setPopupInfo] = useState<{ longitude: number; latitude: number; state: any; city: any; image: any }>();

  return (
    <>
      <Map
        initialViewState={{
          latitude: 32,
          longitude: -24,
          zoom: 3.5,
          bearing: 0,
          pitch: 0,
        }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={TOKEN}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
      </Map>

      <AddEvent />
    </>
  );
}
