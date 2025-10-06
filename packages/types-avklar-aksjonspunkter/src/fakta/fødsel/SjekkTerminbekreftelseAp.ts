import type { AksjonspunktTilBekreftelse } from '../../AksjonspunktTilBekreftelse';

export type SjekkTerminbekreftelseAp = {
  utstedtdato: string;
  termindato: string | null;
  antallBarn: number;
} & AksjonspunktTilBekreftelse<'5001'>;
