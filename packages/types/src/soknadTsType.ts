import Kodeverk from './kodeverkTsType';

type Soknad = Readonly<{
  fodselsdatoer?: { [key: number]: string };
  adopsjonFodelsedatoer?: { [key: number]: string };
  termindato?: string;
  antallBarn: number;
  utstedtdato?: string;
  soknadType: Kodeverk;
  tilleggsopplysninger?: string;
  omsorgsovertakelseDato?: string;
  farSokerType?: Kodeverk;
  barnetsAnkomstTilNorgeDato?: string;
  oppgittFordeling: {
    startDatoForPermisjon?: string;
  };
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
}>

export default Soknad;
