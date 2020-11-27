import moment from 'moment';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt } from '@fpsak-frontend/types';

import CustomUttakKontrollerFaktaPerioder from '../../CustomUttakKontrollerFaktaPerioderTsType';

const uttakAksjonspunkter = [
  aksjonspunktCodes.AVKLAR_UTTAK,
  aksjonspunktCodes.ANNEN_FORELDER_IKKE_RETT_OG_LØPENDE_VEDTAK,
  aksjonspunktCodes.AVKLAR_FØRSTE_UTTAKSDATO,
];

export const sjekkOmfaktaOmUttakAksjonspunkt = (aksjonspunkter: Aksjonspunkt[]): boolean => aksjonspunkter
  .some((ap: Aksjonspunkt) => uttakAksjonspunkter.includes(ap.definisjon.kode));

export const sjekkArbeidsprosentOver100 = (periode: CustomUttakKontrollerFaktaPerioder): boolean => periode.arbeidstidsprosent > 100;

export const sjekkOverlappendePerioder = (index: number, nestePeriode: CustomUttakKontrollerFaktaPerioder,
  forrigePeriode: CustomUttakKontrollerFaktaPerioder): boolean => index !== 0 && moment(nestePeriode.fom) <= moment(forrigePeriode.tom);

export const sjekkEndretFørsteUttaksdato = (nyStartDato: string, førsteUttaksdato: string): boolean => moment(nyStartDato).isBefore(moment(førsteUttaksdato));
