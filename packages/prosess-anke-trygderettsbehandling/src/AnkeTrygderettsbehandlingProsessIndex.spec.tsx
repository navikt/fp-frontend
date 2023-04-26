import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './AnkeTrygderettsbehandlingProsessIndex.stories';

const {
  ResultatVedOmgjortResultat,
  ResultatVedOpphevetResultat,
  ResultatVedHjemsendtResultat,
  ResultatVedAvvistResultat,
  ResultatVedStadfestetResultat,
  ErBehandletIKabel,
  ErUnderBehandlingIKabel,
} = composeStories(stories);

describe('<AnkeTrygderettsbehandlingProsessIndex>', () => {
  it('skal vise historisk anke som er omgjort i fpsak', async () => {
    render(<ResultatVedOmgjortResultat />);

    expect(await screen.findByText('Trygderettsbehandling')).toBeInTheDocument();

    expect(screen.getByText('Har det kommet merknader?')).toBeInTheDocument();
    expect(screen.getByText('Ja')).toBeInTheDocument();

    expect(screen.getByText('Fritekst for Trygderettsbehandling')).toBeInTheDocument();
    expect(screen.getByText('Dette er en kommentar')).toBeInTheDocument();

    expect(screen.getByText('Resultat fra Trygdretten')).toBeInTheDocument();
    expect(screen.getByText('Omgjort')).toBeInTheDocument();

    expect(screen.getByText('Årsak')).toBeInTheDocument();
    expect(screen.getByText('Nye opplysninger')).toBeInTheDocument();
    expect(screen.getByText('Til gunst')).toBeInTheDocument();
  });

  it('skal vise historisk anke som er opphevet i fpsak', async () => {
    render(<ResultatVedOpphevetResultat />);

    expect(await screen.findByText('Trygderettsbehandling')).toBeInTheDocument();

    expect(screen.getByText('Har det kommet merknader?')).toBeInTheDocument();
    expect(screen.getByText('Ja')).toBeInTheDocument();

    expect(screen.getByText('Fritekst for Trygderettsbehandling')).toBeInTheDocument();
    expect(screen.getByText('Dette er en kommentar')).toBeInTheDocument();

    expect(screen.getByText('Resultat fra Trygdretten')).toBeInTheDocument();
    expect(screen.getByText('Opphevet')).toBeInTheDocument();

    expect(screen.getByText('Årsak')).toBeInTheDocument();
    expect(screen.getByText('Nye opplysninger')).toBeInTheDocument();
    expect(screen.queryByText('Til gunst')).not.toBeInTheDocument();
  });

  it('skal vise historisk anke som er hjemsendt i fpsak', async () => {
    render(<ResultatVedHjemsendtResultat />);

    expect(await screen.findByText('Trygderettsbehandling')).toBeInTheDocument();

    expect(screen.getByText('Har det kommet merknader?')).toBeInTheDocument();
    expect(screen.getByText('Ja')).toBeInTheDocument();

    expect(screen.getByText('Fritekst for Trygderettsbehandling')).toBeInTheDocument();
    expect(screen.getByText('Dette er en kommentar')).toBeInTheDocument();

    expect(screen.getByText('Resultat fra Trygdretten')).toBeInTheDocument();
    expect(screen.getByText('Hjemsendt')).toBeInTheDocument();

    expect(screen.getByText('Årsak')).toBeInTheDocument();
    expect(screen.getByText('Nye opplysninger')).toBeInTheDocument();
    expect(screen.queryByText('Til gunst')).not.toBeInTheDocument();
  });

  it('skal vise historisk anke som er avvist i fpsak', async () => {
    render(<ResultatVedAvvistResultat />);

    expect(await screen.findByText('Trygderettsbehandling')).toBeInTheDocument();

    expect(screen.getByText('Har det kommet merknader?')).toBeInTheDocument();
    expect(screen.getByText('Ja')).toBeInTheDocument();

    expect(screen.getByText('Fritekst for Trygderettsbehandling')).toBeInTheDocument();
    expect(screen.getByText('Dette er en kommentar')).toBeInTheDocument();

    expect(screen.getByText('Resultat fra Trygdretten')).toBeInTheDocument();
    expect(screen.getByText('Avvist')).toBeInTheDocument();

    expect(screen.queryByText('Årsak')).not.toBeInTheDocument();
    expect(screen.queryByText('Nye opplysninger')).not.toBeInTheDocument();
    expect(screen.queryByText('Til gunst')).not.toBeInTheDocument();
  });

  it('skal vise historisk anke som er stadfestet i fpsak', async () => {
    render(<ResultatVedStadfestetResultat />);

    expect(await screen.findByText('Trygderettsbehandling')).toBeInTheDocument();

    expect(screen.getByText('Har det kommet merknader?')).toBeInTheDocument();
    expect(screen.getByText('Ja')).toBeInTheDocument();

    expect(screen.getByText('Fritekst for Trygderettsbehandling')).toBeInTheDocument();
    expect(screen.getByText('Dette er en kommentar')).toBeInTheDocument();

    expect(screen.getByText('Resultat fra Trygdretten')).toBeInTheDocument();
    expect(screen.getByText('Stadfestet')).toBeInTheDocument();

    expect(screen.queryByText('Årsak')).not.toBeInTheDocument();
    expect(screen.queryByText('Nye opplysninger')).not.toBeInTheDocument();
    expect(screen.queryByText('Til gunst')).not.toBeInTheDocument();
  });

  it('skal vise at anke er behandlet i Kabal', async () => {
    render(<ErBehandletIKabel />);

    expect(await screen.findByText('Trygderettsbehandling')).toBeInTheDocument();

    expect(screen.getByText('Anken er behandlet i KABAL')).toBeInTheDocument();
  });

  it('skal vise at anke er under behandling i Kabal', async () => {
    render(<ErUnderBehandlingIKabel />);

    expect(await screen.findByText('Trygderettsbehandling')).toBeInTheDocument();

    expect(screen.getByText('Anken behandles i KABAL')).toBeInTheDocument();
  });
});
