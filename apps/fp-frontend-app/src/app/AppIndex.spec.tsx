import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { RestApiMock } from '@navikt/fp-utils-test';

import AppIndex from './AppIndex';
import { requestFagsakApi, FagsakApiKeys } from '../data/fagsakContextApi';

describe('<AppIndex>', () => {
  it.skip('skal vise hjem-skjermbilde', async () => {
    const data = [
      { key: FagsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: { navn: 'Peder' } } },
      { key: FagsakApiKeys.KODEVERK.name, global: true, data: {} },
      { key: FagsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: {} },
    ];

    render(
      <RestApiMock data={data} requestApi={requestFagsakApi}>
        <MemoryRouter>
          <AppIndex />
        </MemoryRouter>
      </RestApiMock>,
    );

    expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
  });

  it.skip('skal vise query-feilmelding', async () => {
    const data = [
      { key: FagsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: { navn: 'Peder' } } },
      { key: FagsakApiKeys.KODEVERK.name, global: true, data: {} },
      { key: FagsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: {} },
    ];

    render(
      <RestApiMock data={data} requestApi={requestFagsakApi}>
        <MemoryRouter initialEntries={['/test?errormessage=Det+finnes+ingen+sak+med+denne+referansen%3A+266']}>
          <AppIndex />
        </MemoryRouter>
      </RestApiMock>,
    );
    expect(await screen.findByText('Det finnes ingen sak med denne referansen: 266')).toBeInTheDocument();
  });
});
