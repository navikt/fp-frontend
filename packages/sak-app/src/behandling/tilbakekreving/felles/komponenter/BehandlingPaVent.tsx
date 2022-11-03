import React, {
  useState, useMemo, useCallback, FunctionComponent, useEffect,
} from 'react';

import SettPaVentModalIndex from '@fpsak-frontend/modal-sett-pa-vent';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen, KodeverkType } from '@navikt/ft-kodeverk';
import { Behandling } from '@fpsak-frontend/types';
import { AlleKodeverk, AlleKodeverkTilbakekreving } from '@navikt/ft-types';

import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import { restApiTilbakekrevingHooks } from '../../data/tilbakekrevingBehandlingApi';

export type SettPaVentParams = {
  ventearsak: string;
  frist?: string;
  behandlingUuid: string;
  behandlingVersjon: number;
}

interface BehandlingPaVentProps {
  behandling: Behandling;
  kodeverk: AlleKodeverk | AlleKodeverkTilbakekreving;
  hentBehandling: (keepData: boolean) => Promise<any>;
  erTilbakekreving?: boolean;
}

const BehandlingPaVent: FunctionComponent<BehandlingPaVentProps> = ({
  behandling,
  kodeverk,
  hentBehandling,
  erTilbakekreving = false,
}) => {
  const [skalViseModal, setVisModal] = useState(behandling.behandlingPaaVent);
  const skjulModal = useCallback(() => setVisModal(false), []);

  const { startRequest: settPaVent } = restApiTilbakekrevingHooks.useRestApiRunner(BehandlingFellesApiKeys.UPDATE_ON_HOLD);

  useEffect(() => {
    setVisModal(behandling.behandlingPaaVent);
  }, [behandling.versjon]);

  const oppdaterPaVentData = useCallback((formData: { ventearsak: string; frist?: string; }) => settPaVent({
    ...formData, behandlingUuid: behandling.uuid, behandlingVersjon: behandling.versjon,
  }).then(() => hentBehandling(false)), [behandling.versjon]);

  const erManueltSattPaVent = useMemo(() => behandling.aksjonspunkt.filter((ap) => isAksjonspunktOpen(ap.status))
    .some((ap) => ap.definisjon === AksjonspunktCode.AUTO_MANUELT_SATT_PÅ_VENT), [behandling.aksjonspunkt]);

  return (
    <SettPaVentModalIndex
      submitCallback={oppdaterPaVentData}
      cancelEvent={skjulModal}
      frist={behandling.fristBehandlingPaaVent}
      ventearsak={behandling.venteArsakKode}
      hasManualPaVent={erManueltSattPaVent}
      ventearsaker={kodeverk[KodeverkType.VENT_AARSAK]}
      erTilbakekreving={erTilbakekreving}
      showModal={skalViseModal}
    />
  );
};

export default BehandlingPaVent;
