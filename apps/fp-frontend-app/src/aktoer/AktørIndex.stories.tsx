import { MemoryRouter, Route, Routes } from 'react-router';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { FagsakStatus, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { alleKodeverk, withQueryClient } from '@navikt/fp-storybook-utils';
import { Aktor, FagsakPerson, KjønnkodeEnum, Person } from '@navikt/fp-types';

import { FagsakRel, FagsakUrl, initFetchOptions, useFagsakApi, wrapUrl } from '../data/fagsakApi';
import { notEmpty } from '../data/notEmpty';
import { AktørIndex } from './AktørIndex';

import initFetchData from '../../.storybook/testdata/initFetch.json';
import initFetchTilbakeData from '../../.storybook/testdata/initFetchTilbake.json';

const getHref = (rel: string) => wrapUrl(notEmpty(initFetchData.links.find(link => link.rel === rel)).href);

const PERSON = {
  navn: 'Espen Utvikler',
  fødselsnummer: '121221',
  kjønn: KjønnkodeEnum.MANN,
  fødselsdato: '2000-01-02',
} satisfies Person;

const AKTØR_INFO = {
  fagsaker: [
    {
      saksnummer: '123',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      status: FagsakStatus.OPPRETTET,
      aktørId: '1345345',
      barnFødt: '2024-01-03',
      opprettet: '2024-01-03',
      person: PERSON,
    },
    {
      saksnummer: '252523',
      fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
      status: FagsakStatus.LOPENDE,
      aktørId: '1345345',
      barnFødt: '2024-01-03',
      opprettet: '2024-01-03',
      person: PERSON,
    },
  ],
  person: {
    ...PERSON,
    aktørId: '12121221',
  } satisfies FagsakPerson,
} satisfies Aktor;

const meta = {
  title: 'app/AktørIndex',
  decorators: [withQueryClient],
  component: AktørIndex,
  render: () => {
    //Må hente data til cache før testa komponent blir kalla
    const { status } = useQuery(initFetchOptions());
    const { kodeverkOptions } = useFagsakApi();
    const { data: kodeverk } = useQuery(kodeverkOptions(status === 'success'));

    return kodeverk ? (
      <MemoryRouter initialEntries={[`/fagsak/352011079`]}>
        <Routes>
          <Route element={<AktørIndex />} path="/fagsak/:aktoerId" />
        </Routes>
      </MemoryRouter>
    ) : (
      <LoadingPanel />
    );
  },
} satisfies Meta<typeof AktørIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)),
        http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchTilbakeData)),
        http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)),
        http.get(FagsakUrl.AKTOER_INFO, () => HttpResponse.json(AKTØR_INFO)),
      ],
    },
  },
};

export const IngenFagsaker: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)),
        http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchTilbakeData)),
        http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)),
        http.get(FagsakUrl.AKTOER_INFO, () =>
          HttpResponse.json({
            fagsaker: [],
            person: PERSON,
          } satisfies Aktor),
        ),
      ],
    },
  },
};

export const AktørInfoKallFeilet: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)),
        http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchTilbakeData)),
        http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)),
        http.get(FagsakUrl.AKTOER_INFO, () => new HttpResponse(null, { status: 500 })),
      ],
    },
  },
};
