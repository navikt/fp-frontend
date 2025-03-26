import { MemoryRouter } from 'react-router-dom';

import type { Meta, StoryObj } from '@storybook/react';
import type { JsonBodyType, StrictResponse } from 'msw';
import { http, HttpResponse } from 'msw';

import { ApiPollingStatus } from '@navikt/fp-konstanter';
import { alleKodeverk, alleKodeverkTilbakekreving } from '@navikt/fp-storybook-utils';

import { alleInntektsmeldinger } from '../../.storybook/testdata/alleInntektsmeldinger';
import { arbeidInntektsmelding } from '../../.storybook/testdata/arbeidInntektsmelding';
import { arbeidsgiverOpplysninger } from '../../.storybook/testdata/arbeidsgiverOpplysninger';
import { behandling } from '../../.storybook/testdata/behandling';
import { beregningresultatDagytelse } from '../../.storybook/testdata/beregningresultatDagytelse';
import { beregningsgrunnlag } from '../../.storybook/testdata/beregningsgrunnlag';
import { dokumenter } from '../../.storybook/testdata/dokumenter';
import { fagsakFullFpsak } from '../../.storybook/testdata/fagsakFullFpsak';
import { fagsakFullTilbake } from '../../.storybook/testdata/fagsakFullTilbake';
import { faktaArbeidsforhold } from '../../.storybook/testdata/faktaArbeidsforhold';
import { familiehendelse } from '../../.storybook/testdata/familiehendelse';
import { feriepengeGrunnlag } from '../../.storybook/testdata/feriepengeGrunnlag';
import { initFetchFpsak } from '../../.storybook/testdata/initFetchFpsak';
import { initFetchFptilbake } from '../../.storybook/testdata/initFetchFptilbake';
import { inntektArbeidYtelse } from '../../.storybook/testdata/inntektArbeidYtelse';
import { kontrollerFaktaPeriode } from '../../.storybook/testdata/kontrollerFaktaPeriode';
import { medlemskap } from '../../.storybook/testdata/medlemskap';
import { omsorgOgRett } from '../../.storybook/testdata/omsorgOgRett';
import { opptjening } from '../../.storybook/testdata/opptjening';
import { personoversikt } from '../../.storybook/testdata/personoversikt';
import { soknad } from '../../.storybook/testdata/soknad';
import { ytelseFordeling } from '../../.storybook/testdata/ytelseFordeling';
import { BehandlingRel, BehandlingUrl } from '../data/behandlingApi';
import { RestApiErrorProvider } from '../data/error/RestApiErrorContext';
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
  [BehandlingRel.FAMILIEHENDELSE]: familiehendelse,
  [BehandlingRel.SAVE_AKSJONSPUNKT]: new HttpResponse(null, {
    status: 202,
    headers: { location: 'http://www.test.com/api/result' },
  }),
};
const isStrictResponse = (response: any): response is StrictResponse<JsonBodyType> =>
  response !== undefined && response.body !== undefined;

const getMockResponse = (rel: string): (() => StrictResponse<JsonBodyType>) => {
  const responseData = ressursMap[rel] ?? undefined;
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
    () => new HttpResponse(null, { status: 202, headers: { location: 'http://www.test.com/api/result' } }),
  ),
  http.get('http://www.test.com/api/status', () =>
    HttpResponse.json({
      status: ApiPollingStatus.PENDING,
      pollIntervalMillis: 100000000,
    }),
  ),
  http.get('http://www.test.com/api/result', () => HttpResponse.json(behandling)),
  ...[
    ...initFetchFpsak.links,
    ...initFetchFpsak.sakLinks,
    ...initFetchFptilbake.links,
    ...initFetchFptilbake.sakLinks,
    ...behandling.links,
  ].map(link => {
    if (link.type === 'GET') {
      return http.get(wrapUrl(link.href), getMockResponse(link.rel));
    } else return http.post(wrapUrl(link.href), getMockResponse(link.rel));
  }),
];

const meta = {
  title: 'app/AppIndex',
  component: AppIndexWrapper,
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
