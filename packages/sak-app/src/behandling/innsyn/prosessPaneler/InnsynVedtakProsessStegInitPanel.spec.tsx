import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import userEvent from '@testing-library/user-event';
import {
  AksjonspunktStatus, FagsakYtelseType, BehandlingStatus, VilkarUtfallType,
} from '@navikt/ft-kodeverk';
import { Aksjonspunkt, Behandling, Fagsak } from '@navikt/ft-types';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';

import { BehandlingFellesApiKeys } from '../../felles/data/behandlingFellesApi';
import * as Felles from '../../felles/utils/prosess/useStandardProsessPanelProps';
import { requestInnsynApi, InnsynBehandlingApiKeys } from '../data/innsynBehandlingApi';
import InnsynVedtakProsessStegInitPanel from './InnsynVedtakProsessStegInitPanel';

const fagsak = {
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
} as Fagsak;

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
  status: BehandlingStatus.OPPRETTET,
  behandlingPaaVent: false,
} as Behandling;

// @ts-ignore Fiks
const kodeverk = alleKodeverk as AlleKodeverk;

const aksjonspunkter = [{
  definisjon: aksjonspunktCodes.FORESLA_VEDTAK,
  erAktivt: true,
  kanLoses: true,
  status: AksjonspunktStatus.OPPRETTET,
}, {
  definisjon: aksjonspunktCodes.VURDER_INNSYN,
  erAktivt: false,
  kanLoses: false,
  status: AksjonspunktStatus.UTFORT,
  begrunnelse: 'Dette er en begrunnelse',
}] as Aksjonspunkt[];

const innsyn = {
  innsynResultatType: '',
};

describe('<InnsynVedtakProsessStegInitPanel>', () => {
  const submitCallback = jest.fn();
  jest.spyOn(Felles, 'default').mockImplementation(() => ({
    behandling,
    alleMerknaderFraBeslutter: {},
    submitCallback,
    status: VilkarUtfallType.IKKE_VURDERT,
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
      { key: BehandlingFellesApiKeys.AKSJONSPUNKTER.name, data: aksjonspunkter },
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
      { key: BehandlingFellesApiKeys.AKSJONSPUNKTER.name, data: aksjonspunkter },
      { key: InnsynBehandlingApiKeys.INNSYN.name, data: innsyn },
      { key: InnsynBehandlingApiKeys.INNSYN_DOKUMENTER.name, data: [] },
      { key: BehandlingFellesApiKeys.PREVIEW_MESSAGE.name, data: undefined },
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

    await userEvent.click(utils.getByText('Forhåndsvis brev'));

    await waitFor(() => expect(axiosMock.history.post.length).toBe(1));

    expect(axiosMock.history.post
      .find((a) => a.url === '/fpformidling/api/brev/forhaandsvis')?.data).toBe(JSON.stringify({
      fritekst: ' ',
      mottaker: '',
      dokumentMal: dokumentMalType.INNSYN_SVAR,
      gjelderVedtak: true,
      behandlingUuid: 'test-uuid',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    }));
  });
});
