import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { StandardFaktaPanelProps, Personoversikt, Ytelsefordeling } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import { OmsorgOgRettInfoPanel } from './components/OmsorgOgRettInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export interface OmsorgOgRettProps {
  personoversikt: Personoversikt;
  ytelsefordeling: Ytelsefordeling;
}

const OmsorgOgRettFaktaIndex = (props: OmsorgOgRettProps & StandardFaktaPanelProps) => (
  <RawIntlProvider value={intl}>
    <OmsorgOgRettInfoPanel {...props} />
  </RawIntlProvider>
);

export default OmsorgOgRettFaktaIndex;
