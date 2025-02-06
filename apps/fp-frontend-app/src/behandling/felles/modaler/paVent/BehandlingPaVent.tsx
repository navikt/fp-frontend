import { useEffect, useState } from 'react';

import { useMutation } from '@tanstack/react-query';

import { AksjonspunktKode, isAksjonspunktOpen, KodeverkType } from '@navikt/fp-kodeverk';
import { type FormValues, SettPaVentModalIndex } from '@navikt/fp-modal-sett-pa-vent';
import type { AlleKodeverk, AlleKodeverkTilbakekreving, Behandling } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../../data/behandlingApi';

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
  const skjulModal = () => setVisModal(false);

  const behandlingApi = useBehandlingApi(behandling);

  const { mutate: endrePaVent } = useMutation({
    mutationFn: (values: FormValues) =>
      behandlingApi.oppdaterPåVent({
        ...values,
        behandlingUuid: behandling.uuid,
        behandlingVersjon: behandling.versjon,
      }),
    onSuccess: () => opneSokeside(),
  });

  useEffect(() => {
    if (!skalIkkeViseModal) {
      setVisModal(behandling.behandlingPaaVent);
    }
  }, [behandling.versjon, skalIkkeViseModal]);

  const erManueltSattPaVent = behandling.aksjonspunkt
    .filter(ap => isAksjonspunktOpen(ap.status))
    .some(ap => ap.definisjon === AksjonspunktKode.AUTO_MANUELT_SATT_PÅ_VENT);

  return (
    <SettPaVentModalIndex
      submitCallback={endrePaVent}
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
