import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { FagsakYtelseType } from '@navikt/fp-kodeverk';
import { alleKodeverk, getIntlDecorator, withRouter } from '@navikt/fp-storybook-utils';
import type { Fagsak } from '@navikt/fp-types';

import { RegistrerPapirsoknadPanel } from './RegistrerPapirsoknadPanel';

import messages from '../i18n/nb_NO.json';

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
    lagreUfullstendig: (values: any) => {
      action('lagreUfullstendig')(values);
      return Promise.resolve(values);
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
