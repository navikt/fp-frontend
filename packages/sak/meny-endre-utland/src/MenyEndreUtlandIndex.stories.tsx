import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { FagsakMarkeringKode } from '@navikt/fp-kodeverk';

import { MenyEndreUtlandIndex } from './MenyEndreUtlandIndex';

const meta = {
  title: 'sak/sak-meny-endre-utland',
  component: MenyEndreUtlandIndex,
  args: {
    saksnummer: '123',
    endreFagsakMarkering: action('button-click'),
    lukkModal: action('button-click'),
    fagsakMarkeringerKodeverk: [
      { kode: FagsakMarkeringKode.BOSATT_UTLAND, navn: 'Bosatt utland', kodeverk: 'FAGSAK_MARKERING' },
      { kode: FagsakMarkeringKode.EØS_BOSATT_NORGE, navn: 'EØS bosatt Norge', kodeverk: 'FAGSAK_MARKERING' },
      { kode: FagsakMarkeringKode.SELVSTENDIG_NÆRING, navn: 'Næringsdrivende', kodeverk: 'FAGSAK_MARKERING' },
    ],
  },
} satisfies Meta<typeof MenyEndreUtlandIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
