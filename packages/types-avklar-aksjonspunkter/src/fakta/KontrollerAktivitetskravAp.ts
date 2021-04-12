import { Kodeverk } from '@fpsak-frontend/types';
import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type KontrollerAktivitetskravAp = {
  avklartePerioder: {
    fom: string;
    tom: string;
    avklaring: Kodeverk;
    begrunnelse: string;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.KONTROLLER_AKTIVITETSKRAV>

export default KontrollerAktivitetskravAp;
