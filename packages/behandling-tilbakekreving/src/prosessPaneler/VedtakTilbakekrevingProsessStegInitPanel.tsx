import React, {
  FunctionComponent, useCallback, useState,
} from 'react';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import VedtakResultatType from '@fpsak-frontend/kodeverk/src/vedtakResultatType';
import VedtakTilbakekrevingProsessIndex from '@fpsak-frontend/prosess-vedtak-tilbakekreving';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import {
  Aksjonspunkt, BeregningsresultatTilbakekreving, Vedtaksbrev,
} from '@fpsak-frontend/types';
import { ProsessDefaultInitPanel, ProsessPanelInitProps, FatterVedtakStatusModal } from '@fpsak-frontend/behandling-felles-ny';
import { AdvarselModal } from '@fpsak-frontend/shared-components';

import getPackageIntl from '../../i18n/getPackageIntl';
import { restApiTilbakekrevingHooks, requestTilbakekrevingApi, TilbakekrevingBehandlingApiKeys } from '../data/tilbakekrevingBehandlingApi';

const intl = getPackageIntl();

const forhandsvis = (data) => {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(data);
  } else if (URL.createObjectURL) {
    window.open(URL.createObjectURL(data));
  }
};

const getOverstyrtStatus = (beregningsresultat?: BeregningsresultatTilbakekreving): string => {
  if (!beregningsresultat) {
    return vilkarUtfallType.IKKE_VURDERT;
  }
  const { vedtakResultatType } = beregningsresultat;
  return vedtakResultatType.kode === VedtakResultatType.INGEN_TILBAKEBETALING ? vilkarUtfallType.IKKE_OPPFYLT : vilkarUtfallType.OPPFYLT;
};

const getLagringSideeffekter = (
  toggleFatterVedtakModal: (skalViseModal: boolean) => void,
  toggleOppdatereFagsakContext: (skalOppdatereFagsak: boolean) => void,
) => () => {
  toggleOppdatereFagsakContext(false);

  // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
  return () => {
    toggleFatterVedtakModal(true);
  };
};

const AKSJONSPUNKT_KODER = [aksjonspunktCodesTilbakekreving.FORESLA_VEDTAK];

const ENDEPUNKTER_INIT_DATA = [TilbakekrevingBehandlingApiKeys.AKSJONSPUNKTER, TilbakekrevingBehandlingApiKeys.BEREGNINGSRESULTAT];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  beregningsresultat: BeregningsresultatTilbakekreving;
}

const ENDEPUNKTER_PANEL_DATA = [
  TilbakekrevingBehandlingApiKeys.VEDTAKSBREV,
];
type EndepunktPanelData = {
  vedtaksbrev: Vedtaksbrev;
}

interface OwnProps {
  harApenRevurdering: boolean;
  opneSokeside: () => void;
  toggleOppdatereFagsakContext: (skalOppdatereFagsak: boolean) => void;
}

const VedtakTilbakekrevingProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  harApenRevurdering,
  opneSokeside,
  toggleOppdatereFagsakContext,
  ...props
}) => {
  const { startRequest: forhandsvisVedtaksbrev } = restApiTilbakekrevingHooks.useRestApiRunner(TilbakekrevingBehandlingApiKeys.PREVIEW_VEDTAKSBREV);
  const fetchPreviewVedtaksbrev = useCallback((param) => forhandsvisVedtaksbrev(param).then((response) => forhandsvis(response)), []);

  const [visApenRevurderingModal, toggleApenRevurderingModal] = useState(harApenRevurdering);
  const lukkApenRevurderingModal = useCallback(() => toggleApenRevurderingModal(false), []);
  const [visFatterVedtakModal, toggleFatterVedtakModal] = useState(false);

  const lagringSideeffekterCallback = getLagringSideeffekter(toggleFatterVedtakModal, toggleOppdatereFagsakContext);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
      {...props}
      requestApi={requestTilbakekrevingApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={prosessStegCodes.VEDTAK}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Vedtak' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={(data) => getOverstyrtStatus(data?.beregningsresultat)}
      lagringSideEffekter={lagringSideeffekterCallback}
      renderPanel={(data) => (
        <>
          {visApenRevurderingModal && (
            <AdvarselModal
              headerText={intl.formatMessage({ id: 'BehandlingTilbakekrevingIndex.ApenRevurderingHeader' })}
              bodyText={intl.formatMessage({ id: 'BehandlingTilbakekrevingIndex.ApenRevurdering' })}
              showModal
              submit={lukkApenRevurderingModal}
            />
          )}
          <FatterVedtakStatusModal
            visModal={visFatterVedtakModal}
            lukkModal={() => { toggleFatterVedtakModal(false); opneSokeside(); }}
            tekst={intl.formatMessage({ id: 'FatterTilbakekrevingVedtakStatusModal.Sendt' })}
          />
          <VedtakTilbakekrevingProsessIndex
            aksjonspunktKodeForeslaVedtak={aksjonspunktCodesTilbakekreving.FORESLA_VEDTAK}
            fetchPreviewVedtaksbrev={fetchPreviewVedtaksbrev}
            {...data}
          />
        </>
      )}
    />
  );
};

export default VedtakTilbakekrevingProsessStegInitPanel;
