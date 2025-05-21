import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { FamilieHendelseSamling, Soknad } from '@navikt/fp-types';

import { FodselInfoPanel } from './components/FodselInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  søknad: Soknad;
  familiehendelse: FamilieHendelseSamling;
  submittable: boolean;
}

export const FodselFaktaIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <FodselInfoPanel {...props} />
  </RawIntlProvider>
);
