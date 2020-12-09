import React from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { TimeLabel } from '@fpsak-frontend/shared-components';

const intl = createIntl({
  locale: 'nb-NO',
  messages: {},
}, createIntlCache());

export default {
  title: 'sharedComponents/TimeLabel',
  component: TimeLabel,
};

export const visTidslabel = () => (
  <RawIntlProvider value={intl}>
    <TimeLabel dateTimeString="2020-08-02T00:54:25.455" />
  </RawIntlProvider>
);
