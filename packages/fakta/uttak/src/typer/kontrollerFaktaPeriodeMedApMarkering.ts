import type { KontrollerFaktaPeriode } from '@navikt/fp-types';

type PeriodeApType = 'START_FOM' | 'INGEN_PERIODER' | 'MANGLENDE_ARBEIDSFORHOLD';

export type KontrollerFaktaPeriodeMedApMarkering = KontrollerFaktaPeriode &
  Readonly<{
    originalFom: string;
    aksjonspunktType?: PeriodeApType;
  }>;
