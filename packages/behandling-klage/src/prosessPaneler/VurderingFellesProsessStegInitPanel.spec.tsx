import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import KlagevurderingProsessIndex from '@fpsak-frontend/prosess-klagevurdering';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import {
  Aksjonspunkt, Behandling, Fagsak, StandardProsessPanelProps,
} from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import klageVurdering from '@fpsak-frontend/kodeverk/src/klageVurdering';

import { KlageBehandlingApiKeys, requestKlageApi } from '../data/klageBehandlingApi';
import VurderingFellesProsessStegInitPanel from './VurderingFellesProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
}

const fagsak = {
  fagsakYtelseType: {
    kode: fagsakYtelseType.FORELDREPENGER,
    kodeverk: '',
  },
} as Fagsak;

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

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.BEHANDLE_KLAGE_NFP];

describe('<VurderingFellesProsessStegInitPanel>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<VurderingFellesProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={() => {}}
      fagsak={fagsak}
      opneSokeside={() => {}}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.AVREGNING}
      prosessPanelMenyTekst="Dette er en test"
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);

    const innerElement = panel.renderProp('renderPanel')({ behandling }, { aksjonspunkter: [] });

    expect(innerElement.find(KlagevurderingProsessIndex)).toHaveLength(1);
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
      klageVurdering: {
        kode: klageVurdering.STADFESTE_YTELSESVEDTAK,
        kodeverk: '',
      },
    }];

    panel.props().lagringSideEffekter(aksjonspunktModels);

    expect(toggleSkalOppdatereFagsakContext.getCalls()).toHaveLength(1);
    const { args } = toggleSkalOppdatereFagsakContext.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual(false);
  });

  it('skal vise forhåndsvisning av melding', () => {
    requestKlageApi.mock(KlageBehandlingApiKeys.PREVIEW_MESSAGE.name, {});

    const wrapper = shallow(<VurderingFellesProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={() => {}}
      fagsak={fagsak}
      opneSokeside={() => {}}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.AVREGNING}
      prosessPanelMenyTekst="Dette er en test"
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const innerElement = panel.renderProp('renderPanel')({ behandling }, { aksjonspunkter: [] });

    const klageProsessPanel = innerElement.find(KlagevurderingProsessIndex);
    expect(klageProsessPanel).toHaveLength(1);

    klageProsessPanel.props().previewCallback({
      fritekst: 'Dette er en fritekst',
      dokumentMal: 'mal',
      erOpphevetKlage: false,
    });

    const response = requestKlageApi.getRequestMockData(KlageBehandlingApiKeys.PREVIEW_MESSAGE.name);
    expect(response).toHaveLength(1);
    expect(response[0].params).toEqual({
      behandlingUuid: 'test-uuid',
      ytelseType: {
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: '',
      },
      fritekst: 'Dette er en fritekst',
      dokumentMal: 'mal',
      erOpphevetKlage: false,
    });
  });

  it('skal lagre klage', () => {
    requestKlageApi.mock(KlageBehandlingApiKeys.SAVE_KLAGE_VURDERING.name, {});

    const wrapper = shallow(<VurderingFellesProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={() => {}}
      fagsak={fagsak}
      opneSokeside={() => {}}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.AVREGNING}
      prosessPanelMenyTekst="Dette er en test"
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const innerElement = panel.renderProp('renderPanel')({ behandling }, { aksjonspunkter: [] });

    const klageProsessPanel = innerElement.find(KlagevurderingProsessIndex);
    expect(klageProsessPanel).toHaveLength(1);

    klageProsessPanel.props().saveKlage({
      kode: aksjonspunktCodes.BEHANDLE_KLAGE_NFP,
      fritekstTilBrev: 'Fritekst',
      begrunnelse: 'Dette er en begrunnelse',
      klageVurdering: {
        kode: klageVurdering.MEDHOLD_I_KLAGE,
        kodeverk: '',
      },
    });

    const response = requestKlageApi.getRequestMockData(KlageBehandlingApiKeys.SAVE_KLAGE_VURDERING.name);
    expect(response).toHaveLength(1);
    expect(response[0].params).toEqual({
      kode: aksjonspunktCodes.BEHANDLE_KLAGE_NFP,
      fritekstTilBrev: 'Fritekst',
      begrunnelse: 'Dette er en begrunnelse',
      klageVurdering: {
        kode: klageVurdering.MEDHOLD_I_KLAGE,
        kodeverk: '',
      },
    });
  });
});
