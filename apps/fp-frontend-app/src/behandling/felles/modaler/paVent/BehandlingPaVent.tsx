import React, { useState, useMemo, useCallback, FunctionComponent, useEffect } from 'react';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';

import { AlleKodeverk, AlleKodeverkTilbakekreving, Behandling } from '@navikt/fp-types';
import { SettPaVentModalIndex, FormValues } from '@navikt/fp-modal-sett-pa-vent';
import { AksjonspunktCode, KodeverkType } from '@navikt/fp-kodeverk';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../../../../data/behandlingContextApi';

interface BehandlingPaVentProps {
  behandling: Behandling;
  kodeverk: AlleKodeverk | AlleKodeverkTilbakekreving;
  setBehandling: (behandling: Behandling) => void;
  erTilbakekreving?: boolean;
  skalIkkeViseModal?: boolean;
}

const BehandlingPaVent: FunctionComponent<BehandlingPaVentProps> = ({
  behandling,
  kodeverk,
  setBehandling,
  erTilbakekreving = false,
  skalIkkeViseModal = false,
}) => {
  const [skalViseModal, setVisModal] = useState(!skalIkkeViseModal && behandling.behandlingPaaVent);
  const skjulModal = useCallback(() => setVisModal(false), []);

  const { startRequest: settPaVent } = restBehandlingApiHooks.useRestApiRunner(BehandlingApiKeys.UPDATE_ON_HOLD);

  useEffect(() => {
    if (!skalIkkeViseModal) {
      setVisModal(behandling.behandlingPaaVent);
    }
  }, [behandling.versjon, skalIkkeViseModal]);

  const oppdaterPaVentData = useCallback(
    (formData: FormValues) =>
      settPaVent({
        ...formData,
        behandlingUuid: behandling.uuid,
        behandlingVersjon: behandling.versjon,
      }).then(b => {
        if (b) {
          setBehandling(b);
        }
      }),
    [behandling.versjon],
  );

  const erManueltSattPaVent = useMemo(
    () =>
      behandling.aksjonspunkt
        .filter(ap => isAksjonspunktOpen(ap.status))
        .some(ap => ap.definisjon === AksjonspunktCode.AUTO_MANUELT_SATT_PÅ_VENT),
    [behandling.aksjonspunkt],
  );

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
