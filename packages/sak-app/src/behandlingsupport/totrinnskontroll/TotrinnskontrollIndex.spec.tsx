import React from 'react';
import { shallow } from 'enzyme';

import TotrinnskontrollSakIndex from '@fpsak-frontend/sak-totrinnskontroll';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import {
  Fagsak, TotrinnskontrollAksjonspunkt, BehandlingAppKontekst, BehandlingÅrsak,
} from '@fpsak-frontend/types';

import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';
import TotrinnskontrollIndex from './TotrinnskontrollIndex';
import BeslutterModalIndex from './BeslutterModalIndex';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useHistory: () => ({
    push: jest.fn(),
  }),
  useLocation: () => ({
    pathname: 'test',
    search: 'test',
    state: {},
    hash: 'test',
  }),
}));

describe('<TotrinnskontrollIndex>', () => {
  const fagsak = {
    saksnummer: '1',
    fagsakYtelseType: {
      kode: fagsakYtelseType.FORELDREPENGER,
      kodeverk: '',
    },
  };

  const valgtBehandling = {
    uuid: '1234',
    versjon: 123,
    type: {
      kode: behandlingType.FORSTEGANGSSOKNAD,
      kodeverk: '',
    },
    opprettet: '‎29.08.‎2017‎ ‎09‎:‎54‎:‎22',
    status: {
      kode: 'FVED',
      kodeverk: 'BEHANDLING_STATUS',
    },
    toTrinnsBehandling: true,
    ansvarligSaksbehandler: 'Espen Utvikler',
    behandlingÅrsaker: [] as BehandlingÅrsak[],
  } as BehandlingAppKontekst;

  const kodeverk = {
    [kodeverkTyper.SKJERMLENKE_TYPE]: [],
  };

  const createAksjonspunkt = (aksjonspunktKode: string) => (
    {
      aksjonspunktKode,
      opptjeningAktiviteter: [],
      vurderPaNyttArsaker: [],
    } as TotrinnskontrollAksjonspunkt
  );

  const navAnsatt = {
    brukernavn: 'Test',
    kanBehandleKode6: false,
    kanBehandleKode7: false,
    kanBehandleKodeEgenAnsatt: false,
    kanBeslutte: true,
    kanOverstyre: false,
    kanSaksbehandle: true,
    kanVeilede: false,
    navn: 'Test',
  };

  const getTotrinnsaksjonspunkterFoedsel = () => ({
    skjermlenkeType: 'FAKTA_OM_FOEDSEL',
    totrinnskontrollAksjonspunkter: [createAksjonspunkt(aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL),
      createAksjonspunkt(aksjonspunktCodes.TERMINBEKREFTELSE),
      createAksjonspunkt(aksjonspunktCodes.AUTO_VENT_PÅ_FODSELREGISTRERING)],
  });

  const getTotrinnsaksjonspunkterOmsorg = () => ({
    skjermlenkeType: 'FAKTA_FOR_OMSORG',
    totrinnskontrollAksjonspunkter: [createAksjonspunkt(aksjonspunktCodes.OMSORGSOVERTAKELSE),
      createAksjonspunkt(aksjonspunktCodes.MANUELL_VURDERING_AV_OMSORGSVILKARET)],
  });

  const getTotrinnsaksjonspunkterForeldreansvar = () => ({
    skjermlenkeType: 'PUNKT_FOR_FORELDREANSVAR',
    totrinnskontrollAksjonspunkter: [
      createAksjonspunkt(aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD),
      createAksjonspunkt(aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD),
    ],
  });

  it('skal vise modal når beslutter godkjenner', () => {
    requestApi.mock(FpsakApiKeys.KODEVERK.name, kodeverk);
    requestApi.mock(FpsakApiKeys.KODEVERK_FPTILBAKE.name, kodeverk);
    requestApi.mock(FpsakApiKeys.NAV_ANSATT.name, navAnsatt);
    requestApi.mock(FpsakApiKeys.TOTRINNS_KLAGE_VURDERING.name, {});
    requestApi.mock(FpsakApiKeys.SAVE_TOTRINNSAKSJONSPUNKT.name);

    const totrinnskontrollAksjonspunkter = [
      getTotrinnsaksjonspunkterFoedsel(),
      getTotrinnsaksjonspunkterOmsorg(),
      getTotrinnsaksjonspunkterForeldreansvar(),
    ];
    requestApi.mock(FpsakApiKeys.TOTRINNSAKSJONSPUNKT_ARSAKER.name, totrinnskontrollAksjonspunkter);

    const wrapper = shallow(<TotrinnskontrollIndex
      fagsak={fagsak as Fagsak}
      valgtBehandling={valgtBehandling}
      setBeslutterForData={() => undefined}
    />);

    const index = wrapper.find(TotrinnskontrollSakIndex);

    expect(wrapper.find(BeslutterModalIndex)).toHaveLength(0);

    const submit = index.prop('onSubmit') as (params: any) => void;
    submit({
      fatterVedtakAksjonspunktDto: {
        '@type': '5016',
        aksjonspunktGodkjenningDtos: [],
        begrunnelse: null,
      },
    });

    const reqData = requestApi.getRequestMockData(FpsakApiKeys.SAVE_TOTRINNSAKSJONSPUNKT.name);
    expect(reqData).toHaveLength(1);
    expect(reqData[0].params).toEqual({
      behandlingUuid: '1234',
      saksnummer: '1',
      behandlingVersjon: 123,
      bekreftedeAksjonspunktDtoer: [{
        '@type': '5016',
        aksjonspunktGodkjenningDtos: [],
        begrunnelse: null,
      }],
    });

    expect(wrapper.find(BeslutterModalIndex)).toHaveLength(1);
  });
});
