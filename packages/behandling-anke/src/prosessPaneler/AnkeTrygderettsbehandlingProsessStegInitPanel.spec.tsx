import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import AnkeTrygderettsbehandlingProsessIndex from '@fpsak-frontend/prosess-anke-trygderettsbehandling';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles';
import { Aksjonspunkt, Fagsak, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import { AnkeBehandlingApiKeys, requestAnkeApi } from '../data/ankeBehandlingApi';
import AnkeTrygderettsbehandlingProsessStegInitPanel from './AnkeTrygderettsbehandlingProsessStegInitPanel';

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
  id: 1,
  uuid: 'test-uuid',
  versjon: 1,
};

jest.mock('@fpsak-frontend/behandling-felles', () => {
  const felles = jest.requireActual('@fpsak-frontend/behandling-felles');
  return {
    ...felles,
    useStandardProsessPanelProps: () => ({
      behandling,
    }),
  };
});

describe('<AnkeTrygderettsbehandlingProsessStegInitPanel>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<AnkeTrygderettsbehandlingProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleSkalOppdatereFagsakContext={() => {}}
      oppdaterProsessStegOgFaktaPanelIUrl={() => {}}
      fagsak={fagsak}
      opneSokeside={() => {}}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);

    const innerElement = panel.renderProp('renderPanel')({ behandling });

    expect(innerElement.find(AnkeTrygderettsbehandlingProsessIndex)).toHaveLength(1);
  });

  it('skal ikke oppdatere fagsak-kontekst etter lagring når ap er manuell vurdering', () => {
    const toggleSkalOppdatereFagsakContext = sinon.spy();

    const wrapper = shallow(<AnkeTrygderettsbehandlingProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleSkalOppdatereFagsakContext={toggleSkalOppdatereFagsakContext}
      oppdaterProsessStegOgFaktaPanelIUrl={() => {}}
      fagsak={fagsak}
      opneSokeside={() => {}}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    const aksjonspunktModels = [{
      kode: aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER,
    }];

    panel.props().lagringSideEffekter(aksjonspunktModels);

    expect(toggleSkalOppdatereFagsakContext.getCalls()).toHaveLength(1);
    const { args } = toggleSkalOppdatereFagsakContext.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual(false);
  });

  it('skal vise forhåndsvisning av melding', () => {
    requestAnkeApi.mock(AnkeBehandlingApiKeys.PREVIEW_MESSAGE, {});

    const wrapper = shallow(<AnkeTrygderettsbehandlingProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleSkalOppdatereFagsakContext={() => {}}
      oppdaterProsessStegOgFaktaPanelIUrl={() => {}}
      fagsak={fagsak}
      opneSokeside={() => {}}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    const innerElement = panel.renderProp('renderPanel')({ behandling });

    const klageProsessPanel = innerElement.find(AnkeTrygderettsbehandlingProsessIndex);
    expect(klageProsessPanel).toHaveLength(1);

    klageProsessPanel.props().previewCallback({
      fritekst: 'Dette er en fritekst',
      dokumentMal: 'mal',
      mottaker: 'Mottaker',
    });

    const response = requestAnkeApi.getRequestMockData(AnkeBehandlingApiKeys.PREVIEW_MESSAGE);
    expect(response).toHaveLength(1);
    expect(response[0].params).toEqual({
      behandlingUuid: 'test-uuid',
      ytelseType: {
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: '',
      },
      fritekst: 'Dette er en fritekst',
      dokumentMal: 'mal',
      mottaker: 'Mottaker',
    });
  });
});
