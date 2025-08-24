import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

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
      type: 'UTSETTELSE',
      årsak: 'INNLEGGELSE_SØKER',
      morsStillingsprosent: null,
      aktivitetskravGrunnlag: [],
    },
  },
} satisfies Meta<typeof DelOppPeriodeModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const VisModalForÅDeleOppPeriode: Story = {};
