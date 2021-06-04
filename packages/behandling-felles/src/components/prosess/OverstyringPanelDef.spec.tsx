import React from 'react';
import { shallow } from 'enzyme';

import {
  Behandling, AksessRettigheter, Vilkar, Aksjonspunkt,
} from '@fpsak-frontend/types';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import VilkarresultatMedOverstyringProsessIndex from '@fpsak-frontend/prosess-vilkar-overstyring';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';

import OverstyringPanelDef from './OverstyringPanelDef';

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

describe('<OverstyringPanelDef>', () => {
  beforeEach(() => {
    realUseContext = React.useContext;
    useContextMock = jest.fn();
    React.useContext = useContextMock;
  });

  afterEach(() => {
    React.useContext = realUseContext;
  });

  it('skal rendre panel korrekt', () => {
    const alleKodeverk = {
      Avslagsårsak: {
        FP_VK_2: [{
          kode: '1007',
          navn: 'Test årsak',
          kodeverk: 'AVSLAGSARSAK',
        }],
      },
    };

    useContextMock.mockReturnValue({
      fagsak, behandling, rettigheter, alleKodeverk, hasFetchError: false,
    });

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
    }] as Aksjonspunkt[];

    const wrapper = shallow(<OverstyringPanelDef
      aksjonspunkter={aksjonspunkter}
      aksjonspunktKode={aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR}
      vilkar={vilkar}
      vilkarKoder={[]}
      panelTekstKode="Panel tekst"
      erMedlemskapsPanel={false}
      erOverstyrt={false}
      toggleOverstyring={() => {}}
      kanOverstyreAccess={{ isEnabled: true, employeeHasAccess: true }}
      overrideReadOnly={false}
    />);

    expect(wrapper.find(VilkarresultatMedOverstyringProsessIndex)).toHaveLength(1);
  });
});
