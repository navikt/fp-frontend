import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import * as stories from './SakslisteVelgerForm.stories';

const { Default, MedToSakslister, MedFlereEnnTreSaksbehandlere, MedBelopFraOgTil, MedBelopKunFra, MedBelopKunTil } =
  composeStories(stories);

describe('SakslisteVelgerForm', () => {
  it('skal vise dropdown med en saksliste', async () => {
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    const { getByText } = render(<Default />);

    expect(await screen.findByText('Saksliste 1')).toBeInTheDocument();
    expect(screen.queryByText('Saksliste 2')).not.toBeInTheDocument();

    expect((getByText('Saksliste 1') as HTMLOptionElement).selected).toBeTruthy();

    await userEvent.click(screen.getByText('Filtere for køen'));

    expect(screen.getByText('Stønad')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger')).toBeInTheDocument();

    expect(screen.getByText('Behandling')).toBeInTheDocument();
    expect(screen.getByText('Førstegangsbehandling')).toBeInTheDocument();
    expect(screen.getByText('Revurdering')).toBeInTheDocument();

    expect(screen.getByText('Andre filter')).toBeInTheDocument();
    expect(screen.getByText('Til beslutter')).toBeInTheDocument();

    expect(screen.getByText('Sortering')).toBeInTheDocument();
    expect(screen.getByText(/Behandlingsfrist/i)).toBeInTheDocument();
    expect(screen.getByText(/Gjeldende intervall:/i)).toBeInTheDocument();
  });

  it('skal vise dropdown med to saksliste og så bytte valgt liste', async () => {
    applyRequestHandlers(MedToSakslister.parameters['msw'] as MswParameters['msw']);
    const { getByLabelText, getByText } = render(<MedToSakslister />);

    expect(await screen.findByText('Saksliste 1')).toBeInTheDocument();

    expect(screen.getByText('Saksliste 2')).toBeInTheDocument();

    expect((getByText('Saksliste 1') as HTMLOptionElement).selected).toBeTruthy();
    expect((getByText('Saksliste 2') as HTMLOptionElement).selected).toBeFalsy();

    await userEvent.click(screen.getByText('Filtere for køen'));

    expect(screen.getByText('Andre som jobber med denne køen nå')).toBeInTheDocument();

    expect(screen.getByText('Foreldrepenger')).toBeInTheDocument();

    await userEvent.selectOptions(getByLabelText('Behandlingskø'), '2');

    expect((getByText('Saksliste 1') as HTMLOptionElement).selected).toBeFalsy();
    expect((getByText('Saksliste 2') as HTMLOptionElement).selected).toBeTruthy();

    expect(screen.getByText('Svangerskapspenger')).toBeInTheDocument();

    expect(screen.getByText('Behandling')).toBeInTheDocument();
    expect(screen.getByText('Førstegangsbehandling')).toBeInTheDocument();
    expect(screen.getByText('Klage')).toBeInTheDocument();

    expect(screen.getByText('Andre filter')).toBeInTheDocument();
    expect(screen.getByText('Utbetaling til bruker')).toBeInTheDocument();
  });

  it('skal i utgangspunktet kun vise tre saksbehandlere og så klikke for å vise alle', async () => {
    applyRequestHandlers(MedFlereEnnTreSaksbehandlere.parameters['msw'] as MswParameters['msw']);
    render(<MedFlereEnnTreSaksbehandlere />);

    expect(await screen.findByText('Behandlingskø')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Filtere for køen'));

    expect(screen.getByText('Andre som jobber med denne køen nå')).toBeInTheDocument();

    expect(screen.getByText('Auto Joakim')).toBeInTheDocument();
    expect(screen.getByText('Bente Frogner')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('2 andre')).toBeInTheDocument();
    expect(screen.queryByText('Hans Haugerud')).not.toBeInTheDocument();
    expect(screen.queryByText('Olav Hellerud')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Se alle'));

    expect(await screen.findByText('Se færre')).toBeInTheDocument();

    expect(screen.queryByText('2 andre')).not.toBeInTheDocument();
    expect(screen.getByText('Hans Haugerud')).toBeInTheDocument();
    expect(screen.getByText('Olav Hellerud')).toBeInTheDocument();
  });

  it('skal vise både fra og til med bindestrek for BELOP', async () => {
    applyRequestHandlers(MedBelopFraOgTil.parameters['msw'] as MswParameters['msw']);
    render(<MedBelopFraOgTil />);

    expect(await screen.findByText('Saksliste 1')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Filtere for køen'));

    const matcherTreff = screen.getAllByText((_content, node) => {
      const text = node?.textContent?.replace(/\s+/g, ' ').trim() ?? '';
      return text.includes('Fra 2 - Til 3');
    });
    expect(matcherTreff.length).toBeGreaterThan(0);
  });

  it('skal vise kun fra uten bindestrek når til mangler for BELOP', async () => {
    applyRequestHandlers(MedBelopKunFra.parameters['msw'] as MswParameters['msw']);
    render(<MedBelopKunFra />);

    expect(await screen.findByText('Saksliste 1')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Filtere for køen'));

    expect(screen.getByText(/Fra\s+2/i)).toBeInTheDocument();
    expect(screen.queryByText(/Til\s+3/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fra\s+2\s*-/i)).not.toBeInTheDocument();
  });

  it('skal vise kun til uten bindestrek når fra mangler for BELOP', async () => {
    applyRequestHandlers(MedBelopKunTil.parameters['msw'] as MswParameters['msw']);
    render(<MedBelopKunTil />);

    expect(await screen.findByText('Saksliste 1')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Filtere for køen'));

    expect(screen.getByText(/Til\s+3/i)).toBeInTheDocument();
    expect(screen.queryByText(/Fra\s+2/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^\s*-\s*Til\s+3/i)).not.toBeInTheDocument();
  });

  it('skal ikke vise fra/til når sorteringstype ikke er BELOP', async () => {
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    render(<Default />);

    expect(await screen.findByText('Saksliste 1')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Filtere for køen'));

    expect(screen.queryByText(/^Fra\s+\d+/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^Til\s+\d+/i)).not.toBeInTheDocument();
  });
});
