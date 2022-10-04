import React from 'react';

import getIntlDecorator from '@fpsak-frontend/storybook-utils/decorators/withIntl';

import IkkeTilgangTilAvdelingslederPanel from './IkkeTilgangTilAvdelingslederPanel';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/IkkeTilgangTilAvdelingslederPanel',
  component: IkkeTilgangTilAvdelingslederPanel,
  decorators: [withIntl],
};

export const IkkeTilgangTilAvdelingsleder = () => (
  <IkkeTilgangTilAvdelingslederPanel />
);
