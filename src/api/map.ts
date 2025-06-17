import { useReducer } from 'react';
import { ViewState } from '@vis.gl/react-mapbox';

export const TOKEN_MAPBOX = 'pk.eyJ1IjoiY2xsYW5pbGxvYTAxIiwiYSI6ImNtYzBjemd6azAwdXMycXIzMjg4NmhwaG8ifQ.J-L54IAF1jns1zTij7HTvQ';
export const STYLE_MAPBOX = 'mapbox://styles/mapbox/light-v9'; // mapbox://styles/llanillo-jr/cmad5xjsw00pb01s437cgexef

const mapBoundsKey = 'map-bounds';
let initialMapBounds: Omit<ViewState, 'padding'> = JSON.parse(localStorage.getItem(mapBoundsKey) ?? `{"latitude":43.314546,"longitude":-3.856231,"zoom":13,"bearing":0,"pitch":0}`);

export function useStoreMapBounds() {
  return useReducer((_prevState: typeof initialMapBounds, nextBounds: typeof initialMapBounds) => {
    localStorage.setItem(mapBoundsKey, JSON.stringify(nextBounds));
    initialMapBounds = nextBounds;

    return nextBounds;
  }, initialMapBounds);
}
