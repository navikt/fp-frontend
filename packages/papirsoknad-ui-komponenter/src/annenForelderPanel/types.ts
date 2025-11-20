import type { KanIkkeOppgiAnnenForelderArsak } from './components/kanIkkeOppgiAnnenForelderArsak';
import { ANNEN_FORELDER_NAME_PREFIX } from './constant';

export type AnnenForelderSubFormValues = {
  fødselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    årsak?: KanIkkeOppgiAnnenForelderArsak;
    land?: string;
    utenlandskFødselsnummer?: string;
  };
};

export type PermisjonRettigheterFormValues = {
  søkerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPåForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
};

export type AnnenForelderFormValues = {
  [ANNEN_FORELDER_NAME_PREFIX]: AnnenForelderSubFormValues & PermisjonRettigheterFormValues;
};
