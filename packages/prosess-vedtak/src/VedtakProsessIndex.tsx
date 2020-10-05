import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import {
  BeregningsresultatFp, BeregningsresultatEs, Vilkar, TilbakekrevingValg,
  SimuleringResultat, Beregningsgrunnlag, Medlemskap,
} from '@fpsak-frontend/types';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { StandardProsessFormProps } from '@fpsak-frontend/prosess-felles';

import VedtakForm from './components/forstegang/VedtakForm';
import VedtakRevurderingForm from './components/revurdering/VedtakRevurderingForm';
import { skalSkriveFritekstGrunnetFastsettingAvBeregning } from './components/felles/VedtakHelper';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  beregningresultatForeldrepenger?: BeregningsresultatFp;
  beregningresultatEngangsstonad?: BeregningsresultatEs;
  tilbakekrevingvalg?: TilbakekrevingValg;
  simuleringResultat?: SimuleringResultat;
  beregningsgrunnlag?: Beregningsgrunnlag;
  beregningsresultatOriginalBehandling?: {
    'beregningsresultat-engangsstonad'?: any;
    'beregningsresultat-foreldrepenger'?: any;
  };
  medlemskap: Medlemskap;
  vilkar: Vilkar[];
  previewCallback: () => void;
  ytelseTypeKode: string;
}

const VedtakProsessIndex: FunctionComponent<OwnProps & StandardProsessFormProps> = ({
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
}) => {
  const beregningErManueltFastsatt = skalSkriveFritekstGrunnetFastsettingAvBeregning(beregningsgrunnlag, aksjonspunkter);
  const resultatstruktur = ytelseTypeKode === fagsakYtelseType.ENGANGSSTONAD
    ? beregningresultatEngangsstonad : beregningresultatForeldrepenger;

  return (
    <RawIntlProvider value={intl}>
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
          resultatstrukturOriginalBehandling={beregningsresultatOriginalBehandling}
          medlemskapFom={medlemskap ? medlemskap.fom : undefined}
        />
      )}
    </RawIntlProvider>
  );
};

export default VedtakProsessIndex;
