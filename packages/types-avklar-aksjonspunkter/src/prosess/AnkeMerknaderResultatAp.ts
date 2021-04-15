import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Kodeverk } from '@fpsak-frontend/types';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type AnkeMerknaderResultatAp = {
  erMerknaderMottatt?: boolean;
  avsluttBehandling?: boolean;
  merknadKommentar?: string;
  trygderettVurdering?: Kodeverk | string;
  trygderettOmgjoerArsak?: Kodeverk | string;
  trygderettVurderingOmgjoer?: Kodeverk | string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_VURDERING_AV_ANKE_MERKNADER>;

export default AnkeMerknaderResultatAp;
