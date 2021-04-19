import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { BeregningsresultatEs, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import BeregningsresultatEngangsstonadForm from './components/BeregningsresultatEngangsstonadForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  beregningresultatEngangsstonad: BeregningsresultatEs;
  overrideReadOnly: boolean;
  kanOverstyreAccess: {
    isEnabled: boolean;
  };
  toggleOverstyring: (fn: (oldArray: []) => void) => void;
}

const BeregningsresultatProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  beregningresultatEngangsstonad,
  aksjonspunkter,
  overrideReadOnly,
  submitCallback,
  kanOverstyreAccess,
  toggleOverstyring,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="BeregningsresultatProsessIndex" formData={formData} setFormData={setFormData}>
      <BeregningsresultatEngangsstonadForm
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
        behandlingResultatstruktur={beregningresultatEngangsstonad}
        aksjonspunkter={aksjonspunkter}
        overrideReadOnly={overrideReadOnly}
        submitCallback={submitCallback}
        kanOverstyre={kanOverstyreAccess.isEnabled}
        toggleOverstyring={toggleOverstyring}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default BeregningsresultatProsessIndex;
