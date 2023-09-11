import React from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import DriftsmeldingPanel from './DriftsmeldingPanel';

import messages from '../../i18n/nb_NO.json';
import Driftsmelding from '../typer/driftsmeldingTsType';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/saksbehandler/DriftsmeldingPanel',
  component: DriftsmeldingPanel,
  decorators: [withIntl],
};

const Template: StoryFn<{ driftsmeldinger: Driftsmelding[] }> = ({ driftsmeldinger }) => (
  <DriftsmeldingPanel driftsmeldinger={driftsmeldinger} />
);

export const EnDriftsmelding = Template.bind({});
EnDriftsmelding.args = {
  driftsmeldinger: [
    {
      id: '1',
      melding: 'Dette er en driftsmelding',
    },
  ],
};

export const ToDriftsmelding = Template.bind({});
ToDriftsmelding.args = {
  driftsmeldinger: [
    {
      id: '1',
      melding: 'Dette er en driftsmelding',
    },
    {
      id: '2',
      melding: 'Dette er en annen driftsmelding',
    },
  ],
};
