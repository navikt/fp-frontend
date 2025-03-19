import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import { UttakÅrsak, UttakType } from '@navikt/fp-types';

import { DelOppPeriodeModal } from './DelOppPeriodeModal';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'fakta/fakta-uttaksdokumentasjon-del-opp-periode-modal',
  component: DelOppPeriodeModal,
  decorators: [withIntl],
  args: {
    submit: action('button-click'),
    cancel: action('button-click'),
    periode: {
      fom: '2022-11-01',
      tom: '2022-11-23',
      type: UttakType.UTSETTELSE,
      årsak: UttakÅrsak.INNLEGGELSE_SØKER,
      aktivitetskravGrunnlag: [],
    },
  },
} satisfies Meta<typeof DelOppPeriodeModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const VisModalForÅDeleOppPeriode: Story = {};
