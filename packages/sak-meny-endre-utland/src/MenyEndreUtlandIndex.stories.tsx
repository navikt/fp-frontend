import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MenyEndreUtlandIndex from './MenyEndreUtlandIndex';

export default {
  title: 'sak/sak-meny-endre-utland',
  component: MenyEndreUtlandIndex,
};

const Template: StoryFn<{
  endreFagsakMarkering: () => void;
  lukkModal: () => void;
}> = ({ endreFagsakMarkering, lukkModal }) => (
  <MenyEndreUtlandIndex
    saksnummer="123"
    endreFagsakMarkering={endreFagsakMarkering}
    lukkModal={lukkModal}
    fagsakMarkeringerKodeverk={[
      { kode: 'NASJONAL', navn: 'Nasjonal', kodeverk: 'FAGSAK_MARKERING' },
      { kode: 'BOSATT_NORGE', navn: 'Bosatt Norge', kodeverk: 'FAGSAK_MARKERING' },
      { kode: 'BOSATT_UTLAND', navn: 'Bosatt utland', kodeverk: 'FAGSAK_MARKERING' },
      { kode: 'EØS_BOSATT_I_NORGE', navn: 'EØS bosatt Norge', kodeverk: 'FAGSAK_MARKERING' },
      { kode: 'NÆRINGSDRIVENDE', navn: 'Næringsdrivende', kodeverk: 'FAGSAK_MARKERING' },
    ]}
  />
);

export const Default = Template.bind({});
Default.args = {
  endreFagsakMarkering: action('button-click'),
  lukkModal: action('button-click'),
};
