import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { BeregningsresultatEs, StandardProsessPanelProps } from '@navikt/fp-types';

import BeregningsresultatEngangsstonadForm from './components/BeregningsresultatEngangsstonadForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  beregningresultatEngangsstonad: BeregningsresultatEs;
  overrideReadOnly: boolean;
  kanOverstyreAccess: {
    isEnabled: boolean;
  };
  toggleOverstyring: (fn: (oldArray: []) => void) => void;
}

export const BeregningsresultatProsessIndex = ({
  beregningresultatEngangsstonad,
  aksjonspunkter,
  overrideReadOnly,
  submitCallback,
  kanOverstyreAccess,
  toggleOverstyring,
  alleMerknaderFraBeslutter,
  formData,
  setFormData,
}: Props & StandardProsessPanelProps) => (
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
