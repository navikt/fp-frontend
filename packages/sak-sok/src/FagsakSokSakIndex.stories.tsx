import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { FagsakStatus,FagsakYtelseType } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { FagsakEnkel } from '@navikt/fp-types';

import { FagsakSokSakIndex } from './FagsakSokSakIndex';

const meta = {
  title: 'sak/sak-sok',
  component: FagsakSokSakIndex,
  args: {
    selectFagsakCallback: action('button-click'),
    searchFagsakCallback: action('button-click') as (params?: { searchString: string }) => Promise<FagsakEnkel[]>,
    alleKodeverk: alleKodeverk as any,
    searchResultReceived: false,
    searchStarted: false,
  },
  render: storyArgs => {
    const [args, setArgs] = useState(storyArgs);

    const searchFagsakCallback = (params?: { searchString: string }) => {
      args.searchFagsakCallback?.(params);
      setArgs(oldArgs => ({ ...oldArgs, searchResultReceived: true }));
      return Promise.resolve<FagsakEnkel[] | undefined>(args.fagsaker);
    };

    return <FagsakSokSakIndex {...args} searchFagsakCallback={searchFagsakCallback} />;
  },
} satisfies Meta<typeof FagsakSokSakIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fagsaker: [
      {
        saksnummer: '1',
        fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
        relasjonsRolleType: '',
        status: FagsakStatus.OPPRETTET,
      },
      {
        saksnummer: '2',
        fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
        status: FagsakStatus.OPPRETTET,
      },
    ] as FagsakEnkel[],
  },
};

export const IkkeAdgang: Story = {
  args: {
    fagsaker: [],
    searchResultAccessDenied: {
      feilmelding: 'FagsakSokSakIndex.HarIkkeAdgang',
    },
  },
};

export const IngenTreff: Story = {
  args: {
    fagsaker: [],
  },
};
