import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { FamilieHendelse, Soknad, VilkårUtfallType } from '@navikt/fp-types';

import { ErSoknadsfristVilkaretOppfyltForm } from './components/ErSoknadsfristVilkaretOppfyltForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  soknad: Soknad;
  familiehendelse: FamilieHendelse;
  status: VilkårUtfallType;
}

export const SoknadsfristVilkarProsessIndex = ({ soknad, familiehendelse, status }: Props) => (
  <RawIntlProvider value={intl}>
    <ErSoknadsfristVilkaretOppfyltForm soknad={soknad} gjeldendeFamiliehendelse={familiehendelse} status={status} />
  </RawIntlProvider>
);
