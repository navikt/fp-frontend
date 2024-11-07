import { screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './SistBehandledeSaker.stories';

const { Default, IngenBehandlinger } = composeStories(stories);

describe('<SistBehandledeSaker>', () => {
  it('skal vise sist behandlede saker', async () => {
    await Default.run();
    expect(await screen.findByText('Dine siste reserverte behandlinger')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('13232323')).toBeInTheDocument();
  });

  it('skal vise ingen behandlinger', async () => {
    await IngenBehandlinger.run();
    expect(await screen.findByText('Dine siste reserverte behandlinger')).toBeInTheDocument();
    expect(screen.getByText('Ingen behandlinger')).toBeInTheDocument();
  });
});
