import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';
import { Modal } from '@navikt/ds-react';
import { FagsakYtelseType, BehandlingType, KodeverkType } from '@navikt/ft-kodeverk';
import { Fagsak, BehandlingAppKontekst } from '@navikt/ft-types';

import { TotrinnskontrollAksjonspunkt, BehandlingÅrsak } from '@fpsak-frontend/types';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';
import TotrinnskontrollIndex from './TotrinnskontrollIndex';

describe('<TotrinnskontrollIndex>', () => {
  Modal.setAppElement('body');
  const fagsak = {
    saksnummer: '1',
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  };

  const valgtBehandling = {
    uuid: '1234',
    versjon: 123,
    type: BehandlingType.FORSTEGANGSSOKNAD,
    opprettet: '‎29.08.‎2017‎ ‎09‎:‎54‎:‎22',
    status: 'FVED',
    toTrinnsBehandling: true,
    ansvarligSaksbehandler: 'Espen Utvikler',
    behandlingÅrsaker: [] as BehandlingÅrsak[],
  } as BehandlingAppKontekst;

  const kodeverk = {
    [KodeverkType.SKJERMLENKE_TYPE]: [],
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

    let axiosMock: MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => { axiosMock = mockAdapter; };

    render(
      <RestApiMock data={data} requestApi={requestApi} setApiMock={setApiMock}>
        <MemoryRouter>
          <TotrinnskontrollIndex
            fagsak={fagsak as Fagsak}
            valgtBehandling={valgtBehandling}
            setBeslutterForData={() => undefined}
          />
        </MemoryRouter>
      </RestApiMock>,
    );

    expect(await screen.findByText('Kontroller endrede opplysninger og faglige vurderinger')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Send til saksbehandler'));

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
            godkjent: undefined,
          },
          {
            aksjonspunktKode: '5001',
            arsaker: [],
            begrunnelse: undefined,
            godkjent: undefined,
          },
          {
            aksjonspunktKode: '7002',
            arsaker: [],
            begrunnelse: undefined,
            godkjent: undefined,
          },
          {
            aksjonspunktKode: '5008',
            arsaker: [],
            begrunnelse: undefined,
            godkjent: undefined,
          },
          {
            aksjonspunktKode: '5011',
            arsaker: [],
            begrunnelse: undefined,
            godkjent: undefined,
          },
          {
            aksjonspunktKode: '5014',
            arsaker: [],
            begrunnelse: undefined,
            godkjent: undefined,
          },
          {
            aksjonspunktKode: '5013',
            arsaker: [],
            begrunnelse: undefined,
            godkjent: undefined,
          },
        ],
        begrunnelse: null,
      }],
    }));
  });
});
