import { useRef } from 'react';
import { Box } from '@mui/material';

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

  if (type === 'image') {
    return <Box component="img" src={src} alt="media-preview" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
  }

  // type === "video"
  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      controls={fullScreen}
      playsInline
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      autoPlay={fullScreen}
      preload={isPreview ? 'metadata' : 'auto'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}
