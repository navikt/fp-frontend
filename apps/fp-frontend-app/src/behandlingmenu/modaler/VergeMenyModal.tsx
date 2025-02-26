import { useLocation, useNavigate } from 'react-router-dom';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { MenyVergeIndexV1, MenyVergeIndexV2 } from '@navikt/fp-sak-meny';
import { type Behandling, type BehandlingAppKontekst, type Fagsak, VergeBehandlingmenyValg } from '@navikt/fp-types';

import { getLocationWithDefaultProsessStegAndFakta, pathToBehandling } from '../../app/paths';
import { BehandlingRel, harLenke, useBehandlingApi } from '../../data/behandlingApi.ts';
import { FagsakRel } from '../../data/fagsakApi.ts';
import { useBehandlingPollingOperasjoner } from '../../data/polling/useBehandlingPollingOperasjoner';
import { useKodeverk } from '../../data/useKodeverk.tsx';

interface Props {
  fagsak: Fagsak;
  behandlingAppKontekst: BehandlingAppKontekst;
  behandling: Behandling;
  setBehandling: (behandling: Behandling | undefined) => void;
  lukkModal: () => void;
  hentOgSettBehandling: () => void;
}

export const VergeMenyModal = (props: Props) => {
  if (harLenke(props.behandling, 'VERGE_FJERN_V2') || harLenke(props.behandling, 'VERGE_OPPRETT_V2'))
    return <VergeModal {...props} />;
  return <VergeModalDeprecated {...props} />;
};

const VergeModalDeprecated = ({ fagsak, behandlingAppKontekst, behandling, setBehandling, lukkModal }: Props) => {
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
    <MenyVergeIndexV1
      fjernVerge={VergeBehandlingmenyValg.FJERN === vergeMenyvalg ? api.fjernVergeV1 : undefined}
      opprettVerge={VergeBehandlingmenyValg.OPPRETT === vergeMenyvalg ? api.opprettVergeV1 : undefined}
      lukkModal={lukkModal}
    />
  );
};

export const VergeModal = ({ behandlingAppKontekst, behandling, hentOgSettBehandling, lukkModal }: Props) => {
  const vergeMenyvalg = behandlingAppKontekst.behandlingTillatteOperasjoner?.vergeBehandlingsmeny;
  const alleKodeverk = useKodeverk(behandling.type);
  const queryClient = useQueryClient();
  const onBehandlingSuccess = () => {
    hentOgSettBehandling();
    queryClient.invalidateQueries({
      queryKey: [FagsakRel.FETCH_FAGSAK],
    });
    queryClient.invalidateQueries({
      queryKey: [FagsakRel.FETCH_FAGSAKDATA_FPTILBAKE],
    });
    queryClient.invalidateQueries({
      queryKey: [BehandlingRel.VERGE],
    });
    queryClient.invalidateQueries({
      queryKey: [BehandlingRel.VERGE_HENT],
    });
  };

  const behandlingApi = useBehandlingApi(behandling);
  const { mutate: opprettVergeV2 } = useMutation({
    mutationFn: behandlingApi.verge.opprettVergeV2,
    onSuccess: onBehandlingSuccess,
  });

  const { mutate: fjernVergeV2 } = useMutation({
    mutationFn: behandlingApi.verge.fjernVergeV2,
    onSuccess: onBehandlingSuccess,
  });

  const { data: verge } = useQuery(behandlingApi.verge.hent(behandling));
  return (
    <MenyVergeIndexV2
      type={VergeBehandlingmenyValg.OPPRETT === vergeMenyvalg ? 'OPPRETT' : 'FJERN'}
      verge={verge}
      opprettVerge={opprettVergeV2}
      fjernVerge={fjernVergeV2}
      lukkModal={lukkModal}
      alleKodeverk={alleKodeverk}
    />
  );
};
