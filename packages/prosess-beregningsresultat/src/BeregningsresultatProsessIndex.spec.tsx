import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './BeregningsresultatProsessIndex.stories';

const { SaksbehandlerKanIkkeOverstyre, SaksbehandlerKanOverstyre, OverstyrtReadonlyPanel } = composeStories(stories);

describe('<BeregningsresultatProsessIndex>', () => {
  it('skal vise panel som ikke kan overstyres', async () => {
    render(<SaksbehandlerKanIkkeOverstyre />);

    expect(await screen.findByText('Beregning')).toBeInTheDocument();
    expect(screen.getByText('Sats')).toBeInTheDocument();
    expect(screen.getByText('100 kr')).toBeInTheDocument();
    expect(screen.getByText('Antall barn')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Beregnet engangsstønad')).toBeInTheDocument();
    expect(screen.getByText('100 kr')).toBeInTheDocument();
    expect(screen.queryByAltText('Overstyr')).not.toBeInTheDocument();
  });

  it('skal velge å overstyre, så avbryte redigering og så overstyre og bekrefte', async () => {
    const lagre = jest.fn();

    const utils = render(<SaksbehandlerKanOverstyre submitCallback={lagre} />);

    expect(await screen.findByText('Beregning')).toBeInTheDocument();
    expect(screen.getByAltText('Overstyr')).toBeInTheDocument();

    userEvent.click(screen.getByText('Overstyr'));

    expect(await screen.findByText('Overstyr')).toBeDisabled();

    expect(screen.getByText('Bekreft overstyring')).toBeDisabled();

    userEvent.type(utils.getByLabelText('Begrunnelse'), 'Dette er en begrunnelse');

    expect(await screen.findByText('Bekreft overstyring')).toBeEnabled();

    userEvent.click(screen.getByText('Avbryt'));

    expect(await screen.findByText('Overstyr')).toBeEnabled();

    userEvent.click(screen.getByText('Overstyr'));

    userEvent.type(utils.getByLabelText('Begrunnelse'), 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Bekreft overstyring'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      begrunnelse: undefined,
      fritekstBrev: undefined,
      kode: '5015',
      overskrift: undefined,
      skalBrukeOverstyrendeFritekstBrev: false,
    }]);
  });

  it('skal vise readonly panel der saksbehandler har overstyrt', async () => {
    render(<OverstyrtReadonlyPanel />);

    expect(await screen.findByText('Beregning')).toBeInTheDocument();
    expect(screen.getByText('Manuell overstyring av automatisk vurdering')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
    expect(screen.getByText('Endret av saksbehandler')).toBeInTheDocument();
    expect(screen.queryByAltText('Overstyr')).not.toBeInTheDocument();
  });
});
