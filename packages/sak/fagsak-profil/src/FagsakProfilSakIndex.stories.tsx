import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';
import type { DecoratorFunction } from 'storybook/internal/types';

import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { FagsakProfilSakIndex } from './FagsakProfilSakIndex';

import '@navikt/ft-ui-komponenter/dist/style.css';

const withStylerovider: DecoratorFunction<ReactRenderer> = Story => (
  <div style={{ width: '600px', backgroundColor: 'var(--ax-bg-default)', padding: '30px' }}>
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
    fagsakYtelseType: alleKodeverk.FagsakYtelseType.find(ytelse => ytelse.kode === 'FP')!,
    fagsakMarkeringTekster: ['Næring', 'Utland'],
    fagsakStatus: alleKodeverk.FagsakStatus.find(status => status.kode === 'OPPR')!,
    dekningsgrad: 100,
    toggleSideMeny: action('button-click'),
    visSideMeny: true,
  },
};
