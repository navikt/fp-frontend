import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { FamilieHendelseSamling, Soknad, StandardProsessPanelProps } from '@navikt/fp-types';

import ErSoknadsfristVilkaretOppfyltForm from './components/ErSoknadsfristVilkaretOppfyltForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  soknad: Soknad;
  familiehendelse: FamilieHendelseSamling;
}

export const SoknadsfristVilkarProsessIndex = ({
  behandling,
  soknad,
  familiehendelse,
  aksjonspunkter,
  status,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  alleKodeverk,
  formData,
  setFormData,
}: Props & StandardProsessPanelProps) => (
  <RawIntlProvider value={intl}>
    <ErSoknadsfristVilkaretOppfyltForm
      behandlingsresultat={behandling.behandlingsresultat}
      soknad={soknad}
      gjeldendeFamiliehendelse={familiehendelse.gjeldende}
      aksjonspunkter={aksjonspunkter}
      status={status}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      alleKodeverk={alleKodeverk}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);
