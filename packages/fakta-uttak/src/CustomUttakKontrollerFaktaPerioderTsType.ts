import { UttakKontrollerFaktaPerioder } from '@fpsak-frontend/types';

type CustomUttakKontrollerFaktaPerioder = UttakKontrollerFaktaPerioder & {
  id: string;
  openForm: boolean;
  updated: boolean;
  isFromSøknad: boolean;
}

export default CustomUttakKontrollerFaktaPerioder;
