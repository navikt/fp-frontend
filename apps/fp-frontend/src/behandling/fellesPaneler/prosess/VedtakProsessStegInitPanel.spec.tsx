import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';

import * as stories from './VedtakProsessStegInitPanel.stories';

const { EngangsstønadRevurderingUtenEndring, ForeldrepengerRevurderingAvslagEtterInnvilget } = composeStories(stories);

describe('VedtakProsessStegInitPanel', () => {
  it('skal vise ingen endring når engangsstønad er lik original behandling', async () => {
    await EngangsstønadRevurderingUtenEndring.run();

    expect(await screen.findByText('Ingen endring')).toBeInTheDocument();
    expect(screen.queryByText('Endret til Innvilget')).not.toBeInTheDocument();
  });

  it('skal vise endret til avslag når original behandling for foreldrepenger var innvilget', async () => {
    await ForeldrepengerRevurderingAvslagEtterInnvilget.run();

    expect(await screen.findByText('Endret til Avslag')).toBeInTheDocument();
  });
});
