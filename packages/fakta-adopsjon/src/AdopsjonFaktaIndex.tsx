import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { FamilieHendelseSamling, Soknad, StandardFaktaPanelProps } from '@navikt/fp-types';

import AdopsjonInfoPanel from './components/AdopsjonInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  soknad: Soknad;
  familiehendelse: FamilieHendelseSamling;
  isForeldrepengerFagsak: boolean;
}

const AdopsjonFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  soknad,
  familiehendelse,
  aksjonspunkter,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  submitCallback,
  readOnly,
  isForeldrepengerFagsak,
  harApneAksjonspunkter,
  submittable,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <AdopsjonInfoPanel
      soknad={soknad}
      gjeldendeFamiliehendelse={familiehendelse.gjeldende}
      aksjonspunkter={aksjonspunkter}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      alleKodeverk={alleKodeverk}
      submitCallback={submitCallback}
      readOnly={readOnly}
      isForeldrepengerFagsak={isForeldrepengerFagsak}
      hasOpenAksjonspunkter={harApneAksjonspunkter}
      submittable={submittable}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default AdopsjonFaktaIndex;
