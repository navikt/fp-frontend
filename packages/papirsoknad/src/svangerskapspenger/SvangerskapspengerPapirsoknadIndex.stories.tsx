import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { FagsakYtelseType, FamilieHendelseType, ForeldreType } from '@navikt/fp-kodeverk';
import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import { alleKodeverk, getIntlDecorator, withRouter } from '@navikt/fp-storybook-utils';

import { SvangerskapspengerPapirsoknadIndex } from './SvangerskapspengerPapirsoknadIndex';

import messages from '../../i18n/nb_NO.json';

const meta = {
  component: SvangerskapspengerPapirsoknadIndex,
  decorators: [withRouter, getIntlDecorator(messages)],
  args: {
    readOnly: false,
    alleKodeverk: alleKodeverk,
    onSubmit: values => {
      action('onSubmit')(values);
      return Promise.resolve();
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

export const ForFarVedFodsel: Story = {
  args: {
    soknadData: new SoknadData(FagsakYtelseType.SVANGERSKAPSPENGER, FamilieHendelseType.FODSEL, ForeldreType.FAR),
  },
};
