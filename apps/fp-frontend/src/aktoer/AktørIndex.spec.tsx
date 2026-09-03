import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';

import * as stories from './AktørIndex.stories';

const { Default, IngenFagsaker, AktørInfoKallFeilet } = composeStories(stories);

describe('AktørIndex', () => {
  it('skal vise lister med fagsaker', async () => {
    await Default.run();

    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('111111 11111')).toBeInTheDocument();
    expect(screen.getByText('Foreldrepenger (123) Opprettet')).toBeInTheDocument();
    expect(screen.getByText('Engangsstønad (252523) Løpende')).toBeInTheDocument();
  });

  it('skal ikke ha noen fagsaker i fpsak', async () => {
    await IngenFagsaker.run();

    expect(await screen.findByText('Ukjent navn, mangler norsk id-nr')).toBeInTheDocument();
    expect(screen.getByText('Har ingen fagsaker i fpsak')).toBeInTheDocument();
  });

  it('skal feile på api-kall', async () => {
    await AktørInfoKallFeilet.run();

    expect(await screen.findByText(/Det har oppstått en teknisk feil i denne behandlingen./)).toBeInTheDocument();
    expect(screen.getByText(/Meld feilen i Porten. Ta med feilmeldingsteksten./)).toBeInTheDocument();
  });
});
