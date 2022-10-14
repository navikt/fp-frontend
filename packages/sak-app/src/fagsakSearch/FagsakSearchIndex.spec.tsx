import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { FagsakEnkel } from '@fpsak-frontend/types';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';

import { requestApi, FpsakApiKeys } from '../data/fpsakApi';
import FagsakSearchIndex from './FagsakSearchIndex';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockHistoryPush,
}));

describe('<FagsakSearchIndex>', () => {
  const fagsak = {
    saksnummer: '12345',
    fagsakYtelseType: 'ES',
    status: 'OPPR',
    dekningsgrad: 100,
    aktørId: '1',
    barnFødt: '2019-10-10',
  } as FagsakEnkel;
  const fagsak2: Partial<FagsakEnkel> = {
    ...fagsak,
    saksnummer: '23456',
  };
  const fagsaker = [fagsak, fagsak2];

  it('skal søke opp fagsaker', async () => {
    const data = [
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: {} },
      { key: FpsakApiKeys.SEARCH_FAGSAK.name, data: fagsaker },
    ];

    const utils = render(
      <RestApiMock data={data} requestApi={requestApi}>
        <MemoryRouter>
          <FagsakSearchIndex />
        </MemoryRouter>
      </RestApiMock>,
    );

    expect(await screen.findByText('Søk på sak eller person')).toBeInTheDocument();

    const nrInput = utils.getByLabelText('Saksnummer eller fødselsnummer/D-nummer');
    await userEvent.type(nrInput, '123');

    expect(await screen.findByText('Søk')).toBeEnabled();

    await userEvent.click(screen.getByText('Søk'));

    expect(await screen.findByText('Saksnummer')).toBeInTheDocument();
    expect(screen.getByText('12345')).toBeInTheDocument();
    expect(screen.getByText('23456')).toBeInTheDocument();
  });

  it('skal gå til valgt fagsak', async () => {
    const data = [
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: {} },
      { key: FpsakApiKeys.SEARCH_FAGSAK.name, data: fagsaker },
    ];

    const utils = render(
      <RestApiMock data={data} requestApi={requestApi}>
        <MemoryRouter>
          <FagsakSearchIndex />
        </MemoryRouter>
      </RestApiMock>,
    );

    expect(await screen.findByText('Søk på sak eller person')).toBeInTheDocument();

    const nrInput = utils.getByLabelText('Saksnummer eller fødselsnummer/D-nummer');
    await userEvent.type(nrInput, '123');

    expect(await screen.findByText('Søk')).toBeEnabled();

    await userEvent.click(screen.getByText('Søk'));

    expect(await screen.findByText('Saksnummer')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('row', { hidden: true })[1]);

    await waitFor(() => expect(mockHistoryPush).toHaveBeenCalledWith(`/fagsak/${fagsak.saksnummer}/`));
  });
});
