import { useMutation, useQuery } from '@tanstack/react-query';
import type { Dayjs } from 'dayjs';
import type { LngLat } from 'mapbox-gl';
import type { Database } from './database.types';
import supabase from './supabase';
import { getB64 } from './getB64';

export type EventRowDto = Database['public']['Tables']['events']['Row'];

export interface EventFormDto extends Pick<EventRowDto, 'name' | 'description'> {
    date: [Dayjs, Dayjs];
    point: LngLat;
    icon?: File | null;
    image?: File | null;
};

export enum EventType {
    FOOTBALL = 'FOOTBALL',
    RALLY = 'RALLY',
    CONCERT = 'CONCERT',
}

export function useGetNearbyEvents() {
    return useQuery({
        queryKey: ['nearby_events'],
        queryFn: async () => await supabase.rpc('nearby_events', { lat: 40.807313, lng: -73.946713, })
    });
}

export function useCreateEvent() {
    return useMutation({
        mutationFn: async ({ date, point, image, icon, name, description }: EventFormDto) => {
            console.log("🚀 ~ useCreateEvent:", image, icon)
            const [start, end] = date,
                iconText = icon && await getB64(icon),
                imageText = image && await getB64(image);
            console.log("🚀 ~ useCreateEvent:", {
                name,
                description,
                image: imageText,
                icon: iconText,
                start_time: start.toJSON(),
                end_time: end.toJSON(),
                location: `POINT(${point.lat} ${point.lng})`,
                organizer_id: '3023c61c-94cd-42d8-b7d2-31b8a743fd6b',
            })

            return await supabase.from('events').insert({
                name,
                description,
                icon: icon ? (await getB64(icon)) : undefined,
                image: image ? (await getB64(image)) : undefined,
                start_time: start.toJSON(),
                end_time: end.toJSON(),
                location: `POINT(${point.lat} ${point.lng})`,
                organizer_id: '3023c61c-94cd-42d8-b7d2-31b8a743fd6b',
            })
        },
        onSuccess: (...x) => {
            console.log("🚀 ~ useCreateEvent.onSuccess:", x)
        }
    })
}