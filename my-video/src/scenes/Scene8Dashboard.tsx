import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, staticFile, Video } from 'remotion';

export const Scene8Dashboard: React.FC = () => {
  const frame = useCurrentFrame();
  const videoSrc = staticFile('assets/dashboard.mp4');

  // Fade in over 15 frames
  const videoOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Text fades in at frame 30
  const textOpacity = interpolate(Math.max(0, frame - 30), [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#000',
      }}
    >
      {/* Video - full screen */}
      <div
        style={{
          width: '100%',
          height: '100%',
          opacity: videoOpacity,
        }}
      >
        <Video
          src={videoSrc}
          startFrom={0}
          endAt={90}
          muted
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Dark overlay gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent)',
          zIndex: 10,
        }}
      />

      {/* Text TOP CENTER */}
      <div
        style={{
          position: 'absolute',
          top: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '24px',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          color: 'white',
          letterSpacing: '4px',
          opacity: textOpacity,
          zIndex: 20,
          margin: 0,
          padding: 0,
        }}
      >
        inzone.ai
      </div>
    </AbsoluteFill>
  );
};
