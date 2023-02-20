import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type KontrollerAktivitetskravAp = {
  avklartePerioder: {
    fom: string;
    tom: string;
    avklaring: string;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktCode.KONTROLLER_AKTIVITETSKRAV>

export default KontrollerAktivitetskravAp;
