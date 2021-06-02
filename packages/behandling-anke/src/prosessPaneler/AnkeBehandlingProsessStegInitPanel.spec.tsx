import React from 'react';
import { shallow } from 'enzyme';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AnkeProsessIndex from '@fpsak-frontend/prosess-anke';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import {
  Aksjonspunkt, Behandling, Fagsak, StandardProsessPanelProps,
} from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import { AnkeBehandlingApiKeys, requestAnkeApi } from '../data/ankeBehandlingApi';
import AnkeBehandlingProsessStegInitPanel from './AnkeBehandlingProsessStegInitPanel';

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
  id: 1,
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

const alleBehandlinger = [] as Behandling[];

describe('<AnkeBehandlingProsessStegInitPanel>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<AnkeBehandlingProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      fagsak={fagsak}
      alleBehandlinger={alleBehandlinger}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);

    const innerElement = panel.renderProp('renderPanel')({ behandling }, { aksjonspunkter: [] });

    expect(innerElement.find(AnkeProsessIndex)).toHaveLength(1);
  });

  it('skal vise forhåndsvisning av melding', () => {
    requestAnkeApi.mock(AnkeBehandlingApiKeys.PREVIEW_MESSAGE.name, {});

    const wrapper = shallow(<AnkeBehandlingProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      fagsak={fagsak}
      alleBehandlinger={alleBehandlinger}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const innerElement = panel.renderProp('renderPanel')({ behandling }, { aksjonspunkter: [] });

    const klageProsessPanel = innerElement.find(AnkeProsessIndex);
    expect(klageProsessPanel).toHaveLength(1);

    klageProsessPanel.props().previewCallback({
      fritekst: 'Dette er en fritekst',
      dokumentMal: 'mal',
      mottaker: 'Mottaker',
    });

    const response = requestAnkeApi.getRequestMockData(AnkeBehandlingApiKeys.PREVIEW_MESSAGE.name);
    expect(response).toHaveLength(1);
    expect(response[0].params).toEqual({
      behandlingUuid: 'test-uuid',
      ytelseType: {
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: '',
      },
      fritekst: 'Dette er en fritekst',
      dokumentMal: 'mal',
      mottaker: 'Mottaker',
    });
  });

  it('skal lagre anke-vurdering', () => {
    requestAnkeApi.mock(AnkeBehandlingApiKeys.SAVE_ANKE_VURDERING.name, {});

    const wrapper = shallow(<AnkeBehandlingProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      fagsak={fagsak}
      alleBehandlinger={alleBehandlinger}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const innerElement = panel.renderProp('renderPanel')({ behandling }, { aksjonspunkter: [] });

    const klageProsessPanel = innerElement.find(AnkeProsessIndex);
    expect(klageProsessPanel).toHaveLength(1);

    klageProsessPanel.props().saveAnke({
      kode: aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE,
      fritekstTilBrev: 'Dette er en fritekst',
      begrunnelse: 'Dette er en begrunnelse',
    });

    const response = requestAnkeApi.getRequestMockData(AnkeBehandlingApiKeys.SAVE_ANKE_VURDERING.name);
    expect(response).toHaveLength(1);
    expect(response[0].params).toEqual({
      behandlingId: 1,
      kode: aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE,
      fritekstTilBrev: 'Dette er en fritekst',
      begrunnelse: 'Dette er en begrunnelse',
    });
  });
});
