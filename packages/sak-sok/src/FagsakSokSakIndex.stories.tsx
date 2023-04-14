import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import { fagsakYtelseType, fagsakStatus } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { FagsakEnkel } from '@navikt/fp-types';

import FagsakSokSakIndex from './FagsakSokSakIndex';

export default {
  title: 'sak/sak-sok',
  component: FagsakSokSakIndex,
};

const Template: Story<{
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
      fagsakYtelseType: fagsakYtelseType.FORELDREPENGER,
      relasjonsRolleType: '',
      status: fagsakStatus.OPPRETTET,
    },
    {
      saksnummer: '2',
      fagsakYtelseType: fagsakYtelseType.ENGANGSSTONAD,
      status: fagsakStatus.OPPRETTET,
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
