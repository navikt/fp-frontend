import { useForm } from 'react-hook-form';

import { RhfForm } from '@navikt/ft-form-hooks';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { FagsakYtelseType } from '@navikt/fp-kodeverk';
import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../../../data/fplosAvdelingslederApi';
import { FagsakYtelseTypeVelger } from './FagsakYtelseTypeVelger';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/avdelingsleder/behandlingskoer/FagsakYtelseTypeVelger',
  component: FagsakYtelseTypeVelger,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.post(LosUrl.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  args: {
    valgtSakslisteId: 1,
    valgtAvdelingEnhet: 'Nav Vikafossen',
  },
  render: args => {
    const formMethods = useForm({
      defaultValues: {
        [FagsakYtelseType.FORELDREPENGER]: true,
        [FagsakYtelseType.ENGANGSSTONAD]: true,
      },
    });

    //Må hente data til cache før testa komponent blir kalla
    const alleKodeverk = useQuery(losKodeverkOptions()).data;

    return alleKodeverk ? (
      <RhfForm formMethods={formMethods}>
        <FagsakYtelseTypeVelger {...args} />
      </RhfForm>
    ) : (
      <LoadingPanel />
    );
  },
} satisfies Meta<typeof FagsakYtelseTypeVelger>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
