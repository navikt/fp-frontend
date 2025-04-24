import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './OpphevReservasjonModal.stories';

const { Default } = composeStories(stories);

describe('<OpphevReservasjonModal>', () => {
  it('skal vise modal for oppheving av reservasjon', async () => {
    const closeModal = vi.fn();

    await applyRequestHandlers(Default.parameters['msw']);
    const utils = render(<Default closeModal={closeModal} />);

    expect(await screen.findByText('Angi begrunnelse')).toBeInTheDocument();

    const begrunnelseInput = utils.getByLabelText('Begrunnelse for frigjøring av reservasjon');
    await userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(closeModal).toHaveBeenCalledTimes(1));
  });
});
