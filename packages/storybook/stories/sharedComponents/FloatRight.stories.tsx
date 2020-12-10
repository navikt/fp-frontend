import React from 'react';

import { FloatRight } from '@fpsak-frontend/shared-components';

export default {
  title: 'sharedComponents/FloatRight',
  component: FloatRight,
};

export const visTekstTilHøyre = () => (
  <div>
    Dette er en tekst
    <FloatRight>
      Dette er en tekst som skal vises helt til høyre
    </FloatRight>
  </div>
);
