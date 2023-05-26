import React, { FunctionComponent, useCallback, useMemo } from 'react';

import { Behandling, BehandlingAppKontekst } from '@navikt/fp-types';

import VergeFaktaInitPanel from '../fellesPaneler/fakta/VergeFaktaInitPanel';
import FaktaPanelInitProps from '../felles/typer/faktaPanelInitProps';
import ProsessPanelInitProps from '../felles/typer/prosessPanelInitProps';
import BehandlingContainer from '../felles/BehandlingContainer';
import AnkeBehandlingProsessStegInitPanel from './prosessPaneler/AnkeBehandlingProsessStegInitPanel';
import AnkeResultatProsessStegInitPanel from './prosessPaneler/AnkeResultatProsessStegInitPanel';
import AnkeTrygderettsbehandlingProsessStegInitPanel from './prosessPaneler/AnkeTrygderettsbehandlingProsessStegInitPanel';

interface OwnProps {
  behandling: Behandling;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  alleBehandlinger: BehandlingAppKontekst[];
}

const AnkePaneler: FunctionComponent<OwnProps> = ({
  behandling,
  valgtProsessSteg,
  valgtFaktaSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  alleBehandlinger,
}) => {
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

  const hentFaktaPaneler = useCallback((props: FaktaPanelInitProps) => <VergeFaktaInitPanel {...props} />, []);

  const hentProsessPaneler = useCallback(
    (props: ProsessPanelInitProps) => (
      <>
        <AnkeBehandlingProsessStegInitPanel {...props} alleBehandlinger={fagsakBehandlingerInfo} />
        <AnkeResultatProsessStegInitPanel {...props} />
        <AnkeTrygderettsbehandlingProsessStegInitPanel {...props} />
      </>
    ),
    [],
  );

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

export default AnkePaneler;
