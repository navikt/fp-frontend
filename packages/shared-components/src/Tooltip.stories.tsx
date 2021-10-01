import React from 'react';

import Tooltip from './Tooltip';

export default {
  title: 'sharedComponents/Tooltip',
  component: Tooltip,
};

export const visTooltipTilHøyre = () => (
  <Tooltip content={(
    <div>
      <b>Dette er en tooltip</b>
      <br />
      ...
    </div>
)}
  >
    Hold muspeker over denne teksten for å få opp tooltip
  </Tooltip>
);

export const visTooltipTilVenstre = () => (
  <Tooltip
    alignLeft
    content={(
      <div>
        <b>Dette er en tooltip</b>
        <br />
        ...
      </div>
)}
  >
    Hold muspeker over denne teksten for å få opp tooltip
  </Tooltip>
);

export const visTooltipOver = () => (
  <Tooltip
    alignTop
    content={(
      <div>
        <b>Dette er en tooltip</b>
        <br />
        ...
      </div>
)}
  >
    Hold muspeker over denne teksten for å få opp tooltip
  </Tooltip>
);

export const visTooltipUnder = () => (
  <Tooltip
    alignBottom
    content={(
      <div>
        <b>Dette er en tooltip</b>
        <br />
        ...
      </div>
)}
  >
    Hold muspeker over denne teksten for å få opp tooltip
  </Tooltip>
);
