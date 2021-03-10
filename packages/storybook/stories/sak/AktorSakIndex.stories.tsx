import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import AktorSakIndex from '@fpsak-frontend/sak-aktor';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import relasjonsRolleType from '@fpsak-frontend/kodeverk/src/relasjonsRolleType';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import { KjønnkodeEnum } from '@fpsak-frontend/types';

import alleKodeverk from '../mocks/alleKodeverk.json';
import withRouterProvider from '../../decorators/withRouter';

const fagsak = {
  saksnummerString: '35425245',
  sakstype: {
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
  decorators: [withKnobs, withRouterProvider],
};

export const visSakerOpprettetPaAktor = () => (
  <AktorSakIndex
    valgtAktorId="123"
    aktorInfo={{
      fagsaker: [fagsak, {
        saksnummerString: '123',
        ...fagsak,
      }],
      person: {
        navn: 'Espen Utvikler',
        kjønn: { kode: KjønnkodeEnum.MANN, kodeverk: '' },
        fødselsdato: '1979-01-01',
        fødselsnummer: '123456233',
      },
    }}
    alleKodeverk={alleKodeverk as any}
    finnPathToFagsak={() => 'path'}
  />
);

export const visningAvUgyldigAktorId = () => (
  <AktorSakIndex
    valgtAktorId="123"
    alleKodeverk={alleKodeverk as any}
    finnPathToFagsak={() => 'path'}
  />
);
