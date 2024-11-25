import { withRouter } from '@navikt/fp-storybook-utils';
import { Meta, StoryObj } from '@storybook/react';

import { SoknadRegistrertModal } from './SoknadRegistrertModal';

const meta = {
  title: 'papirsoknad/modal/SoknadRegistrertModal',
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
