import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, boolean } from '@storybook/addon-knobs';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import FagsakSokSakIndex from '@fpsak-frontend/sak-sok';

import { Fagsak } from '@fpsak-frontend/types';

import alleKodeverk from '../mocks/alleKodeverk.json';

const FAGSAK_STATUS_KODEVERK = 'FAGSAK_STATUS';
const FAGSAK_YTELSE_KODEVERK = 'FAGSAK_YTELSE';

const fagsaker = [{
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
}];

export default {
  title: 'sak/sak-sok',
  component: FagsakSokSakIndex,
  decorators: [withKnobs],
};

export const visMeldingerPanel = () => {
  const [visResultat, toggleResultat] = useState(false);
  return (
    <FagsakSokSakIndex
      fagsaker={visResultat ? object('fagsaker', fagsaker as Fagsak[]) : []}
      searchFagsakCallback={() => toggleResultat(true) as any}
      searchResultReceived={boolean('searchResultReceived', false)}
      selectFagsakCallback={action('button-click')}
      searchStarted={boolean('searchStarted', false)}
      alleKodeverk={alleKodeverk as any}
    />
  );
};

export const visSøkDerEnIkkeHarAdgang = () => (
  <FagsakSokSakIndex
    fagsaker={[]}
    searchFagsakCallback={action('button-click') as any}
    searchResultReceived={boolean('searchResultReceived', false)}
    selectFagsakCallback={action('button-click')}
    searchStarted={boolean('searchStarted', false)}
    searchResultAccessDenied={object('searchResultAccessDenied', {
      feilmelding: 'Har ikke adgang',
    })}
    alleKodeverk={alleKodeverk as any}
  />
);
