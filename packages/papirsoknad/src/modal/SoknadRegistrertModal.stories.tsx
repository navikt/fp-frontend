import { Meta, StoryObj } from '@storybook/react';

import { withRouter } from '@navikt/fp-storybook-utils';
import withIntl from '@navikt/fp-storybook-utils/decorators/withIntl';

import { SoknadRegistrertModal } from './SoknadRegistrertModal';

import messages from '../../i18n/nb_NO.json';

const meta = {
  title: 'papirsoknad/modal/SoknadRegistrertModal',
  component: SoknadRegistrertModal,
  decorators: [withRouter, withIntl(messages)],
} satisfies Meta<typeof SoknadRegistrertModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};
