import { Kodeverk } from '@fpsak-frontend/types';

type MedlemskapBekreftetPeriode = {
  vurderingsdato: string;
  aksjonspunkter: string[];
  bosattVurdering: boolean;
  erEosBorger: boolean;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  fodselsdato?: string;
  medlemskapManuellVurderingType: Kodeverk;
  omsorgsovertakelseDato?: string;
  begrunnelse: string;
};

export default MedlemskapBekreftetPeriode;
