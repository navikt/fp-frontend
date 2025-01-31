import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { Soknad } from '@navikt/fp-types';

import { VurderSoknadsfristForeldrepengerForm } from './components/VurderSoknadsfristForeldrepengerForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  soknad: Soknad;
  readOnlySubmitButton: boolean;
}

export const VurderSoknadsfristForeldrepengerIndex = ({ soknad, readOnlySubmitButton }: Props) => (
  <RawIntlProvider value={intl}>
    <VurderSoknadsfristForeldrepengerForm
      mottattDato={soknad.mottattDato}
      søknadsfrist={soknad.søknadsfrist}
      readOnlySubmitButton={readOnlySubmitButton}
    />
  </RawIntlProvider>
);
