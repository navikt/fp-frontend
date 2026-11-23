import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { BekreftetAksjonspunkt, OverstyrtAksjonspunkt, UtgåttKode } from '../../../data/behandlingApi';

const UTGÅTTE_KODER: readonly string[] = [
  AksjonspunktKode.UTGÅTT_5056,
  AksjonspunktKode.UTGÅTT_6012,
] satisfies UtgåttKode[];

const erBackendKode = (kode: string) => /^\d{4}$/.test(kode) && !UTGÅTTE_KODER.includes(kode);

export const skalTilOverstyrEndepunkt = <T extends { kode: string }>(ap: T): ap is Extract<T, OverstyrtAksjonspunkt> =>
  erBackendKode(ap.kode) && ap.kode.startsWith('6');

export const skalTilBekreftEndepunkt = <T extends { kode: string }>(ap: T): ap is Extract<T, BekreftetAksjonspunkt> =>
  erBackendKode(ap.kode) && !ap.kode.startsWith('6');
