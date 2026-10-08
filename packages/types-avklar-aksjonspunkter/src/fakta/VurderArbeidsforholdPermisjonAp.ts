import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { BekreftetPermisjonStatus } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurderArbeidsforholdPermisjonAp = {
  arbeidsforhold: {
    internArbeidsforholdId?: string;
    arbeidsgiverIdent: string;
    permisjonStatus: BekreftetPermisjonStatus;
  }[];
  begrunnelse: string;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.VURDER_PERMISJON_UTEN_SLUTTDATO>;
