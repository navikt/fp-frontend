import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, boolean } from '@storybook/addon-knobs';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import FagsakSokSakIndex from '@fpsak-frontend/sak-sok';

import { Fagsak } from '@fpsak-frontend/types';
import withReduxProvider from '../../decorators/withRedux';

import alleKodeverk from '../mocks/alleKodeverk.json';

const FAGSAK_STATUS_KODEVERK = 'FAGSAK_STATUS';
const FAGSAK_YTELSE_KODEVERK = 'FAGSAK_YTELSE';

const fagsaker = [{
  saksnummerString: '1',
  sakstype: {
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
  barnFodt: '2019-01-01',
  opprettet: '2017-08-02T00:54:25.455',
}, {
  saksnummerString: '2',
  sakstype: {
    kode: fagsakYtelseType.ENGANGSSTONAD,
    kodeverk: FAGSAK_YTELSE_KODEVERK,
  },
  status: {
    kode: fagsakStatus.OPPRETTET,
    kodeverk: FAGSAK_STATUS_KODEVERK,
  },
  barnFodt: '2019-01-01',
  opprettet: '2017-08-02T00:54:25.455',
}];

export default {
  title: 'sak/sak-sok',
  component: FagsakSokSakIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visMeldingerPanel = () => {
  const [visResultat, toggleResultat] = useState(false);
  return (
    <FagsakSokSakIndex
      fagsaker={visResultat ? object('fagsaker', fagsaker as Fagsak[]) : []}
      searchFagsakCallback={() => toggleResultat(true)}
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
    searchFagsakCallback={action('button-click')}
    searchResultReceived={boolean('searchResultReceived', false)}
    selectFagsakCallback={action('button-click')}
    searchStarted={boolean('searchStarted', false)}
    searchResultAccessDenied={object('searchResultAccessDenied', {
      feilmelding: 'Har ikke adgang',
    })}
    alleKodeverk={alleKodeverk as any}
  />
);
