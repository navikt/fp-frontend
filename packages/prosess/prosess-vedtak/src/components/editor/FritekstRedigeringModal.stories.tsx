import { type ComponentProps } from 'react';

import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator, type PanelDataArgs, withPanelData, withRouter } from '@navikt/fp-storybook-utils';

import mal from '../../../.storybook/brevmal/mal.html?raw';
import { FritekstRedigeringModal } from './FritekstRedigeringModal';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'prosess/prosess-vedtak-editor',
  component: FritekstRedigeringModal,
  decorators: [withIntl, withPanelData, withRouter],
  args: {
    brevHtml: mal,
    lagreManueltBrev: action('button-click') as (html: string) => Promise<void>,
    setVisRedigering: action('button-click'),
    forkastManueltBrev: action('button-click') as () => Promise<void>,
    forhåndsvisBrev: action('button-click'),
  },
  render: args => <FritekstRedigeringModal {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof FritekstRedigeringModal>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
