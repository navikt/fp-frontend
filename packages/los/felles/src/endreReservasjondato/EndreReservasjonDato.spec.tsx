import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import * as api from '../api/fplosFellesApi';
import * as stories from './EndreReservasjonDato.stories';

const { Default } = composeStories(stories);

describe('EndreReservasjonDato', () => {
  it('skal vise ukedag og dato for reservertTilTidspunkt', async () => {
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    render(<Default reservertTilTidspunkt="2026-01-15" />);

    expect(await screen.findByText('Torsdag')).toBeInTheDocument();
    expect(screen.getByText('15.01.2026')).toBeInTheDocument();
    expect(screen.getByTitle('Åpne datovelger')).toBeInTheDocument();
  });

  it('skal endre dato på reservasjon', async () => {
    vi.setSystemTime('2026-01-12');

    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);

    const spy = vi.spyOn(api, 'endreReservasjon');

    render(<Default reservertTilTidspunkt="2026-01-18" />);

    await userEvent.click(screen.getByTitle('Åpne datovelger'));
    const datoKnapp = await screen.findByRole('button', { name: 'mandag 12' });
    await userEvent.click(datoKnapp);

    expect(spy).toHaveBeenCalledExactlyOnceWith(123, '2026-01-12');
    expect(screen.getByTitle('Lagret')).toBeInTheDocument();

    await waitFor(() => expect(screen.getByTitle('Åpne datovelger')).toBeInTheDocument(), {
      timeout: 2500,
    });

    vi.useRealTimers();
  });
});
