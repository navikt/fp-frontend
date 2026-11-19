import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { BekreftetAksjonspunkt, MedType, OverstyrtAksjonspunkt, UtgåttKode } from '../../../data/behandlingApi';

const UTGÅTTE_KODER: readonly UtgåttKode[] = [AksjonspunktKode.UTGÅTT_5056, AksjonspunktKode.UTGÅTT_6012];

const erBackendKode = (kode: string) => /^\d{4}$/.test(kode) && !UTGÅTTE_KODER.some(utgått => utgått === kode);

export const erOverstyrtAksjonspunkt = <T extends { kode: string }>(ap: T): ap is Extract<T, OverstyrtAksjonspunkt> =>
  erBackendKode(ap.kode) && ap.kode.startsWith('6');

export const erBekreftetAksjonspunkt = <T extends { kode: string }>(ap: T): ap is Extract<T, BekreftetAksjonspunkt> =>
  erBackendKode(ap.kode) && !ap.kode.startsWith('6');

export const medType = <T extends { kode: string }>(ap: T) => ({ ...ap, '@type': ap.kode }) as unknown as MedType<T>;
