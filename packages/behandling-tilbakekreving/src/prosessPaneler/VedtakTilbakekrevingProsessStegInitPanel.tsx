import React, {
  FunctionComponent, useCallback, useState,
} from 'react';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import VedtakResultatType from '@fpsak-frontend/kodeverk/src/vedtakResultatType';
import VedtakTilbakekrevingProsessIndex from '@fpsak-frontend/prosess-vedtak-tilbakekreving';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import {
  Aksjonspunkt, AlleKodeverkTilbakekreving, BeregningsresultatTilbakekreving, Vedtaksbrev,
} from '@fpsak-frontend/types';
import { ProsessDefaultInitPanel, ProsessPanelInitProps, FatterVedtakStatusModal } from '@fpsak-frontend/behandling-felles';
import { AdvarselModal } from '@fpsak-frontend/shared-components';
import { createIntl, forhandsvisDokument } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';
import { restApiTilbakekrevingHooks, requestTilbakekrevingApi, TilbakekrevingBehandlingApiKeys } from '../data/tilbakekrevingBehandlingApi';

const intl = createIntl(messages);

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
  fptilbakeKodeverk: AlleKodeverkTilbakekreving;
}

const VedtakTilbakekrevingProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  harApenRevurdering,
  opneSokeside,
  toggleOppdatereFagsakContext,
  fptilbakeKodeverk,
  ...props
}) => {
  const { startRequest: forhandsvisVedtaksbrev } = restApiTilbakekrevingHooks.useRestApiRunner(TilbakekrevingBehandlingApiKeys.PREVIEW_VEDTAKSBREV);
  const fetchPreviewVedtaksbrev = useCallback((param) => forhandsvisVedtaksbrev(param).then((response) => forhandsvisDokument(response)), []);

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
      prosessPanelKode={ProsessStegCode.VEDTAK}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Vedtak' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={(initData) => getOverstyrtStatus(initData.beregningsresultat)}
      lagringSideEffekter={lagringSideeffekterCallback}
      hentSkalMarkeresSomAktiv={(initData) => getOverstyrtStatus(initData.beregningsresultat) !== vilkarUtfallType.IKKE_VURDERT}
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
            fetchPreviewVedtaksbrev={fetchPreviewVedtaksbrev}
            {...data}
            alleKodeverk={fptilbakeKodeverk}
          />
        </>
      )}
    />
  );
};

export default VedtakTilbakekrevingProsessStegInitPanel;
