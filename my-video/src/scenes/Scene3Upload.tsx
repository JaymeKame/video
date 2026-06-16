import React from 'react';
import { AbsoluteFill, useCurrentFrame, spring, interpolate, staticFile, Video } from 'remotion';
import { WindowFrame } from '../components/WindowFrame';

export const Scene3Upload: React.FC = () => {
  const frame = useCurrentFrame();
  const videoSrc = staticFile('assets/upload.mp4');
  const width = 1920 * 0.8;
  const height = (1080 * 0.8 * 9) / 16;

  // Window slide in from right: x: 100 -> 0 with spring
  const windowX = spring({
    frame,
    fps: 30,
    from: 100,
    to: 0,
    durationInFrames: 20,
    config: {
      stiffness: 80,
      damping: 20,
    },
  });

  // Checkmark appears at frame 150 of this scene
  const checkmarkOpacity = interpolate(Math.max(0, frame - 150), [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
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
        }}
      >
        Upload your game
      </div>

      {/* Window with Video */}
      <div
        style={{
          transform: `translateX(${windowX}px)`,
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

        {/* Checkmark SVG - bottom right of window */}
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            right: 30,
            opacity: checkmarkOpacity,
            zIndex: 30,
          }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="28" stroke="#5BA4CF" strokeWidth="3" />
            <path
              d="M 18 30 L 28 40 L 42 22"
              stroke="#5BA4CF"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="30"
              strokeDashoffset={30 - 30 * (checkmarkOpacity > 0 ? 1 : 0)}
            />
          </svg>
        </div>
      </div>
    </AbsoluteFill>
  );
};
