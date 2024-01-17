import React, { FunctionComponent, useCallback } from 'react';
import { behandlingType as BehandlingType, KodeverkType } from '@navikt/fp-kodeverk';
import { FormValues } from '@navikt/fp-modal-sett-pa-vent';

import { MenySettPaVentIndex } from '@navikt/fp-sak-meny-sett-pa-vent';
import { BehandlingAppKontekst } from '@navikt/fp-types';

import { FagsakApiKeys, useFagsakGlobalStateRestApiData } from '../../data/fagsakContextApi';
import MenyKodeverk from '../MenyKodeverk';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../../data/behandlingContextApi';

interface OwnProps {
  behandling: BehandlingAppKontekst;
  hentOgSettBehandling: () => void;
  lukkModal: () => void;
}

const SettPaVentMenyModal: FunctionComponent<OwnProps> = ({ behandling, hentOgSettBehandling, lukkModal }) => {
  const alleFpSakKodeverk = useFagsakGlobalStateRestApiData(FagsakApiKeys.KODEVERK);
  const alleFpTilbakeKodeverk = useFagsakGlobalStateRestApiData(FagsakApiKeys.KODEVERK_FPTILBAKE);
  const menyKodeverk = new MenyKodeverk(behandling.type)
    .medFpSakKodeverk(alleFpSakKodeverk)
    .medFpTilbakeKodeverk(alleFpTilbakeKodeverk);

  const { startRequest: settBehandlingPåVent } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.BEHANDLING_ON_HOLD,
  );

  const settBehandlingPåVentOgOppdaterBehandling = useCallback(
    (formValues: FormValues) => {
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
    },
    [behandling],
  );

  return (
    <MenySettPaVentIndex
      behandlingVersjon={behandling.versjon}
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

export default SettPaVentMenyModal;
