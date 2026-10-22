import { composeStories } from '@storybook/react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './TotrinnskontrollIndex.stories';

const { Default, LagringFeiler } = composeStories(stories);

const erLagreKall = (request: unknown) =>
  request instanceof Request && request.method === 'POST' && request.url.endsWith('/totrinnskontroll/bekreft');

const godkjennAlleAksjonspunkter = async () => {
  expect(await screen.findByText('Kontroller endrede opplysninger og faglige vurderinger')).toBeInTheDocument();

  const alleGodkjentRadios = screen.getAllByText('Godkjent');
  expect(alleGodkjentRadios).toHaveLength(7);
  for (const radio of alleGodkjentRadios) {
    await userEvent.click(radio);
  }

  await userEvent.click(screen.getByText('Godkjenn vedtaket'));
};

describe('TotrinnskontrollIndex', () => {
  it('skal vise modal når beslutter godkjenner', async () => {
    await Default.run();

    expect(await screen.findByLabelText('Utvid behandling detaljer panel')).toBeInTheDocument();

    await godkjennAlleAksjonspunkter();

    expect(await screen.findByText('Vedtaket er innvilget og blir iverksatt')).toBeInTheDocument();
  });

  it('skal ikke vise modal når lagring av totrinnskontroll feiler', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    await LagringFeiler.run();

    await godkjennAlleAksjonspunkter();

    await waitFor(() => expect(fetchSpy.mock.calls.some(([request]) => erLagreKall(request))).toBe(true));
    await waitFor(() => expect(fetchSpy.mock.settledResults.every(result => result.type !== 'incomplete')).toBe(true));
    await new Promise(resolve => setTimeout(resolve, 50));

    expect(screen.queryByText('Vedtaket er innvilget og blir iverksatt')).not.toBeInTheDocument();
    fetchSpy.mockRestore();
  });
});
