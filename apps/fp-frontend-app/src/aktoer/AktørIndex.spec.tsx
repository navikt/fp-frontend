import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswWrapper } from '@navikt/fp-utils-test';

import * as stories from './AktørIndex.stories';

const { Default, IngenFagsaker, AktørInfoKallFeilet } = composeStories(stories);

describe('AktørIndex', () => {
  it(
    'skal vise lister med fagsaker',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(Default.parameters['msw']);
      render(<Default />);

      expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
      expect(screen.getByText('111111 11111')).toBeInTheDocument();
      expect(screen.getByText('Foreldrepenger (123) Opprettet')).toBeInTheDocument();
      expect(screen.getByText('Engangsstønad (252523) Løpende')).toBeInTheDocument();
    }),
  );

  it(
    'skal ikke ha noen fagsaker i fpsak',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(IngenFagsaker.parameters['msw']);
      render(<IngenFagsaker />);

      expect(await screen.findByText('Ukjent navn, mangler norsk id-nr')).toBeInTheDocument();
      expect(screen.getByText('Har ingen fagsaker i fpsak')).toBeInTheDocument();
    }),
  );

  //TODO Denne feilar av og til
  it.skip(
    'skal feile på api-kall',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(AktørInfoKallFeilet.parameters['msw']);
      await render(<AktørInfoKallFeilet />);

      expect(await screen.findByText(/Det har oppstått en teknisk feil i denne behandlingen./)).toBeInTheDocument();
      expect(screen.getByText(/Meld feilen i Porten. Ta med feilmeldingsteksten./)).toBeInTheDocument();
    }),
  );
});
