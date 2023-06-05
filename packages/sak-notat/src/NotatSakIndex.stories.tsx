import React from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Fagsak } from '@navikt/fp-types';

import NotatSakIndex from './NotatSakIndex';

export default {
  title: 'sak/sak-notat',
  component: NotatSakIndex,
};

const Template: StoryFn<{
  fagsak: Fagsak;
  lagreNotat: (beskrivelse: string) => void;
}> = ({ fagsak, lagreNotat }) => <NotatSakIndex fagsak={fagsak} lagreNotat={lagreNotat} />;

export const Default = Template.bind({});
Default.args = {
  fagsak: {
    saksnotat: [
      {
        notat: 'Dette er et notat',
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
  } as Fagsak,
  lagreNotat: action('button-click') as (data: any) => Promise<any>,
};
