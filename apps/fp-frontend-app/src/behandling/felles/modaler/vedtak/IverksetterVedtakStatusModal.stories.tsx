import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { BehandlingResultatType } from '@navikt/fp-kodeverk';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { IverksetterVedtakStatusModal } from './IverksetterVedtakStatusModal';

import messages from '../../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'behandling/vedtak/IverksetterVedtakStatusModal',
  component: IverksetterVedtakStatusModal,
  decorators: [withIntl],
  args: {
    visModal: true,
    lukkModal: action('button-click'),
  },
} satisfies Meta<typeof IverksetterVedtakStatusModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const VisIverksetterVedtakInnvilget: Story = {};

export const VisIverksetterVedtakAvslatt: Story = {
  args: {
    behandlingsresultat: {
      type: BehandlingResultatType.AVSLATT,
      id: null,
      avslagsarsak: null,
      avslagsarsakFritekst: null,
      rettenTil: null,
      konsekvenserForYtelsen: null,
      vedtaksbrev: null,
      vedtaksbrevStatus: null,
      overskrift: null,
      fritekstbrev: null,
      harRedigertVedtaksbrev: null,
      erRevurderingMedUendretUtfall: null,
      skjæringstidspunkt: null,
      endretDekningsgrad: null,
      opphørsdato: null,
    },
  },
};
