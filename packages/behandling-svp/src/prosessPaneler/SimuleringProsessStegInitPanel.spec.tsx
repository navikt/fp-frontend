import React from 'react';
import { shallow } from 'enzyme';
import { render, screen, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import userEvent from '@testing-library/user-event';

import tilbakekrevingVidereBehandling from '@fpsak-frontend/kodeverk/src/tilbakekrevingVidereBehandling';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import * as Felles from '@fpsak-frontend/behandling-felles/src/utils/prosess/useStandardProsessPanelProps';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import AvregningProsessIndex from '@fpsak-frontend/prosess-avregning';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import {
  Behandling, Fagsak, SimuleringResultat, StandardProsessPanelProps, Aksjonspunkt,
} from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import { requestSvpApi, SvpBehandlingApiKeys } from '../data/svpBehandlingApi';
import SimuleringProsessStegInitPanel from './SimuleringProsessStegInitPanel';

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
  behandlingÅrsaker: [],
  type: behandlingType.FORSTEGANGSSOKNAD,
} as Behandling;

const mottaker = {
  mottakerNavn: '',
  mottakerNummer: '',
  mottakerType: '',
  resultatPerFagområde: [],
  resultatOgMotregningRader: [],
};

const simuleringResultat = {
  simuleringResultat: {
    periodeFom: '2018-09-01',
    periodeTom: '2018-12-31',
    sumFeilutbetaling: 0,
    sumEtterbetaling: 0,
    sumInntrekk: 0,
    ingenPerioderMedAvvik: false,
    perioderPerMottaker: [mottaker],
  },
  simuleringResultatUtenInntrekk: null,
} as SimuleringResultat;

// @ts-ignore Fiks
const kodeverk = alleKodeverk as AlleKodeverk;

describe('<SimuleringProsessStegInitPanel>', () => {
  const submitCallback = jest.fn();
  jest.spyOn(Felles, 'default').mockImplementation(() => ({
    behandling,
    alleMerknaderFraBeslutter: {},
    submitCallback,
    status: vilkarUtfallType.IKKE_VURDERT,
    alleKodeverk: kodeverk,
    isReadOnly: false,
    readOnlySubmitButton: false,
    aksjonspunkter: [{
      definisjon: aksjonspunktCodes.VURDER_FEILUTBETALING,
      erAktivt: true,
      kanLoses: true,
      status: aksjonspunktStatus.OPPRETTET,
    }] as Aksjonspunkt[],
    vilkar: [],
    isAksjonspunktOpen: true,
    setFormData: () => undefined,
  }));

  type INIT_DATA = {
    simuleringResultat?: SimuleringResultat;
  }

  it('skal vise komponent og vise det som oppfylt', async () => {
    const data = [
      { key: SvpBehandlingApiKeys.AKSJONSPUNKTER.name, data: [] },
      { key: SvpBehandlingApiKeys.SIMULERING_RESULTAT.name, data: {} },
      {
        key: SvpBehandlingApiKeys.TILBAKEKREVINGVALG.name,
        data: {
          videreBehandling: {
            kode: tilbakekrevingVidereBehandling.TILBAKEKR_OPPDATER,
            kodeverk: '',
          },
        },
      },
      { key: SvpBehandlingApiKeys.PREVIEW_TILBAKEKREVING_MESSAGE.name, noRelLink: true, data: undefined },
    ];
    render(
      <RestApiMock data={data} requestApi={requestSvpApi}>
        <SimuleringProsessStegInitPanel
          valgtProsessSteg="default"
          registrerProsessPanel={() => {}}
          menyData={[{
            id: ProsessStegCode.SIMULERING,
            harApentAksjonspunkt: false,
            status: vilkarUtfallType.IKKE_VURDERT,
            harHentetInitData: true,
          }]}
          fagsak={{
            saksnummer: '123',
            fagsakYtelseType: fagsakYtelseType.SVANGERSKAPSPENGER,
          } as Fagsak}
          behandling={behandling}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Simulering')).toBeInTheDocument();
    expect(screen.getByText('Begrunn hvordan feilutbetalingen skal behandles videre')).toBeInTheDocument();
  });

  it('skal ikke vise komponent og vise det som oppfylt', () => {
    const wrapper = shallow(<SimuleringProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      menyData={[{
        id: ProsessStegCode.VEDTAK,
        harApentAksjonspunkt: true,
        status: vilkarUtfallType.IKKE_VURDERT,
        harHentetInitData: true,
      }]}
      fagsak={{} as Fagsak}
      behandling={behandling}
    />);

    const panel = wrapper.find<Required<ProsessDefaultInitPanelProps<INIT_DATA, any>> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(false);
    expect(panel.props().hentOverstyrtStatus({}, {} as StandardProsessPanelProps)).toBe(vilkarUtfallType.IKKE_VURDERT);
    expect(panel.props().renderPanel({}, {}).type).toEqual(AvregningProsessIndex);
  });

  it('skal vise forhåndsvisning av melding', async () => {
    const data = [
      {
        key: SvpBehandlingApiKeys.AKSJONSPUNKTER.name,
        data: [{
          definisjon: aksjonspunktCodes.VURDER_FEILUTBETALING,
        }] as Aksjonspunkt[],
      },
      {
        key: SvpBehandlingApiKeys.SIMULERING_RESULTAT.name,
        data: simuleringResultat,
      },
      {
        key: SvpBehandlingApiKeys.TILBAKEKREVINGVALG.name,
        data: {
          videreBehandling: tilbakekrevingVidereBehandling.TILBAKEKR_OPPDATER,
        },
      },
      { key: SvpBehandlingApiKeys.PREVIEW_TILBAKEKREVING_MESSAGE.name, noRelLink: true, data: undefined },
    ];

    let axiosMock: MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => { axiosMock = mockAdapter; };

    const utils = render(
      <RestApiMock data={data} requestApi={requestSvpApi} setApiMock={setApiMock}>
        <SimuleringProsessStegInitPanel
          valgtProsessSteg="default"
          registrerProsessPanel={() => {}}
          menyData={[{
            id: ProsessStegCode.SIMULERING,
            harApentAksjonspunkt: true,
            status: vilkarUtfallType.IKKE_VURDERT,
            harHentetInitData: true,
          }]}
          fagsak={{
            saksnummer: '123',
            fagsakYtelseType: fagsakYtelseType.SVANGERSKAPSPENGER,
          } as Fagsak}
          behandling={behandling}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Simulering')).toBeInTheDocument();

    const begrunnelseInput = utils.getByLabelText('Begrunn hvordan feilutbetalingen skal behandles videre');
    userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Opprett tilbakekreving, send varsel'));
    userEvent.click(screen.getByText('Forhåndsvis varselbrev'));

    await waitFor(() => expect(axiosMock.history.post.length).toBe(1));

    expect(axiosMock.history.post
      .find((a) => a.url === '/fptilbake/api/dokument/forhandsvis-varselbrev')?.data).toBe(JSON.stringify({
      behandlingUuid: 'test-uuid',
      fagsakYtelseType: fagsakYtelseType.SVANGERSKAPSPENGER,
      varseltekst: ' ',
    }));
  });
});
