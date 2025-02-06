import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BekreftSvangerskapspengervilkarAp = {
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.SVANGERSKAPSVILKARET>;
