import React, { useState, useMemo, useCallback, useEffect } from 'react';

import { AlleKodeverk, AlleKodeverkTilbakekreving, Behandling } from '@navikt/fp-types';
import { SettPaVentModalIndex, FormValues } from '@navikt/fp-modal-sett-pa-vent';
import { isAksjonspunktOpen, AksjonspunktKode, KodeverkType } from '@navikt/fp-kodeverk';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../../../../data/behandlingContextApi';

interface Props {
  behandling: Behandling;
  kodeverk: AlleKodeverk | AlleKodeverkTilbakekreving;
  opneSokeside: () => void;
  erTilbakekreving?: boolean;
  skalIkkeViseModal?: boolean;
}

export const BehandlingPaVent = ({
  behandling,
  kodeverk,
  opneSokeside,
  erTilbakekreving = false,
  skalIkkeViseModal = false,
}: Props) => {
  const [skalViseModal, setVisModal] = useState(!skalIkkeViseModal && behandling.behandlingPaaVent);
  const skjulModal = useCallback(() => setVisModal(false), []);

  const { startRequest: endrePaVent } = restBehandlingApiHooks.useRestApiRunner(BehandlingApiKeys.UPDATE_ON_HOLD);

  useEffect(() => {
    if (!skalIkkeViseModal) {
      setVisModal(behandling.behandlingPaaVent);
    }
  }, [behandling.versjon, skalIkkeViseModal]);

  const oppdaterPaVentData = useCallback(
    (formData: FormValues) =>
      endrePaVent({
        ...formData,
        behandlingUuid: behandling.uuid,
        behandlingVersjon: behandling.versjon,
      }).then(() => {
        opneSokeside();
      }),
    [behandling.versjon],
  );

  const erManueltSattPaVent = useMemo(
    () =>
      behandling.aksjonspunkt
        .filter(ap => isAksjonspunktOpen(ap.status))
        .some(ap => ap.definisjon === AksjonspunktKode.AUTO_MANUELT_SATT_PÅ_VENT),
    [behandling.aksjonspunkt],
  );

  return (
    <SettPaVentModalIndex
      submitCallback={oppdaterPaVentData}
      cancelEvent={skjulModal}
      frist={behandling.fristBehandlingPåVent || behandling.fristBehandlingPaaVent}
      ventearsak={behandling.venteArsakKode}
      hasManualPaVent={erManueltSattPaVent}
      ventearsaker={kodeverk[KodeverkType.VENT_AARSAK]}
      erTilbakekreving={erTilbakekreving}
      showModal={skalViseModal}
    />
  );
};
