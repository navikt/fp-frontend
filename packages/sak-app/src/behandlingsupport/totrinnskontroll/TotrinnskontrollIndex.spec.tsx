import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';
import { Modal } from '@navikt/ds-react';
import { FagsakYtelseType, BehandlingType, KodeverkType } from '@navikt/ft-kodeverk';

import {
  Fagsak, BehandlingAppKontekst, TotrinnskontrollAksjonspunkt, BehandlingÅrsak,
} from '@fpsak-frontend/types';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import FagsakData from '../../fagsak/FagsakData';
import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';
import TotrinnskontrollIndex from './TotrinnskontrollIndex';

describe('<TotrinnskontrollIndex>', () => {
  Modal.setAppElement('body');

  const createAksjonspunkt = (aksjonspunktKode: string) => (
    {
      aksjonspunktKode,
      opptjeningAktiviteter: [],
      vurderPaNyttArsaker: [],
    } as TotrinnskontrollAksjonspunkt
  );

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

  const totrinnskontrollAksjonspunkter = [
    getTotrinnsaksjonspunkterFoedsel(),
    getTotrinnsaksjonspunkterOmsorg(),
    getTotrinnsaksjonspunkterForeldreansvar(),
  ];

  const valgtBehandling = {
    uuid: '1234',
    versjon: 123,
    type: BehandlingType.FORSTEGANGSSOKNAD,
    opprettet: '‎29.08.‎2017‎ ‎09‎:‎54‎:‎22',
    status: 'FVED',
    toTrinnsBehandling: true,
    ansvarligSaksbehandler: 'Espen Utvikler',
    behandlingÅrsaker: [] as BehandlingÅrsak[],
    totrinnskontrollÅrsaker: totrinnskontrollAksjonspunkter,
  } as BehandlingAppKontekst;

  const fagsak = {
    saksnummer: '1',
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    behandlinger: [valgtBehandling],
  };

  const kodeverk = {
    [KodeverkType.SKJERMLENKE_TYPE]: [],
  };

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

  it('skal vise modal når beslutter godkjenner', async () => {
    const data = [
      { key: FpsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FpsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: kodeverk },
      { key: FpsakApiKeys.NAV_ANSATT.name, global: true, data: navAnsatt },
      { key: FpsakApiKeys.SAVE_TOTRINNSAKSJONSPUNKT.name, data: undefined },
    ];

    let axiosMock: MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => { axiosMock = mockAdapter; };

    render(
      <RestApiMock data={data} requestApi={requestApi} setApiMock={setApiMock}>
        <MemoryRouter>
          <TotrinnskontrollIndex
            fagsakData={new FagsakData(fagsak as Fagsak)}
            valgtBehandlingUuid={valgtBehandling.uuid}
            setBeslutterForData={() => undefined}
          />
        </MemoryRouter>
      </RestApiMock>,
    );

    expect(await screen.findByText('Kontroller endrede opplysninger og faglige vurderinger')).toBeInTheDocument();

    const alleGodkjentRadios = screen.getAllByText('Godkjent');
    expect(alleGodkjentRadios).toHaveLength(7);
    await userEvent.click(alleGodkjentRadios[0]);
    await userEvent.click(alleGodkjentRadios[1]);
    await userEvent.click(alleGodkjentRadios[2]);
    await userEvent.click(alleGodkjentRadios[3]);
    await userEvent.click(alleGodkjentRadios[4]);
    await userEvent.click(alleGodkjentRadios[5]);
    await userEvent.click(alleGodkjentRadios[6]);

    await userEvent.click(screen.getByText('Godkjenn vedtaket'));

    await waitFor(() => expect(axiosMock.history.get
      .find((a) => a.url === FpsakApiKeys.SAVE_TOTRINNSAKSJONSPUNKT.name)?.params).toStrictEqual({
      behandlingUuid: '1234',
      saksnummer: '1',
      behandlingVersjon: 123,
      bekreftedeAksjonspunktDtoer: [{
        '@type': '5016',
        aksjonspunktGodkjenningDtos: [
          {
            aksjonspunktKode: '5027',
            arsaker: [],
            begrunnelse: undefined,
            godkjent: true,
          },
          {
            aksjonspunktKode: '5001',
            arsaker: [],
            begrunnelse: undefined,
            godkjent: true,
          },
          {
            aksjonspunktKode: '7002',
            arsaker: [],
            begrunnelse: undefined,
            godkjent: true,
          },
          {
            aksjonspunktKode: '5008',
            arsaker: [],
            begrunnelse: undefined,
            godkjent: true,
          },
          {
            aksjonspunktKode: '5011',
            arsaker: [],
            begrunnelse: undefined,
            godkjent: true,
          },
          {
            aksjonspunktKode: '5014',
            arsaker: [],
            begrunnelse: undefined,
            godkjent: true,
          },
          {
            aksjonspunktKode: '5013',
            arsaker: [],
            begrunnelse: undefined,
            godkjent: true,
          },
        ],
        begrunnelse: null,
      }],
    }));
  });
});
