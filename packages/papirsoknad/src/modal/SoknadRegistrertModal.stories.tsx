import { withRouter } from '@navikt/fp-storybook-utils';

import messages from '../../i18n/nb_NO.json';
import { SoknadRegistrertModal } from './SoknadRegistrertModal';
import { Meta, StoryObj } from '@storybook/react';
import withIntl from '@navikt/fp-storybook-utils/decorators/withIntl';

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
