import React, { FunctionComponent } from 'react';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, Kodeverk } from '@fpsak-frontend/types';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import BesteMånederVisningPanel from './BesteMånederVisningPanel';
import BesteberegningResultatGrunnlagPanel from './BesteberegningResultatGrunnlagPanel';

interface OwnProps {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId;
  getKodeverkNavn: (kodeverk: Kodeverk) => string;
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
}) => {
  const { ytelsesspesifiktGrunnlag, beregningsgrunnlagPeriode } = beregningsgrunnlag;
  if (ytelsesspesifiktGrunnlag == null || ytelsesspesifiktGrunnlag.besteberegninggrunnlag == null) {
    return null;
  }
  const { besteberegninggrunnlag } = ytelsesspesifiktGrunnlag;
  const førstePeriode = beregningsgrunnlagPeriode[0];
  return (
    <div>
      <BesteberegningResultatGrunnlagPanel
        periode={førstePeriode}
        besteMåneder={besteberegninggrunnlag.besteMåneder}
      />
      <VerticalSpacer twentyPx />
      <BesteMånederVisningPanel
        besteMåneder={besteberegninggrunnlag.besteMåneder}
        arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
        getKodeverkNavn={getKodeverkNavn}
      />
    </div>
  );
};

export default BesteberegningPanel;
