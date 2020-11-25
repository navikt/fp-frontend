import React, { FunctionComponent } from 'react';

import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';

import { KodeverkMedNavn } from '@fpsak-frontend/types';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';

import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import VurderFaktaBeregningPanel from './fellesFaktaForATFLogSN/VurderFaktaBeregningPanel';
import AvklareAktiviteterPanel from './avklareAktiviteter/AvklareAktiviteterPanel';

const {
  VURDER_FAKTA_FOR_ATFL_SN,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
} = aksjonspunktCodes;

const createRelevantForms = (
  readOnly,
  aksjonspunkter,
  submitCallback,
  submittable,
  erOverstyrer,
  alleKodeverk,
  behandlingId,
  behandlingVersjon,
  beregningsgrunnlag,
) => (
  <div>
    <AvklareAktiviteterPanel
      readOnly={readOnly || (hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, aksjonspunkter) && !erOverstyrer)}
      harAndreAksjonspunkterIPanel={hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aksjonspunkter)}
      submitCallback={submitCallback}
      submittable={submittable}
      erOverstyrer={erOverstyrer}
      aksjonspunkter={aksjonspunkter}
      alleKodeverk={alleKodeverk}
      behandlingId={behandlingId}
      behandlingVersjon={behandlingVersjon}
      beregningsgrunnlag={beregningsgrunnlag}
    />
    <VerticalSpacer thirtyTwoPx />
    <VurderFaktaBeregningPanel
      readOnly={readOnly || ((hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, aksjonspunkter) || beregningsgrunnlag.erOverstyrtInntekt) && !erOverstyrer)}
      submitCallback={submitCallback}
      submittable={submittable}
      aksjonspunkter={aksjonspunkter}
      alleKodeverk={alleKodeverk}
      behandlingId={behandlingId}
      behandlingVersjon={behandlingVersjon}
      beregningsgrunnlag={beregningsgrunnlag}
      erOverstyrer={erOverstyrer}
    />
  </div>
);

type OwnProps = {
    submitCallback: (data: any) => Promise<any>;
    hasOpenAksjonspunkter: boolean;
    readOnly: boolean;
    aksjonspunkter: Aksjonspunkt[];
    submittable: boolean;
    erOverstyrer: boolean;
    alleKodeverk: {[key: string]: KodeverkMedNavn[]};
    beregningsgrunnlag?: Beregningsgrunnlag;
    behandlingId: number;
    behandlingVersjon: number;
};

/**
 * BeregningInfoPanel
 *
 * Container komponent.. Har ansvar for å sette opp Redux Formen for "avklar fakta om beregning" panel.
 */
const BeregningInfoPanel: FunctionComponent<OwnProps> = ({
  readOnly,
  aksjonspunkter,
  submittable,
  submitCallback,
  beregningsgrunnlag,
  erOverstyrer,
  alleKodeverk,
  behandlingId,
  behandlingVersjon,
}) => createRelevantForms(
  readOnly,
  aksjonspunkter,
  submitCallback,
  submittable,
  erOverstyrer,
  alleKodeverk,
  behandlingId,
  behandlingVersjon,
  beregningsgrunnlag,
);

export default BeregningInfoPanel;
