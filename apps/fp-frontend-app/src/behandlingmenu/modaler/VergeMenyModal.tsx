import { useLocation, useNavigate } from 'react-router-dom';

import { MenyVergeIndex } from '@navikt/fp-sak-meny';
import { Behandling, BehandlingAppKontekst, Fagsak, VergeBehandlingmenyValg } from '@navikt/fp-types';

import { getLocationWithDefaultProsessStegAndFakta, pathToBehandling } from '../../app/paths';
import { useBehandlingPollingOperasjoner } from '../../data/polling/useBehandlingPollingOperasjoner';

interface Props {
  fagsak: Fagsak;
  behandlingAppKontekst: BehandlingAppKontekst;
  behandling: Behandling;
  setBehandling: (behandling: Behandling | undefined) => void;
  lukkModal: () => void;
}

export const VergeMenyModal = ({ fagsak, behandlingAppKontekst, behandling, setBehandling, lukkModal }: Props) => {
  const vergeMenyvalg = behandlingAppKontekst.behandlingTillatteOperasjoner?.vergeBehandlingsmeny;

  const navigate = useNavigate();
  const location = useLocation();
  const velgVergePanelEtterAtAksjonspunktErOpprettet = () => {
    navigate(
      getLocationWithDefaultProsessStegAndFakta({
        ...location,
        pathname: pathToBehandling(fagsak.saksnummer, behandling.uuid),
      }),
    );
  };

  const api = useBehandlingPollingOperasjoner(behandling, (b: Behandling) => {
    setBehandling(b);
    velgVergePanelEtterAtAksjonspunktErOpprettet();
  });

  return (
    <MenyVergeIndex
      fjernVerge={VergeBehandlingmenyValg.FJERN === vergeMenyvalg ? api.fjernVerge : undefined}
      opprettVerge={VergeBehandlingmenyValg.OPPRETT === vergeMenyvalg ? api.opprettVerge : undefined}
      lukkModal={lukkModal}
    />
  );
};
