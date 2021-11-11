import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';

import AppIndex from './AppIndex';
import { requestApi, FpsakApiKeys } from '../data/fpsakApi';

describe('<AppIndex>', () => {
  it('skal vise hjem-skjermbilde', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: { navn: 'Peder' } },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <MemoryRouter>
          <AppIndex />
        </MemoryRouter>
      </RestApiMock>,
    );

    expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
  });

  it('skal vise query-feilmelding', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, data: { navn: 'Peder' } },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <MemoryRouter initialEntries={['/test?errormessage=Det+finnes+ingen+sak+med+denne+referansen%3A+266']}>
          <AppIndex />
        </MemoryRouter>
      </RestApiMock>,
    );
    expect(await screen.findByText('Det finnes ingen sak med denne referansen: 266')).toBeInTheDocument();
  });
});
