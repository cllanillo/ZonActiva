interface StoryDto {
    id: string;
    type: 'video' | 'image';
    src: string;
    likes: string;
    user: string;
}

export const storyItems: StoryDto[] = [
    { id: '1', type: 'video', src: '/media/video1.mp4', likes: '127', user: 'user1' },
    { id: '2', type: 'image', src: '/media/image2.jpg', likes: '0', user: 'user2' },
    { id: '3', type: 'video', src: '/media/video3.mp4', likes: '0', user: 'user3' },
    { id: '4', type: 'image', src: '/media/image4.png', likes: '1', user: 'user1' },
    { id: '5', type: 'image', src: '/media/image4.png', likes: '67', user: 'user1' },
    { id: '6', type: 'image', src: '/media/image4.png', likes: '120', user: 'user3' },
];
