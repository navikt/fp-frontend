import { type ComponentProps, useEffect } from 'react';
import { MemoryRouter } from 'react-router-dom';

import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import type { DecoratorFunction } from '@storybook/types';
import { http, HttpResponse } from 'msw';

import { ApiPollingStatus } from '@navikt/fp-konstanter';
import { alleKodeverk, alleKodeverkTilbakekreving } from '@navikt/fp-storybook-utils';
import { notEmpty } from '@navikt/fp-utils';

import { BehandlingRel, BehandlingUrl } from '../data/behandlingApi';
import { RestApiErrorProvider } from '../data/error/RestApiErrorContext';
import { FagsakRel, FagsakUrl, wrapUrl } from '../data/fagsakApi';
import { AppIndexWrapper } from './AppIndex';

import alleInntektsmeldinger from '../../.storybook/testdata/alleInntektsmeldinger.json';
import arbeidOgInntektData from '../../.storybook/testdata/arbeidOgInntekt.json';
import arbeidsgiverOpplysningerData from '../../.storybook/testdata/arbeidsgiverOpplysninger.json';
import behandlingV1Data from '../../.storybook/testdata/behandlingV1.json';
import behandlingV2Data from '../../.storybook/testdata/behandlingV2.json';
import dokumenterData from '../../.storybook/testdata/dokumenter.json';
import fagsakFullData from '../../.storybook/testdata/fagsakFull.json';
import fagsakFullRisikoApData from '../../.storybook/testdata/fagsakFullRisikoAp.json';
import fagsakFullTilbakeData from '../../.storybook/testdata/fagsakFullTilbake.json';
import familiehendelseData from '../../.storybook/testdata/familiehendelse.json';
import initFetchData from '../../.storybook/testdata/initFetch.json';
import initFetchTilbakeData from '../../.storybook/testdata/initFetchTilbake.json';
import inntektArbeidYtelseData from '../../.storybook/testdata/inntektArbeidYtelse.json';
import medlemskapData from '../../.storybook/testdata/medlemskap.json';
import omsorgOgRettData from '../../.storybook/testdata/omsorgOgRett.json';
import personoversiktData from '../../.storybook/testdata/personoversikt.json';
import soknadData from '../../.storybook/testdata/soknad.json';

const getHrefSak = (rel: string) =>
  wrapUrl(
    notEmpty(
      initFetchData.links.find(link => link.rel === rel) ??
        initFetchData.sakLinks.find(link => link.rel === rel) ??
        initFetchTilbakeData.links.find(link => link.rel === rel) ??
        initFetchTilbakeData.sakLinks.find(link => link.rel === rel),
    ).href,
  );

const getHrefBehandling = (rel: string): string =>
  wrapUrl(notEmpty(behandlingV1Data.links.find(link => link.rel === rel)).href).split('?')[0];

const HANDLERS = [
  http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)),
  http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchTilbakeData)),
  http.get(getHrefSak(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)),
  http.get(getHrefSak(FagsakRel.KODEVERK_FPTILBAKE), () => HttpResponse.json(alleKodeverkTilbakekreving)),
  http.get(getHrefSak(FagsakRel.FETCH_FAGSAKDATA_FPTILBAKE), () => HttpResponse.json(fagsakFullTilbakeData)),
  http.get(getHrefSak(FagsakRel.ALL_DOCUMENTS), () => HttpResponse.json(dokumenterData)),

  http.post(
    BehandlingUrl.BEHANDLING,
    () => new HttpResponse(null, { status: 202, headers: { location: 'http://www.test.com/api/result' } }),
    { once: true },
  ),
  http.get(
    'http://www.test.com/api/status',
    () =>
      HttpResponse.json({
        status: ApiPollingStatus.PENDING,
        pollIntervalMillis: 100000000,
      }),
    { once: true },
  ),
  http.get('http://www.test.com/api/result', () => HttpResponse.json(behandlingV1Data), { once: true }),
  http.get(getHrefBehandling(BehandlingRel.ARBEIDSGIVERE_OVERSIKT), () =>
    HttpResponse.json(arbeidsgiverOpplysningerData),
  ),
  http.get(getHrefBehandling(BehandlingRel.BEHANDLING_PERSONOVERSIKT), () => HttpResponse.json(personoversiktData)),
  http.get(getHrefBehandling(BehandlingRel.FAMILIEHENDELSE), () => HttpResponse.json(familiehendelseData)),
  http.get(getHrefBehandling(BehandlingRel.SOKNAD), () => HttpResponse.json(soknadData)),
  http.get(getHrefBehandling(BehandlingRel.ARBEID_OG_INNTEKT), () => HttpResponse.json(arbeidOgInntektData)),
  http.get(getHrefBehandling(BehandlingRel.INNTEKT_ARBEID_YTELSE), () => HttpResponse.json(inntektArbeidYtelseData)),
  http.get(getHrefBehandling(BehandlingRel.INNTEKTSMELDINGER), () => HttpResponse.json(alleInntektsmeldinger)),
  http.get(getHrefBehandling(BehandlingRel.OPPTJENING), () => HttpResponse.json({})),
  http.get(getHrefBehandling(BehandlingRel.YTELSEFORDELING), () => HttpResponse.json({})),
  http.get(getHrefBehandling(BehandlingRel.FERIEPENGEGRUNNLAG), () => HttpResponse.json({})),
  http.get(getHrefBehandling(BehandlingRel.UTTAK_KONTROLLER_FAKTA_PERIODER_V2), () => HttpResponse.json({})),
];

const withStoryReload: DecoratorFunction<ReactRenderer> = Story => {
  useEffect(() => () => window.location.reload(), []);
  return <Story />;
};

const meta = {
  title: 'app/AppIndex',
  component: AppIndexWrapper,
  decorators: [withStoryReload],
  render: () => {
    const fagsakId = '3';
    return (
      <MemoryRouter initialEntries={[`/fagsak/${fagsakId}/`]}>
        <RestApiErrorProvider>
          <AppIndexWrapper />
        </RestApiErrorProvider>
      </MemoryRouter>
    );
  },
} satisfies Meta<{ bekreftAdopsjon?: boolean } & ComponentProps<typeof AppIndexWrapper>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const BekreftAdopsjon: Story = {
  parameters: {
    msw: {
      handlers: HANDLERS.concat([
        http.get(getHrefSak(FagsakRel.FETCH_FAGSAK), () => HttpResponse.json(fagsakFullData)),
        http.post(
          getHrefBehandling(BehandlingRel.SAVE_AKSJONSPUNKT),
          () => new HttpResponse(null, { status: 202, headers: { location: 'http://www.test.com/api/result' } }),
          { once: true },
        ),
        http.get(
          'http://www.test.com/api/status',
          () =>
            HttpResponse.json({
              status: ApiPollingStatus.PENDING,
              pollIntervalMillis: 100000000,
            }),
          { once: true },
        ),
        http.get('http://www.test.com/api/result', () => HttpResponse.json(behandlingV2Data), { once: true }),
        http.get(getHrefBehandling(BehandlingRel.MEDLEMSKAP), () => HttpResponse.json(medlemskapData)),
        http.get(getHrefBehandling(BehandlingRel.OMSORG_OG_RETT), () => HttpResponse.json(omsorgOgRettData)),
      ]),
    },
  },
  args: {
    bekreftAdopsjon: true,
  },
};

export const RisikoAksjonspunkt: Story = {
  parameters: {
    msw: {
      handlers: HANDLERS.concat([
        http.get(getHrefSak(FagsakRel.FETCH_FAGSAK), () => HttpResponse.json(fagsakFullRisikoApData)),
        http.get(getHrefBehandling(BehandlingRel.MEDLEMSKAP), () => HttpResponse.json(medlemskapData)),
        http.get(getHrefBehandling(BehandlingRel.INNTEKTSMELDINGER), () => HttpResponse.json(alleInntektsmeldinger)),
        http.get(getHrefBehandling(BehandlingRel.OMSORG_OG_RETT), () => HttpResponse.json(omsorgOgRettData)),
      ]),
    },
  },
};
