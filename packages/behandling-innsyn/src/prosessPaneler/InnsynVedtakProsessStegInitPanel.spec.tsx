import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import VedtakInnsynProsessIndex from '@fpsak-frontend/prosess-vedtak-innsyn';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles';
import {
  Aksjonspunkt, Behandling, Fagsak, StandardProsessPanelProps,
} from '@fpsak-frontend/types';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import { requestInnsynApi, InnsynBehandlingApiKeys } from '../data/innsynBehandlingApi';
import InnsynVedtakProsessStegInitPanel from './InnsynVedtakProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
}

const fagsak = {
  fagsakYtelseType: {
    kode: fagsakYtelseType.FORELDREPENGER,
    kodeverk: '',
  },
} as Fagsak;

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
} as Behandling;

jest.mock('@fpsak-frontend/behandling-felles', () => {
  const felles = jest.requireActual('@fpsak-frontend/behandling-felles');
  const behandlingStatus = jest.requireActual('@fpsak-frontend/kodeverk/src/behandlingStatus');
  return {
    ...felles,
    useStandardProsessPanelProps: () => ({
      behandling: {
        uuid: 'test-uuid',
        versjon: 1,
        status: {
          kode: behandlingStatus.OPPRETTET,
          kodeverk: '',
        },
        behandlingPaaVent: false,
      },
    }),
  };
});

describe('<InnsynVedtakProsessStegInitPanel>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<InnsynVedtakProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={() => {}}
      fagsak={fagsak}
      opneSokeside={() => {}}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);

    const innerElement = panel.renderProp('renderPanel')({}, { aksjonspunkter: [] });

    expect(innerElement.find(VedtakInnsynProsessIndex)).toHaveLength(1);
  });

  it('skal ikke oppdatere fagsak-kontekst etter lagring', () => {
    const toggleSkalOppdatereFagsakContext = sinon.spy();
    const lagreAksjonspunkter = sinon.stub();
    lagreAksjonspunkter.returns(Promise.resolve());

    const wrapper = shallow(<InnsynVedtakProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={toggleSkalOppdatereFagsakContext}
      fagsak={fagsak}
      opneSokeside={() => {}}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    const aksjonspunktModels = [{
      kode: aksjonspunktCodes.FORESLA_VEDTAK,
    }];

    panel.props().lagringSideEffekter(aksjonspunktModels);

    expect(toggleSkalOppdatereFagsakContext.getCalls()).toHaveLength(1);
    const { args } = toggleSkalOppdatereFagsakContext.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual(false);
  });

  it('skal vise forhåndsvisning av melding', () => {
    requestInnsynApi.mock(InnsynBehandlingApiKeys.PREVIEW_MESSAGE.name, {});

    const wrapper = shallow(<InnsynVedtakProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={() => {}}
      fagsak={fagsak}
      opneSokeside={() => {}}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    const innerElement = panel.renderProp('renderPanel')({}, { aksjonspunkter: [] });

    const innnerPanel = innerElement.find(VedtakInnsynProsessIndex);

    innnerPanel.props().previewCallback({
      fritekst: 'Fritekst',
      mottaker: 'Mottaker',
      dokumentMal: 'Mal',
      gjelderVedtak: true,
    });

    const response = requestInnsynApi.getRequestMockData(InnsynBehandlingApiKeys.PREVIEW_MESSAGE.name);
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
