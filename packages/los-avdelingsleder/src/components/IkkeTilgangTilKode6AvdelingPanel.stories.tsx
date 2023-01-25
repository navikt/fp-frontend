import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import getIntlDecorator from '@navikt/fp-storybook-utils/decorators/withIntl';

import IkkeTilgangTilKode6AvdelingPanel from './IkkeTilgangTilKode6AvdelingPanel';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/IkkeTilgangTilKode6AvdelingPanel',
  component: IkkeTilgangTilKode6AvdelingPanel,
  decorators: [withIntl],
};

const Template: Story = () => (
  <IkkeTilgangTilKode6AvdelingPanel />
);

export const IkkeTilgangGrunnetKode6 = Template.bind({});
