import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

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
  saksnummerString: '123456',
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
  fødselsdato: '1979-01-01',
  personnummer: '1234567',
  kjønn: { kode: KjønnkodeEnum.MANN, kodeverk: '' },
  personstatusType: {
    kode: personstatusType.BOSATT,
    kodeverk: 'PERSONSTATUS_TYPE',
  },
};

const fagsakPersonAnnenPart = {
  navn: 'Klara Ku',
  fødselsdato: '1980-01-01',
  personnummer: '6565656',
  kjønn: { kode: KjønnkodeEnum.KVINNE, kodeverk: '' },
  personstatusType: {
    kode: personstatusType.BOSATT,
    kodeverk: 'PERSONSTATUS_TYPE',
  },
  aktørId: 'test',
};

const fagsakPersonAnnenPartUkjent = {
  navn: 'Klara Ku',
  fødselsdato: '1980-01-01',
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

const fagsakPersonerMedAnnenPartUkjent = {
  bruker: fagsakPerson,
  annenPart: fagsakPersonAnnenPartUkjent,
};

export const visVisittkortDerEnIkkeHarAnnenPart = () => (
  <VisittkortSakIndex
    fagsak={fagsak}
    fagsakPersoner={fagsakPersonerUtenAnnenPart}
  />
);

export const visVisittkortNårEnHarPersonopplysningerForBeggeParter = () => (
  <VisittkortSakIndex
    fagsak={fagsak}
    fagsakPersoner={fagsakPersonerMedAnnenPart}
    lenkeTilAnnenPart="testlenke til annen part"
  />
);

export const visVisittkortForAnnenPartDerAktørIdErUkjent = () => (
  <VisittkortSakIndex
    fagsak={fagsak}
    fagsakPersoner={fagsakPersonerMedAnnenPartUkjent}
    lenkeTilAnnenPart="testlenke til annen part"
  />
);
