import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import redigertInnhold from '../../../.storybook/brevmal/redigertInnhold.html?raw';
import * as stories from './FritekstRedigeringModal.stories';

const { MedOpprinneligHtml } = composeStories(stories);

describe('FritekstRedigeringModal', () => {
  it.skip('skal vise redigering av opprinnelig', async () => {
    const refetchBrevOverstyring = vi.fn();
    const mellomlagreBrevOverstyring = vi.fn();
    const forhåndsvisBrev = vi.fn();

    render(
      <MedOpprinneligHtml
        mellomlagreBrevOverstyring={mellomlagreBrevOverstyring}
        refetchBrevOverstyring={refetchBrevOverstyring}
        forhåndsvisBrev={forhåndsvisBrev}
      />,
    );

    expect(await screen.findByText('Rediger brev')).toBeInTheDocument();
    expect(screen.getByText(/ØISTEIN SALAMANDER/)).toBeInTheDocument();

    await userEvent.click(screen.getByText('Forhåndsvis brev'));

    await waitFor(() => expect(forhåndsvisBrev).toHaveBeenCalledTimes(1));
    expect(forhåndsvisBrev).toHaveBeenNthCalledWith(1, {
      automatiskVedtaksbrev: false,
      dokumentMal: 'FRIHTM',
      fritekst: redigertInnhold,
    });
  });
});
