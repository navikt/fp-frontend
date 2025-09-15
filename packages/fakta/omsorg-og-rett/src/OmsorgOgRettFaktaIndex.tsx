import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { OmsorgOgRett, Personoversikt } from '@navikt/fp-types';

import { OmsorgOgRettInfoPanel } from './components/OmsorgOgRettInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export interface OmsorgOgRettProps {
  personoversikt: Personoversikt;
  omsorgOgRett: OmsorgOgRett;
  kanOverstyre: boolean;
}

export const OmsorgOgRettFaktaIndex = (props: OmsorgOgRettProps) => (
  <RawIntlProvider value={intl}>
    <OmsorgOgRettInfoPanel {...props} />
  </RawIntlProvider>
);
