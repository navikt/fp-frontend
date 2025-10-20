import type { InnsynResultatType } from '@navikt/fp-types';

export type InnsynFormValues = {
  mottattDato?: string;
  innsynResultatType?: InnsynResultatType;
  fristDato?: string;
  sattPaVent?: boolean;
  begrunnelse?: string;
  [key: `dokument_${string}`]: boolean;
};
