import { lazy, Suspense } from 'react';
import Map from '@vis.gl/react-mapbox';

// const Map = lazy(() => import('@vis.gl/react-mapbox').then((m) => ({ default: m.default })));
// const FullscreenControl = lazy(() => import('@vis.gl/react-mapbox').then((m) => ({ default: m.FullscreenControl })));
// const GeolocateControl = lazy(() => import('@vis.gl/react-mapbox').then((m) => ({ default: m.GeolocateControl })));
// const NavigationControl = lazy(() => import('@vis.gl/react-mapbox').then((m) => ({ default: m.NavigationControl })));
// const ScaleControl = lazy(() => import('@vis.gl/react-mapbox').then((m) => ({ default: m.ScaleControl })));

export function LayoutMap() {
  return (
    <Suspense fallback={null}>
      <div
        sx={(theme) => ({
          display: 'contents',
          '& .mapboxgl-ctrl-group': {
            color: 'primary.main',
            outline: 1,
            backgroundColor: 'background.paper',
            backdropFilter: 1,
            borderRadius: 1,
            mt: 2,
            mr: 2,
            '&>button': {
              height: 40,
              px: 1,
              boxSizing: 'content-box',
              borderColor: 'primary.main',
              '&.mapboxgl-ctrl-geolocate>.mapboxgl-ctrl-icon': {
                backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23${theme.palette.primary.main.slice(1)}'%3E %3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E %3Ccircle id='dot' cx='10' cy='10' r='2'/%3E %3Cpath id='stroke' d='M14 5l1 1-9 9-1-1 9-9z' display='none'/%3E %3C/svg%3E")`,
              },
            },
          },
        })}
      >
        <Map
          initialViewState={{
            latitude: 43.314546,
            longitude: -3.856231,
            zoom: 13,
            bearing: 0,
            pitch: 0,
          }}
          mapStyle="mapbox://styles/llanillo-jr/cmad5xjsw00pb01s437cgexef"
          mapboxAccessToken={import.meta.env.VITE_TOKEN_MAPBOX}
          language="es"
        >
          {/* <Suspense fallback={null}>
            <GeolocateControl position="top-right" />
            <FullscreenControl position="top-right" />
            <NavigationControl position="top-right" />
            <ScaleControl />
          </Suspense> */}
        </Map>
      </div>
    </Suspense>
  );
}
