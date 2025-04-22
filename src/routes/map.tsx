import { createFileRoute } from '@tanstack/react-router';

import Map, { FullscreenControl, GeolocateControl, NavigationControl, Popup, ScaleControl } from '@vis.gl/react-mapbox';
import { useState } from 'react';

export const Route = createFileRoute('/map')({
  component: RouteComponent,
});

const TOKEN = 'pk.eyJ1IjoibGxhbmlsbG8tanIiLCJhIjoiY205cmFlYmJqMHZsNTJpczRpY25zcnZtdyJ9.K8w98iWFPbvTr5q5iR6glQ'; // Set your mapbox token here

function RouteComponent() {
  const [popupInfo, setPopupInfo] = useState<{ longitude: number; latitude: number; state: any; city: any; image: any }>();

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

        {popupInfo && (
          <Popup anchor="top" longitude={Number(popupInfo.longitude)} latitude={Number(popupInfo.latitude)} onClose={() => setPopupInfo(undefined)}>
            <div>
              {popupInfo.city}, {popupInfo.state} |{' '}
              <a target="_new" href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.state}`}>
                Wikipedia
              </a>
            </div>
            <img width="100%" src={popupInfo.image} />
          </Popup>
        )}
      </Map>
    </>
  );
}
