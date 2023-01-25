import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import getIntlDecorator from '@navikt/fp-storybook-utils/decorators/withIntl';

import IkkeTilgangTilAvdelingslederPanel from './IkkeTilgangTilAvdelingslederPanel';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/IkkeTilgangTilAvdelingslederPanel',
  component: IkkeTilgangTilAvdelingslederPanel,
  decorators: [withIntl],
};

const Template: Story = () => (
  <IkkeTilgangTilAvdelingslederPanel />
);

export const IkkeTilgangTilAvdelingsleder = Template.bind({});
