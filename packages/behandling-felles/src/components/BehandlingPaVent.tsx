import React, {
  useState, useMemo, useCallback, FunctionComponent,
} from 'react';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { BehandlingErPaVentModal } from '@fpsak-frontend/fp-felles';

import Behandling from '../types/behandlingTsType';
import Aksjonspunkt from '../types/aksjonspunktTsType';
import SettPaVentParams from '../types/settPaVentParamsTsType';
import Kodeverk from '../types/kodeverkTsType';

interface BehandlingPaVentProps {
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  kodeverk: {[key: string]: Kodeverk[]};
  settPaVent: (params: SettPaVentParams) => Promise<any>;
  hentBehandling: ({ behandlingId: number }, { keepData: boolean }) => Promise<any>;
}

const BehandlingPaVent: FunctionComponent<BehandlingPaVentProps> = ({
  behandling,
  aksjonspunkter,
  kodeverk,
  settPaVent,
  hentBehandling,
}) => {
  const [skalViseModal, setVisModal] = useState(behandling.behandlingPaaVent);
  const skjulModal = useCallback(() => setVisModal(false), []);

  const oppdaterPaVentData = useCallback((formData) => settPaVent({
    ...formData, behandlingId: behandling.id, behandlingVersjon: behandling.versjon,
  }).then(() => hentBehandling({ behandlingId: behandling.id }, { keepData: false })), [behandling.versjon]);

  const erManueltSattPaVent = useMemo(() => aksjonspunkter.filter((ap) => isAksjonspunktOpen(ap.status.kode))
    .some((ap) => ap.definisjon.kode === aksjonspunktCodes.AUTO_MANUELT_SATT_PÅ_VENT), [aksjonspunkter]);

  if (!skalViseModal) {
    return null;
  }

  return (
    <BehandlingErPaVentModal
      showModal
      closeEvent={skjulModal}
      behandlingId={behandling.id}
      fristBehandlingPaaVent={behandling.fristBehandlingPaaVent}
      venteArsakKode={behandling.venteArsakKode}
      handleOnHoldSubmit={oppdaterPaVentData}
      hasManualPaVent={erManueltSattPaVent}
      ventearsaker={kodeverk[kodeverkTyper.VENT_AARSAK]}
    />
  );
};

export default BehandlingPaVent;
