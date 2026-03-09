import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './SletteSakslisteModal.stories';

const { Default } = composeStories(stories);

describe('SletteSakslisteModal', () => {
  it('skal vise modal for sletting av saksliste og så svare ja', async () => {
    const submit = vi.fn();
    render(<Default submit={submit} />);
    expect(await screen.findByText('Ønsker du å slette Saksliste 1?')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    expect(submit).toHaveBeenCalledExactlyOnceWith(1234);
  });

  it('skal vise modal for sletting av saksliste og så svare nei', async () => {
    const cancel = vi.fn();
    render(<Default cancel={cancel} />);
    expect(await screen.findByText('Ønsker du å slette Saksliste 1?')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Nei'));

    expect(cancel).toHaveBeenCalledOnce();
  });
});
