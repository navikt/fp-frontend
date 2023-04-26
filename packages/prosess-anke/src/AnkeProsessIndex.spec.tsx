import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './AnkeProsessIndex.stories';

const {
  OmjørResultatTilUgunst,
  OpphevResultat,
  ErBehandletIKabal,
  UnderBehandlingIKabal,
  HjemsendResultat,
  AvvisResultat,
  StadfestResultat,
} = composeStories(stories);

describe('<AnkeProsessIndex>', () => {
  it('skal vise historisk anke som er omgjort i fpsak', async () => {
    render(<OmjørResultatTilUgunst />);

    expect(await screen.findByText('Ankebehandling')).toBeInTheDocument();

    expect(screen.getByText('Vedtaket som er anket')).toBeInTheDocument();
    expect(screen.getByText('Ikke påanket vedtak')).toBeInTheDocument();

    expect(screen.getByText('Resultat')).toBeInTheDocument();
    expect(screen.getByText('Omgjør')).toBeInTheDocument();

    expect(screen.getByText('Avvisningsårsaker')).toBeInTheDocument();
    expect(screen.getByText('Ulik skjønnsvurdering')).toBeInTheDocument();
    expect(screen.getByText('Til ugunst')).toBeInTheDocument();

    expect(screen.getByText('Begrunnelse')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();

    expect(screen.getByText('Fritekst til brev')).toBeInTheDocument();
    expect(screen.getByText('Dette er en fritekst')).toBeInTheDocument();
  });

  it('skal vise historisk anke som er opphevet i fpsak', async () => {
    render(<OpphevResultat />);

    expect(await screen.findByText('Ankebehandling')).toBeInTheDocument();

    expect(screen.getByText('Vedtaket som er anket')).toBeInTheDocument();
    expect(screen.getByText('Ikke påanket vedtak')).toBeInTheDocument();

    expect(screen.getByText('Resultat')).toBeInTheDocument();
    expect(screen.getByText('Opphev')).toBeInTheDocument();

    expect(screen.queryByText('Avvisningsårsaker')).not.toBeInTheDocument();
    expect(screen.getByText('Årsak')).toBeInTheDocument();
    expect(screen.getByText('Ulik regelverkstolkning')).toBeInTheDocument();
    expect(screen.queryByText('Til ugunst')).not.toBeInTheDocument();

    expect(screen.getByText('Begrunnelse')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();

    expect(screen.getByText('Fritekst til brev')).toBeInTheDocument();
    expect(screen.getByText('Dette er en fritekst')).toBeInTheDocument();
  });

  it('skal vise historisk anke som er hjemsendt i fpsak', async () => {
    render(<HjemsendResultat />);

    expect(await screen.findByText('Ankebehandling')).toBeInTheDocument();

    expect(screen.getByText('Vedtaket som er anket')).toBeInTheDocument();
    expect(screen.getByText('Ikke påanket vedtak')).toBeInTheDocument();

    expect(screen.getByText('Resultat')).toBeInTheDocument();
    expect(screen.getByText('Hjemsend')).toBeInTheDocument();

    expect(screen.queryByText('Avvisningsårsaker')).not.toBeInTheDocument();
    expect(screen.getByText('Årsak')).toBeInTheDocument();
    expect(screen.getByText('Ulik regelverkstolkning')).toBeInTheDocument();
    expect(screen.queryByText('Til ugunst')).not.toBeInTheDocument();

    expect(screen.getByText('Begrunnelse')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();

    expect(screen.getByText('Fritekst til brev')).toBeInTheDocument();
    expect(screen.getByText('Dette er en fritekst')).toBeInTheDocument();
  });

  it('skal vise historisk anke som er avvist i fpsak', async () => {
    render(<AvvisResultat />);

    expect(await screen.findByText('Ankebehandling')).toBeInTheDocument();

    expect(screen.getByText('Vedtaket som er anket')).toBeInTheDocument();
    expect(screen.getByText('Ikke påanket vedtak')).toBeInTheDocument();

    expect(screen.getByText('Resultat')).toBeInTheDocument();
    expect(screen.getByText('Avvis')).toBeInTheDocument();

    expect(screen.getByText('Avvisningsårsaker')).toBeInTheDocument();
    expect(screen.queryByText('Årsak')).not.toBeInTheDocument();
    expect(screen.getByText('Den som anker er ikke part i saken')).toBeInTheDocument();
    expect(screen.getByText('Det ankes ikke på konkrete elementer i vedtaket')).toBeInTheDocument();
    expect(screen.queryByText('Til ugunst')).not.toBeInTheDocument();

    expect(screen.getByText('Skal anken subsidiært realitetsbehandles?')).toBeInTheDocument();
    expect(screen.getByText('Ja')).toBeInTheDocument();

    expect(screen.getByText('Begrunnelse')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();

    expect(screen.getByText('Fritekst til brev')).toBeInTheDocument();
    expect(screen.getByText('Dette er en fritekst')).toBeInTheDocument();
  });

  it('skal vise historisk anke som er stadfestet i fpsak', async () => {
    render(<StadfestResultat />);

    expect(await screen.findByText('Ankebehandling')).toBeInTheDocument();

    expect(screen.getByText('Vedtaket som er anket')).toBeInTheDocument();
    expect(screen.getByText('Ikke påanket vedtak')).toBeInTheDocument();

    expect(screen.getByText('Resultat')).toBeInTheDocument();
    expect(screen.getByText('Stadfest')).toBeInTheDocument();

    expect(screen.queryByText('Avvisningsårsaker')).not.toBeInTheDocument();
    expect(screen.queryByText('Årsak')).not.toBeInTheDocument();
    expect(screen.queryByText('Ulik skjønnsvurdering')).not.toBeInTheDocument();
    expect(screen.queryByText('Til ugunst')).not.toBeInTheDocument();

    expect(screen.getByText('Begrunnelse')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();

    expect(screen.getByText('Fritekst til brev')).toBeInTheDocument();
    expect(screen.getByText('Dette er en fritekst')).toBeInTheDocument();
  });

  it('skal vise at anke er behandlet i Kabal', async () => {
    render(<ErBehandletIKabal />);

    expect(await screen.findByText('Ankebehandling')).toBeInTheDocument();

    expect(screen.getByText('Anken er behandlet i KABAL')).toBeInTheDocument();
  });

  it('skal vise at anke er under behandling i Kabal', async () => {
    render(<UnderBehandlingIKabal />);

    expect(await screen.findByText('Ankebehandling')).toBeInTheDocument();

    expect(screen.getByText('Anken behandles i KABAL')).toBeInTheDocument();
  });
});
