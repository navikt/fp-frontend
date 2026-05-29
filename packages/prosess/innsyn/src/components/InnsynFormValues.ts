import type { ProsessStegBegrunnelseTextFieldFormValues } from '@navikt/fp-prosess-felles';
import type { InnsynResultatType } from '@navikt/fp-types';

export type InnsynFormValues = {
  mottattDato?: string;
  innsynResultatType?: InnsynResultatType;
  fristDato?: string;
  sattPåVent?: boolean;
  [key: `dokument_${string}`]: boolean;
} & ProsessStegBegrunnelseTextFieldFormValues;
