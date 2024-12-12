import React from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@navikt/ft-form-hooks';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { alleKodeverkLos, getIntlDecorator } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../../../data/fplosAvdelingslederApi';
import { withQueryClient } from '../../../data/withQueryClientProvider';
import { AndreKriterierType } from '../../../kodeverk/andreKriterierType';
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
        http.post(LosUrl.LAGRE_SAKSLISTE_ANDRE_KRITERIER, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  args: {
    valgtSakslisteId: 1,
    valgtAvdelingEnhet: 'Nav Vikafossen',
    hentAvdelingensSakslister: action('button-click'),
    hentAntallOppgaver: action('button-click'),
  },
  render: args => {
    const formMethods = useForm({
      defaultValues: {
        [AndreKriterierType.TIL_BESLUTTER]: true,
        [`${AndreKriterierType.TIL_BESLUTTER}_inkluder`]: true,
      },
    });

    //Må hente data til cache før testa komponent blir kalla
    const alleKodeverk = useQuery(losKodeverkOptions()).data;

    return alleKodeverk ? (
      <Form formMethods={formMethods}>
        <AndreKriterierVelger {...args} />
      </Form>
    ) : (
      <LoadingPanel />
    );
  },
} satisfies Meta<typeof AndreKriterierVelger>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
