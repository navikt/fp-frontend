import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftSvangerskapspengervilkarAp = {
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.SVANGERSKAPSVILKARET>;

export default BekreftSvangerskapspengervilkarAp;
