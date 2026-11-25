import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { BekreftetAksjonspunkt, OverstyrtAksjonspunkt, UtgåttKode } from '../../../data/behandlingApi';

const UTGÅTTE_KODER: readonly string[] = [
  AksjonspunktKode.UTGÅTT_5056,
  AksjonspunktKode.UTGÅTT_6012,
] satisfies UtgåttKode[];

const erBackendKode = (kode: string) => /^\d{4}$/.test(kode) && !UTGÅTTE_KODER.includes(kode);

const skalTilOverstyrEndepunkt = <T extends { kode: string }>(ap: T): ap is Extract<T, OverstyrtAksjonspunkt> =>
  erBackendKode(ap.kode) && ap.kode.startsWith('6');

const skalTilBekreftEndepunkt = <T extends { kode: string }>(ap: T): ap is Extract<T, BekreftetAksjonspunkt> =>
  erBackendKode(ap.kode) && !ap.kode.startsWith('6');

const filtrerForEndepunkt = <T extends { kode: string }, U extends T>(
  apListe: T[],
  skalTilEndepunkt: (ap: T) => ap is U,
  endepunkt: string,
): U[] => {
  const ugyldigeKoder = apListe.filter(ap => !skalTilEndepunkt(ap)).map(ap => ap.kode);
  if (ugyldigeKoder.length > 0) {
    throw new Error(`${endepunkt}-endepunktet kan ikke lagre aksjonspunkter med kodene: ${ugyldigeKoder.join(', ')}.`);
  }
  return apListe.filter(skalTilEndepunkt);
};

export const hentAksjonspunkterTilOverstyring = <T extends { kode: string }>(apListe: T[]) =>
  filtrerForEndepunkt(apListe, skalTilOverstyrEndepunkt, 'Overstyr');

export const hentAksjonspunkterTilBekreftelse = <T extends { kode: string }>(apListe: T[]) =>
  filtrerForEndepunkt(apListe, skalTilBekreftEndepunkt, 'Bekreft');
