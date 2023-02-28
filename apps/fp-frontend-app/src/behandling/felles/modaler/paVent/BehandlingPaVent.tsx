import React, {
  useState, useMemo, useCallback, FunctionComponent, useEffect,
} from 'react';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';

import { AlleKodeverk, AlleKodeverkTilbakekreving, Behandling } from '@navikt/fp-types';
import { RequestApi } from '@navikt/fp-rest-api';
import { RestApiHooks } from '@navikt/fp-rest-api-hooks';
import { SettPaVentModalIndex } from '@navikt/fp-modal-sett-pa-vent';
import { AksjonspunktCode, KodeverkType } from '@navikt/fp-kodeverk';
import { BehandlingFellesApiKeys } from '../../data/behandlingFellesApi';

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
