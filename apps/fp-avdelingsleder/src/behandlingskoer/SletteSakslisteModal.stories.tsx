import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { lagNySaksliste } from '../../testdata/lagNySaksliste';
import { SletteSakslisteModal } from './SletteSakslisteModal';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  component: SletteSakslisteModal,
  decorators: [withIntl],
  args: {
    cancel: action('cancel'),
    submit: action('submit'),
  },
} satisfies Meta<typeof SletteSakslisteModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    valgtSaksliste: lagNySaksliste({ navn: 'Saksliste 1', sakslisteId: 1234})
  },
};
