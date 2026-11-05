import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { CardSelect } from './CardSelect';

const meta = {
  title: 'sak/sak-behandling-velger/CardSelect',
  component: CardSelect,
  args: {
    options: [
      {
        value: 'epost',
        label: (
          <div>
            <strong>E-post</strong>
            <p>Varsel i innboksen</p>
            <button type="button" onClick={action('vis-detaljer')}>
              Vis detaljer
            </button>
          </div>
        ),
        ariaLabel: 'E-post',
      },
      {
        value: 'sms',
        label: (
          <span>
            <strong>SMS</strong> <small>Til mobil</small>
          </span>
        ),
      },
    ],
    value: 'sms',
    placeholder: (
      <div>
        <strong>Velg kontaktmåte</strong>
        <p>Hvordan vil du bli varslet?</p>
      </div>
    ),
    emptyContent: <p>Ingen kontaktmåter er tilgjengelige</p>,
    open: false,
    openLabel: 'Åpne valg',
    closeLabel: 'Lukk valg',
    onOpenChange: action('åpne-lukk'),
    onChange: action('velg'),
  },
  render: function Render(args) {
    const [open, setOpen] = useState(args.open);
    const [value, setValue] = useState(args.value);

    return (
      <CardSelect
        {...args}
        open={open}
        value={value}
        onOpenChange={åpen => {
          args.onOpenChange(åpen);
          setOpen(åpen);
        }}
        onChange={nyVerdi => {
          args.onChange(nyVerdi);
          setValue(nyVerdi);
        }}
      />
    );
  },
} satisfies Meta<typeof CardSelect>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Unselected: Story = {
  args: { value: undefined },
};

export const SingleOption: Story = {
  args: {
    value: undefined,
    options: [{ value: 'sms', label: <strong>SMS</strong> }],
  },
};

export const Empty: Story = {
  args: { options: [], value: undefined },
};
