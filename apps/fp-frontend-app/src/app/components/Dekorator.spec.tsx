import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router';

import { createIntl } from '@navikt/ft-utils';
import { render, screen } from '@testing-library/react';

import { EventType } from '@navikt/fp-rest-api';
import { RestApiMock } from '@navikt/fp-utils-test';

import { FagsakApiKeys, requestFagsakApi } from '../../data/fagsakContextApi';
import { Dekorator } from './Dekorator';

import messages from '../../../i18n/nb_NO.json';

const navAnsatt = {
  brukernavn: 'Peder',
  kanBehandleKode6: false,
  kanOverstyre: false,
  kanOppgavestyre: true,
  kanSaksbehandle: true,
  kanVeilede: false,
  navn: 'Peder Pjokk',
};

const mockHistoryPush = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockHistoryPush,
  };
});

const intl = createIntl(messages);

describe('<Dekorator>', () => {
  it('skal vise dekorator', async () => {
    const data = [{ key: FagsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: navAnsatt } }];

    render(
      <MemoryRouter initialEntries={[`/fagsak/1/`]}>
        <RawIntlProvider value={intl}>
          <RestApiMock data={data} requestApi={requestFagsakApi}>
            <Dekorator queryStrings={{}} setSiteHeight={vi.fn()} />
          </RestApiMock>
        </RawIntlProvider>
      </MemoryRouter>,
    );

    expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
  });

  it('skal vise feilmeldinger', async () => {
    const data = [{ key: FagsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: navAnsatt } }];

    const errors = [
      {
        type: EventType.REQUEST_ERROR,
        feilmelding: 'Dette er en feilmelding',
      },
    ];

    render(
      <MemoryRouter initialEntries={[`/fagsak/1/`]}>
        <RawIntlProvider value={intl}>
          <RestApiMock data={data} requestApi={requestFagsakApi} errors={errors}>
            <Dekorator queryStrings={{}} setSiteHeight={vi.fn()} />
          </RestApiMock>
        </RawIntlProvider>
      </MemoryRouter>,
    );

    expect(await screen.findByText('Dette er en feilmelding')).toBeInTheDocument();
  });
});
