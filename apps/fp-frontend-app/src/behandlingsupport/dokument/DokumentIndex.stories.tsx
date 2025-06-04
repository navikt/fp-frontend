import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { cleanUrl, http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { Kommunikasjonsretning } from '@navikt/fp-kodeverk';
import { getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';
import { notEmpty } from '@navikt/fp-utils';

import { initFetchFpsak } from '../../../.storybook/testdata';
import { FagsakRel, FagsakUrl, initFetchOptions, wrapUrl } from '../../data/fagsakApi';
import { UtvidEllerMinskKnapp } from '../UtvidEllerMinskKnapp.tsx';
import { DokumentIndex } from './DokumentIndex';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const getHref = (rel: string) =>
  cleanUrl(wrapUrl(notEmpty(initFetchFpsak.sakLinks.find(link => link.rel === rel)).href));

const meta = {
  title: 'fagsak/DokumentIndex',
  decorators: [withIntl, withQueryClient],
  component: DokumentIndex,
  args: {
    saksnummer: '1',
    toggleVisUtvidetBehandlingDetaljerKnapp: (
      <UtvidEllerMinskKnapp
        toggleVisUtvidetBehandlingDetaljer={action('button-click')}
        visUtvidetBehandlingDetaljer={false}
      />
    ),
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
        http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)),
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
        http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)),
        http.get(getHref(FagsakRel.ALL_DOCUMENTS), () => HttpResponse.json([])),
      ],
    },
  },
  args: {},
};
