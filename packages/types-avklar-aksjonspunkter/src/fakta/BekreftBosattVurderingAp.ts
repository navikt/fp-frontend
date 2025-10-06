import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';
import type { MedlemskapBekreftetPeriode } from './MedlemskapBekreftetPeriode';

export type BekreftBosattVurderingAp = {
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<'5020'>;
