import React from 'react';
import { AbsoluteFill, useCurrentFrame, spring, interpolate, staticFile, Video } from 'remotion';
import { WindowFrame } from '../components/WindowFrame';

export const Scene5Endpoints: React.FC = () => {
  const frame = useCurrentFrame();
  const videoSrc = staticFile('assets/endpoints.mp4');
  const width = 1920 * 0.8;
  const height = (1080 * 0.8 * 9) / 16;

  // Window scales in from 0.95 -> 1.0 with spring and fades in
  const windowScale = spring({
    frame,
    fps: 30,
    from: 0.95,
    to: 1,
    durationInFrames: 20,
    config: {
      stiffness: 80,
      damping: 20,
    },
  });

  const windowOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Pill badges animate in one by one
  const socialOpacity = interpolate(Math.max(0, frame - 30), [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const paymentsOpacity = interpolate(Math.max(0, frame - 50), [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const analyticsOpacity = interpolate(Math.max(0, frame - 70), [0, 15], [0, 1], {
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
        Add social & monetization
      </div>

      {/* Pill Badges */}
      <div
        style={{
          position: 'absolute',
          top: 90,
          left: 40,
          display: 'flex',
          gap: '12px',
          zIndex: 20,
        }}
      >
        <div
          style={{
            fontSize: '14px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            color: '#2E6DA4',
            backgroundColor: '#EEF4FF',
            padding: '6px 14px',
            borderRadius: '6px',
            opacity: socialOpacity,
          }}
        >
          Social loops
        </div>
        <div
          style={{
            fontSize: '14px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            color: '#2E6DA4',
            backgroundColor: '#EEF4FF',
            padding: '6px 14px',
            borderRadius: '6px',
            opacity: paymentsOpacity,
          }}
        >
          Payments
        </div>
        <div
          style={{
            fontSize: '14px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            color: '#2E6DA4',
            backgroundColor: '#EEF4FF',
            padding: '6px 14px',
            borderRadius: '6px',
            opacity: analyticsOpacity,
          }}
        >
          Analytics
        </div>
      </div>

      {/* Window with Video */}
      <div
        style={{
          transform: `scale(${windowScale})`,
          opacity: windowOpacity,
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
