import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';
import { createIntl } from '@navikt/ft-utils';
import { RestApiMock } from '@navikt/fp-utils-test';
import { FagsakYtelseType, BehandlingType, KodeverkType, DokumentMalType } from '@navikt/fp-kodeverk';
import { Fagsak, BehandlingAppKontekst } from '@navikt/fp-types';

import { RawIntlProvider } from 'react-intl';
import { requestFagsakApi, FagsakApiKeys } from '../../data/fagsakContextApi';
import MeldingIndex from './MeldingIndex';
import FagsakData from '../../fagsak/FagsakData';
import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

describe('<MeldingIndex>', () => {
  const templates = [
    { kode: 'Mal1', navn: 'Mal 1', tilgjengelig: true },
    { kode: 'Mal2', navn: 'Mal 2', tilgjengelig: true },
    { kode: 'Mal3', navn: 'Mal 3', tilgjengelig: true },
    { kode: DokumentMalType.VARSEL_OM_REVURDERING, navn: 'Varsel om revurdering', tilgjengelig: true },
    { kode: DokumentMalType.INNHENTE_OPPLYSNINGER, navn: 'Innhent', tilgjengelig: true },
  ];

  const valgtBehandling = {
    uuid: '1',
    versjon: 123,
    type: BehandlingType.FORSTEGANGSSOKNAD,
    sprakkode: 'nb',
    brevmaler: templates,
    ugunstAksjonspunkt: true,
    behandlingTillatteOperasjoner: {
      behandlingKanSendeMelding: true,
    },
  } as BehandlingAppKontekst;

  const fagsak = {
    saksnummer: '123456',
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: false,
    behandlinger: [valgtBehandling],
  };

  const kodeverk = {
    [KodeverkType.VENT_AARSAK]: [],
    [KodeverkType.REVURDERING_VARSLING_ÅRSAK]: [],
  };

  it('skal vise messages når mottakere og brevmaler har blitt hentet fra server', async () => {
    const data = [
      { key: FagsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: { navn: 'Peder' } } },
      { key: FagsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FagsakApiKeys.SUBMIT_MESSAGE.name, data: undefined },
    ];

    render(
      <RawIntlProvider value={intl}>
        <RestApiMock data={data} requestApi={requestFagsakApi}>
          <MemoryRouter>
            <MeldingIndex
              fagsakData={new FagsakData(fagsak as Fagsak)}
              valgtBehandlingUuid={valgtBehandling.uuid}
              setMeldingFormData={() => undefined}
              hentOgSettBehandling={() => undefined}
            />
          </MemoryRouter>
        </RestApiMock>{' '}
      </RawIntlProvider>,
    );
    expect(await screen.findByText('Mal 1')).toBeInTheDocument();
    expect(screen.getByText('Mal 2')).toBeInTheDocument();
    expect(screen.getByText('Mal 3')).toBeInTheDocument();
  });

  // TODO FIX denne feilar av ein eller annan grunn
  it.skip('skal sette default tom streng ved forhåndsvisning dersom fritekst ikke er fylt ut', async () => {
    const data = [
      { key: FagsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: { navn: 'Peder' } } },
      { key: FagsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FagsakApiKeys.PREVIEW_MESSAGE_MENU.name, data: {} },
    ];

    let axiosMock: MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => {
      axiosMock = mockAdapter;
    };

    const utils = render(
      <RawIntlProvider value={intl}>
        <RestApiMock data={data} requestApi={requestFagsakApi} setApiMock={setApiMock}>
          <MemoryRouter>
            <MeldingIndex
              fagsakData={new FagsakData(fagsak as Fagsak)}
              valgtBehandlingUuid={valgtBehandling.uuid}
              setMeldingFormData={() => undefined}
              hentOgSettBehandling={() => undefined}
            />
          </MemoryRouter>
        </RestApiMock>
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Mal 1')).toBeInTheDocument();

    expect(await screen.findByText('Forhåndsvis')).toBeInTheDocument();

    await userEvent.selectOptions(utils.getByLabelText('Mal'), 'Mal1');

    await userEvent.click(screen.getByText('Forhåndsvis'));

    await waitFor(() => expect(axiosMock.history.post.length).toBe(1));
    await waitFor(() =>
      expect(axiosMock.history.post.find(a => a.url === '/fpsak/api/brev/forhaandsvis')?.data).toBe(
        JSON.stringify({
          behandlingUuid: '1',
          fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
          fritekst: ' ',
          arsakskode: null,
          dokumentMal: 'Mal1',
        }),
      ),
    );
  });

  it('skal sende melding og så lukke modal', async () => {
    const data = [
      { key: FagsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: { navn: 'Peder' } } },
      { key: FagsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FagsakApiKeys.SUBMIT_MESSAGE.name, data: undefined },
    ];

    let axiosMock: MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => {
      axiosMock = mockAdapter;
    };

    const utils = render(
      <RawIntlProvider value={intl}>
        <RestApiMock data={data} requestApi={requestFagsakApi} setApiMock={setApiMock}>
          <MemoryRouter>
            <MeldingIndex
              fagsakData={new FagsakData(fagsak as Fagsak)}
              valgtBehandlingUuid={valgtBehandling.uuid}
              setMeldingFormData={() => undefined}
              hentOgSettBehandling={() => undefined}
            />
          </MemoryRouter>
        </RestApiMock>
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Mal 1')).toBeInTheDocument();

    expect(await screen.findByText('Send brev')).toBeInTheDocument();

    await userEvent.selectOptions(utils.getByLabelText('Mal'), 'Mal1');

    await userEvent.click(screen.getByText('Send brev'));

    expect(await screen.findAllByText('Brevet er bestilt')).toHaveLength(2);

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(axiosMock.history.get.length).toBe(1));

    await waitFor(() =>
      expect(axiosMock.history.get.find(a => a.url === FagsakApiKeys.SUBMIT_MESSAGE.name)?.params).toStrictEqual({
        behandlingUuid: '1',
        arsakskode: undefined,
        fritekst: '',
        brevmalkode: 'Mal1',
      }),
    );
  });

  it('skal sende melding og sette saken på vent hvis INNHENT_DOK', async () => {
    const data = [
      { key: FagsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: { navn: 'Peder' } } },
      { key: FagsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FagsakApiKeys.SUBMIT_MESSAGE.name, data: undefined },
    ];

    let axiosMock: MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => {
      axiosMock = mockAdapter;
    };

    const utils = render(
      <RawIntlProvider value={intl}>
        <RestApiMock data={data} requestApi={requestFagsakApi} setApiMock={setApiMock}>
          <MemoryRouter>
            <MeldingIndex
              fagsakData={new FagsakData(fagsak as Fagsak)}
              valgtBehandlingUuid={valgtBehandling.uuid}
              setMeldingFormData={() => undefined}
              hentOgSettBehandling={() => undefined}
            />
          </MemoryRouter>
        </RestApiMock>{' '}
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Mal 1')).toBeInTheDocument();

    expect(await screen.findByText('Send brev')).toBeInTheDocument();

    await userEvent.selectOptions(utils.getByLabelText('Mal'), DokumentMalType.INNHENTE_OPPLYSNINGER);

    const begrunnelseInput = utils.getByLabelText('Liste over dokumenter (skriv ett dokument pr. linje)');
    await userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Send brev'));

    expect(await screen.findByText('Behandlingen er satt på vent')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Gå til forsiden'));

    await waitFor(() => expect(axiosMock.history.get.length).toBe(1));

    await waitFor(() =>
      expect(axiosMock.history.get.find(a => a.url === FagsakApiKeys.SUBMIT_MESSAGE.name)?.params).toStrictEqual({
        behandlingUuid: '1',
        arsakskode: undefined,
        brevmalkode: DokumentMalType.INNHENTE_OPPLYSNINGER,
        fritekst: 'Dette er en begrunnelse',
      }),
    );
  });
});
