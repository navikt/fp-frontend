import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import { LosUrlFelles } from '../api/fplosFellesApi';
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
    let resolve!: () => void;
    const requestBody = vi.fn();

    applyRequestHandlers({
      handlers: [
        http.post(LosUrlFelles.ENDRE_OPPGAVERESERVASJON, async ({ request }) => {
          requestBody(await request.json());
          await new Promise<void>(res => {
            resolve = res;
          });
          return HttpResponse.json({ erReservert: true });
        }),
      ],
    });

    render(<Default />);

    await userEvent.click(screen.getByRole('button'));
    const datoKnapp = await screen.findByRole('button', { name: 'mandag 12' });
    await userEvent.click(datoKnapp);

    expect(await screen.findByTitle('Lagrer...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();

    resolve();

    await waitFor(() => expect(requestBody).toHaveBeenCalledWith({ oppgaveId: 123, reserverTil: '2026-01-12' }));
    expect(await screen.findByTitle('Lagret')).toBeInTheDocument();

    await waitFor(() => expect(screen.queryByTitle('Lagret')).not.toBeInTheDocument(), {
      timeout: 2000,
    });
    expect(screen.getByTitle('Åpne datovelger')).toBeInTheDocument();

    vi.useRealTimers();
  });
});
