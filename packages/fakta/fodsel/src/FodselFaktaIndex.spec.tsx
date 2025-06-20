import { composeStories } from '@storybook/react';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './FodselFaktaIndex.stories';

const { Default, APTerminbekreftelse, APSjekkManglendeFødselPåEngangstønad, APSjekkManglendeFødselPåForeldrepenger } =
  composeStories(stories);

describe('FodselFaktaIndex', () => {
  it('skal bekrefte aksjonspunkt for termin', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    render(<APTerminbekreftelse submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller terminbekreftelse')).toBeInTheDocument();

    const søknadsBoks = within(screen.getByLabelText('Opplysninger oppgitt i søknaden'));
    expect(søknadsBoks.getByText('Termindato')).toBeInTheDocument();
    expect(søknadsBoks.getByText('24.06.2025')).toBeInTheDocument();
    expect(søknadsBoks.getByText('Utstedtdato')).toBeInTheDocument();
    expect(søknadsBoks.getByText('20.05.2025')).toBeInTheDocument();
    expect(søknadsBoks.getByText('Antall barn')).toBeInTheDocument();
    expect(søknadsBoks.getByText('1')).toBeInTheDocument();
    expect(søknadsBoks.getByText('Vis terminbekreftelse')).toBeInTheDocument();

    const fregBoks = within(screen.getByLabelText('Opplysninger fra Folkeregisteret'));
    expect(fregBoks.getByText('Det er ikke registrert noen fødselshendelse i Folkeregisteret')).toBeInTheDocument();

    const apBoks = within(screen.getByLabelText('Kontroller opplysninger om termin'));

    const apBoksTermindato = apBoks.getByLabelText('Termindato');
    const apBoksUtstedtdato = apBoks.getByLabelText('Utstedtdato');
    const apBoksAntallBarn = apBoks.getByLabelText('Antall barn');

    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    expect(apBoksTermindato).toHaveValue('24.06.2025');
    await userEvent.clear(apBoksTermindato);
    await userEvent.type(apBoksTermindato, '25.06.2025');

    expect(apBoksUtstedtdato).toHaveValue('20.05.2025');
    await userEvent.clear(apBoksUtstedtdato);
    await userEvent.type(apBoksUtstedtdato, '21.05.2025');

    expect(apBoksAntallBarn).toHaveValue('1');
    await userEvent.clear(apBoksAntallBarn);
    await userEvent.type(apBoksAntallBarn, '2');

    await userEvent.type(screen.getByLabelText('Vurdering'), 'Dette er en begrunnelse');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      kode: '5001',
      termindato: '2025-06-25',
      utstedtdato: '2025-05-21',
      antallBarn: 2,
    });
  });

  it('skal vise fakta i revurdering ved fødselshendlese', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    render(<Default submitCallback={lagre} />);

    const situasjon = within(screen.getByLabelText('Gjeldende opplysninger'));

    const situasjonTermindato = within(situasjon.getByLabelText('Termindato'));
    expect(situasjonTermindato.getByText('10.06.2025')).toBeInTheDocument();
    expect(situasjonTermindato.getByText('FRA SØKNADEN')).toBeInTheDocument();

    const situasjonUtstedtdato = within(situasjon.getByLabelText('Utstedtdato'));
    expect(situasjonUtstedtdato.getByText('10.05.2025')).toBeInTheDocument();
    expect(situasjonUtstedtdato.getByText('FRA SØKNADEN')).toBeInTheDocument();

    const situasjonFødselsdato = within(situasjon.getByLabelText('Fødselsdato'));
    expect(situasjonFødselsdato.getByText('03.06.2025')).toBeInTheDocument();
    expect(situasjonFødselsdato.getByText('FRA FOLKEREGISTERET')).toBeInTheDocument();

    const søknadsBoks = within(screen.getByLabelText('Opplysninger oppgitt i søknaden'));
    expect(søknadsBoks.getByText('Termindato')).toBeInTheDocument();
    expect(søknadsBoks.getByText('10.06.2025')).toBeInTheDocument();
    expect(søknadsBoks.getByText('Utstedtdato')).toBeInTheDocument();
    expect(søknadsBoks.getByText('10.05.2025')).toBeInTheDocument();
    expect(søknadsBoks.getByText('Antall barn')).toBeInTheDocument();
    expect(søknadsBoks.getByText('1')).toBeInTheDocument();

    const fregBoks = within(screen.getByLabelText('Opplysninger fra Folkeregisteret'));
    expect(fregBoks.getByText('Antall barn')).toBeInTheDocument();
    expect(fregBoks.getByText('1')).toBeInTheDocument();
    expect(fregBoks.getByText('Fødselsdato')).toBeInTheDocument();
    expect(fregBoks.getByText('03.06.2025')).toBeInTheDocument();
  });

  it('skal bekrefte aksjonspunkt for manglende fødsel ved å velge at dokumentasjon foreligger', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    render(<APSjekkManglendeFødselPåForeldrepenger submitCallback={lagre} />);

    const apBoks = within(screen.getByLabelText('Kontroller opplysninger om fødsel'));
    expect(apBoks.getByText('Er barnet født?')).toBeInTheDocument();

    expect(apBoks.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    await userEvent.click(apBoks.getByText('Ja'));

    await userEvent.click(apBoks.getByText('Legg til barn'));

    const alleDatofelt = apBoks.getAllByRole('textbox', { hidden: true });

    const fødselsdatoFelt2 = alleDatofelt[2];
    await userEvent.type(fødselsdatoFelt2, '05.05.2025');
    fireEvent.blur(fødselsdatoFelt2);

    const dødsdatoFelt = alleDatofelt[3];
    await userEvent.type(dødsdatoFelt, '05.05.2025');
    fireEvent.blur(dødsdatoFelt);

    await userEvent.type(apBoks.getByLabelText('Vurdering'), 'Dette er en begrunnelse');

    expect(await apBoks.findByText('Bekreft og fortsett')).toBeEnabled();

    await userEvent.click(apBoks.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5027',
      erBarnFødt: true,
      barn: [
        {
          fødselsdato: '2025-05-04',
          dødsdato: undefined,
        },
        {
          fødselsdato: '2025-05-05',
          dødsdato: '2025-05-05',
        },
      ],
      begrunnelse: 'Dette er en begrunnelse',
    });
  });

  it('skal bekrefte aksjonspunkt for manglende fødsel ved å velge at dokumentasjon ikke foreligger', async () => {
    const lagre = vi.fn(() => Promise.resolve());
    render(<APSjekkManglendeFødselPåEngangstønad submitCallback={lagre} />);

    const apBoks = within(screen.getByLabelText('Kontroller opplysninger om fødsel'));
    expect(apBoks.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    expect(apBoks.getByText('Er barnet født?')).toBeInTheDocument();
    await userEvent.click(apBoks.getByLabelText('Nei'));
    await userEvent.type(apBoks.getByLabelText('Vurdering'), 'Dette er en begrunnelse');

    expect(await apBoks.findByText('Bekreft og fortsett')).toBeEnabled();

    await userEvent.click(apBoks.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5027',
      erBarnFødt: false,
      begrunnelse: 'Dette er en begrunnelse',
    });
  });
});
