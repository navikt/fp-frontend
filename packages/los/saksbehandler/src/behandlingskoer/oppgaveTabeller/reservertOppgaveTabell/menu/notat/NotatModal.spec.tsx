import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';
import { expect } from 'vitest';

import * as api from '@navikt/fp-los-felles';

import * as stories from './NotatModal.stories';

const { Default } = composeStories(stories);

describe('NotatModal', () => {
  it('skal legge til notat på reservasjon', async () => {
    const spy = vi.spyOn(api, 'flyttReservasjon');
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    render(<Default />);

    expect(await screen.findByText('Legg til notat på reservasjon')).toBeInTheDocument();

    const notatInput = screen.getByLabelText('Notat');
    await userEvent.type(notatInput, 'Dette er et testnotat');

    await userEvent.click(screen.getByText('OK'));

    expect(spy).toHaveBeenCalledExactlyOnceWith(123, 'T232332', 'Dette er et testnotat');
  });
});
