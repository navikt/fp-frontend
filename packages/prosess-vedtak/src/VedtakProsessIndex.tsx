import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { AksjonspunktCode, behandlingType, aksjonspunktStatus, fagsakYtelseType } from '@navikt/fp-kodeverk';
import {
  BeregningsresultatDagytelse,
  BeregningsresultatEs,
  Vilkar,
  TilbakekrevingValg,
  SimuleringResultat,
  Beregningsgrunnlag,
  Aksjonspunkt,
  StandardProsessPanelProps,
} from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import VedtakForm, { ForhandsvisData } from './components/forstegang/VedtakForm';
import VedtakRevurderingForm from './components/revurdering/VedtakRevurderingForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const BEREGNINGSGRUNNLAG_FRITEKSTFELT_I_VEDTAK_AKSJONSPUNKT = [
  AksjonspunktCode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
  AksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  AksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
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
      ap.status === aksjonspunktStatus.UTFORT,
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
    ytelseTypeKode === fagsakYtelseType.ENGANGSSTONAD ? beregningresultatEngangsstonad : beregningresultatDagytelse;

  let originaltBeregningsresultat;
  if (beregningsresultatOriginalBehandling) {
    originaltBeregningsresultat =
      ytelseTypeKode === fagsakYtelseType.ENGANGSSTONAD
        ? beregningsresultatOriginalBehandling['beregningsresultat-engangsstonad']
        : beregningsresultatOriginalBehandling['beregningsresultat-foreldrepenger'];
  }

  return (
    <RawIntlProvider value={intl}>
      {behandling.type !== behandlingType.REVURDERING && (
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
      {behandling.type === behandlingType.REVURDERING && (
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
