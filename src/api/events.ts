import { LngLatLike } from 'mapbox-gl';

export interface EventDto {
  id: number;
  type: keyof typeof EventType | EventType;
  name: string;
  longitude: number;
  latitude: number;
  description?: string;
  imageUrl?: string;
  iconUrl?: string;
}

export enum EventType {
  FOOTBALL = 'FOOTBALL',
  RALLY = 'RALLY',
  CONCERT = 'CONCERT',
}

const events: Array<EventDto> = [
  {
    id: 1,
    type: 'FOOTBALL',
    name: 'Stadium Derby Match',
    longitude: -0.1257,
    latitude: 51.5085,
    description: 'Exciting football derby in the main stadium',
    imageUrl: 'https://example.com/images/football1.jpg',
    iconUrl: 'https://example.com/icons/football.svg',
  },
  {
    id: 2,
    type: 'RALLY',
    name: 'Mountain Rally Challenge',
    longitude: -3.7038,
    latitude: 40.4168,
    description: 'Rally race through rugged mountain terrain',
    imageUrl: 'https://example.com/images/rally1.jpg',
    iconUrl: 'https://example.com/icons/rally.svg',
  },
  {
    id: 3,
    type: 'CONCERT',
    name: 'Summer Music Festival',
    longitude: 2.3522,
    latitude: 48.8566,
    description: 'Live concert featuring top international bands',
    imageUrl: 'https://example.com/images/concert1.jpg',
    iconUrl: 'https://example.com/icons/concert.svg',
  },
  {
    id: 4,
    type: 'FOOTBALL',
    name: 'Local Team Friendly',
    longitude: -74.006,
    latitude: 40.7128,
    description: 'Friendly match between local teams',
    imageUrl: 'https://example.com/images/football2.jpg',
    iconUrl: 'https://example.com/icons/football.svg',
  },
  {
    id: 5,
    type: 'RALLY',
    name: 'Coastal Rally Sprint',
    longitude: 138.6007,
    latitude: -34.9285,
    description: 'High-speed rally along the scenic coastline',
    imageUrl: 'https://example.com/images/rally2.jpg',
    iconUrl: 'https://example.com/icons/rally.svg',
  },
  {
    id: 6,
    type: 'CONCERT',
    name: 'Orchestra Night',
    longitude: 151.2093,
    latitude: -33.8688,
    description: 'Classical orchestra performance in the park',
    imageUrl: 'https://example.com/images/concert2.jpg',
    iconUrl: 'https://example.com/icons/concert.svg',
  },
  {
    id: 7,
    type: 'FOOTBALL',
    name: 'Youth Championship Final',
    longitude: -58.3816,
    latitude: -34.6037,
    description: 'The final match of the youth football championship',
    imageUrl: 'https://example.com/images/football3.jpg',
    iconUrl: 'https://example.com/icons/football.svg',
  },
  {
    id: 8,
    type: 'RALLY',
    name: 'Desert Rally Raid',
    longitude: 55.2708,
    latitude: 25.2048,
    description: 'Challenging desert rally raid event',
    imageUrl: 'https://example.com/images/rally3.jpg',
    iconUrl: 'https://example.com/icons/rally.svg',
  },
  {
    id: 9,
    type: 'CONCERT',
    name: 'Indie Bands Showcase',
    longitude: -0.1278,
    latitude: 51.5074,
    description: 'Concert featuring emerging indie bands',
    imageUrl: 'https://example.com/images/concert3.jpg',
    iconUrl: 'https://example.com/icons/concert.svg',
  },
  {
    id: 10,
    type: 'FOOTBALL',
    name: 'International Friendly Match',
    longitude: 12.4964,
    latitude: 41.9028,
    description: 'Friendly match between national teams',
    imageUrl: 'https://example.com/images/football4.jpg',
    iconUrl: 'https://example.com/icons/football.svg',
  },
  {
    id: 11,
    type: 'RALLY',
    name: 'Forest Rally Cup',
    longitude: -1.2577,
    latitude: 51.752,
    description: 'Rally cup in the dense forest tracks',
    imageUrl: 'https://example.com/images/rally4.jpg',
    iconUrl: 'https://example.com/icons/rally.svg',
  },
  {
    id: 12,
    type: 'CONCERT',
    name: 'Rock Concert Blast',
    longitude: -3.7038,
    latitude: 40.4168,
    description: 'Rock concert with popular national bands',
    imageUrl: 'https://example.com/images/concert4.jpg',
    iconUrl: 'https://example.com/icons/concert.svg',
  },
  {
    id: 13,
    type: 'CONCERT',
    name: 'Jazz in the Park',
    longitude: -122.4194,
    latitude: 37.7749,
    description: 'Smooth jazz concert in the city park',
    imageUrl: 'https://example.com/images/concert35.jpg',
    iconUrl: 'https://example.com/icons/concert.svg',
  },
];

export function getEvents() {
  return events;
}
