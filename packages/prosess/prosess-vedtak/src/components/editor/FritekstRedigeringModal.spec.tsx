import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import { DokumentMalType } from '@navikt/fp-kodeverk';

import * as stories from './FritekstRedigeringModal.stories';

const { MedOpprinneligHtml } = composeStories(stories);

describe('FritekstRedigeringModal', () => {
  it('skal vise redigering av opprinnelig', async () => {
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
      gjelderVedtak: true,
      dokumentMal: DokumentMalType.FRITEKST_HTML,
      fritekst: expect.stringContaining('Nav har innvilget søknaden din om 100 prosent foreldrepenger'),
    });
  });
});
