import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import VedtakProsessIndex from '@fpsak-frontend/prosess-vedtak';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles';
import {
  Aksjonspunkt, Behandling, Fagsak, StandardProsessPanelProps, Vilkar,
} from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import VedtakProsessStegInitPanel from './VedtakProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
} as Behandling;

jest.mock('@fpsak-frontend/behandling-felles', () => {
  const felles = jest.requireActual('@fpsak-frontend/behandling-felles');
  return {
    ...felles,
    useStandardProsessPanelProps: () => ({
      behandling,
    }),
  };
});

describe('<VedtakProsessStegInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<VedtakProsessStegInitPanel
      behandling={behandling}
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={() => {}}
      fagsak={{} as Fagsak}
      opneSokeside={() => {}}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.LOADING)).toBe(false);

    const innerElement = panel.renderProp('renderPanel')({ behandling }, { aksjonspunkter: [], vilkar: [] });

    expect(innerElement.find(VedtakProsessIndex)).toHaveLength(1);
  });

  it('skal ha status ikke vurdert når det ikke finnes vilkar', () => {
    const wrapper = shallow(<VedtakProsessStegInitPanel
      behandling={behandling}
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={() => {}}
      fagsak={{} as Fagsak}
      opneSokeside={() => {}}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    expect(panel.props().hentOverstyrtStatus({}, { behandling } as StandardProsessPanelProps)).toBe(vilkarUtfallType.IKKE_VURDERT);
  });

  it('skal ikke oppdatere fagsak-kontekst etter lagring', () => {
    const toggleSkalOppdatereFagsakContext = sinon.spy();

    const wrapper = shallow(<VedtakProsessStegInitPanel
      behandling={behandling}
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={toggleSkalOppdatereFagsakContext}
      fagsak={{} as Fagsak}
      opneSokeside={() => {}}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    const aksjonspunktModels = [{
      kode: aksjonspunktCodes.VARSEL_REVURDERING_ETTERKONTROLL,
      sendVarsel: true,
    }];

    panel.props().lagringSideEffekter(aksjonspunktModels);

    expect(toggleSkalOppdatereFagsakContext.getCalls()).toHaveLength(1);
    const { args } = toggleSkalOppdatereFagsakContext.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual(false);
  });
});
