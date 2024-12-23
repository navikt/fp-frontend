import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingStatus,
  DokumentMalType,
  FagsakYtelseType,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak } from '@navikt/fp-types';
import { RestApiMock } from '@navikt/fp-utils-test';

import { BehandlingApiKeys, requestBehandlingApi } from '../../../data/behandlingContextApi';
import * as Felles from '../../felles/prosess/useStandardProsessPanelProps';
import { InnsynVedtakProsessStegInitPanel } from './InnsynVedtakProsessStegInitPanel';

import messages from '../../../../i18n/nb_NO.json';

const intl = createIntl(messages);

const fagsak = {
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
} as Fagsak;

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
  status: BehandlingStatus.OPPRETTET,
  behandlingPaaVent: false,
} as Behandling;

// @ts-expect-error Fiks
const kodeverk = alleKodeverk as AlleKodeverk;

const aksjonspunkter = [
  {
    definisjon: AksjonspunktKode.FORESLA_VEDTAK,
    kanLoses: true,
    status: AksjonspunktStatus.OPPRETTET,
  },
  {
    definisjon: AksjonspunktKode.VURDER_INNSYN,
    kanLoses: false,
    status: AksjonspunktStatus.UTFORT,
    begrunnelse: 'Dette er en begrunnelse',
  },
] as Aksjonspunkt[];

const innsyn = {
  innsynResultatType: '',
};

describe('<InnsynVedtakProsessStegInitPanel>', () => {
  const submitCallback = vi.fn();
  vi.spyOn(Felles, 'useStandardProsessPanelProps').mockImplementation(() => ({
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
    fagsak,
  }));

  it('skal rendre komponent korrekt', async () => {
    const data = [
      { key: BehandlingApiKeys.INNSYN.name, data: innsyn },
      { key: BehandlingApiKeys.INNSYN_DOKUMENTER.name, data: [] },
    ];
    render(
      <RawIntlProvider value={intl}>
        <RestApiMock data={data} requestApi={requestBehandlingApi}>
          <InnsynVedtakProsessStegInitPanel
            valgtProsessSteg="default"
            registrerProsessPanel={() => {}}
            setSkalOppdatereEtterBekreftelseAvAp={() => {}}
            fagsak={fagsak}
            opneSokeside={() => {}}
            behandling={{
              ...behandling,
              aksjonspunkt: aksjonspunkter,
            }}
          />
        </RestApiMock>
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Forslag til vedtak')).toBeInTheDocument();
  });

  // TODO FIX denne feilar av ein eller annan grunn
  it.skip('skal vise forhåndsvisning av melding', async () => {
    const data = [
      { key: BehandlingApiKeys.INNSYN.name, data: innsyn },
      { key: BehandlingApiKeys.INNSYN_DOKUMENTER.name, data: [] },
      { key: BehandlingApiKeys.PREVIEW_MESSAGE.name, data: undefined },
    ];

    let axiosMock = {} as MockAdapter;
    const setApiMock = (mockAdapter: MockAdapter) => {
      axiosMock = mockAdapter;
    };

    const utils = render(
      <RawIntlProvider value={intl}>
        <RestApiMock data={data} requestApi={requestBehandlingApi} setApiMock={setApiMock}>
          <InnsynVedtakProsessStegInitPanel
            valgtProsessSteg="default"
            registrerProsessPanel={() => {}}
            setSkalOppdatereEtterBekreftelseAvAp={() => {}}
            fagsak={fagsak}
            opneSokeside={() => {}}
            behandling={{
              ...behandling,
              aksjonspunkt: aksjonspunkter,
            }}
          />
        </RestApiMock>
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Forslag til vedtak')).toBeInTheDocument();

    await userEvent.click(utils.getByText('Forhåndsvis brev'));

    await waitFor(() => expect(axiosMock.history.post.length).toBe(1));

    expect(axiosMock.history.post.find(a => a.url === '/fpsak/api/brev/forhaandsvis')?.data).toBe(
      JSON.stringify({
        fritekst: ' ',
        mottaker: '',
        dokumentMal: DokumentMalType.INNSYN_SVAR,
        gjelderVedtak: true,
        behandlingUuid: 'test-uuid',
        fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      }),
    );
  });
});
