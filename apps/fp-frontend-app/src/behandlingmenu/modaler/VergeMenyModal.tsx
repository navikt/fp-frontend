import { useLocation, useNavigate } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { MenyVergeIndex } from '@navikt/fp-sak-meny';
import { type Behandling, type BehandlingAppKontekst, type Fagsak, VergeBehandlingmenyValg } from '@navikt/fp-types';

import { getLocationWithDefaultProsessStegAndFakta, pathToBehandling } from '../../app/paths';
import { useBehandlingApi } from '../../data/behandlingApi.ts';
import { useBehandlingPollingOperasjoner } from '../../data/polling/useBehandlingPollingOperasjoner';
import { useKodeverk } from '../../data/useKodeverk.tsx';

interface Props {
  fagsak: Fagsak;
  behandlingAppKontekst: BehandlingAppKontekst;
  behandling: Behandling;
  setBehandling: (behandling: Behandling | undefined) => void;
  lukkModal: () => void;
}

export const VergeMenyModal = ({ fagsak, behandlingAppKontekst, behandling, setBehandling, lukkModal }: Props) => {
  const vergeMenyvalg = behandlingAppKontekst.behandlingTillatteOperasjoner?.vergeBehandlingsmeny;
  const alleKodeverk = useKodeverk(behandling?.type);

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
  const behandlingApi = useBehandlingApi(behandling);

  const { data: verge } = useQuery(behandlingApi.verge(behandling));
  return (
    <MenyVergeIndex
      type={VergeBehandlingmenyValg.OPPRETT === vergeMenyvalg ? 'OPPRETT' : 'FJERN'}
      verge={verge}
      opprettVerge={api.opprettVerge}
      fjernVerge={api.fjernVerge}
      lukkModal={lukkModal}
      alleKodeverk={alleKodeverk}
    />
  );
};
