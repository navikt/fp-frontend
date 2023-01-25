import AksjonspunktKode from '@navikt/fp-kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type KontrollerAktivitetskravAp = {
  avklartePerioder: {
    fom: string;
    tom: string;
    avklaring: string;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.KONTROLLER_AKTIVITETSKRAV>

export default KontrollerAktivitetskravAp;
