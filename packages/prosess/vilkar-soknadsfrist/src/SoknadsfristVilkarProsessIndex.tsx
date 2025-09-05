import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { FamilieHendelse, Soknad } from '@navikt/fp-types';

import { ErSoknadsfristVilkaretOppfyltForm } from './components/ErSoknadsfristVilkaretOppfyltForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  soknad: Soknad;
  familiehendelse: FamilieHendelse;
  status: string;
  readOnlySubmitButton: boolean;
}

export const SoknadsfristVilkarProsessIndex = ({ soknad, familiehendelse, status, readOnlySubmitButton }: Props) => (
  <RawIntlProvider value={intl}>
    <ErSoknadsfristVilkaretOppfyltForm
      soknad={soknad}
      gjeldendeFamiliehendelse={familiehendelse}
      status={status}
      readOnlySubmitButton={readOnlySubmitButton}
    />
  </RawIntlProvider>
);
