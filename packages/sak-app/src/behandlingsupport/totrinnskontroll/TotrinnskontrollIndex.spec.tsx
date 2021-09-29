import React from 'react';
import { render, screen } from '@testing-library/react';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import {
  Fagsak, TotrinnskontrollAksjonspunkt, BehandlingAppKontekst, BehandlingÅrsak,
} from '@fpsak-frontend/types';

import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';
import TotrinnskontrollIndex from './TotrinnskontrollIndex';

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

  it('skal vise modal når beslutter godkjenner', async () => {
    const totrinnskontrollAksjonspunkter = [
      getTotrinnsaksjonspunkterFoedsel(),
      getTotrinnsaksjonspunkterOmsorg(),
      getTotrinnsaksjonspunkterForeldreansvar(),
    ];
    const data = [
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FpsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: kodeverk },
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: navAnsatt },
      { key: FpsakApiKeys.TOTRINNS_KLAGE_VURDERING.name, data: {} },
      { key: FpsakApiKeys.SAVE_TOTRINNSAKSJONSPUNKT.name, data: undefined },
      { key: FpsakApiKeys.TOTRINNSAKSJONSPUNKT_ARSAKER.name, data: totrinnskontrollAksjonspunkter },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <TotrinnskontrollIndex
          fagsak={fagsak as Fagsak}
          valgtBehandling={valgtBehandling}
          setBeslutterForData={() => undefined}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();

    // const index = wrapper.find(TotrinnskontrollSakIndex);

    // expect(wrapper.find(BeslutterModalIndex)).toHaveLength(0);

    // const submit = index.prop('onSubmit') as (params: any) => void;
    // submit({
    //   fatterVedtakAksjonspunktDto: {
    //     '@type': '5016',
    //     aksjonspunktGodkjenningDtos: [],
    //     begrunnelse: null,
    //   },
    // });

    // const reqData = requestApi.getRequestMockData(FpsakApiKeys.SAVE_TOTRINNSAKSJONSPUNKT.name);
    // expect(reqData).toHaveLength(1);
    // expect(reqData[0].params).toEqual({
    //   behandlingUuid: '1234',
    //   saksnummer: '1',
    //   behandlingVersjon: 123,
    //   bekreftedeAksjonspunktDtoer: [{
    //     '@type': '5016',
    //     aksjonspunktGodkjenningDtos: [],
    //     begrunnelse: null,
    //   }],
    // });

    // expect(wrapper.find(BeslutterModalIndex)).toHaveLength(1);
  });
});
