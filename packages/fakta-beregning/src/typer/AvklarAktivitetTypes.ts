import { Aksjonspunkt, AvklarBeregningAktiviteterMap } from '@fpsak-frontend/types';

export type AktivitetValues = {
  beregningAktivitetNavn: string;
  fom: string;
  tom: string;
  skalBrukes: boolean;
}

export type AktiviteterValues = {
  [key: string]: AktivitetValues;
}

type AvklarAktiviteterValues = {
  manuellOverstyringBeregningAktiviteter?: boolean;
  begrunnelseAvklareAktiviteter?: string;
  aksjonspunkter?: Aksjonspunkt[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  aktiviteterValues?: AktiviteterValues;
}

export default AvklarAktiviteterValues;
