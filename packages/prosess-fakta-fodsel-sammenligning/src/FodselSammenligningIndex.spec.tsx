import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './FodselSammenligningIndex.stories';

const {
  PanelForNårBehandlingstypeErRevurdering, PanelForNårBehandlingstypeErFørstegangssoknad, PanelForMedVisningAvSvangerskapsuke,
} = composeStories(stories);

describe('<FodselSammenligningIndex>', () => {
  it('skal vise panel der behandling er av type revurdering', async () => {
    render(<PanelForNårBehandlingstypeErRevurdering />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Termindato')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019')).toBeInTheDocument();
    expect(screen.getByText('Antall barn')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();

    expect(screen.getByText('Opplysninger om fødsel fra folkeregisteret')).toBeInTheDocument();
    expect(screen.getByText('Dødfødsel')).toBeInTheDocument();
    expect(screen.getByText('Fødselsdato')).toBeInTheDocument();
    expect(screen.getAllByText('10.01.2019')).toHaveLength(2);
    expect(screen.getByText('Dødsdato')).toBeInTheDocument();
    expect(screen.getByText('Død')).toBeInTheDocument();
  });

  it('skal vise panel der behandling er av type førstegangsbehandling', async () => {
    render(<PanelForNårBehandlingstypeErFørstegangssoknad />);

    expect(await screen.findByText('Opplysninger om fødsel fra søknaden')).toBeInTheDocument();
    expect(screen.getByText('Utstedt dato')).toBeInTheDocument();
    expect(screen.getByText('02.01.2019')).toBeInTheDocument();
    expect(screen.getAllByText('Fødselsdato')).toHaveLength(2);
    expect(screen.getAllByText('10.01.2019')).toHaveLength(3);
    expect(screen.getByText('Antall barn')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();

    expect(screen.getByText('Opplysninger om fødsel fra folkeregisteret')).toBeInTheDocument();
    expect(screen.getByText('Dødfødsel')).toBeInTheDocument();
    expect(screen.getByText('Dødsdato')).toBeInTheDocument();
    expect(screen.getByText('Død')).toBeInTheDocument();
  });

  it('skal vise panel der behandling er av type svangerskapspenger', async () => {
    render(<PanelForMedVisningAvSvangerskapsuke />);

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Født i svangerskapsuke')).toBeInTheDocument();
    expect(screen.getByText('43')).toBeInTheDocument();
    expect(screen.getByText('Termindato')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019')).toBeInTheDocument();
    expect(screen.getByText('Antall barn')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();

    expect(screen.getByText('Opplysninger om fødsel fra folkeregisteret')).toBeInTheDocument();
    expect(screen.getByText('Dødfødsel')).toBeInTheDocument();
    expect(screen.getByText('Fødselsdato')).toBeInTheDocument();
    expect(screen.getAllByText('10.01.2019')).toHaveLength(2);
    expect(screen.getByText('Dødsdato')).toBeInTheDocument();
    expect(screen.getByText('Død')).toBeInTheDocument();
  });
});
