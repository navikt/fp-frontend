import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dayjs from 'dayjs';

import * as stories from './UtvalgskriterierForSakslisteForm.stories';

const { MedGittNavn } = composeStories(stories);

describe('UtvalgskriterierForSakslisteForm', () => {
  it('skal vise sakslistenavn som saksbehandler har skrive inn', async () => {
    await MedGittNavn.run();
    expect(await screen.findByText('Navn')).toBeInTheDocument();
    expect(await screen.findByLabelText('Navn')).toHaveValue('liste');
  });

  it('skal vise feilmelding når en fjerner nok tegn til at navnet blir færre enn 3 tegn langt', async () => {
    await MedGittNavn.run();

    expect(await screen.findByText('Navn')).toBeInTheDocument();

    const navnInput = screen.getByLabelText('Navn');
    await userEvent.type(navnInput, '{Backspace}{Backspace}{Backspace}');

    const lagreKnapp = screen.getByRole('button', { name: /Lagre/i });
    await userEvent.click(lagreKnapp);

    expect(await screen.findByText('Du må skrive minst 3 tegn')).toBeInTheDocument();
  });

  it('skal vise feilmelding når en skriver inn bokstaver i fom-datofeltet', async () => {
    await MedGittNavn.run();

    expect(await screen.findByText('Utvalgskriterier')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Relativ periode (dager)'));

    const fomInput = screen.getByLabelText('F.o.m.');
    await userEvent.clear(fomInput);
    await userEvent.type(fomInput, 'bokstaver');

    const lagreKnapp = screen.getByRole('button', { name: /Lagre/i });
    await userEvent.click(lagreKnapp);

    expect(await screen.findByText(/Feltet kan kun inneholde tall/i)).toBeInTheDocument();
  });

  it('skal vise feilmelding når en skriver inn bokstaver i tom-datofeltet', async () => {
    await MedGittNavn.run();

    expect(await screen.findByText('Utvalgskriterier')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Relativ periode (dager)'));

    const tomInput = screen.getByLabelText('T.o.m.');
    await userEvent.clear(tomInput);
    await userEvent.type(tomInput, 'bokstaver');

    const lagreKnapp = screen.getByRole('button', { name: /Lagre/i });
    await userEvent.click(lagreKnapp);
    expect(await screen.findByText(/Feltet kan kun inneholde tall/i)).toBeInTheDocument();
  });

  it('skal vise utrekna dato når det er skrive inn eit gyldig antall dager', async () => {
    await MedGittNavn.run();

    expect(await screen.findByText('Utvalgskriterier')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Relativ periode (dager)'));

    const fomInput = screen.getByLabelText('F.o.m.');
    await userEvent.clear(fomInput);
    await userEvent.type(fomInput, '5');

    const forventetDato = dayjs().add(5, 'd').format('DD.MM.YYYY');
    expect(await screen.findByText(forventetDato)).toBeInTheDocument();
  });
});
