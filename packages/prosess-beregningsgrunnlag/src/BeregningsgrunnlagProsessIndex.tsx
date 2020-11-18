import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import { Beregningsgrunnlag } from '@fpsak-frontend/types';

import { StandardProsessFormProps } from '@fpsak-frontend/prosess-felles';
import BeregningFP from './components/BeregningFP';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

type OwnProps = {
    beregningsgrunnlag?: Beregningsgrunnlag;
};

const BeregningsgrunnlagProsessIndex: FunctionComponent<OwnProps & StandardProsessFormProps> = ({
  behandling,
  beregningsgrunnlag,
  aksjonspunkter,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  vilkar,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <BeregningFP
      behandling={behandling}
      beregningsgrunnlag={beregningsgrunnlag}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      vilkar={vilkar}
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

export default BeregningsgrunnlagProsessIndex;
