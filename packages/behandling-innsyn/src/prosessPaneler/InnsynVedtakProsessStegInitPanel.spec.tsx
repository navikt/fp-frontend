import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import VedtakInnsynProsessIndex from '@fpsak-frontend/prosess-vedtak-innsyn';
import { ProsessPanelWrapper } from '@fpsak-frontend/behandling-felles-ny';
import { AksessRettigheter, Fagsak } from '@fpsak-frontend/types';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';

import { requestInnsynApi, InnsynBehandlingApiKeys } from '../data/innsynBehandlingApi';
import InnsynVedtakProsessStegInitPanel from './InnsynVedtakProsessStegInitPanel';

const fagsak = {
  fagsakYtelseType: {
    kode: fagsakYtelseType.FORELDREPENGER,
    kodeverk: '',
  },
} as Fagsak;

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
  status: {
    kode: behandlingStatus.OPPRETTET,
    kodeverk: '',
  },
  behandlingPaaVent: false,
};

const rettigheter = {
  writeAccess: {
    isEnabled: true,
  },
} as AksessRettigheter;

let realUseContext;
let useContextMock;

describe('<InnsynVedtakFormImpl>', () => {
  beforeEach(() => {
    realUseContext = React.useContext;
    useContextMock = jest.fn();
    React.useContext = useContextMock;
  });

  afterEach(() => {
    React.useContext = realUseContext;
  });

  it('skal rendre komponent korrekt', () => {
    requestInnsynApi.mock(InnsynBehandlingApiKeys.AKSJONSPUNKTER, []);
    requestInnsynApi.mock(InnsynBehandlingApiKeys.INNSYN, {});
    requestInnsynApi.mock(InnsynBehandlingApiKeys.INNSYN_DOKUMENTER, []);

    useContextMock.mockReturnValue({
      fagsak, behandling, rettigheter, alleKodeverk: { test: '' }, hasFetchError: false,
    });

    const wrapper = shallow(<InnsynVedtakProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={() => {}}
      fagsak={fagsak}
      opneSokeside={() => {}}
    />);

    expect(wrapper.find(ProsessPanelWrapper)).toHaveLength(1);
    expect(wrapper.find(VedtakInnsynProsessIndex)).toHaveLength(1);
  });

  it('skal ikke oppdatere fagsak-kontekst etter lagring', () => {
    requestInnsynApi.mock(InnsynBehandlingApiKeys.AKSJONSPUNKTER, []);
    requestInnsynApi.mock(InnsynBehandlingApiKeys.INNSYN, {});
    requestInnsynApi.mock(InnsynBehandlingApiKeys.INNSYN_DOKUMENTER, []);

    const toggleSkalOppdatereFagsakContext = sinon.spy();
    const lagreAksjonspunkter = sinon.stub();
    lagreAksjonspunkter.returns(Promise.resolve());

    useContextMock.mockReturnValue({
      fagsak, behandling, rettigheter, alleKodeverk: { test: '' }, hasFetchError: false, lagreAksjonspunkter,
    });

    const wrapper = shallow(<InnsynVedtakProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={toggleSkalOppdatereFagsakContext}
      fagsak={fagsak}
      opneSokeside={() => {}}
    />);

    const panel = wrapper.find(VedtakInnsynProsessIndex);

    const aksjonspunktModels = [{
      kode: aksjonspunktCodes.FORESLA_VEDTAK,
    }];

    panel.props().submitCallback(aksjonspunktModels);

    expect(toggleSkalOppdatereFagsakContext.getCalls()).toHaveLength(1);
    const { args } = toggleSkalOppdatereFagsakContext.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual(false);
  });

  it('skal vise forhåndsvisning av melding', () => {
    requestInnsynApi.mock(InnsynBehandlingApiKeys.AKSJONSPUNKTER, []);
    requestInnsynApi.mock(InnsynBehandlingApiKeys.INNSYN, {});
    requestInnsynApi.mock(InnsynBehandlingApiKeys.INNSYN_DOKUMENTER, []);
    requestInnsynApi.mock(InnsynBehandlingApiKeys.PREVIEW_MESSAGE, {});

    useContextMock.mockReturnValue({
      fagsak, behandling, rettigheter, alleKodeverk: { test: '' }, hasFetchError: false,
    });

    const wrapper = shallow(<InnsynVedtakProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={() => {}}
      fagsak={fagsak}
      opneSokeside={() => {}}
    />);

    const panel = wrapper.find(VedtakInnsynProsessIndex);

    panel.props().previewCallback({
      fritekst: 'Fritekst',
      mottaker: 'Mottaker',
      dokumentMal: 'Mal',
      gjelderVedtak: true,
    });

    const response = requestInnsynApi.getRequestMockData(InnsynBehandlingApiKeys.PREVIEW_MESSAGE);
    expect(response).toHaveLength(1);
    expect(response[0].params).toEqual({
      behandlingUuid: 'test-uuid',
      ytelseType: {
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: '',
      },
      fritekst: 'Fritekst',
      mottaker: 'Mottaker',
      dokumentMal: 'Mal',
      gjelderVedtak: true,
    });
  });
});
