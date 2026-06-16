import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';

export const Scene4Bridge: React.FC = () => {
  const frame = useCurrentFrame();

  // Line 1 fades in at frame 0
  const line1Opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Line 2 fades in at frame 20 with slight upward motion y: 10 -> 0
  const line2Opacity = interpolate(Math.max(0, frame - 20), [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const line2Y = interpolate(Math.max(0, frame - 20), [0, 30], [10, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#FAF9F6',
        backgroundImage: 'radial-gradient(ellipse at center, rgba(89,188,240,0.12) 0%, transparent 70%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      {/* Line 1: "Your game." */}
      <div
        style={{
          fontSize: '80px',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 900,
          color: '#1a1a1a',
          opacity: line1Opacity,
          margin: 0,
          padding: 0,
          textAlign: 'center',
        }}
      >
        Your game.
      </div>

      {/* Line 2: "Live instantly." with gradient */}
      <div
        style={{
          fontSize: '80px',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 900,
          background: 'linear-gradient(to right, #89CFF0, #2E6DA4)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          opacity: line2Opacity,
          margin: 0,
          padding: 0,
          textAlign: 'center',
          transform: `translateY(${line2Y}px)`,
        }}
      >
        Live instantly.
      </div>
    </AbsoluteFill>
  );
};
