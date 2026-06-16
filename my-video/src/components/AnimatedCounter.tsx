import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';

interface AnimatedCounterProps {
  from: number;
  to: number;
  durationInFrames: number;
  startFrame?: number;
  format?: (value: number) => string;
  style?: React.CSSProperties;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from,
  to,
  durationInFrames,
  startFrame = 0,
  format = (v) => Math.round(v).toString(),
  style,
}) => {
  const frame = useCurrentFrame();
  
  const progress = Math.max(0, Math.min(1, (frame - startFrame) / durationInFrames));
  const value = interpolate(progress, [0, 1], [from, to]);

  return <span style={style}>{format(value)}</span>;
};
