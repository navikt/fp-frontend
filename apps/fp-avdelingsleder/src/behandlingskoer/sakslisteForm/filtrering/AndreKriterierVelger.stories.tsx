import { useForm } from 'react-hook-form';

import { RhfForm } from '@navikt/ft-form-hooks';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../../../data/fplosAvdelingslederApi';
import { AndreKriterierVelger } from './AndreKriterierVelger';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/avdelingsleder/behandlingskoer/AndreKriterierVelger',
  component: AndreKriterierVelger,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.post(LosUrl.ENDRE_EKSISTRENDE_SAKSLISTE, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  render: () => {
    const formMethods = useForm({
      defaultValues: {
        andreKriterie: {
          inkluder: ['ARBEID_INNTEKT'],
          ekskluder: [],
        },
      },
    });

    //Må hente data til cache før testa komponent blir kalla
    const alleKodeverk = useQuery(losKodeverkOptions()).data;

    return alleKodeverk ? (
      <RhfForm formMethods={formMethods}>
        <AndreKriterierVelger />
      </RhfForm>
    ) : (
      <LoadingPanel />
    );
  },
} satisfies Meta<typeof AndreKriterierVelger>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
