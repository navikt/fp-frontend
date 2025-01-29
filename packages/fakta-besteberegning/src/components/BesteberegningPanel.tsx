import { FunctionComponent } from 'react';

import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode, KodeverkType } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/fp-types';
import { BesteberegningAP } from '@navikt/fp-types-avklar-aksjonspunkter';

import BesteberegningResultatGrunnlagPanel from './BesteberegningResultatGrunnlagPanel';
import BesteMånederVisningPanel from './BesteManederVisningPanel';
import KontrollerBesteberegningPanel from './KontrollerBesteberegningPanel';

interface OwnProps {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId;
  getKodeverkNavn: (kodeverk: string, kodeverkType: KodeverkType) => string;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submitCallback: (aksjonspunktData: BesteberegningAP) => Promise<void>;
  submittable: boolean;
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
  submitCallback,
  submittable,
}) => {
  const { ytelsesspesifiktGrunnlag, beregningsgrunnlagPeriode } = beregningsgrunnlag;
  const besteberegninggrunnlag = ytelsesspesifiktGrunnlag?.besteberegninggrunnlag;
  if (!besteberegninggrunnlag) {
    return null;
  }
  const førstePeriode = beregningsgrunnlagPeriode[0];
  const besteberegningAP = aksjonspunkter.find(
    ap =>
      ap.definisjon === AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING ||
      ap.definisjon === AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING,
  );
  return (
    <div>
      {!!besteberegningAP && (
        <KontrollerBesteberegningPanel
          aksjonspunkt={besteberegningAP}
          submitCallback={submitCallback}
          submittable={submittable}
          readOnly={readOnly}
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
