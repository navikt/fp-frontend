import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './InfosiderSakIndex.stories';

const { IkkeInnloggetBruker } = composeStories(stories);

describe('UnauthorizedPage', () => {
  it('skal rendre UnauthorizedPage korrekt', async () => {
    render(<IkkeInnloggetBruker />);
    expect(await screen.findByText('Du må logge inn for å få tilgang til systemet')).toBeInTheDocument();
  });
});
