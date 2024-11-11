import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FagsakYtelseType } from '@navikt/ft-kodeverk';

import { foreldreType, familieHendelseType } from '@navikt/fp-kodeverk';
import { alleKodeverk, getIntlDecorator, withRouter } from '@navikt/fp-storybook-utils';

import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import { EngangsstonadPapirsoknadIndex } from './EngangsstonadPapirsoknadIndex';

import messages from '../../i18n/nb_NO.json';

const meta = {
  title: 'papirsoknad/engangstonad',
  component: EngangsstonadPapirsoknadIndex,
  decorators: [withRouter, getIntlDecorator(messages)],
  args: {
    readOnly: false,
    alleKodeverk: alleKodeverk as any,
    onSubmit: (values: any) => {
      action('onSubmit')(values);
      return Promise.resolve(values);
    },
    onSubmitUfullstendigsoknad: () => {
      action('onSubmitUfullstendigsoknad')();
      return Promise.resolve();
    },
  },
} satisfies Meta<typeof EngangsstonadPapirsoknadIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ForMorVedFødsel: Story = {
  args: {
    soknadData: new SoknadData(FagsakYtelseType.ENGANGSSTONAD, familieHendelseType.FODSEL, foreldreType.MOR),
  },
};

export const ForMorVedAdopsjon: Story = {
  args: {
    soknadData: new SoknadData(FagsakYtelseType.ENGANGSSTONAD, familieHendelseType.ADOPSJON, foreldreType.MOR),
  },
};

export const ForFarVedFødsel: Story = {
  args: {
    soknadData: new SoknadData(FagsakYtelseType.ENGANGSSTONAD, familieHendelseType.FODSEL, foreldreType.FAR),
  },
};
