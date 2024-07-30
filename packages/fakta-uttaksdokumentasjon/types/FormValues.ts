import { DokumentasjonVurderingBehov } from '@navikt/fp-types';

type FormValues = {
  perioder: VurderingsBehovPeriode[];
};

export enum VurderingsAlternativ {
  GODKJENT = 'GODKJENT',
  GODKJENT_OVER75 = 'GODKJENT_OVER75',
  GODKJENT_UNDER75 = 'GODKJENT_UNDER75',
  IKKE_GODKJENT = 'IKKE_GODKJENT',
  IKKE_DOKUMENTERT = 'IKKE_DOKUMENTERT',
}

export type VurderingsBehovPeriode = Omit<DokumentasjonVurderingBehov, 'vurdering'> & {
  vurdering?: VurderingsAlternativ;
};

export default FormValues;
