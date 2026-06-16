import React from 'react';
import { AbsoluteFill } from 'remotion';

interface TextOverlayProps {
  text: string;
  position?: 'top-left' | 'top-center' | 'bottom-right' | 'center';
  style?: React.CSSProperties;
}

export const TextOverlay: React.FC<TextOverlayProps> = ({ text, position = 'top-left', style }) => {
  const positions: { [key: string]: React.CSSProperties } = {
    'top-left': { top: 20, left: 20 },
    'top-center': { top: 20, left: '50%', transform: 'translateX(-50%)' },
    'bottom-right': { bottom: 20, right: 20 },
    center: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
  };

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          ...positions[position],
          position: 'absolute',
          ...style,
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};
