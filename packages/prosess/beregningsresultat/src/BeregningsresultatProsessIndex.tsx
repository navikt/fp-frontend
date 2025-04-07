import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { BeregningsresultatEs } from '@navikt/fp-types';

import { BeregningsresultatEngangsstonadForm } from './components/BeregningsresultatEngangsstonadForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  beregningresultatEngangsstonad?: BeregningsresultatEs;
}

export const BeregningsresultatProsessIndex = ({ beregningresultatEngangsstonad }: Props) => (
  <RawIntlProvider value={intl}>
    <BeregningsresultatEngangsstonadForm behandlingResultatstruktur={beregningresultatEngangsstonad} />
  </RawIntlProvider>
);
