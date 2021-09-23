import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './MeldingerSakIndex.stories';

const { Default, ForSvangerskapspenger } = composeStories(stories);

describe('<MeldingerSakIndex>', () => {
  it('skal bruke default mal og sende brev', async () => {
    const lagre = jest.fn();
    const utils = render(<Default lagre={lagre} />);
    expect(await screen.findByText('Mottaker')).toBeInTheDocument();

    const begrunnelseInput = utils.getByLabelText('Liste over dokumenter (skriv ett dokument pr. linje)');
    userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Send brev'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      brevmalkode: 'INNHEN',
      fritekst: 'Dette er en begrunnelse',
      mottaker: 'Søker',
    });
  });

  it('skal få feilmelding når en ikke har fylt ut liste over dokumenter', async () => {
    const lagre = jest.fn();
    render(<Default lagre={lagre} />);
    expect(await screen.findByText('Mottaker')).toBeInTheDocument();

    userEvent.click(screen.getByText('Send brev'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();
    expect(lagre).toHaveBeenCalledTimes(0);
  });

  it('skal vise feltet årsak men ikke fritekst når en velger mal Revurderingsdokumentasjon og ikke Annet', async () => {
    const lagre = jest.fn();
    const utils = render(<Default lagre={lagre} />);
    expect(await screen.findByText('Mottaker')).toBeInTheDocument();

    userEvent.selectOptions(utils.getByLabelText('Mal'), 'REVURD');
    userEvent.selectOptions(utils.getByLabelText('Årsak'), 'BARNIKKEREG');

    userEvent.click(screen.getByText('Send brev'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      arsakskode: 'BARNIKKEREG',
      brevmalkode: 'REVURD',
      fritekst: ' ',
      mottaker: 'Søker',
    });
  });

  it('skal vise feltet årsak og fritekst når en velger mal Revurderingsdokumentasjon og Annet', async () => {
    const lagre = jest.fn();
    const utils = render(<Default lagre={lagre} />);
    expect(await screen.findByText('Mottaker')).toBeInTheDocument();

    userEvent.selectOptions(utils.getByLabelText('Mal'), 'REVURD');
    userEvent.selectOptions(utils.getByLabelText('Årsak'), 'ANNET');

    const begrunnelseInput = utils.getByLabelText('Fritekst');
    userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Send brev'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      arsakskode: 'ANNET',
      brevmalkode: 'REVURD',
      fritekst: 'Dette er en begrunnelse',
      mottaker: 'Søker',
    });
  });

  it('skal ikke vise årsaksverdi Barn ikke registrert for Svangerskapspenger', async () => {
    const lagre = jest.fn();
    const utils = render(<ForSvangerskapspenger lagre={lagre} />);
    expect(await screen.findByText('Mottaker')).toBeInTheDocument();

    userEvent.selectOptions(utils.getByLabelText('Mal'), 'REVURD');

    expect(await screen.findByText('Annet')).toBeInTheDocument();
    expect(screen.queryByText('Barn ikke registrert i folkeregisteret')).not.toBeInTheDocument();
  });
});
