import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { SakslisteAvdeling } from '../typer/sakslisteAvdelingTsType.ts';
import * as stories from './SletteSakslisteModal.stories';

const { Default } = composeStories(stories);

describe('SletteSakslisteModal', () => {
  it('skal vise modal for sletting av saksliste og så svare ja', async () => {
    const submit = vi.fn();
    render(<Default submit={submit} />);
    expect(await screen.findByText('Ønsker du å slette Saksliste 1?')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    await waitFor(() => expect(submit).toHaveBeenCalledTimes(1));
    expect(submit).toHaveBeenNthCalledWith(1, {
      sakslisteId: 1,
      navn: 'Saksliste 1',
      behandlingTyper: [],
      fagsakYtelseTyper: [],
      sortering: {
        sorteringType: 'BEHFRIST',
        fra: 1,
        til: 4,
        periodefilter: 'RELATIV_PERIODE_DAGER',
      },
      sorteringTyper: [],
      saksbehandlerIdenter: [],
      andreKriterie: {
        inkluder: [],
        ekskluder: [],
      },
    } satisfies SakslisteAvdeling);
  });

  it('skal vise modal for sletting av saksliste og så svare nei', async () => {
    const cancel = vi.fn();
    render(<Default cancel={cancel} />);
    expect(await screen.findByText('Ønsker du å slette Saksliste 1?')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Nei'));

    await waitFor(() => expect(cancel).toHaveBeenCalledTimes(1));
  });
});
