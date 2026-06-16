import React from 'react';
import { AbsoluteFill, useCurrentFrame, spring, staticFile, Video } from 'remotion';
import { WindowFrame } from '../components/WindowFrame';

export const Scene2Discovery: React.FC = () => {
  const frame = useCurrentFrame();
  const videoSrc = staticFile('assets/landing.mp4');
  const width = 1920 * 0.8; // 80% screen width
  const height = (1080 * 0.8 * 9) / 16; // Maintain 16:9 aspect ratio

  // Window slide up: y: 60 -> 0 with spring over 20 frames
  const windowY = spring({
    frame,
    fps: 30,
    from: 60,
    to: 0,
    durationInFrames: 20,
    config: {
      stiffness: 80,
      damping: 20,
    },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#FAF9F6',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Text Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 40,
          left: 40,
          zIndex: 20,
          fontSize: '28px',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          color: '#2E6DA4',
          backgroundColor: '#FAF9F6',
          padding: '8px 20px',
          borderRadius: '20px',
        }}
      >
        Discover InZone
      </div>

      {/* Window with Video */}
      <div
        style={{
          transform: `translateY(${windowY}px)`,
        }}
      >
        <WindowFrame width={width} height={height}>
          <Video
            src={videoSrc}
            startFrom={0}
            endAt={210}
            muted
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </WindowFrame>
      </div>
    </AbsoluteFill>
  );
};
