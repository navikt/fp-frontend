import React from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import { UttakType, UttakÅrsak } from '@navikt/fp-types';

import DelOppPeriodeModal from './DelOppPeriodeModal';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'fakta/fakta-uttaksdokumentasjon-del-opp-periode-modal',
  component: DelOppPeriodeModal,
  decorators: [withIntl],
};

const Template: StoryFn<{ visSlettEtterfølgendePerioder?: boolean }> = ({ visSlettEtterfølgendePerioder = false }) => (
  <DelOppPeriodeModal
    submit={action('button-click')}
    cancel={action('button-click')}
    originalTom="2022-11-07"
    periode={{
      fom: '2022-11-01',
      tom: '2022-11-07',
      type: UttakType.UTSETTELSE,
      årsak: UttakÅrsak.INNLEGGELSE_SØKER,
    }}
    visSlettEtterfølgendePerioder={visSlettEtterfølgendePerioder}
  />
);

export const VisModalForÅDeleOppPeriode = Template.bind({});

export const VisModalDerEnMåFjerneEtterfølgendePerioder = Template.bind({});
VisModalDerEnMåFjerneEtterfølgendePerioder.args = {
  visSlettEtterfølgendePerioder: true,
};
