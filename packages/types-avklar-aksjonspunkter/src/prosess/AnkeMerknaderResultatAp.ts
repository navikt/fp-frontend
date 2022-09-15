import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AnkeMerknaderResultatAp = {
  erMerknaderMottatt?: boolean;
  avsluttBehandling?: boolean;
  merknadKommentar?: string;
  trygderettVurdering?: string;
  trygderettOmgjoerArsak?: string;
  trygderettVurderingOmgjoer?: string;
  påAnketKlageBehandlingUuid?: string;
  sendTilKabal?: boolean;
  klageHjemmel?: string;
  sendtTilTrygderetten?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_VURDERING_AV_ANKE_MERKNADER>;

export default AnkeMerknaderResultatAp;
