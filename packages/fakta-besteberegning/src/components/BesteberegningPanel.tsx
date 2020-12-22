import React, { FunctionComponent } from 'react';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, Kodeverk } from '@fpsak-frontend/types';
import { BorderBox, VerticalSpacer } from '@fpsak-frontend/shared-components';
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
