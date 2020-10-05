import Kodeverk from './kodeverkTsType';

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
  manglendeVedlegg: {
    dokumentType: Kodeverk;
    arbeidsgiver: {
      navn: string;
      organisasjonsnummer: string;
      fødselsdato: string;
      aktørId: string;
    };
    brukerHarSagtAtIkkeKommer: boolean;
  }[];
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
  fodselsdatoer?: {[key: number]: string};
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: {[key: number]: string};
  farSokerType?: Kodeverk;
}>

export default Soknad;
