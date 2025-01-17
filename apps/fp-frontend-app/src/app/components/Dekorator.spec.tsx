import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './Dekorator.stories';

const { Default, VisFeilmeldingSomLiggIUrl, VisTekniskFeilmelding, SkjulFeilmelding } = composeStories(stories);

describe('Dekorator', () => {
  it('skal vise dekorator', async () => {
    await applyRequestHandlers(Default.parameters.msw);
    render(<Default />);
    expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
    expect(await screen.findByText('Sara Saksbehandler')).toBeInTheDocument();
  });

  it('skal vise feilmeldinger som ligger i URL', async () => {
    await applyRequestHandlers(VisFeilmeldingSomLiggIUrl.parameters.msw);
    render(<VisFeilmeldingSomLiggIUrl />);

    expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
    expect(await screen.findByText('Dette er en feilmelding')).toBeInTheDocument();
  });

  it('skal vise feilmeldinger som oppstår ved kodefeil', async () => {
    await applyRequestHandlers(VisTekniskFeilmelding.parameters.msw);
    render(<VisTekniskFeilmelding />);

    expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
    expect(await screen.findByText('test is undefined')).toBeInTheDocument();
  });

  it('skal ikke vise feilmelding når den er skjult manuelt', async () => {
    await applyRequestHandlers(SkjulFeilmelding.parameters.msw);
    render(<SkjulFeilmelding />);

    expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
    expect(await screen.findByText('Sara Saksbehandler')).toBeInTheDocument();
    expect(screen.queryByText('test is undefined')).not.toBeInTheDocument();
  });
});
