import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { Personoversikt, Ytelsefordeling } from '@navikt/fp-types';

import { OmsorgOgRettInfoPanel } from './components/OmsorgOgRettInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export interface OmsorgOgRettProps {
  personoversikt: Personoversikt;
  ytelsefordeling: Ytelsefordeling;
  submittable: boolean;
}

export const OmsorgOgRettFaktaIndex = (props: OmsorgOgRettProps) => (
  <RawIntlProvider value={intl}>
    <OmsorgOgRettInfoPanel {...props} />
  </RawIntlProvider>
);
