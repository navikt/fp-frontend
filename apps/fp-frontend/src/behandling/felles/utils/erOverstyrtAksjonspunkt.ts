import type { BekreftetAksjonspunkt, MedType, OverstyrtAksjonspunkt } from '../../../data/behandlingApi';

const erBackendKode = (kode: string) => /^\d{4}$/.test(kode);

export const erOverstyrtAksjonspunkt = <T extends { kode: string }>(ap: T): ap is Extract<T, OverstyrtAksjonspunkt> =>
  erBackendKode(ap.kode) && ap.kode.startsWith('6');

export const erBekreftetAksjonspunkt = <T extends { kode: string }>(ap: T): ap is Extract<T, BekreftetAksjonspunkt> =>
  erBackendKode(ap.kode) && !ap.kode.startsWith('6');

export const medType = <T extends { kode: string }>(ap: T) => ({ '@type': ap.kode, ...ap }) as MedType<T>;
