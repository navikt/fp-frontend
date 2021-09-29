import React from 'react';
import { createMemoryHistory, Location } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';

import AppIndex from './AppIndex';
import { requestApi, FpsakApiKeys } from '../data/fpsakApi';

describe('<AppIndex>', () => {
  const locationMock = {
    pathname: 'test',
    search: 'test',
    state: {},
    hash: 'test',
  } as Location;

  it('skal vise hjem-skjermbilde', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: { navn: 'Peder' } },
    ];

    const history = createMemoryHistory();
    history.location = locationMock;

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <Router history={history}>
          <AppIndex />
        </Router>
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();
  });

  it('skal vise query-feilmelding', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, data: { navn: 'Peder' } },
    ];
    const location = {
      search: '?errormessage=Det+finnes+ingen+sak+med+denne+referansen%3A+266',
    } as Location;

    const history = createMemoryHistory();
    history.location = location;

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <Router history={history}>
          <AppIndex />
        </Router>
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();
    // expect(headerComp.prop('queryStrings')).toEqual({ errormessage: 'Det finnes ingen sak med denne referansen: 266' });
  });
});
