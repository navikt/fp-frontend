import React from 'react';
import { shallow } from 'enzyme';

import { createRequestApi, RestApiConfigBuilder, RestKey } from '@fpsak-frontend/rest-api';
import {
  Behandling, AksessRettigheter, StandardProsessPanelProps, Aksjonspunkt,
} from '@fpsak-frontend/types';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';

import ProsessPanelWrapper from './ProsessPanelWrapper';
import ProsessDefaultInitPanel from './ProsessDefaultInitPanel';

let realUseContext: any;
let useContextMock: any;

const fagsak = {
  saksnummer: '1234',
};
const behandling = {
  uuid: '1',
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

describe('<ProsessDefaultInitPanel>', () => {
  beforeEach(() => {
    realUseContext = React.useContext;
    useContextMock = jest.fn();
    React.useContext = useContextMock;
  });

  afterEach(() => {
    React.useContext = realUseContext;
  });

  it('skal rendre panel korrekt', () => {
    const AKSJONSPUNKTER_KEY = new RestKey<Aksjonspunkt[], void>('AKSJONSPUNKTER_KEY');

    const endpoints = new RestApiConfigBuilder()
      .withRel('aksjonspunkter', AKSJONSPUNKTER_KEY)
      .build();

    const requestMock = createRequestApi(endpoints);
    requestMock.mock(AKSJONSPUNKTER_KEY.name, []);

    useContextMock.mockReturnValue({
      fagsak, behandling, rettigheter, alleKodeverk: { test: '' }, hasFetchError: false,
    });

    const wrapper = shallow(<ProsessDefaultInitPanel
      valgtProsessSteg="default"
      behandling={behandling}
      registrerProsessPanel={() => {}}
      requestApi={requestMock}
      initEndepunkter={[AKSJONSPUNKTER_KEY]}
      skalPanelVisesIMeny={() => true}
      // @ts-ignore
      renderPanel={(props) => <div {...props} />}
      prosessPanelKode={ProsessStegCode.AVREGNING}
      prosessPanelMenyTekst="Dette er en tekst"
    />);

    const prosessWrapper = wrapper.find(ProsessPanelWrapper);
    expect(prosessWrapper).toHaveLength(1);
    expect(prosessWrapper.props().erPanelValgt).toBe(false);
    expect(prosessWrapper.props().erAksjonspunktOpent).toBe(false);
    expect(prosessWrapper.props().status).toBe(vilkarUtfallType.IKKE_VURDERT);
    expect(prosessWrapper.props().dataState).toEqual(RestApiState.SUCCESS);

    const div = wrapper.find('div');
    expect(div).toHaveLength(1);
    const panelProps = div.props() as StandardProsessPanelProps;
    expect(panelProps.aksjonspunkter).toEqual([]);
    expect(panelProps.behandling).toEqual(behandling);
    expect(panelProps.status).toEqual(vilkarUtfallType.IKKE_VURDERT);
    expect(panelProps.isReadOnly).toBe(false);
    expect(panelProps.readOnlySubmitButton).toBe(true);
    expect(panelProps.isAksjonspunktOpen).toBe(false);
  });
});
