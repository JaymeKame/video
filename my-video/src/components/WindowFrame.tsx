import React, { ReactNode } from 'react';
import { AbsoluteFill } from 'remotion';

interface WindowFrameProps {
  children: ReactNode;
  width: number;
  height: number;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({ children, width, height }) => {
  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width,
          height,
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
          backgroundColor: '#000',
          position: 'relative',
        }}
      >
        {/* macOS-style window chrome */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            backgroundColor: '#f3f3f3',
            borderBottom: '1px solid #d0d0d0',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#ed6158',
            }}
          />
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#fcc02e',
            }}
          />
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#5fc038',
            }}
          />
        </div>
        {/* Content area */}
        <div
          style={{
            width: '100%',
            height: height - 28,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {children}
        </div>
      </div>
    </AbsoluteFill>
  );
};
