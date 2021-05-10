import React from 'react';
import { shallow } from 'enzyme';

import UttakProsessIndex from '@fpsak-frontend/prosess-uttak';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import {
  AksessRettigheter, Aksjonspunkt, Behandling, Fagsak, Personoversikt, StandardProsessPanelProps, UttaksresultatPeriode,
} from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import { requestFpApi, FpBehandlingApiKeys } from '../data/fpBehandlingApi';
import UttakProsessStegInitPanel from './UttakProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
  uttaksresultatPerioder: UttaksresultatPeriode;
}

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
} as Behandling;

describe('<UttakProsessStegInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<UttakProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      arbeidsgiverOpplysningerPerId={{}}
      fagsak={{} as Fagsak}
      personoversikt={{} as Personoversikt}
      rettigheter={{
        kanOverstyreAccess: {
          isEnabled: true,
        },
      } as AksessRettigheter}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.LOADING)).toBe(false);

    expect(panel.props().renderPanel({}, { aksjonspunkter: [], uttaksresultatPerioder: {} as UttaksresultatPeriode }).type).toEqual(UttakProsessIndex);
  });

  it('skal vise at panelet ikke er vurdert når det ikke finnes uttaktsresultatperioder', () => {
    const wrapper = shallow(<UttakProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      arbeidsgiverOpplysningerPerId={{}}
      fagsak={{} as Fagsak}
      personoversikt={{} as Personoversikt}
      rettigheter={{
        kanOverstyreAccess: {
          isEnabled: true,
        },
      } as AksessRettigheter}
      behandling={behandling}
    />);

    const panel = wrapper.find<Required<ProsessDefaultInitPanelProps<INIT_DATA, any>> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    expect(panel.props().hentOverstyrtStatus({}, {} as StandardProsessPanelProps)).toBe(vilkarUtfallType.IKKE_VURDERT);
  });

  it('skal vise at panelet er vurdert når det finnes uttaktsresultatperioder og ap for fakta uttak er løst', () => {
    const wrapper = shallow(<UttakProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      arbeidsgiverOpplysningerPerId={{}}
      fagsak={{} as Fagsak}
      personoversikt={{} as Personoversikt}
      rettigheter={{
        kanOverstyreAccess: {
          isEnabled: true,
        },
      } as AksessRettigheter}
      behandling={behandling}
    />);

    const panel = wrapper.find<Required<ProsessDefaultInitPanelProps<INIT_DATA, any>> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const uttaksresultatPerioder = {
      perioderSøker: [{
        periodeResultatType: {
          kode: periodeResultatType.GYLDIG_UTSETTELSE,
          kodeverk: '',
        },
      }],
    } as UttaksresultatPeriode;

    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_UTTAK,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.UTFORT,
        kodeverk: '',
      },
    }] as Aksjonspunkt[];

    expect(panel.props().hentOverstyrtStatus({ aksjonspunkter, uttaksresultatPerioder }, {
    } as INIT_DATA & StandardProsessPanelProps)).toBe(vilkarUtfallType.OPPFYLT);
  });

  it('skal oppdatere stønadskontoer', () => {
    requestFpApi.mock(FpBehandlingApiKeys.STONADSKONTOER_GITT_UTTAKSPERIODER.name, {});

    const wrapper = shallow(<UttakProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      arbeidsgiverOpplysningerPerId={{}}
      fagsak={{} as Fagsak}
      personoversikt={{} as Personoversikt}
      rettigheter={{
        kanOverstyreAccess: {
          isEnabled: true,
        },
      } as AksessRettigheter}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    panel.props().renderPanel({}, { aksjonspunkter: [], uttaksresultatPerioder: {} as UttaksresultatPeriode }).props.tempUpdateStonadskontoer({
      behandlingUuid: {
        saksnummer: '123',
        behandlingUuid: '1',
      },
      perioder: [],
    });

    const response = requestFpApi.getRequestMockData(FpBehandlingApiKeys.STONADSKONTOER_GITT_UTTAKSPERIODER.name);
    expect(response).toHaveLength(1);
    expect(response[0].params).toEqual({
      behandlingUuid: {
        saksnummer: '123',
        behandlingUuid: '1',
      },
      perioder: [],
    });
  });
});
