import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { AdopsjonFamilieHendelse, Personoversikt, RelatertTilgrensedYtelse, Soknad } from '@navikt/fp-types';

import { OmsorgOgForeldreansvarInfoPanel } from './components/OmsorgOgForeldreansvarInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  adopsjon: AdopsjonFamilieHendelse;
  søknad: Soknad;
  personoversikt: Personoversikt;
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[];
}

export const OmsorgOgForeldreansvarFaktaIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <OmsorgOgForeldreansvarInfoPanel {...props} />
  </RawIntlProvider>
);
