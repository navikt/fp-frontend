import type { BekreftetAksjonspunktDto, OverstyringAksjonspunktDto } from '@navikt/fp-types';

type AksjonspunktDto = BekreftetAksjonspunktDto | OverstyringAksjonspunktDto;

/**
 * Aksjonspunktet slik backend tar imot det, men med `kode` i stedet for `@type`.
 * `@type` settes fra `kode` når aksjonspunktene sendes.
 */
export type AksjonspunktFraBackend<K extends AksjonspunktDto['@type']> = K extends unknown
  ? { kode: K } & Omit<Extract<AksjonspunktDto, { '@type': K }>, '@type'>
  : never;

export type MedPåkravdeFelt<T, K extends keyof T> = T & Required<Pick<T, K>>;
