import { useRef } from 'react';
import { type SxProps, type Theme } from '@mui/material';

interface MediaContentProps {
  src: string;
  type: 'video' | 'image';
  isPreview?: boolean;
  fullScreen?: boolean;
}

export default function MediaContent({ src, type, isPreview = false, fullScreen = false }: MediaContentProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (type === 'video' && isPreview && videoRef.current) {
      videoRef.current.play();
    }
  };
  const handleMouseLeave = () => {
    if (type === 'video' && isPreview && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  if (type === 'image') return <img src={src} alt="media-preview" sx={{ width: '100%', maxHeight: '100%', objectFit: 'contain' }} />;
  // type === "video"
  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      controls={fullScreen}
      playsInline
      sx={{ width: '100%', maxHeight: '100%', objectFit: 'contain' }}
      autoPlay={fullScreen}
      preload={isPreview ? 'metadata' : 'auto'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}
