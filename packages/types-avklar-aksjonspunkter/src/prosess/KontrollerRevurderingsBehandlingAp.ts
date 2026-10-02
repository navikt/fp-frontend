import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type KontrollerRevurderingsBehandlingAp = AksjonspunktFraBackend<
  typeof AksjonspunktKode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST
>;
