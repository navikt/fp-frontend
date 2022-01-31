type UttakKontrollerAktivitetskrav = Readonly<{
  fom: string;
  tom: string;
  avklaring?: string;
  begrunnelse?: string;
  morsAktivitet?: string;
  endret: boolean;
}>

export default UttakKontrollerAktivitetskrav;
