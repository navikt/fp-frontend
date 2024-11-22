import { alleKodeverk, getIntlDecorator, withRouter } from '@navikt/fp-storybook-utils';
import messages from '../i18n/nb_NO.json';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { RegistrerPapirsoknadPanel } from './RegistrerPapirsoknadPanel';
import { Fagsak } from '@navikt/fp-types';
import { FagsakYtelseType } from '@navikt/fp-kodeverk';

const meta = {
  component: RegistrerPapirsoknadPanel,
  decorators: [withRouter, getIntlDecorator(messages)],
  args: {
    readOnly: false,
    kodeverk: alleKodeverk as any,
    lagreFullstendig: (values: any) => {
      action('lagreFullstendig')(values);
      return Promise.resolve(values);
    },
    lagreUfullstendig: (...args) => {
      action('lagreUfullstendig')(args);
      return Promise.resolve();
    },
  },
} satisfies Meta<typeof RegistrerPapirsoknadPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ForeldrepengerFørstegang: Story = {
  args: {
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      bruker: { fødselsnummer: '00000000000' },
    } as Fagsak,
    erEndringssøknad: false,
  },
};

export const ForeldrepengerEndring: Story = {
  args: {
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      bruker: { fødselsnummer: '00000000000' },
    } as Fagsak,
    erEndringssøknad: true,
  },
};

export const SvangerskapspengerFørstegang: Story = {
  args: {
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
      bruker: { fødselsnummer: '00000000000' },
    } as Fagsak,
    erEndringssøknad: false,
  },
};

export const SvangerskapspengerEndring: Story = {
  args: {
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
      bruker: { fødselsnummer: '00000000000' },
    } as Fagsak,
    erEndringssøknad: true,
  },
};
export const EngangsstonadFørstegang: Story = {
  args: {
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
      bruker: { fødselsnummer: '00000000000' },
    } as Fagsak,
    erEndringssøknad: false,
  },
};

export const EngangsstonadEndring: Story = {
  args: {
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
      bruker: { fødselsnummer: '00000000000' },
    } as Fagsak,
    erEndringssøknad: true,
  },
};
