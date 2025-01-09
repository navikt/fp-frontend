import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './TotrinnskontrollIndex.stories';

const { Default } = composeStories(stories);

describe('TotrinnskontrollIndex', () => {
  it('skal vise modal når beslutter godkjenner', async () => {
    await applyRequestHandlers(Default.parameters.msw);
    render(<Default />);

    expect(await screen.findByText('Kontroller endrede opplysninger og faglige vurderinger')).toBeInTheDocument();

    const alleGodkjentRadios = screen.getAllByText('Godkjent');
    expect(alleGodkjentRadios).toHaveLength(7);
    await userEvent.click(alleGodkjentRadios[0]);
    await userEvent.click(alleGodkjentRadios[1]);
    await userEvent.click(alleGodkjentRadios[2]);
    await userEvent.click(alleGodkjentRadios[3]);
    await userEvent.click(alleGodkjentRadios[4]);
    await userEvent.click(alleGodkjentRadios[5]);
    await userEvent.click(alleGodkjentRadios[6]);

    await userEvent.click(screen.getByText('Godkjenn vedtaket'));

    expect(await screen.findByText('Vedtaket er innvilget og blir iverksatt')).toBeInTheDocument();
  });
});
