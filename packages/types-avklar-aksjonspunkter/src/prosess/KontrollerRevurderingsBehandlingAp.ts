import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type KontrollerRevurderingsBehandlingAp =
  AksjonspunktTilBekreftelse<AksjonspunktKode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST>;

export default KontrollerRevurderingsBehandlingAp;
