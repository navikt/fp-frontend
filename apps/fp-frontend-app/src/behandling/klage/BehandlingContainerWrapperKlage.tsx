import React, { FunctionComponent, useCallback, useMemo } from 'react';

import { Behandling, BehandlingAppKontekst, Fagsak } from '@navikt/fp-types';

import FormKravFamOgPensjonProsessStegInitPanel from './prosessPaneler/FormKravFamOgPensjonProsessStegInitPanel';
import VurderingFamOgPensjonProsessStegInitPanel from './prosessPaneler/VurderingFamOgPensjonProsessStegInitPanel';
import FormKravKlageInstansProsessStegInitPanel from './prosessPaneler/FormKravKlageInstansProsessStegInitPanel';
import VurderingKlageInstansProsessStegInitPanel from './prosessPaneler/VurderingKlageInstansProsessStegInitPanel';
import KlageresultatProsessStegInitPanel from './prosessPaneler/KlageresultatProsessStegInitPanel';
import VergeFaktaInitPanel from '../felles/fakta/paneler/VergeFaktaInitPanel';
import FaktaPanelInitProps from '../felles/typer/faktaPanelInitProps';
import ProsessPanelInitProps from '../felles/typer/prosessPanelInitProps';
import BehandlingContainer from '../felles/BehandlingContainer';

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

const BehandlingContainerWrapperKlage: FunctionComponent<OwnProps> = ({
  behandling,
  fagsak,
  valgtProsessSteg,
  valgtFaktaSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  opneSokeside,
  toggleOppdateringAvFagsakOgBehandling,
  alleBehandlinger,
}) => {
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

  const hentProsessPaneler = useCallback(
    (props: ProsessPanelInitProps) => (
      <>
        <FormKravFamOgPensjonProsessStegInitPanel {...props} alleBehandlinger={fagsakBehandlingerInfo} />
        <VurderingFamOgPensjonProsessStegInitPanel
          {...props}
          fagsak={fagsak}
          opneSokeside={opneSokeside}
          toggleOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
          oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        />
        <FormKravKlageInstansProsessStegInitPanel {...props} alleBehandlinger={fagsakBehandlingerInfo} />
        <VurderingKlageInstansProsessStegInitPanel {...props} fagsak={fagsak} />
        <KlageresultatProsessStegInitPanel
          {...props}
          fagsak={fagsak}
          opneSokeside={opneSokeside}
          toggleOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
        />
      </>
    ),
    [
      fagsakBehandlingerInfo,
      fagsak,
      opneSokeside,
      toggleOppdateringAvFagsakOgBehandling,
      oppdaterProsessStegOgFaktaPanelIUrl,
    ],
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

export default BehandlingContainerWrapperKlage;
