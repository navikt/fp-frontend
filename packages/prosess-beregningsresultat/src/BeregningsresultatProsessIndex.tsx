import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { BeregningsresultatEs } from '@fpsak-frontend/types';
import { StandardProsessFormProps } from '@fpsak-frontend/prosess-felles';

import BeregningsresultatEngangsstonadForm from './components/BeregningsresultatEngangsstonadForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  beregningresultatEngangsstonad: BeregningsresultatEs;
  overrideReadOnly: boolean;
  kanOverstyreAccess: {
    isEnabled: boolean;
  };
  toggleOverstyring: (fn: (oldArray: []) => void) => void;
}

const BeregningsresultatProsessIndex: FunctionComponent<OwnProps & StandardProsessFormProps> = ({
  behandling,
  beregningresultatEngangsstonad,
  aksjonspunkter,
  overrideReadOnly,
  submitCallback,
  kanOverstyreAccess,
  toggleOverstyring,
  ...rest
}) => (
  <RawIntlProvider value={intl}>
    <BeregningsresultatEngangsstonadForm
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      behandlingResultatstruktur={beregningresultatEngangsstonad}
      aksjonspunkter={aksjonspunkter}
      overrideReadOnly={overrideReadOnly}
      submitCallback={submitCallback}
      kanOverstyre={kanOverstyreAccess.isEnabled}
      toggleOverstyring={toggleOverstyring}
      test={rest}
    />
  </RawIntlProvider>
);

export default BeregningsresultatProsessIndex;
