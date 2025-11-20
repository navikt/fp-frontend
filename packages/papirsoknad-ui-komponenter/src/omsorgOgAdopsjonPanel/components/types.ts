import { OMSORG_NAME_PREFIX } from '../constant';

export type OmsorgOgAdopsjonFormValues = {
  [OMSORG_NAME_PREFIX]: {
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    fødselsdato?: { id: number; dato?: string }[];
  };
};

export type TransformedFormValue = {
  [OMSORG_NAME_PREFIX]: {
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    fødselsdato?: (string | undefined)[];
  };
};
