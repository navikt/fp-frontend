import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createIntl } from '@navikt/ft-utils';

import Home from './Home';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

describe('<Home>', () => {
  it('skal rendre komponent', async () => {
    render(
      <MemoryRouter initialEntries={['/test']}>
        <RawIntlProvider value={intl}>
          <Home headerHeight={48} />
        </RawIntlProvider>
      </MemoryRouter>,
    );

    expect(await screen.findByText('Beklager, vi finner ikke siden du leter etter.')).toBeInTheDocument();
  });
});
