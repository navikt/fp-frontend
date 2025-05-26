import type { VilkarType } from '@navikt/fp-kodeverk';

export type Vilkar = Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>;
