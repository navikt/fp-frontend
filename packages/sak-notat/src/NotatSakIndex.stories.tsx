import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Saksnotat } from '@navikt/fp-types';

import dayjs from 'dayjs';
import NotatSakIndex from './NotatSakIndex';

export default {
  title: 'sak/sak-notat',
  component: NotatSakIndex,
};

const Template: StoryFn<{
  saksnotater: Saksnotat[];
  lagreNotat: (params: { saksnummer: string; notat: string }) => Promise<any>;
  kanSaksbehandle: boolean;
}> = ({ saksnotater, lagreNotat, kanSaksbehandle }) => {
  const [notater, setNotater] = useState(saksnotater);

  const lagre = (params: { saksnummer: string; notat: string }) => {
    setNotater(old =>
      old.concat({
        opprettetTidspunkt: dayjs().format('YYYY-MM-DD HH:mm'),
        opprettetAv: 'Saksbehandler Espen',
        notat: params.notat,
      }),
    );
    return lagreNotat(params);
  };

  return (
    <div style={{ height: '700px', width: '800px' }}>
      <NotatSakIndex
        saksbehandlerNavn="Saksbehandler Espen"
        saksnummer="12343432"
        notater={notater}
        lagreNotat={lagre}
        kanSaksbehandle={kanSaksbehandle}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  saksnotater: [
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
  lagreNotat: action('button-click') as (data: any) => Promise<any>,
  kanSaksbehandle: true,
};

export const ErVeileder = Template.bind({});
ErVeileder.args = {
  saksnotater: [
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
  lagreNotat: action('button-click') as (data: any) => Promise<any>,
  kanSaksbehandle: false,
};
