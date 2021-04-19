import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { isBGAksjonspunktSomGirFritekstfelt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  BeregningsresultatFp, BeregningsresultatEs, Vilkar, TilbakekrevingValg,
  SimuleringResultat, Beregningsgrunnlag, Medlemskap, Aksjonspunkt, StandardProsessPanelProps,
} from '@fpsak-frontend/types';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import VedtakForm, { ForhandsvisData } from './components/forstegang/VedtakForm';
import VedtakRevurderingForm from './components/revurdering/VedtakRevurderingForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const skalSkriveFritekstGrunnetFastsettingAvBeregning = (aksjonspunkter: Aksjonspunkt[], beregningsgrunnlag?: Beregningsgrunnlag): boolean => {
  if (!beregningsgrunnlag || !aksjonspunkter) {
    return false;
  }
  const behandlingHarLøstBGAP = aksjonspunkter.find((ap) => isBGAksjonspunktSomGirFritekstfelt(ap.definisjon.kode)
    && ap.status.kode === aksjonspunktStatus.UTFORT);
  const førstePeriode = beregningsgrunnlag.beregningsgrunnlagPeriode[0];
  const andelSomErManueltFastsatt = førstePeriode.beregningsgrunnlagPrStatusOgAndel.find((andel) => andel.overstyrtPrAar || andel.overstyrtPrAar === 0);
  return (!!behandlingHarLøstBGAP || !!andelSomErManueltFastsatt);
};

interface OwnProps {
  beregningresultatForeldrepenger?: BeregningsresultatFp;
  beregningresultatEngangsstonad?: BeregningsresultatEs;
  tilbakekrevingvalg?: TilbakekrevingValg;
  simuleringResultat?: SimuleringResultat;
  beregningsgrunnlag?: Beregningsgrunnlag;
  beregningsresultatOriginalBehandling?: {
    'beregningsresultat-engangsstonad'?: BeregningsresultatEs;
    'beregningsresultat-foreldrepenger'?: BeregningsresultatFp;
  };
  medlemskap: Medlemskap;
  vilkar: Vilkar[];
  previewCallback: (data: ForhandsvisData) => Promise<any>,
  ytelseTypeKode: string;
}

const VedtakProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  beregningresultatForeldrepenger,
  beregningresultatEngangsstonad,
  tilbakekrevingvalg,
  simuleringResultat,
  beregningsgrunnlag,
  vilkar,
  beregningsresultatOriginalBehandling,
  medlemskap,
  aksjonspunkter,
  isReadOnly,
  previewCallback,
  submitCallback,
  ytelseTypeKode,
  alleKodeverk,
  formData,
  setFormData,
}) => {
  const beregningErManueltFastsatt = skalSkriveFritekstGrunnetFastsettingAvBeregning(aksjonspunkter, beregningsgrunnlag);
  const resultatstruktur = ytelseTypeKode === fagsakYtelseType.ENGANGSSTONAD
    ? beregningresultatEngangsstonad : beregningresultatForeldrepenger;

  let originaltBeregningsresultat;
  if (beregningsresultatOriginalBehandling) {
    originaltBeregningsresultat = ytelseTypeKode === fagsakYtelseType.ENGANGSSTONAD
      ? beregningsresultatOriginalBehandling['beregningsresultat-engangsstonad'] : beregningsresultatOriginalBehandling['beregningsresultat-foreldrepenger'];
  }

  return (
    <RawIntlProvider value={intl}>
      <ReduxWrapper formName="VedtakProsessIndex" formData={formData} setFormData={setFormData}>
        {behandling.type.kode !== behandlingType.REVURDERING && (
          <VedtakForm
            behandling={behandling}
            behandlingId={behandling.id}
            behandlingVersjon={behandling.versjon}
            submitCallback={submitCallback}
            readOnly={isReadOnly}
            previewCallback={previewCallback}
            tilbakekrevingvalg={tilbakekrevingvalg}
            simuleringResultat={simuleringResultat}
            resultatstruktur={resultatstruktur}
            aksjonspunkter={aksjonspunkter}
            ytelseTypeKode={ytelseTypeKode}
            alleKodeverk={alleKodeverk}
            vilkar={vilkar}
            beregningErManueltFastsatt={beregningErManueltFastsatt}
          />
        )}
        {behandling.type.kode === behandlingType.REVURDERING && (
          <VedtakRevurderingForm
            behandling={behandling}
            behandlingId={behandling.id}
            behandlingVersjon={behandling.versjon}
            submitCallback={submitCallback}
            readOnly={isReadOnly}
            previewCallback={previewCallback}
            tilbakekrevingvalg={tilbakekrevingvalg}
            simuleringResultat={simuleringResultat}
            resultatstruktur={resultatstruktur}
            aksjonspunkter={aksjonspunkter}
            ytelseTypeKode={ytelseTypeKode}
            alleKodeverk={alleKodeverk}
            vilkar={vilkar}
            beregningErManueltFastsatt={beregningErManueltFastsatt}
            resultatstrukturOriginalBehandling={originaltBeregningsresultat}
            medlemskapFom={medlemskap ? medlemskap.fom : undefined}
          />
        )}
      </ReduxWrapper>
    </RawIntlProvider>
  );
};

export default VedtakProsessIndex;
