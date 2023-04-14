import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { FamilieHendelseSamling, Soknad, StandardFaktaPanelProps } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import AdopsjonInfoPanel from './components/AdopsjonInfoPanel';
import messages from '../i18n/nb_NO.json';

import '@navikt/fp-fakta-felles/dist/style.css';

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
