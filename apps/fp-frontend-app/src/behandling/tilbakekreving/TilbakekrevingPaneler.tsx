import React, { useCallback, useMemo } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';

import { BehandlingStatus, BehandlingType } from '@navikt/fp-kodeverk';
import { Behandling, BehandlingAppKontekst, Fagsak } from '@navikt/fp-types';

import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';
import { BehandlingContainer } from '../felles/BehandlingContainer';
import { BehandlingPaVent } from '../felles/modaler/paVent/BehandlingPaVent';
import { FaktaPanelInitProps } from '../felles/typer/faktaPanelInitProps';
import { ProsessPanelInitProps } from '../felles/typer/prosessPanelInitProps';
import { VergeFaktaInitPanel } from '../fellesPaneler/fakta/VergeFaktaInitPanel';
import { FeilutbetalingFaktaInitPanel } from './faktaPaneler/FeilutbetalingFaktaInitPanel';
import { ForeldelseProsessInitPanel } from './prosessPaneler/ForeldelseProsessInitPanel';
import { TilbakekrevingProsessInitPanel } from './prosessPaneler/TilbakekrevingProsessInitPanel';
import { VedtakTilbakekrevingProsessInitPanel } from './prosessPaneler/VedtakTilbakekrevingProsessInitPanel';

interface Props {
  behandling: Behandling;
  fagsak: Fagsak;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  opneSokeside: () => void;
  alleBehandlinger: BehandlingAppKontekst[];
}

const TilbakekrevingPaneler = ({
  behandling,
  fagsak,
  valgtProsessSteg,
  valgtFaktaSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  opneSokeside,
  alleBehandlinger,
}: Props) => {
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
    <>
      <BehandlingPaVent
        key={behandling.versjon}
        behandling={behandling}
        opneSokeside={opneSokeside}
        kodeverk={tilbakekrevingKodeverk}
        erTilbakekreving
      />
      <BehandlingContainer
        behandling={behandling}
        valgtProsessSteg={valgtProsessSteg}
        valgtFaktaSteg={valgtFaktaSteg}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        hentFaktaPaneler={hentFaktaPaneler}
        hentProsessPaneler={hentProsessPaneler}
      />
    </>
  );
};

export default TilbakekrevingPaneler;
