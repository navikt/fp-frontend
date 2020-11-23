import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn } from '@fpsak-frontend/types';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import Behandling from '@fpsak-frontend/types/src/behandlingTsType';
import BeregningInfoPanel from './components/BeregningInfoPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

type OwnProps = {
    behandling: Behandling;
    beregningsgrunnlag?: Beregningsgrunnlag;
    alleMerknaderFraBeslutter: {
        notAccepted?: boolean;
    };
    alleKodeverk: {[key: string]: KodeverkMedNavn[]};
    aksjonspunkter: Aksjonspunkt[];
    submitCallback: (...args: any[]) => any;
    readOnly: boolean;
    harApneAksjonspunkter: boolean;
    submittable: boolean;
    erOverstyrer: boolean;
};

const BeregningFaktaIndex: FunctionComponent<OwnProps> = ({
  behandling,
  beregningsgrunnlag,
  alleKodeverk,
  aksjonspunkter,
  submitCallback,
  readOnly,
  harApneAksjonspunkter,
  submittable,
  erOverstyrer,
}) => (
  <RawIntlProvider value={intl}>
    <BeregningInfoPanel
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      beregningsgrunnlag={beregningsgrunnlag}
      alleKodeverk={alleKodeverk}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      readOnly={readOnly}
      hasOpenAksjonspunkter={harApneAksjonspunkter}
      submittable={submittable}
      erOverstyrer={erOverstyrer}
    />
  </RawIntlProvider>
);

BeregningFaktaIndex.defaultProps = {
  beregningsgrunnlag: undefined,
};

export default BeregningFaktaIndex;
