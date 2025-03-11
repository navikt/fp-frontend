import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { getIntlDecorator, withQueryClient, withRouter } from '@navikt/fp-storybook-utils';

import { initFetchFpsak } from '../../../.storybook/testdata/initFetchFpsak';
import { FagsakUrl, initFetchOptions } from '../../data/fagsakApi';
import { Dekorator } from './Dekorator';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'app/Dekorator',
  decorators: [withIntl, withRouter, withQueryClient],
  component: Dekorator,
  parameters: {
    msw: {
      handlers: [http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak))],
    },
  },
  args: {
    queryStrings: {
      errorcode: undefined,
      errormessage: undefined,
    },
    setSiteHeight: () => undefined,
    crashMessage: undefined,
    hideErrorMessages: false,
  },
  render: props => {
    //Må hente data til cache før testa komponent blir kalla
    const { status } = useQuery(initFetchOptions());

    return status === 'success' ? <Dekorator {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof Dekorator>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const VisFeilmeldingSomLiggIUrl: Story = {
  args: {
    queryStrings: {
      errorcode: 'Rest.ErrorMessage.General',
      errormessage: 'Dette er en feilmelding',
    },
  },
};

export const VisTekniskFeilmelding: Story = {
  args: {
    crashMessage: 'test is undefined',
  },
};

export const SkjulFeilmelding: Story = {
  args: {
    crashMessage: 'test is undefined',
    hideErrorMessages: true,
  },
};
