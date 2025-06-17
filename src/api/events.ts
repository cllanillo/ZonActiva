import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { Dayjs } from 'dayjs';
import type { LngLat } from 'mapbox-gl';
import type { Database } from './database.types';
import supabase from './supabase';
import { getB64 } from './getB64';
import { i18n } from '~/lang';

export type EventRowDto = Database['public']['Tables']['events']['Row'];

export interface EventFormDto extends Pick<EventRowDto, 'name' | 'description'> {
  date: [Dayjs, Dayjs];
  point: LngLat;
  icon?: File | null;
  image?: File | null;
}

export enum EventType {
  FOOTBALL = 'FOOTBALL',
  RALLY = 'RALLY',
  CONCERT = 'CONCERT',
}

export function useGetNearbyEvents() {
  return useQuery({
    queryKey: [useGetNearbyEvents.queryKey],
    queryFn: async () => await supabase.rpc('nearby_events', { lat: 40.807313, lng: -73.946713 }),
  });
}
useGetNearbyEvents.queryKey = 'nearby_events';

export function useCreateEvent() {
  const queryClient = useQueryClient();
  // const { enqueueSnackbar } = useSnackbar();
  return useMutation({
    mutationFn: async ({ date, point, image, icon, name, description }: EventFormDto) => {
      const [start, end] = date;
      console.log('🚀 ~ useCreateEvent:', {
        name,
        description,
        image,
        icon,
        start_time: start.toJSON(),
        end_time: end.toJSON(),
        location: `POINT(${point.lat} ${point.lng})`,
        organizer_id: '3023c61c-94cd-42d8-b7d2-31b8a743fd6b',
      });

      return await supabase.from('events').insert({
        name,
        description,
        icon,
        image,
        start_time: start.toJSON(),
        end_time: end.toJSON(),
        location: `POINT(${point.lat} ${point.lng})`,
        organizer_id: '3023c61c-94cd-42d8-b7d2-31b8a743fd6b',
      });
    },
    onSuccess: (...x) => {
      console.log('🚀 ~ useCreateEvent.onSuccess:', x);
      queryClient.resetQueries({ queryKey: [useGetNearbyEvents.queryKey], exact: false });
      // enqueueSnackbar(i18n.formatString(i18n.actionSaveItem, i18n.event), { variant: 'success' });
    },
  });
}
