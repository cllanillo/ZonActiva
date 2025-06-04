interface StoryDto {
  id: string;
  type: 'video' | 'image';
  src: string;
  likes: string;
  user: string;
}

export const storyItems: StoryDto[] = [
  { id: '1', type: 'video', src: '/media/video1.mp4', likes: '3.9M', user: 'user1' },
  { id: '2', type: 'image', src: '/media/image2.jpg', likes: '1.2M', user: 'user2' },
  { id: '3', type: 'video', src: '/media/video3.mp4', likes: '881.4K', user: 'user3' },
  { id: '4', type: 'image', src: '/media/image4.png', likes: '1.2M', user: 'user4' },
];
