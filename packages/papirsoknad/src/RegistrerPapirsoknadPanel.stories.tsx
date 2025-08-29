import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { alleKodeverk, getIntlDecorator, withRouter } from '@navikt/fp-storybook-utils';
import type { Behandling, Fagsak } from '@navikt/fp-types';

import { RegistrerPapirsoknadPanel } from './RegistrerPapirsoknadPanel';

import messages from '../i18n/nb_NO.json';

const meta = {
  component: RegistrerPapirsoknadPanel,
  decorators: [withRouter, getIntlDecorator(messages)],
  args: {
    readOnly: false,
    kodeverk: alleKodeverk,
    lagrePapirsøknad: values => {
      action('lagrePapirsøknad')(values);
      return Promise.resolve({} as Behandling);
    },
  },
} satisfies Meta<typeof RegistrerPapirsoknadPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ForeldrepengerFørstegangssøknad: Story = {
  args: {
    fagsak: {
      fagsakYtelseType: 'FP',
      bruker: { fødselsnummer: '00000000000' },
    } as Fagsak,
    erEndringssøknad: false,
  },
};

export const ForeldrepengerEndringssøknad: Story = {
  args: {
    fagsak: {
      fagsakYtelseType: 'FP',
      bruker: { fødselsnummer: '00000000000' },
    } as Fagsak,
    erEndringssøknad: true,
  },
};

export const SvangerskapspengerFørstegangssøknad: Story = {
  args: {
    fagsak: {
      fagsakYtelseType: 'SVP',
      bruker: { fødselsnummer: '00000000000' },
    } as Fagsak,
    erEndringssøknad: false,
  },
};

export const EngangsstonadFørstegangssøknad: Story = {
  args: {
    fagsak: {
      fagsakYtelseType: 'ES',
      bruker: { fødselsnummer: '00000000000' },
    } as Fagsak,
    erEndringssøknad: false,
  },
};
