import type { KanIkkeOppgiAnnenForelderArsak } from './components/kanIkkeOppgiAnnenForelderArsak';
import { ANNEN_FORELDER_NAME_PREFIX } from './constant';

export type AnnenForelderSubFormValues = {
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: KanIkkeOppgiAnnenForelderArsak;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
};

export type PermisjonRettigheterFormValues = {
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
};

export type AnnenForelderFormValues = {
  [ANNEN_FORELDER_NAME_PREFIX]: AnnenForelderSubFormValues & PermisjonRettigheterFormValues;
};
