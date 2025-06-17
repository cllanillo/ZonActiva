import { debounce, type FilledTextFieldProps } from '@mui/material';
import Map, { LngLat, MapMouseEvent, Marker } from '@vis.gl/react-mapbox';
import { useField } from 'formik';
import { useMemo } from 'react';
import { STYLE_MAPBOX, TOKEN_MAPBOX, useStoreMapBounds } from '~/api/map';

interface FormikTextProps extends Omit<FilledTextFieldProps, 'variant'> {
  name: string;
}

export function FormikMapPoint({ name, ...props }: FormikTextProps) {
  const [initialMapBounds, updateMapBounds] = useStoreMapBounds();
  const [input, , helper] = useField<LngLat | null>(name);

  const handleClick = useMemo(() => debounce((event: MapMouseEvent) => helper.setValue(event.lngLat), 250), []);

  return (
    <Map initialViewState={initialMapBounds} mapStyle={STYLE_MAPBOX} mapboxAccessToken={TOKEN_MAPBOX} language="es" onClick={handleClick}>
      {input.value && <Marker latitude={input.value.lat} longitude={input.value.lng} />}
    </Map>
  );
}
