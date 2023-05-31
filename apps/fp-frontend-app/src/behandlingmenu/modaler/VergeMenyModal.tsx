import React, { FunctionComponent } from 'react';
import { MenyVergeIndex } from '@navikt/ft-sak-meny';
import { VergeBehandlingmenyValg, Behandling, BehandlingAppKontekst, Fagsak } from '@navikt/fp-types';

import { useLocation, useNavigate } from 'react-router-dom';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../../data/behandlingContextApi';
import { getLocationWithDefaultProsessStegAndFakta, pathToBehandling } from '../../app/paths';

interface OwnProps {
  fagsak: Fagsak;
  behandling: BehandlingAppKontekst;
  setBehandling: (behandling: Behandling | undefined) => void;
  lukkModal: () => void;
}

const VergeMenyModal: FunctionComponent<OwnProps> = ({ fagsak, behandling, setBehandling, lukkModal }) => {
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

export default VergeMenyModal;
