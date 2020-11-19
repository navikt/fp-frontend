import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import Behandling from '@fpsak-frontend/types/src/behandlingTsType';
import StandardFaktaProps from '@fpsak-frontend/fakta-felles/src/standardFaktaPropsTsType';
import { KodeverkMedNavn } from '@fpsak-frontend/types';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import FordelBeregningsgrunnlagPanel from './components/FordelBeregningsgrunnlagPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

type OwnProps = {
  behandling: Behandling,
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  beregningsgrunnlag: Beregningsgrunnlag;
};

const FordelBeregningsgrunnlagFaktaIndex:FunctionComponent<OwnProps & StandardFaktaProps> = ({
  behandling,
  beregningsgrunnlag,
  alleKodeverk,
  alleMerknaderFraBeslutter,
  aksjonspunkter,
  submitCallback,
  readOnly,
  submittable,
}) => (
  <RawIntlProvider value={intl}>
    <FordelBeregningsgrunnlagPanel
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      behandlingType={behandling.type}
      alleKodeverk={alleKodeverk}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      readOnly={readOnly}
      beregningsgrunnlag={beregningsgrunnlag}
      submittable={submittable}
    />
  </RawIntlProvider>
);

export default FordelBeregningsgrunnlagFaktaIndex;
