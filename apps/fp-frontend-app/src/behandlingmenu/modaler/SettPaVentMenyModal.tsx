import { useQuery } from '@tanstack/react-query';

import { BehandlingType, KodeverkType } from '@navikt/fp-kodeverk';
import { FormValues } from '@navikt/fp-modal-sett-pa-vent';
import { MenySettPaVentIndex } from '@navikt/fp-sak-meny-sett-pa-vent';
import { BehandlingAppKontekst } from '@navikt/fp-types';

import { BehandlingApiKeys, restBehandlingApiHooks } from '../../data/behandlingContextApi';
import { useFagsakApi } from '../../data/fagsakApi';
import { notEmpty } from '../../data/notEmpty';
import { MenyKodeverk } from '../MenyKodeverk';

interface Props {
  behandling: BehandlingAppKontekst;
  hentOgSettBehandling: () => void;
  lukkModal: () => void;
}

export const SettPaVentMenyModal = ({ behandling, hentOgSettBehandling, lukkModal }: Props) => {
  const api = useFagsakApi();

  const { data: alleFpSakKodeverk } = useQuery(api.kodeverkOptions());
  const { data: alleFpTilbakeKodeverk } = useQuery(api.fptilbake.kodeverkOptions());

  const menyKodeverk = new MenyKodeverk(behandling.type)
    .medFpSakKodeverk(notEmpty(alleFpSakKodeverk))
    .medFpTilbakeKodeverk(notEmpty(alleFpTilbakeKodeverk));

  const { startRequest: settBehandlingPåVent } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.BEHANDLING_ON_HOLD,
  );

  const settBehandlingPåVentOgOppdaterBehandling = (formValues: FormValues) => {
    if (formValues.frist && formValues.ventearsak) {
      settBehandlingPåVent({
        frist: formValues.frist,
        ventearsak: formValues.ventearsak,
        behandlingUuid: behandling?.uuid,
        behandlingVersjon: behandling?.versjon,
      }).then(() => {
        hentOgSettBehandling();
      });
    }
  };

  return (
    <MenySettPaVentIndex
      settBehandlingPaVent={settBehandlingPåVentOgOppdaterBehandling}
      ventearsaker={menyKodeverk.getKodeverkForValgtBehandling(KodeverkType.VENT_AARSAK)}
      lukkModal={lukkModal}
      erTilbakekreving={
        behandling.type === BehandlingType.TILBAKEKREVING ||
        behandling.type === BehandlingType.TILBAKEKREVING_REVURDERING
      }
    />
  );
};
