import type { AksjonspunktTilBekreftelse } from '../../AksjonspunktTilBekreftelse';

export type SjekkManglendeFødselAp = {
  termindato: string | null;
  barn:
    | {
        fødselsdato: string;
        dødsdato?: string;
      }[]
    | null;
} & AksjonspunktTilBekreftelse<'5027'>;
