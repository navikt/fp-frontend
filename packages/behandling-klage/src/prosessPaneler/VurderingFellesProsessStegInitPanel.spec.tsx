import React from 'react';
import { shallow } from 'enzyme';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';
import sinon from 'sinon';

import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import {
  Aksjonspunkt, AlleKodeverk, Behandling, Fagsak, KlageVurdering,
} from '@fpsak-frontend/types';
import * as Felles from '@fpsak-frontend/behandling-felles/src/utils/prosess/useStandardProsessPanelProps';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import klageVurdering from '@fpsak-frontend/kodeverk/src/klageVurdering';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';

import { KlageBehandlingApiKeys, requestKlageApi } from '../data/klageBehandlingApi';
import VurderingFellesProsessStegInitPanel from './VurderingFellesProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
}

const fagsak = {
  fagsakYtelseType: fagsakYtelseType.FORELDREPENGER,
} as Fagsak;

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
} as Behandling;

// @ts-ignore Fiks
const kodeverk = alleKodeverk as AlleKodeverk;

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.BEHANDLE_KLAGE_NFP];

describe('<VurderingFellesProsessStegInitPanel>', () => {
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
      definisjon: aksjonspunktCodes.BEHANDLE_KLAGE_NFP,
      erAktivt: true,
      kanLoses: true,
      status: aksjonspunktStatus.OPPRETTET,
    }] as Aksjonspunkt[],
    vilkar: [],
    isAksjonspunktOpen: true,
    setFormData: () => undefined,
  }));

  it('skal rendre komponent korrekt', async () => {
    const data = [
      { key: KlageBehandlingApiKeys.AKSJONSPUNKTER.name, data: [] },
      { key: KlageBehandlingApiKeys.KLAGE_VURDERING.name, data: {} },
    ];
    render(
      <RestApiMock data={data} requestApi={requestKlageApi}>
        <VurderingFellesProsessStegInitPanel
          valgtProsessSteg="default"
          registrerProsessPanel={() => {}}
          toggleOppdatereFagsakContext={() => {}}
          fagsak={fagsak}
          opneSokeside={() => {}}
          aksjonspunktKoder={AKSJONSPUNKT_KODER}
          prosessPanelKode={ProsessStegCode.AVREGNING}
          prosessPanelMenyTekst="Dette er en test"
          behandling={behandling}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandle klage')).toBeInTheDocument();
  });

  it('skal ikke oppdatere fagsak-kontekst etter lagring når en bytter til klageinstans', () => {
    const toggleSkalOppdatereFagsakContext = sinon.spy();

    const wrapper = shallow(<VurderingFellesProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={toggleSkalOppdatereFagsakContext}
      fagsak={fagsak}
      opneSokeside={() => {}}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.AVREGNING}
      prosessPanelMenyTekst="Dette er en test"
      behandling={behandling}
    />);

    const panel = wrapper.find<Required<ProsessDefaultInitPanelProps<INIT_DATA, any>> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const aksjonspunktModels = [{
      kode: aksjonspunktCodes.BEHANDLE_KLAGE_NFP,
      klageVurdering: klageVurdering.STADFESTE_YTELSESVEDTAK,
    }];

    panel.props().lagringSideEffekter(aksjonspunktModels);

    expect(toggleSkalOppdatereFagsakContext.getCalls()).toHaveLength(1);
    const { args } = toggleSkalOppdatereFagsakContext.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual(false);
  });

  it('skal vise forhåndsvisning av melding', async () => {
    const data = [
      { key: KlageBehandlingApiKeys.AKSJONSPUNKTER.name, data: [] },
      { key: KlageBehandlingApiKeys.KLAGE_VURDERING.name, data: {} },
      { key: KlageBehandlingApiKeys.PREVIEW_MESSAGE.name, data: undefined },
    ];

    let axiosMock: MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => { axiosMock = mockAdapter; };

    const utils = render(
      <RestApiMock data={data} requestApi={requestKlageApi} setApiMock={setApiMock}>
        <VurderingFellesProsessStegInitPanel
          valgtProsessSteg="default"
          registrerProsessPanel={() => {}}
          toggleOppdatereFagsakContext={() => {}}
          fagsak={fagsak}
          opneSokeside={() => {}}
          aksjonspunktKoder={AKSJONSPUNKT_KODER}
          prosessPanelKode={ProsessStegCode.KLAGE_RESULTAT}
          prosessPanelMenyTekst="Dette er en test"
          behandling={behandling}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandle klage')).toBeInTheDocument();

    userEvent.click(screen.getByText('Oppretthold vedtaket'));

    const begrunnelseInput = utils.getByLabelText('Begrunnelse');
    userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    const fritekstInput = utils.getByLabelText('Fritekst til brev');
    userEvent.type(fritekstInput, 'Dette er en fritekst');

    userEvent.click(screen.getByText('Forhåndsvis brev'));

    await waitFor(() => expect(axiosMock.history.post.length).toBe(1));

    expect(axiosMock.history.post
      .find((a) => a.url === '/fpformidling/api/brev/forhaandsvis')?.data).toBe(JSON.stringify({
      fritekst: 'Dette er en fritekst',
      dokumentMal: dokumentMalType.KLAGE_OVERSENDT_KLAGEINSTANS,
      erOpphevetKlage: false,
      behandlingUuid: 'test-uuid',
      ytelseType: {
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: 'FAGSAK_YTELSE',
      },
      fagsakYtelseType: fagsakYtelseType.FORELDREPENGER,
    }));
  });

  it('skal lagre klage', async () => {
    const kv = {
      aktuelleHjemler: ['14-17'],
    } as KlageVurdering;
    const data = [
      { key: KlageBehandlingApiKeys.AKSJONSPUNKTER.name, data: [] },
      { key: KlageBehandlingApiKeys.KLAGE_VURDERING.name, data: kv },
      { key: KlageBehandlingApiKeys.SAVE_KLAGE_VURDERING.name, data: undefined },
    ];

    const utils = render(
      <RestApiMock data={data} requestApi={requestKlageApi}>
        <VurderingFellesProsessStegInitPanel
          valgtProsessSteg="default"
          registrerProsessPanel={() => {}}
          toggleOppdatereFagsakContext={() => {}}
          fagsak={fagsak}
          opneSokeside={() => {}}
          aksjonspunktKoder={AKSJONSPUNKT_KODER}
          prosessPanelKode={ProsessStegCode.KLAGE_RESULTAT}
          prosessPanelMenyTekst="Dette er en test"
          behandling={behandling}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Behandle klage')).toBeInTheDocument();

    userEvent.click(screen.getByText('Oppretthold vedtaket'));

    userEvent.selectOptions(utils.getByLabelText('Hjemmel'), '14-17');

    const begrunnelseInput = utils.getByLabelText('Begrunnelse');
    userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    const fritekstInput = utils.getByLabelText('Fritekst til brev');
    userEvent.type(fritekstInput, 'Dette er en fritekst');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(submitCallback).toHaveBeenCalledTimes(1));
    expect(submitCallback).toHaveBeenNthCalledWith(1, {
      kode: aksjonspunktCodes.BEHANDLE_KLAGE_NFP,
      begrunnelse: 'Dette er en begrunnelse',
      klageVurderingOmgjoer: null,
      fritekstTilBrev: 'Dette er en fritekst',
      klageHjemmel: '14-17',
      klageMedholdArsak: null,
      klageVurdering: klageVurdering.STADFESTE_YTELSESVEDTAK,
    });
  });
});
