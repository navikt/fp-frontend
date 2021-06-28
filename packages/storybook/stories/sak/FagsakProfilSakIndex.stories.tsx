import React from 'react';
import { Knapp } from 'nav-frontend-knapper';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import FagsakProfilSakIndex from '@fpsak-frontend/sak-fagsak-profil';

import withRouterProvider from '../../decorators/withRouter';

export default {
  title: 'sak/sak-fagsak-profil',
  component: FagsakProfilSakIndex,
  decorators: [withRouterProvider],
};

const FAGSAK_STATUS_KODEVERK = 'FAGSAK_STATUS';
const FAGSAK_YTELSE_KODEVERK = 'FAGSAK_YTELSE';

export const visPanelForValgAvBehandlinger = () => (
  <div style={{ width: '600px', backgroundColor: 'white', padding: '30px' }}>
    <FagsakProfilSakIndex
      saksnummer="232341251"
      fagsakYtelseType={{ kode: fagsakYtelseType.FORELDREPENGER, kodeverk: FAGSAK_YTELSE_KODEVERK, navn: 'Foreldrepenger' }}
      fagsakStatus={{ kode: fagsakStatus.OPPRETTET, kodeverk: FAGSAK_STATUS_KODEVERK, navn: 'Opprettet' }}
      renderBehandlingMeny={() => (
        <Knapp>Meny (Placeholder)</Knapp>
      )}
      renderBehandlingVelger={() => <div>Liste (placeholder)</div>}
      dekningsgrad={100}
    />
  </div>
);
