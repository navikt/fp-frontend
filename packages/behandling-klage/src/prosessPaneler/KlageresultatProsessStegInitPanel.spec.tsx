import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';

import klageVurderingCodes from '@fpsak-frontend/kodeverk/src/klageVurdering';
import * as Felles from '@fpsak-frontend/behandling-felles/src/utils/prosess/useStandardProsessPanelProps';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import {
  Aksjonspunkt, Behandling, Fagsak, StandardProsessPanelProps,
} from '@fpsak-frontend/types';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import { KlageBehandlingApiKeys, requestKlageApi } from '../data/klageBehandlingApi';
import KlageresultatProsessStegInitPanel from './KlageresultatProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
}

const fagsak = {
  fagsakYtelseType: fagsakYtelseType.FORELDREPENGER,
} as Fagsak;

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
  behandlingsresultat: {
    type: behandlingResultatType.KLAGE_AVVIST,
  },
} as Behandling;

const klageVurdering = {
  klageVurderingResultatNK: {
    fritekstTilBrev: '',
    klageMedholdArsak: '',
    klageVurdering: klageVurderingCodes.AVVIS_KLAGE,
    avvistArsaker: [],
    klageVurdertAv: 'NK',
  },
};

// @ts-ignore Fiks
const kodeverk = alleKodeverk as AlleKodeverk;

const defaultProps = {
  behandling,
  alleMerknaderFraBeslutter: {},
  submitCallback: jest.fn(),
  status: vilkarUtfallType.IKKE_VURDERT,
  alleKodeverk: kodeverk,
  isReadOnly: false,
  readOnlySubmitButton: false,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.FORESLA_VEDTAK,
    erAktivt: true,
    kanLoses: true,
    status: aksjonspunktStatus.OPPRETTET,
  }] as Aksjonspunkt[],
  vilkar: [],
  isAksjonspunktOpen: true,
  setFormData: () => undefined,
};

describe('<KlageresultatProsessStegInitPanel>', () => {
  jest.spyOn(Felles, 'default').mockImplementation(() => defaultProps);

  it('skal rendre komponent korrekt', async () => {
    const data = [
      { key: KlageBehandlingApiKeys.AKSJONSPUNKTER.name, data: [] },
      { key: KlageBehandlingApiKeys.KLAGE_VURDERING.name, data: klageVurdering },
    ];
    render(
      <RestApiMock data={data} requestApi={requestKlageApi}>
        <KlageresultatProsessStegInitPanel
          valgtProsessSteg="default"
          registrerProsessPanel={() => {}}
          toggleOppdatereFagsakContext={() => {}}
          fagsak={fagsak}
          opneSokeside={() => {}}
          behandling={behandling}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Resultat')).toBeInTheDocument();
    expect(screen.getByText('Resultat av klage')).toBeInTheDocument();
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

    const panel = wrapper.find<Required<ProsessDefaultInitPanelProps<INIT_DATA, any>> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const aksjonspunkter = [] as Aksjonspunkt[];

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

    const panel = wrapper.find<Required<ProsessDefaultInitPanelProps<INIT_DATA, any>> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const aksjonspunkter = [{
      status: aksjonspunktStatus.UTFORT,
    }] as Aksjonspunkt[];

    const behandlingMedBeregningsresultat = {
      ...behandling,
      behandlingsresultat: {
        type: behandlingResultatType.INNVILGET,
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

    const panel = wrapper.find<Required<ProsessDefaultInitPanelProps<INIT_DATA, any>> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const aksjonspunkter = [{
      status: aksjonspunktStatus.UTFORT,
    }] as Aksjonspunkt[];

    const behandlingMedBeregningsresultat = {
      ...behandling,
      behandlingsresultat: {
        type: behandlingResultatType.KLAGE_AVVIST,
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

    const panel = wrapper.find<Required<ProsessDefaultInitPanelProps<INIT_DATA, any>> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const aksjonspunktModels = [{
      kode: aksjonspunktCodes.FORESLA_VEDTAK,
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
      { key: KlageBehandlingApiKeys.PREVIEW_MESSAGE.name, data: [] },
      { key: KlageBehandlingApiKeys.KLAGE_VURDERING.name, data: klageVurdering },
    ];

    let axiosMock: MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => { axiosMock = mockAdapter; };

    render(
      <RestApiMock data={data} requestApi={requestKlageApi} setApiMock={setApiMock}>
        <KlageresultatProsessStegInitPanel
          valgtProsessSteg="default"
          registrerProsessPanel={() => {}}
          toggleOppdatereFagsakContext={() => {}}
          fagsak={fagsak}
          opneSokeside={() => {}}
          behandling={behandling}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Resultat')).toBeInTheDocument();

    userEvent.click(screen.getByText('Forhåndsvis vedtaksbrev'));

    await waitFor(() => expect(axiosMock.history.post.length).toBe(1));

    expect(axiosMock.history.post
      .find((a) => a.url === '/fpformidling/api/brev/forhaandsvis')?.data).toBe(JSON.stringify({
      gjelderVedtak: true,
      behandlingUuid: 'test-uuid',
      ytelseType: {
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: '',
      },
    }));
  });
});
