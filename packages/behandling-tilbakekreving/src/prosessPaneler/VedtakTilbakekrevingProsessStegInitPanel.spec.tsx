import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import VedtakResultatType from '@fpsak-frontend/kodeverk/src/vedtakResultatType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import VedtakTilbakekrevingProsessIndex from '@fpsak-frontend/prosess-vedtak-tilbakekreving';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import {
  Aksjonspunkt, AlleKodeverkTilbakekreving, Behandling, BeregningsresultatTilbakekreving, StandardProsessPanelProps,
} from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import { AdvarselModal } from '@fpsak-frontend/shared-components';

import { requestTilbakekrevingApi, TilbakekrevingBehandlingApiKeys } from '../data/tilbakekrevingBehandlingApi';
import VedtakTilbakekrevingProsessStegInitPanel from './VedtakTilbakekrevingProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
  beregningsresultat: BeregningsresultatTilbakekreving;
}

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
} as Behandling;

jest.mock('@fpsak-frontend/behandling-felles', () => {
  const felles = jest.requireActual('@fpsak-frontend/behandling-felles');
  return {
    ...felles,
    useStandardProsessPanelProps: () => ({
      behandling,
    }),
  };
});

describe('<VedtakTilbakekrevingProsessStegInitPanel>', () => {
  it('skal rendre komponent korrekt', () => {
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

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);

    const innerElement = panel.renderProp('renderPanel')({ behandling }, { aksjonspunkter: [], beregningsresultat: {} as BeregningsresultatTilbakekreving });

    expect(innerElement.find(VedtakTilbakekrevingProsessIndex)).toHaveLength(1);
    expect(innerElement.find(AdvarselModal)).toHaveLength(0);
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

  it('skal vise forhåndsvisning av melding', () => {
    requestTilbakekrevingApi.mock(TilbakekrevingBehandlingApiKeys.PREVIEW_VEDTAKSBREV.name, {});

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

    const innerElement = panel.renderProp('renderPanel')({ behandling }, { aksjonspunkter: [], beregningsresultat: {} as BeregningsresultatTilbakekreving });

    const tilbakeProsessPanel = innerElement.find(VedtakTilbakekrevingProsessIndex);
    expect(tilbakeProsessPanel).toHaveLength(1);

    tilbakeProsessPanel.props().fetchPreviewVedtaksbrev({
      uuid: 'test',
      oppsummeringstekst: 'Dette er en tekst',
      perioderMedTekst: [],
    });

    const response = requestTilbakekrevingApi.getRequestMockData(TilbakekrevingBehandlingApiKeys.PREVIEW_VEDTAKSBREV.name);
    expect(response).toHaveLength(1);
    expect(response[0].params).toEqual({
      uuid: 'test',
      oppsummeringstekst: 'Dette er en tekst',
      perioderMedTekst: [],
    });
  });
});
