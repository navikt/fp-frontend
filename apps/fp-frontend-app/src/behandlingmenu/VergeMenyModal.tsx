import React, { FunctionComponent, useCallback } from 'react';
import { MenyVergeIndex } from '@navikt/ft-sak-meny';
import { VergeBehandlingmenyValg, Behandling } from '@navikt/fp-types';

import FagsakData from '../fagsak/FagsakData';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../data/behandlingContextApi';

const skalLageVergeFn = (
  vergeType: VergeBehandlingmenyValg,
  vergeMenyvalg?: VergeBehandlingmenyValg,
  behandlingUuid?: string,
  behandlingVersjon?: number,
): boolean => vergeMenyvalg === vergeType && !!behandlingUuid && !!behandlingVersjon;

interface OwnProps {
  fagsakData: FagsakData;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  setBehandling: (behandling: Behandling | undefined) => void;
  setValgtModal: (index: number | undefined) => void;
}

const VergeMenyModal: FunctionComponent<OwnProps> = ({ fagsakData, behandlingUuid, setBehandling, setValgtModal }) => {
  const behandling = fagsakData.getBehandling(behandlingUuid);

  const vergeMenyvalg = behandling?.behandlingTillatteOperasjoner?.vergeBehandlingsmeny;
  /*
    const fagsak = fagsakData.getFagsak();
   const navigate = useNavigate();
  const location = useLocation();
  const setLocation = () => {
    navigate(
      getLocationWithDefaultProsessStegAndFakta({
        ...location,
        pathname: pathToBehandling(fagsak.saksnummer, behandlingUuid),
      }),
    );
  }; */

  const { startRequest: fjernVerge } = restBehandlingApiHooks.useRestApiRunner(BehandlingApiKeys.VERGE_FJERN);
  const { startRequest: opprettVerge } = restBehandlingApiHooks.useRestApiRunner(BehandlingApiKeys.VERGE_OPPRETT);

  const skalLageFjernVergeFunksjon = skalLageVergeFn(
    VergeBehandlingmenyValg.FJERN,
    vergeMenyvalg,
    behandlingUuid,
    behandling?.versjon,
  );
  const fjernVergeFn = skalLageFjernVergeFunksjon
    ? () =>
        fjernVerge({
          behandlingUuid: behandling?.uuid,
          behandlingVersjon: behandling?.versjon,
        }).then(b => {
          setBehandling(b);
          // setLocation();
        })
    : undefined;

  const skalLageOpprettVergeFunksjon = skalLageVergeFn(
    VergeBehandlingmenyValg.OPPRETT,
    vergeMenyvalg,
    behandlingUuid,
    behandling?.versjon,
  );
  const opprettVergeFn = skalLageOpprettVergeFunksjon
    ? () =>
        opprettVerge({
          behandlingUuid: behandling?.uuid,
          behandlingVersjon: behandling?.versjon,
        }).then(b => {
          setBehandling(b);
          // setLocation();
        })
    : undefined;

  const lukkModal = useCallback(() => setValgtModal(undefined), []);

  return <MenyVergeIndex fjernVerge={fjernVergeFn} opprettVerge={opprettVergeFn} lukkModal={lukkModal} />;
};

export default VergeMenyModal;
