import React, { FunctionComponent, useEffect, useCallback } from 'react';
import { RawIntlProvider } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';
import { StandardBehandlingProps } from '@fpsak-frontend/behandling-felles';

import { restApiTilbakekrevingHooks, requestTilbakekrevingApi, TilbakekrevingBehandlingApiKeys } from './data/tilbakekrevingBehandlingApi';
import FaktaIndex from './fakta/FaktaIndex';
import ProsessIndex from './prosess/ProsessIndex';
import BehandlingPaVent from './felles/komponenter/BehandlingPaVent';
import getBekreftAksjonspunktCallback from './felles/util/bekreftAksjonspunkter';
import { useLagreAksjonspunkt, useBehandling, useInitBehandlingHandlinger } from './felles/util/indexHooks';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  fagsakKjønn: string;
  harApenRevurdering: boolean;
}

const BehandlingTilbakekrevingIndex: FunctionComponent<OwnProps & StandardBehandlingProps> = ({
  behandlingEventHandler,
  behandlingUuid,
  oppdaterBehandlingVersjon,
  kodeverk: fpsakKodeverk,
  fagsak,
  fagsakKjønn,
  rettigheter,
  oppdaterProsessStegOgFaktaPanelIUrl,
  valgtProsessSteg,
  valgtFaktaSteg,
  opneSokeside,
  harApenRevurdering,
  setRequestPendingMessage,
}) => {
  useEffect(() => {
    requestTilbakekrevingApi.setRequestPendingHandler(setRequestPendingMessage);
    requestTilbakekrevingApi.setAddErrorMessageHandler(setRequestPendingMessage);
  }, []);

  const {
    behandling, hentingHarFeilet, hentBehandling, setBehandling, toggleOppdateringAvFagsakOgBehandling,
  } = useBehandling(behandlingUuid, oppdaterBehandlingVersjon);

  const lagreAksjonspunkter = useLagreAksjonspunkt(setBehandling);

  useInitBehandlingHandlinger(behandlingEventHandler, hentBehandling, setBehandling, behandling);

  const oppdaterFaktaPanelIUrl = useCallback((nyttFaktaSteg: string): void => {
    oppdaterProsessStegOgFaktaPanelIUrl(valgtProsessSteg, nyttFaktaSteg);
  }, [valgtProsessSteg, oppdaterProsessStegOgFaktaPanelIUrl]);
  const oppdaterProsessPanelIUrl = useCallback((nyttProsessSteg: string): void => {
    oppdaterProsessStegOgFaktaPanelIUrl(nyttProsessSteg, valgtFaktaSteg);
  }, [valgtFaktaSteg]);

  const bekreftAksjonspunkterMedSideeffekter = useCallback(getBekreftAksjonspunktCallback(
    fagsak.saksnummer, behandling, oppdaterProsessStegOgFaktaPanelIUrl, lagreAksjonspunkter,
  ), [fagsak.saksnummer, behandling, oppdaterProsessStegOgFaktaPanelIUrl]);

  const { data: tilbakekrevingKodeverk } = restApiTilbakekrevingHooks.useRestApi(TilbakekrevingBehandlingApiKeys.TILBAKE_KODEVERK);

  if (!behandling || !tilbakekrevingKodeverk) {
    return <LoadingPanel />;
  }

  return (
    <RawIntlProvider value={intl}>
      <BehandlingPaVent
        behandling={behandling}
        hentBehandling={hentBehandling}
        kodeverk={tilbakekrevingKodeverk}
      />
      <ProsessIndex
        behandling={behandling}
        fagsakKjønn={fagsakKjønn}
        tilbakekrevingKodeverk={tilbakekrevingKodeverk}
        valgtProsessSteg={valgtProsessSteg}
        oppdaterProsessPanelIUrl={oppdaterProsessPanelIUrl}
        rettigheter={rettigheter}
        hasFetchError={hentingHarFeilet}
        bekreftAksjonspunkterMedSideeffekter={bekreftAksjonspunkterMedSideeffekter}
        harApenRevurdering={harApenRevurdering}
        opneSokeside={opneSokeside}
        toggleOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
      />
      <FaktaIndex
        fagsakYtelseTypeKode={fagsak.fagsakYtelseType}
        behandling={behandling}
        tilbakekrevingKodeverk={tilbakekrevingKodeverk}
        fpsakKodeverk={fpsakKodeverk}
        valgtFaktaSteg={valgtFaktaSteg}
        oppdaterFaktaPanelIUrl={oppdaterFaktaPanelIUrl}
        rettigheter={rettigheter}
        hasFetchError={hentingHarFeilet}
        bekreftAksjonspunkterMedSideeffekter={bekreftAksjonspunkterMedSideeffekter}
      />
    </RawIntlProvider>
  );
};

export default BehandlingTilbakekrevingIndex;
