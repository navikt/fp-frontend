import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './SupportMenySakIndex.stories';

const {
  UtenBeslutterGodkjenningOgTilbakesending, MedBeslutterGodkjenning, EtterTilbakesendingFraBeslutter, SendMeldingSomIkkeValgbar,
} = composeStories(stories);

describe('<SupportMenySakIndex>', () => {
  it('skal vise meny uten beslutter-panelet', async () => {
    render(<UtenBeslutterGodkjenningOgTilbakesending />);

    expect(await screen.findByTestId('Historikk')).toBeInTheDocument();
    expect(screen.getByTestId('Send melding')).toBeInTheDocument();
    expect(screen.getByTestId('Dokumenter')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { hidden: true })).toHaveLength(3);
    expect(screen.getByTestId('Send melding')).not.toBeDisabled();
  });

  it('skal vise meny med beslutter-godkjenning', async () => {
    render(<MedBeslutterGodkjenning />);

    expect(await screen.findByTestId('Godkjenning')).toBeInTheDocument();
    expect(screen.getByTestId('Historikk')).toBeInTheDocument();
    expect(screen.getByTestId('Send melding')).toBeInTheDocument();
    expect(screen.getByTestId('Dokumenter')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { hidden: true })).toHaveLength(4);
    expect(screen.getByTestId('Send melding')).not.toBeDisabled();
  });

  it('skal vise meny med info fra beslutter', async () => {
    render(<EtterTilbakesendingFraBeslutter />);

    expect(await screen.findByTestId('Fra beslutter')).toBeInTheDocument();
    expect(screen.getByTestId('Historikk')).toBeInTheDocument();
    expect(screen.getByTestId('Send melding')).toBeInTheDocument();
    expect(screen.getByTestId('Dokumenter')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { hidden: true })).toHaveLength(4);
    expect(screen.getByTestId('Send melding')).not.toBeDisabled();
  });

  it('skal vise send melding som ikke valgbar', async () => {
    render(<SendMeldingSomIkkeValgbar />);
    expect(await screen.findByTestId('Send melding')).toBeInTheDocument();
    expect(screen.getByTestId('Send melding')).toBeDisabled();
  });
});
