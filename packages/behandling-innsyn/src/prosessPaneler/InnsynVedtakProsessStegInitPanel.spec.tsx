import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import userEvent from '@testing-library/user-event';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import * as Felles from '@fpsak-frontend/behandling-felles/src/utils/prosess/useStandardProsessPanelProps';
import { Aksjonspunkt, Behandling, Fagsak } from '@fpsak-frontend/types';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import { requestInnsynApi, InnsynBehandlingApiKeys } from '../data/innsynBehandlingApi';
import InnsynVedtakProsessStegInitPanel from './InnsynVedtakProsessStegInitPanel';

const fagsak = {
  fagsakYtelseType: {
    kode: fagsakYtelseType.FORELDREPENGER,
    kodeverk: '',
  },
} as Fagsak;

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
  status: {
    kode: behandlingStatus.OPPRETTET,
    kodeverk: '',
  },
  behandlingPaaVent: false,
} as Behandling;

// @ts-ignore Fiks
const kodeverk = alleKodeverk as AlleKodeverk;

const aksjonspunkter = [{
  definisjon: {
    kode: aksjonspunktCodes.FORESLA_VEDTAK,
    kodeverk: '',
  },
  erAktivt: true,
  kanLoses: true,
  status: {
    kode: aksjonspunktStatus.OPPRETTET,
    kodeverk: '',
  },
}, {
  definisjon: {
    kode: aksjonspunktCodes.VURDER_INNSYN,
    kodeverk: '',
  },
  erAktivt: false,
  kanLoses: false,
  status: {
    kode: aksjonspunktStatus.UTFORT,
    kodeverk: '',
  },
  begrunnelse: 'Dette er en begrunnelse',
}] as Aksjonspunkt[];

const innsyn = {
  innsynResultatType: {
    kode: '',
    kodeverk: '',
  },
};

describe('<InnsynVedtakProsessStegInitPanel>', () => {
  const submitCallback = jest.fn();
  jest.spyOn(Felles, 'default').mockImplementation(() => ({
    behandling,
    alleMerknaderFraBeslutter: {},
    submitCallback,
    status: vilkarUtfallType.IKKE_VURDERT,
    alleKodeverk: kodeverk,
    isReadOnly: false,
    readOnlySubmitButton: false,
    aksjonspunkter,
    vilkar: [],
    isAksjonspunktOpen: true,
    setFormData: () => undefined,
  }));

  it('skal rendre komponent korrekt', async () => {
    const data = [
      { key: InnsynBehandlingApiKeys.AKSJONSPUNKTER.name, data: aksjonspunkter },
      { key: InnsynBehandlingApiKeys.INNSYN.name, data: innsyn },
      { key: InnsynBehandlingApiKeys.INNSYN_DOKUMENTER.name, data: [] },
    ];
    render(
      <RestApiMock data={data} requestApi={requestInnsynApi}>
        <InnsynVedtakProsessStegInitPanel
          valgtProsessSteg="default"
          registrerProsessPanel={() => {}}
          toggleOppdatereFagsakContext={() => {}}
          fagsak={fagsak}
          opneSokeside={() => {}}
          behandling={behandling}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Forslag til vedtak')).toBeInTheDocument();
  });

  it('skal vise forhåndsvisning av melding', async () => {
    const data = [
      { key: InnsynBehandlingApiKeys.AKSJONSPUNKTER.name, data: aksjonspunkter },
      { key: InnsynBehandlingApiKeys.INNSYN.name, data: innsyn },
      { key: InnsynBehandlingApiKeys.INNSYN_DOKUMENTER.name, data: [] },
      { key: InnsynBehandlingApiKeys.PREVIEW_MESSAGE.name, data: undefined },
    ];

    let axiosMock: MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => { axiosMock = mockAdapter; };

    const utils = render(
      <RestApiMock data={data} requestApi={requestInnsynApi} setApiMock={setApiMock}>
        <InnsynVedtakProsessStegInitPanel
          valgtProsessSteg="default"
          registrerProsessPanel={() => {}}
          toggleOppdatereFagsakContext={() => {}}
          fagsak={fagsak}
          opneSokeside={() => {}}
          behandling={behandling}
        />
      </RestApiMock>,
    );

    expect(await screen.findByText('Forslag til vedtak')).toBeInTheDocument();

    userEvent.click(utils.getByText('Forhåndsvis brev'));

    await waitFor(() => expect(axiosMock.history.post.length).toBe(1));

    expect(axiosMock.history.post
      .find((a) => a.url === '/fpformidling/api/brev/forhaandsvis')?.data).toBe(JSON.stringify({
      fritekst: ' ',
      mottaker: '',
      dokumentMal: 'INSSKR',
      gjelderVedtak: true,
      behandlingUuid: 'test-uuid',
      ytelseType: {
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: '',
      },
    }));
  });
});
