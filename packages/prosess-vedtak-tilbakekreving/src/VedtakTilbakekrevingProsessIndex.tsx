import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@fpsak-frontend/utils';
import behandlingArsakType from '@fpsak-frontend/kodeverk/src/behandlingArsakType';
import {
  BeregningsresultatTilbakekreving, Kodeverk, StandardProsessPanelPropsTilbakekreving, Vedtaksbrev,
} from '@fpsak-frontend/types';
import { ReduxWrapper } from '@fpsak-frontend/form';

import { ForhandsvisData } from './components/TilbakekrevingVedtakForm';
import TilbakekrevingVedtak from './components/TilbakekrevingVedtak';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const tilbakekrevingÅrsakTyperKlage = [
  behandlingArsakType.RE_KLAGE_KA,
  behandlingArsakType.RE_KLAGE_NFP,
];

const erTilbakekrevingÅrsakKlage = (årsak: Kodeverk): boolean => årsak && tilbakekrevingÅrsakTyperKlage.includes(årsak.kode);

interface OwnProps {
  beregningsresultat: BeregningsresultatTilbakekreving;
  vedtaksbrev: Vedtaksbrev ;
  fetchPreviewVedtaksbrev: (data: ForhandsvisData) => Promise<any>;
}

const VedtakTilbakekrevingProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelPropsTilbakekreving> = ({
  behandling,
  beregningsresultat,
  vedtaksbrev,
  submitCallback,
  isReadOnly,
  alleKodeverk,
  fetchPreviewVedtaksbrev,
  formData,
  setFormData,
}) => {
  const erRevurderingTilbakekrevingKlage = behandling.førsteÅrsak && erTilbakekrevingÅrsakKlage(behandling.førsteÅrsak.behandlingArsakType);
  const erRevurderingTilbakekrevingFeilBeløpBortfalt = behandling.førsteÅrsak
    && behandlingArsakType.RE_FEILUTBETALT_BELØP_REDUSERT === behandling.førsteÅrsak.behandlingArsakType.kode;
  return (
    <RawIntlProvider value={intl}>
      <ReduxWrapper formName="VedtakTilbakekrevingProsessIndex" formData={formData} setFormData={setFormData}>
        <TilbakekrevingVedtak
          behandlingUuid={behandling.uuid}
          perioder={beregningsresultat.beregningResultatPerioder}
          resultat={beregningsresultat.vedtakResultatType}
          avsnittsliste={vedtaksbrev.avsnittsliste}
          submitCallback={submitCallback}
          readOnly={isReadOnly}
          alleKodeverk={alleKodeverk}
          fetchPreviewVedtaksbrev={fetchPreviewVedtaksbrev}
          erRevurderingTilbakekrevingKlage={erRevurderingTilbakekrevingKlage}
          erRevurderingTilbakekrevingFeilBeløpBortfalt={erRevurderingTilbakekrevingFeilBeløpBortfalt}
        />
      </ReduxWrapper>
    </RawIntlProvider>
  );
};

export default VedtakTilbakekrevingProsessIndex;
