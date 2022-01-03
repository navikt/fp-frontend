import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { StandardFaktaPanelProps, Soknad, Medlemskap } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import MedlemskapInfoPanel from './components/MedlemskapInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  medlemskap: Medlemskap;
  soknad: Soknad;
  isForeldrepengerFagsak: boolean;
  readOnlyForStartdatoForForeldrepenger: boolean;
}

const MedlemskapFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  soknad,
  medlemskap,
  aksjonspunkter,
  harApneAksjonspunkter,
  submittable,
  isForeldrepengerFagsak,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  submitCallback,
  readOnly,
  readOnlyForStartdatoForForeldrepenger,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="MedlemskapFaktaIndex" formData={formData} setFormData={setFormData}>
      <MedlemskapInfoPanel
        behandlingType={behandling.type}
        behandlingStatus={behandling.status}
        soknad={soknad}
        medlemskap={medlemskap}
        aksjonspunkter={aksjonspunkter}
        hasOpenAksjonspunkter={harApneAksjonspunkter}
        submittable={submittable}
        isForeldrepenger={isForeldrepengerFagsak}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        alleKodeverk={alleKodeverk}
        submitCallback={submitCallback}
        readOnly={readOnly}
        readOnlyForStartdatoForForeldrepenger={readOnlyForStartdatoForForeldrepenger}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default MedlemskapFaktaIndex;
