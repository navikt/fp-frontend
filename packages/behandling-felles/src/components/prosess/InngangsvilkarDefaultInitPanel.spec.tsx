import React from 'react';
import { shallow } from 'enzyme';

import { createRequestApi, RestApiConfigBuilder, RestKey } from '@fpsak-frontend/rest-api';
import {
  Behandling, AksessRettigheter, StandardProsessPanelProps, Vilkar, Aksjonspunkt,
} from '@fpsak-frontend/types';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';

import InngangsvilkarDefaultInitPanel from './InngangsvilkarDefaultInitPanel';

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

describe('<InngangsvilkarDefaultInitPanel>', () => {
  beforeEach(() => {
    realUseContext = React.useContext;
    useContextMock = jest.fn();
    React.useContext = useContextMock;
  });

  afterEach(() => {
    React.useContext = realUseContext;
  });

  it('skal ikke vise panel når en ikke har åpne aksjonspunkter', () => {
    const AKSJONSPUNKTER_KEY = new RestKey<Aksjonspunkt[], void>('AKSJONSPUNKTER_KEY');

    const endpoints = new RestApiConfigBuilder()
      .withRel('aksjonspunkter', AKSJONSPUNKTER_KEY)
      .build();

    const requestMock = createRequestApi(endpoints);
    requestMock.mock(AKSJONSPUNKTER_KEY.name, []);

    useContextMock.mockReturnValue({
      fagsak, behandling, rettigheter, alleKodeverk: { test: '' }, hasFetchError: false,
    });

    const wrapper = shallow(<InngangsvilkarDefaultInitPanel
      erPanelValgt
      behandlingVersjon={1}
      registrerInngangsvilkarPanel={() => {}}
      requestApi={requestMock}
      initEndepunkter={[AKSJONSPUNKTER_KEY]}
      // @ts-ignore
      renderPanel={(props) => <div {...props} />}
      inngangsvilkarPanelKode="test"
      hentInngangsvilkarPanelTekst={() => 'test'}
      harInngangsvilkarApentAksjonspunkt={false}
    />);

    const div = wrapper.find('div');
    expect(div).toHaveLength(0);
  });

  it('skal vise panel', () => {
    const vilkar = [{
      vilkarType: {
        kode: vilkarType.MEDLEMSKAPSVILKARET,
        kodeverk: '',
      },
    } as Vilkar];
    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      kanLoses: true,
      erAktivt: true,
    }] as Aksjonspunkt[];

    const AKSJONSPUNKTER_KEY = new RestKey<Aksjonspunkt[], void>('AKSJONSPUNKTER');
    const VILKAR_KEY = new RestKey<Vilkar[], void>('VILKAR');

    const endpoints = new RestApiConfigBuilder()
      .withRel('aksjonspunkter', AKSJONSPUNKTER_KEY)
      .withRel('vilkar', VILKAR_KEY)
      .build();

    const requestMock = createRequestApi(endpoints);
    requestMock.mock(AKSJONSPUNKTER_KEY.name, aksjonspunkter);
    requestMock.mock(VILKAR_KEY.name, vilkar);

    useContextMock.mockReturnValue({
      fagsak, behandling, rettigheter, alleKodeverk: { test: '' }, hasFetchError: false,
    });

    const wrapper = shallow(<InngangsvilkarDefaultInitPanel
      erPanelValgt
      behandlingVersjon={1}
      registrerInngangsvilkarPanel={() => {}}
      requestApi={requestMock}
      initEndepunkter={[AKSJONSPUNKTER_KEY, VILKAR_KEY]}
      aksjonspunktKoder={[aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR]}
      // @ts-ignore
      renderPanel={(props) => <div {...props} />}
      inngangsvilkarPanelKode="test"
      hentInngangsvilkarPanelTekst={() => 'test'}
      harInngangsvilkarApentAksjonspunkt={false}
    />);

    const div = wrapper.find('div');
    expect(div).toHaveLength(1);
    const panelProps = div.props() as StandardProsessPanelProps;
    expect(panelProps.aksjonspunkter).toEqual(aksjonspunkter);
    expect(panelProps.behandling).toEqual(behandling);
    expect(panelProps.status).toEqual(vilkarUtfallType.IKKE_VURDERT);
    expect(panelProps.isReadOnly).toBe(false);
    expect(panelProps.readOnlySubmitButton).toBe(false);
    expect(panelProps.isAksjonspunktOpen).toBe(true);
  });
});
