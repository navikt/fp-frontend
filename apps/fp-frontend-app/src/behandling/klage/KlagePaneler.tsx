import React, { useCallback, useMemo } from 'react';

import { Behandling, BehandlingAppKontekst, Fagsak } from '@navikt/fp-types';

import { BehandlingContainer } from '../felles/BehandlingContainer';
import { FaktaPanelInitProps } from '../felles/typer/faktaPanelInitProps';
import { ProsessPanelInitProps } from '../felles/typer/prosessPanelInitProps';
import { VergeFaktaInitPanel } from '../fellesPaneler/fakta/VergeFaktaInitPanel';
import { FormKravFamOgPensjonProsessStegInitPanel } from './prosessPaneler/FormKravFamOgPensjonProsessStegInitPanel';
import { FormKravKlageInstansProsessStegInitPanel } from './prosessPaneler/FormKravKlageInstansProsessStegInitPanel';
import { KlageresultatProsessStegInitPanel } from './prosessPaneler/KlageresultatProsessStegInitPanel';
import { VurderingFamOgPensjonProsessStegInitPanel } from './prosessPaneler/VurderingFamOgPensjonProsessStegInitPanel';
import { VurderingKlageInstansProsessStegInitPanel } from './prosessPaneler/VurderingKlageInstansProsessStegInitPanel';

interface Props {
  behandling: Behandling;
  fagsak: Fagsak;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  opneSokeside: () => void;
  setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void;
  alleBehandlinger: BehandlingAppKontekst[];
  hentOgSettBehandling: (keepData?: boolean) => void;
}

const KlagePaneler = ({
  behandling,
  fagsak,
  valgtProsessSteg,
  valgtFaktaSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  opneSokeside,
  setSkalOppdatereEtterBekreftelseAvAp,
  alleBehandlinger,
  hentOgSettBehandling,
}: Props) => {
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
        <FormKravFamOgPensjonProsessStegInitPanel
          {...props}
          alleBehandlinger={fagsakBehandlingerInfo}
          hentOgSettBehandling={hentOgSettBehandling}
        />
        <VurderingFamOgPensjonProsessStegInitPanel
          {...props}
          fagsak={fagsak}
          opneSokeside={opneSokeside}
          setSkalOppdatereEtterBekreftelseAvAp={setSkalOppdatereEtterBekreftelseAvAp}
          oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
          hentOgSettBehandling={hentOgSettBehandling}
        />
        <FormKravKlageInstansProsessStegInitPanel
          {...props}
          alleBehandlinger={fagsakBehandlingerInfo}
          hentOgSettBehandling={hentOgSettBehandling}
        />
        <VurderingKlageInstansProsessStegInitPanel
          {...props}
          fagsak={fagsak}
          hentOgSettBehandling={hentOgSettBehandling}
        />
        <KlageresultatProsessStegInitPanel
          {...props}
          fagsak={fagsak}
          opneSokeside={opneSokeside}
          setSkalOppdatereEtterBekreftelseAvAp={setSkalOppdatereEtterBekreftelseAvAp}
        />
      </>
    ),
    [
      fagsakBehandlingerInfo,
      fagsak,
      opneSokeside,
      setSkalOppdatereEtterBekreftelseAvAp,
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

export default KlagePaneler;
