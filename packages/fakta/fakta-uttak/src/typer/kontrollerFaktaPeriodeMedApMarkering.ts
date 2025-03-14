import type { KontrollerFaktaPeriode } from '@navikt/fp-types';

export enum PeriodeApType {
  START_FOM = 'START_FOM',
  INGEN_PERIODER = 'INGEN_PERIODER',
  MANGLENDE_ARBEIDSFORHOLD = 'MANGLENDE_ARBEIDSFORHOLD',
}

export type KontrollerFaktaPeriodeMedApMarkering = KontrollerFaktaPeriode &
  Readonly<{
    originalFom: string;
    aksjonspunktType?: PeriodeApType;
  }>;
