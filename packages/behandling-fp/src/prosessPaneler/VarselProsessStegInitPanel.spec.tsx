import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { render, screen, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import userEvent from '@testing-library/user-event';

import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { Aksjonspunkt, Behandling, Fagsak } from '@fpsak-frontend/types';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import * as Felles from '@fpsak-frontend/behandling-felles/src/utils/prosess/useStandardProsessPanelProps';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';

import { requestFpApi, FpBehandlingApiKeys } from '../data/fpBehandlingApi';
import VarselProsessStegInitPanel from './VarselProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
}

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
  behandlingÅrsaker: [],
  type: {
    kode: behandlingType.FORSTEGANGSSOKNAD,
    kodeverk: '',
  },
} as Behandling;

// @ts-ignore Fiks
const kodeverk = alleKodeverk as AlleKodeverk;

describe('<VarselProsessStegInitPanel>', () => {
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
      definisjon: {
        kode: aksjonspunktCodes.VARSEL_REVURDERING_MANUELL,
        kodeverk: '',
      },
      erAktivt: true,
      kanLoses: true,
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
    }] as Aksjonspunkt[],
    vilkar: [],
    isAksjonspunktOpen: true,
    setFormData: () => undefined,
  }));

  it('skal rendre komponent', async () => {
    const data = [
      { key: FpBehandlingApiKeys.AKSJONSPUNKTER.name, data: [] },
      { key: FpBehandlingApiKeys.VILKAR.name, data: {} },
      { key: FpBehandlingApiKeys.FAMILIEHENDELSE.name, data: {} },
      { key: FpBehandlingApiKeys.SOKNAD.name, data: {} },
      { key: FpBehandlingApiKeys.PREVIEW_MESSAGE.name, noRelLink: true, data: undefined },
    ];
    render(
      <RestApiMock data={data} requestApi={requestFpApi}>
        <VarselProsessStegInitPanel
          valgtProsessSteg="default"
          registrerProsessPanel={() => {}}
          toggleSkalOppdatereFagsakContext={() => {}}
          fagsak={{} as Fagsak}
          opneSokeside={() => {}}
          behandling={behandling}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Varsel om revurdering')).toBeInTheDocument();
    expect(screen.getByText('Vurder om varsel om revurdering skal sendes til søker')).toBeInTheDocument();
  });

  it('skal åpne søkeside og ikke oppdatere fagsak-kontekst etter lagring', () => {
    const toggleSkalOppdatereFagsakContext = sinon.spy();
    const opneSokeside = sinon.spy();

    const wrapper = shallow(<VarselProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleSkalOppdatereFagsakContext={toggleSkalOppdatereFagsakContext}
      fagsak={{} as Fagsak}
      opneSokeside={opneSokeside}
      behandling={behandling}
    />);

    const panel = wrapper.find<Required<ProsessDefaultInitPanelProps<INIT_DATA, any>> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const aksjonspunktModels = [{
      kode: aksjonspunktCodes.VARSEL_REVURDERING_ETTERKONTROLL,
      sendVarsel: true,
    }];

    const callback = panel.props().lagringSideEffekter(aksjonspunktModels);

    expect(toggleSkalOppdatereFagsakContext.getCalls()).toHaveLength(1);
    const { args } = toggleSkalOppdatereFagsakContext.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual(false);

    callback();

    expect(opneSokeside.getCalls()).toHaveLength(1);
    const args1 = opneSokeside.getCalls()[0].args;
    expect(args1).toHaveLength(0);
  });

  it('skal vise forhåndsvisning av melding', async () => {
    const data = [
      { key: FpBehandlingApiKeys.AKSJONSPUNKTER.name, data: [] },
      { key: FpBehandlingApiKeys.VILKAR.name, data: {} },
      { key: FpBehandlingApiKeys.FAMILIEHENDELSE.name, data: {} },
      { key: FpBehandlingApiKeys.SOKNAD.name, data: {} },
      { key: FpBehandlingApiKeys.PREVIEW_MESSAGE.name, noRelLink: true, data: undefined },
    ];

    let axiosMock: MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => { axiosMock = mockAdapter; };

    const utils = render(
      <RestApiMock data={data} requestApi={requestFpApi} setApiMock={setApiMock}>
        <VarselProsessStegInitPanel
          valgtProsessSteg="default"
          registrerProsessPanel={() => {}}
          toggleSkalOppdatereFagsakContext={() => {}}
          fagsak={{
            fagsakYtelseType: {
              kode: fagsakYtelseType.FORELDREPENGER,
              kodeverk: '',
            },
          } as Fagsak}
          opneSokeside={() => {}}
          behandling={behandling}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Varsel om revurdering')).toBeInTheDocument();

    userEvent.click(screen.getByText('Send varsel til søker'));

    const begrunnelseInput = utils.getByLabelText('Begrunnelse');
    userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    const fritekstInput = utils.getByLabelText('Fritekst i brev');
    userEvent.type(fritekstInput, 'Dette er en fritekst');

    userEvent.click(screen.getByText('Forhåndsvis'));

    await waitFor(() => expect(axiosMock.history.post.length).toBe(1));

    expect(axiosMock.history.post
      .find((a) => a.url === '/fpformidling/api/brev/forhaandsvis')?.data).toBe(JSON.stringify({
      mottaker: '',
      dokumentMal: dokumentMalType.REVURDERING_DOK,
      fritekst: 'Dette er en fritekst',
      behandlingUuid: 'test-uuid',
      ytelseType: {
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: '',
      },
    }));
  });
});
