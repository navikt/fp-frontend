import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './TilretteleggingFaktaIndex.stories';

const {
  TilretteleggingMedVelferdspermisjon,
  ErOverstyrer,
  AksjonspunktForFødselstilretteleggingForFrilanserOgSelvstendigNæringsdrivende,
} = composeStories(stories);

describe('<FodselOgTilretteleggingFaktaIndex>', () => {
  it('skal sjekke valideringer og så bekrefte aksjonspunkt for velferdspermisjon', async () => {
    const bekreft = vi.fn(() => Promise.resolve());

    render(<TilretteleggingMedVelferdspermisjon submitCallback={bekreft} />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();
  });

  it('skal legge til tilretteleggingsbehov', async () => {
    const bekreft = vi.fn(() => Promise.resolve());

    render(<TilretteleggingMedVelferdspermisjon submitCallback={bekreft} />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();
  });

  it('skal vise feilmelding når en ikke har valgt noen tilrettelegginger', async () => {
    render(<TilretteleggingMedVelferdspermisjon />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();
  });

  it('skal overstyre utbetalingsgrad og så lagre', async () => {
    const bekreft = vi.fn(() => Promise.resolve());

    render(<ErOverstyrer submitCallback={bekreft} />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();
  });

  it('skal vise arbeidsforhold det søkt tilrettelegging men ikke kan beregnes svangeskapspenger for', async () => {
    const bekreft = vi.fn(() => Promise.resolve());

    render(<AksjonspunktForFødselstilretteleggingForFrilanserOgSelvstendigNæringsdrivende submitCallback={bekreft} />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();
  });
});
