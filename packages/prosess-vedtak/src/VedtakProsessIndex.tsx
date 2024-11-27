import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { AksjonspunktKode, AksjonspunktStatus, BehandlingType, FagsakYtelseType } from '@navikt/fp-kodeverk';
import {
  Aksjonspunkt,
  Beregningsgrunnlag,
  BeregningsresultatDagytelse,
  BeregningsresultatEs,
  SimuleringResultat,
  StandardProsessPanelProps,
  TilbakekrevingValg,
  Vilkar,
} from '@navikt/fp-types';

import VedtakForm, { ForhandsvisData } from './components/forstegang/VedtakForm';
import VedtakRevurderingForm from './components/revurdering/VedtakRevurderingForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

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

interface OwnProps {
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
  previewCallback: (data: ForhandsvisData) => Promise<any>;
  ytelseTypeKode: string;
}

const VedtakProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  tilbakekrevingvalg,
  simuleringResultat,
  beregningsgrunnlag,
  vilkar,
  beregningsresultatOriginalBehandling,
  aksjonspunkter,
  isReadOnly,
  previewCallback,
  submitCallback,
  ytelseTypeKode,
  alleKodeverk,
  formData,
  setFormData,
}) => {
  const beregningErManueltFastsatt = skalSkriveFritekstGrunnetFastsettingAvBeregning(
    aksjonspunkter,
    beregningsgrunnlag,
  );
  const beregningsresultat =
    ytelseTypeKode === FagsakYtelseType.ENGANGSSTONAD ? beregningresultatEngangsstonad : beregningresultatDagytelse;

  let originaltBeregningsresultat;
  if (beregningsresultatOriginalBehandling) {
    originaltBeregningsresultat =
      ytelseTypeKode === FagsakYtelseType.ENGANGSSTONAD
        ? beregningsresultatOriginalBehandling['beregningsresultat-engangsstonad']
        : beregningsresultatOriginalBehandling['beregningsresultat-foreldrepenger'];
  }

  return (
    <RawIntlProvider value={intl}>
      {behandling.type !== BehandlingType.REVURDERING && (
        <VedtakForm
          behandling={behandling}
          submitCallback={submitCallback}
          readOnly={isReadOnly}
          previewCallback={previewCallback}
          tilbakekrevingvalg={tilbakekrevingvalg}
          simuleringResultat={simuleringResultat}
          beregningsresultat={beregningsresultat}
          aksjonspunkter={aksjonspunkter}
          ytelseTypeKode={ytelseTypeKode}
          alleKodeverk={alleKodeverk}
          vilkar={vilkar}
          beregningErManueltFastsatt={beregningErManueltFastsatt}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {behandling.type === BehandlingType.REVURDERING && (
        <VedtakRevurderingForm
          behandling={behandling}
          submitCallback={submitCallback}
          readOnly={isReadOnly}
          previewCallback={previewCallback}
          tilbakekrevingvalg={tilbakekrevingvalg}
          simuleringResultat={simuleringResultat}
          beregningsresultat={beregningsresultat}
          aksjonspunkter={aksjonspunkter}
          ytelseTypeKode={ytelseTypeKode}
          alleKodeverk={alleKodeverk}
          vilkar={vilkar}
          beregningErManueltFastsatt={beregningErManueltFastsatt}
          beregningsresultatOriginalBehandling={originaltBeregningsresultat}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </RawIntlProvider>
  );
};

export default VedtakProsessIndex;
