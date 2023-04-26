import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './BeregningsresultatProsessIndex.stories';

const { SaksbehandlerKanIkkeOverstyre, SaksbehandlerKanOverstyre, OverstyrtReadonlyPanel } = composeStories(stories);

describe('<BeregningsresultatProsessIndex>', () => {
  it('skal vise panel som ikke kan overstyres', async () => {
    render(<SaksbehandlerKanIkkeOverstyre />);

    expect(await screen.findByText('Beregning')).toBeInTheDocument();
    expect(screen.getByText('Sats')).toBeInTheDocument();
    expect(screen.getAllByText('92 000 kr')).toHaveLength(2);
    expect(screen.getByText('Antall barn')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Beregnet engangsstønad')).toBeInTheDocument();
    expect(screen.queryByAltText('Overstyr')).not.toBeInTheDocument();
  });

  it('skal velge å overstyre, så avbryte redigering og så overstyre og bekrefte', async () => {
    const lagre = vi.fn();

    const utils = render(<SaksbehandlerKanOverstyre submitCallback={lagre} />);

    expect(await screen.findByText('Beregning')).toBeInTheDocument();
    expect(screen.getByAltText('Overstyr')).toBeInTheDocument();
    expect(screen.queryByAltText('Har overstyrt')).not.toBeInTheDocument();

    await userEvent.click(screen.getByAltText('Overstyr'));

    expect(await screen.findByAltText('Har overstyrt')).toBeInTheDocument();
    expect(screen.queryByAltText('Overstyr')).not.toBeInTheDocument();

    expect(screen.getByText('Bekreft overstyring').closest('button')).toBeDisabled();

    await userEvent.type(utils.getByLabelText('Begrunnelse'), 'Dette er en begrunnelse');

    expect(await screen.findByText('Bekreft overstyring')).toBeEnabled();

    await userEvent.click(screen.getByText('Avbryt'));

    expect(await screen.findByAltText('Overstyr')).toBeInTheDocument();

    await userEvent.click(screen.getByAltText('Overstyr'));

    await userEvent.type(utils.getByLabelText('Begrunnelse'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft overstyring'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      beregnetTilkjentYtelse: 92000,
      kode: '6007',
    });
  });

  it('skal vise readonly panel der saksbehandler har overstyrt', async () => {
    render(<OverstyrtReadonlyPanel />);

    expect(await screen.findByText('Beregning')).toBeInTheDocument();
    expect(screen.getByText('Manuell overstyring av automatisk vurdering')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
    expect(screen.getByText('Endret av saksbehandler')).toBeInTheDocument();
  });
});
