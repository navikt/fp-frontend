import React, {
  useState, useMemo, useCallback, FunctionComponent, useEffect,
} from 'react';
import { KodeverkType, isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import { AlleKodeverk, AlleKodeverkTilbakekreving } from '@navikt/ft-types';

import { RequestApi } from '@navikt/fp-rest-api';
import { Behandling } from '@navikt/fp-types';
import { RestApiHooks } from '@navikt/fp-rest-api-hooks';
import SettPaVentModalIndex from '@navikt/fp-modal-sett-pa-vent';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { BehandlingFellesApiKeys } from '../../data/behandlingFellesApi';

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

  const { startRequest: settPaVent } = restApiHooks.useRestApiRunner(BehandlingFellesApiKeys.UPDATE_ON_HOLD);

  useEffect(() => {
    if (!skalIkkeViseModal) {
      setVisModal(behandling.behandlingPaaVent);
    }
  }, [behandling.versjon, skalIkkeViseModal]);

  const oppdaterPaVentData = useCallback((formData: { ventearsak: string; frist?: string; }) => settPaVent({
    ...formData, behandlingUuid: behandling.uuid, behandlingVersjon: behandling.versjon,
  }).then(() => hentBehandling(false)), [behandling.versjon]);

  const erManueltSattPaVent = useMemo(() => behandling.aksjonspunkt.filter((ap) => isAksjonspunktOpen(ap.status))
    .some((ap) => ap.definisjon === AksjonspunktCode.AUTO_MANUELT_SATT_PÅ_VENT), [behandling.aksjonspunkt]);

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
