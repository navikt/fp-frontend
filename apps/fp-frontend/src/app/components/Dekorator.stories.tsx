import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { getIntlDecorator, withRouter } from '@navikt/fp-storybook-utils';

import { initFetchFpsak } from '../../../.storybook/testdata';
import { Dekorator } from './Dekorator';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'app/Dekorator',
  decorators: [withIntl, withRouter],
  component: Dekorator,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    queryStrings: {
      errorcode: undefined,
      errormessage: undefined,
    },
    setSiteHeight: () => undefined,
    crashMessage: undefined,
    hideErrorMessages: false,
    theme: 'light',
    setTheme: action('setTheme'),
    navAnsatt: initFetchFpsak.innloggetBruker,
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
