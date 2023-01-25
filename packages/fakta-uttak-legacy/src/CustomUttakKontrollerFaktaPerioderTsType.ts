import { UttakKontrollerFaktaPerioderLegacy } from '@navikt/fp-types';

type CustomUttakKontrollerFaktaPerioder = UttakKontrollerFaktaPerioderLegacy & {
  id: string;
  openForm: boolean;
  updated: boolean;
  isFromSøknad: boolean;
}

export default CustomUttakKontrollerFaktaPerioder;
