import React from 'react';
import { shallow } from 'enzyme';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import sinon from 'sinon';
import MockAdapter from 'axios-mock-adapter';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import VedtakResultatType from '@fpsak-frontend/kodeverk/src/vedtakResultatType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import {
  Aksjonspunkt, AlleKodeverkTilbakekreving, Behandling, BeregningsresultatTilbakekreving, StandardProsessPanelProps,
} from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import * as Felles from '@fpsak-frontend/behandling-felles/src/utils/prosess/useStandardProsessPanelProps';
import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import { AdvarselModal } from '@fpsak-frontend/shared-components';

import { requestTilbakekrevingApi, TilbakekrevingBehandlingApiKeys } from '../data/tilbakekrevingBehandlingApi';
import VedtakTilbakekrevingProsessStegInitPanel from './VedtakTilbakekrevingProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
  beregningsresultat: BeregningsresultatTilbakekreving;
}

// @ts-ignore Fiks
const kodeverk = alleKodeverk as AlleKodeverk;

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
  behandlingÅrsaker: [],
  type: {
    kode: behandlingType.FORSTEGANGSSOKNAD,
    kodeverk: '',
  },
} as Behandling;

describe('<VedtakTilbakekrevingProsessStegInitPanel>', () => {
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
        kode: aksjonspunktCodesTilbakekreving.VURDER_FORELDELSE,
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

  it('skal rendre komponent korrekt', async () => {
    const data = [
      { key: TilbakekrevingBehandlingApiKeys.AKSJONSPUNKTER.name, data: [] },
      {
        key: TilbakekrevingBehandlingApiKeys.BEREGNINGSRESULTAT.name,
        data: { beregningResultatPerioder: [], vedtakResultatType: { kode: VedtakResultatType.INGEN_TILBAKEBETALING } },
      },
      { key: TilbakekrevingBehandlingApiKeys.VEDTAKSBREV.name, data: { avsnittsliste: [] } },
    ];
    render(
      <RestApiMock data={data} requestApi={requestTilbakekrevingApi}>
        <VedtakTilbakekrevingProsessStegInitPanel
          valgtProsessSteg="default"
          registrerProsessPanel={() => {}}
          toggleOppdatereFagsakContext={() => {}}
          opneSokeside={() => {}}
          harApenRevurdering={false}
          fptilbakeKodeverk={{} as AlleKodeverkTilbakekreving}
          behandling={behandling}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();
    expect(screen.getByText('Resultat')).toBeInTheDocument();
  });

  it('skal vise advarsel-modal når en har en åpen revurdering', () => {
    const wrapper = shallow(<VedtakTilbakekrevingProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={() => {}}
      opneSokeside={() => {}}
      harApenRevurdering
      fptilbakeKodeverk={{} as AlleKodeverkTilbakekreving}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);

    const innerElement = panel.renderProp('renderPanel')({ behandling }, { aksjonspunkter: [], beregningsresultat: {} as BeregningsresultatTilbakekreving });

    expect(innerElement.find(AdvarselModal)).toHaveLength(1);
  });

  it('skal vise status IKKE_VURDERT når en ikke har beregningsresultat', () => {
    const wrapper = shallow(<VedtakTilbakekrevingProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={() => {}}
      opneSokeside={() => {}}
      harApenRevurdering={false}
      fptilbakeKodeverk={{} as AlleKodeverkTilbakekreving}
      behandling={behandling}
    />);

    const panel = wrapper.find<Required<ProsessDefaultInitPanelProps<INIT_DATA, any>> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    expect(panel.props().hentOverstyrtStatus({}, {} as StandardProsessPanelProps)).toEqual(vilkarUtfallType.IKKE_VURDERT);
  });

  it('skal vise status IKKE_OPPFYLT når en har beregningsresultat men det er ingen tilbakebetaling', () => {
    const wrapper = shallow(<VedtakTilbakekrevingProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={() => {}}
      opneSokeside={() => {}}
      harApenRevurdering={false}
      fptilbakeKodeverk={{} as AlleKodeverkTilbakekreving}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const beregningsresultat = {
      vedtakResultatType: {
        kode: VedtakResultatType.INGEN_TILBAKEBETALING,
        kodeverk: '',
      },
    } as BeregningsresultatTilbakekreving;

    // @ts-ignore Fiks
    expect(panel.props().hentOverstyrtStatus({ beregningsresultat })).toEqual(vilkarUtfallType.IKKE_OPPFYLT);
  });

  it('skal vise status OPPFYLT når en har beregningsresultat og det er delvis tilbakebetaling', () => {
    const wrapper = shallow(<VedtakTilbakekrevingProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={() => {}}
      opneSokeside={() => {}}
      harApenRevurdering={false}
      fptilbakeKodeverk={{} as AlleKodeverkTilbakekreving}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const beregningsresultat = {
      vedtakResultatType: {
        kode: VedtakResultatType.DELVIS_TILBAKEBETALING,
        kodeverk: '',
      },
    } as BeregningsresultatTilbakekreving;

    // @ts-ignore Fiks
    expect(panel.props().hentOverstyrtStatus({ beregningsresultat })).toEqual(vilkarUtfallType.OPPFYLT);
  });

  it('skal ikke oppdatere fagsak-kontekst etter lagring', () => {
    const toggleSkalOppdatereFagsakContext = sinon.spy();

    const wrapper = shallow(<VedtakTilbakekrevingProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={toggleSkalOppdatereFagsakContext}
      opneSokeside={() => {}}
      harApenRevurdering={false}
      fptilbakeKodeverk={{} as AlleKodeverkTilbakekreving}
      behandling={behandling}
    />);

    const panel = wrapper.find<Required<ProsessDefaultInitPanelProps<INIT_DATA, any>> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const aksjonspunktModels = [{
      kode: aksjonspunktCodesTilbakekreving.FORESLA_VEDTAK,
    }];

    panel.props().lagringSideEffekter(aksjonspunktModels);

    expect(toggleSkalOppdatereFagsakContext.getCalls()).toHaveLength(1);
    const { args } = toggleSkalOppdatereFagsakContext.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual(false);
  });

  it('skal vise forhåndsvisning av melding', async () => {
    const data = [
      { key: TilbakekrevingBehandlingApiKeys.AKSJONSPUNKTER.name, data: [] },
      {
        key: TilbakekrevingBehandlingApiKeys.BEREGNINGSRESULTAT.name,
        data: { beregningResultatPerioder: [], vedtakResultatType: { kode: VedtakResultatType.INGEN_TILBAKEBETALING } },
      },
      { key: TilbakekrevingBehandlingApiKeys.VEDTAKSBREV.name, data: { avsnittsliste: [] } },
      { key: TilbakekrevingBehandlingApiKeys.PREVIEW_VEDTAKSBREV.name, data: {} },
    ];

    let axiosMock: MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => { axiosMock = mockAdapter; };

    render(
      <RestApiMock data={data} requestApi={requestTilbakekrevingApi} setApiMock={setApiMock}>
        <VedtakTilbakekrevingProsessStegInitPanel
          valgtProsessSteg="default"
          registrerProsessPanel={() => {}}
          toggleOppdatereFagsakContext={() => {}}
          opneSokeside={() => {}}
          harApenRevurdering={false}
          fptilbakeKodeverk={{} as AlleKodeverkTilbakekreving}
          behandling={behandling}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Vedtak')).toBeInTheDocument();

    userEvent.click(screen.getByText('Forhåndsvis brev'));

    await waitFor(() => expect(axiosMock.history.post.length).toBe(1));

    expect(axiosMock.history.post
      .find((a) => a.url === '/fptilbake/api/dokument/forhandsvis-vedtaksbrev')?.data).toBe(JSON.stringify({
      uuid: 'test-uuid',
      perioderMedTekst: [],
    }));
  });
});
