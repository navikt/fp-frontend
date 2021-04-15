import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Undertittel, Undertekst, Normaltekst } from 'nav-frontend-typografi';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import {
  BeregningResultatPeriode, Kodeverk, KodeverkMedNavn, VedtaksbrevAvsnitt,
} from '@fpsak-frontend/types';
import { ForeslaVedtakTilbakekrevingAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import TilbakekrevingVedtakPeriodeTabell from './TilbakekrevingVedtakPeriodeTabell';
import TilbakekrevingVedtakForm, { ForhandsvisData } from './TilbakekrevingVedtakForm';

interface OwnProps {
  submitCallback: (aksjonspunktData: ForeslaVedtakTilbakekrevingAp) => Promise<void>;
  readOnly: boolean;
  resultat: Kodeverk;
  perioder: BeregningResultatPeriode[];
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  behandlingId: number;
  behandlingUuid: string;
  behandlingVersjon: number;
  avsnittsliste: VedtaksbrevAvsnitt[];
  fetchPreviewVedtaksbrev: (data: ForhandsvisData) => Promise<any>;
  erRevurderingTilbakekrevingKlage?: boolean;
  erRevurderingTilbakekrevingFeilBeløpBortfalt?: boolean;
}

const TilbakekrevingVedtak: FunctionComponent<OwnProps> = ({
  submitCallback,
  readOnly,
  resultat,
  perioder,
  alleKodeverk,
  behandlingId,
  behandlingUuid,
  behandlingVersjon,
  avsnittsliste,
  fetchPreviewVedtaksbrev,
  erRevurderingTilbakekrevingKlage,
  erRevurderingTilbakekrevingFeilBeløpBortfalt,
}) => {
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk, kodeverkTyper);
  return (
    <>
      <Undertittel>
        <FormattedMessage id="TilbakekrevingVedtak.Vedtak" />
      </Undertittel>
      <VerticalSpacer twentyPx />
      <Undertekst>
        <FormattedMessage id="TilbakekrevingVedtak.Resultat" />
      </Undertekst>
      <Normaltekst>
        {getKodeverknavn(resultat)}
      </Normaltekst>
      <VerticalSpacer sixteenPx />
      <TilbakekrevingVedtakPeriodeTabell perioder={perioder} getKodeverknavn={getKodeverknavn} />
      <VerticalSpacer sixteenPx />
      <TilbakekrevingVedtakForm
        submitCallback={submitCallback}
        readOnly={readOnly}
        behandlingId={behandlingId}
        behandlingUuid={behandlingUuid}
        behandlingVersjon={behandlingVersjon}
        avsnittsliste={avsnittsliste}
        fetchPreviewVedtaksbrev={fetchPreviewVedtaksbrev}
        erRevurderingTilbakekrevingKlage={erRevurderingTilbakekrevingKlage}
        erRevurderingTilbakekrevingFeilBeløpBortfalt={erRevurderingTilbakekrevingFeilBeløpBortfalt}
      />
    </>
  );
};

export default TilbakekrevingVedtak;
