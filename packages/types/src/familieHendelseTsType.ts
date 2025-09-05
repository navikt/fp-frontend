export type FamilieHendelse = Readonly<{
  fødselTermin?: FødselTerminFamilieHendelse;
  adopsjon?: AdopsjonFamilieHendelse;
}>;

export type FødselTerminFamilieHendelse = Readonly<{
  termindato?: string;
  fødselsdato?: string;
}>;

export type AdopsjonFamilieHendelse = Readonly<{
  antallBarn: number;
  fødselsdatoer: Record<number, string>;
  omsorgsovertakelseDato: string;
  foreldreansvarDato: string;
  omsorgsovertakelseVilkårType: string;
  ektefellesBarn: boolean;
  mannAdoptererAlene: boolean;
  ankomstNorge?: string;
}>;
