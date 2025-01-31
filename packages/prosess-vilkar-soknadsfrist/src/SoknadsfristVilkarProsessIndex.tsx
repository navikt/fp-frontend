import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { FamilieHendelseSamling, Soknad } from '@navikt/fp-types';

import { ErSoknadsfristVilkaretOppfyltForm } from './components/ErSoknadsfristVilkaretOppfyltForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  soknad: Soknad;
  familiehendelse: FamilieHendelseSamling;
  status: string;
  readOnlySubmitButton: boolean;
}

export const SoknadsfristVilkarProsessIndex = ({ soknad, familiehendelse, status, readOnlySubmitButton }: Props) => (
  <RawIntlProvider value={intl}>
    <ErSoknadsfristVilkaretOppfyltForm
      soknad={soknad}
      gjeldendeFamiliehendelse={familiehendelse.gjeldende}
      status={status}
      readOnlySubmitButton={readOnlySubmitButton}
    />
  </RawIntlProvider>
);
