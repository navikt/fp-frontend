import React, { FunctionComponent, useCallback, useMemo } from 'react';

import { Behandling, BehandlingAppKontekst, Fagsak } from '@navikt/fp-types';

import { BehandlingStatus, BehandlingType } from '@navikt/ft-kodeverk';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import VergeFaktaInitPanel from '../fellesPaneler/fakta/VergeFaktaInitPanel';
import FaktaPanelInitProps from '../felles/typer/faktaPanelInitProps';
import ProsessPanelInitProps from '../felles/typer/prosessPanelInitProps';
import BehandlingContainer from '../felles/BehandlingContainer';
import ForeldelseProsessInitPanel from './prosessPaneler/ForeldelseProsessInitPanel';
import TilbakekrevingProsessInitPanel from './prosessPaneler/TilbakekrevingProsessInitPanel';
import VedtakTilbakekrevingProsessInitPanel from './prosessPaneler/VedtakTilbakekrevingProsessInitPanel';
import FeilutbetalingFaktaInitPanel from './faktaPaneler/FeilutbetalingFaktaInitPanel';
import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';

interface OwnProps {
  behandling: Behandling;
  fagsak: Fagsak;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  opneSokeside: () => void;
  alleBehandlinger: BehandlingAppKontekst[];
}

const TilbakekrevingPaneler: FunctionComponent<OwnProps> = ({
  behandling,
  fagsak,
  valgtProsessSteg,
  valgtFaktaSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  opneSokeside,
  alleBehandlinger,
}) => {
  const { data: tilbakekrevingKodeverk } = restFagsakApiHooks.useRestApi(FagsakApiKeys.KODEVERK_FPTILBAKE);

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

  const hentFaktaPaneler = useCallback(
    (props: FaktaPanelInitProps) => {
      if (tilbakekrevingKodeverk) {
        return (
          <>
            <FeilutbetalingFaktaInitPanel
              tilbakekrevingKodeverk={tilbakekrevingKodeverk}
              fagsakYtelseTypeKode={fagsak.fagsakYtelseType}
              {...props}
            />
            <VergeFaktaInitPanel {...props} />
          </>
        );
      }
      return <>placeholder</>;
    },
    [tilbakekrevingKodeverk, fagsak],
  );

  const hentProsessPaneler = useCallback(
    (props: ProsessPanelInitProps) => {
      if (tilbakekrevingKodeverk) {
        return (
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
        );
      }
      return <>placeholder</>;
    },
    [tilbakekrevingKodeverk, harApenRevurdering, fagsak, opneSokeside, oppdaterProsessStegOgFaktaPanelIUrl],
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

export default TilbakekrevingPaneler;
