import { action } from '@storybook/addon-actions';
import type { StoryFn } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import { UttakÅrsak, UttakType } from '@navikt/fp-types';

import { DelOppPeriodeModal } from './DelOppPeriodeModal';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'fakta/fakta-uttaksdokumentasjon-del-opp-periode-modal',
  component: DelOppPeriodeModal,
  decorators: [withIntl],
};

const Template: StoryFn = () => (
  <DelOppPeriodeModal
    submit={action('button-click')}
    cancel={action('button-click')}
    periode={{
      fom: '2022-11-01',
      tom: '2022-11-23',
      type: UttakType.UTSETTELSE,
      årsak: UttakÅrsak.INNLEGGELSE_SØKER,
    }}
  />
);

export const VisModalForÅDeleOppPeriode = Template.bind({});
