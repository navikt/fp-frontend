import type { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { BekreftetAksjonspunktDto, OverstyringAksjonspunktDto } from '@navikt/fp-types';

type AksjonspunktDto = BekreftetAksjonspunktDto | OverstyringAksjonspunktDto;
type AksjonspunktKoder = typeof AksjonspunktKode;
type AksjonspunktNavn = {
  [N in keyof AksjonspunktKoder]: AksjonspunktKoder[N] extends AksjonspunktDto['@type'] ? N : never;
}[keyof AksjonspunktKoder];

/**
 * Aksjonspunktet slik backend tar imot det, men med `kode` i stedet for `@type`.
 * `@type` settes fra `kode` når aksjonspunktene sendes.
 */
export type AksjonspunktFraBackend<N extends AksjonspunktNavn> = N extends unknown
  ? { kode: AksjonspunktKoder[N] } & Omit<Extract<AksjonspunktDto, { '@type': AksjonspunktKoder[N] }>, '@type'>
  : never;
