import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { Kommunikasjonsretning } from '@navikt/fp-kodeverk';
import { getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { FagsakRel, FagsakUrl, initFetchOptions, wrapUrl } from '../../data/fagsakApi';
import { notEmpty } from '../../data/notEmpty';
import { DokumentIndex } from './DokumentIndex';

import initFetchData from '../../../.storybook/testdata/initFetch.json';
import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const getHref = (rel: string) => wrapUrl(notEmpty(initFetchData.sakLinks.find(link => link.rel === rel)).href);

const meta = {
  title: 'fagsak/DokumentIndex',
  decorators: [withIntl, withQueryClient],
  component: DokumentIndex,
  args: {
    saksnummer: '1',
  },
  render: props => {
    //Må hente data til cache før testa komponent blir kalla
    const { status } = useQuery(initFetchOptions());

    return status === 'success' ? <DokumentIndex {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof DokumentIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DetFinnesDokumenterPåSak: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)),
        http.get(getHref(FagsakRel.ALL_DOCUMENTS), () =>
          HttpResponse.json([
            {
              journalpostId: '1',
              dokumentId: '1',
              tittel: 'dok',
              tidspunkt: '10.10.2017 10:23',
              kommunikasjonsretning: Kommunikasjonsretning.INN,
            },
            {
              journalpostId: '2',
              dokumentId: '2',
              tittel: 'dok1',
              tidspunkt: '10.10.2019 10:23',
              kommunikasjonsretning: Kommunikasjonsretning.INN,
            },
            {
              journalpostId: '3',
              dokumentId: '3',
              tittel: 'dok2',
              tidspunkt: '10.10.2018 10:23',
              kommunikasjonsretning: Kommunikasjonsretning.INN,
            },
          ]),
        ),
      ],
    },
  },
  args: {
    behandlingUuid: '11212',
    behandlingVersjon: 1,
  },
};

export const DetFinnesIngenDokumenterPåSak: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)),
        http.get(getHref(FagsakRel.ALL_DOCUMENTS), () => HttpResponse.json([])),
      ],
    },
  },
  args: {},
};
