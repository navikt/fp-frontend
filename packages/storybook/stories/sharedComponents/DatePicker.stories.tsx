import React from 'react';

import { Datepicker } from '@fpsak-frontend/shared-components';

export default {
  title: 'sharedComponents/Datepicker',
  component: Datepicker,
};

export const visDatovelger = () => (
  <Datepicker onChange={() => undefined} onBlur={() => undefined} />
);
