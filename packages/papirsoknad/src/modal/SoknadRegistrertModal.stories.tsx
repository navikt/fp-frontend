import type { Meta, StoryObj } from '@storybook/react';

import { withRouter } from '@navikt/fp-storybook-utils';

import { SoknadRegistrertModal } from './SoknadRegistrertModal';

const meta = {
  component: SoknadRegistrertModal,
  decorators: [withRouter],
} satisfies Meta<typeof SoknadRegistrertModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};
