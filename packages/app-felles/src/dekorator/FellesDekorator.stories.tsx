import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/internal/actions';

import type { DekoratorLenke } from '../../../sak/dekorator/src/typer/dekoratorLenke';
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
    tittel: 'Dette er en tittel',
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
