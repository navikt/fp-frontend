import { AksjonspunktCode } from '@navikt/fp-kodeverk';

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
} & AksjonspunktTilBekreftelse<AksjonspunktCode.VURDER_INNSYN>;

export default VurderInnsynAp;
