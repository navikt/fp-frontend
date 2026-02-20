import type { FaktaUttakPeriode } from '@navikt/fp-types';

type PeriodeApType = 'START_FOM' | 'INGEN_PERIODER' | 'MANGLENDE_ARBEIDSFORHOLD';

export type KontrollerFaktaPeriodeMedApMarkering = FaktaUttakPeriode &
  Readonly<{
    originalFom: string;
    aksjonspunktType?: PeriodeApType;
  }>;
