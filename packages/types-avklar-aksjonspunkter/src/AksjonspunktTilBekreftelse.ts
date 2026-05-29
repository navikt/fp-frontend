import type { BekreftetAksjonspunktDto, OverstyringAksjonspunktDto } from '@navikt/fp-types';

export type AksjonspunktTilBekreftelse<K extends string> = Extract<
  BekreftetAksjonspunktDto | OverstyringAksjonspunktDto,
  { kode: `${K}` }
>;
