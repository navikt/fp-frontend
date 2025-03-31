import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { alleKodeverk, withQueryClient, withRouter } from '@navikt/fp-storybook-utils';
import type { FagsakEnkel } from '@navikt/fp-types';
import { KjønnkodeEnum } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { initFetchFpsak } from '../../.storybook/testdata/initFetchFpsak';
import { FagsakRel, FagsakUrl, initFetchOptions, useFagsakApi, wrapUrl } from '../data/fagsakApi';
import { FagsakSearchIndex } from './FagsakSearchIndex';

const getHref = (rel: string) => wrapUrl(notEmpty(initFetchFpsak.links.find(link => link.rel === rel)).href);

const FAGSAK_1 = {
  saksnummer: '12345',
  fagsakYtelseType: 'ES',
  status: 'OPPR',
  aktørId: '1',
  barnFødt: '2019-10-10',
  opprettet: '',
  person: {
    navn: 'Petra',
    fødselsnummer: '232323',
    fødselsdato: '1980-10-10',
    dødsdato: null,
    aktørId: '111111',
    kjønn: KjønnkodeEnum.KVINNE,
  },
} satisfies FagsakEnkel;

const FAGSAK_2: Partial<FagsakEnkel> = {
  ...FAGSAK_1,
  saksnummer: '23456',
} satisfies FagsakEnkel;

const FAGSAKER = [FAGSAK_1, FAGSAK_2];

const meta = {
  title: 'fagsak/FagsakSearchIndex',
  decorators: [withRouter, withQueryClient],
  component: FagsakSearchIndex,
  parameters: {
    msw: {
      handlers: [
        http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)),
        http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)),
        http.post(getHref(FagsakRel.SEARCH_FAGSAK), () => HttpResponse.json(FAGSAKER)),
      ],
    },
  },
  render: () => {
    //Må hente data til cache før testa komponent blir kalla
    const { status } = useQuery(initFetchOptions());
    const { kodeverkOptions } = useFagsakApi();
    const { data: kodeverk } = useQuery(kodeverkOptions(status === 'success'));

    return kodeverk ? <FagsakSearchIndex /> : <LoadingPanel />;
  },
} satisfies Meta<typeof FagsakSearchIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
