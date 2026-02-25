import { omitOne } from '@navikt/ft-utils';

import type { OppgaverForAvdelingPerDato } from '@navikt/fp-types';

import { slåSammenLikeBehandlingstyperOgDatoer } from './oppgaveUtils';

describe('oppgaveUtils', () => {
  describe('slåSammenLikeBehandlingstyperOgDatoer', () => {
    it('skal gruppere pg summer objekter med samme behandlingstype og dato', () => {
      const result = slåSammenLikeBehandlingstyperOgDatoer(oppgaverPåDatoMedYtelser);
      expect(result).toEqual([
        {
          behandlingType: 'BT-002',
          statistikkDato: '2024-01-01',
          antall: 3,
          opprettet: 3,
          avsluttet: 3,
        },
        omitOne(oppgaverPåDatoMedYtelser[2]!, 'fagsakYtelseType'),
        omitOne(oppgaverPåDatoMedYtelser[3]!, 'fagsakYtelseType'),
      ]);
    });
  });
});

const oppgaverPåDatoMedYtelser: OppgaverForAvdelingPerDato[] = [
  {
    behandlingType: 'BT-002',
    statistikkDato: '2024-01-01',
    fagsakYtelseType: 'FP',
    antall: 1,
    opprettet: 1,
    avsluttet: 1,
  },
  {
    behandlingType: 'BT-002',
    statistikkDato: '2024-01-01',
    fagsakYtelseType: 'SVP',
    antall: 2,
    opprettet: 2,
    avsluttet: 2,
  },
  {
    behandlingType: 'BT-003',
    statistikkDato: '2024-01-01',
    fagsakYtelseType: 'SVP',
    antall: 2,
    opprettet: 2,
    avsluttet: 2,
  },
  {
    behandlingType: 'BT-002',
    statistikkDato: '2024-01-02',
    fagsakYtelseType: 'SVP',
    antall: 3,
    opprettet: 3,
    avsluttet: 3,
  },
];
