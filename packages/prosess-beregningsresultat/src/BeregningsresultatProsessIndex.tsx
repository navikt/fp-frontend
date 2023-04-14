import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { BeregningsresultatEs, StandardProsessPanelProps } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import BeregningsresultatEngangsstonadForm from './components/BeregningsresultatEngangsstonadForm';
import messages from '../i18n/nb_NO.json';

import '@navikt/fp-prosess-felles/dist/style.css';

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
      erIkkeGodkjentAvBeslutter={aksjonspunkter.some(a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted)}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default BeregningsresultatProsessIndex;
