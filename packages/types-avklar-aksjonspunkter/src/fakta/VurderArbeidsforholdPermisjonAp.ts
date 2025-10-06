import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurderArbeidsforholdPermisjonAp = {
  arbeidsforhold: {
    internArbeidsforholdId?: string;
    arbeidsgiverIdent: string;
    permisjonStatus: string;
  }[];
  begrunnelse: string;
} & AksjonspunktTilBekreftelse<'5041'>;
