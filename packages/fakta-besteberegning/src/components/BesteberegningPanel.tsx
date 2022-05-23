import React, { FunctionComponent } from 'react';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag,
} from '@fpsak-frontend/types';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import Behandling from '@fpsak-frontend/types/src/behandlingTsType';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import BesteberegningAP
  from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/KontrollerBesteberegningAP';
import BesteMånederVisningPanel from './BesteManederVisningPanel';
import BesteberegningResultatGrunnlagPanel from './BesteberegningResultatGrunnlagPanel';
import KontrollerBesteberegningPanel, { FormValues } from './KontrollerBesteberegningPanel';

interface OwnProps {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId;
  getKodeverkNavn: (kodeverk: string, kodeverkType: KodeverkType) => string;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  behandling: Behandling;
  submitCallback: (aksjonspunktData: BesteberegningAP) => Promise<void>;
  submittable: boolean;
  formData?: FormValues,
  setFormData: (data: any) => void,
}

/**
 * BesteberegningPanel
 *
 * Container komponent. Holder paneler for resultat av besteberegning og inntektsgrunnlag
 */
const BesteberegningPanel: FunctionComponent<OwnProps> = ({
  beregningsgrunnlag,
  arbeidsgiverOpplysninger,
  getKodeverkNavn,
  aksjonspunkter,
  readOnly,
  behandling,
  submitCallback,
  submittable,
  formData,
  setFormData,
}) => {
  const { ytelsesspesifiktGrunnlag, beregningsgrunnlagPeriode } = beregningsgrunnlag;
  const besteberegninggrunnlag = ytelsesspesifiktGrunnlag?.besteberegninggrunnlag;
  if (!besteberegninggrunnlag) {
    return null;
  }
  const førstePeriode = beregningsgrunnlagPeriode[0];
  const besteberegningAP = aksjonspunkter.find((ap) => ap.definisjon === aksjonspunktCodes.KONTROLLER_AUTOMATISK_BESTEBEREGNING
    || ap.definisjon === aksjonspunktCodes.MANUELL_KONTROLL_AV_BESTEBEREGNING);
  return (
    <div>
      {!!besteberegningAP
        && (
        <KontrollerBesteberegningPanel
          aksjonspunkt={besteberegningAP}
          submitCallback={submitCallback}
          submittable={submittable}
          readOnly={readOnly}
          venteårsak={behandling.venteArsakKode}
          formData={formData}
          setFormData={setFormData}
        />
        )}
      <BorderBox>
        <BesteberegningResultatGrunnlagPanel
          periode={førstePeriode}
          besteMåneder={besteberegninggrunnlag.besteMåneder}
        />
      </BorderBox>
      <VerticalSpacer twentyPx />
      <BorderBox>
        <BesteMånederVisningPanel
          besteMåneder={besteberegninggrunnlag.besteMåneder}
          arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
          getKodeverkNavn={getKodeverkNavn}
        />
      </BorderBox>
    </div>
  );
};

export default BesteberegningPanel;
