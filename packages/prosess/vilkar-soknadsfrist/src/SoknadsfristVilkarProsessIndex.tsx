import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { FamilieHendelse, Soknad } from '@navikt/fp-types';

import { ErSoknadsfristVilkaretOppfyltForm } from './components/ErSoknadsfristVilkaretOppfyltForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  soknad: Soknad;
  familiehendelse: FamilieHendelse;
}

export const SoknadsfristVilkarProsessIndex = ({ soknad, familiehendelse }: Props) => (
  <RawIntlProvider value={intl}>
    <ErSoknadsfristVilkaretOppfyltForm soknad={soknad} gjeldendeFamiliehendelse={familiehendelse} />
  </RawIntlProvider>
);
