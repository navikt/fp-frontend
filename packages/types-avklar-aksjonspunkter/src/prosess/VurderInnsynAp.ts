import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { InnsynResultatType } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurderInnsynAp = {
  innsynResultatType: InnsynResultatType;
  mottattDato: string;
  innsynDokumenter: {
    fikkInnsyn?: boolean;
    journalpostId?: string;
    dokumentId?: string;
  }[];
  sattPaVent?: boolean;
  fristDato?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_INNSYN>;
