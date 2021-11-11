import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';
import Modal from 'nav-frontend-modal';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { BehandlingAppKontekst, Fagsak } from '@fpsak-frontend/types';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';
import MeldingIndex from './MeldingIndex';

describe('<MeldingIndex>', () => {
  Modal.setAppElement('body');

  const fagsak = {
    saksnummer: '123456',
    fagsakYtelseType: {
      kode: fagsakYtelseType.FORELDREPENGER,
      kodeverk: 'FAGSAK_YTELSE_TYPE',
    },
  };

  const valgtBehandling = {
    uuid: '1',
    versjon: 123,
    type: {
      kode: BehandlingType.FORSTEGANGSSOKNAD,
      kodeverk: '',
    },
    sprakkode: {
      kode: 'nb',
      kodeverk: 'SPRÅK',
    },
  };

  const kodeverk = {
    [kodeverkTyper.VENT_AARSAK]: [],
  };

  const templates = [
    { kode: 'Mal1', navn: 'Mal 1', tilgjengelig: true },
    { kode: 'Mal2', navn: 'Mal 2', tilgjengelig: true },
    { kode: 'Mal3', navn: 'Mal 3', tilgjengelig: true },
    { kode: 'INNHEN', navn: 'Innhent', tilgjengelig: true },
  ];

  const assignMock = jest.fn();
  // @ts-ignore
  delete window.location;
  // @ts-ignore Dette er kun for å unngå warnings med window.location.reload(). (Denne blir brukt som en temp-fiks, så dette skal derfor fjernes)
  window.location = { reload: assignMock };

  afterEach(() => {
    assignMock.mockClear();
  });

  it('skal vise messages når mottakere og brevmaler har blitt hentet fra server', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: { navn: 'Peder' } },
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP.name, data: true },
      { key: FpsakApiKeys.SUBMIT_MESSAGE.name, data: undefined },
      { key: FpsakApiKeys.BREVMALER.name, data: templates },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <MemoryRouter>
          <MeldingIndex
            fagsak={fagsak as Fagsak}
            valgtBehandling={valgtBehandling as BehandlingAppKontekst}
            setMeldingForData={() => undefined}
          />
        </MemoryRouter>
      </RestApiMock>,
    );
    expect(await screen.findByText('Mottaker')).toBeInTheDocument();
    expect(screen.getByText('Søker')).toBeInTheDocument();
    expect(screen.getByText('Mal 1')).toBeInTheDocument();
    expect(screen.getByText('Mal 2')).toBeInTheDocument();
    expect(screen.getByText('Mal 3')).toBeInTheDocument();
  });

  it('skal sette default tom streng ved forhåndsvisning dersom fritekst ikke er fylt ut', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: { navn: 'Peder' } },
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP.name, data: true },
      { key: FpsakApiKeys.BREVMALER.name, data: templates },
      { key: FpsakApiKeys.PREVIEW_MESSAGE_FORMIDLING.name, data: {} },
    ];

    let axiosMock: MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => { axiosMock = mockAdapter; };

    const utils = render(
      <RestApiMock data={data} requestApi={requestApi} setApiMock={setApiMock}>
        <MemoryRouter>
          <MeldingIndex
            fagsak={fagsak as Fagsak}
            valgtBehandling={valgtBehandling as BehandlingAppKontekst}
            setMeldingForData={() => undefined}
          />
        </MemoryRouter>
      </RestApiMock>,
    );

    expect(await screen.findByText('Forhåndsvis')).toBeInTheDocument();

    userEvent.selectOptions(utils.getByLabelText('Mottaker'), 'Søker');
    userEvent.selectOptions(utils.getByLabelText('Mal'), 'Mal1');

    userEvent.click(screen.getByText('Forhåndsvis'));

    await waitFor(() => expect(axiosMock.history.post.length).toBe(1));
    await waitFor(() => expect(axiosMock.history.post
      .find((a) => a.url === '/fpformidling/api/brev/forhaandsvis').data).toBe(JSON.stringify({
      behandlingUuid: '1',
      ytelseType: {
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: 'FAGSAK_YTELSE_TYPE',
      },
      fritekst: ' ',
      arsakskode: null,
      mottaker: 'Søker',
      dokumentMal: 'Mal1',
    })));
  });

  it('skal sende melding og så lukke modal', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: { navn: 'Peder' } },
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP.name, data: true },
      { key: FpsakApiKeys.BREVMALER.name, data: templates },
      { key: FpsakApiKeys.SUBMIT_MESSAGE.name, data: undefined },
    ];

    let axiosMock: MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => { axiosMock = mockAdapter; };

    const utils = render(
      <RestApiMock data={data} requestApi={requestApi} setApiMock={setApiMock}>
        <MemoryRouter>
          <MeldingIndex
            fagsak={fagsak as Fagsak}
            valgtBehandling={valgtBehandling as BehandlingAppKontekst}
            setMeldingForData={() => undefined}
          />
        </MemoryRouter>
      </RestApiMock>,
    );

    expect(await screen.findByText('Send brev')).toBeInTheDocument();

    userEvent.selectOptions(utils.getByLabelText('Mottaker'), 'Søker');
    userEvent.selectOptions(utils.getByLabelText('Mal'), 'Mal1');

    userEvent.click(screen.getByText('Send brev'));

    expect(await screen.findByText('Brevet er bestilt')).toBeInTheDocument();

    userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(axiosMock.history.get.length).toBe(5));

    await waitFor(() => expect(axiosMock.history.get
      .find((a) => a.url === FpsakApiKeys.SUBMIT_MESSAGE.name).params).toStrictEqual({
      behandlingUuid: '1',
      arsakskode: undefined,
      mottaker: 'Søker',
      fritekst: '',
      brevmalkode: 'Mal1',
    }));
  });

  it('skal sende melding og sette saken på vent hvis INNHENT_DOK', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: { navn: 'Peder' } },
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP.name, data: true },
      { key: FpsakApiKeys.BREVMALER.name, data: templates },
      { key: FpsakApiKeys.SUBMIT_MESSAGE.name, data: undefined },
    ];

    let axiosMock: MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => { axiosMock = mockAdapter; };

    const utils = render(
      <RestApiMock data={data} requestApi={requestApi} setApiMock={setApiMock}>
        <MemoryRouter>
          <MeldingIndex
            fagsak={fagsak as Fagsak}
            valgtBehandling={valgtBehandling as BehandlingAppKontekst}
            setMeldingForData={() => undefined}
          />
        </MemoryRouter>
      </RestApiMock>,
    );

    expect(await screen.findByText('Send brev')).toBeInTheDocument();

    userEvent.selectOptions(utils.getByLabelText('Mottaker'), 'Søker');
    userEvent.selectOptions(utils.getByLabelText('Mal'), 'INNHEN');

    const begrunnelseInput = utils.getByLabelText('Liste over dokumenter (skriv ett dokument pr. linje)');
    userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Send brev'));

    expect(await screen.findByText('Behandlingen er satt på vent')).toBeInTheDocument();

    userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(axiosMock.history.get.length).toBe(5));

    await waitFor(() => expect(axiosMock.history.get
      .find((a) => a.url === FpsakApiKeys.SUBMIT_MESSAGE.name).params).toStrictEqual({
      behandlingUuid: '1',
      arsakskode: undefined,
      brevmalkode: 'INNHEN',
      fritekst: 'Dette er en begrunnelse',
      mottaker: 'Søker',
    }));
  });
});
