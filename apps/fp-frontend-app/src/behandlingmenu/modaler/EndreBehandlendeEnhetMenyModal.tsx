import React, { FunctionComponent, useCallback } from 'react';
import { MenyEndreBehandlendeEnhetIndex } from '@navikt/fp-sak-meny';
import { BehandlingAppKontekst } from '@navikt/fp-types';

import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../../data/behandlingContextApi';

interface OwnProps {
  behandling: BehandlingAppKontekst;
  hentOgSettBehandling: () => void;
  lukkModal: () => void;
}

const EndreBehandlendeEnhetMenyModal: FunctionComponent<OwnProps> = ({
  behandling,
  hentOgSettBehandling,
  lukkModal,
}) => {
  const initFetchData = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.INIT_FETCH);

  const { startRequest: nyBehandlendeEnhet } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET,
  );

  const endreBehandlendeEnhet = useCallback(
    (formValues: { enhetNavn: string; enhetId: string; begrunnelse: string }) => {
      nyBehandlendeEnhet({
        ...formValues,
        behandlingUuid: behandling?.uuid,
        behandlingVersjon: behandling?.versjon,
      }).then(() => {
        hentOgSettBehandling();
      });
    },
    [behandling],
  );

  return (
    <MenyEndreBehandlendeEnhetIndex
      behandlingVersjon={behandling?.versjon}
      behandlendeEnhetId={behandling?.behandlendeEnhetId}
      behandlendeEnhetNavn={behandling?.behandlendeEnhetNavn}
      nyBehandlendeEnhet={endreBehandlendeEnhet}
      behandlendeEnheter={initFetchData.behandlendeEnheter}
      lukkModal={lukkModal}
    />
  );
};

export default EndreBehandlendeEnhetMenyModal;
