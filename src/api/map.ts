import { useReducer } from "react"
import { ViewState } from '@vis.gl/react-mapbox';

const mapBoundsKey = 'map-bounds';
let initialMapBounds: Omit<ViewState, 'padding'> = JSON.parse(localStorage.getItem(mapBoundsKey) ?? `{"latitude":43.314546,"longitude":-3.856231,"zoom":13,"bearing":0,"pitch":0}`)

export function useStoreMapBounds() {
    return useReducer((_prevState: typeof initialMapBounds, nextBounds: typeof initialMapBounds) => {
        localStorage.setItem(mapBoundsKey, JSON.stringify(nextBounds));
        initialMapBounds = nextBounds;

        return nextBounds;
    }, initialMapBounds);
}