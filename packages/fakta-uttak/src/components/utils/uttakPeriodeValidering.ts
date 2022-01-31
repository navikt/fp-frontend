import moment from 'moment';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt } from '@fpsak-frontend/types';

import CustomUttakKontrollerFaktaPerioder from '../../CustomUttakKontrollerFaktaPerioderTsType';

export const sjekkOmfaktaOmUttakAksjonspunkt = (aksjonspunkter: Aksjonspunkt[]): boolean => aksjonspunkter
  .some((ap: Aksjonspunkt) => aksjonspunktCodes.AVKLAR_UTTAK === ap.definisjon
  || aksjonspunktCodes.ANNEN_FORELDER_IKKE_RETT_OG_LØPENDE_VEDTAK === ap.definisjon
  || aksjonspunktCodes.AVKLAR_FØRSTE_UTTAKSDATO === ap.definisjon);

export const sjekkArbeidsprosentOver100 = (periode: CustomUttakKontrollerFaktaPerioder): boolean => periode.arbeidstidsprosent > 100;

export const sjekkOverlappendePerioder = (index: number, nestePeriode: CustomUttakKontrollerFaktaPerioder,
  forrigePeriode: CustomUttakKontrollerFaktaPerioder): boolean => index !== 0 && moment(nestePeriode.fom) <= moment(forrigePeriode.tom);

export const sjekkEndretFørsteUttaksdato = (nyStartDato: string, førsteUttaksdato: string): boolean => moment(nyStartDato).isBefore(moment(førsteUttaksdato));
