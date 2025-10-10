import { composeStories } from '@storybook/react';
import { render, screen, within } from '@testing-library/react';
import { describe, expect } from 'vitest';

import * as stories from './OmsorgsovertakelseFaktaIndex.stories';

const { EngangsstønadMedAp } = composeStories(stories);

describe('OmsorgsovertakelseFaktaIndex', () => {
  it.skip('skal validere faktavisning', () => {
    render(<EngangsstønadMedAp />);

    const situasjon = within(screen.getByLabelText('Gjeldende opplysninger'));

    const situasjonFødselsdato = within(situasjon.getByLabelText('Fødselsdato'));
    expect(situasjonFødselsdato.getByText('01.10.2022')).toBeInTheDocument();
    expect(situasjonFødselsdato.getByText('FRA SØKNADEN')).toBeInTheDocument();

    const situasjonTermindato = within(situasjon.getByLabelText('Omsorgsovertakelsesdato'));
    expect(situasjonTermindato.getByText('01.01.2023')).toBeInTheDocument();
    expect(situasjonTermindato.getByText('FRA SØKNADEN')).toBeInTheDocument();

    const situasjonUtstedtdato = within(situasjon.getByLabelText('Ankomstdato'));
    expect(situasjonUtstedtdato.getByText('04.01.2023')).toBeInTheDocument();
    expect(situasjonUtstedtdato.getByText('FRA SØKNADEN')).toBeInTheDocument();

    const søknadsBoks = within(screen.getByLabelText('Opplysninger oppgitt i søknaden'));
    expect(søknadsBoks.getByText('Omsorgsovertakelsesdato')).toBeInTheDocument();
    expect(søknadsBoks.getByText('01.01.2023')).toBeInTheDocument();
    expect(søknadsBoks.getByText('Ankomstdato')).toBeInTheDocument();
    expect(søknadsBoks.getByText('04.01.2023')).toBeInTheDocument();
    expect(søknadsBoks.getByText('Fødselsdato')).toBeInTheDocument();
    expect(søknadsBoks.getByText('01.10.2022')).toBeInTheDocument();
    expect(søknadsBoks.getByText('Antall barn')).toBeInTheDocument();
    expect(søknadsBoks.getByText('1')).toBeInTheDocument();
    expect(søknadsBoks.getByText('Er det ektefelles barn?')).toBeInTheDocument();
    expect(søknadsBoks.getByText('Nei')).toBeInTheDocument();
    expect(søknadsBoks.getByText('Delvilkår')).toBeInTheDocument();
    expect(søknadsBoks.getByText('Adopsjon §14-17 første ledd')).toBeInTheDocument();

    const fregBoks = within(screen.getByLabelText('Opplysninger fra Folkeregisteret'));
    expect(fregBoks.getByText('Antall barn')).toBeInTheDocument();
    expect(fregBoks.getByText('1')).toBeInTheDocument();
    expect(fregBoks.getByText('Fødselsdato')).toBeInTheDocument();
    expect(fregBoks.getByText('01.10.2022')).toBeInTheDocument();
  });
});
