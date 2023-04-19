import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';
import { Modal } from '@navikt/ds-react';

import { RestApiMock } from '@navikt/fp-utils-test';
import {
  fagsakYtelseType as FagsakYtelseType,
  behandlingType as BehandlingType,
  KodeverkType,
  dokumentMalType,
} from '@navikt/fp-kodeverk';
import { Fagsak, BehandlingAppKontekst } from '@navikt/fp-types';

import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';
import MeldingIndex from './MeldingIndex';
import FagsakData from '../../fagsak/FagsakData';

describe('<MeldingIndex>', () => {
  Modal.setAppElement('body');

  const templates = [
    { kode: 'Mal1', navn: 'Mal 1', tilgjengelig: true },
    { kode: 'Mal2', navn: 'Mal 2', tilgjengelig: true },
    { kode: 'Mal3', navn: 'Mal 3', tilgjengelig: true },
    { kode: dokumentMalType.VARSEL_OM_REVURDERING, navn: 'Varsel om revurdering', tilgjengelig: true },
    { kode: dokumentMalType.INNHENTE_OPPLYSNINGER, navn: 'Innhent', tilgjengelig: true },
  ];

  const valgtBehandling = {
    uuid: '1',
    versjon: 123,
    type: BehandlingType.FORSTEGANGSSOKNAD,
    sprakkode: 'nb',
    brevmaler: templates,
    ugunstAksjonspunkt: true,
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

  const assignMock = vi.fn();
  // @ts-ignore
  delete window.location;
  // @ts-ignore Dette er kun for å unngå warnings med window.location.reload(). (Denne blir brukt som en temp-fiks, så dette skal derfor fjernes)
  window.location = { reload: assignMock };

  afterEach(() => {
    assignMock.mockClear();
  });

  it('skal vise messages når mottakere og brevmaler har blitt hentet fra server', async () => {
    const data = [
      { key: FpsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: { navn: 'Peder' } } },
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FpsakApiKeys.SUBMIT_MESSAGE.name, data: undefined },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <MemoryRouter>
          <MeldingIndex
            fagsakData={new FagsakData(fagsak as Fagsak)}
            valgtBehandlingUuid={valgtBehandling.uuid}
            setMeldingForData={() => undefined}
          />
        </MemoryRouter>
      </RestApiMock>,
    );
    expect(await screen.findByText('Mal 1')).toBeInTheDocument();
    expect(screen.getByText('Mal 2')).toBeInTheDocument();
    expect(screen.getByText('Mal 3')).toBeInTheDocument();
  });

  it('skal sette default tom streng ved forhåndsvisning dersom fritekst ikke er fylt ut', async () => {
    const data = [
      { key: FpsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: { navn: 'Peder' } } },
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FpsakApiKeys.PREVIEW_MESSAGE_FORMIDLING.name, data: {} },
    ];

    let axiosMock: MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => {
      axiosMock = mockAdapter;
    };

    const utils = render(
      <RestApiMock data={data} requestApi={requestApi} setApiMock={setApiMock}>
        <MemoryRouter>
          <MeldingIndex
            fagsakData={new FagsakData(fagsak as Fagsak)}
            valgtBehandlingUuid={valgtBehandling.uuid}
            setMeldingForData={() => undefined}
          />
        </MemoryRouter>
      </RestApiMock>,
    );

    expect(await screen.findByText('Mal 1')).toBeInTheDocument();

    expect(await screen.findByText('Forhåndsvis')).toBeInTheDocument();

    await userEvent.selectOptions(utils.getByLabelText('Mal'), 'Mal1');

    await userEvent.click(screen.getByText('Forhåndsvis'));

    await waitFor(() => expect(axiosMock.history.post.length).toBe(1));
    await waitFor(() =>
      expect(axiosMock.history.post.find(a => a.url === '/fpformidling/api/brev/forhaandsvis')?.data).toBe(
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
      { key: FpsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: { navn: 'Peder' } } },
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FpsakApiKeys.SUBMIT_MESSAGE.name, data: undefined },
    ];

    let axiosMock: MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => {
      axiosMock = mockAdapter;
    };

    const utils = render(
      <RestApiMock data={data} requestApi={requestApi} setApiMock={setApiMock}>
        <MemoryRouter>
          <MeldingIndex
            fagsakData={new FagsakData(fagsak as Fagsak)}
            valgtBehandlingUuid={valgtBehandling.uuid}
            setMeldingForData={() => undefined}
          />
        </MemoryRouter>
      </RestApiMock>,
    );

    expect(await screen.findByText('Mal 1')).toBeInTheDocument();

    expect(await screen.findByText('Send brev')).toBeInTheDocument();

    await userEvent.selectOptions(utils.getByLabelText('Mal'), 'Mal1');

    await userEvent.click(screen.getByText('Send brev'));

    expect(await screen.findByText('Brevet er bestilt')).toBeInTheDocument();

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(axiosMock.history.get.length).toBe(1));

    await waitFor(() =>
      expect(axiosMock.history.get.find(a => a.url === FpsakApiKeys.SUBMIT_MESSAGE.name)?.params).toStrictEqual({
        behandlingUuid: '1',
        arsakskode: undefined,
        fritekst: '',
        brevmalkode: 'Mal1',
      }),
    );
  });

  it('skal sende melding og sette saken på vent hvis INNHENT_DOK', async () => {
    const data = [
      { key: FpsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: { navn: 'Peder' } } },
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FpsakApiKeys.SUBMIT_MESSAGE.name, data: undefined },
    ];

    let axiosMock: MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => {
      axiosMock = mockAdapter;
    };

    const utils = render(
      <RestApiMock data={data} requestApi={requestApi} setApiMock={setApiMock}>
        <MemoryRouter>
          <MeldingIndex
            fagsakData={new FagsakData(fagsak as Fagsak)}
            valgtBehandlingUuid={valgtBehandling.uuid}
            setMeldingForData={() => undefined}
          />
        </MemoryRouter>
      </RestApiMock>,
    );

    expect(await screen.findByText('Mal 1')).toBeInTheDocument();

    expect(await screen.findByText('Send brev')).toBeInTheDocument();

    await userEvent.selectOptions(utils.getByLabelText('Mal'), dokumentMalType.INNHENTE_OPPLYSNINGER);

    const begrunnelseInput = utils.getByLabelText('Liste over dokumenter (skriv ett dokument pr. linje)');
    await userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Send brev'));

    expect(await screen.findByText('Behandlingen er satt på vent')).toBeInTheDocument();

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(axiosMock.history.get.length).toBe(1));

    await waitFor(() =>
      expect(axiosMock.history.get.find(a => a.url === FpsakApiKeys.SUBMIT_MESSAGE.name)?.params).toStrictEqual({
        behandlingUuid: '1',
        arsakskode: undefined,
        brevmalkode: dokumentMalType.INNHENTE_OPPLYSNINGER,
        fritekst: 'Dette er en begrunnelse',
      }),
    );
  });
});
