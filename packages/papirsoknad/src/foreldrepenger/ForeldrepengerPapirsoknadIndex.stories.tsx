import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FagsakYtelseType } from '@navikt/ft-kodeverk';

import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import { foreldreType, familieHendelseType } from '@navikt/fp-kodeverk';
import { alleKodeverk, getIntlDecorator, withRouter } from '@navikt/fp-storybook-utils';

import { ForeldrepengerPapirsoknadIndex } from './ForeldrepengerPapirsoknadIndex';

import messages from '../../i18n/nb_NO.json';

const meta = {
  title: 'papirsoknad/foreldrepenger',
  component: ForeldrepengerPapirsoknadIndex,
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
    erEndringssøknad: false,
    fagsakPersonnummer: '12345678910',
  },
} satisfies Meta<typeof ForeldrepengerPapirsoknadIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ForMorVedFødsel: Story = {
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.MOR),
  },
};

export const ForMorVedAdopsjon: Story = {
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, familieHendelseType.ADOPSJON, foreldreType.MOR),
  },
};

export const ForMorVedOmsorg: Story = {
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, familieHendelseType.OMSORG, foreldreType.MOR),
  },
};

export const ForFarVedFødsel: Story = {
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.FAR),
  },
};
