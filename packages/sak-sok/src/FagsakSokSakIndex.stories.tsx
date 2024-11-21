import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import { FagsakYtelseType, FagsakStatus } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { FagsakEnkel } from '@navikt/fp-types';

import FagsakSokSakIndex from './FagsakSokSakIndex';

export default {
  title: 'sak/sak-sok',
  component: FagsakSokSakIndex,
};

const Template: StoryFn<{
  fagsaker: FagsakEnkel[];
  searchResultAccessDenied?: { feilmelding: string };
}> = ({ fagsaker, searchResultAccessDenied }) => {
  const [visResultat, toggleResultat] = useState(false);
  return (
    <FagsakSokSakIndex
      fagsaker={visResultat ? fagsaker : []}
      searchFagsakCallback={() => toggleResultat(true) as any}
      searchResultReceived={visResultat}
      selectFagsakCallback={action('button-click')}
      searchStarted={false}
      searchResultAccessDenied={searchResultAccessDenied}
      alleKodeverk={alleKodeverk as any}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
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
};

export const IkkeAdgang = Template.bind({});
IkkeAdgang.args = {
  fagsaker: [],
  searchResultAccessDenied: {
    feilmelding: 'FagsakSokSakIndex.HarIkkeAdgang',
  },
};

export const IngenTreff = Template.bind({});
IngenTreff.args = {
  fagsaker: [],
};
