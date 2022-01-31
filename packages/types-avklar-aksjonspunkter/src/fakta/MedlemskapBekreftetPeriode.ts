type MedlemskapBekreftetPeriode = {
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: string;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
};

export default MedlemskapBekreftetPeriode;
