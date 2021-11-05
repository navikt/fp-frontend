import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { BeregningsresultatEs, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

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
  beregningresultatEngangsstonad,
  aksjonspunkter,
  overrideReadOnly,
  submitCallback,
  kanOverstyreAccess,
  toggleOverstyring,
  alleMerknaderFraBeslutter,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <BeregningsresultatEngangsstonadForm
      behandlingResultatstruktur={beregningresultatEngangsstonad}
      aksjonspunkter={aksjonspunkter}
      overrideReadOnly={overrideReadOnly}
      submitCallback={submitCallback}
      kanOverstyre={kanOverstyreAccess.isEnabled}
      toggleOverstyring={toggleOverstyring}
      erIkkeGodkjentAvBeslutter={aksjonspunkter.some((a) => alleMerknaderFraBeslutter[a.definisjon.kode]?.notAccepted)}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default BeregningsresultatProsessIndex;
