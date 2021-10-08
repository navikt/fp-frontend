import React, {
  useState, useMemo, useCallback, FunctionComponent, useEffect,
} from 'react';

import { RequestApi, RestKey } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import SettPaVentModalIndex from '@fpsak-frontend/modal-sett-pa-vent';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  Behandling, Aksjonspunkt, AlleKodeverk, AlleKodeverkTilbakekreving,
} from '@fpsak-frontend/types';

const EMPTY_ARRAY = [] as Aksjonspunkt[];

export type SettPaVentParams = {
  ventearsak: string;
  frist?: string;
  behandlingUuid: string;
  behandlingVersjon: number;
}

interface BehandlingPaVentProps {
  behandling: Behandling;
  kodeverk: AlleKodeverk | AlleKodeverkTilbakekreving;
  requestApi: RequestApi;
  oppdaterPaVentKey: RestKey<void, SettPaVentParams>;
  aksjonspunktKey: RestKey<Aksjonspunkt[], void>;
  hentBehandling: (keepData: boolean) => Promise<any>;
  erTilbakekreving?: boolean;
}

const BehandlingPaVent: FunctionComponent<BehandlingPaVentProps> = ({
  behandling,
  kodeverk,
  requestApi,
  oppdaterPaVentKey,
  aksjonspunktKey,
  hentBehandling,
  erTilbakekreving = false,
}) => {
  const restApiHooks = RestApiHooks.initHooks(requestApi);

  const [skalViseModal, setVisModal] = useState(behandling.behandlingPaaVent);
  const skjulModal = useCallback(() => setVisModal(false), []);

  const { data: aksjonspunkter = EMPTY_ARRAY } = restApiHooks.useRestApi(aksjonspunktKey, undefined, {
    updateTriggers: [skalViseModal],
    suspendRequest: !skalViseModal,
  });

  const { startRequest: settPaVent } = restApiHooks.useRestApiRunner(oppdaterPaVentKey);

  useEffect(() => {
    setVisModal(behandling.behandlingPaaVent);
  }, [behandling.versjon]);

  const oppdaterPaVentData = useCallback((formData: { ventearsak: string; frist?: string; }) => settPaVent({
    ...formData, behandlingUuid: behandling.uuid, behandlingVersjon: behandling.versjon,
  }).then(() => hentBehandling(false)), [behandling.versjon]);

  const erManueltSattPaVent = useMemo(() => aksjonspunkter.filter((ap) => isAksjonspunktOpen(ap.status.kode))
    .some((ap) => ap.definisjon.kode === aksjonspunktCodes.AUTO_MANUELT_SATT_PÅ_VENT), [aksjonspunkter]);

  return (
    <SettPaVentModalIndex
      submitCallback={oppdaterPaVentData}
      cancelEvent={skjulModal}
      frist={behandling.fristBehandlingPaaVent}
      ventearsak={behandling.venteArsakKode}
      hasManualPaVent={erManueltSattPaVent}
      ventearsaker={kodeverk[kodeverkTyper.VENT_AARSAK]}
      erTilbakekreving={erTilbakekreving}
      showModal={skalViseModal}
    />
  );
};

export default BehandlingPaVent;
