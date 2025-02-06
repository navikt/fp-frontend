import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './AktørIndex.stories';

const { Default, IngenFagsaker, AktørInfoKallFeilet } = composeStories(stories);

describe('AktørIndex', () => {
  it('skal vise lister med fagsaker', async () => {
    await applyRequestHandlers(Default.parameters['msw']);
    render(<Default />);

    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('121221')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger (123) Opprettet')).toBeInTheDocument();
    expect(screen.getByText('Engangsstønad (252523) Løpende')).toBeInTheDocument();
  });

  it('skal ikke ha noen fagsaker i fpsak', async () => {
    await applyRequestHandlers(IngenFagsaker.parameters['msw']);
    render(<IngenFagsaker />);

    expect(await screen.findByText('Ukjent navn, mangler norsk id-nr')).toBeInTheDocument();
    expect(screen.getByText('Har ingen fagsaker i fpsak')).toBeInTheDocument();
  });

  //TODO Denne feilar av og til
  it.skip('skal feile på api-kall', async () => {
    await applyRequestHandlers(AktørInfoKallFeilet.parameters['msw']);
    await render(<AktørInfoKallFeilet />);

    expect(await screen.findByText(/Det har oppstått en teknisk feil i denne behandlingen./)).toBeInTheDocument();
    expect(screen.getByText(/Meld feilen i Porten. Ta med feilmeldingsteksten./)).toBeInTheDocument();
  });
});
