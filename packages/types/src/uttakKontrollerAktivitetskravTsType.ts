import Kodeverk from './kodeverkTsType';

type UttakKontrollerAktivitetskrav = Readonly<{
  fom: string;
  tom: string;
  avklaring?: Kodeverk;
  begrunnelse?: string;
}>

export default UttakKontrollerAktivitetskrav;
