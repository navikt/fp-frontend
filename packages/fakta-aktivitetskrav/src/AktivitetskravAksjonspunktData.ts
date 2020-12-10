import { Kodeverk } from '@fpsak-frontend/types';

type AktivitetskravAksjonspunktData = Readonly<{
  kode: string;
  avklartePerioder: {
    fom: string;
    tom: string;
    avklaring: Kodeverk;
    begrunnelse: string;
  }[];
}>

export default AktivitetskravAksjonspunktData;
