import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import FodselVilkarForm from './components/FodselVilkarForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  ytelseTypeKode: string;
}

const FodselVilkarProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  aksjonspunkter,
  status,
  vilkar,
  ytelseTypeKode,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  isAksjonspunktOpen,
  alleKodeverk,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="FodselVilkarProsessIndex" formData={formData} setFormData={setFormData}>
      <FodselVilkarForm
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
        behandlingsresultat={behandling.behandlingsresultat}
        aksjonspunkter={aksjonspunkter}
        status={status}
        vilkar={vilkar}
        ytelseTypeKode={ytelseTypeKode}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        readOnlySubmitButton={readOnlySubmitButton}
        isApOpen={isAksjonspunktOpen}
        alleKodeverk={alleKodeverk}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default FodselVilkarProsessIndex;
