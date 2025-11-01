import { useState } from 'react';

import { useMutation } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { type FormValues, SettPaVentModalIndex } from '@navikt/fp-modal-sett-pa-vent';
import type { AlleKodeverk, AlleKodeverkTilbakekreving, Behandling } from '@navikt/fp-types';
import { erAksjonspunktÅpent } from '@navikt/fp-utils';

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
  const [manueltSkjult, setManueltSkjult] = useState(false);
  const skjulModal = () => setManueltSkjult(false);

  const skalViseModal = !skalIkkeViseModal && behandling.behandlingPåVent && !manueltSkjult;

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

  const erManueltSattPaVent = behandling.aksjonspunkt
    .filter(erAksjonspunktÅpent)
    .some(ap => ap.definisjon === AksjonspunktKode.AUTO_MANUELT_SATT_PÅ_VENT);

  return (
    <SettPaVentModalIndex
      submitCallback={endrePaVent}
      cancelEvent={skjulModal}
      frist={behandling.fristBehandlingPåVent}
      // @ts-expect-error fiks type på behandling
      ventearsak={behandling.venteÅrsakKode}
      hasManualPaVent={erManueltSattPaVent}
      ventearsaker={kodeverk['Venteårsak']}
      erTilbakekreving={erTilbakekreving}
      showModal={skalViseModal}
    />
  );
};
