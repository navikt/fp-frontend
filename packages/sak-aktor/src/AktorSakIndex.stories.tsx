import React from 'react';
import { Story } from '@storybook/react';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import relasjonsRolleType from '@fpsak-frontend/kodeverk/src/relasjonsRolleType';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import { KjønnkodeEnum, Aktor } from '@fpsak-frontend/types';
import { withRouter, alleKodeverk } from '@fpsak-frontend/storybook-utils';

import AktorSakIndex from './AktorSakIndex';

const fagsak = {
  saksnummer: '35425245',
  fagsakYtelseType: {
    kode: fagsakYtelseType.FORELDREPENGER,
    kodeverk: '',
  },
  relasjonsRolleType: {
    kode: relasjonsRolleType.MOR,
    kodeverk: '',
  },
  status: {
    kode: fagsakStatus.UNDER_BEHANDLING,
    kodeverk: '',
  },
  barnFodt: '2020-01-01',
  opprettet: '2020-01-01',
  endret: '2020-01-01',
  antallBarn: 1,
  kanRevurderingOpprettes: false,
  skalBehandlesAvInfotrygd: false,
  dekningsgrad: 100,
};

export default {
  title: 'sak/sak-aktor',
  component: AktorSakIndex,
  decorators: [withRouter],
};

const Template: Story<{
  aktorInfo?: Aktor;
}> = ({
  aktorInfo,
}) => (
  <AktorSakIndex
    valgtAktorId="123"
    aktorInfo={aktorInfo}
    alleKodeverk={alleKodeverk as any}
    finnPathToFagsak={() => 'path'}
  />
);

export const Default = Template.bind({});
Default.args = {
  aktorInfo: {
    fagsaker: [fagsak, {
      ...fagsak,
      saksnummer: '123',
    }],
    person: {
      navn: 'Espen Utvikler',
      kjønn: { kode: KjønnkodeEnum.MANN, kodeverk: '' },
      fødselsdato: '1979-01-01',
      fødselsnummer: '123456233',
      aktørId: '2323',
    },
  },
};

export const UgyldigAktørId = Template.bind({});
