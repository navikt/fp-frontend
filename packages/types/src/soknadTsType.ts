export type ManglendeVedleggSoknad = Readonly<{
  dokumentType: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>

export type UtlandsoppholdPeriode = Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>

type Soknad = Readonly<{
  soknadType: string;
  mottattDato: string;
  soknadDato: string;
  tilleggsopplysninger: string;
  begrunnelseForSenInnsending: string;
  annenPartNavn: string;
  antallBarn: number;
  dekningsgrad: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  }
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittRettighet: {
    omsorgForBarnet: boolean;
    aleneomsorgForBarnet: boolean;
  };
  oppgittFordeling: {
    startDatoForPermisjon?: string;
  };
  spraakkode: string;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}>

export default Soknad;
