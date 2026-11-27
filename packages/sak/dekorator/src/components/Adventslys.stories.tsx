import { RawIntlProvider } from 'react-intl';

import { InternalHeader } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';
import type { Meta, StoryObj } from '@storybook/react';

import { Adventslys } from './Adventslys';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

const meta = {
  title: 'sak/sak-dekoratør/adventslys',
  component: Adventslys,
  decorators: [
    Story => (
      <RawIntlProvider value={intl}>
        <InternalHeader>
          <InternalHeader.Title>Svangerskap, fødsel og adopsjon</InternalHeader.Title>
          <Story />
        </InternalHeader>
      </RawIntlProvider>
    ),
  ],
} satisfies Meta<typeof Adventslys>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FørsteSøndagIAdvent: Story = {
  args: { dato: new Date(2026, 10, 29) },
};

export const AndreSøndagIAdvent: Story = {
  args: { dato: new Date(2026, 11, 6) },
};

export const TredjeSøndagIAdvent: Story = {
  args: { dato: new Date(2026, 11, 13) },
};

export const FjerdeSøndagIAdvent: Story = {
  args: { dato: new Date(2026, 11, 20) },
};

export const Jul: Story = {
  args: { dato: new Date(2026, 11, 26) },
};

export const UtenforAdvent: Story = {
  args: { dato: new Date(2026, 10, 28) },
};

export const VelgDato: Story = {
  args: { dato: new Date(2026, 11, 6) },
  argTypes: {
    dato: { control: 'date' },
  },
  // Dato-kontrollen i Storybook gir et tidsstempel, ikke et Date-objekt
  render: ({ dato }) => <Adventslys dato={dato ? new Date(dato) : undefined} />,
};
