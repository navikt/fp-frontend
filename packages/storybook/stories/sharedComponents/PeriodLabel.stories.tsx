import React from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { PeriodLabel } from '@fpsak-frontend/shared-components';

const intl = createIntl({
  locale: 'nb-NO',
  messages: {},
}, createIntlCache());

export default {
  title: 'sharedComponents/PeriodLabel',
  component: PeriodLabel,
};

export const visPeriodelabel = () => (
  <RawIntlProvider value={intl}>
    <PeriodLabel dateStringFom="2020-01-02" dateStringTom="2020-01-04" />
  </RawIntlProvider>
);

export const visPeriodelabelTilDagensDato = () => (
  <RawIntlProvider value={intl}>
    <PeriodLabel dateStringFom="2020-01-02" showTodayString />
  </RawIntlProvider>
);
