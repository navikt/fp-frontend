import { MemoryRouter } from 'react-router-dom';

import type { Meta, StoryObj } from '@storybook/react';
import { cleanUrl, type JsonBodyType } from 'msw';
import { http, HttpResponse } from 'msw';

import { ApiPollingStatus } from '@navikt/fp-konstanter';
import { alleKodeverk, alleKodeverkTilbakekreving } from '@navikt/fp-storybook-utils';
import { RestApiErrorProvider } from '@navikt/fp-utils';

import {
  alleInntektsmeldinger,
  arbeidInntektsmelding,
  arbeidsgiverOpplysninger,
  behandling,
  beregningresultatDagytelse,
  beregningsgrunnlag,
  dokumenter,
  fagsakFullFpsak,
  fagsakFullTilbake,
  faktaArbeidsforhold,
  familiehendelse,
  feriepengeGrunnlag,
  fødsel,
  initFetchFpsak,
  initFetchFptilbake,
  inntektArbeidYtelse,
  kontrollerFaktaPeriode,
  medlemskap,
  omsorgOgRett,
  opptjening,
  personoversikt,
  soknad,
  ytelseFordeling,
} from '../../.storybook/testdata';
import { BehandlingRel, BehandlingUrl } from '../data/behandlingApi';
import { FagsakRel, FagsakUrl, wrapUrl } from '../data/fagsakApi';
import { AppIndexWrapper } from './AppIndex';

const ressursMap = {
  [FagsakUrl.INIT_FETCH]: initFetchFpsak,
  [FagsakUrl.INIT_FETCH_FPTILBAKE]: initFetchFptilbake,
  [FagsakRel.FETCH_FAGSAK]: fagsakFullFpsak,
  [FagsakRel.FETCH_FAGSAKDATA_FPTILBAKE]: fagsakFullTilbake,
  [FagsakRel.SEARCH_FAGSAK]: [],
  [FagsakRel.KAN_TILBAKEKREVING_OPPRETTES]: true,
  [FagsakRel.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES]: true,
  [FagsakRel.ALL_DOCUMENTS]: dokumenter,
  [FagsakRel.KODEVERK]: alleKodeverk,
  [FagsakRel.KODEVERK_FPTILBAKE]: alleKodeverkTilbakekreving,

  [BehandlingRel.ARBEIDSGIVERE_OVERSIKT]: arbeidsgiverOpplysninger,
  [BehandlingRel.BEHANDLING_PERSONOVERSIKT]: personoversikt,
  [BehandlingRel.SOKNAD]: soknad,
  [BehandlingRel.MEDLEMSKAP]: medlemskap,
  [BehandlingRel.ARBEID_OG_INNTEKT]: arbeidInntektsmelding,
  [BehandlingRel.INNTEKT_ARBEID_YTELSE]: inntektArbeidYtelse,
  [BehandlingRel.INNTEKTSMELDINGER]: alleInntektsmeldinger,
  [BehandlingRel.OPPTJENING]: opptjening,
  [BehandlingRel.YTELSEFORDELING]: ytelseFordeling,
  [BehandlingRel.FERIEPENGEGRUNNLAG]: feriepengeGrunnlag,
  [BehandlingRel.UTTAK_KONTROLLER_FAKTA_PERIODER_V2]: kontrollerFaktaPeriode,
  [BehandlingRel.BEREGNINGSGRUNNLAG]: beregningsgrunnlag,
  [BehandlingRel.BEREGNINGRESULTAT_DAGYTELSE]: beregningresultatDagytelse,
  [BehandlingRel.FAKTA_ARBEIDSFORHOLD]: faktaArbeidsforhold,
  [BehandlingRel.OMSORG_OG_RETT]: omsorgOgRett,
  [BehandlingRel.FAKTA_FØDSEL]: fødsel,
  [BehandlingRel.FAMILIEHENDELSE]: familiehendelse,
  [BehandlingRel.SAVE_AKSJONSPUNKT]: new HttpResponse(null, {
    status: 202,
    headers: { location: 'https://www.test.com/api/result' },
  }),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isStrictResponse = (response: any): response is HttpResponse<JsonBodyType> =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  response !== undefined && response.body !== undefined;

const getMockResponse = (rel: string): (() => HttpResponse<JsonBodyType>) => {
  const responseData = ressursMap[rel] ?? undefined;
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- [JOHANNES] vent til vi har bestemt strict index access
  if (responseData === undefined)
    return () =>
      HttpResponse.json({ error: `Mangler mock for relasjonslenke i ressursMap for rel: ${rel}` }, { status: 500 });

  if (isStrictResponse(responseData)) return () => responseData;
  return () => HttpResponse.json(responseData);
};

const HANDLERS = [
  http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)),
  http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)),
  http.post(
    BehandlingUrl.BEHANDLING,
    () => new HttpResponse(null, { status: 202, headers: { location: 'https://www.test.com/api/result' } }),
  ),
  http.get('https://www.test.com/api/status', () =>
    HttpResponse.json({
      status: ApiPollingStatus.PENDING,
      pollIntervalMillis: 100000000,
    }),
  ),
  http.get('https://www.test.com/api/result', () => HttpResponse.json(behandling)),
  ...[
    ...initFetchFpsak.links,
    ...initFetchFpsak.sakLinks,
    ...initFetchFptilbake.links,
    ...initFetchFptilbake.sakLinks,
    ...behandling.links,
  ].map(link => http.all(cleanUrl(wrapUrl(link.href)), getMockResponse(link.rel))),
];

const meta = {
  title: 'AppIndex',
  component: AppIndexWrapper,
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    const fagsakId = '1';
    return (
      <MemoryRouter initialEntries={[`/fagsak/${fagsakId}/`]}>
        <RestApiErrorProvider>
          <AppIndexWrapper />
        </RestApiErrorProvider>
      </MemoryRouter>
    );
  },
} satisfies Meta<typeof AppIndexWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: HANDLERS,
    },
  },
};
