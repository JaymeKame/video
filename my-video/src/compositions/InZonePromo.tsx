import React from 'react';
import { Series } from 'remotion';
import { Scene1Logo } from '../scenes/Scene1Logo';
import { Scene2Discovery } from '../scenes/Scene2Discovery';
import { Scene3Upload } from '../scenes/Scene3Upload';
import { Scene4Bridge } from '../scenes/Scene4Bridge';
import { Scene5Endpoints } from '../scenes/Scene5Endpoints';
import { Scene6Players } from '../scenes/Scene6Players';
import { Scene7Earnings } from '../scenes/Scene7Earnings';
import { Scene8Dashboard } from '../scenes/Scene8Dashboard';

export const InZonePromo: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={90}>
        <Scene1Logo />
      </Series.Sequence>
      <Series.Sequence durationInFrames={210}>
        <Scene2Discovery />
      </Series.Sequence>
      <Series.Sequence durationInFrames={210}>
        <Scene3Upload />
      </Series.Sequence>
      <Series.Sequence durationInFrames={90}>
        <Scene4Bridge />
      </Series.Sequence>
      <Series.Sequence durationInFrames={210}>
        <Scene5Endpoints />
      </Series.Sequence>
      <Series.Sequence durationInFrames={210}>
        <Scene6Players />
      </Series.Sequence>
      <Series.Sequence durationInFrames={90}>
        <Scene7Earnings />
      </Series.Sequence>
      <Series.Sequence durationInFrames={90}>
        <Scene8Dashboard />
      </Series.Sequence>
    </Series>
  );
};
