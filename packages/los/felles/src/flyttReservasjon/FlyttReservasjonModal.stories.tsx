import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { FlyttReservasjonModal } from './FlyttReservasjonModal';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/FlyttReservasjonModal',
  component: FlyttReservasjonModal,
  decorators: [withIntl],
  args: {
    closeModal: action('button-click'),
    hentSaksbehandler: action('button-click'),
    resetHentSaksbehandler: action('button-click'),
    hentSaksbehandlerIsPending: false,
    hentSaksbehandlerIsSuccess: false,
    flyttOppgavereservasjon: () => Promise.resolve(),
  },
  render: storyArgs => {
    const [args, setArgs] = useState(storyArgs);

    const hentSaksbehandler = (brukerIdent: string) => {
      args.hentSaksbehandler?.(brukerIdent);
      setArgs(oldArgs => ({ ...oldArgs, hentSaksbehandlerIsPending: false, hentSaksbehandlerIsSuccess: true }));
    };

    return <FlyttReservasjonModal {...args} hentSaksbehandler={hentSaksbehandler} />;
  },
} satisfies Meta<typeof FlyttReservasjonModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    saksbehandler: undefined,
  },
};

export const MedTreffPåSøk: Story = {
  args: {
    saksbehandler: {
      brukerIdent: 'R232323',
      navn: 'Espen Utvikler',
      ansattAvdeling: 'Avdeling A',
    },
  },
};
