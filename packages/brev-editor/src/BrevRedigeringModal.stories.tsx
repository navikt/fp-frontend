import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { withRouter } from '@navikt/fp-storybook-utils';

import mal from '../.storybook/brevmal/mal.html?raw';
import redigertInnhold from '../.storybook/brevmal/redigertInnhold.html?raw';
import { BrevRedigeringModal } from './BrevRedigeringModal';

const meta = {
  title: 'brev-editor/BrevRedigeringModal',
  component: BrevRedigeringModal,
  decorators: [withRouter],
  args: {
    mellomlagreOgHentPåNytt: action('mellomlagreOgHentPåNytt') as (html: string | null) => Promise<void>,
    setVisRedigeringModal: action('setVisRedigeringModal'),
    forhåndsvisBrev: action('forhåndsvisBrev'),
    opprinneligHtml: mal,
    redigertHtml: null,
  },
  render: args => <BrevRedigeringModal {...args} />,
} satisfies Meta<ComponentProps<typeof BrevRedigeringModal>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const MedOpprinneligHtml: Story = {};

export const MedRedigertHtml: Story = {
  args: {
    redigertHtml: redigertInnhold,
  },
};

export const ReadOnly: Story = {
  args: {
    isReadOnly: true,
  },
};
