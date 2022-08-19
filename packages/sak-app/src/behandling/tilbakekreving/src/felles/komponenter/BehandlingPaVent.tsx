import React, {
  useState, useMemo, useCallback, FunctionComponent, useEffect,
} from 'react';

import SettPaVentModalIndex from '@fpsak-frontend/modal-sett-pa-vent';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen, KodeverkType } from '@navikt/ft-kodeverk';
import {
  Behandling, Aksjonspunkt, AlleKodeverk, AlleKodeverkTilbakekreving,
} from '@navikt/ft-types';

import { restApiTilbakekrevingHooks, TilbakekrevingBehandlingApiKeys } from '../../data/tilbakekrevingBehandlingApi';

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

  const { data: aksjonspunkter = EMPTY_ARRAY } = restApiTilbakekrevingHooks.useRestApi(TilbakekrevingBehandlingApiKeys.AKSJONSPUNKTER, undefined, {
    updateTriggers: [skalViseModal],
    suspendRequest: !skalViseModal,
  });

  const { startRequest: settPaVent } = restApiTilbakekrevingHooks.useRestApiRunner(TilbakekrevingBehandlingApiKeys.UPDATE_ON_HOLD);

  useEffect(() => {
    setVisModal(behandling.behandlingPaaVent);
  }, [behandling.versjon]);

  const oppdaterPaVentData = useCallback((formData: { ventearsak: string; frist?: string; }) => settPaVent({
    ...formData, behandlingUuid: behandling.uuid, behandlingVersjon: behandling.versjon,
  }).then(() => hentBehandling(false)), [behandling.versjon]);

  const erManueltSattPaVent = useMemo(() => aksjonspunkter.filter((ap) => isAksjonspunktOpen(ap.status))
    .some((ap) => ap.definisjon === AksjonspunktCode.AUTO_MANUELT_SATT_PÅ_VENT), [aksjonspunkter]);

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
