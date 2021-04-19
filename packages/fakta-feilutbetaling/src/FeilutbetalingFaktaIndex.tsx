import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  StandardFaktaPanelProps, FeilutbetalingFakta, KodeverkMedNavn, FeilutbetalingAarsak,
} from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import FeilutbetalingInfoPanel from './components/FeilutbetalingInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  feilutbetalingFakta: FeilutbetalingFakta;
  feilutbetalingAarsak: FeilutbetalingAarsak[];
  fpsakKodeverk: {[key: string]: KodeverkMedNavn[]};
  fagsakYtelseTypeKode: string;
}

const FeilutbetalingFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  feilutbetalingFakta,
  feilutbetalingAarsak,
  fagsakYtelseTypeKode,
  aksjonspunkter,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  fpsakKodeverk,
  submitCallback,
  readOnly,
  harApneAksjonspunkter,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="FeilutbetalingFaktaIndex" formData={formData} setFormData={setFormData}>
      <FeilutbetalingInfoPanel
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
        feilutbetalingFakta={feilutbetalingFakta}
        feilutbetalingAarsak={feilutbetalingAarsak.find((a) => a.ytelseType.kode === fagsakYtelseTypeKode)}
        aksjonspunkter={aksjonspunkter}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        alleKodeverk={alleKodeverk}
        fpsakKodeverk={fpsakKodeverk}
        submitCallback={submitCallback}
        readOnly={readOnly}
        hasOpenAksjonspunkter={harApneAksjonspunkter}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default FeilutbetalingFaktaIndex;
