import type { VilkarType, VilkarUtfallType } from '@navikt/fp-kodeverk';

export type Vilkar = Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>;
