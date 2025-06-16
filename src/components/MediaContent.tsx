import { useRef } from 'react';

interface MediaContentProps {
  src: string;
  type: 'video' | 'image';
  isPreview?: boolean;
  autoPlay?: boolean;
}

export default function MediaContent({ src, type, isPreview = false, autoPlay = false }: MediaContentProps) {
  console.log('🚀 ~ MediaContent ~ autoPlay:', autoPlay);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (autoPlay) return;
    if (type === 'video' && isPreview && videoRef.current) {
      videoRef.current.play();
    }
  };
  const handleMouseLeave = () => {
    if (autoPlay) return;
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
      controls={autoPlay}
      playsInline
      sx={{ width: '100%', maxHeight: '100%', objectFit: 'contain' }}
      autoPlay={autoPlay}
      preload={isPreview ? 'metadata' : 'auto'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}
