import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './AapFaktaIndex.stories';

const { ÅpentAksjonspunkt, LøstAksjonspunkt } = composeStories(stories);

describe('AapFaktaIndex', () => {
  it('skal vise hjelpetekst og skjema når aksjonspunktet er åpent', async () => {
    render(<ÅpentAksjonspunkt />);

    expect(
      await screen.findByText(
        'Denne saken stopper fordi søker har arbeidsavklaringspenger (AAP) i kombinasjon med arbeid og/eller frilans.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Beregningen er korrekt, fortsett behandlingen')).toBeInTheDocument();
  });

  it('skal gi valideringsfeil og sende korrekte verdier ved submit når checkbox er huket av', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    render(<ÅpentAksjonspunkt submitCallback={lagre} />);

    await screen.findByText('Bekreft og fortsett');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));
    expect(lagre).not.toHaveBeenCalled();

    await userEvent.click(screen.getByRole('checkbox'));
    await userEvent.type(screen.getByLabelText('Vurdering'), 'Beregningen er kontrollert og korrekt.');
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5104',
      begrunnelse: 'Beregningen er kontrollert og korrekt.',
    });
  });

  it('skal vise utfylt skjema i lesetilstand når aksjonspunktet er løst', async () => {
    render(<LøstAksjonspunkt />);

    expect(await screen.findByText('Beregningen er korrekt, fortsett behandlingen')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });
});
