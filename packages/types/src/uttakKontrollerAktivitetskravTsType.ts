import Kodeverk from './kodeverkTsType';

type UttakKontrollerAktivitetskrav = Readonly<{
  fom: string;
  tom: string;
  avklaring?: Kodeverk;
  begrunnelse?: string;
  morsAktivitet?: Kodeverk;
  endret: boolean;
}>

export default UttakKontrollerAktivitetskrav;
