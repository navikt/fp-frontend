import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { DokumentMalType } from '@navikt/fp-types';

import * as stories from './MeldingerSakIndex.stories';

const { Default, ForSvangerskapspenger, BrukerManglerAdresse } = composeStories(stories);

const brukerenHarIkkeAdresseText =
  'Brukeren har ikke en registrert adresse. Utsendelse av brev kan feile om brukeren ikke er digital.';

describe('MeldingerSakIndex', () => {
  it('skal bruke default mal og sende brev', async () => {
    const lagre = vi.fn();
    render(<Default submitCallback={lagre} />);
    expect(await screen.findByText('Mal')).toBeInTheDocument();

    const begrunnelseInput = screen.getByLabelText('Liste over dokumenter (skriv ett dokument pr. linje)');
    await userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Send brev'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      brevmalkode: 'INNOPP',
      fritekst: 'Dette er en begrunnelse',
    });
  });

  it('skal få feilmelding når en ikke har fylt ut liste over dokumenter', async () => {
    const lagre = vi.fn();
    render(<Default submitCallback={lagre} />);
    expect(await screen.findByText('Mal')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Send brev'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();
    expect(lagre).toHaveBeenCalledTimes(0);
  });

  it('skal vise feltet årsak men ikke fritekst når en velger mal Revurderingsdokumentasjon og ikke Annet', async () => {
    const lagre = vi.fn();
    render(<Default submitCallback={lagre} />);
    expect(await screen.findByText('Mal')).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByLabelText('Mal'), 'VARREV' satisfies DokumentMalType);
    await userEvent.selectOptions(screen.getByLabelText('Årsak'), 'BARNIKKEREG');

    await userEvent.click(screen.getByText('Send brev'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      arsakskode: 'BARNIKKEREG',
      brevmalkode: 'VARREV',
      fritekst: ' ',
    });
  });

  it('skal vise feltet årsak og fritekst når en velger mal Revurderingsdokumentasjon og Annet', async () => {
    const lagre = vi.fn();
    render(<Default submitCallback={lagre} />);
    expect(await screen.findByText('Mal')).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByLabelText('Mal'), 'VARREV' satisfies DokumentMalType);
    await userEvent.selectOptions(screen.getByLabelText('Årsak'), 'ANNET');

    const begrunnelseInput = screen.getByLabelText('Fritekst');
    await userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Send brev'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      arsakskode: 'ANNET',
      brevmalkode: 'VARREV',
      fritekst: 'Dette er en begrunnelse',
    });
    expect(screen.queryByText(brukerenHarIkkeAdresseText)).not.toBeInTheDocument();
  });

  it('skal ikke vise årsaksverdi Barn ikke registrert for Svangerskapspenger', async () => {
    const lagre = vi.fn();
    render(<ForSvangerskapspenger submitCallback={lagre} />);
    expect(await screen.findByText('Mal')).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByLabelText('Mal'), 'VARREV' satisfies DokumentMalType);

    expect(await screen.findByText('Annet')).toBeInTheDocument();
    expect(screen.queryByText('Barn ikke registrert i folkeregisteret')).not.toBeInTheDocument();
    expect(screen.queryByText(brukerenHarIkkeAdresseText)).not.toBeInTheDocument();
  });

  it('skal vise melding til saksbehandler at bruker ikke har en adresse registrert', async () => {
    const lagre = vi.fn();
    render(<BrukerManglerAdresse submitCallback={lagre} />);
    expect(await screen.findByText('Mal')).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByLabelText('Mal'), 'VARREV' satisfies DokumentMalType);

    expect(await screen.findByText(brukerenHarIkkeAdresseText)).toBeInTheDocument();
  });
});
