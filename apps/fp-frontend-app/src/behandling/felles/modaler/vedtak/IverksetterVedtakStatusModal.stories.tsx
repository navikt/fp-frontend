import { BehandlingResultatType } from '@navikt/fp-kodeverk';
import { action } from '@storybook/addon-actions';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import { Meta, StoryObj } from '@storybook/react/*';
import messages from '../../../../../i18n/nb_NO.json';
import { IverksetterVedtakStatusModal } from './IverksetterVedtakStatusModal';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'app/vedtak/IverksetterVedtakStatusModal',
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
    },
  },
};
