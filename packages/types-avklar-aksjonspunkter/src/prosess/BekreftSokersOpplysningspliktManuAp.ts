import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BekreftSokersOpplysningspliktManuAp = {
  erVilkarOk: boolean;
  inntektsmeldingerSomIkkeKommer: {
    organisasjonsnummer?: string;
    aktørId?: string;
    brukerHarSagtAtIkkeKommer: boolean;
  }[];
} & AksjonspunktTilBekreftelse<'5017'>;
