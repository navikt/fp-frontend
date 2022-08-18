import React from 'react';
import { shallow } from 'enzyme';
import { Behandling, Aksjonspunkt } from '@navikt/ft-types';
import { AksjonspunktStatus, VilkarType, BehandlingStatus } from '@navikt/ft-kodeverk';

import { Vilkar, AksessRettigheter } from '@fpsak-frontend/types';
import VilkarresultatMedOverstyringProsessIndex from '@fpsak-frontend/prosess-vilkar-overstyring';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import OverstyringPanelDef from './OverstyringPanelDef';

let realUseContext: any;
let useContextMock: any;

const fagsak = {
  saksnummer: '1234',
};
const behandling = {
  uuid: '1',
  versjon: 2,
  status: BehandlingStatus.OPPRETTET,
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
      vilkarType: VilkarType.MEDLEMSKAPSVILKARET,
    } as Vilkar];
    const aksjonspunkter = [{
      definisjon: aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
      status: AksjonspunktStatus.OPPRETTET,
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
