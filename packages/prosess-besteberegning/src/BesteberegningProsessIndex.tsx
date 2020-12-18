import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, KodeverkMedNavn,
} from '@fpsak-frontend/types';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import messages from '../i18n/nb_NO.json';
import BesteberegningPanel from './components/BesteberegningPanel';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId
  alleKodeverk: {[key: string]: KodeverkMedNavn[]}
}

const BesteberegningProsessIndex: FunctionComponent<OwnProps> = ({
  beregningsgrunnlag,
  arbeidsgiverOpplysninger,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <BesteberegningPanel
      beregningsgrunnlag={beregningsgrunnlag}
      arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
      getKodeverkNavn={getKodeverknavnFn(alleKodeverk, kodeverkTyper)}
    />
  </RawIntlProvider>
);

export default BesteberegningProsessIndex;
