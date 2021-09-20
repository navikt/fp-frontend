import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import FagsakSokSakIndex from '@fpsak-frontend/sak-sok';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import { Fagsak } from '@fpsak-frontend/types';

const FAGSAK_STATUS_KODEVERK = 'FAGSAK_STATUS';
const FAGSAK_YTELSE_KODEVERK = 'FAGSAK_YTELSE';

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
    fagsakYtelseType: {
      kode: fagsakYtelseType.FORELDREPENGER,
      kodeverk: FAGSAK_YTELSE_KODEVERK,
    },
    relasjonsRolleType: {
      kode: '',
      kodeverk: '',
    },
    status: {
      kode: fagsakStatus.OPPRETTET,
      kodeverk: FAGSAK_STATUS_KODEVERK,
    },
  }, {
    saksnummer: '2',
    fagsakYtelseType: {
      kode: fagsakYtelseType.ENGANGSSTONAD,
      kodeverk: FAGSAK_YTELSE_KODEVERK,
    },
    status: {
      kode: fagsakStatus.OPPRETTET,
      kodeverk: FAGSAK_STATUS_KODEVERK,
    },
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
