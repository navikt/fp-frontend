import { act, render, screen } from '@testing-library/react';

import { PanelDataPrioritetProvider, useSkalHenteData } from './PanelDataPrioritetContext';

const IDLE_FALLBACK_MS = 300;

interface PanelProps {
  id: string;
  erAktiv?: boolean;
  skalVisesIMeny?: boolean;
}

const Panel = ({ id, erAktiv = false, skalVisesIMeny = true }: PanelProps) => (
  <span data-testid={id}>{String(useSkalHenteData(id, erAktiv, skalVisesIMeny))}</span>
);

const hentar = (id: string) => screen.getByTestId(id).textContent === 'true';

describe('PanelDataPrioritetContext', () => {
  beforeEach(() => {
    // Tvingar fallback-stien i planleggPåIdle, slik at falske timerar styrer køen.
    vi.stubGlobal('requestIdleCallback', undefined);
    vi.stubGlobal('cancelIdleCallback', undefined);
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  const tikk = async () => {
    await act(async () => {
      await vi.advanceTimersByTimeAsync(IDLE_FALLBACK_MS);
    });
  };

  const visPaneler = () =>
    render(
      <PanelDataPrioritetProvider>
        <Panel id="aktiv" erAktiv />
        <Panel id="bakgrunn1" />
        <Panel id="bakgrunn2" />
        <Panel id="bakgrunn3" />
        <Panel id="skjult" skalVisesIMeny={false} />
      </PanelDataPrioritetProvider>,
    );

  it('skal hente data for det aktive panelet med ein gong, og ikkje for dei andre', () => {
    visPaneler();

    expect(hentar('aktiv')).toBe(true);
    expect(hentar('bakgrunn1')).toBe(false);
    expect(hentar('bakgrunn2')).toBe(false);
    expect(hentar('bakgrunn3')).toBe(false);
  });

  it('skal prefetche bakgrunnspanel batchvis i registreringsrekkefølge', async () => {
    visPaneler();

    await tikk();

    expect(hentar('bakgrunn1')).toBe(true);
    expect(hentar('bakgrunn2')).toBe(true);
    expect(hentar('bakgrunn3')).toBe(false);

    await tikk();

    expect(hentar('bakgrunn3')).toBe(true);
  });

  it('skal aldri hente data for panel som ikkje er synlege i menyen', async () => {
    visPaneler();

    await tikk();
    await tikk();
    await tikk();

    expect(hentar('skjult')).toBe(false);
  });

  it('skal ikkje planlegge fleire tikk enn nødvendig når køen er tom', async () => {
    visPaneler();

    await tikk();
    await tikk();

    expect(vi.getTimerCount()).toBe(0);
  });
});
