import { useEffect } from 'react';

import type { Decorator, Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { SnarvegerProvider, useSnarvegerContext } from './SnarvegerContext';
import { SnarvegerHjelpModal } from './SnarvegerHjelpModal';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const withSnarvegerProvider: Decorator = Story => (
  <SnarvegerProvider>
    <Story />
  </SnarvegerProvider>
);

const ÅpenSnarvegerHjelpModal = () => {
  const { settSnarveiModalÅpen } = useSnarvegerContext();

  useEffect(() => {
    settSnarveiModalÅpen(true);
  }, [settSnarveiModalÅpen]);

  return <SnarvegerHjelpModal />;
};

const meta = {
  title: 'snarveger/SnarvegerHjelpModal',
  component: SnarvegerHjelpModal,
  decorators: [withIntl, withSnarvegerProvider],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SnarvegerHjelpModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Åpen: Story = {
  render: () => <ÅpenSnarvegerHjelpModal />,
};
