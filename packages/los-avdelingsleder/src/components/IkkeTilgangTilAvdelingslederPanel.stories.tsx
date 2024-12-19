import { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { IkkeTilgangTilAvdelingslederPanel } from './IkkeTilgangTilAvdelingslederPanel';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/avdelingsleder/IkkeTilgangTilAvdelingslederPanel',
  component: IkkeTilgangTilAvdelingslederPanel,
  decorators: [withIntl],
} satisfies Meta<typeof IkkeTilgangTilAvdelingslederPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const IkkeTilgangTilAvdelingsleder: Story = {};
