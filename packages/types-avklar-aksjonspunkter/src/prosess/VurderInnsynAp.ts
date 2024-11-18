import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type VurderInnsynAp = {
  innsynResultatType: string;
  mottattDato: string;
  innsynDokumenter: {
    fikkInnsyn?: boolean;
    journalpostId?: string;
    dokumentId?: string;
  }[];
  sattPaVent?: boolean;
  fristDato?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_INNSYN>;

export default VurderInnsynAp;
