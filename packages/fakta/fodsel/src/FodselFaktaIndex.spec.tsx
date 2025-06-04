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

    const utils = render(<APTerminbekreftelse submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller terminbekreftelse')).toBeInTheDocument();

    const søknadsBoks = within(screen.getByLabelText('Opplysninger oppgitt i søknaden'));
    expect(søknadsBoks.getByText('Termindato')).toBeInTheDocument();
    expect(søknadsBoks.getByText('24.06.2025')).toBeInTheDocument();
    expect(søknadsBoks.getByText('Utstedtdato')).toBeInTheDocument();
    expect(søknadsBoks.getByText('20.05.2025')).toBeInTheDocument();
    expect(søknadsBoks.getByText('Antall barn')).toBeInTheDocument();
    expect(søknadsBoks.getByText('1')).toBeInTheDocument();

    const fregBoks = within(screen.getByLabelText('Opplysninger fra folkeregisteret'));
    expect(fregBoks.getByText('Det er ikke registrert noen fødselshendelse i folkeregisteret')).toBeInTheDocument();

    const apBoks = within(screen.getByLabelText('Kontroller opplysninger om termin oppgitt i søknaden'));

    expect(apBoks.getByLabelText('Utstedtdato')).toHaveValue('20.05.2025');
    expect(apBoks.getByLabelText('Termindato')).toHaveValue('24.06.2025');
    expect(apBoks.getByLabelText('Antall barn')).toHaveValue('1');

    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    await userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en begrunnelse');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      antallBarn: 1,
      begrunnelse: 'Dette er en begrunnelse',
      kode: '5001',
      termindato: '2025-06-24',
      utstedtdato: '2025-05-20',
    });
  });

  it('skal vise fakta i revurdering ved fødselshendlese', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    render(<Default submitCallback={lagre} />);

    const situasjon = within(screen.getByLabelText('Gjeldende opplysninger'));

    expect(situasjon.getAllByText('FRA SØKNADEN')).toHaveLength(2);
    expect(situasjon.getByText('Termindato')).toBeInTheDocument();
    expect(situasjon.getByText('10.06.2025')).toBeInTheDocument();
    expect(situasjon.getByText('Utstedtdato')).toBeInTheDocument();
    expect(situasjon.getByText('10.05.2025')).toBeInTheDocument();

    expect(situasjon.getByText('Fødselsdato')).toBeInTheDocument();
    expect(situasjon.getByText('03.06.2025')).toBeInTheDocument();
    expect(situasjon.getByText('FRA FOLKEREGISTERET')).toBeInTheDocument();

    const søknadsBoks = within(screen.getByLabelText('Opplysninger oppgitt i søknaden'));
    expect(søknadsBoks.getByText('Termindato')).toBeInTheDocument();
    expect(søknadsBoks.getByText('10.06.2025')).toBeInTheDocument();
    expect(søknadsBoks.getByText('Utstedtdato')).toBeInTheDocument();
    expect(søknadsBoks.getByText('10.05.2025')).toBeInTheDocument();
    expect(søknadsBoks.getByText('Antall barn')).toBeInTheDocument();
    expect(søknadsBoks.getByText('1')).toBeInTheDocument();

    const fregBoks = within(screen.getByLabelText('Opplysninger fra folkeregisteret'));
    expect(fregBoks.getByText('Antall barn')).toBeInTheDocument();
    expect(fregBoks.getByText('1')).toBeInTheDocument();
    expect(fregBoks.getByText('Fødselsdato')).toBeInTheDocument();
    expect(fregBoks.getByText('03.06.2025')).toBeInTheDocument();
  });

  it('skal bekrefte aksjonspunkt for manglende fødsel ved å velge at dokumentasjon foreligger', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    const utils = render(<APSjekkManglendeFødselPåForeldrepenger submitCallback={lagre} />);

    const apBoks = within(screen.getByLabelText('Kontroller dokumentasjon av fødsel'));
    expect(apBoks.getByText('Fyll inn dokumenterte fødselsopplysninger')).toBeInTheDocument();
    expect(apBoks.getByLabelText('Ingen opplysninger om barn (avslag)')).toBeChecked();

    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    await userEvent.click(screen.getByText('Registrer opplysninger om barn'));

    await userEvent.click(screen.getByTitle('Legg til barn'));

    const alleDatofelt = utils.getAllByRole('textbox', { hidden: true });

    const fødselsdatoFelt2 = alleDatofelt[2];
    await userEvent.type(fødselsdatoFelt2, '05.05.2025');
    fireEvent.blur(fødselsdatoFelt2);

    const dødsdatoFelt = alleDatofelt[3];
    await userEvent.type(dødsdatoFelt, '05.05.2025');
    fireEvent.blur(dødsdatoFelt);

    await userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en begrunnelse');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      brukAntallBarnITps: false,
      dokumentasjonForeligger: true,
      kode: '5027',
      uidentifiserteBarn: [
        {
          fodselsdato: '2025-05-04',
          dodsdato: undefined,
        },
        {
          fodselsdato: '2025-05-05',
          dodsdato: '2025-05-05',
        },
      ],
      begrunnelse: 'Dette er en begrunnelse',
    });
  });

  it('skal bekrefte aksjonspunkt for manglende fødsel ved å velge at dokumentasjon ikke foreligger', async () => {
    const lagre = vi.fn(() => Promise.resolve());
    const utils = render(<APSjekkManglendeFødselPåEngangstønad submitCallback={lagre} />);

    const apBoks = within(screen.getByLabelText('Kontroller dokumentasjon av fødsel'));
    expect(apBoks.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    expect(apBoks.getByText('Fyll inn dokumenterte fødselsopplysninger')).toBeInTheDocument();
    expect(apBoks.getByLabelText('Ingen opplysninger om barn (avslag)')).toBeChecked();
    await userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en begrunnelse');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      brukAntallBarnITps: false,
      dokumentasjonForeligger: false,
      kode: '5027',
      uidentifiserteBarn: [
        {
          dodsdato: undefined,
          fodselsdato: '2025-05-04',
        },
      ],
      begrunnelse: 'Dette er en begrunnelse',
    });
  });
});
