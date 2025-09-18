import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import { DokumentMalType } from '@navikt/fp-kodeverk';

import * as stories from './FritekstRedigeringModal.stories';

const { MedOpprinneligHtml } = composeStories(stories);

describe('FritekstRedigeringModal', () => {
  vi.hoisted(() => {
    Object.defineProperty(window, 'matchMedia', {
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

  it('skal vise redigering av opprinnelig brev', async () => {
    const forhåndsvisBrev = vi.fn();

    render(<MedOpprinneligHtml forhåndsvisBrev={forhåndsvisBrev} />);

    expect(await screen.findByText('Rediger brev')).toBeInTheDocument();
    expect(screen.getByText(/ØISTEIN SALAMANDER/)).toBeInTheDocument();

    await userEvent.click(screen.getByText('Forhåndsvis brev'));

    await waitFor(() => expect(forhåndsvisBrev).toHaveBeenCalledTimes(1));
    expect(forhåndsvisBrev).toHaveBeenNthCalledWith(1, {
      automatiskVedtaksbrev: false,
      dokumentMal: DokumentMalType.FRITEKST_HTML,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      fritekst: expect.stringContaining('Nav har innvilget søknaden din om 100 prosent foreldrepenger'),
    });
  });
});
