import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';
import { AksjonspunktStatus, VilkarUtfallType, FagsakYtelseType } from '@navikt/ft-kodeverk';
import { Aksjonspunkt, Behandling, Fagsak } from '@navikt/ft-types';

import { AnkeVurdering } from '@fpsak-frontend/types';
import ankeVurdering from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import * as Felles from '@fpsak-frontend/behandling-felles/src/utils/prosess/useStandardProsessPanelProps';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';

import { AnkeBehandlingApiKeys, requestAnkeApi } from '../data/ankeBehandlingApi';
import AnkeResultatProsessStegInitPanel from './AnkeResultatProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
}

const fagsak = {
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
} as Fagsak;

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
} as Behandling;

// @ts-ignore Fiks
const kodeverk = alleKodeverk as AlleKodeverk;

describe('<AnkeResultatProsessStegInitPanel>', () => {
  const submitCallback = jest.fn();
  jest.spyOn(Felles, 'default').mockImplementation(() => ({
    behandling,
    alleMerknaderFraBeslutter: {},
    submitCallback,
    status: VilkarUtfallType.IKKE_VURDERT,
    alleKodeverk: kodeverk,
    isReadOnly: false,
    readOnlySubmitButton: false,
    aksjonspunkter: [{
      definisjon: aksjonspunktCodes.FORESLA_VEDTAK,
      erAktivt: true,
      kanLoses: true,
      status: AksjonspunktStatus.OPPRETTET,
    }] as Aksjonspunkt[],
    vilkar: [],
    isAksjonspunktOpen: true,
    setFormData: () => undefined,
  }));

  it('skal rendre komponent korrekt', async () => {
    const data = [
      { key: AnkeBehandlingApiKeys.AKSJONSPUNKTER.name, data: [] },
      { key: AnkeBehandlingApiKeys.ANKE_VURDERING.name, data: {} },
      { key: AnkeBehandlingApiKeys.PREVIEW_MESSAGE.name, noRelLink: true, data: undefined },
    ];
    render(
      <RestApiMock data={data} requestApi={requestAnkeApi}>
        <AnkeResultatProsessStegInitPanel
          valgtProsessSteg="default"
          registrerProsessPanel={() => {}}
          toggleSkalOppdatereFagsakContext={() => {}}
          fagsak={fagsak}
          opneSokeside={() => {}}
          behandling={behandling}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Resultat')).toBeInTheDocument();
    expect(screen.getByText('Innstilling på resultat av anke')).toBeInTheDocument();
  });

  it('skal ikke oppdatere fagsak-kontekst etter lagring', () => {
    const toggleSkalOppdatereFagsakContext = sinon.spy();

    const wrapper = shallow(<AnkeResultatProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleSkalOppdatereFagsakContext={toggleSkalOppdatereFagsakContext}
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
      { key: AnkeBehandlingApiKeys.AKSJONSPUNKTER.name, data: [] },
      {
        key: AnkeBehandlingApiKeys.ANKE_VURDERING.name,
        data: {
          ankeVurderingResultat: {
            ankeVurdering: ankeVurdering.ANKE_HJEMSENDE_UTEN_OPPHEV,
            begrunnelse: 'test',
          },
        } as AnkeVurdering,
      },
      { key: AnkeBehandlingApiKeys.PREVIEW_MESSAGE.name, noRelLink: true, data: undefined },
    ];

    let axiosMock: MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => { axiosMock = mockAdapter; };

    render(
      <RestApiMock data={data} requestApi={requestAnkeApi} setApiMock={setApiMock}>
        <AnkeResultatProsessStegInitPanel
          valgtProsessSteg="default"
          registrerProsessPanel={() => {}}
          toggleSkalOppdatereFagsakContext={() => {}}
          fagsak={fagsak}
          opneSokeside={() => {}}
          behandling={behandling}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Resultat')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Forhåndsvis brev'));

    await waitFor(() => expect(axiosMock.history.post.length).toBe(1));
    expect(axiosMock.history.post
      .find((a) => a.url === '/fpformidling/api/brev/forhaandsvis')?.data).toBe(JSON.stringify({
      fritekst: '',
      mottaker: '',
      dokumentMal: dokumentMalType.ANKE_OPPHEVET,
      behandlingUuid: 'test-uuid',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    }));
  });
});
