import { VStack } from '@navikt/ds-react';
import { BorderBox } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { BesteberegningResultatGrunnlagPanel } from './BesteberegningResultatGrunnlagPanel';
import { BesteMånederVisningPanel } from './BesteManederVisningPanel';
import { KontrollerBesteberegningPanel } from './KontrollerBesteberegningPanel';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId;
}

/**
 * BesteberegningPanel
 *
 * Container komponent. Holder paneler for resultat av besteberegning og inntektsgrunnlag
 */
export const BesteberegningPanel = ({ beregningsgrunnlag, arbeidsgiverOpplysninger }: Props) => {
  const { alleKodeverk, aksjonspunkterForPanel } = usePanelDataContext();

  const { ytelsesspesifiktGrunnlag, beregningsgrunnlagPeriode } = beregningsgrunnlag;

  const besteberegninggrunnlag =
    ytelsesspesifiktGrunnlag?.ytelsetype === 'FP' ? ytelsesspesifiktGrunnlag.besteberegninggrunnlag : undefined;

  if (!besteberegninggrunnlag) {
    return null;
  }

  const førstePeriode = beregningsgrunnlagPeriode[0]!;
  const besteberegningAP = aksjonspunkterForPanel.find(
    ap =>
      ap.definisjon === AksjonspunktKode.UTGÅTT_5048 ||
      ap.definisjon === AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING,
  );
  return (
    <VStack gap="space-16">
      {!!besteberegningAP && <KontrollerBesteberegningPanel aksjonspunkt={besteberegningAP} />}
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
