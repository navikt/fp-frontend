import { useMutation, useQuery } from '@tanstack/react-query';

import { BehandlingType, KodeverkType } from '@navikt/fp-kodeverk';
import { MenySettPaVentIndex } from '@navikt/fp-sak-meny-sett-pa-vent';
import type { Behandling } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { useBehandlingApi } from '../../data/behandlingApi';
import { useFagsakApi } from '../../data/fagsakApi';
import { MenyKodeverk } from '../MenyKodeverk';

interface Props {
  behandling: Behandling;
  hentOgSettBehandling: () => void;
  lukkModal: () => void;
}

export const SettPaVentMenyModal = ({ behandling, hentOgSettBehandling, lukkModal }: Props) => {
  const fagsakApi = useFagsakApi();
  const behandlingApi = useBehandlingApi(behandling);

  const { data: alleFpSakKodeverk } = useQuery(fagsakApi.kodeverkOptions());
  const { data: alleFpTilbakeKodeverk } = useQuery(fagsakApi.fptilbake.kodeverkOptions());

  const { mutate: settBehandlingPåVent } = useMutation({
    mutationFn: (values: { frist: string; ventearsak: string }) =>
      behandlingApi.settBehandlingPåVent({
        frist: values.frist,
        ventearsak: values.ventearsak,
        behandlingUuid: behandling.uuid,
        behandlingVersjon: behandling.versjon,
      }),
    onSuccess: () => hentOgSettBehandling(),
  });

  const menyKodeverk = new MenyKodeverk(behandling.type)
    .medFpSakKodeverk(notEmpty(alleFpSakKodeverk))
    .medFpTilbakeKodeverk(notEmpty(alleFpTilbakeKodeverk));

  return (
    <MenySettPaVentIndex
      settBehandlingPaVent={settBehandlingPåVent}
      ventearsaker={menyKodeverk.getKodeverkForValgtBehandling(KodeverkType.VENT_AARSAK)}
      lukkModal={lukkModal}
      erTilbakekreving={
        behandling.type === BehandlingType.TILBAKEKREVING ||
        behandling.type === BehandlingType.TILBAKEKREVING_REVURDERING
      }
    />
  );
};
