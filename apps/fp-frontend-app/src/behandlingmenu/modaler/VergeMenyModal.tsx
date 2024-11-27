import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { MenyVergeIndex } from '@navikt/fp-sak-meny';
import { Behandling, BehandlingAppKontekst, Fagsak,VergeBehandlingmenyValg } from '@navikt/fp-types';

import { getLocationWithDefaultProsessStegAndFakta, pathToBehandling } from '../../app/paths';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../../data/behandlingContextApi';

interface Props {
  fagsak: Fagsak;
  behandling: BehandlingAppKontekst;
  setBehandling: (behandling: Behandling | undefined) => void;
  lukkModal: () => void;
}

export const VergeMenyModal = ({ fagsak, behandling, setBehandling, lukkModal }: Props) => {
  const vergeMenyvalg = behandling.behandlingTillatteOperasjoner?.vergeBehandlingsmeny;

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

  const { startRequest: fjernVerge } = restBehandlingApiHooks.useRestApiRunner(BehandlingApiKeys.VERGE_FJERN);
  const { startRequest: opprettVerge } = restBehandlingApiHooks.useRestApiRunner(BehandlingApiKeys.VERGE_OPPRETT);

  const fjernVergeFn =
    VergeBehandlingmenyValg.FJERN === vergeMenyvalg
      ? () =>
          fjernVerge({
            behandlingUuid: behandling.uuid,
            behandlingVersjon: behandling.versjon,
          }).then(b => {
            setBehandling(b);
            velgVergePanelEtterAtAksjonspunktErOpprettet();
          })
      : undefined;

  const opprettVergeFn =
    VergeBehandlingmenyValg.OPPRETT === vergeMenyvalg
      ? () =>
          opprettVerge({
            behandlingUuid: behandling.uuid,
            behandlingVersjon: behandling.versjon,
          }).then(b => {
            setBehandling(b);
            velgVergePanelEtterAtAksjonspunktErOpprettet();
          })
      : undefined;

  return <MenyVergeIndex fjernVerge={fjernVergeFn} opprettVerge={opprettVergeFn} lukkModal={lukkModal} />;
};
