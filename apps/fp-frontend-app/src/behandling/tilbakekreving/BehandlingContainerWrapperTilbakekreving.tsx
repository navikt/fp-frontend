import React, { FunctionComponent, useCallback, useMemo } from 'react';

import { Behandling, BehandlingAppKontekst, Fagsak } from '@navikt/fp-types';

import { BehandlingStatus, BehandlingType } from '@navikt/ft-kodeverk';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import VergeFaktaInitPanel from '../felles/fakta/paneler/VergeFaktaInitPanel';
import FaktaPanelInitProps from '../felles/typer/faktaPanelInitProps';
import ProsessPanelInitProps from '../felles/typer/prosessPanelInitProps';
import BehandlingContainer from '../felles/BehandlingContainer';
import ForeldelseProsessInitPanel from './prosessPaneler/ForeldelseProsessInitPanel';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../../data/behandlingContextApi';
import TilbakekrevingProsessInitPanel from './prosessPaneler/TilbakekrevingProsessInitPanel';
import VedtakTilbakekrevingProsessInitPanel from './prosessPaneler/VedtakTilbakekrevingProsessInitPanel';

interface OwnProps {
  behandling: Behandling;
  fagsak: Fagsak;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  opneSokeside: () => void;
  toggleOppdateringAvFagsakOgBehandling: (skalHenteFagsak: boolean) => void;
  alleBehandlinger: BehandlingAppKontekst[];
}

const BehandlingContainerWrapperTilbakekreving: FunctionComponent<OwnProps> = ({
  behandling,
  fagsak,
  valgtProsessSteg,
  valgtFaktaSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  opneSokeside,
  toggleOppdateringAvFagsakOgBehandling,
  alleBehandlinger,
}) => {
  const { data: tilbakekrevingKodeverk } = restBehandlingApiHooks.useRestApi(BehandlingApiKeys.TILBAKE_KODEVERK);

  const hentFaktaPaneler = useCallback((props: FaktaPanelInitProps) => <VergeFaktaInitPanel {...props} />, []);

  const fagsakBehandlingerInfo = useMemo(
    () =>
      alleBehandlinger
        .filter(b => !b.behandlingHenlagt)
        .map(b => ({
          uuid: b.uuid,
          type: b.type,
          status: b.status,
          opprettet: b.opprettet,
          avsluttet: b.avsluttet,
          resultatType: b.behandlingsresultat?.type,
        })),
    [alleBehandlinger],
  );

  const harApenRevurdering = fagsakBehandlingerInfo.some(
    b => b.type === BehandlingType.REVURDERING && b.status !== BehandlingStatus.AVSLUTTET,
  );

  const hentProsessPaneler = useCallback(
    (props: ProsessPanelInitProps) => (
      <>
        <ForeldelseProsessInitPanel
          {...props}
          relasjonsRolleType={fagsak.relasjonsRolleType}
          tilbakekrevingKodeverk={tilbakekrevingKodeverk}
        />
        <TilbakekrevingProsessInitPanel
          {...props}
          relasjonsRolleType={fagsak.relasjonsRolleType}
          tilbakekrevingKodeverk={tilbakekrevingKodeverk}
        />
        <VedtakTilbakekrevingProsessInitPanel
          {...props}
          harApenRevurdering={harApenRevurdering}
          opneSokeside={opneSokeside}
          tilbakekrevingKodeverk={tilbakekrevingKodeverk}
        />
      </>
    ),
    [
      tilbakekrevingKodeverk,
      harApenRevurdering,
      fagsak,
      opneSokeside,
      toggleOppdateringAvFagsakOgBehandling,
      oppdaterProsessStegOgFaktaPanelIUrl,
    ],
  );

  if (!tilbakekrevingKodeverk) {
    return <LoadingPanel />;
  }

  return (
    <BehandlingContainer
      behandling={behandling}
      valgtProsessSteg={valgtProsessSteg}
      valgtFaktaSteg={valgtFaktaSteg}
      oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
      hentFaktaPaneler={hentFaktaPaneler}
      hentProsessPaneler={hentProsessPaneler}
    />
  );
};

export default BehandlingContainerWrapperTilbakekreving;
