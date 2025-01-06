import { useQuery } from '@tanstack/react-query';

import { MenyEndreBehandlendeEnhetIndex } from '@navikt/fp-sak-meny';
import { BehandlingAppKontekst } from '@navikt/fp-types';

import { BehandlingApiKeys, restBehandlingApiHooks } from '../../data/behandlingContextApi';
import { initFetchOptions } from '../../data/fagsakApi';
import { notEmpty } from '../../data/notEmpty';

interface Props {
  behandling: BehandlingAppKontekst;
  hentOgSettBehandling: () => void;
  lukkModal: () => void;
}

export const EndreBehandlendeEnhetMenyModal = ({ behandling, hentOgSettBehandling, lukkModal }: Props) => {
  const initFetchQuery = useQuery(initFetchOptions());

  const { startRequest: nyBehandlendeEnhet } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET,
  );

  const endreBehandlendeEnhet = (formValues: { enhetNavn: string; enhetId: string; begrunnelse: string }) => {
    nyBehandlendeEnhet({
      ...formValues,
      behandlingUuid: behandling?.uuid,
      behandlingVersjon: behandling?.versjon,
    }).then(() => {
      hentOgSettBehandling();
    });
  };

  return (
    <MenyEndreBehandlendeEnhetIndex
      behandlingVersjon={behandling?.versjon}
      behandlendeEnhetId={behandling?.behandlendeEnhetId}
      behandlendeEnhetNavn={behandling?.behandlendeEnhetNavn}
      nyBehandlendeEnhet={endreBehandlendeEnhet}
      behandlendeEnheter={notEmpty(initFetchQuery.data).behandlendeEnheter}
      lukkModal={lukkModal}
    />
  );
};
