import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './AapKombinertAtflFaktaIndex.stories';

const { ÅpentAksjonspunkt, LøstAksjonspunkt } = composeStories(stories);

describe('AapKombinertAtflFaktaIndex', () => {
  it('skal vise hjelpetekst og deaktivert knapp når aksjonspunktet er åpent', async () => {
    render(<ÅpentAksjonspunkt />);

    expect(
      await screen.findByText(
        'Saken har AAP kombinert med arbeid eller frilans. Dette kan gi feil beregning. ' +
          'Kontroller beregningen og gå tilbake til Fakta om beregning for å overstyre dersom beregningen er feil.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Beregningen er korrekt, fortsett behandlingen.')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();
  });

  it('skal aktivere knappen når checkbox hukes av og sende korrekte verdier ved submit', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    render(<ÅpentAksjonspunkt submitCallback={lagre} />);

    expect(await screen.findByText('Bekreft og fortsett')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    await userEvent.click(screen.getByRole('checkbox'));
    await userEvent.type(screen.getByLabelText('Vurdering'), 'Beregningen er kontrollert og korrekt.');

    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeEnabled();
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5104',
      begrunnelse: 'Beregningen er kontrollert og korrekt.',
      erBeregningenKorrekt: true,
    });
  });

  it('skal vise utfylt skjema i lesetilstand når aksjonspunktet er løst', async () => {
    render(<LøstAksjonspunkt />);

    expect(await screen.findByText('Beregningen er korrekt, fortsett behandlingen.')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });
});
