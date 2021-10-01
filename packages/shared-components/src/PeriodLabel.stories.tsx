import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@fpsak-frontend/utils';
import PeriodLabel from './PeriodLabel';

const intl = createIntl({});

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
