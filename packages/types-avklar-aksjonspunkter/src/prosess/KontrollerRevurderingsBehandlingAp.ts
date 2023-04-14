import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type KontrollerRevurderingsBehandlingAp =
  AksjonspunktTilBekreftelse<AksjonspunktCode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST>;

export default KontrollerRevurderingsBehandlingAp;
