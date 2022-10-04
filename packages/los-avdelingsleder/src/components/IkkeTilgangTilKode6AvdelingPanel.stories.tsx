import React from 'react';

import getIntlDecorator from '@fpsak-frontend/storybook-utils/decorators/withIntl';

import IkkeTilgangTilKode6AvdelingPanel from './IkkeTilgangTilKode6AvdelingPanel';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/IkkeTilgangTilKode6AvdelingPanel',
  component: IkkeTilgangTilKode6AvdelingPanel,
  decorators: [withIntl],
};

export const IkkeTilgangGrunnetKode6 = () => (
  <IkkeTilgangTilKode6AvdelingPanel />
);
