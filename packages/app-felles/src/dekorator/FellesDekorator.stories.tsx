import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import type { DekoratorLenke } from '@navikt/fp-sak-dekorator';

import { FellesDekorator } from './FellesDekorator';

const interneLenker: DekoratorLenke[] = [
  {
    tekst: 'Dette er en lenke',
    callback: () => action('Lenke klikket: Foreldrepenger'),
  },
];

const meta = {
  title: 'FellesDekorator',
  component: FellesDekorator,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    tittel: 'Svangerskap, fødsel og adopsjon',
    interneLenker,
    ansattnavn: 'Ola Nordmann',
    queryStrings: {
      errorcode: undefined,
      errormessage: undefined,
    },
    setSiteHeight: () => undefined,
    gotToAppRoot: () => undefined,
    crashMessage: undefined,
    hideErrorMessages: false,
    theme: 'light',
    setTheme: action('setTheme'),
  },
} satisfies Meta<typeof FellesDekorator>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const VisFeilmeldingSomLiggIUrl: Story = {
  args: {
    queryStrings: {
      errorcode: 'Rest.ErrorMessage.General',
      errormessage: 'Dette er en feilmelding',
    },
  },
};

export const VisTekniskFeilmelding: Story = {
  args: {
    crashMessage: 'test is undefined',
  },
};

export const SkjulFeilmelding: Story = {
  args: {
    crashMessage: 'test is undefined',
    hideErrorMessages: true,
  },
};
