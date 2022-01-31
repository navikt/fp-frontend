import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type KontrollerAktivitetskravAp = {
  avklartePerioder: {
    fom: string;
    tom: string;
    avklaring: string;
    begrunnelse: string;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.KONTROLLER_AKTIVITETSKRAV>

export default KontrollerAktivitetskravAp;
