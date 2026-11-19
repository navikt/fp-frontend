import type {
  AlleAksjonspunkt,
  BekreftetAksjonspunkt,
  OverstyrtAksjonspunkt,
} from '../../../data/behandlingApi';

type AksjonspunktMedKode = Extract<AlleAksjonspunkt, { kode: string }>;

export const erOverstyrtAksjonspunkt = <T extends AksjonspunktMedKode>(
  ap: T,
): ap is Extract<T, OverstyrtAksjonspunkt> => ap.kode.startsWith('6');

export const erBekreftetAksjonspunkt = <T extends AksjonspunktMedKode>(
  ap: T,
): ap is Extract<T, BekreftetAksjonspunkt> => !ap.kode.startsWith('6');
