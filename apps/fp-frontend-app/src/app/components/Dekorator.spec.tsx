import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswWrapper } from '@navikt/fp-utils-test';

import * as stories from './Dekorator.stories';

const { Default, VisFeilmeldingSomLiggIUrl, VisTekniskFeilmelding, SkjulFeilmelding } = composeStories(stories);

describe('Dekorator', () => {
  it(
    'skal vise dekorator',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(Default.parameters['msw']);
      render(<Default />);
      expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
      expect(await screen.findByText('Sara Saksbehandler')).toBeInTheDocument();
    }),
  );

  it(
    'skal vise feilmeldinger som ligger i URL',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(VisFeilmeldingSomLiggIUrl.parameters['msw']);
      render(<VisFeilmeldingSomLiggIUrl />);

      expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
      expect(await screen.findByText('Dette er en feilmelding')).toBeInTheDocument();
    }),
  );

  it(
    'skal vise feilmeldinger som oppstår ved kodefeil',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(VisTekniskFeilmelding.parameters['msw']);
      render(<VisTekniskFeilmelding />);

      expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
      expect(await screen.findByText('test is undefined')).toBeInTheDocument();
    }),
  );

  it(
    'skal ikke vise feilmelding når den er skjult manuelt',
    mswWrapper(async ({ setHandlers }) => {
      setHandlers(SkjulFeilmelding.parameters['msw']);
      render(<SkjulFeilmelding />);

      expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
      expect(await screen.findByText('Sara Saksbehandler')).toBeInTheDocument();
      expect(screen.queryByText('test is undefined')).not.toBeInTheDocument();
    }),
  );
});
