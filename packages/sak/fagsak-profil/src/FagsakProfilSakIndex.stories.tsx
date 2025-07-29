import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';
import type { DecoratorFunction } from 'storybook/internal/types';

import { FagsakStatus, FagsakYtelseType } from '@navikt/fp-kodeverk';

import { FagsakProfilSakIndex } from './FagsakProfilSakIndex';

import '@navikt/ft-ui-komponenter/dist/style.css';

const withStylerovider: DecoratorFunction<ReactRenderer> = Story => (
  <div style={{ width: '600px', backgroundColor: 'white', padding: '30px' }}>
    <Story />
  </div>
);

const meta = {
  title: 'sak/sak-fagsak-profil',
  component: FagsakProfilSakIndex,
  decorators: [withStylerovider],
} satisfies Meta<typeof FagsakProfilSakIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    saksnummer: '232341251',
    fagsakYtelseType: {
      kode: FagsakYtelseType.FORELDREPENGER,
      kodeverk: 'FAGSAK_YTELSE_TYPE',
      navn: 'Foreldrepenger',
    },
    fagsakMarkeringTekster: ['Næring', 'Utland'],
    fagsakStatus: { kode: FagsakStatus.OPPRETTET, kodeverk: 'FAGSAK_STATUS', navn: 'Opprettet' },
    dekningsgrad: 100,
    toggleSideMeny: action('button-click'),
    visSideMeny: true,
  },
};
