import moment from 'moment';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { Aksjonspunkt } from '@navikt/fp-types';

import CustomUttakKontrollerFaktaPerioder from '../../CustomUttakKontrollerFaktaPerioderTsType';

export const sjekkOmfaktaOmUttakAksjonspunkt = (aksjonspunkter: Aksjonspunkt[]): boolean => aksjonspunkter
  .some((ap: Aksjonspunkt) => AksjonspunktCode.AVKLAR_UTTAK === ap.definisjon
  || AksjonspunktCode.AVKLAR_FØRSTE_UTTAKSDATO === ap.definisjon);

export const sjekkArbeidsprosentOver100 = (periode: CustomUttakKontrollerFaktaPerioder): boolean => periode.arbeidstidsprosent > 100;

export const sjekkOverlappendePerioder = (index: number, nestePeriode: CustomUttakKontrollerFaktaPerioder,
  forrigePeriode: CustomUttakKontrollerFaktaPerioder): boolean => index !== 0 && moment(nestePeriode.fom) <= moment(forrigePeriode.tom);

export const sjekkEndretFørsteUttaksdato = (nyStartDato: string, førsteUttaksdato: string): boolean => moment(nyStartDato).isBefore(moment(førsteUttaksdato));
