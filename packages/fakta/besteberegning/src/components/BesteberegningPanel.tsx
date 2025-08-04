import { VStack } from '@navikt/ds-react';
import { BorderBox } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/fp-types';
import type { BesteberegningAP } from '@navikt/fp-types-avklar-aksjonspunkter';
import { usePanelDataContext } from '@navikt/fp-utils';

import { BesteberegningResultatGrunnlagPanel } from './BesteberegningResultatGrunnlagPanel';
import { BesteMånederVisningPanel } from './BesteManederVisningPanel';
import { KontrollerBesteberegningPanel } from './KontrollerBesteberegningPanel';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId;
  submittable: boolean;
}

/**
 * BesteberegningPanel
 *
 * Container komponent. Holder paneler for resultat av besteberegning og inntektsgrunnlag
 */
export const BesteberegningPanel = ({ beregningsgrunnlag, arbeidsgiverOpplysninger, submittable }: Props) => {
  const { alleKodeverk, aksjonspunkterForPanel, submitCallback, isReadOnly } = usePanelDataContext<BesteberegningAP>();

  const { ytelsesspesifiktGrunnlag, beregningsgrunnlagPeriode } = beregningsgrunnlag;
  const besteberegninggrunnlag = ytelsesspesifiktGrunnlag?.besteberegninggrunnlag;
  if (!besteberegninggrunnlag) {
    return null;
  }
  const førstePeriode = beregningsgrunnlagPeriode[0];
  const besteberegningAP = aksjonspunkterForPanel.find(
    ap =>
      ap.definisjon === AksjonspunktKode.KONTROLLER_AUTOMATISK_BESTEBEREGNING ||
      ap.definisjon === AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING,
  );
  return (
    <VStack gap="space-16">
      {!!besteberegningAP && (
        <KontrollerBesteberegningPanel
          aksjonspunkt={besteberegningAP}
          submitCallback={submitCallback}
          submittable={submittable}
          readOnly={isReadOnly}
        />
      )}
      <BorderBox>
        <BesteberegningResultatGrunnlagPanel
          periode={førstePeriode}
          besteMåneder={besteberegninggrunnlag.besteMåneder}
        />
      </BorderBox>
      <BorderBox>
        <BesteMånederVisningPanel
          besteMåneder={besteberegninggrunnlag.besteMåneder}
          arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
          alleKodeverk={alleKodeverk}
        />
      </BorderBox>
    </VStack>
  );
};
