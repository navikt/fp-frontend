import { useMutation, useQuery } from '@tanstack/react-query';

import { MenyEndreBehandlendeEnhetIndex } from '@navikt/fp-sak-meny';
import type { Behandling } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { useBehandlingApi } from '../../data/behandlingApi';
import { initFetchOptions } from '../../data/fagsakApi';

interface Props {
  behandling: Behandling;
  hentOgSettBehandling: () => void;
  lukkModal: () => void;
}

export const EndreBehandlendeEnhetMenyModal = ({ behandling, hentOgSettBehandling, lukkModal }: Props) => {
  const initFetchQuery = useQuery(initFetchOptions());

  const api = useBehandlingApi(behandling);
  const { mutate: endreBehandlendeEnhet } = useMutation({
    mutationFn: (values: { enhetNavn: string; enhetId: string; begrunnelse: string }) =>
      api.endreBehandlendeEnhet({
        ...values,
        behandlingUuid: behandling.uuid,
        behandlingVersjon: behandling.versjon,
      }),
    onSuccess: () => hentOgSettBehandling(),
  });

  return (
    <MenyEndreBehandlendeEnhetIndex
      behandlendeEnhetId={behandling.behandlendeEnhetId}
      behandlendeEnhetNavn={behandling.behandlendeEnhetNavn}
      nyBehandlendeEnhet={endreBehandlendeEnhet}
      behandlendeEnheter={notEmpty(initFetchQuery.data).behandlendeEnheter}
      lukkModal={lukkModal}
    />
  );
};
