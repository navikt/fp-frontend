import { composeStories } from '@storybook/react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './FodselFaktaIndex.stories';

const { AksjonspunktTerminbekreftelse, AksjonspunktSjekkManglendeFødsel } = composeStories(stories);

describe('FodselFaktaIndex', () => {
  it('skal bekrefte aksjonspunkt for termin', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    const utils = render(<AksjonspunktTerminbekreftelse submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller terminbekreftelse')).toBeInTheDocument();
    expect(screen.getByText('Opplysninger om termin oppgitt i søknaden')).toBeInTheDocument();
    expect(screen.getByText('Utstedt dato')).toBeInTheDocument();
    expect(screen.getByText('Termindato')).toBeInTheDocument();
    expect(screen.getAllByText('Antall barn')).toHaveLength(2);

    expect(screen.getByText('Opplysninger om fødsel fra folkeregisteret')).toBeInTheDocument();
    expect(screen.getByText('Fødselsdato')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019')).toBeInTheDocument();

    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        antallBarn: 1,
        begrunnelse: 'Dette er en begrunnelse',
        kode: '5001',
        termindato: '2019-01-01',
        utstedtdato: '2019-01-01',
      },
    ]);
  });

  it('skal bekrefte aksjonspunkt for manglende fødsel ved å velge at dokumentasjon foreligger', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    const utils = render(<AksjonspunktSjekkManglendeFødsel submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller mot opplysningene fra fødselsdokumentasjonen')).toBeInTheDocument();
    expect(screen.getByText('Opplysninger om fødsel fra søknaden')).toBeInTheDocument();
    expect(screen.getByText('Utstedt dato')).toBeInTheDocument();
    expect(screen.getAllByText('Fødselsdato')).toHaveLength(3);
    expect(screen.getByText('Antall barn')).toBeInTheDocument();

    expect(screen.getByText('Opplysninger om fødsel fra folkeregisteret')).toBeInTheDocument();
    expect(screen.getAllByText('10.01.2019')).toHaveLength(2);

    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    expect(screen.getByText('Dokumentasjon av fødsel')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Dokumentasjon foreligger'));

    expect(await screen.findByText('Fyll inn dokumenterte opplysninger')).toBeInTheDocument();

    await userEvent.click(screen.getByTitle('Legg til barn'));

    const alleDatofelt = utils.getAllByRole('textbox', { hidden: true });
    const fødselsdatoFelt = alleDatofelt[0];
    await userEvent.type(fødselsdatoFelt, '{backspace}0');
    fireEvent.blur(fødselsdatoFelt);

    const fødselsdatoFelt2 = alleDatofelt[2];
    await userEvent.type(fødselsdatoFelt2, '23.09.2021');
    fireEvent.blur(fødselsdatoFelt2);

    const dødsdatoFelt = alleDatofelt[3];
    await userEvent.type(dødsdatoFelt, '23.09.2021');
    fireEvent.blur(dødsdatoFelt);

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        brukAntallBarnITps: true,
        dokumentasjonForeligger: true,
        kode: '5027',
        uidentifiserteBarn: [
          {
            dodsdato: undefined,
            fodselsdato: '2010-01-01',
          },
          {
            dodsdato: '2021-09-23',
            fodselsdato: '2021-09-23',
          },
        ],
        begrunnelse: 'Dette er en begrunnelse',
      },
    ]);
  });

  it('skal bekrefte aksjonspunkt for manglende fødsel ved å velge at dokumentasjon ikke foreligger', async () => {
    const lagre = vi.fn(() => Promise.resolve());
    const utils = render(<AksjonspunktSjekkManglendeFødsel submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller mot opplysningene fra fødselsdokumentasjonen')).toBeInTheDocument();
    expect(screen.getByText('Opplysninger om fødsel fra søknaden')).toBeInTheDocument();
    expect(screen.getByText('Utstedt dato')).toBeInTheDocument();
    expect(screen.getAllByText('Fødselsdato')).toHaveLength(3);
    expect(screen.getByText('Antall barn')).toBeInTheDocument();

    expect(screen.getByText('Opplysninger om fødsel fra folkeregisteret')).toBeInTheDocument();
    expect(screen.getAllByText('10.01.2019')).toHaveLength(2);

    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    expect(screen.getByText('Dokumentasjon av fødsel')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Dokumentasjon foreligger ikke, bruk opplysningene i folkeregisteret'));

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        brukAntallBarnITps: true,
        dokumentasjonForeligger: false,
        kode: '5027',
        uidentifiserteBarn: [
          {
            dodsdato: undefined,
            fodselsdato: '2019-01-01',
          },
        ],
        begrunnelse: 'Dette er en begrunnelse',
      },
    ]);
  });
});
