import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { DateLabel } from '@fpsak-frontend/shared-components';
import { createIntl } from '@fpsak-frontend/utils';

const intl = createIntl({
  'OkAvbrytModal.Ok': 'Ok',
  'OkAvbrytModal.Avbryt': 'Avbryt',
  'Test.Test': 'Dette er ein test',
});

export default {
  title: 'sharedComponents/DateLabel',
  component: DateLabel,
};

export const visFormatertDato = () => (
  <RawIntlProvider value={intl}>
    <DateLabel
      dateString="2017-10-02"
    />
  </RawIntlProvider>
);
