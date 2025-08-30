import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { cleanUrl, http, HttpResponse } from 'msw';

import { FagsakStatusEnum } from '@navikt/fp-kodeverk';
import { alleKodeverk, withQueryClient } from '@navikt/fp-storybook-utils';
import type { Aktor, Person } from '@navikt/fp-types';
import { KjønnkodeEnum } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { initFetchFpsak, initFetchFptilbake } from '../../.storybook/testdata';
import { FagsakRel, FagsakUrl, initFetchOptions, useFagsakApi, wrapUrl } from '../data/fagsakApi';
import { AktørIndex } from './AktørIndex';

const getHref = (rel: string) => cleanUrl(wrapUrl(notEmpty(initFetchFpsak.links.find(link => link.rel === rel)).href));

const PERSON = {
  navn: 'Espen Utvikler',
  fødselsnummer: '11111111111',
  kjønn: KjønnkodeEnum.MANN,
  fødselsdato: '2000-01-02',
  dødsdato: null,
  aktørId: '22222222',
  diskresjonskode: null,
  språkkode: '-',
} satisfies Person;

const AKTØR_INFO = {
  fagsaker: [
    {
      saksnummer: '123',
      fagsakYtelseType: 'FP',
      status: FagsakStatusEnum.OPPRETTET,
      aktørId: '1345345',
      barnFødt: '2024-01-03',
      opprettet: '2024-01-03',
      person: PERSON,
      relasjonsRolleType: '-',
    },
    {
      saksnummer: '252523',
      fagsakYtelseType: 'ES',
      status: FagsakStatusEnum.LOPENDE,
      aktørId: '1345345',
      barnFødt: '2024-01-03',
      opprettet: '2024-01-03',
      person: PERSON,
      relasjonsRolleType: '-',
    },
  ],
  person: PERSON,
  aktørId: null,
} satisfies Aktor;

const meta = {
  title: 'app/AktørIndex',
  decorators: [withQueryClient],
  component: AktørIndex,
  parameters: {
    layout: 'fullscreen',
  },
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
        http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)),
        http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)),
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
        http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)),
        http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)),
        http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)),
        http.get(FagsakUrl.AKTOER_INFO, () =>
          HttpResponse.json({
            fagsaker: [],
            person: { ...PERSON, aktørId: null },
            aktørId: null,
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
        http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)),
        http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)),
        http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)),
        http.get(FagsakUrl.AKTOER_INFO, () => new HttpResponse(null, { status: 500 })),
      ],
    },
  },
};
