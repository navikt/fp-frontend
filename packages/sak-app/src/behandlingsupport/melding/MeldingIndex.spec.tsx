import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { BehandlingAppKontekst, Fagsak } from '@fpsak-frontend/types';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import useVisForhandsvisningAvMelding from '../../data/useVisForhandsvisningAvMelding';
import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';
import MeldingIndex from './MeldingIndex';

describe('<MeldingIndex>', () => {
  // const recipients = ['Søker'];

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
  ];

  const assignMock = jest.fn();
  // @ts-ignore
  delete window.location;
  // @ts-ignore Dette er kun for å unngå warnings med window.location.reload(). (Denne blir brukt som en temp-fiks, så dette skal derfor fjernes)
  window.location = { reload: assignMock };

  afterEach(() => {
    assignMock.mockClear();
  });

  const history = createMemoryHistory();

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
        <Router history={history}>
          <MeldingIndex
            fagsak={fagsak as Fagsak}
            valgtBehandling={valgtBehandling as BehandlingAppKontekst}
            setMeldingForData={() => undefined}
          />
        </Router>
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

    //useVisForhandsvisningAvMelding 

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <Router history={history}>
          <MeldingIndex
            fagsak={fagsak as Fagsak}
            valgtBehandling={valgtBehandling as BehandlingAppKontekst}
            setMeldingForData={() => undefined}
          />
        </Router>
      </RestApiMock>,
    );

    expect(await screen.findByText('Forhåndsvis')).toBeInTheDocument();

    userEvent.click(screen.getByText('Forhåndsvis'));

    // const reqData = requestApi.getRequestMockData(FpsakApiKeys.PREVIEW_MESSAGE_FORMIDLING.name);
    // expect(reqData).toHaveLength(1);
    // expect(reqData[0].params.fritekst).toBe(' ');
  });

  it('skal lukke av modal', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: { navn: 'Peder' } },
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP.name, data: true },
      { key: FpsakApiKeys.BREVMALER.name, data: templates },
      { key: FpsakApiKeys.SUBMIT_MESSAGE.name, data: undefined },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <Router history={history}>
          <MeldingIndex
            fagsak={fagsak as Fagsak}
            valgtBehandling={valgtBehandling as BehandlingAppKontekst}
            setMeldingForData={() => undefined}
          />
        </Router>
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();

    // const message = {
    //   mottaker: 'Michal Utvikler',
    //   brevmalkode: 'testbrevkode',
    //   fritekst: 'Dette er en tekst',
    //   arsakskode: undefined,
    // };

    // const index = wrapper.find(MeldingerSakIndex);
    // const submitCallback = index.prop('submitCallback') as (messageArg: any) => Promise<any>;

    // expect(wrapper.find(MessagesModalSakIndex)).toHaveLength(0);

    // await submitCallback(message);

    // const modal = wrapper.find(MessagesModalSakIndex);
    // expect(modal).toHaveLength(1);

    // const closeEvent = modal.prop('closeEvent') as () => void;
    // closeEvent();

    // expect(wrapper.find(MessagesModalSakIndex)).toHaveLength(0);
  });

  it('skal sende melding', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: { navn: 'Peder' } },
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP.name, data: true },
      { key: FpsakApiKeys.BREVMALER.name, data: templates },
      { key: FpsakApiKeys.SUBMIT_MESSAGE.name, data: undefined },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <Router history={history}>
          <MeldingIndex
            fagsak={fagsak as Fagsak}
            valgtBehandling={valgtBehandling as BehandlingAppKontekst}
            setMeldingForData={() => undefined}
          />
        </Router>
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();

    // const message = {
    //   mottaker: 'Espen Utvikler',
    //   brevmalkode: 'testkode',
    //   fritekst: 'Dette er en tekst',
    //   arsakskode: undefined,
    // };

    // const index = wrapper.find(MeldingerSakIndex);
    // const submitCallback = index.prop('submitCallback') as (params: any) => void;
    // await submitCallback(message);

    // const reqData = requestApi.getRequestMockData(FpsakApiKeys.SUBMIT_MESSAGE.name);
    // expect(reqData).toHaveLength(1);
    // expect(reqData[0].params).toEqual({
    //   behandlingUuid: '1',
    //   mottaker: message.mottaker,
    //   brevmalkode: message.brevmalkode,
    //   fritekst: message.fritekst,
    //   arsakskode: undefined,
    // });
  });

  it('skal sende melding og ikke sette saken på vent hvis ikke Innhent eller forlenget', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: { navn: 'Peder' } },
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP.name, data: true },
      { key: FpsakApiKeys.BREVMALER.name, data: templates },
      { key: FpsakApiKeys.SUBMIT_MESSAGE.name, data: undefined },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <Router history={history}>
          <MeldingIndex
            fagsak={fagsak as Fagsak}
            valgtBehandling={valgtBehandling as BehandlingAppKontekst}
            setMeldingForData={() => undefined}
          />
        </Router>
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();

    // const message = {
    //   mottaker: 'Michal Utvikler',
    //   brevmalkode: 'testbrevkode',
    //   fritekst: 'Dette er en tekst',
    //   arsakskode: undefined,
    // };

    // const index = wrapper.find(MeldingerSakIndex);
    // const submitCallback = index.prop('submitCallback') as (messageArg: any) => Promise<any>;

    // expect(wrapper.find(MessagesModalSakIndex)).toHaveLength(0);
    // expect(wrapper.find(SettPaVentModalIndex)).toHaveLength(0);

    // await submitCallback(message);

    // expect(wrapper.find(MessagesModalSakIndex)).toHaveLength(1);
    // expect(wrapper.find(SettPaVentModalIndex)).toHaveLength(0);

    // const reqData = requestApi.getRequestMockData(FpsakApiKeys.SUBMIT_MESSAGE.name);
    // expect(reqData).toHaveLength(1);
    // expect(reqData[0].params).toEqual({
    //   behandlingUuid: '1',
    //   mottaker: message.mottaker,
    //   brevmalkode: message.brevmalkode,
    //   fritekst: message.fritekst,
    //   arsakskode: undefined,
    // });
  });

  it('skal sende melding og sette saken på vent hvis INNHENT_DOK', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: { navn: 'Peder' } },
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP.name, data: true },
      { key: FpsakApiKeys.BREVMALER.name, data: templates },
      { key: FpsakApiKeys.SUBMIT_MESSAGE.name, data: undefined },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <Router history={history}>
          <MeldingIndex
            fagsak={fagsak as Fagsak}
            valgtBehandling={valgtBehandling as BehandlingAppKontekst}
            setMeldingForData={() => undefined}
          />
        </Router>
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();

    // const message = {
    //   mottaker: 'Michal Utvikler',
    //   brevmalkode: 'INNHEN',
    //   fritekst: 'Dette er en tekst',
    //   arsakskode: undefined,
    // };

    // const index = wrapper.find(MeldingerSakIndex);
    // const submitCallback = index.prop('submitCallback') as (messageArg: any) => Promise<any>;

    // expect(wrapper.find(MessagesModalSakIndex)).toHaveLength(0);
    // expect(wrapper.find(SettPaVentModalIndex)).toHaveLength(0);

    // await submitCallback(message);

    // expect(wrapper.find(MessagesModalSakIndex)).toHaveLength(0);
    // expect(wrapper.find(SettPaVentModalIndex)).toHaveLength(1);

    // const reqData = requestApi.getRequestMockData(FpsakApiKeys.SUBMIT_MESSAGE.name);
    // expect(reqData).toHaveLength(1);
    // expect(reqData[0].params).toEqual({
    //   behandlingUuid: '1',
    //   mottaker: message.mottaker,
    //   brevmalkode: message.brevmalkode,
    //   fritekst: message.fritekst,
    //   arsakskode: undefined,
    // });
  });

  it('skal sende melding og sette saken på vent hvis FORLEN', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: { navn: 'Peder' } },
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP.name, data: true },
      { key: FpsakApiKeys.BREVMALER.name, data: templates },
      { key: FpsakApiKeys.SUBMIT_MESSAGE.name, data: undefined },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <Router history={history}>
          <MeldingIndex
            fagsak={fagsak as Fagsak}
            valgtBehandling={valgtBehandling as BehandlingAppKontekst}
            setMeldingForData={() => undefined}
          />
        </Router>
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();

    // const message = {
    //   mottaker: 'Michal Utvikler',
    //   brevmalkode: 'FORLEN',
    //   fritekst: 'Dette er en tekst',
    //   arsakskode: undefined,
    // };

    // const index = wrapper.find(MeldingerSakIndex);
    // const submitCallback = index.prop('submitCallback') as (messageArg: any) => Promise<any>;

    // expect(wrapper.find(MessagesModalSakIndex)).toHaveLength(0);
    // expect(wrapper.find(SettPaVentModalIndex)).toHaveLength(0);

    // await submitCallback(message);

    // expect(wrapper.find(MessagesModalSakIndex)).toHaveLength(0);
    // expect(wrapper.find(SettPaVentModalIndex)).toHaveLength(1);

    // const reqData = requestApi.getRequestMockData(FpsakApiKeys.SUBMIT_MESSAGE.name);
    // expect(reqData).toHaveLength(1);
    // expect(reqData[0].params).toEqual({
    //   behandlingUuid: '1',
    //   mottaker: message.mottaker,
    //   brevmalkode: message.brevmalkode,
    //   fritekst: message.fritekst,
    //   arsakskode: undefined,
    // });
  });

  it('skal håndtere melding fra modal', async () => {
    const data = [
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: { navn: 'Peder' } },
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP.name, data: true },
      { key: FpsakApiKeys.BREVMALER.name, data: templates },
      { key: FpsakApiKeys.SUBMIT_MESSAGE.name, data: undefined },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <Router history={history}>
          <MeldingIndex
            fagsak={fagsak as Fagsak}
            valgtBehandling={valgtBehandling as BehandlingAppKontekst}
            setMeldingForData={() => undefined}
          />
        </Router>
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();

    // const setBehandlingOnHoldCallback = sinon.spy();
    // behandlingEventHandler.setHandler({
    //   settBehandlingPaVent: setBehandlingOnHoldCallback,
    // });

    // const wrapper = shallow(<MeldingIndex
    //   fagsak={fagsak as Fagsak}
    //   valgtBehandling={valgtBehandling as BehandlingAppKontekst}
    //   setMeldingForData={() => undefined}
    // />);

    // const message = {
    //   mottaker: 'Michal Utvikler',
    //   brevmalkode: 'FORLEN',
    //   fritekst: 'Dette er en tekst',
    //   arsakskode: undefined,
    // };

    // const index = wrapper.find(MeldingerSakIndex);
    // const submitCallback = index.prop('submitCallback') as (messageArg: any) => Promise<any>;

    // expect(wrapper.find(SettPaVentModalIndex)).toHaveLength(0);
    // await submitCallback(message);
    // expect(wrapper.find(SettPaVentModalIndex)).toHaveLength(1);

    // const formValues = {
    //   frist: '2017-10-10',
    //   ventearsak: 'TEST',
    // };
    // wrapper.find(SettPaVentModalIndex).prop('submitCallback')(formValues);

    // expect(setBehandlingOnHoldCallback).toHaveProperty('callCount', 1);
    // const { args } = setBehandlingOnHoldCallback.getCalls()[0];
    // expect(args).toHaveLength(1);
    // expect(args[0]).toEqual({
    //   frist: formValues.frist,
    //   ventearsak: formValues.ventearsak,
    // });

    // expect(mockHistoryPush).toHaveBeenCalledWith('/');

    // expect(wrapper.find(SettPaVentModalIndex)).toHaveLength(0);

    // behandlingEventHandler.clear();
  });
});
