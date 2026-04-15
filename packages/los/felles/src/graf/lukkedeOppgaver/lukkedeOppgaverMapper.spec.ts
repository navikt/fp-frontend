import dayjs from 'dayjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { KøStatistikkDto } from '@navikt/fp-types';

import { mapLukkedeOppgaver } from './lukkedeOppgaverMapper';

// Fryser tid til onsdag 10. januar 2024
// → Mandag denne uken:     2024-01-08
// → Mandag forrige uke:    2024-01-01
// → Mandag to uker siden:  2023-12-25
const FRYST_TIDSPUNKT = new Date('2024-01-10T12:00:00.000Z');

const lagStatistikk = (dato: string, avsluttet: number): KøStatistikkDto => ({
  tidspunkt: dayjs(dato).hour(12).toISOString(),
  aktive: 20,
  tilgjengelige: 10,
  ventende: 30,
  avsluttet,
});

describe('lukkedeOppgaverMapper', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(FRYST_TIDSPUNKT);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('skal returnere undefined for alle dager når statistikk er tom', () => {
    const { denneUken, forrigeUke } = mapLukkedeOppgaver([]);

    expect(denneUken.antallPerDag).toEqual([
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ]);
    expect(forrigeUke.antallPerDag).toEqual([
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ]);
  });

  it('skal sette riktig mandagDato for denne uken og forrige uke', () => {
    const { denneUken, forrigeUke } = mapLukkedeOppgaver([]);

    expect(denneUken.mandagDato).toBe('2024-01-08');
    expect(forrigeUke.mandagDato).toBe('2024-01-01');
  });

  it('skal plassere avsluttede oppgaver på riktig dag i denne uken', () => {
    const statistikk = [
      lagStatistikk('2024-01-08', 10), // mandag
      lagStatistikk('2024-01-09', 20), // tirsdag
      lagStatistikk('2024-01-10', 30), // onsdag (i dag)
    ];

    const { denneUken } = mapLukkedeOppgaver(statistikk);

    expect(denneUken.antallPerDag).toEqual([10, 20, 30, undefined, undefined, undefined, undefined]);
  });

  it('skal plassere avsluttede oppgaver på riktig dag i forrige uke', () => {
    const statistikk = [
      lagStatistikk('2024-01-01', 5), // mandag forrige uke
      lagStatistikk('2024-01-03', 15), // onsdag forrige uke
      lagStatistikk('2024-01-05', 25), // fredag forrige uke
    ];

    const { forrigeUke } = mapLukkedeOppgaver(statistikk);

    expect(forrigeUke.antallPerDag).toEqual([5, undefined, 15, undefined, 25, undefined, undefined]);
  });

  it('skal summere flere innslag på samme dato', () => {
    const statistikk = [
      lagStatistikk('2024-01-08', 10),
      lagStatistikk('2024-01-08', 25),
      lagStatistikk('2024-01-08', 5),
    ];

    const { denneUken } = mapLukkedeOppgaver(statistikk);

    expect(denneUken.antallPerDag[0]).toBe(40);
  });

  it('skal beregne onsdagForrigeUke og forrigeUkeTotal som sum referanseuken', () => {
    const statistikk = [
      lagStatistikk('2023-12-25', 11), // man
      lagStatistikk('2023-12-26', 21), // tir
      lagStatistikk('2023-12-27', 31), // ons
      lagStatistikk('2023-12-28', 41), // tor
      lagStatistikk('2023-12-29', 51), // fre

      lagStatistikk('2024-01-01', 10), // man
      lagStatistikk('2024-01-02', 20), // tir
      lagStatistikk('2024-01-03', 30), // ons
      lagStatistikk('2024-01-04', 40), // tor
      lagStatistikk('2024-01-05', 50), // fre
    ];

    const { denneUken, forrigeUke } = mapLukkedeOppgaver(statistikk);

    expect(denneUken.onsdagForrigeUke).toBe(60);
    expect(denneUken.forrigeUkeTotal).toBe(150);

    expect(forrigeUke.onsdagForrigeUke).toBe(63);
    expect(forrigeUke.forrigeUkeTotal).toBe(155);
  });

  it('skal summere onsdagForrigeUke og forrigeUkeTotal som undefined når referanseuken er uten data', () => {
    const statistikk = [
      lagStatistikk('2024-01-01', 10), // man
      lagStatistikk('2024-01-02', 20), // tir
      lagStatistikk('2024-01-03', 30), // ons
      lagStatistikk('2024-01-04', 40), // tor
      lagStatistikk('2024-01-05', 50), // fre
    ];

    const { forrigeUke } = mapLukkedeOppgaver(statistikk);

    expect(forrigeUke.onsdagForrigeUke).toBe(undefined);
    expect(forrigeUke.forrigeUkeTotal).toBe(undefined);
  });

  it('skal ignorere data eldre enn to uker tilbake', () => {
    const statistikk = [
      lagStatistikk('2023-12-18', 99), // tre uker siden — skal ignoreres
      lagStatistikk('2024-01-08', 10), // denne uken
    ];

    const { denneUken, forrigeUke } = mapLukkedeOppgaver(statistikk);

    expect(denneUken.antallPerDag).toEqual([10, undefined, undefined, undefined, undefined, undefined, undefined]);
    expect(forrigeUke.antallPerDag).toEqual([
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ]);
  });

  it('skal behandle avsluttet=0 som et gyldig datapunkt (ikke undefined)', () => {
    const statistikk = [lagStatistikk('2024-01-08', 0)];

    const { denneUken } = mapLukkedeOppgaver(statistikk);

    expect(denneUken.antallPerDag[0]).toBe(0);
  });
});
