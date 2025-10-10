import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import { action } from 'storybook/actions';

import { NotatSakIndex } from './NotatSakIndex';

const meta = {
  title: 'sak/sak-notat',
  component: NotatSakIndex,
  args: {
    saksbehandlerNavn: 'Saksbehandler Espen',
    saksnummer: '12343432',
    lagreNotat: action('button-click'),
  },
  render: storyArgs => {
    const [args, setArgs] = useState(storyArgs);

    const lagreNotat = (params: { saksnummer: string; notat: string }) => {
      args.lagreNotat(params);
      setArgs(oldArgs => ({
        ...oldArgs,
        notater: oldArgs.notater.concat({
          opprettetTidspunkt: dayjs().format(),
          opprettetAv: 'Saksbehandler Espen',
          notat: params.notat,
        }),
      }));
      return Promise.resolve<void | undefined>(undefined);
    };

    return (
      <div style={{ height: '700px', width: '800px' }}>
        <NotatSakIndex {...args} lagreNotat={lagreNotat} />
      </div>
    );
  },
} satisfies Meta<typeof NotatSakIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    notater: [
      {
        notat: 'Dette er et notat skrevet av Espen som nå er innlogget',
        opprettetAv: 'Saksbehandler Espen',
        opprettetTidspunkt: '2022-08-02T00:54:25.455',
      },
      {
        notat: 'Dette er et tredje notat',
        opprettetAv: 'Saksbehandler Eva',
        opprettetTidspunkt: '2022-09-02T11:12:25.455',
      },
      {
        notat: 'Dette er et annet notat',
        opprettetAv: 'Saksbehandler Eva',
        opprettetTidspunkt: '2022-09-02T00:23:25.455',
      },
    ],
    kanSaksbehandle: true,
  },
};

export const ErVeileder: Story = {
  args: {
    notater: [
      {
        notat: 'Dette er et notat skrevet av Espen som nå er innlogget',
        opprettetAv: 'Saksbehandler Espen',
        opprettetTidspunkt: '2022-08-02T00:54:25.455',
      },
      {
        notat: 'Dette er et tredje notat skrevet av Eva',
        opprettetAv: 'Saksbehandler Eva',
        opprettetTidspunkt: '2022-09-02T11:12:25.455',
      },
      {
        notat: 'Dette er et annet notat av Eva',
        opprettetAv: 'Saksbehandler Eva',
        opprettetTidspunkt: '2022-09-02T00:23:25.455',
      },
    ],
    kanSaksbehandle: false,
  },
};
