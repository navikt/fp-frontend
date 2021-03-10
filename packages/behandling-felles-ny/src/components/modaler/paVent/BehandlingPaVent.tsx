import React, {
  useState, useMemo, useCallback, FunctionComponent, useEffect,
} from 'react';

import { AbstractRequestApi } from '@fpsak-frontend/rest-api';
import { RestApiHooks, RestApiState } from '@fpsak-frontend/rest-api-hooks';
import SettPaVentModalIndex from '@fpsak-frontend/modal-sett-pa-vent';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { Behandling, Aksjonspunkt, KodeverkMedNavn } from '@fpsak-frontend/types';

const EMPTY_ARRAY = [];

interface SettPaVentParams {
  formData: {
    ventearsak: string;
    frist?: string;
  };
  behandlingId: number;
  behandlingVersjon: number;
}

interface BehandlingPaVentProps {
  behandling: Behandling;
  kodeverk: {[key: string]: KodeverkMedNavn[]};
  requestApi: AbstractRequestApi;
  oppdaterPaVentKey: string;
  aksjonspunktKey: string;
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

  const { data: aksjonspunkter = EMPTY_ARRAY, state: aksjonspunkterState } = restApiHooks.useRestApi<Aksjonspunkt[]>(aksjonspunktKey, {}, {
    updateTriggers: [skalViseModal],
    suspendRequest: !skalViseModal,
  });

  const { startRequest: settPaVent } = restApiHooks.useRestApiRunner<SettPaVentParams>(oppdaterPaVentKey);

  useEffect(() => {
    setVisModal(behandling.behandlingPaaVent);
  }, [behandling.versjon]);

  const oppdaterPaVentData = useCallback((formData) => settPaVent({
    ...formData, behandlingId: behandling.id, behandlingVersjon: behandling.versjon,
  }).then(() => hentBehandling(false)), [behandling.versjon]);

  const erManueltSattPaVent = useMemo(() => aksjonspunkter.filter((ap) => isAksjonspunktOpen(ap.status.kode))
    .some((ap) => ap.definisjon.kode === aksjonspunktCodes.AUTO_MANUELT_SATT_PÅ_VENT), [aksjonspunkter]);

  if (!skalViseModal || aksjonspunkterState !== RestApiState.SUCCESS) {
    return null;
  }

  return (
    <SettPaVentModalIndex
      submitCallback={oppdaterPaVentData}
      cancelEvent={skjulModal}
      frist={behandling.fristBehandlingPaaVent}
      ventearsak={behandling.venteArsakKode}
      hasManualPaVent={erManueltSattPaVent}
      ventearsaker={kodeverk[kodeverkTyper.VENT_AARSAK]}
      erTilbakekreving={erTilbakekreving}
      showModal
    />
  );
};

export default BehandlingPaVent;
