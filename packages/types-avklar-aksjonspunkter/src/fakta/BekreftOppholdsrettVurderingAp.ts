import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';
import type { MedlemskapBekreftetPeriode } from './MedlemskapBekreftetPeriode';

export type BekreftOppholdsrettVurderingAp = {
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<'5023'>;
