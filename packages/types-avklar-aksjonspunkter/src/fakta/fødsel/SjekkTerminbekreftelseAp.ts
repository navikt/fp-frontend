import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../../AksjonspunktTilBekreftelse';

export type SjekkTerminbekreftelseAp = {
  utstedtdato: string;
  termindato: string | null;
  antallBarn: number;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.SJEKK_TERMINBEKREFTELSE>;
