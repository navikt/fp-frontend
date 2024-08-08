import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MenyEndreUtlandIndex from './MenyEndreUtlandIndex';
import { FagsakMarkeringKode } from '@navikt/fp-kodeverk';

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
      { kode: FagsakMarkeringKode.BOSATT_UTLAND, navn: 'Bosatt utland', kodeverk: 'FAGSAK_MARKERING' },
      { kode: FagsakMarkeringKode.EØS_BOSATT_NORGE, navn: 'EØS bosatt Norge', kodeverk: 'FAGSAK_MARKERING' },
      { kode: FagsakMarkeringKode.SELVSTENDIG_NÆRING, navn: 'Næringsdrivende', kodeverk: 'FAGSAK_MARKERING' },
    ]}
  />
);

export const Default = Template.bind({});
Default.args = {
  endreFagsakMarkering: action('button-click'),
  lukkModal: action('button-click'),
};
