import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { AnimatedCounter } from '../components/AnimatedCounter';

export const Scene7Earnings: React.FC = () => {
  const frame = useCurrentFrame();

  // Line 1 "You earn." fades in
  const line1Opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Animated counter starts at frame 30 and counts 0 -> 4820 over 60 frames
  // When counter completes (frame 90), add green glow
  const glowOpacity = interpolate(Math.max(0, frame - 90), [0, 10], [0, 1], {
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
      {/* Line 1: "You earn." */}
      <div
        style={{
          fontSize: '80px',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 900,
          color: '#1a1a1a',
          opacity: line1Opacity,
          margin: 0,
          padding: 0,
        }}
      >
        You earn.
      </div>

      {/* Animated Counter */}
      <div
        style={{
          fontSize: '72px',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 900,
          color: '#2E6DA4',
          margin: 0,
          padding: 0,
          boxShadow: glowOpacity > 0 ? `0 0 30px rgba(34, 197, 94, ${0.3 * glowOpacity})` : 'none',
          borderRadius: '8px',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        $
        <AnimatedCounter
          from={0}
          to={4820}
          durationInFrames={60}
          startFrame={30}
          format={(v) => v.toLocaleString()}
        />
      </div>
    </AbsoluteFill>
  );
};
