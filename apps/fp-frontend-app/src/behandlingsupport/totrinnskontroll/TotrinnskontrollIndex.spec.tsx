import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';
import { createIntl } from '@navikt/ft-utils';
import { Fagsak, BehandlingAppKontekst, TotrinnskontrollAksjonspunkt, BehandlingÅrsak } from '@navikt/fp-types';
import { RestApiMock } from '@navikt/fp-utils-test';
import {
  fagsakYtelseType as FagsakYtelseType,
  behandlingType as BehandlingType,
  KodeverkType,
  AksjonspunktCode,
} from '@navikt/fp-kodeverk';

import { RawIntlProvider } from 'react-intl';
import FagsakData from '../../fagsak/FagsakData';
import { requestFagsakApi, FagsakApiKeys } from '../../data/fagsakContextApi';
import TotrinnskontrollIndex from './TotrinnskontrollIndex';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

describe('<TotrinnskontrollIndex>', () => {
  const createAksjonspunkt = (aksjonspunktKode: string) =>
    ({
      aksjonspunktKode,
      opptjeningAktiviteter: [],
      vurderPaNyttArsaker: [],
    } as TotrinnskontrollAksjonspunkt);

  const getTotrinnsaksjonspunkterFoedsel = () => ({
    skjermlenkeType: 'FAKTA_OM_FOEDSEL',
    totrinnskontrollAksjonspunkter: [
      createAksjonspunkt(AksjonspunktCode.SJEKK_MANGLENDE_FODSEL),
      createAksjonspunkt(AksjonspunktCode.TERMINBEKREFTELSE),
      createAksjonspunkt(AksjonspunktCode.AUTO_VENT_PÅ_FODSELREGISTRERING),
    ],
  });

  const getTotrinnsaksjonspunkterOmsorg = () => ({
    skjermlenkeType: 'FAKTA_FOR_OMSORG',
    totrinnskontrollAksjonspunkter: [
      createAksjonspunkt(AksjonspunktCode.OMSORGSOVERTAKELSE),
      createAksjonspunkt(AksjonspunktCode.MANUELL_VURDERING_AV_OMSORGSVILKARET),
    ],
  });

  const getTotrinnsaksjonspunkterForeldreansvar = () => ({
    skjermlenkeType: 'PUNKT_FOR_FORELDREANSVAR',
    totrinnskontrollAksjonspunkter: [
      createAksjonspunkt(AksjonspunktCode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD),
      createAksjonspunkt(AksjonspunktCode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD),
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
    kanOverstyre: false,
    kanSaksbehandle: true,
    kanVeilede: false,
    navn: 'Test',
  };

  it('skal vise modal når beslutter godkjenner', async () => {
    const data = [
      { key: FagsakApiKeys.KODEVERK.name, global: true, data: kodeverk },
      { key: FagsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: kodeverk },
      { key: FagsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: navAnsatt } },
      { key: FagsakApiKeys.SAVE_TOTRINNSAKSJONSPUNKT.name, data: undefined },
    ];

    let axiosMock: MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => {
      axiosMock = mockAdapter;
    };

    render(
      <RawIntlProvider value={intl}>
        <RestApiMock data={data} requestApi={requestFagsakApi} setApiMock={setApiMock}>
          <MemoryRouter>
            <TotrinnskontrollIndex
              fagsakData={new FagsakData(fagsak as Fagsak)}
              valgtBehandlingUuid={valgtBehandling.uuid}
              setBeslutterFormData={() => undefined}
            />
          </MemoryRouter>
        </RestApiMock>{' '}
      </RawIntlProvider>,
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

    await waitFor(() =>
      expect(
        axiosMock.history.get.find(a => a.url === FagsakApiKeys.SAVE_TOTRINNSAKSJONSPUNKT.name)?.params,
      ).toStrictEqual({
        behandlingUuid: '1234',
        saksnummer: '1',
        behandlingVersjon: 123,
        bekreftedeAksjonspunktDtoer: [
          {
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
          },
        ],
      }),
    );
  });
});
