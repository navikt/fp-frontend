import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './BrevRedigeringModal.stories';

const { MedOpprinneligHtml } = composeStories(stories);

vi.hoisted(() => {
  Object.defineProperty(globalThis, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      media: query,
      onchange: null,
      addListener: vi.fn(), // Deprecated
      removeListener: vi.fn(), // Deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

describe('BrevRedigeringModal', () => {
  it('skal vise redigering av opprinnelig brev', async () => {
    const forhåndsvisBrev = vi.fn();

    render(<MedOpprinneligHtml forhåndsvisBrev={forhåndsvisBrev} />);

    expect(await screen.findByText('Rediger brev')).toBeInTheDocument();
    expect(screen.getByText(/ØISTEIN SALAMANDER/)).toBeInTheDocument();

    await userEvent.click(screen.getByText('Forhåndsvis brev'));

    await waitFor(() => expect(forhåndsvisBrev).toHaveBeenCalledTimes(1));
    expect(forhåndsvisBrev).toHaveBeenCalledWith(
      expect.stringContaining('Nav har innvilget søknaden din om 100 prosent foreldrepenger'),
    );
  });
});
