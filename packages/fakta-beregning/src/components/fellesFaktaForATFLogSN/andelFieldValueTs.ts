import { Kodeverk } from '@fpsak-frontend/types';

type AndelFieldValue = {
  andel: string;
  aktivitetStatus: string;
  andelsnr?: number;
  nyAndel?: boolean;
  inntektskategori: string;
  lagtTilAvSaksbehandler?: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  arbeidsperiodeFom?: string;
  arbeidsperiodeTom?: string;
  arbeidsforholdType?: Kodeverk;
  skalKunneEndreAktivitet?: boolean
  fastsattBelop?: string;
  belopReadOnly?: string;
  refusjonskrav?: string;
}

export type InntektTransformed = {
  andelsnr: number;
  fastsattBelop: number;
  inntektskategori: string;
  nyAndel: boolean;
  lagtTilAvSaksbehandler: boolean;
  aktivitetStatus: string;
  arbeidsforholdId: string;
  arbeidsgiverId: string;
}

export default AndelFieldValue;
