import { act } from 'react';

import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { ReservasjonStatusDto } from '@navikt/fp-types';

import * as stories from './EndreReservasjonDato.stories';

const { Default } = composeStories(stories);

const STATIC_DATE = new Date('2026-01-10');
const NEXT_WEEKDAY_DAY = '12';
const NEXT_WEEKDAY_ISO = '2026-01-12';

describe('EndreReservasjonDato', () => {
  beforeAll(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    vi.setSystemTime(STATIC_DATE);
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('skal vise ukedag og dato for reservertTilTidspunkt', async () => {
    render(<Default reservertTilTidspunkt="2026-01-15" />);

    expect(await screen.findByText('Torsdag')).toBeInTheDocument();
    expect(screen.getByText('15.01.2026')).toBeInTheDocument();
    expect(screen.getByTitle('Åpne datovelger')).toBeInTheDocument();
  });

  it('skal endre dato på reservasjon', async () => {
    const endreReservasjon = lagUtsattPromise();

    render(<Default endreReservasjon={endreReservasjon} />);

    await userEvent.click(screen.getByRole('button'));
    const datoKnapp = await screen.findByRole('button', { name: `mandag ${NEXT_WEEKDAY_DAY}` });
    await userEvent.click(datoKnapp);

    expect(await screen.findByTitle('Lagrer...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();

    endreReservasjon.resolve({ erReservert: true });

    expect(endreReservasjon).toHaveBeenCalledWith(NEXT_WEEKDAY_ISO);
    expect(await screen.findByTitle('Lagret')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    await waitFor(() => expect(screen.queryByTitle('Lagret')).not.toBeInTheDocument());
    expect(screen.getByTitle('Åpne datovelger')).toBeInTheDocument();
  });
});

const lagUtsattPromise = () => {
  let resolve!: (value: ReservasjonStatusDto) => void;
  const promise = new Promise<ReservasjonStatusDto>(res => {
    resolve = res;
  });
  const mockFn = vi.fn(() => promise);
  return Object.assign(mockFn, { resolve });
};
