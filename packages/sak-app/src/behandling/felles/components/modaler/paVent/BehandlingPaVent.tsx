import React, {
  useState, useMemo, useCallback, FunctionComponent, useEffect,
} from 'react';
import { KodeverkType, isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import {
  Behandling, Aksjonspunkt, AlleKodeverk, AlleKodeverkTilbakekreving,
} from '@navikt/ft-types';

import { RequestApi } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import SettPaVentModalIndex from '@fpsak-frontend/modal-sett-pa-vent';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { BehandlingFellesApiKeys } from '../../../data/behandlingFellesApi';

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
  hentBehandling: (keepData: boolean) => Promise<any>;
  erTilbakekreving?: boolean;
  skalIkkeViseModal?: boolean;
}

const BehandlingPaVent: FunctionComponent<BehandlingPaVentProps> = ({
  behandling,
  kodeverk,
  requestApi,
  hentBehandling,
  erTilbakekreving = false,
  skalIkkeViseModal = false,
}) => {
  const restApiHooks = RestApiHooks.initHooks(requestApi);

  const [skalViseModal, setVisModal] = useState(!skalIkkeViseModal && behandling.behandlingPaaVent);
  const skjulModal = useCallback(() => setVisModal(false), []);

  const { data: aksjonspunkter = EMPTY_ARRAY } = restApiHooks.useRestApi(BehandlingFellesApiKeys.AKSJONSPUNKTER, undefined, {
    updateTriggers: [skalViseModal],
    suspendRequest: !skalViseModal,
  });

  const { startRequest: settPaVent } = restApiHooks.useRestApiRunner(BehandlingFellesApiKeys.UPDATE_ON_HOLD);

  useEffect(() => {
    if (!skalIkkeViseModal) {
      setVisModal(behandling.behandlingPaaVent);
    }
  }, [behandling.versjon, skalIkkeViseModal]);

  const oppdaterPaVentData = useCallback((formData: { ventearsak: string; frist?: string; }) => settPaVent({
    ...formData, behandlingUuid: behandling.uuid, behandlingVersjon: behandling.versjon,
  }).then(() => hentBehandling(false)), [behandling.versjon]);

  const erManueltSattPaVent = useMemo(() => aksjonspunkter.filter((ap) => isAksjonspunktOpen(ap.status))
    .some((ap) => ap.definisjon === aksjonspunktCodes.AUTO_MANUELT_SATT_PÅ_VENT), [aksjonspunkter]);

  return (
    <SettPaVentModalIndex
      submitCallback={oppdaterPaVentData}
      cancelEvent={skjulModal}
      frist={behandling.fristBehandlingPåVent}
      ventearsak={behandling.venteArsakKode}
      hasManualPaVent={erManueltSattPaVent}
      ventearsaker={kodeverk[KodeverkType.VENT_AARSAK]}
      erTilbakekreving={erTilbakekreving}
      showModal={skalViseModal}
    />
  );
};

export default BehandlingPaVent;
