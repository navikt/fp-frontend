import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import behandlingArsakType from '@fpsak-frontend/kodeverk/src/behandlingArsakType';
import { BeregningsresultatTilbakekreving, Kodeverk, StandardProsessPanelProps } from '@fpsak-frontend/types';

import { ForhandsvisData } from './components/TilbakekrevingVedtakForm';
import TilbakekrevingVedtak from './components/TilbakekrevingVedtak';
import Vedtaksbrev from './types/vedtaksbrevTsType';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

const tilbakekrevingÅrsakTyperKlage = [
  behandlingArsakType.RE_KLAGE_KA,
  behandlingArsakType.RE_KLAGE_NFP,
];

const erTilbakekrevingÅrsakKlage = (årsak: Kodeverk): boolean => årsak && tilbakekrevingÅrsakTyperKlage.includes(årsak.kode);

interface OwnProps {
  beregningsresultat: BeregningsresultatTilbakekreving;
  vedtaksbrev: Vedtaksbrev ;
  fetchPreviewVedtaksbrev: (data: ForhandsvisData) => Promise<any>;
  aksjonspunktKodeForeslaVedtak: string;
}

const VedtakTilbakekrevingProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  beregningsresultat,
  vedtaksbrev,
  submitCallback,
  isReadOnly,
  alleKodeverk,
  fetchPreviewVedtaksbrev,
  aksjonspunktKodeForeslaVedtak,
}) => {
  const erRevurderingTilbakekrevingKlage = behandling.førsteÅrsak && erTilbakekrevingÅrsakKlage(behandling.førsteÅrsak.behandlingArsakType);
  const erRevurderingTilbakekrevingFeilBeløpBortfalt = behandling.førsteÅrsak
    && behandlingArsakType.RE_FEILUTBETALT_BELØP_REDUSERT === behandling.førsteÅrsak.behandlingArsakType.kode;
  return (
    <RawIntlProvider value={intl}>
      <TilbakekrevingVedtak
        behandlingId={behandling.id}
        behandlingUuid={behandling.uuid}
        behandlingVersjon={behandling.versjon}
        perioder={beregningsresultat.beregningResultatPerioder}
        resultat={beregningsresultat.vedtakResultatType}
        avsnittsliste={vedtaksbrev.avsnittsliste}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        alleKodeverk={alleKodeverk}
        fetchPreviewVedtaksbrev={fetchPreviewVedtaksbrev}
        aksjonspunktKodeForeslaVedtak={aksjonspunktKodeForeslaVedtak}
        erRevurderingTilbakekrevingKlage={erRevurderingTilbakekrevingKlage}
        erRevurderingTilbakekrevingFeilBeløpBortfalt={erRevurderingTilbakekrevingFeilBeløpBortfalt}
      />
    </RawIntlProvider>
  );
};

export default VedtakTilbakekrevingProsessIndex;
