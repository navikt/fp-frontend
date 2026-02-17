import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import * as stories from './SakslisteVelgerForm.stories';

const { Default, MedToSakslister, MedFlereEnnTreSaksbehandlere, MedBelopFraOgTil, MedBelopKunFra, MedBelopKunTil } =
  composeStories(stories);

const hentSorteringBoks = () => {
  const sorteringLabel = screen.getByText('Sortering');
  const sorteringBoks = sorteringLabel.parentElement?.parentElement;
  if (!sorteringBoks) {
    throw new Error('Fant ikke sortering-boksen i testen');
  }
  return sorteringBoks;
};

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

    expect(hentSorteringBoks()).toHaveTextContent('Fra: 2 kr');
    expect(hentSorteringBoks()).toHaveTextContent('Til: 3 kr');
  });

  it('skal vise kun fra når til mangler for BELOP', async () => {
    applyRequestHandlers(MedBelopKunFra.parameters['msw'] as MswParameters['msw']);
    render(<MedBelopKunFra />);

    expect(await screen.findByText('Saksliste 1')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Filtere for køen'));

    expect(hentSorteringBoks()).toHaveTextContent('Fra: 2 kr');
    expect(hentSorteringBoks()).not.toHaveTextContent('Til: 3 kr');
  });

  it('skal vise kun til når fra mangler for BELOP', async () => {
    applyRequestHandlers(MedBelopKunTil.parameters['msw'] as MswParameters['msw']);
    render(<MedBelopKunTil />);

    expect(await screen.findByText('Saksliste 1')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Filtere for køen'));

    expect(hentSorteringBoks()).toHaveTextContent('Til: 3 kr');
    expect(hentSorteringBoks()).not.toHaveTextContent('Fra: 2 kr');
  });

  it('skal ikke vise fra/til når sorteringstype ikke er BELOP', async () => {
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    render(<Default />);

    expect(await screen.findByText('Saksliste 1')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Filtere for køen'));

    expect(hentSorteringBoks()).not.toHaveTextContent('Fra: 2 kr');
    expect(hentSorteringBoks()).not.toHaveTextContent('Til: 3 kr');
  });
});
