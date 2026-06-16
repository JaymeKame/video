import React from 'react';
import { AbsoluteFill, useCurrentFrame, spring, interpolate, staticFile } from 'remotion';

export const Scene1Logo: React.FC = () => {
  const frame = useCurrentFrame();
  const logoSrc = staticFile('assets/logo.png');

  // Fade in and scale: 0.85 -> 1.0 over 30 frames with spring
  const logoScale = spring({
    frame,
    fps: 30,
    from: 0.85,
    to: 1,
    durationInFrames: 30,
    config: {
      stiffness: 80,
      damping: 20,
    },
  });

  // Opacity: 0 -> 1 over 30 frames
  const opacity = interpolate(Math.min(frame, 30), [0, 30], [0, 1]);

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
      {/* Logo */}
      <img
        src={logoSrc}
        alt="InZone Logo"
        style={{
          width: '120px',
          height: '120px',
          opacity,
          transform: `scale(${logoScale})`,
        }}
      />

      {/* InZone Text */}
      <div
        style={{
          fontSize: '64px',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 900,
          color: '#2E6DA4',
          letterSpacing: '8px',
          opacity,
          margin: 0,
          padding: 0,
        }}
      >
        InZone
      </div>
    </AbsoluteFill>
  );
};
