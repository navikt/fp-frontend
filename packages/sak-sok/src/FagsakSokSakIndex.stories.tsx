import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import FagsakSokSakIndex from '@fpsak-frontend/sak-sok';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import { Fagsak } from '@fpsak-frontend/types';

export default {
  title: 'sak/sak-sok',
  component: FagsakSokSakIndex,
};

const Template: Story<{
  fagsaker: Fagsak[],
  searchResultAccessDenied?: { feilmelding: string },
}> = ({
  fagsaker,
  searchResultAccessDenied,
}) => {
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
  fagsaker: [{
    saksnummer: '1',
    fagsakYtelseType: fagsakYtelseType.FORELDREPENGER,
    relasjonsRolleType: '',
    status: fagsakStatus.OPPRETTET,
  }, {
    saksnummer: '2',
    fagsakYtelseType: fagsakYtelseType.ENGANGSSTONAD,
    status: fagsakStatus.OPPRETTET,
  }] as Fagsak[],
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
