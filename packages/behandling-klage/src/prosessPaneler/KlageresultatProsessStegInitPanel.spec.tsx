import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import VedtakKlageProsessIndex from '@fpsak-frontend/prosess-vedtak-klage';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps } from '@fpsak-frontend/behandling-felles';
import {
  Aksjonspunkt, Behandling, Fagsak, StandardProsessPanelProps,
} from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';

import { KlageBehandlingApiKeys, requestKlageApi } from '../data/klageBehandlingApi';
import KlageresultatProsessStegInitPanel from './KlageresultatProsessStegInitPanel';

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

describe('<KlageresultatProsessStegInitPanel>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<KlageresultatProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={() => {}}
      fagsak={fagsak}
      opneSokeside={() => {}}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);

    const innerElement = panel.renderProp('renderPanel')({ behandling }, { aksjonspunkter: [] });

    expect(innerElement.find(VedtakKlageProsessIndex)).toHaveLength(1);
  });

  it('skal vise at steg ikke er vurdert når en ikke har aksjonspunkter', () => {
    const wrapper = shallow(<KlageresultatProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={() => {}}
      fagsak={fagsak}
      opneSokeside={() => {}}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    const aksjonspunkter = [];

    expect(panel.props().hentOverstyrtStatus({ aksjonspunkter }, {
      behandling,
    } as StandardProsessPanelProps)).toBe(vilkarUtfallType.IKKE_VURDERT);
  });

  it('skal vise at steg er oppfylt når en har behandlingsresultat Innvilget', () => {
    const wrapper = shallow(<KlageresultatProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={() => {}}
      fagsak={fagsak}
      opneSokeside={() => {}}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    const aksjonspunkter = [{
      status: {
        kode: aksjonspunktStatus.UTFORT,
        kodeverk: '',
      },
    }] as Aksjonspunkt[];

    const behandlingMedBeregningsresultat = {
      ...behandling,
      behandlingsresultat: {
        type: {
          kode: behandlingResultatType.INNVILGET,
          kodeverk: '',
        },
      },
    };

    expect(panel.props().hentOverstyrtStatus({ aksjonspunkter }, {
      behandling: behandlingMedBeregningsresultat,
    } as StandardProsessPanelProps)).toBe(vilkarUtfallType.OPPFYLT);
  });

  it('skal vise at steg er ikke oppfylt når en har behandlingsresultat Klage avvist', () => {
    const wrapper = shallow(<KlageresultatProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={() => {}}
      fagsak={fagsak}
      opneSokeside={() => {}}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    const aksjonspunkter = [{
      status: {
        kode: aksjonspunktStatus.UTFORT,
        kodeverk: '',
      },
    }] as Aksjonspunkt[];

    const behandlingMedBeregningsresultat = {
      ...behandling,
      behandlingsresultat: {
        type: {
          kode: behandlingResultatType.KLAGE_AVVIST,
          kodeverk: '',
        },
      },
    };

    expect(panel.props().hentOverstyrtStatus({ aksjonspunkter }, {
      behandling: behandlingMedBeregningsresultat,
    } as StandardProsessPanelProps)).toBe(vilkarUtfallType.IKKE_OPPFYLT);
  });

  it('skal ikke oppdatere fagsak-kontekst etter lagring', () => {
    const toggleSkalOppdatereFagsakContext = sinon.spy();

    const wrapper = shallow(<KlageresultatProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={toggleSkalOppdatereFagsakContext}
      fagsak={fagsak}
      opneSokeside={() => {}}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    const aksjonspunktModels = [{
      kode: aksjonspunktCodes.FORESLA_VEDTAK,
    }];

    panel.props().lagringSideEffekter(aksjonspunktModels);

    expect(toggleSkalOppdatereFagsakContext.getCalls()).toHaveLength(1);
    const { args } = toggleSkalOppdatereFagsakContext.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual(false);
  });

  it('skal vise forhåndsvisning av melding', () => {
    requestKlageApi.mock(KlageBehandlingApiKeys.PREVIEW_MESSAGE.name, {});

    const wrapper = shallow(<KlageresultatProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleOppdatereFagsakContext={() => {}}
      fagsak={fagsak}
      opneSokeside={() => {}}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any>>(ProsessDefaultInitPanel);

    const innerElement = panel.renderProp('renderPanel')({ behandling }, { aksjonspunkter: [] });

    const klageProsessPanel = innerElement.find(VedtakKlageProsessIndex);
    expect(klageProsessPanel).toHaveLength(1);

    klageProsessPanel.props().previewVedtakCallback({ gjelderVedtak: true });

    const response = requestKlageApi.getRequestMockData(KlageBehandlingApiKeys.PREVIEW_MESSAGE.name);
    expect(response).toHaveLength(1);
    expect(response[0].params).toEqual({
      behandlingUuid: 'test-uuid',
      ytelseType: {
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: '',
      },
      gjelderVedtak: true,
    });
  });
});
