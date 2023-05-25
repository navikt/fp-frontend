import React, { FunctionComponent, useEffect, useCallback } from 'react';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';

import FaktaIndex from './fakta/FaktaIndex';
import ProsessIndex from './prosess/ProsessIndex';
import BehandlingPaVent from './felles/komponenter/BehandlingPaVent';
import getBekreftAksjonspunktCallback from './felles/util/bekreftAksjonspunkter';
import { useLagreAksjonspunkt, useBehandling } from './felles/util/indexHooks';
import StandardBehandlingProps from '../felles/typer/standardBehandlingProps';
import { BehandlingApiKeys, requestBehandlingApi, restBehandlingApiHooks } from '../../data/behandlingContextApi';

interface OwnProps {
  harApenRevurdering: boolean;
}

const BehandlingTilbakekrevingIndex: FunctionComponent<OwnProps & StandardBehandlingProps> = ({
  behandlingUuid,
  oppdaterBehandlingVersjon,
  kodeverk: fpsakKodeverk,
  fagsak,
  rettigheter,
  oppdaterProsessStegOgFaktaPanelIUrl,
  valgtProsessSteg,
  valgtFaktaSteg,
  opneSokeside,
  harApenRevurdering,
  setRequestPendingMessage,
}) => {
  useEffect(() => {
    requestBehandlingApi.setRequestPendingHandler(setRequestPendingMessage);
    requestBehandlingApi.setAddErrorMessageHandler(setRequestPendingMessage);
  }, []);

  const { behandling, hentingHarFeilet, hentBehandling, setBehandling, toggleOppdateringAvFagsakOgBehandling } =
    useBehandling(behandlingUuid, oppdaterBehandlingVersjon);

  const lagreAksjonspunkter = useLagreAksjonspunkt(setBehandling);

  const oppdaterFaktaPanelIUrl = useCallback(
    (nyttFaktaSteg: string): void => {
      oppdaterProsessStegOgFaktaPanelIUrl(valgtProsessSteg, nyttFaktaSteg);
    },
    [valgtProsessSteg, oppdaterProsessStegOgFaktaPanelIUrl],
  );
  const oppdaterProsessPanelIUrl = useCallback(
    (nyttProsessSteg: string | undefined): void => {
      oppdaterProsessStegOgFaktaPanelIUrl(nyttProsessSteg, valgtFaktaSteg);
    },
    [valgtFaktaSteg],
  );

  const bekreftAksjonspunkterMedSideeffekter = useCallback(
    getBekreftAksjonspunktCallback(
      fagsak.saksnummer,
      oppdaterProsessStegOgFaktaPanelIUrl,
      lagreAksjonspunkter,
      behandling,
    ),
    [fagsak.saksnummer, behandling, oppdaterProsessStegOgFaktaPanelIUrl],
  );

  const { data: tilbakekrevingKodeverk } = restBehandlingApiHooks.useRestApi(BehandlingApiKeys.TILBAKE_KODEVERK);

  if (!behandling || !tilbakekrevingKodeverk) {
    return <LoadingPanel />;
  }

  return (
    <>
      <BehandlingPaVent behandling={behandling} hentBehandling={hentBehandling} kodeverk={tilbakekrevingKodeverk} />
      <ProsessIndex
        behandling={behandling}
        relasjonsRolleType={fagsak.relasjonsRolleType}
        tilbakekrevingKodeverk={tilbakekrevingKodeverk}
        fpsakKodeverk={fpsakKodeverk}
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
    </>
  );
};

export default BehandlingTilbakekrevingIndex;
