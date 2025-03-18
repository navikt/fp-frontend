import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { AksjonspunktKode, AksjonspunktStatus, BehandlingType, FagsakYtelseType } from '@navikt/fp-kodeverk';
import type {
  Aksjonspunkt,
  Beregningsgrunnlag,
  BeregningsresultatDagytelse,
  BeregningsresultatEs,
  GenererHtmlDokument,
  Oppgave,
  OverstyrtDokument,
  SimuleringResultat,
  TilbakekrevingValg,
  Vilkar,
} from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { type ForhandsvisData, VedtakForm } from './components/forstegang/VedtakForm';
import { VedtakRevurderingForm } from './components/revurdering/VedtakRevurderingForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  beregningresultatDagytelse?: BeregningsresultatDagytelse;
  beregningresultatEngangsstonad?: BeregningsresultatEs;
  tilbakekrevingvalg?: TilbakekrevingValg;
  simuleringResultat?: SimuleringResultat;
  beregningsgrunnlag?: Beregningsgrunnlag;
  beregningsresultatOriginalBehandling?: {
    'beregningsresultat-engangsstonad'?: BeregningsresultatEs;
    'beregningsresultat-foreldrepenger'?: BeregningsresultatDagytelse;
  };
  vilkar: Vilkar[];
  previewCallback: (data: ForhandsvisData) => void;
  oppgaver?: Oppgave[];
  hentBrevHtml: (params: GenererHtmlDokument) => Promise<OverstyrtDokument>;
  lagreManueltBrev: (html: string | null) => Promise<void>;
}

export const VedtakProsessIndex = ({
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  tilbakekrevingvalg,
  simuleringResultat,
  beregningsgrunnlag,
  vilkar,
  beregningsresultatOriginalBehandling,
  previewCallback,
  oppgaver,
  hentBrevHtml,
  lagreManueltBrev,
}: Props) => {
  const { behandling, fagsak } = usePanelDataContext();

  const { aksjonspunkt } = behandling;

  const beregningErManueltFastsatt = skalSkriveFritekstGrunnetFastsettingAvBeregning(aksjonspunkt, beregningsgrunnlag);
  const beregningsresultat =
    fagsak.fagsakYtelseType === FagsakYtelseType.ENGANGSSTONAD
      ? beregningresultatEngangsstonad
      : beregningresultatDagytelse;

  let originaltBeregningsresultat;
  if (beregningsresultatOriginalBehandling) {
    originaltBeregningsresultat =
      fagsak.fagsakYtelseType === FagsakYtelseType.ENGANGSSTONAD
        ? beregningsresultatOriginalBehandling['beregningsresultat-engangsstonad']
        : beregningsresultatOriginalBehandling['beregningsresultat-foreldrepenger'];
  }

  return (
    <RawIntlProvider value={intl}>
      {behandling.type !== BehandlingType.REVURDERING && (
        <VedtakForm
          previewCallback={previewCallback}
          tilbakekrevingvalg={tilbakekrevingvalg}
          simuleringResultat={simuleringResultat}
          beregningsresultat={beregningsresultat}
          vilkar={vilkar}
          beregningErManueltFastsatt={beregningErManueltFastsatt}
          oppgaver={oppgaver}
          hentBrevHtml={hentBrevHtml}
          lagreManueltBrev={lagreManueltBrev}
        />
      )}
      {behandling.type === BehandlingType.REVURDERING && (
        <VedtakRevurderingForm
          previewCallback={previewCallback}
          tilbakekrevingvalg={tilbakekrevingvalg}
          simuleringResultat={simuleringResultat}
          beregningsresultat={beregningsresultat}
          vilkar={vilkar}
          beregningErManueltFastsatt={beregningErManueltFastsatt}
          beregningsresultatOriginalBehandling={originaltBeregningsresultat}
          oppgaver={oppgaver}
          hentBrevHtml={hentBrevHtml}
          lagreManueltBrev={lagreManueltBrev}
        />
      )}
    </RawIntlProvider>
  );
};

const BEREGNINGSGRUNNLAG_FRITEKSTFELT_I_VEDTAK_AKSJONSPUNKT = [
  AksjonspunktKode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
  AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
];

const skalSkriveFritekstGrunnetFastsettingAvBeregning = (
  aksjonspunkter: Aksjonspunkt[],
  beregningsgrunnlag?: Beregningsgrunnlag,
): boolean => {
  if (!beregningsgrunnlag || !aksjonspunkter) {
    return false;
  }
  const behandlingHarLøstBGAP = aksjonspunkter.find(
    ap =>
      BEREGNINGSGRUNNLAG_FRITEKSTFELT_I_VEDTAK_AKSJONSPUNKT.some(k => k === ap.definisjon) &&
      ap.status === AksjonspunktStatus.UTFORT,
  );
  const førstePeriode = beregningsgrunnlag.beregningsgrunnlagPeriode[0];
  const andelSomErManueltFastsatt = førstePeriode.beregningsgrunnlagPrStatusOgAndel?.find(
    andel => andel.overstyrtPrAar || andel.overstyrtPrAar === 0,
  );
  return !!behandlingHarLøstBGAP || !!andelSomErManueltFastsatt;
};
