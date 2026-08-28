import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import type { KøStatistikkDto } from '@navikt/fp-types';

import { AktiveOgTilgjengeligeOppgaverGraf } from './AktiveOgTilgjengeligeOppgaverGraf';

// Hjelpefunksjon for relative datoer
const getTidspunktForAntallTimerSiden = (hours: number): string => {
  return dayjs().subtract(hours, 'hour').toISOString();
};

const meta = {
  title: 'los/AktiveOgTilgjengeligeOppgaverGraf',
  component: AktiveOgTilgjengeligeOppgaverGraf,
} satisfies Meta<typeof AktiveOgTilgjengeligeOppgaverGraf>;

export default meta;
type Story = StoryObj<typeof meta>;

const HURTIG_KO_DATA: KøStatistikkDto[] = [
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(43), aktive: 21, tilgjengelige: 5, ventende: 32, avsluttet: 45 },
  { tidspunkt: getTidspunktForAntallTimerSiden(42), aktive: 21, tilgjengelige: 4, ventende: 31, avsluttet: 38 },
  { tidspunkt: getTidspunktForAntallTimerSiden(41), aktive: 21, tilgjengelige: 6, ventende: 33, avsluttet: 52 },
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(28), aktive: 19, tilgjengelige: 8, ventende: 29, avsluttet: 67 },
  { tidspunkt: getTidspunktForAntallTimerSiden(27), aktive: 19, tilgjengelige: 8, ventende: 30, avsluttet: 41 },
  { tidspunkt: getTidspunktForAntallTimerSiden(26), aktive: 19, tilgjengelige: 6, ventende: 28, avsluttet: 73 },
  { tidspunkt: getTidspunktForAntallTimerSiden(25), aktive: 18, tilgjengelige: 3, ventende: 27, avsluttet: 89 },
  { tidspunkt: getTidspunktForAntallTimerSiden(24), aktive: 18, tilgjengelige: 1, ventende: 26, avsluttet: 112 },
  { tidspunkt: getTidspunktForAntallTimerSiden(23), aktive: 24, tilgjengelige: 5, ventende: 37, avsluttet: 58 },
  { tidspunkt: getTidspunktForAntallTimerSiden(22), aktive: 27, tilgjengelige: 7, ventende: 41, avsluttet: 34 },
  { tidspunkt: getTidspunktForAntallTimerSiden(21), aktive: 27, tilgjengelige: 7, ventende: 40, avsluttet: 47 },
  { tidspunkt: getTidspunktForAntallTimerSiden(20), aktive: 25, tilgjengelige: 9, ventende: 38, avsluttet: 63 },
  { tidspunkt: getTidspunktForAntallTimerSiden(19), aktive: 21, tilgjengelige: 5, ventende: 32, avsluttet: 95 },
  { tidspunkt: getTidspunktForAntallTimerSiden(18), aktive: 18, tilgjengelige: 3, ventende: 27, avsluttet: 78 },
  { tidspunkt: getTidspunktForAntallTimerSiden(17), aktive: 18, tilgjengelige: 6, ventende: 28, avsluttet: 51 },
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(4), aktive: 20, tilgjengelige: 10, ventende: 31, avsluttet: 82 },
  { tidspunkt: getTidspunktForAntallTimerSiden(3), aktive: 20, tilgjengelige: 9, ventende: 30, avsluttet: 44 },
  { tidspunkt: getTidspunktForAntallTimerSiden(2), aktive: 18, tilgjengelige: 6, ventende: 27, avsluttet: 137 },
  { tidspunkt: getTidspunktForAntallTimerSiden(1), aktive: 21, tilgjengelige: 4, ventende: 32, avsluttet: 56 },
  { tidspunkt: getTidspunktForAntallTimerSiden(0), aktive: 29, tilgjengelige: 9, ventende: 44, avsluttet: 31 },
];

export const HurtigKo: Story = {
  args: {
    aktiveOgLedigeTidslinje: HURTIG_KO_DATA,
  },
};

const A02_REGISTRERE_PAPIRSOKNAD_DATA: KøStatistikkDto[] = [
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(43), aktive: 22, tilgjengelige: 21, ventende: 34, avsluttet: 42 },
  { tidspunkt: getTidspunktForAntallTimerSiden(42), aktive: 22, tilgjengelige: 21, ventende: 34, avsluttet: 35 },
  { tidspunkt: getTidspunktForAntallTimerSiden(41), aktive: 22, tilgjengelige: 21, ventende: 34, avsluttet: 39 },
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(28), aktive: 22, tilgjengelige: 21, ventende: 34, avsluttet: 48 },
  { tidspunkt: getTidspunktForAntallTimerSiden(27), aktive: 22, tilgjengelige: 21, ventende: 34, avsluttet: 55 },
  { tidspunkt: getTidspunktForAntallTimerSiden(26), aktive: 22, tilgjengelige: 21, ventende: 34, avsluttet: 61 },
  { tidspunkt: getTidspunktForAntallTimerSiden(25), aktive: 21, tilgjengelige: 21, ventende: 33, avsluttet: 87 },
  { tidspunkt: getTidspunktForAntallTimerSiden(24), aktive: 21, tilgjengelige: 21, ventende: 33, avsluttet: 103 },
  { tidspunkt: getTidspunktForAntallTimerSiden(23), aktive: 21, tilgjengelige: 21, ventende: 33, avsluttet: 72 },
  { tidspunkt: getTidspunktForAntallTimerSiden(22), aktive: 21, tilgjengelige: 21, ventende: 33, avsluttet: 44 },
  { tidspunkt: getTidspunktForAntallTimerSiden(21), aktive: 21, tilgjengelige: 21, ventende: 33, avsluttet: 36 },
  { tidspunkt: getTidspunktForAntallTimerSiden(20), aktive: 21, tilgjengelige: 21, ventende: 33, avsluttet: 58 },
  { tidspunkt: getTidspunktForAntallTimerSiden(19), aktive: 21, tilgjengelige: 21, ventende: 33, avsluttet: 91 },
  { tidspunkt: getTidspunktForAntallTimerSiden(18), aktive: 22, tilgjengelige: 22, ventende: 34, avsluttet: 76 },
  { tidspunkt: getTidspunktForAntallTimerSiden(17), aktive: 21, tilgjengelige: 21, ventende: 33, avsluttet: 49 },
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(4), aktive: 22, tilgjengelige: 22, ventende: 34, avsluttet: 64 },
  { tidspunkt: getTidspunktForAntallTimerSiden(3), aktive: 22, tilgjengelige: 22, ventende: 34, avsluttet: 53 },
  { tidspunkt: getTidspunktForAntallTimerSiden(2), aktive: 24, tilgjengelige: 24, ventende: 36, avsluttet: 118 },
  { tidspunkt: getTidspunktForAntallTimerSiden(1), aktive: 25, tilgjengelige: 25, ventende: 38, avsluttet: 143 },
  { tidspunkt: getTidspunktForAntallTimerSiden(0.5), aktive: 25, tilgjengelige: 25, ventende: 38, avsluttet: 67 },
  { tidspunkt: getTidspunktForAntallTimerSiden(0), aktive: 25, tilgjengelige: 25, ventende: 38, avsluttet: 33 },
];

export const A02RegistrerePapirsøknad: Story = {
  args: {
    aktiveOgLedigeTidslinje: A02_REGISTRERE_PAPIRSOKNAD_DATA,
  },
};

const ALLE_SAKER_DATA: KøStatistikkDto[] = [
  // gap på ~13 timer
  {
    tidspunkt: getTidspunktForAntallTimerSiden(43),
    aktive: 15_601,
    tilgjengelige: 15_382,
    ventende: 23_401,
    avsluttet: 85,
  },
  {
    tidspunkt: getTidspunktForAntallTimerSiden(42),
    aktive: 15_599,
    tilgjengelige: 15_376,
    ventende: 23_398,
    avsluttet: 92,
  },
  {
    tidspunkt: getTidspunktForAntallTimerSiden(41),
    aktive: 15_611,
    tilgjengelige: 15_392,
    ventende: 23_416,
    avsluttet: 78,
  },
  // gap på ~13 timer
  {
    tidspunkt: getTidspunktForAntallTimerSiden(28),
    aktive: 15_683,
    tilgjengelige: 15_539,
    ventende: 23_524,
    avsluttet: 134,
  },
  {
    tidspunkt: getTidspunktForAntallTimerSiden(27),
    aktive: 15_741,
    tilgjengelige: 15_597,
    ventende: 23_611,
    avsluttet: 109,
  },
  {
    tidspunkt: getTidspunktForAntallTimerSiden(26),
    aktive: 15_780,
    tilgjengelige: 15_618,
    ventende: 23_670,
    avsluttet: 148,
  },
  {
    tidspunkt: getTidspunktForAntallTimerSiden(25),
    aktive: 15_756,
    tilgjengelige: 15_568,
    ventende: 23_634,
    avsluttet: 121,
  },
  {
    tidspunkt: getTidspunktForAntallTimerSiden(24),
    aktive: 15_727,
    tilgjengelige: 15_527,
    ventende: 23_590,
    avsluttet: 97,
  },
  {
    tidspunkt: getTidspunktForAntallTimerSiden(23),
    aktive: 15_681,
    tilgjengelige: 15_447,
    ventende: 23_521,
    avsluttet: 63,
  },
  {
    tidspunkt: getTidspunktForAntallTimerSiden(22),
    aktive: 15_640,
    tilgjengelige: 15_406,
    ventende: 23_460,
    avsluttet: 42,
  },
  {
    tidspunkt: getTidspunktForAntallTimerSiden(21),
    aktive: 15_609,
    tilgjengelige: 15_366,
    ventende: 23_413,
    avsluttet: 56,
  },
  {
    tidspunkt: getTidspunktForAntallTimerSiden(20),
    aktive: 15_543,
    tilgjengelige: 15_285,
    ventende: 23_314,
    avsluttet: 88,
  },
  {
    tidspunkt: getTidspunktForAntallTimerSiden(19),
    aktive: 15_485,
    tilgjengelige: 15_238,
    ventende: 23_227,
    avsluttet: 145,
  },
  {
    tidspunkt: getTidspunktForAntallTimerSiden(18),
    aktive: 15_473,
    tilgjengelige: 15_226,
    ventende: 23_209,
    avsluttet: 127,
  },
  {
    tidspunkt: getTidspunktForAntallTimerSiden(17),
    aktive: 15_478,
    tilgjengelige: 15_243,
    ventende: 23_217,
    avsluttet: 71,
  },
  // gap på ~13 timer
  {
    tidspunkt: getTidspunktForAntallTimerSiden(4),
    aktive: 15_546,
    tilgjengelige: 15_414,
    ventende: 23_319,
    avsluttet: 105,
  },
  {
    tidspunkt: getTidspunktForAntallTimerSiden(3),
    aktive: 15_619,
    tilgjengelige: 15_483,
    ventende: 23_428,
    avsluttet: 139,
  },
  {
    tidspunkt: getTidspunktForAntallTimerSiden(2),
    aktive: 15_630,
    tilgjengelige: 15_474,
    ventende: 23_445,
    avsluttet: 82,
  },
  {
    tidspunkt: getTidspunktForAntallTimerSiden(1),
    aktive: 15_613,
    tilgjengelige: 15_426,
    ventende: 23_419,
    avsluttet: 47,
  },
  {
    tidspunkt: getTidspunktForAntallTimerSiden(0.5),
    aktive: 15_623,
    tilgjengelige: 15_423,
    ventende: 23_434,
    avsluttet: 113,
  },
  {
    tidspunkt: getTidspunktForAntallTimerSiden(0),
    aktive: 15_611,
    tilgjengelige: 15_398,
    ventende: 23_416,
    avsluttet: 68,
  },
];

export const A18AlleSaker: Story = {
  args: {
    aktiveOgLedigeTidslinje: ALLE_SAKER_DATA,
  },
};
