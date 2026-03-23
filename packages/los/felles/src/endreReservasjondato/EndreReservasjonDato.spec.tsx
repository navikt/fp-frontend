import { act } from 'react';

import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { ReservasjonStatusDto } from '@navikt/fp-types';

import * as stories from './EndreReservasjonDato.stories';

const { Default } = composeStories(stories);

describe('EndreReservasjonDato', () => {
  it('skal vise ukedag og dato for reservertTilTidspunkt', async () => {
    render(<Default reservertTilTidspunkt="2026-01-15" />);

    expect(await screen.findByText('Torsdag')).toBeInTheDocument();
    expect(screen.getByText('15.01.2026')).toBeInTheDocument();
    expect(screen.getByTitle('Åpne datovelger')).toBeInTheDocument();
  });

  it('skal endre dato på reservasjon', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    vi.setSystemTime(new Date('2026-01-10'));

    let resolve!: (value: ReservasjonStatusDto) => void;
    const promise = new Promise<ReservasjonStatusDto>(res => {
      resolve = res;
    });
    const endreReservasjon = vi.fn().mockReturnValue(promise);

    render(<Default endreReservasjon={endreReservasjon} />);

    await userEvent.click(screen.getByRole('button'));
    const datoKnapp = await screen.findByRole('button', { name: 'mandag 12' });
    await userEvent.click(datoKnapp);

    expect(await screen.findByTitle('Lagrer...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();

    expect(endreReservasjon).toHaveBeenCalledWith('2026-01-12');

    resolve({ erReservert: true });

    await waitFor(() => expect(screen.queryByTitle('Lagrer...')).not.toBeInTheDocument());
    expect(screen.getByTitle('Lagret')).toBeInTheDocument();

    await act(async () => vi.advanceTimersByTimeAsync(2000));

    expect(screen.queryByTitle('Lagret')).not.toBeInTheDocument();
    expect(screen.getByTitle('Åpne datovelger')).toBeInTheDocument();

    vi.useRealTimers();
  });
});
