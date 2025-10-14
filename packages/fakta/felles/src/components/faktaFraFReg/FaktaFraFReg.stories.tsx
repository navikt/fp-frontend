import type { Meta, StoryObj } from '@storybook/react';

import { FaktaFraFReg } from './FaktaFraFReg';

const meta = {
  component: FaktaFraFReg,
  args: {},
} satisfies Meta<typeof FaktaFraFReg>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IngenBarn: Story = {
  args: {
    barn: [],
  },
};

export const EttBarn: Story = {
  args: {
    barn: [
      {
        fødselsdato: '2025-06-03',
      },
    ],
  },
};

export const EttBarnMedDødsdato: Story = {
  args: {
    barn: [
      {
        fødselsdato: '2025-05-28',
        dødsdato: '2025-06-01',
      },
    ],
  },
};

export const ToBarnMedEnDødsdato: Story = {
  args: {
    barn: [
      {
        fødselsdato: '2025-05-01',
        dødsdato: '2025-05-02',
      },
      {
        fødselsdato: '2025-05-03',
      },
    ],
  },
};
