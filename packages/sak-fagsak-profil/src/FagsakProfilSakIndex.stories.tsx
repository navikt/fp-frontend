import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import { withRouter } from '@fpsak-frontend/storybook-utils';

import FagsakProfilSakIndex from './FagsakProfilSakIndex';

export default {
  title: 'sak/sak-fagsak-profil',
  component: FagsakProfilSakIndex,
  decorators: [withRouter],
};

const FAGSAK_STATUS_KODEVERK = 'FAGSAK_STATUS';
const FAGSAK_YTELSE_KODEVERK = 'FAGSAK_YTELSE';

const Template: Story = () => (
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

export const Default = Template.bind({});
