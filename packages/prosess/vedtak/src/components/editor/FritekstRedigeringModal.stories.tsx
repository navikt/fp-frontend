import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { BrevRedigeringModal } from '@navikt/fp-brev-editor';
import { withRouter } from '@navikt/fp-storybook-utils';

import mal from '../../../.storybook/brevmal/mal.html?raw';
import redigertInnhold from '../../../.storybook/brevmal/redigertInnhold.html?raw';

const meta = {
  title: 'prosess/prosess-vedtak-editor',
  component: BrevRedigeringModal,
  decorators: [withRouter],
  args: {
    mellomlagreOgHentPåNytt: action('button-click') as (html: string | null) => Promise<void>,
    setVisRedigeringModal: action('button-click'),
    forhåndsvisBrev: action('button-click'),
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
