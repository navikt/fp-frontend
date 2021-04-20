import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  StandardFaktaPanelProps, FamilieHendelseSamling, InntektArbeidYtelse, Personoversikt, Soknad,
} from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import OmsorgOgForeldreansvarInfoPanel from './components/OmsorgOgForeldreansvarInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
  personoversikt: Personoversikt;
  inntektArbeidYtelse: InntektArbeidYtelse;
}

const OmsorgOgForeldreansvarFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  familiehendelse,
  soknad,
  personoversikt,
  inntektArbeidYtelse,
  aksjonspunkter,
  alleMerknaderFraBeslutter,
  submitCallback,
  readOnly,
  alleKodeverk,
  harApneAksjonspunkter,
  submittable,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="OmsorgOgForeldreansvarFaktaIndex" formData={formData} setFormData={setFormData}>
      <OmsorgOgForeldreansvarInfoPanel
        intl={intl}
        gjeldendeFamiliehendelse={familiehendelse.gjeldende}
        soknad={soknad}
        personoversikt={personoversikt}
        aksjonspunkter={aksjonspunkter}
        innvilgetRelatertTilgrensendeYtelserForAnnenForelder={inntektArbeidYtelse.innvilgetRelatertTilgrensendeYtelserForAnnenForelder}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        submitCallback={submitCallback}
        readOnly={readOnly}
        alleKodeverk={alleKodeverk}
        hasOpenAksjonspunkter={harApneAksjonspunkter}
        submittable={submittable}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default OmsorgOgForeldreansvarFaktaIndex;
