import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import personstatusType from '@fpsak-frontend/kodeverk/src/personstatusType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import relasjonsRolleType from '@fpsak-frontend/kodeverk/src/relasjonsRolleType';
import VisittkortSakIndex from '@fpsak-frontend/sak-visittkort';
import { KjønnkodeEnum } from '@fpsak-frontend/types';

export default {
  title: 'sak/sak-visittkort',
  component: VisittkortSakIndex,
  decorators: [withKnobs],
};

const fagsak = {
  saksnummer: 123456,
  sakstype: {
    kode: fagsakYtelseType.FORELDREPENGER,
    kodeverk: 'SAKSTYPE',
  },
  relasjonsRolleType: {
    kode: relasjonsRolleType.MOR,
    kodeverk: 'RELASJONS_ROLLE_TYPE',
  },
  status: {
    kode: fagsakStatus.LOPENDE,
    kodeverk: 'STATUS',
  },
  barnFodt: '20120-01-01',
  opprettet: '20120-01-01',
  endret: '20120-01-01',
  antallBarn: 1,
  kanRevurderingOpprettes: false,
  skalBehandlesAvInfotrygd: false,
  dekningsgrad: 100,
};

const fagsakPerson = {
  navn: 'Espen Utvikler',
  fodselsdato: '1979-01-01',
  personnummer: '1234567',
  kjønn: { kode: KjønnkodeEnum.MANN, kodeverk: '' },
  personstatusType: {
    kode: personstatusType.BOSATT,
    kodeverk: 'PERSONSTATUS_TYPE',
  },
};

const fagsakPersonAnnenPart = {
  navn: 'Klara Ku',
  fodselsdato: '1980-01-01',
  personnummer: '6565656',
  kjønn: { kode: KjønnkodeEnum.KVINNE, kodeverk: '' },
  personstatusType: {
    kode: personstatusType.BOSATT,
    kodeverk: 'PERSONSTATUS_TYPE',
  },
};

const fagsakPersonerUtenAnnenPart = {
  bruker: fagsakPerson,
};

const fagsakPersonerMedAnnenPart = {
  bruker: fagsakPerson,
  annenPart: fagsakPersonAnnenPart,
};

const familieHendelse = {
  oppgitt: {
    skjaringstidspunkt: '2020-01-01',
    avklartBarn: [],
    termindato: '2020-01-21',
    soknadType: {
      kode: soknadType.FODSEL,
      kodeverk: 'SOKNAD_TYPE',
    },
  },
  gjeldende: {
    skjaringstidspunkt: '2020-01-01',
    soknadType: {
      kode: soknadType.FODSEL,
      kodeverk: 'SOKNAD_TYPE',
    },
  },
  register: {
    skjaringstidspunkt: '2020-01-01',
    soknadType: {
      kode: soknadType.FODSEL,
      kodeverk: 'SOKNAD_TYPE',
    },
  },
};

export const visVisittkortDerEnIkkeHarAnnenPart = () => (
  <VisittkortSakIndex
    fagsak={fagsak}
    fagsakPersoner={fagsakPersonerUtenAnnenPart}
    familieHendelse={familieHendelse}
  />
);

export const visVisittkortNårEnHarPersonopplysningerForBeggeParter = () => (
  <VisittkortSakIndex
    fagsak={fagsak}
    fagsakPersoner={fagsakPersonerMedAnnenPart}
    familieHendelse={familieHendelse}
    lenkeTilAnnenPart="testlenke til annen part"
  />
);

export const visVisittkortForAnnenPartDerAktørIdErUkjent = () => (
  <VisittkortSakIndex
    fagsak={fagsak}
    fagsakPersoner={fagsakPersonerMedAnnenPart}
    familieHendelse={familieHendelse}
    lenkeTilAnnenPart="testlenke til annen part"
  />
);
