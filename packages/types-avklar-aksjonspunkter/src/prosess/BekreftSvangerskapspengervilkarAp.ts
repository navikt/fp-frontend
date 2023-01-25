import AksjonspunktKode from '@navikt/fp-kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type BekreftSvangerskapspengervilkarAp = {
  avslagskode?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.SVANGERSKAPSVILKARET>;

export default BekreftSvangerskapspengervilkarAp;
