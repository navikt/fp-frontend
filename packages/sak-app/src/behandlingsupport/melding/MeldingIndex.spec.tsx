import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import MeldingerSakIndex, { MessagesModalSakIndex } from '@fpsak-frontend/sak-meldinger';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { BehandlingAppKontekst, Fagsak } from '@fpsak-frontend/types';
import SettPaVentModalIndex from '@fpsak-frontend/modal-sett-pa-vent';

import behandlingEventHandler from '../../behandling/BehandlingEventHandler';
import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';
import MeldingIndex from './MeldingIndex';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('<MeldingIndex>', () => {
  const recipients = ['Søker'];

  const fagsak = {
    saksnummer: '123456',
  };

  const valgtBehandling = {
    id: 1,
    uuid: '1212',
    versjon: 123,
    type: {
      kode: BehandlingType.FORSTEGANGSSOKNAD,
      kodeverk: '',
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

  it('skal vise messages når mottakere og brevmaler har blitt hentet fra server', () => {
    requestApi.mock(FpsakApiKeys.NAV_ANSATT.name, { navn: 'Peder' });
    requestApi.mock(FpsakApiKeys.KODEVERK.name, kodeverk);
    requestApi.mock(FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP.name, true);
    requestApi.mock(FpsakApiKeys.BREVMALER.name, templates);

    const wrapper = shallow(<MeldingIndex
      fagsak={fagsak as Fagsak}
      valgtBehandling={valgtBehandling as BehandlingAppKontekst}
      setMeldingForData={() => undefined}
    />);

    const index = wrapper.find(MeldingerSakIndex);
    expect(index.prop('recipients')).toEqual(recipients);
    expect(index.prop('templates')).toEqual(templates);
  });

  it('skal sette default tom streng ved forhåndsvisning dersom fritekst ikke er fylt ut', () => {
    requestApi.mock(FpsakApiKeys.NAV_ANSATT.name, { navn: 'Peder' });
    requestApi.mock(FpsakApiKeys.KODEVERK.name, kodeverk);
    requestApi.mock(FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP.name, true);
    requestApi.mock(FpsakApiKeys.BREVMALER.name, templates);
    requestApi.mock(FpsakApiKeys.PREVIEW_MESSAGE_FORMIDLING.name, {});

    const wrapper = shallow(<MeldingIndex
      fagsak={fagsak as Fagsak}
      valgtBehandling={valgtBehandling as BehandlingAppKontekst}
      setMeldingForData={() => undefined}
    />);

    const index = wrapper.find(MeldingerSakIndex);
    const previewCallback = index.prop('previewCallback') as (params: any) => void;
    previewCallback({ mottaker: 'Søker', brevmalkode: 'Mal1' });

    const reqData = requestApi.getRequestMockData(FpsakApiKeys.PREVIEW_MESSAGE_FORMIDLING.name);
    expect(reqData).toHaveLength(1);
    expect(reqData[0].params.fritekst).toBe(' ');
  });

  it('skal lukke av modal', async () => {
    requestApi.mock(FpsakApiKeys.NAV_ANSATT.name, { navn: 'Peder' });
    requestApi.mock(FpsakApiKeys.KODEVERK.name, kodeverk);
    requestApi.mock(FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP.name, true);
    requestApi.mock(FpsakApiKeys.BREVMALER.name, templates);
    requestApi.mock(FpsakApiKeys.SUBMIT_MESSAGE.name);

    const wrapper = shallow(<MeldingIndex
      fagsak={fagsak as Fagsak}
      valgtBehandling={valgtBehandling as BehandlingAppKontekst}
      setMeldingForData={() => undefined}
    />);

    const message = {
      mottaker: 'Michal Utvikler',
      brevmalkode: 'testbrevkode',
      fritekst: 'Dette er en tekst',
      arsakskode: undefined,
    };

    const index = wrapper.find(MeldingerSakIndex);
    const submitCallback = index.prop('submitCallback') as (messageArg: any) => Promise<any>;

    expect(wrapper.find(MessagesModalSakIndex)).toHaveLength(0);

    await submitCallback(message);

    const modal = wrapper.find(MessagesModalSakIndex);
    expect(modal).toHaveLength(1);

    const closeEvent = modal.prop('closeEvent') as () => void;
    closeEvent();

    expect(wrapper.find(MessagesModalSakIndex)).toHaveLength(0);
  });

  it('skal sende melding', async () => {
    requestApi.mock(FpsakApiKeys.NAV_ANSATT.name, { navn: 'Peder' });
    requestApi.mock(FpsakApiKeys.KODEVERK.name, kodeverk);
    requestApi.mock(FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP.name, true);
    requestApi.mock(FpsakApiKeys.BREVMALER.name, templates);
    requestApi.mock(FpsakApiKeys.SUBMIT_MESSAGE.name);

    const wrapper = shallow(<MeldingIndex
      fagsak={fagsak as Fagsak}
      valgtBehandling={valgtBehandling as BehandlingAppKontekst}
      setMeldingForData={() => undefined}
    />);

    const message = {
      mottaker: 'Espen Utvikler',
      brevmalkode: 'testkode',
      fritekst: 'Dette er en tekst',
      arsakskode: undefined,
    };

    const index = wrapper.find(MeldingerSakIndex);
    const submitCallback = index.prop('submitCallback') as (params: any) => void;
    await submitCallback(message);

    const reqData = requestApi.getRequestMockData(FpsakApiKeys.SUBMIT_MESSAGE.name);
    expect(reqData).toHaveLength(1);
    expect(reqData[0].params).toEqual({
      behandlingId: 1,
      mottaker: message.mottaker,
      brevmalkode: message.brevmalkode,
      fritekst: message.fritekst,
      arsakskode: undefined,
    });
  });

  it('skal sende melding og ikke sette saken på vent hvis ikke Innhent eller forlenget', async () => {
    requestApi.mock(FpsakApiKeys.NAV_ANSATT.name, { navn: 'Peder' });
    requestApi.mock(FpsakApiKeys.KODEVERK.name, kodeverk);
    requestApi.mock(FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP.name, true);
    requestApi.mock(FpsakApiKeys.BREVMALER.name, templates);
    requestApi.mock(FpsakApiKeys.SUBMIT_MESSAGE.name);

    const wrapper = shallow(<MeldingIndex
      fagsak={fagsak as Fagsak}
      valgtBehandling={valgtBehandling as BehandlingAppKontekst}
      setMeldingForData={() => undefined}
    />);

    const message = {
      mottaker: 'Michal Utvikler',
      brevmalkode: 'testbrevkode',
      fritekst: 'Dette er en tekst',
      arsakskode: undefined,
    };

    const index = wrapper.find(MeldingerSakIndex);
    const submitCallback = index.prop('submitCallback') as (messageArg: any) => Promise<any>;

    expect(wrapper.find(MessagesModalSakIndex)).toHaveLength(0);
    expect(wrapper.find(SettPaVentModalIndex)).toHaveLength(0);

    await submitCallback(message);

    expect(wrapper.find(MessagesModalSakIndex)).toHaveLength(1);
    expect(wrapper.find(SettPaVentModalIndex)).toHaveLength(0);

    const reqData = requestApi.getRequestMockData(FpsakApiKeys.SUBMIT_MESSAGE.name);
    expect(reqData).toHaveLength(1);
    expect(reqData[0].params).toEqual({
      behandlingId: 1,
      mottaker: message.mottaker,
      brevmalkode: message.brevmalkode,
      fritekst: message.fritekst,
      arsakskode: undefined,
    });
  });

  it('skal sende melding og sette saken på vent hvis INNHENT_DOK', async () => {
    requestApi.mock(FpsakApiKeys.NAV_ANSATT.name, { navn: 'Peder' });
    requestApi.mock(FpsakApiKeys.KODEVERK.name, kodeverk);
    requestApi.mock(FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP.name, true);
    requestApi.mock(FpsakApiKeys.BREVMALER.name, templates);
    requestApi.mock(FpsakApiKeys.SUBMIT_MESSAGE.name);

    const wrapper = shallow(<MeldingIndex
      fagsak={fagsak as Fagsak}
      valgtBehandling={valgtBehandling as BehandlingAppKontekst}
      setMeldingForData={() => undefined}
    />);

    const message = {
      mottaker: 'Michal Utvikler',
      brevmalkode: 'INNHEN',
      fritekst: 'Dette er en tekst',
      arsakskode: undefined,
    };

    const index = wrapper.find(MeldingerSakIndex);
    const submitCallback = index.prop('submitCallback') as (messageArg: any) => Promise<any>;

    expect(wrapper.find(MessagesModalSakIndex)).toHaveLength(0);
    expect(wrapper.find(SettPaVentModalIndex)).toHaveLength(0);

    await submitCallback(message);

    expect(wrapper.find(MessagesModalSakIndex)).toHaveLength(0);
    expect(wrapper.find(SettPaVentModalIndex)).toHaveLength(1);

    const reqData = requestApi.getRequestMockData(FpsakApiKeys.SUBMIT_MESSAGE.name);
    expect(reqData).toHaveLength(1);
    expect(reqData[0].params).toEqual({
      behandlingId: 1,
      mottaker: message.mottaker,
      brevmalkode: message.brevmalkode,
      fritekst: message.fritekst,
      arsakskode: undefined,
    });
  });

  it('skal sende melding og sette saken på vent hvis FORLEN', async () => {
    requestApi.mock(FpsakApiKeys.NAV_ANSATT.name, { navn: 'Peder' });
    requestApi.mock(FpsakApiKeys.KODEVERK.name, kodeverk);
    requestApi.mock(FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP.name, true);
    requestApi.mock(FpsakApiKeys.BREVMALER.name, templates);
    requestApi.mock(FpsakApiKeys.SUBMIT_MESSAGE.name);

    const wrapper = shallow(<MeldingIndex
      fagsak={fagsak as Fagsak}
      valgtBehandling={valgtBehandling as BehandlingAppKontekst}
      setMeldingForData={() => undefined}
    />);

    const message = {
      mottaker: 'Michal Utvikler',
      brevmalkode: 'FORLEN',
      fritekst: 'Dette er en tekst',
      arsakskode: undefined,
    };

    const index = wrapper.find(MeldingerSakIndex);
    const submitCallback = index.prop('submitCallback') as (messageArg: any) => Promise<any>;

    expect(wrapper.find(MessagesModalSakIndex)).toHaveLength(0);
    expect(wrapper.find(SettPaVentModalIndex)).toHaveLength(0);

    await submitCallback(message);

    expect(wrapper.find(MessagesModalSakIndex)).toHaveLength(0);
    expect(wrapper.find(SettPaVentModalIndex)).toHaveLength(1);

    const reqData = requestApi.getRequestMockData(FpsakApiKeys.SUBMIT_MESSAGE.name);
    expect(reqData).toHaveLength(1);
    expect(reqData[0].params).toEqual({
      behandlingId: 1,
      mottaker: message.mottaker,
      brevmalkode: message.brevmalkode,
      fritekst: message.fritekst,
      arsakskode: undefined,
    });
  });

  it('skal håndtere melding fra modal', async () => {
    requestApi.mock(FpsakApiKeys.NAV_ANSATT.name, { navn: 'Peder' });
    requestApi.mock(FpsakApiKeys.KODEVERK.name, kodeverk);
    requestApi.mock(FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP.name, true);
    requestApi.mock(FpsakApiKeys.BREVMALER.name, templates);
    requestApi.mock(FpsakApiKeys.SUBMIT_MESSAGE.name);

    const setBehandlingOnHoldCallback = sinon.spy();
    behandlingEventHandler.setHandler({
      settBehandlingPaVent: setBehandlingOnHoldCallback,
    });

    const wrapper = shallow(<MeldingIndex
      fagsak={fagsak as Fagsak}
      valgtBehandling={valgtBehandling as BehandlingAppKontekst}
      setMeldingForData={() => undefined}
    />);

    const message = {
      mottaker: 'Michal Utvikler',
      brevmalkode: 'FORLEN',
      fritekst: 'Dette er en tekst',
      arsakskode: undefined,
    };

    const index = wrapper.find(MeldingerSakIndex);
    const submitCallback = index.prop('submitCallback') as (messageArg: any) => Promise<any>;

    expect(wrapper.find(SettPaVentModalIndex)).toHaveLength(0);
    await submitCallback(message);
    expect(wrapper.find(SettPaVentModalIndex)).toHaveLength(1);

    const formValues = {
      frist: '2017-10-10',
      ventearsak: 'TEST',
    };
    wrapper.find(SettPaVentModalIndex).prop('submitCallback')(formValues);

    expect(setBehandlingOnHoldCallback).toHaveProperty('callCount', 1);
    const { args } = setBehandlingOnHoldCallback.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual({
      frist: formValues.frist,
      ventearsak: formValues.ventearsak,
    });

    expect(mockHistoryPush).toHaveBeenCalledWith('/');

    expect(wrapper.find(SettPaVentModalIndex)).toHaveLength(0);

    behandlingEventHandler.clear();
  });
});
