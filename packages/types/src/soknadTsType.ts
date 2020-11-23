import Kodeverk from './kodeverkTsType';

export type ManglendeVedleggSoknad = Readonly<{
  dokumentType: Kodeverk;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>

type Soknad = Readonly<{
  soknadType: Kodeverk;
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
    utlandsoppholdFor: {
      landNavn: string;
      fom: string;
      tom: string;
    }[];
    utlandsoppholdEtter: {
      landNavn: string;
      fom: string;
      tom: string;
    }[];
  }
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittRettighet: {
    omsorgForBarnet: boolean;
    aleneomsorgForBarnet: boolean;
  };
  oppgittFordeling: {
    startDatoForPermisjon?: string;
  };
  spraakkode: Kodeverk;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: Kodeverk;
}>

export default Soknad;
