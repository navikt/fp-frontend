import React from 'react';
import { shallow } from 'enzyme';

import { createRequestApi, RestApiConfigBuilder } from '@fpsak-frontend/rest-api';
import { Behandling, AksessRettigheter, StandardFaktaPanelProps } from '@fpsak-frontend/types';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import FaktaPanelWrapper from './FaktaPanelWrapper';
import FaktaDefaultInitPanel from './FaktaDefaultInitPanel';

let realUseContext;
let useContextMock;

const fagsak = {
  saksnummerString: '1234',
};
const behandling = {
  id: 1,
  versjon: 2,
  status: {
    kode: behandlingStatus.OPPRETTET,
    kodeverk: '',
  },
  behandlingPaaVent: false,
} as Behandling;
const rettigheter = {
  writeAccess: {
    isEnabled: true,
  },
} as AksessRettigheter;

describe('<FaktaDefaultInitPanel>', () => {
  beforeEach(() => {
    realUseContext = React.useContext;
    useContextMock = jest.fn();
    React.useContext = useContextMock;
  });

  afterEach(() => {
    React.useContext = realUseContext;
  });

  it('skal rendre panel korrekt', () => {
    const AKSJONSPUNKTER_KEY = 'AKSJONSPUNKTER_KEY';

    const endpoints = new RestApiConfigBuilder()
      .withRel('aksjonspunkter', AKSJONSPUNKTER_KEY)
      .build();

    const requestMock = createRequestApi(endpoints);
    requestMock.mock(AKSJONSPUNKTER_KEY, []);

    useContextMock.mockReturnValue({
      fagsak, behandling, rettigheter, alleKodeverk: { test: '' }, hasFetchError: false,
    });

    const wrapper = shallow(<FaktaDefaultInitPanel
      valgtFaktaSteg="default"
      behandlingVersjon={1}
      registrerFaktaPanel={() => {}}
      requestApi={requestMock}
      initEndepunkter={[AKSJONSPUNKTER_KEY]}
      skalPanelVisesIMeny={() => true}
      // @ts-ignore
      renderPanel={(props) => <div {...props} />}
      faktaPanelKode="test"
      faktaPanelMenyTekst="Dette er en tekst"
    />);

    const faktaWrapper = wrapper.find(FaktaPanelWrapper);
    expect(faktaWrapper).toHaveLength(1);
    expect(faktaWrapper.props().erPanelValgt).toBe(false);
    expect(faktaWrapper.props().dataState).toEqual(RestApiState.SUCCESS);

    const div = wrapper.find('div');
    expect(div).toHaveLength(1);
    const panelProps = div.props() as StandardFaktaPanelProps;
    expect(panelProps.aksjonspunkter).toEqual([]);
    expect(panelProps.behandling).toEqual(behandling);
    expect(panelProps.submittable).toBe(true);
    expect(panelProps.harApneAksjonspunkter).toBe(false);
    expect(panelProps.readOnly).toBe(false);
  });
});
