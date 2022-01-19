import React from 'react';
import { shallow } from 'enzyme';

import TilkjentYtelseProsessIndex from '@fpsak-frontend/prosess-tilkjent-ytelse';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import {
  Behandling,
  BeregningsresultatFp, Fagsak, Personoversikt, StandardProsessPanelProps, UttaksresultatPeriode,
} from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';

import TilkjentYtelseProsessStegInitPanel from './TilkjentYtelseProsessStegInitPanel';

type INIT_DATA = {
  beregningresultatForeldrepenger: BeregningsresultatFp;
  uttaksresultatPerioder: UttaksresultatPeriode;
}

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
} as Behandling;

describe('<TilkjentYtelseProsessStegInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<TilkjentYtelseProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      arbeidsgiverOpplysningerPerId={{}}
      fagsak={{} as Fagsak}
      personoversikt={{} as Personoversikt}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.LOADING)).toBe(false);

    expect(panel.props().renderPanel({}, {
      beregningresultatForeldrepenger: {} as BeregningsresultatFp,
      uttaksresultatPerioder: {} as UttaksresultatPeriode,
    }).type).toEqual(TilkjentYtelseProsessIndex);
  });

  it('skal vise at panelet ikke er vurdert når det ikke finnes beregningsresultat eller uttaktsresultatperioder', () => {
    const wrapper = shallow(<TilkjentYtelseProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      arbeidsgiverOpplysningerPerId={{}}
      fagsak={{} as Fagsak}
      personoversikt={{} as Personoversikt}
      behandling={behandling}
    />);

    const panel = wrapper.find<Required<ProsessDefaultInitPanelProps<INIT_DATA, any>> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    expect(panel.props().hentOverstyrtStatus({}, {} as StandardProsessPanelProps)).toBe(vilkarUtfallType.IKKE_VURDERT);
  });

  it('skal vise at panelet ikke er vurdert når alle perioder har dagsats 0', () => {
    const wrapper = shallow(<TilkjentYtelseProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      arbeidsgiverOpplysningerPerId={{}}
      fagsak={{} as Fagsak}
      personoversikt={{} as Personoversikt}
      behandling={behandling}
    />);

    const panel = wrapper.find<Required<ProsessDefaultInitPanelProps<INIT_DATA, any>> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const beregningresultatForeldrepenger = {
      perioder: [{
        dagsats: 0,
      }],
    } as BeregningsresultatFp;

    expect(panel.props().hentOverstyrtStatus({}, {
      beregningresultatForeldrepenger,
    } as StandardProsessPanelProps & INIT_DATA)).toBe(vilkarUtfallType.IKKE_VURDERT);
  });

  it('skal vise at panelet er vurdert når en har uttaktsresultat som er oppfylt', () => {
    const wrapper = shallow(<TilkjentYtelseProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      arbeidsgiverOpplysningerPerId={{}}
      fagsak={{} as Fagsak}
      personoversikt={{} as Personoversikt}
      behandling={behandling}
    />);

    const panel = wrapper.find<Required<ProsessDefaultInitPanelProps<INIT_DATA, any>> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const beregningresultatForeldrepenger = {
      perioder: [{
        dagsats: 100,
      }],
    } as BeregningsresultatFp;

    const uttaksresultatPerioder = {
      perioderSøker: [{
        periodeResultatType: periodeResultatType.GYLDIG_UTSETTELSE,
      }],
    } as UttaksresultatPeriode;

    expect(panel.props().hentOverstyrtStatus({ beregningresultatForeldrepenger }, {
      uttaksresultatPerioder,
    } as StandardProsessPanelProps & INIT_DATA)).toBe(vilkarUtfallType.OPPFYLT);
  });
});
