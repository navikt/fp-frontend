import Kodeverk from './kodeverkTsType';

export type FamilieHendelse = Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: {
    fodselsdato: string;
    dodsdato?: string;
  }[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: string;
  soknadType: Kodeverk;
  adopsjonFodelsedatoer?: any;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: Kodeverk;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
}>

export type FamilieHendelseSamling = Readonly<{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}>
