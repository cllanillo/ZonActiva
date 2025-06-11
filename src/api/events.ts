import { useMutation, useQuery } from '@tanstack/react-query'
import type { Database } from './database.types';
import supabase from './supabase';

export type EventRowDto = Database['public']['Tables']['events']['Row'];
export type EventAddDto = Database['public']['Tables']['events']['Insert'];

export enum EventType {
    FOOTBALL = 'FOOTBALL',
    RALLY = 'RALLY',
    CONCERT = 'CONCERT',
}

const events: Array<EventAddDto> = [
    {
        event_id: "1",
        name: 'Stadium Derby Match',
        description: 'Exciting football derby in the main stadium',
    },
    {
        event_id: "2",
        name: 'Mountain Rally Challenge',
        description: 'Rally race through rugged mountain terrain',
    },
    {
        event_id: "3",
        name: 'Summer Music Festival',
        description: 'Live concert featuring top international bands',
    },
    {
        event_id: "4",
        name: 'Local Team Friendly',
        description: 'Friendly match between local teams',
    },
    {
        event_id: "5",
        name: 'Coastal Rally Sprint',
        description: 'High-speed rally along the scenic coastline',
    },
    {
        event_id: "6",
        name: 'Orchestra Night',
        description: 'Classical orchestra performance in the park',
    },
    {
        event_id: "7",
        name: 'Youth Championship Final',
        description: 'The final match of the youth football championship',
    },
    {
        event_id: "8",
        name: 'Desert Rally Raid',
        description: 'Challenging desert rally raid event',
    },
    {
        event_id: "9",
        name: 'Indie Bands Showcase',
        description: 'Concert featuring emerging indie bands',
    },
    {
        event_id: "10",
        name: 'International Friendly Match',
        description: 'Friendly match between national teams',
    },
    {
        event_id: "11",
        name: 'Forest Rally Cup',
        description: 'Rally cup in the dense forest tracks',
    },
    {
        event_id: "12",
        name: 'Rock Concert Blast',
        description: 'Rock concert with popular national bands',
    },
    {
        event_id: "13",
        name: 'Jazz in the Park',
        description: 'Smooth jazz concert in the city park',
    },
];

export function getEvents() {
    return events;
}

export function useGetEvents() {
    return useQuery({ queryKey: ['useGetEvents'], queryFn: async () => ({ data: getEvents() }) });
    // return useQuery({ queryKey: ['useGetEvents'], queryFn: async () => await supabase.from('events').select() });
}

export function useCreateEvent() {
    return useMutation({ mutationFn: async (x: EventAddDto) => await supabase.from('events').insert(x) })
}