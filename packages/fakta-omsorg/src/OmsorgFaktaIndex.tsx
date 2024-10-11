import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import { StandardFaktaPanelProps, Personoversikt, Ytelsefordeling } from '@navikt/fp-types';

import OmsorgInfoPanel from './components/OmsorgInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  ytelsefordeling: Ytelsefordeling;
  personoversikt: Personoversikt;
}

const OmsorgFaktaIndex = ({ ytelsefordeling, personoversikt, ...rest }: Props & StandardFaktaPanelProps) => (
  <RawIntlProvider value={intl}>
    <OmsorgInfoPanel ytelsefordeling={ytelsefordeling} personoversikt={personoversikt} {...rest} />
  </RawIntlProvider>
);

export default OmsorgFaktaIndex;
