import type { MedlemskapManuellVurderingType } from '@navikt/fp-types';

export type MedlemskapBekreftetPeriode = {
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
};
