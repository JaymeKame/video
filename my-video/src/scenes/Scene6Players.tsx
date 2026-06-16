import React from 'react';
import { AbsoluteFill, useCurrentFrame, spring, staticFile, Video } from 'remotion';
import { WindowFrame } from '../components/WindowFrame';
import { AnimatedCounter } from '../components/AnimatedCounter';

export const Scene6Players: React.FC = () => {
  const frame = useCurrentFrame();
  const videoSrc = staticFile('assets/gameplay.mp4');
  const width = 1920 * 0.88; // 88% width
  const height = (1080 * 0.88 * 9) / 16;

  // Window slide in from left: x: -80 -> 0 with spring
  const windowX = spring({
    frame,
    fps: 30,
    from: -80,
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
        }}
      >
        Players find it.
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
      </div>

      {/* Animated Counter - bottom right */}
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          right: 40,
          zIndex: 30,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: '48px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            color: '#2E6DA4',
            margin: '0 0 8px 0',
          }}
        >
          <AnimatedCounter
            from={0}
            to={1247}
            durationInFrames={120}
            startFrame={0}
            format={(v) => v.toLocaleString()}
          />
        </div>
        <div
          style={{
            fontSize: '16px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            color: '#5BA4CF',
          }}
        >
          players live
        </div>
      </div>
    </AbsoluteFill>
  );
};
