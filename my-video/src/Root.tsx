import React from 'react';
import { Composition } from 'remotion';
import { InZonePromo } from './compositions/InZonePromo';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="InZonePromo"
      component={InZonePromo}
      durationInFrames={1200}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
