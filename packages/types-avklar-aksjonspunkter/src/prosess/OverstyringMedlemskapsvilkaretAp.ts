import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';

export type OverstyringMedlemskapsvilkaretAp = {
  avslagskode?: string;
  opphørFom?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR>;
