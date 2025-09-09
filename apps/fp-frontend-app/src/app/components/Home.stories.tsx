import { MemoryRouter } from 'react-router-dom';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { cleanUrl, http, HttpResponse } from 'msw';

import { FagsakStatusEnum } from '@navikt/fp-kodeverk';
import { alleKodeverk, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';
import type { Aktor, NavAnsatt, Person } from '@navikt/fp-types';
import { KjønnkodeEnum } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { initFetchFpsak, initFetchFptilbake } from '../../../.storybook/testdata';
import { FagsakRel, FagsakUrl, initFetchOptions, useFagsakApi, wrapUrl } from '../../data/fagsakApi';
import { Home } from './Home';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const getHref = (rel: string) => cleanUrl(wrapUrl(notEmpty(initFetchFpsak.links.find(link => link.rel === rel)).href));

const PERSON = {
  navn: 'Espen Utvikler',
  fødselsnummer: '121221',
  kjønn: KjønnkodeEnum.MANN,
  fødselsdato: '2000-01-02',
  aktørId: '12121221',

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
  aktørId: undefined,
} satisfies Aktor;

const NAV_ANSATT = {
  navn: 'Espen Saksbehandler',
  brukernavn: 'E232323',
  kanBehandleKode6: true,
  kanOppgavestyre: true,
  kanOverstyre: true,
  kanSaksbehandle: true,
  kanVeilede: true,
  funksjonellTid: '',
} satisfies NavAnsatt;

const meta = {
  title: 'app/Home',
  decorators: [withIntl, withQueryClient],
  component: Home,
  parameters: {
    msw: {
      handlers: [
        http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)),
        http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)),
        http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)),
        http.get(getHref(FagsakRel.SEARCH_UTBETALINGSDATA_IS15), () => HttpResponse.json({})),
        http.get(FagsakUrl.AKTOER_INFO, () => HttpResponse.json(AKTØR_INFO)),
        http.get(wrapUrl('fplos/api/kodeverk'), () => new HttpResponse(null, { status: 404 })),
        http.get(wrapUrl('fplos/api/driftsmeldinger'), () => new HttpResponse(null, { status: 404 })),
      ],
    },
    layout: 'fullscreen',
  },
  args: {
    headerHeight: 100,
    navAnsatt: NAV_ANSATT,
  },
  render: (props, { parameters: { url } }) => {
    //Må hente data til cache før testa komponent blir kalla
    const { status } = useQuery(initFetchOptions());
    const { kodeverkOptions } = useFagsakApi();
    const { data: kodeverk } = useQuery(kodeverkOptions(status === 'success'));

    return kodeverk ? (
      <MemoryRouter initialEntries={[url]}>
        <Home {...props} />
      </MemoryRouter>
    ) : (
      <LoadingPanel />
    );
  },
} satisfies Meta<typeof Home>;
export default meta;

type Story = StoryObj<typeof meta>;

export const VisLoadingFagsak: Story = {
  parameters: {
    url: '/fagsak/352011079',
  },
};

export const VisAktør: Story = {
  parameters: {
    url: '/aktoer/23243234234',
  },
};

export const VisSøk: Story = {
  parameters: {
    url: '/',
  },
};

export const VisLosIkkeTilgjengelig: Story = {
  parameters: {
    url: '/avdelingsleder',
  },
};

export const VisSideIkkeFunnet: Story = {
  parameters: {
    url: '/tadgadfsf',
  },
};
