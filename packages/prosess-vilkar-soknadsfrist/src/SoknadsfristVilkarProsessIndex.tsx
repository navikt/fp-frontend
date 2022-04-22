import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { FamilieHendelseSamling, Soknad, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import ErSoknadsfristVilkaretOppfyltForm from './components/ErSoknadsfristVilkaretOppfyltForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  soknad: Soknad;
  familiehendelse: FamilieHendelseSamling;
}

const SoknadsfristVilkarProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  vilkar,
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
}) => (
  <RawIntlProvider value={intl}>
    <ErSoknadsfristVilkaretOppfyltForm
      behandlingsresultat={behandling.behandlingsresultat}
      vilkar={vilkar}
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

export default SoknadsfristVilkarProsessIndex;
