import React from 'react';
import { StoryFn } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import IkkeTilgangTilAvdelingslederPanel from './IkkeTilgangTilAvdelingslederPanel';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/IkkeTilgangTilAvdelingslederPanel',
  component: IkkeTilgangTilAvdelingslederPanel,
  decorators: [withIntl],
};

const Template: StoryFn = () => <IkkeTilgangTilAvdelingslederPanel />;

export const IkkeTilgangTilAvdelingsleder = Template.bind({});
