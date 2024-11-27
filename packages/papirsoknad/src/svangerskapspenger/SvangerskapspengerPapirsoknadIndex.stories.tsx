import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { FagsakYtelseType, FamilieHendelseType, ForeldreType } from '@navikt/fp-kodeverk';
import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import { alleKodeverk, getIntlDecorator, withRouter } from '@navikt/fp-storybook-utils';

import { SvangerskapspengerPapirsoknadIndex } from './SvangerskapspengerPapirsoknadIndex';

import messages from '../../i18n/nb_NO.json';

const meta = {
  title: 'papirsoknad/svangerskapspenger',
  component: SvangerskapspengerPapirsoknadIndex,
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
} satisfies Meta<typeof SvangerskapspengerPapirsoknadIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ForMorVedFødsel: Story = {
  args: {
    soknadData: new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, FamilieHendelseType.FODSEL, ForeldreType.MOR),
  },
};

export const ForMorVedAdopsjon: Story = {
  args: {
    soknadData: new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, FamilieHendelseType.ADOPSJON, ForeldreType.MOR),
  },
};

export const ForFarVedFodsel: Story = {
  args: {
    soknadData: new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, FamilieHendelseType.FODSEL, ForeldreType.FAR),
  },
};
