import React from 'react';

import Periodpicker from './Periodpicker';

export default {
  title: 'sharedComponents/Periodpicker',
  component: Periodpicker,
};

export const visDatovelger = () => (
  // @ts-ignore
  <Periodpicker names={['start', 'slutt']} start={{ input: '2020-01-01' }} slutt={{ input: '2020-01-04' }} />
);
