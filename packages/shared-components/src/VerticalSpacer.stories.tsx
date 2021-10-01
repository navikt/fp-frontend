import React from 'react';

import VerticalSpacer from './VerticalSpacer';

export default {
  title: 'sharedComponents/VerticalSpacer',
  component: VerticalSpacer,
};

export const visValgbareMellomrom = () => (
  <div>
    4 px spacing:
    <VerticalSpacer fourPx />
    8 px spacing:
    <VerticalSpacer eightPx />
    16 px spacing:
    <VerticalSpacer sixteenPx />
    20 px spacing:
    <VerticalSpacer twentyPx />
    32 px spacing:
    <VerticalSpacer thirtyTwoPx />
    40 px spacing:
    <VerticalSpacer fourtyPx />
    tekst
  </div>
);
