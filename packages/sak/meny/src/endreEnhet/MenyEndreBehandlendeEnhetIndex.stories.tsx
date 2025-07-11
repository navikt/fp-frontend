import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { MenyEndreBehandlendeEnhetIndex } from './MenyEndreBehandlendeEnhetIndex';

const meta = {
  title: 'sak/sak-meny-endre-enhet',
  component: MenyEndreBehandlendeEnhetIndex,
  args: {
    nyBehandlendeEnhet: action('button-click'),
    lukkModal: action('button-click'),
  },
} satisfies Meta<typeof MenyEndreBehandlendeEnhetIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    behandlendeEnhetId: '4292',
    behandlendeEnhetNavn: 'Nav klageinstans Midt-Norge',
    behandlendeEnheter: [
      {
        enhetId: '4292',
        enhetNavn: 'Nav klageinstans Midt-Norge',
      },
      {
        enhetId: '1000',
        enhetNavn: 'Nav Vikafossen',
      },
    ],
  },
};
