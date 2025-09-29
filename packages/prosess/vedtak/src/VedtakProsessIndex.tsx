import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import type {
  Aksjonspunkt,
  Beregningsgrunnlag,
  BeregningsresultatDagytelse,
  BeregningsresultatEs,
  Oppgave,
  SimuleringResultat,
  TilbakekrevingValg,
  Vilkar,
} from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { VedtakForm } from './components/forstegang/VedtakForm';
import { VedtakRevurderingForm } from './components/revurdering/VedtakRevurderingForm';
import type { VedtakForhåndsvisData } from './types/VedtakForhåndsvisData';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const BEREGNINGSGRUNNLAG_FRITEKSTFELT_I_VEDTAK_AKSJONSPUNKT = [
  AksjonspunktKode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
  AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
];

interface Props {
  beregningsresultat?: BeregningsresultatDagytelse | BeregningsresultatEs;
  originaltBeregningsresultat?: BeregningsresultatDagytelse | BeregningsresultatEs;
  tilbakekrevingvalg?: TilbakekrevingValg;
  simuleringResultat?: SimuleringResultat;
  beregningsgrunnlag?: Beregningsgrunnlag;
  vilkår: Vilkar[];
  previewCallback: (data: VedtakForhåndsvisData) => void;
  oppgaver?: Oppgave[];
  ferdigstillOppgave: (oppgaveId: string) => Promise<void>;
}

export const VedtakProsessIndex = ({
  beregningsresultat,
  originaltBeregningsresultat,
  tilbakekrevingvalg,
  simuleringResultat,
  beregningsgrunnlag,
  vilkår,
  previewCallback,
  oppgaver,
  ferdigstillOppgave,
}: Props) => {
  const { behandling } = usePanelDataContext();

  const beregningErManueltFastsatt = skalSkriveFritekstGrunnetFastsettingAvBeregning(
    behandling.aksjonspunkt,
    beregningsgrunnlag,
  );

  return (
    <RawIntlProvider value={intl}>
      {behandling.type === 'BT-004' ? (
        <VedtakRevurderingForm
          previewCallback={previewCallback}
          tilbakekrevingvalg={tilbakekrevingvalg}
          simuleringResultat={simuleringResultat}
          beregningsresultat={beregningsresultat}
          vilkår={vilkår}
          beregningErManueltFastsatt={beregningErManueltFastsatt}
          beregningsresultatOriginalBehandling={originaltBeregningsresultat}
          oppgaver={oppgaver}
          ferdigstillOppgave={ferdigstillOppgave}
        />
      ) : (
        <VedtakForm
          previewCallback={previewCallback}
          tilbakekrevingvalg={tilbakekrevingvalg}
          simuleringResultat={simuleringResultat}
          beregningsresultat={beregningsresultat}
          vilkår={vilkår}
          beregningErManueltFastsatt={beregningErManueltFastsatt}
          oppgaver={oppgaver}
          ferdigstillOppgave={ferdigstillOppgave}
        />
      )}
    </RawIntlProvider>
  );
};

const skalSkriveFritekstGrunnetFastsettingAvBeregning = (
  aksjonspunkter: Aksjonspunkt[],
  beregningsgrunnlag?: Beregningsgrunnlag,
): boolean => {
  if (!beregningsgrunnlag) {
    return false;
  }
  const behandlingHarLøstBGAP = aksjonspunkter.find(
    ap =>
      BEREGNINGSGRUNNLAG_FRITEKSTFELT_I_VEDTAK_AKSJONSPUNKT.some(k => k === ap.definisjon) &&
      ap.status === AksjonspunktStatus.UTFORT,
  );
  const førstePeriode = beregningsgrunnlag.beregningsgrunnlagPeriode.at(0);
  const andelSomErManueltFastsatt = førstePeriode?.beregningsgrunnlagPrStatusOgAndel?.find(
    andel => andel.overstyrtPrAar || andel.overstyrtPrAar === 0,
  );
  return !!behandlingHarLøstBGAP || !!andelSomErManueltFastsatt;
};
